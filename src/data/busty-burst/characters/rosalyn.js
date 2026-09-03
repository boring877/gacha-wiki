// Character data: rosalyn
// Auto-generated from game data

export const info = {
  "slug": "rosalyn",
  "name": "Rosalyn",
  "displayName": "Rosalyn",
  "baseName": "Rosalyn",
  "title": null,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Rosalyn",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "166cm",
    "bust": "97cm (I Cup)",
    "waist": "59cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "蕪木徹子",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2011
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Princess Pirate’s Strike",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "265% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+16",
      "lvl1": "265% + 80",
      "lvl90": "265% + -98",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Women are full of love and mystery, you know ",
      "icon": "skill001/skill0019",
      "description": "Applies Block 5 UP to all allies for 10 seconds and Physical Defense 10%+50 UP for 10 seconds",
      "descriptionLv1": "Applies Block 5 UP to all allies for 10 seconds and Physical Defense 10%+50 UP for 10 seconds",
      "descriptionLv90": "Applies Block 10 UP to all allies for 10 seconds and Physical Defense 10%+140 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv1",
        "Physical Defense + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.05
        },
        {
          "name": "Physical Defense + Lv1",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "310% + 266",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "370% + 307",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "416% + 346",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "447% + 379",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "478% + 402",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "description": "Gain Physical Defense UP (Small)",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat",
          "gameText": "Physical Defense UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Critical Damage UP (Small)",
      "effect": "Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Small)"
        }
      ]
    }
  ],
  "name": "Rosalyn",
  "id": 2011,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1452,
    "ATK": 210,
    "MATK": 126,
    "DEF": 199,
    "MDEF": 79
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "rosalyn"
};

export const stats = {
  "id": "rosalyn",
  "characterId": 2011,
  "name": "Rosalyn",
  "rarity": "R",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1452,
      "lv90": 7260
    },
    "atk": {
      "base": 210,
      "lv90": 1051
    },
    "matk": {
      "base": 126,
      "lv90": 630
    },
    "def": {
      "base": 199,
      "lv90": 398
    },
    "mdef": {
      "base": 79,
      "lv90": 158
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 278,
      "lv90": 445
    },
    "magicCrit": {
      "base": 167,
      "lv90": 267
    },
    "hpRegen": {
      "base": 72,
      "lv90": 253
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
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
      "HP": 436,
      "ATK": 63,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 501,
      "ATK": 73,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 588,
      "ATK": 85,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 653,
      "ATK": 95,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1060,
      "ATK": 170,
      "DEF": 51,
      "MDEF": 13,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3238,
      "ATK": 486,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 51,
      "MDEF": 13,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "ATK": 20
    },
    "gp3": {
      "HP": 500,
      "ATK": 20
    },
    "gp4": {
      "HP": 500,
      "ATK": 60
    },
    "gp5": {
      "HP": 800,
      "ATK": 60
    },
    "gp6": {
      "HP": 800,
      "ATK": 100
    },
    "gp7": {
      "HP": 1100,
      "ATK": 100
    },
    "gp8": {
      "HP": 1100,
      "ATK": 140
    },
    "gp9": {
      "HP": 1400,
      "ATK": 140
    },
    "gp10": {
      "HP": 1400,
      "ATK": 180
    },
    "total": {
      "HP": 1400,
      "ATK": 180
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 183,
      "ATK": 27,
      "Phys Crit": 7,
      "Block": 14
    },
    "g3": {
      "HP": 214,
      "ATK": 31,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 245,
      "ATK": 35,
      "Phys Crit": 9,
      "Block": 19
    },
    "g5": {
      "HP": 275,
      "ATK": 40,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 306,
      "ATK": 44,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 336,
      "ATK": 49,
      "Phys Crit": 13,
      "Block": 26
    },
    "g8": {
      "HP": 367,
      "ATK": 53,
      "Phys Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 397,
      "ATK": 58,
      "Phys Crit": 15,
      "Block": 31
    },
    "g10": {
      "HP": 428,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 8
    },
    "total": {
      "HP": 428,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 18
    },
    {
      "grade": 2,
      "Block": 4
    },
    {
      "grade": 3,
      "ATK": 25
    },
    {
      "grade": 4,
      "Block": 5
    },
    {
      "grade": 5,
      "ATK": 32
    },
    {
      "grade": 6,
      "Block": 7
    },
    {
      "grade": 7,
      "ATK": 39
    },
    {
      "grade": 8,
      "Block": 8
    },
    {
      "grade": 9,
      "ATK": 46
    },
    {
      "grade": 10,
      "Block": 9
    },
    {
      "grade": 11,
      "ATK": 51
    }
  ]
};;;
