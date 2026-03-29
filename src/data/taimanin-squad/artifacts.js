// Taimanin Squad Artifact Data
// 15 sets, 104 artifacts (90 core + 14 module)
// Generated from extracted game data

export const TAIMANIN_SQUAD_ARTIFACT_META = {
  "max_level": 12,
  "sub_opt_levels": [
    3,
    6,
    9,
    12
  ],
  "opt_slots_by_level": [
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    4
  ],
  "lvup_rates": [
    100,
    100,
    100,
    85,
    70,
    55,
    40,
    25,
    15,
    10,
    8,
    5
  ],
  "lvup_costs": [
    0,
    180,
    280,
    430,
    620,
    850,
    1120
  ],
  "buy_prices": [
    0.0,
    25.0,
    30.0,
    35.0,
    40.0,
    50.0,
    75.0
  ],
  "sell_prices": [
    0.0,
    1.0,
    1.5,
    2.5,
    4.5,
    7.5,
    10.5
  ],
  "unequip_prices": [
    0,
    1000,
    2000,
    3000,
    5000,
    10000,
    25000
  ]
};

export const TAIMANIN_SQUAD_ARTIFACT_SETS = [
  {
    "id": 1,
    "name": "HP",
    "desc": "HP +12.5%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "10",
    "opt_value": "125",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 10,
        "stat_name": "HP%"
      }
    ]
  },
  {
    "id": 2,
    "name": "ATK",
    "desc": "ATK +12.5%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "11",
    "opt_value": "125",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 11,
        "stat_name": "ATK"
      }
    ]
  },
  {
    "id": 3,
    "name": "DEF",
    "desc": "DEF +12.5%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "12",
    "opt_value": "125",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 12,
        "stat_name": "DEF"
      }
    ]
  },
  {
    "id": 4,
    "name": "SPD",
    "desc": "SPD +5%",
    "set_group": 14,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "13",
    "opt_value": "50",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 13,
        "stat_name": "SPD%"
      }
    ]
  },
  {
    "id": 5,
    "name": "CRIT Rate",
    "desc": "CRIT Rate +10%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "5",
    "opt_value": "100",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 5,
        "stat_name": "CRIT Rate%"
      }
    ]
  },
  {
    "id": 6,
    "name": "CRIT DMG",
    "desc": "CRIT DMG +25%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "6",
    "opt_value": "250",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 6,
        "stat_name": "CRIT DMG%"
      }
    ]
  },
  {
    "id": 7,
    "name": "CRIT RES",
    "desc": "CRIT RES +10%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "7",
    "opt_value": "100",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 7,
        "stat_name": "CRIT RES%"
      }
    ]
  },
  {
    "id": 8,
    "name": "ACC",
    "desc": "ACC +7.5%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "8",
    "opt_value": "75",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 8,
        "stat_name": "ACC%"
      }
    ]
  },
  {
    "id": 9,
    "name": "EVD",
    "desc": "EVD +5%",
    "set_group": 11,
    "required_count": 2,
    "is_stat_bonus": true,
    "opt_type": "9",
    "opt_value": "50",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 9,
        "stat_name": "EVD%"
      }
    ]
  },
  {
    "id": 10,
    "name": "Balanced",
    "desc": "HP +10% | ATK +10% | DEF +10%",
    "set_group": 14,
    "required_count": 4,
    "is_stat_bonus": true,
    "opt_type": "10/11/12",
    "opt_value": "100/100/100",
    "bo_list": "",
    "bonus_stats": [
      {
        "opt_type": 10,
        "stat_name": "HP%"
      },
      {
        "opt_type": 11,
        "stat_name": "ATK"
      },
      {
        "opt_type": 12,
        "stat_name": "DEF"
      }
    ]
  },
  {
    "id": 11,
    "name": "Life Steal",
    "desc": "Heals 25% of the damage dealt to the enemy",
    "set_group": 0,
    "required_count": 4,
    "is_stat_bonus": false,
    "opt_type": "",
    "opt_value": "",
    "bo_list": "1",
    "bonus_stats": []
  },
  {
    "id": 12,
    "name": "Heal",
    "desc": "Recovers 10% of Max HP each turn.",
    "set_group": 0,
    "required_count": 4,
    "is_stat_bonus": false,
    "opt_type": "",
    "opt_value": "",
    "bo_list": "2",
    "bonus_stats": []
  },
  {
    "id": 13,
    "name": "Debuff Resist",
    "desc": "Debuff Resistance 50% | Damage taken in Arena reduced by 25%",
    "set_group": 12,
    "required_count": 4,
    "is_stat_bonus": false,
    "opt_type": "",
    "opt_value": "",
    "bo_list": "3/6",
    "bonus_stats": []
  },
  {
    "id": 14,
    "name": "Lifesteal Bond",
    "desc": "When Round Starts, charges Bond gauge by 50% | Performs a 25% Life Steal attack.",
    "set_group": 13,
    "required_count": 6,
    "is_stat_bonus": false,
    "opt_type": "",
    "opt_value": "",
    "bo_list": "1/4",
    "bonus_stats": []
  },
  {
    "id": 15,
    "name": "Inflict Debuff",
    "desc": "Chance to inflict debuff 50% | Damage taken in Arena reduced by 25%",
    "set_group": 12,
    "required_count": 4,
    "is_stat_bonus": false,
    "opt_type": "",
    "opt_value": "",
    "bo_list": "5/6",
    "bonus_stats": []
  }
];

