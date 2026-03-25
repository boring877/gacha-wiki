// Character data: lycorys
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lycorys",
  "name": "Lycorys",
  "displayName": "Lycorys",
  "baseName": "Lycorys",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 540,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lycorys",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "154cm",
    "bust": "93cm (I Cup)",
    "waist": "55cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "あやかわりく",
      "romanized": ""
    },
    "voice": {
      "japanese": "東かりん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2106
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Hehehe... this is my greatest masterpiece",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the farthest enemy and inflicts Action Speed -20%DOWN for 12 seconds and Accuracy -11 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the farthest enemy and inflicts Action Speed -20%DOWN for 12 seconds and Accuracy -11 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the farthest enemy and inflicts Action Speed -20%DOWN for 12 seconds and Accuracy -23 DOWN for 12 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.22,
      "damageScaling": "300% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "300% + 250",
      "lvl90": "300% + 238",
      "effects": [
        "Action Speed - Lv5",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.13
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "I wonder if it'll work... hehehe",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the farthest enemy and inflicts Dispel for 1 seconds and Deadly Poison(HP --600 per second, stackable) for 6 seconds",
      "descriptionLv1": "Deals physical damage to the farthest enemy and inflicts Dispel for 1 seconds and Deadly Poison(HP --600 per second, stackable) for 6 seconds",
      "descriptionLv90": "Deals physical damage to the farthest enemy and inflicts Dispel for 1 seconds and Deadly Poison(HP --6000 per second, stackable) for 6 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.22,
      "damageScaling": "260% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "260% + 150",
      "lvl90": "260% + -5190",
      "effects": [
        "Cleanse",
        "Deadly Poison LvMax"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Deadly Poison LvMax",
          "value": -600,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -60.0
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hehehe... my greatest masterpiece ever!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the farthest enemy, inflict 4s and Deadly Poison(LV 1) for 8 seconds",
      "effect": "900% + 1000",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Deadly Poison Ultimate Lv1",
          "value": -6000,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Hehehe... my greatest masterpiece ever!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the farthest enemy, inflict 5s and Deadly Poison(LV 2) for 8 seconds",
      "effect": "1080% + 1150",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Deadly Poison Ultimate Lv2",
          "value": -7000,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hehehe... my greatest masterpiece ever!",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the farthest enemy, inflict 5s and Deadly Poison(LV 3) for 8 seconds",
      "effect": "1210% + 1300",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Deadly Poison Ultimate Lv3",
          "value": -8000,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hehehe... my greatest masterpiece ever!",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the farthest enemy, inflict6s Paralysis for and Deadly Poison(LV 4) for 8 seconds",
      "effect": "1300% + 1400",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Deadly Poison Ultimate Lv4",
          "value": -9000,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hehehe... my greatest masterpiece ever!",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the farthest enemy, inflict6s Paralysis for and Deadly Poison(LV 5) for 8 seconds",
      "effect": "1350% + 1500",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Deadly Poison Ultimate Lv5",
          "value": -10000,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Physical Attack + (+389)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lycorys",
  "id": 2106,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 343,
    "MATK": 206,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "lycorys"
};

export const stats = {
  "id": "lycorys",
  "characterId": 2106,
  "name": "Lycorys",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1964,
      "lv90": 9822
    },
    "atk": {
      "base": 343,
      "lv90": 1718
    },
    "matk": {
      "base": 206,
      "lv90": 1031
    },
    "def": {
      "base": 143,
      "lv90": 286
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
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 98,
      "lv90": 343
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
      "HP": 589,
      "ATK": 103,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 678,
      "ATK": 119,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "ATK": 139,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 884,
      "ATK": 155,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1670,
      "ATK": 318,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4617,
      "ATK": 834,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 207,
      "ATK": 36,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 248,
      "ATK": 43,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 290,
      "ATK": 51,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 331,
      "ATK": 58,
      "Phys Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 372,
      "ATK": 65,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 414,
      "ATK": 72,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 455,
      "ATK": 80,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 496,
      "ATK": 87,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 538,
      "ATK": 94,
      "Phys Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 579,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 579,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "ATK": 31
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "ATK": 41
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "ATK": 52
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "ATK": 62
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "ATK": 72
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
