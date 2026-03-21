// Character data: rosalyn
// Auto-generated from game data

export const info = {
  'slug': 'rosalyn',
  'name': 'Rosalyn',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Princess Pirate’s Strike",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -210 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "265% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+16",
      "lvl1": "265% + 80",
      "lvl90": "265% + -98",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Women are full of love and mystery, you know ",
      "icon": "skill001/skill0019",
      "description": "Applies Block 5 UP to all allies for 10 seconds and Physical Defense +50 UP for 10 seconds",
      "descriptionLv1": "Applies Block 5 UP to all allies for 10 seconds and Physical Defense +50 UP for 10 seconds",
      "descriptionLv90": "Applies Block 10 UP to all allies for 10 seconds and Physical Defense +140 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv1",
        "Physical Defense + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.05
        },
        {
          "name": "Physical Defense + Lv1",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "310% + 266",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Princess Pirate’s Strike",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 8 seconds",
      "effect": "265% + 80",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Women are full of love and mystery, you know ",
      "icon": "skill001/skill0019",
      "description": "Applies Block 5 UP to all allies for 10 seconds and Physical Defense +50 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block+ Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv1",
          "value": 50,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "310% + 266",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "370% + 307",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Rosalyn",
  "id": 2011,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1452,
    "ATK": 210,
    "MATK": 126,
    "DEF": 199,
    "MDEF": 79
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "rosalyn"
};

export const stats = { 'id': 'rosalyn' };
