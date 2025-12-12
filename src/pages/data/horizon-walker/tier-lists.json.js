// Horizon Walker Tier Lists API Endpoint
// Generates /data/horizon-walker/tier-lists.json

import * as tierListModule from '../../../data/horizon-walker/tier-lists.js';

export const prerender = true;

export async function GET() {
  const { TIER_DEFINITIONS, GAME_MODES } = tierListModule;

  // Get all tier lists dynamically
  const tierLists = {};

  // Try to get each possible tier list
  const possibleLists = [
    'OVERALL_TIER_LIST',
    'PVE_TIER_LIST',
    'PVP_TIER_LIST',
    'BOSS_TIER_LIST',
    'STORY_TIER_LIST',
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
    game: 'Horizon Walker',
    type: 'tier-lists',
    description: 'Character and mercenary tier rankings for different game modes',
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
