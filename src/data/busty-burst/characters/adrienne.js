// Character data: adrienne
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "adrienne",
  "name": "Adrienne",
  "displayName": "Adrienne",
  "baseName": "Adrienne",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 525,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff"
  ],
  "image": "Adrienne",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "157cm",
    "bust": "108cm (M Cup)",
    "waist": "57cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HIMA",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤宮きせき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2154
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Animat",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 50 UP to all allies for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv1": "Applies Magic Critical Damage 50 UP to all allies for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv90": "Applies Magic Critical Damage 680 UP to all allies for 12 seconds and Accuracy 23 UP for 12 seconds",
      "target": "All Allies",
      "castTime": 0.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv4",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
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
      "name": "Pheasant",
      "icon": "skill001/skill0011",
      "description": "all enemies12 Magic Defense-30 DOWN and Accuracy -9 DOWN for 12 seconds , 50%% chance to Sleep for 2s",
      "descriptionLv1": "all enemies12 Magic Defense-30 DOWN and Accuracy -9 DOWN for 12 seconds , 50%% chance to Sleep for 2s",
      "descriptionLv90": "all enemies12 Magic Defense-210 DOWN and Accuracy -18 DOWN for 12 seconds , 50%% chance to Sleep for 2s",
      "target": "All Enemies",
      "castTime": 1.6,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv3",
        "Accuracy - Lv3",
        "Sleep"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv3",
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
          "name": "Sleep",
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
      "name": "My special place to belong",
      "icon": "skill001/skill0020_1",
      "description": "Applies Hit-Based Magic Damage (LV 1) to all allies for 20 seconds and Accuracy UP(LV 1) for 10 seconds , 10 BlockUP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv1",
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
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Animat",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 50 UP to all allies for 12 seconds and Accuracy 11 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Pheasant",
      "icon": "skill001/skill0011",
      "description": "all enemies12 Magic Defense-30 DOWN and Accuracy -9 DOWN for 12 seconds , 50%% chance to Sleep for 2s",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Sleep",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "My special place to belong",
      "icon": "skill001/skill0020_1",
      "description": "Applies Hit-Based Magic Damage (LV 1) to all allies for 20 seconds and Accuracy UP(LV 1) for 10 seconds , 10 BlockUP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv1",
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
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "My special place to belong",
      "icon": "skill001/skill0020_2",
      "description": "Applies Hit-Based Magic Damage (LV 2) to all allies for 20 seconds and Accuracy UP(LV 2) for 10 seconds , 10 BlockUP(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage + Ultimate Lv2",
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
          "name": "Block+ Ultimate Lv2",
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
      "name": "Magic Attack +, Max HP +",
      "icon": "skill001/skill1005",
      "effect": "HP()",
      "effectValues": []
    }
  ],
  "name": "Adrienne",
  "id": 2154,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 1575,
    "ATK": 151,
    "MATK": 253,
    "DEF": 137,
    "MDEF": 343
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "adrienne"
};

export const stats = {
  "id": "adrienne",
  "characterId": 2154,
  "name": "Adrienne",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 1575,
      "lv90": 7878
    },
    "atk": {
      "base": 151,
      "lv90": 758
    },
    "matk": {
      "base": 253,
      "lv90": 1265
    },
    "def": {
      "base": 137,
      "lv90": 377
    },
    "mdef": {
      "base": 343,
      "lv90": 583
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 78,
      "lv90": 274
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
      "HP": 473,
      "MATK": 76,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 544,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 638,
      "MATK": 102,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 709,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1411,
      "MATK": 208,
      "DEF": 38,
      "MDEF": 84,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3775,
      "MATK": 587,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 38,
      "MDEF": 84,
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
      "HP": 166,
      "MATK": 27,
      "MDEF": 16,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 199,
      "MATK": 32,
      "MDEF": 19,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 232,
      "MATK": 37,
      "MDEF": 22,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 265,
      "MATK": 43,
      "MDEF": 25,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 299,
      "MATK": 48,
      "MDEF": 28,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 332,
      "MATK": 53,
      "MDEF": 31,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 365,
      "MATK": 59,
      "MDEF": 34,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 398,
      "MATK": 64,
      "MDEF": 37,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 431,
      "MATK": 69,
      "MDEF": 40,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 464,
      "MATK": 75,
      "MDEF": 43,
      "Magic Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 464,
      "MATK": 75,
      "MDEF": 43,
      "Magic Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 131
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "HP": 184
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 236
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "HP": 289
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 341
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "HP": 376
    }
  ]
};;;;;;;;
