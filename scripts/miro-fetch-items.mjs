import fs from 'fs';
const tok = fs.readFileSync('.env','utf8').match(/^MIRO_TOKEN=(.*)$/m)[1].trim().replace(/"/g,'');
const B = 'https://api.miro.com/v2/boards/uXjVGVRI8s0%3D';
const get = async u => (await fetch(u,{headers:{Authorization:'Bearer '+tok}})).json();
async function all(p){ let out=[],cur; do{ const j=await get(`${B}/${p}?limit=50`+(cur?`&cursor=${encodeURIComponent(cur)}`:'')); out.push(...j.data); cur=j.cursor;}while(cur); return out;}
const items=await all('items'), conns=await all('connectors');
fs.writeFileSync('miro-export/items.json',JSON.stringify(items,null,1));
fs.writeFileSync('miro-export/connectors.json',JSON.stringify(conns,null,1));
const c={}; items.forEach(i=>c[i.type]=(c[i.type]||0)+1); console.log(items.length,conns.length,c);
