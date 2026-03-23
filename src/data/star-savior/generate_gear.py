# Generates gear.js data file for Star Savior equipment database
# Reads CLIENT_EQUIP_ITEM_TEMPLET.json and STRING_COMMON.json
# Outputs 108 base items (one per set+type+tier+grade combo, picking highest mainStatValue)

import json, sys, re, os

sys.stdout.reconfigure(encoding="utf-8")

BASE = "D:/starsavior-extractor/output/decrypted_templets"
OUT_DIR = "C:/Users/Borin/OneDrive/Documents/gacha-wiki/src/data/star-savior"


def load(name):
    with open(os.path.join(BASE, name), encoding="utf-8") as f:
        return json.load(f)


equip_data = load("CLIENT_EQUIP_ITEM_TEMPLET.json")
set_option_data = load("CLIENT_EQUIP_SET_OPTION_TEMPLET.json")
level_group_data = load("CLIENT_EQUIP_LEVEL_GROUP_TEMPLET.json")
common_strings = load("STRING_COMMON.json")

str_map = {}
for e in common_strings["Data"]:
    if e.get("Key"):
        str_map[e["Key"]] = e.get("Value_ENG", "") or e.get("Value", "")


def get_str(key):
    if not key or key == "NONE":
        return None
    return str_map.get(key, "")


def make_slug(text):
    if not text:
        return ""
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


GRADE_MAP = {
    "IG_UNCOMMON": "Uncommon",
    "IG_RARE": "Rare",
    "IG_UNIQUE": "Unique",
    "IG_LEGENDARY": "Legendary",
}

GRADE_ORDER = {"Uncommon": 0, "Rare": 1, "Unique": 2, "Legendary": 3}

TYPE_MAP = {
    "ET_WEAPON": "Weapon",
    "ET_GLOVES": "Gloves",
    "ET_ARMOR": "Armor",
    "ET_SHOES": "Boots",
    "ET_NECKLACE": "Necklace",
    "ET_RING": "Ring",
}

STAT_MAP = {
    "NST_ATK": "ATK",
    "NST_DEF": "DEF",
    "NST_HP": "Flat HP",
    "NST_RATE_CRITICAL": "CRIT Rate",
    "NST_RATE_CRITICAL_DAMAGE": "CRIT Damage",
    "NST_RATE_EFFECT_HIT": "Effect Hit",
    "NST_RATE_EFFECT_EVADE": "Evasion",
    "NST_TURN_SPEED": "SPD",
    "NST_NV_RATE_ATK": "ATK %",
    "NST_NV_RATE_DEF": "DEF %",
    "NST_NV_RATE_HP": "HP %",
}

SET_MAP = {
    "MOTIVATOR": "Motivator",
    "WENDIGO": "Wendigo",
    "PERSES": "Perses",
}

SET_STAT_MAP = {
    "NST_TURN_SPEED": "SPD",
    "NST_NV_RATE_DEF": "DEF %",
    "NST_RATE_EFFECT_HIT": "Effect Hit",
    "NST_RATE_EFFECT_EVADE": "Evasion",
    "NST_NV_RATE_ATK": "ATK %",
    "NST_RATE_CRITICAL": "CRIT Rate",
    "NST_NV_RATE_HP": "HP %",
    "NST_RATE_CRITICAL_DAMAGE": "CRIT Damage",
}


def is_rate_stat(stat_type):
    return stat_type in (
        "NST_RATE_CRITICAL",
        "NST_RATE_CRITICAL_DAMAGE",
        "NST_RATE_EFFECT_HIT",
        "NST_RATE_EFFECT_EVADE",
        "NST_NV_RATE_ATK",
        "NST_NV_RATE_DEF",
        "NST_NV_RATE_HP",
    )


def format_stat_value(stat_type, value):
    if is_rate_stat(stat_type):
        return f"{value / 100:.0f}%"
    return str(value)


def get_set_from_name(name_key):
    if not name_key:
        return None
    m = name_key.replace("SI_EQUIP_NAME_", "")
    parts = m.split("_TIER_")
    if len(parts) >= 1:
        set_raw = parts[0]
        return SET_MAP.get(set_raw, set_raw)
    return None


def get_slot_from_name(name_key):
    if not name_key:
        return None
    m = name_key.replace("SI_EQUIP_NAME_", "")
    parts = m.split("_TIER_")
    if len(parts) >= 2:
        slot_raw = parts[1].split("_")[-1]
        return TYPE_MAP.get("ET_" + slot_raw, slot_raw)
    return None


