// Skills data for 【Pious Healer】Ishtovia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "O God, drive away evil with Your pure light ",
      "icon": "skill001/skill0010",
      "description": "Deals 1839 (MATK x 1.0 + 574) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-200DOWN for 12 seconds and Magic Defense-18%+-210DOWN for 12 seconds",
      "descriptionLv1": "Deals 293 (MATK x 1.0 + 40) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-20DOWN for 12 seconds and Magic Defense-18%+-30DOWN for 12 seconds",
      "descriptionLv90": "Deals 1839 (MATK x 1.0 + 574) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-200DOWN for 12 seconds and Magic Defense-18%+-210DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+6",
      "lvl1": "100% + 40",
      "lvl90": "100% + 574",
      "effects": [
        "Magic Attack - Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -18,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "O God, save those possessed by darkness ",
      "icon": "skill001/skill0021",
      "description": "Restores HP by 3930 (3930) to all alliesand removes debuffs and inflicts Block23UP for 10 seconds",
      "descriptionLv1": "Restores HP by 370 (370) to all alliesand removes debuffs and inflicts Block11UP for 10 seconds",
      "descriptionLv90": "Restores HP by 3930 (3930) to all alliesand removes debuffs and inflicts Block23UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "1700% ATK",
      "baseDamage": "+370",
      "levelGrowth": "+40",
      "lvl1": "1700% + 370",
      "lvl90": "1700% + 3930",
      "effects": [
        "Block+ Lv4",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "valueLv1": 11,
          "valueLv90": 23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "valueLv1": 1,
          "valueLv90": 1,
          "type": "percent"
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 1239 (1239) to all allies and inflicts HP RegenerationUP(LV1) for 6 seconds and Hit-Based Magic Healing Shield (LV1) for 20 seconds",
      "effect": "2700% + 1239",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 1476 (1476) to all allies and inflicts HP RegenerationUP(LV2) for 6 seconds and Hit-Based Magic Healing Shield (LV2) for 20 seconds",
      "effect": "3105% + 1476",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 6
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
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 1606 (1606) to all allies and inflicts HP RegenerationUP(LV3) for 6 seconds and Hit-Based Magic Healing Shield (LV3) for 20 seconds",
      "effect": "3375% + 1606",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
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
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 1783 (1783) to all allies and inflicts HP RegenerationUP(LV4) for 6 seconds and Hit-Based Magic Healing Shield (LV4) for 20 seconds",
      "effect": "3645% + 1783",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 6
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
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 1960 (1960) to all allies and inflicts HP RegenerationUP(LV5) for 6 seconds and Hit-Based Magic Healing Shield (LV5) for 20 seconds",
      "effect": "3780% + 1960",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
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
      "name": "Magic Attack +, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
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
      "name": "Magic Defense+, Max HP +",
      "icon": "skill001/skill1007",
      "effect": "Magic Defense+ (+141), Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Pious Healer\u3011Ishtovia",
  "id": 2045,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 151,
    "MATK": 253,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "pious-cleric-ishtovia"
};
