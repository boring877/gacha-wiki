// Character data: eskelda
// Auto-generated from game data

export const info = {
  'slug': 'eskelda',
  'name': 'Eskelda',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I’m very busy ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "280% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "280% + 110",
      "lvl90": "280% + 1890",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Fall♪",
      "icon": "skill001/skill0019",
      "description": "Applies Block 11 UP to self for 10 seconds",
      "descriptionLv1": "Applies Block 11 UP to self for 10 seconds",
      "descriptionLv90": "Applies Block 23 UP to self for 10 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv4"
      ],
      "buffEffects": [
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
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "225% + 404",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I’m very busy ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "280% + 110",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Fall♪",
      "icon": "skill001/skill0019",
      "description": "Applies Block 11 UP to self for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "225% + 404",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Prepare yourself♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV 2) for 10 seconds",
      "effect": "280% + 509",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -12,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Paralysis Resistance LvMax",
      "icon": "skill001/skill1002",
      "effect": "Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Eskelda",
  "id": 2028,
  "rarity": "R",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1966,
    "ATK": 208,
    "MATK": 124,
    "DEF": 199,
    "MDEF": 79
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "eskelda"
};

export const stats = { 'id': 'eskelda' };
