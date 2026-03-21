// Character data: kaguya
// Merged from info/skills/stats files

export const info = {
  "slug": "kaguya",
  "name": "Kaguya",
  "displayName": "Kaguya",
  "baseName": "Kaguya",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slightly Fast",
  "range": 360,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "kaguya",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "106cm (K Cup)",
    "waist": "60cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u3074\u305a",
      "romanized": "Pizu"
    },
    "voice": {
      "japanese": "\u6708\u591c\u898b\u3057\u3058\u307e",
      "romanized": "Tsukiyomi Shishima"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Limited Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poison Princess’s Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-13 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-13 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-26 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "250% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "250% + 150",
      "lvl90": "250% + 136",
      "effects": [
        "Poison LvMax",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Poison LvMax",
          "value": -300,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -30.0
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.15
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Calamity of Serpent Venom",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -23 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "85% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "85% + 70",
      "lvl90": "85% + 58",
      "effects": [
        "Curse",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Confusion for 5 seconds and Fear Lv 1 for 3 seconds",
      "effect": "450% + 350",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Poison Princess’s Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-13 DOWN for 8 seconds",
      "effect": "250% + 150",
      "buffEffects": [
        {
          "name": "Poison LvMax",
          "value": -300,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Calamity of Serpent Venom",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "effect": "85% + 70",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Confusion for 5 seconds and Fear Lv 1 for 3 seconds",
      "effect": "450% + 350",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Confusion for 6 seconds and Fear Lv 2 for 3 seconds",
      "effect": "550% + 450",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
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
      "name": "Ultimate Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Kaguya",
  "id": 2071,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2578,
    "ATK": 204,
    "MATK": 340,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.48"
  },
  "slug": "kaguya"
};

export const stats = {
  "id": "kaguya",
  "characterId": 2071,
  "name": "Kaguya",
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
      "base": 2578,
      "lv90": 12892
    },
    "atk": {
      "base": 204,
      "lv90": 1020
    },
    "matk": {
      "base": 340,
      "lv90": 1700
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
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
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 128,
      "lv90": 450
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 83,
      "lv90": 83
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
      "MATK": 121,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 678,
      "MATK": 139,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "MATK": 163,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 884,
      "MATK": 181,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2247,
      "MATK": 298,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5194,
      "MATK": 902,
      "Block": 68,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 40,
      "MP Charge": 4
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "MATK": 120,
      "MP Charge": 6
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "MATK": 200,
      "MP Charge": 8
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "MATK": 280,
      "MP Charge": 10
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 10
    },
    "total": {
      "MATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 271,
      "MATK": 36,
      "MDEF": 6,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 326,
      "MATK": 43,
      "MDEF": 8,
      "Magic Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 380,
      "MATK": 50,
      "MDEF": 9,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 434,
      "MATK": 57,
      "MDEF": 10,
      "Magic Crit": 4,
      "Block": 19
    },
    "g5": {
      "HP": 489,
      "MATK": 64,
      "MDEF": 12,
      "Magic Crit": 5,
      "MP Charge": 7
    },
    "g6": {
      "HP": 543,
      "MATK": 72,
      "MDEF": 13,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 597,
      "MATK": 79,
      "MDEF": 14,
      "Magic Crit": 6,
      "Block": 26
    },
    "g8": {
      "HP": 651,
      "MATK": 86,
      "MDEF": 16,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 706,
      "MATK": 93,
      "MDEF": 17,
      "Magic Crit": 7,
      "Block": 31
    },
    "g10": {
      "HP": 760,
      "MATK": 100,
      "MDEF": 18,
      "Magic Crit": 7,
      "MP Charge": 11
    },
    "total": {
      "HP": 760,
      "MATK": 100,
      "MDEF": 18,
      "Magic Crit": 7,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "HP": 177
    },
    {
      "grade": 3,
      "MP Charge": 3
    },
    {
      "grade": 4,
      "HP": 236
    },
    {
      "grade": 5,
      "MP Charge": 4
    },
    {
      "grade": 6,
      "HP": 295
    },
    {
      "grade": 7,
      "MP Charge": 4
    },
    {
      "grade": 8,
      "HP": 354
    },
    {
      "grade": 9,
      "MP Charge": 5
    },
    {
      "grade": 10,
      "HP": 413
    },
    {
      "grade": 11,
      "MP Charge": 5
    }
  ]
};;;;;;;;
