// Character data: theresia
// Merged from info/skills/stats files

export const info = {
  "slug": "theresia",
  "name": "Theresia",
  "displayName": "Theresia",
  "baseName": "Theresia",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 360,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Teresia",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "101cm (J Cup)",
    "waist": "60cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u897f\u689d\u30b5\u30c8\u30eb",
      "romanized": "Saijo Satoru"
    },
    "voice": {
      "japanese": "\u84bc\u4e43\u3080\u3059\u3073",
      "romanized": "Aono Musubi"
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
      "name": "Lightning Blade Strike",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-40 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-40 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-220 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "310% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "310% + 160",
      "lvl90": "310% + -18",
      "effects": [
        "Stun",
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Winged Lightning",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack +665 UP to self for 10 seconds and Magic Critical Damage 680 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Magic Critical Damage+ Lv4"
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
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and applies Mind Type ATK UP(LV 1) to self for 8 seconds",
      "effect": "1000% + 885",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lightning Blade Strike",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-40 DOWN for 8 seconds",
      "effect": "310% + 160",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Winged Lightning",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Magic Critical Damage 50 UP for 10 seconds",
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
        }
      ]
    },
    {
      "rank": 4,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and applies Mind Type ATK UP(LV 1) to self for 8 seconds",
      "effect": "1000% + 885",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and applies Mind Type ATK UP(LV 2) to self for 8 seconds",
      "effect": "1200% + 1022",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+10), Block+ (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Mind Type ATK +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Mind Type ATK + (+10%), Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 3,
      "name": "Passive EX",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Charge (+9999%), Charge (+9999%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Charge",
          "value": 9999,
          "type": "percent"
        },
        {
          "name": "Charge",
          "value": 9999,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Theresia",
  "id": 2046,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 206,
    "MATK": 343,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "theresia"
};

export const stats = {
  "id": "theresia",
  "characterId": 2046,
  "name": "Theresia",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 206,
      "lv90": 1031
    },
    "matk": {
      "base": 343,
      "lv90": 1718
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
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
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 70,
      "lv90": 70
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
      "MATK": 103,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 139,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 941,
      "MATK": 155,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 344,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4916,
      "MATK": 860,
      "Block": 75,
      "MP Charge": 15,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 20
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 50
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 80
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 110
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 140
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
      "MATK": 36,
      "MDEF": 4,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 43,
      "MDEF": 4,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 51,
      "MDEF": 5,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 58,
      "MDEF": 6,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 65,
      "MDEF": 7,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 440,
      "MATK": 72,
      "MDEF": 7,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 80,
      "MDEF": 8,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 87,
      "MDEF": 9,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 94,
      "MDEF": 10,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 101,
      "MDEF": 10,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 617,
      "MATK": 101,
      "MDEF": 10,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "MATK": 31
    },
    {
      "grade": 3,
      "MATK": 40
    },
    {
      "grade": 4,
      "MATK": 41
    },
    {
      "grade": 5,
      "MATK": 52
    },
    {
      "grade": 6,
      "MATK": 52
    },
    {
      "grade": 7,
      "MATK": 63
    },
    {
      "grade": 8,
      "MATK": 62
    },
    {
      "grade": 9,
      "MATK": 74
    },
    {
      "grade": 10,
      "MATK": 72
    },
    {
      "grade": 11,
      "MATK": 78
    }
  ]
};;;;;;;;
