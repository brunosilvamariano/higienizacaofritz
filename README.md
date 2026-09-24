# Fritz Higienização — Next.js

Migração da landing page original (HTML/CSS/JS) para **Next.js + TypeScript (App Router)**, preservando o design e os comportamentos existentes.

## Comandos

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm start
```

## Estrutura

- `src/app`: rotas, metadata, robots e sitemap
- `src/components`: componentes estruturais
- `src/components/sections`: seções da landing page
- `src/client`: interações de navegador preservadas e modularizadas
- `src/styles`: CSS organizado por componentes e seções
- `src/config`: dados centrais de SEO/site e Schema.org
- `public/assets`: imagens, ícones, favicon e fontes locais

## URL do site

A URL canônica está centralizada em `src/config/site.ts`. Quando o domínio definitivo estiver ativo, basta alterar `SITE_URL` uma única vez.

## Vercel

O projeto é detectado automaticamente como Next.js. Não é necessário definir `outputDirectory` manualmente.
