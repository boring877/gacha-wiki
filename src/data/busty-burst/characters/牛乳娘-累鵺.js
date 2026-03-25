// Character data: 牛乳娘-累鵺
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "牛乳娘-累鵺",
  "name": "牛乳娘: 累＆鵺",
  "displayName": "牛乳娘: 累＆鵺",
  "baseName": "累＆鵺",
  "title": "牛乳娘",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 220,
  "weaponType": "Strike",
  "skillTypes": [
    "強化、弱體化、妨害"
  ],
  "image": "累＆鵺",
  "introduction": null,
  "profile": {
    "height": "167cm、182cm",
    "bust": "114cm (O Cup)",
    "waist": "60cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick、山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "森乃なんな、有賀桃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2239
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Milk Twin Attack",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds , 15 Bleed (HP −-800 after acting, cannot be removed)",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds , 15 Bleed (HP −-800 after acting, cannot be removed)",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-220 DOWN for 6 seconds and Block-23 DOWN for 6 seconds , 15 Bleed (HP −-8000 after acting, cannot be removed)",
      "target": "Nearest Enemy",
      "castTime": 0.5,
      "damageScaling": "360% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+20",
      "lvl1": "360% + 600",
      "lvl90": "360% + -6520",
      "effects": [
        "Physical Defense - Lv4",
        "Block- Lv4",
        "Bleed"
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
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Bleed",
          "value": -800,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -80.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Now I can squeeze all I want♪",
      "icon": "skill001/skill0019",
      "description": "all allies10 Physical Attack 18%+35 UP and Action Speed 17%UP for 10 seconds , 3 nearest enemies3s Charm for",
      "descriptionLv1": "all allies10 Physical Attack 18%+35 UP and Action Speed 17%UP for 10 seconds , 3 nearest enemies3s Charm for",
      "descriptionLv90": "all allies10 Physical Attack 18%+665 UP and Action Speed 17%UP for 10 seconds , 3 nearest enemies3s Charm for",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Action Speed + Lv4",
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Milk Cross Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds and Magic Type Damage Taken UP(LV 1) for 8 seconds , 10 BlockDOWN(LV 1)",
      "effect": "1200% + 800",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Milk Cross Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds and Magic Type Damage Taken UP(LV 2) for 8 seconds , 10 BlockDOWN(LV 2)",
      "effect": "1440% + 1000",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Milk Cross Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds and Magic Type Damage Taken UP(LV 3) for 8 seconds , 10 BlockDOWN(LV 3)",
      "effect": "1620% + 1200",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Milk Cross Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 5 seconds and Magic Type Damage Taken UP(LV 4) for 8 seconds , 10 BlockDOWN(LV 4)",
      "effect": "1739% + 1350",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Milk Cross Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 5 seconds and Magic Type Damage Taken UP(LV 5) for 8 seconds , 10 BlockDOWN(LV 5)",
      "effect": "1800% + 1500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Magic Type ATK +",
      "icon": "skill001/skill1007",
      "effect": "Action Speed + (+15), Magic Type ATK + (+10%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Magic Type ATK +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "牛乳娘: 累＆鵺",
  "id": 2239,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、妨害"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 242,
    "MATK": 145,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "牛乳娘-累鵺"
};

export const stats = {
  "id": "牛乳娘-累鵺",
  "characterId": 2239,
  "name": "【牛乳娘】累＆鵺",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 242,
      "lv90": 1210
    },
    "matk": {
      "base": 145,
      "lv90": 725
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
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
      "HP": 709,
      "ATK": 73,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 816,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 98,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1064,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2188,
      "ATK": 206,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5735,
      "ATK": 569,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 40,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 200,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 280,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 31,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 36,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 41,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 46,
      "Phys Crit": 12,
      "MP Charge": 4
    },
    "g6": {
      "HP": 498,
      "ATK": 51,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 56,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 61,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 66,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 697,
      "ATK": 71,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "HP": 213
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "HP": 284
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "HP": 355
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "HP": 426
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "HP": 497
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
