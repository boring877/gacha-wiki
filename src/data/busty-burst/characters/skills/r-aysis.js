// Skills data for Aysis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Edelrant-Style Swordsmanship: Earthstride",
      "icon": "skill001/skill0002",
      "description": "Deals 1906 (ATK x 1.6 + 990) physical damage to the 2 nearest enemies",
      "descriptionLv1": "Deals 282 (ATK x 1.6 + 100) physical damage to the 2 nearest enemies",
      "descriptionLv90": "Deals 1906 (ATK x 1.6 + 990) physical damage to the 2 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "160% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+10",
      "lvl1": "160% + 100",
      "lvl90": "160% + 990",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Pride of the Royal Guards",
      "icon": "skill001/skill0019",
      "description": "Applies 7 seconds of Physical Defense 15%+189UP and 7 seconds of Magic Defense15%+189UP to self",
      "descriptionLv1": "Applies 7 seconds of Physical Defense 15%+100UP and 7 seconds of Magic Defense15%+100UP to self",
      "descriptionLv90": "Applies 7 seconds of Physical Defense 15%+189UP and 7 seconds of Magic Defense15%+189UP to self",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 15,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 15,
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
      "description": "Deals 8064 (ATK x 13.0 + 615) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds",
      "effect": "1300% + 615",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals 9014 (ATK x 14.5 + 706) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds",
      "effect": "1450% + 706",
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
      "description": "Deals 9814 (ATK x 15.7 + 818) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds",
      "effect": "1570% + 818",
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
      "description": "Deals 10634 (ATK x 16.9 + 951) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds",
      "effect": "1690% + 951",
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
      "description": "Deals 11091 (ATK x 17.5 + 1064) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds",
      "effect": "1750% + 1064",
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
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Aysis",
  "id": 2002,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 114,
    "MATK": 68,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "r-aysis"
};
