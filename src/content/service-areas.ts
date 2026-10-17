/** Cidades confirmadas pelo Fritz; IDs IBGE também ligam os pontos ao mapa. */
export const serviceAreas = [
  { id: '4209102', name: 'Joinville' },
  { id: '4208450', name: 'Itapoá' },
  { id: '4216206', name: 'São Francisco do Sul' },
  { id: '4202057', name: 'Balneário Barra do Sul' },
  { id: '4202107', name: 'Barra Velha' },
  { id: '4212809', name: 'Balneário Piçarras' },
  { id: '4202008', name: 'Balneário Camboriú' },
] as const;

export const serviceAreaNames = serviceAreas.map(({ name }) => name);
