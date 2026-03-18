// Skills data for Rosa
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rhapsody of the Goddess",
      "icon": "skill001/skill0002",
      "description": "Deals 450% ATK + 500 physical damage to the nearest enemy and applies Physical Attack+ Lv5 (+20~40%) to self for 10 seconds",
      "descriptionLv1": "Deals 450% ATK + 500 physical damage to the nearest enemy and applies Physical Attack+ Lv5 (+20%) to self for 10 seconds",
      "descriptionLv90": "Deals 450% ATK + 525 physical damage to the nearest enemy and applies Physical Attack+ Lv5 (+40%) to self for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "450% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "450% + 500",
      "lvl90": "450% + 525",
      "effects": [
        "Physical Attack+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack+ Lv5",
          "value": "20~40",
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "slot": 3,
      "name": "Glorious Triumph",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage+ Lv3 (40\u2192490) to all allies for 7 seconds and Accuracy+ Lv3 (9\u219218) for 7 seconds",
      "descriptionLv1": "Applies Physical Critical Damage+ Lv3 (40) to all allies for 7 seconds and Accuracy+ Lv3 (9) for 7 seconds",
      "descriptionLv90": "Applies Physical Critical Damage+ Lv3 (490) to all allies for 7 seconds and Accuracy+ Lv3 (18) for 7 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": "0",
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Accuracy+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "valueLv90": 490,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy+ Lv3",
          "value": 9,
          "valueLv90": 18,
          "type": "flat",
          "duration": 7
        }
      ]
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_1",
      "description": "Deals 1000% ATK + 800 physical damage to the nearest enemy and inflicts Block- Ultimate Lv1 (-15%) for 10 seconds and applies Holy Type ATK+ Ultimate Lv1 (+10%) to self for 8 seconds",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Holy Type ATK+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_2",
      "description": "Deals 1200% ATK + 1000 physical damage to the nearest enemy and inflicts Block- Ultimate Lv2 (-20%) for 10 seconds and applies Holy Type ATK+ Ultimate Lv2 (+13%) to self for 9 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 9
        }
      ]
    },
    {
      "rank": 3,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_3",
      "description": "Deals 1350% ATK + 1150 physical damage to the nearest enemy and inflicts Block- Ultimate Lv3 (-24%) for 10 seconds and applies Holy Type ATK+ Ultimate Lv3 (+16%) to self for 9 seconds",
      "effect": "1350% + 1150",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 9
        }
      ]
    },
    {
      "rank": 4,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_4",
      "description": "Deals 1450% ATK + 1250 physical damage to the nearest enemy and inflicts Block- Ultimate Lv4 (-27%) for 10 seconds and applies Holy Type ATK+ Ultimate Lv4 (+18%) to self for 10 seconds",
      "effect": "1450% + 1250",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Mutih Zeib",
      "icon": "skill001/skill0003_5",
      "description": "Deals 1500% ATK + 1300 physical damage to the nearest enemy and inflicts Block- Ultimate Lv5 (-30%) for 10 seconds and applies Holy Type ATK+ Ultimate Lv5 (+20%) to self for 10 seconds",
      "effect": "1500% + 1300",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack UP (Large), Crit Rate UP (Medium)",
      "icon": "skill001/skill1001",
      "effects": [
        {
          "name": "Physical Attack",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Crit Rate",
          "value": 90,
          "type": "flat"
        }
      ],
      "effectsLv1": [
        {
          "name": "Physical Attack",
          "value": 28,
          "type": "flat"
        },
        {
          "name": "Crit Rate",
          "value": 7,
          "type": "flat"
        }
      ],
      "effectsLv90": [
        {
          "name": "Physical Attack",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Crit Rate",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage UP (Large), Accuracy UP (Medium)",
      "icon": "skill001/skill1001",
      "effects": [
        {
          "name": "Skill Damage",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy",
          "value": 20,
          "type": "flat"
        }
      ],
      "effectsLv1": [
        {
          "name": "Skill Damage",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy",
          "value": 20,
          "type": "flat"
        }
      ],
      "effectsLv90": [
        {
          "name": "Skill Damage",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Rosa",
  "id": 2085,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 336,
    "MATK": 201,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "rosa"
};
