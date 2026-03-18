// Skills data for 【Purehearted Pâtissière】Frey
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Please accept this!",
      "icon": "skill001/skill0007",
      "description": "Deals 300% ATK + 120 physical damage to the nearest enemy and inflicts Action Speed -17% for 7 seconds and Accuracy -11 for 7 seconds",
      "descriptionLv90": "Deals 300% ATK + 1900 physical damage to the nearest enemy and inflicts Action Speed -17% for 7 seconds and Accuracy -22.7 for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "300% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "300% + 120",
      "lvl90": "300% + 1900",
      "effects": [
        "Action Speed DOWN",
        "Accuracy DOWN"
      ],
      "buffEffects": [
        {
          "name": "Action Speed DOWN",
          "value": -17,
          "valueLv1": -17,
          "valueLv90": -17,
          "type": "debuff",
          "duration": 7
        },
        {
          "name": "Accuracy DOWN",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -22.7,
          "type": "debuff",
          "duration": 7,
          "displayFormat": "flat"
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Yeah, That Feels Right!",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Critical Damage +40 to all allies for 9 seconds and Accuracy +9 for 9 seconds",
      "descriptionLv90": "Applies Magic Critical Damage +490 to all allies for 9 seconds and Accuracy +18 for 9 seconds",
      "target": "All Allies",
      "castTime": 1.22,
      "effects": [
        "Magic Critical Damage UP",
        "Accuracy UP"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage UP",
          "value": 40,
          "valueLv1": 40,
          "valueLv90": 490,
          "type": "buff",
          "duration": 9,
          "displayFormat": "flat"
        },
        {
          "name": "Accuracy UP",
          "value": 9,
          "valueLv1": 9,
          "valueLv90": 18,
          "type": "buff",
          "duration": 9,
          "displayFormat": "flat"
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I hope my feelings reach you",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by 3000% ATK + 1000 to all allies and applies 40% Count-Based Recovery Shield (3 hits) for 20 seconds and Block +10 for 10 seconds",
      "effect": "3000% + 1000 Heal",
      "buffEffects": [
        {
          "name": "Recovery Shield",
          "value": "40%",
          "hits": 3,
          "type": "buff",
          "duration": 20
        },
        {
          "name": "Block UP",
          "value": "+10",
          "type": "buff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I hope my feelings reach you",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by 3400% ATK + 1300 to all allies and applies 45% Count-Based Recovery Shield (3 hits) for 20 seconds and Block +13 for 10 seconds",
      "effect": "3400% + 1300 Heal",
      "buffEffects": [
        {
          "name": "Recovery Shield",
          "value": "45%",
          "hits": 3,
          "type": "buff",
          "duration": 20
        },
        {
          "name": "Block UP",
          "value": "+13",
          "type": "buff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I hope my feelings reach you",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by 3700% ATK + 1500 to all allies and applies 50% Count-Based Recovery Shield (4 hits) for 20 seconds and Block +16 for 10 seconds",
      "effect": "3700% + 1500 Heal",
      "buffEffects": [
        {
          "name": "Recovery Shield",
          "value": "50%",
          "hits": 4,
          "type": "buff",
          "duration": 20
        },
        {
          "name": "Block UP",
          "value": "+16",
          "type": "buff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I hope my feelings reach you",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by 4000% ATK + 1600 to all allies and applies 55% Count-Based Recovery Shield (4 hits) for 20 seconds and Block +18 for 10 seconds",
      "effect": "4000% + 1600 Heal",
      "buffEffects": [
        {
          "name": "Recovery Shield",
          "value": "55%",
          "hits": 4,
          "type": "buff",
          "duration": 20
        },
        {
          "name": "Block UP",
          "value": "+18",
          "type": "buff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I hope my feelings reach you",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by 4200% ATK + 1700 to all allies and applies 60% Count-Based Recovery Shield (5 hits) for 20 seconds and Block +20 for 10 seconds",
      "effect": "4200% + 1700 Heal",
      "buffEffects": [
        {
          "name": "Recovery Shield",
          "value": "60%",
          "hits": 5,
          "type": "buff",
          "duration": 20
        },
        {
          "name": "Block UP",
          "value": "+20",
          "type": "buff",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Mid Row Allies Max HP UP, Accuracy UP",
      "icon": "skill001/skill1007",
      "effect": "Max HP + (+1447), Accuracy + (+15)",
      "effects": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Mid Row Allies Skill DMG UP, Speed UP",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20), Action Speed + (+10)",
      "effects": [
        {
          "name": "Skill Damage +",
          "value": 20,
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
  "name": "\u3010Purehearted P\u00e2tissi\u00e8re\u3011Frey",
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
    "opening": "Skill3 \u2192 Basic \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "chocolate-frey"
};
