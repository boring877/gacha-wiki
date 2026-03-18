// Skills data for 【Graceful Portrait】Aysis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Edelrant-Style Swordsmanship: Earthstride",
      "icon": "skill001/skill0002",
      "description": "Deals 2577 (ATK x 1.7 + 1455) physical damage to the 2 nearest enemies",
      "descriptionLv1": "Deals 344 (ATK x 1.7 + 120) physical damage to the 2 nearest enemies",
      "descriptionLv90": "Deals 2577 (ATK x 1.7 + 1455) physical damage to the 2 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "170% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+15",
      "lvl1": "170% + 120",
      "lvl90": "170% + 1455",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Pride of the Royal Guards",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 20%+318UP to self for 7 seconds and Magic Defense20%+318UP for 7 seconds",
      "descriptionLv1": "Applies Physical Defense 20%+140UP to self for 7 seconds and Magic Defense20%+140UP for 7 seconds",
      "descriptionLv90": "Applies Physical Defense 20%+318UP to self for 7 seconds and Magic Defense20%+318UP for 7 seconds",
      "target": "Self",
      "castTime": 0.88,
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
          "duration": 7
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 20,
          "type": "percent",
          "duration": 7
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9080 (ATK x 13.0 + 500) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds",
      "effect": "1300% + 500",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals 10500 (ATK x 15.0 + 600) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_3",
      "description": "Deals 11900 (ATK x 17.0 + 680) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds",
      "effect": "1700% + 680",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_4",
      "description": "Deals 12630 (ATK x 18.0 + 750) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds",
      "effect": "1800% + 750",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_5",
      "description": "Deals 13340 (ATK x 19.0 + 800) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds",
      "effect": "1900% + 800",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
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
      "effect": "Physical Defense + (+211)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Graceful Portrait\u3011Aysis",
  "id": 2066,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2660,
    "ATK": 132,
    "MATK": 79,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "elegant-portrait-aysis"
};
