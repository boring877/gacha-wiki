// Character data: estiriel
// Merged from info/skills/stats files

export const info = {
  "slug": "estiriel",
  "name": "Estiriel",
  "displayName": "Estiriel",
  "baseName": "Estiriel",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "image": "Estiriel",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30b5\u30d6\u30ed\u30fc",
      "romanized": "Saburo"
    },
    "voice": {
      "japanese": "\u7f8e\u7a7a\u306a\u3064\u3072",
      "romanized": "Misora Natsuhi"
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
      "name": "Sylvesto",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the farthest enemy and inflicts Physical Defense -18%-30 DOWN for 5 seconds and Magic Defense-18%-30 DOWN for 5 seconds",
      "descriptionLv1": "Deals magic damage to the farthest enemy and inflicts Physical Defense -18%-30 DOWN for 5 seconds and Magic Defense-18%-30 DOWN for 5 seconds",
      "descriptionLv90": "Deals magic damage to the farthest enemy and inflicts Physical Defense -18%-210 DOWN for 5 seconds and Magic Defense-18%-210 DOWN for 5 seconds",
      "target": "Back Enemy",
      "castTime": 1.38,
      "damageScaling": "320% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "320% + 150",
      "lvl90": "320% + -28",
      "effects": [
        "Physical Defense - Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Defense- Lv3",
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
      "name": "Guardian of the Little Dwarves",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration 3%+50 to all allies for 10 seconds and Block 7 UP for 10 seconds",
      "descriptionLv1": "Applies HP Regeneration 3%+50 to all allies for 10 seconds and Block 7 UP for 10 seconds",
      "descriptionLv90": "Applies HP Regeneration 3%+50 to all allies for 10 seconds and Block 14 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv1",
        "Block+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv1",
          "value": 3,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Block+ Lv2",
          "value": 7,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.08
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "550% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "750% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "900% + 550",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to all enemies and inflicts Action Speed DOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "1100% + 680",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1006",
      "effect": "Magic Attack + (+259), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
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
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Healing Received + (+20%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Estiriel",
  "id": 2053,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 166,
    "MATK": 276,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "estiriel"
};

export const stats = {
  "id": "estiriel",
  "characterId": 2053,
  "name": "Estiriel",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 166,
      "lv90": 830
    },
    "matk": {
      "base": 276,
      "lv90": 1382
    },
    "def": {
      "base": 90,
      "lv90": 180
    },
    "mdef": {
      "base": 226,
      "lv90": 452
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
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
    },
    "hpRegen": {
      "base": 72,
      "lv90": 254
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
      "base": 82,
      "lv90": 82
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
      "HP": 437,
      "MATK": 83,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 503,
      "MATK": 95,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "MATK": 112,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 656,
      "MATK": 124,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1239,
      "MATK": 256,
      "DEF": 18,
      "MDEF": 64,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3425,
      "MATK": 670,
      "Block": 83,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 18,
      "MDEF": 64,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "Block": 3,
      "MP Charge": 3
    },
    "gp3": {
      "Block": 7,
      "MP Charge": 3
    },
    "gp4": {
      "Block": 7,
      "MP Charge": 7
    },
    "gp5": {
      "Block": 10,
      "MP Charge": 7
    },
    "gp6": {
      "Block": 10,
      "MP Charge": 9
    },
    "gp7": {
      "Block": 13,
      "MP Charge": 9
    },
    "gp8": {
      "Block": 13,
      "MP Charge": 11
    },
    "gp9": {
      "Block": 16,
      "MP Charge": 11
    },
    "gp10": {
      "Block": 16,
      "MP Charge": 13
    },
    "total": {
      "Block": 16,
      "MP Charge": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "MATK": 29,
      "MDEF": 10,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "MATK": 35,
      "MDEF": 12,
      "Magic Crit": 8,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "MATK": 41,
      "MDEF": 14,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "MATK": 47,
      "MDEF": 16,
      "Magic Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "MATK": 52,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "g6": {
      "HP": 307,
      "MATK": 58,
      "MDEF": 20,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "MATK": 64,
      "MDEF": 22,
      "Magic Crit": 14,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "MATK": 70,
      "MDEF": 24,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "MATK": 76,
      "MDEF": 27,
      "Magic Crit": 17,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "MATK": 82,
      "MDEF": 29,
      "Magic Crit": 18,
      "MP Charge": 11
    },
    "total": {
      "HP": 430,
      "MATK": 82,
      "MDEF": 29,
      "Magic Crit": 18,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "MATK": 25
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MATK": 33
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MATK": 41
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MATK": 50
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MATK": 58
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
