# Design brief — Sobre Fritz / About Studio Digigo

Ajuste solicitado: substituir somente o apoio de atendimento e avatares por quatro links identificados: Instagram, Facebook, Linktree e avaliações no Google. Ícones com cores das respectivas marcas, em suportes claros com contorno e hover discreto, mantendo a posição e a entrada do bloco. Usar os endereços fornecidos pelo usuário; Linktree sem parâmetros de campanha. Google direciona à lista de avaliações do perfil, não ao formulário para escrever uma avaliação. Preservar foto, título, texto, CTA e demais seções.

Complemento solicitado: usar SectionEyebrow no selo Sobre o Fritz, com o mesmo traço e gota das demais seções. Os quatro links sociais ficam em uma linha compacta de círculos de 48 px, com nomes acessíveis e tooltip, sem acrescentar cards de texto. Instagram e Google reutilizam os componentes locais. Facebook e Linktree usam os paths do repositório Simple Icons (CC0): https://github.com/simple-icons/simple-icons/blob/develop/icons/facebook.svg e https://github.com/simple-icons/simple-icons/blob/develop/icons/linktree.svg, consultados em 24/10/2026. SVGs inline, sem CDN, pacote ou script externo.

Pedido: reproduzir somente o About Studio da home https://digigo-oly.webflow.io/, usando fontes, cores, informações e fotos Fritz. Referência inspecionada no navegador em 1440 e 390 px. Não alterar nenhuma outra seção ou a navegação.

Desktop: pequeno selo à esquerda, título editorial em caixa alta ocupando as duas colunas da direita. Segunda linha com apoio de atendimento e avatares no canto inferior esquerdo, foto horizontal ao centro e texto com CTA à direita, alinhado à base. A referência usa aproximadamente 22% / 39% / 39% na linha inferior, vãos amplos e cantos de 20 px. Reutilizar a escala tipográfica Fritz, sem importar a fonte condensada nem os tamanhos isolados da referência.

Celular: selo, título, foto, texto/CTA e bloco de atendimento com avatares, nessa ordem. Manter a proporção horizontal da foto e permitir a quebra natural dos títulos, sem overflow. Tablet distribui a foto e texto em duas colunas, com apoio abaixo quando necessário.

Conteúdo: título existente Por trás de cada cuidado existe alguém que respeita a sua casa; missão e especialidade já documentadas no Sobre; atendimento Joinville e região. Foto real existente src/assets/images/shared/professional/desktop.webp (Fritz trabalhando no estofado), que se adapta ao enquadramento horizontal; três avatares existentes de clientes via googleReviews. Sem métricas ou alegações novas.

Acabamento: Nohemi em título, Switzer em texto/CTA; tinta, azul e superfícies Fritz. Botão RoundLink atual preserva texto, WhatsApp verde, animações e tracking. Apoio com ícone local de localização, círculo azul suave, linha delicada e três fotos sobrepostas seguidas de seta circular azul para as avaliações.

Movimento observado: título entra por palavras com opacidade/deslocamento; apoio e texto entram discretamente; a foto sai de um enquadramento interno para preencher a moldura, com camada desfocada atrás durante a transição. Implementar entrada única com IntersectionObserver e CSS, sem nova biblioteca e sem interferir na animação global das outras seções. Sem JavaScript, conteúdo visível. Movimento reduzido elimina a entrada; foco revela o conteúdo imediatamente.

Arquivos existentes editados: src/sections/home/about-fritz/about-summary.tsx e src/sections/home/home-concise.css (retirar apenas os estilos anteriores do About). Novo arquivo: src/sections/home/about-fritz/about-summary.css. Sem mudança de arquitetura. Este brief substitui a composição compacta anterior apenas no Sobre.

## Validação

Conferido em 1440, 768, 390 e 320 px, sem overflow horizontal. Desktop com selo/título e três colunas; tablet com foto/texto e apoio abaixo; celular com foto, texto e apoio na ordem da referência. CTA em 320 px com 190 px dentro da coluna de 274 px. Nohemi confirmada no título; conteúdo com acentos preservados. Entradas observadas nos quatro grupos; movimento reduzido mantém palavras visíveis e duração de transição zero. Lint, TypeScript, Prettier e build aprovados. Demais seções preservadas.
