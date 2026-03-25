// Character data: lilirara
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lilirara",
  "name": "Lilirara",
  "displayName": "Lilirara",
  "baseName": "Lilirara",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 185,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Lilirara",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "156cm",
    "bust": "93cm (I Cup)",
    "waist": "59cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "青永HERI",
      "romanized": ""
    },
    "voice": {
      "japanese": "明里芽依",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2118
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Guruguru meow!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -11%-205 DOWN for 6 seconds and Magic Attack -11%-205 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "140% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "140% + 150",
      "lvl90": "140% + -28",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Speed boost meow!",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 20%UP to self for 12 seconds and Block 13 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "descriptionLv1": "Applies Action Speed 20%UP to self for 12 seconds and Block 13 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "descriptionLv90": "Applies Action Speed 20%UP to self for 12 seconds and Block 26 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "target": "Self",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5",
        "Block+ Lv5",
        "Debuff Resistance Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.15
        },
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lilirala Limit Burst!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds , damageselfrestore HP6%",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lilirala Limit Burst!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 seconds and Accuracy DOWN(LV 2) for 10 seconds , damageselfrestore HP6%",
      "effect": "540% + 550",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -23,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lilirala Limit Burst!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 3) for 10 seconds and Accuracy DOWN(LV 3) for 10 seconds , damageselfrestore HP6%",
      "effect": "610% + 650",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -26,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lilirala Limit Burst!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 4) for 10 seconds and Accuracy DOWN(LV 4) for 10 seconds , damageselfrestore HP6%",
      "effect": "660% + 750",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -28,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lilirala Limit Burst!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 5) for 10 seconds and Accuracy DOWN(LV 5) for 10 seconds , damageselfrestore HP6%",
      "effect": "700% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lilirara",
  "id": 2118,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 3623,
    "ATK": 181,
    "MATK": 108,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "lilirara"
};

export const stats = {
  "id": "lilirara",
  "characterId": 2118,
  "name": "Lilirara",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 3623,
      "lv90": 18116
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
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 60,
      "lv90": 170
    },
    "physCrit": {
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 181,
      "lv90": 633
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 60,
      "lv90": 60
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
      "HP": 1087,
      "ATK": 54,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1250,
      "ATK": 63,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1467,
      "ATK": 73,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1631,
      "ATK": 82,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 3427,
      "ATK": 180,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 8862,
      "ATK": 452,
      "Block": 83,
      "MP Charge": 11,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 750,
      "ATK": 40
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 1200,
      "ATK": 120
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1650,
      "ATK": 200
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 2100,
      "ATK": 280
    },
    "gp10": {
      "HP": 2100,
      "ATK": 360
    },
    "total": {
      "HP": 2100,
      "ATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 381,
      "ATK": 19,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 458,
      "ATK": 23,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 534,
      "ATK": 27,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 610,
      "ATK": 31,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 687,
      "ATK": 34,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 763,
      "ATK": 38,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 839,
      "ATK": 42,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 915,
      "ATK": 46,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 992,
      "ATK": 50,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 1068,
      "ATK": 53,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 1068,
      "ATK": 53,
      "Phys Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 302
    },
    {
      "grade": 2,
      "ATK": 16
    },
    {
      "grade": 3,
      "HP": 423
    },
    {
      "grade": 4,
      "ATK": 22
    },
    {
      "grade": 5,
      "HP": 544
    },
    {
      "grade": 6,
      "ATK": 27
    },
    {
      "grade": 7,
      "HP": 664
    },
    {
      "grade": 8,
      "ATK": 33
    },
    {
      "grade": 9,
      "HP": 785
    },
    {
      "grade": 10,
      "ATK": 38
    },
    {
      "grade": 11,
      "HP": 824
    }
  ]
};;;;;;;;
