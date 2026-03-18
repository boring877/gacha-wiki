// Skills data for Gemini
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Don\u2019t underestimate a treasure hunter!",
      "icon": "skill001/skill0002",
      "description": "Deals 6638 (ATK x 4.0 + 2830) physical damage to the nearest enemy",
      "descriptionLv1": "Deals 920 (ATK x 4.0 + 160) physical damage to the nearest enemy",
      "descriptionLv90": "Deals 6638 (ATK x 4.0 + 2830) physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "400% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+30",
      "lvl1": "400% + 160",
      "lvl90": "400% + 2830",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "This isn\u2019t something an idiot could pull off, you know?",
      "icon": "skill001/skill0009",
      "description": "Deals 1726 (ATK x 1.2 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-210DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
      "descriptionLv1": "Deals 278 (ATK x 1.2 + 50) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-30DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
      "descriptionLv90": "Deals 1726 (ATK x 1.2 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-210DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "120% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "120% + 50",
      "lvl90": "120% + 584",
      "effects": [
        "Physical Defense - Lv3",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5260 (ATK x 5.0 + 500) physical damage to the 3 nearest enemies",
      "effect": "500% + 500",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_2",
      "description": "Deals 6362 (ATK x 6.0 + 650) physical damage to the 3 nearest enemies",
      "effect": "600% + 650",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_3",
      "description": "Deals 7890 (ATK x 7.5 + 750) physical damage to the 3 nearest enemies",
      "effect": "750% + 750",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_4",
      "description": "Deals 8416 (ATK x 8.0 + 800) physical damage to the 3 nearest enemies",
      "effect": "800% + 800",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_5",
      "description": "Deals 8942 (ATK x 8.5 + 850) physical damage to the 3 nearest enemies",
      "effect": "850% + 850",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Gemini",
  "id": 2052,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 190,
    "MATK": 114,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "gemini"
};
