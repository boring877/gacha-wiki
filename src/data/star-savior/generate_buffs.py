# Generates buffs.js data file for Star Savior buff/debuff database
# Reads CLIENT_BUFF_TEMPLET.json and STRING_COMMON.json
# Outputs all battle buffs/debuffs with names, descriptions, stats, and icon refs

import json, sys, re, os

sys.stdout.reconfigure(encoding="utf-8")

BASE = "D:/starsavior-extractor/output/decrypted_templets"
OUT_DIR = "C:/Users/Borin/OneDrive/Documents/gacha-wiki/src/data/star-savior"


def load(name):
    import re as _re

    with open(os.path.join(BASE, name), encoding="utf-8") as f:
        text = f.read()
    text = _re.sub(r",(\s*[}\]])", r"\1", text)
    return json.loads(text)


buff_data = load("CLIENT_BUFF_TEMPLET.json")
common_strings = load("STRING_COMMON.json")

str_map = {}
for e in common_strings["Data"]:
    if e.get("Key"):
        str_map[e["Key"]] = e.get("Value_ENG", "") or e.get("Value", "")


def get_str(key):
    if not key or key == "NONE":
        return ""
    return str_map.get(key, "")


def make_slug(text):
    if not text:
        return ""
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


STAT_DISPLAY_MAP = {
    "NST_ATK": "ATK",
    "NST_DEF": "DEF",
    "NST_HP": "HP",
    "NST_TURN_SPEED": "SPD",
    "NST_NV_RATE_ATK": "ATK",
    "NST_NV_RATE_DEF": "DEF",
    "NST_NV_RATE_HP": "HP",
    "NST_NV_RATE_TURN_SPEED": "SPD",
    "NST_RATE_CRITICAL": "CRIT Rate",
    "NST_RATE_CRITICAL_DAMAGE": "CRIT DMG",
    "NST_RATE_CRITICAL_DAMAGE_REDUCE": "CRIT DMG Taken Reduction",
    "NST_RATE_CRITICAL_EVADE": "CRIT RES",
    "NST_RATE_CROSS_ATTACK": "Dual Attack Chance",
    "NST_RATE_DAMAGE_LIMIT_BY_HP": "Max DMG Limit",
    "NST_RATE_DAMAGE_PER_MAX_TARGET_HP": "Max HP-Based DMG",
    "NST_RATE_DAMAGE_PER_NOW_TARGET_HP": "Current HP-Based DMG",
    "NST_RATE_DAMAGE_REDUCE": "DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST": "Attribute DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST_CHAOS": "vs Chaos DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST_MOON": "vs Moon DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST_ORDER": "vs Order DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST_STAR": "vs Star DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ADJUST_SUN": "vs Sun DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_BREAK": "DMG Taken Reduction (Break)",
    "NST_RATE_DAMAGE_REDUCE_ROLE_ASSASSIN": "vs Assassin DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ROLE_CASTER": "vs Caster DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ROLE_DEFENDER": "vs Defender DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ROLE_RANGER": "vs Ranger DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ROLE_STRIKER": "vs Striker DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_ROLE_SUPPORTER": "vs Supporter DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_SKILL_ATTACK": "Basic Skill DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ALL": "vs All Targets DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_SKILL_ENEMY_ONE": "vs Single Target DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_SKILL_HYPER": "Ultimate Skill DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_SKILL_SPECIAL": "Special Skill DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_UNIT_ELEMENT": "vs Element DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_UNIT_IMPACT": "vs Impact DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_UNIT_SLASH": "vs Slash DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_UNIT_SPIRIT": "vs Spirit DMG Taken Reduction",
    "NST_RATE_DAMAGE_REDUCE_UNIT_VOID": "vs Void DMG Taken Reduction",
    "NST_RATE_DAMAGE_SHARE": "Damage Share",
    "NST_RATE_DAMAGE_UP": "DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST": "Attribute DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST_CHAOS": "vs Chaos DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST_MOON": "vs Moon DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST_ORDER": "vs Order DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST_STAR": "vs Star DMG Increase",
    "NST_RATE_DAMAGE_UP_ADJUST_SUN": "vs Sun DMG Increase",
    "NST_RATE_DAMAGE_UP_BREAK": "DMG Increase (Break)",
    "NST_RATE_DAMAGE_UP_ROLE_ASSASSIN": "vs Assassin DMG Increase",
    "NST_RATE_DAMAGE_UP_ROLE_CASTER": "vs Caster DMG Increase",
    "NST_RATE_DAMAGE_UP_ROLE_DEFENDER": "vs Defender DMG Increase",
    "NST_RATE_DAMAGE_UP_ROLE_RANGER": "vs Ranger DMG Increase",
    "NST_RATE_DAMAGE_UP_ROLE_STRIKER": "vs Striker DMG Increase",
    "NST_RATE_DAMAGE_UP_ROLE_SUPPORTER": "vs Supporter DMG Increase",
    "NST_RATE_DAMAGE_UP_SKILL_ATTACK": "Basic Skill DMG Increase",
    "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ALL": "vs All Targets DMG Increase",
    "NST_RATE_DAMAGE_UP_SKILL_ENEMY_ONE": "vs Single Target DMG Increase",
    "NST_RATE_DAMAGE_UP_SKILL_HYPER": "Ultimate Skill DMG Increase",
    "NST_RATE_DAMAGE_UP_SKILL_SPECIAL": "Special Skill DMG Increase",
    "NST_RATE_DAMAGE_UP_TARGET_BUFF_COUNT": "DMG Increase per Target Buff",
    "NST_RATE_DAMAGE_UP_TARGET_DEBUFF_COUNT": "DMG Increase per Target Debuff",
    "NST_RATE_DAMAGE_UP_UNIT_ELEMENT": "vs Element DMG Increase",
    "NST_RATE_DAMAGE_UP_UNIT_IMPACT": "vs Impact DMG Increase",
    "NST_RATE_DAMAGE_UP_UNIT_SLASH": "vs Slash DMG Increase",
    "NST_RATE_DAMAGE_UP_UNIT_SPIRIT": "vs Spirit DMG Increase",
    "NST_RATE_DAMAGE_UP_UNIT_VOID": "vs Void DMG Increase",
    "NST_RATE_DAMAGE_VAMPIRISM": "Lifesteal",
    "NST_RATE_DEFINITE_EFFECT_EVADE": "Absolute Effect RES",
    "NST_RATE_EFFECT_EVADE": "Effect RES",
    "NST_RATE_EFFECT_HIT": "Effect Hit",
    "NST_RATE_EVADE": "Evasion",
    "NST_RATE_HEAL_GIVE": "Outgoing Healing",
    "NST_RATE_HEAL_RECEIVE": "Incoming Healing",
    "NST_RATE_HIT": "ACC",
    "NST_RATE_NONCRITICAL_DAMAGE_REDUCE": "Non-CRIT DMG Taken Reduction",
    "NST_RATE_PENETRATE_DEF": "DEF Penetration",
    "NST_RATE_PENETRATE_DEF_RESIST": "DEF Penetration RES",
    "NST_RATE_PREEMPTIVE_DEFEND": "Preemptive Guard Chance",
    "NST_RATE_PREEMPTIVE_DEFEND_REDUCE": "Preemptive Guard Ignore",
    "NST_RATE_REVENGE_ATTACK": "Counterattack Chance",
    "NST_SUPER_ARMOR": "Super Armor",
    "NST_SUPER_ARMOR_DAMAGE": "Toughness",
    "NST_SUPER_ARMOR_DAMAGE_REDUCE": "Toughness DMG Reduction",
    "NST_SUPER_ARMOR_TRUE_DAMAGE": "Toughness Fixed DMG",
}


