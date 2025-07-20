export const clanHuntInfo = {
  overview: {
    title: 'Clan Hunt Overview',
    description:
      'Challenge bosses together with Clan Members. Each round of Clan Hunt allows players to take on 5 different bosses simultaneously. Defeating them all advances you to the next round. Boss levels will increase on select rounds, raising the difficulty.',
  },

  mechanics: [
    {
      id: 'daily-attempts',
      title: 'Daily Hunt Attempts',
      icon: '',
      description:
        'Each Clan Member has 3 hunt attempts per day. If other Clan Members defeat the boss while you are in battle, your attempt will not be consumed.',
    },
    {
      id: 'boss-battles',
      title: 'Boss Battles',
      icon: '',
      description:
        'Each Vassal of a Clan Member can only participate in one boss battle per day. DMG dealt to bosses by Clan Members is shared across the Clan.',
    },
    {
      id: 'mock-hunt',
      title: 'Mock Hunt',
      icon: '',
      description:
        'You can practice against bosses, though DMG dealt during practice will not affect their actual HP. Practice attempts do not consume daily battle attempts. Vassals used in practice do not count towards their daily usage limit.',
    },
    {
      id: 'damage-settlement',
      title: 'DMG Settlement',
      icon: '',
      description:
        "Any DMG dealt to bosses accumulates towards the Total DMG for a Clan Hunt. If DMG dealt exceeds the boss's remaining HP, only the HP is counted.",
    },
    {
      id: 'ranking-rewards',
      title: 'Ranking and Rewards',
      icon: '',
      description:
        'When Clan Members defeat a boss, rewards will be sent to all members via mail. At the end of the Hunt Season, Clan rankings will be determined based on the total DMG dealt by all members during the event. Final Clan Hunt rewards will be sent via mail based on rankings.',
    },
  ],

  // Boss Database section
  bossDatabase: {
    linkText: 'Clan Hunt Boss Database',
    linkUrl: '/guides/silver-and-blood/boss-database/',
  },

  // Chart analysis content
  chartAnalysis: {
    sectionTitle: 'Ranking Rewards Analysis',
    sectionDescription:
      'Visualize the diminishing returns pattern and understand the relationship between clan ranking improvements and reward gains.',

    charts: [
      {
        id: 'absolute',
        title: 'Absolute Mead Rewards by Rank',
        description: 'Shows the raw mead rewards for each ranking tier',
      },
      {
        id: 'differences',
        title: 'Mead Lost Between Consecutive Ranks',
        description:
          'Shows how much mead you lose by dropping one rank (diminishing returns pattern)',
      },
      {
        id: 'cumulative',
        title: 'Total Mead Lost vs Rank 1',
        description: 'Shows cumulative mead loss compared to achieving Rank 1',
      },
      {
        id: 'efficiency',
        title: 'Rank Improvement ROI (Top 20)',
        description:
          'Shows the efficiency of improving by one rank (mead gained per rank improvement)',
      },
    ],

    conclusions: {
      title: 'Analysis Conclusions',
      tldr: {
        title: 'TLDR - Optimal Clan Hunt Targets',
        text: "Try reaching Rank 1 in Clan Hunt if possible. If you can't, target Ranks 4-10 as your secondary goal. If that's not achievable, aim for Top 50. These represent the 3 most optimal target tiers. After Rank 50, it's just about participating in Clan Hunt - the ranking doesn't matter much at that point.",
      },
      content: [
        {
          id: 'top-tier-competition',
          text: 'The data reveals a clear diminishing returns pattern in clan hunt rewards. The most significant finding is that achieving Rank 1 versus Rank 2 provides the largest single benefit of 1,500 mead (equivalent to 6.25 days of farming). This massive gap suggests that reaching the absolute top position should be the highest priority for competitive clans.',
        },
        {
          id: 'optimal-balance',
          text: 'For clans unable to achieve top rankings, Ranks 4-10 represent an optimal balance between effort and reward, with differences of only 200-600 mead between consecutive ranks. This range offers substantial rewards while avoiding the extreme competition for top positions.',
        },
        {
          id: 'plateau-effect',
          text: 'Beyond the Top 50, the reward structure demonstrates a pronounced plateau effect where rank improvements yield minimal gains of approximately 100-200 mead. This indicates that clans in lower tiers should focus on consistent participation rather than intensive competition, as the marginal benefits of small rank improvements become negligible.',
        },
      ],
    },
  },

  // Calculator content
  calculator: {
    title: 'Clan Hunt Rewards Calculator',
    description:
      "Calculate how many days of normal farming you save based on your clan's ranking performance.",
  },
};

