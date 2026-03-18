// Skills data for Ophelio
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Deep Freeze",
      "icon": "skill001/skill0011",
      "description": "Deals 2064 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 1.5 seconds and Accuracy -23DOWN for 9 seconds",
      "descriptionLv1": "Deals 361 (MATK x 0.85 + 70) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 1.5 seconds and Accuracy -11DOWN for 9 seconds",
      "descriptionLv90": "Deals 2064 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 1.5 seconds and Accuracy -23DOWN for 9 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "85% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "85% + 70",
      "lvl90": "85% + 604",
      "effects": [
        "Freeze Lv5",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 1.5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 9
        }
      ],
      "duration": 1.5
    },
    {
      "slot": 3,
      "name": "Earth Grave",
      "icon": "skill001/skill0011",
      "description": "Deals 6790 (MATK x 2.8 + 1980) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-320DOWN for 5 seconds",
      "descriptionLv1": "Deals 1160 (MATK x 2.8 + 200) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-50DOWN for 5 seconds",
      "descriptionLv90": "Deals 6790 (MATK x 2.8 + 1980) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-320DOWN for 5 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "280% + 200",
      "lvl90": "280% + 1980",
      "effects": [
        "Stun",
        "Magic Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv5",
          "value": -23,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 1
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_1",
      "description": "Deals 6656 (MATK x 3.7 + 300) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 9 seconds and BlockDOWN(LV1) for 9 seconds",
      "effect": "370% + 300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 2,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_2",
      "description": "Deals 8646 (MATK x 4.8 + 400) magic damage to all enemies and inflicts Action Speed DOWN(LV2) for 9 seconds and BlockDOWN(LV2) for 9 seconds",
      "effect": "480% + 400",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 3,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_3",
      "description": "Deals 10100 (MATK x 5.6 + 480) magic damage to all enemies and inflicts Action Speed DOWN(LV3) for 9 seconds and BlockDOWN(LV3) for 9 seconds",
      "effect": "560% + 480",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 4,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_4",
      "description": "Deals 10858 (MATK x 6.0 + 550) magic damage to all enemies and inflicts Action Speed DOWN(LV4) for 9 seconds and BlockDOWN(LV4) for 9 seconds",
      "effect": "600% + 550",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 5,
      "name": "Elemental Blast",
      "icon": "skill001/skill0006_5",
      "description": "Deals 11423 (MATK x 6.3 + 600) magic damage to all enemies and inflicts Action Speed DOWN(LV5) for 9 seconds and BlockDOWN(LV5) for 9 seconds",
      "effect": "630% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 9
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
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Action Speed + (+15%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Ophelio",
  "id": 2076,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1670,
    "ATK": 206,
    "MATK": 343,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ophelio"
};
