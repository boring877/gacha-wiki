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
      status: 'ended', // 'active' | 'ended' | 'upcoming'

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
        { name: 'Sleep', chance: 100, level: 'Immune', exploitable: false, icon: 'state0045.png', description: 'Unable to act (breaks on crit)' },
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
        passiveSkills: [
          {
            id: 4100181,
            name: '大傷盾',
            nameEn: 'Major Damage Shield',
            effect: 'When taking more than 1,000,000 damage in a single hit, excess damage is reduced',
            skillIcon: 'skill001/skill1002',
          },
          {
            id: 4100182,
            name: '相克的調和',
            nameEn: 'Elemental Harmony',
            effect: '+50% damage from Magic element, -50% damage from non-advantaged elements (Wind, Water, Fire, Holy, Mind)',
            skillIcon: 'skill001/skill1002',
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

      // Recommended characters for this boss
      recommendedCharacters: [
        'dragon-crusher-medusa',
        'liesel',
        'festival-attire-estiriel',
        'the-dark-knight',
        'kaguya',
        'ophelio',
        'frey',
        'marina',
        'theresia',
      ],

      // Team composition for optimal damage
      teamComposition: {
        mainTeam: [
          { slug: 'liesel' },
          { slug: 'festival-attire-estiriel' },
          { slug: 'dragon-crusher-medusa' },
          { slug: 'the-dark-knight' },
          { slug: 'kaguya' },
          { slug: 'theresia', alternative: 'marina' },
        ],
        supports: [
          { id: 2061 },  // Stenlina - MATK 200, M.Crit 90
          { id: 2040 },  // Elegant Portrait Shamshel - MATK 200
          { id: 2047 },  // Soltina - Block 8, P.Crit DMG 90, Dark
          { id: 2076 },  // Ophelio - MATK 200, M.Crit 90
          { id: 2026 },  // SR Farneria - MATK 140
          { id: 2043 },  // SSR Sobrina - MATK 200, M.Crit 90, Throw (P.ATK/M.ATK)
          { id: 2097 },  // Holy Night Yu Rima Elca - MATK 140, Dark
          { id: 2024 },  // SR Zoe - MATK 110, Dark
          { id: 2065 },  // Graceful Portrait Shamshel - MATK 200, M.Crit 90, Dark
          { id: 2031 },  // SR Medusa - MATK 110, Dark
        ],
        note: 'Supports optimized for Dark element blessing and Magic ATK stats',
      },
    },
    // #2 - Water Serpent Beast (Jan 27 - Feb 10)
    {
      slug: 'water-serpent-beast',
      name: 'Water Serpent Beast',
      eventId: 40002,
      eventName: '2nd Competitive Battle',
      bossIcon: 'Event_keigeki_2_824x434.png',
      bannerImage: 'Event_keigeki_2_320x88.png',
      level: 70,
      timeLimit: 120,
      startDate: '2026/01/27',
      endDate: '2026/02/10',
      status: 'active',

      // Boss combat info (from hero_2.xml id=40077)
      damageType: 'Physical', // atk_attr="物理"
      position: 'Front', // 1 = Front, 2 = Mid, 3 = Back
      skillLoop: {
        // 0 = Normal Attack, 1 = Skill 1 (Venom Injection), 2 = Skill 2 (Poison Mist)
        first: [2, 0, 1, 0], // Opening pattern: Skill2 → Normal → Skill1 → Normal
        loop: [0, 0, 1, 0, 0, 2, 0, 0, 1, 0], // Repeating: N → N → S1 → N → N → S2 → N → N → S1 → N
        description: 'Opens with Poison Mist → Normal → Venom Injection → Normal, then loops: 2 Normals → Skill1 → 2 Normals → Skill2 → repeat',
      },

      // Element weakness/resistance info
      weakness: {
        element: 'Wind',
        description: 'Wind Damage +50%',
        icon: 'state0084.png',
      },
      resistances: [
        { element: 'Water', reduction: 50, icon: 'state0085.png' },
        { element: 'Fire', reduction: 50, icon: 'state0087.png' },
        { element: 'Holy', reduction: 50, icon: 'state0089.png' },
        { element: 'Magic', reduction: 50, icon: 'state0091.png' },
        { element: 'Mind', reduction: 50, icon: 'state0093.png' },
      ],

      // Status effect resistances (from in-game screenshot)
      statusResistances: [
        { name: 'Poison', chance: 70, level: 'High', exploitable: false, icon: 'state0033.png', description: 'HP damage per second' },
        { name: 'Burn', chance: 15, level: 'Low', exploitable: true, icon: 'state0035.png', description: 'HP damage per second (stackable)' },
        { name: 'Fear', chance: 90, level: 'Very High', exploitable: false, icon: 'state0037.png', description: 'MP drain per second' },
        { name: 'Freeze', chance: 70, level: 'High', exploitable: false, icon: 'state0039.png', description: 'Unable to act + HP DoT' },
        { name: 'Petrify', chance: 90, level: 'Very High', exploitable: false, icon: 'state0041.png', description: 'Unable to act, Block set to 0' },
        { name: 'Stun', chance: 90, level: 'Very High', exploitable: false, icon: 'state0043.png', description: 'Unable to act' },
        { name: 'Sleep', chance: 70, level: 'High', exploitable: false, icon: 'state0045.png', description: 'Unable to act (breaks on crit)' },
        { name: 'Silence', chance: 90, level: 'Very High', exploitable: false, icon: 'state0047.png', description: 'Only normal attacks, no skills' },
        { name: 'Confusion', chance: 50, level: 'Medium', exploitable: false, icon: 'state0049.png', description: 'Attacks randomly, no ultimates' },
        { name: 'Charm', chance: 90, level: 'Very High', exploitable: false, icon: 'state0051.png', description: 'Attacks allies, no ultimates' },
        { name: 'Paralysis', chance: 50, level: 'Medium', exploitable: false, icon: 'state0053.png', description: 'Speed/ATK/MATK -50%' },
        { name: 'Curse', chance: 70, level: 'High', exploitable: false, icon: 'state0055.png', description: 'No HP/MP recovery, Speed -50%, Crit 0' },
        { name: 'Blind', chance: 50, level: 'Medium', exploitable: false, icon: 'state0057.png', description: 'Block 0, Accuracy -50%' },
        { name: 'Debuff', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0060.png', description: 'General stat debuffs' },
        { name: 'Cleanse', chance: 50, level: 'Medium', exploitable: false, icon: 'state0061.png', description: 'Removes buffs from target' },
        { name: 'Taunt', chance: 0, level: 'No Resist', exploitable: true, icon: 'state0062.png', description: 'Forces attacks on taunter' },
      ],

      // Boss stats (from hero_2.xml id=40077)
      stats: {
        hp: '999,999,999',
        hpNote: 'Infinite - damage contest!',
        atk: 2700,
        matk: 2700,
        def: 3400,
        mdef: 3400,
        atkCrit: 0,
        matkCrit: 0,
        hit: 295,
        block: 310,
        mpRecovery: 35,
      },

      // Boss skills (from skill_monster_1.xml id=400776x)
      skills: {
        damageFormula: 'Damage = (ATK + 73) × multiplier + flat',
        bossBaseAtk: 2773, // 2700 + 73
        normalAttack: {
          id: 4007761,
          name: 'Normal Attack',
          nameEn: 'Normal Attack',
          target: 'Nearest',
          damage: '3.0 ATK + 1000',
          baseDamage: 9319, // (2773 * 3) + 1000
          type: 'Physical',
          skillIcon: 'skill001/skill0001',
        },
        regularSkills: [
          {
            id: 4007762,
            name: '毒液注入',
            nameEn: 'Venom Injection',
            target: 'Nearest',
            damage: '3.5 ATK + 1500',
            baseDamage: 11206, // (2773 * 3.5) + 1500
            effect: 'Inflicts Deadly Poison (-2500 HP/sec) for 3 sec + Block -20 for 5 sec',
            skillIcon: 'skill001/skill0003_1',
            debuffIcons: ['state0032.png', 'state0012.png'],
          },
          {
            id: 4007763,
            name: '毒霧',
            nameEn: 'Poison Mist',
            target: 'ALL',
            damage: 'No damage',
            baseDamage: 0,
            effect: 'Inflicts Deadly Poison (-1500 HP/sec, stackable) for 8 sec + Action Speed -20% for 8 sec + Healing Received -40% (cannot be removed) for 8 sec',
            skillIcon: 'skill001/skill0011',
            debuffIcons: ['state0032.png', 'state0020.png', 'state0070.png'],
          },
          {
            id: 4007764,
            name: '奪命咬殺',
            nameEn: 'Deadly Bite',
            target: 'ALL',
            damage: '4.5 ATK + 1500',
            baseDamage: 13979, // (2773 * 4.5) + 1500
            effect: 'Inflicts Deadly Poison (-2000 HP/sec, stackable, cannot be removed) for 8 sec + Paralysis (Speed/ATK/MATK -50%) for 5 sec',
            skillIcon: 'skill001/skill0003_5',
            debuffIcons: ['state0032.png', 'state0052.png'],
          },
        ],
        timeTriggeredSkills: [
          {
            timeLeft: 90,
            id: 4007701,
            name: '毒液注入',
            nameEn: 'Venom Injection (Enhanced)',
            target: 'Nearest',
            damage: '4.0 ATK + 1500',
            baseDamage: 12592, // (2773 * 4) + 1500
            effect: 'Inflicts Deadly Poison (-3000 HP/sec) for 3 sec + Nullifies Skill/Ultimate damage UP for 3 sec (all enemies)',
            skillIcon: 'skill001/skill0003_2',
            debuffIcon: 'state0032.png',
          },
          {
            timeLeft: 60,
            id: 4007702,
            name: '威嚇',
            nameEn: 'Intimidation',
            target: 'ALL',
            damage: 'No damage',
            baseDamage: 0,
            effect: 'Inflicts Paralysis for 8 sec + Nullifies Skill/Ultimate damage UP for 3 sec (all enemies)',
            skillIcon: 'skill001/skill0011',
            debuffIcon: 'state0052.png',
          },
          {
            timeLeft: 30,
            id: 4007703,
            name: '猛毒注入',
            nameEn: 'Deadly Venom Injection',
            target: 'Nearest',
            damage: '5.0 ATK + 2000',
            baseDamage: 15865, // (2773 * 5) + 2000
            effect: 'Inflicts Deadly Poison (-1500 HP/sec, cannot be removed) for 30 sec + Nullifies Skill/Ultimate damage UP for 3 sec (all enemies)',
            skillIcon: 'skill001/skill0003_3',
            debuffIcon: 'state0032.png',
          },
        ],
        conditionalSkills: [
          {
            condition: 'When Blinded',
            id: 4007704,
            name: '弱體化',
            nameEn: 'Weakening',
            target: 'Self',
            damage: 'No damage',
            baseDamage: 0,
            effect: 'Self-debuff: Wind Damage Taken +30% (cannot be removed) for 15 sec. Triggered when boss has Blind debuff. 30 sec cooldown.',
            skillIcon: 'skill001/skill0011',
            cooldown: 30,
            note: 'Exploitable! Apply Blind to make the boss take 30% more Wind damage!',
          },
        ],
        passiveSkills: [
          {
            id: 4007781,
            name: 'Heavy Damage Shield',
            nameEn: 'Heavy Damage Shield',
            effect: 'When taking more than 3,000,000 damage in a single hit, the excess damage is reduced by 1%.',
            skillIcon: 'skill001/skill1002',
          },
          {
            id: 4007782,
            name: '相剋的調和',
            nameEn: 'Harmony of Counterplay',
            effect: 'Increase damage taken by 50% when taking damage from an advantaged attribute (Wind), and decrease damage taken by 80% when taking damage from a non-advantaged attribute (Water, Fire, Holy, Magic, Mind).',
            skillIcon: 'skill001/skill1002',
          },
        ],
      },

      // Debuffs the boss inflicts on your team
      bossDebuffs: [
        { name: 'Deadly Poison', icon: 'state0032.png', effect: '-1500 to -3000 HP/sec (varies by skill)', duration: '3-30 sec', note: 'Stackable, some cannot be removed' },
        { name: 'Block Down', icon: 'state0012.png', effect: 'Block -20', duration: '5 sec', source: 'Venom Injection' },
        { name: 'Action Speed Down', icon: 'state0020.png', effect: 'Action Speed -20%', duration: '8 sec', source: 'Poison Mist' },
        { name: 'Healing Received Down', icon: 'state0070.png', effect: 'Healing Received -40%', duration: '8 sec', note: 'Cannot be removed', source: 'Poison Mist' },
        { name: 'Paralysis', icon: 'state0052.png', effect: 'Speed/ATK/MATK -50%', duration: '5-8 sec', source: 'Deadly Bite, @60s Intimidation' },
        { name: 'Skill DMG UP Nullified', icon: 'state0059.png', effect: 'Removes and blocks skill damage buffs', duration: '3 sec', source: '@90s, @60s, @30s skills' },
        { name: 'Ultimate DMG UP Nullified', icon: 'state0059.png', effect: 'Removes and blocks ultimate damage buffs', duration: '3 sec', source: '@90s, @60s, @30s skills' },
      ],

      // Strategy summary
      strategy: {
        bestElement: 'Wind',
        bestElementNote: 'Wind element heroes deal +50% damage! Can increase to +80% with Blind exploit!',
        avoidElements: ['Water', 'Fire', 'Holy', 'Magic', 'Mind'],
        exploitableDebuffs: [
          { name: 'Blind', resistChance: 50, note: 'KEY EXPLOIT: When blinded, boss applies Wind DMG Taken +30% to itself for 15 sec!' },
          { name: 'Taunt', resistChance: 0, note: 'Always lands!' },
          { name: 'Debuff', resistChance: 0, note: 'Always lands!' },
          { name: 'Burn', resistChance: 15, note: 'Only 15% resist!' },
          { name: 'Confusion', resistChance: 50 },
          { name: 'Paralysis', resistChance: 50 },
          { name: 'Cleanse', resistChance: 50 },
        ],
        avoidDebuffs: [
          { name: 'Fear/Petrify/Stun/Silence/Charm', reason: '90% resist' },
          { name: 'Poison/Freeze/Sleep/Curse', reason: '70% resist' },
        ],
        keyMechanic: {
          name: 'Blind Exploit',
          description: 'When the boss is Blinded, it triggers a self-debuff that increases Wind Damage Taken by 30% for 15 seconds (cannot be removed). This stacks with the base +50% Wind weakness for massive damage! 30 sec cooldown on the self-debuff.',
        },
        watchOutFor: [
          { time: 90, description: 'Boss uses enhanced Venom Injection (-3000 HP/sec poison) + nullifies all Skill/Ultimate DMG UP buffs on your team for 3 sec' },
          { time: 60, description: 'Boss uses Intimidation - Paralysis (Speed/ATK/MATK -50%) for 8 sec + nullifies DMG UP buffs for 3 sec' },
          { time: 30, description: 'Boss uses Deadly Venom - 30 sec poison (-1500 HP/sec, cannot be removed) + nullifies DMG UP buffs for 3 sec' },
        ],
      },

      // Rewards
      rewards: {
        totalPointReward: 4001701,
        maxDamageRankReward: 4001702,
        totalDamageRankReward: 4001703,
      },

      // Recommended characters for this boss
      recommendedCharacters: [
        // Wind DPS (best damage due to +50% element advantage)
        'shaty', // SSR Wind Attacker
        'ssr-lucie', // SSR Wind Attacker
        'estiriel', // SSR Wind Attacker
        'luca', // SSR Wind Attacker
        'meinias', // SSR Wind Attacker
        'hisara', // SSR Wind Attacker
        // Blind Exploiter (KEY: triggers boss self-debuff for +30% Wind damage taken)
        'r-elythia', // R Wind - has Blind on ultimate, perfect synergy!
        // Resistance Buffer (reduces debuff effects from boss poison/paralysis)
        'new-years-calligraphy-pastel', // SSR Water Support - +30% Debuff Resistance buff!
        // Healers/Support
        'festival-attire-estiriel', // SSR Holy Support/Healer
        'frey', // SSR Holy Support
        'liesel', // SR Light Support - universal support
      ],

      // Team composition for optimal damage
      teamComposition: {
        mainTeam: [
          // Position 1 (Front)
          { slug: 'luca', note: 'Wind DPS' },
          // Position 2 (Mid)
          { slug: 'hypnotic-dancer-messeria', note: 'Wind Support/Healer' },
          { slug: 'new-years-calligraphy-pastel', note: '+30% Debuff Resistance + Physical ATK -11% debuff on boss' },
          // Position 3 (Back)
          { slug: 'shaty', note: 'Wind DPS' },
          { slug: 'meinias', note: 'Wind DPS' },
          { slug: 'festival-attire-estiriel', note: 'Holy Support/Healer' },
        ],
        alternativeTeam: [
          // Lucie and Liesel are both viable alternatives
          { slug: 'ssr-lucie', note: 'SSR Wind Support - can replace Pastel, Meinias, or Luca' },
          { slug: 'liesel', note: 'SR Light Support - can replace Pastel, Meinias, or Luca' },
        ],
        alternativeNote: 'Lucie and Liesel are both good alternatives. They can be used in exchange for Pastel, Meinias, or even Luca. The best team composition is hard to determine - experiment with different combinations!',
        supports: [
          // Wind supports (for Wind blessing)
          { id: 2038 },  // Celestia (SR Wind) - ATK 140, Pierce (Action Speed +6%)
          { id: 2073 },  // Lucie (SSR Wind) - ATK 200, Crit Rate 90, Slash (Accuracy)
          { id: 2062 },  // Hisara (SSR Wind) - ATK 200, Accuracy 10, Slash (Accuracy)
          { id: 2029 },  // Artemis (SR Wind) - Crit Rate 60, Shot (Accuracy)
          // Non-Wind supports with best Physical stats
          { id: 2052 },  // Gemini (SSR Fire) - Crit Rate 90, Accuracy 10, Pierce (Action Speed +6%)
          { id: 2095 },  // Queen of Pies and Cookies Aphrodia (SSR Mind) - ATK 200, Crit Rate 90, Strike (Block)
          { id: 2067 },  // Playful Mermaid Princess Lorelia (SSR Water) - ATK 200, Crit Rate 90, Strike (Block)
          { id: 2079 },  // Epic Fishing Meinias (SR Water) - ATK 140, Pierce (Action Speed +6%)
          { id: 2022 },  // Paia (SR Fire) - HP 1500, ATK 110, Throw (P.ATK/M.ATK +6%)
          { id: 2025 },  // Constantia (SR Water) - DEF 80, Crit Rate 50, Throw (P.ATK/M.ATK +6%)
          { id: 2012 },  // Estria (R Mind) - DEF 40, ATK 55, Pierce (Action Speed +6%)
          { id: 2027 },  // Destra (R Dark) - HP 800, ATK 55, Throw (P.ATK/M.ATK +6%)
        ],
        note: 'Main team has 4 Wind (Luca, Messeria, Shaty, Meinias). Add 2 Wind supports for 6 total = max Wind blessing (+15% Wind ATK). Note: P.Crit and P.Crit DMG both mean Crit Rate in this game.',
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
