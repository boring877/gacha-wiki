#!/usr/bin/env python3
"""
Parse WIKI_SUPPORT_DATA_v6.txt and generate support-data.js
Only includes characters that exist in character-stats-full.js
"""

import re
import json

# Read the character IDs from character-stats-full.js
with open('character-stats-full.js', 'r', encoding='utf-8') as f:
    stats_content = f.read()

# Extract all characterId values
char_ids = set(map(int, re.findall(r'characterId:\s*(\d+)', stats_content)))
print(f"Found {len(char_ids)} character IDs in character-stats-full.js")
print(f"IDs: {sorted(char_ids)}")

# Element mapping
ELEMENT_MAP = {
    'Dark': 'Dark',
    'Mind': 'Mind',
    'Fire': 'Fire',
    'Wind': 'Wind',
    'Water': 'Water',
    'Holy': 'Holy',
    '魔': 'Dark',
    '想': 'Mind',
    '火': 'Fire',
    '風': 'Wind',
    '水': 'Water',
    '聖': 'Holy'
}

# Weapon mapping
WEAPON_MAP = {
    '射': 'Shot',
    '斬': 'Slash',
    '打': 'Strike',
    '投': 'Throw',
    '突': 'Pierce',
    'Shot': 'Shot',
    'Slash': 'Slash',
    'Strike': 'Strike',
    'Throw': 'Throw',
    'Pierce': 'Pierce'
}

