// Character data: ユラ
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ユラ",
  "name": "ユラ",
  "displayName": "ユラ",
  "baseName": "ユラ",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Fast",
  "range": 350,
  "weaponType": "Ranged",
  "skillTypes": [
    "弱體化、妨害"
  ],
  "image": "ユラ",
  "introduction": null,
  "profile": {
    "height": "172cm",
    "bust": "104cm (L Cup)",
    "waist": "67cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Ogre",
      "romanized": ""
    },
    "voice": {
      "japanese": "相模恋",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2224
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ケートー",
      "icon": "skill001/skill0005",
      "description": "1 nearest enemymagic damage and inflicts Magic Defense-25%-60 DOWN for 6 seconds , Magic Defense150 DOWN(max450 (max stacking: )",
      "descriptionLv1": "1 nearest enemymagic damage and inflicts Magic Defense-25%-60 DOWN for 6 seconds , Magic Defense150 DOWN(max450 (max stacking: )",
      "descriptionLv90": "1 nearest enemymagic damage and inflicts Magic Defense-25%-420 DOWN for 6 seconds , Magic Defense150 DOWN(max450 (max stacking: )",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": "420% ATK",
      "baseDamage": "+800",
      "levelGrowth": "+25",
      "lvl1": "420% + 800",
      "lvl90": null,
      "effects": [
        "Magic Defense- LvMax",
        "Magic Defense"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- LvMax",
          "value": -60,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -4.0
        },
        {
          "name": "Magic Defense",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    },
    {
      "slot": 3,
      "name": "ステパノス",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to 1 farthest enemy, inflict 3s , 3 , 10 Accuracy -15 DOWN",
      "descriptionLv1": "Deals magic damage to 1 farthest enemy, inflict 3s , 3 , 10 Accuracy -15 DOWN",
      "descriptionLv90": "Deals magic damage to 1 farthest enemy, inflict 3s , 3 , 10 Accuracy -33 DOWN",
      "target": "Back Enemy",
      "castTime": 0.6,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "380% + 500",
      "lvl90": "380% + 482",
      "effects": [
        "Silence",
        "Curse",
        "Accuracy - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.2
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_1",
      "description": "1 nearest enemymagic damage and inflicts BlockDOWN(LV 1) for 10 seconds and Water Type Damage Taken UP(LV 1) for 10 seconds , on Ultimate activation,self15000magic damageUP(max75000 (max stacking: )",
      "effect": "1300% + 1000",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Damage + Ultimate Lv1",
          "value": 9999,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_2",
      "description": "1 nearest enemymagic damage and inflicts BlockDOWN(LV 2) for 10 seconds and Water Type Damage Taken UP(LV 2) for 10 seconds , on Ultimate activation,self18000magic damageUP(max90000 (max stacking: )",
      "effect": "1560% + 1200",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Damage + Ultimate Lv2",
          "value": 9999,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_3",
      "description": "1 nearest enemymagic damage and inflicts BlockDOWN(LV 3) for 10 seconds and Water Type Damage Taken UP(LV 3) for 10 seconds , on Ultimate activation,self21000magic damageUP(max105000 (max stacking: )",
      "effect": "1760% + 1350",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Damage + Ultimate Lv3",
          "value": 9999,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_4",
      "description": "1 nearest enemymagic damage and inflicts BlockDOWN(LV 4) for 10 seconds and Water Type Damage Taken UP(LV 4) for 10 seconds , on Ultimate activation,self23000magic damageUP(max115000 (max stacking: )",
      "effect": "1900% + 1500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Damage + Ultimate Lv4",
          "value": 9999,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_5",
      "description": "1 nearest enemymagic damage and inflicts BlockDOWN(LV 5) for 10 seconds and Water Type Damage Taken UP(LV 5) for 10 seconds , on Ultimate activation,self25000magic damageUP(max125000 (max stacking: )",
      "effect": "2039% + 1600",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Damage + Ultimate Lv5",
          "value": 9999,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Ultimate Damage +, Water Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+5%), Water Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        },
        {
          "name": "Water Type ATK +",
          "value": 5,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "ユラ",
  "id": 2224,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 1887,
    "ATK": 164,
    "MATK": 273,
    "DEF": 176,
    "MDEF": 176
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "ユラ"
};

export const stats = {
  "id": "ユラ",
  "characterId": 2224,
  "name": "ユラ",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 1887,
      "lv90": 9438
    },
    "atk": {
      "base": 164,
      "lv90": 820
    },
    "matk": {
      "base": 273,
      "lv90": 1367
    },
    "def": {
      "base": 176,
      "lv90": 352
    },
    "mdef": {
      "base": 176,
      "lv90": 352
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 197,
      "lv90": 315
    },
    "magicCrit": {
      "base": 328,
      "lv90": 525
    },
    "hpRegen": {
      "base": 94,
      "lv90": 329
    },
    "mpRegen": {
      "base": 66,
      "lv90": 244
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 51,
      "lv90": 51
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
      "HP": 566,
      "MATK": 82,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 651,
      "MATK": 94,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 765,
      "MATK": 111,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 850,
      "MATK": 123,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1605,
      "MATK": 253,
      "DEF": 36,
      "MDEF": 57,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4437,
      "MATK": 663,
      "Block": 68,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 36,
      "MDEF": 57,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 199,
      "MATK": 29,
      "MDEF": 11,
      "Magic Crit": 7,
      "Accuracy": 9
    },
    "g2": {
      "HP": 238,
      "MATK": 35,
      "MDEF": 14,
      "Magic Crit": 8,
      "Block": 14
    },
    "g3": {
      "HP": 278,
      "MATK": 40,
      "MDEF": 16,
      "Magic Crit": 10,
      "Accuracy": 12
    },
    "g4": {
      "HP": 318,
      "MATK": 46,
      "MDEF": 18,
      "Magic Crit": 11,
      "Block": 19
    },
    "g5": {
      "HP": 358,
      "MATK": 52,
      "MDEF": 20,
      "Magic Crit": 12,
      "MP Charge": 4
    },
    "g6": {
      "HP": 397,
      "MATK": 58,
      "MDEF": 23,
      "Magic Crit": 14,
      "Accuracy": 18
    },
    "g7": {
      "HP": 437,
      "MATK": 63,
      "MDEF": 25,
      "Magic Crit": 15,
      "Block": 26
    },
    "g8": {
      "HP": 477,
      "MATK": 69,
      "MDEF": 27,
      "Magic Crit": 17,
      "Accuracy": 21
    },
    "g9": {
      "HP": 517,
      "MATK": 75,
      "MDEF": 30,
      "Magic Crit": 18,
      "Block": 31
    },
    "g10": {
      "HP": 556,
      "MATK": 81,
      "MDEF": 32,
      "Magic Crit": 19,
      "MP Charge": 7
    },
    "total": {
      "HP": 556,
      "MATK": 81,
      "MDEF": 32,
      "Magic Crit": 19,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 11
    },
    {
      "grade": 2,
      "MATK": 25
    },
    {
      "grade": 3,
      "Magic Crit": 15
    },
    {
      "grade": 4,
      "MATK": 33
    },
    {
      "grade": 5,
      "Magic Crit": 20
    },
    {
      "grade": 6,
      "MATK": 41
    },
    {
      "grade": 7,
      "Magic Crit": 24
    },
    {
      "grade": 8,
      "MATK": 49
    },
    {
      "grade": 9,
      "Magic Crit": 28
    },
    {
      "grade": 10,
      "MATK": 57
    },
    {
      "grade": 11,
      "Magic Crit": 33
    }
  ]
};;;;;;;;
