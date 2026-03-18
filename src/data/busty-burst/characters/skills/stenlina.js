// Skills data for Stenlina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Pillar of Sanctity",
      "icon": "skill001/skill0005",
      "description": "Deals 2640 (MATK x 1.5 + 960) magic damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 406 (MATK x 1.5 + 70) magic damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2640 (MATK x 1.5 + 960) magic damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "150% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+10",
      "lvl1": "150% + 70",
      "lvl90": "150% + 960",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Feather Dance",
      "icon": "skill001/skill0008",
      "description": "Deals 2040 (MATK x 1.3 + 584) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 10 seconds and Magic Attack -9%+-200DOWN for 10 seconds",
      "descriptionLv1": "Deals 341 (MATK x 1.3 + 50) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 10 seconds and Magic Attack -9%+-20DOWN for 10 seconds",
      "descriptionLv90": "Deals 2040 (MATK x 1.3 + 584) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 10 seconds and Magic Attack -9%+-200DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "130% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "130% + 50",
      "lvl90": "130% + 584",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -9,
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
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_1",
      "description": "Deals 5216 (MATK x 4.3 + 400) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV1) for 10 seconds and Magic Critical DamageDOWN(LV1) for 10 seconds",
      "effect": "430% + 400",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_2",
      "description": "Deals 5785 (MATK x 4.8 + 409) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV2) for 10 seconds and Magic Critical DamageDOWN(LV2) for 10 seconds",
      "effect": "480% + 409",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_3",
      "description": "Deals 6501 (MATK x 5.4 + 453) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV3) for 10 seconds and Magic Critical DamageDOWN(LV3) for 10 seconds",
      "effect": "540% + 453",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_4",
      "description": "Deals 6964 (MATK x 5.8 + 468) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV4) for 10 seconds and Magic Critical DamageDOWN(LV4) for 10 seconds",
      "effect": "580% + 468",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Trail that Destroys Evil",
      "icon": "skill001/skill0006_5",
      "description": "Deals 7202 (MATK x 6.0 + 482) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV5) for 10 seconds and Magic Critical DamageDOWN(LV5) for 10 seconds",
      "effect": "600% + 482",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Magic Attack + (+259), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Skill Damage +",
      "icon": "skill001/skill1006",
      "effect": "Block+ (+15), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Stenlina",
  "id": 2061,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 134,
    "MATK": 224,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "stenlina"
};
