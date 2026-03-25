// Character data: twin-shrine-maiden-raoul
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "twin-shrine-maiden-raoul",
  "name": "Twin Shrine Maiden: Raoul",
  "displayName": "Twin Shrine Maiden: Raoul",
  "baseName": "Raoul",
  "title": "Twin Shrine Maiden",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 330,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "MP Recovery"
  ],
  "image": "Raoul",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "140cm",
    "bust": "112cm (O Cup)",
    "waist": "62cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "羽生羽見",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2191
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Purify, cleanse",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest MP , inflict 2s , 2 and Taunt for 2 seconds.()",
      "descriptionLv1": "Deals magic damage to the enemy with the highest MP , inflict 2s , 2 and Taunt for 2 seconds.()",
      "descriptionLv90": "Deals magic damage to the enemy with the highest MP , inflict 2s , 2 and Taunt for 2 seconds.()",
      "target": "Highest MP Enemy",
      "castTime": 1.3,
      "damageScaling": "300% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "300% + 200",
      "lvl90": null,
      "effects": [
        "Silence",
        "Cleanse"
      ],
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Unknown Buff 5232",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Burubu Yurayura",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Healing Shield (400, restores 30%) for 20 seconds and Hit-Based Damage UP(35%+400, 3 hit(s)) for 20 seconds",
      "descriptionLv1": "restore HP to all alliesHP and inflicts Healing Shield (400, restores 30%) for 20 seconds and Hit-Based Damage UP(35%+400, 3 hit(s)) for 20 seconds",
      "descriptionLv90": "restore HP to all alliesHP and inflicts Healing Shield (400, restores 30%) for 20 seconds and Hit-Based Damage UP(35%+400, 3 hit(s)) for 20 seconds",
      "target": "All Allies",
      "castTime": 1.35,
      "damageScaling": "1000% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+30",
      "lvl1": "1000% + 500",
      "lvl90": "1000% + 36100",
      "effects": [
        "Healing Shield LvMax",
        "Hit-Based Damage + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Healing Shield LvMax",
          "value": 400,
          "type": "percent",
          "duration": 20,
          "levelGrowth": 30.0
        },
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 20,
          "levelGrowth": 400.0
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Evil Star Banishment Ritual",
      "icon": "skill001/skill0022_1",
      "description": "restore HP to all alliesHP and inflicts Shield (LV 1) for 8 seconds and Action Speed UP(LV 1) for 8 seconds , 3s Curse for",
      "effect": "2000% + 800",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Evil Star Banishment Ritual",
      "icon": "skill001/skill0022_2",
      "description": "restore HP to all alliesHP and inflicts Shield (LV 2) for 8 seconds and Action Speed UP(LV 2) for 8 seconds , 4s Curse for",
      "effect": "2300% + 1100",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv2",
          "value": 23,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "Evil Star Banishment Ritual",
      "icon": "skill001/skill0022_3",
      "description": "restore HP to all alliesHP and inflicts Shield (LV 3) for 8 seconds and Action Speed UP(LV 3) for 8 seconds , 4s Curse for",
      "effect": "2500% + 1350",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv3",
          "value": 26,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Evil Star Banishment Ritual",
      "icon": "skill001/skill0022_4",
      "description": "restore HP to all alliesHP and inflicts Shield (LV 4) for 8 seconds and Action Speed UP(LV 4) for 8 seconds , 5s Curse for",
      "effect": "2700% + 1550",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv4",
          "value": 28,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Evil Star Banishment Ritual",
      "icon": "skill001/skill0022_5",
      "description": "restore HP to all alliesHP and inflicts Shield (LV 5) for 8 seconds and Action Speed UP(LV 5) for 8 seconds , 5s Curse for",
      "effect": "2800% + 1700",
      "buffEffects": [
        {
          "name": "Shield Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Curse",
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
      "name": "Max HP +, Debuff Resistance+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Damage UP, Physical Defense, Magic Defense",
      "icon": "skill001/skill1005",
      "effect": "Damage UP (+20%), Physical Defense (+-200), Magic Defense (+-200)",
      "effectValues": [
        {
          "name": "Damage UP",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Defense",
          "value": -200,
          "type": "flat"
        },
        {
          "name": "Magic Defense",
          "value": -200,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Twin Shrine Maiden: Raoul",
  "id": 2191,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1671,
    "ATK": 145,
    "MATK": 242,
    "DEF": 288,
    "MDEF": 192
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "twin-shrine-maiden-raoul"
};

export const stats = {
  "id": "twin-shrine-maiden-raoul",
  "characterId": 2191,
  "name": "【Twin Shrine Maiden】Raoul",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1671,
      "lv90": 8356
    },
    "atk": {
      "base": 145,
      "lv90": 725
    },
    "matk": {
      "base": 242,
      "lv90": 1210
    },
    "def": {
      "base": 288,
      "lv90": 576
    },
    "mdef": {
      "base": 192,
      "lv90": 384
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
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 83,
      "lv90": 291
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
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
      "HP": 501,
      "MATK": 73,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 577,
      "MATK": 83,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 677,
      "MATK": 98,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 752,
      "MATK": 109,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "MATK": 206,
      "DEF": 58,
      "MDEF": 68,
      "Heal Pwr": 23
    },
    "total": {
      "HP": 4053,
      "MATK": 569,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 58,
      "MDEF": 68,
      "Heal Pwr": 23
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 300,
      "Block": 7
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 750,
      "Block": 10
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1200,
      "Block": 13
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 1650,
      "Block": 16
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 176,
      "MATK": 25,
      "MDEF": 16,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 211,
      "MATK": 31,
      "MDEF": 19,
      "Magic Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 246,
      "MATK": 36,
      "MDEF": 22,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 281,
      "MATK": 41,
      "MDEF": 25,
      "Magic Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 317,
      "MATK": 46,
      "MDEF": 28,
      "Magic Crit": 16,
      "MP Charge": 6
    },
    "g6": {
      "HP": 352,
      "MATK": 51,
      "MDEF": 31,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 387,
      "MATK": 56,
      "MDEF": 34,
      "Magic Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 422,
      "MATK": 61,
      "MDEF": 37,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 457,
      "MATK": 66,
      "MDEF": 40,
      "Magic Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 493,
      "MATK": 71,
      "MDEF": 43,
      "Magic Crit": 25,
      "MP Charge": 9
    },
    "total": {
      "HP": 493,
      "MATK": 71,
      "MDEF": 43,
      "Magic Crit": 25,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 139
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP": 195
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 251
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "HP": 306
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 362
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "HP": 399
    }
  ]
};;;;;;;;
