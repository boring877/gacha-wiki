// Character data: cluul
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "cluul",
  "name": "Cluul",
  "displayName": "Cluul",
  "baseName": "Cluul",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 260,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Cluul",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "140cm",
    "bust": "112cm (O Cup)",
    "waist": "62cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤宮きせき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2121
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sweet Engraving",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": "260% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "260% + 250",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 1
    },
    {
      "slot": 3,
      "name": "Sweet Shine",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 50 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv1": "Applies Magic Critical Damage 50 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv90": "Applies Magic Critical Damage 680 UP to self for 12 seconds and Accuracy 26 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv4",
        "Accuracy + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.15
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sweet Meteor☆",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 1) for 8 seconds, self1[Lovely]( per stack of[Lovely] whenMind Type ATK5%UP, max3), when having3[Lovely] whenself10 Mind Type ATK15%UP",
      "effect": "900% + 600",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "lovely",
          "value": 5,
          "type": "percent",
          "duration": 999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sweet Meteor☆",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 2) for 8 seconds, self1[Lovely]( per stack of[Lovely] whenMind Type ATK5%UP, max3), when having3[Lovely] whenself10 Mind Type ATK15%UP",
      "effect": "1080% + 800",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "lovely",
          "value": 5,
          "type": "percent",
          "duration": 999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sweet Meteor☆",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 3) for 8 seconds, self1[Lovely]( per stack of[Lovely] whenMind Type ATK5%UP, max3), when having3[Lovely] whenself10 Mind Type ATK15%UP",
      "effect": "1215% + 1000",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "lovely",
          "value": 5,
          "type": "percent",
          "duration": 999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sweet Meteor☆",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 4) for 8 seconds, self1[Lovely]( per stack of[Lovely] whenMind Type ATK5%UP, max3), when having3[Lovely] whenself10 Mind Type ATK15%UP",
      "effect": "1310% + 1150",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "lovely",
          "value": 5,
          "type": "percent",
          "duration": 999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sweet Meteor☆",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 5) for 8 seconds, self1[Lovely]( per stack of[Lovely] whenMind Type ATK5%UP, max3), when having3[Lovely] whenself10 Mind Type ATK15%UP",
      "effect": "1400% + 1250",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "lovely",
          "value": 5,
          "type": "percent",
          "duration": 999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+176), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
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
  "name": "Cluul",
  "id": 2121,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 217,
    "MATK": 361,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "cluul"
};

export const stats = {
  "id": "cluul",
  "characterId": 2121,
  "name": "Cluul",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 217,
      "lv90": 1085
    },
    "matk": {
      "base": 361,
      "lv90": 1807
    },
    "def": {
      "base": 90,
      "lv90": 248
    },
    "mdef": {
      "base": 226,
      "lv90": 384
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
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 77,
      "lv90": 270
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
      "HP": 464,
      "MATK": 108,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 533,
      "MATK": 125,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "MATK": 146,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 696,
      "MATK": 163,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1314,
      "MATK": 334,
      "DEF": 25,
      "MDEF": 58,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3633,
      "MATK": 876,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 58,
      "Heal Pwr": 25
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
      "HP": 163,
      "MATK": 38,
      "MDEF": 10,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "MATK": 46,
      "MDEF": 12,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "MATK": 53,
      "MDEF": 14,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "MATK": 61,
      "MDEF": 16,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "MATK": 69,
      "MDEF": 18,
      "Magic Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "MATK": 76,
      "MDEF": 20,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "MATK": 84,
      "MDEF": 22,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "MATK": 91,
      "MDEF": 24,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "MATK": 99,
      "MDEF": 27,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "MATK": 107,
      "MDEF": 29,
      "Magic Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "MATK": 107,
      "MDEF": 29,
      "Magic Crit": 7,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 30
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "MATK": 42
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MATK": 54
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "MATK": 66
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "MATK": 78
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "MATK": 82
    }
  ]
};;;;;;;;
