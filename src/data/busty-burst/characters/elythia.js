// Character data: elythia
// Auto-generated from game data

export const info = {
  "slug": "elythia",
  "name": "Elythia",
  "displayName": "Elythia",
  "baseName": "Elythia",
  "title": null,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Disrupt"
  ],
  "image": "Elythia",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "166cm",
    "bust": "93cm (F Cup)",
    "waist": "55cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "結城ほのか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2017
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thrust",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK",
      "target": "Lowest HP Enemy",
      "castTime": 1.08,
      "damageScaling": "260% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "260% + 100",
      "lvl90": "260% + 1880",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Lionheart",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 5 UP to all allies for 10 seconds and Physical Attack 10%+20 UP for 10 seconds",
      "descriptionLv1": "Applies Accuracy 5 UP to all allies for 10 seconds and Physical Attack 10%+20 UP for 10 seconds",
      "descriptionLv90": "Applies Accuracy 10 UP to all allies for 10 seconds and Physical Attack 10%+110 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv1",
        "Physical Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.05
        },
        {
          "name": "Physical Attack + Lv1",
          "value": 20,
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
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "950% + 811",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1140% + 1092",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1280% + 1212",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1380% + 1252",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1470% + 1292",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "description": "Gain Block UP (Small)",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat",
          "gameText": "Block UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Critical Damage UP (Small)",
      "effect": "Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Small)"
        }
      ]
    }
  ],
  "name": "Elythia",
  "id": 2017,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 210,
    "MATK": 126,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "elythia"
};

export const stats = {
  "id": "elythia",
  "characterId": 2017,
  "name": "Elythia",
  "rarity": "R",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1491,
      "lv90": 7456
    },
    "atk": {
      "base": 210,
      "lv90": 1051
    },
    "matk": {
      "base": 126,
      "lv90": 630
    },
    "def": {
      "base": 117,
      "lv90": 234
    },
    "mdef": {
      "base": 46,
      "lv90": 92
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
      "base": 278,
      "lv90": 445
    },
    "magicCrit": {
      "base": 167,
      "lv90": 267
    },
    "hpRegen": {
      "base": 74,
      "lv90": 260
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
      "HP": 447,
      "ATK": 63,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 515,
      "ATK": 73,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 604,
      "ATK": 85,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 671,
      "ATK": 95,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1089,
      "ATK": 154,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 3326,
      "ATK": 470,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 1
    },
    "gp2": {
      "ATK": 20,
      "MP Cost Down": 1
    },
    "gp3": {
      "ATK": 20,
      "MP Cost Down": 2
    },
    "gp4": {
      "ATK": 60,
      "MP Cost Down": 2
    },
    "gp5": {
      "ATK": 60,
      "MP Cost Down": 3
    },
    "gp6": {
      "ATK": 100,
      "MP Cost Down": 3
    },
    "gp7": {
      "ATK": 100,
      "MP Cost Down": 4
    },
    "gp8": {
      "ATK": 140,
      "MP Cost Down": 4
    },
    "gp9": {
      "ATK": 140,
      "MP Cost Down": 5
    },
    "gp10": {
      "ATK": 180,
      "MP Cost Down": 5
    },
    "total": {
      "ATK": 180,
      "MP Cost Down": 5
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 157,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 188,
      "ATK": 27,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 220,
      "ATK": 31,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 251,
      "ATK": 35,
      "Phys Crit": 9,
      "Block": 23
    },
    "g5": {
      "HP": 283,
      "ATK": 40,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 314,
      "ATK": 44,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 345,
      "ATK": 49,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 377,
      "ATK": 53,
      "Phys Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 408,
      "ATK": 58,
      "Phys Crit": 15,
      "Block": 38
    },
    "g10": {
      "HP": 440,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 9
    },
    "total": {
      "HP": 440,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 18
    },
    {
      "grade": 2,
      "Magic Crit": 4
    },
    {
      "grade": 3,
      "DEF": 25
    },
    {
      "grade": 4,
      "Magic Crit": 5
    },
    {
      "grade": 5,
      "DEF": 32
    },
    {
      "grade": 6,
      "Magic Crit": 7
    },
    {
      "grade": 7,
      "DEF": 39
    },
    {
      "grade": 8,
      "Magic Crit": 8
    },
    {
      "grade": 9,
      "DEF": 46
    },
    {
      "grade": 10,
      "Magic Crit": 9
    },
    {
      "grade": 11,
      "DEF": 51
    }
  ]
};;;
