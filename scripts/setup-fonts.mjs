/** Copia os pesos tipográficos necessários dos pacotes Fontsource para assets/fonts. */
import { access, copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const targetDir = resolve(root, 'assets/fonts');

const fontFiles = [
  { packageName: '@fontsource/inter', file: 'inter-latin-400-normal.woff2' },
  { packageName: '@fontsource/inter', file: 'inter-latin-700-normal.woff2' },
  { packageName: '@fontsource/inter', file: 'inter-latin-800-normal.woff2' },
  { packageName: '@fontsource/lora', file: 'lora-latin-700-italic.woff2' },
];

await mkdir(targetDir, { recursive: true });

for (const { packageName, file } of fontFiles) {
  const source = resolve(root, `node_modules/${packageName}/files/${file}`);
  const target = resolve(targetDir, file);

  try {
    await access(source);
  } catch {
    throw new Error(
      `Fonte não encontrada em ${source}. Execute npm install para instalar as fontes locais do projeto.`
    );
  }

  await copyFile(source, target);
}

console.log('Fontes locais preparadas em assets/fonts/.');
