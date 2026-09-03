// Character data: shahar
// Auto-generated from game data

export const info = {
  "slug": "shahar",
  "name": "Shahar",
  "displayName": "Shahar",
  "baseName": "Shahar",
  "title": null,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 360,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Shahar",
  "introduction": "Middle RowPhysicalAttacker",
  "profile": {
    "height": "162cm",
    "bust": "104cm (J Cup)",
    "waist": "55cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "和葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2016
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Scattering Claws",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+20",
      "lvl1": "270% + 80",
      "lvl90": "270% + 1860",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Temptation",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-15 DOWN for 10 seconds and Magic Attack -7%-15 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-15 DOWN for 10 seconds and Magic Attack -7%-15 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-105 DOWN for 10 seconds and Magic Attack -7%-105 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "125% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "125% + 60",
      "lvl90": "125% + -29",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1030% + 692",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1236% + 785",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1390% + 864",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1490% + 923",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1600% + 1005",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax",
      "icon": "skill001/skill1003",
      "description": "Gain Charm Resistance UP",
      "effect": "Charm Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent",
          "gameText": "Charm Resistance UP"
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
  "name": "Shahar",
  "id": 2016,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 210,
    "MATK": 126,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "shahar"
};

export const stats = {
  "id": "shahar",
  "characterId": 2016,
  "name": "Shahar",
  "rarity": "R",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1491,
      "lv90": 7456
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
      "base": 117,
      "lv90": 234
    },
    "mdef": {
      "base": 46,
      "lv90": 92
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
      "base": 278,
      "lv90": 445
    },
    "magicCrit": {
      "base": 167,
      "lv90": 267
    },
    "hpRegen": {
      "base": 74,
      "lv90": 260
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
      "base": 76,
      "lv90": 76
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
      "HP": 447,
      "ATK": 63,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 515,
      "ATK": 73,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 604,
      "ATK": 85,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 671,
      "ATK": 95,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1200,
      "ATK": 169,
      "DEF": 30,
      "MDEF": 5,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3437,
      "ATK": 485,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 30,
      "MDEF": 5,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "Accuracy": 1
    },
    "gp2": {
      "ATK": 20,
      "Accuracy": 1
    },
    "gp3": {
      "ATK": 20,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 60,
      "Accuracy": 3
    },
    "gp5": {
      "ATK": 60,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 100,
      "Accuracy": 5
    },
    "gp7": {
      "ATK": 100,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 140,
      "Accuracy": 7
    },
    "gp9": {
      "ATK": 140,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 180,
      "Accuracy": 9
    },
    "total": {
      "ATK": 180,
      "Accuracy": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 157,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 188,
      "ATK": 27,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 220,
      "ATK": 31,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 251,
      "ATK": 35,
      "Phys Crit": 9,
      "Block": 23
    },
    "g5": {
      "HP": 283,
      "ATK": 40,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 314,
      "ATK": 44,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 345,
      "ATK": 49,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 377,
      "ATK": 53,
      "Phys Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 408,
      "ATK": 58,
      "Phys Crit": 15,
      "Block": 38
    },
    "g10": {
      "HP": 440,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 10
    },
    "total": {
      "HP": 440,
      "ATK": 62,
      "Phys Crit": 16,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 124
    },
    {
      "grade": 2,
      "ATK": 19
    },
    {
      "grade": 3,
      "HP": 174
    },
    {
      "grade": 4,
      "ATK": 25
    },
    {
      "grade": 5,
      "HP": 224
    },
    {
      "grade": 6,
      "ATK": 32
    },
    {
      "grade": 7,
      "HP": 273
    },
    {
      "grade": 8,
      "ATK": 38
    },
    {
      "grade": 9,
      "HP": 323
    },
    {
      "grade": 10,
      "ATK": 44
    },
    {
      "grade": 11,
      "HP": 359
    }
  ]
};;;
