# TaimaninSquad Damage & Stats Formula Analysis

Generated from Ghidra decompilation of libil2cpp.so (98MB ARM64 binary)

---

## CalcDamage Function (BOExecuteManager$$CalcDamage)

**IL2CPP Address:** 0x27FA7E4
**Ghidra Entry:** 0x027fa748

### Decompiled Code (Cleaned)

```c
float CalcDamage(BattleObject battleObj, int targetIndex) {
    float m1, m2, m3, m4, m5;      // Base modifiers
    float t1, t2, t3, t4, t5;      // Target-specific modifiers

    // Get 5 pairs of damage modifiers
    m1 = GetDamageModifier1(battleObj, 0);           // FUN_027fa9e0
    t1 = (targetIndex >= 1) ? GetDamageModifier1(battleObj, targetIndex) : 0.0;

    m2 = GetDamageModifier2(battleObj, 0);           // FUN_027fab64
    t2 = (targetIndex >= 1) ? GetDamageModifier2(battleObj, targetIndex) : 0.0;

    m3 = GetDamageModifier3(battleObj, 0);           // FUN_027fae2c
    t3 = (targetIndex >= 1) ? GetDamageModifier3(battleObj, targetIndex) : 0.0;

    m4 = GetDamageModifier4(battleObj, 0);           // FUN_027fb2d8
    t4 = (targetIndex >= 1) ? GetDamageModifier4(battleObj, targetIndex) : 0.0;

    m5 = GetDamageModifier5(battleObj, 0);           // FUN_027fb558
    t5 = (targetIndex >= 1) ? GetDamageModifier5(battleObj, targetIndex) : 0.0;

    // Check calculation mode
    bool isAdditive = IsCalcDamageFuncType(battleObj) & 1;  // FUN_027fb98c

    if (!isAdditive) {
        // MULTIPLICATIVE MODE - Defense/Resistance stacking
        return (1.0 - m1) * (1.0 - t1) *
               (1.0 - m2) * (1.0 - t2) *
               (1.0 - m3) * (1.0 - t3) *
               (1.0 - m4) * (1.0 - t4) *
               (1.0 - m5) * (1.0 - t5);
    } else {
        // ADDITIVE MODE - Direct sum
        return m1 + t1 + m2 + t2 + m3 + t3 + m4 + t4 + m5 + t5;
    }
}
```

### Modifier Sub-functions

| Address | Inferred Name | Purpose |
|---------|--------------|---------|
| 0x027fa9e0 | GetDamageModifier1 | First damage modifier pair |
| 0x027fab64 | GetDamageModifier2 | Second damage modifier pair |
| 0x027fae2c | GetDamageModifier3 | Third damage modifier pair |
| 0x027fb2d8 | GetDamageModifier4 | Fourth damage modifier pair |
| 0x027fb558 | GetDamageModifier5 | Fifth damage modifier pair |
| 0x027fb98c | IsCalcDamageFuncType | Returns calculation mode flag |

### Practical Examples

**Multiplicative Mode** (default - for damage reduction):
```
20% DEF reduction + 30% skill reduction + 10% element resist
= (1 - 0.20) * (1 - 0.30) * (1 - 0.10)
= 0.80 * 0.70 * 0.90
= 0.504 (49.6% total reduction, NOT 60%)
```

**Additive Mode** (for damage bonuses):
```
20% ATK buff + 30% skill damage + 10% crit bonus
= 0.20 + 0.30 + 0.10
= 0.60 (60% total bonus)
```

---

## BattleUnit$$GetStatsWithBuff (0x28211C0)

**Ghidra Entry:** 0x02820284
**Size:** ~1493 lines of decompiled C code

This is the main stat calculation function with 14 stat type cases:

```c
void GetStatsWithBuff(BattleUnit* unit) {
    switch (unit->statType) {
        case 0:  // HP stats
        case 1:  // ATK stats
        case 2:  // DEF stats
        case 3:  // SPD stats
        case 4:  // Crit Rate
        case 5:  // Crit Damage
        case 6:  // Crit Resist
        case 7:  // Accuracy
        case 8:  // Evasion
        case 9:  // Special stat
        case 10: // Buff category 1
        case 11: // Buff category 2
        case 12: // Buff category 3
        case 13: // Buff category 4
    }
}
```

---

## GameSupport$$CalcStats (0x27021E8)

**Ghidra Entry:** 0x027021bc

Simple stat aggregation function:

```c
Stats CalcStats(Stats* baseStats, Stats* output) {
    // If all stats are zero, initialize them
    if (baseStats->hp == 0 && baseStats->atk == 0 &&
        baseStats->def == 0 && baseStats->spd == 0 &&
        baseStats->special == 0) {
        InitializeStats(baseStats, 0, 0);
    }

    // Copy stats to output
    output->special = baseStats->special;
    return baseStats[1..4];  // Return HP, ATK, DEF, SPD
}
```

---

## BOExecuteManager$$CalcStats (0x2804A88)

**Ghidra Entry:** 0x02804a64

Battle execution stat calculation with multiple buff layers.

---

## Key IL2CPP Function Addresses

