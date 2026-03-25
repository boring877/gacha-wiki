// Character data: big-wave-surfing-of-love-priscilla
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "big-wave-surfing-of-love-priscilla",
  "name": "Big Wave surfing of Love: Priscilla",
  "displayName": "Big Wave surfing of Love: Priscilla",
  "baseName": "Priscilla",
  "title": "Big Wave surfing of Love",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 235,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Priscilla",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "155cm",
    "bust": "98cm (I Cup)",
    "waist": "57cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "KeG",
      "romanized": ""
    },
    "voice": {
      "japanese": "犀川ささめ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2150
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Hey... yah...",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Block-23 DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.91,
      "damageScaling": "100% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "100% + 150",
      "lvl90": "100% + 138",
      "effects": [
        "Block- Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Ubi, defeat it...",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , 5s Curse for",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , 5s Curse for",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , 5s Curse for",
      "target": "Nearest Enemy",
      "castTime": 0.91,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": null,
      "effects": [
        "Stun",
        "Curse"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The surging current that fills my world",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken UP(LV 1) for 8 seconds and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "The surging current that fills my world",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken UP(LV 2) for 8 seconds and Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1440% + 1500",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "The surging current that fills my world",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken UP(LV 3) for 8 seconds and Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "1620% + 1750",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The surging current that fills my world",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken UP(LV 4) for 8 seconds and Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "1739% + 2000",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "The surging current that fills my world",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken UP(LV 5) for 8 seconds and Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "1800% + 2200",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Wind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Wind Type ATK + (+3%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Wind Type ATK +",
          "value": 3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Big Wave surfing of Love: Priscilla",
  "id": 2150,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 242,
    "MATK": 145,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.6"
  },
  "slug": "big-wave-surfing-of-love-priscilla"
};

export const stats = {
  "id": "big-wave-surfing-of-love-priscilla",
  "characterId": 2150,
  "name": "【Big Wave surfing of Love】Priscilla",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 242,
      "lv90": 1210
    },
    "matk": {
      "base": 145,
      "lv90": 725
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
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
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "base": 55,
      "lv90": 55
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
      "HP": 628,
      "ATK": 73,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 98,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 941,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 206,
      "DEF": 24,
      "MDEF": 7,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4917,
      "ATK": 569,
      "Block": 75,
      "MP Charge": 15,
      "Accuracy": 30,
      "DEF": 24,
      "MDEF": 7,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 20
    },
    "gp2": {
      "Phys Crit": 20,
      "MP Cost Down": 3
    },
    "gp3": {
      "Phys Crit": 50,
      "MP Cost Down": 3
    },
    "gp4": {
      "Phys Crit": 50,
      "MP Cost Down": 5
    },
    "gp5": {
      "Phys Crit": 80,
      "MP Cost Down": 5
    },
    "gp6": {
      "Phys Crit": 80,
      "MP Cost Down": 6
    },
    "gp7": {
      "Phys Crit": 110,
      "MP Cost Down": 6
    },
    "gp8": {
      "Phys Crit": 110,
      "MP Cost Down": 7
    },
    "gp9": {
      "Phys Crit": 140,
      "MP Cost Down": 7
    },
    "gp10": {
      "Phys Crit": 140,
      "MP Cost Down": 8
    },
    "total": {
      "Phys Crit": 140,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 31,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 36,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 41,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 46,
      "Phys Crit": 12,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "ATK": 51,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 56,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 61,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 66,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 10
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "Phys Crit": 14
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "Phys Crit": 18
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "Phys Crit": 22
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "Phys Crit": 26
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "Phys Crit": 29
    }
  ]
};;;;;;;;
