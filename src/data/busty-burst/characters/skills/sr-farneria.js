// Skills data for Farneria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Blizzard",
      "icon": "skill001/skill0011",
      "description": "Deals 6139 (MATK x 2.7 + 1900) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --4210 per second) for 2 seconds",
      "descriptionLv1": "Deals 967 (MATK x 2.7 + 120) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --650 per second) for 2 seconds",
      "descriptionLv90": "Deals 6139 (MATK x 2.7 + 1900) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --4210 per second) for 2 seconds",
      "target": "Enemy with Highest Physical ATK",
      "castTime": 1.38,
      "damageScaling": "270% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "270% + 120",
      "lvl90": "270% + 1900",
      "effects": [
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 2
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Avalanche",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Physical Defense 25%+348UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Physical Defense 25%+170UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Physical Defense 25%+348UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Physical Defense + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv4",
          "value": 25,
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
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_1",
      "description": "Deals 16643 (MATK x 10.0 + 943) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV1) for 3 seconds and Magic Defense DOWN(LV1) for 12 seconds",
      "effect": "1000% + 943",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_2",
      "description": "Deals 19860 (MATK x 12.0 + 1020) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV2) for 3 seconds and Magic Defense DOWN(LV2) for 9 seconds",
      "effect": "1200% + 1020",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_3",
      "description": "Deals 22277 (MATK x 13.5 + 1082) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV3) for 3 seconds and Magic Defense DOWN(LV3) for 9 seconds",
      "effect": "1350% + 1082",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv3",
          "value": -4000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_4",
      "description": "Deals 23920 (MATK x 14.5 + 1155) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV4) for 3 seconds and Magic Defense DOWN(LV4) for 9 seconds",
      "effect": "1450% + 1155",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv4",
          "value": -4500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_5",
      "description": "Deals 25584 (MATK x 15.5 + 1249) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV5) for 3 seconds and Magic Defense DOWN(LV5) for 9 seconds",
      "effect": "1550% + 1249",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv5",
          "value": -5000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Freeze Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Freeze Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Freeze Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Critical Damage+, Block+",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+118), Block+ (+15)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 118,
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
  "name": "Farneria",
  "id": 2026,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1524,
    "ATK": 188,
    "MATK": 314,
    "DEF": 83,
    "MDEF": 208
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-farneria"
};