// Clan Hunt Rewards Data
export const clanHuntRewards = {
  // Top 100 rank-based rewards
  rankBased: [
    { rank: '1', displayRank: '1st', clanCrest: 8000, meadOfRebirth: 15000 },
    { rank: '2', displayRank: '2nd', clanCrest: 7200, meadOfRebirth: 13500 },
    { rank: '3', displayRank: '3rd', clanCrest: 6700, meadOfRebirth: 12500 },
    { rank: '4', displayRank: '4th', clanCrest: 6400, meadOfRebirth: 12000 },
    { rank: '5', displayRank: '5th', clanCrest: 6200, meadOfRebirth: 11800 },
    { rank: '6', displayRank: '6th', clanCrest: 6000, meadOfRebirth: 11600 },
    { rank: '7', displayRank: '7th', clanCrest: 5800, meadOfRebirth: 11400 },
    { rank: '8', displayRank: '8th', clanCrest: 5600, meadOfRebirth: 11200 },
    { rank: '9', displayRank: '9th', clanCrest: 5400, meadOfRebirth: 11000 },
    { rank: '10', displayRank: '10th', clanCrest: 5200, meadOfRebirth: 10800 },
    { rank: '11-15', displayRank: '11th-15th', clanCrest: 5000, meadOfRebirth: 10000 },
    { rank: '16-20', displayRank: '16th-20th', clanCrest: 4850, meadOfRebirth: 9800 },
    { rank: '21-30', displayRank: '21st-30th', clanCrest: 4700, meadOfRebirth: 9600 },
    { rank: '31-40', displayRank: '31st-40th', clanCrest: 4550, meadOfRebirth: 9400 },
    { rank: '41-50', displayRank: '41st-50th', clanCrest: 4400, meadOfRebirth: 9200 },
    { rank: '51-60', displayRank: '51st-60th', clanCrest: 4300, meadOfRebirth: 8800 },
    { rank: '61-70', displayRank: '61st-70th', clanCrest: 4200, meadOfRebirth: 8600 },
    { rank: '71-80', displayRank: '71st-80th', clanCrest: 4100, meadOfRebirth: 8400 },
    { rank: '81-90', displayRank: '81st-90th', clanCrest: 4000, meadOfRebirth: 8200 },
    { rank: '91-100', displayRank: '91st-100th', clanCrest: 3900, meadOfRebirth: 8000 },
  ],

  // Percentage-based rewards (beyond top 100)
  percentageBased: [
    {
      percentage: '0.00%-3.00%',
      displayPercentage: 'Top 0-3%',
      clanCrest: 3750,
      meadOfRebirth: 7600,
    },
    {
      percentage: '3.00%-4.00%',
      displayPercentage: 'Top 3-4%',
      clanCrest: 3725,
      meadOfRebirth: 7500,
    },
    {
      percentage: '4.00%-5.00%',
      displayPercentage: 'Top 4-5%',
      clanCrest: 3700,
      meadOfRebirth: 7400,
    },
    {
      percentage: '5.00%-6.00%',
      displayPercentage: 'Top 5-6%',
      clanCrest: 3675,
      meadOfRebirth: 7300,
    },
    {
      percentage: '6.00%-7.00%',
      displayPercentage: 'Top 6-7%',
      clanCrest: 3650,
      meadOfRebirth: 7200,
    },
    {
      percentage: '7.00%-8.00%',
      displayPercentage: 'Top 7-8%',
      clanCrest: 3625,
      meadOfRebirth: 7100,
    },
    {
      percentage: '8.00%-9.00%',
      displayPercentage: 'Top 8-9%',
      clanCrest: 3600,
      meadOfRebirth: 7000,
    },
    {
      percentage: '9.00%-10.00%',
      displayPercentage: 'Top 9-10%',
      clanCrest: 3575,
      meadOfRebirth: 6900,
    },
    {
      percentage: '10.00%-11.00%',
      displayPercentage: 'Top 10-11%',
      clanCrest: 3550,
      meadOfRebirth: 6800,
    },
    {
      percentage: '11.00%-12.00%',
      displayPercentage: 'Top 11-12%',
      clanCrest: 3525,
      meadOfRebirth: 6700,
    },
    {
      percentage: '12.00%-14.50%',
      displayPercentage: 'Top 12-14.5%',
      clanCrest: 3375,
      meadOfRebirth: 6200,
    },
    {
      percentage: '14.50%-17.00%',
      displayPercentage: 'Top 14.5-17%',
      clanCrest: 3350,
      meadOfRebirth: 6100,
    },
    {
      percentage: '17.00%-19.50%',
      displayPercentage: 'Top 17-19.5%',
      clanCrest: 3325,
      meadOfRebirth: 6000,
    },
    {
      percentage: '19.50%-22.00%',
      displayPercentage: 'Top 19.5-22%',
      clanCrest: 3300,
      meadOfRebirth: 5900,
    },
    {
      percentage: '22.00%-24.50%',
      displayPercentage: 'Top 22-24.5%',
      clanCrest: 3275,
      meadOfRebirth: 5800,
    },
    {
      percentage: '24.50%-27.00%',
      displayPercentage: 'Top 24.5-27%',
      clanCrest: 3250,
      meadOfRebirth: 5700,
    },
    {
      percentage: '27.00%-29.50%',
      displayPercentage: 'Top 27-29.5%',
      clanCrest: 3225,
      meadOfRebirth: 5600,
    },
    {
      percentage: '29.50%-32.00%',
      displayPercentage: 'Top 29.5-32%',
      clanCrest: 3200,
      meadOfRebirth: 5500,
    },
    {
      percentage: '32.00%-34.50%',
      displayPercentage: 'Top 32-34.5%',
      clanCrest: 3175,
      meadOfRebirth: 5400,
    },
    {
      percentage: '34.50%-37.00%',
      displayPercentage: 'Top 34.5-37%',
      clanCrest: 3150,
      meadOfRebirth: 5300,
    },
    {
      percentage: '37.00%-40.00%',
      displayPercentage: 'Top 37-40%',
      clanCrest: 3000,
      meadOfRebirth: 4800,
    },
    {
      percentage: '40.00%-43.00%',
      displayPercentage: 'Top 40-43%',
      clanCrest: 2975,
      meadOfRebirth: 4700,
    },
    {
      percentage: '43.00%-46.00%',
      displayPercentage: 'Top 43-46%',
      clanCrest: 2950,
      meadOfRebirth: 4600,
    },
    {
      percentage: '46.00%-49.00%',
      displayPercentage: 'Top 46-49%',
      clanCrest: 2925,
      meadOfRebirth: 4500,
    },
    {
      percentage: '49.00%-52.00%',
      displayPercentage: 'Top 49-52%',
      clanCrest: 2900,
      meadOfRebirth: 4400,
    },
    {
      percentage: '52.00%-55.00%',
      displayPercentage: 'Top 52-55%',
      clanCrest: 2875,
      meadOfRebirth: 4300,
    },
    {
      percentage: '55.00%-58.00%',
      displayPercentage: 'Top 55-58%',
      clanCrest: 2850,
      meadOfRebirth: 4200,
    },
    {
      percentage: '58.00%-61.00%',
      displayPercentage: 'Top 58-61%',
      clanCrest: 2825,
      meadOfRebirth: 4100,
    },
    {
      percentage: '61.00%-64.00%',
      displayPercentage: 'Top 61-64%',
      clanCrest: 2800,
      meadOfRebirth: 4000,
    },
    {
      percentage: '64.00%-67.00%',
      displayPercentage: 'Top 64-67%',
      clanCrest: 2775,
      meadOfRebirth: 3900,
    },
    {
      percentage: '67.00%-70.30%',
      displayPercentage: 'Top 67-70.3%',
      clanCrest: 2625,
      meadOfRebirth: 3400,
    },
    {
      percentage: '70.30%-73.60%',
      displayPercentage: 'Top 70.3-73.6%',
      clanCrest: 2600,
      meadOfRebirth: 3300,
    },
    {
      percentage: '73.60%-76.90%',
      displayPercentage: 'Top 73.6-76.9%',
      clanCrest: 2575,
      meadOfRebirth: 3200,
    },
    {
      percentage: '76.90%-80.20%',
      displayPercentage: 'Top 76.9-80.2%',
      clanCrest: 2550,
      meadOfRebirth: 3100,
    },
    {
      percentage: '80.20%-83.50%',
      displayPercentage: 'Top 80.2-83.5%',
      clanCrest: 2525,
      meadOfRebirth: 3000,
    },
    {
      percentage: '83.50%-86.80%',
      displayPercentage: 'Top 83.5-86.8%',
      clanCrest: 2500,
      meadOfRebirth: 2900,
    },
    {
      percentage: '86.80%-90.10%',
      displayPercentage: 'Top 86.8-90.1%',
      clanCrest: 2475,
      meadOfRebirth: 2800,
    },
    {
      percentage: '90.10%-93.40%',
      displayPercentage: 'Top 90.1-93.4%',
      clanCrest: 2450,
      meadOfRebirth: 2700,
    },
    {
      percentage: '93.40%-96.70%',
      displayPercentage: 'Top 93.4-96.7%',
      clanCrest: 2425,
      meadOfRebirth: 2600,
    },
    {
      percentage: '96.70%-100.00%',
      displayPercentage: 'Top 96.7-100%',
      clanCrest: 2400,
      meadOfRebirth: 2500,
    },
  ],
};

