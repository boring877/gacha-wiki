// Zone Nova data for the Gluttony - Beelzebub character guide page.

export const gluttonyBeelzebubData = {
  // Basic Character Information
  name: 'Gluttony - Beelzebub',
  image: 'Beelzebub.png',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Disruptor',
  role: 'Debuffer',
  faction: 'Bicta Tower',

  // Base Stats (Level 80)
  stats: {
    hp: '11,244',
    attack: '870',
    defense: '672',
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Cold Devour',
      cooldown: '2.0s',
      description: 'Deals Frost damage equal to 120% attack power to the designated enemy unit.',
    },
    auto: {
      name: 'Cold Deprivation',
      cooldown: '7.0s',
      description:
        "Deals 488.6% attack damage as Frost damage to the designated enemy unit and reduces the enemy's energy by 1.",
    },
    ultimate: {
      name: 'Frozen Feedback',
      cooldown: '1.0s',
      energyCost: '3',
      description:
        'Deals 732.9% Frost damage to all enemies and inflicts [Gluttony], reducing their attack power 60.1%, defense power 72.9%, and energy recovery efficiency 10% for 5 seconds. At the same time, all allies gain [Return], increasing their attack power 60.1%, defense power 72.9%, and energy recovery efficiency 20% for 5 seconds.',
    },
    passive: {
      name: 'Taotie taxation',
      description:
        "Upon entering battle, activate [Gluttony Authority] to immediately reduce the enemy's energy by 2 points, while your side gains 2 points of energy, but the energy acquisition efficiency is reduced by 15.7% for 7 seconds.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo',
    description:
      'Triggers when the team includes 2 [Bicta Tower] characters or 2 [Ice] characters. At the start of battle, reduces the total damage dealt by all enemy units by 3%. For every 800 attack power a character has, this effect increases by 100%, up to a maximum of 500%.',
    requirements: {
      faction: 'Bicta Tower',
      element: 'Ice',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Upon entering battle, the first ultimate skill does not consume energy.',
    },
    {
      level: 2,
      effect:
        "Beelzebub's skill effect is enhanced, reducing the enemy's energy by 2 and increasing our energy by 1.",
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect:
        "Our entire party's HP is increased by 20%, and the effects of our ultimate skills [Gluttony] and [Repayment] are increased from 5 seconds to 8 seconds.",
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect: 'All allies gain 10% All Resistances, while all enemies lose 10% All Resistances.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Nutrition Studies',
    image: 'NutritionStudies.png',
    title: 'Nutrition Studies',
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Disruptor',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'HP increased by 40%.',
      'Attack power of the entire team increased by 20%.',
      'After the wearer uses a skill, inflicts [Drain] on all enemies for 4 seconds. [Drain] reduces enemy energy regeneration efficiency by 10% and increases allied energy regeneration efficiency by 10%.',
    ],
  },

  // Character Tags - For search and filtering
  tags: ['Ranged', 'Debuff', 'Energy', 'AOE', 'Team Buff', 'Attack Reduction'],
};

export const gluttonyBeelzebubSEO = {
  title: `${gluttonyBeelzebubData.name} - Zone Nova Character Guide | Nutrition Studies`,
  description: `Complete guide for ${gluttonyBeelzebubData.name}, a ${gluttonyBeelzebubData.rarity} ${gluttonyBeelzebubData.element} ${gluttonyBeelzebubData.class} in Zone Nova. Includes skills, awakenings, and the Nutrition Studies memory card.`,
  keywords:
    'Gluttony - Beelzebub, Zone Nova, Nutrition Studies, Bicta Tower, Ice Disruptor, character guide, skills, awakenings',
};

export default gluttonyBeelzebubData;
