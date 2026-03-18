// Skills data for Nora
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rock Burst",
      "icon": "skill001/skill0007",
      "description": "Deals 1951 (ATK x 1.05 + 594) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-213DOWN for 11 seconds and Magic Critical Damage-13%+-213DOWN for 11 seconds",
      "descriptionLv1": "Deals 330 (ATK x 1.05 + 60) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-35DOWN for 11 seconds and Magic Critical Damage-13%+-35DOWN for 11 seconds",
      "descriptionLv90": "Deals 1951 (ATK x 1.05 + 594) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-213DOWN for 11 seconds and Magic Critical Damage-13%+-213DOWN for 11 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "105% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "105% + 60",
      "lvl90": "105% + 594",
      "effects": [
        "Physical Critical Damage- Lv4",
        "Magic Critical Damage- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 11
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 11
        }
      ],
      "duration": 11
    },
    {
      "slot": 3,
      "name": "Arm of Growth",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage673UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
      "descriptionLv1": "Applies Physical Critical Damage50UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
      "descriptionLv90": "Applies Physical Critical Damage673UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Healing Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
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
      "name": "Gigant\u2019s Hammer",
      "icon": "skill001/skill0012_1",
      "description": "Deals 6448 (ATK x 4.5 + 630) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "450% + 630",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
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
      "name": "Gigant\u2019s Hammer",
      "icon": "skill001/skill0012_2",
      "description": "Deals 8893 (ATK x 6.3 + 748) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "630% + 748",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "Gigant\u2019s Hammer",
      "icon": "skill001/skill0012_3",
      "description": "Deals 10742 (ATK x 7.65 + 851) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV3) for 10 seconds",
      "effect": "765% + 851",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "Gigant\u2019s Hammer",
      "icon": "skill001/skill0012_4",
      "description": "Deals 12018 (ATK x 8.55 + 963) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV4) for 10 seconds",
      "effect": "855% + 963",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "Gigant\u2019s Hammer",
      "icon": "skill001/skill0012_5",
      "description": "Deals 12713 (ATK x 9.0 + 1076) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV5) for 10 seconds",
      "effect": "900% + 1076",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
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
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Nora",
  "id": 2057,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 258,
    "MATK": 155,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "nora"
};
