// Skills data for 【Festival Empress】Shamshel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Higher than usual\u266a",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack 18%+658UP to self for 8 seconds and Accuracy 23UP for 8 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 8 seconds and Accuracy 11UP for 8 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 8 seconds and Accuracy 23UP for 8 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Faster than usual\u266a",
      "icon": "skill001/skill0005",
      "description": "Deals 1761 (MATK x 0.9 + 762) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "descriptionLv1": "Deals 249 (MATK x 0.9 + 50) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "descriptionLv90": "Deals 1761 (MATK x 0.9 + 762) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+8",
      "lvl1": "90% + 50",
      "lvl90": "90% + 762",
      "effects": [
        "Action Speed + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Dance with the princess in her gown\u266a",
      "icon": "skill001/skill0006_1",
      "description": "Deals 4393 (MATK x 3.6 + 394) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV1) for 10 seconds",
      "effect": "360% + 394",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Dance with the princess in her gown\u266a",
      "icon": "skill001/skill0006_2",
      "description": "Deals 5444 (MATK x 4.5 + 445) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV2) for 10 seconds",
      "effect": "450% + 445",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dance with the princess in her gown\u266a",
      "icon": "skill001/skill0006_3",
      "description": "Deals 6295 (MATK x 5.22 + 496) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV3) for 10 seconds",
      "effect": "522% + 496",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Dance with the princess in her gown\u266a",
      "icon": "skill001/skill0006_4",
      "description": "Deals 6964 (MATK x 5.79 + 532) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV4) for 10 seconds",
      "effect": "579% + 532",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Dance with the princess in her gown\u266a",
      "icon": "skill001/skill0006_5",
      "description": "Deals 7364 (MATK x 6.12 + 565) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV5) for 10 seconds",
      "effect": "612% + 565",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv5",
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
      "name": "Charm Resistance LvMax, Magic Attack +",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1005",
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
  "name": "\u3010Festival Empress\u3011Shamshel",
  "id": 2068,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 133,
    "MATK": 222,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "festival-empress-shamshel"
};