def is_rate_stat(stat_type):
    return stat_type.startswith("NST_RATE_") or stat_type.startswith("NST_NV_RATE_")


def format_stat_value(stat_type, value):
    if is_rate_stat(stat_type):
        return f"{value / 100:.0f}%"
    return str(value)


def categorize_buff(entry):
    buff_str_id = entry.get("m_BuffStrID", "")
    flags = {
        "stun": entry.get("m_bStun", False),
        "sleep": entry.get("m_bSleep", False),
        "silence": entry.get("m_bSilence", False),
        "aggro": entry.get("m_bAggro", False),
        "hide": entry.get("m_bHide", False),
        "hideDetect": entry.get("m_bHideDetect", False),
        "immortal": entry.get("m_bImmortal", False),
        "invincible": entry.get("Invincible", False),
        "debuffBan": entry.get("m_bDebuffBan", False),
        "buffBan": entry.get("m_bBuffBan", False),
        "disablePassive": entry.get("DisablePassiveSkill", False),
        "disableReact": entry.get("DisableReactSkill", False),
        "forceEvade": entry.get("m_bForceEvade", False),
        "forceHit": entry.get("m_bForceHit", False),
        "forceCritical": entry.get("m_bForceCritical", False),
        "trueDamage": entry.get("m_bTrueDamage", False),
        "skillNullifier": entry.get("SkillNullifier", False),
        "superArmorUp": entry.get("SuperArmorUp", False),
        "damageBreak": entry.get("DamageBreak", False),
        "coolturnUp": entry.get("SkillCoolturnUp", False),
        "coolturnDown": entry.get("SkillCoolturnDown", False),
        "deleteBuff": entry.get("DeleteBuff", False),
        "deleteDebuff": entry.get("DeleteDebuff", False),
        "addDamage": entry.get("AddDamage", False),
        "barrier": entry.get("Barrier", False),
        "immuneStun": entry.get("m_bImmuneStun", False),
        "immuneSleep": entry.get("m_bImmuneSleep", False),
        "immuneSilence": entry.get("m_bImmuneSilence", False),
        "immuneAggro": entry.get("m_bImmuneAggro", False),
        "immuneAggro": entry.get("m_bImmuneAggro", False),
        "vampirism": entry.get("Vampirism", False),
        "revengeAttack": entry.get("RevengeAttack", False),
        "crossAttack": entry.get("CrossAttack", False),
    }

    stats = entry.get("Stats", [])
    is_positive = entry.get("IsPositive", True)

    has_any_flag = any(flags.values())
    has_stats = bool(stats)

    if flags["stun"]:
        return "crowd-control"
    if flags["sleep"]:
        return "crowd-control"
    if flags["silence"]:
        return "crowd-control"
    if flags["aggro"]:
        return "crowd-control"
    if flags["disablePassive"]:
        return "crowd-control"
    if flags["disableReact"]:
        return "crowd-control"
    if flags["immortal"]:
        return "protection"
    if flags["invincible"]:
        return "protection"
    if flags["barrier"]:
        return "protection"
    if flags["debuffBan"]:
        return "protection"
    if flags["buffBan"]:
        return "crowd-control"
    if flags["hide"]:
        return "mechanic"
    if flags["hideDetect"]:
        return "mechanic"
    if flags["forceEvade"]:
        return "mechanic"
    if flags["forceHit"]:
        return "mechanic"
    if flags["forceCritical"]:
        return "mechanic"
    if flags["trueDamage"]:
        return "mechanic"
    if flags["skillNullifier"]:
        return "protection"
    if flags["superArmorUp"]:
        return "protection"
    if flags["damageBreak"]:
        return "mechanic"
    if flags["deleteBuff"]:
        return "dispel"
    if flags["deleteDebuff"]:
        return "dispel"
    if flags["vampirism"]:
        return "mechanic"
    if flags["revengeAttack"]:
        return "mechanic"
    if flags["crossAttack"]:
        return "mechanic"
    if flags["coolturnUp"]:
        return "cooldown"
    if flags["coolturnDown"]:
        return "cooldown"

    if has_stats:
        return "stat"

    burn_id = entry.get("m_BurnDTStrID", "")
    bleed_id = entry.get("m_BleedingDTStrID", "")
    poison_id = entry.get("m_PoisonDTStrID", "")
    if burn_id or bleed_id or poison_id:
        return "dot"

    return "special"


