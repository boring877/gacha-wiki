#!/usr/bin/env python3
"""
Parse ALL_CHAR_SKILLS.txt and generate character-skills-full.js
with inline buff values in descriptions.
Only includes characters that exist in character-info.js
"""

import re
import json
import os

# ID to slug mapping based on character-info.js
# This maps the character ID from ALL_CHAR_SKILLS.txt to the slug in character-info.js
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
    2040: 'elegant-portrait-shamshel',         # 【Elegant Portrait】Shamshel -> actually "Graceful Portrait" in txt
    2041: 'magical-princess-luceria',          # 【Magical Princess】Luceria
    2042: 'golem-summoner-nerys',              # 【Messenger of Stone Soldiers】Nerys
    2043: 'mage-of-bastinton-sobrina',         # 【Swift-Chant Sorceress】Sobrina
    2044: 'hypnotic-dancer-messeria',          # 【Trance Dancer】Messeria
    2045: 'pious-cleric-ishtovia',             # 【Pious Healer】Ishtovia

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

    # Limited/Event Characters (from actual txt IDs)
    2065: 'noble-succubus-empress-shamshel',   # 【Graceful Portrait】Shamshel - different from elegant
    2066: 'elegant-portrait-aysis',            # 【Graceful Portrait】Aysis
    2067: 'mischievous-mermaid-princess-lorelia', # 【Playful Mermaid Princess】Lorelia
    2068: 'festival-empress-shamshel',         # 【Festival Empress】Shamshel
    2069: 'festival-attire-estiriel',          # 【Festive Attire】Estiriel
    2070: 'festival-dress-up-natasha',         # 【Festive Costume】Natasha
    2071: 'kaguya',
    2072: 'shaty',
    2076: 'ophelio',

    # Christmas & New Year Event Characters (correct IDs from txt)
    2095: 'queen-of-pies-and-cookies-aphrodia', # 【Queen of Pies and Cookies】Aphrodia
    2096: 'magical-holy-night-festival-kaguya', # 【Magical Holy Night Festival】Kaguya
    2097: 'holy-night-succubus-yu-rima-elca',  # 【Holy Night Succubus】Yu Rima Elca
    2099: 'dragon-crusher-medusa',             # 【Dragon Crusher】Medusa
    2100: 'new-years-calligraphy-pastel',      # 【New Year's Calligraphy】Pastel
    2101: 'overflowing-jubako-lynette',        # 【Overflowing Jubako】Lynette
}

def get_valid_ids():
    """Get the set of valid character IDs."""
    return set(ID_TO_SLUG.keys())

def get_slug_by_id(char_id):
    """Get the slug for a character ID."""
    return ID_TO_SLUG.get(char_id)

