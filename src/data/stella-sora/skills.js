// Character Skills Data - Auto-generated from characters/characters folder
// Contains all skill-related data with raw params for level scaling

export const characterSkills = {
  amber: {
    name: 'Amber',
    id: 103,
    normalAttack: {
      name: 'Duet',
      icon: 'Icon/Skill/10301_Normal',
      description:
        'Fires both pistols. Each shot deals <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Magazine holds 12 ammo.',
      shortDescription: 'Fires both pistols at the target rapidly.',
      params: ['9.9%/10.9%/11.8%/14.8%/15.8%/16.8%/18.8%/19.7%/20.7%/22.7%/23.7%/24.7%/25.7%'],
      hints: {},
    },
    skill: {
      name: 'Fireworks Jam',
      icon: 'Icon/Skill/10301_Skill_Main_1',
      description:
        'Fires both pistols in a sweeping motion, dealing <color=#fb8037>&Param1& of ATK x2</color> and <color=#fb8037>&Param2& of ATK x4</color> as AoE Ignis DMG, and increasing Auto Attack DMG by &Param4& for &Param5&s.\u000bFireworks Jam (Main Skill) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param3& of ATK as AoE Ignis Mark DMG.',
      shortDescription:
        'Fires both pistols in a sweeping motion three times.\u000bThe Main Skill can trigger ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '46%/51%/55%/69%/73%/78%/87%/92%/96%/106%/110%/115%/119%',
        '3.3%/3.6%/3.9%/4.9%/5.3%/5.6%/6.2%/6.6%/6.9%/7.6%/7.9%/8.2%/8.6%',
        '54%/65%/76%/87%/98%/109%/120%/131%/142%',
        '25%',
        '10',
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
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Bullet Waltz',
      icon: 'Icon/Skill/10301_Skill_Support',
      description:
        'Charges forward swiftly, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Ignis DMG.\u000bBullet Waltz (Support Skill) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param2& of ATK as AoE Ignis Mark DMG.',
      shortDescription:
        'Charges at the target and deals DMG.\u000bThe Support Skill can trigger ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '30%/33%/36%/44%/47%/50%/56%/59%/62%/68%/71%/74%/77%',
        '54%/65%/76%/87%/98%/109%/120%/131%/142%',
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
      cooldown: '14s',
    },
    ultimate: {
      name: 'Spark of Finality',
      icon: 'Icon/Skill/10301_Ultra',
      description:
        'Shoots a beam at the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG.\u000bSpark of Finality (Ultimate) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param2& of ATK as AoE Ignis Mark DMG.',
      shortDescription:
        'Shoots a beam at the target.\u000bThe Ultimate can trigger ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '479%/527%/574%/718%/766%/814%/910%/957%/1005%/1101%/1149%/1197%/1245%',
        '54%/65%/76%/87%/98%/109%/120%/131%/142%',
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
      cooldown: '20s',
      energy: 190,
    },
  },
  ann: {
    name: 'Ann',
    id: 123,
    normalAttack: {
      name: 'Fierce Bite',
      icon: 'Icon/Skill/12301_Normal',
      description:
        'Coco the Firefang pounces and bites multiple times.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×2</color> as Ventus DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Ventus DMG.',
      shortDescription: 'Coco the Firefang pounces on the target repeatedly.',
      params: [
        '10.9%/12%/13.1%/16.3%/17.4%/18.5%/20.7%/21.8%/22.9%/25%/26.1%/27.2%/28.3%',
        '16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%',
        '16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%',
        '21.8%/24%/26.1%/32.7%/34.8%/37%/41.4%/43.6%/45.7%/50.1%/52.3%/54.4%/56.6%',
      ],
      hints: {},
    },
    skill: {
      name: 'Puffloon Spits',
      icon: 'Icon/Skill/12301_Skill_Main',
      description:
        "Summons Bubble the Puffloon who spits wind bullets, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Minion DMG. \u000bBubble has 100% Ann's ATK and lasts for 15s. \u000bWhen Bubble deals DMG, there is a 25% chance to create a Wind Burst, dealing <color=#ec6d21>&Param2& of ATK</color> as Ventus Minion DMG, and inflicting ##Ventus Mark: Breeze#2017#. This effect can only be triggered once per second. \u000bWhen Bubble is on the field, increases the squad's &Param3& by <color=#fb8037>&Param4&</color>.",
      shortDescription:
        "Summons Bubble the Puffloon to attack the target, with a chance to create a Wind Burst. Inflicts ##Ventus Mark: Breeze#2017#.\u000bWhen Bubble is on the battlefield, increases the squad's &Param3&.",
      params: [
        '7.6%/8.4%/9.1%/11.4%/12.2%/12.9%/14.5%/15.2%/16%/17.5%/18.3%/19%/19.8%',
        '13.7%/15.1%/16.4%/20.5%/21.9%/23.3%/26%/27.4%/28.8%/31.5%/32.9%/34.2%/35.6%',
        'ATK',
        '12%/15%/18%/28%/31%/34%/41%/44%/47%/53%/56%/60%/63%',
        '-1',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '15s',
    },
    supportSkill: {
      name: 'Wind Barrier',
      icon: 'Icon/Skill/12301_Skill_Support',
      description:
        "Raises a wall of wind, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG.\u000bThe wind wall lasts for 8s, constantly inflicts ##Ventus Mark: Breeze#2017# to nearby targets, and can block hostile projectiles 8 times.\u000bWhen casting the Support Skill Wind Barrier, increases the squad's &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s.",
      shortDescription:
        "Raises a wall of wind to deal DMG and block hostile projectiles. Constantly inflicts ##Ventus Mark: Breeze#2017#. When casting the Support Skill, increases the squad's &Param2&.",
      params: [
        '107%/118%/129%/161%/172%/183%/204%/215%/225%/247%/258%/268%/279%',
        'ATK',
        '15%/19%/23%/35%/39%/43%/51%/55%/59%/66%/70%/74%/78%',
        '15',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '16s',
    },
    ultimate: {
      name: 'Call of the Wild',
      icon: 'Icon/Skill/12301_Ultra',
      description:
        'Coco the Firefang lets forth a wild howl, repels hostile projectiles, and then fires wind bullets, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Ventus DMG and inflicting ##Ventus Mark: Breeze#2017#.',
      shortDescription:
        'Coco the Firefang repels hostile projectiles, fires wind bullets, dealing AoE DMG and inflicting ##Ventus Mark: Breeze#2017#.',
      params: ['509%/560%/610%/763%/814%/865%/966%/1017%/1068%/1170%/1221%/1272%/1322%'],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '25s',
      energy: 237.5,
    },
  },
  canace: {
    name: 'Canace',
    id: 120,
    normalAttack: {
      name: 'Gush Shots',
      icon: 'Icon/Skill/12001_Normal',
      description:
        'Fires consecutive Ventus-imbued bullets to deal DMG.\u000bStrike 1-4: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 5: <color=#ec6d21>&Param2& of ATK x2</color> as Ventus DMG.',
      shortDescription: 'Fires consecutive Ventus-imbued bullets to deal DMG.',
      params: [
        '11.1%/12.2%/13.3%/16.7%/17.8%/18.9%/21.1%/22.2%/23.3%/25.6%/26.7%/27.8%/28.9%',
        '16.9%/18.6%/20.3%/25.3%/27%/28.7%/32.1%/33.8%/35.4%/38.8%/40.5%/42.2%/43.9%',
      ],
      hints: {},
    },
    skill: {
      name: 'Verdant Shroud',
      icon: 'Icon/Skill/12001_Skill_Main',
      description:
        'Deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG to nearby targets, and then summons 2 Flying Leaves.\u000bA Flying Leaf can pierce through the target and deal <color=#ec6d21>&Param2&</color> of ATK as Ventus DMG for 7.2s.\u000bVerdant Shroud (Main Skill) can trigger ##Ventus Mark: Breeze#2017#, dealing &Param3& of ATK as AoE Ventus Mark DMG.',
      shortDescription:
        'Deals DMG to nearby targets and summons Flying Leaves that orbit around herself.\u000bThe Main Skill can trigger ##Breeze#2025#.',
      params: [
        '6.6%/7.3%/8%/9.9%/10.6%/11.3%/12.6%/13.3%/13.9%/15.2%/15.9%/16.6%/17.2%',
        '16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%',
        '25.3%/30.3%/35.4%/40.4%/45.5%/50.5%/55.6%/60.6%/65.7%',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
        2025: {
          id: 2025,
          name: 'Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    supportSkill: {
      name: 'Laurel Halo',
      icon: 'Icon/Skill/12001_Skill_Support',
      description:
        'Tosses a Laurel Wreath at the main Trekker. \u000bThe Laurel Wreath deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG every 0.4s for a total of 6s, and inflicts ##Ventus Mark: Breeze#2017#.',
      shortDescription:
        'Tosses a Laurel Wreath that circles around the main Trekker and inflicts ##Ventus Mark: Breeze#2017#.',
      params: ['27%/30%/32%/40%/43%/46%/51%/54%/57%/62%/65%/67%/70%'],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Double Tempest',
      icon: 'Icon/Skill/12001_Ultra',
      description:
        'Creates 2 cyclones, each dealing <color=#ec6d21>&Param1& of ATK x9</color> as AoE Ventus DMG, lasting for 4s.',
      shortDescription: 'Creates cyclones to deal damage.',
      params: ['80%/88%/96%/120%/128%/136%/152%/160%/168%/184%/192%/199%/207%'],
      hints: {},
      cooldown: '30s',
      energy: 285,
    },
  },
  caramel: {
    name: 'Caramel',
    id: 147,
    normalAttack: {
      name: 'Solo Flash',
      icon: 'Icon/Skill/14701_Normal',
      description:
        'Fires consecutive musical notes.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK x2</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x5</color> as Umbra DMG.',
      shortDescription: 'Unleashes a barrage of musical notes at the target.',
      params: [
        '6.7%/7.4%/8.1%/10.1%/10.8%/11.4%/12.8%/13.5%/14.1%/15.5%/16.2%/16.8%/17.5%',
        '8.1%/8.9%/9.7%/12.1%/13%/13.8%/15.4%/16.2%/17%/18.6%/19.4%/20.2%/21.1%',
        '10.8%/11.9%/13%/16.2%/17.3%/18.4%/20.5%/21.6%/22.7%/24.8%/25.9%/27%/28.1%',
      ],
      hints: {},
    },
    skill: {
      name: 'Co-Performance',
      icon: 'Icon/Skill/14701_Skill_Main',
      description:
        "Throws Demonic Boombox, dealing <color=#ec6d21>&Param1&</color> and <color=#ec6d21>&Param2& of ATK</color> as Umbra Minion DMG in a large area as it falls and pulsates.\u000bWhen Caramel is near the Demonic Boombox, a connection is established, increasing her &Param3& by <color=#ec6d21>&Param4&</color>.\u000bDemonic Boombox has 100% of Caramel's ATK and lasts for 15s.\u000bDemonic Boombox can trigger ##Umbra Mark: Gloom#2018#, dealing &Param5& of ATK as Umbra Mark DMG to the target, and inflict Umbra Burn, which deals DMG to the target every 0.5s for &Param7&s, totaling to &Param6& of ATK as Umbra Mark DMG.",
      shortDescription:
        "Summons Demonic Boombox to attack the target repeatedly. When near the Demonic Boombox, increases Caramel's &Param3&. Demonic Boombox can trigger ##Umbra Mark: Gloom#2018#.",
      params: [
        '35%/38%/42%/52%/56%/59%/66%/70%/73%/80%/84%/87%/90%',
        '18.2%/20%/21.8%/27.3%/29.1%/30.9%/34.6%/36.4%/38.2%/41.9%/43.7%/45.5%/47.3%',
        'ATK',
        '20%',
        '11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%',
        '1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%',
        '5',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '10.5s',
    },
    supportSkill: {
      name: 'Melodic Sweep',
      icon: 'Icon/Skill/14701_Skill_Support',
      description:
        'Sweeps with the bass, dealing <color=#ec6d21>&Param1& of ATK x2</color> as Umbra DMG. Then, unleashes 5 musical notes to attack nearby targets, each dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bMelodic Sweep (Support Skill) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param3& of ATK as Umbra Mark DMG to the target and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param5&s, totaling to &Param4& of ATK as Umbra Mark DMG.',
      shortDescription:
        'Sweeps with the bass and unleashes musical notes, dealing multiple instances of DMG. Melodic Sweep (Support Skill) can trigger ##Umbra Mark: Gloom#2018#.',
      params: [
        '33.4%/36.7%/40.1%/50.1%/53.4%/56.8%/63.5%/66.8%/70.1%/76.8%/80.2%/83.5%/86.8%',
        '41%/45%/49%/61%/65%/69%/77%/81%/85%/94%/98%/102%/106%',
        '11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%',
        '1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%',
        '5',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Melodic Seraphim',
      icon: 'Icon/Skill/14701_Ultra',
      description:
        'Plays the bass with intense passion, dealing <color=#ec6d21>&Param1& of ATK x6</color> as AoE Umbra DMG.\u000bMelodic Seraphim (Ultimate) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param2& of ATK as Umbra Mark DMG and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param4&s, totaling to &Param3& of ATK as Umbra Mark DMG.',
      shortDescription:
        'Plays the bass to deal multiple instances of DMG in a large area. The Ultimate can trigger ##Umbra Mark: Gloom#2018#.',
      params: [
        '140%/154%/168%/210%/224%/238%/266%/280%/294%/321%/335%/349%/363%',
        '11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%',
        '1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%',
        '5',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  chitose: {
    name: 'Chitose',
    id: 144,
    normalAttack: {
      name: 'Aeroflow',
      icon: 'Icon/Skill/14401_Normal',
      description:
        'Wields the odachi to deal DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> and <color=#fb8037>&Param8& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x2</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> and <color=#fb8037>&Param9& of ATK</color> as Aqua DMG.\u000bStrike 6: <color=#fb8037>&Param6& of ATK</color> and <color=#fb8037>&Param7& of ATK</color> as Aqua DMG.',
      shortDescription: 'Wields the odachi to deal DMG multiple times.',
      params: [
        '9.2%/10.6%/11.9%/16.1%/17.3%/18.6%/21.2%/22.3%/23.4%/25.6%/27.4%/29.3%/31.1%',
        '13.3%/15.3%/17.3%/23.3%/25.2%/27%/30.8%/32.4%/34%/37.2%/39.8%/42.5%/45.1%',
        '11.3%/12.9%/14.6%/19.7%/21.3%/22.9%/26%/27.4%/28.7%/31.4%/33.7%/35.9%/38.2%',
        '9.4%/10.8%/12.2%/16.4%/17.7%/19%/21.7%/22.8%/23.9%/26.1%/28%/29.9%/31.8%',
        '10.1%/11.6%/13.2%/17.7%/19.1%/20.5%/23.4%/24.6%/25.8%/28.2%/30.2%/32.3%/34.3%',
        '57%/66%/75%/100%/108%/117%/133%/139%/146%/160%/172%/183%/195%',
        '31%/35%/40%/54%/58%/62%/71%/75%/78%/86%/92%/98%/104%',
        '26.2%/30%/34%/46%/50%/53%/61%/64%/67%/73%/78%/84%/89%',
        '20.2%/23.3%/26.3%/35.4%/38.2%/41%/46.7%/49.1%/51.6%/56.4%/60.5%/64.5%/68.5%',
      ],
      hints: {},
    },
    skill: {
      name: 'Torrent Flash',
      icon: 'Icon/Skill/14401_Skill_Main',
      description:
        'Dashes forward, dealing <color=#fb8037>&Param1& of ATK x2</color> as AoE Aqua DMG. It can be cast 2 times initially.\u000bAfter every 2 casts of Torrent Flash, the next Torrent Flash becomes Torrent Flash: Scale: Summons a Coiling Serpent, dealing <color=#fb8037>&Param2& of ATK x3</color> as AoE Aqua DMG.\u000bTorrent Flash (Main Skill) and Torrent Flash: Scale can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Dashes forward, dealing AoE Aqua DMG. After every 2 casts, the next cast of the skill is enhanced.\u000bThe Main Skill can trigger ##Aqua Mark#1018#.',
      params: [
        '109%/126%/142%/191%/206%/222%/252%/265%/279%/305%/327%/349%/370%',
        '128%/147%/166%/223%/241%/259%/295%/310%/326%/356%/382%/407%/433%',
        '31%/40%/49%/58%/67%/76%/85%/95%/104%',
      ],
      hints: {
        1018: {
          id: 1018,
          name: 'Aqua Mark',
          description:
            "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Water Surge',
      icon: 'Icon/Skill/14401_Skill_Support',
      description:
        'Deliver 3 rounds of rapid slashes, each round dealing <color=#fb8037>&Param1& of ATK x4</color> as AoE Aqua DMG.\u000bWhen casting the Support Skill, generates multiple Mirror Images nearby, dealing <color=#fb8037>&Param2& of ATK</color> as Aqua DMG. This effect can only be triggered up to 3 times.\u000bWater Surge (Support Skill) can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Deliver several rounds of rapid slashes, dealing AoE Aqua DMG.\u000bWhen casting the Support Skill, generates multiple Mirror Images nearby, dealing Aqua DMG.\u000bThe Support Skill can trigger ##Aqua Mark#1018#.',
      params: [
        '9.8%/11.3%/12.7%/17.1%/18.5%/19.9%/22.6%/23.8%/24.9%/27.3%/29.3%/31.2%/33.2%',
        '18.4%/21.2%/24%/32.3%/34.9%/37.4%/42.6%/44.8%/47%/51.5%/55.1%/58.8%/62.5%',
        '31%/40%/49%/58%/67%/76%/85%/95%/104%',
      ],
      hints: {
        1018: {
          id: 1018,
          name: 'Aqua Mark',
          description:
            "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Waves of Naraka',
      icon: 'Icon/Skill/14401_Ultra',
      description:
        'Dual-wields katanas, dealing <color=#fb8037>&Param1& of ATK x11</color> as Aqua DMG in a large area. Then pulls in Coiling Serpent, dealing <color=#fb8037>&Param2& of ATK</color> as Aqua DMG in a large area.\u000bNaraka Waves (Ultimate) can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Dual-wields katanas and then pulls in Coiling Serpent, dealing Aqua DMG in a large area.\u000bThe Ultimate can trigger ##Aqua Mark#1018#.',
      params: [
        '69%/79%/90%/121%/131%/140%/160%/168%/176%/193%/206%/220%/234%',
        '326%/374%/423%/570%/615%/661%/752%/791%/830%/908%/973%/1038%/1103%',
        '31%/40%/49%/58%/67%/76%/85%/95%/104%',
      ],
      hints: {
        1018: {
          id: 1018,
          name: 'Aqua Mark',
          description:
            "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  chixia: {
    name: 'Chixia',
    id: 141,
    normalAttack: {
      name: 'Mystic Brushstrokes',
      icon: 'Icon/Skill/14101_Normal',
      description:
        'Waves the writing brush and inflicts Ink.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK x4</color> as Ignis DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x3</color> as Ignis DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Ignis DMG.',
      shortDescription: 'Hurls the writing brush to perform multiple attacks.',
      params: [
        '12.2%/14%/15.8%/21.3%/23%/24.7%/28.1%/29.6%/31%/34%/36.4%/38.8%/41.3%',
        '14.7%/16.9%/19.2%/25.8%/27.8%/29.9%/34%/35.8%/37.6%/41.1%/44.1%/47%/50%',
        '7.2%/8.3%/9.4%/12.6%/13.6%/14.6%/16.6%/17.5%/18.4%/20.1%/21.5%/23%/24.4%',
        '6.7%/7.7%/8.7%/11.8%/12.7%/13.6%/15.5%/16.3%/17.1%/18.8%/20.1%/21.4%/22.8%',
        '22.4%/25.8%/29.1%/39.2%/42.4%/45.5%/51.8%/54.5%/57.1%/62.5%/67%/71.5%/76%',
      ],
      hints: {},
    },
    skill: {
      name: 'Purifying Flames',
      icon: 'Icon/Skill/14101_Skill_Main',
      description:
        'Spreads out a torrent of flames, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG every 0.2s for a total of 3s. When dealing DMG to targets with Ink, inflicts ##Ignite#2027#.\u000bPurifying Flames (Main Skill) can trigger ##Ignis Mark#1016#, dealing &Param3& of ATK as AoE Ignis Mark DMG.',
      shortDescription:
        'Spreads out a torrent of flames ahead, dealing DMG over time.\u000bThe Main Skill can trigger ##Ignis Mark#1016#.',
      params: [
        '12.2%/14%/15.8%/21.3%/23%/24.7%/28.1%/29.6%/31%/34%/36.4%/38.8%/41.3%',
        'Purifying Flames',
        '28%/36%/45%/53%/61%/70%/78%/86%/95%',
      ],
      hints: {
        1016: {
          id: 1016,
          name: 'Ignis Mark',
          description:
            "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        2027: {
          id: 2027,
          name: 'Ignite',
          description:
            "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
          params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
        },
      },
      cooldown: '7s',
    },
    supportSkill: {
      name: 'Awakening: Crimson Dragon',
      icon: 'Icon/Skill/14101_Skill_Support',
      description:
        "Summons a Crimson Dragon every 2s, up to 3 times.\u000bEach Crimson Dragon lasts for 8s and spits Ink at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis Minion's DMG. Upon vanishing, it charges toward the target, dealing <color=#fb8037>&Param2& of ATK</color> as Ignis Minion's AoE DMG.\u000bWhen Crimson Dragon deals DMG, inflicts ##Ignis Mark: Sacred Flame#2013#.\u000bMinions summoned by &Param3& will be removed when the Support Skill is cast again.",
      shortDescription:
        'Summons a Crimson Dragon to attack the target.\u000bThe Support Skill can inflict ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '39%/45%/51%/69%/74%/80%/91%/95%/100%/109%/117%/125%/133%',
        '57%/65%/73%/99%/107%/115%/131%/137%/144%/158%/169%/180%/192%',
        'Awakening: Crimson Dragon',
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
      name: "Dragon's Ascension",
      icon: 'Icon/Skill/14101_Ultra',
      description:
        'Conjures a Fire Dragon to circle around the target, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG in a large area every 0.3s for a total of 5s.',
      shortDescription: "Conjures a Fire Dragon to attack the target's location.",
      params: [
        '87%/101%/114%/153%/165%/177%/202%/212%/223%/244%/261%/279%/296%',
        'HitDamage,DamageNum,141400002',
        'HitDamage,DamageNum,141400003',
        "Dragon's Ascension",
        '28%/36%/45%/53%/61%/70%/78%/86%/95%',
      ],
      hints: {},
      cooldown: '30s',
      energy: 285,
    },
  },
  coronis: {
    name: 'Coronis',
    id: 118,
    normalAttack: {
      name: 'Midnight Cleave',
      icon: 'Icon/Skill/11801_Normal',
      description:
        'Wields the scythe to attack targets.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Umbra DMG.',
      shortDescription: 'Wields the scythe to attack targets.',
      params: [
        '12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%',
        '12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%',
        '12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%',
        '38%/42%/46%/58%/61%/65%/73%/77%/81%/88%/92%/96%/100%',
      ],
      hints: {},
    },
    skill: {
      name: 'Sleight of Scythe',
      icon: 'Icon/Skill/11801_Skill_Main',
      description:
        'After multiple slices, delivers a powerful smash to the target, dealing <color=#ec6d21>&Param1& of ATK x5</color>/<color=#ec6d21>&Param2& of ATK</color> as AoE Umbra DMG.\u000bSleight of Scythe (Main Skill) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Shackles#2020#, lasting for &Param4&s.',
      shortDescription:
        'After multiple slices, delivers a powerful smash to the target. The Main Skill can trigger ##Umbra Mark: Gloom#2018#.',
      params: [
        '19.3%/21.3%/23.2%/29%/30.9%/32.9%/36.7%/38.7%/40.6%/44.5%/46.4%/48.3%/50.3%',
        '41%/46%/50%/62%/66%/70%/79%/83%/87%/95%/99%/104%/108%',
        '39%/47%/55%/62%/70%/78%/86%/94%/101%',
        '5',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
        2020: {
          id: 2020,
          name: 'Dark Shackles',
          description:
            'After some Umbra Trekkers trigger Umbra Mark, deal damage and trigger Dark Shackles, binding weaker enemies in place.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    supportSkill: {
      name: 'Bone Chain',
      icon: 'Icon/Skill/11801_Skill_Support',
      description:
        'Delivers a horizontal slash, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra DMG. Then breaks the chains to pull all connected targets, dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bBone Chain (Support Skill) can inflict ##Umbra Mark: Gloom#2018#.',
      shortDescription:
        'Delivers a horizontal slash, and breaks the chains to pull all connected targets. The Support Skill can inflict ##Umbra Mark: Gloom#2018#.',
      params: [
        '300%/331%/361%/451%/481%/511%/571%/601%/631%/691%/721%/751%/781%',
        '128%/141%/154%/193%/205%/218%/244%/257%/269%/295%/308%/321%/334%',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Void Reaper',
      icon: 'Icon/Skill/11801_Ultra',
      description:
        'Creates a dark storm of despair that constantly pulls enemies in, dealing <color=#ec6d21>&Param1& of ATK x8</color> as Umbra DMG in a large area. Ends with a powerful horizontal slash, dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG in a large area.',
      shortDescription:
        'Pulls enemies in constantly, dealing multiple instances of damage in a large area.',
      params: [
        '114%/125%/136%/171%/182%/193%/216%/227%/239%/262%/273%/284%/296%',
        '366%/403%/439%/549%/586%/623%/696%/732%/769%/842%/879%/916%/952%',
      ],
      hints: {},
      cooldown: '30s',
      energy: 285,
    },
  },
  cosette: {
    name: 'Cosette',
    id: 142,
    normalAttack: {
      name: 'Abyssal Swipe',
      icon: 'Icon/Skill/14201_Normal',
      description:
        'Lashes out with both claws.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x2</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK x2</color> as Umbra DMG.\u000bStrike 5: <color=#ec6d21>&Param5& of ATK</color> as Umbra DMG.',
      shortDescription: 'Lashes out with both claws, dealing multiple instances of damage.',
      params: [
        '12%/13.2%/14.4%/18%/19.2%/20.4%/22.8%/24%/25.2%/27.6%/28.8%/30%/31.2%',
        '14.3%/15.7%/17.1%/21.4%/22.9%/24.3%/27.1%/28.6%/30%/32.9%/34.3%/35.7%/37.2%',
        '28.6%/31.4%/34.3%/42.8%/45.7%/48.6%/54.3%/57.1%/60%/65.7%/68.6%/71.4%/74.3%',
        '4.1%/4.5%/4.9%/6.1%/6.5%/6.9%/7.7%/8.2%/8.6%/9.4%/9.8%/10.2%/10.6%',
        '24.4%/26.9%/29.3%/36.6%/39.1%/41.5%/46.4%/48.8%/51.3%/56.1%/58.6%/61%/63.5%',
      ],
      hints: {},
    },
    skill: {
      name: 'Nocturn Hooks',
      icon: 'Icon/Skill/14201_Skill_Main',
      description:
        "Attacks with double hook punches, each dealing <color=#ec6d21>&Param1& of ATK x2</color>/<color=#ec6d21>&Param2& of ATK x4</color> as Umbra DMG. Inflicts ##Umbra Mark: Gloom#2018#.\u000bWhen Nocturn Hooks (Main Skill) deals DMG, increases the target's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
      shortDescription:
        "Attacks with hook punches that deal multiple instances of DMG and inflicts ##Umbra Mark: Gloom#2018#. When the Main Skill deals DMG, increases the target's &Param3&.",
      params: [
        '32%/35%/39%/48%/52%/55%/61%/64%/68%/74%/77%/80%/84%',
        '32%/35%/39%/48%/52%/55%/61%/64%/68%/74%/77%/80%/84%',
        'Umbra DMG Taken',
        '14%/17%/20%/28%/31%/33%/39%/42%/44%/50%/53%/55%/58%',
        '6',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    supportSkill: {
      name: 'Abyssal Hunter',
      icon: 'Icon/Skill/14201_Skill_Support',
      description:
        "Strikes quickly with the steel claws, dealing <color=#ec6d21>&Param1& of ATK x8</color> as AoE Umbra DMG, and inflicting ##Umbra Mark: Gloom#2018#.\u000bWhen the Support Skill Abyssal Hunter deals DMG, increases the target's &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
      shortDescription:
        "Deals multiple instances of AoE DMG and inflicts ##Umbra Mark: Gloom#2018#. When the Support Skill deals DMG, increases the target's &Param2&.",
      params: [
        '23.2%/25.5%/27.8%/34.8%/37.1%/39.4%/44.1%/46.4%/48.7%/53.4%/55.7%/58%/60.3%',
        'Umbra DMG Taken',
        '17%/21%/24%/34%/37%/41%/47%/51%/54%/61%/64%/68%/71%',
        '6',
      ],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Dark Apocalypse',
      icon: 'Icon/Skill/14201_Ultra',
      description:
        'Channels energy and keeps pulling nearby enemies close, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra DMG and inflicting ##Umbra Mark: Gloom#2018#.',
      shortDescription:
        'Pulls enemies in constantly, dealing AoE DMG and inflicting ##Umbra Mark: Gloom#2018#.',
      params: ['718%/790%/862%/1077%/1149%/1221%/1364%/1436%/1508%/1652%/1723%/1795%/1867%'],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  flora: {
    name: 'Flora',
    id: 126,
    normalAttack: {
      name: 'Three-Act Show',
      icon: 'Icon/Skill/12601_Normal',
      description:
        'Consecutively spawns fiery birds to deal DMG.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Ignis DMG.',
      shortDescription: 'Consecutively spawns fiery birds to deal DMG.',
      params: [
        '12.5%/13.7%/15%/18.7%/20%/21.2%/23.7%/25%/26.2%/28.7%/30%/31.2%/32.5%',
        '14.2%/15.7%/17.1%/21.4%/22.8%/24.2%/27%/28.5%/29.9%/32.7%/34.2%/35.6%/37%',
        '24.9%/27.4%/29.9%/37.4%/39.9%/42.4%/47.4%/49.9%/52.3%/57.3%/59.8%/62.3%/64.8%',
      ],
      hints: {},
    },
    skill: {
      name: 'Hat Toss',
      icon: 'Icon/Skill/12601_Skill_Main',
      description:
        "Throws the top hat, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG every 0.5s for a total of 5s, and inflicting ##Ignis Mark: Sacred Flame#2013#. \u000bWhen casting this skill, increases the squad's &Param9& by <color=#fb8037>&Param7&</color> for &Param4&s.",
      shortDescription:
        'Throws the top hat, dealing DMG multiple times and inflicting ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '31%/34%/37%/46%/49%/52%/58%/61%/64%/70%/73%/77%/80%',
        '12%/14.4%/16.7%/23.8%/26.1%/28.5%/33.2%/35.6%/37.9%/42.6%/45%/47.3%/49.7%',
        '8',
        'Effect,LevelUp,12693002,EffectTypeParam5,Fixed',
        'Effect,LevelUp,12693002,EffectTypeParam4,Fixed',
        '12%/14.4%/16.7%/23.8%/26.1%/28.5%/33.2%/35.6%/37.9%/42.6%/45%/47.3%/49.7%',
        'Effect,LevelUp,12693002,EffectTypeParam6,HdPct',
        'ATK',
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
      cooldown: '12s',
    },
    supportSkill: {
      name: 'Flutter Flare',
      icon: 'Icon/Skill/12601_Skill_Support',
      description:
        "Spawns 3 Mindflare Butterflies and 3 Soulflare Butterflies with different effects.\u000bMindflare Butterfly: Increases the main Trekker's &Param9& by <color=#fb8037>&Param7&</color>. Each Mindflare Butterfly also boosts the main Trekker's &Param4& by &Param1& for &Param5&s.\u000bSoulflare Butterfly: Deals <color=#fb8037>&Param2& of ATK</color> as Ignis DMG and inflicts 1 stack of ##Butterfly Mark#2021# and ##Ignis Mark: Sacred Flame#2013#.",
      shortDescription:
        "Spawns 3 Mindflare Butterflies and 3 Soulflare Butterflies that work on the main Trekker and the target respectively.\u000bMindflare Butterfly: Increases the main Trekker's &Param4& and &Param9&.\u000bSoulflare Butterfly: Deals Ignis DMG and inflicts ##Ignis Mark: Sacred Flame#2013#.",
      params: [
        '3%',
        '91%/100%/109%/136%/145%/155%/173%/182%/191%/209%/218%/227%/236%',
        '3.5%',
        'Crit Rate',
        '10',
        '6.9%/8.3%/9.6%/13.7%/15%/16.4%/19.1%/20.4%/21.8%/24.5%/25.9%/27.2%/28.6%',
        'Crit DMG',
      ],
      hints: {
        2013: {
          id: 2013,
          name: 'Ignis Mark: Sacred Flame',
          description:
            'A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
          params: ['10'],
        },
        2021: {
          id: 2021,
          name: 'Butterfly Mark',
          description:
            "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
          params: ['Ignis DMG Taken'],
        },
      },
      cooldown: '14s',
    },
    ultimate: {
      name: 'Undying Phoenix',
      icon: 'Icon/Skill/12601_Ultra',
      description:
        'Spawns a Celestial Phoenix, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG before turning into an Phoenix Egg, lasting for 8s. \u000bThe Phoenix Egg draws in nearby targets, dealing <color=#fb8037>&Param2& of ATK</color> as Ignis DMG per second and inflicting ##Ignis Mark: Sacred Flame#2013#.',
      shortDescription:
        'Spawns a Celestial Phoenix, dealing AoE DMG before turning into a Phoenix Egg. Inflicts ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        '287%/316%/345%/431%/460%/488%/546%/574%/603%/661%/689%/718%/747%',
        '62%/68%/74%/92%/99%/105%/117%/123%/129%/142%/148%/154%/160%',
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
      cooldown: '30s',
      energy: 285,
    },
  },
  freesia: {
    name: 'Freesia',
    id: 125,
    normalAttack: {
      name: 'Power of Reason',
      icon: 'Icon/Skill/12501_Normal',
      description:
        'Swings the great axe to attack the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Aqua DMG.\u000bIn ##Berserk#2014# state, rapidly hacks at enemies instead.\u000bStrike 1: <color=#fb8037>&Param6& of ATK x2</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param7& of ATK x2</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param8& of ATK</color>, <color=#fb8037>&Param9& of ATK x4</color>, and <color=#fb8037>&Param10& of ATK</color> as Aqua DMG.',
      shortDescription:
        'Swings the greataxe to attack enemies. If Freesia is in ##Berserk#2014#, she rapidly hacks at enemies instead.',
      params: [
        '49%/56%/63%/85%/92%/99%/113%/118%/124%/136%/146%/155%/165%',
        '68%/78%/88%/119%/128%/138%/157%/165%/173%/189%/203%/216%/230%',
        '26.5%/30.5%/34.4%/46.3%/50.1%/53.8%/61.2%/64.4%/67.5%/73.9%/79.2%/84.5%/89.8%',
        '42%/49%/55%/74%/80%/86%/98%/103%/108%/118%/127%/135%/144%',
        '127%/146%/165%/222%/240%/258%/293%/309%/324%/354%/380%/405%/431%',
        '48%/55%/63%/84%/91%/98%/111%/117%/123%/134%/144%/153%/163%',
        '36%/41%/47%/63%/68%/73%/83%/87%/92%/100%/107%/114%/122%',
        '32%/36%/41%/55%/60%/64%/73%/77%/80%/88%/94%/101%/107%',
        '21%/24.2%/27.3%/36.8%/39.7%/42.6%/48.5%/51%/53.6%/58.6%/62.8%/67%/71.2%',
        '63%/72%/82%/110%/119%/128%/146%/153%/161%/176%/188%/201%/214%',
      ],
      hints: {
        2014: {
          id: 2014,
          name: 'Berserk',
          description:
            'Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.',
          params: ['46%', 'Character,NoLevel,125,Name,Text'],
        },
      },
    },
    skill: {
      name: 'Freezing Swirl',
      icon: 'Icon/Skill/12501_Skill_Support',
      description:
        "Charges up to unleash a Whirlwind Slash, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG to nearby targets every 0.3s. Charging increases the skill's duration.\u000bFreezing Swirl (Main Skill) can trigger ##Aqua Mark#1018#, dealing &Param2& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
      shortDescription:
        'Charges up and continuously deals DMG to nearby targets.\u000bThe Main Skill can trigger ##Aqua Mark#1018#.',
      params: [
        '25.2%/28.9%/32.7%/44%/47.5%/51.1%/58.1%/61.1%/64.1%/70.2%/75.2%/80.2%/85.3%',
        '52%/67%/82%/98%/113%/129%/144%/159%/175%',
      ],
      hints: {
        1018: {
          id: 1018,
          name: 'Aqua Mark',
          description:
            "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Frost Bloom',
      icon: 'Icon/Skill/12501_Skill_Main',
      description:
        'Creates a field of Ice Flowers ahead, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Aqua DMG.\u000bAfter 1s, the Ice Flowers burst, dealing <color=#fb8037>&Param2&</color> of ATK as AoE Aqua DMG.\u000bFrost Bloom (Support Skill) can inflict ##Aqua Mark: Torrent#2008#.',
      shortDescription:
        'Generates Ice Flowers to deal DMG.\u000bThe Support Skill can inflict ##Aqua Mark: Torrent#2008#.',
      params: [
        '69%/79%/90%/121%/131%/140%/160%/168%/176%/193%/207%/220%/234%',
        '62%/72%/81%/109%/118%/126%/144%/151%/159%/173%/186%/198%/211%',
      ],
      hints: {
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Elegy of Frost',
      icon: 'Icon/Skill/12501_Ultra',
      description:
        'Freesia growls furiously, dealing <color=#fb8037>&Param1& of ATK</color> and <color=#fb8037>&Param2&of ATK</color> as Aqua DMG in a large area. She then deals <color=#fb8037>&Param3& of ATK</color> as AoE Aqua DMG and enters the ##Berserk#2014# status for 20s.\u000bWhen Freesia is in ##Berserk#2014# status as a support Trekker, she will automatically attack nearby enemies.',
      shortDescription: 'Deals damage to nearby targets and enters ##Berserk#2014#.',
      params: [
        '40%/46%/52%/70%/75%/81%/92%/97%/102%/111%/119%/127%/135%',
        '56%/64%/73%/98%/106%/113%/129%/136%/142%/156%/167%/178%/189%',
        '91%/105%/119%/160%/172%/185%/211%/222%/233%/254%/273%/291%/309%',
      ],
      hints: {
        2014: {
          id: 2014,
          name: 'Berserk',
          description:
            'Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.',
          params: ['46%', 'Character,NoLevel,125,Name,Text'],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  fuyuka: {
    name: 'Fuyuka',
    id: 134,
    normalAttack: {
      name: 'Blitz Combo',
      icon: 'Icon/Skill/13401_Normal',
      description:
        'Punches and kicks the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK x2</color> as Ignis DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x5</color> as Ignis DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> as Ignis DMG.\u000bCasts Fiery Punches when ammo is available.\u000bStrike 1: <color=#fb8037>&Param6& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param7& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param8& of ATK</color> as Ignis DMG.\u000bBlitz Combo and Fiery Punches deal <color=#fb8037>&Param9& of ATK</color> as AoE Ignis DMG to other targets behind the target hit by them.',
      shortDescription:
        'Punches rapidly, dealing multiple phases of DMG.\u000bCasts Fiery Punches when ammo is available.',
      params: [
        '10.2%/11.8%/13.3%/17.9%/19.3%/20.8%/23.6%/24.8%/26.1%/28.5%/30.6%/32.6%/34.7%',
        '25%/29%/33%/44%/48%/51%/58%/61%/64%/70%/75%/80%/85%',
        '19.8%/22.7%/25.7%/34.6%/37.3%/40.1%/45.6%/48%/50.4%/55.1%/59.1%/63%/67%',
        '8.9%/10.2%/11.5%/15.5%/16.7%/18%/20.5%/21.5%/22.6%/24.7%/26.5%/28.2%/30%',
        '40%/45%/51%/69%/75%/80%/91%/96%/101%/110%/118%/126%/134%',
        '79%/91%/102%/138%/149%/160%/182%/191%/201%/220%/235%/251%/267%',
        '79%/91%/102%/138%/149%/160%/182%/191%/201%/220%/235%/251%/267%',
        '115%/133%/150%/202%/218%/234%/267%/281%/294%/322%/345%/368%/391%',
        '46%/53%/60%/81%/88%/94%/107%/113%/118%/129%/138%/148%/157%',
        '51%/66%/81%/96%/112%/127%/142%/157%/172%',
      ],
      hints: {},
    },
    skill: {
      name: 'Ignis Infusion',
      icon: 'Icon/Skill/13401_Skill_Main',
      description:
        'Strikes a Soaring Dragon Punch, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG, then slams the ground for an additional <color=#fb8037>&Param3& of ATK</color> as Ignis DMG and fully reloads ammo. Magazine capacity: 3 rounds.\u000b"&Param2&" (Main Skill) can trigger ##Ignis Mark#1016#, dealing &Param4& of ATK as Ignis Mark DMG to nearby targets.',
      shortDescription:
        'Strikes a Soaring Dragon Punch that deals two instances of DMG and receives ammo.\u000bThe Main Skill can trigger ##Ignis Mark#1016#.',
      params: [
        '153%/176%/199%/267%/289%/310%/353%/371%/389%/426%/457%/487%/518%',
        'Ignis Infusion',
        '229%/263%/298%/401%/433%/465%/529%/557%/584%/639%/685%/731%/776%',
        '51%/66%/81%/96%/112%/127%/142%/157%/172%',
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
      cooldown: '11s',
    },
    supportSkill: {
      name: 'Eruption Punch',
      icon: 'Icon/Skill/13401_Skill_Support',
      description:
        'Charges at the target and strikes a gale-like punch, dealing <color=#fb8037>&Param1& of ATK x11</color> as AoE Ignis DMG.\u000b&Param2& (Support Skill) can trigger ##Ignis Mark#1016#, dealing &Param3& of ATK as Ignis Mark DMG to nearby targets.',
      shortDescription:
        'Charges at the target and strikes a gale-like punch, dealing DMG over time.\u000bThe Support Skill can trigger ##Ignis Mark#1016#.',
      params: [
        '54%/62%/70%/94%/101%/109%/124%/130%/137%/149%/160%/171%/182%',
        'Eruption Punch',
        '51%/66%/81%/96%/112%/127%/142%/157%/172%',
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
      cooldown: '14s',
    },
    ultimate: {
      name: 'Blaze Unsealed',
      icon: 'Icon/Skill/13401_Ultra',
      description:
        'Fuyuka lifts the seal and fires her gauntlet, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bThen, Fuyuka keeps attacking nearby targets, dealing <color=#fb8037>&Param2& of ATK x5</color> and <color=#fb8037>&Param3& of ATK</color> as Ignis DMG.\u000b"&Param4&" (Ultimate) can trigger ##Ignis Mark#1016#, dealing &Param5& of ATK as Ignis Mark DMG to nearby targets.',
      shortDescription:
        'Fires a gauntlet, lifts the seal and keeps striking the target.\u000bThe Ultimate can trigger ##Ignis Mark#1016#.',
      params: [
        '413%/475%/537%/723%/781%/839%/954%/1004%/1053%/1153%/1235%/1318%/1400%',
        '280%/322%/364%/489%/529%/568%/646%/680%/713%/780%/836%/892%/948%',
        '884%/1016%/1149%/1546%/1670%/1794%/2041%/2147%/2253%/2465%/2642%/2819%/2996%',
        'Blaze Unsealed',
        '51%/66%/81%/96%/112%/127%/142%/157%/172%',
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
      cooldown: '40s',
      energy: 325,
    },
  },
  gerie: {
    name: 'Gerie',
    id: 149,
    normalAttack: {
      name: 'Kiss of Death',
      icon: 'Icon/Skill/14901_Normal',
      description:
        'Slings the chain shovel to deal DMG multiple times.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Terra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK x2</color> as Terra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK</color> as Terra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK x2</color> as Terra DMG.\u000bStrike 5: <color=#ec6d21>&Param5& of ATK</color>/<color=#ec6d21>&Param6& of ATK</color> as Terra DMG.',
      shortDescription: 'Swings the chain shovel to deal DMG multiple times.',
      params: [
        '15.4%/17.7%/20%/26.9%/29%/31.2%/35.5%/37.3%/39.2%/42.8%/45.9%/49%/52.1%',
        '9.8%/11.3%/12.7%/17.2%/18.5%/19.9%/22.6%/23.8%/25%/27.3%/29.3%/31.3%/33.2%',
        '14.1%/16.2%/18.3%/24.6%/26.6%/28.5%/32.5%/34.2%/35.8%/39.2%/42%/44.8%/47.6%',
        '13.1%/15%/17%/23%/25%/27%/30%/32%/33%/36%/39%/42%/44%',
        '22.9%/26.3%/29.7%/40%/43.2%/46.4%/52.8%/55.6%/58.3%/63.8%/68.4%/72.9%/77.5%',
        '16.8%/19.3%/21.8%/29.4%/31.7%/34.1%/38.8%/40.8%/42.8%/46.8%/50.2%/53.5%/56.9%',
      ],
      hints: {},
    },
    skill: {
      name: 'Thorned Inferno',
      icon: 'Icon/Skill/14901_Skill_Main',
      description:
        'Leaps at the target, dealing <color=#ec6d21>&Param1& of ATK</color>/<color=#ec6d21>&Param2& of ATK</color> as AoE Terra DMG, and creates an Iron Cage.\u000bIron Cage: Links 2 nearby targets, dealing <color=#ec6d21>&Param3& of ATK</color> as Terra DMG every second for 8s. When Gerie is near the Iron Cage, she enters the Lethal status, which increases her &Param4& by <color=#ec6d21>&Param5&</color>.\u000bThorned Inferno (Main Skill) can trigger ##Terra Mark#1020#, dealing &Param6& of ATK as AoE Terra Mark DMG.',
      shortDescription:
        'Leaps at the target, dealing AoE Terra DMG, and creates an Iron Cage that deals DMG over time.\u000bWhen Gerie is near the Iron Cage, she enters the Lethal status, which increases her Auto Attack DMG.\u000bThe Main Skill can trigger ##Terra Mark#1020#.',
      params: [
        '86%/98%/111%/150%/162%/174%/198%/208%/218%/239%/256%/273%/290%',
        '57%/66%/74%/100%/108%/116%/132%/139%/145%/159%/171%/182%/193%',
        '25.2%/29%/32.7%/44.1%/47.6%/51.1%/58.2%/61.2%/64.2%/70.2%/75.3%/80.3%/85.3%',
        'Effect,LevelUp,14900011,EffectTypeFirstSubtype,Enum,EAT',
        'Effect,LevelUp,14900011,EffectTypeParam1,HdPct',
        '37%/48%/59%/70%/81%/92%/103%/114%/125%',
      ],
      hints: {
        1020: {
          id: 1020,
          name: 'Terra Mark',
          description:
            "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '14s',
    },
    supportSkill: {
      name: 'Immediate Execution',
      icon: 'Icon/Skill/14901_Skill_Support',
      description:
        'Slings the chain shovel and creates Seismic Waves, dealing <color=#ec6d21>&Param1&</color>/<color=#ec6d21>&Param2&</color> Terra DMG respectively.\u000bImmediate Execution (Support Skill) can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.',
      shortDescription:
        'Slings the chain shovel and creates Seismic Waves, dealing Terra DMG respectively.\u000bThe Support Skill can trigger ##Terra Mark#1020#.',
      params: [
        '105%/120%/136%/183%/198%/213%/242%/255%/267%/292%/313%/334%/355%',
        '79%/91%/103%/138%/149%/160%/182%/192%/201%/220%/236%/252%/268%',
        '37%/48%/59%/70%/81%/92%/103%/114%/125%',
      ],
      hints: {
        1020: {
          id: 1020,
          name: 'Terra Mark',
          description:
            "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Divine: Retribution of Evil',
      icon: 'Icon/Skill/14901_Ultra',
      description:
        "Generates a huge chain shovel, dealing <color=#ec6d21>&Param1& of ATK x3</color> as Terra DMG to targets in its path.\u000bHeaven's Grace: Judgement of Doom (Ultimate) can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.",
      shortDescription:
        'Generates a huge chain shovel, dealing Terra DMG to targets in its path.\u000bThe Ultimate can trigger ##Terra Mark#1020#.',
      params: [
        '390%/449%/507%/683%/737%/792%/901%/948%/995%/1089%/1167%/1245%/1323%',
        '37%/48%/59%/70%/81%/92%/103%/114%/125%',
      ],
      hints: {
        1020: {
          id: 1020,
          name: 'Terra Mark',
          description:
            "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  iris: {
    name: 'Iris',
    id: 111,
    normalAttack: {
      name: 'Method of Fluxions',
      icon: 'Icon/Skill/11101_Normal',
      description:
        'Shoots 3 Frost Arrows at the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK ×3</color> as Aqua DMG.\u000bWhen close, swings her school bag to attack, dealing <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.',
      shortDescription:
        'Fires Frost Arrows at the target. When close, swings her school bag to attack.',
      params: [
        '12.4%/13.7%/14.9%/18.7%/19.9%/21.1%/23.6%/24.9%/26.1%/27.3%/28.6%/29.8%/31.1%',
        '8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/18.3%/19.1%/19.9%/20.8%',
        '6.9%/7.6%/8.3%/10.4%/11.1%/11.7%/13.1%/13.8%/14.5%/15.2%/15.9%/16.6%/17.3%',
        '27%/29.7%/32.4%/40.5%/43.2%/45.9%/51.2%/53.9%/56.6%/59.3%/62%/64.7%/67.4%',
      ],
      hints: {},
    },
    skill: {
      name: 'Frozen Path',
      icon: 'Icon/Skill/11101_Skill_Main',
      description:
        'Fires a Glacier Greatarrow at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bFrozen Path (Main Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param2& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Fires a Glacier Greatarrow at the target.\u000bThe Main Skill can trigger ##Aqua Mark: Torrent#2008#.',
      params: [
        '108%/119%/130%/162%/173%/184%/206%/216%/227%/238%/249%/260%/271%',
        '21.9%/26.3%/30.7%/35.1%/39.4%/43.8%/48.2%/52.6%/57%',
      ],
      hints: {
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '6s',
    },
    supportSkill: {
      name: 'Iceberg Surge',
      icon: 'Icon/Skill/11101_Skill_Support',
      description:
        'Generates a Glacier Array, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Aqua DMG every 0.5s for a total of 4s. Also inflicts ##Aqua Mark: Torrent#2008#.',
      shortDescription:
        'Generates a Glacier Array, dealing DMG over time.\u000bThe Support Skill can inflict ##Aqua Mark: Torrent#2008#.',
      params: ['54%/59%/64%/70%/75%/80%/86%/91%/96%/102%/107%/113%/118%'],
      hints: {
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Arctic Vortex',
      icon: 'Icon/Skill/11101_Ultra',
      description:
        'Creates a Snowbound Domain that deals <color=#fb8037>&Param1& of ATK</color> as Aqua DMG in a large area every 0.5s for a total of 5s.',
      shortDescription: 'Creates a Snowbound Domain, continuously attacking nearby targets.',
      params: ['84%/92%/101%/126%/134%/142%/159%/168%/176%/184%/193%/201%/209%'],
      hints: {},
      cooldown: '30s',
      energy: 285,
    },
  },
  jinglin: {
    name: 'Jinglin',
    id: 117,
    normalAttack: {
      name: 'Thunder Palm',
      icon: 'Icon/Skill/11701_Normal',
      description:
        'Unleashes lightning from the palm to strike the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.',
      shortDescription:
        'Unleashes lightning from the palm, striking the target repeatedly and dealing damage.',
      params: [
        '8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/19.1%/19.9%/20.8%/21.6%',
        '8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/19.1%/19.9%/20.8%/21.6%',
        '20.8%/22.9%/24.9%/31.2%/33.2%/35.3%/39.5%/41.6%/43.6%/47.8%/49.9%/51.9%/54%',
      ],
      hints: {},
    },
    skill: {
      name: 'Thunder Strike',
      icon: 'Icon/Skill/11701_Skill_Main',
      description:
        'Summons a thunderbolt, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG. Store up to 4 thunderbolts.\u000bThunder Strike (Main Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param2& of ATK as Lux DMG.',
      shortDescription:
        'Summons a thunderbolt to deal DMG.\u000bThe Main Skill can trigger ##Lux Mark: Radiance#2016#.',
      params: [
        '92%/101%/110%/137%/146%/156%/174%/183%/192%/210%/220%/229%/238%',
        '74%/88%/103%/118%/132%/147%/162%/177%/191%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '6s',
    },
    supportSkill: {
      name: 'Static Discharge',
      icon: 'Icon/Skill/11701_Skill_Support',
      description:
        'Creates a Lightning Domain that deals <color=#fb8037>&Param1& of ATK</color> as Lux DMG and inflicts ##Lux Mark: Radiance#2016# every 0.5s for a total of 8s.',
      shortDescription:
        'Generates a Lightning Domain, dealing DMG over time.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.',
      params: ['18.1%/19.9%/21.7%/27.1%/29%/30.8%/34.4%/36.2%/38%/41.6%/43.4%/45.2%/47.1%'],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '16s',
    },
    ultimate: {
      name: 'Roar of the Qilin',
      icon: 'Icon/Skill/11701_Ultra',
      description:
        'Summons a massive Lightning Qilin that lasts for 10s and attacks 3 random enemies every 0.5s. Each hit deals <color=#fb8037>&Param1& of ATK</color> as Lux DMG.',
      shortDescription: 'Summons a Lightning Qilin to strike targets.',
      params: ['61%/67%/73%/91%/97%/103%/115%/121%/127%/139%/146%/152%/158%'],
      hints: {},
      cooldown: '25s',
      energy: 237,
    },
  },
  kasimira: {
    name: 'Kasimira',
    id: 108,
    normalAttack: {
      name: 'Purging Flames',
      icon: 'Icon/Skill/10801_Normal',
      description:
        'Fires a volley of pellets, each dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Magazine capacity: 1.',
      shortDescription: 'Fires the shotgun at the target.',
      params: ['3.7%/4.1%/4.4%/5.5%/5.9%/6.3%/7%/7.4%/7.7%/8.5%/8.9%/9.2%/9.6%'],
      hints: {},
    },
    skill: {
      name: 'Banishing Barrage',
      icon: 'Icon/Skill/10801_Skill_Main',
      description:
        'Each use of this skill loads 1 Incendiary Shell. Each shell deals <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bWhen Incendiary Shells (Main Skill) triggers ##Ignis Mark: Sacred Flame#2013#, deals &Param3& of ATK as AoE Ignis Mark DMG.\u000bUp to 10 shells can be loaded.',
      shortDescription:
        'Loads Incendiary Shells and shoots the target.\u000bThe Main Skill can trigger ##Ignis Mark: Sacred Flame#2013#.',
      params: [
        'OnceAdditionalAttribute,LevelUp,10893001,Value1,10KHdPct',
        '5.3%/5.8%/6.4%/8%/8.5%/9%/10.1%/10.6%/11.1%/12.2%/12.7%/13.3%/13.8%',
        '30%/36%/42%/48%/53%/59%/65%/71%/77%',
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
      cooldown: '5s',
    },
    supportSkill: {
      name: 'Precision Strike',
      icon: 'Icon/Skill/10801_Skill_Support',
      description:
        'Drops 3 bombs, each dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG and inflicting ##Ignis Mark: Sacred Flame#2013#.',
      shortDescription:
        'Drops bombs onto the target.\u000bThe Support Skill can inflict ##Ignis Mark: Sacred Flame#2013#.',
      params: ['118%/130%/142%/177%/189%/201%/224%/236%/248%/272%/283%/295%/307%'],
      hints: {
        2013: {
          id: 2013,
          name: 'Ignis Mark: Sacred Flame',
          description:
            'A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
          params: ['10'],
        },
      },
      cooldown: '15s',
    },
    ultimate: {
      name: 'Sweeping Blast',
      icon: 'Icon/Skill/10801_Ultra',
      description:
        'Continuously fires 6 rounds of pellets, each dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Concludes with a final full-blast salvo, with each pellet dealing <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.',
      shortDescription: 'Fires a barrage of shots at the target.',
      params: [
        '7.9%/8.6%/9.4%/11.8%/12.6%/13.4%/14.9%/15.7%/16.5%/18.1%/18.9%/19.7%/20.5%',
        '31%/35%/38%/47%/50%/53%/60%/63%/66%/72%/75%/79%/82%',
      ],
      hints: {},
      cooldown: '25s',
      energy: 285,
    },
  },
  laru: {
    name: 'Laru',
    id: 150,
    normalAttack: {
      name: 'Stormpiercer Dance',
      icon: 'Icon/Skill/15001_Normal',
      description:
        'Wields the lance to launch consecutive attacks.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x2</color> as Lux DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> and <color=#fb8037>&Param6& of ATK x6</color> as Lux DMG.',
      shortDescription: 'Swings the lance to attack the target repeatedly.',
      params: [
        '9.8%/10.8%/11.8%/14.7%/15.7%/16.7%/18.6%/19.6%/20.6%/22.5%/23.5%/24.5%/25.5%',
        '22.6%/24.8%/27.1%/33.9%/36.1%/38.4%/42.9%/45.2%/47.4%/51.9%/54.2%/56.4%/58.7%',
        '10.7%/11.8%/12.8%/16%/17.1%/18.2%/20.3%/21.4%/22.5%/24.6%/25.7%/26.7%/27.8%',
        '14.9%/16.3%/17.8%/22.3%/23.8%/25.3%/28.2%/29.7%/31.2%/34.2%/35.7%/37.2%/38.7%',
        '9.3%/10.2%/11.1%/13.9%/14.9%/15.8%/17.6%/18.6%/19.5%/21.4%/22.3%/23.2%/24.2%',
        '3.9%/4.3%/4.7%/5.8%/6.2%/6.6%/7.4%/7.8%/8.1%/8.9%/9.3%/9.7%/10.1%',
      ],
      hints: {},
    },
    skill: {
      name: 'Thunderflare Strike',
      icon: 'Icon/Skill/15001_Skill_Main',
      description:
        'Sweeps the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG, then fires a ray of laser, dealing <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG.\u000bThunderflare Strike (Main Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param3& of ATK as Lux DMG.',
      shortDescription:
        'Sweeps the target and then fires a ray of laser, dealing DMG multiple times.\u000bThe Main Skill can trigger ##Lux Mark: Radiance#2016#.',
      params: [
        '125%/137%/150%/187%/200%/212%/237%/250%/262%/287%/299%/312%/324%',
        '250%/274%/299%/374%/399%/424%/474%/499%/524%/574%/599%/624%/649%',
        '31%/37%/43%/49%/56%/62%/68%/74%/80%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '12s',
    },
    supportSkill: {
      name: 'Divine Thunderquake',
      icon: 'Icon/Skill/15001_Skill_Support',
      description:
        'Infuses Lux energy into the ground, dealing <color=#fb8037>&Param4& of ATK</color>/<color=#fb8037>&Param1& of ATK x12</color> as AoE Lux DMG. Then, generates a Thunder Domain in 4 random locations, each dealing <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG.\u000bDivine Thunderquake (Support Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param3& of ATK as Lux DMG.',
      shortDescription:
        'Infuses Lux energy into the ground and generates Thunder Domains to deal DMG to random targets.\u000bThe Support Skill can trigger ##Lux Mark: Radiance#2016#.',
      params: [
        '3.3%/3.6%/3.9%/4.9%/5.3%/5.6%/6.2%/6.6%/6.9%/7.6%/7.9%/8.2%/8.6%',
        '57%/63%/68%/85%/91%/97%/108%/114%/119%/131%/136%/142%/148%',
        '31%/37%/43%/49%/56%/62%/68%/74%/80%',
        '52.5%/57.7%/63%/78.7%/84%/89.2%/99.7%/105%/110.2%/120.7%/126%/131.2%/136.5%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Thunderfall Thrust',
      icon: 'Icon/Skill/15001_Ultra',
      description:
        'Throws the lance, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG.\u000bThunderfall Thrust (Ultimate) can trigger ##Lux Mark: Radiance#2016#, dealing &Param2& of ATK as Lux Mark DMG.',
      shortDescription:
        'Throws a weapon, dealing massive DMG.\u000bThe Ultimate can trigger ##Lux Mark: Radiance#2016#.',
      params: [
        '610%/671%/732%/916%/977%/1038%/1160%/1221%/1282%/1404%/1465%/1526%/1587%',
        '31%/37%/43%/49%/56%/62%/68%/74%/80%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '20s',
      energy: 190,
    },
  },
  minova: {
    name: 'Minova',
    id: 132,
    normalAttack: {
      name: 'Bat and Skate',
      icon: 'Icon/Skill/13201_Normal',
      description:
        'Swings the baseball bat and kickflips the skateboard to attack the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> and <color=#fb8037>&Param6& of ATK x6</color> as Lux DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Lux DMG.',
      shortDescription:
        'Swings the baseball bat and kickflips the skateboard to attack the target.',
      params: [
        '15.5%/17.8%/20.1%/27%/29.2%/31.4%/35.7%/37.5%/39.4%/43.1%/46.2%/49.3%/52.4%',
        '15.5%/17.8%/20.1%/27%/29.2%/31.4%/35.7%/37.5%/39.4%/43.1%/46.2%/49.3%/52.4%',
        '26%/30%/34%/45%/49%/53%/60%/63%/66%/72%/77%/82%/88%',
        '16.9%/19.5%/22%/29.6%/32%/34.4%/39.1%/41.1%/43.2%/47.2%/50.6%/54%/57.4%',
        '40%/46%/52%/71%/76%/82%/93%/98%/103%/112%/121%/129%/137%',
        '7.7%/8.9%/10%/13.5%/14.6%/15.7%/17.8%/18.8%/19.7%/21.5%/23.1%/24.6%/26.2%',
      ],
      hints: {},
    },
    skill: {
      name: 'Syou: Pulsar Streak',
      icon: 'Icon/Skill/13201_Skill_Main',
      description:
        'Swings the baseball bat, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG. Then, activates the second phase, Two Base Hit: Charges at the target, delivering rapid strikes. Hold to deal <color=#fb8037>&Param2& of ATK</color> as Lux DMG every 0.3s for a total of 3s. Finishes with a powerful smash, dealing <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bBoth Syou: Pulsar Streak (Main Skill) and Two Base Hit can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux Mark DMG.',
      shortDescription:
        'Swings the baseball bat to attack the target, then activates Two Base Hit: Charges at the target for a rapid series of strikes.\u000bThe Main Skill can trigger ##Lux Mark#1015#.',
      params: [
        '58%/66%/75%/101%/109%/117%/133%/140%/147%/161%/172%/184%/195%',
        '13.7%/15.8%/17.9%/24%/26%/27.9%/31.7%/33.4%/35%/38.3%/41.1%/43.8%/46.6%',
        '62%/72%/81%/109%/118%/126%/144%/151%/159%/174%/186%/199%/211%',
        '89%/115%/142%/168%/195%/221%/248%/275%/301%',
      ],
      hints: {
        1015: {
          id: 1015,
          name: 'Lux Mark',
          description:
            "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '14s',
    },
    supportSkill: {
      name: 'Gi: Supernova Burst',
      icon: 'Icon/Skill/13201_Skill_Support',
      description:
        'Radiates hyper concentrated starlight, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG and inflicting 2 stacks of Astral Hex.\u000bEvery 3s, Astral Hex deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts ##Lux Mark: Radiance#2016#.',
      shortDescription:
        'Sprinkles Astral Hex on the targets and then deals DMG.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.',
      params: [
        '304%/349%/395%/532%/574%/617%/702%/738%/775%/847%/884%/920%/957%',
        '170%/195%/220%/297%/320%/344%/392%/412%/432%/473%/493%/514%/534%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '16s',
    },
    ultimate: {
      name: 'Ketsu: Entropic Convergence',
      icon: 'Icon/Skill/13201_Ultra',
      description:
        'Commands the Ashwind Clan members to attack the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG every 0.3s for a total of 5s.',
      shortDescription: 'Commands the Ashwind Clan members to attack the target.',
      params: ['70%/80%/91%/122%/132%/142%/161%/170%/178%/195%/209%/223%/237%'],
      hints: {},
      cooldown: '25s',
      energy: 237,
    },
  },
  mistique: {
    name: 'Mistique',
    id: 135,
    normalAttack: {
      name: 'Comet Sweep',
      icon: 'Icon/Skill/13501_Normal',
      description:
        'Sweeps her broom to attack repeatedly.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Umbra DMG.',
      shortDescription: 'Sweeps her broom to attack repeatedly.',
      params: [
        '6.5%/7.3%/8.2%/9%/9.9%/10.7%/11.9%/13%/14.2%/15.3%/16.5%/17.7%/18.8%',
        '4.6%/5.2%/5.8%/6.4%/7%/7.6%/8.5%/9.3%/10.1%/10.9%/11.7%/12.6%/13.4%',
        '5.1%/5.7%/6.4%/7%/7.7%/8.4%/9.3%/10.2%/11.1%/12%/12.9%/13.8%/14.7%',
        '7.2%/8.1%/9%/10%/10.9%/11.8%/13.1%/14.4%/15.6%/16.9%/18.2%/19.4%/20.7%',
      ],
      hints: {},
    },
    skill: {
      name: 'Pumpka Pummel',
      icon: 'Icon/Skill/13501_Skill_Main',
      description:
        "Mistique takes a photo to deal <color=#ec6d21>&Param6&</color> of ATK as AoE Umbra Skill DMG, then enters Exposure status: Summons one Pumpka Phantom every 3s for 15s.\u000bPumpka Phantoms automatically attack the target, dealing <color=#ec6d21>&Param1& of ATK</color> and <color=#ec6d21>&Param2& of ATK</color> as Umbra Minion DMG.\u000bEach Pumpka Phantom has 25% of Mistique's Base Max HP, 100% of her ATK, and lasts for 15s. Up to 4 Pumpka Phantoms can be present at the same time.\u000bPumpka Pummel (Main Skill) and Pumpka Phantoms can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param5&s, totaling to &Param4& of ATK as Umbra Mark DMG.\u000bWhen Pumpka Pummel (Main Skill) is interrupted, its cooldown is partially reduced.",
      shortDescription:
        'Takes a photo to deal DMG and enters Exposure status. While in Exposure, summons multiple Pumpka Phantoms. The Main Skill and Pumpka Phantoms can trigger ##Umbra Mark#1019#.',
      params: [
        '3.9%/4.4%/4.9%/5.4%/5.9%/6.4%/7%/7.7%/8.4%/9.1%/9.8%/10.5%/11.2%',
        '3.3%/3.7%/4.2%/4.6%/5%/5.5%/6.1%/6.6%/7.2%/7.8%/8.4%/9%/9.6%',
        '8.3%/10.3%/12.2%/14.2%/16.1%/18.1%/20.1%/22%/24%',
        '1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%',
        '5',
        '38.8%/43.8%/48.9%/53.9%/59%/64%/70.9%/77.8%/84.7%/91.6%/98.6%/105.5%/112.4%',
      ],
      hints: {
        1019: {
          id: 1019,
          name: 'Umbra Mark',
          description:
            "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '11s',
    },
    supportSkill: {
      name: 'Summoning Circle',
      icon: 'Icon/Skill/13501_Skill_Support',
      description:
        "Draws a magic circle on the ground, summoning a Lanterna Phantom every 0.5s for 6s.\u000bLanterna Phantom will explode, dealing <color=#ec6d21>&Param1& of ATK</color> as Umbra Minion DMG and inflicting ##Umbra Mark: Gloom#2018#.\u000bEach Lanterna Phantom has 3% of Mistique's Base Max HP and 100% of her ATK, lasting for 8s.",
      shortDescription:
        'Draws a magic circle on the ground, summoning self-exploding Lanterna Phantoms. Their explosion can inflict ##Umbra Mark: Gloom#2018#.',
      params: ['93%/105%/117%/129%/141%/153%/170%/187%/203%/220%/236%/253%/269%'],
      hints: {
        2018: {
          id: 2018,
          name: 'Umbra Mark: Gloom',
          description:
            'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Midnight ★ Terror',
      icon: 'Icon/Skill/13501_Ultra',
      description:
        'Summons a massive phantom, dealing <color=#ec6d21>&Param1& of ATK x8</color>/<color=#ec6d21>&Param2& of ATK</color> as Umbra DMG in a large area.',
      shortDescription: 'Summons a massive phantom, dealing damage in a large area.',
      params: [
        '172%/195%/217%/240%/262%/284%/315%/346%/376%/407%/438%/468%/499%',
        '345%/389%/434%/479%/524%/569%/630%/691%/753%/814%/875%/937%/998%',
      ],
      hints: {},
      cooldown: '30s',
      energy: 275,
    },
  },
  nanoha: {
    name: 'Nanoha',
    id: 119,
    normalAttack: {
      name: 'Flowers Scatter',
      icon: 'Icon/Skill/11901_Normal',
      description:
        'Throws multiple darts.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK ×2</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK ×2</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×3</color> as Ventus DMG.',
      shortDescription: 'Throws a number of darts.',
      params: [
        '11%/12.6%/14.3%/19.2%/20.8%/22.3%/25.4%/26.7%/28%/30.7%/32.9%/35.1%/37.3%',
        '11%/12.6%/14.3%/19.2%/20.8%/22.3%/25.4%/26.7%/28%/30.7%/32.9%/35.1%/37.3%',
        '16.1%/18.5%/20.9%/28.2%/30.4%/32.7%/37.2%/39.1%/41.1%/44.9%/48.1%/51.4%/54.6%',
      ],
      hints: {},
    },
    skill: {
      name: 'Flowers Dance',
      icon: 'Icon/Skill/11901_Skill_Main',
      description:
        'Throws two sunflower shurikens that strike the target and return for 4 times. Each hit deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bFlowers Dance (Main Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.',
      shortDescription:
        'Throws sunflower shurikens that strike the target and return. The Main Skill can trigger ##Ventus Mark#1017#.',
      params: [
        '4.9%/5.6%/6.3%/8.5%/9.2%/9.9%/11.2%/11.8%/12.4%/13.5%/14.5%/15.5%/16.4%',
        '31%/40%/49%/58%/67%/77%/86%/95%/104%',
      ],
      hints: {
        1017: {
          id: 1017,
          name: 'Ventus Mark',
          description:
            "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '10s',
    },
    supportSkill: {
      name: 'Flowers Bloom',
      icon: 'Icon/Skill/11901_Skill_Support',
      description:
        'Conjures an exploding sunflower that fires 12 darts, each dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bFlowers Bloom (Support Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.',
      shortDescription:
        'Conjures an exploding sunflower that fires multiple darts. The Support Skill can trigger ##Ventus Mark#1017#.',
      params: [
        '25.9%/29.8%/33.7%/45.3%/49%/52.6%/59.9%/63%/66.1%/72.3%/77.5%/82.7%/87.8%',
        '31%/40%/49%/58%/67%/77%/86%/95%/104%',
      ],
      hints: {
        1017: {
          id: 1017,
          name: 'Ventus Mark',
          description:
            "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Flowers Thrice',
      icon: 'Icon/Skill/11901_Ultra',
      description:
        "Generates 2 stationary clones that attack enemies with darts, dealing <color=#ec6d21>&Param1& of Nanoha's ATK x2</color>, <color=#ec6d21>&Param2& of Nanoha's ATK x2</color>, and <color=#ec6d21>&Param3& of Nanoha's ATK x3</color> as Ventus Ultimate DMG.\u000bEach clone lasts for 10s. Up to 2 clones can be present simultaneously.\u000bWhen a clone deals DMG, it can trigger ##Ventus Mark#1017#, dealing &Param4& of ATK as AoE Ventus Mark DMG.",
      shortDescription:
        'Generates clones that attack enemies. The clones can trigger ##Ventus Mark#1017#.',
      params: [
        '19.4%/22.3%/25.2%/33.9%/36.7%/39.4%/44.8%/47.1%/49.5%/54.1%/58%/61.9%/65.7%',
        '19.4%/22.3%/25.2%/33.9%/36.7%/39.4%/44.8%/47.1%/49.5%/54.1%/58%/61.9%/65.7%',
        '28.4%/32.7%/37%/49.8%/53.8%/57.7%/65.7%/69.1%/72.5%/79.4%/85%/90.7%/96.4%',
        '31%/40%/49%/58%/67%/77%/86%/95%/104%',
      ],
      hints: {
        1017: {
          id: 1017,
          name: 'Ventus Mark',
          description:
            "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  nazuka: {
    name: 'Nazuka',
    id: 133,
    normalAttack: {
      name: 'Wind Pellets',
      icon: 'Icon/Skill/13301_Normal',
      description:
        'Fires consecutive wind bullets.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x3</color> as Ventus DMG.',
      shortDescription: 'Fires consecutive wind bullets to deal DMG.',
      params: [
        '28%/32%/36%/49%/53%/57%/65%/68%/72%/78%/84%/90%/95%',
        '31%/36%/41%/55%/59%/64%/73%/76%/80%/88%/94%/100%/107%',
        '18.7%/21.5%/24.3%/32.8%/35.4%/38%/43.2%/45.5%/47.7%/52.2%/56%/59.7%/63.4%',
      ],
      hints: {},
    },
    skill: {
      name: 'Blooming Draught',
      icon: 'Icon/Skill/13301_Skill_Main',
      description:
        'The windmill blows ahead, dealing <color=#ec6d21>&Param1& of ATK x7</color> as Ventus Skill DMG.\u000bBlooming Draught (Main Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.',
      shortDescription:
        'The windmill blows ahead to deal DMG.\u000bThe Main Skill can trigger ##Ventus Mark#1017#.',
      params: [
        '11.8%/13.5%/15.3%/20.6%/22.2%/23.9%/27.2%/28.6%/30%/32.8%/35.2%/37.5%/39.9%',
        '20.5%/26.6%/32.7%/38.8%/44.9%/51%/57.1%/63.2%/69.3%',
      ],
      hints: {
        1017: {
          id: 1017,
          name: 'Ventus Mark',
          description:
            "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Bouquet Blast',
      icon: 'Icon/Skill/13301_Skill_Support',
      description:
        'Fires a flower bouquet, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG. The flower bouquet then blasts, generating a Flower Formation and shoots 6 Flower Petals.\u000bFlower Formation: Reduces the Movement SPD of targets within its range by 25%. Deals <color=#ec6d21>&Param3& of ATK</color> as Ventus Skill DMG per second for 6s.\u000bFlower Petals: Deals <color=#ec6d21>&Param2& of ATK</color> as Ventus Skill DMG.\u000bBouquet Blast (Support Skill) can inflict ##Ventus Mark: Breeze#2017#.',
      shortDescription:
        'Fires a flower bouquet that deals DMG. The flower bouquet then blasts, generating a Flower Formation and shoots several Flower Petals.\u000bThe Support Skill can inflict ##Ventus Mark: Breeze#2017#.',
      params: [
        '196%/225%/255%/343%/370%/398%/453%/476%/500%/547%/586%/625%/664%',
        '108%/124%/140%/189%/204%/219%/249%/262%/275%/301%/322%/344%/365%',
        '196%/225%/254%/342%/370%/397%/452%/475%/499%/545%/585%/624%/663%',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Aromatic Tempest',
      icon: 'Icon/Skill/13301_Ultra',
      description:
        'Holds up the staff and chants for a while, creating 3 tornados every 3s, each time dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Ultimate DMG.',
      shortDescription:
        'Holds up the staff and chants for a while, creating several tornadoes consecutively to deal DMG.',
      params: ['138%/159%/180%/242%/261%/281%/320%/336%/353%/386%/414%/441%/469%'],
      hints: {},
      cooldown: '30s',
      energy: 275,
    },
  },
  nazuna: {
    name: 'Nazuna',
    id: 156,
    normalAttack: {
      name: 'Laid-back Shots',
      icon: 'Icon/Skill/15601_Normal',
      description:
        'Shoots consecutively with the crossbow, each shot dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Stores up to 6 arrows.',
      shortDescription: 'Shoots consecutively with the crossbow.',
      params: ['17%/19.6%/22.1%/29.8%/32.2%/34.6%/39.3%/41.4%/43.4%/47.5%/50.9%/54.3%/57.7%'],
      hints: {},
    },
    skill: {
      name: 'Plushie Dance',
      icon: 'Icon/Skill/15601_Skill_Main',
      description:
        "Generates a penguin plushie that keeps moving toward the target and explodes in 3s, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#. When the penguin plushie deals DMG, the target's &Param2& increases by <color=#fb8037>&Param3&</color> for &Param4&s.",
      shortDescription: 'Generates a penguin plushie that will explode.',
      params: [
        '152%/174%/197%/265%/286%/308%/350%/368%/386%/423%/453%/483%/514%',
        'Terra DMG Taken',
        '28%/37%/45%/70%/78%/86%/102%/109%/116%/129%/140%/152%/163%',
        '5',
      ],
      hints: {
        2029: {
          id: 2029,
          name: 'Terra Mark: Earth Vein',
          description:
            'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Bingo Crush',
      icon: 'Icon/Skill/15601_Skill_Support',
      description:
        "Raffles 5 times and follows the main Trekker.\u000bFull penguins: Throws the plushie and generates a penguin statue, dealing <color=#fb8037>&Param1& of ATK x7</color> as AoE Terra DMG. Full hearts: Shoots a heart arrow that restores the main Trekker's HP by <color=#fb8037>&Param2&</color> and explodes, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Terra DMG. Hearts and penguins: Shoots in a sweeping motion, dealing <color=#fb8037>&Param4& of ATK x6</color> as Terra DMG. All these attacks inflict ##Terra Mark: Earth Vein#2029#.\u000bMore penguins than hearts: The squad receive Kiss of Penguin, which increases &Param5& by <color=#fb8037>&Param6&</color> for &Param7&s. More hearts than penguins: The squad receive Kiss of Love, which increases &Param8& by <color=#fb8037>&Param9&</color> for &Param10&s.",
      shortDescription:
        'Raffles several times and follows the main Trekker, attacking in different ways based on the raffle results and gaining bonuses.',
      params: [
        '12%/13.3%/15.1%/20.3%/21.9%/23.5%/26.8%/28.2%/29.6%/32.3%/34.7%/37%/39.3%',
        '5.9%',
        '41%/47%/53%/71%/77%/82%/94%/99%/103%/113%/121%/129%/137%',
        '19%/22%/24.8%/33.4%/36.1%/38.7%/44.1%/46.4%/48.7%/53.3%/57.1%/60.9%/64.7%',
        'ATK',
        '22%/29%/36%/56%/62%/68%/81%/86%/92%/103%/111%/120%/129%',
        '3.5',
        'Terra DMG',
        '11%/15%/18%/29%/32%/35%/41%/44%/47%/52%/57%/62%/66%',
        '3.5',
      ],
      hints: {
        2029: {
          id: 2029,
          name: 'Terra Mark: Earth Vein',
          description:
            'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '20s',
    },
    ultimate: {
      name: 'Dream Spiral',
      icon: 'Icon/Skill/15601_Ultra',
      description:
        "Rides a shopping cart and spins rapidly. Moves to any direction while the skill is active, dealing <color=#fb8037>&Param1& of ATK x11</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#. When the shopping cart explodes, increases the squad's &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s.",
      shortDescription: 'Rides a shopping cart and spins rapidly, dealing multiple phases of DMG.',
      params: [
        '54%/62%/70%/94%/101%/109%/124%/130%/136%/149%/160%/171%/181%',
        'ATK',
        '35%/46%/57%/89%/99%/109%/129%/137%/146%/163%/177%/191%/205%',
        '15',
      ],
      hints: {
        2029: {
          id: 2029,
          name: 'Terra Mark: Earth Vein',
          description:
            'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  noya: {
    name: 'Noya',
    id: 112,
    normalAttack: {
      name: 'Nameless Style',
      icon: 'Icon/Skill/11201_Normal',
      description:
        'Swings the sword to attack.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK ×2</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×8</color> as Ventus DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK ×3</color> as Ventus DMG.',
      shortDescription: 'Swings the sword to perform multiple attacks.',
      params: [
        '7%/7.7%/8.4%/10.4%/11.1%/11.8%/13.2%/13.9%/14.6%/16%/16.7%/17.4%/18.1%',
        '9.2%/10.1%/11%/13.8%/14.7%/15.6%/17.5%/18.4%/19.3%/21.1%/22.1%/23%/23.9%',
        '4.6%/5.1%/5.5%/6.9%/7.4%/7.9%/8.8%/9.2%/9.7%/10.6%/11.1%/11.5%/12%',
        '8.7%/9.6%/10.5%/13.1%/13.9%/14.8%/16.5%/17.4%/18.3%/20%/20.9%/21.8%/22.6%',
      ],
      hints: {},
    },
    skill: {
      name: 'Sonic Slash',
      icon: 'Icon/Skill/11201_Skill_Main',
      description:
        'Unleashes a flurry of sword strikes, dealing <color=#ec6d21>&Param1& of ATK x6</color> as Ventus Skill DMG.\u000bSonic Slash (Main Skill) can trigger ##Ventus Mark: Breeze#2017#, generating a Cyclone that deals &Param2& of ATK x3 as AoE Ventus Mark DMG.',
      shortDescription:
        'Unleashes a flurry of sword strikes. The Main Skill can trigger ##Ventus Mark: Breeze#2017#.',
      params: [
        '27.8%/30.6%/33.4%/41.7%/44.5%/47.3%/52.8%/55.6%/58.4%/64%/66.7%/69.5%/72.3%',
        '9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '5s',
    },
    supportSkill: {
      name: 'Gale Storm',
      icon: 'Icon/Skill/11201_Skill_Support',
      description:
        'Unleashes 4 minor sword auras and 1 major sword aura.\u000bMinor sword auras deal <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bMajor sword auras deal <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bMajor sword auras of the Support Skill Gale Storm can pierce through targets and trigger ##Ventus Mark: Breeze#2017#, generating a Cyclone that deals &Param3& of ATK x3 as AoE Ventus Mark DMG.',
      shortDescription:
        "Unleashes multiple sword auras. The Support Skill's major sword auras can pierce through targets and trigger ##Ventus Mark: Breeze#2017#.",
      params: [
        '36.5%/40.2%/43.8%/54.8%/58.4%/62.1%/69.4%/73%/76.7%/84%/87.6%/91.3%/94.9%',
        '119%/131%/143%/179%/191%/203%/227%/239%/251%/275%/287%/299%/311%',
        '9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Skyshatter Rend',
      icon: 'Icon/Skill/11201_Ultra',
      description:
        'Performs a sweeping slash, dealing <color=#ec6d21>&Param1& of ATK x2</color> as Ventus DMG.\u000bSkyshatter Rend (Ultimate) can trigger ##Ventus Mark: Breeze#2017# to generate a Cyclone that deals &Param2& of ATK x3 as AoE Ventus Mark DMG.',
      shortDescription:
        'Performs a sweeping slash to deal DMG. The Ultimate can trigger ##Ventus Mark: Breeze#2017#.',
      params: [
        '458%/504%/549%/687%/732%/778%/870%/916%/961%/1053%/1099%/1144%/1190%',
        '9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%',
      ],
      hints: {
        2017: {
          id: 2017,
          name: 'Ventus Mark: Breeze',
          description:
            'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  ridge: {
    name: 'Ridge',
    id: 116,
    normalAttack: {
      name: 'Sprout Bomb',
      icon: 'Icon/Skill/11601_Normal',
      description:
        'Fires energy rounds, each dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Magazine capacity: 24.\u000bWhen close, swings the shovel cannon to attack, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Terra DMG.',
      shortDescription: 'Fires consecutive energy rounds to deal DMG.',
      params: [
        '5.2%/5.7%/6.2%/7.7%/8.3%/8.8%/9.8%/10.3%/10.9%/11.9%/12.4%/12.9%/13.4%',
        'Character.Main,Ammo,116,10K',
        '8.9%/9.8%/10.7%/13.3%/14.2%/15.1%/16.9%/17.8%/18.6%/20.4%/21.3%/22.2%/23.1%',
      ],
      hints: {},
    },
    skill: {
      name: 'Bean Cyclone',
      icon: 'Icon/Skill/11601_Skill_Main',
      description:
        "Swings the shovel cannon, dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Fires seeds, dealing <color=#fb8037>&Param2& of ATK</color> as AoE Terra DMG and reducing the target's Movement SPD by &Param3& for &Param4&s.\u000bAfter casting a skill, reloads the magazine and enhances Auto Attacks: Increases Fire Rate without consuming ammo for &Param5&s.\u000bBean Cyclone (Main Skill) can trigger ##Terra Mark: Earth Vein#2029#, dealing &Param6& of ATK as AoE Terra Mark DMG.",
      shortDescription:
        'Swings the shovel cannon to fire seeds, dealing DMG.\u000bAfter casting a Skill, reloads the magazine and enhances Auto Attacks.\u000bThe Main Skill can trigger ##Terra Mark: Earth Vein#1020#.',
      params: [
        '28.3%/31.1%/34%/42.5%/45.3%/48.1%/53.8%/56.6%/59.4%/65.1%/67.9%/70.8%/73.6%',
        '150%/165%/180%/225%/240%/255%/285%/300%/315%/345%/360%/375%/390%',
        '-10%',
        '3',
        '6',
        '20.5%/24.5%/28.6%/32.7%/36.8%/40.9%/45%/49.1%/53.2%',
      ],
      hints: {
        1020: {
          id: 1020,
          name: 'Terra Mark',
          description:
            "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        2029: {
          id: 2029,
          name: 'Terra Mark: Earth Vein',
          description:
            'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '10s',
    },
    supportSkill: {
      name: 'Floral Storm',
      icon: 'Icon/Skill/11601_Skill_Support',
      description:
        "Showers seeds over time, dealing <color=#fb8037>&Param1& of ATK x6</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029# and Seed Orb.\u000bSeed Orb: lasts &Param2&s; when friendly units trigger ##Terra Mark#1020# on targets with Seed Orbs, deals <color=#fb8037>&Param3&</color> of Ridge's ATK as AoE Terra DMG.",
      shortDescription:
        'Showers seeds over time, dealing continuous DMG. Inflicts ##Terra Mark: Earth Vein#2029# and Seed Orb.\u000bSeed Orb: when friendly units trigger ##Terra Mark#1020# on targets with Seed Orbs, they can deal DMG.',
      params: [
        '44%/48%/52%/66%/70%/74%/83%/87%/92%/101%/105%/109%/114%',
        '3',
        '50%/55%/60%/75%/80%/85%/95%/100%/105%/115%/120%/125%/130%',
      ],
      hints: {
        1020: {
          id: 1020,
          name: 'Terra Mark',
          description:
            "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
        2029: {
          id: 2029,
          name: 'Terra Mark: Earth Vein',
          description:
            'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
          params: [],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Harvest Rhapsody',
      icon: 'Icon/Skill/11601_Ultra',
      description:
        'Attacks Shrubshrews Warriors consecutively, dealing <color=#fb8037>&Param1& of ATK x5</color> and <color=#fb8037>&Param2& of ATK</color> as AoE Terra DMG.',
      shortDescription: 'Attacks Shrubshrews Warriors consecutively to deal DMG.',
      params: [
        '85%/94%/102%/128%/136%/145%/162%/170%/179%/196%/204%/213%/221%',
        '251%/276%/302%/377%/402%/427%/478%/503%/528%/578%/603%/628%/653%',
      ],
      hints: {},
      cooldown: '30s',
      energy: 285,
    },
  },
  shia: {
    name: 'Shia',
    id: 155,
    normalAttack: {
      name: 'Sail of Twin Moons',
      icon: 'Icon/Skill/15501_Normal',
      description:
        'Commands drones to attack the target in turn.\u000bStrike 1: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param1&</color> of ATK as Lux DMG.\u000bStrike 2: Night Rabbit fires missiles, dealing <color=#fb8037>&Param2&</color> of ATK as Lux DMG.\u000bStrike 3: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param3&</color> of ATK as Lux DMG.\u000bStrike 4: Night Rabbit fires missiles, dealing <color=#fb8037>&Param4&</color> of ATK as Lux DMG.',
      shortDescription:
        'Commands Snow Rabbit and Night Rabbit to attack the target in turn to deal DMG.',
      params: [
        '8%/9.2%/10.4%/14%/15.1%/16.2%/18.4%/19.4%/20.4%/22.3%/23.9%/25.4%/27%',
        '15.9%/18.3%/20.7%/27.9%/30.1%/32.4%/36.8%/38.7%/40.6%/44.5%/47.7%/50.8%/54%',
        '7.8%/8.9%/10.1%/13.6%/14.7%/15.8%/18%/18.9%/19.8%/21.7%/23.2%/24.8%/26.3%',
        '10.4%/11.9%/13.5%/18.1%/19.6%/21%/23.9%/25.2%/26.4%/28.9%/31%/33%/35.1%',
      ],
      hints: {},
    },
    skill: {
      name: 'Whirling Waves',
      icon: 'Icon/Skill/15501_Skill_Main',
      description:
        'Calls for support. Commands 2 Snow Rabbits and 1 Night Rabbit to circle and attack the target for 10s.\u000bSnow Rabbits fire bullets in a sweeping motion, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bNight Rabbit fires missiles, dealing <color=#fb8037>&Param2& of ATK</color> as Lux DMG, and then explodes, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Lux DMG.\u000bWhirling Waves (Main Skill) can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux DMG.',
      shortDescription:
        'Summons several drones to attack the target repeatedly, dealing DMG.\u000bThe Main Skill can trigger ##Lux Mark#1015#.',
      params: [
        '8.3%/9.6%/10.8%/14.6%/15.7%/16.9%/19.2%/20.2%/21.2%/23.2%/24.9%/26.5%/28.2%',
        '11.7%/13.5%/15.2%/20.5%/22.1%/23.8%/27.1%/28.5%/29.9%/32.7%/35%/37.4%/39.7%',
        '12.2%/14%/15.9%/21.4%/23.1%/24.8%/28.2%/29.7%/31.1%/34%/36.5%/38.9%/41.4%',
        '71%/92%/113%/135%/156%/177%/198%/219%/241%',
      ],
      hints: {
        1015: {
          id: 1015,
          name: 'Lux Mark',
          description:
            "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '14s',
    },
    supportSkill: {
      name: 'Surfing Rondo',
      icon: 'Icon/Skill/15501_Skill_Support',
      description:
        'Surfs 2 times, each dealing <color=#fb8037>&Param1& of ATK x2</color> as AoE Lux DMG.\u000bRide 1: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param2& of ATK</color> as Lux DMG every 0.3s.\u000bRide 2: Night Rabbit fires missiles, each dealing <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bSurfing Rondo (Support Skill) can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux DMG.',
      shortDescription:
        'Surfs with the drones, dealing DMG to targets along the way.\u000bThe Support Skill can trigger ##Lux Mark#1015#.',
      params: [
        '77%/89%/100%/135%/146%/156%/178%/187%/197%/215%/230%/246%/261%',
        '36%/41%/47%/63%/68%/73%/83%/87%/91%/100%/107%/114%/121%',
        '48%/55%/62%/84%/90%/97%/110%/116%/122%/133%/143%/152%/162%',
        '71%/92%/113%/135%/156%/177%/198%/219%/241%',
      ],
      hints: {
        1015: {
          id: 1015,
          name: 'Lux Mark',
          description:
            "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '16s',
    },
    ultimate: {
      name: 'Divine Deluge',
      icon: 'Icon/Skill/15501_Ultra',
      description:
        'Fires the laser cannon at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG multiple times for 5s.\u000bThe Ultimate Divine Deluge can trigger ##Lux Mark#1015#, dealing &Param2& of ATK as Lux DMG.',
      shortDescription:
        'Fires the laser cannon repeatedly at the target, dealing DMG.\u000bThe Ultimate can trigger ##Lux Mark#1015#.',
      params: [
        '78%/90%/101%/136%/147%/158%/180%/189%/199%/217%/233%/249%/264%',
        '71%/92%/113%/135%/156%/177%/198%/219%/241%',
      ],
      hints: {
        1015: {
          id: 1015,
          name: 'Lux Mark',
          description:
            "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
          params: [],
        },
      },
      cooldown: '40s',
      energy: 340,
    },
  },
  shimiao: {
    name: 'Shimiao',
    id: 113,
    normalAttack: {
      name: 'Chilling Drizzle',
      icon: 'Icon/Skill/11301_Normal',
      description:
        'Use surging waves to attack 6 times, dealing DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 6: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.',
      shortDescription: 'Creates surging waves, dealing damage multiple times.',
      params: [
        '20.5%/22.5%/24.6%/30.7%/32.8%/34.8%/38.9%/41%/43%/47.1%/49.2%/51.2%/53.3%',
        '60%/65%/71%/89%/95%/101%/113%/119%/125%/137%/143%/149%/155%',
        '23.6%/26%/28.3%/35.4%/37.8%/40.1%/44.8%/47.2%/49.6%/54.3%/56.6%/59%/61.4%',
        '75%/83%/90%/113%/120%/128%/143%/151%/158%/173%/181%/188%/196%',
      ],
      hints: {},
    },
    skill: {
      name: 'Rising Tides',
      icon: 'Icon/Skill/11301_Skill_Main',
      description:
        'Rising Tides is cast in two phases.\u000bPhase 1: Creates water waves, dealing <color=#fb8037>&Param1& of ATK x6</color> as Aqua DMG.\u000bPhase 2: Spins swiftly, dealing <color=#fb8037>&Param2& of ATK x6</color> as Aqua DMG.\u000bRising Tides (Main Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param3& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'This skill is cast in two phases, dealing multiple instances of DMG during each phase. The Main Skill can trigger ##Aqua Mark: Torrent#2008#.',
      params: [
        '51%/57%/62%/77%/82%/87%/98%/103%/108%/118%/123%/129%/134%',
        '25.7%/28.3%/30.9%/38.6%/41.1%/43.7%/48.8%/51.4%/54%/59.1%/61.7%/64.3%/66.8%',
        '48%/58%/68%/77%/87%/97%/106%/116%/126%',
      ],
      hints: {
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '16s',
    },
    supportSkill: {
      name: 'Aqua Aide',
      icon: 'Icon/Skill/11301_Skill_Support',
      description:
        'Splashes water to deal <color=#fb8037>&Param1& of ATK</color> as Aqua DMG. Then, launches 7 rounds of water blades at enemies, each round dealing <color=#fb8037>&Param2& of ATK x5</color> as Aqua DMG.\u000bAqua Aide (Support Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param3& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Splashes water and launches water blades constantly to deal DMG. The Support Skill can trigger ##Aqua Mark: Torrent#2008#.',
      params: [
        '12.8%/14.1%/15.3%/19.2%/20.4%/21.7%/24.3%/25.6%/26.8%/29.4%/30.7%/31.9%/33.2%',
        '8.3%/9.2%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.5%/19.1%/20%/20.8%/21.6%',
        '48%/58%/68%/77%/87%/97%/106%/116%/126%',
      ],
      hints: {
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '20s',
    },
    ultimate: {
      name: 'Flood Mantra',
      icon: 'Icon/Skill/11301_Ultra',
      description:
        'Roars and unleashes horizontal sweeps, dealing <color=#fb8037>&Param3&</color> and <color=#fb8037>&Param1& x4</color> as Aqua DMG in a large area.\u000bFlood Mantra (Ultimate) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param2& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.',
      shortDescription:
        'Roars and unleashes horizontal sweeps to deal multiple instances of DMG. The Ultimate can trigger ##Aqua Mark: Torrent#2008#.',
      params: [
        '145%/160%/174%/218%/232%/247%/276%/290%/305%/334%/348%/363%/377%',
        '48%/58%/68%/77%/87%/97%/106%/116%/126%',
        '12.8%/14.1%/15.3%/19.2%/20.4%/21.7%/24.3%/25.6%/26.8%/29.4%/30.7%/31.9%/33.2%',
      ],
      hints: {
        1027: {
          id: 1027,
          name: 'Chill',
          description:
            'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
          params: ['-25%', '10', '3', '3'],
        },
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  teresa: {
    name: 'Teresa',
    id: 127,
    normalAttack: {
      name: 'Sweep Slash',
      icon: 'Icon/Skill/12701_Normal',
      description:
        'Swings the magic sword, dealing DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.',
      shortDescription: 'Swings the magic sword, dealing DMG multiple times.',
      params: [
        '10.1%/11.2%/12.2%/15.2%/16.2%/17.2%/19.3%/20.3%/21.3%/22.3%/23.3%/24.3%/25.3%',
        '6.2%/6.9%/7.5%/9.4%/10%/10.6%/11.8%/12.5%/13.1%/13.7%/14.3%/14.9%/15.6%',
        '21.8%/24%/26.2%/32.8%/34.9%/37.1%/41.5%/43.7%/45.8%/48%/50.2%/52.4%/54.6%',
        '40%/44%/48%/60%/64%/68%/76%/80%/84%/88%/92%/96%/99%',
      ],
      hints: {},
    },
    skill: {
      name: 'Limpid Stream',
      icon: 'Icon/Skill/12701_Skill_Main',
      description:
        "Launches an assault with the magic sword, dealing <color=#fb8037>&Param1&</color> and <color=#fb8037>&Param2& of ATK</color> as Aqua DMG and inflicting ##Aqua Mark: Torrent#2008#. Teresa also gains a Surging Shield. \u000bSurging Shield can absorb DMG equal to <color=#fb8037>&Param3& of Teresa's Base ATK</color> for &Param4&s.",
      shortDescription:
        'Teresa gains a Surging Shield and launches an assault with the magic sword, dealing DMG multiple times and inflicting ##Aqua Mark: Torrent#2008#.',
      params: [
        '101%/111%/121%/152%/162%/172%/192%/202%/212%/222%/232%/242%/253%',
        '151%/167%/182%/227%/242%/258%/288%/303%/318%/333%/348%/364%/379%',
        '45%/48.7%/52.5%/56.2%/60%/63.7%/67.5%/71.2%/75%/78.7%/82.5%/86.2%/90%',
        '5',
      ],
      hints: {
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Billowing Tide',
      icon: 'Icon/Skill/12701_Skill_Support',
      description:
        "Plants the magic sword in the ground, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG. Also creates a Tidal Domain and applies a Surging Shield to the main Trekker. \u000bTidal Domain deals <color=#fb8037>&Param2& of ATK</color> as Aqua DMG once per second for 6s, and inflicts ##Aqua Mark: Torrent#2008#. \u000bSurging Shield can absorb damage equal to <color=#fb8037>&Param3& of Teresa's Base ATK</color> for &Param4&s.",
      shortDescription:
        'Plants the magic sword in the ground to create a Tidal Domain and apply a Surging Shield to the main Trekker.\u000bThe Surging Shield deals DMG over time and inflicts ##Aqua Mark: Torrent#2008#.',
      params: [
        '50%/55%/60%/75%/80%/85%/94%/99%/104%/109%/114%/119%/124%',
        '25.6%/28.2%/30.7%/38.4%/41%/43.6%/48.7%/51.2%/53.8%/56.4%/58.9%/61.5%/64%',
        '72%/78%/84%/90%/96%/102%/108%/114%/120%/126%/132%/138%/144%',
        '4',
      ],
      hints: {
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '14s',
    },
    ultimate: {
      name: 'Slicing Riptide',
      icon: 'Icon/Skill/12701_Ultra',
      description:
        'Unleashes a dissecting slash which splits into two waves, dealing <color=#fb8037>&Param1&</color>/<color=#fb8037>&Param2& of ATK</color> as AoE Aqua DMG and inflicting ##Aqua Mark: Torrent#2008#.',
      shortDescription:
        'Unleashes a dissecting slash which splits into waves to deal DMG. Inflicts ##Aqua Mark: Torrent#2008#.',
      params: [
        '427%/470%/513%/641%/684%/726%/812%/855%/897%/940%/983%/1025%/1068%',
        '92%/101%/110%/137%/147%/156%/174%/183%/192%/201%/211%/220%/229%',
      ],
      hints: {
        2008: {
          id: 2008,
          name: 'Aqua Mark: Torrent',
          description:
            'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
          params: ['10'],
        },
      },
      cooldown: '30s',
      energy: 285,
    },
  },
  tilia: {
    name: 'Tilia',
    id: 107,
    normalAttack: {
      name: 'Guard Style: Melee',
      icon: 'Icon/Skill/10701_Normal',
      description:
        'Wields the shield and lance to launch consecutive attacks.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Lux DMG.',
      shortDescription:
        'Strikes the target multiple times with her shield and lance to deal damage.',
      params: [
        '14.5%/16%/17.4%/21.8%/23.2%/24.7%/27.6%/29%/30.5%/33.4%/34.8%/36.3%/37.7%',
        '12.6%/13.8%/15.1%/18.9%/20.1%/21.4%/23.9%/25.2%/26.4%/29%/30.2%/31.5%/32.7%',
        '20.5%/22.6%/24.6%/30.8%/32.8%/34.9%/39%/41%/43.1%/47.2%/49.2%/51.3%/53.3%',
        '20.5%/22.6%/24.6%/30.8%/32.8%/34.9%/39%/41%/43.1%/47.2%/49.2%/51.3%/53.3%',
      ],
      hints: {},
    },
    skill: {
      name: 'Aegis Protection',
      icon: 'Icon/Skill/10701_Skill_Main',
      description:
        "Hold the button to enter Fortify Stance for up to 8s, during which DEF is increased by &Param1&.\u000bUpon entering Fortify Stance, becomes immune to all DMG.\u000bWhen Fortify Stance ends, casts a counterattack that deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts a ##Lux Mark: Radiance#2016# while boosting the squad's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
      shortDescription:
        'Hold the Skill button to enter Fortify Stance with increased DEF. When Fortify Stance ends, deals DMG to nearby enemies.\u000bThe Main Skill can inflict ##Lux Mark: Radiance#2016#.',
      params: [
        '500',
        '168%/185%/202%/252%/269%/286%/319%/336%/353%/386%/403%/420%/437%',
        'ATK',
        '12%/14%/17%/24%/26%/29%/33%/36%/38%/43%/45%/47%/50%',
        '10',
        'Effect,LevelUp,10793006,EffectTypeParam4,Fixed',
        'Effect,LevelUp,10793006,EffectTypeParam1,HdPct',
        'Effect,LevelUp,10793006,EffectTypeFirstSubtype,Enum,EAT',
        'Effect,LevelUp,10793006,EffectTypeParam6,HdPct',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '8s',
    },
    supportSkill: {
      name: 'Aegis Intervention',
      icon: 'Icon/Skill/10701_Skill_Support',
      description:
        "Tilia throws the Aegis of Light, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG and stunning the target for &Param2&s, while inflicting ##Lux Mark: Radiance#2016#.\u000bWhen this skill deals DMG, increases the squad's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
      shortDescription:
        'Throws the Aegis of Light, which bounces multiple times and deals DMG.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.',
      params: [
        '41%/45%/49%/61%/65%/69%/77%/81%/85%/94%/98%/102%/106%',
        '2',
        'ATK',
        '15%/18%/21%/30%/33%/36%/42%/45%/48%/53%/56%/59%/62%',
        '10',
        'Effect,LevelUp,10795003,EffectTypeParam4,Fixed',
        'Effect,LevelUp,10795003,EffectTypeParam1,HdPct',
        'ATK',
        'Effect,LevelUp,10795003,EffectTypeParam6,HdPct',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '12s',
    },
    ultimate: {
      name: 'Glorious Smite',
      icon: 'Icon/Skill/10701_Ultra',
      description:
        'Leaps and slams down onto the ground, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG in a large area. Meanwhile, creates a sphere that deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts ##Lux Mark: Radiance#2016# for 8s.',
      shortDescription:
        'Leaps and slams down onto the ground, dealing DMG in a large area.\u000bThe Ultimate can inflict ##Lux Mark: Radiance#2016#.',
      params: [
        '335%/369%/402%/503%/536%/570%/637%/670%/704%/771%/804%/838%/871%',
        '18%/19.8%/21.6%/26.9%/28.7%/30.5%/34.1%/35.9%/37.7%/41.3%/43.1%/44.9%/46.7%',
      ],
      hints: {
        2016: {
          id: 2016,
          name: 'Lux Mark: Radiance',
          description:
            'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
          params: ['15'],
        },
      },
      cooldown: '20s',
      energy: 190,
    },
  },
  snowishLaru: {
    name: 'Snowish Laru',
    id: 158,
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
  },
};
