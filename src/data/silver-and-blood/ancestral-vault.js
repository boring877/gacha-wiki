// Ancestral Vault Hub Data Configuration
// This file contains the hub structure and content for the Ancestral Vault section

export const ancestralVaultIndex = {
  meta: {
    title: 'Ancestral Vault - Silver and Blood',
    description: 'Summon Ancient Vassals and unlock powerful spirits with Mead of Rebirth',
    lastUpdated: new Date(),
    totalGuides: 1,
  },

  heroSection: {
    title: 'Ancestral Vault',
    subtitle: 'Bathory spirits of yore, manifest as our blade and fight for the Clan!',
    description: `Complete tasks in [Ancestral Vault] to obtain Mead of Rebirth, which contributes to the Vault's progress. Unlock Vassal Sirene upon reaching 100% progress.`,
  },

  vaultCategories: [
    {
      id: 'ancient-vassals',
      title: 'Ancient Vassals',
      description: 'Summon powerful Ancient Vassals to strengthen your clan',
      icon: '⚔️',
      color: 'blue',
      guides: [
        {
          id: 'sirene',
          title: 'Sirene',
          description:
            'Cloak of Shadow - Calculate progression requirements and learn about her abilities',
          url: '/guides/silver-and-blood/ancestral-vault/sirene/',
          lastUpdated: '2024-07-17',
          moonPhase: 'Full Moon',
          attackType: 'M.DMG',
          class: 'Marksman',
          rarity: 'SSR',
        },
      ],
    },
  ],

  mechanicsOverview: {
    ancientSummoning: {
      title: 'Ancient Summoning',
      points: [
        'Consume Mead of Rebirth to summon Ancient Vassals.',
        'The first summon grants a Vassal, and subsequent summons grant Vassal Spirits.',
        'Each Ancient can be summoned up to 11 times.',
      ],
    },
    meadOfRebirth: {
      title: 'Mead of Rebirth',
      points: [
        'Complete Ancestral Vault Tasks to obtain Mead of Rebirth.',
        'Mead of Rebirth is also issued based on Clan Hunt Rank.',
      ],
    },
  },

  upcomingGuides: [
    {
      title: 'Advanced Vault Strategies',
      description: 'Optimization guides for maximizing your Mead of Rebirth income',
      estimatedRelease: 'Coming Soon',
      category: 'mechanics',
    },
    {
      title: 'Future Ancient Vassals',
      description: 'New Ancient Vassals will become available over time',
      estimatedRelease: 'TBA',
      category: 'ancient-vassals',
    },
  ],

  navigation: {
    breadcrumb: [
      { name: 'Guides', href: '/guides/' },
      { name: 'Silver and Blood', href: '/guides/silver-and-blood/' },
      { name: 'Ancestral Vault', href: '/guides/silver-and-blood/ancestral-vault/' },
    ],
    relatedPages: [
      { name: 'Character Rankings', href: '/guides/silver-and-blood/character-rankings/' },
      { name: 'Damage Mechanics', href: '/guides/silver-and-blood/damage-mechanics/' },
    ],
  },
};

export default ancestralVaultIndex;
