// Skills data for 【Graceful Portrait】Shamshel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Annoying!",
      "icon": "skill001/skill0005",
      "description": "Deals 6188 (MATK x 2.3 + 2750) magic damage to the nearest enemy",
      "descriptionLv1": "Deals 767 (MATK x 2.3 + 80) magic damage to the nearest enemy",
      "descriptionLv90": "Deals 6188 (MATK x 2.3 + 2750) magic damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "230% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+30",
      "lvl1": "230% + 80",
      "lvl90": "230% + 2750",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Mm-hmm, I\u2019m the First Queen\u266a",
      "icon": "skill001/skill0011",
      "description": "Deals 5026 (MATK x 1.8 + 2335) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals 648 (MATK x 1.8 + 110) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals 5026 (MATK x 1.8 + 2335) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "180% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+25",
      "lvl1": "180% + 110",
      "lvl90": "180% + 2335",
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
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals 5233 (MATK x 3.3 + 300) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "330% + 300",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals 6061 (MATK x 3.8 + 380) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "380% + 380",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_3",
      "description": "Deals 6729 (MATK x 4.2 + 450) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "420% + 450",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_4",
      "description": "Deals 7217 (MATK x 4.5 + 490) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "450% + 490",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_5",
      "description": "Deals 7696 (MATK x 4.8 + 520) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "480% + 520",
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
      "effect": "Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Graceful Portrait\u3011Shamshel",
  "id": 2065,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 179,
    "MATK": 299,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "noble-succubus-empress-shamshel"
};
