// Skills data for Natasha
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shield Bash",
      "icon": "skill001/skill0011",
      "description": "Deals 5077 (ATK x 3.5 + 1910) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "descriptionLv1": "Deals 763 (ATK x 3.5 + 130) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "descriptionLv90": "Deals 5077 (ATK x 3.5 + 1910) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+130",
      "levelGrowth": "+20",
      "lvl1": "350% + 130",
      "lvl90": "350% + 1910",
      "effects": [
        "Stun",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2.5
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 2.5
    },
    {
      "slot": 3,
      "name": "Solid Defense",
      "icon": "skill001/skill0015",
      "description": "Applies Physical Defense 40%+556UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Physical Defense 40%+200UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Physical Defense 40%+556UP to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + LvMax",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + LvMax",
          "value": 40,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV1) to self for 15 seconds\u3001Physical Shield(LV1)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv1",
          "value": 250,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Reflect Shield(LV2) to self for 15 seconds\u3001Physical Shield(LV2)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv2",
          "value": 350,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_3",
      "description": "Applies Physical Reflect Shield(LV3) to self for 15 seconds\u3001Physical Shield(LV3)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv3",
          "value": 400,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_4",
      "description": "Applies Physical Reflect Shield(LV4) to self for 15 seconds\u3001Physical Shield(LV4)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv4",
          "value": 450,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_5",
      "description": "Applies Physical Reflect Shield(LV5) to self for 15 seconds\u3001Physical Shield(LV5)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv5",
          "value": 500,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Max HP +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+141), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Healing Received +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+211), Healing Received + (+30%)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        },
        {
          "name": "Healing Received +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Natasha",
  "id": 2064,
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 181,
    "MATK": 108,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "natasha"
};
