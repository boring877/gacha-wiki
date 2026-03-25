// Character data: luceria
// Auto-generated from game data

export const info = {
  'slug': 'luceria',
  'name': 'Luceria',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Heart Racing",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 12%+25 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+100 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Attack 12%+25 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+100 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Attack 12%+295 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+190 UP for 8 seconds",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv2",
        "Physical Defense + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv2",
          "value": 25,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 3.0
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Mm, good idea!",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the 3 nearest allies and removes debuffs",
      "descriptionLv1": "Restores HP by to the 3 nearest allies and removes debuffs",
      "descriptionLv90": "Restores HP by to the 3 nearest allies and removes debuffs",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": "800% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+12",
      "lvl1": "800% + 500",
      "lvl90": null,
      "effects": [
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 1) for 10 seconds",
      "effect": "1300% + 1123",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 2) for 10 seconds",
      "effect": "1600% + 1239",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 3) for 10 seconds",
      "effect": "1800% + 1376",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 4) for 10 seconds",
      "effect": "2000% + 1555",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 5) for 10 seconds",
      "effect": "2100% + 1734",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv5",
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
  "name": "Luceria",
  "id": 2004,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2423,
    "ATK": 193,
    "MATK": 116,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "luceria"
};

export const stats = { 'id': 'luceria' };
