// Zone Nova Damage Mechanics API Endpoint
// Generates /data/zone-nova/damage-mechanics.json
// Complete damage calculation formulas and character-specific mechanics

import {
  damageMechanicsData,
  characterMechanics,
} from '../../../data/zone-nova/damage-mechanics.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'damage-mechanics',
    description:
      'Complete damage calculation system including defense formula, coefficient explanations, damage reduction mechanics, and character-specific calculations (Gaia)',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Core damage formula
    damageFormula: {
      formula: damageMechanicsData.defenseEquation.formula,
      coefficient: damageMechanicsData.defenseEquation.coefficient,
      description: damageMechanicsData.defenseEquation.description,
    },

    // Coefficient explanation with examples
    coefficientExplanation: {
      value: damageMechanicsData.coefficientExplanation.value,
      description: damageMechanicsData.coefficientExplanation.description,
      examples: damageMechanicsData.coefficientExplanation.examples.map(ex => ({
        defense: ex.defense,
        damagePercentage: ex.percentage,
        calculation: ex.calculation,
      })),
    },

    // Damage reduction examples
    damageReduction: {
      description: damageMechanicsData.damageReductionExamples.description,
      baseDefense: damageMechanicsData.damageReductionExamples.baseDefense,
      enemyAttack: damageMechanicsData.damageReductionExamples.enemyAttack,
      examples: damageMechanicsData.damageReductionExamples.examples.map(ex => ({
        reductionPercent: ex.damageReduction,
        finalDamage: ex.finalDamage,
        percentOfAttack: ex.percentageOfAttack,
        calculation: ex.calculation,
      })),
    },

    // Key points for understanding the system
    keyPoints: damageMechanicsData.keyPoints,

    // Mechanics definitions
    mechanics: damageMechanicsData.mechanics,

    // Character-specific mechanics (Gaia as example)
    characterMechanics: {
      gaia: {
        name: characterMechanics.gaia.meta.name,
        faction: characterMechanics.gaia.meta.faction,
        role: characterMechanics.gaia.meta.role,
        description: characterMechanics.gaia.meta.description,

        ultimateSkill: {
          name: characterMechanics.gaia.ultimateSkill.name,
          energyCost: characterMechanics.gaia.ultimateSkill.energyCost,
          duration: characterMechanics.gaia.ultimateSkill.duration,
          hpIncreasePercent: characterMechanics.gaia.ultimateSkill.hpIncreasePercentage,
          capPercent: characterMechanics.gaia.ultimateSkill.capPercentage,
          emergencyTreatmentHeal: characterMechanics.gaia.ultimateSkill.emergencyTreatmentHeal,
        },

        passive: {
          name: characterMechanics.gaia.passive.name,
          motherlyLove: {
            hpIncreasePercent: characterMechanics.gaia.passive.motherlyLove.hpIncreasePercentage,
            capPercent: characterMechanics.gaia.passive.motherlyLove.capPercentage,
            trigger: characterMechanics.gaia.passive.motherlyLove.trigger,
            lifeExtension: characterMechanics.gaia.passive.motherlyLove.lifeExtension,
          },
        },

        awakenings: characterMechanics.gaia.awakenings,

        teamSkill: {
          name: characterMechanics.gaia.teamSkill.name,
          requirements: characterMechanics.gaia.teamSkill.requirements,
          gaiaMaxHPBonus: characterMechanics.gaia.teamSkill.gaiaMaxHPBonus,
          healingOutputScaling: characterMechanics.gaia.teamSkill.healingOutputScaling,
        },

        memoryCard: characterMechanics.gaia.memoryCard,
      },
    },

    // Reference tables
    referenceTables: {
      defenseVsDamage: [
        { defense: 0, damageTaken: '100%' },
        { defense: 500, damageTaken: '66.1%' },
        { defense: 973, damageTaken: '50.0%' },
        { defense: 2000, damageTaken: '32.7%' },
        { defense: 4000, damageTaken: '19.6%' },
        { defense: 6000, damageTaken: '13.9%' },
        { defense: 10000, damageTaken: '8.9%' },
      ],
      damageReductionValue: [
        { reduction: '0%', multiplier: 1.0 },
        { reduction: '25%', multiplier: 0.75 },
        { reduction: '50%', multiplier: 0.5 },
        { reduction: '75%', multiplier: 0.25 },
      ],
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
