// Skills data for Artia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Royal Knight\u2019s Teachings",
      "icon": "skill001/skill0019",
      "description": "Restores own HP by 4866 (4866) and inflicts Block33UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
      "descriptionLv1": "Restores own HP by 416 (416) and inflicts Block15UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
      "descriptionLv90": "Restores own HP by 4866 (4866) and inflicts Block33UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": "2500% ATK",
      "baseDamage": "+416",
      "levelGrowth": "+50",
      "lvl1": "2500% + 416",
      "lvl90": "2500% + 4866",
      "effects": [
        "Block+ LvMax",
        "Healing Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ LvMax",
          "value": 15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Beorn Holy Sword Arts: Heroic Strike",
      "icon": "skill001/skill0007",
      "description": "Deals 5814 (ATK x 3.0 + 2325) physical damage to the nearest enemy and inflicts Accuracy -33DOWN for 10 seconds",
      "descriptionLv1": "Deals 796 (ATK x 3.0 + 100) physical damage to the nearest enemy and inflicts Accuracy -15DOWN for 10 seconds",
      "descriptionLv90": "Deals 5814 (ATK x 3.0 + 2325) physical damage to the nearest enemy and inflicts Accuracy -33DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "300% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+25",
      "lvl1": "300% + 100",
      "lvl90": "300% + 2325",
      "effects": [
        "Accuracy - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - LvMax",
          "value": -15,
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
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_1",
      "description": "Deals 3827 (ATK x 3.0 + 338) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV1) to self for 8 seconds and Taunt for 8 seconds",
      "effect": "300% + 338",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_2",
      "description": "Deals 4566 (ATK x 3.6 + 380) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV2) to self for 10 seconds and Taunt for 10 seconds",
      "effect": "360% + 380",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_3",
      "description": "Deals 5135 (ATK x 4.05 + 425) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV3) to self for 11 seconds and Taunt for 11 seconds",
      "effect": "405% + 425",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv3",
          "value": 40,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_4",
      "description": "Deals 5528 (ATK x 4.35 + 469) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV4) to self for 12 seconds and Taunt for 12 seconds",
      "effect": "435% + 469",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv4",
          "value": 45,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_5",
      "description": "Deals 5745 (ATK x 4.5 + 512) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV5) to self for 13 seconds and Taunt for 13 seconds",
      "effect": "450% + 512",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv5",
          "value": 50,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Physical Attack + (+159), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+141), Block+ (+20)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Artia",
  "id": 2048,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2369,
    "ATK": 232,
    "MATK": 139,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "artia"
};
