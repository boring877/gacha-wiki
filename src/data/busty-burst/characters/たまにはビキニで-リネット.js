// Character data: たまにはビキニで-リネット
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "たまにはビキニで-リネット",
  "name": "たまにはビキニで: リネット",
  "displayName": "たまにはビキニで: リネット",
  "baseName": "リネット",
  "title": "たまにはビキニで",
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 500,
  "weaponType": "Throw",
  "skillTypes": [
    "回復、強化、弱體化、妨害"
  ],
  "image": "リネット",
  "introduction": null,
  "profile": {
    "height": "155cm",
    "bust": "97cm (K Cup)",
    "waist": "56cm",
    "hips": "79cm"
  },
  "credits": {
    "illustration": {
      "japanese": "瑠璃ららこ",
      "romanized": ""
    },
    "voice": {
      "japanese": "朝井こもも",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2236
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Don't interfere with cooking!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(HP --100 per second) for 20 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Burn(HP --100 per second) for 20 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Burn(HP --1270 per second) for 20 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "310% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+15",
      "lvl1": "310% + 150",
      "lvl90": "310% + -1007",
      "effects": [
        "Burn Lv4"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv4",
          "value": -100,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -13.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "Let's eat~!",
      "icon": "skill001/skill0021",
      "description": "Restores HP to 3 nearest allies and inflicts Hit-Based Physical Damage UP(45%+500, 3 hit(s)) for 10 seconds and Accuracy 9 UP for 10 seconds",
      "descriptionLv1": "Restores HP to 3 nearest allies and inflicts Hit-Based Physical Damage UP(45%+500, 3 hit(s)) for 10 seconds and Accuracy 9 UP for 10 seconds",
      "descriptionLv90": "Restores HP to 45003 nearest allies and inflicts Hit-Based Physical Damage UP(45%+500, 3 hit(s)) for 10 seconds and Accuracy 18 UP for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.25,
      "damageScaling": "1000% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "1000% + 250",
      "lvl90": "1000% + 258",
      "effects": [
        "Hit-Based Physical Damage + Lv4",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Lv4",
          "value": 3,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 500.0
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Margaret's Special - Big Bang Serve!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1100% + 600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Margaret's Special - Big Bang Serve!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1320% + 750",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Margaret's Special - Big Bang Serve!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "1470% + 900",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Margaret's Special - Big Bang Serve!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "1590% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Margaret's Special - Big Bang Serve!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "1700% + 1100",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Received +",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+10%)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "たまにはビキニで: リネット",
  "id": 2236,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "回復、強化、弱體化、妨害"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 284,
    "MATK": 170,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.15"
  },
  "slug": "たまにはビキニで-リネット"
};

export const stats = {
  "id": "たまにはビキニで-リネット",
  "characterId": 2236,
  "name": "【たまにはビキニで】リネット",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "回復、強化、弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 2159,
      "lv90": 10795
    },
    "atk": {
      "base": 284,
      "lv90": 1420
    },
    "matk": {
      "base": 170,
      "lv90": 851
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
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
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 107,
      "lv90": 376
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 74,
      "lv90": 74
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
      "HP": 648,
      "ATK": 85,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 745,
      "ATK": 98,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 874,
      "ATK": 115,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 972,
      "ATK": 128,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1583,
      "ATK": 224,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 4822,
      "ATK": 650,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 130,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 130,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 170,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 170,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 210,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 210,
      "Accuracy": 11
    },
    "total": {
      "ATK": 210,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 227,
      "ATK": 30,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 36,
      "Phys Crit": 7,
      "Block": 16
    },
    "g3": {
      "HP": 318,
      "ATK": 42,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 48,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 409,
      "ATK": 54,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 455,
      "ATK": 60,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 66,
      "Phys Crit": 13,
      "Block": 29
    },
    "g8": {
      "HP": 545,
      "ATK": 72,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 78,
      "Phys Crit": 16,
      "Block": 34
    },
    "g10": {
      "HP": 636,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 10
    },
    "total": {
      "HP": 636,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "ATK": 26
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "ATK": 34
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "ATK": 43
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "ATK": 51
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "ATK": 60
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
