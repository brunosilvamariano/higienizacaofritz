# Organização vigente — Fritz

Atualizado em 17/10/2026. A página pública é a home; páginas antigas foram retiradas. Não foi criada uma arquitetura nova.

| Pasta existente              | Responsabilidade                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------- |
| src/app                      | Home, layout, páginas de sistema, favicon, robots e sitemap                       |
| src/sections/home            | Onze seções ativas e home.css, sem as antigas páginas About/Blog/Projects/Contact |
| src/components/layout        | Header, navegação por âncoras, transição e rodapé                                 |
| src/components/layout/footer | Rodapé, revelação e QuoteForm para WhatsApp                                       |
| src/components/ui            | Controles reutilizáveis e ícones locais                                           |
| src/components/media         | ResponsiveImage                                                                   |
| src/components/analytics     | Consentimento e eventos de contato                                                |
| src/content                  | Avaliações reais, imagens do hero e cadastro único das sete cidades               |
| src/config                   | Site, metadados, navegação, contato, rotas e redirecionamentos                    |
| src/animations               | Entradas compartilhadas e títulos; movimentos específicos continuam na seção      |
| src/assets/images/pages/home | Recursos exclusivos da home                                                       |
| src/assets/images/shared     | Fotos de serviços, profissional, marcas e avatares                                |
| src/assets/fonts             | Bebas Neue, DM Sans e Poppins WOFF2 e licenças                                    |
| src/assets/icons/tabler      | Fontes SVG de referência e licença; componente renderizado em components/ui       |
| src/styles                   | Tokens, Tailwind, resets e tipografia compartilhada                               |
| public/videos/services       | Quatro vídeos efetivamente usados                                                 |
| tests/unit                   | Testes de contato, consentimento, configuração, rotas e cidades                   |
| scripts                      | Auditoria HTTP e geração da geometria do mapa                                     |
| docs                         | Guias vigentes, registros por seção e auditorias históricas                       |
| work                         | Artefatos locais ignorados; inclui cópia recuperável da limpeza                   |

A listagem completa dos arquivos existentes fica em [estrutura-completa.txt](estrutura-completa.txt). Não há diretórios planejados ou vazios nesta proposta.

## Regras

app compõe sections; sections utiliza componentes, conteúdo e utilitários compartilhados. Componentes compartilhados não importam detalhes de seções. Recursos locais são importados como módulos. Código de cliente é limitado às interações; fontes, ícones e mídia são locais.

CSS de seção mantém geometria, responsividade e animações. home.css concentra os ajustes contextuais já aprovados e mantém sua cascata; o rodapé tem tipografia exclusiva junto do componente. Tailwind tw: atende layouts simples. Tokens continuam em styles/tokens.css.

service-areas.ts é a fonte única dos nomes e IDs das cidades. service-area-map.json contém somente geometria e coordenadas. A regeneração usa os dados locais documentados pelo script e não deve alterar pontos manualmente.

Eventos traco:* e a chave traco-consent-v1 são identificadores de compatibilidade internos. Foram mantidos para não perder escolhas de consentimento nem quebrar a comunicação das animações.

## Verificações

npm run check, npm test e npm run build são as verificações da CI. Biome exclui dependências, saídas .next*, work e os SVGs originais de referência; os componentes de ícones realmente renderizados continuam sob lint de acessibilidade. Não confundir os SVGs de acervo com a interface.

## Limpeza de 17/10/2026

Retirados arquivos sem uso nas páginas, preservadas as dependências reais e as regras de redirecionamento do next.config.ts. Fotos antes guardadas em Leaders/About foram reunidas em shared/services e shared/professional. Newsletter virou QuoteForm; classes CSS foram mantidas para conservar a apresentação.

Nenhuma exclusão foi baseada só no nome de uma pasta: referências, testes e build validam os limites. A cópia local em work/cleanup-2026-10-17 permite recuperar os arquivos retirados. Documentos anteriores são históricos e podem citar estruturas já removidas.