set_option_map = {}
for s in set_option_data["Data"]:
    sid = s["SetOptionId"]
    set_name = get_str(s.get("SetName", ""))
    set_desc_key = s.get("SetDesc", "")
    set_desc = get_str(set_desc_key) if set_desc_key else ""
    set_icon = s.get("SetIconImg", "")
    need_parts = s.get("NeedParts", 0)
    stats = []
    for ss in s.get("SetStat", []) or []:
        stat_name = SET_STAT_MAP.get(ss["SetStatType"], ss["SetStatType"])
        stat_val = ss["SetStatValue"]
        if is_rate_stat(ss["SetStatType"]):
            stats.append(f"{stat_name} +{stat_val / 100:.0f}%")
        else:
            stats.append(f"{stat_name} +{stat_val}")
    set_option_map[sid] = {
        "id": sid,
        "name": set_name,
        "desc": set_desc,
        "icon": set_icon,
        "needParts": need_parts,
        "stats": stats,
        "statsDisplay": ", ".join(stats),
    }


max_enchant = {}
for lg in level_group_data["Data"]:
    gid = lg["EquipExpGroupId"]
    lvl = lg.get("EnchantLevel", 0)
    if gid not in max_enchant or lvl > max_enchant[gid]:
        max_enchant[gid] = lvl


groups = {}
for item in equip_data["Data"]:
    name_key = item.get("EquipItemName", "")
    item_set = get_set_from_name(name_key)
    item_type = TYPE_MAP.get(item.get("EquipType", ""), item.get("EquipType", ""))
    tier = item.get("EquipTier", 0)
    grade = GRADE_MAP.get(item.get("EquipGrade", ""), item.get("EquipGrade", ""))
    main_stat = STAT_MAP.get(
        item.get("EquipMainStatType", ""), item.get("EquipMainStatType", "")
    )
    main_stat_raw = item.get("EquipMainStatType", "")

    if not item_set or not item_type or not grade:
        continue

    key = (item_set, item_type, tier, grade)
    if key not in groups:
        groups[key] = []
    groups[key].append(item)

base_items = []
for (item_set, item_type, tier, grade), items in groups.items():
    best = max(items, key=lambda x: x.get("EquipMainStatValue", 0))
    main_stat_raw = best.get("EquipMainStatType", "")
    main_stat = STAT_MAP.get(main_stat_raw, main_stat_raw)
    main_stat_value = best.get("EquipMainStatValue", 0)
    enchant_per_stat = best.get("EquipEnchantPerStat", 0)
    exp_group = best.get("EquipExpGroupId", 0)
    sell_exp = best.get("EquipSellExp", 0)
    icon = best.get("EquipItemIconImg", "")
    name = get_str(best.get("EquipItemName", ""))
    desc = get_str(best.get("EquipItemDesc", ""))

    slug = make_slug(name) if name else ""

    base_items.append(
        {
            "id": best["EquipItemId"],
            "set": item_set,
            "type": item_type,
            "tier": tier,
            "grade": grade,
            "mainStat": main_stat,
            "mainStatValue": main_stat_value,
            "mainStatDisplay": format_stat_value(main_stat_raw, main_stat_value),
            "enchantPerStat": enchant_per_stat,
            "expGroupId": exp_group,
            "sellExp": sell_exp,
            "icon": icon,
            "name": name,
            "desc": desc,
            "slug": slug,
            "maxEnchantLevel": max_enchant.get(exp_group, 0),
        }
    )


base_items.sort(
    key=lambda x: (
        GRADE_ORDER.get(x["grade"], 99),
        x["set"],
        list(TYPE_MAP.values()).index(x["type"])
        if x["type"] in TYPE_MAP.values()
        else 99,
        x["tier"],
    )
)


js_lines = [
    "// Star Savior Gear/Equipment Data",
    "// 108 base items (3 sets x 6 types x 2 tiers x grades)",
    "// Necklace/Ring have multiple stat variants; this shows the highest mainStatValue variant per combo",
    "",
    "export const STAR_SAVIOR_GEAR = ",
    json.dumps(base_items, indent=2, ensure_ascii=False),
    ";",
    "",
    "export const STAR_SAVIOR_SET_BONUSES = ",
    json.dumps(list(set_option_map.values()), indent=2, ensure_ascii=False),
    ";",
]

out_path = os.path.join(OUT_DIR, "gear.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))

print(
    f"Written {len(base_items)} gear items and {len(set_option_map)} set bonuses to {out_path}"
)
