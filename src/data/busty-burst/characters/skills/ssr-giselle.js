// Skills data for Giselle
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Piercing Strike",
      "icon": "skill001/skill0009",
      "description": "Deals 2940 (ATK x 1.0 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-220DOWN for 8 seconds",
      "descriptionLv1": "Deals 509 (ATK x 1.0 + 80) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-40DOWN for 8 seconds",
      "descriptionLv90": "Deals 2940 (ATK x 1.0 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-220DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "100% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "100% + 80",
      "lvl90": "100% + 792",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -21,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Knight\u2019s Pride",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage673UP to self for 10 seconds and inflicts Accuracy -18DOWN on all enemies for 10 seconds",
      "descriptionLv1": "Applies Physical Critical Damage50UP to self for 10 seconds and inflicts Accuracy -9DOWN on all enemies for 10 seconds",
      "descriptionLv90": "Applies Physical Critical Damage673UP to self for 10 seconds and inflicts Accuracy -18DOWN on all enemies for 10 seconds",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_1",
      "description": "Deals 6314 (ATK x 2.8 + 300) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV1) for 8 seconds and applies Physical Attack UP(LV1) to self for 8 seconds",
      "effect": "280% + 300",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_2",
      "description": "Deals 7273 (ATK x 3.2 + 400) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV2) for 8 seconds and applies Physical Attack UP(LV2) to self for 8 seconds",
      "effect": "320% + 400",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7968 (ATK x 3.5 + 450) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV3) for 8 seconds and applies Physical Attack UP(LV3) to self for 8 seconds",
      "effect": "350% + 450",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_4",
      "description": "Deals 8662 (ATK x 3.8 + 500) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV4) for 8 seconds and applies Physical Attack UP(LV4) to self for 8 seconds",
      "effect": "380% + 500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_5",
      "description": "Deals 9142 (ATK x 4.0 + 550) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV5) for 8 seconds and applies Physical Attack UP(LV5) to self for 8 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Giselle",
  "id": 2088,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1200,
    "ATK": 429,
    "MATK": 257,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-giselle"
};
