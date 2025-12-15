// Stella Sora Gifts API Endpoint
// Generates /data/stella-sora/gifts.json

import {
  gifts,
  craftingMaterial,
  craftingRecipes,
  pointValues,
  getGiftCategories,
} from '../../../data/stella-sora/gifts.js';

export const prerender = true;

export async function GET() {
  const categories = getGiftCategories();

  const response = {
    game: 'Stella Sora',
    type: 'gifts',
    description:
      'Complete gift database with categories, rarities, point values, and crafting recipes',
    count: gifts.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata: {
      categories,
      pointValues,
      craftingMaterial,
      craftingRecipes,
    },
    gifts: gifts.map(gift => ({
      id: gift.id,
      name: gift.name,
      slug: gift.slug,
      category: gift.category,
      rarity: gift.rarity,
      rarityImage: gift.rarityImage,
      image: gift.image,
      points: gift.points,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
