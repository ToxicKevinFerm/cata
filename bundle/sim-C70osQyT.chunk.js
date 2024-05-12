import{o as e,q as a,s as t,a6 as s,R as l,U as o,N as n,O as i,$ as r,Q as c,af as p,a3 as d,w as m,V as S,T as u,a9 as I,J as g}from"./preset_utils-Cf2AMUmT.chunk.js";import{a1 as f,bv as h,bu as v,a6 as P,a9 as O,a7 as w,a8 as k,ae as T,ag as y,ah as A,b,a as D,ab as H,ad as C,af as F,aj as R,S as M,F as B,R as W}from"./detailed_results-Bq3U1zBE.chunk.js";import{P as x,D as V}from"./inputs-CxtZSSYN.chunk.js";const j={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:47809}}},doAtValue:{const:{val:"-2.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:50589}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:47867}}}},{action:{multidot:{spellId:{spellId:47813},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:47867}}}}},{not:{val:{dotIsActive:{spellId:{spellId:47864}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"22s"}}}}]}},castSpell:{spellId:{spellId:47864}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:63321}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:57946}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:47811}}},rhs:{spellCastTime:{spellId:{spellId:47811}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},castSpell:{spellId:{spellId:47811}}}},{action:{condition:{auraIsActive:{auraId:{spellId:63167}}},castSpell:{spellId:{spellId:47825}}}},{action:{condition:{auraIsActive:{auraId:{spellId:71165}}},castSpell:{spellId:{spellId:47838}}}},{action:{castSpell:{spellId:{spellId:47809}}}},{action:{castSpell:{spellId:{spellId:57946}}}}]},G={items:[]},L={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40153]},{id:50668,enchant:3722,gems:[40133]},{id:50717,enchant:1144,gems:[40133,40113,40153]},{id:50686,enchant:2332,gems:[40133,0]},{id:51230,enchant:3604,gems:[40133,0]},{id:50702,gems:[40153,40113,40113]},{id:51232,enchant:3872,gems:[40113,40113]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50398,gems:[40153]},{id:50636,gems:[40153]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50635},{id:50631,gems:[40153]}]},U=e("Pre-raid Preset",{items:[]}),E=e("P1 Preset",G),z=e("P4 Wrath",L,{tooltip:"This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/"}),_=a("Demo",j),q={name:"Demonology",data:f.create({})},J=h.create({classOptions:{summon:v.Felguard,detonateSeed:!0}}),K=P.create({defaultPotion:O.VolcanicPotion,prepopPotion:O.VolcanicPotion,flask:w.FlaskOfTheDraconicMind,food:k.FoodSeafoodFeast}),N=T.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),Q=y.create({vampiricTouch:!0}),Z=A.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0,judgement:!0}),$={distanceFromTarget:25,profession1:b.Engineering,profession2:b.Tailoring,channelClipDelay:150},X=t(M.SpecDemonologyWarlock,{cssClass:"demonology-warlock-sim-ui",cssScheme:D.getCssClass(D.Warlock),knownIssues:["Drain Soul is currently disabled for APL rotations"],epStats:[H.StatIntellect,H.StatSpellPower,H.StatSpellHit,H.StatSpellCrit,H.StatSpellHaste,H.StatMastery,H.StatStamina],epReferenceStat:H.StatSpellPower,displayStats:[H.StatHealth,H.StatMana,H.StatStamina,H.StatIntellect,H.StatSpellPower,H.StatSpellHit,H.StatSpellCrit,H.StatSpellHaste,H.StatMastery,H.StatMP5,H.StatStamina],defaults:{gear:z.gear,epWeights:C.fromMap({[H.StatIntellect]:.18,[H.StatSpellPower]:1,[H.StatSpellHit]:.93,[H.StatSpellCrit]:.53,[H.StatSpellHaste]:.81,[H.StatMastery]:1,[H.StatStamina]:.01}),consumes:K,talents:q.data,specOptions:J,raidBuffs:N,partyBuffs:F.create({}),individualBuffs:Q,debuffs:Z,other:$},playerIconInputs:[x()],includeBuffDebuffInputs:[s,l,o,n,i,r,c,p,d],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[V(),m,S,u,I]},itemSwapSlots:[R.ItemSlotMainHand,R.ItemSlotOffHand,R.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{talents:[q],rotations:[_],gear:[U,E,z]},autoRotation:e=>_.rotation.rotation,raidSimPresets:[{spec:M.SpecDemonologyWarlock,talents:q.data,specOptions:J,consumes:K,defaultFactionRaces:{[B.Unknown]:W.RaceUnknown,[B.Alliance]:W.RaceHuman,[B.Horde]:W.RaceOrc},defaultGear:{[B.Unknown]:{},[B.Alliance]:{1:U.gear,2:E.gear,3:z.gear},[B.Horde]:{1:U.gear,2:E.gear,3:z.gear}},otherDefaults:$}]});class Y extends g{constructor(e,a){super(e,a,X)}}export{Y as D};
//# sourceMappingURL=sim-C70osQyT.chunk.js.map
