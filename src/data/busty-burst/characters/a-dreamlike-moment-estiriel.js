// Character data: a-dreamlike-moment-estiriel
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "a-dreamlike-moment-estiriel",
  "name": "A Dreamlike Moment: Estiriel",
  "displayName": "A Dreamlike Moment: Estiriel",
  "baseName": "Estiriel",
  "title": "A Dreamlike Moment",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 383,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Estiriel",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "サブロー",
      "romanized": ""
    },
    "voice": {
      "japanese": "美空なつひ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2171
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shaomega Tram",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds , 2s Curse for",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds , 2s Curse for",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-220 DOWN for 6 seconds , 2s Curse for",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "90% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "90% + 70",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv4",
        "Curse"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Cuvier Nereus",
      "icon": "skill001/skill0011",
      "description": "Inflicts Accuracy -11 DOWN on the 3 nearest enemies for 10 seconds and Block-11 DOWN for 10 seconds , 3s Charm for",
      "descriptionLv1": "Inflicts Accuracy -11 DOWN on the 3 nearest enemies for 10 seconds and Block-11 DOWN for 10 seconds , 3s Charm for",
      "descriptionLv90": "Inflicts Accuracy -23 DOWN on the 3 nearest enemies for 10 seconds and Block-23 DOWN for 10 seconds , 3s Charm for",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy - Lv4",
        "Block- Lv4",
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Pale Brief Utopia. Fallen Dream",
      "icon": "skill001/skill0006_1",
      "description": "to all enemiesmagic damage and inflicts Action Speed DOWN(LV 1) for 10 seconds and Physical Attack DOWN(LV 1) for 10 seconds , 10 Magic Attack DOWN(LV 1)",
      "effect": "450% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Pale Brief Utopia. Fallen Dream",
      "icon": "skill001/skill0006_2",
      "description": "to all enemiesmagic damage and inflicts Action Speed DOWN(LV 2) for 10 seconds and Physical Attack DOWN(LV 2) for 10 seconds , 10 Magic Attack DOWN(LV 2)",
      "effect": "630% + 750",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Pale Brief Utopia. Fallen Dream",
      "icon": "skill001/skill0006_3",
      "description": "to all enemiesmagic damage and inflicts Action Speed DOWN(LV 3) for 10 seconds and Physical Attack DOWN(LV 3) for 10 seconds , 10 Magic Attack DOWN(LV 3)",
      "effect": "765% + 900",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -21,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv3",
          "value": -21,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Pale Brief Utopia. Fallen Dream",
      "icon": "skill001/skill0006_4",
      "description": "to all enemiesmagic damage and inflicts Action Speed DOWN(LV 4) for 10 seconds and Physical Attack DOWN(LV 4) for 10 seconds , 10 Magic Attack DOWN(LV 4)",
      "effect": "855% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -23,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv4",
          "value": -23,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Pale Brief Utopia. Fallen Dream",
      "icon": "skill001/skill0006_5",
      "description": "to all enemiesmagic damage and inflicts Action Speed DOWN(LV 5) for 10 seconds and Physical Attack DOWN(LV 5) for 10 seconds , 10 Magic Attack DOWN(LV 5)",
      "effect": "900% + 1100",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv5",
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
      "name": "Magic Attack +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Magic Attack + (0)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 0,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "A Dreamlike Moment: Estiriel",
  "id": 2171,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 232,
    "MATK": 386,
    "DEF": 158,
    "MDEF": 158
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "a-dreamlike-moment-estiriel"
};

export const stats = {
  "id": "a-dreamlike-moment-estiriel",
  "characterId": 2171,
  "name": "【A Dreamlike Moment】Estiriel",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 386,
      "lv90": 1933
    },
    "def": {
      "base": 158,
      "lv90": 316
    },
    "mdef": {
      "base": 158,
      "lv90": 316
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
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
      "HP": 437,
      "MATK": 116,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 503,
      "MATK": 133,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "MATK": 157,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 656,
      "MATK": 174,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1239,
      "MATK": 358,
      "DEF": 32,
      "MDEF": 51,
      "Heal Pwr": 22
    },
    "total": {
      "HP": 3425,
      "MATK": 938,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 32,
      "MDEF": 51,
      "Heal Pwr": 22
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "MATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "MATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "MATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "MATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "MATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "MATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "MATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "MATK": 360,
      "Accuracy": 16
    },
    "total": {
      "MATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "MATK": 41,
      "MDEF": 10,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "MATK": 49,
      "MDEF": 12,
      "Magic Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "MATK": 57,
      "MDEF": 14,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "MATK": 65,
      "MDEF": 16,
      "Magic Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "MATK": 73,
      "MDEF": 18,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 307,
      "MATK": 81,
      "MDEF": 20,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "MATK": 90,
      "MDEF": 22,
      "Magic Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "MATK": 98,
      "MDEF": 24,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "MATK": 106,
      "MDEF": 27,
      "Magic Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "MATK": 114,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 430,
      "MATK": 114,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 32
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 45
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 58
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 71
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 84
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 93
    }
  ]
};;;;;;;
