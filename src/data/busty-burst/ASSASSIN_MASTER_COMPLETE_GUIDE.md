# ASSASSIN MASTER (刺客大師) - COMPLETE BOSS GUIDE
# Limited Time Challenge - Boss #1
# ================================================

## EVENT SCHEDULE
| Property | Value |
|----------|-------|
| Event ID | 40001 |
| Event Name | 第1回競擊戰 (1st Limited Time Challenge) |
| Start Time | 2026/01/06 03:00:00 |
| End Time | 2026/01/20 03:00:00 |
| Duration | 2 weeks (end date calculated dynamically) |

---

## BASIC INFO
| Property | Value |
|----------|-------|
| Name | 刺客大師 (Assassin Master) |
| Activity ID | 400001 |
| Monster ID | 41001 |
| Boss Level | 70 |
| Time Limit | 120 seconds |
| Hero Restriction | 無限制 (No restriction) |
| Attempts (TP) | 6 base, 6 max |
| Battle Map | 100101/100101 |
| Background | area1001/100101 |
| Element | 想 (Mind) |
| Attack Type | 物理 (Physical) |
| Rarity | SSR |
| Hero Group | 5021 (刺客B) |

---

## BOSS STATS (Level 70)
| Stat | Value |
|------|-------|
| HP | 999,999,999 (Infinite - damage contest!) |
| ATK | 1,877 |
| MATK | 1,758 |
| DEF | 100 |
| MDEF | 100 |
| ATK CRIT | 5 |
| MATK CRIT | 3 |
| HIT | 220 |
| BLOCK | 125 |
| MP Recovery | 12 |

---

## BOSS PASSIVE SKILLS

| Skill ID | Name | Icon | Effect |
|----------|------|------|--------|
| 4100181 | 大傷盾 (Major Damage Shield) | skill001/skill1002 | Triggers on first hit - When taking more than **1,000,000** damage in a single hit, excess damage is reduced (Buff ID: 11111111) |
| 4100182 | 相克的調和 (Elemental Harmony) | skill001/skill1002 | **+50% damage** from advantaged attribute (Magic), **-50% damage** from non-advantaged attributes (Wind, Water, Fire, Holy, Mind) |

> **Strategy Note:** The Elemental Harmony passive explains all the elemental damage modifiers! Magic is the "advantaged" element that deals bonus damage to this boss.

---

## BOSS ICON
Location: `extracted/icon-arrive-arrive-limit/limit-1.png`
Mapped: `mapped_buffs/BOSS_ICON_limit-1.png`

## EVENT BACKGROUNDS  
Location: `extracted/background-eventbg-limitbg2/`
- limitmain-4-bg.png
- limitmain-5-bg.png  
- limitmain-7-bg.png

---

## BOSS SKILLS

> **Damage Formula:** All skills deal **Physical Damage** based on **ATK (1,877) + 73 base = 1,950**
>
> `Damage = (ATK + 73) × multiplier + flat_add`

### Normal Attack
| Skill ID | Name | Target | Damage | Base Damage | Effect |
|----------|------|--------|--------|-------------|--------|
| 4100161 | 刺客B普通攻擊 | Nearest | 2.0 **ATK** + 1000 | **4,900** | Physical damage |

### Regular Skills
| Skill ID | Name | Target | Damage | Base Damage | Effect |
|----------|------|--------|--------|-------------|--------|
| 4100162 | 奇襲 (Ambush) | Nearest | 2.3 **ATK** + 1200 | **5,685** | ATK Down (-13%, -30) + Blind (5 sec) |
| 4100163 | 飛刀投擲 (Knife Throw) | Farthest | 2.5 **ATK** + 1500 | **6,375** | Physical damage (20s CD) |
| 4100164 | 鐵扇亂舞 (Fan Dance) | ALL | 3.0 **ATK** + 2000 | **7,850** | Action Speed Down (6 sec) |

### Time-Triggered Skills
| Time Left | Skill ID | Name | Target | Damage | Base Damage | Effect |
|-----------|----------|------|--------|--------|-------------|--------|
| 90 sec | 4100101 | 淬毒之刃 (Poison Blade) | Highest HP | 2.5 **ATK** + 1500 | **6,375** | Poison for 10 sec |
| 60 sec | 4100102 | 安靜，術師 (Silence, Mage) | Highest MATK | 2.5 **ATK** + 1500 | **6,375** | Silence for 5 sec |
| 30 sec | 4100103 | 麻酔藥 (Anesthetic) | Highest MP | 2.5 **ATK** + 1500 | **6,375** | Sleep for 5 sec |

### Skill Icons
| Skill ID | Name | Icon File |
|----------|------|-----------|
| 4100161 | Normal Attack | skill001/skill0001 |
| 4100162 | Ambush | skill001/skill0011 |
| 4100163 | Knife Throw | skill001/skill0003_1 |
| 4100164 | Fan Dance | skill001/skill0003_5 |
| 4100101 | Poison Blade | skill001/skill0011 |
| 4100102 | Silence, Mage | skill001/skill0011 |
| 4100103 | Anesthetic | skill001/skill0011 |
| 4100181 | Major Damage Shield (Passive) | skill001/skill1002 |
| 4100182 | Elemental Harmony (Passive) | skill001/skill1002 |

---

## BOSS PERMANENT BUFFS (Elemental Resistances)

