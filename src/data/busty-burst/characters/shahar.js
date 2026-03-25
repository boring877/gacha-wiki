// Character data: shahar
// Auto-generated from game data

export const info = {
  'slug': 'shahar',
  'name': 'Shahar',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Scattering Claws",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+20",
      "lvl1": "270% + 80",
      "lvl90": "270% + 1860",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Temptation",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-15 DOWN for 10 seconds and Magic Attack -7%-15 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-15 DOWN for 10 seconds and Magic Attack -7%-15 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the 2 nearest enemies and inflicts Physical Attack -7%-105 DOWN for 10 seconds and Magic Attack -7%-105 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "125% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "125% + 60",
      "lvl90": "125% + -29",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1030% + 692",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1236% + 785",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1390% + 864",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1490% + 923",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1600% + 1005",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
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
  "name": "Shahar",
  "id": 2016,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
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
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "shahar"
};

export const stats = { 'id': 'shahar' };
