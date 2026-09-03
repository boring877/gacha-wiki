// Character data: 貝加莉亞
// Auto-generated from game data

export const info = {
  "slug": "begaria",
  "name": "Begaria",
  "displayName": "Begaria",
  "baseName": "Begaria",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Very Slow",
  "range": 550,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "begaria",
  "introduction": "Back RowMagicalAttacker",
  "profile": {
    "height": "171cm",
    "bust": "116cm (O Cup)",
    "waist": "63cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "KeG",
      "romanized": ""
    },
    "voice": {
      "japanese": "噴太棒",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2183
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Augusta",
      "icon": "skill001/skill0011",
      "description": "6 nearest enemies dealmagic damage, applies 3s and Physical Attack -11%-25 DOWN for 10 seconds, 10s Magic Attack -11%-25 DOWN",
      "descriptionLv1": "6 nearest enemies dealmagic damage, applies 3s and Physical Attack -11%-25 DOWN for 10 seconds, 10s Magic Attack -11%-25 DOWN",
      "descriptionLv90": "6 nearest enemies dealmagic damage, applies 3s and Physical Attack -11%-205 DOWN for 10 seconds, 10s Magic Attack -11%-205 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": "60% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+3",
      "lvl1": "60% + 150",
      "lvl90": "60% + -28",
      "effects": [
        "Curse",
        "Physical Attack - Lv4",
        "Magic Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Alma",
      "icon": "skill001/skill0011",
      "description": "6 nearest enemies dealmagic damage and inflicts Physical Defense -21%-40 DOWN for 10 seconds and Magic Defense-21%-40 DOWN for 10 seconds, 1 stacks(1 stacksaction speed-10%, max 3 stacks, (cannot be removed))",
      "descriptionLv1": "6 nearest enemies dealmagic damage and inflicts Physical Defense -21%-40 DOWN for 10 seconds and Magic Defense-21%-40 DOWN for 10 seconds, 1 stacks(1 stacksaction speed-10%, max 3 stacks, (cannot be removed))",
      "descriptionLv90": "6 nearest enemies dealmagic damage and inflicts Physical Defense -21%-220 DOWN for 10 seconds and Magic Defense-21%-220 DOWN for 10 seconds, 1 stacks(1 stacksaction speed-10%, max 3 stacks, (cannot be removed))",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": "75% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+3",
      "lvl1": "75% + 250",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv4",
        "Magic Defense- Lv4",
        "Entangle"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Entangle",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rampaging souls, calm down. Now, the earth is filled with love.",
      "icon": "skill001/skill0012_1",
      "description": "6 nearest enemies dealmagic damage, applies 4s(LV 1), 4s Blind, 10s Action Speed DOWN(LV 1)",
      "effect": "229% + 500",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rampaging souls, calm down. Now, the earth is filled with love.",
      "icon": "skill001/skill0012_2",
      "description": "6 nearest enemies dealmagic damage, applies 4s(LV 2), 5s Blind, 10s Action Speed DOWN(LV 2)",
      "effect": "270% + 650",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rampaging souls, calm down. Now, the earth is filled with love.",
      "icon": "skill001/skill0012_3",
      "description": "6 nearest enemies dealmagic damage, applies 4s(LV 3), 5s Blind, 10s Action Speed DOWN(LV 3)",
      "effect": "310% + 800",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv3",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rampaging souls, calm down. Now, the earth is filled with love.",
      "icon": "skill001/skill0012_4",
      "description": "6 nearest enemies dealmagic damage, applies 4s(LV 4), 6s Blind, 10s Action Speed DOWN(LV 4)",
      "effect": "345% + 900",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv4",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rampaging souls, calm down. Now, the earth is filled with love.",
      "icon": "skill001/skill0012_5",
      "description": "6 nearest enemies dealmagic damage, applies 4s(LV 5), 6s Blind, 10s Action Speed DOWN(LV 5)",
      "effect": "370% + 1000",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv5",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, MP Recovery",
      "icon": "skill001/skill1001",
      "description": "Gain Skill Damage UP (Small), MP Recovery",
      "effect": "Skill Damage + (+10%), MP Recovery (+50%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent",
          "gameText": "Skill Damage UP (Small)"
        },
        {
          "name": "MP Recovery",
          "value": 50,
          "type": "percent",
          "gameText": "MP Recovery"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Taunt Resistance LvMax",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Taunt Resistance UP",
      "effect": "Ultimate Damage + (+15%), Taunt Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Taunt Resistance LvMax",
          "value": 1,
          "type": "percent",
          "gameText": "Taunt Resistance UP"
        }
      ]
    }
  ],
  "name": "貝加莉亞",
  "id": 2183,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2887,
    "ATK": 291,
    "MATK": 485,
    "DEF": 24,
    "MDEF": 61
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.3"
  },
  "slug": "貝加莉亞"
};

export const stats = {
  "id": "begaria",
  "characterId": 2183,
  "name": "Begaria",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2887,
      "lv90": 14435
    },
    "atk": {
      "base": 291,
      "lv90": 1457
    },
    "matk": {
      "base": 485,
      "lv90": 2428
    },
    "def": {
      "base": 24,
      "lv90": 48
    },
    "mdef": {
      "base": 61,
      "lv90": 122
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 47,
      "lv90": 75
    },
    "magicCrit": {
      "base": 78,
      "lv90": 125
    },
    "hpRegen": {
      "base": 144,
      "lv90": 504
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 92,
      "lv90": 92
    },
    "hpDrain": {
      "base": 0,
      "lv90": 0
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 866,
      "MATK": 146,
      "Block": 14,
      "MP Charge": 9
    },
    "lb2": {
      "HP": 996,
      "MATK": 168,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1169,
      "MATK": 197,
      "Block": 18,
      "MP Charge": 12
    },
    "lb4": {
      "HP": 1299,
      "MATK": 219,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2454,
      "MATK": 413,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6784,
      "MATK": 1143,
      "Block": 68,
      "MP Charge": 21,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "MATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "MATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "MATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "MATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "MATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 304,
      "MATK": 51,
      "MDEF": 3,
      "Magic Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 365,
      "MATK": 61,
      "MDEF": 3,
      "Magic Crit": 2,
      "Block": 14
    },
    "g3": {
      "HP": 425,
      "MATK": 72,
      "MDEF": 4,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 486,
      "MATK": 82,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 19
    },
    "g5": {
      "HP": 547,
      "MATK": 92,
      "MDEF": 5,
      "Magic Crit": 3,
      "MP Charge": 7
    },
    "g6": {
      "HP": 608,
      "MATK": 102,
      "MDEF": 6,
      "Magic Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 669,
      "MATK": 113,
      "MDEF": 6,
      "Magic Crit": 4,
      "Block": 26
    },
    "g8": {
      "HP": 729,
      "MATK": 123,
      "MDEF": 7,
      "Magic Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 790,
      "MATK": 133,
      "MDEF": 7,
      "Magic Crit": 4,
      "Block": 31
    },
    "g10": {
      "HP": 851,
      "MATK": 143,
      "MDEF": 8,
      "Magic Crit": 5,
      "MP Charge": 11
    },
    "total": {
      "HP": 851,
      "MATK": 143,
      "MDEF": 8,
      "Magic Crit": 5,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;
