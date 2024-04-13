package death_knight

import (
	"github.com/wowsims/cata/sim/core"
)

var IcyTouchActionID = core.ActionID{SpellID: 45477}

func (dk *DeathKnight) registerIcyTouchSpell() {
	dk.IcyTouch = dk.RegisterSpell(core.SpellConfig{
		ActionID:       IcyTouchActionID,
		Flags:          core.SpellFlagAPL,
		SpellSchool:    core.SpellSchoolFrost,
		ProcMask:       core.ProcMaskSpellDamage,
		ClassSpellMask: DeathKnightSpellIcyTouch,

		RuneCost: core.RuneCostOptions{
			FrostRuneCost:  1,
			RunicPowerGain: 10,
			Refundable:     true,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
		},

		DamageMultiplier: 1,
		CritMultiplier:   dk.DefaultMeleeCritMultiplier(),

		ThreatMultiplier: 1.0,

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := dk.ClassBaseScaling*0.46799999475 + spell.MeleeAttackPower()*0.2

			result := spell.CalcDamage(sim, target, baseDamage, spell.OutcomeMagicHitAndCrit)
			spell.SpendRefundableCost(sim, result)

			if result.Landed() {
				dk.FrostFeverSpell.Cast(sim, target)
			}

			spell.DealDamage(sim, result)
		},
	})
}

// func (dk *DeathKnight) registerDrwIcyTouchSpell() {
// 	dk.RuneWeapon.IcyTouch = dk.RuneWeapon.RegisterSpell(core.SpellConfig{
// 		ActionID:    IcyTouchActionID,
// 		SpellSchool: core.SpellSchoolFrost,
// 		ProcMask:    core.ProcMaskSpellDamage,
// 		//Flags:       core.SpellFlagIgnoreAttackerModifiers,

// 		BonusCritRating:  dk.rimeCritBonus() * core.CritRatingPerCritChance,
// 		DamageMultiplier: 1 + 0.05*float64(dk.Talents.ImprovedIcyTouch),
// 		CritMultiplier:   dk.DefaultMeleeCritMultiplier(),
// 		ThreatMultiplier: 1,

// 		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
// 			baseDamage := sim.Roll(227, 245) + sigilBonus + 0.1*dk.RuneWeapon.getImpurityBonus(spell)

// 			result := spell.CalcDamage(sim, target, baseDamage, spell.OutcomeMagicHitAndCrit)
// 			if result.Landed() {
// 				dk.RuneWeapon.FrostFeverSpell.Cast(sim, target)
// 			}
// 			spell.DealDamage(sim, result)
// 		},
// 	})
// }
