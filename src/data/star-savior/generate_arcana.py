import json, sys, re, os

sys.stdout.reconfigure(encoding="utf-8")

BASE = "D:/starsavior-extractor/output/decrypted_templets"
OUT = "C:/Users/Borin/OneDrive/Documents/gacha-wiki/src/data/star-savior/arcana"


def load(name):
    with open(os.path.join(BASE, name), encoding="utf-8") as f:
        return json.load(f)


arcana_data = load("CLIENT_ARCANA_TEMPLET.json")
common_strings = load("STRING_COMMON.json")
dialog_strings = load("KEY_STRING_DIALOG.json")
promotes = load("CLIENT_ARCANA_PROMOTE_TEMPLET.json")
promote_groups = load("CLIENT_ARCANA_PROMOTE_GROUP_TEMPLET.json")
unique_promotes = load("CLIENT_ARCANA_UNIQUE_PROMOTE_TEMPLET.json")
event_groups = load("CLIENT_ARCANA_EVENT_GROUP_TEMPLET.json")
journey_events = load("CLIENT_JOURNEY_EVENT_TEMPLET.json")
cutscenes = load("CLIENT_CUTSCENE_TEMPLET.json")
journey_rewards = load("CLIENT_JOURNEY_REWARD_TEMPLET.json")

str_map = {}
for e in common_strings["Data"]:
    if e.get("Key"):
        str_map[e["Key"]] = e.get("Value_ENG", "") or e.get("Value", "")
for e in dialog_strings["Data"]:
    if e.get("Key"):
        k = e["Key"]
        if k not in str_map:
            str_map[k] = e.get("Value_ENG", "") or e.get("Value", "")


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


SPECIAL_TAG_MAP = {
    "AST_ATK": "ATK",
    "AST_DEF": "DEF",
    "AST_HP": "HP",
    "AST_RATE_CRITICAL": "Crit Rate",
    "AST_RATE_CRITICAL_DAMAGE": "Crit Damage",
    "AST_RATE_EFFECT_HIT": "Effect Hit",
    "AST_SE": "Super Effect",
    "AST_SUPER_ARMOR": "Toughness",
    "AST_TURN_SPEED": "Turn Speed",
    "NONE": None,
}
CLASS_SYNERGY_MAP = {
    "ACT_ALL": "All Classes",
    "ACT_SAVIOR": "Savior",
    "NURT_ASSASSIN": "Assassin",
    "NURT_CASTER": "Caster",
    "NURT_DEFENDER": "Defender",
    "NURT_RANGER": "Ranger",
    "NURT_STRIKER": "Striker",
    "NURT_SUPPORTER": "Supporter",
    "NONE": None,
}
STAT_TAG_MAP = {
    "JST_FOCUS": "Focus",
    "JST_HEALTH": "Health",
    "JST_ENDURANCE": "Endurance",
    "JST_PROTECT": "Protect",
    "JST_POWER": "Power",
    "NONE": None,
}
PROMOTE_TYPE_MAP = {
    "PT_JOURNEY_START": "Journey Start",
    "PT_TRAINNING": "Training",
    "PT_TRAINNING_TAG": "Class Training",
    "PT_REQUEST": "Request",
}
PROMOTE_VALUE_TYPE_MAP = {
    "PT_START_STAT": "Stat Bonus",
    "PT_START_PP": "Bond Points",
    "PT_START_ARCANAPOINT": "Arcana Points",
    "PT_START_COIN": "Coins",
    "PT_START_MAX_STAMINA": "Max Stamina",
    "TRAINING_VALUE_UP": "Training Efficiency",
    "TRAINING_VALUE_UP_TAG": "Class Training Efficiency",
    "TRAINING_BIG_SUCCESS_BONUS": "Big Success Bonus",
    "TRAINING_BONUS_TAG": "Class Training Bonus",
    "TRAINING_CONDITION_EFFICIENCY_UP": "Training Condition Efficiency",
    "TRAINING_INCREASE_VALUE_UP": "Stat Gain",
    "REQUEST_REWARD_COIN_INCREASE": "Request Coin Bonus",
}
UNIQUE_TYPE_MAP = {
    "UPAT_ARCANA_POINT": "Arcana Point",
}
UNIQUE_ICON_TYPE_MAP = {
    "ICON_ARCANA_UNIQUE_TRAINING_TAG": "Class Training",
    "ICON_ARCANA_UNIQUE_TRAINING": "Training",
    "ICON_ARCANA_UNIQUE_REQUEST": "Request",
}

