// Silver and Blood Tier Lists API Endpoint
// Generates /data/silver-and-blood/tier-lists.json

import * as tierListModule from '../../../data/silver-and-blood/tier-lists.js';

export const prerender = true;

export async function GET() {
  const { TIER_DEFINITIONS, PVE_TIER_LIST, PVP_TIER_LIST } = tierListModule;

  // Try to get additional tier lists if they exist
  const BOSS_TIER_LIST = tierListModule.BOSS_TIER_LIST;
  const NEW_PLAYER_TIER_LIST = tierListModule.NEW_PLAYER_TIER_LIST;
  const TIER_LIST_CHANGELOG = tierListModule.TIER_LIST_CHANGELOG || [];

  const tierLists = {
    pve: PVE_TIER_LIST
      ? {
          name: PVE_TIER_LIST.name,
          lastUpdated: PVE_TIER_LIST.lastUpdated,
          description: PVE_TIER_LIST.description,
          tiers: PVE_TIER_LIST.tiers,
        }
      : null,
    pvp: PVP_TIER_LIST
      ? {
          name: PVP_TIER_LIST.name,
          lastUpdated: PVP_TIER_LIST.lastUpdated,
          description: PVP_TIER_LIST.description,
          tiers: PVP_TIER_LIST.tiers,
        }
      : null,
  };

  if (BOSS_TIER_LIST) {
    tierLists.boss = {
      name: BOSS_TIER_LIST.name,
      lastUpdated: BOSS_TIER_LIST.lastUpdated,
      description: BOSS_TIER_LIST.description,
      tiers: BOSS_TIER_LIST.tiers,
    };
  }

  if (NEW_PLAYER_TIER_LIST) {
    tierLists.newPlayer = {
      name: NEW_PLAYER_TIER_LIST.name,
      lastUpdated: NEW_PLAYER_TIER_LIST.lastUpdated,
      description: NEW_PLAYER_TIER_LIST.description,
      tiers: NEW_PLAYER_TIER_LIST.tiers,
    };
  }

  const response = {
    game: 'Silver and Blood',
    type: 'tier-lists',
    description: 'Character tier rankings for different game modes',
    lastUpdated: new Date().toISOString().split('T')[0],
    tierDefinitions: TIER_DEFINITIONS,
    tierLists,
    changelog: TIER_LIST_CHANGELOG,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
