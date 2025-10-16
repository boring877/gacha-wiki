// Sirene Ancestral Vault Calculator Configuration
// This file contains calculator configuration and logic for the Sirene ancestral vault page

export const sireneConfig = {
  meta: {
    title: 'Sirene - Ancestral Vault Calculator - Silver and Blood',
    description:
      'Calculate Mead of Rebirth requirements for summoning Sirene copies with our interactive calculator',
  },

  character: {
    id: 'sirene',
    name: 'Sirene',
    image: 'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752927611/SireneVault_ysfq7e.jpg',
  },

  calculator: {
    // Cost configuration
    cost: {
      perCopy: 10000, // Mead of Rebirth per SSR copy
      maxCopies: 11, // Maximum copies available
      totalMax: 110000, // Total cost for all 11 copies
    },

    // Daily income breakdown
    dailyIncome: {
      task1: 80,
      task2: 80,
      task3: 80,
      total: 240,
    },

    // Target options for dropdown
    targets: [
      {
        copies: 1,
        name: '1 Copy (Base Character)',
        cost: 10000,
        description: 'Base character unlocked',
      },
      { copies: 2, name: '2 Copies', cost: 20000, description: '120LV CAP' },
      { copies: 3, name: '3 Copies', cost: 30000, description: '160LV CAP' },
      { copies: 4, name: '4 Copies', cost: 40000, description: '200LV CAP' },
      { copies: 5, name: '5 Copies', cost: 50000, description: 'Base stat increase' },
      { copies: 6, name: '6 Copies', cost: 60000, description: 'Base stat increase' },
      { copies: 7, name: '7 Copies', cost: 70000, description: 'Base stat increase' },
      { copies: 8, name: '8 Copies', cost: 80000, description: 'Base stat increase' },
      { copies: 9, name: '9 Copies', cost: 90000, description: 'Base stat increase' },
      { copies: 10, name: '10 Copies', cost: 100000, description: 'Base stat increase' },
      {
        copies: 11,
        name: '11 Copies (Maximum)',
        cost: 110000,
        description: 'Final dupe Base stat increase',
      },
    ],

    // Quick reference information
    reference: [
      { title: 'Cost per Copy', value: '10,000 Mead of Rebirth' },
      { title: 'Maximum Copies', value: '11 copies maximum' },
      { title: 'Total Cost (Max)', value: '110,000 Mead of Rebirth' },
      { title: 'Daily Income', value: '240 Mead of Rebirth' },
    ],
  },
};

// Calculator utility class
export class SireneCalculator {
  constructor(config = sireneConfig.calculator) {
    this.config = config;
  }

  /**
   * Calculate days needed to reach target copies
   * @param {number} targetCopies - Number of copies desired (1-11)
   * @param {number} currentMead - Current Mead of Rebirth amount
   * @returns {Object} Calculation results
   */
  calculate(targetCopies, currentMead = 0) {
    // Validate inputs
    if (!this.isValidInput(targetCopies, currentMead)) {
      throw new Error('Invalid input values');
    }

    const totalCost = targetCopies * this.config.cost.perCopy;
    const remainingCost = Math.max(0, totalCost - currentMead);
    const daysNeeded = Math.ceil(remainingCost / this.config.dailyIncome.total);
    const progressPercentage = ((currentMead / totalCost) * 100).toFixed(1);

    return {
      targetCopies,
      currentMead,
      totalCost,
      remainingCost,
      daysNeeded,
      progressPercentage: parseFloat(progressPercentage),
      timeDisplay: this.formatTime(daysNeeded),
      isComplete: daysNeeded === 0,
    };
  }

  /**
   * Validate input values
   * @param {number} targetCopies
   * @param {number} currentMead
   * @returns {boolean}
   */
  isValidInput(targetCopies, currentMead) {
    return (
      !isNaN(targetCopies) &&
      !isNaN(currentMead) &&
      targetCopies >= 1 &&
      targetCopies <= this.config.cost.maxCopies &&
      currentMead >= 0
    );
  }

  /**
   * Format time display for human reading
   * @param {number} days - Number of days
   * @returns {string} Formatted time string
   */
  formatTime(days) {
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
   * Get target information by copies
   * @param {number} copies
   * @returns {Object|null}
   */
  getTargetInfo(copies) {
    return this.config.targets.find(target => target.copies === copies) || null;
  }

  /**
   * Get all available targets
   * @returns {Array}
   */
  getAllTargets() {
    return this.config.targets;
  }

  /**
   * Get daily income breakdown
   * @returns {Object}
   */
  getDailyIncome() {
    return this.config.dailyIncome;
  }

  /**
   * Get quick reference data
   * @returns {Array}
   */
  getReference() {
    return this.config.reference;
  }
}

// Create and export default calculator instance
export const sireneCalculator = new SireneCalculator();

// Export helper functions for easy use
export function calculateSirene(targetCopies, currentMead = 0) {
  return sireneCalculator.calculate(targetCopies, currentMead);
}

export function formatSireneTime(days) {
  return sireneCalculator.formatTime(days);
}

export function getSireneTargets() {
  return sireneCalculator.getAllTargets();
}

export function getSireneDailyIncome() {
  return sireneCalculator.getDailyIncome();
}

export function getSireneReference() {
  return sireneCalculator.getReference();
}

export default sireneConfig;
