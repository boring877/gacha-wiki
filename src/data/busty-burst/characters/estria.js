// Character data: estria
// Auto-generated from game data

export const info = {
  "slug": "estria",
  "name": "Estria",
  "displayName": "Estria",
  "baseName": "Estria",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 200,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Estria",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "172cm",
    "bust": "104cm (K Cup)",
    "waist": "60cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "榛名れん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2012
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Torlild Schuthein",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -7%-15 DOWN for 8 seconds and Magic Attack -7%-15 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -7%-15 DOWN for 8 seconds and Magic Attack -7%-15 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -7%-105 DOWN for 8 seconds and Magic Attack -7%-105 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "180% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+12",
      "lvl1": "180% + 90",
      "lvl90": "180% + 1",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -1.0
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Will of the Queen of Nordrant",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 10 seconds and Physical Defense 20%+140 UP for 10 seconds",
      "descriptionLv1": "Applies Taunt to self for 10 seconds and Physical Defense 20%+140 UP for 10 seconds",
      "descriptionLv90": "Applies Taunt to self for 10 seconds and Physical Defense 20%+320 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Defense + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 1) to self for 3 seconds",
      "effect": "700% + 527",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 2) to self for 3 seconds",
      "effect": "840% + 709",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 3) to self for 3 seconds",
      "effect": "955% + 787",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 4) to self for 3 seconds",
      "effect": "1025% + 863",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 5) to self for 3 seconds",
      "effect": "1100% + 939",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "description": "Gain Physical Defense UP (Small)",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat",
          "gameText": "Physical Defense UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "description": "Gain Max HP UP (Small)",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat",
          "gameText": "Max HP UP (Small)"
        }
      ]
    }
  ],
  "name": "Estria",
  "id": 2012,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 258,
    "MATK": 155,
    "DEF": 317,
    "MDEF": 126
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "estria"
};

export const stats = {
  "id": "estria",
  "characterId": 2012,
  "name": "Estria",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 2159,
      "lv90": 10795
    },
    "atk": {
      "base": 258,
      "lv90": 1293
    },
    "matk": {
      "base": 155,
      "lv90": 775
    },
    "def": {
      "base": 317,
      "lv90": 634
    },
    "mdef": {
      "base": 126,
      "lv90": 252
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 28,
      "lv90": 45
    },
    "magicCrit": {
      "base": 17,
      "lv90": 27
    },
    "hpRegen": {
      "base": 107,
      "lv90": 376
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
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
      "HP": 648,
      "ATK": 78,
      "Block": 12,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 745,
      "ATK": 89,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 874,
      "ATK": 105,
      "Block": 16,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 972,
      "ATK": 116,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 1738,
      "ATK": 208,
      "DEF": 103,
      "MDEF": 21,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 4977,
      "ATK": 596,
      "Block": 60,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 103,
      "MDEF": 21,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MDEF": 10
    },
    "gp3": {
      "HP": 500,
      "MDEF": 10
    },
    "gp4": {
      "HP": 500,
      "MDEF": 30
    },
    "gp5": {
      "HP": 800,
      "MDEF": 30
    },
    "gp6": {
      "HP": 800,
      "MDEF": 50
    },
    "gp7": {
      "HP": 1100,
      "MDEF": 50
    },
    "gp8": {
      "HP": 1100,
      "MDEF": 70
    },
    "gp9": {
      "HP": 1400,
      "MDEF": 70
    },
    "gp10": {
      "HP": 1400,
      "MDEF": 90
    },
    "total": {
      "HP": 1400,
      "MDEF": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 227,
      "ATK": 27,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 33,
      "Phys Crit": 1,
      "Block": 13
    },
    "g3": {
      "HP": 318,
      "ATK": 38,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 44,
      "Phys Crit": 1,
      "Block": 17
    },
    "g5": {
      "HP": 409,
      "ATK": 49,
      "Phys Crit": 1,
      "MP Charge": 8
    },
    "g6": {
      "HP": 455,
      "ATK": 54,
      "Phys Crit": 1,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 60,
      "Phys Crit": 1,
      "Block": 23
    },
    "g8": {
      "HP": 545,
      "ATK": 65,
      "Phys Crit": 1,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 71,
      "Phys Crit": 2,
      "Block": 27
    },
    "g10": {
      "HP": 636,
      "ATK": 76,
      "Phys Crit": 2,
      "MP Charge": 12
    },
    "total": {
      "HP": 636,
      "ATK": 76,
      "Phys Crit": 2,
      "MP Charge": 12
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 180
    },
    {
      "grade": 2,
      "DEF": 16
    },
    {
      "grade": 3,
      "HP": 252
    },
    {
      "grade": 4,
      "DEF": 22
    },
    {
      "grade": 5,
      "HP": 324
    },
    {
      "grade": 6,
      "DEF": 27
    },
    {
      "grade": 7,
      "HP": 396
    },
    {
      "grade": 8,
      "DEF": 33
    },
    {
      "grade": 9,
      "HP": 468
    },
    {
      "grade": 10,
      "DEF": 38
    },
    {
      "grade": 11,
      "HP": 516
    }
  ]
};;;
