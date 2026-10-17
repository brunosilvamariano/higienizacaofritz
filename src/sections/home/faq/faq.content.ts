import { serviceAreaNames } from '@/content/service-areas';

export const faqItems = [
  {
    id: 'orcamento',
    question: 'Como pedir um orçamento?',
    answer:
      'Envie fotos dos estofados e informe o serviço desejado, seu bairro e sua cidade pelo WhatsApp. Assim, a Fritz pode orientar o orçamento e consultar a disponibilidade.',
  },
  {
    id: 'atendimento',
    question: 'Onde a Fritz atende?',
    answer: `${serviceAreaNames.slice(0, -1).join(', ')} e ${serviceAreaNames.at(-1)}. Informe seu bairro para consultar a disponibilidade de atendimento.`,
  },
  {
    id: 'tecido',
    question: 'Qual serviço é indicado para meu estofado?',
    answer:
      'Envie fotos e conte o que deseja limpar ou proteger. Se souber o tipo de tecido, inclua essa informação. A Fritz orienta a escolha entre higienização e impermeabilização.',
  },
  {
    id: 'impermeabilizacao',
    question: 'Posso impermeabilizar meu estofado?',
    answer:
      'A indicação depende do tecido. Envie fotos e as informações do fabricante, se disponíveis, para consultar a aplicação e os cuidados necessários antes de agendar.',
  },
  {
    id: 'cuidados',
    question: 'Quais são os cuidados após o atendimento?',
    answer:
      'Siga as orientações de ventilação, conservação e retorno ao uso fornecidas no atendimento. Se ficar com alguma dúvida, converse com a Fritz antes de utilizar o estofado.',
  },
  {
    id: 'secagem',
    question: 'Quando posso voltar a usar o estofado?',
    answer:
      'Não há um prazo único para todos os tecidos e serviços. Antes de voltar a usar, siga a orientação de secagem recebida no atendimento. Se houver dúvida, confirme pelo WhatsApp.',
  },
] as const;
