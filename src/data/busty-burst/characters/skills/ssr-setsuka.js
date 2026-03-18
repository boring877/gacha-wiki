// Skills data for Setsuka
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Swift as the Wind",
      "icon": "skill001/skill0002",
      "description": "Deals 6325 (ATK x 3.2 + 2770) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d",
      "descriptionLv1": "Deals 810 (ATK x 3.2 + 100) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d",
      "descriptionLv90": "Deals 6325 (ATK x 3.2 + 2770) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d",
      "target": "Nearest Enemy",
      "castTime": 0.98,
      "damageScaling": "320% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+30",
      "lvl1": "320% + 100",
      "lvl90": "320% + 2770",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Oni Stance",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 20%+841UP to self for 8 seconds and Physical Critical Damage673UP for 8 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 8 seconds and Physical Critical Damage50UP for 8 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 8 seconds and Physical Critical Damage673UP for 8 seconds",
      "target": "Self",
      "castTime": 0.98,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Physical Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_1",
      "description": "Deals 13421 (ATK x 11.0 + 1200) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and applies Fire Type ATK UP(LV1) to self for 8 seconds",
      "effect": "1100% + 1200",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_2",
      "description": "Deals 16065 (ATK x 13.2 + 1400) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and applies Fire Type ATK UP(LV2) to self for 8 seconds",
      "effect": "1320% + 1400",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_3",
      "description": "Deals 18103 (ATK x 14.9 + 1550) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and applies Fire Type ATK UP(LV3) to self for 8 seconds",
      "effect": "1490% + 1550",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_4",
      "description": "Deals 19426 (ATK x 16.0 + 1650) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and applies Fire Type ATK UP(LV4) to self for 8 seconds",
      "effect": "1600% + 1650",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_5",
      "description": "Deals 20142 (ATK x 16.6 + 1700) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and applies Fire Type ATK UP(LV5) to self for 8 seconds",
      "effect": "1660% + 1700",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv5",
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
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Setsuka",
  "id": 2059,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1457,
    "ATK": 222,
    "MATK": 133,
    "DEF": 226,
    "MDEF": 90
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
  "slug": "ssr-setsuka"
};
