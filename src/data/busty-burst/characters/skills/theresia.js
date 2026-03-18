// Skills data for Teresia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Lightning Blade Strike",
      "icon": "skill001/skill0011",
      "description": "Deals 7265 (MATK x 3.1 + 1940) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-220DOWN for 8 seconds",
      "descriptionLv1": "Deals 1223 (MATK x 3.1 + 160) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-40DOWN for 8 seconds",
      "descriptionLv90": "Deals 7265 (MATK x 3.1 + 1940) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-220DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "310% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "310% + 160",
      "lvl90": "310% + 1940",
      "effects": [
        "Stun",
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1.5
        },
        {
          "name": "Magic Defense- Lv4",
          "value": -21,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 1.5
    },
    {
      "slot": 3,
      "name": "Winged Lightning",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Magic Critical Damage673UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Magic Critical Damage50UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Magic Critical Damage673UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Magic Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_1",
      "description": "Deals 18065 (MATK x 10.0 + 885) magic damage to the nearest enemy and applies Mind Type ATK UP(LV1) to self for 8 seconds",
      "effect": "1000% + 885",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_2",
      "description": "Deals 21638 (MATK x 12.0 + 1022) magic damage to the nearest enemy and applies Mind Type ATK UP(LV2) to self for 8 seconds",
      "effect": "1200% + 1022",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_3",
      "description": "Deals 24346 (MATK x 13.5 + 1153) magic damage to the nearest enemy and applies Mind Type ATK UP(LV3) to self for 9 seconds",
      "effect": "1350% + 1153",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_4",
      "description": "Deals 26218 (MATK x 14.5 + 1307) magic damage to the nearest enemy and applies Mind Type ATK UP(LV4) to self for 9 seconds",
      "effect": "1450% + 1307",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Storm Claw",
      "icon": "skill001/skill0006_5",
      "description": "Deals 27231 (MATK x 15.0 + 1461) magic damage to the nearest enemy and applies Mind Type ATK UP(LV5) to self for 10 seconds",
      "effect": "1500% + 1461",
      "buffEffects": [
        {
          "name": "Mind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+10%), Block+ (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Mind Type ATK +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Mind Type ATK + (+10%), Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Teresia",
  "id": 2046,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 206,
    "MATK": 343,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "theresia"
};
