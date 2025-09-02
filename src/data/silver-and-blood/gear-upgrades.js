// Silver and Blood - End Game Gear Upgrades Data

export const gearUpgradesData = {
  meta: {
    title: 'End Game Gear Upgrades - Silver and Blood - GachaWiki',
    description:
      'Complete guide to Tier 9 gear upgrades, Echo blessings, sub-stats, and SoulsStrike mechanics in Silver and Blood',
    lastUpdated: new Date('2025-01-02'),
  },

  introduction: {
    title: 'End Game Gear Upgrades',
    subtitle: '',
    description:
      'At Tier 9, you can start opening sub stats on your gears, these gears have to have:',
    requirements: ['Faction must match the character equipped', 'Fully enhanced to Level 5'],
    afterRequirements: 'Then you will be able to use the hammer - SoulsStrike - to open the slots.',
  },

  hammerMechanics: {
    title: 'SoulsStrike Hammer System',
    description:
      'The first hammer costs 1 and randomly opens 1 to 3 slots. The maximum is 3 slots.',
    details: [
      'Once you apply your first hammer to the item, the background color changes.',
      'Once you click on the item, you will see more options than before.',
      'You can see we have Echo blessing 2 out of 3, our hammer was oki!',
      "Let's go through each button:",
    ],
    buttons: [
      '1- Enhance, Just increasing the LV, maximum is 5!',
      '2- Recast is rerolling the echo blessing basically the sub stats!',
    ],
  },

  slotRates: {
    title: "Each Slot's Blessing or Sub-stat Rate",
    description: 'First:',
    rates: [
      { slot: 1, rate: 100.0, description: '' },
      { slot: 2, rate: 50.0, description: '' },
      { slot: 3, rate: 30.0, description: '' },
    ],
    note: "So we always have 100% chance to get at least 1 sub-stat. However, it's not guaranteed to get 2 or 3 slots. When you recast, sometimes you get 1 slot, sometimes 2 slots, and sometimes 3 slots!",
  },

  blessings: {
    title: 'All Blessings',
    description: 'All Blessings or Sub-stats',
    veryImportant:
      'Very important note: The same type of blessing cannot be obtained repeatedly. Blessings already obtained are excluded from rolls.',
    formula:
      'The roll formula is as follows: [Listed Rate of a Blessing ÷ (100% - Total Rate of Excluded Blessings)].',
    additional:
      "For locked blessings, their level and type won't change during recast or refinement.",
    priority: {
      tier1: [
        'Bloodsoul Recovery - Most important sub-stat. Having it on all your gear really helps you gain bloodsoul faster and activate your skills quicker!',
      ],
      tier2: ['All DMG / All DMG Reduction and ATK SPD should be the 2nd most important stats.'],
      tier3: ['P/M DMG, Healing Bonus, and Crit DMG are 3rd most important stats.'],
      note: 'These can vary from character to character, but overall this is the general rule.',
    },
    list: [
      { name: 'CRIT Rate', rate: 12.0, priority: 4 },
      { name: 'P. DMG Bonus', rate: 12.0, priority: 3 },
      { name: 'CRIT DMG', rate: 12.0, priority: 3 },
      { name: 'M. DMG Bonus', rate: 12.0, priority: 3 },
      { name: 'All DMG Bonus', rate: 11.0, priority: 2 },
      { name: 'All DMG Reduction', rate: 11.0, priority: 2 },
      { name: 'Received Healing Bonus', rate: 10.0, priority: 3 },
      { name: 'ATK SPD', rate: 10.0, priority: 2 },
      { name: 'Bloodsoul Recovery', rate: 10.0, priority: 1 },
    ],
  },

  blessingTiers: {
    title: 'Blessing Tier Values',
    description:
      'Each blessing type has multiple levels (usually 15), each featuring different values. Thanks to Kuratha, where I got this table from: https://docs.google.com/spreadsheets/d/1HHeLtNCRas2wk5yzXc8QR233pIL8gqSbfnaPnRFw25o/edit?gid=451377756#gid=451377756',
    tiers: [
      {
        blessing: 'P. DMG Bonus',
        dropRate: '12%',
        range: '4%-12%',
        values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      },
      {
        blessing: 'M. DMG Bonus',
        dropRate: '12%',
        range: '4%-12%',
        values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      },
      {
        blessing: 'CRIT Rate',
        dropRate: '12%',
        range: '4%-12%',
        values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      },
      {
        blessing: 'CRIT DMG',
        dropRate: '12%',
        range: '6.7%-20%',
        values: [6.7, 7.6, 8.6, 9.5, 10.5, 11.4, 12.4, 13.3, 14.3, 15.2, 16.2, 17.1, 18.1, 19, 20],
      },
      {
        blessing: 'All DMG Bonus',
        dropRate: '11%',
        range: '4%-12%',
        values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      },
      {
        blessing: 'All DMG Reduction',
        dropRate: '11%',
        range: '4%-12%',
        values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      },
      {
        blessing: 'Received Healing Bonus',
        dropRate: '10%',
        range: '6.7%-20%',
        values: [6.7, 7.6, 8.6, 9.5, 10.5, 11.4, 12.4, 13.3, 14.3, 15.2, 16.2, 17.1, 18.1, 19, 20],
      },
      {
        blessing: 'ATK SPD',
        dropRate: '10%',
        range: '6.6%-20%',
        values: [6.6, 7.6, 8.6, 9.6, 10.4, 11.4, 12.4, 13.4, 14.2, 15.2, 16.2, 17.2, 18, 19, 20],
      },
      {
        blessing: 'Bloodsoul Recovery',
        dropRate: '10%',
        range: '30-100',
        values: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      },
    ],
  },

  mechanics: {
    enhance: {
      title: 'Enhance',
      description: 'Enhance - Just increases the level, maximum is 5.',
      icon: '',
    },
    recast: {
      title: 'Recast',
      description: 'Recast is rerolling the echo blessing (basically the sub-stats).',
      subtitle: "Let's go in-depth about recasting or rerolling the sub-stats:",
      details: [
        'If you get the sub-stats or blessings you want, you can always lock them.',
        'The cost increases by 1 for each lock. So if you lock only 1 stat or blessing, it will cost 1 hammer. 2 stats = 2 hammers.',
        'After locking Bloodsoul Recovery, you can see the cost increased to 2 hammers.',
        'Before it was only 1 hammer to recast. Once you recast or reroll, you always keep your locked Bloodsoul Recovery and might have a chance to get 3 slots!',
      ],
      formula:
        'The roll formula is as follows: [Listed Rate of a Blessing ÷ (100% - Total Rate of Excluded Blessings)].',
      important:
        "Important Note: It's highly recommended to have only 1 slot locked and get the rest by recasting. Otherwise, the hammer cost will be too high!",
      note: "It's quite hard to get these hammers, so make sure you use them carefully!",
      veryImportant:
        'Very important note: The same type of blessing cannot be obtained repeatedly. Blessings already obtained are excluded from rolls.',
      additional:
        "For locked blessings, their level and type won't change during recast or refinement.",
    },
    refinement: {
      title: 'Refinement',
      description:
        "Lastly, Refinement - It's basically changing the level of the sub-stat or blessing. We have 15 levels, and refinement changes them either higher or lower. This is for fully maxing and should only be done at endgame once you've upgraded your gear to 3 slots!",
      details: [
        'The good thing is we can keep the original if we roll a lower level.',
        'Notice the hammer cost is 2 because we have locked stats.',
        'You can unlock it after you get 3 slots. The lock in refinement helps you not lose levels, but having locked stats in general is a bad idea in refinement.',
      ],
    },
  },

  tips: [],

  references: {
    credits: 'Thanks to Kuratha, where I got this table from',
    source:
      'https://docs.google.com/spreadsheets/d/1HHeLtNCRas2wk5yzXc8QR233pIL8gqSbfnaPnRFw25o/edit?gid=451377756#gid=451377756',
  },
};

// Helper functions for calculations
export const calculateRecastCost = lockedBlessings => {
  return 1 + lockedBlessings;
};

export const calculateRollChance = (blessingRate, excludedRatesTotal) => {
  return blessingRate / (100 - excludedRatesTotal);
};

export const getBlessingPriority = blessingName => {
  const blessing = gearUpgradesData.blessings.list.find(b => b.name === blessingName);
  return blessing ? blessing.priority : 5;
};

export const getBlessingTierValue = (blessingName, tier) => {
  const blessing = gearUpgradesData.blessingTiers.tiers.find(b => b.blessing === blessingName);
  if (!blessing || tier < 1 || tier > 15) return null;
  return blessing.values[tier - 1];
};
