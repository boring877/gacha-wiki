// Master index of all API endpoints for AI/bot consumption
// This file generates /data/index.json

export const prerender = true;

export async function GET() {
  const index = {
    name: 'Gacha Wiki API',
    description:
      'Centralized game data for Zone Nova, Silver and Blood, Horizon Walker, Stella Sora, and Busty Burst. Designed for AI assistants, Discord bots, and third-party tools.',
    version: '2.0.0',
    baseUrl: 'https://gachawiki.info',
    lastUpdated: new Date().toISOString().split('T')[0],
    games: [
      {
        id: 'zone-nova',
        name: 'Zone Nova',
        description: 'Mobile gacha RPG with strategic team-based combat',
        endpoints: {
          characters: '/data/zone-nova/characters.json',
          builds: '/data/zone-nova/builds.json',
          memories: '/data/zone-nova/memories.json',
          runes: '/data/zone-nova/runes.json',
          tierLists: '/data/zone-nova/tier-lists.json',
          rifts: '/data/zone-nova/rifts.json',
          redeemCodes: '/data/zone-nova/redeem-codes.json',
        },
        webPages: {
          home: '/guides/zone-nova/',
          characterDatabase: '/guides/zone-nova/character-database/',
          memoryDatabase: '/guides/zone-nova/memory-database/',
          tierLists: '/guides/zone-nova/tier-lists/',
          rifts: '/guides/zone-nova/rifts/',
          redeemCodes: '/guides/zone-nova/redeem-codes/',
        },
      },
      {
        id: 'silver-and-blood',
        name: 'Silver and Blood',
        description: 'Dark fantasy RPG with vampires and moon phase mechanics',
        endpoints: {
          characters: '/data/silver-and-blood/characters.json',
          tierLists: '/data/silver-and-blood/tier-lists.json',
          redeemCodes: '/data/silver-and-blood/redeem-codes.json',
        },
        webPages: {
          home: '/guides/silver-and-blood/',
          characterDatabase: '/guides/silver-and-blood/character-database/',
          tierLists: '/guides/silver-and-blood/tier-lists/',
          redeemCodes: '/guides/silver-and-blood/redeem-codes/',
        },
      },
      {
        id: 'horizon-walker',
        name: 'Horizon Walker',
        description: 'Tactical RPG with mercenaries and strategic positioning',
        endpoints: {
          characters: '/data/horizon-walker/characters.json',
          builds: '/data/horizon-walker/builds.json',
          mercenaries: '/data/horizon-walker/mercenaries.json',
          tierLists: '/data/horizon-walker/tier-lists.json',
        },
        webPages: {
          home: '/guides/horizon-walker/',
          characterDatabase: '/guides/horizon-walker/character-database/',
          mercenaryDatabase: '/guides/horizon-walker/mercenary-database/',
          tierLists: '/guides/horizon-walker/tier-lists/',
        },
      },
      {
        id: 'stella-sora',
        name: 'Stella Sora',
        description: 'Anime-style gacha RPG with disc equipment system',
        endpoints: {
          characters: '/data/stella-sora/characters.json',
          discs: '/data/stella-sora/discs.json',
          tierLists: '/data/stella-sora/tier-lists.json',
          events: '/data/stella-sora/events.json',
        },
        webPages: {
          home: '/guides/stella-sora/',
          characterDatabase: '/guides/stella-sora/character-database/',
          discDatabase: '/guides/stella-sora/disc-database/',
          tierLists: '/guides/stella-sora/tier-lists/',
          events: '/guides/stella-sora/events/',
        },
      },
      {
        id: 'busty-burst',
        name: 'Busty Burst',
        description: 'Fantasy gacha RPG with paladin characters',
        endpoints: {
          paladins: '/data/busty-burst/paladins.json',
          builds: '/data/busty-burst/builds.json',
          tierLists: '/data/busty-burst/tier-lists.json',
          redeemCodes: '/data/busty-burst/redeem-codes.json',
        },
        webPages: {
          home: '/guides/busty-burst/',
          tierLists: '/guides/busty-burst/tier-lists/',
          redeemCodes: '/guides/busty-burst/redeem-codes/',
        },
      },
    ],
    usage: {
      rateLimit: 'No strict limit, but please cache responses',
      caching: 'Data updates with game patches, typically weekly',
      attribution: 'Attribution to gachawiki.info appreciated but not required',
      cors: 'CORS enabled for all origins',
    },
    dataTypes: {
      characters: 'Character stats, skills, equipment recommendations, team synergies',
      builds: 'Detailed build guides with skill priorities, equipment, substats, traits',
      memories: 'Memory cards/equipment with stats and effects (Zone Nova)',
      runes: 'Rune sets with 2-piece/4-piece bonuses and main stat options (Zone Nova)',
      discs: 'Disc equipment with set bonuses (Stella Sora)',
      mercenaries: 'Hireable units with traits (Horizon Walker)',
      paladins: 'Paladin characters with elements and roles (Busty Burst)',
      tierLists: 'Character rankings by game mode (PvE, PvP, Boss, etc.)',
      rifts: 'Limited-time challenge content with recommended teams (Zone Nova)',
      redeemCodes: 'Active gift codes for free in-game rewards',
      events:
        'Game events with shop items, quests, stages, currency info, and rewards (Stella Sora)',
    },
  };

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
