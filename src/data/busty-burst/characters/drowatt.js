// Character data: drowatt
// Auto-generated from game data

export const info = {
  'slug': 'drowatt',
  'name': 'Drowatt',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Even though you want to get so close…",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.38,
      "damageScaling": "225% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "225% + 100",
      "lvl90": "225% + 1880",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Drowatt just doesn’t knooow♪",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.38,
      "damageScaling": "178% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "178% + 90",
      "lvl90": null,
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
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 1) for 10 seconds",
      "effect": "750% + 650",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 2) for 10 seconds",
      "effect": "900% + 730",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -8,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 3) for 10 seconds",
      "effect": "1050% + 790",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -11,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 4) for 10 seconds",
      "effect": "1150% + 850",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 5) for 10 seconds",
      "effect": "1200% + 900",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
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
    }
  ],
  "name": "Drowatt",
  "id": 2009,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 314,
    "MATK": 188,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "drowatt"
};

export const stats = { 'id': 'drowatt' };
