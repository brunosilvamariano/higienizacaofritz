import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const errors=[], warnings=[];
const count=(re)=>(html.match(re)||[]).length;
const assertFile=(file, label=file)=>{
  if(!fs.existsSync(path.join(root,file))) errors.push(`Arquivo obrigatório ausente: ${label}`);
};

if(count(/<main\b/gi)!==1) errors.push("O documento deve conter exatamente um <main>.");
if(count(/<h1\b/gi)!==1) errors.push("O documento deve conter exatamente um <h1>.");
if(!/<html[^>]+lang="pt-BR"/i.test(html)) warnings.push('Confirme lang="pt-BR".');
if(!/<meta[^>]+name="description"/i.test(html)) errors.push("Meta description ausente.");
if(!/<meta[^>]+name="viewport"/i.test(html)) errors.push("Viewport ausente.");
if(!/class="skip-link"/i.test(html)) warnings.push("Skip link ausente.");
if(!/<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="https:\/\/www\.higienizacaofritz\.com\.br\/?")[^>]*>/i.test(html)) errors.push("Canonical absoluto ausente ou incorreto.");
if(!/<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="https:\/\/)[^>]*>/i.test(html)) errors.push("Open Graph image absoluta ausente.");
if(!/<meta(?=[^>]*\bname="twitter:card")(?=[^>]*\bcontent="summary_large_image")[^>]*>/i.test(html)) warnings.push("Twitter card de imagem ampla ausente.");
assertFile('robots.txt');
assertFile('sitemap.xml');
assertFile('assets/favicon/site.webmanifest');

const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const dup=ids.filter((x,i)=>ids.indexOf(x)!==i);
if(dup.length) errors.push("IDs duplicados: "+[...new Set(dup)].join(", "));

const anchors=[...html.matchAll(/<a\b[^>]*\bhref="#([^"]+)"/gi)].map(m=>m[1]);
for(const anchor of anchors){
  if(!ids.includes(anchor)) errors.push(`Âncora sem destino: #${anchor}`);
}

for(const m of html.matchAll(/<(?:img|source)\b[^>]+(?:src|srcset)="([^"]+)"/gi)){
  const u=m[1].split(/\s+/)[0];
  if(u.startsWith("./")){
    const p=path.join(root,u.slice(2));
    if(!fs.existsSync(p)) errors.push("Asset ausente: "+u);
  }
}
for(const m of html.matchAll(/<link\b[^>]+href="([^"]+)"/gi)){
  const u=m[1].split(/[?#]/,1)[0];
  if(u.startsWith("./")&&!fs.existsSync(path.join(root,u.slice(2)))) errors.push("Link local ausente: "+u);
}
for(const m of html.matchAll(/<script\b[^>]+src="([^"]+)"/gi)){
  const u=m[1];
  if(u.startsWith("./")&&!fs.existsSync(path.join(root,u.slice(2)))) errors.push("Script local ausente: "+u);
}
for(const m of html.matchAll(/<img\b([^>]*)>/gi)){
  if(!/\balt="/i.test(m[1])) errors.push("Imagem sem alt: "+m[0].slice(0,100));
}
const schemaMatch=html.match(/<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/i);
if(!schemaMatch) {
  errors.push("Schema LocalBusiness ausente.");
} else {
  try {
    const schema=JSON.parse(schemaMatch[1]);
    if(!schema.name || !schema.telephone || !schema.address || !schema.areaServed) errors.push("Schema LocalBusiness incompleto.");
    const areas=Array.isArray(schema.areaServed) ? schema.areaServed.map((area)=>area.name) : [schema.areaServed?.name];
    const requiredAreas=['Joinville','Itapoá','São Francisco do Sul','Balneário Camboriú','Balneário Piçarras','Balneário Barra do Sul','Barra Velha'];
    const missing=requiredAreas.filter((area)=>!areas.includes(area));
    if(missing.length) errors.push("Cidades ausentes no Schema: "+missing.join(", "));
  } catch {
    errors.push("Schema JSON-LD inválido.");
  }
}

if(/G-[A-Z0-9]{6,}|AW-\d+|fbq\(['"]init['"]\s*,\s*['"]\d+/i.test(html)) {
  warnings.push("Tag de mensuração detectada: confirme consentimento e IDs antes da publicação.");
}
console.log(`Auditoria: ${errors.length} erro(s), ${warnings.length} aviso(s).`);
warnings.forEach(x=>console.log("AVISO:",x));
errors.forEach(x=>console.error("ERRO:",x));
process.exitCode=errors.length?1:0;
