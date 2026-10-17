## Artigos — proporção e entradas

Usar medidas da folha publicada: header1000px, imagem principal12/5 com margens100px; mobile3/2, margens28/44px. Abertura184px/273px,tablet150px,mobile120px. Aplicar controlador existente a títulos, data e parágrafos. Preservar conteúdo e imagem secundária local.

## Blog — faixas após abertura

Adicionar cinco faixas pretas decrescentes abaixo da abertura e antes da listagem, reutilizando o divisor responsivo existente.

## Blog — abertura e listagem

Abertura273px em telas1440+,184px desktop,150px tablet,120px mobile; etiqueta com círculo e entrada por caracteres. Títulos e datas da listagem com entrada existente. Separar wrapper de borda e conteúdo90% (75% em1920+), container1680px. Preservar imagens17/12 e conteúdo local.

## Serviços — entradas e proporções da Ariyana

Adicionar abertura por caracteres e escala da imagem inline, entrada do subtítulo dos serviços. Restaurar título principal heading-large, container1680px, cards100px de padding e mídia600px no breakpoint1920. Abertura150px tablet/120px mobile. Preservar mídia local e indicação de vídeos pendentes.

## Works / Projetos

Reproduzir abertura da Works: padding184px (273px >=1440), título24ch, caption30px com círculo, botão primário. Entrada por caracteres back.inOut. Faixa laranja com tipografia128px máxima e loop contínuo. Coleção limitada1680px, imagens quadradas, gap36px (60px >=1440), offsets80px pares. Aplicar entrada de títulos e badge sem trocar conteúdo Traço.

## Galeria Vida — interações individuais

Reproduzir ações publicadas a-73 a a-80: offsets por card [0,7,5,5], [2,0,2,2], [-15,-8,0,10], [-10,-8,-10,0] em vw. Hover escala 1.1, rotação 0, 800ms back.out. Saída restaura escala e deslocamentos em 600ms; rotação usa ease. Limpar tweens e eventos ao desmontar.

## Transição após prêmios

Adicionar as cinco faixas decrescentes existentes no sistema, na cor #f9ebe4 da seção de prêmios, antes da galeria Vida no estúdio, conforme About da Ariyana.

## Cards da equipe — correção da posição final

Comparação visual com /about-us: cards entram sequencialmente de yPercent 100 e terminam em 0. A escada de 100/200/300px pertence às margens; grid usa stretch, não start. Preservar track 300vh, sticky 10%, scrub 0.8 e fluxo estático no mobile.

## About — fidelidade à página publicada da Ariyana

Reproduzir medidas, abertura por caracteres, contador em colunas, cartões que reduzem a largura durante a rolagem (sem deslocamento horizontal), equipe em estágio sticky com entrada sequencial, galeria com entrada e afastamento no hover, e preenchimento vertical dos prêmios. Desktop usa tracks de 300vh, sticky a 10%, scrub 0.8; até 991px as seções voltam ao fluxo normal. Manter conteúdo e recursos locais da Traço e avisos demonstrativos existentes. Validar /sobre em desktop e mobile, navegação e limpeza das animações.

Fidelidade integral da apresentação Ariyana: restaurar escala original do título (sem redução de 10%), largura máxima de 29ch, tracking -0,01em, margem superior de 40 px e inferior de 32 px. Container central de até 1680 px com 5% de respiro lateral; etiqueta em DM Sans 600/30 px e círculo de 28 px, com reduções responsivas da referência. Imagem de 350 px no desktop e 449 px a partir de 1920 px. Preservar conteúdo da Traço, nota demonstrativa, botão e revelação das palavras.

Redução visual aprovada do título de apresentação: diminuir o font-size em 10% em todas as telas, mantendo a largura proporcional já ajustada. No desktop de 1920 px, passar de 84 px para 75,6 px. Preservar conteúdo e animação.

Apresentação abaixo do hero: remover o teto fixo de 820 px da coluna. O título deve ocupar até 29ch com a mesma escala heading-medium da referência, sem alterar texto ou animação. Medir fonte e largura nas mesmas viewports para distinguir tamanho de fonte de quebra de linha.

Hero e rodapé: remover o botão WhatsApp do rodapé conforme solicitado. Igualar o subtítulo do hero à referência: 96 px a partir de 1920 px; manter 6vw no desktop menor, 8vw no tablet e 44 px no celular, como na Ariyana. Preservar texto, fontes e animação de entrada.

Isolamento dos caracteres animados: usar spans com classe própria, separados do ícone circular do CTA. O tamanho, o fundo e o arredondamento do ícone jamais devem alcançar as letras, inclusive durante o hover e navegação entre páginas. Comparar botão principal, secundário e CTA com a referência em repouso e em movimento.

Consistência dos botões: aplicar a troca de letras também aos CTAs de contato, WhatsApp e newsletter. CTA grande mantém a escala de 0,9 no hover e stagger de 0,6 s da referência. Preservar variantes de tamanho, ações de formulário e botões funcionais de menu, vídeo e acordeões.

## Botões e links do rodapé — referência Ariyana

Reproduzir as duas variantes: botão principal com Bebas Neue 24 px, traço de 25 px, borda de 2 px e pequenos recortes; variante secundária com DM Sans e espaçamento de 20 px. Letras duplicadas com troca vertical por caractere e tempos da referência. Rodapé usa duas linhas de texto com stagger de 0,2/0,3 s, sem reversão ao sair. Preservar destinos, conteúdo, paleta e revelação do rodapé. Oferecer o mesmo efeito por foco de teclado, movimento reduzido e limpeza ao desmontar.

# Traço — estudo conceitual

Entradas de todas as seções (09/10/2026): auditar todos os elementos, reproduzindo os alvos da Ariyana sem acrescentar fade genérico. Títulos: caracteres mascarados de -100% a 0, 1s, stagger total 0,5s, back.inOut. Parágrafos: 0,8s, atraso 0,2s, stagger total 0,4s, power3.out. Gatilho top 90%, uma execução por visita. Badges: opacity 0→1 e scale 0,5→1, 0,6s, back.out, após 1s. Depoimentos: cards de 100vw/40 graus, 1s, stagger 0,4s, back.out, top center, apenas acima de 991px. Preservar scrubs do estúdio, projetos, vídeo e círculo de fotos, assim como os elementos estáticos da referência. Sem mudanças em textos, cores, dimensões ou navegação. Movimento reduzido, SSR legível e limpeza nas rotas obrigatórios.

Organização híbrida autorizada: usar classes Tailwind com prefixo `tw:` para propriedades simples de layout, alinhamento, dimensões e espaçamentos fixos. Manter CSS por seção para composição fluida (clamp/calc), tipografia editorial, estados, seletores contextuais e efeitos de rolagem. Expor os tokens existentes ao tema Tailwind, sem duplicar cores. Comparar estilos calculados antes/depois e revisar largura/altura de telas variadas. Preservar funcionamento, conteúdo, navegação e animações ao corrigir problemas de responsividade.

Ambientes para viver: manter a sobreposição também em telas menores, com um respiro de rolagem entre os painéis (160–260 px conforme a altura visível). Painéis altos rolam até mostrar a parte inferior antes de fixar; só depois desse respiro o próximo ambiente começa a cobrir o anterior. Medir novamente quando conteúdo, menu ou viewport mudarem. No celular, reservar espaço abaixo do CTA para o WhatsApp flutuante. Manter leitura normal com movimento reduzido e sem JavaScript. Não reduzir ou ocultar descrições para fazer o botão caber.

Escala mais compacta aprovada: reduzir títulos da coleção e dos detalhes; limitar galerias a 1280 px e capa a 1120 px. Fotos de uso e detalhe em formato horizontal, com proporção 4:3 no celular. Recortes móveis dos projetos serão refeitos a partir dos originais para preservar mais contexto. Ajustar espaços verticais e tamanhos responsivos das imagens somente nas páginas de projetos.

Refinamento de clareza aprovado: submenu Ambientes somente na Home; Projetos identifica a coleção em todas as páginas. Categorias são os títulos dos cards, nomes dos estudos ficam em segundo plano. Fotos horizontais no desktop, retrato no celular, desnível discreto entre colunas. Detalhes mantêm apresentação, fotos e contato; próximo projeto vira navegação compacta, sem bloco promocional separado. Sem novas pastas, dependências ou alterações de rotas.

Página Projetos aprovada: coleção editorial de seis ambientes com páginas individuais, capas e três vistas de cada estudo. Galeria assimétrica, recortes responsivos WebP locais, transição compartilhada, contato e footer. Conteúdo identificado como estudo conceitual, sem dados de obras realizadas. Brief e estrutura em ../secoes/projetos.md.

Marca fictícia autorizada pelo usuário para portfólio de web design. Segmento: móveis planejados.
Direção: editorial arquitetônica, composição assimétrica, madeira natural, linhas técnicas.
Paleta vigente: marfim #F5F1EA predominante, azul-ardósia #27323A, bege quente #DCC5B7 e marrom terroso #897061. Branco #FFFFFF como apoio no FAQ. Fonte: Plus Jakarta Sans variável local.
Referência visual: segunda prancha aprovada para implementação exploratória.
Escopo: header compartilhado, submenu Ambientes, menu mobile e Home editorial.
Movimento: revelações discretas com Framer Motion; respeitar prefers-reduced-motion.
As imagens são estudos gerados por IA, não fotografias de trabalhos de uma empresa real.
Não há formulário de captação, número de telefone ou promessa comercial fictícia.

Revisão do rodapé: Instagram da Traço junto aos canais de contato, destino fornecido pelo usuário mantido em contact.ts. Crédito CREATED BY/VBG separado. Header com Contato e acesso à visão geral dos ambientes; menu compacto abaixo de 1200px.

Menu mobile: painel carvão com bordas de respiro, títulos editoriais em marfim, divisórias finas e CTA areia. Cabeçalho e contato persistem; somente a navegação interna rola. Submenu de ambientes em duas colunas com revelação suave. Desktop preservado.

Ambientes permanece na Home. O submenu usa acordeões com uma dúvida prática por ambiente, resposta curta, link para a seção e WhatsApp contextual. Estilos claros no desktop e carvão no mobile; somente um item aberto por menu.

Teste Serviços → Processo: em desktop com altura disponível, as seções ocupam o mesmo plano. O scroll vertical controla a entrada do Processo pela margem esquerda, cobrindo Serviços; ao subir, o movimento se inverte. Mobile, telas baixas e movimento reduzido preservam o fluxo vertical. Links internos usam marcadores no fluxo para chegar ao painel correto, e o foco de teclado revela o painel correspondente.

Simplificação dos CTAs: o bloco de materiais mantém apenas título e texto; no rodapé, WhatsApp concentra a ação de contato, sem repetir o telefone abaixo. Instagram recebe 20px de respiro acima.

Página Sobre (/sobre): adaptar a abertura da Home One de Archiesta à paleta marfim, carvão e cobre e à Plus Jakarta Sans existente. No desktop, texto à esquerda sai horizontalmente enquanto a imagem expande; apresentação breve sobre a imagem e composição final de três estudos visuais sobrepostos, com texto à direita e palavra NOSSO TRAÇO na base. Encerrar com o footer compartilhado. Mobile e movimento reduzido mantêm leitura vertical. Imagens geradas autorizadas pelo usuário, identificadas como estudos, em WebP com recortes desktop/tablet/mobile. Não inventar história, equipe ou projetos realizados.

Transição entre Home e Sobre: cortina marfim com marca e traçado em cobre, cobrindo a troca de rota antes de revelar a página. Navegação interna pelo App Router, preparação do destino e das âncoras sob a cortina. Links dentro da mesma página mantêm scroll suave. Movimento reduzido omite a cortina animada. Sem spinner genérico nem bloqueio prolongado.

Revisão aprovada — FAQ e paleta: FAQ independente depois do Estúdio e antes do
Contato, com as cinco perguntas e respostas já existentes sobre ambientes.
Título e introdução na coluna esquerda acompanham o scroll apenas dentro da
seção em desktop; perguntas à direita, todas fechadas e uma aberta por vez.
Mobile e telas baixas usam fluxo normal. Ambientes volta a links diretos.
A Home e Sobre usam a nova paleta: marrom nas aberturas, branco nas áreas de
leitura, bege nos blocos de contraste, azul-ardósia no footer e fundos escuros.
Textos pequenos sobre marrom usam branco para contraste. Cores oficiais dos
ícones de plataformas permanecem. As descrições anteriores registram o histórico.

Refinamento aprovado: marfim predominante nas áreas de leitura, header e
aberturas da Home e Sobre. Azul-ardósia nos textos, CTAs principais e footer;
bege no Processo, Contato e blocos de apoio. Marrom reservado a traçados e
detalhes, sem grandes fundos. FAQ permanece branco. Textos pequenos sobre
marfim usam azul-ardósia, pois o marrom original não oferece contraste 4,5:1
nesse fundo. Preservar tipografia, imagens e comportamento das animações.

