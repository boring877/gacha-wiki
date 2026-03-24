// Character data: the-strongest-witch-shaharl
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "the-strongest-witch-shaharl",
  "name": "The Strongest Witch: Shaharl",
  "displayName": "The Strongest Witch: Shaharl",
  "baseName": "Shaharl",
  "title": "The Strongest Witch",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 370,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Shaharl",
  "introduction": "Middle Row, Magical, Support",
  "profile": {
    "height": "162cm",
    "bust": "104cm (J Cup)",
    "waist": "55cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "和葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "event",
    "source": "Villain Halloween"
  },
  "characterId": 2081
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Is my curse working?",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds state and Magic Defense-50 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds state and Magic Defense-50 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds state and Magic Defense-23%-317 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "90% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+6",
      "lvl1": "90% + 90",
      "lvl90": "90% + 624",
      "effects": [
        "Curse",
        "Magic Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Lv5",
          "value": -23,
          "type": "percent",
          "flatValue": -50,
          "flatGrowth": -3,
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Want to come with me?",
      "icon": "skill001/skill0011",
      "description": "Inflicts Fire Type ATK DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense DOWN for 9 seconds and Accuracy DOWN for 9 seconds",
      "descriptionLv1": "Inflicts Fire Type ATK DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense DOWN for 9 seconds and Accuracy DOWN for 9 seconds",
      "descriptionLv90": "Inflicts Fire Type ATK DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense DOWN for 9 seconds and Accuracy DOWN for 9 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Fire Type ATK - Lv5",
        "Fire Type Defense- Lv5",
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Fire Type ATK - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Fire Type Defense- Lv5",
          "value": -20,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "flatGrowth": -0.15,
          "duration": 9
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A witch's hospitality!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Physical Critical Damage DOWN(LV 1) for 10 seconds and Magic Critical Damage DOWN(LV 1) for 10 seconds",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "A witch's hospitality!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Physical Critical Damage DOWN(LV 2) for 10 seconds and Magic Critical Damage DOWN(LV 2) for 10 seconds",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "A witch's hospitality!",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to all enemies and inflicts Physical Critical Damage DOWN(LV 3) for 11 seconds and Magic Critical Damage DOWN(LV 3) for 11 seconds",
      "effect": "480% + 450",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 11
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 11
        }
      ]
    },
    {
      "rank": 4,
      "name": "A witch's hospitality!",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to all enemies and inflicts Physical Critical Damage DOWN(LV 4) for 11 seconds and Magic Critical Damage DOWN(LV 4) for 11 seconds",
      "effect": "550% + 500",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 11
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 11
        }
      ]
    },
    {
      "rank": 5,
      "name": "A witch's hospitality!",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to all enemies and inflicts Physical Critical Damage DOWN(LV 5) for 12 seconds and Magic Critical Damage DOWN(LV 5) for 12 seconds",
      "effect": "600% + 550",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1003",
      "effect": "Magic Attack + (+259), Magic Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 176,
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
  "name": "The Strongest Witch: Shaharl",
  "id": 2081,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2837,
    "ATK": 179,
    "MATK": 299,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 > Skill2 > Basic > Basic",
    "loop": "Basic > Basic > Skill2 > Basic > Basic > Basic > Skill3 > Skill2 > Basic > Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "the-strongest-witch-shaharl"
};

export const stats = {
  "id": "the-strongest-witch-shaharl",
  "characterId": 2081,
  "name": "[The Strongest Witch] Shaharl",
  "rarity": "SSR",
  "element": "Fire",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2837,
      "lv90": 14188
    },
    "atk": {
      "base": 179,
      "lv90": 896
    },
    "matk": {
      "base": 299,
      "lv90": 1495
    },
    "def": {
      "base": 14,
      "lv90": 28
    },
    "mdef": {
      "base": 35,
      "lv90": 70
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
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
      "base": 141,
      "lv90": 495
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
      "base": 8,
      "lv90": 26
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 851,
      "MATK": 90,
      "Block": 12,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 979,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1149,
      "MATK": 121,
      "Block": 16,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 1277,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 2412,
      "MATK": 277,
      "DEF": 3,
      "MDEF": 10,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6668,
      "MATK": 726,
      "Block": 60,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 3,
      "MDEF": 10,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 2
    },
    "gp2": {
      "Magic Crit": 20,
      "HP Drain": 2
    },
    "gp3": {
      "Magic Crit": 20,
      "HP Drain": 5
    },
    "gp4": {
      "Magic Crit": 50,
      "HP Drain": 5
    },
    "gp5": {
      "Magic Crit": 50,
      "HP Drain": 7
    },
    "gp6": {
      "Magic Crit": 80,
      "HP Drain": 7
    },
    "gp7": {
      "Magic Crit": 80,
      "HP Drain": 9
    },
    "gp8": {
      "Magic Crit": 110,
      "HP Drain": 9
    },
    "gp9": {
      "Magic Crit": 110,
      "HP Drain": 11
    },
    "gp10": {
      "Magic Crit": 140,
      "HP Drain": 11
    },
    "total": {
      "Magic Crit": 140,
      "HP Drain": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 299,
      "MATK": 31,
      "MDEF": 2,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 358,
      "MATK": 38,
      "MDEF": 2,
      "Magic Crit": 5,
      "Block": 13
    },
    "g3": {
      "HP": 418,
      "MATK": 44,
      "MDEF": 2,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 478,
      "MATK": 50,
      "MDEF": 3,
      "Magic Crit": 7,
      "Block": 17
    },
    "g5": {
      "HP": 538,
      "MATK": 57,
      "MDEF": 3,
      "Magic Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 597,
      "MATK": 63,
      "MDEF": 3,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 657,
      "MATK": 69,
      "MDEF": 4,
      "Magic Crit": 10,
      "Block": 23
    },
    "g8": {
      "HP": 717,
      "MATK": 76,
      "MDEF": 4,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 777,
      "MATK": 82,
      "MDEF": 4,
      "Magic Crit": 11,
      "Block": 27
    },
    "g10": {
      "HP": 836,
      "MATK": 88,
      "MDEF": 5,
      "Magic Crit": 12,
      "MP Charge": 11
    },
    "total": {
      "HP": 836,
      "MATK": 88,
      "MDEF": 5,
      "Magic Crit": 12,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 7
    },
    {
      "grade": 2,
      "MATK": 27
    },
    {
      "grade": 3,
      "Magic Crit": 10
    },
    {
      "grade": 4,
      "MATK": 36
    },
    {
      "grade": 5,
      "Magic Crit": 12
    },
    {
      "grade": 6,
      "MATK": 45
    },
    {
      "grade": 7,
      "Magic Crit": 15
    },
    {
      "grade": 8,
      "MATK": 54
    },
    {
      "grade": 9,
      "Magic Crit": 18
    },
    {
      "grade": 10,
      "MATK": 63
    },
    {
      "grade": 11,
      "Magic Crit": 19
    }
  ]
};;;;;;;;
