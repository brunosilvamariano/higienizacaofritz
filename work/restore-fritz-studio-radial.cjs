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
  const center = [59, 130, 246];
  const edge = [23, 58, 116];
  let recolored = 0;
  for (let y = 520; y <= 1030; y++) for (let x = 620; x <= 960; x++) {
    const i = (y * info.width + x) * info.channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (Math.min(r, g, b) < 45 || Math.max(r, g, b) - Math.min(r, g, b) > 8) continue;
    const radius = Math.min(1, Math.hypot((x - 790) / 215, (y - 700) / 325));
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(center[c] * (1 - radius) + edge[c] * radius);
    recolored++;
  }
  const changedImage = await sharp(data, { raw: info }).png().toBuffer();
  const second = matches[1];
  svg = svg.slice(0, second.index) + `data:image/png;base64,${changedImage.toString('base64')}` + svg.slice(second.index + second[0].length);
  fs.writeFileSync(outputPath, svg);
  await sharp(Buffer.from(svg)).resize(500, 500, { fit: 'contain' }).flatten({ background: '#f8fafc' }).png().toFile('C:/Users/bruno/Documents/Codex/2026-10-10/bo/work/fritz-studio-radial-preview.png');
  console.log({ outputPath, recoloredPixels: recolored });
})();
