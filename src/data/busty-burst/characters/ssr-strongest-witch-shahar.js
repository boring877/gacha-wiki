// Skills data for 【Strongest Witch】Shahar
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6211\u7684\u8a5b\u5492\u6709\u6548\u55ce\uff1f",
      "icon": "skill001/skill0008",
      "description": "Deals 1969 (MATK x 0.9 + 624) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds \u7570\u5e38\u72c0\u614b and Magic Defense-23%+-320DOWN for 6 seconds",
      "descriptionLv1": "Deals 359 (MATK x 0.9 + 90) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds \u7570\u5e38\u72c0\u614b and Magic Defense-23%+-50DOWN for 6 seconds",
      "descriptionLv90": "Deals 1969 (MATK x 0.9 + 624) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds \u7570\u5e38\u72c0\u614b and Magic Defense-23%+-320DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "90% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+6",
      "lvl1": "90% + 90",
      "lvl90": "90% + 624",
      "effects": [
        "Curse",
        "Magic Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Lv5",
          "value": -23,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "\u8981\u548c\u6211\u4e00\u8d77\u55ce\uff1f",
      "icon": "skill001/skill0011",
      "description": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds \u3001\u79d2\u7684",
      "descriptionLv1": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds \u3001\u79d2\u7684",
      "descriptionLv90": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds \u3001\u79d2\u7684",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Fire Type ATK - Lv5",
        "Fire Type Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Fire Type ATK - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Fire Type Defense- Lv5",
          "value": -20,
          "type": "percent",
          "duration": 9
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u9b54\u5973\u7684\u6b3e\u5f85\u5594\uff01",
      "icon": "skill001/skill0012_1",
      "description": "Deals 4785 (MATK x 3.0 + 300) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV1) for 10 seconds and Magic Critical DamageDOWN(LV1) for 10 seconds",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u9b54\u5973\u7684\u6b3e\u5f85\u5594\uff01",
      "icon": "skill001/skill0012_2",
      "description": "Deals 6380 (MATK x 4.0 + 400) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV2) for 10 seconds and Magic Critical DamageDOWN(LV2) for 10 seconds",
      "effect": "400% + 400",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u9b54\u5973\u7684\u6b3e\u5f85\u5594\uff01",
      "icon": "skill001/skill0012_3",
      "description": "Deals 7626 (MATK x 4.8 + 450) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV3) for 11 seconds and Magic Critical DamageDOWN(LV3) for 11 seconds",
      "effect": "480% + 450",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u9b54\u5973\u7684\u6b3e\u5f85\u5594\uff01",
      "icon": "skill001/skill0012_4",
      "description": "Deals 8722 (MATK x 5.5 + 500) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV4) for 11 seconds and Magic Critical DamageDOWN(LV4) for 11 seconds",
      "effect": "550% + 500",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u9b54\u5973\u7684\u6b3e\u5f85\u5594\uff01",
      "icon": "skill001/skill0012_5",
      "description": "Deals 9520 (MATK x 6.0 + 550) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV5) for 12 seconds and Magic Critical DamageDOWN(LV5) for 12 seconds",
      "effect": "600% + 550",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1003",
      "effect": "Magic Attack + (+259), Magic Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "\u3010Strongest Witch\u3011Shahar",
  "id": 2081,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Support",
  "tags": [],
  "baseStats": {
    "HP": 2837,
    "ATK": 179,
    "MATK": 299,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-strongest-witch-shahar"
};
