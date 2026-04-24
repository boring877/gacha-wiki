// Character data: cow-breasted-girl-elaine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "cow-breasted-girl-elaine",
  "name": "Cow-Breasted Girl: Elaine",
  "displayName": "Cow-Breasted Girl: Elaine",
  "baseName": "Elaine",
  "title": "Cow-Breasted Girl",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 180,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Elaine",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "171cm",
    "bust": "121cm (Q Cup)",
    "waist": "62cm",
    "hips": "99cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "柏木逢花",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2176
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Moo Moo UP",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -13 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -13 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -26 DOWN for 6 seconds and Block-23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + 488",
      "effects": [
        "Accuracy - Lv5",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "I can't stop!",
      "icon": "skill001/skill0019",
      "description": "self10%Max HPUP(max30% (max stacking: ) and HP Regeneration 5%+150 for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "self10%Max HPUP(max30% (max stacking: ) and HP Regeneration 5%+150 for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "self10%Max HPUP(max30% (max stacking: ) and HP Regeneration 5%+150 for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Max HP +",
        "HP Regeneration+ Lv3",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Max HP +",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Moo moo Fighting!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 1) for 10 seconds and applies Debuff ResistanceUP(LV 1) to self for 10 seconds , restore 6% of damage dealt as own HP6%HP",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv1",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Moo moo Fighting!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 2) for 10 seconds and applies Debuff ResistanceUP(LV 2) to self for 10 seconds , restore 6% of damage dealt as own HP6%HP",
      "effect": "1440% + 1400",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv2",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Moo moo Fighting!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 3) for 10 seconds and applies Debuff ResistanceUP(LV 3) to self for 10 seconds , restore 6% of damage dealt as own HP6%HP",
      "effect": "1620% + 1550",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv3",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Moo moo Fighting!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 4) for 10 seconds and applies Debuff ResistanceUP(LV 4) to self for 10 seconds , restore 6% of damage dealt as own HP6%HP",
      "effect": "1739% + 1700",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv4",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Moo moo Fighting!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 5) for 10 seconds and applies Debuff ResistanceUP(LV 5) to self for 10 seconds , restore 6% of damage dealt as own HP6%HP",
      "effect": "1800% + 1800",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv5",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Received +, Max HP +",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+30%), Max HP + (0)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 0,
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
  "name": "Cow-Breasted Girl: Elaine",
  "id": 2176,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 3843,
    "ATK": 176,
    "MATK": 105,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.89"
  },
  "slug": "cow-breasted-girl-elaine"
};

export const stats = {
  "id": "cow-breasted-girl-elaine",
  "characterId": 2176,
  "name": "【Cow-Breasted Girl】Elaine",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 3843,
      "lv90": 19215
    },
    "atk": {
      "base": 176,
      "lv90": 880
    },
    "matk": {
      "base": 105,
      "lv90": 527
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 192,
      "lv90": 672
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
      "HP": 1153,
      "ATK": 53,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1326,
      "ATK": 61,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1556,
      "ATK": 71,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1729,
      "ATK": 79,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 3555,
      "ATK": 163,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 9319,
      "ATK": 427,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "DEF": 20
    },
    "gp2": {
      "DEF": 20,
      "MDEF": 20
    },
    "gp3": {
      "DEF": 50,
      "MDEF": 20
    },
    "gp4": {
      "DEF": 50,
      "MDEF": 50
    },
    "gp5": {
      "DEF": 80,
      "MDEF": 50
    },
    "gp6": {
      "DEF": 80,
      "MDEF": 80
    },
    "gp7": {
      "DEF": 110,
      "MDEF": 80
    },
    "gp8": {
      "DEF": 110,
      "MDEF": 110
    },
    "gp9": {
      "DEF": 140,
      "MDEF": 110
    },
    "gp10": {
      "DEF": 140,
      "MDEF": 140
    },
    "total": {
      "DEF": 140,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 405,
      "ATK": 19,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 485,
      "ATK": 22,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 566,
      "ATK": 26,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 647,
      "ATK": 30,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 728,
      "ATK": 33,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 809,
      "ATK": 37,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 890,
      "ATK": 41,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 971,
      "ATK": 44,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1052,
      "ATK": 48,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 1133,
      "ATK": 52,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 1133,
      "ATK": 52,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 320
    },
    {
      "grade": 2,
      "ATK": 16
    },
    {
      "grade": 3,
      "HP": 448
    },
    {
      "grade": 4,
      "ATK": 21
    },
    {
      "grade": 5,
      "HP": 576
    },
    {
      "grade": 6,
      "ATK": 26
    },
    {
      "grade": 7,
      "HP": 705
    },
    {
      "grade": 8,
      "ATK": 32
    },
    {
      "grade": 9,
      "HP": 833
    },
    {
      "grade": 10,
      "ATK": 37
    },
    {
      "grade": 11,
      "HP": 917
    }
  ]
};;;;;;;