Ajustes aprovados: amostra de material escura; final de Sobre bege separado do footer. Legendas descritivas dos materiais, sem aviso de geração na interface. Frase inicial da imagem em uma linha no desktop. Ícone Ambientes centralizado sem sublinhado; contato sem telefone repetido; voltar ao início circular com seta e nome acessível.

Abertura de Ambientes aprovada: fundo azul-ardósia #27323A apenas no bloco
da mensagem. Título revelado em marfim #F5F1EA, legenda e seta claras;
palavras ainda não reveladas em tom suave legível. Galeria preserva fundo
marfim e textos escuros. Movimento reduzido exibe o título inteiro em marfim.

Entrada inicial aprovada: reutilizar a cortina com marca e símbolo da navegação
na primeira abertura e ao recarregar. Revelar após preparar fonte e imagem
principal, com espera limitada e sem atraso mínimo artificial. Menus na mesma
página preservam scroll suave; movimento reduzido omite a entrada. Sem JavaScript,
a cortina deve desaparecer automaticamente e deixar o conteúdo acessível.

Ajuste aprovado — Serviços e Processo: preservar a entrada horizontal do Processo também em telas de desktop baixas e tablets a partir de 768px. No celular, manter a sobreposição vertical dos serviços independentemente da altura da tela. Imagem do acordeão limitada pela altura útil da viewport, com respiro para descrição e controles; preservar estado, interação e preferência de movimento reduzido.

Ajuste aprovado — abertura de Ambientes: manter o texto preso e a revelação por palavras também em viewports com altura até 650px. Ajustar tipografia, espaçamento e altura mínima pela altura útil. Somente a preferência de movimento reduzido exibe a mensagem inteira sem animação. Galeria e sobreposições permanecem.

Refinamento aprovado — fim do Processo: liberar a altura herdada de Serviços quando a entrada horizontal termina. Preservar o respiro normal abaixo do CTA e da legenda, sem prolongar o fundo bege por causa de uma seção já encoberta. Ao subir, Serviços volta a participar do palco para manter a reversão da animação.

Ajuste aprovado — texto sobre a imagem de Sobre: ampliar discretamente a tipografia da frase de apresentação, de clamp(25px, 2.6vw, 42px) para clamp(28px, 3vw, 48px), ampliando a largura de leitura proporcionalmente. Preservar contraste e animação.

Revisão solicitada — frase sobre a imagem de Sobre: o primeiro aumento ficou sutil. Ampliar para clamp(36px, 4vw, 64px), com largura de leitura até 1200px, mantendo as duas frases equilibradas e a animação existente.

Navegação aprovada: substituir O processo por Como funciona, Estúdio por Nosso olhar e Dúvidas por Perguntas frequentes. Aplicar a configuração compartilhada no header, menu mobile e rodapé; preservar os destinos das âncoras e a rolagem suave.

## Direção vigente — Ariyana Studio — revisão de 2026-10-08

Reproduzir rigorosamente a estrutura, proporções, fontes e interações de https://ariyana-studio.webflow.io/. Esta direção substitui as descrições visuais anteriores. O usuário autorizou alterar toda a apresentação, preservando a linguagem/stack do projeto e as fotos de ambientes. Em 2026-10-08 também autorizou conteúdo do Ariyana traduzido e identificado como demonstração.

Fontes locais Bebas Neue e DM Sans. Branco #fff, preto #121212, cinza #f0f0f0 e linho #e9dcd2, com cores de destaque da referência. Home: hero, apresentação e seis anos, processo com quatro cartões independentes sem fotos, quatro projetos em perspectiva, marcas e citação, quatro serviços, reel, círculo de fotos, quatro depoimentos, CTA duplo e footer. Histórico horizontal também no mobile; processos expostos em fluxo vertical no mobile. Menu completo em overlay. Sobre, Projetos e detalhes, Serviços, Contato, Blog/artigos e informações acompanham a referência.

Usar fotos de ambientes do próprio projeto. Recursos gráficos, retratos e marcas da referência apenas em blocos demonstrativos, com procedência documentada. Datas, métricas, clientes, equipe, premiações e depoimentos não devem ser apresentados como fatos da Traço. Vídeos aguardam envio; manter foto e indicação clara, sem botão de reprodução falso. Contato e newsletter demonstrativos, sem transmissão externa. Respeitar movimento reduzido, navegação por teclado e a arquitetura por seção. Inventário e revisão registrados na auditoria e nos outputs da conversa.
Revisão de 2026-10-08: vídeo local do reel recebido e integrado; marcas em grade de 22 colunas, sem curvas externas em Marcas/Serviços; barras após Serviços e antes do footer; marca do footer com degradê branco/preto e sem área branca no fim. Os quatro vídeos específicos de Serviços continuam pendentes.

Header Ariyana — 2026-10-08: reproduzir as proporções do header, círculos vazados e troca vertical dos rótulos. Menu ocupa a tela com marca em gradiente, faixa inclinada e links com preenchimento laranja. X de duas linhas: desktop a partir de 1440 px no topo (28/36 px), entre 992 e 1439 px à direita a 15% da base, tablet/celular no topo (16 px). Manter dialog nativo, Escape, retorno de foco e movimento reduzido.

Por dentro da Traço — 2026-10-08: título escurece palavra por palavra com scroll, conforme data-text-reveal do Ariyana. Opacidade 0,3→1, duração 0,5, intervalo 0,25, ease none, scrub 1,2; início top bottom e fim bottom center, com clamp. Reversível ao subir. Movimento reduzido e ausência de JavaScript mantêm título escuro e legível; nome acessível único. GSAP já instalado, sem nova dependência.

Transição Estúdio → Processo — 2026-10-08: espaço branco abaixo do histórico, como about_section do Ariyana. Aplicar padding-bottom com section-space (150/100/80/64 px), mantendo o arredondamento da seção Processo e as imagens existentes.

Correção em notebook — 2026-10-08: o histórico fixado passa a ter altura automática e altura mínima de viewport, incluindo o conteúdo real. ResizeObserver mede a faixa e ajusta o top para que painéis altos rolem até revelar as fotos antes de fixar. Preservar margem branca de section-space ao final, sem transbordamento das imagens sobre Processo.

Animações Ariyana — 2026-10-08: entrada inicial com marca em letras, cortina saindo em 1s a partir de 1,44s; foto expandindo em 1,5s a partir de 1,6s; título 2,57s, subtítulo 3,46s, descrição 4,06s, redes 4,89s e métrica 5,05s. Play Reel: progresso da entrada até bottom bottom, keyframes 32/42/60%, máscara 50vw×40vh→100vw×100vh, textos das bordas→±34vw, opacidade 0→1, suavização Webflow 90%. Líderes: giro 0→360° com suavização 85%, abertura em leque 1s, opacidade central 0,5→1 e órbita 1→0,8 ao hover desktop. Fotos da Traço preservadas; movimento reduzido e leitura sem JS preservados.

Correção de recarga por âncora — aguardar as fontes e a conclusão da cortina antes de posicionar a seção. Usar posicionamento instantâneo na restauração para evitar disputa com as animações de scroll durante o carregamento. Navegação por links continua suave.

Correção solicitada — a recarga da home sempre executa a cortina e inicializa a entrada do hero, inclusive com âncora ou posição restaurada. Líderes mantém o leque enquanto a seção está visível: gatilho usa a seção estável, e a saída não recolhe as imagens antes de elas deixarem a tela.

Líderes em notebook — altura mínima considera o diâmetro real da órbita (76vw mais 160px de respiro), não somente 150vh. Tablet/celular também acomodam as fotos e a legenda; legenda fica 32px acima da base. Evitar cortes na borda da seção e sobreposição com depoimentos.

# Header da Traço — efeitos da Ariyana (2026-10-09)

Detalhes de projeto — 2026-10-10: reproduzir a estrutura de Floral Botanical Matt Business Card: abertura 184/273px, capa de largura total 192/65, duas fotos 9/10 deslocadas, indicadores em h5 com contador vertical, segunda panorâmica 12/5, frase central em quatro linhas com máscara vinculada ao scroll, resultado rosado com texto e três imagens sticky (80px), fotos 81/70. Preservar conteúdo, recursos locais, navegação e identificação das métricas demonstrativas. Desativar movimento decorativo em reduced motion.

Auditoria dos artigos — 2026-10-10: comparar cabeçalho editorial de 1000px, título h4 sem limite em caracteres, espaçamento a partir do topo da página e imagem 12/5 (3/2 somente até 479px). Parágrafos 20px/1,5, citação em fonte display com borda preta de 2px. Preservar imagens e avisos demonstrativos, posicionando o aviso fora do cabeçalho para não alterar sua composição. Verificar os quatro títulos em desktop e celular.

Reproduzir a troca vertical de letras com atraso progressivo nos links do header e o giro do toggle de -45° para 0°, expandindo as duas linhas curtas até a largura da central. Manter a composição, links, abertura e fechamento do menu. Aplicar também ao foco de teclado e respeitar a preferência por movimento reduzido.

Cabeçalho dos artigos: data em DM Sans 600, 30px, com círculo preto de 28px e gap de 10px; título com tracking -0,01em e quebra equilibrada para evitar uma palavra isolada na última linha. Data responsiva de 24/20px, círculos 20/18px.
Detalhes em telas largas: aplicar contêiner máximo de 1680px a abertura, narrativa, dupla de fotos, indicadores e resultado. Capa e panorâmica continuam ocupando a largura completa. A confirmação anterior em 1536px não cobria esse limite.
Footer: substituir utilitários por Instagram da Traço com ícone, perfil no Google com letras nas cores da marca e cuidados com seus móveis. Por solicitação do usuário, os três itens são textos sem links enquanto os destinos não forem definidos.
Footer mobile: contato ocupa largura completa; duas colunas para navegação e projetos/artigos; informações em largura completa; divisórias entre blocos, textos sem links preservados e sem novo CTA. Manter fundo preto da Traço.
CTA flutuante: WhatsApp Solicitar orçamento em verde claro da Traço após o hero (ou 400px em páginas internas), oculto junto ao contato/footer com respiro de 32px; ícone compacto no mobile e safe area. Footer recebe Voltar ao topo. Movimento reduzido respeitado.
Revisão CTA: círculo verde #25d366 com símbolo branco do WhatsApp em todas as telas. Voltar ao topo passa a ocupar a mesma posição flutuante somente junto a contato/footer e após 400px de scroll; removido do conteúdo do footer.
Página Sobre: remover referências à agência digital, avaliações, números, equipe e prêmios demonstrativos. Usar conteúdo editorial sobre móveis planejados e imagens locais de ambientes; preservar entradas de texto e comportamento dos cards. Fotos reais da empresa e dados institucionais continuam pendentes, sem afirmar resultados ou histórico.

## Símbolo, ambientes e avaliações — 10/10/2026

Substituir o símbolo da referência pelo sinal // já usado na marca Traço. Substituir as seis logos fictícias por desenhos de cozinhas, quartos, salas, banheiros, home office e armários. Preservar a composição da grade e a linguagem monocromática. No bloco de avaliações, manter quatro cards e animações, usar fotos públicas locais do perfil Google Bruno Mariano Silva, textos originais ou trechos identificados e nota conferida em 10/10/2026. Explicitar que o perfil é de Bruno Mariano Silva (webdesigner), sem atribuir avaliações à Traço. Referência enviada: resumo Google, estrelas, retratos, links para consultar e CTA para avaliar. Preservar a paleta da Traço e assegurar leitura em telas pequenas.

## Paleta da página inicial — 2026-10-10

Escopo aprovado: somente cores da Home. Preservar conteúdo, imagens, fontes,
layout, dimensões dos botões e todas as animações existentes. Não adaptar as
outras páginas nesta etapa.

Base #f8fafc, texto e blocos escuros #0f172a, destaques e CTAs #2563eb,
apoio #bfd4ff. Fundos intermediários são misturas dessas quatro cores:
apresentação clara, Processo azul muito suave com cartões brancos, galeria com
painéis em azuis suaves, Marcas e footer escuros, Serviços azul claro,
depoimentos alternando fundos suaves e azul principal, CTA principal azul.
Sobre fotos, preservar texto branco e overlay escuro. Preservar cores próprias
das marcas e o verde do WhatsApp flutuante.

Tokens condicionados à presença de .home-palette, sem mudar a paleta global das
outras rotas. home-colors.css contém apenas propriedades de cor e alcança header,
menu e footer compartilhados somente enquanto a Home está renderizada.

## Marca Fritz — 2026-10-10

Logo real fornecida pelo usuário em shared/fritz/fritz-mark.png. Nome Fritz com
“Higienização e impermeabilização” abaixo no cabeçalho, abertura, menu,
transição e rodapé. Substituir o símbolo Traço e os ícones antigos. Preservar
a paleta aprovada, os efeitos existentes e a composição das seções.

Correção de escopo — 2026-10-10: Hero restaurado ao conteúdo e à estrutura anteriores à troca de marca. Manter apenas a paleta aprovada; aguardar pedido específico para adaptar o Hero. Futuras alterações substituem elementos existentes, sem acrescentar títulos, blocos ou alterar o layout.

