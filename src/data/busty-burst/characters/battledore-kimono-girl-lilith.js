// Character data: battledore-kimono-girl-lilith
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "battledore-kimono-girl-lilith",
  "name": "Battledore Kimono Girl: Lilith",
  "displayName": "Battledore Kimono Girl: Lilith",
  "baseName": "Lilith",
  "title": "Battledore Kimono Girl",
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
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lilith",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "164cm",
    "bust": "95cm (H Cup)",
    "waist": "57cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
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
  "characterId": 2188
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Take this...",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Block-23 DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "350% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+20",
      "lvl1": "350% + 350",
      "lvl90": "350% + 338",
      "effects": [
        "Block- Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "You lose...",
      "icon": "skill001/skill0011",
      "description": "Inflicts Mind Type Damage Taken UP on the 3 nearest enemies for 10 seconds and Magic Defense-30 DOWN for 10 seconds , 4s Blind for",
      "descriptionLv1": "Inflicts Mind Type Damage Taken UP on the 3 nearest enemies for 10 seconds and Magic Defense-30 DOWN for 10 seconds , 4s Blind for",
      "descriptionLv90": "Inflicts Mind Type Damage Taken UP on the 3 nearest enemies for 10 seconds and Magic Defense-210 DOWN for 10 seconds , 4s Blind for",
      "target": "Nearest Enemy",
      "castTime": 1.15,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Mind Type Damage Taken + Lv3",
        "Magic Defense- Lv3",
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Dawn Sky Burst",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds, and before activating the Ultimate,self10 Action Speed UP(LV 1), 10 Magic Attack UP(LV 1)",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Take this...",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "effect": "350% + 350",
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "You lose...",
      "icon": "skill001/skill0011",
      "description": "Inflicts Mind Type Damage Taken UP on the 3 nearest enemies for 10 seconds and Magic Defense-30 DOWN for 10 seconds , 4s Blind for",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Dawn Sky Burst",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds, and before activating the Ultimate,self10 Action Speed UP(LV 1), 10 Magic Attack UP(LV 1)",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Dawn Sky Burst",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 2) for 10 seconds, and before activating the Ultimate,self10 Action Speed UP(LV 2), 10 Magic Attack UP(LV 2)",
      "effect": "470% + 600",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Battledore Kimono Girl: Lilith",
  "id": 2188,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 206,
    "MATK": 343,
    "DEF": 69,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "battledore-kimono-girl-lilith"
};

export const stats = {
  "id": "battledore-kimono-girl-lilith",
  "characterId": 2188,
  "name": "【Battledore Kimono Girl】Lilith",
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
      "base": 2259,
      "lv90": 11296
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
      "base": 69,
      "lv90": 138
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
      "base": 45,
      "lv90": 135
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
      "base": 112,
      "lv90": 394
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
      "HP": 678,
      "MATK": 103,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 779,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 915,
      "MATK": 139,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1017,
      "MATK": 155,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1921,
      "MATK": 318,
      "DEF": 14,
      "MDEF": 17,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5310,
      "MATK": 834,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 14,
      "MDEF": 17,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "MATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "MATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "MATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "MATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "MATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 238,
      "MATK": 36,
      "MDEF": 4,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 285,
      "MATK": 43,
      "MDEF": 4,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 333,
      "MATK": 51,
      "MDEF": 5,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 381,
      "MATK": 58,
      "MDEF": 6,
      "Magic Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 428,
      "MATK": 65,
      "MDEF": 7,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 476,
      "MATK": 72,
      "MDEF": 7,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 523,
      "MATK": 80,
      "MDEF": 8,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 571,
      "MATK": 87,
      "MDEF": 9,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 618,
      "MATK": 94,
      "MDEF": 10,
      "Magic Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 666,
      "MATK": 101,
      "MDEF": 10,
      "Magic Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 666,
      "MATK": 101,
      "MDEF": 10,
      "Magic Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "MATK": 31
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MATK": 41
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "MATK": 52
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MATK": 62
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "MATK": 72
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
