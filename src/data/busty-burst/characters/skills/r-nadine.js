// Skills data for Nadine
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Lightning",
      "icon": "skill001/skill0011",
      "description": "Deals 5242 (MATK x 2.4 + 1890) magic damage to the enemy with the highest MP and inflicts Burn(HP --1059 per second) for 10 seconds",
      "descriptionLv1": "Deals 779 (MATK x 2.4 + 110) magic damage to the enemy with the highest MP and inflicts Burn(HP --80 per second) for 10 seconds",
      "descriptionLv90": "Deals 5242 (MATK x 2.4 + 1890) magic damage to the enemy with the highest MP and inflicts Burn(HP --1059 per second) for 10 seconds",
      "target": "Enemy with Highest MP",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + 1890",
      "effects": [
        "Burn Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Flame Lightning",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 10%+139UP to all allies for 10 seconds and Magic Defense10%+139UP for 10 seconds",
      "descriptionLv1": "Applies Physical Defense 10%+50UP to all allies for 10 seconds and Magic Defense10%+50UP for 10 seconds",
      "descriptionLv90": "Applies Physical Defense 10%+139UP to all allies for 10 seconds and Magic Defense10%+139UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv1",
        "Magic Defense+ Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Lv1",
          "value": 10,
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
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_1",
      "description": "Deals 6586 (MATK x 4.5 + 300) magic damage to all enemies and inflicts Burn(LV1) for 12 seconds",
      "effect": "450% + 300",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -800,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_2",
      "description": "Deals 9202 (MATK x 6.3 + 401) magic damage to all enemies and inflicts Burn(LV2) for 12 seconds",
      "effect": "630% + 401",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_3",
      "description": "Deals 11172 (MATK x 7.65 + 485) magic damage to all enemies and inflicts Burn(LV3) for 12 seconds",
      "effect": "765% + 485",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -2400,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_4",
      "description": "Deals 12520 (MATK x 8.55 + 576) magic damage to all enemies and inflicts Burn(LV4) for 12 seconds",
      "effect": "855% + 576",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -2700,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Behold the Radiance of Nobility",
      "icon": "skill001/skill0006_5",
      "description": "Deals 13228 (MATK x 9.0 + 655) magic damage to all enemies and inflicts Burn(LV5) for 12 seconds",
      "effect": "900% + 655",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -3000,
          "type": "flat",
          "duration": 12
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
      "name": "Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 59,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Nadine",
  "id": 2018,
  "rarity": "R",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 167,
    "MATK": 279,
    "DEF": 22,
    "MDEF": 56
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "r-nadine"
};
