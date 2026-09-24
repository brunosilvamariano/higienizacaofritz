# Migração técnica — Fritz Higienização

## O que mudou

- A página monolítica `index.html` foi dividida em componentes React/Next.js por seção.
- O projeto usa App Router com TypeScript para a estrutura principal.
- O CSS continua modular por componente e seção, agora carregado pelo pipeline do Next.js.
- As interações existentes foram preservadas em módulos de navegador dentro de `src/client`.
- SEO foi migrado para a Metadata API do Next.js.
- Schema.org foi centralizado em `src/config/structured-data.ts`.
- `robots.txt` e `sitemap.xml` agora são gerados pelo Next.js.
- Cabeçalhos de segurança saíram do `vercel.json` estático e foram para `next.config.ts`.
- A URL canônica está centralizada em `src/config/site.ts`.
- Assets antigos que não eram usados pela página foram removidos da nova versão.

## O que foi preservado

- Estrutura visual e classes CSS.
- Sidebar desktop/mobile.
- Botões flutuantes.
- Marquee.
- Carrossel de atendimentos.
- Resultados.
- Depoimentos.
- FAQ.
- Preloader.
- Fontes locais.
- Favicon, Open Graph e Schema local.
- URLs de WhatsApp, Instagram, Google Maps e avaliações.

## Deploy na Vercel

A Vercel deve detectar `Next.js` automaticamente. Não configure `Output Directory` manualmente.

Build command padrão: `npm run build`.

## Domínio

O arquivo recebido estava usando `https://higienizacaofritz.vercel.app` como URL canônica. Isso foi preservado e centralizado em `src/config/site.ts` para evitar alterar o SEO sem autorização. Quando o domínio definitivo estiver ativo, altere apenas `SITE_URL`.
