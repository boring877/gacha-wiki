// Character data: nora
// Merged from info/skills/stats files

export const info = {
  "slug": "nora",
  "name": "Nora",
  "displayName": "Nora",
  "baseName": "Nora",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 220,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Nora",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "164cm",
    "bust": "98cm (H Cup)",
    "waist": "62cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "KEN",
      "romanized": "KEN"
    },
    "voice": {
      "japanese": "\u7dbe\u97f3\u307e\u3053",
      "romanized": "Ayane Mako"
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
      "name": "Rock Burst",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-35 DOWN for 11 seconds and Magic Critical Damage-35 DOWN for 11 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-35 DOWN for 11 seconds and Magic Critical Damage-35 DOWN for 11 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-215 DOWN for 11 seconds and Magic Critical Damage-35 DOWN for 11 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "105% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "105% + 60",
      "lvl90": "105% + -118",
      "effects": [
        "Physical Critical Damage- Lv4",
        "Magic Critical Damage- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 11,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 11,
          "levelGrowth": -2.0
        }
      ],
      "duration": 11
    },
    {
      "slot": 3,
      "name": "Arm of Growth",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 10 seconds and Healing Shield (300) for 10 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 10 seconds and Healing Shield (300) for 10 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 10 seconds and Healing Shield (300) for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Healing Shield Lv5"
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
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Gigant’s Hammer",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "450% + 630",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rock Burst",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-35 DOWN for 11 seconds and Magic Critical Damage-35 DOWN for 11 seconds",
      "effect": "105% + 60",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 11
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 3,
      "name": "Arm of Growth",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 10 seconds and Healing Shield (300) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Gigant’s Hammer",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "450% + 630",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Gigant’s Hammer",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "630% + 748",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
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
  "name": "Nora",
  "id": 2057,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 258,
    "MATK": 155,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "nora"
};

export const stats = {
  "id": "nora",
  "characterId": 2057,
  "name": "Nora",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1951,
      "lv90": 9755
    },
    "atk": {
      "base": 258,
      "lv90": 1293
    },
    "matk": {
      "base": 155,
      "lv90": 775
    },
    "def": {
      "base": 343,
      "lv90": 686
    },
    "mdef": {
      "base": 137,
      "lv90": 274
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
      "base": 97,
      "lv90": 340
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
      "base": 79,
      "lv90": 79
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
      "HP": 585,
      "ATK": 78,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 673,
      "ATK": 89,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 790,
      "ATK": 105,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 878,
      "ATK": 116,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1658,
      "ATK": 225,
      "DEF": 99,
      "MDEF": 28,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4584,
      "ATK": 613,
      "Block": 83,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 99,
      "MDEF": 28,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 300,
      "Block": 7
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 750,
      "Block": 10
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1200,
      "Block": 13
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 1650,
      "Block": 16
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 205,
      "ATK": 27,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 246,
      "ATK": 33,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 288,
      "ATK": 38,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 329,
      "ATK": 44,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 370,
      "ATK": 49,
      "Phys Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 411,
      "ATK": 54,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 452,
      "ATK": 60,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 493,
      "ATK": 65,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 534,
      "ATK": 71,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 575,
      "ATK": 76,
      "Phys Crit": 12,
      "MP Charge": 10
    },
    "total": {
      "HP": 575,
      "ATK": 76,
      "Phys Crit": 12,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Accuracy": 3
    },
    {
      "grade": 2,
      "HP Regen": 9
    },
    {
      "grade": 3,
      "Accuracy": 4
    },
    {
      "grade": 4,
      "HP Regen": 12
    },
    {
      "grade": 5,
      "Accuracy": 5
    },
    {
      "grade": 6,
      "HP Regen": 15
    },
    {
      "grade": 7,
      "Accuracy": 6
    },
    {
      "grade": 8,
      "HP Regen": 18
    },
    {
      "grade": 9,
      "Accuracy": 7
    },
    {
      "grade": 10,
      "HP Regen": 20
    },
    {
      "grade": 11,
      "Accuracy": 7
    }
  ]
};;;;;;;;
