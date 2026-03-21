// Character data: roxanne
// Auto-generated from game data

export const info = {
  'slug': 'roxanne',
  'name': 'Roxanne',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Skillet Smash",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "233% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+16",
      "lvl1": "233% + 70",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Come Drink Some Milk",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP",
      "target": "Lowest HP Ally",
      "castTime": 1.38,
      "damageScaling": "3100% ATK",
      "baseDamage": "+652",
      "levelGrowth": "+50",
      "lvl1": "3100% + 652",
      "lvl90": "3100% + 5102",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 1) for 10 seconds",
      "effect": "1800% + 1712",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Skillet Smash",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "effect": "233% + 70",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Come Drink Some Milk",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP",
      "effect": "3100% + 652",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 1) for 10 seconds",
      "effect": "1800% + 1712",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 2) for 10 seconds",
      "effect": "2150% + 1833",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
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
    },
    {
      "slot": 2,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+10%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Roxanne",
  "id": 2003,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2578,
    "ATK": 203,
    "MATK": 122,
    "DEF": 56,
    "MDEF": 22
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "roxanne"
};

export const stats = { 'id': 'roxanne' };
