// Skills data for Marina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Star Procession",
      "icon": "skill001/skill0007",
      "description": "Deals 1690 (ATK x 1.0 + 584) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-26DOWN for 6 seconds",
      "descriptionLv1": "Deals 271 (ATK x 1.0 + 50) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-13DOWN for 6 seconds",
      "descriptionLv90": "Deals 1690 (ATK x 1.0 + 584) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-26DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": "100% + 584",
      "effects": [
        "Action Speed - Lv5",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Future Sight",
      "icon": "skill001/skill0019",
      "description": "\u6211\u65b9\u5168\u9ad46\u79d2\u7684Physical Critical Damage485UP and Magic Critical Damage485UP for 6 seconds",
      "descriptionLv1": "\u6211\u65b9\u5168\u9ad46\u79d2\u7684Physical Critical Damage40UP and Magic Critical Damage40UP for 6 seconds",
      "descriptionLv90": "\u6211\u65b9\u5168\u9ad46\u79d2\u7684Physical Critical Damage485UP and Magic Critical Damage485UP for 6 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_1",
      "description": "\u6211\u65b9\u5168\u9ad48\u79d2\u7684Action Speed UP(LV1) and Hit-Based Shield(LV1) for 4 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_2",
      "description": "\u6211\u65b9\u5168\u9ad48\u79d2\u7684Action Speed UP(LV2) and Hit-Based Shield(LV2) for 4 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_3",
      "description": "\u6211\u65b9\u5168\u9ad48\u79d2\u7684Action Speed UP(LV3) and Hit-Based Shield(LV3) for 5 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_4",
      "description": "\u6211\u65b9\u5168\u9ad48\u79d2\u7684Action Speed UP(LV4) and Hit-Based Shield(LV4) for 5 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 45,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "La Roue de Fortune",
      "icon": "skill001/skill0020_5",
      "description": "\u6211\u65b9\u5168\u9ad48\u79d2\u7684Action Speed UP(LV5) and Hit-Based Shield(LV5) for 6 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Magic Critical Damage+",
      "icon": "skill001/skill1006",
      "effect": "Physical Critical Damage+ (+90), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20%), Action Speed + (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Marina",
  "id": 2056,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2251,
    "ATK": 221,
    "MATK": 132,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "marina"
};
