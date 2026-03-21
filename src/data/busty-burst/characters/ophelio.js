// Character data: ophelio
// Merged from info/skills/stats files

export const info = {
  "slug": "ophelio",
  "name": "Ophelio",
  "displayName": "Ophelio",
  "baseName": "Ophelio",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 400,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Ophelio",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "159cm",
    "bust": "106cm (M Cup)",
    "waist": "58cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u3053\u307f\u3061\u307d\u305f",
      "romanized": "Komichipota"
    },
    "voice": {
      "japanese": "\u82b1\u5bae\u6953",
      "romanized": "Hanamiya Kaede"
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
      "name": "Deep Freeze",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 1.5 seconds and Accuracy -11 DOWN for 9 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 1.5 seconds and Accuracy -11 DOWN for 9 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4250 per second) for 1.5 seconds and Accuracy -23 DOWN for 9 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "85% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "85% + 70",
      "lvl90": "85% + 58",
      "effects": [
        "Freeze Lv5",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 1,
          "levelGrowth": -40.0
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 9,
          "levelGrowth": -0.13
        }
      ],
      "duration": 9
    },
    {
      "slot": 3,
      "name": "Earth Grave",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-50 DOWN for 5 seconds",
      "descriptionLv1": "Deals magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-50 DOWN for 5 seconds",
      "descriptionLv90": "Deals magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-320 DOWN for 5 seconds",
      "target": "Back Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "280% + 200",
      "lvl90": "280% + -67",
      "effects": [
        "Stun",
        "Magic Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -3.0
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 1) for 9 seconds and BlockDOWN(LV 1) for 9 seconds",
      "effect": "370% + 300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 2,
      "name": "Deep Freeze",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 1.5 seconds and Accuracy -11 DOWN for 9 seconds",
      "effect": "85% + 70",
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 1
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 3,
      "name": "Earth Grave",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-50 DOWN for 5 seconds",
      "effect": "280% + 200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 1) for 9 seconds and BlockDOWN(LV 1) for 9 seconds",
      "effect": "370% + 300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 5,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 2) for 9 seconds and BlockDOWN(LV 2) for 9 seconds",
      "effect": "480% + 400",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 9
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ophelio",
  "id": 2076,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1670,
    "ATK": 206,
    "MATK": 343,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Skill3 → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "ophelio"
};

export const stats = {
  "id": "ophelio",
  "characterId": 2076,
  "name": "Ophelio",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1670,
      "lv90": 8350
    },
    "atk": {
      "base": 206,
      "lv90": 1031
    },
    "matk": {
      "base": 343,
      "lv90": 1718
    },
    "def": {
      "base": 90,
      "lv90": 180
    },
    "mdef": {
      "base": 226,
      "lv90": 452
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 83,
      "lv90": 291
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
      "base": 82,
      "lv90": 82
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
      "HP": 501,
      "MATK": 103,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 576,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 676,
      "MATK": 139,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 752,
      "MATK": 155,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1545,
      "MATK": 318,
      "DEF": 18,
      "MDEF": 64,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4050,
      "MATK": 834,
      "Block": 68,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 18,
      "MDEF": 64,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 20
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 50
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 80
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 110
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 140
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
      "HP": 176,
      "MATK": 36,
      "MDEF": 10,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 211,
      "MATK": 43,
      "MDEF": 12,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 246,
      "MATK": 51,
      "MDEF": 14,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 281,
      "MATK": 58,
      "MDEF": 16,
      "Magic Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 316,
      "MATK": 65,
      "MDEF": 18,
      "Magic Crit": 2,
      "MP Charge": 7
    },
    "g6": {
      "HP": 352,
      "MATK": 72,
      "MDEF": 20,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 387,
      "MATK": 80,
      "MDEF": 22,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 422,
      "MATK": 87,
      "MDEF": 24,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 457,
      "MATK": 94,
      "MDEF": 27,
      "Magic Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 492,
      "MATK": 101,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 11
    },
    "total": {
      "HP": 492,
      "MATK": 101,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "HP": 150
    },
    {
      "grade": 3,
      "MATK": 40
    },
    {
      "grade": 4,
      "HP": 200
    },
    {
      "grade": 5,
      "MATK": 52
    },
    {
      "grade": 6,
      "HP": 251
    },
    {
      "grade": 7,
      "MATK": 63
    },
    {
      "grade": 8,
      "HP": 301
    },
    {
      "grade": 9,
      "MATK": 74
    },
    {
      "grade": 10,
      "HP": 351
    },
    {
      "grade": 11,
      "MATK": 78
    }
  ]
};;;;;;;;
