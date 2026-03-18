// Skills data for 【Little Devil】Luca
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u6703\u8f15\u8f15\u523a\u4e00\u4e0b\u5594\uff1f",
      "icon": "skill001/skill0002",
      "description": "Deals 6801 (ATK x 2.8 + 2405) physical damage to the farthest enemy",
      "descriptionLv1": "Deals 1059 (ATK x 2.8 + 180) physical damage to the farthest enemy",
      "descriptionLv90": "Deals 6801 (ATK x 2.8 + 2405) physical damage to the farthest enemy",
      "target": "Farthest Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+180",
      "levelGrowth": "+25",
      "lvl1": "280% + 180",
      "lvl90": "280% + 2405",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "\u556a\u4e00\u8072\uff01",
      "icon": "skill001/skill0011",
      "description": "\u6700\u8fd13\u540d\u6575\u4eba\u9644\u52a01\u79d2\u7684\u9b45\u60d1\u7570\u5e38\u72c0\u614b and Physical Critical Damage-11%+-210DOWN for 10 seconds",
      "descriptionLv1": "\u6700\u8fd13\u540d\u6575\u4eba\u9644\u52a01\u79d2\u7684\u9b45\u60d1\u7570\u5e38\u72c0\u614b and Physical Critical Damage-11%+-30DOWN for 10 seconds",
      "descriptionLv90": "\u6700\u8fd13\u540d\u6575\u4eba\u9644\u52a01\u79d2\u7684\u9b45\u60d1\u7570\u5e38\u72c0\u614b and Physical Critical Damage-11%+-210DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Physical Critical Damage- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 1
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u6703\u7a81\u7136\u8b8a\u5f97\u919c\u964b\uff01",
      "icon": "skill001/skill0003_1",
      "description": "Deals 18170 (ATK x 11.0 + 900) physical damage to the nearest enemy and inflicts Cleanse for 2 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1100% + 900",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u6703\u7a81\u7136\u8b8a\u5f97\u919c\u964b\uff01",
      "icon": "skill001/skill0003_2",
      "description": "Deals 21724 (ATK x 13.2 + 1000) physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u6703\u7a81\u7136\u8b8a\u5f97\u919c\u964b\uff01",
      "icon": "skill001/skill0003_3",
      "description": "Deals 24493 (ATK x 14.9 + 1100) physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1490% + 1100",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u6703\u7a81\u7136\u8b8a\u5f97\u919c\u964b\uff01",
      "icon": "skill001/skill0003_4",
      "description": "Deals 26320 (ATK x 16.0 + 1200) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1600% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u6703\u7a81\u7136\u8b8a\u5f97\u919c\u964b\uff01",
      "icon": "skill001/skill0003_5",
      "description": "Deals 27155 (ATK x 16.5 + 1250) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
      "effect": "1650% + 1250",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Little Devil\u3011Luca",
  "id": 2083,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1661,
    "ATK": 314,
    "MATK": 188,
    "DEF": 126,
    "MDEF": 50
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
  "slug": "sr-little-devil-luca"
};
