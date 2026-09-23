// Garud Build Configuration - Horizon Walker
export const garudBuildConfig = {
  damageScaling: 'Heat DMG + Magic ATK',
  buildStrategyTitle: 'The Ever-Reborn Sun Cannon',
  recommendedStigma: 'Scorching Sun',
  stigmaBuilds: [
    {
      name: 'Build 1: Full Magic ATK',
      recommendedStigma: 'Scorching Sun',
    },
    {
      name: 'Build 2: Crit DMG',
      recommendedStigma: 'Mixed 2-Set: Scorching Sun + The Four Horsemen',
      mixedSetLayout: {
        top: 'Scorching Sun',
        left: 'Scorching Sun',
        bottom: 'The Four Horsemen',
        right: 'The Four Horsemen',
      },
    },
  ],
  buildStrategy: [
    {
      title: 'Scorching Sun Is Her Best Set',
      description:
        'The 2-set gives Magic ATK +10% and the 4-set stacks Magic ATK and Heat Boost on every successful attack, which is exactly what she wants: she attacks constantly through Crimson Blaze additional Responses and Blazing Feathers procs, so the 6 stacks fill fast and stay up. Nothing else in the game feeds both Magic ATK and Heat Boost at the same time.',
    },
    {
      title: 'Full Magic ATK Substats',
      description:
        'Garud has one of the highest base Intelligence in the game (39 at full raises), and Transcendent adds another Magic ATK +50% on top, so Magic ATK substats convert directly into damage on every source she has: Incinerate, Ignite, Phoenix Feather, Blazing Feathers ticks and Flame procs all scale off Magic ATK.',
    },
    {
      title: 'The Crit DMG Second Build',
      description:
        'A Crit DMG build can also be busted: at EX+4 every successful Ignite permanently gives Crit Rate +5% and Crit DMG +10%, stacking up to 10 times. That is up to Crit Rate +50% and Crit DMG +100% by herself by the end of a long fight, so Crit DMG substats turn her into a monster once the stacks are rolling. Run her stigma as a 2+2 split here: The Four Horsemen on Bottom and Right for Crit DMG, Scorching Sun on Top and Left (Top gives Magic ATK, Left gives Heat Boost), which also adds the Scorching Sun Magic ATK +10% and Four Horsemen Crit DMG +20% 2-set bonuses at the same time. The catch: it needs EX+4 and time to stack, so the Magic ATK build stays the safer default.',
    },
  ],
  substatBuilds: [
    {
      name: 'Full Magic ATK Build (main)',
      note: 'The main build. Her kit and Transcendent multiply Magic ATK so much that Magic ATK substats win everywhere. Crit DMG or AP Recovery fill the rest.',
      stats: [
        { stat: 'Magic ATK', priority: 'Highest' },
        { stat: 'Crit DMG', priority: '2nd' },
        { stat: 'AP Recovery', priority: '2nd' },
      ],
    },
    {
      name: 'Crit DMG Build (second, EX+4+)',
      note: 'The busted alternative once Ignite stacks are rolling. Needs her at EX+4 or better so she builds her own Crit Rate.',
      stats: [
        { stat: 'Crit DMG', priority: 'Highest' },
        { stat: 'Magic ATK', priority: '2nd' },
        { stat: 'AP Recovery', priority: '2nd' },
      ],
    },
  ],
  substatsPriority:
    'Magic ATK build: Magic ATK on every slot, then Crit DMG or AP Recovery. Crit DMG build: Crit DMG on every slot, then Magic ATK or AP Recovery.',
  traitsType: 'Heat Boost + Magic ATK',
  traitsMax: 6,
  traitBuilds: [
    {
      name: 'Build 1: Full Magic ATK',
      traits: [
        {
          name: 'Blazing',
          effects: ['Heat Boost: +8%'],
        },
        {
          name: 'Scorching',
          effects: ['Heat Boost: +6%'],
        },
        {
          name: 'Mysterious',
          effects: ['Magic ATK: +5%'],
        },
        {
          name: 'Rational',
          effects: ['Magic ATK: +6%', 'Crit Rate: -2%'],
        },
        {
          name: 'Bright',
          effects: ['Magic ATK: +4%'],
        },
        {
          name: 'Intelligent',
          effects: ['Magic ATK: +3%'],
        },
      ],
    },
    {
      name: 'Build 2: Crit DMG',
      traits: [
        {
          name: 'Desperate',
          effects: ['Crit DMG: +15%', 'Crit Rate: -5%'],
        },
        {
          name: 'Dogmatic',
          effects: ['Crit DMG: +8%'],
        },
        {
          name: 'Doom',
          effects: ['Crit DMG: +12%', 'Max HP: -3%'],
        },
        {
          name: 'Precarious',
          effects: ['Crit DMG: +6%'],
        },
        {
          name: 'Blazing',
          effects: ['Heat Boost: +8%'],
        },
        {
          name: 'Scorching',
          effects: ['Heat Boost: +6%'],
        },
      ],
    },
  ],
};
