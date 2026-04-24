// Character data: エルロンの堅牢なる盾-ナターシャ
// Auto-generated from game data

export const info = {
  'slug': 'エルロンの堅牢なる盾-ナターシャ',
  'name': 'エルロンの堅牢なる盾: ナターシャ',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ダブルバンプ",
      "icon": "skill001/skill0008",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds , 6 Action Speed -20%DOWN[], +30, DOWN Lv+30",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds , 6 Action Speed -20%DOWN[], +30, DOWN Lv+30",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-205 DOWN for 6 seconds and Magic Attack -11%-205 DOWN for 6 seconds , 6 Action Speed -20%DOWN[], +30, DOWN Lv+30",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "330% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "330% + 200",
      "lvl90": null,
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4",
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "フルガーディアンズ",
      "icon": "skill001/skill0019",
      "description": "all allies10 Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds , 10 Block 11 UP[], ×2000",
      "descriptionLv1": "all allies10 Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds , 10 Block 11 UP[], ×2000",
      "descriptionLv90": "all allies10 Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds , 10 Block 23 UP[], ×2000",
      "target": "All Allies",
      "castTime": 1.05,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Defense Shield",
        "Defense Reflection Shield",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Defense Shield",
          "value": 1000,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 30.0
        },
        {
          "name": "Defense Reflection Shield",
          "value": 500,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 10.0
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 1) for 8 seconds, all allies8 Shield (LV 1), 8 Defense Reflection Shield(LV 1)[], +50, ×2000",
      "effect": "1000% + 1000",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv1",
          "value": 600,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 2) for 8 seconds, all allies8 Shield (LV 2), 8 Defense Reflection Shield(LV 2)[], +50, ×2000",
      "effect": "1200% + 1300",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv2",
          "value": 700,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 3) for 8 seconds, all allies8 Shield (LV 3), 8 Defense Reflection Shield(LV 3)[], +50, ×2000",
      "effect": "1350% + 1500",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv3",
          "value": 25,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv3",
          "value": 800,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 4) for 8 seconds, all allies8 Shield (LV 4), 8 Defense Reflection Shield(LV 4)[], +50, ×2000",
      "effect": "1450% + 1650",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv4",
          "value": 30,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv4",
          "value": 900,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 5) for 8 seconds, all allies8 Shield (LV 5), 8 Defense Reflection Shield(LV 5)[], +50, ×2000",
      "effect": "1500% + 1800",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv5",
          "value": 1000,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Defense Shield",
      "icon": "skill001/skill1006",
      "effect": "Max HP + (+3444), Defense Shield (+1200%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Defense Shield",
          "value": 1200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Shield, Defense Shield, Defense Shield",
      "icon": "skill001/skill1006",
      "effect": "Shield (+20%), Defense Shield (+1000%), Defense Shield (+1000)",
      "effectValues": [
        {
          "name": "Shield",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Defense Shield",
          "value": 1000,
          "type": "percent"
        },
        {
          "name": "Defense Shield",
          "value": 1000,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "エルロンの堅牢なる盾: ナターシャ",
  "id": 2232,
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "強化、弱體化"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 167,
    "MATK": 100,
    "DEF": 117,
    "MDEF": 175
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "エルロンの堅牢なる盾-ナターシャ"
};

export const stats = { 'id': 'エルロンの堅牢なる盾-ナターシャ' };
