// Character data: stenlina
// Merged from info/skills/stats files

export const info = {
  "slug": "stenlina",
  "name": "Stenlina",
  "displayName": "Stenlina",
  "baseName": "Stenlina",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 400,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Stenlina",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "161cm",
    "bust": "102cm (J Cup)",
    "waist": "63cm",
    "hips": "86cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u3054\u3070\u3093\u3002",
      "romanized": "Goban"
    },
    "voice": {
      "japanese": "\u4e09\u5341\u4e09\u4e03",
      "romanized": "Misomina"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Pillar of Sanctity",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "150% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+10",
      "lvl1": "150% + 70",
      "lvl90": "150% + 960",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Feather Dance",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -20 DOWN for 10 seconds and Magic Attack -20 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -20 DOWN for 10 seconds and Magic Attack -20 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -2000 DOWN for 10 seconds and Magic Attack -20 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "130% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "130% + 50",
      "lvl90": "130% + -128",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV 1) for 10 seconds and Magic Critical DamageDOWN(LV 1) for 10 seconds",
      "effect": "430% + 400",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Pillar of Sanctity",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies",
      "effect": "150% + 70",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Feather Dance",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -20 DOWN for 10 seconds and Magic Attack -20 DOWN for 10 seconds",
      "effect": "130% + 50",
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV 1) for 10 seconds and Magic Critical DamageDOWN(LV 1) for 10 seconds",
      "effect": "430% + 400",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV 2) for 10 seconds and Magic Critical DamageDOWN(LV 2) for 10 seconds",
      "effect": "480% + 409",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Magic Attack + (+259), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Skill Damage +",
      "icon": "skill001/skill1006",
      "effect": "Block+ (+15), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Stenlina",
  "id": 2061,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 134,
    "MATK": 224,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "stenlina"
};

export const stats = {
  "id": "stenlina",
  "characterId": 2061,
  "name": "Stenlina",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 134,
      "lv90": 672
    },
    "matk": {
      "base": 224,
      "lv90": 1120
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "base": 58,
      "lv90": 58
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
      "HP": 716,
      "MATK": 57,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 824,
      "MATK": 65,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 967,
      "MATK": 77,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1074,
      "MATK": 85,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1745,
      "MATK": 178,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5326,
      "MATK": 462,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 1
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 1
    },
    "gp3": {
      "MATK": 40,
      "MP Charge": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 3
    },
    "gp5": {
      "MATK": 120,
      "MP Charge": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 5
    },
    "gp7": {
      "MATK": 200,
      "MP Charge": 7
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 7
    },
    "gp9": {
      "MATK": 280,
      "MP Charge": 9
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 9
    },
    "total": {
      "MATK": 360,
      "MP Charge": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 251,
      "MATK": 20,
      "MDEF": 6,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 302,
      "MATK": 24,
      "MDEF": 8,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 352,
      "MATK": 28,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 402,
      "MATK": 32,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 452,
      "MATK": 36,
      "MDEF": 12,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 503,
      "MATK": 40,
      "MDEF": 13,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 553,
      "MATK": 44,
      "MDEF": 14,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 603,
      "MATK": 48,
      "MDEF": 16,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 653,
      "MATK": 52,
      "MDEF": 17,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 704,
      "MATK": 56,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 704,
      "MATK": 56,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Magic Crit": 7
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Magic Crit": 10
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Magic Crit": 12
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Magic Crit": 15
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Magic Crit": 17
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
