// Skills data for Roxanne
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Skillet Smash",
      "icon": "skill001/skill0011",
      "description": "Deals 3863 (ATK x 2.33 + 1494) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv1": "Deals 542 (ATK x 2.33 + 70) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv90": "Deals 3863 (ATK x 2.33 + 1494) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "233% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+16",
      "lvl1": "233% + 70",
      "lvl90": "233% + 1494",
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Come Drink Some Milk",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 5102 (5102) to the ally with the lowest HP",
      "descriptionLv1": "Restores HP by 652 (652) to the ally with the lowest HP",
      "descriptionLv90": "Restores HP by 5102 (5102) to the ally with the lowest HP",
      "target": "\u6211\u65b9HP\u6700\u4f4e",
      "castTime": 1.38,
      "damageScaling": "3100% ATK",
      "baseDamage": "+652",
      "levelGrowth": "+50",
      "lvl1": "3100% + 652",
      "lvl90": "3100% + 5102",
      "effects": null,
      "buffEffects": null,
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Roxanne\u2019s Special Thick Soup",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1712 (1712) to the 3 nearest allies and inflicts Physical Attack UP(LV1) for 10 seconds",
      "effect": "1800% + 1712",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Roxanne\u2019s Special Thick Soup",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1833 (1833) to the 3 nearest allies and inflicts Physical Attack UP(LV2) for 10 seconds",
      "effect": "2150% + 1833",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Roxanne\u2019s Special Thick Soup",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 1945 (1945) to the 3 nearest allies and inflicts Physical Attack UP(LV3) for 10 seconds",
      "effect": "2400% + 1945",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Roxanne\u2019s Special Thick Soup",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 2056 (2056) to the 3 nearest allies and inflicts Physical Attack UP(LV4) for 10 seconds",
      "effect": "2600% + 2056",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Roxanne\u2019s Special Thick Soup",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 2134 (2134) to the 3 nearest allies and inflicts Physical Attack UP(LV5) for 10 seconds",
      "effect": "2750% + 2134",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
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
    },
    {
      "slot": 2,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+10%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Roxanne",
  "id": 2003,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2578,
    "ATK": 203,
    "MATK": 122,
    "DEF": 56,
    "MDEF": 22
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "r-roxanne"
};
