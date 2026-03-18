// Skills data for Ran
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u8c9d\u723e\u6069\u795e\u8056\u528d\u8853 \u9583\u96fb\u65ac",
      "icon": "skill001/skill0007",
      "description": "Deals 6687 (ATK x 3.5 + 1980) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-26DOWN for 12 seconds",
      "descriptionLv1": "Deals 1141 (ATK x 3.5 + 200) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-13DOWN for 12 seconds",
      "descriptionLv90": "Deals 6687 (ATK x 3.5 + 1980) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-26DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "350% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "350% + 200",
      "lvl90": "350% + 1980",
      "effects": [
        "Cleanse",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "\u93e1\u9762\u9663",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration5%+773 to self for 5 seconds and Hit-Based Shield(35%+\u300110hit(s)) for 10 seconds \u3001\u79d2\u7684",
      "descriptionLv1": "Applies HP Regeneration5%+150 to self for 5 seconds and Hit-Based Shield(35%+\u300110hit(s)) for 10 seconds \u3001\u79d2\u7684",
      "descriptionLv90": "Applies HP Regeneration5%+773 to self for 5 seconds and Hit-Based Shield(35%+\u300110hit(s)) for 10 seconds \u3001\u79d2\u7684",
      "target": "Self",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv3",
        "Hit-Based Shield LvMax",
        "Debuff Resistance Lv4"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Hit-Based Shield LvMax",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Debuff Resistance Lv4",
          "value": 0.7,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u661f\u4e4b\u9234\u30fb\u5492\u8853\u6295\u624b",
      "icon": "skill001/skill0012_1",
      "description": "Deals 14050 (ATK x 10.0 + 600) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 8 seconds and Magic Attack DOWN(LV1) for 8 seconds \u3001\u81ea\u8eab\u9644\u52a0\u79d2\u7684\u6311\u91c1",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -20,
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
      "name": "\u661f\u4e4b\u9234\u30fb\u5492\u8853\u6295\u624b",
      "icon": "skill001/skill0012_2",
      "description": "Deals 16940 (ATK x 12.0 + 800) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 9 seconds and Magic Attack DOWN(LV2) for 9 seconds \u3001\u81ea\u8eab\u9644\u52a0\u79d2\u7684\u6311\u91c1",
      "effect": "1200% + 800",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -13,
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
      "name": "\u661f\u4e4b\u9234\u30fb\u5492\u8853\u6295\u624b",
      "icon": "skill001/skill0012_3",
      "description": "Deals 19107 (ATK x 13.5 + 950) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds and Magic Attack DOWN(LV3) for 10 seconds \u3001\u81ea\u8eab\u9644\u52a0\u79d2\u7684\u6311\u91c1",
      "effect": "1350% + 950",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv3",
          "value": -16,
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
      "name": "\u661f\u4e4b\u9234\u30fb\u5492\u8853\u6295\u624b",
      "icon": "skill001/skill0012_4",
      "description": "Deals 20552 (ATK x 14.5 + 1050) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 11 seconds and Magic Attack DOWN(LV4) for 11 seconds \u3001\u81ea\u8eab\u9644\u52a0\u79d2\u7684\u6311\u91c1",
      "effect": "1450% + 1050",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv4",
          "value": -18,
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
      "name": "\u661f\u4e4b\u9234\u30fb\u5492\u8853\u6295\u624b",
      "icon": "skill001/skill0012_5",
      "description": "Deals 21275 (ATK x 15.0 + 1100) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 12 seconds and Magic Attack DOWN(LV5) for 12 seconds \u3001\u81ea\u8eab\u9644\u52a0\u79d2\u7684\u6311\u91c1",
      "effect": "1500% + 1100",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv5",
          "value": -20,
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
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Debuff Resistance + (+0.3%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Debuff Resistance +",
          "value": 0.3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Block+ (+10), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ran",
  "id": 2093,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "tags": [],
  "baseStats": {
    "HP": 2105,
    "ATK": 269,
    "MATK": 161,
    "DEF": 258,
    "MDEF": 258
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
  "slug": "ssr-ran"
};
