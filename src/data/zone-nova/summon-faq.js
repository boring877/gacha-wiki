// Zone Nova Summon FAQ Data
export const summonFaqData = {
  faqItems: [
    {
      id: 1,
      question: 'What are the different summon types in Zone Nova?',
      answer:
        'There are Character Summons and Memory Summons. There are also Premium Summons which use the rainbow cube and Regular Summons which use the blue cube. Both of these have character summons and memory summons.',
    },
    {
      id: 2,
      question: 'What are the summon rates for characters vs memories?',
      answer:
        'Character Summons: SSR 0.6% base (1.6% effective), SR 6% total. Memory Summons: SSR 0.8% base (1.87% effective), SR 9.1% total. Memory summons have higher rates but focus on memories instead of characters.',
    },
    {
      id: 3,
      question: 'How does the pity system work for each summon type?',
      answer:
        'Character Summons: 90-pull guarantee for SSR characters, 10-pull for SR. Memory Summons: 80-pull guarantee for SSR memories, 10-pull for SR memories. Each system has independent pity counters.',
    },
    {
      id: 4,
      question: "What's the difference between Character and Memory rate-ups?",
      answer:
        'Character rate-ups have 50% chance for featured SSR/SR characters. Memory rate-ups have 75% chance for featured SSR/SR memories. Memory banners have higher rate-up percentages.',
    },
    {
      id: 5,
      question: 'Does Pity carry over between summon types?',
      answer: 'Yes, Pity carry over between premium summon types.',
    },
    {
      id: 6,
      question: 'How do duplicates work in each system?',
      answer: 'You need 6 duplicates to get fully awakened characters, and memories need only 5.',
    },
    {
      id: 7,
      question: 'Can I get characters from Memory Summons?',
      answer:
        'Yes, Memory Summons can give SR characters (4.55% rate) along with memories. However, for SSR characters, you must use Character Summons as Memory Summons only give SSR memories.',
    },
    {
      id: 8,
      question: 'Is rerolling worth it for new players?',
      answer:
        'Yes, reroll on Character Summons to get powerful SSR characters. Memory Summons are secondary - focus on getting strong characters first, then worry about memories later.',
    },
    {
      id: 9,
      question: 'How do I get the rainbow cube and regular cube?',
      answer:
        'You can exchange Gems for Cubes. They both cost the same (160 gems) for each cube. You can also get them from events.',
    },
    {
      id: 10,
      question: 'Is this game friendly with summons?',
      answer:
        'They are quite good with giving cubes and gems, but they are not as good as BD2. In 1 month you can get a featured banner, but not the memory banner.',
    },
    {
      id: 11,
      question: 'Does the premium banner go to the regular banner?',
      answer: 'The premium banner only stays for 2 weeks and does not go to the regular banner.',
    },
  ],

  overallSummonInfo: {
    title: 'Premium Cube Summon Systems',
    currency: 'Fantasy Magic Cube',
    eventPeriod: 'Team leaders can use "Fantasy Magic Cube" to perform summons',
    systemTypes: [
      'Limited Character Summon & Guaranteed Character Summon',
      'Limited Memory Summon',
    ],
  },

  characterSummons: {
    title: 'Premium Cube Character Summons',
    summonDetails: {
      systemType: 'Limited Character Summon & Guaranteed Character Summon',
      pityCounter:
        'Accumulated summon count for SSR characters carries over within "Limited Character Summon" category, independent from other summon types',
    },

    summonRates: {
      ssrCharacters: {
        title: 'SSR Characters',
        baseRate: '0.6%',
        effectiveRate: '1.6%',
        guaranteed: 'Within 90 summons maximum',
      },
      srObjects: {
        title: 'SR Memories',
        baseRate: '6% (total)',
        breakdown: {
          srCharacters: '3%',
          srMemories: '3%',
        },
        effectiveRate: '13%',
        guaranteed: 'Within 10 summons maximum',
        srGuaranteeRate: '99.4% SR characters/memories, 0.6% SSR characters',
      },
    },
    rateUpSystem: {
      ssrRateUp: {
        title: 'SSR Rate-Up',
        chance: '50% chance to get featured SSR character',
        guarantee: 'If non-featured SSR obtained, next SSR is guaranteed to be featured',
      },
      srRateUp: {
        title: 'SR Rate-Up',
        chance: '50% chance to get one of the featured SR characters',
        guarantee:
          'If non-featured SR obtained, next SR is guaranteed to be one of the featured characters',
      },
    },
    conversionSystem: {
      duplicateRewards: {
        ssrCharacters: {
          title: 'SSR Characters',
          secondToSeventh: '1x Soul Stone + 40x Rare Dust',
          eighthPlus: '100x Rare Dust',
        },
        srCharacters: {
          title: 'SR Characters',
          secondToSeventh: '1x Soul Stone + 8x Rare Dust',
          eighthPlus: '20x Rare Dust',
        },
      },
      memoryRewards: {
        title: 'Memory Rewards',
        srMemory: '8x Rare Dust',
        rareMemory: '20x Magic Cube Dust',
      },
    },
  },

  memorySummons: {
    title: 'Premium Cube Memory Summons',
    summonDetails: {
      systemType: 'Limited Memory Summon',
      pityCounter:
        'Accumulated summon count for SSR memories and SR memories carries over within "Limited Memory Summon" category, independent from other summon types',
    },
    summonRates: {
      ssrMemories: {
        title: 'SSR Memories',
        baseRate: '0.8%',
        comprehensiveRate: '1.87%',
        guaranteed: 'Within 80 summons maximum',
      },
      srObjects: {
        title: 'SR Memories',
        baseRate: '9.1% (total)',
        breakdown: {
          srCharacters: '4.55%',
          srMemories: '4.55%',
        },
        comprehensiveRate: '14.8%',
        guaranteed: 'Within 10 summons maximum',
        srGuaranteeRate: '99.2% SR characters/memories, 0.8% SSR memories',
      },
    },
    rateUpSystem: {
      ssrMemoryRateUp: {
        title: 'SSR Memory Rate-Up',
        chance: '75% chance to get featured SSR memory',
        guarantee:
          'If non-featured SSR memory obtained, next SSR memory is guaranteed to be featured',
      },
      srMemoryRateUp: {
        title: 'SR Memory Rate-Up',
        chance: '75% chance to get one of the featured SR memories',
        guarantee:
          'If non-featured SR memory obtained, next SR memory is guaranteed to be one of the featured memories',
      },
    },
    conversionSystem: {
      memoryRewards: {
        title: 'Memory Rewards',
        ssrMemory: '40x Rare Dust',
        srMemory: '8x Rare Dust',
        rareMemory: '20x Magic Cube Dust',
      },
      duplicateCharacterRewards: {
        title: 'Duplicate Character Rewards',
        secondToSeventh: '1x Soul Stone + 8x Rare Dust',
        eighthPlus: '20x Rare Dust',
      },
    },
  },

  quickTips: [
    {
      icon: '💎',
      title: 'Cube Management',
      description:
        'Save enough Premium Cubes for guaranteed pulls: 90 for SSR characters, 80 for SSR memories.',
    },
    {
      icon: '🎯',
      title: 'Banner Strategy',
      description:
        'Character banners: 50% rate-up. Memory banners: 75% rate-up. Focus on your current needs.',
    },
    {
      icon: '⭐',
      title: 'Pity Counters',
      description:
        "Each summon type has independent pity counters. Character and Memory pity don't affect each other.",
    },
    {
      icon: '🔄',
      title: 'Priority Guide',
      description:
        'New players: Focus on Character Summons first for team building, then Memory Summons for enhancement.',
    },
  ],

  helpLinks: [
    {
      icon: '👥',
      text: 'Character Database',
      href: '/guides/zone-nova/characters/',
    },
    {
      icon: '📝',
      text: 'Contribute to Wiki',
      href: '/guides/zone-nova/contributing/',
    },
  ],
};
