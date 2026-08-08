const http = require('http');
function get(path, h) {
  return new Promise(r => {
    http.get({hostname:'localhost',port:3000,path,headers:h||{}}, res => { let d=''; res.on('data',c=>d+=c); res.on('end',()=>{ try { r({s:res.statusCode,body:JSON.parse(d)}); } catch { r({s:res.statusCode,body:d}); } }); });
  });
}
function post(path, b) {
  return new Promise(r => {
    const d=JSON.stringify(b); const o={hostname:'localhost',port:3000,path,method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(d)}};
    const req=http.request(o,res=>{let x='';res.on('data',c=>x+=c);res.on('end',()=>{try{r({s:res.statusCode,body:JSON.parse(x)})}catch{r({s:res.statusCode,body:x})}});});
    req.on('error',e=>r({s:0,error:e.message})); req.write(d); req.end();
  });
}
async function main() {
  let ok=0,fail=0,r;
  r=await get('/'); if(r.s===200&&typeof r.body==='string') ok++; else {fail++;console.log('FAIL root',r.s);}
  r=await get('/api'); if(r.s===200&&r.body.name==='FilipinoRecipe API') ok++; else {fail++;console.log('FAIL /api');}
  r=await post('/api/register',{name:'V'}); if(r.s===201) ok++; else {fail++;console.log('FAIL register',r.s);}
  const key=r.body?.data?.api_key;
  r=await get('/api/recipes',{'X-API-Key':key}); if(r.s===200&&r.body.total===20) ok++; else {fail++;console.log('FAIL recipes',r.s);}
  r=await get('/api/recipes/1',{'X-API-Key':key}); if(r.s===200&&r.body.data.name==='Chicken Adobo') ok++; else {fail++;console.log('FAIL recipe/1');}
  r=await get('/api/recipes/search?q=sinigang',{'X-API-Key':key}); if(r.s===200&&r.body.count===1) ok++; else {fail++;console.log('FAIL search');}
  r=await get('/api/recipes/category/chicken',{'X-API-Key':key}); if(r.s===200&&r.body.count===5) ok++; else {fail++;console.log('FAIL category');}
  r=await get('/api/recipes/random',{'X-API-Key':key}); if(r.s===200&&r.body.data?.name) ok++; else {fail++;console.log('FAIL random');}
  r=await get('/api/categories',{'X-API-Key':key}); if(r.s===200&&r.body.count===6) ok++; else {fail++;console.log('FAIL categories',r.body?.count);}
  r=await get('/api/recipes'); if(r.s===401) ok++; else {fail++;console.log('FAIL no-key');}
  r=await get('/api/recipes',{'X-API-Key':'bad'}); if(r.s===403) ok++; else {fail++;console.log('FAIL bad-key');}
  r=await get('/api/recipes',{'X-API-Key':'waiscart-filipino-recipes-2024'}); if(r.s===200&&r.body.total===20) ok++; else {fail++;console.log('FAIL waiscart');}
  r=await get('/api/recipes',{'X-API-Key':key});
  const noNutrition=r.body.data.every(rec=>!rec.nutrition);
  if(noNutrition) ok++; else {fail++;console.log('FAIL nutrition still present');}
  const allImages=r.body.data.every(rec=>rec.image?.startsWith('https://'));
  if(allImages) ok++; else {fail++;console.log('FAIL images missing');}
  const goodSources=r.body.data.every(rec=>rec.image?.includes('wikimedia.org')||rec.image?.includes('unsplash.com'));
  if(goodSources) ok++; else {fail++;console.log('FAIL bad image sources');}
  console.log(`VERIFY ${ok}/${ok+fail} passed`);
  process.exit(fail>0?1:0);
}
main();