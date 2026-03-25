// Character data: ilugio
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ilugio",
  "name": "Ilugio",
  "displayName": "Ilugio",
  "baseName": "Ilugio",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 243,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Ilugio",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "171cm",
    "bust": "108cm (J Cup)",
    "waist": "64cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "あかしゆき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2144
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Freisetzung,Gerda",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Freeze(Unable to act;HP --700 per second) for 2 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Freeze(Unable to act;HP --700 per second) for 2 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Freeze(Unable to act;HP --5200 per second) for 2 seconds and Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.19,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": "330% + 486",
      "effects": [
        "Freeze LvMax",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Freeze LvMax",
          "value": -700,
          "type": "flat",
          "duration": 2,
          "levelGrowth": -50.0
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Freisetzung,Sanctum",
      "icon": "skill001/skill0019",
      "description": "Applies Healing Shield (400) to all allies for 15 seconds and Block 9 UP for 15 seconds , 15 Fire Type Damage Taken -30%DOWN",
      "descriptionLv1": "Applies Healing Shield (400) to all allies for 15 seconds and Block 9 UP for 15 seconds , 15 Fire Type Damage Taken -30%DOWN",
      "descriptionLv90": "Applies Healing Shield (400) to all allies for 15 seconds and Block 18 UP for 15 seconds , 15 Fire Type Damage Taken -30%DOWN",
      "target": "All Allies",
      "castTime": 1.19,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Healing Shield LvMax",
        "Block+ Lv3",
        "Fire Type Damage Taken Reduction Lv3"
      ],
      "buffEffects": [
        {
          "name": "Healing Shield LvMax",
          "value": 400,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 0.1
        },
        {
          "name": "Fire Type Damage Taken Reduction Lv3",
          "value": -30,
          "type": "percent",
          "duration": 15
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Song of triumph, resound through the heavens. Until it devours all the land",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 1)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Song of triumph, resound through the heavens. Until it devours all the land",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 2)",
      "effect": "1440% + 1200",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Song of triumph, resound through the heavens. Until it devours all the land",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 3)",
      "effect": "1620% + 1400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Song of triumph, resound through the heavens. Until it devours all the land",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 4)",
      "effect": "1739% + 1650",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Song of triumph, resound through the heavens. Until it devours all the land",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 5)",
      "effect": "1800% + 1800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Water Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Water Type ATK + (+1%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Water Type ATK +",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ilugio",
  "id": 2144,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 254,
    "MATK": 152,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "0.99"
  },
  "slug": "ilugio"
};

export const stats = {
  "id": "ilugio",
  "characterId": 2144,
  "name": "Ilugio",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 254,
      "lv90": 1270
    },
    "matk": {
      "base": 152,
      "lv90": 761
    },
    "def": {
      "base": 226,
      "lv90": 384
    },
    "mdef": {
      "base": 90,
      "lv90": 248
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
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
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
      "base": 62,
      "lv90": 62
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
      "ATK": 76,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 503,
      "ATK": 88,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "ATK": 103,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 656,
      "ATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1239,
      "ATK": 216,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3425,
      "ATK": 597,
      "Block": 83,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "ATK": 27,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "ATK": 32,
      "Phys Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "ATK": 37,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "ATK": 43,
      "Phys Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "ATK": 48,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 307,
      "ATK": 54,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "ATK": 59,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "ATK": 64,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "ATK": 70,
      "Phys Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "ATK": 75,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 430,
      "ATK": 75,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 14
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 19
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 25
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 31
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 36
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 38
    }
  ]
};;;;;;;;
