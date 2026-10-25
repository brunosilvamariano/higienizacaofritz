# Design Brief — Por que escolher o Fritz / DigiGo

Correção de escopo solicitada pelo cliente: o comportamento de Our Solution Process (https://digigo-oly.webflow.io/) deve ficar em Por que escolher o Fritz, não em Serviços. Manter os três diferenciais reais, o título e os contatos existentes. Serviços volta aos quatro cards de vídeo anteriores, com a tipografia atual.

Desktop: indicadores conectados, cards presos à rolagem e entrada sequencial com subida e giro. Tablet/celular: carrossel com gesto, indicadores, avanço automático e pausa. Movimento reduzido: conteúdo estático/manual. Teclado deve alcançar cada contato com card visível.

Visual: Clash Display e Switzer locais; escala compartilhada; três superfícies distintas na paleta Fritz (azul suave, azul da marca, azul profundo). Ícones SVG de proteção, sofá e conversa. Bordas sutis e cantos arredondados, sem fotos nesta seção.

Editar os arquivos existentes de benefits, restaurar somente as alterações da última tarefa em services e sua transição no home.css. Sem nova arquitetura ou dependências. A referência já foi inspecionada na tarefa anterior.

## Validação

- npm run check e build de produção aprovados após a transferência.
- Desktop 1440 × 900: três cards revelados e alinhados, cada um com cor própria.
- Celular 390 × 844 e 320 × 740: indicadores funcionais e ausência de overflow na página; títulos cabem no card.
- Movimento reduzido: sem giro, avanço automático ou controle de reprodução.
- Serviços: quatro vídeos novamente renderizados; componente e conteúdo restaurados; ajustes tipográficos Clash Display/Switzer preservados.

## Refinamento de acabamento — 23/10/2026

Pedido: elevar a elegância dos cards existentes, preservando animação, conteúdo e identidade. Direção: superfícies azuis com variação tonal discreta, borda interna luminosa e sombra suave; espaçamento editorial consistente; numeração discreta; três SVGs exclusivos da seção com mesma geometria, espessura e detalhe em duas tonalidades. Proteção do tecido, conforto da casa e conversa direta representados sem mistura de estilos. Ação com seta em círculo e hover suave, foco visível e respeito a movimento reduzido. Sem bibliotecas ou arquivos de imagem adicionais. Manter Clash Display/Switzer e os papéis tipográficos compartilhados.

Validação do refinamento: npm run check aprovado; inspeção visual em 1440 × 900 e 320 × 740 confirmou três cards alinhados, ações completas e ausência de overflow. Animação e navegação preservadas.

## Ações em cápsula e indicadores — 24/10/2026

Referência enviada pelo usuário: botão azul compacto com ícone branco, texto semibold, cantos em cápsula e sombra de elevação. Aplicar esse acabamento aos contatos dos três cards: azul Fritz sobre superfície clara e cápsula branca com texto azul sobre cards escuros para manter contraste. Ícone WhatsApp à esquerda, ação curta Falar com o Fritz, foco visível e hover com relevo leve. Separador fica no rodapé, fora do botão.

Indicadores Motivo ganham ícones coerentes com cada diferencial, superfície sólida, borda e sombra sutis; o atual usa azul da marca. Linha de conexão fina e contínua, com estado de progresso. Em celular estreito, mostrar ícone e número, mantendo rótulo acessível completo. Preservar Nohemi/Switzer, conteúdo, WhatsApp e comportamento de rolagem/carrossel. Não criar componentes compartilhados ou dependências para este ajuste local.

Validação das cápsulas: npm run check aprovado. Desktop 1440 × 900 e celular 320 × 740 conferidos no navegador; contatos com 46 px de altura, texto completo e sem overflow. Indicadores com rótulos acessíveis preservados e contatos com os mesmos destinos/identificadores de tracking. Capturas em work/benefits-preview/capsules-desktop.jpg e capsules-mobile.jpg.

## CTA padrão no hero e nos diferenciais — 24/10/2026

Simplificação pedida: remover os selos numéricos 01/02/03 do canto dos cards, pois os indicadores Motivo já identificam cada diferencial. Manter ícones principais, conteúdo e navegação existentes.

Separação para Serviços: tratar Por que escolher como superfície levemente elevada, com cantos inferiores suaves e duas sombras externas concentradas na base (contato e difusão). Manter fundos e espaçamento atuais, sem linhas adicionais ou alteração dos gestos, da revelação e do pin da seção. Elevação estática em desktop e celular, sem nova animação.

Gesto no celular: acompanhar o dedo sem encaixe abrupto durante o arraste horizontal e usar o mesmo scroll suave da barra ao soltar. Preservar rolagem vertical, zoom por gesto e cliques nos contatos; impedir abertura acidental de contato depois de arrastar. Movimento reduzido continua imediato. Sem novas dependências.

Suavização solicitada: restaurar deslocamento suave entre cards e desenhar o cursor da barra a partir da posição real da rolagem, continuamente. A entrada range permanece como controle acessível; o cursor visual não salta entre índices. Usar interpolação curta no cursor, área interativa de 44 px e respeitar movimento reduzido.

Simplificação no celular: ocultar os indicadores superiores até 767 px, mantendo apenas a barra inferior e o gesto de deslizar. Barra troca o card imediatamente durante a interação, sem disputar posição com uma rolagem suave em andamento; área de toque de 44 px e gesto reservado ao controle. Indicadores e revelação no desktop preservados.

Controle inferior revisado: remover contador e Pausar/Reproduzir. Substituir por barra horizontal fina, com cursor alongado azul e trilho suave, arrastável e acessível pelo teclado. Sincronizar com indicadores e deslize dos cards. Avanço passa a ser manual, sem temporizador, preservando as animações de rolagem no desktop. Barra aparece somente no layout com carrossel, inclusive com movimento reduzido.

Nova revisão: indicadores selecionam o diferencial no próprio componente, sem rolagem vertical da página. Preservar revelação pela rolagem quando o visitante voltar a rolar. Acabamento inspirado no card de produto enviado: superfície limpa nas cores Fritz, um único contorno externo delicado, sombra difusa e cantos suaves. Remover contorno interno duplicado, luz em forma de risco e separador do rodapé; cápsula Falar com o Fritz sem borda ou brilho interno. Manter ícones, tipografia e animações dos contatos.

Refinamento solicitado: separar visualmente o texto Falar com o Fritz e o círculo do WhatsApp, retirando a borda que envolve ambos nos cards. Texto em cápsula própria à esquerda e círculo independente à direita, com verde WhatsApp e símbolo branco. Manter um único link acessível e as mesmas animações de texto e ícone do hero. No hero, preservar a cápsula padrão e aplicar o mesmo verde no círculo do WhatsApp. Conferir encaixe em celular de 320 px.

Ajuste solicitado: preservar a entrada do hero e a animação padrão dos CTAs; nos diferenciais retomar texto à esquerda e círculo à direita, substituindo seta pelo ícone real do WhatsApp. Reutilizar RoundLink com variante de ícone, sem criar outro padrão de movimento. Refino de cápsula com borda fina, luz interna e sombra discreta; círculo com relevo suave. No hero, concentrar acabamento no CTA para preservar a composição limpa. Diferenciais usam largura completa no rodapé, azul sobre card claro e branco sobre cards escuros. Switzer, tracking, rótulos acessíveis e preferência de movimento reduzido mantidos.
