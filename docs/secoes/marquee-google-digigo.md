# Design brief — faixa de serviços e avaliações Fritz

## Refinamento da prova social

Pedido: organizar as métricas com hierarquia clara, eliminar números vazados e adicionar quatro retratos reais. Direção: painel integrado à faixa, separado dos serviços por um fio vertical suave; cabeçalho Google compacto com linha em degradê, números sólidos em Switzer semibold, duas colunas divididas por um traço discreto. Nota com cinco estrelas e contagem com quatro avatares sobrepostos. Selecionar as imagens locais de Bia Marina, Anne Karoline, Aline Grasso e Bruna Sena, verificadas visualmente como fotos de perfil, sem usar iniciais ou ilustrações. Manter links, valores, cores Google e marquee. No celular, painel ocupa a largura disponível com divisória superior e números na mesma linha, sem cortes.

Referência inspecionada: https://digigo-oly.webflow.io/, faixa horizontal imediatamente acima de Our Solution Process. Texto grande em movimento à esquerda, símbolo central e dois números fixos à direita, superfície clara e linhas externas delicadas.

Adaptar ao Fritz: substituir as faixas diagonais existentes por uma faixa horizontal em gelo azulado, com serviços reais em Nohemi, textos auxiliares em Switzer e números na escala compartilhada de banner. Posicionar antes de Por que escolher o Fritz, correspondente à seção de processo da referência. Preservar hero, cards e gestos já aprovados.

Usar googleReviews como fonte única: nota 5,0 e 291 avaliações, dados cadastrados com conferência em 16/10/2026. Não apresentar números da referência ou alegar atualização automática. Métricas levam ao perfil real do Fritz no Google.

Google: símbolo G e palavra multicoloridos, com azul #4285F4, vermelho #EA4335, amarelo #FBBC05 e verde #34A853. Reutilizar as formas SVG locais existentes, centralizando a marca no módulo compartilhado de ícones para manter consistência no marquee, avaliações, Sobre e rodapé. Recursos empacotados, sem CDN.

Responsividade: no desktop, marquee e métricas na mesma linha. No celular, linha animada acima e duas métricas lado a lado abaixo, com separador discreto e sem overflow. Movimento contínuo lento, pausa em hover/foco; preferência de movimento reduzido desativa a animação e permite ler serviços por rolagem horizontal.

Arquivos existentes envolvidos: src/app/page.tsx; src/sections/home/service-marquee/service-marquee.tsx e service-marquee.css; src/components/ui/social-icons.tsx e social-icons.css; src/sections/home/testimonials/testimonials.tsx; src/sections/home/about-fritz/about-fritz.tsx; src/components/layout/footer/footer.tsx e footer.css. Novo arquivo somente este registro. Estrutura e dependências preservadas.

Validação: npm run check, 28 testes existentes e build de produção aprovados. Inspeção da referência realizada no navegador em desktop. A inspeção visual do resultado local ficou pendente: a política de segurança do navegador bloqueou a ação de inspeção. Nenhuma tentativa de contornar o bloqueio foi usada.
