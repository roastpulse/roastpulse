import { useState } from "react";
import { Coffee, Search, MapPin, TrendingUp, ArrowLeft, Clock, Navigation, Camera, Share2, Bell, Crown, X, Heart, Award, Leaf, Droplets, Zap, User, Check } from "lucide-react";

const UNSPLASH = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
  "https://images.unsplash.com/photo-1572286258217-215cf8e2c277?w=800&q=80",
];

const img = (i) => UNSPLASH[i % UNSPLASH.length];

const SHOPS_RAW = [
  { id:1, city:"Manhattan", name:"Devoción Flatiron", neighborhood:"Flatiron", address:"25 E 20th St, New York, NY", googleScore:4.7, hours:"Mon–Fri 7am–7pm, Sat–Sun 8am–7pm", tags:["#SingleOrigin","#CozyVibe"], img:0, scores:{beanPedigree:5.0,extractionMastery:4.8,vibeGauge:4.6,milkCraft:4.5,ethicalSip:4.9}, reviews:[{author:"Sofia R.",date:"May 2026",text:"Field-to-cup within 10 days of harvest. The plant wall is iconic and the coffee is extraordinary.",rating:4.9}] },
  { id:2, city:"Manhattan", name:"Abraço Espresso", neighborhood:"East Village", address:"81 E 7th St, New York, NY", googleScore:4.6, hours:"Tue–Sun 8am–4pm", tags:["#SingleOrigin","#CozyVibe"], img:1, scores:{beanPedigree:4.9,extractionMastery:5.0,vibeGauge:4.3,milkCraft:4.6,ethicalSip:4.7}, reviews:[{author:"James L.",date:"Apr 2026",text:"The espresso has ripe strawberry notes that cut through milk like no other. True East Village institution.",rating:5.0}] },
  { id:3, city:"Manhattan", name:"Gasoline Alley Coffee", neighborhood:"NoHo", address:"325 Lafayette St, New York, NY", googleScore:4.6, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#RemoteFriendly","#CozyVibe"], img:2, scores:{beanPedigree:4.6,extractionMastery:4.7,vibeGauge:4.8,milkCraft:4.6,ethicalSip:4.4}, reviews:[{author:"Priya K.",date:"May 2026",text:"Tucked down an alley with serious neighborhood energy. Flat white perfectly textured every time.",rating:4.7}] },
  { id:4, city:"Manhattan", name:"La Cabra", neighborhood:"East Village", address:"252 E 3rd St, New York, NY", googleScore:4.5, hours:"Daily 8am–6pm", tags:["#SingleOrigin","#OatMilkMastery"], img:3, scores:{beanPedigree:4.8,extractionMastery:4.7,vibeGauge:4.5,milkCraft:4.8,ethicalSip:4.6}, reviews:[{author:"Maya T.",date:"May 2026",text:"Nordic light roasts done right. Cardamom bun + cortado is the best combo in NYC.",rating:4.8}] },
  { id:5, city:"Manhattan", name:"Café Integral", neighborhood:"Nolita", address:"149 Elizabeth St, New York, NY", googleScore:4.6, hours:"Mon–Fri 8am–5pm, Sat–Sun 9am–5pm", tags:["#SingleOrigin","#CozyVibe"], img:4, scores:{beanPedigree:4.9,extractionMastery:4.8,vibeGauge:4.4,milkCraft:4.3,ethicalSip:4.9}, reviews:[{author:"Carlos M.",date:"Apr 2026",text:"Nicaraguan single-origin done right. Japanese slow-drip alone is worth the trip to Nolita.",rating:4.9}] },
  { id:6, city:"Manhattan", name:"Ninth Street Espresso", neighborhood:"Alphabet City", address:"341 E 10th St, New York, NY", googleScore:4.5, hours:"Daily 7:30am–7pm", tags:["#CozyVibe","#RemoteFriendly"], img:5, scores:{beanPedigree:4.5,extractionMastery:4.8,vibeGauge:4.6,milkCraft:4.7,ethicalSip:4.4}, reviews:[{author:"Anna B.",date:"Mar 2026",text:"Old-school NYC coffee shop energy with next-level espresso. Getting it right for 20 years.",rating:4.6}] },
  { id:7, city:"Manhattan", name:"Hi-Collar", neighborhood:"East Village", address:"119 St Marks Pl, New York, NY", googleScore:4.6, hours:"Daily 12pm–10pm", tags:["#CozyVibe","#SingleOrigin"], img:6, scores:{beanPedigree:4.8,extractionMastery:5.0,vibeGauge:4.9,milkCraft:4.4,ethicalSip:4.5}, reviews:[{author:"Yuki N.",date:"Apr 2026",text:"A Japanese kissaten in the East Village — siphon coffee brewed like a ceremony. Utterly unique.",rating:5.0}] },
  { id:8, city:"Manhattan", name:"Felix Roasting Co.", neighborhood:"Gramercy", address:"450 Park Ave S, New York, NY", googleScore:4.6, hours:"Mon–Fri 7am–8pm, Sat–Sun 8am–8pm", tags:["#CozyVibe","#OatMilkMastery"], img:7, scores:{beanPedigree:4.5,extractionMastery:4.6,vibeGauge:4.9,milkCraft:4.8,ethicalSip:4.5}, reviews:[{author:"Dana M.",date:"May 2026",text:"Drop-dead gorgeous space and the oat milk cortado is silky perfection. Ideal for a long afternoon.",rating:4.8}] },
  { id:9, city:"Manhattan", name:"Ground Support Cafe", neighborhood:"SoHo", address:"399 W Broadway, New York, NY", googleScore:4.5, hours:"Mon–Fri 7am–7pm, Sat–Sun 8am–7pm", tags:["#RemoteFriendly","#CozyVibe"], img:8, scores:{beanPedigree:4.4,extractionMastery:4.5,vibeGauge:4.8,milkCraft:4.6,ethicalSip:4.4}, reviews:[{author:"Lily C.",date:"May 2026",text:"Best people-watching in SoHo with genuinely excellent coffee. Always full but never crowded feeling.",rating:4.6}] },
  { id:10, city:"Manhattan", name:"Everyman Espresso", neighborhood:"SoHo", address:"301 W Broadway, New York, NY", googleScore:4.5, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#RemoteFriendly","#SingleOrigin"], img:9, scores:{beanPedigree:4.6,extractionMastery:4.7,vibeGauge:4.5,milkCraft:4.6,ethicalSip:4.5}, reviews:[{author:"Ben H.",date:"May 2026",text:"No pretension, all quality. Perfect for focused work with a great cup in hand.",rating:4.6}] },
  { id:11, city:"Brooklyn", name:"Sey Coffee", neighborhood:"Bushwick", address:"18 Grattan St, Brooklyn, NY", googleScore:4.6, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#SingleOrigin","#RemoteFriendly"], img:10, scores:{beanPedigree:5.0,extractionMastery:4.9,vibeGauge:4.4,milkCraft:4.5,ethicalSip:4.9}, reviews:[{author:"Dev R.",date:"May 2026",text:"Ultra-light single-source roasts in an airy warehouse with a skylight. Where serious coffee people go.",rating:4.9}] },
  { id:12, city:"Brooklyn", name:"Devoción Williamsburg", neighborhood:"Williamsburg", address:"69 Grand St, Brooklyn, NY", googleScore:4.7, hours:"Daily 7am–7pm", tags:["#SingleOrigin","#CozyVibe"], img:0, scores:{beanPedigree:5.0,extractionMastery:4.8,vibeGauge:4.7,milkCraft:4.5,ethicalSip:5.0}, reviews:[{author:"Rachel W.",date:"Apr 2026",text:"The original flagship with the famous plant wall and on-site roaster. Nowhere else like this in Brooklyn.",rating:5.0}] },
  { id:13, city:"Brooklyn", name:"Brooklyn Roasting Co.", neighborhood:"DUMBO", address:"25 Jay St, Brooklyn, NY", googleScore:4.5, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#RemoteFriendly","#EthicalSip"], img:11, scores:{beanPedigree:4.6,extractionMastery:4.5,vibeGauge:4.7,milkCraft:4.4,ethicalSip:4.8}, reviews:[{author:"Sam J.",date:"Mar 2026",text:"Right in DUMBO with bridge views. They roast on-site and the cold brew is always on point.",rating:4.6}] },
  { id:14, city:"Brooklyn", name:"Gorilla Coffee", neighborhood:"Park Slope", address:"97 5th Ave, Brooklyn, NY", googleScore:4.5, hours:"Daily 7am–7pm", tags:["#CozyVibe","#SingleOrigin"], img:1, scores:{beanPedigree:4.7,extractionMastery:4.6,vibeGauge:4.8,milkCraft:4.5,ethicalSip:4.6}, reviews:[{author:"Nina V.",date:"Apr 2026",text:"Park Slope's crown jewel. Serious single-origin program with neighborhood warmth you can't manufacture.",rating:4.7}] },
  { id:15, city:"Brooklyn", name:"Café Grumpy Greenpoint", neighborhood:"Greenpoint", address:"193 Meserole Ave, Brooklyn, NY", googleScore:4.5, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#RemoteFriendly","#CozyVibe"], img:2, scores:{beanPedigree:4.5,extractionMastery:4.6,vibeGauge:4.7,milkCraft:4.5,ethicalSip:4.5}, reviews:[{author:"Tom K.",date:"May 2026",text:"The OG Brooklyn specialty shop. Greenpoint location is quieter and perfect for deep work.",rating:4.6}] },
  { id:16, city:"Brooklyn", name:"East One Coffee Roasters", neighborhood:"Crown Heights", address:"340 Rogers Ave, Brooklyn, NY", googleScore:4.6, hours:"Daily 7am–6pm", tags:["#SingleOrigin","#EthicalSip"], img:3, scores:{beanPedigree:4.7,extractionMastery:4.6,vibeGauge:4.6,milkCraft:4.5,ethicalSip:4.9}, reviews:[{author:"Zara T.",date:"May 2026",text:"Community-focused roaster doing everything right ethically. The pour-overs are delicate and complex.",rating:4.7}] },
  { id:17, city:"Brooklyn", name:"Hungry Ghost Fort Greene", neighborhood:"Fort Greene", address:"781 Fulton St, Brooklyn, NY", googleScore:4.5, hours:"Daily 7am–6pm", tags:["#CozyVibe","#OatMilkMastery"], img:4, scores:{beanPedigree:4.4,extractionMastery:4.6,vibeGauge:4.8,milkCraft:4.7,ethicalSip:4.4}, reviews:[{author:"Chris A.",date:"Apr 2026",text:"Fort Greene's best-kept secret. Friendly staff, sunlit windows, and a perfect oat cap.",rating:4.6}] },
  { id:18, city:"Queens", name:"Coffee Project NY", neighborhood:"Astoria", address:"25-58 Steinway St, Astoria, NY", googleScore:4.6, hours:"Mon–Fri 8am–6pm, Sat–Sun 9am–6pm", tags:["#SingleOrigin","#CozyVibe"], img:5, scores:{beanPedigree:4.7,extractionMastery:4.8,vibeGauge:4.5,milkCraft:4.7,ethicalSip:4.6}, reviews:[{author:"Maria F.",date:"May 2026",text:"The deconstructed latte is worth the trip alone. Beautifully educational and delicious coffee program.",rating:4.8}] },
  { id:19, city:"Queens", name:"Sweetleaf LIC", neighborhood:"Long Island City", address:"10-93 Jackson Ave, Long Island City, NY", googleScore:4.5, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–6pm", tags:["#RemoteFriendly","#SingleOrigin"], img:6, scores:{beanPedigree:4.5,extractionMastery:4.5,vibeGauge:4.6,milkCraft:4.5,ethicalSip:4.5}, reviews:[{author:"Paul D.",date:"Apr 2026",text:"The LIC spot is spacious and perfect before a day in Manhattan. Easy commute too.",rating:4.5}] },
  { id:20, city:"Queens", name:"Communitea Café", neighborhood:"Jackson Heights", address:"75-01 37th Ave, Jackson Heights, NY", googleScore:4.6, hours:"Daily 8am–7pm", tags:["#CozyVibe","#EthicalSip"], img:7, scores:{beanPedigree:4.4,extractionMastery:4.5,vibeGauge:4.9,milkCraft:4.6,ethicalSip:4.8}, reviews:[{author:"Anita P.",date:"May 2026",text:"Jackson Heights' living room. Incredible community vibe and the chai latte is unlike anything in the city.",rating:4.7}] },
  { id:21, city:"Hoboken / JC", name:"Modcup Coffee Co.", neighborhood:"Jersey City Harborside", address:"99 Hudson St, Jersey City, NJ", googleScore:4.7, hours:"Mon–Fri 7am–6pm, Sat–Sun 8am–5pm", tags:["#SingleOrigin","#EthicalSip"], img:8, scores:{beanPedigree:4.9,extractionMastery:4.9,vibeGauge:4.5,milkCraft:4.6,ethicalSip:5.0}, reviews:[{author:"Leo G.",date:"May 2026",text:"Micro-lot beans, nitro cold brew, in-house roasting — all in Jersey City. Better than most of Manhattan.",rating:4.9}] },
  { id:22, city:"Hoboken / JC", name:"Hidden Grounds", neighborhood:"Hoboken", address:"79 Hudson St, Hoboken, NJ", googleScore:4.6, hours:"Daily 7am–7pm", tags:["#CozyVibe","#OatMilkMastery"], img:9, scores:{beanPedigree:4.5,extractionMastery:4.6,vibeGauge:4.7,milkCraft:4.8,ethicalSip:4.7}, reviews:[{author:"Rina M.",date:"Apr 2026",text:"The masala chai and rose cold brew are both incredible. Indian-fusion coffee with real care.",rating:4.7}] },
  { id:23, city:"Hoboken / JC", name:"Dames Coffee Espresso Bar", neighborhood:"Jersey City", address:"283 Jersey Ave, Jersey City, NJ", googleScore:4.6, hours:"Mon–Fri 7:30am–5pm, Sat–Sun 8am–5pm", tags:["#CozyVibe","#RemoteFriendly"], img:10, scores:{beanPedigree:4.4,extractionMastery:4.6,vibeGauge:4.9,milkCraft:4.6,ethicalSip:4.5}, reviews:[{author:"Claire B.",date:"May 2026",text:"Mismatched chairs, art on the walls, honey lavender latte — best vibe in all of JC.",rating:4.7}] },
  { id:24, city:"Hoboken / JC", name:"Café Esme", neighborhood:"Jersey City", address:"218 Newark Ave, Jersey City, NJ", googleScore:4.5, hours:"Daily 8am–7pm", tags:["#RemoteFriendly","#CozyVibe"], img:11, scores:{beanPedigree:4.3,extractionMastery:4.5,vibeGauge:4.8,milkCraft:4.6,ethicalSip:4.4}, reviews:[{author:"Sam F.",date:"Apr 2026",text:"Scandinavian interiors, great flat white, and a granola bowl that makes mornings worth it.",rating:4.5}] },
  { id:25, city:"North NJ", name:"Ralph's Coffee Montclair", neighborhood:"Montclair", address:"10 Lackawanna Plaza, Montclair, NJ", googleScore:4.6, hours:"Daily 7am–8pm", tags:["#CozyVibe","#OatMilkMastery"], img:0, scores:{beanPedigree:4.6,extractionMastery:4.5,vibeGauge:4.9,milkCraft:4.7,ethicalSip:4.3}, reviews:[{author:"Elise H.",date:"May 2026",text:"Ralph Lauren's café is not just hype — it's genuinely excellent. Vintage aesthetic and a distinct roast.",rating:4.7}] },
  { id:26, city:"North NJ", name:"Boho Cafe", neighborhood:"Montclair", address:"194 Claremont Ave, Montclair, NJ", googleScore:4.6, hours:"Daily 8am–6pm", tags:["#CozyVibe","#EthicalSip"], img:1, scores:{beanPedigree:4.5,extractionMastery:4.4,vibeGauge:4.9,milkCraft:4.6,ethicalSip:4.7}, reviews:[{author:"Jake N.",date:"Apr 2026",text:"Canyon Coffee beans, plant-filled, light-drenched. Ideal for creative work and long mornings.",rating:4.6}] },
  { id:27, city:"North NJ", name:"SmartWorld Coffee", neighborhood:"Morristown", address:"43 South St, Morristown, NJ", googleScore:4.5, hours:"Mon–Fri 7am–6pm, Sat 8am–5pm", tags:["#SingleOrigin","#EthicalSip"], img:2, scores:{beanPedigree:4.6,extractionMastery:4.5,vibeGauge:4.6,milkCraft:4.4,ethicalSip:4.9}, reviews:[{author:"Kim L.",date:"May 2026",text:"Sustainably harvested, locally sourced, and the espresso flight is a fantastic tasting experience.",rating:4.6}] },
  { id:28, city:"North NJ", name:"Greene's Beans", neighborhood:"Sparta", address:"3 Main St, Sparta, NJ", googleScore:4.7, hours:"Mon–Sat 7am–6pm, Sun 8am–5pm", tags:["#SingleOrigin","#EthicalSip"], img:3, scores:{beanPedigree:4.8,extractionMastery:4.6,vibeGauge:4.7,milkCraft:4.4,ethicalSip:4.9}, reviews:[{author:"Tom R.",date:"Apr 2026",text:"A specialty roaster in suburban NJ that would embarrass half of Brooklyn. Single-origin Arabica with precision.",rating:4.8}] },
  { id:29, city:"Central NJ", name:"Ambee Coffee", neighborhood:"New Brunswick", address:"112 Easton Ave, New Brunswick, NJ", googleScore:4.6, hours:"Daily 7am–7pm", tags:["#EthicalSip","#OatMilkMastery"], img:4, scores:{beanPedigree:4.5,extractionMastery:4.5,vibeGauge:4.7,milkCraft:5.0,ethicalSip:4.9}, reviews:[{author:"Fiona K.",date:"May 2026",text:"NJ's only shop with house-made alt milk — no gums, no fillers. Cold brew on tap is always perfect.",rating:4.8}] },
  { id:30, city:"Central NJ", name:"Track 5 Coffee", neighborhood:"Cranford", address:"22 North Ave E, Cranford, NJ", googleScore:4.6, hours:"Daily 7am–7pm", tags:["#CozyVibe","#RemoteFriendly"], img:5, scores:{beanPedigree:4.4,extractionMastery:4.5,vibeGauge:4.8,milkCraft:4.5,ethicalSip:4.4}, reviews:[{author:"Dan W.",date:"Apr 2026",text:"Neighborhood gem with real community energy. The Iced S'mores Latte is a guilty pleasure.",rating:4.5}] },
  { id:31, city:"Central NJ", name:"Offshore Coffee Co.", neighborhood:"Long Branch", address:"92 Brighton Ave, Long Branch, NJ", googleScore:4.7, hours:"Daily 7am–6pm", tags:["#CozyVibe","#SingleOrigin"], img:6, scores:{beanPedigree:4.6,extractionMastery:4.7,vibeGauge:4.9,milkCraft:4.6,ethicalSip:4.6}, reviews:[{author:"Sara L.",date:"May 2026",text:"Beach town coffee shop that actually knows what it's doing. Specialty lattes are creative and delicious.",rating:4.7}] },
  { id:32, city:"Central NJ", name:"King's Gambit Micro-Roastery", neighborhood:"Belvidere", address:"375 Water St, Belvidere, NJ", googleScore:4.6, hours:"Wed–Sun 8am–5pm", tags:["#SingleOrigin","#EthicalSip"], img:7, scores:{beanPedigree:4.9,extractionMastery:4.7,vibeGauge:4.5,milkCraft:4.3,ethicalSip:4.8}, reviews:[{author:"Paul N.",date:"Mar 2026",text:"Family-owned micro-roastery using 100% Arabica. Worth the drive — ships nationwide too.",rating:4.7}] },
];

const CITIES = ["All","Manhattan","Brooklyn","Queens","Hoboken / JC","North NJ","Central NJ"];
const ALL_TAGS = ["#SingleOrigin","#RemoteFriendly","#OatMilkMastery","#CozyVibe","#EthicalSip"];
const CATEGORY_META = [
  { key:"beanPedigree", label:"Bean Pedigree", icon:Award, desc:"Roast complexity & single-origins" },
  { key:"extractionMastery", label:"Extraction Mastery", icon:Zap, desc:"Espresso & pour-over quality" },
  { key:"vibeGauge", label:"Vibe Gauge", icon:Heart, desc:"Work-friendly vs. cozy atmosphere" },
  { key:"milkCraft", label:"Milk Craft", icon:Droplets, desc:"Microfoam texture & alt-milk options" },
  { key:"ethicalSip", label:"Ethical Sip", icon:Leaf, desc:"Sustainability & sourcing transparency" },
];

const calcPulse = (scores) => {
  const vals = Object.values(scores);
  return (vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(1);
};

const ScoreBar = ({ value, label, icon: Icon, desc }) => (
  <div style={{marginBottom:14}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
      <div style={{display:"flex",alignItems:"center",gap:6}}><Icon size={14} color="#5D4037"/><span style={{fontSize:13,fontWeight:600,color:"#3E2723"}}>{label}</span></div>
      <span style={{fontSize:13,fontWeight:700,color:"#3E2723"}}>{value.toFixed(1)}</span>
    </div>
    <div style={{height:6,background:"#F5F0EA",borderRadius:99,overflow:"hidden"}}>
      <div style={{height:"100%",width:`${(value/5)*100}%`,background:"linear-gradient(90deg,#A1887F,#3E2723)",borderRadius:99,transition:"width 0.6s"}}/>
    </div>
    <p style={{fontSize:11,color:"#A1887F",margin:"3px 0 0",fontStyle:"italic"}}>{desc}</p>
  </div>
);

const SliderInput = ({ value, onChange, label, icon: Icon, desc }) => (
  <div style={{marginBottom:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
      <div style={{display:"flex",alignItems:"center",gap:6}}><Icon size={14} color="#5D4037"/><span style={{fontSize:13,fontWeight:600,color:"#3E2723"}}>{label}</span></div>
      <span style={{fontSize:14,fontWeight:700,color:"#3E2723"}}>{value.toFixed(1)}</span>
    </div>
    <input type="range" min="1" max="5" step="0.1" value={value} onChange={e=>onChange(parseFloat(e.target.value))} style={{width:"100%",accentColor:"#3E2723"}}/>
    <p style={{fontSize:11,color:"#A1887F",margin:"3px 0 0",fontStyle:"italic"}}>{desc}</p>
  </div>
);

const ShopCard = ({ shop, onClick }) => {
  const pulse = calcPulse(shop.scores);
  return (
    <div onClick={onClick} style={{background:"#FFF",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(62,39,35,0.08)",cursor:"pointer",marginBottom:16,transition:"transform 0.15s,box-shadow 0.15s"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 24px rgba(62,39,35,0.14)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 12px rgba(62,39,35,0.08)";}}>
      <div style={{position:"relative",height:175}}>
        <img src={img(shop.img)} alt={shop.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,10,5,0.75) 0%,transparent 60%)"}}/>
        <div style={{position:"absolute",bottom:11,left:12,right:60}}>
          <h3 style={{color:"#FFF",margin:0,fontSize:16,fontWeight:700}}>{shop.name}</h3>
          <p style={{color:"#D7CCC8",margin:"2px 0 0",fontSize:11,display:"flex",alignItems:"center",gap:3}}><MapPin size={10}/>{shop.neighborhood} · {shop.city}</p>
        </div>
        <div style={{position:"absolute",top:10,right:10,display:"flex",flexDirection:"column",gap:4}}>
          <div style={{background:"rgba(255,255,255,0.93)",borderRadius:7,padding:"3px 7px",fontSize:10,fontWeight:600,color:"#555",whiteSpace:"nowrap"}}>G {shop.googleScore} ★</div>
          <div style={{background:"#3E2723",borderRadius:7,padding:"3px 7px",fontSize:10,fontWeight:700,color:"#FFECB3",whiteSpace:"nowrap"}}>{pulse} ☕</div>
        </div>
      </div>
      <div style={{padding:"9px 13px 12px"}}>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {shop.tags.map(t=><span key={t} style={{fontSize:10,fontWeight:600,color:"#5D4037",background:"#FFF3E0",borderRadius:99,padding:"2px 8px"}}>{t}</span>)}
        </div>
      </div>
    </div>
  );
};

const TrendingCard = ({ shop, onClick }) => {
  const pulse = calcPulse(shop.scores);
  return (
    <div onClick={onClick} style={{minWidth:125,borderRadius:12,overflow:"hidden",cursor:"pointer",position:"relative",flexShrink:0}}>
      <img src={img(shop.img)} alt={shop.name} style={{width:125,height:90,objectFit:"cover",display:"block"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,10,5,0.82) 0%,transparent 55%)"}}/>
      <div style={{position:"absolute",bottom:7,left:7,right:7}}>
        <p style={{color:"#FFF",margin:0,fontSize:10,fontWeight:700,lineHeight:1.2}}>{shop.name}</p>
        <p style={{color:"#FFECB3",margin:"2px 0 0",fontSize:9}}>{pulse} ☕ · {shop.city}</p>
      </div>
    </div>
  );
};

const ShareModal = ({ shop, onClose }) => {
  const best = CATEGORY_META.reduce((a,b) => shop.scores[a.key]>shop.scores[b.key]?a:b);
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(20,10,5,0.8)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{background:"#FDFBF7",borderRadius:20,overflow:"hidden",width:"100%",maxWidth:340}}>
        <div style={{background:"linear-gradient(135deg,#3E2723,#5D4037)",padding:28,textAlign:"center"}}>
          <div style={{width:56,height:56,borderRadius:12,overflow:"hidden",margin:"0 auto 12px"}}><img src={img(shop.img)} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
          <h2 style={{color:"#FFF",fontSize:20,margin:"0 0 4px"}}>{shop.name}</h2>
          <p style={{color:"#FFECB3",fontSize:13,margin:"0 0 12px"}}>Pulse Score: {calcPulse(shop.scores)} ☕</p>
          <div style={{background:"rgba(255,255,255,0.12)",borderRadius:10,padding:"8px 16px",display:"inline-block"}}>
            <p style={{color:"#FFF",fontSize:11,margin:0}}>Best at: <strong>{best.label}</strong> — {shop.scores[best.key].toFixed(1)}/5</p>
          </div>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:9,margin:"14px 0 0",letterSpacing:1.5,textTransform:"uppercase"}}>Shared via RoastPulse</p>
        </div>
        <div style={{padding:16,display:"flex",gap:10}}>
          <button onClick={onClose} style={{flex:1,padding:"11px 0",background:"#3E2723",color:"#FFF",border:"none",borderRadius:10,fontSize:14,fontWeight:600,cursor:"pointer"}}>✓ Copied to Story</button>
          <button onClick={onClose} style={{width:42,background:"#F5F0EA",border:"none",borderRadius:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><X size={15} color="#A1887F"/></button>
        </div>
      </div>
    </div>
  );
};

const ReviewModal = ({ shop, onClose, onSubmit }) => {
  const [scores, setScores] = useState({beanPedigree:3.5,extractionMastery:3.5,vibeGauge:3.5,milkCraft:3.5,ethicalSip:3.5});
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [done, setDone] = useState(false);
  const submit = () => {
    if (!text.trim()) return;
    onSubmit({scores,text,author:author||"Anonymous",date:"May 2026",rating:parseFloat(calcPulse(scores))});
    setDone(true);
    setTimeout(onClose, 1800);
  };
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(20,10,5,0.8)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{background:"#FDFBF7",borderRadius:"20px 20px 0 0",width:"100%",maxWidth:480,maxHeight:"92vh",overflowY:"auto",padding:24,boxSizing:"border-box"}}>
        {done ? (
          <div style={{textAlign:"center",padding:"40px 0"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#E8F5E9",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><Check size={26} color="#4CAF50"/></div>
            <h3 style={{color:"#3E2723",marginBottom:8}}>Pulse Submitted!</h3>
            <p style={{color:"#A1887F",fontSize:14}}>Your review now shapes the community score.</p>
          </div>
        ) : (
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <h2 style={{color:"#3E2723",margin:0,fontSize:19}}>Leave a Pulse Review</h2>
              <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer"}}><X size={20} color="#A1887F"/></button>
            </div>
            <p style={{color:"#A1887F",fontSize:13,marginBottom:18}}>Rating <strong style={{color:"#3E2723"}}>{shop.name}</strong></p>
            {CATEGORY_META.map(m=><SliderInput key={m.key} value={scores[m.key]} label={m.label} icon={m.icon} desc={m.desc} onChange={v=>setScores(s=>({...s,[m.key]:v}))}/>)}
            <div style={{marginBottom:12}}>
              <label style={{fontSize:12,color:"#A1887F",display:"block",marginBottom:5}}>Your name (optional)</label>
              <input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Coffee lover..." style={{width:"100%",padding:"10px 12px",border:"1.5px solid #E8DDD7",borderRadius:10,fontSize:14,background:"#FFF",color:"#3E2723",boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:12,color:"#A1887F",display:"block",marginBottom:5}}>Your review *</label>
              <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="The beans, the extraction, the vibe..." rows={4} style={{width:"100%",padding:"10px 12px",border:"1.5px solid #E8DDD7",borderRadius:10,fontSize:14,background:"#FFF",color:"#3E2723",resize:"vertical",boxSizing:"border-box",fontFamily:"inherit"}}/>
            </div>
            <button style={{width:"100%",background:"#F5F0EA",border:"1.5px dashed #D7CCC8",borderRadius:10,padding:"10px 0",color:"#A1887F",cursor:"pointer",fontSize:13,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
              <Camera size={14}/>Upload Photo (mock)
            </button>
            <button onClick={submit} style={{width:"100%",background:"#3E2723",color:"#FFECB3",border:"none",borderRadius:10,padding:"13px 0",fontSize:15,fontWeight:700,cursor:"pointer"}}>
              Submit Pulse Review ☕
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const DetailPage = ({ shop, onBack, onUpdate }) => {
  const [showReview, setShowReview] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const pulse = calcPulse(shop.scores);
  const handleReviewSubmit = ({scores,text,author,date,rating}) => {
    const newScores = {};
    CATEGORY_META.forEach(m=>{newScores[m.key]=(shop.scores[m.key]+scores[m.key])/2;});
    onUpdate({...shop,scores:newScores,reviews:[...shop.reviews,{author,date,text,rating}]});
    setShowReview(false);
  };
  return (
    <div style={{background:"#FDFBF7",minHeight:"100vh"}}>
      <div style={{position:"relative",height:270}}>
        <img src={img(shop.img)} alt={shop.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,10,5,0.88) 35%,rgba(0,0,0,0.25) 100%)"}}/>
        <button onClick={onBack} style={{position:"absolute",top:16,left:16,background:"rgba(255,255,255,0.12)",border:"none",borderRadius:10,padding:"8px 12px",color:"#FFF",cursor:"pointer",display:"flex",alignItems:"center",gap:5,backdropFilter:"blur(6px)"}}>
          <ArrowLeft size={16}/>Back
        </button>
        <button onClick={()=>setShowShare(true)} style={{position:"absolute",top:16,right:16,background:"rgba(255,255,255,0.12)",border:"none",borderRadius:10,padding:"8px 10px",color:"#FFF",cursor:"pointer",backdropFilter:"blur(6px)"}}>
          <Share2 size={16}/>
        </button>
        <div style={{position:"absolute",bottom:18,left:18,right:18}}>
          <span style={{fontSize:10,color:"#A1887F",background:"rgba(255,255,255,0.1)",borderRadius:99,padding:"2px 8px",fontWeight:600}}>{shop.city} · {shop.neighborhood}</span>
          <h1 style={{color:"#FFF",fontSize:24,margin:"6px 0 4px",fontWeight:700}}>{shop.name}</h1>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{shop.tags.map(t=><span key={t} style={{fontSize:10,color:"#FFECB3",background:"rgba(255,236,179,0.15)",borderRadius:99,padding:"2px 8px"}}>{t}</span>)}</div>
        </div>
      </div>
      <div style={{padding:"18px 18px 100px"}}>
        <div style={{background:"#FFF",borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
          <div style={{display:"flex",gap:8,marginBottom:8}}><MapPin size={14} color="#A1887F" style={{marginTop:2,flexShrink:0}}/><span style={{fontSize:13,color:"#5D4037"}}>{shop.address}</span></div>
          <div style={{display:"flex",gap:8,marginBottom:14}}><Clock size={14} color="#A1887F" style={{flexShrink:0}}/><span style={{fontSize:13,color:"#5D4037"}}>{shop.hours}</span></div>
          <button style={{width:"100%",background:"#3E2723",color:"#FFF",border:"none",borderRadius:10,padding:"11px 0",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <Navigation size={14}/>Get Directions
          </button>
        </div>
        <div style={{background:"#FFF",borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
          <h3 style={{color:"#3E2723",margin:"0 0 14px",fontSize:16}}>Score Comparison</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div style={{background:"#F8F9FA",borderRadius:12,padding:14,textAlign:"center"}}>
              <p style={{fontSize:11,color:"#888",margin:"0 0 4px",textTransform:"uppercase",letterSpacing:1}}>Google</p>
              <p style={{fontSize:28,fontWeight:700,color:"#555",margin:0}}>{shop.googleScore}</p>
              <p style={{fontSize:12,color:"#FFC107",margin:"2px 0 0"}}>{"★".repeat(Math.floor(shop.googleScore))}{"☆".repeat(5-Math.floor(shop.googleScore))}</p>
            </div>
            <div style={{background:"#FFF8F0",borderRadius:12,padding:14,textAlign:"center",border:"2px solid #FFD180"}}>
              <p style={{fontSize:11,color:"#A1887F",margin:"0 0 4px",textTransform:"uppercase",letterSpacing:1}}>Pulse</p>
              <p style={{fontSize:28,fontWeight:700,color:"#3E2723",margin:0}}>{pulse}</p>
              <p style={{fontSize:12,color:"#3E2723",margin:"2px 0 0"}}>☕☕☕☕☕</p>
            </div>
          </div>
        </div>
        <div style={{background:"#FFF",borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
          <h3 style={{color:"#3E2723",margin:"0 0 16px",fontSize:16}}>Aficionado Scorecard</h3>
          {CATEGORY_META.map(m=><ScoreBar key={m.key} value={shop.scores[m.key]} label={m.label} icon={m.icon} desc={m.desc}/>)}
        </div>
        <div style={{background:"#FFF",borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
          <h3 style={{color:"#3E2723",margin:"0 0 14px",fontSize:16}}>Reviews ({shop.reviews.length})</h3>
          {shop.reviews.map((r,i)=>(
            <div key={i} style={{borderTop:i>0?"1px solid #F5F0EA":"none",paddingTop:i>0?12:0,marginBottom:12}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{fontWeight:600,fontSize:13,color:"#3E2723"}}>{r.author}</span>
                <span style={{fontSize:11,color:"#A1887F"}}>{r.date} · {r.rating.toFixed(1)} ☕</span>
              </div>
              <p style={{fontSize:13,color:"#5D4037",margin:0,lineHeight:1.6}}>{r.text}</p>
            </div>
          ))}
        </div>
        <button onClick={()=>setShowReview(true)} style={{width:"100%",background:"#3E2723",color:"#FFECB3",border:"none",borderRadius:12,padding:"14px 0",fontSize:15,fontWeight:700,cursor:"pointer"}}>
          Leave a Pulse Review ☕
        </button>
      </div>
      {showReview && <ReviewModal shop={shop} onClose={()=>setShowReview(false)} onSubmit={handleReviewSubmit}/>}
      {showShare && <ShareModal shop={shop} onClose={()=>setShowShare(false)}/>}
    </div>
  );
};

const ProfilePage = () => {
  const [newsletter, setNewsletter] = useState(false);
  return (
    <div style={{padding:"20px 18px 100px"}}>
      <h2 style={{color:"#3E2723",marginBottom:20}}>Your Profile</h2>
      <div style={{background:"#FFF",borderRadius:14,padding:20,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)",textAlign:"center"}}>
        <div style={{width:70,height:70,borderRadius:"50%",background:"#FFF3E0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:30}}>☕</div>
        <h3 style={{color:"#3E2723",margin:"0 0 4px"}}>Coffee Aficionado</h3>
        <p style={{color:"#A1887F",fontSize:13,margin:0}}>12 Pulse Reviews · NYC & NJ Explorer</p>
      </div>
      <div style={{background:"#FFF",borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><Bell size={16} color="#3E2723"/><h4 style={{margin:0,color:"#3E2723",fontSize:15}}>Weekly Pulse Newsletter</h4></div>
            <p style={{fontSize:12,color:"#A1887F",margin:0,lineHeight:1.5}}>Top-rated local category winners across NYC & NJ, delivered every Friday morning.</p>
          </div>
          <div onClick={()=>setNewsletter(n=>!n)} style={{width:44,height:24,borderRadius:99,background:newsletter?"#3E2723":"#D7CCC8",position:"relative",cursor:"pointer",flexShrink:0,marginLeft:12,transition:"background 0.2s"}}>
            <div style={{width:20,height:20,borderRadius:"50%",background:"#FFF",position:"absolute",top:2,left:newsletter?22:2,transition:"left 0.2s"}}/>
          </div>
        </div>
        {newsletter && <div style={{marginTop:10,background:"#E8F5E9",borderRadius:8,padding:"8px 12px"}}><p style={{color:"#2E7D32",fontSize:12,margin:0}}>✓ You're in! Weekly Pulse lands every Friday.</p></div>}
      </div>
      <div style={{background:"linear-gradient(135deg,#3E2723,#5D4037)",borderRadius:14,padding:18,display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
        <Crown size={26} color="#FFD54F" style={{flexShrink:0}}/>
        <div style={{flex:1}}>
          <p style={{fontSize:13,fontWeight:700,margin:"0 0 2px",color:"#FFD54F"}}>Premium Blend — $1.99/mo</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.78)",margin:"0 0 10px",lineHeight:1.5}}>Ad-free · Early access to Weekly Pulse · Exclusive roaster events</p>
          <button style={{background:"#FFD54F",color:"#3E2723",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:700,cursor:"pointer"}}>Upgrade Now</button>
        </div>
      </div>
      <div style={{background:"#FFF",borderRadius:14,padding:16,boxShadow:"0 1px 6px rgba(62,39,35,0.07)"}}>
        <h4 style={{color:"#3E2723",margin:"0 0 10px",fontSize:15}}>📱 Install as an App</h4>
        <p style={{fontSize:13,color:"#A1887F",margin:"0 0 12px",lineHeight:1.5}}>Add RoastPulse to your home screen for the full app experience — no app store needed.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <div style={{background:"#F5F0EA",borderRadius:10,padding:12,textAlign:"center"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#3E2723",margin:"0 0 3px"}}>iPhone</p>
            <p style={{fontSize:10,color:"#A1887F",margin:0}}>Safari → Share → Add to Home Screen</p>
          </div>
          <div style={{background:"#F5F0EA",borderRadius:10,padding:12,textAlign:"center"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#3E2723",margin:"0 0 3px"}}>Android</p>
            <p style={{fontSize:10,color:"#A1887F",margin:0}}>Chrome → Menu → Add to Home Screen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RoastPulse() {
  const [shops, setShops] = useState(SHOPS_RAW);
  const [selectedShop, setSelectedShop] = useState(null);
  const [activePage, setActivePage] = useState("feed");
  const [selectedCity, setSelectedCity] = useState("All");
  const [activeTag, setActiveTag] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("pulse");

  const updateShop = (updated) => {
    setShops(prev=>prev.map(s=>s.id===updated.id?updated:s));
    setSelectedShop(updated);
  };

  const filtered = shops
    .filter(s=>{
      if(selectedCity!=="All"&&s.city!==selectedCity) return false;
      if(activeTag&&!s.tags.includes(activeTag)) return false;
      if(search&&!s.name.toLowerCase().includes(search.toLowerCase())&&!s.neighborhood.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a,b)=>{
      if(sortBy==="pulse") return parseFloat(calcPulse(b.scores))-parseFloat(calcPulse(a.scores));
      if(sortBy==="google") return b.googleScore-a.googleScore;
      return a.name.localeCompare(b.name);
    });

  const trending = [...shops].sort((a,b)=>parseFloat(calcPulse(b.scores))-parseFloat(calcPulse(a.scores))).slice(0,6);

  if(selectedShop) return <DetailPage shop={selectedShop} onBack={()=>setSelectedShop(null)} onUpdate={updateShop}/>;

  return (
    <div style={{background:"#FDFBF7",minHeight:"100vh",fontFamily:"system-ui,sans-serif",maxWidth:520,margin:"0 auto"}}>
      {/* HEADER */}
      <div style={{background:"#3E2723",padding:"14px 18px 12px",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <Coffee size={20} color="#FFECB3"/>
            <h1 style={{color:"#FFECB3",fontSize:19,margin:0,fontWeight:700,letterSpacing:0.3}}>RoastPulse</h1>
            <span style={{fontSize:9,color:"rgba(255,236,179,0.6)",border:"1px solid rgba(255,236,179,0.3)",borderRadius:99,padding:"1px 6px",fontWeight:600,letterSpacing:1}}>NYC · NJ</span>
          </div>
          <span style={{fontSize:11,color:"rgba(255,236,179,0.7)",fontWeight:500}}>{shops.length} shops</span>
        </div>
        <div style={{position:"relative"}}>
          <Search size={14} color="#A1887F" style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)"}}/>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search shops or neighborhoods..." style={{width:"100%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:"9px 10px 9px 32px",color:"#FFF",fontSize:13,boxSizing:"border-box"}}/>
        </div>
      </div>

      {activePage==="feed" && (
        <div>
          {/* CITY TABS */}
          <div style={{display:"flex",overflowX:"auto",scrollbarWidth:"none",background:"#FFF",borderBottom:"1px solid #F0EBE5"}}>
            {CITIES.map(c=>(
              <button key={c} onClick={()=>setSelectedCity(c)} style={{flexShrink:0,padding:"10px 13px",background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:600,color:selectedCity===c?"#3E2723":"#A1887F",borderBottom:selectedCity===c?"2.5px solid #3E2723":"2.5px solid transparent",whiteSpace:"nowrap",transition:"all 0.15s"}}>
                {c}
              </button>
            ))}
          </div>

          <div style={{padding:"18px 18px 0"}}>
            {/* TRENDING */}
            <div style={{marginBottom:20}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
                <TrendingUp size={15} color="#3E2723"/>
                <h2 style={{color:"#3E2723",margin:0,fontSize:15,fontWeight:700}}>Trending This Week</h2>
              </div>
              <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:4,scrollbarWidth:"none"}}>
                {trending.map(s=><TrendingCard key={s.id} shop={s} onClick={()=>setSelectedShop(s)}/>)}
              </div>
            </div>

            {/* TAG FILTERS */}
            <div style={{display:"flex",gap:7,overflowX:"auto",marginBottom:12,paddingBottom:2,scrollbarWidth:"none"}}>
              {ALL_TAGS.map(t=>(
                <button key={t} onClick={()=>setActiveTag(activeTag===t?null:t)} style={{flexShrink:0,padding:"5px 12px",borderRadius:99,fontSize:11,fontWeight:600,cursor:"pointer",border:"1.5px solid",borderColor:activeTag===t?"#3E2723":"#D7CCC8",background:activeTag===t?"#3E2723":"#FFF",color:activeTag===t?"#FFECB3":"#5D4037",transition:"all 0.15s"}}>
                  {t}
                </button>
              ))}
            </div>

            {/* SORT + COUNT */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <span style={{fontSize:12,color:"#A1887F"}}>{filtered.length} shops {selectedCity!=="All"?`in ${selectedCity}`:"across NYC & NJ"}</span>
              <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{fontSize:12,color:"#3E2723",border:"1px solid #E8DDD7",borderRadius:8,padding:"4px 8px",background:"#FFF",cursor:"pointer"}}>
                <option value="pulse">Sort: Pulse Score</option>
                <option value="google">Sort: Google Rating</option>
                <option value="name">Sort: A–Z</option>
              </select>
            </div>

            {/* SHOP FEED */}
            {filtered.length===0 ? (
              <div style={{textAlign:"center",padding:"40px 0",color:"#A1887F"}}>
                <Coffee size={32} color="#D7CCC8" style={{marginBottom:12}}/>
                <p style={{fontSize:14}}>No shops found.<br/>Try a different filter or city.</p>
              </div>
            ) : filtered.map(s=><ShopCard key={s.id} shop={s} onClick={()=>setSelectedShop(s)}/>)}

            {/* PREMIUM BANNER */}
            <div style={{background:"linear-gradient(135deg,#3E2723,#5D4037)",borderRadius:14,padding:"14px 16px",marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
              <Crown size={22} color="#FFD54F" style={{flexShrink:0}}/>
              <div style={{flex:1}}>
                <p style={{color:"#FFD54F",fontWeight:700,fontSize:13,margin:"0 0 1px"}}>Premium Blend — $1.99/mo</p>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:11,margin:0}}>Ad-free · Early access to Weekly Pulse</p>
              </div>
              <button style={{background:"#FFD54F",color:"#3E2723",border:"none",borderRadius:8,padding:"6px 12px",fontSize:11,fontWeight:700,cursor:"pointer",flexShrink:0}}>Try</button>
            </div>
          </div>
        </div>
      )}

      {activePage==="profile" && <ProfilePage/>}

      {/* BOTTOM NAV */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:520,background:"#FFF",borderTop:"1px solid #F0EBE5",display:"flex",zIndex:50}}>
        {[{id:"feed",icon:Coffee,label:"Discover"},{id:"profile",icon:User,label:"Profile"}].map(({id,icon:Icon,label})=>(
          <button key={id} onClick={()=>setActivePage(id)} style={{flex:1,padding:"12px 0 10px",background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
            <Icon size={20} color={activePage===id?"#3E2723":"#C8BDB8"}/>
            <span style={{fontSize:10,color:activePage===id?"#3E2723":"#C8BDB8",fontWeight:activePage===id?700:400}}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
