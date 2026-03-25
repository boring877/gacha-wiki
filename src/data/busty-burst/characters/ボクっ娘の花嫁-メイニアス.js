// Character data: ボクっ娘の花嫁-メイニアス
// Auto-generated from game data

export const info = {
  'slug': 'ボクっ娘の花嫁-メイニアス',
  'name': 'ボクっ娘の花嫁: メイニアス',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ぐるぐる～！",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.7,
      "damageScaling": "330% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+15",
      "lvl1": "330% + 200",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv3",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Hey hey, does it suit me?",
      "icon": "skill001/skill0019",
      "description": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies10 Physical Defense -14%-20 DOWN",
      "descriptionLv1": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies10 Physical Defense -14%-20 DOWN",
      "descriptionLv90": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies10 Physical Defense -14%-110 DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Regeneration + Lv5",
        "Physical Defense - Lv2"
      ],
      "buffEffects": [
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Physical Defense - Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 1) for 20 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "1200% + 500",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 2) for 20 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "1440% + 600",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 3) for 20 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "1620% + 700",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv3",
          "value": -2400,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 4) for 20 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "1739% + 750",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv4",
          "value": -2700,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 5) for 20 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "1800% + 800",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv5",
          "value": -3000,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Action Speed + (+5)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 5,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "ボクっ娘の花嫁: メイニアス",
  "id": 2227,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 203,
    "MATK": 121,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "ボクっ娘の花嫁-メイニアス"
};

export const stats = { 'id': 'ボクっ娘の花嫁-メイニアス' };
