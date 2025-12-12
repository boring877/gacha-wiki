// Zone Nova Rifts API Endpoint
// Generates /data/zone-nova/rifts.json

import { zoneNovaRifts, RIFT_STATUS } from '../../../data/zone-nova/rifts.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'rifts',
    description: 'Space-Time Rift content - limited-time challenge dungeons with unique rewards',
    count: zoneNovaRifts.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    statusTypes: RIFT_STATUS,
    rifts: zoneNovaRifts.map(rift => ({
      id: rift.id,
      slug: rift.slug,
      name: rift.name,
      type: rift.type,
      status: rift.status,
      startDate: rift.startDate,
      endDate: rift.endDate,
      description: rift.description,
      difficulty: rift.difficulty,
      rewards: rift.rewards,
      recommendedTeams: rift.recommendedTeams,
      mechanics: rift.mechanics,
      tips: rift.tips,
      detailUrl: rift.detailUrl,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
