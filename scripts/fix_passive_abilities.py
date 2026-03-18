#!/usr/bin/env python3
# Verify and fix passiveAbilities data in Busty Burst character stats files.
# Reads raw individual per-grade values from talent_effect.xml, computes correct
# cumulative totals (grade N = sum of raw grades 1..N), then compares and fixes
# any mismatches in the stored JS stats files.

import re
import json
import xml.etree.ElementTree as ET
from pathlib import Path

RAW_XML = Path("D:/Busty_Burst/output/text/data_unity3d/talent_effect.xml")
STATS_DIR = Path("src/data/busty-burst/characters/stats")

# Mapping: Chinese stat names in raw XML → English display keys in stored JS files
STAT_NAME_MAP = {
    'HP':     'HP',
    '物理攻擊': 'ATK',
    '物理防禦': 'DEF',
    '物理爆擊': 'Phys Crit',
    '命中':   'Accuracy',
    '格擋':   'Block',
    'MP回復':  'MP Charge',
    '魔法攻擊': 'MATK',
    '魔法防禦': 'MDEF',
    '魔法爆擊': 'Magic Crit',
}

# Canonical stat key display order for output
STAT_ORDER = ['HP', 'ATK', 'MATK', 'DEF', 'MDEF', 'Phys Crit', 'Magic Crit',
              'Accuracy', 'Block', 'MP Charge', 'MP Regen']


def parse_talent_effect_xml(xml_path):
    """Parse talent_effect.xml → {charId: {grade: {statKey: value}}} (individual per-grade values)"""
    tree = ET.parse(xml_path)
    root = tree.getroot()

    char_data = {}

    for elem in root.findall('talent_effect'):
        id_attr = elem.get('id')
        if not id_attr or len(id_attr) != 7:
            continue

        char_id = int(id_attr[:4])
        grade = int(id_attr[4:6])

        enhance_ability = elem.get('enhance_ability')
        enhance_num_str = elem.get('enhance_ability_num', '0')
        if not enhance_num_str:
            continue
        enhance_num = int(enhance_num_str)

        if enhance_ability not in STAT_NAME_MAP:
            print(f"  WARNING: Unknown stat '{enhance_ability}' in id={id_attr}")
            continue

        stat_key = STAT_NAME_MAP[enhance_ability]

        char_data.setdefault(char_id, {}).setdefault(grade, {})[stat_key] = enhance_num

    return char_data


def compute_cumulative(raw_grades, max_grade, all_stat_keys):
    """Build cumulative passiveAbilities list from raw individual grade data.
    Each entry at grade N = sum of raw individual values from grade 1..N.
    """
    running = {key: 0 for key in all_stat_keys}
    result = []

    for grade_num in range(1, max_grade + 1):
        grade_raw = raw_grades.get(grade_num, {})
        for stat_key, value in grade_raw.items():
            if stat_key in all_stat_keys:
                running[stat_key] += value

        grade_obj = {'grade': grade_num}
        # Output stats in canonical order, only include keys that appear at all
        for key in STAT_ORDER:
            if key in all_stat_keys:
                grade_obj[key] = running[key]
        # Any remaining keys not in STAT_ORDER
        for key in sorted(all_stat_keys):
            if key not in STAT_ORDER and key not in grade_obj:
                grade_obj[key] = running[key]

        result.append(grade_obj)

    return result


def parse_stats_file(file_path):
    """Read a stats JS file and return (header_lines, stats_dict) or (None, None) on failure."""
    content = file_path.read_text(encoding='utf-8')

    # Collect leading comment lines
    lines = content.split('\n')
    header_lines = []
    for line in lines:
        if line.startswith('//') or line == '':
            if line.startswith('//'):
                header_lines.append(line)
                continue
        break
    header = '\n'.join(header_lines)

    # Extract the JS export object
    match = re.search(r'export const stats = (\{.*\});?\s*$', content, re.DOTALL)
    if not match:
        return None, None

    json_str = match.group(1)
    try:
        stats_dict = json.loads(json_str)
        return header, stats_dict
    except json.JSONDecodeError as e:
        print(f"  JSON parse error in {file_path.name}: {e}")
        return None, None


def write_stats_file(file_path, header, stats_dict):
    """Write modified stats dict back to JS file."""
    json_str = json.dumps(stats_dict, ensure_ascii=False, indent=2)
    content = header + '\n\nexport const stats = ' + json_str + ';\n'
    file_path.write_text(content, encoding='utf-8')


def main():
    print(f"Loading {RAW_XML}...")
    raw_data = parse_talent_effect_xml(RAW_XML)
    print(f"Found raw data for {len(raw_data)} characters\n")

    stats_files = sorted(f for f in STATS_DIR.glob('*.js') if f.name != 'index.js')
    print(f"Checking {len(stats_files)} character stats files...\n")

    counts = {'ok': 0, 'fixed': 0, 'error': 0, 'no_passive': 0, 'no_raw': 0}

    for stats_file in stats_files:
        header, stats_dict = parse_stats_file(stats_file)
        if stats_dict is None:
            print(f"ERROR: Could not parse {stats_file.name}")
            counts['error'] += 1
            continue

        char_id = stats_dict.get('characterId')
        if not char_id:
            print(f"SKIP: No characterId in {stats_file.name}")
            counts['error'] += 1
            continue

        passive_abilities = stats_dict.get('passiveAbilities')
        if not passive_abilities:
            counts['no_passive'] += 1
            continue

        if char_id not in raw_data:
            print(f"WARN: No raw XML data for charId={char_id} ({stats_file.name})")
            counts['no_raw'] += 1
            continue

        max_grade = max(g['grade'] for g in passive_abilities)
        raw_grades = raw_data[char_id]

        # Collect all stat keys from both stored and raw data
        stored_keys = set()
        for g in passive_abilities:
            stored_keys.update(k for k in g if k != 'grade')

        raw_keys = set()
        for grade_num in range(1, max_grade + 1):
            if grade_num in raw_grades:
                raw_keys.update(raw_grades[grade_num].keys())

        all_stat_keys = stored_keys | raw_keys

        # Compute what the correct cumulative values should be
        correct = compute_cumulative(raw_grades, max_grade, all_stat_keys)

        # Compare stored vs correct
        mismatches = []
        for stored_g, correct_g in zip(passive_abilities, correct):
            g_num = stored_g['grade']
            for key in all_stat_keys:
                stored_val = stored_g.get(key, 0)
                correct_val = correct_g.get(key, 0)
                if stored_val != correct_val:
                    mismatches.append((g_num, key, stored_val, correct_val))

        if mismatches:
            print(f"FIX: {stats_file.name} (charId={char_id}) — {len(mismatches)} mismatches:")
            for g_num, key, stored_val, correct_val in mismatches[:5]:
                print(f"     Grade {g_num:2d} [{key}]: stored={stored_val:5d}, correct={correct_val:5d}")
            if len(mismatches) > 5:
                print(f"     ... and {len(mismatches) - 5} more")

            stats_dict['passiveAbilities'] = correct
            write_stats_file(stats_file, header, stats_dict)
            counts['fixed'] += 1
        else:
            counts['ok'] += 1

    print()
    print('=' * 60)
    print(f"Results:")
    print(f"  OK      : {counts['ok']}")
    print(f"  Fixed   : {counts['fixed']}")
    print(f"  No raw  : {counts['no_raw']}  (not in talent_effect.xml)")
    print(f"  No pass : {counts['no_passive']}  (no passiveAbilities field)")
    print(f"  Errors  : {counts['error']}")


if __name__ == '__main__':
    main()
