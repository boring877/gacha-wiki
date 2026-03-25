// Character data: aysis
// Auto-generated from game data

export const info = {
  'slug': 'aysis',
  'name': 'Aysis',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Edelrant-Style Swordsmanship: Earthstride",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 2 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "160% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+10",
      "lvl1": "160% + 100",
      "lvl90": "160% + 990",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Pride of the Royal Guards",
      "icon": "skill001/skill0019",
      "description": "Applies 7 seconds of Physical Defense 15%+100 UP and 7 seconds of Magic Defense 15%+100 UP to self",
      "descriptionLv1": "Applies 7 seconds of Physical Defense 15%+100 UP and 7 seconds of Magic Defense 15%+100 UP to self",
      "descriptionLv90": "Applies 7 seconds of Physical Defense 15%+190 UP and 7 seconds of Magic Defense 15%+190 UP to self",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 100,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 1.0
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 615",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 2) for 10 seconds",
      "effect": "1450% + 706",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 3) for 10 seconds",
      "effect": "1570% + 818",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 4) for 10 seconds",
      "effect": "1689% + 951",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 5) for 10 seconds",
      "effect": "1750% + 1064",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
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
  "name": "Aysis",
  "id": 2002,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 114,
    "MATK": 68,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "aysis"
};

export const stats = { 'id': 'aysis' };
