import{o as e,q as t,s as a,a6 as s,w as n,T as i,F as r,J as l}from"./preset_utils-Cf2AMUmT.chunk.js";import{a1 as o,G as d,aY as c,aZ as g,a_ as p,a$ as S,aT as f,aU as m,a6 as h,a7 as u,a8 as P,a9 as I,aa as O,b as y,a as H,ab as M,ac as k,ad as A,ae as b,af as w,ag as T,ah as C,S as G,F as R,R as B}from"./detailed_results-Bq3U1zBE.chunk.js";import{A as x,J as E}from"./inputs-DKS8583v.chunk.js";const F={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:67485}}}},{action:{castSpell:{spellId:{spellId:48806}}}},{action:{castSpell:{spellId:{spellId:53408}}}},{action:{castSpell:{spellId:{spellId:35395}}}},{action:{castSpell:{spellId:{spellId:53385}}}},{action:{condition:{auraIsActive:{auraId:{spellId:53488}}},castSpell:{spellId:{spellId:48801}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:48819}}}}]},j={items:[{id:65216,enchant:4208,gems:[68779,52240],reforging:161},{id:60227,gems:[52206],reforging:122},{id:65142,enchant:4202,gems:[52206],reforging:144},{id:65117,enchant:4100},{id:60344,enchant:4102,gems:[52206,52213],reforging:154},{id:60228,enchant:4256,gems:[52240,0],reforging:154},{id:65215,enchant:4106,gems:[52206,0],reforging:151},{id:65040,gems:[52206,52206],reforging:147},{id:65217,enchant:4126,gems:[52255,52255]},{id:65075,enchant:4094,gems:[52206],reforging:159},{id:60226,gems:[52240],reforging:144},{id:65106,reforging:161},{id:65072},{id:62469},{id:65003,enchant:4099},{},{id:64674,gems:[52255],reforging:158}]},D={items:[{id:60346,enchant:4208,gems:[68779,52240],reforging:154},{id:59442},{id:59471,enchant:4202,gems:[52206]},{id:59507,enchant:4100,reforging:151},{id:60344,enchant:4102,gems:[52206,52213]},{id:59118,enchant:4256,gems:[0]},{id:60345,enchant:4106,gems:[52206,0],reforging:152},{id:62384,gems:[52206,52206]},{id:60347,enchant:4126,gems:[52255,52255]},{id:59464,enchant:4094,gems:[52206]},{id:58185},{id:59518,reforging:161},{id:59224,reforging:158},{id:62469},{id:63679,enchant:4099},{},{id:64674,gems:[52255],reforging:158}]},W=e("Preraid",{items:[{id:59359,enchant:4208,gems:[68779,59489,59480]},{id:62447,reforging:154},{id:56318,enchant:4202,gems:[52206]},{id:56397,enchant:4100,reforging:147},{id:55060,enchant:4102,gems:[52206],reforging:146},{id:57870,enchant:4256,gems:[52206,0]},{id:58099,enchant:4106,gems:[52206,0]},{id:62384,gems:[52206,52255],reforging:146},{id:56367,enchant:4126,gems:[52255,52213],reforging:146},{id:62418,enchant:4094,gems:[52206],reforging:129},{id:56388},{id:56365,reforging:161},{id:56393,reforging:154},{id:56285},{id:64377,enchant:4099,reforging:147},{},{id:62243,gems:[52255]}]}),v=e("P1 non-Hc",D),J=e("P1 BiS",j),U=t("Default",F),_={name:"Ret",data:o.create({talentsString:"203002-02-23203213211113002311",glyphs:d.create({prime1:c.GlyphOfSealOfTruth,prime2:c.GlyphOfExorcism,prime3:c.GlyphOfTemplarSVerdict,major1:g.GlyphOfTheAsceticCrusader,major2:g.GlyphOfHammerOfWrath,major3:g.GlyphOfConsecration,minor1:p.GlyphOfRighteousness,minor2:p.GlyphOfTruth,minor3:p.GlyphOfBlessingOfMight})})},L=S.create({classOptions:{aura:f.RetributionAura,judgement:m.JudgementOfWisdom}}),V=h.create({flask:u.FlaskOfTitanicStrength,food:P.FoodBeerBasedCrocolisk,defaultPotion:I.GolembloodPotion,prepopPotion:I.GolembloodPotion,tinkerHands:O.TinkerHandsSynapseSprings});y.Engineering,y.Jewelcrafting;const q=a(G.SpecRetributionPaladin,{cssClass:"retribution-paladin-sim-ui",cssScheme:H.getCssClass(H.Paladin),knownIssues:[],epStats:[M.StatStrength,M.StatAgility,M.StatIntellect,M.StatMP5,M.StatAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatExpertise,M.StatSpellPower,M.StatSpellCrit,M.StatSpellHit,M.StatSpellHaste,M.StatMastery],epPseudoStats:[k.PseudoStatMainHandDps],epReferenceStat:M.StatAttackPower,displayStats:[M.StatStrength,M.StatAgility,M.StatIntellect,M.StatMP5,M.StatAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatExpertise,M.StatSpellHaste,M.StatSpellPower,M.StatSpellCrit,M.StatSpellHit,M.StatMana,M.StatHealth,M.StatMastery],defaults:{gear:W.gear,epWeights:A.fromMap({[M.StatStrength]:2.53,[M.StatAgility]:1.13,[M.StatIntellect]:.15,[M.StatSpellPower]:.32,[M.StatSpellHit]:.41,[M.StatSpellCrit]:.01,[M.StatSpellHaste]:.12,[M.StatMP5]:.05,[M.StatAttackPower]:1,[M.StatMeleeHit]:1.96,[M.StatMeleeCrit]:1.16,[M.StatMeleeHaste]:1.44,[M.StatExpertise]:1.8},{[k.PseudoStatMainHandDps]:7.33}),consumes:V,talents:_.data,specOptions:L,raidBuffs:b.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:w.create({}),individualBuffs:T.create({}),debuffs:C.create({exposeArmor:!0,bloodFrenzy:!0,mangle:!0,ebonPlaguebringer:!0,criticalMass:!0})},playerIconInputs:[x(),E()],includeBuffDebuffInputs:[s],excludeBuffDebuffInputs:[],otherInputs:{inputs:[n,i,r]},encounterPicker:{showExecuteProportion:!1},presets:{rotations:[U],talents:[_],gear:[W,v,J]},autoRotation:e=>U.rotation.rotation,raidSimPresets:[{spec:G.SpecRetributionPaladin,talents:_.data,specOptions:L,consumes:V,defaultFactionRaces:{[R.Unknown]:B.RaceUnknown,[R.Alliance]:B.RaceHuman,[R.Horde]:B.RaceBloodElf},defaultGear:{[R.Unknown]:{},[R.Alliance]:{1:W.gear},[R.Horde]:{1:W.gear}}}]});class z extends l{constructor(e,t){super(e,t,q)}}export{z as R};
//# sourceMappingURL=sim-ClxAUC9U.chunk.js.map