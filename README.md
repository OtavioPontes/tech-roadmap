# Otávio Pontes — site pessoal + roadmap

Site pessoal (home com experiência, stack, projetos e contato, no visual do portfólio antigo) e o roadmap de Software Engineer que eu sigo nos meus estudos (originalmente um board no Miro), com tópicos em 3 etapas, cursos, artigos, vídeos, livros e referências.

- `/` — home pessoal, com destaque para o que estou estudando agora
- `/roadmap` — o roadmap completo; `/topicos/<slug>` — cada tópico
- `/en/...` — versão em inglês (`/en/roadmap`, `/en/topics/<slug>`, `/en/courses`...), com seletor PT/EN no header

## Idiomas (PT/EN)

- Rotas: `src/app/(pt)/` (raiz) e `src/app/en/`, cada uma com seu root layout (`<html lang>` correto). Os arquivos de rota são finos: chamam as views de `src/views/` com o `lang`. Ao criar uma página nova, crie a view e uma rota em cada idioma, e registre o caminho em `src/i18n/config.ts`.
- Textos da interface: `src/i18n/ui.ts`.
- Conteúdo do roadmap e da biblioteca: continua em português em `src/data/`; a tradução fica em `src/i18n/content-en.ts` (chave = texto exato em PT). Se mudar um texto em PT, atualize a chave lá. Para listar o que está sem tradução: `I18N_DEBUG=1 npm run build`.
- Conteúdo pessoal (`profile.ts`) já guarda os textos como `{ pt, en }`.

Next.js 16 (App Router) + Tailwind CSS 4. Todas as páginas são geradas estaticamente.

## Rodando localmente

```bash
npm install
npm run dev   # http://localhost:3000
```

## Onde fica o conteúdo

Todo o conteúdo está em `src/data/`. Para mudar o site, basta editar esses arquivos:

| Arquivo | O que tem |
| --- | --- |
| `profile.ts` | Conteúdo pessoal da home (baseado no CV, em PT e EN): perfil, bio, experiência, formação, cursos, idiomas, stack, projetos e `studyingNow` (slugs dos tópicos em destaque como "estudando agora") |
| `roadmap.ts` | As 3 etapas e seus tópicos: resumo, subtópicos, "escolha um(a)", exemplos, diagramas, imagens, cursos, artigos, vídeos e livros de cada tópico |
| `library.ts` | Livros, treinamentos completos, certificações, pessoas de referência, blogs e newsletters |
| `images.ts` | **Gerado** por `scripts/optimize-images.mjs` — não editar à mão |
| `types.ts` | Tipos de todos os dados acima |

- **Novo artigo em um tópico:** adicione um item em `articles` do tópico em `roadmap.ts`. Ele aparece automaticamente em `/artigos`.
- **Novo vídeo:** adicione em `videos` usando o ID do YouTube (`yt("ID", "Título")`). Ele aparece também em `/videos`.
- **Novo tópico:** adicione um objeto no array da etapa. A ordem do array é a ordem do roadmap, e o `slug` vira a URL `/topicos/<slug>`.
- **Diagramas** (cache, filas, N+1, pirâmide de testes) são componentes em `src/components/diagrams.tsx`.

## Imagens

As imagens ficam em `public/img/` (WebP otimizado). Para adicionar uma nova:

1. coloque o arquivo em `public/img/...`, ou
2. se ela vier do Miro, adicione o id do item no mapa de `scripts/optimize-images.mjs` e rode `node scripts/optimize-images.mjs`.

## Reexportar do Miro

Os scripts em `scripts/` leem `MIRO_TOKEN` do `.env` (que não vai para o git) e salvam os dados brutos em `miro-export/` (também ignorado):

```bash
node scripts/miro-fetch-items.mjs    # itens e conectores (API v2)
node scripts/miro-fetch-links.mjs    # URLs dos link previews (só a API v1 retorna)
node scripts/miro-fetch-images.mjs   # imagens em resolução original
node scripts/optimize-images.mjs     # converte para public/img e gera src/data/images.ts
```

O site **não** lê o Miro em tempo de build: o conteúdo foi curado manualmente para `src/data/`. Os scripts servem de referência na hora de sincronizar mudanças do board.

## Deploy na Vercel (subdomínio)

1. Suba o repositório no GitHub e importe o projeto na Vercel (o framework é detectado automaticamente).
2. Em **Settings → Domains**, adicione `roadmap.otaviopontes.com` (ou o subdomínio que preferir).
3. Se o DNS de `otaviopontes.com` já está na Vercel, o subdomínio é configurado sozinho. Se não, crie um `CNAME roadmap → cname.vercel-dns.com`.
4. Se usar outro subdomínio, defina a env var `NEXT_PUBLIC_SITE_URL` (usada nas metatags).

Não é preciso configurar `MIRO_TOKEN` na Vercel.

## Deploy no Cloudflare Workers

O deploy atual roda no Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare), configurado automaticamente pelo build do Cloudflare (sem `wrangler.jsonc` no repositório).

- **Não use `export const dynamicParams = false`** nas rotas dinâmicas: sem incremental cache configurado, o OpenNext não encontra as páginas pré-renderizadas e responde 404 para todas elas.
- Para testar localmente como no Cloudflare, é preciso Node 22+ (`npx @opennextjs/cloudflare migrate`, depois `npm run preview`).
