/**
 * Filipino Recipe Database — 20 curated Filipino dishes
 * Structured to look like it came from a real external API
 */
const recipes = [
  // ─── 🐔 CHICKEN (5) ───
  {
    id: 1,
    name: "Chicken Adobo",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "40 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    keyIngredients: ["Chicken", "soy sauce", "vinegar", "garlic", "pepper", "bay leaf"],
    ingredients: [
      "1 kg chicken, cut into serving pieces",
      "1/2 cup soy sauce",
      "1/3 cup vinegar",
      "6 cloves garlic, crushed",
      "1 tsp whole peppercorns",
      "3 bay leaves",
      "1 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "In a bowl, combine chicken, soy sauce, garlic, and peppercorns. Marinate for 30 minutes.",
      "Heat oil in a pot over medium heat. Brown the chicken pieces on all sides.",
      "Pour in the marinade and water. Add bay leaves. Bring to a boil.",
      "Lower heat, cover, and simmer for 30 minutes or until chicken is tender.",
      "Add vinegar. Do not stir. Let it boil for 5 minutes without stirring.",
      "Stir and continue cooking until sauce thickens. Serve with steamed rice."
    ],
    nutrition: { calories: 420, protein: "35g", carbs: "8g", fat: "28g" }
  },
  {
    id: 2,
    name: "Chicken Tinola",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80",
    keyIngredients: ["Chicken", "ginger", "garlic", "sayote/papaya", "fish sauce", "dahon ng sili"],
    ingredients: [
      "1 kg chicken, cut into pieces",
      "1 thumb-sized ginger, julienned",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "1 sayote (chayote), cubed",
      "2 cups water or chicken broth",
      "2 tbsp fish sauce (patis)",
      "1 bunch chili leaves (dahon ng sili)",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic, onion, and ginger until fragrant.",
      "Add chicken and cook until lightly browned.",
      "Pour in fish sauce and stir for 1 minute.",
      "Add water or broth. Bring to a boil, then lower heat and simmer for 20 minutes.",
      "Add sayote and cook until tender (about 8-10 minutes).",
      "Season with salt and pepper if needed. Add chili leaves, turn off heat, and cover for 2 minutes. Serve hot."
    ],
    nutrition: { calories: 380, protein: "32g", carbs: "12g", fat: "22g" }
  },
  {
    id: 3,
    name: "Chicken Fried Rice",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 3,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    keyIngredients: ["Chicken", "rice", "garlic", "egg", "soy sauce", "scallions"],
    ingredients: [
      "2 cups cooked cold rice (day-old works best)",
      "1 cup cooked chicken, shredded or diced",
      "3 cloves garlic, minced",
      "2 eggs, beaten",
      "2 tbsp soy sauce",
      "1/2 tsp sesame oil (optional)",
      "3 stalks scallions, chopped",
      "2 tbsp cooking oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a wok or large pan over high heat.",
      "Sauté garlic until golden brown.",
      "Add chicken and stir-fry for 2 minutes. Push to the side.",
      "Pour beaten eggs into the pan and scramble until cooked.",
      "Add rice, breaking up any clumps. Stir-fry for 3-4 minutes.",
      "Drizzle soy sauce and sesame oil. Toss until evenly colored.",
      "Season with salt and pepper. Top with scallions. Serve hot."
    ],
    nutrition: { calories: 450, protein: "28g", carbs: "45g", fat: "18g" }
  },
  {
    id: 4,
    name: "Chicken Arroz Caldo",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "45 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-16297216727-3715c0ab0a1e?w=600&q=80",
    keyIngredients: ["Chicken", "rice", "ginger", "garlic", "fish sauce", "calamansi", "egg"],
    ingredients: [
      "500g chicken, cut into pieces",
      "1 cup glutinous rice (malagkit)",
      "1 thumb ginger, julienned",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "6 cups water or chicken broth",
      "2 tbsp fish sauce (patis)",
      "2 hard-boiled eggs, sliced",
      "Calamansi or lemon wedges",
      "Fried garlic, scallions for garnish"
    ],
    instructions: [
      "Sauté garlic, onion, and ginger in oil until fragrant.",
      "Add chicken and cook until lightly browned.",
      "Pour in fish sauce and stir. Add rice and water. Bring to a boil.",
      "Lower heat and simmer for 30-40 minutes, stirring occasionally, until rice is soft and porridge-like.",
      "Season with salt and pepper. Adjust consistency with more water if needed.",
      "Serve in bowls topped with sliced egg, fried garlic, scallions, and calamansi on the side."
    ],
    nutrition: { calories: 400, protein: "30g", carbs: "50g", fat: "12g" }
  },
  {
    id: 5,
    name: "Chicken Sotanghon",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    keyIngredients: ["Chicken", "glass noodles", "garlic", "onion", "patis", "carrots"],
    ingredients: [
      "250g chicken breast, shredded",
      "200g sotanghon (glass noodles), soaked in water",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "1 carrot, julienned",
      "1/2 cup cabbage, shredded",
      "2 tbsp fish sauce (patis)",
      "4 cups chicken broth",
      "2 tbsp cooking oil",
      "Scallions and fried garlic for garnish"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic and onion until fragrant.",
      "Add shredded chicken and cook for 2 minutes.",
      "Pour in fish sauce and broth. Bring to a boil.",
      "Add soaked sotanghon noodles. Cook for 5-7 minutes until tender.",
      "Add carrots and cabbage. Cook for 2 more minutes.",
      "Season with salt and pepper. Garnish with scallions and fried garlic. Serve hot."
    ],
    nutrition: { calories: 320, protein: "22g", carbs: "35g", fat: "10g" }
  },

  // ─── 🥩 PORK (5) ───
  {
    id: 6,
    name: "Pork Sinigang",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "50 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    keyIngredients: ["Pork belly", "sinigang mix", "kangkong", "onion", "tomato", "sitaw"],
    ingredients: [
      "500g pork belly, cubed",
      "1 packet sinigang sa sampaloc mix",
      "1 bunch kangkong (water spinach)",
      "1 onion, quartered",
      "2 tomatoes, quartered",
      "100g sitaw (string beans), cut into 2-inch pieces",
      "1 radish (labanos), sliced",
      "2-3 green chili peppers (siling pang-sigang)",
      "6 cups water",
      "Fish sauce (patis) to taste"
    ],
    instructions: [
      "Boil water in a pot. Add pork belly and onion. Simmer for 30-40 minutes until pork is tender.",
      "Add tomatoes and radish. Cook for 5 minutes.",
      "Pour in sinigang mix. Stir until dissolved.",
      "Add sitaw and green chilies. Cook for 3 minutes.",
      "Add kangkong. Turn off heat. Cover and let residual heat cook the leaves.",
      "Season with fish sauce. Serve hot with steamed rice."
    ],
    nutrition: { calories: 480, protein: "25g", carbs: "15g", fat: "35g" }
  },
  {
    id: 7,
    name: "Pork Menudo",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 6,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    keyIngredients: ["Pork kasim", "tomato sauce", "liver", "potato", "carrot", "bell pepper"],
    ingredients: [
      "500g pork kasim (shoulder), cubed",
      "200g pork liver, cubed",
      "1 cup tomato sauce",
      "2 potatoes, cubed",
      "1 carrot, cubed",
      "1 red bell pepper, diced",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "1/2 cup water",
      "2 tbsp cooking oil",
      "Salt, pepper, and sugar to taste"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic and onion until soft.",
      "Add pork and cook until browned on all sides.",
      "Pour in tomato sauce and water. Bring to a boil, then simmer for 25 minutes until pork is tender.",
      "Add potatoes and carrots. Cook for 8 minutes.",
      "Add liver and bell pepper. Cook for 5 more minutes.",
      "Season with salt, pepper, and a pinch of sugar. Serve hot."
    ],
    nutrition: { calories: 440, protein: "30g", carbs: "20g", fat: "28g" }
  },
  {
    id: 8,
    name: "Pork Binagoongan",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    keyIngredients: ["Pork belly", "bagoong alamang", "garlic", "onion", "vinegar", "siling pang-sigang"],
    ingredients: [
      "500g pork belly, sliced into bite-sized pieces",
      "3 tbsp bagoong alamang (shrimp paste)",
      "5 cloves garlic, minced",
      "1 onion, sliced",
      "2 tbsp vinegar",
      "3 green chili peppers (siling pang-sigang)",
      "1/2 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pan. Sauté garlic and onion until fragrant.",
      "Add pork belly and cook until browned.",
      "Add bagoong alamang. Stir well and cook for 2 minutes.",
      "Pour in water and vinegar. Bring to a boil.",
      "Lower heat and simmer for 20 minutes until pork is tender and sauce thickens.",
      "Add green chilies. Cook for 2 more minutes. Serve with steamed rice."
    ],
    nutrition: { calories: 520, protein: "22g", carbs: "6g", fat: "45g" }
  },
  {
    id: 9,
    name: "Lechon Kawali",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "10 min (+ overnight marination)",
    cookTime: "30 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80",
    keyIngredients: ["Pork liempo", "salt", "pepper", "garlic", "water"],
    ingredients: [
      "1 kg pork liempo (belly), whole slab",
      "1 tbsp salt",
      "1 tsp ground pepper",
      "6 cloves garlic, crushed",
      "4 cups water",
      "3 bay leaves",
      "1 tsp whole peppercorns",
      "Cooking oil for deep frying"
    ],
    instructions: [
      "Boil water with salt, pepper, garlic, bay leaves, and peppercorns.",
      "Add pork belly and boil for 25-30 minutes until tender.",
      "Remove pork and pat dry. Let it cool, then refrigerate uncovered overnight (this dries the skin).",
      "Cut pork into serving pieces.",
      "Heat oil in a deep pan. Deep fry pieces until golden and crispy (about 8-10 minutes).",
      "Drain on paper towels. Serve with lechon sauce or vinegar dipping sauce."
    ],
    nutrition: { calories: 650, protein: "28g", carbs: "2g", fat: "58g" }
  },
  {
    id: 10,
    name: "Pork Humba",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "50 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80",
    keyIngredients: ["Pork belly", "soy sauce", "vinegar", "garlic", "laurel", "saging na saba"],
    ingredients: [
      "500g pork belly, cubed",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "6 cloves garlic, crushed",
      "3 bay leaves (laurel)",
      "2 saging na saba (plantain bananas), sliced",
      "1/2 tsp whole peppercorns",
      "1 cup water",
      "1 tbsp cooking oil",
      "1 tsp sugar (optional)"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic until golden.",
      "Add pork and cook until lightly browned.",
      "Pour in soy sauce, vinegar, and water. Add bay leaves and peppercorns.",
      "Bring to a boil, then lower heat and simmer for 40 minutes until pork is very tender.",
      "Add saba bananas and sugar. Cook for 5 more minutes.",
      "Adjust seasoning. Serve hot with steamed rice."
    ],
    nutrition: { calories: 510, protein: "24g", carbs: "18g", fat: "38g" }
  },

  // ─── 🐟 FISH & SEAFOOD (3) ───
  {
    id: 11,
    name: "Daing na Bangus",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min (+ 2hr marination)",
    cookTime: "15 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    keyIngredients: ["Bangus", "vinegar", "garlic", "pepper", "oil"],
    ingredients: [
      "1 large bangus (milkfish), butterflied",
      "1/2 cup vinegar",
      "6 cloves garlic, crushed",
      "1 tsp ground pepper",
      "1 tsp salt",
      "Cooking oil for frying"
    ],
    instructions: [
      "Combine vinegar, garlic, pepper, and salt in a bowl.",
      "Marinate the butterflied bangus in the mixture for at least 2 hours.",
      "Heat oil in a pan over medium heat.",
      "Fry the bangus (skin side down first) for 6-8 minutes per side until golden and crispy.",
      "Drain on paper towels. Serve with steamed rice and vinegar dipping sauce."
    ],
    nutrition: { calories: 350, protein: "32g", carbs: "3g", fat: "22g" }
  },
  {
    id: 12,
    name: "Paksiw na Bangus",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 3,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    keyIngredients: ["Bangus", "vinegar", "ginger", "garlic", "siling pang-sigang", "ampalaya"],
    ingredients: [
      "1 medium bangus (milkfish), sliced into serving pieces",
      "1 cup vinegar",
      "1 thumb ginger, sliced",
      "4 cloves garlic, crushed",
      "2 green chili peppers (siling pang-sigang)",
      "1 small ampalaya (bitter gourd), sliced",
      "1 cup water",
      "1 tsp salt and pepper"
    ],
    instructions: [
      "In a pot, combine vinegar, water, ginger, garlic, salt, and pepper. Bring to a boil.",
      "Gently add bangus pieces. Do not stir (stirring breaks the fish).",
      "Lower heat and simmer for 10 minutes.",
      "Add green chilies and ampalaya. Cook for 5 more minutes.",
      "Serve hot with steamed rice."
    ],
    nutrition: { calories: 280, protein: "30g", carbs: "5g", fat: "15g" }
  },
  {
    id: 13,
    name: "Sweet & Sour Fish",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 3,
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80",
    keyIngredients: ["Bangus fillet", "flour", "tomato sauce", "vinegar", "sugar", "bell pepper"],
    ingredients: [
      "500g bangus fillet, sliced into strips",
      "1 cup all-purpose flour",
      "1 egg, beaten",
      "1/2 cup tomato sauce",
      "3 tbsp vinegar",
      "2 tbsp sugar",
      "1/2 cup water",
      "1 red bell pepper, diced",
      "1 green bell pepper, diced",
      "1 onion, sliced",
      "Salt and pepper to taste",
      "Cooking oil for frying"
    ],
    instructions: [
      "Season fish strips with salt and pepper. Dip in beaten egg, then coat with flour.",
      "Deep fry until golden brown. Set aside.",
      "In a separate pan, sauté onion and bell peppers.",
      "Add tomato sauce, vinegar, sugar, and water. Simmer for 5 minutes until sauce thickens.",
      "Pour sauce over fried fish or serve on the side. Serve hot."
    ],
    nutrition: { calories: 380, protein: "28g", carbs: "30g", fat: "16g" }
  },

  // ─── 🥬 VEGETABLES (3) ───
  {
    id: 14,
    name: "Pinakbet",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    keyIngredients: ["Kalabasa", "sitaw", "talong", "ampalaya", "okra", "bagoong", "garlic", "onion", "tomato"],
    ingredients: [
      "1 cup kalabasa (pumpkin), cubed",
      "100g sitaw (string beans), cut into 2-inch pieces",
      "1 talong (eggplant), sliced",
      "1 small ampalaya (bitter gourd), sliced",
      "100g okra, halved",
      "3 tbsp bagoong isda (fermented fish) or bagoong alamang",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "1/2 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pan. Sauté garlic, onion, and tomatoes until soft.",
      "Add bagoong and cook for 2 minutes.",
      "Add kalabasa and water. Cover and cook for 5 minutes.",
      "Add sitaw, talong, ampalaya, and okra. Do not stir too much.",
      "Cover and cook for 8-10 minutes until vegetables are tender.",
      "Gently toss. Serve hot with steamed rice."
    ],
    nutrition: { calories: 180, protein: "8g", carbs: "22g", fat: "8g" }
  },
  {
    id: 15,
    name: "Ginisang Munggo",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min (+ overnight soaking)",
    cookTime: "40 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    keyIngredients: ["Munggo", "garlic", "onion", "tomato", "chicharon/bagnet", "patis"],
    ingredients: [
      "1 cup munggo (mung beans), rinsed",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1/2 cup crushed chicharon or bagnet",
      "2 tbsp fish sauce (patis)",
      "4 cups water",
      "2 tbsp cooking oil",
      "1/2 cup malunggay leaves or kangkong (optional)"
    ],
    instructions: [
      "Boil munggo in water until soft (about 30 minutes). Mash some beans for thicker texture. Set aside.",
      "In a separate pot, heat oil and sauté garlic, onion, and tomatoes.",
      "Add cooked munggo and fish sauce. Stir well.",
      "Add malunggay leaves if using. Cook for 3 minutes.",
      "Top with crushed chicharon or bagnet. Serve hot with steamed rice."
    ],
    nutrition: { calories: 310, protein: "18g", carbs: "35g", fat: "12g" }
  },
  {
    id: 16,
    name: "Adobong Kangkong",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    keyIngredients: ["Kangkong", "soy sauce", "vinegar", "garlic", "siling labuyo"],
    ingredients: [
      "2 bunches kangkong (water spinach), cut into 3-inch pieces",
      "3 tbsp soy sauce",
      "2 tbsp vinegar",
      "4 cloves garlic, minced",
      "3 siling labuyo (bird's eye chili), chopped",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pan. Sauté garlic until golden.",
      "Add siling labuyo and cook for 30 seconds.",
      "Add kangkong stalks first (cook for 1 minute), then add leaves.",
      "Pour in soy sauce and vinegar. Toss quickly.",
      "Cook for 2 minutes until kangkong is wilted but still vibrant. Serve immediately."
    ],
    nutrition: { calories: 120, protein: "5g", carbs: "8g", fat: "8g" }
  },

  // ─── 🥟 BREAKFAST & SILOG (2) ───
  {
    id: 17,
    name: "Tapsilog",
    category: "Breakfast & Silog",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "10 min (+ overnight marination)",
    cookTime: "20 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
    keyIngredients: ["Beef tapa", "garlic rice", "egg", "soy sauce", "vinegar", "garlic"],
    ingredients: [
      "300g beef sirloin, thinly sliced",
      "3 tbsp soy sauce",
      "2 tbsp vinegar",
      "4 cloves garlic, crushed",
      "1 tsp sugar",
      "1/2 tsp ground pepper",
      "2 cups cooked rice (for garlic rice)",
      "4 cloves garlic, fried (for garlic rice)",
      "2 eggs",
      "Cooking oil"
    ],
    instructions: [
      "Marinate beef in soy sauce, vinegar, garlic, sugar, and pepper. Refrigerate overnight.",
      "For garlic rice: stir-fry cold rice with fried garlic until hot and fragrant.",
      "Heat oil in a pan. Fry marinated beef until cooked and slightly caramelized (about 3-4 minutes per side).",
      "Fry eggs sunny-side up or to your preference.",
      "Serve beef tapa with garlic rice and fried egg. Add vinegar dipping sauce on the side."
    ],
    nutrition: { calories: 580, protein: "35g", carbs: "55g", fat: "22g" }
  },
  {
    id: 18,
    name: "Champorado",
    category: "Breakfast & Silog",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "5 min",
    cookTime: "25 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    keyIngredients: ["Glutinous rice", "cocoa powder", "sugar", "milk", "tuyo"],
    ingredients: [
      "1 cup glutinous rice (malagkit)",
      "1/2 cup cocoa powder (tablea de cacao preferred)",
      "1/2 cup sugar (adjust to taste)",
      "4 cups water",
      "1 cup evaporated milk",
      "Dried fish (tuyo) on the side"
    ],
    instructions: [
      "In a pot, combine water and glutinous rice. Bring to a boil.",
      "Lower heat and simmer, stirring occasionally, until rice is soft and porridge-like (about 20 minutes).",
      "Add cocoa powder and sugar. Stir until well combined and smooth.",
      "Cook for 5 more minutes, stirring constantly to prevent burning.",
      "Serve in bowls. Top with evaporated milk. Best paired with crispy fried tuyo (dried fish)."
    ],
    nutrition: { calories: 380, protein: "10g", carbs: "65g", fat: "10g" }
  },

  // ─── 🍜 NOODLES & SNACKS (2) ───
  {
    id: 19,
    name: "Pancit Canton",
    category: "Noodles & Snacks",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
    keyIngredients: ["Pancit canton noodles", "soy sauce", "garlic", "onion", "carrots", "sayote", "sausage"],
    ingredients: [
      "500g pancit canton noodles",
      "3 tbsp soy sauce",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "1 carrot, julienned",
      "1 sayote (chayote), julienned",
      "2 Chinese sausages (chorizo de bilbao), sliced",
      "1 cup chicken broth",
      "2 tbsp cooking oil",
      "Calamansi wedges for serving"
    ],
    instructions: [
      "Soak pancit canton noodles in water until softened. Drain and set aside.",
      "Heat oil in a wok. Sauté garlic and onion.",
      "Add sausage slices and cook for 2 minutes.",
      "Add carrots and sayote. Stir-fry for 2 minutes.",
      "Add noodles, soy sauce, and chicken broth. Toss continuously until noodles are cooked and sauce is absorbed.",
      "Season with salt and pepper. Serve with calamansi wedges."
    ],
    nutrition: { calories: 400, protein: "15g", carbs: "55g", fat: "14g" }
  },
  {
    id: 20,
    name: "Lumpiang Shanghai",
    category: "Noodles & Snacks",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "30 min",
    cookTime: "15 min",
    servings: "6 (makes ~30 pieces)",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
    keyIngredients: ["Ground pork", "carrots", "onion", "garlic", "lumpia wrapper", "soy sauce"],
    ingredients: [
      "500g ground pork",
      "1 carrot, minced",
      "1 onion, minced",
      "4 cloves garlic, minced",
      "1 egg",
      "2 tbsp soy sauce",
      "1 package lumpia wrapper (spring roll wrappers)",
      "Salt and pepper to taste",
      "Cooking oil for deep frying",
      "Sweet chili sauce for dipping"
    ],
    instructions: [
      "Combine ground pork, carrot, onion, garlic, egg, soy sauce, salt, and pepper. Mix well.",
      "Place a spoonful of filling on a lumpia wrapper. Roll tightly, folding in the sides. Seal the edge with water.",
      "Repeat until all filling is used.",
      "Heat oil in a deep pan. Fry lumpia in batches until golden brown (about 5-6 minutes).",
      "Drain on paper towels. Serve with sweet chili sauce or banana ketchup."
    ],
    nutrition: { calories: 320, protein: "18g", carbs: "22g", fat: "18g" }
  }
];

module.exports = recipes;