#!/usr/bin/env python3
"""
Convert all characters' passive abilities to cumulative totals
Reads from ALL_CHARACTER_STATS.js and updates character-stats-full.js
"""

import json
import re

def calculate_cumulative_passives(all_stats_data):
    """
    Process passive abilities for all characters to calculate cumulative totals
    """
    characters_passives = {}

    for char_id, char_data in all_stats_data.get('characters', {}).items():
        passive_abilities = char_data.get('passive_abilities', {})

        if not passive_abilities:
            continue

        # Process each slot (1-5)
        slots_data = {}
        for grade_num in range(1, 11):
            grade_key = f'grade{grade_num}'
            if grade_key not in passive_abilities:
                continue

            grade_data = passive_abilities[grade_key]
            for slot_info in grade_data:
                slot = slot_info['slot']
                stat = slot_info['ability']
                value = slot_info['value']

                if slot not in slots_data:
                    slots_data[slot] = {}

                if grade_num not in slots_data[slot]:
                    slots_data[slot][grade_num] = []

                slots_data[slot][grade_num].append({
                    'stat': stat,
                    'value': value
                })

        characters_passives[char_id] = slots_data

    return characters_passives

# Read ALL_CHARACTER_STATS.js
print("Reading ALL_CHARACTER_STATS.js...")
with open('ALL_CHARACTER_STATS.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the data (it's a JS object, not JSON)
# Find the CHARACTER_STATS object
match = re.search(r'const CHARACTER_STATS\s*=\s*({[\s\S]*?});?\s*(?:export|$)', content)
if not match:
    print("Could not find CHARACTER_STATS object")
    exit(1)

print("Parsing character data...")
# We need to handle this as JavaScript, not JSON
# For now, let's just process the character-stats-full.js file directly

# Read character-stats-full.js
print("Reading character-stats-full.js...")
with open('character-stats-full.js', 'r', encoding='utf-8') as f:
    stats_content = f.read()

# Find all passive abilities sections that use the OLD format
# Pattern: passiveAbilities: [\n      { slot: 1, stat: 'XX', grades: { g1: XX, g2: XX, ... } },
print("Converting passive abilities to cumulative format...")

def convert_to_cumulative(match_obj):
    """Convert a single character's passive abilities to cumulative format"""
    passives_section = match_obj.group(0)

    # Extract each slot's data
    slot_pattern = r"{ slot: (\d+), stat: '([^']+)', grades: { (.*?) } }"
    slots = re.findall(slot_pattern, passives_section)

    new_passives = []
    for slot_num, stat_name, grades_str in slots:
        # Parse grades: g1: 176, g2: 211, ...
        grade_values = {}
        for g_match in re.finditer(r'g(\d+): (\d+)', grades_str):
            grade_num = int(g_match.group(1))
            value = int(g_match.group(2))
            grade_values[grade_num] = value

        # Calculate cumulative totals
        cumulative = {}
        for grade in range(1, 11):
            if grade in grade_values:
                cumulative[grade] = sum(grade_values[g] for g in range(1, grade + 1) if g in grade_values)

        # Build new format
        grades_str_new = ', '.join([f'g{g}: {v}' for g, v in sorted(cumulative.items())])
        new_passives.append(f"      {{ slot: {slot_num}, stat: '{stat_name}', grades: {{ {grades_str_new} }} }}")

    return "    passiveAbilities: [\n" + ',\n'.join(new_passives) + "\n    ],"

# Pattern to match passiveAbilities sections (old format only)
pattern = r'passiveAbilities: \[\s*(?:{ slot: \d+, stat: \'[^\']+\', grades: { [^}]+ } },?\s*)+\],'

updated_content = re.sub(pattern, convert_to_cumulative, stats_content)

# Write back
print("Writing updated character-stats-full.js...")
with open('character-stats-full.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Done! All characters' passive abilities converted to cumulative totals.")
