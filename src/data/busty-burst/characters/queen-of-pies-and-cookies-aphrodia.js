// Character data: queen-of-pies-and-cookies-aphrodia
// Merged from info/skills/stats files

export const info = {
  "slug": "queen-of-pies-and-cookies-aphrodia",
  "name": "[Queen of Pies and Cookies] Aphrodia",
  "displayName": "Queen of Pies and Cookies Aphrodia",
  "baseName": "Aphrodia",
  "title": "Queen of Pies and Cookies",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Fast",
  "range": 240,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Queen_of_Pies_and_Cookies_Aphrodia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "168cm",
    "bust": "107cm (L Cup)",
    "waist": "63cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u6df1\u6ce5\u6b63",
      "romanized": "Fukadoro Tadashi"
    },
    "voice": {
      "japanese": "\u9999\u6f84\u308a\u3087\u3046",
      "romanized": "Kasumi Ryou"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Offering Cookies for the Holy Night (Dec 16 - Dec 30)"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Won’t you taste my sweets?",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 8 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 8 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Poison (HP --2450 per second) for 8 seconds and Block-23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "330% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "330% + 150",
      "lvl90": "330% + 138",
      "effects": [
        "Poison Lv5",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Poison Lv5",
          "value": -200,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -25.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Come now, have some.",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 30%UP for 8 seconds",
      "descriptionLv1": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 30%UP for 8 seconds",
      "descriptionLv90": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 30%UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Damage + Lv4",
        "Debuff Resistance Lv2"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 400.0
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Accept it—this is your reward.",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "1170% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Accept it—this is your reward.",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "1400% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Accept it—this is your reward.",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "1560% + 1100",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Accept it—this is your reward.",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "1670% + 1200",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Accept it—this is your reward.",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "1730% + 1300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
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
      "name": "Skill Damage +, Mind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Mind Type ATK + (+10%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Queen of Pies and Cookies: Aphrodia",
  "id": 2095,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 242,
    "MATK": 145,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "queen-of-pies-and-cookies-aphrodia"
};

export const stats = {
  "id": "queen-of-pies-and-cookies-aphrodia",
  "characterId": 2095,
  "name": "【Queen of Pies and Cookies】Aphrodia",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 242,
      "lv90": 1210
    },
    "matk": {
      "base": 145,
      "lv90": 725
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
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
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
      "base": 46,
      "lv90": 46
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
      "ATK": 73,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 592,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "ATK": 98,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 772,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1458,
      "ATK": 224,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4032,
      "ATK": 587,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "ATK": 31,
      "Phys Crit": 8,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "ATK": 36,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "ATK": 41,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "ATK": 46,
      "Phys Crit": 12,
      "MP Charge": 4
    },
    "g6": {
      "HP": 361,
      "ATK": 51,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "ATK": 56,
      "Phys Crit": 14,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "ATK": 61,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "ATK": 66,
      "Phys Crit": 17,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 6
    },
    "total": {
      "HP": 506,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 20
    },
    {
      "grade": 2,
      "Phys Crit": 11
    },
    {
      "grade": 3,
      "ATK": 28
    },
    {
      "grade": 4,
      "Phys Crit": 15
    },
    {
      "grade": 5,
      "ATK": 36
    },
    {
      "grade": 6,
      "Phys Crit": 18
    },
    {
      "grade": 7,
      "ATK": 44
    },
    {
      "grade": 8,
      "Phys Crit": 22
    },
    {
      "grade": 9,
      "ATK": 52
    },
    {
      "grade": 10,
      "Phys Crit": 25
    },
    {
      "grade": 11,
      "ATK": 55
    }
  ]
};;;;;;;;
