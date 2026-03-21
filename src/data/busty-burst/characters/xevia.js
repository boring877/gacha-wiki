// Character data: xevia
// Auto-generated from game data

export const info = {
  'slug': 'xevia',
  'name': 'Xevia',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Double Strike",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "180% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+11",
      "lvl1": "180% + 150",
      "lvl90": "180% + 1129",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Instinct",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack +30 UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack +480 UP to self for 12 seconds and Block 18 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 5.0
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.1
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "700% + 400",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Double Strike",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "180% + 150",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Instinct",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to self for 12 seconds and Block 9 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "700% + 400",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "840% + 500",
      "buffEffects": []
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
  "name": "Xevia",
  "id": 2015,
  "rarity": "R",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 181,
    "MATK": 108,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "xevia"
};

export const stats = { 'id': 'xevia' };
