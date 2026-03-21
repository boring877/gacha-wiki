// Character data: first-chocolate-making-kaguya
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "first-chocolate-making-kaguya",
  "name": "First Chocolate Making: Kaguya",
  "displayName": "First Chocolate Making: Kaguya",
  "baseName": "Kaguya",
  "title": "First Chocolate Making",
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Slow",
  "range": 380,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Kaguya",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "165cm",
    "bust": "106cm (K Cup)",
    "waist": "60cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "月夜見しじま",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2198
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Chocolate... want some...?",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Hit-Based Shield(+3 hit(s)) for 15 seconds and Healing Shield (300) for 15 seconds , 15 Block 11 UP",
      "descriptionLv1": "restore HP to all alliesHP and inflicts Hit-Based Shield(+3 hit(s)) for 15 seconds and Healing Shield (300) for 15 seconds , 15 Block 11 UP",
      "descriptionLv90": "restore HP to all alliesHP and inflicts Hit-Based Shield(+3 hit(s)) for 15 seconds and Healing Shield (300) for 15 seconds , 15 Block 23 UP",
      "target": "All Allies",
      "castTime": 1.5,
      "damageScaling": "2300% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+40",
      "lvl1": "2300% + 500",
      "lvl90": "2300% + 511",
      "effects": [
        "Hit-Based Shield Lv4",
        "Healing Shield Lv5",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Shield Lv4",
          "value": 25,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 0.13
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Wonder if it's done...?",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +35 UP to all allies for 15 seconds and Magic Attack +35 UP for 15 seconds , 15 Accuracy 9 UP",
      "descriptionLv1": "Applies Physical Attack +35 UP to all allies for 15 seconds and Magic Attack +35 UP for 15 seconds , 15 Accuracy 9 UP",
      "descriptionLv90": "Applies Physical Attack +665 UP to all allies for 15 seconds and Magic Attack +665 UP for 15 seconds , 15 Accuracy 18 UP",
      "target": "All Allies",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Magic Attack + Lv4",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 7.0
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 0.1
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I hope you like it ",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, inflict 4s , 4s Curse for",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Chocolate... want some...?",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Hit-Based Shield(+3 hit(s)) for 15 seconds and Healing Shield (300) for 15 seconds , 15 Block 11 UP",
      "effect": "2300% + 500",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Lv4",
          "value": 25,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "Wonder if it's done...?",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +35 UP to all allies for 15 seconds and Magic Attack +35 UP for 15 seconds , 15 Accuracy 9 UP",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "I hope you like it ",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, inflict 4s , 4s Curse for",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "I hope you like it ",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy, inflict 5s , 5s Curse for",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery, Shield",
      "icon": "skill001/skill1007",
      "effect": "MP Recovery (+30%), Shield (+9999%)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Shield",
          "value": 9999,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "First Chocolate Making: Kaguya",
  "id": 2198,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2926,
    "ATK": 306,
    "MATK": 183,
    "DEF": 25,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.25"
  },
  "slug": "first-chocolate-making-kaguya"
};

export const stats = {
  "id": "first-chocolate-making-kaguya",
  "characterId": 2198,
  "name": "【First Chocolate Making】Kaguya",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2926,
      "lv90": 14632
    },
    "atk": {
      "base": 306,
      "lv90": 1530
    },
    "matk": {
      "base": 183,
      "lv90": 917
    },
    "def": {
      "base": 25,
      "lv90": 50
    },
    "mdef": {
      "base": 25,
      "lv90": 50
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 146,
      "lv90": 511
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 71,
      "lv90": 71
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
      "HP": 878,
      "ATK": 92,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 1010,
      "ATK": 106,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1185,
      "ATK": 124,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1317,
      "ATK": 138,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2488,
      "ATK": 261,
      "DEF": 9,
      "MDEF": 5,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6878,
      "ATK": 721,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 9,
      "MDEF": 5,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 308,
      "ATK": 32,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 370,
      "ATK": 39,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 431,
      "ATK": 45,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 493,
      "ATK": 52,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 555,
      "ATK": 58,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 616,
      "ATK": 64,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 678,
      "ATK": 71,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 739,
      "ATK": 77,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 801,
      "ATK": 84,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 863,
      "ATK": 90,
      "Phys Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 863,
      "ATK": 90,
      "Phys Crit": 7,
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
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "MP Charge": 4
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
