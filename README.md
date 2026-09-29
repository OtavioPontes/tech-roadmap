# Roadmap de Carreira — Software Engineer

Site do roadmap de Software Engineer (originalmente um board no Miro), com tópicos em 3 etapas, cursos, artigos, vídeos, livros e referências.

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
