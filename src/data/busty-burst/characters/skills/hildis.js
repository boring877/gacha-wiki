// Skills data for Hildis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thunderfire",
      "icon": "skill001/skill0009",
      "description": "Deals 5262 (ATK x 3.5 + 1930) physical damage to the nearest enemy and inflicts Physical Defense -23%+-320DOWN for 5 seconds and Burn(HP --1485 per second) for 12 seconds",
      "descriptionLv1": "Deals 815 (ATK x 3.5 + 150) physical damage to the nearest enemy and inflicts Physical Defense -23%+-50DOWN for 5 seconds and Burn(HP --150 per second) for 12 seconds",
      "descriptionLv90": "Deals 5262 (ATK x 3.5 + 1930) physical damage to the nearest enemy and inflicts Physical Defense -23%+-320DOWN for 5 seconds and Burn(HP --1485 per second) for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "350% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "350% + 150",
      "lvl90": "350% + 1930",
      "effects": [
        "Physical Defense - Lv5",
        "Burn Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -23,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Armor-Sleeve Touch",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 15%+475UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 15%+30UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 15%+475UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
      "target": "Self",
      "castTime": 0.66,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
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
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_1",
      "description": "Deals 4388 (ATK x 4.2 + 390) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 8 seconds and BlockDOWN(LV1) for 8 seconds",
      "effect": "420% + 390",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_2",
      "description": "Deals 5257 (ATK x 5.05 + 450) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 8 seconds and BlockDOWN(LV2) for 8 seconds",
      "effect": "505% + 450",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_3",
      "description": "Deals 5941 (ATK x 5.7 + 515) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 8 seconds and BlockDOWN(LV3) for 8 seconds",
      "effect": "570% + 515",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_4",
      "description": "Deals 6369 (ATK x 6.1 + 562) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 8 seconds and BlockDOWN(LV4) for 8 seconds",
      "effect": "610% + 562",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_5",
      "description": "Deals 6798 (ATK x 6.5 + 610) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 8 seconds and BlockDOWN(LV5) for 8 seconds",
      "effect": "650% + 610",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Physical Attack +",
      "icon": "skill001/skill1005",
      "effect": "Physical Critical Damage+ (+90), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Hildis",
  "id": 2054,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 190,
    "MATK": 114,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "hildis"
};
