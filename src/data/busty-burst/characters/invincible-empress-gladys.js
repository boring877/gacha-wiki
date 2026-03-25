// Character data: invincible-empress-gladys
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "invincible-empress-gladys",
  "name": "Invincible Empress: Gladys",
  "displayName": "Invincible Empress: Gladys",
  "baseName": "Gladys",
  "title": "Invincible Empress",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Taunt",
    "Debuff"
  ],
  "image": "Gladys",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "166cm",
    "bust": "95cm (I Cup)",
    "waist": "60cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "咲ゆたか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2163
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Great Serpent Slash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds, apply to selfRecovers HP by 10%+300",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds, apply to selfRecovers HP by 10%+300",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-220 DOWN for 6 seconds, apply to selfRecovers HP by 10%+300",
      "target": "Nearest Enemy",
      "castTime": 0.9,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "350% + 500",
      "lvl90": "350% + 3170",
      "effects": [
        "Physical Defense - Lv4",
        "HP Recovery"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "HP Recovery",
          "value": 10,
          "type": "percent",
          "duration": 0,
          "levelGrowth": 30.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "You think you can beat me?",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 12 seconds and Physical Attack 20%+40 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "descriptionLv1": "Applies Taunt to self for 12 seconds and Physical Attack 20%+40 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "descriptionLv90": "Applies Taunt to self for 12 seconds and Physical Attack 20%+850 UP for 12 seconds , 12 Debuff Resistance 50%UP",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Attack + Lv5",
        "Debuff Resistance Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Varkenheim Style Ultimate - Demon Blade Extermination",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyApplies Physical Critical DamageUP(LV 1) to self for 10 seconds and Hit-Based Shield(LV 1) for 10 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Varkenheim Style Ultimate - Demon Blade Extermination",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemyApplies Physical Critical DamageUP(LV 2) to self for 10 seconds and Hit-Based Shield(LV 2) for 10 seconds",
      "effect": "1440% + 1200",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Varkenheim Style Ultimate - Demon Blade Extermination",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemyApplies Physical Critical DamageUP(LV 3) to self for 10 seconds and Hit-Based Shield(LV 3) for 10 seconds",
      "effect": "1620% + 1380",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv3",
          "value": 400,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Varkenheim Style Ultimate - Demon Blade Extermination",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemyApplies Physical Critical DamageUP(LV 4) to self for 10 seconds and Hit-Based Shield(LV 4) for 10 seconds",
      "effect": "1739% + 1500",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv4",
          "value": 450,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 45,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Varkenheim Style Ultimate - Demon Blade Extermination",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemyApplies Physical Critical DamageUP(LV 5) to self for 10 seconds and Hit-Based Shield(LV 5) for 10 seconds",
      "effect": "1800% + 1600",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv5",
          "value": 500,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Ultimate Damage +, Shield",
      "icon": "skill001/skill1002",
      "effect": "Ultimate Damage + (+10%), Shield (+50%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Shield",
          "value": 50,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Invincible Empress: Gladys",
  "id": 2163,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Taunt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 4344,
    "ATK": 235,
    "MATK": 141,
    "DEF": 50,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "invincible-empress-gladys"
};

export const stats = {
  "id": "invincible-empress-gladys",
  "characterId": 2163,
  "name": "【Invincible Empress】Gladys",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Taunt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 4344,
      "lv90": 21720
    },
    "atk": {
      "base": 235,
      "lv90": 1176
    },
    "matk": {
      "base": 141,
      "lv90": 705
    },
    "def": {
      "base": 50,
      "lv90": 101
    },
    "mdef": {
      "base": 35,
      "lv90": 69
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
      "base": 78,
      "lv90": 125
    },
    "magicCrit": {
      "base": 47,
      "lv90": 75
    },
    "hpRegen": {
      "base": 217,
      "lv90": 760
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
      "HP": 1303,
      "ATK": 71,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1499,
      "ATK": 81,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1759,
      "ATK": 95,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1955,
      "ATK": 106,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 4019,
      "ATK": 218,
      "DEF": 16,
      "MDEF": 7,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 10535,
      "ATK": 571,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 16,
      "MDEF": 7,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "DEF": 20
    },
    "gp2": {
      "DEF": 20,
      "MDEF": 20
    },
    "gp3": {
      "DEF": 50,
      "MDEF": 20
    },
    "gp4": {
      "DEF": 50,
      "MDEF": 50
    },
    "gp5": {
      "DEF": 80,
      "MDEF": 50
    },
    "gp6": {
      "DEF": 80,
      "MDEF": 80
    },
    "gp7": {
      "DEF": 110,
      "MDEF": 80
    },
    "gp8": {
      "DEF": 110,
      "MDEF": 110
    },
    "gp9": {
      "DEF": 140,
      "MDEF": 110
    },
    "gp10": {
      "DEF": 140,
      "MDEF": 140
    },
    "total": {
      "DEF": 140,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 457,
      "ATK": 25,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 549,
      "ATK": 30,
      "Phys Crit": 2,
      "Block": 16
    },
    "g3": {
      "HP": 640,
      "ATK": 35,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 732,
      "ATK": 40,
      "Phys Crit": 3,
      "Block": 21
    },
    "g5": {
      "HP": 823,
      "ATK": 45,
      "Phys Crit": 3,
      "MP Charge": 4
    },
    "g6": {
      "HP": 915,
      "ATK": 50,
      "Phys Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 1006,
      "ATK": 55,
      "Phys Crit": 4,
      "Block": 29
    },
    "g8": {
      "HP": 1097,
      "ATK": 59,
      "Phys Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1189,
      "ATK": 64,
      "Phys Crit": 4,
      "Block": 34
    },
    "g10": {
      "HP": 1280,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 7
    },
    "total": {
      "HP": 1280,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 362
    },
    {
      "grade": 2,
      "ATK": 21
    },
    {
      "grade": 3,
      "HP": 507
    },
    {
      "grade": 4,
      "ATK": 28
    },
    {
      "grade": 5,
      "HP": 652
    },
    {
      "grade": 6,
      "ATK": 35
    },
    {
      "grade": 7,
      "HP": 796
    },
    {
      "grade": 8,
      "ATK": 42
    },
    {
      "grade": 9,
      "HP": 941
    },
    {
      "grade": 10,
      "ATK": 49
    },
    {
      "grade": 11,
      "HP": 1036
    }
  ]
};;;;;;;;
