import { Spec } from '../proto/common.js';
import { DeathknightTalents, DeathknightMajorGlyph, DeathknightMinorGlyph } from '../proto/deathknight.js';
import { Player } from '../player.js';

import { GlyphsConfig } from './glyphs_picker.js';
import { TalentsConfig, newTalentsConfig } from './talents_picker.js';

import DkTalentsJson from './trees/deathknight.json';

export const deathknightTalentsConfig: TalentsConfig<DeathknightTalents> = newTalentsConfig(DkTalentsJson);

export const deathKnightGlyphsConfig: GlyphsConfig = {
	primeGlyphs: {
		[DeathKnightPrimeGlyph.GlyphOfDeathAndDecay]: {
			name: 'Glyph of Death and Decay',
			description: 'Increases the duration of your Death and Decay spell by 50%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathanddecay.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfDeathCoil]: {
			name: 'Glyph of Death Coil',
			description: 'Increases the damage or healing done by Death Coil by 15%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfDeathStrike]: {
			name: 'Glyph of Death Strike',
			description: 'Increases your Death Strike\'s damage by 2% for every 5 Runic Power you currently have (up to a maximum of 40%). The Runic Power is not consumed by this effect.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfFrostStrike]: {
			name: 'Glyph of Frost Strike',
			description: 'Reduces the cost of your Frost Strike by 8 Runic Power.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_empowerruneblade2.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfHeartStrike]: {
			name: 'Glyph of Heart Strike',
			description: 'Increases the damage of your Heart Strike ability by 30%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_40.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfHowlingBlast]: {
			name: 'Glyph of Howling Blast',
			description: 'Your Howling Blast ability now infects your targets with Frost Fever.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_arcticwinds.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfIcyTouch]: {
			name: 'Glyph of Icy Touch',
			description: 'Your Frost Fever disease deals 20% additional damage.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_icetouch.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfObliterate]: {
			name: 'Glyph of Obliterate',
			description: 'Increases the damage of your Obliterate ability by 20%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_classicon.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfRaiseDead]: {
			name: 'Glyph of Raise Dead',
			description: 'Your Ghoul receives an additional 40% of your Strength and 40% of your Stamina.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_animatedead.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfRuneStrike]: {
			name: 'Glyph of Rune Strike',
			description: 'Increases the critical strike chance of your Rune Strike by 10%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_darkconviction.jpg',
		},
		[DeathKnightPrimeGlyph.GlyphOfScourgeStrike]: {
			name: 'Glyph of Scourge Strike',
			description: 'Increases the Shadow damage portion of your Scourge Strike by 30%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_scourgestrike.jpg',
		},
	},
	majorGlyphs: {
		[DeathKnightMajorGlyph.GlyphOfAntiMagicShell]: {
			name: 'Glyph of Anti-Magic Shell',
			description: 'Increases the duration of your Anti-Magic Shell by 2 sec.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfBloodBoil]: {
			name: 'Glyph of Blood Boil',
			description: 'Increases the radius of your Blood Boil ability by 50%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodboil.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfBoneShield]: {
			name: 'Glyph of Bone Shield',
			description: 'Increases your movement speed by 15% while Bone Shield is active. This does not stack with other movement-speed increasing effects.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_deathknight_boneshield.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfChainsOfIce]: {
			name: 'Glyph of Chains of Ice',
			description: 'Your Chains of Ice also causes 144 to 156 Frost damage, with additional damage depending on your attack power.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfDancingRuneWeapon]: {
			name: 'Glyph of Dancing Rune Weapon',
			description: 'Increases your threat generation by 50% while your Dancing Rune Weapon is active.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_07.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfDarkSuccor]: {
			name: 'Glyph of Dark Succor',
			description: 'Your next Death Strike performed while in Frost or Unholy Presence, within 15 sec after killing an enemy that yields experience or honor, will restore at least 20% of your maximum health.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfDeathGrip]: {
			name: 'Glyph of Death Grip',
			description: 'Increases the range of your Death Grip ability by 5 yards.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_strangulate.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfHungeringCold]: {
			name: 'Glyph of Hungering Cold',
			description: 'Your Hungering Cold ability no longer costs runic power.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_15.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfPestilence]: {
			name: 'Glyph of Pestilence',
			description: 'Increases the radius of your Pestilence effect by 5 yards.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_plaguecloud.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfPillarOfFrost]: {
			name: 'Glyph of Pillar of Frost',
			description: 'Empowers your Pillar of Frost, making you immune to all effects that cause loss of control of your character, but also freezing you in place while the ability is active.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_deathknight_pillaroffrost.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfRuneTap]: {
			name: 'Glyph of Rune Tap',
			description: 'Your Rune Tap also heals your party for 5% of their maximum health.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_runetap.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfStrangulate]: {
			name: 'Glyph of Strangulate',
			description: 'Increases the Silence duration of your Strangulate ability by 2 sec when used on a target who is casting a spell.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soulleech_3.jpg',
		},
		[DeathKnightMajorGlyph.GlyphOfVampiricBlood]: {
			name: 'Glyph of Vampiric Blood',
			description: 'Increases the bonus healing received while your Vampiric Blood is active by an additional 15%, but your Vampiric Blood no longer grants you health.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg',
		},
	},
	minorGlyphs: {
		[DeathKnightMinorGlyph.GlyphOfBloodTap]: {
			name: 'Glyph of Blood Tap',
			description: 'Your Blood Tap no longer causes damage to you.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodtap.jpg',
		},
		[DeathKnightMinorGlyph.GlyphOfDeathGate]: {
			name: 'Glyph of Death Gate',
			description: 'Reduces the cast time of your Death Gate spell by 60%.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_teleportundercity.jpg',
		},
		[DeathKnightMinorGlyph.GlyphOfDeathSEmbrace]: {
			name: 'Glyph of Death\'s Embrace',
			description: 'Your Death Coil refunds 20 Runic Power when used to heal an allied minion.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
		},
		[DeathKnightMinorGlyph.GlyphOfHornOfWinter]: {
			name: 'Glyph of Horn of Winter',
			description: 'Increases the duration of your Horn of Winter ability by 1 min.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_horn_02.jpg',
		},
		[DeathKnightMinorGlyph.GlyphOfPathOfFrost]: {
			name: 'Glyph of Path of Frost',
			description: 'Your Path of Frost ability allows you to fall from a greater distance without suffering damage.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_pathoffrost.jpg',
		},
		[DeathKnightMinorGlyph.GlyphOfResilientGrip]: {
			name: 'Glyph of Resilient Grip',
			description: 'When your Death Grip ability fails because its target is immune, its cooldown is reset.',
			iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_strangulate.jpg',
		},
	},
};