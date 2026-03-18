// Skills data for Hisara
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Spinning Blade",
      "icon": "skill001/skill0002",
      "description": "Deals 2415 (ATK x 1.1 + 762) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv1": "Deals 380 (ATK x 1.1 + 50) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv90": "Deals 2415 (ATK x 1.1 + 762) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "target": "Enemy with Lowest HP",
      "castTime": 0.88,
      "damageScaling": "110% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+8",
      "lvl1": "110% + 50",
      "lvl90": "110% + 762",
      "effects": [
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Ring Blade",
      "icon": "skill001/skill0002",
      "description": "Deals 2903 (ATK x 1.3 + 950) physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 450 (ATK x 1.3 + 60) physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2903 (ATK x 1.3 + 950) physical damage to the 3 nearest enemies",
      "target": "Enemy with Lowest HP",
      "castTime": 0.88,
      "damageScaling": "130% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+10",
      "lvl1": "130% + 60",
      "lvl90": "130% + 950",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Eradicator",
      "icon": "skill001/skill0003_1",
      "description": "Deals 7163 (ATK x 4.5 + 400) physical damage to the 3 nearest enemies and applies Action Speed UP(LV1) to self for 12 seconds",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Eradicator",
      "icon": "skill001/skill0003_2",
      "description": "Deals 8746 (ATK x 5.5 + 480) physical damage to the 3 nearest enemies and applies Action Speed UP(LV2) to self for 12 seconds",
      "effect": "550% + 480",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Eradicator",
      "icon": "skill001/skill0003_3",
      "description": "Deals 9578 (ATK x 6.0 + 560) physical damage to the 3 nearest enemies and applies Action Speed UP(LV3) to self for 12 seconds",
      "effect": "600% + 560",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Eradicator",
      "icon": "skill001/skill0003_4",
      "description": "Deals 10369 (ATK x 6.5 + 600) physical damage to the 3 nearest enemies and applies Action Speed UP(LV4) to self for 12 seconds",
      "effect": "650% + 600",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Eradicator",
      "icon": "skill001/skill0003_5",
      "description": "Deals 10860 (ATK x 6.8 + 640) physical damage to the 3 nearest enemies \u3001Applies Action Speed UP(LV5) to self for 12 seconds",
      "effect": "680% + 640",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+, Physical Attack +",
      "icon": "skill001/skill1004",
      "effect": "MP Recovery+ (+42), Physical Attack + (+420)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 42,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 420,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Hisara",
  "id": 2062,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1972,
    "ATK": 300,
    "MATK": 180,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "hisara"
};
