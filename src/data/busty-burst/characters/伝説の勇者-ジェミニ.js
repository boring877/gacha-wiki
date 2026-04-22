// Character data: 伝説の勇者-ジェミニ
// Auto-generated from game data

export const info = {
  'slug': '伝説の勇者-ジェミニ',
  'name': '伝説の勇者: ジェミニ',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "アチィスギィ",
      "icon": "skill001/skill0005",
      "description": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 20 seconds",
      "descriptionLv1": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 20 seconds",
      "descriptionLv90": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-320 DOWN for 6 seconds and Burn(HP --1500 per second) for 20 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "105% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "105% + 150",
      "lvl90": "105% + -1185",
      "effects": [
        "Magic Defense- Lv5",
        "Burn Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -15.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "イェスル",
      "icon": "skill001/skill0021",
      "description": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "descriptionLv1": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "descriptionLv90": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "target": "Nearest Ally",
      "castTime": 1.3,
      "damageScaling": "800% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "800% + 200",
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv2",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv2",
          "value": 4,
          "type": "percent",
          "duration": 4,
          "levelGrowth": 6.0
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 0
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to 5 nearest enemies, inflict 3s , on Ultimate activation,self10 Magic Attack UP(LV 1), 10 Magic Critical DamageUP(LV 1)",
      "effect": "200% + 300",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to 5 nearest enemies, inflict 4s , on Ultimate activation,self10 Magic Attack UP(LV 2), 10 Magic Critical DamageUP(LV 2)",
      "effect": "240% + 350",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 325,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to 5 nearest enemies, inflict 4s , on Ultimate activation,self10 Magic Attack UP(LV 3), 10 Magic Critical DamageUP(LV 3)",
      "effect": "265% + 390",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv3",
          "value": 400,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to 5 nearest enemies, inflict 5s , on Ultimate activation,self10 Magic Attack UP(LV 4), 10 Magic Critical DamageUP(LV 4)",
      "effect": "290% + 420",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv4",
          "value": 450,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to 5 nearest enemies, inflict 5s , on Ultimate activation,self10 Magic Attack UP(LV 5), 10 Magic Critical DamageUP(LV 5)",
      "effect": "310% + 450",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv5",
          "value": 500,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Holy Type ATK +, Healing Received +",
      "icon": "skill001/skill1007",
      "effect": "Holy Type ATK + (+10%), Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Holy Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "伝説の勇者: ジェミニ",
  "id": 2233,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "回復、弱體化、妨害、デバフ解除"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 232,
    "MATK": 386,
    "DEF": 100,
    "MDEF": 100
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "伝説の勇者-ジェミニ"
};

export const stats = { 'id': '伝説の勇者-ジェミニ' };
