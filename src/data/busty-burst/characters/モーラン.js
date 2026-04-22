// Character data: モーラン
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "モーラン",
  "name": "モーラン",
  "displayName": "モーラン",
  "baseName": "モーラン",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 350,
  "weaponType": "Throw",
  "skillTypes": [
    "強化、MP回復"
  ],
  "image": "モーラン",
  "introduction": null,
  "profile": {
    "height": "166cm",
    "bust": "98cm (H Cup)",
    "waist": "60cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "馬肉太郎",
      "romanized": ""
    },
    "voice": {
      "japanese": "ひむろゆり",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2230
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "フィジカルリフレクト",
      "icon": "skill001/skill0019",
      "description": "all allies6 Physical Shield (Damage Taken 20%+) and Physical Reflect Shield(100%+300) for 6 seconds , 10 Physical Shield (1500)",
      "descriptionLv1": "all allies6 Physical Shield (Damage Taken 20%+) and Physical Reflect Shield(100%+300) for 6 seconds , 10 Physical Shield (1500)",
      "descriptionLv90": "all allies6 Physical Shield (Damage Taken 20%+) and Physical Reflect Shield(100%+300) for 6 seconds , 10 Physical Shield (1500)",
      "target": "All Allies",
      "castTime": 0.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Shield",
        "Physical Reflect Shield",
        "Physical Shield"
      ],
      "buffEffects": [
        {
          "name": "Physical Shield",
          "value": 20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Physical Reflect Shield",
          "value": 999,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 300.0
        },
        {
          "name": "Physical Shield",
          "value": 1500,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "マジックリフレクト",
      "icon": "skill001/skill0019",
      "description": "all allies6 Magic Shield (Damage Taken 20%+) and Magic Reflect Shield(100%+300) for 6 seconds , 10 Magic Shield (1500)",
      "descriptionLv1": "all allies6 Magic Shield (Damage Taken 20%+) and Magic Reflect Shield(100%+300) for 6 seconds , 10 Magic Shield (1500)",
      "descriptionLv90": "all allies6 Magic Shield (Damage Taken 20%+) and Magic Reflect Shield(100%+300) for 6 seconds , 10 Magic Shield (1500)",
      "target": "All Allies",
      "castTime": 0.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Shield",
        "Magic Reflect Shield",
        "Magic Shield"
      ],
      "buffEffects": [
        {
          "name": "Magic Shield",
          "value": 20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Magic Reflect Shield",
          "value": 999,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 300.0
        },
        {
          "name": "Magic Shield",
          "value": 1500,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "リヴァーバレイション・ブルワーク",
      "icon": "skill001/skill0020_1",
      "description": "all allies6 Shield (LV 1) and Reflect Shield(LV 1) for 6 seconds , 10 BlockUP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Reflect Shield Ultimate Lv1",
          "value": 999,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "リヴァーバレイション・ブルワーク",
      "icon": "skill001/skill0020_2",
      "description": "all allies6 Shield (LV 2) and Reflect Shield(LV 2) for 6 seconds , 10 BlockUP(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv2",
          "value": 15,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Reflect Shield Ultimate Lv2",
          "value": 999,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "リヴァーバレイション・ブルワーク",
      "icon": "skill001/skill0020_3",
      "description": "all allies6 Shield (LV 3) and Reflect Shield(LV 3) for 6 seconds , 10 BlockUP(LV 3)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv3",
          "value": 20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Reflect Shield Ultimate Lv3",
          "value": 999,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "リヴァーバレイション・ブルワーク",
      "icon": "skill001/skill0020_4",
      "description": "all allies6 Shield (LV 4) and Reflect Shield(LV 4) for 6 seconds , 10 BlockUP(LV 4)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv4",
          "value": 25,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Reflect Shield Ultimate Lv4",
          "value": 999,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "リヴァーバレイション・ブルワーク",
      "icon": "skill001/skill0020_5",
      "description": "all allies6 Shield (LV 5) and Reflect Shield(LV 5) for 6 seconds , 10 BlockUP(LV 5)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Reflect Shield Ultimate Lv5",
          "value": 999,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block+ Ultimate Lv5",
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
      "name": "Physical Defense +, Magic Defense+, Debuff Resistance",
      "icon": "skill001/skill1005",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "MP Recovery, Shield",
      "icon": "skill001/skill1005",
      "effect": "MP Recovery (+200%), Shield (+99999%)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        },
        {
          "name": "Shield",
          "value": 99999,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "モーラン",
  "id": 2230,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "tags": [
    "強化、MP回復"
  ],
  "baseStats": {
    "HP": 1671,
    "ATK": 174,
    "MATK": 291,
    "DEF": 111,
    "MDEF": 206
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "モーラン"
};

export const stats = {
  "id": "モーラン",
  "characterId": 2230,
  "name": "モーラン",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "強化、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 1671,
      "lv90": 8356
    },
    "atk": {
      "base": 174,
      "lv90": 872
    },
    "matk": {
      "base": 291,
      "lv90": 1455
    },
    "def": {
      "base": 111,
      "lv90": 423
    },
    "mdef": {
      "base": 206,
      "lv90": 374
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 83,
      "lv90": 291
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
      "HP": 501,
      "MATK": 87,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 577,
      "MATK": 100,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 677,
      "MATK": 118,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 752,
      "MATK": 131,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1421,
      "MATK": 248,
      "DEF": 43,
      "MDEF": 67,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3928,
      "MATK": 684,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 43,
      "MDEF": 67,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 750,
      "Block": 3
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 1200,
      "Block": 7
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1650,
      "Block": 10
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 2100,
      "Block": 13
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 176,
      "MATK": 31,
      "MDEF": 16,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 211,
      "MATK": 37,
      "MDEF": 19,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 246,
      "MATK": 43,
      "MDEF": 22,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 281,
      "MATK": 49,
      "MDEF": 25,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 317,
      "MATK": 55,
      "MDEF": 28,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 352,
      "MATK": 61,
      "MDEF": 31,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 387,
      "MATK": 67,
      "MDEF": 34,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 422,
      "MATK": 74,
      "MDEF": 37,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 457,
      "MATK": 80,
      "MDEF": 40,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 493,
      "MATK": 86,
      "MDEF": 43,
      "Magic Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 493,
      "MATK": 86,
      "MDEF": 43,
      "Magic Crit": 3,
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
      "Block": 5
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Block": 6
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Block": 9
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Block": 11
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
