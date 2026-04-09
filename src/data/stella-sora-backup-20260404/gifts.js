// Gift data extracted from character preferences
// Each gift has an id, name, slug, category, rarity tier, rarity image, item image, and point values

// Rarity image paths
const rarityImages = {
  3: "/images/games/stella-sora/rarity/rare_item_a_3.png",
  4: "/images/games/stella-sora/rarity/rare_item_a_4.png",
  5: "/images/games/stella-sora/rarity/rare_item_a_5.png"
};

// Crafting material
export const craftingMaterial = {
  name: "Artifact Wishing Egg",
  slug: "artifact-wishing-egg",
  image: "/images/games/stella-sora/items/artifact-wishing-egg.png"
};

// Crafting recipes - how to craft gifts of each rarity
// 10x Artifact Wishing Egg → 1x 3-star gift
// 6x 3-star gift (same category) → 1x 4-star gift (same category)
export const craftingRecipes = {
  3: { material: "Artifact Wishing Egg", quantity: 10 },
  4: { material: "3-star gift", quantity: 6 }
};

// Base path for item images
const itemBasePath = "/images/games/stella-sora/items";

// Point values by rarity
// Neutral: base points
// Loved: +50% bonus
// Hated: -20% penalty
const pointValues = {
  3: { neutral: 150, loved: 225, hated: 120 },  // 150 base, +50% = 225, -20% = 120
  4: { neutral: 500, loved: 750, hated: 400 },  // 500 base, +50% = 750, -20% = 400
  5: { neutral: 2000, loved: 3000, hated: 1600 } // 2000 base, +50% = 3000, -20% = 1600
};

