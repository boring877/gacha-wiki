// Character data: nina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "nina",
  "name": "Nina",
  "displayName": "Nina",
  "baseName": "Nina",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 490,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Nina",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "100cm (H Cup)",
    "waist": "63cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "七瀬瑞穂",
      "romanized": ""
    },
    "voice": {
      "japanese": "麦芽ぷりん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2125
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Roaring Fury",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "110% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "110% + 100",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Depletion Mystery",
      "icon": "skill001/skill0011",
      "description": "inflict8 Accuracy -9 DOWN, when team hasphysical when 3+ allies are present8 Physical Defense -18%-30 DOWN, when team hasmagic when 3+ allies are present8 Magic Defense-18%-30 DOWN",
      "descriptionLv1": "inflict8 Accuracy -9 DOWN, when team hasphysical when 3+ allies are present8 Physical Defense -18%-30 DOWN, when team hasmagic when 3+ allies are present8 Magic Defense-18%-30 DOWN",
      "descriptionLv90": "inflict8 Accuracy -18 DOWN, when team hasphysical when 3+ allies are present8 Physical Defense -18%-210 DOWN, when team hasmagic when 3+ allies are present8 Magic Defense-18%-210 DOWN",
      "target": "All Enemies",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy - Lv3",
        "Physical Defense - Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sweet Dream Trick",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts BlockDOWN(LV 1) for 10 seconds and Action Speed DOWN(LV 1) for 10 seconds , when team hasWater Type when 3+ allies are present8 Water Type Damage Taken UP(LV 1)",
      "effect": "370% + 500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sweet Dream Trick",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts BlockDOWN(LV 2) for 10 seconds and Action Speed DOWN(LV 2) for 10 seconds , when team hasWater Type when 3+ allies are present8 Water Type Damage Taken UP(LV 2)",
      "effect": "440% + 600",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sweet Dream Trick",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts BlockDOWN(LV 3) for 10 seconds and Action Speed DOWN(LV 3) for 10 seconds , when team hasWater Type when 3+ allies are present8 Water Type Damage Taken UP(LV 3)",
      "effect": "490% + 680",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sweet Dream Trick",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts BlockDOWN(LV 4) for 10 seconds and Action Speed DOWN(LV 4) for 10 seconds , when team hasWater Type when 3+ allies are present8 Water Type Damage Taken UP(LV 4)",
      "effect": "530% + 750",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sweet Dream Trick",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts BlockDOWN(LV 5) for 10 seconds and Action Speed DOWN(LV 5) for 10 seconds , when team hasWater Type when 3+ allies are present8 Water Type Damage Taken UP(LV 5)",
      "effect": "550% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Water Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Water Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Water Type ATK + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Water Type ATK +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Nina",
  "id": 2125,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 166,
    "MATK": 276,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "nina"
};

export const stats = {
  "id": "nina",
  "characterId": 2125,
  "name": "Nina",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
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
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "HP": 628,
      "MATK": 83,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "MATK": 95,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 112,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 124,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 256,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4916,
      "MATK": 670,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 20
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 80
    },
    "gp8": {
      "MATK": 360,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 110
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 140
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 29,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 35,
      "MDEF": 4,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 41,
      "MDEF": 5,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 47,
      "MDEF": 6,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 52,
      "MDEF": 7,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 58,
      "MDEF": 7,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 64,
      "MDEF": 8,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 70,
      "MDEF": 9,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 76,
      "MDEF": 10,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 82,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "MATK": 82,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 23
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 32
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 41
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 51
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 60
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 63
    }
  ]
};;;;;;;;
