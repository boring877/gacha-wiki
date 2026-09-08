// Juza Build Configuration - Horizon Walker
export const juzaBuildConfig = {
  damageScaling: 'Crush DMG + Crit DMG',
  buildStrategyTitle: 'Eugenia-Fueled Crit Crusher',
  recommendedStigma: 'Mixed 2-Set: Lifebound + The Four Horsemen',
  mixedSetLayout: {
    left: 'Lifebound',
    top: 'Lifebound',
    bottom: 'The Four Horsemen',
    right: 'The Four Horsemen',
  },
  buildStrategy: [
    {
      title: 'Pair Her With Eugenia',
      description:
        'Eugenia buff is what pushes Juza to full Crit Rate, and that is what makes the Crit DMG build hit so hard. Without Eugenia the crit build does not work, run the HP build instead.',
    },
  ],
  substatBuilds: [
    {
      name: 'Crit DMG Build (with Eugenia)',
      note: 'The main build. Crit DMG is by far the highest value substat since Eugenia covers crit rate.',
      stats: [
        { stat: 'Crit DMG', priority: 'Highest' },
        { stat: 'Max HP', priority: '2nd' },
        { stat: 'AP Recovery', priority: '3rd' },
      ],
    },
    {
      name: 'HP Build (no Eugenia)',
      note: 'The fallback when you cannot pair her with Eugenia. Stack HP and support with AP.',
      stats: [
        { stat: 'Max HP', priority: 'Highest' },
        { stat: 'AP Recovery', priority: '2nd' },
      ],
    },
  ],
  substatsPriority:
    'Crit DMG build: Crit DMG, then Max HP, then AP Recovery. HP build: Max HP, then AP Recovery.',
  traitsType: 'Crit DMG + Crush DMG + Max HP',
  traitsMax: 6,
  recommendedTraits: [
    {
      name: 'Desperate',
      effects: ['Crit Rate: -5%', 'Crit DMG: +15%'],
      priority: 'Best',
    },
    {
      name: 'Dogmatic',
      effects: ['Crit DMG: +8%'],
      priority: 'Best',
    },
    {
      name: 'Precarious',
      effects: ['Crit DMG: +6%'],
      priority: 'Best',
    },
    {
      name: 'Heavy',
      effects: ['Crush Boost: +6%'],
      priority: 'Best',
    },
    {
      name: 'Sieging',
      effects: ['Crush Boost: +8%'],
      priority: 'Best',
    },
    {
      name: 'Sturdy',
      effects: ['Max HP: +5%'],
      priority: 'Best',
    },
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
      priority: 'Alternative',
    },
    {
      name: 'Masterful',
      effects: ['Slash Boost: +4%', 'Pierce Boost: +4%', 'Crush Boost: +4%'],
      priority: 'Alternative',
    },
    {
      name: 'Resilient',
      effects: ['Max HP: +3%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    '6 main traits: Desperate, Dogmatic, and Precarious for Crit DMG, Heavy and Sieging for Crush DMG, Sturdy for Max HP. The Crit Rate loss on Desperate is fine with Eugenia. Doom is an alternative if you do not mind losing 3% Max HP for 12% Crit DMG.',
};
