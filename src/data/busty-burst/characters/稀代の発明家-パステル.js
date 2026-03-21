// Character data: 稀代の発明家-パステル
// Auto-generated from game data

export const info = {
  'slug': '稀代の発明家-パステル',
  'name': '稀代の発明家: パステル',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ギガドリルアトミックパンチ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to 1 nearest enemy, 6'sBlock-15 DOWN",
      "descriptionLv1": "Deals physical damage to 1 nearest enemy, 6'sBlock-15 DOWN",
      "descriptionLv90": "Deals physical damage to 1 nearest enemy, 6'sBlock-33 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": "330% + 482",
      "effects": [
        "Block- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block- LvMax",
          "value": -15,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.2
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Limiter Release",
      "icon": "skill001/skill0019",
      "description": "self12'sPhysical Attack +40 UP, 12'sAction Speed UP, 12'sMP Regeneration 40, 12 after3's",
      "descriptionLv1": "self12'sPhysical Attack +40 UP, 12'sAction Speed UP, 12'sMP Regeneration 40, 12 after3's",
      "descriptionLv90": "self12'sPhysical Attack +850 UP, 12'sAction Speed UP, 12'sMP Regeneration 40, 12 after3's",
      "target": "Self",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Action Speed + LvMax",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + LvMax",
          "value": 25,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "MP Regeneration + Lv5",
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
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to 6 nearest enemies, 10'sPhysical Defense DOWN(LV 1), self10'sPhysical Critical DamageUP(LV 1)",
      "effect": "229% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "ギガドリルアトミックパンチ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to 1 nearest enemy, 6'sBlock-15 DOWN",
      "effect": "330% + 500",
      "buffEffects": [
        {
          "name": "Block- LvMax",
          "value": -15,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Limiter Release",
      "icon": "skill001/skill0019",
      "description": "self12'sPhysical Attack +40 UP, 12'sAction Speed UP, 12'sMP Regeneration 40, 12 after3's",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Action Speed + LvMax",
          "value": 25,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to 6 nearest enemies, 10'sPhysical Defense DOWN(LV 1), self10'sPhysical Critical DamageUP(LV 1)",
      "effect": "229% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to 6 nearest enemies, 10'sPhysical Defense DOWN(LV 2), self10'sPhysical Critical DamageUP(LV 2)",
      "effect": "270% + 650",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Wind Type ATK +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Wind Type ATK + (+4%)",
      "effectValues": [
        {
          "name": "Wind Type ATK +",
          "value": 4,
          "type": "percent"
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
  "name": "稀代の発明家: パステル",
  "id": 2238,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "弱體化、MP回復"
  ],
  "baseStats": {
    "HP": 1200,
    "ATK": 401,
    "MATK": 241,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.15"
  },
  "slug": "稀代の発明家-パステル"
};

export const stats = { 'id': '稀代の発明家-パステル' };
