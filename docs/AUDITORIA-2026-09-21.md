# Auditoria e melhorias — Fritz Higienização

21 de setembro de 2026

O trabalho foi realizado sobre uma cópia do ZIP enviado. O arquivo original não foi alterado. Foram mantidos HTML, CSS e JavaScript, português, identidade visual, fotografias, serviços e contatos. Documentos antigos do projeto foram tratados como referência, não como instruções do usuário nem como prova de que os testes já estavam aprovados.

## Problemas confirmados e correções

| Constatação | Evidência na versão original | Correção |
| --- | --- | --- |
| Rolagem horizontal | Excesso de 173 px em 1280 px e 41 px em 1440 px, com menu expandido; conteúdo do rodapé ultrapassava a página. | Colunas flexíveis, quebra do bloco legal e ajuste das larguras mínimas. |
| Tela de 320 px | O mínimo de 320 px no corpo desconsiderava a barra vertical; houve excesso de 15 px. | Removida a largura mínima rígida do corpo. |
| Título ultrapassando a coluna | Medido em 320, 375, 768, 1024 e 2560 px. | Tamanho calculado pela largura da coluna, limites fluidos e quebra de segurança. |
| Botões comprimidos | O CTA principal ultrapassava sua largura disponível em 320 px. | Botões empilhados nas telas estreitas, texto legível e altura confortável. |
| Menu móvel sem isolamento do foco | Não havia contenção de Tab nem inativação do conteúdo atrás do menu. | Diálogo com `aria-modal`, fundo inativo, ciclo de Tab/Shift+Tab e restauração de foco. |
| Menu em telas baixas | A navegação fixa não tinha uma solução geral para conteúdo maior que a altura disponível. | Rolagem interna em telas baixas e ajuste ao viewport dinâmico. |
| Carregamento bloqueante | Espera mínima de 1.200 ms; sem execução de JavaScript, o preloader permanecia sobre a página. | Removida a tela bloqueante e a animação de entrada do conteúdo principal. |
| Galeria sem scripts | Cartões iniciavam invisíveis e dependiam da inicialização para aparecer. | Galeria estática como base; efeito de carrossel aplicado somente após inicialização. |
| Controles pequenos | Indicadores da galeria tinham apenas 8 px de altura. | Área de interação de 44 × 44 px, preservando a aparência dos indicadores. |
| Foco na galeria | Ao usar setas no cartão, o foco podia permanecer no cartão que acabava de receber `aria-hidden`. | Foco acompanha o cartão ativo, anúncio da seleção e suporte a Home/End. |
| Cancelamento de gesto | `pointercancel` executava a mesma seleção de slide que um gesto concluído. | Cancelamento não troca o resultado; captura inicia após movimento, preservando cliques laterais. |
| FAQ não fechava a resposta selecionada | O clique sempre chamava a abertura do mesmo índice. | Clique alterna abrir/fechar; respostas fechadas ficam inativas. |
| Movimento contínuo | Não havia botão persistente de pausa da faixa animada. | Controle de pausar/retomar, além do respeito à preferência de movimento reduzido. |
| Texto alheio ao serviço | “Estratégia, design e desenvolvimento” aparecia na seção de contato. | Substituído por “Higienização e impermeabilização”, sem mudar o tom da página. |
| Dimensões declaradas | Três imagens de serviços eram 400 × 200, mas declaravam 1200 × 900 no HTML. | Metadados de dimensões alinhados aos arquivos reais. |

## Outros refinamentos

- Contato passa a considerar a largura disponível dentro da seção; colunas deixam de exigir larguras fixas excessivas.
- Contraste reforçado nos textos secundários selecionados, informações de contato e crédito do rodapé; foco destacado sobre a seção azul.
- Navegação e conteúdo continuam disponíveis sem scripts, incluindo as cinco fotos e seis respostas do FAQ.
- Link de pular conteúdo direciona a um `main` focalizável.
- Rótulo acessível de “Estofados e Camas” alinhado ao título do cartão.
- Fonte do título antecipada e imagem de compartilhamento JPEG existente de 1200 × 628 utilizada nos metadados sociais.
- Build reúne 15 folhas de estilo em um arquivo com hash, preservando a ordem e os caminhos das fontes. Os módulos de origem continuam separados para edição.
- Build resolve a raiz pelo próprio script e verifica o destino antes de limpar `dist/`. Configuração Vercel aponta explicitamente para essa pasta. Nenhuma publicação foi realizada.

## Validação executada

Navegador integrado do Codex, baseado em Chromium, com a página servida localmente.

- Primeira matriz: larguras de 320, 360, 375, 390, 480, 640, 768, 1024, 1280, 1440, 1920 e 2560 px. Após as correções: sem rolagem horizontal e sem cortes nos títulos, parágrafos e controles textuais medidos.
- Matriz complementar: 280 × 653, 320 × 568, 375 × 812, 667 × 375, 768 × 1024, 844 × 390, 1024 × 600, 1280 × 600, 1440 × 900, 1920 × 1080, 2560 × 1440 e 3840 × 2160. Sem rolagem horizontal. Rótulos visualmente ocultos do menu recolhido e conteúdos intencionalmente roláveis não são considerados cortes de conteúdo.
- Inspeção visual da abertura em celular e desktop, galeria, FAQ e menu móvel em paisagem.
- Menu: abertura, fundo inativo, ciclo de foco nos dois sentidos, Escape, retorno ao botão e alternância entre expandido/recolhido.
- FAQ: abertura, fechamento e navegação até a última pergunta com End.
- Galeria: seleção direta do terceiro resultado e avanço com seta; foco permaneceu no cartão ativo.
- Serviços: End na barra de rolagem chegou ao limite de 407 px de 407 px no cenário testado.
- Faixa animada: botão alternou corretamente entre pausar e retomar, incluindo `aria-pressed`.
- Sem scripts: teste em iframe com execução de JavaScript bloqueada. Preloader ausente, cinco cartões com altura visível e seis respostas disponíveis; menu acessível em fluxo normal.
- Auditoria estática do projeto: **0 erros e 0 avisos**. Sintaxe dos módulos JavaScript validada pelo Node. Build concluída e aberta no navegador; uma folha de estilo carregada em produção.
- Nenhum erro ou aviso de console na consulta realizada durante a verificação da página corrigida.

## Limites e pontos preservados

Estes testes não equivalem a uma certificação WCAG, nota Lighthouse, teste de todos os dispositivos físicos ou validação em Safari e Firefox. Movimento reduzido foi revisado no código, sem emulação dessa preferência no navegador disponível. A avaliação de contraste foi pontual; não foi executada uma varredura completa por ferramenta especializada.

Links de WhatsApp, Instagram e Maps foram revisados no HTML; não foram enviadas mensagens. Telefone, endereço, domínio e afirmações de avaliações do Google foram preservados como fornecidos, sem verificação comercial externa. Nenhuma credencial, rastreador, avaliação, promessa de resultado ou depoimento foi inventado.

As imagens originais foram preservadas. A imagem principal tem aproximadamente 773 KB; não se atribui ganho de compressão à entrega. A melhoria de carregamento documentada é a remoção da espera artificial, a antecipação da fonte e a consolidação do CSS, sem estimativa inventada de velocidade ou conversão.

## Uso da entrega

O ZIP contém o projeto editável e `dist/` pronta para hospedagem estática. Com Node instalado, execute `npm run dev` para editar; `npm run audit`, `npm run build` e `npm run preview` para conferir a versão de produção. Não edite `dist/` diretamente. Relatórios anteriores na pasta `docs/` são históricos; este documento descreve esta revisão.
