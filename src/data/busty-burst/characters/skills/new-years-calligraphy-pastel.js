// Skills data for 【New Year's Calligraphy】Pastel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Longevity",
      "icon": "skill001/skill0019",
      "description": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "descriptionLv1": "Restores HP by 2000% ATK + 600 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "descriptionLv90": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": "2000% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+40",
      "lvl1": "2000% + 600",
      "lvl90": "2000% + 4160",
      "effects": [
        "Debuff Resistance Lv2",
        "Accuracy+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Crane and Turtle",
      "icon": "skill001/skill0007",
      "description": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "descriptionLv1": "Deals 110% ATK + 120 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "descriptionLv90": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+6",
      "lvl1": "110% + 120",
      "lvl90": "110% + 654",
      "effects": [
        "Physical Attack- Lv4",
        "Magic Attack- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack- Lv4",
          "value": -11,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Magic Attack- Lv4",
          "value": -11,
          "type": "percent",
          "duration": 7
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_1",
      "description": "Deals 380% ATK + 600 physical damage to all enemies and inflicts Dispel for 3 seconds and Action Speed- Ultimate Lv1 (-8%) for 8 seconds",
      "effect": "380% + 600",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed- Ultimate Lv1",
          "value": -8,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_2",
      "description": "Deals 450% ATK + 800 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv2 (-10%) for 8 seconds",
      "effect": "450% + 800",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed- Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_3",
      "description": "Deals 509% ATK + 950 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv3 (-12%) for 8 seconds",
      "effect": "509% + 950",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed- Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_4",
      "description": "Deals 550% ATK + 1100 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv4 (-14%) for 8 seconds",
      "effect": "550% + 1100",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed- Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_5",
      "description": "Deals 580% ATK + 1200 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv5 (-15%) for 8 seconds",
      "effect": "580% + 1200",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed- Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Self Action Speed UP, Max HP UP",
      "icon": "skill001/skill1003",
      "effects": [
        {
          "name": "Action Speed+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Max HP+",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "All Allies Block UP, Max HP UP",
      "icon": "skill001/skill1007",
      "effects": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Max HP+",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010New Year's Calligraphy\u3011Pastel",
  "id": 2100,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 306,
    "MATK": 183,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.00"
  },
  "slug": "new-years-calligraphy-pastel"
};
