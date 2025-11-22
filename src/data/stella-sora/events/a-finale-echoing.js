/**
 * A Finale Echoing Event Data
 * Stella Sora Shop Event
 */

// Import clock configuration for dynamic event dates
import { stellaSoraConfig } from '../../clock/stella-sora.js';

// Image imports for A Finale Echoing event
import whispersOfDecay from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Whispers_of_Decay.jpg';
import newStarPrelude from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_New_Star_Prelude.jpg';
import prayerBeneathLight from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Prayer_Beneath_Light.jpg';
import summerAfternoonRain from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Summer_Afternoon_Rain.jpg';
import thoseWithAmbition from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Those_with_Ambition.jpg';
import voyageBlueprint from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Voyage_Blueprint.jpg';
import sweetTimes from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Sweet_Times.jpg';
import chessPieceOfSkill from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Chess_Piece_of_Skill.jpg';
import provingGroundsGiftBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Proving_Grounds_gift_box.jpg';
import premiumCartridgeBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Premium_Cartridge_Box.jpg';
import deluxeCartridgeBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Deluxe_Cartridge_box.jpg';
import beginnerCartridgeBox from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Beginner_Cartridge_Box.jpg';
import sproutTicket from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Sprout_Ticket.jpg';
import dorra from '../../../assets/images/games/stella-sora/EventShop/A_Finale_Echoing/1_Dorra.jpg';

/**
 * Get current event period from clock configuration
 * @returns {Object} Current event period information
 */
function getCurrentEventPeriod() {
  const eventStart = new Date(stellaSoraConfig.event.start);
  const eventEnd = new Date(stellaSoraConfig.event.durationEnd);
  const shopEnd = new Date(stellaSoraConfig.event.shopEnd);

  return {
    startDate: eventStart.toISOString().split('T')[0],
    endDate: eventEnd.toISOString().split('T')[0],
    shopEndDate: shopEnd.toISOString().split('T')[0],
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
    shopEndDisplay: shopEnd.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
  };
}

// Get current event period dates
const eventPeriod = getCurrentEventPeriod();

