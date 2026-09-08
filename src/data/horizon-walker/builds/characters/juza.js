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
        'This build only works with Eugenia on the team. Eugenia buff is what pushes Juza to full Crit Rate, and without full Crit Rate the whole crit damage plan falls apart. With her buff up, the crit damage build gives you so much more damage and every hit pays off.',
    },
    {
      title: 'No Eugenia, No Crit Build',
      description:
        'If you cannot pair Juza with Eugenia, do not run this build at all. You will be sitting on a huge Crit DMG stat that almost never crits. In that case go full Max HP instead and play her as a durable bruiser that leans on her HP-scaling skills.',
    },
    {
      title: 'Stigma Layout',
      description:
        'Lifebound on the left and top stigma: the Twig (left) takes Crush Boost as its base stat and the Sword (top) takes Max HP. The Four Horsemen on the bottom and right: the Red Horseman of War (bottom) gives Crit DMG and the Blue Horseman of Death (right) gives Max HP. The two 2-set bonuses together give Max HP from Lifebound and Crit DMG +20% from The Four Horsemen, which is exactly what this build wants.',
    },
    {
      title: 'Substats',
      description:
        'Crit DMG is the first priority on every stigma piece. Whatever rolls are left go into Max HP so she keeps enough bulk for Head-On Clash and the Lifebound set value.',
    },
    {
      title: 'Traits',
      description:
        'Lock Crit DMG first, then Crush DMG, then one Max HP trait. That order keeps the damage scaling up while still grabbing a bit of survivability at the end.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Max HP', scale: '4% - 6%', priority: 'Good' },
    { stat: 'Max HP', scale: '4% - 6%', priority: 'Good' },
  ],
  substatsPriority: 'Crit DMG first, then Max HP',
  traitsType: 'Crit DMG + Crush DMG + Max HP',
  recommendedTraits: [
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
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
      name: 'Resilient',
      effects: ['Max HP: +3%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation: 'Doom first, then Heavy or Sieging, then one Max HP trait such as Sturdy',
};
