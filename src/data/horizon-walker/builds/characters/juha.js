// Juha Build Configuration - Horizon Walker
export const juhaBuildConfig = {
  damageScaling: 'Ranged ATK + Team Support',
  buildStrategyTitle: 'The Saint of Bullet Team Buffer',
  recommendedStigma: "The Noble's Tactics",
  buildStrategy: [
    {
      title: 'Maximize Ranged ATK for "The Executioner" scaling',
      description:
        '"The Executioner" increases ally Ranged ATK by 76% of Juja\'s base Ranged ATK. Higher base Ranged ATK = dramatically stronger team buff for all firearm users.',
    },
    {
      title: 'Team buffer role optimization',
      description:
        '"Blessing of Firepower" grants allies +52% Ranged ATK and +28.5% AP Recovery. Position Juja to maximize buff coverage for firearm-based allies and coordinate skill timing for maximum team impact.',
    },
    {
      title: 'Balance AP Recovery for skill rotation',
      description:
        'While Ranged ATK is primary, adequate AP Recovery ensures consistent "The Executioner" uptime and skill usage. Consider 2-3 Ranged ATK substats with 1-2 AP Recovery substats for optimal sustain.',
    },
    {
      title: 'Synergy with firearm-based allies',
      description:
        '"The Noble\'s Tactics" stigma (+9% Ranged ATK, +20% Crit Rate) and team abilities specifically benefit firearm users. Build team compositions around other ranged attackers for devastating synergy.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'AP Recovery', scale: '1% - 2%', priority: 'Good Alternative' },
    { stat: 'Accuracy', scale: '3 - 5', priority: 'Optional' },
  ],
  substatsPriority: 'Ranged ATK (3 slots) → AP Recovery → Accuracy (optional)',
  traitsType: 'Ranged ATK + Team Buffer',
  recommendedTraits: [
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
      priority: 'Best',
    },
    {
      name: 'Technical',
      effects: ['Ranged ATK: +3%'],
      priority: 'Best',
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
      priority: 'Best',
    },
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
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
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Barraging → Technical → Professional → Overworked → Righteous (Core Ranged ATK + Team Buffer build: +12% Ranged ATK, +4% AP Recovery) → Alternatives: Persistent/Methodical for AP management, Efficient/Radical for different playstyles',
};
