// Busty Burst Paladins (Characters) API Endpoint
// Generates /data/busty-burst/paladins.json

import { BUSTY_BURST_PALADINS } from '../../../data/busty-burst/paladins.js';

export const prerender = true;

export async function GET() {
  // Build metadata from actual data
  const metadata = {
    rarities: [...new Set(BUSTY_BURST_PALADINS.map(p => p.rarity))].sort(),
    elements: [...new Set(BUSTY_BURST_PALADINS.map(p => p.element))].sort(),
    roles: [...new Set(BUSTY_BURST_PALADINS.map(p => p.role))].sort(),
    tiers: [...new Set(BUSTY_BURST_PALADINS.map(p => p.tier))].sort(),
  };

  const response = {
    game: 'Busty Burst',
    type: 'paladins',
    description: 'Paladin characters with stats, elements, roles, and tier rankings',
    count: BUSTY_BURST_PALADINS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    paladins: BUSTY_BURST_PALADINS.map(paladin => ({
      id: paladin.id,
      name: paladin.name,
      fileName: paladin.fileName,
      rarity: paladin.rarity,
      element: paladin.element,
      role: paladin.role,
      tier: paladin.tier,
      image: paladin.image,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
