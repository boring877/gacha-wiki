// Skills data for 【Playful Mermaid Princess】Lorelia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Turn and\u2014bam!",
      "icon": "skill001/skill0011",
      "description": "Deals 6116 (ATK x 2.8 + 1930) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-26DOWN for 10 seconds",
      "descriptionLv1": "Deals 987 (ATK x 2.8 + 150) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-13DOWN for 10 seconds",
      "descriptionLv90": "Deals 6116 (ATK x 2.8 + 1930) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-26DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "280% + 150",
      "lvl90": "280% + 1930",
      "effects": [
        "Stun",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 2.5
    },
    {
      "slot": 3,
      "name": "Bam-bam!",
      "icon": "skill001/skill0002",
      "description": "Deals 2604 (ATK x 1.1 + 960) physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 398 (ATK x 1.1 + 70) physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2604 (ATK x 1.1 + 960) physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "110% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+10",
      "lvl1": "110% + 70",
      "lvl90": "110% + 960",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_1",
      "description": "Deals 6370 (ATK x 4.0 + 390) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "400% + 390",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_2",
      "description": "Deals 7925 (ATK x 5.0 + 450) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV1) for 10 seconds",
      "effect": "500% + 450",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_3",
      "description": "Deals 8752 (ATK x 5.5 + 530) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV3) for 10 seconds",
      "effect": "550% + 530",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_4",
      "description": "Deals 9679 (ATK x 6.1 + 560) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV4) for 10 seconds",
      "effect": "610% + 560",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_5",
      "description": "Deals 10327 (ATK x 6.5 + 610) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV5) for 10 seconds",
      "effect": "650% + 610",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Debuff Resistance + (+0.3%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Debuff Resistance +",
          "value": 0.3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1005",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
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
  "name": "\u3010Playful Mermaid Princess\u3011Lorelia",
  "id": 2067,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 299,
    "MATK": 179,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "mischievous-mermaid-princess-lorelia"
};
