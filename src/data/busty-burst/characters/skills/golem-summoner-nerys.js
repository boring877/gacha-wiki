// Skills data for 【Messenger of Stone Soldiers】Nerys
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rage of the Giant Rock Soldier",
      "icon": "skill001/skill0007",
      "description": "Deals 2198 (ATK x 1.1 + 752) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv1": "Deals 329 (ATK x 1.1 + 40) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv90": "Deals 2198 (ATK x 1.1 + 752) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+8",
      "lvl1": "110% + 40",
      "lvl90": "110% + 752",
      "effects": [
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Guardian of the Giant Rock Soldier",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
      "descriptionLv1": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
      "descriptionLv90": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Healing Shield Lv4",
        "Magic Healing Shield Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Healing Shield Lv4",
          "value": 350,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Healing Shield Lv4",
          "value": 350,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_1",
      "description": "Deals 12755 (ATK x 9.0 + 920) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds and Magic Attack DOWN(LV1) for 10 seconds",
      "effect": "900% + 920",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_2",
      "description": "Deals 15152 (ATK x 10.8 + 950) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds and Magic Attack DOWN(LV2) for 10 seconds",
      "effect": "1080% + 950",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_3",
      "description": "Deals 17111 (ATK x 12.1 + 1200) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds and Magic Attack DOWN(LV3) for 10 seconds",
      "effect": "1210% + 1200",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_4",
      "description": "Deals 18395 (ATK x 13.0 + 1300) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds and Magic Attack DOWN(LV4) for 10 seconds",
      "effect": "1300% + 1300",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_5",
      "description": "Deals 19678 (ATK x 13.9 + 1400) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds and Magic Attack DOWN(LV5) for 10 seconds",
      "effect": "1390% + 1400",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Defense+, Max HP +",
      "icon": "skill001/skill1002",
      "effect": "Magic Defense+ (+141), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Magic Defense+",
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
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Physical Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Messenger of Stone Soldiers\u3011Nerys",
  "id": 2042,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2965,
    "ATK": 263,
    "MATK": 158,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "golem-summoner-nerys"
};
