// Skills data for Medusa
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I\u2019m going to curse you\uff5e!",
      "icon": "skill001/skill0011",
      "description": "Deals 1808 (MATK x 0.9 + 673) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "descriptionLv1": "Deals 276 (MATK x 0.9 + 50) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "descriptionLv90": "Deals 1808 (MATK x 0.9 + 673) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+7",
      "lvl1": "90% + 50",
      "lvl90": "90% + 673",
      "effects": [
        "Paralysis"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Aauyaaahhh!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "All of you, turn to stone\uff5e\uff5e\uff5e!",
      "icon": "skill001/skill0012_1",
      "description": "Deals 6077 (MATK x 4.5 + 398) magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "450% + 398",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "All of you, turn to stone\uff5e\uff5e\uff5e!",
      "icon": "skill001/skill0012_2",
      "description": "Deals 8449 (MATK x 6.3 + 499) magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "630% + 499",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "All of you, turn to stone\uff5e\uff5e\uff5e!",
      "icon": "skill001/skill0012_3",
      "description": "Deals 10237 (MATK x 7.65 + 583) magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "765% + 583",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "All of you, turn to stone\uff5e\uff5e\uff5e!",
      "icon": "skill001/skill0012_4",
      "description": "Deals 11467 (MATK x 8.55 + 677) magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "855% + 677",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "All of you, turn to stone\uff5e\uff5e\uff5e!",
      "icon": "skill001/skill0012_5",
      "description": "Deals 12110 (MATK x 9.0 + 752) magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "900% + 752",
      "buffEffects": [
        {
          "name": "Petrify",
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
      "name": "Petrify Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Petrify Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Petrify Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Critical Damage+, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+118), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 118,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Medusa",
  "id": 2031,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 151,
    "MATK": 252,
    "DEF": 50,
    "MDEF": 126
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-medusa"
};
