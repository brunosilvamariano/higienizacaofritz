# Design brief — home enxuta e página de Serviços

Correção solicitada pelo usuário: remover da home o bloco integrado de três diferenciais e a faixa inferior com o texto e CTA Conhecer os serviços, conforme imagem enviada. Preservar os quatro cards e o restante da página. Próximos ajustes serão feitos seção por seção.

Pedido aprovado em 24/10/2026: aplicar a auditoria, concentrando a home em apresentação, oferta, confiança e orçamento. Preservar hero/header, Bricolage no hero, Nohemi nos títulos, Switzer em textos/ações, cores Fritz e RoundLink com suas animações. Sem dependências novas.

## Composição

Home: Hero existente → faixa compacta Google com dados e quatro avatares existentes → quatro cards de serviços existentes com três diferenciais integrados e acesso à página completa → Sobre resumido com foto real → três avaliações reais → quatro perguntas essenciais, incluindo cidades atendidas → orçamento final. Sem comparativos ilustrativos, mapa ou percurso de rolagem independente para diferenciais. Corrigir padding duplicado em Serviços. Preservar entrada e empilhamento mobile dos quatro cards.

/servicos: abertura editorial com H1 claro e CTA → detalhes de estofados, colchões, tapetes e impermeabilização com as fotos locais existentes → Como funciona transferido integralmente, incluindo parallax interno e ícones → FAQ completo → contato. Cobertura de atendimento informada com a fonte única de cidades. Sem alegações novas sobre eficácia, prazos ou garantias.

Manter leitura confortável, contorno fino, sombras discretas e azul apenas em acentos. Seções de resumo sem movimento contínuo; títulos usam a animação compartilhada. Grade de avaliações estática no desktop, sem duplicação visual dos depoimentos. No celular, avaliações em faixa horizontal nativa com scroll snap, barra discreta e dica de gesto, sem autoplay; demais layouts em coluna, botões completos e respeito a movimento reduzido.

## Estrutura afetada completa

Existentes editados: src/app/page.tsx; src/sections/home/services/services-projects.tsx e .css; src/sections/home/service-marquee/service-marquee.tsx e .css; src/sections/home/faq/faq.tsx; src/config/navigation.ts, routes.ts e legacy-redirects.ts; src/components/layout/header/desktop-navigation.tsx; src/components/layout/footer/footer.tsx; tests/unit/routes.test.cjs; docs/guias/arquitetura.md.

Novos: src/app/servicos/page.tsx; src/sections/home/home-concise.css; src/sections/home/about-fritz/about-summary.tsx; src/sections/home/testimonials/review-selection.tsx; src/sections/services/introduction/services-introduction.tsx; src/sections/services/catalog/service-catalog.tsx e service-catalog.content.ts; src/sections/services/services-page.css; este brief.

Movidos: src/sections/home/process/process.tsx, process.content.ts e process.css → src/sections/services/process/, sem mudança de comportamento. Componentes antigos de benefícios, galeria ilustrativa, mapa, sobre extenso e mural de avaliações permanecem preservados, sem montagem na home. Nenhuma pasta compartilhada passa a depender de componentes de página.

## Navegação e validação

Atualizar menu/rodapé para destinos existentes. Remover o redirecionamento antigo /servicos → /#servicos para permitir a nova rota; projetos antigos apontam para Serviços, sem prometer galeria real. Canonical e metadados próprios; sitemap usa o registro de rotas. Validar ida e volta entre páginas, abertura por hash, FAQ, menu mobile, conteúdo sem JavaScript, 320/390/768/1440 px, lint/tipos/formatação, testes e build. Registrar medidas reais de altura depois da implementação, sem afirmar conversão ou Lighthouse não medidos.

## Verificação da entrega

Home em 390 × 844: altura aproximada de 6.836 px com rodapé, contra 12.408 px na auditoria anterior, cerca de 45% menos rolagem. Sem overflow horizontal em 320, 390, 768 e 1440 px nas verificações; página Serviços conferida nas mesmas larguras. Preservados os quatro cards de Serviços com empilhamento mobile, o hero e os CTAs existentes. Avaliações em faixa nativa no celular, com rolagem manual conferida; FAQ curto abre e fecha.

Navegação home → Serviços e retorno pelo menu mobile conferidos. Âncora /servicos#processo e expansão/recolhimento das etapas conferidos. Auditoria HTTP aprovada: duas páginas, cinco redirects legados, 14 imagens, vídeos locais, canonical/Open Graph, sitemap e schema. 29 testes unitários, lint, TypeScript, Prettier e build aprovados. Não foram medidos Lighthouse, conversão ou desempenho em aparelho físico.

O servidor de desenvolvimento precisou recarregar next.config.ts para abandonar o redirect antigo /servicos → /#servicos. O navegador local também tinha esse redirect permanente em cache; a URL canônica foi conferida após a atualização do cache.

## Ajuste de 25/10/2026 — banner de Serviços

