// Skills data for Meinias
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Oboro Night",
      "icon": "skill001/skill0009",
      "description": "Deals 2292 (ATK x 1.0 + 574) physical damage to the 3 nearest enemies and inflicts Accuracy -23DOWN for 8 seconds and Block-23DOWN for 8 seconds",
      "descriptionLv1": "Deals 383 (ATK x 1.0 + 40) physical damage to the 3 nearest enemies and inflicts Accuracy -11DOWN for 8 seconds and Block-11DOWN for 8 seconds",
      "descriptionLv90": "Deals 2292 (ATK x 1.0 + 574) physical damage to the 3 nearest enemies and inflicts Accuracy -23DOWN for 8 seconds and Block-23DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+6",
      "lvl1": "100% + 40",
      "lvl90": "100% + 574",
      "effects": [
        "Accuracy - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -23,
          "type": "flat",
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
    },
    {
      "slot": 3,
      "name": "Shadow Dance",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack 18%+658UP to self for 12 seconds and Block23UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 12 seconds and Block11UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 12 seconds and Block23UP for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 18,
          "valueLv1": 18,
          "valueLv90": 18,
          "flatBonus": 35,
          "flatBonusLv1": 35,
          "flatBonusLv90": 658,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "valueLv1": 11,
          "valueLv90": 23,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9990 (ATK x 5.0 + 1400) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV1) to self for 10 seconds",
      "effect": "500% + 1400",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv1",
          "value": 100,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_2",
      "description": "Deals 11277 (ATK x 5.4 + 2000) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV2) to self for 10 seconds",
      "effect": "540% + 2000",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_3",
      "description": "Deals 12192 (ATK x 5.7 + 2400) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV3) to self for 10 seconds",
      "effect": "570% + 2400",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_4",
      "description": "Deals 13008 (ATK x 6.0 + 2700) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV4) to self for 10 seconds",
      "effect": "600% + 2700",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_5",
      "description": "Deals 13823 (ATK x 6.3 + 3000) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV5) to self for 10 seconds",
      "effect": "630% + 3000",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv5",
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
      "name": "Accuracy +, Action Speed +",
      "icon": "skill001/skill1004",
      "effect": "Accuracy + (+25), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Accuracy +",
          "value": 25,
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
      "name": "Physical Attack +, Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Ultimate Damage + (+15%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Meinias",
  "id": 2058,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2183,
    "ATK": 343,
    "MATK": 206,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "meinias"
};
