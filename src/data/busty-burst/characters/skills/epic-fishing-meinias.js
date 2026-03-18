// Skills data for 【Epic Fishing】Meinias
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Perfect Cast!",
      "icon": "skill001/skill0002",
      "description": "Deals 2257 (ATK x 0.9 + 772) physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 357 (ATK x 0.9 + 60) physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2257 (ATK x 0.9 + 772) physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "90% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+8",
      "lvl1": "90% + 60",
      "lvl90": "90% + 772",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Bullseye!",
      "icon": "skill001/skill0011",
      "description": "Deals 5280 (ATK x 2.3 + 1485) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "descriptionLv1": "Deals 908 (ATK x 2.3 + 150) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "descriptionLv90": "Deals 5280 (ATK x 2.3 + 1485) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "230% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+15",
      "lvl1": "230% + 150",
      "lvl90": "230% + 1485",
      "effects": [
        "Stun",
        "Cleanse"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5250 (ATK x 3.0 + 300) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 seconds",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_2",
      "description": "Deals 6270 (ATK x 3.6 + 330) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 seconds",
      "effect": "360% + 330",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7032 (ATK x 4.05 + 350) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 seconds",
      "effect": "405% + 350",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_4",
      "description": "Deals 7640 (ATK x 4.4 + 380) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 seconds",
      "effect": "440% + 380",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Here comes a Big Shot!",
      "icon": "skill001/skill0003_5",
      "description": "Deals 8155 (ATK x 4.7 + 400) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 seconds",
      "effect": "470% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Epic Fishing\u3011Meinias",
  "id": 2079,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 330,
    "MATK": 198,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.11"
  },
  "slug": "epic-fishing-meinias"
};
