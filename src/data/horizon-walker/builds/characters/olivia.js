// Olivia Build Configuration - Horizon Walker
export const oliviaBuildConfig = {
  damageScaling: 'Melee ATK + Counterattack',
  buildStrategyTitle: 'Olivia Counterattack',
  recommendedStigma: 'Reckoning of Sin + The Thousand Mile Weave (Mixed 2-Set)',
  buildStrategy: [
    {
      title: 'Maximize Melee ATK for counterattack scaling',
      description: "Olivia's All about her Melee ATK and Slash ATK. She also Ignores Slash DEF. .",
    },
    {
      title: 'Level 10 skills',
      description:
        'Limitless Form is a must lv 10 so you can deal insane  damage. She cant crit beucase of this passive, so we need to go full Melee ATK. Also if you can get other skill lv 7 is fine tbh ! ',
    },
    {
      title: 'Stigma',
      description:
        'There are many ways to build Olivia, each person has it own way to use her, but I found this build to be the best. Reckoning of Sin + The Thousand Mile Weave (Mixed 2-Set)',
    },
    {
      title: 'counterattacks',
      description:
        "Olivia's going to do alot of counterattacks, we need to get her close enough so she can trigger them. She Can tank hits just fine.",
    },
  ],
  recommendedSubstats: [
    { stat: 'Melee ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Melee ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Melee ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'AP Recovery', scale: '1% - 2%', priority: 'Good Alternative' },
    { stat: 'Max HP', scale: '3% - 5%', priority: 'Optional' },
  ],
  substatsPriority: 'Melee ATK (3 slots) → AP Recovery → Max HP (optional)',
  traitsType: 'Melee ATK + Counterattack',
  recommendedTraits: [
    {
      name: 'Powerful',
      effects: ['Melee ATK: +4%'],
      priority: 'Best',
    },
    {
      name: 'Ferocious',
      effects: ['Melee ATK: +7%', 'Max HP: -5%'],
      priority: 'Best',
    },
    {
      name: 'Aggressive',
      effects: ['Melee ATK: +5%', 'Accuracy: -5%'],
      priority: 'Best',
    },
    {
      name: 'Acute',
      effects: ['Slash Boost: +8%'],
      priority: 'Best',
    },
    {
      name: 'Sharp',
      effects: ['Slash Boost: +6%'],
      priority: 'Best',
    },
    {
      name: 'Muscular',
      effects: ['Slash DEF: +30', 'Pierce DEF: +30', 'Crush DEF: +30', 'Melee ATK: +2%'],
      priority: 'Alternative',
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
      priority: 'Alternative',
    },
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
      priority: 'Alternative',
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Powerful → Ferocious → Aggressive → Acute → Sharp (Core damage build: +30% total Melee ATK/Slash Boost) → Alternatives: Strong for safe option (+3% ATK), Radical for all-around stats, Overworked for AP.',
};
