// Skills data for Destra
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Just a little\u2026",
      "icon": "skill001/skill0002",
      "description": "Deals 4413 (ATK x 2.4 + 1514) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv1": "Deals 668 (ATK x 2.4 + 90) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv90": "Deals 4413 (ATK x 2.4 + 1514) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "240% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "240% + 90",
      "lvl90": "240% + 1514",
      "effects": [
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Please come with me\uff5e\u266a",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by 5400 (5400)",
      "descriptionLv1": "Restores own HP by 950 (950)",
      "descriptionLv90": "Restores own HP by 5400 (5400)",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": "2500% ATK",
      "baseDamage": "+950",
      "levelGrowth": "+50",
      "lvl1": "2500% + 950",
      "lvl90": "2500% + 5400",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Now, let us head to Hades's realm\u266a",
      "icon": "skill001/skill0003_1",
      "description": "Deals 2961 (ATK x 2.2 + 304) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV1) for 10 seconds",
      "effect": "220% + 304",
      "buffEffects": [
        {
          "name": "Magic Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Now, let us head to Hades's realm\u266a",
      "icon": "skill001/skill0003_2",
      "description": "Deals 3731 (ATK x 2.75 + 409) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV2) for 10 seconds",
      "effect": "275% + 409",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Now, let us head to Hades's realm\u266a",
      "icon": "skill001/skill0003_3",
      "description": "Deals 4318 (ATK x 3.2 + 453) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV3) for 10 seconds",
      "effect": "320% + 453",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Now, let us head to Hades's realm\u266a",
      "icon": "skill001/skill0003_4",
      "description": "Deals 4740 (ATK x 3.52 + 488) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV4) for 10 seconds",
      "effect": "352% + 488",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Now, let us head to Hades's realm\u266a",
      "icon": "skill001/skill0003_5",
      "description": "Deals 5029 (ATK x 3.74 + 512) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV5) for 10 seconds",
      "effect": "374% + 512",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
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
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Destra",
  "id": 2027,
  "rarity": "R",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 4010,
    "ATK": 241,
    "MATK": 145,
    "DEF": 9,
    "MDEF": 3
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "r-destra"
};
