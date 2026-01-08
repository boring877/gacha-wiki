#!/usr/bin/env python3
"""
Fix ALL characters' passive abilities using accurate cumulative data from ALL_GP_PASSIVES_DETAILED.txt
"""

import re

# Read the detailed passives file
print("Reading ALL_GP_PASSIVES_DETAILED.txt...")
with open('ALL_GP_PASSIVES_DETAILED.txt', 'r', encoding='utf-8') as f:
    detailed_content = f.read()

# Parse all character data from detailed file
characters_data = {}

# Split by character sections
char_sections = re.split(r'## (.+?) \(ID: (\d+)\)\n={100,}', detailed_content)[1:]

for i in range(0, len(char_sections), 3):
    if i + 2 >= len(char_sections):
        break

    char_name = char_sections[i].strip()
    char_id = int(char_sections[i + 1])
    char_content = char_sections[i + 2]

    # Parse cumulative totals for each grade
    passives = {}

    # Find all "Cumulative Total after Grade X:" sections
    cumulative_sections = re.findall(
        r'Cumulative Total after Grade\s+(\d+):\s*\n((?:    .+\n)+)',
        char_content
    )

    for grade_str, stats_block in cumulative_sections:
        grade = int(grade_str)

        # Parse each stat line
        stat_lines = re.findall(r'    ([A-Za-z\s\.]+?)\s+\+\s*(\d+)', stats_block)

        for stat_name, value in stat_lines:
            stat_name = stat_name.strip()
            value = int(value)

            # Map stat names to standardized keys
            stat_map = {
                'HP': 'HP',
                'ATK': 'ATK',
                'MATK': 'MATK',
                'DEF': 'DEF',
                'MDEF': 'MDEF',
                'Accuracy': 'Accuracy',
                'Block': 'Block',
                'P.Crit': 'Phys Crit',
                'M.Crit': 'Magic Crit',
                'HP Regen': 'HP Regen',
                'MP Regen': 'MP Regen',
                'Heal Pwr': 'Heal Pwr',
                'MP Charge': 'MP Charge',
                'HP Drain': 'HP Drain'
            }

            mapped_stat = stat_map.get(stat_name, stat_name)

            if mapped_stat not in passives:
                passives[mapped_stat] = {}
            passives[mapped_stat][grade] = value

    characters_data[char_id] = {
        'name': char_name,
        'passives': passives
    }

print(f"Parsed {len(characters_data)} characters from detailed file")

# Read character-stats-full.js
print("Reading character-stats-full.js...")
with open('character-stats-full.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Function to update a character's passive abilities
def update_character_passives(match_obj):
    """Update passive abilities for a single character"""
    char_id_match = re.search(r'characterId: (\d+)', match_obj.group(0))
    if not char_id_match:
        return match_obj.group(0)

    char_id = int(char_id_match.group(1))

    if char_id not in characters_data:
        print(f"Warning: Character ID {char_id} not found in detailed data")
        return match_obj.group(0)

    char_data = characters_data[char_id]
    passives_dict = char_data['passives']

    # Build new passiveAbilities array
    # Determine which stats map to which slots (assume standard 5-slot layout)
    slot_stats = [
        ('HP', 1),
        ('ATK', 2),
        ('MATK', 2),
        ('DEF', 3),
        ('MDEF', 3),
        ('Phys Crit', 4),
        ('Magic Crit', 4),
        ('Accuracy', 5),
        ('Block', 5),
        ('MP Charge', 5),
        ('HP Regen', 6),
        ('MP Regen', 6),
        ('Heal Pwr', 7),
        ('HP Drain', 8)
    ]

    # Group stats by slot
    slots = {}
    for stat, slot_num in slot_stats:
        if stat in passives_dict:
            if slot_num not in slots:
                slots[slot_num] = []
            slots[slot_num].append((stat, passives_dict[stat]))

    # Build passiveAbilities array
    passives_lines = []
    for slot_num in sorted(slots.keys()):
        stats_in_slot = slots[slot_num]

        if len(stats_in_slot) == 1:
            # Single stat in this slot - use simple format
            stat_name, grades_dict = stats_in_slot[0]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades_dict.items())])
            passives_lines.append(f"      {{ slot: {slot_num}, stat: '{stat_name}', grades: {{ {grades_str} }} }}")
        else:
            # Multiple stats in slot - use array format (like slot 5)
            # Calculate cumulative for each stat
            grades_array = []

            for grade in range(1, 11):
                # Find which stat is active at this grade
                active_stat = None
                for stat_name, grades_dict in stats_in_slot:
                    if grade in grades_dict:
                        # This stat has a value at this grade
                        active_stat = stat_name
                        break

                if active_stat:
                    # Calculate cumulative totals for all stats up to this grade
                    cumulative = {}
                    for stat_name, grades_dict in stats_in_slot:
                        cumulative[stat_name] = grades_dict.get(grade, 0)

                    # Find the per-grade value (difference from previous)
                    prev_grade = grade - 1
                    value = grades_dict.get(grade, 0)
                    if prev_grade >= 1:
                        value -= grades_dict.get(prev_grade, 0)

                    cumulative_str = ', '.join([f"'{s}': {v}" for s, v in sorted(cumulative.items())])
                    grades_array.append(
                        f"        {{ grade: {grade}, stat: '{active_stat}', value: {value}, cumulative: {{ {cumulative_str} }} }}"
                    )

            grades_array_str = ',\n'.join(grades_array)
            passives_lines.append(f"      {{ slot: {slot_num}, grades: [\n{grades_array_str}\n      ] }}")

    # Find and replace the passiveAbilities section
    before_passives = match_obj.group(0)[:match_obj.start(1) - match_obj.start(0)]
    after_passives = match_obj.group(0)[match_obj.end(1) - match_obj.start(0):]

    new_passives = ',\n'.join(passives_lines)

    return before_passives + new_passives + after_passives

