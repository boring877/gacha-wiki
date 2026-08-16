// MAJO provisional tier list, grouped by class. Placements are a launch-month
// guess (rarity-based) pending meta data.

import { majoCharacters } from './characters.js';

export const MAJO_TIERS = [
  { tier: 'S', color: '#dbb06e' },
  { tier: 'A', color: '#a89bd1' },
  { tier: 'B', color: '#6d93bd' },
  { tier: 'C', color: '#736f85' },
];

export const MAJO_CLASS_SECTIONS = ['Fighter', 'Mage', 'Tank', 'Healer'];

const CLASS_ZH = { Fighter: '破阵', Mage: '飞袭', Tank: '守护', Healer: '支援' };

function tierOf(c) {
  if (c.rarity === 'UR') return 'S';
  if (c.rarity === 'SSR') return 'A';
  if (c.rarity === 'SR') return 'B';
  return 'C';
}

export const majoTierByClass = MAJO_CLASS_SECTIONS.map(cls => ({
  cls,
  clsZh: CLASS_ZH[cls],
  tiers: MAJO_TIERS.map(({ tier, color }) => ({
    tier,
    color,
    characters: majoCharacters
      .filter(c => c.cls === cls && tierOf(c) === tier)
      .sort((a, b) => a.nameEn.localeCompare(b.nameEn)),
  })).filter(t => t.characters.length > 0),
}));
