import fs from 'fs';
const tok = fs.readFileSync('.env','utf8').match(/^MIRO_TOKEN=(.*)$/m)[1].trim().replace(/"/g,'');
const r = await fetch('https://api.miro.com/v1/boards/uXjVGVRI8s0%3D/widgets/',{headers:{Authorization:'Bearer '+tok}});
const j = await r.json();
fs.writeFileSync('miro-export/widgets-v1.json',JSON.stringify(j.data,null,1));
const c={}; j.data.forEach(i=>c[i.type]=(c[i.type]||0)+1); console.log(j.data.length,c);
const p=j.data.filter(w=>w.type=='preview'); console.log(p.filter(w=>w.url).length,'previews with url');
