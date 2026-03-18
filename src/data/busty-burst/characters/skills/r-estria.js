// Skills data for Estria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Torlild Schuthein",
      "icon": "skill001/skill0007",
      "description": "Deals 3485 (ATK x 1.8 + 1158) physical damage to the nearest enemy and inflicts Physical Attack -7%+-104DOWN for 8 seconds and Magic Attack -7%+-104DOWN for 8 seconds",
      "descriptionLv1": "Deals 554 (ATK x 1.8 + 90) physical damage to the nearest enemy and inflicts Physical Attack -7%+-15DOWN for 8 seconds and Magic Attack -7%+-15DOWN for 8 seconds",
      "descriptionLv90": "Deals 3485 (ATK x 1.8 + 1158) physical damage to the nearest enemy and inflicts Physical Attack -7%+-104DOWN for 8 seconds and Magic Attack -7%+-104DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "180% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+12",
      "lvl1": "180% + 90",
      "lvl90": "180% + 1158",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -7,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -7,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Will of the Queen of Nordrant",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 10 seconds and Physical Defense 20%+318UP for 10 seconds",
      "descriptionLv1": "Applies Taunt to self for 10 seconds and Physical Defense 20%+140UP for 10 seconds",
      "descriptionLv90": "Applies Taunt to self for 10 seconds and Physical Defense 20%+318UP for 10 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Defense + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv3",
          "value": 20,
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
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9578 (ATK x 7.0 + 527) physical damage to the nearest enemy and applies HP RegenerationUP(LV1) to self for 3 seconds",
      "effect": "700% + 527",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_2",
      "description": "Deals 11570 (ATK x 8.4 + 709) physical damage to the nearest enemy and applies HP RegenerationUP(LV2) to self for 3 seconds",
      "effect": "840% + 709",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_3",
      "description": "Deals 13135 (ATK x 9.55 + 787) physical damage to the nearest enemy and applies HP RegenerationUP(LV3) to self for 3 seconds",
      "effect": "955% + 787",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_4",
      "description": "Deals 14116 (ATK x 10.25 + 863) physical damage to the nearest enemy and applies HP RegenerationUP(LV4) to self for 3 seconds",
      "effect": "1025% + 863",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_5",
      "description": "Deals 15162 (ATK x 11.0 + 939) physical damage to the nearest enemy and applies HP RegenerationUP(LV5) to self for 3 seconds",
      "effect": "1100% + 939",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Estria",
  "id": 2012,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 258,
    "MATK": 155,
    "DEF": 317,
    "MDEF": 126
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "r-estria"
};
