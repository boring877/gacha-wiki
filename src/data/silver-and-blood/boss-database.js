export const bossDatabase = {
  overview: {
    title: 'Clan Hunt Boss Database',
    description:
      'Complete database of all Clan Hunt bosses, their mechanics, weaknesses, and optimal strategies for achieving maximum damage and clan ranking success.',
  },

  // Boss entries
  bosses: [
    {
      id: 'undying-armor',
      name: 'Undying Armor',
      image:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752989369/UndyingArmor_fwykwz.jpg',
      attackType: {
        title: 'Type of Attack',
        description: "Enemy mainly deals Physical DMG. Consider improving your Lineup's P. DEF.",
      },
      defenseType: {
        title: 'Type of Defensive',
        description: 'Enemy has balanced DEF with no P. DEF/M. DEF advantage.',
      },
      mapSynergy: {
        title: 'Synergy With Map Buff (DOT)',
        description:
          'When Continuous DMG takes effect, there is a 5% chance to deal True DMG equal to 100% of the damage dealt to nearby enemies in a circle. Each instance of Continuous DMG on an enemy increases the continuous damage they take by 3%, up to a maximum of 30%.',
        effectiveCharacters: ['Darcias', 'Nicole', 'Transcendent Hati', 'Agares'],
      },
    },
    {
      id: 'mutant-escapee',
      name: 'Mutant Escapee',
      image:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752990542/MutantEscapee_npclmm.jpg',
      attackType: {
        title: 'Type of Attack',
        description: "Enemy mainly deals Physical DMG. Consider improving your Lineup's P. DEF.",
      },
      defenseType: {
        title: 'Type of Defensive',
        description: 'Enemy has balanced DEF with no P. DEF/M. DEF advantage.',
      },
      mapSynergy: {
        title: 'Synergy With Map Buff',
        description:
          'When enemy units burrow, they gain 50% DMG Reduction. However, they will surface as Control effects inflicted on them continue. Each instance of Control extends the duration of these effects on the enemy by 50%.',
        effectiveCharacters: [
          'Selena',
          'Transcendent Ami',
          'Tris',
          'Lorelei',
          'Joan',
          'Pavana',
          'Augustine',
          'Theophane',
        ],
      },
    },
    {
      id: 'swarming-carapace',
      name: 'Swarming Carapace',
      image:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752990686/SwarmingCarapace_npsibw.jpg',
      attackType: {
        title: 'Type of Attack',
        description: "Enemy mainly deals Physical DMG. Consider improving your Lineup's P. DEF.",
      },
      defenseType: {
        title: 'Type of Defensive',
        description: 'Enemy has balanced DEF with no P. DEF/M. DEF advantage.',
      },
      mapSynergy: {
        title: 'Synergy With Map Buff',
        description:
          'When enemy units burrow, they gain 50% DMG Reduction. However, they will surface as Control effects inflicted on them continue. Each instance of Control extends the duration of these effects on the enemy by 50%.',
        effectiveCharacters: [
          'Selena',
          'Transcendent Ami',
          'Tris',
          'Lorelei',
          'Joan',
          'Pavana',
          'Augustine',
          'Theophane',
        ],
      },
    },
    {
      id: 'blade-of-tempus',
      name: 'Blade of Tempus',
      image:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752991095/BladeofTempus_dr25st.jpg',
      attackType: {
        title: 'Type of Attack',
        description: "Enemy mainly deals Magic DMG. Consider improving your Lineup's M. DEF.",
      },
      defenseType: {
        title: 'Type of Defensive',
        description: 'Enemy has balanced DEF with no P. DEF/M. DEF advantage.',
      },
      mapSynergy: {
        title: 'Synergy With Map Debuff',
        description:
          'While vapors shroud the field, allies lose HP equal to 2% of their Max HP per sec. ATK SPD is reduced by 100% for units with HP Percentage below 70%. Units with HP Percentage below 40% become Stunned.',
        effectiveCharacters: [
          'Acappella',
          'Edina',
          'Jinxed Selena',
          'Lamia',
          'Seth',
          'Starry-Eyed Aiona',
          'Yggdrasill',
        ],
      },
    },
    {
      id: 'infected-villager',
      name: 'Infected Villager',
      image:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752991862/InfectedVillager_xbqixc.jpg',
      attackType: {
        title: 'Type of Attack',
        description: "Enemy mainly deals Physical DMG. Consider improving your Lineup's P. DEF.",
      },
      defenseType: {
        title: 'Type of Defensive',
        description: 'Enemy has balanced DEF with no P. DEF/M. DEF advantage.',
      },
      mapSynergy: {
        title: 'Synergy With Map Debuff',
        description:
          'While vapors shroud the field, allies lose HP equal to 2% of their Max HP per sec. ATK SPD is reduced by 100% for units with HP Percentage below 70%. Units with HP Percentage below 40% become Stunned.',
        effectiveCharacters: [
          'Acappella',
          'Edina',
          'Jinxed Selena',
          'Lamia',
          'Seth',
          'Starry-Eyed Aiona',
          'Yggdrasill',
        ],
      },
    },
  ],
};

export const getBossesByRound = roundRange => {
  return bossDatabase.bosses.filter(boss => boss.round === roundRange);
};

export const getBossesByElement = element => {
  return bossDatabase.bosses.filter(boss => boss.element === element);
};

export const getBossById = id => {
  return bossDatabase.bosses.find(boss => boss.id === id);
};

export const getAllBosses = () => {
  return bossDatabase.bosses;
};
