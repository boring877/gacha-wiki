// Skills data for Yu Lima Elka
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Let Me Play With You\u266a",
      "icon": "skill001/skill0008",
      "description": "Deals 2065 (ATK x 1.1 + 594) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 7 seconds and Magic Attack -9%+-200DOWN for 7 seconds",
      "descriptionLv1": "Deals 353 (ATK x 1.1 + 60) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 7 seconds and Magic Attack -9%+-20DOWN for 7 seconds",
      "descriptionLv90": "Deals 2065 (ATK x 1.1 + 594) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-200DOWN for 7 seconds and Magic Attack -9%+-200DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "110% + 60",
      "lvl90": "110% + 594",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 7
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Become My Captive\u266a",
      "icon": "skill001/skill0011",
      "description": "Deals 6389 (ATK x 3.0 + 2375) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals 951 (ATK x 3.0 + 150) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals 6389 (ATK x 3.0 + 2375) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "300% + 150",
      "lvl90": "300% + 2375",
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_1",
      "description": "Deals 12892 (ATK x 9.0 + 850) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds \u30016\u79d2\u7684\u8a5b\u5492\u7570\u5e38\u72c0\u614b",
      "effect": "900% + 850",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_2",
      "description": "Deals 15370 (ATK x 10.8 + 920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds \u30016\u79d2\u7684\u8a5b\u5492\u7570\u5e38\u72c0\u614b",
      "effect": "1080% + 920",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_3",
      "description": "Deals 16664 (ATK x 11.7 + 1010) physical damage to the nearest enemy and inflicts Paralysis for 7 seconds \u30017\u79d2\u7684\u8a5b\u5492\u7570\u5e38\u72c0\u614b",
      "effect": "1170% + 1010",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_4",
      "description": "Deals 18008 (ATK x 12.6 + 1150) physical damage to the nearest enemy and inflicts Paralysis for 7 seconds \u30017\u79d2\u7684\u8a5b\u5492\u7570\u5e38\u72c0\u614b",
      "effect": "1260% + 1150",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_5",
      "description": "Deals 19363 (ATK x 13.5 + 1300) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds \u30018\u79d2\u7684\u8a5b\u5492\u7570\u5e38\u72c0\u614b",
      "effect": "1350% + 1300",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Skill Damage + (+20%), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Yu Lima Elka",
  "id": 2060,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 4150,
    "ATK": 267,
    "MATK": 160,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "yu-lima-elka"
};
