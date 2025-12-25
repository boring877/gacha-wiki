// Central games configuration
// This file manages all games in the gacha wiki
import GameIcon from '../assets/images/games/horizon-walker/gameimg/gameicon.jpg';
import RGIcon from '../assets/images/games/rebellion-gilgamesh/gameimg/Icon1.jpg';
import StellaSoraIcon from '../assets/images/games/stella-sora/gameimg/Icon.jpg';
import BustyBurstIcon from '../assets/images/games/Busty_Burst/BG/Icon.png';
import TaimaninSquadIcon from '../assets/images/games/taimanin-squad/gameimg/icon.jpg';

export interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string | any;
  url: string;
  status: 'active' | 'coming-soon' | 'archived';
  sections: string[];
  lastUpdated?: Date;
}

export const GAMES: Game[] = [
  {
    id: 'rebellion-gilgamesh',
    name: 'Rebellion Gilgamesh ルーレット契約',
    slug: 'rebellion-gilgamesh',
    description: 'Adult Fantasy RPG • Characters • Club Management • Special Moves',
    image: RGIcon,
    url: '/guides/rebellion-gilgamesh/',
    status: 'active',
    sections: ['Characters', 'Club Management', 'Special Moves', 'Story', 'Events'],
    lastUpdated: new Date(),
  },
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    slug: 'zone-nova',
    description: 'Characters • Runes • Rifts • Crafting • Updates',
    image: '/images/games/zone-nova/zonenova.jpg',
    url: '/guides/zone-nova/',
    status: 'active',
    sections: ['Characters', 'Memories', 'Rifts', 'Runes', 'Crafting', 'Updates'],
    lastUpdated: new Date(),
  },
  {
    id: 'silver-and-blood',
    name: 'Silver and Blood',
    slug: 'silver-and-blood',
    description: 'Character guides and game mechanics',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main4.jpg',
    url: '/guides/silver-and-blood/',
    status: 'active',
    sections: ['Characters', 'Equipment', 'Stories'],
    lastUpdated: new Date(),
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
    sections: ['Chosen Humans', 'Tier List', 'Rift Combat', 'Transcendence', 'Survivor Resources'],
    lastUpdated: new Date(),
  },
  {
    id: 'stella-sora',
    name: 'Stella Sora ステラソラ',
    slug: 'stella-sora',
    description: 'Fantasy RPG • Nova Continent Exploration • Trekker Collection • Top-Down Action',
    image: StellaSoraIcon,
    url: '/guides/stella-sora/',
    status: 'active',
    sections: ['Characters', 'Combat', 'Monoliths', 'Trekkers', 'Resources'],
    lastUpdated: new Date(),
  },
  {
    id: 'busty-burst',
    name: 'Busty Burst Fantasy 巨乳ファンタジーバースト',
    slug: 'busty-burst',
    description: 'Fantasy RPG • Character Guides • Game Systems • Strategies',
    image: BustyBurstIcon,
    url: '/guides/busty-burst/',
    status: 'active',
    sections: ['Beginner Guide', 'Tier List', 'Game Systems', 'Redeem Codes', 'Events'],
    lastUpdated: new Date(),
  },
  {
    id: 'taimanin-squad',
    name: 'Taimanin Squad',
    slug: 'taimanin-squad',
    description: 'Collecting RPG • Taimanin Franchise • Pre-Registration • Character Collection',
    image: TaimaninSquadIcon,
    url: '/guides/taimanin-squad/',
    status: 'active',
    sections: ['Pre-Registration', 'Characters', 'Summoning', 'Equipment'],
    lastUpdated: new Date(),
  },
];

export function getGameById(id: string): Game | undefined {
  return GAMES.find(game => game.id === id);
}

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find(game => game.slug === slug);
}

export function getActiveGames(): Game[] {
  return GAMES.filter(game => game.status === 'active');
}

export function getAllGames(): Game[] {
  return GAMES;
}
