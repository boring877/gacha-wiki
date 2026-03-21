// Skills data for Ruse
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u834a\u68d8\u3002\u89f8\u78b0\u8005\uff0c\u7686\u5c07\u906d\u53d7\u6bc0\u6ec5\u7684\u82e6\u75db",
      "icon": "skill001/skill0011",
      "description": "Deals 8441 (MATK x 3.3 + 2030) magic damage to the enemy with the highest MP \u3001\u9644\u52a03\u79d2\u7684\u6c89\u9ed8\u30013\u79d2\u7684\u8a5b\u5492\u3001\u79d2\u7684",
      "descriptionLv1": "Deals 1530 (MATK x 3.3 + 250) magic damage to the enemy with the highest MP \u3001\u9644\u52a03\u79d2\u7684\u6c89\u9ed8\u30013\u79d2\u7684\u8a5b\u5492\u3001\u79d2\u7684",
      "descriptionLv90": "Deals 8441 (MATK x 3.3 + 2030) magic damage to the enemy with the highest MP \u3001\u9644\u52a03\u79d2\u7684\u6c89\u9ed8\u30013\u79d2\u7684\u8a5b\u5492\u3001\u79d2\u7684",
      "target": "Enemy with Highest MP",
      "castTime": 1.22,
      "damageScaling": "330% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "330% + 250",
      "lvl90": "330% + 2030",
      "effects": [
        "Silence",
        "Curse",
        "Magic Defense- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- LvMax",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "\u9727\u3002\u4e0d\u6b78\u8005\uff0c\u8a98\u5165\u6df1\u6df5",
      "icon": "skill001/skill0011",
      "description": "All Enemies8\u79d2\u7684Action Speed -14%DOWN\uff0cand applies to self8\u79d2\u7684Block-18DOWN",
      "descriptionLv1": "All Enemies8\u79d2\u7684Action Speed -14%DOWN\uff0cand applies to self8\u79d2\u7684Block-9DOWN",
      "descriptionLv90": "All Enemies8\u79d2\u7684Action Speed -14%DOWN\uff0cand applies to self8\u79d2\u7684Block-18DOWN",
      "target": "All Enemies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed - Lv3",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u591c\u3002\u5149\u8f1d\u7684\u69ae\u8000\uff0c\u541e\u566c\u4e00\u5207\u5b55\u80b2\u842c\u7269",
      "icon": "skill001/skill0012_1",
      "description": "Deals 22373 (MATK x 11.0 + 1000) magic damage to the enemy with the highest MP and inflicts Confusion for 2 seconds and Fear Lv1 for 4 seconds",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": -70,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u591c\u3002\u5149\u8f1d\u7684\u69ae\u8000\uff0c\u541e\u566c\u4e00\u5207\u5b55\u80b2\u842c\u7269",
      "icon": "skill001/skill0012_2",
      "description": "Deals 26947 (MATK x 13.2 + 1300) magic damage to the enemy with the highest MP and inflicts Confusion for 3 seconds and Fear Lv2 for 4 seconds",
      "effect": "1320% + 1300",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u591c\u3002\u5149\u8f1d\u7684\u69ae\u8000\uff0c\u541e\u566c\u4e00\u5207\u5b55\u80b2\u842c\u7269",
      "icon": "skill001/skill0012_3",
      "description": "Deals 30645 (MATK x 15.0 + 1500) magic damage to the enemy with the highest MP and inflicts Confusion for 3 seconds and Fear Lv3 for 4 seconds",
      "effect": "1500% + 1500",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv3",
          "value": -30,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u591c\u3002\u5149\u8f1d\u7684\u69ae\u8000\uff0c\u541e\u566c\u4e00\u5207\u5b55\u80b2\u842c\u7269",
      "icon": "skill001/skill0012_4",
      "description": "Deals 32882 (MATK x 16.1 + 1600) magic damage to the enemy with the highest MP and inflicts Confusion for 4 seconds and Fear Lv4 for 4 seconds",
      "effect": "1610% + 1600",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv4",
          "value": -35,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u591c\u3002\u5149\u8f1d\u7684\u69ae\u8000\uff0c\u541e\u566c\u4e00\u5207\u5b55\u80b2\u842c\u7269",
      "icon": "skill001/skill0012_5",
      "description": "Deals 34342 (MATK x 16.8 + 1700) magic damage to the enemy with the highest MP and inflicts Confusion for 4 seconds and Fear Lv5 for 4 seconds",
      "effect": "1680% + 1700",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv5",
          "value": -40,
          "type": "flat",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1001",
      "effect": "Max HP + (+3444), Debuff Resistance + (+0.3%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Debuff Resistance +",
          "value": 0.3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ruse",
  "id": 2092,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 2673,
    "ATK": 233,
    "MATK": 388,
    "DEF": 24,
    "MDEF": 61
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-ruse"
};
