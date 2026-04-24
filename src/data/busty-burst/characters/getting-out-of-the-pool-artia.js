// Character data: getting-out-of-the-pool-artia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "getting-out-of-the-pool-artia",
  "name": "Getting Out of the Pool: Artia",
  "displayName": "Getting Out of the Pool: Artia",
  "baseName": "Artia",
  "title": "Getting Out of the Pool",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 235,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Artia",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "風花ましろ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2130
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Beat In Small Shield",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-220 DOWN for 6 seconds and Block-23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "110% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": "110% + 138",
      "effects": [
        "Magic Defense- Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "SB (SwimmingBoards) Boomerang",
      "icon": "skill001/skill0011",
      "description": "3 to enemiesmagic damage and inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "descriptionLv1": "3 to enemiesmagic damage and inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "descriptionLv90": "3 to enemiesmagic damage and inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "target": "Back Enemy",
      "castTime": 1.0,
      "damageScaling": "90% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "90% + 80",
      "lvl90": null,
      "effects": [
        "Stun",
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
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
      "name": "Lethal - Board Blade",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 3 seconds and Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "390% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lethal - Board Blade",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 4 seconds and Accuracy DOWN(LV 2) for 10 seconds",
      "effect": "459% + 600",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lethal - Board Blade",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 4 seconds and Accuracy DOWN(LV 3) for 10 seconds",
      "effect": "509% + 700",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lethal - Board Blade",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 5 seconds and Accuracy DOWN(LV 4) for 10 seconds",
      "effect": "550% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lethal - Board Blade",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Dispel for 5 seconds and Accuracy DOWN(LV 5) for 10 seconds",
      "effect": "570% + 900",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv5",
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
      "name": "Magic Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 2896,
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
  "name": "Getting Out of the Pool: Artia",
  "id": 2130,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 192,
    "MATK": 168,
    "DEF": 281,
    "MDEF": 280
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "getting-out-of-the-pool-artia"
};

export const stats = {
  "id": "getting-out-of-the-pool-artia",
  "characterId": 2130,
  "name": "【Getting Out of the Pool】Artia",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 192,
      "lv90": 867
    },
    "matk": {
      "base": 168,
      "lv90": 1292
    },
    "def": {
      "base": 281,
      "lv90": 481
    },
    "mdef": {
      "base": 280,
      "lv90": 560
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
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 63,
      "lv90": 222
    },
    "mpRegen": {
      "base": 53,
      "lv90": 231
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
      "HP": 382,
      "MATK": 84,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 439,
      "MATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "MATK": 114,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 573,
      "MATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1082,
      "MATK": 249,
      "DEF": 48,
      "MDEF": 86,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 2992,
      "MATK": 671,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 48,
      "MDEF": 86,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 300,
      "MATK": 120
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 750,
      "MATK": 200
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1200,
      "MATK": 280
    },
    "gp8": {
      "HP": 1650,
      "MATK": 360
    },
    "gp9": {
      "HP": 1650,
      "MATK": 360
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
      "HP": 134,
      "MATK": 30,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "MATK": 36,
      "MDEF": 19,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "MATK": 41,
      "MDEF": 22,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "MATK": 47,
      "MDEF": 25,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "MATK": 53,
      "MDEF": 28,
      "Magic Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 268,
      "MATK": 59,
      "MDEF": 31,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "MATK": 65,
      "MDEF": 34,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "MATK": 71,
      "MDEF": 37,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "MATK": 77,
      "MDEF": 40,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "MATK": 83,
      "MDEF": 43,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 375,
      "MATK": 83,
      "MDEF": 43,
      "Magic Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 23
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 33
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 42
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 52
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 61
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 64
    }
  ]
};;;;;;;;
