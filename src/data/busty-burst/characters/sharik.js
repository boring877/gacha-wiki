// Character data: sharik
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sharik",
  "name": "Sharik",
  "displayName": "Sharik",
  "baseName": "Sharik",
  "title": null,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Sharik",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "97cm (J Cup)",
    "waist": "57cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "にゃこたろう",
      "romanized": ""
    },
    "voice": {
      "japanese": "背脂にぼし",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2155
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Eliminate enemies. Execute thoroughly.",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-210 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "110% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "110% + 80",
      "lvl90": "110% + -98",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Instant incapacitation. That's the best.",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 2",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 2",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 2",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "250% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+15",
      "lvl1": "250% + 150",
      "lvl90": null,
      "effects": [
        "Stun",
        "Cleanse"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Protect the target. That's my job.",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1100% + 500",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Protect the target. That's my job.",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1320% + 650",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Protect the target. That's my job.",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1470% + 800",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Protect the target. That's my job.",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1590% + 900",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Protect the target. That's my job.",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1700% + 1000",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Accuracy + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Sharik",
  "id": 2155,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1331,
    "ATK": 221,
    "MATK": 132,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.62"
  },
  "slug": "sharik"
};

export const stats = {
  "id": "sharik",
  "characterId": 2155,
  "name": "Sharik",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1331,
      "lv90": 6655
    },
    "atk": {
      "base": 221,
      "lv90": 1105
    },
    "matk": {
      "base": 132,
      "lv90": 662
    },
    "def": {
      "base": 208,
      "lv90": 354
    },
    "mdef": {
      "base": 83,
      "lv90": 229
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
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 66,
      "lv90": 232
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
      "base": 56,
      "lv90": 56
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
      "HP": 399,
      "ATK": 66,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 459,
      "ATK": 76,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 539,
      "ATK": 90,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 599,
      "ATK": 99,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1048,
      "ATK": 174,
      "DEF": 46,
      "MDEF": 21,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3044,
      "ATK": 505,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 46,
      "MDEF": 21,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 150,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 150,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 210,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 270,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 270,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 140,
      "ATK": 23,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 168,
      "ATK": 28,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 196,
      "ATK": 33,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 224,
      "ATK": 37,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 252,
      "ATK": 42,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 280,
      "ATK": 47,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 308,
      "ATK": 51,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 336,
      "ATK": 56,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 364,
      "ATK": 60,
      "Phys Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 392,
      "ATK": 65,
      "Phys Crit": 17,
      "MP Charge": 7
    },
    "total": {
      "HP": 392,
      "ATK": 65,
      "Phys Crit": 17,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 18
    },
    {
      "grade": 2,
      "HP": 120
    },
    {
      "grade": 3,
      "ATK": 26
    },
    {
      "grade": 4,
      "HP": 160
    },
    {
      "grade": 5,
      "ATK": 33
    },
    {
      "grade": 6,
      "HP": 200
    },
    {
      "grade": 7,
      "ATK": 41
    },
    {
      "grade": 8,
      "HP": 240
    },
    {
      "grade": 9,
      "ATK": 48
    },
    {
      "grade": 10,
      "HP": 280
    },
    {
      "grade": 11,
      "ATK": 53
    }
  ]
};;;;;;;;
