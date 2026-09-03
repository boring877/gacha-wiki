// Character data: xevia
// Auto-generated from game data

export const info = {
  "slug": "xevia",
  "name": "Xevia",
  "displayName": "Xevia",
  "baseName": "Xevia",
  "title": null,
  "rarity": "R",
  "element": "Wind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 220,
  "weaponType": "Slash",
  "skillTypes": [
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "image": "Xevia",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "168cm",
    "bust": "96cm (G Cup)",
    "waist": "60cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "有賀桃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2015
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Double Strike",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "180% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+11",
      "lvl1": "180% + 150",
      "lvl90": "180% + 1129",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Instinct",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 15%+30 UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 15%+30 UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 15%+480 UP to self for 12 seconds and Block 18 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 5.0
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.1
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "700% + 400",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "840% + 500",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "950% + 550",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "1030% + 580",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "1100% + 600",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Attack UP (Small)",
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Physical Attack UP (Small)"
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
  "name": "Xevia",
  "id": 2015,
  "rarity": "R",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 181,
    "MATK": 108,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "xevia"
};

export const stats = {
  "id": "xevia",
  "characterId": 2015,
  "name": "Xevia",
  "rarity": "R",
  "element": "風",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "hp": {
      "base": 2313,
      "lv90": 11566
    },
    "atk": {
      "base": 181,
      "lv90": 905
    },
    "matk": {
      "base": 108,
      "lv90": 542
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
      "base": 60,
      "lv90": 180
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
      "base": 115,
      "lv90": 404
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
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
      "HP": 694,
      "ATK": 40,
      "Block": 18,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 798,
      "ATK": 46,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 937,
      "ATK": 54,
      "Block": 24,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1041,
      "ATK": 60,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1862,
      "ATK": 116,
      "DEF": 35,
      "MDEF": 8,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5332,
      "ATK": 316,
      "Block": 90,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 35,
      "MDEF": 8,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 20
    },
    "gp2": {
      "ATK": 20,
      "Block": 1
    },
    "gp3": {
      "ATK": 60,
      "Block": 1
    },
    "gp4": {
      "ATK": 60,
      "Block": 3
    },
    "gp5": {
      "ATK": 100,
      "Block": 3
    },
    "gp6": {
      "ATK": 100,
      "Block": 5
    },
    "gp7": {
      "ATK": 140,
      "Block": 5
    },
    "gp8": {
      "ATK": 140,
      "Block": 7
    },
    "gp9": {
      "ATK": 180,
      "Block": 7
    },
    "gp10": {
      "ATK": 180,
      "Block": 9
    },
    "total": {
      "ATK": 180,
      "Block": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 244,
      "ATK": 14,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 292,
      "ATK": 17,
      "Phys Crit": 10,
      "Block": 19
    },
    "g3": {
      "HP": 341,
      "ATK": 20,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 390,
      "ATK": 23,
      "Phys Crit": 13,
      "Block": 25
    },
    "g5": {
      "HP": 438,
      "ATK": 25,
      "Phys Crit": 15,
      "MP Charge": 4
    },
    "g6": {
      "HP": 487,
      "ATK": 28,
      "Phys Crit": 16,
      "Accuracy": 18
    },
    "g7": {
      "HP": 536,
      "ATK": 31,
      "Phys Crit": 18,
      "Block": 35
    },
    "g8": {
      "HP": 584,
      "ATK": 34,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 633,
      "ATK": 37,
      "Phys Crit": 21,
      "Block": 41
    },
    "g10": {
      "HP": 682,
      "ATK": 39,
      "Phys Crit": 23,
      "MP Charge": 7
    },
    "total": {
      "HP": 682,
      "ATK": 39,
      "Phys Crit": 23,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 6
    },
    {
      "grade": 2,
      "HP": 208
    },
    {
      "grade": 3,
      "DEF": 8
    },
    {
      "grade": 4,
      "HP": 278
    },
    {
      "grade": 5,
      "DEF": 10
    },
    {
      "grade": 6,
      "HP": 347
    },
    {
      "grade": 7,
      "DEF": 12
    },
    {
      "grade": 8,
      "HP": 416
    },
    {
      "grade": 9,
      "DEF": 15
    },
    {
      "grade": 10,
      "HP": 486
    },
    {
      "grade": 11,
      "DEF": 17
    }
  ]
};;;