def parse_character_block(lines):
    """Parse a single character block from the text file."""
    char = {
        "skills": [],
        "ultimate": [],
        "passives": []
    }

    current_section = None
    current_skill = None
    current_ultimate_rank = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Character header: 【Character Name】 (ID: XXXX) or 【【Title】Name】 (ID: XXXX)
        if line.startswith('【') and '(ID:' in line:
            # Use greedy match to capture everything up to the last 】 before (ID:
            match = re.match(r'【(.+)】\s*\(ID:\s*(\d+)\)', line)
            if match:
                name = match.group(1)
                # Clean up the name: convert 【Title】Name format to [Title] Name
                name = name.replace('【', '[').replace('】', '] ')
                char['name'] = name.strip()
                char['id'] = int(match.group(2))

        # Rarity, Element, Role line
        elif line.startswith('Rarity:'):
            parts = line.split('|')
            for part in parts:
                part = part.strip()
                if part.startswith('Rarity:'):
                    char['rarity'] = part.replace('Rarity:', '').strip()
                elif part.startswith('Element:'):
                    char['element'] = part.replace('Element:', '').strip()
                elif part.startswith('Role:'):
                    char['role'] = part.replace('Role:', '').strip()

        # Tags
        elif line.startswith('Tags:'):
            tags_str = line.replace('Tags:', '').strip()
            char['tags'] = [t.strip() for t in tags_str.split(',') if t.strip()]

        # Base Stats
        elif line.startswith('Base Stats:'):
            stats_str = line.replace('Base Stats:', '').strip()
            stats = {}
            for stat in stats_str.split('|'):
                stat = stat.strip()
                match = re.match(r'(\w+)\s+(\d+)', stat)
                if match:
                    stats[match.group(1)] = int(match.group(2))
            char['baseStats'] = stats

        # Skill Rotation
        elif line == '[Skill Rotation]':
            current_section = 'rotation'
            char['skillRotation'] = {}
        elif current_section == 'rotation' and line.startswith('Opening:'):
            char['skillRotation']['opening'] = line.replace('Opening:', '').strip()
        elif current_section == 'rotation' and line.startswith('Loop:'):
            char['skillRotation']['loop'] = line.replace('Loop:', '').strip()
            current_section = None

        # Basic Attack
        elif line == '[Basic Attack]':
            current_section = 'basic'
            char['basicAttack'] = {}
        elif current_section == 'basic':
            if line.startswith('Icon:'):
                char['basicAttack']['icon'] = line.replace('Icon:', '').strip()
            elif line.startswith('Type:'):
                char['basicAttack']['type'] = line.replace('Type:', '').strip()
            elif line.startswith('Scaling:'):
                char['basicAttack']['scaling'] = line.replace('Scaling:', '').strip()
            elif line.startswith('Attack Speed:'):
                speed_str = line.replace('Attack Speed:', '').strip()
                match = re.match(r'(\w+(?:\s+\w+)?)\s*\(?([\d.]+s)?\)?', speed_str)
                if match:
                    char['basicAttack']['speedLabel'] = match.group(1).strip() if match.group(1) else 'Normal'
                    char['basicAttack']['speedValue'] = match.group(2).replace('s', '') if match.group(2) else '0.86'
                else:
                    char['basicAttack']['speedLabel'] = 'Normal'
                    char['basicAttack']['speedValue'] = '0.86'
            elif line.startswith('[Skill') or line.startswith('[Ultimate') or line.startswith('[Passive'):
                current_section = None
                i -= 1  # Reprocess this line

        # Skill 2 or Skill 3
        elif line.startswith('[Skill 2]') or line.startswith('[Skill 3]'):
            current_section = 'skill'
            slot = 2 if '[Skill 2]' in line else 3
            skill_name = line.split(']', 1)[1].strip() if ']' in line else ''
            current_skill = {
                'slot': slot,
                'name': skill_name
            }
        elif current_section == 'skill' and current_skill:
            if line.startswith('Icon:'):
                current_skill['icon'] = line.replace('Icon:', '').strip()
            elif line.startswith('Description:'):
                current_skill['description'] = line.replace('Description:', '').strip()
            elif line.startswith('Target:'):
                current_skill['target'] = line.replace('Target:', '').strip()
            elif line.startswith('Cast Time:'):
                current_skill['castTime'] = line.replace('Cast Time:', '').strip()
            elif line.startswith('Damage Scaling:') or line.startswith('Heal Scaling:'):
                current_skill['damageScaling'] = line.split(':', 1)[1].strip()
            elif line.startswith('Base Flat Damage:') or line.startswith('Base Value:'):
                current_skill['baseDamage'] = line.split(':', 1)[1].strip()
            elif line.startswith('Per Level Growth:'):
                current_skill['levelGrowth'] = line.split(':', 1)[1].strip()
            elif line.startswith('Effect:'):
                current_skill['effect'] = line.replace('Effect:', '').strip()
            elif line.startswith('Lv 1:') or line.startswith('Lv1:'):
                val = line.split(':', 1)[1].strip()
                current_skill['lvl1'] = val
            elif line.startswith('Lv90:') or line.startswith('Lv 90:'):
                val = line.split(':', 1)[1].strip()
                current_skill['lvl90'] = val
            elif line.startswith('[Skill') or line.startswith('[Ultimate') or line.startswith('[Passive') or line == '':
                if current_skill.get('name'):
                    char['skills'].append(current_skill)
                current_skill = None
                current_section = None
                if line.startswith('['):
                    i -= 1

        # Ultimate
        elif line.startswith('[Ultimate]'):
            current_section = 'ultimate'
        elif current_section == 'ultimate' and line.startswith('Rank'):
            match = re.match(r'Rank\s*(\d+):\s*(.+?)\s*\(Icon:\s*([^)]+)\)', line)
            if match:
                current_ultimate_rank = {
                    'rank': int(match.group(1)),
                    'name': match.group(2).strip(),
                    'icon': match.group(3).strip()
                }
        elif current_section == 'ultimate' and current_ultimate_rank:
            if line.startswith('Description:'):
                current_ultimate_rank['description'] = line.replace('Description:', '').strip()
            elif line.startswith('Damage:') or line.startswith('Heal:') or line.startswith('Effect:'):
                current_ultimate_rank['effect'] = line.split(':', 1)[1].strip() if ':' in line else line
                char['ultimate'].append(current_ultimate_rank)
                current_ultimate_rank = None
            elif line.startswith('Rank') or line.startswith('[Passive'):
                if current_ultimate_rank.get('name'):
                    char['ultimate'].append(current_ultimate_rank)
                current_ultimate_rank = None
                if line.startswith('[Passive'):
                    current_section = None
                    i -= 1

        # Passives
        elif line.startswith('[Passive 1]') or line.startswith('[Passive 2]'):
            # Save previous passive if exists
            if current_section == 'passive' and current_skill and (current_skill.get('name') or current_skill.get('effect')):
                char['passives'].append(current_skill)

            current_section = 'passive'
            slot = 1 if '[Passive 1]' in line else 2
            passive_name = line.split(']', 1)[1].strip() if ']' in line else ''
            current_skill = {
                'slot': slot,
                'name': passive_name
            }
        elif current_section == 'passive' and current_skill:
            if line.startswith('Icon:'):
                current_skill['icon'] = line.replace('Icon:', '').strip()
            elif line.startswith('Effect 2:'):
                current_skill['effect2'] = line.replace('Effect 2:', '').strip()
            elif line.startswith('Effect:'):
                current_skill['effect'] = line.replace('Effect:', '').strip()
            elif line.startswith('==='):
                if current_skill.get('name') or current_skill.get('effect'):
                    char['passives'].append(current_skill)
                current_skill = None
                current_section = None
                break

        i += 1

    # Add any remaining skill/passive
    if current_skill and (current_skill.get('name') or current_skill.get('effect')):
        if current_section == 'skill':
            char['skills'].append(current_skill)
        elif current_section == 'passive':
            char['passives'].append(current_skill)

    if current_ultimate_rank and current_ultimate_rank.get('name'):
        char['ultimate'].append(current_ultimate_rank)

    return char if char.get('id') else None


