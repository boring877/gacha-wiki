// Character data: ruru
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ruru",
  "name": "Ruru",
  "displayName": "Ruru",
  "baseName": "Ruru",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 370,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "MP Recovery"
  ],
  "image": "Ruru",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "98cm (J Cup)",
    "waist": "59cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "七瀬瑞穂",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤崎紗矢香",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "event",
    "source": "Infinite Subjugation Battle"
  },
  "characterId": 2098
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Blooming Flowers",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 8 secondsand when defeating an enemy, gain MP Recovery 30",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 8 secondsand when defeating an enemy, gain MP Recovery 30",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Block-23 DOWN for 8 secondsand when defeating an enemy, gain MP Recovery 30",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "100% + 100",
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "MP Recovery"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Fragrant Blossoms",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +40 UP to self for 12 seconds and Action Speed UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack +40 UP to self for 12 seconds and Action Speed UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack +850 UP to self for 12 seconds and Action Speed UP for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to all enemies and inflicts Wind Type ATK UP(LV 1) for 5 secondsand when defeating an enemy, gain MP Recovery 40",
      "effect": "500% + 600",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv1",
          "value": 40,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 2,
      "name": "Blooming Flowers",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 8 secondsand when defeating an enemy, gain MP Recovery 30",
      "effect": "100% + 100",
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 3,
      "name": "Fragrant Blossoms",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +40 UP to self for 12 seconds and Action Speed UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to all enemies and inflicts Wind Type ATK UP(LV 1) for 5 secondsand when defeating an enemy, gain MP Recovery 40",
      "effect": "500% + 600",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv1",
          "value": 40,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 5,
      "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to all enemies and inflicts Wind Type ATK UP(LV 2) for 6 secondsand when defeating an enemy, gain MP Recovery 50",
      "effect": "700% + 800",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "MP Recovery Ultimate Lv2",
          "value": 50,
          "type": "percent"
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Ruru",
  "id": 2098,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 321,
    "MATK": 192,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "ruru"
};

export const stats = {
  "id": "ruru",
  "characterId": 2098,
  "name": "Ruru",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 321,
      "lv90": 1606
    },
    "matk": {
      "base": 192,
      "lv90": 963
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
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
      "HP": 546,
      "ATK": 96,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "ATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 130,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 297,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 779,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 120,
      "MP Cost Down": 4
    },
    "gp5": {
      "ATK": 200,
      "MP Cost Down": 4
    },
    "gp6": {
      "ATK": 200,
      "MP Cost Down": 5
    },
    "gp7": {
      "ATK": 280,
      "MP Cost Down": 5
    },
    "gp8": {
      "ATK": 280,
      "MP Cost Down": 6
    },
    "gp9": {
      "ATK": 360,
      "MP Cost Down": 6
    },
    "gp10": {
      "ATK": 360,
      "MP Cost Down": 7
    },
    "total": {
      "ATK": 360,
      "MP Cost Down": 7
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 34,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 47,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 54,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 61,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 68,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 74,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 81,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 88,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 536,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 27
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "ATK": 37
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "ATK": 48
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "ATK": 59
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "ATK": 70
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "ATK": 74
    }
  ]
};;;;;;;;
