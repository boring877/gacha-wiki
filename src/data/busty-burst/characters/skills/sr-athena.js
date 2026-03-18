// Skills data for Athena
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poliucos",
      "icon": "skill001/skill0007",
      "description": "Deals 3707 (ATK x 2.8 + 1425) physical damage to the nearest enemy and inflicts Physical Attack -9%+-200DOWN for 5 seconds and Magic Attack -9%+-200DOWN for 5 seconds",
      "descriptionLv1": "Deals 546 (ATK x 2.8 + 90) physical damage to the nearest enemy and inflicts Physical Attack -9%+-20DOWN for 5 seconds and Magic Attack -9%+-20DOWN for 5 seconds",
      "descriptionLv90": "Deals 3707 (ATK x 2.8 + 1425) physical damage to the nearest enemy and inflicts Physical Attack -9%+-200DOWN for 5 seconds and Magic Attack -9%+-200DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "280% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+15",
      "lvl1": "280% + 90",
      "lvl90": "280% + 1425",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -9,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Palladion",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by 5756 (5756) and inflicts Block26UP for 10 seconds",
      "descriptionLv1": "Restores own HP by 416 (416) and inflicts Block13UP for 10 seconds",
      "descriptionLv90": "Restores own HP by 5756 (5756) and inflicts Block26UP for 10 seconds",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": "2000% ATK",
      "baseDamage": "+416",
      "levelGrowth": "+60",
      "lvl1": "2000% + 416",
      "lvl90": "2000% + 5756",
      "effects": [
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_1",
      "description": "Deals 10780 (ATK x 12.0 + 1000) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1200% + 1000",
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
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_2",
      "description": "Deals 12882 (ATK x 14.4 + 1146) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1440% + 1146",
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
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_3",
      "description": "Deals 13684 (ATK x 15.2 + 1296) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1520% + 1296",
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
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_4",
      "description": "Deals 14750 (ATK x 16.4 + 1385) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1640% + 1385",
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
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_5",
      "description": "Deals 15859 (ATK x 17.6 + 1515) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1760% + 1515",
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
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Athena",
  "id": 2030,
  "rarity": "SR",
  "element": "Holy",
  "role": "Tank",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2267,
    "ATK": 163,
    "MATK": 97,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "sr-athena"
};
