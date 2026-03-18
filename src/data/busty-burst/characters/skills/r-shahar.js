// Skills data for Shahar
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Scattering Claws",
      "icon": "skill001/skill0002",
      "description": "Deals 4697 (ATK x 2.7 + 1860) physical damage to the nearest enemy",
      "descriptionLv1": "Deals 647 (ATK x 2.7 + 80) physical damage to the nearest enemy",
      "descriptionLv90": "Deals 4697 (ATK x 2.7 + 1860) physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+20",
      "lvl1": "270% + 80",
      "lvl90": "270% + 1860",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Temptation",
      "icon": "skill001/skill0007",
      "description": "Deals 1907 (ATK x 1.25 + 594) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-104DOWN for 10 seconds and Magic Attack -7%+-104DOWN for 10 seconds",
      "descriptionLv1": "Deals 322 (ATK x 1.25 + 60) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-15DOWN for 10 seconds and Magic Attack -7%+-15DOWN for 10 seconds",
      "descriptionLv90": "Deals 1907 (ATK x 1.25 + 594) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-104DOWN for 10 seconds and Magic Attack -7%+-104DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "125% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "125% + 60",
      "lvl90": "125% + 594",
      "effects": [
        "Physical Attack - Lv2",
        "Magic Attack - Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv2",
          "value": -7,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Lv2",
          "value": -7,
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
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_1",
      "description": "Deals 11517 (ATK x 10.3 + 692) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
      "effect": "1030% + 692",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_2",
      "description": "Deals 13775 (ATK x 12.36 + 785) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
      "effect": "1236% + 785",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_3",
      "description": "Deals 15472 (ATK x 13.9 + 864) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
      "effect": "1390% + 864",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_4",
      "description": "Deals 16582 (ATK x 14.9 + 923) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
      "effect": "1490% + 923",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Temptation Leading to Glory and Pleasure",
      "icon": "skill001/skill0003_5",
      "description": "Deals 17821 (ATK x 16.0 + 1005) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
      "effect": "1600% + 1005",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+59)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Shahar",
  "id": 2016,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 210,
    "MATK": 126,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "r-shahar"
};
