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
