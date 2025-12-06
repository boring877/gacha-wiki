// Emilia Build Configuration - Horizon Walker
export const emiliaBuildConfig = {
  damageScaling: 'Magic ATK',
  buildStrategyTitle: 'The Medical Research Healer',
  recommendedStigma: 'Reckoning of Sin',
  buildStrategy: [
    {
      title: 'Maximize Magic ATK with Miraculous Injection',
      description:
        "Emilia's Miraculous Injection can increase the ALL ATK based on her Magic atk, that means the higher your magic atk the more all atk you will get. this buff can give up to 1000 All atk that mean Melee and Magic and ranged ATK.",
    },
    {
      title: 'Unique trait diagnosis mechanics',
      description:
        'Emilia\'s "Diagnosis Method" trait allows Basic ATK on allies, granting AP through "Stimulus Response Test". This is not bad little bit of AP generation but nothing crazy about it. it give little tbh.',
    },
    {
      title: 'Sacred Prescription Protocol',
      description:
        'Emilia\'s "Sacred Prescription Protocol" give 3 type of buff, Crit damage, AP&SPD, and Element Boost. We mostly go with crit damage becuase it give the most out of damage output. element Boost there alot of discussion about it. but to put it simpley there is no character that really benfit from it as of today 12/6/2025.',
    },
    {
      title: 'Field Medbay',
      description:
        "Emilia's this passive quite hard to understand, first it need EX5 for character to get the most of it. It will increase the effectiveness of her buff skills. if you do 100% ALL atk it will be 120% or 180%. Same with other buff like crit damage or AP&SPD or Element Boost.",
    },
    {
      title: 'Reckoning of Sin Stigma',
      description:
        'I choose this stigma because it give AP recovery and starting AP. I am going to use everything in turn 1, turn 2 everythin on CD. so we need starting ap and ap recovery to make it work.',
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
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
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
  ],
  traitRecommendation:
    'Rational → Mysterious → Bright → Overworked → Intelligent (Core Magic ATK + AP Recovery build: +21% Magic ATK, +4% AP Recovery) → Alternatives: Persistent for more AP generation, Uncanny for more Magic ATK at HP cost',

  // Alternative Build Strategies
  alternativeBuilds: [
    {
      title: 'Crit Rate Focus Build',
      description:
        "This build achieves 140% crit rate for maximum Dawn's Grace effectiveness. Requires full EX 5 weapon for optimal AP recovery and crit rate.",
      recommendedStigma: "Dawn's Grace",
      playstyle:
        'Element Boost is part of this build, so we need character that benfits out of element boost. Element is Fire, Ice etc. we going to active our buffs 2 of them and then use our auto attack to increase the ap recovery for the carry. this will give crit damage, all attack and finally Element Boost. ',
      substatsFocus: 'Crit Rate (140% Target) → AP Recovery → Magic',
      note: 'Use crit rate substats until you reach 140%. After reaching 140% crit rate, focus on AP recovery as much as you can.',
    },
  ],
};
