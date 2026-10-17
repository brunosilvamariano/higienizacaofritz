const fs = require('node:fs');
const geo = JSON.parse(fs.readFileSync('work/region-map/sc.geojson', 'utf8'));
const { loadTs } = require('../tests/unit/helpers/load-ts.cjs');
const { serviceAreaNames: names } = loadTs('src/content/service-areas.ts');
const rows = fs
  .readFileSync('work/region-map/municipios.csv', 'utf8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((row) => row.split(','));
const width = 800,
  height = 900;
const rad = Math.PI / 180;
const mercatorY = (latitude) =>
  Math.log(Math.tan(Math.PI / 4 + (latitude * rad) / 2));
const north = -25.96,
  south = -27.13;
const scale = 780 / (mercatorY(north) - mercatorY(south));
const project = ([lon, lat]) => [
  400 + (lon + 48.76) * rad * scale,
  60 + (mercatorY(north) - mercatorY(lat)) * scale,
];
const cities = names.map((name) => {
  const row = rows.find((entry) => entry[1] === name);
  if (!row) throw new Error(`Missing coordinate: ${name}`);
  const [id, , latitude, longitude] = row;
  const [x, y] = project([Number(longitude), Number(latitude)]);
  return {
    id,
    latitude: Number(latitude),
    longitude: Number(longitude),
    x: +x.toFixed(2),
    y: +y.toFixed(2),
  };
});
const paths = geo.features.flatMap((feature) => {
  const polygons =
    feature.geometry.type === 'Polygon'
      ? [feature.geometry.coordinates]
      : feature.geometry.coordinates;
  const projected = polygons.map((rings) =>
    rings.map((ring) => ring.map(project)),
  );
  const points = projected.flat(2);
  if (
    Math.max(...points.map((p) => p[0])) < -60 ||
    Math.min(...points.map((p) => p[0])) > 860 ||
    Math.max(...points.map((p) => p[1])) < -60 ||
    Math.min(...points.map((p) => p[1])) > 960
  )
    return [];
  const d = projected
    .flatMap((rings) =>
      rings.map(
        (ring) =>
          `${ring
            .map(
              ([x, y], index) =>
                `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`,
            )
            .join('')}Z`,
      ),
    )
    .join('');
  return [{ id: feature.properties.codarea, d }];
});
const map = { width, height, cities, paths };
fs.writeFileSync(
  'src/sections/home/service-area/service-area-map.json',
  JSON.stringify(map),
);
console.log({
  municipalities: paths.length,
  cities,
  bytes: JSON.stringify(map).length,
});
