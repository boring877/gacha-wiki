// Character data: killerbikini-theresia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "killerbikini-theresia",
  "name": "Killer☆Bikini: Theresia",
  "displayName": "Killer☆Bikini: Theresia",
  "baseName": "Theresia",
  "title": "Killer☆Bikini",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 400,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Theresia",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "101cm (J Cup)",
    "waist": "60cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "西條サトル",
      "romanized": ""
    },
    "voice": {
      "japanese": "蒼乃むすび",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2078
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Gotta Avoid the Sunburn!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds and when the skill activates, applies Hit-Based Magic Damage UP(50%+550, 4 hit(s)) to self for 5 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds and when the skill activates, applies Hit-Based Magic Damage UP(50%+550, 4 hit(s)) to self for 5 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds and when the skill activates, applies Hit-Based Magic Damage UP(50%+550, 49504 hit(s)) to self for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "120% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "120% + 80",
      "lvl90": "120% + 49030",
      "effects": [
        "Stun",
        "Hit-Based Magic Damage + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Hit-Based Magic Damage + Lv5",
          "value": 4,
          "type": "flat",
          "duration": 5,
          "levelGrowth": 550.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "I’ll Drive You Wild!",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage 40 UP for 7 seconds",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage 40 UP for 7 seconds",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage 490 UP for 7 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 5.0
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Paralysis for 5 seconds and Accuracy DOWN(LV 1) for 8 seconds",
      "effect": "550% + 400",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV 2) for 8 seconds",
      "effect": "750% + 500",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV 3) for 8 seconds",
      "effect": "900% + 550",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV 4) for 8 seconds",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV 5) for 8 seconds",
      "effect": "1100% + 650",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Debuff Resistance + (+30%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Debuff Resistance +",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Killer☆Bikini: Theresia",
  "id": 2078,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2588,
    "ATK": 151,
    "MATK": 253,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "killerbikini-theresia"
};

export const stats = {
  "id": "killerbikini-theresia",
  "characterId": 2078,
  "name": "【Killer☆Bikini】Theresia",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2588,
      "lv90": 12943
    },
    "atk": {
      "base": 151,
      "lv90": 758
    },
    "matk": {
      "base": 253,
      "lv90": 1265
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
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 129,
      "lv90": 452
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
      "base": 87,
      "lv90": 87
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
      "HP": 777,
      "MATK": 76,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 893,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1048,
      "MATK": 102,
      "Block": 22,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 1165,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2395,
      "MATK": 215,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6278,
      "MATK": 594,
      "Block": 83,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 750,
      "MATK": 40
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 1200,
      "MATK": 120
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1650,
      "MATK": 200
    },
    "gp8": {
      "HP": 1650,
      "MATK": 280
    },
    "gp9": {
      "HP": 2100,
      "MATK": 280
    },
    "gp10": {
      "HP": 2100,
      "MATK": 360
    },
    "total": {
      "HP": 2100,
      "MATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 273,
      "MATK": 27,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 327,
      "MATK": 32,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 382,
      "MATK": 37,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 436,
      "MATK": 43,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 491,
      "MATK": 48,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 545,
      "MATK": 53,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 600,
      "MATK": 59,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 654,
      "MATK": 64,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 709,
      "MATK": 69,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 763,
      "MATK": 75,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 11
    },
    "total": {
      "HP": 763,
      "MATK": 75,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 216
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP": 302
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "HP": 388
    },
    {
      "grade": 6,
      "MP Charge": 4
    },
    {
      "grade": 7,
      "HP": 475
    },
    {
      "grade": 8,
      "MP Charge": 5
    },
    {
      "grade": 9,
      "HP": 561
    },
    {
      "grade": 10,
      "MP Charge": 5
    },
    {
      "grade": 11,
      "HP": 589
    }
  ]
};;;;;;;