export const TAIMANIN_SQUAD_ARTIFACTS = [
  {
    "id": 100101,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100102,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100103,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100104,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100105,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100106,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 1,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100201,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100202,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100203,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100204,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100205,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100206,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 2,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100301,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100302,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100303,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100304,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100305,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100306,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 3,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100401,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100402,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100403,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100404,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100405,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100406,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 4,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100501,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100502,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100503,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100504,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100505,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100506,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 5,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100601,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100602,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100603,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100604,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100605,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100606,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 6,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100701,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100702,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100703,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100704,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100705,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100706,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 7,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100801,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100802,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100803,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100804,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100805,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100806,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 8,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 100901,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 100902,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 100903,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 100904,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 100905,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 100906,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 9,
    "set_group": 11,
    "base_price": 500,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101001,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101002,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101003,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101004,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101005,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101006,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 10,
    "set_group": 14,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101101,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101102,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101103,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101104,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101105,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101106,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 11,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101201,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101202,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101203,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101204,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101205,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101206,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 12,
    "set_group": 0,
    "base_price": 550,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101301,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101302,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101303,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101304,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101305,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101306,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 13,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101401,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101402,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101403,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101404,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101405,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101406,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 14,
    "set_group": 13,
    "base_price": 750,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 101501,
    "icon": "Artifacts_Weapon.png",
    "slot": "Weapon",
    "slot_full": "Power Core alpha",
    "parts": 1,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "ATK%",
    "main_opt_group": 101,
    "sub_opt_group": 200
  },
  {
    "id": 101502,
    "icon": "Artifacts_Helmet.png",
    "slot": "Helmet",
    "slot_full": "Health Core alpha",
    "parts": 2,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "HP",
    "main_opt_group": 102,
    "sub_opt_group": 200
  },
  {
    "id": 101503,
    "icon": "Artifacts_Shield.png",
    "slot": "Shield",
    "slot_full": "Shield Core alpha",
    "parts": 3,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "DEF%",
    "main_opt_group": 103,
    "sub_opt_group": 200
  },
  {
    "id": 101504,
    "icon": "Artifacts_Gloves.png",
    "slot": "Gloves",
    "slot_full": "Power Core beta",
    "parts": 4,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "ATK%",
    "main_opt_group": 104,
    "sub_opt_group": 200
  },
  {
    "id": 101505,
    "icon": "Artifacts_Chest.png",
    "slot": "Chest",
    "slot_full": "Health Core beta",
    "parts": 5,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "HP",
    "main_opt_group": 105,
    "sub_opt_group": 200
  },
  {
    "id": 101506,
    "icon": "Artifacts_Boots.png",
    "slot": "Boots",
    "slot_full": "Shield Core beta",
    "parts": 6,
    "disposition": 0,
    "disposition_name": "",
    "is_module": false,
    "set_id": 15,
    "set_group": 12,
    "base_price": 625,
    "main_stat": "DEF%",
    "main_opt_group": 106,
    "sub_opt_group": 200
  },
  {
    "id": 201001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 1,
    "disposition_name": "Mars",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 201002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 1,
    "disposition_name": "Mars",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 202001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 2,
    "disposition_name": "Venus",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 202002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 2,
    "disposition_name": "Venus",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 203001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 3,
    "disposition_name": "Mercury",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 203002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 3,
    "disposition_name": "Mercury",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 204001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 4,
    "disposition_name": "Moon",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 204002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 4,
    "disposition_name": "Moon",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 205001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 5,
    "disposition_name": "Sun",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 205002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 5,
    "disposition_name": "Sun",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 206001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 6,
    "disposition_name": "Jupiter",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 206002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 6,
    "disposition_name": "Jupiter",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  },
  {
    "id": 207001,
    "icon": "Artifacts_Ring.png",
    "slot": "Ring",
    "slot_full": "Module A",
    "parts": 7,
    "disposition": 7,
    "disposition_name": "Saturn",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 107,
    "sub_opt_group": 200
  },
  {
    "id": 207002,
    "icon": "Artifacts_Pendant.png",
    "slot": "Pendant",
    "slot_full": "Module B",
    "parts": 8,
    "disposition": 7,
    "disposition_name": "Saturn",
    "is_module": true,
    "set_id": 0,
    "set_group": 0,
    "base_price": 750,
    "main_stat": "HP",
    "main_opt_group": 108,
    "sub_opt_group": 200
  }
];

