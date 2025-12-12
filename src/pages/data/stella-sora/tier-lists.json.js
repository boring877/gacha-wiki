// Stella Sora Tier Lists API Endpoint
// Generates /data/stella-sora/tier-lists.json

import * as tierListModule from '../../../data/stella-sora/tier-lists.js';

export const prerender = true;

export async function GET() {
  const { TIER_DEFINITIONS, GAME_MODES } = tierListModule;

  // Get all tier lists dynamically
  const tierLists = {};

  // Try to get each possible tier list
  const possibleLists = [
    'OVERALL_TIER_LIST',
    'STORY_TIER_LIST',
    'MONOLITH_TIER_LIST',
    'SUPPORT_TIER_LIST',
    'PVE_TIER_LIST',
  ];

  possibleLists.forEach(listName => {
    const list = tierListModule[listName];
    if (list) {
      const key = listName.replace('_TIER_LIST', '').toLowerCase();
      tierLists[key] = {
        name: list.name,
        lastUpdated: list.lastUpdated,
        description: list.description,
        tiers: list.tiers,
      };
    }
  });

  const response = {
    game: 'Stella Sora',
    type: 'tier-lists',
    description: 'Character tier rankings for different game modes (Story, Monolith, Support)',
    lastUpdated: new Date().toISOString().split('T')[0],
    tierDefinitions: TIER_DEFINITIONS,
    gameModes: GAME_MODES,
    tierLists,
    changelog: tierListModule.TIER_LIST_CHANGELOG || [],
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
