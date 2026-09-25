# Histórico de migração

O projeto original era uma landing page em HTML, CSS e JavaScript. A migração foi feita para Next.js + TypeScript preservando o design e os comportamentos existentes.

## Etapas concluídas

- App Router e TypeScript `strict`.
- Seções separadas em componentes React.
- SEO migrado para Metadata API, `robots.ts`, `sitemap.ts` e Schema.org.
- CSS preservado e reorganizado em tokens, base, componentes e seções.
- Interações antigas convertidas de JavaScript para TypeScript.
- Dados repetidos removidos dos componentes e centralizados em `config`/`content`.
- WhatsApp, Instagram, Google Maps, cidades e prova social centralizados.
- FAQ e serviços passam a alimentar também o Schema, evitando duas fontes de verdade.

## Deploy

Na Vercel use o preset Next.js e não configure `Output Directory` manualmente.

A URL canônica atual está em `src/config/seo.ts`. Quando o domínio definitivo for ativado, altere `siteUrl` nesse arquivo.
