/** Build estático sem dependências: reúne CSS e preserva módulos na origem. */
import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
if (relative(root, dist) !== 'dist') throw new Error('Destino de build inválido.');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const entry of ['assets', 'robots.txt', 'sitemap.xml']) {
  await cp(resolve(root, entry), resolve(dist, entry), { recursive: true });
}
let html = await readFile(resolve(root, 'index.html'), 'utf8');
const styles = [...html.matchAll(/<link href="(\.\/assets\/css\/[^\"]+)" rel="stylesheet">/g)];
let css = '';
for (const [, href] of styles) {
  const filename = resolve(root, href);
  const source = await readFile(filename, 'utf8');
  css += source.replace(/url\(["']?([^\s"')]+)["']?\)/g, (match, url) => {
    if (/^(?:data:|https?:|\/|#)/.test(url)) return match;
    const rebased = relative(resolve(root, 'assets/css'), resolve(dirname(filename), url)).split(sep).join('/');
    return `url("${rebased}")`;
  }) + '\n';
}
const hash = createHash('sha256').update(css).digest('hex').slice(0, 12);
const cssFile = `assets/css/site.${hash}.css`;
await writeFile(resolve(dist, cssFile), css);
styles.forEach(([tag], index) => {
  html = html.replace(tag, index === 0 ? `<link href="./${cssFile}" rel="stylesheet">` : '');
});
await writeFile(resolve(dist, 'index.html'), html);
console.log(`Build concluído: ${styles.length} folhas de estilo reunidas em ${cssFile}.`);