export const gifts = [
  // Photo Capturer Category
  {
    id: 1,
    name: "Card Photo Capturer",
    slug: "card-photo-capturer",
    category: "Photo Capturer",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/card-photo-capturer.png`,
    points: pointValues[3]
  },
  {
    id: 2,
    name: "Reflective Photo Capturer",
    slug: "reflective-photo-capturer",
    category: "Photo Capturer",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/reflective-photo-capturer.png`,
    points: pointValues[4]
  },
  {
    id: 3,
    name: "Ultra-Precision Photo Capturer",
    slug: "ultra-precision-photo-capturer",
    category: "Photo Capturer",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/ultra-precision-photo-capturer.png`,
    points: pointValues[5]
  },

  // Star Category
  {
    id: 4,
    name: "Rising Star",
    slug: "rising-star",
    category: "Star",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/rising-star.png`,
    points: pointValues[3]
  },
  {
    id: 5,
    name: "Moonlit Companion",
    slug: "moonlit-companion",
    category: "Star",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/moonlit-companion.png`,
    points: pointValues[4]
  },
  {
    id: 6,
    name: "Cosmic Form",
    slug: "cosmic-form",
    category: "Star",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/cosmic-form.png`,
    points: pointValues[5]
  },

  // Candle/Fire Category
  {
    id: 7,
    name: "Love Candle",
    slug: "love-candle",
    category: "Candle",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/love-candle.png`,
    points: pointValues[3]
  },
  {
    id: 8,
    name: "Blazing Wings",
    slug: "blazing-wings",
    category: "Candle",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/blazing-wings.png`,
    points: pointValues[4]
  },
  {
    id: 9,
    name: "Fiery Honeypot",
    slug: "fiery-honeypot",
    category: "Candle",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/fiery-honeypot.png`,
    points: pointValues[5]
  },

  // Wind Spinner Category
  {
    id: 10,
    name: "Whisper Wind Spinner",
    slug: "whisper-wind-spinner",
    category: "Wind Spinner",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/whisper-wind-spinner.png`,
    points: pointValues[3]
  },
  {
    id: 11,
    name: "Chilling Wind Spinner",
    slug: "chilling-wind-spinner",
    category: "Wind Spinner",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/chilling-wind-spinner.png`,
    points: pointValues[4]
  },
  {
    id: 12,
    name: "Blazing Wind Spinner",
    slug: "blazing-wind-spinner",
    category: "Wind Spinner",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/blazing-wind-spinner.png`,
    points: pointValues[5]
  },

  // Blower Category
  {
    id: 13,
    name: "Portable Blower",
    slug: "portable-blower",
    category: "Blower",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/portable-blower.png`,
    points: pointValues[3]
  },
  {
    id: 14,
    name: "Exquisite Blower",
    slug: "exquisite-blower",
    category: "Blower",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/exquisite-blower.png`,
    points: pointValues[4]
  },
  {
    id: 15,
    name: "Deluxe Blower",
    slug: "deluxe-blower",
    category: "Blower",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/deluxe-blower.png`,
    points: pointValues[5]
  },

  // Ice/Shaved Ice Category
  {
    id: 16,
    name: "Summer Chill Crushed Ice",
    slug: "summer-chill-crushed-ice",
    category: "Shaved Ice",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/summer-chill-crushed-ice.png`,
    points: pointValues[3]
  },
  {
    id: 17,
    name: "Fragrant Ice Delight",
    slug: "fragrant-ice-delight",
    category: "Shaved Ice",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/fragrant-ice-delight.png`,
    points: pointValues[4]
  },
  {
    id: 18,
    name: "Sweet IceFurry",
    slug: "sweet-icefurry",
    category: "Shaved Ice",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/sweet-icefurry.png`,
    points: pointValues[5]
  },

  // Ceramic/Pottery Category
  {
    id: 19,
    name: "Gilded Ceramic Bowl",
    slug: "gilded-ceramic-bowl",
    category: "Ceramic",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/gilded-ceramic-bowl.png`,
    points: pointValues[3]
  },
  {
    id: 20,
    name: "Blossom Porcelain Cup",
    slug: "blossom-porcelain-cup",
    category: "Ceramic",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/blossom-porcelain-cup.png`,
    points: pointValues[4]
  },
  {
    id: 21,
    name: "Mystic Potion Kettle",
    slug: "mystic-potion-kettle",
    category: "Ceramic",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/mystic-potion-kettle.png`,
    points: pointValues[5]
  },

  // Magical/Enchantment Category
  {
    id: 22,
    name: "Stellanite Enchantment",
    slug: "stellanite-enchantment",
    category: "Enchantment",
    rarity: 3,
    rarityImage: rarityImages[3],
    image: `${itemBasePath}/stellanite-enchantment.png`,
    points: pointValues[3]
  },
  {
    id: 23,
    name: "Emerging Talent",
    slug: "emerging-talent",
    category: "Enchantment",
    rarity: 4,
    rarityImage: rarityImages[4],
    image: `${itemBasePath}/emerging-talent.png`,
    points: pointValues[4]
  },
  {
    id: 24,
    name: "Shining Star",
    slug: "shining-star",
    category: "Enchantment",
    rarity: 5,
    rarityImage: rarityImages[5],
    image: `${itemBasePath}/shining-star.png`,
    points: pointValues[5]
  }
];

// Helper function to get gift by name
export function getGiftByName(name) {
  return gifts.find(gift => gift.name === name);
}

// Helper function to get gift by slug
export function getGiftBySlug(slug) {
  return gifts.find(gift => gift.slug === slug);
}

// Helper function to get gifts by category
export function getGiftsByCategory(category) {
  return gifts.filter(gift => gift.category === category);
}

// Helper function to get gifts by rarity
export function getGiftsByRarity(rarity) {
  return gifts.filter(gift => gift.rarity === rarity);
}

// Get all gift categories
export function getGiftCategories() {
  return [...new Set(gifts.map(gift => gift.category))];
}

// Get rarity image by rarity level
export function getRarityImage(rarity) {
  return rarityImages[rarity] || null;
}

// Get point values by rarity
export function getPointValues(rarity) {
  return pointValues[rarity] || null;
}

// Calculate points for a gift based on preference type
export function calculateGiftPoints(giftName, preferenceType = 'neutral') {
  const gift = getGiftByName(giftName);
  if (!gift) return 0;
  return gift.points[preferenceType] || gift.points.neutral;
}

// Export gift names as a lookup object for quick reference
export const giftNameMap = gifts.reduce((acc, gift) => {
  acc[gift.name] = gift;
  return acc;
}, {});

// Get crafting recipe for a specific rarity
export function getCraftingRecipe(rarity) {
  return craftingRecipes[rarity] || null;
}

// Get crafting material info
export function getCraftingMaterial() {
  return craftingMaterial;
}

// Calculate how many crafting materials needed for a specific gift
export function calculateCraftingCost(targetRarity) {
  if (targetRarity === 3) {
    return { material: craftingMaterial.name, quantity: 10 };
  } else if (targetRarity === 4) {
    // Need 6x 3-star gifts, each 3-star needs 10 eggs
    return {
      direct: { material: "3-star gift", quantity: 6 },
      fromMaterial: { material: craftingMaterial.name, quantity: 60 }
    };
  } else if (targetRarity === 5) {
    // 5-star gifts cannot be crafted
    return null;
  }
  return null;
}

// Export rarity images and point values for external use
export { rarityImages, pointValues };

export default gifts;
