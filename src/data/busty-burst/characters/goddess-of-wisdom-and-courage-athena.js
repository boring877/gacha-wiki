// Character data: goddess-of-wisdom-and-courage-athena
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "goddess-of-wisdom-and-courage-athena",
  "name": "Goddess of Wisdom and Courage: Athena",
  "displayName": "Goddess of Wisdom and Courage: Athena",
  "baseName": "Athena",
  "title": "Goddess of Wisdom and Courage",
  "rarity": "SSR",
  "element": "Light",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Athena",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "170cm",
    "bust": "110cm (M Cup)",
    "waist": "62cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "ももぞの薫",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2207
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Polycos",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds , 6 Block-13 DOWN",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds , 6 Block-13 DOWN",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-205 DOWN for 6 seconds and Magic Attack -11%-205 DOWN for 6 seconds , 6 Block-26 DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "380% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+20",
      "lvl1": "380% + 350",
      "lvl90": "380% + 336",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
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
      "name": "Paladion",
      "icon": "skill001/skill0025",
      "description": "Restores own HP by and inflicts Physical Defense 30%+190 UP for 12 seconds and Magic Defense 30%+190 UP for 12 seconds , all allies12 Hit-Based Shield (40%+4 hit(s))",
      "descriptionLv1": "Restores own HP by and inflicts Physical Defense 30%+190 UP for 12 seconds and Magic Defense 30%+190 UP for 12 seconds , all allies12 Hit-Based Shield (40%+4 hit(s))",
      "descriptionLv90": "Restores own HP by and inflicts Physical Defense 30%+460 UP for 12 seconds and Magic Defense 30%+460 UP for 12 seconds , all allies12 Hit-Based Shield (40%+4 hit(s))",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": "2000% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+60",
      "lvl1": "2000% + 500",
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv5",
        "Magic Defense+ Lv5",
        "Hit-Based Shield"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv5",
          "value": 190,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Magic Defense+ Lv5",
          "value": 190,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Hit-Based Shield",
          "value": 40,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 3s , 5 , 10 Physical Defense DOWN(LV 1)",
      "effect": "1400% + 800",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
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
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 4s , 6 , 10 Physical Defense DOWN(LV 2)",
      "effect": "1680% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
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
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 4s , 6 , 10 Physical Defense DOWN(LV 3)",
      "effect": "1889% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
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
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 5s , 7 , 10 Physical Defense DOWN(LV 4)",
      "effect": "2030% + 1350",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 7
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
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 5s , 7 , 10 Physical Defense DOWN(LV 5)",
      "effect": "2100% + 1500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 7
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
      "name": "Damage UP, Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent"
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
  "name": "Goddess of Wisdom and Courage: Athena",
  "id": 2207,
  "rarity": "SSR",
  "element": "Light",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2069,
    "ATK": 166,
    "MATK": 100,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "goddess-of-wisdom-and-courage-athena"
};

export const stats = {
  "id": "goddess-of-wisdom-and-courage-athena",
  "characterId": 2207,
  "name": "【Goddess of Wisdom and Courage】Athena",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2069,
      "lv90": 10345
    },
    "atk": {
      "base": 166,
      "lv90": 833
    },
    "matk": {
      "base": 100,
      "lv90": 500
    },
    "def": {
      "base": 192,
      "lv90": 384
    },
    "mdef": {
      "base": 288,
      "lv90": 576
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
      "base": 103,
      "lv90": 361
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 52,
      "lv90": 52
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
      "HP": 621,
      "ATK": 50,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 714,
      "ATK": 58,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 838,
      "ATK": 68,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 931,
      "ATK": 75,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1914,
      "ATK": 155,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5018,
      "ATK": 406,
      "Block": 75,
      "MP Charge": 11,
      "Accuracy": 30,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 750,
      "ATK": 40
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 1200,
      "ATK": 120
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1650,
      "ATK": 200
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 2100,
      "ATK": 280
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
      "HP": 218,
      "ATK": 18,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 261,
      "ATK": 21,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 305,
      "ATK": 25,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 348,
      "ATK": 28,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 392,
      "ATK": 32,
      "Phys Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 436,
      "ATK": 35,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 479,
      "ATK": 39,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 523,
      "ATK": 42,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 566,
      "ATK": 46,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 610,
      "ATK": 49,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 610,
      "ATK": 49,
      "Phys Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 14
    },
    {
      "grade": 2,
      "HP": 186
    },
    {
      "grade": 3,
      "ATK": 19
    },
    {
      "grade": 4,
      "HP": 248
    },
    {
      "grade": 5,
      "ATK": 25
    },
    {
      "grade": 6,
      "HP": 310
    },
    {
      "grade": 7,
      "ATK": 31
    },
    {
      "grade": 8,
      "HP": 372
    },
    {
      "grade": 9,
      "ATK": 36
    },
    {
      "grade": 10,
      "HP": 435
    },
    {
      "grade": 11,
      "ATK": 40
    }
  ]
};;;;;;;;
