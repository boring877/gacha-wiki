// Skills data for Veronica
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "This costs quite a bit, you know ",
      "icon": "skill001/skill0007",
      "description": "Deals 4772 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 12 seconds",
      "descriptionLv1": "Deals 686 (ATK x 2.4 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 12 seconds",
      "descriptionLv90": "Deals 4772 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-210DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + 1890",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -18,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "I\u2019m very fond of you ",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Critical Damage673UP to the 3 nearest allies for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage50UP to the 3 nearest allies for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage673UP to the 3 nearest allies for 12 seconds",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Attack 15%UP to all allies for 12 seconds and Physical Defense 15%+50UP for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 15,
          "flatValue": 50,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Attack 20%UP to all allies for 12 seconds and Physical Defense 20%+150UP for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv2",
          "value": 20,
          "flatValue": 150,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_3",
      "description": "Applies Physical Attack 24%UP to all allies for 12 seconds and Physical Defense 24%+200UP for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv3",
          "value": 24,
          "flatValue": 200,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_4",
      "description": "Applies Physical Attack 27%UP to all allies for 12 seconds and Physical Defense 27%+250UP for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv4",
          "value": 27,
          "flatValue": 250,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_5",
      "description": "Applies Physical Attack 30%UP to all allies for 12 seconds and Physical Defense 30%+300UP for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv5",
          "value": 30,
          "flatValue": 300,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
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
      "name": "Physical Attack +, Block+",
      "icon": "skill001/skill1007",
      "effect": "Physical Attack + (+130), Block+ (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Veronica",
  "id": 2037,
  "rarity": "SR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Debuff",
    "Buff"
  ],
  "baseStats": {
    "HP": 2055,
    "ATK": 240,
    "MATK": 144,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sr-veronica"
};
