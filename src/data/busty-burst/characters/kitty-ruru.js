// Character data: kitty-ruru
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "kitty-ruru",
  "name": "Kitty: Ruru",
  "displayName": "Kitty: Ruru",
  "baseName": "Ruru",
  "title": "Kitty",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 245,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Ruru",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "98cm (J Cup)",
    "waist": "59cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "七瀬瑞穂",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤崎紗矢香",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2167
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Meow Meow Scratch Scratch",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 6 seconds and Action Speed DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 6 seconds and Action Speed DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -320 DOWN for 6 seconds and Action Speed DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.7,
      "damageScaling": "370% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "370% + 500",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv5",
        "Action Speed - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Meow Meow Guruguru",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to all allies for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 40 UP to all allies for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 40 UP to all allies for 10 seconds and Action Speed UP for 10 seconds",
      "target": "All Allies",
      "castTime": 0.85,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
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
      "name": "Meow Jewel, Devoted Heart!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 5s , and before activating the Ultimate,apply to self10 Physical Attack UP(LV 1)",
      "effect": "1200% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Meow Meow Scratch Scratch",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 6 seconds and Action Speed DOWN for 6 seconds",
      "effect": "370% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Meow Meow Guruguru",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to all allies for 10 seconds and Action Speed UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Meow Jewel, Devoted Heart!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 5s , and before activating the Ultimate,apply to self10 Physical Attack UP(LV 1)",
      "effect": "1200% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Meow Jewel, Devoted Heart!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, inflict6s Blind for, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 2)",
      "effect": "1440% + 1050",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Mind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Mind Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Mind Type ATK +",
          "value": 5,
          "type": "percent"
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
  "name": "Kitty: Ruru",
  "id": 2167,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
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
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.42"
  },
  "slug": "kitty-ruru"
};

export const stats = {
  "id": "kitty-ruru",
  "characterId": 2167,
  "name": "【Kitty】Ruru",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
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
      "ATK": 206,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 22
    },
    "total": {
      "HP": 5557,
      "ATK": 569,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 22
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
      "Phys Crit": 29
    }
  ]
};;;;;;;;
