// Character data: riki
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "riki",
  "name": "Riki",
  "displayName": "Riki",
  "baseName": "Riki",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Riki",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "113cm (N Cup)",
    "waist": "63cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "榛名れん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2202
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Evil Spirit's Comfort",
      "icon": "skill001/skill0019",
      "description": "Applies 15%+Damage Reduction to all allies for 8 seconds and Reflect Shield(250%+500) for 8 seconds , 8 Action Speed 20%UP",
      "descriptionLv1": "Applies 15%+Damage Reduction to all allies for 8 seconds and Reflect Shield(250%+500) for 8 seconds , 8 Action Speed 20%UP",
      "descriptionLv90": "Applies 15%+Damage Reduction to all allies for 8 seconds and Reflect Shield(250%+500) for 8 seconds , 8 Action Speed 20%UP",
      "target": "All Allies",
      "castTime": 1.2,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Shield",
        "Reflect Shield",
        "Action Speed + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Shield",
          "value": 15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Reflect Shield",
          "value": 999,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 500.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Oni Fire Flame",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +50%, inflict 2s",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +50%, inflict 2s",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-220 DOWN for 6 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +50%, inflict 2s",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "120% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+6",
      "lvl1": "120% + 300",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv4",
        "Oni Fire",
        "Oni Fire"
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
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Night Star - Golden God's Seven Kill Calamity",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 1) for 8 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +30%, 4s Curse for, self10 SpeedUP(LV 1)",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Night Star - Golden God's Seven Kill Calamity",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 2) for 8 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5, ), [Ghost Fire]5 when damage +30%, 5s Curse for, self10 SpeedUP(LV 2)",
      "effect": "1320% + 950",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Night Star - Golden God's Seven Kill Calamity",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 3) for 8 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +30%, 5s Curse for, self10 SpeedUP(LV 3)",
      "effect": "1470% + 1100",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Night Star - Golden God's Seven Kill Calamity",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 4) for 8 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +30%, 6s Curse for, self10 SpeedUP(LV 4)",
      "effect": "1590% + 1200",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Night Star - Golden God's Seven Kill Calamity",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 5) for 8 seconds, 1[Ghost Fire](treated as, [Ghost Fire]1HP-800, Fire Type damage taken by damage+2%, max5), [Ghost Fire]5 when damage +30%, 6s Curse for, self10 SpeedUP(LV 5)",
      "effect": "1700% + 1300",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Oni Fire",
          "value": 0,
          "type": "percent",
          "duration": 9999
        },
        {
          "name": "Oni Fire",
          "value": 2,
          "type": "percent",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+10%), Magic Critical Damage+ (0)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 0,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Riki",
  "id": 2202,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1554,
    "ATK": 218,
    "MATK": 363,
    "DEF": 284,
    "MDEF": 233
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "riki"
};

export const stats = {
  "id": "riki",
  "characterId": 2202,
  "name": "Riki",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1554,
      "lv90": 7772
    },
    "atk": {
      "base": 218,
      "lv90": 1090
    },
    "matk": {
      "base": 363,
      "lv90": 1816
    },
    "def": {
      "base": 284,
      "lv90": 568
    },
    "mdef": {
      "base": 233,
      "lv90": 466
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
      "base": 90,
      "lv90": 144
    },
    "magicCrit": {
      "base": 150,
      "lv90": 240
    },
    "hpRegen": {
      "base": 77,
      "lv90": 271
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
      "base": 65,
      "lv90": 65
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
      "HP": 466,
      "MATK": 109,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 536,
      "MATK": 125,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 630,
      "MATK": 147,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 700,
      "MATK": 164,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1322,
      "MATK": 309,
      "DEF": 57,
      "MDEF": 79,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3654,
      "MATK": 854,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 57,
      "MDEF": 79,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "Magic Crit": 10,
      "MP Cost Down": 3
    },
    "gp3": {
      "Magic Crit": 10,
      "MP Cost Down": 5
    },
    "gp4": {
      "Magic Crit": 30,
      "MP Cost Down": 5
    },
    "gp5": {
      "Magic Crit": 30,
      "MP Cost Down": 6
    },
    "gp6": {
      "Magic Crit": 50,
      "MP Cost Down": 6
    },
    "gp7": {
      "Magic Crit": 50,
      "MP Cost Down": 7
    },
    "gp8": {
      "Magic Crit": 70,
      "MP Cost Down": 7
    },
    "gp9": {
      "Magic Crit": 70,
      "MP Cost Down": 8
    },
    "gp10": {
      "Magic Crit": 90,
      "MP Cost Down": 8
    },
    "total": {
      "Magic Crit": 90,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 164,
      "MATK": 38,
      "MDEF": 17,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 196,
      "MATK": 46,
      "MDEF": 20,
      "Magic Crit": 4,
      "Block": 14
    },
    "g3": {
      "HP": 229,
      "MATK": 54,
      "MDEF": 23,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 262,
      "MATK": 61,
      "MDEF": 27,
      "Magic Crit": 5,
      "Block": 19
    },
    "g5": {
      "HP": 295,
      "MATK": 69,
      "MDEF": 30,
      "Magic Crit": 6,
      "MP Charge": 5
    },
    "g6": {
      "HP": 327,
      "MATK": 77,
      "MDEF": 33,
      "Magic Crit": 6,
      "Accuracy": 18
    },
    "g7": {
      "HP": 360,
      "MATK": 84,
      "MDEF": 37,
      "Magic Crit": 7,
      "Block": 26
    },
    "g8": {
      "HP": 393,
      "MATK": 92,
      "MDEF": 40,
      "Magic Crit": 8,
      "Accuracy": 21
    },
    "g9": {
      "HP": 425,
      "MATK": 99,
      "MDEF": 43,
      "Magic Crit": 8,
      "Block": 31
    },
    "g10": {
      "HP": 458,
      "MATK": 107,
      "MDEF": 47,
      "Magic Crit": 9,
      "MP Charge": 8
    },
    "total": {
      "HP": 458,
      "MATK": 107,
      "MDEF": 47,
      "Magic Crit": 9,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 5
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "Magic Crit": 7
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "Magic Crit": 9
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "Magic Crit": 11
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "Magic Crit": 13
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "Magic Crit": 15
    }
  ]
};;;;;;;
