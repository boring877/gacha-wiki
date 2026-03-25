// Character data: epic-fishing-meinias
// Merged from info/skills/stats files

export const info = {
  "slug": "epic-fishing-meinias",
  "name": "\u3010Epic Fishing\u3011Meinias",
  "displayName": "Fishing Meinias",
  "baseName": "Meinias",
  "title": "Epic Fishing",
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 370,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Epic_Fishing_Meinias",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "102cm (K Cup)",
    "waist": "66cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u604b\u6cb3\u30df\u30ce\u30eb",
      "romanized": "Koikawa Minoru"
    },
    "voice": {
      "japanese": "\u76f8\u6a21\u604b",
      "romanized": "Sagami Koi"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Summer 2025 Banner"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Perfect Cast!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "90% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+8",
      "lvl1": "90% + 60",
      "lvl90": "90% + 772",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Bullseye!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "229.99999999999997% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+15",
      "lvl1": "229% + 150",
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
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "360% + 330",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "405% + 350",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -19,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "440% + 380",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -22,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "470% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Epic Fishing: Meinias",
  "id": 2079,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 330,
    "MATK": 198,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "epic-fishing-meinias"
};

export const stats = {
  "id": "epic-fishing-meinias",
  "characterId": 2079,
  "name": "【Epic Fishing】Meinias",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2159,
      "lv90": 10795
    },
    "atk": {
      "base": 330,
      "lv90": 1650
    },
    "matk": {
      "base": 198,
      "lv90": 990
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 107,
      "lv90": 376
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 63,
      "lv90": 63
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
      "ATK": 99,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 745,
      "ATK": 114,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 874,
      "ATK": 134,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 972,
      "ATK": 149,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1698,
      "ATK": 260,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4937,
      "ATK": 756,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 4,
      "MDEF": 1,
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
      "HP": 227,
      "ATK": 35,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 42,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 318,
      "ATK": 49,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 56,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 409,
      "ATK": 63,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 455,
      "ATK": 70,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 76,
      "Phys Crit": 5,
      "Block": 29
    },
    "g8": {
      "HP": 545,
      "ATK": 83,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 90,
      "Phys Crit": 6,
      "Block": 34
    },
    "g10": {
      "HP": 636,
      "ATK": 97,
      "Phys Crit": 6,
      "MP Charge": 8
    },
    "total": {
      "HP": 636,
      "ATK": 97,
      "Phys Crit": 6,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 180
    },
    {
      "grade": 2,
      "ATK": 30
    },
    {
      "grade": 3,
      "HP": 252
    },
    {
      "grade": 4,
      "ATK": 40
    },
    {
      "grade": 5,
      "HP": 324
    },
    {
      "grade": 6,
      "ATK": 50
    },
    {
      "grade": 7,
      "HP": 396
    },
    {
      "grade": 8,
      "ATK": 59
    },
    {
      "grade": 9,
      "HP": 468
    },
    {
      "grade": 10,
      "ATK": 69
    },
    {
      "grade": 11,
      "HP": 491
    }
  ]
};;;;;;;;
