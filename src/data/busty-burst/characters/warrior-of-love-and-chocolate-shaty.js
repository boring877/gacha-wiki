// Character data: warrior-of-love-and-chocolate-shaty
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "warrior-of-love-and-chocolate-shaty",
  "name": "Warrior of Love and Chocolate: Shaty",
  "displayName": "Warrior of Love and Chocolate: Shaty",
  "baseName": "Shaty",
  "title": "Warrior of Love and Chocolate",
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Very Slow",
  "range": 500,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Shaty",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "102cm (J Cup)",
    "waist": "61cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "みるちょ",
      "romanized": ""
    },
    "voice": {
      "japanese": "南十字いっせい",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2111
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Want to do grown-up things together?",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies , activation beforeApplies Mind Type ATK 15%UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies , activation beforeApplies Mind Type ATK 15%UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies , activation beforeApplies Mind Type ATK 15%UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": null,
      "effects": [
        "Mind Type ATK + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Mind Type ATK + Lv4",
          "value": 15,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "You want some too?",
      "icon": "skill001/skill0011",
      "description": "Inflicts Block-9 DOWN on the 3 nearest enemies for 8 seconds",
      "descriptionLv1": "Inflicts Block-9 DOWN on the 3 nearest enemies for 8 seconds",
      "descriptionLv90": "Inflicts Block-18 DOWN on the 3 nearest enemies for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Fascinating Trick Shot",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Hit-Based Damage UP(LV 1) to self for 6 seconds and Mind Type ATK UP(LV 1) for 6 seconds",
      "effect": "400% + 600",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 70,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Fascinating Trick Shot",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Hit-Based Damage UP(LV 2) to self for 6 seconds and Mind Type ATK UP(LV 2) for 6 seconds",
      "effect": "450% + 900",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 90,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Fascinating Trick Shot",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Hit-Based Damage UP(LV 3) to self for 6 seconds and Mind Type ATK UP(LV 3) for 6 seconds",
      "effect": "480% + 1100",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv3",
          "value": 110,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Mind Type ATK + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Fascinating Trick Shot",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Hit-Based Damage UP(LV 4) to self for 6 seconds and Mind Type ATK UP(LV 4) for 6 seconds",
      "effect": "509% + 1300",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv4",
          "value": 120,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Mind Type ATK + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Fascinating Trick Shot",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Hit-Based Damage UP(LV 5) to self for 6 seconds and Mind Type ATK UP(LV 5) for 6 seconds",
      "effect": "535% + 1500",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv5",
          "value": 130,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Mind Type ATK + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
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
  "name": "Warrior of Love and Chocolate: Shaty",
  "id": 2111,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1793,
    "ATK": 392,
    "MATK": 235,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "warrior-of-love-and-chocolate-shaty"
};

export const stats = {
  "id": "warrior-of-love-and-chocolate-shaty",
  "characterId": 2111,
  "name": "【Warrior of Love and Chocolate】Shaty",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1793,
      "lv90": 8968
    },
    "atk": {
      "base": 392,
      "lv90": 1961
    },
    "matk": {
      "base": 235,
      "lv90": 1176
    },
    "def": {
      "base": 126,
      "lv90": 252
    },
    "mdef": {
      "base": 50,
      "lv90": 100
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
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
    },
    "hpRegen": {
      "base": 89,
      "lv90": 313
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
      "HP": 538,
      "ATK": 118,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 619,
      "ATK": 135,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 726,
      "ATK": 159,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 807,
      "ATK": 177,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1315,
      "ATK": 309,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4005,
      "ATK": 898,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "ATK": 30,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 30,
      "MP Charge": 4
    },
    "gp4": {
      "ATK": 90,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 90,
      "MP Charge": 6
    },
    "gp6": {
      "ATK": 150,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 150,
      "MP Charge": 8
    },
    "gp8": {
      "ATK": 210,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 210,
      "MP Charge": 10
    },
    "gp10": {
      "ATK": 270,
      "MP Charge": 10
    },
    "total": {
      "ATK": 270,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 189,
      "ATK": 41,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 227,
      "ATK": 50,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 264,
      "ATK": 58,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 302,
      "ATK": 66,
      "Phys Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 340,
      "ATK": 74,
      "Phys Crit": 1,
      "MP Charge": 6
    },
    "g6": {
      "HP": 378,
      "ATK": 83,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 415,
      "ATK": 91,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 453,
      "ATK": 99,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 491,
      "ATK": 107,
      "Phys Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 529,
      "ATK": 116,
      "Phys Crit": 2,
      "MP Charge": 9
    },
    "total": {
      "HP": 529,
      "ATK": 116,
      "Phys Crit": 2,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Accuracy": 3
    },
    {
      "grade": 2,
      "ATK": 35
    },
    {
      "grade": 3,
      "Accuracy": 4
    },
    {
      "grade": 4,
      "ATK": 47
    },
    {
      "grade": 5,
      "Accuracy": 5
    },
    {
      "grade": 6,
      "ATK": 59
    },
    {
      "grade": 7,
      "Accuracy": 6
    },
    {
      "grade": 8,
      "ATK": 71
    },
    {
      "grade": 9,
      "Accuracy": 7
    },
    {
      "grade": 10,
      "ATK": 82
    },
    {
      "grade": 11,
      "Accuracy": 7
    }
  ]
};;;;;;;;
