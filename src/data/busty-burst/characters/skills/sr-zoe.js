// Skills data for Zoe
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Dark vortex!",
      "icon": "skill001/skill0008",
      "description": "Deals 2263 (MATK x 1.15 + 703) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 10 seconds and Magic Attack -9%+-200DOWN for 10 seconds",
      "descriptionLv1": "Deals 391 (MATK x 1.15 + 80) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 10 seconds and Magic Attack -9%+-20DOWN for 10 seconds",
      "descriptionLv90": "Deals 2263 (MATK x 1.15 + 703) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 10 seconds and Magic Attack -9%+-200DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "115% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+7",
      "lvl1": "115% + 80",
      "lvl90": "115% + 703",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Grant me an unbreakable soul!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block18UP for 12 seconds",
      "descriptionLv1": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block9UP for 12 seconds",
      "descriptionLv90": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block18UP for 12 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv4",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv4",
          "value": 0.7,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
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
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_1",
      "description": "Deals 10325 (MATK x 7.0 + 826) magic damage to the nearest enemy and inflicts Fear Lv1 for 3 seconds and Confusion for 6 seconds",
      "effect": "700% + 826",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_2",
      "description": "Deals 12350 (MATK x 8.4 + 952) magic damage to the nearest enemy and inflicts Fear Lv2 for 3 seconds and Confusion for 6 seconds",
      "effect": "840% + 952",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_3",
      "description": "Deals 13868 (MATK x 9.45 + 1045) magic damage to the nearest enemy and inflicts Fear Lv3 for 3 seconds and Confusion for 6 seconds",
      "effect": "945% + 1045",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv3",
          "value": -30,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_4",
      "description": "Deals 14894 (MATK x 10.15 + 1121) magic damage to the nearest enemy and inflicts Fear Lv4 for 3 seconds and Confusion for 6 seconds",
      "effect": "1015% + 1121",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv4",
          "value": -35,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Fall into Tartarus!",
      "icon": "skill001/skill0012_5",
      "description": "Deals 15960 (MATK x 10.85 + 1237) magic damage to the nearest enemy and inflicts Fear Lv5 for 3 seconds and Confusion for 6 seconds",
      "effect": "1085% + 1237",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv5",
          "value": -40,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Confusion",
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
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
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
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Block+ (+15)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Zoe",
  "id": 2024,
  "rarity": "SR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 4210,
    "ATK": 163,
    "MATK": 271,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "sr-zoe"
};