// Calculator configuration
export const clanHuntCalculatorConfig = {
  dailyMeadIncome: 240, // Base daily farming income
  sireneSSRCost: 10000, // Cost for 1 SSR Sirene

  getAllRewards() {
    return [...clanHuntRewards.rankBased, ...clanHuntRewards.percentageBased];
  },

  getRewardByRank(rank) {
    return clanHuntRewards.rankBased.find(reward => reward.rank === rank);
  },

  getRewardByPercentage(percentage) {
    return clanHuntRewards.percentageBased.find(reward => reward.percentage === percentage);
  },
};

// Clan Hunt Calculator Class
export class ClanHuntCalculator {
  constructor() {
    this.config = clanHuntCalculatorConfig;
  }

  calculateDaysSaved(meadReward) {
    if (!meadReward || meadReward <= 0) return 0;
    return Math.round((meadReward / this.config.dailyMeadIncome) * 10) / 10;
  }

  calculateIncomeBoost(meadReward) {
    if (!meadReward || meadReward <= 0) return 0;
    return Math.round((meadReward / this.config.dailyMeadIncome) * 100 * 10) / 10;
  }

  calculateSireneProgress(meadReward, currentMead = 0) {
    const totalMead = currentMead + meadReward;
    const progress = Math.min(totalMead / this.config.sireneSSRCost, 1);
    return Math.round(progress * 100 * 10) / 10;
  }

