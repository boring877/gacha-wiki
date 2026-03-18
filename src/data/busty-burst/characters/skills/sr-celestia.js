// Skills data for Celestia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Protected by \u201cThorns\u201d",
      "icon": "skill001/skill0009",
      "description": "Deals 5240 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds",
      "descriptionLv1": "Deals 779 (ATK x 2.4 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds",
      "descriptionLv90": "Deals 5240 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + 1890",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Blessing to the brave",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 2535 (2535) to the 2 nearest allies",
      "descriptionLv1": "Restores HP by 310 (310) to the 2 nearest allies",
      "descriptionLv90": "Restores HP by 2535 (2535) to the 2 nearest allies",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": "1500% ATK",
      "baseDamage": "+310",
      "levelGrowth": "+25",
      "lvl1": "1500% + 310",
      "lvl90": "1500% + 2535",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_1",
      "description": "Deals 11758 (ATK x 8.0 + 590) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "800% + 590",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_2",
      "description": "Deals 14155 (ATK x 9.6 + 754) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "960% + 754",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_3",
      "description": "Deals 15957 (ATK x 10.8 + 881) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "1080% + 881",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_4",
      "description": "Deals 17184 (ATK x 11.6 + 991) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "1160% + 991",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_5",
      "description": "Deals 18395 (ATK x 12.4 + 1085) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "1240% + 1085",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Paralysis Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Celestia",
  "id": 2038,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Heal",
    "Debuff",
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
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-celestia"
};