export const TAIMANIN_SQUAD_ARTIFACT_STAT_RANGES = {
  "101": [
    {
      "grade": 1,
      "opt_type": 2,
      "min": 4,
      "max": 69,
      "stat_name": "ATK"
    },
    {
      "grade": 2,
      "opt_type": 2,
      "min": 6,
      "max": 91,
      "stat_name": "ATK"
    },
    {
      "grade": 3,
      "opt_type": 2,
      "min": 10,
      "max": 132,
      "stat_name": "ATK"
    },
    {
      "grade": 4,
      "opt_type": 2,
      "min": 16,
      "max": 179,
      "stat_name": "ATK"
    },
    {
      "grade": 5,
      "opt_type": 2,
      "min": 26,
      "max": 239,
      "stat_name": "ATK"
    },
    {
      "grade": 6,
      "opt_type": 2,
      "min": 42,
      "max": 302,
      "stat_name": "ATK"
    }
  ],
  "102": [
    {
      "grade": 1,
      "opt_type": 1,
      "min": 53,
      "max": 912,
      "stat_name": "HP"
    },
    {
      "grade": 2,
      "opt_type": 1,
      "min": 85,
      "max": 1292,
      "stat_name": "HP"
    },
    {
      "grade": 3,
      "opt_type": 1,
      "min": 136,
      "max": 1795,
      "stat_name": "HP"
    },
    {
      "grade": 4,
      "opt_type": 1,
      "min": 218,
      "max": 2442,
      "stat_name": "HP"
    },
    {
      "grade": 5,
      "opt_type": 1,
      "min": 349,
      "max": 3211,
      "stat_name": "HP"
    },
    {
      "grade": 6,
      "opt_type": 1,
      "min": 558,
      "max": 4018,
      "stat_name": "HP"
    }
  ],
  "103": [
    {
      "grade": 1,
      "opt_type": 3,
      "min": 4,
      "max": 69,
      "stat_name": "DEF"
    },
    {
      "grade": 2,
      "opt_type": 3,
      "min": 6,
      "max": 91,
      "stat_name": "DEF"
    },
    {
      "grade": 3,
      "opt_type": 3,
      "min": 10,
      "max": 132,
      "stat_name": "DEF"
    },
    {
      "grade": 4,
      "opt_type": 3,
      "min": 16,
      "max": 179,
      "stat_name": "DEF"
    },
    {
      "grade": 5,
      "opt_type": 3,
      "min": 26,
      "max": 239,
      "stat_name": "DEF"
    },
    {
      "grade": 6,
      "opt_type": 3,
      "min": 42,
      "max": 302,
      "stat_name": "DEF"
    }
  ],
  "104": [
    {
      "grade": 1,
      "opt_type": 2,
      "min": 4,
      "max": 69,
      "stat_name": "ATK"
    },
    {
      "grade": 2,
      "opt_type": 2,
      "min": 6,
      "max": 91,
      "stat_name": "ATK"
    },
    {
      "grade": 3,
      "opt_type": 2,
      "min": 10,
      "max": 132,
      "stat_name": "ATK"
    },
    {
      "grade": 4,
      "opt_type": 2,
      "min": 16,
      "max": 179,
      "stat_name": "ATK"
    },
    {
      "grade": 5,
      "opt_type": 2,
      "min": 26,
      "max": 239,
      "stat_name": "ATK"
    },
    {
      "grade": 6,
      "opt_type": 2,
      "min": 42,
      "max": 302,
      "stat_name": "ATK"
    }
  ],
  "105": [
    {
      "grade": 1,
      "opt_type": 1,
      "min": 53,
      "max": 912,
      "stat_name": "HP"
    },
    {
      "grade": 2,
      "opt_type": 1,
      "min": 85,
      "max": 1292,
      "stat_name": "HP"
    },
    {
      "grade": 3,
      "opt_type": 1,
      "min": 136,
      "max": 1795,
      "stat_name": "HP"
    },
    {
      "grade": 4,
      "opt_type": 1,
      "min": 218,
      "max": 2442,
      "stat_name": "HP"
    },
    {
      "grade": 5,
      "opt_type": 1,
      "min": 349,
      "max": 3211,
      "stat_name": "HP"
    },
    {
      "grade": 6,
      "opt_type": 1,
      "min": 558,
      "max": 4018,
      "stat_name": "HP"
    }
  ],
  "106": [
    {
      "grade": 1,
      "opt_type": 3,
      "min": 4,
      "max": 69,
      "stat_name": "DEF"
    },
    {
      "grade": 2,
      "opt_type": 3,
      "min": 6,
      "max": 91,
      "stat_name": "DEF"
    },
    {
      "grade": 3,
      "opt_type": 3,
      "min": 10,
      "max": 132,
      "stat_name": "DEF"
    },
    {
      "grade": 4,
      "opt_type": 3,
      "min": 16,
      "max": 179,
      "stat_name": "DEF"
    },
    {
      "grade": 5,
      "opt_type": 3,
      "min": 26,
      "max": 239,
      "stat_name": "DEF"
    },
    {
      "grade": 6,
      "opt_type": 3,
      "min": 42,
      "max": 302,
      "stat_name": "DEF"
    }
  ],
  "107": [
    {
      "grade": 1,
      "opt_type": 1,
      "min": 66,
      "max": 1135,
      "stat_name": "HP"
    },
    {
      "grade": 2,
      "opt_type": 1,
      "min": 106,
      "max": 1611,
      "stat_name": "HP"
    },
    {
      "grade": 3,
      "opt_type": 1,
      "min": 170,
      "max": 2244,
      "stat_name": "HP"
    },
    {
      "grade": 4,
      "opt_type": 1,
      "min": 272,
      "max": 3046,
      "stat_name": "HP"
    },
    {
      "grade": 5,
      "opt_type": 1,
      "min": 435,
      "max": 4002,
      "stat_name": "HP"
    },
    {
      "grade": 6,
      "opt_type": 1,
      "min": 696,
      "max": 5011,
      "stat_name": "HP"
    },
    {
      "grade": 1,
      "opt_type": 2,
      "min": 5,
      "max": 86,
      "stat_name": "ATK"
    },
    {
      "grade": 2,
      "opt_type": 2,
      "min": 8,
      "max": 122,
      "stat_name": "ATK"
    },
    {
      "grade": 3,
      "opt_type": 2,
      "min": 13,
      "max": 172,
      "stat_name": "ATK"
    },
    {
      "grade": 4,
      "opt_type": 2,
      "min": 21,
      "max": 235,
      "stat_name": "ATK"
    },
    {
      "grade": 5,
      "opt_type": 2,
      "min": 34,
      "max": 313,
      "stat_name": "ATK"
    },
    {
      "grade": 6,
      "opt_type": 2,
      "min": 54,
      "max": 389,
      "stat_name": "ATK"
    },
    {
      "grade": 1,
      "opt_type": 3,
      "min": 5,
      "max": 86,
      "stat_name": "DEF"
    },
    {
      "grade": 2,
      "opt_type": 3,
      "min": 8,
      "max": 122,
      "stat_name": "DEF"
    },
    {
      "grade": 3,
      "opt_type": 3,
      "min": 13,
      "max": 172,
      "stat_name": "DEF"
    },
    {
      "grade": 4,
      "opt_type": 3,
      "min": 21,
      "max": 235,
      "stat_name": "DEF"
    },
    {
      "grade": 5,
      "opt_type": 3,
      "min": 34,
      "max": 313,
      "stat_name": "DEF"
    },
    {
      "grade": 6,
      "opt_type": 3,
      "min": 54,
      "max": 389,
      "stat_name": "DEF"
    }
  ],
  "108": [
    {
      "grade": 1,
      "opt_type": 1,
      "min": 66,
      "max": 1135,
      "stat_name": "HP"
    },
    {
      "grade": 2,
      "opt_type": 1,
      "min": 106,
      "max": 1611,
      "stat_name": "HP"
    },
    {
      "grade": 3,
      "opt_type": 1,
      "min": 170,
      "max": 2244,
      "stat_name": "HP"
    },
    {
      "grade": 4,
      "opt_type": 1,
      "min": 272,
      "max": 3046,
      "stat_name": "HP"
    },
    {
      "grade": 5,
      "opt_type": 1,
      "min": 435,
      "max": 4002,
      "stat_name": "HP"
    },
    {
      "grade": 6,
      "opt_type": 1,
      "min": 696,
      "max": 5011,
      "stat_name": "HP"
    },
    {
      "grade": 1,
      "opt_type": 2,
      "min": 5,
      "max": 86,
      "stat_name": "ATK"
    },
    {
      "grade": 2,
      "opt_type": 2,
      "min": 8,
      "max": 122,
      "stat_name": "ATK"
    },
    {
      "grade": 3,
      "opt_type": 2,
      "min": 13,
      "max": 172,
      "stat_name": "ATK"
    },
    {
      "grade": 4,
      "opt_type": 2,
      "min": 21,
      "max": 235,
      "stat_name": "ATK"
    },
    {
      "grade": 5,
      "opt_type": 2,
      "min": 34,
      "max": 313,
      "stat_name": "ATK"
    },
    {
      "grade": 6,
      "opt_type": 2,
      "min": 54,
      "max": 389,
      "stat_name": "ATK"
    },
    {
      "grade": 1,
      "opt_type": 3,
      "min": 5,
      "max": 86,
      "stat_name": "DEF"
    },
    {
      "grade": 2,
      "opt_type": 3,
      "min": 8,
      "max": 122,
      "stat_name": "DEF"
    },
    {
      "grade": 3,
      "opt_type": 3,
      "min": 13,
      "max": 172,
      "stat_name": "DEF"
    },
    {
      "grade": 4,
      "opt_type": 3,
      "min": 21,
      "max": 235,
      "stat_name": "DEF"
    },
    {
      "grade": 5,
      "opt_type": 3,
      "min": 34,
      "max": 313,
      "stat_name": "DEF"
    },
    {
      "grade": 6,
      "opt_type": 3,
      "min": 54,
      "max": 389,
      "stat_name": "DEF"
    }
  ],
  "200": [
    {
      "grade": 1,
      "opt_type": 13,
      "min": 0.5,
      "max": 0.8,
      "stat_name": "SPD%"
    },
    {
      "grade": 2,
      "opt_type": 13,
      "min": 0.6,
      "max": 0.9,
      "stat_name": "SPD%"
    },
    {
      "grade": 3,
      "opt_type": 13,
      "min": 0.8,
      "max": 1.2,
      "stat_name": "SPD%"
    },
    {
      "grade": 4,
      "opt_type": 13,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "SPD%"
    },
    {
      "grade": 5,
      "opt_type": 13,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "SPD%"
    },
    {
      "grade": 6,
      "opt_type": 13,
      "min": 1.6,
      "max": 2.4,
      "stat_name": "SPD%"
    },
    {
      "grade": 1,
      "opt_type": 5,
      "min": 0.7,
      "max": 1.1,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 2,
      "opt_type": 5,
      "min": 0.9,
      "max": 1.4,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 3,
      "opt_type": 5,
      "min": 1.1,
      "max": 1.7,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 4,
      "opt_type": 5,
      "min": 1.4,
      "max": 2.1,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 5,
      "opt_type": 5,
      "min": 1.8,
      "max": 2.7,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 6,
      "opt_type": 5,
      "min": 2.3,
      "max": 3.5,
      "stat_name": "CRIT Rate%"
    },
    {
      "grade": 1,
      "opt_type": 6,
      "min": 1.2,
      "max": 1.8,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 2,
      "opt_type": 6,
      "min": 1.5,
      "max": 2.3,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 3,
      "opt_type": 6,
      "min": 1.9,
      "max": 2.9,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 4,
      "opt_type": 6,
      "min": 2.4,
      "max": 3.6,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 5,
      "opt_type": 6,
      "min": 3.0,
      "max": 4.5,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 6,
      "opt_type": 6,
      "min": 3.8,
      "max": 5.7,
      "stat_name": "CRIT DMG%"
    },
    {
      "grade": 1,
      "opt_type": 7,
      "min": 0.7,
      "max": 1.1,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 2,
      "opt_type": 7,
      "min": 0.9,
      "max": 1.4,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 3,
      "opt_type": 7,
      "min": 1.1,
      "max": 1.7,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 4,
      "opt_type": 7,
      "min": 1.4,
      "max": 2.1,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 5,
      "opt_type": 7,
      "min": 1.8,
      "max": 2.7,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 6,
      "opt_type": 7,
      "min": 2.3,
      "max": 3.5,
      "stat_name": "CRIT RES%"
    },
    {
      "grade": 1,
      "opt_type": 8,
      "min": 0.4,
      "max": 0.6,
      "stat_name": "ACC%"
    },
    {
      "grade": 2,
      "opt_type": 8,
      "min": 0.5,
      "max": 0.8,
      "stat_name": "ACC%"
    },
    {
      "grade": 3,
      "opt_type": 8,
      "min": 0.6,
      "max": 0.9,
      "stat_name": "ACC%"
    },
    {
      "grade": 4,
      "opt_type": 8,
      "min": 0.8,
      "max": 1.2,
      "stat_name": "ACC%"
    },
    {
      "grade": 5,
      "opt_type": 8,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "ACC%"
    },
    {
      "grade": 6,
      "opt_type": 8,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "ACC%"
    },
    {
      "grade": 1,
      "opt_type": 9,
      "min": 0.4,
      "max": 0.6,
      "stat_name": "EVD%"
    },
    {
      "grade": 2,
      "opt_type": 9,
      "min": 0.5,
      "max": 0.8,
      "stat_name": "EVD%"
    },
    {
      "grade": 3,
      "opt_type": 9,
      "min": 0.6,
      "max": 0.9,
      "stat_name": "EVD%"
    },
    {
      "grade": 4,
      "opt_type": 9,
      "min": 0.8,
      "max": 1.2,
      "stat_name": "EVD%"
    },
    {
      "grade": 5,
      "opt_type": 9,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "EVD%"
    },
    {
      "grade": 6,
      "opt_type": 9,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "EVD%"
    },
    {
      "grade": 1,
      "opt_type": 10,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "HP%"
    },
    {
      "grade": 2,
      "opt_type": 10,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "HP%"
    },
    {
      "grade": 3,
      "opt_type": 10,
      "min": 1.6,
      "max": 2.4,
      "stat_name": "HP%"
    },
    {
      "grade": 4,
      "opt_type": 10,
      "min": 2.0,
      "max": 3.0,
      "stat_name": "HP%"
    },
    {
      "grade": 5,
      "opt_type": 10,
      "min": 2.5,
      "max": 3.8,
      "stat_name": "HP%"
    },
    {
      "grade": 6,
      "opt_type": 10,
      "min": 3.1,
      "max": 4.7,
      "stat_name": "HP%"
    },
    {
      "grade": 1,
      "opt_type": 11,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "ATK"
    },
    {
      "grade": 2,
      "opt_type": 11,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "ATK"
    },
    {
      "grade": 3,
      "opt_type": 11,
      "min": 1.6,
      "max": 2.4,
      "stat_name": "ATK"
    },
    {
      "grade": 4,
      "opt_type": 11,
      "min": 2.0,
      "max": 3.0,
      "stat_name": "ATK"
    },
    {
      "grade": 5,
      "opt_type": 11,
      "min": 2.5,
      "max": 3.8,
      "stat_name": "ATK"
    },
    {
      "grade": 6,
      "opt_type": 11,
      "min": 3.1,
      "max": 4.7,
      "stat_name": "ATK"
    },
    {
      "grade": 1,
      "opt_type": 12,
      "min": 1.0,
      "max": 1.5,
      "stat_name": "DEF"
    },
    {
      "grade": 2,
      "opt_type": 12,
      "min": 1.3,
      "max": 2.0,
      "stat_name": "DEF"
    },
    {
      "grade": 3,
      "opt_type": 12,
      "min": 1.6,
      "max": 2.4,
      "stat_name": "DEF"
    },
    {
      "grade": 4,
      "opt_type": 12,
      "min": 2.0,
      "max": 3.0,
      "stat_name": "DEF"
    },
    {
      "grade": 5,
      "opt_type": 12,
      "min": 2.5,
      "max": 3.8,
      "stat_name": "DEF"
    },
    {
      "grade": 6,
      "opt_type": 12,
      "min": 3.1,
      "max": 4.7,
      "stat_name": "DEF"
    }
  ]
};
