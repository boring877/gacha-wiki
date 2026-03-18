// Skills data for 【Festive Costume】Natasha
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "The gown feels so light!",
      "icon": "skill001/skill0007",
      "description": "Deals 3731 (ATK x 2.4 + 1905) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "descriptionLv1": "Deals 489 (ATK x 2.4 + 125) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "descriptionLv90": "Deals 3731 (ATK x 2.4 + 1905) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "240% ATK",
      "baseDamage": "+125",
      "levelGrowth": "+20",
      "lvl1": "240% + 125",
      "lvl90": "240% + 1905",
      "effects": [
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "I must keep it perfectly clean.",
      "icon": "skill001/skill0019",
      "description": "Applies Block26UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Block13UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Block26UP to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv5",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The princess stands for justice!",
      "icon": "skill001/skill0003_1",
      "description": "Deals 2116 (ATK x 2.25 + 404) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV1) for 10 seconds",
      "effect": "225% + 404",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "The princess stands for justice!",
      "icon": "skill001/skill0003_2",
      "description": "Deals 2639 (ATK x 2.8 + 509) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV2) for 10 seconds",
      "effect": "280% + 509",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -8,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "The princess stands for justice!",
      "icon": "skill001/skill0003_3",
      "description": "Deals 3026 (ATK x 3.25 + 553) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV3) for 10 seconds",
      "effect": "325% + 553",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The princess stands for justice!",
      "icon": "skill001/skill0003_4",
      "description": "Deals 3292 (ATK x 3.58 + 568) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV4) for 10 seconds",
      "effect": "358% + 568",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -12,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "The princess stands for justice!",
      "icon": "skill001/skill0003_5",
      "description": "Deals 3493 (ATK x 3.8 + 602) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV5) for 10 seconds",
      "effect": "380% + 602",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -14,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Healing Received +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Festive Costume\u3011Natasha",
  "id": 2070,
  "rarity": "SR",
  "element": "Holy",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1781,
    "ATK": 152,
    "MATK": 91,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "festival-dress-up-natasha"
};
