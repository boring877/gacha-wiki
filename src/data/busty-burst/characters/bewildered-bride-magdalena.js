// Character data: 困惑の花嫁-マグダレーナ
// Auto-generated from game data

export const info = {
  "slug": "bewildered-bride-magdalena",
  "name": "[Bewildered Bride] Magdalena",
  "displayName": "Bewildered Bride Magdalena",
  "baseName": "Magdalena",
  "title": "Bewildered Bride",
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Ranged",
  "skillTypes": [
    "回復、強化、弱體化、MP回復、デバフ解除"
  ],
  "image": "マグダレーナ",
  "introduction": "Middle RowMagicalSupport",
  "profile": {
    "height": "160cm",
    "bust": "103cm (J Cup)",
    "waist": "60cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "神通RIKI",
      "romanized": ""
    },
    "voice": {
      "japanese": "渋谷ひめ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2225
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ディアネモ",
      "icon": "skill001/skill0019",
      "description": "All allies 10s Physical Defense 20%+140 UP and Magic Defense 20%+140 UP for 10 seconds, 10s Magic Attack 18%+35 UP",
      "descriptionLv1": "All allies 10s Physical Defense 20%+140 UP and Magic Defense 20%+140 UP for 10 seconds, 10s Magic Attack 18%+35 UP",
      "descriptionLv90": "All allies 10s Physical Defense 20%+320 UP and Magic Defense 20%+320 UP for 10 seconds, 10s Magic Attack 18%+665 UP",
      "target": "All Allies",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3",
        "Magic Attack + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "エヴィロイーア",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies, MP Recovery 110, Debuff",
      "descriptionLv1": "Restores HP by to all allies, MP Recovery 110, Debuff",
      "descriptionLv90": "Restores HP by to all allies, MP Recovery 110, Debuff",
      "target": "All Allies",
      "castTime": 1.2,
      "damageScaling": "1800% ATK",
      "baseDamage": "+800",
      "levelGrowth": "+30",
      "lvl1": "1800% + 800",
      "lvl90": null,
      "effects": [
        "MP Recovery",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 110,
          "type": "percent",
          "duration": 0,
          "levelGrowth": 1.0
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 0
        }
      ],
      "duration": 0
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds, all allies 8s Healing Shield (LV 1), 20s Hit-Based Magic Damage (LV 1)",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv1",
          "value": 4,
          "type": "flat",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 2) for 10 seconds, all allies 8s Healing Shield (LV 2), 20s Hit-Based Magic Damage (LV 2)",
      "effect": "350% + 450",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv2",
          "value": 4,
          "type": "flat",
          "duration": 20
        }
      ]
    },
    {
      "rank": 3,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 3) for 10 seconds, all allies 8s Healing Shield (LV 3), 20s Hit-Based Magic Damage (LV 3)",
      "effect": "390% + 600",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv3",
          "value": 4,
          "type": "flat",
          "duration": 20
        }
      ]
    },
    {
      "rank": 4,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 4) for 10 seconds, all allies 8s Healing Shield (LV 4), 20s Hit-Based Magic Damage (LV 4)",
      "effect": "420% + 700",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv4",
          "value": 4,
          "type": "flat",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 5) for 10 seconds, all allies 8s Healing Shield (LV 5), 20s Hit-Based Magic Damage (LV 5)",
      "effect": "434% + 800",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv5",
          "value": 4,
          "type": "flat",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Debuff Resistance+, Healing Received +",
      "icon": "skill001/skill1008",
      "description": "Gain Debuff Resistance UP (Small), Healing Received UP (Tiny)",
      "effect": "Healing Received + (+10%)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 10,
          "type": "percent",
          "gameText": "Healing Received UP (Tiny)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1007",
      "description": "Gain Magic Attack UP (Cannot be Cleansed), Action Speed UP (Cannot be Cleansed)",
      "effect": "()()",
      "effectValues": []
    }
  ],
  "name": "困惑の花嫁: マグダレーナ",
  "id": 2225,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "回復、強化、弱體化、MP回復、デバフ解除"
  ],
  "baseStats": {
    "HP": 2029,
    "ATK": 151,
    "MATK": 253,
    "DEF": 206,
    "MDEF": 111
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "困惑の花嫁-マグダレーナ"
};

export const stats = {
  "id": "bewildered-bride-magdalena",
  "characterId": 2225,
  "name": "[Bewildered Bride] Magdalena",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "回復、強化、弱體化、MP回復、デバフ解除"
  ],
  "baseStats": {
    "hp": {
      "base": 2029,
      "lv90": 10146
    },
    "atk": {
      "base": 151,
      "lv90": 758
    },
    "matk": {
      "base": 253,
      "lv90": 1265
    },
    "def": {
      "base": 206,
      "lv90": 412
    },
    "mdef": {
      "base": 111,
      "lv90": 222
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 101,
      "lv90": 354
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 56,
      "lv90": 56
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
      "HP": 609,
      "MATK": 76,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 700,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 822,
      "MATK": 102,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 913,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1725,
      "MATK": 216,
      "DEF": 42,
      "MDEF": 52,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4769,
      "MATK": 595,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 42,
      "MDEF": 52,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 20
    },
    "gp2": {
      "Heal Pwr": 20,
      "MP Cost Down": 3
    },
    "gp3": {
      "Heal Pwr": 45,
      "MP Cost Down": 3
    },
    "gp4": {
      "Heal Pwr": 45,
      "MP Cost Down": 5
    },
    "gp5": {
      "Heal Pwr": 70,
      "MP Cost Down": 5
    },
    "gp6": {
      "Heal Pwr": 70,
      "MP Cost Down": 6
    },
    "gp7": {
      "Heal Pwr": 95,
      "MP Cost Down": 6
    },
    "gp8": {
      "Heal Pwr": 95,
      "MP Cost Down": 7
    },
    "gp9": {
      "Heal Pwr": 120,
      "MP Cost Down": 7
    },
    "gp10": {
      "Heal Pwr": 120,
      "MP Cost Down": 8
    },
    "total": {
      "Heal Pwr": 120,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 214,
      "MATK": 27,
      "MDEF": 10,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 256,
      "MATK": 32,
      "MDEF": 12,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 299,
      "MATK": 37,
      "MDEF": 14,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 342,
      "MATK": 43,
      "MDEF": 16,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 385,
      "MATK": 48,
      "MDEF": 18,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 427,
      "MATK": 53,
      "MDEF": 20,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 470,
      "MATK": 59,
      "MDEF": 22,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 513,
      "MATK": 64,
      "MDEF": 24,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 555,
      "MATK": 69,
      "MDEF": 27,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 598,
      "MATK": 75,
      "MDEF": 29,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 598,
      "MATK": 75,
      "MDEF": 29,
      "Magic Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MDEF": 11
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "MDEF": 15
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "MDEF": 19
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "MDEF": 24
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "MDEF": 28
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "MDEF": 33
    }
  ]
};;;
