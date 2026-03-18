// Skills data for Shamshel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Annoying!",
      "icon": "skill001/skill0005",
      "description": "Deals 4905 (MATK x 2.35 + 1850) magic damage to the nearest enemy",
      "descriptionLv1": "Deals 681 (MATK x 2.35 + 70) magic damage to the nearest enemy",
      "descriptionLv90": "Deals 4905 (MATK x 2.35 + 1850) magic damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "235% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+20",
      "lvl1": "235% + 70",
      "lvl90": "235% + 1850",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Mm-hmm, I\u2019m the First Queen\u266a",
      "icon": "skill001/skill0011",
      "description": "Deals 3968 (MATK x 1.88 + 1524) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv1": "Deals 588 (MATK x 1.88 + 100) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv90": "Deals 3968 (MATK x 1.88 + 1524) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "188% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+16",
      "lvl1": "188% + 100",
      "lvl90": "188% + 1524",
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals 4121 (MATK x 3.0 + 221) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "300% + 221",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals 4946 (MATK x 3.6 + 266) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "360% + 266",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_3",
      "description": "Deals 5566 (MATK x 4.05 + 301) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "405% + 301",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_4",
      "description": "Deals 6003 (MATK x 4.35 + 349) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "435% + 349",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_5",
      "description": "Deals 6412 (MATK x 4.65 + 367) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "465% + 367",
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
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Shamshel",
  "id": 2001,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 156,
    "MATK": 260,
    "DEF": 46,
    "MDEF": 117
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "r-shamshel"
};
