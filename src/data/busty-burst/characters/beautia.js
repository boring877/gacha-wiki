// Character data: beautia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "beautia",
  "name": "Beautia",
  "displayName": "Beautia",
  "baseName": "Beautia",
  "title": null,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 340,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Beautia",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "179cm",
    "bust": "118cm (M Cup)",
    "waist": "69cm",
    "hips": "102cm"
  },
  "credits": {
    "illustration": {
      "japanese": "佐藤匠",
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
  "characterId": 2122
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Beautiful Hula Hoop",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -23 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "270% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "270% + 200",
      "lvl90": "270% + 188",
      "effects": [
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -0.13
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Let's train our bodies!",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 20 seconds",
      "descriptionLv1": "Applies Block 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 20 seconds",
      "descriptionLv90": "Applies Block 18 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 20 seconds",
      "target": "All Allies",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "Hit-Based Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "Hit-Based Damage + Lv3",
          "value": 30,
          "type": "percent",
          "duration": 20,
          "levelGrowth": 350.0
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Perfect Fat Burning Exercise",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyApplies Action Speed UP(LV 1) to self for 10 seconds",
      "effect": "800% + 500",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Beautiful Hula Hoop",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 5 seconds",
      "effect": "270% + 200",
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Let's train our bodies!",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to all allies for 10 seconds and Hit-Based Damage UP(+350, 3 hit(s)) for 20 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Lv3",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 4,
      "name": "Perfect Fat Burning Exercise",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyApplies Action Speed UP(LV 1) to self for 10 seconds",
      "effect": "800% + 500",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Perfect Fat Burning Exercise",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemyApplies Action Speed UP(LV 2) to self for 10 seconds",
      "effect": "960% + 650",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Accuracy +",
      "icon": "skill001/skill1006",
      "effect": "Block+ (+10), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Beautia",
  "id": 2122,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 3060,
    "ATK": 265,
    "MATK": 159,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "beautia"
};

export const stats = {
  "id": "beautia",
  "characterId": 2122,
  "name": "Beautia",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 3060,
      "lv90": 15303
    },
    "atk": {
      "base": 265,
      "lv90": 1327
    },
    "matk": {
      "base": 159,
      "lv90": 796
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
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
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
    },
    "hpRegen": {
      "base": 153,
      "lv90": 535
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
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
      "HP": 918,
      "ATK": 80,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1056,
      "ATK": 92,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1240,
      "ATK": 108,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1377,
      "ATK": 120,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2409,
      "ATK": 209,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 23
    },
    "total": {
      "HP": 7000,
      "ATK": 609,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 23
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 500,
      "ATK": 30
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 800,
      "ATK": 90
    },
    "gp6": {
      "HP": 800,
      "ATK": 150
    },
    "gp7": {
      "HP": 1100,
      "ATK": 150
    },
    "gp8": {
      "HP": 1100,
      "ATK": 210
    },
    "gp9": {
      "HP": 1400,
      "ATK": 210
    },
    "gp10": {
      "HP": 1400,
      "ATK": 270
    },
    "total": {
      "HP": 1400,
      "ATK": 270
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 322,
      "ATK": 28,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 387,
      "ATK": 34,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 451,
      "ATK": 39,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 516,
      "ATK": 45,
      "Phys Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 580,
      "ATK": 50,
      "Phys Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 644,
      "ATK": 56,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 709,
      "ATK": 62,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 773,
      "ATK": 67,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 838,
      "ATK": 73,
      "Phys Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 902,
      "ATK": 78,
      "Phys Crit": 2,
      "MP Charge": 7
    },
    "total": {
      "HP": 902,
      "ATK": 78,
      "Phys Crit": 2,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 22
    },
    {
      "grade": 2,
      "HP": 275
    },
    {
      "grade": 3,
      "ATK": 31
    },
    {
      "grade": 4,
      "HP": 367
    },
    {
      "grade": 5,
      "ATK": 40
    },
    {
      "grade": 6,
      "HP": 459
    },
    {
      "grade": 7,
      "ATK": 49
    },
    {
      "grade": 8,
      "HP": 551
    },
    {
      "grade": 9,
      "ATK": 58
    },
    {
      "grade": 10,
      "HP": 643
    },
    {
      "grade": 11,
      "ATK": 61
    }
  ]
};;;;;;;;
