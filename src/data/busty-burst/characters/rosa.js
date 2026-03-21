// Character data: rosa
// Merged from info/skills/stats files

export const info = {
  "slug": "rosa",
  "name": "Rosa",
  "displayName": "Rosa",
  "baseName": "Rosa",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 440,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Rosa",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "110cm (M Cup)",
    "waist": "61cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30a2\u30de\u30df\u30e4",
      "romanized": "Amamiya"
    },
    "voice": {
      "japanese": "\u699b\u540d\u308c\u3093",
      "romanized": "Haruna Ren"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "February 2025 Update"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rhapsody of the Goddess",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, and when the skill activates, applies Physical Attack +40 UP to self for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, and when the skill activates, applies Physical Attack +40 UP to self for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, and when the skill activates, applies Physical Attack +850 UP to self for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "450% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "450% + 500",
      "lvl90": "450% + 1301",
      "effects": [
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Glorious Triumph",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to all allies for 7 seconds and Accuracy 9 UP for 7 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 40 UP to all allies for 7 seconds and Accuracy 9 UP for 7 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 40 UP to all allies for 7 seconds and Accuracy 18 UP for 7 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 7,
          "levelGrowth": 5.0
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 0.1
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds and applies BlockDOWN(LV 1) to self for 10 seconds",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rhapsody of the Goddess",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, and when the skill activates, applies Physical Attack +40 UP to self for 10 seconds",
      "effect": "450% + 500",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Glorious Triumph",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to all allies for 7 seconds and Accuracy 9 UP for 7 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds and applies BlockDOWN(LV 1) to self for 10 seconds",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 2) for 10 seconds and applies BlockDOWN(LV 2) to self for 10 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 9
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Rosa",
  "id": 2085,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 336,
    "MATK": 201,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "rosa"
};

export const stats = {
  "id": "rosa",
  "characterId": 2085,
  "name": "Rosa",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 336,
      "lv90": 1681
    },
    "matk": {
      "base": 201,
      "lv90": 1008
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "HP": 546,
      "ATK": 101,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "ATK": 116,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 136,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 151,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 311,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 815,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 35,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 42,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 50,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 57,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 64,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 71,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 78,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 85,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 92,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 99,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 536,
      "ATK": 99,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 28
    },
    {
      "grade": 2,
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "ATK": 39
    },
    {
      "grade": 4,
      "Phys Crit": 10
    },
    {
      "grade": 5,
      "ATK": 50
    },
    {
      "grade": 6,
      "Phys Crit": 12
    },
    {
      "grade": 7,
      "ATK": 62
    },
    {
      "grade": 8,
      "Phys Crit": 15
    },
    {
      "grade": 9,
      "ATK": 73
    },
    {
      "grade": 10,
      "Phys Crit": 17
    },
    {
      "grade": 11,
      "ATK": 77
    }
  ]
};;;;;;;;
