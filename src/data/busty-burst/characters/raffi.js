// Character data: raffi
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "raffi",
  "name": "Raffi",
  "displayName": "Raffi",
  "baseName": "Raffi",
  "title": null,
  "rarity": "SR",
  "element": "Water",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 200,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Raffi",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "165cm",
    "bust": "116cm (M Cup)",
    "waist": "65cm",
    "hips": "100cm"
  },
  "credits": {
    "illustration": {
      "japanese": "アカマ 輝",
      "romanized": ""
    },
    "voice": {
      "japanese": "すずな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2146
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Let's go over there!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "270% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+20",
      "lvl1": "270% + 350",
      "lvl90": "270% + 172",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Fighting isn't my specialty ",
      "icon": "skill001/skill0025",
      "description": "Applies Physical Defense 25%+170 UP to self for 15 seconds and Magic Defense 25%+170 UP for 15 seconds",
      "descriptionLv1": "Applies Physical Defense 25%+170 UP to self for 15 seconds and Magic Defense 25%+170 UP for 15 seconds",
      "descriptionLv90": "Applies Physical Defense 25%+350 UP to self for 15 seconds and Magic Defense 25%+350 UP for 15 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv4",
        "Magic Defense+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv4",
          "value": 170,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv4",
          "value": 170,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 2.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Take this! I'm going all out!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "1000% + 600",
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
      "name": "Take this! I'm going all out!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds and Action Speed DOWN(LV 2) for 10 seconds",
      "effect": "1200% + 800",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Take this! I'm going all out!",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds and Action Speed DOWN(LV 3) for 10 seconds",
      "effect": "1350% + 950",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Take this! I'm going all out!",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds and Action Speed DOWN(LV 4) for 10 seconds",
      "effect": "1450% + 1100",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Take this! I'm going all out!",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds and Action Speed DOWN(LV 5) for 10 seconds",
      "effect": "1550% + 1200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv5",
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
      "name": "Ultimate Damage +, Taunt",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Taunt (+0)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown"
        }
      ]
    }
  ],
  "name": "Raffi",
  "id": 2146,
  "rarity": "SR",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1781,
    "ATK": 212,
    "MATK": 127,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "raffi"
};

export const stats = {
  "id": "raffi",
  "characterId": 2146,
  "name": "Raffi",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1781,
      "lv90": 8906
    },
    "atk": {
      "base": 212,
      "lv90": 1062
    },
    "matk": {
      "base": 127,
      "lv90": 637
    },
    "def": {
      "base": 326,
      "lv90": 554
    },
    "mdef": {
      "base": 130,
      "lv90": 358
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 89,
      "lv90": 311
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
      "base": 65,
      "lv90": 65
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
      "HP": 534,
      "ATK": 64,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 615,
      "ATK": 73,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 721,
      "ATK": 86,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 802,
      "ATK": 96,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1401,
      "ATK": 156,
      "DEF": 72,
      "MDEF": 32,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4073,
      "ATK": 475,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 72,
      "MDEF": 32,
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
      "HP": 188,
      "ATK": 22,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 225,
      "ATK": 27,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 263,
      "ATK": 31,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 300,
      "ATK": 36,
      "Phys Crit": 6,
      "Block": 23
    },
    "g5": {
      "HP": 338,
      "ATK": 40,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 375,
      "ATK": 45,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 413,
      "ATK": 49,
      "Phys Crit": 9,
      "Block": 32
    },
    "g8": {
      "HP": 450,
      "ATK": 54,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 488,
      "ATK": 58,
      "Phys Crit": 10,
      "Block": 38
    },
    "g10": {
      "HP": 525,
      "ATK": 63,
      "Phys Crit": 11,
      "MP Charge": 8
    },
    "total": {
      "HP": 525,
      "ATK": 63,
      "Phys Crit": 11,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 148
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 208
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 267
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "HP": 327
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "HP": 386
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "HP": 405
    }
  ]
};;;;;;;;
