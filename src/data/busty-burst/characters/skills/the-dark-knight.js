// Skills data for The Dark Knight
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Dual Demon Swords",
      "icon": "skill001/skill0010",
      "description": "Deals 6450 (MATK x 2.1 + 1940) magic damage to the nearest enemy and inflicts Magic Defense-21%+-220DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "descriptionLv1": "Deals 1060 (MATK x 2.1 + 160) magic damage to the nearest enemy and inflicts Magic Defense-21%+-40DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "descriptionLv90": "Deals 6450 (MATK x 2.1 + 1940) magic damage to the nearest enemy and inflicts Magic Defense-21%+-220DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "210% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "210% + 160",
      "lvl90": "210% + 1940",
      "effects": [
        "Magic Defense- Lv4",
        "Magic Type Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -21,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Type Defense - Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Enchantment Blade",
      "icon": "skill001/skill0008",
      "description": "Deals 7095 (MATK x 2.4 + 1940) magic damage to the nearest enemy and inflicts Physical Attack -11%+-203DOWN for 10 seconds and Magic Attack -11%+-203DOWN for 10 seconds",
      "descriptionLv1": "Deals 1189 (MATK x 2.4 + 160) magic damage to the nearest enemy and inflicts Physical Attack -11%+-25DOWN for 10 seconds and Magic Attack -11%+-25DOWN for 10 seconds",
      "descriptionLv90": "Deals 7095 (MATK x 2.4 + 1940) magic damage to the nearest enemy and inflicts Physical Attack -11%+-203DOWN for 10 seconds and Magic Attack -11%+-203DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "240% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "240% + 160",
      "lvl90": "240% + 1940",
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -11,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -11,
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
      "name": "Taboo of the Calamity God of the Dead\u2019s Sin Mark",
      "icon": "skill001/skill0012_1",
      "description": "Deals 6846 (MATK x 3.0 + 402) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv1) for 3 seconds",
      "effect": "300% + 402",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": -50,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Taboo of the Calamity God of the Dead\u2019s Sin Mark",
      "icon": "skill001/skill0012_2",
      "description": "Deals 8189 (MATK x 3.6 + 457) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv2) for 3 seconds",
      "effect": "360% + 457",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Taboo of the Calamity God of the Dead\u2019s Sin Mark",
      "icon": "skill001/skill0012_3",
      "description": "Deals 9200 (MATK x 4.05 + 501) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv3) for 3 seconds",
      "effect": "405% + 501",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv3",
          "value": -30,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Taboo of the Calamity God of the Dead\u2019s Sin Mark",
      "icon": "skill001/skill0012_4",
      "description": "Deals 9909 (MATK x 4.35 + 566) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv4) for 3 seconds",
      "effect": "435% + 566",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv4",
          "value": -35,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Taboo of the Calamity God of the Dead\u2019s Sin Mark",
      "icon": "skill001/skill0012_5",
      "description": "Deals 10277 (MATK x 4.5 + 611) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv5) for 3 seconds",
      "effect": "450% + 611",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 10
        },
        {
          "name": "Fear Ultimate Lv5",
          "value": -40,
          "type": "flat",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+90), Action Speed + (+10%)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Type ATK +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Type ATK + (+10%), Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Magic Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "The Dark Knight",
  "id": 2049,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 257,
    "MATK": 429,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "the-dark-knight"
};
