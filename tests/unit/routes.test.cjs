const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');
const { legacyRedirects } = loadTs('src/config/legacy-redirects.ts');
const { routes } = loadTs('src/config/routes.ts');
test('redirecionamentos antigos apontam para páginas existentes do Fritz', () => {
  const paths = new Set(routes.map((r) => r.path));
  const expectedSources = [
    '/sobre',
    '/servicos',
    '/projetos/:path*',
    '/contato',
    '/blog/:path*',
    '/informacoes/:path*',
  ];
  assert.deepEqual(
    Array.from(legacyRedirects, (r) => r.source),
    expectedSources,
  );
  for (const redirect of legacyRedirects) {
    const destination = new URL(
      redirect.destination,
      'https://higienizacaofritz.com.br',
    );
    assert.ok(paths.has(destination.pathname));
    assert.equal(redirect.permanent, true);
    assert.notEqual(redirect.source, redirect.destination);
  }
});
test('rotas canônicas não mantêm o nicho antigo e não se repetem', () => {
  assert.equal(new Set(routes.map((r) => r.path)).size, routes.length);
  for (const r of routes)
    assert.doesNotMatch(
      r.path,
      /cozinha|quarto|banheiro|office|fwa|holographik/,
    );
});
