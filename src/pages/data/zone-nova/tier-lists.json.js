// Zone Nova Tier Lists API Endpoint
// Generates /data/zone-nova/tier-lists.json

import {
  ALL_TIER_LISTS,
  TIER_DEFINITIONS,
  TIER_LIST_CHANGELOG,
  getGroupedTierSections,
  getRoleHighlights,
} from '../../../data/zone-nova/tier-lists.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'tier-lists',
    description:
      'Role and class-based character rankings for the main Zone Nova modes: PvE, PvP, and New Player / F2P.',
    lastUpdated: new Date().toISOString().split('T')[0],
    tierDefinitions: TIER_DEFINITIONS,
    tierLists: {
      pve: {
        name: ALL_TIER_LISTS.pve.name,
        lastUpdated: ALL_TIER_LISTS.pve.lastUpdated,
        description: ALL_TIER_LISTS.pve.description,
        tiers: ALL_TIER_LISTS.pve.tiers,
        roleHighlights: getRoleHighlights('pve'),
        classSections: getGroupedTierSections('pve', 'class'),
      },
      pvp: {
        name: ALL_TIER_LISTS.pvp.name,
        lastUpdated: ALL_TIER_LISTS.pvp.lastUpdated,
        description: ALL_TIER_LISTS.pvp.description,
        tiers: ALL_TIER_LISTS.pvp.tiers,
        roleHighlights: getRoleHighlights('pvp'),
        classSections: getGroupedTierSections('pvp', 'class'),
      },
      newPlayer: {
        name: ALL_TIER_LISTS['new-player'].name,
        lastUpdated: ALL_TIER_LISTS['new-player'].lastUpdated,
        description: ALL_TIER_LISTS['new-player'].description,
        tiers: ALL_TIER_LISTS['new-player'].tiers,
        roleHighlights: getRoleHighlights('new-player'),
        classSections: getGroupedTierSections('new-player', 'class'),
      },
    },
    changelog: TIER_LIST_CHANGELOG,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