Pedido: transformar a abertura editorial de /servicos em banner com foto real e remover integralmente Como funciona (confirmado pelo cliente). Usar a foto local existente de extração de estofados, com overlay para texto branco, título e CTA existentes, respeitando Nohemi/Switzer, escala e cores Fritz. Breadcrumb fora do banner, cobertura abaixo; banner com borda discreta e cantos suaves, composição em duas colunas no desktop e coluna no celular, sem parallax ou novas dependências. Remover montagem e importação de Process; preservar arquivos do componente como acervo. Retirar links para /servicos#processo do menu, rodapé e abertura. Não alterar home, catálogo, FAQ ou contato. Arquivos existentes afetados: src/sections/services/introduction/services-introduction.tsx; src/sections/services/services-page.css; src/app/servicos/page.tsx; src/config/navigation.ts; src/components/layout/footer/footer.tsx. Nenhum arquivo de implementação novo. Validar 1440/390/320 px, ausência da seção e dos links, check e build.

Validação visual do banner: 1440, 390 e 320 px, sem transbordamento horizontal; botão contido no banner em 320 px. Ausência de #processo e de links para a âncora confirmada no DOM. npm run check aprovado e 29 testes existentes aprovados. Captura em work/faq-preview/servicos-banner.png. Tentativa de build Turbopack interrompida após ficar parada em compile sem diagnóstico; validação alternativa via Webpack em andamento.

Build final aprovado com Webpack em .next-qa-services-banner, após executar com a permissão necessária para criação dos diretórios. Todas as oito páginas foram geradas. Caminhos temporários adicionados automaticamente ao tsconfig.json e next-env.d.ts foram restaurados após o build. Nenhuma alteração permanente na configuração de compilação.

Correção expressa do banner: ocupar toda a largura da viewport, sem cartão, margens laterais ou cantos arredondados. Seguir a linguagem do hero principal: fundo cobalto com foto real e sombra inferior, palavra Serviços em grande escala, Bricolage no título e entrada compartilhada HeroEntrance/CTAs existentes. Reduzir a altura para aproximadamente 480 px no desktop e 540 px no celular, preservando leitura e cobertura abaixo. Reutilizar os arquivos existentes, sem mudar a home ou o header.

Conferência da correção: banner começa em x=0 e ocupa toda a largura útil. Altura 480 px no desktop, 540 px em 390 px e crescimento natural para 558 px em 320 px para preservar conteúdo. Sem transbordamento; CTA contido. Cobalto #0047AB, fonte Bricolage e HeroEntrance preparados confirmados no DOM. Captura em work/faq-preview/servicos-banner-hero-fullwidth.png. Nenhuma alteração no hero da home.

Header sobre o banner de Serviços: ativar estado explícito data-banner para /servicos, retirar altura reservada do header nessa rota e mover breadcrumb para dentro do banner. Menu principal transparente com links brancos, marca tipográfica branca e controle mobile branco sobre fundo translúcido; dropdown mantém superfície clara e texto escuro. Preservar header/home existentes e navegação. Manter altura compacta do banner e reservar faixa superior para header, breadcrumb e palavra de fundo.

Validação do header sobreposto: banner em y=0, header sem altura reservada, logo tipográfica/menu branco computados; breadcrumb abaixo do header. Menu mobile abriu e fechou; em 320 px a palavra de fundo termina antes do rótulo, sem sobreposição nem transbordamento. Captura em work/faq-preview/servicos-header-sobre-banner.png.

Correção do layout do header pela imagem de referência: menu central escuro sobre recorte claro com a curva existente do header da home; estender o recorte até o topo do banner para não parecer uma cápsula flutuante. Marca tipográfica permanece branca à esquerda e controles brancos à direita. Reutilizar a geometria e estados originais de desktop-nav e menu-toggle; somente /servicos recebe a extensão superior do recorte, sem alterar a home ou o banner compacto.

Ajuste de proporção e respiro superior solicitado: afastar o banner do topo em 12–20 px conforme a viewport, manter largura total e arredondar apenas os cantos superiores. Header acompanha o deslocamento, preservando recorte central conectado ao topo do banner. Aumentar altura desktop de 480 para 520 px para separar a palavra de fundo do conteúdo; celular mantém altura mínima 540 px e crescimento natural em telas estreitas. Não alterar conteúdo ou interações.

Ajuste solicitado de largura: banner de Serviços usa margin-inline: var(--hero-frame), reutilizando diretamente as margens responsivas do hero da home (20 px desktop, 14 px tablet, 12 px celular). Preservar altura, respiro superior, recorte e conteúdo.

Auditoria comparativa solicitada do recorte: home medido em desktop tem hero/header em y=20 px, recorte de 80 px, offset superior 0 e raio 24 px; Serviços tinha hero em 17,275 px, header em 37,275 px e recorte esticado para 100 px por offset -20 px. Corrigir retirando os offsets exclusivos do header e usando frame 20/14/12 px na abertura, iguais ao hero. Remover o raio parcial para herdar 24 px desktop e 20 px mobile do hero.css. Preservar altura compacta do banner em 520 px desktop e conteúdo aprovado.

