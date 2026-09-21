# Ajustes após o feedback visual

## Correção v3 — foto com sidebar recolhida

A regra da v2 permitia à foto crescer apenas pela largura, ultrapassando o topo da abertura em desktops largos. Na composição lateral, a imagem agora ocupa uma caixa limitada à largura e à altura da coluna, com `object-fit: contain`, mantendo a fotografia inteira e proporcional. A composição empilhada conserva a altura natural da foto.

Verificado visualmente em 1888 × 910 com menu recolhido, além de medições em 1920 × 600, 1440 × 900 e 1024 × 776 com os dois estados do menu, e em 768 × 776 e 375 × 812. Em todos esses cenários a caixa da imagem ficou contida na coluna e na seção, sem rolagem horizontal. Build e auditoria estática aprovadas; nenhum erro ou aviso na consulta de console.

## Rodada visual anterior

Esta rodada atualiza as decisões visuais da auditoria anterior, preservando os textos e HTML/CSS/JavaScript.

- A foto principal ganhou mais espaço na composição lateral. Quando a área disponível ao lado da sidebar tem até 896 px, a abertura passa a uma coluna: texto, botões, avaliações e foto. Em 1024 px com sidebar aberta, a foto mede 512 px de largura; em 768 px também mede 512 px. Há 48 px entre avaliações e foto nesses cenários.
- Removido o botão “Pausar animação”, conforme solicitado. A faixa conserva a pausa ao passar o mouse e o respeito à preferência de movimento reduzido.
- A seção Sobre usa colunas equilibradas e um intervalo maior entre a fotografia e os textos. Em áreas menores, empilha os blocos.
- O rodapé foi reorganizado em marca, navegação e canais. Copyright e direitos ficam agrupados; o crédito fica à direita quando há espaço e abaixo nas telas menores. Removidos os efeitos de hover dos links do rodapé.
- Instagram e localização na sidebar usam alvos de 44 px separados por 4 px, sem fundo ou borda no hover. O foco por teclado continua visível.
- CTAs do FAQ limitados a 320 px e à largura disponível da tela.

Os arquivos de `dist/` são regenerados pelo build. O relatório da primeira auditoria descreve aquela etapa; este documento registra as alterações posteriores solicitadas.

Validação desta rodada: build aberta no navegador em 320, 375, 768, 1024, 1280, 1440 e 1920 px, incluindo os dois estados da sidebar nas larguras desktop. Sem rolagem horizontal, sem cortes nos títulos/parágrafos/CTAs medidos e sem erros ou avisos no console consultado. Todos os CTAs do FAQ ficaram em até 320 px. Auditoria estática: 0 erros e 0 avisos. Sintaxe do JavaScript alterado e build aprovadas.
