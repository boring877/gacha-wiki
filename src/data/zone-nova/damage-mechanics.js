// Zone Nova Damage Mechanics Data
// This file contains all damage calculation formulas and mechanics for Zone Nova

export const damageMechanicsData = {
  meta: {
    title: "Zone Nova Damage Mechanics - GachaWiki",
    description: "Complete guide to Zone Nova's damage calculation system, defense mechanics, and damage reduction formulas",
    lastUpdated: new Date(),
    source: "Based on community research from GameKee.com"
  },

  defenseEquation: {
    formula: "Final Damage = (Attack × K) / (Defense + K) × (1 - Damage Reduction%)",
    coefficient: 972.95,
    description: "Zone Nova uses a coefficient-based defense system where higher defense provides diminishing returns"
  },

  coefficientExplanation: {
    value: 972.95,
    description: "When your defense equals the coefficient (972.95), you take exactly 50% damage. Higher defense gives diminishing returns.",
    examples: [
      {
        defense: 500,
        percentage: 66.07,
        calculation: "(1000 × 972.95) / (500 + 972.95) × (1 - 0) = 972,950 / 1,472.95 = 660.7"
      },
      {
        defense: 972.95,
        percentage: 50.0,
        calculation: "(1000 × 972.95) / (972.95 + 972.95) × (1 - 0) = 972,950 / 1,945.9 = 500.0"
      },
      {
        defense: 2000,
        percentage: 32.72,
        calculation: "(1000 × 972.95) / (2000 + 972.95) × (1 - 0) = 972,950 / 2,972.95 = 327.2"
      },
      {
        defense: 4000,
        percentage: 19.56,
        calculation: "(1000 × 972.95) / (4000 + 972.95) × (1 - 0) = 972,950 / 4,972.95 = 195.6"
      },
      {
        defense: 6000,
        percentage: 13.95,
        calculation: "(1000 × 972.95) / (6000 + 972.95) × (1 - 0) = 972,950 / 6,972.95 = 139.5"
      }
    ]
  },

  damageReductionExamples: {
    baseDefense: 972.95,
    enemyAttack: 1000,
    description: "Damage Reduction% is calculated last after getting the difference between attack and defense, making it quite powerful against bosses!",
    examples: [
      {
        damageReduction: 0,
        finalDamage: 500.0,
        percentageOfAttack: 50.0,
        calculation: "(1000 × 972.95) / (972.95 + 972.95) × (1 - 0%) = 972,950 / 1,945.9 × 1.0 = 500.0"
      },
      {
        damageReduction: 25,
        finalDamage: 375.0,
        percentageOfAttack: 37.5,
        calculation: "(1000 × 972.95) / (972.95 + 972.95) × (1 - 25%) = 972,950 / 1,945.9 × 0.75 = 375.0"
      },
      {
        damageReduction: 50,
        finalDamage: 250.0,
        percentageOfAttack: 25.0,
        calculation: "(1000 × 972.95) / (972.95 + 972.95) × (1 - 50%) = 972,950 / 1,945.9 × 0.5 = 250.0"
      },
      {
        damageReduction: 75,
        finalDamage: 125.0,
        percentageOfAttack: 12.5,
        calculation: "(1000 × 972.95) / (972.95 + 972.95) × (1 - 75%) = 972,950 / 1,945.9 × 0.25 = 125.0"
      }
    ]
  },

  keyPoints: [
    "The coefficient (972.95) is the middle point where you take exactly 50% damage",
    "Defense provides diminishing returns - damage percentage drops quickly at first, then more slowly at higher defense values",
    "Damage Reduction% is applied as the final step and affects ALL damage equally",
    "Small amounts of damage reduction can be more effective than massive defense increases",
    "25% damage reduction saves you 125 damage, which would require going from 972.95 defense to about 3900 defense to achieve the same result",
    "Damage reduction is very effective against bosses due to its multiplicative nature"
  ],

  mechanics: {
    attack: {
      description: "The enemy's attack power - this is the base damage before any calculations"
    },
    defense: {
      description: "Your defense stat - reduces incoming damage based on the coefficient formula"
    },
    coefficient: {
      description: "A constant number set to 972.95 that controls how defense works"
    },
    damageReduction: {
      description: "Calculated last after getting the difference between attack and defense, making it quite powerful against bosses"
    }
  }
};

