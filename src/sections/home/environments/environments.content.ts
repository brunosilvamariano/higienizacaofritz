import { environments } from '@/config/navigation';
import { environmentImages } from './environments.images';

export const environmentCollection = environments.map((item) => ({
  ...item,
  material: 'Higienização e impermeabilização',
  description: 'Converse com a Fritz sobre o serviço indicado para sua peça.',
  images: environmentImages[item.id],
}));
export type Environment = (typeof environmentCollection)[number];

export const fritzChoices = [
  {
    id: 'avaliacao',
    title: 'Seu estofado',
    category: 'em primeiro lugar',
    description:
      'Orientação sobre o serviço indicado para as características do seu estofado.',
    cta: 'Consultar agenda',
    context: 'higienização do meu estofado e enviar fotos para avaliação',
  },
  {
    id: 'cuidado',
    title: 'Cuidado',
    category: 'pela casa toda',
    description:
      'Combine o cuidado de sofás, colchões, poltronas e tapetes em uma conversa.',
    cta: 'Solicitar orçamento',
    context:
      'higienização dos estofados da minha casa e solicitar um orçamento',
  },
  {
    id: 'protecao',
    title: 'Higienizar',
    category: 'e proteger',
    description:
      'Esclareça a indicação da impermeabilização e os cuidados para conservar o tecido.',
    cta: 'Consultar proteção',
    context:
      'impermeabilização do meu estofado e saber se o serviço é indicado para o tecido',
  },
  {
    id: 'contato',
    title: 'Seu atendimento',
    category: 'começa aqui',
    description:
      'Contato direto pelo WhatsApp para alinhar orçamento, endereço e disponibilidade.',
    cta: 'Agendar pelo WhatsApp',
    context:
      'agendamento de higienização e consultar a disponibilidade para meu bairro e cidade',
  },
] as const;
