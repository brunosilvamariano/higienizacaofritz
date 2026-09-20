# Fritz Higienização e Impermeabilização

Site estático e responsivo adaptado para a Fritz Higienização e Impermeabilização, preservando a arquitetura reutilizável da base. O projeto foi organizado para funcionar sem CDN: fontes, imagens e identidade visual ficam locais.

## Estrutura

- `index.html` — documento principal e semântica da página.
- `assets/css/main.css` — base global e utilidades.
- `assets/css/design-system.css` — tokens compartilhados de cor, tipografia, raio, sombra, espaçamento e transições.
- `assets/css/components/` — sidebar, CTA flutuante e componentes reutilizáveis.
- `assets/css/sections/` — um stylesheet por seção.
- `assets/js/components/` — comportamento dos componentes.
- `assets/js/sections/` — comportamento específico de cada seção.
- `assets/fonts/`, `assets/images/`, `assets/brand/` — recursos locais.
- `scripts/` — servidor local e build.
- `docs/` — documentação técnica, reutilização, publicação e auditoria.

## Requisitos

Node.js LTS atual. Não há dependências npm de runtime.

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`. A pasta `dist/` não deve ser editada manualmente nem versionada.

## Antes de reutilizar para um cliente

1. Troque nome, textos, telefone, WhatsApp, redes sociais, endereço e imagens.
2. Atualize `<title>`, description, author, `og:*` e Twitter metadata.
3. Defina domínio final e então inclua `canonical`, `og:url` e uma imagem social absoluta.
4. Configure Google Analytics/Ads, Meta Pixel e consentimento somente com IDs reais e conforme a necessidade do cliente.
5. Revise Política de Privacidade, cookies e base legal aplicável ao tratamento de dados.
6. Rode `npm run build` e a auditoria descrita em `docs/AUDIT.md`.
7. Teste teclado, mobile, links externos, WhatsApp, formulário/contato e todos os breakpoints.

## Regras do design system

Não crie tamanhos, pesos e cores isolados quando já houver token equivalente. Títulos de novas seções devem reutilizar `--section-title-size` e `--section-title-size-mobile`. Componentes novos devem respeitar foco visível, `prefers-reduced-motion` e semântica HTML.

## Segurança e privacidade

Este repositório não contém chaves, tokens, IDs de publicidade ou credenciais. Nunca coloque segredos no HTML/JS público. Cabeçalhos de segurança devem ser configurados no provedor de hospedagem; veja `docs/DEPLOYMENT.md`.

## Licenciamento e direitos

Antes de comercializar uma cópia, confirme que imagens, fontes, logotipos, textos e demais materiais utilizados possuem licença/autorização compatível. O template não concede direitos sobre marcas ou conteúdo de terceiros.

## Checklist rápido de entrega

Consulte `docs/REUSE-CHECKLIST.md` antes de publicar uma nova instância.
