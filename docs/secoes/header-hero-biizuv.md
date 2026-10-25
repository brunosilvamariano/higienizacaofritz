# Design Brief — header e hero Fritz

Data: 23/10/2026. Pedido: adaptar o header e o hero de https://biizuv.webflow.io/ à Fritz, usando a foto já presente em Sobre o Fritz.

## Direção

Abertura única com moldura clara e cantos arredondados, fundo azul Fritz, palavra Higienização em degradê atrás do retrato recortado, mensagem curta à esquerda e descrição com orçamento à direita. O rosto e o gesto do profissional devem ficar visíveis. Remover da abertura anterior a faixa social e o bloco decorativo de estatística, concentrando a leitura no serviço e no contato.

Header sobre o hero, acompanhando a rolagem normal: marca à esquerda, navegação central com recorte branco e separadores, contato e botão circular de menu à direita. Mais abre os atalhos reais da home. O menu completo mantém todas as âncoras e contatos existentes, em painel escuro; no celular, painel lateral com foco contido pelo dialog nativo e fechamento por Escape.

Bebas Neue nos títulos, Poppins nos textos, links e botões; reutilizar os tokens compartilhados de título de banner, corpo e ação. Azul, marinho, branco e gelo existentes, sem copiar fontes nem adicionar cores de marca da referência. Novo botão cápsula compartilhado entre header e hero, com seta circular e troca de texto no hover/foco.

## Recurso real

Importar src/assets/images/pages/home/about-fritz/profissional.webp diretamente, sem alteração do rosto, geração de imagem, duplicação do arquivo ou recurso remoto. O mesmo retrato continua em Sobre. Não adicionar métricas, avaliações, prazos ou garantias.

## Movimento e adaptação

Entrada com expansão visual, retrato reduzindo suavemente a escala, palavra e mensagem em sequência; integrar à cortina existente. Parallax discreto exclusivo do retrato, sem prender a rolagem. Com movimento reduzido, mostrar conteúdo estático imediatamente. Sem JavaScript, o conteúdo do hero permanece legível.

Desktop em duas colunas inferiores; tablet mantém espaço para a foto; celular reorganiza em uma coluna e reserva uma área própria para o retrato antes da mensagem. Altura mínima fluida e conteúdo no fluxo para não cortar textos em telas baixas. Menu e botões com alvos de pelo menos 44 px, rótulo acessível único, foco visível e retorno de foco.

## Estrutura

Manter a arquitetura vigente de docs/guias/arquitetura.md. Arquivos existentes alterados: hero.tsx, hero.content.ts, hero.css, hero-entrance.tsx; header.tsx, desktop-navigation.tsx, header.css, mobile-navigation.tsx e mobile-navigation.css. Ajustar somente os estilos contextuais antigos do header/hero em home.css. Arquivos novos: este brief e src/components/ui/round-link.tsx + round-link.css. Sem novas pastas de arquitetura, rotas, pacotes ou recursos de mídia.

## Verificação

Conferir imagem, camadas, contraste, quebras e overflow em 320, 390, 768, 1280 e 1440 px, incluindo tela baixa. Validar menu, Escape, retorno do foco, atalhos e destinos de WhatsApp. Conferir movimento reduzido e ausência de erros de console. Executar lint, tipos, formatação, testes existentes e build; registrar somente resultados efetivamente obtidos.

Resultado: npm run check, os 28 testes existentes e npm run build concluídos com sucesso. O build precisou ser executado fora do sandbox após a primeira compilação ficar parada sem diagnóstico. Revisão no navegador em 320×568, 390×844, 768×1024, 1024×600, 1280×720 e 1440×900, sem overflow horizontal. Conferidos megamenu, menu completo, Escape, retorno do foco, navegação do menu até Sobre o Fritz e destinos configurados de WhatsApp. Movimento reduzido verificado com mídia emulada: conteúdo visível, sem recorte de entrada ou transformação animada no retrato. Nenhum erro de console retornado na sessão de revisão. Capturas em work/header-hero-preview.

## Entrada fiel ao hero Biizuv — 23/10/2026

Analisados DOM e configuração pública de animação da referência. Curva identificada no runtime: índice 5 = power2.out. Sequência relativa ao início: imagem em escala 1.25 → 1 a partir de 0.25 s, duração 1.25 s; abertura central em ambas as dimensões a partir de 0.25 s, duração 1.5 s; palavra de fundo com opacidade e deslocamento vertical de 40 px em 1.59 s, duração 0.6 s; título com máscara individual por caractere e deslocamento horizontal de 20 px em 2.11 s, duração 0.6 s por letra, intervalo 0.02 s; descrição e ação por linhas em 2.94 s, duração 0.6 s e intervalo 0.15 s. Parallax da imagem de 0 → 100 px, scrub 0.8.

Aplicar os valores com GSAP e SplitText já instalados, preservando fontes, textos, imagem e layout Fritz. Header permanece estático como na referência. A abertura da home começa pelo recorte central, liberando a cobertura inicial sem a animação anterior da cortina/logo. Conservar transições de navegação e movimento reduzido. Restaurar a marcação natural após o término para permitir recomposição responsiva; conteúdo legível sem JavaScript.

Validação da entrada: npm run check aprovado, 28 testes aprovados e build de produção concluído. Navegador em desktop 1440 × 900 e celular 390 × 844; captura da sequência mostrou recorte central ativo com a palavra de fundo ainda oculta, antes da entrada dos textos. Ao terminar, nenhuma máscara residual no título/descrição e nenhum overflow na página. Mudança para 320 × 740 durante a entrada completou a sequência e restaurou as quebras naturais. Com movimento reduzido: conteúdo visível, sem recorte, divisão por caracteres ou transformação na imagem. Capturas em work/hero-motion-preview.
