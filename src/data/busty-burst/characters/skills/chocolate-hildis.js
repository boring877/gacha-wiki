// Skills data for 【Chocolate Dragon Warrior】Hildis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Take it, you want it too!",
      "icon": "skill001/skill0010",
      "description": "Deals 330% ATK + 150 magic damage to the nearest enemy and inflicts Magic Defense -23% (-50) for 6 seconds",
      "descriptionLv90": "Deals 330% ATK + 2375 magic damage to the nearest enemy and inflicts Magic Defense -23% (-320) for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": "330% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "330% + 150",
      "lvl90": "330% + 2375",
      "effects": [
        "Magic Defense DOWN"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense DOWN",
          "value": -23,
          "valueLv1": -23,
          "valueLv90": -23,
          "flatBonus": -50,
          "flatBonusLv1": -50,
          "flatBonusLv90": -320,
          "type": "debuff",
          "duration": 6,
          "displayFormat": "% + flat"
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Ugh... is this the way of the strong...?",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Critical Damage +50 to self for 10 seconds and MP Regeneration 40 to self for 4 seconds",
      "target": "Self",
      "castTime": 0.55,
      "effects": [
        "Magic Critical Damage UP",
        "MP Regeneration"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage UP",
          "value": 50,
          "valueLv1": 50,
          "valueLv90": 680,
          "type": "buff",
          "duration": 10
        },
        {
          "name": "MP Regeneration",
          "value": 40,
          "valueLv1": 40,
          "valueLv90": 40,
          "type": "buff",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Shameful Sweet Cannon",
      "icon": "skill001/skill0012_1",
      "description": "Deals 1400% MATK + 700 magic damage to the nearest enemy and inflicts Block -15 and Magic Defense -20% for 10 seconds and Charm for 2 seconds",
      "effect": "1400% + 700",
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": "-15",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Magic Defense DOWN",
          "value": "-20%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": "2s",
          "type": "debuff",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Shameful Sweet Cannon",
      "icon": "skill001/skill0012_2",
      "description": "Deals 1650% MATK + 900 magic damage to the nearest enemy and inflicts Block -18 and Magic Defense -25% for 10 seconds and Charm for 3 seconds",
      "effect": "1650% + 900",
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": "-18",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Magic Defense DOWN",
          "value": "-25%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": "3s",
          "type": "debuff",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Shameful Sweet Cannon",
      "icon": "skill001/skill0012_3",
      "description": "Deals 1950% MATK + 1050 magic damage to the nearest enemy and inflicts Block -21 and Magic Defense -29% for 10 seconds and Charm for 3 seconds",
      "effect": "1950% + 1050",
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": "-21",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Magic Defense DOWN",
          "value": "-29%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": "3s",
          "type": "debuff",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Shameful Sweet Cannon",
      "icon": "skill001/skill0012_4",
      "description": "Deals 2050% MATK + 1200 magic damage to the nearest enemy and inflicts Block -23 and Magic Defense -32% for 10 seconds and Charm for 4 seconds",
      "effect": "2050% + 1200",
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": "-23",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Magic Defense DOWN",
          "value": "-32%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": "4s",
          "type": "debuff",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "Shameful Sweet Cannon",
      "icon": "skill001/skill0012_5",
      "description": "Deals 2100% MATK + 1300 magic damage to the nearest enemy and inflicts Block -25 and Magic Defense -35% for 10 seconds and Charm for 4 seconds",
      "effect": "2100% + 1300",
      "buffEffects": [
        {
          "name": "Block DOWN",
          "value": "-25",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Magic Defense DOWN",
          "value": "-35%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": "4s",
          "type": "debuff",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Self Magic Attack UP, Magic Critical Damage UP",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Magic Critical Damage + (+90)",
      "effects": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage +",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Self Ultimate Damage UP, Max HP UP",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Max HP + (+2896)",
      "effects": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "\u3010Chocolate Dragon Warrior\u3011Hildis",
  "id": 2110,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 134,
    "MATK": 224,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% MATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "chocolate-hildis"
};
