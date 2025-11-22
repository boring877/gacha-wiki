/**
 * The Ghost Ship Haunts the Deep Event Data
 * Stella Sora Summer Adventure Event
 */

// Import clock configuration for dynamic event dates
import { stellaSoraConfig } from '../../clock/stella-sora.js';

// Image imports for The Ghost Ship Haunts the Deep event
import squidRiceCracker from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Squid_rice_cracker.png';
import summerSanctuary from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Summer_sanctuary.png';
import summerSanctuaryMelody from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Summer_sanctuary_melodypng.png';
import daringAdventure from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Daring_Adventure!_The_Ghost_Ship_Haunts_the_Deep.png';
import radiantFeatherCrown from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_radiant_feather_crown.png';
import starEmblemPolisher from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Star_emblem_polisher.png';
import ceruleanTicket from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_cerulean_ticket.png';
import sproutTicket from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Sprout_Ticket.jpg';
import exquisiteBlower from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_exquisite_blower.png';
import chillingWindSpinner from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_chilling_wind_spinner.png';
import moonlitCompanion from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_moonlit_companion.png';
import countsGift from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_count_s_cellaring.png';
import demonBeeGameCartridge from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_demon_bee_game_cartridge.png';
import duloosEssence from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_duloos_essence.png';
import monolithStairsPass from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_monolith_stairs_pass.png';
import trekkersHandwrittenEncyclopedia from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_trekkers_handwritten_encyclopedia.png';
import starlitColoredGlass from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_starlit_colored_glass.png';
import countsCellaring from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_count_s_cellaring.png';
import barrageGameCartridge from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_barrage_game_cartridge.png';
import duloosSoulRemnant from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_duloos_soul_remnant.png';
import dorra from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Dorra.jpg';
import bottledVigorSoda from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Bottled_vigor_soda.png';
import cannedVigorSoda from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Canned_vigor_soda.png';
import noviceDiscPromotionBox from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Novice_disc_promotion_box.png';
import noviceTrekkerPromotionBox from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Novice_trekker_promotion_box.png';
import premiumDiscPromotionBox from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Premium_disc_promotion_box.png';
import premiumTrekkerPromotionBox from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_Premium_trekker_promotion_box.png';
import premiumCartridgeBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Premium_Cartridge_Box.jpg';
import beginnerCartridgeBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Beginner_Cartridge_Box.jpg';
import bg1event from '../../../assets/images/games/stella-sora/EventShop/The_ghost_ship_haunts_the_deep/3_bg1event.jpg';

/**
 * Get current event period from clock configuration
 * @returns {Object} Current event period information
 */
function getCurrentEventPeriod() {
  const eventStart = new Date(stellaSoraConfig.event.start);
  const eventEnd = new Date(stellaSoraConfig.event.durationEnd);

  return {
    startDate: eventStart.toISOString().split('T')[0],
    endDate: eventEnd.toISOString().split('T')[0],
    shopEndDate: '2025-11-16', // Shop closes when event ends
    startDisplay: eventStart.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    endDisplay: eventEnd.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
  };
}

// Get current event period dates
const eventPeriod = getCurrentEventPeriod();

