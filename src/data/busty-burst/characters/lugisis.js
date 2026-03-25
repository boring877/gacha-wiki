// Character data: lugisis
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lugisis",
  "name": "Lugisis",
  "displayName": "Lugisis",
  "baseName": "Lugisis",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 500,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Lugisis",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "160cm",
    "bust": "110cm (N Cup)",
    "waist": "58cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "西條サトル",
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
  "characterId": 2218
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I'm getting mad",
      "icon": "skill001/skill0011",
      "description": "3 enemies3 and Fear(MP --100 per second) for 3 seconds , 10 Accuracy -13 DOWN",
      "descriptionLv1": "3 enemies3 and Fear(MP --100 per second) for 3 seconds , 10 Accuracy -13 DOWN",
      "descriptionLv90": "3 enemies3 and Fear(MP --100 per second) for 3 seconds , 10 Accuracy -26 DOWN",
      "target": "Back Enemy",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Cleanse",
        "Fear LvMax",
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Fear LvMax",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Please use this",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts Hit-Based Shield (30%+2 hit(s)) for 10 seconds and Shield (1000) for 10 seconds , 10 Block 13 UP",
      "descriptionLv1": "Restores HP by to all allies and inflicts Hit-Based Shield (30%+2 hit(s)) for 10 seconds and Shield (1000) for 10 seconds , 10 Block 13 UP",
      "descriptionLv90": "Restores HP by to all allies and inflicts Hit-Based Shield (30%+2 hit(s)) for 10 seconds and Shield (1000) for 10 seconds , 10 Block 26 UP",
      "target": "All Allies",
      "castTime": 0.2,
      "damageScaling": "1500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+50",
      "lvl1": "1500% + 500",
      "lvl90": "1500% + 513",
      "effects": [
        "Hit-Based Shield",
        "Shield",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Shield",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Shield",
          "value": 1000,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.15
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I absolutely won't get married!",
      "icon": "skill001/skill0012_1",
      "description": "3 to enemiesmagic damage and inflicts Freeze(LV 1) for 2 seconds and Physical Attack DOWN(LV 1) for 10 seconds , 10 Magic Attack DOWN(LV 1)",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -100,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -100,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I absolutely won't get married!",
      "icon": "skill001/skill0012_2",
      "description": "3 to enemiesmagic damage and inflicts Freeze(LV 2) for 2.5 seconds and Physical Attack DOWN(LV 2) for 10 seconds , 10 Magic Attack DOWN(LV 2)",
      "effect": "420% + 650",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -150,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -150,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I absolutely won't get married!",
      "icon": "skill001/skill0012_3",
      "description": "3 to enemiesmagic damage and inflicts Freeze(LV 3) for 2.5 seconds and Physical Attack DOWN(LV 3) for 10 seconds , 10 Magic Attack DOWN(LV 3)",
      "effect": "455% + 800",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv3",
          "value": -4000,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -200,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv3",
          "value": -200,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I absolutely won't get married!",
      "icon": "skill001/skill0012_4",
      "description": "3 to enemiesmagic damage and inflicts Freeze(LV 4) for 3 seconds and Physical Attack DOWN(LV 4) for 10 seconds , 10 Magic Attack DOWN(LV 4)",
      "effect": "490% + 900",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv4",
          "value": -4500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -250,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv4",
          "value": -250,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I absolutely won't get married!",
      "icon": "skill001/skill0012_5",
      "description": "3 to enemiesmagic damage and inflicts Freeze(LV 5) for 3 seconds and Physical Attack DOWN(LV 5) for 10 seconds , 10 Magic Attack DOWN(LV 5)",
      "effect": "509% + 1000",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv5",
          "value": -5000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -300,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv5",
          "value": -300,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Debuff Resistance+, MP Recovery",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1007",
      "effect": "Ultimate Damage + (+5%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lugisis",
  "id": 2218,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2251,
    "ATK": 174,
    "MATK": 291,
    "DEF": 120,
    "MDEF": 80
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "lugisis"
};

export const stats = {
  "id": "lugisis",
  "characterId": 2218,
  "name": "Lugisis",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2251,
      "lv90": 11255
    },
    "atk": {
      "base": 174,
      "lv90": 872
    },
    "matk": {
      "base": 291,
      "lv90": 1455
    },
    "def": {
      "base": 120,
      "lv90": 240
    },
    "mdef": {
      "base": 80,
      "lv90": 160
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 112,
      "lv90": 393
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
      "base": 63,
      "lv90": 63
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
      "HP": 675,
      "MATK": 87,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 777,
      "MATK": 100,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 912,
      "MATK": 118,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1013,
      "MATK": 131,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1914,
      "MATK": 248,
      "DEF": 24,
      "MDEF": 29,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5291,
      "MATK": 684,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 24,
      "MDEF": 29,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "Block": 3,
      "MP Cost Down": 3
    },
    "gp3": {
      "Block": 3,
      "MP Cost Down": 5
    },
    "gp4": {
      "Block": 7,
      "MP Cost Down": 5
    },
    "gp5": {
      "Block": 7,
      "MP Cost Down": 6
    },
    "gp6": {
      "Block": 10,
      "MP Cost Down": 6
    },
    "gp7": {
      "Block": 10,
      "MP Cost Down": 7
    },
    "gp8": {
      "Block": 13,
      "MP Cost Down": 7
    },
    "gp9": {
      "Block": 13,
      "MP Cost Down": 8
    },
    "gp10": {
      "Block": 16,
      "MP Cost Down": 8
    },
    "total": {
      "Block": 16,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 237,
      "MATK": 31,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 284,
      "MATK": 37,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 332,
      "MATK": 43,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 379,
      "MATK": 49,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 427,
      "MATK": 55,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 474,
      "MATK": 61,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 521,
      "MATK": 67,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 569,
      "MATK": 74,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 616,
      "MATK": 80,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 664,
      "MATK": 86,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 664,
      "MATK": 86,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
