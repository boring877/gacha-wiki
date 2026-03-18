// Skills data for Xevia
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Double Strike",
      "icon": "skill001/skill0002",
      "description": "Deals 2758 (ATK x 1.8 + 1129) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals 475 (ATK x 1.8 + 150) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals 2758 (ATK x 1.8 + 1129) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "180% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+11",
      "lvl1": "180% + 150",
      "lvl90": "180% + 1129",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "Instinct",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 15%+475UP to self for 12 seconds and Block18UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 15%+30UP to self for 12 seconds and Block9UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 15%+475UP to self for 12 seconds and Block18UP for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 15,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_1",
      "description": "Deals 6735 (ATK x 7.0 + 400) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "700% + 400",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_2",
      "description": "Deals 8102 (ATK x 8.4 + 500) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "840% + 500",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_3",
      "description": "Deals 9147 (ATK x 9.5 + 550) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "950% + 550",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_4",
      "description": "Deals 9901 (ATK x 10.3 + 580) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "1030% + 580",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Sword Slash",
      "icon": "skill001/skill0003_5",
      "description": "Deals 10555 (ATK x 11.0 + 600) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
      "effect": "1100% + 600",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
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
  "name": "Xevia",
  "id": 2015,
  "rarity": "R",
  "element": "Wind",
  "role": "Tank",
  "tags": [
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "HP": 2313,
    "ATK": 181,
    "MATK": 108,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "r-xevia"
};
