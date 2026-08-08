// Central games registry — the single source of truth for game identity.
// Every other layer (consts.ts, game-navigation.ts, clock/landing.js) references
// this instead of re-declaring id/name/image/url/themeColor.

import RGIcon from '../assets/images/games/rebellion-gilgamesh/gameimg/Icon1.jpg';
import StellaSoraIcon from '../assets/images/games/stella-sora/gameimg/Icon.jpg';
import BustyBurstIcon from '../assets/images/games/Busty_Burst/BG/Icon.png';
import TaimaninSquadIcon from '../assets/images/games/taimanin-squad/gameimg/icon.jpg';
import LastOriginGlobalIcon from '../assets/images/games/last-origin-global/gameimg/icon.jpg';
import GameIcon from '../assets/images/games/horizon-walker/gameimg/gameicon.jpg';

export interface Game {
  id: string; // kebab-case key, e.g. 'zone-nova' — the single key everywhere
  name: string; // short English display name
  slug: string; // URL slug (=== id for all games)
  description: string; // one-line tagline for the guides index card
  image: string | ImageMetadata; // imported Astro asset OR public path string
  url: string; // '/guides/<game>/'
  status: 'active' | 'coming-soon';
  themeColor: string; // hex color, moved in from consts.ts
  damageKValue?: number; // damage formula coefficient, only zone-nova sets it
  sections: string[]; // short section labels for the guides index teaser
}

export const GAMES: Game[] = [
  {
    id: 'rebellion-gilgamesh',
    name: 'Rebellion Gilgamesh',
    slug: 'rebellion-gilgamesh',
    description: 'Adult Fantasy RPG • Characters • Club Management • Special Moves',
    image: RGIcon,
    url: '/guides/rebellion-gilgamesh/',
    status: 'active',
    themeColor: '#c26b6b',
    sections: ['Characters', 'Club Management', 'Special Moves', 'Story', 'Events'],
  },
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    slug: 'zone-nova',
    description: 'Characters • Runes • Rifts • Crafting • Updates',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/zonenova.jpg',
    url: '/guides/zone-nova/',
    status: 'active',
    themeColor: '#4a90e2',
    damageKValue: 972.95,
    sections: ['Characters', 'Memories', 'Rifts', 'Runes', 'Crafting', 'Updates'],
  },
  {
    id: 'silver-and-blood',
    name: 'Silver and Blood',
    slug: 'silver-and-blood',
    description: 'Character guides and game mechanics',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main4.jpg',
    url: '/guides/silver-and-blood/',
    status: 'active',
    themeColor: '#5a7ba7',
    damageKValue: 1300,
    sections: ['Characters', 'Equipment', 'Stories'],
  },
  {
    id: 'horizon-walker',
    name: 'Horizon Walker',
    slug: 'horizon-walker',
    description:
      'Post-apocalyptic RPG: Transcend mortality as a Chosen Human and battle Forsaken Entities through dimensional rifts',
    image: GameIcon,
    url: '/guides/horizon-walker/',
    status: 'active',
    themeColor: '#e8a547',
    sections: ['Chosen Humans', 'Tier List', 'Rift Combat', 'Transcendence', 'Survivor Resources'],
  },
  {
    id: 'stella-sora',
    name: 'Stella Sora',
    slug: 'stella-sora',
    description: 'Fantasy RPG • Nova Continent Exploration • Trekker Collection • Top-Down Action',
    image: StellaSoraIcon,
    url: '/guides/stella-sora/',
    status: 'active',
    themeColor: '#7dd3fc',
    sections: ['Characters', 'Combat', 'Monoliths', 'Trekkers', 'Resources'],
  },
  {
    id: 'busty-burst',
    name: 'Busty Burst Fantasy',
    slug: 'busty-burst',
    description: 'Fantasy RPG • Character Guides • Game Systems • Strategies',
    image: BustyBurstIcon,
    url: '/guides/busty-burst/',
    status: 'active',
    themeColor: '#FF1493',
    sections: ['Beginner Guide', 'Tier List', 'Game Systems', 'Redeem Codes', 'Events'],
  },
  {
    id: 'taimanin-squad',
    name: 'Taimanin Squad',
    slug: 'taimanin-squad',
    description: 'Collecting RPG • Taimanin Franchise • Pre-Registration • Character Collection',
    image: TaimaninSquadIcon,
    url: '/guides/taimanin-squad/',
    status: 'active',
    themeColor: '#6b5b7a',
    sections: ['Pre-Registration', 'Characters', 'Summoning', 'Equipment'],
  },
  {
    id: 'star-savior',
    name: 'Star Savior',
    slug: 'star-savior',
    description: 'Turn-Based RPG • 43 Characters • Nova Burst • Limit Break',
    image: '/images/games/star-savior/icon.png',
    url: '/guides/star-savior/',
    status: 'active',
    themeColor: '#5b4a9e',
    sections: ['Characters', 'Nova Burst', 'Limit Break', 'Star Grades'],
  },
  {
    id: 'last-origin-global',
    name: 'Last Origin Global',
    slug: 'last-origin-global',
    description: 'Turn-Based Strategy RPG • Bioroid Squad Building • 3x3 Grid Combat',
    image: LastOriginGlobalIcon,
    url: '/guides/last-origin-global/',
    status: 'active',
    themeColor: '#e63946',
    sections: ['Pre-Registration', 'Bioroids', 'Grid Combat', 'Unit Types', 'Roles', 'Progression'],
  },
  {
    id: 'make-drama',
    name: 'Make Drama',
    slug: 'make-drama',
    description: 'Mobile Action Defense RPG • Wemade Connect • Pre-Registration • 10 Characters Revealed',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/make-drama/icon.png',
    url: '/guides/make-drama/',
    status: 'coming-soon',
    themeColor: '#34d399',
    sections: ['Characters', 'Factions', 'Elements', 'Pre-Registration'],
  },
  {
    id: 'desire-immortal-realm',
    name: 'Desire Immortal Realm',
    slug: 'desire-immortal-realm',
    description: 'Chinese Xianxia RPG • 40 Heroines • Tower Defense • Star-Tier Progression',
    image: '/images/games/desire-immortal-realm/icon.png',
    url: '/guides/desire-immortal-realm/',
    status: 'active',
    themeColor: '#3d5a6c',
    sections: ['Characters', 'Classes', 'Stats', 'Skills'],
  },
];

export function getGameById(id: string): Game | undefined {
  return GAMES.find(game => game.id === id);
}

export function getAllGames(): Game[] {
  return GAMES;
}
