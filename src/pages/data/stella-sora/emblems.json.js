// Stella Sora Emblems API Endpoint
// Generates /data/stella-sora/emblems.json

import { emblemStats } from '../../../data/stella-sora/emblem-stats.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'emblems',
    description:
      'Complete emblem stats reference guide with all levels (70/80/90), rarities (Green/Blue/Gold/Rainbow), and stat values for character enhancement',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Emblem levels
    levels: emblemStats.levels,
    rarities: emblemStats.rarities,

    // All stats organized by category
    statCategories: emblemStats.stats.map(category => ({
      category: category.category,
      stats: category.items.map(item => ({
        name: item.name,
        availableAtLevels: item.levels,
        valuesByRarity: item.values,
      })),
    })),

    // Rainbow tier summary (best stats)
    rainbowStats: emblemStats.rainbowStats,

    // Important notes
    notes: emblemStats.notes,

    // Quick reference summary
    summary: {
      totalStatTypes: emblemStats.stats.reduce((acc, cat) => acc + cat.items.length, 0),
      categories: emblemStats.stats.map(cat => cat.category),
      keyInfo: [
        'Lv.70: Basic stats (ATK%, HP%, DEF%, Crit, DMG types)',
        'Lv.80: Adds skill level increases (+1 to +3)',
        'Lv.90: Adds Trekker Potential level increases (+1 to +3)',
        'Rainbow rarity: ~2x Gold values, not available for all stats',
      ],
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