Simplificação solicitada: retirar o bloco Onde atendemos e o link de navegação para /servicos#onde-atendemos, porque as cidades já constam no FAQ. Preservar o cadastro real compartilhado e os dados estruturados de cobertura; remover apenas apresentação duplicada, importação e estilos sem uso.

## Galeria editorial interativa aprovada

Substituir as quatro linhas repetidas do catálogo por grade fotográfica editorial, mantendo os quatro serviços, fotos reais, conteúdo e IDs de âncora. Cards com títulos sempre visíveis, introdução, número discreto e ação Conhecer o serviço; proporções 7/5 e 5/7 no desktop, coluna no celular. Zoom discreto de imagem e entrada por Framer Motion com movimento reduzido respeitado. Abrir detalhes em dialog nativo, com nome acessível, foto, descrição e notas reais, CTA WhatsApp contextual e navegação anterior/próximo. Fechar por Escape, controle visível ou clique fora; manter foco nativo e travar rolagem de fundo enquanto aberto. Sem dependências novas. Existentes: catalog/service-catalog.tsx, catalog/service-catalog.content.ts, services-page.css. Novo arquivo dentro da seção existente: catalog/service-catalog.css; nenhum diretório novo. Validar todos os serviços, teclado, fechamento, CTA codificado e telas 320/390/1440; check e testes existentes.

Validação da galeria: check aprovado e 29 testes existentes aprovados. Browser desktop 1440 px: quatro cards, leitura e troca por anterior/próximo, contexto WhatsApp de tapetes verificado na URL. Abertura por Enter, foco inicial no fechamento, Escape/clique no fundo fecham e retornam foco ao card. Fundo sem rolagem enquanto aberto. Em 390 px, diálogo com rolagem interna e controles acessíveis; em 320 px, CTA contido e sem transbordamento. Capturas em work/faq-preview/servicos-galeria-editorial.png e servicos-galeria-detalhes.png.

Build de produção da galeria aprovado com Webpack em .next-qa-services-gallery, incluindo geração das oito páginas. Configurações temporárias de tsconfig e next-env restauradas após a validação.

## Comparativos e três diferenciais — referência Finanex

Pedido: substituir a galeria de serviços por quatro comparativos lado a lado e apresentar três diferenciais com o funcionamento do Simple Process de https://finanex.webflow.io/#Process. Referência inspecionada: coluna esquerda sticky com título, explicação e CTA; três cards à direita, linha vertical e marcadores; cards entram com deslocamento, escala e leve rotação por rolagem. Adaptar Nohemi/Switzer e tokens Fritz, com carvão como fundo, gelo para texto e bordas/linha em cobalto e azul céu, sem gradiente rosa/roxo. Em mobile, coluna simples e texto não fixo; respeitar movimento reduzido. Reutilizar três diferenciais reais já cadastrados. Nenhuma nova dependência. Imagens existentes identificadas expressamente como ilustrativas: aguardar confirmação do cliente para uso com rótulo, ou caminhos de fotos reais.

Estrutura afetada: src/app/servicos/page.tsx (existente); src/sections/services/differentials/differentials.tsx e differentials.css (novos); src/sections/home/benefits/benefits.content.ts (existente, somente leitura); comparativos existentes em src/sections/home/before-after (aguardando decisão de uso). Catálogo anterior permanece recuperável em src/sections/services/catalog.

Montagem dos comparativos existentes com indicação ilustrativa preservada: BeforeAfter recebe opção compact reutilizável; quatro colunas no desktop, duas no tablet e uma no celular, sem inventar fotos reais. Nova folha src/sections/services/comparisons.css; componente existente src/sections/home/before-after/before-after.tsx ajustado apenas por prop opcional. /servicos passa a montar abertura → comparativos → diferenciais → FAQ → contato. Catálogo anterior preservado sem montagem. Caso o cliente indique fotos reais, substituir as fontes com seus dados verificados.

Validação visual: quatro colunas de aproximadamente 300 px em desktop 1440; uma coluna em 390/320, sem transbordamento. Coluna dos diferenciais sticky no desktop e estática no celular; três cards e linha de progresso confirmados. Nota Comparativos ilustrativos de higienização preservada e visível. Check aprovado. Capturas em work/faq-preview/servicos-quatro-comparativos.png e servicos-diferenciais-finanex.png.

Confirmação do cliente: usar as imagens existentes por enquanto, para troca futura, mantendo identificação ilustrativa. Correção de coerência: substituir o pill-link antigo de cada comparativo pelo RoundLink compartilhado, preservando animações e ícone WhatsApp verde padrão; usar azul de ação em superfície clara e botão claro na seção escura. Retirar FAQ apenas de /servicos; links de dúvidas continuam na home. Composição final: banner → quatro comparativos → três diferenciais → contato.

Ajuste solicitado: remover a frase visível Comparativos ilustrativos de higienização da composição compacta, manter a procedência documentada e as descrições alternativas; ampliar o parágrafo de cada serviço com orientações reais, sem promessas de resultado. Ordem de leitura em cada card: título, imagem, parágrafo e RoundLink. Alinhar botões entre os quatro cards com distribuição flexível, preservando o padrão de CTA e conteúdo responsivo.
