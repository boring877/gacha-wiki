// Character data: magdalena
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "magdalena",
  "name": "Magdalena",
  "displayName": "Magdalena",
  "baseName": "Magdalena",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Ranged",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Magdalena",
  "introduction": "Front Row、Magical、Tank",
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
  "characterId": 2108
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Cross Flash",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -25 DOWN for 7 seconds and Magic Attack -25 DOWN for 7 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -25 DOWN for 7 seconds and Magic Attack -25 DOWN for 7 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -205 DOWN for 7 seconds and Magic Attack -205 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.28,
      "damageScaling": "120% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+6",
      "lvl1": "120% + 100",
      "lvl90": "120% + -78",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -2.0
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Holy Baptism",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Healing Shield (+40, restores 200%, 4 hit(s)) to all allies for 15 seconds and Block 9 UP for 8 seconds , 8 Magic Attack +30 UP",
      "descriptionLv1": "Applies Hit-Based Healing Shield (+40, restores 200%, 4 hit(s)) to all allies for 15 seconds and Block 9 UP for 8 seconds , 8 Magic Attack +30 UP",
      "descriptionLv90": "Applies Hit-Based Healing Shield (+40, restores 200%, 4 hit(s)) to all allies for 15 seconds and Block 18 UP for 8 seconds , 8 Magic Attack +480 UP",
      "target": "All Allies",
      "castTime": 1.28,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Healing Shield Lv5",
        "Block+ Lv3",
        "Magic Attack + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Healing Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 40.0
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        },
        {
          "name": "Magic Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 5.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sacred Tree. Hang, curse, and bring salvation",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds , self10 HP RegenerationUP(LV 1)",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Cross Flash",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Physical Attack -25 DOWN for 7 seconds and Magic Attack -25 DOWN for 7 seconds",
      "effect": "120% + 100",
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Holy Baptism",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Healing Shield (+40, restores 200%, 4 hit(s)) to all allies for 15 seconds and Block 9 UP for 8 seconds , 8 Magic Attack +30 UP",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Healing Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sacred Tree. Hang, curse, and bring salvation",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds , self10 HP RegenerationUP(LV 1)",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sacred Tree. Hang, curse, and bring salvation",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 4 seconds and Magic Defense DOWN(LV 2) for 10 seconds , self10 HP RegenerationUP(LV 2)",
      "effect": "420% + 600",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 6,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Healing Received +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
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
    }
  ],
  "name": "Magdalena",
  "id": 2108,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2369,
    "ATK": 124,
    "MATK": 207,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "magdalena"
};

export const stats = {
  "id": "magdalena",
  "characterId": 2108,
  "name": "Magdalena",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2369,
      "lv90": 11845
    },
    "atk": {
      "base": 124,
      "lv90": 620
    },
    "matk": {
      "base": 207,
      "lv90": 1035
    },
    "def": {
      "base": 90,
      "lv90": 248
    },
    "mdef": {
      "base": 226,
      "lv90": 384
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
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
      "base": 118,
      "lv90": 414
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
      "base": 53,
      "lv90": 53
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
      "HP": 711,
      "MATK": 62,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 817,
      "MATK": 71,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 960,
      "MATK": 84,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1066,
      "MATK": 93,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2191,
      "MATK": 176,
      "DEF": 25,
      "MDEF": 58,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5745,
      "MATK": 486,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 58,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 750,
      "MATK": 40
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 1200,
      "MATK": 120
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1650,
      "MATK": 200
    },
    "gp8": {
      "HP": 1650,
      "MATK": 280
    },
    "gp9": {
      "HP": 2100,
      "MATK": 280
    },
    "gp10": {
      "HP": 2100,
      "MATK": 360
    },
    "total": {
      "HP": 2100,
      "MATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "MATK": 22,
      "MDEF": 10,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "MATK": 26,
      "MDEF": 12,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 349,
      "MATK": 31,
      "MDEF": 14,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 399,
      "MATK": 35,
      "MDEF": 16,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 449,
      "MATK": 39,
      "MDEF": 18,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 499,
      "MATK": 44,
      "MDEF": 20,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 549,
      "MATK": 48,
      "MDEF": 22,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 599,
      "MATK": 52,
      "MDEF": 24,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 648,
      "MATK": 57,
      "MDEF": 27,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 698,
      "MATK": 61,
      "MDEF": 29,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 698,
      "MATK": 61,
      "MDEF": 29,
      "Magic Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 197
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 276
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 355
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "HP": 434
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "HP": 513
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "HP": 539
    }
  ]
};;;;;;;;
