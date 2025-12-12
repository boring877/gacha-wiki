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
    // Cross-game endpoints
    globalEndpoints: {
      games: '/data/games.json',
      clock: '/data/clock.json',
    },
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
          damageMechanics: '/data/zone-nova/damage-mechanics.json',
          expRequirements: '/data/zone-nova/exp-requirements.json',
          craftingItems: '/data/zone-nova/crafting-items.json',
          updates: '/data/zone-nova/updates.json',
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
          banners: '/data/stella-sora/banners.json',
          emblems: '/data/stella-sora/emblems.json',
          potentials: '/data/stella-sora/potentials.json',
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
          equipment: '/data/busty-burst/equipment.json',
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
      games:
        'Complete overview of all 6 games with introductions, descriptions, features, lore, available content, and API endpoint lists',
      characters: 'Character stats, skills, equipment recommendations, team synergies',
      builds: 'Detailed build guides with skill priorities, equipment, substats, traits',
      memories: 'Memory cards/equipment with stats and effects (Zone Nova)',
      runes: 'Rune sets with 2-piece/4-piece bonuses and main stat options (Zone Nova)',
      discs:
        'Disc equipment with full skill data (Melody, Harmony, Skill effects), stats, and support info (Stella Sora)',
      banners:
        'Banner timeline with character/disc recruitment events, rate-ups, and schedules (Stella Sora)',
      mercenaries: 'Hireable units with traits (Horizon Walker)',
      paladins: 'Paladin characters with elements and roles (Busty Burst)',
      tierLists: 'Character rankings by game mode (PvE, PvP, Boss, etc.)',
      rifts: 'Limited-time challenge content with recommended teams (Zone Nova)',
      damageMechanics:
        'Damage calculation formulas, defense coefficient, damage reduction mechanics, and character-specific calculations like Gaia (Zone Nova)',
      expRequirements:
        'Complete leveling data for characters, memories, and runes with EXP values, credit costs, breakthrough materials, and efficiency analysis (Zone Nova)',
      craftingItems:
        'Crafting items for rune customization including Dice, Card, and Laser Machine with substat info and usage tips (Zone Nova)',
      updates:
        'Game update history with maintenance notes, character recruitment announcements, events, and TL;DR summaries (Zone Nova)',
      redeemCodes: 'Active gift codes for free in-game rewards',
      events:
        'Game events with shop items, quests, stages, currency info, and rewards (Stella Sora)',
      equipment:
        'Accessory sets, stats, enhancement system, farming locations, and build recommendations (Busty Burst)',
      clock:
        'Server reset times, maintenance schedules, event timers, and banner countdowns for all games',
      emblems:
        'Emblem stat reference with all levels (70/80/90) and rarities (Green/Blue/Gold/Rainbow) (Stella Sora)',
      potentials:
        'Character potentials/ascension abilities that enhance Trekker skills (Stella Sora)',
    },
  };

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
