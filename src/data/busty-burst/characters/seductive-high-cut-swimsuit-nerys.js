// Character data: seductive-high-cut-swimsuit-nerys
// Merged from info/skills/stats files

export const info = {
  "slug": "seductive-high-cut-swimsuit-nerys",
  "name": "\u3010Seductive High-Cut Swimsuit\u3011Nerys",
  "displayName": "Swimsuit Nerys",
  "baseName": "Nerys",
  "title": "Seductive High-Cut Swimsuit",
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Seductive_High_Cut_Swimsuit_Nerys",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "98cm (H Cup)",
    "waist": "58cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u6df1\u6ce5\u6b63",
      "romanized": "Fukadoro Tadashi"
    },
    "voice": {
      "japanese": "\u5fa1\u82d1\u751f\u30e1\u30a4",
      "romanized": "Misonoo Mei"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Summer 2025 Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sand Storm",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 farthest enemies and inflicts Accuracy -9 DOWN for 8 seconds and Physical Critical Damage-30 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 farthest enemies and inflicts Accuracy -9 DOWN for 8 seconds and Physical Critical Damage-30 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 farthest enemies and inflicts Accuracy -18 DOWN for 8 seconds and Physical Critical Damage-30 DOWN for 8 seconds",
      "target": "Back Enemy",
      "castTime": 1.08,
      "damageScaling": "140% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "140% + 80",
      "lvl90": "140% + -98",
      "effects": [
        "Accuracy - Lv3",
        "Physical Critical Damage- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Sand Vortex",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN for 8 seconds and Block-9 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN for 8 seconds and Block-9 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN for 8 seconds and Block-18 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "120% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "120% + 60",
      "lvl90": "120% + 51",
      "effects": [
        "Action Speed - Lv3",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for 8 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sand Storm",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 farthest enemies and inflicts Accuracy -9 DOWN for 8 seconds and Physical Critical Damage-30 DOWN for 8 seconds",
      "effect": "140% + 80",
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sand Vortex",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN for 8 seconds and Block-9 DOWN for 8 seconds",
      "effect": "120% + 60",
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for 8 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for 8 seconds",
      "effect": "1300% + 950",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Seductive High-Cut Swimsuit: Nerys",
  "id": 2077,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 145,
    "MATK": 242,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "seductive-high-cut-swimsuit-nerys"
};

export const stats = {
  "id": "seductive-high-cut-swimsuit-nerys",
  "characterId": 2077,
  "name": "【Seductive High-Cut Swimsuit】Nerys",
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
      "base": 2092,
      "lv90": 10460
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
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
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
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 64,
      "lv90": 64
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
      "MATK": 73,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "MATK": 83,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 98,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 941,
      "MATK": 109,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 224,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4916,
      "MATK": 587,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 750,
      "MATK": 40
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 1200,
      "MATK": 120
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1650,
      "MATK": 200
    },
    "gp8": {
      "HP": 1650,
      "MATK": 280
    },
    "gp9": {
      "HP": 2100,
      "MATK": 280
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
      "HP": 220,
      "MATK": 25,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 31,
      "MDEF": 4,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 36,
      "MDEF": 5,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 41,
      "MDEF": 6,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 46,
      "MDEF": 7,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 51,
      "MDEF": 7,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 56,
      "MDEF": 8,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 61,
      "MDEF": 9,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 66,
      "MDEF": 10,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 71,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "MATK": 71,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 20
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 28
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 36
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 44
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 52
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 55
    }
  ]
};;;;;;;;
