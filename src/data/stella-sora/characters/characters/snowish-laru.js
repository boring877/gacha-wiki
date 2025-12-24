export const SnowishLaru = {
  id: 158,
  name: 'Snowish Laru',
  icon: '/stella/assets/Snowish_Laru.png',
  portrait: '/stella/assets/Snowish_Laru_portrait.png',
  background: '/stella/assets/Snowish_Laru_background.png',
  variants: {
    base: '/stella/assets/Snowish_Laru_base.png',
    q: '/stella/assets/Snowish_Laru_q.png',
    gd: '/stella/assets/Snowish_Laru_gd.png',
    goods: '/stella/assets/Snowish_Laru_goods.png',
    qs: '/stella/assets/Snowish_Laru_qs.png',
    xl: '/stella/assets/Snowish_Laru_xl.png',
    gc: '/stella/assets/Snowish_Laru_gc.png',
    sk: '/stella/assets/Snowish_Laru_portrait.png',
    xxl: '/stella/assets/Snowish_Laru.png',
    qm: '/stella/assets/Snowish_Laru_qm.png',
    l: '/stella/assets/Snowish_Laru_l.png',
    s: '/stella/assets/Snowish_Laru_s.png',
  },
  description:
    'Laru, dressed as the Holy Night Messenger, is on a special mission for the Snow Wish Festival. In the chiming bells at midnight, tin soldiers and saluting cannons will bear witness to a shimmering miracle.',
  voiceActor: {
    cn: 'Song Yuanyuan',
    cnLocalized: '宋媛媛',
    jp: 'Aimi Tanaka',
    jpLocalized: '田中あいみ',
  },
  birthday: '8.2',
  grade: 5,
  element: 'Ignis',
  position: 'Versatile',
  attackType: 'Melee',
  style: 'Creative',
  faction: 'Grace Imperium',
  tags: ['Versatile', 'Creative', 'Grace Imperium'],
  dateEvents: [
    {
      name: 'The Photo',
      icon: 'DatingSPCG_158301',
      clue: 'Visit the Market to unlock',
      secondChoice: "Haven't been to that area yet.",
    },
    {
      name: 'Where Are the Fish?',
      icon: 'DatingSPCG_158302',
      clue: 'Visit the Port to unlock',
      secondChoice: 'How about doing some night fishing?',
    },
  ],
  giftPreferences: {
    loves: [
      'Portable Blower',
      'Exquisite Blower',
      'Deluxe Blower',
      'Rising Star',
      'Emerging Talent',
      'Shining Star',
      'Summer Chill Crushed Ice',
      'Fragrant Ice Delight',
      'Sweet IceFurry',
    ],
    hates: ['Stellanite Enchantment', 'Moonlit Companion', 'Cosmic Form'],
  },
  normalAttack: {
    name: 'Snowish Warrior',
    icon: 'Icon/Skill/15801_Normal',
    description:
      "Wields the whip to perform multiple attacks.\u000bStrike 1: <color=#fb8037>&Param1&</color> of ATK as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2&</color> of ATK as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3&</color> of ATK as Ignis DMG.\u000bStrike 4: <color=#fb8037>&Param4& x5</color> of ATK as Ignis DMG.\u000bStrike 5: <color=#fb8037>&Param5& x3</color> of ATK as Ignis DMG.\u000bUses toy Colonel Walnut to attack the target. Its Auto Attack deals <color=#fb8037>&Param6&</color> of ATK as Ignis Minion DMG and grants Colonel Walnut 1 stack of Morale.\u000bWhen Colonel Walnut's Morale reaches &Param7& stacks, it evolves into General Curly. Its Auto Attack deals <color=#fb8037>&Param8& x2</color> of ATK as Ignis Minion DMG and consumes 4 stacks of Morale.\u000bWhen General Curly's Morale reaches zero, it devolves into Colonel Walnut.",
    shortDescription:
      "Wields the whip to perform multiple attacks.\u000bCarries toy: Colonel Walnut to attack targets.\u000bWhen Colonel Walnut's Morale is fully stacked, it evolves into toy: General Curly.",
    params: [
      '8.5%/9.8%/11%/14.9%/16%/17.2%/19.6%/20.6%/21.7%/23.7%/25.4%/27.1%/28.8%',
      '11.6%/13.4%/15.1%/20.3%/22%/23.6%/26.9%/28.3%/29.7%/32.5%/34.8%/37.1%/39.4%',
      '11.6%/13.4%/15.1%/20.3%/22%/23.6%/26.9%/28.3%/29.7%/32.5%/34.8%/37.1%/39.4%',
      '3.1%/3.5%/4%/5.4%/5.8%/6.2%/7.1%/7.5%/7.8%/8.6%/9.2%/9.8%/10.4%',
      '4.3%/5%/5.6%/7.6%/8.2%/8.8%/10%/10.5%/11%/12%/12.9%/13.8%/14.6%',
      '41.6%/47.9%/54.1%/72.8%/78.7%/84.5%/96.1%/101.1%/106.1%/116.1%/124.4%/132.8%/141.1%',
      '20',
      '155%/178%/201%/271%/292%/314%/357%/376%/394%/431%/462%/493%/524%',
    ],
    hints: {},
  },
  skill: {
    name: 'Whip Assault',
    icon: 'Icon/Skill/15801_Skill_Main',
    description:
      "Whips forward to attack the target, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Ignis DMG and granting 1 stack of Morale to the toys. If the toys are within the Main Skill's Attack Range, they gain 1 additional stack of Morale.\u000bWhen casting the Main Skill, toys will cast the Synergy Skill to attack the target.\u000bColonel Walnut smashes the ground, dealing <color=#fb8037>&Param3&</color> of ATK as AoE Ignis Minion DMG, and gains 1 stack of Morale.\u000bGeneral Curly swings dual blades, dealing <color=#fb8037>&Param4& x2</color> of ATK as AoE Ignis Minion DMG.\u000b&Param2& (Main Skill) can trigger ##Ignis Mark#1016#, dealing &Param5& of ATK as Ignis Mark DMG.",
    shortDescription:
      "Whips forward to attack the target, boosting the toys' Morale and triggering the Synergy Skill of the toys.\u000bThe Main Skill can trigger ##Ignis Mark#1016#.",
    params: [
      '85%/98%/111%/150%/162%/174%/197%/208%/218%/239%/256%/273%/290%',
      'Whip Assault',
      '115%/132%/149%/201%/217%/233%/265%/279%/293%/321%/344%/367%/390%',
      '241%/278%/314%/422%/456%/490%/558%/587%/615%/673%/722%/770%/818%',
      '40%/52%/64%/76%/88%/100%/112%/124%/136%',
    ],
    hints: {
      1016: {
        id: 1016,
        name: 'Ignis Mark',
        description:
          "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
        params: [],
      },
    },
    cooldown: '8s',
  },
  supportSkill: {
    name: 'Courtesy Before Aggression',
    icon: 'Icon/Skill/15801_Skill_Support',
    description:
      'Snowish Laru commands the turret to fire 4 Gift Box Shells at the target. Upon hitting the target, each shell deals <color=#fb8037>&Param1&</color> of ATK as Ignis DMG and then explodes to deal <color=#fb8037>&Param2&</color> of ATK as AoE Ignis DMG.\u000bThe Gift Box Shell summons Colonel Walnut near the target for 10s upon explosion. Up to 4 can be summoned. Colonel Walnut attacks the target, dealing <color=#fb8037>&Param3&</color> of ATK as Ignis Minion DMG.\u000bGift Box Shells inflict ##Ignis Mark: Sacred Flame#2013# upon dealing DMG.',
    shortDescription:
      'Commands the turret to fire Gift Box Shells at the target, dealing DMG and inflicting ##Ignis Mark: Sacred Flame#2013#.\u000bThe Gift Box Shell summons Colonel Walnut upon explosion to continuously attack the target.',
    params: [
      '168%/193%/218%/293%/317%/340%/387%/408%/428%/468%/485%/501%/518%',
      '119%/137%/154%/208%/225%/241%/274%/289%/303%/331%/343%/355%/367%',
      '17.1%/19.7%/22.3%/30%/32.4%/34.8%/39.5%/41.6%/43.6%/47.8%/49.5%/51.2%/52.9%',
    ],
    hints: {
      2013: {
        id: 2013,
        name: 'Ignis Mark: Sacred Flame',
        description:
          'A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
        params: ['10'],
      },
    },
    cooldown: '18s',
  },
  ultimate: {
    name: 'Sweet Dream Waltz',
    icon: 'Icon/Skill/15801_Ultra',
    description:
      'Transforms into toy: Dame Laru, gaining a shield equal to &Param7& of Base Max HP for &Param6&s.\u000bDame Laru cannot dodge or dash. Her Auto Attacks become shots that pierce targets, dealing <color=#fb8037>&Param2&</color> of ATK as Ignis Ultimate DMG. The Main and Support skills are replaced by Candy Barrage.\u000bCandy Barrage deals <color=#fb8037>&Param3& x5</color> of ATK as AoE Ignis Ultimate DMG to targets in the front with a 4s cooldown.',
    shortDescription:
      'Transforms into toy: Dame Laru.\u000bAfter the transformation, her Auto Attacks become ranged shots, and her Main and Support Skills become Candy Barrage.',
    params: [
      'HitDamage,DamageNum,158400001',
      '45%/52%/59%/80%/86%/92%/105%/111%/116%/127%/131%/136%/141%',
      '18%/21%/23%/31%/34%/36%/41%/44%/46%/50%/52%/54%/55%',
      'Sweet Dream Waltz',
      '40%/52%/64%/76%/88%/100%/112%/124%/136%',
      '12',
      '35%',
    ],
    hints: {},
    cooldown: '40s',
    energy: 240,
  },
  potentials: {
    mainCore: [
      {
        name: 'Solemn Look',
        icon: '15801_Potential_01',
        description:
          "Empowers the toys following Snowish Laru.\u000bColonel Walnut's Synergy Skill deals <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Minion DMG.\u000bGeneral Curly's Synergy Skill deals <color=#0abec5>&Param2& x6</color> of ATK as AoE Ignis Minion DMG.\u000bClockwork Queen's shots deal an additional <color=#0abec5>&Param4&</color> of ATK as AoE Ignis Minion DMG.",
        shortDescription:
          "Enhances the Synergy Skills of Colonel Walnut and General Curly.\u000bEnhances Clockwork Queen's shots.",
        params: [
          '246%/283%/320%/430%/465%/499%/568%/598%/627%/686%/736%/785%/834%',
          '100%/115%/130%/175%/189%/203%/231%/243%/255%/278%/298%/318%/338%',
          '85%/97%/110%/148%/160%/172%/195%/205%/216%/236%/253%/270%/287%',
          '90%/103%/117%/157%/170%/182%/208%/218%/229%/251%/269%/287%/305%',
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Here Comes the Queen',
        icon: '15801_Potential_02',
        description:
          "Casting &Param1& or &Param2& (Main Skill) summons Clockwork Queen for <color=#0abec5>&Param3&</color>s and grants Colonel Walnut or General Curly <color=#0abec5>2</color> stacks of Morale.\u000bClockwork Queen attacks the target, dealing <color=#0abec5>&Param4&</color> of ATK as Ignis Minion DMG.\u000bEach of Clockwork Queen's attacks can trigger the Synergy Skills of Colonel Walnut and General Curly.\u000bClockwork Queen can be summoned once every &Param5&s.",
        shortDescription:
          'Casting &Param1& or &Param2& (Main Skill) summons Clockwork Queen and boosts Morale for Colonel Walnut and General Curly.',
        params: [
          'Whip Assault',
          'Candy Barrage',
          '12',
          '85%/97%/110%/148%/160%/172%/195%/205%/216%/236%/253%/270%/287%',
          '18',
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Whipping Gale',
        icon: '15801_Potential_03',
        description:
          '&Param1& (Main Skill) becomes a multi-hit attack, dealing <color=#0abec5>&Param2& x5</color> of ATK as AoE Ignis Skill DMG.',
        shortDescription: '&Param1& (Main Skill) becomes a multi-hit attack.',
        params: ['Whip Assault', '92%/106%/120%/161%/174%/187%/212%/224%/235%/257%/275%/293%/312%'],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Crossing Welts',
        icon: '15801_Potential_04',
        description:
          'When Colonel Walnut and General Curly deal DMG, they inflict a Gift Box mark, lasting <color=#0abec5>&Param2&</color>s.\u000b&Param3& and &Param4& (Main Skill) deals <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Skill DMG against marked targets.',
        shortDescription:
          "When Colonel Walnut and General Curly deal DMG, they inflict the Gift Box mark.\u000bSnowish Laru's skills deal additional AoE DMG against marked targets.",
        params: [
          '197%/227%/257%/345%/373%/401%/456%/479%/503%/551%/590%/629%/669%',
          '10',
          'Whip Assault',
          'Candy Barrage',
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
    ],
    mainNormal: [
      {
        name: 'Burning Whip',
        icon: '15801_Potential_01',
        description:
          'When Colonel Walnut and General Curly deal damage to targets with ##Ignis Mark#1016#, they have a &Param1& chance to gain 1 stack of Morale and increase their &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
        shortDescription:
          'When Colonel Walnut and General Curly deal DMG to targets with ##Ignis Mark#1016#, they have a chance to gain Morale and increase their &Param2&.',
        params: ['30%', 'Minion DMG', '14%/23%/31%/40%/48%/57%/65%/74%/82%', '8', '1'],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {
          1016: {
            id: 1016,
            name: 'Ignis Mark',
            description:
              "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
            params: [],
          },
        },
      },
      {
        name: 'Starchain Blade',
        icon: '15801_Potential_06',
        description:
          'General Curly deals <color=#ec6d21>&Param1&</color> of ATK as AoE Ignis Minion DMG to nearby targets every second.',
        shortDescription: 'General Curly deals DMG to nearby targets every second.',
        params: ['90%/145%/199%/253%/307%/361%/416%/470%/524%'],
        rarity: 1,
        stype: 41,
        corner: 2,
        hints: {},
      },
      {
        name: 'Fiery Rainbow',
        icon: '15801_Potential_02',
        description:
          "Each toy present increases the &Param1& of all Snowish Laru's minions by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks.",
        shortDescription: "Each toy present increases the &Param1& of all Snowish Laru's minions.",
        params: ['Ignis DMG', '13%/21%/28%/36%/44%/51%/59%/67%/74%', '3'],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {},
      },
      {
        name: 'All-Out Whiplash',
        icon: '15801_Potential_03',
        description:
          "When &Param1& or &Param2& (Main Skill) lands a Crit Hit, increases Snowish Laru's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.",
        shortDescription:
          "When &Param1& or &Param2& (Main Skill) lands a Crit Hit, increases Snowish Laru's &Param3&.",
        params: [
          'Whip Assault',
          'Candy Barrage',
          'ATK',
          '1.9%/3%/4.1%/5.2%/6.3%/7.4%/8.5%/9.6%/10.7%',
          '3',
          '9',
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: 'Wild Whip Waltz',
        icon: '15801_Potential_03',
        description:
          'Increases the Attack Range of &Param1& (Main Skill) by 20%.\u000bIncreases the &Param3& of &Param1& and &Param2& by <color=#ec6d21>&Param4&</color>.',
        shortDescription:
          'Increases the Attack Range of &Param1& (Main Skill).\u000bIncreases the &Param3& of &Param1& and &Param2&.',
        params: [
          'Whip Assault',
          'Candy Barrage',
          'Ignis DMG',
          '33%/52%/72%/91%/111%/130%/150%/169%/189%',
        ],
        rarity: 1,
        stype: 41,
        corner: 2,
        hints: {},
      },
      {
        name: 'Cannon Ensemble',
        icon: '15801_Potential_11',
        description:
          'Every &Param3&s, Snowish Laru summons a Sled Turret to attack the target when she deals DMG. The Sled Turret deals <color=#ec6d21>&Param2&</color> of ATK as Ignis Minion DMG and explodes to deal <color=#ec6d21>&Param4&</color> of ATK as AoE Ignis Minion DMG.\u000bWhen the Sled Turret lands a Crit Hit, increases the &Param5& of Snowish Laru and all toys on the battlefield by <color=#ec6d21>&Param6&</color> for &Param7&s.',
        shortDescription:
          'When Snowish Laru deals DMG, she summons a Sled Turret to attack the target.\u000bWhen the Sled Turret lands a Crit Hit, increases the &Param5& of Snowish Laru and all toys on the battlefield.',
        params: [
          '100%',
          '129%/206%/283%/361%/438%/515%/592%/670%/747%',
          '8',
          '91%/146%/201%/255%/310%/365%/420%/474%/529%',
          'Ignis DMG',
          '13%/20%/28%/35%/43%/50%/58%/65%/73%',
          '8',
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: 'Elegant Moves',
        icon: 'Common_Potential_21',
        description:
          'Snowish Laru can dodge one more time. Also, increases her &Param2& by <color=#ec6d21>&Param3&</color>.\u000bPeriodically, Snowish Laru becomes immune to direct DMG taken once. This effect can only be triggered once every <color=#ec6d21>&Param1&</color>s.',
        shortDescription:
          'Snowish Laru can dodge one more time. Also, increases her &Param2&.\u000bPeriodically, Snowish Laru becomes immune to direct DMG taken once.',
        params: ['30', 'DEF', '39/52/65/78/91/105/118/131/144'],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {},
      },
      {
        name: 'Non-Stop Victory',
        icon: '15801_Potential_04',
        description:
          "When Snowish Laru's Auto Attack lands a Crit Hit, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
        shortDescription:
          "When Snowish Laru's Auto Attack lands a Crit Hit, increases her &Param1&.",
        params: ['ATK', '4%/6%/8%/11%/13%/15%/18%/20%/22%', '8', '4'],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {},
      },
      {
        name: 'Jazz of Rage',
        icon: 'Common_Potential_Fire_1',
        description:
          "While transformed into Dame Laru, Snowish Laru's shots and &Param1& can trigger ##Ignis Mark#1016#.\u000bIncreases Snowish Laru's &Param3& by <color=#ec6d21>&Param4&</color>.",
        shortDescription:
          "While transformed into Dame Laru, Snowish Laru's shots and &Param1& can trigger ##Ignis Mark#1016#.\u000bIncreases Snowish Laru's &Param3&.",
        params: [
          'Candy Barrage',
          '40%/52%/64%/76%/88%/100%/112%/124%/136%',
          'ATK',
          '20%/32%/44%/56%/68%/80%/92%/104%/116%',
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          1016: {
            id: 1016,
            name: 'Ignis Mark',
            description:
              "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
            params: [],
          },
        },
      },
    ],
    common: [
      {
        name: 'Silver Bullet',
        icon: '15801_Potential_41',
        description:
          'While transformed into Dame Laru, casting &Param1& increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
        shortDescription:
          'While transformed into Dame Laru, casting &Param1& increases her &Param2&.',
        params: [
          'Candy Barrage',
          'Ultimate DMG',
          '61%/98%/134%/171%/207%/244%/256%/268%/281%',
          '10',
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: 'Untouched King',
        icon: '15801_Potential_41',
        description:
          'While transformed into Dame Laru, increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s each time &Param1& deals DMG, up to &Param5& stacks.\u000bThis effect is removed if &Param1& is cast.',
        shortDescription:
          'While transformed into Dame Laru, increases her &Param2& each time &Param1& deals DMG.',
        params: [
          'Candy Barrage',
          'Ultimate DMG',
          '10%/13%/17%/20%/23%/27%/29%/31%/33%',
          '10',
          '10',
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {},
      },
      {
        name: 'Toy Army',
        icon: '15801_Potential_41',
        description:
          'While transformed into Dame Laru, increases the &Param1& of Ignis Trekkers in the squad by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.\u000bThis effect is removed when the transformation expires.',
        shortDescription:
          'While transformed into Dame Laru, increases the &Param1& of Ignis Trekkers in the squad over time.',
        params: ['ATK', '9%/14%/19%/24%/30%/35%/36%/38%/40%', '-1', '10'],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {},
      },
    ],
    supportCore: [
      {
        name: 'Fire Downpour',
        icon: '15801_Potential_21',
        description:
          'After a Gift Box Shell explodes, it deals <color=#0abec5>&Param1&</color> of ATK as Ignis Skill DMG to targets within range every 0.3s for 2s.',
        shortDescription:
          'After a Gift Box Shell explodes, it deals DMG to targets within range over time.',
        params: ['37%/42%/48%/64%/69%/75%/85%/89%/94%/103%/106%/110%/114%'],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Special Ammo',
        icon: '15801_Potential_22',
        description:
          "Increases the Attack Range of Gift Box Shells by <color=#0abec5>50%</color> and Skill DMG by <color=#0abec5>&Param5&</color>.\u000bIf the squad is Ignis-Trekker only, when Gift Box Shells deal DMG to the target, increases the target's Skill DMG Taken by <color=#0abec5>&Param2&</color> for <color=#0abec5>&Param3&</color>s, up to <color=#0abec5>&Param4&</color> stacks.",
        shortDescription:
          'Increases the Skill DMG and Attack Range of Gift Box Shells.\u000bIf the squad is Ignis-Trekker only, when Gift Box Shells deal DMG to the target, increases the Skill DMG Taken of the target.',
        params: ['Skill DMG Taken', '1.3%', '7', '20', '13%'],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Promotion Time',
        icon: '15801_Potential_23',
        description:
          "When 4 Colonel Walnuts are on the battlefield, combines them into 1 General Curly, dealing <color=#0abec5>&Param1&</color> of ATK as Ignis Minion DMG to the target.\u000bGeneral Curly fights for <color=#0abec5>10</color>s, and only 1 can exist.\u000bIf the squad is Ignis-Trekker only, increases General Curly's &Param3& by <color=#0abec5>&Param4&</color> every second, up to <color=#0abec5>&Param5&</color> stacks.",
        shortDescription:
          "Combines Colonel Walnuts into General Curly.\u000bIf the squad is Ignis-Trekker only, increases General Curly's &Param3& over time.",
        params: [
          '53%/61%/69%/92%/100%/107%/122%/128%/135%/147%/153%/158%/163%',
          '11.5',
          'Minion DMG',
          '4.5%',
          '15',
          '15',
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
      {
        name: 'Investiture Ceremony',
        icon: '15801_Potential_24',
        description:
          'Colonel Walnut and General Curly learn skills, which they automatically cast after a <color=#0abec5>4</color>s cooldown.\u000bColonel Walnut smashes the ground, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Minion DMG.\u000bGeneral Curly swings dual blades, dealing <color=#0abec5>&Param2& x6</color> of ATK as AoE Ignis Minion DMG and increasing its &Param5& by <color=#0abec5>&Param3&</color> for <color=#0abec5>&Param4&</color>s.',
        shortDescription:
          "Colonel Walnut and General Curly learn skills, which they automatically cast to attack targets.\u000bGeneral Curly's skill also increases its &Param5&.",
        params: [
          '19.6%/22.6%/25.5%/34.3%/37.1%/39.8%/45.3%/47.7%/50.1%/54.8%/56.7%/58.7%/60.7%',
          '43%/49%/55%/75%/81%/87%/98%/104%/109%/119%/123%/127%/132%',
          '50%',
          '6',
          'Minion Crit Rate',
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {},
      },
    ],
    supportNormal: [
      {
        name: 'Two-Gun Salute',
        icon: '15801_Potential_25',
        description:
          'Increases the &Param2& of &Param1& (Support Skill) by <color=#ec6d21>&Param3&</color>. Fires 2 additional Gift Box Shells.',
        shortDescription: 'Increases the &Param2& and number of shots of &Param1& (Support Skill).',
        params: [
          'Courtesy Before Aggression',
          'Skill DMG',
          '29%/47%/65%/82%/100%/117%/135%/153%/170%',
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: 'Uplifting Shot',
        icon: '15801_Potential_22',
        description:
          'When a Gift Box Shell deals DMG, increases the &Param1& of Snowish Laru by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
        shortDescription:
          'When a Gift Box Shell deals DMG, increases the &Param1& of Snowish Laru.',
        params: ['ATK', '9%/15%/21%/26%/32%/37%/40%/43%/46%', '5', '6', 'Minion DMG', '1.7%'],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {},
      },
      {
        name: 'First Taste of Sweetness',
        icon: '15801_Potential_22',
        description:
          'Increases the &Param2& dealt by Gift Box Shells to targets with ##Ignis Mark#1016# by <color=#ec6d21>&Param1&</color>.',
        shortDescription:
          'Increases the &Param2& dealt by Gift Box Shells to targets with ##Ignis Mark#1016#.',
        params: ['6%/9%/11%/13%/15%/17%/19%/21%/23%', 'Ignis DMG'],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {
          1016: {
            id: 1016,
            name: 'Ignis Mark',
            description:
              "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
            params: [],
          },
        },
      },
      {
        name: "Heart's Benediction",
        icon: '15801_Potential_28',
        description:
          'Colonel Walnut deals <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Minion DMG to nearby targets every second.\u000bGeneral Curly deals <color=#0abec5>&Param2&</color> of ATK as AoE Ignis Minion DMG every 0.5s.',
        shortDescription:
          'Colonel Walnut and General Curly deal Minion DMG to nearby targets over time.',
        params: [
          '2.1%/3.3%/4.5%/5.8%/7%/8.3%/9.5%/10.7%/12%',
          '10.6%/17%/23.4%/29.7%/36.1%/42.5%/48.8%/55.2%/61.6%',
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: "Heart's Trumpet",
        icon: '15801_Potential_23',
        description:
          'Increases the &Param1& of Colonel Walnut and General Curly by &Param2&.\u000bEach time they deal DMG, increases their &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.\u000bEach time they land a Crit Hit, increases the &Param7& of Ignis Trekkers in the squad by <color=#ec6d21>&Param8&</color> for &Param9&s, up to &Param10& stacks.',
        shortDescription:
          'Increases the &Param1& of Colonel Walnut and General Curly. Each time they deal DMG, increases their &Param3&; each time they land a Crit Hit, increases the &Param7& of Ignis Trekkers in the squad.',
        params: [
          'ATK SPD',
          '35%',
          'Minion DMG',
          '6%/9.6%/13.2%/16.8%/20.4%/24%/27.6%/31.2%/34.8%',
          '10',
          '10',
          'ATK',
          '1%/1.6%/2.2%/2.8%/3.4%/4%/4.3%/4.6%/4.9%',
          '10',
          '10',
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {},
      },
      {
        name: 'Celebration Resumed',
        icon: 'Common_Potential_11',
        description:
          "Each time Snowish Laru enters combat, increases the main Ignis Trekker's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
        shortDescription:
          "Each time Snowish Laru enters combat, increases the main Ignis Trekker's &Param1&.",
        params: ['ATK', '45%/72%/99%/126%/152%/179%/193%/206%/220%', '10'],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {},
      },
      {
        name: 'Ammo Rain',
        icon: 'Common_Potential_Fire_1',
        description:
          'While Snowish Laru transforms into Dame Laru, increases her &Param1& by <color=#ec6d21>&Param2&</color>. Her shots and &Param3& can inflict ##Ignis Mark: Sacred Flame#2013#.',
        shortDescription:
          'While Snowish Laru transforms into Dame Laru, increases her &Param1&. Her shots and skill can inflict ##Ignis Mark: Sacred Flame#2013#.',
        params: ['ATK', '67%/107%/147%/187%/227%/267%/277%/287%/297%', 'Candy Barrage'],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          2013: {
            id: 2013,
            name: 'Ignis Mark: Sacred Flame',
            description:
              'A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
            params: ['10'],
          },
        },
      },
      {
        name: "Heart's Edict",
        icon: '15801_Potential_23',
        description:
          'Increases the combat duration of Colonel Walnut and General Curly by 50% and their &Param1& by <color=#ec6d21>&Param2&</color>.',
        shortDescription:
          'Increases the combat duration and &Param1& of Colonel Walnut and General Curly.',
        params: ['Crit DMG', '32%/52%/71%/90%/109%/129%/148%/167%/187%', '1'],
        rarity: 1,
        stype: 41,
        corner: 2,
        hints: {},
      },
      {
        name: 'Fairy Tale Rule',
        icon: 'Common_Potential_15',
        description:
          "When the squad contains only Ignis characters, Gift Box Shell increases the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s upon dealing DMG to the target.",
        shortDescription:
          "When the squad contains only Ignis Trekkers, Gift Box Shell increases the target's &Param1& upon dealing DMG to the target.",
        params: ['Ignis DMG Taken', '15%/24%/33%/42%/51%/60%/63%/66%/69%', '12'],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {},
      },
    ],
  },
  talents: [
    {
      name: 'Nutcracker',
      talents: [
        {
          name: 'Nutcracker',
          description:
            "When Snowish Laru's summoned toys are present on the battlefield, increases the Crit Rate of all Ignis Trekkers' Skills by <color=#0abec5>&Param1&</color>.",
          params: ['10%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
      ],
    },
    {
      name: 'Holy Night Gift',
      talents: [
        {
          name: 'Holy Night Gift',
          description:
            "When any Trekker in the squad triggers ##Ignis Mark#1016#, increases Snowish Laru's Skill DMG by <color=#0abec5>&Param1&</color> and her summoned toys' Minion DMG on the battlefield by <color=#0abec5>&Param2&</color>, lasting &Param3&s.",
          params: ['30%', '30%', '6'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
      ],
    },
    {
      name: 'Block Paradise',
      talents: [
        {
          name: 'Block Paradise',
          description:
            "Increases Snowish Laru and her minions' Ignis DMG dealt to an elite or higher-tier target by <color=#0abec5>&Param1&</color>.",
          params: ['24%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
      ],
    },
    {
      name: "Queen's Party",
      talents: [
        {
          name: "Queen's Party",
          description:
            'When Snowish Laru has a shield, increases her Ultimate DMG by <color=#0abec5>&Param1&</color>.',
          params: ['80%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
      ],
    },
    {
      name: 'Dreams Replayed',
      talents: [
        {
          name: 'Dreams Replayed',
          description:
            'When Snowish Laru casts the Ultimate, increases the Crit Rate of all Ignis Trekkers in the squad by <color=#0abec5>&Param1&</color> for &Param2&s.',
          params: ['10%', '12'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
        {
          name: 'ATK Enhancement',
          description: 'Increases Base ATK by <color=#0abec5>&Param1&</color>.',
          params: ['50'],
        },
        {
          name: 'DEF Enhancement',
          description: 'Increases Base DEF by <color=#0abec5>&Param1&</color>.',
          params: ['10'],
        },
        {
          name: 'HP Enhancement',
          description: 'Increases Base HP by <color=#0abec5>&Param1&</color>.',
          params: ['575'],
        },
        {
          name: 'Ultimate DMG Boost',
          description: 'Increases Ultimate DMG by <color=#0abec5>&Param1&</color>',
          params: ['4.3%'],
        },
        {
          name: 'Ignis DMG Boost',
          description: 'Increases Ignis DMG by <color=#0abec5>&Param1&</color>',
          params: ['1.5%'],
        },
      ],
    },
  ],
  stats: [
    { hp: 1345, atk: 115 },
    { hp: 1753, atk: 150 },
    { hp: 2158, atk: 184 },
    { hp: 2563, atk: 219 },
    { hp: 2967, atk: 254 },
    { hp: 3372, atk: 288 },
    { hp: 3777, atk: 323 },
    { hp: 4181, atk: 357 },
    { hp: 4586, atk: 392 },
    { hp: 4990, atk: 427 },
    { hp: 5989, atk: 512 },
    { hp: 6393, atk: 546 },
    { hp: 6798, atk: 581 },
    { hp: 7203, atk: 616 },
    { hp: 7607, atk: 650 },
    { hp: 8012, atk: 685 },
    { hp: 8417, atk: 719 },
    { hp: 8821, atk: 754 },
    { hp: 9226, atk: 789 },
    { hp: 9630, atk: 823 },
    { hp: 10035, atk: 858 },
    { hp: 12044, atk: 1029 },
    { hp: 12449, atk: 1064 },
    { hp: 12854, atk: 1099 },
    { hp: 13258, atk: 1133 },
    { hp: 13663, atk: 1168 },
    { hp: 14068, atk: 1202 },
    { hp: 14472, atk: 1237 },
    { hp: 14877, atk: 1272 },
    { hp: 15282, atk: 1306 },
    { hp: 15686, atk: 1341 },
    { hp: 16091, atk: 1375 },
    { hp: 19314, atk: 1651 },
    { hp: 19719, atk: 1685 },
    { hp: 20123, atk: 1720 },
    { hp: 20528, atk: 1755 },
    { hp: 20933, atk: 1789 },
    { hp: 21337, atk: 1824 },
    { hp: 21742, atk: 1858 },
    { hp: 22146, atk: 1893 },
    { hp: 22551, atk: 1927 },
    { hp: 22956, atk: 1962 },
    { hp: 23360, atk: 1997 },
    { hp: 28028, atk: 2396 },
    { hp: 28433, atk: 2430 },
    { hp: 28837, atk: 2465 },
    { hp: 29242, atk: 2499 },
    { hp: 29647, atk: 2534 },
    { hp: 30051, atk: 2568 },
    { hp: 30456, atk: 2603 },
    { hp: 30860, atk: 2638 },
    { hp: 31265, atk: 2672 },
    { hp: 31670, atk: 2707 },
    { hp: 32074, atk: 2741 },
    { hp: 38494, atk: 3290 },
    { hp: 38899, atk: 3325 },
    { hp: 39304, atk: 3359 },
    { hp: 39708, atk: 3394 },
    { hp: 40113, atk: 3428 },
    { hp: 40517, atk: 3463 },
    { hp: 40922, atk: 3498 },
    { hp: 41327, atk: 3532 },
    { hp: 41731, atk: 3567 },
    { hp: 42136, atk: 3601 },
    { hp: 42541, atk: 3636 },
    { hp: 51052, atk: 4363 },
    { hp: 51456, atk: 4398 },
    { hp: 51861, atk: 4433 },
    { hp: 52266, atk: 4467 },
    { hp: 52670, atk: 4502 },
    { hp: 53075, atk: 4536 },
    { hp: 53480, atk: 4571 },
    { hp: 53884, atk: 4605 },
    { hp: 54289, atk: 4640 },
    { hp: 54693, atk: 4675 },
    { hp: 55098, atk: 4709 },
    { hp: 66117, atk: 5651 },
    { hp: 66521, atk: 5686 },
    { hp: 66926, atk: 5720 },
    { hp: 67330, atk: 5755 },
    { hp: 67735, atk: 5789 },
    { hp: 68140, atk: 5824 },
    { hp: 68544, atk: 5859 },
    { hp: 68949, atk: 5893 },
    { hp: 69354, atk: 5928 },
    { hp: 69758, atk: 5962 },
    { hp: 70163, atk: 5997 },
    { hp: 84190, atk: 7196 },
    { hp: 84595, atk: 7230 },
    { hp: 84999, atk: 7265 },
    { hp: 85404, atk: 7300 },
    { hp: 85809, atk: 7334 },
    { hp: 86213, atk: 7369 },
    { hp: 86618, atk: 7403 },
    { hp: 87023, atk: 7438 },
    { hp: 87427, atk: 7472 },
    { hp: 87832, atk: 7507 },
    { hp: 88236, atk: 7542 },
    { hp: 88236, atk: 7542 },
  ],
  upgrades: [
    {
      items: [{ id: 20071, name: 'Backstage Ragged Hat', quantity: 5 }],
      currency: { dorra: 7900 },
    },
    {
      items: [
        { id: 20071, name: 'Backstage Ragged Hat', quantity: 5 },
        { id: 20072, name: 'Spotlight Bowler', quantity: 10 },
      ],
      currency: { dorra: 19800 },
    },
    {
      items: [
        { id: 20071, name: 'Backstage Ragged Hat', quantity: 10 },
        { id: 20072, name: 'Spotlight Bowler', quantity: 15 },
      ],
      currency: { dorra: 44400 },
    },
    {
      items: [
        { id: 20071, name: 'Backstage Ragged Hat', quantity: 15 },
        { id: 20072, name: 'Spotlight Bowler', quantity: 25 },
      ],
      currency: { dorra: 66600 },
    },
    {
      items: [
        { id: 20071, name: 'Backstage Ragged Hat', quantity: 20 },
        { id: 20072, name: 'Spotlight Bowler', quantity: 40 },
      ],
      currency: { dorra: 146100 },
    },
    {
      items: [
        { id: 20071, name: 'Backstage Ragged Hat', quantity: 30 },
        { id: 20072, name: 'Spotlight Bowler', quantity: 55 },
        { id: 20073, name: 'Exeunt Bowler', quantity: 20 },
      ],
      currency: { dorra: 291600 },
    },
    {
      items: [
        { id: 20072, name: 'Spotlight Bowler', quantity: 75 },
        { id: 20073, name: 'Exeunt Bowler', quantity: 30 },
      ],
      currency: { dorra: 560200 },
    },
    {
      items: [
        { id: 20072, name: 'Spotlight Bowler', quantity: 95 },
        { id: 20073, name: 'Exeunt Bowler', quantity: 50 },
      ],
      currency: { dorra: 1121300 },
    },
    { items: [], currency: { dorra: 1121300 } },
  ],
  skillUpgrades: [
    {
      items: [
        { id: 32001, name: 'Tapping Game Cartridge', quantity: 6 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 2 },
      ],
      currency: { dorra: 13300 },
    },
    {
      items: [
        { id: 32001, name: 'Tapping Game Cartridge', quantity: 12 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 6 },
      ],
      currency: { dorra: 17600 },
    },
    {
      items: [
        { id: 32001, name: 'Tapping Game Cartridge', quantity: 24 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 3 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 10 },
      ],
      currency: { dorra: 49800 },
    },
    {
      items: [
        { id: 32001, name: 'Tapping Game Cartridge', quantity: 38 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 8 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 24 },
      ],
      currency: { dorra: 100000 },
    },
    {
      items: [
        { id: 32001, name: 'Tapping Game Cartridge', quantity: 70 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 14 },
        { id: 32003, name: 'Magic Sound Game Cartridge', quantity: 6 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 55 },
      ],
      currency: { dorra: 400000 },
    },
    {
      items: [
        { id: 20053, name: 'Radiant Feather Crown', quantity: 1 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 50 },
        { id: 32003, name: 'Magic Sound Game Cartridge', quantity: 18 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 232 },
      ],
      currency: { dorra: 900000 },
    },
    {
      items: [
        { id: 20053, name: 'Radiant Feather Crown', quantity: 2 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 90 },
        { id: 32003, name: 'Magic Sound Game Cartridge', quantity: 34 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 323 },
      ],
      currency: { dorra: 1600000 },
    },
    {
      items: [
        { id: 20053, name: 'Radiant Feather Crown', quantity: 3 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 140 },
        { id: 32003, name: 'Magic Sound Game Cartridge', quantity: 50 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 478 },
      ],
      currency: { dorra: 2300000 },
    },
    {
      items: [
        { id: 20053, name: 'Radiant Feather Crown', quantity: 6 },
        { id: 32002, name: 'Rhythm Game Cartridge', quantity: 200 },
        { id: 32003, name: 'Magic Sound Game Cartridge', quantity: 70 },
        { id: 32000, name: 'Chess Piece of Skill', quantity: 927 },
      ],
      currency: { dorra: 3400000 },
    },
  ],
};
