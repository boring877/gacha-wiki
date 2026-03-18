// Skills data for Lucrezia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Hypnotic Embrace",
      "icon": "skill001/skill0007",
      "description": "Deals 4437 (ATK x 2.1 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -21%+-220DOWN for 15 seconds",
      "descriptionLv1": "Deals 665 (ATK x 2.1 + 80) physical damage to the nearest enemy and inflicts Physical Defense -21%+-40DOWN for 15 seconds",
      "descriptionLv90": "Deals 4437 (ATK x 2.1 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -21%+-220DOWN for 15 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "210% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+16",
      "lvl1": "210% + 80",
      "lvl90": "210% + 1504",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -21,
          "type": "percent",
          "duration": 15
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Trance Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals 3502 (ATK x 1.7 + 1128) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals 534 (ATK x 1.7 + 60) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals 3502 (ATK x 1.7 + 1128) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+12",
      "lvl1": "170% + 60",
      "lvl90": "170% + 1128",
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_1",
      "description": "Deals 11861 (ATK x 8.0 + 685) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "800% + 685",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_2",
      "description": "Deals 14333 (ATK x 9.6 + 922) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "960% + 922",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_3",
      "description": "Deals 16110 (ATK x 10.8 + 1023) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "1080% + 1023",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_4",
      "description": "Deals 17262 (ATK x 11.6 + 1057) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "1160% + 1057",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_5",
      "description": "Deals 18413 (ATK x 12.4 + 1091) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "1240% + 1091",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
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
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lucrezia",
  "id": 2032,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 279,
    "MATK": 167,
    "DEF": 56,
    "MDEF": 22
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-lucrezia"
};
