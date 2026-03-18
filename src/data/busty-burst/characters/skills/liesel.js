// Skills data for Liesel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "We must make lots of delicious food!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 10%+109UP to all allies for 9 seconds and Magic Attack 10%+109UP for 9 seconds",
      "descriptionLv1": "Applies Physical Attack 10%+20UP to all allies for 9 seconds and Magic Attack 10%+20UP for 9 seconds",
      "descriptionLv90": "Applies Physical Attack 10%+109UP to all allies for 9 seconds and Magic Attack 10%+109UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv1",
        "Magic Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv1",
          "value": 20,
          "valueLv90": 109,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Magic Attack + Lv1",
          "value": 20,
          "valueLv90": 109,
          "type": "percent",
          "duration": 9
        }
      ],
      "duration": 9
    },
    {
      "slot": 3,
      "name": "You must be thirsty, right?",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 15%+189UP to all allies for 9 seconds and Magic Defense15%+189UP for 9 seconds",
      "descriptionLv1": "Applies Physical Defense 15%+100UP to all allies for 9 seconds and Magic Defense15%+100UP for 9 seconds",
      "descriptionLv90": "Applies Physical Defense 15%+189UP to all allies for 9 seconds and Magic Defense15%+189UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "valueLv90": 189,
          "type": "percent",
          "duration": 9
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 100,
          "valueLv90": 189,
          "type": "percent",
          "duration": 9
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_1",
      "description": "Applies MP Regeneration UP(LV1) to all allies for 5 seconds and Action Speed UP(LV1) for 8 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv1",
          "value": 25,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 8,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_2",
      "description": "Applies MP Regeneration UP(LV2) to all allies for 5 seconds and Action Speed UP(LV2) for 8 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv2",
          "value": 40,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_3",
      "description": "Applies MP Regeneration UP(LV3) to all allies for 5 seconds and Action Speed UP(LV3) for 8 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv3",
          "value": 45,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_4",
      "description": "Applies MP Regeneration UP(LV4) to all allies for 5 seconds and Action Speed UP(LV4) for 8 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv4",
          "value": 50,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_5",
      "description": "Applies MP Regeneration UP(LV5) to all allies for 5 seconds and Action Speed UP(LV5) for 8 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv5",
          "value": 55,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv5",
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
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1007",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Liesel",
  "id": 2035,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "MP Recovery (+100)"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 265,
    "MATK": 159,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "liesel"
};
