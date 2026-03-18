// Skills data for Lapis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u85a9\u83f2\u723e",
      "icon": "skill001/skill0011",
      "description": "Deals 6142 (MATK x 3.2 + 1960) magic damage to the nearest enemy and inflicts Burn(HP --1485 per second) for 10 seconds and Freeze(Unable to act;HP --4210 per second) for 1.5 seconds",
      "descriptionLv1": "Deals 1015 (MATK x 3.2 + 180) magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 10 seconds and Freeze(Unable to act;HP --650 per second) for 1.5 seconds",
      "descriptionLv90": "Deals 6142 (MATK x 3.2 + 1960) magic damage to the nearest enemy and inflicts Burn(HP --1485 per second) for 10 seconds and Freeze(Unable to act;HP --4210 per second) for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "320% ATK",
      "baseDamage": "+180",
      "levelGrowth": "+20",
      "lvl1": "320% + 180",
      "lvl90": "320% + 1960",
      "effects": [
        "Burn Lv5",
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 1.5
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "\u5c0a\u56b4",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack 20%+850UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv1": "Applies Magic Attack 20%+40UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv90": "Applies Magic Attack 20%+850UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv5",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv5",
          "value": 20,
          "type": "percent",
          "flatValue": 850,
          "duration": 12
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "\u963f\u62c9\u4f2f\u591c\u7a7a",
      "icon": "skill001/skill0006_1",
      "description": "Deals 15177 (MATK x 11.0 + 800) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV1) for 10 seconds and Fire Type Defense DOWN(LV1) for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv1",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv1",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "\u963f\u62c9\u4f2f\u591c\u7a7a",
      "icon": "skill001/skill0006_2",
      "description": "Deals 18252 (MATK x 13.2 + 1000) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV2) for 10 seconds and Fire Type Defense DOWN(LV2) for 10 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv2",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv2",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u963f\u62c9\u4f2f\u591c\u7a7a",
      "icon": "skill001/skill0006_3",
      "description": "Deals 20755 (MATK x 15.0 + 1150) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV3) for 10 seconds and Fire Type Defense DOWN(LV3) for 10 seconds",
      "effect": "1500% + 1150",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv3",
          "value": -34,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv3",
          "value": -34,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u963f\u62c9\u4f2f\u591c\u7a7a",
      "icon": "skill001/skill0006_4",
      "description": "Deals 22292 (MATK x 16.1 + 1250) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV4) for 10 seconds and Fire Type Defense DOWN(LV4) for 10 seconds",
      "effect": "1610% + 1250",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv4",
          "value": -37,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv4",
          "value": -37,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u963f\u62c9\u4f2f\u591c\u7a7a",
      "icon": "skill001/skill0006_5",
      "description": "Deals 23126 (MATK x 16.7 + 1300) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV5) for 10 seconds and Fire Type Defense DOWN(LV5) for 10 seconds",
      "effect": "1670% + 1300",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv5",
          "value": -40,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv5",
          "value": -40,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lapis",
  "id": 2084,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [],
  "baseStats": {
    "HP": 2092,
    "ATK": 157,
    "MATK": 261,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "",
    "loop": ""
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-lapis"
};
