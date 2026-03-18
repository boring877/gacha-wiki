// Skills data for 【Dragon Crusher】Medusa
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "You\u2019re so shameless",
      "icon": "skill001/skill0011",
      "description": "Deals 2796 (MATK x 1.2 + 723) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-26DOWN for 12 seconds",
      "descriptionLv1": "Deals 514 (MATK x 1.2 + 100) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-13DOWN for 12 seconds",
      "descriptionLv90": "Deals 2796 (MATK x 1.2 + 723) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-26DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.42,
      "damageScaling": "120% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+7",
      "lvl1": "120% + 100",
      "lvl90": "120% + 723",
      "effects": [
        "Petrify",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Mmh~ haa~",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Magic Damage UP(60%+1490, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+841UP for 12 seconds and silences all enemies for  seconds",
      "descriptionLv1": "Applies Hit-Based Magic Damage UP(60%+600, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+40UP for 12 seconds and silences all enemies for  seconds",
      "descriptionLv90": "Applies Hit-Based Magic Damage UP(60%+1490, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+841UP for 12 seconds and silences all enemies for  seconds",
      "target": "Self",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Magic Damage + LvMax",
        "Magic Attack + Lv5",
        "Silence"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Magic Damage + LvMax",
          "value": 60,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Magic Attack + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 1.5
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_1",
      "description": "Deals 17216 (MATK x 9.5 + 800) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV1) for 8 seconds and applies Action Speed UP(LV1) to self for 10 seconds",
      "effect": "950% + 800",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_2",
      "description": "Deals 20526 (MATK x 11.3 + 1000) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV2) for 8 seconds and applies Action Speed UP(LV2) to self for 10 seconds",
      "effect": "1130% + 1000",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_3",
      "description": "Deals 23095 (MATK x 12.7 + 1150) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV3) for 8 seconds and applies Action Speed UP(LV3) to self for 10 seconds",
      "effect": "1270% + 1150",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_4",
      "description": "Deals 24578 (MATK x 13.5 + 1250) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV4) for 8 seconds and applies Action Speed UP(LV4) to self for 10 seconds",
      "effect": "1350% + 1250",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "You all should try it too!",
      "icon": "skill001/skill0012_5",
      "description": "Deals 26356 (MATK x 14.5 + 1300) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV5) for 8 seconds and applies Action Speed UP(LV5) to self for 10 seconds",
      "effect": "1450% + 1300",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+176), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 176,
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
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Dragon Crusher\u3011Medusa",
  "id": 2099,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 207,
    "MATK": 345,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "130% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "dragon-crusher-medusa"
};
