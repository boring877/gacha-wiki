// Skills data for 【Tempting Vampire】Soltina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6211\u6703\u904e\u4f86\u89aa\u4e00\u4e0b\u54e6\uff01",
      "icon": "skill001/skill0002",
      "description": "Deals 2638 (ATK x 1.3 + 812) physical damage to the 3 nearest enemies \uff0c\u6280\u80fd\u767c\u52d5\u6642Applies HP Absorb19%+445UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
      "descriptionLv1": "Deals 465 (ATK x 1.3 + 100) physical damage to the 3 nearest enemies \uff0c\u6280\u80fd\u767c\u52d5\u6642Applies HP Absorb19%+0UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
      "descriptionLv90": "Deals 2638 (ATK x 1.3 + 812) physical damage to the 3 nearest enemies \uff0c\u6280\u80fd\u767c\u52d5\u6642Applies HP Absorb19%+445UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "130% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "130% + 100",
      "lvl90": "130% + 812",
      "effects": [
        "HP Absorb+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "HP Absorb+ Lv5",
          "value": 19,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "\u64ab\u6478\u4e00\u4e0b\uff0c\u64ab\u6478\u4e00\u4e0b",
      "icon": "skill001/skill0013",
      "description": "Applies Accuracy 23UP to self for 10 seconds and Physical Attack 20%+841UP for 10 seconds",
      "descriptionLv1": "Applies Accuracy 11UP to self for 10 seconds and Physical Attack 20%+40UP for 10 seconds",
      "descriptionLv90": "Applies Accuracy 23UP to self for 10 seconds and Physical Attack 20%+841UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv4",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Lv5",
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
      "name": "\u6200\u611b\u4e2d\u7684\u5438\u8840\u5973\u50d5\u3001\u5954\u99b3\u65bc\u591c\u9593",
      "icon": "skill001/skill0003_1",
      "description": "Deals 17157 (ATK x 11.5 + 1000) physical damage to the enemy with the lowest HP and inflicts Cleanse for 3 seconds and Action Speed DOWN(LV4) for 10 seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1150% + 1000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u6200\u611b\u4e2d\u7684\u5438\u8840\u5973\u50d5\u3001\u5954\u99b3\u65bc\u591c\u9593",
      "icon": "skill001/skill0003_2",
      "description": "Deals 20589 (ATK x 13.8 + 1200) physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1380% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u6200\u611b\u4e2d\u7684\u5438\u8840\u5973\u50d5\u3001\u5954\u99b3\u65bc\u591c\u9593",
      "icon": "skill001/skill0003_3",
      "description": "Deals 22937 (ATK x 15.4 + 1300) physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1540% + 1300",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u6200\u611b\u4e2d\u7684\u5438\u8840\u5973\u50d5\u3001\u5954\u99b3\u65bc\u591c\u9593",
      "icon": "skill001/skill0003_4",
      "description": "Deals 24532 (ATK x 16.5 + 1350) physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1650% + 1350",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u6200\u611b\u4e2d\u7684\u5438\u8840\u5973\u50d5\u3001\u5954\u99b3\u65bc\u591c\u9593",
      "icon": "skill001/skill0003_5",
      "description": "Deals 25285 (ATK x 17.0 + 1400) physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
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
  "name": "\u3010Tempting Vampire\u3011Soltina",
  "id": 2082,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1457,
    "ATK": 281,
    "MATK": 168,
    "DEF": 226,
    "MDEF": 90
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
  "slug": "ssr-tempting-vampire-soltina"
};
