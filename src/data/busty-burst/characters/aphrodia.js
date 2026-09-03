// Character data: aphrodia
// Auto-generated from game data

export const info = {
  "slug": "aphrodia",
  "name": "Aphrodia",
  "displayName": "Aphrodia",
  "baseName": "Aphrodia",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Very Slow",
  "range": 520,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Heal"
  ],
  "image": "Aphrodia",
  "introduction": "Back RowPhysicalSupport",
  "profile": {
    "height": "168cm",
    "bust": "107cm (L Cup)",
    "waist": "63cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "香澄りょう",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2007
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Queen’s Rejection",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 20 UP to all allies for 8 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 20 UP to all allies for 8 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 20 UP to all allies for 8 seconds",
      "target": "All Allies",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv1",
          "value": 20,
          "type": "percent",
          "duration": 8,
          "levelGrowth": 1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Queen’s Reward",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 10%+20 UP to all allies for 8 seconds",
      "descriptionLv1": "Applies Physical Attack 10%+20 UP to all allies for 8 seconds",
      "descriptionLv90": "Applies Physical Attack 10%+110 UP to all allies for 8 seconds",
      "target": "All Allies",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv1",
          "value": 20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 1.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The Continent’s Shining Treasure",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield(LV 1) for 10 seconds",
      "effect": "2400% + 309",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "The Continent’s Shining Treasure",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield(LV 2) for 10 seconds",
      "effect": "2760% + 339",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "The Continent’s Shining Treasure",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield(LV 3) for 10 seconds",
      "effect": "3000% + 380",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The Continent’s Shining Treasure",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield(LV 4) for 10 seconds",
      "effect": "3240% + 414",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "The Continent’s Shining Treasure",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield(LV 5) for 10 seconds",
      "effect": "3360% + 498",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1001",
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
      "name": "Healing Amount +",
      "icon": "skill001/skill1002",
      "description": "Gain Healing Amount UP (Small)",
      "effect": "Healing Amount + (+10%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 10,
          "type": "percent",
          "gameText": "Healing Amount UP (Small)"
        }
      ]
    }
  ],
  "name": "Aphrodia",
  "id": 2007,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal"
  ],
  "baseStats": {
    "HP": 1957,
    "ATK": 275,
    "MATK": 165,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "aphrodia"
};

export const stats = {
  "id": "aphrodia",
  "characterId": 2007,
  "name": "Aphrodia",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal"
  ],
  "baseStats": {
    "hp": {
      "base": 1957,
      "lv90": 9787
    },
    "atk": {
      "base": 275,
      "lv90": 1375
    },
    "matk": {
      "base": 165,
      "lv90": 825
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
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 109,
      "lv90": 174
    },
    "hpRegen": {
      "base": 97,
      "lv90": 341
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 72,
      "lv90": 72
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
      "HP": 587,
      "ATK": 83,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 675,
      "ATK": 95,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 793,
      "ATK": 111,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 881,
      "ATK": 124,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1429,
      "ATK": 201,
      "DEF": 35,
      "MDEF": 8,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4365,
      "ATK": 614,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 35,
      "MDEF": 8,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 1
    },
    "gp2": {
      "Heal Pwr": 5,
      "MP Charge": 1
    },
    "gp3": {
      "Heal Pwr": 5,
      "MP Charge": 3
    },
    "gp4": {
      "Heal Pwr": 15,
      "MP Charge": 3
    },
    "gp5": {
      "Heal Pwr": 15,
      "MP Charge": 5
    },
    "gp6": {
      "Heal Pwr": 25,
      "MP Charge": 5
    },
    "gp7": {
      "Heal Pwr": 25,
      "MP Charge": 7
    },
    "gp8": {
      "Heal Pwr": 35,
      "MP Charge": 7
    },
    "gp9": {
      "Heal Pwr": 35,
      "MP Charge": 9
    },
    "gp10": {
      "Heal Pwr": 45,
      "MP Charge": 9
    },
    "total": {
      "Heal Pwr": 45,
      "MP Charge": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 206,
      "ATK": 29,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 247,
      "ATK": 35,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 288,
      "ATK": 41,
      "Phys Crit": 5,
      "Accuracy": 12
    },
    "g4": {
      "HP": 330,
      "ATK": 46,
      "Phys Crit": 6,
      "Block": 23
    },
    "g5": {
      "HP": 371,
      "ATK": 52,
      "Phys Crit": 7,
      "MP Charge": 6
    },
    "g6": {
      "HP": 412,
      "ATK": 58,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 453,
      "ATK": 64,
      "Phys Crit": 8,
      "Block": 32
    },
    "g8": {
      "HP": 495,
      "ATK": 69,
      "Phys Crit": 9,
      "Accuracy": 21
    },
    "g9": {
      "HP": 536,
      "ATK": 75,
      "Phys Crit": 10,
      "Block": 38
    },
    "g10": {
      "HP": 577,
      "ATK": 81,
      "Phys Crit": 11,
      "MP Charge": 9
    },
    "total": {
      "HP": 577,
      "ATK": 81,
      "Phys Crit": 11,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "DEF": 6
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "DEF": 8
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "DEF": 10
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "DEF": 12
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "DEF": 14
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;
