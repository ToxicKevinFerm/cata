import{o as e,s as a,w as t,T as s,D as n,J as i}from"./preset_utils-Cf2AMUmT.chunk.js";import{a1 as d,aS as c,aT as m,aU as r,a6 as g,a9 as o,a7 as l,a8 as h,a as u,ab as S,ad as p,ae as f,af as P,ag as k,ah as w,ax as y,S as F,F as H,R as M}from"./detailed_results-Bq3U1zBE.chunk.js";import{A as O,J as T}from"./inputs-DKS8583v.chunk.js";const b={items:[{id:40298,enchant:3819,gems:[41401,40012]},{id:44662,gems:[40012]},{id:40573,enchant:3809,gems:[40012]},{id:44005,enchant:3831,gems:[40012]},{id:40569,enchant:3832,gems:[40012,40012]},{id:40332,enchant:1119,gems:[40012,0]},{id:40570,enchant:3604,gems:[40012,0]},{id:40259,gems:[40012]},{id:40572,enchant:3721,gems:[40027,40012]},{id:40592,enchant:4223},{id:40399},{id:40375},{id:44255},{id:37111},{id:40395,enchant:2666},{id:40401,enchant:1128},{id:40705}]},I={items:[{id:46180,enchant:3820,gems:[41401,40094]},{id:45443,gems:[40012]},{id:46182,enchant:3810,gems:[40012]},{id:45486,enchant:3831,gems:[40012]},{id:45445,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40012,0]},{id:46179,enchant:3604,gems:[40047,0]},{id:45616,gems:[40012,40012,40012]},{id:46181,enchant:3721,gems:[40012,40012]},{id:45537,enchant:4223,gems:[40012,40012]},{id:45614,gems:[45882]},{id:45946,gems:[40012]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:45470,enchant:1128,gems:[40012]},{id:40705}]},B={items:[{id:46180,enchant:3820,gems:[41401,40123]},{id:47468,gems:[40123]},{id:46182,enchant:3810,gems:[40123]},{id:47551,enchant:3831,gems:[40123]},{id:47471,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40123,0]},{id:46179,enchant:3604,gems:[40151,0]},{id:47997,gems:[40175,40123]},{id:46181,enchant:3721,gems:[40123,40123]},{id:47424,enchant:4223,gems:[40123,40123]},{id:47439,gems:[40123]},{id:45614,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:47448,enchant:1128,gems:[40123]},{id:40705}]},R={items:[{id:51272,enchant:3820,gems:[41401,49110]},{id:51871,gems:[40123]},{id:51273,enchant:3810,gems:[40123]},{id:51826,enchant:3831,gems:[40123]},{id:50680,enchant:3832,gems:[42148,42148,42148]},{id:50687,enchant:1119,gems:[40123,0]},{id:50703,enchant:3604,gems:[40123,40123,0]},{id:51919,gems:[40123,40123,40123]},{id:49891,enchant:3721,gems:[40123,40123,40123]},{id:51920,enchant:4223,gems:[40123,40123]},{id:50610,gems:[40123]},{id:50400,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:50616,enchant:1128,gems:[40123]},{id:40705}]},A=e("PreRaid",{items:[{id:44949,enchant:3819,gems:[41401,40012]},{id:42647,gems:[42702]},{id:37673,enchant:3809,gems:[40012]},{id:41609,enchant:3831},{id:39629,enchant:3832,gems:[40012,40012]},{id:37788,enchant:1119,gems:[0]},{id:39632,enchant:3604,gems:[40012,0]},{id:40691,gems:[40012,40012]},{id:37362,enchant:3721,gems:[40012,40012]},{id:44202,enchant:4223,gems:[40094]},{id:44283},{id:37694},{id:44255},{id:37111},{id:37169,enchant:2666},{id:40700,enchant:1128},{id:40705}]}),C=e("P1 Preset",b),j=e("P2 Preset",I),x=e("P3 Preset",B),D=e("P4 Preset",R),U={name:"Standard",data:d.create({})},W=c.create({classOptions:{aura:m.DevotionAura,judgement:r.NoJudgement}}),v=g.create({defaultPotion:o.MythicalManaPotion,flask:l.FlaskOfTheFrostWyrm,food:h.FoodFishFeast}),E=a(F.SpecHolyPaladin,{cssClass:"holy-paladin-sim-ui",cssScheme:u.getCssClass(u.Paladin),knownIssues:[],epStats:[S.StatIntellect,S.StatSpirit,S.StatSpellPower,S.StatSpellCrit,S.StatSpellHaste,S.StatMP5,S.StatMastery],epReferenceStat:S.StatSpellPower,displayStats:[S.StatHealth,S.StatMana,S.StatStamina,S.StatIntellect,S.StatSpirit,S.StatSpellPower,S.StatSpellCrit,S.StatSpellHaste,S.StatMP5,S.StatMastery],defaults:{gear:C.gear,epWeights:p.fromMap({[S.StatIntellect]:.38,[S.StatSpirit]:.34,[S.StatSpellPower]:1,[S.StatSpellCrit]:.69,[S.StatSpellHaste]:.77,[S.StatMP5]:0}),consumes:v,talents:U.data,specOptions:W,raidBuffs:f.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:P.create({}),individualBuffs:k.create({vampiricTouch:!0}),debuffs:w.create({judgement:!0,ebonPlaguebringer:!0,shadowAndFlame:!0})},playerIconInputs:[O(),T()],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[t,s,n]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[U],rotations:[],gear:[A,C,j,x,D]},autoRotation:e=>y.create(),raidSimPresets:[{spec:F.SpecHolyPaladin,talents:U.data,specOptions:W,consumes:v,defaultFactionRaces:{[H.Unknown]:M.RaceUnknown,[H.Alliance]:M.RaceHuman,[H.Horde]:M.RaceBloodElf},defaultGear:{[H.Unknown]:{},[H.Alliance]:{1:C.gear,2:j.gear,3:x.gear,4:D.gear},[H.Horde]:{1:C.gear,2:j.gear,3:x.gear,4:D.gear}}}]});class J extends i{constructor(e,a){super(e,a,E)}}export{J as H};
//# sourceMappingURL=sim-BcL5DGkI.chunk.js.map
