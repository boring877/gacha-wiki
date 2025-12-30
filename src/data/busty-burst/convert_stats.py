#!/usr/bin/env python3
"""
Convert ALL_CHARACTER_STATS.js to character-stats-full.js
Uses ID_TO_SLUG mapping to filter to only 75 valid characters
"""

import re
import json
import os

# ID to slug mapping (same as parse_skills.py)
ID_TO_SLUG = {
    # R Characters (ID: 2001-2028)
    2001: 'r-shamshel',
    2002: 'r-aysis',
    2003: 'r-roxanne',
    2004: 'r-luceria',
    2007: 'r-aphrodia',
    2009: 'r-drowatt',
    2010: 'r-aristera',
    2011: 'r-rosalyn',
    2012: 'r-estria',
    2013: 'r-celebria',
    2015: 'r-xevia',
    2016: 'r-shahar',
    2017: 'r-elythia',
    2018: 'r-nadine',
    2019: 'r-lorelia',
    2027: 'r-destra',
    2028: 'r-eskelda',

    # SR Characters
    2005: 'sr-gladys',
    2006: 'sr-emelaria',
    2008: 'sr-nerys',
    2014: 'sr-irina',
    2020: 'sr-sobrina',
    2021: 'sr-messeria',
    2022: 'sr-paia',
    2023: 'sr-azura',
    2024: 'sr-zoe',
    2025: 'sr-constantia',
    2026: 'sr-farneria',
    2029: 'artemis',
    2030: 'sr-athena',
    2031: 'sr-medusa',
    2032: 'sr-lucrezia',
    2033: 'venus',
    2035: 'liesel',
    2036: 'sr-ishtovia',
    2037: 'sr-veronica',
    2038: 'sr-celestia',
    2039: 'sr-guinevia',

    # SSR Base Characters with title variants
    2040: 'elegant-portrait-shamshel',
    2041: 'magical-princess-luceria',
    2042: 'golem-summoner-nerys',
    2043: 'mage-of-bastinton-sobrina',
    2044: 'hypnotic-dancer-messeria',
    2045: 'pious-cleric-ishtovia',

    # SSR Base Characters
    2046: 'theresia',
    2047: 'soltina',
    2048: 'artia',
    2049: 'the-dark-knight',
    2051: 'frey',
    2052: 'gemini',
    2053: 'estiriel',
    2054: 'hildis',
    2055: 'luca',
    2056: 'marina',
    2057: 'nora',
    2058: 'meinias',
    2060: 'yu-lima-elka',
    2061: 'stenlina',
    2062: 'hisara',
    2063: 'bianca',
    2064: 'natasha',

    # Limited/Event Characters
    2065: 'noble-succubus-empress-shamshel',
    2066: 'elegant-portrait-aysis',
    2067: 'mischievous-mermaid-princess-lorelia',
    2068: 'festival-empress-shamshel',
    2069: 'festival-attire-estiriel',
    2070: 'festival-dress-up-natasha',
    2071: 'kaguya',
    2072: 'shaty',

    # Christmas & New Year Event Characters
    2095: 'queen-of-pies-and-cookies-aphrodia',
    2096: 'magical-holy-night-festival-kaguya',
    2097: 'holy-night-succubus-yu-rima-elca',
    2099: 'dragon-crusher-medusa',
    2100: 'new-years-calligraphy-pastel',
    2101: 'overflowing-jubako-lynette',
}

# Stat key conversion (from JS snake_case to our camelCase)
STAT_KEY_MAP = {
    'hp': 'hp',
    'atk': 'atk',
    'matk': 'matk',
    'def': 'def',
    'mdef': 'mdef',
    'accuracy': 'accuracy',
    'block': 'block',
    'phys_crit': 'physCrit',
    'magic_crit': 'magicCrit',
    'hp_regen': 'hpRegen',
    'mp_regen': 'mpRegen',
    'healing_power': 'healPwr',
    'hp_drain': 'hpDrain',
    'mp_charge': 'mpCharge',
    'mp_cost_down': 'mpCostDown',
}


def convert_stat_keys(stats_dict):
    """Convert snake_case keys to camelCase."""
    return {STAT_KEY_MAP.get(k, k): v for k, v in stats_dict.items()}


def parse_js_file(filepath):
    """Parse the JS file and extract character data."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the JSON object - it starts after "const CHARACTER_STATS = "
    match = re.search(r'const CHARACTER_STATS = ({[\s\S]+?});', content)
    if not match:
        raise ValueError("Could not find CHARACTER_STATS object in file")

    json_str = match.group(1)
    # Fix potential trailing comma issues
    json_str = re.sub(r',(\s*[}\]])', r'\1', json_str)

    data = json.loads(json_str)
    return data.get('characters', [])


def generate_js(characters, output_path):
    """Generate the character-stats-full.js file."""

    js_content = """// Character Stats Data for Busty Burst
