import{o as e,q as t,s as a,w as s,V as n,T as i,J as l}from"./preset_utils-Cf2AMUmT.chunk.js";import{F as o,a1 as d,aQ as r,a6 as c,a9 as p,aR as m,a7 as g,a8 as h,b as u,a as S,ab as f,ad as I,ae as P,af as T,ag as F,ah as A,S as w,R as O}from"./detailed_results-Bq3U1zBE.chunk.js";const y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:55342}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}},castSpell:{spellId:{spellId:12051}}}},{action:{condition:{auraIsActive:{auraId:{spellId:44545}}},castSpell:{spellId:{spellId:44572}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44549}}},castSpell:{spellId:{spellId:47610}}}},{action:{castSpell:{spellId:{spellId:42842}}}}]},k={type:"TypeAPL",prepullActions:[],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:42939}}}}]},C={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45133,gems:[40051]},{id:46134,enchant:3810,gems:[39998]},{id:45618,enchant:3722,gems:[40026]},{id:46130,enchant:3832,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[40049,40049,39998]},{id:45488,enchant:3719,gems:[39998,40051,40026]},{id:45135,enchant:4223,gems:[39998,40049]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[40026]},{id:45617},{id:45294,gems:[39998]}]},M={items:[{id:47761,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47758,enchant:3810,gems:[40133]},{id:47552,enchant:3722,gems:[40113]},{id:47129,enchant:3832,gems:[40133,40153,40155]},{id:47208,enchant:2332,gems:[40155,0]},{id:47762,enchant:3604,gems:[40113,0]},{id:46973,gems:[40133,40113,40113]},{id:47760,enchant:3719,gems:[40155,40155]},{id:47097,enchant:4223,gems:[40133,40113]},{id:45495,gems:[40133]},{id:46046,gems:[40155]},{id:47188},{id:45518},{id:47517,enchant:3834,gems:[40155]},{id:47958,gems:[40155]},{id:45294,gems:[40113]}]},v={items:[{id:47764,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47767,enchant:3810,gems:[40133]},{id:47551,enchant:3722,gems:[40113]},{id:47462,enchant:3832,gems:[40133,40155,40155]},{id:47485,enchant:2332,gems:[40155,0]},{id:47763,enchant:3604,gems:[40113,0]},{id:47419,gems:[40133,40113,40113]},{id:47765,enchant:3719,gems:[40155,40155]},{id:47454,enchant:4223,gems:[40133,40113]},{id:45495,gems:[40133]},{id:46046,gems:[40113]},{id:47477},{id:45518},{id:47422,enchant:3834,gems:[40155]},{id:48032,gems:[40155]},{id:45294,gems:[40113]}]},b=e("Frost P1 Preset",{items:[{id:40416,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40419,enchant:3810,gems:[40051]},{id:44005,enchant:3722,gems:[40026]},{id:40418,enchant:3832,gems:[39998,40048]},{id:44008,enchant:2332,gems:[39998,0]},{id:40415,enchant:3604,gems:[39998,0]},{id:40301,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:4223},{id:40399},{id:40719},{id:40255},{id:40432},{id:40396,enchant:3834},{id:39766},{id:39712}]},{talentTree:2}),H=e("Frost P2 Preset",C,{talentTree:2}),R=e("Frost P3 Preset [A]",M,{talentTree:2,faction:o.Alliance}),B=e("Frost P3 Preset [H]",v,{talentTree:2,faction:o.Horde}),j=t("Frost",y,{talentTree:2}),D=t("Frost AOE",k,{talentTree:2}),E={name:"Frost",data:d.create({})},L=r.create({classOptions:{},waterElementalDisobeyChance:.1}),W=c.create({defaultPotion:p.PotionOfSpeed,defaultConjured:m.ConjuredDarkRune,flask:g.FlaskOfTheFrostWyrm,food:h.FoodFishFeast}),x={distanceFromTarget:20,profession1:u.Engineering,profession2:u.Tailoring},U=a(w.SpecFrostMage,{cssClass:"frost-mage-sim-ui",cssScheme:S.getCssClass(S.Mage),knownIssues:[],epStats:[f.StatIntellect,f.StatSpirit,f.StatSpellPower,f.StatSpellHit,f.StatSpellCrit,f.StatSpellHaste,f.StatMP5,f.StatMastery],epReferenceStat:f.StatSpellPower,displayStats:[f.StatHealth,f.StatMana,f.StatStamina,f.StatIntellect,f.StatSpirit,f.StatSpellPower,f.StatSpellHit,f.StatSpellCrit,f.StatSpellHaste,f.StatMP5,f.StatMastery],defaults:{gear:B.gear,epWeights:I.fromMap({[f.StatIntellect]:.48,[f.StatSpirit]:.42,[f.StatSpellPower]:1,[f.StatSpellHit]:.38,[f.StatSpellCrit]:.58,[f.StatSpellHaste]:.94,[f.StatMP5]:.09}),consumes:W,talents:E.data,specOptions:L,other:x,raidBuffs:P.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:T.create({manaTideTotems:1}),individualBuffs:F.create({innervateCount:0,vampiricTouch:!0,focusMagic:!0}),debuffs:A.create({judgement:!0,ebonPlaguebringer:!0,shadowAndFlame:!0})},playerIconInputs:[],rotationInputs:{inputs:[]},includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[s,n,i]},encounterPicker:{showExecuteProportion:!0},presets:{rotations:[j,D],talents:[E],gear:[b,H,R,B]},autoRotation:e=>e.sim.encounter.targets.length>3?D.rotation.rotation:j.rotation.rotation,raidSimPresets:[{spec:w.SpecFrostMage,talents:E.data,specOptions:L,consumes:W,otherDefaults:x,defaultFactionRaces:{[o.Unknown]:O.RaceUnknown,[o.Alliance]:O.RaceGnome,[o.Horde]:O.RaceTroll},defaultGear:{[o.Unknown]:{},[o.Alliance]:{1:b.gear,2:H.gear,3:R.gear},[o.Horde]:{1:b.gear,2:H.gear,3:B.gear}}}]});class V extends l{constructor(e,t){super(e,t,U)}}export{V as F};
//# sourceMappingURL=sim-Cc4dwTl8.chunk.js.map