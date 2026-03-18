// Skills data for Rosalyn
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Princess Pirate\u2019s Strike",
      "icon": "skill001/skill0007",
      "description": "Deals 4289 (ATK x 2.65 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 8 seconds",
      "descriptionLv1": "Deals 636 (ATK x 2.65 + 80) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 8 seconds",
      "descriptionLv90": "Deals 4289 (ATK x 2.65 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "265% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+16",
      "lvl1": "265% + 80",
      "lvl90": "265% + 1504",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Women are full of love and mystery, you know ",
      "icon": "skill001/skill0019",
      "description": "Applies Block9UP to all allies for 10 seconds and Physical Defense 10%+139UP for 10 seconds",
      "descriptionLv1": "Applies Block5UP to all allies for 10 seconds and Physical Defense 10%+50UP for 10 seconds",
      "descriptionLv90": "Applies Block9UP to all allies for 10 seconds and Physical Defense 10%+139UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv1",
        "Physical Defense + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv1",
          "value": 5,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv1",
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
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_1",
      "description": "Deals 3524 (ATK x 3.1 + 266) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "310% + 266",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_2",
      "description": "Deals 4195 (ATK x 3.7 + 307) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "370% + 307",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_3",
      "description": "Deals 4718 (ATK x 4.16 + 346) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "416% + 346",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_4",
      "description": "Deals 5076 (ATK x 4.47 + 379) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "447% + 379",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Let me punish you ",
      "icon": "skill001/skill0012_5",
      "description": "Deals 5425 (ATK x 4.78 + 402) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
      "effect": "478% + 402",
      "buffEffects": [
        {
          "name": "Stun",
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
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
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
  "name": "Rosalyn",
  "id": 2011,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1452,
    "ATK": 210,
    "MATK": 126,
    "DEF": 199,
    "MDEF": 79
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "r-rosalyn"
};
