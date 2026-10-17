const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const { contact, whatsappUrl } = loadTs('src/config/contact.ts');
const text = (url) => new URL(url).searchParams.get('text');

test('link sem contexto usa a mensagem geral', () => {
  const url = whatsappUrl();
  assert.ok(url.startsWith(`https://wa.me/${contact.whatsappNumber}?text=`));
  assert.equal(
    text(url),
    'Olá, equipe Fritz! Vim pelo site e gostaria de solicitar um orçamento para higienização ou impermeabilização. Posso enviar fotos do estofado e informar meu bairro e cidade?',
  );
});

test('contexto entra na mensagem e é codificado na URL', () => {
  const url = whatsappUrl('sofás & cadeiras');
  assert.equal(url.includes(' '), false);
  assert.equal(url.includes('&'), false);
  assert.equal(
    text(url),
    'Olá! Conheci o Fritz pelo site e gostaria de conversar sobre sofás & cadeiras.',
  );
});

test('número do WhatsApp contém apenas dígitos', () => {
  assert.match(contact.whatsappNumber, /^\d{12,13}$/);
});

const { contactFormUrl } = loadTs('src/config/contact.ts');
test('orçamento envia todas as escolhas e preserva acentos e quebras de linha', () => {
  const data = new FormData();
  Object.entries({
    name: ' Ana ',
    email: 'ana@example.com',
    phone: '47999990000',
    company: 'Casa & Lar',
    service: 'Higienização de estofados',
    quantity: '2 a 4 peças',
    message: 'Sofá & cadeiras\nTecido',
  }).forEach(([key, value]) => {
    data.set(key, value);
  });
  const url = new URL(contactFormUrl(data, 'quote'));
  assert.equal(url.pathname, '/5547999051278');
  assert.equal(
    text(url),
    'Olá! Gostaria de solicitar um orçamento ao Fritz.\n\nNome: Ana\nE-mail: ana@example.com\nTelefone: 47999990000\nEmpresa: Casa & Lar\nServiço desejado: Higienização de estofados\nQuantidade de peças: 2 a 4 peças\nMensagem: Sofá & cadeiras\nTecido',
  );
});
test('contato geral omite campos vazios e escolhas exclusivas de orçamento', () => {
  const data = new FormData();
  data.set('name', 'Ana');
  data.set('message', 'Olá');
  data.set('service', 'Higienização de estofados');
  data.set('company', '  ');
  assert.equal(
    text(contactFormUrl(data, 'hello')),
    'Olá! Gostaria de conversar com o Fritz.\n\nNome: Ana\nMensagem: Olá',
  );
});
