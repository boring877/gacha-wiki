// Character data: festival-dress-up-natasha
// Merged from info/skills/stats files

export const info = {
  "slug": "festival-dress-up-natasha",
  "name": "[Festival Dress-Up] Natasha",
  "displayName": "Festival Dress-Up Natasha",
  "baseName": "Natasha",
  "title": "Festival Dress-Up",
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 180,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Festive_Costume_Natasha",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "153cm",
    "bust": "96cm (I Cup)",
    "waist": "57cm",
    "hips": "83cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u306d\u3076\u305d\u304f",
      "romanized": "Nebusoku"
    },
    "voice": {
      "japanese": "\u59eb\u5ddd\u3042\u3044\u308a",
      "romanized": "Himekawa Airi"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Vern Founding Festival (Dec 4 - Dec 18)"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "The gown feels so light!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "240% ATK",
      "baseDamage": "+125",
      "levelGrowth": "+20",
      "lvl1": "240% + 125",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "I must keep it perfectly clean.",
      "icon": "skill001/skill0019",
      "description": "Applies Block 13 UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Block 13 UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Block 26 UP to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv5",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.15
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The princess stands for justice!",
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
      "name": "The princess stands for justice!",
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
      "name": "The princess stands for justice!",
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
      "name": "The princess stands for justice!",
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
      "name": "The princess stands for justice!",
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
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Healing Received +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Festival Dress-Up: Natasha",
  "id": 2070,
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1781,
    "ATK": 152,
    "MATK": 91,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "festival-dress-up-natasha"
};

export const stats = {
  "id": "festival-dress-up-natasha",
  "characterId": 2070,
  "name": "【Festival Dress-Up】Natasha",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 1781,
      "lv90": 8906
    },
    "atk": {
      "base": 152,
      "lv90": 761
    },
    "matk": {
      "base": 91,
      "lv90": 456
    },
    "def": {
      "base": 326,
      "lv90": 652
    },
    "mdef": {
      "base": 130,
      "lv90": 260
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 89,
      "lv90": 311
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
      "base": 65,
      "lv90": 65
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
      "HP": 680,
      "ATK": 49,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 782,
      "ATK": 56,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 918,
      "ATK": 66,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1020,
      "ATK": 73,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1379,
      "ATK": 121,
      "DEF": 90,
      "MDEF": 24,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4779,
      "ATK": 365,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 90,
      "MDEF": 24,
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
      "HP": 188,
      "ATK": 16,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 225,
      "ATK": 19,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 263,
      "ATK": 22,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 300,
      "ATK": 26,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 338,
      "ATK": 29,
      "Phys Crit": 4,
      "MP Charge": 6
    },
    "g6": {
      "HP": 375,
      "ATK": 32,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 413,
      "ATK": 35,
      "Phys Crit": 5,
      "Block": 32
    },
    "g8": {
      "HP": 450,
      "ATK": 39,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 488,
      "ATK": 42,
      "Phys Crit": 6,
      "Block": 38
    },
    "g10": {
      "HP": 525,
      "ATK": 45,
      "Phys Crit": 6,
      "MP Charge": 9
    },
    "total": {
      "HP": 525,
      "ATK": 45,
      "Phys Crit": 6,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 13
    },
    {
      "grade": 2,
      "DEF": 17
    },
    {
      "grade": 3,
      "ATK": 18
    },
    {
      "grade": 4,
      "DEF": 22
    },
    {
      "grade": 5,
      "ATK": 23
    },
    {
      "grade": 6,
      "DEF": 28
    },
    {
      "grade": 7,
      "ATK": 28
    },
    {
      "grade": 8,
      "DEF": 34
    },
    {
      "grade": 9,
      "ATK": 33
    },
    {
      "grade": 10,
      "DEF": 39
    },
    {
      "grade": 11,
      "ATK": 35
    }
  ]
};;;;;;;;