## Faixa de diferenciais Fritz — 2026-10-10

Substituir apenas textos e imagens dos cards da faixa horizontal por cinco pontos de cuidado com estofados. Preservar a introdução, a logo, o CTA, o CSS e toda a animação. Usar WebPs fornecidos como imagens ilustrativas; não apresentar resultados reais, métricas ou benefícios de saúde sem comprovação.

## Processo de atendimento Fritz — 2026-10-10

Atualizar somente os textos existentes da seção Processo: envio de fotos para orçamento, combinação do atendimento, realização do serviço e cuidados posteriores. Preservar quatro cartões, botões expansíveis, cores, layout e animações. Não prometer prazos de secagem, resultados ou métodos técnicos não confirmados.

## Fechamento da faixa de diferenciais — 2026-10-10

Adicionar o card 06 como conclusão, com convite para solicitar orçamento. Substituir a área fotográfica desse card por um CTA de WhatsApp com ícone local. Preservar fonte, número, etiqueta, dimensões e animação dos cartões existentes. O link usa o contato Fritz já configurado.

### Home — Por que escolher a Fritz

Seção de painéis adaptada com textos de consulta, cuidado com as peças, impermeabilização e contato direto. Fotos ilustrativas de higienização em WebP para desktop, tablet e mobile. CTAs direcionam ao WhatsApp com mensagens por assunto. Preservados CSS, fontes, estrutura e animações. Sem atribuir resultados reais ou vantagens não confirmadas à empresa.

### Home — Agradecimento da Fritz

Adaptar somente textos e ícones da grade Trust para agradecer a confiança na Fritz. Seis ícones lineares locais: sofás, colchões, poltronas, tapetes, cadeiras e impermeabilização. Manter posições, dimensões, cores, tipografia e animações existentes.

### Seção de serviços da Fritz

Manter os quatro blocos e todo o CSS existente. Conteúdo: higienização de estofados, colchões, tapetes e impermeabilização. Fotografias ilustrativas locais em WebP para três telas, sem promessas de saúde ou resultados garantidos. Componente compartilhado pela home e página de serviços; abertura da página preservada.

### Simplificação da seção Serviços

Título curto Serviços Fritz, sem introdução nem etiquetas de características. Legendas identificam o serviço. Impermeabilização usa fotografia disponível de gotas sobre tecido, mantida na resolução original de 400×200 para não ampliar artificialmente; três arquivos WebP para as telas existentes.

### Parágrafos de serviços

Usar caixa normal, peso 400 e entrelinha 1.5 para distinguir os parágrafos dos títulos. Preservar os tamanhos existentes de 20px e 16px no mobile.

### Padrão dos títulos e cores dos serviços

Quebra explícita antes do nome da peça nos quatro títulos. Diferenciar as linhas com fundos azul claro #dce8ff, #edf3ff, #d2e1ff e #e4edff, sem mudar fontes, espaçamentos ou animações.

### Fundos dos serviços de margem a margem

Estender as cores horizontalmente até as bordas da tela por uma camada decorativa recortada, preservando largura, margens do conteúdo e comportamento sticky dos cards.

### Círculo de imagens da Fritz

Preservar composição, dez posições e movimentos. Texto Cuidado de verdade e faixa Fritz, cuidado em cada detalhe. Incluir foto fornecida do profissional e imagens de sofás, colchões, poltronas, tapetes, cadeiras e impermeabilização. Versões WebP quadradas de 500px, 360px e 240px sem ampliação. CTA Conheça a Fritz permanece para /sobre.

### Avaliações reais da Fritz

Perfil Google Maps verificado em 10/10/2026: 5,0 e 289 avaliações. Três trechos identificados como tais: Camila Rosa Gomes, Bia Marina e Ketti Pars, com fotos públicas baixadas e convertidas para WebP. Links para perfil da empresa e perfis dos autores. Palavra Google com cores por letra, estrelas amarelas, sem mudar tamanho de título ou layout.

Quarto card restaurado com trecho e foto pública da avaliação de cinco estrelas de Thays Leal, verificada no perfil da Fritz. Mantida composição original de quatro cards.

### CTA de avaliação Google

Aplicar quatro gradientes radiais com azul, vermelho, amarelo e verde do Google somente ao CTA Deixar uma avaliação. Texto escuro para leitura nas áreas claras. Preservar dimensões e animação HoverLabel.

### Refinamento do CTA Google

Substituir degradê por fundo branco, texto azul escuro, borda cinza suave e ícone G nas cores oficiais. Hover azul claro com borda azul. Preservar formato e animação do botão.

### Faixa final de contato da Fritz

Texto animado Seu estofado merece o cuidado da Fritz e CTA Orçamento pelo WhatsApp com mensagem específica para higienização ou impermeabilização, envio de fotos e localização. Preservar animações, dimensões e cores da faixa.

### Página Sobre — etapa de cores

Aplicar a paleta Fritz #f8fafc, #0f172a, #2563eb e #bfd4ff à página inteira. Fundos claros, cards alternados em azul, azul escuro e azul suave, títulos escuros e botões azuis. Compartilhar a paleta já aplicada na home para header, footer e contato. Preservar todos os textos, imagens, medidas e movimentos nesta etapa.

Preferência explícita: nunca remover áreas de cor existentes sem solicitação do usuário. Na abertura Sobre, manter o círculo destacado em azul suave #bfd4ff, preservando seu contraste com o fundo.

### Sobre — áreas atendidas e princípios

Lista de sete cidades fornecidas pelo usuário substitui os cinco itens antigos. Três cards passam a Missão, Visão e Valores, com frases curtas de propósito, sem métricas nem certificações inventadas. Todas as imagens desta página passam a recortes da foto real do profissional fornecida pelo usuário; excluir da exibição imagens geradas ou de origem não confirmada. WebP responsivo sem ampliação. Preservar cores, dimensões e movimentos.

### Correção da variedade de fotos na página Sobre

Manter retrato fornecido apenas no destaque AboutStats. Usar seis fotos distintas verificadas nas avaliações de Bia Marina, Ketti Pars e Camila Rosa Gomes no perfil da Fritz para abertura e galerias. Não indicar antes/depois ou resultado garantido. Todas convertidas em WebP sem ampliação.

### Home — fundos e legibilidade do reel

Fixar fundos claros em branco frio e azuis da paleta Fritz, preservando as áreas coloridas existentes. Melhorar o contraste de Play Reel sobre o vídeo com texto branco e sombra. Manter “de estofados” junto na segunda linha do título de impermeabilização, sem alterar tamanho de fontes ou animações.

### Home — fundo gelo aprovado

Aplicar #f1f5f9 aos fundos claros da Home e seus separadores. Preservar os blocos azuis, cores da página Sobre, tipografia e animações.

### Sobre — fundo gelo aprovado

Aplicar #f1f5f9 como fundo claro da página Sobre, incluindo os separadores e componentes compartilhados. Preservar círculo azul, cards coloridos, fotografias, fontes e animações.

### Serviços — paleta Fritz e fundo gelo

Aplicar à página Serviços os mesmos tokens e cores dos componentes compartilhados da Home. Fundo #f1f5f9, detalhes da abertura em azul, sem remover círculos, triângulo ou áreas coloridas. Preservar textos, fotos, medidas e animações.

### Contato — paleta Fritz e fundo gelo

Aplicar fundo #f1f5f9 à página Contato, campos em azul suave, foco e aba selecionada em azul Fritz, textos em azul escuro. Reutilizar cores dos componentes compartilhados. Preservar conteúdo, dimensões, animações e funcionamento do formulário.

### Projetos — primeira etapa, somente cores

Aplicar à página de listagem Projetos o fundo gelo #f1f5f9 e a paleta Fritz. Preservar o círculo da abertura em azul suave, substituir faixa laranja por azul e selo verde por azul suave. Manter textos, imagens, dimensões, interações e animações.

### Projetos — adaptação para registros reais da Fritz

Substituir conteúdo de marcenaria da listagem por seis registros reais já verificados nas avaliações da Fritz, em WebP responsivo. Manter grade e animações. Descrever as peças sem inventar antes/depois ou resultados. Cards e CTA direcionam ao WhatsApp para orçamento. Faixa animada azul #2563eb com texto branco e nomes dos serviços. Atualizar metadados da listagem.

Correção da faixa de Projetos: fixar azul #2563eb e texto branco diretamente no elemento para impedir que estilos antigos da faixa laranja prevaleçam.

### Blog — listagem e leitura dos artigos

Aplicar fundo gelo e paleta azul à listagem e às quatro páginas internas. Remover a frase introdutória indicada na captura. Adaptar os quatro artigos para cuidados com estofados, impermeabilização, cadeiras e solicitação de orçamento, sem alegações técnicas não verificadas. Usar fotos reais WebP responsivas já disponíveis. Preservar slugs para não quebrar Ler artigo, layout, tipografia e animações.

### Detalhe acessado por Inspiração de cozinha

Adaptar somente o detalhe cozinha-encontro para cuidado da Fritz com estofados, mantendo a rota existente e estrutura animada. Fotos reais WebP, descrição sem garantias ou antes/depois, resumo do atendimento e CTA WhatsApp. Fundo gelo e blocos azuis. Renomear os dois links antigos de cozinha no rodapé conforme seus destinos atuais.

### Auditoria completa Fritz — conteúdo, mídia e SEO

Eliminar conteúdo e referências visíveis do modelo de marcenaria em todas as rotas e módulos de conteúdo, incluindo páginas acessadas diretamente. Preservar layout, cores aprovadas e animações. Usar nomes de rotas ligados aos serviços com redirecionamentos permanentes dos antigos. Configurar domínio higienizacaofritz.vercel.app, canonicals e compartilhamento com google.jpg fornecida (1200x630), vídeo download.mp4 no reel, sitemap e robots. Dados estruturados somente com fatos confirmados. Validar conteúdo renderizado e recursos; não publicar automaticamente.

### Ajustes de responsividade — 11/10/2026

No celular, missão, visão e valores ficam em uma coluna, com altura uniforme e texto protegido por espaçamento interno. Os links do rodapé permitem quebra de linha sem corte. Preservar as três cores e os efeitos de desktop. Renomear a navegação Projetos para Galeria, mantendo as URLs existentes.

### Empilhamento dos valores no mobile — 11/10/2026

Somente Missão, Visão e Valores ganham cards sticky com deslocamento vertical progressivo para preservar os títulos anteriores. Manter cores e desktop, com alternativa estática para movimento reduzido.

### Cores nas áreas atendidas — 11/10/2026

Diferenciar as cidades com sequência de gelo e dois azuis claros da paleta, preservando texto navy, leitura e efeito de desktop. Acrescentar respiro lateral às linhas.

### Refinamento editorial e mobile — 11/10/2026

Encurtar os textos repetidos da Home, distinguindo apresentação, processo, diferenciais e serviços. Ajustar apenas espaços estáticos no mobile. Preservar todos os CTAs, dados, seções, URLs, formulários, cores e animações atuais.

### Abertura com logo — 11/10/2026

Manter a tela e a lógica de carregamento, exibindo somente a marca gráfica da Fritz centralizada, sem texto adicional nem linhas decorativas.

### Entrada sincronizada — 11/10/2026

Reduzir somente a espera artificial da tela de carregamento em 1,44 segundo. Preservar a animação original de entrada, sua transição e a sincronização do hero.

Limitar a espera inicial por fontes e imagem a 250 ms (antes 1.200 ms) e o fallback da Home a 1 segundo (antes 4 segundos). Manter a animação de saída da logo e a entrada do hero.

### Responsividade em tablet — 11/10/2026

Validar todas as páginas em 1024 × 776, incluindo rolagem, animações, menu, imagens, formulários e footer. Corrigir cortes reais com estilos específicos para tablet, preservando conteúdo, paleta, funcionalidades e animações de entrada.

Ajustes confirmados: reservar espaço superior da marca no menu entre 992 e 1199 px; exibir avaliações em duas colunas nessa faixa para evitar que os cards escondam os comentários. Manter animações, cores e quatro avaliações.

No footer, reservar 72 px no lado dos créditos entre 992 e 1199 px para que o botão flutuante de voltar ao topo não cubra a marca da agência.

### Complemento da validação — cards finais e tablet de 768 px

Calcular o fim da rolagem horizontal pela largura real do conteúdo e da área disponível, para que o último card apareça inteiro. Em 768–1199 px, centralizar a faixa da seção Cuidado de verdade e manter o texto opaco. Em 768–991 px, organizar o footer em duas colunas e limitar a largura do formulário para evitar o botão flutuante.

Na regressão de 320 px, limitar a largura dos cards a viewport menos 48 px, garantindo o último card inteiro também nas telas estreitas.

### Referência responsiva Ariyana — 11/10/2026

