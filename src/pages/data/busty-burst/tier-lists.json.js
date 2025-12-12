// Busty Burst Tier Lists API Endpoint
// Generates /data/busty-burst/tier-lists.json

import { BUSTY_BURST_TIER_LISTS } from '../../../data/busty-burst/tier-lists.js';
import { BUSTY_BURST_PALADINS } from '../../../data/busty-burst/paladins.js';

export const prerender = true;

// Helper to resolve character IDs to names
function resolveCharacterNames(characterIds) {
  return characterIds.map(id => {
    const paladin = BUSTY_BURST_PALADINS.find(p => p.id === id);
    return paladin ? { id, name: paladin.name } : { id, name: id };
  });
}

export async function GET() {
  const tierLists = {};

  Object.entries(BUSTY_BURST_TIER_LISTS).forEach(([key, list]) => {
    tierLists[key] = {
      name: list.name,
      description: list.description,
      lastUpdated: list.lastUpdated,
      tiers: list.tiers.map(tier => ({
        tier: tier.tier,
        definition: tier.definition,
        characters: resolveCharacterNames(tier.characters),
      })),
    };
  });

  const response = {
    game: 'Busty Burst',
    type: 'tier-lists',
    description: 'Paladin tier rankings from different community sources',
    lastUpdated: new Date().toISOString().split('T')[0],
    tierLists,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
