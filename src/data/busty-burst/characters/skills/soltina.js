// Skills data for Soltina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shikomaru",
      "icon": "skill001/skill0011",
      "description": "Deals 6837 (ATK x 3.5 + 1920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "descriptionLv1": "Deals 1123 (ATK x 3.5 + 140) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "descriptionLv90": "Deals 6837 (ATK x 3.5 + 1920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+140",
      "levelGrowth": "+20",
      "lvl1": "350% + 140",
      "lvl90": "350% + 1920",
      "effects": [
        "Paralysis",
        "Silence"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Millionfold",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 30%+457UP to self for 10 seconds and Block26UP for 10 seconds",
      "descriptionLv1": "Applies Physical Defense 30%+190UP to self for 10 seconds and Block13UP for 10 seconds",
      "descriptionLv90": "Applies Physical Defense 30%+457UP to self for 10 seconds and Block26UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv5",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
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
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5396 (ATK x 3.6 + 338) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "360% + 338",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_2",
      "description": "Deals 6280 (ATK x 4.2 + 379) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 seconds and Action Speed DOWN(LV2) for 10 seconds",
      "effect": "420% + 379",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
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
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7024 (ATK x 4.7 + 421) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 seconds and Action Speed DOWN(LV3) for 10 seconds",
      "effect": "470% + 421",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
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
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_4",
      "description": "Deals 7630 (ATK x 5.1 + 465) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 seconds and Action Speed DOWN(LV4) for 10 seconds",
      "effect": "510% + 465",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
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
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_5",
      "description": "Deals 8228 (ATK x 5.5 + 501) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 seconds and Action Speed DOWN(LV5) for 10 seconds",
      "effect": "550% + 501",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
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
      "name": "Physical Attack +, Physical Defense +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Physical Defense + (+211)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Block+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176), Block+ (+15)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
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
  "name": "Soltina",
  "id": 2047,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1200,
    "ATK": 281,
    "MATK": 168,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "soltina"
};
