// Character data: captain-of-the-vern-holy-knights-order-frigis
// Auto-generated from game data

export const info = {
  'slug': 'captain-of-the-vern-holy-knights-order-frigis',
  'name': 'Captain of the Vern Holy Knights Order】Frigis',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Should I be gentler?",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "300% + 300",
      "lvl90": "300% + 2525",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Are we continuing?",
      "icon": "skill001/skill0011",
      "description": "1 enemies15 [Intimidation](treated as, Block-20%, -20%), 15 Physical Critical Damage-15%-40 DOWN, 15 Magic Critical Damage-15%-40 DOWN",
      "descriptionLv1": "1 enemies15 [Intimidation](treated as, Block-20%, -20%), 15 Physical Critical Damage-15%-40 DOWN, 15 Magic Critical Damage-15%-40 DOWN",
      "descriptionLv90": "1 enemies15 [Intimidation](treated as, Block-20%, -20%), 15 Physical Critical Damage-15%-310 DOWN, 15 Magic Critical Damage-15%-40 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Intimidation",
        "Physical Critical Damage- Lv5",
        "Magic Critical Damage- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Intimidation",
          "value": 0,
          "type": "unknown",
          "duration": 15
        },
        {
          "name": "Physical Critical Damage- Lv5",
          "value": -15,
          "type": "percent",
          "duration": 15,
          "levelGrowth": -3.0
        },
        {
          "name": "Magic Critical Damage- Lv5",
          "value": -40,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -3.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict 5s , apply to self10 [Haste](Speed10%UP), enemies haveIntimidation,, Ultimate activation beforeapply to self10 damageUP(LV 1)",
      "effect": "1000% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Haste Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict6s Silence for, apply to self10 [Haste](Speed13%UP), enemies haveIntimidation, Ultimate activation beforeapply to self10 damageUP(LV 2)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Haste Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict6s Silence for, apply to self10 [Haste](Speed16%UP), enemies haveIntimidation, Ultimate activation beforeapply to self10 damageUP(LV 3)",
      "effect": "1350% + 1380",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Haste Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict7s Silence for, apply to self10 [Haste](Speed18%UP), enemies haveIntimidation, Ultimate activation beforeapply to self10 damageUP(LV 4)",
      "effect": "1450% + 1500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Haste Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, inflict7s Silence for, apply to self10 [Haste](Speed20%UP), enemies haveIntimidation, Ultimate activation beforeapply to self10 damageUP(LV 5)",
      "effect": "1500% + 1600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Haste Lv5",
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
      "name": "Skill Damage +, Skill Enhancement",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Captain of the Vern Holy Knights Order】Frigis",
  "id": 2164,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1573,
    "ATK": 437,
    "MATK": 262,
    "DEF": 176,
    "MDEF": 176
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "captain-of-the-vern-holy-knights-order-frigis"
};

export const stats = { 'id': 'captain-of-the-vern-holy-knights-order-frigis' };
