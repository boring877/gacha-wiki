// Firenze Character Data - Stella Sora
// Vanguard Umbra melee character with summon doppelganger abilities

export const Firenze = {
  "id": 110,
  "name": "Firenze",
  "icon": "/stella/assets/Firenze.png",
  "portrait": "/stella/assets/Firenze_portrait.png",
  "background": "/stella/assets/Firenze_background.png",
  "variants": {
    "base": "/stella/assets/Firenze_base.png",
    "q": "/stella/assets/Firenze_q.png",
    "gd": "/stella/assets/Firenze_gd.png",
    "goods": "/stella/assets/Firenze_goods.png",
    "qs": "/stella/assets/Firenze_qs.png",
    "xl": "/stella/assets/Firenze_xl.png",
    "gc": "/stella/assets/Firenze_gc.png",
    "sk": "/stella/assets/Firenze_portrait.png",
    "xxl": "/stella/assets/Firenze.png",
    "qm": "/stella/assets/Firenze_qm.png",
    "l": "/stella/assets/Firenze_l.png",
    "s": "/stella/assets/Firenze_s.png"
  },
  "description": "Firenze can summon doppelgangers to fight for her on the battlefield. Rumor has it that she does the same in her office, which is how she always manages to stay so graceful.",
  "voiceActor": {
    "cn": "Zi Yin",
    "cnLocalized": "子音",
    "jp": "Chiwa Saito",
    "jpLocalized": "斎藤千和"
  },
  "birthday": "11.16",
  "grade": 5,
  "element": "Umbra",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "United Harvest",
  "tags": [
    "Vanguard",
    "Steady",
    "United Harvest"
  ],
  "dateEvents": [],
  "giftPreferences": {
    "loves": [],
    "hates": []
  },
  "normalAttack": {
    "name": "Solo Grace",
    "icon": "Icon/Skill/11001_Normal",
    "description": "Swings the staff continuously to attack, can summon ##Shadow Clone#4002# to launch attacks.",
    "shortDescription": "Swings the staff continuously to attack, can summon Shadow Clones to assist.",
    "params": [],
    "hints": {
      "4002": {
        "id": 4002,
        "name": "Shadow Clone",
        "description": "Summoned by Firenze to fight alongside her. Inherits a portion of Firenze's stats and can trigger marks."
      }
    }
  },
  "skill": {
    "name": "Shadow Dance",
    "icon": "Icon/Skill/11001_Skill_Main",
    "description": "Delivers consecutive slashes with the sword in the staff, dealing multi-segment DMG. When casting the Main Skill, can summon ##Shadow Clone#4002# to launch consecutive slashes. The Main Skill and ##Shadow Clone#4002# can trigger ##Umbra Mark#1019#.",
    "shortDescription": "Delivers consecutive sword slashes with the staff. Can summon Shadow Clones when using Main Skill.",
    "params": [],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "A special status applied to the target by some Umbra Trekkers. Can be triggered by specific attacks to deal additional damage."
      },
      "4002": {
        "id": 4002,
        "name": "Shadow Clone",
        "description": "Summoned by Firenze to fight alongside her."
      }
    },
    "cooldown": "60s"
  },
  "supportSkill": {
    "name": "Nightly Dominance",
    "icon": "Icon/Skill/11001_Skill_Support",
    "description": "Slams the ground to deal AoE DMG and summons multiple ##Shadow Clones#4002#. When the Main Character deals DMG, ##Shadow Clones#4002# launch attacks on the target. The Support Skill and ##Shadow Clones#4002# can trigger ##Umbra Mark#1019#.",
    "shortDescription": "Slams the ground dealing AoE damage and summons Shadow Clones that attack when Main Character deals damage.",
    "params": [],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark"
      },
      "4002": {
        "id": 4002,
        "name": "Shadow Clone"
      }
    },
    "cooldown": "120s"
  },
  "ultimate": {
    "name": "Personal Guidance",
    "icon": "Icon/Skill/11001_Ultra",
    "description": "Unfolds a dark formation, dealing multi-segment DMG. The Ultimate can trigger ##Umbra Mark#1019#.",
    "shortDescription": "Unfolds a dark formation dealing multiple instances of damage. Can trigger Umbra Mark.",
    "params": [],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "A special status applied to the target by some Umbra Trekkers. Can be triggered to deal additional damage and apply Dark Burn."
      }
    },
    "cooldown": "25s",
    "energy": 218
  },
  "talents": [],
  "stats": [
    { "hp": 1325, "atk": 115 },
    { "hp": 1727, "atk": 150 },
    { "hp": 2125, "atk": 184 },
    { "hp": 2524, "atk": 219 },
    { "hp": 2922, "atk": 254 },
    { "hp": 3320, "atk": 288 },
    { "hp": 3719, "atk": 323 },
    { "hp": 4117, "atk": 357 },
    { "hp": 4516, "atk": 392 },
    { "hp": 4914, "atk": 427 },
    { "hp": 5897, "atk": 512 },
    { "hp": 6296, "atk": 546 },
    { "hp": 6694, "atk": 581 },
    { "hp": 7093, "atk": 616 },
    { "hp": 7491, "atk": 650 },
    { "hp": 7890, "atk": 685 },
    { "hp": 8288, "atk": 719 },
    { "hp": 8687, "atk": 754 },
    { "hp": 9085, "atk": 789 },
    { "hp": 9483, "atk": 823 },
    { "hp": 9882, "atk": 858 },
    { "hp": 11861, "atk": 1029 },
    { "hp": 12259, "atk": 1064 },
    { "hp": 12657, "atk": 1099 },
    { "hp": 13056, "atk": 1133 },
    { "hp": 13454, "atk": 1168 },
    { "hp": 13853, "atk": 1202 },
    { "hp": 14251, "atk": 1237 },
    { "hp": 14650, "atk": 1272 },
    { "hp": 15048, "atk": 1306 },
    { "hp": 15447, "atk": 1341 },
    { "hp": 15845, "atk": 1375 },
    { "hp": 19019, "atk": 1651 },
    { "hp": 19417, "atk": 1685 },
    { "hp": 19816, "atk": 1720 },
    { "hp": 20214, "atk": 1754 },
    { "hp": 20612, "atk": 1789 },
    { "hp": 21011, "atk": 1824 },
    { "hp": 21409, "atk": 1858 },
    { "hp": 21807, "atk": 1893 },
    { "hp": 22206, "atk": 1927 },
    { "hp": 22604, "atk": 1962 },
    { "hp": 23002, "atk": 1997 },
    { "hp": 27420, "atk": 2369 },
    { "hp": 27930, "atk": 2412 },
    { "hp": 28439, "atk": 2455 },
    { "hp": 28949, "atk": 2498 },
    { "hp": 29458, "atk": 2542 },
    { "hp": 29968, "atk": 2585 },
    { "hp": 30478, "atk": 2628 },
    { "hp": 30987, "atk": 2671 },
    { "hp": 31497, "atk": 2715 },
    { "hp": 32006, "atk": 2758 },
    { "hp": 38290, "atk": 3284 },
    { "hp": 39077, "atk": 3355 },
    { "hp": 39863, "atk": 3426 },
    { "hp": 40650, "atk": 3497 },
    { "hp": 41437, "atk": 3568 },
    { "hp": 42223, "atk": 3639 },
    { "hp": 43010, "atk": 3710 },
    { "hp": 43797, "atk": 3782 },
    { "hp": 44584, "atk": 3853 },
    { "hp": 54037, "atk": 4667 },
    { "hp": 55171, "atk": 4757 },
    { "hp": 56305, "atk": 4847 },
    { "hp": 57438, "atk": 4937 },
    { "hp": 58572, "atk": 5027 },
    { "hp": 59706, "atk": 5118 },
    { "hp": 60840, "atk": 5208 },
    { "hp": 61973, "atk": 5298 },
    { "hp": 63107, "atk": 5388 },
    { "hp": 64240, "atk": 5478 },
    { "hp": 84190, "atk": 7196 },
    { "hp": 84999, "atk": 7265 },
    { "hp": 85809, "atk": 7334 },
    { "hp": 86618, "atk": 7403 },
    { "hp": 87427, "atk": 7472 },
    { "hp": 88236, "atk": 7542 }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
