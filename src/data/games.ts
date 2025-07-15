// Central games configuration
// This file manages all games in the gacha wiki

export interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  status: 'active' | 'coming-soon' | 'archived';
  sections: string[];
  lastUpdated?: Date;
}

export const GAMES: Game[] = [
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
