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
