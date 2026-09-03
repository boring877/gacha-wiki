// Character data: ビキニでタコ殴り-ギル
// Auto-generated from game data

export const info = {
  "slug": "bikini-beatdown-gil",
  "name": "[Bikini Beatdown] Gil",
  "displayName": "Bikini Beatdown Gil",
  "baseName": "Gil",
  "title": "Bikini Beatdown",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "弱體化、妨害"
  ],
  "image": "ギル",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "195cm",
    "bust": "120cm (N Cup)",
    "waist": "66cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "葵時緒",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2234
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Smash 'em!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds, on activation,self 6s Physical Attack 20%+40 UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds, on activation,self 6s Physical Attack 20%+40 UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds, on activation,self 6s Physical Attack 20%+850 UP",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "360% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "360% + 500",
      "lvl90": "360% + 1301",
      "effects": [
        "Stun",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 9.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "ぶっかけろっ！",
      "icon": "skill001/skill0011",
      "description": "3 nearest enemiesphysical damage, applies 3s Blind and Physical Critical Damage-13%-35 DOWN for 12 seconds, 12s Magic Critical Damage-13%-35 DOWN",
      "descriptionLv1": "3 nearest enemiesphysical damage, applies 3s Blind and Physical Critical Damage-13%-35 DOWN for 12 seconds, 12s Magic Critical Damage-13%-35 DOWN",
      "descriptionLv90": "3 nearest enemiesphysical damage, applies 3s Blind and Physical Critical Damage-13%-215 DOWN for 12 seconds, 12s Magic Critical Damage-13%-35 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "114.99999999999999% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "114% + 200",
      "lvl90": "114% + 22",
      "effects": [
        "Blind",
        "Physical Critical Damage- Lv4",
        "Magic Critical Damage- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Pummel time!",
      "icon": "skill001/skill0003_1",
      "description": "3 nearest enemiesphysical damage, applies 3s Blind and Physical Defense DOWN(LV 1) for 10 seconds, 10s Action Speed DOWN(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
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
      "name": "Pummel time!",
      "icon": "skill001/skill0003_2",
      "description": "3 nearest enemiesphysical damage, applies 4s Blind and Physical Defense DOWN(LV 2) for 10 seconds, 10s Action Speed DOWN(LV 2)",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
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
      "name": "Pummel time!",
      "icon": "skill001/skill0003_3",
      "description": "3 nearest enemiesphysical damage, applies 4s Blind and Physical Defense DOWN(LV 3) for 10 seconds, 10s Action Speed DOWN(LV 3)",
      "effect": "520% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
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
      "name": "Pummel time!",
      "icon": "skill001/skill0003_4",
      "description": "3 nearest enemiesphysical damage, applies 5s Blind and Physical Defense DOWN(LV 4) for 10 seconds, 10s Action Speed DOWN(LV 4)",
      "effect": "560% + 1050",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
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
      "name": "Pummel time!",
      "icon": "skill001/skill0003_5",
      "description": "3 nearest enemiesphysical damage, applies 5s Blind and Physical Defense DOWN(LV 5) for 10 seconds, 10s Action Speed DOWN(LV 5)",
      "effect": "580% + 1200",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
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
      "name": "Debuff Resistance+, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Debuff Resistance UP (Small), Physical Critical Damage UP (Medium)",
      "effect": "Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Medium)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Skill Damage UP (Large), Physical Attack UP (Medium)",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent",
          "gameText": "Skill Damage UP (Large)"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat",
          "gameText": "Physical Attack UP (Medium)"
        }
      ]
    }
  ],
  "name": "ビキニでタコ殴り: ギル",
  "id": 2234,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 299,
    "MATK": 179,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "ビキニでタコ殴り-ギル"
};

export const stats = {
  "id": "bikini-beatdown-gil",
  "characterId": 2234,
  "name": "[Bikini Beatdown] Gil",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 299,
      "lv90": 1495
    },
    "matk": {
      "base": 179,
      "lv90": 896
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
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
      "HP": 628,
      "ATK": 90,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "ATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 121,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 277,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 726,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 19,
      "MDEF": 12,
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
      "HP": 220,
      "ATK": 31,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 38,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 44,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 50,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 57,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "ATK": 63,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 69,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 76,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 82,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 25
    },
    {
      "grade": 2,
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "ATK": 35
    },
    {
      "grade": 4,
      "Phys Crit": 10
    },
    {
      "grade": 5,
      "ATK": 45
    },
    {
      "grade": 6,
      "Phys Crit": 12
    },
    {
      "grade": 7,
      "ATK": 55
    },
    {
      "grade": 8,
      "Phys Crit": 15
    },
    {
      "grade": 9,
      "ATK": 65
    },
    {
      "grade": 10,
      "Phys Crit": 17
    },
    {
      "grade": 11,
      "ATK": 75
    }
  ]
};;;
