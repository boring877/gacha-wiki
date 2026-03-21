// Character data: skateboarder-nue
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "skateboarder-nue",
  "name": "Skateboarder: Nue",
  "displayName": "Skateboarder: Nue",
  "baseName": "Nue",
  "title": "Skateboarder",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 186,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "image": "Nue",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "182cm",
    "bust": "111cm (L Cup)",
    "waist": "65cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "有賀桃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2152
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "FS MelonGrab",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and applies Unable to act to self for 2 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and applies Unable to act to self for 2 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and applies Unable to act to self for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "340% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "340% + 300",
      "lvl90": "340% + 2970",
      "effects": [
        "Stun",
        "Healing Shield LvMax"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Healing Shield LvMax",
          "value": 400,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 30.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "You can't even do this?",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 12 seconds, all enemies12 Physical Attack -20 DOWN, 12 Magic Attack -20 DOWN",
      "descriptionLv1": "Applies Taunt to self for 12 seconds, all enemies12 Physical Attack -20 DOWN, 12 Magic Attack -20 DOWN",
      "descriptionLv90": "Applies Taunt to self for 12 seconds, all enemies12 Physical Attack -2000 DOWN, 12 Magic Attack -20 DOWN",
      "target": "All Enemies",
      "castTime": 1.0,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        },
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "BigAir1080 Moondrop Nue Special",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , 3 , self10 Hit-Based Shield(LV 1)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "FS MelonGrab",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and applies Unable to act to self for 2 seconds",
      "effect": "340% + 300",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Healing Shield LvMax",
          "value": 400,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "You can't even do this?",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 12 seconds, all enemies12 Physical Attack -20 DOWN, 12 Magic Attack -20 DOWN",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        },
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "BigAir1080 Moondrop Nue Special",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds , 3 , self10 Hit-Based Shield(LV 1)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "BigAir1080 Moondrop Nue Special",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds , 4 , self10 Hit-Based Shield(LV 2)",
      "effect": "1440% + 1200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Hit-Based Shield Ultimate Lv2",
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
      "name": "Debuff Resistance+, MP Regeneration",
      "icon": "skill001/skill1001",
      "effect": "MP Regeneration (+200%)",
      "effectValues": [
        {
          "name": "MP Regeneration",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Skateboarder: Nue",
  "id": 2152,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 176,
    "MATK": 105,
    "DEF": 240,
    "MDEF": 240
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.81"
  },
  "slug": "skateboarder-nue"
};

export const stats = {
  "id": "skateboarder-nue",
  "characterId": 2152,
  "name": "【Skateboarder】Nue",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 1951,
      "lv90": 9755
    },
    "atk": {
      "base": 176,
      "lv90": 880
    },
    "matk": {
      "base": 105,
      "lv90": 527
    },
    "def": {
      "base": 240,
      "lv90": 480
    },
    "mdef": {
      "base": 240,
      "lv90": 480
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 97,
      "lv90": 340
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
      "base": 70,
      "lv90": 70
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
      "HP": 585,
      "ATK": 53,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 673,
      "ATK": 61,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 790,
      "ATK": 71,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 878,
      "ATK": 79,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1748,
      "ATK": 145,
      "DEF": 74,
      "MDEF": 48,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4674,
      "ATK": 409,
      "Block": 83,
      "MP Charge": 15,
      "Accuracy": 30,
      "DEF": 74,
      "MDEF": 48,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 750,
      "MP Charge": 2
    },
    "gp4": {
      "HP": 750,
      "MP Charge": 4
    },
    "gp5": {
      "HP": 1200,
      "MP Charge": 4
    },
    "gp6": {
      "HP": 1200,
      "MP Charge": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Charge": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Charge": 8
    },
    "gp9": {
      "HP": 2100,
      "MP Charge": 8
    },
    "gp10": {
      "HP": 2100,
      "MP Charge": 10
    },
    "total": {
      "HP": 2100,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 205,
      "ATK": 19,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 246,
      "ATK": 22,
      "Phys Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 288,
      "ATK": 26,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 329,
      "ATK": 30,
      "Phys Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 370,
      "ATK": 33,
      "Phys Crit": 16,
      "MP Charge": 6
    },
    "g6": {
      "HP": 411,
      "ATK": 37,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 452,
      "ATK": 41,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 493,
      "ATK": 44,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 534,
      "ATK": 48,
      "Phys Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 575,
      "ATK": 52,
      "Phys Crit": 25,
      "MP Charge": 9
    },
    "total": {
      "HP": 575,
      "ATK": 52,
      "Phys Crit": 25,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 163
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP": 228
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 293
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "HP": 358
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "HP": 423
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "HP": 465
    }
  ]
};;;;;;;;
