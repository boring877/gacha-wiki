import json, subprocess, re

# 1. Get current tier entries + card data via bun (authoritative JS parse)
BUN = r"""
import { MEMORY_TIER_LIST } from 'C:/Users/Borin/ZCodeProject/gacha-wiki/src/data/zone-nova/memory-tier-list.js';
import { ZONE_NOVA_MEMORIES } from 'C:/Users/Borin/ZCodeProject/gacha-wiki/src/data/zone-nova/memories.js';
const entries = [];
for (const [cls, tiers] of Object.entries(MEMORY_TIER_LIST.tiers)) {
  for (const [tier, cards] of Object.entries(tiers)) for (const c of cards) entries.push({ oldClass: cls, tier, name: c.name });
}
console.log(JSON.stringify({ entries, cards: ZONE_NOVA_MEMORIES.map(m => ({ slug: m.slug, name: m.name, cls: m.class, rarity: m.rarity })) }));
"""
open('C:/Users/Borin/AppData/Local/Temp/memdump.mjs', 'w', encoding='utf-8').write(BUN)
out = subprocess.run(['bun', 'C:/Users/Borin/AppData/Local/Temp/memdump.mjs'], cwd='C:/Users/Borin/ZCodeProject/gacha-wiki', capture_output=True, text=True)
assert out.returncode == 0, out.stderr
data = json.loads(out.stdout.strip().splitlines()[-1])
entries, cards = data['entries'], data['cards']
by_slug = {c['slug']: c for c in cards}
by_name = {c['name'].strip(): c for c in cards}

# 2. Stale old names -> current card NAME (preserve tier; slugs were kept from the old site)
stale = {
    "Slave's Original Wish (奴仆的原愿)": "The Servant's Aspiration",
    'Lancelot-HerTrainer': 'Her Trainer',
    'Sleepy Guardian': 'The Reason for Slumber',
}

# 3. Resolve entries -> {slug: tier}; on duplicate keep the higher tier
RANK = {'SSS': 0, 'SS': 1, 'S': 2, 'A': 3, 'Situational': 4}
placed = {}
unresolved = []
for e in entries:
    target = stale.get(e['name'], e['name'].strip())
    card = by_name.get(target)
    slug = card['slug'] if card else None
    if slug is None or slug not in by_slug:
        unresolved.append(e)
        continue
    if slug not in placed or RANK[e['tier']] < RANK[placed[slug]]:
        placed[slug] = e['tier']

# 4. New placements for previously missing cards (by trimmed name)
new_placements = {
    # SSR — new character wave + previously unlisted
    'Unholy Alliance': 'SSS',
    'A Dream of Peace': 'SSS',
    'The Knight and the Fuzzy': 'SSS',
    "Sea Deity's Soft Ritual": 'SS',
    'Under the Holy Armor': 'SS',
    'Sunlit sweetness awaits': 'SS',
    'Monster in the Dense Forest': 'S',
    'Are the glasses the real thing?': 'SS',
    'Serpentine Frenzy': 'SS',
    'A perfect makeup look?': 'SS',
    'Reorganizing Revolution': 'S',
    # SR
    'Drowning Lake Knight': 'S',
    'Pennie Trying on New Clothes': 'A',
    "Dawn's Sunlight": 'S',
    'Ancient Fatigue Relief': 'A',
    'Summer Nap Time': 'A',
    "Great Wizard's Roleplay": 'A',
    'Heart-Pounding Swimsuit Aphrodite': 'A',
}
for nm, tier in new_placements.items():
    card = by_name.get(nm)
    assert card, 'placement name not found: ' + nm
    placed.setdefault(card['slug'], tier)

# 5. R generic placeholders -> A in their class
for c in cards:
    if re.match(r'^(TANK|WARRIOR|ATTACKER|DESTROYER|SUPPORTER|DISRUPTOR|HEALER) REMEM\.$', c['name'].strip()):
        placed.setdefault(c['slug'], 'A')

still_missing = [c['name'] for c in cards if c['slug'] not in placed]
assert not still_missing, 'still unplaced: %s' % still_missing
assert not unresolved, 'unresolved old entries: %s' % unresolved

# 6. Build new tiers grouped by TRUE class
CLASSES = ['Tank', 'Warrior', 'Attacker', 'Destroyer', 'Supporter', 'Disruptor', 'Healer']
TIERS = ['SSS', 'SS', 'S', 'A', 'Situational']
new_tiers = {cls: {t: [] for t in TIERS} for cls in CLASSES}
for c in cards:
    tier = placed[c['slug']]
    cls = c['cls'] if c['cls'] in new_tiers else None
    assert cls, 'card without usable class: ' + c['name']
    new_tiers[cls][tier].append({'name': c['name']})

