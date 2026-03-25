// Character data: holy-night-boob-demon-lust
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "holy-night-boob-demon-lust",
  "name": "Holy Night Boob Demon: Lust",
  "displayName": "Holy Night Boob Demon: Lust",
  "baseName": "Lust",
  "title": "Holy Night Boob Demon",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 360,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lust",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "175cm",
    "bust": "116cm (Q Cup)",
    "waist": "59cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "かわはぎさかな",
      "romanized": ""
    },
    "voice": {
      "japanese": "ももぞの薫",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2184
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Radiating charm. Magic that captivates all who see it, known to all",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-30 DOWN for 6 seconds and Accuracy -9 DOWN for 6 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +50%, inflict6 Speed20%DOWN",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-30 DOWN for 6 seconds and Accuracy -9 DOWN for 6 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +50%, inflict6 Speed20%DOWN",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-210 DOWN for 6 seconds and Accuracy -18 DOWN for 6 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +50%, inflict6 Speed20%DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "130% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "130% + 200",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv3",
        "Accuracy - Lv3",
        "Frost"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    },
    {
      "slot": 3,
      "name": "Moving Vehicle. Unparalleled. Sin-Hiding Demon",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Block-23 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": "110% + 138",
      "effects": [
        "Stun",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Snow. Pure White Fairy, the cage the pure cannot escape",
      "icon": "skill001/skill0006_1",
      "description": "to all enemiesmagic damage and inflicts Water Type Damage Taken UP(LV 1) for 5 seconds and BlockDOWN(LV 1) for 10 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +80%, 2s Silence for",
      "effect": "500% + 500",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Snow. Pure White Fairy, the cage the pure cannot escape",
      "icon": "skill001/skill0006_2",
      "description": "to all enemiesmagic damage and inflicts Water Type Damage Taken UP(LV 2) for 5 seconds and BlockDOWN(LV 2) for 10 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +80%, 3s Silence for",
      "effect": "700% + 750",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Snow. Pure White Fairy, the cage the pure cannot escape",
      "icon": "skill001/skill0006_3",
      "description": "to all enemiesmagic damage and inflicts Water Type Damage Taken UP(LV 3) for 5 seconds and BlockDOWN(LV 3) for 10 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +80%, 3s Silence for",
      "effect": "850% + 900",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Snow. Pure White Fairy, the cage the pure cannot escape",
      "icon": "skill001/skill0006_4",
      "description": "to all enemiesmagic damage and inflicts Water Type Damage Taken UP(LV 4) for 5 seconds and BlockDOWN(LV 4) for 10 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +80%, 4s Silence for",
      "effect": "950% + 1000",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Snow. Pure White Fairy, the cage the pure cannot escape",
      "icon": "skill001/skill0006_5",
      "description": "to all enemiesmagic damage and inflicts Water Type Damage Taken UP(LV 5) for 5 seconds and BlockDOWN(LV 5) for 10 seconds , 1[Frost]([Frost]1Speed2%DOWN, max5), [Frost]5 when damage +80%, 4s Silence for",
      "effect": "1000% + 1100",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Frost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Water Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Water Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Water Type ATK +",
          "value": 5,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
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
  "name": "Holy Night Boob Demon: Lust",
  "id": 2184,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 192,
    "MATK": 321,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "holy-night-boob-demon-lust"
};

export const stats = {
  "id": "holy-night-boob-demon-lust",
  "characterId": 2184,
  "name": "【Holy Night Boob Demon】Lust",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 192,
      "lv90": 963
    },
    "matk": {
      "base": 321,
      "lv90": 1606
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
      "base": 118,
      "lv90": 413
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
      "base": 56,
      "lv90": 56
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
      "HP": 709,
      "MATK": 96,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 816,
      "MATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "MATK": 130,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1064,
      "MATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "MATK": 298,
      "DEF": 3,
      "MDEF": 11,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5557,
      "MATK": 780,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 3,
      "MDEF": 11,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "MATK": 34,
      "MDEF": 2,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "MATK": 41,
      "MDEF": 2,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "MATK": 47,
      "MDEF": 2,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "MATK": 54,
      "MDEF": 3,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "MATK": 61,
      "MDEF": 3,
      "Magic Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 498,
      "MATK": 68,
      "MDEF": 3,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "MATK": 74,
      "MDEF": 4,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "MATK": 81,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "MATK": 88,
      "MDEF": 4,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "MATK": 95,
      "MDEF": 5,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 697,
      "MATK": 95,
      "MDEF": 5,
      "Magic Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 4
    },
    {
      "grade": 2,
      "MATK": 29
    },
    {
      "grade": 3,
      "Magic Crit": 6
    },
    {
      "grade": 4,
      "MATK": 39
    },
    {
      "grade": 5,
      "Magic Crit": 8
    },
    {
      "grade": 6,
      "MATK": 48
    },
    {
      "grade": 7,
      "Magic Crit": 9
    },
    {
      "grade": 8,
      "MATK": 58
    },
    {
      "grade": 9,
      "Magic Crit": 11
    },
    {
      "grade": 10,
      "MATK": 67
    },
    {
      "grade": 11,
      "Magic Crit": 13
    }
  ]
};;;;;;;;
