// Character data: elythia
// Auto-generated from game data

export const info = {
  'slug': 'elythia',
  'name': 'Elythia',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thrust",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK",
      "target": "Lowest HP Enemy",
      "castTime": 1.08,
      "damageScaling": "260% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "260% + 100",
      "lvl90": "260% + 1880",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Lionheart",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 5 UP to all allies for 10 seconds and Physical Attack 10%+20 UP for 10 seconds",
      "descriptionLv1": "Applies Accuracy 5 UP to all allies for 10 seconds and Physical Attack 10%+20 UP for 10 seconds",
      "descriptionLv90": "Applies Accuracy 10 UP to all allies for 10 seconds and Physical Attack 10%+110 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv1",
        "Physical Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.05
        },
        {
          "name": "Physical Attack + Lv1",
          "value": 20,
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
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "950% + 811",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1140% + 1092",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1280% + 1212",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1380% + 1252",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Proud Maiden’s Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1470% + 1292",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
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
  "name": "Elythia",
  "id": 2017,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 210,
    "MATK": 126,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "elythia"
};

export const stats = { 'id': 'elythia' };
