// Skills data for Estiriel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sylvesto",
      "icon": "skill001/skill0008",
      "description": "Deals 6797 (MATK x 3.2 + 2375) magic damage to the farthest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds and Magic Defense-18%+-210DOWN for 5 seconds",
      "descriptionLv1": "Deals 1033 (MATK x 3.2 + 150) magic damage to the farthest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds and Magic Defense-18%+-30DOWN for 5 seconds",
      "descriptionLv90": "Deals 6797 (MATK x 3.2 + 2375) magic damage to the farthest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds and Magic Defense-18%+-210DOWN for 5 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.38,
      "damageScaling": "320% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "320% + 150",
      "lvl90": "320% + 2375",
      "effects": [
        "Physical Defense - Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -18,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Guardian of the Little Dwarves",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration3%+495 to all allies for 10 seconds and Block14UP for 10 seconds",
      "descriptionLv1": "Applies HP Regeneration3%+50 to all allies for 10 seconds and Block7UP for 10 seconds",
      "descriptionLv90": "Applies HP Regeneration3%+495 to all allies for 10 seconds and Block14UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv1",
        "Block+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv1",
          "value": 3,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Lv2",
          "value": 7,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_1",
      "description": "Deals 8301 (MATK x 5.5 + 700) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV1) for 10 seconds",
      "effect": "550% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_2",
      "description": "Deals 10865 (MATK x 7.5 + 500) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV2) for 10 seconds",
      "effect": "750% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_3",
      "description": "Deals 12988 (MATK x 9.0 + 550) magic damage to all enemies and inflicts Action Speed DOWN(LV3) for 10 seconds and BlockDOWN(LV3) for 10 seconds",
      "effect": "900% + 550",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_4",
      "description": "Deals 14420 (MATK x 10.0 + 600) magic damage to all enemies and inflicts Action Speed DOWN(LV4) for 10 seconds and BlockDOWN(LV4) for 10 seconds",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "O spirits, dance Become the guiding wisdom of all things ",
      "icon": "skill001/skill0006_5",
      "description": "Deals 15882 (MATK x 11.0 + 680) magic damage to all enemies and inflicts Action Speed DOWN(LV5) for 10 seconds and BlockDOWN(LV5) for 10 seconds",
      "effect": "1100% + 680",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1006",
      "effect": "Magic Attack + (+259), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
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
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Healing Received + (+20%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Estiriel",
  "id": 2053,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 166,
    "MATK": 276,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "estiriel"
};
