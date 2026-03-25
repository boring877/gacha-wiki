// Character data: trish
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "trish",
  "name": "Trish",
  "displayName": "Trish",
  "baseName": "Trish",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 560,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "image": "Trish",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "160cm",
    "bust": "94cm (I Cup)",
    "waist": "57cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "たけび",
      "romanized": ""
    },
    "voice": {
      "japanese": "空峰羽奈",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2105
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Tracy Special - Power Drink",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 10 seconds and Accuracy 11 UP for 10 seconds",
      "descriptionLv1": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 10 seconds and Accuracy 11 UP for 10 seconds",
      "descriptionLv90": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 10 seconds and Accuracy 23 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Damage + Lv4",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 400.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Tracy Special - Stamina Drink",
      "icon": "skill001/skill0021",
      "description": "Applies HP Regeneration 6%+200 to all allies for 10 seconds and Healing Shield (300) for 15 seconds , DEBUFF",
      "descriptionLv1": "Applies HP Regeneration 6%+200 to all allies for 10 seconds and Healing Shield (300) for 15 seconds , DEBUFF",
      "descriptionLv90": "Applies HP Regeneration 6%+200 to all allies for 10 seconds and Healing Shield (300) for 15 seconds , DEBUFF",
      "target": "All Allies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv4",
        "Healing Shield Lv5",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv4",
          "value": 6,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 8.0
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Tracy Special - Ultra Drink!!",
      "icon": "skill001/skill0022_1",
      "description": "Applies HP RegenerationUP(LV 1) to all allies for 5 seconds and Physical Attack UP(LV 1) for 10 seconds , 10 Magic Attack UP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 11,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Tracy Special - Ultra Drink!!",
      "icon": "skill001/skill0022_2",
      "description": "Applies HP RegenerationUP(LV 2) to all allies for 5 seconds and Physical Attack UP(LV 2) for 10 seconds , 10 Magic Attack UP(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 12,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Tracy Special - Ultra Drink!!",
      "icon": "skill001/skill0022_3",
      "description": "Applies HP RegenerationUP(LV 3) to all allies for 5 seconds and Physical Attack UP(LV 3) for 10 seconds , 10 Magic Attack UP(LV 3)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 13,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Tracy Special - Ultra Drink!!",
      "icon": "skill001/skill0022_4",
      "description": "Applies HP RegenerationUP(LV 4) to all allies for 5 seconds and Physical Attack UP(LV 4) for 10 seconds , 10 Magic Attack UP(LV 4)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 14,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Tracy Special - Ultra Drink!!",
      "icon": "skill001/skill0022_5",
      "description": "Applies HP RegenerationUP(LV 5) to all allies for 5 seconds and Physical Attack UP(LV 5) for 10 seconds , 10 Magic Attack UP(LV 5)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 15,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+211), Magic Defense+ (+211)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 211,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Received +, Max HP +",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+20%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
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
  "name": "Trish",
  "id": 2105,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 3352,
    "ATK": 253,
    "MATK": 151,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "trish"
};

export const stats = {
  "id": "trish",
  "characterId": 2105,
  "name": "Trish",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 3352,
      "lv90": 16760
    },
    "atk": {
      "base": 253,
      "lv90": 1265
    },
    "matk": {
      "base": 151,
      "lv90": 758
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
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 167,
      "lv90": 586
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
      "base": 53,
      "lv90": 53
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
      "HP": 1006,
      "ATK": 76,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1157,
      "ATK": 87,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1358,
      "ATK": 102,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1508,
      "ATK": 114,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 3101,
      "ATK": 215,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 29
    },
    "total": {
      "HP": 8130,
      "ATK": 594,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 29
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 750,
      "Block": 3
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 1200,
      "Block": 7
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1650,
      "Block": 10
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 2100,
      "Block": 13
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
      "HP": 353,
      "ATK": 27,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 423,
      "ATK": 32,
      "Phys Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 494,
      "ATK": 37,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 565,
      "ATK": 43,
      "Phys Crit": 7,
      "Block": 19
    },
    "g5": {
      "HP": 635,
      "ATK": 48,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 706,
      "ATK": 53,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 776,
      "ATK": 59,
      "Phys Crit": 10,
      "Block": 26
    },
    "g8": {
      "HP": 847,
      "ATK": 64,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 917,
      "ATK": 69,
      "Phys Crit": 11,
      "Block": 31
    },
    "g10": {
      "HP": 988,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 988,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 279
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 391
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 503
    },
    {
      "grade": 6,
      "Block": 9
    },
    {
      "grade": 7,
      "HP": 615
    },
    {
      "grade": 8,
      "Block": 11
    },
    {
      "grade": 9,
      "HP": 726
    },
    {
      "grade": 10,
      "Block": 13
    },
    {
      "grade": 11,
      "HP": 762
    }
  ]
};;;;;;;;
