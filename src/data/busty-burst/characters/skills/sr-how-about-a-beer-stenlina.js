// Skills data for 【How About a Beer?】Stenlina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6709\u9ede\u559d\u9189\u4e86 ",
      "icon": "skill001/skill0011",
      "description": "Deals 5001 (ATK x 2.2 + 1930) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "descriptionLv1": "Deals 763 (ATK x 2.2 + 150) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "descriptionLv90": "Deals 5001 (ATK x 2.2 + 1930) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "220% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "220% + 150",
      "lvl90": "220% + 1930",
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 1
    },
    {
      "slot": 3,
      "name": "\u4f86\uff0c\u4e00\u8d77\u559d\u5427\uff01",
      "icon": "skill001/skill0019",
      "description": "Applies Block18UP to the 3 nearest allies for 10 seconds and Accuracy 18UP for 10 seconds",
      "descriptionLv1": "Applies Block9UP to the 3 nearest allies for 10 seconds and Accuracy 9UP for 10 seconds",
      "descriptionLv90": "Applies Block18UP to the 3 nearest allies for 10 seconds and Accuracy 18UP for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
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
      "name": "\u4e7e\u676f\uff01",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Attack UP(LV1) to all allies for 12 seconds and Magic Attack UP(LV1) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u4e7e\u676f\uff01",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Attack UP(LV2) to all allies for 12 seconds and Magic Attack UP(LV2) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u4e7e\u676f\uff01",
      "icon": "skill001/skill0020_3",
      "description": "Applies Physical Attack UP(LV3) to all allies for 12 seconds and Magic Attack UP(LV3) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u4e7e\u676f\uff01",
      "icon": "skill001/skill0020_4",
      "description": "Applies Physical Attack UP(LV4) to all allies for 12 seconds and Magic Attack UP(LV4) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u4e7e\u676f\uff01",
      "icon": "skill001/skill0020_5",
      "description": "Applies Physical Attack UP(LV5) to all allies for 12 seconds and Magic Attack UP(LV5) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1005",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010How About a Beer?\u3011Stenlina",
  "id": 2091,
  "rarity": "SR",
  "element": "Dark",
  "role": "Support",
  "tags": [],
  "baseStats": {
    "HP": 2507,
    "ATK": 279,
    "MATK": 167,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-how-about-a-beer-stenlina"
};
