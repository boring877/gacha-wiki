// Character data: katisha
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "katisha",
  "name": "Katisha",
  "displayName": "Katisha",
  "baseName": "Katisha",
  "title": null,
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 230,
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
  "characterId": 2107
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Don't bother resisting!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "100% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "100% + 100",
      "lvl90": "100% + 812",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "I'm not naive",
      "icon": "skill001/skill0011",
      "description": "Inflicts Block-9 DOWN on the 3 nearest enemies for 7 seconds and Accuracy -9 DOWN for 7 seconds",
      "descriptionLv1": "Inflicts Block-9 DOWN on the 3 nearest enemies for 7 seconds and Accuracy -9 DOWN for 7 seconds",
      "descriptionLv90": "Inflicts Block-18 DOWN on the 3 nearest enemies for 7 seconds and Accuracy -18 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block- Lv3",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.1
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.1
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Virne Sacred Binding - Chain Shackles",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 1) for 10 seconds, 3s Silence for",
      "effect": "1019% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Don't bother resisting!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "100% + 100",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "I'm not naive",
      "icon": "skill001/skill0011",
      "description": "Inflicts Block-9 DOWN on the 3 nearest enemies for 7 seconds and Accuracy -9 DOWN for 7 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Virne Sacred Binding - Chain Shackles",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 1) for 10 seconds, 3s Silence for",
      "effect": "1019% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Virne Sacred Binding - Chain Shackles",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 2) for 10 seconds, 4s Silence for",
      "effect": "1230% + 950",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+10)",
      "effectValues": [
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
      "effect": "Skill Damage + (+20%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Katisha",
  "id": 2107,
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1331,
    "ATK": 284,
    "MATK": 170,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "katisha"
};

export const stats = {
  "id": "katisha",
  "characterId": 2107,
  "name": "Katisha",
  "rarity": "SR",
  "element": "聖",
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
      "base": 284,
      "lv90": 1420
    },
    "matk": {
      "base": 170,
      "lv90": 851
    },
    "def": {
      "base": 208,
      "lv90": 416
    },
    "mdef": {
      "base": 83,
      "lv90": 166
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
      "base": 60,
      "lv90": 60
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
      "ATK": 85,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 459,
      "ATK": 98,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 539,
      "ATK": 115,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 599,
      "ATK": 128,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 976,
      "ATK": 234,
      "DEF": 51,
      "MDEF": 15,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2972,
      "ATK": 660,
      "Block": 83,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 51,
      "MDEF": 15,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 500,
      "ATK": 30
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 800,
      "ATK": 90
    },
    "gp6": {
      "HP": 800,
      "ATK": 150
    },
    "gp7": {
      "HP": 1100,
      "ATK": 150
    },
    "gp8": {
      "HP": 1100,
      "ATK": 210
    },
    "gp9": {
      "HP": 1400,
      "ATK": 210
    },
    "gp10": {
      "HP": 1400,
      "ATK": 270
    },
    "total": {
      "HP": 1400,
      "ATK": 270
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 140,
      "ATK": 30,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 168,
      "ATK": 36,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 196,
      "ATK": 42,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 224,
      "ATK": 48,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 252,
      "ATK": 54,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 280,
      "ATK": 60,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 308,
      "ATK": 66,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 336,
      "ATK": 72,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 364,
      "ATK": 78,
      "Phys Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 392,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 8
    },
    "total": {
      "HP": 392,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 10
    },
    {
      "grade": 2,
      "ATK": 26
    },
    {
      "grade": 3,
      "Phys Crit": 13
    },
    {
      "grade": 4,
      "ATK": 34
    },
    {
      "grade": 5,
      "Phys Crit": 17
    },
    {
      "grade": 6,
      "ATK": 43
    },
    {
      "grade": 7,
      "Phys Crit": 21
    },
    {
      "grade": 8,
      "ATK": 51
    },
    {
      "grade": 9,
      "Phys Crit": 25
    },
    {
      "grade": 10,
      "ATK": 60
    },
    {
      "grade": 11,
      "Phys Crit": 26
    }
  ]
};;;;;;;;
