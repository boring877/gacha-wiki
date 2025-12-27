// Silver and Blood Landing Page Data
// This file contains all the content and configuration for the Silver and Blood landing page

export const silverAndBloodConfig = {
  meta: {
    title: 'Silver and Blood Wiki - Complete Gacha Game Guide | GachaWiki',
    description:
      'Complete Silver and Blood wiki with live reset countdown timer, character guides, builds, tier lists, damage mechanics, and clan hunt strategies. Free comprehensive database with unique server time clock for all Silver and Blood players.',
    gameTitle: 'Silver and Blood',
    heroImage: '/images/games/silver-and-blood/main-images/silver-and-blood-main.jpg',
  },

  gameInfo: {
    description: `This is a story of "Blood and Destiny."

"Blood" is the essence of life and the vessel of memory.
Long before the dawn of the Continental Era, thirteen alchemists consumed the blood of Abel—the First Martyr.
Through this sacrament, they unearthed the secret to transferring memories through blood, seizing a form of "immortality." Yet with each transference, their blood darkened, growing ever more tainted.
Thus the first "Bloodborn" came to be: Immortal beings who defied the natural cycle of life and death—the harbingers of calamity upon the mortal world.

"Destiny" is the confluence of cause and effect, the immutable cycle which governs existence.
Back in that distant age, a young girl deciphered a divine prophecy inscribed upon a fallen star.
From this, she grasped the truth of the world: Only time remains impartial, and only cycles are eternal.
In the name of Aeon, the Temporal Sovereign, she raised the silver banner of the "Tempus Church," vowing to return "heretics" to the natural cycle of life and death, and steer "history" back upon its destined course.

This is the age-old tale of Blood and Destiny.
This, too, is unfinished epic of Silver and Blood, its ending both foretold, yet still unwritten.`,
    playUrl: 'https://silverandblood.moonton.com/',
    status: 'active',
    lastUpdated: new Date(),
  },

  // Organized story content for landing page
  storyContent: {
    intro: {
      title: 'A Tale of Blood and Destiny',
      tagline:
        'An epic struggle between immortal Bloodborn and the Tempus Church that will determine the fate of all existence.',
    },
    cards: [
      {
        id: 'blood',
        title: 'Blood',
        subtitle: 'The Essence of Life',
        icon: '',
        theme: 'blood-card',
        content: [
          'Long before the Continental Era, thirteen alchemists consumed the blood of Abel—the First Martyr. Through this forbidden sacrament, they discovered the secret to transferring memories through blood, seizing immortality itself.',
          'Yet with each transference, their blood darkened and grew tainted. Thus the first **Bloodborn** came to be—immortal beings who defied death and became harbingers of calamity.',
        ],
      },
      {
        id: 'destiny',
        title: 'Destiny',
        subtitle: 'The Immutable Cycle',
        icon: '',
        theme: 'destiny-card',
        content: [
          'In that distant age, a young girl deciphered a divine prophecy from a fallen star. She grasped the truth: only time remains impartial, and only cycles are eternal.',
          'In the name of Aeon, Temporal Sovereign, she raised the silver banner of the **Tempus Church**, vowing to return heretics to the natural cycle and steer history back to its destined course.',
        ],
      },
    ],
    conclusion:
      'This is the age-old tale of Blood and Destiny—an unfinished epic whose ending is both foretold, yet still unwritten.',
  },

  sections: [
    {
      id: 'about',
      title: 'About',
      type: 'game-info',
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'guides-grid',
    },
  ],

  // Main Category Groups for Bento Grid Layout
  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, rankings, comparisons, and tier lists',
      size: 'large',
      guides: [
        {
          id: 'characters',
          title: 'Database',
          url: '/guides/silver-and-blood/characters/',
        },
        {
          id: 'characters-info',
          title: 'Lore & Info',
          url: '/guides/silver-and-blood/characters-info/',
        },
        {
          id: 'tier-list',
          title: 'Tier List',
          url: '/guides/silver-and-blood/tier-list/',
        },
        {
          id: 'character-rankings',
          title: 'Rankings',
          url: '/guides/silver-and-blood/character-rankings/',
        },
        {
          id: 'character-comparison',
          title: 'Comparison',
          url: '/guides/silver-and-blood/character-comparison/',
        },
        {
          id: 'character-comparison-v2',
          title: 'Comparison V2',
          url: '/guides/silver-and-blood/character-comparison-v2/',
        },
        {
          id: 'character-tag-selection',
          title: 'Tags',
          url: '/guides/silver-and-blood/character-tag-selection/',
        },
        {
          id: 'character-skills',
          title: 'Skills',
          url: '/guides/silver-and-blood/character-skills/',
        },
        {
          id: 'character-stats',
          title: 'Stats Database',
          url: '/guides/silver-and-blood/character-stats/',
        },
      ],
    },
    {
      id: 'combat',
      title: 'Combat',
      emoji: '',
      description: 'Damage mechanics, boss battles, clan hunts, and team strategies',
      size: 'large',
      guides: [
        {
          id: 'damage-mechanics',
          title: 'Damage Hub',
          url: '/guides/silver-and-blood/damage-mechanics/',
        },
        {
          id: 'boss-database',
          title: 'Boss Database',
          url: '/guides/silver-and-blood/boss-database/',
        },
        {
          id: 'prophecy',
          title: 'Prophecy',
          url: '/guides/silver-and-blood/prophecy/',
        },
        {
          id: 'clan-hunt',
          title: 'Clan Hunt',
          url: '/guides/silver-and-blood/clan-hunt/',
        },
        {
          id: 'synergies',
          title: 'Synergies',
          url: '/guides/silver-and-blood/synergies/',
        },
        {
          id: 'team-synergy',
          title: 'Team Synergy',
          url: '/guides/silver-and-blood/team-synergy/',
        },
        {
          id: 'gear-upgrades',
          title: 'Gear Upgrades',
          url: '/guides/silver-and-blood/gear-upgrades/',
        },
      ],
    },
    {
      id: 'events',
      title: 'Events',
      emoji: '',
      description: 'Special events, puzzles, and limited content',
      size: 'medium',
      guides: [
        {
          id: 'events',
          title: 'Events',
          url: '/guides/silver-and-blood/events/',
        },
        {
          id: 'dutchmans-revenge',
          title: "Dutchman's Revenge",
          url: '/guides/silver-and-blood/dutchmans-revenge/',
        },
        {
          id: 'ancestral-vault',
          title: 'Ancestral Vault',
          url: '/guides/silver-and-blood/ancestral-vault/',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Utility tools, codes, and game information',
      size: 'medium',
      guides: [
        {
          id: 'clock',
          title: 'Clock',
          url: '/clock/silver-and-blood/',
        },
        {
          id: 'beginner-guide',
          title: 'Beginner Guide',
          url: '/guides/silver-and-blood/beginner-guide/',
        },
        {
          id: 'rerolling-guide',
          title: 'Rerolling Guide',
          url: '/guides/silver-and-blood/rerolling-guide/',
        },
        {
          id: 'gifts',
          title: 'Gifts',
          url: '/guides/silver-and-blood/gifts/',
        },
        {
          id: 'character-gifts',
          title: 'Character Gifts',
          url: '/guides/silver-and-blood/character-gifts/',
        },
        {
          id: 'redeem-codes',
          title: 'Redeem Codes',
          url: '/guides/silver-and-blood/redeem-codes/',
        },
        {
          id: 'bug-fixes',
          title: 'Bug Fixes',
          url: '/guides/silver-and-blood/bugs/',
        },
        {
          id: 'summon-faq',
          title: 'Summon FAQ',
          url: '/guides/silver-and-blood/summon-faq/',
        },
        {
          id: 'slot-machines',
          title: 'Slot Machines',
          url: '/guides/silver-and-blood/slot-machines/',
        },
      ],
    },
  ],

  guides: [
    {
      id: 'clock',
      title: 'Clock',
      emoji: '',
      description:
        'Track Silver and Blood server resets, maintenance, raids, signin events, outfit availability, and special events with real-time countdown timers for APAC and US regions.',
      url: '/clock/silver-and-blood/',
      category: 'tools',
      status: 'active',
    },
    {
      id: 'beginner-guide',
      title: 'Beginner Guide',
      emoji: '',
      description:
        'Complete beginner guide for Silver and Blood. Learn the basics, character progression, team building, and essential tips for new players starting their adventure.',
      url: '/guides/silver-and-blood/beginner-guide/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'rerolling-guide',
      title: 'Rerolling Guide',
      emoji: '',
      description:
        'Complete rerolling guide focused on getting Timeless Aiona. Step-by-step process with redeem codes, optimal strategy, and fast rerolling tips for new players.',
      url: '/guides/silver-and-blood/rerolling-guide/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      emoji: '',
      description:
        'Free Silver and Blood redeem codes for in-game rewards, gems, and items. Updated regularly with working promo codes and step-by-step redemption instructions.',
      url: '/guides/silver-and-blood/redeem-codes/',
      category: 'tools',
      status: 'active',
    },
    {
      id: 'bug-fixes',
      title: 'Bug Fixes',
      emoji: '',
      description:
        'Known bugs and their solutions for Silver and Blood. Track resolved issues, current problems, and community-reported workarounds with screenshots and solutions.',
      url: '/guides/silver-and-blood/bugs/',
      category: 'tools',
      status: 'active',
    },
    {
      id: 'character-comparison',
      title: 'Character Comparison',
      emoji: '',
      description:
        'Compare up to 4 characters side by side to analyze their stats and abilities for optimal team building.',
      url: '/guides/silver-and-blood/character-comparison/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-comparison-v2',
      title: 'Character Comparison V2',
      emoji: '',
      description:
        'Advanced character comparison tool with modern card-based interface. Compare 2 heroes with detailed tier rankings, stat analysis, and skills breakdown.',
      url: '/guides/silver-and-blood/character-comparison-v2/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-rankings',
      title: 'Character Rankings',
      emoji: '',
      description:
        'View character stat rankings and overall performance analysis across HP, ATK, P.DEF, and M.DEF.',
      url: '/guides/silver-and-blood/character-rankings/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-tag-selection',
      title: 'Character Tag Selection',
      emoji: '',
      description:
        'Filter and discover characters by their combat tags and abilities. Find characters with specific roles like Buff, Healing, AoE DMG, and more.',
      url: '/guides/silver-and-blood/character-tag-selection/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character information.',
      url: '/guides/silver-and-blood/characters/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'characters-info',
      title: 'Character Lore & Info',
      emoji: '',
      description: 'Explore character stories, voice actors, and backstories for all Silver and Blood characters.',
      url: '/guides/silver-and-blood/characters-info/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-skills',
      title: 'Character Skills',
      emoji: '',
      description: 'Complete database of all character skills with damage scaling, potency bonus, and detailed descriptions.',
      url: '/guides/silver-and-blood/character-skills/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-stats',
      title: 'Character Stats Database',
      emoji: '',
      description: 'Complete character stats database for all 71 characters. View stats at different levels and Spirit Siphon levels. Filter by rarity, class, and search by name.',
      url: '/guides/silver-and-blood/character-stats/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'damage-mechanics',
      title: 'Damage Mechanics Hub',
      emoji: '',
      description: 'formulas and calculation for damage output .',
      url: '/guides/silver-and-blood/damage-mechanics/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'dutchmans-revenge',
      title: "Dutchman's Revenge",
      emoji: '',
      description: 'Helping with little puzzle thingy :D',
      url: '/guides/silver-and-blood/dutchmans-revenge/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'events',
      title: 'Events',
      emoji: '',
      description: 'Events and Related things to Events !',
      url: '/guides/silver-and-blood/events/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'summon-faq',
      title: 'Summon FAQ',
      emoji: '',
      description: 'General knowledge about summoning and FAQ.',
      url: '/guides/silver-and-blood/summon-faq/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'ancestral-vault',
      title: 'Ancestral Vault',
      emoji: '',
      description:
        'Summon Ancient Vassals with Mead of Rebirth. Calculate progression requirements for Sirene and other Ancient Vassals.',
      url: '/guides/silver-and-blood/ancestral-vault/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'clan-hunt',
      title: 'Clan Hunt',
      emoji: '',
      description: 'General knowledge and calculator .',
      url: '/guides/silver-and-blood/clan-hunt/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'boss-database',
      title: 'Clan Hunt Boss Database',
      emoji: '',
      description:
        'Complete database of all Clan Hunt bosses with mechanics, strategies, and optimal team compositions.',
      url: '/guides/silver-and-blood/boss-database/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'prophecy',
      title: 'Prophecy Unbound',
      emoji: '',
      description:
        'Complete guide to Prophecy Unbound boss battles, including Normal Mode, Nightmare Mode, ranking system, and rewards.',
      url: '/guides/silver-and-blood/prophecy/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'synergies',
      title: 'Character Synergies',
      emoji: '',
      description:
        'Complete guide to character synergies in Silver and Blood. Learn about synergy bonuses, leader effects, and team composition benefits.',
      url: '/guides/silver-and-blood/synergies/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'team-synergy',
      title: 'Team Synergy Database',
      emoji: '',
      description:
        'Sortable and filterable team composition database with effective team builds, skill rotations, and synergy strategies for different content types.',
      url: '/guides/silver-and-blood/team-synergy/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'tier-list',
      title: 'Tier List',
      emoji: '',
      description:
        'Comprehensive character tier lists for PvP Arena, PvE, Clan Hunt, Boss Raids, and F2P players. Interactive tier list maker with drag-and-drop functionality.',
      url: '/guides/silver-and-blood/tier-list/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'gear-upgrades',
      title: 'End Game Gear Upgrades',
      emoji: '',
      description:
        'Complete guide to Tier 9 gear upgrades, Echo blessings, sub-stats, and SoulsStrike hammer mechanics. Learn about blessing priorities, recast strategies, and refinement optimization.',
      url: '/guides/silver-and-blood/gear-upgrades/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'slot-machines',
      title: 'Slot Machine Simulators',
      emoji: '',
      description:
        'Interactive slot machine simulators for Recast and Refinement mechanics. Test your luck with realistic probability simulations based on gameplay observation!',
      url: '/guides/silver-and-blood/slot-machines/',
      category: 'tools',
      status: 'active',
    },
    {
      id: 'gifts',
      title: 'Gift Database',
      emoji: '',
      description:
        'Complete gift database for Silver and Blood. View all gifts organized by camp with affinity EXP values.',
      url: '/guides/silver-and-blood/gifts/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-gifts',
      title: 'Character Gifts',
      emoji: '',
      description:
        'Find the best gifts for each character based on their camp affiliation. Maximize affinity EXP with matching camp gifts.',
      url: '/guides/silver-and-blood/character-gifts/',
      category: 'guides',
      status: 'active',
    },
  ],
};

export default silverAndBloodConfig;
