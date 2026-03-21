// Character data: shamshel
// Auto-generated from game data

export const info = {
  'slug': 'shamshel',
  'name': 'Shamshel',
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Annoying!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy",
      "descriptionLv1": "Deals magic damage to the nearest enemy",
      "descriptionLv90": "Deals magic damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "235% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+20",
      "lvl1": "235% + 70",
      "lvl90": "235% + 1850",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Mm-hmm, I’m the First Queen♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "188% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+16",
      "lvl1": "188% + 100",
      "lvl90": null,
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
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "300% + 221",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Annoying!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy",
      "effect": "235% + 70",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Mm-hmm, I’m the First Queen♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "effect": "188% + 100",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "300% + 221",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "360% + 266",
      "buffEffects": []
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
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.69"
  },
  "slug": "shamshel"
};

export const stats = { 'id': 'shamshel' };
