// Skills data for 【Killer☆Bikini】Theresia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Gotta Avoid the Sunburn!",
      "icon": "skill001/skill0011",
      "description": "Deals 2310 (MATK x 1.2 + 792) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds \uff0cand when the skill activates, applies Hit-Based Magic Damage UP(50%+1351, 4 hit(s)) to self for 5 seconds",
      "descriptionLv1": "Deals 383 (MATK x 1.2 + 80) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds \uff0cand when the skill activates, applies Hit-Based Magic Damage UP(50%+550, 4 hit(s)) to self for 5 seconds",
      "descriptionLv90": "Deals 2310 (MATK x 1.2 + 792) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds \uff0cand when the skill activates, applies Hit-Based Magic Damage UP(50%+1351, 4 hit(s)) to self for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "120% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "120% + 80",
      "lvl90": "120% + 792",
      "effects": [
        "Stun",
        "Hit-Based Magic Damage + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1.2
        },
        {
          "name": "Hit-Based Magic Damage + Lv5",
          "value": 50,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 1.2
    },
    {
      "slot": 3,
      "name": "I\u2019ll Drive You Wild!",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage485UP for 7 seconds",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage40UP for 7 seconds",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage485UP for 7 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 7
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_1",
      "description": "Deals 7357 (MATK x 5.5 + 400) magic damage to all enemies and inflicts Paralysis for 5 seconds and Accuracy DOWN(LV1) for 8 seconds",
      "effect": "550% + 400",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_2",
      "description": "Deals 9987 (MATK x 7.5 + 500) magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV2) for 8 seconds",
      "effect": "750% + 500",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -8,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_3",
      "description": "Deals 11935 (MATK x 9.0 + 550) magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV3) for 8 seconds",
      "effect": "900% + 550",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -10,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_4",
      "description": "Deals 13250 (MATK x 10.0 + 600) magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV4) for 8 seconds",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -12,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Luftmine Ring Silm",
      "icon": "skill001/skill0012_5",
      "description": "Deals 14565 (MATK x 11.0 + 650) magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV5) for 8 seconds",
      "effect": "1100% + 650",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -14,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Debuff Resistance + (+0.3%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
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
      "name": "Magic Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Killer\u2606Bikini\u3011Theresia",
  "id": 2078,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2588,
    "ATK": 151,
    "MATK": 253,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "killer-bikini-theresia"
};
