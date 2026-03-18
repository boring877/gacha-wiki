// Skills data for 【Elegant Portrait】Shamshel
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Juuump\u2014up we go\uff5e\u266a",
      "icon": "skill001/skill0005",
      "description": "Deals 2584 (MATK x 1.1 + 940) magic damage to the 3 nearest enemies",
      "descriptionLv1": "Deals 378 (MATK x 1.1 + 50) magic damage to the 3 nearest enemies",
      "descriptionLv90": "Deals 2584 (MATK x 1.1 + 940) magic damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "110% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+10",
      "lvl1": "110% + 50",
      "lvl90": "110% + 940",
      "effects": null,
      "buffEffects": null,
      "duration": null
    },
    {
      "slot": 3,
      "name": "The noble princess makes her entrance\uff5e\u266a",
      "icon": "skill001/skill0011",
      "description": "Deals 1914 (MATK x 0.9 + 569) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -18DOWN for 10 seconds",
      "descriptionLv1": "Deals 304 (MATK x 0.9 + 35) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -9DOWN for 10 seconds",
      "descriptionLv90": "Deals 1914 (MATK x 0.9 + 569) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -18DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+35",
      "levelGrowth": "+6",
      "lvl1": "90% + 35",
      "lvl90": "90% + 569",
      "effects": [
        "Charm",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I\u2019ll eat you up and bring peace to the world\u266a",
      "icon": "skill001/skill0006_1",
      "description": "Deals 5776 (MATK x 3.6 + 394) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV1) to self for 10 seconds",
      "effect": "360% + 394",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I\u2019ll eat you up and bring peace to the world\u266a",
      "icon": "skill001/skill0006_2",
      "description": "Deals 7172 (MATK x 4.5 + 445) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV2) to self for 10 seconds",
      "effect": "450% + 445",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I\u2019ll eat you up and bring peace to the world\u266a",
      "icon": "skill001/skill0006_3",
      "description": "Deals 8299 (MATK x 5.22 + 496) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV3) to self for 10 seconds",
      "effect": "522% + 496",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I\u2019ll eat you up and bring peace to the world\u266a",
      "icon": "skill001/skill0006_4",
      "description": "Deals 9188 (MATK x 5.79 + 532) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV4) to self for 10 seconds",
      "effect": "579% + 532",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I\u2019ll eat you up and bring peace to the world\u266a",
      "icon": "skill001/skill0006_5",
      "description": "Deals 9714 (MATK x 6.12 + 565) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV5) to self for 10 seconds",
      "effect": "612% + 565",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax, Confusion Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%), Confusion Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Confusion Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "\u3010Elegant Portrait\u3011Shamshel",
  "id": 2040,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
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
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "elegant-portrait-shamshel"
};
