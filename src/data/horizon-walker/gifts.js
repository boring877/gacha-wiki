/**
 * ═══════════════════════════════════════════════════════════════════════
 *                      HORIZON WALKER GIFTS DATA
 *                     Data structure for gifts and rewards
 * ═══════════════════════════════════════════════════════════════════════
 */

// Gift rarity configuration
export const GIFT_RARITIES = {
  EX: { name: 'EX', priority: 1 },
  SS: { name: 'SS', priority: 2 },
  S: { name: 'S', priority: 3 },
  A: { name: 'A', priority: 4 },
  B: { name: 'B', priority: 5 },
};

// Gift Box Data
export const GIFT_BOXES = [
  {
    id: 'brilliant-gift-box',
    name: 'Brilliant Gift Box',
    image: 'Brilliant_Gift_Box.jpg',
    description: 'A luxurious gift box containing premium rewards',
    gifts: [
      {
        id: 'human-hair',
        name: 'Human Hair',
        rarity: 'SS',
        image: 'Human_Hair.jpg',
        points: {
          min: 50,
          max: 70,
        },
      },
      {
        id: 'grey-goose-vodka',
        name: 'Grey Goose Vodka',
        rarity: 'SS',
        image: 'Grey_Goose_Vodka.jpg',
        points: {
          min: 50,
          max: 70,
        },
      },
      {
        id: 'finest-black-tea',
        name: 'Finest Black Tea',
        rarity: 'S',
        image: 'Finest_Black_Tea.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'antique-music-box',
        name: 'Antique Music Box',
        rarity: 'S',
        image: 'Antique_Music_Box.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'terrarium',
        name: 'Terrarium',
        rarity: 'S',
        image: 'Terrarium.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'worn-banner-magnal-duchy',
        name: 'Worn Banner of the Magnal Duchy',
        rarity: 'S',
        image: 'Worn_Banner_of_the_Magnal_Duchy.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'strategy-simulation-board-game',
        name: 'Strategy Simulation Board Game',
        rarity: 'S',
        image: 'Strategy_Simulation_Board.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'luxury-bag',
        name: 'Luxury Bag',
        rarity: 'SS',
        image: 'Luxury_Bag.jpg',
        points: {
          min: 50,
          max: 70,
        },
      },
      {
        id: 'queens-tiara',
        name: "Queen's Tiara",
        rarity: 'EX',
        image: 'Queen_tiara.jpg',
        points: {
          min: 100,
          max: 120,
        },
      },
    ],
  },
  {
    id: 'luxurious-gift-box',
    name: 'Luxurious Gift Box',
    image: 'Luxurious_Gift_Box.jpg',
    description: 'A luxurious collection of premium gifts and rare items',
    gifts: [
      {
        id: 'hotel-restaurant-meal-voucher',
        name: 'Hotel Restaurant Meal Voucher',
        rarity: 'A',
        image: 'Hotel_Restaurant_Meal_Voucher.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: '300-kg-dumbbell',
        name: '300 KG Dumbbell',
        rarity: 'A',
        image: '300_KG_Dumbbell_A.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'scripture-human-split-twigs',
        name: 'Scripture of the Human of the Split Twigs',
        rarity: 'A',
        image: 'Scripture_of_the_Human_of_the_split_Twigs.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'magical-fairy-tale-book',
        name: 'Magical Fairy Tale Book',
        rarity: 'A',
        image: 'Magical_Fairy_Tale_Book.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'snow-globe',
        name: 'Snow Globe',
        rarity: 'A',
        image: 'Snow_Globe.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'anti-aging-skincare-product',
        name: 'Anti-Aging Skincare Product',
        rarity: 'A',
        image: 'Anti_aging_Skincare_product.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'lamora-military-ration',
        name: 'Lamora Military Ration',
        rarity: 'A',
        image: 'Lamora_Millitary_Ration.jpg',
        points: {
          min: 20,
          max: 40,
        },
      },
      {
        id: 'finest-black-tea-lux',
        name: 'Finest Black Tea',
        rarity: 'S',
        image: 'Finest_Black_Tea.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'antique-music-box-lux',
        name: 'Antique Music Box',
        rarity: 'S',
        image: 'Antique_Music_Box.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'terrarium-lux',
        name: 'Terrarium',
        rarity: 'S',
        image: 'Terrarium.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'worn-banner-magnal-duchy-lux',
        name: 'Worn Banner of the Magnal Duchy',
        rarity: 'S',
        image: 'Worn_Banner_of_the_Magnal_Duchy.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
      {
        id: 'strategy-simulation-board-game-lux',
        name: 'Strategy Simulation Board Game',
        rarity: 'S',
        image: 'Strategy_Simulation_Board.jpg',
        points: {
          min: 30,
          max: 50,
        },
      },
    ],
  },
  {
    id: 'ordinary-gift-box',
    name: 'Ordinary Gift Box',
    image: 'Ordinary_Gift_Box.jpg',
    description: 'A standard gift box containing common everyday items',
    gifts: [
      {
        id: 'americano-voucher',
        name: 'Americano Voucher',
        rarity: 'B',
        image: 'Americano_Voucher.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'fire-octopus-noodles',
        name: 'Fire Octopus Noodles',
        rarity: 'B',
        image: 'Fire_Octopus_Noodles.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'mangrove-leaf',
        name: 'Mangrove Leaf',
        rarity: 'B',
        image: 'Mangrove_Leaf.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'setflix-membership-voucher',
        name: 'Setflix Membership Voucher',
        rarity: 'B',
        image: 'Setflix_Membership_Voucher.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'forbidden-romance',
        name: 'Forbidden Romance',
        rarity: 'B',
        image: 'Forbidden_Romance.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'gun-maintenance-kit',
        name: 'Gun Maintenance Kit',
        rarity: 'B',
        image: 'Gun_Maintenance_Kit.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'frog-plush',
        name: 'Frog Plush',
        rarity: 'B',
        image: 'Frog_Plush.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'gloomy-chromi-keyring',
        name: 'Gloomy Chromi Keyring',
        rarity: 'B',
        image: 'Gloomy_Chromi_Keyring.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'catnip-pouch',
        name: 'Catnip Pouch',
        rarity: 'B',
        image: 'Catnip_Pouch.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'sports-sneakers',
        name: 'Sports Sneakers',
        rarity: 'B',
        image: 'Sports_Sneakers.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'hamburg-steak',
        name: 'Hamburg Steak',
        rarity: 'B',
        image: 'Hamburg_Steak.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'a-single-rose',
        name: 'A Single Rose',
        rarity: 'B',
        image: 'A_Single_Rose.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'charcoal',
        name: 'Charcoal',
        rarity: 'B',
        image: 'Charcoal.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'dartagnan-romance',
        name: "D'Artagnan Romance",
        rarity: 'B',
        image: 'DArtagnan_Romance.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'soju',
        name: 'Soju',
        rarity: 'B',
        image: 'Soju.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'glazed-fruit-stick',
        name: 'Glazed Fruit Stick',
        rarity: 'B',
        image: 'Glazed_Fruit_Stick.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'orca-documentary',
        name: 'Orca Documentary',
        rarity: 'B',
        image: 'Orca_Documentary.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'kalma-election-campaign-brochure',
        name: 'Kalma Election Campaign Brochure',
        rarity: 'B',
        image: 'Kalma_Election_Campaign_Brochure.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'training-equipment-set',
        name: 'Training Equipment Set',
        rarity: 'B',
        image: 'Training_Equipment_Set.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
      {
        id: 'strawberry-chubby-macaron',
        name: 'Strawberry Chubby Macaron',
        rarity: 'B',
        image: 'Strawberry_Chubby_Macaron.jpg',
        points: {
          min: 10,
          max: 30,
        },
      },
    ],
  },
];

// Unique/Skin Gifts
export const UNIQUE_GIFTS = [
  {
    id: '1st-anniversary-gift',
    name: '1st Anniversary Gift',
    rarity: 'EX',
    type: 'Anniversary',
    image: '1st_Anniversary_gift.jpg',
    points: {
      min: 100,
      max: 120,
    },
  },
];

// Helper functions
export const getGiftsByRarity = rarity => {
  return GIFT_BOXES.flatMap(box => box.gifts.filter(gift => gift.rarity === rarity));
};

export const getGiftBoxById = boxId => {
  return GIFT_BOXES.find(box => box.id === boxId);
};

export const getAllGifts = () => {
  return GIFT_BOXES.flatMap(box => box.gifts);
};

export const sortGiftsByRarity = gifts => {
  return gifts.sort((a, b) => GIFT_RARITIES[a.rarity].priority - GIFT_RARITIES[b.rarity].priority);
};

// SEO and metadata
export const giftsPageData = {
  title: 'Horizon Walker Gifts Guide - All Rewards & Items Database 2025 | GachaWiki',
  description:
    'Complete guide to Horizon Walker gifts, rewards, and items. Find all collectibles, event rewards, daily login bonuses, and special items in Horizon Walker with detailed information and stats.',
  sections: [
    {
      id: 'gift-boxes',
      title: 'Gift Boxes',
      description: 'Explore different gift boxes and their contents',
    },
  ],
};
