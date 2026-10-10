import { environments } from '@/config/navigation';
import { environmentImages } from './environments.images';

const details = {
  cozinhas: {
    material: 'Carvalho + travertino',
    description:
      'Bancadas que aproximam. Armários que acolhem os utensílios da rotina. Cada escolha desenha um jeito de estar junto.',
  },
  dormitorios: {
    material: 'Madeira + linho',
    description:
      'Volumes discretos, texturas suaves e espaço para guardar. Um ambiente que convida a desacelerar.',
  },
  salas: {
    material: 'Textura + proporção',
    description:
      'Livros, objetos e memórias encontram lugar em uma marcenaria que faz parte da arquitetura.',
  },
  banheiros: {
    material: 'Pedra + carvalho',
    description:
      'Leveza nos volumes e cuidado nos encontros. O essencial ganha espaço entre a bancada e a madeira.',
  },
  'home-office': {
    material: 'Luz + organização',
    description:
      'Uma bancada na medida, o que importa por perto e luz para acompanhar as ideias. Trabalhar também pode fazer parte do morar.',
  },
} as const;
export const environmentCollection = environments.map((item) => ({
  ...item,
  ...details[item.id],
  images: environmentImages[item.id],
}));
export type Environment = (typeof environmentCollection)[number];

export const fritzChoices = [
  {
    id: 'avaliacao',
    title: 'Seu estofado',
    category: 'em primeiro lugar',
    description:
      'Cada estofado tem suas características. Envie fotos e conte o que precisa para consultar a Fritz sobre o serviço indicado para seu estofado.',
    cta: 'Consultar agenda',
    context: 'higienização do meu estofado e enviar fotos para avaliação',
  },
  {
    id: 'cuidado',
    title: 'Cuidado',
    category: 'pela casa toda',
    description:
      'Sofás, colchões, poltronas e tapetes também merecem atenção. Converse com a Fritz sobre os estofados que deseja higienizar e solicite um orçamento.',
    cta: 'Solicitar orçamento',
    context: 'higienização dos estofados da minha casa e solicitar um orçamento',
  },
  {
    id: 'protecao',
    title: 'Higienizar',
    category: 'e proteger',
    description:
      'Além da higienização, você pode consultar a impermeabilização de estofados. Pergunte sobre a indicação para o tecido e os cuidados após a aplicação.',
    cta: 'Consultar proteção',
    context:
      'impermeabilização do meu estofado e saber se o serviço é indicado para o tecido',
  },
  {
    id: 'contato',
    title: 'Seu atendimento',
    category: 'começa aqui',
    description:
      'Fale diretamente com a Fritz pelo WhatsApp. Envie fotos, informe seu bairro e cidade e consulte orçamento e disponibilidade para agendar o serviço.',
    cta: 'Agendar pelo WhatsApp',
    context:
      'agendamento de higienização e consultar a disponibilidade para meu bairro e cidade',
  },
] as const;
