// Busty Burst Bust & Booty Tier List Data
// Ranked by bust and hips measurements from character profiles

import { getCharacterDataBySlug, getAllCharacterSlugs } from './character-database.js';

const slugs = getAllCharacterSlugs();

const characters = [];
const seenIds = new Set();
for (const slug of slugs) {
  const c = getCharacterDataBySlug(slug);
  if (!c.profile?.bust || !c.characterId) continue;
  if (seenIds.has(c.characterId)) continue;
  seenIds.add(c.characterId);
  const bustNum = parseInt(c.profile.bust);
  const hipsNum = parseInt(c.profile.hips) || 0;
  if (isNaN(bustNum)) continue;
  characters.push({
    slug,
    name: c.displayName || c.name,
    bust: bustNum,
    hips: hipsNum,
    bustLabel: c.profile.bust,
    hipsLabel: c.profile.hips || '',
    rarity: c.rarity,
    element: c.element,
    characterId: c.characterId,
  });
}

const BUST_TIERS = [
  { tier: 'SSS', label: 'T Cup+ (127cm+)', color: '#ff6b6b', min: 127 },
  { tier: 'SS', label: 'Q-O Cup (115-126cm)', color: '#feca57', min: 115 },
  { tier: 'S', label: 'N-L Cup (110-114cm)', color: '#48dbfb', min: 110 },
  { tier: 'A', label: 'K-J Cup (100-109cm)', color: '#1dd1a1', min: 100 },
  { tier: 'B', label: 'H-G Cup (90-99cm)', color: '#8b8b8b', min: 90 },
];

const HIPS_TIERS = [
  { tier: 'SSS', label: '105cm+', color: '#ff6b6b', min: 105 },
  { tier: 'SS', label: '100-104cm', color: '#feca57', min: 100 },
  { tier: 'S', label: '95-99cm', color: '#48dbfb', min: 95 },
  { tier: 'A', label: '90-94cm', color: '#1dd1a1', min: 90 },
  { tier: 'B', label: 'Below 90cm', color: '#8b8b8b', min: 0 },
];

function buildTierGroups(tiers, chars, field) {
  const sorted = [...chars].sort((a, b) => b[field] - a[field]);
  return tiers.map((t, i) => {
    const nextTierMin = i < tiers.length - 1 ? tiers[i + 1].min : -Infinity;
    const filtered = sorted.filter(c => {
      if (i === 0) return c[field] >= t.min;
      return c[field] >= t.min && c[field] < tiers[i - 1].min;
    });
    return { ...t, characters: filtered };
  }).filter(t => t.characters.length > 0);
}

export const BUST_TIER_LIST = buildTierGroups(BUST_TIERS, characters, 'bust');
export const HIPS_TIER_LIST = buildTierGroups(HIPS_TIERS, characters, 'hips');
