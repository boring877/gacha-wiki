#!/usr/bin/env python3
"""
Parse CHARACTER_STATS.txt (new format with tables) and generate character-stats-full.js
Only includes characters that exist in character-info.js (using ID_TO_SLUG mapping)
"""

import re
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

    # SR Characters (ID: 2005, 2006, 2008, 2014, 2020-2039)
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

    # SSR Base Characters with title variants (from txt file IDs)
    2040: 'elegant-portrait-shamshel',
    2041: 'magical-princess-luceria',
    2042: 'golem-summoner-nerys',
    2043: 'mage-of-bastinton-sobrina',
    2044: 'hypnotic-dancer-messeria',
    2045: 'pious-cleric-ishtovia',

    # SSR Base Characters (ID: 2046+)
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
    2076: 'ophelio',

    # Christmas & New Year Event Characters
    2095: 'queen-of-pies-and-cookies-aphrodia',
    2096: 'magical-holy-night-festival-kaguya',
    2097: 'holy-night-succubus-yu-rima-elca',
    2099: 'dragon-crusher-medusa',
    2100: 'new-years-calligraphy-pastel',
    2101: 'overflowing-jubako-lynette',
}

# Stat name mapping
STAT_NAME_MAP = {
    'HP': 'hp',
    'ATK': 'atk',
    'MATK': 'matk',
    'DEF': 'def',
    'MDEF': 'mdef',
    'Accuracy': 'accuracy',
    'Block': 'block',
    'Phys Crit': 'physCrit',
    'Magic Crit': 'magicCrit',
    'HP Regen': 'hpRegen',
    'MP Regen': 'mpRegen',
    'Healing Power': 'healPwr',
    'MP Charge': 'mpCharge',
    'HP Drain': 'hpDrain',
    'MP Cost Down': 'mpCostDown',
    'Heal Power': 'healPwr',  # Alternative name
}


def get_valid_ids():
    return set(ID_TO_SLUG.keys())


def get_slug_by_id(char_id):
    return ID_TO_SLUG.get(char_id)


def parse_base_stats_table(lines, start_idx):
    """Parse the BASE & LEVEL 90 STATS table.
    Format:
      Stat               Base (Lv1)         Lv90
      HP                       1715         8575
    """
    stats = {}
    i = start_idx

    # Find the table start (after the header line)
    while i < len(lines) and 'Base (Lv1)' not in lines[i]:
        i += 1
    i += 1  # Skip header

    # Skip separator line
    while i < len(lines) and lines[i].strip().startswith('---'):
        i += 1

    # Parse stat rows
    while i < len(lines):
        line = lines[i].strip()

        # Stop at section breaks
        if line.startswith('【') or line.startswith('===') or not line:
            if not line:
                i += 1
                continue
            break

        # Skip (Rate %) lines - these are sub-lines for crit
        if line.startswith('(Rate'):
            i += 1
            continue

        # Parse stat line: "  StatName    BaseValue    Lv90Value"
        # Handle special cases like "HP Drain    10%    28%"
        parts = line.split()
        if len(parts) >= 3:
            # Find where numbers start (from the end)
            # Last value is lv90, second to last is base
            stat_name_parts = []
            values = []

            for p in reversed(parts):
                # Check if it's a number or percentage
                clean = p.replace('%', '').replace(',', '')
                try:
                    float(clean)
                    values.insert(0, p)
                except ValueError:
                    stat_name_parts.insert(0, p)

            if len(values) >= 2:
                stat_name = ' '.join(stat_name_parts)
                stat_key = STAT_NAME_MAP.get(stat_name)

                if stat_key:
                    base_val = values[0].replace('%', '').replace(',', '')
                    lv90_val = values[1].replace('%', '').replace(',', '')

                    try:
                        base_num = int(float(base_val))
                        lv90_num = int(float(lv90_val))

                        # HP Drain is percentage
                        if stat_key == 'hpDrain':
                            stats[stat_key] = {'base': base_num, 'lv90': lv90_num, 'isPercent': True}
                        else:
                            stats[stat_key] = {'base': base_num, 'lv90': lv90_num}
                    except ValueError:
                        pass

        i += 1

    return stats, i


