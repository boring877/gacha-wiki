// Skills data for Frey
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Area Heal",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 4560 (4560) to all allies and inflicts HP Regeneration5%+773 for 3 seconds",
      "descriptionLv1": "Restores HP by 1000 (1000) to all allies and inflicts HP Regeneration5%+150 for 3 seconds",
      "descriptionLv90": "Restores HP by 4560 (4560) to all allies and inflicts HP Regeneration5%+773 for 3 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "2500% ATK",
      "baseDamage": "+1000",
      "levelGrowth": "+40",
      "lvl1": "2500% + 1000",
      "lvl90": "2500% + 4560",
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
    },
    {
      "slot": 3,
      "name": "Cam",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 4060 (4060) to all alliesand removes debuffs",
      "descriptionLv1": "Restores HP by 500 (500) to all alliesand removes debuffs",
      "descriptionLv90": "Restores HP by 4060 (4060) to all alliesand removes debuffs",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "1500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+40",
      "lvl1": "1500% + 500",
      "lvl90": "1500% + 4060",
      "effects": [
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ],
      "duration": null
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Gentle White Lily\u2019s Embrace",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1000 (1000) to all allies and inflicts Hit-Based Physical Healing Shield (LV1) for 20 seconds and Hit-Based Magic Healing Shield (LV1) for 20 seconds",
      "effect": "4000% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "Gentle White Lily\u2019s Embrace",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1500 (1500) to all allies and inflicts Hit-Based Physical Healing Shield (LV2) for 20 seconds and Hit-Based Magic Healing Shield (LV2) for 20 seconds",
      "effect": "4800% + 1500",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 3,
      "name": "Gentle White Lily\u2019s Embrace",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 2000 (2000) to all allies and inflicts Hit-Based Physical Healing Shield (LV3) for 20 seconds and Hit-Based Magic Healing Shield (LV3) for 20 seconds",
      "effect": "5500% + 2000",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv3",
          "value": 30,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv3",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 4,
      "name": "Gentle White Lily\u2019s Embrace",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 2300 (2300) to all allies and inflicts Hit-Based Physical Healing Shield (LV4) for 20 seconds and Hit-Based Magic Healing Shield (LV4) for 20 seconds",
      "effect": "6000% + 2300",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv4",
          "value": 35,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv4",
          "value": 35,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "Gentle White Lily\u2019s Embrace",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 2500 (2500) to all allies and inflicts Hit-Based Physical Healing Shield (LV5) for 20 seconds and Hit-Based Magic Healing Shield (LV5) for 20 seconds",
      "effect": "6500% + 2500",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+10%), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Frey",
  "id": 2051,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2588,
    "ATK": 253,
    "MATK": 151,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Basic \u2192 Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "frey"
};
