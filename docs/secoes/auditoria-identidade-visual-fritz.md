# Auditoria de identidade visual e Design Brief — Fritz

25/10/2026. Revisão solicitada após o usuário apontar CTAs com dois contornos e comparativos excessivamente genéricos. Este documento substitui a direção de acabamento anterior; resultados de validação serão registrados após a implementação.

## Inspeção e diagnóstico

Home e Serviços inspecionados diretamente em localhost:3000. Hero: cobalto #0047AB preservado; imagem, recorte do menu e fontes são ativos reconhecíveis. Abaixo dele predominava o mesmo fundo #F3F5F1, com tom verde em grandes áreas. Cards de serviço, comparativos, cápsulas e controles recebiam sombras internas parecidas, criando uma aparência repetitiva. Nos CTAs, a soma da borda de 1 px e do inset branco de 55% desenhava duas linhas com um intervalo claro. Isso é uma falha de acabamento, não uma intenção de identidade.

Os comparativos usavam imagem dentro de caixa branca, título, linha, parágrafo e botão, todos cercados por outra borda/sombra. A caixa competia com a fotografia. Em Sobre, o título inteiro em caixa alta tinha densidade excessiva. Avaliações e FAQ quase não se distinguiam pelo fundo. Contato introduzia uma mancha verde extensa, diluindo o gelo da marca. Os diferenciais tinham verde na superfície inteira e novamente nos ícones: falta de proporção no acento.

## Pesquisa e critérios

