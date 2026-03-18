// Skills data for Shaty
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Weakness Exploit",
      "icon": "skill001/skill0002",
      "description": "Deals 8174 (ATK x 2.7 + 2375) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
      "descriptionLv1": "Deals 1308 (ATK x 2.7 + 150) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
      "descriptionLv90": "Deals 8174 (ATK x 2.7 + 2375) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
      "target": "Back Enemy",
      "castTime": 1.78,
      "damageScaling": "270% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "270% + 150",
      "lvl90": "270% + 2375",
      "effects": [
        "Wind Type ATK + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Wind Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Analysis",
      "icon": "skill001/skill0011",
      "description": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-23DOWN for 8 seconds",
      "descriptionLv1": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-11DOWN for 8 seconds",
      "descriptionLv90": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-23DOWN for 8 seconds",
      "target": "Back Enemy",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Wind Type Defense - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Wind Type Defense - Lv4",
          "value": -18,
          "valueLv1": -18,
          "valueLv90": -18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -23,
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
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9792 (ATK x 4.0 + 1200) physical damage to the farthest enemy and applies Wind Type ATK UP(LV1) to self for 6 seconds and Hit-Based Damage UP(LV1) for 10 seconds when the ultimate is activated.",
      "effect": "400% + 1200",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 80,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_2",
      "description": "Deals 11266 (ATK x 4.5 + 1600) physical damage to the farthest enemy and applies Wind Type ATK UP(LV2) to self for 6 seconds and Hit-Based Damage UP(LV2) for 10 seconds when the ultimate is activated.",
      "effect": "450% + 1600",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 45,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_3",
      "description": "Deals 12210 (ATK x 4.8 + 1900) physical damage to the farthest enemy and applies Wind Type ATK UP(LV3) to self for 6 seconds and Hit-Based Damage UP(LV3) for 10 seconds when the ultimate is activated.",
      "effect": "480% + 1900",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv3",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_4",
      "description": "Deals 13154 (ATK x 5.1 + 2200) physical damage to the farthest enemy and applies Wind Type ATK UP(LV4) to self for 6 seconds and Hit-Based Damage UP(LV4) for 10 seconds when the ultimate is activated.",
      "effect": "510% + 2200",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv4",
          "value": 55,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Stardust Radiance of Seven Colors",
      "icon": "skill001/skill0003_5",
      "description": "Deals 13991 (ATK x 5.35 + 2500) physical damage to the farthest enemy and applies Wind Type ATK UP(LV5) to self for 6 seconds and Hit-Based Damage UP(LV5) for 10 seconds when the ultimate is activated.",
      "effect": "535% + 2500",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv5",
          "value": 60,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Shaty",
  "id": 2072,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 429,
    "MATK": 257,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "shaty"
};
