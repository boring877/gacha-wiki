// Character data: dragon-crusher-medusa
// Merged from info/skills/stats files

export const info = {
  "slug": "dragon-crusher-medusa",
  "name": "[Dragon Crusher] Medusa",
  "displayName": "Dragon Crusher Medusa",
  "baseName": "Medusa",
  "title": "Dragon Crusher",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 385,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Dragon_Crusher_Medusa",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "150cm",
    "bust": "95cm (I Cup)",
    "waist": "55cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u59eb\u5ddd\u3042\u3044\u308a",
      "romanized": "Himekawa Airi"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "2024 New Year Banner"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "You’re so shameless",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-13 DOWN for 12 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-13 DOWN for 12 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-26 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.42,
      "damageScaling": "120% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+7",
      "lvl1": "120% + 100",
      "lvl90": "120% + 86",
      "effects": [
        "Petrify",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.15
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Mmh~ haa~",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Magic Damage UP(60%+600, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+40 UP for 12 seconds and silences all enemies for 1.5 seconds",
      "descriptionLv1": "Applies Hit-Based Magic Damage UP(60%+600, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+40 UP for 12 seconds and silences all enemies for 1.5 seconds",
      "descriptionLv90": "Applies Hit-Based Magic Damage UP(60%+600, 585004 hit(s)) to self for 15 seconds and Magic Attack 20%+40 UP for 12 seconds and silences all enemies for 1.5 seconds",
      "target": "Self",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Magic Damage + LvMax",
        "Magic Attack + Lv5",
        "Silence"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage + LvMax",
          "value": 4,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 600.0
        },
        {
          "name": "Magic Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 1) for 8 seconds and applies Action Speed UP(LV 1) to self for 10 seconds",
      "effect": "950% + 800",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 25,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 2) for 8 seconds and applies Action Speed UP(LV 2) to self for 10 seconds",
      "effect": "1130% + 1000",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 28,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 3) for 8 seconds and applies Action Speed UP(LV 3) to self for 10 seconds",
      "effect": "1270% + 1150",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 31,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 4) for 8 seconds and applies Action Speed UP(LV 4) to self for 10 seconds",
      "effect": "1350% + 1250",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 33,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 5) for 8 seconds and applies Action Speed UP(LV 5) to self for 10 seconds",
      "effect": "1450% + 1300",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 35,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+176), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Dragon Crusher: Medusa",
  "id": 2099,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 207,
    "MATK": 345,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "130% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.30"
  },
  "slug": "dragon-crusher-medusa"
};

export const stats = {
  "id": "dragon-crusher-medusa",
  "characterId": 2099,
  "name": "【Dragon Crusher】Medusa",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 207,
      "lv90": 1036
    },
    "matk": {
      "base": 345,
      "lv90": 1728
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
    },
    "hpRegen": {
      "base": 85,
      "lv90": 299
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 67,
      "lv90": 67
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
      "HP": 515,
      "MATK": 104,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 592,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "MATK": 140,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 772,
      "MATK": 156,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1451,
      "MATK": 320,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4025,
      "MATK": 839,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 20
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 80
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 110
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 140
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "MATK": 36,
      "MDEF": 6,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "MATK": 44,
      "MDEF": 8,
      "Magic Crit": 8,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "MATK": 51,
      "MDEF": 9,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "MATK": 58,
      "MDEF": 10,
      "Magic Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "MATK": 66,
      "MDEF": 12,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "g6": {
      "HP": 361,
      "MATK": 73,
      "MDEF": 13,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "MATK": 80,
      "MDEF": 14,
      "Magic Crit": 14,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "MATK": 87,
      "MDEF": 16,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "MATK": 95,
      "MDEF": 17,
      "Magic Crit": 17,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "MATK": 102,
      "MDEF": 18,
      "Magic Crit": 18,
      "MP Charge": 9
    },
    "total": {
      "HP": 506,
      "MATK": 102,
      "MDEF": 18,
      "Magic Crit": 18,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 40
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 52
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 63
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 75
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 79
    }
  ]
};;;;;;;;
