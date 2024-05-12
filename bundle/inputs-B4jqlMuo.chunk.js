import{a7 as s,C as e,f as t}from"./preset_utils-Cf2AMUmT.chunk.js";import{bk as o,A as a,bp as n,L as i,bl as l,w as r,W as c,x as p,y as m,bm as O,bn as u}from"./detailed_results-Bq3U1zBE.chunk.js";const d=()=>s({fieldName:"shield",values:[{value:o.NoShield,tooltip:"No Shield"},{actionId:a.fromSpellId(52127),value:o.WaterShield},{actionId:a.fromSpellId(324),value:o.LightningShield}]}),S=()=>s({fieldName:"imbueMh",values:[{value:n.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:a.fromSpellId(8232),value:n.WindfuryWeapon},{actionId:a.fromSpellId(8024),value:n.FlametongueWeapon},{actionId:a.fromSpellId(8033),value:n.FrostbrandWeapon}]});function h(s,o){const n=new e(s,"totems-settings",{header:{title:"Totems"}}),d=i.newGroupContainer();d.classList.add("totem-dropdowns-container","icon-group"),n.bodyElement.appendChild(d),new t(d,o.player,{extraCssClasses:["call-totem-picker"],numColumns:1,values:[{actionId:a.fromSpellId(66842),value:l.Elements},{actionId:a.fromSpellId(66843),value:l.Ancestors},{actionId:a.fromSpellId(66844),value:l.Spirits}],equals:(s,e)=>s==e,zeroValue:l.NoCall,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>s.getSpecOptions().classOptions?.call||l.Elements,setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(t){case l.Elements:S.setInputValue(o.classOptions?.totems?.elements?.earth||r.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.elements?.water||c.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.elements?.fire||p.NoFireTotem),T.setInputValue(o.classOptions?.totems?.elements?.air||m.NoAirTotem);break;case l.Ancestors:S.setInputValue(o.classOptions?.totems?.ancestors?.earth||r.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.ancestors?.water||c.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.ancestors?.fire||p.NoFireTotem),T.setInputValue(o.classOptions?.totems?.ancestors?.air||m.NoAirTotem);break;case l.Spirits:S.setInputValue(o.classOptions?.totems?.spirits?.earth||r.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.spirits?.water||c.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.spirits?.fire||p.NoFireTotem),T.setInputValue(o.classOptions?.totems?.spirits?.air||m.NoAirTotem)}o.classOptions.call=t,e.setSpecOptions(s,o)}});const S=new t(d,o.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:r.NoEarthTotem},{actionId:a.fromSpellId(8075),value:r.StrengthOfEarthTotem},{actionId:a.fromSpellId(8071),value:r.StoneskinTotem},{actionId:a.fromSpellId(8143),value:r.TremorTotem},{actionId:a.fromSpellId(2062),value:r.EarthElementalTotem}],equals:(s,e)=>s==e,zeroValue:r.NoEarthTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();var t=r.NoEarthTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.earth||r.NoEarthTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.earth||r.NoEarthTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.earth||r.NoEarthTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=O.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.earth=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=u.create()),o.classOptions.totems.elements.earth=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=u.create()),o.classOptions.totems.ancestors.earth=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=u.create()),o.classOptions.totems.spirits.earth=t}e.setSpecOptions(s,o)}}),h=new t(d,o.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:c.NoWaterTotem},{actionId:a.fromSpellId(5675),value:c.ManaSpringTotem},{actionId:a.fromSpellId(5394),value:c.HealingStreamTotem}],equals:(s,e)=>s==e,zeroValue:c.NoWaterTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();var t=c.NoWaterTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.water||c.NoWaterTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.water||c.NoWaterTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.water||c.NoWaterTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=O.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.water=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=u.create()),o.classOptions.totems.elements.water=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=u.create()),o.classOptions.totems.ancestors.water=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=u.create()),o.classOptions.totems.spirits.water=t}e.setSpecOptions(s,o)}}),I=new t(d,o.player,{extraCssClasses:["fire-totem-picker"],numColumns:1,values:[{color:"#ffb3ba",value:p.NoFireTotem},{actionId:a.fromSpellId(78770),value:p.MagmaTotem},{actionId:a.fromSpellId(3599),value:p.SearingTotem},{actionId:a.fromSpellId(8227),value:p.FlametongueTotem},{actionId:a.fromSpellId(2894),value:p.FireElementalTotem}],equals:(s,e)=>s==e,zeroValue:p.NoFireTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();var t=p.NoFireTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.fire||p.NoFireTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.fire||p.NoFireTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.fire||p.NoFireTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=O.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.fire=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=u.create()),o.classOptions.totems.elements.fire=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=u.create()),o.classOptions.totems.ancestors.fire=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=u.create()),o.classOptions.totems.spirits.fire=t}e.setSpecOptions(s,o)}}),T=new t(d,o.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:m.NoAirTotem},{actionId:a.fromSpellId(8512),value:m.WindfuryTotem},{actionId:a.fromSpellId(3738),value:m.WrathOfAirTotem}],equals:(s,e)=>s==e,zeroValue:m.NoAirTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();var t=m.NoAirTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.air||m.NoAirTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.air||m.NoAirTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.air||m.NoAirTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=O.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.air=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=u.create()),o.classOptions.totems.elements.air=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=u.create()),o.classOptions.totems.ancestors.air=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=u.create()),o.classOptions.totems.spirits.air=t}e.setSpecOptions(s,o)}});return n}export{d as S,h as T,S as a};
//# sourceMappingURL=inputs-B4jqlMuo.chunk.js.map