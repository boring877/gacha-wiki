// Character data: boob-shaking-cheerleader-nora
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "boob-shaking-cheerleader-nora",
  "name": "Boob-Shaking Cheerleader: Nora",
  "displayName": "Boob-Shaking Cheerleader: Nora",
  "baseName": "Nora",
  "title": "Boob-Shaking Cheerleader",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Nora",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "164cm",
    "bust": "98cm (H Cup)",
    "waist": "62cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "KEN",
      "romanized": ""
    },
    "voice": {
      "japanese": "綾音まこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2209
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Spinning Attack",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -220 DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": "110% + 138",
      "effects": [
        "Physical Defense - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
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
      "name": "Hurdle Kick",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Critical Damage-35 DOWN for 8 seconds , 8 Magic Critical Damage-35 DOWN",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Critical Damage-35 DOWN for 8 seconds , 8 Magic Critical Damage-35 DOWN",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Critical Damage-215 DOWN for 8 seconds , 8 Magic Critical Damage-35 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.15,
      "damageScaling": "350% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "350% + 300",
      "lvl90": "350% + 122",
      "effects": [
        "Stun",
        "Physical Critical Damage- Lv4",
        "Magic Critical Damage- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 8,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "All in．layout drop",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds , all allies10 Mind Type ATK UP(LV 1), 10 Accuracy UP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Spinning Attack",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "effect": "110% + 150",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hurdle Kick",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Physical Critical Damage-35 DOWN for 8 seconds , 8 Magic Critical Damage-35 DOWN",
      "effect": "350% + 300",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "All in．layout drop",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds , all allies10 Mind Type ATK UP(LV 1), 10 Accuracy UP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "All in．layout drop",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 2) for 10 seconds , all allies10 Mind Type ATK UP(LV 2), 10 Accuracy UP(LV 2)",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
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
  "name": "Boob-Shaking Cheerleader: Nora",
  "id": 2209,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 299,
    "MATK": 179,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.95"
  },
  "slug": "boob-shaking-cheerleader-nora"
};

export const stats = {
  "id": "boob-shaking-cheerleader-nora",
  "characterId": 2209,
  "name": "【Boob-Shaking Cheerleader】Nora",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 299,
      "lv90": 1495
    },
    "matk": {
      "base": 179,
      "lv90": 896
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
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
      "HP": 709,
      "ATK": 90,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 816,
      "ATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 121,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1064,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "ATK": 277,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5557,
      "ATK": 726,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Phys Crit": 30,
      "MP Charge": 2
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Charge": 4
    },
    "gp5": {
      "Phys Crit": 50,
      "MP Charge": 4
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Charge": 6
    },
    "gp7": {
      "Phys Crit": 70,
      "MP Charge": 6
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Charge": 8
    },
    "gp9": {
      "Phys Crit": 90,
      "MP Charge": 8
    },
    "gp10": {
      "Phys Crit": 90,
      "MP Charge": 10
    },
    "total": {
      "Phys Crit": 90,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 31,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 38,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 44,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 50,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 57,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 498,
      "ATK": 63,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 69,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 76,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 82,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 697,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 7
    },
    {
      "grade": 2,
      "ATK": 27
    },
    {
      "grade": 3,
      "Phys Crit": 10
    },
    {
      "grade": 4,
      "ATK": 36
    },
    {
      "grade": 5,
      "Phys Crit": 12
    },
    {
      "grade": 6,
      "ATK": 45
    },
    {
      "grade": 7,
      "Phys Crit": 15
    },
    {
      "grade": 8,
      "ATK": 54
    },
    {
      "grade": 9,
      "Phys Crit": 18
    },
    {
      "grade": 10,
      "ATK": 63
    },
    {
      "grade": 11,
      "Phys Crit": 20
    }
  ]
};;;;;;;;
