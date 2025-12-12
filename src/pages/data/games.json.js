// Games Overview API Endpoint
// Generates /data/games.json
// Complete introduction and overview for all games on Gacha Wiki

import { zoneNovaConfig } from '../../data/zone-nova/zone-nova.js';
import { silverAndBloodConfig } from '../../data/silver-and-blood/silver-and-blood.js';
import { horizonWalkerConfig } from '../../data/horizon-walker/horizon-walker.js';
import { stellaSoraConfig } from '../../data/stella-sora/stella-sora.js';
import { bustyBurstConfig } from '../../data/busty-burst/busty-burst.js';
import { rebellionGilgameshConfig } from '../../data/rebellion-gilgamesh/rebellion-gilgamesh.js';

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
      },
      apiEndpoints: [
        '/data/busty-burst/paladins.json',
        '/data/busty-burst/builds.json',
        '/data/busty-burst/equipment.json',
        '/data/busty-burst/tier-lists.json',
        '/data/busty-burst/redeem-codes.json',
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
