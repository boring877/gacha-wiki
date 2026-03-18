// Skills data for Guinevia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Anger",
      "icon": "skill001/skill0002",
      "description": "Deals 6118 (ATK x 2.4 + 2350) physical damage to the nearest enemy",
      "descriptionLv1": "Deals 878 (ATK x 2.4 + 125) physical damage to the nearest enemy",
      "descriptionLv90": "Deals 6118 (ATK x 2.4 + 2350) physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+125",
      "levelGrowth": "+25",
      "lvl1": "240% + 125",
      "lvl90": "240% + 2350",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Silence",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_1",
      "description": "Deals 13417 (ATK x 8.0 + 857) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV1) for 10 seconds",
      "effect": "800% + 857",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_2",
      "description": "Deals 15914 (ATK x 9.6 + 842) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV2) for 10 seconds",
      "effect": "960% + 842",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_3",
      "description": "Deals 17889 (ATK x 10.8 + 933) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV3) for 10 seconds",
      "effect": "1080% + 933",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_4",
      "description": "Deals 19239 (ATK x 11.6 + 1027) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV4) for 10 seconds",
      "effect": "1160% + 1027",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_5",
      "description": "Deals 20559 (ATK x 12.4 + 1091) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV5) for 10 seconds",
      "effect": "1240% + 1091",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Action Speed +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10%), Physical Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Guinevia",
  "id": 2039,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 314,
    "MATK": 188,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-guinevia"
};
