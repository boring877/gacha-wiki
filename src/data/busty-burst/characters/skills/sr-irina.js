// Skills data for Irina
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Punishment for the servants of the demon",
      "icon": "skill001/skill0008",
      "description": "Deals 4615 (MATK x 2.1 + 1890) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-203DOWN for 10 seconds",
      "descriptionLv1": "Deals 653 (MATK x 2.1 + 110) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-25DOWN for 10 seconds",
      "descriptionLv90": "Deals 4615 (MATK x 2.1 + 1890) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-203DOWN for 10 seconds",
      "target": "Enemy with Highest Physical ATK",
      "castTime": 1.58,
      "damageScaling": "210% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "210% + 110",
      "lvl90": "210% + 1890",
      "effects": [
        "Physical Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -11,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Blessing to the brave",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 6192 (6192) to the ally with the lowest HP6192 (6192) and inflicts HP Regeneration5%+773 for 3 seconds",
      "descriptionLv1": "Restores HP by 852 (852) to the ally with the lowest HP852 (852) and inflicts HP Regeneration5%+150 for 3 seconds",
      "descriptionLv90": "Restores HP by 6192 (6192) to the ally with the lowest HP6192 (6192) and inflicts HP Regeneration5%+773 for 3 seconds",
      "target": "\u6211\u65b9HP\u6700\u4f4e",
      "castTime": 1.58,
      "damageScaling": "3000% ATK",
      "baseDamage": "+852",
      "levelGrowth": "+60",
      "lvl1": "3000% + 852",
      "lvl90": "3000% + 6192",
      "effects": [
        "HP Regeneration+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 788 (788) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "2600% + 788",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 842 (842) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3000% + 842",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 910 (910) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3250% + 910",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 962 (962) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3500% + 962",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 1008 (1008) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
      "effect": "3640% + 1008",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0.3,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Irina",
  "id": 2014,
  "rarity": "SR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Debuff",
    "Heal",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2001,
    "ATK": 156,
    "MATK": 259,
    "DEF": 83,
    "MDEF": 208
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-irina"
};
