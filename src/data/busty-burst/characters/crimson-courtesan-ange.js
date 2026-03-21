// Character data: crimson-courtesan-ange
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "crimson-courtesan-ange",
  "name": "Crimson Courtesan: Ange",
  "displayName": "Crimson Courtesan: Ange",
  "baseName": "Ange",
  "title": "Crimson Courtesan",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 380,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Ange",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "112cm (L Cup)",
    "waist": "63cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "翠野タヌキ",
      "romanized": ""
    },
    "voice": {
      "japanese": "伊ヶ崎綾香",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2219
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Don't you want to play with me?",
      "icon": "skill001/skill0019",
      "description": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +40 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +40 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +850 UP for 10 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 1.2,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Fire Type ATK + Lv5",
        "Magic Attack + Lv5",
        "MP Regeneration + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Fire Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "It'd be bad if it hurts...?",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 3s and Fire Type Damage Taken UP for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies, inflict 3s and Fire Type Damage Taken UP for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies, inflict 3s and Fire Type Damage Taken UP for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "120% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+6",
      "lvl1": "120% + 250",
      "lvl90": null,
      "effects": [
        "Blind",
        "Fire Type Damage Taken + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Flame of Desirous Remnant",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds , 10 Accuracy DOWN(LV 1)",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Don't you want to play with me?",
      "icon": "skill001/skill0019",
      "description": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +40 UP for 10 seconds , 4 MP Regeneration 50",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "It'd be bad if it hurts...?",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 3s and Fire Type Damage Taken UP for 6 seconds",
      "effect": "120% + 250",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Flame of Desirous Remnant",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds , 10 Accuracy DOWN(LV 1)",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Flame of Desirous Remnant",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3.5 seconds and Magic Defense DOWN(LV 2) for 10 seconds , 10 Accuracy DOWN(LV 2)",
      "effect": "470% + 550",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+176), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Crimson Courtesan: Ange",
  "id": 2219,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 186,
    "MATK": 311,
    "DEF": 264,
    "MDEF": 216
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "crimson-courtesan-ange"
};

export const stats = {
  "id": "crimson-courtesan-ange",
  "characterId": 2219,
  "name": "【Crimson Courtesan】Ange",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 186,
      "lv90": 932
    },
    "matk": {
      "base": 311,
      "lv90": 1555
    },
    "def": {
      "base": 264,
      "lv90": 528
    },
    "mdef": {
      "base": 216,
      "lv90": 432
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
      "base": 63,
      "lv90": 222
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
      "base": 70,
      "lv90": 70
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
      "HP": 382,
      "MATK": 93,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 439,
      "MATK": 107,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "MATK": 126,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 573,
      "MATK": 140,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1083,
      "MATK": 288,
      "DEF": 52,
      "MDEF": 73,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2993,
      "MATK": 754,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 52,
      "MDEF": 73,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 30
    },
    "gp2": {
      "MATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "MATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "MATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "MATK": 130,
      "Accuracy": 5
    },
    "gp6": {
      "MATK": 130,
      "Accuracy": 7
    },
    "gp7": {
      "MATK": 170,
      "Accuracy": 7
    },
    "gp8": {
      "MATK": 170,
      "Accuracy": 9
    },
    "gp9": {
      "MATK": 210,
      "Accuracy": 9
    },
    "gp10": {
      "MATK": 210,
      "Accuracy": 11
    },
    "total": {
      "MATK": 210,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 134,
      "MATK": 33,
      "MDEF": 16,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "MATK": 39,
      "MDEF": 19,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "MATK": 46,
      "MDEF": 22,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "MATK": 52,
      "MDEF": 25,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "MATK": 59,
      "MDEF": 28,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "g6": {
      "HP": 268,
      "MATK": 66,
      "MDEF": 31,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "MATK": 72,
      "MDEF": 34,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "MATK": 79,
      "MDEF": 37,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "MATK": 85,
      "MDEF": 40,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "MATK": 92,
      "MDEF": 43,
      "Magic Crit": 18,
      "MP Charge": 9
    },
    "total": {
      "HP": 375,
      "MATK": 92,
      "MDEF": 43,
      "Magic Crit": 18,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 26
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 36
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 47
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 57
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 67
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 74
    }
  ]
};;;;;;;;
