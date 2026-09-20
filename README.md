# Fritz Higienização e Impermeabilização

Site estático e responsivo da Fritz Higienização e Impermeabilização. O projeto usa apenas HTML, CSS, JavaScript e arquivos locais de imagem, fonte e ícones, sem gerenciador de pacotes, sem etapa de compilação e sem dependências externas de runtime.

## Estrutura

- `index.html` — documento principal, conteúdo, semântica e metadados.
- `assets/css/main.css` — base global, tokens e utilidades.
- `assets/css/components/` — estilos dos componentes reutilizáveis.
- `assets/css/sections/` — um stylesheet por seção.
- `assets/js/components/` — comportamento dos componentes.
- `assets/js/sections/` — comportamento específico de cada seção.
- `assets/fonts/` — fontes WOFF2 locais usadas pelo site.
- `assets/images/` — imagens do site e imagem social.
- `assets/favicon/` — favicon, ícones e manifest.
- `assets/brand/` — recursos da identidade visual.
- `docs/` — documentação técnica, publicação, rastreamento e reutilização.
- `robots.txt` e `sitemap.xml` — arquivos de indexação.
- `vercel.json` — cabeçalhos e comportamento de URLs na Vercel.

## Desenvolvimento local

Não é necessário instalar nada para editar o projeto. Abra `index.html` no navegador ou use um servidor estático da sua preferência, como a extensão Live Server do VS Code.

## Publicação na Vercel

O projeto deve ser publicado diretamente a partir da raiz do repositório. Não existe etapa de compilação nem pasta de saída.

Na Vercel, use:

- Framework Preset: `Other`.
- Build Command: vazio/desabilitado.
- Output Directory: vazio.
- Install Command: vazio/desabilitado.

O arquivo `index.html` permanece na raiz e os recursos ficam em `assets/`.

## Antes de reutilizar para outro cliente

1. Troque nome, textos, telefone, WhatsApp, redes sociais, endereço e imagens.
2. Atualize `<title>`, description, Open Graph e Twitter metadata.
3. Atualize `canonical`, `og:url`, Schema, sitemap e robots para o domínio correto.
4. Mantenha `og:image` e `twitter:image` com URL absoluta e arquivo publicamente acessível.
5. Configure Google Analytics, Google Ads e Meta Pixel somente com IDs reais e consentimento adequado quando aplicável.
6. Revise Política de Privacidade, cookies e a base legal aplicável ao tratamento de dados.
7. Teste teclado, mobile, links externos, WhatsApp e todos os breakpoints antes da publicação.

## Regras do design system

Não crie tamanhos, pesos e cores isolados quando já houver token equivalente. Títulos de novas seções devem reutilizar os tokens existentes. Componentes novos devem respeitar foco visível, `prefers-reduced-motion` e semântica HTML.

## Segurança e privacidade

Este repositório não deve conter chaves, tokens, IDs privados ou credenciais. Nunca coloque segredos no HTML ou JavaScript público. Os cabeçalhos HTTP suportados pelo projeto estão em `vercel.json`; políticas adicionais devem ser testadas antes de serem ativadas.

## Licenciamento e direitos

Antes de comercializar uma cópia, confirme que imagens, fontes, logotipos, textos e demais materiais utilizados possuem licença ou autorização compatível. O template não concede direitos sobre marcas ou conteúdo de terceiros.

## Checklist de entrega

Consulte `docs/REUSE-CHECKLIST.md` antes de publicar uma nova instância.
