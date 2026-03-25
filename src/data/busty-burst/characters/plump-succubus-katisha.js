// Character data: plump-succubus-katisha
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "plump-succubus-katisha",
  "name": "Plump Succubus: Katisha",
  "displayName": "Plump Succubus: Katisha",
  "baseName": "Katisha",
  "title": "Plump Succubus",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Katisha",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "120cm (Q Cup)",
    "waist": "63cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "れむ",
      "romanized": ""
    },
    "voice": {
      "japanese": "柚木サチ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2172
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "The weight of justice!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 6 seconds and applies Action Speed 14%UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 6 seconds and applies Action Speed 14%UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -23 DOWN for 6 seconds and applies Action Speed 14%UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "360% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "360% + 300",
      "lvl90": null,
      "effects": [
        "Accuracy - Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Mm, mmhmm~ mm...!",
      "icon": "skill001/skill0011",
      "description": "to 3 nearest enemies2s Charm for and Physical Defense -18%-30 DOWN for 10 seconds , 10 Action Speed -11%DOWN",
      "descriptionLv1": "to 3 nearest enemies2s Charm for and Physical Defense -18%-30 DOWN for 10 seconds , 10 Action Speed -11%DOWN",
      "descriptionLv90": "to 3 nearest enemies2s Charm for and Physical Defense -18%-210 DOWN for 10 seconds , 10 Action Speed -11%DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Physical Defense - Lv3",
        "Action Speed - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Action Speed - Lv2",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ah wah wah, I'm falling!?",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 1)",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ah wah wah, I'm falling!?",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 2)",
      "effect": "1320% + 1200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ah wah wah, I'm falling!?",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 3)",
      "effect": "1470% + 1350",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ah wah wah, I'm falling!?",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 5 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 4)",
      "effect": "1590% + 1500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ah wah wah, I'm falling!?",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 5 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 5)",
      "effect": "1700% + 1600",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Accuracy +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Accuracy + (+20), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 200,
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
  "name": "Plump Succubus: Katisha",
  "id": 2172,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 321,
    "MATK": 192,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1"
  },
  "slug": "plump-succubus-katisha"
};

export const stats = {
  "id": "plump-succubus-katisha",
  "characterId": 2172,
  "name": "【Plump Succubus】Katisha",
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
      "base": 321,
      "lv90": 1606
    },
    "matk": {
      "base": 192,
      "lv90": 963
    },
    "def": {
      "base": 57,
      "lv90": 114
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
      "base": 65,
      "lv90": 65
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
      "ATK": 96,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "ATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 130,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "ATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 298,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 780,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 19,
      "MDEF": 12,
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
      "HP": 220,
      "ATK": 34,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 47,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 54,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 61,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "ATK": 68,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 74,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 81,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 88,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 8
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
      "ATK": 77
    }
  ]
};;;;;;;;
