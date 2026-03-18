// Skills data for Rosa
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u72c2\u821e\u7684\u5973\u795e",
      "icon": "skill001/skill0002",
      "description": "Deals 10289 (ATK x 4.5 + 2725) physical damage to the nearest enemy\uff0c\u6280\u80fd\u767c\u52d5\u6642Applies Physical Attack 20%+841UP to self for 10 seconds",
      "descriptionLv1": "Deals 2012 (ATK x 4.5 + 500) physical damage to the nearest enemy\uff0c\u6280\u80fd\u767c\u52d5\u6642Applies Physical Attack 20%+40UP to self for 10 seconds",
      "descriptionLv90": "Deals 10289 (ATK x 4.5 + 2725) physical damage to the nearest enemy\uff0c\u6280\u80fd\u767c\u52d5\u6642Applies Physical Attack 20%+841UP to self for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "450% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "450% + 500",
      "lvl90": "450% + 2725",
      "effects": [
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "\u51f1\u65cb",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage485UP to all allies for 7 seconds and Accuracy 18UP for 7 seconds",
      "descriptionLv1": "Applies Physical Critical Damage40UP to all allies for 7 seconds and Accuracy 9UP for 7 seconds",
      "descriptionLv90": "Applies Physical Critical Damage485UP to all allies for 7 seconds and Accuracy 18UP for 7 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 7
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u7a46\u6377\u2027\u9f4b\u8299",
      "icon": "skill001/skill0003_1",
      "description": "Deals 17610 (ATK x 10.0 + 800) physical damage to the nearest enemy and inflicts BlockDOWN(LV1) for 10 seconds and applies BlockDOWN(LV1) to self for 10 seconds",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u7a46\u6377\u2027\u9f4b\u8299",
      "icon": "skill001/skill0003_2",
      "description": "Deals 21172 (ATK x 12.0 + 1000) physical damage to the nearest enemy and inflicts BlockDOWN(LV2) for 10 seconds and applies BlockDOWN(LV2) to self for 10 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u7a46\u6377\u2027\u9f4b\u8299",
      "icon": "skill001/skill0003_3",
      "description": "Deals 23843 (ATK x 13.5 + 1150) physical damage to the nearest enemy and inflicts BlockDOWN(LV3) for 10 seconds and applies BlockDOWN(LV3) to self for 10 seconds",
      "effect": "1350% + 1150",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u7a46\u6377\u2027\u9f4b\u8299",
      "icon": "skill001/skill0003_4",
      "description": "Deals 25624 (ATK x 14.5 + 1250) physical damage to the nearest enemy and inflicts BlockDOWN(LV4) for 10 seconds and applies BlockDOWN(LV4) to self for 10 seconds",
      "effect": "1450% + 1250",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u7a46\u6377\u2027\u9f4b\u8299",
      "icon": "skill001/skill0003_5",
      "description": "Deals 26515 (ATK x 15.0 + 1300) physical damage to the nearest enemy and inflicts BlockDOWN(LV5) for 10 seconds and applies BlockDOWN(LV5) to self for 10 seconds",
      "effect": "1500% + 1300",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Holy Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Physical Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
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
  "name": "Rosa",
  "id": 2085,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1819,
    "ATK": 336,
    "MATK": 201,
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
  "slug": "ssr-rosa"
};
