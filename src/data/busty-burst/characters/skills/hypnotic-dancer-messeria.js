// Skills data for 【Trance Dancer】Messeria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Londo of Light",
      "icon": "skill001/skill0007",
      "description": "Deals 1579 (ATK x 0.9 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-220DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
      "descriptionLv1": "Deals 248 (ATK x 0.9 + 50) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-40DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
      "descriptionLv90": "Deals 1579 (ATK x 0.9 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-220DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "90% + 50",
      "lvl90": "90% + 584",
      "effects": [
        "Physical Defense - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -21,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Dancing Performance",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 15%+475UP to all allies for 10 seconds and Physical Critical Damage485UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 15%+30UP to all allies for 10 seconds and Physical Critical Damage40UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 15%+475UP to all allies for 10 seconds and Physical Critical Damage485UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Physical Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1097 (1097) to all allies and inflicts Action Speed UP(LV1) for 12 seconds and BlockUP(LV1) for 12 seconds",
      "effect": "2000% + 1097",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1250 (1250) to all allies and inflicts Action Speed UP(LV2) for 12 seconds and BlockUP(LV2) for 12 seconds",
      "effect": "2300% + 1250",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 1394 (1394) to all allies and inflicts Action Speed UP(LV3) for 12 seconds and BlockUP(LV3) for 12 seconds",
      "effect": "2500% + 1394",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 1489 (1489) to all allies and inflicts Action Speed UP(LV4) for 12 seconds and BlockUP(LV4) for 12 seconds",
      "effect": "2700% + 1489",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 1563 (1563) to all allies and inflicts Action Speed UP(LV5) for 12 seconds and BlockUP(LV5) for 12 seconds",
      "effect": "2800% + 1563",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Action Speed +",
      "icon": "skill001/skill1007",
      "effect": "Block+ (+10), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Trance Dancer\u3011Messeria",
  "id": 2044,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1913,
    "ATK": 221,
    "MATK": 132,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "hypnotic-dancer-messeria"
};
