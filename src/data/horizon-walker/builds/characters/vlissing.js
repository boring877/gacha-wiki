// Vlissing Build Configuration - Horizon Walker
export const vlissingBuildConfig = {
  damageScaling: 'Magic ATK',
  buildStrategyTitle: 'The Flow Guardian Support',
  recommendedStigma: 'The Eternal Battle',
  buildStrategy: [
    {
      title: 'Maximize Magic ATK for healing and damage',
      description:
        'Vlissing\'s "Ebb and Flow" and "Tangled Flow" both scale with Magic ATK. Higher Magic ATK means stronger healing (60% of Magic ATK + 12% of target\'s Max HP) and higher tangled flow damage (400% of Magic ATK).',
    },
    {
      title: 'Level 10 skills are essential',
      description:
        'Both "Ebb and Flow" and "Flooding Flow" must be at level 10 to get the full damage potential from Tangled Flow debuff. I personlly use Vlissing for daily tasks and story clearing!',
    },
    {
      title: 'The Eternal Battle Stigma',
      description:
        'The 4-set bonus (+35% Magic ATK when hitting 3+ enemies) works well with Vlissing\'s AOE "Sharp Wave" and makes her busted for daily clear maps.',
    },
    {
      title: 'Balance AP Recovery with Magic ATK',
      description:
        'While Magic ATK is a must, getting AP Recovery help you with doing skills or healing. But its not the main focus.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Magic ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Magic ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Magic ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'AP Recovery', scale: '1% - 2%', priority: 'Good Alternative' },
    { stat: 'Max HP', scale: '3% - 5%', priority: 'Optional' },
  ],
  substatsPriority: 'Magic ATK (3 slots) → AP Recovery → Max HP (optional)',
  traitsType: 'Magic Healer/Support',
  recommendedTraits: [
    {
      name: 'Rational',
      effects: ['Crit Rate: -2%', 'Magic ATK: +6%'],
      priority: 'Best',
    },
    {
      name: 'Mysterious',
      effects: ['Magic ATK: +5%'],
      priority: 'Best',
    },
    {
      name: 'Bright',
      effects: ['Magic ATK: +4%'],
      priority: 'Best',
    },
    {
      name: 'Intelligent',
      effects: ['Magic ATK: +3%'],
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
      name: 'Uncanny',
      effects: ['Magic ATK: +4%', 'Max HP: -3%'],
      priority: 'Alternative',
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Rational → Mysterious → Bright → Overworked → Righteous (Core Magic ATK build: +20% Magic ATK, +4% AP Recovery) → Alternatives: Persistent for more AP, Intelligent/Uncanny for extra Magic ATK',
};
