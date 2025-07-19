// Ancestral Vault Calculator Utility
// Calculates Mead of Rebirth requirements for Sirene summoning

export class AncestralVaultCalculator {
  constructor() {
    this.DAILY_INCOME = 280; // Total daily Mead of Rebirth income
    this.SSR_COST = 10000; // Cost per SSR copy
    this.MAX_COPIES = 11; // Maximum copies for full constellation

    // Task breakdown
    this.TASKS = {
      task1: 80,
      task2: 80,
      task3: 80,
      bonusTask: 100,
      total: 280,
    };
  }

  /**
   * Calculate the cost for a specific number of copies
   * @param {number} copies - Number of copies to calculate
   * @returns {number} Total cost in Mead of Rebirth
   */
  calculateCost(copies) {
    if (copies < 1 || copies > this.MAX_COPIES) {
      throw new Error(`Copies must be between 1 and ${this.MAX_COPIES}`);
    }
    return copies * this.SSR_COST;
  }

  /**
   * Calculate days needed to reach a specific number of copies
   * @param {number} copies - Target number of copies
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Object} Calculation results
   */
  calculateDaysNeeded(copies, currentMead = 0) {
    const totalCost = this.calculateCost(copies);
    const remainingCost = Math.max(0, totalCost - currentMead);
    const daysNeeded = Math.ceil(remainingCost / this.DAILY_INCOME);

    return {
      copies,
      totalCost,
      currentMead,
      remainingCost,
      daysNeeded,
      progressPercentage: ((currentMead / totalCost) * 100).toFixed(1),
    };
  }

  /**
   * Calculate multiple targets at once
   * @param {Array} targets - Array of copy targets
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Array} Array of calculation results
   */
  calculateMultipleTargets(targets, currentMead = 0) {
    return targets.map(target => this.calculateDaysNeeded(target, currentMead));
  }

  /**
   * Calculate time to reach specific milestones
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Object} Milestone calculations
   */
  calculateMilestones(currentMead = 0) {
    const milestones = [1, 2, 3, 6, 11];
    const results = {};

    milestones.forEach(copies => {
      results[`copies_${copies}`] = this.calculateDaysNeeded(copies, currentMead);
    });

    return results;
  }

  /**
   * Calculate how much mead can be earned in a specific number of days
   * @param {number} days - Number of days
   * @returns {number} Total mead earned
   */
  calculateMeadInDays(days) {
    return days * this.DAILY_INCOME;
  }

  /**
   * Calculate what can be achieved with current mead
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Object} Achievement analysis
   */
  analyzeCurrentProgress(currentMead) {
    const maxAffordableCopies = Math.floor(currentMead / this.SSR_COST);
    const remainingMead = currentMead % this.SSR_COST;
    const progressToNextCopy = ((remainingMead / this.SSR_COST) * 100).toFixed(1);

    return {
      currentMead,
      maxAffordableCopies,
      remainingMead,
      progressToNextCopy,
      daysToNextCopy: Math.ceil((this.SSR_COST - remainingMead) / this.DAILY_INCOME),
    };
  }

  /**
   * Calculate efficiency metrics
   * @param {number} targetCopies - Target number of copies
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Object} Efficiency analysis
   */
  calculateEfficiency(targetCopies, currentMead = 0) {
    const result = this.calculateDaysNeeded(targetCopies, currentMead);
    const totalDaysForMax = Math.ceil(this.calculateCost(this.MAX_COPIES) / this.DAILY_INCOME);
    const efficiencyRatio = ((result.daysNeeded / totalDaysForMax) * 100).toFixed(1);

    return {
      ...result,
      totalDaysForMax,
      efficiencyRatio,
      isRecommended: targetCopies <= 6, // Generally recommended stopping point
      powerSpike: targetCopies === 6, // Major power spike at 6 copies
    };
  }

  /**
   * Get common target recommendations
   * @returns {Array} Array of recommended targets
   */
  getRecommendedTargets() {
    return [
      {
        copies: 1,
        name: 'Base Character',
        description: 'Unlock Sirene with basic abilities',
        priority: 'High',
        reasoning: 'Essential for gameplay access',
      },
      {
        copies: 2,
        name: 'First Constellation',
        description: 'Unlock first major enhancement',
        priority: 'High',
        reasoning: 'Significant power increase',
      },
      {
        copies: 6,
        name: 'Power Spike',
        description: 'Major constellation milestone',
        priority: 'Medium',
        reasoning: 'Optimal cost-to-power ratio',
      },
      {
        copies: 11,
        name: 'Maximum Power',
        description: 'Full constellation unlock',
        priority: 'Low',
        reasoning: 'Luxury upgrade for dedicated players',
      },
    ];
  }

  /**
   * Format time display
   * @param {number} days - Number of days
   * @returns {string} Formatted time string
   */
  formatTimeDisplay(days) {
    if (days === 0) return 'Available now';
    if (days === 1) return '1 day';
    if (days < 7) return `${days} days`;
    if (days < 30) {
      const weeks = Math.floor(days / 7);
      const remainingDays = days % 7;
      let result = `${weeks} week${weeks > 1 ? 's' : ''}`;
      if (remainingDays > 0) {
        result += ` ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
      }
      return result;
    }

    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    let result = `${months} month${months > 1 ? 's' : ''}`;
    if (remainingDays > 0) {
      result += ` ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    }
    return result;
  }

  /**
   * Export calculation results for external use
   * @param {number} copies - Target copies
   * @param {number} currentMead - Current mead amount
   * @returns {Object} Formatted results for display
   */
  exportResults(copies, currentMead = 0) {
    const calculation = this.calculateDaysNeeded(copies, currentMead);
    const efficiency = this.calculateEfficiency(copies, currentMead);
    const timeDisplay = this.formatTimeDisplay(calculation.daysNeeded);

    return {
      target: {
        copies,
        displayName: `${copies} cop${copies === 1 ? 'y' : 'ies'}`,
      },
      cost: {
        total: calculation.totalCost,
        remaining: calculation.remainingCost,
        formatted: {
          total: calculation.totalCost.toLocaleString(),
          remaining: calculation.remainingCost.toLocaleString(),
        },
      },
      time: {
        days: calculation.daysNeeded,
        display: timeDisplay,
      },
      progress: {
        percentage: calculation.progressPercentage,
        current: currentMead,
        currentFormatted: currentMead.toLocaleString(),
      },
      efficiency: {
        ratio: efficiency.efficiencyRatio,
        isRecommended: efficiency.isRecommended,
        powerSpike: efficiency.powerSpike,
      },
    };
  }
}

// Create and export a default instance
export const ancestralVaultCalculator = new AncestralVaultCalculator();

// Export helper functions for common use cases
export function calculateSireneProgress(targetCopies, currentMead = 0) {
  return ancestralVaultCalculator.exportResults(targetCopies, currentMead);
}

export function getAllMilestones(currentMead = 0) {
  const milestones = [1, 2, 3, 6, 11];
  return milestones.map(copies => ancestralVaultCalculator.exportResults(copies, currentMead));
}

export function getRecommendedTargets() {
  return ancestralVaultCalculator.getRecommendedTargets();
}

export default ancestralVaultCalculator;
