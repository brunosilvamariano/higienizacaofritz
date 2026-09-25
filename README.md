# Fritz Higienização — Next.js + TypeScript

Landing page institucional da Fritz, organizada como uma base profissional e reutilizável para manutenção e adaptação a outros clientes.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript em modo `strict`
- CSS local, sem framework visual
- Assets e fontes locais
- CI no GitHub Actions para typecheck e build
- Configuração de formatação compartilhada (`.editorconfig` + `.prettierrc.json`)

## Comandos

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run check
npm start
```

## Estrutura principal

```text
src/
├── app/              # rota, metadata, robots e sitemap
├── components/
│   ├── layout/       # sidebar, footer, preloader e CTAs globais
│   ├── runtime/      # inicialização de interações client-side
│   ├── sections/     # seções da landing page
│   └── ui/           # componentes visuais compartilhados
├── config/           # empresa, SEO e dados estruturados
├── content/          # serviços, avaliações, FAQ, resultados e navegação
├── interactions/     # comportamentos de navegador em TypeScript
├── lib/              # helpers reutilizáveis
├── styles/           # tokens, base, componentes e seções
└── types/            # contratos TypeScript do conteúdo
```

## Onde alterar dados da empresa

- Identidade, telefone, Instagram, endereço, Maps, cidades e nota do Google: `src/config/company.ts`
- URL canônica, title, description e imagem social: `src/config/seo.ts`
- Serviços: `src/content/services.ts`
- Avaliações: `src/content/reviews.ts`
- FAQ: `src/content/faq.ts`
- Resultados: `src/content/results.ts`
- Processo: `src/content/process.ts`
- Navegação: `src/content/navigation.ts`
- Cores e identidade visual: `src/styles/tokens.css`
- Imagens, fontes e favicon: `public/assets/`

## Qualidade

O workflow `.github/workflows/quality.yml` executa `npm ci`, `npm run typecheck` e `npm run build` em pushes e pull requests para `main`.

## Vercel

Use o preset **Next.js** e deixe os overrides de Build Command e Output Directory desativados. A Vercel detecta a saída do Next automaticamente.

## Documentação

- `docs/ARCHITECTURE.md`: decisões e responsabilidades de cada camada.
- `docs/ADAPTATION.md`: checklist para transformar esta base em outro site.
- `docs/MIGRATION.md`: histórico da migração do HTML/CSS/JS original.
