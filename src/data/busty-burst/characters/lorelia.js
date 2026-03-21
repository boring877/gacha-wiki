// Character data: lorelia
// Auto-generated from game data

export const info = {
  'slug': 'lorelia',
  'name': 'Lorelia',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Gentle Slap",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "240% + 120",
      "lvl90": "240% + 1900",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "It is my honor to be of assistance to you ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense +100 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense +100 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense +190 UP for 12 seconds",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv2",
        "Physical Defense + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 1.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "320% + 286",
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
      "rank": 2,
      "name": "Gentle Slap",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "240% + 120",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "It is my honor to be of assistance to you ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense +100 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "320% + 286",
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
      "rank": 5,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "380% + 327",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
  "name": "Lorelia",
  "id": 2019,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 279,
    "MATK": 167,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "lorelia"
};

export const stats = { 'id': 'lorelia' };
