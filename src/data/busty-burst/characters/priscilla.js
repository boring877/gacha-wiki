// Character data: priscilla
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "priscilla",
  "name": "Priscilla",
  "displayName": "Priscilla",
  "baseName": "Priscilla",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 280,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Priscilla",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "155cm",
    "bust": "98cm (I Cup)",
    "waist": "57cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "KeG",
      "romanized": ""
    },
    "voice": {
      "japanese": "いねむりすやこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2112
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Ubi, please...",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemyApplies Hit-Based Magic Damage UP(75%+700, 3 hit(s)) to self for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemyApplies Hit-Based Magic Damage UP(75%+700, 3 hit(s)) to self for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemyApplies Hit-Based Magic Damage UP(75%+700, 63003 hit(s)) to self for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "370% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "370% + 300",
      "lvl90": "370% + 62600",
      "effects": [
        "Hit-Based Magic Damage +"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage +",
          "value": 3,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 700.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Ubi, haa...",
      "icon": "skill001/skill0011",
      "description": "15s Curse for and Block-11 DOWN for 10 seconds , 10 Accuracy -11 DOWN",
      "descriptionLv1": "15s Curse for and Block-11 DOWN for 10 seconds , 10 Accuracy -11 DOWN",
      "descriptionLv90": "15s Curse for and Block-23 DOWN for 10 seconds , 10 Accuracy -23 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Curse",
        "Block- Lv4",
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
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "My Beloved World Protector",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Mind Type Damage Taken UP(LV 1) for 8 seconds and applies Mind Type ATK UP(LV 1) to self for 8 seconds",
      "effect": "1100% + 700",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "My Beloved World Protector",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Mind Type Damage Taken UP(LV 2) for 8 seconds and applies Mind Type ATK UP(LV 2) to self for 8 seconds",
      "effect": "1320% + 850",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "My Beloved World Protector",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Mind Type Damage Taken UP(LV 3) for 8 seconds and applies Mind Type ATK UP(LV 3) to self for 8 seconds",
      "effect": "1500% + 1000",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "My Beloved World Protector",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Mind Type Damage Taken UP(LV 4) for 8 seconds and applies Mind Type ATK UP(LV 4) to self for 8 seconds",
      "effect": "1610% + 1100",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "My Beloved World Protector",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Mind Type Damage Taken UP(LV 5) for 8 seconds and applies Mind Type ATK UP(LV 5) to self for 8 seconds",
      "effect": "1670% + 1200",
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
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
  "name": "Priscilla",
  "id": 2112,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 157,
    "MATK": 261,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "priscilla"
};

export const stats = {
  "id": "priscilla",
  "characterId": 2112,
  "name": "Priscilla",
  "rarity": "SSR",
  "element": "想",
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
      "base": 157,
      "lv90": 785
    },
    "matk": {
      "base": 261,
      "lv90": 1307
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
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
      "base": 50,
      "lv90": 50
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
      "MATK": 78,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 722,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 106,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 941,
      "MATK": 118,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 242,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4916,
      "MATK": 634,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 20
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 80
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 110
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
      "HP": 220,
      "MATK": 28,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 39,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 44,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 50,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "MATK": 55,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 61,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 66,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 72,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "total": {
      "HP": 617,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 22
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 31
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 39
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 48
    },
    {
      "grade": 8,
      "Accuracy": 6
    },
    {
      "grade": 9,
      "MATK": 57
    },
    {
      "grade": 10,
      "Accuracy": 7
    },
    {
      "grade": 11,
      "MATK": 60
    }
  ]
};;;;;;;;