Comparar a Home de https://ariyana-studio.webflow.io/ em 320, 390, 479, 767, 768, 1024 e 1440 px. Preservar identidade Fritz, conteúdo, imagens, animação de entrada, rolagem horizontal, vídeo, navegação e WhatsApp. Aproveitar a tipografia de 16 px dos cards da faixa no tablet e o respiro lateral de 20 px dos cards estáticos no celular. Dimensionar o botão do Google e a faixa do menu para as frases mais longas em português, sem excluir texto, ícones ou cores. Manter avaliações legíveis em duas colunas no tablet e footer com largura adequada, mesmo quando a referência usa sobreposição ou colunas estreitas.

Na comparação dos limites, manter as etapas em duas colunas entre 480 e 767 px, evitando a grade de três cards e um isolado causada pelo auto-fit. Corpo das descrições em 16 px no celular.

### Medidas verificadas da referência — 11/10/2026

Substituir a aproximação anterior pelas medidas reais do CSS e do navegador da Home Ariyana em 396×852, 631×1040 e 629×932. Igualar escalas tipográficas, entrelinhas, margens, padding e raios responsivos, com tokens próprios da Fritz. A seção Escolher a Fritz usa a mesma escala h2 da referência. Aplicar os espaçamentos originais às etapas, cards de diferenciais e faixa de apresentação. Manter cores, conteúdo, fotos, WhatsApp, correção do último card e animação de entrada. Alturas automáticas acompanham os textos em português e as fotos existentes; não ocultar conteúdo para reproduzir a altura de um texto diferente.

### Contraste nos diferenciais — 11/10/2026

Distinguir os quatro cards empilhados com branco e azul Fritz, navy e azul claro, azul claro e navy, azul Fritz e azul profundo. Texto navy nas superfícies claras e branco nas escuras; CTAs com cores próprias e contraste também no hover e foco. Preservar o fundo externo azul suave, as duas áreas coloridas de cada card, dimensões, fotografias, conteúdo e animação de empilhamento.

### CTA final da faixa horizontal — 11/10/2026

Alinhar o card Solicitar orçamento à linguagem tipográfica do site: fundo azul Fritz, título branco em Bebas Neue em duas linhas, indicação discreta do WhatsApp e seta em círculo claro. Hover navy e foco visível, com movimento reduzido respeitado. Preservar altura e largura do card, rolagem horizontal, destino WhatsApp e rastreamento.

### Funcionamento do reel da Home — 11/10/2026

Reproduzir o comportamento observado e a configuração original da Ariyana: progresso da entrada do topo no viewport até a saída da base (start end → end start), suavização 90%, quadro de 50vw/40vh aos 32% e 100vw/100vh aos 60%, texto aparece entre 32–42% e se desloca ±34vw atrás do vídeo. Desktop sticky de 250vh; tablet e celular estáticos em 3:2, com raios 24/20/16px e espaçamento regular. Play/pausa inline, sem autoplay no reel, vídeo mudo e em loop. Manter vídeo enviado, variante Serviços, acessibilidade, movimento reduzido, paleta Fritz e entrada do hero.

### Separação dos fundos das etapas e diferenciais — 11/10/2026

Manter o bloco arredondado das etapas em azul suave e aplicar o fundo gelo da página à seção Escolher a Fritz. Tornar visível a separação entre as seções, como na referência, sem alterar espaçamentos, títulos, cores dos quatro cards ou animações.

### Harmonia dos cards de diferenciais — 11/10/2026

Substituir as combinações de alto contraste entre as duas áreas de cada card por pares próximos de azuis suaves. A área da fotografia usa uma variação um pouco mais profunda do fundo do texto, preservando a distinção entre as duas superfícies. Quatro variações da mesma família azul, com texto navy e CTA transparente contornado em navy, como a referência. Manter fundo externo gelo, estrutura, fotografias, dimensões, funcionalidades e movimentos.

### Transição após os serviços — 12/10/2026

Aplicar gelo somente ao padding inferior da seção Serviços, usando a mesma medida responsiva do espaçamento existente. Preservar o fundo azul do título, as quatro cores dos serviços, fotos, dimensões, efeito sticky e demais seções. A correção atende tanto a Home quanto a página Serviços.

### Correção da transição com as linhas da Home — 12/10/2026

