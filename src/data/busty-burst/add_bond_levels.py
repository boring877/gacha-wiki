#!/usr/bin/env python3
"""
Parse ALL_BOND_LEVELS.txt and add bondLevel data to all characters in character-stats-full.js
"""

import re

# Read ALL_BOND_LEVELS.txt
print("Reading ALL_BOND_LEVELS.txt...")
with open('ALL_BOND_LEVELS.txt', 'r', encoding='utf-8') as f:
    bond_content = f.read()

# Parse all character bond data
characters_bond = {}

# Split by character sections
char_sections = re.split(r'## (.+?) \(ID: (\d+)\)\n={100,}', bond_content)[1:]

for i in range(0, len(char_sections), 3):
    if i + 2 >= len(char_sections):
        break

    char_name = char_sections[i].strip()
    char_id = int(char_sections[i + 1])
    char_content = char_sections[i + 2]

    # Parse bond levels
    bond_levels = {}

    # Find each bond level section
    for level in range(1, 11):
        level_match = re.search(rf'Bond Level {level}:\s*\n((?:  .+\n)+)', char_content)
        if level_match:
            stats_block = level_match.group(1)

            # Parse each stat line
            stat_lines = re.findall(r'  ([A-Za-z\s\.]+?)\s+\+\s*(\d+)', stats_block)

            level_stats = {}
            for stat_name, value in stat_lines:
                stat_name = stat_name.strip()
                value = int(value)

                # Map stat names to standardized keys
                stat_map = {
                    'HP': 'hp',
                    'ATK': 'atk',
                    'MATK': 'matk',
                    'DEF': 'def',
                    'MDEF': 'mdef',
                    'Accuracy': 'accuracy',
                    'Block': 'block',
                    'P.Crit': 'physCrit',
                    'M.Crit': 'magicCrit',
                    'HP Regen': 'hpRegen',
                    'MP Regen': 'mpRegen',
                    'Heal Pwr': 'healPwr',
                    'Healing Power': 'healPwr',
                    'MP Charge': 'mpCharge',
                    'MP Cost Down': 'mpCostDown',
                    'HP Drain': 'hpDrain'
                }

                mapped_stat = stat_map.get(stat_name, stat_name)
                level_stats[mapped_stat] = value

            if level_stats:
                bond_levels[f'lv{level}'] = level_stats

    # Parse total
    total_match = re.search(r'TOTAL AT BOND LEVEL 10:\s*\n((?:  .+\n)+)', char_content)
    if total_match:
        stats_block = total_match.group(1)
        stat_lines = re.findall(r'  ([A-Za-z\s\.]+?)\s+\+\s*(\d+)', stats_block)

        total_stats = {}
        for stat_name, value in stat_lines:
            stat_name = stat_name.strip()
            value = int(value)

            stat_map = {
                'HP': 'hp',
                'ATK': 'atk',
                'MATK': 'matk',
                'DEF': 'def',
                'MDEF': 'mdef',
                'Accuracy': 'accuracy',
                'Block': 'block',
                'P.Crit': 'physCrit',
                'M.Crit': 'magicCrit',
                'HP Regen': 'hpRegen',
                'MP Regen': 'mpRegen',
                'Heal Pwr': 'healPwr',
                'Healing Power': 'healPwr',
                'MP Charge': 'mpCharge',
                'HP Drain': 'hpDrain'
            }

            mapped_stat = stat_map.get(stat_name, stat_name)
            total_stats[mapped_stat] = value

        if total_stats:
            bond_levels['total'] = total_stats

    if bond_levels:
        characters_bond[char_id] = {
            'name': char_name,
            'bondLevels': bond_levels
        }

print(f"Parsed bond data for {len(characters_bond)} characters")

# Read character-stats-full.js
print("Reading character-stats-full.js...")
with open('character-stats-full.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# For each character with bond data, add or update bondLevel section
for char_id, char_data in characters_bond.items():
    # Find this character's section - look for limitBreak section
    char_pattern = rf'(characterId: {char_id},[\s\S]*?limitBreak: \{{[\s\S]*?\}},\s*)(bondLevel: \{{[\s\S]*?\}},\s*)?(gpAbility: \{{)'
    char_match = re.search(char_pattern, js_content)

    if not char_match:
        print(f"Warning: Character ID {char_id} not found in JS file")
        continue

    # Build bondLevel object
    bond_levels = char_data['bondLevels']
    bond_lines = []

    for level in range(1, 11):
        level_key = f'lv{level}'
        if level_key in bond_levels:
            stats = bond_levels[level_key]
            stats_str = ', '.join([f'{k}: {v}' for k, v in stats.items()])
            bond_lines.append(f"      {level_key}: {{ {stats_str} }}")

    # Add total
    if 'total' in bond_levels:
        stats = bond_levels['total']
        stats_str = ', '.join([f'{k}: {v}' for k, v in stats.items()])
        bond_lines.append(f"      total: {{ {stats_str} }}")

    bond_str = ',\n'.join(bond_lines)

    # Check if bondLevel already exists
    has_bond = re.search(rf'characterId: {char_id},[\s\S]*?bondLevel: \{{', js_content)

    if has_bond:
        # Replace existing bondLevel
        char_section_full = re.search(
            rf'(characterId: {char_id},[\s\S]*?bondLevel: \{{)([\s\S]*?)(\}},\s*gpAbility:)',
            js_content
        )
        if char_section_full:
            old_section = char_section_full.group(0)
            new_section = char_section_full.group(1) + '\n' + bond_str + '\n    ' + char_section_full.group(3)
            js_content = js_content.replace(old_section, new_section)
            print(f"Updated bond level for character ID {char_id}")
    else:
        # Insert bondLevel before gpAbility
        old_section = char_match.group(0)
        new_section = char_match.group(1) + f'bondLevel: {{\n{bond_str}\n    }},\n    ' + char_match.group(2)
        js_content = js_content.replace(old_section, new_section)
        print(f"Added bond level for character ID {char_id}")

# Write back
print("Writing updated character-stats-full.js...")
with open('character-stats-full.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Done! Bond levels added/updated for all characters.")
