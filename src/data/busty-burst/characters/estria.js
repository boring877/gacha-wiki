// Character data: estria
// Auto-generated from game data

export const info = {
  'slug': 'estria',
  'name': 'Estria',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Torlild Schuthein",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -15 DOWN for 8 seconds and Magic Attack -15 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -15 DOWN for 8 seconds and Magic Attack -15 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -105 DOWN for 8 seconds and Magic Attack -105 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "180% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+12",
      "lvl1": "180% + 90",
      "lvl90": "180% + 1",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -1.0
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Will of the Queen of Nordrant",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 10 seconds and Physical Defense +140 UP for 10 seconds",
      "descriptionLv1": "Applies Taunt to self for 10 seconds and Physical Defense +140 UP for 10 seconds",
      "descriptionLv90": "Applies Taunt to self for 10 seconds and Physical Defense +320 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Defense + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 1) to self for 3 seconds",
      "effect": "700% + 527",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Torlild Schuthein",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -15 DOWN for 8 seconds and Magic Attack -15 DOWN for 8 seconds",
      "effect": "180% + 90",
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Will of the Queen of Nordrant",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 10 seconds and Physical Defense +140 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 1) to self for 3 seconds",
      "effect": "700% + 527",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Supreme Orb that Resonates Across the World",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and applies HP RegenerationUP(LV 2) to self for 3 seconds",
      "effect": "840% + 709",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Estria",
  "id": 2012,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 258,
    "MATK": 155,
    "DEF": 317,
    "MDEF": 126
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "estria"
};

export const stats = { 'id': 'estria' };
