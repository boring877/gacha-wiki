// Star Savior Buff/Debuff Data
// 468 battle buffs and debuffs from CLIENT_BUFF_TEMPLET.json
// Names and descriptions from STRING_COMMON.json (English)

export const STAR_SAVIOR_BUFFS =
[
  {
    "id": 1001,
    "strId": "BI_ATTACK_INCREASE",
    "name": "ATK Up",
    "desc": "",
    "icon": "BUFF_ATTACK_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 3000,
        "display": "+30% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "atk-up"
  },
  {
    "id": 1002,
    "strId": "BI_ATTACK_AMPLIFICATION",
    "name": "Greater ATK Up",
    "desc": "ATK increases by 50%.",
    "icon": "BUFF_ATTACK_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 5000,
        "display": "+50% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-atk-up"
  },
  {
    "id": 1003,
    "strId": "BI_DEFENSE_INCREASE",
    "name": "DEF Up",
    "desc": "",
    "icon": "BUFF_DEFENSE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 3000,
        "display": "+30% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "def-up"
  },
  {
    "id": 1004,
    "strId": "BI_DEFENSE_AMPLIFICATION",
    "name": "Greater DEF Up",
    "desc": "",
    "icon": "BUFF_DEFENSE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 5000,
        "display": "+50% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-def-up"
  },
  {
    "id": 1005,
    "strId": "BI_SPEED_INCREASE",
    "name": "SPD Up",
    "desc": "",
    "icon": "BUFF_SPEED_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "spd-up"
  },
  {
    "id": 1006,
    "strId": "BI_CRITICAL_CHANCE_INCREASE",
    "name": "CRIT Rate Up",
    "desc": "",
    "icon": "BUFF_CRITICAL_CHANCE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 3000,
        "display": "+30% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "crit-rate-up"
  },
  {
    "id": 1007,
    "strId": "BI_CRITICAL_CHANCE_AMPLIFICATION",
    "name": "Greater CRIT Rate Up",
    "desc": "",
    "icon": "BUFF_CRITICAL_CHANCE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-crit-rate-up"
  },
  {
    "id": 1008,
    "strId": "BI_CRITICAL_DAMAGE_INCREASE",
    "name": "CRIT DMG Increase",
    "desc": "",
    "icon": "BUFF_CRITICAL_DAMAGE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 3000,
        "display": "+30% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "crit-dmg-increase"
  },
  {
    "id": 1009,
    "strId": "BI_CRITICAL_DAMAGE_AMPLIFICATION",
    "name": "Greater CRIT DMG Increase",
    "desc": "",
    "icon": "BUFF_CRITICAL_DAMAGE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 5000,
        "display": "+50% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-crit-dmg-increase"
  },
  {
    "id": 1010,
    "strId": "BI_EFFECT_HIT_INCREASE",
    "name": "Effect Hit Up",
    "desc": "Increases Effect Hit by 30%.",
    "icon": "BUFF_EFFECT_HIT_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 3000,
        "display": "+30% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "effect-hit-up"
  },
  {
    "id": 1011,
    "strId": "BI_EFFECT_HIT_AMPLIFICATION",
    "name": "Greater Effect Hit Up",
    "desc": "Effect Hit increases by 50%.",
    "icon": "BUFF_EFFECT_HIT_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 5000,
        "display": "+50% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-effect-hit-up"
  },
  {
    "id": 1012,
    "strId": "BI_EFFECT_EVADE_INCREASE",
    "name": "Effect RES Up",
    "desc": "Increases Effect RES by 30%.",
    "icon": "BUFF_EFFECT_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 3000,
        "display": "+30% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "effect-res-up"
  },
  {
    "id": 1013,
    "strId": "BI_EFFECT_EVADE_AMPLIFICATION",
    "name": "Greater Effect RES Up",
    "desc": "Effect RES increases by 50%.",
    "icon": "BUFF_EFFECT_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 5000,
        "display": "+50% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-effect-res-up"
  },
  {
    "id": 1014,
    "strId": "BI_GUARD",
    "name": "Guard",
    "desc": "Takes 30% of damage received by allies in their place. Only the highest damage-sharing effect applies.",
    "icon": "BUFF_GUARD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Damage Share",
        "rawStat": "NST_RATE_DAMAGE_SHARE",
        "value": 3000,
        "display": "+30% Damage Share"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "guard"
  },
  {
    "id": 1015,
    "strId": "BI_GUARD_CAN_NOT_DISPEL_INFINITE",
    "name": "Guard (Undispellable)",
    "desc": "Takes 30% of damage received by allies in their place. Only the highest damage-sharing effect applies.",
    "icon": "BUFF_GUARD_CAN_NOT_DISPEL.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Damage Share",
        "rawStat": "NST_RATE_DAMAGE_SHARE",
        "value": 3000,
        "display": "+30% Damage Share"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "guard-undispellable"
  },
  {
    "id": 1016,
    "strId": "BI_SKILL_ATTACK_INCREASE",
    "name": "Basic Skill DMG Increase",
    "desc": "Basic Skill DMG increases by 15%.",
    "icon": "BUFF_SKILL_ATTACK_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Basic Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ATTACK",
        "value": 1500,
        "display": "+15% Basic Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "basic-skill-dmg-increase"
  },
  {
    "id": 1017,
    "strId": "BI_SKILL_SPECIAL_INCREASE",
    "name": "Special Skill DMG Increase",
    "desc": "Special Skill DMG increases by 15%.",
    "icon": "BUFF_SKILL_SPECIAL_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Special Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_SPECIAL",
        "value": 1500,
        "display": "+15% Special Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "special-skill-dmg-increase"
  },
  {
    "id": 1018,
    "strId": "BI_SKILL_HYPER_INCREASE",
    "name": "Ultimate Skill DMG Increase",
    "desc": "Ultimate Skill DMG increases by 15%.",
    "icon": "BUFF_SKILL_HYPER_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 1500,
        "display": "+15% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ultimate-skill-dmg-increase"
  },
  {
    "id": 1019,
    "strId": "BI_RATE_DAMAGE_UP",
    "name": "DMG Dealt Increase",
    "desc": "Damage dealt increases by 80%.",
    "icon": "BUFF_RATE_DAMAGE_UP.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 8000,
        "display": "+80% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dmg-dealt-increase"
  },
  {
    "id": 1020,
    "strId": "BI_RATE_DAMAGE_REDUCE",
    "name": "DMG Taken Reduction",
    "desc": "Damage taken decreases by 80%.",
    "icon": "BUFF_RATE_DAMAGE_REDUCE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 8000,
        "display": "+80% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dmg-taken-reduction"
  },
  {
    "id": 1021,
    "strId": "BI_RATE_DAMAGE_REDUCE_ADJUST_ORDER",
    "name": "DMG Taken Reduction (Order Attribute)",
    "desc": "Damage taken from Order Attribute units decreases by 50%.",
    "icon": "BUFF_RATE_DAMAGE_REDUCE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Order DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_ORDER",
        "value": 5000,
        "display": "+50% vs Order DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dmg-taken-reduction-order-attribute"
  },
  {
    "id": 1022,
    "strId": "BI_RATE_DAMAGE_REDUCE_ADJUST_CHAOS",
    "name": "DMG Taken Reduction (Chaos Attribute)",
    "desc": "Damage taken from Chaos Attribute units decreases by 50%.",
    "icon": "BUFF_RATE_DAMAGE_REDUCE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Chaos DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_CHAOS",
        "value": 5000,
        "display": "+50% vs Chaos DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dmg-taken-reduction-chaos-attribute"
  },
  {
    "id": 1023,
    "strId": "BI_RATE_REVENGE_ATTACK",
    "name": "Counterattack Up",
    "desc": "Counterattack Chance increases by 25%.",
    "icon": "BUFF_REVENGE_ATTACK.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Counterattack Chance",
        "rawStat": "NST_RATE_REVENGE_ATTACK",
        "value": 2500,
        "display": "+25% Counterattack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "counterattack-up"
  },
  {
    "id": 1024,
    "strId": "BI_RATE_CROSS_ATTACK",
    "name": "Dual Attack Up",
    "desc": "Dual Attack Chance increases by 25%.",
    "icon": "BUFF_CROSS_ATTACK.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 2500,
        "display": "+25% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dual-attack-up"
  },
  {
    "id": 1025,
    "strId": "BI_RATE_POWER_REVENGE_ATTACK",
    "name": "Enhanced Counterattack",
    "desc": "Counterattack Chance increases by 100%.",
    "icon": "BUFF_REVENGE_ATTACK.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Counterattack Chance",
        "rawStat": "NST_RATE_REVENGE_ATTACK",
        "value": 10000,
        "display": "+100% Counterattack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "enhanced-counterattack"
  },
  {
    "id": 1026,
    "strId": "BI_RATE_POWER_CROSS_ATTACK",
    "name": "Enhanced Dual Attack",
    "desc": "Dual Attack Chance increases by 100%.",
    "icon": "BUFF_CROSS_ATTACK.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 10000,
        "display": "+100% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "enhanced-dual-attack"
  },
  {
    "id": 1027,
    "strId": "BI_HEAL_RECEIVE_INCREASE",
    "name": "Recovery Up",
    "desc": "Increases Incoming Healing by 30%.",
    "icon": "BUFF_HEAL_RECEIVE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": 3000,
        "display": "+30% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "recovery-up"
  },
  {
    "id": 1028,
    "strId": "BI_HEAL_RECEIVE_AMPLIFICATION",
    "name": "Greater Recovery Up",
    "desc": "Healing received increases by 50%.",
    "icon": "BUFF_HEAL_RECEIVE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": 5000,
        "display": "+50% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-recovery-up"
  },
  {
    "id": 1029,
    "strId": "BI_EVADE_INCREASE",
    "name": "Evasion Up",
    "desc": "",
    "icon": "BUFF_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": 5000,
        "display": "+50% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "evasion-up"
  },
  {
    "id": 1030,
    "strId": "BI_EVADE_AMPLIFICATION",
    "name": "Greater Evasion Up",
    "desc": "",
    "icon": "BUFF_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": 5000,
        "display": "+50% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-evasion-up"
  },
  {
    "id": 1031,
    "strId": "BI_VAMPIRISM",
    "name": "Lifesteal",
    "desc": "Restores 30% of damage as HP on attack.",
    "icon": "BUFF_VAMPIRISM.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Lifesteal",
        "rawStat": "NST_RATE_DAMAGE_VAMPIRISM",
        "value": 3000,
        "display": "+30% Lifesteal"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "lifesteal"
  },
  {
    "id": 1050,
    "strId": "BI_BADGE",
    "name": "Token",
    "desc": "",
    "icon": "BUFF_BADGE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1000,
        "display": "+10% DMG Increase"
      },
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 1000,
        "display": "+10% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "token"
  },
  {
    "id": 1051,
    "strId": "BI_PREEMPTIVE_DEFEND_INCREASE",
    "name": "Preemptive Guard Chance Up",
    "desc": "Increases Preemptive Guard Trigger Chance by 50%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Preemptive Guard Chance",
        "rawStat": "NST_RATE_PREEMPTIVE_DEFEND",
        "value": 5000,
        "display": "+50% Preemptive Guard Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "preemptive-guard-chance-up"
  },
  {
    "id": 1052,
    "strId": "BI_PREEMPTIVE_DEFEND_REDUCE_INCREASE",
    "name": "Preemptive Guard Ignore Chance Up",
    "desc": "Increases Preemptive Guard Ignore Chance by 50%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Preemptive Guard Ignore",
        "rawStat": "NST_RATE_PREEMPTIVE_DEFEND_REDUCE",
        "value": 5000,
        "display": "+50% Preemptive Guard Ignore"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "preemptive-guard-ignore-chance-up"
  },
  {
    "id": 1053,
    "strId": "BI_PREEMPTIVE_DEFEND_AMPLIFICATION",
    "name": "Advanced Preemptive Guard Chance Up",
    "desc": "Increases Preemptive Guard Trigger Chance by 100%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Preemptive Guard Chance",
        "rawStat": "NST_RATE_PREEMPTIVE_DEFEND",
        "value": 10000,
        "display": "+100% Preemptive Guard Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "advanced-preemptive-guard-chance-up"
  },
  {
    "id": 1054,
    "strId": "BI_PREEMPTIVE_DEFEND_REDUCE_AMPLIFICATION",
    "name": "Advanced Preemptive Guard Ignore Chance Up",
    "desc": "Increases Preemptive Guard Ignore Chance by 100%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Preemptive Guard Ignore",
        "rawStat": "NST_RATE_PREEMPTIVE_DEFEND_REDUCE",
        "value": 10000,
        "display": "+100% Preemptive Guard Ignore"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "advanced-preemptive-guard-ignore-chance-up"
  },
  {
    "id": 3501,
    "strId": "BI_NOVA_BURST_DAMAGE_UP",
    "name": "Stat: DMG Increase (Infinite Turns)",
    "desc": "This stat displays DMG Increase rate (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1500,
        "display": "+15% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-infinite-turns"
  },
  {
    "id": 4001,
    "strId": "BI_ORBITAL_ARRAY_OMEGA",
    "name": "Omega Protocol",
    "desc": "ATK and Effect Hit increase by 15%.",
    "icon": "BUFF_ORBITAL_ARRAY_OMEGA.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 1500,
        "display": "+15% ATK"
      },
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 1500,
        "display": "+15% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "omega-protocol"
  },
  {
    "id": 4502,
    "strId": "BI_CUBE_COTTON_SWORD_1",
    "name": "Cottonball Sword",
    "desc": "Damage taken from Basic Skills decreases by 15%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Basic Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ATTACK",
        "value": 100,
        "display": "+1% Basic Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cottonball-sword"
  },
  {
    "id": 4504,
    "strId": "BI_CUBE_ROCKET_BOARD_1",
    "name": "Rocket Skateboard",
    "desc": "CRIT Rate increases by 10%. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 1000,
        "display": "+10% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "rocket-skateboard"
  },
  {
    "id": 5003,
    "strId": "BI_CONDITION_GOOD",
    "name": "GOOD Condition (Undispellable)",
    "desc": "SPD increases by 5%.",
    "icon": "BUFF_CONDITION_GOOD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 500,
        "display": "+5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "good-condition-undispellable"
  },
  {
    "id": 5004,
    "strId": "BI_CONDITION_BEST",
    "name": "BEST Condition (Undispellable)",
    "desc": "",
    "icon": "BUFF_CONDITION_BEST.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1000,
        "display": "+10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "best-condition-undispellable"
  },
  {
    "id": 5013,
    "strId": "BI_STAMINA_NORMAL",
    "name": "Normal Stamina (Undispellable)",
    "desc": "Increases Max HP by 10%.",
    "icon": "BUFF_CONDITION_GOOD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 1000,
        "display": "+10% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "normal-stamina-undispellable"
  },
  {
    "id": 5014,
    "strId": "BI_STAMINA_GOOD",
    "name": "High Stamina (Undispellable)",
    "desc": "Increases Max HP by 20%.",
    "icon": "BUFF_CONDITION_GOOD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 2000,
        "display": "+20% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "high-stamina-undispellable"
  },
  {
    "id": 5015,
    "strId": "BI_STAMINA_BEST",
    "name": "Very High Stamina (Undispellable)",
    "desc": "",
    "icon": "BUFF_CONDITION_BEST.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 3000,
        "display": "+30% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "very-high-stamina-undispellable"
  },
  {
    "id": 5101,
    "strId": "BI_JOURNEY_RETRY_BUFF_01",
    "name": "Unbreakable Will I (Undispellable)",
    "desc": "",
    "icon": "BUFF_JOURNEY_RETRY_01.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1000,
        "display": "+10% DMG Increase"
      },
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 1000,
        "display": "+10% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "unbreakable-will-i-undispellable"
  },
  {
    "id": 5102,
    "strId": "BI_JOURNEY_RETRY_BUFF_02",
    "name": "Unbreakable Will II (Undispellable)",
    "desc": "Damage dealt increases by 20% and damage taken decreases by 20%.",
    "icon": "BUFF_JOURNEY_RETRY_02.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 2000,
        "display": "+20% DMG Increase"
      },
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 2000,
        "display": "+20% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "unbreakable-will-ii-undispellable"
  },
  {
    "id": 5103,
    "strId": "BI_JOURNEY_RETRY_BUFF_03",
    "name": "Unbreakable Will III (Undispellable)",
    "desc": "Damage dealt increases by 30% and damage taken decreases by 30%.",
    "icon": "BUFF_JOURNEY_RETRY_03.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 3000,
        "display": "+30% DMG Increase"
      },
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 3000,
        "display": "+30% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "unbreakable-will-iii-undispellable"
  },
  {
    "id": 5502,
    "strId": "BI_CHARM_1050241",
    "name": "Street Bakers Popular Mascot",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 100,
        "display": "+1% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "street-bakers-popular-mascot"
  },
  {
    "id": 5503,
    "strId": "BI_CHARM_1050251",
    "name": "Street Bakers Limited Mascot",
    "desc": "Self Effect RES increases by 5% when attacked. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 100,
        "display": "+1% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "street-bakers-limited-mascot"
  },
  {
    "id": 5504,
    "strId": "BI_CHARM_1050261",
    "name": "Street Bakers First Edition Mascot",
    "desc": "Self Effect Hit increases by 5% on attack. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 100,
        "display": "+1% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "street-bakers-first-edition-mascot"
  },
  {
    "id": 6001,
    "strId": "BI_CHARM_5011511_1",
    "name": "Precision Aim",
    "desc": "CRIT Rate increases by 100%. Removed after attack.",
    "icon": "BUFF_JOURNEY_SNIPEAIM.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 10000,
        "display": "+100% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "precision-aim"
  },
  {
    "id": 6003,
    "strId": "BI_CHARM_5011507_1",
    "name": "Express Delivery",
    "desc": "",
    "icon": "BUFF_SPEED_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "express-delivery"
  },
  {
    "id": 7001,
    "strId": "BI_CHARM_50630011",
    "name": "Scales of Balance (DMG Taken Reduction)",
    "desc": "DMG Taken decreases by {0}% on attack. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "scales-of-balance-dmg-taken-reduction"
  },
  {
    "id": 7002,
    "strId": "BI_CHARM_50630012",
    "name": "Scales of Balance (DMG Increase)",
    "desc": "DMG increases by {0}% when attacked. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "scales-of-balance-dmg-increase"
  },
  {
    "id": 7007,
    "strId": "BI_CHARM_50640011",
    "name": "Corroded Horn",
    "desc": "Self DMG increases by 5% on attack. Removed after attack.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 500,
        "display": "+5% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "corroded-horn"
  },
  {
    "id": 7008,
    "strId": "BI_CHARM_50640012",
    "name": "Hard Fang",
    "desc": "Self DMG increases by 10% on attack. Removed after attack.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1000,
        "display": "+10% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "hard-fang"
  },
  {
    "id": 7009,
    "strId": "BI_CHARM_50640013",
    "name": "Bloodstained Tusk",
    "desc": "Self DMG increases by 15% on attack. Removed after attack.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1500,
        "display": "+15% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "bloodstained-tusk"
  },
  {
    "id": 8001,
    "strId": "BI_RANKING_RAID_01_BATTLE_1",
    "name": "Cosmo Gate 01_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 3000,
        "display": "+30% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-01-1"
  },
  {
    "id": 8002,
    "strId": "BI_RANKING_RAID_01_BATTLE_2",
    "name": "Cosmo Gate 01_2",
    "desc": "Deals 30% increased Impact DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Impact DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_IMPACT",
        "value": 3000,
        "display": "+30% vs Impact DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-01-2"
  },
  {
    "id": 8003,
    "strId": "BI_RANKING_RAID_02_BATTLE_1",
    "name": "Cosmo Gate 02_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 1500,
        "display": "+15% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-02-1"
  },
  {
    "id": 8004,
    "strId": "BI_RANKING_RAID_02_BATTLE_2",
    "name": "Cosmo Gate 02_2",
    "desc": "Deals 30% increased Slash DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Slash DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_SLASH",
        "value": 3000,
        "display": "+30% vs Slash DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-02-2"
  },
  {
    "id": 8005,
    "strId": "BI_RANKING_RAID_03_BATTLE_1",
    "name": "Cosmo Gate 03_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 5000,
        "display": "+50% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-03-1"
  },
  {
    "id": 8006,
    "strId": "BI_RANKING_RAID_03_BATTLE_2",
    "name": "Cosmo Gate 03_2",
    "desc": "Deals 30% increased CRIT DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 3000,
        "display": "+30% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-03-2"
  },
  {
    "id": 8007,
    "strId": "BI_RANKING_RAID_04_BATTLE_1",
    "name": "Cosmo Gate 04_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-04-1"
  },
  {
    "id": 8008,
    "strId": "BI_RANKING_RAID_04_BATTLE_2",
    "name": "Cosmo Gate 04_2",
    "desc": "Healing Rate increases by 30%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Outgoing Healing",
        "rawStat": "NST_RATE_HEAL_GIVE",
        "value": 3000,
        "display": "+30% Outgoing Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-04-2"
  },
  {
    "id": 8009,
    "strId": "BI_RANKING_RAID_05_BATTLE_1",
    "name": "Cosmo Gate 05_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 3000,
        "display": "+30% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-05-1"
  },
  {
    "id": 8010,
    "strId": "BI_RANKING_RAID_05_BATTLE_2",
    "name": "Cosmo Gate 05_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-05-2"
  },
  {
    "id": 8011,
    "strId": "BI_RANKING_RAID_06_BATTLE_1",
    "name": "Cosmo Gate 06_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-06-1"
  },
  {
    "id": 8012,
    "strId": "BI_RANKING_RAID_06_BATTLE_2",
    "name": "Cosmo Gate 06_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 3000,
        "display": "+30% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-06-2"
  },
  {
    "id": 8013,
    "strId": "BI_RANKING_RAID_07_BATTLE_1",
    "name": "Cosmo Gate 07_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-07-1"
  },
  {
    "id": 8014,
    "strId": "BI_RANKING_RAID_07_BATTLE_2",
    "name": "Cosmo Gate 07_2",
    "desc": "Deals 30% increased Psychic DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Spirit DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_SPIRIT",
        "value": 3000,
        "display": "+30% vs Spirit DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-07-2"
  },
  {
    "id": 8015,
    "strId": "BI_RANKING_RAID_08_BATTLE_1",
    "name": "Cosmo Gate 08_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 5000,
        "display": "+50% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-08-1"
  },
  {
    "id": 8016,
    "strId": "BI_RANKING_RAID_08_BATTLE_2",
    "name": "Cosmo Gate 08_2",
    "desc": "Deals 30% increased Ultimate Skill DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 3000,
        "display": "+30% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-08-2"
  },
  {
    "id": 8017,
    "strId": "BI_RANKING_RAID_09_BATTLE_1",
    "name": "Cosmo Gate 09_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-09-1"
  },
  {
    "id": 8018,
    "strId": "BI_RANKING_RAID_09_BATTLE_2",
    "name": "Cosmo Gate 09_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 5000,
        "display": "+50% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-09-2"
  },
  {
    "id": 8019,
    "strId": "BI_RANKING_RAID_10_BATTLE_1",
    "name": "Cosmo Gate 10_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-10-1"
  },
  {
    "id": 8020,
    "strId": "BI_RANKING_RAID_10_BATTLE_2",
    "name": "Cosmo Gate 10_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 3000,
        "display": "+30% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-10-2"
  },
  {
    "id": 8021,
    "strId": "BI_RANKING_RAID_11_BATTLE_1",
    "name": "Cosmo Gate 11_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 5000,
        "display": "+50% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-11-1"
  },
  {
    "id": 8022,
    "strId": "BI_RANKING_RAID_11_BATTLE_2",
    "name": "Cosmo Gate 11_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-11-2"
  },
  {
    "id": 8023,
    "strId": "BI_RANKING_RAID_12_BATTLE_1",
    "name": "Cosmo Gate 12_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-12-1"
  },
  {
    "id": 8024,
    "strId": "BI_RANKING_RAID_12_BATTLE_2",
    "name": "Cosmo Gate 12_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 3000,
        "display": "+30% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-12-2"
  },
  {
    "id": 8025,
    "strId": "BI_RANKING_RAID_13_BATTLE_1",
    "name": "Cosmo Gate 13_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-13-1"
  },
  {
    "id": 8026,
    "strId": "BI_RANKING_RAID_13_BATTLE_2",
    "name": "Cosmo Gate 13_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 5000,
        "display": "+50% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-13-2"
  },
  {
    "id": 8027,
    "strId": "BI_RANKING_RAID_14_BATTLE_1",
    "name": "Cosmo Gate 14_1",
    "desc": "Increases damage dealt to single targets by 50%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Single Target DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE",
        "value": 5000,
        "display": "+50% vs Single Target DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-14-1"
  },
  {
    "id": 8028,
    "strId": "BI_RANKING_RAID_14_BATTLE_2",
    "name": "Cosmo Gate 14_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-14-2"
  },
  {
    "id": 8029,
    "strId": "BI_RANKING_RAID_15_BATTLE_1",
    "name": "Cosmo Gate 15_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 5000,
        "display": "+50% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-15-1"
  },
  {
    "id": 8030,
    "strId": "BI_RANKING_RAID_15_BATTLE_2",
    "name": "Cosmo Gate 15_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 5000,
        "display": "+50% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-15-2"
  },
  {
    "id": 8031,
    "strId": "BI_RANKING_RAID_16_BATTLE_1",
    "name": "Cosmo Gate 16_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-16-1"
  },
  {
    "id": 8032,
    "strId": "BI_RANKING_RAID_16_BATTLE_2",
    "name": "Cosmo Gate 16_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 5000,
        "display": "+50% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-16-2"
  },
  {
    "id": 8033,
    "strId": "BI_RANKING_RAID_17_BATTLE_1",
    "name": "Cosmo Gate 17_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 5000,
        "display": "+50% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-17-1"
  },
  {
    "id": 8034,
    "strId": "BI_RANKING_RAID_17_BATTLE_2",
    "name": "Cosmo Gate 17_2",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 10000,
        "display": "+100% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-17-2"
  },
  {
    "id": 8035,
    "strId": "BI_RANKING_RAID_18_BATTLE_1",
    "name": "Cosmo Gate 18_1",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 10000,
        "display": "+100% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-18-1"
  },
  {
    "id": 8036,
    "strId": "BI_RANKING_RAID_18_BATTLE_2",
    "name": "Cosmo Gate 18_2",
    "desc": "Deals 50% increased Special Skill DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Special Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_SPECIAL",
        "value": 5000,
        "display": "+50% Special Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "cosmo-gate-18-2"
  },
  {
    "id": 9001,
    "strId": "BI_POTEN_PASSIVE_24001",
    "name": "Close Combat Mastery",
    "desc": "Self DEF increases by 1% after using a Skill. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 100,
        "display": "+1% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "close-combat-mastery"
  },
  {
    "id": 9005,
    "strId": "BI_POTEN_PASSIVE_31002",
    "name": "Solid Fundamentals",
    "desc": "Self Effect RES increases by 3% when attacked. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 300,
        "display": "+3% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "solid-fundamentals"
  },
  {
    "id": 9019,
    "strId": "BI_POTEN_PASSIVE_400011",
    "name": "Starlight Trajectory-AX",
    "desc": "Increases ATK by 8% at the start of the turn. Stacks up to 5 times, and all stacks are reset after using an Ultimate Skill.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 800,
        "display": "+8% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "starlight-trajectory-ax"
  },
  {
    "id": 9020,
    "strId": "BI_POTEN_PASSIVE_402011",
    "name": "Starlight Trajectory-CX",
    "desc": "Increases DEF by 10% when attacked. Stacks up to 5 times, and all stacks are reset after attacking.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1000,
        "display": "+10% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "starlight-trajectory-cx"
  },
  {
    "id": 9022,
    "strId": "BI_POTEN_PASSIVE_405011",
    "name": "Starlight Trajectory-FX",
    "desc": "On Critical Hit, deals 25% increased damage on the next attack.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 2500,
        "display": "+25% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "starlight-trajectory-fx"
  },
  {
    "id": 9501,
    "strId": "BI_DECK_RATE_ATK",
    "name": "ATK Up Rate on Placement (Undispellable)",
    "desc": "This is the ATK increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 1000,
        "display": "+10% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "atk-up-rate-on-placement-undispellable"
  },
  {
    "id": 9502,
    "strId": "BI_DECK_RATE_HP",
    "name": "HP Up Rate on Placement (Undispellable)",
    "desc": "This is the HP increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 1000,
        "display": "+10% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "hp-up-rate-on-placement-undispellable"
  },
  {
    "id": 9503,
    "strId": "BI_DECK_RATE_DEF",
    "name": "DEF Up Rate on Placement (Undispellable)",
    "desc": "This is the DEF increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1000,
        "display": "+10% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "def-up-rate-on-placement-undispellable"
  },
  {
    "id": 9504,
    "strId": "BI_DECK_RATE_TURN_SPEED",
    "name": "SPD Up Rate on Placement (Undispellable)",
    "desc": "This is the SPD increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1000,
        "display": "+10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "spd-up-rate-on-placement-undispellable"
  },
  {
    "id": 9505,
    "strId": "BI_DECK_RATE_CRITICAL",
    "name": "CRIT Rate Up Rate on Placement (Undispellable)",
    "desc": "This is the CRIT Rate increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 1000,
        "display": "+10% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "crit-rate-up-rate-on-placement-undispellable"
  },
  {
    "id": 9506,
    "strId": "BI_DECK_RATE_CRITICAL_DAMAGE",
    "name": "CRIT DMG Increase Rate on Placement (Undispellable)",
    "desc": "This is the CRIT DMG increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 1000,
        "display": "+10% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "crit-dmg-increase-rate-on-placement-undispellable"
  },
  {
    "id": 9507,
    "strId": "BI_DECK_RATE_EFFECT_EVADE",
    "name": "Effect RES Up Rate on Placement (Undispellable)",
    "desc": "This is the Effect RES increase rate stat when placed.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 1000,
        "display": "+10% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "effect-res-up-rate-on-placement-undispellable"
  },
  {
    "id": 10001,
    "strId": "BI_ADJUSTTYPE_RESOURCE_SUN",
    "name": "Ignition",
    "desc": "Damage dealt to Star Attribute units increases by 1%. Applies up to 5 stacks. This boost applies independently of buffs and debuffs.",
    "icon": "BUFF_BOOST_IGNITION.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Star DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_STAR",
        "value": 100,
        "display": "+1% vs Star DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ignition"
  },
  {
    "id": 10002,
    "strId": "BI_ADJUSTTYPE_RESOURCE_MOON",
    "name": "Chill",
    "desc": "Damage dealt to Sun Attribute units increases by 1%. Applies up to 5 stacks. This boost applies independently of buffs and debuffs.",
    "icon": "BUFF_BOOST_COOLING.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Sun DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_SUN",
        "value": 100,
        "display": "+1% vs Sun DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "chill"
  },
  {
    "id": 10003,
    "strId": "BI_ADJUSTTYPE_RESOURCE_STAR",
    "name": "Leap",
    "desc": "Damage dealt to Moon Attribute units increases by 1%. Applies up to 5 stacks. This boost applies independently of buffs and debuffs.",
    "icon": "BUFF_BOOST_ADVANCE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Moon DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_MOON",
        "value": 100,
        "display": "+1% vs Moon DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "leap"
  },
  {
    "id": 10004,
    "strId": "BI_ADJUSTTYPE_RESOURCE_CHAOS",
    "name": "Agitation",
    "desc": "Damage dealt to Order Attribute units increases by 1%. Applies up to 5 stacks. This boost applies independently of buffs and debuffs.",
    "icon": "BUFF_BOOST_FERMENT.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Order DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_ORDER",
        "value": 100,
        "display": "+1% vs Order DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "agitation"
  },
  {
    "id": 10005,
    "strId": "BI_ADJUSTTYPE_RESOURCE_ORDER",
    "name": "Insight",
    "desc": "Damage dealt to Chaos Attribute units increases by 1%. Applies up to 5 stacks. This boost applies independently of buffs and debuffs.",
    "icon": "BUFF_BOOST_INSIGHT.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Chaos DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_CHAOS",
        "value": 100,
        "display": "+1% vs Chaos DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "insight"
  },
  {
    "id": 10051,
    "strId": "BI_MAID_LANTERN_1",
    "name": "Call of the Void (Undispellable)",
    "desc": "ATK and CRIT DMG increase by {0}%. Stacks up to 5 times.",
    "icon": "BUFF_MAID_LANTERN.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      },
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 100,
        "display": "+1% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "call-of-the-void-undispellable"
  },
  {
    "id": 10052,
    "strId": "BI_MAID_LANTERN_2",
    "name": "Dark Night",
    "desc": "Effect Hit increases by {0}% at the end of each turn. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 100,
        "display": "+1% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dark-night"
  },
  {
    "id": 10091,
    "strId": "BI_MAID_TWOHANDER_1",
    "name": "Awakened Memory (Undispellable)",
    "desc": "Deals 50% increased Ultimate Skill DMG. Stacks up to 3 times.",
    "icon": "BUFF_MAID_TWOHANDER.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 5000,
        "display": "+50% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "awakened-memory-undispellable"
  },
  {
    "id": 10111,
    "strId": "BI_KINGDOM_SHIELDER_1",
    "name": "Rule of Monastir",
    "desc": "Increases DEF and self Effect Hit by 15%.",
    "icon": "BUFF_MONASTIR_RULES.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1500,
        "display": "+15% DEF"
      },
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 1500,
        "display": "+15% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "rule-of-monastir"
  },
  {
    "id": 10141,
    "strId": "BI_NIGHTMARE_REAPER_1",
    "name": "Light of the Phantasm",
    "desc": "ATK and SPD increase by 15%.",
    "icon": "BUFF_LUCID_DREAM_LIGHT.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 1500,
        "display": "+15% ATK"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1500,
        "display": "+15% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "light-of-the-phantasm"
  },
  {
    "id": 10161,
    "strId": "BI_EASTERN_SWORDMASTER_1",
    "name": "Azure Bamboo Thousand Blades (Undispellable)",
    "desc": "ATK and DEF increase by {0}%. Stacks up to 3 times.",
    "icon": "BUFF_EASTERN_SWORDMASTERD_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      },
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 100,
        "display": "+1% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "azure-bamboo-thousand-blades-undispellable"
  },
  {
    "id": 10171,
    "strId": "BI_INCOGNITA_LANDGRAVE_1",
    "name": "DMG Increase per Burn",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1000,
        "display": "+10% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dmg-increase-per-burn"
  },
  {
    "id": 10241,
    "strId": "BI_SAINTESS_ELF_1",
    "name": "Holy Blessing",
    "desc": "Takes 25% reduced damage and increases self Effect RES by 25%.",
    "icon": "BUFF_HOLY_BLESS.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 2500,
        "display": "+25% DMG Taken Reduction"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 2500,
        "display": "+25% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "holy-blessing"
  },
  {
    "id": 10261,
    "strId": "BI_RECON_KNUCKLE_1",
    "name": "Harsh Pressure",
    "desc": "CRIT DMG increases by {0}% after using a Basic Skill. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 100,
        "display": "+1% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "harsh-pressure"
  },
  {
    "id": 10311,
    "strId": "BI_STARPIERCER_OMEGA_1",
    "name": "Power-Up Star",
    "desc": "Increases SPD by 5%. Stacks up to 3 times.",
    "icon": "BUFF_POWER_UP_STAR.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 500,
        "display": "+5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "power-up-star"
  },
  {
    "id": 10321,
    "strId": "BI_BUNNY_KNIGHT_1",
    "name": "Lucky Token (Undispellable)",
    "desc": "Penetrates 20% of DEF.",
    "icon": "BUFF_BUNNY_KNIGHT_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF Penetration",
        "rawStat": "NST_RATE_PENETRATE_DEF",
        "value": 2000,
        "display": "+20% DEF Penetration"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "lucky-token-undispellable"
  },
  {
    "id": 10334,
    "strId": "BI_WEST_BEAMSWORD_2",
    "name": "Blade Gale Technique",
    "desc": "ATK increases by 3%. Stacks up to 5 times.",
    "icon": "BUFF_WEST_BEAMSWORD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 300,
        "display": "+3% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "blade-gale-technique"
  },
  {
    "id": 10412,
    "strId": "BI_WILD_HOG_2",
    "name": "Berserk Mode (Undispellable)",
    "desc": "",
    "icon": "BUFF_OVERRUN_MODE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 3000,
        "display": "+30% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "berserk-mode-undispellable"
  },
  {
    "id": 10431,
    "strId": "BI_BUNNY_SCISSORS_1",
    "name": "Normal Ball (Undispellable)",
    "desc": "Deals 1% increased damage.",
    "icon": "BUFF_NORMAL_BALL.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "normal-ball-undispellable"
  },
  {
    "id": 10432,
    "strId": "BI_BUNNY_SCISSORS_2",
    "name": "Seven Ball (Undispellable)",
    "desc": "Damage dealt increases by 5%.",
    "icon": "BUFF_SEVEN_BALL.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 700,
        "display": "+7% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "seven-ball-undispellable"
  },
  {
    "id": 10441,
    "strId": "BI_BUNNY_SPEAR_1",
    "name": "Jackpot Bloom",
    "desc": "CRIT Rate and CRIT DMG increase by 20%.",
    "icon": "BUFF_JACKPOT_BLOOM.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 2000,
        "display": "+20% CRIT Rate"
      },
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 2000,
        "display": "+20% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "jackpot-bloom"
  },
  {
    "id": 10451,
    "strId": "BI_SUMMER_ORACLE_1",
    "name": "Water Ball",
    "desc": "CRIT RES increases by 50%.",
    "icon": "BUFF_SUMMER_ORACLE_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT RES",
        "rawStat": "NST_RATE_CRITICAL_EVADE",
        "value": 5000,
        "display": "+50% CRIT RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "water-ball"
  },
  {
    "id": 10452,
    "strId": "BI_SUMMER_ORACLE_2",
    "name": "Big Water Ball",
    "desc": "Effect Hit and Effect RES increase by 30%.",
    "icon": "BUFF_SUMMER_ORACLE_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 3000,
        "display": "+30% Effect Hit"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 3000,
        "display": "+30% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "big-water-ball"
  },
  {
    "id": 10463,
    "strId": "BI_SUMMER_SMILE_2",
    "name": "Beach Fireworks",
    "desc": "DEF Penetration increases by {0}% for each debuff on the enemy. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF Penetration",
        "rawStat": "NST_RATE_PENETRATE_DEF",
        "value": 100,
        "display": "+1% DEF Penetration"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "beach-fireworks"
  },
  {
    "id": 10484,
    "strId": "BI_SUMMER_PRAY_1",
    "name": "Seasonal Business",
    "desc": "Self Effect RES increases by {0}% when attacked by a single-target attack. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 100,
        "display": "+1% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "seasonal-business"
  },
  {
    "id": 10511,
    "strId": "BI_CONSTRUCT_GADGET_1",
    "name": "Demolition Mode",
    "desc": "Deals 10% increased damage.",
    "icon": "BUFF_DEMOLITION_MODE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1000,
        "display": "+10% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "demolition-mode"
  },
  {
    "id": 10521,
    "strId": "BI_DETECTIVE_WATSON_1",
    "name": "Mr. Rabbit's Detective Consulting",
    "desc": "CRIT Rate increases by 15%.",
    "icon": "BUFF_MR_RABBIT_INVESTIGATION_START.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 1500,
        "display": "+15% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "mr-rabbit-s-detective-consulting"
  },
  {
    "id": 10541,
    "strId": "BI_DRESS_STRANIS_1",
    "name": "Starlight Wish (Undispellable)",
    "desc": "Increases SPD by 10% and self Effect RES by 30%.",
    "icon": "BUFF_STARLIGHT_WISH.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1000,
        "display": "+10% SPD"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 3000,
        "display": "+30% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "starlight-wish-undispellable"
  },
  {
    "id": 10542,
    "strId": "BI_DRESS_STRANIS_2",
    "name": "Increases Dual Attack Chance by 10% (A)",
    "desc": "Increases Dual Attack Chance by 10%. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 1000,
        "display": "+10% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "increases-dual-attack-chance-by-10-a"
  },
  {
    "id": 10543,
    "strId": "BI_DRESS_STRANIS_3",
    "name": "Increases Dual Attack Chance by 15% (B)",
    "desc": "Increases Dual Attack Chance by 15%. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 1500,
        "display": "+15% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "increases-dual-attack-chance-by-15-b"
  },
  {
    "id": 10544,
    "strId": "BI_DRESS_STRANIS_4",
    "name": "Increases Dual Attack Chance by 20% (C)",
    "desc": "Increases Dual Attack Chance by 20%. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 2000,
        "display": "+20% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "increases-dual-attack-chance-by-20-c"
  },
  {
    "id": 10551,
    "strId": "BI_WEDDING_SHIELDER_1",
    "name": "Oath",
    "desc": "Self DEF increases by {0}% after using a Special Skill. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 600,
        "display": "+6% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "oath"
  },
  {
    "id": 10561,
    "strId": "BI_WEDDING_DUALSWORD_1",
    "name": "Guard Ring",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 600,
        "display": "+6% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "guard-ring"
  },
  {
    "id": 10571,
    "strId": "BI_BUNNY_PRAY_1",
    "name": "High Roller (Undispellable)",
    "desc": "Deals 1% increased Basic Skill DMG. Stacks up to 5 times.",
    "icon": "BUFF_HIGH_ROLLER.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Basic Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ATTACK",
        "value": 100,
        "display": "+1% Basic Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "high-roller-undispellable"
  },
  {
    "id": 30031,
    "strId": "BI_ASHES_THRONE_1",
    "name": "Owner of the Throne (Undispellable)",
    "desc": "Increases Basic Skill DMG and SPD by 15%.",
    "icon": "BUFF_THRONE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Basic Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ATTACK",
        "value": 1500,
        "display": "+15% Basic Skill DMG Increase"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1500,
        "display": "+15% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "owner-of-the-throne-undispellable"
  },
  {
    "id": 30033,
    "strId": "BI_TYRANT_1",
    "name": "Tyrant of the North (Undispellable)",
    "desc": "Blocks excess damage and permanently increases ATK by 10% if HP reaches 30% of Max HP when attacked. Occurs once per battle.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "tyrant-of-the-north-undispellable"
  },
  {
    "id": 50001,
    "strId": "BI_STAT_NST_NV_RATE_ATK",
    "name": "Stat: ATK Ratio",
    "desc": "This stat displays ATK ratio.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-atk-ratio"
  },
  {
    "id": 50002,
    "strId": "BI_STAT_NST_NV_RATE_HP",
    "name": "Stat: HP Ratio",
    "desc": "This stat displays HP ratio.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 100,
        "display": "+1% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-hp-ratio"
  },
  {
    "id": 50003,
    "strId": "BI_STAT_NST_NV_RATE_DEF",
    "name": "Stat: DEF Ratio",
    "desc": "This stat displays DEF ratio.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 100,
        "display": "+1% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-def-ratio"
  },
  {
    "id": 50004,
    "strId": "BI_STAT_NST_NV_RATE_TURN_SPEED",
    "name": "Stat: SPD Ratio",
    "desc": "This stat displays SPD ratio.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1,
        "display": "+0% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-spd-ratio"
  },
  {
    "id": 50005,
    "strId": "BI_STAT_NST_RATE_CRITICAL",
    "name": "Stat: CRIT Rate",
    "desc": "This stat displays CRIT Rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 100,
        "display": "+1% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-rate"
  },
  {
    "id": 50006,
    "strId": "BI_STAT_NST_RATE_CRITICAL_DAMAGE",
    "name": "Stat: CRIT DMG",
    "desc": "This stat displays CRIT DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 100,
        "display": "+1% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-dmg"
  },
  {
    "id": 50007,
    "strId": "BI_STAT_NST_RATE_EFFECT_HIT",
    "name": "Stat: Effect Hit",
    "desc": "This stat displays Effect Hit.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 100,
        "display": "+1% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-effect-hit"
  },
  {
    "id": 50009,
    "strId": "BI_STAT_NST_RATE_HIT",
    "name": "Stat: ACC",
    "desc": "This stat displays ACC.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ACC",
        "rawStat": "NST_RATE_HIT",
        "value": 100,
        "display": "+1% ACC"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-acc"
  },
  {
    "id": 50010,
    "strId": "BI_STAT_NST_RATE_EVADE",
    "name": "Stat: Evasion",
    "desc": "This stat displays Evasion.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": 100,
        "display": "+1% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-evasion"
  },
  {
    "id": 50011,
    "strId": "BI_STAT_NST_RATE_CROSS_ATTACK",
    "name": "Stat: Dual Attack Chance",
    "desc": "This stat displays Dual Attack Chance.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 100,
        "display": "+1% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dual-attack-chance"
  },
  {
    "id": 50012,
    "strId": "BI_STAT_NST_RATE_REVENGE_ATTACK",
    "name": "Stat: Counterattack Chance",
    "desc": "This stat displays Counterattack Chance.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Counterattack Chance",
        "rawStat": "NST_RATE_REVENGE_ATTACK",
        "value": 100,
        "display": "+1% Counterattack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-counterattack-chance"
  },
  {
    "id": 50013,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP",
    "name": "Stat: DMG Increase",
    "desc": "This stat displays DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase"
  },
  {
    "id": 50014,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE",
    "name": "Stat: DMG Taken Reduction",
    "desc": "This stat displays DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction"
  },
  {
    "id": 50015,
    "strId": "BI_STAT_NST_RATE_PENETRATE_DEF",
    "name": "Stat: DEF Penetration",
    "desc": "This stat displays DEF Penetration rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF Penetration",
        "rawStat": "NST_RATE_PENETRATE_DEF",
        "value": 100,
        "display": "+1% DEF Penetration"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-def-penetration"
  },
  {
    "id": 50016,
    "strId": "BI_STAT_NST_RATE_PENETRATE_DEF_RESIST",
    "name": "Stat: DEF Penetration RES",
    "desc": "This stat displays DEF Penetration RES rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF Penetration RES",
        "rawStat": "NST_RATE_PENETRATE_DEF_RESIST",
        "value": 100,
        "display": "+1% DEF Penetration RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-def-penetration-res"
  },
  {
    "id": 50017,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_STRIKER",
    "name": "Stat: DMG Increase vs Striker",
    "desc": "This stat displays DMG Increase rate against Striker units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Striker DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_STRIKER",
        "value": 100,
        "display": "+1% vs Striker DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-striker"
  },
  {
    "id": 50018,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_DEFENDER",
    "name": "Stat: DMG Increase vs Defender",
    "desc": "This stat displays DMG Increase rate against Defender units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Defender DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_DEFENDER",
        "value": 100,
        "display": "+1% vs Defender DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-defender"
  },
  {
    "id": 50019,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_RANGER",
    "name": "Stat: DMG Increase vs Ranger",
    "desc": "This stat displays DMG Increase rate against Ranger units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Ranger DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_RANGER",
        "value": 100,
        "display": "+1% vs Ranger DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-ranger"
  },
  {
    "id": 50020,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_CASTER",
    "name": "Stat: DMG Increase vs Caster",
    "desc": "This stat displays DMG Increase rate against Caster units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Caster DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_CASTER",
        "value": 100,
        "display": "+1% vs Caster DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-caster"
  },
  {
    "id": 50021,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_SUPPORTER",
    "name": "Stat: DMG Increase vs Supporter",
    "desc": "This stat displays DMG Increase rate against Supporter units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Supporter DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_SUPPORTER",
        "value": 100,
        "display": "+1% vs Supporter DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-supporter"
  },
  {
    "id": 50022,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ROLE_ASSASSIN",
    "name": "Stat: DMG Increase vs Assassin",
    "desc": "This stat displays DMG Increase rate against Assassin units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Assassin DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ROLE_ASSASSIN",
        "value": 100,
        "display": "+1% vs Assassin DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-assassin"
  },
  {
    "id": 50023,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST",
    "name": "Stat: Attribute DMG Increase",
    "desc": "This stat displays Attribute DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Attribute DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST",
        "value": 100,
        "display": "+1% Attribute DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-attribute-dmg-increase"
  },
  {
    "id": 50024,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST_SUN",
    "name": "Stat: DMG Increase vs Sun Type",
    "desc": "This stat displays DMG Increase rate against Sun units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Sun DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_SUN",
        "value": 100,
        "display": "+1% vs Sun DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-sun-type"
  },
  {
    "id": 50025,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST_MOON",
    "name": "Stat: DMG Increase vs Moon Type",
    "desc": "This stat displays DMG Increase rate against Moon units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Moon DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_MOON",
        "value": 100,
        "display": "+1% vs Moon DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-moon-type"
  },
  {
    "id": 50026,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST_STAR",
    "name": "Stat: DMG Increase vs Star Type",
    "desc": "This stat displays DMG Increase rate against Star units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Star DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_STAR",
        "value": 100,
        "display": "+1% vs Star DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-star-type"
  },
  {
    "id": 50027,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST_ORDER",
    "name": "Stat: DMG Increase vs Order Type",
    "desc": "This stat displays DMG Increase rate against Order units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Order DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_ORDER",
        "value": 100,
        "display": "+1% vs Order DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-order-type"
  },
  {
    "id": 50028,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ADJUST_CHAOS",
    "name": "Stat: DMG Increase vs Chaos Type",
    "desc": "This stat displays DMG Increase rate against Chaos units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Chaos DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_ADJUST_CHAOS",
        "value": 100,
        "display": "+1% vs Chaos DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-chaos-type"
  },
  {
    "id": 50029,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_ATTACK",
    "name": "Stat: Basic Skill DMG Increase",
    "desc": "This stat displays DMG Increase rate for Basic Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Basic Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ATTACK",
        "value": 100,
        "display": "+1% Basic Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-basic-skill-dmg-increase"
  },
  {
    "id": 50030,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_SPECIAL",
    "name": "Stat: Special Skill DMG Increase",
    "desc": "This stat displays DMG Increase rate for Special Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Special Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_SPECIAL",
        "value": 100,
        "display": "+1% Special Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-special-skill-dmg-increase"
  },
  {
    "id": 50031,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_HYPER",
    "name": "Stat: Ultimate Skill DMG Increase",
    "desc": "This stat displays DMG Increase rate for Ultimate Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_HYPER",
        "value": 100,
        "display": "+1% Ultimate Skill DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-ultimate-skill-dmg-increase"
  },
  {
    "id": 50032,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE",
    "name": "Stat: DMG Increase vs Single Target",
    "desc": "This stat displays DMG Increase rate against single targets.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Single Target DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE",
        "value": 100,
        "display": "+1% vs Single Target DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-single-target"
  },
  {
    "id": 50033,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
    "name": "Stat: DMG Increase vs AoE Targets",
    "desc": "This stat displays DMG Increase rate against AoE targets.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 100,
        "display": "+1% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-aoe-targets"
  },
  {
    "id": 50034,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_STRIKER",
    "name": "Stat: DMG Taken Reduction vs Striker",
    "desc": "This stat displays DMG Taken Reduction rate against Striker units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Striker DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_STRIKER",
        "value": 100,
        "display": "+1% vs Striker DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-striker"
  },
  {
    "id": 50035,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_DEFENDER",
    "name": "Stat: DMG Taken Reduction vs Defender",
    "desc": "This stat displays DMG Taken Reduction rate against Defender units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Defender DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_DEFENDER",
        "value": 100,
        "display": "+1% vs Defender DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-defender"
  },
  {
    "id": 50036,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_RANGER",
    "name": "Stat: DMG Taken Reduction vs Ranger",
    "desc": "This stat displays DMG Taken Reduction rate against Ranger units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Ranger DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_RANGER",
        "value": 100,
        "display": "+1% vs Ranger DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-ranger"
  },
  {
    "id": 50037,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_CASTER",
    "name": "Stat: DMG Taken Reduction vs Caster",
    "desc": "This stat displays DMG Taken Reduction rate against Caster units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Caster DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_CASTER",
        "value": 100,
        "display": "+1% vs Caster DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-caster"
  },
  {
    "id": 50038,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_SUPPORTER",
    "name": "Stat: DMG Taken Reduction vs Supporter",
    "desc": "This stat displays DMG Taken Reduction rate against Supporter units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Supporter DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_SUPPORTER",
        "value": 100,
        "display": "+1% vs Supporter DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-supporter"
  },
  {
    "id": 50039,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ROLE_ASSASSIN",
    "name": "Stat: DMG Taken Reduction vs Assassin",
    "desc": "This stat displays DMG Taken Reduction rate against Assassin units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Assassin DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ROLE_ASSASSIN",
        "value": 100,
        "display": "+1% vs Assassin DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-assassin"
  },
  {
    "id": 50040,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST",
    "name": "Stat: Attribute DMG Taken Reduction",
    "desc": "This stat displays Attribute DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Attribute DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST",
        "value": 100,
        "display": "+1% Attribute DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-attribute-dmg-taken-reduction"
  },
  {
    "id": 50041,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST_SUN",
    "name": "Stat: DMG Taken Reduction vs Sun Type",
    "desc": "This stat displays DMG Taken Reduction rate against Sun units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Sun DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_SUN",
        "value": 100,
        "display": "+1% vs Sun DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-sun-type"
  },
  {
    "id": 50042,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST_MOON",
    "name": "Stat: DMG Taken Reduction vs Moon Type",
    "desc": "This stat displays DMG Taken Reduction rate against Moon units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Moon DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_MOON",
        "value": 100,
        "display": "+1% vs Moon DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-moon-type"
  },
  {
    "id": 50043,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST_STAR",
    "name": "Stat: DMG Taken Reduction vs Star Type",
    "desc": "This stat displays DMG Taken Reduction rate against Star units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Star DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_STAR",
        "value": 100,
        "display": "+1% vs Star DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-star-type"
  },
  {
    "id": 50044,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST_ORDER",
    "name": "Stat: DMG Taken Reduction vs Order Type",
    "desc": "This stat displays DMG Taken Reduction rate against Order units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Order DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_ORDER",
        "value": 100,
        "display": "+1% vs Order DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-order-type"
  },
  {
    "id": 50045,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_ADJUST_CHAOS",
    "name": "Stat: DMG Taken Reduction vs Chaos Type",
    "desc": "This stat displays DMG Taken Reduction rate against Chaos units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Chaos DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_CHAOS",
        "value": 100,
        "display": "+1% vs Chaos DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-chaos-type"
  },
  {
    "id": 50046,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_ATTACK",
    "name": "Stat: Basic Skill DMG Taken Reduction",
    "desc": "This stat displays DMG Taken Reduction rate from Basic Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Basic Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ATTACK",
        "value": 100,
        "display": "+1% Basic Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-basic-skill-dmg-taken-reduction"
  },
  {
    "id": 50047,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_SPECIAL",
    "name": "Stat: Special Skill DMG Taken Reduction",
    "desc": "This stat displays DMG Taken Reduction rate from Special Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Special Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_SPECIAL",
        "value": 100,
        "display": "+1% Special Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-special-skill-dmg-taken-reduction"
  },
  {
    "id": 50048,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_HYPER",
    "name": "Stat: Ultimate Skill DMG Taken Reduction",
    "desc": "This stat displays DMG Taken Reduction rate from Ultimate Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_HYPER",
        "value": 100,
        "display": "+1% Ultimate Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-ultimate-skill-dmg-taken-reduction"
  },
  {
    "id": 50049,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE",
    "name": "Stat: DMG Taken Reduction vs Single-Target Attack",
    "desc": "This stat displays DMG Taken Reduction rate from single-target attacks.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Single Target DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE",
        "value": 100,
        "display": "+1% vs Single Target DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-single-target-attack"
  },
  {
    "id": 50050,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
    "name": "Stat: DMG Taken Reduction vs All-target Attack",
    "desc": "This stat displays DMG Taken Reduction rate from all-target attacks.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs All Targets DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
        "value": 100,
        "display": "+1% vs All Targets DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-all-target-attack"
  },
  {
    "id": 50051,
    "strId": "BI_STAT_NST_RATE_DAMAGE_PER_NOW_TARGET_HP",
    "name": "Stat: DMG Scaling with Target Current HP",
    "desc": "This stat displays damage that scales with the target's current HP.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Current HP-Based DMG",
        "rawStat": "NST_RATE_DAMAGE_PER_NOW_TARGET_HP",
        "value": 100,
        "display": "+1% Current HP-Based DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-scaling-with-target-current-hp"
  },
  {
    "id": 50052,
    "strId": "BI_STAT_NST_RATE_DAMAGE_PER_MAX_TARGET_HP",
    "name": "Stat: DMG Scaling with Target Max HP",
    "desc": "This stat displays damage that scales with the target's max HP.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Max HP-Based DMG",
        "rawStat": "NST_RATE_DAMAGE_PER_MAX_TARGET_HP",
        "value": 100,
        "display": "+1% Max HP-Based DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-scaling-with-target-max-hp"
  },
  {
    "id": 50053,
    "strId": "BI_STAT_NST_RATE_CRITICAL_EVADE",
    "name": "Stat: CRIT RES",
    "desc": "This stat displays CRIT RES.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT RES",
        "rawStat": "NST_RATE_CRITICAL_EVADE",
        "value": 100,
        "display": "+1% CRIT RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-res"
  },
  {
    "id": 50054,
    "strId": "BI_STAT_NST_RATE_CRITICAL_DAMAGE_REDUCE",
    "name": "Stat: CRIT DMG Taken Reduction",
    "desc": "This stat displays CRIT DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT DMG Taken Reduction",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% CRIT DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-dmg-taken-reduction"
  },
  {
    "id": 50055,
    "strId": "BI_STAT_NST_RATE_NONCRITICAL_DAMAGE_REDUCE",
    "name": "Stat: Non CRIT DMG Taken Reduction",
    "desc": "This stat displays Non CRIT DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Non-CRIT DMG Taken Reduction",
        "rawStat": "NST_RATE_NONCRITICAL_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% Non-CRIT DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-non-crit-dmg-taken-reduction"
  },
  {
    "id": 50056,
    "strId": "BI_STAT_NST_RATE_DAMAGE_LIMIT_BY_HP",
    "name": "Stat: Max DMG Limit",
    "desc": "This stat displays the Max DMG Limit rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Max DMG Limit",
        "rawStat": "NST_RATE_DAMAGE_LIMIT_BY_HP",
        "value": 100,
        "display": "+1% Max DMG Limit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-max-dmg-limit"
  },
  {
    "id": 50057,
    "strId": "BI_STAT_NST_RATE_HEAL_GIVE",
    "name": "Stat: Increased Healing Given",
    "desc": "This stat displays increase in Healing Given.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Outgoing Healing",
        "rawStat": "NST_RATE_HEAL_GIVE",
        "value": 100,
        "display": "+1% Outgoing Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-increased-healing-given"
  },
  {
    "id": 50058,
    "strId": "BI_STAT_NST_RATE_HEAL_RECEIVE",
    "name": "Stat: Increased Healing Received",
    "desc": "This stat displays increase in Healing Received.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": 100,
        "display": "+1% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-increased-healing-received"
  },
  {
    "id": 50059,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SELF_BUFF_COUNT",
    "name": "Stat: DMG Increase per Buff on Self",
    "desc": "This stat displays DMG Increase rate per buff on the caster. ",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-buff-on-self"
  },
  {
    "id": 50060,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_TARGET_BUFF_COUNT",
    "name": "Stat: DMG Increase per Buff on Target",
    "desc": "This stat displays DMG Increase rate per buff on the target.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-buff-on-target"
  },
  {
    "id": 50061,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_MYTEAM_ALL_BUFF_COUNT",
    "name": "Stat: DMG Increase per Buff on All Allies",
    "desc": "This stat displays DMG Increase rate per buff on all allies.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-buff-on-all-allies"
  },
  {
    "id": 50062,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ENEMY_ALL_BUFF_COUNT",
    "name": "Stat: DMG Increase per Buff on All Enemies",
    "desc": "This stat displays DMG Increase rate per buff on all enemies.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-buff-on-all-enemies"
  },
  {
    "id": 50063,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SELF_DEBUFF_COUNT",
    "name": "Stat: DMG Increase per Debuff on Self",
    "desc": "This stat displays DMG Increase rate per debuff on the caster.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-debuff-on-self"
  },
  {
    "id": 50064,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_TARGET_DEBUFF_COUNT",
    "name": "Stat: DMG Increase per Debuff on Target",
    "desc": "This stat displays DMG Increase rate per debuff on the target.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-debuff-on-target"
  },
  {
    "id": 50065,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_MYTEAM_ALL_DEBUFF_COUNT",
    "name": "Stat: DMG Increase per Debuff on All Allies",
    "desc": "This stat displays DMG Increase rate per debuff on all allies.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-debuff-on-all-allies"
  },
  {
    "id": 50066,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_ENEMY_ALL_DEBUFF_COUNT",
    "name": "Stat: DMG Increase per Debuff on All Enemies",
    "desc": "This stat displays DMG Increase rate per debuff on all enemies.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-debuff-on-all-enemies"
  },
  {
    "id": 50067,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_AREA_TARGET_BUFF_COUNT",
    "name": "Stat: DMG Increase per Buff on All Enemies Upon All-target Attack",
    "desc": "This stat displays DMG Increase rate per buff on each unit during all-target attacks.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase per Target Buff",
        "rawStat": "NST_RATE_DAMAGE_UP_TARGET_BUFF_COUNT",
        "value": 100,
        "display": "+1% DMG Increase per Target Buff"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-buff-on-all-enemies-upon-all-target-attack"
  },
  {
    "id": 50068,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_AREA_TARGET_DEBUFF_COUNT",
    "name": "Stat: DMG Increase per Debuff on All Enemies Upon All-target Attack",
    "desc": "This stat displays DMG Increase rate per debuff on each unit during all-target attacks.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase per Target Debuff",
        "rawStat": "NST_RATE_DAMAGE_UP_TARGET_DEBUFF_COUNT",
        "value": 100,
        "display": "+1% DMG Increase per Target Debuff"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-per-debuff-on-all-enemies-upon-all-target-attack"
  },
  {
    "id": 50069,
    "strId": "BI_STAT_NST_RATE_DAMAGE_VAMPIRISM",
    "name": "Stat: Lifesteal",
    "desc": "This stat displays Lifesteal.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Lifesteal",
        "rawStat": "NST_RATE_DAMAGE_VAMPIRISM",
        "value": 100,
        "display": "+1% Lifesteal"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-lifesteal"
  },
  {
    "id": 50070,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_BREAK",
    "name": "Stat: DMG Increase vs Broken Targets",
    "desc": "This stat displays DMG Increase rate against Broken targets.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase (Break)",
        "rawStat": "NST_RATE_DAMAGE_UP_BREAK",
        "value": 100,
        "display": "+1% DMG Increase (Break)"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-broken-targets"
  },
  {
    "id": 50071,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_BREAK",
    "name": "Stat: DMG Taken Reduction vs Broken Targets",
    "desc": "This stat displays DMG Taken Reduction rate Broken targets.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Taken Reduction (Break)",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_BREAK",
        "value": 100,
        "display": "+1% DMG Taken Reduction (Break)"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-broken-targets"
  },
  {
    "id": 50101,
    "strId": "BI_STAT_NST_ATK",
    "name": "Stat: Flat ATK",
    "desc": "This stat displays Flat ATK.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_ATK",
        "value": 0,
        "display": "+0 ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-flat-atk"
  },
  {
    "id": 50102,
    "strId": "BI_STAT_NST_HP",
    "name": "Stat: Flat HP",
    "desc": "This stat displays Flat HP.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_HP",
        "value": 0,
        "display": "+0 HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-flat-hp"
  },
  {
    "id": 50103,
    "strId": "BI_STAT_NST_DEF",
    "name": "Stat: Flat DEF",
    "desc": "This stat displays Flat DEF.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_DEF",
        "value": 0,
        "display": "+0 DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-flat-def"
  },
  {
    "id": 50104,
    "strId": "BI_STAT_NST_TURN_SPEED",
    "name": "Stat: Flat SPD",
    "desc": "This stat displays Flat SPD.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_TURN_SPEED",
        "value": 0,
        "display": "+0 SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-flat-spd"
  },
  {
    "id": 50105,
    "strId": "BI_STAT_NST_SUPER_ARMOR",
    "name": "Stat: Toughness",
    "desc": "This stat displays Flat Max Toughness.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Super Armor",
        "rawStat": "NST_SUPER_ARMOR",
        "value": 0,
        "display": "+0 Super Armor"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness"
  },
  {
    "id": 50106,
    "strId": "BI_STAT_NST_SUPER_ARMOR_DAMAGE",
    "name": "Stat: Toughness DMG",
    "desc": "This stat displays Flat Toughness DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness",
        "rawStat": "NST_SUPER_ARMOR_DAMAGE",
        "value": 0,
        "display": "+0 Toughness"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-dmg"
  },
  {
    "id": 50107,
    "strId": "BI_STAT_NST_SUPER_ARMOR_TRUE_DAMAGE",
    "name": "Stat: Toughness Fixed DMG",
    "desc": "This stat displays Flat Toughness Fixed DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness Fixed DMG",
        "rawStat": "NST_SUPER_ARMOR_TRUE_DAMAGE",
        "value": 0,
        "display": "+0 Toughness Fixed DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-fixed-dmg"
  },
  {
    "id": 50108,
    "strId": "BI_STAT_NST_SUPER_ARMOR_DAMAGE_REDUCE",
    "name": "Stat: Toughness DMG Taken Reduction",
    "desc": "This stat displays Flat Toughness DMG Taken Reduction.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness DMG Reduction",
        "rawStat": "NST_SUPER_ARMOR_DAMAGE_REDUCE",
        "value": 0,
        "display": "+0 Toughness DMG Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-dmg-taken-reduction"
  },
  {
    "id": 50109,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_UNIT_SLASH",
    "name": "Stat: Slash Skill DMG Increase",
    "desc": "This stat displays Slash Skill DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Slash DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_SLASH",
        "value": 100,
        "display": "+1% vs Slash DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-slash-skill-dmg-increase"
  },
  {
    "id": 50110,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_UNIT_IMPACT",
    "name": "Stat: Impact Skill DMG Increase",
    "desc": "This stat displays Impact Skill DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Impact DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_IMPACT",
        "value": 100,
        "display": "+1% vs Impact DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-impact-skill-dmg-increase"
  },
  {
    "id": 50111,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_UNIT_ELEMENT",
    "name": "Stat: Elemental Skill DMG Increase",
    "desc": "This stat displays Elemental Skill DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Element DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_ELEMENT",
        "value": 100,
        "display": "+1% vs Element DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-elemental-skill-dmg-increase"
  },
  {
    "id": 50112,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_UNIT_SPIRIT",
    "name": "Stat: Psychic Skill DMG Increase",
    "desc": "This stat displays Psychic Skill DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Spirit DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_SPIRIT",
        "value": 100,
        "display": "+1% vs Spirit DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-psychic-skill-dmg-increase"
  },
  {
    "id": 50113,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_UNIT_VOID",
    "name": "Stat: Void Skill DMG Increase",
    "desc": "This stat displays Void Skill DMG Increase rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Void DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_UNIT_VOID",
        "value": 100,
        "display": "+1% vs Void DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-void-skill-dmg-increase"
  },
  {
    "id": 50114,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_UNIT_SLASH",
    "name": "Stat: Slash Skill DMG Taken Reduction",
    "desc": "This stat displays Slash Skill DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Slash DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_SLASH",
        "value": 100,
        "display": "+1% vs Slash DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-slash-skill-dmg-taken-reduction"
  },
  {
    "id": 50115,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_UNIT_IMPACT",
    "name": "Stat: Impact Skill DMG Taken Reduction",
    "desc": "This stat displays Impact Skill DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Impact DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_IMPACT",
        "value": 100,
        "display": "+1% vs Impact DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-impact-skill-dmg-taken-reduction"
  },
  {
    "id": 50116,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_UNIT_ELEMENT",
    "name": "Stat: Elemental Skill DMG Taken Reduction",
    "desc": "This stat displays Elemental Skill DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Element DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_ELEMENT",
        "value": 100,
        "display": "+1% vs Element DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-elemental-skill-dmg-taken-reduction"
  },
  {
    "id": 50117,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_UNIT_SPIRIT",
    "name": "Stat: Psychic Skill DMG Taken Reduction",
    "desc": "This stat displays Psychic Skill DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Spirit DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_SPIRIT",
        "value": 100,
        "display": "+1% vs Spirit DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-psychic-skill-dmg-taken-reduction"
  },
  {
    "id": 50118,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_UNIT_VOID",
    "name": "Stat: Void Skill DMG Taken Reduction",
    "desc": "This stat displays Void Skill DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Void DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_VOID",
        "value": 100,
        "display": "+1% vs Void DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-void-skill-dmg-taken-reduction"
  },
  {
    "id": 50119,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_FORCE",
    "name": "Stat: DMG Taken Reduction",
    "desc": "This stat displays DMG Taken Reduction rate.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction"
  },
  {
    "id": 51001,
    "strId": "BI_STAT_NST_NV_RATE_ATK_INFINITE",
    "name": "Stat: ATK Ratio (Infinite Turns)",
    "desc": "This stat displays ATK ratio (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-atk-ratio-infinite-turns"
  },
  {
    "id": 51002,
    "strId": "BI_STAT_NST_NV_RATE_HP_INFINITE",
    "name": "Stat: HP Ratio (Infinite Turns)",
    "desc": "This stat displays HP ratio (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 100,
        "display": "+1% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-hp-ratio-infinite-turns"
  },
  {
    "id": 51003,
    "strId": "BI_STAT_NST_NV_RATE_DEF_INFINITE",
    "name": "Stat: DEF Ratio (Infinite Turns)",
    "desc": "This stat displays DEF ratio (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 100,
        "display": "+1% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-def-ratio-infinite-turns"
  },
  {
    "id": 51004,
    "strId": "BI_STAT_NST_NV_RATE_TURN_SPEED_INFINITE",
    "name": "Stat: SPD Ratio (Infinite Turns)",
    "desc": "This stat displays SPD ratio (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1,
        "display": "+0% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-spd-ratio-infinite-turns"
  },
  {
    "id": 51005,
    "strId": "BI_STAT_NST_RATE_CRITICAL_INFINITE",
    "name": "Stat: CRIT Rate (Infinite Turns)",
    "desc": "This stat displays CRIT Rate (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 100,
        "display": "+1% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-rate-infinite-turns"
  },
  {
    "id": 51006,
    "strId": "BI_STAT_NST_RATE_CRITICAL_DAMAGE_INFINITE",
    "name": "Stat: CRIT DMG (Infinite Turns)",
    "desc": "This stat displays CRIT DMG (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 100,
        "display": "+1% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-dmg-infinite-turns"
  },
  {
    "id": 51007,
    "strId": "BI_STAT_NST_RATE_EFFECT_HIT_INFINITE",
    "name": "Stat: Effect Hit (Infinite Turns)",
    "desc": "This stat displays Effect Hit (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 100,
        "display": "+1% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-effect-hit-infinite-turns"
  },
  {
    "id": 51008,
    "strId": "BI_STAT_NST_RATE_EFFECT_EVADE_INFINITE",
    "name": "Stat: Effect RES (Infinite Turns)",
    "desc": "This stat displays Effect RES (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 100,
        "display": "+1% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-effect-res-infinite-turns"
  },
  {
    "id": 51009,
    "strId": "BI_STAT_NST_RATE_HIT_INFINITE",
    "name": "Stat: ACC (Infinite Turns)",
    "desc": "This stat displays ACC (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "ACC",
        "rawStat": "NST_RATE_HIT",
        "value": 100,
        "display": "+1% ACC"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-acc-infinite-turns"
  },
  {
    "id": 51010,
    "strId": "BI_STAT_NST_RATE_EVADE_INFINITE",
    "name": "Stat: Evasion (Infinite Turns)",
    "desc": "This stat displays Evasion (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": 100,
        "display": "+1% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-evasion-infinite-turns"
  },
  {
    "id": 51011,
    "strId": "BI_STAT_NST_RATE_CROSS_ATTACK_INFINITE",
    "name": "Stat: Dual Attack Chance (Infinite Turns)",
    "desc": "This stat displays Dual Attack Chance (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 100,
        "display": "+1% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dual-attack-chance-infinite-turns"
  },
  {
    "id": 51012,
    "strId": "BI_STAT_NST_RATE_REVENGE_ATTACK_INFINITE",
    "name": "Stat: Counterattack Chance (Infinite Turns)",
    "desc": "This stat displays Counterattack Chance (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Counterattack Chance",
        "rawStat": "NST_RATE_REVENGE_ATTACK",
        "value": 100,
        "display": "+1% Counterattack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-counterattack-chance-infinite-turns"
  },
  {
    "id": 51013,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_INFINITE",
    "name": "Stat: DMG Increase (Infinite Turns)",
    "desc": "This stat displays DMG Increase rate (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 100,
        "display": "+1% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-infinite-turns"
  },
  {
    "id": 51014,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_INFINITE",
    "name": "Stat: DMG Taken Reduction (Infinite Turns)",
    "desc": "This stat displays DMG Taken Reduction rate (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-infinite-turns"
  },
  {
    "id": 51032,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE_INFINITE",
    "name": "Stat: DMG Increase vs Single Target (Infinite Turns)",
    "desc": "This stat displays DMG Increase rate against single targets (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Single Target DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE",
        "value": 100,
        "display": "+1% vs Single Target DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-single-target-infinite-turns"
  },
  {
    "id": 51033,
    "strId": "BI_STAT_NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL_INFINITE",
    "name": "Stat: DMG Increase vs AoE Targets (Infinite Turns)",
    "desc": "This stat displays DMG Increase rate against AoE targets (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs All Targets DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL",
        "value": 100,
        "display": "+1% vs All Targets DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-increase-vs-aoe-targets-infinite-turns"
  },
  {
    "id": 51049,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE_INFINITE",
    "name": "Stat: DMG Taken Reduction vs Single-Target Attack (Infinite Turns)",
    "desc": "This stat displays DMG Taken Reduction rate from single-target attacks (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Single Target DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE",
        "value": 100,
        "display": "+1% vs Single Target DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-single-target-attack-infinite-turns"
  },
  {
    "id": 51050,
    "strId": "BI_STAT_NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL_INFINITE",
    "name": "Stat: DMG Taken Reduction vs All-target Attack (Infinite Turns)",
    "desc": "This stat displays DMG Taken Reduction rate from all-target attacks (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs All Targets DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
        "value": 100,
        "display": "+1% vs All Targets DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dmg-taken-reduction-vs-all-target-attack-infinite-turns"
  },
  {
    "id": 51054,
    "strId": "BI_STAT_NST_RATE_CRITICAL_DAMAGE_REDUCE_INFINITE",
    "name": "Stat: CRIT DMG Taken Reduction (Infinite Turns)",
    "desc": "This stat displays CRIT DMG Taken Reduction rate (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT DMG Taken Reduction",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE_REDUCE",
        "value": 100,
        "display": "+1% CRIT DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-crit-dmg-taken-reduction-infinite-turns"
  },
  {
    "id": 51057,
    "strId": "BI_STAT_NST_RATE_HEAL_GIVE_INFINITE",
    "name": "주는 회복 증감량 스탯(무한턴)",
    "desc": "This stat displays increase in Healing Given.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Outgoing Healing",
        "rawStat": "NST_RATE_HEAL_GIVE",
        "value": 100,
        "display": "+1% Outgoing Healing"
      }
    ],
    "effects": [],
    "flags": {}
  },
  {
    "id": 51104,
    "strId": "BI_STAT_NST_TURN_SPEED_INFINITE",
    "name": "Stat: Flat SPD (Infinite Turns)",
    "desc": "This stat displays Flat SPD (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_TURN_SPEED",
        "value": 0,
        "display": "+0 SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-flat-spd-infinite-turns"
  },
  {
    "id": 51105,
    "strId": "BI_STAT_NST_SUPER_ARMOR_INFINITE",
    "name": "Stat: Toughness (Infinite Turns)",
    "desc": "This stat displays Flat Max Toughness (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Super Armor",
        "rawStat": "NST_SUPER_ARMOR",
        "value": 0,
        "display": "+0 Super Armor"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-infinite-turns"
  },
  {
    "id": 51106,
    "strId": "BI_STAT_NST_SUPER_ARMOR_DAMAGE_INFINITE",
    "name": "Stat: Toughness DMG (Infinite Turns)",
    "desc": "This stat displays Flat Toughness DMG (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness",
        "rawStat": "NST_SUPER_ARMOR_DAMAGE",
        "value": 0,
        "display": "+0 Toughness"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-dmg-infinite-turns"
  },
  {
    "id": 51107,
    "strId": "BI_STAT_NST_SUPER_ARMOR_TRUE_DAMAGE_INFINITE",
    "name": "Stat: Toughness Fixed DMG (Infinite Turns)",
    "desc": "This stat displays Flat Toughness Fixed DMG (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness Fixed DMG",
        "rawStat": "NST_SUPER_ARMOR_TRUE_DAMAGE",
        "value": 0,
        "display": "+0 Toughness Fixed DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-fixed-dmg-infinite-turns"
  },
  {
    "id": 51108,
    "strId": "BI_STAT_NST_SUPER_ARMOR_DAMAGE_REDUCE_INFINITE",
    "name": "Stat: Toughness DMG Taken Reduction (Infinite Turns)",
    "desc": "This stat displays Flat Toughness DMG Taken Reduction (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness DMG Reduction",
        "rawStat": "NST_SUPER_ARMOR_DAMAGE_REDUCE",
        "value": 0,
        "display": "+0 Toughness DMG Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-toughness-dmg-taken-reduction-infinite-turns"
  },
  {
    "id": 51109,
    "strId": "BI_STAT_NST_RATE_DAMAGE_VAMPIRISM_INFINITE",
    "name": "Lifesteal Stat (Infinite Turns)",
    "desc": "This is the Lifesteal Stat (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Lifesteal",
        "rawStat": "NST_RATE_DAMAGE_VAMPIRISM",
        "value": 100,
        "display": "+1% Lifesteal"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "lifesteal-stat-infinite-turns"
  },
  {
    "id": 100041,
    "strId": "BI_DOLL_BOMBER_1",
    "name": "Spring Acceleration",
    "desc": "",
    "icon": "BUFF_DOLL_BOMBER_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1000,
        "display": "+10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "spring-acceleration"
  },
  {
    "id": 100051,
    "strId": "BI_DRONE_SPARROW_1",
    "name": "Alert Mode",
    "desc": "ATK and Counterattack Chance increase by 20%.",
    "icon": "BUFF_REVENGE_ATTACK.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Counterattack Chance",
        "rawStat": "NST_RATE_REVENGE_ATTACK",
        "value": 2000,
        "display": "+20% Counterattack Chance"
      },
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 2000,
        "display": "+20% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "alert-mode"
  },
  {
    "id": 100071,
    "strId": "BI_TANKER_STONE_1",
    "name": "Ground Meat",
    "desc": "DEF increases by 4% when attacked by an all-target attack. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 400,
        "display": "+4% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ground-meat"
  },
  {
    "id": 100081,
    "strId": "BI_WIZARD_MARBLE_1",
    "name": "Shadow of the Comet",
    "desc": "Self ATK increases by 3% at the end of each turn. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 300,
        "display": "+3% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "shadow-of-the-comet"
  },
  {
    "id": 100092,
    "strId": "BI_ARCHON_SPEAR_2",
    "name": "Sedimentation (Undispellable)",
    "desc": "ATK increases by {0}%. Stacks up to 10 times.",
    "icon": "BUFF_VOW.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 100,
        "display": "+1% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "sedimentation-undispellable"
  },
  {
    "id": 200091,
    "strId": "BI_SERGEANT_SABER_1",
    "name": "Charge Swordsmanship",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 400,
        "display": "+4% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "charge-swordsmanship"
  },
  {
    "id": 200101,
    "strId": "BI_SERGEANT_AID_1",
    "name": "Natural Recovery",
    "desc": "DEF increases by 4% when attacked by a single-target attack. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 400,
        "display": "+4% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "natural-recovery"
  },
  {
    "id": 200121,
    "strId": "BI_NOA_RESPONSE_2",
    "name": "Defense Corps Discipline",
    "desc": "After using a Skill, the caster's CRIT Rate increases by 3%. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 300,
        "display": "+3% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "defense-corps-discipline"
  },
  {
    "id": 200131,
    "strId": "BI_APOCALYPSE_HERALD_2",
    "name": "Apocalypse Custom Shoes",
    "desc": "Self Effect Hit increases by 5% after using a Basic Skill. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 500,
        "display": "+5% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "apocalypse-custom-shoes"
  },
  {
    "id": 200141,
    "strId": "BI_TANKER_STONE_2",
    "name": "Ground Meat",
    "desc": "DEF and Effect RES increase by 8% when attacked by an all-target attack. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 800,
        "display": "+8% DEF"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 800,
        "display": "+8% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ground-meat"
  },
  {
    "id": 200151,
    "strId": "BI_WIZARD_MARBLE_2",
    "name": "Shadow of the Comet",
    "desc": "Self ATK and CRIT Rate increase by 5% at the end of each turn. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 500,
        "display": "+5% ATK"
      },
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 500,
        "display": "+5% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "shadow-of-the-comet"
  },
  {
    "id": 200171,
    "strId": "BI_CERES_BOSS_EASY_1",
    "name": "Intensifying Pressure",
    "desc": "Self ATK increases by 5% at the end of each turn. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 500,
        "display": "+5% ATK"
      },
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 500,
        "display": "+5% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "intensifying-pressure"
  },
  {
    "id": 300031,
    "strId": "BI_CRUNNADUN_AXE_1",
    "name": "Chieftain's Wrath",
    "desc": "Self ATK increases by {0}% after using a Skill if the caster's HP is 50% or below. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 600,
        "display": "+6% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "chieftain-s-wrath"
  },
  {
    "id": 300051,
    "strId": "BI_LANIAKEA_RULER_1",
    "name": "Primordial Void",
    "desc": "Self ATK and DEF increase by 2% after attack. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 200,
        "display": "+2% ATK"
      },
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 200,
        "display": "+2% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "primordial-void"
  },
  {
    "id": 300081,
    "strId": "BI_VETERAN_BARON_1",
    "name": "Veteran Knight",
    "desc": "SPD and CRIT Rate increase by 20%.",
    "icon": "BUFF_VETERAN_BARON_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 2000,
        "display": "+20% CRIT Rate"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "veteran-knight"
  },
  {
    "id": 300091,
    "strId": "BI_BODYGUARD_HANDS_1",
    "name": "Security Reinforcement",
    "desc": "SPD and Effect Hit increase by 3%. This buff can be applied repeatedly.",
    "icon": "BUFF_BODYGUARD_HANDS_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 300,
        "display": "+3% SPD"
      },
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 300,
        "display": "+3% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "security-reinforcement"
  },
  {
    "id": 300101,
    "strId": "BI_VETERAN_GUN_1",
    "name": "Mercury Bullet (Undispellable)",
    "desc": "Damage dealt and DEF Penetration against single targets increase by 5%. Stacks up to 5 times.",
    "icon": "BUFF_VETERAN_GUN_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Single Target DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE",
        "value": 500,
        "display": "+5% vs Single Target DMG Increase"
      },
      {
        "stat": "DEF Penetration",
        "rawStat": "NST_RATE_PENETRATE_DEF",
        "value": 500,
        "display": "+5% DEF Penetration"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "mercury-bullet-undispellable"
  },
  {
    "id": 300111,
    "strId": "BI_VETERAN_SHIELD_1",
    "name": "Golden Will",
    "desc": "DEF and SPD increase by 20%.",
    "icon": "BUFF_VETERAN_SHIELD_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 2000,
        "display": "+20% DEF"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "golden-will"
  },
  {
    "id": 300141,
    "strId": "BI_VETERAN_GUN_BLACK_EASY_BOSS_1",
    "name": "Reticle Alignment",
    "desc": "Self ATK increases by 5% after using a Skill. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 500,
        "display": "+5% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "reticle-alignment"
  },
  {
    "id": 300151,
    "strId": "BI_VETERAN_SHIELD_BLACK_EASY_BOSS_1",
    "name": "Raise Shield",
    "desc": "Self DEF increases by 5% when attacked if the enemy has a buff. Stacks up to 5 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 500,
        "display": "+5% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "raise-shield"
  },
  {
    "id": 300201,
    "strId": "BI_WENDIGO_SNOW_1",
    "name": "Frost of Perdition (Undispellable)",
    "desc": "ATK and DEF increase by 10%. Stacks up to 3 times.",
    "icon": "BUFF_WENDIGO_SNOW_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 1000,
        "display": "+10% ATK"
      },
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1000,
        "display": "+10% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "frost-of-perdition-undispellable"
  },
  {
    "id": 300212,
    "strId": "BI_MOTIVATOR_HANDS_2",
    "name": "Version Upgrade (Undispellable)",
    "desc": "Damage taken decreases by {0}%. Stacks up to 5 times.",
    "icon": "BUFF_MOTIVATOR_HANDS_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 1000,
        "display": "+10% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "version-upgrade-undispellable"
  },
  {
    "id": 300221,
    "strId": "BI_PERSES_SWORD_1",
    "name": "Wraith",
    "desc": "Damage taken decreases by {0}% when attacked by a single-target attack.",
    "icon": "BUFF_PERSES_SWORD_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Single Target DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE",
        "value": 100,
        "display": "+1% vs Single Target DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "wraith"
  },
  {
    "id": 300322,
    "strId": "BI_GOLEM_HANDS_2",
    "name": "Polished Fragment (Undispellable)",
    "desc": "",
    "icon": "BUFF_ATTACK_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 300,
        "display": "+3% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "polished-fragment-undispellable"
  },
  {
    "id": 300381,
    "strId": "BI_PUNISHER_HANDS_1",
    "name": "Judgement Execution (Undispellable)",
    "desc": "SPD and Effect RES increase by 20%.",
    "icon": "BUFF_PUNISHER_HANDS_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 2000,
        "display": "+20% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "judgement-execution-undispellable"
  },
  {
    "id": 300391,
    "strId": "BI_PILGRIM_ALIEN_1",
    "name": "Penance",
    "desc": "",
    "icon": "BUFF_PILGRIM_ALIEN_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 2000,
        "display": "+20% ATK"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "penance"
  },
  {
    "id": 300392,
    "strId": "BI_PILGRIM_ALIEN_2",
    "name": "Forbidden Seal: Realm",
    "desc": "",
    "icon": "BUFF_PILGRIM_ALIEN_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Special Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_SPECIAL",
        "value": 2000,
        "display": "+20% Special Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "forbidden-seal-realm"
  },
  {
    "id": 300393,
    "strId": "BI_PILGRIM_ALIEN_3",
    "name": "Forbidden Seal: Prime",
    "desc": "",
    "icon": "BUFF_PILGRIM_ALIEN_3.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_HYPER",
        "value": 2000,
        "display": "+20% Ultimate Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "forbidden-seal-prime"
  },
  {
    "id": 300402,
    "strId": "BI_TUNER_CROWN_2",
    "name": "Tune (Undispellable)",
    "desc": "ATK and SPD increase by 3%. Stacks up to 5 times.",
    "icon": "BUFF_TUNER_CROWN_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 300,
        "display": "+3% ATK"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 300,
        "display": "+3% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "tune-undispellable"
  },
  {
    "id": 300411,
    "strId": "BI_EXCEED_EYES_1",
    "name": "Distorted Essence (Undispellable)",
    "desc": "DEF and SPD increase by 5%.",
    "icon": "BUFF_EXCEED_EYES_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 500,
        "display": "+5% DEF"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 500,
        "display": "+5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "distorted-essence-undispellable"
  },
  {
    "id": 300412,
    "strId": "BI_EXCEED_EYES_2",
    "name": "Inverted Truth (Undispellable)",
    "desc": "DEF and SPD increase by 10%.",
    "icon": "BUFF_EXCEED_EYES_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1000,
        "display": "+10% DEF"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1000,
        "display": "+10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "inverted-truth-undispellable"
  },
  {
    "id": 300413,
    "strId": "BI_EXCEED_EYES_3",
    "name": "Warped Providence (Undispellable)",
    "desc": "DEF and SPD increase by 15%.",
    "icon": "BUFF_EXCEED_EYES_3.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 1500,
        "display": "+15% DEF"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1500,
        "display": "+15% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "warped-providence-undispellable"
  },
  {
    "id": 300431,
    "strId": "BI_FALLEN_SHIELD_1",
    "name": "End of the Annihilator",
    "desc": "Self ATK and CRIT Rate increase by 2% at the start of the turn. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 200,
        "display": "+2% ATK"
      },
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 200,
        "display": "+2% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "end-of-the-annihilator"
  },
  {
    "id": 300451,
    "strId": "BI_BELLWETHER_HORN_1",
    "name": "Concentration",
    "desc": "Self ATK and SPD increase by 3% at the start of the turn. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 300,
        "display": "+3% ATK"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 300,
        "display": "+3% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "concentration"
  },
  {
    "id": 300551,
    "strId": "BI_WEST_BEAMSWORD_BOSS_1",
    "name": "Overwhelming Power",
    "desc": "Damage dealt and SPD increase by 15%.",
    "icon": "BUFF_WEST_BEAMSWORD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1500,
        "display": "+15% DMG Increase"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 1500,
        "display": "+15% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "overwhelming-power"
  },
  {
    "id": 300601,
    "strId": "BI_HAPPY68_MAD_1",
    "name": "Extermination Order",
    "desc": "SPD and Effect Hit increase by 20%.",
    "icon": "BUFF_HAPPY68_PEACE_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 2000,
        "display": "+20% SPD"
      },
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 2000,
        "display": "+20% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "extermination-order"
  },
  {
    "id": 300621,
    "strId": "BI_WEST_ROD_BEAMSWORD_CUBE_1",
    "name": "Flaw-Seeking Blade Gale",
    "desc": "Damage increases by 10% for each debuff on the enemy. Stacks up to 3 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1500,
        "display": "+15% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "flaw-seeking-blade-gale"
  },
  {
    "id": 300631,
    "strId": "BI_VOYAGER_STRANIS_BOSS_CUBE_1",
    "name": "Omega Card",
    "desc": "CRIT Rate increases by 10%. This buff can be applied repeatedly.",
    "icon": "BUFF_OMEGA_CARD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 1000,
        "display": "+10% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "omega-card"
  },
  {
    "id": 300641,
    "strId": "BI_VOYAGER_ORACLE_BOSS_CUBE_1",
    "name": "Super Omega Card",
    "desc": "CRIT Rate and CRIT DMG increase by 10%. This buff can be applied repeatedly.",
    "icon": "BUFF_SUPER_OMEGA_CARD.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 1000,
        "display": "+10% CRIT Rate"
      },
      {
        "stat": "CRIT DMG",
        "rawStat": "NST_RATE_CRITICAL_DAMAGE",
        "value": 1000,
        "display": "+10% CRIT DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "super-omega-card"
  },
  {
    "id": 300651,
    "strId": "BI_DEMORAIGIS_CORE_LIGHT_1",
    "name": "Endless Veil",
    "desc": "Damage dealt increases by 3% and damage taken from all-target attacks decreases by 3%. This buff can be applied repeatedly.",
    "icon": "BUFF_INFINITY_TABERNACLE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 300,
        "display": "+3% DMG Increase"
      },
      {
        "stat": "vs All Targets DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
        "value": 300,
        "display": "+3% vs All Targets DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "endless-veil"
  },
  {
    "id": 300669,
    "strId": "BI_HATCHLING_GUARD_5",
    "name": "Ironblood Scale Armor",
    "desc": "Increases DEF by 50%. The turn count is reduced at the end of any unit's turn.",
    "icon": "BUFF_IRONBLOOD_SCALE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 5000,
        "display": "+50% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ironblood-scale-armor"
  },
  {
    "id": 300677,
    "strId": "BI_MAGICIAN_HYPNOSIS_4",
    "name": "Magic Show Supporters (Undispellable)",
    "desc": "Takes 50% reduced damage and SPD is fixed at 0. This effect is removed when attacked.",
    "icon": "BUFF_MAGICIAN_HYPNOSIS_SUPPORTERS.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": 5000,
        "display": "+50% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "magic-show-supporters-undispellable"
  },
  {
    "id": 300680,
    "strId": "BI_TUNER_CROWN_PURPLE_1",
    "name": "Motif",
    "desc": "Increases ATK and SPD by 5% per stack. Stacks up to 5 times. Removes this effect when Toughness is broken.",
    "icon": "BUFF_TUNER_CROWN_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 500,
        "display": "+5% ATK"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": 500,
        "display": "+5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "motif"
  },
  {
    "id": 300683,
    "strId": "BI_COUNTERSIDE_HILDE_BOSS_2",
    "name": "Defensive Stance",
    "desc": "Hilde assumes a Defensive Stance.",
    "icon": "BUFF_COUNTERSIDE_HILDE_DEFENSIVE_STANCE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 10000,
        "display": "+100% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "defensive-stance"
  },
  {
    "id": 300685,
    "strId": "BI_COUNTERSIDE_ROSARIA_BOSS_1",
    "name": "Black Flame",
    "desc": "Increases damage dealt by 15%. This debuff can be applied repeatedly.",
    "icon": "BUFF_COUNTERSIDE_ROSARIA_BLACK_FLAME.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 1500,
        "display": "+15% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "black-flame"
  },
  {
    "id": 300689,
    "strId": "BI_COUNTERSIDE_ROSARIA_EVENT_1",
    "name": "Your Rules, Not Mine",
    "desc": "Increases Action Gauge by 100%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": 3000,
        "display": "+30% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "your-rules-not-mine"
  },
  {
    "id": 300726,
    "strId": "BI_VOIDER_DAGGER_BOSS_EVENT_01",
    "name": "Ancient Treasure (Undispellable)",
    "desc": "Increases DEF by 50%. Removes this effect when attacked.",
    "icon": "BUFF_VOIDER_DAGGER_TREASURE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 5000,
        "display": "+50% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "ancient-treasure-undispellable"
  },
  {
    "id": 300741,
    "strId": "BI_PILGRIM_ALIEN_RED_1",
    "name": "Forbidden Seal: Realm (Undispellable)",
    "desc": "",
    "icon": "BUFF_PILGRIM_ALIEN_RED_1.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Special Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_SPECIAL",
        "value": 2000,
        "display": "+20% Special Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "forbidden-seal-realm-undispellable"
  },
  {
    "id": 300742,
    "strId": "BI_PILGRIM_ALIEN_RED_2",
    "name": "Forbidden Seal: Prime (Undispellable)",
    "desc": "",
    "icon": "BUFF_PILGRIM_ALIEN_RED_2.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Ultimate Skill DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_HYPER",
        "value": 2000,
        "display": "+20% Ultimate Skill DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "forbidden-seal-prime-undispellable"
  },
  {
    "id": 300761,
    "strId": "BI_CRUNNADUN_AXE_BOSS_1",
    "name": "Protect the Chief! (Undispellable)",
    "desc": "Takes 30% of damage received by allies in their place. Only the highest damage-sharing effect applies.",
    "icon": "BUFF_GUARD_CAN_NOT_DISPEL.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Damage Share",
        "rawStat": "NST_RATE_DAMAGE_SHARE",
        "value": 3000,
        "display": "+30% Damage Share"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "protect-the-chief-undispellable"
  },
  {
    "id": 9999902,
    "strId": "BI_TEST_CRITICAL_CHANCE_INCREASE_100PERCENT",
    "name": "Supreme CRIT Rate Up",
    "desc": "CRIT Rate increases by 100%.",
    "icon": "BUFF_CRITICAL_CHANCE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": 10000,
        "display": "+100% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-crit-rate-up"
  },
  {
    "id": 9999904,
    "strId": "BI_TEST_EVADE_INCREASE_100PERCENT",
    "name": "Supreme Evasion Up",
    "desc": "Evasion increases by 100%.",
    "icon": "BUFF_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": 10000,
        "display": "+100% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-evasion-up"
  },
  {
    "id": 9999909,
    "strId": "BI_TEST_ATTACK_INCREASE_SUN_AND_MOON",
    "name": "테스트 공격력 증가 : 태양, 달",
    "desc": "테스트를 위한 태양, 달 속성 공격력 증가 버프입니다.",
    "icon": "BUFF_ATTACK_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": 3000,
        "display": "+30% ATK"
      }
    ],
    "effects": [],
    "flags": {}
  },
  {
    "id": 9999912,
    "strId": "BI_TEST_EFFECT_HIT_INCREASE_100",
    "name": "Supreme Effect Hit Up",
    "desc": "",
    "icon": "BUFF_EFFECT_HIT_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": 10000,
        "display": "+100% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-effect-hit-up"
  },
  {
    "id": 9999913,
    "strId": "BI_TEST_EFFECT_EVADE_INCREASE_100",
    "name": "Supreme Effect RES Up",
    "desc": "",
    "icon": "BUFF_EFFECT_EVADE_INCREASE.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 10000,
        "display": "+100% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-effect-res-up"
  },
  {
    "id": 9999921,
    "strId": "BI_TEST_MAXHP_BUFF",
    "name": "Test Max HP Increase",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": 3000,
        "display": "+30% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "test-max-hp-increase"
  },
  {
    "id": 9999922,
    "strId": "BI_TEST_STAT_NST_RATE_CROSS_ATTACK_INFINITE",
    "name": "Stat: Dual Attack Chance (Infinite Turns)",
    "desc": "This stat displays Dual Attack Chance (Infinite Turns).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Dual Attack Chance",
        "rawStat": "NST_RATE_CROSS_ATTACK",
        "value": 100,
        "display": "+1% Dual Attack Chance"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "stat-dual-attack-chance-infinite-turns"
  },
  {
    "id": 9999923,
    "strId": "BI_TEST_NST_SUPER_ARMOR",
    "name": "Max Toughness",
    "desc": "This is a test buff for Max Toughness.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Super Armor",
        "rawStat": "NST_SUPER_ARMOR",
        "value": 0,
        "display": "+0 Super Armor"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-toughness"
  },
  {
    "id": 9999925,
    "strId": "BI_TEST_NST_SUPER_ARMOR_TRUE_DAMAGE",
    "name": "Attribute-Ignoring Toughness DMG",
    "desc": "This is a test buff for Toughness DMG that ignores Attribute.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Toughness Fixed DMG",
        "rawStat": "NST_SUPER_ARMOR_TRUE_DAMAGE",
        "value": 0,
        "display": "+0 Toughness Fixed DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "attribute-ignoring-toughness-dmg"
  },
  {
    "id": 9999927,
    "strId": "BI_STAT_TEST_NST_SUPER_ARMOR",
    "name": "Max Toughness",
    "desc": "This is a test buff for Max Toughness.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Super Armor",
        "rawStat": "NST_SUPER_ARMOR",
        "value": 0,
        "display": "+0 Super Armor"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-toughness"
  },
  {
    "id": 9999929,
    "strId": "BI_STAT_TEST_NST_SUPER_ARMOR_TRUE_DAMAGE",
    "name": "Attribute-Ignoring Toughness DMG",
    "desc": "This is a test buff for Toughness DMG that ignores Attribute.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Toughness Fixed DMG",
        "rawStat": "NST_SUPER_ARMOR_TRUE_DAMAGE",
        "value": 0,
        "display": "+0 Toughness Fixed DMG"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "attribute-ignoring-toughness-dmg"
  },
  {
    "id": 9999933,
    "strId": "BI_RATE_DAMAGE_REDUCE_ADJUST_ORDER_100PERCENT",
    "name": "Greater DMG Taken Reduction (Order Attribute)",
    "desc": "Takes 100% reduced damage from Order Attribute units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs Order DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST_ORDER",
        "value": 10000,
        "display": "+100% vs Order DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-dmg-taken-reduction-order-attribute"
  },
  {
    "id": 1501,
    "strId": "BI_ATTACK_DECREASE",
    "name": "ATK Down",
    "desc": "Decreases ATK by 30%.",
    "icon": "DEBUFF_ATTACK_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -3000,
        "display": "-30% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "atk-down"
  },
  {
    "id": 1502,
    "strId": "BI_ATTACK_ABBREVIATE",
    "name": "Greater ATK Down",
    "desc": "ATK decreases by 50%.",
    "icon": "DEBUFF_ATTACK_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -5000,
        "display": "-50% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-atk-down"
  },
  {
    "id": 1503,
    "strId": "BI_DEFENSE_DECREASE",
    "name": "DEF Down",
    "desc": "Decreases DEF by 30%.",
    "icon": "DEBUFF_DEFENSE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": -3000,
        "display": "-30% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "def-down"
  },
  {
    "id": 1504,
    "strId": "BI_DEFENSE_ABBREVIATE",
    "name": "Greater DEF Down",
    "desc": "DEF decreases by 50%.",
    "icon": "DEBUFF_DEFENSE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": -5000,
        "display": "-50% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-def-down"
  },
  {
    "id": 1505,
    "strId": "BI_SPEED_DECREASE",
    "name": "SPD Down",
    "desc": "SPD decreases by 20%.",
    "icon": "DEBUFF_SPEED_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -2000,
        "display": "-20% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "spd-down"
  },
  {
    "id": 1506,
    "strId": "BI_EFFECT_EVADE_DECREASE",
    "name": "Effect RES Down",
    "desc": "Decreases Effect RES by 30%.",
    "icon": "DEBUFF_EFFECT_EVADE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": -3000,
        "display": "-30% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "effect-res-down"
  },
  {
    "id": 1507,
    "strId": "BI_EFFECT_EVADE_ABBREVIATE",
    "name": "Greater Effect RES Down",
    "desc": "Effect RES decreases by 50%.",
    "icon": "DEBUFF_EFFECT_EVADE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": -5000,
        "display": "-50% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-effect-res-down"
  },
  {
    "id": 1508,
    "strId": "BI_RATE_HIT_DECREASE",
    "name": "ACC Down",
    "desc": "Decreases ACC by 30%.",
    "icon": "DEBUFF_RATE_HIT_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ACC",
        "rawStat": "NST_RATE_HIT",
        "value": -3000,
        "display": "-30% ACC"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "acc-down"
  },
  {
    "id": 1509,
    "strId": "BI_HEAL_RECEIVE_DECREASE",
    "name": "Recovery Down",
    "desc": "",
    "icon": "DEBUFF_HEAL_RECEIVE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": -5000,
        "display": "-50% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "recovery-down"
  },
  {
    "id": 1510,
    "strId": "BI_HEAL_RECEIVE_ABBREVIATE",
    "name": "Greater Recovery Down",
    "desc": "",
    "icon": "DEBUFF_HEAL_RECEIVE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": -5000,
        "display": "-50% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-recovery-down"
  },
  {
    "id": 1511,
    "strId": "BI_EVADE_DECREASE",
    "name": "Evasion Down",
    "desc": "",
    "icon": "DEBUFF_EVADE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": -5000,
        "display": "-50% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "evasion-down"
  },
  {
    "id": 1512,
    "strId": "BI_EVADE_ABBREVIATE",
    "name": "Greater Evasion Down",
    "desc": "",
    "icon": "DEBUFF_EVADE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": -5000,
        "display": "-50% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-evasion-down"
  },
  {
    "id": 1513,
    "strId": "BI_HEALBAN",
    "name": "Heal Block",
    "desc": "Cannot receive any healing effects.",
    "icon": "DEBUFF_HEALBAN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Incoming Healing",
        "rawStat": "NST_RATE_HEAL_RECEIVE",
        "value": -100000,
        "display": "-1000% Incoming Healing"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "heal-block"
  },
  {
    "id": 1514,
    "strId": "BI_CHAIN",
    "name": "Chain of Fate",
    "desc": "",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
        "value": -2000,
        "display": "-20% vs All Targets DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "chain-of-fate"
  },
  {
    "id": 1525,
    "strId": "BI_FREEZING",
    "name": "Freeze",
    "desc": "SPD decreases by 3%. Takes minor Freeze damage proportional to the caster's ATK at the start of the turn.",
    "icon": "DEBUFF_FREEZING.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -300,
        "display": "-3% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "freeze"
  },
  {
    "id": 3001,
    "strId": "BI_ARMOR_BREAK_UNIT_EFFECT",
    "name": "Toughness Broken (Undispellable)",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1500,
        "display": "-15% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "toughness-broken-undispellable"
  },
  {
    "id": 3002,
    "strId": "BI_ARMOR_BREAK_MON_NORMAL_EFFECT",
    "name": "Toughness Broken (Undispellable)",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1500,
        "display": "-15% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "toughness-broken-undispellable"
  },
  {
    "id": 3003,
    "strId": "BI_ARMOR_BREAK_MON_ELITE_EFFECT",
    "name": "Toughness Broken (Undispellable)",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1500,
        "display": "-15% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "toughness-broken-undispellable"
  },
  {
    "id": 3004,
    "strId": "BI_ARMOR_BREAK_MON_BOSS_EFFECT",
    "name": "Toughness Broken (Undispellable)",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1500,
        "display": "-15% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "toughness-broken-undispellable"
  },
  {
    "id": 5001,
    "strId": "BI_CONDITION_WORST",
    "name": "WORST Condition (Undispellable)",
    "desc": "SPD decreases by 10%.",
    "icon": "DEBUFF_CONDITION_WORST.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -1000,
        "display": "-10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "worst-condition-undispellable"
  },
  {
    "id": 5002,
    "strId": "BI_CONDITION_BAD",
    "name": "BAD Condition (Undispellable)",
    "desc": "SPD decreases by 5%.",
    "icon": "DEBUFF_CONDITION_BAD.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -500,
        "display": "-5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "bad-condition-undispellable"
  },
  {
    "id": 5011,
    "strId": "BI_STAMINA_WORST",
    "name": "Very Low Stamina (Undispellable)",
    "desc": "Decreases Max HP by 20%.",
    "icon": "DEBUFF_CONDITION_WORST.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -2000,
        "display": "-20% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "very-low-stamina-undispellable"
  },
  {
    "id": 5012,
    "strId": "BI_STAMINA_BAD",
    "name": "Low Stamina (Undispellable)",
    "desc": "Decreases Max HP by 10%.",
    "icon": "DEBUFF_CONDITION_BAD.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -1000,
        "display": "-10% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "low-stamina-undispellable"
  },
  {
    "id": 8503,
    "strId": "BI_STAR_CHALLENGE_3_1",
    "name": "Constraint: Acceleration",
    "desc": "Reduces SPD by 2% after using a Skill. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -200,
        "display": "-2% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "constraint-acceleration"
  },
  {
    "id": 8504,
    "strId": "BI_STAR_CHALLENGE_3_2",
    "name": "Constraint: Acceleration",
    "desc": "Reduces SPD by 2% after using a Skill. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -300,
        "display": "-3% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "constraint-acceleration"
  },
  {
    "id": 8505,
    "strId": "BI_STAR_CHALLENGE_3_3",
    "name": "Constraint: Acceleration",
    "desc": "Reduces SPD by 2% after using a Skill. Stacks up to 10 times.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -400,
        "display": "-4% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "constraint-acceleration"
  },
  {
    "id": 10031,
    "strId": "BI_VOYAGER_ORACLE_1",
    "name": "Bind",
    "desc": "",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "vs All Targets DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL",
        "value": -2000,
        "display": "-20% vs All Targets DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "bind"
  },
  {
    "id": 10341,
    "strId": "BI_WEST_ROD_1",
    "name": "Unknown Hex",
    "desc": "Effect RES decreases by 20% and SPD by 10%. ",
    "icon": "DEBUFF_WEST_ROD.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": -2000,
        "display": "-20% Effect RES"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -1000,
        "display": "-10% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "unknown-hex"
  },
  {
    "id": 10491,
    "strId": "BI_INDEPENDENT_DRAGON_1",
    "name": "Entangled Dream",
    "desc": "ATK decreases by 10%.",
    "icon": "DEBUFF_TWISTED_DREAMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -1000,
        "display": "-10% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "entangled-dream"
  },
  {
    "id": 100091,
    "strId": "BI_ARCHON_SPEAR_1",
    "name": "Erosion (Undispellable)",
    "desc": "Damage taken increases by {0}%. Stacks up to 10 times.",
    "icon": "DEBUFF_ARCHON_SPEAR_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -100,
        "display": "-1% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "erosion-undispellable"
  },
  {
    "id": 200192,
    "strId": "BI_MUGGING_CROWBAR_1",
    "name": "Clumsiness",
    "desc": "Impact DMG taken increases by 15%.",
    "icon": "DEBUFF_MOGULUS_CROWN_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "vs Impact DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_UNIT_IMPACT",
        "value": -1500,
        "display": "-15% vs Impact DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "clumsiness"
  },
  {
    "id": 300061,
    "strId": "BI_DEMORAIGIS_CORE_1",
    "name": "Seeping Fear",
    "desc": "ATK decreases by 10%. This debuff can be applied repeatedly.",
    "icon": "DEBUFF_DEMORAIGIS_CORE_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -1000,
        "display": "-10% ATK"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "seeping-fear"
  },
  {
    "id": 300161,
    "strId": "BI_MOGULUS_CROWN_1",
    "name": "Fallen Will (Undispellable)",
    "desc": "SPD is fixed at 0 and damage taken increases by 10%. The turn count is reduced at the end of each turn.",
    "icon": "DEBUFF_MOGULUS_CROWN_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1000,
        "display": "-10% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "fallen-will-undispellable"
  },
  {
    "id": 300162,
    "strId": "BI_MOGULUS_CROWN_2",
    "name": "Fallen Will (Undispellable)",
    "desc": "SPD is fixed at 0 and damage taken increases by 20%. The turn count is reduced at the end of each turn.",
    "icon": "DEBUFF_MOGULUS_CROWN_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -2000,
        "display": "-20% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "fallen-will-undispellable"
  },
  {
    "id": 300163,
    "strId": "BI_MOGULUS_CROWN_3",
    "name": "Fallen Will (Undispellable)",
    "desc": "SPD is fixed at 0 and damage taken increases by 30%. The turn count is reduced at the end of each turn.",
    "icon": "DEBUFF_MOGULUS_CROWN_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -3000,
        "display": "-30% DMG Taken Reduction"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "fallen-will-undispellable"
  },
  {
    "id": 300321,
    "strId": "BI_GOLEM_HANDS_1",
    "name": "Decayed Fragment (Undispellable)",
    "desc": "DEF decreases by 3%. Stacks up to 10 times.",
    "icon": "DEBUFF_DEFENSE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": -300,
        "display": "-3% DEF"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "decayed-fragment-undispellable"
  },
  {
    "id": 300341,
    "strId": "BI_BELLWETHER_MANE_1",
    "name": "Soul Bind",
    "desc": "Max HP decreases by 15%.",
    "icon": "DEBUFF_BELLWETHER_MANE_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -1500,
        "display": "-15% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "soul-bind"
  },
  {
    "id": 300361,
    "strId": "BI_COHESION_FLOWER_1",
    "name": "Void Spore",
    "desc": "SPD and Effect RES decrease by 5%. The caster takes damage that scales with the caster's ATK at the start of the turn.",
    "icon": "DEBUFF_COHESION_FLOWER_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -500,
        "display": "-5% SPD"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": -500,
        "display": "-5% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "void-spore"
  },
  {
    "id": 300371,
    "strId": "BI_USURPER_CHAIR_1",
    "name": "Mark of Usurpation",
    "desc": "DEF and SPD decrease by 3%. This debuff can be applied repeatedly.",
    "icon": "DEBUFF_USURPER_CHAIR_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": -500,
        "display": "-5% DEF"
      },
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -500,
        "display": "-5% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "mark-of-usurpation"
  },
  {
    "id": 300403,
    "strId": "BI_TUNER_CROWN_3",
    "name": "Dissonance (Undispellable)",
    "desc": "SPD decreases by 100%. The turn count is reduced at the end of any unit's turn.",
    "icon": "DEBUFF_TUNER_CROWN_2.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -10000,
        "display": "-100% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "dissonance-undispellable"
  },
  {
    "id": 300591,
    "strId": "BI_HAPPY68_PEACE_1",
    "name": "Suppress",
    "desc": "ATK and Effect RES decrease by 5%. This debuff can be applied repeatedly.",
    "icon": "DEBUFF_HAPPY68_MAD_1.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -500,
        "display": "-5% ATK"
      },
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": -500,
        "display": "-5% Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "suppress"
  },
  {
    "id": 300664,
    "strId": "BI_EXCEED_UNSEAL_5",
    "name": "Impermanent Existence",
    "desc": "Decreases self ATK and self Effect Hit by 10%. This debuff can be applied repeatedly.",
    "icon": "DEBUFF_DAWN_EYE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "ATK",
        "rawStat": "NST_NV_RATE_ATK",
        "value": -1000,
        "display": "-10% ATK"
      },
      {
        "stat": "Effect Hit",
        "rawStat": "NST_RATE_EFFECT_HIT",
        "value": -1000,
        "display": "-10% Effect Hit"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "impermanent-existence"
  },
  {
    "id": 300665,
    "strId": "BI_HATCHLING_GUARD_1",
    "name": "Tenth Trial (Undispellable)",
    "desc": "Deals 30% reduced damage.",
    "icon": "DEBUFF_IMPOSED_DUTY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Increase",
        "rawStat": "NST_RATE_DAMAGE_UP",
        "value": -3000,
        "display": "-30% DMG Increase"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "tenth-trial-undispellable"
  },
  {
    "id": 300688,
    "strId": "BI_COUNTERSIDE_ROSARIA_BOSS_4",
    "name": "Absolute RES Stat",
    "desc": "This stat displays Absolute RES.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "Absolute Effect RES",
        "rawStat": "NST_RATE_DEFINITE_EFFECT_EVADE",
        "value": -50000,
        "display": "-500% Absolute Effect RES"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "absolute-res-stat"
  },
  {
    "id": 9999901,
    "strId": "BI_TEST_SPEED_DECREASE_100PERCENT",
    "name": "Supreme SPD Down",
    "desc": "SPD decreases by 100%.",
    "icon": "DEBUFF_WEST_ROD.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -10000,
        "display": "-100% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-spd-down"
  },
  {
    "id": 9999903,
    "strId": "BI_TEST_CRITICAL_CHANCE_DECREASE_100PERCENT",
    "name": "Supreme CRIT Rate Down",
    "desc": "CRIT Rate decreases by 100%.",
    "icon": "DEBUFF_CRITICAL_CHANCE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "CRIT Rate",
        "rawStat": "NST_RATE_CRITICAL",
        "value": -10000,
        "display": "-100% CRIT Rate"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-crit-rate-down"
  },
  {
    "id": 9999905,
    "strId": "BI_TEST_EVADE_DECREASE_100PERCENT",
    "name": "Supreme Evasion Down",
    "desc": "Evasion decreases by 100%.",
    "icon": "DEBUFF_EVADE_DECREASE.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Evasion",
        "rawStat": "NST_RATE_EVADE",
        "value": -10000,
        "display": "-100% Evasion"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "supreme-evasion-down"
  },
  {
    "id": 9999918,
    "strId": "BI_TEST_MAXHP_REDUCE_2",
    "name": "Max HP Reduction (Stackable)",
    "desc": "Max HP decreases by 25%.",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -2500,
        "display": "-25% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-hp-reduction-stackable"
  },
  {
    "id": 9999919,
    "strId": "BI_TEST_MAXHP_REDUCE_3",
    "name": "Max HP Reduction (Stackable)",
    "desc": "Max HP decreases by 1%.",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": true,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -100,
        "display": "-1% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-hp-reduction-stackable"
  },
  {
    "id": 9999920,
    "strId": "BI_TEST_MAXHP_REDUCE_4",
    "name": "Max HP Reduction (Maintained on Revive)",
    "desc": "Max HP decreases by 35%.",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "HP",
        "rawStat": "NST_NV_RATE_HP",
        "value": -3500,
        "display": "-35% HP"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-hp-reduction-maintained-on-revive"
  },
  {
    "id": 9999931,
    "strId": "BI_STAT_TEST_NST_SUPER_ARMOR_REDUCE",
    "name": "Max Toughness Reduction (Stackable)",
    "desc": "This is a test buff for Max Toughness Reduction.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": false,
    "isUnique": true,
    "stats": [
      {
        "stat": "Super Armor",
        "rawStat": "NST_SUPER_ARMOR",
        "value": 0,
        "display": "+0 Super Armor"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "max-toughness-reduction-stackable"
  },
  {
    "id": 9999932,
    "strId": "BI_TEST_SPEED_DECREASE_50PERCENT",
    "name": "Greater SPD Down",
    "desc": "Decreases SPD by 50%.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "stat",
    "categoryLabel": "Stat Modifier",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "SPD",
        "rawStat": "NST_NV_RATE_TURN_SPEED",
        "value": -5000,
        "display": "-50% SPD"
      }
    ],
    "effects": [],
    "flags": {},
    "slug": "greater-spd-down"
  },
  {
    "id": 1515,
    "strId": "BI_AGGRO",
    "name": "Taunt",
    "desc": "Forcibly uses a Basic Skill on the unit that inflicted Taunt at the start of the turn.",
    "icon": "DEBUFF_AGGRO.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Forces enemies to target this unit"
    ],
    "flags": {
      "aggro": true
    },
    "slug": "taunt"
  },
  {
    "id": 1516,
    "strId": "BI_STUN",
    "name": "Stun",
    "desc": "Cannot act for the duration.",
    "icon": "DEBUFF_STUN.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Stuns the target"
    ],
    "flags": {
      "stun": true
    },
    "slug": "stun"
  },
  {
    "id": 1517,
    "strId": "BI_SLEEP",
    "name": "Sleep",
    "desc": "Becomes unable to act for the duration. The state is removed upon getting hit.",
    "icon": "DEBUFF_SLEEP.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Puts the target to sleep"
    ],
    "flags": {
      "sleep": true
    },
    "slug": "sleep"
  },
  {
    "id": 1518,
    "strId": "BI_SILENCE",
    "name": "Silence",
    "desc": "Active Skills with Cooldowns are disabled for the duration.",
    "icon": "DEBUFF_SILENCE.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Disables cooldown skills"
    ],
    "flags": {
      "silence": true
    },
    "slug": "silence"
  },
  {
    "id": 1519,
    "strId": "BI_EXHAUSTION",
    "name": "Exhaustion",
    "desc": "Normal passive skills do not activate for the duration.",
    "icon": "DEBUFF_EXHAUSTION.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Disables passive skills"
    ],
    "flags": {
      "disablePassive": true
    },
    "slug": "exhaustion"
  },
  {
    "id": 1520,
    "strId": "BI_PARALYSIS",
    "name": "Paralysis",
    "desc": "Trigger skills do not activate for the duration.",
    "icon": "DEBUFF_PARALYSIS.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Disables react skills"
    ],
    "flags": {
      "disableReact": true
    },
    "slug": "paralysis"
  },
  {
    "id": 3006,
    "strId": "BI_ARMOR_BREAK_PARALYSIS",
    "name": "Paralysis",
    "desc": "Trigger skills do not activate for the duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Disables react skills"
    ],
    "flags": {
      "disableReact": true
    },
    "slug": "paralysis"
  },
  {
    "id": 300663,
    "strId": "BI_CARBONPUNK_LORD_3",
    "name": "Overheated",
    "desc": "Takes 15% increased damage and cannot act for the duration.",
    "icon": "DEBUFF_STUN.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE",
        "value": -1500,
        "display": "-15% DMG Taken Reduction"
      }
    ],
    "effects": [
      "Stuns the target"
    ],
    "flags": {
      "stun": true
    },
    "slug": "overheated"
  },
  {
    "id": 300679,
    "strId": "BI_MAGICIAN_HYPNOSIS_6",
    "name": "Stun (Undispellable)",
    "desc": "Cannot act for the duration.",
    "icon": "DEBUFF_STUN.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Stuns the target"
    ],
    "flags": {
      "stun": true
    },
    "slug": "stun-undispellable"
  },
  {
    "id": 9999911,
    "strId": "BI_TEST_STUN_DEAD_NOT_DISPEL",
    "name": "Stun Maintained on Revive (Undispellable)",
    "desc": "Cannot act for the duration. Maintained even after revival.",
    "icon": "DEBUFF_STUN.png",
    "isBuff": false,
    "category": "crowd-control",
    "categoryLabel": "Crowd Control",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Stuns the target"
    ],
    "flags": {
      "stun": true
    },
    "slug": "stun-maintained-on-revive-undispellable"
  },
  {
    "id": 1032,
    "strId": "BI_DEBUFFBAN",
    "name": "Immunity",
    "desc": "All debuffs and some reduction, extension, and shortening effects do not apply. Can be removed by buff removal.",
    "icon": "BUFF_DEBUFFBAN.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Immune to debuffs"
    ],
    "flags": {
      "debuffBan": true
    },
    "slug": "immunity"
  },
  {
    "id": 1033,
    "strId": "BI_DEBUFFBAN_CAN_NOT_DISPEL",
    "name": "Immunity (Undispellable)",
    "desc": "All debuffs and some reduction, extension, and shortening effects do not apply. Can be removed by buff removal.",
    "icon": "BUFF_DEBUFFBAN_CAN_NOT_DISPEL.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Immune to debuffs"
    ],
    "flags": {
      "debuffBan": true
    },
    "slug": "immunity-undispellable"
  },
  {
    "id": 1036,
    "strId": "BI_IMMORTAL",
    "name": "Immortality",
    "desc": "Will not die for the duration.",
    "icon": "BUFF_IMMORTAL.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Prevents death"
    ],
    "flags": {
      "immortal": true
    },
    "slug": "immortality"
  },
  {
    "id": 1037,
    "strId": "BI_INVINCIBLE",
    "name": "Invincibility",
    "desc": "Will not take damage for the duration.",
    "icon": "BUFF_INVINCIBLE.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Prevents all damage"
    ],
    "flags": {
      "invincible": true
    },
    "slug": "invincibility"
  },
  {
    "id": 1039,
    "strId": "BI_BARRIER_CAN_NOT_DISPEL",
    "name": "Barrier (Undispellable)",
    "desc": "",
    "icon": "BUFF_BARRIER_CAN_NOT_DISPEL.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Absorbs damage"
    ],
    "flags": {
      "barrier": true
    },
    "slug": "barrier-undispellable"
  },
  {
    "id": 1041,
    "strId": "BI_SKILL_NULLIFIER",
    "name": "Skill DMG Nullification",
    "desc": "Nullifies damage from skills. Does not nullify debuff damage.",
    "icon": "BUFF_SKILL_NULLIFIER.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Nullifies skill damage"
    ],
    "flags": {
      "skillNullifier": true
    },
    "slug": "skill-dmg-nullification"
  },
  {
    "id": 2015,
    "strId": "BI_SUPER_ARMOR_UP",
    "name": "Toughness Recovery",
    "desc": "Recovers Toughness.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Recovers super armor"
    ],
    "flags": {
      "superArmorUp": true
    },
    "slug": "toughness-recovery"
  },
  {
    "id": 30011,
    "strId": "BI_FAFNIR_DESCENT_1",
    "name": "Fafnir's Descent (Undispellable)",
    "desc": "Increases DEF by 20% and absorbs a fixed amount of damage instead of losing HP when taking damage. Affected by Barrier-related effects.",
    "icon": "BUFF_VALKYRIE.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "DEF",
        "rawStat": "NST_NV_RATE_DEF",
        "value": 2000,
        "display": "+20% DEF"
      }
    ],
    "effects": [
      "Absorbs damage"
    ],
    "flags": {
      "barrier": true
    },
    "slug": "fafnir-s-descent-undispellable"
  },
  {
    "id": 300211,
    "strId": "BI_MOTIVATOR_HANDS_1",
    "name": "Resistance Veil (Undispellable)",
    "desc": "Effect RES increases by 100%, and when taking damage, absorbs a fixed amount of damage instead of losing HP. Affected by Barrier-related effects.",
    "icon": "BUFF_MOTIVATOR_HANDS_1.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": false,
    "isUnique": false,
    "stats": [
      {
        "stat": "Effect RES",
        "rawStat": "NST_RATE_EFFECT_EVADE",
        "value": 10000,
        "display": "+100% Effect RES"
      }
    ],
    "effects": [
      "Absorbs damage"
    ],
    "flags": {
      "barrier": true
    },
    "slug": "resistance-veil-undispellable"
  },
  {
    "id": 300331,
    "strId": "BI_FALLEN_DUALSWORD_1",
    "name": "Void Shield (Undispellable)",
    "desc": "Absorbs a fixed amount of damage instead of losing HP when taking damage. Affected by Barrier-related effects.",
    "icon": "BUFF_BARRIER_CAN_NOT_DISPEL.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Absorbs damage"
    ],
    "flags": {
      "barrier": true
    },
    "slug": "void-shield-undispellable"
  },
  {
    "id": 9999915,
    "strId": "BI_BARRIER_STAT_PLUS",
    "name": "Barrier vs Attribute DMG Taken Reduction",
    "desc": "",
    "icon": "BUFF_BARRIER.png",
    "isBuff": true,
    "category": "protection",
    "categoryLabel": "Protection",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Attribute DMG Taken Reduction",
        "rawStat": "NST_RATE_DAMAGE_REDUCE_ADJUST",
        "value": 10000,
        "display": "+100% Attribute DMG Taken Reduction"
      }
    ],
    "effects": [
      "Absorbs damage"
    ],
    "flags": {
      "barrier": true
    },
    "slug": "barrier-vs-attribute-dmg-taken-reduction"
  },
  {
    "id": 1034,
    "strId": "BI_HIDE",
    "name": "Stealth",
    "desc": "Cannot be targeted while other allies are present. Ignores the enemy's Preemptive Guard on attack.",
    "icon": "BUFF_HIDE.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": false,
    "stats": [
      {
        "stat": "Preemptive Guard Ignore",
        "rawStat": "NST_RATE_PREEMPTIVE_DEFEND_REDUCE",
        "value": 10000,
        "display": "+100% Preemptive Guard Ignore"
      }
    ],
    "effects": [
      "Unit becomes untargetable"
    ],
    "flags": {
      "hide": true
    },
    "slug": "stealth"
  },
  {
    "id": 1035,
    "strId": "BI_HIDEDETECT",
    "name": "Stealth Detection",
    "desc": "Can target units with Stealth.",
    "icon": "BUFF_HIDEDETECT.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Can detect hidden units"
    ],
    "flags": {
      "hideDetect": true
    },
    "slug": "stealth-detection"
  },
  {
    "id": 1045,
    "strId": "BI_DAMAGE_BREAK",
    "name": "Damage Break",
    "desc": "",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": true,
    "stats": [],
    "effects": [
      "Breaks damage cap"
    ],
    "flags": {
      "damageBreak": true
    },
    "slug": "damage-break"
  },
  {
    "id": 2020,
    "strId": "BI_FORCECRITICAL",
    "name": "Forced Critical Hit",
    "desc": "Forces a Critical Hit.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Forces critical hits"
    ],
    "flags": {
      "forceCritical": true
    },
    "slug": "forced-critical-hit"
  },
  {
    "id": 2021,
    "strId": "BI_FORCEEVADE",
    "name": "Forced Evasion",
    "desc": "Forces an evasion.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Forces evasion"
    ],
    "flags": {
      "forceEvade": true
    },
    "slug": "forced-evasion"
  },
  {
    "id": 2022,
    "strId": "BI_FORCEHIT",
    "name": "Forced Hit",
    "desc": "Forces a hit to land.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "mechanic",
    "categoryLabel": "Mechanic",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Forces hits (ignores evasion)"
    ],
    "flags": {
      "forceHit": true
    },
    "slug": "forced-hit"
  },
  {
    "id": 2001,
    "strId": "BI_DELETEDEBUFF",
    "name": "Dispel Debuff",
    "desc": "Removes debuffs.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "dispel",
    "categoryLabel": "Dispel",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Removes debuffs"
    ],
    "flags": {
      "deleteDebuff": true
    },
    "slug": "dispel-debuff"
  },
  {
    "id": 2501,
    "strId": "BI_DELETEBUFF",
    "name": "Dispel Buff",
    "desc": "Removes buffs.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "dispel",
    "categoryLabel": "Dispel",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Removes buffs"
    ],
    "flags": {
      "deleteBuff": true
    },
    "slug": "dispel-buff"
  },
  {
    "id": 300405,
    "strId": "BI_TUNER_CROWN_5",
    "name": "Dispel Buff",
    "desc": "Removes buffs. Ignores Immunity-related effects.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "dispel",
    "categoryLabel": "Dispel",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Removes buffs"
    ],
    "flags": {
      "deleteBuff": true
    },
    "slug": "dispel-buff"
  },
  {
    "id": 1522,
    "strId": "BI_BURN",
    "name": "Burn",
    "desc": "Takes Burn damage proportional to caster's ATK at the start of the turn.",
    "icon": "DEBUFF_BURN.png",
    "isBuff": false,
    "category": "dot",
    "categoryLabel": "Damage over Time",
    "canDispel": true,
    "isUnique": true,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "burn"
  },
  {
    "id": 1523,
    "strId": "BI_BLEEDING",
    "name": "Bleed",
    "desc": "Takes heavy Bleed damage proportional to the caster's ATK at the start of the turn.",
    "icon": "DEBUFF_BLEEDING.png",
    "isBuff": false,
    "category": "dot",
    "categoryLabel": "Damage over Time",
    "canDispel": true,
    "isUnique": true,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "bleed"
  },
  {
    "id": 1524,
    "strId": "BI_POISON",
    "name": "Poison",
    "desc": "Takes Poison damage proportional to the caster's Max HP at the start of the turn.",
    "icon": "DEBUFF_POISON.png",
    "isBuff": false,
    "category": "dot",
    "categoryLabel": "Damage over Time",
    "canDispel": true,
    "isUnique": true,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "poison"
  },
  {
    "id": 2004,
    "strId": "BI_SKILL_COOL_TURN_DOWN",
    "name": "All Skill Cooldowns Reduction",
    "desc": "Reduces the remaining Cooldown of all Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "all-skill-cooldowns-reduction"
  },
  {
    "id": 2005,
    "strId": "BI_HYPER_COOL_TURN_DOWN",
    "name": "Ultimate Skill Cooldown Reduction",
    "desc": "Reduces the remaining Cooldown of Ultimate Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "ultimate-skill-cooldown-reduction"
  },
  {
    "id": 2006,
    "strId": "BI_SPECIAL_COOL_TURN_DOWN",
    "name": "Special Skill Cooldown Reduction",
    "desc": "Reduces the remaining Cooldown of Special Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "special-skill-cooldown-reduction"
  },
  {
    "id": 2007,
    "strId": "BI_HYPER_COOL_TURN_DOWN_ALL",
    "name": "Ultimate Skill Cooldown Reset",
    "desc": "Resets the remaining Cooldown of Ultimate Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "ultimate-skill-cooldown-reset"
  },
  {
    "id": 2008,
    "strId": "BI_SPECIAL_COOL_TURN_DOWN_ALL",
    "name": "Special Skill Cooldown Reset",
    "desc": "Resets the remaining Cooldown of Special Skill.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "special-skill-cooldown-reset"
  },
  {
    "id": 2024,
    "strId": "BI_SKILL_COOL_TURN_DOWN_ALL",
    "name": "All Skill Cooldowns Reset",
    "desc": "Resets the Cooldown of all Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Reduces skill cooldowns"
    ],
    "flags": {
      "coolturnDown": true
    },
    "slug": "all-skill-cooldowns-reset"
  },
  {
    "id": 2504,
    "strId": "BI_SKILL_COOL_TURN_UP",
    "name": "All Skill Cooldowns Increase",
    "desc": "Increases the Cooldowns of all Skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Increases skill cooldowns"
    ],
    "flags": {
      "coolturnUp": true
    },
    "slug": "all-skill-cooldowns-increase"
  },
  {
    "id": 2505,
    "strId": "BI_HYPER_COOL_TURN_UP",
    "name": "Ultimate Skill Cooldown Increase",
    "desc": "Increases the Cooldown of Ultimate Skill.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Increases skill cooldowns"
    ],
    "flags": {
      "coolturnUp": true
    },
    "slug": "ultimate-skill-cooldown-increase"
  },
  {
    "id": 2506,
    "strId": "BI_SPECIAL_COOL_TURN_UP",
    "name": "Special Skill Cooldown Increase",
    "desc": "Increases the Cooldown of Special Skill.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "cooldown",
    "categoryLabel": "Cooldown",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [
      "Increases skill cooldowns"
    ],
    "flags": {
      "coolturnUp": true
    },
    "slug": "special-skill-cooldown-increase"
  },
  {
    "id": 1046,
    "strId": "BI_IMMUNE_AGGRO",
    "name": "Taunt Immunity",
    "desc": "Cannot be affected by Taunt.",
    "icon": "BUFF_IMMUNE_AGGRO.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "immuneAggro": true
    },
    "slug": "taunt-immunity"
  },
  {
    "id": 1047,
    "strId": "BI_IMMUNE_STUN",
    "name": "Stun Immunity",
    "desc": "Cannot be affected by Stun.",
    "icon": "BUFF_IMMUNE_STUN.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "immuneStun": true
    },
    "slug": "stun-immunity"
  },
  {
    "id": 1048,
    "strId": "BI_IMMUNE_SLEEP",
    "name": "Sleep Immunity",
    "desc": "Cannot be affected by Sleep.",
    "icon": "BUFF_IMMUNE_SLEEP.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "immuneSleep": true
    },
    "slug": "sleep-immunity"
  },
  {
    "id": 1049,
    "strId": "BI_IMMUNE_SILENCE",
    "name": "Silence Immunity",
    "desc": "Cannot be affected by Silence.",
    "icon": "BUFF_IMMUNE_SILENCE.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "immuneSilence": true
    },
    "slug": "silence-immunity"
  },
  {
    "id": 2002,
    "strId": "BI_SPEED_GAUGE_UP",
    "name": "Action Gauge Up",
    "desc": "Increases Action Gauge.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "action-gauge-up"
  },
  {
    "id": 2003,
    "strId": "BI_NOVA_FORCE_UP",
    "name": "Nova Force Up",
    "desc": "Increases Nova Force.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "nova-force-up"
  },
  {
    "id": 2009,
    "strId": "BI_EXTRA_TURN",
    "name": "Extra Turn",
    "desc": "Gains an extra turn.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "extra-turn"
  },
  {
    "id": 2010,
    "strId": "BI_RESURRECTION",
    "name": "Revive",
    "desc": "Can revive a fallen ally.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "revive"
  },
  {
    "id": 2011,
    "strId": "BI_BUFF_TURN_INCREASE",
    "name": "Buff Duration Up",
    "desc": "Extends buff duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "buff-duration-up"
  },
  {
    "id": 2012,
    "strId": "BI_DEBUFF_TURN_DECREASE",
    "name": "Debuff Duration Down",
    "desc": "Shortens debuff duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "debuff-duration-down"
  },
  {
    "id": 2013,
    "strId": "BI_ENFORCE",
    "name": "Extra Action",
    "desc": "Activates a specific skill.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "extra-action"
  },
  {
    "id": 2016,
    "strId": "BI_SUMMON",
    "name": "Summon",
    "desc": "Summons the specified unit.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "summon"
  },
  {
    "id": 2017,
    "strId": "BI_DELETE_SPECIFIC_BUFF",
    "name": "Dispel Specific Buff",
    "desc": "Removes a specific buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "dispel-specific-buff"
  },
  {
    "id": 2023,
    "strId": "BI_CHANGE_SKILL",
    "name": "Switch Skill",
    "desc": "Switches skills.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "switch-skill"
  },
  {
    "id": 7003,
    "strId": "BI_CHARM_50620061",
    "name": "Overcharge (Undispellable)",
    "desc": "Deals Special DMG to the target that scales with the holder's Max HP after using a Basic Skill.",
    "icon": "BUFF_RATE_DAMAGE_UP.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "overcharge-undispellable"
  },
  {
    "id": 10312,
    "strId": "BI_STARPIERCER_OMEGA_2",
    "name": "Omega Counting Buff",
    "desc": "This is Omega's counting buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "omega-counting-buff"
  },
  {
    "id": 10444,
    "strId": "BI_BUNNY_SPEAR_4",
    "name": "Special Skill Enforce Check Buff",
    "desc": "This is a Special Skill Enforce check buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "special-skill-enforce-check-buff"
  },
  {
    "id": 10572,
    "strId": "BI_BUNNY_PRAY_ANIMSET2",
    "name": "Bunny Girl Frey Animation Change Buff",
    "desc": "This is Bunny Girl Frey's animation change buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "bunny-girl-frey-animation-change-buff"
  },
  {
    "id": 10573,
    "strId": "BI_BUNNY_PRAY_2",
    "name": "Bunny Girl Frey Counting Buff",
    "desc": "This is Bunny Girl Frey's counting buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "bunny-girl-frey-counting-buff"
  },
  {
    "id": 30032,
    "strId": "BI_HELLFIRE_1",
    "name": "Inferno (Undispellable)",
    "desc": "Enhances Ruler's Judgement for each stack of Inferno. Stacks up to 3 times.",
    "icon": "BUFF_FIAME.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "inferno-undispellable"
  },
  {
    "id": 52001,
    "strId": "BI_TRIGGER_DYING2",
    "name": "Separate Death Animation Trigger Buff",
    "desc": "This is a trigger buff for a special death animation. Used for special purposes.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "separate-death-animation-trigger-buff"
  },
  {
    "id": 300661,
    "strId": "BI_CARBONPUNK_LORD_1",
    "name": "Overclock (Undispellable)",
    "desc": "Carbonpunk Khan's mechanical arm begins to accelerate. Stacks up to 5 times.",
    "icon": "BUFF_OVER_CLOCK.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "overclock-undispellable"
  },
  {
    "id": 300674,
    "strId": "BI_MAGICIAN_HYPNOSIS_1",
    "name": "Rabbit (Undispellable)",
    "desc": "Prioritizes attacking the enemy with the highest Max HP.",
    "icon": "BUFF_MAGICIAN_HYPNOSIS_RABBIT.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "rabbit-undispellable"
  },
  {
    "id": 300675,
    "strId": "BI_MAGICIAN_HYPNOSIS_2",
    "name": "Pigeon (Undispellable)",
    "desc": "Prioritizes attacking the enemy with the highest ATK.",
    "icon": "BUFF_MAGICIAN_HYPNOSIS_PIGEON.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "pigeon-undispellable"
  },
  {
    "id": 300676,
    "strId": "BI_MAGICIAN_HYPNOSIS_3",
    "name": "Poof! (Undispellable)",
    "desc": "Prioritizes attacking the enemy with the highest Action Gauge.",
    "icon": "BUFF_MAGICIAN_HYPNOSIS_BOMB.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "poof-undispellable"
  },
  {
    "id": 300682,
    "strId": "BI_COUNTERSIDE_HILDE_BOSS_1",
    "name": "Endurance (Undispellable)",
    "desc": "Hilde prepares for engagement. Stacks up to 3 times. Removes stacks when attacked at max stacks.",
    "icon": "BUFF_COUNTERSIDE_HILDE_DEFENSIVE_STANCE_STACK.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "endurance-undispellable"
  },
  {
    "id": 300744,
    "strId": "BI_PILGRIM_ALIEN_RED_4",
    "name": "Attacked 2 Times Counting Buff",
    "desc": "This is Attacked 2 Times counting buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "attacked-2-times-counting-buff"
  },
  {
    "id": 300745,
    "strId": "BI_PILGRIM_ALIEN_RED_5",
    "name": "Attacked 2 Times Counting Forbidding Buff",
    "desc": "This is Attacked 2 Times counting forbidding buff.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "attacked-2-times-counting-forbidding-buff"
  },
  {
    "id": 9999906,
    "strId": "BI_TEST_DAMAGE_UP_GRADE_BOSS",
    "name": "DMG Increase Test: Boss",
    "desc": "This is a test buff that increases damage against bosses.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "dmg-increase-test-boss"
  },
  {
    "id": 9999907,
    "strId": "BI_TEST_DAMAGE_UP_ROLE_STRIKER",
    "name": "DMG Increase Test: Striker",
    "desc": "This is a test buff that increases damage against Strikers.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "dmg-increase-test-striker"
  },
  {
    "id": 9999908,
    "strId": "BI_TEST_REDUCE_UP_ROLE_STRIKER",
    "name": "DMG Taken Reduction Test: Striker",
    "desc": "This is a test buff that grants damage reduction against Strikers.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "dmg-taken-reduction-test-striker"
  },
  {
    "id": 9999910,
    "strId": "BI_TEST_REDUCE_UP_ADJUST_SUN",
    "name": "DMG Taken Reduction Test: Sun Attribute",
    "desc": "This is a test buff that grants damage reduction against Sun Attribute units.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": true,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "dmg-taken-reduction-test-sun-attribute"
  },
  {
    "id": 2502,
    "strId": "BI_SPEED_GAUGE_DOWN",
    "name": "Action Gauge Down",
    "desc": "Reduces Action Gauge.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "action-gauge-down"
  },
  {
    "id": 2503,
    "strId": "BI_NOVA_FORCE_DOWN",
    "name": "Nova Force Down",
    "desc": "Nova Force decreases.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "nova-force-down"
  },
  {
    "id": 2507,
    "strId": "BI_BUFF_TURN_DECREASE",
    "name": "Buff Duration Down",
    "desc": "Shortens buff duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "buff-duration-down"
  },
  {
    "id": 2508,
    "strId": "BI_DEBUFF_TURN_INCREASE",
    "name": "Debuff Duration Up",
    "desc": "Extends debuff duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "debuff-duration-up"
  },
  {
    "id": 2509,
    "strId": "BI_ADD_TRUE_DAMAGE",
    "name": "Extra Fixed DMG",
    "desc": "Deals Extra Fixed DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "extra-fixed-dmg"
  },
  {
    "id": 2510,
    "strId": "BI_ADD_DAMAGE_1",
    "name": "Special DMG (Lightning)",
    "desc": "Deals Special DMG (Lightning).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-lightning"
  },
  {
    "id": 2512,
    "strId": "BI_ADD_DAMAGE_3",
    "name": "Special DMG (Blade)",
    "desc": "Deals Special DMG (Blade).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-blade"
  },
  {
    "id": 2513,
    "strId": "BI_ADD_DAMAGE_4",
    "name": "Special DMG (Ice Explosion)",
    "desc": "Deals Special DMG (Ice Explosion).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-ice-explosion"
  },
  {
    "id": 2514,
    "strId": "BI_ADD_DAMAGE_5",
    "name": "Special DMG (Lightning)",
    "desc": "Deals Special DMG (Lightning).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-lightning"
  },
  {
    "id": 2515,
    "strId": "BI_ADD_DAMAGE_6",
    "name": "Special DMG (Lightning)",
    "desc": "Deals Special DMG (Lightning).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-lightning"
  },
  {
    "id": 2516,
    "strId": "BI_ADD_DAMAGE_7",
    "name": "Special DMG (Lightning)",
    "desc": "Deals Special DMG (Lightning).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-lightning"
  },
  {
    "id": 2517,
    "strId": "BI_ADD_DAMAGE_8",
    "name": "Special DMG (Lightning)",
    "desc": "Deals Special DMG (Lightning).",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "special-dmg-lightning"
  },
  {
    "id": 2520,
    "strId": "BI_ASYNC_ADD_TRUE_DAMAGE",
    "name": "Extra Fixed DMG",
    "desc": "Deals Extra Fixed DMG.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "extra-fixed-dmg"
  },
  {
    "id": 2522,
    "strId": "BI_SPEED_GAUGE_DOWN_FORCE",
    "name": "Action Gauge Down",
    "desc": "Reduces Action Gauge.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "action-gauge-down"
  },
  {
    "id": 7004,
    "strId": "BI_CHARM_50620071",
    "name": "Shatter",
    "desc": "Self Toughness decreases when attacked by a Savior's Basic Skill.",
    "icon": "DEBUFF_EXHAUSTION.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "shatter"
  },
  {
    "id": 9021,
    "strId": "BI_POTEN_PASSIVE_404011",
    "name": "Starlight Trajectory-EX",
    "desc": "Triggers a random ally's Basic Skill on the target with a 25% chance on Critical Hit with a Basic Skill. Occurs once per self turn. This effect can trigger while Toughness is broken.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "starlight-trajectory-ex"
  },
  {
    "id": 9023,
    "strId": "BI_POTEN_PASSIVE_407011",
    "name": "Starlight Trajectory-GX",
    "desc": "Deals Chain DMG to the attacker proportional to self Max HP with a 50% chance if self has no debuffs when attacked by a single-target attack.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {
      "addDamage": true
    },
    "slug": "starlight-trajectory-gx"
  },
  {
    "id": 10462,
    "strId": "BI_SUMMER_SMILE_1",
    "name": "Fleeting Attention",
    "desc": "Smile's Interest increases.",
    "icon": "DEBUFF_SUMMER_SMILE.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "fleeting-attention"
  },
  {
    "id": 300662,
    "strId": "BI_CARBONPUNK_LORD_2",
    "name": "Overheat (Undispellable)",
    "desc": "Carbonpunk Khan's mechanical arm begins to overheat. Stacks up to 5 times.",
    "icon": "DEBUFF_OVER_HEAT.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": false,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "overheat-undispellable"
  },
  {
    "id": 300671,
    "strId": "BI_WENDIGO_WEIRD_2",
    "name": "Action Gauge Down",
    "desc": "Reduces Action Gauge.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "action-gauge-down"
  },
  {
    "id": 300672,
    "strId": "BI_HATCHLING_GUARD_6",
    "name": "Debuff Duration Up",
    "desc": "Extends debuff duration.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "debuff-duration-up"
  },
  {
    "id": 9999914,
    "strId": "BI_TEST_SE_DAMAGE_HP_100000",
    "name": "Instant Damage",
    "desc": "Deals damage equal to 10x the caster's HP.",
    "icon": "BUFF_DUMMY.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": false,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "instant-damage"
  },
  {
    "id": 9999916,
    "strId": "BI_TEST_BELLWETHER_MANE_1",
    "name": "Soul Bind",
    "desc": "Max HP decreases by 15%.",
    "icon": "DEBUFF_CHAIN.png",
    "isBuff": false,
    "category": "special",
    "categoryLabel": "Special",
    "canDispel": true,
    "isUnique": true,
    "stats": [],
    "effects": [],
    "flags": {},
    "slug": "soul-bind"
  }
]
;