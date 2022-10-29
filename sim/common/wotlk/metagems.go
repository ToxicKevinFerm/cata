package wotlk

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func init() {
	// Keep these in order by item ID.

	// TODO: Destructive Skyflare (1% spell reflect)
	// TODO: Invigorating Earthsiege (heal on crits)

	core.NewItemEffect(41333, func(agent core.Agent) {
		agent.GetCharacter().MultiplyStat(stats.Intellect, 1.02)
	})

	core.NewItemEffect(41377, func(agent core.Agent) {
		character := agent.GetCharacter()
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexArcane] *= 0.98
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexFire] *= 0.98
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexFrost] *= 0.98
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexHoly] *= 0.98
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexNature] *= 0.98
		character.PseudoStats.SchoolDamageTakenMultiplier[stats.SchoolIndexShadow] *= 0.98
	})

	core.NewItemEffect(41380, func(agent core.Agent) {
		character := agent.GetCharacter()
		character.AddStat(stats.Armor, character.Equip.Stats()[stats.Armor]*0.02)
	})

	core.NewItemEffect(41389, func(agent core.Agent) {
		agent.GetCharacter().MultiplyStat(stats.Mana, 1.02)
	})

	core.NewItemEffect(41395, func(agent core.Agent) {
		character := agent.GetCharacter()
		character.PseudoStats.ThreatMultiplier *= 0.98
	})

	core.NewItemEffect(41396, func(agent core.Agent) {
		agent.GetCharacter().MultiplyStat(stats.BlockValue, 1.05)
	})

	core.NewItemEffect(41400, func(agent core.Agent) {
		character := agent.GetCharacter()
		procAura := character.NewTemporaryStatsAura("Thundering Skyflare Diamond Proc", core.ActionID{SpellID: 55379}, stats.Stats{stats.MeleeHaste: 480}, time.Second*6)

		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 40,
		}
		ppmm := character.AutoAttacks.NewPPMManager(1.0, core.ProcMaskMeleeOrRanged)

		character.RegisterAura(core.Aura{
			Label:    "Thundering Skyflare Diamond",
			Duration: core.NeverExpires,
			OnReset: func(aura *core.Aura, sim *core.Simulation) {
				aura.Activate(sim)
			},
			OnSpellHitDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				// Mask 68, melee or ranged auto attacks.
				if !result.Landed() || !spell.ProcMask.Matches(core.ProcMaskWhiteHit) {
					return
				}
				if !icd.IsReady(sim) {
					return
				}
				if !ppmm.Proc(sim, spell.ProcMask, "Thundering Skyflare Diamond") {
					return
				}
				icd.Use(sim)
				procAura.Activate(sim)
			},
		})
	})

	core.NewItemEffect(41401, func(agent core.Agent) {
		character := agent.GetCharacter()
		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 15,
		}
		manaMetrics := character.NewManaMetrics(core.ActionID{ItemID: 41401})

		character.RegisterAura(core.Aura{
			Label:    "Insightful Earthsiege Diamond",
			Duration: core.NeverExpires,
			OnReset: func(aura *core.Aura, sim *core.Simulation) {
				aura.Activate(sim)
			},
			OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
				if !icd.IsReady(sim) || sim.RandomFloat("Insightful Earthsiege Diamond") > 0.05 {
					return
				}
				icd.Use(sim)
				character.AddMana(sim, 600, manaMetrics, false)
			},
		})
	})

	// These are handled in character.go, but create empty effects so they are included in tests.
	core.NewItemEffect(41285, func(_ core.Agent) {}) // Chaotic Skyflare Diamond
	core.NewItemEffect(41376, func(_ core.Agent) {}) // Revitalizing Skyflare Diamond
	core.NewItemEffect(41398, func(_ core.Agent) {}) // Relentless Earthsiege Diamond
}