def parse_passive_abilities(lines, start_idx):
    """Parse the 5 PASSIVE ABILITIES section.
    Returns list of passive ability progressions for G1-G10.
    """
    passives = []
    i = start_idx

    # Skip header lines until we find the data rows
    while i < len(lines) and not lines[i].strip().startswith('1 ') and not lines[i].strip().startswith('  1 '):
        i += 1

    # Parse 5 slots (2 lines each: stat names row and values row)
    current_slot = 0
    while i < len(lines) and current_slot < 5:
        line = lines[i].strip()

        if line.startswith('【') or line.startswith('==='):
            break

        # Check if this is a slot number line (1-5)
        if line and line[0].isdigit():
            parts = line.split()
            if parts and parts[0].isdigit():
                slot_num = int(parts[0])
                if slot_num >= 1 and slot_num <= 5:
                    # This row has stat names: "1   HP   HP   HP..."
                    stat_names = parts[1:]  # Skip slot number

                    # Next row has values: "+181   +217   +253..."
                    i += 1
                    if i < len(lines):
                        value_line = lines[i].strip()
                        values = re.findall(r'[+-]?\d+', value_line)

                        if stat_names and values:
                            passive = {
                                'slot': slot_num,
                                'stat': stat_names[0] if stat_names else 'Unknown',
                                'grades': {}
                            }
                            for grade_idx, val in enumerate(values[:10], 1):
                                passive['grades'][f'g{grade_idx}'] = int(val)
                            passives.append(passive)
                    current_slot += 1

        i += 1

    return passives, i


def parse_limit_break(lines, start_idx):
    """Parse LIMIT BREAK BONUSES section."""
    lb_bonuses = {'lb1': {}, 'lb2': {}, 'lb3': {}, 'lb4': {}, 'lb5': {}, 'total': {}}
    i = start_idx

    # Skip to data rows
    while i < len(lines) and not lines[i].strip().startswith('HP') and not lines[i].strip().startswith('  HP'):
        i += 1

    while i < len(lines):
        line = lines[i].strip()

        if line.startswith('【') or line.startswith('===') or not line:
            if not line:
                i += 1
                continue
            break

        # Parse lines like: "HP   +515   +592   +695   +772   +1458   +4032"
        parts = line.split()
        if len(parts) >= 2:
            stat_name_parts = []
            values = []

            for p in parts:
                if p == '-':
                    values.append(0)
                elif p.startswith('+') or p.startswith('-') or p.replace(',', '').isdigit():
                    val = p.replace('+', '').replace(',', '')
                    try:
                        values.append(int(val))
                    except ValueError:
                        values.append(0)
                else:
                    stat_name_parts.append(p)

            stat_name = ' '.join(stat_name_parts)
            stat_key = STAT_NAME_MAP.get(stat_name)

            if stat_key and len(values) >= 6:
                for lb_idx, lb_key in enumerate(['lb1', 'lb2', 'lb3', 'lb4', 'lb5', 'total']):
                    if values[lb_idx] != 0:
                        lb_bonuses[lb_key][stat_key] = values[lb_idx]

        i += 1

    return lb_bonuses, i


