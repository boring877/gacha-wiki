// Skills data for 【Holy Night Succubus】Yu Rima Elca
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Alright, this is for you.",
      "icon": "skill001/skill0011",
      "description": "Deals 2154 (MATK x 1.0 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1059 per second) for 12 seconds",
      "descriptionLv1": "Deals 364 (MATK x 1.0 + 50) magic damage to the 3 nearest enemies and inflicts Burn(HP --80 per second) for 12 seconds",
      "descriptionLv90": "Deals 2154 (MATK x 1.0 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1059 per second) for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": "100% + 584",
      "effects": [
        "Burn Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Even if Santa gets it, it\u2019s fine, right?",
      "icon": "skill001/skill0011",
      "description": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-210DOWN for 8 seconds",
      "descriptionLv1": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-30DOWN for 8 seconds",
      "descriptionLv90": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-210DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -18,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 1
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The gift\u2026 is\u2026 me.",
      "icon": "skill001/skill0012_1",
      "description": "Deals 17770 (MATK x 11.0 + 500) magic damage to the nearest enemy and inflicts Dispel for 1 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
      "effect": "1100% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 2,
      "name": "The gift\u2026 is\u2026 me.",
      "icon": "skill001/skill0012_2",
      "description": "Deals 21010 (MATK x 13.0 + 600) magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
      "effect": "1300% + 600",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 3,
      "name": "The gift\u2026 is\u2026 me.",
      "icon": "skill001/skill0012_3",
      "description": "Deals 23151 (MATK x 14.3 + 700) magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
      "effect": "1430% + 700",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 4,
      "name": "The gift\u2026 is\u2026 me.",
      "icon": "skill001/skill0012_4",
      "description": "Deals 24300 (MATK x 15.0 + 750) magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
      "effect": "1500% + 750",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 5,
      "name": "The gift\u2026 is\u2026 me.",
      "icon": "skill001/skill0012_5",
      "description": "Deals 25135 (MATK x 15.5 + 800) magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
      "effect": "1550% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010Holy Night Succubus\u3011Yu Rima Elca",
  "id": 2097,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2332,
    "ATK": 188,
    "MATK": 314,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "holy-night-succubus-yu-rima-elca"
};