# Read support data file
with open('WIKI_SUPPORT_DATA_v6.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse each character block
characters = []
blocks = re.split(r'-{50,}', content)

for block in blocks:
    if not block.strip():
        continue

    # Match character header: ## Name (ID: 1234)
    header_match = re.search(r'##\s+(.+?)\s+\(ID:\s*(\d+)\)', block)
    if not header_match:
        continue

    name = header_match.group(1).strip()
    char_id = int(header_match.group(2))

    # Only include characters in our stats file
    if char_id not in char_ids:
        continue

    # Parse rarity, element, weapon
    info_match = re.search(r'Rarity:\s*(\w+)\s*\|\s*Attribute:\s*(\w+)(?:\s*\([^)]+\))?\s*\|\s*Weapon:\s*(\w+)', block)
    if not info_match:
        continue

    rarity = info_match.group(1)
    element_raw = info_match.group(2)
    weapon_raw = info_match.group(3)

    element = ELEMENT_MAP.get(element_raw, element_raw)
    weapon = WEAPON_MAP.get(weapon_raw, weapon_raw)

    # Parse support stats (LB 0-5)
    support_stats = {}
    lb_pattern = r'LB\s*(\d+):\s*(.+?)(?=\n|$)'
    lb_matches = re.findall(lb_pattern, block)

    for lb_num, stats_str in lb_matches:
        lb_key = f'lb{lb_num}'
        stats = {}

        # Parse individual stats like "HP +500, Block +5"
        stat_pattern = r"([A-Za-z.]+)\s*\+(\d+)"
        stat_matches = re.findall(stat_pattern, stats_str)

        for stat_name, value in stat_matches:
            stats[stat_name] = int(value)

        if stats:
            support_stats[lb_key] = stats

    if not support_stats:
        continue

    # Parse support bonus
    blessing_match = re.search(r'Blessing of (\w+):\s*(\w+) Type ATK \+5%/\+10%/\+15%', block)
    inspiration_match = re.search(r'(\w+) Inspiration:\s*(\w+(?:\s+\w+)?)\s*\+([\d%/+]+)', block)

    support_bonus = {}
    if blessing_match:
        blessing_type = blessing_match.group(1)
        support_bonus['blessing'] = {
            'name': f'Blessing of {blessing_type}',
            'effect': f'{blessing_type} Type ATK',
            'values': {'members2': '+5%', 'members4': '+10%', 'members6': '+15%'}
        }

    if inspiration_match:
        insp_weapon = inspiration_match.group(1)
        insp_stat = inspiration_match.group(2)
        insp_values = inspiration_match.group(3)

        # Parse inspiration values
        if 'Action Speed' in insp_stat or '%' in insp_values:
            values = {'members2': '+2%', 'members4': '+4%', 'members6': '+6%'}
        else:
            values = {'members2': '+3', 'members4': '+6', 'members6': '+10'}

        support_bonus['inspiration'] = {
            'name': f'{insp_weapon} Inspiration',
            'effect': insp_stat,
            'values': values
        }

    char_data = {
        'id': char_id,
        'name': name,
        'rarity': rarity,
        'element': element,
        'weapon': weapon,
        'supportStats': support_stats,
        'supportBonus': support_bonus
    }

    characters.append(char_data)

# Sort by rarity then by id
rarity_order = {'SSR': 0, 'SR': 1, 'R': 2}
characters.sort(key=lambda x: (rarity_order.get(x['rarity'], 99), x['id']))

print(f"\nFound {len(characters)} characters matching our character-stats-full.js")

# Count by rarity
ssr_count = len([c for c in characters if c['rarity'] == 'SSR'])
sr_count = len([c for c in characters if c['rarity'] == 'SR'])
r_count = len([c for c in characters if c['rarity'] == 'R'])
print(f"SSR: {ssr_count}, SR: {sr_count}, R: {r_count}")

# Generate JavaScript output
js_output = '''// Busty Burst Support Data
// Auto-generated from WIKI_SUPPORT_DATA_v6.txt
// Contains support stats for all 75 characters

// Element mapping (Japanese to English)
export const ELEMENT_MAP = {
  '魔': 'Dark',
  '想': 'Mind',
  '火': 'Fire',
  '風': 'Wind',
  '水': 'Water',
  '聖': 'Holy'
};

// Weapon mapping (Japanese to English)
export const WEAPON_MAP = {
  '射': 'Shot',
  '斬': 'Slash',
  '打': 'Strike',
  '投': 'Throw',
  '突': 'Pierce'
};

// Weapon inspiration effects by weapon type
export const WEAPON_INSPIRATION_EFFECTS = {
  'Shot': { stat: 'Accuracy', values: [3, 6, 10] },
  'Slash': { stat: 'Accuracy', values: [3, 6, 10] },
  'Strike': { stat: 'Block', values: [3, 6, 10] },
  'Throw': { stat: 'Accuracy', values: [3, 6, 10] },
  'Pierce': { stat: 'Action Speed', values: ['2%', '4%', '6%'] }
};

// Helper to get character ID - the ID field is now used directly for images
// via the PaladinImage component's characterId prop
export function getCharacterImageId(id) {
  return id;
}

// All support data - filtered to only include characters in character-stats-full.js
export const BUSTY_BURST_SUPPORT_DATA = [
'''

# Add each character
for i, char in enumerate(characters):
    rarity_comment = f"  // ============ {char['rarity']} Characters ============\n" if i == 0 or characters[i-1]['rarity'] != char['rarity'] else ""

    js_output += rarity_comment
    js_output += f"  {{\n"
    js_output += f"    id: {char['id']},\n"
    js_output += f"    name: '{char['name']}',\n"
    js_output += f"    rarity: '{char['rarity']}',\n"
    js_output += f"    element: '{char['element']}',\n"
    js_output += f"    weapon: '{char['weapon']}',\n"

    # Support stats
    js_output += f"    supportStats: {{\n"
    for lb_key, stats in char['supportStats'].items():
        stats_str = ', '.join([f"'{k}': {v}" for k, v in stats.items()])
        js_output += f"      {lb_key}: {{ {stats_str} }},\n"
    js_output += f"    }},\n"

    # Support bonus
    if char['supportBonus']:
        js_output += f"    supportBonus: {{\n"
        if 'blessing' in char['supportBonus']:
            b = char['supportBonus']['blessing']
            js_output += f"      blessing: {{ name: '{b['name']}', effect: '{b['effect']}', values: {{ members2: '{b['values']['members2']}', members4: '{b['values']['members4']}', members6: '{b['values']['members6']}' }} }},\n"
        if 'inspiration' in char['supportBonus']:
            insp = char['supportBonus']['inspiration']
            js_output += f"      inspiration: {{ name: '{insp['name']}', effect: '{insp['effect']}', values: {{ members2: '{insp['values']['members2']}', members4: '{insp['values']['members4']}', members6: '{insp['values']['members6']}' }} }}\n"
        js_output += f"    }}\n"

    js_output += f"  }},\n"

js_output += '''];

// Helper functions
export function getAllSupportData() {
  return BUSTY_BURST_SUPPORT_DATA;
}

export function getSupportDataById(id) {
  return BUSTY_BURST_SUPPORT_DATA.find(c => c.id === id);
}

export function getSupportDataByName(name) {
  return BUSTY_BURST_SUPPORT_DATA.find(c => c.name.toLowerCase() === name.toLowerCase());
}

// Get unique elements for filter dropdown
export function getUniqueElements() {
  const elements = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => elements.add(c.element));
  return Array.from(elements).sort();
}

// Get unique weapons for filter dropdown
export function getUniqueWeapons() {
  const weapons = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => weapons.add(c.weapon));
  return Array.from(weapons).sort();
}

// Get unique rarities for filter dropdown
export function getUniqueRarities() {
  const rarities = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => rarities.add(c.rarity));
  return ['SSR', 'SR', 'R'].filter(r => rarities.has(r));
}

// Format stat display name
export function formatStatName(stat) {
  const statNames = {
    'HP': 'HP',
    'ATK': 'ATK',
    'MATK': 'MATK',
    'DEF': 'DEF',
    'MDEF': 'MDEF',
    'Accuracy': 'Accuracy',
    'Block': 'Block',
    'P.Crit': 'P.Crit',
    'M.Crit': 'M.Crit'
  };
  return statNames[stat] || stat;
}
'''

# Write output
with open('support-data-new.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print(f"\nGenerated support-data-new.js with {len(characters)} characters")
