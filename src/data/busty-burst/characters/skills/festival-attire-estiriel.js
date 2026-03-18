// Skills data for 【Festive Attire】Estiriel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Ripples of the Abyss",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 3930 (3930) to all allies and inflicts Physical Defense 15%+189UP for 8 seconds and Magic Defense15%+189UP for 8 seconds",
      "descriptionLv1": "Restores HP by 370 (370) to all allies and inflicts Physical Defense 15%+100UP for 8 seconds and Magic Defense15%+100UP for 8 seconds",
      "descriptionLv90": "Restores HP by 3930 (3930) to all allies and inflicts Physical Defense 15%+189UP for 8 seconds and Magic Defense15%+189UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "2000% ATK",
      "baseDamage": "+370",
      "levelGrowth": "+40",
      "lvl1": "2000% + 370",
      "lvl90": "2000% + 3930",
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Slumber of the Seashell",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 18UP for 6 seconds",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 9UP for 6 seconds",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 18UP for 6 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Spirits, sing\u2014offer blessings for this new birth",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1200 (1200) to all allies and inflicts Debuff Resistance UP(LV1) for 7 seconds and BlockUP(LV1) for 7 seconds",
      "effect": "2700% + 1200",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv1",
          "value": 0.3,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Spirits, sing\u2014offer blessings for this new birth",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1400 (1400) to all allies and inflicts Debuff Resistance UP(LV2) for 7 seconds and BlockUP(LV2) for 7 seconds",
      "effect": "3100% + 1400",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv2",
          "value": 0.4,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Spirits, sing\u2014offer blessings for this new birth",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 1600 (1600) to all allies and inflicts Debuff Resistance UP(LV3) for 7 seconds and BlockUP(LV3) for 7 seconds",
      "effect": "3250% + 1600",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv3",
          "value": 0.5,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Spirits, sing\u2014offer blessings for this new birth",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 1750 (1750) to all allies and inflicts Debuff Resistance UP(LV4) for 7 seconds and BlockUP(LV4) for 7 seconds",
      "effect": "3500% + 1750",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv4",
          "value": 0.55,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Spirits, sing\u2014offer blessings for this new birth",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 1900 (1900) to all allies and inflicts Debuff Resistance UP(LV5) for 7 seconds and BlockUP(LV5) for 7 seconds",
      "effect": "3650% + 1900",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv5",
          "value": 0.6,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Debuff Resistance +",
      "icon": "skill001/skill1004",
      "effect": "Action Speed + (+15%), Debuff Resistance + (+0.3%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Debuff Resistance +",
          "value": 0.3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Max HP + (+1447), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Festive Attire\u3011Estiriel",
  "id": 2069,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "HP": 3352,
    "ATK": 151,
    "MATK": 253,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "festival-attire-estiriel"
};
