# Design Brief — Bricolage, Nohemi e Switzer

Pedido explícito de 24/10/2026: Bricolage Grotesque no hero, Nohemi nos títulos das seções/cards, Switzer nos textos e botões. Substituir a Clash Display nesses papéis, mantendo cores, conteúdo e animações atuais.

Bricolage Semibold no título principal e Medium na palavra Higienização; ajustar largura e corpo juntos para duas linhas naturais do título e palavra de fundo inteira. Nohemi Medium em títulos editoriais e cards, escala compartilhada com leading suficiente para acentos. Switzer permanece como base de leitura e ações. Evitar pesos simulados e quebras arbitrárias dentro de palavras.

WOFF2 locais, next/font/local, termos de licença junto aos arquivos. Bricolage oficial de ateliertriay/bricolage, SIL OFL 1.1. Nohemi pelo Gumroad oficial de Rajesh Rajput, versão gratuita autorizada para projetos comerciais; guardar licença fornecida no pacote. Conferir cmap, eixos/pesos e todo o texto real da aplicação, incluindo português precomposto e caracteres combinantes.

Validar desktop 1440, tablet 768, celulares 390 e 320 px, incluindo título do hero, máscaras temporárias de SplitText, cartões, FAQ e contato. Preservar navegação, gestos, movimento reduzido e botões. Sem nova arquitetura ou dependências de runtime.

## Arquivos e caracteres

Bricolage: WOFF2 variável original com eixos opsz 12–96, wght 200–800 e wdth 75–100. Nohemi: WOFF2 originais Regular, Medium e SemiBold, sem conversão. Todos os caracteres alfabéticos dos arquivos *.content.ts e os acentos portugueses precompostos foram encontrados nos cmap. Nohemi e Switzer não expõem os acentos combinantes isolados no cmap; o conteúdo vigente usa caracteres precompostos NFC. Não modificar os arquivos Nohemi para acrescentar glifos. Auditoria local em work/typography-2026-10-24/glyph-audit.json.

Escala ajustada: títulos de seção 30–52 px, cards 22–26 px e entrelinha 1.15. Hero preserva duas linhas e sua escala própria; descrição e ações seguem em Switzer.

## Validação realizada

- npm run check e npm run build aprovados.
- Todos os arquivos *.content.ts estão em NFC. Nenhuma letra do conteúdo real está ausente nos cmap das três versões Nohemi e da Bricolage.
- Navegador real em 1440 × 900, 768 × 1024, 390 × 844 e 320 × 740: título do hero com duas linhas, palavra Higienização inteira e nenhum overflow na página ou nos títulos visíveis.
- Cards: títulos, áreas de texto e ações conferidos no desktop e em 320 px. Nohemi efetivamente carregada; descrições e ações em Switzer. Bricolage efetivamente carregada no hero.
- Entrada normal: recorte central e máscaras de caracteres ativos com Bricolage. Revisão estática com movimento reduzido para conferir geometria e quebras. Preferência normal restaurada.
- Capturas em work/typography-2026-10-24/preview.
