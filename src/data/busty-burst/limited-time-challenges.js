// Limited Time Challenge boss data for Busty Burst
// Each challenge represents a time-limited boss fight event

export const limitedTimeChallengesConfig = {
  meta: {
    title: 'Limited Time Challenges | Busty Burst',
    description: 'Complete guide to all Limited Time Challenge boss fights in Busty Burst. Boss stats, skills, elemental weaknesses, status resistances, and strategy tips to maximize your damage.',
    gameTitle: 'Limited Time Challenges',
    keywords: [
      'limited time challenge',
      'LTC guide',
      'boss guide',
      'busty burst boss',
      'damage ranking',
      'boss weaknesses',
      'boss resistances',
    ],
  },

  challenges: [
    {
      slug: 'assassin-master',
      name: '刺客大師 (Assassin Master)',
      eventId: 40001,
      eventName: '第1回競擊戰 (1st Limited Time Challenge)',
      bossIcon: '1001401_刺客B.png',
      bannerImage: 'mind-Banner.png',
      level: 70,
      timeLimit: 120,
      startDate: '2026/01/06',
      endDate: '2026/01/20',
      status: 'active', // 'active' | 'ended' | 'upcoming'

      // Element weakness/resistance info
      weakness: {
        element: 'Magic',
        description: 'Magic Damage +50%',
        icon: 'state0092.png',
      },
      resistances: [
        { element: 'Wind', reduction: 50, icon: 'state0083.png' },
        { element: 'Water', reduction: 50, icon: 'state0085.png' },
        { element: 'Fire', reduction: 50, icon: 'state0087.png' },
        { element: 'Holy', reduction: 50, icon: 'state0089.png' },
        { element: 'Mind', reduction: 50, icon: 'state0093.png' },
      ],

      // Status effect resistances (16 types)
      statusResistances: [
        { name: 'Poison', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0033.png', description: 'HP damage per second' },
        { name: 'Burn', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0035.png', description: 'HP damage per second (stackable)' },
        { name: 'Fear', chance: 15, level: 'Low', exploitable: true, icon: 'state0037.png', description: 'MP drain per second' },
        { name: 'Freeze', chance: 70, level: 'High', exploitable: false, icon: 'state0039.png', description: 'Unable to act + HP DoT' },
        { name: 'Petrify', chance: 70, level: 'High', exploitable: false, icon: 'state0041.png', description: 'Unable to act, Block set to 0' },
        { name: 'Stun', chance: 90, level: 'Very High', exploitable: false, icon: 'state0043.png', description: 'Unable to act' },
        { name: 'Sleep', chance: 100, level: 'Immune', exploitable: false, icon: 'state0045.png', description: 'Unable to act (breaks on crit damage)' },
        { name: 'Silence', chance: 50, level: 'Medium', exploitable: false, icon: 'state0047.png', description: 'Only normal attacks, no skills' },
        { name: 'Confusion', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0049.png', description: 'Attacks randomly, no ultimates' },
        { name: 'Charm', chance: 70, level: 'High', exploitable: false, icon: 'state0051.png', description: 'Attacks allies, no ultimates' },
        { name: 'Paralysis', chance: 90, level: 'Very High', exploitable: false, icon: 'state0053.png', description: 'Speed/ATK/MATK -50%' },
        { name: 'Curse', chance: 30, level: 'Low', exploitable: true, icon: 'state0055.png', description: 'No HP/MP recovery, Speed -50%, Crit 0' },
        { name: 'Blind', chance: 30, level: 'Low', exploitable: true, icon: 'state0057.png', description: 'Block 0, Accuracy -50%' },
        { name: 'Debuff', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0060.png', description: 'General stat debuffs' },
        { name: 'Cleanse', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0061.png', description: 'Removes buffs from target' },
        { name: 'Taunt', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0062.png', description: 'Forces attacks on taunter' },
      ],

      // Boss stats
      stats: {
        hp: '999,999,999',
        hpNote: 'Infinite - damage contest!',
        atk: 1877,
        matk: 1758,
        def: 100,
        mdef: 100,
        atkCrit: 5,
        matkCrit: 3,
        hit: 220,
        block: 125,
        mpRecovery: 12,
      },

      // Boss skills
      // Damage Formula: (ATK + 73) × multiplier + flat_add
      // Boss ATK = 1,877, so base = 1,950
      skills: {
        damageFormula: 'Damage = (ATK + 73) × multiplier + flat',
        bossBaseAtk: 1950,
        normalAttack: {
          id: 4100161,
          name: '刺客B普通攻擊',
          nameEn: 'Normal Attack',
          target: 'Nearest',
          damage: '2.0 ATK + 1000',
          baseDamage: 4900,
          type: 'Physical',
          skillIcon: 'SKILL_4100161_Normal_Attack.png',
        },
        regularSkills: [
          {
            id: 4100162,
            name: '奇襲',
            nameEn: 'Ambush',
            target: 'Nearest',
            damage: '2.3 ATK + 1200',
            baseDamage: 5685,
            effect: 'ATK Down (-13%, -30 flat) + Blind (5 sec)',
            skillIcon: 'SKILL_4100162_Ambush.png',
            debuffIcons: ['state0002.png', 'state0056.png'],
          },
          {
            id: 4100163,
            name: '飛刀投擲',
            nameEn: 'Knife Throw',
            target: 'Farthest',
            damage: '2.5 ATK + 1500',
            baseDamage: 6375,
            effect: 'Physical damage',
            cooldown: 20,
            skillIcon: 'SKILL_4100163_Knife_Throw.png',
          },
          {
            id: 4100164,
            name: '鐵扇亂舞',
            nameEn: 'Fan Dance',
            target: 'ALL',
            damage: '3.0 ATK + 2000',
            baseDamage: 7850,
            effect: 'Action Speed Down -20% (6 sec)',
            skillIcon: 'SKILL_4100164_Fan_Dance.png',
            debuffIcons: ['state0020.png'],
          },
        ],
        timeTriggeredSkills: [
          {
            timeLeft: 90,
            id: 4100101,
            name: '淬毒之刃',
            nameEn: 'Poison Blade',
            target: 'Highest HP',
            damage: '2.5 ATK + 1500',
            baseDamage: 6375,
            effect: 'Poison (-2000 HP/sec) for 10 sec',
            skillIcon: 'SKILL_4100162_Ambush.png',
            debuffIcon: 'state0032.png',
          },
          {
            timeLeft: 60,
            id: 4100102,
            name: '安靜，術師',
            nameEn: 'Silence, Mage',
            target: 'Highest MATK',
            damage: '2.5 ATK + 1500',
            baseDamage: 6375,
            effect: 'Silence (cannot use skills) for 5 sec',
            skillIcon: 'SKILL_4100162_Ambush.png',
            debuffIcon: 'state0046.png',
          },
          {
            timeLeft: 30,
            id: 4100103,
            name: '麻酔藥',
            nameEn: 'Anesthetic',
            target: 'Highest MP',
            damage: '2.5 ATK + 1500',
            baseDamage: 6375,
            effect: 'Sleep (cannot act, breaks on damage) for 5 sec',
            skillIcon: 'SKILL_4100162_Ambush.png',
            debuffIcon: 'state0044.png',
          },
        ],
      },

      // Strategy summary
      strategy: {
        bestElement: 'Magic',
        bestElementNote: 'Magic element heroes deal +50% damage!',
        avoidElements: ['Wind', 'Water', 'Fire', 'Holy', 'Mind'],
        exploitableDebuffs: [
          { name: 'Poison', resistChance: 0, note: 'Always lands!' },
          { name: 'Burn', resistChance: 0, note: 'Always lands!' },
          { name: 'Confusion', resistChance: 0, note: 'Always lands!' },
          { name: 'Taunt', resistChance: 0, note: 'Always lands!' },
          { name: 'Fear', resistChance: 15 },
          { name: 'Curse', resistChance: 30 },
          { name: 'Blind', resistChance: 30 },
        ],
        avoidDebuffs: [
          { name: 'Sleep', reason: '100% immune' },
          { name: 'Stun/Paralysis', reason: '90% resist' },
          { name: 'Freeze/Petrify/Charm', reason: '70% resist' },
        ],
        watchOutFor: [
          { time: 90, description: 'Boss targets highest HP hero with Poison' },
          { time: 60, description: 'Boss silences highest MATK hero' },
          { time: 30, description: 'Boss puts highest MP hero to sleep' },
        ],
      },

      // Rewards
      rewards: {
        totalPointReward: 4000101,
        maxDamageRankReward: 4001102,
        totalDamageRankReward: 4001103,
      },
    },
  ],
};

// Helper functions
export function getAllChallengeSlugs() {
  return limitedTimeChallengesConfig.challenges.map(c => c.slug);
}

export function getChallengeBySlug(slug) {
  return limitedTimeChallengesConfig.challenges.find(c => c.slug === slug);
}

export function getActiveChallenges() {
  return limitedTimeChallengesConfig.challenges.filter(c => c.status === 'active');
}

export function getEndedChallenges() {
  return limitedTimeChallengesConfig.challenges.filter(c => c.status === 'ended');
}
