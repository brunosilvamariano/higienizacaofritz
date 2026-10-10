const fs=require('fs'); const sharp=require('sharp');
(async()=>{
const svg=fs.readFileSync('C:/Users/bruno/Downloads/log-fritz.svg','utf8');
const matches=[...svg.matchAll(/<image\b([^>]*?)xlink:href="data:image\/png;base64,([^"]+)"([^>]*)\/?>(?:<\/image>)?/g)];
console.log('image matches',matches.length);
for(let n=0;n<matches.length;n++){
const b=Buffer.from(matches[n][2],'base64'); const meta=await sharp(b).metadata();
console.log(n,meta);
await sharp(b).png().toFile(`C:/Users/bruno/Documents/Codex/2026-10-10/bo/work/fritz-embedded-${n}.png`);
}
console.log(svg.replace(/data:image\/png;base64,[^"]+/g,'data:image/png;base64,[embedded image]').slice(0,7000));
})();
