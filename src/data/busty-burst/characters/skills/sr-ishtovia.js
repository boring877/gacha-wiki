// Skills data for Ishtovia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Receive the punishment of the gods ",
      "icon": "skill001/skill0005",
      "description": "Deals 3926 (MATK x 1.7 + 1257) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals 633 (MATK x 1.7 + 100) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals 3926 (MATK x 1.7 + 1257) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "target": "Enemy with Lowest HP",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+13",
      "lvl1": "170% + 100",
      "lvl90": "170% + 1257",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Divine Love",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 3715 (3715) to the ally with the lowest HP",
      "descriptionLv1": "Restores HP by 600 (600) to the ally with the lowest HP",
      "descriptionLv90": "Restores HP by 3715 (3715) to the ally with the lowest HP",
      "target": "\u6211\u65b9HP\u6700\u4f4e",
      "castTime": 1.38,
      "damageScaling": "2000% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+35",
      "lvl1": "2000% + 600",
      "lvl90": "2000% + 3715",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_1",
      "description": "Deals 13500 (MATK x 8.1 + 783) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV1) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "810% + 783",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_2",
      "description": "Deals 16180 (MATK x 9.72 + 920) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV2) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "972% + 920",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_3",
      "description": "Deals 18135 (MATK x 10.9 + 1022) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV3) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1090% + 1022",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_4",
      "description": "Deals 19562 (MATK x 11.75 + 1115) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV4) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1175% + 1115",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_5",
      "description": "Deals 20912 (MATK x 12.55 + 1209) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV5) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1255% + 1209",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+",
      "icon": "skill001/skill1001",
      "effect": "MP Recovery+ (+21)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 21,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ishtovia",
  "id": 2036,
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2062,
    "ATK": 188,
    "MATK": 314,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-ishtovia"
};
