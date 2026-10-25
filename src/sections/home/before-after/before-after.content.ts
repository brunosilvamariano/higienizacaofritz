import sofa from '@/assets/images/pages/home/before-after/sofa-azul-illustrativo.webp';
import colchao from '@/assets/images/pages/home/before-after/colchao-illustrativo.webp';
import tapete from '@/assets/images/pages/home/before-after/tapete-cinza-illustrativo.webp';
import cadeira from '@/assets/images/pages/home/before-after/cadeira-caramelo-illustrativa.webp';

export const comparisonCases = [
  {
    id: 'sofas',
    title: 'Sofás',
    detail:
      'Higienização de sofás, dos assentos aos braços e encostos. Envie fotos para consultar o serviço indicado e os cuidados com o tecido.',
    image: sofa,
  },
  {
    id: 'colchoes',
    title: 'Colchões',
    detail:
      'Limpeza de colchões com orientação sobre secagem e uso após o serviço. Informe as medidas e envie fotos para consultar o atendimento.',
    image: colchao,
  },
  {
    id: 'tapetes',
    title: 'Tapetes',
    detail:
      'Cada material pede um cuidado próprio. Envie as medidas, fotos e a etiqueta do tapete, se disponível, para consultar a higienização.',
    image: tapete,
  },
  {
    id: 'cadeiras',
    title: 'Cadeiras',
    detail:
      'Higienização de cadeiras com atenção ao assento, encosto e tipo de tecido. Envie fotos e a quantidade de peças para pedir seu orçamento.',
    image: cadeira,
  },
] as const;