Na Home, manter o azul do último serviço (#e4edff) no padding inferior e nas linhas decorativas imediatamente seguintes, eliminando o intervalo gelo que separava visualmente as linhas do bloco. Na página Serviços, preservar o espaço final em gelo antes das avaliações. Não alterar alturas, espaçamentos, efeitos sticky ou vídeo.

### Sobre: intervalo e ícones dos princípios — 12/10/2026

Igualar à referência a ausência de padding inferior em WhyChoose no desktop, eliminando 150px duplicados antes de O cuidado na prática. Manter o percurso de rolagem e os espaços do tablet/celular. Acrescentar SVGs decorativos locais de estofado com brilho, escudo com gota e mão com coração aos cards Missão, Visão e Valores. Ícones discretos no canto inferior direito, reduzidos no mobile, atrás do texto e ignorados por leitores de tela. Preservar cores e o empilhamento mobile.

### Nova paleta fosca Fritz — 12/10/2026

Aplicar ao site inteiro uma paleta centralizada: cobalto #3155c6, azul profundo #172341, gelo #f4f6fb, branco #ffffff, cinza fosco #e5e8ee, azul suave #cdd9f2, lavanda #e5dff2 e verde suave #dfebe6. As áreas de texto e fotografia dos diferenciais usam pares próximos, com variações foscas e contornos navy. Distribuir lavanda e verde como acentos nos cards de diferenciais, princípios e serviços; reservar o cobalto aos CTAs e faixas de destaque. Preservar todas as áreas coloridas, contraste de leitura, fundos contínuos dos separadores, fotos, dimensões, animações e funcionalidades. Google, Instagram, WhatsApp e estrelas mantêm suas cores próprias. Validar todas as páginas principais no navegador e leitura em mobile.

### Direção final da paleta: azuis e neutros — 12/10/2026

O usuário rejeitou rosa/lavanda e verde. A paleta final usa exclusivamente cobalto #2850c3, azul profundo #13213d, azul noite #263e72, azul aço #cedbea, gelo #f4f7fb, branco e cinzas frios foscos. Os diferenciais alternam azul suave, cinza claro, azul aço e azul noite, sempre com duas superfícies próximas; o card azul noite tem texto e contorno brancos. Princípios e serviços ganham variações claras de azul e cinza. Substituir os tokens lavanda e verde por stone e steel. Manter as cores oficiais dos ícones sociais e estrelas, imagens, todas as áreas de cor, layout e funcionalidades.

### Hero escuro com header integrado — 12/10/2026

Remover somente o fundo da faixa do header sobre a Home, mantendo logo, links, menu e linhas de navegação. Escurecer a fotografia do hero com uma camada azul profundo de 60% nas extremidades e 48% no centro, para valorizar os títulos brancos e a navegação. Preservar a fotografia, dimensões, animação de entrada e headers das páginas internas.

### Vídeos reais dos serviços — 12/10/2026

Substituir as imagens dos quatro serviços pelos vídeos enviados de estofados, colchões, tapetes e impermeabilização, na Home e na página Serviços. Preservar os cards 4:3, cores e empilhamento. Usar MP4 local otimizado e capa extraída do próprio vídeo. Carregar somente quando o vídeo entra na tela, reproduzir sem som em loop e pausar fora da área visível ou com a aba oculta. Disponibilizar controles nativos e respeitar a preferência por movimento reduzido.

### Princípios: rolagem mobile mais compacta — 12/10/2026

Remover as margens adicionais de 144px e 72px entre Missão, Visão e Valores no mobile. Preservar o gap de 16px, dimensões dos cards, ícones e posições sticky de 80px, 152px e 224px. Trocar o espaço final de 40svh por 144px, equivalente às duas faixas de título expostas, para completar o empilhamento com menos rolagem. Manter desktop, tablet a partir de 768px e movimento reduzido sem alteração.

### Navegação disponível ao rolar para cima — 12/10/2026

Fixar o header e preservar sua aparência original no topo: transparente sobre o hero e gelo nas páginas internas. Durante a página, usar fundo azul profundo e texto branco. Recolher após 28px de rolagem para baixo e revelar após 12px para cima; manter visível com menu aberto ou foco de teclado na navegação. Reservar a altura original nas páginas internas para evitar saltos de layout. Respeitar movimento reduzido, preservar links, diálogo e animação de entrada da Home.

Na primeira descida do hero, manter o header transparente enquanto ele se recolhe. Aplicar o azul quando a navegação for revelada durante a página e preservá-lo ao recolher novamente. Ao voltar ao topo, dissolver o fundo e a sombra em 400ms, eliminando a troca brusca de cor; movimento reduzido permanece sem transição.

Na auditoria das rotas, remover a posição absoluta legada do header da página Serviços no desktop. Preservar sua abertura com header transparente e sem espaço reservado nesse breakpoint; aplicar fundo azul quando revelado durante a rolagem, seguindo a navegação global.

### Largura de 1440px sobre a versão restaurada — 14/10/2026

Aplicar somente limite de conteúdo de 1440px às seções, centralizado, com fundos integrais. Manter a versão restaurada: fontes, cores, layout, hero, header e funcionalidades. Preservar limites menores de artigos e formulários. Adaptar apenas a medição horizontal dos cards ao viewport limitado para garantir o enquadramento do último card, sem mudar o tipo, duração ou trajetória proporcional da animação.

### Títulos e proporções abaixo do hero — 14/10/2026

Reduzir a escala dos títulos da Home, preservando as mesmas fontes, cores, estruturas e animações. Isolar o ajuste nos filhos da Home exceto hero: títulos principais até 112px, serviços até 64px, títulos intermediários até 56px e pequenos até 32px, com valores fluidos no mobile. Ajustar em conjunto espaços de seção, margens dos títulos, recuos e altura natural dos cards, etiquetas e números decorativos. Preservar os trajetos de scroll de 300vh, as sobreposições e a geometria da órbita; não alterar arquivos de animação, hero, header, vídeos ou navegação. Manter 1440px e verificar os cards completos no fim da rolagem, mobile e desktop.

### Cards de serviços com leveza editorial — 15/10/2026

Inspirar a composição dos cards na seção de Serviços da Adionn inspecionada: poucos elementos, ícone superior, numeração discreta, superfícies foscas e recuos consistentes. Adaptar os cards da Home da Fritz mantendo vídeos reais à direita no desktop e abaixo do texto no celular, fontes locais, paleta azul/gelo/cinza, largura 1440px, sticky e animações existentes. Delimitar cada card com cantos arredondados e intervalos, eliminando o fundo que vazava de ponta a ponta nesse bloco. Títulos em escala até 48px, descrições de leitura limitada, altura natural e vídeos sem mudanças funcionais. Não alterar a página Serviços interna, hero, header ou outras seções.

### Benefícios depois do hero — 15/10/2026

Adicionar somente uma seção logo após Hero, antes de Studio, sem reorganizar os demais blocos. Título aprovado “Seu estofado merece esse cuidado.” e três cards: cuidado com cada tecido, mais praticidade para sua casa e conversa direta com a Fritz. Usar os textos factuais aprovados, sem promessas de saúde ou resultados garantidos. Cards clean com ícones existentes, números discretos, superfícies foscas mist/stone/blue-soft, títulos Bebas Neue e corpo DM Sans. Preservar tokens da paleta e limite de conteúdo 1440px com fundo integral. Três colunas a partir de 768px, uma no celular; altura natural, recuos responsivos e tipografia legível. Reutilizar TitleReveal no título sem alterar animações existentes. Hero, header, serviços e demais seções não mudam.

### Bebas Neue + Inter — 15/10/2026

Aplicar Inter variável local nos textos, parágrafos, formulários e botões do conteúdo e footer, preservando Bebas Neue nos títulos. Fonte obtida do repositório oficial rsms/inter, com LICENSE.txt junto ao WOFF2. Manter DM Sans no body como base original para não alterar o hero nem o header; definir font-body como Inter somente nos blocos de main exceto hero e no footer. Botões com Inter 500/600 e escala proporcional à maior largura da fonte, conservando HoverLabel, linhas, recortes, cores e animações existentes. Ajustar o CTA central e o botão de avaliação no mobile para evitar transbordamento. Não alterar largura de 1440px nem geometria/timing das animações. Validar páginas internas, footer, estados de foco e mobile.

### Bebas Neue + Poppins — 15/10/2026

Substituir Inter por Poppins local nos parágrafos, botões e conteúdo abaixo do hero e no footer. Manter Bebas Neue nos títulos, DM Sans original no hero/header, recortes, animações e limite de 1440px. Usar pesos 400 para leitura e 500/600 para ações; incluir 700 e itálico para textos existentes. Validar quebras, alturas naturais e espaçamentos em mobile, tablet e desktop, com correções pontuais apenas onde a nova largura dos glifos exigir.

### Benefícios com fotos e recorte invertido — 15/10/2026

Aplicar aos três cards de Benefícios a composição da referência CodePen de Kristen: foto com cantos arredondados, recorte côncavo inferior direito e ação circular com seta. Reutilizar fotos locais já presentes no site (sofá, tapete e profissional Fritz), sem novos recursos externos. Manter os textos, títulos Bebas Neue, corpo Poppins, paleta gelo/cobalto e limite de 1440px. Conteúdo abaixo da foto sobre o fundo da seção, com espaçamentos compactos e naturais. Ações acessíveis para Serviços e WhatsApp, com foco visível e movimento reduzido respeitado. Preservar TitleReveal, hero, header e animações das demais seções. Validar 320, 396, 768, 1024, 1440 e 1920px.

Os CTAs dos três benefícios usam ícone branco e verde WhatsApp (#25d366, hover #128c7e), com link direto à Fritz, conforme ajuste solicitado. Preservar tamanho, recorte e foco visível.

### Grade sutil no fundo dos Benefícios — 15/10/2026

Adicionar apenas textura de grade à superfície gelo da seção Benefícios. Linhas azul acinzentado com baixa opacidade, quadrados fluidos de 64 a 88px e máscara que suaviza a textura nas bordas. Usar camada decorativa CSS sem eventos, sem recursos externos ou animação adicional. Preservar integralmente cards, fotos, recortes, CTAs WhatsApp, tipografia e largura de 1440px. Conferir contraste e ausência de transbordamento no mobile e desktop.

### Luz radial azul-gelo nos Benefícios — 15/10/2026

Substituir a grade decorativa por um único degradê radial estático azul-gelo, suave e transparente nas bordas, atrás dos cards. Preservar integralmente estrutura, fotos, recortes, CTAs WhatsApp, fontes, animações, espaçamentos e largura. Alterar somente a camada de fundo da seção e conferir mobile/desktop.

### Faixa de avaliações após Benefícios — 15/10/2026

Implementar a proposta visual aprovada: faixa compacta sobre fundo gelo logo após Benefícios, sem alterar os cards. Conteúdo alinhado ao limite de 1440px, linhas finas superior/inferior, marca Google, nota e cinco estrelas, contagem real já cadastrada e link discreto para o perfil Google. Reutilizar googleReviews como fonte única; não alterar a seção de depoimentos existente nesta entrega. Desktop horizontal; tablet com recuos menores; mobile em pilha com leitura e área de toque confortáveis. Bebas/Poppins e paleta atuais preservadas, sem novas animações, bibliotecas ou recursos externos. Arquivos novos: src/sections/home/review-strip/review-strip.tsx e review-strip.css; integração no arquivo existente src/app/page.tsx.

Ajuste aprovado: traços superior e inferior ocupam a largura completa da tela; somente o conteúdo interno mantém o limite de 1440px.

### Assinatura Google na faixa — 15/10/2026

Refinar somente a identificação da faixa: legenda discreta “Avaliações no” e palavra Google nas seis cores correspondentes da marca, com peso médio e espaçamento óptico. Preservar símbolo G, dados, link, traços integrais, cards e limite 1440px. Conferir legibilidade e encaixe em mobile/tablet/desktop.

### Serviços em faixa horizontal Araíse — 15/10/2026

Referência inspecionada no navegador: “Other project / More Creative Work” de https://araise.webflow.io/detail-work/elinana. Cards altos, mídia dominante, título/índice abaixo e deslocamento horizontal vinculado à rolagem vertical, também no celular (não expansão ao hover). Aplicar à seção Serviços da Home, posicionada após a faixa de avaliações. Reutilizar quatro vídeos, capas e textos atuais; preservar seus controles, carregamento por visibilidade, autoplay sem som e pausa fora da tela. Bebas/Poppins, paleta gelo/cobalto e viewport útil de 1440px. Título com animação existente, cards em composição editorial limpa. Medir o trajeto pelo overflow real para enquadrar o último card. Em telas sem altura suficiente e com redução de movimento, oferecer rolagem horizontal nativa, sem pinning. Garantir acesso por teclado aos cards fora de vista e links WhatsApp com rótulos específicos. Hero, header, benefícios e faixa de avaliações intactos; página interna Serviços preservada.

Estrutura: existentes src/app/page.tsx (posição e integração), src/sections/home/services/{services.tsx,services.content.ts,services.videos.ts,service-video.tsx} (reuso); novos src/sections/home/services/services-projects.tsx e services-projects.css para a apresentação e interação aprovadas. Não alterar os vídeos ou os estilos da página interna.

Ajuste de qualidade solicitado durante a execução: CTAs mantêm o padrão original pill-link/HoverLabel primary, com linha, recortes e letras animadas; escala compacta de 48px de altura, sem substituir por links simples. Alinhar ações pela base dos cards e preservar leitura de 14px ou maior nas descrições mobile.

### Correção de escopo — 15/10/2026

Remover os índices [01…] dos cards de Benefícios e Serviços. O usuário esclareceu que a referência devia orientar somente o layout dos cards e os botões, preservando a interação anterior. Confirmar a rolagem pretendida antes de substituir novamente o movimento, evitando outra alteração funcional indevida. Manter fotos, vídeos e CTAs padrão.

### Serviços: restaurar a interação original — 15/10/2026

Correção restrita à seção Serviços: retirar toda a lógica de movimento horizontal, pinning por progresso e alteração da posição por foco. Restaurar cards sticky na rolagem vertical, com os mesmos offsets anteriores (100px desktop, 48px mobile e 24px celular pequeno). Preservar mídia acima do título, descrições, CTAs pill/HoverLabel, vídeos e ausência de números. Conteúdo útil em 1440px e dimensões adaptadas ao fluxo vertical. Nenhuma alteração adicional em Benefícios ou outras seções.

### Correção final: comportamento da referência Araíse — 15/10/2026

O usuário reafirma que a funcionalidade desejada é a seção Other project do site Araíse, não o antigo empilhamento da Fritz. Inspeção confirmou faixa horizontal com seção sticky durante a rolagem vertical, incluindo mobile. Restaurar esse comportamento com vídeos existentes, sem índices e com CTA padrão pill/HoverLabel. Retirar orientações de rolagem extras que não pertencem à referência. Manter 1440px e os demais blocos intactos. Esta decisão substitui o entendimento anterior de restauração vertical.

### Reprodução medida da timeline Araíse — 15/10/2026

Inspeção do código publicado webflow.67cd7afe.b1b025440546283e.js: interação i-91fe3828 em others-trigger, start top bottom, end bottom top, clamp, scrub 0.8; timeline t-770e3a1f, canvasDuration 1, ação ta-390ec2df começando em 0.35 com duração 0.25, ease 0, x de 0% a -60%. CSS observado: runway 200vh, sticky top 20px, gap de 60px entre título e cards, espaço de 40px entre cards e recorte no viewport completo, não no gutter. Reproduzir essa timeline com GSAP já instalado, preservando a identidade Fritz, vídeos e CTAs. Tag fica antes do bloco sticky. Pausas inicial e final são parte da referência. Isso substitui a aproximação linear anterior. Sem alterações em outras seções.

### Recorte dos vídeos com ícones de serviço — 15/10/2026

Aplicar somente ao visual dos quatro vídeos o mesmo recorte inferior direito dos Benefícios: cantos de 24px, encaixe côncavo e círculo com ícone contextual (sofá, colchão, tapete e proteção), em azul cobalto e branco. Reutilizar EnvironmentIcon existente; ícones são decorativos e não substituem os CTAs pill de atendimento abaixo. Preservar integralmente timeline Araíse (200vh, sticky20, scrub0.8, tween0.35–0.60, x−60%), dimensões da mídia, vídeos e textos. O encaixe não recebe eventos e se recolhe durante hover/foco para liberar os controles nativos do vídeo. Validar enquadramento, controles e mobile/desktop. Nenhuma alteração nos Benefícios.

### Ícones dos vídeos sempre visíveis — 15/10/2026

Remover a regra que ocultava o encaixe no hover e no foco. Preservar recorte e ícone durante a interação; reservar a largura do encaixe no contêiner dos controles nativos WebKit/Chromium. Não mudar animação, dimensões, CTAs ou comportamento de reprodução. Validar controles e ícone simultaneamente visíveis.

### Escala tipográfica coerente Fritz — 15/10/2026

Referências externas orientam composição e interação; a identidade tipográfica da Fritz tem precedência. Unificar Benefícios e Serviços por tokens em src/styles/tokens.css: título de seção clamp(36px,4.5vw,64px), título de card clamp(28px,2.3vw,34px), texto clamp(16px,1.2vw,18px), linhas 1.05/1.55, legenda 12px e ação compacta 14px. Manter Bebas Neue nos títulos e Poppins na leitura/ações. Unificar distância mídia–título (24px/20px mobile), título–texto (12px) e limites de leitura. Rever altura dos vídeos em telas baixas para preservar a timeline Araíse sem cortar texto. Hero/header e outras seções não recebem novos tamanhos nesta alteração. Registrar a regra no AGENTS.md para orientar próximas adaptações.

### Serviços: acomodação da altura real — 15/10/2026

Corrigir a desativação indevida da animação em 1440×900. Calcular a altura disponível da mídia a partir da altura real dos textos, títulos, CTAs e espaçamentos, mantendo a escala tipográfica. Limitar igualmente os quatro vídeos ao espaço restante, preservando recortes, ícones e controles. Manter a timeline Araíse integral. Somente em janelas realmente baixas, onde nem uma mídia de 180px permite leitura completa, conservar o fluxo com rolagem horizontal nativa; respeitar movimento reduzido. Validar alturas próximas dos breakpoints, desktop e mobile, sem tocar no hero/header.

### Coerência dos cabeçalhos de Benefícios e Serviços — 15/10/2026

Usar uma regra compartilhada para a chamada acima do título: Poppins 12px, peso 400, azul da marca, caixa alta, entrelinha 1.5, tracking 0.08em e distância de 16px até o título. Em Serviços, retirar colchetes e a assinatura Fritz à direita, mantendo a chamada fora do sticky para preservar a animação. Confirmar que os títulos usam os mesmos tokens, fonte, peso e entrelinha. Não alterar cards, hero/header ou a timeline.

### Proximidade entre título e descrição dos cards — 15/10/2026

Retirar a reserva de duas linhas de altura nos títulos dos cards de Benefícios e Serviços. Cada descrição acompanha a altura natural do seu título, com o intervalo compartilhado de 12px. Em Serviços, a descrição continua ocupando o espaço flexível restante para alinhar os CTAs pela base; em Benefícios, preservar os botões de WhatsApp nas fotos. Manter fontes, tamanhos, vídeos, recortes e timeline. Conferir títulos de uma e duas linhas, alinhamento dos CTAs e encaixe vertical no desktop e mobile.

### Remover filete no encaixe dos ícones — 15/10/2026

Eliminar o contorno residual no canto inferior direito dos vídeos de Serviços. O contêiner arredondado recortava também o encaixe e o círculo, deixando uma linha de composição do vídeo na borda. Aplicar o arredondamento diretamente ao vídeo e manter o encaixe fora desse recorte, com o fundo da página. Preservar geometria, tamanhos, ícones, controles nativos, CTAs e animação. Conferir o canto no desktop, mobile e durante a rolagem horizontal.

### Filete durante o deslocamento horizontal — 15/10/2026

O usuário esclarece que o defeito aparece durante o scroll. Tratar a emenda entre camadas em coordenadas fracionárias: ampliar a cobertura do fundo do encaixe 2px além das bordas direita e inferior do vídeo, compensando com padding para manter a posição exata do círculo. Preservar os pontos de início das curvas e isolar a composição da mídia. Não arredondar o deslocamento nem mudar a timeline, dimensões, tipografia ou controles. Validar avançando e voltando em várias posições, inclusive mobile.

### Ponto final alinhado ao conteúdo — 15/10/2026

Substituir somente a distância fixa de -60% pelo deslocamento real entre a largura da faixa e a largura útil do frame. A borda direita do último card deve terminar na mesma linha do conteúdo das outras seções, inclusive com o limite de 1440px e no mobile. Preservar runway 200vh, sticky 20px, scrub 0.8, intervalo de movimento 0.35–0.60 e pausas. Usar a mesma distância calculada na navegação por foco e recalcular ao redimensionar. Não alterar fontes, layout dos cards, controles ou CTAs.

### Como funciona inspirado no Open9 — 15/10/2026

Adaptar somente a sequência de etapas da referência fornecida: quatro ícones em blocos arredondados, setas curvas tracejadas entre eles, número da etapa, título e descrição. Usar os quatro passos reais já cadastrados em process.content.ts, Bebas Neue/Poppins, tokens tipográficos compartilhados e paleta gelo/cobalto/branco. Reposicionar a seção Process logo depois de ServicesProjects, sem duplicá-la. Conteúdo até 1440px, fundo integral, quatro colunas desktop, duas tablet e sequência vertical mobile. Descrições abertas inicialmente, preservando o controle de expansão desktop e a abertura automática mobile. Manter animação de título e respeitar movimento reduzido. Não importar o banner de NFTs nem os recursos de marca da referência; não alterar hero/header, benefícios ou serviços.

### Banner Fritz com cards em movimento — 15/10/2026

Adicionar ao fim de Como funciona um banner cobalto com título branco e CTA pill/HoverLabel padrão para WhatsApp. Reproduzir a composição da referência Open9 com três colunas inclinadas em aproximadamente -32 graus, movimento vertical contínuo em sentidos alternados e repetição sem salto. Usar somente fotos locais já existentes dos quatro serviços Fritz; mini cards com foto, nome do serviço e assinatura Fritz, sem métricas inventadas. Área textual independente e protegida da composição. Conteúdo dentro de 1440px. No mobile, texto e CTA acima da galeria. Respeitar movimento reduzido, oferecer pausa e suspender animação fora da tela ou em aba oculta. Preservar todo o restante da página e validar recorte, contraste, espaçamentos e movimento real.

### Banner mais compacto — 15/10/2026

Reduzir somente o título promocional para o papel --type-banner-title (28–48px), mantendo Bebas Neue. Liberar a largura do título dentro da área textual para obter duas linhas, reduzir padding vertical e distância até o CTA conjuntamente. Preservar fotos, colunas animadas, velocidade, pausa, CTA e largura máxima. Validar quantidade de linhas e altura do banner no desktop e em celulares de 320px ou mais.

### Reajuste fino do título do banner — 15/10/2026

Aumentar moderadamente o título após a compactação, para 30–56px com 3.8vw, mantendo duas linhas, a fonte e os espaçamentos compactos. Não alterar cards, movimento ou CTA.

Novo ajuste solicitado em seguida: elevar o mesmo papel para 32–60px com 4.2vw, conferindo novamente as duas linhas e a altura resultante.

### Aumento da altura do banner — 15/10/2026

Pedido esclarecido: aumentar a altura do banner, sem aumentar novamente a fonte. Aplicar altura mínima de 340px no desktop com conteúdo centralizado verticalmente; no mobile, ampliar a galeria de 240px para 280px. Preservar título, CTA, inclinação e movimento dos cards.

### Chamadas com traços e gotas de água — 15/10/2026

Padronizar as chamadas acima dos títulos de Benefícios, Serviços e Como funciona com um componente compartilhado. Quando alinhadas à esquerda, usar um traço antes do texto terminado em gota; quando centralizadas, usar dois traços com as gotas voltadas para o texto. Preservar Poppins 12px, azul Fritz, espaçamento de 16px até o título e conteúdo atual. Como funciona muda para alinhamento à esquerda no mobile e deve exibir apenas um traço nesse caso. Elementos decorativos ficam fora da leitura assistiva. Não alterar títulos, cards, hero/header ou animações.

### Cards de Serviços com textos curtos e vídeos maiores — 15/10/2026

Encurtar as descrições visíveis dos quatro cards da Home para até duas linhas, sem reticências nem corte de conteúdo. Manter os títulos em uma linha, abreviando o último para Impermeabilização e preservando os nomes completos nos links e na página interna. Manter as fontes e a escala atual. Substituir a regra abrupta de vídeo baixo até 850px de altura por uma preferência fluida mais alta, limitada pelo orçamento real de altura já implementado. Aumentar também a preferência da mídia mobile. Preservar CTAs alinhados, vídeos, ícones, recortes, endpoint alinhado a 1440px, timeline e pausas. Validar linhas, proporção da mídia, encaixe vertical e foco em várias larguras e alturas.

Complemento solicitado: enriquecer as descrições resumidas com tecido, tamanhos ou material, mantendo até duas linhas no responsivo e a altura maior dos vídeos.

Ajuste editorial adicional: remover referência a peça nos textos visíveis da seção e diferenciar o foco de cada resumo: tipos de estofado, tamanhos de colchões, materiais/medidas dos tapetes e proteção contra líquidos. Evitar repetir a mesma explicação em todos os cards.

### Vídeos de Serviços sem controles — 15/10/2026

Os vídeos de Serviços devem reproduzir automaticamente em loop e sem som, sem controles, clique para pausar, foco por teclado, picture-in-picture ou reprodução remota. Aplicar ao componente ServiceVideo, usado apenas nas seções de Serviços da Home e página interna. Preservar carregamento sob demanda, pausa automática fora da tela/aba oculta, preferência de movimento reduzido e reprodução inline. Não alterar hero, showreel, banner de cards ou seus controles.

### Antes e Depois com expansão Ovelen — 16/10/2026

Criar a seção após Como funciona e seu banner, antes de Studio. Referência inspecionada: Working Process do Ovelen usa um card expandido com largura 33% e demais 15%, proporção aproximada 2.2:1, altura 400px, com troca no hover. Adaptar para quatro comparativos (sofá, colchão, tapete e cadeira), ativos por hover, foco ou clique/toque. Em cada card, uma única cena alinhada ao centro dividida entre Antes à esquerda e Depois à direita, com traço vertical fixo no meio. No mobile, acordeão vertical para preservar o tamanho da imagem e permitir toque. Manter largura 1440px, Bebas Neue/Poppins, escala tipográfica, paleta Fritz, chamadas com gota e CTA pill. Criar imagens fotorealistas por autorização explícita; identificá-las como comparativos ilustrativos sem atribuir resultados a trabalhos reais da empresa e sem rótulo de IA no layout. Preservar todas as outras seções. Respeitar movimento reduzido e garantir navegação por teclado.

Cores dos comparativos: sofá azul-petróleo, cadeira caramelo e tapete cinza; colchão claro. Preservar a mesma cor-base entre antes e depois de cada cena.

Correção após inspeção responsiva da referência: manter expansão horizontal a partir de 768px. Até 767px, empilhar todos os cards abertos com altura de 250px e intervalo de 20px, sem acordeão ou botão de expansão. Mostrar todos os títulos, descrições e divisões Antes/Depois. Essa orientação substitui a proposta inicial de acordeão mobile.

Correção minuciosa do funcionamento mobile: a referência usa position sticky com top 43px nos cards, exceto o último, que permanece no fluxo normal. Os cards seguintes cobrem os anteriores durante a rolagem; o contêiner encerra e libera a pilha ao final. Aplicar apenas até 767px, mantendo altura 250px, gap 20px, fotos/cores e desktop. Validar pontos intermediários, sentido inverso e liberação no último card.

### Acabamento dos comparativos — 16/10/2026

Refinar apenas Antes e Depois: reduzir o peso do degradê à base das fotos; mostrar etiquetas discretas apenas no card ativo no desktop e em todos no mobile; manter divisão central fina, com gota decorativa sem aparência de controle. Nas telas largas, alinhar os títulos na mesma base e revelar a descrição ao lado no card expandido. Em tablet/celular, manter a leitura empilhada com respiro consistente. Diferenciar descrições com informações visuais de cada comparação, sem prometer resultados reais. Preservar imagens, proporção de expansão 2.2:1, duração/easing, navegação por teclado, sticky mobile 43px, altura 250px, intervalo 20px, fontes, paleta e limite 1440px. Validar larguras 320, 396, 768, 1024, 1440 e 1920, contraste e saída da pilha.

### Depoimentos com seleção de clientes — 16/10/2026

Substituir os cards sobrepostos de Testimonials por um painel de leitura com um relato por vez, inspirado na interação inspecionada do Vizooli. Preservar os quatro relatos reais, nomes, fotos pequenas e links originais de google-reviews.ts; não inventar retratos, resultados ou cargos. Usar fotos como seletores com nome do cliente ativo aparecendo suavemente nas telas largas; no celular, seletores compactos após o comentário, junto às setas. Mostrar estrelas, identificação e origem do trecho no painel, com link individual e ação de avaliar no Google. Troca manual, sem autoplay, com transição horizontal suave, foco por teclado e gesto horizontal no painel; respeitar movimento reduzido e rolagem vertical. Reservar a altura pelo maior comentário para evitar saltos. Manter Bebas Neue nos títulos, Poppins no corpo/ações, azul/gelo/branco, escala compartilhada e largura útil máxima 1440px. Não reordenar outras seções nem alterar hero/header. O componente também atende a página Serviços; validar as duas rotas, 320–1920px, links e fim/início circular da navegação.

### Mural de avaliações em largura total — 16/10/2026

Nova direção autorizada: substituir o painel único por mural inspirado no testimonial-v2 de 21st.dev, com mais cards lado a lado e alturas naturais diferentes. O mural ocupa toda a largura da página, sem limite de 1440px; título e ações continuam alinhados ao conteúdo das demais seções. Usar quatro colunas em desktop amplo, três em tablet largo, duas em tablet, com movimento vertical contínuo em velocidades/posições distintas, máscaras suaves e pausa ao hover. Existem quatro avaliações reais disponíveis: reutilizar somente esses relatos no loop, sem inventar nomes, comentários, cargos ou fotos. Cópias animadas ficam fora da navegação assistiva; lista única real permanece disponível, com modo pausado para leitura e acesso aos links individuais. Mobile usa cards lado a lado com rolagem manual e controles, sem autoplay; movimento reduzido usa lista estática. Preservar estrelas amarelas, G multicolorido fiel ao Google, fotos pequenas, aspas, Bebas Neue/Poppins, paleta, botão branco de avaliar com G, recortes e animação. Manter posição após Antes e Depois e não alterar outras seções. Validar largura total, alturas, pausa/retomada, modo de leitura, links, controles mobile, teclado e overflow de 320 a 1920px nas duas rotas que usam o componente.

Correção explícita: não repetir comentários. Consulta direta ao perfil Google da Fritz em 16/10/2026 confirmou 291 avaliações e nota 5,0. Importar vinte relatos distintos com autores, fotos públicas, identificadores e links de origem; usar trechos autênticos identificados como tal. Distribuir cada relato uma única vez entre as colunas visíveis, sem cópias para looping. Movimento lento alternado até o limite de cada coluna e retorno; lista de leitura/mobile também contém cada cliente uma única vez. Recalcular distribuição em 2/3/4 colunas para não ocultar relatos em breakpoints. Essa instrução substitui a proposta anterior de reutilizar quatro relatos no loop.

### Mural mais rápido e animação mobile — 16/10/2026

Manter o mesmo movimento vertical também no celular, com uma coluna legível até 767px, duas em tablet, três em tablet largo e quatro em desktop. Acelerar suavemente as colunas, medindo o percurso real para manter velocidades de 16–19px/s independentemente da quantidade de comentários por coluna. Preservar vinte relatos únicos, retorno alternado, fotos, estrelas, Google e CTA. Oferecer pausa/leitura com links no celular e desktop; hover pausa apenas em dispositivos com hover, sem travar o toque. Preservar movimento reduzido, pausa fora da tela e aba oculta, fontes e demais seções.

### About Fritz após avaliações — 16/10/2026

Criar AboutFritz imediatamente após Testimonials na Home. Referência Inflouno inspecionada em desktop e mobile: etiqueta central, frase editorial com ícones intercalados, visual amplo, descrição curta e CTA. Adaptar com Bebas Neue/Poppins e escala compartilhada, gelo/azul/navy, limite útil de 1440px. Usar a foto real do profissional fornecida anteriormente e já utilizada na página Sobre; preservar rosto/gesto e não ampliar o arquivo de 500px para cobrir todo o contêiner. Compor moldura ampla gelo com curvas sutis de água e foto central até 500px; no celular priorizar foto e leitura, sem redução da imagem a miniatura. Inserir pequenos símbolos de gota e tecido no título, sem aparência de controles. Reutilizar animação compartilhada de título/texto, entrada suave da foto e HoverLabel do CTA WhatsApp, respeitando movimento reduzido. Não substituir Studio ou alterar outras seções, header/hero, avaliações e navegação. Validar posição, foco, imagem real carregada, limite 1440px, tipografia, espaçamentos e overflow em 320–1920px.

Validação do About: foto real carregada e seção imediatamente entre avaliacoes e estudio; larguras 320, 396, 768, 1440 e 1920px sem overflow horizontal. Moldura medida em 1440px no viewport 1920; foto limitada a 500px no desktop e 274px no viewport 320, com rosto e gesto visíveis. CTA mantém foco visível e destino WhatsApp, sem envio na validação. Lint escopado e TypeScript passaram; console da Home sem erros durante a inspeção. Animações de título/texto reutilizadas, foto com entrada suave e preferência de movimento reduzido respeitada no código.

### Como funciona com sobreposição mobile — 16/10/2026

Somente os quatro cards de etapas passam a usar o mesmo comportamento sticky dos comparativos em até 767px: o topo do ícone ancora em 43px, o card seguinte sobe cobrindo o anterior e o último libera a pilha no limite da lista. Preservar ícones à esquerda e textos à direita, fontes e conteúdo. Estender a disposição vertical já existente até 767px para permitir a sequência de sobreposição. Usar fundo gelo opaco nos cards para não misturar textos, com altura natural sem cortes. Restringir o sticky à lista: título, introdução e ProcessBanner permanecem no fluxo. Preservar layout de duas colunas em 768–991px e quatro colunas/controles no desktop. Validar parada no ícone, sobreposição de todas as etapas, retorno da rolagem e liberação antes do banner em 320/396/767px, sem overflow; conferir 768px e desktop.

Refinamento após inspeção de rolagem inversa: usar parada em 72px para manter o ícone inteiro abaixo do header mobile quando ele reaparece. O mecanismo permanece igual ao Antes e Depois; somente o ponto de parada dos cards de etapas muda. Breakpoint usa width < 768px para incluir larguras fracionárias próximas de 767px. Conferidos avanço, retorno, encerramento no limite da lista, texto natural sem cortes e ausência de overflow em 320/396/767px; 768 mantém duas colunas e 1440 quatro, sem sticky. Cabeçalho da seção e banner seguem fora da pilha.

### Retrato recortado fornecido para o About — 16/10/2026

Substituir somente a foto do About pelo about.png enviado pelo usuário. Converter para WebP local com transparência, sem alterar aparência, rosto, uniforme ou ferramenta. Preservar a proporção vertical e usar object-fit contain para não cortar cabeça/mão/logo. Compor o recorte sobre a moldura azul-gelo e suas linhas já existentes; limitar o retrato a 460px no desktop, preencher a largura disponível no celular. No mobile, mover a legenda para fora do retrato para não cobrir a ferramenta. Preservar texto, fontes, CTA, limite 1440px e animações. Validar imagem WebP/transparência, proporção, carregamento e responsividade.

### Retrato do título com expansão pela rolagem — 16/10/2026

Substituir o ícone de tecido do título por uma reserva inline para a miniatura do retrato. Usar um único elemento Image WebP: a foto permanece no slot final, mas transforma posição e escala desde a reserva no título. Miniatura enquadra rosto/uniforme com zoom interno; ao rolar, primeiro sai abaixo da última linha e só depois cresce até o retrato inteiro na moldura. Timeline scrub reversível, sem pin, sem duplicar fotos, sem atravessar o texto no mobile. Medir reserva, título e slot reais após fontes prontas; atualizar limites em resize/quebras. Reutilizar GSAP/ScrollTrigger existentes, preservar revelação do título/texto, paleta, fontes, CTA e limite 1440px. Fundo/legenda surgem gradualmente com a expansão. Movimento reduzido mantém foto final estática e título sem espaço vazio de miniatura. Validar miniatura/estados intermediários/final/retorno e resize em mobile e desktop; imagem única, sem overflow nem cortes no estado final.

Validação da expansão: viewport 396px mostrou miniatura alinhada à reserva com largura 30,6px e retorno à mesma posição ao subir; durante crescimento, topo do retrato medido 25px abaixo do título. No final, imagem e slot coincidem (342,7px no mobile e 460px no desktop). Em 320px, reserva e miniatura continuam alinhadas; 768/1440/1920 sem overflow. Uma única tag img no About em todos os estados, usando o WebP; moldura final 1440px em 1920px. Bebas Neue/Poppins confirmadas no navegador, console sem erros, lint escopado e TypeScript aprovados. Movimento reduzido oferece foto final estática por código; não houve emulação dessa preferência na inspeção.

### Correção pela página Serviços existente — 16/10/2026

Usuário rejeitou a interpretação anterior e pediu analisar /servicos. Código e navegador confirmam Showreel variant=services: bloco pequeno descendo primeiro (duração 1), pausa até 1.05 e expansão central linear (duração 0.8), scrub 1.2, início clamp(top bottom), fim clamp(bottom 10%). Aplicar ao bloco inteiro do About (fundo + único retrato), sem zoom interno de rosto e sem crescimento durante a descida. Ancorar início na reserva inline do título, adaptada ao formato horizontal da miniatura de Serviços; terminar no bloco central de até 1440px. Usar stage imóvel para medir limites; a foto permanece única e sem cortes. Preservar texto, fontes, paleta, CTA e reversibilidade, e manter efeito no mobile por solicitação anterior. Movimento reduzido continua estático.

O bloco acompanha também as proporções de Serviços (192/65 em desktop, 3/2 em mobile), com o retrato inteiro em contain dentro dele. A reserva inline usa a mesma proporção para não deformar a imagem nem cobrir linhas adjacentes. Legenda ocultada no mobile para não sobrepor o retrato compacto. A expansão passa a ser do conjunto completo; não há mais máscara/zoom interno ou fundo de tamanho total independente.

Validação da correção: /servicos observado diretamente antes de editar; descida do About manteve largura aproximada de 121,6px no desktop e expansão seguinte cresceu o bloco inteiro. No mobile, retorno recuperou largura inicial 68,4px, sem zoom interno (transform do img: none). Verificados 320/396/768/1440/1920 sem overflow, uma única img carregada, stage final limitado a 1440px, console sem erros. Lint, formatação e TypeScript aprovados. Serviços permanece sem alterações.

### Correção visual definitiva do About — 16/10/2026

Erros confirmados no navegador: reserva vazia no título, retrato minúsculo isolado, palco vazio e expansão após título sair da tela. Substituir timeline anterior por cena sticky compacta com título e retrato juntos. Ao entrar abaixo do header, miniatura sai primeiro da linha em percurso curto, reserva inline recolhe para fechar palavras e foto cresce imediatamente até altura confortável, enquanto título permanece visível. Somente a foto transforma; o palco abre junto com o crescimento, sem reservar grande vazio antes. Texto/CTA vêm após a cena. Uma única img WebP com crop de rosto apenas na miniatura e retrato inteiro no final. Limitar altura da foto conforme viewport, preservar fontes/paleta/1440px. Recalcular em resize/fontes, sem observar reflow animado do título. Movimento reduzido usa composição estática. Validar início/meio/final/retorno visualmente em desktop e mobile, inclusive fechamento real do espaço entre palavras.

A composição compacta inclui também texto e CTA dentro da cena sticky; ambos ficam próximos do título no início e descem junto com a abertura da foto. O palco cresce já durante a saída da miniatura, garantindo a mesma altura visual da foto antes da expansão completa e respiro constante para o parágrafo.

Validação visual da correção: capturados início/meio/final no desktop 1440x1080 e mobile 396x860, além do final em 320x860. Título permaneceu em 80px no desktop/72px no mobile; reserva do título chegou a largura zero durante a saída e voltou à miniatura ao subir. Na composição final, retrato e slot coincidem (223,6px de altura em mobile; 280,8px no desktop). Em 320px, título, foto, parágrafo e CTA permanecem visíveis. Uma única imagem, sem overflow; tablet 768px e desktop 1920px conferidos, limite útil 1440px preservado. Lint/TypeScript aprovados e console sem erros. Preferência de movimento reduzido respeitada no código com imagem estática; não foi emulada no navegador.

### Aumento do retrato no final da animação — 16/10/2026

Aumentar altura desejada do retrato de 26svh/320px para 40svh/480px no desktop e 36svh/380px no mobile. Antes de medir o percurso, limitar a altura final ao espaço disponível após título, texto, CTA e margens reais, preservando a cena visível abaixo do header. Preservar miniatura, recolhimento da reserva do título, animação reversível, foto única WebP inteira, fontes, cores e largura 1440px. Validar início/meio/final em desktop e mobile e confirmar aumento real sem esconder o título.

Aumento validado visualmente: retrato final de 432px no desktop 1440x1080 (antes 280,8px, +54%) e 310px no mobile 396x860 (antes 223,6px, +39%). Em 320x860, orçamento de altura limita a 266px, mantendo título em 72px e CTA até 844px dentro da viewport. Retorno à miniatura conferido, uma única img, sem overflow e console sem erros. Fontes, paleta, texto e timeline preservados. Lint e TypeScript aprovados.

### Remoção do vazio provocado pela área fixa de rolagem — 16/10/2026

O espaço destacado corresponde à altura final da cena mais 600px reservados para sticky, mesmo quando o retrato ainda está no título. Remover reserva fixa e sticky do About. Manter a mesma timeline reversível e foto final ampliada, agora durante a entrada natural da seção: iniciar quando topo do conteúdo chega a 48% da viewport e concluir quando chega ao respiro do header (80px desktop/72px mobile). Como os limites dependem só do topo da seção, abrir o palco não altera o cálculo do progresso. Texto/CTA e próxima seção seguem o fluxo real, sem corredor vazio nem espera. Preservar dimensão final adaptativa, fontes, paleta, foto única e todos os demais comportamentos.

Conferência visual após remover a reserva: em 1920x960 com título a 140px, retrato já cresce para cerca de 362px; completa antes de o título atingir o header. Em 396x860, título a 72px e foto final 310px; contêiner e cena medem os mesmos 750px, sem altura artificial adicional. Retorno à miniatura alinhada (31px) e palco zero confirmados; 320px também sem reserva extra nem overflow, uma única foto. Lint/TypeScript aprovados e console sem erros. Essa abordagem substitui as instruções anteriores de sticky e altura fixa da cena.

### Atendimento regional com mapa real e parallax — 16/10/2026

Após AboutFritz, criar ServiceArea com composição editorial e mapa geográfico local do litoral norte catarinense. Cidades reais já cadastradas: Joinville, Itapoá, São Francisco do Sul, Balneário Barra do Sul, Barra Velha, Balneário Piçarras e Balneário Camboriú. Usar malha simplificada municipal do IBGE (API v3, UF42) e pontos públicos de municipios-brasileiros, baixados uma vez para geração local, com projeção Mercator e fonte documentada. Sem mapas desenhados de memória, fronteiras inventadas, métricas, prazos ou relevo falso. Cor gelo no terreno, água azul suave e municípios atendidos destacados. Parallax discreto só no desenho inteiro (pontos acompanham a geografia), sem capturar rolagem/zoom. Seleção de ponto ou campo Cidade destaca território e atualiza CTA WhatsApp com a cidade, sem envio automático. Mobile usa movimento menor, pontos com área de toque 44px e seleção nativa como alternativa. Respeitar movimento reduzido, teclado, largura1440, Bebas Neue/Poppins e espaçamentos compartilhados. Preservar About, avaliações, demais seções e header/hero. Não instalar dependências nem fontes remotas.

Refinamento cartográfico: usar qualidade intermediária do IBGE para preservar melhor costa e ilhas; JSON final de aproximadamente 43KB, 54 municípios no enquadramento. Não é necessário carregar a malha completa no cliente.

### Parallax regional mais perceptível — 16/10/2026

Aumentar percurso do plano geográfico de ±28px para ±84px e medir progresso no próprio mapa, para o efeito responder à sua passagem pela tela também no mobile. Intensidade mobile passa de 0,35 para 0,55 (até ±46px). A geometria e os sete botões permanecem no mesmo plano, sem escala, rotação ou alteração dos alvos de44px. Adicionar plano de água luminoso com deslocamento contrário mais lento, e sombra de borda/profundidade no terreno, sem representar relevo geográfico inventado. Suavizar limites do desenho para não revelar recortes na rolagem. Respeitar movimento reduzido em ambos os planos. Preservar fontes, paleta, regiões, seletor/CTA, enquadramento e largura1440px. Conferir alinhamento por coordenadas projetadas e seleção antes/depois de rolar em desktop e mobile.

### Atendimento regional mais compacto — 16/10/2026

Remover o seletor de cidade e o bloco Próxima parada (nome e orientação de bairro) destacados pelo usuário. Manter seleção pelos sete pontos do mapa, território ativo e CTA contextual para WhatsApp. Eliminar os estilos e margens desses elementos, aproximando o CTA da introdução no desktop e do mapa no mobile, sem espaço reservado. Preservar tamanho e profundidade do mapa aprovado, fontes, paleta e limite de 1440px. Conferir ausência dos elementos e funcionamento responsivo.

### Split layout com mapa até a borda direita — 17/10/2026

Preservar margem esquerda global de 1440px e retirar apenas o padding direito desta seção. Usar coluna editorial limitada e mapa ocupando todo o restante até a borda, altura desktop 520px em vez do quadro vertical de até 697px. Geografia e pontos continuam no mesmo plano proporcional, centralizado, sem distorção; percurso vertical adaptado ao enquadramento para manter sete pontos visíveis. No mobile empilhar introdução, mapa e CTA; mapa até as bordas da tela com 495px de altura, alvos44px e rótulo ativo. Preservar fontes, paleta, CTA contextual e redução de movimento. Validar borda, margem, seleção, alinhamento projetado e ausência de overflow.

### Ampliação do desenho dentro do mapa — 17/10/2026

Ampliar o plano geográfico desktop de440 para580px (+32%), mantendo proporção Mercator e altura do quadro520px. Deslocar plano80px para cima para eliminar margens geográficas excedentes no norte/sul; preservar todas as sete cidades. Ajustar amplitude do parallax do plano ao espaço útil restante (±13,44px), mantendo camada de água e profundidade. Não escalar os alvos44px nem rótulos; pontos seguem percentuais do mesmo plano. Mobile conserva enquadramento aprovado440px/495px e amplitude existente. Validar extremos da rolagem, limites e coordenadas projetadas.

### Parallax perceptível sem alterar o enquadramento — 17/10/2026

Preservar quadro520px e geografia580px (mobile495/440). Acrescentar deslocamento horizontal ao plano inteiro, com pontos e rótulos juntos: ±37,8px desktop e ±10,08px mobile; manter deslocamentos verticais seguros existentes. Ampliar contramovimento da água para ±126px na vertical e ±54,6px na horizontal. Acrescentar curvas oceânicas discretas no fundo, como referência visual estável da diferença de velocidades; não representar relevo ou novas informações geográficas. Expandir fundo para impedir bordas expostas. Sem animação automática, escala ou rotação; tudo vinculado à rolagem e reversível. Preservar movimento reduzido. Validar seleção, dimensões, coordenadas e limites dos sete alvos em desktop e mobile durante a rolagem.

### Remover curvas decorativas do mapa — 17/10/2026

Retirar apenas repeating-radial-gradient da água, conforme imagem do usuário. Preservar degradês azul-gelo, deslocamentos opostos vinculados à rolagem, tamanhos e pontos. Sem novos adornos.

### Orientação e CTA com cidade explícita — 17/10/2026

Trocar legenda do mapa por instrução direta Clique em um ponto para consultar atendimento (Toque no mobile, via CSS), e texto visível do CTA por Atendimento em [cidade selecionada]. Preservar nome oficial, link contextual WhatsApp já sincronizado, alvos, movimento e estilo HoverLabel. Não abreviar nomes por suposição.

### CTA dimensionado pelo maior nome — 17/10/2026

Medido no navegador: Balneário Barra do Sul ocupa180,3px em Poppins600/16, enquanto o botão está400x73,4px. Reservar a largura desse nome em um span invisível e sem semântica, compartilhando a célula do nome selecionado; botão max-content sem esticar na coluna. Padding10x20 e gap3 mantêm altura próxima56px e largura aproximada256px desktop, com ajuste natural à fonte15px mobile. Manter texto em duas linhas, recortes, HoverLabel e contexto WhatsApp, sem reduzir fonte ou truncar cidades. Validar estabilidade entre maior/menor cidade e mobile320px.

### FAQ após atendimento regional — 17/10/2026

Ativar e adaptar a seção Faq já existente, após ServiceArea, preservando outras seções. Composição editorial em duas colunas, título Bebas Neue no token compartilhado, perguntas/respostas Poppins, gelo e azul Fritz, linhas discretas sem cards ou numeração. Intro Dúvidas antes de agendar?; CTA secundário de conversa no estilo existente. Seis perguntas baseadas no conteúdo local (orçamento, região, tecido, impermeabilização, cuidados e secagem), sem prazos, garantias ou remoção garantida de manchas. Accordion nativo com botão/aria-expanded, uma resposta por vez, animação CSS de altura e redução de movimento. Mobile uma coluna, alvos confortáveis e resposta sem recuo desnecessário. Verificar clique, fechamento, teclado e larguras320/396/1440.

### FAQ editorial com coluna sticky — 17/10/2026

Introdução sticky a96px no desktop992px+, liberada no fim da lista, sem altura artificial. Primeira resposta aberta; uma por vez. Lista com respiro104px por pergunta, índice discreto, controle quadrado36px com cantos8 e inversão azul, linha de acento e azul-gelo suave no item ativo. Título na escala compartilhada com Agendar em azul. Preservar conteúdo e CTA. Mobile mantém uma coluna em fluxo para não cobrir respostas; alvos80px+. Desativar sticky em viewport baixa. Validar posição durante rolagem, teclado e mobile.

### Home única e remoção dos blocos antigos — 17/10/2026

Pedido explícito: remover da home Studio (Por dentro da Fritz) até Leaders (órbita Cuidado de verdade), inclusive Environments, Trust, divisor e Showreel. Manter FAQ seguido diretamente de Contact e rodapé. Remover os oito arquivos page.tsx das rotas internas sobre/servicos/projetos/contato/blog/informacoes (incluindo dinâmicas), mantendo home e páginas de sistema. Ajustar navegação desktop/mobile/rodapé para âncoras reais, sitemap somente home e redirecionar URLs antigas à seção correspondente. Não apagar recursos compartilhados ou fontes/imagens; preservar modificações locais em componentes fora do escopo.

### Header com atalhos principais e menu completo compacto — 17/10/2026

Manter dimensões do header fechado. Principais: Serviços, Resultados, Sobre, Contato. Toggle abre todas as dez seções da home em ordem; painel navy compacto até1080px com duas colunas desktop e uma mobile, sem marca gigante/faixa diagonal. Fontes atuais, dialog modal, Escape/fechar, bloqueio do fundo e retorno de foco preservados. Painel rolável em telas baixas, fechar44px+. Animação450ms. Validar destinos e mobile320.

### Correção de escopo do menu aberto — 17/10/2026

Usuário esclareceu: preservar tamanho original de tela inteira ao abrir toggle; compactar somente textos e organização interna. Substitui proposta de painel limitado. Dialog100%x100dvh sem margens/raios, conteúdo interno até1080px centralizado, duas colunas desktop e uma mobile, links compactos e todos os destinos. Fechar fixo acessível em viewport baixa. Header fechado preservado.

### Restaurar apresentação original do toggle — 17/10/2026

Usuário reforçou: manter exatamente layout, marca/faixa diagonal, animações e tela inteira do menu original. Restaurar CSS original e faixa do componente. Único refinamento visual é reduzir tamanhos de texto e respiros para dez links em uma coluna caberem sem rolagem em desktop e celulares usuais. Manter todos os destinos. Não usar painel, duas colunas ou redesign da marca.

### Retorno ao menu padrão original — 17/10/2026

Novo pedido substitui a compactação: restaurado integralmente mobile-navigation.css original do repositório, sem overrides de escala ou espaçamento. Mantidos todos os links das seções reais e atalhos principais autorizados. Marca/faixa original e animação1000ms restauradas.

### Ajustar somente links do menu padrão — 17/10/2026

Preservar integralmente marca, faixa, fundo e animação originais. Reduzir apenas font-size, line-height e padding vertical dos links, com escala pela altura da viewport para acomodar os dez destinos. Validar desktop e320x640 sem rolagem.

### Ajuste intermediário dos links do menu — 17/10/2026

Aumentar links desktop para clamp28px/4dvh/42px e mobile24px/3.2dvh/30px. Compensar apenas padding dos links (desktop5px; mobile2px), mantendo layout original, marca, contatos e animações. Conferir todos os itens sem rolagem em1440x900,396x860 e320x640.

### Entrada mais suave do retrato no About — 17/10/2026

Preservar foto única, tamanho final adaptativo, título e layout natural sem reserva fixa. Iniciar percurso antes (top65% em vez48%) e ampliar scrub0,25→0,65 para absorver passos bruscos da rolagem. Saída vertical da miniatura32% da timeline com sine.inOut, crescimento começa12% e ocupa88%, sobrepondo transições em vez de separação abrupta. Palco abre continuamente em uma única curva sine.inOut; imagem interna acompanha crescimento. Reserva no título recolhe suavemente em40% do percurso. Validar começo/meio/fim e reversão em desktop/mobile.

### Ícones locais consistentes para serviços e etapas — 17/10/2026

Atualizar somente os quatro ícones dos serviços e quatro de Como funciona. Família Tabler Outline, baixada da fonte oficial e incorporada em componente React local, sem CDN ou nova dependência. Serviços: sofá, cama baixa/colchão, tapete adaptado do ícone existente e escudo+gota. Etapas: foto, calendário confirmado, spray e escudo confirmado. Traço1,5 no viewBox24, pontas redondas, currentColor preservando azul/branco e os tamanhos existentes. Tapete e composição escudo/gota identificados como adaptações. Guardar MIT e fontes locais. Preservar vídeos, recortes, CTA, sticky, fontes e animações. Validar desktop/mobile e licenças; Google/WhatsApp oficiais permanecem.

### Fundos neutros e pausa marinho no processo — 17/10/2026

Aplicação autorizada da proposta Finox adaptada: cinza neutro#F3F3F3 como --paper apenas nos filhos da home exceto hero; antes/depois e avaliações em#E7E9ED, cards reais brancos preservados. Como funciona em#13213D, títulos claros, descrições#C6D1E6 e indicadores#B5C8E8; ícones com base marinho intermediária. Escopo exclusivamente conteúdo da home, sem alterar tokens raiz, hero, header, menu ou rodapé. --paper local sincroniza recortes com os novos fundos e mobile sticky opaco; banner do processo reseta --paper para cinza e preserva CTA/azul original. Sem alterar geometria, fontes, animação ou dados. Validar contraste, recortes, sobreposição e responsivo320/396/1440.

### Refinamento final de ritmo, alinhamentos e entradas — 17/10/2026

Manter layouts, fontes, paleta, recortes e interações; hero/header/menu excluídos. Unificar respiro vertical de conteúdo56–88px e distância título/cards32–48px. Reduzir duplos respiros em transições de mesmo fundo: antes/depois→avaliações, About→mapa e mapa→FAQ. Benefícios: remover recuo lateral de4/8px entre fotos e textos; reservar duas linhas de título só no desktop, com largura16ch para equilibrar quebras e alinhar descrições sem aumentar distância real título/texto. Mobile mantém fluxo de texto natural e36px entre cards. Entrada de títulos/textos abaixo do hero troca back.inOut por power3.out, duração0,7/0,55 e menor stagger; hero mantém valores originais. CTA final deixa de encolher10% no hover, usando expansão1,015 sem alterar dimensões de repouso. Preservar velocidade de avaliações/banner, percurso dos serviços, parallax do mapa e expansão suave da foto; não adicionar movimentos. Respeitar redução de movimento. Validar geometria e funcionalidades em1440/1920 e320/396/768, sticky e CTAs, sem nova suíte de testes para CSS.

### Degradês mais neutros e contato marinho — 17/10/2026

Reduzir luz azul dos benefícios para20%/8%, substituir banho azul amplo do retrato por cinzas neutros e reduzir linhas d'água para7%. Mapa mantém dois planos de parallax e todos os pontos; água passa a cinza-azulado discreto, sem mudar movimento/escala. Contato final recebe --paper marinho local, lettering claro/contorno claro e extensão de fundo sobre os40px de margem existentes (sem alterar geometria). CTA azul preservado, círculo da seta claro e recortes marinho; hover azul-profundo para não sumir no marinho, foco claro. Marquee/fontes/animações preservados. Escopo só superfícies da home; hero/header/menu e cores globais intactos. Validar repouso/hover/foco, linkWhatsApp, fundos e mobile320/396/1440.

### Divisor discreto e rodapé compacto no mobile — 17/10/2026

Suavizar apenas divisor contato/rodapé: substituir intervalos claros por mistura marinho88%+texto-claro12%, reduzir gap4→2px, mantendo desenho progressivo e cores existentes. Rodapé até767px: top40/bottom28, gap do bloco24, margem inferior32; reduzir recuos e gaps de contato/informações/newsletter e créditos. Manter fontes/tamanhos, todos os links, botões, campo e semântica. Links interativos com min-height44 e formulário com input52/button48, foco e área de toque preservados. Não alterar estrutura de desktop, animaçãoFooterReveal, hero/header ou fluxoWhatsApp. Comparar altura e validar396/320/768 e desktop.

### Distribuição cromática por função — 17/10/2026

Usuário identificou continuidade excessiva Sobre→Atendimento→FAQ e autorizou reorganização coerente. Preservar layout, paleta existente, fontes, ícones, botões/recortes e movimentos, hero/header fora do escopo. Manter benefícios+serviços na base#F3F3F3 e resultados+avaliações em#E7E9ED como grupos funcionais. Sobre passa a marinho#13213D com títulos brancos, texto#C6D1E6, eyebrow/gota#B5C8E8 e palco tonal sólido#1B2D4B; retrato real e expansão/reversão preservados. Mapa retorna à base#F3F3F3, FAQ recebe#E7E9ED, contato/rodapé permanecem marinho. FAQ ganha mesmo respiro inicial56–88px de seção para a mudança de superfície não parecer cortada. CTA Sobre continua azul, hover azul-profundo e foco claro para distinguir do fundo; --paper local cuida dos recortes. Nenhum token raiz alterado. Validar sequência, contraste em repouso/hover, foto única e título visível, mapa/seleção, FAQ sticky e mobile320/396/desktop1440.

### Correções após auditoria — 17/10/2026

Autorizadas otimização de fontes, testes, SEO, organização e revisão editorial. Preservar famílias, métricas, tamanhos, cores, recortes, layout, hero/header e animações. Converter os mesmos arquivos para WOFF2 sem subset; manter todos os pesos usados e licenças. Priorizar fontes do hero no preload. Domínio confirmado pelo proprietário: higienizacaofritz.com.br; não alterar DNS/publicar. Sete cidades em cadastro compartilhado, sem novos locais, endereço, horários ou promessas. Revisar textos dentro do espaço dos cards e validar desktop/mobile. Consolidar estilos na ordem aprovada e guardar cópia recuperável dos legados antes da retirada.
