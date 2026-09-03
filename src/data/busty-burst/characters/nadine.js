// Character data: nadine
// Auto-generated from game data

export const info = {
  "slug": "nadine",
  "name": "Nadine",
  "displayName": "Nadine",
  "baseName": "Nadine",
  "title": null,
  "rarity": "R",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff"
  ],
  "image": "Nadine",
  "introduction": "Back RowMagicalAttacker",
  "profile": {
    "height": "163cm",
    "bust": "111cm (L Cup)",
    "waist": "63cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "御苑生メイ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2018
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Lightning",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest MP and inflicts Burn(HP --80 per second) for 10 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest MP and inflicts Burn(HP --80 per second) for 10 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest MP and inflicts Burn(HP --1070 per second) for 10 seconds",
      "target": "Highest MP Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + -869",
      "effects": [
        "Burn Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -11.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Flame Lightning",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 10%+50 UP to all allies for 10 seconds and Magic Defense 10%+50 UP for 10 seconds",
      "descriptionLv1": "Applies Physical Defense 10%+50 UP to all allies for 10 seconds and Magic Defense 10%+50 UP for 10 seconds",
      "descriptionLv90": "Applies Physical Defense 10%+140 UP to all allies for 10 seconds and Magic Defense 10%+140 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv1",
        "Magic Defense+ Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv1",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Defense+ Lv1",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to all enemies and inflicts Burn(LV 1) for 12 seconds",
      "effect": "450% + 300",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -800,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to all enemies and inflicts Burn(LV 2) for 12 seconds",
      "effect": "630% + 401",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -1000,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to all enemies and inflicts Burn(LV 3) for 12 seconds",
      "effect": "765% + 485",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -1200,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to all enemies and inflicts Burn(LV 4) for 12 seconds",
      "effect": "855% + 576",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -1400,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to all enemies and inflicts Burn(LV 5) for 12 seconds",
      "effect": "900% + 655",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -1500,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
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
    },
    {
      "slot": 2,
      "name": "Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Critical Damage UP (Small)",
      "effect": "Magic Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 59,
          "type": "flat",
          "gameText": "Magic Critical Damage UP (Small)"
        }
      ]
    }
  ],
  "name": "Nadine",
  "id": 2018,
  "rarity": "R",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 167,
    "MATK": 279,
    "DEF": 22,
    "MDEF": 56
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "nadine"
};

export const stats = {
  "id": "nadine",
  "characterId": 2018,
  "name": "Nadine",
  "rarity": "R",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 1964,
      "lv90": 9822
    },
    "atk": {
      "base": 167,
      "lv90": 838
    },
    "matk": {
      "base": 279,
      "lv90": 1397
    },
    "def": {
      "base": 22,
      "lv90": 44
    },
    "mdef": {
      "base": 56,
      "lv90": 112
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
      "base": 60,
      "lv90": 96
    },
    "magicCrit": {
      "base": 100,
      "lv90": 160
    },
    "hpRegen": {
      "base": 98,
      "lv90": 343
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
      "base": 56,
      "lv90": 56
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
      "MATK": 84,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 678,
      "MATK": 96,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "MATK": 113,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 884,
      "MATK": 126,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1434,
      "MATK": 225,
      "DEF": 4,
      "MDEF": 15,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 4381,
      "MATK": 644,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 4,
      "MDEF": 15,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 1
    },
    "gp2": {
      "MATK": 20,
      "MP Charge": 1
    },
    "gp3": {
      "MATK": 20,
      "MP Charge": 3
    },
    "gp4": {
      "MATK": 60,
      "MP Charge": 3
    },
    "gp5": {
      "MATK": 60,
      "MP Charge": 5
    },
    "gp6": {
      "MATK": 100,
      "MP Charge": 5
    },
    "gp7": {
      "MATK": 100,
      "MP Charge": 7
    },
    "gp8": {
      "MATK": 140,
      "MP Charge": 7
    },
    "gp9": {
      "MATK": 140,
      "MP Charge": 9
    },
    "gp10": {
      "MATK": 180,
      "MP Charge": 9
    },
    "total": {
      "MATK": 180,
      "MP Charge": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 207,
      "MATK": 29,
      "MDEF": 3,
      "Magic Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 248,
      "MATK": 35,
      "MDEF": 3,
      "Magic Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 290,
      "MATK": 41,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 331,
      "MATK": 47,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 19
    },
    "g5": {
      "HP": 372,
      "MATK": 53,
      "MDEF": 5,
      "Magic Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 414,
      "MATK": 59,
      "MDEF": 5,
      "Magic Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 455,
      "MATK": 65,
      "MDEF": 6,
      "Magic Crit": 5,
      "Block": 26
    },
    "g8": {
      "HP": 496,
      "MATK": 71,
      "MDEF": 6,
      "Magic Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 538,
      "MATK": 77,
      "MDEF": 7,
      "Magic Crit": 5,
      "Block": 31
    },
    "g10": {
      "HP": 579,
      "MATK": 82,
      "MDEF": 7,
      "Magic Crit": 6,
      "MP Charge": 7
    },
    "total": {
      "HP": 579,
      "MATK": 82,
      "MDEF": 7,
      "Magic Crit": 6,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 4
    },
    {
      "grade": 2,
      "MATK": 25
    },
    {
      "grade": 3,
      "Block": 5
    },
    {
      "grade": 4,
      "MATK": 34
    },
    {
      "grade": 5,
      "Block": 7
    },
    {
      "grade": 6,
      "MATK": 42
    },
    {
      "grade": 7,
      "Block": 8
    },
    {
      "grade": 8,
      "MATK": 50
    },
    {
      "grade": 9,
      "Block": 10
    },
    {
      "grade": 10,
      "MATK": 59
    },
    {
      "grade": 11,
      "Block": 11
    }
  ]
};;;
