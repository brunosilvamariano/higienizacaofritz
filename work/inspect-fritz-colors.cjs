const fs=require('fs'); const sharp=require('sharp');
(async()=>{const svg=fs.readFileSync('C:/Users/bruno/Downloads/log-fritz.svg','utf8');const m=[...svg.matchAll(/data:image\/png;base64,([^"]+)/g)];const {data,info}=await sharp(Buffer.from(m[1][1],'base64')).toColourspace('srgb').removeAlpha().raw().toBuffer({resolveWithObject:true});
const boxes={gold:[410,60,560,250],mint:[540,100,790,280],whiteparts:[450,200,860,330],green:[470,290,860,450],hose:[320,300,900,570],graybody:[470,470,640,800],lowergreen:[430,770,530,880],dark:[220,860,630,980]};
for(const [name,[x1,y1,x2,y2]] of Object.entries(boxes)){let h={};for(let y=y1;y<=y2;y++)for(let x=x1;x<=x2;x++){let i=(y*info.width+x)*3;let c=[data[i],data[i+1],data[i+2]].join(',');h[c]=(h[c]||0)+1;}console.log(name,Object.entries(h).sort((a,b)=>b[1]-a[1]).slice(0,7));}
})();
