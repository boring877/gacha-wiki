// Skills data for Luca
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Goddess, grant me strength!",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack 18%+658UP to self for 10 seconds and Physical Critical Damage673UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 10 seconds and Physical Critical Damage50UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 10 seconds and Physical Critical Damage673UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Physical Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Do as you please, roa!",
      "icon": "skill001/skill0007",
      "description": "Deals 6384 (ATK x 3.6 + 2385) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-406DOWN for 7 seconds",
      "descriptionLv1": "Deals 959 (ATK x 3.6 + 160) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-50DOWN for 7 seconds",
      "descriptionLv90": "Deals 6384 (ATK x 3.6 + 2385) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-406DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "360% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+25",
      "lvl1": "360% + 160",
      "lvl90": "360% + 2385",
      "effects": [
        "Physical Critical Damage- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage- LvMax",
          "value": -20,
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
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5399 (ATK x 4.5 + 400) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV1) for 10 seconds and Accuracy DOWN(LV1) for 10 seconds",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_2",
      "description": "Deals 6469 (ATK x 5.4 + 470) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV2) for 10 seconds and Accuracy DOWN(LV2) for 10 seconds",
      "effect": "540% + 470",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -8,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7261 (ATK x 6.05 + 540) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV3) for 10 seconds and Accuracy DOWN(LV3) for 10 seconds",
      "effect": "605% + 540",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_4",
      "description": "Deals 7932 (ATK x 6.6 + 600) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV4) for 10 seconds and Accuracy DOWN(LV4) for 10 seconds",
      "effect": "660% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -12,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_5",
      "description": "Deals 8427 (ATK x 7.0 + 650) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV5) for 10 seconds and Accuracy DOWN(LV5) for 10 seconds",
      "effect": "700% + 650",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -14,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+179)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 179,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20%), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Luca",
  "id": 2055,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 222,
    "MATK": 133,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "luca"
};