// Auto-generated from ALL_CHARACTER_STATS.js - {count} characters total
// Includes: Base stats, Level 90 stats, Limit Break, GP Ability, Ability Grade, Passive Abilities

// Calculate stat at any level (linear interpolation)
export function calculateStatAtLevel(base, lv90, level) {{
  if (level <= 1) return base;
  if (level >= 90) return lv90;
  const growth = lv90 - base;
  const perLevel = growth / 89;
  return Math.floor(base + perLevel * (level - 1));
}}

// Calculate crit rate percentage from raw value
export function calculateCritRate(critValue) {{
  return (critValue / 20).toFixed(2);
}}

// Stat display names for UI
export const STAT_DISPLAY_NAMES = {{
  hp: 'HP',
  atk: 'ATK',
  matk: 'MATK',
  def: 'DEF',
  mdef: 'MDEF',
  accuracy: 'Accuracy',
  block: 'Block',
  physCrit: 'P.Crit',
  magicCrit: 'M.Crit',
  hpRegen: 'HP Regen',
  mpRegen: 'MP Regen',
  healPwr: 'Heal Pwr',
  mpCharge: 'MP Charge',
  hpDrain: 'HP Drain',
  mpCostDown: 'MP Cost',
}};

export const BUSTY_BURST_CHARACTER_STATS = {{
""".format(count=len(characters))

    for char in characters:
        slug = char['slug']
        char_id = char['characterId']
        name = char['name'].replace("'", "\\'").replace('【', '[').replace('】', '] ')
        rarity = char['rarity']

        # Build baseStats object
        base_stats = char.get('baseStats', {})
        lv90_stats = char.get('lv90Stats', {})

        base_stats_str = '{\n'
        stat_order = ['hp', 'atk', 'matk', 'def', 'mdef', 'accuracy', 'block',
                      'physCrit', 'magicCrit', 'hpRegen', 'mpRegen', 'healPwr',
                      'mpCharge', 'hpDrain', 'mpCostDown']

        for stat in stat_order:
            if stat in base_stats:
                base_val = base_stats[stat]
                lv90_val = lv90_stats.get(stat, base_val)
                # hpDrain is percentage
                if stat == 'hpDrain':
                    base_stats_str += f"      {stat}: {{ base: {base_val}, lv90: {lv90_val}, isPercent: true }},\n"
                else:
                    base_stats_str += f"      {stat}: {{ base: {base_val}, lv90: {lv90_val} }},\n"

        base_stats_str += '    }'

        # Build limitBreak object
        lb = char.get('limitBreak', {})
        lb_str = '{\n'
        for lb_key in ['lb1', 'lb2', 'lb3', 'lb4', 'lb5']:
            if lb.get(lb_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in lb[lb_key].items()])
                lb_str += f"      {lb_key}: {{ {stats_parts} }},\n"
        lb_str += '    }'

        # Build gpAbility object
        gp = char.get('gpAbility', {})
        gp_str = '{\n'
        for i in range(1, 11):
            gp_key = f'lv{i}'
            if gp.get(gp_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in gp[gp_key].items()])
                gp_str += f"      {gp_key}: {{ {stats_parts} }},\n"
        gp_str += '    }'

        # Build abilityGrade object
        grade = char.get('abilityGrade', {})
        grade_str = '{\n'
        for i in range(1, 11):
            g_key = f'g{i}'
            if grade.get(g_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in grade[g_key].items()])
                grade_str += f"      {g_key}: {{ {stats_parts} }},\n"
        grade_str += '    }'

        # Build passiveAbilities array (slot 1-5, grades 1-10)
        passives = char.get('passiveAbilities', [])
        passives_str = '['
        if passives:
            passives_str += '\n'
            for p in passives:
                grades_str = ', '.join([f"g{i}: {p['grades'].get(f'g{i}', 0)}" for i in range(1, 11)])
                passives_str += f"      {{ slot: {p['slot']}, stat: '{p['stat']}', grades: {{ {grades_str} }} }},\n"
            passives_str += '    ]'
        else:
            passives_str += ']'

        # Tags
        tags = char.get('tags', [])
        tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'

        js_content += f"""
  '{slug}': {{
    id: '{slug}',
    characterId: {char_id},
    name: '{name}',
    rarity: '{rarity}',
    element: '{char.get('element', 'Unknown')}',
    weapon: '{char.get('weapon', 'Unknown')}',
    role: '{char.get('role', 'Attacker')}',
    tags: {tags_str},
    baseStats: {base_stats_str},
    passiveAbilities: {passives_str},
    limitBreak: {lb_str},
    gpAbility: {gp_str},
    abilityGrade: {grade_str},
  }},
"""

    js_content += """};

// Helper function to get all character stats as array
export function getAllCharacterStats() {
  return Object.values(BUSTY_BURST_CHARACTER_STATS);
}

// Helper function to get character stats by ID
export function getCharacterStatsById(id) {
  return BUSTY_BURST_CHARACTER_STATS[id] || null;
}

// Helper function to get character stats by numeric character ID
export function getCharacterStatsByCharacterId(characterId) {
  return Object.values(BUSTY_BURST_CHARACTER_STATS).find(c => c.characterId === characterId) || null;
}
"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    return len(characters)


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, 'ALL_CHARACTER_STATS.js')
    output_file = os.path.join(script_dir, 'character-stats-full.js')

    valid_ids = set(ID_TO_SLUG.keys())
    print(f"Valid IDs: {len(valid_ids)} characters in ID_TO_SLUG mapping")

    print(f"Parsing {input_file}...")
    all_characters = parse_js_file(input_file)
    print(f"Found {len(all_characters)} characters in JS file")

    # Filter and transform characters
    characters = []
    matched_ids = set()
    unmatched = []

    for char in all_characters:
        char_id = int(char['id'])
        name = char.get('name', '')

        if char_id in valid_ids:
            if char_id not in matched_ids:
                slug = ID_TO_SLUG[char_id]

                # Transform to our format
                transformed = {
                    'slug': slug,
                    'characterId': char_id,
                    'name': name,
                    'rarity': char.get('rarity', 'SSR'),
                    'element': char.get('element', 'Unknown'),
                    'weapon': char.get('weapon', 'Unknown'),
                    'role': char.get('role', 'Attacker'),
                    'tags': char.get('tags', []),
                    'baseStats': convert_stat_keys(char.get('base_stats', {})),
                    'lv90Stats': convert_stat_keys(char.get('lv90_stats', {})),
                    'limitBreak': {},
                    'gpAbility': {},
                    'abilityGrade': {},
                    'passiveAbilities': [],
                }

                # Convert limit break
                lb = char.get('limit_break', {})
                for lb_key in ['lb1', 'lb2', 'lb3', 'lb4', 'lb5']:
                    if lb.get(lb_key):
                        transformed['limitBreak'][lb_key] = convert_stat_keys(lb[lb_key])

                # Convert GP ability
                gp = char.get('gp_ability', {})
                for i in range(1, 11):
                    gp_key = f'lv{i}'
                    if gp.get(gp_key):
                        transformed['gpAbility'][gp_key] = convert_stat_keys(gp[gp_key])

                # Convert ability grade (grade1 -> g1)
                ag = char.get('ability_grade', {})
                for i in range(1, 11):
                    src_key = f'grade{i}'
                    dest_key = f'g{i}'
                    if ag.get(src_key):
                        transformed['abilityGrade'][dest_key] = convert_stat_keys(ag[src_key])

                # Convert passive abilities (grouped by slot across grades)
                pa = char.get('passive_abilities', {})
                slots_data = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}}

                for grade_key, abilities in pa.items():
                    grade_num = int(grade_key.replace('grade', ''))
                    for ability in abilities:
                        slot = ability['slot']
                        stat = ability['ability']
                        value = ability['value']
                        if slot not in slots_data:
                            slots_data[slot] = {'stat': stat, 'grades': {}}
                        if 'stat' not in slots_data[slot]:
                            slots_data[slot] = {'stat': stat, 'grades': {}}
                        slots_data[slot]['stat'] = stat
                        slots_data[slot]['grades'][f'g{grade_num}'] = value

                for slot in range(1, 6):
                    if slots_data[slot] and slots_data[slot].get('stat'):
                        transformed['passiveAbilities'].append({
                            'slot': slot,
                            'stat': slots_data[slot]['stat'],
                            'grades': slots_data[slot].get('grades', {})
                        })

                characters.append(transformed)
                matched_ids.add(char_id)
        else:
            unmatched.append(f"ID {char_id}: {name}")

    print(f"\nMatched {len(characters)} characters")

    if unmatched:
        print(f"\nSkipped characters ({len(unmatched)}):")
        for u in unmatched[:10]:
            try:
                print(f"  - {u}")
            except UnicodeEncodeError:
                print(f"  - {u.encode('ascii', 'replace').decode()}")
        if len(unmatched) > 10:
            print(f"  ... and {len(unmatched) - 10} more")

    missing_ids = valid_ids - matched_ids
    if missing_ids:
        print(f"\nMissing from JS file ({len(missing_ids)}):")
        for mid in sorted(missing_ids):
            print(f"  - ID {mid}: {ID_TO_SLUG[mid]}")

    # Count by rarity
    ssr = len([c for c in characters if c.get('rarity') == 'SSR'])
    sr = len([c for c in characters if c.get('rarity') == 'SR'])
    r = len([c for c in characters if c.get('rarity') == 'R'])
    print(f"\nRarity breakdown: SSR: {ssr}, SR: {sr}, R: {r}")

    print(f"\nGenerating {output_file}...")
    count = generate_js(characters, output_file)
    print(f"Done! Generated data for {count} characters")


if __name__ == '__main__':
    main()
