// Character data: repressed-schoolgirl-raffine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "repressed-schoolgirl-raffine",
  "name": "Repressed Schoolgirl: Raffine",
  "displayName": "Repressed Schoolgirl: Raffine",
  "baseName": "Raffine",
  "title": "Repressed Schoolgirl",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 205,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "image": "Raffine",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "147cm",
    "bust": "90cm (I Cup)",
    "waist": "55cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "潮谷篭愛",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2187
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Idiot idiot idiot! Get away!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "350% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+25",
      "lvl1": "350% + 400",
      "lvl90": "350% + 386",
      "effects": [
        "Block- Lv5"
      ],
      "buffEffects": [
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
      "name": "Delusion Rampage Storm",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 2.5 seconds , 4s Blind for",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Dispel for 2.5 seconds , 4s Blind for",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Dispel for 2.5 seconds , 4s Blind for",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "310% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "310% + 150",
      "lvl90": null,
      "effects": [
        "Cleanse",
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I can't stop fantasizing~~!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies, and before activating the Ultimate, applies Physical Attack UP(LV 1) to self for 10 seconds and Mind Type ATK UP(LV 1) for 10 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Idiot idiot idiot! Get away!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "effect": "350% + 400",
      "buffEffects": [
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
      "name": "Delusion Rampage Storm",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 2.5 seconds , 4s Blind for",
      "effect": "310% + 150",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "I can't stop fantasizing~~!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies, and before activating the Ultimate, applies Physical Attack UP(LV 1) to self for 10 seconds and Mind Type ATK UP(LV 1) for 10 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I can't stop fantasizing~~!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies, and before activating the Ultimate, applies Physical Attack UP(LV 2) to self for 10 seconds and Mind Type ATK UP(LV 2) for 10 seconds",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Accuracy +, Physical Critical Damage+",
      "icon": "skill001/skill1003",
      "effect": "Accuracy + (+25), Physical Critical Damage+ (+100)",
      "effectValues": [
        {
          "name": "Accuracy +",
          "value": 25,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 100,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Repressed Schoolgirl: Raffine",
  "id": 2187,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 343,
    "MATK": 206,
    "DEF": 240,
    "MDEF": 240
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "repressed-schoolgirl-raffine"
};

export const stats = {
  "id": "repressed-schoolgirl-raffine",
  "characterId": 2187,
  "name": "【Repressed Schoolgirl】Raffine",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 343,
      "lv90": 1168
    },
    "matk": {
      "base": 206,
      "lv90": 1581
    },
    "def": {
      "base": 240,
      "lv90": 480
    },
    "mdef": {
      "base": 240,
      "lv90": 480
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
      "base": 53,
      "lv90": 72
    },
    "magicCrit": {
      "base": 32,
      "lv90": 64
    },
    "hpRegen": {
      "base": 63,
      "lv90": 222
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
      "base": 58,
      "lv90": 58
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
      "HP": 382,
      "ATK": 103,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 439,
      "ATK": 119,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "ATK": 139,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 573,
      "ATK": 155,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1178,
      "ATK": 318,
      "DEF": 78,
      "MDEF": 48,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3088,
      "ATK": 834,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 78,
      "MDEF": 48,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 300,
      "ATK": 120
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 750,
      "ATK": 200
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1200,
      "ATK": 280
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 1650,
      "ATK": 360
    },
    "gp10": {
      "HP": 2100,
      "ATK": 360
    },
    "total": {
      "HP": 2100,
      "ATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 134,
      "ATK": 36,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "ATK": 43,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "ATK": 51,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "ATK": 58,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "ATK": 65,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 268,
      "ATK": 72,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "ATK": 80,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "ATK": 87,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "ATK": 94,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 375,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 29
    },
    {
      "grade": 2,
      "HP": 115
    },
    {
      "grade": 3,
      "ATK": 40
    },
    {
      "grade": 4,
      "HP": 153
    },
    {
      "grade": 5,
      "ATK": 52
    },
    {
      "grade": 6,
      "HP": 191
    },
    {
      "grade": 7,
      "ATK": 63
    },
    {
      "grade": 8,
      "HP": 229
    },
    {
      "grade": 9,
      "ATK": 74
    },
    {
      "grade": 10,
      "HP": 267
    },
    {
      "grade": 11,
      "ATK": 82
    }
  ]
};;;;;;;;
