package shaman

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
)

func (shaman *Shaman) newTotemSpellConfig(baseCost float64, spellID int32) core.SpellConfig {
	return core.SpellConfig{
		ActionID: core.ActionID{SpellID: spellID},
		Flags:    SpellFlagTotem | core.SpellFlagAPL,

		ManaCost: core.ManaCostOptions{
			BaseCost:   baseCost,
			Multiplier: 1 - 0.15*float64(shaman.Talents.TotemicFocus),
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: time.Second,
			},
		},
	}
}

func (shaman *Shaman) registerWrathOfAirTotemSpell() {
	config := shaman.newTotemSpellConfig(0.11, 3738)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[AirTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.WrathOfAirTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerWindfuryTotemSpell() {
	config := shaman.newTotemSpellConfig(0.11, 8512)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[AirTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.WindfuryTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerManaSpringTotemSpell() {
	config := shaman.newTotemSpellConfig(0.04, 5675)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[WaterTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.ManaSpringTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerHealingStreamTotemSpell() {
	config := shaman.newTotemSpellConfig(0.03, 5394)
	hsHeal := shaman.RegisterSpell(core.SpellConfig{
		ActionID:         core.ActionID{SpellID: 5394},
		SpellSchool:      core.SpellSchoolNature,
		ProcMask:         core.ProcMaskEmpty,
		Flags:            core.SpellFlagHelpful | core.SpellFlagNoOnCastComplete,
		DamageMultiplier: 1 + (0.25 * float64(shaman.Talents.SoothingRains)),
		CritMultiplier:   1,
		ThreatMultiplier: 1,
		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			healing := 28 + spell.HealingPower(target)*0.08272
			spell.CalcAndDealHealing(sim, target, healing, spell.OutcomeHealing)
		},
	})
	config.Hot = core.DotConfig{
		Aura: core.Aura{
			Label: "HealingStreamHot",
		},
		NumberOfTicks: 150,
		TickLength:    time.Second * 2,
		OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
			hsHeal.Cast(sim, target)
		},
	}
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, spell *core.Spell) {
		shaman.TotemExpirations[WaterTotem] = sim.CurrentTime + time.Second*300
		for _, agent := range shaman.Party.Players {
			spell.Hot(&agent.GetCharacter().Unit).Activate(sim)
		}
	}
	shaman.HealingStreamTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerFlametongueTotemSpell() {
	config := shaman.newTotemSpellConfig(0.11, 8227)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[FireTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.FlametongueTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerStrengthOfEarthTotemSpell() {
	config := shaman.newTotemSpellConfig(0.1, 8075)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[EarthTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.StrengthOfEarthTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerTremorTotemSpell() {
	config := shaman.newTotemSpellConfig(0.02, 8143)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[EarthTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.TremorTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerStoneskinTotemSpell() {
	config := shaman.newTotemSpellConfig(0.1, 8071)
	config.ApplyEffects = func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
		shaman.TotemExpirations[EarthTotem] = sim.CurrentTime + time.Second*300
	}
	shaman.StoneskinTotem = shaman.RegisterSpell(config)
}

func (shaman *Shaman) registerCallOfTheElements() {
	airTotem := shaman.getAirTotemSpell(shaman.Totems.Air)
	earthTotem := shaman.getEarthTotemSpell(shaman.Totems.Earth)
	fireTotem := shaman.getFireTotemSpell(shaman.Totems.Fire)
	waterTotem := shaman.getWaterTotemSpell(shaman.Totems.Water)

	totalManaCost := 0.0
	anyTotems := false
	if airTotem != nil {
		totalManaCost += airTotem.DefaultCast.Cost
		anyTotems = true
	}
	if earthTotem != nil {
		totalManaCost += earthTotem.DefaultCast.Cost
		anyTotems = true
	}
	if fireTotem != nil {
		totalManaCost += fireTotem.DefaultCast.Cost
		anyTotems = true
	}
	if waterTotem != nil {
		totalManaCost += waterTotem.DefaultCast.Cost
		anyTotems = true
	}

	shaman.RegisterSpell(core.SpellConfig{
		ActionID: core.ActionID{SpellID: 66842},
		Flags:    core.SpellFlagAPL,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			return anyTotems && shaman.CurrentMana() >= totalManaCost
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			// Save GCD timer value, so we can safely reset it between each totem cast.
			nextGcdAt := shaman.NextGCDAt()

			if airTotem != nil {
				shaman.GCD.Set(sim.CurrentTime)
				airTotem.Cast(sim, target)
			}
			if earthTotem != nil {
				shaman.GCD.Set(sim.CurrentTime)
				earthTotem.Cast(sim, target)
			}
			if fireTotem != nil {
				shaman.GCD.Set(sim.CurrentTime)
				fireTotem.Cast(sim, target)
			}
			if waterTotem != nil {
				shaman.GCD.Set(sim.CurrentTime)
				waterTotem.Cast(sim, target)
			}

			shaman.SetGCDTimer(sim, nextGcdAt)
		},
	})
}

func (shaman *Shaman) getAirTotemSpell(totemType proto.AirTotem) *core.Spell {
	switch totemType {
	case proto.AirTotem_WrathOfAirTotem:
		return shaman.WrathOfAirTotem
	case proto.AirTotem_WindfuryTotem:
		return shaman.WindfuryTotem
	}
	return nil
}

func (shaman *Shaman) getEarthTotemSpell(totemType proto.EarthTotem) *core.Spell {
	switch totemType {
	case proto.EarthTotem_StrengthOfEarthTotem:
		return shaman.StrengthOfEarthTotem
	case proto.EarthTotem_TremorTotem:
		return shaman.TremorTotem
	case proto.EarthTotem_StoneskinTotem:
		return shaman.StoneskinTotem
	case proto.EarthTotem_EarthElementalTotem:
		return shaman.EarthElementalTotem
	}
	return nil
}

func (shaman *Shaman) getFireTotemSpell(totemType proto.FireTotem) *core.Spell {
	switch totemType {
	case proto.FireTotem_SearingTotem:
		return shaman.SearingTotem
	case proto.FireTotem_MagmaTotem:
		return shaman.MagmaTotem
	case proto.FireTotem_FlametongueTotem:
		return shaman.FlametongueTotem
	case proto.FireTotem_FireElementalTotem:
		return shaman.FireElementalTotem
	}
	return nil
}

func (shaman *Shaman) getWaterTotemSpell(totemType proto.WaterTotem) *core.Spell {
	switch totemType {
	case proto.WaterTotem_ManaSpringTotem:
		return shaman.ManaSpringTotem
	case proto.WaterTotem_HealingStreamTotem:
		return shaman.HealingStreamTotem
	}
	return nil
}
