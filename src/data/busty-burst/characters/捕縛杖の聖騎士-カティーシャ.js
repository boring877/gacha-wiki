// Character data: 捕縛杖の聖騎士-カティーシャ
// Auto-generated from game data

export const info = {
  'slug': '捕縛杖の聖騎士-カティーシャ',
  'name': '捕縛杖の聖騎士: カティーシャ',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Stop your futile resistance!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, on activation,self6 Holy Type ATK 30%UP, state, +30%",
      "descriptionLv1": "Deals physical damage to the nearest enemy, on activation,self6 Holy Type ATK 30%UP, state, +30%",
      "descriptionLv90": "Deals physical damage to the nearest enemy, on activation,self6 Holy Type ATK 30%UP, state, +30%",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "300% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+20",
      "lvl1": "300% + 400",
      "lvl90": null,
      "effects": [
        "Holy Type ATK + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Holy Type ATK + LvMax",
          "value": 30,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "I am not sweet",
      "icon": "skill001/skill0019",
      "description": "3 nearest enemies10 Block-11 DOWN and Accuracy -11 DOWN for 10 seconds , self10 Physical Attack 20%+40 UP",
      "descriptionLv1": "3 nearest enemies10 Block-11 DOWN and Accuracy -11 DOWN for 10 seconds , self10 Physical Attack 20%+40 UP",
      "descriptionLv90": "3 nearest enemies10 Block-23 DOWN and Accuracy -23 DOWN for 10 seconds , self10 Physical Attack 20%+850 UP",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "Accuracy - Lv4",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 3s and Physical Defense DOWN(LV 1) for 10 seconds , 10 [](Speed15%DOWN, (cannot be removed))",
      "effect": "1100% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, inflict 4s and Physical Defense DOWN(LV 2) for 10 seconds , 10 [](Speed15%DOWN, (cannot be removed))",
      "effect": "1320% + 800",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, inflict 4s and Physical Defense DOWN(LV 3) for 10 seconds , 10 [](Speed15%DOWN, (cannot be removed))",
      "effect": "1470% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 4) for 10 seconds , 10 [](Speed15%DOWN, (cannot be removed))",
      "effect": "1590% + 1100",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 5) for 10 seconds , 10 [](Speed15%DOWN, (cannot be removed))",
      "effect": "1700% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Physical Critical Damage+ (+200%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "捕縛杖の聖騎士: カティーシャ",
  "id": 2237,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 361,
    "MATK": 217,
    "DEF": 143,
    "MDEF": 174
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "捕縛杖の聖騎士-カティーシャ"
};

export const stats = { 'id': '捕縛杖の聖騎士-カティーシャ' };