CATEGORY_LABELS = {
    "stat": "Stat Modifier",
    "crowd-control": "Crowd Control",
    "protection": "Protection",
    "mechanic": "Mechanic",
    "dispel": "Dispel",
    "dot": "Damage over Time",
    "cooldown": "Cooldown",
    "special": "Special",
}

CATEGORY_ORDER = {
    "stat": 0,
    "crowd-control": 1,
    "protection": 2,
    "mechanic": 3,
    "dispel": 4,
    "dot": 5,
    "cooldown": 6,
    "special": 7,
}


def get_effects_description(entry, flags):
    effects = []
    if flags["stun"]:
        effects.append("Stuns the target")
    if flags["sleep"]:
        effects.append("Puts the target to sleep")
    if flags["silence"]:
        effects.append("Disables cooldown skills")
    if flags["aggro"]:
        effects.append("Forces enemies to target this unit")
    if flags["hide"]:
        effects.append("Unit becomes untargetable")
    if flags["hideDetect"]:
        effects.append("Can detect hidden units")
    if flags["immortal"]:
        effects.append("Prevents death")
    if flags["invincible"]:
        effects.append("Prevents all damage")
    if flags["barrier"]:
        effects.append("Absorbs damage")
    if flags["debuffBan"]:
        effects.append("Immune to debuffs")
    if flags["buffBan"]:
        effects.append("Cannot receive buffs")
    if flags["disablePassive"]:
        effects.append("Disables passive skills")
    if flags["disableReact"]:
        effects.append("Disables react skills")
    if flags["forceEvade"]:
        effects.append("Forces evasion")
    if flags["forceHit"]:
        effects.append("Forces hits (ignores evasion)")
    if flags["forceCritical"]:
        effects.append("Forces critical hits")
    if flags["trueDamage"]:
        effects.append("Deals true damage")
    if flags["skillNullifier"]:
        effects.append("Nullifies skill damage")
    if flags["superArmorUp"]:
        effects.append("Recovers super armor")
    if flags["damageBreak"]:
        effects.append("Breaks damage cap")
    if flags["deleteBuff"]:
        effects.append("Removes buffs")
    if flags["deleteDebuff"]:
        effects.append("Removes debuffs")
    if flags["vampirism"]:
        effects.append("Heals based on damage dealt")
    if flags["revengeAttack"]:
        effects.append("Counterattacks when hit")
    if flags["crossAttack"]:
        effects.append("Attacks alongside allies")
    if flags["coolturnUp"]:
        effects.append("Increases skill cooldowns")
    if flags["coolturnDown"]:
        effects.append("Reduces skill cooldowns")
    return effects


