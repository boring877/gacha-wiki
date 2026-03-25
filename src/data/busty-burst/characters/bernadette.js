// Character data: bernadette
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "bernadette",
  "name": "Bernadette",
  "displayName": "Bernadette",
  "baseName": "Bernadette",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 525,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Bernadette",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "177cm",
    "bust": "113cm (M Cup)",
    "waist": "64cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "三十三七",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2153
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Listen to my song!",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Critical Damage 50 UP to all allies for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to all allies for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to all allies for 12 seconds and Accuracy 23 UP for 12 seconds",
      "target": "All Allies",
      "castTime": 0.6,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Don't you want to hear my song?",
      "icon": "skill001/skill0011",
      "description": "all enemies12 Physical Defense -18%-30 DOWN and Accuracy -9 DOWN for 12 seconds , 50%% chance to2s Stun for",
      "descriptionLv1": "all enemies12 Physical Defense -18%-30 DOWN and Accuracy -9 DOWN for 12 seconds , 50%% chance to2s Stun for",
      "descriptionLv90": "all enemies12 Physical Defense -18%-210 DOWN and Accuracy -18 DOWN for 12 seconds , 50%% chance to2s Stun for",
      "target": "All Enemies",
      "castTime": 1.7,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv3",
        "Accuracy - Lv3",
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.1
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The world that revolves around me",
      "icon": "skill001/skill0020_1",
      "description": "Applies Hit-Based Physical Damage (LV 1) to all allies for 20 seconds and Accuracy UP(LV 1) for 10 seconds , all enemies10 BlockDOWN(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Ultimate Lv1",
          "value": 5,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "The world that revolves around me",
      "icon": "skill001/skill0020_2",
      "description": "Applies Hit-Based Physical Damage (LV 2) to all allies for 20 seconds and Accuracy UP(LV 2) for 10 seconds , all enemies10 BlockDOWN(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Ultimate Lv2",
          "value": 5,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "The world that revolves around me",
      "icon": "skill001/skill0020_3",
      "description": "Applies Hit-Based Physical Damage (LV 3) to all allies for 20 seconds and Accuracy UP(LV 3) for 10 seconds , all enemies10 BlockDOWN(LV 3)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Ultimate Lv3",
          "value": 5,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Accuracy + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The world that revolves around me",
      "icon": "skill001/skill0020_4",
      "description": "Applies Hit-Based Physical Damage (LV 4) to all allies for 20 seconds and Accuracy UP(LV 4) for 10 seconds , all enemies10 BlockDOWN(LV 4)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Ultimate Lv4",
          "value": 5,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Accuracy + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "The world that revolves around me",
      "icon": "skill001/skill0020_5",
      "description": "Applies Hit-Based Physical Damage (LV 5) to all allies for 20 seconds and Accuracy UP(LV 5) for 10 seconds , all enemies10 BlockDOWN(LV 5)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Ultimate Lv5",
          "value": 5,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Accuracy + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, MP Recovery",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), MP Recovery (+50%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 50,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1005",
      "effect": "HP()",
      "effectValues": []
    }
  ],
  "name": "Bernadette",
  "id": 2153,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1913,
    "ATK": 253,
    "MATK": 151,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.9"
  },
  "slug": "bernadette"
};

export const stats = {
  "id": "bernadette",
  "characterId": 2153,
  "name": "Bernadette",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1913,
      "lv90": 9566
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
      "base": 226,
      "lv90": 384
    },
    "mdef": {
      "base": 90,
      "lv90": 248
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 95,
      "lv90": 334
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
      "base": 58,
      "lv90": 58
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
      "HP": 574,
      "ATK": 76,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 660,
      "ATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 775,
      "ATK": 102,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 861,
      "ATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1714,
      "ATK": 208,
      "DEF": 55,
      "MDEF": 25,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4584,
      "ATK": 587,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 55,
      "MDEF": 25,
      "Heal Pwr": 25
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
      "HP": 201,
      "ATK": 27,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 242,
      "ATK": 32,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 282,
      "ATK": 37,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 322,
      "ATK": 43,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 363,
      "ATK": 48,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 403,
      "ATK": 53,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 443,
      "ATK": 59,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 483,
      "ATK": 64,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 524,
      "ATK": 69,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 564,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 564,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 159
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "HP": 223
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 287
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "HP": 351
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 415
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "HP": 457
    }
  ]
};;;;;;;;
