// Character data: nephilia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "nephilia",
  "name": "Nephilia",
  "displayName": "Nephilia",
  "baseName": "Nephilia",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Fast",
  "range": 500,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Nephilia",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "163cm",
    "bust": "104cm (K Cup)",
    "waist": "60cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
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
  "characterId": 2217
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Denaria!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Water Type Damage Taken UP for 6 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Water Type Damage Taken UP for 6 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Water Type Damage Taken UP for 6 seconds and Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.65,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "380% + 500",
      "lvl90": "380% + 486",
      "effects": [
        "Water Type Damage Taken + Lv5",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Water Type Damage Taken + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
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
      "name": "Water Basin Punishment!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Accuracy -11 DOWN for 10 seconds , 10 Action Speed DOWN",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Accuracy -11 DOWN for 10 seconds , 10 Action Speed DOWN",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Accuracy -23 DOWN for 10 seconds , 10 Action Speed DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.75,
      "damageScaling": "120% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "120% + 200",
      "lvl90": null,
      "effects": [
        "Stun",
        "Accuracy - Lv4",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Water Goddess Denaria! Bring divine punishment upon them!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds, and before activating the Ultimate,self10 Magic Critical DamageUP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Denaria!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Water Type Damage Taken UP for 6 seconds and Block-13 DOWN for 6 seconds",
      "effect": "380% + 500",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Water Basin Punishment!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Accuracy -11 DOWN for 10 seconds , 10 Action Speed DOWN",
      "effect": "120% + 200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Water Goddess Denaria! Bring divine punishment upon them!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds, and before activating the Ultimate,self10 Magic Critical DamageUP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Water Goddess Denaria! Bring divine punishment upon them!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 4 seconds and Magic Defense DOWN(LV 2) for 10 seconds, and before activating the Ultimate,self10 Magic Critical DamageUP(LV 2)",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Water Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Water Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
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
      "name": "Skill Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
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
  "name": "Nephilia",
  "id": 2217,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 168,
    "MATK": 281,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.45"
  },
  "slug": "nephilia"
};

export const stats = {
  "id": "nephilia",
  "characterId": 2217,
  "name": "Nephilia",
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
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 168,
      "lv90": 843
    },
    "matk": {
      "base": 281,
      "lv90": 1405
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 57,
      "lv90": 114
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
      "base": 104,
      "lv90": 365
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
      "base": 53,
      "lv90": 53
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
      "MATK": 84,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "MATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 114,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "MATK": 260,
      "DEF": 12,
      "MDEF": 19,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "MATK": 682,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 12,
      "MDEF": 19,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 30,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 30,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 90,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 90,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 130,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 130,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 170,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 170,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 210,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 210,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 30,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 36,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 41,
      "MDEF": 5,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 47,
      "MDEF": 6,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 53,
      "MDEF": 7,
      "Magic Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "MATK": 59,
      "MDEF": 7,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 65,
      "MDEF": 8,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 71,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 83,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "MATK": 83,
      "MDEF": 10,
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
      "MATK": 25
    },
    {
      "grade": 3,
      "Magic Crit": 6
    },
    {
      "grade": 4,
      "MATK": 34
    },
    {
      "grade": 5,
      "Magic Crit": 8
    },
    {
      "grade": 6,
      "MATK": 42
    },
    {
      "grade": 7,
      "Magic Crit": 9
    },
    {
      "grade": 8,
      "MATK": 51
    },
    {
      "grade": 9,
      "Magic Crit": 11
    },
    {
      "grade": 10,
      "MATK": 59
    },
    {
      "grade": 11,
      "Magic Crit": 13
    }
  ]
};;;;;;;;
