// Kim Ga-young Build Configuration - Horizon Walker
export const kimGaYoungBuildConfig = {
  damageScaling: 'Ranged ATK + Crit DMG',
  buildStrategyTitle: 'Stealth Assassin Sniper',
  recommendedStigma: {
    zeroDupe: 'Phantom Banquet',
    fullEx5: 'The Four Horsemen',
  },
  buildStrategy: [
    {
      title: 'Stealth',
      description:
        'Most of the time Kim is going to be in stealth mode, so you are not in danger of getting hit. You also benefit from stigma and other buffs that scale with stealth. The main problem with Kim is that she is single target and needs a lot of crit to scale, also including weak base Ranged ATK.',
    },
    {
      title: 'EX Weapon Traits',
      description:
        'Her EX weapon "SS4 Refitted Model" grants bonus stats from specific traits: Efficient (+15 AP at battle start), Competent (+10% Ranged ATK), Methodical (+5% Support ATK DMG). The one you can change is Efficient, it does not provide damage but gives good starting AP. I am not really sure we need to get into her turn even, because her job is doing support attack when someone attacks. So we really do not need AP at all.',
    },
    {
      title: 'Drone Vision Support Role',
      description:
        'With her EX weapon, Drone Vision applies debuffs (-100 All DEF, -100 Evasion). She is the ONLY unit in the game that can reduce Evasion. Her debuff of 100 Evasion is actually quite strong because of how evasion works. All DEF down is not so much though.',
    },
    {
      title: 'Increase Sniping Skill LV',
      description:
        'I do think Support ATK scales with the character normal ATK, and Kim normal ATK is Sniping, so in theory if we increase her normal ATK that will also increase the Support ATK damage.',
    },
    {
      title: 'Two Stigma Choices',
      description:
        'There are two stigma builds for her: Four Horsemen and Phantom Banquet. Both can work and there is quite a different playstyle with each. The main problem that we face is that Kim lacks crit rate to take off, and we need to somehow increase her crit rate. Without crit rate her damage really falls off and missing one crit hit is quite crucial. Four Horsemen can give higher crit rate, but you need to hit them at least 5 times to reach full potential. Phantom Banquet is more stable, and you also benefit from stealth damage increase which is not bad. Honestly, both can work.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Crit Rate', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Good Alternative' },
  ],
  substatsPriority: 'Crit DMG (2 slots) → Crit Rate → Ranged ATK (alternative)',
  traitsType: 'Crit DMG + Ranged ATK + EX Weapon Synergy',
  recommendedTraits: [
    {
      name: 'Competent',
      effects: ['AP Recovery: +2%', 'EX Weapon: +10% Ranged ATK'],
      priority: 'Best',
    },
    {
      name: 'Methodical',
      effects: ['Starting AP: +10', 'AP Recovery: -3%', 'EX Weapon: +5% Support ATK DMG'],
      priority: 'Best',
    },
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
      priority: 'Best',
    },
    {
      name: 'Heaven-sent',
      effects: ['Crit Rate: +5%'],
      priority: 'Best',
    },
    {
      name: 'Fortunate',
      effects: ['Crit Rate: +4%'],
      priority: 'Best',
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%', 'EX Weapon: +15 AP at battle start'],
      priority: 'Alternative',
    },
    {
      name: 'Technical',
      effects: ['Ranged ATK: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Competent → Methodical (EX Weapon synergy) → Doom → Heaven-sent → Fortunate (Core Crit DMG + Crit Rate build). Prioritize crit traits since Kim needs high crit to scale damage. Efficient is optional as Kim mainly does support attacks and does not need AP.',
};
