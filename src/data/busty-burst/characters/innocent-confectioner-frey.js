// Character data: innocent-confectioner-frey
// Auto-generated from game data

export const info = {
  'slug': 'innocent-confectioner-frey',
  'name': 'Innocent Confectioner: Frey ',
};





























export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Take It!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 7 seconds and Accuracy -23 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "300% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "300% + 120",
      "lvl90": "300% + 108",
      "effects": [
        "Action Speed - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.13
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Yeah, That Feels Right!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 40 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "descriptionLv1": "Applies Magic Critical Damage 40 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "descriptionLv90": "Applies Magic Critical Damage 4180 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 5.0
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 0.1
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "May Everyone’s Feelings Reach…",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 1) for 20 secondsand BlockUP(LV 1) for 10 seconds",
      "effect": "3000% + 1000",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv1",
          "value": 40,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "May Everyone’s Feelings Reach…",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 2) for 20 secondsand BlockUP(LV 2) for 10 seconds",
      "effect": "3400% + 1300",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv2",
          "value": 45,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "May Everyone’s Feelings Reach…",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 3) for 20 secondsand BlockUP(LV 3) for 10 seconds",
      "effect": "3700% + 1500",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv3",
          "value": 50,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "May Everyone’s Feelings Reach…",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 4) for 20 secondsand BlockUP(LV 4) for 10 seconds",
      "effect": "4000% + 1600",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv4",
          "value": 55,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "May Everyone’s Feelings Reach…",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 5) for 20 secondsand BlockUP(LV 5) for 10 seconds",
      "effect": "4200% + 1700",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv5",
          "value": 60,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Accuracy +",
      "icon": "skill001/skill1007",
      "description": "Gain Max HP UP (Small), Accuracy UP (Small)",
      "effect": "Max HP + (+1447), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat",
          "gameText": "Max HP UP (Small)"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat",
          "gameText": "Accuracy UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "description": "Gain Skill Damage UP (Medium), Action Speed UP (Medium)",
      "effect": "Skill Damage + (+20%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent",
          "gameText": "Skill Damage UP (Medium)"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat",
          "gameText": "Action Speed UP (Medium)"
        }
      ]
    }
  ],
  "name": "Innocent Confectioner: Frey ",
  "id": 2109,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2926,
    "ATK": 291,
    "MATK": 174,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "innocent-confectioner-frey"
};

export const stats = { 'id': 'innocent-confectioner-frey' };
