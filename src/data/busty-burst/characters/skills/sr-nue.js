// Skills data for Nue
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Binding Art: Serpent Coil",
      "icon": "skill001/skill0011",
      "description": "Deals 5309 (ATK x 2.7 + 1475) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-210DOWN for 8 seconds",
      "descriptionLv1": "Deals 906 (ATK x 2.7 + 140) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-30DOWN for 8 seconds",
      "descriptionLv90": "Deals 5309 (ATK x 2.7 + 1475) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-210DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "270% ATK",
      "baseDamage": "+140",
      "levelGrowth": "+15",
      "lvl1": "270% + 140",
      "lvl90": "270% + 1475",
      "effects": [
        "Paralysis",
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 4
    },
    {
      "slot": 3,
      "name": "Inner Energy",
      "icon": "skill001/skill0019",
      "description": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Block9UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 4
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Secret Art: Death's Makeup",
      "icon": "skill001/skill0003_1",
      "description": "Deals 5028 (ATK x 3.4 + 200) physical damage to the 3 nearest enemies",
      "effect": "340% + 200",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Secret Art: Death's Makeup",
      "icon": "skill001/skill0003_2",
      "description": "Deals 5636 (ATK x 3.8 + 240) physical damage to the 3 nearest enemies",
      "effect": "380% + 240",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Secret Art: Death's Makeup",
      "icon": "skill001/skill0003_3",
      "description": "Deals 6234 (ATK x 4.2 + 270) physical damage to the 3 nearest enemies",
      "effect": "420% + 270",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Secret Art: Death's Makeup",
      "icon": "skill001/skill0003_4",
      "description": "Deals 6690 (ATK x 4.5 + 300) physical damage to the 3 nearest enemies",
      "effect": "450% + 300",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Secret Art: Death's Makeup",
      "icon": "skill001/skill0003_5",
      "description": "Deals 7166 (ATK x 4.8 + 350) physical damage to the 3 nearest enemies",
      "effect": "480% + 350",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Nue",
  "id": 2075,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1524,
    "ATK": 284,
    "MATK": 170,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-nue"
};
