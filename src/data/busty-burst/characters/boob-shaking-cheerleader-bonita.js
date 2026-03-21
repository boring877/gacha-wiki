// Character data: boob-shaking-cheerleader-bonita
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "boob-shaking-cheerleader-bonita",
  "name": "Boob-Shaking Cheerleader: Bonita",
  "displayName": "Boob-Shaking Cheerleader: Bonita",
  "baseName": "Bonita",
  "title": "Boob-Shaking Cheerleader",
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Bonita",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "143cm",
    "bust": "90cm (H Cup)",
    "waist": "55cm",
    "hips": "75cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": ""
    },
    "voice": {
      "japanese": "榎津まお",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2211
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bouncy Charge",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds and Accuracy -9 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds and Accuracy -9 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-18 DOWN for 6 seconds and Accuracy -18 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "320% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+15",
      "lvl1": "320% + 300",
      "lvl90": "320% + 291",
      "effects": [
        "Block- Lv3",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Let's hear you yell！",
      "icon": "skill001/skill0019",
      "description": "all allies10 Accuracy 9 UP and Physical Critical Damage 40 UP for 10 seconds",
      "descriptionLv1": "all allies10 Accuracy 9 UP and Physical Critical Damage 40 UP for 10 seconds",
      "descriptionLv90": "all allies10 Accuracy 18 UP and Physical Critical Damage 40 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv3",
        "Physical Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 5.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hail Mary jump",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "320% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bouncy Charge",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds and Accuracy -9 DOWN for 6 seconds",
      "effect": "320% + 300",
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Let's hear you yell！",
      "icon": "skill001/skill0019",
      "description": "all allies10 Accuracy 9 UP and Physical Critical Damage 40 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hail Mary jump",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "320% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hail Mary jump",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "380% + 550",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Boob-Shaking Cheerleader: Bonita",
  "id": 2211,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 353,
    "MATK": 212,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.15"
  },
  "slug": "boob-shaking-cheerleader-bonita"
};

export const stats = {
  "id": "boob-shaking-cheerleader-bonita",
  "characterId": 2211,
  "name": "【Boob-Shaking Cheerleader】Bonita",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2159,
      "lv90": 10795
    },
    "atk": {
      "base": 353,
      "lv90": 1765
    },
    "matk": {
      "base": 212,
      "lv90": 1060
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
    },
    "hpRegen": {
      "base": 107,
      "lv90": 376
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 63,
      "lv90": 63
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
      "HP": 648,
      "ATK": 106,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 745,
      "ATK": 122,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 874,
      "ATK": 143,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 972,
      "ATK": 159,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1583,
      "ATK": 286,
      "DEF": 5,
      "MDEF": 1,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 4822,
      "ATK": 816,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 1,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 130,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 170,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 210,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 227,
      "ATK": 37,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 45,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 318,
      "ATK": 52,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 59,
      "Phys Crit": 1,
      "Block": 21
    },
    "g5": {
      "HP": 409,
      "ATK": 67,
      "Phys Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 455,
      "ATK": 74,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 82,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 545,
      "ATK": 89,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 97,
      "Phys Crit": 2,
      "Block": 34
    },
    "g10": {
      "HP": 636,
      "ATK": 104,
      "Phys Crit": 2,
      "MP Charge": 8
    },
    "total": {
      "HP": 636,
      "ATK": 104,
      "Phys Crit": 2,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 29
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "ATK": 41
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "ATK": 53
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "ATK": 65
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "ATK": 77
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "ATK": 85
    }
  ]
};;;;;;;;
