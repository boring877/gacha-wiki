// Stella Sora Discs API Endpoint
// Generates /data/stella-sora/discs.json

import {
  DISCS_DATA,
  getElementsByDisc,
  getRaritiesByDisc,
  getAllTags,
} from '../../../data/stella-sora/discs.js';

export const prerender = true;

export async function GET() {
  const metadata = {
    elements: getElementsByDisc(),
    rarities: getRaritiesByDisc(),
    tags: getAllTags(),
  };

  const response = {
    game: 'Stella Sora',
    type: 'discs',
    description: 'Disc equipment database with stats, effects, and set bonuses',
    count: DISCS_DATA.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    discs: DISCS_DATA.map(disc => ({
      id: disc.id,
      name: disc.name,
      slug: disc.slug,
      rarity: disc.rarity,
      element: disc.element,
      tags: disc.tags,
      description: disc.description,
      stats: disc.stats,
      setBonus: disc.setBonus,
      recommendedFor: disc.recommendedFor,
      image: disc.image,
      detailUrl: disc.detailUrl,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
