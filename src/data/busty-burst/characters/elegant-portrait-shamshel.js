// Character data: elegant-portrait-shamshel
// Auto-generated from game data

export const info = {
  'slug': 'elegant-portrait-shamshel',
  'name': 'Elegant Portrait: Shamshel',
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
      "castTime": 1.38,
      "damageScaling": "229.99999999999997% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+30",
      "lvl1": "229% + 80",
      "lvl90": "229% + 2750",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Mm-hmm, I’m the First Queen♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "180% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+25",
      "lvl1": "180% + 110",
      "lvl90": null,
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
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "330% + 300",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "380% + 380",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "420% + 450",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "450% + 490",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "480% + 520",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax",
      "icon": "skill001/skill1003",
      "description": "Gain Charm Resistance UP",
      "effect": "Charm Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent",
          "gameText": "Charm Resistance UP"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Large)",
      "effect": "Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat",
          "gameText": "Magic Attack UP (Large)"
        }
      ]
    }
  ],
  "name": "Elegant Portrait: Shamshel",
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
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.69"
  },
  "slug": "elegant-portrait-shamshel"
};

export const stats = { 'id': 'elegant-portrait-shamshel' };