export const theGhostShipHauntsTheDeepEvent = {
  id: 'the-ghost-ship-haunts-the-deep',
  title: 'The Ghost Ship Haunts the Deep',
  subtitle: 'Summer Adventure Event',
  date: eventPeriod.startDate,
  startDate: eventPeriod.startDate,
  endDate: eventPeriod.endDate,
  shopEndDate: '2025-11-16', // Shop closes when event ends
  summary:
    'Join the summer adventure! Exchange Squid Rice Crackers for exclusive rewards including Summer Sanctuary, Radiant Feather Crown, and special tickets.',
  description:
    'The Ghost Ship Haunts the Deep is a summer adventure event featuring exclusive Trekkers, powerful items, and limited-time rewards. Complete quests, clear stages, and collect Squid Rice Crackers to obtain premium content including the Summer Sanctuary Trekker and valuable promotion items.',
  url: '/guides/stella-sora/shop-events/the-ghost-ship-haunts-the-deep/',
  image: bg1event,
  featuredImage: bg1event,
  currency: {
    name: 'Squid Rice Cracker',
    icon: squidRiceCracker,
    sources: [
      'Stage completions: 400 per replay',
      'Quest completions: 1000-1200 per quest',
      'First-time stage clears: bonus amounts',
      'Special event bonuses',
    ],
    capacity: 'No known limit',
  },
  shopItems: [
    {
      id: 'summer-sanctuary',
      name: 'Summer Sanctuary',
      type: 'trekker',
      rarity: 'SS',
      price: 8000,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description:
        'Exclusive summer event Trekker with special abilities and unique summer-themed appearance.',
      image: summerSanctuary,
      featured: true,
      category: 'trekker',
    },
    {
      id: 'summer-sanctuary-melody',
      name: 'Summer Sanctuary Melody',
      type: 'equipment',
      rarity: 'S',
      price: 8000,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 5, maxPurchase: 1 },
      quantity: 1,
      description: 'Powerful summer-themed equipment with special melody-based abilities.',
      image: summerSanctuaryMelody,
      featured: true,
      category: 'equipment',
    },
    {
      id: 'daring-adventure-ghost-ship',
      name: 'Daring Adventure! The Ghost Ship Haunts the Deep',
      type: 'furniture',
      rarity: 'SS',
      price: 5000,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description:
        'Exclusive furniture item featuring the Ghost Ship from the summer adventure event.',
      image: daringAdventure,
      featured: true,
      category: 'furniture',
    },
    {
      id: 'radiant-feather-crown',
      name: 'Radiant Feather Crown',
      type: 'cosmetic',
      rarity: 'S',
      price: 1600,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 12, maxPurchase: 1 },
      quantity: 1,
      description:
        'Beautiful crown adorned with radiant feathers, perfect for summer celebrations.',
      image: radiantFeatherCrown,
      featured: true,
      category: 'cosmetic',
    },
    {
      id: 'star-emblem-polisher',
      name: 'Star Emblem Polisher',
      type: 'material',
      rarity: 'A',
      price: 1600,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 5, maxPurchase: 1 },
      quantity: 2,
      description: 'Polishing material for star emblems, enhances equipment performance.',
      image: starEmblemPolisher,
      featured: false,
      category: 'materials',
    },
    {
      id: 'cerulean-ticket',
      name: 'Cerulean Ticket',
      type: 'ticket',
      rarity: 'A',
      price: 500,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 5, maxPurchase: 1 },
      quantity: 1,
      description: 'Special ticket for accessing exclusive summer event content and rewards.',
      image: ceruleanTicket,
      featured: false,
      category: 'tickets',
    },
    {
      id: 'sprout-ticket',
      name: 'Sprout Ticket',
      type: 'ticket',
      rarity: 'A',
      price: 500,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 5, maxPurchase: 1 },
      quantity: 1,
      description: 'Ticket for obtaining special Sprout-themed rewards and bonuses.',
      image: sproutTicket,
      featured: false,
      category: 'tickets',
    },
    {
      id: 'exquisite-blower',
      name: 'Exquisite Blower',
      type: 'equipment',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 2, maxPurchase: 1 },
      quantity: 5,
      description: 'Exquisite blowing equipment with enhanced performance and summer effects.',
      image: exquisiteBlower,
      featured: false,
      category: 'equipment',
    },
    {
      id: 'chilling-wind-spinner',
      name: 'Chilling Wind Spinner',
      type: 'equipment',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 2, maxPurchase: 1 },
      quantity: 5,
      description: 'Wind manipulation equipment with chilling summer breezes.',
      image: chillingWindSpinner,
      featured: false,
      category: 'equipment',
    },
    {
      id: 'moonlit-companion',
      name: 'Moonlit Companion',
      type: 'equipment',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 2, maxPurchase: 1 },
      quantity: 5,
      description: 'Companion equipment enhanced by moonlight for summer adventures.',
      image: moonlitCompanion,
      featured: false,
      category: 'equipment',
    },
    {
      id: 'counts-gift',
      name: "Count's Gift",
      type: 'material',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 6, maxPurchase: 1 },
      quantity: 5,
      description: 'Special gift from the Count containing rare materials and items.',
      image: countsGift,
      featured: false,
      category: 'materials',
    },
    {
      id: 'demon-bee-game-cartridge',
      name: 'Demon Bee Game Cartridge',
      type: 'consumable',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 10, maxPurchase: 1 },
      quantity: 5,
      description: 'Game cartridge featuring Demon Bee mini-games with special rewards.',
      image: demonBeeGameCartridge,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'duloos-essence',
      name: 'Duloos Essence',
      type: 'material',
      rarity: 'A',
      price: 250,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 10, maxPurchase: 1 },
      quantity: 5,
      description: 'Essence extracted from Duloos, containing powerful enhancement properties.',
      image: duloosEssence,
      featured: false,
      category: 'materials',
    },
    {
      id: 'monolith-stairs-pass',
      name: 'Monolith Stairs Pass',
      type: 'ticket',
      rarity: 'A',
      price: 200,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 10, maxPurchase: 1 },
      quantity: 2,
      description: 'Pass for accessing special Monolith Stairs content and rewards.',
      image: monolithStairsPass,
      featured: false,
      category: 'tickets',
    },
    {
      id: 'trekkers-handwritten-encyclopedia',
      name: "Trekker's Handwritten Encyclopedia",
      type: 'material',
      rarity: 'B',
      price: 150,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 30, maxPurchase: 1 },
      quantity: 5,
      description: 'Handwritten encyclopedia containing valuable Trekker knowledge and strategies.',
      image: trekkersHandwrittenEncyclopedia,
      featured: false,
      category: 'materials',
    },
    {
      id: 'starlit-colored-glass',
      name: 'Starlit Colored Glass',
      type: 'material',
      rarity: 'B',
      price: 150,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 40, maxPurchase: 1 },
      quantity: 5,
      description: 'Beautiful colored glass infused with starlight for crafting purposes.',
      image: starlitColoredGlass,
      featured: false,
      category: 'materials',
    },
    {
      id: 'counts-cellaring',
      name: "Count's Cellaring",
      type: 'material',
      rarity: 'B',
      price: 80,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 40, maxPurchase: 1 },
      quantity: 5,
      description: "Cellaring materials from the Count's collection for enhancement purposes.",
      image: countsCellaring,
      featured: false,
      category: 'materials',
    },
    {
      id: 'barrage-game-cartridge',
      name: 'Barrage Game Cartridge',
      type: 'consumable',
      rarity: 'B',
      price: 80,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 90, maxPurchase: 1 },
      quantity: 5,
      description: 'Game cartridge featuring Barrage mini-games with exciting challenges.',
      image: barrageGameCartridge,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'duloos-soul-remnant',
      name: 'Duloos Soul Remnant',
      type: 'material',
      rarity: 'B',
      price: 80,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 90, maxPurchase: 1 },
      quantity: 5,
      description: 'Soul remnant from Duloos containing spiritual enhancement properties.',
      image: duloosSoulRemnant,
      featured: false,
      category: 'materials',
    },
    {
      id: 'dorra',
      name: 'Dorra',
      type: 'consumable',
      rarity: 'C',
      price: 10,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'unlimited', quantity: 1000, maxPurchase: 1 },
      quantity: 3000,
      description: 'Basic currency material commonly used for various purposes and exchanges.',
      image: dorra,
      featured: false,
      category: 'currency',
    },
    {
      id: 'bottled-vigor-soda',
      name: 'Bottled Vigor Soda',
      type: 'consumable',
      rarity: 'A',
      price: 40,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'unlimited', quantity: 999, maxPurchase: 1 },
      quantity: 3,
      description: 'Refreshing soda that restores vigor and energy for adventures.',
      image: bottledVigorSoda,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'canned-vigor-soda',
      name: 'Canned Vigor Soda',
      type: 'consumable',
      rarity: 'A',
      price: 80,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'unlimited', quantity: 999, maxPurchase: 1 },
      quantity: 2,
      description: 'Premium canned vigor soda with enhanced restoration effects.',
      image: cannedVigorSoda,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'novice-disc-promotion-box',
      name: 'Novice Disc Promotion Box',
      type: 'material',
      rarity: 'B',
      price: 200,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 60, maxPurchase: 1 },
      quantity: 5,
      description: 'Box containing materials for promoting novice-level discs.',
      image: noviceDiscPromotionBox,
      featured: false,
      category: 'materials',
    },
    {
      id: 'novice-trekker-promotion-box',
      name: 'Novice Trekker Promotion Box',
      type: 'material',
      rarity: 'B',
      price: 150,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 90, maxPurchase: 1 },
      quantity: 5,
      description: 'Box containing materials for promoting novice-level trekkers.',
      image: noviceTrekkerPromotionBox,
      featured: false,
      category: 'materials',
    },
    {
      id: 'premium-disc-promotion-box',
      name: 'Premium Disc Promotion Box',
      type: 'material',
      rarity: 'A',
      price: 600,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 30, maxPurchase: 1 },
      quantity: 3,
      description: 'Premium box containing high-quality materials for disc promotion.',
      image: premiumDiscPromotionBox,
      featured: false,
      category: 'materials',
    },
    {
      id: 'premium-trekker-promotion-box',
      name: 'Premium Trekker Promotion Box',
      type: 'material',
      rarity: 'A',
      price: 800,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 20, maxPurchase: 1 },
      quantity: 3,
      description: 'Premium box containing high-quality materials for trekker promotion.',
      image: premiumTrekkerPromotionBox,
      featured: false,
      category: 'materials',
    },
    {
      id: 'premium-cartridge-box',
      name: 'Premium Cartridge Box',
      type: 'consumable',
      rarity: 'S',
      price: 1200,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 10, maxPurchase: 1 },
      quantity: 3,
      description: 'Premium box containing high-quality game cartridges with special content.',
      image: premiumCartridgeBox,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'beginner-cartridge-box',
      name: 'Beginner Cartridge Box',
      type: 'consumable',
      rarity: 'C',
      price: 300,
      currency: {
        name: 'Squid Rice Cracker',
        icon: squidRiceCracker,
      },
      stock: { type: 'limited', quantity: 50, maxPurchase: 1 },
      quantity: 3,
      description: 'Box containing game cartridges perfect for beginners.',
      image: beginnerCartridgeBox,
      featured: false,
      category: 'consumables',
    },
  ],

  // Quest System
  quests: {
    common: {
      title: 'Common Quests',
      description: 'Complete basic event tasks to earn rewards',
      completionRewards: {
        items: [
          '1 x Sprout Ticket',
          '4000 Squid Rice Cracker',
          '10 x Exquisite Blower',
          '90 x Novice Trekker promotion box',
          '60 x Novice Discs Promotion Box',
          '4 x Canned Bigor Soda',
        ],
      },
      quests: [
        {
          id: 'clear-hexhorn-whale-normal',
          name: 'Clear Hexhorn Whale Showdown (Normal)',
          shovelReward: 20,
          squidRiceCrackerReward: 1000,
          description: 'Defeat the Hexhorn Whale in Normal difficulty',
        },
        {
          id: 'clear-summer-brawl-i',
          name: 'Clear Summer Brawl I',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Complete Summer Brawl I stage',
        },
        {
          id: 'clear-summer-brawl-iii',
          name: 'Clear Summer Brawl III',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Complete Summer Brawl III stage',
        },
        {
          id: 'clear-summer-brawl-v',
          name: 'Clear Summer Brawl V',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Complete Summer Brawl V stage',
        },
        {
          id: 'clear-treasure-raider-i',
          name: 'Clear Treasure Raider I',
          shovelReward: 20,
          squidRiceCrackerReward: 1000,
          description: 'Complete Treasure Raider I stage',
        },
        {
          id: 'clear-treasure-raider-ii',
          name: 'Clear Treasure Raider II',
          shovelReward: 20,
          squidRiceCrackerReward: 1000,
          description: 'Complete Treasure Raider II stage',
        },
        {
          id: 'clear-treasure-raider-iii',
          name: 'Clear Treasure Raider III',
          shovelReward: 20,
          squidRiceCrackerReward: 1000,
          description: 'Complete Treasure Raider III stage',
        },
        {
          id: 'read-flickering-glow',
          name: 'Read event story: Flickering Glow',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Read the Flickering Glow story chapter',
        },
        {
          id: 'read-mysteries-scents',
          name: 'Read event story: Mysteries and Scents',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Read the Mysteries and Scents story chapter',
        },
        {
          id: 'read-seeing-deceiving',
          name: 'Read event story: Seeing is Deceiving',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Read the Seeing is Deceiving story chapter',
        },
        {
          id: 'read-land-echoes',
          name: 'Read event story: The Land of Echoes',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Read the Land of Echoes story chapter',
        },
        {
          id: 'read-secret-ocean',
          name: 'Read event story: The Secret of the Ocean',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Read the Secret of the Ocean story chapter',
        },
      ],
    },

    challenge: {
      title: 'Challenge Quests',
      description: 'Complete advanced challenges for premium rewards',
      completionRewards: {
        items: [
          '1 x Sprout Ticket',
          '4000 Squid Rice Cracker',
          '10 Chilling Wind Spinner',
          '50 x Premium Trekker promotion box',
          '150 x Beginner Cartridge Box',
          '4 x Canned Bigor Soda',
        ],
      },
      quests: [
        {
          id: 'clear-stages-30',
          name: 'Clear event Battle Stages 30 times',
          shovelReward: 30,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 30 times',
        },
        {
          id: 'clear-stages-50',
          name: 'Clear event Battle Stages 50 times',
          shovelReward: 30,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 50 times',
        },
        {
          id: 'clear-stages-80',
          name: 'Clear event Battle Stages 80 times',
          shovelReward: 30,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 80 times',
        },
        {
          id: 'clear-stages-100',
          name: 'Clear event Battle Stages 100 times',
          shovelReward: 30,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 100 times',
        },
        {
          id: '3star-hexhorn-normal',
          name: 'Clear Hexhorn Whale Showdown (Normal) with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Hexhorn Whale Normal',
        },
        {
          id: '3star-summer-brawl-i',
          name: 'Clear Summer Brawl I with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl I',
        },
        {
          id: '3star-summer-brawl-ii',
          name: 'Clear Summer Brawl II with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl II',
        },
        {
          id: '3star-summer-brawl-iii',
          name: 'Clear Summer Brawl III with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl III',
        },
        {
          id: '3star-summer-brawl-iv',
          name: 'Clear Summer Brawl IV with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl IV',
        },
        {
          id: '3star-summer-brawl-v',
          name: 'Clear Summer Brawl V with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl V',
        },
        {
          id: '3star-summer-brawl-vi',
          name: 'Clear Summer Brawl VI with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl VI',
        },
        {
          id: '3star-summer-brawl-vii',
          name: 'Clear Summer Brawl VII with 3★',
          shovelReward: 10,
          squidRiceCrackerReward: 1000,
          description: 'Achieve 3-star rating in Summer Brawl VII',
        },
      ],
    },

    adventure: {
      title: 'Adventure Quests',
      description: 'Complete epic adventure quests for exclusive rewards',
      completionRewards: {
        items: [
          '2 x Sprout Ticket',
          '4000 Squid Rice Cracker',
          '10 x Moonlit Companion',
          '20 x Premium Disc promotion box',
          '100 x Premium Cartridge box',
          '3 x Bottled Vigor soda',
        ],
      },
      quests: [
        {
          id: 'clear-stages-120',
          name: 'Clear event Battle Stages 120 times',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 120 times',
        },
        {
          id: 'clear-stages-160',
          name: 'Clear event Battle Stages 160 times',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Complete any event battle stages 160 times',
        },
        {
          id: 'collect-4-stars-hard',
          name: 'Collect 4 stars in Hard stages',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 4 stars total from Hard difficulty stages',
        },
        {
          id: 'collect-6-stars-hard',
          name: 'Collect 6 stars in Hard stages',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 6 stars total from Hard difficulty stages',
        },
        {
          id: 'collect-8-stars-hard',
          name: 'Collect 8 stars in Hard stages',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 8 stars total from Hard difficulty stages',
        },
        {
          id: 'collect-10-stars-hard',
          name: 'Collect 10 stars in Hard stages',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 10 stars total from Hard difficulty stages',
        },
        {
          id: 'collect-12-stars-hard',
          name: 'Collect 12 stars in Hard stages',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 12 stars total from Hard difficulty stages',
        },
        {
          id: 'obtain-35000-crackers',
          name: 'Obtain Squid Rice Cracker x35000 during the event',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Collect 35,000 Squid Rice Crackers total',
        },
        {
          id: 'obtain-50000-crackers',
          name: 'Obtain Squid Rice Cracker x50000 during the event',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Collect 50,000 Squid Rice Crackers total',
        },
        {
          id: 'use-80000-crackers',
          name: 'Use Squid Rice Cracker x80000 during the event',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Spend 80,000 Squid Rice Crackers total',
        },
        {
          id: 'use-100000-crackers',
          name: 'Use Squid Rice Cracker x100000 during the event',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Spend 100,000 Squid Rice Crackers total',
        },
        {
          id: 'use-120000-crackers',
          name: 'Use Squid Rice Cracker x120000 during the event',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Spend 120,000 Squid Rice Crackers total',
        },
      ],
    },

    special: {
      title: 'Special Quests',
      description: 'Complete special Lucky Treasure Shovel challenges',
      completionRewards: {
        items: [
          '1 x Sprout Ticket',
          '4000 Squid Rice Cracker',
          '80 x Premium Trekker promotion box',
          '150 x Premium cartridge box',
          '60 x Novice disc promotion box',
          '3 x Bottled Vigor soda',
        ],
      },
      quests: [
        {
          id: 'gain-200-points-shovel',
          name: 'Gain 200 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 200 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-500-points-shovel',
          name: 'Gain 500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 500 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-1000-points-shovel',
          name: 'Gain 1000 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 1000 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-1500-points-shovel',
          name: 'Gain 1500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 1500 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-2000-points-shovel',
          name: 'Gain 2000 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 2000 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-2500-points-shovel',
          name: 'Gain 2500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 2500 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-3000-points-shovel',
          name: 'Gain 3000 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 3000 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-3500-points-shovel',
          name: 'Gain 3500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 3500 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-4000-points-shovel',
          name: 'Gain 4000 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 4000 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-4500-points-shovel',
          name: 'Gain 4500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 4500 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-5000-points-shovel',
          name: 'Gain 5000 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 5000 points total from Lucky Treasure Shovel',
        },
        {
          id: 'gain-5500-points-shovel',
          name: 'Gain 5500 points in Lucky Treasure Shovel in total',
          crystalReward: 50,
          squidRiceCrackerReward: 1000,
          description: 'Earn 5500 points total from Lucky Treasure Shovel',
        },
      ],
    },
  },

  // Stage System
  stages: {
    normal: {
      title: 'Normal Stages',
      description: 'Complete normal difficulty stages for rewards',
      replayReward: 400,
      stages: [
        {
          id: 'summer-brawl-i',
          name: 'Summer Brawl I',
          firstClearReward: 300,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-ii',
          name: 'Summer Brawl II',
          firstClearReward: 350,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-iii',
          name: 'Summer Brawl III',
          firstClearReward: 400,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-iv',
          name: 'Summer Brawl IV',
          firstClearReward: 450,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-v',
          name: 'Summer Brawl V',
          firstClearReward: 500,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-vi',
          name: 'Summer Brawl VI',
          firstClearReward: 550,
          energyCost: 'Normal',
        },
        {
          id: 'summer-brawl-vii',
          name: 'Summer Brawl VII',
          firstClearReward: 600,
          energyCost: 'Normal',
        },
        {
          id: 'hexhorn-whale-normal',
          name: 'Hexhorn Whale (Normal)',
          firstClearReward: 650,
          energyCost: 'Normal',
        },
      ],
      totalFirstClearRewards: 3800,
    },
    hard: {
      title: 'Hard Stages',
      description: 'Challenge yourself with hard difficulty stages for premium rewards',
      replayReward: 400,
      stages: [
        {
          id: 'treasure-raider-i',
          name: 'Treasure Raider I',
          firstClearReward: 600,
          energyCost: 'Hard',
        },
        {
          id: 'treasure-raider-ii',
          name: 'Treasure Raider II',
          firstClearReward: 800,
          energyCost: 'Hard',
        },
        {
          id: 'treasure-raider-iii',
          name: 'Treasure Raider III',
          firstClearReward: 1000,
          energyCost: 'Hard',
        },
        {
          id: 'hexhorn-whale-hard',
          name: 'Hexhorn Whale (Hard)',
          firstClearReward: 1200,
          energyCost: 'Hard',
        },
      ],
      totalFirstClearRewards: 3600,
    },
  },

  rewards: [
    'Summer Sanctuary Trekker (Exclusive)',
    'Squid Rice Cracker (Event Currency)',
    'Summer Sanctuary Melody (Equipment)',
    'Radiant Feather Crown (Cosmetic)',
    'Cerulean & Sprout Tickets',
    'Premium Promotion Boxes',
    'Event-themed Equipment & Materials',
  ],
  highlights: [
    'Exclusive Summer Sanctuary Trekker',
    '20+ Shop Items with Stock Management',
    '55+ Quests Across 4 Categories',
    'Stage Progression with 11+ Stages',
    'Premium Promotion Items Available',
    'Event Currency: Squid Rice Crackers',
  ],
};

export default theGhostShipHauntsTheDeepEvent;
