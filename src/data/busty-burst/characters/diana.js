// Character data: diana
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "diana",
  "name": "Diana",
  "displayName": "Diana",
  "baseName": "Diana",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 235,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Diana",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "175cm",
    "bust": "105cm (M Cup)",
    "waist": "57cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "旭",
      "romanized": ""
    },
    "voice": {
      "japanese": "香澄りょう",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2114
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rathbrink Style - Flourishing Sun",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 0.81,
      "damageScaling": "390% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+30",
      "lvl1": "390% + 200",
      "lvl90": "390% + 2870",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Sword Aura Release",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+850 UP to self for 12 seconds and Accuracy 23 UP for 12 seconds",
      "target": "Self",
      "castTime": 0.81,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rathbrink Style Ultimate - Flying Swallow Form 2",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 700",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rathbrink Style Ultimate - Flying Swallow Form 2",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy, inflict6s Silence for and Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1560% + 900",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rathbrink Style Ultimate - Flying Swallow Form 2",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy, inflict6s Silence for and Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "1760% + 1050",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rathbrink Style Ultimate - Flying Swallow Form 2",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy, inflict7s Silence for and Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "1900% + 1100",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rathbrink Style Ultimate - Flying Swallow Form 2",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy, inflict7s Silence for and Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "2039% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
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
  "name": "Diana",
  "id": 2114,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 242,
    "MATK": 145,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.6"
  },
  "slug": "diana"
};

export const stats = {
  "id": "diana",
  "characterId": 2114,
  "name": "Diana",
  "rarity": "SSR",
  "element": "聖",
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
      "base": 242,
      "lv90": 1210
    },
    "matk": {
      "base": 145,
      "lv90": 725
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
      "base": 118,
      "lv90": 413
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
      "base": 54,
      "lv90": 54
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
      "ATK": 73,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 816,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 98,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1064,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "ATK": 224,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5557,
      "ATK": 587,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 20
    },
    "gp2": {
      "Accuracy": 3,
      "Phys Crit": 20
    },
    "gp3": {
      "Accuracy": 3,
      "Phys Crit": 50
    },
    "gp4": {
      "Accuracy": 7,
      "Phys Crit": 50
    },
    "gp5": {
      "Accuracy": 7,
      "Phys Crit": 80
    },
    "gp6": {
      "Accuracy": 10,
      "Phys Crit": 80
    },
    "gp7": {
      "Accuracy": 10,
      "Phys Crit": 110
    },
    "gp8": {
      "Accuracy": 13,
      "Phys Crit": 110
    },
    "gp9": {
      "Accuracy": 13,
      "Phys Crit": 140
    },
    "gp10": {
      "Accuracy": 16,
      "Phys Crit": 140
    },
    "total": {
      "Accuracy": 16,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 31,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 36,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 41,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 46,
      "Phys Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 498,
      "ATK": 51,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 56,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 61,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 66,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 697,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 20
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 28
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 36
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 44
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 52
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 55
    }
  ]
};;;;;;;;
