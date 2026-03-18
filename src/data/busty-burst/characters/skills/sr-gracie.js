// Skills data for Gracie
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6709\u6a5f\u6703\u7684\u54e6\uff01",
      "icon": "skill001/skill0007",
      "description": "Deals 3969 (ATK x 2.2 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds",
      "descriptionLv1": "Deals 525 (ATK x 2.2 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds",
      "descriptionLv90": "Deals 3969 (ATK x 2.2 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "220% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "220% + 110",
      "lvl90": "220% + 1890",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "\u9632\u79a6\u624d\u662f\u7d55\u5c0d\u7684\u54e6\uff01",
      "icon": "skill001/skill0019",
      "description": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Healing Shield Lv4",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Healing Shield Lv4",
          "value": 270,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u5168\u529b\u7684\u4e00\u64ca\u54e6\uff01",
      "icon": "skill001/skill0003_1",
      "description": "Deals 9777 (ATK x 9.5 + 800) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV1) for 10 seconds",
      "effect": "950% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u5168\u529b\u7684\u4e00\u64ca\u54e6\uff01",
      "icon": "skill001/skill0003_2",
      "description": "Deals 11912 (ATK x 11.6 + 950) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV2) for 10 seconds",
      "effect": "1160% + 950",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u5168\u529b\u7684\u4e00\u64ca\u54e6\uff01",
      "icon": "skill001/skill0003_3",
      "description": "Deals 13335 (ATK x 13.0 + 1050) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV3) for 10 seconds",
      "effect": "1300% + 1050",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u5168\u529b\u7684\u4e00\u64ca\u54e6\uff01",
      "icon": "skill001/skill0003_4",
      "description": "Deals 14380 (ATK x 14.0 + 1150) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV4) for 10 seconds",
      "effect": "1400% + 1150",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u5168\u529b\u7684\u4e00\u64ca\u54e6\uff01",
      "icon": "skill001/skill0003_5",
      "description": "Deals 14902 (ATK x 14.5 + 1200) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV5) for 10 seconds",
      "effect": "1450% + 1200",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
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
      "icon": "skill001/skill1003",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Gracie",
  "id": 2086,
  "rarity": "SR",
  "element": "Dark",
  "role": "Tank",
  "tags": [],
  "baseStats": {
    "HP": 1781,
    "ATK": 189,
    "MATK": 113,
    "DEF": 326,
    "MDEF": 130
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
  "slug": "sr-gracie"
};
