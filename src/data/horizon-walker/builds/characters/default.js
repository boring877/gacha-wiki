// Default Build Configuration for Characters without Specific Builds
export const defaultBuildConfig = {
  damageScaling: 'Ranged ATK',
  buildStrategyTitle: 'The Executioner Focus',
  recommendedStigma: 'The Wind that Wanders the World',
  buildStrategy: [
    {
      title: 'Stack more Ranged ATK for "The Executioner" buff',
      description:
        '"The Executioner" is a buff that increases based on your base Ranged ATK. Increasing your base Ranged ATK directly increases the buff effectiveness.',
    },
    {
      title: "Don't need full AP build",
      description:
        "Since there aren't many good stigma sets that increase Ranged ATK, AP recovery only option we have!",
    },
    {
      title: 'Full AP Recovery vs Ranged ATK',
      description:
        'The reason why you might go for full AP recovery for sub stats is to be able to activate The Executioner twice! However, The Executioner does not stack up twice, so going full AP not that worth it.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'AP Recovery', scale: '1% - 2%', priority: 'Good Alternative' },
    { stat: 'Starting AP', scale: '3 - 5', priority: 'Optional' },
  ],
  substatsPriority: 'Ranged ATK (3 slots) → AP Recovery → Starting AP (optional)',
  traitsType: 'Ranged ATK',
  recommendedTraits: [
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
      priority: 'Best',
    },
    { name: 'Technical', effects: ['Ranged ATK: +3%'], priority: 'Best' },
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
      priority: 'Best',
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
      priority: 'Best',
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
      priority: 'Best',
    },
    {
      name: 'Persistent',
      effects: ['Starting AP: -5', 'AP Recovery: +4%'],
      priority: 'Alternative',
    },
    {
      name: 'Methodical',
      effects: ['Starting AP: 10', 'AP Recovery: -3%'],
      priority: 'Alternative',
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Barraging → Technical → Overworked → Efficient → Righteous (Core build) → Alternatives: Persistent/Methodical for AP management, Professional/Radical for damage focus',
};
