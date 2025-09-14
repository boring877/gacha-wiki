export const prophecyData = {
  overview: {
    title: 'Prophecy Unbound',
    features: [
      'Difficulties unlock progressively. Nightmare Mode unlocks after clearing all Assaults in the Normal Mode.',
      'Boss DMG modifiers may vary across different stages.',
    ],
  },

  modes: [
    {
      name: 'Normal Mode',
      description: 'Regular Assaults offer rewards upon completion.',
      mechanics: [
        'You can Assault Bosses of any difficulty 2 times daily, and each Assault includes 3 attempts.',
        'Boss HP will decrease with each Assault. Defeat the Boss before your attempts run out to carry out a successful Assault.',
        'If the Boss survives, the Assault fails, and your attempts will be reset.',
        'During these 3 attempts, Vassals can only be deployed once.',
        "A Boss's HP will be reset and all Vassals will be available again upon a successful, failed, or terminated Assault.",
        'Assaults reset daily.',
      ],
    },
    {
      name: 'Nightmare Mode',
      description:
        'A special mode where Boss HP is tuned extremely high. You will be ranked based on your highest DMG dealt in a single Assault.',
      mechanics: [
        'You can Assault a Boss 2 times daily, and each Assault includes 3 attempts. Consuming all attempts counts as a successful Assault.',
        "If a Boss is reset before all 3 attempts are used, the total DMG won't be recorded.",
        'Assaults in Nightmare Mode are separate from the Normal Mode, but both reset daily.',
      ],
    },
  ],

  assaultTypes: [
    {
      name: 'Trial Assault',
      description: 'Trial Assault is available for all unlocked Difficulties at any time.',
      features: [
        "DMG dealt in Trial Assault won't be recorded.",
        'Trial Assault will not use Assaults.',
      ],
    },
    {
      name: 'Quick Assault',
      description:
        'Quick Assault will become available after any successful Assault in Normal Mode.',
      features: ['Quick Assault will use Assaults.'],
    },
  ],

  ranking: {
    title: 'Rank',
    description: 'Players will be ranked based on their highest Total DMG dealt to a Boss.',
    mechanics: ['When DMG is tied, the first player to reach this score will Rank higher.'],
  },

  rewards: {
    title: 'Rank Rewards',
    description: 'Rewards will be sent based on your Rank at the end of the season.',
    mechanics: ['Rewards will be distributed via mail after season ends.'],
  },

  bosses: {
    title: 'Available Bosses',
    description: 'Challenge these powerful bosses in Prophecy Unbound.',
    list: [
      {
        name: 'The Formless',
        url: '/guides/silver-and-blood/bosses/the-formless/',
        difficulty: 'Normal',
        image: '/images/games/silver-and-blood/boss/the_formless.jpg',
        class: 'Defender',
        attackType: 'P.DMG',
        tags: ['Physical Defense', 'Stun', 'Energy Drain', 'Paralysis', 'Summons'],
      },
      // More bosses will be added here
    ],
  },
};