### Stat Getter Functions
| Function | Address | Description |
|----------|---------|-------------|
| UnitData$$GetStats (overload 1) | 0x26A941C | Get stats by level/grade/evo |
| UnitData$$GetStats (overload 2) | 0x26A96D4 | Get stats by type |
| UnitData$$GetTotalStats | 0x26A9D60 | Combined stats from all sources |
| UnitData$$GetTotalHP | 0x26A9E7C | Total HP calculation |
| UnitData$$GetTotalATK | 0x26A9EA8 | Total ATK calculation |
| UnitData$$GetTotalDEF | 0x26A9ED4 | Total DEF calculation |
| UnitData$$GetTotalSPD | 0x26A9F00 | Total SPD calculation |
| UnitData$$GetTotalCriRate | 0x26A9F2C | Total Crit Rate |
| UnitData$$GetTotalCriDmg | 0x26A9F58 | Total Crit Damage |
| UnitData$$GetTotalCriRES | 0x26A9F84 | Total Crit Resistance |
| UnitData$$GetTotalACC | 0x26A9FB0 | Total Accuracy |
| UnitData$$GetTotalEVD | 0x26A9FDC | Total Evasion |

### Battle Functions
| Function | Address | Description |
|----------|---------|-------------|
| BOExecuteManager$$CalcDamage | 0x27FA7E4 | Main damage calculation |
| BOExecuteManager$$CalcStats | 0x2804A88 | Battle stat calculation |
| BOExecuteManager$$GetStatsLessTarget | 0x27E8C48 | Stats excluding target |
| BOExecuteManager$$GetVarianceCalcStats | 0x27F80B4 | Damage variance |
| BOExecuteManager$$IsCalcDamageFuncType | 0x27F8094 | Check calc mode |
| BattleUnit$$GetStats | 0x2820B74 | Unit stat retrieval |
| BattleUnit$$GetStatsWithBuff | 0x28211C0 | Stats with active buffs |

### Buff Functions
| Function | Address | Description |
|----------|---------|-------------|
| BOExecuteManager$$GetBuffData | 0x27FC9B8, 0x27F9A2C | Get buff information |
| BOExecuteManager$$GetBuffList | 0x27F9C54, 0x27FCB2C, etc | Get active buffs |
| BOExecuteManager$$GetBuffValue | 0x02804904 | Get buff value |
| BuffBase$$GetBuff | 0x0280BDC4, 0x0280C15C | Base buff getter |
| BuffBase$$GetBuffList | 0x0280BFC4 | Base buff list |
| BuffBase$$GetBuffValue | 0x0280C244 | Base buff value |

---

## 12 Stat Modifier Systems

Stats are aggregated from these sources (based on dump.cs analysis):

1. **Base Stats** - Character level, grade, evolution tier
2. **Artifact Stats** - Equipment piece bonuses
3. **Artifact Set Stats** - Set completion bonuses (2pc, 4pc)
4. **Attribute Stats** - Character attribute points
5. **Disposition Stats** - Character personality bonuses
6. **Arena Stats** - PvP-specific bonuses
7. **Book Stats** - Collection/codex bonuses
8. **Relation Stats** - Character relationship bonuses
9. **Unique Weapon Stats** - Signature weapon bonuses
10. **School Department Stats** - Academy/faction bonuses
11. **Buffs** - Active combat buff effects
12. **Battle Options** - Combat modifier settings

---

## Technical Notes

### IL2CPP Runtime Functions
- `FUN_026170e4()` - Class static constructor (cctor)
- `thunk_FUN_02621b20()` - Null reference check / throw NullReferenceException
- `tpidr_el0` - ARM64 thread-local storage register

### Address Mapping Issue
The IL2CPP metadata addresses (from script.json) sometimes point to:
- **Inside** a larger function (inlined code)
- **C++ runtime functions** (libcxxabi demangler at 0x26A9xxx range)

This is why some decompiled functions show string parsing code instead of game logic - IL2CPP aggressively inlines small methods.

### Decompiled Files Location
```
c:\Users\Borin\Documents\TaimaninSquad_Extract\decompiled_v2\
├── BOExecuteManager_CalcDamage.c      (102 lines - MAIN DAMAGE FORMULA)
├── BOExecuteManager_CalcStats.c       (69 lines)
├── BOExecuteManager_GetStatsLessTarget.c
├── BOExecuteManager_GetVarianceCalcStats.c
├── BattleUnit_GetStats.c              (1493 lines - FULL STAT CALC)
├── BattleUnit_GetStatsWithBuff.c      (1493 lines)
├── GameSupport_CalcStats.c
└── UnitData_GetTotal*.c               (Various stat getters)
```

---

## Summary

**Key Finding:** Damage reduction in TaimaninSquad uses **multiplicative stacking**, meaning:
- Multiple defense buffs don't add linearly
- Diminishing returns apply as you stack more reduction
- Example: 3 separate 30% reductions = `0.7³ = 0.343` (65.7% total), not 90%

**For damage dealers:** Focus on penetration/ignore defense effects
**For tanks:** Stack different types of damage reduction for best results
