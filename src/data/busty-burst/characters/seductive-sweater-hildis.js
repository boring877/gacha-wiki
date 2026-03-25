// Character data: seductive-sweater-hildis
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "seductive-sweater-hildis",
  "name": "Seductive Sweater: Hildis",
  "displayName": "Seductive Sweater: Hildis",
  "baseName": "Hildis",
  "title": "Seductive Sweater",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "MP Recovery"
  ],
  "image": "Hildis",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "98cm (H Cup)",
    "waist": "64cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "野々村紗夜",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2182
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "You lot are useless!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-220 DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": "360% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "360% + 500",
      "lvl90": "360% + 488",
      "effects": [
        "Physical Defense - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv4",
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
      "name": "My body is so hot... is this the power of the sweater?",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 18%+35 UP to self for 10 seconds and Debuff Resistance 30%UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "Applies Physical Attack 18%+35 UP to self for 10 seconds and Debuff Resistance 30%UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "Applies Physical Attack 18%+665 UP to self for 10 seconds and Debuff Resistance 30%UP for 10 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 0.55,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Debuff Resistance Lv2",
        "MP Regeneration + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "D-Don't look at me~~~~!!",
      "icon": "skill001/skill0003_1",
      "description": "6 nearest enemies dealphysical damage and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds , self10 Action Speed UP(LV 1)",
      "effect": "250% + 250",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "D-Don't look at me~~~~!!",
      "icon": "skill001/skill0003_2",
      "description": "6 nearest enemies dealphysical damage and inflicts Action Speed DOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds , self10 Action Speed UP(LV 2)",
      "effect": "295% + 450",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "D-Don't look at me~~~~!!",
      "icon": "skill001/skill0003_3",
      "description": "6 nearest enemies dealphysical damage and inflicts Action Speed DOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds , self10 Action Speed UP(LV 3)",
      "effect": "340% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "D-Don't look at me~~~~!!",
      "icon": "skill001/skill0003_4",
      "description": "6 nearest enemies dealphysical damage and inflicts Action Speed DOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds , self10 Action Speed UP(LV 4)",
      "effect": "375% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "D-Don't look at me~~~~!!",
      "icon": "skill001/skill0003_5",
      "description": "6 nearest enemies dealphysical damage and inflicts Action Speed DOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds , self10 Action Speed UP(LV 5)",
      "effect": "400% + 900",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Mind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Mind Type ATK + (+3%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Mind Type ATK +",
          "value": 3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Skill Enhancement Regol Cost DOWNMind",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Skill Enhancement Regol Cost DOWNMind (+5%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNMind",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Seductive Sweater: Hildis",
  "id": 2182,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 190,
    "MATK": 114,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "seductive-sweater-hildis"
};

export const stats = {
  "id": "seductive-sweater-hildis",
  "characterId": 2182,
  "name": "【Seductive Sweater】Hildis",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 190,
      "lv90": 952
    },
    "matk": {
      "base": 114,
      "lv90": 571
    },
    "def": {
      "base": 57,
      "lv90": 139
    },
    "mdef": {
      "base": 57,
      "lv90": 114
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
      "lv90": 473
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "base": 45,
      "lv90": 45
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
      "HP": 628,
      "ATK": 57,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 722,
      "ATK": 66,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 77,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 941,
      "ATK": 86,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 162,
      "DEF": 21,
      "MDEF": 12,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 448,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 21,
      "MDEF": 12,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 20,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 24,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 28,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 32,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 36,
      "Phys Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "ATK": 40,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 44,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 48,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 52,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 617,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Charge": 2
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Charge": 3
    }
  ]
};;;;;;;;
