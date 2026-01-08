#!/usr/bin/env python3
"""
Convert ALL characters' passive abilities from per-grade to cumulative totals
"""

import re

# Read character-stats-full.js
print("Reading character-stats-full.js...")
with open('character-stats-full.js', 'r', encoding='utf-8') as f:
    content = f.read()

def convert_passive_to_cumulative(match_obj):
    """Convert a single passive slot from per-grade to cumulative values"""
    full_match = match_obj.group(0)
    slot = match_obj.group(1)
    stat = match_obj.group(2)
    grades_str = match_obj.group(3)

    # Parse individual grade values
    grade_values = {}
    for g_match in re.finditer(r'g(\d+): (\d+)', grades_str):
        grade_num = int(g_match.group(1))
        value = int(g_match.group(2))
        grade_values[grade_num] = value

    # Calculate cumulative totals
    cumulative = {}
    running_total = 0
    for grade in range(1, 11):
        if grade in grade_values:
            running_total += grade_values[grade]
        cumulative[grade] = running_total

    # Build new format
    grades_parts = [f'g{g}: {v}' for g, v in sorted(cumulative.items())]
    new_grades_str = ', '.join(grades_parts)

    return f"{{ slot: {slot}, stat: '{stat}', grades: {{ {new_grades_str} }} }}"

# Pattern to match individual passive slots (but NOT the new array format for Ophelio)
# Match: { slot: X, stat: 'NAME', grades: { g1: X, g2: X, ... } }
pattern = r"{ slot: (\d+), stat: '([^']+)', grades: { (g\d+: \d+(?:, g\d+: \d+)*) } }"

print("Converting passive abilities to cumulative format...")
updated_content = re.sub(pattern, convert_passive_to_cumulative, content)

# Write back
print("Writing updated file...")
with open('character-stats-full.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Done! All passive abilities converted to cumulative totals.")
print("Note: Ophelio's special format (slot 5 with array) was preserved.")
