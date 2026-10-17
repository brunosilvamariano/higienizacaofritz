import sofa from '@/assets/images/pages/home/before-after/sofa-azul-illustrativo.webp';
import colchao from '@/assets/images/pages/home/before-after/colchao-illustrativo.webp';
import tapete from '@/assets/images/pages/home/before-after/tapete-cinza-illustrativo.webp';
import cadeira from '@/assets/images/pages/home/before-after/cadeira-caramelo-illustrativa.webp';

export const comparisonCases = [
  {
    id: 'sofas',
    title: 'Sofás',
    detail: 'Do assento aos braços, observe o tecido.',
    image: sofa,
  },
  {
    id: 'colchoes',
    title: 'Colchões',
    detail: 'Compare as marcas na superfície clara.',
    image: colchao,
  },
  {
    id: 'tapetes',
    title: 'Tapetes',
    detail: 'Veja a textura e o contorno das fibras.',
    image: tapete,
  },
  {
    id: 'cadeiras',
    title: 'Cadeiras',
    detail: 'Confira o assento e a trama do encosto.',
    image: cadeira,
  },
] as const;
