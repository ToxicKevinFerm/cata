import{o as e,q as t,s as a,a6 as s,R as l,U as n,N as o,O as i,$ as r,Q as c,af as p,a3 as d,w as m,V as S,T as u,a9 as f,J as g}from"./preset_utils-Cf2AMUmT.chunk.js";import{a1 as h,bw as I,bu as P,a6 as w,a9 as O,a7 as k,a8 as v,ae as T,ag as A,ah as b,b as y,a as D,ab as H,ad as C,af as R,aj as F,S as M,F as B,R as W}from"./detailed_results-Bq3U1zBE.chunk.js";import{P as L,D as V}from"./inputs-CxtZSSYN.chunk.js";const j={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-3.5s"}}},{action:{castSpell:{spellId:{spellId:47825}}},doAtValue:{const:{val:"-3.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:17962}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:47867}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:47811}}},rhs:{spellCastTime:{spellId:{spellId:47811}}}}},castSpell:{spellId:{spellId:47811}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"61s"}}}},castSpell:{spellId:{spellId:1122}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:63321}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:57946}}}},{action:{castSpell:{spellId:{spellId:59172}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:47867}}}}},{not:{val:{dotIsActive:{spellId:{spellId:47864}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"22s"}}}}]}},castSpell:{spellId:{spellId:47864}}}},{action:{castSpell:{spellId:{spellId:47838}}}},{action:{castSpell:{spellId:{spellId:57946}}}}]},x={items:[]},G={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:51233,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51230,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40113,40113]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},U=e("Pre-raid Preset",{items:[]}),E=e("P1 Preset",x),z=e("P4 Wrath",G,{tooltip:"This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/"}),_=t("Destro",j),q={name:"Destruction",data:h.create({})},J=I.create({classOptions:{summon:P.Imp,detonateSeed:!0}}),K=w.create({defaultPotion:O.VolcanicPotion,prepopPotion:O.VolcanicPotion,flask:k.FlaskOfTheDraconicMind,food:v.FoodSeafoodFeast}),N=T.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),Q=A.create({vampiricTouch:!0}),Z=b.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0,judgement:!0}),$={distanceFromTarget:25,profession1:y.Engineering,profession2:y.Tailoring,channelClipDelay:150},X=a(M.SpecDestructionWarlock,{cssClass:"destruction-warlock-sim-ui",cssScheme:D.getCssClass(D.Warlock),knownIssues:["Drain Soul is currently disabled for APL rotations"],epStats:[H.StatIntellect,H.StatSpellPower,H.StatSpellHit,H.StatSpellCrit,H.StatSpellHaste,H.StatMastery,H.StatStamina],epReferenceStat:H.StatSpellPower,displayStats:[H.StatHealth,H.StatMana,H.StatStamina,H.StatIntellect,H.StatSpellPower,H.StatSpellHit,H.StatSpellCrit,H.StatSpellHaste,H.StatMastery,H.StatMP5,H.StatStamina],defaults:{gear:z.gear,epWeights:C.fromMap({[H.StatIntellect]:.18,[H.StatSpellPower]:1,[H.StatSpellHit]:.93,[H.StatSpellCrit]:.53,[H.StatSpellHaste]:.81,[H.StatMastery]:1,[H.StatStamina]:.01}),consumes:K,talents:q.data,specOptions:J,raidBuffs:N,partyBuffs:R.create({}),individualBuffs:Q,debuffs:Z,other:$},playerIconInputs:[L()],includeBuffDebuffInputs:[s,l,n,o,i,r,c,p,d],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[V(),m,S,u,f]},itemSwapSlots:[F.ItemSlotMainHand,F.ItemSlotOffHand,F.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{talents:[q],rotations:[_],gear:[U,E,z]},autoRotation:e=>_.rotation.rotation,raidSimPresets:[{spec:M.SpecDestructionWarlock,talents:q.data,specOptions:J,consumes:K,defaultFactionRaces:{[B.Unknown]:W.RaceUnknown,[B.Alliance]:W.RaceHuman,[B.Horde]:W.RaceOrc},defaultGear:{[B.Unknown]:{},[B.Alliance]:{1:U.gear,2:E.gear,3:z.gear},[B.Horde]:{1:U.gear,2:E.gear,3:z.gear}},otherDefaults:$}]});class Y extends g{constructor(e,t){super(e,t,X)}}export{Y as D};
//# sourceMappingURL=sim-CCP_c6AX.chunk.js.map
