// Skills data for 【Fruit Basket】Bianca
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6211\u6703\u597d\u597d\u6536\u7a6b\u7684",
      "icon": "skill001/skill0009",
      "description": "Deals 7455 (ATK x 3.4 + 2345) physical damage to the nearest enemy and inflicts Physical Defense -23%+-320DOWN for 6 seconds",
      "descriptionLv1": "Deals 1140 (ATK x 3.4 + 120) physical damage to the nearest enemy and inflicts Physical Defense -23%+-50DOWN for 6 seconds",
      "descriptionLv90": "Deals 7455 (ATK x 3.4 + 2345) physical damage to the nearest enemy and inflicts Physical Defense -23%+-320DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "340% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+25",
      "lvl1": "340% + 120",
      "lvl90": "340% + 2345",
      "effects": [
        "Physical Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -23,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "\u8981\u4e0d\u8981\u8a66\u8a66\u770b\uff1f",
      "icon": "skill001/skill0021",
      "description": "\u6700\u8fd1\u6211\u65b93\u540d\u6210\u54e1HP\u56de\u5fa91930 (1930) and inflicts Debuff Resistance 0%UP for 10 seconds",
      "descriptionLv1": "\u6700\u8fd1\u6211\u65b93\u540d\u6210\u54e1HP\u56de\u5fa9150 (150) and inflicts Debuff Resistance 0%UP for 10 seconds",
      "descriptionLv90": "\u6700\u8fd1\u6211\u65b93\u540d\u6210\u54e1HP\u56de\u5fa91930 (1930) and inflicts Debuff Resistance 0%UP for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.08,
      "damageScaling": "850% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "850% + 150",
      "lvl90": "850% + 1930",
      "effects": [
        "Debuff Resistance Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv3",
          "value": 0.5,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u73fe\u5728\u6b63\u662f \u6536\u7a6b\u4e4b\u6642\uff01\uff01",
      "icon": "skill001/skill0003_1",
      "description": "Deals 18184 (ATK x 11.5 + 900) physical damage to the nearest enemy and inflicts Blind for 4 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "1150% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u73fe\u5728\u6b63\u662f \u6536\u7a6b\u4e4b\u6642\uff01\uff01",
      "icon": "skill001/skill0003_2",
      "description": "Deals 21841 (ATK x 13.8 + 1100) physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV2) for 10 seconds",
      "effect": "1380% + 1100",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u73fe\u5728\u6b63\u662f \u6536\u7a6b\u4e4b\u6642\uff01\uff01",
      "icon": "skill001/skill0003_3",
      "description": "Deals 24346 (ATK x 15.4 + 1200) physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV3) for 10 seconds",
      "effect": "1540% + 1200",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u73fe\u5728\u6b63\u662f \u6536\u7a6b\u4e4b\u6642\uff01\uff01",
      "icon": "skill001/skill0003_4",
      "description": "Deals 26149 (ATK x 16.5 + 1350) physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV4) for 10 seconds",
      "effect": "1650% + 1350",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u73fe\u5728\u6b63\u662f \u6536\u7a6b\u4e4b\u6642\uff01\uff01",
      "icon": "skill001/skill0003_5",
      "description": "Deals 26951 (ATK x 17.0 + 1400) physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV5) for 10 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Healing Amount +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Fruit Basket\u3011Bianca",
  "id": 2090,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1715,
    "ATK": 300,
    "MATK": 180,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-fruit-basket-bianca"
};
