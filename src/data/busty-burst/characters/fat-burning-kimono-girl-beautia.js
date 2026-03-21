// Character data: fat-burning-kimono-girl-beautia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "fat-burning-kimono-girl-beautia",
  "name": "Fat-Burning Kimono Girl: Beautia",
  "displayName": "Fat-Burning Kimono Girl: Beautia",
  "baseName": "Beautia",
  "title": "Fat-Burning Kimono Girl",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Beautia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "179cm",
    "bust": "118cm (M Cup)",
    "waist": "69cm",
    "hips": "102cm"
  },
  "credits": {
    "illustration": {
      "japanese": "佐藤匠",
      "romanized": ""
    },
    "voice": {
      "japanese": "美空なつひ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2189
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Snake Whip Training",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense -40 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense -40 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense -220 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + 322",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Weight Loss - Spin",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 10 seconds and Action Speed DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 10 seconds and Action Speed DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Block-23 DOWN for 10 seconds and Action Speed DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "Action Speed - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Action Speed - Lv2",
          "value": -11,
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
      "name": "Spiral - Snake - Cutter",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds , 4s Paralysis for",
      "effect": "390% + 350",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Snake Whip Training",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense -40 DOWN for 6 seconds",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Weight Loss - Spin",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block-11 DOWN for 10 seconds and Action Speed DOWN for 10 seconds",
      "effect": "110% + 150",
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Lv2",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Spiral - Snake - Cutter",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds , 4s Paralysis for",
      "effect": "390% + 350",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "Spiral - Snake - Cutter",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 seconds and Accuracy DOWN(LV 2) for 10 seconds , 5s Paralysis for",
      "effect": "459% + 550",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Paralysis",
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
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
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
  "name": "Fat-Burning Kimono Girl: Beautia",
  "id": 2189,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2229,
    "ATK": 276,
    "MATK": 166,
    "DEF": 35,
    "MDEF": 14
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
    "speedValue": "0.85"
  },
  "slug": "fat-burning-kimono-girl-beautia"
};

export const stats = {
  "id": "fat-burning-kimono-girl-beautia",
  "characterId": 2189,
  "name": "【Fat-Burning Kimono Girl】Beautia",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2229,
      "lv90": 11148
    },
    "atk": {
      "base": 276,
      "lv90": 1382
    },
    "matk": {
      "base": 166,
      "lv90": 830
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 111,
      "lv90": 389
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
      "HP": 669,
      "ATK": 83,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 769,
      "ATK": 95,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 903,
      "ATK": 112,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1003,
      "ATK": 124,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1896,
      "ATK": 256,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5240,
      "ATK": 670,
      "Block": 83,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 10
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 30
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 50
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 70
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 235,
      "ATK": 29,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 282,
      "ATK": 35,
      "Phys Crit": 8,
      "Block": 17
    },
    "g3": {
      "HP": 329,
      "ATK": 41,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 376,
      "ATK": 47,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 422,
      "ATK": 52,
      "Phys Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 469,
      "ATK": 58,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 516,
      "ATK": 64,
      "Phys Crit": 14,
      "Block": 32
    },
    "g8": {
      "HP": 563,
      "ATK": 70,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 610,
      "ATK": 76,
      "Phys Crit": 17,
      "Block": 38
    },
    "g10": {
      "HP": 657,
      "ATK": 82,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 657,
      "ATK": 82,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "Phys Crit": 11
    },
    {
      "grade": 3,
      "ATK": 32
    },
    {
      "grade": 4,
      "Phys Crit": 15
    },
    {
      "grade": 5,
      "ATK": 41
    },
    {
      "grade": 6,
      "Phys Crit": 18
    },
    {
      "grade": 7,
      "ATK": 51
    },
    {
      "grade": 8,
      "Phys Crit": 22
    },
    {
      "grade": 9,
      "ATK": 60
    },
    {
      "grade": 10,
      "Phys Crit": 25
    },
    {
      "grade": 11,
      "ATK": 66
    }
  ]
};;;;;;;;
