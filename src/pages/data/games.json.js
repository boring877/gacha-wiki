// Games Overview API Endpoint
// Generates /data/games.json
// Complete introduction and overview for all games on Gacha Wiki

import { zoneNovaConfig } from '../../data/zone-nova/zone-nova.js';
import { silverAndBloodConfig } from '../../data/silver-and-blood/silver-and-blood.js';
import { horizonWalkerConfig } from '../../data/horizon-walker/horizon-walker.js';
import { stellaSoraConfig } from '../../data/stella-sora/stella-sora.js';
import { bustyBurstConfig } from '../../data/busty-burst/busty-burst.js';
import { rebellionGilgameshConfig } from '../../data/rebellion-gilgamesh/rebellion-gilgamesh.js';
import { starSaviorConfig } from '../../data/star-savior/star-savior.js';
import { taimaninSquadConfig } from '../../data/taimanin-squad/taimanin-squad.js';
import { lastOriginGlobalConfig } from '../../data/last-origin-global/last-origin-global.js';
import { makeDramaConfig } from '../../data/make-drama/make-drama.js';
import { desireImmortalRealmConfig } from '../../data/desire-immortal-realm/desire-immortal-realm.js';

export const prerender = true;

export async function GET() {
  const games = [
    // Zone Nova
    {
      id: 'zone-nova',
      name: 'Zone Nova',
      japaneseName: 'ゾーンノヴァ',
      slug: 'zone-nova',
      status: 'active',
      genre: 'Strategic Team-Based RPG',
      description: zoneNovaConfig.gameInfo.description,
      heroImage: zoneNovaConfig.meta.heroImage,
      playUrl: zoneNovaConfig.gameInfo.playUrl,
      wikiUrl: '/guides/zone-nova/',
      features: [
        'Character collection with SSR/SR rarities',
        'Memory card equipment system',
        'Rune builds and stat customization',
        'Space-Time Rifts endgame content',
        'Guild Raids and PvP Arena',
        'Team synergy and skill combos',
      ],
      contentAvailable: {
        characters: true,
        tierLists: true,
        builds: true,
        memories: true,
        runes: true,
        rifts: true,
        redeemCodes: true,
      },
      apiEndpoints: [
        '/data/zone-nova/characters.json',
        '/data/zone-nova/builds.json',
        '/data/zone-nova/memories.json',
        '/data/zone-nova/runes.json',
        '/data/zone-nova/tier-lists.json',
        '/data/zone-nova/rifts.json',
        '/data/zone-nova/redeem-codes.json',
      ],
      guides: zoneNovaConfig.categoryGroups.map(group => ({
        category: group.title,
        description: group.description,
        pages: group.guides.map(g => ({ title: g.title, url: g.url })),
      })),
    },

    // Silver and Blood
    {
      id: 'silver-and-blood',
      name: 'Silver and Blood',
      japaneseName: '銀血の契約',
      slug: 'silver-and-blood',
      status: 'active',
      genre: 'Dark Fantasy Vampire RPG',
      description: silverAndBloodConfig.gameInfo.description,
      heroImage: silverAndBloodConfig.meta.heroImage,
      playUrl: silverAndBloodConfig.gameInfo.playUrl,
      wikiUrl: '/guides/silver-and-blood/',
      story: silverAndBloodConfig.storyContent,
      features: [
        'Moon phase combat system',
        'Bloodborn immortal characters',
        'Physical and Magic damage types',
        'Clan Hunt boss battles',
        'Prophecy Unbound endgame',
        'Team synergy mechanics',
      ],
      contentAvailable: {
        characters: true,
        tierLists: true,
        damageCalculator: true,
        clanHunt: true,
        events: true,
        redeemCodes: true,
      },
      apiEndpoints: [
        '/data/silver-and-blood/characters.json',
        '/data/silver-and-blood/tier-lists.json',
        '/data/silver-and-blood/redeem-codes.json',
      ],
      guides: silverAndBloodConfig.categoryGroups.map(group => ({
        category: group.title,
        description: group.description,
        pages: group.guides.map(g => ({ title: g.title, url: g.url })),
      })),
    },

    // Horizon Walker
    {
      id: 'horizon-walker',
      name: 'Horizon Walker',
      japaneseName: null,
      slug: 'horizon-walker',
      status: 'active',
      genre: 'Tactical RPG with Mercenaries',
      description: horizonWalkerConfig.gameInfo.description,
      heroImage: horizonWalkerConfig.meta.heroImage,
      playUrl: horizonWalkerConfig.gameInfo.playUrl,
      platforms: horizonWalkerConfig.gameInfo.platforms,
      socialLinks: horizonWalkerConfig.gameInfo.socialLinks,
      wikiUrl: '/guides/horizon-walker/',
      lore: horizonWalkerConfig.lore,
      features: [
        'Chosen Human supernatural abilities',
        'Tactical turn-based combat with AP system',
        'EX Weapons with unique skills',
        'Mercenary recruitment system',
        'Stigma equipment system',
        'Dimension rift exploration',
      ],
      contentAvailable: {
        characters: true,
        tierLists: true,
        builds: true,
        mercenaries: true,
        weapons: true,
        stigmas: true,
      },
      apiEndpoints: [
        '/data/horizon-walker/characters.json',
        '/data/horizon-walker/builds.json',
        '/data/horizon-walker/mercenaries.json',
        '/data/horizon-walker/tier-lists.json',
      ],
      guides: horizonWalkerConfig.categoryGroups.map(group => ({
        category: group.title,
        description: group.description,
        pages: group.guides.map(g => ({ title: g.title, url: g.url })),
      })),
    },

    // Stella Sora
    {
      id: 'stella-sora',
      name: 'Stella Sora',
      japaneseName: 'ステラソラ',
      slug: 'stella-sora',
      status: 'active',
      genre: 'Anime-Style Adventure RPG',
      description: stellaSoraConfig.story.content[0],
      heroImage: stellaSoraConfig.meta.heroImage,
      playUrl: stellaSoraConfig.gameInfo.playUrl,
      iosUrl: stellaSoraConfig.gameInfo.iosUrl,
      winUrl: stellaSoraConfig.gameInfo.winUrl,
      socialLinks: stellaSoraConfig.gameInfo.socialLinks,
      wikiUrl: '/guides/stella-sora/',
      version: stellaSoraConfig.version,
      features: stellaSoraConfig.features.map(f => f.title + ': ' + f.description),
      contentAvailable: {
        characters: true,
        tierLists: true,
        discs: true,
        banners: true,
        events: true,
        emblems: true,
        potentials: true,
      },
      apiEndpoints: [
        '/data/stella-sora/characters.json',
        '/data/stella-sora/discs.json',
        '/data/stella-sora/banners.json',
        '/data/stella-sora/tier-lists.json',
        '/data/stella-sora/events.json',
        '/data/stella-sora/emblems.json',
        '/data/stella-sora/potentials.json',
      ],
    },

    // Busty Burst Fantasy
    {
      id: 'busty-burst',
      name: 'Busty Burst Fantasy',
      japaneseName: null,
      slug: 'busty-burst',
      status: 'active',
      genre: 'Fantasy Gacha RPG',
      description: bustyBurstConfig.gameInfo.description,
      heroImage: bustyBurstConfig.meta.heroImage,
      playUrl: bustyBurstConfig.gameInfo.playUrl,
      discordUrl: bustyBurstConfig.gameInfo.discordUrl,
      wikiUrl: '/guides/busty-burst/',
      gameNotes: bustyBurstConfig.gameNotes,
      features: [
        'Paladin summoning system',
        'Duel-based lordship battles',
        'Accessory equipment sets',
        'Raid boss farming',
        'Team role optimization',
      ],
      contentAvailable: {
        paladins: true,
        tierLists: true,
        builds: true,
        equipment: true,
        redeemCodes: true,
        blog: true,
      },
      apiEndpoints: [
        '/data/busty-burst/paladins.json',
        '/data/busty-burst/builds.json',
        '/data/busty-burst/equipment.json',
        '/data/busty-burst/tier-lists.json',
        '/data/busty-burst/redeem-codes.json',
        '/data/busty-burst/blog.json',
      ],
    },

    // Rebellion Gilgamesh
    {
      id: 'rebellion-gilgamesh',
      name: 'Rebellion Gilgamesh',
      japaneseName: 'ルーレット契約',
      slug: 'rebellion-gilgamesh',
      status: 'new',
      genre: 'Harem Management RPG',
      description: rebellionGilgameshConfig.gameInfo.description,
      heroImage: rebellionGilgameshConfig.meta.heroImage,
      playUrl: rebellionGilgameshConfig.gameInfo.playUrl,
      socialLinks: rebellionGilgameshConfig.gameInfo.socialLinks,
      wikiUrl: '/guides/rebellion-gilgamesh/',
      story: rebellionGilgameshConfig.story,
      features: rebellionGilgameshConfig.features.map(f => f.title + ': ' + f.description),
      contentAvailable: {
        characters: false,
        tierLists: false,
        guides: false,
      },
      apiEndpoints: [],
      note: 'Wiki content coming soon - game recently added',
    },

    // Star Savior
    {
      id: 'star-savior',
      name: 'Star Savior',
      japaneseName: '스타 세이버',
      slug: 'star-savior',
      status: 'active',
      genre: 'Turn-Based RPG',
      description: starSaviorConfig.gameInfo.description,
      heroImage: starSaviorConfig.meta.heroImage,
      wikiUrl: '/guides/star-savior/',
      features: [
        'Turn-based tactical combat',
        'Nova Burst ultimate abilities',
        'Limit Break progression system',
        '43 playable characters across 6 roles',
        'Star Grade stat enhancement',
      ],
      contentAvailable: {
        characters: true,
        guides: true,
      },
      apiEndpoints: [],
      guides: starSaviorConfig.guides.map(g => ({
        category: 'database',
        description: g.description,
        pages: [{ title: g.title, url: g.url }],
      })),
    },

    // Taimanin Squad (guides only - no JSON data API yet)
    {
      id: 'taimanin-squad',
      name: 'Taimanin Squad',
      japaneseName: null,
      slug: 'taimanin-squad',
      status: 'active',
      genre: 'Turn-Based Collecting RPG',
      description: taimaninSquadConfig.gameInfo.description,
      heroImage: taimaninSquadConfig.meta.heroImage,
      playUrl: taimaninSquadConfig.gameInfo.playUrl,
      platforms: taimaninSquadConfig.gameInfo.platforms,
      socialLinks: taimaninSquadConfig.gameInfo.socialLinks,
      wikiUrl: '/guides/taimanin-squad/',
      story: taimaninSquadConfig.story,
      contentAvailable: {
        characters: true,
        tierLists: true,
        blog: true,
      },
      apiEndpoints: [],
      note: 'Guides available on the wiki - no structured JSON data API yet',
      guides: (taimaninSquadConfig.categoryGroups || []).map(group => ({
        category: group.title,
        description: group.description,
        pages: (group.guides || []).map(g => ({ title: g.title, url: g.url })),
      })),
    },

    // Last Origin Global (guides only - no JSON data API yet)
    {
      id: 'last-origin-global',
      name: 'Last Origin Global',
      japaneseName: '라스트 오리진',
      slug: 'last-origin-global',
      status: 'pre-registration',
      genre: 'Post-Apocalyptic Turn-Based Strategy RPG',
      description: lastOriginGlobalConfig.gameInfo.description,
      heroImage: lastOriginGlobalConfig.meta.heroImage,
      platforms: lastOriginGlobalConfig.gameInfo.platforms,
      socialLinks: lastOriginGlobalConfig.gameInfo.socialLinks,
      wikiUrl: '/guides/last-origin-global/',
      story: lastOriginGlobalConfig.story,
      contentAvailable: {},
      apiEndpoints: [],
      note: 'Guides available on the wiki - no structured JSON data API yet',
      guides: (lastOriginGlobalConfig.categoryGroups || []).map(group => ({
        category: group.title,
        description: group.description,
        pages: (group.guides || []).map(g => ({ title: g.title, url: g.url })),
      })),
    },

    // Make Drama (guides only - no JSON data API yet)
    {
      id: 'make-drama',
      name: 'Make Drama',
      japaneseName: null,
      slug: 'make-drama',
      status: 'pre-registration',
      genre: 'Mobile Action Defense RPG',
      description: makeDramaConfig.gameInfo.description,
      wikiUrl: '/guides/make-drama/',
      contentAvailable: {
        characters: true,
      },
      apiEndpoints: [],
      note: 'Guides available on the wiki - no structured JSON data API yet',
      guides: (makeDramaConfig.guides || []).map(g => ({
        category: g.category,
        description: g.description,
        pages: [{ title: g.title, url: g.url }],
      })),
    },

    // Desire Immortal Realm (guides only - no JSON data API yet)
    {
      id: 'desire-immortal-realm',
      name: 'Desire Immortal Realm',
      japaneseName: '欲界仙途',
      slug: 'desire-immortal-realm',
      status: 'active',
      genre: 'Xianxia Cultivation Tower-Defense Gacha',
      description: desireImmortalRealmConfig.gameInfo.description,
      wikiUrl: '/guides/desire-immortal-realm/',
      contentAvailable: {
        characters: true,
      },
      apiEndpoints: [],
      note: 'Guides available on the wiki - no structured JSON data API yet',
      guides: (desireImmortalRealmConfig.guides || []).map(g => ({
        category: g.category,
        description: g.description,
        pages: [{ title: g.title, url: g.url }],
      })),
    },
  ];

  const response = {
    type: 'games',
    description:
      'Complete overview of all games on Gacha Wiki with introductions, features, available content, and API endpoints',
    count: games.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    summary: {
      activeGames: games.filter(g => g.status === 'active').length,
      newGames: games.filter(g => g.status === 'new').length,
      totalApiEndpoints: games.reduce((sum, g) => sum + (g.apiEndpoints?.length || 0), 0),
    },
    games,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
