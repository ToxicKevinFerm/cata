import{o as e,q as s,s as a,t,w as l,T as n,F as r,J as o}from"./preset_utils-Cf2AMUmT.chunk.js";import{a1 as i,G as p,bx as c,by as d,bz as h,bA as m,bB as g,a6 as u,a7 as I,a8 as S,a9 as f,aa as v,b as O,a as T,ab as A,ac as y,ad as P,ae as G,af as k,ag as b,ah as R,S as C,F as E,R as w}from"./detailed_results-Bq3U1zBE.chunk.js";import{S as x,R as M,a as H,b as B,c as L,D as F}from"./inputs-BOP9d071.chunk.js";const D={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:12328}}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}},{isExecutePhase:{threshold:"E20"}}]}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:1719}}}},{hide:!0,action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:85730}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}},{isExecutePhase:{threshold:"E20"}}]}}]}},castSpell:{spellId:{spellId:85730}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:1134}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"60"}}}},{auraIsActive:{auraId:{spellId:85730}}},{auraIsActive:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:85730}}},rhs:{const:{val:"1s"}}}},{not:{val:{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:1719}}},rhs:{const:{val:"1s"}}}}}},{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},{not:{val:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}}}]}}]}},castSpell:{spellId:{spellId:78}}}},{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},castSpell:{spellId:{spellId:6544}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:772}}}}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:772}}}]}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60503}}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:2457}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60503}}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:7384}}}},{hide:!0,action:{castSpell:{spellId:{spellId:12294}}}},{action:{condition:{or:{vals:[{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:84586}}},rhs:{const:{val:"1.5s"}}}},{not:{val:{auraIsActive:{auraId:{spellId:57519}}}}}]}},castSpell:{spellId:{spellId:12294}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}}},castSpell:{spellId:{spellId:86346}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{gcdIsReady:{}},{not:{val:{spellCanCast:{spellId:{spellId:12294}}}}},{not:{val:{spellCanCast:{spellId:{spellId:86346}}}}},{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:2457}}}},{action:{condition:{auraIsActive:{auraId:{spellId:60503}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:60503}}}}},{gcdIsReady:{}}]}},castSpell:{spellId:{spellId:2458}}}},{action:{castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:86346}}}},{action:{castSpell:{spellId:{spellId:1464}}}},{action:{castSpell:{spellId:{spellId:2458}}}}]},W={items:[{id:65266,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120,reforging:140},{id:65268,enchant:4202,gems:[52206],reforging:152},{id:65117,enchant:4100,reforging:151},{id:65264,enchant:4102,gems:[52206,52213],reforging:154},{id:60228,enchant:4256,gems:[52222,52206],reforging:154},{id:65071,enchant:4106,gems:[52222,52206],reforging:154},{id:65040,gems:[52206,52206],reforging:139},{id:65267,enchant:4126,gems:[52206,52206],reforging:166},{id:65012,enchant:4094,gems:[52222],reforging:153},{id:60226,gems:[52222],reforging:165},{id:65382,randomSuffix:-120,reforging:139},{id:65072,reforging:159},{id:59461},{id:65003,enchant:4099,reforging:139},{},{id:60210,reforging:166}]},j=e("Preraid Arms",{items:[{id:59359,enchant:4208,gems:[68779,59489,59478]},{id:62447,reforging:151},{id:58100,enchant:4202,gems:[52206],reforging:159},{id:67140,enchant:4100,reforging:153},{id:55060,enchant:4102,gems:[52206],reforging:168},{id:56301,enchant:4256,gems:[52206]},{id:58099,enchant:4106,gems:[52206,52206],reforging:168},{id:62384,gems:[52206,52206],reforging:165},{id:67141,enchant:4126,gems:[52206,52206],reforging:152},{id:56381,enchant:4104,gems:[52206]},{id:56415},{id:56365,reforging:161},{id:58180,reforging:137},{id:62049},{id:64377,enchant:4099,reforging:139},{},{id:59367,gems:[52206],reforging:151}]}),U=e("P1 Arms",W),q=s("Arms",D),z={name:"Arms",data:i.create({talentsString:"30220303120212312211-0322-3",glyphs:p.create({prime1:c.GlyphOfMortalStrike,prime2:c.GlyphOfOverpower,prime3:c.GlyphOfSlam,major1:d.GlyphOfCleaving,major2:d.GlyphOfSweepingStrikes,major3:d.GlyphOfThunderClap,minor1:h.GlyphOfBerserkerRage,minor2:h.GlyphOfCommand,minor3:h.GlyphOfBattle})})},V=m.create({classOptions:{startingRage:0,useShatteringThrow:!0,shout:g.WarriorShoutCommanding},useRecklessness:!0,disableExpertiseGemming:!1}),_=u.create({flask:I.FlaskOfTitanicStrength,food:S.FoodBeerBasedCrocolisk,defaultPotion:f.GolembloodPotion,prepopPotion:f.GolembloodPotion,tinkerHands:v.TinkerHandsSynapseSprings}),J={profession1:O.Engineering,profession2:O.Blacksmithing,distanceFromTarget:5},K=a(C.SpecArmsWarrior,{cssClass:"arms-warrior-sim-ui",cssScheme:T.getCssClass(T.Warrior),knownIssues:[],epStats:[A.StatStrength,A.StatAgility,A.StatAttackPower,A.StatExpertise,A.StatMeleeHit,A.StatMeleeCrit,A.StatMeleeHaste,A.StatMastery],epPseudoStats:[y.PseudoStatMainHandDps,y.PseudoStatOffHandDps],epReferenceStat:A.StatAttackPower,displayStats:[A.StatHealth,A.StatStamina,A.StatStrength,A.StatAgility,A.StatAttackPower,A.StatExpertise,A.StatMeleeHit,A.StatMeleeCrit,A.StatMeleeHaste,A.StatMastery],defaults:{gear:j.gear,epWeights:P.fromMap({[A.StatStrength]:2.21,[A.StatAgility]:.88,[A.StatAttackPower]:1,[A.StatExpertise]:1.08,[A.StatMeleeHit]:0,[A.StatMeleeCrit]:1.13,[A.StatMeleeHaste]:.53,[A.StatMastery]:.53},{[y.PseudoStatMainHandDps]:9.27,[y.PseudoStatOffHandDps]:0}),other:J,consumes:_,talents:z.data,specOptions:V,raidBuffs:G.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:k.create({}),individualBuffs:b.create({}),debuffs:R.create({bloodFrenzy:!0,mangle:!0,sunderArmor:!0,curseOfWeakness:!0,ebonPlaguebringer:!0})},playerIconInputs:[x(),M(),H()],includeBuffDebuffInputs:[t],excludeBuffDebuffInputs:[],otherInputs:{inputs:[B(),L(),F(),l,n,r]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[z],rotations:[q],gear:[j,U]},autoRotation:e=>q.rotation.rotation,raidSimPresets:[{spec:C.SpecArmsWarrior,talents:z.data,specOptions:V,consumes:_,defaultFactionRaces:{[E.Unknown]:w.RaceUnknown,[E.Alliance]:w.RaceHuman,[E.Horde]:w.RaceOrc},defaultGear:{[E.Unknown]:{},[E.Alliance]:{1:U.gear},[E.Horde]:{1:U.gear}},otherDefaults:J}]});class N extends o{constructor(e,s){super(e,s,K)}}export{N as A};
//# sourceMappingURL=sim-C5P9maH9.chunk.js.map