// Converte as imagens exportadas do Miro (miro-export/img) para WebP em public/img
// e gera src/data/images.ts com as dimensões de cada uma.
import sharp from 'sharp';
import fs from 'fs';

const SRC = 'miro-export/img';
const OUT = 'public/img';

// id do item no Miro -> nome final
const map = {
  '3458764630093660243': 'diagramas/como-linguagens-funcionam',
  '3458764630200681623': 'diagramas/cache-aside',
  '3458764630083182541': 'diagramas/servicos-cloud-comparativo',
  '3458764629925395196': 'diagramas/clean-architecture',
  '3458764630089668615': 'diagramas/monolito-modular',
  '3458764631101287510': 'diagramas/microsservicos',
  '3458764631101598416': 'diagramas/microsservicos-animado',
  '3458764629925395127': 'badges/aws-cloud-practitioner',
  '3458764629925395283': 'badges/aws-solutions-architect-associate',
  '3458764629925395284': 'badges/aws-solutions-architect-professional',
  '3458764630833140126': 'livros/system-design-interview-1',
  '3458764630833140796': 'livros/system-design-interview-2',
  '3458764630833218555': 'livros/codigo-limpo',
  '3458764630832677613': 'livros/migrando-sistemas-monoliticos',
  '3458764630832676941': 'livros/criando-microsservicos',
  '3458764630833034297': 'livros/programador-pragmatico',
  '3458764630832507222': 'livros/domain-driven-design',
  '3458764630833034229': 'livros/refatoracao',
  '3458764630832934573': 'livros/aprenda-ddd',
  '3458764630832934339': 'livros/arquitetura-limpa',
  '3458764630833320233': 'livros/padroes-de-projeto',
  '3458764631102374475': 'livros/building-event-driven-microservices',
  '3458764630837720793': 'livros/fundamentos-arquitetura-software',
  '3458764630837720303': 'livros/arquitetura-partes-dificeis',
  '3458764630833569509': 'livros/homem-mais-rico-babilonia',
  '3458764630833687150': 'livros/segredos-mente-milionaria',
  '3458764630833954711': 'livros/pai-rico-pai-pobre',
  '3458764630834111129': 'livros/nada-pode-me-ferir',
  '3458764630834111492': 'livros/como-fazer-amigos',
};

const files = fs.readdirSync(SRC);
const dims = {};
for (const [id, name] of Object.entries(map)) {
  const file = files.find((f) => f === `image-${id}.png` || f.startsWith(`image-${id}.`));
  if (!file) { console.warn('faltando', id); continue; }
  const animated = file.endsWith('.gif');
  const out = `${OUT}/${name}.${animated ? 'gif' : 'webp'}`;
  fs.mkdirSync(out.slice(0, out.lastIndexOf('/')), { recursive: true });
  const maxW = name.startsWith('livros/') ? 480 : name.startsWith('badges/') ? 320 : 1600;
  if (animated) fs.copyFileSync(`${SRC}/${file}`, out);
  else await sharp(`${SRC}/${file}`).resize({ width: maxW, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  const m = await sharp(out).metadata();
  dims[name] = { src: '/' + out.replace(/^public\//, ''), width: m.width, height: m.pageHeight ?? m.height };
}

fs.writeFileSync(
  'src/data/images.ts',
  '// Gerado por scripts/optimize-images.mjs — não editar à mão.\n' +
    'export const images = ' + JSON.stringify(dims, null, 2) + ' as const;\n\n' +
    'export type ImageKey = keyof typeof images;\n',
);
console.log(Object.keys(dims).length, 'imagens');
