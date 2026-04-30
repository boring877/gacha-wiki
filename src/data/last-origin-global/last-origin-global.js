// Last Origin Global Landing Page Data
// This file contains all the content and configuration for the Last Origin Global landing page

export const lastOriginGlobalConfig = {
  meta: {
    title: 'Last Origin Global Wiki - Character Guide & Game Database | GachaWiki',
    description:
      'Complete Last Origin Global wiki with character guides, unit types, combat mechanics, and game database. Turn-based strategy RPG by VFUN. Build your squad of Bioroids and fight for humanity.',
    gameTitle: 'Last Origin Global',
    heroImage: '/images/games/last-origin-global/hero.jpg',
  },

  gameInfo: {
    description:
      'Last Origin is a post-apocalyptic, turn-based strategy RPG where you play as the last surviving human in a world populated by Bioroids. Build your squad, master grid-based tactical combat, and lead humanity to victory.',
    publisher: 'VFUN',
    platforms: ['Mobile'],
    status: 'pre-registration',
    lastUpdated: new Date(),
    socialLinks: {
      vfun: 'https://vfun.valofe.com/library?service_code=lastorigin-gl',
      facebook: 'https://www.facebook.com/LastOriginOnVFUN',
      discord: 'https://discord.gg/tgmbFm3JCA',
      orvvit: 'https://www.orvvit.com/page/last-origin-global',
      koreanWiki: 'https://lo.swaytwig.com/units/PECS_Spartoia',
    },
    preRegistration: {
      startDate: '2026-04-30',
      endDate: '2026-05-21',
      url: 'https://vfun.valofe.com/library?service_code=lastorigin-gl',
      description: 'Pre-registration is now open! Sign up and unlock milestone rewards when the game launches.',
      milestones: [
        { count: '10,000', reward: 'Golden Skip Ticket x3' },
        { count: '30,000', reward: 'SSR Guaranteed Ticket x1' },
        { count: '50,000', reward: 'Eternal Contract x1' },
        { count: '100,000', reward: 'SSR Spartaia Guaranteed Ticket x1' },
      ],
    },
  },

  story: {
    title: 'Story',
    content: [
      'In a post-apocalyptic world, humanity has been wiped out. You are the last surviving human male. The world is now populated by Bioroids — female android-like beings created by humans.',
      'Because you are the only human left, every character treats you as extremely important. This heavily shapes the story and interactions. You are central to every faction and conflict, and dialogue often changes based on your decisions or presence.',
      'The Bioroids face threats from Metal Parasites and other dangers. Build your squad, craft your strategy, and lead humanity to victory in the final war. Uncover the truth behind the world\'s collapse — and the key to humanity\'s revival.',
    ],
  },

  combatOverview: {
    title: 'Combat System',
    items: [
      {
        name: 'Grid-Based Tactics',
        description: 'Units are placed on a 3x3 battlefield. Positioning matters — skills have range, direction, and synergy effects. Some units boost allies only when placed behind or beside them.',
      },
      {
        name: 'Turn-Based Combat',
        description: 'Each character gets a turn based on Speed. On each turn, choose between Basic Attack, Skill 1, Skill 2, or Wait/Defend. AP (Action Points) determine how frequently units act.',
      },
      {
        name: 'Team Synergy',
        description: 'Build teams of 5 units with front/middle/back row positioning. Combine tanks protecting fragile units, buffers increasing attack, debuffers lowering enemy defense, and attackers finishing enemies.',
      },
    ],
  },

  unitTypes: {
    title: 'Unit Types',
    items: [
      {
        name: 'Light Armor',
        description: 'High hit rate and longer skill range. Average action power (~4) with low AP consumption. Lowest resource cost. Light armor attackers often have support attacks; protectors have 30% elemental resistance.',
      },
      {
        name: 'Air Type',
        description: 'Flying/hovering units with high evasion. High action power (~4.5) but high AP consumption. Low HP but high evasion. Strong against heavily armored targets with penetration effects. Consumes more Power resources.',
      },
      {
        name: 'Heavy Armor',
        description: 'Highest base stats of all types. Very low action power (~3.5) and high AP consumption. Slow but powerful. Massive units with heavy weapons and exoskeleton suits.',
      },
    ],
  },

  roles: {
    title: 'Roles',
    items: [
      {
        name: 'Attack',
        description: 'High-damage dealing skills. Damage is increased in conjunction with status abnormalities, or firepower is maximized through defense penetration and protection ignoring.',
      },
      {
        name: 'Defend',
        description: 'Protect allies using protection skills or provocation. Higher total base abilities and stats than other roles. Additional protection capabilities are required beyond just standing in front.',
      },
      {
        name: 'Support',
        description: 'Increase team efficiency by applying buffs to allies or debuffs to enemies. Applying buffs to a small number of attackers through support units often provides more firepower than deploying many attackers.',
      },
    ],
  },

  resources: {
    title: 'Resource Management',
    items: [
      { name: 'Parts', description: 'Used for crafting characters and equipment.' },
      { name: 'Power', description: 'Consumed by Air Type and Heavy Armor units. Essential for advanced squad operations.' },
      { name: 'Nutrients', description: 'Used to maintain and upgrade your squad.' },
    ],
  },

  progression: {
    title: 'Progression',
    items: [
      'Level up characters to increase base stats',
      'Enhance stats for additional power',
      'Equip gear to customize builds',
      'Link duplicates to strengthen units',
      'Promote rarity — some low-rarity units become top-tier when fully upgraded',
      'Farm stages for resources, gear, character drops, and upgrade materials',
      'Offline farming lets the game farm stages automatically',
    ],
  },

  categoryGroups: [
    {
      id: 'community',
      title: 'Community',
      description: 'Official links and community resources',
      size: 'medium',
      guides: [
        {
          id: 'vfun',
          title: 'VFUN (Official)',
          url: 'https://vfun.valofe.com/library?service_code=lastorigin-gl',
          external: true,
        },
        {
          id: 'orvvit',
          title: 'Orvvit (Official Info)',
          url: 'https://www.orvvit.com/page/last-origin-global',
          external: true,
        },
        {
          id: 'facebook',
          title: 'Facebook',
          url: 'https://www.facebook.com/LastOriginOnVFUN',
          external: true,
        },
        {
          id: 'discord',
          title: 'Discord',
          url: 'https://discord.gg/tgmbFm3JCA',
          external: true,
        },
        {
          id: 'korean-wiki',
          title: 'Korean Wiki (Swaytwig)',
          url: 'https://lo.swaytwig.com/units/PECS_Spartoia',
          external: true,
        },
      ],
    },
  ],

  guides: [],
};

export const getGuidesByCategory = (category) => {
  return lastOriginGlobalConfig.guides.filter((guide) => guide.category === category);
};

export const getGuideById = (id) => {
  return lastOriginGlobalConfig.guides.find((guide) => guide.id === id);
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: lastOriginGlobalConfig.meta.title,
    description: lastOriginGlobalConfig.meta.description,
    url: 'https://gachawiki.info/guides/last-origin-global/',
    about: {
      '@type': 'Game',
      name: lastOriginGlobalConfig.meta.gameTitle,
      description: lastOriginGlobalConfig.gameInfo.description,
    },
  };
};
