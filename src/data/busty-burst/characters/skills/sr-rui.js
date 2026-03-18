// Skills data for Rui
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Circular Slash",
      "icon": "skill001/skill0007",
      "description": "Deals 6115 (ATK x 3.5 + 1940) physical damage to the nearest enemy and inflicts Physical Defense -21%+-220DOWN for 4 seconds",
      "descriptionLv1": "Deals 993 (ATK x 3.5 + 160) physical damage to the nearest enemy and inflicts Physical Defense -21%+-40DOWN for 4 seconds",
      "descriptionLv90": "Deals 6115 (ATK x 3.5 + 1940) physical damage to the nearest enemy and inflicts Physical Defense -21%+-220DOWN for 4 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "350% + 160",
      "lvl90": "350% + 1940",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -21,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 4
    },
    {
      "slot": 3,
      "name": "Inner Energy",
      "icon": "skill001/skill0019",
      "description": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Block9UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 4
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Void Killing Formation",
      "icon": "skill001/skill0003_1",
      "description": "Deals 16228 (ATK x 13.1 + 600) physical damage to the nearest enemy",
      "effect": "1310% + 600",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "Void Killing Formation",
      "icon": "skill001/skill0003_2",
      "description": "Deals 18117 (ATK x 14.6 + 700) physical damage to the nearest enemy",
      "effect": "1460% + 700",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "Void Killing Formation",
      "icon": "skill001/skill0003_3",
      "description": "Deals 19172 (ATK x 15.4 + 800) physical damage to the nearest enemy",
      "effect": "1540% + 800",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "Void Killing Formation",
      "icon": "skill001/skill0003_4",
      "description": "Deals 20057 (ATK x 16.1 + 850) physical damage to the nearest enemy",
      "effect": "1610% + 850",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "Void Killing Formation",
      "icon": "skill001/skill0003_5",
      "description": "Deals 20703 (ATK x 16.6 + 900) physical damage to the nearest enemy",
      "effect": "1660% + 900",
      "buffEffects": null
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Rui",
  "id": 2074,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 1411,
    "ATK": 238,
    "MATK": 143,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill1 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Skill1 \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-rui"
};
