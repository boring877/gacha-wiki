// Character data: belubelu
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "belubelu",
  "name": "BeluBelu",
  "displayName": "BeluBelu",
  "baseName": "BeluBelu",
  "title": null,
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
  "weaponType": "Ranged",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "BeluBelu",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "157cm",
    "bust": "95cm (J Cup)",
    "waist": "55cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "星鹿りえ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2214
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Touching is forbidden~!!",
      "icon": "skill001/skill0011",
      "description": "3 nearest enemies3s Charm for and Block-13 DOWN for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10)",
      "descriptionLv1": "3 nearest enemies3s Charm for and Block-13 DOWN for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10)",
      "descriptionLv90": "3 nearest enemies3s Charm for and Block-26 DOWN for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10)",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Block- Lv5",
        "Spirit Energy"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    },
    {
      "slot": 3,
      "name": "Let's relax for a bit!",
      "icon": "skill001/skill0019",
      "description": "all allies10 Damage 15%+2000 UP and 10%+Damage Reduction for 10 seconds , 10 Accuracy 11 UP",
      "descriptionLv1": "all allies10 Damage 15%+2000 UP and 10%+Damage Reduction for 10 seconds , 10 Accuracy 11 UP",
      "descriptionLv90": "all allies10 Damage 15%+2000 UP and 10%+Damage Reduction for 10 seconds , 10 Accuracy 23 UP",
      "target": "All Allies",
      "castTime": 1.2,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Damage UP",
        "Shield",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Damage UP",
          "value": 15,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 2000.0
        },
        {
          "name": "Shield",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy + Lv4",
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
      "name": "Die Die Dance!",
      "icon": "skill001/skill0012_1",
      "description": "magic damage and inflicts Action Speed DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10), [Spirit]10 when[Spirit]all allies4 MP Regen150",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Die Die Dance!",
      "icon": "skill001/skill0012_2",
      "description": "magic damage and inflicts Action Speed DOWN(LV 2) for 10 seconds and Accuracy DOWN(LV 2) for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10), [Spirit]10 when[Spirit]all allies4 MP Regen165",
      "effect": "520% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Die Die Dance!",
      "icon": "skill001/skill0012_3",
      "description": "magic damage and inflicts Action Speed DOWN(LV 3) for 10 seconds and Accuracy DOWN(LV 3) for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10), [Spirit]10 when[Spirit]all allies4 MP Regen180",
      "effect": "600% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Die Die Dance!",
      "icon": "skill001/skill0012_4",
      "description": "magic damage and inflicts Action Speed DOWN(LV 4) for 10 seconds and Accuracy DOWN(LV 4) for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10), [Spirit]10 when[Spirit]all allies4 MP Regen190",
      "effect": "660% + 650",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Die Die Dance!",
      "icon": "skill001/skill0012_5",
      "description": "magic damage and inflicts Action Speed DOWN(LV 5) for 10 seconds and Accuracy DOWN(LV 5) for 10 seconds , [Spirit]1([Spirit]1MP Regen5, max10), [Spirit]10 when[Spirit]all allies4 MP Regen200",
      "effect": "700% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, MP Recovery",
      "icon": "skill001/skill1005",
      "effect": "Action Speed + (+15), MP Recovery (+30%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Spirit Energy",
      "icon": "skill001/skill1005",
      "effect": "Ultimate Damage + (+5%), Spirit Energy (+5)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        },
        {
          "name": "Spirit Energy",
          "value": 5,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "BeluBelu",
  "id": 2214,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 129,
    "MATK": 215,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.9"
  },
  "slug": "belubelu"
};

export const stats = {
  "id": "belubelu",
  "characterId": 2214,
  "name": "BeluBelu",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
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
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 57,
      "lv90": 114
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
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
      "base": 137,
      "lv90": 480
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
      "base": 58,
      "lv90": 58
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
      "HP": 824,
      "MATK": 65,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 947,
      "MATK": 74,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "MATK": 87,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1236,
      "MATK": 97,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2540,
      "MATK": 183,
      "DEF": 12,
      "MDEF": 19,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6659,
      "MATK": 506,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 12,
      "MDEF": 19,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Cost Down": 3
    },
    "gp3": {
      "HP": 750,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 750,
      "MP Cost Down": 5
    },
    "gp5": {
      "HP": 1200,
      "MP Cost Down": 5
    },
    "gp6": {
      "HP": 1200,
      "MP Cost Down": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Cost Down": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Cost Down": 7
    },
    "gp9": {
      "HP": 2100,
      "MP Cost Down": 7
    },
    "gp10": {
      "HP": 2100,
      "MP Cost Down": 8
    },
    "total": {
      "HP": 2100,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "MATK": 23,
      "MDEF": 4,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "MATK": 27,
      "MDEF": 4,
      "Magic Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "MATK": 32,
      "MDEF": 5,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "MATK": 36,
      "MDEF": 6,
      "Magic Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "MATK": 41,
      "MDEF": 7,
      "Magic Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 578,
      "MATK": 45,
      "MDEF": 7,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "MATK": 50,
      "MDEF": 8,
      "Magic Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "MATK": 54,
      "MDEF": 9,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "MATK": 59,
      "MDEF": 10,
      "Magic Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "MATK": 63,
      "MDEF": 10,
      "Magic Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 809,
      "MATK": 63,
      "MDEF": 10,
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
      "HP": 247
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "HP": 329
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "HP": 412
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "HP": 494
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "HP": 577
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
