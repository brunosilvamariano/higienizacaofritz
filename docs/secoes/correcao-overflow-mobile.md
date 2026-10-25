# Correção de largura no celular

Brief: preservar identidade visual, geometria do hero/header e animações. Corrigir o excesso horizontal na origem, sem esconder o overflow global da página ou criar um contêiner de rolagem que interfira nos cards sticky.

Diagnóstico: em 320 px, a animação de entrada do texto em Sobre desloca a coluna 24 px para a direita e amplia a largura do documento para 328 px; em 390 px, o documento chega a 396 px. Conter o deslocamento no limite da própria seção com overflow-x: clip e permitir que a coluna de texto encolha dentro do grid.

Validação prevista: home e Serviços em 320, 375, 390 e 430 px; conferir largura do documento, entrada do Sobre, cards, FAQ e menu.

Validação realizada: em ambas as páginas, documentElement.scrollWidth correspondeu a clientWidth em 320, 375, 390 e 430 px. A entrada do Sobre e o menu aberto também mantiveram 390 px de largura total. Captura visual salva; npm run check e git diff --check concluídos sem erros.