buffs = []
for entry in buff_data["Data"]:
    buff_id = entry.get("m_BuffID", 0)
    buff_str_id = entry.get("m_BuffStrID", "")
    name_key = entry.get("m_BuffName", "")
    desc_key = entry.get("m_BuffDesc", "")
    icon = entry.get("m_IconName", "")
    is_positive = entry.get("IsPositive", True)
    can_not_dispel = entry.get("CanNotDispel", False)
    is_unique = entry.get("IsUniqueID", False)
    contents_tag = entry.get("ContentsTag", "")

    name = get_str(name_key)
    desc = get_str(desc_key)

    if not name:
        continue

    stats = entry.get("Stats", [])
    category = categorize_buff(entry)

    stat_mods = []
    for s in stats:
        stat_type = s.get("NKM_STAT_TYPE", "")
        stat_rate = s.get("NKM_STAT_TYPE_RATE", 0)
        display_name = STAT_DISPLAY_MAP.get(stat_type, stat_type)
        display_val = format_stat_value(stat_type, stat_rate)
        prefix = "+" if stat_rate >= 0 else ""
        stat_mods.append(
            {
                "stat": display_name,
                "rawStat": stat_type,
                "value": stat_rate,
                "display": f"{prefix}{display_val} {display_name}",
            }
        )

    flags = {
        "stun": entry.get("m_bStun", False),
        "sleep": entry.get("m_bSleep", False),
        "silence": entry.get("m_bSilence", False),
        "aggro": entry.get("m_bAggro", False),
        "hide": entry.get("m_bHide", False),
        "hideDetect": entry.get("m_bHideDetect", False),
        "immortal": entry.get("m_bImmortal", False),
        "invincible": entry.get("Invincible", False),
        "debuffBan": entry.get("m_bDebuffBan", False),
        "buffBan": entry.get("m_bBuffBan", False),
        "disablePassive": entry.get("DisablePassiveSkill", False),
        "disableReact": entry.get("DisableReactSkill", False),
        "forceEvade": entry.get("m_bForceEvade", False),
        "forceHit": entry.get("m_bForceHit", False),
        "forceCritical": entry.get("m_bForceCritical", False),
        "trueDamage": entry.get("m_bTrueDamage", False),
        "skillNullifier": entry.get("SkillNullifier", False),
        "superArmorUp": entry.get("SuperArmorUp", False),
        "damageBreak": entry.get("DamageBreak", False),
        "coolturnUp": entry.get("SkillCoolturnUp", False),
        "coolturnDown": entry.get("SkillCoolturnDown", False),
        "deleteBuff": entry.get("DeleteBuff", False),
        "deleteDebuff": entry.get("DeleteDebuff", False),
        "addDamage": entry.get("AddDamage", False),
        "barrier": entry.get("Barrier", False),
        "immuneStun": entry.get("m_bImmuneStun", False),
        "immuneSleep": entry.get("m_bImmuneSleep", False),
        "immuneSilence": entry.get("m_bImmuneSilence", False),
        "immuneAggro": entry.get("m_bImmuneAggro", False),
        "vampirism": entry.get("Vampirism", False),
        "revengeAttack": entry.get("RevengeAttack", False),
        "crossAttack": entry.get("CrossAttack", False),
    }

    effects = get_effects_description(entry, flags)

    buff_entry = {
        "id": buff_id,
        "strId": buff_str_id,
        "name": name,
        "desc": desc,
        "icon": icon,
        "isBuff": is_positive,
        "category": category,
        "categoryLabel": CATEGORY_LABELS.get(category, "Special"),
        "canDispel": not can_not_dispel,
        "isUnique": is_unique,
        "stats": stat_mods,
        "effects": effects,
        "flags": {k: v for k, v in flags.items() if v},
    }

    slug = make_slug(name)
    if slug:
        buff_entry["slug"] = slug

    buffs.append(buff_entry)

buffs.sort(
    key=lambda x: (
        CATEGORY_ORDER.get(x["category"], 99),
        0 if x["isBuff"] else 1,
        x["id"],
    )
)

print(f"Total buffs with names: {len(buffs)}")
cats = {}
for b in buffs:
    c = b["category"]
    cats[c] = cats.get(c, 0) + 1
for c in sorted(cats, key=lambda x: CATEGORY_ORDER.get(x, 99)):
    print(
        f"  {CATEGORY_LABELS.get(c, c)}: {cats[c]} (buff: {sum(1 for b in buffs if b['category'] == c and b['isBuff'])}, debuff: {sum(1 for b in buffs if b['category'] == c and not b['isBuff'])})"
    )

js_lines = [
    "// Star Savior Buff/Debuff Data",
    f"// {len(buffs)} battle buffs and debuffs from CLIENT_BUFF_TEMPLET.json",
    "// Names and descriptions from STRING_COMMON.json (English)",
    "",
    "export const STAR_SAVIOR_BUFFS =",
    json.dumps(buffs, indent=2, ensure_ascii=False),
    ";",
]

out_path = os.path.join(OUT_DIR, "buffs.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))

print(f"\nWritten to {out_path}")