def parse_all_characters(filepath):
    """Parse all characters from the file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by character headers - match 【...】 (ID: XXXX) allowing for nested brackets
    # The pattern looks for lines starting with 【 and ending with 】 (ID: XXXX)
    blocks = re.split(r'\n(?=【.+】\s*\(ID:\s*\d+\))', content)

    characters = []
    for block in blocks:
        if '(ID:' in block:
            lines = block.split('\n')
            char = parse_character_block(lines)
            if char and char.get('id'):
                characters.append(char)

    return characters


def generate_js(characters, output_path):
    """Generate the JavaScript file."""
    # Sort by ID
    characters.sort(key=lambda x: x.get('id', 0))

    js_content = '''// Busty Burst Character Skills Data
// Auto-generated from ALL_CHAR_SKILLS.txt
// Contains skills for {} characters

export const BUSTY_BURST_SKILLS_DATA = {};

// Helper functions
export function getCharacterSkillsById(id) {{
  return BUSTY_BURST_SKILLS_DATA.find(c => c.id === id);
}}

export function getAllCharacterSkills() {{
  return BUSTY_BURST_SKILLS_DATA;
}}

export function getCharactersByRarity(rarity) {{
  return BUSTY_BURST_SKILLS_DATA.filter(c => c.rarity === rarity);
}}

// Speed label mappings
export const SPEED_LABELS = {{
  'Very Fast': {{ tipText: 6.3, freezeTime: '0.36s' }},
  'Fast': {{ tipText: 5.1, freezeTime: '0.61s' }},
  'Slightly Fast': {{ tipText: 4.3, freezeTime: '0.71s' }},
  'Normal': {{ tipText: 4.3, freezeTime: '0.86s' }},
  'Slightly Slow': {{ tipText: 3.9, freezeTime: '0.96s' }},
  'Slow': {{ tipText: 3.7, freezeTime: '1.11s' }},
  'Very Slow': {{ tipText: 3.3, freezeTime: '1.36s' }}
}};

// Status Effects & Debuffs Reference
export const STATUS_EFFECTS = {{
  crowdControl: {{
    petrify: {{ name: 'Petrify', description: 'Unable to act, Block reduced to 0' }},
    stun: {{ name: 'Stun', description: 'Unable to act' }},
    freeze: {{ name: 'Freeze', description: 'Unable to act + HP damage per second (-150 to -700/s depending on level)' }},
    sleep: {{ name: 'Sleep', description: 'Unable to act. Wakes when damaged, but that hit is a guaranteed CRIT' }},
  }},
  control: {{
    silence: {{ name: 'Silence', description: 'Can only normal attack, cannot use Skills or Ultimate' }},
    confusion: {{ name: 'Confusion', description: 'Attacks random targets (allies or enemies), cannot use Ultimate' }},
    charm: {{ name: 'Charm', description: 'Attacks allies instead of enemies, cannot use Ultimate' }},
    taunt: {{ name: 'Taunt', description: 'Forces enemy to attack the taunter' }},
  }},
  dot: {{
    poison: {{ name: 'Poison', description: 'HP damage per second (-80 to -300/s depending on level)' }},
    burn: {{ name: 'Burn', description: 'HP damage per second (-50 to -200/s depending on level), STACKABLE' }},
    bleed: {{ name: 'Bleed', description: 'HP damage per second (-1% HP + flat damage)' }},
  }},
  statReduction: {{
    paralysis: {{ name: 'Paralysis', description: 'Action Speed -50%, Physical ATK -50%, Magic ATK -50%' }},
    curse: {{ name: 'Curse', description: 'Cannot recover HP/MP, Action Speed -50%, Critical Rate = 0' }},
    blind: {{ name: 'Blind', description: 'Block = 0, Accuracy -50%' }},
    fear: {{ name: 'Fear', description: 'MP drain per second (-20 to -100/s depending on level)' }},
  }},
  other: {{
    cleanse: {{ name: 'Cleanse/Dispel', description: 'Removes all buffs from target' }},
  }},
}};

// Buff Level Values Reference
export const BUFF_LEVELS = {{
  attack: {{
    Lv1: {{ percent: 10, flat: 20 }},
    Lv2: {{ percent: 12, flat: 25 }},
    Lv3: {{ percent: 15, flat: 30 }},
    Lv4: {{ percent: 18, flat: 35 }},
    Lv5: {{ percent: 20, flat: 40 }},
  }},
  defense: {{
    Lv1: {{ percent: 10, flat: 15 }},
    Lv2: {{ percent: 12, flat: 20 }},
    Lv3: {{ percent: 15, flat: 25 }},
    Lv4: {{ percent: 18, flat: 30 }},
    Lv5: {{ percent: 20, flat: 35 }},
  }},
  block: {{
    Lv1: 5, Lv2: 7, Lv3: 9, Lv4: 11, Lv5: 13, LvMax: 15,
  }},
  actionSpeed: {{
    Lv1: 7, Lv2: 11, Lv3: 14, Lv4: 17, Lv5: 20,
  }},
  critDamage: {{
    physical: {{ Lv1: 300, Lv2: 400, Lv3: 450, Lv4: 500, Lv5: 550 }},
    magic: {{ Lv1: 400, Lv2: 500, Lv3: 580, Lv4: 640, Lv5: 700 }},
  }},
  elementDamageTaken: {{
    Lv1: 10, Lv2: 13, Lv3: 16, Lv4: 18, Lv5: 20,
  }},
}};
'''.format(len(characters), json.dumps(characters, indent=2, ensure_ascii=False))

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    return len(characters)


if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, 'ALL_CHAR_SKILLS.txt')
    output_file = os.path.join(script_dir, 'character-skills-full.js')

    # Get valid character IDs
    valid_ids = get_valid_ids()
    print(f"Valid IDs: {len(valid_ids)} characters in ID_TO_SLUG mapping")

    print(f"Parsing {input_file}...")
    all_characters = parse_all_characters(input_file)
    print(f"Found {len(all_characters)} characters in txt file")

    # Filter to only characters with valid IDs and add slug
    # If same ID appears multiple times, take the first occurrence
    characters = []
    matched_ids = set()
    unmatched = []

    for char in all_characters:
        char_id = char.get('id')
        name = char.get('name', '')

        if char_id in valid_ids:
            if char_id not in matched_ids:  # Skip duplicates
                slug = get_slug_by_id(char_id)
                char['slug'] = slug
                characters.append(char)
                matched_ids.add(char_id)
            else:
                print(f"  Skipping duplicate ID {char_id}: {name}")
        else:
            unmatched.append(f"ID {char_id}: {name}")

    print(f"\nMatched {len(characters)} characters")

    # Show unmatched characters (not in ID_TO_SLUG)
    if unmatched:
        print(f"\nSkipped characters ({len(unmatched)}):")
        for u in unmatched[:10]:
            print(f"  - {u}")
        if len(unmatched) > 10:
            print(f"  ... and {len(unmatched) - 10} more")

    # Show missing IDs (in ID_TO_SLUG but not in txt file)
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
