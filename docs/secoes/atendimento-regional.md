# Atendimento regional

Seção da Home após AboutFritz. Sete municípios fornecidos pelo usuário e já cadastrados na página Sobre. Seleção por mapa ou campo nativo; CTA informa a cidade ao WhatsApp, sem enviar automaticamente. As condições continuam sob consulta.

## Dados e geração

- Malha municipal: IBGE, API de Malhas v3, UF42, qualidade intermediária. https://servicodados.ibge.gov.br/api/docs/malhas?versao=3
- Download: https://servicodados.ibge.gov.br/api/v3/malhas/estados/42?formato=application/vnd.geo%2Bjson&qualidade=intermediaria&intrarregiao=municipio
- Coordenadas das sedes: dataset público Municípios Brasileiros, de kelvins. https://github.com/kelvins/municipios-brasileiros
- CSV: https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/csv/municipios.csv
- Dados consultados em 16/10/2026. As bases originais foram guardadas em `work/region-map`; o site usa apenas `service-area-map.json`, cerca de 43 KB.
- `node scripts/generate-service-area-map.cjs` projeta a geometria por Mercator e filtra os municípios vizinhos que intersectam o enquadramento. O desenho não é um mapa de rotas nem representa cobertura integral de cada município.
- Nenhum serviço externo é carregado em runtime. Não foram adicionadas dependências, tiles, SDKs ou fontes externas. Sombras são acabamento gráfico, não informação de relevo.

## Movimento e acessibilidade

Parallax vertical de até 84px no desktop e 46px no mobile, medido pela passagem do próprio mapa na viewport. Um plano de água se desloca em sentido contrário, com menor amplitude; o terreno recebe sombra de borda e profundidade gráfica. Os pontos ficam no mesmo plano da geometria para não deslocar sua localização. Movimento reduzido mantém o mapa estático. Botões têm 44px, nomes acessíveis e estado selecionado; seletor nativo oferece alternativa por teclado e toque. A legenda aparece para todos os pontos em desktop e apenas para o ativo no celular.

## Verificação — 16/10/2026

Home inspecionada em 320, 396, 768, 1440 e 1920px, sem overflow. Conteúdo útil de 1440px confirmado em 1920px. Seção está entre sobre-a-fritz e estudio. Seleção de Itapoá e São Francisco do Sul por ponto e Balneário Camboriú pelo seletor atualizou território, campo, identificação e link WhatsApp, sem abrir/enviar a mensagem. Sete alvos de 44x44px, sem interseção entre caixas no mobile; rótulo ativo coube em 320px. Transformação do mapa mudou de +8,86px para -1,23px ao rolar no desktop; pontos acompanham a mesma camada. Verificação independente ponto-em-polígono confirmou cada uma das sete coordenadas dentro do município IBGE correto. Lint escopado, formatação e TypeScript passaram; console sem erros. Preferência de movimento reduzido preservada por código, sem emulação dessa preferência no navegador.

### Profundidade ampliada

Geografia e pontos continuam no mesmo plano sem rotação/escala, mantendo áreas de toque 44px. Conferência no navegador encontrou erro de alinhamento inferior a 0,02px em todos os pontos no desktop e mobile. Em 396px, 200px de rolagem alteraram deslocamento do mapa de -0,16px para -13,80px e o fundo se moveu no sentido oposto. Seleção de Balneário Camboriú atualizou cidade/CTA após rolar. Sem overflow, sem mudanças de fontes/paleta/conteúdo. Lint e TypeScript passaram; movimento reduzido desliga ambos os planos.
