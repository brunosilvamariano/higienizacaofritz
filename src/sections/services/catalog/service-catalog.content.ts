import sofas from '@/assets/images/shared/services/sofas/desktop.webp';
import mattresses from '@/assets/images/shared/services/colchoes/desktop.webp';
import rugs from '@/assets/images/shared/services/tapetes/desktop.webp';
import protection from '@/assets/images/shared/services/impermeabilizacao/desktop.webp';

export const serviceDetails = [
  {
    id: 'estofados',
    icon: 'sofa',
    title: 'Higienização de estofados',
    introduction: 'Cuidado com os tecidos que fazem parte da sua casa.',
    description:
      'Higienização de sofás, poltronas e cadeiras. Envie fotos das peças para consultar o serviço indicado e receber orientação sobre o tecido.',
    notes: [
      'Sofás, poltronas e cadeiras',
      'Orçamento a partir das informações e fotos das peças',
      'Orientações de conservação após o atendimento',
    ],
    image: sofas,
    alt: 'Higienização de sofá com equipamento de extração.',
  },
  {
    id: 'colchoes',
    icon: 'bed-flat',
    title: 'Higienização de colchões',
    introduction: 'Atenção ao colchão e aos cuidados de secagem.',
    description:
      'Limpeza de colchões com orientações para preparar o ambiente e voltar a usar a peça após o serviço. O tempo de secagem depende das condições e do tecido.',
    notes: [
      'Informe as medidas e envie fotos do colchão',
      'Prepare o ambiente conforme a orientação recebida',
      'Confirme a secagem antes de voltar a utilizar',
    ],
    image: mattresses,
    alt: 'Equipamento de limpeza durante a higienização de um colchão.',
  },
  {
    id: 'tapetes',
    icon: 'rug',
    title: 'Higienização de tapetes',
    introduction: 'Cada material merece uma avaliação própria.',
    description:
      'Para consultar a higienização do seu tapete, informe as medidas, envie fotos e, se souber, o material. Essas informações ajudam o Fritz a orientar o atendimento.',
    notes: [
      'Orçamento por material e medidas',
      'Envie fotos da superfície e da etiqueta, se disponível',
      'Consulte os cuidados para o seu tipo de tapete',
    ],
    image: rugs,
    alt: 'Cuidado com a superfície de um tapete durante a limpeza.',
  },
  {
    id: 'impermeabilizacao',
    icon: 'shield-droplet',
    title: 'Impermeabilização de estofados',
    introduction: 'Proteção contra líquidos, conforme o tecido.',
    description:
      'A indicação de impermeabilização depende do material do estofado. Antes de agendar, envie fotos e as informações do fabricante, se disponíveis, para consultar a aplicação.',
    notes: [
      'Indicação avaliada conforme o tecido',
      'Informe o material ou envie a etiqueta do fabricante',
      'Siga as orientações de uso e conservação recebidas',
    ],
    image: protection,
    alt: 'Aplicação em sofá durante um serviço de impermeabilização.',
  },
] as const;
