// Character data: aysis
// Auto-generated from game data

export const info = {
  "slug": "aysis",
  "name": "Aysis",
  "displayName": "Aysis",
  "baseName": "Aysis",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Aysis",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "169cm",
    "bust": "",
    "waist": "",
    "hips": ""
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "櫻井ありす",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2002
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Edelrant-Style Swordsmanship: Earthstride",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 2 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "160% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+10",
      "lvl1": "160% + 100",
      "lvl90": "160% + 990",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Pride of the Royal Guards",
      "icon": "skill001/skill0019",
      "description": "Applies 7 seconds of Physical Defense 15%+100 UP and 7 seconds of Magic Defense 15%+100 UP to self",
      "descriptionLv1": "Applies 7 seconds of Physical Defense 15%+100 UP and 7 seconds of Magic Defense 15%+100 UP to self",
      "descriptionLv90": "Applies 7 seconds of Physical Defense 15%+190 UP and 7 seconds of Magic Defense 15%+190 UP to self",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 100,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 1.0
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 615",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 2) for 10 seconds",
      "effect": "1450% + 706",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 3) for 10 seconds",
      "effect": "1570% + 818",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 4) for 10 seconds",
      "effect": "1689% + 951",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 5) for 10 seconds",
      "effect": "1750% + 1064",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "description": "Gain Physical Defense UP (Small)",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat",
          "gameText": "Physical Defense UP (Small)"
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
  "name": "Aysis",
  "id": 2002,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 114,
    "MATK": 68,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "aysis"
};

export const stats = {
  "id": "aysis",
  "characterId": 2002,
  "name": "Aysis",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2313,
      "lv90": 11566
    },
    "atk": {
      "base": 114,
      "lv90": 573
    },
    "matk": {
      "base": 68,
      "lv90": 343
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
      "base": 391,
      "lv90": 625
    },
    "magicCrit": {
      "base": 234,
      "lv90": 374
    },
    "hpRegen": {
      "base": 115,
      "lv90": 404
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
    },
    "mpCharge": {
      "base": 40,
      "lv90": 40
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
      "ATK": 34,
      "Block": 18,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 798,
      "ATK": 40,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 937,
      "ATK": 46,
      "Block": 24,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 1041,
      "ATK": 52,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1689,
      "ATK": 84,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 5159,
      "ATK": 256,
      "Block": 90,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 1
    },
    "gp2": {
      "HP": 150,
      "Block": 1
    },
    "gp3": {
      "HP": 150,
      "Block": 3
    },
    "gp4": {
      "HP": 350,
      "Block": 3
    },
    "gp5": {
      "HP": 350,
      "Block": 5
    },
    "gp6": {
      "HP": 550,
      "Block": 5
    },
    "gp7": {
      "HP": 550,
      "Block": 7
    },
    "gp8": {
      "HP": 750,
      "Block": 7
    },
    "gp9": {
      "HP": 750,
      "Block": 9
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
      "HP": 244,
      "ATK": 12,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 292,
      "ATK": 15,
      "Phys Crit": 10,
      "Block": 19
    },
    "g3": {
      "HP": 341,
      "ATK": 17,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 390,
      "ATK": 19,
      "Phys Crit": 13,
      "Block": 25
    },
    "g5": {
      "HP": 438,
      "ATK": 22,
      "Phys Crit": 15,
      "MP Charge": 3
    },
    "g6": {
      "HP": 487,
      "ATK": 24,
      "Phys Crit": 16,
      "Accuracy": 18
    },
    "g7": {
      "HP": 536,
      "ATK": 27,
      "Phys Crit": 18,
      "Block": 35
    },
    "g8": {
      "HP": 584,
      "ATK": 29,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 633,
      "ATK": 31,
      "Phys Crit": 21,
      "Block": 41
    },
    "g10": {
      "HP": 682,
      "ATK": 34,
      "Phys Crit": 23,
      "MP Charge": 5
    },
    "total": {
      "HP": 682,
      "ATK": 34,
      "Phys Crit": 23,
      "MP Charge": 5
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 5
    },
    {
      "grade": 2,
      "Phys Crit": 14
    },
    {
      "grade": 3,
      "Block": 7
    },
    {
      "grade": 4,
      "Phys Crit": 19
    },
    {
      "grade": 5,
      "Block": 9
    },
    {
      "grade": 6,
      "Phys Crit": 23
    },
    {
      "grade": 7,
      "Block": 11
    },
    {
      "grade": 8,
      "Phys Crit": 28
    },
    {
      "grade": 9,
      "Block": 13
    },
    {
      "grade": 10,
      "Phys Crit": 33
    },
    {
      "grade": 11,
      "Block": 15
    }
  ]
};;;
