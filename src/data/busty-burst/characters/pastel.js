// Character data: pastel
// Merged from info/skills/stats files

export const info = {
  "slug": "pastel",
  "name": "Pastel",
  "displayName": "Pastel",
  "baseName": "Pastel",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slightly Slow",
  "range": 500,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Buff",
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "image": "Pastel",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "160cm",
    "bust": "99cm (J Cup)",
    "waist": "59cm",
    "hips": "86cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": "Aotonbo"
    },
    "voice": {
      "japanese": "\u5c0f\u5009\u7d50\u8863",
      "romanized": "Ogura Yui"
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
      "name": "Abstract Art: Endless Desire",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Burn(HP --150 per second) for 12 seconds and Accuracy -13 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Burn(HP --150 per second) for 12 seconds and Accuracy -13 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Burn(HP --1500 per second) for 12 seconds and Accuracy -26 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "80% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "80% + 70",
      "lvl90": "80% + 56",
      "effects": [
        "Burn Lv5",
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -15.0
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.15
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Winterscape: Towering Glacier",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to all allies for 8 seconds and Healing Shield (270) for 15 seconds",
      "descriptionLv1": "Applies Block 9 UP to all allies for 8 seconds and Healing Shield (270) for 15 seconds",
      "descriptionLv90": "Applies Block 18 UP to all allies for 8 seconds and Healing Shield (270) for 15 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "Healing Shield Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        },
        {
          "name": "Healing Shield Lv4",
          "value": 270,
          "type": "percent",
          "duration": 15
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Silence for 3 seconds, and inflicts HP RegenerationUP(LV 1) to all allies for 8 seconds",
      "effect": "250% + 350",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV 2) to all allies for 8 seconds",
      "effect": "330% + 450",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 7,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV 3) to all allies for 8 seconds",
      "effect": "400% + 530",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 8,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV 4) to all allies for 8 seconds",
      "effect": "450% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 9,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV 5) to all allies for 8 seconds",
      "effect": "500% + 650",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Debuff Resistance +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Pastel",
  "id": 2080,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 363,
    "MATK": 218,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "pastel"
};

export const stats = {
  "id": "pastel",
  "characterId": 2080,
  "name": "Pastel",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
    },
    "atk": {
      "base": 363,
      "lv90": 1817
    },
    "matk": {
      "base": 218,
      "lv90": 1090
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 137,
      "lv90": 480
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
      "base": 67,
      "lv90": 67
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
      "HP": 824,
      "ATK": 109,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 947,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "ATK": 147,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1236,
      "ATK": 164,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2334,
      "ATK": 309,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6453,
      "ATK": 854,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "HP": 300,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 300,
      "MP Charge": 5
    },
    "gp4": {
      "HP": 750,
      "MP Charge": 5
    },
    "gp5": {
      "HP": 750,
      "MP Charge": 7
    },
    "gp6": {
      "HP": 1200,
      "MP Charge": 7
    },
    "gp7": {
      "HP": 1200,
      "MP Charge": 9
    },
    "gp8": {
      "HP": 1650,
      "MP Charge": 9
    },
    "gp9": {
      "HP": 1650,
      "MP Charge": 11
    },
    "gp10": {
      "HP": 2100,
      "MP Charge": 11
    },
    "total": {
      "HP": 2100,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "ATK": 38,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "ATK": 46,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "ATK": 54,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "ATK": 61,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "ATK": 69,
      "Phys Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 578,
      "ATK": 77,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "ATK": 84,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "ATK": 92,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "ATK": 100,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "ATK": 107,
      "Phys Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 809,
      "ATK": 107,
      "Phys Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 4
    },
    {
      "grade": 2,
      "HP": 247
    },
    {
      "grade": 3,
      "Block": 6
    },
    {
      "grade": 4,
      "HP": 329
    },
    {
      "grade": 5,
      "Block": 8
    },
    {
      "grade": 6,
      "HP": 412
    },
    {
      "grade": 7,
      "Block": 9
    },
    {
      "grade": 8,
      "HP": 494
    },
    {
      "grade": 9,
      "Block": 11
    },
    {
      "grade": 10,
      "HP": 577
    },
    {
      "grade": 11,
      "Block": 12
    }
  ]
};;;;;;;;
