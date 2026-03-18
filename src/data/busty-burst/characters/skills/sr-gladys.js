// Skills data for Gladys
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Armor-Breaker Slash",
      "icon": "skill001/skill0002",
      "description": "Deals 5674 (ATK x 2.76 + 1885) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+658UP to self for 6 seconds",
      "descriptionLv1": "Deals 861 (ATK x 2.76 + 105) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+35UP to self for 6 seconds",
      "descriptionLv90": "Deals 5674 (ATK x 2.76 + 1885) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+658UP to self for 6 seconds",
      "target": "Enemy with Lowest HP",
      "castTime": 1.08,
      "damageScaling": "276% ATK",
      "baseDamage": "+105",
      "levelGrowth": "+20",
      "lvl1": "276% + 105",
      "lvl90": "276% + 1885",
      "effects": [
        "Physical Attack + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 18,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Charging Slash",
      "icon": "skill001/skill0009",
      "description": "Deals 4883 (ATK x 2.2 + 1863) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-220DOWN for 10 seconds",
      "descriptionLv1": "Deals 685 (ATK x 2.2 + 83) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-40DOWN for 10 seconds",
      "descriptionLv90": "Deals 4883 (ATK x 2.2 + 1863) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-220DOWN for 10 seconds",
      "target": "Enemy with Lowest HP",
      "castTime": 1.08,
      "damageScaling": "220% ATK",
      "baseDamage": "+83",
      "levelGrowth": "+20",
      "lvl1": "220% + 83",
      "lvl90": "220% + 1863",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
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
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_1",
      "description": "Deals 15373 (ATK x 10.6 + 820) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
      "effect": "1060% + 820",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_2",
      "description": "Deals 18371 (ATK x 12.7 + 934) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
      "effect": "1270% + 934",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_3",
      "description": "Deals 20659 (ATK x 14.3 + 1026) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
      "effect": "1430% + 1026",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_4",
      "description": "Deals 22290 (ATK x 15.37 + 1187) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
      "effect": "1537% + 1187",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_5",
      "description": "Deals 23825 (ATK x 16.43 + 1267) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
      "effect": "1643% + 1267",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Physical Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
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
  "name": "Gladys",
  "id": 2005,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 274,
    "MATK": 164,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "sr-gladys"
};
