// Character data: lilith
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lilith",
  "name": "Lilith",
  "displayName": "Lilith",
  "baseName": "Lilith",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 250,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lilith",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "164cm",
    "bust": "95cm (H Cup)",
    "waist": "57cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
      "romanized": ""
    },
    "voice": {
      "japanese": "蒼乃むすび",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2113
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Agony Torment",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Deadly Poison(HP --500 per second, stackable) for 4 seconds and Accuracy -13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Deadly Poison(HP --500 per second, stackable) for 4 seconds and Accuracy -13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Deadly Poison(HP --5000 per second, stackable) for 4 seconds and Accuracy -26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.02,
      "damageScaling": "280% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "280% + 300",
      "lvl90": "280% + 286",
      "effects": [
        "Deadly Poison Lv5",
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Deadly Poison Lv5",
          "value": -500,
          "type": "flat",
          "duration": 4,
          "levelGrowth": -50.0
        },
        {
          "name": "Accuracy - Lv5",
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
      "name": "Blow away...",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -40 DOWN for 12 seconds , 12 Block-11 DOWN",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -40 DOWN for 12 seconds , 12 Block-11 DOWN",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -220 DOWN for 12 seconds , 12 Block-23 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": "330% + 488",
      "effects": [
        "Stun",
        "Physical Defense - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Soul Shatter - Beast's Lament",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, inflict 3s , 5s Curse for, self10 Physical Critical DamageUP(LV 1)",
      "effect": "1100% + 1000",
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
          "duration": 5
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Agony Torment",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Deadly Poison(HP --500 per second, stackable) for 4 seconds and Accuracy -13 DOWN for 6 seconds",
      "effect": "280% + 300",
      "buffEffects": [
        {
          "name": "Deadly Poison Lv5",
          "value": -500,
          "type": "flat",
          "duration": 4
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Blow away...",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -40 DOWN for 12 seconds , 12 Block-11 DOWN",
      "effect": "330% + 500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Soul Shatter - Beast's Lament",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, inflict 3s , 5s Curse for, self10 Physical Critical DamageUP(LV 1)",
      "effect": "1100% + 1000",
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
          "duration": 5
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Soul Shatter - Beast's Lament",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy, inflict 4s , 6s Curse for, self10 Physical Critical DamageUP(LV 2)",
      "effect": "1320% + 1300",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
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
  "name": "Lilith",
  "id": 2113,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2056,
    "ATK": 338,
    "MATK": 202,
    "DEF": 169,
    "MDEF": 67
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "lilith"
};

export const stats = {
  "id": "lilith",
  "characterId": 2113,
  "name": "Lilith",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2056,
      "lv90": 10281
    },
    "atk": {
      "base": 338,
      "lv90": 1690
    },
    "matk": {
      "base": 202,
      "lv90": 1013
    },
    "def": {
      "base": 169,
      "lv90": 287
    },
    "mdef": {
      "base": 67,
      "lv90": 185
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
      "base": 232,
      "lv90": 371
    },
    "magicCrit": {
      "base": 139,
      "lv90": 222
    },
    "hpRegen": {
      "base": 102,
      "lv90": 359
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
      "HP": 617,
      "ATK": 101,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 709,
      "ATK": 117,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 833,
      "ATK": 137,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 925,
      "ATK": 152,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1748,
      "ATK": 313,
      "DEF": 43,
      "MDEF": 19,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4832,
      "ATK": 820,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 43,
      "MDEF": 19,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 300,
      "ATK": 120
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 750,
      "ATK": 200
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1200,
      "ATK": 280
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 1650,
      "ATK": 360
    },
    "gp10": {
      "HP": 2100,
      "ATK": 360
    },
    "total": {
      "HP": 2100,
      "ATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 216,
      "ATK": 36,
      "Phys Crit": 5,
      "Accuracy": 9
    },
    "g2": {
      "HP": 260,
      "ATK": 43,
      "Phys Crit": 6,
      "Block": 16
    },
    "g3": {
      "HP": 303,
      "ATK": 50,
      "Phys Crit": 7,
      "Accuracy": 12
    },
    "g4": {
      "HP": 346,
      "ATK": 57,
      "Phys Crit": 8,
      "Block": 21
    },
    "g5": {
      "HP": 390,
      "ATK": 64,
      "Phys Crit": 9,
      "MP Charge": 5
    },
    "g6": {
      "HP": 433,
      "ATK": 71,
      "Phys Crit": 10,
      "Accuracy": 18
    },
    "g7": {
      "HP": 476,
      "ATK": 78,
      "Phys Crit": 11,
      "Block": 29
    },
    "g8": {
      "HP": 520,
      "ATK": 85,
      "Phys Crit": 12,
      "Accuracy": 21
    },
    "g9": {
      "HP": 563,
      "ATK": 93,
      "Phys Crit": 13,
      "Block": 34
    },
    "g10": {
      "HP": 606,
      "ATK": 100,
      "Phys Crit": 14,
      "MP Charge": 8
    },
    "total": {
      "HP": 606,
      "ATK": 100,
      "Phys Crit": 14,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 28
    },
    {
      "grade": 2,
      "Phys Crit": 8
    },
    {
      "grade": 3,
      "ATK": 39
    },
    {
      "grade": 4,
      "Phys Crit": 11
    },
    {
      "grade": 5,
      "ATK": 51
    },
    {
      "grade": 6,
      "Phys Crit": 14
    },
    {
      "grade": 7,
      "ATK": 62
    },
    {
      "grade": 8,
      "Phys Crit": 17
    },
    {
      "grade": 9,
      "ATK": 73
    },
    {
      "grade": 10,
      "Phys Crit": 20
    },
    {
      "grade": 11,
      "ATK": 77
    }
  ]
};;;;;;;;
