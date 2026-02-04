// Pride-Lucifer Character Data - Zone Nova
// SSR Warrior from Bicta Tower faction with Chaos element
// Defense-scaling tank/shield character with Pride stack mechanic

export const prideLuciferData = {
  // Basic Character Information
  name: 'Pride-Lucifer',
  image: 'lucifer', // Image identifier
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Bicta Tower', // Bicta Tower faction for combination skill compatibility

  // Base Stats (Level 80)
  stats: {
    hp: '11,048', // Base HP
    attack: '696', // Base Attack
    defense: '1,117', // Base Defense
    energyRecovery: '0.25/s', // Energy Recovery rate
    critRate: '0%', // Base Critical Rate
    critDmg: '50%', // Base Critical Damage
  },

  // Skills
  skills: {
    normal: {
      name: 'Dawn Slash',
      cooldown: '1.5s',
      description:
        'Deals chaos damage equal to 120% of the user\'s own defense to the designated enemy unit.',
    },
    auto: {
      name: 'Perfect Suppression',
      cooldown: '5.0s',
      description:
        'Deals chaos damage equal to 632.9% of the target\'s defense, gains 1 stack of [Pride], and gains a shield equal to 97.2% of the target\'s defense.',
    },
    ultimate: {
      name: 'The End of Pain',
      cooldown: '1.0s',
      energyCost: '3',
      description:
        'All allied characters gain [Armour of Pride]: Grants a shield equal to Lucifer\'s defense 388.6% and reduces damage taken by 48.6% for 10 seconds. While Lucifer possesses [Armour of Pride], his ultimate skill becomes an enhanced ultimate skill.\n\nEnhanced Ultimate Skill: Consumes 2 energy. Grants all allied characters a shield equal to 510.1% of their defense and reduces damage taken by 58.6% for 5 seconds. Unleashes a dimensional slash at the target location, dealing chaos damage equal to the user\'s defense 832.9% to all enemy units.\n\nNote: The damage reduction effects of the ultimate skill and the enhanced ultimate skill do not stack.',
      enhancedUltimate: {
        description: 'Consumes 2 energy. Grants all allied characters a shield equal to 510.1% of their defense and reduces damage taken by 58.6% for 5 seconds. Unleashes a dimensional slash at the target location, dealing chaos damage equal to the user\'s defense 832.9% to all enemy units.',
      },
    },
    passive: {
      name: 'No need to say more',
      description:
        'Each time Lucifer uses a skill, he gains 1 stack of [Pride], increasing his defense by 11.5%, up to a maximum of 8 stacks, lasting until the end of the battle.',
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Defense increased by 10%, HP increased by 10%. At the start of battle, every 500 defense reduces damage taken by the entire team by 1.5%, up to 8 times.',
    requirements: {
      faction: 'Bicta Tower', // 2 Bicta Tower characters
      element: 'Chaos', // OR 2 Chaos characters
    },
    activationCondition: 'Team contains 2 【Bicta Tower】 characters OR 2 【Chaos】 characters',
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'At the start of battle, all allies gain the [Arrogance of Pride] effect.',
    },
    {
      level: 2,
      effect:
        'After Pride-Lucifer uses his ultimate skill, all allies gain the Blessing of Pride, which restores all allies\' maximum HP equal to 1% of their maximum HP + 150 HP per second for 5 seconds after they take damage. The Blessing of Pride will be consumed upon activation.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Defense increased by 50%',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        'Increases all resistances by 20%, chaos resistance by an additional 20%, and grants 4 stacks of Pride upon entering the arena.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Pride or Tsundere?',
    image: 'lucifercard', // Memory card image
    title: 'Pride or Tsundere?',
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Warrior',
    stats: {
      hp: '6,600', // Base HP for memory card
      attack: '480', // Base Attack for memory card
      defense: '690', // Base Defense for memory card
    },
    effects: [
      'HP increased by 32%',
      'Defense increased by 60%',
      'When attacked by a normal attack, damage taken is reduced by 30%',
    ],
  },

  // Character Tags - For search and filtering
  tags: [
    'Chaos',
    'Shield',
    'Defense Scaling',
    'Team Buff',
    'Enhanced Ultimate',
    'Warrior',
    'SSR',
  ],
};

// SEO data for Pride-Lucifer
export const prideLuciferSEO = {
  title: `${prideLuciferData.name} - Zone Nova Character Guide | Pride or Tsundere?`,
  description: `Complete guide for ${prideLuciferData.name}, a ${prideLuciferData.rarity} ${prideLuciferData.element} ${prideLuciferData.class} in Zone Nova. Includes Pride stack mechanics, skills, awakenings, Pride or Tsundere? memory card, and optimal team compositions.`,
  keywords: `Pride-Lucifer, Zone Nova, Pride or Tsundere, Bicta Tower, Chaos Warrior, ${prideLuciferData.rarity}, character guide, skills, awakenings`,
};

// Export default for easy importing
export default prideLuciferData;