- Adobe, [colour wheel](https://www.adobe.com/uk/creativecloud/design/discover/color-wheel.html): uma cor dominante e apoios menos saturados; relação azul/verde como apoio, neutros para equilibrar. Não existe uma paleta universalmente perfeita: a seleção abaixo é uma decisão de direção de arte para a marca Fritz.
- Google, [color roles](https://m3.material.io/m3/pages/color-roles): distinguir fundo, recipiente e cores de conteúdo, em pares com contraste. Usar o princípio de papéis, sem importar a estética de aplicativo Material.
- MDN, [radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/radial-gradient): posição, extensão da elipse e paradas determinam a distribuição de luz. Usar elipses amplas fora do eixo central, transparência da própria cor e base sólida; evitar círculos visíveis, blur animado e halos repetidos.
- [USM Stories](https://www.usm.com/en/stories), inspecionado visualmente no navegador: fotografia aberta, tipografia fora da imagem, espaçamento e hierarquia sem caixas ao redor de cada item. Adaptar esse princípio para uma folha editorial de comparativos, preservando os quatro casos Fritz e nossas fontes.
- [Aentoria](https://aentoria-ttm.webflow.io/), referência anterior do cliente: conservar o cuidado com luz e contraste, abandonar o brilho interno generalizado e o verde espalhado. A referência não justifica reproduzir todo o seu vocabulário.

## Direção visual aprovada pelo escopo do pedido

Cobalto #0047AB; gelo frio #F1F5F8; branco #FFFFFF; grafite #20272C; texto secundário #58646E; borda #D6DFE6. Acento editorial azul #326FAC em títulos grandes. Verde da marca #77B14A, apoio claro #E8EFDF somente em pequenos ícones. Gallery paper #F7F7F2 para acolher os tons naturais dos tecidos.

| Área             | Fundo e material                                  | Acabamento e função                                                                                                                                           |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero/header      | Cobalto e sombra original                         | Preservar geometria, imagem, fontes e movimentos; limpar os botões                                                                                            |
| Reputação Google | Branco                                            | Divisórias finas, métricas reais, Google multicolorido preservado                                                                                             |
| Serviços da home | Gelo com luz azul lateral bem leve                | Resumo cobalto, informação branca, painel fotográfico e proteção gelo; uma borda e sombra externa curta; preservar empilhamento mobile                        |
| Sobre            | Branco                                            | Foto sem moldura duplicada, título em caixa normal, ícones oficiais                                                                                           |
| Avaliações       | Gelo frio                                         | Radial azul amplo e discreto atrás das cápsulas; manter carrossel, pausa e modal                                                                              |
| FAQ              | Branco                                            | Separador editorial, marca d’água mais discreta, controles planos e acordeão preservado                                                                       |
| Contato          | Gelo e radial azul com verde de baixa intensidade | CTA cobalto, texto grafite, cor final contínua atrás do rodapé                                                                                                |
| Rodapé           | Grafite                                           | Luz azul localizada; verde em dose mínima, sem superfície verde inteira                                                                                       |
| Banner Serviços  | Cobalto original                                  | Preservar hero/header                                                                                                                                         |
| Comparativos     | Papel claro                                       | Quatro painéis fotográficos abertos, 2º/4º discretamente deslocados; sem caixa branca, sem sombra e sem contorno externo; ampliar imagem em diálogo acessível |
| Diferenciais     | Grafite                                           | Luz azul ampla; verde nos ícones/progresso; manter sticky e movimento existente                                                                               |

Botões: uma superfície sólida, sem inset branco e sem linha adicional; sombra só externa. Foco de teclado mantém contorno funcional. Google e WhatsApp conservam cores oficiais. Tipografia vigente: Bricolage/Nohemi/Switzer. Não adicionar fontes, imagens fictícias, métricas, depoimentos ou dependências.

## Implementação e limites

Sem mudanças de arquitetura. Arquivos existentes: src/styles/tokens.css; src/components/ui/round-link.css; src/sections/home/home-colors.css; CSS das seções serviços, Sobre, avaliações, FAQ e contato; src/sections/services/comparisons.css e differentials/differentials.css. A interação de ampliação fica no componente existente before-after.tsx; nenhuma nova biblioteca. A galeria continua com quatro itens na mesma linha no desktop, duas colunas no tablet e uma no celular. O CTA continua abaixo do parágrafo. Imagens provisórias já autorizadas pelo cliente permanecem até a troca, sem apresentar o conteúdo como prova de resultado real.

## Validação prevista

Comparar antes/depois no navegador, revisar cada seção e o conjunto em desktop, tablet e celular. Conferir contraste, overflow, CTAs normais/hover/foco, navegação, FAQ, avaliações e ampliação da galeria, Escape, setas, retorno de foco e redução de movimento. Executar check e compilação de produção. Não afirmar Lighthouse ou desempenho medido sem medição específica.

## Resultado da validação

Inspeção efetiva no navegador: home e Serviços, com capturas de hero, serviços, Sobre, avaliações, FAQ, contato/rodapé, galeria e diferenciais. Larguras de teste: 1440, 834, 390 e 320 px. Não houve transbordamento horizontal do documento nem CTAs maiores que seus recipientes nas medições finais. O menu foi verificado aberto e depois de concluir sua animação de fechamento; medições durante o fechamento não foram tratadas como estado final.

A galeria tem quatro colunas no desktop, duas no tablet e uma no celular. Os quatro recipientes antigos ficaram transparentes, sem borda, raio ou sombra externa. As fotos mantêm a proporção e a imagem integral. Ampliação, navegação circular, setas esquerda/direita, Escape, bloqueio/restauração da rolagem e retorno do foco ao disparador foram verificados. Com prefers-reduced-motion, a animação do diálogo e a transição da imagem resultaram em none/0s.

CTAs medidos no estado normal: preenchimento e borda #0047AB, somente sombra externa. Hover: ambos #003C91, sem inset e sem outline de ponteiro. Foi encontrada uma regra global antiga que sobrescrevia o foco; corrigida na origem e revalidada: contorno azul em área clara. Hero, painéis escuros, modal de avaliações e rodapé têm contexto de foco claro. O contorno de teclado continua funcional e não aparece como decoração permanente.

O contraste calculado para as combinações principais é: grafite/gelo 13,80:1; texto secundário/branco 6,06:1; branco/cobalto 8,44:1; azul editorial/branco 5,24:1; verde claro/grafite 9,97:1. Nos painéis da home: texto gelo/cobalto 6,78:1 e texto secundário/gelo do painel de proteção 4,87:1. Isso não é uma certificação WCAG de toda a aplicação: ícones de marca, imagens e estados têm papéis próprios.

FAQ abriu outra resposta e fechou a anterior; avaliações abriram o relato real selecionado; menu mobile abriu e fechou; os cards da home permaneceram sticky no breakpoint aprovado e o hero manteve #0047AB. O contêiner interno da imagem no card fotográfico foi ajustado para posição absoluta: a figura externa continua sticky, evitando o aviso de validação do Image/fill. Avisos de Fast Refresh e sugestões de LCP em navegações diretas por âncora não são medições de desempenho de produção; não foram usadas para justificar carregar todas as imagens de imediato.

npm run check passou (lint, TypeScript e Prettier), npm test passou com 29 testes e a compilação de produção com Webpack concluiu em pasta isolada. As inclusões temporárias de tipos geradas pelo build foram restauradas. Nenhuma dependência foi adicionada.

Capturas da revisão: fritz-auditoria-galeria-desktop.png, fritz-auditoria-galeria-mobile.png, fritz-auditoria-ampliacao-mobile.png, fritz-auditoria-home-desktop.png, fritz-auditoria-home-mobile.png, fritz-auditoria-contato-footer.png e fritz-auditoria-faq.png, salvas como artefatos locais da conversa.

Pendência de conteúdo mantida do escopo anterior: substituir os quatro comparativos ilustrativos pelas fotografias definitivas do Fritz. Não foram criados novos resultados, métricas ou depoimentos.