# 7. Emit the tiers JS literal
def fmt_tiers():
    parts = []
    for cls in CLASSES:
        lines = ['    %s: {' % cls]
        for t in TIERS:
            items = new_tiers[cls][t]
            if not items:
                lines.append('      %s: [],' % t)
            elif len(items) <= 3:
                lines.append('      %s: [%s],' % (t, ', '.join("{ name: %s }" % json.dumps(i['name']) for i in items)))
            else:
                lines.append('      %s: [' % t)
                for i in items:
                    lines.append('        { name: %s },' % json.dumps(i['name']))
                lines.append('      ],')
        lines.append('    },')
        parts.append('\n'.join(lines))
    return '\n'.join(parts)

total = sum(len(v) for tiers in new_tiers.values() for v in tiers.values())
file_js = '''// Zone Nova Memory Tier List Data
// Memory card rankings organized by class
// Buckets use the 7 in-game classes (Tank/Warrior/Attacker/Destroyer/Supporter/Disruptor/Healer);
// every card sits in the class from its own data field in memories.js.

import { ZONE_NOVA_MEMORIES } from './memories.js';

// \u26a0\ufe0f  REMINDER: When adding/moving memories in tier lists below,
//     remember to update "lastUpdated" to today's date (YYYY-MM-DD)

export const MEMORY_TIER_DEFINITIONS = {
  SSS: {
    label: 'SSS',
    description: 'Best-in-class memory card. Defines the character entirely.',
  },
  SS: {
    label: 'SS',
    description: 'Excellent memory card that massively enhances the character.',
  },
  S: {
    label: 'S',
    description: 'Strong memory card that greatly enhances performance.',
  },
  A: {
    label: 'A',
    description: 'Good memory card with solid effects.',
  },
  Situational: {
    label: 'Situational',
    description: 'Niche memory card. Good in specific scenarios but not generally recommended.',
  },
};

export const MEMORY_TIER_ORDER = Object.keys(MEMORY_TIER_DEFINITIONS);

// Game class order (Tank=1 ... Healer=7)
export const MEMORY_CLASS_ORDER = [
  'Tank',
  'Warrior',
  'Attacker',
  'Destroyer',
  'Supporter',
  'Disruptor',
  'Healer',
];

export const MEMORY_TIER_LIST = {
  name: 'Memory Card Rankings by Class',
  lastUpdated: '2026-09-04',
  description:
    'Memory card rankings by class. Each character can only equip memories matching their class.',
  tiers: {
%s
  },
};

const MEMORY_BY_NAME = Object.fromEntries(
  ZONE_NOVA_MEMORIES.map(memory => [memory.name, memory])
);

function createEmptyTierBuckets() {
  return Object.fromEntries(MEMORY_TIER_ORDER.map(tier => [tier, []]));
}

export function getGroupedMemorySections() {
  const sections = new Map();

  MEMORY_CLASS_ORDER.forEach(className => {
    const classTiers = MEMORY_TIER_LIST.tiers[className];
    if (!classTiers) return;

    const tiers = createEmptyTierBuckets();

    MEMORY_TIER_ORDER.forEach(tier => {
      (classTiers[tier] || []).forEach(entry => {
        const memory = MEMORY_BY_NAME[entry.name];
        if (memory) {
          tiers[tier].push({ name: memory.name });
        }
      });
    });

    const topTier = MEMORY_TIER_ORDER.find(tier => tiers[tier].length > 0) || 'Situational';
    const totalMemories = MEMORY_TIER_ORDER.reduce(
      (count, tier) => count + tiers[tier].length,
      0
    );

    if (totalMemories > 0) {
      sections.set(className, {
        key: className.toLowerCase().replace(/\\s+/g, '-'),
        label: className,
        tiers,
        topTier,
        topMemories: tiers[topTier],
        totalMemories,
      });
    }
  });

  return [...sections.values()].sort((a, b) => {
    const aIndex = MEMORY_CLASS_ORDER.indexOf(a.label);
    const bIndex = MEMORY_CLASS_ORDER.indexOf(b.label);
    if (aIndex === -1 && bIndex === -1) return a.label.localeCompare(b.label);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

export function getMemoryByName(name) {
  return MEMORY_BY_NAME[name] || null;
}
''' % fmt_tiers()

open('C:/Users/Borin/ZCodeProject/gacha-wiki/src/data/zone-nova/memory-tier-list.js', 'w', encoding='utf-8', newline='\n').write(file_js)
print('regenerated: %d/%d cards tiered' % (total, len(cards)))
for cls in CLASSES:
    counts = {t: len(new_tiers[cls][t]) for t in TIERS if new_tiers[cls][t]}
    print(' ', cls, counts)
