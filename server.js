const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const recipes = require('./recipes-data');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── JSON-based key store (no native deps) ───
const DB_PATH = path.join(__dirname, 'api_keys.json');

function loadKeys() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch {
    return [];
  }
}

function saveKeys(keys) {
  fs.writeFileSync(DB_PATH, JSON.stringify(keys, null, 2));
}

function seedKeys() {
  const keys = loadKeys();
  const seed = [
    { key: 'demo-filipino-recipes-v1', name: 'Demo User', email: null },
    { key: 'waiscart-filipino-recipes-2024', name: 'WaisCart App', email: null },
  ];
  let changed = false;
  for (const s of seed) {
    if (!keys.find(k => k.key === s.key)) {
      keys.push({
        api_key: s.key,
        name: s.name,
        email: s.email,
        created_at: new Date().toISOString(),
        requests_today: 0,
        last_request_date: null,
      });
      console.log(`🔑 Seeded key: ${s.key}`);
      changed = true;
    }
  }
  if (changed) saveKeys(keys);
  return keys;
}

let apiKeys = seedKeys();

// ─── Middleware ───
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
app.use(globalLimiter);

// ─── API Key Authentication ───
function authenticateAPIKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({
      status: 'error', code: 401,
      message: 'API key is required. Provide it in the X-API-Key header.'
    });
  }

  const record = apiKeys.find(k => k.api_key === apiKey);
  if (!record) {
    return res.status(403).json({
      status: 'error', code: 403,
      message: 'Invalid API key. Register at /api/register to get one.'
    });
  }

  const today = new Date().toISOString().split('T')[0];
  if (record.last_request_date === today && record.requests_today >= 100) {
    return res.status(429).json({
      status: 'error', code: 429,
      message: 'Daily limit reached (100 requests/day). Register for a new key or wait until tomorrow.'
    });
  }

  if (record.last_request_date === today) {
    record.requests_today++;
  } else {
    record.requests_today = 1;
    record.last_request_date = today;
  }
  saveKeys(apiKeys);

  req.apiKeyRecord = record;
  next();
}

// ─── Public routes ───
// Root serves the docs landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// JSON API info for developers
app.get('/api', (req, res) => {
  res.json({
    name: 'FilipinoRecipe API',
    version: '1.0.0',
    description: 'A comprehensive Filipino recipes API',
    docs: `${req.protocol}://${req.get('host')}/`,
    register: 'POST /api/register',
    base_url: `${req.protocol}://${req.get('host')}`,
    endpoints: {
      listAllRecipes: 'GET /api/recipes',
      getRecipeById: 'GET /api/recipes/:id',
      searchRecipes: 'GET /api/recipes/search?q=keyword',
      filterByCategory: 'GET /api/recipes/category/:category',
      randomRecipe: 'GET /api/recipes/random',
      categories: 'GET /api/categories'
    },
    authentication: 'Pass your API key in the X-API-Key header',
    rateLimit: '100 requests/day per key',
    demoKey: 'demo-filipino-recipes-v1'
  });
});

// Register for a new API key
app.post('/api/register', (req, res) => {
  const { name, email } = req.body;
  const apiKey = `fr_${uuidv4().replace(/-/g, '').substring(0, 24)}`;

  apiKeys.push({
    api_key: apiKey,
    name: name || 'Anonymous',
    email: email || null,
    created_at: new Date().toISOString(),
    requests_today: 0,
    last_request_date: null,
  });
  saveKeys(apiKeys);

  res.status(201).json({
    status: 'success',
    message: 'API key generated successfully',
    data: {
      api_key: apiKey,
      name: name || 'Anonymous',
      email: email || null,
      created_at: new Date().toISOString(),
      rate_limit: '100 requests/day',
      docs: `${req.protocol}://${req.get('host')}/docs`
    }
  });
});

// ─── Protected routes ───
app.use('/api', authenticateAPIKey);

app.get('/api/recipes', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const startIndex = (page - 1) * limit;
  const paginated = recipes.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(recipes.length / limit);
  res.json({ status: 'success', count: paginated.length, total: recipes.length, page, totalPages, data: paginated });
});

app.get('/api/recipes/search', (req, res) => {
  const query = req.query.q?.toLowerCase().trim();
  if (!query) return res.status(400).json({ status: 'error', code: 400, message: 'Search query parameter "q" is required' });
  const results = recipes.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.category.toLowerCase().includes(query) ||
    r.keyIngredients.some(ing => ing.toLowerCase().includes(query)) ||
    r.ingredients.some(ing => ing.toLowerCase().includes(query))
  );
  res.json({ status: 'success', query, count: results.length, data: results });
});

app.get('/api/recipes/random', (req, res) => {
  res.json({ status: 'success', data: recipes[Math.floor(Math.random() * recipes.length)] });
});

app.get('/api/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return res.status(404).json({ status: 'error', code: 404, message: `Recipe with id ${id} not found` });
  res.json({ status: 'success', data: recipe });
});

app.get('/api/recipes/category/:category', (req, res) => {
  const category = req.params.category;
  const normalized = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' & ');
  const results = recipes.filter(r =>
    r.category.toLowerCase() === category.toLowerCase() ||
    r.category.toLowerCase() === normalized.toLowerCase()
  );
  res.json({ status: 'success', category: normalized, count: results.length, data: results });
});

app.get('/api/categories', (req, res) => {
  const cats = [...new Set(recipes.map(r => r.category))];
  const categories = cats.map(cat => ({
    category: cat,
    count: recipes.filter(r => r.category === cat).length,
    recipes: recipes.filter(r => r.category === cat).map(r => ({ id: r.id, name: r.name }))
  }));
  res.json({ status: 'success', count: categories.length, data: categories });
});

// ─── Docs & static ───
app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

// ─── 404 & Error handlers ───
app.use((req, res) => {
  res.status(404).json({ status: 'error', code: 404, message: `Route ${req.method} ${req.path} not found` });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', code: 500, message: 'Internal server error' });
});

// ─── Start ───
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🍛 FilipinoRecipe API running on http://0.0.0.0:${PORT}`);
  console.log(`📖 Docs: http://localhost:${PORT}/docs`);
  console.log(`🔑 Keys: demo-filipino-recipes-v1, waiscart-filipino-recipes-2024`);
});