// Helper functions for calculations
export const calculateDamage = (attack, defense, damageReduction = 0) => {
  const coefficient = damageMechanicsData.defenseEquation.coefficient;
  const baseDamage = (attack * coefficient) / (defense + coefficient);
  const finalDamage = baseDamage * (1 - damageReduction / 100);
  return Math.round(finalDamage * 100) / 100;
};

export const calculateDamagePercentage = (attack, defense, damageReduction = 0) => {
  const finalDamage = calculateDamage(attack, defense, damageReduction);
  return Math.round((finalDamage / attack) * 10000) / 100;
};

export const getDamageReductionEfficiency = (currentDefense, targetDefense) => {
  const coefficient = damageMechanicsData.defenseEquation.coefficient;
  const currentPercentage = (coefficient) / (currentDefense + coefficient);
  const targetPercentage = (coefficient) / (targetDefense + coefficient);
  return Math.round((currentPercentage - targetPercentage) * 10000) / 100;
};

// Character-Specific Mechanics
export const characterMechanics = {
  // Gaia - 【Matriarch】 Support Mechanics
  gaia: {
    meta: {
      name: "【Matriarch】Gaia",
      faction: "Odius",
      role: "Healer",
      description: "Complex HP manipulation and support mechanics"
    },
    
    // Ultimate Skill: Dominion Primordial Order
    ultimateSkill: {
      name: "Dominion: Primordial Order",
      energyCost: 3,
      duration: 20, // seconds
      hpIncreasePercentage: 60, // 60% HP increase
      capPercentage: 15, // Cannot exceed 15% of Gaia's max HP
      emergencyTreatmentHeal: 12, // 12% of Gaia's max HP
      
      calculateHPIncrease: (gaiaMaxHP, allyBaseHP) => {
        const increase = allyBaseHP * 0.60; // 60% of ally's base HP
        const cap = gaiaMaxHP * 0.15; // 15% of Gaia's max HP
        return Math.min(increase, cap);
      },
      
      calculateEmergencyTreatment: (gaiaMaxHP) => {
        return gaiaMaxHP * 0.12; // 12% of Gaia's max HP
      }
    },
    
    // Passive: Primordial Regression
    passive: {
      name: "Primordial Regression",
      motherlyLove: {
        hpIncreasePercentage: 60, // 60% HP increase
        capPercentage: 15, // Cannot exceed 15% of Gaia's max HP
        trigger: "lowest DEF ally",
        lifeExtension: {
          restoreToFullHP: true,
          hpLossOverTime: true,
          acceleratingLoss: true,
          stopCondition: "defeat enemy",
          maxDuration: 10, // seconds (with Awakening I)
          oncePerBattle: true
        },
        
        calculateHPIncrease: (gaiaMaxHP, allyBaseHP) => {
          const increase = allyBaseHP * 0.60; // 60% of ally's base HP  
          const cap = gaiaMaxHP * 0.15; // 15% of Gaia's max HP
          return Math.min(increase, cap);
        }
      }
    },
    
    // Awakening Effects
    awakenings: {
      awakening1: {
        defenseBonus: 45, // +45% DEF for Motherly Love holders
        lifeExtensionCap: 10 // HP loss duration capped at 10 seconds
      },
      awakening2: {
        instantUltimate: true, // Cast Ultimate at battle start with no energy cost
        emergencyTreatmentRefresh: true // Emergency Treatment refreshes Ultimate duration
      },
      awakening4: {
        healingOutputBonus: 37.5 // +37.5% healing output
      },
      awakening6: {
        twoLowestDEF: true, // Two lowest-DEF allies get Motherly Love
        additionalHPPercentage: 50, // +50% additional Max HP
        stillCapped: true, // Total increase still capped at 15% of Gaia's starting HP
        
        calculateTotalHPIncrease: (gaiaMaxHP, allyBaseHP) => {
          const baseIncrease = allyBaseHP * 0.60; // Base 60% increase
          const additionalIncrease = allyBaseHP * 0.50; // Additional 50% increase
          const totalIncrease = baseIncrease + additionalIncrease;
          const cap = gaiaMaxHP * 0.15; // Still capped at 15% of Gaia's max HP
          return Math.min(totalIncrease, cap);
        }
      }
    },
    
    // Team Skill
    teamSkill: {
      name: "Maternal Guardian",
      requirements: ["2 Odius characters", "2 Holy characters"],
      gaiaMaxHPBonus: 10, // +10% Max HP for Gaia
      healingOutputScaling: {
        per5000HP: 5, // +5% healing output per 5,000 Max HP
        maxStacks: 6, // Up to 6 stacks
        maxBonus: 30 // Maximum +30% healing output
      },
      
      calculateHealingBonus: (gaiaMaxHP) => {
        const stacks = Math.floor(gaiaMaxHP / 5000);
        const cappedStacks = Math.min(stacks, 6);
        return cappedStacks * 5; // 5% per stack
      }
    },
    
    // Memory Card
    memoryCard: {
      name: "A Smile That Topples Cities",
      effects: {
        maxHPBonus: 40, // +40% Max HP
        healingOutputBonus: 40, // +40% healing output
        recentHealBonus: 40 // Additional +40% if healed within 1 second
      }
    }
  }
};

