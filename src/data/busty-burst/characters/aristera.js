// Character data: aristera
// Auto-generated from game data

export const info = {
  "slug": "aristera",
  "name": "Aristera",
  "displayName": "Aristera",
  "baseName": "Aristera",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Disrupt"
  ],
  "image": "Aristera",
  "introduction": "Front RowMagicalAttacker",
  "profile": {
    "height": "165cm",
    "bust": "96cm (H Cup)",
    "waist": "60cm",
    "hips": "88cm"
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
  "characterId": 2010
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I want to make you feel even better ",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the enemy with the highest Magical ATK",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Magical ATK",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Magical ATK",
      "target": "Highest Mag ATK Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "270% + 100",
      "lvl90": "270% + 1880",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "As you like it♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "target": "Highest Mag ATK Enemy",
      "castTime": 1.08,
      "damageScaling": "216% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "216% + 90",
      "lvl90": null,
      "effects": [
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Seductive Bounce♪",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1035% + 711",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Seductive Bounce♪",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1242% + 802",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Seductive Bounce♪",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1400% + 892",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "Seductive Bounce♪",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1502% + 952",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Seductive Bounce♪",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1605% + 1032",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Defense+",
      "icon": "skill001/skill1002",
      "description": "Gain Magic Defense UP (Small)",
      "effect": "Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat",
          "gameText": "Magic Defense UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Small)",
      "effect": "Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Magic Attack UP (Small)"
        }
      ]
    }
  ],
  "name": "Aristera",
  "id": 2010,
  "rarity": "R",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1452,
    "ATK": 126,
    "MATK": 210,
    "DEF": 79,
    "MDEF": 199
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "aristera"
};

export const stats = {
  "id": "aristera",
  "characterId": 2010,
  "name": "Aristera",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1452,
      "lv90": 7260
    },
    "atk": {
      "base": 126,
      "lv90": 630
    },
    "matk": {
      "base": 210,
      "lv90": 1051
    },
    "def": {
      "base": 79,
      "lv90": 158
    },
    "mdef": {
      "base": 199,
      "lv90": 398
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
      "base": 167,
      "lv90": 267
    },
    "magicCrit": {
      "base": 278,
      "lv90": 445
    },
    "hpRegen": {
      "base": 72,
      "lv90": 253
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
    },
    "mpCharge": {
      "base": 53,
      "lv90": 53
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
      "HP": 436,
      "MATK": 63,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 501,
      "MATK": 73,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 588,
      "MATK": 85,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 653,
      "MATK": 95,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1060,
      "MATK": 154,
      "DEF": 13,
      "MDEF": 60,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3238,
      "MATK": 470,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 13,
      "MDEF": 60,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "Accuracy": 1
    },
    "gp2": {
      "MATK": 20,
      "Accuracy": 1
    },
    "gp3": {
      "MATK": 20,
      "Accuracy": 3
    },
    "gp4": {
      "MATK": 60,
      "Accuracy": 3
    },
    "gp5": {
      "MATK": 60,
      "Accuracy": 5
    },
    "gp6": {
      "MATK": 100,
      "Accuracy": 5
    },
    "gp7": {
      "MATK": 100,
      "Accuracy": 7
    },
    "gp8": {
      "MATK": 140,
      "Accuracy": 7
    },
    "gp9": {
      "MATK": 140,
      "Accuracy": 9
    },
    "gp10": {
      "MATK": 180,
      "Accuracy": 9
    },
    "total": {
      "MATK": 180,
      "Accuracy": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "MATK": 22,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 183,
      "MATK": 27,
      "MDEF": 11,
      "Magic Crit": 7,
      "Block": 14
    },
    "g3": {
      "HP": 214,
      "MATK": 31,
      "MDEF": 13,
      "Magic Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 245,
      "MATK": 35,
      "MDEF": 14,
      "Magic Crit": 9,
      "Block": 19
    },
    "g5": {
      "HP": 275,
      "MATK": 40,
      "MDEF": 16,
      "Magic Crit": 11,
      "MP Charge": 4
    },
    "g6": {
      "HP": 306,
      "MATK": 44,
      "MDEF": 18,
      "Magic Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 336,
      "MATK": 49,
      "MDEF": 20,
      "Magic Crit": 13,
      "Block": 26
    },
    "g8": {
      "HP": 367,
      "MATK": 53,
      "MDEF": 22,
      "Magic Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 397,
      "MATK": 58,
      "MDEF": 23,
      "Magic Crit": 15,
      "Block": 31
    },
    "g10": {
      "HP": 428,
      "MATK": 62,
      "MDEF": 25,
      "Magic Crit": 16,
      "MP Charge": 7
    },
    "total": {
      "HP": 428,
      "MATK": 62,
      "MDEF": 25,
      "Magic Crit": 16,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MDEF": 10
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MDEF": 13
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MDEF": 17
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MDEF": 21
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MDEF": 25
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MDEF": 28
    }
  ]
};;;
