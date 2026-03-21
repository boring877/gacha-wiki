// Character data: super-serious-nurse-lapis
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "super-serious-nurse-lapis",
  "name": "Super Serious Nurse: Lapis",
  "displayName": "Super Serious Nurse: Lapis",
  "baseName": "Lapis",
  "title": "Super Serious Nurse",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 250,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Disrupt"
  ],
  "image": "Lapis",
  "introduction": "Front Row、Physical、Support",
  "profile": {
    "height": "163cm",
    "bust": "92cm (F Cup)",
    "waist": "59cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "馬肉太郎",
      "romanized": ""
    },
    "voice": {
      "japanese": "春山色葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2205
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "It's time for your shot♪",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 15 seconds, 3s Paralysis for",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 15 seconds, 3s Paralysis for",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-8000 after acting, cannot be removed) for 15 seconds, 3s Paralysis for",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "380% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+20",
      "lvl1": "380% + 600",
      "lvl90": null,
      "effects": [
        "Bleed",
        "Paralysis"
      ],
      "buffEffects": [
        {
          "name": "Bleed",
          "value": -800,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -80.0
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Emergency transport!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 5",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 5",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 5",
      "target": "Nearest Enemy",
      "castTime": 0.9,
      "damageScaling": "320% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "320% + 300",
      "lvl90": null,
      "effects": [
        "Stun",
        "Cleanse"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Florence Recuperation",
      "icon": "skill001/skill0022_1",
      "description": "restore HP to all alliesHP and inflicts Hit-Based Damage UP(LV 1) for 10 seconds and BlockUP(LV 1) for 10 seconds , 20 Hit-Based Healing Shield (LV 1)",
      "effect": "2500% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Healing Shield Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "It's time for your shot♪",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 15 seconds, 3s Paralysis for",
      "effect": "380% + 600",
      "buffEffects": [
        {
          "name": "Bleed",
          "value": -800,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Emergency transport!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds , 5",
      "effect": "320% + 300",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Florence Recuperation",
      "icon": "skill001/skill0022_1",
      "description": "restore HP to all alliesHP and inflicts Hit-Based Damage UP(LV 1) for 10 seconds and BlockUP(LV 1) for 10 seconds , 20 Hit-Based Healing Shield (LV 1)",
      "effect": "2500% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Healing Shield Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "Florence Recuperation",
      "icon": "skill001/skill0022_2",
      "description": "restore HP to all alliesHP and inflicts Hit-Based Damage UP(LV 2) for 10 seconds and BlockUP(LV 2) for 10 seconds , 20 Hit-Based Healing Shield (LV 2)",
      "effect": "2875% + 1300",
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Healing Shield Lv2",
          "value": 35,
          "type": "percent",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Damage UP",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+15), Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Super Serious Nurse: Lapis",
  "id": 2205,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 300,
    "MATK": 180,
    "DEF": 216,
    "MDEF": 264
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.45"
  },
  "slug": "super-serious-nurse-lapis"
};

export const stats = {
  "id": "super-serious-nurse-lapis",
  "characterId": 2205,
  "name": "【Super Serious Nurse】Lapis",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 300,
      "lv90": 1503
    },
    "matk": {
      "base": 180,
      "lv90": 902
    },
    "def": {
      "base": 216,
      "lv90": 432
    },
    "mdef": {
      "base": 264,
      "lv90": 528
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 63,
      "lv90": 222
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 55,
      "lv90": 55
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
      "ATK": 90,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 439,
      "ATK": 104,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "ATK": 122,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 573,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1178,
      "ATK": 279,
      "DEF": 73,
      "MDEF": 53,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3088,
      "ATK": 730,
      "Block": 75,
      "MP Charge": 11,
      "Accuracy": 30,
      "DEF": 73,
      "MDEF": 53,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Heal Pwr": 20
    },
    "gp3": {
      "ATK": 120,
      "Heal Pwr": 20
    },
    "gp4": {
      "ATK": 120,
      "Heal Pwr": 45
    },
    "gp5": {
      "ATK": 200,
      "Heal Pwr": 45
    },
    "gp6": {
      "ATK": 200,
      "Heal Pwr": 70
    },
    "gp7": {
      "ATK": 280,
      "Heal Pwr": 70
    },
    "gp8": {
      "ATK": 280,
      "Heal Pwr": 95
    },
    "gp9": {
      "ATK": 360,
      "Heal Pwr": 95
    },
    "gp10": {
      "ATK": 360,
      "Heal Pwr": 120
    },
    "total": {
      "ATK": 360,
      "Heal Pwr": 120
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 134,
      "ATK": 32,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "ATK": 38,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "ATK": 44,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "ATK": 51,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "ATK": 57,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 268,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "ATK": 70,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "ATK": 76,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "ATK": 82,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 375,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 25
    },
    {
      "grade": 2,
      "HP": 115
    },
    {
      "grade": 3,
      "ATK": 35
    },
    {
      "grade": 4,
      "HP": 153
    },
    {
      "grade": 5,
      "ATK": 45
    },
    {
      "grade": 6,
      "HP": 191
    },
    {
      "grade": 7,
      "ATK": 55
    },
    {
      "grade": 8,
      "HP": 229
    },
    {
      "grade": 9,
      "ATK": 65
    },
    {
      "grade": 10,
      "HP": 267
    },
    {
      "grade": 11,
      "ATK": 72
    }
  ]
};;;;;;;;