# Pattern to match passiveAbilities sections
pattern = r'(characterId: \d+,\s*\n.*?passiveAbilities: \[)(.*?)(\],)'

# Actually, we need a more specific approach - let's just update the values directly

print("Updating passive abilities...")

# For each character in characters_data, find and replace their passive abilities
for char_id, char_data in characters_data.items():
    # Find this character's section
    char_pattern = rf'characterId: {char_id},[\s\S]*?passiveAbilities: \[[\s\S]*?\],'
    char_match = re.search(char_pattern, js_content)

    if not char_match:
        print(f"Warning: Character ID {char_id} not found in JS file")
        continue

    char_section = char_match.group(0)
    passives_dict = char_data['passives']

    # Determine slots (we'll try to preserve existing structure)
    # First, extract current slot structure
    current_slots = []
    slot_matches = re.findall(r'{ slot: (\d+), stat: \'([^\']+)\'', char_section)
    array_slot_matches = re.findall(r'{ slot: (\d+), grades: \[', char_section)

    # Build new passives based on current structure
    new_passives_lines = []

    # Standard mapping (most characters)
    if len(slot_matches) >= 4:
        # Slot 1: HP or ATK
        slot1_stat = 'HP' if 'HP' in passives_dict else 'ATK'
        if slot1_stat in passives_dict:
            grades = passives_dict[slot1_stat]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades.items())])
            new_passives_lines.append(f"      {{ slot: 1, stat: '{slot1_stat}', grades: {{ {grades_str} }} }}")

        # Slot 2: MATK or ATK
        slot2_stat = 'MATK' if 'MATK' in passives_dict else 'ATK'
        if slot2_stat in passives_dict:
            grades = passives_dict[slot2_stat]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades.items())])
            new_passives_lines.append(f"      {{ slot: 2, stat: '{slot2_stat}', grades: {{ {grades_str} }} }}")

        # Slot 3: MDEF or DEF
        slot3_stat = 'MDEF' if 'MDEF' in passives_dict else 'DEF'
        if slot3_stat in passives_dict:
            grades = passives_dict[slot3_stat]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades.items())])
            new_passives_lines.append(f"      {{ slot: 3, stat: '{slot3_stat}', grades: {{ {grades_str} }} }}")

        # Slot 4: Magic Crit or Phys Crit
        slot4_stat = 'Magic Crit' if 'Magic Crit' in passives_dict else 'Phys Crit'
        if slot4_stat in passives_dict:
            grades = passives_dict[slot4_stat]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades.items())])
            new_passives_lines.append(f"      {{ slot: 4, stat: '{slot4_stat}', grades: {{ {grades_str} }} }}")

        # Slot 5: Check if this is a multi-stat slot
        slot5_stats = []
        for stat in ['Accuracy', 'Block', 'MP Charge']:
            if stat in passives_dict:
                slot5_stats.append(stat)

        if len(slot5_stats) > 1:
            # Multi-stat slot - use array format
            grades_array = []

            # We need to determine per-grade stat assignments
            # Parse from the original detailed file for this character
            char_content_match = re.search(
                rf'## {re.escape(char_data["name"])} \(ID: {char_id}\)\n={"{100,}"}\n([\s\S]*?)(?=\n## |$)',
                detailed_content
            )

            if char_content_match:
                char_content = char_content_match.group(1)

                # Parse grade-by-grade to find which stat appears
                for grade in range(1, 11):
                    grade_section = re.search(
                        rf'Grade\s+{grade}:\s*\n((?:  .+\n)+)',
                        char_content
                    )

                    if grade_section:
                        grade_stats = grade_section.group(1)
                        active_stat = None
                        value = 0

                        for stat in slot5_stats:
                            if stat in grade_stats:
                                # Found the active stat for this grade
                                match = re.search(rf'{re.escape(stat)}\s+\+\s*(\d+)', grade_stats)
                                if match:
                                    active_stat = stat
                                    value = int(match.group(1))
                                    break

                        if active_stat:
                            # Get cumulative totals
                            cumulative = {}
                            for stat in slot5_stats:
                                cumulative[stat] = passives_dict[stat].get(grade, 0)

                            cumulative_str = ', '.join([f"'{s}': {v}" for s, v in sorted(cumulative.items())])
                            grades_array.append(
                                f"        {{ grade: {grade}, stat: '{active_stat}', value: {value}, cumulative: {{ {cumulative_str} }} }}"
                            )

            grades_array_str = ',\n'.join(grades_array)
            new_passives_lines.append(f"      {{ slot: 5, grades: [\n{grades_array_str}\n      ] }}")
        elif len(slot5_stats) == 1:
            # Single stat in slot 5
            stat = slot5_stats[0]
            grades = passives_dict[stat]
            grades_str = ', '.join([f'g{g}: {v}' for g, v in sorted(grades.items())])
            new_passives_lines.append(f"      {{ slot: 5, stat: '{stat}', grades: {{ {grades_str} }} }}")

    # Build new character section
    if new_passives_lines:
        new_passives_str = ',\n'.join(new_passives_lines)
        new_char_section = re.sub(
            r'passiveAbilities: \[[\s\S]*?\],',
            f'passiveAbilities: [\n{new_passives_str}\n    ],',
            char_section
        )

        js_content = js_content.replace(char_section, new_char_section)
        try:
            print(f"Updated character ID {char_id} ({char_data['name']})")
        except UnicodeEncodeError:
            print(f"Updated character ID {char_id}")

# Write back
print("Writing updated character-stats-full.js...")
with open('character-stats-full.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Done! All passive abilities fixed with accurate cumulative totals.")
