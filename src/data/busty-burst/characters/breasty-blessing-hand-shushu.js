// Character data: breasty-blessing-hand-shushu
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "breasty-blessing-hand-shushu",
  "name": "Breasty Blessing Hand: Shushu",
  "displayName": "Breasty Blessing Hand: Shushu",
  "baseName": "Shushu",
  "title": "Breasty Blessing Hand",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 370,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Shushu",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "159cm",
    "bust": "95cm (H Cup)",
    "waist": "58cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "結城ほのか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2185
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Look, it's a gift!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Fire Type Damage Taken UP for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Fire Type Damage Taken UP for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Fire Type Damage Taken UP for 6 seconds and Block-18 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "114.99999999999999% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "114% + 150",
      "lvl90": "114% + 141",
      "effects": [
        "Fire Type Damage Taken + Lv3",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Hehehe, what's coming out?",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "Applies Magic Attack +665 UP to self for 10 seconds and Magic Critical Damage 680 UP for 10 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Magic Critical Damage+ Lv4",
        "MP Regeneration + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Unhappy Christmas Operation!!",
      "icon": "skill001/skill0012_1",
      "description": "6 nearest enemies dealmagic damage and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds , 10 Accuracy DOWN(LV 1)",
      "effect": "229% + 500",
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
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Look, it's a gift!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Fire Type Damage Taken UP for 6 seconds and Block-9 DOWN for 6 seconds",
      "effect": "114% + 150",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hehehe, what's coming out?",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Unhappy Christmas Operation!!",
      "icon": "skill001/skill0012_1",
      "description": "6 nearest enemies dealmagic damage and inflicts Stun for 2 seconds and Action Speed DOWN(LV 1) for 10 seconds , 10 Accuracy DOWN(LV 1)",
      "effect": "229% + 500",
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
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Unhappy Christmas Operation!!",
      "icon": "skill001/skill0012_2",
      "description": "6 nearest enemies dealmagic damage and inflicts Stun for 3 seconds and Action Speed DOWN(LV 2) for 10 seconds , 10 Accuracy DOWN(LV 2)",
      "effect": "270% + 650",
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
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Fire Type ATK +, MP Recovery+",
      "icon": "skill001/skill1001",
      "effect": "Fire Type ATK + (+10%), MP Recovery+ (+50%)",
      "effectValues": [
        {
          "name": "Fire Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "MP Recovery+",
          "value": 50,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Breasty Blessing Hand: Shushu",
  "id": 2185,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 186,
    "MATK": 311,
    "DEF": 80,
    "MDEF": 120
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.12"
  },
  "slug": "breasty-blessing-hand-shushu"
};

export const stats = {
  "id": "breasty-blessing-hand-shushu",
  "characterId": 2185,
  "name": "【Breasty Blessing Hand】Shushu",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 186,
      "lv90": 932
    },
    "matk": {
      "base": 311,
      "lv90": 1555
    },
    "def": {
      "base": 80,
      "lv90": 160
    },
    "mdef": {
      "base": 120,
      "lv90": 240
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
      "base": 90,
      "lv90": 317
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
      "base": 68,
      "lv90": 68
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
      "MATK": 93,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "MATK": 107,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 126,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 819,
      "MATK": 140,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1547,
      "MATK": 288,
      "DEF": 16,
      "MDEF": 37,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4277,
      "MATK": 754,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 16,
      "MDEF": 37,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "MATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "MATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 10
    },
    "total": {
      "MATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "MATK": 33,
      "MDEF": 6,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 39,
      "MDEF": 8,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 46,
      "MDEF": 9,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 52,
      "MDEF": 10,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 59,
      "MDEF": 12,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "g6": {
      "HP": 383,
      "MATK": 66,
      "MDEF": 13,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 72,
      "MDEF": 14,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 79,
      "MDEF": 16,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 85,
      "MDEF": 17,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 92,
      "MDEF": 18,
      "Magic Crit": 18,
      "MP Charge": 9
    },
    "total": {
      "HP": 536,
      "MATK": 92,
      "MDEF": 18,
      "Magic Crit": 18,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "MATK": 28
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MATK": 37
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "MATK": 47
    },
    {
      "grade": 7,
      "MP Charge": 4
    },
    {
      "grade": 8,
      "MATK": 56
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "MATK": 65
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