def parse_gp_ability(lines, start_idx):
    """Parse GP ABILITY / BOND LEVEL section."""
    gp_bonuses = {f'lv{i}': {} for i in range(1, 11)}
    gp_bonuses['total'] = {}
    i = start_idx

    # Skip to data rows
    while i < len(lines) and 'Lv1' not in lines[i]:
        i += 1
    i += 1  # Skip header

    # Skip separator
    while i < len(lines) and lines[i].strip().startswith('---'):
        i += 1

    while i < len(lines):
        line = lines[i].strip()

        if line.startswith('【') or line.startswith('===') or not line:
            if not line:
                i += 1
                continue
            break

        # Parse lines like: "MATK   -   +40   -   +80..."
        parts = line.split()
        if len(parts) >= 2:
            stat_name_parts = []
            values = []

            for p in parts:
                if p == '-':
                    values.append(0)
                elif p.startswith('+') or p.replace('%', '').replace(',', '').replace('+', '').isdigit():
                    val = p.replace('+', '').replace('%', '').replace(',', '')
                    try:
                        values.append(int(val))
                    except ValueError:
                        values.append(0)
                else:
                    stat_name_parts.append(p)

            stat_name = ' '.join(stat_name_parts)
            stat_key = STAT_NAME_MAP.get(stat_name, stat_name.lower().replace(' ', '').replace('%', ''))

            if stat_key and len(values) >= 11:
                for lv_idx in range(10):
                    if values[lv_idx] != 0:
                        gp_bonuses[f'lv{lv_idx + 1}'][stat_key] = values[lv_idx]
                gp_bonuses['total'][stat_key] = values[10] if len(values) > 10 else 0

        i += 1

    return gp_bonuses, i


def parse_ability_grade(lines, start_idx):
    """Parse ABILITY GRADE BONUSES section."""
    grade_bonuses = {f'g{i}': {} for i in range(1, 11)}
    grade_bonuses['total'] = {}
    i = start_idx

    # Skip to data rows
    while i < len(lines) and 'G1' not in lines[i]:
        i += 1
    i += 1  # Skip header

    # Skip separator
    while i < len(lines) and lines[i].strip().startswith('---'):
        i += 1

    while i < len(lines):
        line = lines[i].strip()

        if line.startswith('【') or line.startswith('===') or not line:
            if not line:
                i += 1
                continue
            break

        # Parse lines like: "MATK   +25   -   +35..."
        parts = line.split()
        if len(parts) >= 2:
            stat_name_parts = []
            values = []

            for p in parts:
                if p == '-':
                    values.append(0)
                elif p.startswith('+') or p.replace('%', '').replace(',', '').replace('+', '').isdigit():
                    val = p.replace('+', '').replace('%', '').replace(',', '')
                    try:
                        values.append(int(val))
                    except ValueError:
                        values.append(0)
                else:
                    stat_name_parts.append(p)

            stat_name = ' '.join(stat_name_parts)
            stat_key = STAT_NAME_MAP.get(stat_name, stat_name.lower().replace(' ', '').replace('%', ''))

            if stat_key and len(values) >= 11:
                for g_idx in range(10):
                    if values[g_idx] != 0:
                        grade_bonuses[f'g{g_idx + 1}'][stat_key] = values[g_idx]
                grade_bonuses['total'][stat_key] = values[10] if len(values) > 10 else 0

        i += 1

    return grade_bonuses, i


def parse_max_stats(lines, start_idx):
    """Parse MAX STATS SUMMARY section."""
    max_stats = {}
    i = start_idx

    # Skip to data rows
    while i < len(lines) and '= MAX' not in lines[i]:
        i += 1
    i += 1  # Skip header

    # Skip separator
    while i < len(lines) and lines[i].strip().startswith('---'):
        i += 1

    while i < len(lines):
        line = lines[i].strip()

        if line.startswith('===') or line.startswith('【'):
            break

        if not line:
            i += 1
            continue

        # Parse lines like: "HP   8575   +4032   -   -   12607"
        parts = line.split()
        if len(parts) >= 2:
            # Find stat name and max value (last column)
            stat_name_parts = []
            values = []

            for p in parts:
                if p == '-':
                    values.append(0)
                elif p.startswith('+') or p.replace('%', '').replace(',', '').replace('+', '').isdigit():
                    val = p.replace('+', '').replace('%', '').replace(',', '')
                    try:
                        values.append(int(val))
                    except ValueError:
                        values.append(0)
                else:
                    stat_name_parts.append(p)

            stat_name = ' '.join(stat_name_parts)
            stat_key = STAT_NAME_MAP.get(stat_name)

            if stat_key and values:
                max_stats[stat_key] = values[-1]  # Last value is MAX

        i += 1

    return max_stats, i