promote_map = {p["PromoteId"]: p for p in promotes["Data"]}
group_map = {}
for g in promote_groups["Data"]:
    gid = g["PromoteGroupId"]
    if gid not in group_map:
        group_map[gid] = []
    group_map[gid].append(g["PromoteId"])

unique_map = {u["UniquePromoteId"]: u for u in unique_promotes["Data"]}

event_group_map = {}
for eg in event_groups["Data"]:
    aid = eg["ArcanaEventGroupId"]
    if aid not in event_group_map:
        event_group_map[aid] = []
    event_group_map[aid].append(
        {
            "journeyEventGroupId": eg["JourneyEventGroupId"],
            "reqEventClear": eg.get("ReqEventClear", 0),
        }
    )

je_map = {e["EventGroupId"]: e for e in journey_events["Data"]}
cs_map = {c["CutsceneId"]: c for c in cutscenes["Data"]}
jr_map = {r["RewardGroupId"]: r for r in journey_rewards["Data"]}

REWARD_TYPE_MAP = {
    "RT_STAT": "Stat",
    "RT_STAMINA": "Stamina",
    "RT_POTEN_POINT": "Potential Points",
    "RT_COIN": "Coins",
    "RT_CONDITION": "Condition",
    "RT_SE_POTEN": "SE Potential",
    "RT_STAT_POTEN": "Stat Potential",
    "RT_JOURNEY_BUFF": "Journey Buff",
    "RT_JOURNEY_ITEM": "Item",
    "RT_JOURNEY_BUFF_REMOVE_ALL": "Remove All Buffs",
    "RT_JOURNEY_BUFF_REMOVE_NEG": "Remove Negative Buffs",
    "RT_JOURNEY_BUFF_REMOVE_POS": "Remove Positive Buffs",
}


def decode_reward(rid):
    r = jr_map.get(rid)
    if not r:
        return None
    rt = r.get("RewardType", "")
    rtype_name = REWARD_TYPE_MAP.get(rt, rt)
    entry = {"type": rtype_name}
    if rt == "RT_STAT":
        stat = STAT_TAG_MAP.get(r.get("RewardStrId", ""), r.get("RewardStrId", ""))
        entry["stat"] = stat
        entry["value"] = r.get("StatMin", 0)
        return entry
    if rt == "RT_STAMINA":
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    if rt == "RT_POTEN_POINT":
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    if rt == "RT_COIN":
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    if rt == "RT_CONDITION":
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    if rt in ("RT_SE_POTEN", "RT_STAT_POTEN", "RT_JOURNEY_ITEM"):
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    if rt == "RT_JOURNEY_BUFF":
        entry["value"] = r.get("QuantityMin", 0)
        return entry
    return entry


