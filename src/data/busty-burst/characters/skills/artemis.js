// Skills data for Artemis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Iokaela",
      "icon": "skill001/skill0002",
      "description": "Deals 3927 (ATK x 1.7 + 1435) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals 598 (ATK x 1.7 + 100) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals 3927 (ATK x 1.7 + 1435) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+15",
      "lvl1": "170% + 100",
      "lvl90": "170% + 1435",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Aporosa",
      "icon": "skill001/skill0017",
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
      "name": "The Maiden Goddess\u2019s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9581 (ATK x 6.0 + 785) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV1) for 8 seconds",
      "effect": "600% + 785",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "The Maiden Goddess\u2019s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_2",
      "description": "Deals 10587 (ATK x 6.6 + 912) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV2) for 8 seconds",
      "effect": "660% + 912",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "The Maiden Goddess\u2019s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_3",
      "description": "Deals 11295 (ATK x 7.0 + 1033) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV3) for 8 seconds",
      "effect": "700% + 1033",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "The Maiden Goddess\u2019s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_4",
      "description": "Deals 11985 (ATK x 7.4 + 1137) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV4) for 8 seconds",
      "effect": "740% + 1137",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "The Maiden Goddess\u2019s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_5",
      "description": "Deals 12489 (ATK x 7.7 + 1201) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV5) for 8 seconds",
      "effect": "770% + 1201",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 8
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
      "name": "Action Speed +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10%), Skill Damage + (+10%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Artemis",
  "id": 2029,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 293,
    "MATK": 176,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "artemis"
};
