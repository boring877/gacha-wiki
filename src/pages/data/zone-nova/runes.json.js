// Zone Nova Runes API Endpoint
// Generates /data/zone-nova/runes.json

import { RUNE_SETS, MAIN_STATS_BY_POSITION } from '../../../data/zone-nova/runes.js';

export const prerender = true;

export async function GET() {
  // Convert rune sets object to array with keys
  const runeSets = Object.entries(RUNE_SETS).map(([key, rune]) => ({
    id: key,
    name: rune.name,
    chineseName: rune.chineseName,
    image: rune.image,
    twoPieceBonus: rune.twoPiece,
    fourPieceBonus: rune.fourPiece,
    classRestriction: rune.classRestriction || null,
    note: rune.note || null,
  }));

  const response = {
    game: 'Zone Nova',
    type: 'runes',
    description: 'Rune sets with 2-piece and 4-piece bonuses, plus main stat options by position',
    count: runeSets.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    runeSets,
    mainStatsByPosition: MAIN_STATS_BY_POSITION,
    buildGuide: {
      tip: 'Typically use 4-piece of main set + 2-piece of secondary set',
      positions: {
        '1-3': 'Fixed main stats (HP, ATK, DEF flat values)',
        '4-6': 'Variable main stats - choose based on character role',
      },
      commonSetups: {
        dps: '4pc Alpha/Beth + 2pc Attack%',
        healer: '4pc Daleth + 2pc HP%',
        tank: '4pc Zahn + 2pc DEF%',
        debuffer: '4pc Giants + 2pc Attack%',
      },
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