count = 0
for a in arcana_data["Data"]:
    grade = a.get("ArcanaGrade", "")
    char_name = get_str(a.get("ArcanaTitle", ""))
    arcana_name = get_str(a.get("ArcanaName", ""))
    special_tag = SPECIAL_TAG_MAP.get(a.get("ArcanaSpecialTag", "NONE"))
    class_synergy = CLASS_SYNERGY_MAP.get(a.get("ArcanaClassTag", "NONE"))
    stat_tag = STAT_TAG_MAP.get(a.get("ArcanaTag", "NONE"))
    image = a.get("ArcanaImg", "")
    image_small = a.get("ArcanaImgSmall", "")
    arcana_id = a["ArcanaId"]
    promote_group_id = a.get("ArcanaPromoteGroupId", 0)
    event_group_id = a.get("ArcanaEventGroupId", 0)

    if not char_name:
        continue

    if arcana_name:
        slug = make_slug(char_name + " " + arcana_name)
    else:
        slug = make_slug(char_name)

    promotions = []
    if promote_group_id and promote_group_id in group_map:
        for pid in group_map[promote_group_id]:
            p = promote_map.get(pid)
            if not p:
                continue
            promo_type = PROMOTE_TYPE_MAP.get(
                p.get("PromoteActiveType", ""), p.get("PromoteActiveType", "")
            )
            value_type = PROMOTE_VALUE_TYPE_MAP.get(
                p.get("PromoteValueType", "").strip(),
                p.get("PromoteValueType", "").strip(),
            )
            stat_type_raw = p.get("PromoteStatType", "")
            stat_type = (
                STAT_TAG_MAP.get(stat_type_raw, stat_type_raw)
                if stat_type_raw
                else None
            )

            entry = {
                "unlockLevel": p.get("UnlockLevel", 0),
                "perLevel": p.get("PromotePerLevel", 0),
                "type": promo_type,
                "valueType": value_type,
            }
            if p.get("PromoteValue") is not None:
                entry["value"] = p["PromoteValue"]
            if p.get("PromoteAddPerValue") is not None:
                entry["addPerValue"] = p["PromoteAddPerValue"]
            if p.get("PromoteValueRate") is not None:
                entry["valueRate"] = p["PromoteValueRate"]
            if p.get("PromoteAddPerValueRate") is not None:
                entry["addPerValueRate"] = p["PromoteAddPerValueRate"]
            if stat_type:
                entry["statTag"] = stat_type
            promotions.append(entry)
        promotions.sort(key=lambda x: x["unlockLevel"])

    uniqueEffects = []
    if arcana_id in unique_map:
        u = unique_map[arcana_id]
        icon_type = UNIQUE_ICON_TYPE_MAP.get(u.get("UniquePromoteIcon", ""), "Training")
        effect_entry = {
            "type": UNIQUE_TYPE_MAP.get(
                u.get("UniquePromoteActiveType", ""),
                u.get("UniquePromoteActiveType", ""),
            ),
            "cost": u.get("UniquePromoteActiveValue", 0),
            "icon": u.get("UniquePromoteIcon", ""),
            "title": get_str(u.get("UniquePromoteTitle", "")),
            "iconType": icon_type,
        }
        arcana_promo = promote_map.get(arcana_id)
        if arcana_promo:
            effect_entry["effectType"] = PROMOTE_VALUE_TYPE_MAP.get(
                arcana_promo.get("PromoteValueType", ""),
                arcana_promo.get("PromoteValueType", ""),
            )
            stat_raw = arcana_promo.get("PromoteStatType", "")
            if stat_raw:
                effect_entry["statTag"] = STAT_TAG_MAP.get(stat_raw, stat_raw)
            if arcana_promo.get("PromoteValue") is not None:
                effect_entry["value"] = arcana_promo["PromoteValue"]
            if arcana_promo.get("PromoteValueRate") is not None:
                effect_entry["valueRate"] = arcana_promo["PromoteValueRate"]
        uniqueEffects.append(effect_entry)

    journeyEvents = []
    if event_group_id and event_group_id in event_group_map:
        for eg in event_group_map[event_group_id]:
            jeg_id = eg["journeyEventGroupId"]
            je = je_map.get(jeg_id)
            if not je:
                continue
            cs_id = je.get("Cutscene", 0)
            cs = cs_map.get(cs_id)
            title = get_str(cs.get("Title", "")) if cs else None
            rewards = []
            for anchor in je.get("RewardAnchorData") or []:
                for r in anchor.get("SuccessReward") or []:
                    decoded = decode_reward(r)
                    if decoded:
                        rewards.append(decoded)
            journeyEvents.append(
                {
                    "cutsceneId": cs_id,
                    "title": title,
                    "rewards": rewards,
                    "reqEventClear": eg.get("reqEventClear", 0),
                }
            )

    obj = {
        "id": arcana_id,
        "character": char_name,
        "name": arcana_name or "",
        "slug": slug,
        "grade": grade,
        "specialTag": special_tag,
        "classSynergy": class_synergy,
        "statTag": stat_tag,
        "image": image,
        "imageSmall": image_small,
        "characterId": a.get("CharacterCategoryNum", 0),
        "episode": get_str(a.get("ArcanaEpisode", "")) or "",
        "promotions": promotions,
        "uniqueEffects": uniqueEffects,
        "journeyEvents": journeyEvents,
    }

    filepath = os.path.join(OUT, f"{slug}.json")
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)
    count += 1

print(f"Written {count} arcana JSON files.")
