export const contact = {
  instagram: 'https://www.instagram.com/higienizacaofritz/',
  whatsappNumber: '5547999051278',
  whatsappDisplay: '+55 47 99905-1278',
} as const;
export function whatsappUrl(context?: string) {
  const message = context
    ? 'Olá! Conheci a Fritz pelo site e gostaria de conversar sobre ' +
      context +
      '.'
    : 'Olá, equipe Fritz! Vim pelo site e gostaria de solicitar um orçamento para higienização ou impermeabilização. Posso enviar fotos do estofado e informar meu bairro e cidade?';
  return (
    'https://wa.me/' +
    contact.whatsappNumber +
    '?text=' +
    encodeURIComponent(message)
  );
}

export function contactFormUrl(data: FormData, intent: 'hello' | 'quote') {
  const value = (key: string) => String(data.get(key) ?? '').trim();
  const fields = [
    ['Nome', value('name')],
    ['E-mail', value('email')],
    ['Telefone', value('phone')],
    ['Empresa', value('company')],
    ...(intent === 'quote'
      ? [
          ['Tipo de projeto', value('project')],
          ['Orçamento', value('budget')],
        ]
      : []),
    ['Mensagem', value('message')],
  ];
  const message = [
    intent === 'quote'
      ? 'Olá! Gostaria de solicitar um orçamento à Fritz.'
      : 'Olá! Gostaria de conversar com a Fritz.',
    '',
    ...fields
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`),
  ].join('\n');
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