  calculateRemainingDaysToSirene(meadReward, currentMead = 0) {
    const totalMead = currentMead + meadReward;
    const remaining = this.config.sireneSSRCost - totalMead;
    if (remaining <= 0) return 0;
    return Math.ceil(remaining / this.config.dailyMeadIncome);
  }

  calculateResults(ranking, currentMead = 0) {
    let reward = null;

    // Check if it's a rank-based or percentage-based ranking
    if (ranking.includes('%')) {
      reward = this.config.getRewardByPercentage(ranking);
    } else {
      reward = this.config.getRewardByRank(ranking);
    }

    if (!reward) return null;

    const meadReward = reward.meadOfRebirth;
    const daysSaved = this.calculateDaysSaved(meadReward);
    const incomeBoost = this.calculateIncomeBoost(meadReward);
    const sireneProgress = this.calculateSireneProgress(meadReward, currentMead);
    const remainingDays = this.calculateRemainingDaysToSirene(meadReward, currentMead);

    return {
      ranking: reward.displayRank || reward.displayPercentage,
      meadReward,
      clanCrestReward: reward.clanCrest,
      daysSaved,
      incomeBoost,
      sireneProgress,
      remainingDays,
      isComplete: sireneProgress >= 100,
    };
  }
}

// Chart Data Processing Class
export class ClanHuntChartData {
  constructor() {
    this.allRewards = [...clanHuntRewards.rankBased, ...clanHuntRewards.percentageBased];
  }

