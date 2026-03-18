// Skills data for 【Warrior of Love and Chocolate】Shaty
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Want to do adult things together?",
      "icon": "skill001/skill0002",
      "description": "Deals 100% ATK + 50 physical damage to the 3 nearest enemies and applies Mind Type ATK +15% to self for 6 seconds",
      "descriptionLv90": "Deals 100% ATK + 584 physical damage to the 3 nearest enemies and applies Mind Type ATK +15% to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": "100% + 584",
      "effects": [
        "Mind Type ATK UP"
      ],
      "buffEffects": [
        {
          "name": "Mind Type ATK UP",
          "value": 15,
          "valueLv1": 15,
          "valueLv90": 15,
          "type": "buff",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Do you want it too?",
      "icon": "skill001/skill0011",
      "description": "Inflicts Block -9 on the 3 nearest enemies for 8 seconds",
      "descriptionLv90": "Inflicts Block -18 on the 3 nearest enemies for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "effects": [
        "Block DOWN"
      ],
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": -9,
          "valueLv1": -9,
          "valueLv90": -18,
          "type": "debuff",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Captivating Trick Shot",
      "icon": "skill001/skill0003_1",
      "description": "Deals 400% ATK + 600 physical damage to the nearest enemy. Before Ultimate: Applies Hit-Based Damage +70 (2 hits) and Mind Type ATK +15% to self for 6 seconds",
      "effect": "400% + 600",
      "buffEffects": [
        {
          "name": "Hit-Based Damage UP",
          "value": "+70",
          "hits": 2,
          "type": "buff",
          "duration": 6
        },
        {
          "name": "Mind Type ATK UP",
          "value": "+15%",
          "type": "buff",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Captivating Trick Shot",
      "icon": "skill001/skill0003_2",
      "description": "Deals 450% ATK + 900 physical damage to the nearest enemy. Before Ultimate: Applies Hit-Based Damage +90 (3 hits) and Mind Type ATK +20% to self for 6 seconds",
      "effect": "450% + 900",
      "buffEffects": [
        {
          "name": "Hit-Based Damage UP",
          "value": "+90",
          "hits": 3,
          "type": "buff",
          "duration": 6
        },
        {
          "name": "Mind Type ATK UP",
          "value": "+20%",
          "type": "buff",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Captivating Trick Shot",
      "icon": "skill001/skill0003_3",
      "description": "Deals 480% ATK + 1100 physical damage to the nearest enemy. Before Ultimate: Applies Hit-Based Damage +110 (3 hits) and Mind Type ATK +24% to self for 6 seconds",
      "effect": "480% + 1100",
      "buffEffects": [
        {
          "name": "Hit-Based Damage UP",
          "value": "+110",
          "hits": 3,
          "type": "buff",
          "duration": 6
        },
        {
          "name": "Mind Type ATK UP",
          "value": "+24%",
          "type": "buff",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Captivating Trick Shot",
      "icon": "skill001/skill0003_4",
      "description": "Deals 510% ATK + 1300 physical damage to the nearest enemy. Before Ultimate: Applies Hit-Based Damage +120 (4 hits) and Mind Type ATK +27% to self for 6 seconds",
      "effect": "510% + 1300",
      "buffEffects": [
        {
          "name": "Hit-Based Damage UP",
          "value": "+120",
          "hits": 4,
          "type": "buff",
          "duration": 6
        },
        {
          "name": "Mind Type ATK UP",
          "value": "+27%",
          "type": "buff",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Captivating Trick Shot",
      "icon": "skill001/skill0003_5",
      "description": "Deals 535% ATK + 1500 physical damage to the nearest enemy. Before Ultimate: Applies Hit-Based Damage +130 (4 hits) and Mind Type ATK +30% to self for 6 seconds",
      "effect": "535% + 1500",
      "buffEffects": [
        {
          "name": "Hit-Based Damage UP",
          "value": "+130",
          "hits": 4,
          "type": "buff",
          "duration": 6
        },
        {
          "name": "Mind Type ATK UP",
          "value": "+30%",
          "type": "buff",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Self Physical Attack UP",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effects": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Self Ultimate Damage UP, Accuracy UP",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Accuracy + (+15)",
      "effects": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
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
  "name": "\u3010Warrior of Love and Chocolate\u3011Shaty",
  "id": 2111,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1793,
    "ATK": 392,
    "MATK": 235,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "chocolate-shaty"
};
