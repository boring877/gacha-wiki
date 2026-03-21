// Character data: gil
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "gil",
  "name": "Gil",
  "displayName": "Gil",
  "baseName": "Gil",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 330,
  "weaponType": "Ranged",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Gil",
  "introduction": "Middle Row、Physical、Attacker",
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
  "characterId": 2135
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Liberty Bell",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -25 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -25 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -205 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "320% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+0",
      "lvl1": "320% + 500",
      "lvl90": "320% + 322",
      "effects": [
        "Physical Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "MEGA MOOLAH",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +35 UP to self for 12 seconds and Action Speed UP for 12 seconds /",
      "descriptionLv1": "Applies Physical Attack +35 UP to self for 12 seconds and Action Speed UP for 12 seconds /",
      "descriptionLv90": "Applies Physical Attack +665 UP to self for 12 seconds and Action Speed UP for 12 seconds /",
      "target": "Self",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
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
      "name": "Jackpot・Overcall",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeinflict10 Physical Defense DOWN(LV 1)",
      "effect": "860% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Liberty Bell",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -25 DOWN for 10 seconds",
      "effect": "320% + 500",
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "MEGA MOOLAH",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +35 UP to self for 12 seconds and Action Speed UP for 12 seconds /",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Jackpot・Overcall",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeinflict10 Physical Defense DOWN(LV 1)",
      "effect": "860% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Jackpot・Overcall",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeinflict10 Physical Defense DOWN(LV 2)",
      "effect": "980% + 600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Block+ (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Gil",
  "id": 2135,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 276,
    "MATK": 166,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "gil"
};

export const stats = {
  "id": "gil",
  "characterId": 2135,
  "name": "Gil",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
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
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 50,
      "lv90": 150
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
      "base": 90,
      "lv90": 317
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
      "HP": 546,
      "ATK": 83,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "ATK": 95,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 112,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 124,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 253,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4276,
      "ATK": 667,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 25
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
      "HP": 191,
      "ATK": 29,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 35,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 41,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 47,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 52,
      "Phys Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 58,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 64,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 70,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 76,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 82,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 536,
      "ATK": 82,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 10
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 14
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 18
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 22
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 26
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 27
    }
  ]
};;;;;;;;
