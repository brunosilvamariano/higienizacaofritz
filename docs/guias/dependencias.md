# Dependências e recursos locais

## Base instalada

| Tecnologia/pacote                           | Finalidade                                       |
| ------------------------------------------- | ------------------------------------------------ |
| Node.js LTS compatível                      | Ambiente de execução e build                     |
| npm                                         | Instalação e lockfile único                      |
| next                                        | Rotas, renderização, metadados e otimização      |
| react, react-dom                            | Interface                                        |
| typescript                                  | Tipagem estrita                                  |
| @types/node, @types/react, @types/react-dom | Tipos do ambiente e do React                     |
| tailwindcss, @tailwindcss/postcss, postcss  | Utilidades de layout, reset e integração PostCSS |
| framer-motion                               | Animações e redução de movimento                 |
| @biomejs/biome                              | Análise estática                                 |
| prettier                                    | Formatação e compatibilidade com lint            |

As versões instaladas estão fixadas em `package.json` e `package-lock.json`.
Node.js 22.22.2 e npm 11.15.0. Reinstalar com `npm ci`.

## Adicionar somente se houver uso

- `lucide-react`: ícones empacotados, importando somente os utilizados.
- `clsx` e `tailwind-merge`: composição de classes em componentes com variantes.
- `zod`: validação de dados externos e formulários.
- `react-hook-form`: formulários com complexidade que justifique a biblioteca.
- Vitest e Testing Library: testes de lógica e comportamento dos componentes.
- Playwright e axe-core: jornadas no navegador e verificações de acessibilidade.
- TanStack Query: cache e sincronização de dados no cliente, se necessários.
- Zustand: estado global do cliente, se o estado local não atender.

Não adicionar GSAP junto de Framer Motion sem necessidade identificada. Three.js,
React Three Fiber, Lenis e shadcn/ui dependem do design e dos componentes necessários.

## Fontes

Plus Jakarta Sans variável está instalada localmente em `src/assets/fonts/plus-jakarta-sans`, com a licença e o arquivo WOFF2 latin.
Os pesos 200–800 são atendidos pelo mesmo arquivo. `src/styles/fonts.ts` usa `next/font/local`, aplicado ao layout e aos estilos globais. A família faz parte do Design Brief.

## Imagens

Importar cada variante real de `src/assets/images` no registro `*.images.ts` de sua
seção. Usar os metadados da importação para dimensões e otimização. A seleção de
enquadramentos ficará no componente compartilhado de mídia, com fontes condicionais.

O navegador necessariamente recebe um endereço interno gerado pelo build/otimizador.
A regra de autoria é importar o arquivo local, sem escrever URLs de imagens no código.

Não usar serviços de imagens remotas, imagens de exemplo, placeholders de blur,
SVGs provisórios ou substitutos fictícios. Se uma imagem estiver ausente, registrar
a pendência antes de implementar a seção correspondente.

## Configuração, segurança e verificação

- `.env.local` guarda a configuração local e é ignorado pelo Git. O README documenta as variáveis utilizadas; a Vercel recebe os valores nas configurações de cada ambiente.
- Configurações privadas ficarão em módulos exclusivos de servidor, criados quando houver backend.
- `src/providers` reunirá apenas provedores efetivamente utilizados.
- Scripts disponíveis: `dev`, `build`, `start`, `lint`, `typecheck`, `format` e `format:check`. Scripts de testes serão adicionados junto da infraestrutura correspondente.
- CI verifica instalação reproduzível, lint, tipos, formatação e auditoria. O build será incluído quando existirem rotas. Testes serão acrescentados conforme funcionalidades reais.
- Metadados, favicon e imagem social serão adicionados com os dados e recursos verdadeiros da marca.
- Metas Lighthouse do briefing permanecem metas até serem medidas.

A instalação pelo registro npm é uma etapa de desenvolvimento. Os recursos da
interface serão servidos pela própria aplicação, sem dependências de CDN em runtime.

## Referências de configuração

- https://nextjs.org/docs/app/getting-started/installation
- https://biomejs.dev/linter/domains/
- https://tailwindcss.com/docs/installation/framework-guides/nextjs

## Reprodução da animação de serviços do Ariyana

GSAP 3.15.0 instalado pelo npm e fixado no lockfile. GSAP e ScrollTrigger são importados dinamicamente apenas na variante de serviços do vídeo. Necessidade concreta: reproduzir o scrub de 1,2 s e o cálculo do gatilho no elemento transformado usados pela referência, que uma mola do Framer Motion não reproduziu. Nenhum script de CDN é carregado pela aplicação. Next/React/TypeScript permanecem na stack existente. MatchMedia remove e restaura a animação no tablet, celular e na preferência por movimento reduzido; o efeito desfaz seus recursos ao desmontar.

## Estado vigente das fontes — 17/10/2026

Bebas Neue, DM Sans e Poppins continuam visíveis. As mesmas fontes foram comprimidas para WOFF2 com fontTools 4.67.0, sem subset nem alteração de glifos, cmap, métricas hmtx/hhea/OS/2 ou eixos variáveis. Licenças OFL preservadas. Plus Jakarta sem uso foi retirada. Poppins usa preload:false e carrega pela necessidade real do conteúdo; Bebas e DM Sans continuam priorizadas no hero/header. Ferramenta de conversão apenas em work, sem dependência nova de runtime ou mudança no lockfile.

Build no Windows: um worker de geração estática (cpus:1), mantendo workerThreads, após EPERM intermitente com dois workers ao criar a saída de 404. O build final e a auditoria HTTP passaram nessa configuração; isso não altera as animações no navegador.

## Estado vigente das fontes — 23/10/2026

Por solicitação explícita do usuário, Clash Display variável (200–700) substitui Bebas Neue nos títulos e Switzer variável (100–900, normal e itálico) substitui DM Sans/Poppins nos textos e ações. Pacotes oficiais Fontshare obtidos em 23/10/2026; WOFF2 originais e FFL.txt preservados em src/assets/fonts/clash-display e src/assets/fonts/switzer. Carregamento por next/font/local, sem fonte remota ou CDN. As famílias anteriores permanecem no acervo, mas não são carregadas pelo layout. Nenhuma dependência adicionada. Brief e critérios de escala em docs/secoes/tipografia-clash-switzer.md; este registro substitui a configuração tipográfica anterior.

## Estado vigente das fontes — 24/10/2026

Por solicitação explícita: Bricolage Grotesque variável (200–800) no hero, Nohemi Regular/Medium/SemiBold (400/500/600) nos títulos e Switzer nos textos e botões. Bricolage WOFF2 original do repositório ateliertriay/bricolage, com OFL.txt e AUTHORS.txt. Nohemi obtida gratuitamente no Gumroad do autor Rajesh Rajput, WOFF2 originais Web-TT, com EULA.pdf original preservada. Sem conversão dos arquivos Nohemi. next/font/local e recursos locais, sem CDN ou pacotes adicionais. Clash Display permanece no acervo, sem carregamento. Brief e validação em docs/secoes/tipografia-bricolage-nohemi.md.
