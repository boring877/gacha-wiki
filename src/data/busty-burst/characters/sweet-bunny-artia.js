// Character data: sweet-bunny-artia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sweet-bunny-artia",
  "name": "Sweet Bunny: Artia",
  "displayName": "Sweet Bunny: Artia",
  "baseName": "Artia",
  "title": "Sweet Bunny",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 385,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Artia",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "風花ましろ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2119
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sweet Bunny ~ Showtime",
      "icon": "skill001/skill0019",
      "description": "All allies receive MP Recovery 110 and Hit-Based Damage UP(+400, 3 hit(s)) for 20 seconds , 20 Hit-Based Shield(+4 hit(s))",
      "descriptionLv1": "All allies receive MP Recovery 110 and Hit-Based Damage UP(+400, 3 hit(s)) for 20 seconds , 20 Hit-Based Shield(+4 hit(s))",
      "descriptionLv90": "All allies receive MP Recovery 110 and Hit-Based Damage UP(+400, 3 hit(s)) for 20 seconds , 20 Hit-Based Shield(+4 hit(s))",
      "target": "All Allies",
      "castTime": 1.0,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Recovery",
        "Hit-Based Damage + Lv4",
        "Hit-Based Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 110,
          "type": "percent",
          "levelGrowth": 1.0
        },
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 20,
          "levelGrowth": 400.0
        },
        {
          "name": "Hit-Based Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "Sweet Bunny ~ Aggravation Art",
      "icon": "skill001/skill0011",
      "description": "3 nearest enemies2s Charm for and Accuracy -13 DOWN for 12 seconds , 12 Action Speed DOWN",
      "descriptionLv1": "3 nearest enemies2s Charm for and Accuracy -13 DOWN for 12 seconds , 12 Action Speed DOWN",
      "descriptionLv90": "3 nearest enemies2s Charm for and Accuracy -26 DOWN for 12 seconds , 12 Action Speed DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Accuracy - Lv5",
        "Action Speed - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.15
        },
        {
          "name": "Action Speed - LvMax",
          "value": -25,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rabit Rapid Stream",
      "icon": "skill001/skill0006_1",
      "description": "magic damage and inflicts BlockDOWN(LV 1) for 8 seconds, all allies8 Action Speed UP(LV 1), self1[Bunny~]( per stack of[Bunny~] whenSpeed5%UP, max3), when having3[Bunny~] whenUltimate damage +100%all alliesMP Recovery200",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 8,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sweet Bunny ~ Showtime",
      "icon": "skill001/skill0019",
      "description": "All allies receive MP Recovery 110 and Hit-Based Damage UP(+400, 3 hit(s)) for 20 seconds , 20 Hit-Based Shield(+4 hit(s))",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 110,
          "type": "percent"
        },
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sweet Bunny ~ Aggravation Art",
      "icon": "skill001/skill0011",
      "description": "3 nearest enemies2s Charm for and Accuracy -13 DOWN for 12 seconds , 12 Action Speed DOWN",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Action Speed - LvMax",
          "value": -25,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rabit Rapid Stream",
      "icon": "skill001/skill0006_1",
      "description": "magic damage and inflicts BlockDOWN(LV 1) for 8 seconds, all allies8 Action Speed UP(LV 1), self1[Bunny~]( per stack of[Bunny~] whenSpeed5%UP, max3), when having3[Bunny~] whenUltimate damage +100%all alliesMP Recovery200",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 8,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rabit Rapid Stream",
      "icon": "skill001/skill0006_2",
      "description": "magic damage and inflicts BlockDOWN(LV 2) for 8 seconds, all allies8 Action Speed UP(LV 2), self1[Bunny~]( per stack of[Bunny~] whenSpeed5%UP, max3), when having3[Bunny~] whenUltimate damage +100%all alliesMP Recovery200",
      "effect": "520% + 500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 10,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+10%), Ultimate Damage + (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Sweet Bunny: Artia",
  "id": 2119,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2926,
    "ATK": 197,
    "MATK": 329,
    "DEF": 43,
    "MDEF": 108
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "sweet-bunny-artia"
};

export const stats = {
  "id": "sweet-bunny-artia",
  "characterId": 2119,
  "name": "【Sweet Bunny】Artia",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2926,
      "lv90": 14632
    },
    "atk": {
      "base": 197,
      "lv90": 986
    },
    "matk": {
      "base": 329,
      "lv90": 1645
    },
    "def": {
      "base": 43,
      "lv90": 119
    },
    "mdef": {
      "base": 108,
      "lv90": 184
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
      "base": 47,
      "lv90": 75
    },
    "magicCrit": {
      "base": 78,
      "lv90": 125
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
      "HP": 878,
      "MATK": 99,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1010,
      "MATK": 114,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1185,
      "MATK": 133,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1317,
      "MATK": 148,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2488,
      "MATK": 280,
      "DEF": 12,
      "MDEF": 28,
      "Heal Pwr": 29
    },
    "total": {
      "HP": 6878,
      "MATK": 774,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 12,
      "MDEF": 28,
      "Heal Pwr": 29
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
      "HP": 308,
      "MATK": 35,
      "MDEF": 5,
      "Magic Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 370,
      "MATK": 42,
      "MDEF": 6,
      "Magic Crit": 2,
      "Block": 17
    },
    "g3": {
      "HP": 431,
      "MATK": 48,
      "MDEF": 7,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 493,
      "MATK": 55,
      "MDEF": 8,
      "Magic Crit": 3,
      "Block": 23
    },
    "g5": {
      "HP": 555,
      "MATK": 62,
      "MDEF": 9,
      "Magic Crit": 3,
      "MP Charge": 5
    },
    "g6": {
      "HP": 616,
      "MATK": 69,
      "MDEF": 10,
      "Magic Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 678,
      "MATK": 76,
      "MDEF": 11,
      "Magic Crit": 4,
      "Block": 32
    },
    "g8": {
      "HP": 739,
      "MATK": 83,
      "MDEF": 12,
      "Magic Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 801,
      "MATK": 90,
      "MDEF": 13,
      "Magic Crit": 4,
      "Block": 38
    },
    "g10": {
      "HP": 863,
      "MATK": 97,
      "MDEF": 14,
      "Magic Crit": 5,
      "MP Charge": 8
    },
    "total": {
      "HP": 863,
      "MATK": 97,
      "MDEF": 14,
      "Magic Crit": 5,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
