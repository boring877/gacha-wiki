// Skills data for Lorelia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Gentle Slap",
      "icon": "skill001/skill0002",
      "description": "Deals 5252 (ATK x 2.4 + 1900) physical damage to the nearest enemy",
      "descriptionLv1": "Deals 789 (ATK x 2.4 + 120) physical damage to the nearest enemy",
      "descriptionLv90": "Deals 5252 (ATK x 2.4 + 1900) physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "240% + 120",
      "lvl90": "240% + 1900",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "It is my honor to be of assistance to you ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage297UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+189UP for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage30UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+100UP for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage297UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+189UP for 12 seconds",
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
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 15,
          "type": "percent",
          "duration": 12
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
      "description": "Deals 4756 (ATK x 3.2 + 286) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "320% + 286",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        }
      ]
    },
    {
      "rank": 2,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_2",
      "description": "Deals 5635 (ATK x 3.8 + 327) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "380% + 327",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_3",
      "description": "Deals 6331 (ATK x 4.27 + 366) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "427% + 366",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_4",
      "description": "Deals 6797 (ATK x 4.58 + 399) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "458% + 399",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_5",
      "description": "Deals 7253 (ATK x 4.89 + 422) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "489% + 422",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
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
      "effect": "Physical Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "flat"
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
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "r-lorelia"
};
