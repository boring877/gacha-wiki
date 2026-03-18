// Skills data for 【Queen of Pies and Cookies】Aphrodia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Won\u2019t you taste my sweets?",
      "icon": "skill001/skill0011",
      "description": "Deals 5923 (ATK x 3.3 + 1930) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 8 seconds and Block-23DOWN for 6 seconds",
      "descriptionLv1": "Deals 948 (ATK x 3.3 + 150) physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 8 seconds and Block-11DOWN for 6 seconds",
      "descriptionLv90": "Deals 5923 (ATK x 3.3 + 1930) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 8 seconds and Block-23DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "330% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "330% + 150",
      "lvl90": "330% + 1930",
      "effects": [
        "Poison Lv5",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Poison Lv5",
          "value": -200,
          "valueLv1": -200,
          "valueLv90": -2425,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -23,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Come now, have some.",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Damage UP(35%+934, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
      "descriptionLv1": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
      "descriptionLv90": "Applies Hit-Based Damage UP(35%+934, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Damage + Lv4",
        "Debuff Resistance Lv2"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Damage + Lv4",
          "value": 35,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Accept it\u2014this is your reward.",
      "icon": "skill001/skill0003_1",
      "description": "Deals 14957 (ATK x 11.7 + 800) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV1) for 10 seconds",
      "effect": "1170% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
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
      "name": "Accept it\u2014this is your reward.",
      "icon": "skill001/skill0003_2",
      "description": "Deals 17940 (ATK x 14.0 + 1000) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV2) for 10 seconds and BlockDOWN(LV2) for 10 seconds",
      "effect": "1400% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 10
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
      "name": "Accept it\u2014this is your reward.",
      "icon": "skill001/skill0003_3",
      "description": "Deals 19976 (ATK x 15.6 + 1100) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV3) for 10 seconds and BlockDOWN(LV3) for 10 seconds",
      "effect": "1560% + 1100",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 10
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
      "name": "Accept it\u2014this is your reward.",
      "icon": "skill001/skill0003_4",
      "description": "Deals 21407 (ATK x 16.7 + 1200) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV4) for 10 seconds and BlockDOWN(LV4) for 10 seconds",
      "effect": "1670% + 1200",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
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
      "name": "Accept it\u2014this is your reward.",
      "icon": "skill001/skill0003_5",
      "description": "Deals 22233 (ATK x 17.3 + 1300) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV5) for 10 seconds and BlockDOWN(LV5) for 10 seconds",
      "effect": "1730% + 1300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
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
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Mind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Mind Type ATK + (+10%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Queen of Pies and Cookies\u3011Aphrodia",
  "id": 2095,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 242,
    "MATK": 145,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "queen-of-pies-and-cookies-aphrodia"
};
