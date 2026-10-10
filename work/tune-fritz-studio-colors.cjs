const fs = require('fs');
const sharp = require('sharp');
(async () => {
  const sourcePath = 'C:/Users/bruno/Downloads/log-fritz.svg';
  const outputPath = 'src/assets/images/shared/fritz/fritz-studio.svg';
  let svg = fs.readFileSync(sourcePath, 'utf8');
  const matches = [...svg.matchAll(/data:image\/png;base64,([^"]+)/g)];
  if (matches.length !== 2) throw new Error(`Expected two embedded PNGs; got ${matches.length}`);
  const { data, info } = await sharp(Buffer.from(matches[1][1], 'base64')).toColourspace('srgb').removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const center = [59, 130, 246], edge = [23, 58, 116];
  let recoloredF = 0, recoloredDetails = 0;
  const colorAt = (x, y) => { const i = (y * info.width + x) * info.channels; return [data[i], data[i + 1], data[i + 2], i]; };
  // Preserve the original F silhouette while giving it a radial blue fill.
  for (let y = 520; y <= 1030; y++) for (let x = 620; x <= 960; x++) {
    const [r, g, b, i] = colorAt(x, y);
    if (Math.min(r, g, b) < 45 || Math.max(r, g, b) - Math.min(r, g, b) > 8) continue;
    const radius = Math.min(1, Math.hypot((x - 790) / 215, (y - 700) / 325));
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(center[c] * (1 - radius) + edge[c] * radius);
    recoloredF++;
  }
  // Harmonized palette for the original illustration: sage, mist blue, slate, and warm sand.
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
    const [r, g, b, i] = colorAt(x, y);
    if (r === g && g === b && r >= 170 && r <= 215) {
      data[i] = 184; data[i + 1] = 196; data[i + 2] = 211; recoloredDetails++;
    } else if (r === g && g === b && r >= 65 && r <= 100) {
      data[i] = 51; data[i + 1] = 65; data[i + 2] = 85; recoloredDetails++;
    } else if (r >= 140 && r <= 185 && g >= 180 && g <= 225 && b >= 140 && b <= 190 && g > r + 12) {
      data[i] = 175; data[i + 1] = 199; data[i + 2] = 229; recoloredDetails++;
    } else if (r >= 90 && r <= 135 && g >= 155 && g <= 205 && b >= 55 && b <= 120 && g > r + 30) {
      data[i] = 96; data[i + 1] = 164; data[i + 2] = 117; recoloredDetails++;
    } else if (r >= 195 && g >= 150 && g <= 220 && b >= 100 && b <= 165 && r > g && g > b) {
      data[i] = 211; data[i + 1] = 169; data[i + 2] = 95; recoloredDetails++;
    }
  }
  const changedImage = await sharp(data, { raw: info }).png().toBuffer();
  const second = matches[1];
  svg = svg.slice(0, second.index) + `data:image/png;base64,${changedImage.toString('base64')}` + svg.slice(second.index + second[0].length);
  fs.writeFileSync(outputPath, svg);
  await sharp(Buffer.from(svg)).resize(500, 500, { fit: 'contain' }).flatten({ background: '#f8fafc' }).png().toFile('C:/Users/bruno/Documents/Codex/2026-10-10/bo/work/fritz-studio-colors-preview.png');
  console.log({ outputPath, recoloredF, recoloredDetails });
})();
