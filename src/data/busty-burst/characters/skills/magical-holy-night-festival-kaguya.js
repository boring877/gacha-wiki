// Skills data for 【Magical Holy Night Festival】Kaguya
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Someone is waiting for me.",
      "icon": "skill001/skill0007",
      "description": "Deals 2068 (ATK x 1.3 + 723) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -23DOWN for 7 seconds",
      "descriptionLv1": "Deals 369 (ATK x 1.3 + 100) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -11DOWN for 7 seconds",
      "descriptionLv90": "Deals 2068 (ATK x 1.3 + 723) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -23DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "130% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+7",
      "lvl1": "130% + 100",
      "lvl90": "130% + 723",
      "effects": [
        "Action Speed - Lv3",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Please\u2026 just for tonight.",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Healing Shield (30%+, restores , 3569 hit(s)) to self for 15 seconds and Block26UP for 15 seconds",
      "descriptionLv1": "Applies Hit-Based Healing Shield (30%+, restores , 9 hit(s)) to self for 15 seconds and Block13UP for 15 seconds",
      "descriptionLv90": "Applies Hit-Based Healing Shield (30%+, restores , 3569 hit(s)) to self for 15 seconds and Block26UP for 15 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Healing Shield Lv5",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Healing Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 15
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1500 (1500) to all allies and inflicts Physical Defense UP(LV1) for 10 seconds and Magic DefenseUP(LV1) for 10 seconds",
      "effect": "2600% + 1500",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1800 (1800) to all allies and inflicts Physical Defense UP(LV2) for 10 seconds and Magic DefenseUP(LV2) for 10 seconds",
      "effect": "3000% + 1800",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 2000 (2000) to all allies and inflicts Physical Defense UP(LV3) for 10 seconds and Magic DefenseUP(LV3) for 10 seconds",
      "effect": "3250% + 2000",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv3",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 2100 (2100) to all allies and inflicts Physical Defense UP(LV4) for 10 seconds and Magic DefenseUP(LV4) for 10 seconds",
      "effect": "3500% + 2100",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv4",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 2200 (2200) to all allies and inflicts Physical Defense UP(LV5) for 10 seconds and Magic DefenseUP(LV5) for 10 seconds",
      "effect": "3700% + 2200",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Healing Amount + (+15%), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
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
    }
  ],
  "name": "\u3010Magical Holy Night Festival\u3011Kaguya",
  "id": 2096,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2369,
    "ATK": 207,
    "MATK": 124,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "magical-holy-night-festival-kaguya"
};
