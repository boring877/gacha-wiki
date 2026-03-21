// Character data: possessed-by-the-power-of-high-cut-black-knight
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "possessed-by-the-power-of-high-cut-black-knight",
  "name": "Possessed by the Power of High-Cut: Black Knight",
  "displayName": "Possessed by the Power of High-Cut: Black Knight",
  "baseName": "Black Knight",
  "title": "Possessed by the Power of High-Cut",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 400,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Black Knight",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "172cm",
    "bust": "120cm (N Cup)",
    "waist": "68cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "渦井ゆきの",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2162
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shikime Purification",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Type Damage Taken UP for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Type Damage Taken UP for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Type Damage Taken UP for 8 seconds and Block-23 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "100% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+6",
      "lvl1": "100% + 100",
      "lvl90": "100% + 88",
      "effects": [
        "Magic Type Damage Taken + Lv3",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Water Gate Blessing",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 15 seconds , when team has3 when10 Magic Type ATK UP",
      "descriptionLv1": "Applies Accuracy 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 15 seconds , when team has3 when10 Magic Type ATK UP",
      "descriptionLv90": "Applies Accuracy 18 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 15 seconds , when team has3 when10 Magic Type ATK UP",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv3",
        "Hit-Based Damage + Lv3",
        "Magic Type ATK + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "Hit-Based Damage + Lv3",
          "value": 30,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 350.0
        },
        {
          "name": "Magic Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Divine Festival Purification",
      "icon": "skill001/skill0022_1",
      "description": "Applies HP RegenerationUP(LV 1) to all allies for 8 seconds and Debuff ResistanceUP(LV 1) for 8 seconds , 8 Mind Type Damage Taken DOWN(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv1",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type Damage Taken Reduction Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Shikime Purification",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Type Damage Taken UP for 8 seconds and Block-11 DOWN for 8 seconds",
      "effect": "100% + 100",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Water Gate Blessing",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 15 seconds , when team has3 when10 Magic Type ATK UP",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Lv3",
          "value": 30,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Magic Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Divine Festival Purification",
      "icon": "skill001/skill0022_1",
      "description": "Applies HP RegenerationUP(LV 1) to all allies for 8 seconds and Debuff ResistanceUP(LV 1) for 8 seconds , 8 Mind Type Damage Taken DOWN(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv1",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type Damage Taken Reduction Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Divine Festival Purification",
      "icon": "skill001/skill0022_2",
      "description": "Applies HP RegenerationUP(LV 2) to all allies for 8 seconds and Debuff ResistanceUP(LV 2) for 8 seconds , 8 Mind Type Damage Taken DOWN(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 7,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv2",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type Damage Taken Reduction Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Received +, Max HP +",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+10%), Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Action Speed +, Damage UP(Cannot be Cleansed)",
      "icon": "skill001/skill1005",
      "effect": "Action Speed + (+10), Damage UP(Cannot be Cleansed) (+20%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Damage UP(Cannot be Cleansed)",
          "value": 20,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Possessed by the Power of High-Cut: Black Knight",
  "id": 2162,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 3103,
    "ATK": 129,
    "MATK": 215,
    "DEF": 20,
    "MDEF": 29
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "possessed-by-the-power-of-high-cut-black-knight"
};

export const stats = {
  "id": "possessed-by-the-power-of-high-cut-black-knight",
  "characterId": 2162,
  "name": "【Possessed by the Power of High-Cut】Black Knight",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 3103,
      "lv90": 15518
    },
    "atk": {
      "base": 129,
      "lv90": 645
    },
    "matk": {
      "base": 215,
      "lv90": 1075
    },
    "def": {
      "base": 20,
      "lv90": 45
    },
    "mdef": {
      "base": 29,
      "lv90": 55
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 155,
      "lv90": 542
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
      "base": 61,
      "lv90": 61
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
      "HP": 931,
      "MATK": 65,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1071,
      "MATK": 74,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1257,
      "MATK": 87,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1397,
      "MATK": 97,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2639,
      "MATK": 183,
      "DEF": 5,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 7295,
      "MATK": 506,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MP Cost Down": 3
    },
    "gp3": {
      "HP": 500,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 500,
      "MP Cost Down": 5
    },
    "gp5": {
      "HP": 800,
      "MP Cost Down": 5
    },
    "gp6": {
      "HP": 800,
      "MP Cost Down": 6
    },
    "gp7": {
      "HP": 1100,
      "MP Cost Down": 6
    },
    "gp8": {
      "HP": 1100,
      "MP Cost Down": 7
    },
    "gp9": {
      "HP": 1400,
      "MP Cost Down": 7
    },
    "gp10": {
      "HP": 1400,
      "MP Cost Down": 8
    },
    "total": {
      "HP": 1400,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 327,
      "MATK": 23,
      "MDEF": 2,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 392,
      "MATK": 27,
      "MDEF": 2,
      "Magic Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 457,
      "MATK": 32,
      "MDEF": 2,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 523,
      "MATK": 36,
      "MDEF": 3,
      "Magic Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 588,
      "MATK": 41,
      "MDEF": 3,
      "Magic Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 653,
      "MATK": 45,
      "MDEF": 3,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 719,
      "MATK": 50,
      "MDEF": 4,
      "Magic Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 784,
      "MATK": 54,
      "MDEF": 4,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 849,
      "MATK": 59,
      "MDEF": 4,
      "Magic Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 915,
      "MATK": 63,
      "MDEF": 5,
      "Magic Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 915,
      "MATK": 63,
      "MDEF": 5,
      "Magic Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
