# Design brief — navegação Fritz

Objetivo: dar à navegação o mesmo acabamento das páginas, com destinos claros e controle confortável no celular.

Decisão desktop: substituir Mais e o dropdown duplicado por Dúvidas, mantendo Serviços, Avaliações e Sobre e a geometria existente do recorte do hero. O botão identificado como Menu abre a navegação completa. Em larguras intermediárias, o CTA do header cede espaço aos destinos; o orçamento continua disponível no painel.

Painel: superfície gelo com radial azul quase imperceptível, traços finos, marca real, números discretos e tipografia Nohemi/Switzer existentes. Cobalto sinaliza interação; verde aparece em um pequeno detalhe. Desktop tem navegação editorial à esquerda e foto real de serviço e contato à direita. Celular usa uma única coluna, sem imagem decorativa, com seis destinos legíveis e contato ao final. Painel amplo com margens pequenas, cantos consistentes e abertura curta, sem overscroll horizontal.

Interação: dialog modal nativo; foco no fechamento ao abrir, Escape, clique no backdrop, retorno de foco ao cancelar e foco na seção ao navegar. Bloqueio de scroll preserva a posição da página. Links com modificadores mantêm comportamento normal. Âncoras e transição Fritz. existentes preservadas. Movimento reduzido dispensa animações. Validar teclado, 320–430 px, tablet, desktop e telas baixas.

Arquivos existentes: header/desktop-navigation.tsx, mobile-navigation.tsx, mobile-navigation.css, header.css e os ajustes contextuais em home.css/home-colors.css. Documento novo: este brief. Sem mudança de arquitetura, recursos fictícios ou dependências.

Referências funcionais: [WAI modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) e [WAI site navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/). As regras de foco, Escape e links nativos guiam a implementação; o desenho é próprio da identidade Fritz.

## Validação realizada

- Painel conferido em 320×568, 375×667, 390×844, 430×932 e 768×1024: documento e painel sem overflow horizontal; links com altura mínima de 44 px. Em telas baixas, rolagem interna permite alcançar todo o conteúdo e o fechamento permanece sticky.
- Header desktop conferido entre 992 e 1440 px, sem colisão entre marca, navegação e ações. Recorte original preservado. Painel completo inspecionado visualmente em 1440×1000.
- Tab e Shift+Tab mantêm foco dentro do painel; Escape, botão Fechar e clique no backdrop fecham e devolvem foco ao acionador. Testadas âncora Dúvidas, Home → Serviços e retorno pela marca; destino recebe foco e bloqueio de scroll é removido.
- Movimento reduzido testado: painel e links sem animação. Serviços recebe aria-current; links são navegação nativa, sem role menu indevido.
- npm run check, 29 testes unitários e build de produção Webpack passaram. Sem dependências novas.

## Evolução solicitada — tipografia, ícones e navegação após o hero

Brief: reduzir os títulos dos links do painel em aproximadamente 12–15%, mantendo alvos de toque e espaçamentos. Substituir números por símbolos lineares de início, serviços, avaliações, profissional, dúvidas e contato, integrados ao componente FritzIcon existente.

O mesmo header muda para uma barra fixa compacta quando o limite inferior do hero sai da tela. A versão sobre o hero mantém o recorte e suas cores originais; a barra flutuante usa gelo translúcido, texto escuro/cobalto, borda fina e sombra discreta. Retorna ao estado original ao entrar no hero. Usar IntersectionObserver, sem processamento contínuo de scroll ou navegação duplicada. Funciona também no banner de Serviços e respeita movimento reduzido, foco e navegação por âncoras.

Validação desta evolução: header original branco e recorte preservados dentro do hero; barra fixa com texto escuro após a saída, em desktop e mobile. Em Serviços, testadas as larguras 320, 375, 390 e 430 px sem overflow ou colisão da marca com o botão. Painel contém seis ícones e fonte de 23 px no viewport de 390 px. Abertura pela barra, Escape e foco de retorno conferidos, inclusive com movimento reduzido.

A navegação Serviços → /#duvidas também mantém a barra visível. Como o Next pode atualizar o pathname antes de montar o novo main, a observação aguarda o hero específico da rota; o MutationObserver temporário é desconectado assim que esse elemento aparece. A observação de interseção é removida ao trocar de página.
