// Skills data for Pastel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Abstract Art: Endless Desire",
      "icon": "skill001/skill0011",
      "description": "Deals 2057 (ATK x 0.8 + 604) physical damage to the 3 nearest enemies and inflicts Burn(HP --1485 per second) for 12 seconds and Accuracy -26DOWN for 8 seconds",
      "descriptionLv1": "Deals 360 (ATK x 0.8 + 70) physical damage to the 3 nearest enemies and inflicts Burn(HP --150 per second) for 12 seconds and Accuracy -13DOWN for 8 seconds",
      "descriptionLv90": "Deals 2057 (ATK x 0.8 + 604) physical damage to the 3 nearest enemies and inflicts Burn(HP --1485 per second) for 12 seconds and Accuracy -26DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "80% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "80% + 70",
      "lvl90": "80% + 604",
      "effects": [
        "Burn Lv5",
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Winterscape: Towering Glacier",
      "icon": "skill001/skill0019",
      "description": "Applies Block +9 (+0.1/lv) to all allies for 8 seconds and Healing Shield (295 +25/lv HP) for 15 seconds",
      "descriptionLv1": "Applies Block +9 to all allies for 8 seconds and Healing Shield (295 HP) for 15 seconds",
      "descriptionLv90": "Applies Block +18 to all allies for 8 seconds and Healing Shield (2520 HP) for 15 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseValue": "+295",
      "levelGrowth": "+25",
      "lvl1": "295",
      "lvl90": "2520",
      "effects": [
        "Block+ Lv3",
        "Healing Shield Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Healing Shield Lv4",
          "value": 2520,
          "type": "flat",
          "duration": 15
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_1",
      "description": "Deals 4892 (ATK x 2.5 + 350) physical damage to all enemies and inflicts Silence for 3 seconds, and inflicts HP RegenerationUP(LV1) to all allies for 8 seconds",
      "effect": "250% + 350",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_2",
      "description": "Deals 6446 (ATK x 3.3 + 450) physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV2) to all allies for 8 seconds",
      "effect": "330% + 450",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_3",
      "description": "Deals 7798 (ATK x 4.0 + 530) physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV3) to all allies for 8 seconds",
      "effect": "400% + 530",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_4",
      "description": "Deals 8776 (ATK x 4.5 + 600) physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV4) to all allies for 8 seconds",
      "effect": "450% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Painting: Primavera",
      "icon": "skill001/skill0012_5",
      "description": "Deals 9735 (ATK x 5.0 + 650) physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV5) to all allies for 8 seconds",
      "effect": "500% + 650",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Debuff Resistance +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Debuff Resistance + (+0.15%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Debuff Resistance +",
          "value": 0.15,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Pastel",
  "id": 2080,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 363,
    "MATK": 218,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "pastel"
};
