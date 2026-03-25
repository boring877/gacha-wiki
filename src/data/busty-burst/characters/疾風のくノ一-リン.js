// Character data: 疾風のくノ一-リン
// Auto-generated from game data

export const info = {
  'slug': '疾風のくノ一-リン',
  'name': '疾風のくノ一: リン',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shuriken Wild Dance",
      "icon": "skill001/skill0009",
      "description": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-13 DOWN for 6 seconds , [Clone] Lv when+50%",
      "descriptionLv1": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-13 DOWN for 6 seconds , [Clone] Lv when+50%",
      "descriptionLv90": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-26 DOWN for 6 seconds , [Clone] Lv when+50%",
      "target": "Nearest Enemy",
      "castTime": 0.7,
      "damageScaling": "125% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+6",
      "lvl1": "125% + 300",
      "lvl90": "125% + 286",
      "effects": [
        "Mind Type Damage Taken + Lv3",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
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
      "name": "Clone Jutsu",
      "icon": "skill001/skill0019",
      "description": "self10 Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds , 10 [Clone](by50%, 3)",
      "descriptionLv1": "self10 Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds , 10 [Clone](by50%, 3)",
      "descriptionLv90": "self10 Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds , 10 [Clone](by50%, 3)",
      "target": "Self",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Action Speed + Lv5",
        "Clone"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_1",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation,self10 Physical Attack UP(LV 1), [Clone], self10 [Clone][Clone] Lv when+50%, on Ultimate activation,self10 physical damageUP(LV 1)",
      "effect": "400% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_2",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation,self10 Physical Attack UP(LV 2), [Clone], self10 [Clone][Clone] Lv when+50%, on Ultimate activation,self10 physical damageUP(LV 2)",
      "effect": "470% + 750",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_3",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation,self10 Physical Attack UP(LV 3), [Clone], self10 [Clone][Clone] Lv when+50%, on Ultimate activation,self10 physical damageUP(LV 3)",
      "effect": "520% + 900",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_4",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation,self10 Physical Attack UP(LV 4), [Clone], self10 [Clone][Clone] Lv when+50%, on Ultimate activation,self10 physical damageUP(LV 4)",
      "effect": "560% + 1000",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_5",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation,self10 Physical Attack UP(LV 5), [Clone], self10 [Clone][Clone] Lv when+50%, on Ultimate activation,self10 physical damageUP(LV 5)",
      "effect": "580% + 1100",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "疾風のくノ一: リン",
  "id": 2228,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "弱體化"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 281,
    "MATK": 168,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "疾風のくノ一-リン"
};

export const stats = { 'id': '疾風のくノ一-リン' };
