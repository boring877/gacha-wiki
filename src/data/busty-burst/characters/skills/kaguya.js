// Skills data for Kaguya
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poison Princess\u2019s Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals 6180 (MATK x 2.5 + 1930) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-26DOWN for 8 seconds",
      "descriptionLv1": "Deals 1000 (MATK x 2.5 + 150) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-13DOWN for 8 seconds",
      "descriptionLv90": "Deals 6180 (MATK x 2.5 + 1930) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-26DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "250% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "250% + 150",
      "lvl90": "250% + 1930",
      "effects": [
        "Poison LvMax",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Poison LvMax",
          "value": -300,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Calamity of Serpent Venom",
      "icon": "skill001/skill0011",
      "description": "Deals 2049 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -23DOWN for 8 seconds",
      "descriptionLv1": "Deals 359 (MATK x 0.85 + 70) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -11DOWN for 8 seconds",
      "descriptionLv90": "Deals 2049 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -23DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "85% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "85% + 70",
      "lvl90": "85% + 604",
      "effects": [
        "Curse",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_1",
      "description": "Deals 8000 (MATK x 4.5 + 350) magic damage to all enemies and inflicts Confusion for 5 seconds and Fear Lv1 for 3 seconds",
      "effect": "450% + 350",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": -30,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_2",
      "description": "Deals 9800 (MATK x 5.5 + 450) magic damage to all enemies and inflicts Confusion for 6 seconds and Fear Lv2 for 3 seconds",
      "effect": "550% + 450",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_3",
      "description": "Deals 11210 (MATK x 6.3 + 500) magic damage to all enemies and inflicts Confusion for 6 seconds and Fear Lv3 for 3 seconds",
      "effect": "630% + 500",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv3",
          "value": -30,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_4",
      "description": "Deals 12450 (MATK x 7.0 + 550) magic damage to all enemies and inflicts Confusion for 7 seconds and Fear Lv4 for 3 seconds",
      "effect": "700% + 550",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv4",
          "value": -35,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Endless Wailing Black Lotus",
      "icon": "skill001/skill0012_5",
      "description": "Deals 13350 (MATK x 7.5 + 600) magic damage to all enemies and inflicts Confusion for 8 seconds and Fear Lv5 for 3 seconds",
      "effect": "750% + 600",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fear Ultimate Lv5",
          "value": -40,
          "type": "flat",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Kaguya",
  "id": 2071,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2578,
    "ATK": 204,
    "MATK": 340,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "kaguya"
};
