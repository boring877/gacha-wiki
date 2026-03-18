// Skills data for 【Seductive High-Cut Swimsuit】Nerys
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sand Storm",
      "icon": "skill001/skill0008",
      "description": "Deals 2308 (MATK x 1.4 + 614)magic damage to the 3 farthest enemies and inflicts Accuracy -18DOWN for 8 seconds and Physical Critical Damage-11%+-210DOWN for 8 seconds",
      "descriptionLv1": "Deals 418 (MATK x 1.4 + 80)magic damage to the 3 farthest enemies and inflicts Accuracy -9DOWN for 8 seconds and Physical Critical Damage-11%+-30DOWN for 8 seconds",
      "descriptionLv90": "Deals 2308 (MATK x 1.4 + 614)magic damage to the 3 farthest enemies and inflicts Accuracy -18DOWN for 8 seconds and Physical Critical Damage-11%+-210DOWN for 8 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.08,
      "damageScaling": "140% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "140% + 80",
      "lvl90": "140% + 614",
      "effects": [
        "Accuracy - Lv3",
        "Physical Critical Damage- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Sand Vortex",
      "icon": "skill001/skill0008",
      "description": "Deals 2046 (MATK x 1.2 + 594) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-18DOWN for 8 seconds",
      "descriptionLv1": "Deals 350 (MATK x 1.2 + 60) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-9DOWN for 8 seconds",
      "descriptionLv90": "Deals 2046 (MATK x 1.2 + 594) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-18DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "120% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "120% + 60",
      "lvl90": "120% + 594",
      "effects": [
        "Action Speed - Lv3",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_1",
      "description": "Deals 14110 (MATK x 11.0 + 800) magic damage to the nearest enemy and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for8 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_2",
      "description": "Deals 16680 (MATK x 13.0 + 950) magic damage to the nearest enemy and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for8 seconds",
      "effect": "1300% + 950",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_3",
      "description": "Deals 18837 (MATK x 14.7 + 1050) magic damage to the nearest enemy and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for9 seconds",
      "effect": "1470% + 1050",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_4",
      "description": "Deals 19643 (MATK x 15.3 + 1130) magic damage to the nearest enemy and inflicts Dispel for 6 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for9 seconds",
      "effect": "1530% + 1130",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sunshine Shooter",
      "icon": "skill001/skill0012_5",
      "description": "Deals 20439 (MATK x 15.9 + 1200) magic damage to the nearest enemy and inflicts Dispel for 6 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for10 seconds",
      "effect": "1590% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Seductive High-Cut Swimsuit\u3011Nerys",
  "id": 2077,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 145,
    "MATK": 242,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Fast",
    "speedValue": "0.61"
  },
  "slug": "seductive-high-cut-swimsuit-nerys"
};
