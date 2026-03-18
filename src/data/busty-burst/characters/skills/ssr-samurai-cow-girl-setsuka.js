// Skills data for 【Samurai Cow Girl】Setsuka
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u98c4\u6563\u8457\u8272\u9999\uff01",
      "icon": "skill001/skill0002",
      "description": "Deals 7034 (ATK x 3.1 + 2375) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+1351, 4 hit(s)) to self for 15 seconds",
      "descriptionLv1": "Deals 1080 (ATK x 3.1 + 150) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+550, 4 hit(s)) to self for 15 seconds",
      "descriptionLv90": "Deals 7034 (ATK x 3.1 + 2375) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+1351, 4 hit(s)) to self for 15 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "310% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "310% + 150",
      "lvl90": "310% + 2375",
      "effects": [
        "Hit-Based Physical Damage + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Lv5",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": " \u554a\uff0c\u675f\u7e1b\uff0c\u6643\u52d5\u6643\u52d5\uff01",
      "icon": "skill001/skill0011",
      "description": "Deals 5938 (ATK x 2.7 + 1880) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-26DOWN for 10 seconds",
      "descriptionLv1": "Deals 910 (ATK x 2.7 + 100) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-13DOWN for 10 seconds",
      "descriptionLv90": "Deals 5938 (ATK x 2.7 + 1880) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-26DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "270% + 100",
      "lvl90": "270% + 1880",
      "effects": [
        "Stun",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u8fc5\u75be\u98a8\u66b4 Cowgirl\u98a8\u683c",
      "icon": "skill001/skill0003_1",
      "description": "Deals 17333 (ATK x 11.2 + 500) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and inflicts Physical Defense DOWN(LV1) for 10 seconds",
      "effect": "1120% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u8fc5\u75be\u98a8\u66b4 Cowgirl\u98a8\u683c",
      "icon": "skill001/skill0003_2",
      "description": "Deals 20890 (ATK x 13.5 + 600) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and inflicts Physical Defense DOWN(LV2) for 10 seconds",
      "effect": "1350% + 600",
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
      "name": "\u8fc5\u75be\u98a8\u66b4 Cowgirl\u98a8\u683c",
      "icon": "skill001/skill0003_3",
      "description": "Deals 23245 (ATK x 15.0 + 700) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and inflicts Physical Defense DOWN(LV3) for 10 seconds",
      "effect": "1500% + 700",
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
      "name": "\u8fc5\u75be\u98a8\u66b4 Cowgirl\u98a8\u683c",
      "icon": "skill001/skill0003_4",
      "description": "Deals 24848 (ATK x 16.0 + 800) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and inflicts Physical Defense DOWN(LV4) for 10 seconds",
      "effect": "1600% + 800",
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
      "name": "\u8fc5\u75be\u98a8\u66b4 Cowgirl\u98a8\u683c",
      "icon": "skill001/skill0003_5",
      "description": "Deals 25699 (ATK x 16.5 + 900) physical damage to the nearest enemy\uff0c\u5fc5\u4e2d and inflicts Physical Defense DOWN(LV5) for 10 seconds",
      "effect": "1650% + 900",
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
      "name": "Skill Damage +, Skill Enhancement Regol Cost DOWN\u30fbFire",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWN\u30fbFire (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWN\u30fbFire",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Samurai Cow Girl\u3011Setsuka",
  "id": 2094,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1972,
    "ATK": 300,
    "MATK": 180,
    "DEF": 82,
    "MDEF": 32
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
  "slug": "ssr-samurai-cow-girl-setsuka"
};
