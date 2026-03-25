// Character data: marina
// Merged from info/skills/stats files

export const info = {
  "slug": "marina",
  "name": "Marina",
  "displayName": "Marina",
  "baseName": "Marina",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slightly Fast",
  "range": 520,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Marina",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "159cm",
    "bust": "110cm (O Cup)",
    "waist": "64cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30aa\u30ae\u30f3\u2606\u30d0\u30e9",
      "romanized": "Ogin\u2606Bara"
    },
    "voice": {
      "japanese": "\u661f\u30ea\u30eb\u30ab",
      "romanized": "Hoshi Rilka"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Star Procession",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": "100% + 36",
      "effects": [
        "Action Speed - Lv5",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Future Sight",
      "icon": "skill001/skill0019",
      "description": "all allies6 Physical Critical Damage 40 UP and Magic Critical Damage 40 UP for 6 seconds",
      "descriptionLv1": "all allies6 Physical Critical Damage 40 UP and Magic Critical Damage 40 UP for 6 seconds",
      "descriptionLv90": "all allies6 Physical Critical Damage 490 UP and Magic Critical Damage 40 UP for 6 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 6,
          "levelGrowth": 5.0
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 5.0
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_1",
      "description": "all allies8 Action Speed UP(LV 1) and Hit-Based Shield(LV 1) for 4 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_2",
      "description": "all allies8 Action Speed UP(LV 2) and Hit-Based Shield(LV 2) for 4 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_3",
      "description": "all allies8 Action Speed UP(LV 3) and Hit-Based Shield(LV 3) for 5 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 35,
          "type": "percent",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_4",
      "description": "all allies8 Action Speed UP(LV 4) and Hit-Based Shield(LV 4) for 5 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 40,
          "type": "percent",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_5",
      "description": "all allies8 Action Speed UP(LV 5) and Hit-Based Shield(LV 5) for 6 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Magic Critical Damage+",
      "icon": "skill001/skill1006",
      "effect": "Physical Critical Damage+ (+90%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20%), Action Speed + (+5)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 5,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Marina",
  "id": 2056,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2251,
    "ATK": 221,
    "MATK": 132,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "marina"
};

export const stats = {
  "id": "marina",
  "characterId": 2056,
  "name": "Marina",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2251,
      "lv90": 11255
    },
    "atk": {
      "base": 221,
      "lv90": 1106
    },
    "matk": {
      "base": 132,
      "lv90": 663
    },
    "def": {
      "base": 143,
      "lv90": 286
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
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 112,
      "lv90": 393
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 49,
      "lv90": 49
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
      "HP": 675,
      "ATK": 66,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 777,
      "ATK": 76,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 912,
      "ATK": 90,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1013,
      "ATK": 100,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1914,
      "ATK": 188,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5291,
      "ATK": 520,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "MP Charge": 3,
      "MP Cost Down": 3
    },
    "gp3": {
      "MP Charge": 3,
      "MP Cost Down": 4
    },
    "gp4": {
      "MP Charge": 7,
      "MP Cost Down": 4
    },
    "gp5": {
      "MP Charge": 7,
      "MP Cost Down": 5
    },
    "gp6": {
      "MP Charge": 9,
      "MP Cost Down": 5
    },
    "gp7": {
      "MP Charge": 9,
      "MP Cost Down": 6
    },
    "gp8": {
      "MP Charge": 11,
      "MP Cost Down": 6
    },
    "gp9": {
      "MP Charge": 11,
      "MP Cost Down": 7
    },
    "gp10": {
      "MP Charge": 13,
      "MP Cost Down": 7
    },
    "total": {
      "MP Charge": 13,
      "MP Cost Down": 7
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 237,
      "ATK": 23,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 284,
      "ATK": 28,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 332,
      "ATK": 33,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 379,
      "ATK": 37,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 427,
      "ATK": 42,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 474,
      "ATK": 47,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 521,
      "ATK": 51,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 569,
      "ATK": 56,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 616,
      "ATK": 61,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 664,
      "ATK": 65,
      "Phys Crit": 12,
      "MP Charge": 6
    },
    "total": {
      "HP": 664,
      "ATK": 65,
      "Phys Crit": 12,
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
      "MP Regen": 6
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MP Regen": 8
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "MP Regen": 9
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MP Regen": 11
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "MP Regen": 13
    },
    {
      "grade": 11,
      "MP Charge": 3
    }
  ]
};;;;;;;;
