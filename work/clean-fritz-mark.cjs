const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const file = path.resolve('src/assets/images/shared/fritz/fritz-mark-original.png');
const out = path.resolve('src/assets/images/shared/fritz/fritz-mark.png');
(async () => {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const bg = [19, 58, 116];
  const index = (x, y) => (y * width + x) * channels;
  const colorDistance = (x, y, color) => {
    const i = index(x, y);
    const dr = data[i] - color[0], dg = data[i + 1] - color[1], db = data[i + 2] - color[2];
    return Math.sqrt(dr * dr + dg * dg + db * db);
  };
  const removed = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0, tail = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const p = y * width + x;
    if (colorDistance(x, y, bg) <= 82 && colorDistance(x, y, [77, 77, 77]) > 28) { removed[p] = 1; tail++; }
  }
  for (let p = 0; p < removed.length; p++) if (removed[p]) data[p * channels + 3] = 0;

  // Recolor only the connected white F. Recompute edge coverage against its original navy backdrop.
  const fMask = new Uint8Array(width * height);
  head = 0; tail = 0;
  const fSeed = 300 + 260 * width;
  fMask[fSeed] = 1; queue[tail++] = fSeed;
  const white = [255, 255, 255];
  while (head < tail) {
    const p = queue[head++], x = p % width, y = (p / width) | 0;
    for (const [nx, ny] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
      if (nx < 245 || nx > 365 || ny < 225 || ny > 415) continue;
      const np = ny * width + nx;
      if (fMask[np]) continue;
      const i = index(nx, ny);
      const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (data[i + 3] && lum >= 110 && colorDistance(nx, ny, white) <= 165) {
        fMask[np] = 1; queue[tail++] = np;
      }
    }
  }
  for (let p = 0; p < fMask.length; p++) if (fMask[p]) {
    const i = p * channels;
    const coverage = [0,1,2].map(c => (data[i+c] - bg[c]) / (255 - bg[c])).reduce((a,b)=>a+b,0) / 3;
    const alpha = Math.max(0, Math.min(1, coverage));
    data[i] = bg[0]; data[i+1] = bg[1]; data[i+2] = bg[2]; data[i+3] = Math.round(alpha * 255);
  }

  // Crop away the old circle's oversized transparent margins, keeping an even border around the full mark.
  const left = 91, top = 67, side = 358;
  const cropped = await sharp(data, { raw: info }).extract({ left, top, width: side, height: side }).png().toBuffer();
  await sharp(cropped).resize(500, 500, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'lanczos3' }).png().toFile(out);
  console.log({ removedBackgroundPixels: tail, cropped: { left, top, side }, output: out });
})();