  // Get data for absolute rewards chart
  getAbsoluteRewardsData() {
    return this.allRewards.map((reward, index) => ({
      x: index + 1,
      y: reward.meadOfRebirth,
      label: reward.displayRank || reward.displayPercentage,
      meadOfRebirth: reward.meadOfRebirth,
      clanCrest: reward.clanCrest,
      daysSaved: Math.round((reward.meadOfRebirth / 240) * 10) / 10,
    }));
  }

  // Get data for rank-to-rank differences
  getRankDifferenceData() {
    const differences = [];
    for (let i = 1; i < this.allRewards.length; i++) {
      const current = this.allRewards[i];
      const previous = this.allRewards[i - 1];
      const difference = previous.meadOfRebirth - current.meadOfRebirth;
      const percentageChange = (difference / previous.meadOfRebirth) * 100;

      differences.push({
        x: i + 1,
        y: difference,
        label: current.displayRank || current.displayPercentage,
        previousLabel: previous.displayRank || previous.displayPercentage,
        percentageChange: Math.round(percentageChange * 10) / 10,
        daysDifference: Math.round((difference / 240) * 10) / 10,
      });
    }
    return differences;
  }

  // Get data for cumulative loss compared to Rank 1
  getCumulativeLossData() {
    const rank1Mead = this.allRewards[0].meadOfRebirth;
    return this.allRewards.map((reward, index) => ({
      x: index + 1,
      y: rank1Mead - reward.meadOfRebirth,
      label: reward.displayRank || reward.displayPercentage,
      meadOfRebirth: reward.meadOfRebirth,
      percentageLoss: Math.round(((rank1Mead - reward.meadOfRebirth) / rank1Mead) * 100 * 10) / 10,
      daysLost: Math.round(((rank1Mead - reward.meadOfRebirth) / 240) * 10) / 10,
    }));
  }

  // Get efficiency data (how much improvement per rank change)
  getEfficiencyData() {
    const efficiency = [];
    for (let i = 1; i < Math.min(this.allRewards.length, 20); i++) {
      // Focus on top 20 for clarity
      const current = this.allRewards[i];
      const previous = this.allRewards[i - 1];
      const meadGain = previous.meadOfRebirth - current.meadOfRebirth;
      const rankImprovement = 1; // Always 1 rank improvement
      const efficiency_ratio = meadGain / rankImprovement;

      efficiency.push({
        x: i + 1,
        y: efficiency_ratio,
        label: `${previous.displayRank || previous.displayPercentage} → ${current.displayRank || current.displayPercentage}`,
        meadGain,
        daysGained: Math.round((meadGain / 240) * 10) / 10,
      });
    }
    return efficiency;
  }

  // Get key breakpoints for annotations
  getBreakpoints() {
    const differences = this.getRankDifferenceData();
    const breakpoints = [];

    // Find the largest drops
    const sorted = [...differences].sort((a, b) => b.y - a.y);
    const top5Drops = sorted.slice(0, 5);

    top5Drops.forEach(drop => {
      breakpoints.push({
        x: drop.x,
        label: `Biggest Drop: ${drop.y} mead`,
        type: 'major-drop',
      });
    });

    // Add tier transition points
    breakpoints.push({
      x: 21, // Around where rank-based transitions to percentage
      label: 'Rank → Percentage Transition',
      type: 'tier-change',
    });

    return breakpoints;
  }
}

export const getClanHuntMechanics = () => {
  return clanHuntInfo.mechanics;
};

export const getClanHuntMechanicById = id => {
  return clanHuntInfo.mechanics.find(mechanic => mechanic.id === id);
};
