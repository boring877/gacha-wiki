// Skills data for Elythia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thrust",
      "icon": "skill001/skill0002",
      "description": "Deals 4612 (ATK x 2.6 + 1880) physical damage to the enemy with the highest Physical ATK",
      "descriptionLv1": "Deals 646 (ATK x 2.6 + 100) physical damage to the enemy with the highest Physical ATK",
      "descriptionLv90": "Deals 4612 (ATK x 2.6 + 1880) physical damage to the enemy with the highest Physical ATK",
      "target": "Enemy with Lowest HP",
      "castTime": 1.08,
      "damageScaling": "260% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "260% + 100",
      "lvl90": "260% + 1880",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Lionheart",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9UP to all allies for 10 seconds and Physical Attack 10%+109UP for 10 seconds",
      "descriptionLv1": "Applies Accuracy 5UP to all allies for 10 seconds and Physical Attack 10%+20UP for 10 seconds",
      "descriptionLv90": "Applies Accuracy 9UP to all allies for 10 seconds and Physical Attack 10%+109UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv1",
        "Physical Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Lv1",
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
      "name": "Proud Maiden\u2019s Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals 10795 (ATK x 9.5 + 811) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "950% + 811",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Proud Maiden\u2019s Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals 13073 (ATK x 11.4 + 1092) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1140% + 1092",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Proud Maiden\u2019s Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals 14664 (ATK x 12.8 + 1212) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1280% + 1212",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Proud Maiden\u2019s Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals 15755 (ATK x 13.8 + 1252) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1380% + 1252",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Proud Maiden\u2019s Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals 16741 (ATK x 14.7 + 1292) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
      "effect": "1470% + 1292",
      "buffEffects": [
        {
          "name": "Blind",
          "value": -50,
          "type": "percent",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
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
  "name": "Elythia",
  "id": 2017,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 210,
    "MATK": 126,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "r-elythia"
};
