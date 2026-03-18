// Skills data for Aphrodia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Queen\u2019s Rejection",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage109UP to all allies for 8 seconds",
      "descriptionLv1": "Applies Physical Critical Damage20UP to all allies for 8 seconds",
      "descriptionLv90": "Applies Physical Critical Damage109UP to all allies for 8 seconds",
      "target": "All Allies",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv1",
          "value": 20,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Queen\u2019s Reward",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 10%+109UP to all allies for 8 seconds",
      "descriptionLv1": "Applies Physical Attack 10%+20UP to all allies for 8 seconds",
      "descriptionLv90": "Applies Physical Attack 10%+109UP to all allies for 8 seconds",
      "target": "All Allies",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The Continent\u2019s Shining Treasure",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 309 (309) to all allies and inflicts Hit-Based Shield(LV1) for 10 seconds",
      "effect": "2400% + 309",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "The Continent\u2019s Shining Treasure",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 339 (339) to all allies and inflicts Hit-Based Shield(LV2) for 10 seconds",
      "effect": "2760% + 339",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "The Continent\u2019s Shining Treasure",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 380 (380) to all allies and inflicts Hit-Based Shield(LV3) for 10 seconds",
      "effect": "3000% + 380",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The Continent\u2019s Shining Treasure",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 414 (414) to all allies and inflicts Hit-Based Shield(LV4) for 10 seconds",
      "effect": "3240% + 414",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 45,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "The Continent\u2019s Shining Treasure",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 498 (498) to all allies and inflicts Hit-Based Shield(LV5) for 10 seconds",
      "effect": "3360% + 498",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1001",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Amount +",
      "icon": "skill001/skill1002",
      "effect": "Healing Amount + (+10%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Aphrodia",
  "id": 2007,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal"
  ],
  "baseStats": {
    "HP": 1957,
    "ATK": 275,
    "MATK": 165,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "r-aphrodia"
};
