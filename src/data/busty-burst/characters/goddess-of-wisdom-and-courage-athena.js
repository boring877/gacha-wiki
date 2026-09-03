// Character data: goddess-of-wisdom-and-courage-athena
// Auto-generated from game data

export const info = {
  'slug': 'goddess-of-wisdom-and-courage-athena',
  'name': 'Goddess of Wisdom and Courage: Athena',
};





























export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Polycos",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds, 6s Block-13 DOWN",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds, 6s Block-13 DOWN",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-205 DOWN for 6 seconds and Magic Attack -11%-205 DOWN for 6 seconds, 6s Block-26 DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "380% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+20",
      "lvl1": "380% + 350",
      "lvl90": "380% + 336",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Paladion",
      "icon": "skill001/skill0025",
      "description": "Restores own HP by and inflicts Physical Defense 30%+190 UP for 12 seconds and Magic Defense 30%+190 UP for 12 seconds, all allies 12s Hit-Based Shield (40%+4 hit(s))",
      "descriptionLv1": "Restores own HP by and inflicts Physical Defense 30%+190 UP for 12 seconds and Magic Defense 30%+190 UP for 12 seconds, all allies 12s Hit-Based Shield (40%+4 hit(s))",
      "descriptionLv90": "Restores own HP by and inflicts Physical Defense 30%+460 UP for 12 seconds and Magic Defense 30%+460 UP for 12 seconds, all allies 12s Hit-Based Shield (40%+4 hit(s))",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": "2000% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+60",
      "lvl1": "2000% + 500",
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv5",
        "Magic Defense+ Lv5",
        "Hit-Based Shield"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv5",
          "value": 190,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Magic Defense+ Lv5",
          "value": 190,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Hit-Based Shield",
          "value": 40,
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
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 3s, 5s, 10s Physical Defense DOWN(LV 1)",
      "effect": "1400% + 800",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 4s, 6s, 10s Physical Defense DOWN(LV 2)",
      "effect": "1680% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 4s, 6s, 10s Physical Defense DOWN(LV 3)",
      "effect": "1889% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 5s, 7s, 10s Physical Defense DOWN(LV 4)",
      "effect": "2030% + 1350",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Bringing regret to the foolish with knowledge.",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 5s, 7s, 10s Physical Defense DOWN(LV 5)",
      "effect": "2100% + 1500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Damage UP, Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "description": "Gain Damage +UP (Cannot be Cleansed), Physical Defense UP (Cannot be Cleansed), Magic Defense UP (Cannot be Cleansed)",
      "effect": "Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent",
          "gameText": "Damage +UP (Cannot be Cleansed)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Physical Critical Damage UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Medium)"
        }
      ]
    }
  ],
  "name": "Goddess of Wisdom and Courage: Athena",
  "id": 2207,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Tank",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2069,
    "ATK": 166,
    "MATK": 100,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "goddess-of-wisdom-and-courage-athena"
};

export const stats = { 'id': 'goddess-of-wisdom-and-courage-athena' };
