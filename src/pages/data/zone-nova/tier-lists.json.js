// Zone Nova Tier Lists API Endpoint
// Generates /data/zone-nova/tier-lists.json

import {
  ALL_TIER_LISTS,
  TIER_DEFINITIONS,
  TIER_LIST_CHANGELOG,
} from '../../../data/zone-nova/tier-lists.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'tier-lists',
    description: 'Character tier rankings for different game modes (PvE, PvP, Rifts, Guild Raid)',
    lastUpdated: new Date().toISOString().split('T')[0],
    tierDefinitions: TIER_DEFINITIONS,
    tierLists: {
      pve: {
        name: ALL_TIER_LISTS.pve.name,
        lastUpdated: ALL_TIER_LISTS.pve.lastUpdated,
        description: ALL_TIER_LISTS.pve.description,
        tiers: ALL_TIER_LISTS.pve.tiers,
      },
      pvp: {
        name: ALL_TIER_LISTS.pvp.name,
        lastUpdated: ALL_TIER_LISTS.pvp.lastUpdated,
        description: ALL_TIER_LISTS.pvp.description,
        tiers: ALL_TIER_LISTS.pvp.tiers,
      },
      rift: {
        name: ALL_TIER_LISTS.rift.name,
        lastUpdated: ALL_TIER_LISTS.rift.lastUpdated,
        description: ALL_TIER_LISTS.rift.description,
        tiers: ALL_TIER_LISTS.rift.tiers,
      },
      guildRaid: {
        name: ALL_TIER_LISTS['guild-raid'].name,
        lastUpdated: ALL_TIER_LISTS['guild-raid'].lastUpdated,
        description: ALL_TIER_LISTS['guild-raid'].description,
        tiers: ALL_TIER_LISTS['guild-raid'].tiers,
      },
      newPlayer: {
        name: ALL_TIER_LISTS['new-player'].name,
        lastUpdated: ALL_TIER_LISTS['new-player'].lastUpdated,
        description: ALL_TIER_LISTS['new-player'].description,
        tiers: ALL_TIER_LISTS['new-player'].tiers,
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