// Gaia-specific calculation functions
export const gaiaCalculations = {
  // Calculate final HP for ally with all Gaia effects
  calculateAllyFinalHP: (gaiaMaxHP, allyBaseHP, hasMotherlyLove = false, hasUltimate = false, hasAwakening6 = false) => {
    let totalIncrease = 0;
    const cap = gaiaMaxHP * 0.15;
    
    if (hasMotherlyLove) {
      const motherlyLoveIncrease = Math.min(allyBaseHP * 0.60, cap);
      totalIncrease += motherlyLoveIncrease;
      
      if (hasAwakening6) {
        const additionalIncrease = Math.min(allyBaseHP * 0.50, cap - totalIncrease);
        totalIncrease += additionalIncrease;
      }
    }
    
    if (hasUltimate) {
      const ultimateIncrease = Math.min(allyBaseHP * 0.60, cap);
      // Ultimate and Motherly Love stack, but total is still capped
      totalIncrease = Math.min(totalIncrease + ultimateIncrease, cap);
    }
    
    return allyBaseHP + totalIncrease;
  },
  
  // Calculate Gaia's healing output with all bonuses
  calculateGaiaHealingOutput: (gaiaMaxHP, baseHealAmount, hasTeamSkill = false, hasMemoryCard = false, hasAwakening4 = false, recentlyHealed = false) => {
    let healingMultiplier = 1.0;
    
    // Team Skill healing bonus
    if (hasTeamSkill) {
      const stacks = Math.floor(gaiaMaxHP / 5000);
      const cappedStacks = Math.min(stacks, 6);
      healingMultiplier += (cappedStacks * 0.05); // 5% per stack
    }
    
    // Awakening IV bonus
    if (hasAwakening4) {
      healingMultiplier += 0.375; // +37.5%
    }
    
    // Memory Card bonuses
    if (hasMemoryCard) {
      healingMultiplier += 0.40; // +40% base bonus
      if (recentlyHealed) {
        healingMultiplier += 0.40; // Additional +40% if recently healed
      }
    }
    
    return Math.round(baseHealAmount * healingMultiplier);
  }
};