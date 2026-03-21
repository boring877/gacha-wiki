// Character data: shaty
// Merged from info/skills/stats files

export const info = {
  "slug": "shaty",
  "name": "Shaty",
  "displayName": "Shaty",
  "baseName": "Shaty",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 500,
  "weaponType": "Shoot/Ranged",
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
      "japanese": "\u307f\u308b\u3061\u3087",
      "romanized": "Mirucho"
    },
    "voice": {
      "japanese": "\u5357\u5341\u5b57\u3044\u3063\u305b\u3044",
      "romanized": "Minamijuji Issei"
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
      "name": "Weakness Exploit",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK UP to self for 6 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.78,
      "damageScaling": "270% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "270% + 150",
      "lvl90": "270% + 951",
      "effects": [
        "Wind Type ATK + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Wind Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6,
          "levelGrowth": 9.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Analysis",
      "icon": "skill001/skill0011",
      "description": "Applies Wind Type Defense DOWN to the farthest enemy for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv1": "Applies Wind Type Defense DOWN to the farthest enemy for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv90": "Applies Wind Type Defense DOWN to the farthest enemy for 8 seconds and Block-23 DOWN for 8 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Wind Type Defense - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Wind Type Defense - Lv4",
          "value": -18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the farthest enemy and applies Wind Type ATK UP(LV 1) to self for 6 seconds and Hit-Based Damage UP(LV 1) for 10 seconds when the ultimate is activated",
      "effect": "400% + 1200",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 80,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Weakness Exploit",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK UP to self for 6 seconds",
      "effect": "270% + 150",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Analysis",
      "icon": "skill001/skill0011",
      "description": "Applies Wind Type Defense DOWN to the farthest enemy for 8 seconds and Block-11 DOWN for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Lv4",
          "value": -18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the farthest enemy and applies Wind Type ATK UP(LV 1) to self for 6 seconds and Hit-Based Damage UP(LV 1) for 10 seconds when the ultimate is activated",
      "effect": "400% + 1200",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 80,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the farthest enemy and applies Wind Type ATK UP(LV 2) to self for 6 seconds and Hit-Based Damage UP(LV 2) for 10 seconds when the ultimate is activated",
      "effect": "450% + 1600",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 100,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Shaty",
  "id": 2072,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 429,
    "MATK": 257,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "shaty"
};

export const stats = {
  "id": "shaty",
  "characterId": 2072,
  "name": "Shaty",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1964,
      "lv90": 9822
    },
    "atk": {
      "base": 429,
      "lv90": 2148
    },
    "matk": {
      "base": 257,
      "lv90": 1288
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 98,
      "lv90": 343
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
      "base": 102,
      "lv90": 102
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
      "HP": 589,
      "ATK": 129,
      "Block": 14,
      "MP Charge": 9
    },
    "lb2": {
      "HP": 678,
      "ATK": 148,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "ATK": 174,
      "Block": 18,
      "MP Charge": 13
    },
    "lb4": {
      "HP": 884,
      "ATK": 193,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1670,
      "ATK": 397,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4617,
      "ATK": 1041,
      "Block": 68,
      "MP Charge": 22,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 40,
      "MP Charge": 4
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 120,
      "MP Charge": 6
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 200,
      "MP Charge": 8
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 280,
      "MP Charge": 10
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 207,
      "ATK": 45,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 248,
      "ATK": 54,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 290,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 331,
      "ATK": 72,
      "Phys Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 372,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 9
    },
    "g6": {
      "HP": 414,
      "ATK": 90,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 455,
      "ATK": 100,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 496,
      "ATK": 109,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 538,
      "ATK": 118,
      "Phys Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 579,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 13
    },
    "total": {
      "HP": 579,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 13
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Accuracy": 3
    },
    {
      "grade": 2,
      "ATK": 39
    },
    {
      "grade": 3,
      "Accuracy": 4
    },
    {
      "grade": 4,
      "ATK": 52
    },
    {
      "grade": 5,
      "Accuracy": 5
    },
    {
      "grade": 6,
      "ATK": 64
    },
    {
      "grade": 7,
      "Accuracy": 6
    },
    {
      "grade": 8,
      "ATK": 77
    },
    {
      "grade": 9,
      "Accuracy": 7
    },
    {
      "grade": 10,
      "ATK": 90
    },
    {
      "grade": 11,
      "Accuracy": 7
    }
  ]
};;;;;;;;