export const aFinaleEchoingEvent = {
  id: 'a-finale-echoing',
  title: 'A Finale Echoing',
  subtitle: 'Stella Sora Event',
  date: eventPeriod.startDate,
  startDate: eventPeriod.startDate,
  endDate: eventPeriod.endDate,
  shopEndDate: eventPeriod.shopEndDate,
  summary:
    'Experience the grand finale! Exchange Whispers of Decay for exclusive rewards including limited Discs, skill materials, and special tickets.',
  description:
    'A Finale Echoing is a special Stella Sora event featuring exclusive rewards and powerful items. Complete quests, clear stages, and collect Whispers of Decay to obtain premium content including limited Discs only available in this event, valuable skill materials, and rare tickets.',
  url: '/guides/stella-sora/shop-events/a-finale-echoing/',
  image: dorra,
  featuredImage: dorra,
  currency: {
    name: 'Whispers of Decay',
    icon: whispersOfDecay,
    sources: [
      'Stage first clears: Normal (200), Hard (300), Extra Hard (400), Ultimate (500)',
      'Score milestone quests: Reach score targets for 400-1000 Whispers each',
      'Ultimate stage repeats: 14 repeats available at 500 Whispers each',
      'Quest completion rewards: Sprout Ticket and Chess Piece of Skill',
    ],
    capacity: 'No known limit',
  },
  shopItems: [
    {
      id: 'new-star-prelude',
      name: 'New Star Prelude',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description:
        'Exclusive Disc only available in this event. Powerful new star-themed abilities.',
      image: newStarPrelude,
      featured: true,
      category: 'discs',
    },
    {
      id: 'prayer-beneath-light',
      name: 'Prayer Beneath Light',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description: 'Exclusive Disc with light-based prayer abilities. Limited event availability.',
      image: prayerBeneathLight,
      featured: true,
      category: 'discs',
    },
    {
      id: 'summer-afternoon-rain',
      name: 'Summer Afternoon Rain',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description: 'Exclusive Disc with summer rain abilities. Only available in this event.',
      image: summerAfternoonRain,
      featured: true,
      category: 'discs',
    },
    {
      id: 'those-with-ambition',
      name: 'Those with Ambition',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description: 'Exclusive Disc that grants ambition-based powers. Event exclusive.',
      image: thoseWithAmbition,
      featured: true,
      category: 'discs',
    },
    {
      id: 'voyage-blueprint',
      name: 'Voyage Blueprint',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description: 'Exclusive Disc with voyage-themed abilities. Limited to this event.',
      image: voyageBlueprint,
      featured: true,
      category: 'discs',
    },
    {
      id: 'sweet-times',
      name: 'Sweet Times',
      type: 'disc',
      rarity: 'SS',
      price: 7000,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 1, maxPurchase: 1 },
      quantity: 1,
      description: 'Exclusive Disc with sweet-themed abilities. Only found in this shop.',
      image: sweetTimes,
      featured: true,
      category: 'discs',
    },
    {
      id: 'chess-piece-skill',
      name: 'Chess Piece of Skill',
      type: 'material',
      rarity: 'A',
      price: 15,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 400, maxPurchase: 1 },
      quantity: 1,
      description: 'Valuable skill enhancement material in the form of chess pieces.',
      image: chessPieceOfSkill,
      featured: false,
      category: 'materials',
    },
    {
      id: 'proving-grounds-gift-box',
      name: 'Proving Grounds Gift Box',
      type: 'consumable',
      rarity: 'A',
      price: 200,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 6, maxPurchase: 1 },
      quantity: 1,
      description: 'Gift box containing items from the Proving Grounds with valuable rewards.',
      image: provingGroundsGiftBox,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'premium-cartridge-box',
      name: 'Premium Cartridge Box',
      type: 'consumable',
      rarity: 'A',
      price: 30,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 60, maxPurchase: 1 },
      quantity: 1,
      description: 'Premium box containing high-quality game cartridges with special content.',
      image: premiumCartridgeBox,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'deluxe-cartridge-box',
      name: 'Deluxe Cartridge Box',
      type: 'consumable',
      rarity: 'A',
      price: 90,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 20, maxPurchase: 1 },
      quantity: 1,
      description: 'Deluxe box containing rare game cartridges with exclusive content.',
      image: deluxeCartridgeBox,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'beginner-cartridge-box',
      name: 'Beginner Cartridge Box',
      type: 'consumable',
      rarity: 'B',
      price: 10,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 30, maxPurchase: 1 },
      quantity: 1,
      description: 'Box containing game cartridges perfect for beginners.',
      image: beginnerCartridgeBox,
      featured: false,
      category: 'consumables',
    },
    {
      id: 'sprout-ticket',
      name: 'Sprout Ticket',
      type: 'ticket',
      rarity: 'A',
      price: 150,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 10, maxPurchase: 1 },
      quantity: 1,
      description: 'Special ticket for obtaining Sprout-themed rewards and bonuses.',
      image: sproutTicket,
      featured: false,
      category: 'tickets',
    },
    {
      id: 'dorra',
      name: 'Dorra',
      type: 'consumable',
      rarity: 'C',
      price: 100,
      currency: {
        name: 'Whispers of Decay',
        icon: whispersOfDecay,
      },
      stock: { type: 'limited', quantity: 60, maxPurchase: 1 },
      quantity: 1,
      description: 'Basic currency material commonly used for various purposes and exchanges.',
      image: dorra,
      featured: false,
      category: 'currency',
    },
  ],

  // Quest System for A Finale Echoing
  quests: {
    common: {
      title: 'Common Quests',
      description: 'Complete basic event tasks to earn rewards',
      completionRewards: {
        items: [
          '1 x Sprout Ticket',
          '4000 Whispers of Decay',
          '10 x Beginner Cartridge Box',
          '5 x Proving Grounds Gift Box',
        ],
      },
      quests: [
        {
          id: 'clear-normal-stage-1',
          name: 'Clear Stage 1 (Normal)',
          shovelReward: 20,
          whispersReward: 1000,
          description: 'Complete Stage 1 in Normal difficulty',
        },
        {
          id: 'clear-normal-stage-3',
          name: 'Clear Stage 3 (Normal)',
          shovelReward: 20,
          whispersReward: 1000,
          description: 'Complete Stage 3 in Normal difficulty',
        },
        {
          id: 'clear-normal-stage-5',
          name: 'Clear Stage 5 (Normal)',
          shovelReward: 20,
          whispersReward: 1000,
          description: 'Complete Stage 5 in Normal difficulty',
        },
        {
          id: 'read-event-story-1',
          name: 'Read event story: Chapter 1',
          shovelReward: 10,
          whispersReward: 1000,
          description: 'Read the first chapter of the event story',
        },
        {
          id: 'read-event-story-2',
          name: 'Read event story: Chapter 2',
          shovelReward: 10,
          whispersReward: 1000,
          description: 'Read the second chapter of the event story',
        },
      ],
    },

    challenge: {
      title: 'Challenge Quests',
      description: 'Complete advanced challenges for premium rewards',
      completionRewards: {
        items: [
          '2 x Sprout Ticket',
          '4000 Whispers of Decay',
          '10 x Premium Cartridge Box',
          '3 x Deluxe Cartridge Box',
        ],
      },
      quests: [
        {
          id: 'clear-stages-20',
          name: 'Clear event Battle Stages 20 times',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Complete any event battle stages 20 times',
        },
        {
          id: 'clear-stages-40',
          name: 'Clear event Battle Stages 40 times',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Complete any event battle stages 40 times',
        },
        {
          id: 'clear-hard-stage-1',
          name: 'Clear Stage 1 (Hard) with 3★',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Achieve 3-star rating in Stage 1 Hard',
        },
        {
          id: 'clear-hard-stage-2',
          name: 'Clear Stage 2 (Hard) with 3★',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Achieve 3-star rating in Stage 2 Hard',
        },
      ],
    },

    adventure: {
      title: 'Adventure Quests',
      description: 'Complete epic adventure quests for exclusive rewards',
      completionRewards: {
        items: [
          '3 x Sprout Ticket',
          '4000 Whispers of Decay',
          '20 x Chess Piece of Skill',
          '5 x Premium Cartridge Box',
        ],
      },
      quests: [
        {
          id: 'clear-stages-60',
          name: 'Clear event Battle Stages 60 times',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Complete any event battle stages 60 times',
        },
        {
          id: 'clear-stages-80',
          name: 'Clear event Battle Stages 80 times',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Complete any event battle stages 80 times',
        },
        {
          id: 'collect-8-stars',
          name: 'Collect 8 stars in Hard stages',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Earn 8 stars total from Hard difficulty stages',
        },
        {
          id: 'collect-12-stars',
          name: 'Collect 12 stars in Hard stages',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Earn 12 stars total from Hard difficulty stages',
        },
      ],
    },

    special: {
      title: 'Score Milestone Quests',
      description: 'Reach score milestones to earn bonus Whispers of Decay',
      completionRewards: {
        items: ['1 x Sprout Ticket', '4000 Whispers of Decay', '10 x Chess Piece of Skill'],
      },
      quests: [
        {
          id: 'score-12m',
          name: 'Reach 12,852,000 score',
          crystalReward: 50,
          whispersReward: 400,
          description: 'Achieve a total score of 12,852,000',
        },
        {
          id: 'score-20m',
          name: 'Reach 20,520,000 score',
          crystalReward: 50,
          whispersReward: 500,
          description: 'Achieve a total score of 20,520,000',
        },
        {
          id: 'score-25m',
          name: 'Reach 25,164,000 score',
          crystalReward: 50,
          whispersReward: 600,
          description: 'Achieve a total score of 25,164,000',
        },
        {
          id: 'score-28m',
          name: 'Reach 28,866,000 score',
          crystalReward: 50,
          whispersReward: 700,
          description: 'Achieve a total score of 28,866,000',
        },
        {
          id: 'score-35m',
          name: 'Reach 35,036,000 score',
          crystalReward: 50,
          whispersReward: 800,
          description: 'Achieve a total score of 35,036,000',
        },
        {
          id: 'score-39m',
          name: 'Reach 39,252,000 score',
          crystalReward: 50,
          whispersReward: 900,
          description: 'Achieve a total score of 39,252,000',
        },
        {
          id: 'score-41m',
          name: 'Reach 41,380,000 score',
          crystalReward: 50,
          whispersReward: 1000,
          description: 'Achieve a total score of 41,380,000',
        },
      ],
    },
  },

  // Stage System for A Finale Echoing
  stages: {
    normal: {
      title: 'Normal Stages',
      description: 'Complete normal difficulty stages for rewards',
      firstClearRewards: [200, 250, 300, 350, 400],
      replayReward: 200,
      stages: [
        {
          id: 'stage-1-normal',
          name: 'Stage 1',
          firstClearReward: 200,
          energyCost: 'Normal',
        },
        {
          id: 'stage-2-normal',
          name: 'Stage 2',
          firstClearReward: 250,
          energyCost: 'Normal',
        },
        {
          id: 'stage-3-normal',
          name: 'Stage 3',
          firstClearReward: 300,
          energyCost: 'Normal',
        },
        {
          id: 'stage-4-normal',
          name: 'Stage 4',
          firstClearReward: 350,
          energyCost: 'Normal',
        },
        {
          id: 'stage-5-normal',
          name: 'Stage 5',
          firstClearReward: 400,
          energyCost: 'Normal',
        },
      ],
      totalFirstClearRewards: 1500,
    },
    hard: {
      title: 'Hard Stages',
      description: 'Challenge yourself with hard difficulty stages for premium rewards',
      firstClearRewards: [300, 350, 400],
      replayReward: 300,
      stages: [
        {
          id: 'stage-1-hard',
          name: 'Stage 1 (Hard)',
          firstClearReward: 300,
          energyCost: 'Hard',
        },
        {
          id: 'stage-2-hard',
          name: 'Stage 2 (Hard)',
          firstClearReward: 350,
          energyCost: 'Hard',
        },
        {
          id: 'stage-3-hard',
          name: 'Stage 3 (Hard)',
          firstClearReward: 400,
          energyCost: 'Hard',
        },
      ],
      totalFirstClearRewards: 1050,
    },
    extraHard: {
      title: 'Extra Hard Stages',
      description: 'Test your skills with extra hard difficulty stages',
      firstClearRewards: [400],
      replayReward: 400,
      stages: [
        {
          id: 'stage-1-extra-hard',
          name: 'Stage 1 (Extra Hard)',
          firstClearReward: 400,
          energyCost: 'Extra Hard',
        },
      ],
      totalFirstClearRewards: 400,
    },
    ultimate: {
      title: 'Ultimate Stage',
      description: 'The ultimate challenge with maximum rewards',
      firstClearRewards: [500],
      replayReward: 500,
      maxReplays: 18, // 6 days × 3 tickets
      stages: [
        {
          id: 'ultimate-stage',
          name: 'Ultimate Stage',
          firstClearReward: 500,
          energyCost: 'Ultimate',
        },
      ],
      totalFirstClearRewards: 500,
    },
  },

  rewards: [
    '6 Exclusive Discs (Event Only)',
    'Whispers of Decay (Event Currency)',
    'Chess Piece of Skill (Material)',
    'Sprout Tickets',
    'Cartridge Boxes (Premium Content)',
    'Proving Grounds Gift Boxes',
  ],
  highlights: [
    '6 Exclusive Discs Only Available Here',
    'Special Event Currency: Whispers of Decay',
    'Ultimate Stage Farming (18 runs available)',
    'Score Milestone Rewards',
    'Skill Materials and Enhancement Items',
    'Limited Stock Management Strategy',
  ],
};

export default aFinaleEchoingEvent;