def parse_character_block(lines):
    """Parse a single character block from the text file."""
    char = {
        'baseStats': {},
        'passiveAbilities': [],
        'limitBreak': {},
        'gpAbility': {},
        'abilityGrade': {},
        'maxStats': {},
    }

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Character header: 【【Title】Name】 (ID: XXXX) or 【Name】 (ID: XXXX)
        if line.startswith('【') and '(ID:' in line:
            match = re.match(r'【(.+)】\s*\(ID:\s*(\d+)\)', line)
            if match:
                name = match.group(1)
                # Clean up nested brackets for titles
                name = name.replace('【', '[').replace('】', '] ')
                char['name'] = name.strip()
                char['id'] = int(match.group(2))

        # Rarity, Element, Weapon, Role line
        elif line.startswith('Rarity:'):
            parts = line.split('|')
            for part in parts:
                part = part.strip()
                if part.startswith('Rarity:'):
                    char['rarity'] = part.replace('Rarity:', '').strip()
                elif part.startswith('Element:'):
                    char['element'] = part.replace('Element:', '').strip()
                elif part.startswith('Weapon:'):
                    char['weapon'] = part.replace('Weapon:', '').strip()
                elif part.startswith('Role:'):
                    char['role'] = part.replace('Role:', '').strip()

        # Tags line
        elif line.startswith('Tags:'):
            tags_str = line.replace('Tags:', '').strip()
            char['tags'] = [t.strip() for t in tags_str.split(',') if t.strip()]

        # BASE & LEVEL 90 STATS section
        elif '【BASE & LEVEL 90 STATS】' in line:
            stats, i = parse_base_stats_table(lines, i)
            char['baseStats'] = stats
            continue

        # 5 PASSIVE ABILITIES section
        elif '【5 PASSIVE ABILITIES】' in line:
            passives, i = parse_passive_abilities(lines, i)
            char['passiveAbilities'] = passives
            continue

        # LIMIT BREAK BONUSES section
        elif '【LIMIT BREAK BONUSES' in line:
            lb, i = parse_limit_break(lines, i)
            char['limitBreak'] = lb
            continue

        # GP ABILITY / BOND LEVEL section
        elif '【GP ABILITY / BOND LEVEL' in line:
            gp, i = parse_gp_ability(lines, i)
            char['gpAbility'] = gp
            continue

        # ABILITY GRADE BONUSES section
        elif '【ABILITY GRADE BONUSES' in line:
            grade, i = parse_ability_grade(lines, i)
            char['abilityGrade'] = grade
            continue

        # MAX STATS SUMMARY section
        elif '【MAX STATS SUMMARY' in line:
            max_stats, i = parse_max_stats(lines, i)
            char['maxStats'] = max_stats
            continue

        i += 1

    return char if char.get('id') else None


def parse_all_characters(filepath):
    """Parse all characters from the file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by character separator (=== lines that precede character headers)
    # Each character block starts with ===...=== followed by 【Name】 (ID: XXXX)
    blocks = re.split(r'\n={50,}\n(?=【)', content)

    characters = []
    for block in blocks:
        if '(ID:' in block and '【' in block:
            lines = block.split('\n')
            char = parse_character_block(lines)
            if char and char.get('id'):
                characters.append(char)

    return characters


def generate_js(characters, output_path):
    """Generate JavaScript file with character stats data."""

    js_content = """// Character Stats Data for Busty Burst
