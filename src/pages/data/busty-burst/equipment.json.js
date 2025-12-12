// Busty Burst Equipment/Accessories API Endpoint
// Generates /data/busty-burst/equipment.json

import { accessoryItems } from '../../../data/busty-burst/accessory-items.js';
import {
  accessoryStats,
  accessoryTypes,
  accessoryTypeLabels,
} from '../../../data/busty-burst/accessory-stats.js';
import {
  mainStats,
  subStats,
  subStatTips,
  setRatings,
  recommendedBuilds,
  quickTips,
} from '../../../data/busty-burst/accessory-guide.js';
import { raidDrops } from '../../../data/busty-burst/raid-drops.js';

export const prerender = true;

export async function GET() {
  // Process accessory sets by rarity
  const accessorySets = {
    SSR: accessoryItems.SSR.map(set => ({
      id: set.id,
      name: set.name,
      rarity: set.rarity,
      pieces: set.pieces.map(p => p.type),
      setEffects: set.setEffects,
    })),
    SR: accessoryItems.SR.map(set => ({
      id: set.id,
      name: set.name,
      rarity: set.rarity,
      pieces: set.pieces.map(p => p.type),
      setEffects: set.setEffects,
    })),
  };

  // Stats info by rarity
  const statsInfo = {
    SSR: {
      rarity: 'SSR',
      mainStatsBySlot: accessoryStats.SSR.mainStats,
      subStats: accessoryStats.SSR.subStats,
      enhancement: accessoryStats.SSR.enhancement,
    },
    SR: {
      rarity: 'SR',
      mainStatsBySlot: accessoryStats.SR.mainStats,
      subStats: accessoryStats.SR.subStats,
      enhancement: accessoryStats.SR.enhancement,
    },
  };

  // Guide recommendations
  const guide = {
    bestMainStatsBySlot: mainStats.map(s => ({
      slot: s.slot,
      recommended: s.best,
    })),
    subStatPriority: subStats,
    subStatTips,
    setRatings: setRatings.map(tier => ({
      tier: tier.tier,
      sets: tier.sets.map(s => ({
        name: s.name,
        note: s.note,
      })),
    })),
    recommendedBuildsByRole: recommendedBuilds.map(build => ({
      role: build.role,
      sets: build.sets.map(s => ({
        name: s.name,
        pieces: s.pieces,
      })),
    })),
    quickTips,
  };

  // Raid farming info
  const farmingGuide = {
    description: 'Where to farm each accessory slot from raid bosses',
    slots: raidDrops.map(drop => ({
      slot: drop.slot,
      dropsFrom: drop.bosses.map(boss => ({
        name: boss.name,
        element: boss.element,
      })),
    })),
  };

  const response = {
    game: 'Busty Burst',
    type: 'equipment',
    description:
      'Complete accessory/equipment guide including all sets, stats, enhancement system, farming locations, and build recommendations by role',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Accessory types
    accessoryTypes: accessoryTypes.map(type => ({
      id: type,
      name: accessoryTypeLabels[type],
    })),

    // All accessory sets
    accessorySets,

    // Stat information
    stats: statsInfo,

    // Guide and recommendations
    guide,

    // Farming locations
    farmingGuide,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
