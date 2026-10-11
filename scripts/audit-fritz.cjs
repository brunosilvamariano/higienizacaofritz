const assert = require('node:assert/strict');
const { loadTs } = require('../tests/unit/helpers/load-ts.cjs');
const { routes } = loadTs('src/config/routes.ts');
const { legacyRedirects } = loadTs('src/config/legacy-redirects.ts');
const base = process.argv[2] || 'http://localhost:3901';
const canonicalBase = 'https://higienizacaofritz.vercel.app';
const get = (html, name) =>
  html.match(
    new RegExp(`<meta (?:name|property)="${name}" content="([^"]+)"`),
  )?.[1];
(async () => {
  const images = new Set();
  let pages = 0;
  for (const { path } of routes.filter(
    (r) => !r.path.startsWith('/informacoes/'),
  )) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(
      canonical,
      canonicalBase + (path === '/' ? '' : path),
      path + ' canonical',
    );
    assert.match(
      get(html, 'description'),
      /Fritz|estofad|Higieniza|higieniza|cuidad|Cuidad|peça/,
    );
    assert.equal(get(html, 'og:image:width'), '1200');
    assert.equal(get(html, 'og:image:height'), '630');
    assert.match(
      get(html, 'og:image'),
      /^https:\/\/higienizacaofritz\.vercel\.app\/.*social-share/,
    );
    assert.equal(get(html, 'twitter:card'), 'summary_large_image');
    assert.doesNotMatch(get(html, 'robots') || '', /noindex/);
    const visible = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
      .replace(/<[^>]+>/g, ' ');
    assert.doesNotMatch(
      visible,
      /móveis planejados|marcenaria|carvalho|travertino|estudo conceitual|cozinha planejada|Ariyana/i,
      path,
    );
    for (const match of html.matchAll(/<img\b[^>]*src="([^"]+)"/g))
      images.add(match[1].replaceAll('&amp;', '&'));
    pages++;
  }
  for (const redirect of legacyRedirects) {
    const r = await fetch(base + redirect.source, { redirect: 'manual' });
    assert.equal(r.status, 308, redirect.source);
    assert.equal(
      new URL(r.headers.get('location'), base).pathname,
      redirect.destination,
    );
  }
  const robots = await (await fetch(base + '/robots.txt')).text();
  assert.match(
    robots,
    /Sitemap: https:\/\/higienizacaofritz\.vercel\.app\/sitemap.xml/,
  );
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  assert.doesNotMatch(sitemap, /traco|cozinha|noindex|informacoes/);
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, pages);
  for (const src of images) {
    const r = await fetch(new URL(src, base));
    assert.equal(r.status, 200, src);
  }
  const video = await fetch(base + '/videos/fritz-showreel.mp4', {
    headers: { Range: 'bytes=0-1023' },
  });
  assert.ok([200, 206].includes(video.status));
  assert.match(video.headers.get('content-type'), /video\/mp4/);
  const home = await (await fetch(base)).text();
  const schema = JSON.parse(
    home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  );
  assert.equal(schema.url, canonicalBase);
  assert.equal(schema.areaServed.length, 7);
  console.log(
    JSON.stringify(
      {
        pages,
        redirects: legacyRedirects.length,
        images: images.size,
        video: true,
        metadata: true,
        sitemap: true,
        businessSchema: true,
      },
      null,
      2,
    ),
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
