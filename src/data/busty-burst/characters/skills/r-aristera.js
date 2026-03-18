// Skills data for Aristera
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I want to make you feel even better ",
      "icon": "skill001/skill0005",
      "description": "Deals 4717 (MATK x 2.7 + 1880) magic damage to the enemy with the highest Magical ATK",
      "descriptionLv1": "Deals 667 (MATK x 2.7 + 100) magic damage to the enemy with the highest Magical ATK",
      "descriptionLv90": "Deals 4717 (MATK x 2.7 + 1880) magic damage to the enemy with the highest Magical ATK",
      "target": "Enemy with Highest Magic ATK",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "270% + 100",
      "lvl90": "270% + 1880",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "As you like it\u266a",
      "icon": "skill001/skill0011",
      "description": "Deals 3784 (MATK x 2.16 + 1514) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "descriptionLv1": "Deals 543 (MATK x 2.16 + 90) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "descriptionLv90": "Deals 3784 (MATK x 2.16 + 1514) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
      "target": "Enemy with Highest Magic ATK",
      "castTime": 1.08,
      "damageScaling": "216% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "216% + 90",
      "lvl90": "216% + 1514",
      "effects": [
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Seductive Bounce\u266a",
      "icon": "skill001/skill0006_1",
      "description": "Deals 11588 (MATK x 10.35 + 711) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1035% + 711",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Seductive Bounce\u266a",
      "icon": "skill001/skill0006_2",
      "description": "Deals 13855 (MATK x 12.42 + 802) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1242% + 802",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Seductive Bounce\u266a",
      "icon": "skill001/skill0006_3",
      "description": "Deals 15606 (MATK x 14.0 + 892) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1400% + 892",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "Seductive Bounce\u266a",
      "icon": "skill001/skill0006_4",
      "description": "Deals 16738 (MATK x 15.02 + 952) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1502% + 952",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Seductive Bounce\u266a",
      "icon": "skill001/skill0006_5",
      "description": "Deals 17900 (MATK x 16.05 + 1032) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
      "effect": "1605% + 1032",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Aristera",
  "id": 2010,
  "rarity": "R",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1452,
    "ATK": 126,
    "MATK": 210,
    "DEF": 79,
    "MDEF": 199
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "r-aristera"
};
