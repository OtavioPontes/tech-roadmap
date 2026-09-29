import fs from 'fs';
const tok = fs.readFileSync('.env','utf8').match(/^MIRO_TOKEN=(.*)$/m)[1].trim().replace(/"/g,'');
const it = JSON.parse(fs.readFileSync('miro-export/items.json'));
fs.mkdirSync('miro-export/img',{recursive:true});
const imgs = it.filter(i=>i.type=='image'||i.type=='embed');
await Promise.all(imgs.map(async i=>{
  const src = i.type=='image'? i.data.imageUrl : i.data.previewUrl; if(!src) return;
  try{
    const j = await (await fetch(src.replace('format=preview','format=original'),{headers:{Authorization:'Bearer '+tok}})).json();
    const r = await fetch(j.url); const ct=r.headers.get('content-type')||'';
    const ext = ct.includes('png')?'png':ct.includes('gif')?'gif':ct.includes('svg')?'svg':ct.includes('webp')?'webp':'jpg';
    fs.writeFileSync(`miro-export/img/${i.type}-${i.id}.${ext}`, Buffer.from(await r.arrayBuffer()));
  }catch(e){console.log('fail',i.id,e.message)}
}));
console.log(fs.readdirSync('miro-export/img').length);
