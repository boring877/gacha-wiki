// Character data: paladin-of-elron-luca
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "paladin-of-elron-luca",
  "name": "Paladin of Elron: Luca",
  "displayName": "Paladin of Elron: Luca",
  "baseName": "Luca",
  "title": "Paladin of Elron",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Luca",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "156cm",
    "bust": "94cm (H Cup)",
    "waist": "66cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "天知遥",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2180
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shatter & Slash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -25%-60 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -25%-60 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Defense -25%-420 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.85,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + 144",
      "effects": [
        "Stun",
        "Physical Defense - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Defense - LvMax",
          "value": -60,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -4.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Everything becomes my power!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Physical Attack 18%+35 UP for 10 seconds , all allies20 Hit-Based Physical Damage UP(45%+500, 3 hit(s))",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Physical Attack 18%+35 UP for 10 seconds , all allies20 Hit-Based Physical Damage UP(45%+500, 3 hit(s))",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Physical Attack 18%+665 UP for 10 seconds , all allies20 Hit-Based Physical Damage UP(45%+500, 45003 hit(s))",
      "target": "Self",
      "castTime": 0.9,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Physical Attack + Lv4",
        "Hit-Based Physical Damage + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Hit-Based Physical Damage + Lv4",
          "value": 3,
          "type": "flat",
          "duration": 20,
          "levelGrowth": 500.0
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lion Tail Gale",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 4 seconds and Wind Type Damage Taken UP(LV 1) for 8 seconds , 10 Physical Defense DOWN(LV 1)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
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
      "name": "Lion Tail Gale",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 5 seconds and Wind Type Damage Taken UP(LV 2) for 8 seconds , 10 Physical Defense DOWN(LV 2)",
      "effect": "1440% + 1400",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
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
      "name": "Lion Tail Gale",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 5 seconds and Wind Type Damage Taken UP(LV 3) for 8 seconds , 10 Physical Defense DOWN(LV 3)",
      "effect": "1620% + 1550",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
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
      "name": "Lion Tail Gale",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 6 seconds and Wind Type Damage Taken UP(LV 4) for 8 seconds , 10 Physical Defense DOWN(LV 4)",
      "effect": "1739% + 1700",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
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
      "name": "Lion Tail Gale",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 6 seconds and Wind Type Damage Taken UP(LV 5) for 8 seconds , 10 Physical Defense DOWN(LV 5)",
      "effect": "1800% + 1800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
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
      "name": "Skill Damage +, Wind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Wind Type ATK + (+3%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
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
      "name": "Ultimate Damage +, Debuff Resistance+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Paladin of Elron: Luca",
  "id": 2180,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2056,
    "ATK": 273,
    "MATK": 164,
    "DEF": 118,
    "MDEF": 118
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.45"
  },
  "slug": "paladin-of-elron-luca"
};

export const stats = {
  "id": "paladin-of-elron-luca",
  "characterId": 2180,
  "name": "【Paladin of Elron】Luca",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2056,
      "lv90": 10281
    },
    "atk": {
      "base": 273,
      "lv90": 1367
    },
    "matk": {
      "base": 164,
      "lv90": 820
    },
    "def": {
      "base": 118,
      "lv90": 236
    },
    "mdef": {
      "base": 118,
      "lv90": 236
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
      "base": 328,
      "lv90": 525
    },
    "magicCrit": {
      "base": 197,
      "lv90": 315
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
      "HP": 617,
      "ATK": 82,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 709,
      "ATK": 94,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 833,
      "ATK": 111,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 925,
      "ATK": 123,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1748,
      "ATK": 233,
      "DEF": 39,
      "MDEF": 24,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4832,
      "ATK": 643,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 39,
      "MDEF": 24,
      "Heal Pwr": 19
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
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "ATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "ATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "ATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 216,
      "ATK": 29,
      "Phys Crit": 7,
      "Accuracy": 9
    },
    "g2": {
      "HP": 260,
      "ATK": 35,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 303,
      "ATK": 40,
      "Phys Crit": 10,
      "Accuracy": 12
    },
    "g4": {
      "HP": 346,
      "ATK": 46,
      "Phys Crit": 11,
      "Block": 21
    },
    "g5": {
      "HP": 390,
      "ATK": 52,
      "Phys Crit": 12,
      "MP Charge": 4
    },
    "g6": {
      "HP": 433,
      "ATK": 58,
      "Phys Crit": 14,
      "Accuracy": 18
    },
    "g7": {
      "HP": 476,
      "ATK": 63,
      "Phys Crit": 15,
      "Block": 29
    },
    "g8": {
      "HP": 520,
      "ATK": 69,
      "Phys Crit": 17,
      "Accuracy": 21
    },
    "g9": {
      "HP": 563,
      "ATK": 75,
      "Phys Crit": 18,
      "Block": 34
    },
    "g10": {
      "HP": 606,
      "ATK": 81,
      "Phys Crit": 19,
      "MP Charge": 7
    },
    "total": {
      "HP": 606,
      "ATK": 81,
      "Phys Crit": 19,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Phys Crit": 12
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Phys Crit": 16
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Phys Crit": 20
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Phys Crit": 24
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Phys Crit": 28
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
