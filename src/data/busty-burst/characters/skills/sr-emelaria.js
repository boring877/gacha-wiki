// Skills data for Emelaria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Looks like your luck isn\u2019t so good ",
      "icon": "skill001/skill0011",
      "description": "Deals 4226 (MATK x 1.8 + 1890) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "descriptionLv1": "Deals 576 (MATK x 1.8 + 110) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "descriptionLv90": "Deals 4226 (MATK x 1.8 + 1890) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "180% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "180% + 110",
      "lvl90": "180% + 1890",
      "effects": [
        "Confusion"
      ],
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Seems you need a little punishment ",
      "icon": "skill001/skill0011",
      "description": "Deals 3847 (MATK x 1.5 + 1900) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "descriptionLv1": "Deals 508 (MATK x 1.5 + 120) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "descriptionLv90": "Deals 3847 (MATK x 1.5 + 1900) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.58,
      "damageScaling": "150% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "150% + 120",
      "lvl90": "150% + 1900",
      "effects": [
        "Sleep"
      ],
      "buffEffects": [
        {
          "name": "Sleep",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_1",
      "description": "Deals 5618 (MATK x 4.1 + 297) magic damage to all enemies and inflicts Fear Lv1 for 4 seconds",
      "effect": "410% + 297",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_2",
      "description": "Deals 7815 (MATK x 5.74 + 365) magic damage to all enemies and inflicts Fear Lv2 for 4 seconds",
      "effect": "574% + 365",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_3",
      "description": "Deals 9540 (MATK x 6.97 + 493) magic damage to all enemies and inflicts Fear Lv3 for 4 seconds",
      "effect": "697% + 493",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv3",
          "value": -30,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_4",
      "description": "Deals 10643 (MATK x 7.79 + 532) magic damage to all enemies and inflicts Fear Lv4 for 4 seconds",
      "effect": "779% + 532",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv4",
          "value": -35,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_5",
      "description": "Deals 11245 (MATK x 8.2 + 602) magic damage to all enemies and inflicts Fear Lv5 for 4 seconds",
      "effect": "820% + 602",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv5",
          "value": -40,
          "type": "flat",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Magic Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Emelaria",
  "id": 2006,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 156,
    "MATK": 259,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-emelaria"
};