### WEAKNESS - USE MAGIC HEROES!
| Buff ID | Name | Icon | Effect |
|---------|------|------|--------|
| 10006581 | Magic Damage INCREASED +50% | BOSS_BUFF_10006581_state0092.png | **WEAKNESS - Use Magic heroes!** |
| 10006582 | Wind Damage Reduction -50% | BOSS_BUFF_10006582_state0083.png | Wind heroes deal 50% less damage |
| 10006583 | Water Damage Reduction -50% | BOSS_BUFF_10006583_state0085.png | Water heroes deal 50% less damage |
| 10006584 | Fire Damage Reduction -50% | BOSS_BUFF_10006584_state0087.png | Fire heroes deal 50% less damage |
| 10006585 | Holy Damage Reduction -50% | BOSS_BUFF_10006585_state0089.png | Holy heroes deal 50% less damage |
| 10006586 | Mind Damage Reduction -50% | BOSS_BUFF_10006586_state0093.png | Mind heroes deal 50% less damage |

### Status Effect Resistances (16 Types)
| Buff ID | Name | Icon | Resistance | Effect Description |
|---------|------|------|------------|-------------------|
| - | Poison | state0033 | **0% (NO RESIST!)** | HP damage per second |
| - | Burn | state0035 | **0% (NO RESIST!)** | HP damage per second (stackable) |
| 1141 | Fear | state0037 | 15% (Low) | MP drain per second |
| 1154 | Freeze | state0039 | 70% (High) | Unable to act + HP DoT |
| 1164 | Petrify | state0041 | 70% (High) | Unable to act, Block 0 |
| 1175 | Stun | state0043 | 90% (Very High) | Unable to act |
| 1186 | Sleep | state0045 | **100% (IMMUNE)** | Unable to act (breaks on damage=crit) |
| 1193 | Silence | state0047 | 50% (Medium) | Only normal attacks, no skills |
| - | Confusion | state0049 | **0% (NO RESIST!)** | Attacks randomly, no ultimates |
| 1224 | Charm | state0051 | 70% (High) | Attacks allies, no ultimates |
| 1245 | Paralysis | state0053 | 90% (Very High) | Speed/ATK/MATK -50% |
| 1252 | Curse | state0055 | 30% (Low) | No HP/MP recovery, Speed -50%, Crit 0 |
| 1262 | Blind | state0057 | 30% (Low) | Block 0, Accuracy -50% |
| - | Cleanse | state0061 | **0% (NO RESIST!)** | Removes buffs from target |
| - | Taunt | state0062 | **0% (NO RESIST!)** | Forces attacks on taunter |
| - | Debuff | state0060 | **0% (NO RESIST!)** | General debuff resistance |

> **Strategy Tips:**
> - **Best debuffs:** Poison, Burn, Confusion (0% resist = always land!)
> - **Good debuffs:** Fear (15%), Curse, Blind (30%)
> - **Avoid:** Sleep (100% immune), Stun/Paralysis (90%)

---

## BOSS SKILL DEBUFFS (Applied to your heroes)

| Buff ID | Name | Icon | Effect |
|---------|------|------|--------|
| 5015 | ATK Down (Physical Attack -Lv5) | SKILL_DEBUFF_5015_state0002.png | ATK -13%, -30 flat |
| 5261 | Blind | SKILL_DEBUFF_5261_state0056.png | Accuracy -50%, Block 0 |
| 5095 | Action Speed Down -Lv5 | SKILL_DEBUFF_5095_state0020.png | Speed -20%, -20 flat |
| 4100101 | Poison | SKILL_DEBUFF_4100101_state0032.png | HP -2000/sec |
| 5191 | Silence | SKILL_DEBUFF_5191_state0046.png | Cannot use skills/ultimates |
| 5181 | Sleep | SKILL_DEBUFF_5181_state0044.png | Cannot act (breaks on damage) |

---

## REWARDS
| Type | Reward ID |
|------|-----------|
| Total Point Reward | 4000101 |
| Max Damage Rank Reward | 4001102 |
| Total Damage Rank Reward | 4001103 |

---

## STRATEGY SUMMARY

### Best Element
**USE MAGIC ELEMENT HEROES** - They deal **+50% damage!**

### Avoid These Elements
- Wind (-50% damage)
- Water (-50% damage)
- Fire (-50% damage)
- Holy (-50% damage)
- Mind (-50% damage)

### Exploitable Debuffs (0% Resist - Always Land!)
- **Poison** (0% resist)
- **Burn** (0% resist)
- **Confusion** (0% resist)
- **Taunt** (0% resist)

### Low Resist Debuffs
- **Fear** (15% resist)
- **Curse** (30% resist)
- **Blind** (30% resist)

### Avoid Using These Debuffs
- Sleep (100% immune)
- Stun/Paralysis (90% resist)
- Freeze/Petrify/Charm (70% resist)

### Watch Out For
1. **At 90 sec**: Boss targets your highest HP hero with Poison
2. **At 60 sec**: Boss silences your highest MATK hero
3. **At 30 sec**: Boss puts your highest MP hero to sleep

### Passive Skills
- **Major Damage Shield**: Hits over 1,000,000 damage have excess reduced - spread damage instead of big bursts!
- **Elemental Harmony**: This passive is why Magic deals +50% and other elements deal -50%

---

## FILE LOCATIONS

### Extracted Images
```
assassin_master_images/
├── extracted/
│   ├── icon-arrive-arrive-limit/
│   │   └── limit-1.png              <- Boss icon
│   ├── background-eventbg-limitbg2/
│   │   ├── limitmain-4-bg.png
│   │   ├── limitmain-5-bg.png
│   │   └── limitmain-7-bg.png
│   └── icon-buff001/
│       └── state0001-state0097.png  <- All buff icons
└── mapped_buffs/
    ├── BOSS_ICON_limit-1.png
    ├── BOSS_BUFF_*.png              <- Elemental resistance icons
    ├── BOSS_RESIST_*.png            <- Status resistance icons
    └── SKILL_DEBUFF_*.png           <- Skill debuff icons
```
