// Skills data for Bianca
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Cross Slash",
      "icon": "skill001/skill0002",
      "description": "Deals 2857 (ATK x 1.45 + 990) physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 472 (ATK x 1.45 + 100) physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2857 (ATK x 1.45 + 990) physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "145% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+10",
      "lvl1": "145% + 100",
      "lvl90": "145% + 990",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Paladin\u2019s Awakening",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack 20%+841UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "target": "Self",
      "castTime": 0.66,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Mind Type ATK + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type ATK + Lv3",
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
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_1",
      "description": "Deals 7912 (ATK x 5.6 + 700) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "560% + 700",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_2",
      "description": "Deals 10288 (ATK x 7.6 + 500) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "760% + 500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_3",
      "description": "Deals 12528 (ATK x 9.3 + 550) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "930% + 550",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_4",
      "description": "Deals 13737 (ATK x 10.2 + 600) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "1020% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_5",
      "description": "Deals 14976 (ATK x 11.1 + 680) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "1110% + 680",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
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
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Action Speed + (+15%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Mind Type ATK +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Mind Type ATK + (+10%), Block+ (+20)",
      "effectValues": [
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Bianca",
  "id": 2063,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 257,
    "MATK": 154,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "bianca"
};
