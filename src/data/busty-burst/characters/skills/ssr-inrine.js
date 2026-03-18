// Skills data for Inrine
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Steel Sever",
      "icon": "skill001/skill0002",
      "description": "Deals 9708 (ATK x 3.5 + 3170) physical damage to the nearest enemy",
      "descriptionLv1": "Deals 1805 (ATK x 3.5 + 500) physical damage to the nearest enemy",
      "descriptionLv90": "Deals 9708 (ATK x 3.5 + 3170) physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+30",
      "lvl1": "350% + 500",
      "lvl90": "350% + 3170",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Single-Minded Strike",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Physical Damage UP(150%+4950, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "descriptionLv1": "Applies Hit-Based Physical Damage UP(150%+500, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "descriptionLv90": "Applies Hit-Based Physical Damage UP(150%+4950, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "target": "Self",
      "castTime": 1.6,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Physical Damage +",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage +",
          "value": 150,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5530 (ATK x 2.8 + 300) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 secondsand BlockDOWN(LV1) for 10 seconds",
      "effect": "280% + 300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_2",
      "description": "Deals 6564 (ATK x 3.3 + 400) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 secondsand BlockDOWN(LV2) for 10 seconds",
      "effect": "330% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7411 (ATK x 3.7 + 500) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 secondsand BlockDOWN(LV3) for 10 seconds",
      "effect": "370% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_4",
      "description": "Deals 8022 (ATK x 4.0 + 550) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 secondsand BlockDOWN(LV4) for 10 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_5",
      "description": "Deals 8445 (ATK x 4.2 + 600) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 secondsand BlockDOWN(LV5) for 10 seconds",
      "effect": "420% + 600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
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
  "name": "Inrine",
  "id": 2050,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1819,
    "ATK": 373,
    "MATK": 224,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-inrine"
};
