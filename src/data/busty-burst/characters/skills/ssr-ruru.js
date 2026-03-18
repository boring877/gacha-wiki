// Skills data for Ruru
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Blooming Flowers",
      "icon": "skill001/skill0007",
      "description": "Deals 2418 (ATK x 1.0 + 812) physical damage to the 3 nearest enemies and inflicts Block-23DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
      "descriptionLv1": "Deals 421 (ATK x 1.0 + 100) physical damage to the 3 nearest enemies and inflicts Block-11DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
      "descriptionLv90": "Deals 2418 (ATK x 1.0 + 812) physical damage to the 3 nearest enemies and inflicts Block-23DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "100% + 100",
      "lvl90": "100% + 812",
      "effects": [
        "Block- Lv4",
        "MP Recovery"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -23,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "valueLv1": 30,
          "valueLv90": 30,
          "type": "flat"
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Fragrant Blossoms",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
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
      "name": "A Charming Maiden \u2014 Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_1",
      "description": "Deals 8630 (ATK x 5.0 + 600) physical damage to all enemies and inflicts Wind Type ATK UP(LV1) for 5 secondsand when defeating an enemy, gain MP Recovery40.",
      "effect": "500% + 600",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv1",
          "value": 40,
          "type": "flat"
        }
      ]
    },
    {
      "rank": 2,
      "name": "A Charming Maiden \u2014 Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_2",
      "description": "Deals 12042 (ATK x 7.0 + 800) physical damage to all enemies and inflicts Wind Type ATK UP(LV2) for 6 secondsand when defeating an enemy, gain MP Recovery50.",
      "effect": "700% + 800",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv2",
          "value": 50,
          "type": "flat"
        }
      ]
    },
    {
      "rank": 3,
      "name": "A Charming Maiden \u2014 Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_3",
      "description": "Deals 14551 (ATK x 8.5 + 900) physical damage to all enemies and inflicts Wind Type ATK UP(LV3) for 6 secondsand when defeating an enemy, gain MP Recovery60.",
      "effect": "850% + 900",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv3",
          "value": 60,
          "type": "flat"
        }
      ]
    },
    {
      "rank": 4,
      "name": "A Charming Maiden \u2014 Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_4",
      "description": "Deals 16257 (ATK x 9.5 + 1000) physical damage to all enemies and inflicts Wind Type ATK UP(LV4) for 7 secondsand when defeating an enemy, gain MP Recovery70.",
      "effect": "950% + 1000",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv4",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "rank": 5,
      "name": "A Charming Maiden \u2014 Wrapped in Breeze, Surrounded by Blossoms",
      "icon": "skill001/skill0003_5",
      "description": "Deals 17160 (ATK x 10.0 + 1100) physical damage to all enemies and inflicts Wind Type ATK UP(LV5) for 7 secondsand when defeating an enemy, gain MP Recovery80.",
      "effect": "1000% + 1100",
      "buffEffects": [
        {
          "name": "Wind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv5",
          "value": 80,
          "type": "flat"
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ruru",
  "id": 2098,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1819,
    "ATK": 321,
    "MATK": 192,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-ruru"
};
