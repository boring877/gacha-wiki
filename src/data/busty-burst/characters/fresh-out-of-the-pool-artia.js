// Character data: fresh-out-of-the-pool-artia
// Auto-generated from game data

export const info = {
  'slug': 'fresh-out-of-the-pool-artia',
  'name': 'Fresh Out of the Pool: Artia',
};





























export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Beat in Buckler",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Block-11 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-220 DOWN for 6 seconds and Block-23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": "110% + 138",
      "effects": [
        "Magic Defense- Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "SB（SwimmingBoards）boomerang",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to 3 farthest enemy, inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to 3 farthest enemy, inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to 3 farthest enemy, inflicts Stun for 2 seconds and Action Speed -20%DOWN for 10 seconds",
      "target": "Back Enemy",
      "castTime": 1.0,
      "damageScaling": "90% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "90% + 80",
      "lvl90": null,
      "effects": [
        "Stun",
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Kickboard Blade!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemiesand inflicts Dispel for 3 seconds and Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "390% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Kickboard Blade!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemiesand inflicts Dispel for 4 seconds and Accuracy DOWN(LV 2) for 10 seconds",
      "effect": "459% + 600",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Kickboard Blade!",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the 3 nearest enemiesand inflicts Dispel for 4 seconds and Accuracy DOWN(LV 3) for 10 seconds",
      "effect": "509% + 700",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Kickboard Blade!",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the 3 nearest enemiesand inflicts Dispel for 5 seconds and Accuracy DOWN(LV 4) for 10 seconds",
      "effect": "550% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Kickboard Blade!",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the 3 nearest enemiesand inflicts Dispel for 5 seconds and Accuracy DOWN(LV 5) for 10 seconds",
      "effect": "570% + 900",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Large), Max HP UP (Medium)",
      "effect": "Magic Attack + (+389), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat",
          "gameText": "Magic Attack UP (Large)"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat",
          "gameText": "Max HP UP (Medium)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Magic Critical Damage UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat",
          "gameText": "Magic Critical Damage UP (Medium)"
        }
      ]
    }
  ],
  "name": "Fresh Out of the Pool: Artia",
  "id": 2130,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 192,
    "MATK": 168,
    "DEF": 281,
    "MDEF": 280
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "fresh-out-of-the-pool-artia"
};

export const stats = { 'id': 'fresh-out-of-the-pool-artia' };
