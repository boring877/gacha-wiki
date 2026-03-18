// Skills data for Lynette
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u9ebb\u7169\uff01",
      "icon": "skill001/skill0011",
      "description": "Deals 4765 (ATK x 3.0 + 1930) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv1": "Deals 717 (ATK x 3.0 + 150) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv90": "Deals 4765 (ATK x 3.0 + 1930) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "300% + 150",
      "lvl90": "300% + 1930",
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1.5
        }
      ],
      "duration": 1.5
    },
    {
      "slot": 3,
      "name": "\u8d85\u7d1a\u9ebb\u7169\uff01",
      "icon": "skill001/skill0019",
      "description": "All Enemies\u9644\u52a010\u79d2\u7684Accuracy -14DOWN\uff0cand applies to self10\u79d2\u7684Taunt",
      "descriptionLv1": "All Enemies\u9644\u52a010\u79d2\u7684Accuracy -7DOWN\uff0cand applies to self10\u79d2\u7684Taunt",
      "descriptionLv90": "All Enemies\u9644\u52a010\u79d2\u7684Accuracy -14DOWN\uff0cand applies to self10\u79d2\u7684Taunt",
      "target": "All Enemies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy - Lv2",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv2",
          "value": -7,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u5225\u518d\u4f86\u4e86\u554a\uff5e\uff01",
      "icon": "skill001/skill0003_1",
      "description": "Deals 10822 (ATK x 10.5 + 900) physical damage to the nearest enemy and inflicts Burn(LV1) for 15 seconds",
      "effect": "1050% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u5225\u518d\u4f86\u4e86\u554a\uff5e\uff01",
      "icon": "skill001/skill0003_2",
      "description": "Deals 12957 (ATK x 12.6 + 1050) physical damage to the nearest enemy and inflicts Burn(LV2) for 15 seconds",
      "effect": "1260% + 1050",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u5225\u518d\u4f86\u4e86\u554a\uff5e\uff01",
      "icon": "skill001/skill0003_3",
      "description": "Deals 14569 (ATK x 14.2 + 1150) physical damage to the nearest enemy and inflicts Burn(LV3) for 15 seconds",
      "effect": "1420% + 1150",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -2400,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u5225\u518d\u4f86\u4e86\u554a\uff5e\uff01",
      "icon": "skill001/skill0003_4",
      "description": "Deals 15708 (ATK x 15.3 + 1250) physical damage to the nearest enemy and inflicts Burn(LV4) for 15 seconds",
      "effect": "1530% + 1250",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -2700,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u5225\u518d\u4f86\u4e86\u554a\uff5e\uff01",
      "icon": "skill001/skill0003_5",
      "description": "Deals 16609 (ATK x 16.2 + 1300) physical damage to the nearest enemy and inflicts Burn(LV5) for 15 seconds",
      "effect": "1620% + 1300",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -3000,
          "type": "flat",
          "duration": 15
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
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Healing Received + (+40%), Block+ (+15)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 40,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lynette",
  "id": 2087,
  "rarity": "SR",
  "element": "Dark",
  "role": "Tank",
  "tags": [],
  "baseStats": {
    "HP": 3789,
    "ATK": 189,
    "MATK": 113,
    "DEF": 18,
    "MDEF": 7
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
  "slug": "sr-lynette"
};
