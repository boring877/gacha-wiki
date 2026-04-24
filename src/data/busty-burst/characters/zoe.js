// Character data: zoe
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "zoe",
  "name": "Zoe",
  "displayName": "Zoe",
  "baseName": "Zoe",
  "title": null,
  "rarity": "SR",
  "element": "Dark",
  "role": "Tank",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 200,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Zoe",
  "introduction": "Front Row、Magical、Tank",
  "profile": {
    "height": "168cm",
    "bust": "103cm (J Cup)",
    "waist": "62cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "三角蛍",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2024
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Dark vortex!",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 2 nearest enemies and inflicts Physical Attack -9%-20 DOWN for 10 seconds and Magic Attack -9%-20 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the 2 nearest enemies and inflicts Physical Attack -9%-20 DOWN for 10 seconds and Magic Attack -9%-20 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the 2 nearest enemies and inflicts Physical Attack -9%-2000 DOWN for 10 seconds and Magic Attack -9%-20 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "114% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+7",
      "lvl1": "114% + 80",
      "lvl90": "114% + -98",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Grant me an unbreakable soul!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance 70%UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv1": "Applies Debuff Resistance 70%UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv90": "Applies Debuff Resistance 70%UP to self for 12 seconds and Block 18 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv4",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv4",
          "value": 0,
          "type": "percent",
          "duration": 12
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
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Fear Lv 1 for 3 seconds and Confusion for 6 seconds",
      "effect": "700% + 826",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Fear Lv 2 for 3 seconds and Confusion for 6 seconds",
      "effect": "840% + 952",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Fear Lv 3 for 3 seconds and Confusion for 6 seconds",
      "effect": "944% + 1045",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv3",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Fear Lv 4 for 3 seconds and Confusion for 6 seconds",
      "effect": "1015% + 1121",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv4",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Fear Lv 5 for 3 seconds and Confusion for 6 seconds",
      "effect": "1085% + 1237",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv5",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Block+ (+15)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Zoe",
  "id": 2024,
  "rarity": "SR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 4210,
    "ATK": 163,
    "MATK": 271,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "zoe"
};

export const stats = {
  "id": "zoe",
  "characterId": 2024,
  "name": "Zoe",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 4210,
      "lv90": 21052
    },
    "atk": {
      "base": 163,
      "lv90": 815
    },
    "matk": {
      "base": 271,
      "lv90": 1357
    },
    "def": {
      "base": 7,
      "lv90": 14
    },
    "mdef": {
      "base": 18,
      "lv90": 36
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 22,
      "lv90": 35
    },
    "magicCrit": {
      "base": 37,
      "lv90": 59
    },
    "hpRegen": {
      "base": 210,
      "lv90": 736
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 79,
      "lv90": 79
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
      "HP": 1263,
      "MATK": 81,
      "Block": 12,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 1453,
      "MATK": 94,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1705,
      "MATK": 110,
      "Block": 16,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1895,
      "MATK": 122,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 3326,
      "MATK": 214,
      "DEF": 1,
      "MDEF": 5,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 9642,
      "MATK": 621,
      "Block": 60,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 1,
      "MDEF": 5,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 2
    },
    "gp2": {
      "HP": 200,
      "Block": 2
    },
    "gp3": {
      "HP": 200,
      "Block": 5
    },
    "gp4": {
      "HP": 500,
      "Block": 5
    },
    "gp5": {
      "HP": 500,
      "Block": 7
    },
    "gp6": {
      "HP": 800,
      "Block": 7
    },
    "gp7": {
      "HP": 800,
      "Block": 9
    },
    "gp8": {
      "HP": 1100,
      "Block": 9
    },
    "gp9": {
      "HP": 1100,
      "Block": 11
    },
    "gp10": {
      "HP": 1400,
      "Block": 11
    },
    "total": {
      "HP": 1400,
      "Block": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 443,
      "MATK": 29,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 532,
      "MATK": 34,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 13
    },
    "g3": {
      "HP": 621,
      "MATK": 40,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 709,
      "MATK": 46,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 17
    },
    "g5": {
      "HP": 798,
      "MATK": 51,
      "MDEF": 1,
      "Magic Crit": 1,
      "MP Charge": 7
    },
    "g6": {
      "HP": 886,
      "MATK": 57,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 975,
      "MATK": 63,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 23
    },
    "g8": {
      "HP": 1064,
      "MATK": 69,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1152,
      "MATK": 74,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 27
    },
    "g10": {
      "HP": 1241,
      "MATK": 80,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 10
    },
    "total": {
      "HP": 1241,
      "MATK": 80,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP Regen": 18
    },
    {
      "grade": 2,
      "Magic Crit": 1
    },
    {
      "grade": 3,
      "HP Regen": 25
    },
    {
      "grade": 4,
      "Magic Crit": 2
    },
    {
      "grade": 5,
      "HP Regen": 32
    },
    {
      "grade": 6,
      "Magic Crit": 2
    },
    {
      "grade": 7,
      "HP Regen": 39
    },
    {
      "grade": 8,
      "Magic Crit": 3
    },
    {
      "grade": 9,
      "HP Regen": 46
    },
    {
      "grade": 10,
      "Magic Crit": 3
    },
    {
      "grade": 11,
      "HP Regen": 51
    }
  ]
};;;;;;;;