// Auto-generated from CHARACTER_STATS.txt - {count} characters total
// Includes: Base stats, Level 90 stats, 5 Passive Abilities, Limit Break, GP Ability, Ability Grade, Max Stats

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
        slug = char.get('slug', char['name'].lower().replace(' ', '-'))
        rarity = char.get('rarity', 'SSR')
        char_id = char.get('id', 2001)
        name_escaped = char['name'].replace("'", "\\'")

        # Build baseStats object as JSON-like
        base_stats = char.get('baseStats', {})
        base_stats_str = '{\n'

        stat_order = ['hp', 'atk', 'matk', 'def', 'mdef', 'accuracy', 'block',
                      'physCrit', 'magicCrit', 'hpRegen', 'mpRegen', 'healPwr',
                      'mpCharge', 'hpDrain', 'mpCostDown']

        for stat in stat_order:
            if stat in base_stats:
                val = base_stats[stat]
                if isinstance(val, dict):
                    if val.get('isPercent'):
                        base_stats_str += f"      {stat}: {{ base: {val['base']}, lv90: {val['lv90']}, isPercent: true }},\n"
                    else:
                        base_stats_str += f"      {stat}: {{ base: {val['base']}, lv90: {val['lv90']} }},\n"
                else:
                    base_stats_str += f"      {stat}: {val},\n"

        base_stats_str += '    }'

        # Build passiveAbilities array
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

        # Build limitBreak object
        lb = char.get('limitBreak', {})
        lb_str = '{\n'
        for lb_key in ['lb1', 'lb2', 'lb3', 'lb4', 'lb5', 'total']:
            if lb.get(lb_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in lb[lb_key].items()])
                lb_str += f"      {lb_key}: {{ {stats_parts} }},\n"
        lb_str += '    }'

        # Build gpAbility object
        gp = char.get('gpAbility', {})
        gp_str = '{\n'
        for gp_key in [f'lv{i}' for i in range(1, 11)] + ['total']:
            if gp.get(gp_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in gp[gp_key].items()])
                gp_str += f"      {gp_key}: {{ {stats_parts} }},\n"
        gp_str += '    }'

        # Build abilityGrade object
        grade = char.get('abilityGrade', {})
        grade_str = '{\n'
        for g_key in [f'g{i}' for i in range(1, 11)] + ['total']:
            if grade.get(g_key):
                stats_parts = ', '.join([f"{k}: {v}" for k, v in grade[g_key].items()])
                grade_str += f"      {g_key}: {{ {stats_parts} }},\n"
        grade_str += '    }'

        # Build maxStats object
        max_stats = char.get('maxStats', {})
        max_stats_str = '{ '
        max_stats_str += ', '.join([f"{k}: {v}" for k, v in max_stats.items()])
        max_stats_str += ' }'

        # Tags
        tags = char.get('tags', [])
        tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'

        js_content += f"""
  '{slug}': {{
    id: '{slug}',
    characterId: {char_id},
    name: '{name_escaped}',
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
    maxStats: {max_stats_str},
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


if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, 'CHARACTER_STATS.txt')
    output_file = os.path.join(script_dir, 'character-stats-full.js')

    valid_ids = get_valid_ids()
    print(f"Valid IDs: {len(valid_ids)} characters in ID_TO_SLUG mapping")

    print(f"Parsing {input_file}...")
    all_characters = parse_all_characters(input_file)
    print(f"Found {len(all_characters)} characters in txt file")

    # Filter to only characters with valid IDs and add slug
    characters = []
    matched_ids = set()
    unmatched = []

    for char in all_characters:
        char_id = char.get('id')
        name = char.get('name', '')

        if char_id in valid_ids:
            if char_id not in matched_ids:
                slug = get_slug_by_id(char_id)
                char['slug'] = slug
                characters.append(char)
                matched_ids.add(char_id)
            else:
                print(f"  Skipping duplicate ID {char_id}: {name}")
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
        print(f"\nMissing from txt file ({len(missing_ids)}):")
        for mid in sorted(missing_ids)[:10]:
            print(f"  - ID {mid}: {ID_TO_SLUG[mid]}")
        if len(missing_ids) > 10:
            print(f"  ... and {len(missing_ids) - 10} more")

    # Count by rarity
    ssr = len([c for c in characters if c.get('rarity') == 'SSR'])
    sr = len([c for c in characters if c.get('rarity') == 'SR'])
    r = len([c for c in characters if c.get('rarity') == 'R'])
    print(f"\nRarity breakdown: SSR: {ssr}, SR: {sr}, R: {r}")

    print(f"\nGenerating {output_file}...")
    count = generate_js(characters, output_file)
    print(f"Done! Generated data for {count} characters")
