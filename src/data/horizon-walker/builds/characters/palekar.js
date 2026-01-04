// Palekar Build Configuration - Horizon Walker
export const palekarBuildConfig = {
  damageScaling: 'Magic ATK + Support Debuffer',
  buildStrategyTitle: 'The Shadow Chronicler Debuffer',
  recommendedStigma: 'Reckoning of Sin',
  buildStrategy: [
    {
      title: 'Primary Role: Team Debuffer',
      description:
        'Palekar\'s main role is applying [Unstable] debuff through "Verse of Ordeal" which reduces All DEF by 1140 and increases DMG Taken by 7.5% per Agility point above 9. This massive debuff enables your entire team to deal significantly more damage.',
    },
    {
      title: 'Support ATK with Relentless Sworddance',
      description:
        'When allies attack [Unstable] enemies with 60+ AP skills, Palekar performs a Support ATK with "Trajectory of Severance" and grants 37 AP to the triggering ally. This works with Cora Zero Cost Lava.',
    },
    {
      title: 'Evasion-based damage scaling',
      description:
        '"Blade Dance" increases Combat Skill DMG by 16.25% of Base Evasion (up to 32.5%). "Trajectory of Severance" also increases Magic ATK by 250% of Base Evasion. High Evasion substats synergize with her kit, but she still won\'t do a lot of damage. She needs crit rate and crit damage which will be hard to provide.',
    },
    {
      title: 'Reckoning of Sin Stigma synergy',
      description:
        'AP Recovery +4% and +30 Starting AP helps Palekar cast "Verse of Ordeal" (75 AP) early. The [Price of Sin] effect adds Elemental DEF -200, stacking with her [Unstable] debuff for maximum defense shred and works with Cora Heat damage well.',
    },
  
  ],
  recommendedSubstats: [
    { stat: 'Evasion', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Evasion', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Evasion', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Evasion', scale: '3% - 5%', priority: 'Best' },
    { stat: 'AP Recovery', scale: '1% - 2%', priority: 'Alternative' },
  ],
  substatsPriority: 'Evasion (all slots) → AP Recovery (if needed)',
  traitsType: 'Debuffer / Support',
  recommendedTraits: [
    {
      name: 'Agile',
      effects: ['Evade: +5%'],
      priority: 'Best',
    },
    {
      name: 'Alert',
      effects: ['Evade: +4%'],
      priority: 'Best',
    },
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
      priority: 'Best',
    },
    {
      name: 'Persistent',
      effects: ['Starting AP: -5', 'AP Recovery: +4%'],
      priority: 'Best',
    },
    {
      name: 'Gaunt',
      effects: ['Evade: +4%', 'Max HP: -3%'],
      priority: 'Best',
    },
    {
      name: 'Nimble',
      effects: ['Evade: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Improvising',
      effects: ['Starting AP: -3', 'AP Recovery: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'NOTE: She doesn\'t really need traits as a debuffer. Using scissors is too expensive, so if you leave her traits as is, that\'s fine. If you do roll traits: Agile → Alert → Overworked → Persistent → Gaunt for Evasion + AP Recovery.',
};
