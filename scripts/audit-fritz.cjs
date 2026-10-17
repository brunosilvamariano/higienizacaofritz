const assert = require('node:assert/strict');
const { loadTs } = require('../tests/unit/helpers/load-ts.cjs');
const { routes } = loadTs('src/config/routes.ts');
const { legacyRedirects } = loadTs('src/config/legacy-redirects.ts');
const base = process.argv[2] || 'http://localhost:3901';
const { site } = loadTs('src/config/site.ts', { globals: { process } });
const { serviceAreaNames } = loadTs('src/content/service-areas.ts');
const { servicesContent } = loadTs(
  'src/sections/home/services/services.content.ts',
);
const canonicalBase = site.url;
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
      `${path} canonical`,
    );
    assert.match(
      get(html, 'description'),
      /Fritz|estofad|Higieniza|higieniza|cuidad|Cuidad|peça/,
    );
    assert.equal(get(html, 'og:image:width'), '1200');
    assert.equal(get(html, 'og:image:height'), '630');
    assert.equal(new URL(get(html, 'og:image')).origin, canonicalBase);
    assert.match(get(html, 'og:image'), /social-share/);
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
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      assert.match(match[0], /\balt="[^"]*"/, 'imagem sem alt');
      images.add(match[0].match(/\bsrc="([^"]+)"/)[1].replaceAll('&amp;', '&'));
    }
    const ids = new Set(
      Array.from(html.matchAll(/\bid="([^"]+)"/g), (m) => m[1]),
    );
    for (const redirect of legacyRedirects) {
      const target = new URL(redirect.destination, base);
      if (target.hash) assert.ok(ids.has(target.hash.slice(1)), target.hash);
    }
    pages++;
  }
  for (const redirect of legacyRedirects) {
    const source = redirect.source.replace('/:path*', '/auditoria-fritz');
    const r = await fetch(new URL(source, base), { redirect: 'manual' });
    assert.equal(r.status, 308, redirect.source);
    assert.equal(
      new URL(r.headers.get('location'), base).href,
      new URL(redirect.destination, base).href,
    );
  }
  const robots = await (await fetch(`${base}/robots.txt`)).text();
  assert.ok(robots.includes(`Sitemap: ${canonicalBase}/sitemap.xml`));
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  assert.doesNotMatch(sitemap, /traco|cozinha|noindex|informacoes/);
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, pages);
  for (const src of images) {
    const r = await fetch(new URL(src, base));
    assert.equal(r.status, 200, src);
  }
  for (const { id } of servicesContent.items) {
    const video = await fetch(`${base}/videos/services/${id}.mp4`, {
      headers: { Range: 'bytes=0-1023' },
    });
    assert.ok([200, 206].includes(video.status));
    assert.match(video.headers.get('content-type'), /video\/mp4/);
    await video.body.cancel();
  }
  const home = await (await fetch(base)).text();
  const schema = JSON.parse(
    home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  );
  assert.equal(schema.url, canonicalBase);
  assert.equal(schema.areaServed.length, serviceAreaNames.length);
  assert.deepEqual(
    schema.areaServed.map((a) => a.name).sort(),
    Array.from(serviceAreaNames).sort(),
  );
  assert.equal(new URL(schema.logo).origin, canonicalBase);
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
