// Character data: the-dark-knight
// Merged from info/skills/stats files

export const info = {
  "slug": "the-dark-knight",
  "name": "The Dark Knight",
  "displayName": "The Dark Knight",
  "baseName": "The Dark Knight",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 360,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "The_Dark_Knight",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "172cm",
    "bust": "120cm (N Cup)",
    "waist": "68cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u3074\u305a",
      "romanized": "Pizu"
    },
    "voice": {
      "japanese": "\u6e26\u4e95\u3086\u304d\u306e",
      "romanized": "Uzui Yukino"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Dual Demon Swords",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-21%-40 DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-21%-40 DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-21%-220 DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "210% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "210% + 160",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv4",
        "Magic Type Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Type Defense - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Enchantment Blade",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 10 seconds and Magic Attack -11%-25 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 10 seconds and Magic Attack -11%-25 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Physical Attack -11%-205 DOWN for 10 seconds and Magic Attack -11%-205 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "240% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "240% + 160",
      "lvl90": "240% + -18",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv 1) for 3 seconds",
      "effect": "300% + 402",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
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
      "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv 2) for 3 seconds",
      "effect": "360% + 457",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv 3) for 3 seconds",
      "effect": "405% + 501",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv3",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv 4) for 3 seconds",
      "effect": "434% + 566",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv4",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv 5) for 3 seconds",
      "effect": "450% + 611",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv5",
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
      "name": "Magic Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+90), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Type ATK +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Type ATK + (+10%), Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Magic Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 3,
      "name": "Passive EX",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Power of Darkness (+3%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Power of Darkness",
          "value": 3,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "The Dark Knight",
  "id": 2049,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 257,
    "MATK": 429,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "the-dark-knight"
};

export const stats = {
  "id": "the-dark-knight",
  "characterId": 2049,
  "name": "The Dark Knight",
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
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 257,
      "lv90": 1288
    },
    "matk": {
      "base": 429,
      "lv90": 2148
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
      "base": 50,
      "lv90": 150
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
      "base": 90,
      "lv90": 317
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
      "base": 67,
      "lv90": 67
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
      "MATK": 129,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "MATK": 148,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 174,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 819,
      "MATK": 193,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "MATK": 397,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "MATK": 1041,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 20
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 50
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 80
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 110
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 140
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 140
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "MATK": 45,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 54,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 63,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 72,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 81,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 383,
      "MATK": 90,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 100,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 109,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 118,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 127,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 536,
      "MATK": 127,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Accuracy": 3
    },
    {
      "grade": 2,
      "MATK": 39
    },
    {
      "grade": 3,
      "Accuracy": 4
    },
    {
      "grade": 4,
      "MATK": 52
    },
    {
      "grade": 5,
      "Accuracy": 5
    },
    {
      "grade": 6,
      "MATK": 64
    },
    {
      "grade": 7,
      "Accuracy": 6
    },
    {
      "grade": 8,
      "MATK": 77
    },
    {
      "grade": 9,
      "Accuracy": 7
    },
    {
      "grade": 10,
      "MATK": 90
    },
    {
      "grade": 11,
      "Accuracy": 7
    }
  ]
};;;;;;;;
