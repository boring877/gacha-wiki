// Skills data for Paia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poison Mushroom!",
      "icon": "skill001/skill0011",
      "description": "Deals 5617 (ATK x 2.67 + 1890) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 10 seconds",
      "descriptionLv1": "Deals 854 (ATK x 2.67 + 110) physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 10 seconds",
      "descriptionLv90": "Deals 5617 (ATK x 2.67 + 1890) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "267% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "267% + 110",
      "lvl90": "267% + 1890",
      "effects": [
        "Poison Lv5"
      ],
      "buffEffects": [
        {
          "name": "Poison Lv5",
          "value": -200,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Lady Medusa\u2019s Mushroom!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 14UP for 8 seconds",
      "descriptionLv1": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 7UP for 8 seconds",
      "descriptionLv90": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 14UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv1",
        "Accuracy + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv1",
          "value": 0.15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Accuracy + Lv2",
          "value": 7,
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
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 785 (785) to all allies and inflicts BlockUP(LV1) for 11 seconds",
      "effect": "2450% + 785",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 2,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 822 (822) to all allies and inflicts BlockUP(LV2) for 11 seconds",
      "effect": "2818% + 822",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 3,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 923 (923) to all allies and inflicts BlockUP(LV3) for 11 seconds",
      "effect": "3063% + 923",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 4,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 1027 (1027) to all allies and inflicts BlockUP(LV4) for 11 seconds",
      "effect": "3310% + 1027",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 5,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 1091 (1091) to all allies and inflicts BlockUP(LV5) for 11 seconds",
      "effect": "3430% + 1091",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 11
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Poison Resistance LvMax, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Poison Resistance LvMax (+1%), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Poison Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Paia",
  "id": 2022,
  "rarity": "SR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 279,
    "MATK": 167,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-paia"
};
