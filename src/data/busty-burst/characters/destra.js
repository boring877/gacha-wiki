// Character data: destra
// Auto-generated from game data

export const info = {
  'slug': 'destra',
  'name': 'Destra',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Just a little…",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "240% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "240% + 90",
      "lvl90": null,
      "effects": [
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Please come with me～♪",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by",
      "descriptionLv1": "Restores own HP by",
      "descriptionLv90": "Restores own HP by",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": "2500% ATK",
      "baseDamage": "+950",
      "levelGrowth": "+50",
      "lvl1": "2500% + 950",
      "lvl90": "2500% + 5400",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "220% + 304",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Just a little…",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "effect": "240% + 90",
      "buffEffects": [
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
      "name": "Please come with me～♪",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by",
      "effect": "2500% + 950",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "220% + 304",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 2) for 10 seconds",
      "effect": "275% + 409",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Destra",
  "id": 2027,
  "rarity": "R",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 4010,
    "ATK": 241,
    "MATK": 145,
    "DEF": 9,
    "MDEF": 3
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "destra"
};

export const stats = { 'id': 'destra' };
