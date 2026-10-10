const fs = require('fs');
const sharp = require('sharp');
(async () => {
  const sourcePath = 'C:/Users/bruno/Downloads/log-fritz.svg';
  const outputPath = 'src/assets/images/shared/fritz/fritz-studio.svg';
  let svg = fs.readFileSync(sourcePath, 'utf8');
  const matches = [...svg.matchAll(/data:image\/png;base64,([^"]+)/g)];
  if (matches.length !== 2) throw new Error(`Expected two embedded PNGs; got ${matches.length}`);
  const imageBuffer = Buffer.from(matches[1][1], 'base64');
  const { data, info } = await sharp(imageBuffer).toColourspace('srgb').removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const blue = [23, 58, 116];
  let recolored = 0;
  for (let y = 520; y <= 1030; y++) for (let x = 620; x <= 960; x++) {
    const i = (y * info.width + x) * info.channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (Math.min(r, g, b) >= 45 && Math.max(r, g, b) - Math.min(r, g, b) <= 8) {
      data[i] = blue[0]; data[i + 1] = blue[1]; data[i + 2] = blue[2]; recolored++;
    }
  }
  const changedImage = await sharp(data, { raw: info }).png().toBuffer();
  const replacement = `data:image/png;base64,${changedImage.toString('base64')}`;
  const second = matches[1];
  svg = svg.slice(0, second.index) + replacement + svg.slice(second.index + second[0].length);
  fs.writeFileSync(outputPath, svg);
  console.log({ outputPath, recoloredPixels: recolored });
  await sharp(Buffer.from(svg)).png().toFile('C:/Users/bruno/Documents/Codex/2026-10-10/bo/work/fritz-studio-preview.png');
})();


