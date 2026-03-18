// Skills data for 【Swift-Chant Sorceress】Sobrina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Light Beam by Instinct!",
      "icon": "skill001/skill0011",
      "description": "Deals 1966 (MATK x 0.85 + 772) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 3 seconds",
      "descriptionLv1": "Deals 298 (MATK x 0.85 + 60) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 3 seconds",
      "descriptionLv90": "Deals 1966 (MATK x 0.85 + 772) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "85% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+8",
      "lvl1": "85% + 60",
      "lvl90": "85% + 772",
      "effects": [
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 3
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "Book Attack!",
      "icon": "skill001/skill0011",
      "description": "Deals 2207 (MATK x 1.0 + 802) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -23DOWN for 8 seconds",
      "descriptionLv1": "Deals 371 (MATK x 1.0 + 90) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -11DOWN for 8 seconds",
      "descriptionLv90": "Deals 2207 (MATK x 1.0 + 802) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -23DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "100% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+8",
      "lvl1": "100% + 90",
      "lvl90": "100% + 802",
      "effects": [
        "Paralysis",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_1",
      "description": "Deals 7375 (MATK x 5.0 + 350) magic damage to all enemies and inflicts Freeze(LV1) for 3 seconds and inflicts Paralysis for 7 seconds",
      "effect": "500% + 350",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_2",
      "description": "Deals 10305 (MATK x 7.0 + 470) magic damage to all enemies and inflicts Freeze(LV2) for 3 seconds and inflicts Paralysis for 8 seconds",
      "effect": "700% + 470",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_3",
      "description": "Deals 12464 (MATK x 8.5 + 522) magic damage to all enemies and inflicts Freeze(LV3) for 3 seconds and inflicts Paralysis for 8 seconds",
      "effect": "850% + 522",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv3",
          "value": -4000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_4",
      "description": "Deals 13927 (MATK x 9.5 + 580) magic damage to all enemies and inflicts Freeze(LV4) for 3 seconds and inflicts Paralysis for 9 seconds",
      "effect": "950% + 580",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv4",
          "value": -4500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_5",
      "description": "Deals 14695 (MATK x 10.0 + 645) magic damage to all enemies and inflicts Freeze(LV5) for 3 seconds and inflicts Paralysis for 9 seconds",
      "effect": "1000% + 645",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv5",
          "value": -5000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Freeze Resistance LvMax, Paralysis Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Freeze Resistance LvMax (+1%), Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Freeze Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Swift-Chant Sorceress\u3011Sobrina",
  "id": 2043,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 168,
    "MATK": 281,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "mage-of-bastinton-sobrina"
};
