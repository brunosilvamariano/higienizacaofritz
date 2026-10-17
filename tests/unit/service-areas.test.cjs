const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { loadTs } = require('./helpers/load-ts.cjs');
const areasModule = loadTs('src/content/service-areas.ts');
const { serviceAreas, serviceAreaNames } = areasModule;

test('cadastro mantém as sete cidades reais, sem IDs repetidos', () => {
  assert.deepEqual(Array.from(serviceAreaNames), [
    'Joinville',
    'Itapoá',
    'São Francisco do Sul',
    'Balneário Barra do Sul',
    'Barra Velha',
    'Balneário Piçarras',
    'Balneário Camboriú',
  ]);
  assert.equal(new Set(serviceAreas.map(({ id }) => id)).size, 7);
});

test('cada cidade possui exatamente um ponto na geometria do mapa', () => {
  const map = JSON.parse(
    readFileSync(
      resolve(
        __dirname,
        '../../src/sections/home/service-area/service-area-map.json',
      ),
      'utf8',
    ),
  );
  assert.deepEqual(
    map.cities.map(({ id }) => id).sort(),
    Array.from(serviceAreas, ({ id }) => id).sort(),
  );
  for (const point of map.cities) {
    assert.ok(point.x >= 0 && point.x <= map.width);
    assert.ok(point.y >= 0 && point.y <= map.height);
  }
});

test('FAQ usa todas as cidades do cadastro compartilhado', () => {
  const { faqItems } = loadTs('src/sections/home/faq/faq.content.ts', {
    modules: { '@/content/service-areas': areasModule },
  });
  const answer = faqItems.find(({ id }) => id === 'atendimento').answer;
  for (const name of serviceAreaNames) assert.ok(answer.includes(name), name);
});
