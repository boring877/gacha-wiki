// Character data: eskelda
// Auto-generated from game data

export const info = {
  "slug": "eskelda",
  "name": "Eskelda",
  "displayName": "Eskelda",
  "baseName": "Eskelda",
  "title": null,
  "rarity": "R",
  "element": "Water",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 240,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Eskelda",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "165cm",
    "bust": "98cm (I Cup)",
    "waist": "59cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "杉原茉莉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2028
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I’m very busy ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "280% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "280% + 110",
      "lvl90": "280% + 1890",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Fall♪",
      "icon": "skill001/skill0019",
      "description": "Applies Block 11 UP to self for 10 seconds",
      "descriptionLv1": "Applies Block 11 UP to self for 10 seconds",
      "descriptionLv90": "Applies Block 23 UP to self for 10 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "225% + 404",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 2) for 10 seconds",
      "effect": "280% + 509",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -12,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 3) for 10 seconds",
      "effect": "325% + 553",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 4) for 10 seconds",
      "effect": "358% + 568",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -14,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 5) for 10 seconds",
      "effect": "380% + 602",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -15,
          "type": "flat",
          "duration": 10
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
      "name": "Paralysis Resistance LvMax",
      "icon": "skill001/skill1002",
      "description": "Gain Paralysis Resistance UP",
      "effect": "Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent",
          "gameText": "Paralysis Resistance UP"
        }
      ]
    }
  ],
  "name": "Eskelda",
  "id": 2028,
  "rarity": "R",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1966,
    "ATK": 208,
    "MATK": 124,
    "DEF": 199,
    "MDEF": 79
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "eskelda"
};

export const stats = {
  "id": "eskelda",
  "characterId": 2028,
  "name": "Eskelda",
  "rarity": "R",
  "element": "水",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1966,
      "lv90": 9831
    },
    "atk": {
      "base": 208,
      "lv90": 1040
    },
    "matk": {
      "base": 124,
      "lv90": 623
    },
    "def": {
      "base": 199,
      "lv90": 398
    },
    "mdef": {
      "base": 79,
      "lv90": 158
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
      "base": 278,
      "lv90": 445
    },
    "magicCrit": {
      "base": 167,
      "lv90": 267
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
      "base": 70,
      "lv90": 70
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
      "MATK": 62,
      "Block": 12,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 745,
      "MATK": 72,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 874,
      "MATK": 84,
      "Block": 16,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 972,
      "MATK": 94,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 1503,
      "ATK": 121,
      "DEF": 61,
      "MDEF": 13,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 4742,
      "MATK": 312,
      "Block": 60,
      "MP Charge": 15,
      "Accuracy": 30,
      "ATK": 121,
      "DEF": 61,
      "MDEF": 13,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 150
    },
    "gp2": {
      "HP": 150,
      "Block": 1
    },
    "gp3": {
      "HP": 350,
      "Block": 1
    },
    "gp4": {
      "HP": 350,
      "Block": 3
    },
    "gp5": {
      "HP": 550,
      "Block": 3
    },
    "gp6": {
      "HP": 550,
      "Block": 5
    },
    "gp7": {
      "HP": 750,
      "Block": 5
    },
    "gp8": {
      "HP": 750,
      "Block": 7
    },
    "gp9": {
      "HP": 950,
      "Block": 7
    },
    "gp10": {
      "HP": 950,
      "Block": 9
    },
    "total": {
      "HP": 950,
      "Block": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 227,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 26,
      "Phys Crit": 7,
      "Block": 13
    },
    "g3": {
      "HP": 318,
      "ATK": 31,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 35,
      "Phys Crit": 9,
      "Block": 17
    },
    "g5": {
      "HP": 409,
      "ATK": 39,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 455,
      "ATK": 44,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 48,
      "Phys Crit": 13,
      "Block": 23
    },
    "g8": {
      "HP": 545,
      "ATK": 53,
      "Phys Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 57,
      "Phys Crit": 15,
      "Block": 27
    },
    "g10": {
      "HP": 636,
      "ATK": 61,
      "Phys Crit": 16,
      "MP Charge": 9
    },
    "total": {
      "HP": 636,
      "ATK": 61,
      "Phys Crit": 16,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Regen": 4
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "MP Regen": 6
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MP Regen": 8
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "MP Regen": 9
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "MP Regen": 11
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "MP Regen": 12
    }
  ]
};;;
