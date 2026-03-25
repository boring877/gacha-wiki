// Character data: fireworks-master-of-the-sky-festival-viatrice
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "fireworks-master-of-the-sky-festival-viatrice",
  "name": "Fireworks Master of the Sky Festival: Viatrice",
  "displayName": "Fireworks Master of the Sky Festival: Viatrice",
  "baseName": "Viatrice",
  "title": "Fireworks Master of the Sky Festival",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 550,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Viatrice",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "156cm",
    "bust": "108cm (N Cup)",
    "waist": "59cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "黒川おとぎ",
      "romanized": ""
    },
    "voice": {
      "japanese": "高梨はなみ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2157
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Pop it out!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit",
      "descriptionLv1": "Deals magic damage to the nearest enemy, guaranteed hit",
      "descriptionLv90": "Deals magic damage to the nearest enemy, guaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 1.32,
      "damageScaling": "300% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+30",
      "lvl1": "300% + 250",
      "lvl90": "300% + 2920",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Snap snap snap~!!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-30 DOWN for 6 seconds, 1.5s Stun for",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-30 DOWN for 6 seconds, 1.5s Stun for",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-18%-210 DOWN for 6 seconds, 1.5s Stun for",
      "target": "Nearest Enemy",
      "castTime": 1.32,
      "damageScaling": "80% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "80% + 80",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv3",
        "Stun"
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
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Fabulous Bang! Bang! Bang~!!",
      "icon": "skill001/skill0006_1",
      "description": "to all enemiesmagic damage and inflicts BlockDOWN(LV 1) for 10 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "500% + 500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Fabulous Bang! Bang! Bang~!!",
      "icon": "skill001/skill0006_2",
      "description": "to all enemiesmagic damage and inflicts BlockDOWN(LV 2) for 10 seconds and Action Speed DOWN(LV 2) for 10 seconds",
      "effect": "700% + 750",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Fabulous Bang! Bang! Bang~!!",
      "icon": "skill001/skill0006_3",
      "description": "to all enemiesmagic damage and inflicts BlockDOWN(LV 3) for 10 seconds and Action Speed DOWN(LV 3) for 10 seconds",
      "effect": "850% + 900",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Fabulous Bang! Bang! Bang~!!",
      "icon": "skill001/skill0006_4",
      "description": "to all enemiesmagic damage and inflicts BlockDOWN(LV 4) for 10 seconds and Action Speed DOWN(LV 4) for 10 seconds",
      "effect": "950% + 1000",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Fabulous Bang! Bang! Bang~!!",
      "icon": "skill001/skill0006_5",
      "description": "to all enemiesmagic damage and inflicts BlockDOWN(LV 5) for 10 seconds and Action Speed DOWN(LV 5) for 10 seconds",
      "effect": "1000% + 1100",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+176), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
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
  "name": "Fireworks Master of the Sky Festival: Viatrice",
  "id": 2157,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1146,
    "ATK": 206,
    "MATK": 343,
    "DEF": 240,
    "MDEF": 240
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.81"
  },
  "slug": "fireworks-master-of-the-sky-festival-viatrice"
};

export const stats = {
  "id": "fireworks-master-of-the-sky-festival-viatrice",
  "characterId": 2157,
  "name": "【Fireworks Master of the Sky Festival】Viatrice",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1146,
      "lv90": 5730
    },
    "atk": {
      "base": 206,
      "lv90": 1031
    },
    "matk": {
      "base": 343,
      "lv90": 1718
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
      "base": 70,
      "lv90": 190
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
      "base": 57,
      "lv90": 200
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
      "HP": 344,
      "MATK": 103,
      "Block": 18,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 395,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 464,
      "MATK": 139,
      "Block": 24,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 516,
      "MATK": 155,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1061,
      "MATK": 318,
      "DEF": 48,
      "MDEF": 78
    },
    "total": {
      "HP": 2780,
      "MATK": 834,
      "Block": 90,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 48,
      "MDEF": 78
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 300,
      "MATK": 120
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 750,
      "MATK": 200
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1200,
      "MATK": 280
    },
    "gp8": {
      "HP": 1650,
      "MATK": 280
    },
    "gp9": {
      "HP": 1650,
      "MATK": 360
    },
    "gp10": {
      "HP": 2100,
      "MATK": 360
    },
    "total": {
      "HP": 2100,
      "MATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 121,
      "MATK": 36,
      "MDEF": 16,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 145,
      "MATK": 43,
      "MDEF": 19,
      "Magic Crit": 1,
      "Block": 19
    },
    "g3": {
      "HP": 169,
      "MATK": 51,
      "MDEF": 22,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 193,
      "MATK": 58,
      "MDEF": 25,
      "Magic Crit": 2,
      "Block": 25
    },
    "g5": {
      "HP": 217,
      "MATK": 65,
      "MDEF": 28,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 241,
      "MATK": 72,
      "MDEF": 31,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 265,
      "MATK": 80,
      "MDEF": 34,
      "Magic Crit": 2,
      "Block": 35
    },
    "g8": {
      "HP": 290,
      "MATK": 87,
      "MDEF": 37,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 314,
      "MATK": 94,
      "MDEF": 40,
      "Magic Crit": 3,
      "Block": 41
    },
    "g10": {
      "HP": 338,
      "MATK": 101,
      "MDEF": 43,
      "Magic Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 338,
      "MATK": 101,
      "MDEF": 43,
      "Magic Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "HP": 103
    },
    {
      "grade": 3,
      "MATK": 40
    },
    {
      "grade": 4,
      "HP": 138
    },
    {
      "grade": 5,
      "MATK": 52
    },
    {
      "grade": 6,
      "HP": 172
    },
    {
      "grade": 7,
      "MATK": 63
    },
    {
      "grade": 8,
      "HP": 206
    },
    {
      "grade": 9,
      "MATK": 74
    },
    {
      "grade": 10,
      "HP": 241
    },
    {
      "grade": 11,
      "MATK": 82
    }
  ]
};;;;;;;;
