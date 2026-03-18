// Skills data for Sobrina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "This is an order from your superior ",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 6174 (6174) to the ally with the lowest HP and inflicts Block18UP for 8 seconds",
      "descriptionLv1": "Restores HP by 834 (834) to the ally with the lowest HP and inflicts Block9UP for 8 seconds",
      "descriptionLv90": "Restores HP by 6174 (6174) to the ally with the lowest HP and inflicts Block18UP for 8 seconds",
      "target": "\u6211\u65b9HP\u6700\u4f4e",
      "castTime": 1.58,
      "damageScaling": "3300% ATK",
      "baseDamage": "+834",
      "levelGrowth": "+60",
      "lvl1": "3300% + 834",
      "lvl90": "3300% + 6174",
      "effects": [
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Lacking self-awareness ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 20%+318UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+318UP for 8 seconds",
      "descriptionLv1": "Applies Physical Defense 20%+140UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+140UP for 8 seconds",
      "descriptionLv90": "Applies Physical Defense 20%+318UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+318UP for 8 seconds",
      "target": "\u6211\u65b9HP\u6700\u4f4e",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 20,
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
      "name": "It\u2019s break time now ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 698 (698) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "2300% + 698",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "It\u2019s break time now ",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 752 (752) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "2645% + 752",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "It\u2019s break time now ",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 810 (810) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "2875% + 810",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "It\u2019s break time now ",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 862 (862) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3105% + 862",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "It\u2019s break time now ",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 908 (908) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3220% + 908",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
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
  "name": "Sobrina",
  "id": 2020,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 167,
    "MATK": 279,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-sobrina"
};
