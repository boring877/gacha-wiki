// Skills data for Nerys
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shockwave",
      "icon": "skill001/skill0005",
      "description": "Deals 5881 (MATK x 3.2 + 2345) magic damage to the nearest enemy",
      "descriptionLv1": "Deals 827 (MATK x 3.2 + 120) magic damage to the nearest enemy",
      "descriptionLv90": "Deals 5881 (MATK x 3.2 + 2345) magic damage to the nearest enemy",
      "target": "Farthest Enemy",
      "castTime": 1.08,
      "damageScaling": "320% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+25",
      "lvl1": "320% + 120",
      "lvl90": "320% + 2345",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Light Orb",
      "icon": "skill001/skill0010",
      "description": "Deals 4974 (MATK x 2.8 + 1880) magic damage to the nearest enemy and inflicts Magic Defense-21%+-220DOWN for 10 seconds",
      "descriptionLv1": "Deals 718 (MATK x 2.8 + 100) magic damage to the nearest enemy and inflicts Magic Defense-21%+-40DOWN for 10 seconds",
      "descriptionLv90": "Deals 4974 (MATK x 2.8 + 1880) magic damage to the nearest enemy and inflicts Magic Defense-21%+-220DOWN for 10 seconds",
      "target": "Farthest Enemy",
      "castTime": 1.08,
      "damageScaling": "280% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "280% + 100",
      "lvl90": "280% + 1880",
      "effects": [
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -21,
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
      "name": "Shining Spear",
      "icon": "skill001/skill0012_1",
      "description": "Deals 7130 (MATK x 6.0 + 500) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "600% + 500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_2",
      "description": "Deals 8480 (MATK x 7.2 + 524) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "720% + 524",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_3",
      "description": "Deals 9549 (MATK x 8.1 + 599) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "810% + 599",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_4",
      "description": "Deals 10266 (MATK x 8.7 + 653) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "870% + 653",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_5",
      "description": "Deals 10983 (MATK x 9.3 + 707) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "930% + 707",
      "buffEffects": [
        {
          "name": "Stun",
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
      "name": "MP Recovery+",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery+ (+21)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 21,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Nerys",
  "id": 2008,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2062,
    "ATK": 132,
    "MATK": 221,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "sr-nerys"
};
