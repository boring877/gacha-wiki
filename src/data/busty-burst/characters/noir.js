// Character data: noir
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "noir",
  "name": "Noir",
  "displayName": "Noir",
  "baseName": "Noir",
  "title": null,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 350,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Noir",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "159cm",
    "bust": "127cm (T Cup)",
    "waist": "62cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ゴンデロガ",
      "romanized": ""
    },
    "voice": {
      "japanese": "森乃なんな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2193
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Heal Wounds",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Block 11 UP for 10 seconds and Action Speed 14%UP for 10 seconds , DEBUFF",
      "descriptionLv1": "restore HP to all alliesHP and inflicts Block 11 UP for 10 seconds and Action Speed 14%UP for 10 seconds , DEBUFF",
      "descriptionLv90": "restore HP to all alliesHP and inflicts Block 23 UP for 10 seconds and Action Speed 14%UP for 10 seconds , DEBUFF",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": "1500% ATK",
      "baseDamage": "+800",
      "levelGrowth": "+30",
      "lvl1": "1500% + 800",
      "lvl90": null,
      "effects": [
        "Block+ Lv4",
        "Action Speed + Lv3",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Radiance",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9 UP to all allies for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 10 Magic Critical Damage 50 UP",
      "descriptionLv1": "Applies Accuracy 9 UP to all allies for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 10 Magic Critical Damage 50 UP",
      "descriptionLv90": "Applies Accuracy 18 UP to all allies for 10 seconds and Physical Critical Damage 680 UP for 10 seconds , 10 Magic Critical Damage 50 UP",
      "target": "All Allies",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv3",
        "Physical Critical Damage+ Lv4",
        "Magic Critical Damage+ Lv4"
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
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Holy Breeze",
      "icon": "skill001/skill0020_1",
      "description": "restore HP to all alliesHP and inflicts Physical Defense UP(LV 1) for 8 seconds and Magic DefenseUP(LV 1) for 8 seconds , 8 Debuff ResistanceUP(LV 1)",
      "effect": "2500% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Ultimate Lv1",
          "value": 350,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv1",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Holy Breeze",
      "icon": "skill001/skill0020_2",
      "description": "restore HP to all alliesHP and inflicts Physical Defense UP(LV 2) for 8 seconds and Magic DefenseUP(LV 2) for 8 seconds , 8 Debuff ResistanceUP(LV 2)",
      "effect": "2800% + 1300",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv2",
          "value": 350,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Ultimate Lv2",
          "value": 450,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv2",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Holy Breeze",
      "icon": "skill001/skill0020_3",
      "description": "restore HP to all alliesHP and inflicts Physical Defense UP(LV 3) for 8 seconds and Magic DefenseUP(LV 3) for 8 seconds , 8 Debuff ResistanceUP(LV 3)",
      "effect": "3100% + 1550",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv3",
          "value": 400,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Ultimate Lv3",
          "value": 500,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv3",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Holy Breeze",
      "icon": "skill001/skill0020_4",
      "description": "restore HP to all alliesHP and inflicts Physical Defense UP(LV 4) for 8 seconds and Magic DefenseUP(LV 4) for 8 seconds , 8 Debuff ResistanceUP(LV 4)",
      "effect": "3300% + 1800",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv4",
          "value": 450,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Ultimate Lv4",
          "value": 550,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv4",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Holy Breeze",
      "icon": "skill001/skill0020_5",
      "description": "restore HP to all alliesHP and inflicts Physical Defense UP(LV 5) for 8 seconds and Magic DefenseUP(LV 5) for 8 seconds , 8 Debuff ResistanceUP(LV 5)",
      "effect": "3500% + 2000",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv5",
          "value": 500,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Ultimate Lv5",
          "value": 600,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Debuff Resistance+ Ultimate Lv5",
          "value": 0,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Accuracy +, Physical Damage UP, Magic Damage UP",
      "icon": "skill001/skill1005",
      "effect": "Accuracy + (+10), Physical Damage UP (+9999), Magic Damage UP (+9999)",
      "effectValues": [
        {
          "name": "Accuracy +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Physical Damage UP",
          "value": 9999,
          "type": "flat"
        },
        {
          "name": "Magic Damage UP",
          "value": 9999,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Action Speed +, Damage UP",
      "icon": "skill001/skill1005",
      "effect": "Action Speed + (+15), Damage UP (+15%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Damage UP",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Noir",
  "id": 2193,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 140,
    "MATK": 234,
    "DEF": 69,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.15"
  },
  "slug": "noir"
};

export const stats = {
  "id": "noir",
  "characterId": 2193,
  "name": "Noir",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
    },
    "atk": {
      "base": 140,
      "lv90": 701
    },
    "matk": {
      "base": 234,
      "lv90": 1170
    },
    "def": {
      "base": 69,
      "lv90": 138
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
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
      "base": 135,
      "lv90": 337
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
      "MATK": 70,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 947,
      "MATK": 81,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "MATK": 95,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1236,
      "MATK": 105,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2482,
      "MATK": 199,
      "DEF": 14,
      "MDEF": 17,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6601,
      "MATK": 550,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 14,
      "MDEF": 17,
      "Heal Pwr": 25
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
      "MATK": 25,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "MATK": 30,
      "MDEF": 4,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "MATK": 34,
      "MDEF": 5,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "MATK": 39,
      "MDEF": 6,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "MATK": 44,
      "MDEF": 7,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 578,
      "MATK": 49,
      "MDEF": 7,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "MATK": 54,
      "MDEF": 8,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "MATK": 59,
      "MDEF": 9,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "MATK": 64,
      "MDEF": 10,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "MATK": 69,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 809,
      "MATK": 69,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "HP": 247
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "HP": 329
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "HP": 412
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "HP": 494
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "HP": 577
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
