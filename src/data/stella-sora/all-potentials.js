// All Potentials Data - Consolidated from character files
// Auto-generated

export const allPotentials = {
  amber: {
    id: 103,
    name: 'Amber',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          description:
            'An AoE build that reloads additional ammo after casting a skill, enhancing Auto Attack DMG.',
          potentials: [
            'Dominant Firepower',
            'Bullet Storm',
            'Confident Mode',
            'Greed Gunfire',
            'Ardent Trigger',
          ],
        },
        build2: {
          description: 'An AoE build that enhances skills, allowing them to be cast consecutively.',
          potentials: [
            'Precise Temperature Control',
            'Echo of Hospitality',
            'Grand Finale',
            'Weakness Mark',
            'Spectacular Finale',
          ],
        },
      },
      support: {
        build1: {
          description: 'A sustained DPS build that extends skill duration and generates Shadows.',
          potentials: [
            'Hunting Waltz',
            'Scattering Waltz',
            'Nimble Catwalk',
            'Crescendo Beat',
            'Bullet Echoes',
          ],
        },
        build2: {
          description: 'A burst DPS build that allows skills to quickly deal DMG multiple times.',
          potentials: [
            'Echoing Waltz',
            'Flame Waltz',
            'Lingering Gunfire',
            'Blazing Dance',
            'Sky Splitter',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Keen Accent',
          'Fiery Rhythm',
          'Blazing Waltz',
          'Bursting Spark',
          'Overloaded Spark',
          'Soul-Hunting Spark',
        ],
      },
      supportGeneric: {
        potentials: [
          'Thermal Sync',
          'Trajectory Enhancement',
          'Pressure Amp',
          'Bursting Spark',
          'Overloaded Spark',
          'Soul-Hunting Spark',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Dominant Firepower',
          icon: '10301_Potential_01',
          description:
            'After casting Fireworks Jam (Main Skill), immediately reloads <color=#0abec5>36</color> rounds in the magazine. \u000bIncreases Auto Attack DMG by <color=#0abec5>&Param1&</color> before the magazine is depleted.',
          shortDescription:
            'After casting the Main Skill, increases Magazine Capacity and Auto Attack DMG.',
          params: ['50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Bullet Storm',
          icon: '10301_Potential_02',
          description:
            'After casting Fireworks Jam (Main Skill), immediately <color=#0abec5>fully reloads</color> the magazine. \u000bAuto Attacks become AoE Attacks before the magazine is depleted, and deal <color=#0abec5>&Param1& of ATK</color> as AoE Ignis DMG.',
          shortDescription: 'After casting the Main Skill, Auto Attacks become AoE Attacks.',
          params: ['12.9%/14.2%/15.5%/19.4%/20.7%/22%/24.6%/25.9%/27.2%/29.7%/31%/32.3%/33.6%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Precise Temperature Control',
          icon: '10301_Potential_03',
          description:
            'Within <color=#0abec5>2s</color> after casting Fireworks Jam (Main Skill), can immediately cast again. \u000bWhen Fireworks Jam triggers an ##Ignis Mark: Sacred Flame#2013#, casting the Skill again increases its DMG by <color=#0abec5>&Param1&</color>.',
          shortDescription: 'After casting the Main Skill, can immediately cast again.',
          params: ['65%'],
          rarity: 1,
          stype: 42,
          corner: null,
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
          name: 'Echo of Hospitality',
          icon: '10301_Potential_04',
          description:
            'When Fireworks Jam (Main Skill) hits a target, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG. \u000bThis effect can only be triggered <color=#0abec5>5</color> times/s.',
          shortDescription: 'When the Main Skill hits a target, deals extra AoE DMG.',
          params: ['27%/29%/32%/40%/43%/46%/51%/54%/56%/62%/64%/67%/70%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Greed Gunfire',
          icon: '10301_Potential_01',
          description:
            'When Amber lands &Param4& Crit Hits, immediately fully reloads the magazine, and increases Auto Attack DMG by <color=#ec6d21>&Param1&</color> for &Param2&s.\u000bThis effect can only be triggered once every &Param3&s.',
          shortDescription: 'When Amber lands multiple Crit Hits, increases Auto Attack DMG.',
          params: ['13%/21%/29%/37%/45%/53%/61%/69%/76%', '10', '14', '7'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Ardent Trigger',
          icon: '10301_Potential_02',
          description:
            'Each time Amber deals Auto Attack DMG, increases her &Param2& by <color=#ec6d21>&Param1&</color>. This effect can stack up to &Param3& times and resets upon reloading.',
          shortDescription: 'Each time Amber deals Auto Attack DMG, increases her &Param2&.',
          params: ['0.7%/1.1%/1.5%/1.9%/2.3%/2.7%/3.1%/3.5%/3.9%', 'Auto Attack Damage', '36'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Confident Mode',
          icon: '10301_Potential_02',
          description:
            'After casting Fireworks Jam (Main Skill), Amber gains Super Armor, increasing ATK SPD by &Param1& and &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'After casting the Main Skill, Amber gains Super Armor, increasing ATK SPD and &Param4&.',
          params: [
            '35%',
            '15%/24%/33%/43%/52%/61%/70%/79%/88%',
            '8',
            'Auto Attack Damage',
            'Auto Attack Damage',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Weakness Mark',
          icon: '10301_Potential_04',
          description:
            'After casting Fireworks Jam (Main Skill), increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'After casting the Main Skill, increases &Param4&.',
          params: ['9%/15%/20%/26%/31%/37%/42%/48%/53%', '4', '2', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Grand Finale',
          icon: '10301_Potential_04',
          description:
            'Increases the DMG of Fireworks Jam (Main Skill) by <color=#ec6d21>&Param1&</color>, and the Skill shoots 2 extra rounds.',
          shortDescription: 'Increases Main Skill DMG and deals additional damage.',
          params: [
            '14%/22%/30%/38%/47%/55%/63%/71%/79%',
            'ScriptParameterValue,NoLevel,10350911,CommonData,10K',
            'Skill DMG',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Fiery Rhythm',
          icon: 'Common_Potential_9',
          description:
            'Amber can dodge one more time.\u000bWhen Amber deals DMG to an elite or boss target, increases her ATK by <color=#ec6d21>&Param1&</color> for &Param2&s.\u000bThis effect can only be triggered once every &Param3&s.',
          shortDescription:
            'Amber can dodge one more time.\u000bWhen Amber deals DMG to an elite or boss target, increases her ATK.',
          params: ['15%/20%/25%/30%/35%/40%/45%/50%/55%', '8', '12', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Spectacular Finale',
          icon: '10301_Potential_04',
          description:
            'Every time Fireworks Jam (Main Skill) kills a target with ##Ignis Mark: Sacred Flame#2013#, the next time when Amber casts the Main Skill, increases &Param3& by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.',
          shortDescription:
            "When the Main Skill kills a target with ##Ignis Mark: Sacred Flame#2013#, increases the next Main Skill's DMG.",
          params: ['14%/23%/32%/40%/49%/57%/66%/75%/83%', '3', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
          name: 'Keen Accent',
          icon: 'Common_Potential_11',
          description:
            'When Amber lands a Crit Hit on a target with ##Ignis Mark: Sacred Flame#2013#, increases her ATK by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Amber lands a Crit Hit on a target with ##Ignis Mark: Sacred Flame#2013#, increases her ATK.',
          params: ['8%/12%/17%/21%/26%/30%/35%/39%/44%', '5', '3', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
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
          name: 'Blazing Waltz',
          icon: 'Common_Potential_9',
          description:
            "Increases Amber's ATK by <color=#ec6d21>&Param1&</color> while she is moving.",
          shortDescription: "Increases Amber's ATK while she is moving.",
          params: ['11%/17%/24%/30%/37%/43%/50%/56%/63%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Bursting Spark',
          icon: '10301_Potential_41',
          description:
            "After casting Spark of Finality (Ultimate), increases Amber's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "After casting the Ultimate, increases Amber's &Param3&.",
          params: ['21%/34%/46%/59%/71%/84%/97%/109%/122%', '14', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Overloaded Spark',
          icon: '10301_Potential_41',
          description:
            "Casting Spark of Finality resets Skill Cooldown. Within &Param1&s after the Ultimate ends, reduces Amber's Skill Cooldown by 50% and increases &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "Casting an Ultimate resets Skill Cooldown. After the Ultimate ends, reduces Amber's Skill Cooldown and increases &Param3&.",
          params: ['8', '7%/11%/15%/19%/23%/27%/32%/36%/40%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Soul-Hunting Spark',
          icon: '10301_Potential_41',
          description:
            "Within &Param1&s after Amber hit but didn't kill a target with Spark of Finality (Ultimate), increases her Ignis DMG dealt to the target by <color=#ec6d21>&Param2&</color>. \u000bIf she kills the target during this period, gains &Param3& Energy.",
          shortDescription:
            'When Amber attacks a target that survives her Ultimate, increases her DMG dealt to the target.',
          params: ['5', '24%/38%/53%/67%/82%/96%/110%/125%/139%', '15'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Hunting Waltz',
          icon: '10301_Potential_21',
          description:
            'While casting Bullet Waltz (Support Skill), Amber <color=#0abec5>follows</color> the target, dealing <color=#0abec5>&Param1& of ATK</color> as Ignis Skill DMG for 6s.',
          shortDescription: 'The Support Skill locks onto and follow the targets.',
          params: ['22.5%/24.7%/27%/33.7%/35.9%/38.2%/42.7%/44.9%/47.2%/51.7%/53.9%/56.2%/58.4%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Scattering Waltz',
          icon: '10301_Potential_22',
          description:
            'While casting Bullet Waltz (Support Skill), generates <color=#0abec5>2</color> Shadows every <color=#0abec5>2</color>s. \u000bShadows deal <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG every 0.25s for a total of 2.5s.',
          shortDescription: 'Constantly generates Shadows while casting the Support Skill.',
          params: ['2%/2.2%/2.4%/3%/3.2%/3.4%/3.9%/4.1%/4.3%/4.7%/4.9%/5.1%/5.3%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Echoing Waltz',
          icon: '10301_Potential_23',
          description:
            "After casting Bullet Waltz (Support Skill), there is a <color=#0abec5>&Param1&</color> chance to <color=#0abec5>automatically</color> cast it again. \u000bIncreasing Amber's Crit Hit can improve this effect's trigger chance.",
          shortDescription: 'The Support Skill has a chance to automatically cast again.',
          params: ['20%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Flame Waltz',
          icon: '10301_Potential_24',
          description:
            'When Bullet Waltz (Support Skill) ends, Amber fires <color=#0abec5>one</color> additional hit, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG.',
          shortDescription: 'When the Support Skill ends, fires an additional shot.',
          params: ['49%/54%/59%/74%/79%/84%/93%/98%/103%/113%/118%/123%/128%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Nimble Catwalk',
          icon: '10301_Potential_21',
          description:
            'Increases the Attack Range of Bullet Waltz (Support Skill), as well as its DMG by <color=#ec6d21>&Param1&</color>.',
          shortDescription: "Increases the Support Skill's Attack Range and DMG.",
          params: ['8%/12%/17%/22%/26%/31%/35%/40%/45%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Crescendo Beat',
          icon: '10301_Potential_22',
          description:
            'Every 4s, increases the DMG of Bullet Waltz (Support Skill) by <color=#ec6d21>&Param1&</color>, up to 4 stacks. \u000bResets when the Support Skill ends.',
          shortDescription: "The Support Skill's DMG increases with time.",
          params: ['3%/5%/7%/9%/11%/13%/15%/17%/19%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Bullet Echoes',
          icon: '10301_Potential_22',
          description:
            "When casting Bullet Waltz (Support Skill), increases Amber's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s. \u000bThis effect can only be triggered once every &Param3&s.",
          shortDescription: "When casting the Support Skill, increases Amber's &Param4&.",
          params: ['16%/25%/35%/44%/54%/63%/73%/82%/92%', '8', '14', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Lingering Gunfire',
          icon: '10301_Potential_23',
          description:
            'After casting Bullet Waltz (Support Skill), Amber gains 10 stacks of buff. Each stack increases &Param3& by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks. \u000bThe buff will decay by 1 stack/s.',
          shortDescription:
            "After casting the Support Skill, increases Amber's &Param3&, which decays over time.",
          params: ['1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%', '20', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Sky Splitter',
          icon: '10301_Potential_24',
          description:
            'Each time Amber hits a target with ##Ignis Mark: Sacred Flame#2013#, increases her &Param3& by <color=#ec6d21>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect can only be triggered once every 2s. Resets after casting her Ultimate.',
          shortDescription:
            'When Amber hits a target with ##Ignis Mark: Sacred Flame#2013#, increases her &Param3&.',
          params: ['5%/7%/10%/13%/15%/18%/21%/23%/26%', '10', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
          name: 'Trajectory Enhancement',
          icon: 'Common_Potential_11',
          description: "Increases Amber's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Amber's &Param2&.",
          params: ['18%/29%/40%/50%/61%/72%/83%/94%/104%', 'Crit DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Blazing Dance',
          icon: '10301_Potential_23',
          description:
            "After casting Bullet Waltz (Support Skill), increases Amber's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "After casting the Support Skill, increases Amber's &Param4&.",
          params: ['22.5%/30%/37.5%/45%/52.5%/60%/67.5%/75%/82.5%', '8', '2', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Pressure Amp',
          icon: 'Common_Potential_11',
          description: "Increases Amber's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Amber's &Param2&.",
          params: ['9%/14%/20%/25%/31%/36%/41%/47%/52%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Thermal Sync',
          icon: 'Common_Potential_15',
          description: "Increases all Ignis Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Ignis Trekkers' &Param2&.",
          params: ['15%/23%/32%/41%/49%/58%/67%/75%/84%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  ann: {
    id: 123,
    name: 'Ann',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build with a higher chance to trigger Wind Bursts, knocking back enemies and making them take increased DMG.',
          potentials: [
            "Wind's Breath",
            'Stone Dust Tempest',
            'Permeating Courage',
            'Victorious Pursuit',
            'Wind Chime',
          ],
        },
        build2: {
          description:
            'A build that fires laser beams, dealing penetration DMG, and support Trekkers can activate additional laser beams by triggering marks.',
          potentials: [
            'Dazzling Vortex',
            'Grand Debut',
            'Wind Surge',
            'Breeze Caress',
            'Smooth Rotation',
          ],
        },
      },
      support: {
        build1: {
          description:
            "A build that increases the number of walls of wind and applies shields to them, improving the squad's survivability.",
          potentials: [
            'Gale Bastion',
            'Warm Wind Guard',
            'Windgate Barrier',
            'Burdening Pressure',
            'Leveraged Boost',
          ],
        },
        build2: {
          description:
            'A build that allows walls of wind to deal DMG over time and enhances friendly projectiles that pass through them, ideal for pairing with a ranged main Trekker.',
          potentials: [
            'Wind Banish',
            'Downwind Journey',
            'Wind Erosion Havoc',
            'Turbulent Flow',
            'Speed Surge',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Tall Tree Attracts Wind',
          "Wind's Track",
          'Zephyr Caress',
          "Overlord's Warcry",
          "Mountain's Entice",
          'Impulsive Devourer',
        ],
      },
      supportGeneric: {
        potentials: [
          "Forest Princess' Blessing",
          'Storm Repel',
          'Violent Current',
          "Overlord's Warcry",
          "Mountain's Entice",
          'Impulsive Devourer',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: "Wind's Breath",
          icon: '12301_Potential_01',
          description:
            "When Bubble is on the battlefield, if Ann deals DMG, there is a <color=#0abec5>25%</color> chance to create a Wind Burst. \u000bWhen a Wind Burst is created, increases the squad's &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s.",
          shortDescription:
            "When Bubble is on the battlefield, if Ann deals DMG, there is a chance to create a Wind Burst. When a Wind Burst is created, increases the squad's &Param2&.",
          params: [
            '13.7%/15.1%/16.4%/20.5%/21.9%/23.3%/26%/27.4%/28.8%/31.5%/32.9%/34.2%/35.6%',
            'Mark DMG',
            '51.6%',
            '6',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Stone Dust Tempest',
          icon: '12301_Potential_02',
          description:
            'The Wind Burst can blow away weak targets, and their &Param1& is increased by <color=#0abec5>&Param2&</color> for &Param3&s.',
          shortDescription:
            'The Wind Burst can blow away weak targets, and their &Param1& is increased.',
          params: ['Ventus DMG Taken', '13.5%', '2'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Dazzling Vortex',
          icon: '12301_Potential_03',
          description:
            'After Bubble is summoned, it will fire a laser beam within <color=#0abec5>5</color>s, dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Minion DMG and inflicting ##Ventus Mark: Breeze#2017#.',
          shortDescription: 'After Bubble is summoned, it will fire a laser beam.',
          params: ['26.1%/28.7%/31.3%/39.1%/41.7%/44.3%/49.6%/52.2%/54.8%/60%/62.6%/65.2%/67.8%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Grand Debut',
          icon: '12301_Potential_04',
          description:
            "When summoning Bubble, increases the squad's &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s. \u000bWhen a squadmate triggers a ##Ventus Mark#1017#, Bubble will fire an additional laser, dealing <color=#0abec5>&Param4& of ATK</color> as Ventus Minion DMG.",
          shortDescription:
            "When summoning Bubble, increases the squad's &Param1&. When a squadmate triggers a Ventus Mark, Bubble will fire an additional laser.",
          params: [
            'Mark DMG',
            '31.6%',
            '5',
            '26.1%/28.7%/31.3%/39.1%/41.7%/44.3%/49.6%/52.2%/54.8%/60%/62.6%/65.2%/67.8%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Victorious Pursuit',
          icon: '12301_Potential_01',
          description:
            "When a Wind Burst is created, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When a Wind Burst is created, increases the squad's &Param1&.",
          params: ['ATK', '3.6%/5.8%/8%/10.2%/12.4%/14.6%/16.8%/19%/21.2%', '4', '4'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Permeating Courage',
          icon: '12301_Potential_01',
          description:
            "When Bubble is on the battlefield, increases Ann's &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "When Bubble is on the battlefield, increases Ann's &Param1& and &Param3&.",
          params: [
            'DEF',
            '50/67/84/101/118/134/151/168/185',
            'ATK SPD',
            '11%/15%/18%/22%/25%/29%/33%/36%/40%',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Wind Chime',
          icon: '12301_Potential_02',
          description:
            'There is <color=#ec6d21>&Param1&</color> more chance to generate a Wind Burst.',
          shortDescription: 'The Wind Burst is more likely to be generated.',
          params: ['3.5%/7%/10.5%/14%/17.5%/21%/24.5%/28%/31.5%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Wind Surge',
          icon: '12301_Potential_03',
          description:
            'When a squadmate casts a Support Skill, increases the &Param1& of Bubble and a random ally by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to <color=#ec6d21>&Param4&</color> times.',
          shortDescription:
            'When a squadmate casts a Support Skill, increases the &Param1& of Bubble and a random ally.',
          params: ['ATK', '9%/14%/19%/24%/29%/35%/40%/45%/50%', '5', '2'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Breeze Caress',
          icon: 'Common_Potential_7',
          description:
            'When any Trekker in the squad triggers a Ventus Mark, there is a 30% chance to restore <color=#ec6d21>&Param1&</color> HP to Ann. This effect can only be triggered once every 5s.',
          shortDescription:
            "When any Trekker in the squad triggers a Ventus Mark, there is a chance to restore Ann's HP.",
          params: ['3.8%/5.1%/6.4%/7.7%/9%/10.3%/11.6%/12.9%/14.2%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Tall Tree Attracts Wind',
          icon: 'Common_Potential_13',
          description:
            'Ann can dodge one more time.\u000bWhen dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Ann can dodge one more time. Increases her &Param1& when dodging.',
          params: ['DEF', '39/52/65/78/91/105/118/131/144', '4'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Smooth Rotation',
          icon: 'Common_Potential_Wind_1',
          description:
            "When any Trekker in the squad triggers a ##Ventus Mark#1017#, there is a <color=#ec6d21>&Param1&</color> chance to reduce Puffloon Spits' Cooldown by 1s, up to a total of 10s.",
          shortDescription:
            'When any Trekker in the squad triggers a ##Ventus Mark#1017#, there is a chance to reduce Skill Cooldown.',
          params: ['20%/30%/40%/50%/60%/70%/80%/90%/100%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Zephyr Caress',
          icon: 'Common_Potential_Wind_1',
          description:
            "When dodging, Ann creates 2 Wind Bursts and increases squadmates' &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
          shortDescription:
            "When dodging, Ann creates Wind Bursts and increases squadmates' &Param2&.",
          params: [
            '13.7%/15.1%/16.4%/20.5%/21.9%/23.3%/26%/27.4%/28.8%/31.5%/32.9%/34.2%/35.6%',
            'ATK',
            '11%/17%/24%/30%/36%/43%/49%/56%/62%',
            '4',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Wind's Track",
          icon: 'Common_Potential_3',
          description:
            "Ann can dodge through barriers.\u000bWhen Ann dodges through barriers, increases all other friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When Ann dodges through barriers, increases all other friendly units' &Param1&.",
          params: ['Skill DMG', '17%/28%/38%/49%/59%/69%/80%/90%/101%', '4'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: "Overlord's Warcry",
          icon: '12301_Potential_41',
          description:
            "When casting Call of the Wild (Ultimate), the main Trekker gains a shield equal to <color=#ec6d21>&Param1&</color> of Ann's Base Max HP, lasting for &Param2&s.",
          shortDescription: 'When casting the Ultimate, the main Trekker gains a shield.',
          params: ['16%/21%/27%/32%/37%/43%/48%/53%/58%', '15'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Mountain's Entice",
          icon: '12301_Potential_41',
          description:
            "Increases Ann's &Param2& by <color=#ec6d21>&Param1&</color>. \u000bCall of the Wild (Ultimate) can pull in nearby targets.",
          shortDescription: "Increases Ann's &Param2&. The Ultimate can pull in nearby targets.",
          params: ['34%/54%/74%/95%/115%/135%/156%/176%/196%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Impulsive Devourer',
          icon: '12301_Potential_41',
          description:
            'When Call of the Wild (Ultimate) blocks hostile projectiles, the main Trekker gains <color=#ec6d21>&Param1&</color> Energy.',
          shortDescription:
            'When the Ultimate blocks hostile projectiles, the main Trekker gains Energy.',
          params: ['8/11/14/17/19/22/25/28/31'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Gale Bastion',
          icon: '12301_Potential_21',
          description: 'The Support Skill will summon <color=#0abec5>2</color> more walls of wind.',
          shortDescription: 'The Support Skill will summon more walls of wind.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Warm Wind Guard',
          icon: '12301_Potential_22',
          description:
            "After passing through the wall of wind, the main Trekker gains a shield equal to <color=#0abec5>&Param1&</color> of Ann's Base Max HP, and their &Param4& is increased by <color=#0abec5>&Param3&</color> for &Param2&s. \u000bThis effect can only be triggered once every 2s.",
          shortDescription:
            'After passing through the wall of wind, the main Trekker gains a shield and &Param4& is increased.',
          params: ['10%', '4', '20%', 'ATK'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Wind Banish',
          icon: '12301_Potential_23',
          description:
            "The wall of wind will constantly deal AoE DMG, with each hit dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG. Also increases the targets' &Param4& by <color=#0abec5>&Param2&</color> for &Param3&s.",
          shortDescription:
            'The wall of wind will constantly attack nearby targets. Also increases their &Param4&.',
          params: [
            '17.1%/18.8%/20.5%/25.6%/27.3%/29%/32.4%/34.1%/35.8%/39.3%/41%/42.7%/44.4%',
            '16%',
            '6',
            'Ventus DMG Taken',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Downwind Journey',
          icon: '12301_Potential_24',
          description:
            "When the main Trekker's projectiles pass through the wall of wind, increases their &Param2& by <color=#0abec5>&Param1&</color>.",
          shortDescription:
            "When the main Trekker's projectiles pass through the wall of wind, increases their &Param2&.",
          params: ['22.5%', 'Ventus DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Burdening Pressure',
          icon: '12301_Potential_22',
          description:
            "When Wind Barrier (Support Skill) deals DMG, reduces targets' &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When the Support Skill deals DMG, reduces targets' &Param3&.",
          params: ['-8%/-11%/-14%/-16%/-19%/-22%/-24%/-27%/-30%', '6', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Windgate Barrier',
          icon: '12301_Potential_21',
          description:
            "When casting Wind Barrier (Support Skill), increases the main Trekker's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When casting the Support Skill, increases the main Trekker's &Param3&.",
          params: ['17%/26%/36%/46%/56%/66%/76%/86%/96%', '15', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Leveraged Boost',
          icon: '12301_Potential_21',
          description:
            "When the wall of wind blocks hostile projectiles, increases the main Trekker's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When the wall of wind blocks hostile projectiles, increases the main Trekker's &Param3&.",
          params: ['34%/55%/76%/96%/117%/137%/158%/179%/200%', '6', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Turbulent Flow',
          icon: 'Common_Potential_4',
          description:
            "When Wind Barrier (Support Skill) deals DMG, increases targets' &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param4& times.",
          shortDescription: "When the Support Skill deals DMG, increases targets' &Param3&.",
          params: ['5%/8%/11%/14%/18%/21%/24%/27%/30%', '8', 'Ventus DMG Taken', '2'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Wind Erosion Havoc',
          icon: '12301_Potential_23',
          description:
            'For targets near the wall of wind summoned by Wind Barrier (Support Skill), increases their &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the &Param2& of targets near the wall of wind.',
          params: ['15%/25%/34%/43%/52%/61%/71%/80%/89%', 'Ventus DMG Taken'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Storm Repel',
          icon: '12301_Potential_24',
          description:
            'Increases the DMG of Wind Barrier (Support Skill) by <color=#ec6d21>&Param1&</color>.',
          shortDescription: "Increases the Support Skill's DMG.",
          params: ['20%/32%/44%/56%/67%/79%/91%/103%/115%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Speed Surge',
          icon: 'Common_Potential_01',
          description:
            'When the main Trekker passes through the wall of wind, increases her &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.',
          shortDescription:
            'When the main Trekker passes through the wall of wind, increases her &Param1& and &Param3&.',
          params: [
            'ATK SPD',
            '10%/13%/17%/20%/23%/27%/30%/33%/36%',
            'Ventus DMG',
            '6%/8%/10%/12%/14%/16%/18%/20%/22%',
            '5',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Violent Current',
          icon: 'Common_Potential_11',
          description:
            "When a wall of wind is on the battlefield, increases the main Trekker's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "When a wall of wind is on the battlefield, increases the main Trekker's &Param1&.",
          params: ['ATK', '18%/29%/40%/51%/62%/73%/84%/95%/106%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: "Forest Princess' Blessing",
          icon: 'Common_Potential_10',
          description:
            'There is a 35% chance to increase the Ventus DMG dealt by a random ally by an additional <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'There is a chance to increase the Ventus DMG dealt by a random ally.',
          params: ['39%/62%/85%/108%/131%/155%/178%/200%/224%', 'Ventus DMG'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  canace: {
    id: 120,
    name: 'Canace',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          description:
            'An AoE build that increases the number and rotation speed of Flying Leaves, continuously attacking multiple targets along their path.',
          potentials: [
            'Most Admired',
            'Ring Blitz',
            'Comprehensive Praise',
            'Subject Boost',
            'Strength Leverage',
          ],
        },
        build2: {
          description:
            'A single-target build that enhances Auto Attacks after casting a skill, with a chance to fire additional bullets.',
          potentials: [
            'Erratic Weather',
            'Positive Score',
            'Friendly Mentor',
            'Unique Teaching',
            'Counterstrike Tutorial',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A melee AoE build that increases the range of Laurel Wreaths and shortens the Attack Interval.',
          potentials: [
            'Grants Efficient Delving',
            'Grants Transformative Insight',
            'Conclusion Analysis',
            'Structure Analysis',
            'Conundrum Solving',
          ],
        },
        build2: {
          description:
            'A ranged AoE build that increases the rotation speed of Laurel Wreaths and adds extra DMG per orbit.',
          potentials: [
            'Grants Speedup Notion',
            'Grants Blooming Esthetics',
            'Cyclone Acceleration',
            'High Pressure Reflux',
            'Storm Eye Expansion',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Lone Star Twinkle',
          'Weakness Analysis',
          'Shadow Stride',
          'Storm Suppression',
          'Structure Shatter',
          'Downwind Area',
        ],
      },
      supportGeneric: {
        potentials: [
          'Finale Deduction',
          'My Thoughts',
          'My Presence',
          'Storm Suppression',
          'Structure Shatter',
          'Downwind Area',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Most Admired',
          icon: '12001_Potential_01',
          description: 'Summons <color=#0abec5>3</color> additional Flying Leaves.',
          shortDescription: 'Summons more Flying Leaves.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Ring Blitz',
          icon: '12001_Potential_02',
          description: 'Flying Leaves will rotate <color=#0abec5>twice</color> as fast.',
          shortDescription: 'Flying Leaves will rotate faster.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Erratic Weather',
          icon: '12001_Potential_03',
          description:
            "Increases Canace's &Param1& by <color=#0abec5>30%</color>. There is 25% chance to fire additional Ventus-imbued bullets with Auto Attacks.",
          shortDescription:
            "Increases Canace's &Param1&. There is a chance to fire additional Ventus-imbued bullets with Auto Attacks.",
          params: ['ATK SPD'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Positive Score',
          icon: '12001_Potential_04',
          description:
            'When Canace casts Verdant Shroud (Main Skill), she gains 5 <color=#0abec5>Vortex Energy</color>. When a squadmate casts a Support Skill, she gains 3 <color=#0abec5>Vortex Energy</color>, capped at 5. \u000bWhen performing an Auto Attack, consumes 1 <color=#0abec5>Vortex Energy</color> to increase &Param3& by <color=#0abec5>&Param4&</color>.',
          shortDescription:
            'When Canace casts the Main Skill or when squadmate casts a Support Skill, Canace gains <color=#0abec5>Vortex Energy</color> and &Param3& is increased.',
          params: [
            '11.1%/12.2%/13.3%/16.7%/17.8%/18.9%/21.1%/22.2%/23.3%/25.6%/26.7%/27.8%/28.9%',
            '16.9%/18.6%/20.3%/25.3%/27%/28.7%/32.1%/33.8%/35.4%/38.8%/40.5%/42.2%/43.9%',
            'Auto Attack Damage',
            '300%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Subject Boost',
          icon: '12001_Potential_01',
          description:
            "Each Flying Leaf increases the squad's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases the squad's &Param1& based on the number of Flying Leaves.",
          params: ['ATK', '1.9%/3%/4.1%/5.2%/6.3%/7.4%/8.5%/9.6%/10.7%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Strength Leverage',
          icon: '12001_Potential_01',
          description:
            "Increases Canace's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bReduces the &Param3& of targets caught in the Attack Range of Flying Leaves by &Param4&.",
          shortDescription:
            "Increases Canace's &Param1&.\u000bReduces the &Param3& of targets caught in the Attack Range of Flying Leaves.",
          params: ['ATK', '7%/11%/15%/19%/23%/27%/31%/36%/40%', 'ATK', '-10.8%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Comprehensive Praise',
          icon: '12001_Potential_02',
          description:
            'Increases the size of the Flying Leaf. Also increases its &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the size of the Flying Leaf. Also increases its &Param1&.',
          params: ['Skill DMG', '30%/49%/67%/85%/103%/121%/140%/158%/176%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Friendly Mentor',
          icon: '12001_Potential_03',
          description:
            "When Canace casts Verdant Shroud (Main Skill) or when a squadmate casts a Support Skill, increases Canace's &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, up to &Param3& stacks.",
          shortDescription:
            'When Canace casts the Main Skill or when a squadmate casts a Support Skill, her &Param1& is increased.',
          params: ['Auto Attack Damage', '9%/15%/20%/26%/31%/37%/42%/48%/53%', '3', '8'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Unique Teaching',
          icon: '12001_Potential_03',
          description:
            'When Canace triggers ##Ventus Mark: Breeze#2017#, increases its DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When Canace triggers ##Ventus Mark: Breeze#2017#, increases its DMG.',
          params: ['Mark DMG', '77%/122%/168%/214%/260%/306%/352%/398%/444%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Lone Star Twinkle',
          icon: 'Common_Potential_Wind_1',
          description:
            'Double Tempest (Ultimate) can trigger ##Ventus Mark: Breeze#2017#. When the mark is triggered, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, up to &Param3& stacks.',
          shortDescription:
            'The Ultimate can trigger ##Ventus Mark: Breeze#2017#. When the mark is triggered, increases &Param1&.',
          params: ['ATK', '6%/9%/12%/15%/19%/22%/25%/29%/32%', '8', '8'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Counterstrike Tutorial',
          icon: '12001_Potential_04',
          description:
            "Canace will launch the final strike of her Auto Attack right after dodging, and this strike's &Param1& is increased by <color=#ec6d21>&Param2&</color>. This effect can only be triggered once every &Param3&s.",
          shortDescription:
            "Canace will launch the final strike of her Auto Attack right after dodging, and this strike's &Param1& is increased.",
          params: ['Auto Attack Damage', '165%/263%/362%/461%/560%/659%/757%/856%/955%', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadow Stride',
          icon: 'Common_Potential_13',
          description:
            'Canace can dodge one more time.\u000bAfter dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Canace can dodge one more time. Increases her &Param1& after dodging.',
          params: ['ATK', '11%/17%/23%/29%/36%/42%/48%/55%/61%', '8'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Weakness Analysis',
          icon: 'Common_Potential_4',
          description:
            "When the Ventus-imbued bullets deal DMG, there is a &Param4& chance to increase the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When the Ventus-imbued bullets deal DMG, there is a chance to increase the target's &Param1&.",
          params: ['Ventus DMG Taken', '14%/22%/30%/38%/46%/54%/62%/70%/78%', '8', '30%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Storm Suppression',
          icon: '12001_Potential_41',
          description:
            "Increases Double Tempest's DMG by <color=#ec6d21>&Param2&</color>. \u000bThe Ultimate will attack 17x2 times instead of 9x2 times.",
          shortDescription: "Increases Canace's &Param1& and the number of attacks.",
          params: ['Ultimate DMG', '5%/8%/11%/15%/18%/21%/24%/27%/30%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Structure Shatter',
          icon: '12001_Potential_41',
          description:
            "When Double Tempest deals DMG, increases Canace's &Param1& by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks. Resets when the Ultimate ends.",
          shortDescription: "When the Ultimate deals DMG, increases Canace's &Param1&.",
          params: ['Ultimate DMG', '2.5%/4%/5.5%/7%/8.5%/10%/11.5%/13%/14.5%', '15', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Downwind Area',
          icon: '12001_Potential_41',
          description:
            "When casting Double Tempest (Ultimate), increases Canace's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases Canace's &Param1&.",
          params: ['ATK', '37%/59%/81%/103%/125%/147%/169%/191%/213%', '20'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Grants Efficient Delving',
          icon: '12001_Potential_21',
          description:
            "Reduces Laurel Wreath's Attack Interval by <color=#0abec5>50%</color>. \u000bAlso increases its DMG by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Reduces Laurel Wreath's Attack Interval. \u000bAlso increases its DMG.",
          params: ['Skill DMG', '13.5%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Grants Transformative Insight',
          icon: '12001_Potential_22',
          description:
            'Increases the Attack Range of the Laurel Wreath by <color=#0abec5>30%</color> and its DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'Increases the DMG and Attack Range of the Laurel Wreath.',
          params: ['Skill DMG', '13.5%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Grants Speedup Notion',
          icon: '12001_Potential_23',
          description:
            "Increases Canace's Skill DMG by <color=#0abec5>&Param2&</color>.\u000bIncreases the rotation speed of the Laurel Wreath by <color=#0abec5>50%</color>.",
          shortDescription:
            "Increases Canace's Skill DMG and the rotation speed of the Laurel Wreath.",
          params: ['Skill DMG', '50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Grants Blooming Esthetics',
          icon: '12001_Potential_24',
          description:
            'The Laurel Wreath spins around the main Trekker, deals <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG to surrounding targets and inflicts ##Ventus Mark: Breeze#2017#.',
          shortDescription:
            'The Laurel Wreath spins around the main Trekker and deals DMG to surrounding targets.',
          params: ['42%/47%/51%/64%/68%/72%/81%/85%/89%/98%/102%/106%/110%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
      ],
      supportNormal: [
        {
          name: 'Structure Analysis',
          icon: '12001_Potential_21',
          description:
            "When the Laurel Wreath deals DMG, increases the targets' &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, up to &Param3& stacks.",
          shortDescription: "When the Laurel Wreath deals DMG, increases the targets' &Param1&.",
          params: ['Ventus DMG Taken', '2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%', '6', '8'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Conundrum Solving',
          icon: '12001_Potential_22',
          description:
            "Increases Laurel Wreath's DMG to elite or higher-tier targets by <color=#ec6d21>&Param2&</color>. It can now knock back stronger enemies.",
          shortDescription:
            "Increases Laurel Wreath's DMG to elite or higher-tier targets. It can now knock back stronger enemies.",
          params: ['Skill DMG', '16%/26%/36%/46%/56%/65%/75%/85%/95%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Conclusion Analysis',
          icon: '12001_Potential_22',
          description:
            "Increases Laurel Wreath's DMG by <color=#ec6d21>&Param2&</color>. After breaking a target's Resilience, increases the target's &Param3& by &Param4& for &Param5&s.",
          shortDescription:
            "Increases Laurel Wreath's DMG. After breaking a target's Resilience, increases the target's &Param3&.",
          params: [
            'Skill DMG',
            '12%/20%/27%/34%/41%/49%/56%/63%/71%',
            'Ventus DMG Taken',
            '20%',
            '15',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'High Pressure Reflux',
          icon: '12001_Potential_24',
          description:
            'When the Laurel Wreath deals DMG, increases subsequent DMG of the Skill by <color=#ec6d21>&Param2&</color>. This effect can only be triggered once per second.',
          shortDescription:
            'When the Laurel Wreath deals DMG, increases subsequent DMG of the Skill.',
          params: ['Skill DMG', '6%/9%/13%/16%/20%/23%/27%/30%/34%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Cyclone Acceleration',
          icon: '12001_Potential_23',
          description:
            'With each full spin of the Laurel Wreath, increases subsequent DMG of the Skill by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'With each full spin of the Laurel Wreath, increases subsequent DMG of the Skill.',
          params: ['Skill DMG', '8%/13%/18%/23%/28%/33%/38%/43%/47%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'My Thoughts',
          icon: 'Common_Potential_Wind_1',
          description:
            'Double Tempest (Ultimate) can inflict ##Ventus Mark: Breeze#2017# and &Param1& is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'The Ultimate can inflict ##Ventus Mark: Breeze#2017#. Also increases &Param1&.',
          params: ['Ultimate DMG', '22%/36%/49%/62%/75%/89%/102%/115%/129%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'My Presence',
          icon: 'Common_Potential_01',
          description: "Increases Canace's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Canace's &Param1&.",
          params: ['ATK', '9%/14%/20%/25%/31%/36%/41%/47%/52%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Storm Eye Expansion',
          icon: '12001_Potential_23',
          description:
            "With each full spin of the Laurel Wreath, increases the main Trekker's &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, up to &Param3& stacks.",
          shortDescription:
            "With each full spin of the Laurel Wreath, increases the main Trekker's &Param1&.",
          params: ['ATK', '2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%', '6', '3'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Finale Deduction',
          icon: 'Common_Potential_11',
          description:
            "For each Ventus Trekker on the squad, increases Canace's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "For each Ventus Trekker on the squad, increases Canace's &Param1&.",
          params: ['ATK', '8%/13%/18%/23%/28%/33%/38%/43%/48%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  caramel: {
    id: 147,
    name: 'Caramel',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          description:
            'A flexible build that interacts with Boomboxes summoned by skills and allows enhanced Auto Attacks to trigger marks.',
          potentials: [
            'Baseline Finale',
            'Cheer Sparkle',
            'Tempo Shift',
            'Hype Trigger',
            'Rising Tone',
          ],
        },
        build2: {
          description:
            'A positional warfare build that enhances the attack range and increases the attack frequency of Boomboxes summoned by skills.',
          potentials: ['Rhythm Pulse', 'Sonic Boom', 'Fallen Duet', 'Echo Stack', 'Earcatch Riff'],
        },
      },
      support: {
        build1: {
          description:
            'A build that enhances the number and DMG of sweep attacks, ideal for fighting large groups of enemies.',
          potentials: [
            'Melody Return',
            'Heavenly Dropbeat',
            'Bass Gravity',
            'Rhythm Waves',
            'Heart Piercer',
          ],
        },
        build2: {
          description:
            'A single-target build that increases the number of Musical Notes and enhances their ricochet effect.',
          potentials: [
            'Heart Sync',
            'Overflowing Passion',
            'Sync Chime',
            'Soulstrike Sound',
            'House Resonance',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Maximum Boost',
          'Flicker Moves',
          'Shadow Soundstrike',
          'Fallen Veil',
          "Demon's Runway",
          'Ascension Soundflare',
        ],
      },
      supportGeneric: {
        potentials: [
          'Ball of Darkness',
          'Surging Undercurrent',
          'Blazing Remnant',
          'Fallen Veil',
          "Demon's Runway",
          'Ascension Soundflare',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Baseline Finale',
          icon: '14701_Potential_01',
          description:
            'When Caramel is near Demonic Boombox, the last strike of her Auto Attack becomes an AoE Attack, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Umbra DMG. Can trigger ##Umbra Mark: Gloom#2018#.',
          shortDescription:
            'When Caramel is near Demonic Boombox, the last strike of her Auto Attack deals AoE DMG.',
          params: ['19.3%/21.2%/23.1%/28.9%/30.9%/32.8%/36.6%/38.6%/40.5%/44.4%/46.3%/48.2%/50.2%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Cheer Sparkle',
          icon: '14701_Potential_02',
          description:
            "Increases Caramel's &Param1& by <color=#0abec5>&Param2&</color>. When using an Auto Attack, consumes 1 stack of Popularity to directly launch <color=#0abec5>the last strike</color>.\u000bWhen Caramel or Demonic Boombox triggers ##Umbra Mark: Gloom#2018#, Caramel gains 1 stack of Popularity.",
          shortDescription:
            "Increases Caramel's &Param1&. After triggering a mark, directly launches the last strike of her Auto Attack.",
          params: ['Auto Attack Damage', '10%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Rhythm Pulse',
          icon: '14701_Potential_03',
          description:
            "Demonic Boombox additionally unleashes circular sound waves when pulsating, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Minion DMG. Can trigger ##Umbra Mark: Gloom#2018#.\u000bIncreases Caramel's &Param2& by <color=#0abec5>&Param3&</color>.",
          shortDescription:
            "Increases Caramel's &Param2&. Increases the additional DMG dealt by Demonic Boombox when pulsating.",
          params: [
            '11.4%/12.5%/13.7%/17.1%/18.2%/19.3%/21.6%/22.8%/23.9%/26.2%/27.3%/28.4%/29.6%',
            'Minion DMG',
            '18%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Sonic Boom',
          icon: '14701_Potential_04',
          description:
            "Increases Demonic Boombox's Attack Range when pulsating.\u000bIncreases Caramel's &Param1& by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Increases Caramel's &Param1&. Increases Demonic Boombox's Attack Range when pulsating.",
          params: ['Minion DMG', '21%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Tempo Shift',
          icon: '14701_Potential_01',
          description:
            'When Caramel launches the last strike of her Auto Attack, increases her &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by &Param4& for &Param5&s, stacking up to &Param6& times.',
          shortDescription:
            'When Caramel launches the last strike of her Auto Attack, increases her Movement SPD and ATK SPD.',
          params: ['ATK SPD', '6%/7%/9%/11%/13%/15%/16%/18%/20%', 'Movement SPD', '10%', '5', '3'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Hype Trigger',
          icon: '14701_Potential_01',
          description:
            'When Caramel casts Co-Performance (Main Skill), increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Caramel casts the Main Skill, increases her &Param1&.',
          params: ['ATK', '11%/18%/25%/32%/39%/45%/52%/59%/66%', '10'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Rising Tone',
          icon: 'Common_Potential_9',
          description:
            'When Caramel is near Demonic Boombox, increases &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When Caramel is near Demonic Boombox, increases her &Param1&.',
          params: ['Auto Attack Damage', '14%/22%/30%/38%/46%/54%/62%/70%/78%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Fallen Duet',
          icon: '14701_Potential_04',
          description:
            'When casting Melodic Seraphim (Ultimate), launches Demonic Boombox at the same time, dealing <color=#ec6d21>&Param1& of ATK x13</color> as Umbra Minion DMG in a large area.',
          shortDescription: 'When casting the Ultimate, launches Demonic Boombox at the same time.',
          params: ['28%/38%/47%/57%/66%/75%/85%/94%/104%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Echo Stack',
          icon: 'Common_Potential_Dark_1',
          description:
            "When Caramel is near Demonic Boombox, increases Demonic Boombox's DMG by <color=#ec6d21>&Param2&</color>.",
          shortDescription: 'When Caramel is near Demonic Boombox, increases Demonic Boombox DMG.',
          params: ['Minion DMG', '20%/32%/43%/55%/67%/79%/91%/102%/114%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Flicker Moves',
          icon: 'Common_Potential_Dark_1',
          description:
            'Caramel can dodge through barriers.\u000bWhen dodging through barriers, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Caramel dodges through a barrier, increases her ATK.',
          params: ['ATK', '13%/20%/28%/35%/43%/50%/58%/65%/73%', '8'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Shadow Soundstrike',
          icon: 'Common_Potential_3',
          description:
            'When Caramel or Demonic Boombox triggers an ##Umbra Mark: Gloom#2018#, increases their &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When triggering an ##Umbra Mark: Gloom#2018#, increases ATK.',
          params: ['ATK', '11%/17%/24%/30%/37%/43%/50%/56%/63%', '3'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Earcatch Riff',
          icon: '14701_Potential_03',
          description:
            'When Demonic Boombox is pulsating, increases its &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When Demonic Boombox is pulsating, increases its &Param1&.',
          params: ['ATK', '6.5%/10.4%/14.3%/18.2%/22.1%/26%/29.9%/33.8%/37.7%', '3', '9'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Maximum Boost',
          icon: 'Common_Potential_13',
          description:
            "Demonic Boombox's cables constantly deal damage to the target, dealing <color=#ec6d21>&Param1& of ATK</color> as Umbra Minion DMG every 0.5s.",
          shortDescription: "Demonic Boombox's cables constantly deal DMG to the target.",
          params: ['6.8%/9%/11.3%/13.5%/15.8%/18%/20.3%/22.5%/24.8%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Fallen Veil',
          icon: '14701_Potential_41',
          description:
            "Increases Melodic Seraphim (Ultimate)'s DMG to targets inflicted with ##Umbra Burn#2028# by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            'Increases the Ultimate DMG to targets inflicted with ##Umbra Burn#2028#.',
          params: ['Ultimate DMG', '45%/72%/98%/125%/152%/179%/206%/232%/259%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description:
                'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Shackles, dealing DOT.',
              params: [],
            },
          },
        },
        {
          name: "Demon's Runway",
          icon: '14701_Potential_41',
          description:
            "When casting Melodic Seraphim (Ultimate), increases Caramel's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases Caramel's &Param1&.",
          params: ['ATK', '18%/29%/40%/51%/62%/73%/84%/95%/106%', '20'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Ascension Soundflare',
          icon: '14701_Potential_41',
          description:
            'When Melodic Seraphim (Ultimate) deals DMG, increases its DMG by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When the Ultimate deals DMG, increases its DMG.',
          params: ['Ultimate DMG', '9%/14%/20%/25%/30%/35%/41%/46%/51%', '3', '10'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Melody Return',
          icon: '14701_Potential_21',
          description:
            'Adds <color=#0abec5>one</color> horizontal sweep strike to Melodic Sweep (Support Skill). \u000bIncreases the DMG of horizontal sweep by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'Increases the number of horizontal sweeps and DMG of the Support Skill.',
          params: ['Skill DMG', '40%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Heavenly Dropbeat',
          icon: '14701_Potential_22',
          description:
            'When the horizontal sweep deals DMG, reduces its Cooldown by <color=#0abec5>1</color>s and drops a boombox, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Skill DMG.\u000bThis effect can only be triggered 4 times every 2s.',
          shortDescription:
            "When the Support Skill's horizontal sweep deals DMG, reduces its Cooldown and drops a boombox.",
          params: ['5.3%/5.9%/6.4%/8%/8.5%/9.1%/10.1%/10.7%/11.2%/12.3%/12.8%/13.3%/13.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Heart Sync',
          icon: '14701_Potential_23',
          description:
            'The Musical Notes can ricochet <color=#0abec5>2</color> times, each dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Skill DMG.',
          shortDescription: "The Support Skill's Musical Notes can ricochet.",
          params: ['7.6%/8.4%/9.2%/11.4%/12.2%/13%/14.5%/15.3%/16%/17.5%/18.3%/19.1%/19.8%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Overflowing Passion',
          icon: '14701_Potential_24',
          description: 'Releases <color=#0abec5>3</color> more Musical Notes.',
          shortDescription: 'The Support Skill can release more Musical Notes.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Bass Gravity',
          icon: '14701_Potential_21',
          description:
            "The horizontal sweep can pull targets. Increases the horizontal sweep's DMG by <color=#ec6d21>&Param2&</color>.",
          shortDescription: 'Increases of DMG of the horizontal sweeps. Can pull in targets.',
          params: ['Skill DMG', '32%/50%/69%/88%/107%/126%/145%/164%/183%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Rhythm Waves',
          icon: '14701_Potential_22',
          description:
            'Increases the Attack Range of the horizontal sweep. Also increases its DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the Attack Range and DMG of the horizontal sweep.',
          params: ['Skill DMG', '59%/94%/129%/164%/200%/235%/270%/305%/340%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Heart Piercer',
          icon: '14701_Potential_21',
          description:
            "Increases the horizontal sweep's DMG to nearby targets by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases horizontal sweep's DMG to nearby targets.",
          params: ['Skill DMG', '39%/63%/86%/110%/133%/157%/180%/204%/227%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Sync Chime',
          icon: 'Common_Potential_5',
          description:
            'When Caramel releases Musical Notes, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            'When Caramel releases Musical Notes with the Support Skill, increase her &Param1&.',
          params: ['ATK', '1.1%/1.8%/2.5%/3.2%/3.9%/4.6%/5.3%/6%/6.7%', '5', '8'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'House Resonance',
          icon: '14701_Potential_24',
          description:
            "Increases Musical Notes' DMG dealt to elite or higher-tier targets by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "Increases DMG of the Support Skill's Musical Notes dealt to elite or higher-tier targets.",
          params: ['Skill DMG', '16%/26%/36%/46%/56%/65%/75%/85%/95%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Surging Undercurrent',
          icon: 'Common_Potential_Dark_1',
          description:
            'When Melodic Sweep (Support Skill) triggers an ##Umbra Mark: Gloom#2018#, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When the Support Skill triggers ##Umbra Mark: Gloom#2018#, increases ATK.',
          params: ['ATK', '4%/6%/8%/10%/12%/15%/17%/19%/21%', '5', '3'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Blazing Remnant',
          icon: '14701_Potential_24',
          description:
            "Increases Melodic Sweep (Support Skill)'s DMG to targets inflicted with ##Umbra Burn#2028# by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            'Increases Support Skill DMG to targets inflicted with ##Umbra Burn#2028#.',
          params: ['Skill DMG', '12%/19%/26%/33%/40%/47%/54%/61%/68%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description:
                'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Shackles, dealing DOT.',
              params: [],
            },
          },
        },
        {
          name: 'Soulstrike Sound',
          icon: '14701_Potential_24',
          description:
            'The Musical Notes will now attack the same target.\u000bAfter the Musical Notes deal DMG to the same target, increases their DMG by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            "The Support Skill's Musical Notes will now attack the same target. After dealing DMG to the same target, increases Musical Notes' DMG.",
          params: ['Skill DMG', '2.6%/4.2%/5.8%/7.4%/9%/10.6%/12.2%/13.8%/15.4%', '5', '8'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Ball of Darkness',
          icon: 'Common_Potential_15',
          description: "Increases Umbra Trekkers' ATK by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Umbra Trekkers' ATK.",
          params: ['ATK', '10%/15%/21%/27%/32%/38%/44%/49%/55%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  chitose: {
    id: 144,
    name: 'Chitose',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          description:
            'An Auto Attack build that generates Coiling Serpents and Mirror Images upon skill activation.',
          potentials: [
            "Serpent's Glide",
            'Mirror Blade',
            'Aqueous Phantasm',
            'Tremble and Fall',
            'Dance of Elegance',
          ],
        },
        build2: {
          description:
            'A skill build that allows skills to enhance Coiling Serpents and create Mirror Images.',
          potentials: [
            'Cascade of Ruin',
            'Against the Flow',
            'Flowing Circle',
            'Serpent in Tide',
            'Returning Tide',
          ],
        },
      },
      support: {
        build1: {
          description: 'A Crit build that increases skill activation count and DMG upon Crit Hits.',
          potentials: [
            'Submerged Fang',
            'Whirl Blade',
            'Luminous Blade Song',
            'Blink Combo Slash',
            'Sing with Steel',
          ],
        },
        build2: {
          description:
            'A sustained DPS build that allows skills to consecutively generate Mirror Images and inflict Blade Mark, dealing DMG multiple times.',
          potentials: [
            'Blade of the Deep',
            'Where Shadows Drown',
            'Shattered Breath',
            'Shadow Cutter',
            'Mirror Tide',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Azure Embrace',
          'Waltz of Ripples',
          'Adamant Scales',
          "Serpent's Saliva",
          'Serpent Dance',
          'Tide of Serpent Bones',
        ],
      },
      supportGeneric: {
        potentials: [
          'Unseen Aquatic Blade',
          'Water Edge',
          'Waterflow Blade',
          "Serpent's Saliva",
          'Serpent Dance',
          'Tide of Serpent Bones',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: "Serpent's Glide",
          icon: '14401_Potential_01',
          description:
            "After Chitose casts Torrent Flash (Main Skill), her Auto Attack will summon a Coiling Serpent, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Auto Attack DMG. Can trigger ##Aqua Mark#1018#. Also, Chitose's resistance to interruption is increased for &Param9&s.",
          shortDescription:
            'After Chitose casts the Main Skill, her Auto Attack will summon a Coiling Serpent, and her resistance to interruption is increased.',
          params: [
            '15.2%/17.5%/19.7%/26.6%/28.7%/30.8%/35.1%/36.9%/38.7%/42.3%/45.4%/48.4%/51.4%',
            'HitDamage,DamageNum,144311102',
            'HitDamage,DamageNum,144311103',
            'HitDamage,DamageNum,144311108',
            'HitDamage,DamageNum,144311104',
            'HitDamage,DamageNum,144311105',
            'HitDamage,DamageNum,144311109',
            'HitDamage,DamageNum,144311106',
            '12',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Mirror Blade',
          icon: '14401_Potential_02',
          description:
            "After Chitose casts Torrent Flash (Main Skill), her Auto Attack will summon a Mirror Image that has <color=#0abec5>60%</color> of Chitose's ATK and performs Auto Attacks. Also, Chitose's resistance to interruption is increased for &Param1&s.",
          shortDescription:
            'After Chitose casts the Main Skill, her Auto Attack will summon a Mirror Image that performs Auto Attacks, and her resistance to interruption is increased.',
          params: ['12'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Cascade of Ruin',
          icon: '14401_Potential_03',
          description:
            'Chitose may unleash Torrent Flash: Scale after one Torrent Flash cast. Also enhances Torrent Flash: Scale, dealing <color=#0abec5>&Param1& of ATK x4</color> as AoE Aqua Skill DMG.',
          shortDescription:
            'Requires fewer Torrent Flash casts to unleash Torrent Flash: Scale. Also enhances Torrent Flash: Scale.',
          params: ['98%/113%/127%/171%/185%/199%/226%/238%/250%/273%/293%/312%/332%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Against the Flow',
          icon: '14401_Potential_04',
          description:
            "Reduces the cooldown of Torrent Flash (Main Skill) by <color=#0abec5>50%</color>. \u000bWhen casting Torrent Flash, summons a Mirror Image that has <color=#0abec5>50%</color> of Chitose's ATK. The Mirror Image can cast Skills and trigger ##Aqua Mark#1018#.",
          shortDescription:
            'Reduces Main Skill Cooldown. When casting Torrent Flash, summons a Mirror Image.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Tremble and Fall',
          icon: '14401_Potential_02',
          description:
            'Chitose can dodge one more time.\u000bIncreases her &Param1& by <color=#ec6d21>&Param2&</color>. After dodging or casting Torrent Flash (Main Skill), she can deliver the last strike of her Auto Attack immediately.',
          shortDescription:
            'Chitose can dodge one more time and her &Param1& is increased. After dodging or casting the Main Skill, she can deliver the last strike of her Auto Attack immediately.',
          params: ['Auto Attack Damage', '12%/20%/27%/35%/42%/49%/57%/64%/72%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Dance of Elegance',
          icon: '14401_Potential_01',
          description:
            'When the Coiling Serpent deals DMG, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param5&s, up to &Param6& stacks.',
          shortDescription: 'When the Coiling Serpent deals DMG, increases &Param1&.',
          params: [
            'Auto Attack Damage',
            '1.6%/2.6%/3.6%/4.6%/5.6%/6.6%/7.6%/8.6%/9.6%',
            'EffectValue,NoLevel,14406011,EffectTypeFirstSubtype,Enum,EAT',
            'EffectValue,NoLevel,14406011,EffectTypeParam1,HdPct',
            '3',
            '10',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Aqueous Phantasm',
          icon: '14401_Potential_01',
          description:
            'When the Coiling Serpent hits a target, summons another Coiling Serpent, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua Auto Attack DMG. This effect can only be triggered 3 times every 3s. Can trigger ##Aqua Mark#1018#.',
          shortDescription:
            'When the Coiling Serpent hits a target, summons another Coiling Serpent.',
          params: ['37%/59%/81%/104%/126%/148%/170%/192%/215%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Serpent in Tide',
          icon: '14401_Potential_03',
          description:
            "When casting Torrent Flash (Main Skill), increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: 'When casting Torrent Flash (Main Skill), increases &Param1&.',
          params: ['Skill DMG', '5%/8%/11%/14%/17%/20%/23%/26%/29%', '6', '3'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Returning Tide',
          icon: '14401_Potential_03',
          description:
            "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bAfter Torrent Flash: Scale kills a target, the next Torrent Flash becomes Torrent Flash: Scale.",
          shortDescription:
            "Increases Chitose's &Param1&.\u000bAfter Torrent Flash: Scale kills a target, the next Torrent Flash becomes Torrent Flash: Scale.",
          params: ['Skill DMG', '12%/19%/26%/34%/41%/48%/55%/62%/70%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Waltz of Ripples',
          icon: 'Common_Potential_13',
          description:
            'Chitose can dodge through barriers. After dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'Chitose can dodge through barriers. After dodging, increases her &Param1&.',
          params: ['ATK', '11%/17%/24%/30%/36%/43%/49%/56%/62%', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Flowing Circle',
          icon: '14401_Potential_04',
          description:
            "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bAlso increases Torrent Flash (Main Skill)'s initial uses by 1.",
          shortDescription:
            "Increases Chitose's &Param1&.\u000bAlso increases the skill's initial uses.",
          params: ['Skill DMG', '19%/30%/41%/53%/64%/75%/87%/98%/109%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Azure Embrace',
          icon: 'Common_Potential_11',
          description:
            "When an Aqua squadmate is on the battlefield, increase Chitose's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "When an Aqua squadmate is on the battlefield, increase Chitose's &Param1&.",
          params: ['ATK', '15%/24%/33%/42%/51%/60%/69%/78%/87%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Adamant Scales',
          icon: 'Common_Potential_4',
          description:
            "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>. When hit, increases Chitose's &Param3& by an additional <color=#ec6d21>&Param4&</color> for &Param5&s.",
          shortDescription: "Increases Chitose's &Param1&. When hit, increases Chitose's &Param3&.",
          params: [
            'ATK',
            '6%/10%/13%/17%/20%/24%/28%/31%/35%',
            'ATK',
            '8%/13%/18%/23%/28%/33%/38%/43%/48%',
            '8',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: "Serpent's Saliva",
          icon: '14401_Potential_41',
          description:
            "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>. When Naraka Waves (Ultimate) triggers ##Aqua Mark#1018#, there is a 50% chance to convert 1 stack of ##Chill#1027#.",
          shortDescription:
            "Increases Chitose's &Param1&. When the Ultimate triggers ##Aqua Mark#1018#, there is a chance to convert 1 stack of ##Chill#1027#.",
          params: ['Ultimate DMG', '58%/93%/128%/163%/198%/233%/268%/303%/338%'],
          rarity: 2,
          stype: 41,
          corner: 1,
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
        },
        {
          name: 'Serpent Dance',
          icon: '14401_Potential_41',
          description:
            "When casting Waves of Naraka (Ultimate), increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases Chitose's &Param1&.",
          params: ['ATK', '25%/39%/54%/69%/83%/98%/113%/127%/142%', '20'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Tide of Serpent Bones',
          icon: '14401_Potential_41',
          description:
            "Increases Waves of Naraka (Ultimate)'s DMG to targets inflicted with ##Chill#1027#/##Frozen#1002# by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            'Increases Ultimate DMG to targets inflicted with ##Chill#1027#/##Frozen#1002#.',
          params: ['Ultimate DMG', '73%/117%/160%/204%/248%/291%/335%/379%/422%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
      ],
      supportCore: [
        {
          name: 'Submerged Fang',
          icon: '14401_Potential_21',
          description:
            'Water Surge (Support Skill) can deliver 2 additional rounds of rapid slashes and their &Param1& is increased by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            "Increases the &Param1& and amount of casts of the Support Skill's rapid combo slashes.",
          params: ['Crit Rate', '15%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Whirl Blade',
          icon: '14401_Potential_22',
          description:
            'When casting Water Surge (Support Skill), increases the &Param1& of the rapid slashes by <color=#0abec5>&Param2&</color>. When Chitose lands a Crit Hit with a rapid slash, delivers another round of rapid slash immediately, dealing <color=#0abec5>&Param3& of ATK x4</color> as AoE Aqua Skill DMG. This extra slash cannot trigger this effect again.',
          shortDescription:
            "Increases the &Param1& of the Support Skill's rapid combo slashes. When landing a Crit Hit, immediately casts rapid combo slashes again.",
          params: [
            'Crit Rate',
            '35%',
            '2.1%/2.4%/2.8%/3.7%/4%/4.3%/4.9%/5.2%/5.4%/5.9%/6.3%/6.8%/7.2%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Blade of the Deep',
          icon: '14401_Potential_23',
          description:
            'When casting Water Surge, (Support Skill) generates Mirror Images, dealing <color=#0abec5>&Param1& of ATK</color> as Aqua DMG. Up to 6 Mirror Images can be generated through this effect.',
          shortDescription:
            'When casting the Support Skill, generates multiple Mirror Images in a row.',
          params: ['23.6%/27.2%/30.7%/41.4%/44.7%/48%/54.6%/57.5%/60.3%/66%/70.7%/75.4%/80.2%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Where Shadows Drown',
          icon: '14401_Potential_24',
          description:
            'Mirror Images of Water Surge (Support Skill) explode upon hits, dealing <color=#0abec5>&Param1& of ATK</color> as additional AoE Aqua DMG. They can trigger ##Aqua Mark#1018#.',
          shortDescription:
            'Mirror Images of the Support Skill explode upon hits, dealing additional AoE Aqua DMG.',
          params: ['17.2%/19.8%/22.4%/30.1%/32.5%/34.9%/39.7%/41.8%/43.8%/48%/51.4%/54.9%/58.3%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      supportNormal: [
        {
          name: 'Blink Combo Slash',
          icon: '14401_Potential_22',
          description:
            "When the rapid combo slashes from Water Surge (Support Skill) land a Crit Hit, increases the following rapid combo slashes' Crit DMG by <color=#ec6d21>&Param2&</color>. This effect can only be triggered once per 0.5s.",
          shortDescription:
            "When the Support Skill's rapid combo slashes land a Crit Hit, increases the Crit DMG of the subsequent rapid combo slashes.",
          params: ['Skill Crit DMG', '6%/9.6%/13.2%/16.8%/20.4%/24%/27.6%/31.2%/34.8%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Sing with Steel',
          icon: '14401_Potential_21',
          description:
            'Every time Water Surge (Support Skill) casts rapid combo slashes, increases their DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'Every time the Support Skill casts rapid combo slashes, increases their DMG.',
          params: ['Skill DMG', '2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Luminous Blade Song',
          icon: '14401_Potential_21',
          description:
            "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>. Water Surge (Support Skill) can cast 1 more round of rapid combo slashes.",
          shortDescription:
            "Increases Chitose's &Param1& and the available casts of rapid combo slashes of the Support Skill.",
          params: ['Skill Crit DMG', '42%/67%/92%/117%/142%/167%/192%/218%/243%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadow Cutter',
          icon: '14401_Potential_24',
          description:
            "Increases Mirror Images' &Param1& by <color=#ec6d21>&Param2&</color>. When a Mirror Image kills a target, increases other Mirror Images' &Param3& by <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "Increases Mirror Images' &Param1&. When a Mirror Image kills a target, increases other Mirror Images' &Param3&.",
          params: [
            'Skill DMG',
            '11%/17%/23%/29%/36%/42%/48%/55%/61%',
            'Skill DMG',
            '21%/33%/46%/58%/71%/83%/96%/108%/121%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Shattered Breath',
          icon: '14401_Potential_24',
          description:
            "Increases Mirror Images' DMG to targets at less than 70% HP by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Mirror Images' DMG to targets at less than 70% HP.",
          params: [
            'OnceAdditionalAttribute,LevelUp,144230001,AttributeType1,Enum,EAT',
            '35%/55%/76%/97%/117%/138%/159%/179%/200%',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Water Edge',
          icon: 'Common_Potential_Water_1',
          description:
            "Increases Chitose and the Mirror Image's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Chitose and the Mirror Image's &Param1&.",
          params: ['Mark DMG', '47%/76%/104%/132%/160%/189%/217%/245%/274%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Mirror Tide',
          icon: '14401_Potential_23',
          description:
            "When a Mirror Image kills a target, increases Mirror Images' &Param1& by <color=#ec6d21>&Param2&</color>. Resets when the Support Skill ends.",
          shortDescription:
            "When a Mirror Image kills a target, increases Mirror Images' &Param1&.",
          params: ['ATK', '6%/10%/14%/18%/22%/25%/29%/33%/37%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Waterflow Blade',
          icon: 'Common_Potential_20',
          description: "Increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Chitose's &Param1&.",
          params: ['ATK', '10%/16%/22%/28%/34%/40%/46%/52%/58%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Unseen Aquatic Blade',
          icon: 'Common_Potential_15',
          description:
            "For each Aqua Trekker on the squad, increases Chitose's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "For each Aqua Trekker on the squad, increases Chitose's &Param1&.",
          params: ['Aqua DMG', '5%/8%/11%/14%/17%/20%/23%/26%/29%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  chixia: {
    id: 141,
    name: 'Chixia',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that extends the duration of flames and enhances Auto Attacks when there is enough heat.',
          potentials: [
            'Sleepless Flame',
            'Shooting Star',
            'Ashes of the Firepit',
            'Blistering Flame Corrosion',
            'Flame Resonance',
          ],
        },
        build2: {
          description: 'A DPS build that boosts the burst DMG of flames.',
          potentials: [
            'Flame-Stained Ink',
            'Blazing Rainbow Array',
            'Flame-Ink Matrix',
            'Scorching Ink',
            'Infernal Ember',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that allows skills to summon multiple Crimson Dragons for ranged attacks.',
          potentials: [
            'Crimson Dragon: Convergence',
            'Crimson Dragon: Chant',
            'Ink Sigil: Trail Seeker',
            'Ink Sigil: Horn Call',
            'Ink Sigil: Barrier Construct',
          ],
        },
        build2: {
          description:
            'A build that allows skills to summon a Tiger of the East for melee attacks.',
          potentials: [
            'Sigil Unleashed: Tiger of the East',
            'Tiger of the East: Blazing Scales',
            'Ink Sigil: Ambush',
            'Ink Sigil: Blood Fed',
            'Ink Sigil: Raid',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Ink Brilliance',
          'Inkburn Stroke',
          'Finishing Touch',
          'Dragon Blaze',
          'Blazing Vortex',
          'Dragon Breath',
        ],
      },
      supportGeneric: {
        potentials: [
          'Sigil Unleashed: Flame Glow',
          'Majestic Stride',
          'Prayer of Raging Flame',
          'Dragon Blaze',
          'Blazing Vortex',
          'Dragon Breath',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Sleepless Flame',
          icon: '14101_Potential_01',
          description:
            'Increases the duration of Purifying Flames (Main Skill) by <color=#0abec5>3</color>s and Skill DMG by <color=#0abec5>&Param1&</color>.',
          shortDescription: "Increases the Main Skill's duration and DMG.",
          params: ['45%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Shooting Star',
          icon: '14101_Potential_02',
          description:
            "When casting Purifying Flames (Main Skill), generates 1 stack of heat every second. Once full, enhances Chixia's Auto Attacks, dealing <color=#0abec5>&Param1& of ATK x8</color>/<color=#0abec5>&Param2& of ATK x2</color> as AoE Ignis DMG. Each enhanced Auto Attack consumes 1 stack of heat. When an enhanced Auto Attack deals damage to targets with Ink, inflicts ##Ignite#2027#.",
          shortDescription:
            'When Chixia unleashes flames with the Main Skill, builds up heat. Once full, enhances her Auto Attacks.',
          params: [
            '10.2%/11.7%/13.2%/17.8%/19.2%/20.6%/23.5%/24.7%/25.9%/28.3%/30.4%/32.4%/34.4%',
            '33.5%/38.6%/43.6%/58.7%/63.4%/68.1%/77.5%/81.5%/85.5%/93.5%/100.3%/107%/113.7%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2027: {
              id: 2027,
              name: 'Ignite',
              description:
                "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
              params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
            },
          },
        },
        {
          name: 'Flame-Stained Ink',
          icon: '14101_Potential_03',
          description:
            'Ink can stack up to <color=#0abec5>4</color> times on targets. When a target with 4 stacks of Ink triggers ##Burn#2027#, deals <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG.',
          shortDescription:
            'Ink can stack on targets. Once fully stacked, triggers ##Burn#2027#, dealing additional DMG.',
          params: ['125%/144%/163%/219%/237%/254%/289%/304%/319%/349%/374%/399%/424%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2027: {
              id: 2027,
              name: 'Ignite',
              description:
                "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
              params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
            },
          },
        },
        {
          name: 'Blazing Rainbow Array',
          icon: '14101_Potential_04',
          description:
            'Increases the Attack Range of Purifying Flames (Main Skill). \u000bIncreases Skill DMG by <color=#0abec5>&Param1&</color>. This effect gradually diminishes over 3s.',
          shortDescription: 'Increases the DMG and Attack Range of the Main Skill.',
          params: ['272%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Blistering Flame Corrosion',
          icon: '14101_Potential_01',
          description:
            'Reduces the ATK of targets inflicted with ##Burn#2027# by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Reduces the ATK of targets inflicted with ##Burn#2027#.',
          params: ['-7%/-9%/-12%/-14%/-16%/-18%/-21%/-23%/-25%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2027: {
              id: 2027,
              name: 'Ignite',
              description:
                "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
              params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
            },
          },
        },
        {
          name: 'Ashes of the Firepit',
          icon: '14101_Potential_02',
          description:
            'When a target inflicted with ##Burn#2027# is killed, leaves behind lingering flames, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Skill DMG per second for a total of 8s.',
          shortDescription:
            'When a target inflicted with ##Burn#2027# is killed, leaves behind lingering flames that deal DOT.',
          params: ['31%/50%/68%/87%/106%/124%/143%/162%/180%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2027: {
              id: 2027,
              name: 'Ignite',
              description:
                "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
              params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
            },
          },
        },
        {
          name: 'Flame Resonance',
          icon: '14101_Potential_01',
          description:
            "While Purifying Flames (Main Skill) is active, increases the squad's ATK by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "While the Main Skill is active, increases the squad's ATK.",
          params: ['23%/37%/51%/65%/79%/93%/107%/121%/135%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Scorching Ink',
          icon: '14101_Potential_04',
          description:
            'For each stack of Ink on the target, increases the Ignis DMG taken by the target by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Ink can increase the Ignis DMG taken by the target.',
          params: ['4%/7%/9%/12%/14%/17%/19%/22%/24%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Flame-Ink Matrix',
          icon: '14101_Potential_03',
          description:
            'When casting Purifying Flames (Main Skill), deals an additional <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Skill DMG and inflicts Ink.\u000bWhen the Main Skill inflicts ##Burn#2027# on targets inflicted with Ink, increases the Ignis DMG they take by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'The Main Skill deals additional damage. When the Main Skill inflicts ##Burn#2027# on targets, increases the Ignis DMG they take.',
          params: [
            '91%/146%/200%/255%/310%/365%/419%/474%/529%',
            '7%/11%/15%/19%/23%/27%/32%/36%/40%',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2027: {
              id: 2027,
              name: 'Ignite',
              description:
                "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
              params: ['28%/36%/45%/53%/61%/70%/78%/86%/95%', '8'],
            },
          },
        },
        {
          name: 'Inkburn Stroke',
          icon: 'Common_Potential_11',
          description:
            "Dragon's Ascension (Ultimate) can trigger ##Ignis Mark#1016#, dealing &Param1& of ATK as AoE Ignis Mark DMG. Each time the mark is triggered, increases Chixia's ATK by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "The Ultimate can trigger ##Ignis Mark#1016#. Each time the mark is triggered, increases Chixia's ATK.",
          params: [
            '28%/36%/45%/53%/61%/70%/78%/86%/95%',
            '8%/13%/18%/23%/28%/33%/38%/43%/47%',
            '10',
            '5',
          ],
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
          name: 'Infernal Ember',
          icon: '14101_Potential_04',
          description:
            'When Chixia casts Purifying Flames (Main Skill), she gains a shield equal to <color=#ec6d21>&Param1&</color> of her Max HP.',
          shortDescription: 'When Chixia casts the Main Skill, she gains a shield.',
          params: ['7%/10%/12%/14%/17%/19%/22%/24%/26%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Ink Brilliance',
          icon: 'Common_Potential_4',
          description:
            "Can dodge one more time. \u000bWhen casting Purifying Flames (Main Skill), increases &Param3& by <color=#ec6d21>&Param1&</color> for 3s.\u000bWhile the Main Skill is active, each Crit Hit increases the skill's duration by 1s, up to a total of 3s.",
          shortDescription:
            'Chixia can dodge one more time.\u000bWhen casting the Main Skill, increases &Param3&.',
          params: ['29%/46%/63%/81%/98%/115%/133%/150%/167%', '7', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Finishing Touch',
          icon: 'Common_Potential_13',
          description:
            'When Chixia triggers ##Ignis Mark#1016#, increases the Ignis DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Chixia triggers ##Ignis Mark#1016#, increases the Ignis DMG taken by the target.',
          params: ['4%/6%/8%/10%/13%/15%/17%/19%/21%', '10', '3'],
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
          name: 'Dragon Blaze',
          icon: '14101_Potential_42',
          description:
            "When Dragon's Ascension (Ultimate) lands a Crit Hit, increases Chixia's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When the Ultimate lands a Crit Hit, increases Chixia's &Param4&.",
          params: ['16%/26%/36%/46%/56%/65%/75%/85%/95%', '10', '5', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Blazing Vortex',
          icon: '14101_Potential_42',
          description:
            "When casting Dragon's Ascension, creates a blaze vortex, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Ultimate DMG every 0.5s for a total of 8s.",
          shortDescription: 'The Ultimate creates a blaze vortex that deals DMG over time.',
          params: ['49%/78%/107%/137%/166%/195%/225%/254%/283%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Dragon Breath',
          icon: '14101_Potential_43',
          description:
            "When Dragon's Ascension ends, the mighty dragon possesses the main Trekker, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Ultimate DMG every 2s for a total of 8s.",
          shortDescription:
            'When the Ultimate ends, the main Trekker continuously deals DMG in front.',
          params: ['124%/198%/272%/346%/421%/495%/569%/643%/717%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Crimson Dragon: Convergence',
          icon: '14101_Potential_21',
          description:
            "Increases Crimson Dragon's ATK by <color=#0abec5>&Param1&</color>. \u000bChixia can summon <color=#0abec5>1</color> additional Crimson Dragon.",
          shortDescription:
            "Increases Crimson Dragon's ATK. Chixia can summon more Crimson Dragons.",
          params: ['43%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Crimson Dragon: Chant',
          icon: '14101_Potential_22',
          description:
            "When Chixia has more than <color=#0abec5>1</color> minion, increases all of her minions' ATK by <color=#0abec5>&Param1&</color> and their ATK SPD by <color=#0abec5>&Param2&</color>.",
          shortDescription: 'When Chixia has more than 1 minion, increases her ATK and ATK SPD.',
          params: ['35%', '35%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Sigil Unleashed: Tiger of the East',
          icon: '14101_Potential_23',
          description:
            'Crimson Dragon enhances into Tiger of the East. Increases its ATK by <color=#0abec5>&Param1&</color> every 2s. Tiger of the East lasts for 15s, dealing <color=#0abec5>&Param2& of ATK</color>/<color=#0abec5>&Param3& of ATK</color>/<color=#0abec5>&Param4& of ATK x2</color> as AoE Ignis Minion DMG, and inflicting ##Ignis Mark: Sacred Flame#2013#.',
          shortDescription: 'Crimson Dragon transforms into Tiger of the East.',
          params: [
            '50%',
            '114%/132%/149%/200%/216%/232%/264%/278%/292%/319%/342%/365%/388%',
            '153%/175%/198%/267%/288%/310%/352%/371%/389%/426%/456%/487%/517%',
            '102%/117%/132%/178%/192%/206%/235%/247%/259%/284%/304%/324%/345%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
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
          name: 'Tiger of the East: Blazing Scales',
          icon: '14101_Potential_24',
          description:
            'The first minion summoned by &Param2& (Support Skill) is inflicted with Blazing Barrier, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Minion DMG to nearby targets every <color=#0abec5>0.5</color>s.',
          shortDescription:
            'The first summon of the Support Skill creates a Blazing Sphere, dealing DMG to nearby targets continuously.',
          params: [
            '37.7%/43.3%/49%/65.9%/71.2%/76.5%/87%/91.5%/96.1%/105.1%/112.6%/120.2%/127.7%',
            'Awakening: Crimson Dragon',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Ink Sigil: Horn Call',
          icon: '14101_Potential_21',
          description:
            "Each of Chixia's minions increases all friendly units' ATK by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Chixia's minions will increase all friendly units' ATK.",
          params: ['7%/11%/15%/19%/23%/27%/31%/35%/39%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Ink Sigil: Trail Seeker',
          icon: '14101_Potential_21',
          description:
            'When a squadmate casts a Main Skill, Crimson Dragon deals an additional <color=#ec6d21>&Param1& of ATK</color> as Ignis Minion DMG to the target, while Tiger of the East deals an additional <color=#ec6d21>&Param2& of ATK x5</color> as AoE Ignis Minion DMG to the target.',
          shortDescription:
            "When a squadmate casts a Main Skill, Chixia's minions deal additional DMG.",
          params: [
            '119%/191%/262%/334%/405%/477%/548%/620%/691%',
            '71%/114%/156%/199%/241%/284%/327%/369%/412%',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Ink Sigil: Barrier Construct',
          icon: '14101_Potential_22',
          description:
            "Chixia's minions increase the Crit Rate of nearby friendly units by <color=#ec6d21>&Param1&</color>, up to &Param2& times.",
          shortDescription: "Chixia's minions increase the Crit Rate of nearby friendly units.",
          params: ['1.3%/1.7%/2.1%/2.5%/2.9%/3.3%/3.7%/4.1%/4.5%', '6'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Ink Sigil: Blood Fed',
          icon: '14101_Potential_23',
          description:
            "Increases the DMG of Chixia's minions by <color=#ec6d21>&Param1&</color> per second, up to &Param2& times.",
          shortDescription: "Continuously increases the DMG dealt by Chixia's minions.",
          params: ['6.1%/9.8%/13.5%/17.2%/20.9%/24.6%/28.3%/32%/35.7%', '15'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Ink Sigil: Raid',
          icon: '14101_Potential_23',
          description:
            "Increases the Minion DMG dealt by Chixia's minions to close-by targets by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases the DMG dealt by Chixia's minions to close-by targets.",
          params: ['34%/54%/74%/95%/115%/135%/156%/176%/196%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Majestic Stride',
          icon: 'Common_Potential_14',
          description: "Increases Chixia's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Chixia's &Param2&.",
          params: ['16%/26%/36%/45%/55%/65%/74%/84%/94%', 'Minion DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Ink Sigil: Ambush',
          icon: '14101_Potential_24',
          description:
            "When Chixia's minions deal DMG, increases all friendly units' ATK near the target by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When Chixia's minions deal DMG, increases all friendly units' ATK.",
          params: ['15%/24%/33%/42%/51%/60%/69%/78%/87%', '4'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Prayer of Raging Flame',
          icon: 'Common_Potential_7',
          description:
            "Dragon's Ascension (Ultimate) can inflict ##Ignis Mark: Sacred Flame#2013#. When dealing DMG to a target, increases all friendly units' &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          shortDescription:
            "The Ultimate can inflict ##Ignis Mark: Sacred Flame#2013#. When dealing DMG, increases your squad's &Param4&.",
          params: ['18%/28%/39%/50%/60%/71%/81%/92%/103%', '10', '5', 'ATK'],
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
          name: 'Sigil Unleashed: Flame Glow',
          icon: 'Common_Potential_15',
          description:
            "Increases all Ignis Trekkers' Ignis DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Ignis Trekkers' Ignis DMG.",
          params: ['15%/24%/33%/42%/51%/60%/69%/78%/87%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  coronis: {
    id: 118,
    name: 'Coronis',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that increases the number of skill attack hits and progressively expands their range.',
          potentials: [
            "Shadow Reaper's Dance",
            'Soul Splitter',
            'Night Cruise',
            'Soul Buckle',
            'Chained Shadow',
          ],
        },
        build2: {
          description:
            'A DPS build that accumulates and consumes Energy to launch Shadow Scythe to slice targets.',
          potentials: [
            'Shadow Invasion',
            'Phantom Blade',
            'Roaming Spectre',
            'Obscure Eruption',
            'Dark Veil',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that launches Shadow Scythe with skills, capable of performing multiple horizontal sweeps against a single target.',
          potentials: [
            'Skeleton Sculpture',
            'Skeleton Frenzy',
            'Spiritual Tome',
            'Bloodletting Therapy',
            'Magic Transplant',
          ],
        },
        build2: {
          description:
            'A support build that pulls powerful enemies and drops Potent Potions that enhance the main Trekker.',
          potentials: [
            'Hormone Elixir',
            'Toxin Infusion',
            'Arcane Collection',
            'Soul Restraint',
            'Tag of Fate',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Arcane Blade',
          'Shadow Escape',
          'Shadow Dash',
          'Night Reaper',
          'Formidable Glyph',
          'Terrifying Rampage',
        ],
      },
      supportGeneric: {
        potentials: [
          'Underground Healer',
          'Precision Surgery',
          'Medical Research',
          'Night Reaper',
          'Formidable Glyph',
          'Terrifying Rampage',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: "Shadow Reaper's Dance",
          icon: '11801_Potential_01',
          description:
            'Sleight of Scythe (Main Skill) will launch <color=#0abec5>4</color> more strikes.\u000bIncreases &Param2& by <color=#0abec5>&Param1&</color>.',
          shortDescription: "Increases the Main Skill's DMG and number of slashes.",
          params: ['27.2%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Soul Splitter',
          icon: '11801_Potential_02',
          description:
            'When casting Sleight of Scythe (Main Skill), each strike becomes more powerful. \u000bEach strike increases Skill DMG by <color=#0abec5>&Param1&</color> and Attack Range by <color=#0abec5>30%</color> for a total of 3 times.',
          shortDescription:
            'When casting Sleight of Scythe (Main Skill), each strike becomes more powerful.',
          params: ['10%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Shadow Invasion',
          icon: '11801_Potential_03',
          description:
            'When casting Sleight of Scythe (Main Skill), gains <color=#0abec5>2</color> stacks of Necro Energy.\u000bEach Auto Attack will automatically consume 2 stacks of Necro Energy to launch 3 Shadow Scythes, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Auto Attack DMG.',
          shortDescription:
            'Casting the Main Skill grants Necro Energy. Auto Attacks consume Necro Energy to unleash Shadow Scythes.',
          params: [
            '77%/85%/92%/115%/123%/131%/146%/154%/162%/177%/185%/192%/200%',
            'OnceAdditionalAttributeValue,NoLevel,11803011,Value1,10KHdPct',
            'OnceAdditionalAttributeValue,NoLevel,11803011,AttributeType1,Enum,EAT',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Phantom Blade',
          icon: '11801_Potential_04',
          description:
            'When launching the final strike of Midnight Cleave, gains <color=#0abec5>1</color> stack of Necro Energy.\u000bEach Auto Attack will automatically consume 2 stacks of Necro Energy to launch 3 Shadow Scythes, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Auto Attack DMG.',
          shortDescription:
            'The last strike of Auto Attack grants Necro Energy. Auto Attacks consume Necro Energy to unleash Shadow Scythes.',
          params: [
            '77%/85%/92%/115%/123%/131%/146%/154%/162%/177%/185%/192%/200%',
            'OnceAdditionalAttributeValue,NoLevel,11804011,Value1,10KHdPct',
            'OnceAdditionalAttributeValue,NoLevel,11803011,AttributeType1,Enum,EAT',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Night Cruise',
          icon: '11801_Potential_01',
          description:
            "Casting Sleight of Scythe (Main Skill) increases Coronis' Movement SPD. \u000bAlso increases &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: 'Increases &Param2& and Movement SPD while casting the Main Skill.',
          params: ['13%/20%/28%/35%/43%/51%/58%/66%/73%', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Soul Buckle',
          icon: '11801_Potential_01',
          description:
            "Increases Sleight of Scythe' (Main Skill) DMG to targets with ##Dark Shackles#2020# by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases the Main Skill's DMG to targets with ##Dark Shackles#2020#.",
          params: ['17%/28%/38%/49%/59%/69%/80%/90%/101%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2020: {
              id: 2020,
              name: 'Dark Shackles',
              description:
                'After some Umbra Trekkers trigger Umbra Mark, deal damage and trigger Dark Shackles, binding weaker enemies in place.',
              params: [],
            },
          },
        },
        {
          name: 'Chained Shadow',
          icon: 'Common_Potential_9',
          description:
            "For every target with ##Dark Shackles#2020# nearby, increases Coronis' &Param2& by <color=#ec6d21>&Param1&</color>, up to 3 stacks.",
          shortDescription: "Nearby targets with ##Dark Shackles#2020# increase Coronis' &Param2&.",
          params: ['10%/16%/22%/28%/35%/41%/47%/53%/59%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2020: {
              id: 2020,
              name: 'Dark Shackles',
              description:
                'After some Umbra Trekkers trigger Umbra Mark, deal damage and trigger Dark Shackles, binding weaker enemies in place.',
              params: [],
            },
          },
        },
        {
          name: 'Roaming Spectre',
          icon: '11801_Potential_04',
          description:
            "Shadow Scythes will release venom when dealing DMG, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra Auto Attack DMG every 0.5s for 6s.\u000bIncreases Coronis's &Param3& by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "Shadow Scythes will release venom when dealing DMG. Increases Coronis's &Param3&.",
          params: [
            '4%/7%/9%/12%/14%/17%/19%/22%/24%',
            '1.3%/1.7%/2.2%/2.6%/3%/3.4%/3.9%/4.3%/4.7%',
            'ATK',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Obscure Eruption',
          icon: 'Common_Potential_Dark_1',
          description:
            "When Coronis triggers ##Umbra Mark: Gloom#2018#, increases the target's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When Coronis triggers ##Umbra Mark: Gloom#2018#, increases the target's &Param3&.",
          params: ['6%/10%/14%/18%/22%/25%/29%/33%/37%', '10', 'Umbra DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Arcane Blade',
          icon: 'Common_Potential_Dark_1',
          description:
            'Void Reaper (Ultimate) can trigger ##Umbra Mark: Gloom#2018#. Increases &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'The Ultimate can trigger ##Umbra Mark: Gloom#2018#. Increases &Param2&.',
          params: ['77%/122%/168%/214%/260%/306%/352%/398%/444%', 'Mark DMG'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Shadow Dash',
          icon: 'Common_Potential_3',
          description:
            'Coronis can dodge one more time.\u000bWhen dodging, increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'Coronis can dodge one more time. Increases her &Param3& when dodging.',
          params: ['45/60/76/91/106/121/136/151/166', '10', 'DEF'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Dark Veil',
          icon: '11801_Potential_03',
          description:
            "When dodging, increases Coronis's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When dodging, increases Coronis's &Param3&.",
          params: ['14%/22%/30%/38%/46%/54%/62%/70%/78%', '4', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadow Escape',
          icon: 'Common_Potential_13',
          description:
            'Coronis can dodge through barriers.\u000bIncreases her &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Coronis can dodge through barriers. Increases her &Param1&.',
          params: ['ATK', '9%/14%/20%/25%/31%/36%/41%/47%/52%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Night Reaper',
          icon: '11801_Potential_41',
          description:
            "For each target the horizontal slash hits during Void Reaper (Ultimate), increases the DMG of this hit by <color=#ec6d21>&Param2&</color>, up to <color=#ec6d21>3</color> stacks. \u000bIncreases Void Reaper's &Param3& by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "Increases the Ultimate's &Param3&. The more targets the final horizontal slash hits, the higher the DMG will be.",
          params: [
            '30%',
            '46%/73%/101%/128%/156%/183%/211%/238%/266%',
            'Resilience Break Efficiency',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Formidable Glyph',
          icon: '11801_Potential_41',
          description:
            "When casting Void Reaper (Ultimate), increases the main Trekker's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When casting the Ultimate, increases the main Trekker's &Param3&.",
          params: ['63%/100%/138%/175%/213%/251%/288%/326%/363%', '10', 'Mark DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Terrifying Rampage',
          icon: '11801_Potential_41',
          description:
            'When Void Reaper (Ultimate) deals DMG to a target with Resilience, increases its DMG by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'The Ultimate has increased DMG to targets with Resilience.',
          params: ['47%/75%/103%/131%/159%/187%/215%/244%/272%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Skeleton Sculpture',
          icon: '11801_Potential_21',
          description:
            'When launching a horizontal sweep with Bone Chain (Support Skill), unleashes 3 Shadow Scythes, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Skill DMG and inflicting ##Umbra Mark: Gloom#2018#.\u000bWhile casting Bone Chain (Support Skill), increases the &Param3& of the horizontal sweep and Shadow Scythes by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'The Support Skill unleashes multiple Shadow Scythes. Increases the &Param3& of horizontal sweeps and Shadow Scythes.',
          params: [
            '25%/27.5%/30%/37.5%/40%/42.5%/47.5%/50%/52.5%/57.5%/60%/62.5%/65%',
            '60%',
            'Resilience Break Efficiency',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Skeleton Frenzy',
          icon: '11801_Potential_22',
          description:
            'When Coronis breaks the chains with Bone Chain (Support Skill), unleashes 3 Shadow Scythes to the opposite direction, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Skill DMG and inflicting ##Umbra Mark: Gloom#2018#.\u000bWhile casting Bone Chain (Support Skill), increases the &Param3& of the horizontal sweep and Shadow Scythes by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'The Support Skill unleashes multiple Shadow Scythes to the opposite direction. Increases the &Param3& of horizontal sweeps and Shadow Scythes.',
          params: [
            '25%/27.5%/30%/37.5%/40%/42.5%/47.5%/50%/52.5%/57.5%/60%/62.5%/65%',
            '60%',
            'Resilience Break Efficiency',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Hormone Elixir',
          icon: '11801_Potential_23',
          description:
            'When Coronis deals DMG with a horizontal sweep during Bone Chain (Support Skill), there is a <color=#0abec5>50%</color> chance to gain a Potent Potion. Upon picking it up, increases her &Param4& by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            "When the Support Skill's horizontal sweep deals DMG, there is a chance to gain a Potent Potion, which increases her &Param4& when picked up.",
          params: ['67%', '10', '3', 'Mark DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Toxin Infusion',
          icon: '11801_Potential_24',
          description:
            'When Coronis breaks the chains with Bone Chain (Support Skill), releases venom that deals <color=#0abec5>&Param1& of ATK</color> as AoE Umbra Skill DMG every 0.5s for a total of 6s. Venom DMG can inflict ##Umbra Mark: Gloom#2018#.',
          shortDescription: 'Releases venom when breaking the chains with the Support Skill.',
          params: ['20.6%/22.7%/24.7%/30.9%/33%/35%/39.1%/41.2%/43.3%/47.4%/49.4%/51.5%/53.6%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
      ],
      supportNormal: [
        {
          name: 'Spiritual Tome',
          icon: '11801_Potential_21',
          description:
            'When Coronis deals DMG to a target with the horizontal sweep of the Support Skill Bone Chain, launches a second sweep, dealing <color=#ec6d21>&Param1& of ATK</color> as Umbra Skill DMG.\u000bWhile casting the Support Skill Bone Chain, increases the &Param3& of the horizontal sweep and Shadow Scythes by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            "Launches a second sweep after dealing DMG to a target inflicted with the Support Skill's horizontal sweep. Increases the &Param3& of horizontal sweeps and Shadow Scythes.",
          params: [
            '51%/68%/85%/102%/119%/136%/153%/170%/187%',
            '23%/30%/38%/45%/53%/60%/68%/75%/83%',
            'Resilience Break Efficiency',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Bloodletting Therapy',
          icon: '11801_Potential_22',
          description:
            'When Coronis inflicts ##Umbra Mark: Gloom#2018#, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Coronis inflicts ##Umbra Mark: Gloom#2018#, increases her &Param4&.',
          params: ['6%/10%/13%/17%/20%/24%/28%/31%/35%', '10', '3', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Magic Transplant',
          icon: '11801_Potential_21',
          description:
            'When Coronis deals DMG to an elite or higher-tier target with a horizontal sweep during Bone Chain (Support Skill), increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param4& times.',
          shortDescription:
            "When the horizontal sweep deals DMG to elite or higher-tier targets, increases Coronis' &Param3&.",
          params: ['11%/17%/24%/30%/37%/43%/50%/56%/63%', '5', 'ATK', '2'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Arcane Collection',
          icon: 'Common_Potential_5',
          description:
            'When Coronis bind 3 or more targets using Bone Chain (Support Skill), increases &Param2& by <color=#ec6d21>&Param1&</color> when she breaks the chains.',
          shortDescription:
            "When the Support Skill's chains bind multiple targets, increases &Param2& when Coronis breaks the chains.",
          params: ['168%/269%/370%/470%/571%/672%/773%/874%/974%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Soul Restraint',
          icon: '11801_Potential_24',
          description:
            'Bone Chain (Support Skill) can bind and pull stronger targets. Increases &Param2& by <color=#ec6d21>&Param1&</color> when Coronis breaks the chains.',
          shortDescription:
            'The Support Skill can pull stronger targets. Increases &Param2& when Coronis breaks the chains.',
          params: ['120%/192%/264%/336%/408%/480%/552%/624%/696%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Precision Surgery',
          icon: 'Common_Potential_Dark_1',
          description:
            "Void Reaper (Ultimate) can inflict ##Umbra Mark: Gloom#2018#. Increases Coronis' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "Increases Coronis' &Param2&. The Ultimate can inflict ##Umbra Mark: Gloom#2018#.",
          params: ['19%/30%/41%/53%/64%/75%/87%/98%/109%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Medical Research',
          icon: '11801_Potential_24',
          description:
            "When Coronis deals DMG with Bone Chain (Support Skill), reduces the target's Resilience by <color=#ec6d21>&Param2&</color>. This effect can only be triggered once every 12s.\u000bIncreases Coronis' &Param3& by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When the Support Skill deals DMG, reduces the target's Resilience. Increases Coronis' &Param3&.",
          params: ['9%/14%/20%/25%/31%/36%/41%/47%/52%', '5%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Tag of Fate',
          icon: '11801_Potential_24',
          description:
            "When Coronis deals DMG by breaking the chains during Bone Chain (Support Skill), increases the target's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When Coronis deals DMG by breaking the chains (Support Skill), increases the target's &Param3&.",
          params: ['10%/16%/22%/28%/33%/39%/45%/51%/57%', '10', 'Umbra DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Underground Healer',
          icon: 'Common_Potential_15',
          description: "Increases Umbra Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Umbra Trekkers' &Param2&.",
          params: ['10%/15%/21%/27%/32%/38%/44%/49%/55%', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  cosette: {
    id: 142,
    name: 'Cosette',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          description:
            "A build that allows support Trekkers' attacks to increase the activation frequency of Main Skills.",
          potentials: [
            'Nocturn Rip',
            'Nightscar Trace',
            'Darkclaw Haunt',
            'Darkclaw Mark',
            'Darkclaw Etch',
          ],
        },
        build2: {
          description:
            'A single-target combat build that allows skills to enhance Auto Attacks and inflicts marks.',
          potentials: [
            'Netherworld Touch',
            'Nocturn Mark',
            'Twilight Wish',
            'Nightshadow Invasion',
            'Nightshadow Veil',
          ],
        },
      },
      support: {
        build1: {
          description:
            "A build that enhances claw strike range and pulls targets, synergizing with the main Trekker's attacks.",
          potentials: [
            'Abyssal Mark',
            'Eclipse Imprint',
            'Dark: Mirage',
            'Dark: Demon Mark',
            'Dark: Vitality',
          ],
        },
        build2: {
          description:
            "A build that increases the number of claw strikes and boosts the squad's DPS.",
          potentials: [
            'Phantom Mark',
            'Phantom Inscription',
            'Dark: Hallucination',
            'Dark: Form Breaker',
            'Dark: Afterglow',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Starmark Nether',
          'Shadowflash Enigma',
          'Shadowflash Companion',
          'Spectral Ignition',
          'Nether Blaze',
          'Tainted Scar',
        ],
      },
      supportGeneric: {
        potentials: [
          'Gift of Darkness',
          'Void Blessing',
          'Phantom Shelter',
          'Spectral Ignition',
          'Nether Blaze',
          'Tainted Scar',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Nocturn Rip',
          icon: '14201_Potential_01',
          description:
            "Increases DMG of the second heavy punch of Nocturn Hooks (Main Skill) by <color=#0abec5>&Param1&</color>, as well as its Attack Range.\u000bWhen casting the Main Skill, increases all friendly units' &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s.",
          shortDescription:
            "Increases the Main Skill's DMG and Attack Range.\u000bWhen casting the Main Skill, increases all friendly units' &Param2&.",
          params: ['30%', 'Crit Rate', '10%', '8', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Nightscar Trace',
          icon: '14201_Potential_02',
          description:
            "When any other friendly unit lands a Crit Hit, reduces the Cooldown of Nocturn Hooks (Main Skill) by <color=#0abec5>1</color>s, and leaves claw marks at the target's location, dealing <color=#0abec5>&Param1&</color> of Cosette's ATK as AoE Umbra Skill DMG and inflicting ##Umbra Mark: Gloom#2018#.\u000bThis effect can only be triggered 5 times per Skill cast.",
          shortDescription:
            "When any other friendly unit lands a Crit Hit, reduces the Main Skill's Cooldown, leaves claw marks and inflicts ##Umbra Mark: Gloom#2018#.",
          params: ['9.3%/10.2%/11.2%/14%/14.9%/15.8%/17.7%/18.6%/19.5%/21.4%/22.3%/23.3%/24.2%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Netherworld Touch',
          icon: '14201_Potential_03',
          description:
            "After casting Nocturn Hooks (Main Skill), Cosette's Auto Attack is enhanced for <color=#0abec5>&Param1&</color>s, increasing its Attack Range, &Param4& by <color=#0abec5>&Param2&</color>, and &Param5& by <color=#0abec5>&Param3&</color>. Her Auto Attack can also inflict ##Umbra Mark: Gloom#2018#.",
          shortDescription: 'After casting the Main Skill, enhances Auto Attacks.',
          params: ['8', '60%', '35%', 'Auto Attack Damage', 'ATK SPD'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Nocturn Mark',
          icon: '14201_Potential_04',
          description:
            "When Cosette inflicts ##Umbra Mark: Gloom#2018# on the same target for the 3rd time, leaves claw marks, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Umbra Skill DMG, increasing the target's &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s, and inflicting ##Umbra Mark: Gloom#2018#. This effect can only be triggered once per second.",
          shortDescription:
            "When Cosette inflicts ##Umbra Mark: Gloom#2018# multiple times on the target, leaves claw marks and increases the target's &Param2&.",
          params: [
            '17.1%/18.8%/20.5%/25.7%/27.4%/29.1%/32.5%/34.2%/35.9%/39.3%/41.1%/42.8%/44.5%',
            'Umbra DMG Taken',
            '32%',
            '3',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Darkclaw Haunt',
          icon: '14201_Potential_01',
          description:
            "When Nocturn Hooks (Main Skill) deals DMG, increases the targets' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When the Main Skill deals DMG, increases targets' &Param1&.",
          params: ['Umbra DMG Taken', '13%/21%/29%/36%/44%/52%/60%/68%/75%', '5', '3'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Darkclaw Mark',
          icon: '14201_Potential_02',
          description:
            "When Nocturn Hooks (Main Skill) kills a target, increases all friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When the Main Skill kills a target, increases all friendly units' &Param1&.",
          params: ['ATK', '12%/18%/25%/32%/39%/46%/53%/60%/67%', '8'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Darkclaw Etch',
          icon: '14201_Potential_02',
          description:
            "When casting Nocturn Hooks (Main Skill), increases all friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Main Skill, increases all friendly units' &Param1&.",
          params: ['ATK', '9%/14%/19%/24%/29%/35%/40%/45%/50%', '8'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Twilight Wish',
          icon: '14201_Potential_02',
          description:
            "When Cosette uses Auto Attacks, increases all friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "When Cosette uses Auto Attacks, increases all friendly units' &Param1&.",
          params: ['ATK', '4%/6%/8%/10%/12%/14%/16%/18%/20%', '2', '5'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Nightshadow Invasion',
          icon: '14201_Potential_03',
          description:
            'For each target near Cosette inflicted with ##Umbra Mark: Gloom#2018#, increases her &Param1& by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.',
          shortDescription:
            'For every target near Cosette inflicted with ##Umbra Mark: Gloom#2018#, increases her &Param1&.',
          params: ['DEF', '35/46/58/69/81/92/104/115/127', '3'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Shadowflash Enigma',
          icon: 'Common_Potential_13',
          description:
            'Cosette can dodge one more time.\u000bWhen dodging, increases the &Param1& of a random support Trekker by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'Cosette can dodge one more time. When dodging, increases the &Param1& of a random support Trekker.',
          params: ['ATK', '6%/10%/14%/18%/22%/25%/29%/33%/37%', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Starmark Nether',
          icon: '14201_Potential_04',
          description:
            'When a squadmate triggers ##Umbra Mark#1019#, increases their &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            'When an ally triggers an ##Umbra Mark: Gloom#2018#, increases their &Param1&.',
          params: ['ATK', '2%/4%/5%/6%/7%/9%/10%/11%/13%', '3', '5'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description:
                "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Nightshadow Veil',
          icon: '14201_Potential_03',
          description:
            'After Cosette deals 5 instances of Auto Attack DMG, she gains a shield equal to <color=#ec6d21>&Param1&</color> of her Base Max HP for &Param2&s. This effect can only be triggered once every 6s.',
          shortDescription:
            'After Cosette deals multiple instances of Auto Attack DMG, she gains a shield.',
          params: ['10%/13%/17%/20%/23%/27%/30%/33%/36%', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadowflash Companion',
          icon: 'Common_Potential_3',
          description:
            'Cosette can dodge through barriers.\u000bWhen dodging, increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription:
            'Cosette can dodge through barriers. When dodging, increases her &Param3&.',
          params: ['11%/15%/18%/22%/25%/29%/33%/36%/40%', '3', 'ATK SPD'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Spectral Ignition',
          icon: '14201_Potential_41',
          description:
            "Increases Dark Apocalypse (Ultimate)'s &Param2& to targets at the center by <color=#ec6d21>&Param1&</color>.",
          shortDescription: 'Increases Ultimate DMG to targets at the center.',
          params: ['48%/77%/106%/135%/164%/193%/222%/250%/279%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Nether Blaze',
          icon: '14201_Potential_41',
          description:
            "When Dark Apocalypse (Ultimate) deals damage, increases the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When the Ultimate deals DMG, increases the target's &Param1&.",
          params: ['Umbra DMG Taken', '37%/59%/81%/103%/125%/147%/169%/191%/213%', '10', '1'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Tainted Scar',
          icon: '14201_Potential_41',
          description:
            "When Dark Apocalypse (Ultimate) deals DMG, reduces the targets' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When the Ultimate deals DMG, reduces the targets' &Param1&.",
          params: ['ATK', '-8%/-11%/-14%/-16%/-19%/-22%/-24%/-27%/-30%', '15'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Abyssal Mark',
          icon: '14201_Potential_21',
          description:
            "Increases the Attack Range of Abyssal Hunter (Support Skill). \u000bIncreases the &Param1& of targets caught within the claw marks' range by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Increases the Support Skill's Attack Range, and increases the &Param1& of targets caught within the claw marks' range.",
          params: ['Umbra DMG Taken', '12%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Eclipse Imprint',
          icon: '14201_Potential_22',
          description:
            "Abyssal Hunter (Support Skill) can pull in targets. \u000bIncreases the &Param1& of targets caught within the claw marks' range by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "The Support Skill can pull targets. Increases the &Param1& of targets caught within the claw marks' range.",
          params: ['Umbra DMG Taken', '26.7%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Phantom Mark',
          icon: '14201_Potential_23',
          description:
            "Abyssal Hunter (Support Skill) will launch <color=#0abec5>4</color> additional claw strikes. For every <color=#0abec5>4</color> claw strikes, increases all friendly units' &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "The Support Skill will launch more strikes. The claw strikes can increase all friendly units' &Param1&.",
          params: ['ATK', '4.6%', '5', '3'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Phantom Inscription',
          icon: '14201_Potential_24',
          description:
            "Abyssal Hunter (Support Skill) will also launch a finishing heavy strike, dealing <color=#0abec5>&Param1& of ATK</color> as Umbra Skill DMG.\u000bFor every <color=#0abec5>4</color> claw strikes, increases all friendly units' &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s, stacking up to &Param5& times.",
          shortDescription:
            "Adds a finishing heavy strike to the Support Skill. Cosette's claw strikes can increase all friendly units' &Param2&.",
          params: [
            '21%/23.1%/25.2%/31.5%/33.6%/35.7%/39.9%/42%/44.1%/48.2%/50.3%/52.4%/54.5%',
            'ATK',
            '3.8%',
            '5',
            '4',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Dark: Demon Mark',
          icon: '14201_Potential_21',
          description:
            "When Abyssal Hunter (Support Skill) deals DMG, increases the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When the Support Skill deals DMG, increases targets' &Param1&.",
          params: ['Umbra DMG Taken', '11%/18%/25%/32%/39%/45%/52%/59%/66%', '5'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Dark: Mirage',
          icon: '14201_Potential_21',
          description:
            "Abyssal Hunter (Support Skill) now attacks random nearby targets.\u000bWhen Cosette inflicts ##Umbra Mark: Gloom#2018# to a target without a Mark, increases all friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "The Support Skill attacks random nearby targets. When Cosette inflicts ##Umbra Mark: Gloom#2018#, increases all friendly units' &Param1&.",
          params: ['ATK', '17%/27%/38%/48%/58%/69%/79%/89%/100%', '5'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Dark: Vitality',
          icon: '14201_Potential_21',
          description:
            "Each claw strike from Abyssal Hunter (Support Skill) increases the main Trekker's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "Each claw strike from the Support Skill increases the main Trekker's &Param1&.",
          params: ['DEF', '15/20/25/30/35/40/45/50/55', '5', '8'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Dark: Hallucination',
          icon: '14201_Potential_23',
          description:
            "When Abyssal Hunter (Support Skill) deals DMG, there is a 30% chance to stun the target for 3s. Also increases all friendly units' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s. This effect can only be triggered once every 0.5s.",
          shortDescription:
            "When the Support Skill deals DMG, there is a chance to stun the target. Also increases all friendly units' &Param1&.",
          params: ['ATK', '13%/20%/28%/35%/43%/51%/58%/66%/73%', '5'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Dark: Afterglow',
          icon: '14201_Potential_23',
          description:
            "When Cosette repeatedly inflicts ##Umbra Mark: Gloom#2018# on the same target, increases Umbra squadmates' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When Cosette repeatedly inflicts ##Umbra Mark: Gloom#2018# on the same target, increases Umbra squadmates' &Param1&.",
          params: ['ATK', '22%/35%/48%/61%/74%/87%/100%/113%/126%', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Void Blessing',
          icon: '14201_Potential_22',
          description:
            "When Cosette is on the battlefield, increases the main Trekker's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "When Cosette is on the battlefield, increases the main Trekker's &Param1&.",
          params: ['ATK', '21%/33%/45%/58%/70%/83%/95%/107%/120%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Phantom Shelter',
          icon: 'Common_Potential_12',
          description:
            "While Cosette is casting the Support Skill, increases the main Trekker's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "While Cosette is casting the Support Skill, increases the main Trekker's &Param1&.",
          params: ['DEF', '115/154/192/230/269/307/346/384/422'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Dark: Form Breaker',
          icon: '14201_Potential_24',
          description:
            "When Abyssal Hunter (Support Skill) deals DMG, there is a 30% chance to reduce the target's Resilience by <color=#ec6d21>&Param1&</color>. This effect can only be triggered once every 0.5s.",
          shortDescription:
            "When the Support Skill deals DMG, there is a chance to reduce the target's Resilience.",
          params: ['0.4%/0.5%/0.6%/0.7%/0.8%/0.9%/1%/1.1%/1.2%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Gift of Darkness',
          icon: 'Common_Potential_15',
          description: "Increases Umbra Trekkers' &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Umbra Trekkers' &Param1&.",
          params: ['ATK', '14%/22%/30%/38%/46%/54%/62%/70%/78%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  flora: {
    id: 126,
    name: 'Flora',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          description:
            'A sustained AoE build that increases the number of Top Hats and allows them to be recycled.',
          potentials: [
            'Spiral Dance',
            'Ending Song',
            'Perception of Psyche',
            'Movement Artistry',
            'Absurd Follies',
          ],
        },
        build2: {
          description:
            'A penetration build that creates clones, causing Auto Attacks to split and continuously inflict marks.',
          potentials: [
            'Harmony Verse',
            'Other Self',
            "Chekhov's Arm",
            'Emotional Catharsis',
            "Hero's Halo",
          ],
        },
      },
      support: {
        build1: {
          description:
            'A mark infliction build that increases the number of Soulflare Butterflies, allowing them to split continuously.',
          potentials: [
            'Ember of Tomorrow',
            'Ember Rekindled',
            'Perfect Acting',
            'Foreshadowing Verification',
            'Crowd Effect',
          ],
        },
        build2: {
          description:
            "A Crit build that increases the number of Mindflare Butterflies, increasing the main Trekker's DMG.",
          potentials: [
            'Ashes of the Past',
            'Spark of Ashes',
            'Reinforced Impression',
            'Visual Impact',
            'Post-credits Scene',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Rhythm Surge',
          'Impromptu Performance',
          'Home Court Dominance',
          'Lethal Inferno',
          'Weave of Annihilation',
          'Reincarnation of Fire',
        ],
      },
      supportGeneric: {
        potentials: [
          'Backstage Support',
          'Guest Performer',
          'Everlasting Show',
          'Lethal Inferno',
          'Weave of Annihilation',
          'Reincarnation of Fire',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Spiral Dance',
          icon: '12601_Potential_01',
          description:
            'When casting Hat Toss (Main Skill), throws <color=#0abec5>2</color> additional top hats, dealing <color=#0abec5>&Param1& of ATK</color> as Ignis Skill DMG every 0.5s.',
          shortDescription: 'When casting the Main Skill, throws two extra top hats.',
          params: ['13.7%/15%/16.4%/20.5%/21.9%/23.3%/26%/27.4%/28.7%/31.5%/32.8%/34.2%/35.6%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Ending Song',
          icon: '12601_Potential_02',
          description:
            "Increases Flora's Skill DMG by <color=#0abec5>&Param1&</color>.\u000bHat Toss now has two strikes. When launching the second strike or when the top hat reaches its max distance, it will return to Flora instantly.",
          shortDescription:
            "Increases Flora's Skill DMG.\u000bHat Toss now has two strikes. When launching the second strike or when the top hat reaches its max distance, it will return to Flora instantly.",
          params: ['10%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Harmony Verse',
          icon: '12601_Potential_03',
          description:
            'After casting Hat Toss (Main Skill), Flora will summon <color=#0abec5>3</color> fiery birds with her Auto Attacks, lasting for &Param1&s.',
          shortDescription:
            'After casting the Skill, Flora will summon more fiery birds with her Auto Attacks.',
          params: ['8'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Other Self',
          icon: '12601_Potential_04',
          description:
            "When casting Hat Toss (Main Skill), summons a clone. \u000bThe clone has <color=#0abec5>33%</color> of Flora's ATK, deals Auto Attack DMG, and lasts for 8s.",
          shortDescription: 'When casting the Skill, summons a clone.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Movement Artistry',
          icon: '12601_Potential_02',
          description:
            'Top hat can pull in weak targets constantly and its DMG is increased by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Top hat can pull in targets and its DMG is increased.',
          params: ['33%/52%/72%/91%/111%/131%/150%/170%/189%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Perception of Psyche',
          icon: '12601_Potential_01',
          description:
            "When the top hat deals DMG, increases the target's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When the top hat deals DMG, increases the target's &Param4&.",
          params: ['1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%', '8', '8', 'Ignis DMG Taken'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Absurd Follies',
          icon: '12601_Potential_01',
          description:
            'Top hat will bounce off targets upon contact and its DMG is increased by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Top hat will bounce off targets and its DMG is increased.',
          params: ['33%/52%/72%/91%/111%/131%/150%/170%/189%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Emotional Catharsis',
          icon: '12601_Potential_03',
          description:
            "When the fiery bird from Auto Attacks deals DMG, increases the target's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription:
            "When the fiery bird from Auto Attacks deals DMG, increases the target's &Param4&.",
          params: ['1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%', '3', '5', 'Ignis DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Hero's Halo",
          icon: '12601_Potential_04',
          description:
            "When the fiery bird from Auto Attacks deals DMG, increases the squad's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription:
            "When the fiery bird from Auto Attacks deals DMG, increases the squad's &Param4&.",
          params: ['0.8%/1.3%/1.8%/2.3%/2.8%/3.3%/3.8%/4.3%/4.8%', '3', '10', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Rhythm Surge',
          icon: 'Common_Potential_11',
          description:
            "Increases Flora's &Param4& by <color=#ec6d21>&Param1&</color>.\u000bAfter casting Hat Toss (Main Skill), increases her ATK SPD by &Param2& for &Param3&s.",
          shortDescription:
            "Increases Flora's &Param4&.\u000bAfter casting the Main Skill, increases her ATK SPD.",
          params: ['11%/17%/23%/29%/36%/42%/48%/55%/61%', '50%', '10', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Chekhov's Arm",
          icon: '12601_Potential_03',
          description:
            "Increases Flora's &Param2& by <color=#ec6d21>&Param1&</color>.\u000bThe fiery bird from her Auto Attacks can pierce through targets and has a 50% chance to inflict ##Ignis Mark: Sacred Flame#2013# after dealing DMG.",
          shortDescription:
            "Increases Flora's &Param2&.\u000bThe fiery bird from her Auto Attacks can pierce through targets and has a chance to inflict ##Ignis Mark: Sacred Flame#2013#.",
          params: ['18%/29%/40%/50%/61%/72%/83%/94%/104%', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
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
          name: 'Home Court Dominance',
          icon: 'Common_Potential_4',
          description:
            "When Flora inflicts ##Ignis Mark: Sacred Flame#2013# on any target, increases the target's &Param2& by <color=#ec6d21>&Param1&</color> for 6s.",
          shortDescription:
            "When Flora inflicts ##Ignis Mark: Sacred Flame#2013# on any target, increases the target's &Param2&.",
          params: ['7.2%/9.6%/12%/14.4%/16.8%/19.2%/21.6%/24%/26.4%', 'Ignis DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
          name: 'Impromptu Performance',
          icon: 'Common_Potential_13',
          description:
            "After dodging, increases Flora's Movement SPD by &Param1& for &Param2&s. This effect can only be triggered once every <color=#ec6d21>&Param3&</color>s.",
          shortDescription: "After dodging, increases Flora's Movement SPD.",
          params: ['40%', '2.5', '10/9/8/7/6/5/4/4/4'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Lethal Inferno',
          icon: '12601_Potential_41',
          description:
            "When Undying Phoenix (Ultimate) deals DMG, increases the target's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When the Ultimate deals DMG, increases the target's &Param4&.",
          params: ['3%/4%/6%/7%/9%/11%/12%/14%/15%', '10', '7', 'Ignis DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Weave of Annihilation',
          icon: '12601_Potential_41',
          description:
            'The Phoenix Egg will explode when it breaks, dealing <color=#ec6d21>&Param1& of ATK</color> as Ignis Ultimate DMG, inflicting ##Ignis Mark: Sacred Flame#2013# to nearby targets, and stunning them for 2s.',
          shortDescription: 'The Phoenix Egg from the Ultimate will explode.',
          params: ['269%/358%/448%/537%/627%/716%/806%/896%/985%'],
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
          name: 'Reincarnation of Fire',
          icon: '12601_Potential_41',
          description:
            "Reduces Phoenix Egg's Attack Interval. Also deals an additional <color=#ec6d21>&Param1& of ATK x7</color> as Ignis Ultimate DMG.",
          shortDescription: 'The Phoenix Egg from the Ultimate will deal additional DMG.',
          params: ['49%/66%/82%/99%/115%/132%/148%/165%/181%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Ember of Tomorrow',
          icon: '12601_Potential_21',
          description:
            "Spawns <color=#0abec5>2</color> more Soulflare Butterflies. \u000bEach stack of ##Butterfly Mark#2021# increases the target's &Param3& by an additional <color=#0abec5>&Param1&</color>.",
          shortDescription:
            "Spawns more Soulflare Butterflies. \u000bEach stack of ##Butterfly Mark#2021# increases the target's &Param3&.",
          params: [
            '8%',
            'OnceAdditionalAttributeValue,NoLevel,12652101,AttributeType1,Enum,EAT',
            'Ignis DMG Taken',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2021: {
              id: 2021,
              name: 'Butterfly Mark',
              description:
                "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
              params: ['Ignis DMG Taken'],
            },
          },
        },
        {
          name: 'Ember Rekindled',
          icon: '12601_Potential_22',
          description:
            'When the main Ignis Trekker deals DMG to a target, for each stack of ##Butterfly Mark#2021# on the target, there is a <color=#0abec5>35%</color> chance to spawn a Soulflare Butterfly, dealing <color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG. This effect can only be triggered once per second.',
          shortDescription:
            'When the main Ignis Trekker deals DMG to a target with Butterfly Mark, there is a chance to spawn a Soulflare Butterfly.',
          params: [
            'EffectValue,NoLevel,12652201,EffectTypeParam1,HdPct',
            '17.9%/19.7%/21.5%/26.9%/28.7%/30.5%/34.1%/35.9%/37.6%/41.2%/43%/44.8%/46.6%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2021: {
              id: 2021,
              name: 'Butterfly Mark',
              description:
                "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
              params: ['Ignis DMG Taken'],
            },
          },
        },
        {
          name: 'Ashes of the Past',
          icon: '12601_Potential_23',
          description:
            "Spawns <color=#0abec5>2</color> more Mindflare Butterflies.\u000bWhile Mindflare Butterflies are present, increases the main Ignis Trekker's &Param2& by <color=#0abec5>&Param1&</color>.",
          shortDescription:
            "Spawns more Mindflare Butterflies. Increases the main Ignis Trekker's &Param2&.",
          params: ['12%', 'Crit DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Spark of Ashes',
          icon: '12601_Potential_24',
          description:
            'When the main Ignis Trekker deals DMG to a target, for each Mindflare Butterfly present, there is a 20% chance to increase the damage dealt by <color=#0abec5>&Param1&</color> and spawn a ##Scorched Butterfly#2019#, dealing<color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG. This effect can only be triggered once per sec.',
          shortDescription:
            "Mindflare Butterfly has a chance to increase the main Ignis Trekker's DMG and spawn a ##Scorched Butterfly#2019#.",
          params: [
            '14%',
            '11.47%/12.6%/13.8%/17.2%/18.4%/19.5%/21.8%/23%/24.1%/26.4%/27.5%/28.7%/29.8%',
            'Ignis DMG',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2019: {
              id: 2019,
              name: 'Scorched Butterfly',
              description: 'Can apply Ignis Mark: Sacred Flame. Cannot apply Butterfly Mark.',
              params: [
                '11.47%/12.6%/13.8%/17.2%/18.4%/19.5%/21.8%/23%/24.1%/26.4%/27.5%/28.7%/29.8%',
              ],
            },
          },
        },
      ],
      supportNormal: [
        {
          name: 'Foreshadowing Verification',
          icon: '12601_Potential_22',
          description:
            "Increases the main Ignis Trekker's &Param2& to targets inflicted with ##Butterfly Mark#2021# by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "Increases the main Ignis Trekker's &Param2& to targets inflicted with ##Butterfly Mark#2021#.",
          params: ['21%/33%/45%/58%/70%/83%/95%/107%/120%', 'Crit DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2021: {
              id: 2021,
              name: 'Butterfly Mark',
              description:
                "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
              params: ['Ignis DMG Taken'],
            },
          },
        },
        {
          name: 'Crowd Effect',
          icon: '12601_Potential_22',
          description:
            "Each target inflicted with ##Butterfly Mark#2021# on the battlefield will increase the main Trekker's &Param3& by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.",
          shortDescription:
            "Each target inflicted with ##Butterfly Mark#2021# on the battlefield will increase the main Trekker's &Param3&.",
          params: ['1.9%/3%/4.1%/5.2%/6.3%/7.4%/8.5%/9.6%/10.7%', '6', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2021: {
              id: 2021,
              name: 'Butterfly Mark',
              description:
                "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
              params: ['Ignis DMG Taken'],
            },
          },
        },
        {
          name: 'Perfect Acting',
          icon: '12601_Potential_21',
          description:
            "When casting Flutter Flare (Support Skill), increases the main Trekker's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s. \u000bWhen the main Trekker lands a Crit Hit, spawns a ##Scorched Butterfly#2019#, dealing <color=#ec6d21>&Param3& of ATK</color> as Ignis Skill DMG. This effect can only be triggered once per second.",
          shortDescription:
            "When casting the Support Skill, increases the main Trekker's &Param4&. \u000bWhen the main Trekker lands a Crit Hit, spawns a ##Scorched Butterfly#2019#.",
          params: [
            '18%/28%/39%/49%/60%/71%/81%/92%/102%',
            '10',
            '8.9%/11.8%/14.8%/17.8%/20.7%/23.7%/26.6%/29.6%/32.6%',
            'ATK',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2019: {
              id: 2019,
              name: 'Scorched Butterfly',
              description: 'Can apply Ignis Mark: Sacred Flame. Cannot apply Butterfly Mark.',
              params: [
                '11.47%/12.6%/13.8%/17.2%/18.4%/19.5%/21.8%/23%/24.1%/26.4%/27.5%/28.7%/29.8%',
              ],
            },
          },
        },
        {
          name: 'Visual Impact',
          icon: '12601_Potential_24',
          description:
            'When the main Trekker lands a Crit Hit, increases their &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'When the main Trekker lands a Crit Hit, increases their &Param3&.',
          params: ['15%/24%/33%/42%/50%/59%/68%/77%/86%', '3', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Post-credits Scene',
          icon: '12601_Potential_23',
          description:
            'When Mindflare Butterflies die, they will transform into ##Scorched Butterflies#2019#, each dealing <color=#ec6d21>&Param1& of ATK</color> as Ignis Skill DMG.',
          shortDescription:
            'When Mindflare Butterflies die, they will transform into ##Scorched Butterflies#2019#.',
          params: ['14.5%/19.4%/24.2%/29%/33.9%/38.7%/43.6%/48.4%/53.2%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2019: {
              id: 2019,
              name: 'Scorched Butterfly',
              description: 'Can apply Ignis Mark: Sacred Flame. Cannot apply Butterfly Mark.',
              params: [
                '11.47%/12.6%/13.8%/17.2%/18.4%/19.5%/21.8%/23%/24.1%/26.4%/27.5%/28.7%/29.8%',
              ],
            },
          },
        },
        {
          name: 'Guest Performer',
          icon: 'Common_Potential_14',
          description:
            "When casting Flutter Flare (Support Skill), increases all Ignis Trekkers' &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s.",
          shortDescription:
            "When casting the Support Skill, increases all Ignis Trekkers' &Param2&.",
          params: ['19%/30%/42%/53%/64%/75%/87%/98%/109%', 'ATK', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Reinforced Impression',
          icon: '12601_Potential_23',
          description:
            "Each Mindflare Butterfly increases the main Ignis Trekker's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Each Mindflare Butterfly increases the main Ignis Trekker's &Param2&.",
          params: ['1.2%/1.6%/2%/2.4%/2.8%/3.2%/3.6%/4%/4.4%', 'Crit Rate'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Backstage Support',
          icon: 'Common_Potential_7',
          description:
            "When an ally lands a Crit Hit, the main Trekker's HP is restored by <color=#ec6d21>&Param1&</color>. This effect can only be triggered once every 6s.",
          shortDescription: "When an ally lands a Crit Hit, restores the main Trekker's HP.",
          params: ['1.6%/2.1%/2.7%/3.2%/3.7%/4.3%/4.8%/5.3%/5.9%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Everlasting Show',
          icon: 'Common_Potential_15',
          description:
            "When the Soulflare Butterfly deals DMG, reduces the target's &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s.",
          shortDescription:
            "When the Soulflare Butterfly deals DMG, reduces the target's &Param2&.",
          params: ['-9%/-12%/-16%/-19%/-22%/-25%/-28%/-31%/-34%', 'ATK', '8'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  firenze: {
    id: 110,
    name: 'Firenze',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          title: 'Firenze: Main Build 1',
          description: 'A build that enhances combat mobility and skill activation frequency.',
          potentials: [
            'Step Kicking',
            'Nimble Step',
            'High Risk',
            'Dark Pirouette',
            'Flash Break'
          ]
        },
        build2: {
          title: 'Firenze: Main Build 2',
          description: 'A summoner build that enhances clone capabilities and attack synergy.',
          potentials: [
            'Phantom Waltz',
            'Shadow Step',
            'Gloomy Veil',
            'Extended Shift',
            'Accurate Coincidence'
          ]
        }
      },
      support: {
        build1: {
          title: 'Firenze: Support Build 1',
          description: 'A build that amplifies skill activation effects and boosts sustained DPS at the target\'s location.',
          potentials: [
            'Shadow Nail',
            'Shadow Flicker',
            'Drinking Party',
            'Typical Case',
            'Joyous Whip'
          ]
        },
        build2: {
          title: 'Firenze: Support Build 2',
          description: 'A build that empowers clones summoned via skills, increasing their numbers and duration.',
          potentials: [
            'Twin Shadow',
            'Shadownight Descendant',
            'Step Sync',
            'Dark Resurgence',
            'Flexible Operation'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Step Kicking',
          icon: '11001_Potential_01',
          description: 'When casting Elegant Parade (Main Skill), Firenze deals an additional <color=#0abec5>&Param1& x3</color> of ATK as AoE Umbra Skill DMG.',
          shortDescription: 'The Main Skill deals additional damage.',
          params: [
            '55%/63%/71%/95%/103%/111%/126%/133%/139%/152%/163%/174%/185%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Nimble Step',
          icon: '11001_Potential_02',
          description: 'After Firenze\'s Elegant Parade (Main Skill) deals DMG <color=#0abec5>6</color> times, it creates a domain for &Param1&s, dealing <color=#0abec5>&Param2&</color> of ATK as AoE Umbra Skill DMG every 0.5s and increases Firenze\'s &Param3& by <color=#0abec5>&Param4&</color>. The domain\'s DMG can trigger ##Umbra Mark#1019#.',
          shortDescription: 'When Firenze\'s Main Skill deals DMG for a certain number of times, she creates a domain that deals continuous AoE DMG and boosts her &Param3&.',
          params: [
            '7',
            '67%/77%/87%/118%/127%/137%/155%/164%/172%/188%/201%/215%/228%',
            'Skill DMG',
            '5%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Phantom Waltz',
          icon: '11001_Potential_03',
          description: 'Firenze generates <color=#0abec5>1</color> ##Shadow Clone#4002# every <color=#0abec5>5</color>s.\nWhen casting Elegant Parade (Main Skill), increases the number of ##Shadow Clones#4002# summoned by <color=#0abec5>&Param1&</color>.',
          shortDescription: 'Firenze automatically summons ##Shadow Clones#4002#. When casting the Main Skill, increases the number of ##Shadow Clones#4002# summoned.',
          params: [
            '1'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Shadow Step',
          icon: '11001_Potential_04',
          description: 'Upon vanishing, Firenze\'s ##Shadow Clones#4002# will explode, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Minion DMG.\nThe max limit of ##Shadow Clones#4002# increases by <color=#0abec5>&Param2&</color> for every other Umbra Trekker in the squad.',
          shortDescription: 'Upon vanishing, Firenze\'s ##Shadow Clones#4002# will explode, dealing AoE DMG. The max limit of ##Shadow Clones#4002# increases for every other Umbra Trekker in the squad.',
          params: [
            '117%/135%/152%/205%/221%/238%/271%/285%/299%/327%/350%/374%/397%',
            '1'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'High Risk',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firenze deals Skill DMG, there is a &Param2& chance to deal an additional <color=#ec6d21>&Param1&</color> of ATK as Umbra Skill DMG. The chance is increased to &Param3& if the target is inflicted with ##Umbra Burn#2028#. This effect can only be triggered &Param4& times every second.',
          shortDescription: 'When Firenze deals Skill DMG, there is a chance to deal additional DMG.',
          params: [
            '64%/103%/141%/180%/218%/256%/295%/333%/372%',
            '400000',
            '800000',
            '2'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description: 'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Burn, dealing DOT.'
            }
          }
        },
        {
          name: 'Gloomy Veil',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases ##Shadow Clone#4002#\'s max limit by &Param1& and &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Increases ##Shadow Clone#4002#\'s max limit and &Param2&.',
          params: [
            '1',
            'Dee',
            '14%/22%/31%/39%/47%/55%/64%/72%/80%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Hunting Command',
          icon: 'Common_Potential_Fire_1',
          description: 'For each Umbra Trekker in the squad, increases Firenze\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Each Umbra Trekker in the squad increases Firenze\'s &Param1&.',
          params: [
            'Dee',
            '7%/11%/15%/19%/23%/27%/31%/35%/39%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Dark Pirouette',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firenze triggers an ##Umbra Mark#1019#, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Firenze triggers an ##Umbra Mark#1019#, increases &Param1&.',
          params: [
            'ATK',
            '15%/24%/33%/42%/51%/60%/69%/78%/87%',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Extended Shift',
          icon: 'Common_Potential_Dark_1',
          description: '##Shadow Clone#4002# lasts <color=#ec6d21>&Param1&</color>s longer on the battlefield. Also increases &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: '##Shadow Clone#4002# lasts longer on the battlefield. Also increases &Param2&.',
          params: [
            '',
            'Summondmg',
            '19%/31%/43%/54%/66%/77%/89%/101%/112%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Clone Trick',
          icon: 'Common_Potential_Fire_1',
          description: 'Firenze can dodge through barriers.\nIncreases ##Shadow Clone#4002#\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Firenze can dodge through barriers. Increases ##Shadow Clone#4002#\'s DMG.',
          params: [
            'Summondmg',
            '8%/13%/17%/22%/27%/31%/36%/41%/46%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Flash Break',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firenze deals DMG with an Auto Attack, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to <color=#ec6d21>&Param4&</color> times. The effect ends if Elegant Parade (Main Skill) is cast.',
          shortDescription: 'When Firenze deals DMG with an Auto Attack, increases her &Param1&. The effect ends if the Main Skill is cast.',
          params: [
            'Skill DMG',
            '4%/6%/9%/11%/13%/15%/18%/20%/22%',
            '5',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Accurate Coincidence',
          icon: 'Common_Potential_Fire_1',
          description: 'After Firenze casts Elegant Parade (Main Skill), her next Auto Attack directly casts the last strike.\nAlso increases ##Shadow Clone#4002#\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'After Firenze casts the Main Skill, her next Auto Attack starts with the 4th strike. Also increases ##Shadow Clone#4002#\'s &Param1&.',
          params: [
            'Summondmg',
            '13%/20%/28%/35%/43%/50%/58%/65%/73%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Announcement Time',
          icon: 'Common_Potential_Fire_1',
          description: 'Firenze can dodge one more time.\nWhen dodging, increases Firenze\'s &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'Firenze can dodge one more time. Increases her &Param3& when dodging.',
          params: [
            '4%/6%/9%/11%/13%/15%/18%/20%/22%',
            '6',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Shadow Nail',
          icon: '11001_Potential_21',
          description: 'The cane stays in the ground for 6s, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG per second.',
          shortDescription: 'The cane stays in the ground for a period of time, dealing DMG over time.',
          params: [
            '35%/40%/45%/61%/65%/70%/80%/84%/88%/96%/103%/110%/117%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Shadow Flicker',
          icon: '11001_Potential_22',
          description: 'When the cane disappears, triggers an explosion, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG.',
          shortDescription: 'When the cane disappears, triggers an explosion, dealing AoE DMG.',
          params: [
            '108%/124%/141%/189%/204%/220%/250%/263%/276%/302%/323%/345%/367%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Twin Shadow',
          icon: '11001_Potential_23',
          description: 'Reign of Night (Support Skill) summons <color=#0abec5>2</color> more ##Shadow Clones#4002#, with the max limit increased by <color=#0abec5>&Param1&</color>.',
          shortDescription: 'Increases the max limit and the number summoned of ##Shadow Clones#4002# by Support Skills.',
          params: [
            '2'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Shadownight Descendant',
          icon: '11001_Potential_24',
          description: 'The ##Shadow Clones#4002# summoned by Reign of Night (Support Skill) will last <color=#0abec5>5</color>s longer on the battlefield.',
          shortDescription: 'The ##Shadow Clones#4002# summoned by the Support Skill will last longer on the battlefield.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Drinking Party',
          icon: 'Common_Potential_Dark_1',
          description: 'When cane DMG triggers an ##Umbra Mark#1019#, reduces Reign of Night (Support Skill)\'s Cooldown by &Param3&s. This effect can only be triggered &Param4& times per cast.\nAlso increases DMG dealt by the cane by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'When cane DMG triggers an ##Umbra Mark#1019#, reduces Support Skill Cooldown. Also increases the cane\'s DMG.',
          params: [
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '',
            '1',
            '4'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Step Sync',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases ##Shadow Clone#4002#\'s &Param3& by <color=#ec6d21>&Param2&</color>. Reduces the intervals between their sprint attacks by <color=#ec6d21>&Param1&%</color>.',
          shortDescription: 'Increases ##Shadow Clone#4002#\'s &Param3&. Reduces the intervals between their sprint attacks.',
          params: [
            '',
            '5%/9%/12%/15%/18%/21%/25%/28%/31%',
            'Summondmg'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Shadow Waltz',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases ##Shadow Clone#4002#\'s &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases ##Shadow Clone#4002#\'s DMG.',
          params: [
            '18%/28%/39%/49%/60%/70%/81%/91%/102%',
            'Summondmg'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Typical Case',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the cane\'s Umbra DMG to targets inflicted with ##Dark Burn#2028# by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the cane\'s Umbra DMG to targets inflicted with ##Dark Burn#2028#.',
          params: [
            '0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description: 'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Burn, dealing DOT.'
            }
          }
        },
        {
          name: 'Dark Resurgence',
          icon: 'Common_Potential_Dark_1',
          description: 'Upon vanishing, ##Shadow Clones#4002# will explode, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Minion DMG.',
          shortDescription: 'Upon vanishing, Firenze\'s ##Shadow Clones#4002# will explode, dealing AoE DMG.',
          params: [
            '35%/55%/76%/97%/118%/138%/159%/180%/201%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Prime Stance',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases Firenze\'s &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases Firenze\'s &Param2&.',
          params: [
            '16%/26%/36%/46%/56%/65%/75%/85%/95%',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Joyous Whip',
          icon: 'Common_Potential_Fire_1',
          description: 'When the cane deals DMG, increases Firenze\'s &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param4& stacks.',
          shortDescription: 'When the cane deals DMG, increases Firenze\'s &Param3&.',
          params: [
            '3%/4%/6%/8%/9%/11%/12%/14%/16%',
            '10',
            'ATK',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Flexible Operation',
          icon: 'Common_Potential_Dark_1',
          description: 'When a ##Shadow Clone#4002# deals damage, increases all present ##Shadow Clones#4002#\' &Param3& by <color=#ec6d21>&Param1&</color>, up to &Param4& stacks.',
          shortDescription: 'When a ##Shadow Clone#4002# deals DMG, increases all ##Shadow Clones#4002#\' &Param3& on the battlefield.',
          params: [
            '2.9%/4.6%/6.3%/8%/9.7%/11.4%/13.1%/14.8%/16.5%',
            '6',
            'Summondmg',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Special Care',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases all Umbra Trekkers\' &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases all Umbra Trekkers\' &Param2&.',
          params: [
            '11%/17%/23%/29%/36%/42%/48%/55%/61%',
            'Dee'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Instant Liquidation',
          icon: '11001_Potential_41',
          description: 'Firenze absorbs all ##Shadow Clones#4002# when casting Personal Tuition (Ultimate). Each ##Shadow Clone#4002# absorbed increases Ultimate DMG by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.',
          shortDescription: 'When Firenze casts her Ultimate, each ##Shadow Clone#4002# on the battlefield increases her Ultimate DMG.',
          params: [
            '35%/55%/76%/97%/117%/138%/159%/179%/200%',
            '5',
            'Ultimate DMG'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            4002: {
              id: 4002,
              name: 'Shadow Clone'
            }
          }
        },
        {
          name: 'Instant Peak',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firenze deals DMG, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Firenze deals DMG, increases &Param1&.',
          params: [
            'Ultracritrate',
            '5%/7%/8%/10%/11%/13%/15%/16%/20%',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Place Your Bets',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firenze triggers an ##Umbra Mark#1019#, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks. The effect ends if Personal Tuition (Ultimate) is cast.',
          shortDescription: 'When Firenze triggers an ##Umbra Mark#1019#, increases &Param1&.',
          params: [
            'Ultimate DMG',
            '17%/28%/38%/49%/59%/69%/80%/90%/101%',
            '20',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ]
    }
  },
  freesia: {
    id: 125,
    name: 'Freesia',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          description: 'A DPS build that combines multiple spinning slashes with Auto Attacks.',
          potentials: [
            'Ice Mist Barrier',
            'Rapid Verdict',
            'Elemental Sublimation',
            'Doomsday Blessing',
            'Soul Extraction',
          ],
        },
        build2: {
          description: 'A build that deals DMG through continuous spinning slashes.',
          potentials: [
            'Whirlwind Frenzy',
            'Unstoppable March',
            'Limits of Oblivion',
            'Frost Gift',
            'Frost Ward',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that generates numerous Ice Blossoms, ideal for fighting large enemies.',
          potentials: [
            'Realm of Frost',
            'Chill Forecast',
            'Penetrating Chill',
            "Winter's Grip",
            'Crackling Zero',
          ],
        },
        build2: {
          description:
            'A build that continuously generates Ice Blossoms to attack enemies while Berserk.',
          potentials: [
            'Localized Snowfall',
            'Frost Warning',
            'Ocean of Law',
            'Power of Redemption',
            'Blessing of Faith',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Victorious Pursuit',
          'Tit-for-Tat',
          'Desperate Counterattack',
          'Ice Vortex',
          'Wuthering Cold Snap',
          'Frost Slash',
        ],
      },
      supportGeneric: {
        potentials: [
          'Temporal Revival',
          "Guardian's Heart",
          'Silent Prayer',
          'Ice Vortex',
          'Wuthering Cold Snap',
          'Frost Slash',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Ice Mist Barrier',
          icon: '12501_Potential_01',
          description:
            'When &Param3& (Main Skill) ends, leaves a cloud of icy mist, lasting for 10s. For enemies caught inside the mist, reduces their Movement SPD by <color=#0abec5>&Param1&</color>; for all friendly units within the same area, increases their Auto Attack DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'When the Main Skill ends, leaves a cloud of icy mist, reducing the Movement SPD of enemies caught inside the area and increasing the Auto Attack DMG of all friendly units in the same area.',
          params: ['-35%', '13%', 'Freezing Swirl'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rapid Verdict',
          icon: '12501_Potential_02',
          description:
            '&Param2& (Main Skill) cannot be charged. \u000bWhen it ends, deals <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Skill DMG. For each target hit, reduces Skill Cooldown by <color=#0abec5>2</color>s, up to a total of <color=#0abec5>6</color>s.',
          shortDescription: 'The Main Skill cannot be charged. When it ends, deals additional DMG.',
          params: [
            '64%/74%/83%/112%/121%/130%/148%/156%/163%/179%/192%/204%/217%',
            'Freezing Swirl',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Whirlwind Frenzy',
          icon: '12501_Potential_03',
          description:
            'Increases the DMG of &Param2& (Main Skill) by <color=#0abec5>&Param1&</color>. The skill will launch <color=#0abec5>2</color> additional attacks. For every <color=#0abec5>0.5</color>s charge time, it launches <color=#0abec5>2</color> more attacks.',
          shortDescription: 'Increases Skill DMG and the number of attacks.',
          params: ['120%', 'Freezing Swirl'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Unstoppable March',
          icon: '12501_Potential_04',
          description:
            'While casting &Param3& (Main Skill), Freesia is <color=#0abec5>immune to control</color>, and her Attack Range is increased by <color=#0abec5>50%</color>. \u000bWhen she deals damage, increases Skill DMG by <color=#0abec5>&Param1&</color>, up to &Param2& stacks.',
          shortDescription:
            'While casting the Main Skill, Freesia is immune to control, and her Attack Range and Skill DMG are increased.',
          params: ['4.6%', '24', 'Freezing Swirl'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Doomsday Blessing',
          icon: '12501_Potential_01',
          description:
            "When &Param3& (Main Skill) ends, increases Freesia's ATK by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When the Main Skill ends, increases Freesia's ATK.",
          params: ['27%/44%/60%/77%/93%/109%/126%/142%/159%', '9', 'Freezing Swirl'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Elemental Sublimation',
          icon: '12501_Potential_01',
          description:
            'Casting &Param5& (Main Skill) increases the damage of the next Ultimate by <color=#ec6d21>&Param1&</color>. While Freesia is in ##Berserk#2014#, increases her Auto Attack DMG by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks.',
          shortDescription:
            'Casting this Main Skill increases the damage of the next Ultimate. Also increases Auto Attack DMG when Freesia is in ##Berserk#2014#.',
          params: [
            '50%/80%/110%/140%/170%/200%/230%/260%/290%',
            '11%/18%/25%/31%/38%/45%/51%/58%/65%',
            '3',
            'Elegy of Frost',
            'Freezing Swirl',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
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
        {
          name: 'Soul Extraction',
          icon: '12501_Potential_02',
          description:
            'While Freesia is in ##Berserk#2014#, casting &Param3& (Main Skill) increases her ATK by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription:
            'While Freesia is in ##Berserk#2014#, casting the Main Skill increases her ATK.',
          params: ['35%/56%/77%/99%/120%/141%/162%/183%/200%', '7', 'Freezing Swirl'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
        {
          name: 'Frost Gift',
          icon: '12501_Potential_03',
          description:
            'When &Param3& (Main Skill) deals DMG to a normal target with ##Frozen#1002#, there is a &Param1& chance to trigger ##Shattered Ice#2007#.\u000bWhen dealing DMG to an elite or boss target with ##Chill#1027#/##Frozen#1002#, there is a &Param1& chance to increase the DMG dealt by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'The Main Skill has a chance to trigger ##Shattered Ice#2007# or increase the DMG dealt.',
          params: ['50%', '19%/31%/42%/54%/65%/77%/88%/100%/111%', 'Freezing Swirl'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
            2007: {
              id: 2007,
              name: 'Shatter',
              description:
                'When a specific DMG type hits a Frozen normal target, it immediately kills the target.',
              params: [],
            },
          },
        },
        {
          name: 'Limits of Oblivion',
          icon: '12501_Potential_04',
          description:
            'While casting &Param2& (Main Skill), falling ice axes deal <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG every 1.5s.',
          shortDescription:
            'While casting the Main Skill, ice axes will fall and deal DMG every few seconds.',
          params: ['38%/62%/85%/108%/131%/154%/177%/200%/223%', 'Freezing Swirl'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Victorious Pursuit',
          icon: 'Common_Potential_9',
          description:
            'When Freesia triggers ##Aqua Mark: Torrent#1018#, if she is in ##Berserk#2014#, extends the duration of her Berserk by <color=#ec6d21>&Param1&</color>s. This effect can only be triggered <color=#ec6d21>&Param2&</color> times.',
          shortDescription:
            'When Freesia triggers ##Aqua Mark#1018#, if she is in ##Berserk#2014#, extends the duration of her Berserk.',
          params: ['1/2/2/3/3/4/4/5/5', '1/1/2/2/3/3/4/4/5', 'Freezing Swirl'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
            2014: {
              id: 2014,
              name: 'Berserk',
              description:
                'Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.',
              params: ['46%', 'Character,NoLevel,125,Name,Text'],
            },
          },
        },
        {
          name: 'Frost Ward',
          icon: '12501_Potential_03',
          description:
            "While Freesia is in ##Berserk#2014#, casting &Param2& (Main Skill) won't reduce the duration of Berserk and its DMG will be increased by <color=#ec6d21>&Param1&</color> per second.",
          shortDescription:
            "While Freesia is in ##Berserk#2014#, casting this Main Skill won't reduce the duration of Berserk and its DMG will be increased gradually.",
          params: ['9%/15%/20%/26%/31%/37%/42%/48%/53%', 'Freezing Swirl'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
        {
          name: 'Desperate Counterattack',
          icon: 'Common_Potential_11',
          description:
            'Freesia can dodge one more time.\u000bWhen Freesia triggers ##Aqua Mark: Torrent#1018#, she gains <color=#ec6d21>&Param1&</color> Energy. This effect can only be triggered once every &Param2&s.',
          shortDescription:
            'Freesia can dodge one more time.\u000bWhen Freesia triggers ##Aqua Mark#1018#, she gains Energy.',
          params: ['5/6/7/8/9/11/12/13/14', '5', 'Freezing Swirl'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description:
                "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Tit-for-Tat',
          icon: 'Common_Potential_Water_1',
          description:
            "&Param5& (Ultimate) can trigger ##Aqua Mark: Torrent#1018#, dealing &Param1& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#. Also increases Freesia's ATK by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "The Ultimate can trigger ##Aqua Mark#1018# and inflict ##Chill#1027#. Triggering this effect will increases Freesia's ATK.",
          params: [
            '52%/67%/82%/98%/113%/129%/144%/159%/175%',
            '2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%',
            '8',
            '5',
            'Elegy of Frost',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
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
        },
      ],
      common: [
        {
          name: 'Ice Vortex',
          icon: '12501_Potential_41',
          description:
            "While Freesia is in ##Berserk#2014#, every time &Param3& (Ultimate) hits a target, increases Freesia's Crit DMG by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.",
          shortDescription:
            "While Freesia is in ##Berserk#2014#, every time the Ultimate hits a target, increases Freesia's Crit DMG.",
          params: ['18%/29%/40%/51%/62%/73%/84%/95%/106%', '20', 'Elegy of Frost'],
          rarity: 2,
          stype: 41,
          corner: 1,
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
        {
          name: 'Wuthering Cold Snap',
          icon: '12501_Potential_41',
          description:
            'While Freesia is in ##Berserk#2014#, casting any skill increases her Auto Attack DMG by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'While Freesia is in ##Berserk#2014#, casting any skill increases her Auto Attack DMG.',
          params: ['26%/41%/57%/72%/88%/103%/119%/134%/150%', '15', '3', 'Elegy of Frost'],
          rarity: 2,
          stype: 41,
          corner: 2,
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
        {
          name: 'Frost Slash',
          icon: '12501_Potential_41',
          description:
            'When Freesia enters the ##Berserk#2014# status, she inflicts ##Frozen#1002# on nearby targets for &Param1&s.\u000bWithin &Param2&s after casting the Ultimate, Auto Attack DMG dealt on an elite or boss target with ##Chill#1027#/##Frozen#1002# have a &Param3& chance to increase by <color=#ec6d21>&Param4&</color>.\u000bAuto Attack DMG dealt on a normal target with ##Frozen#1002# have a &Param3& chance to trigger ##Shattered Ice#2007#.',
          shortDescription:
            "When Freesia enters the ##Berserk#2014# status, she inflicts ##Frozen#1002# on nearby targets. After casting the Ultimate, Freesia's Auto Attacks have a chance to trigger ##Shattered Ice#2007# or increase DMG.",
          params: [
            '3',
            '10',
            '50%',
            '62%/100%/137%/175%/212%/249%/287%/324%/362%',
            'Elegy of Frost',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
            2007: {
              id: 2007,
              name: 'Shatter',
              description:
                'When a specific DMG type hits a Frozen normal target, it immediately kills the target.',
              params: [],
            },
            2014: {
              id: 2014,
              name: 'Berserk',
              description:
                'Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.',
              params: ['46%', 'Character,NoLevel,125,Name,Text'],
            },
          },
        },
      ],
      supportCore: [
        {
          name: 'Realm of Frost',
          icon: '12501_Potential_21',
          description:
            'Increases the DMG of &Param2& (Support Skill) by <color=#0abec5>&Param1&</color>. Also increases the Attack Range of Ice Flowers by 60%.',
          shortDescription: 'Increases Skill DMG and the Attack Range of Ice Flowers.',
          params: ['10%', 'Frost Bloom'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Chill Forecast',
          icon: '12501_Potential_22',
          description:
            'Increases the DMG of &Param2& (Support Skill) by <color=#0abec5>&Param1&</color>. Freesia will summon more Ice Flowers.',
          shortDescription: 'Increases Skill DMG and the number of Ice Flowers.',
          params: ['10%', 'Frost Bloom'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Localized Snowfall',
          icon: '12501_Potential_23',
          description:
            'After Freesia casts &Param2& (Support Skill) while in ##Berserk#2014#, there is a <color=#0abec5>30%</color> chance to summon one Ice Flower with an Auto Attack within <color=#0abec5>&Param1&</color>s.',
          shortDescription:
            'After Freesia casts the Support Skill while in ##Berserk#2014#, there is a chance to summon an Ice Flower with an Auto Attack.',
          params: ['6', 'Frost Bloom'],
          rarity: 1,
          stype: 42,
          corner: null,
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
        {
          name: 'Frost Warning',
          icon: '12501_Potential_24',
          description:
            'When Freesia hits targets inflicted with ##Chill#1027#/##Frozen#1002#, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Skill DMG.',
          shortDescription:
            'When Freesia hits targets inflicted with ##Chill#1027#/##Frozen#1002#, deals additional DMG.',
          params: ['80%/92%/105%/141%/152%/163%/186%/195%/205%/224%/240%/256%/273%', 'Frost Bloom'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
      ],
      supportNormal: [
        {
          name: "Winter's Grip",
          icon: '12501_Potential_21',
          description:
            'When &Param4& (Support Skill) hits a target, increases the Aqua DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s, up to <color=#ec6d21>&Param3&</color> stacks.',
          shortDescription:
            'When the Support Skill hits a target, increases the Aqua DMG taken by the target.',
          params: [
            '2.1%/3.4%/4.7%/6%/7.3%/8.6%/9.9%/11.2%/12.5%',
            '7',
            '4/4/6/6/8/8/8/8/8',
            'Frost Bloom',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Penetrating Chill',
          icon: '12501_Potential_22',
          description:
            'When &Param3& (Support Skill) deals damage to the same target, increases Skill DMG by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.',
          shortDescription: "Increases the Support Skill's DMG to the same target over time.",
          params: ['4%/6%/8%/10%/12%/15%/17%/19%/21%', '12', 'Frost Bloom'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Crackling Zero',
          icon: '12501_Potential_22',
          description:
            'When the Ice Flowers summoned by &Param2& (Support Skill) disappear, leaves behind Ice Seeds. After 2s, the Ice Seeds deal <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG.',
          shortDescription:
            'When the Ice Flowers summoned by the Support Skill disappear, deals additional DMG.',
          params: ['36%/58%/80%/102%/124%/145%/167%/189%/211%', 'Frost Bloom'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Ocean of Law',
          icon: '12501_Potential_23',
          description:
            'While Freesia is in ##Berserk#2014#, after her Auto Attacks hit targets inflicted with ##Chill#1027#/##Frozen#1002#, increases her ATK by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'While Freesia is in ##Berserk#2014#, after her Auto Attacks hit targets inflicted with ##Chill#1027#/##Frozen#1002#, increases her ATK.',
          params: ['3.4%/5.4%/7.4%/9.4%/11.4%/13.4%/15.4%/17.4%/19.4%', '3', '10', 'Frost Bloom'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
            2014: {
              id: 2014,
              name: 'Berserk',
              description:
                'Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.',
              params: ['46%', 'Character,NoLevel,125,Name,Text'],
            },
          },
        },
        {
          name: 'Blessing of Faith',
          icon: '12501_Potential_24',
          description:
            'While Freesia is in ##Berserk#2014#, casting &Param5& (Support Skill) extends the duration of ##Berserk#2014# by &Param1&s, and increases Skill DMG by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'While Freesia is in ##Berserk#2014#, casting the Support Skill extends the duration of ##Berserk#2014# and increases Skill DMG.',
          params: ['3', '9%/15%/20%/26%/31%/37%/42%/48%/53%', '15', '3', 'Frost Bloom'],
          rarity: 2,
          stype: 41,
          corner: 3,
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
        {
          name: "Guardian's Heart",
          icon: 'Common_Potential_11',
          description:
            "When Freesia squads up with Aqua Trekkers only, increases the squad's Crit Rate by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When Freesia squads up with Aqua Trekkers only, increases the squad's Crit Rate.",
          params: ['5%/7%/9%/10%/12%/14%/15%/17%/19%', 'Frost Bloom'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Power of Redemption',
          icon: '12501_Potential_24',
          description:
            'When Freesia is on the battlefield, increases her ATK by <color=#ec6d21>&Param1&</color> per second, up to &Param2& times. This effect will be removed when she leaves the battlefield.',
          shortDescription: 'When Freesia is on the battlefield, increases her ATK over time.',
          params: ['2%/3%/4%/5%/6%/7%/8%/9%/10%', '25', 'Frost Bloom'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Silent Prayer',
          icon: 'Common_Potential_Water_1',
          description:
            "Increases &Param2& (Ultimate)'s DMG by <color=#ec6d21>&Param1&</color> and inflicts ##Aqua Mark: Torrent#2008#.",
          shortDescription: 'Increases Ultimate DMG and inflicts ##Aqua Mark: Torrent#2008#.',
          params: ['100%/160%/220%/280%/340%/400%/460%/520%/580%', 'Elegy of Frost'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Temporal Revival',
          icon: 'Common_Potential_15',
          description:
            "After casting &Param6& (Support Skill), there is a <color=#ec6d21>&Param1&</color> chance to increase the squad's &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "After casting the Support Skill, there is a chance to increase the squad's &Param5&.",
          params: [
            '25%/25%/38%/38%/50%/50%/60%/60%/70%',
            '30%/48%/66%/84%/102%/120%/138%/156%/174%',
            '15',
            '2',
            'Auto Attack Damage',
            'Frost Bloom',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  fuyuka: {
    id: 134,
    name: 'Fuyuka',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that increases Magazine Capacity and strikes enemies with enhanced Auto Attacks.',
          potentials: ['Reload', 'Double Strike', 'Thunder Punch', 'Pyro Mark', 'All-Out Effort'],
        },
        build2: {
          description:
            'A build that instantly dumps Ammo, dealing massive DMG with high-frequency Auto Attacks.',
          potentials: ['Kitty Punch', 'Multi-Shot Blast', 'Chase Combo Punch', 'Inertial Punch'],
        },
      },
      support: {
        build1: {
          description: 'A build that gathers power to deal massive single-target DMG.',
          potentials: [
            'Sky Crusher',
            'Lightning Split',
            'Shock Raid',
            'Frenzied Support',
            'Momentum Primed',
          ],
        },
        build2: {
          description: 'A build that deals rapid, multi-hit DMG to targets over time.',
          potentials: [
            'Meteor Strike',
            'Fearless Multi-Blow',
            'Impact Lethal Boost',
            'Lightning Raid',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Finishing Blow',
          'Swirling Counterattack',
          'Bold Challenge',
          'Blazing Heart',
          'Ironfist Blow',
          'Peak Performance',
        ],
      },
      supportGeneric: {
        potentials: [
          "Companions' Power",
          "Hero's Will",
          'Prove of Strength',
          'Blazing Heart',
          'Ironfist Blow',
          'Peak Performance',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Reload',
          icon: '13401_Potential_01',
          description:
            "Fuyuka's Magazine now holds 9 ammo.\nWhen casting &Param1& (Main Skill), deals an additional <color=#0abec5>&Param2& of ATK x3</color> as Ignis Skill DMG.",
          shortDescription:
            'When casting the Main Skill, deals additional DMG and increases Magazine Capacity.',
          params: [
            'Ignis Infusion',
            '99%/113%/128%/173%/186%/200%/228%/240%/251%/275%/295%/315%/334%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Double Strike',
          icon: '13401_Potential_02',
          description:
            'Fiery Punches deal additional damage. \u000bStrike 1: <color=#0abec5>&Param1& of ATK</color> as Ignis Auto Attack DMG. \u000bStrike 2: <color=#0abec5>&Param2& of ATK</color> as Ignis Auto Attack DMG. \u000bStrike 3: <color=#0abec5>&Param3& of ATK</color> as Ignis Auto Attack DMG.',
          shortDescription: 'Each strike of Fiery Punches deals additional DMG.',
          params: [
            '72%/83%/93%/126%/136%/146%/166%/174%/183%/200%/215%/229%/243%',
            '72%/83%/93%/126%/136%/146%/166%/174%/183%/200%/215%/229%/243%',
            '144%/165%/187%/251%/271%/291%/332%/349%/366%/400%/429%/458%/486%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Kitty Punch',
          icon: '13401_Potential_03',
          description:
            'When &Param1& (Main Skill) hits a target, inflicts Paw Print for &Param3&s. \u000bWhen Fuyuka deals Auto Attack DMG to a target inflicted with Paw Print, deals an additional <color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG. \u000bThis effect can trigger ##Ignis Mark#1016#.',
          shortDescription:
            'When the Main Skill hits a target, inflicts Paw Print. \u000bWhen Fuyuka deals Auto Attack DMG to a target inflicted with Paw Print, deals additional damage.',
          params: [
            'Ignis Infusion',
            '46%/53%/60%/81%/87%/93%/106%/112%/117%/128%/138%/147%/156%',
            '15',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
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
          name: 'Multi-Shot',
          icon: '13401_Potential_04',
          description:
            "After Fuyuka casts &Param1& (Main Skill), her next Fiery Punches are enhanced into Magma Burst, consuming 3 ammo at once to deal <color=#0abec5>&Param2&</color> and <color=#0abec5>&Param3&</color> of ATK as AoE Ignis Auto Attack DMG.\u000bWhen Fuyuka's magazine is empty, increases her ATK SPD by <color=#0abec5>&Param4&</color>.",
          shortDescription:
            'After Fuyuka casts the Main Skill, her next Fiery Punches are enhanced into Magma Burst.',
          params: [
            'Ignis Infusion',
            '433%/497%/562%/757%/817%/878%/999%/1051%/1103%/1207%/1293%/1380%/1466%',
            '562%/647%/731%/984%/1063%/1141%/1299%/1366%/1434%/1568%/1681%/1793%/1906%',
            '50%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Combo Punch',
          icon: '13401_Potential_04',
          description:
            "After casting &Param1& (Main Skill), increases Fuyuka's &Param5& by &Param2& and her &Param6& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
          shortDescription:
            "After casting the Main Skill, increases Fuyuka's &Param5& and &Param6&.",
          params: [
            'Ignis Infusion',
            '20%',
            '39%/63%/86%/110%/133%/157%/180%/204%/227%',
            '8',
            'ATK SPD',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Thunder Punch',
          icon: '13401_Potential_02',
          description:
            'The third strike of Fiery Punches deals an additional <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Auto Attack DMG.',
          shortDescription: 'The third strike of Fiery Punches deals additional DMG.',
          params: ['108%/173%/238%/303%/368%/432%/497%/562%/627%'],
          rarity: 1,
          stype: 41,
          corner: 0,
          hints: {},
        },
        {
          name: 'All-Out Effort',
          icon: '13401_Potential_01',
          description:
            "When Fuyuka strikes with Fiery Punches, increases Fiery Punches' &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.\u000bAll stacks are removed when Fuyuka casts &Param5& (Main Skill).",
          shortDescription:
            "When Fuyuka strikes with Fiery Punches, increases Fiery Punches' &Param4&.",
          params: [
            '10%/16%/22%/28%/35%/41%/47%/53%/59%',
            '3',
            '8',
            'Auto Attack Damage',
            'Ignis Infusion',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Swirling Counterattack',
          icon: 'Common_Potential_11',
          description:
            'When Fuyuka squads up with Ignis Trekkers only, increases her &Param4& by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'When Fuyuka squads up with Ignis Trekkers only, increases her &Param4&.',
          params: ['12%/19%/26%/34%/41%/48%/55%/62%/70%', '-1', '8', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Blast Chase',
          icon: '13401_Potential_03',
          description:
            'Every time Fuyuka deals DMG to a target 4 times, she launches an additional attack on the same target, dealing <color=#ec6d21>&Param1& of ATK</color> as Ignis Skill DMG.\u000bAfter this effect triggers, it has a 1.5s cooldown before it can stack again.',
          shortDescription: "Fuyuka's fourth attack on the same target deals additional DMG.",
          params: ['189%/302%/416%/529%/642%/756%/869%/983%/1096%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Pyro Mark',
          icon: '13401_Potential_01',
          description:
            'Increases the &Param2& dealt by Fiery Punches and Magma Burst by <color=#ec6d21>&Param1&, and allows them to trigger ##Ignis Mark#1016#.',
          shortDescription:
            'Increases the Auto ATK DMG dealt by Fiery Punches and Magma Burst, and allows them to trigger ##Ignis Mark#1016#.',
          params: ['12%/19%/26%/34%/41%/48%/55%/62%/70%', 'Auto Attack Damage'],
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
          name: 'Finishing Blow',
          icon: 'Common_Potential_4',
          description:
            "Increases Fuyuka's &Param3& to targets at less than &Param1& HP by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Fuyuka's &Param3& to targets with low HP.",
          params: ['70%', '21%/34%/47%/60%/73%/85%/98%/111%/124%', 'Ignis DMG'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Inertial Punch',
          icon: '13401_Potential_04',
          description:
            'Every 8s, increases the &Param2& of the next Fiery Punches and Magma Burst by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'Every few seconds, increases the &Param2& of Fiery Punches and Magma Burst.',
          params: ['50%/80%/110%/140%/171%/201%/231%/261%/291%', 'Auto Attack Damage'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Bold Challenge',
          icon: 'Common_Potential_13',
          description:
            'When Fuyuka lands a Crit Hit on an elite or higher-tier target, increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription:
            'When Fuyuka lands a Crit Hit on an elite or higher-tier target, increases &Param4&.',
          params: ['3%/5%/6%/8%/10%/11%/13%/15%/17%', '8', '5', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Blazing Heart',
          icon: '13401_Potential_41',
          description:
            'When &Param1& triggers an ##Ignis Mark#1016#, increases this Ultimate DMG by <color=#ec6d21>&Param2&</color>, up to &Param4& stacks.',
          shortDescription:
            'When the Ultimate triggers an ##Ignis Mark#1016#, increases this Ultimate DMG.',
          params: ['Blaze Unsealed', '5%/7%/10%/13%/16%/19%/21%/24%/27%', '10', '5', 'ATK'],
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
          name: 'Ironfist Blow',
          icon: '13401_Potential_41',
          description:
            "&Param1& (Ultimate) delivers 4 additional punches. Also increases Fuyuka's &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "The Ultimate delivers more punches. Also increases Fuyuka's &Param3&.",
          params: ['Blaze Unsealed', '70%/112%/153%/195%/237%/279%/321%/362%/404%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Peak Performance',
          icon: '13401_Potential_41',
          description:
            'When Fuyuka casts &Param1& (Ultimate), she gains &Param2& stacks of buff, each increasing her &Param4& by <color=#ec6d21>&Param3&</color>, and then removes 1 stack of the buff per second.',
          shortDescription:
            "When casting the Ultimate, increases Fuyuka's &Param4&. This buff decays over time.",
          params: [
            'Blaze Unsealed',
            '6',
            '50%/80%/110%/140%/170%/200%/230%/260%/290%',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Sky Crusher',
          icon: '13401_Potential_21',
          description:
            '&Param1& (Support Skill) now delivers a single massive blow, dealing <color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG to nearby targets and stunning them for <color=#0abec5>&Param3&</color>s. It also deals <color=#0abec5>&Param4& of ATK</color> as Ignis Skill DMG to targets in a large area.',
          shortDescription:
            'Combines the multiple strikes of the Support Skill into a single massive blow.',
          params: [
            'Eruption Punch',
            '502%/577%/652%/878%/948%/1019%/1159%/1219%/1280%/1400%/1500%/1601%/1701%',
            '3',
            '388%/446%/504%/679%/733%/787%/896%/942%/989%/1082%/1159%/1237%/1315%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Lightning Split',
          icon: '13401_Potential_22',
          description:
            'When &Param1& (Support Skill) ends, Fuyuka strikes the nearby targets one more time, dealing <color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG.',
          shortDescription:
            'When the Support Skill ends, Fuyuka deals additional DMG to nearby targets.',
          params: [
            'Eruption Punch',
            '353%/406%/459%/618%/668%/717%/816%/859%/901%/986%/1057%/1127%/1198%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Meteor Strike',
          icon: '13401_Potential_23',
          description:
            "Increases the DMG of &Param1& (Support Skill) by <color=#0abec5>&Param2&</color> and its Attack Range by <color=#0abec5>20%</color>. Also increases the shockwave's duration by <color=#0abec5>50%</color>.",
          shortDescription:
            'Increases the DMG of the Support Skill. Also increases the its Attack Range and duration.',
          params: ['Eruption Punch', '5%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Fearless',
          icon: '13401_Potential_24',
          description:
            'While &Param1& (Support Skill) is active, increases the &Param3& by <color=#0abec5>&Param2&</color> every 0.5s.',
          shortDescription: "Increases the Support Skill's &Param3& over time.",
          params: ['Eruption Punch', '4%', 'Ignis DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Frenzied Support',
          icon: '13401_Potential_21',
          description:
            "When casting &Param1& (Support Skill), increases Fuyuka's &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Support Skill, increases Fuyuka's &Param4&.",
          params: ['Eruption Punch', '11%/17%/24%/30%/37%/43%/50%/56%/63%', '3', 'Ignis DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Shock Raid',
          icon: '13401_Potential_21',
          description:
            'When Fuyuka casts &Param1& (Support Skill), she charges at the target, dealing an additional <color=#ec6d21>&Param2& of ATK</color> as Ignis Skill DMG.',
          shortDescription:
            'When Fuyuka casts the Support Skill, she charges at the target, dealing additional DMG.',
          params: ['Eruption Punch', '229%/366%/503%/640%/778%/915%/1052%/1189%/1326%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Momentum Primed',
          icon: '13401_Potential_22',
          description:
            'After Fuyuka casts her &Param1& (Support Skill) or &Param5& (Ultimate) and leaves the battlefield, increases the &Param4& of the next &Param1& (Support Skill) by <color=#ec6d21>&Param2&</color> every second, up to &Param3& stacks.\u000bResets after casting the Support Skill.',
          shortDescription:
            'When Fuyuka is not present, for every few seconds, increases the &Param4& of the next Support Skill.',
          params: [
            'Eruption Punch',
            '1.2%/1.9%/2.6%/3.3%/4%/4.7%/5.4%/6.1%/6.8%',
            '9',
            'Skill DMG',
            'Blaze Unsealed',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Multi-Blow Impact',
          icon: '13401_Potential_23',
          description:
            'When &Param1& (Support Skill) deals damage, deals an additional <color=#ec6d21>&Param2& of ATK</color> as Ignis Skill DMG.',
          shortDescription: 'When the Support Skill deals DMG, deals additional DMG.',
          params: ['Eruption Punch', '8.7%/13.9%/19.1%/24.3%/29.5%/34.7%/39.9%/45.2%/50.4%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lightning Raid',
          icon: '13401_Potential_23',
          description:
            "Reduces &Param1& (Support Skill)'s Attack Interval by 40% and increases its &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Reduces the Support Skill's Attack Interval and increases its DMG.",
          params: ['Eruption Punch', '9%/15%/20%/26%/31%/37%/42%/48%/53%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Hero's Will",
          icon: 'Common_Potential_14',
          description:
            "Increases Fuyuka's &Param2& by <color=#ec6d21>&Param1&</color> against elite or higher-tier targets.",
          shortDescription: "Increases Fuyuka's &Param2& against elite or higher-tier targets.",
          params: ['14%/23%/32%/40%/49%/57%/66%/75%/83%', 'Ignis DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lethal Boost',
          icon: '13401_Potential_24',
          description:
            "While &Param1& (Support Skill) is active, increases Fuyuka's &Param4& by <color=#ec6d21>&Param2&</color> every sec, stacking up to &Param3& times.",
          shortDescription:
            "While the Support Skill is active, increases Fuyuka's &Param4& over time.",
          params: [
            'Eruption Punch',
            '3.8%/6.1%/8.4%/10.7%/13%/15.3%/17.6%/19.9%/22.2%',
            '4',
            'Ignis DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Prove of Strength',
          icon: 'Common_Potential_7',
          description:
            "When &Param1& (Support Skill) kills a target, increases Fuyuka's &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When the Support Skill kills a target, increases Fuyuka's &Param5&.",
          params: [
            'Eruption Punch',
            '3%/4.8%/6.6%/8.4%/10.2%/12%/13.8%/15.6%/17.4%',
            '10',
            '4',
            'ATK',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Companions' Power",
          icon: 'Common_Potential_15',
          description: "Increases Ignis Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Ignis Trekkers' &Param2&.",
          params: ['13%/20%/28%/35%/43%/51%/58%/66%/73%', 'Crit DMG'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  gerie: {
    id: 149,
    name: 'Gerie',
    element: 'Terra',
    buildOrder: {
      main: {
        build1: {
          description:
            'An Auto Attack build that increases Movement SPD, attack range, and DMG after casting a skill.',
          potentials: [
            'Beyond All Control',
            'Avalanche of Stone',
            'Lingering Hunger',
            'Delight in Ruin',
            'No Safeword',
          ],
        },
        build2: {
          description:
            'A skill build that increases the number of targets linked by skills and creates chain reactions with Trekkers.',
          potentials: [
            'Agony Cascade',
            'Endless Throes',
            'Piercing Sorrow',
            'Slanderous Strike',
            "Everyone's Invited",
          ],
        },
      },
      support: {
        build1: {
          description:
            'A burst build that increases the number of chain shovels and allows chain shovel dragging to deal additional DMG.',
          potentials: [
            'Deeper into Sin',
            'Curtain Call',
            'Hexacalamity: Hallowed Chains',
            "Hexacalamity: Grief's Toll",
            "Hexacalamity: Tyrant's March",
          ],
        },
        build2: {
          description:
            'A build that allows the Trekker to continuously generate shockwaves to deal DMG over time.',
          potentials: [
            'Sin-Bound Echo',
            'Earthshaker',
            'Hexacalamity: Famine',
            'Hexacalamity: Erosion',
            'Hexacalamity: Death',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Shared Sensation',
          'Shadow Law',
          'Hunt is On',
          "Emberwing's Proclamation",
          "Quadrifrons' Lore",
          "Samsara's Judgment",
        ],
      },
      supportGeneric: {
        potentials: [
          'Anima Resonance',
          "Twilight's Verdict",
          "Twilight's Hunt",
          "Emberwing's Proclamation",
          "Quadrifrons' Lore",
          "Samsara's Judgment",
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Beyond All Control',
          icon: '14901_Potential_01',
          description:
            'When Gerie is in Lethal status, increases her Movement SPD by <color=#0abec5>&Param3&</color> and her &Param1& by <color=#0abec5>&Param2&</color>. Lethal is no longer limited to the vicinity of Iron Cage.',
          shortDescription:
            'When Gerie is in Lethal status, increases her Movement SPD and &Param1&. Lethal status remains active even when Gerie is not at the vicinity of Iron Cage.',
          params: ['Auto Attack Damage', '47%', '15%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Avalanche of Stone',
          icon: '14901_Potential_02',
          description:
            'When Gerie is in Lethal status, increases the range of her Auto Attacks by <color=#0abec5>25%</color>, and she can trigger ##Terra Mark#1020#. When an Auto Attack deals DMG, it also deals <color=#0abec5>&Param1& of ATK</color> as Terra Auto Attack DMG.',
          shortDescription:
            'When Gerie is in Lethal status, increases the range of her Auto Attacks, and she can trigger ##Terra Mark#1020#. When an Auto Attack deals DMG, it also deals Terra Auto Attack DMG.',
          params: ['17.8%/20.5%/23.2%/31.2%/33.7%/36.2%/41.2%/43.3%/45.5%/49.7%/53.3%/56.9%/60.5%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description:
                "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Agony Cascade',
          icon: '14901_Potential_03',
          description:
            'The Iron Cage now links <color=#0abec5>4</color> targets and its &Param1& is increased by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'The Iron Cage can link more targets and its &Param1& is increased.',
          params: ['Skill DMG', '50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Endless Throes',
          icon: '14901_Potential_04',
          description:
            'When Gerie deals Auto Attack DMG to targets linked by the Iron Cage, deals an additional <color=#0abec5>&Param1& of ATK</color> as Terra Skill DMG to these targets. This effect can only be triggered once per second. Can trigger ##Terra Mark#1020#.',
          shortDescription:
            'When Gerie deals Auto Attack DMG to targets linked by the Iron Cage, these targets receive additional DMG.',
          params: ['67%/77%/87%/117%/127%/136%/155%/163%/171%/187%/201%/214%/227%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description:
                "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Delight in Ruin',
          icon: '14901_Potential_02',
          description:
            'When Gerie deals DMG with an Auto Attack, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Gerie deals DMG with an Auto Attack, increases her &Param1&.',
          params: ['ATK', '2%/3%/4%/6%/7%/8%/9%/10%/12%', '8', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'No Safeword',
          icon: '14901_Potential_02',
          description:
            "Increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bIncreases her Auto Attack DMG to targets with ##Broken Resilience#1006# by <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "Increases Gerie's &Param1&.\u000bIncreases her Auto Attack DMG to targets with ##Broken Resilience#1006#.",
          params: [
            'Auto Attack Damage',
            '18%/29%/40%/50%/61%/72%/83%/94%/104%',
            'Auto Attack Damage',
            '36%/58%/79%/100%/120%/140%/170%/190%/210%',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1006: {
              id: 1006,
              name: 'Resilience Break',
              description: 'When Resilience decreases to 0, Superarmor effect is removed',
              params: [],
            },
          },
        },
        {
          name: 'Lingering Hunger',
          icon: '14901_Potential_01',
          description:
            "Increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bIf Gerie is in Lethal status when the Iron Cage disappears, the status lasts 4s longer.",
          shortDescription:
            "Increases Gerie's &Param1&.\u000bIf Gerie is in Lethal status when the Iron Cage disappears, the status lasts 4s longer.",
          params: ['Auto Attack Damage', '27%/43%/59%/75%/91%/107%/123%/139%/155%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Slanderous Strike',
          icon: '14901_Potential_03',
          description:
            "Reduces the Movement SPD of targets linked by the Iron Cage by &Param2&. Increases Gerie's DMG to slowed targets by <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "Reduces the &Param1& of targets linked by the Iron Cage. \u000bIncreases Gerie's DMG to slowed targets.",
          params: ['Movement SPD', '-50%', 'Terra DMG', '11%/17%/24%/30%/36%/43%/49%/56%/62%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Everyone's Invited",
          icon: '14901_Potential_04',
          description:
            "Increases Iron Cage's DMG by <color=#ec6d21>&Param1&</color> and its range by 100%.",
          shortDescription: 'Increases the DMG and range of Iron Cage.',
          params: ['21%/34%/47%/60%/73%/85%/98%/111%/124%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Hunt is On',
          icon: 'Common_Potential_2',
          description:
            'Gerie can dodge one more time.\u000bAfter dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'Gerie can dodge one more time.\u000bIncreases her &Param1& after dodging.',
          params: ['ATK', '9%/15%/21%/26%/32%/37%/43%/49%/54%', '8'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Piercing Sorrow',
          icon: '14901_Potential_04',
          description:
            "Increases Iron Cage's DMG by <color=#ec6d21>&Param1&</color> and its duration by 50%.",
          shortDescription: 'Increases the DMG and duration of Iron Cage.',
          params: ['18%/28%/39%/49%/60%/71%/81%/92%/102%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shared Sensation',
          icon: 'Common_Potential_15',
          description:
            "For each Terra Trekker on the squad, increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "For each Terra Trekker on the squad, increases Gerie's &Param1&.",
          params: ['ATK', '5%/8%/11%/14%/17%/20%/23%/26%/29%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadow Law',
          icon: 'Common_Potential_10',
          description:
            "When a squadmate casts a Support Skill, increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When a squadmate casts a Support Skill, increases Gerie's &Param1&.",
          params: ['Skill DMG', '9%/14%/19%/24%/30%/35%/40%/45%/50%', '10', '2'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: "Emberwing's Proclamation",
          icon: '14901_Potential_41',
          description:
            "Increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>. \u000bDivine Retribution of Evil now conjures up 2 additional gigantic chained spades, dealing <color=#ec6d21>&Param3& of ATK</color> as Terra Ultimate DMG.",
          shortDescription:
            "Increases Gerie's &Param1&. \u000bThe Ultimate now conjures up gigantic chained spades to deal DMG.",
          params: [
            'Ultimate DMG',
            '5%/9%/12%/15%/18%/21%/25%/28%/31%',
            '116%/186%/256%/326%/395%/465%/535%/605%/675%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Quadrifrons' Lore",
          icon: '14901_Potential_41',
          description:
            "Increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>. When a friendly unit triggers ##Terra Mark#1020# on a target, additionally increases Gerie's Ultimate DMG by <color=#ec6d21>&Param3&</color> to the same target for &Param4&s.",
          shortDescription:
            "Increases Gerie's &Param1&. When a friendly unit triggers ##Terra Mark#1020# on a target, additionally increases Gerie's Ultimate DMG to the same target.",
          params: [
            'Ultimate DMG',
            '17%/28%/38%/49%/59%/69%/80%/90%/101%',
            '24%/39%/54%/68%/83%/97%/112%/127%/141%',
            '15',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description:
                "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: "Samsara's Judgment",
          icon: '14901_Potential_41',
          description:
            "When casting Divine Retribution of Evil (Ultimate), increases Gerie's DMG to nearby targets by <color=#ec6d21>&Param2&</color> for &Param2&s. Also inflicts ##Fear#4501# on normal targets for 2s.",
          shortDescription:
            "When Gerie casts the Ultimate, increases her nearby targets' DMG taken. Normal targets will be inflicted with ##Fear#4501# for 2s.",
          params: ['29%/47%/65%/82%/100%/117%/135%/153%/170%', '15'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4501: {
              id: 4501,
              name: 'Fear',
              description: 'The target flees and cannot attack.',
              params: [],
            },
          },
        },
      ],
      supportCore: [
        {
          name: 'Deeper into Sin',
          icon: '14901_Potential_21',
          description:
            "Increases the damage of Immediate Execution (Support Skill)'s chained spades by <color=#0abec5>&Param2&</color>. When casting Immediate Execution, conjures up 2 additional chained spades, dealing <color=#0abec5>&Param3& of ATK</color> as Terra Skill DMG.",
          shortDescription:
            "Increases the DMG of the Support Skill's chained spades. The Support Skill now conjures up more chained spades to deal DMG.",
          params: [
            'Skill DMG',
            '11%',
            '47%/54%/61%/82%/89%/96%/109%/114%/120%/131%/141%/150%/160%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Curtain Call',
          icon: '14901_Potential_22',
          description:
            "Increases the damage of Immediate Execution (Support Skill)'s chained spades by <color=#0abec5>&Param2&</color>. When the chained spades are withdrawn, each spade deals <color=#0abec5>&Param3& of ATK</color> as Terra Skill DMG. Can trigger ##Terra Mark#1020#.",
          shortDescription:
            "Increases the DMG of the Support Skill's chained spades. When the chained spades are withdrawn, each spade deals DMG.",
          params: [
            'Skill DMG',
            '11%',
            '15.7%/18%/20.4%/27.4%/29.6%/31.8%/36.2%/38.1%/40%/43.8%/46.9%/50%/53.2%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description:
                "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Sin-Bound Echo',
          icon: '14901_Potential_23',
          description:
            "When casting Immediate Execution (Support Skill), Gerie remains on the battlefield for 6s and creates seismic waves at her and the chained spades' location once per second, each seismic wave dealing <color=#0abec5>&Param1& of ATK</color> as Terra Skill DMG.",
          shortDescription:
            "When casting the Support Skill, Gerie remains on the battlefield for a period of time and creates seismic waves at her and the chained spades' location every second to deal DMG.",
          params: ['11%/12.6%/14.3%/19.2%/20.8%/22.3%/25.4%/26.7%/28%/30.7%/32.9%/35.1%/37.3%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Earthshaker',
          icon: '14901_Potential_24',
          description:
            "Increases the DMG of Immediate Execution (Support Skill)'s seismic waves by <color=#0abec5>&Param2&</color> and their Attack Range by <color=#0abec5>40%</color>.",
          shortDescription:
            "Increases the DMG and Attack Range of the Support Skill's seismic waves.",
          params: ['Skill DMG', '32%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: "Hexacalamity: Grief's Toll",
          icon: '14901_Potential_22',
          description:
            "When casting Immediate Execution (Support Skill), increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Support Skill, increases Gerie's &Param1&.",
          params: ['Skill DMG', '17%/27%/38%/48%/58%/69%/79%/89%/100%', '3'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Hexacalamity: Tyrant's March",
          icon: '14901_Potential_21',
          description:
            "Increases the DMG of Immediate Execution (Support Skill)'s chained spades to targets at less than 70% HP by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "Increases the DMG of the Support Skill's chained spades to targets at less than 70% HP.",
          params: ['Skill DMG', '16%/26%/35%/45%/55%/64%/74%/83%/93%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Hexacalamity: Hallowed Chains',
          icon: '14901_Potential_21',
          description:
            'When the chain shovel of Immediate Execution (Support Skill) hits a target, it deals <color=#ec6d21>&Param1& of ATK</color> as Terra Skill DMG.',
          shortDescription:
            "When the Support Skill's chained spade hits a target, deals additional DMG.",
          params: ['33%/53%/72%/92%/112%/132%/152%/171%/191%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Hexacalamity: Erosion',
          icon: '14901_Potential_23',
          description:
            'When casting Immediate Execution (Support Skill), increases Skill DMG by <color=#ec6d21>&Param1&</color> every second. Resets after the Skill ends.',
          shortDescription:
            'When casting the Support Skill, increases Skill DMG every second. Resets after the Skill ends.',
          params: ['3%/5%/6%/8%/10%/11%/13%/15%/16%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Hexacalamity: Famine',
          icon: '14901_Potential_24',
          description:
            'When the seismic waves generated by Immediate Execution (Support Skill) end, they deal an additional <color=#ec6d21>&Param1& of ATK</color> as AoE Terra Skill DMG.',
          shortDescription: "When the Support Skill's seismic waves stop, deals DMG again.",
          params: ['7.6%/12.2%/16.8%/21.3%/25.9%/30.5%/35%/39.6%/44.2%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Twilight's Verdict",
          icon: 'Common_Potential_Earth_1',
          description:
            'When Gerie triggers a ##Terra Mark#1020#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When Gerie triggers a ##Terra Mark#1020#, increases her &Param1&.',
          params: ['Terra DMG', '10%/16%/22%/28%/34%/40%/46%/52%/58%', '8', '4'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description:
                "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Hexacalamity: Death',
          icon: '14901_Potential_24',
          description:
            'For the seismic waves generated by Immediate Execution, (Support Skill) increases their DMG by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription:
            "Increases the DMG and Resilience Break Efficiency of the Support Skill's seismic waves.",
          params: [
            'Skill DMG',
            '8%/13%/17%/22%/27%/31%/36%/41%/46%',
            'Resilience Break Efficiency',
            '21%/29%/36%/43%/50%/57%/64%/71%/78%',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: "Twilight's Hunt",
          icon: 'Common_Potential_11',
          description:
            "When a squadmate casts a Skill or Ultimate, increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "When a squadmate casts a skill or Ultimate, increases Gerie's &Param1&.",
          params: ['ATK', '10%/16%/22%/28%/34%/40%/46%/52%/58%', '8', '2'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Anima Resonance',
          icon: 'Common_Potential_15',
          description:
            "For each Terra Trekker on the squad, increases Gerie's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "For each Terra Trekker on the squad, increases Gerie's &Param1&.",
          params: ['ATK', '5%/8%/11%/14%/17%/20%/23%/26%/29%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  iris: {
    id: 111,
    name: 'Iris',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          description: 'A build that enhances skills to summon ice walls that freeze enemies.',
          potentials: [
            'Vector: Solidifying',
            'Vector: Shatter',
            'Situational Judgment',
            'Oops I Did It Again',
            'Windfall',
          ],
        },
        build2: {
          description:
            'A build that empowers the second phase of skills to deal massive DMG over time.',
          potentials: [
            'Vector: Entice',
            'Vector: Chainfall',
            'Precise Settlement',
            'Secondary Frostbite',
            'Cold Snap',
          ],
        },
      },
      support: {
        build1: {
          description: 'A build that summons ice pillars to draw enemies and deal DMG over time.',
          potentials: [
            'Blizzard: Spread',
            'Blizzard: Vortex',
            'Forced Liquidation',
            'Raging Blizzard',
            'Prolonged Winter',
          ],
        },
        build2: {
          description:
            'A build that summons ice pillars, dealing DMG upon their creation and shattering.',
          potentials: [
            'Blizzard: Stack',
            'Blizzard: Impact',
            'Distressed Asset',
            'Bundle Sale',
            'Sneaky Fisher',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Keep Strangers at Bay',
          'Lady Essence',
          'Turbulent Layers',
          'Icicle Rain',
          'Gleaming Snow',
          'Frozen Shield',
        ],
      },
      supportGeneric: {
        potentials: [
          'Positive Signal',
          'Functional Amp',
          'Torrential Irrigation',
          'Icicle Rain',
          'Gleaming Snow',
          'Frozen Shield',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Vector: Solidifying',
          icon: '11101_Potential_01',
          description:
            'When Iris hits a target with an Auto Attack, increases the DMG of the next Main Skill by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bAt &Param2& stacks, Iris will cast &Param4& (Main Skill), dealing <color=#0abec5>&Param3& of ATK</color> as AoE Aqua Skill DMG.',
          shortDescription:
            'When Iris hits a target with an Auto Attack, increases the DMG of the next Main Skill. Once fully stacked, enhances the next Main Skill.',
          params: [
            '1%',
            '20',
            '147%/161%/176%/220%/235%/249%/279%/293%/308%/323%/337%/352%/367%',
            'Wall of Frost',
            'Frozen Path',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Vector: Shatter',
          icon: '11101_Potential_02',
          description:
            'When &Param5& (Main Skill) hits a target, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Skill DMG. \u000bWhen &Param4& hits a target, deals an additional <color=#0abec5>&Param2& of ATK</color> as AoE Aqua Skill DMG and inflicts ##Frozen#1002# to the target for &Param3&s. \u000bThis effect can only be triggered once every 12s.',
          shortDescription: 'When the Main Skill hits a target, deals additional AoE DMG.',
          params: [
            '122%/134%/147%/183%/195%/208%/232%/244%/256%/269%/281%/293%/305%',
            '173%/190%/208%/259%/277%/294%/329%/346%/363%/381%/398%/415%/432%',
            '3',
            'Wall of Frost',
            'Frozen Path',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
          },
        },
        {
          name: 'Vector: Entice',
          icon: '11101_Potential_03',
          description:
            'When Iris casts &Param4& (Main Skill), there is a <color=#0abec5>&Param1&</color> chance to activate the second phase strike, &Param3&, launching multiple ice arrows, dealing <color=#0abec5>&Param2& of ATK</color> as Aqua Skill DMG, lasting for 5s.',
          shortDescription:
            'Casting the Main Skill has a chance to activate Frostflare, dealing damage over time.',
          params: [
            '50%',
            '9.5%/10.4%/11.4%/14.2%/15.2%/16.1%/18%/18.9%/19.9%/20.8%/21.8%/22.7%/23.7%',
            'Frostflare',
            'Frozen Path',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Vector: Chainfall',
          icon: '11101_Potential_04',
          description:
            'When &Param2& (Main Skill) triggers an ##Aqua Mark: Torrent#2008#, marks the target and deals an additional <color=#0abec5>&Param1& of ATK</color> as Aqua Skill DMG every 0.5s for a total of 2s.',
          shortDescription:
            'When the Main Skill triggers a Mark, marks the target and deals additional DMG over time.',
          params: [
            '11.8%/13%/14.2%/17.7%/18.9%/20.1%/22.4%/23.6%/24.8%/26%/27.1%/28.3%/29.5%',
            'Frozen Path',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Oops I Did It Again',
          icon: '11101_Potential_01',
          description:
            "Increases Frost Arrows' DMG by <color=#ec6d21>&Param1&</color>, allowing them to pierce through targets.",
          shortDescription: "Increases Frost Arrows' DMG, allowing them to pierce through targets.",
          params: ['40%/64%/87%/111%/135%/159%/183%/206%/230%', 'Frozen Path'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Windfall',
          icon: '11101_Potential_02',
          description:
            "Doubles the number of Frost Arrows fired in the third strike of Iris's Auto Attack and increases their DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription: 'Fires more Frost Arrows and increases their DMG.',
          params: ['93%/149%/205%/261%/317%/373%/429%/484%/540%', 'Frozen Path'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Situational Judgment',
          icon: '11101_Potential_02',
          description:
            "Every &Param1&s, increases the DMG of Iris's next Main Skill by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Every few seconds, increases the DMG of Iris's next Main Skill.",
          params: ['12', '23%/37%/50%/64%/78%/91%/105%/119%/133%', 'Frozen Path'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Precise Settlement',
          icon: '11101_Potential_04',
          description:
            "While Iris's Main Skill is active, grants Super Armor and increases her ATK by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "While Iris's Main Skill is active, increases her ATK and grants Super Armor.",
          params: ['17%/27%/38%/48%/58%/69%/79%/89%/100%', 'Frozen Path'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Cold Snap',
          icon: '11101_Potential_04',
          description:
            "When Iris changes a target's status from ##Chill#1027# to ##Frozen#1002#, reduces &Param4& (Main Skill)'s Cooldown by &Param1&s. Also increases &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s. This effect can only be triggered once every 12s.",
          shortDescription:
            "When Iris changes a target's status from ##Chill#1027# to ##Frozen#1002#, increases &Param5& and reduces Main Skill Cooldown.",
          params: [
            '1',
            '11%/14%/18%/21%/25%/28%/32%/35%/39%',
            '6',
            'Frozen Path',
            'Skill Crit Rate',
            'Frozen Path',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
        {
          name: 'Keep Strangers at Bay',
          icon: 'Common_Potential_9',
          description:
            'When Iris is hit by a melee strike, deals <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG and inflicts ##Frozen#1002# on nearby targets for &Param2&s. This effect can only be triggered once every &Param3&s.',
          shortDescription:
            'When Iris is hit by a melee strike, deals DMG and inflicts ##Frozen#1002# on nearby targets.',
          params: ['92%/123%/154%/184%/215%/246%/276%/307%/338%', '3', '12', 'Frozen Path'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
          },
        },
        {
          name: 'Turbulent Layers',
          icon: 'Common_Potential_Water_1',
          description:
            "&Param5& (Ultimate) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param1& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#. Triggering this effect will increase Iris' ATK by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "The Ultimate can trigger ##Aqua Mark: Torrent#2022# and inflict ##Chill#1027#. Triggering this effect will increase Iris' ATK.",
          params: [
            '21.9%/26.3%/30.7%/35.1%/39.4%/43.8%/48.2%/52.6%/57%',
            '5%/7%/10%/13%/16%/19%/21%/24%/27%',
            '20',
            '6',
            'Arctic Vortex',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
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
            2022: {
              id: 2022,
              name: 'Stream',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Secondary Frostbite',
          icon: '11101_Potential_03',
          description:
            "When Iris's Main Skill lands a Crit Hit, deals an additional <color=#ec6d21>&Param1& of ATK</color> as Aqua Skill DMG.",
          shortDescription: "When Iris's Main Skill lands a Crit Hit, deals additional DMG.",
          params: ['4.7%/6.3%/7.8%/9.4%/11%/12.6%/14.1%/15.7%/17.3%', 'Frozen Path'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lady Essence',
          icon: 'Common_Potential_9',
          description:
            'When Iris attacks with her school bag, increases DMG by <color=#ec6d21>&Param1&</color>, with a &Param2& chance to stun the target for &Param3&s.',
          shortDescription:
            'When Iris attacks with her school bag, increases DMG, with a chance to stun the target.',
          params: ['60%/95%/131%/167%/202%/238%/274%/309%/345%', '25%', '2', 'Frozen Path'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Icicle Rain',
          icon: '11101_Potential_41',
          description:
            'While &Param2& is active, deals an additional <color=#ec6d21>&Param1& of ATK</color> as Aqua Ultimate DMG per second to a random target within range.',
          shortDescription:
            'While the Ultimate is active, deals additional DMG per second to random targets within range.',
          params: ['148%/197%/247%/296%/345%/395%/444%/493%/542%', 'Arctic Vortex'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Gleaming Snow',
          icon: '11101_Potential_41',
          description:
            'While &Param3& (Ultimate) is active, each time a target is killed, increases &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'While the Ultimate is active, each time a target is killed, increases &Param2&.',
          params: ['11%/17%/24%/30%/36%/43%/49%/56%/62%', 'Ultimate DMG', 'Arctic Vortex'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Frozen Shield',
          icon: '11101_Potential_41',
          description:
            "Increases Iris's &Param2& and that of her squadmates by <color=#ec6d21>&Param1&</color> if they are within her Ultimate's Attack Range.",
          shortDescription:
            "Increases Iris's &Param2& and that of her squadmates if they are within her Ultimate's Attack Range.",
          params: ['23%/37%/51%/65%/79%/93%/107%/121%/135%', 'ATK', 'Arctic Vortex'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Blizzard: Spread',
          icon: '11101_Potential_21',
          description:
            "Increases Glacier Array's Attack Range by <color=#0abec5>50%</color> and its DMG by <color=#0abec5>&Param1&</color>.",
          shortDescription: "Increases Glacier Array's Attack Range and DMG.",
          params: ['15%', 'Iceberg Surge'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Blizzard: Vortex',
          icon: '11101_Potential_22',
          description:
            'Glacier Array can <color=#0abec5>constantly</color> pull in targets within range, also increasing its DMG by <color=#0abec5>&Param1&</color>.',
          shortDescription: 'Glacier Array can pull in targets, increasing its DMG.',
          params: ['20%', 'Iceberg Surge'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Blizzard: Stack',
          icon: '11101_Potential_23',
          description:
            'When Glacier Array is created, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Skill DMG and stuns the target for &Param2&s.',
          shortDescription:
            'When Glacier Array is created, deals additional DMG and stuns the target.',
          params: [
            '184%/202%/221%/276%/294%/313%/349%/368%/386%/405%/423%/441%/460%',
            '2',
            'Iceberg Surge',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Blizzard: Impact',
          icon: '11101_Potential_24',
          description:
            'When Glacier Array vanishes, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Aqua Skill DMG and sends the targets back flying.',
          shortDescription:
            'When Glacier Array vanishes, deals additional DMG and sends the targets back flying.',
          params: [
            '189%/208%/227%/284%/303%/322%/359%/378%/397%/416%/435%/454%/473%',
            'Iceberg Surge',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Raging Blizzard',
          icon: '11101_Potential_21',
          description:
            "Increases Glacier Array's DMG by <color=#ec6d21>&Param1&</color>, and reduces its Attack Interval by 50%.",
          shortDescription: "Increases Glacier Array's DMG and reduces its Attack Interval.",
          params: ['8%/13%/18%/23%/28%/33%/38%/43%/48%', 'Iceberg Surge'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Prolonged Winter',
          icon: '11101_Potential_22',
          description:
            'Increases the duration of Glacier Array by 50% and its DMG by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the duration and DMG of Glacier Array.',
          params: ['6%/9%/12%/16%/19%/23%/26%/29%/33%', 'Iceberg Surge'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Forced Liquidation',
          icon: '11101_Potential_21',
          description:
            "When &Param5& (Support Skill) hits a target with ##Chill#1027#, increases the main Trekker's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription:
            "When the Support Skill hits a target with ##Chill#1027#, increases the main Trekker's &Param4&.",
          params: ['1%/1.6%/2.2%/2.8%/3.4%/4%/4.6%/5.2%/5.8%', '15', '18', 'ATK', 'Iceberg Surge'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
        {
          name: 'Bundle Sale',
          icon: '11101_Potential_23',
          description:
            'When casting &Param3& (Support Skill), if there are less than 3 targets within the impact range, increases the Aqua DMG taken by the targets by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription:
            'When casting the Support Skill, if there are few targets within the impact range, increases the Aqua DMG taken by the targets.',
          params: ['16%/26%/36%/46%/56%/65%/75%/85%/95%', '6', 'Iceberg Surge'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Sneaky Fisher',
          icon: '11101_Potential_24',
          description:
            'While &Param2& (Support Skill) is active, increases the ATK of all other friendly units within its Attack Range by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'While the Support Skill is active, increases the ATK of all other friendly units within its Attack Range.',
          params: ['20%/32%/43%/55%/67%/79%/91%/102%/114%', 'Iceberg Surge'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Functional Amp',
          icon: 'Common_Potential_11',
          description: "Increases Iris' Skill DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Iris' Skill DMG.",
          params: ['10%/15%/21%/27%/32%/38%/44%/49%/55%', 'Iceberg Surge'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Torrential Irrigation',
          icon: 'Common_Potential_Water_1',
          description:
            "Increases &Param2& (Ultimate)'s DMG by <color=#ec6d21>&Param1&</color> and inflicts ##Aqua Mark: Torrent#2008#.",
          shortDescription: 'Increases Ultimate DMG and inflicts ##Aqua Mark: Torrent#2008#.',
          params: ['29%/46%/63%/80%/97%/115%/132%/149%/166%', 'Arctic Vortex'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Distressed Asset',
          icon: '11101_Potential_24',
          description:
            'While &Param3& (Support Skill) is active, each time a target within its Attack Range is killed, deals an additional <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG and inflicts ##Frozen#1002# on nearby targets for 3s.',
          shortDescription:
            'While the Support Skill is active, each time a target within its Attack Range is killed, deals additional AoE DMG and inflicts ##Frozen#1002# to nearby targets.',
          params: ['63%/84%/105%/126%/147%/168%/189%/210%/231%', 'Iceberg Surge', 'Iceberg Surge'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
          },
        },
        {
          name: 'Positive Signal',
          icon: 'Common_Potential_15',
          description:
            "When casting &Param5& (Support Skill) for the first time, increases the squad's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When casting the Support Skill for the first time, increases the squad's &Param4&.",
          params: [
            '28%/45%/62%/79%/96%/113%/130%/147%/164%',
            '10',
            'Iceberg Surge',
            'ATK',
            'Iceberg Surge',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  jinglin: {
    id: 117,
    name: 'Jinglin',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          description: 'A build that progressively enhances single-target thunderbolt DMG.',
          potentials: [
            'Energy Storage: Bind',
            'Energy Storage: Knot',
            'Integrated Energy Storage',
            'Charge Cycle',
            'Discharge Test',
          ],
        },
        build2: {
          description: 'A build that casts chain lightning after unleashing a thunderbolt.',
          potentials: [
            'Energy Storage: Channel',
            'Energy Storage: Ascend',
            'Recycle and Reuse',
            'Heat Management',
            'Power Distribution',
          ],
        },
      },
      support: {
        build1: {
          description: 'A build that summons a Thunder Domain to deal AoE high-frequency DMG.',
          potentials: [
            'Thunderbolt: Dragon',
            'Thunderbolt: Bamboo',
            'Self-drawn Concealed Hand',
            'Sequential Triplets',
            'Win upon a Kong',
          ],
        },
        build2: {
          description:
            'A build that summons a Thunder Domain to control enemies and deal burst DMG.',
          potentials: [
            'Thunderbolt: Character',
            'Thunderbolt: Circle',
            'Complete Sequence',
            'Triple Chows',
            'No Ones No Nines',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Conductor Conversion',
          'Leakage Protection',
          'Neutral Left, Live Right, Ground Below',
          'Heavenly Kirin',
          'Lord of Beasts',
          'Auspicious Spirit',
        ],
      },
      supportGeneric: {
        potentials: [
          'Social Butterfly',
          'Effortless Mastery',
          'Little Manager',
          'Heavenly Kirin',
          'Lord of Beasts',
          'Auspicious Spirit',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Energy Storage: Bind',
          icon: '11701_Potential_01',
          description:
            'Reduces the Cooldown of &Param1& (Main Skill) by <color=#0abec5>&Param2&</color>s. \u000bCasting the Main Skill will automatically launch continuous attacks on the target until available charges run out.',
          shortDescription:
            'Reduces Main Skill Cooldown. \u000bAutomatically launch continuous attacks until available charges run out.',
          params: ['Thunder Strike', '-2'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Energy Storage: Knot',
          icon: '11701_Potential_02',
          description:
            'After casting &Param1& (Main Skill), increases the DMG of the next Skill by <color=#0abec5>&Param2&</color>, up to 3 stacks. \u000bAt 3 stacks, casting the Main Skill again will remove the buff.',
          shortDescription: 'After casting the Main Skill, increases the DMG of the next Skill.',
          params: [
            'Thunder Strike',
            '32%',
            '92%/101%/110%/137%/146%/156%/174%/183%/192%/210%/220%/229%/238%',
            '92%/101%/110%/137%/146%/156%/174%/183%/192%/210%/220%/229%/238%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Energy Storage: Channel',
          icon: '11701_Potential_03',
          description:
            'When &Param1& (Main Skill) deals damage to a target with ##Lux Mark: Radiance#2016#, summons Chain Lightning, dealing <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG, bouncing up to <color=#0abec5>5</color> stacks.',
          shortDescription:
            'When the Main Skill deals DMG to a target with ##Lux Mark: Radiance#2016#, summons Chain Lightning.',
          params: [
            'Thunder Strike',
            '11.4%/12.5%/13.6%/17%/18.2%/19.3%/21.6%/22.7%/23.9%/26.1%/27.3%/28.4%/29.6%',
            '34%/37%/41%/51%/55%/58%/65%/68%/72%/78%/82%/85%/89%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Energy Storage: Ascend',
          icon: '11701_Potential_04',
          description:
            'After casting &Param1& (Main Skill), deals <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG to nearby targets per second for a total of 6s.',
          shortDescription: 'After casting the Main Skill, deals additional DMG per second.',
          params: [
            'Thunder Strike',
            '19.5%/21.4%/23.4%/29.2%/31.1%/33.1%/37%/38.9%/40.9%/44.8%/46.7%/48.7%/50.6%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Charge Cycle',
          icon: '11701_Potential_01',
          description:
            'When &Param1& (Main Skill) deals damage to a target with ##Lux Mark: Radiance#2016#, deals an additional <color=#ec6d21>&Param2& of ATK</color> as Lux Skill DMG. This effect can only be triggered once every 3s.',
          shortDescription:
            'When the Main Skill deals DMG to a target with ##Lux Mark: Radiance#2016#, deals additional DMG.',
          params: ['Thunder Strike', '31%/41%/51%/61%/72%/82%/92%/102%/112%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Discharge Test',
          icon: '11701_Potential_02',
          description:
            'When Jinglin deals DMG with an Auto Attack, increases DMG of her next &Param1& by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.',
          shortDescription:
            "When Jinglin deals DMG with an Auto Attack, increases her next Main Skill's DMG.",
          params: [
            'Thunder Strike',
            '1.8%/2.9%/4%/5.1%/6.2%/7.3%/8.4%/9.5%/10.6%',
            '12',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Integrated Energy Storage',
          icon: '11701_Potential_02',
          description:
            'When &Param1& (Main Skill) hits a target, increases the Skill DMG taken by the target by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When the Main Skill hits a target, increases the Skill DMG taken by the target.',
          params: [
            'Thunder Strike',
            '7%/11%/15%/19%/23%/27%/31%/36%/40%',
            '2',
            '5',
            'Skill DMG Taken',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Heat Management',
          icon: '11701_Potential_03',
          description:
            '&Param1& (Main Skill) will always Crit Hit against targets with ##Lux Mark: Radiance#2016#. Also increases Crit DMG by <color=#ec6d21>&Param2&</color>. This effect can only be triggered once every &Param3&s.',
          shortDescription:
            'The Main Skill will always Crit Hit against targets with ##Lux Mark: Radiance#2016# every few seconds. Also increases Crit DMG.',
          params: [
            'Thunder Strike',
            '90%/150%/200%/260%/310%/370%/420%/480%/530%',
            '8',
            'Crit DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Recycle and Reuse',
          icon: '11701_Potential_04',
          description:
            'When &Param1& (Main Skill) deals DMG to a target with ##Lux Mark: Radiance#2016#, increases &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When the Main Skill deals DMG to a target with ##Lux Mark: Radiance#2016#, increases &Param4&.',
          params: [
            'Thunder Strike',
            '77%/122%/168%/214%/260%/306%/352%/398%/444%',
            '8',
            'Auto Attack Damage',
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Power Distribution',
          icon: '11701_Potential_04',
          description:
            'When &Param1& (Main Skill) kills a target, increases &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When the Main Skill kills a target, increases &Param4&.',
          params: [
            'Thunder Strike',
            '72%/115%/158%/201%/244%/287%/330%/373%/416%',
            '4',
            'Auto Attack Damage',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Leakage Protection',
          icon: 'Common_Potential_Light_1',
          description:
            '&Param1& (Ultimate) can trigger ##Lux Mark: Radiance#2016#, dealing <color=#ec6d21>&Param2& of ATK</color> as Lux Mark DMG. \u000bWhen the mark is triggered, increases &Param6& by <color=#ec6d21>&Param3&</color> for &Param4&s, up to &Param5& stacks.',
          shortDescription:
            'The Ultimate can trigger ##Lux Mark: Radiance#2016#. When the mark is triggered, increases &Param6&.',
          params: [
            'Roar of the Qilin',
            '74%/88%/103%/118%/132%/147%/162%/177%/191%',
            '3.4%/5.4%/7.4%/9.4%/11.4%/13.4%/15.4%/17.4%/19.4%',
            '10',
            '5',
            'ATK',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Neutral Left, Live Right, Ground Below',
          icon: 'Common_Potential_9',
          description:
            'When taking Melee DMG, Jinglin knocks back targets and deals <color=#ec6d21>&Param2& of ATK</color> as Lux Skill DMG. This effect can only be triggered once every 6s.',
          shortDescription: 'When taking Melee DMG, Jinglin knocks back targets and deals DMG.',
          params: ['100', '54%/72%/90%/108%/126%/144%/162%/180%/197%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Conductor Conversion',
          icon: 'Common_Potential_11',
          description:
            'When Jinglin triggers ##Lux Mark: Radiance#2016#, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Jinglin triggers ##Lux Mark: Radiance#2016#, increases her &Param4&.',
          params: ['34%/54%/75%/95%/116%/136%/156%/177%/197%', '8', '3', 'Mark DMG'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
      ],
      common: [
        {
          name: 'Heavenly Kirin',
          icon: '11701_Potential_41',
          description:
            "When the Lightning Qilin is on the field, Jinglin's &Param3& is increased by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "When the Lightning Qilin is on the field, Jinglin's &Param3& is increased.",
          params: ['Roar of the Qilin', '56%/90%/124%/158%/192%/225%/259%/293%/327%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lord of Beasts',
          icon: '11701_Potential_41',
          description:
            "Increases Lightning Qilin's DMG by <color=#ec6d21>&Param2&</color>, and reduces its Attack Interval by 50%.",
          shortDescription: "Increases Lightning Qilin's DMG and reduces its Attack Interval.",
          params: ['Roar of the Qilin', '25%/40%/55%/70%/84%/99%/114%/129%/144%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Auspicious Spirit',
          icon: '11701_Potential_41',
          description:
            'When the Lightning Qilin hits a target with ##Lux Mark: Radiance#2016#, increases &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When the Lightning Qilin hits a target with ##Lux Mark: Radiance#2016#, increases &Param5&.',
          params: [
            'Roar of the Qilin',
            '1.7%/2.7%/3.7%/4.7%/5.7%/6.7%/7.7%/8.7%/9.7%',
            '10',
            '20',
            'ATK',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
      ],
      supportCore: [
        {
          name: 'Thunderbolt: Dragon',
          icon: '11701_Potential_21',
          description:
            "Increases Lightning Domain's Attack Range by <color=#0abec5>50%</color> and its DMG by <color=#0abec5>&Param2&</color>.",
          shortDescription: "Increases Lightning Domain's Attack Range and DMG.",
          params: ['Static Discharge', '6%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Thunderbolt: Bamboo',
          icon: '11701_Potential_22',
          description:
            "Increases Lightning Domain's DMG by <color=#0abec5>&Param2&</color>, and reduces its Attack Interval by <color=#0abec5>30%</color>.",
          shortDescription: "Increases Lightning Domain's DMG and reduces its Attack Interval.",
          params: ['Static Discharge', '5%', 'ATK'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Thunderbolt: Character',
          icon: '11701_Potential_23',
          description:
            'When targets enter or leave the Lightning Domain, <color=#0abec5>stuns</color> them for 1s, and increases the Lux DMG they take by <color=#0abec5>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When targets enter or leave the Lightning Domain, stuns them and increases the Lux DMG they take.',
          params: ['2', '8%', '8', 'Lux DMG Taken'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Thunderbolt: Circle',
          icon: '11701_Potential_24',
          description:
            'When the Lightning Domain emerges, deals an additional <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG, and continues to deal <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG every <color=#0abec5>3</color>s.',
          shortDescription: 'When the Lightning Domain emerges, deals additional DMG.',
          params: [
            'Static Discharge',
            '72%/79%/86%/108%/115%/122%/137%/144%/151%/165%/173%/180%/187%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Sequential Triplets',
          icon: '11701_Potential_21',
          description:
            'When the Lightning Domain deals DMG to elite or higher-tier targets, increases &Param3& by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'When the Lightning Domain deals DMG to elite or higher-tier targets, increases &Param3&.',
          params: ['Static Discharge', '20%/32%/44%/56%/68%/80%/92%/104%/116%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Self-drawn Concealed Hand',
          icon: '11701_Potential_22',
          description:
            "Increases Lightning Domain's duration by &Param2&s and its DMG by <color=#ec6d21>&Param3&</color>.",
          shortDescription: "Increases Lightning Domain's duration and &Param4&.",
          params: ['Static Discharge', '2', '20%/31%/43%/55%/67%/79%/90%/102%/114%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Win upon a Kong',
          icon: '11701_Potential_21',
          description:
            'For every second the Lightning Domain remains active, increases its DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription: "Lightning Domain's DMG increases over time.",
          params: ['Static Discharge', '6%/10%/13%/17%/20%/24%/28%/31%/35%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Complete Sequence',
          icon: '11701_Potential_23',
          description:
            'Reduces the Cooldown of &Param1& (Support Skill) by &Param2&s, and increases its DMG by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Reduces Support Skill Cooldown and increases its DMG.',
          params: ['Static Discharge', '2', '16%/25%/35%/44%/54%/63%/73%/82%/92%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'No Ones No Nines',
          icon: '11701_Potential_24',
          description:
            'While the main Trekker is inside the Lightning Domain, increases their &Param3& by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'While the main Trekker is inside the Lightning Domain, increases their &Param3&.',
          params: ['Static Discharge', '13%/21%/29%/37%/45%/53%/61%/69%/76%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Effortless Mastery',
          icon: 'Common_Potential_Light_1',
          description:
            '&Param4& (Ultimate) can inflict ##Lux Mark: Radiance#2016#. Also increases its DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'The Ultimate can inflict ##Lux Mark: Radiance#2016#. Also increases its DMG.',
          params: [
            'Roar of the Qilin',
            '30%/48%/65%/83%/101%/119%/137%/154%/172%',
            'Ultimate DMG',
            'Roar of the Qilin',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Triple Chows',
          icon: '11701_Potential_24',
          description:
            "When the Lightning Domain deals DMG, there is a &Param2& chance to increase the main Trekker's &Param5& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
          shortDescription:
            "When the Lightning Domain deals DMG, there is a chance to increase the main Trekker's &Param5&.",
          params: ['Static Discharge', '30%', '9%/15%/21%/26%/32%/37%/43%/49%/54%', '8', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Little Manager',
          icon: 'Common_Potential_11',
          description: 'Increases &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases &Param2&.',
          params: ['10%/15%/21%/27%/32%/38%/44%/49%/55%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Social Butterfly',
          icon: 'Common_Potential_15',
          description: "Increases Lux Trekkers' Crit Rate by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Lux Trekkers' Crit Rate.",
          params: ['3.5%/4.7%/5.9%/7.1%/8.3%/9.5%/10.7%/11.9%/13.1%', 'Crit Rate'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  kasimira: {
    id: 108,
    name: 'Kasimira',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          description: 'A build that loads flame bullets to deal massive single-target DMG.',
          potentials: [
            'Scatter Trigger',
            'Incendiary Warhead',
            'Incendiary Ember',
            'Mercenary Instinct',
            'Ammo Overload',
          ],
        },
        build2: {
          description: 'A build that loads flame bullets to deal DMG over time.',
          potentials: [
            'Charged Bolt Action',
            'Lucky Magazine',
            'Battle Trumpet',
            'Instant Combustion',
            'Opportunistic Ambush',
          ],
        },
      },
      support: {
        build1: {
          description: 'A build that calls in bombardments to create sustained DMG zones.',
          potentials: [
            'Heated Battle',
            'Area Bombardment',
            'Chain Reaction',
            'Shocking Bombardment',
            'Weakness Mark',
          ],
        },
        build2: {
          description: 'A build that calls in multiple rounds of precision bombardments.',
          potentials: [
            'Preemptive Strike',
            'Precision Guidance',
            'Lucky Blast',
            'Surprise Gift',
            'Insult to Injury',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Play with Fire',
          'Prime Condition',
          'Gunfighting',
          'Army Breaker',
          'Finale Sweep',
          'Blazing Sweep',
        ],
      },
      supportGeneric: {
        potentials: [
          'Meltdown Threshold',
          'Gradual Heat-Up',
          'Perfect Ambience',
          'Army Breaker',
          'Finale Sweep',
          'Blazing Sweep',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Scatter Trigger',
          icon: '10801_Potential_01',
          description:
            'Banishing Barrage (Main Skill) requires a <color=#0abec5>single</color> reload. After casting, the next shot fires more pellets and deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG.',
          shortDescription:
            'The Main Skill requires a single reload. After casting, the next shot deals additional DMG.',
          params: ['59%/65%/71%/89%/95%/101%/112%/118%/124%/136%/142%/148%/154%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Incendiary Warhead',
          icon: '10801_Potential_02',
          description:
            'When Incendiary Shells deal damage, inflicts burn on targets hit, dealing damage once per s for &Param3&s, with a total of <color=#0abec5>&Param2& of ATK</color> as Ignis Skill DMG.',
          shortDescription: 'When Incendiary Shells deal DMG, inflicts burn on targets hit.',
          params: [
            'EffectValue,NoLevel,10850211,EffectTypeParam2,Fixed',
            '10.5%/11.6%/12.6%/15.8%/16.8%/17.9%/20%/21%/22.1%/24.2%/25.2%/26.3%/27.3%',
            '10',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Charged Bolt Action',
          icon: '10801_Potential_03',
          description:
            'Increases the number of uses for Banishing Barrage (Main Skill) to <color=#0abec5>5</color>. When casting the Main Skill, there is a <color=#0abec5>&Param1&</color> chance to grant <color=#0abec5>2</color> Incendiary Shells.',
          shortDescription:
            'Increases the number of uses for the Main Skill. Each reload has a chance to grant extra Incendiary Shells.',
          params: ['15%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Lucky Magazine',
          icon: '10801_Potential_04',
          description:
            'When Incendiary Shells is fired, there is a <color=#0abec5>25%</color> chance that no ammo is consumed.',
          shortDescription:
            'When Incendiary Shells is fired, there is a chance that no ammo is consumed.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Mercenary Instinct',
          icon: '10801_Potential_02',
          description:
            'When Incendiary Shells hit a target, increases the DMG of this shot by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the DMG of Incendiary Shells with each hit.',
          params: ['3.8%/6.1%/8.4%/10.7%/13%/15.3%/17.6%/19.9%/22.2%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Incendiary Ember',
          icon: '10801_Potential_01',
          description:
            'After casting Banishing Barrage (Main Skill), increases the DMG of the next shot by <color=#ec6d21>&Param1&</color>. \u000bThis effect can only be triggered once every 4s.',
          shortDescription: 'After casting the Main Skill, increases the DMG of the next shot.',
          params: ['39%/63%/86%/110%/133%/157%/180%/204%/227%'],
          rarity: 1,
          stype: 41,
          corner: 0,
          hints: {},
        },
        {
          name: 'Ammo Overload',
          icon: '10801_Potential_01',
          description:
            'When Kasimira lands 10 Crit Hits, increases her &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Kasimira lands multiple Crit Hits, increases her &Param2&.',
          params: ['3%/4%/6%/8%/9%/11%/12%/14%/16%', 'ATK', '5', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Instant Combustion',
          icon: '10801_Potential_03',
          description:
            "When Incendiary Shells hit a target, increases the target's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When Incendiary Shells hit a target, increases the target's &Param4&.",
          params: ['0.6%/1%/1.4%/1.8%/2.2%/2.6%/3%/3.4%/3.8%', '2.5', '10', 'Ignis DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Battle Trumpet',
          icon: '10801_Potential_03',
          description:
            'When firing Incendiary Shells, increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'When firing Incendiary Shells, increases &Param4&.',
          params: ['3%/5%/7%/8%/10%/12%/14%/16%/17%', '3', '10', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Prime Condition',
          icon: 'Common_Potential_9',
          description:
            "When Kasimira's HP is above &Param1&, increases her &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "When Kasimira's HP is above &Param1&, increases her &Param3&.",
          params: ['80%', '20%/32%/43%/55%/67%/79%/91%/102%/114%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Opportunistic Ambush',
          icon: '10801_Potential_04',
          description:
            "Increases the DMG of Incendiary Shells by <color=#ec6d21>&Param1&</color>. After firing 6 Incendiary Shells, reduces Banishing Barrage (Main Skill)'s Cooldown by &Param2&s.",
          shortDescription:
            'Increases the DMG of Incendiary Shells. After firing multiple Incendiary Shells, reduces Main Skill Cooldown.',
          params: ['10%/16%/22%/28%/33%/39%/45%/51%/57%', '1', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Play with Fire',
          icon: 'Common_Potential_Fire_1',
          description:
            'Sweeping Blast (Ultimate) can trigger ##Ignis Mark: Sacred Flame#2013#. When the mark is triggered, increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription:
            'The Ultimate can trigger ##Ignis Mark: Sacred Flame#2013#. When the mark is triggered, increases &Param4&.',
          params: ['12%/20%/27%/34%/41%/49%/56%/63%/71%', '15', '4', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
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
          name: 'Gunfighting',
          icon: 'Common_Potential_9',
          description:
            'When Kasimira attacks close-by enemies, increases her &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'When Kasimira attacks close-by enemies, increases her &Param2&.',
          params: ['20%/32%/43%/55%/67%/79%/91%/102%/114%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Army Breaker',
          icon: '10801_Potential_41',
          description:
            'Increases the &Param4& of targets hit by Sweeping Blast (Ultimate) by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'Increases the &Param4& of targets hit by the Ultimate.',
          params: ['4%/6%/8%/10%/13%/15%/17%/19%/21%', '15', '6', 'Ignis DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Finale Sweep',
          icon: '10801_Potential_41',
          description:
            'Increases the DMG of the final shot of Sweeping Blast (Ultimate) by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the DMG of the final shot of the Ultimate.',
          params: ['68%/109%/150%/190%/231%/272%/313%/354%/394%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Blazing Sweep',
          icon: '10801_Potential_41',
          description:
            "After Sweeping Blast (Ultimate) kills a target, increases Kasimira's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When the Ultimate kills a target, increases Kasimira's &Param4&.",
          params: ['11%/18%/24%/31%/37%/44%/51%/57%/64%', '20', '6', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Heated Battle',
          icon: '10801_Potential_21',
          description:
            'After casting Precision Strike (Support Skill), a burning bomb crater remains on the battlefield, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Ignis Skill DMG every <color=#0abec5>0.5</color>s for a total of 8s, and inflicting ##Ignis Mark: Sacred Flame#2013#.',
          shortDescription:
            'After casting the Support Skill, a bomb crater remains, dealing DMG over time.',
          params: ['8.2%/9.1%/9.9%/12.3%/13.2%/14%/15.6%/16.5%/17.3%/18.9%/19.7%/20.6%/21.4%'],
          rarity: 1,
          stype: 42,
          corner: null,
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
          name: 'Area Bombardment',
          icon: '10801_Potential_22',
          description:
            'Precision Strike (Support Skill) calls in <color=#0abec5>5</color> rounds of bombardment. Also increases DMG by <color=#0abec5>&Param1&</color>.',
          shortDescription:
            'The Support Skill calls in more rounds of bombardment with increased DMG.',
          params: ['11%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Preemptive Strike',
          icon: '10801_Potential_23',
          description:
            'Precision Strike (Support Skill) can <color=#0abec5>stun</color> the target for &Param1&s. \u000bIncreases Skill DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'Increases Skill DMG and stuns the target.',
          params: ['3', '38%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Precision Guidance',
          icon: '10801_Potential_24',
          description:
            "Increases Precision Strike (Support Skill)'s bombing precision. Increases Skill DMG by <color=#0abec5>&Param1&</color>.",
          shortDescription: 'Increases Skill DMG and bombing precision.',
          params: ['31%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Chain Reaction',
          icon: '10801_Potential_21',
          description:
            "When a target inflicted with ##Ignis Mark: Sacred Flame#2013# by Kasimira's is killed, deals <color=#ec6d21>&Param1& of ATK</color> as AoE Ignis Skill DMG and inflicts ##Ignis Mark: Sacred Flame#2013#. This effect can only be triggered once every 0.5s.",
          shortDescription:
            "Targets inflicted with ##Ignis Mark: Sacred Flame#2013# by Kasimira's Skill deal AoE DMG when they are killed.",
          params: ['68%/91%/114%/137%/160%/182%/205%/228%/251%'],
          rarity: 1,
          stype: 41,
          corner: 1,
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
          name: 'Shocking Bombardment',
          icon: '10801_Potential_22',
          description:
            "When Precision Strike (Support Skill) hits a target, reduces the target's Movement SPD by &Param1&, and increases their &Param3& by <color=#ec6d21>&Param2&</color> for &Param4&s.",
          shortDescription:
            "When the Support Skill hits a target, reduces the target's Movement SPD and increases their &Param3&.",
          params: ['-35%', '9%/14%/20%/25%/31%/36%/41%/47%/52%', 'Skill DMG Taken', '10'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Weakness Mark',
          icon: '10801_Potential_21',
          description:
            "When casting Precision Strike (Support Skill), increases the squad's Skill DMG to stunned targets by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When casting the Support Skill, increases the squad's Skill DMG to stunned targets.",
          params: ['10%/16%/22%/28%/34%/39%/45%/51%/57%', '10', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Surprise Gift',
          icon: '10801_Potential_24',
          description:
            "After casting Precision Strike (Support Skill), there is a &Param2& chance to reset Skill Cooldown. \u000bIncreases Kasimira's Skill DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "After casting the Support Skill, there is a chance to reset Skill Cooldown. \u000bIncreases Kasimira's Skill DMG.",
          params: ['6%/9%/12%/15%/19%/22%/25%/29%/32%', '30%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Insult to Injury',
          icon: '10801_Potential_23',
          description:
            "Increases Precision Strike (Support Skill)'s DMG dealt to stunned targets by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases the Support Skill's DMG dealt to stunned targets.",
          params: ['16%/26%/36%/46%/56%/65%/75%/85%/95%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Gradual Heat-Up',
          icon: 'Common_Potential_Fire_1',
          description:
            "Sweeping Blast (Ultimate) can inflict ##Ignis Mark: Sacred Flame#2013#. \u000bAlso increases Kasimira's &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "The Ultimate can inflict ##Ignis Mark: Sacred Flame#2013#. \u000bAlso increases Kasimira's &Param3&.",
          params: ['100%', '13%/20%/28%/36%/43%/51%/58%/66%/74%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
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
          name: 'Lucky Blast',
          icon: '10801_Potential_23',
          description:
            "When casting Precision Strike (Support Skill), there is a &Param2& chance to call in a second round of bombardment. \u000bIncreases Kasimira's Skill DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When casting the Support Skill, there is a chance to automatically cast again. \u000bIncreases Kasimira's Skill DMG.",
          params: ['8%/13%/18%/23%/28%/33%/38%/42%/47%', '30%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Perfect Ambience',
          icon: 'Common_Potential_11',
          description: "Increases Kasimira's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Kasimira's &Param2&.",
          params: ['21%/34%/47%/59%/72%/85%/97%/110%/123%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Meltdown Threshold',
          icon: 'Common_Potential_15',
          description: "Increases all Ignis Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Ignis Trekkers' &Param2&.",
          params: ['7%/9%/11%/13%/15%/18%/20%/22%/24%', 'Skill Crit Rate'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  laru: {
    id: 150,
    name: 'Laru',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that generates multiple types of lightning to deal DMG over time after casting a skill.',
          potentials: [
            'Aerial Suspension',
            'Arc Chain Laser',
            'Sky Rend',
            "Lance's Song",
            'Piercing Sting',
          ],
        },
        build2: {
          description:
            'A build that increases the number of skill hits and deals DMG multiple times.',
          potentials: [
            'Lance Sweep',
            'Lightning Lance Dance',
            'Electric Chain',
            'Lightbreaker',
            'Cracking Thunderbolt',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that generates a large number of continuously erupting light pillars.',
          potentials: [
            'Radiant Flame: Cycle Restart',
            'Radiant Flame: Flash Point',
            'Radiant Downpour',
            'Light Unleashed',
            'Radiant Ascent',
          ],
        },
        build2: {
          description:
            'A build that allows light pillars to strike enemies with greater precision.',
          potentials: [
            'Radiant Flame: Convergence',
            'Radiant Flame: Pursuit',
            'Skybreak Raid',
            'Dawn Break',
            'Light Tempest',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Swift Strike',
          'Holy Sigil',
          'Checkmate',
          'Lancefall: Light Realm',
          'Lancefall: Electro Bind',
          'Lancefall: Thunder Surge',
        ],
      },
      supportGeneric: {
        potentials: [
          'Holy Prayer',
          'Divine Baptism',
          'Lance Judgement',
          'Lancefall: Light Realm',
          'Lancefall: Electro Bind',
          'Lancefall: Thunder Surge',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Aerial Suspension',
          icon: '15001_Potential_01',
          description:
            'After casting &Param1& (Main Skill), creates a Thunder Domain, dealing <color=#0abec5>&Param2& of ATK</color> as AoE Lux Skill DMG every <color=#0abec5>0.5</color>s for a total of 10s.',
          shortDescription:
            'After casting the Main Skill, creates a Thunder Domain that deals DMG over time.',
          params: [
            'Thunderflare Strike',
            '15.6%/17.2%/18.7%/23.4%/25%/26.5%/29.6%/31.2%/32.8%/35.9%/37.4%/39%/40.6%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Arc Chain Laser',
          icon: '15001_Potential_02',
          description:
            'The laser inflicts Shock on targets for 10s. When dealing damage to Shocked targets, deals an additional <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG. With the 20th hit, deals <color=#0abec5>&Param3& of ATK</color> as AoE Lux Skill DMG and removes Shock.',
          shortDescription:
            'The laser inflicts Shock on targets. When attacking Shocked targets, deals additional DMG.',
          params: [
            'Thunderflare Strike',
            '9.4%/10.3%/11.2%/14.1%/15%/15.9%/17.8%/18.7%/19.7%/21.6%/22.5%/23.4%/24.4%',
            '106%/117%/127%/159%/170%/180%/202%/212%/223%/244%/255%/265%/276%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Lance Sweep',
          icon: '15001_Potential_03',
          description:
            'When casting &Param1& (Main Skill), hold the button to launch 3 horizontal sweeps, dealing <color=#0abec5>&Param2&</color>/<color=#0abec5>&Param3&</color>/<color=#0abec5>&Param4& of ATK</color> as AoE Lux Skill DMG.',
          shortDescription: 'Hold the Main Skill button to launch more horizontal sweeps.',
          params: [
            'Thunderflare Strike',
            '125%/137%/150%/187%/200%/212%/237%/250%/262%/287%/299%/312%/324%',
            '148%/163%/178%/223%/237%/252%/282%/297%/312%/341%/356%/371%/386%',
            '192%/211%/231%/288%/307%/327%/365%/384%/403%/442%/461%/480%/499%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Lightning Lance Dance',
          icon: '15001_Potential_04',
          description:
            "Each of &Param1& (Main Skill)'s horizontal sweep increases the next laser beam's DMG by <color=#0abec5>&Param2&</color>. After 3 increments, the next laser beam will last for 3s, dealing <color=#0abec5>&Param3& of ATK x12</color> as AoE Lux Skill DMG.\u000bWhile the laser is active, Laru gains Super Armor, increasing her DEF by &Param4&.",
          shortDescription:
            "Each of the Main Skill's horizontal sweep increases the next laser beam's DMG.",
          params: [
            'Thunderflare Strike',
            '20%',
            '45%/50%/54%/68%/72%/77%/86%/90%/95%/104%/108%/113%/117%',
            '500',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: "Lance's Song",
          icon: '15001_Potential_01',
          description:
            'After casting &Param1& (Main Skill), increases ATK SPD by &Param2& and Auto Attack DMG by <color=#ec6d21>&Param3&</color>, lasting for &Param4&s.',
          shortDescription:
            "After casting the Main Skill, increases Laru's ATK SPD and Auto Attack DMG.",
          params: ['Thunderflare Strike', '30%', '26%/42%/58%/73%/89%/105%/120%/136%/152%', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Sky Rend',
          icon: '15001_Potential_02',
          description:
            "Each of &Param1& (Main Skill)'s horizontal sweep slices through space, pulling in targets and dealing <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG every 0.5s for 5s.",
          shortDescription:
            'After launching a horizontal sweep with the Main Skill, pulls in targets and deals DMG over time.',
          params: ['Thunderflare Strike', '21.1%/28.1%/35.1%/42.1%/49.1%/56.2%/63.2%/70.2%/77.2%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Piercing Sting',
          icon: '15001_Potential_02',
          description:
            "Increases Laru's Skill DMG dealt to targets by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription: "Increases Laru's Skill DMG dealt to targets over time.",
          params: [
            'Thunderflare Strike',
            '0.9%/1.4%/1.9%/2.4%/2.9%/3.4%/3.9%/4.4%/4.9%',
            '2',
            '20',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Lightbreaker',
          icon: '15001_Potential_03',
          description:
            "When Laru's Auto Attack deals DMG to a target inflicted with ##Lux Mark: Radiance#2016#, increases the Skill DMG of her next skill by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.",
          shortDescription:
            "When Laru's Auto Attack deals DMG to a target inflicted with ##Lux Mark: Radiance#2016#, increases the Skill DMG of her next skill.",
          params: ['Thunderflare Strike', '1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%', '8'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Electric Chain',
          icon: '15001_Potential_04',
          description:
            'When &Param1& (Main Skill) triggers a ##Lux Mark: Radiance#2016#, summons Chain Lightning to attack up to 4 nearby targets, dealing <color=#ec6d21>&Param2& of ATK</color> as Lux Skill DMG. This effect can only be triggered 3 times per second.',
          shortDescription:
            'When the Main Skill triggers a ##Lux Mark: Radiance#2016#, summons Chain Lightning to attack nearby targets.',
          params: ['Thunderflare Strike', '40%/54%/67%/81%/94%/108%/121%/135%/148%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Swift Strike',
          icon: 'Common_Potential_9',
          description:
            'After Laru dashes for over 2 sec, interrupting the dash deals <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG. This effect can only be triggered once every &Param3&s.',
          shortDescription: 'Laru deals DMG when her dash is interrupted.',
          params: ['Thunderflare Strike', '192%/257%/321%/385%/449%/513%/577%/642%/706%', '10'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Checkmate',
          icon: 'Common_Potential_11',
          description:
            'When Laru deals DMG to a boss target, increases her ATK by <color=#ec6d21>&Param2&</color> for &Param3&s. This effect can only be triggered once per boss fight.',
          shortDescription: 'When Laru deals DMG to a boss target, increases her ATK.',
          params: ['Thunderflare Strike', '22%/35%/48%/61%/74%/87%/100%/113%/126%', '30'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Cracking Thunderbolt',
          icon: '15001_Potential_04',
          description:
            "When the horizontal sweep of the Main Skill hits a target, increases the laser's DMG to the target by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "When the horizontal sweep hits a target, increases the laser's DMG dealt to the target.",
          params: ['Thunderflare Strike', '5%/8%/11%/14%/18%/21%/24%/27%/30%', '15', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Holy Sigil',
          icon: 'Common_Potential_9',
          description:
            'When &Param1& (Main Skill) triggers ##Lux Mark: Radiance#2016#, increases Ultimate DMG by <color=#ec6d21>&Param3&</color> for &Param5&s, stacking up to &Param4& times.',
          shortDescription:
            'When the Main Skill triggers ##Lux Mark: Radiance#2016#, increases the Ultimate DMG.',
          params: [
            'Thunderflare Strike',
            'Thunderfall Thrust',
            '0.5%/0.8%/1.1%/1.4%/1.7%/2%/2.3%/2.6%/2.9%',
            '50',
            '20',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
      ],
      common: [
        {
          name: 'Lancefall: Light Realm',
          icon: '15001_Potential_41',
          description:
            'When casting &Param1&, throws a lance into the ground, dealing <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Ultimate DMG every 0.5s for a total of 10s.',
          shortDescription: 'The lance from the Ultimate deals DMG over time.',
          params: ['Thunderfall Thrust', '24.6%/32.8%/41%/49.2%/57.3%/65.5%/73.7%/81.9%/90.1%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lancefall: Electro Bind',
          icon: '15001_Potential_41',
          description:
            'When &Param1& hits an elite or higher-tier target, increases the Ultimate DMG by <color=#ec6d21>&Param2&</color>. Also grants Laru &Param3& Energy.',
          shortDescription:
            'When the Ultimate hits an elite or higher-tier target, increases its DMG. Also grants Laru Energy.',
          params: ['Thunderfall Thrust', '25%/39%/54%/69%/83%/98%/113%/127%/142%', '5', '2'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Lancefall: Thunder Surge',
          icon: '15001_Potential_41',
          description:
            'Each time &Param1& (Ultimate) hits a different target, increases ATK by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'Each time the Ultimate hits a different target, increases ATK.',
          params: ['Thunderfall Thrust', '4%/6%/9%/11%/13%/15%/18%/20%/22%', '15', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Radiant Flame: Cycle Restart',
          icon: '15001_Potential_21',
          description:
            'Thunder Domain erupts for 1s, dealing <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG every 0.3s.',
          shortDescription: 'Thunder Domain will deal DMG over time.',
          params: [
            'Divine Thunderquake',
            '19.1%/21%/22.9%/28.7%/30.6%/32.5%/36.3%/38.2%/40.1%/44%/45.9%/47.8%/49.7%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Radiant Flame: Flash Point',
          icon: '15001_Potential_22',
          description:
            'While &Param1& (Support Skill) is active, creates <color=#0abec5>2</color> additional Thunder Domains and increases their DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'While the Support Skill is active, creates more Thunder Domains and increases their DMG.',
          params: ['Divine Thunderquake', '50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Radiant Flame: Convergence',
          icon: '15001_Potential_23',
          description:
            'The center of the Thunder Domain deals an additional <color=#0abec5>&Param2& of ATK</color> as Lux Skill DMG to the target. \u000bWhile the Thunder Domain erupts, dealing an additional <color=#0abec5>&Param3& of ATK</color> as Lux Skill DMG every 0.3s.',
          shortDescription: 'The center of the Thunder Domain deals additional DMG.',
          params: [
            'Divine Thunderquake',
            '42%/46%/51%/63%/68%/72%/80%/85%/89%/97%/101%/106%/110%',
            '26.1%/28.7%/31.3%/39.1%/41.7%/44.3%/49.5%/52.2%/54.8%/60%/62.6%/65.2%/67.8%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Radiant Flame: Pursuit',
          icon: '15001_Potential_24',
          description:
            "Always creates a Thunder Domain at the target's location and increases DMG dealt by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Creates a Thunder Domain at the target's location and increases its DMG.",
          params: ['Divine Thunderquake', '50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Radiant Downpour',
          icon: '15001_Potential_21',
          description:
            'When &Param1& (Support Skill) ends, deals <color=#ec6d21>&Param2& of ATK</color> as Lux Skill DMG to the targets near the main Trekker every 0.3s for a total of 6s.',
          shortDescription:
            'When the Support Skill ends, deals constant DMG to the targets near the main Trekker.',
          params: ['Divine Thunderquake', '4.8%/6.5%/8.1%/9.7%/11.3%/12.9%/14.5%/16.1%/17.7%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Light Unleashed',
          icon: '15001_Potential_22',
          description:
            'When Thunder Domain deals damage to a target, increases its Skill DMG to that target by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks.',
          shortDescription: "Increases the Thunder Domain's DMG to the same target over time.",
          params: ['Divine Thunderquake', '4%/6%/8%/10%/13%/15%/17%/19%/21%', '6'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Radiant Ascent',
          icon: '15001_Potential_21',
          description:
            'Thunder Domain can knock targets into the air. Also increases its Skill DMG to airborne targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'Thunder Domain can knock targets into the air. Also increases its DMG to airborne targets.',
          params: ['Divine Thunderquake', '13%/21%/29%/36%/44%/52%/60%/68%/75%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Skybreak Raid',
          icon: '15001_Potential_23',
          description:
            'When casting &Param1& (Support Skill), deals an additional <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG. While infusing Lux energy, deals <color=#ec6d21>&Param3& of ATK</color> as AoE Lux Skill DMG constantly.',
          shortDescription:
            'When casting the Support Skill, deals additional DMG. While the Support Skill is active, deals additional DMG constantly.',
          params: [
            'Divine Thunderquake',
            '47%/63%/79%/95%/111%/126%/142%/158%/174%',
            '7.8%/10.4%/13%/15.7%/18.3%/20.9%/23.5%/26.1%/28.7%',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Light Tempest',
          icon: '15001_Potential_24',
          description:
            'While &Param1& (Support Skill) is active, each time Laru hits a different target with the Support Skill, that Skill DMG is increased by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks.',
          shortDescription:
            'Each time the Support Skill hits a different target, the Skill DMG is increased.',
          params: ['Divine Thunderquake', '4%/6%/8%/10%/12%/14%/16%/18%/20%', '6'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Divine Baptism',
          icon: 'Common_Potential_11',
          description:
            'When &Param1& (Support Skill) triggers a ##Lux Mark: Radiance#2016#, increases &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When the Support Skill triggers a ##Lux Mark: Radiance#2016#, increases &Param5&.',
          params: [
            'Divine Thunderquake',
            '1.2%/1.9%/2.6%/3.3%/4%/4.7%/5.4%/6.1%/6.8%',
            '12',
            '12',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Lance Judgement',
          icon: 'Common_Potential_11',
          description: "Increases Laru's ATK by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Laru's ATK.",
          params: ['Divine Thunderquake', '9%/14%/20%/25%/31%/36%/41%/47%/52%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Dawn Break',
          icon: '15001_Potential_24',
          description:
            "After a squadmate casts a Main Skill, increases the DMG of Laru's next Support Skill, &Param1&, by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.",
          shortDescription:
            "After a squadmate casts a Main Skill, increases the DMG of Laru's next Support Skill.",
          params: ['Divine Thunderquake', '4%/6%/8%/10%/12%/14%/16%/18%/20%', '5'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Holy Prayer',
          icon: 'Common_Potential_15',
          description:
            'Increases the Skill DMG of Lux Trekkers by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the Skill DMG of Lux Trekkers.',
          params: ['Divine Thunderquake', '15%/23%/32%/41%/49%/58%/67%/75%/84%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  minova: {
    id: 132,
    name: 'Minova',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that adds a 3rd attack to skills, synergizing Auto Attacks and skill combos for optimal DMG.',
          potentials: [
            'Ultimatum',
            'Clan Clash Artistry',
            'Ashwind Rhythm',
            'Unyielding Strength',
            'On a Roll',
          ],
        },
        build2: {
          description:
            'A build that enhances the two-phase attacks of skills, enabling consecutive skill casting for sustained DPS.',
          potentials: [
            'Board Tricks',
            'No Respite',
            'Light Burn',
            'Radiant Glow',
            'Nebulous Reverb',
          ],
        },
      },
      support: {
        build1: {
          description: 'A build that scatters stars that attach to targets, dealing DMG over time.',
          potentials: [
            'Four-Star Wanted Level',
            'Radiant Burst',
            'Shutout Desire',
            'Optimal Hit Zone',
            'Final Score',
          ],
        },
        build2: {
          description:
            'A build that scatters stars that attach and weaken enemies, granting a shield to the main Trekker.',
          potentials: [
            'Oath Satellite',
            'Star Core Crumbled',
            'Perfect Arc',
            'Three Base Hit',
            'Fervent Applause',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Starlit Sky',
          'More Than Just Pretty',
          'Home Court Advantage',
          'Urgent Reinforcement',
          'Flash of Starlight',
          'Weakness Strike',
        ],
      },
      supportGeneric: {
        potentials: [
          'Radiant Synergy',
          "Ashwind's Wrath",
          'Home Run State',
          'Urgent Reinforcement',
          'Flash of Starlight',
          'Weakness Strike',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Ultimatum',
          icon: '13201_Potential_01',
          description:
            'Adds a third phase to the Main Skill: Three Base Hit. Deals <color=#0abec5>&Param2& of ATK x2</color>/<color=#0abec5>&Param3& of ATK</color> as AoE Lux Skill DMG. \u000bDuring this phase, Minova becomes <color=#0abec5>immune</color> to damage.',
          shortDescription: 'Adds a third phase to the Main Skill: Three Base Hit.',
          params: [
            'Syou: Pulsar Streak',
            '115%/132%/149%/201%/217%/233%/265%/278%/292%/320%/343%/366%/388%',
            '172%/198%/223%/301%/325%/349%/397%/418%/438%/479%/514%/548%/583%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Clan Clash Artistry',
          icon: '13201_Potential_02',
          description:
            'When &Param1& (Main Skill) triggers a ##Lux Mark#1015#, enhances Two Base Hit, increasing its DMG by <color=#0abec5>&Param2&</color> and reducing its Attack Interval by <color=#0abec5>30%</color>.',
          shortDescription: 'When &Param1& triggers a ##Lux Mark#1015#, enhances Two Base Hit.',
          params: [
            'Syou: Pulsar Streak',
            '64.4%',
            '115%/132%/149%/201%/217%/233%/265%/278%/292%/320%/343%/366%/388%',
            '229%/263%/297%/400%/432%/464%/528%/555%/583%/638%/683%/729%/775%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Board Tricks',
          icon: '13201_Potential_03',
          description:
            'Increases the damage of &Param1& (Main Skill) by <color=#0abec5>&Param2&</color>. \u000bWhen ##Lux Mark#1015# is triggered, increases the Skill DMG taken by the target by <color=#0abec5>&Param3&</color> for &Param4&s.',
          shortDescription:
            'Increases Skill DMG. When triggering a mark, increases the Skill DMG taken by the target.',
          params: ['Syou: Pulsar Streak', '430%', '27%', '8', 'Skill DMG Taken'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'No Respite',
          icon: '13201_Potential_04',
          description:
            'Two Base Hit becomes a 3-hit combo and its damage is increased by <color=#0abec5>&Param2&</color>. When cast within 2s after &Param1&, deals an additional <color=#0abec5>&Param3& of ATK</color> as AoE Lux Skill DMG with each hit.',
          shortDescription:
            'Two Base Hit becomes a 3-hit combo and its DMG is increased. Casting Two Base Hit immediately after &Param1& deals additional DMG.',
          params: [
            'Syou: Pulsar Streak',
            '47%',
            '66%/76%/86%/115%/125%/134%/152%/160%/168%/184%/197%/211%/224%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Ashwind Rhythm',
          icon: '13201_Potential_01',
          description:
            'After Minova casts the Main Skill, increases her ATK SPD by &Param2& and Auto Attack DMG by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription:
            'After Minova casts the Main Skill, increases her ATK SPD and Auto Attack DMG.',
          params: [
            'Syou: Pulsar Streak',
            '20%',
            '89%/142%/195%/248%/301%/354%/407%/460%/513%',
            '6',
            'Auto Attack Damage',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Unyielding Strength',
          icon: '13201_Potential_02',
          description:
            "When Minova hits a target with an Auto Attack, increases her next Main Skill's DMG by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.",
          shortDescription:
            "When Minova hits a target with an Auto Attack, increases her next Main Skill's DMG.",
          params: ['Syou: Pulsar Streak', '8%/13%/18%/22%/27%/32%/37%/42%/46%', '6', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'On a Roll',
          icon: '13201_Potential_02',
          description:
            "While Minova's Main Skill is active, each strike increases its Skill DMG by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times.",
          shortDescription:
            "While Minova's Main Skill is active, each strike increases its Skill DMG.",
          params: [
            'Syou: Pulsar Streak',
            '4.8%/7.7%/10.6%/13.5%/16.4%/19.3%/22.2%/25.1%/28%',
            '6',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Radiant Glow',
          icon: '13201_Potential_03',
          description:
            'When &Param1& (Main Skill) hits a target, deals an additional <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG.',
          shortDescription: 'When the Main Skill hits a target, deals additional DMG.',
          params: ['Syou: Pulsar Streak', '157%/250%/344%/438%/532%/626%/720%/814%/908%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Light Burn',
          icon: '13201_Potential_04',
          description:
            'Reduces the Cooldown of &Param1& (Main Skill) by &Param4&s. When casting, increases Skill DMG by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When casting the Main Skill, increases Skill DMG and reduces its Cooldown.',
          params: ['Syou: Pulsar Streak', '20%/32%/44%/57%/69%/81%/93%/105%/117%', '5', '4'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'More Than Just Pretty',
          icon: 'Common_Potential_9',
          description:
            "When the fifth strike of Minova's Auto Attack deals DMG, increases the Lux DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            'When Minova deals DMG with an Auto Attack, increases the Lux DMG taken by the target.',
          params: ['10%/16%/22%/28%/34%/40%/46%/52%/58%', '6', 'Lux DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Nebulous Reverb',
          icon: 'Common_Potential_Light_1',
          description:
            '&Param1& can trigger ##Lux Mark#1015#, dealing &Param2& of ATK as Lux Mark DMG. After casting the Ultimate, increases Skill DMG by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription:
            'The Ultimate can trigger ##Lux Mark#1015#. After casting the Ultimate, increases Skill DMG.',
          params: [
            'Ketsu: Entropic Convergence',
            '89%/115%/142%/168%/195%/221%/248%/275%/301%',
            '91%/146%/200%/255%/309%/364%/419%/473%/528%',
            '5',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Starlit Sky',
          icon: 'Common_Potential_11',
          description:
            "When casting any Support Skill, increases Minova's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          shortDescription: "When casting any Support Skill, increases Minova's &Param4&.",
          params: ['12%/19%/26%/34%/41%/48%/55%/62%/70%', '10', '2', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Home Court Advantage',
          icon: 'Common_Potential_9',
          description:
            "After casting &Param5&, (Main Skill) increases Minova's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s. This effect can only be triggered once every &Param3&s.",
          shortDescription: "After casting the Main Skill, increases Minova's &Param4&.",
          params: [
            '25%/40%/55%/70%/85%/100%/115%/130%/145%',
            '6',
            '8',
            'ATK',
            'Syou: Pulsar Streak',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Urgent Reinforcement',
          icon: '13201_Potential_41',
          description:
            'Casting &Param1& (Ultimate) requires 25% more Energy and its DMG is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Ultimate DMG and costs more Energy.',
          params: [
            'Ketsu: Entropic Convergence',
            '32%/51%/70%/89%/108%/127%/146%/165%/184%',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Flash of Starlight',
          icon: '13201_Potential_41',
          description:
            'Reduces the Attack Interval of &Param1& (Ultimate) by 30% and increases its DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription: "Reduces the Ultimate's Attack Interval and increases its DMG.",
          params: [
            'Ketsu: Entropic Convergence',
            '21%/33%/46%/58%/71%/83%/96%/108%/121%',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Weakness Strike',
          icon: '13201_Potential_41',
          description:
            'While &Param1& is active, Vollara and Neuvira will help Minova attack the enemies, dealing <color=#ec6d21>&Param2& of ATK x2</color>/<color=#ec6d21>&Param3& of ATK</color> as AoE Lux Ultimate DMG.',
          shortDescription:
            'While the Ultimate is active, Vollara and Neuvira will help Minova attack the enemies.',
          params: [
            'Ketsu: Entropic Convergence',
            '153%/244%/336%/427%/519%/610%/702%/793%/885%',
            '305%/488%/671%/855%/1038%/1221%/1404%/1587%/1770%',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Four-Star Wanted Level',
          icon: '13201_Potential_21',
          description:
            'Increases the DMG of &Param1& (Support Skill) by <color=#0abec5>&Param2&</color>. \u000b&Param1& will apply <color=#0abec5>4</color> stacks of Astral Hex.',
          shortDescription: 'Increases Skill DMG and the stacks of Astral Hex.',
          params: ['Gi: Supernova Burst', '15%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Radiant Burst',
          icon: '13201_Potential_22',
          description:
            'Increases the Attack Range of Astral Hex by <color=#0abec5>50%</color> and its DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'Increases the DMG and Attack Range of Astral Hex.',
          params: ['Gi: Supernova Burst', '44%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Oath Satellite',
          icon: '13201_Potential_23',
          description:
            "When casting &Param1& (Support Skill), the main Trekker gains a shield equal to <color=#0abec5>&Param2&</color> of Minova's Max HP, lasting for &Param3&s.",
          shortDescription: 'When casting the Support Skill, the main Trekker gains a shield.',
          params: ['Gi: Supernova Burst', '15%', '6'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Star Core Crumbled',
          icon: '13201_Potential_24',
          description:
            'When Astral Hex deals DMG, summons a <color=#0abec5>Meteor</color>. When the main Trekker picks it up, gains a stack of Astral Hex, and their ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.',
          shortDescription:
            'When Astral Hex deals DMG, summons a Meteor. When the main Trekker picks it up, gains a stack of Astral Hex and their ATK is increased.',
          params: ['18%', '8'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Optimal Hit Zone',
          icon: '13201_Potential_21',
          description:
            'Increases the Skill DMG dealt to targets inflicted with Astral Hex. Each Astral Hex increases the Skill DMG by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the Skill DMG dealt to targets inflicted with Astral Hex.',
          params: ['6%/10%/14%/17%/21%/25%/28%/32%/36%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Shutout Desire',
          icon: '13201_Potential_22',
          description:
            "When the main Trekker deals damage to a target inflicted with Astral Hex, deals an additional <color=#ec6d21>&Param1& of Minova's ATK</color> as Lux Skill DMG. This effect can only be triggered once per second.",
          shortDescription:
            'When the main Trekker deals DMG to a target inflicted with Astral Hex, deals additional DMG.',
          params: ['55%/74%/92%/111%/129%/148%/166%/184%/203%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Final Score',
          icon: '13201_Potential_21',
          description:
            'Each target inflicted with Astral Hex increases the exploding DMG of Astral Hex by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.',
          shortDescription:
            'Each target inflicted with Astral Hex increases the DMG of Astral Hex.',
          params: ['12%/18%/25%/32%/39%/46%/53%/60%/67%', '4', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Perfect Arc',
          icon: '13201_Potential_23',
          description:
            'When casting &Param1& (Support Skill), deals an additional <color=#ec6d21>&Param2& of ATK x4</color> as Lux Skill DMG and inflicts Astral Hex.',
          shortDescription:
            'When casting the Support Skill, deals additional DMG and inflicts Astral Hex.',
          params: ['Gi: Supernova Burst', '125%/200%/276%/351%/426%/501%/576%/651%/727%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Fervent Applause',
          icon: '13201_Potential_23',
          description:
            'When Astral Hex deals DMG, increases the &Param4& of the main Trekker within its Attack Range by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription:
            'When Astral Hex deals DMG, increases the &Param4& of the main Trekker within its Attack Range.',
          params: ['6%/10%/14%/17%/21%/25%/28%/32%/36%', '8', '8', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Ashwind's Wrath",
          icon: 'Common_Potential_Light_1',
          description:
            '&Param1& (Ultimate) can inflict ##Lux Mark: Radiance#2016#. \u000bAfter casting &Param2& (Support Skill), increases the DMG of the next Ultimate by <color=#ec6d21>&Param3&</color>, up to &Param4& stacks.',
          shortDescription:
            'The Ultimate can inflict ##Lux Mark: Radiance#2016#. \u000bAfter casting the Support Skill, increases the DMG of the next Ultimate.',
          params: [
            'Ketsu: Entropic Convergence',
            'Gi: Supernova Burst',
            '9%/15%/20%/26%/31%/37%/42%/48%/53%',
            '3',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Three Base Hit',
          icon: '13201_Potential_24',
          description:
            "When &Param1& (Support Skill) hits 3 or more targets, reduces the Skill Cooldown by &Param2&s and increases the squad's &Param5& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
          shortDescription:
            "When the Support Skill hits 3 or more targets, reduces the Skill Cooldown and increases the squad's &Param5&.",
          params: ['Gi: Supernova Burst', '3', '21%/34%/47%/59%/72%/85%/97%/110%/123%', '8', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Home Run State',
          icon: 'Common_Potential_11',
          description: "Increases Minova's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Minova's &Param2&.",
          params: ['10%/16%/22%/28%/34%/40%/46%/52%/58%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Radiant Synergy',
          icon: 'Common_Potential_15',
          description:
            "For each Lux Trekker on the squad, increases the squad's ATK by <color=#ec6d21>&Param1&</color>, up to &Param2& stacks.",
          shortDescription: "Each Lux ally increases the squad's ATK.",
          params: ['5%/8%/11%/14%/17%/20%/23%/26%/29%', '3', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  mistique: {
    id: 135,
    name: 'Mistique',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          description:
            'An AoE build that increases skill range and DMG, causing phantoms to deal Explosion DMG to enemies upon disappearance.',
          potentials: [
            'Defiance Before Deletion',
            'Burst Shooting',
            'Cursed Screech',
            'Lingering Grudge: Demon Barrier',
            'Lingering Grudge: Onslaught',
          ],
        },
        build2: {
          description:
            'A build that enhances the control and sustain of phantoms, ideal for fighting elite targets.',
          potentials: [
            'Extended Exposure',
            'Thread the Needle',
            'Abominable Fester',
            'Night Dash',
            'Shadow Brightening',
          ],
        },
      },
      support: {
        build1: {
          description:
            "A build that extends skill duration and continuously boosts phantoms' DMG on the battlefield.",
          potentials: [
            'Happy Face',
            'Reality Erosion',
            'The Conjuring',
            'Wraith Haunting',
            'Twin Born',
          ],
        },
        build2: {
          description:
            'A build that allows skills to pull enemies and boosts the Explosion DMG of phantoms, ideal for the melee main Trekker.',
          potentials: [
            'Slumber Invitation',
            'Lucky Constitution',
            'Malice',
            'Shadow Shackle',
            'Solar Absorption',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Full Frame Focus',
          'Spotlight Craving',
          'Decisive Moment',
          'Darkness Devourer',
          'Quick Nightfall',
          'Chaos Frenzy',
        ],
      },
      supportGeneric: {
        potentials: [
          'Trending Lock',
          'Extra Perk',
          'Behind the Scenes',
          'Darkness Devourer',
          'Quick Nightfall',
          'Chaos Frenzy',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Defiance Before Deletion',
          icon: '13501_Potential_01',
          description:
            'Reduces the Cooldown of Pumpka Pummel (Main Skill) by 2s. \u000bPumpka Phantom will explode upon vanishing, dealing <color=#0abec5>&Param1& of ATK</color> as AoE Umbra Minion DMG.',
          shortDescription:
            'Reduces Main Skill Cooldown. Pumpka Phantom will explode upon vanishing.',
          params: ['31.3%/35.4%/39.5%/43.5%/47.6%/51.7%/57.2%/62.8%/68.4%/74%/79.5%/85.1%/90.7%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Burst Shooting',
          icon: '13501_Potential_02',
          description:
            'Pumpka Pummel (Main Skill) deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Umbra DMG. \u000bWhen cast, removes all Pumpka Phantoms from the battlefield and summons them again.',
          shortDescription:
            'The Main Skill deals additional DMG. When casting, removes all Pumpka Phantoms from the battlefield and summons them again.',
          params: ['79%/89%/99%/109%/119%/130%/144%/158%/171%/185%/199%/213%/227%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Extended Exposure',
          icon: '13501_Potential_03',
          description:
            'While in Exposure status, if the maximum number of Pumpka Phantoms are on the battlefield, increases their duration. Also increases their &Param1& by <color=#0abec5>&Param2&</color> every 3s, up to &Param3& stacks.',
          shortDescription:
            'While in Exposure status, if the maximum number of Pumpka Phantoms are on the battlefield, increases their duration and &Param1&.',
          params: ['Minion DMG', '13%', '4'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Thread the Needle',
          icon: '13501_Potential_04',
          description:
            'When Mistique deals damage, Pumpka Phantom will cast Whirlwind Slash, dealing <color=#0abec5>&Param1& of ATK x2</color> as AoE Umbra Minion DMG. \u000bThis effect can only be triggered once every 2.5s.',
          shortDescription: 'When Mistique deals DMG, Pumpka Phantom will cast Whirlwind Slash.',
          params: ['9.1%/10.3%/11.5%/12.6%/13.8%/15%/16.6%/18.2%/19.9%/21.5%/23.1%/24.7%/26.3%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Cursed Screech',
          icon: '13501_Potential_01',
          description:
            'When a Pumpka Phantom vanishes, increases the &Param4& of nearby targets by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription:
            'When a Pumpka Phantom vanishes, increases the &Param4& of nearby targets.',
          params: ['4%/6%/8%/10%/12%/15%/17%/19%/21%', '4', '4', 'Umbra DMG Taken'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lingering Grudge: Demon Barrier',
          icon: '13501_Potential_01',
          description:
            'When a Pumpka Phantom vanishes, Mistique gains a shield equal to <color=#ec6d21>&Param1&</color> of her Base Max HP, lasting for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'When a Pumpka Phantom vanishes, Mistique gains a shield.',
          params: ['2.4%/3.2%/4%/4.8%/5.6%/6.4%/7.2%/8%/8.8%', '10', '4'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Lingering Grudge: Onslaught',
          icon: '13501_Potential_02',
          description:
            "When a Pumpka Phantom vanishes, increases Mistique's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When a Pumpka Phantom vanishes, increases Mistique's &Param4&.",
          params: ['2.5%/4%/5.5%/7%/8.5%/10%/11.5%/13%/14.5%', '8', '4', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Abominable Fester',
          icon: '13501_Potential_03',
          description:
            'When a Pumpka Phantom deals DMG, there is a &Param1&% chance to increase its DMG by <color=#ec6d21>&Param2&</color> and stun the target for 1s.',
          shortDescription: 'Pumpka Phantom has a chance to increase its DMG and stun the target.',
          params: ['20', '110%/180%/250%/320%/390%/450%/520%/590%/660%', 'Minion DMG'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Spotlight Craving',
          icon: '13501_Potential_03',
          description:
            'Increases the &Param2& of the Pumpka Phantoms near Mistique by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the &Param2& of the Pumpka Phantoms near Mistique.',
          params: ['16%/25%/35%/44%/54%/63%/73%/82%/92%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Shadow Brightening',
          icon: 'Common_Potential_7',
          description:
            'When Mistique deals DMG with an Auto Attack, restores <color=#ec6d21>&Param1&</color> HP to nearby Pumpka Phantoms. This effect can only be triggered once per sec.\u000bIncreases her &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription:
            'When Mistique deals DMG with an Auto Attack, restores HP to nearby Pumpka Phantoms. Increases her &Param2&.',
          params: [
            '10%/10%/15%/15%/20%/20%/20%/20%/20%',
            'Minion DMG',
            '11%/18%/25%/31%/38%/45%/51%/58%/65%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Full Frame Focus',
          icon: '13501_Potential_41',
          description:
            "Midnight ★ Terror (Ultimate) can trigger ##Umbra Mark#1019#.\nWhen it triggers an ##Umbra Mark#1019#, increases Mistique's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "The Ultimate can trigger ##Umbra Mark#1019#. When it triggers an ##Umbra Mark#1019#, increases Mistique's ATK.",
          params: ['47%/76%/104%/132%/160%/189%/217%/245%/274%', '15', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description:
                "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Night Dash',
          icon: '13501_Potential_03',
          description:
            "Increases Pumpka Phantoms' &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color>.",
          shortDescription: "Increases Pumpka Phantoms' &Param1& and &Param3&.",
          params: [
            'ATK SPD',
            '16%/22%/27%/33%/38%/44%/49%/55%/60%',
            'Minion DMG',
            '8%/11%/14%/16%/19%/22%/24%/27%/30%',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Decisive Moment',
          icon: 'Common_Potential_13',
          description:
            'Mistique can dodge one more time.\u000bWhen dodging, increases the &Param3& of Mistique and the Pumpka Phantoms on the battlefield by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription:
            'Mistique can dodge one more time. When dodging, increases the &Param3& of Mistique and the Pumpka Phantoms on the battlefield.',
          params: ['10%/16%/22%/28%/34%/40%/46%/52%/58%', '5', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Darkness Devourer',
          icon: '13501_Potential_41',
          description:
            'When Mistique casts Midnight ★ Terror, sacrifices all of her minions, each increasing Ultimate DMG by <color=#ec6d21>&Param1&</color> for &Param4&s, up to &Param2& stacks.',
          shortDescription:
            'When Mistique casts the Ultimate, sacrifices all of her minions to increase Ultimate DMG.',
          params: ['7%/11%/16%/20%/24%/29%/33%/37%/42%', '6', 'Ultimate DMG', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Quick Nightfall',
          icon: 'Common_Potential_14',
          description:
            'Energy Charge Efficiency +<color=#ec6d21>&Param1&</color> for &Param2&s when Mistique casts the Main Skill or Support Skill.',
          shortDescription:
            'Energy Charge Efficiency increases when Mistique casts the Main Skill or Support Skill.',
          params: ['11%/15%/18%/22%/25%/29%/33%/36%/40%', '10', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Chaos Frenzy',
          icon: '13501_Potential_41',
          description:
            'When Mistique deals DMG with Midnight ★ Terror (Ultimate), increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When Mistique deals damage with the Ultimate, increases her Ultimate DMG.',
          params: ['Ultimate DMG', '11%/17%/23%/30%/36%/43%/49%/55%/62%', '2', '9'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Happy Face',
          icon: '13501_Potential_21',
          description:
            'Increases the duration of the magic circle by <color=#0abec5>3</color>s. \u000bAlso increases the &Param2& of Lanterna Phantoms by <color=#0abec5>&Param1&</color>.',
          shortDescription:
            'Increases the duration of the magic circle. Also increases the &Param2& of Lanterna Phantoms.',
          params: ['24%', 'Minion DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Reality Erosion',
          icon: '13501_Potential_22',
          description:
            'Increases the &Param3& of the Lanterna Phantoms summoned by the same magic circle by <color=#0abec5>&Param1&</color> each time, up to &Param2& times. The summoned Lanterna Phantoms also grow larger over time.',
          shortDescription:
            'Increases the size and &Param3& of the Lanterna Phantoms summoned by the same magic circle over time.',
          params: ['17.1%', '10', 'Minion DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Slumber Invitation',
          icon: '13501_Potential_23',
          description:
            "The magic circle's radius is increased, and it can pull in weak enemies. \u000bWhen a Lanterna Phantom in the circle explodes, increases its DMG by <color=#0abec5>&Param1&</color>.",
          shortDescription:
            "Increases the radius of the Support Skill's magic circle that can pull in targets. When a Lanterna Phantom in the circle explodes, increases its DMG.",
          params: ['43%', 'Minion DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Lucky Constitution',
          icon: '13501_Potential_24',
          description:
            'The magic circle will follow targets. \u000bWhen a Lanterna Phantom in the circle explodes, increases its DMG by <color=#0abec5>&Param1&</color>.',
          shortDescription:
            "The Support Skill's magic circle will follow targets. When a Lanterna Phantom in the circle explodes, increases its DMG.",
          params: ['43%', 'Minion DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'The Conjuring',
          icon: '13501_Potential_22',
          description:
            'Reduces the intervals between each summon of a Lanterna Phantom by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Reduces the intervals between each summon of a Lanterna Phantom.',
          params: ['6%/11%/16%/21%/25%/30%/35%/40%/45%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Wraith Haunting',
          icon: '13501_Potential_22',
          description: "Increases Lanterna Phantoms' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Lanterna Phantoms' &Param2&.",
          params: ['20%/32%/44%/56%/68%/80%/92%/104%/116%', 'Minion DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Twin Born',
          icon: 'Common_Potential_5',
          description:
            'There is a <color=#ec6d21>&Param1&</color> chance the Support Skill can summon one more Lanterna Phantom.',
          shortDescription:
            'There is a chance the Support Skill can summon one more Lanterna Phantom.',
          params: ['6%/9%/12%/15%/18%/21%/24%/27%/30%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Malice',
          icon: '13501_Potential_23',
          description:
            "Summoning Circle (Support Skill)'s magic circle deals <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra Skill DMG per sec.",
          shortDescription: "The Support Skill's magic circle will deal DMG over time.",
          params: ['47%/75%/103%/131%/159%/187%/215%/244%/272%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Solar Absorption',
          icon: 'Common_Potential_4',
          description:
            'Increases the &Param2& of targets within the magic circle by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the &Param2& of targets within the magic circle.',
          params: ['13%/21%/29%/37%/45%/53%/61%/69%/77%', 'Umbra DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Extra Perk',
          icon: 'Common_Potential_7',
          description:
            "When casting Summoning Circle (Support Skill), the main Trekker gains a shield equal to <color=#ec6d21>&Param1&</color> of Mistique's Base Max HP for &Param2&s.",
          shortDescription: 'When casting the Support Skill, the main Trekker gains a shield.',
          params: ['7%/10%/12%/14%/17%/19%/22%/24%/26%', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Shadow Shackle',
          icon: '13501_Potential_23',
          description:
            'When Mistique summons a Lanterna Phantom, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'When Mistique summons a Lanterna Phantom, increases her &Param4&.',
          params: ['4.6%/7.4%/10.2%/13%/15.8%/18.6%/21.4%/24.2%/27%', '5', '10', 'Minion DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Trending Lock',
          icon: '13501_Potential_24',
          description:
            'Midnight ★ Terror (Ultimate) can inflict ##Umbra Mark: Gloom#2018# and its DMG is increased by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'The Ultimate can inflict ##Umbra Mark: Gloom#2018# and its DMG is increased.',
          params: ['40%/64%/88%/112%/136%/160%/184%/208%/232%', 'Ultimate DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description:
                'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Behind the Scenes',
          icon: '13501_Potential_24',
          description: "Increases Umbra Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Umbra Trekkers' &Param2&.",
          params: ['115/154/192/230/269/307/346/384/422', 'DEF'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  nanoha: {
    id: 119,
    name: 'Nanoha',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that increases ATK SPD and dart count, with consecutive hits triggering additional AoE DMG.',
          potentials: [
            'Growth Tempest',
            'Blossom Flurry',
            'Gale Rage',
            'Phantom Follower',
            'Sun Chaser',
          ],
        },
        build2: {
          description:
            'A build that enhances dart attack range and enables multi-hit DMG, ideal for fighting large targets.',
          potentials: [
            'Whirling Blade',
            'Bloom Dance',
            'Blossom Shower',
            'Distant Prayer',
            'Splendid Vortex',
          ],
        },
      },
      support: {
        build1: {
          description:
            'An AoE build that triggers Ventus Marks when hitting multiple targets, reducing cooldown greatly.',
          potentials: [
            'Revitalizing Nourishment',
            'Gentle Thaw',
            'Shift Duty',
            'Tender Nurture',
            'Troubleshooting',
          ],
        },
        build2: {
          description:
            'A single-target build that continuously tracks and pursues targets, gradually increasing detonation DMG.',
          potentials: [
            'Floral Nexus',
            'Unfulfilled Enthusiasm',
            'Tender Care',
            'VIP Focus',
            'Regular Trim',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Sky Piercer',
          'Blooming Flowers',
          'Starlit Dash',
          'Blossom Rhyme',
          'Infinite Shade',
          'Wind Whispers',
        ],
      },
      supportGeneric: {
        potentials: [
          'United in Times',
          'Dance of Scattering Petals',
          'Tender Trap',
          'Blossom Rhyme',
          'Infinite Shade',
          'Wind Whispers',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Growth Tempest',
          icon: '11901_Potential_01',
          description:
            'After Nanoha deals DMG with Auto Attacks <color=#0abec5>3</color> times, deals an additional <color=#0abec5>&Param1& of ATK</color> as AoE Ventus DMG.',
          shortDescription:
            'After Nanoha deals multiple instances of Auto Attack DMG, deals additional AoE Ventus DMG.',
          params: ['9.4%/10.8%/12.2%/16.5%/17.8%/19.1%/21.7%/22.9%/24%/26.2%/28.1%/30%/31.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Blossom Flurry',
          icon: '11901_Potential_02',
          description:
            'Within 10s after casting Flowers Dance (Main Skill), Nanoha fires <color=#0abec5>3</color> additional shurikens with her Auto Attacks that can pierce through the target, each dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Auto Attack DMG.',
          shortDescription:
            'After casting the Main Skill, Nanoha fires additional shurikens with her Auto Attacks.',
          params: ['3.5%/4%/4.6%/6.1%/6.6%/7.1%/8.1%/8.5%/8.9%/9.8%/10.5%/11.2%/11.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Whirling Blade',
          icon: '11901_Potential_03',
          description:
            'The sunflower shuriken deals DMG multiple times, hitting targets once every <color=#0abec5>0.15</color>s.',
          shortDescription: 'The sunflower shuriken can deal DMG multiple times.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Bloom Dance',
          icon: '11901_Potential_04',
          description:
            "Increases sunflower shuriken's Attack Range by <color=#0abec5>50%</color> and its &Param1& by <color=#0abec5>&Param2&</color>.",
          shortDescription: "Increases sunflower shuriken's DMG and Attack Range.",
          params: ['Skill DMG', '66.7%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Gale Rage',
          icon: '11901_Potential_03',
          description:
            'Each time Nanoha throws the sunflower shuriken, increases &Param5& by <color=#ec6d21>&Param1&</color>, and &Param6& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            'Each time Nanoha throws the sunflower shuriken, increases &Param5& and &Param6&.',
          params: [
            '2.7%/3.6%/4.5%/5.4%/6.3%/7.2%/8.1%/9%/10%',
            '6%/10%/13%/17%/20%/24%/28%/31%/35%',
            '5',
            '3',
            'ATK SPD',
            'Auto Attack Damage',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Phantom Follower',
          icon: '11901_Potential_41',
          description:
            "Each mirror image on the battlefield increases Nanoha's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Each mirror image increases Nanoha's &Param2&.",
          params: ['12%/18%/25%/32%/39%/46%/53%/60%/67%', 'Auto Attack Damage'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Sun Chaser',
          icon: 'Common_Potential_10',
          description:
            'When Nanoha deals DMG, there is a 30% chance to increase her &Param4& by <color=#ec6d21>&Param1&</color> and &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When Nanoha deals DMG, there is a chance to increase her &Param4& and &Param5&.',
          params: [
            '20%/20%/27%/27%/33%/33%/40%/40%/45%',
            '10%/16%/21%/27%/33%/39%/45%/50%/56%',
            '5',
            'ATK SPD',
            'ATK',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Distant Prayer',
          icon: '11901_Potential_03',
          description:
            'The farther the sunflower shuriken is from Nanoha, the more DMG it deals, with a minimum increase of <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'The farther the sunflower shuriken is from Nanoha, the more DMG it deals.',
          params: ['16%/26%/36%/46%/56%/65%/75%/85%/95%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Splendid Vortex',
          icon: 'Common_Potential_Wind_1',
          description:
            'When Flowers Dance (Main Skill) triggers a ##Ventus Mark#1017#, increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription: 'When the Main Skill triggers ##Ventus Mark#1017#, increases &Param4&.',
          params: ['33%/52%/72%/91%/111%/130%/150%/169%/189%', '3', '3', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Sky Piercer',
          icon: '11901_Potential_01',
          description:
            'When casting Flowers Dance (Main Skill), increases &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'When casting the Main Skill, increases &Param3&.',
          params: ['15%/24%/33%/42%/51%/60%/69%/78%/87%', '10', 'ATK', '1'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Blossom Shower',
          icon: '11901_Potential_41',
          description:
            "When casting Flowers Dance (Main Skill), the clones fire non-returning sunflower shurikens, each dealing <color=#ec6d21>&Param1&</color> of Nanoha's ATK as Ventus Ultimate DMG.",
          shortDescription: 'When casting the Main Skill, the clones fire sunflower shurikens.',
          params: ['316%/506%/695%/885%/1074%/1264%/1453%/1643%/1833%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Starlit Dash',
          icon: 'Common_Potential_13',
          description:
            'Nanoha can dodge one more time.\u000bWhen dodging, increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'Nanoha can dodge one more time. Increases her &Param3& when dodging.',
          params: ['9.3%/14.9%/20.5%/26.1%/31.7%/37.3%/42.9%/48.5%/54.1%', '4', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Blooming Flowers',
          icon: 'Common_Potential_Wind_1',
          description:
            'When Nanoha triggers ##Ventus Mark#1017#, increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param4& times.',
          shortDescription: 'When Nanoha triggers ##Ventus Mark#1017#, increases her &Param3&.',
          params: ['2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%', '2', 'ATK', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      common: [
        {
          name: 'Blossom Rhyme',
          icon: 'Common_Potential_01',
          description:
            "The clones now follow the main Trekker into combat.\u000bIncreases the clones' DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            'The clones now follow the main Trekker into combat, their DMG increased.',
          params: ['10%/16%/22%/28%/34%/39%/45%/51%/57%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Infinite Shade',
          icon: '11901_Potential_41',
          description:
            "Increases Nanoha's &Param2& by <color=#ec6d21>&Param1&</color>.\u000bFlowers Thrice (Ultimate) will summon one additional mirror image. Up to 3 mirror images can exist at the same time.",
          shortDescription:
            "Increases Nanoha's &Param2&. The Ultimate will summon more mirror images.",
          params: ['34%/54%/75%/95%/116%/136%/156%/177%/197%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Wind Whispers',
          icon: 'Common_Potential_9',
          description:
            "Increases Nanoha's &Param3& by <color=#ec6d21>&Param2&</color>. \u000bAlso increases the duration of mirror images by <color=#ec6d21>&Param1&</color>s.",
          shortDescription: "Increases Nanoha's &Param3& and the duration of mirror images.",
          params: ['1/2/3/4/5/6/7/7/7', '7%/12%/16%/21%/25%/29%/34%/38%/43%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Revitalizing Nourishment',
          icon: '11901_Potential_21',
          description:
            'When casting Flowers Bloom (Support Skill), if the first round of shurikens deals DMG to <color=#0abec5>3 or more</color> targets, Nanoha will fire <color=#0abec5>1</color> additional round of shurikens.\u000bThis effect can only be triggered once per cast.',
          shortDescription:
            'When the Support Skill deals DMG to multiple targets, fires an additional round of shurikens.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Gentle Thaw',
          icon: '11901_Potential_22',
          description:
            'When Flowers Bloom (Support Skill) triggers ##Ventus Mark#1017#, causes an explosion that deals <color=#0abec5>&Param1&</color> Ventus Skill DMG and reduces Skill Cooldown by <color=#0abec5>&Param2&</color>s.\u000bThis effect can only be triggered <color=#0abec5>&Param3&</color> times per Skill cast.',
          shortDescription:
            'When the Support Skill triggers a ##Ventus Mark#1017#, causes an explosion and reduces Skill Cooldown.',
          params: [
            '14.2%/16.3%/18.5%/24.9%/26.9%/28.8%/32.8%/34.5%/36.2%/39.7%/42.5%/45.3%/48.2%',
            '3',
            '1',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Floral Nexus',
          icon: '11901_Potential_23',
          description:
            'Shurikens from Flowers Bloom (Support Skill) <color=#0abec5>follow</color> their targets, with DMG increased by <color=#0abec5>&Param1&</color>.',
          shortDescription:
            'Shurikens from the Support Skill follow their targets, dealing increased DMG.',
          params: ['27.3%', 'Skill DMG'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Unfulfilled Enthusiasm',
          icon: '11901_Potential_24',
          description:
            'Shurikens from Flowers Bloom (Support Skill) inflict Marks additionally, stacking up to <color=#0abec5>12</color> times.\u000bWhen the exploding sunflower disappears, it detonates all Marks, dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG. Each stack increases the DMG by <color=#0abec5>&Param2&</color>.',
          shortDescription:
            'The Support Skill can inflict Marks. When the exploding sunflower disappears, it detonates all Marks to deal DMG.',
          params: [
            '56.2%/64.6%/73%/98.3%/106.2%/114%/129.8%/136.5%/143.2%/156.7%/168%/179.2%/190.4%',
            '15%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Tender Nurture',
          icon: '11901_Potential_21',
          description:
            'When casting Flowers Bloom (Support Skill), increases DMG dealt to targets with HP above <color=#ec6d21>&Param1&%</color> by <color=#ec6d21>&Param2&</color>.',
          shortDescription: "Increases the Support Skill's DMG dealt to targets with higher HP.",
          params: [
            '90/90/70/70/50/50/30/30/30',
            '22%/35%/48%/61%/74%/87%/101%/114%/127%',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Troubleshooting',
          icon: 'Common_Potential_4',
          description:
            "When Flowers Bloom (Support Skill) deals DMG for the first time, increases Nanoha's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "When the Support Skill deals DMG for the first time, increases Nanoha's &Param1&.",
          params: ['Skill DMG', '3.7%/5.9%/8.1%/10.3%/12.5%/14.7%/16.9%/19.1%/21.3%', '5', '5'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Shift Duty',
          icon: '11901_Potential_41',
          description:
            "When an exploding sunflower is conjured, the clones fire 12 shurikens at nearby targets, each dealing <color=#ec6d21>&Param1&</color> of Nanoha's ATK as Ventus Minion DMG.",
          shortDescription:
            'When an exploding sunflower is conjured, the clones fire multiple small shurikens at nearby targets.',
          params: ['21.1%/33.8%/46.5%/59.2%/71.9%/84.5%/97.2%/109.9%/122.6%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'VIP Focus',
          icon: '11901_Potential_23',
          description:
            'Increases the DMG Flowers Bloom (Support Skill) dealt to elite or higher-tier targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            "Increases the Support Skill's DMG dealt to elite or higher-tier targets.",
          params: ['Skill DMG', '20%/33%/45%/57%/69%/81%/94%/106%/118%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Regular Trim',
          icon: '11901_Potential_22',
          description:
            'Increases the &Param2& of Flowers Bloom (Support Skill) by an additional <color=#ec6d21>&Param1&</color>.',
          shortDescription: "Increases the Support Skill's &Param2&.",
          params: ['51%/68%/85%/102%/119%/136%/153%/170%/187%', 'Resilience Break Efficiency'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Dance of Scattering Petals',
          icon: '11901_Potential_24',
          description:
            "When the main Trekker casts the Main Skill, increases Nanoha's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When the main Trekker casts the Main Skill, increases Nanoha's &Param1&.",
          params: ['ATK', '10%/16%/22%/28%/34%/40%/46%/52%/58%', '6'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Tender Trap',
          icon: '11901_Potential_24',
          description:
            'When an ally has full Energy, increases the DMG of Flowers Bloom (Support Skill) by <color=#ec6d21>&Param1&</color>.',
          shortDescription: "When an ally has full Energy, increases Nanoha's Support Skill DMG.",
          params: ['22%/35%/48%/61%/74%/87%/101%/114%/127%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Tender Care',
          icon: '11901_Potential_41',
          description:
            "When an exploding sunflower disappears, the clones fire 5 shurikens forward, each dealing <color=#ec6d21>&Param1& of Nanoha's ATK</color> as Ventus Skill DMG.",
          shortDescription:
            'When an exploding sunflower disappears, the clones fire multiple shurikens forward.',
          params: ['22.2%/35.5%/48.8%/62.1%/75.4%/88.7%/102.1%/115.4%/128.7%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'United in Times',
          icon: 'Common_Potential_15',
          description:
            "When Flowers Bloom (Support Skill) triggers a ##Ventus Mark#1017#, increases the squad's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription:
            "When the Support Skill triggers a ##Ventus Mark#1017#, increases the squad's &Param3&.",
          params: ['19%/30%/42%/53%/64%/75%/87%/98%/109%', '5', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
    },
  },
  nazuka: {
    id: 133,
    name: 'Nazuka',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          description:
            'A DPS build that significantly increases the duration and range of the wind.',
          potentials: [
            'Blooming Gale',
            'Everlasting Elegance',
            'Unyielding Leaves',
            'Wind Erosion Impact',
            'Gale Shield',
          ],
        },
        build2: {
          description:
            'A burst DPS build that allows the wind to pull monsters together and penetrate targets.',
          potentials: [
            'Fierce Arrow',
            'Spiral Vortex',
            'Whisper of Wind',
            "Gale's Might",
            'Storm Overturned',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A single-target build that consecutively generates petals that relentlessly track and attack targets.',
          potentials: [
            'Youth: Dazzling',
            'Youth: Hunting',
            'Youth: Blooming',
            'Youth: Weakness',
            'Youth: Annihilation',
          ],
        },
        build2: {
          description: 'An AoE build that creates a Flower Formation, synergizing with Ventus DMG.',
          potentials: [
            'Flower Formation: Waves',
            'Flower Formation: Turbulent',
            'Flower Formation: Blast',
            'Flower Formation: Convergence',
            'Flower Formation: Erosion',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Precision Control',
          'Gale Fading',
          'Willowy Grace',
          'Multi-Hurricane',
          "Aeolus's Blessing",
          'Maelstrom',
        ],
      },
      supportGeneric: {
        potentials: [
          'Almighty Leader',
          'Wind Demon Seed',
          'Self-Improvement',
          'Multi-Hurricane',
          "Aeolus's Blessing",
          'Maelstrom',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Blooming Gale',
          icon: '13301_Potential_01',
          description:
            "While Blooming Draught (Main Skill) is active, increases Nazuka's Movement SPD and Attack Range by <color=#0abec5>40%</color> and reduces the Attack Interval by <color=#0abec5>50%</color>.",
          shortDescription:
            "While the Main Skill is active, increases Nazuka's Movement SPD and Attack Range. Reduces the Main Skill's Attack Interval.",
          params: [
            'OnceAdditionalAttributeValue,NoLevel,13350111,AttributeType1,Enum,EAT',
            'OnceAdditionalAttributeValue,NoLevel,13350111,Value1,10KHdPct',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Everlasting Elegance',
          icon: '13301_Potential_02',
          description:
            'Increases the duration of Blooming Draught (Main Skill) by <color=#0abec5>100%</color>. When Blooming Draught is interrupted, its cooldown is partially refunded.',
          shortDescription:
            'Increases the duration of the Main Skill. If the Skill is interrupted, its cooldown is partially reduced.',
          params: [
            'OnceAdditionalAttributeValue,NoLevel,13350211,AttributeType1,Enum,EAT',
            'OnceAdditionalAttributeValue,NoLevel,13350211,Value1,10KHdPct',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Fierce Arrow',
          icon: '13301_Potential_03',
          description:
            'When the pinwheel from Blooming Draught (Main Skill) stops, unleashes a burst of piercing gale, dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG. It can trigger ##Ventus Mark#1017#.',
          shortDescription:
            'When the pinwheel stops, unleashes a burst of piercing gale, dealing DMG.',
          params: ['137%/158%/178%/240%/259%/278%/317%/333%/350%/383%/410%/438%/465%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Spiral Vortex',
          icon: '13301_Potential_04',
          description:
            "Blooming Draught (Main Skill) deals an additional <color=#0abec5>&Param1& of ATK x16</color> as Ventus Skill DMG in 2s, increasing the target's &Param4& by <color=#0abec5>&Param5&</color> for &Param2&s, up to &Param3& stacks. This effect also pulls in weak targets.",
          shortDescription:
            "The Main Skill deals additional DMG and increases the target's &Param4&. Also, the wind of the pinwheel can pull in weak targets.",
          params: [
            '5%/5.7%/6.5%/8.7%/9.4%/10.1%/11.5%/12.1%/12.7%/13.9%/14.9%/15.9%/16.9%',
            '6',
            '10',
            'Ventus DMG Taken',
            '1.5%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Wind Erosion Impact',
          icon: '13301_Potential_02',
          description:
            "Increases Blooming Draught (Main Skill)'s &Param1& by <color=#ec6d21>&Param2&</color>, and increases the target's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.",
          shortDescription:
            "Increases the &Param1& of the Main Skill and increases the targets' &Param3&.",
          params: [
            'Ventus DMG',
            '9%/14%/19%/24%/29%/34%/39%/44%/49%',
            'Ventus DMG Taken',
            '0.5%/0.8%/1.1%/1.4%/1.7%/2%/2.3%/2.6%/2.9%',
            '8',
            '10',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Gale Shield',
          icon: '13301_Potential_01',
          description:
            "While Blooming Draught (Main Skill) is active, increases Nazuka's &Param1& by <color=#ec6d21>&Param2&</color>. When she is hit, deals <color=#ec6d21>&Param3& of ATK</color> as Ventus Skill DMG to the attacker. This effect can only be triggered once per second.",
          shortDescription:
            "While the Main Skill is active, increases Nazuka's &Param1&. When hit, deals DMG to the attacker.",
          params: [
            'DEF',
            '50/67/84/101/118/134/151/168/185',
            '30%/49%/67%/85%/103%/122%/140%/158%/176%',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Unyielding Leaves',
          icon: '13301_Potential_01',
          description:
            'When Blooming Draught (Main Skill) is active, increases &Param1& by <color=#ec6d21>&Param2&</color> every second. Resets after the Skill ends.',
          shortDescription: 'When the Main Skill is active, &Param1& increases over time.',
          params: ['Skill DMG', '9%/14%/19%/25%/30%/35%/41%/46%/51%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Gale's Might",
          icon: '13301_Potential_03',
          description:
            'When casting Blooming Draught (Main Skill), increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When casting the Main Skill, increases &Param1&.',
          params: ['ATK', '10%/16%/22%/28%/34%/40%/46%/52%/58%', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Storm Overturned',
          icon: '13301_Potential_03',
          description:
            "Increases Nazuka's &Param3& by <color=#ec6d21>&Param4&</color>.\u000bWhen there are more than 1 target within the Main Skill's Attack Range, increases &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "Increases Nazuka's &Param3&. When there are more than 1 target within the Main Skill's Attack Range, increases &Param1&.",
          params: [
            'Skill DMG',
            '10%/16%/22%/29%/35%/41%/47%/53%/59%',
            'ATK',
            '5%/8%/11%/14%/17%/20%/23%/26%/29%',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Precision Control',
          icon: 'Common_Potential_Wind_1',
          description:
            "Increases Nazuka's &Param1& by <color=#ec6d21>&Param2&</color>. \u000bAromatic Tempest (Ultimate) can trigger ##Ventus Mark: Breeze#1017#.",
          shortDescription:
            "Increases Nazuka's &Param1&.\u000bThe Ultimate can trigger ##Ventus Mark#1017#.",
          params: [
            'Ventus DMG',
            '15%/24%/33%/42%/51%/60%/69%/78%/87%',
            '20.5%/26.6%/32.7%/38.8%/44.9%/51%/57.1%/63.2%/69.3%',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description:
                "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Whisper of Wind',
          icon: '13301_Potential_04',
          description:
            'When the pinwheel from Blooming Draught (Main Skill) stops, increases &Param1& by <color=#ec6d21>&Param2&</color> for 2s.',
          shortDescription:
            'After the Main Skill ends, increases &Param1& for a short period of time.',
          params: ['ATK', '60%/96%/132%/168%/204%/240%/276%/312%/348%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Willowy Grace',
          icon: 'Common_Potential_13',
          description:
            'Nazuka can dodge one more time.\u000bAfter dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'Nazuka can dodge one more time.\u000bIncreases her &Param1& after dodging.',
          params: ['ATK', '8%/13%/17%/22%/27%/31%/36%/41%/45%', '6'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Gale Fading',
          icon: 'Common_Potential_24',
          description:
            "When Wind Pellets deal DMG, there is a 30% chance to increase the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When Auto Attacks deal DMG, there is a chance to increase the target's &Param1&.",
          params: ['Ventus DMG Taken', '8%/13%/18%/23%/28%/33%/38%/43%/48%', '6'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Multi-Hurricane',
          icon: '13301_Potential_41',
          description:
            "Increases the Ultimate, Aromatic Tempest's DMG by <color=#ec6d21>&Param2&</color>. \u000bNazuka can summon 4 tornados per Ultimate cast.",
          shortDescription: 'Increases the Ultimate DMG and the number of tornados.',
          params: ['Ultimate DMG', '6%/10%/14%/17%/21%/25%/28%/32%/36%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Aeolus's Blessing",
          icon: '13301_Potential_41',
          description:
            "When casting Aromatic Tempest (Ultimate), increases Nazuka's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.\u000bIncreases the tornadoes' duration by 66%.",
          shortDescription:
            "When casting the Ultimate, increases Nazuka's &Param1& and the tornado's duration.",
          params: ['Ventus DMG', '22%/36%/49%/62%/75%/89%/102%/115%/129%', '18'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Maelstrom',
          icon: '13301_Potential_41',
          description:
            "Increases Aromatic Tempest (Ultimate)'s DMG by <color=#ec6d21>&Param2&</color>.\u000bWhen the tornado deals DMG, increases the target's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.",
          shortDescription:
            "Increases Ultimate's DMG. When the Ultimate deals DMG, increases the target's &Param3&.",
          params: [
            'Ultimate DMG',
            '8%/13%/18%/22%/27%/32%/37%/42%/46%',
            'Ventus DMG Taken',
            '1.2%/1.9%/2.6%/3.3%/4%/4.7%/5.4%/6.1%/6.8%',
            '18',
            '8',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Youth: Dazzling',
          icon: '13301_Potential_21',
          description:
            "When casting Bouquet Blast (Support Skill), continuously creates 18 Flower Petals at the Ventus Main Trekker's location, with each petal dealing <color=#0abec5>&Param1&</color> of Nazuka's ATK as Ventus Skill DMG and inflicting ##Ventus Mark: Breeze#2017#.",
          shortDescription:
            "When casting the Support Skill, continuously creates a dozen Flower Petals at the Ventus Main Trekker's location, each dealing DMG and inflicting ##Ventus Mark: Breeze#2017#.",
          params: ['11%/12.7%/14.4%/19.3%/20.9%/22.4%/25.5%/26.8%/28.2%/30.8%/33%/35.2%/37.4%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Youth: Hunting',
          icon: '13301_Potential_22',
          description:
            'Increases the &Param1& of Flower Petals by <color=#0abec5>&Param2&</color>, and they can follow targets.',
          shortDescription: 'Increases the &Param1& of Flower Petals, and they can follow targets.',
          params: ['Ventus DMG', '10%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Flower Formation: Waves',
          icon: '13301_Potential_23',
          description:
            'Increases the duration of Flower Formation by <color=#0abec5>50%</color>.\u000bWithin 8s after casting the skill, when another friendly Ventus unit deals DMG to a target outside Flower Formation, creates another ##Flower Formation#4004#. This effect can only be triggered once per second.',
          shortDescription:
            'Increases the duration of Flower Formation.\u000bAfter casting the skill, when another friendly Ventus unit deals DMG to a target outside Flower Formation, creates another ##Flower Formation#4004#.',
          params: [
            'Movement SPD',
            '-30%',
            '196%/225%/254%/342%/370%/397%/452%/475%/499%/545%/585%/624%/663%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4004: {
              id: 4004,
              name: 'Flower Formation',
              description:
                'Up to 3 Flower Formations can be present at the same time. Flower Formations of Bouquet Blast (Support Skill) can deal DMG to the same target no more than once per second.',
              params: [],
            },
          },
        },
        {
          name: 'Flower Formation: Turbulent',
          icon: '13301_Potential_24',
          description:
            "When another friendly Ventus unit deals DMG to targets caught in Flower Formation, Flower Formation deals an additional <color=#ec6d21>&Param1&</color> of Nazuka's ATK as AoE Ventus Skill DMG. This effect can only be triggered once per second, dealing DMG to the same target no more than once per second.",
          shortDescription:
            'When another friendly Ventus unit deals DMG to targets caught in Flower Formation, Flower Formation deals additional DMG.',
          params: ['182%/210%/237%/319%/345%/370%/421%/443%/465%/509%/545%/582%/618%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Youth: Weakness',
          icon: '13301_Potential_22',
          description:
            "When Flower Petals deal DMG, increases the targets' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When Flower Petals deal DMG, increases the targets' &Param1&.",
          params: ['Ventus DMG Taken', '1%/1.6%/2.2%/2.8%/3.4%/4%/4.6%/5.2%/5.8%', '3', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Youth: Annihilation',
          icon: '13301_Potential_21',
          description:
            'The Flower Petal has a 15% chance to kill a normal target immediately and its DMG is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'The Flower Petal has a chance to kill a normal target immediately and its DMG is increased.',
          params: ['Skill DMG', '20%/31%/43%/55%/66%/78%/90%/101%/113%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Youth: Blooming',
          icon: '13301_Potential_21',
          description:
            "Increases Flower Petal's DMG by <color=#ec6d21>&Param2&</color>.\u000bFor each Flower Petal created, increases Nazuka's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.",
          shortDescription:
            "Increases Flower Petal's DMG. \u000bFor each Flower Petal created, increases Nazuka's &Param3&.",
          params: [
            'Skill DMG',
            '6%/10%/14%/17%/21%/25%/28%/32%/36%',
            'Ventus DMG',
            '1.8%/2.9%/4%/5.1%/6.2%/7.3%/8.4%/9.5%/10.6%',
            '8',
            '12',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Flower Formation: Convergence',
          icon: '13301_Potential_23',
          description:
            "Increases Flower Formation's DMG by <color=#ec6d21>&Param2&</color>. When there are 2 or more targets caught in Flower Formation, increases its DMG by <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "Increases Flower Formation's DMG. When there are 2 or more targets caught in Flower Formation, increases its DMG.",
          params: [
            'Skill DMG',
            '15%/24%/33%/42%/51%/59%/68%/77%/86%',
            'Skill DMG',
            '10%/16%/22%/29%/35%/41%/47%/53%/59%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Flower Formation: Blast',
          icon: '13301_Potential_24',
          description:
            "Increases the Flower Formation's &Param2& by <color=#ec6d21>&Param3&</color>. When the Flower Formation dissipates, deals <color=#ec6d21>&Param1&</color> of Nazuka's ATK as AoE Ventus Skill DMG and inflicts ##Ventus Mark: Breeze#2017#.",
          shortDescription:
            "Increases the Flower Formation's &Param2&. When the Flower Formation dissipates, deals DMG and inflicts ##Ventus Mark: Breeze#2017#.",
          params: [
            '105%/168%/231%/294%/357%/420%/484%/547%/610%',
            'Ventus DMG',
            '29%/46%/64%/81%/98%/115%/133%/150%/167%',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Wind Demon Seed',
          icon: 'Common_Potential_Wind_1',
          description:
            "Increases Nazuka's &Param1& by <color=#ec6d21>&Param2&</color>. \u000bAromatic Tempest (Ultimate) can inflict ##Ventus Mark: Breeze#2017#.",
          shortDescription:
            "Increases Nazuka's &Param1&.\u000bThe Ultimate can inflict ##Ventus Mark: Breeze#2017#.",
          params: ['ATK', '20%/32%/44%/56%/68%/80%/92%/104%/116%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Flower Formation: Erosion',
          icon: '13301_Potential_23',
          description:
            "When Flower Formation deals DMG, increases the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When Flower Formation deals DMG, increases the target's &Param1&.",
          params: ['Ventus DMG Taken', '1.5%/2.4%/3.3%/4.2%/5.1%/6%/6.9%/7.8%/8.7%', '2', '10'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Self-Improvement',
          icon: 'Common_Potential_11',
          description:
            "When there is a Flower Formation on the battlefield, increases Nazuka's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "When there is a Flower Formation on the battlefield, increases Nazuka's &Param1&.",
          params: ['Skill DMG', '24%/38%/53%/67%/82%/96%/110%/125%/139%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Almighty Leader',
          icon: 'Common_Potential_15',
          description:
            "Increases all Vanguard and Versatile Ventus Trekkers' &Param1& by <color=#ec6d21>&Param2&</color> in the squad.",
          shortDescription:
            "Increases all Vanguard and Versatile Ventus Trekkers' &Param1& in the squad.",
          params: ['Ventus DMG', '16%/25%/35%/44%/54%/63%/73%/82%/92%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  nazuna: {
    id: 156,
    name: 'Nazuna',
    element: 'Terra',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that increases doll DMG and adds recovery, improving sustained combat capability.',
          potentials: [
            'Small Force',
            'Wobble Dance',
            'Cuddle of Terror',
            "Cutie's Rally",
            'Beat Maestro',
          ],
        },
        build2: {
          description:
            'A build that increases reload speed, allowing for more frequent activation of Whirlwind Shot.',
          potentials: [
            'Roll the Dice',
            'Graceful Turn',
            'Clean Sweep',
            'Fill the Gap',
            'Focus Fire',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that increases the probability of drawing a "penguin," throwing penguin statues and increases the main Trekker\'s DPS.',
          potentials: [
            'Bold Assertion',
            'Feel the Beat',
            'Jubilant Spin',
            'Feather Frenzy',
            'Twinkle Toss',
          ],
        },
        build2: {
          description:
            'A build that increases the probability of drawing a "heart," shoots heart arrows and enhances the main character\'s survivability.',
          potentials: [
            'Arrow of Affection',
            'Sweetheart Bloom',
            'Rain of Passion',
            "Love's True Strike",
            'Honeyed Arrow',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Touch of Nature',
          'Swiftstep',
          'Wily Wonder',
          'Operation: Pandemonium',
          'Balloonado',
          'Rocket Cart',
        ],
      },
      supportGeneric: {
        potentials: [
          'Lucky Drop',
          'Progressive Jackpot',
          'Double Delight',
          'Operation: Pandemonium',
          'Balloonado',
          'Rocket Cart',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Small Force',
          icon: '15601_Potential_01',
          description:
            "Significantly increases the penguin plushie's size and Movement SPD. When the penguin plushie deals DMG, increases the target's &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription:
            "Increases the penguin plushie's size and Movement SPD. When the penguin plushie deals DMG, increases the target's &Param1&.",
          params: ['Terra DMG Taken', '10%', '3', '5'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Wobble Dance',
          icon: '15601_Potential_02',
          description:
            'The penguin plushie dances while moving, dealing <color=#0abec5>&Param1& of ATK x11</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#. Also restores <color=#0abec5>&Param2&</color> HP to the main Trekker 5 times.',
          shortDescription:
            "The penguin plushie deals multiple instances of DMG and restores the main Trekker's HP.",
          params: ['1.7%/1.9%/2.2%/2.9%/3.1%/3.4%/3.8%/4%/4.2%/4.6%/4.9%/5.3%/5.6%', '1.6%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Roll the Dice',
          icon: '15601_Potential_03',
          description:
            "Nazuna's Auto Attacks have a <color=#0abec5>30%</color> chance to consume 2 ammo and fire <color=#0abec5>3</color> crossbow bolts.\u000bThe chance is increased to <color=#0abec5>50%</color> while Plushie Dance (Main Skill) is on cooldown.",
          shortDescription:
            "Nazuna's Auto Attacks have a chance to fire additional crossbow bolts. The chance is higher while the Main Skill is on cooldown.",
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Graceful Turn',
          icon: '15601_Potential_04',
          description:
            "When Nazuna reloads during an Auto Attack, she delivers a spinning shot, firing 6 tracking crossbow bolts, each dealing <color=#0abec5>&Param1& of ATK</color> as Terra Auto Attack DMG and inflicting ##Terra Mark: Earth Vein#2029#. When reloading, increases the squad's &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s.",
          shortDescription:
            "When Nazuna reloads during an Auto Attack, she delivers a spinning shot, firing multiple tracking crossbow bolts. Also increases the squad's &Param2&.",
          params: [
            '7.1%/8.1%/9.2%/12.4%/13.4%/14.4%/16.4%/17.2%/18.1%/19.8%/21.2%/22.6%/24%',
            'ATK',
            '10%',
            '4',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Cuddle of Terror',
          icon: '15601_Potential_05',
          description:
            "When the penguin plushie stops and pounces on the target. Also increases the penguin plushie's DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When the penguin plushie stops and pounces on the target. Also increases the penguin plushie's DMG.",
          params: ['43%/69%/94%/120%/146%/171%/197%/223%/249%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Cutie's Rally",
          icon: '15601_Potential_06',
          description:
            "While the penguin plushie is on the battlefield, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "While the penguin plushie is on the battlefield, increases the squad's &Param1&.",
          params: ['ATK', '19%/30%/41%/52%/64%/75%/86%/97%/108%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Beat Maestro',
          icon: 'Common_Potential_20',
          description:
            'When Nazuna reloads, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Nazuna reloads, increases her &Param1&.',
          params: ['Skill DMG', '12%/19%/26%/34%/41%/48%/55%/62%/70%', '5', '3'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Clean Sweep',
          icon: '15601_Potential_08',
          description:
            'When Nazuna performs an Auto Attack, there is a 20% chance to throw a golden egg, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Terra Auto Attack DMG and inflicting ##Terra Mark: Earth Vein#2029#.',
          shortDescription:
            'When Nazuna performs an Auto Attack, there is a chance to throw a golden egg, dealing AoE DMG.',
          params: ['21.5%/34%/47%/60%/73%/86%/99%/112%/125%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Fill the Gap',
          icon: 'Common_Potential_15',
          description:
            "When Nazuna reloads, increases support Trekkers' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription: "When Nazuna reloads, increases support Trekkers' &Param1&.",
          params: ['Skill DMG', '5%/7%/10%/13%/16%/19%/21%/24%/27%', '6', '5'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Swiftstep',
          icon: 'Common_Potential_13',
          description:
            "Nazuna can dodge one more time.\u000bWhen dodging, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "Nazuna can dodge one more time. When dodging, increases the squad's &Param1&.",
          params: ['ATK', '11%/17%/24%/30%/37%/43%/50%/56%/63%', '2'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Focus Fire',
          icon: 'Common_Potential_8',
          description:
            "While Plushie Dance (Main Skill) is on cooldown, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "While Nazuna's Main Skill is on cooldown, increases the squad's &Param1&.",
          params: ['ATK', '12%/19%/26%/33%/40%/47%/54%/61%/68%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Wily Wonder',
          icon: 'Common_Potential_14',
          description:
            "When Nazuna casts Plushie Dance (Main Skill), increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When Nazuna casts the Main Skill, increases the squad's &Param1&.",
          params: ['Terra DMG', '19%/30%/41%/52%/64%/75%/86%/97%/108%', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Touch of Nature',
          icon: 'Common_Potential_Earth_1',
          description: "Increases all Terra Trekkers' &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases all Terra Trekkers' &Param1&.",
          params: ['Mark DMG', '100%/170%/230%/290%/350%/420%/480%/540%/600%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Operation: Pandemonium',
          icon: 'Common_Potential_18',
          description:
            "When casting Dream Spiral (Ultimate), increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases the squad's &Param1&.",
          params: ['Skill Crit Rate', '14%/18%/23%/27%/32%/36%/41%/45%/50%', '15'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Balloonado',
          icon: '15601_Potential_41',
          description:
            'While Nazuna spins during Dream Spiral, she pulls in nearby targets. Also increases her Ultimate DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'While Nazuna spins during the Ultimate, she pulls in nearby targets. Also increases her Ultimate DMG.',
          params: ['Ultimate DMG', '43%/69%/95%/120%/146%/172%/198%/224%/249%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Rocket Cart',
          icon: '15601_Potential_41',
          description:
            "When Dream Spiral (Ultimate) deals DMG, there is a 30% chance to increase the targets' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "When the Ultimate deals DMG, there is a chance to increase the target's &Param1&.",
          params: ['Terra DMG Taken', '15%/23%/32%/41%/49%/58%/67%/75%/84%', '5', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Bold Assertion',
          icon: '15601_Potential_21',
          description:
            "Enhances Kiss of Penguin, increasing the squad's &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s. \u000bThe penguin statue now launches 10 attacks.",
          shortDescription:
            'Enhances Kiss of Penguin. The penguin statue now launches more attacks.',
          params: [
            'ATK',
            '24.2%/31.9%/39.6%/61.6%/68.2%/74.8%/89.1%/94.6%/101.2%/113.3%/122.1%/132%/141.9%',
            '3.5',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Feel the Beat',
          icon: '15601_Potential_22',
          description:
            "The chance to draw penguins in raffles is <color=#0abec5>greatly increased</color>. When the penguin statue deals DMG, increases the target's &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, up to &Param4& stacks. Also increases the penguin statue's Attack Range.",
          shortDescription:
            "The chance to draw penguins in raffles is greatly increased. When the penguin statue deals DMG, increases the target's &Param1&. Also increases the penguin statue's Attack Range.",
          params: ['Terra DMG Taken', '5%', '3.5', '5'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Arrow of Affection',
          icon: '15601_Potential_23',
          description:
            'The chance to draw hearts in raffles is <color=#0abec5>greatly increased</color>. The heart arrow can ricochet for <color=#0abec5>1</color> time.',
          shortDescription:
            'The chance to draw hearts in raffles is greatly increased. The heart arrow can ricochet.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Sweetheart Bloom',
          icon: '15601_Potential_24',
          description:
            "Enhances the effects of Kiss of Love: Increases the squad's &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s.\u000bAfter a Heart Arrow explodes, nearby targets are pulled in and a <color=#0abec5>secondary explosion</color> is triggering.",
          shortDescription:
            'Enhances Kiss of Heart. The heart arrow now triggers a second explosion.',
          params: ['Terra DMG', '12%/17%/20%/32%/35%/39%/45%/48%/52%/57%/63%/68%/73%', '3.5'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Feather Frenzy',
          icon: '15601_Potential_21',
          description:
            'When unleashing a barrage, if more penguins than hearts are drawn in this baffle, this barrage deals an additional <color=#ec6d21>&Param1& of ATK</color> as AoE Terra DMG.',
          shortDescription:
            'When unleashing a barrage, if more penguins than hearts are drawn in this baffle, Nazuna deals additional AoE DMG.',
          params: ['2.98%/4.8%/6.6%/8.4%/10.1%/11.9%/13.7%/15.5%/17.3%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Jubilant Spin',
          icon: 'Common_Potential_20',
          description:
            "After the penguin statue from the raffle appears, Nazuna unleashes a barrage and the main Trekker's &Param1& is increased by <color=#fb8037>&Param2&</color> for &Param3&s.",
          shortDescription:
            "After the penguin statue from the raffle appears, Nazuna unleashes a barrage and the main Trekker's &Param1& is increased.",
          params: ['Skill DMG', '13%/21%/29%/37%/45%/53%/61%/69%/76%', '7'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Twinkle Toss',
          icon: 'Common_Potential_5',
          description:
            'Upon vanishing, the penguin statue explodes, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#.',
          shortDescription: 'Upon vanishing, the penguin statue explodes.',
          params: ['30%/49%/67%/85%/103%/122%/140%/158%/176%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: "Love's True Strike",
          icon: 'Common_Potential_10',
          description:
            "When unleashing a barrage, if more hearts than penguins are drawn in this baffle, the crossbow bolts will pierce through targets.\u000bWhen the barrage deals DMG, increases the target's &Param1& by <color=#fb8037>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When unleashing a barrage, if more hearts than penguins are drawn in this baffle, the crossbow bolts will pierce through targets. When dealing DMG, increases the target's &Param1&.",
          params: ['Terra DMG Taken', '13%/17%/22%/26%/30%/35%/39%/43%/47%', '7'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Honeyed Arrow',
          icon: 'Common_Potential_7',
          description:
            "Increases the barrage and heart arrow's DMG by <color=#fb8037>&Param1&</color>. The heart arrow now restores 90% more HP.",
          shortDescription:
            "Increases the barrage and heart arrow's DMG. The heart arrow now restores more HP.",
          params: ['5%/8%/11%/14%/17%/20%/23%/26%/29%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Lucky Drop',
          icon: 'Common_Potential_11',
          description:
            "When Nazuna is on the battlefield, increases all Terra Trekkers' &Param1& by <color=#fb8037>&Param2&</color>.",
          shortDescription:
            "When Nazuna is on the battlefield, increases all Terra Trekkers' &Param1&.",
          params: ['Terra DMG', '26%/42%/57%/73%/88%/104%/120%/135%/151%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Rain of Passion',
          icon: 'Common_Potential_19',
          description:
            "After firing the heart arrow, Nazuna unleashes a barrage and increases the main Trekker's &Param1& by <color=#fb8037>&Param2&</color> for &Param3&s.",
          shortDescription:
            "After firing the heart arrow, Nazuna unleashes a barrage and increases the main Trekker's &Param1&.",
          params: ['Terra DMG', '13%/20%/28%/35%/43%/50%/58%/65%/73%', '7'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Progressive Jackpot',
          icon: 'Common_Potential_9',
          description:
            "During raffles, increases Nazuna's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription: "During raffles, increases Nazuna's &Param1&.",
          params: ['ATK', '5%/8%/11%/15%/18%/21%/24%/27%/30%', '7', '3'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Double Delight',
          icon: 'Common_Potential_15',
          description:
            "If the last 2 raffles are full penguins or full hearts, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "If the last 2 raffles are full penguins or full hearts, increases the squad's &Param1&.",
          params: ['Terra DMG', '22%/35%/48%/61%/74%/87%/100%/113%/126%', '10'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  noya: {
    id: 112,
    name: 'Noya',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          description: 'An AoE build that transforms skills into multi-phase attacks with slashes.',
          potentials: [
            'Slash: Dual Strike!',
            'Slash: Chain Slash!',
            'Triple Blinks',
            'Wind Slash',
            'Cloud Swirl',
          ],
        },
        build2: {
          description:
            'A ranged control build that enables ranged Auto Attacks after casting a skill.',
          potentials: [
            'Slash: Windfury!',
            'Slash: Blade Storm!',
            'Pebble Storm',
            'Flurry Stance',
            'Sandstorm Crush',
          ],
        },
      },
      support: {
        build1: {
          description: 'An AoE build that boosts the range and DMG of sword auras.',
          potentials: [
            'Gallop: Flurry!',
            'Gallop: Squall!',
            'Corrosive Breeze',
            'Wind Glaive',
            'Leaf Barrier',
          ],
        },
        build2: {
          description:
            'A focused build that increases the number of sword auras and allows them to split.',
          potentials: [
            'Gallop: Cyclone!',
            'Gallop: Gale!',
            'Dancing Airflow',
            'Gathering Storm',
            'Fierce Essence',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          "Hero's Instinct",
          'Sunset Clouds',
          'Blade Dominance',
          'Mist Banisher',
          'Space Splitter',
          'Choreographed Assault',
        ],
      },
      supportGeneric: {
        potentials: [
          'Charged Circulation',
          'Cyclone Blades',
          'Rupture Circulation',
          'Mist Banisher',
          'Space Splitter',
          'Choreographed Assault',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Slash: Dual Strike!',
          icon: '11201_Potential_01',
          description:
            'Adds Dragon Slash as the second phase of the Main Skill, dealing <color=#0abec5>&Param1& of ATK x3</color>/<color=#0abec5>&Param2& of ATK</color> as Ventus Skill DMG.',
          shortDescription: 'Adds Dragon Slash as the second phase of the Main Skill.',
          params: [
            '38%/41%/45%/56%/60%/64%/71%/75%/79%/86%/90%/94%/98%',
            '146%/161%/175%/219%/233%/248%/277%/292%/306%/336%/350%/365%/379%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Slash: Chain Slash!',
          icon: '11201_Potential_02',
          description:
            "Increases Noya's &Param3& by <color=#0abec5>&Param2&</color>.\u000bAfter casting Sonic Slash (Main Skill) or Dragon Slash, Noya immediately casts Devastating Wind, dealing <color=#0abec5>&Param1& of ATK x4</color> as Ventus Skill DMG.",
          shortDescription:
            "Increases Noya's &Param3&. After casting the Main Skill, automatically casts Devastating Wind.",
          params: [
            '20.1%/22.1%/24.1%/30.2%/32.2%/34.2%/38.2%/40.2%/42.2%/46.2%/48.2%/50.3%/52.3%',
            '11.3%',
            'Skill DMG',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Slash: Windfury!',
          icon: '11201_Potential_03',
          description:
            'When Noya deals DMG with an Auto Attack, there is a 30% chance to cast ##Multi Sword Aura#1054#, dealing <color=#0abec5>&Param1& of ATK x5</color> as Ventus Auto Attack DMG and granting Noya &Param2& Energy. This effect can only be triggered once per second.',
          shortDescription:
            'When Noya deals DMG with an Auto Attack, there is a chance to cast ##Multi Sword Aura#1054#.',
          params: [
            '7%/7.7%/8.4%/10.5%/11.2%/11.9%/13.2%/13.9%/14.6%/16%/16.7%/17.4%/18.1%',
            '1.93',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1054: {
              id: 1054,
              name: 'Multi Sword Aura',
              description:
                "Create a sword aura sphere at the enemy's position, dealing multi-hit area of effect DMG.",
              params: [],
            },
          },
        },
        {
          name: 'Slash: Blade Storm!',
          icon: '11201_Potential_04',
          description:
            'After casting Sonic Slash (Main Skill), Auto Attacks become sword aura Attacks for 6s. Each sword aura deals <color=#0abec5>&Param1& of ATK</color> as Ventus Auto Attack DMG.',
          shortDescription:
            'After casting the Main Skill, Auto Attacks become sword aura Attacks for a period of time.',
          params: ['11.9%/13.1%/14.2%/17.8%/19%/20.2%/22.6%/23.7%/24.9%/27.3%/28.5%/29.7%/30.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Wind Slash',
          icon: '11201_Potential_01',
          description:
            'When Noya launches the final strike of Auto Attack or Devastating Wind, unleashes multiple sword auras.\nEach sword aura deals <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG.',
          shortDescription:
            'Noya will unleash extra sword auras during the final strike of Auto Attack and Devastating Wind.',
          params: ['8.3%/11%/13.8%/16.5%/19.3%/22%/24.8%/27.5%/30.3%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Triple Blinks',
          icon: '11201_Potential_01',
          description:
            'When casting Sonic Slash (Main Skill) or Dragon Slash, unleashes multiple sword auras.\nEach sword aura deals <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG.',
          shortDescription: 'Skills can unleash extra sword auras.',
          params: ['11.5%/15.3%/19.1%/22.9%/26.8%/30.6%/34.4%/38.2%/42%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Cloud Swirl',
          icon: '11201_Potential_01',
          description:
            'When Sonic Slash (Main Skill) hits a target, increases &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s.',
          shortDescription: 'When the Main Skill hits a target, increases &Param2&.',
          params: ['12%/20%/27%/34%/41%/49%/56%/63%/71%', 'ATK', '5'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Flurry Stance',
          icon: '11201_Potential_03',
          description:
            'Within 7s after Noya casts Sonic Slash (Main Skill) or Dragon Slash, each Auto Attack increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'After casting the Main Skill, increases the speed of Auto Attacks.',
          params: ['ATK SPD', '1.4%/1.9%/2.4%/2.9%/3.4%/3.9%/4.4%/4.9%/5.4%', '4', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Sandstorm Crush',
          icon: '11201_Potential_01',
          description:
            'When Noya deals DMG with an Auto Attack, increases her Ultimate DMG by <color=#ec6d21>&Param1&</color>, stacking up to 10 times. Resets after casting an Ultimate.',
          shortDescription: 'When Noya deals DMG with an Auto Attack, increases her Ultimate DMG.',
          params: ['3.6%/5.8%/8%/10.2%/12.4%/14.6%/16.8%/19%/21.2%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Sunset Clouds',
          icon: 'Common_Potential_4',
          description:
            "When Noya deals DMG, reduces the target's Resilience by <color=#ec6d21>&Param1&</color>. This effect can only be triggered once every 10s.",
          shortDescription: "When Noya deals DMG, reduces the target's Resilience.",
          params: ['4.8%/6.4%/8%/9.6%/11.2%/12.8%/14.4%/16%/17.6%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Pebble Storm',
          icon: 'Common_Potential_4',
          description:
            'When Noya deals DMG to the same target, increases her Auto Attack DMG to the target by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Noya deals DMG to the same target, increases her Auto Attack DMG.',
          params: ['1.7%/2.7%/3.7%/4.7%/5.7%/6.7%/7.7%/8.7%/9.7%', '3', '10', 'Auto Attack Damage'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Blade Dominance',
          icon: '11201_Potential_04',
          description:
            'Noya can dodge through barriers.\u000bIncreases her &Param2& to distant targets by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'Noya can dodge through barriers. Increases her &Param2& to distant targets.',
          params: ['17%/27%/38%/48%/58%/69%/79%/89%/100%', 'Auto Attack Damage'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Hero's Instinct",
          icon: 'Common_Potential_2',
          description:
            'Noya can dodge one more time.\u000bIncreases her &Param2& to nearby targets by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'Noya can dodge one more time. Increases her &Param2& to nearby targets.',
          params: ['12%/19%/26%/33%/40%/47%/55%/62%/69%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Mist Banisher',
          icon: '11201_Potential_41',
          description:
            'When Skyshatter Rend kills a target, Noya gains <color=#ec6d21>&Param1&</color> Energy. This effect can only be triggered 5 times per Ultimate cast.',
          shortDescription: 'When the Ultimate kills a target, gains Energy.',
          params: ['7/9/12/14/16/19/21/23/25'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Space Splitter',
          icon: '11201_Potential_41',
          description:
            "When casting Skyshatter Rend (Ultimate), increases the squad's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When casting the Ultimate, increases the squad's &Param3&.",
          params: ['21%/33%/45%/58%/70%/83%/95%/107%/120%', '10', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Choreographed Assault',
          icon: '11201_Potential_41',
          description:
            "When Skyshatter Rend (Ultimate) deals DMG, increases Noya's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When the Ultimate deals DMG, increases Noya's &Param1&.",
          params: ['ATK', '22%/35%/48%/61%/74%/87%/101%/114%/127%', '10', '3'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Gallop: Flurry!',
          icon: '11201_Potential_21',
          description: 'Unleashes <color=#0abec5>1</color> additional major sword aura.',
          shortDescription: 'Unleashes more major sword auras.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Gallop: Squall!',
          icon: '11201_Potential_22',
          description:
            'Major sword auras become cross major sword auras, dealing an additional <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG.',
          shortDescription: 'Major sword auras become cross major sword auras.',
          params: ['35%/39%/42%/53%/56%/60%/67%/70%/74%/81%/84%/88%/92%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Gallop: Cyclone!',
          icon: '11201_Potential_23',
          description:
            'When the minor sword aura deals DMG for the first time, it splits into <color=#0abec5>3</color> even smaller sword auras, each dealing <color=#0abec5>&Param1& of ATK</color> as Ventus Skill DMG.',
          shortDescription:
            'When the minor sword aura deals DMG for the first time, it splits into even smaller sword auras.',
          params: ['2%/2.2%/2.4%/3.1%/3.3%/3.5%/3.9%/4.1%/4.3%/4.7%/4.9%/5.1%/5.3%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Gallop: Gale!',
          icon: '11201_Potential_24',
          description: 'Can cast <color=#0abec5>4</color> additional minor sword auras.',
          shortDescription: 'Can cast additional minor sword auras.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Corrosive Breeze',
          icon: '11201_Potential_21',
          description:
            "Increases the major sword auras' DMG to targets inflicted with ##Ventus Mark: Breeze#2017# by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When casting Gale Storm, increases the major sword auras' &Param2& to the targets with ##Ventus Mark: Breeze#2017#.",
          params: ['16%/25%/34%/43%/53%/62%/71%/81%/90%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Wind Glaive',
          icon: '11201_Potential_21',
          description:
            "Increases major sword auras' Attack Range, and increases their DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases major sword auras' Attack Range and &Param2&.",
          params: ['23%/37%/51%/65%/79%/93%/107%/121%/135%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Leaf Barrier',
          icon: '11201_Potential_21',
          description:
            "Increases major sword auras' DMG by <color=#ec6d21>&Param1&</color>. Also slightly reduces the target's Movement SPD.",
          shortDescription:
            "Increases major sword auras' DMG. Also reduces the target's Movement SPD.",
          params: ['14%/22%/30%/39%/47%/55%/64%/72%/80%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Gathering Storm',
          icon: 'Common_Potential_Wind_1',
          description:
            "Increases minor sword auras' DMG by <color=#ec6d21>&Param1&</color>. Also triggers ##Ventus Mark: Breeze#2017#.",
          shortDescription:
            "Increases minor sword auras' DMG. They can also trigger ##Ventus Mark: Breeze#2017#.",
          params: ['14%/23%/32%/40%/49%/57%/66%/75%/83%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Fierce Essence',
          icon: '11201_Potential_23',
          description:
            "Increases Noya's &Param3& by <color=#ec6d21>&Param2&</color>.\u000bWhen Gale Storm (Support Skill) kills a target, its cooldown is reduced by <color=#ec6d21>&Param1&</color>s.",
          shortDescription:
            "Increases Noya's &Param3&. When killing a target with the Support Skill, reduces its Cooldown.",
          params: ['4/4/5/5/7/7/8/8/9', '10%/16%/22%/28%/34%/40%/46%/52%/58%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Cyclone Blades',
          icon: 'Common_Potential_12',
          description:
            'When Noya triggers ##Ventus Mark: Breeze#2017#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When Noya triggers ##Ventus Mark: Breeze#2017#, increases her &Param1&.',
          params: ['ATK', '9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%', '4'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Dancing Airflow',
          icon: 'Common_Potential_01',
          description:
            'Increases DMG of Gale Storm (Support Skill) by <color=#ec6d21>&Param1&</color>.\u000bNoya casts minor sword auras faster.',
          shortDescription: "Increases the Support Skill's DMG. Casts minor sword auras faster.",
          params: ['21%/34%/47%/60%/73%/85%/98%/111%/124%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Rupture Circulation',
          icon: '11201_Potential_24',
          description:
            'When Gale Storm (Support Skill) deals DMG to elite or higher-tier targets, increases its &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'The Support Skill deals higher DMG to elite or higher-tier targets.',
          params: ['19%/31%/42%/54%/65%/77%/88%/100%/111%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Charged Circulation',
          icon: 'Common_Potential_Wind_1',
          description:
            'When Noya triggers ##Ventus Mark: Breeze#2017#, restores <color=#ec6d21>&Param1&</color> Energy for a random support Trekker. This effect can only be triggered once every 7s.',
          shortDescription:
            'When Noya triggers ##Ventus Mark: Breeze#2017#, restores Energy for a random support Trekker.',
          params: ['8/11/14/17/19/22/25/28/31'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description:
                'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
      ],
    },
  },
  ridge: {
    id: 116,
    name: 'Ridge',
    element: 'Terra',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that summons plants to attack nearby targets upon skill activation.',
          potentials: [
            'Let Nature Thrive',
            "Nature's Guard",
            'Twin Sprouts',
            'Overgrowth',
            'Vine Snare',
          ],
        },
        build2: {
          description:
            'A build that boosts ATK SPD and frequently triggers bullet effects upon skill activation.',
          potentials: [
            'A Fortunate Yield',
            'Tangled Mess',
            'Wild Growth',
            'Bursting Pod',
            'Hardened Cone',
          ],
        },
      },
      support: {
        build1: {
          description: 'A DPS build that boosts the DMG and hit count of skills.',
          potentials: [
            'Reblossom',
            'Sense the Stir',
            'Bouquet Blast',
            'Needle Seed',
            'Corrosive Vines',
          ],
        },
        build2: {
          description: 'A build that delays skill spread to trigger Mark DMG.',
          potentials: [
            'Hasty Growth',
            'Misplaced Bloom',
            'Cone Bomb',
            'Sturdy Foundation',
            'Root Grasp',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Verdant Vigor',
          'Power Slide',
          'Full Bloom',
          'Seed to Harvest',
          "Spring's Embrace",
          'Sow and Reap',
        ],
      },
      supportGeneric: {
        potentials: [
          'Small Changes',
          'Ensnaring Ground',
          'Turn the Tide',
          'Seed to Harvest',
          "Spring's Embrace",
          'Sow and Reap',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Let Nature Thrive',
          icon: '11601_Potential_01',
          description: 'Bean Cyclone (Main Skill) tosses <color=#0abec5>1</color> additional seed.',
          shortDescription: 'The Main Skill tosses additional seeds.',
          params: ['150%/165%/180%/225%/240%/255%/285%/300%/315%/345%/360%/375%/390%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: "Nature's Guard",
          icon: '11601_Potential_02',
          description:
            'Seeds from Bean Cyclone (Main Skill) will transform into Bean Shooters, which continuously throw seeds to deal <color=#0abec5>&Param1& of ATK</color> as Terra Skill DMG for 8s.',
          shortDescription:
            'Seeds from the Main Skill will transform into Bean Shooters, which continuously throw seeds to deal DMG.',
          params: ['11.1%/12.2%/13.3%/16.7%/17.8%/18.9%/21.1%/22.2%/23.3%/25.5%/26.7%/27.8%/28.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'A Fortunate Yield',
          icon: '11601_Potential_03',
          description:
            'For every 12 energy rounds fired with Sprout Round, the next Auto Attack fires 1 gigantic energy round, with its Attack Range increased by <color=#0abec5>100%</color> and dealing <color=#0abec5>&Param1& of ATK</color> as Terra Auto Attack DMG.',
          shortDescription:
            'For every set number of energy rounds fired, the next Auto Attack fires 1 gigantic energy round.',
          params: ['38%/41%/45%/57%/60%/64%/72%/75%/79%/87%/90%/94%/98%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Tangled Mess',
          icon: '11601_Potential_04',
          description:
            "Increases Ridge's &Param1& by <color=#0abec5>&Param2&</color>. Each Auto Attack fires <color=#0abec5>2</color> additional energy rounds.",
          shortDescription:
            "Increases Ridge's &Param1&. Her Auto Attacks fire additional energy rounds.",
          params: ['Auto Attack Damage', '29%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Overgrowth',
          icon: '11601_Potential_01',
          description:
            "Increases Bean Cyclone (Main Skill)'s DMG by <color=#ec6d21>&Param2&</color> and the seeds' Attack Range by <color=#ec6d21>35%</color>.",
          shortDescription: "Increases Main Skill DMG and the seeds' Attack Range.",
          params: ['Skill DMG', '15%/23%/32%/41%/50%/59%/67%/76%/85%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Vine Snare',
          icon: '11601_Potential_02',
          description:
            "The Movement SPD reduction from Bean Cyclone (Main Skill)'s seeds can stack up to 3 times. Once fully stacked, increases Ridge's DMG to the affected target by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "The Movement SPD reduction from seeds can stack up. Once fully stacked, increases Ridge's DMG to the affected target.",
          params: ['Terra DMG Taken', '12%/19%/26%/34%/41%/48%/55%/62%/70%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Twin Sprouts',
          icon: '11601_Potential_02',
          description:
            "Increases Bean Cyclone (Main Skill)'s DMG by <color=#ec6d21>&Param2&</color>. Bean Cyclone and Bean Shooter have a 50% chance to toss 1 additional seed.",
          shortDescription:
            'Increases Main Skill DMG. \u000bThe Main Skill and Bean Shooter have a chance to toss more seeds.',
          params: ['Skill DMG', '11%/17%/24%/30%/37%/43%/50%/56%/63%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Bursting Pod',
          icon: '11601_Potential_04',
          description:
            "Increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color> and the Attack Range of her energy rounds by 30%.",
          shortDescription: "Increases Ridge's &Param1& and the Attack Range of her energy rounds.",
          params: ['Auto Attack Damage', '21%/34%/47%/60%/73%/85%/98%/111%/124%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Hardened Cone',
          icon: '11601_Potential_04',
          description:
            "Increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color> and her Auto Attack's &Param3& by an additional <color=#ec6d21>&Param4&</color>.",
          shortDescription: "Increases Ridge's &Param1& and her Auto Attack's &Param3&.",
          params: [
            'Auto Attack Damage',
            '11%/17%/24%/30%/36%/43%/49%/56%/62%',
            'Resilience Break Efficiency',
            '30%/40%/50%/61%/71%/81%/91%/101%/111%',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Power Slide',
          icon: 'Common_Potential_2',
          description:
            'Ridge can dodge one more time. When dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Ridge can dodge one more time. Increases her &Param1& when dodging.',
          params: ['Auto Attack Damage', '21%/34%/47%/60%/73%/85%/98%/111%/124%', '8', '1'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Verdant Vigor',
          icon: 'Common_Potential_Earth_1',
          description:
            'Harvest Rhapsody (Ultimate) can trigger ##Terra Mark: Earth Vein#2029#.\u000bWhen the Ultimate triggers ##Terra Mark: Earth Vein#2029#, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            'The Ultimate can trigger ##Terra Mark: Earth Vein#2029#.\u000bWhen the Ultimate triggers ##Terra Mark: Earth Vein#2029#, increases her &Param1&.',
          params: ['ATK', '10%/15%/21%/27%/33%/39%/44%/50%/56%', '15', '6'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Wild Growth',
          icon: '11601_Potential_03',
          description:
            "Increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bBean Cyclone (Main Skill)'s Auto Attack Enhancement lasts 50% longer.",
          shortDescription:
            "Increases Ridge's &Param1& and the duration of her Main Skill's Auto Attack Enhancement.",
          params: ['Auto Attack Damage', '26%/41%/56%/71%/87%/102%/117%/133%/148%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Full Bloom',
          icon: 'Common_Potential_20',
          description:
            "Increases Ridge's DMG to distant targets by <color=#ec6d21>&Param2&</color>, and enhances the knockback of the shovel cannon.",
          shortDescription:
            "Increases Ridge's DMG to distant targets and enhances the knockback of the shovel cannon.",
          params: ['Terra DMG', '8%/12%/17%/22%/26%/31%/35%/40%/45%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Seed to Harvest',
          icon: '11601_Potential_41',
          description:
            "Increases DMG of Harvest Rhapsody (Ultimate) by <color=#ec6d21>&Param2&</color>, and enhances the final strike's &Param3& by an additional <color=#ec6d21>&Param4&</color>.",
          shortDescription:
            "Increases Ultimate DMG and enhances the final strike's ability to break resilience.",
          params: [
            'Ultimate DMG',
            '34%/55%/75%/96%/116%/137%/157%/178%/198%',
            'Resilience Break Efficiency',
            '100%/170%/230%/290%/350%/420%/480%/540%/610%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Spring's Embrace",
          icon: '11601_Potential_41',
          description:
            "When Harvest Rhapsody (Ultimate) deals DMG, increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color>, stacking up to &Param3& times. Resets when the Ultimate ends.",
          shortDescription: "When the Ultimate deals DMG, increases Ridge's &Param1&.",
          params: ['Ultimate DMG', '6%/9%/13%/16%/19%/23%/26%/30%/33%', '5'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Sow and Reap',
          icon: '11601_Potential_41',
          description:
            "When casting Harvest Rhapsody (Ultimate), increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases Ridge's &Param1&.",
          params: ['ATK', '35%/56%/77%/98%/120%/140%/160%/180%/200%', '15'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Reblossom',
          icon: '11601_Potential_21',
          description: 'Floral Storm (Support Skill) automatically casts again after one cast.',
          shortDescription: 'After casting the Support Skill, can automatically cast again.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Sense the Stir',
          icon: '11601_Potential_22',
          description:
            "Increases DMG of Floral Storm (Support Skill)'s seed shower by <color=#0abec5>&Param2&</color>, and reduces its Attack Interval by <color=#0abec5>30%</color>.",
          shortDescription:
            "Increases the DMG of the Support Skill's seed shower and reduces its Attack Interval.",
          params: ['Terra DMG', '9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Hasty Growth',
          icon: '11601_Potential_23',
          description:
            "Increases Seed Orb's duration by <color=#0abec5>50%</color> and its DMG by <color=#0abec5>&Param2&</color>. Can also inflict ##Terra Mark: Earth Vein#2029#.",
          shortDescription:
            "Increases Seed Orb's duration and DMG. Can also inflict ##Terra Mark: Earth Vein#2029#.",
          params: ['Skill DMG', '50%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Misplaced Bloom',
          icon: '11601_Potential_24',
          description:
            "Increases Seed Orb's DMG by <color=#0abec5>&Param2&</color> and its Attack Range by <color=#0abec5>50%</color>. Dealing DMG can trigger another Seed Orb. This effect can only be triggered once per second on the same target.",
          shortDescription:
            "Increases Seed Orb's DMG and explosion radius. Dealing DMG can trigger another Seed Orb.",
          params: ['Skill DMG', '5%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Needle Seed',
          icon: '11601_Potential_21',
          description:
            "When casting Floral Storm (Support Skill), increases Ridge's Skill DMG by <color=#ec6d21>&Param2&</color> every 0.5s. Resets when the skill ends.",
          shortDescription:
            'When casting the Support Skill, gradually increases Skill DMG. Resets when the Skill ends.',
          params: ['Skill DMG', '2%/3%/4%/5%/6%/7%/9%/10%/11%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Corrosive Vines',
          icon: '11601_Potential_22',
          description:
            "When Floral Storm (Support Skill)'s seed shower deals DMG, reduces the target's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription: "The Support Skill's seed shower can reduces the target's &Param1&.",
          params: ['DEF', '-11/-15/-19/-23/-26/-30/-34/-38/-42', '6', '5'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Bouquet Blast',
          icon: '11601_Potential_21',
          description:
            "Increases the DMG of Floral Storm (Support Skill)'s seed shower by <color=#ec6d21>&Param2&</color>, and increases its Attack Range by 30%.",
          shortDescription: "Increases the DMG and range of the Support Skill's seed shower.",
          params: ['Skill DMG', '16%/26%/36%/45%/55%/65%/74%/84%/94%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Sturdy Foundation',
          icon: '11601_Potential_23',
          description:
            "Increases Ridge's DMG to target inflicted with Seed Orb by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Ridge's DMG to target inflicted with Seed Orb.",
          params: ['Terra DMG', '42%/67%/92%/118%/143%/168%/193%/218%/244%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Cone Bomb',
          icon: '11601_Potential_24',
          description:
            'Increases DMG of Seed Orb by <color=#ec6d21>&Param2&</color>.\u000bWhen Seed Orb deals DMG, fires 1 seed to the nearest target, dealing <color=#ec6d21>&Param3& of ATK</color> as Terra Skill DMG.',
          shortDescription:
            "Increases Seed Orb's DMG. \u000bWhen Seed Orb deals DMG, fires 1 seed to the nearest target.",
          params: [
            'Skill DMG',
            '14%/23%/31%/40%/48%/57%/65%/74%/82%',
            '9.9%/13.2%/16.5%/19.7%/23%/26.3%/29.6%/32.9%/36.2%',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Ensnaring Ground',
          icon: 'Common_Potential_Earth_1',
          description:
            "Increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color>.\u000bHarvest Rhapsody (Ultimate) can inflict ##Terra Mark: Earth Vein#2029#.",
          shortDescription:
            "Increases Ridge's &Param1&.\u000bThe Ultimate can inflict ##Terra Mark: Earth Vein#2029#.",
          params: ['Ultimate DMG', '62%/100%/137%/175%/212%/249%/287%/324%/362%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description:
                'A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
              params: [],
            },
          },
        },
        {
          name: 'Turn the Tide',
          icon: 'Common_Potential_14',
          description: "Increases Ridge's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "Increases Ridge's &Param1&.",
          params: ['ATK', '11%/17%/24%/30%/37%/43%/50%/56%/63%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Root Grasp',
          icon: '11601_Potential_23',
          description:
            'Reduces the &Param1& of target inflicted with Seed Orb by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Reduces the &Param1& of target inflicted with Seed Orb.',
          params: ['DEF', '-57/-76/-95/-113/-132/-151/-170/-189/-208'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Small Changes',
          icon: 'Common_Potential_15',
          description:
            "For each Terra Trekker on the squad, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "For each Terra Trekker on the squad, increases the squad's &Param1&.",
          params: ['ATK', '3.2%/4.3%/5.4%/6.5%/7.6%/8.7%/9.8%/10.9%/12%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  shia: {
    id: 155,
    name: 'Shia',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that enhances the Snow Rabbit drone, ideal for fighting a single target.',
          potentials: [
            'Phantom Step Radiance',
            'Rimecrystal Edge',
            'Subzero Dominion',
            'Glacial Dash',
            'Rimeheart Pulse',
          ],
        },
        build2: {
          description:
            'A build that enhances the Night Rabbit drone, ideal for fighting multiple targets.',
          potentials: [
            'Moonlight Overflow',
            'Astral Pirouette',
            'Lunar Detonation',
            'Final Crescent',
            'Lunar Combo',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A support build that summons multiple drones after the skill ends to deal continuous DMG.',
          potentials: [
            'Kindred Bound',
            'Twin Moons',
            'Dance of the Riptide',
            "Snowfall's Heartbeat",
            'Eclipse Blast',
          ],
        },
        build2: {
          description:
            'A support build that deals burst DMG by triggering more surfing attacks when the skill is active.',
          potentials: [
            'Bunny Torrent',
            'Rabbit Flip',
            'Flow Reversal',
            'Kick the Wave',
            'Catch the Wave',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Leporine Gale',
          "Hare's Pursuit",
          "Rabbit's Beam",
          'Howl to the Moon',
          'Silent Tide',
          'Wave to Oblivion',
        ],
      },
      supportGeneric: {
        potentials: [
          'Moonfall',
          'Tidal Charge',
          'Counter Current',
          'Howl to the Moon',
          'Silent Tide',
          'Wave to Oblivion',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Phantom Step Rediance',
          icon: '15501_Potential_01',
          description:
            "When Snow Rabbit deals Auto Attack DMG, it inflicts Electro Music, stacking up to <color=#0abec5>20</color> times.\u000bUpon reaching the max stack limit, Electro Music's stacks are removed, dealing <color=#0abec5>&Param1&</color> of ATK as Lux Skill DMG.",
          shortDescription:
            'When dealing Auto Attack DMG, Snow Rabbit inflicts Electro Music that deals additional DMG upon reaching the max stack limit.',
          params: [
            '195%/224%/254%/341%/369%/396%/451%/474%/498%/544%/583%/622%/662%',
            'Whirling Waves',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rimecrystal Edge',
          icon: '15501_Potential_02',
          description:
            "&Param3& (Main Skill) summons a Snow Rabbit, dealing <color=#0abec5>&Param1&</color> of ATK as Lux Skill DMG upon entering combat.\u000bEvery time Snow Rabbit deals Skill DMG, it inflicts Electro Music, stacking up to <color=#0abec5>20</color> times.\u000bUpon reaching the max stack limit, Electro Music's stacks are removed, dealing <color=#0abec5>&Param2&</color> of ATK as Lux Skill DMG.",
          shortDescription:
            'The Main Skill summons a Snow Rabbit that inflicts Electro Music when dealing Skill DMG, dealing additional DMG upon reaching the max stack limit.',
          params: [
            '313%/360%/407%/548%/592%/635%/723%/761%/798%/873%/936%/999%/1061%',
            '195%/224%/254%/341%/369%/396%/451%/474%/498%/544%/583%/622%/662%',
            'Whirling Waves',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Moonlight Overflow',
          icon: '15501_Potential_03',
          description:
            "During Auto Attacks, Night Rabbit locks up to <color=#0abec5>4</color> targets and fires a tracking bullet at each, each dealing <color=#0abec5>&Param1&</color> of ATK as AoE Lux DMG.\u000bWhen the tracking bullets deal DMG, Night Rabbit Gains 1 stack of Moongaze. Each stack of Moongaze increases Night Rabbit's &Param5& by <color=#0abec5>&Param2&</color> for <color=#0abec5>&Param3&</color>s, stacking up to <color=#0abec5>&Param4&</color> times.",
          shortDescription:
            'Night Rabbit fires tracking bullets at nearby targets during Auto Attacks. When the tracking bullets deal DMG, Night Rabbit gains Moongaze, increasing its DMG.',
          params: [
            '63%/72%/81%/110%/118%/127%/145%/152%/160%/175%/187%/200%/212%',
            '5%',
            '10',
            '10',
            'Lux DMG',
            'Whirling Waves',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Astral Pirouette',
          icon: '15501_Potential_04',
          description:
            "Night Rabbit summoned by the Main Skill locks up to <color=#0abec5>2</color> targets and fires a tracking bullet at each, each dealing <color=#0abec5>&Param1&</color> of ATK as AoE Lux DMG.\u000bWhen the tracking bullets deal DMG, Night Rabbit Gains 1 stack of Moongaze. Each stack of Moongaze increases Night Rabbit's &Param5& by <color=#0abec5>&Param2&</color> for <color=#0abec5>&Param3&</color>s, stacking up to <color=#0abec5>&Param4&</color> times.",
          shortDescription:
            'Night Rabbit summoned by the Main Skill fires tracking bullets at nearby targets when attacking. When the tracking bullets deal DMG, Night Rabbit gains Moongaze, increasing its DMG.',
          params: [
            '64%/73%/83%/111%/120%/129%/147%/155%/162%/177%/190%/203%/216%',
            '5%',
            '10',
            '10',
            'Lux DMG',
            'Whirling Waves',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Glacial Dash',
          icon: '15501_Potential_01',
          description:
            "Increases Snow Rabbit's Auto Attack DMG by <color=#ec6d21>&Param1&</color>. Bullets from Auto Attacks can pierce through targets.",
          shortDescription:
            "Increases Snow Rabbit's Auto Attack DMG. Bullets from Auto Attacks can pierce through targets.",
          params: ['151%/241%/332%/422%/513%/603%/694%/784%/875%', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Subzero Dominion',
          icon: '15501_Potential_02',
          description:
            "&Param3& (Main Skill) summons 1 additional Snow Rabbit.\u000bWhile the Main Skill is active, increases all Snow Rabbits' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "The Main Skill summons more Snow Rabbits.\u000bWhile the Main Skill is active, increases all Snow Rabbits' &Param2&.",
          params: ['43%/68%/94%/119%/145%/171%/196%/222%/247%', 'Lux DMG', 'Whirling Waves'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Rimeheart Pulse',
          icon: '15501_Potential_02',
          description:
            "When a Snow Rabbit triggers ##Lux Mark#1015#, increases all the Snow Rabbits' &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          shortDescription:
            "When a Snow Rabbit triggers ##Lux Mark#1015#, increases all the Snow Rabbits' &Param4&.",
          params: ['6%/9%/12%/15%/19%/22%/25%/29%/32%', '5', '6', 'ATK', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Final Crescent',
          icon: '15501_Potential_03',
          description:
            'During Auto Attacks, every time Night Rabbit deals DMG to a different target, increases the DMG of its next Auto Attack by <color=#ec6d21>&Param1&</color>, stacking up to &Param2& times.',
          shortDescription:
            "Based on the number of targets hit by Night Rabbit's Auto Attack, increases the DMG of its next Auto Attack.",
          params: ['29%/47%/64%/82%/99%/117%/134%/152%/169%', '5', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lunar Detonation',
          icon: '15501_Potential_04',
          description:
            "Night Rabbit's missile splits after hitting a target, dealing DMG to up to 3 nearby targets, dealing <color=#ec6d21>&Param1& of ATK</color> as Lux Skill DMG to each.\u000bThis effect can only be triggered once per target per second.",
          shortDescription:
            "Night Rabbit's missile splits after hitting a target, dealing DMG to nearby targets.",
          params: ['16%/25%/34%/44%/53%/63%/72%/81%/91%', 'Whirling Waves'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Leporine Gale',
          icon: 'Common_Potential_9',
          description:
            "While &Param4& (Main Skill) is active, increases Shia's Movement SPD by &Param1&.\u000bWhen there are no nearby targets, increases Shia's &Param3& by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "While &Param4& (Main Skill) is active, increases Shia's Movement SPD.\u000bWhen there are no nearby targets, increases Shia's &Param3&.",
          params: ['30%', '24%/38%/53%/67%/82%/96%/110%/125%/139%', 'Lux DMG', 'Whirling Waves'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Lunar Combo',
          icon: '15501_Potential_04',
          description:
            'Reduces the Attack Interval of Night Rabbits summoned by &Param3& (Main Skill) by 40%, and increases &Param2& by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'Reduces the Attack Interval of Night Rabbits summoned by the Main Skill and increases &Param2&.',
          params: ['18%/29%/40%/51%/62%/73%/84%/95%/106%', 'Skill DMG', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Rabbit's Beam",
          icon: 'Common_Potential_11',
          description:
            "Increases Shia's &Param2& to a target with less than 50% HP by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Shia's &Param2& to a target with less than 50% HP.",
          params: ['24%/38%/53%/67%/82%/96%/110%/125%/139%', 'Lux DMG', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Hare's Pursuit",
          icon: 'Common_Potential_9',
          description:
            'Shia can dodge one more time.\u000bWhen Shia triggers ##Lux Mark#1015#, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'Shia can dodge one more time.\u000bWhen Shia triggers ##Lux Mark#1015#, increases her &Param4&.',
          params: ['5%/8%/10%/13%/16%/19%/22%/24%/27%', '8', '2', 'ATK', 'Whirling Waves'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
      ],
      common: [
        {
          name: 'Howl to the Moon',
          icon: '15501_Potential_41',
          description:
            "Every time &Param5& (Ultimate) lands a Crit Hit, increases Shia's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          shortDescription: "Every time the Ultimate lands a Crit Hit, increases Shia's &Param4&.",
          params: ['2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10%/12%', '10', '20', 'ATK', 'Divine Deluge'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Silent Tide',
          icon: '15501_Potential_41',
          description:
            "When Shia casts &Param2& (Ultimate), if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "When Shia casts the Ultimate, if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG.",
          params: ['32%/52%/71%/91%/110%/129%/149%/168%/190%', 'Divine Deluge'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Wave to Oblivion',
          icon: '15501_Potential_41',
          description:
            'Reduces the interval between bombs of &Param2& (Ultimate) by 30% and increases its Ultimate DMG by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            "Increases Shia's Ultimate DMG and reduces the Ultimate's Attack Interval.",
          params: ['32%/52%/71%/91%/110%/129%/149%/168%/188%', 'Divine Deluge'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Kindred Bound',
          icon: '15501_Potential_21',
          description:
            'When &Param2& (Support Skill) ends, summons <color=#0abec5>2</color> Snow Rabbits that follow the main Trekker and fire bullets to attack targets, dealing <color=#0abec5>&Param1& of ATK</color> as Lux Skill DMG for <color=#0abec5>8</color>s.',
          shortDescription:
            'After casting the Support Skill, summons Snow Rabbits that follow the main Trekker and attack targets.',
          params: [
            '4.9%/5.6%/6.4%/8.6%/9.2%/9.9%/11.3%/11.9%/12.5%/13.6%/14.6%/15.6%/16.6%',
            'Surfing Rondo',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Twin Moons',
          icon: '15501_Potential_22',
          description:
            'When &Param2& (Support Skill) ends, summons <color=#0abec5>2</color> Night Rabbits that fire missiles to attack targets, dealing <color=#0abec5>&Param1& of ATK</color> as Lux Skill DMG for <color=#0abec5>4</color>s.',
          shortDescription:
            'After casting the Support Skill, summons Night Rabbits that attack targets.',
          params: [
            '10%/11.5%/13%/17.5%/18.9%/20.3%/23.1%/24.3%/25.5%/27.9%/29.9%/31.9%/33.9%',
            'Surfing Rondo',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Bunny Torrent',
          icon: '15501_Potential_23',
          description:
            'Increases the number of times Shia can surf by <color=#0abec5>100%</color> and the DMG dealt by each ride by <color=#0abec5>&Param1&</color>.',
          shortDescription:
            'Increases the number of times Shia can surf and the DMG dealt by each ride.',
          params: ['41%', 'Surfing Rondo'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rabbit Flip',
          icon: '15501_Potential_24',
          description:
            'Shia leaves behind a charged area as she surfs, dealing <color=#0abec5>&Param1&</color> AoE Lux Skill DMG every <color=#0abec5>0.3</color>s, lasting for <color=#0abec5>1</color>s.',
          shortDescription:
            'Shia leaves behind a charged area as she surfs, dealing DMG over time.',
          params: [
            '4.1%/4.7%/5.3%/7.1%/7.7%/8.3%/9.4%/9.9%/10.4%/11.4%/12.2%/13%/13.8%',
            'Surfing Rondo',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Dance of the Riptide',
          icon: '15501_Potential_21',
          description:
            "For each drone on the battlefield, increases the drones' DMG by <color=#ec6d21>&Param1&</color>.",
          shortDescription:
            "Increases the drones' DMG based on the number of drones on the battlefield.",
          params: ['8%/13%/18%/22%/27%/32%/37%/42%/46%', 'Surfing Rondo'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: "Snowfall's Heartbeat",
          icon: '15501_Potential_22',
          description:
            "Every time Snow Rabbit deals DMG, increases Shia's &Param2& by <color=#ec6d21>&Param1&</color>, stacking up to &Param3& times.\u000bWhen casting &Param4& (Support Skill), resets this effect.",
          shortDescription: 'When Snow Rabbit deals DMG, increases &Param2&.',
          params: ['1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%', 'Skill DMG', '24', 'Surfing Rondo'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Eclipse Blast',
          icon: '15501_Potential_21',
          description:
            'When Shia triggers ##Lux Mark#1015#, increases &Param2& of Night Rabbit by <color=#ec6d21>&Param1&</color> for &Param3&s.',
          shortDescription:
            "When Shia triggers ##Lux Mark#1015#, increases Night Rabbit's &Param2&.",
          params: ['34%/54%/74%/94%/114%/135%/155%/175%/195%', 'Skill DMG', '5', 'Surfing Rondo'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Flow Reversal',
          icon: '15501_Potential_23',
          description:
            'When Shia deals DMG with surfing, stuns the target for &Param1&s.\u000bIncreases &Param3& of her rides by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            'When Shia deals DMG with surfing, stuns the target.\u000bIncreases &Param3& of her rides.',
          params: ['3', '56%/89%/122%/156%/189%/223%/256%/289%/323%', 'Skill DMG', 'Surfing Rondo'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Catch the Wave',
          icon: '15501_Potential_24',
          description:
            "While &Param4& (Support Skill) is active, increases Shia's &Param3& by <color=#ec6d21>&Param1&</color> per second, stacking up to &Param2& times.",
          shortDescription:
            "While the Support Skill is active, increases Shia's &Param3& over time.",
          params: ['1.1%/1.8%/2.5%/3.2%/3.9%/4.6%/5.3%/6%/6.7%', '12', 'ATK', 'Surfing Rondo'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Tidal Charge',
          icon: 'Common_Potential_11',
          description:
            'Every time Shia kills a target, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription: 'Every time Shia kills a target, increases her &Param4&.',
          params: [
            '1.7%/2.7%/3.7%/4.7%/5.7%/6.7%/7.7%/8.7%/9.7%',
            '15',
            '6',
            'ATK',
            'Surfing Rondo',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Kick the Wave',
          icon: '15501_Potential_24',
          description:
            'When Shia deals DMG with surfing, increases the surfing DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription:
            'When Shia deals DMG with surfing, increases the surfing DMG taken by the target.',
          params: ['24%/38%/52%/67%/81%/95%/110%/124%/138%', '30', '5', 'Surfing Rondo'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Counter Current',
          icon: 'Common_Potential_11',
          description:
            'Every time Shia triggers ##Lux Mark#1015#, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription: 'Every time Shia triggers ##Lux Mark#1015#, increases her &Param4&.',
          params: [
            '1.7%/2.7%/3.7%/4.7%/5.7%/6.7%/7.7%/8.7%/9.7%',
            '15',
            '6',
            'ATK',
            'Surfing Rondo',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description:
                "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
              params: [],
            },
          },
        },
        {
          name: 'Moonfall',
          icon: 'Common_Potential_15',
          description: "Increases Lux Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Lux Trekkers' &Param2&.",
          params: ['30%/48%/66%/84%/102%/120%/138%/156%/174%', 'Crit DMG', 'Surfing Rondo'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  shimiao: {
    id: 113,
    name: 'Shimiao',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          description:
            'A ranged AoE build that grants Super Armor upon skill activation and increases the attack range.',
          potentials: [
            'Stream Embrace',
            'Wave Swirl',
            'Towering Waves',
            'Stream Mirror',
            'Cascade Glow',
          ],
        },
        build2: {
          description: 'A build that adds water ripples to skills, boosting melee DMG.',
          potentials: [
            'Torrent Plunge',
            'Gurgling Streams',
            'Relenting Rain',
            'Raining Ripples',
            'Silent Rain',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that increases the number and speed of water blades, enabling sustained high single-target DPS.',
          potentials: [
            'Rain Whisper: Gentle',
            'Rain Whisper: Steady',
            'Hazard Elimination',
            'Full Preparation',
            'Fire Patrol',
          ],
        },
        build2: {
          description:
            'A versatile DPS build that extends the duration and allows water blades to penetrate targets with enhanced single-target DMG.',
          potentials: [
            'Rain Whisper: Pouring',
            'Rain Whisper: Light',
            'Secretary Duty',
            'Field Review',
            'Missive Support',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Cliffside Spring',
          'Roaring Ocean Wave',
          'Sky-Washing Shower',
          'Intonation',
          'Wave Rider',
          'Humming Wellspring',
        ],
      },
      supportGeneric: {
        potentials: [
          'Irrigation Mastery',
          'Efficiency Boost',
          'Effortless Fulfillment',
          'Intonation',
          'Wave Rider',
          'Humming Wellspring',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Stream Embrace',
          icon: '11301_Potential_01',
          description:
            'Launches <color=#0abec5>6</color> additional attacks in Phase 1. When dealing DMG to elite or higher-tier targets, increases &Param4& by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks. This buff is removed when Shimiao casts Phase 2 of Rising Tides.',
          shortDescription:
            'Launches more attacks in Phase 1. When dealing DMG to elite or higher-tier targets, increases &Param4&.',
          params: ['1.7%', '13', '20', 'ATK'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Wave Swirl',
          icon: '11301_Potential_02',
          description:
            'When casting Rising Tides (Main Skill), Shimiao unleashes water blades instead, dealing <color=#0abec5>&Param1&</color>/<color=#0abec5>&Param2& of ATK</color> as Aqua Skill DMG. Also increases her damage dealt to elite or higher-tier targets by <color=#0abec5>&Param3&</color>.',
          shortDescription:
            'When casting the Main Skill, Shimiao unleashes water blades instead, dealing increased DMG to elite or higher-tier targets.',
          params: [
            '64%/70%/77%/96%/102%/109%/122%/128%/134%/147%/154%/160%/166%',
            '18.1%/19.9%/21.8%/27.2%/29%/30.8%/34.4%/36.3%/38.1%/41.7%/43.5%/45.3%/47.1%',
            '18%',
            'Skill DMG',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Torrent Plunge',
          icon: '11301_Potential_03',
          description:
            'Increases the <color=#0abec5>Attack Range</color> of Rising Tides (Main Skill).\u000bIncreases &Param5& of Phase 2 by <color=#0abec5>&Param6&</color>.\u000bWith each new target hit in Phase 1, increases &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            "Increases the Main Skill's Attack Range. Increases &Param5& of Phase 2. When hitting different targets in Phase 1, increases &Param1&.",
          params: ['Crit Rate', '1.6%', '10', '5', 'Crit DMG', '14%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Gurgling Streams',
          icon: '11301_Potential_04',
          description:
            'When casting Rising Tides (Main Skill), for every <color=#0abec5>2</color> spins, Shimiao creates a water ripple, dealing <color=#0abec5>&Param1& of ATK</color> as Aqua Skill DMG. \u000bThe water ripples can trigger ##Aqua Mark: Torrent#2008#.',
          shortDescription:
            'When casting the Main Skill, creates water ripples based on the number of spins. The water ripples deal DMG and can trigger ##Aqua Mark: Torrent#2008#.',
          params: ['50%/55%/60%/74%/79%/84%/94%/99%/104%/114%/119%/124%/129%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Stream Mirror',
          icon: '11301_Potential_01',
          description:
            'While in Phase 1, Shimiao gains Super Armor. When attacked, increases &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription:
            'While in Phase 1, Shimiao gains Super Armor. When attacked, increases &Param4&.',
          params: ['6%/9%/12%/15%/19%/22%/25%/29%/32%', '10', '3', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Towering Waves',
          icon: '11301_Potential_01',
          description:
            'If Phase 2 is activated but not cast, reduces Skill Cooldown by <color=#ec6d21>&Param1&</color>s, and increases the &Param3& of the next Rising Tides Phase 1 by <color=#ec6d21>&Param2&</color>.',
          shortDescription:
            "If Phase 2 is activated but not cast, reduces Skill Cooldown and increases the next Phase 1's &Param3&.",
          params: ['3/3/3/4/4/4/5/5/5', '30%/48%/66%/84%/103%/121%/139%/157%/175%', 'Skill DMG'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Cascade Glow',
          icon: '11301_Potential_02',
          description:
            "In Phase 2, increases the DMG dealt to targets with ##Chill#1027#/##Frozen#1002# by <color=#ec6d21>&Param1&</color>. The lower the target's HP, the higher the DMG, up to a <color=#ec6d21>&Param10&</color>.",
          shortDescription:
            "Phase 2 deals more DMG to targets with ##Chill#1027#/##Frozen#1002#. The lower the target's HP, the higher the DMG.",
          params: [
            '19%/30%/41%/52%/63%/74%/85%/96%/107%',
            '38%/60%/82%/104%/126%/148%/181%/203%/145%',
            '57%/89.99%/123%/156%/189%/221.99%/277%/310%/183%',
            '76%/120%/164%/208%/252%/296%/373%/417%/221%',
            '95%/150%/205%/260%/315%/370%/468.99%/524%/259%',
            '114%/180%/246%/312%/378%/444%/564.99%/631%/296.99%',
            '132.99%/210%/287%/364%/441%/518%/660.99%/738%/334.99%',
            '151.99%/240%/328%/416%/504%/592%/756.99%/845%/372.99%',
            '170.99%/269.99%/369%/468%/567%/666%/853%/952%/410.99%',
            'Skill DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
        {
          name: 'Raining Ripples',
          icon: '11301_Potential_04',
          description:
            'When Shimiao deals DMG, there is a 15% chance to create water ripples, dealing <color=#ec6d21>&Param1& of ATK</color> as Aqua Skill DMG. This effect can only be triggered once every 5s.\u000bThe water ripples can trigger ##Aqua Mark: Torrent#2008#.',
          shortDescription:
            'When Shimiao deals DMG, she creates water ripples that can trigger ##Aqua Mark: Torrent#2008#.',
          params: ['64%/85%/107%/128%/150%/171%/192%/214%/235%'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Silent Rain',
          icon: '11301_Potential_04',
          description:
            'When casting a Skill or dodging, Shimiao creates small water puddles, dealing <color=#ec6d21>&Param1& of ATK</color> as Aqua Skill DMG per sec for a total of 10s.\u000bThis effect can only be triggered once every 10s.',
          shortDescription: 'When casting a skill or dodging, Shimiao creates small water puddles.',
          params: ['10.5%/13.9%/17.4%/20.9%/24.4%/27.9%/31.3%/34.8%/38.3%'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Cliffside Spring',
          icon: '11301_Potential_03',
          description:
            "Within 10s after casting Phase 2, increases the Attack Range of Shimiao's Auto Attack and its &Param2& by <color=#ec6d21>&Param1&</color>. Also, the final strike of Auto Attack becomes a 2-hit combo.",
          shortDescription: 'After casting Phase 2, enhances the Auto Attack.',
          params: ['15%/25%/34%/43%/52%/61%/71%/80%/89%', 'Auto Attack Damage'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Roaring Ocean Wave',
          icon: '11301_Potential_03',
          description:
            'When Shimiao deals DMG to targets inflicted with ##Chill#1027#/##Frozen#1002# with an Auto Attack, increases her &Param5& by &Param1& and &Param6& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription:
            'When Shimiao deals DMG to targets inflicted with ##Chill#1027#/##Frozen#1002# with an Auto Attack, increases her &Param5& and &Param6&.',
          params: [
            '5%',
            '4%/6%/9%/11%/13%/15%/18%/20%/22%',
            '5',
            '6',
            'ATK SPD',
            'Auto Attack Damage',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
        {
          name: 'Relenting Rain',
          icon: '11301_Potential_02',
          description:
            'When Shimiao casts Rising Tides Phase 2 and kills a target with ##Frozen#1002#, the Skill can be cast again immediately. Also increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks. \u000bThis effect can only be triggered <color=#ec6d21>&Param5&</color> times per Skill cast.',
          shortDescription:
            'When Shimiao casts Rising Tides Phase 2 and kills a target with ##Frozen#1002#, the Skill can be cast again immediately. Also increases &Param1&.',
          params: ['Skill DMG', '116%', '6', '1/2/3/4/5/6/7/8/9', '1/2/3/4/5/6/7/8/9'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
          },
        },
        {
          name: 'Sky-Washing Shower',
          icon: '11301_Potential_01',
          description:
            'Increases &Param1& of Rising Tides (Main Skill) by <color=#ec6d21>&Param2&</color> against targets with ##Chill#1027#.\u000bIf the target also has ##Broken Resilience#1006#, increases DMG by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'The Main Skill applies a bonus effect to targets with ##Chill#1027#.',
          params: [
            'Resilience Break Efficiency',
            '53%/70%/88%/105%/123%/140%/158%/175%/193%',
            'Skill DMG',
            '15%/25%/34%/43%/52%/61%/71%/80%/89%',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1006: {
              id: 1006,
              name: 'Resilience Break',
              description: 'When Resilience decreases to 0, Superarmor effect is removed',
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
        },
      ],
      common: [
        {
          name: 'Intonation',
          icon: '11301_Potential_41',
          description:
            "When casting Flood Mantra (Ultimate), increases the sweeping strike's Attack Range. Also increases Shimiao's &Param2& by <color=#ec6d21>&Param1&</color> to targets with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002#.",
          shortDescription:
            "When casting the Ultimate, increases the sweeping strike's Attack Range. Also increases Shimiao's &Param2& to targets with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002#.",
          params: ['30%/48%/66%/84%/102%/119%/137%/155%/173%', 'Ultimate DMG'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
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
        },
        {
          name: 'Wave Rider',
          icon: 'Common_Potential_4',
          description:
            "When casting Flood Mantra (Ultimate), increases the DMG dealt to targets with ##Chill#1027#/##Frozen#1002# by <color=#ec6d21>&Param1&</color>. The lower the target's HP, the higher the DMG, up to a <color=#ec6d21>&Param10&</color>.",
          shortDescription:
            "The Ultimate deals more DMG to targets with ##Chill#1027#/##Frozen#1002#. The lower the target's HP, the higher the DMG.",
          params: [
            '9%/14%/20%/25%/30%/35%/41%/46%/51%',
            '18%/28%/40%/50%/60%/70%/82%/92%/102%',
            '27%/42%/60%/75%/89.99%/104.99%/123%/138%/153%',
            '36%/56%/80%/100%/120%/140%/164%/184%/204%',
            '44.99%/70%/100%/125%/150%/175%/205%/230%/255%',
            '53.99%/84%/120%/150%/180%/210%/246%/276%/305.99%',
            '62.99%/98%/140%/175%/210%/245%/287%/322%/356.99%',
            '71.99%/112%/159.99%/200%/240%/280%/328%/368%/407.99%',
            '80.99%/126%/179.99%/225%/269.99%/315%/369%/414%/458.99%',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
            1027: {
              id: 1027,
              name: 'Chill',
              description:
                'Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.',
              params: ['-25%', '10', '3', '3'],
            },
          },
        },
        {
          name: 'Humming Wellspring',
          icon: '11301_Potential_41',
          description:
            'When launching the final strike of Flood Mantra, Shimiao creates 3 small water puddles, each dealing <color=#ec6d21>&Param1& of ATK</color> as Aqua Ultimate DMG. For each target killed, creates 1 additional puddle, up to 10 puddles.',
          shortDescription:
            'When casting Flood Mantra (Ultimate), Shimiao creates small water puddles, dealing DMG.',
          params: ['156%/207%/259%/311%/363%/415%/467%/518%/570%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Rain Whisper: Gentle',
          icon: '11301_Potential_21',
          description:
            'When casting Aqua Aide (Support Skill), Shimiao unleashes more water blades, and her &Param1& is increased by <color=#0abec5>&Param2&</color>. \u000bFor every 3 water blades fired, unleashes an additional medium water blade, dealing <color=#0abec5>&Param3& of ATK</color> as Aqua Skill DMG.',
          shortDescription:
            "Increases the number and &Param1& of the Support Skill's water blades.",
          params: [
            'Skill DMG',
            '12%',
            '10.8%/11.9%/13%/16.2%/17.3%/18.4%/20.6%/21.6%/22.7%/24.9%/26%/27%/28.1%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rain Whisper: Steady',
          icon: '11301_Potential_22',
          description:
            "Casting Aqua Aide (Support Skill) has a 50% chance to fire additional water pellets along with the water blades, dealing <color=#0abec5>&Param1& of ATK</color> as Aqua Skill DMG. Also increases Shimiao's &Param5& by <color=#0abec5>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription:
            "The Support Skill has a chance to fire additional water pellets when shooting water blades, dealing DMG. Also increases Shimiao's &Param5&.",
          params: [
            '5.2%/5.7%/6.2%/7.8%/8.3%/8.8%/9.9%/10.4%/10.9%/11.9%/12.5%/13%/13.5%',
            '3%',
            '5',
            '20',
            'ATK',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rain Whisper: Pouring',
          icon: '11301_Potential_23',
          description:
            "When casting Aqua Aide (Support Skill), unleashes one major water blade that pierces through the target, dealing <color=#0abec5>&Param3& of ATK</color> as Aqua Skill DMG. \u000bAlso increases all water blades' &Param1& by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Increases &Param1& of the Support Skill's water blades.\u000bAqua Aide (Support Skill) deals DMG with a major water blade that can pierce through targets.",
          params: ['Skill DMG', '17%', '45%/49%/54%/67%/72%/76%/85%/90%/94%/103%/108%/112%/116%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Rain Whisper: Light',
          icon: '11301_Potential_24',
          description:
            "While Aqua Aide (Support Skill) is active, Shimiao follows the main Trekker and launches attack, increasing the next water blade's DMG by <color=#0abec5>&Param2&</color> every 1.5s.",
          shortDescription:
            "While the Support Skill is active, Shimiao follows the main Trekker and launches attack, increasing her water blades' DMG periodically.",
          params: ['Skill DMG', '61%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Hazard Elimination',
          icon: '11301_Potential_23',
          description:
            "When Aqua Aide (Support Skill) deals DMG to elite or higher-tier targets, increases Shimiao's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription:
            "When the Support Skill deals DMG to elite or higher-tier targets, increases Shimiao's &Param4&.",
          params: ['0.6%/1%/1.4%/1.8%/2.2%/2.6%/3%/3.4%/3.8%', '1', '50', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Full Preparation',
          icon: '11301_Potential_23',
          description:
            'Aqua Aide (Support Skill) can slow targets. When there are 2 or more slowed targets around Shimiao, increases her DMG by <color=#ec6d21>&Param5&</color> for &Param6&s.',
          shortDescription: 'Aqua Aide (Support Skill) can slow targets and its DMG is increased.',
          params: [
            'Movement SPD',
            '-30%',
            '10',
            'Skill DMG',
            '4%/5.3%/6.6%/7.9%/9.2%/10.5%/11.8%/13.1%/14.4%',
            '5',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Fire Patrol',
          icon: '11301_Potential_24',
          description:
            "When Aqua Aide (Support Skill) deals DMG, increases Shimiao's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          shortDescription: "When the Support Skill deals DMG, increases Shimiao's &Param4&.",
          params: ['1.3%/2.1%/2.9%/3.7%/4.5%/5.3%/6.1%/6.9%/7.7%', '2', '15', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Missive Support',
          icon: '11301_Potential_24',
          description:
            'When Shimiao remains stationary, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'When Shimiao remains stationary, increases her &Param4& over time.',
          params: ['4%/6%/8%/10%/12%/14%/16%/18%/20%', '2', '10', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Field Review',
          icon: 'Common_Potential_9',
          description:
            'When Shimiao kills a target, she creates water ripples, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG. This effect can only be triggered once every 5s.\u000bThe water ripples can trigger ##Aqua Mark: Torrent#2008#.',
          shortDescription:
            'When Shimiao kills a target, she creates water ripples that can trigger ##Aqua Mark: Torrent#2008#.',
          params: ['23.2%/31%/38.7%/46.5%/54.2%/62%/69.7%/77.5%/85.2%'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Efficiency Boost',
          icon: '11301_Potential_21',
          description:
            'Increases &Param1& of Aqua Aide (Support Skill) by <color=#ec6d21>&Param2&</color> against targets with ##Chill#1027#.\u000bIf the target also has ##Broken Resilience#1006#, increases DMG by <color=#ec6d21>&Param4&</color>.',
          shortDescription:
            'The Support Skill applies a bonus effect to targets with ##Chill#1027#.',
          params: [
            'Resilience Break Efficiency',
            '8%/10%/13%/16%/18%/21%/23%/26%/29%',
            'Skill DMG',
            '16%/25%/34%/43%/53%/62%/71%/81%/90%',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1006: {
              id: 1006,
              name: 'Resilience Break',
              description: 'When Resilience decreases to 0, Superarmor effect is removed',
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
        },
        {
          name: 'Effortless Fulfillment',
          icon: '11301_Potential_22',
          description:
            'When Shimiao kills a target with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002#, she gains <color=#ec6d21>&Param1&</color> Energy. This effect can only be triggered 3 times every 5s.',
          shortDescription:
            'When Shimiao kills a target with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002#, she gains Energy.',
          params: ['1/2/3/4/5/6/7/8/9'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
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
        },
        {
          name: 'Secretary Duty',
          icon: 'Common_Potential_8',
          description:
            'When Shimiao is on the battlefield, she creates water ripples, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG. This effect can only be triggered once every 5s. \u000bThe water ripples can trigger ##Aqua Mark: Torrent#2008#.',
          shortDescription:
            'When Shimiao is on the battlefield, she creates water ripples that can trigger ##Aqua Mark: Torrent#2008#.',
          params: ['25.2%/33.6%/42%/50.4%/58.7%/67.1%/75.5%/83.9%/92.3%'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Irrigation Mastery',
          icon: 'Common_Potential_15',
          description:
            "When Shimiao enters combat, increases the squad's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When Shimiao enters combat, increases the squad's &Param3&.",
          params: ['10%/16%/22%/28%/34%/39%/45%/51%/57%', '20', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  teresa: {
    id: 127,
    name: 'Teresa',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that increases skill hits and generates additional water ripples, boosting DMG and mark infliction.',
          potentials: [
            'Stream: Cascade Strike',
            'Stream: True Charged Strike',
            'Cordiality',
            'Magic Sword Smack',
            'Muddy Engulf',
          ],
        },
        build2: {
          description:
            "A survival build that grants shields after casting a skill and randomly restores squadmates' Energy.",
          potentials: [
            'Stream: Cloud Ring',
            "Stream: Drip's Overturn",
            'Restarting',
            'Guardsman Blessing',
            'Magic Sword Siphoning',
          ],
        },
      },
      support: {
        build1: {
          description:
            'A build that grants a shield, with attacks from the shielded main Trekker generating water ripples, ideal for a melee main Trekker.',
          potentials: [
            'Surge: Infinite',
            'Surge: Ripple',
            "Isn't It Awesome!",
            'Hold On!',
            "I'll Protect You!",
          ],
        },
        build2: {
          description:
            "A build that creates a Tidal Domain to knock back enemies and boost the main Trekker's DMG within the area, ideal for a ranged main Trekker.",
          potentials: [
            'Surge: Immortality',
            'Surge: Thunderbolt',
            'Let Me Help!',
            'Stay Away!',
            'How About This!',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Unbreakable Bond',
          'Magic Shield Enhancement',
          'Power Strike',
          'Wave Breaker',
          'Power Unbound',
          'Demonic Devour',
        ],
      },
      supportGeneric: {
        potentials: [
          'Shortcut Seeker',
          'Band-aid Collector',
          'Magic Sword Wielder',
          'Wave Breaker',
          'Power Unbound',
          'Demonic Devour',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Stream: Cascade Strike',
          icon: '12701_Potential_01',
          description:
            'Increases the damage of Limpid Stream (Main Skill) by <color=#0abec5>&Param1&</color>. Also triggers a surge of waves, dealing <color=#0abec5>&Param2& of ATK</color> as Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#.',
          shortDescription: 'Increases Skill DMG. Also triggers a surge of waves.',
          params: ['16%', '57%/62%/68%/85%/91%/97%/108%/114%/119%/125%/131%/136%/142%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Stream: True Charged Strike',
          icon: '12701_Potential_02',
          description:
            "Adds a second phase to the Skill, dealing <color=#0abec5>&Param1& of ATK x2</color>, <color=#0abec5>&Param2& of ATK</color>, and <color=#0abec5>&Param6& of ATK</color> as Aqua Skill DMG.\u000bIf the second phase is cast after a 0.3s delay, increases its Attack Range by 30% and boosts the target's &Param5& by <color=#0abec5>&Param3&</color> for &Param4&s.",
          shortDescription:
            'Adds a second phase to the Skill. When cast at the right moment, applies a bonus effect.',
          params: [
            '32%/36%/39%/48%/52%/55%/61%/65%/68%/71%/74%/77%/81%',
            '54%/59%/65%/81%/87%/92%/103%/108%/114%/119%/124%/130%/135%',
            '10%',
            '6',
            'Aqua DMG Taken',
            '36%/40%/43%/54%/58%/61%/69%/72%/76%/79%/83%/87%/90%',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Stream: Cloud Ring',
          icon: '12701_Potential_03',
          description:
            'When Teresa gains a Surging Shield, unleashes a surge of waves, dealing <color=#0abec5>&Param1& of ATK</color> as Aqua Skill DMG, and inflicts ##Aqua Mark: Torrent#2008#.',
          shortDescription:
            'When Teresa gains a Surging Shield, unleashes a surge of waves and inflicts ##Aqua Mark: Torrent#2008#.',
          params: ['51%/56%/61%/77%/82%/87%/97%/102%/107%/112%/118%/123%/128%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: "Stream: Drip's Overturn",
          icon: '12701_Potential_04',
          description:
            'When Limpid Stream (Main Skill) inflicts ##Aqua Mark: Torrent#2008#, there is a 50% chance to grant <color=#0abec5>&Param1&</color> Energy to 1 Aqua squadmate.',
          shortDescription:
            'When Limpid Stream (Main Skill) inflicts ##Aqua Mark: Torrent#2008#, there is a chance to grant energy to a random Aqua squadmate.',
          params: ['4%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
      ],
      mainNormal: [
        {
          name: 'Magic Sword Smack',
          icon: '12701_Potential_01',
          description:
            "When Teresa deals Skill DMG, increases the squad's &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          shortDescription: "When Teresa deals Skill DMG, increases the squad's &Param1&.",
          params: ['Resilience Break Efficiency', '19%/26%/32%/38%/45%/51%/58%/64%/70%', '6', '5'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Muddy Engulf',
          icon: '12701_Potential_01',
          description:
            "When Teresa deals Skill DMG, increases the target's &Param3& by <color=#ec6d21>&Param1&</color> for &Param4&s.\u000bIf the target does not have broken resilience, increases their &Param3& by <color=#ec6d21>&Param2&</color> instead.",
          shortDescription: "When Teresa deals Skill DMG, increases the target's &Param3&.",
          params: [
            '8.8%/13.6%/19.2%/24%/29.6%/34.4%/40%/44.8%/50.4%',
            '11%/17%/24%/30%/37%/43%/50%/56%/63%',
            'Aqua DMG Taken',
            '6',
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Cordiality',
          icon: '12701_Potential_02',
          description:
            "When Teresa deals Skill DMG, increases the squad's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times. This effect can only be triggered once per strike.",
          shortDescription: "When Teresa deals Skill DMG, increases the squad's &Param4&.",
          params: ['2.7%/4.3%/5.9%/7.5%/9.1%/10.7%/12.3%/13.9%/15.5%', '6', '5', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Guardsman Blessing',
          icon: '12701_Potential_03',
          description:
            "When Teresa gains a Surging Shield, increases the squad's &Param4& by &Param1&<color=#ec6d21></color> for &Param2&s, stacking up to &Param3& times.",
          shortDescription: "When Teresa gains a Surging Shield, increases the squad's &Param4&.",
          params: ['7%/11%/15%/19%/23%/27%/31%/35%/39%', '5', '3', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Restarting',
          icon: '12701_Potential_03',
          description:
            'When a squadmate casts a Support Skill or Ultimate Skill, Teresa gains a Surging Shield equal to <color=#ec6d21> &Param1& of ATK</color> for &Param2&s.',
          shortDescription:
            'When a squadmate casts a Support Skill or Ultimate Skill, Teresa gains a Surging Shield.',
          params: ['65%/86%/108%/130%/151%/173%/194%/216%/238%', '5'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Power Strike',
          icon: 'Common_Potential_8',
          description:
            "Any of Teresa's attacks can stun targets for 2s. This effect can only be triggered once every <color=#ec6d21>&Param1&</color>s.",
          shortDescription: "Any of Teresa's attacks can stun targets.",
          params: ['30/27/24/21/18/15/12/9/6'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Unbreakable Bond',
          icon: 'Common_Potential_15',
          description:
            "For each Aqua Trekker on the squad, increases the squad's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "For each Aqua Trekker on the squad, increases the squad's &Param2&.",
          params: ['4%/6%/8%/10%/12%/15%/17%/19%/21%', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Magic Sword Siphoning',
          icon: '12701_Potential_04',
          description:
            'Increases &Param3& by <color=#ec6d21>&Param2&</color>. \u000bWhen a squadmate hits a target with ##Aqua Mark: Torrent#2008#, reduces the Cooldown of Limpid Stream (Main Skill) by &Param1&s. This effect can only be triggered once every 4s.',
          shortDescription:
            'Increases &Param3&. \u000bWhen a squadmate hits a target with ##Aqua Mark: Torrent#2008#, reduces the Cooldown of Limpid Stream (Main Skill).',
          params: ['1', '10%/16%/22%/28%/34%/40%/46%/52%/58%', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Magic Shield Enhancement',
          icon: 'Common_Potential_9',
          description:
            'When Teresa gains a Surging Shield, increases her &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'When Teresa gains a Surging Shield, increases her &Param3&.',
          params: ['41%/65%/89%/113%/138%/162%/186%/211%/235%', '8', 'Auto Attack Damage'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Wave Breaker',
          icon: '12701_Potential_41',
          description:
            'When Slicing Riptide (Ultimate) deals DMG to targets, reduces their Movement SPD by &Param1&, and increases their &Param4& by <color=#ec6d21>&Param2&</color>. When it hits a friendly unit, increases their resistance to interruption for &Param3&s.',
          shortDescription:
            'When Slicing Riptide (Ultimate) deals DMG to targets, reduces their Movement SPD and increases their &Param4&. When it hits a friendly unit, increases their resistance to interruption.',
          params: ['-90%', '16%/26%/36%/46%/56%/65%/75%/85%/95%', '20', 'Aqua DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Power Unbound',
          icon: '12701_Potential_41',
          description:
            "When casting Slicing Riptide (Ultimate), increases the squad's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s.",
          shortDescription: "When casting the Ultimate, increases the squad's &Param3&.",
          params: ['18%/29%/40%/51%/62%/73%/84%/95%/106%', '20', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Demonic Devour',
          icon: '12701_Potential_41',
          description:
            'Increases the DMG dealt of Slicing Riptide (Ultimate) to targets with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002# by <color=#ec6d21>&Param1&</color>.',
          shortDescription:
            'Increases the Ultimate DMG to targets with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002#.',
          params: ['37%/60%/82%/105%/127%/149%/172%/194%/217%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1002: {
              id: 1002,
              name: 'Freeze',
              description: 'Frozen and incapacitated. Unable to take action.',
              params: ['9%/14.4%/19.8%/25.2%/30.6%/36%/41.4%/46.8%/52.2%'],
            },
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
        },
      ],
      supportCore: [
        {
          name: 'Surge: Infinite',
          icon: '12701_Potential_21',
          description:
            "<color=#0abec5>Doubles</color> the duration of Surging Shield. \u000bWhile Surging Shield is active, increases the Aqua main Trekker's &Param1& by <color=#0abec5>&Param2&</color>.",
          shortDescription:
            "Increases the duration of Surging Shield. \u000bWhile Surging Shield is active, increases the Aqua main Trekker's &Param1&.",
          params: ['ATK', '21.9%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Surge: Ripple',
          icon: '12701_Potential_22',
          description:
            "While Surging Shield is active, when the main Trekker deals damage, creates a surge of waves, dealing <color=#0abec5>&Param1& of Teresa's ATK</color> as Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#. This effect can only be triggered once every 0.5s.",
          shortDescription:
            'While Surging Shield is active, when the main Trekker deals DMG, creates a surge of waves.',
          params: ['35%/39%/42%/53%/56%/60%/67%/70%/74%/77%/81%/84%/88%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Surge: Immortality',
          icon: '12701_Potential_23',
          description: 'Increases the duration of Tidal Domain by <color=#0abec5>67%</color>.',
          shortDescription: 'Increases the duration of Tidal Domain.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Surge: Thunderbolt',
          icon: '12701_Potential_24',
          description:
            "Increases Tidal Domain's DMG by <color=#0abec5>&Param2&</color>, and can knock back targets repeatedly...",
          shortDescription: "Increases Tidal Domain's DMG, and can knock back targets repeatedly.",
          params: ['HitDamage,DamageNum,127524001', '44%'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: "Isn't It Awesome!",
          icon: '12701_Potential_21',
          description:
            "While Surging Shield is active, increases the main Aqua Trekker's &Param4& by <color=#ec6d21>&Param2&</color> and ATK SPD by &Param1&.",
          shortDescription:
            "While Surging Shield is active, increases the main Aqua Trekker's &Param4& and ATK SPD.",
          params: ['25%', '19%/30%/41%/52%/63%/74%/85%/96%/107%', 'ATK SPD', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Hold On!',
          icon: '12701_Potential_21',
          description:
            "While Surging Shield is active, increases the main Trekker's &Param2& by <color=#ec6d21>&Param1&</color>.\u000bWhen the main Trekker is attacked, reduces the Cooldown of Billowing Tide (Support Skill) by 1s. This effect can only be triggered once every 4s.",
          shortDescription:
            "While Surging Shield is active, increases the main Trekker's &Param2&. \u000bWhen the main Trekker is attacked, reduces the Cooldown of Billowing Tide (Support Skill).",
          params: ['12%/16%/19%/23%/27%/31%/35%/39%/43%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: "I'll Protect You!",
          icon: '12701_Potential_22',
          description:
            "While Surging Shield is active, enhances the Trekker's resistance to interruption, increasing the DMG it absorbs by <color=#ec6d21>&Param2&</color>.",
          shortDescription:
            "Surging Shield can absorb more DMG and increases the Trekker's resistance to interruption.",
          params: [
            'EffectValue,NoLevel,12752702,EffectTypeParam1,HdPct',
            '19%/26%/32%/38%/45%/51%/58%/64%/70%',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Stay Away!',
          icon: '12701_Potential_23',
          description:
            "Reduces Tidal Domain's Attack Interval by 50%.\u000bWhen Tidal Domain deals DMG, increases the main Trekker's &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s, stacking up to &Param4& times. This effect can only be triggered once every 0.5s.",
          shortDescription:
            "Reduces Tidal Domain's Attack Interval. \u000bWhen Tidal Domain deals DMG, increases the main Trekker's &Param2&.",
          params: ['1.5%/2%/2.5%/3%/3.5%/4%/4.5%/5%/5.5%', 'ATK', '6', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'How About This!',
          icon: '12701_Potential_24',
          description:
            "When the main Aqua Trekker within Tidal Domain deals DMG, there is a 50% chance to create a geyser at the target's location, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#.",
          shortDescription:
            "When the main Aqua Trekker within Tidal Domain deals DMG, there is a chance to create a geyser at the target's location, dealing AoE Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#.",
          params: ['14%/18.7%/23.3%/28%/32.6%/37.3%/42%/46.6%/51.3%'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description:
                'A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.',
              params: ['10'],
            },
          },
        },
        {
          name: 'Band-aid Collector',
          icon: 'Common_Potential_11',
          description:
            "When Teresa is on the battlefield, increases the squad's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "When Teresa is on the battlefield, increases the squad's &Param2&.",
          params: ['11%/18%/24%/31%/37%/44%/51%/57%/64%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Magic Sword Wielder',
          icon: 'Common_Potential_01',
          description: "Increases Teresa's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Teresa's &Param2&.",
          params: ['9%/14%/20%/25%/31%/36%/41%/47%/52%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Let Me Help!',
          icon: '12701_Potential_24',
          description:
            'Increases the &Param3& of Aqua Trekkers within Tidal Domain by <color=#ec6d21>&Param1&</color> every second, stacking up to &Param4& times.',
          shortDescription:
            'Increases the &Param3& of Aqua Trekkers within Tidal Domain every second.',
          params: ['13%/20%/28%/35%/43%/51%/58%/66%/73%', '5', 'Auto Attack Damage', '5'],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Shortcut Seeker',
          icon: 'Common_Potential_15',
          description: "Increases Aqua Trekkers' &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Aqua Trekkers' &Param2&.",
          params: ['14%/22%/30%/38%/46%/54%/62%/70%/78%', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  tilia: {
    id: 107,
    name: 'Tilia',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          description:
            'A build that grants powerful shields through enhanced counterattacks and enhances the moment of shield-raising.',
          potentials: [
            'Shield Counter',
            'Perfect Triangle Formation',
            'Bright Counter',
            'Block Enhancement: Lux',
            'Block Enhancement: ATK',
          ],
        },
        build2: {
          description:
            'A build that continuously weakens enemies, deals DMG, and enhances the shield-raising duration.',
          potentials: [
            'Unity of Offense and Defense',
            'Holy Domain',
            'Unyielding Will',
            'Aegis Blessing',
            'Strike Back',
          ],
        },
      },
      support: {
        build1: {
          description: 'A build that hurls shields, continuously applying Marks to targets hit.',
          potentials: [
            'Holy Inscription',
            'Renewed Spectrum',
            'Enemy Counter',
            'Blinding Beam',
            "Knight's Seal",
          ],
        },
        build2: {
          description: 'A build that hurls shields at all nearby enemies and the main Trekker.',
          potentials: [
            'Perfect Spiral',
            'Mystery of Gyration',
            'Brilliant Relay',
            'Trick Boost',
            'Revealed Flaw',
          ],
        },
      },
      mainGeneric: {
        potentials: [
          'Light Curtain',
          'Wild Spirit',
          'Revolt Call',
          'Knight Oath: Skyfall',
          'Knight Oath: Chalk Armor',
          'Knight Oath: Courage',
        ],
      },
      supportGeneric: {
        potentials: [
          'Banner of Glory',
          "Guardian's Resolve",
          'Creed of Fortification',
          'Knight Oath: Skyfall',
          'Knight Oath: Chalk Armor',
          'Knight Oath: Courage',
        ],
      },
    },
    potentials: {
      mainCore: [
        {
          name: 'Shield Counter',
          icon: '10701_Potential_01',
          description:
            "When Tilia is immune to damage in Fortify Stance, increases her Counterattack DMG. Tilia deals <color=#0abec5>&Param2& of ATK</color> as AoE Lux Skill DMG, inflicts ##Lux Mark: Radiance#2016#, and reduces the target's DEF by <color=#0abec5>&Param3&</color>, lasting for &Param4&s.",
          shortDescription:
            'When Tilia is immune to damage in Fortify Stance, increases her Counterattack DMG.',
          params: [
            'Aegis Protection',
            '245%/269%/293%/367%/391%/416%/465%/489%/513%/562%/587%/611%/636%',
            '-110',
            '8',
            'DEF',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Perfect Triangle Formation',
          icon: '10701_Potential_02',
          description:
            'When Tilia is immune to DMG in Fortify Stance, she gains 3 Aegis when the stance ends, lasting for <color=#0abec5>8</color>s. \u000bWhen taking DMG, consumes 1 Aegis to grant <color=#0abec5>immunity</color> to that DMG.',
          shortDescription:
            'When Tilia is immune to DMG in Fortify Stance, she gains Aegis that grants immunity.',
          params: ['Aegis Protection'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Unity of Offense and Defense',
          icon: '10701_Potential_03',
          description:
            'When Tilia is in Fortify Stance, deals <color=#0abec5>&Param2& of ATK</color> as AoE Lux Skill DMG every <color=#0abec5>0.25</color>s and increases Lux DMG taken by the target by <color=#0abec5>&Param3&</color> for &Param4&s, stacking up to &Param5& times.',
          shortDescription:
            'When Tilia is in Fortify Stance, deals DMG over time and increases Lux DMG taken by the target.',
          params: [
            'Aegis Protection',
            '10.1%/11.1%/12.1%/15.1%/16.1%/17.1%/19.1%/20.1%/21.1%/23.2%/24.2%/25.2%/26.2%',
            '3.2%',
            '8',
            '10',
            'Lux DMG Taken',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Holy Domain',
          icon: '10701_Potential_04',
          description:
            'When Tilia is in Fortify Stance, increases the Skill DMG taken by nearby targets by <color=#0abec5>&Param2&</color>s for a total of &Param3&s, up to &Param4& stacks.',
          shortDescription:
            'When Tilia is in Fortify Stance, increases the Skill DMG taken by nearby targets.',
          params: ['Aegis Protection', '6%', '8', '4', 'Skill DMG Taken'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      mainNormal: [
        {
          name: 'Block Enhancement: Lux',
          icon: '10701_Potential_01',
          description:
            "When Tilia is immune to DMG in Fortify Stance, increases the squad's &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When Tilia is immune to DMG in Fortify Stance, increases the squad's &Param4&.",
          params: ['Aegis Protection', '8%/13%/18%/23%/28%/33%/38%/43%/48%', '8', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Block Enhancement: ATK',
          icon: '10701_Potential_02',
          description:
            'When Tilia is immune to damage in Fortify Stance, deals <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG and stuns targets for &Param3&s.',
          shortDescription:
            'When Tilia is immune to damage in Fortify Stance, deals AoE DMG and stuns targets.',
          params: ['Aegis Protection', '58%/77%/96%/115%/135%/154%/173%/192%/212%', '3'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Bright Counter',
          icon: '10701_Potential_02',
          description:
            "After casting &Param1& (Main Skill), when Tilia deals DMG with the next 12 Auto Attacks, increases the squad's &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param5& stacks.",
          shortDescription:
            "After casting the Main Skill, when Tilia deals DMG with an Auto Attack, increases the squad's &Param4&.",
          params: [
            'Aegis Protection',
            '1.8%/2.9%/4%/5.1%/6.2%/7.3%/8.4%/9.5%/10.6%',
            '5',
            'ATK',
            '12',
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Aegis Blessing',
          icon: '10701_Potential_03',
          description:
            "When &Param1& (Main Skill) deals DMG, there is a &Param2& chance to increase the squad's &Param6& by <color=#ec6d21>&Param3&</color> for &Param4&s, up to &Param5& stacks.",
          shortDescription:
            "When the Main Skill deals DMG, there is a chance to increase the squad's &Param6&.",
          params: [
            'Aegis Protection',
            '50%',
            '1.8%/2.9%/4%/5.1%/6.2%/7.3%/8.4%/9.5%/10.6%',
            '10',
            '5',
            'ATK',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Strike Back',
          icon: '10701_Potential_04',
          description:
            "When Fortify Stance reaches its full duration, increases the squad's &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription:
            "When Fortify Stance reaches its full duration, increases the squad's &Param4&.",
          params: ['Aegis Protection', '21%/33%/46%/58%/71%/83%/96%/108%/121%', '10', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Light Curtain',
          icon: 'Common_Potential_9',
          description:
            'When Tilia inflicts ##Lux Mark: Radiance#2016# on a target, increases the Mark DMG taken by the target by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription:
            'When Tilia inflicts ##Lux Mark: Radiance#2016# on a target, increases the Mark DMG taken by the target.',
          params: [
            'Aegis Protection',
            '120%/190%/260%/340%/410%/480%/550%/620%/700%',
            '6',
            'Mark DMG Taken',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Unyielding Will',
          icon: '10701_Potential_04',
          description:
            'When Tilia takes fatal DMG, grants immunity to the DMG and restores <color=#ec6d21>&Param2&</color> of her Max HP. This effect can only be triggered once per battle.',
          shortDescription:
            'When Tilia takes fatal DMG, grants immunity to the DMG and restores a portion of her Max HP.',
          params: ['Aegis Protection', '30%/40%/50%/60%/70%/80%/90%/100%/100%'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Revolt Call',
          icon: 'Common_Potential_11',
          description:
            "When Tilia's HP is below &Param1&, increases her DEF by <color=#ec6d21>&Param2&</color>.",
          shortDescription: "When Tilia's HP is low, increases her DEF.",
          params: ['50%', '124/166/207/249/290/332/373/415/456', 'DEF'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Wild Spirit',
          icon: 'Common_Potential_9',
          description:
            "When Tilia deals DMG to an elite or boss target, increases the squad's &Param3& by <color=#ec6d21>&Param1&</color> for &Param2&s. This effect can only be triggered once every 10s.",
          shortDescription:
            "When Tilia deals DMG to an elite or boss target, increases the squad's &Param3&.",
          params: ['13%/21%/29%/37%/45%/53%/61%/69%/77%', '8', 'Skill DMG'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
      ],
      common: [
        {
          name: 'Knight Oath: Skyfall',
          icon: '10701_Potential_41',
          description:
            'Increases the Ultimate DMG of &Param1& by <color=#ec6d21>&Param2&</color> and stuns the target for &Param3&s.',
          shortDescription: 'Increases Ultimate DMG and stuns the target.',
          params: [
            'Glorious Smite',
            '37%/60%/82%/105%/127%/149%/172%/194%/217%',
            '2',
            'Ultimate DMG',
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Knight Oath: Chalk Armor',
          icon: '10701_Potential_41',
          description:
            "When &Param1& (Ultimate) deals DMG, the main Trekker gains a shield equal to <color=#ec6d21>&Param2&</color> of Tilia's Max HP, lasting for &Param3&s.",
          shortDescription: 'When the Ultimate deals DMG, the main Trekker gains a shield.',
          params: ['Glorious Smite', '4.1%/5.5%/6.9%/8.3%/9.7%/11.1%/12.5%/13.9%/15.3%', '7'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Knight Oath: Courage',
          icon: '10701_Potential_41',
          description:
            "When casting &Param1& (Ultimate), increases the squad's &Param4& by <color=#ec6d21>&Param2&</color> for &Param3&s.",
          shortDescription: "When casting the Ultimate, increases the squad's &Param4&.",
          params: ['Glorious Smite', '25%/39%/54%/69%/83%/98%/113%/127%/142%', '10', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
      supportCore: [
        {
          name: 'Holy Inscription',
          icon: '10701_Potential_21',
          description:
            'When Aegis of Light hits a target, summons a Lux sphere lasting for 8s, up to 4 Lux spheres can be created. \u000bIncreases the Lux DMG taken by targets within the sphere by <color=#0abec5>&Param2&</color> and inflicts ##Lux Mark: Radiance#2016# on them.',
          shortDescription:
            'When Aegis of Light hits a target, summons a Lux sphere. Increases the Lux DMG taken by targets within the sphere and inflicts ##Radiance#2016# on them.',
          params: ['Aegis Intervention', '18%', 'Lux DMG Taken'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: 'Renewed Spectrum',
          icon: '10701_Potential_22',
          description:
            'When Aegis of Light deals DMG, reduces Support Skill Cooldown by <color=#0abec5>&Param2&</color>s. This effect can only be triggered &Param3& times per Support Skill cast.',
          shortDescription:
            'When &Param1& (Support Skill) deals DMG, reduces Support Skill Cooldown.',
          params: ['Aegis Intervention', '1', '3'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Perfect Spiral',
          icon: '10701_Potential_23',
          description:
            "Aegis of Light shields the main Trekker and then ricochets.\u000bWhen it hits the main Trekker, deals <color=#0abec5>&Param2& of Tilia's ATK</color> as AoE Lux Skill DMG and increases the Skill DMG taken by nearby enemies by <color=#0abec5>&Param3&</color>, lasting for &Param4&s, up to &Param5& stacks.",
          shortDescription:
            'Aegis of Light ricochets with the main Trekker and deals AoE DMG, while increasing the Skill DMG Taken by nearby targets.',
          params: [
            'Aegis Intervention',
            '8.8%/9.6%/10.5%/13.1%/14%/14.9%/16.7%/17.5%/18.4%/20.2%/21%/21.9%/22.8%',
            '4.6%',
            '10',
            '4',
            'Skill DMG Taken',
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
        {
          name: 'Mystery of Gyration',
          icon: '10701_Potential_24',
          description:
            'When casting &Param1& (Support Skill), Tilia throws Aegis of Light at up to <color=#0abec5>5</color> targets simultaneously.',
          shortDescription: 'Tilia can throw more Aegis of Light.',
          params: ['Aegis Intervention'],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {},
        },
      ],
      supportNormal: [
        {
          name: 'Enemy Counter',
          icon: '10701_Potential_21',
          description:
            'When Aegis of Light hits a target immune to stun, deals <color=#ec6d21>&Param2& of ATK</color> as AoE Lux Skill DMG and increases the Lux DMG taken by the target by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription:
            'When Aegis of Light hits a target immune to stun, deals AoE DMG and increases the Lux DMG taken by the target.',
          params: [
            'Aegis Intervention',
            '5.7%/7.6%/9.5%/11.4%/13.3%/15.2%/17.1%/19%/20.9%',
            '14%/23%/31%/40%/48%/57%/65%/74%/82%',
            '10',
            '1',
            'Lux DMG Taken',
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Blinding Beam',
          icon: '10701_Potential_22',
          description:
            'When Tilia inflicts ##Lux Mark: Radiance#2016# on a target, increases the Mark DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription:
            'When Tilia inflicts ##Lux Mark: Radiance#2016# on a target, increases the Mark DMG taken by the target.',
          params: ['75%/120%/165%/210%/255%/300%/345%/390%/435%', '5', 'Mark DMG Taken'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description:
                'A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
              params: ['15'],
            },
          },
        },
        {
          name: "Knight's Seal",
          icon: '10701_Potential_21',
          description:
            "When an ally triggers a Lux Mark, increases the squad's &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, and grants Tilia &Param3& Energy.",
          shortDescription:
            "When an ally triggers a Lux Mark, increases the squad's &Param4&, and grants Tilia Energy.",
          params: ['12%/19%/26%/33%/40%/47%/54%/61%/68%', '3', '5', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: 'Brilliant Relay',
          icon: '10701_Potential_23',
          description:
            'When Aegis of Light reaches the main Trekker, increases their &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, up to &Param3& stacks.',
          shortDescription: 'When Aegis of Light reaches the main Trekker, increases &Param4&.',
          params: ['4%/6%/9%/11%/13%/15%/18%/20%/22%', '15', '4', 'ATK'],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Revealed Flaw',
          icon: '10701_Potential_24',
          description:
            'Aegis of Light deals an additional &Param3& of ATK as AoE Lux Skill DMG to targets whose HP are below <color=#ec6d21>&Param2&</color>. Also increases the Skill DMG they take by &Param4& for &Param5&s, stacking up to &Param6& times.\u000bThis effect can only be triggered once every &Param8&s.',
          shortDescription:
            'Aegis of Light deals additional AoE DMG to targets with low HP and increases the Skill DMG they take.',
          params: [
            'Aegis Intervention',
            '35%/45%/55%/65%/75%/85%/95%/95%/95%',
            '8.8%/9.6%/10.5%/13.1%/14%/14.9%/16.7%/17.5%/18.4%/20.2%/21%/21.9%/22.8%',
            '4.6%',
            '10',
            '4',
            'Skill DMG Taken',
            '7',
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {},
        },
        {
          name: "Guardian's Resolve",
          icon: 'Common_Potential_11',
          description:
            "When Tilia enters combat, increases the main Trekker's &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s.",
          shortDescription: "When Tilia enters combat, increases the main Trekker's &Param2&.",
          params: ['10%/17%/23%/29%/35%/41%/48%/54%/60%', 'ATK', '10'],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {},
        },
        {
          name: 'Trick Boost',
          icon: '10701_Potential_24',
          description:
            "When Aegis of Light ricochets, increases the squad's &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          shortDescription: "When Aegis of Light ricochets, increases the squad's &Param5&.",
          params: ['Aegis Intervention', '4%/6%/8%/10%/12%/15%/17%/19%/21%', '6', '6', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Creed of Fortification',
          icon: 'Common_Potential_11',
          description: "Increases Tilia's &Param2& by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases Tilia's &Param2&.",
          params: ['9%/14%/20%/25%/31%/36%/41%/47%/52%', 'ATK'],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {},
        },
        {
          name: 'Banner of Glory',
          icon: 'Common_Potential_15',
          description: "Increases the main Trekker's DEF by <color=#ec6d21>&Param1&</color>.",
          shortDescription: "Increases the main Trekker's DEF.",
          params: ['79/105/132/158/184/211/237/263/290', 'DEF'],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {},
        },
      ],
    },
  },
  snowishLaru: {
    id: 158,
    name: 'Snowish Laru',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          title: 'Snowish Laru: Main Build 1',
          description: 'A build that enhances the toy army for cooperation, ideal for fighting a single enemy.',
          potentials: [
            'Solemn Look',
            'Here Comes the Queen',
            'Burning Whip',
            'Starchain Blade',
            'Fiery Rainbow'
          ]
        },
        build2: {
          title: 'Snowish Laru: Main Build 2',
          description: 'A build that enhances her own skills to perform multiple AoE attacks, ideal for fighting multiple targets.',
          potentials: [
            'Whipping Gale',
            'Crossing Welts',
            'All-Out Whiplash',
            'Wild Whip Waltz',
            'Non-Stop Victory'
          ]
        }
      },
      support: {
        build1: {
          title: 'Snowish Laru: Support Build 1',
          description: 'A Support build that enhances the cannon and deals massive damage.',
          potentials: [
            'Fire Downpour',
            'Special Ammo',
            'Two-Gun Salute',
            'Uplifting Shot',
            'First Taste of Sweetness'
          ]
        },
        build2: {
          title: 'Snowish Laru: Support Build 2',
          description: 'A Support build that enhances the toy and deals continuous damage.',
          potentials: [
            'Promotion Time',
            'Investiture Ceremony',
            'Heart\'s Benediction',
            'Heart\'s Edict',
            'Heart\'s Trumpet'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Solemn Look',
          icon: '15801_Potential_01',
          description: 'Empowers the toys following Snowish Laru.\n##Colonel Walnut#4020#\'s Synergy Skill deals <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Minion DMG.\n##General Curly#4021#\'s Synergy Skill deals <color=#0abec5>&Param2& of ATK x6</color> as AoE Ignis Minion DMG.\n##Clockwork Queen#4022#\'s shots deal an additional <color=#0abec5>&Param4&</color> of ATK as AoE Ignis Minion DMG.',
          shortDescription: 'Enhances the Synergy Skills of ##Colonel Walnut#4020# and ##General Curly#4021#.\nEnhances ##Clockwork Queen#4022#\'s shots.',
          params: [
            '246%/283%/320%/430%/465%/499%/568%/598%/627%/686%/736%/785%/834%',
            '100%/115%/130%/175%/189%/203%/231%/243%/255%/278%/298%/318%/338%',
            '85%/97%/110%/148%/160%/172%/195%/205%/216%/236%/253%/270%/287%',
            '90%/103%/117%/157%/170%/182%/208%/218%/229%/251%/269%/287%/305%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4020: {
              id: 4020,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            },
            4021: {
              id: 4021,
              name: 'General Curly',
              description: 'General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            },
            4022: {
              id: 4022,
              name: 'Clockwork Queen',
              description: 'Clockwork Queen inherits 100% of Snowish Laru\'s ATK for 12s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        },
        {
          name: 'Here Comes the Queen',
          icon: '15801_Potential_02',
          description: 'Casting &Param1& or &Param2& (Main Skill) summons ##Clockwork Queen#4022# and grants ##Colonel Walnut#4020# or ##General Curly#4021# <color=#0abec5>2</color> stacks of Morale.\n##Clockwork Queen#4022# attacks the target, dealing <color=#0abec5>&Param4&</color> of ATK as Ignis Minion DMG.\nEach of ##Clockwork Queen#4022#\'s attacks can trigger the Synergy Skills of ##Colonel Walnut#4020# and ##General Curly#4021#.\n##Clockwork Queen#4022# can be summoned once every &Param5&s.',
          shortDescription: 'Casting &Param1& or &Param2& (Main Skill) summons ##Clockwork Queen#4022# and boosts Morale for ##Colonel Walnut#4020# and ##General Curly#4021#.',
          params: [
            'Whip Assault',
            'Candy Barrage',
            '12',
            '85%/97%/110%/148%/160%/172%/195%/205%/216%/236%/253%/270%/287%',
            '18'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4022: {
              id: 4022,
              name: 'Clockwork Queen',
              description: 'Clockwork Queen inherits 100% of Snowish Laru\'s ATK for 12s, during which it is immune to DMG. Only 1 can exist at the same time.'
            },
            4020: {
              id: 4020,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            },
            4021: {
              id: 4021,
              name: 'General Curly',
              description: 'General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            }
          }
        },
        {
          name: 'Whipping Gale',
          icon: '15801_Potential_03',
          description: '&Param1& (Main Skill) becomes a multi-hit attack, dealing <color=#0abec5>&Param2& x5</color> of ATK as AoE Ignis Skill DMG.',
          shortDescription: '&Param1& (Main Skill) becomes a multi-hit attack.',
          params: [
            'Whip Assault',
            '92%/106%/120%/161%/174%/187%/212%/224%/235%/257%/275%/293%/312%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Crossing Welts',
          icon: '15801_Potential_04',
          description: 'When Colonel Walnut and General Curly deal DMG, they inflict a Gift Box mark, lasting <color=#0abec5>&Param2&</color>s.\n&Param3& and &Param4& (Main Skill) deals <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Skill DMG against marked targets.',
          shortDescription: 'When Colonel Walnut and General Curly deal DMG, they inflict the Gift Box mark.\nSnowish Laru\'s skills deal additional AoE DMG against marked targets.',
          params: [
            '197%/227%/257%/345%/373%/401%/456%/479%/503%/551%/590%/629%/669%',
            '10',
            'Whip Assault',
            'Candy Barrage'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      mainNormal: [
        {
          name: 'Burning Whip',
          icon: 'Common_Potential_Fire_1',
          description: 'When ##Colonel Walnut#4020# and ##General Curly#4021# deal DMG to targets with ##Ignis Mark#1016#, they have a &Param1& chance to gain 1 stack of Morale and increase their &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'When ##Colonel Walnut#4020# and ##General Curly#4021# deal DMG to targets with ##Ignis Mark#1016#, they have a chance to gain Morale and increase their &Param2&.',
          params: [
            '300000',
            'Summondmg',
            '14%/23%/31%/40%/48%/57%/65%/74%/82%',
            '8',
            '1'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4020: {
              id: 4020,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            },
            4021: {
              id: 4021,
              name: 'General Curly',
              description: 'General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            },
            1016: {
              id: 1016,
              name: 'Ignis Mark',
              description: 'The generic name for all Ignis Marks.\nWhen triggered by specific Ignis Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'All-Out Whiplash',
          icon: 'Common_Potential_Earth_1',
          description: 'When &Param1& or &Param2& (Main Skill) lands a Crit Hit, increases Snowish Laru\'s &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, up to &Param6& stacks.',
          shortDescription: 'When &Param1& or &Param2& (Main Skill) lands a Crit Hit, increases Snowish Laru\'s &Param3&.',
          params: [
            'Whip Assault',
            'Candy Barrage',
            'ATK',
            '1.9%/3%/4.1%/5.2%/6.3%/7.4%/8.5%/9.6%/10.7%',
            '3',
            '9'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Cannon Ensemble',
          icon: '15801_Potential_11',
          description: 'Every &Param3&s, Snowish Laru summons a Sled Turret to attack the target when she deals DMG. The Sled Turret deals <color=#ec6d21>&Param2&</color> of ATK as Ignis Minion DMG and explodes to deal <color=#ec6d21>&Param4&</color> of ATK as AoE Ignis Minion DMG.\nWhen the Sled Turret lands a Crit Hit, increases the &Param5& of Snowish Laru and all toys on the battlefield by <color=#ec6d21>&Param6&</color> for &Param7&s.',
          shortDescription: 'When Snowish Laru deals DMG, she summons a Sled Turret to attack the target.\nWhen the Sled Turret lands a Crit Hit, increases the &Param5& of Snowish Laru and all toys on the battlefield.',
          params: [
            '1e+06',
            '129%/206%/283%/361%/438%/515%/592%/670%/747%',
            '8',
            '91%/146%/201%/255%/310%/365%/420%/474%/529%',
            'Fee',
            '13%/20%/28%/35%/43%/50%/58%/65%/73%',
            '8'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Starchain Blade',
          icon: '15801_Potential_06',
          description: '##General Curly#4021# deals <color=#ec6d21>&Param1&</color> of ATK as AoE Ignis Minion DMG to nearby targets every second.',
          shortDescription: '##General Curly#4021# deals DMG to nearby targets every second.',
          params: [
            '90%/145%/199%/253%/307%/361%/416%/470%/524%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4021: {
              id: 4021,
              name: 'General Curly',
              description: 'General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru\'s ATK and is immune to DMG permanently.'
            }
          }
        },
        {
          name: 'Wild Whip Waltz',
          icon: 'Common_Potential_20',
          description: 'Increases the Attack Range of &Param1& (Main Skill) by 20%.\nIncreases the &Param3& of &Param1& and &Param2& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases the Attack Range of &Param1& (Main Skill).\nIncreases the &Param3& of &Param1& and &Param2&.',
          params: [
            'Whip Assault',
            'Candy Barrage',
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Jazz of Rage',
          icon: 'Common_Potential_Fire_1',
          description: 'While transformed into Dame Laru, Snowish Laru\'s shots and &Param1& can trigger ##Ignis Mark#1016# and inflict Conflagration, dealing &Param2& of ATK as Ignis Mark DMG.\nIncreases Snowish Laru\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'While transformed into Dame Laru, Snowish Laru\'s shots and &Param1& can trigger ##Ignis Mark#1016# and inflict Conflagration.\nIncreases Snowish Laru\'s &Param3&.',
          params: [
            'Candy Barrage',
            '40%/52%/64%/76%/88%/100%/112%/124%/136%',
            'ATK',
            '20%/32%/44%/56%/68%/80%/92%/104%/116%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1016: {
              id: 1016,
              name: 'Ignis Mark',
              description: 'The generic name for all Ignis Marks.\nWhen triggered by specific Ignis Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Fiery Rainbow',
          icon: 'Common_Potential_Water_1',
          description: 'Each toy present increases the &Param1& of all Snowish Laru\'s minions by <color=#ec6d21>&Param2&</color>, up to &Param3& stacks.',
          shortDescription: 'Each toy present increases the &Param1& of all Snowish Laru\'s minions.',
          params: [
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Non-Stop Victory',
          icon: 'Common_Potential_Earth_1',
          description: 'When Snowish Laru\'s Auto Attack lands a Crit Hit, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When Snowish Laru\'s Auto Attack lands a Crit Hit, increases her &Param1&.',
          params: [
            'ATK',
            '4%/6%/8%/11%/13%/15%/18%/20%/22%',
            '8',
            '4'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Elegant Moves',
          icon: 'Common_Potential_8',
          description: 'Snowish Laru can dodge one more time. Also, increases her &Param2& by <color=#ec6d21>&Param3&</color>.\nPeriodically, Snowish Laru becomes immune to direct DMG taken once. This effect can only be triggered once every <color=#ec6d21>&Param1&</color>s.',
          shortDescription: 'Snowish Laru can dodge one more time. Also, increases her &Param2&.\nPeriodically, Snowish Laru becomes immune to direct DMG taken once.',
          params: [
            '30',
            'DEF',
            '39/52/65/78/91/105/118/131/144'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Fire Downpour',
          icon: '15801_Potential_21',
          description: 'After a Gift Box Shell explodes, it deals <color=#0abec5>&Param1&</color> of ATK as Ignis Skill DMG to targets within range every 0.3s for 2s.',
          shortDescription: 'After a Gift Box Shell explodes, it deals DMG to targets within range over time.',
          params: [
            '37%/42%/48%/64%/69%/75%/85%/89%/94%/103%/106%/110%/114%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Special Ammo',
          icon: '15801_Potential_22',
          description: 'Increases the Attack Range of Gift Box Shells by <color=#0abec5>50%</color> and Skill DMG by <color=#0abec5>&Param5&</color>.\nIf the squad is Ignis-Trekker only, when Gift Box Shells deal DMG to the target, increases the target\'s Skill DMG Taken by <color=#0abec5>&Param2&</color> for <color=#0abec5>&Param3&</color>s, up to <color=#0abec5>&Param4&</color> stacks.',
          shortDescription: 'Increases the Skill DMG and Attack Range of Gift Box Shells.\nIf the squad is Ignis-Trekker only, when Gift Box Shells deal DMG to the target, increases the Skill DMG Taken of the target.',
          params: [
            'Rcdskilldmg',
            '1.3%',
            '7',
            '20',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Promotion Time',
          icon: '15801_Potential_23',
          description: 'When 4 ##Colonel Walnuts#4023# are on the battlefield, combines them into 1 ##General Curly#4024#.\n##General Curly#4024# swings dual blades, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Minion DMG.\nIf the squad is Ignis-Trekker only, increases ##General Curly#4024#\'s &Param3& by <color=#0abec5>&Param4&</color> every second, stacking up to <color=#0abec5>&Param5&</color> times.',
          shortDescription: 'Combines ##Colonel Walnuts#4023# into ##General Curly#4024#.\nIf the squad is Ignis-Trekker only, increases ##General Curly#4024#\'s &Param3& over time.',
          params: [
            '53%/61%/69%/92%/100%/107%/122%/128%/135%/147%/153%/158%/163%',
            '11.5',
            'Summondmg',
            '4.5%',
            '15',
            '15'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4023: {
              id: 4023,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time.'
            },
            4024: {
              id: 4024,
              name: 'General Curly',
              description: 'General Curly, combined by Colonel Walnuts, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        },
        {
          name: 'Investiture Ceremony',
          icon: '15801_Potential_24',
          description: '##Colonel Walnut#4023# and ##General Curly#4024# learn skills, which they automatically cast after a <color=#0abec5>4</color>s cooldown.\n##Colonel Walnut#4023# smashes the ground, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Minion DMG.\n##General Curly#4024# swings dual blades, dealing <color=#0abec5>&Param2& x6</color> of ATK as AoE Ignis Minion DMG and increasing its &Param5& by <color=#0abec5>&Param3&</color> for <color=#0abec5>&Param4&</color>s.',
          shortDescription: '##Colonel Walnut#4023# and ##General Curly#4024# learn skills, which they automatically cast to attack targets.\nGeneral Curly\'s skill also increases its &Param5&.',
          params: [
            '19%/22%/25%/34%/37%/39%/45%/47%/50%/54%/56%/58%/60%',
            '43%/49%/55%/75%/81%/87%/98%/104%/109%/119%/123%/127%/132%',
            '50%',
            '6',
            'Summoncritrate'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4023: {
              id: 4023,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time.'
            },
            4024: {
              id: 4024,
              name: 'General Curly',
              description: 'General Curly, combined by Colonel Walnuts, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Two-Gun Salute',
          icon: '15801_Potential_25',
          description: 'Increases the &Param2& of &Param1& (Support Skill) by <color=#ec6d21>&Param3&</color>. Fires 2 additional Gift Box Shells.',
          shortDescription: 'Increases the &Param2& and number of shots of &Param1& (Support Skill).',
          params: [
            'Courtesy Before Aggression',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Heart\'s Benediction',
          icon: '15801_Potential_28',
          description: '##Colonel Walnut#4023# deals <color=#ec6d21>&Param1&</color> of ATK as AoE Ignis Minion DMG to nearby targets every second.\n##General Curly#4024# deals <color=#ec6d21>&Param2&</color> of ATK as AoE Ignis Minion DMG every 0.5s.',
          shortDescription: '##Colonel Walnut#4023# and ##General Curly#4024# deal Minion DMG to nearby targets over time.',
          params: [
            '2%/3%/4%/5%/7%/8%/9%/10%/12%',
            '10%/17%/23%/29%/36%/42%/48%/55%/61%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4023: {
              id: 4023,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time.'
            },
            4024: {
              id: 4024,
              name: 'General Curly',
              description: 'General Curly, combined by Colonel Walnuts, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        },
        {
          name: 'Celebration Resumed',
          icon: 'Common_Potential_Fire_1',
          description: 'Each time Snowish Laru enters combat, increases the main Ignis Trekker\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Each time Snowish Laru enters combat, increases the main Ignis Trekker\'s &Param1&.',
          params: [
            'ATK',
            '45%/72%/99%/126%/152%/179%/193%/206%/220%',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Uplifting Shot',
          icon: 'Common_Potential_8',
          description: 'When a Gift Box Shell deals DMG, increases the &Param1& of Snowish Laru by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When a Gift Box Shell deals DMG, increases the &Param1& of Snowish Laru.',
          params: [
            'ATK',
            '9%/15%/21%/26%/32%/37%/40%/43%/46%',
            '5',
            '6',
            'Summondmg',
            '1.7%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Heart\'s Edict',
          icon: 'Common_Potential_13',
          description: 'Increases the combat duration of ##Colonel Walnut#4023# and ##General Curly#4024# by 50% and their &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the combat duration and &Param1& of ##Colonel Walnut#4023# and ##General Curly#4024#.',
          params: [
            'Crit DMG',
            '32%/52%/71%/90%/109%/129%/148%/167%/187%',
            '1'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4023: {
              id: 4023,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time.'
            },
            4024: {
              id: 4024,
              name: 'General Curly',
              description: 'General Curly, combined by Colonel Walnuts, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        },
        {
          name: 'Ammo Rain',
          icon: 'Common_Potential_Fire_1',
          description: 'While Snowish Laru transforms into Dame Laru, increases her &Param1& by <color=#ec6d21>&Param2&</color>. Her shots and &Param3& can inflict ##Ignis Mark: Sacred Flame#2013#.',
          shortDescription: 'While Snowish Laru transforms into Dame Laru, increases her &Param1&. Her shots and skill can inflict ##Ignis Mark: Sacred Flame#2013#.',
          params: [
            'ATK',
            '67%/107%/147%/187%/227%/267%/277%/287%/297%',
            'Candy Barrage'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2013: {
              id: 2013,
              name: 'Ignis Mark: Sacred Flame',
              description: 'Some Ignis characters apply a special status to the target for 10 sec.\nWhen triggered by specific Ignis characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'First Taste of Sweetness',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the &Param2& dealt by Gift Box Shells to targets with ##Ignis Mark#1016# by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases the &Param2& dealt by Gift Box Shells to targets with ##Ignis Mark#1016#.',
          params: [
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1016: {
              id: 1016,
              name: 'Ignis Mark',
              description: 'The generic name for all Ignis Marks.\nWhen triggered by specific Ignis Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Heart\'s Trumpet',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the &Param1& of ##Colonel Walnut#4023# and ##General Curly#4024# by &Param2&.\nEach time they deal DMG, increases their &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, stacking up to &Param6& times.\nEach time they land a Crit Hit, increases the &Param7& of Ignis Trekkers in the squad by <color=#ec6d21>&Param8&</color> for &Param9&s, stacking up to &Param10& times.',
          shortDescription: 'Increases the &Param1& of ##Colonel Walnut#4023# and ##General Curly#4024#. Each time they deal DMG, increases their &Param3&; each time they land a Crit Hit, increases the &Param7& of Ignis Trekkers in the squad.',
          params: [
            'Atkspd_P',
            '35%',
            'Summondmg',
            '6%/9.6%/13.2%/16.8%/20.4%/24%/27.6%/31.2%/34.8%',
            '10',
            '10',
            'ATK',
            '',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4023: {
              id: 4023,
              name: 'Colonel Walnut',
              description: 'Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time.'
            },
            4024: {
              id: 4024,
              name: 'General Curly',
              description: 'General Curly, combined by Colonel Walnuts, inherits 100% of Snowish Laru\'s ATK for 10s, during which it is immune to DMG. Only 1 can exist at the same time.'
            }
          }
        },
        {
          name: 'Fairy Tale Rule',
          icon: 'Common_Potential_Fire_1',
          description: 'When the squad contains only Ignis characters, Gift Box Shell increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s upon dealing DMG to the target.',
          shortDescription: 'When the squad contains only Ignis Trekkers, Gift Box Shell increases the target\'s &Param1& upon dealing DMG to the target.',
          params: [
            'Feercd',
            '15%/24%/33%/42%/51%/60%/63%/66%/69%',
            '12'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Silver Bullet',
          icon: '15801_Potential_41',
          description: 'While transformed into Dame Laru, casting &Param1& increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'While transformed into Dame Laru, casting &Param1& increases her &Param2&.',
          params: [
            'Candy Barrage',
            'Ultimate DMG',
            '61%/98%/134%/171%/207%/244%/256%/268%/281%',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Untouched King',
          icon: 'Common_Potential_8',
          description: 'While transformed into Dame Laru, increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s each time &Param1& deals DMG, up to &Param5& stacks.\nThis effect is removed if &Param1& is cast.',
          shortDescription: 'While transformed into Dame Laru, increases her &Param2& each time &Param1& deals DMG.',
          params: [
            'Candy Barrage',
            'Ultimate DMG',
            '10%/13%/17%/20%/23%/27%/29%/31%/33%',
            '10',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Toy Army',
          icon: 'Common_Potential_Fire_1',
          description: 'While transformed into Dame Laru, increases the &Param1& of Ignis Trekkers in the squad by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.\nThis effect is removed when the transformation expires.',
          shortDescription: 'While transformed into Dame Laru, increases the &Param1& of Ignis Trekkers in the squad over time.',
          params: [
            'ATK',
            '9%/14%/19%/24%/30%/35%/36%/38%/40%',
            '-1',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  springseekCoronis: {
    id: 159,
    name: 'Springseek Coronis',
    element: 'Terra',
    buildOrder: {
      main: {
        build1: {
          title: 'Coronis: Main Build 1',
          description: 'A build that enhances Auspice to deal rapid damage to single targets.',
          potentials: [
            'Radiance of Auspice',
            'Reflection of Auspice',
            'Catalyst',
            'Exquisite Cut',
            'Jade Chime'
          ]
        },
        build2: {
          title: 'Coronis: Main Build 2',
          description: 'A build that deals AoE skill damage and triggers combos with Auto Attacks.',
          potentials: [
            'Needle Shower',
            'Echo of Earth',
            'Expanse: Everlasting Peace',
            'Inner Stagnation',
            'Fortune\'s Flow'
          ]
        }
      },
      support: {
        build1: {
          title: 'Coronis: Support Build 1',
          description: 'A Support build that instantly detonates Rose Vials, dealing massive damage.',
          potentials: [
            'Essence Extraction',
            'Vernal Breath',
            'Perfect Touch',
            'Symptom Sight',
            'Reciprocity'
          ]
        },
        build2: {
          title: 'Coronis: Support Build 2',
          description: 'A Support build that generates extra Wither Vials to enhance sustained damage.',
          potentials: [
            'Return to Earth',
            'Lasting Aftertaste',
            'Faded Splendor',
            'Aromatic Room',
            'Waning Year'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Radiance of Auspice',
          icon: '15901_Potential_01',
          description: 'Reduces Auspice Beam\'s Attack Interval by <color=#0abec5>25%</color>. Each additional Auspice shortens the Attack Interval by <color=#0abec5>25%</color>.',
          shortDescription: 'Reduces Auspice Beam\'s Attack Interval. Each additional Auspice shortens the Attack Interval.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Reflection of Auspice',
          icon: '15901_Potential_02',
          description: 'Increases the &Param1& of Springseek Coronis by <color=#0abec5>&Param2&</color>. Casting Jade of Vitality (Main Skill) generates one additional Auspice. Auspice Beams link all Auspice units, dealing <color=#0abec5>&Param3&</color> of Springseek Coronis\'s ATK as Terra Skill DMG every 0.6s, and can trigger ##Terra Mark#1020#.',
          shortDescription: 'Increases the &Param1& of Springseek Coronis. Casting Main Skill generates additional Auspice. Beams link all Auspice units, dealing DMG over time, and can trigger ##Terra Mark#1020#.',
          params: [
            'Skill DMG',
            '6%',
            '14%/17%/19%/25%/27%/30%/34%/35%/37%/41%/44%/47%/50%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Needle Shower',
          icon: '15901_Potential_03',
          description: 'Increases Ammo Capacity by <color=#0abec5>100%</color>. When in Crystallized State, increases Fire Rate by <color=#0abec5>30%</color> and fires crystalline bullets, dealing an additional <color=#0abec5>&Param1&</color> of Springseek Coronis\'s ATK as Terra Auto Attack DMG on hit. Can trigger ##Terra Mark#1020#.',
          shortDescription: 'Increases Ammo Capacity. When in Crystallized State, increases Fire Rate and fires crystalline bullets that deal additional DMG on hit. Can trigger ##Terra Mark#1020#.',
          params: [
            '7%/9%/10%/13%/14%/15%/18%/18%/19%/21%/23%/24%/26%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Echo of Earth',
          icon: '15901_Potential_04',
          description: 'When in Crystallized State, a Rose Pulse is generated every 1.5s: Hitting a target creates Crystalline Ground at the target\'s location, and deals <color=#0abec5>&Param1&</color> of Springseek Coronis\'s ATK as Terra Auto Attack DMG after 2.5s. Can trigger ##Terra Mark#1020#. When Crystallized Ground receives Springseek Coronis\'s Auto Attack DMG, it detonates early and deals <color=#0abec5>&Param3&</color> increased DMG.',
          shortDescription: 'When in Crystallized State, continuously generates Rose Pulses: Hitting a target creates Crystalline Ground at the target\'s location to deal delayed DMG. Can trigger ##Terra Mark#1020#. When Crystallized Ground receives Springseek Coronis\'s Auto Attack DMG, it detonates early and deals increased DMG.',
          params: [
            '32%/37%/41%/56%/60%/65%/74%/77%/81%/89%/95%/102%/108%',
            '',
            '0.56%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Catalyst',
          icon: 'Common_Potential_Water_1',
          description: 'Increases Auspice\'s &Param1& by <color=#ec6d21>&Param2&</color>. Increases DMG additionally based on the number of Auspice on the battlefield, up to <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Increases Auspice\'s &Param1&. Increases DMG additionally based on the number of Auspice on the battlefield.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Expanse: Everlasting Peace',
          icon: 'Common_Potential_10',
          description: 'Increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color>. Increases &Param3& additionally by <color=#ec6d21>&Param4&</color> against distant targets.',
          shortDescription: 'Increases Springseek Coronis\'s &Param1&. Increases &Param3& additionally against distant targets.',
          params: [
            'Normal DMG',
            '5%/7%/10%/13%/15%/18%/21%/23%/26%',
            '',
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Iridescent Robe',
          icon: 'Common_Potential_Fire_1',
          description: 'Springseek: Burst of Blaze (Ultimate) can trigger ##Terra Mark#1020#. When Springseek Coronis triggers the Mark, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Ultimate can trigger ##Terra Mark#1020#. Increases &Param1& on trigger.',
          params: [
            'ATK',
            '1.7%/2.7%/3.7%/4.7%/5.7%/6.7%/7.7%/8.7%/9.7%',
            '5',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Exquisite Cut',
          icon: 'Common_Potential_Water_1',
          description: 'When Springseek Coronis deals Auto Attack DMG, increases Auspice\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Springseek Coronis deals Auto Attack DMG, increases Auspice\'s &Param1&.',
          params: [
            '',
            '0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%',
            '5',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Inner Stagnation',
          icon: 'Common_Potential_10',
          description: 'When Springseek Coronis deals Auto Attack DMG, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Springseek Coronis deals Auto Attack DMG, increases the target\'s &Param1&.',
          params: [
            'Seercd',
            '1.3%/2.1%/2.9%/3.7%/4.5%/5.3%/6.1%/6.9%/7.7%',
            '5',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Omen Breaker',
          icon: 'Common_Potential_13',
          description: 'Springseek Coronis can dodge one more time. After dodging, increases &Param1& by <color=#ec6d21>&Param2&</color> for 6s.',
          shortDescription: 'Springseek Coronis can dodge one more time. After dodging, increases &Param1&.',
          params: [
            'See',
            '8%/13%/17%/22%/27%/31%/36%/41%/45%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Jade Chime',
          icon: 'Common_Potential_Water_1',
          description: 'Increases the &Param1& of Springseek Coronis by <color=#ec6d21>&Param2&</color>. When Evergreen Needles (Auto Attack) bullets pass near or through Auspice beams, the duration of all active Auspice is extended by 0.5s (up to <color=#ec6d21>&Param3&</color>s per Skill cast).',
          shortDescription: 'Increases the &Param1& of Springseek Coronis. When Auto Attack bullets pass near or through Auspice beams, the duration of all active Auspice is extended.',
          params: [
            'Skill DMG',
            '9.3%/15%/21%/26%/32%/37%/43%/49%/54%',
            ''
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Fortune\'s Flow',
          icon: 'Common_Potential_Earth_1',
          description: 'Increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color>. When in Crystallized State, triggering ##Terra Mark#1020# extends the state\'s duration by 0.6s (up to 3s total per Skill cast).',
          shortDescription: 'Increases Springseek Coronis\'s &Param1&. When in Crystallized State, triggering ##Terra Mark#1020# extends the state\'s duration.',
          params: [
            'Normal DMG',
            '19%/30%/41%/52%/64%/75%/86%/97%/108%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Shifting Brilliance',
          icon: 'Common_Potential_Water_1',
          description: 'Increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color>. When Evergreen Needles (Auto Attack) bullets pass near or through Auspice beams, they gain Penetration and increased &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases Springseek Coronis\'s &Param1&. When Auto Attack bullets pass near or through Auspice beams, they gain Penetration and increased &Param3&.',
          params: [
            'See',
            '5%/8%/11%/14%/17%/20%/23%/26%/29%',
            '',
            '0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Essence Extraction',
          icon: '15901_Potential_21',
          description: 'Within 3.5s after casting Instant Blossom (Support Skill), increases Rose Vials\' &Param2& by <color=#0abec5>&Param3&</color>.\nWhen a Rose Vial expires, it deals an additional <color=#0abec5>&Param1&</color> of Springseek Coronis\'s ATK as AoE Terra Skill DMG.',
          shortDescription: 'For a short duration after casting Instant Blossom (Support Skill), increases Rose Vials\' &Param2&.\nWhen a Rose Vial expires, it deals additional DMG.',
          params: [
            '256%/295%/333%/449%/485%/521%/592%/623%/654%/715%/767%/818%/869%',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Vernal Breath',
          icon: '15901_Potential_22',
          description: 'For each Terra Trekker on the squad, increases the &Param1& of Rose Vial by <color=#0abec5>&Param2&</color>.\nRose Vial will undergo a Rapid Bloom, instantly triggering all remaining DMG from its duration.',
          shortDescription: 'For each Terra Trekker on the squad, increases the &Param1& of Rose Vial.\nRose Vial will undergo a Rapid Bloom, instantly triggering all remaining DMG from its duration.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Return to Earth',
          icon: '15901_Potential_23',
          description: 'For each Terra Trekker on the squad, increases the &Param1& of Wither Vial by <color=#0abec5>&Param2&</color>.\nInstant Blossom (Support Skill) now throws 3 Wither Vials and 4 Rose Vials. The Wither Vial converts adjacent Rose Vials into Wither Vials as well.',
          shortDescription: 'For each Terra Trekker on the squad, increases the &Param1& of Wither Vial.\nChanges the number of Rose Vials and Wither Vials thrown by the Support Skill. The Wither Vial converts adjacent Rose Vials into Wither Vials as well.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Lasting Aftertaste',
          icon: '15901_Potential_24',
          description: 'Extends the duration of all Vials by <color=#0abec5>50%</color>.',
          shortDescription: 'Extends the duration of all Vials.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      supportNormal: [
        {
          name: 'Perfect Touch',
          icon: 'Common_Potential_13',
          description: 'For each Rose Vial on the field, increases the &Param1& dealt by Rose Vials by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'For each Rose Vial on the field, increases Rose Vials\' &Param1&.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Faded Splendor',
          icon: 'Common_Potential_13',
          description: 'For each Wither Vial on the field, increases Wither Vials\' &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'For each Wither Vial on the field, increases Wither Vials\' &Param1&.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Herbal Tempering',
          icon: 'Common_Potential_13',
          description: 'Increases the &Param1& of Springseek Coronis by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& of Springseek Coronis.',
          params: [
            'ATK',
            '20%/32%/44%/56%/68%/80%/92%/104%/116%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Symptom Sight',
          icon: 'Common_Potential_Earth_1',
          description: 'When Rose Vial inflicts ##Terra Mark: Earth Vein#2029#, increases the &Param1& of the target by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Rose Vial inflicts ##Terra Mark: Earth Vein#2029#, increases the &Param1& of the target.',
          params: [
            'Seercd',
            '10%/16%/22%/28%/34%/40%/46%/52%/58%',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description: 'A special status applied to the target by some Terra Trekkers, lasting for 10s.\nCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.'
            }
          }
        },
        {
          name: 'Aromatic Room',
          icon: 'Common_Potential_Earth_1',
          description: 'When a Rose Vial or Wither Vial is on the field, increases all Terra Trekkers\' &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When a Rose Vial or Wither Vial is on the field, increases all Terra Trekkers\' &Param1&.',
          params: [
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Flying Fire',
          icon: 'Common_Potential_Fire_1',
          description: 'Springseek: Burst of Blaze (Ultimate) can inflict ##Terra Mark: Earth Vein#2029#. Increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Ultimate can inflict ##Terra Mark: Earth Vein#2029#. Increases Springseek Coronis\'s &Param1&.',
          params: [
            'ATK',
            '18%/29%/40%/50%/61%/72%/83%/94%/104%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description: 'A special status applied to the target by some Terra Trekkers, lasting for 10s.\nCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.'
            }
          }
        },
        {
          name: 'Reciprocity',
          icon: 'Common_Potential_Earth_1',
          description: 'For 10s after Rose Vial inflicts ##Terra Mark: Earth Vein#2029# on the target, triggering ##Terra Mark#1020# on the target deals an additional <color=#ec6d21>&Param1&</color> of Springseek Coronis\'s ATK as Terra Skill DMG.',
          shortDescription: 'For a short duration after Rose Vial inflicts ##Terra Mark: Earth Vein#2029# on the target, triggering ##Terra Mark#1020# on the target deals additional DMG.',
          params: [
            '109%/174%/239%/304%/369%/434%/499%/565%/630%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2029: {
              id: 2029,
              name: 'Terra Mark: Earth Vein',
              description: 'A special status applied to the target by some Terra Trekkers, lasting for 10s.\nCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Waning Year',
          icon: 'Common_Potential_Earth_1',
          description: 'When Wither Vial applies Wither stack to a target that has not yet reached the max stack limit, it deals <color=#ec6d21>&Param3&</color> of Springseek Coronis\'s ATK as Terra Skill DMG. For every current stack of Wither on the target, the &Param1& upon applying a new stack is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When Wither Vial applies Wither stack to a target that has not yet reached the max stack limit, it deals DMG. For every current stack of Wither on the target, the &Param1& upon applying a new stack is increased.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '18%/29%/40%/51%/63%/74%/85%/96%/107%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Terra Chorus',
          icon: 'Common_Potential_Earth_1',
          description: 'If all squadmates are Terra Trekkers, when Springseek Coronis deals Skill DMG, each Rose Vial on the field increases the Terra Mark DMG taken by the target by <color=#ec6d21>&Param1&</color> for &Param2&s.',
          shortDescription: 'When all squadmates are Terra Trekkers, each Rose Vial on the field increases the Terra Mark DMG taken by the target when Springseek Coronis deals Skill DMG.',
          params: [
            '9.4%/15%/20.6%/26.2%/31.8%/37.4%/43%/48.6%/54.2%',
            '3'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Dream Shock',
          icon: '15901_Potential_41',
          description: 'Increases the &Param1& of Springseek: Burst of Blaze (Ultimate) against elite or higher-tier targets by <color=#ec6d21>&Param2&</color>. Additionally inflicts ##Charm#4502# on normal targets: Lasts 2s, and deals <color=#ec6d21>&Param3&</color> of Springseek Coronis\'s ATK as Terra Ultimate DMG when the effect ends.',
          shortDescription: 'Increases Ultimate\'s &Param1& against elite or higher-tier targets. Additionally inflicts ##Charm#4502# on normal targets, dealing DMG when the effect ends.',
          params: [
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
            '162%/259%/356%/453%/550%/647%/744%/841%/938%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            4502: {
              id: 4502,
              name: 'Allure',
              description: 'The target remains too close to the caster. Cannot attack.'
            }
          }
        },
        {
          name: 'Lingering Grace',
          icon: 'Common_Potential_Earth_1',
          description: 'Increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color>. While the Ultimate is on cooldown or its Energy is not full, increases the &Param3& of Terra Vanguards and Versatile Trekkers by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases Springseek Coronis\'s &Param1&. While the Ultimate is on cooldown or its Energy is not full, increases the &Param3& of Terra Vanguards and Versatile Trekkers in the squad.',
          params: [
            'Ultimate DMG',
            '14%/23%/32%/40%/49%/57%/66%/75%/83%',
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'United Flame',
          icon: 'Common_Potential_Fire_1',
          description: 'When Springseek: Burst of Blaze (Ultimate) deals DMG, increases Springseek Coronis\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, stacking up to &Param3& times.',
          shortDescription: 'When the Ultimate deals DMG, increases Springseek Coronis\'s &Param1&.',
          params: [
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%',
            '6',
            '20'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  chaton: {
    id: 114,
    name: 'Chaton',
    element: 'Ignis',
    buildOrder: {
      main: {
        build1: {
          title: 'Chaton: Main Build 1',
          description: 'A build that throw Bouncing Bombs to attack multiple targets.',
          potentials: [
            'Area Explosion',
            'Overwhelming Throw',
            'Chain Bounce',
            'Efficient Use',
            'Deadly Verdict'
          ]
        },
        build2: {
          title: 'Chaton: Main Build 2',
          description: 'A build that marks targets with a laser to deal continuous DMG to them.',
          potentials: [
            'Meowth\'s Curse',
            'Reincarnation of Darkness',
            'Mark of Darkness',
            'Lucky Bullet',
            'Hunting Mark'
          ]
        }
      },
      support: {
        build1: {
          title: 'Chaton: Support Build 1',
          description: 'A build that deals massive DMG over time to a single target.',
          potentials: [
            'Ambush Operation',
            'Strike While the Iron is Hot',
            'Evil Eye Gaze',
            'Excess Amplification',
            'Relentless Suppression'
          ]
        },
        build2: {
          title: 'Chaton: Support Build 2',
          description: 'A build that deals AoE DMG to multiple targets.',
          potentials: [
            'Combat Frenzy',
            'Core Blast',
            'One Stone Two Birds',
            'Burnt Rifling',
            'Minor Fling'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Area Explosion',
          icon: '11401_Potential_01',
          description: 'Each time a Bouncing Bomb lands, it deals an additional <color=#0abec5>&Param1&</color> of ATK as AoE Ignis Skill DMG.\nIncreases the &Param2& dealt by the Bouncing Bomb by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'Each time a Bouncing Bomb lands, it deals additional AoE DMG.\nIncreases the &Param2& dealt by the Bouncing Bomb.',
          params: [
            '7%/8%/9%/13%/14%/15%/17%/18%/18%/20%/22%/23%/25%',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Overwhelming Throw',
          icon: '11401_Potential_02',
          description: 'When holding &Param1& (Main Skill), Chaton throws <color=#0abec5>2</color> additional Bouncing Bombs.\nIncreases the &Param2& dealt by the Bouncing Bomb by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'When holding the Main Skill button, Chaton throws more Bouncing Bombs.\nIncreases the &Param2& dealt by the Bouncing Bomb.',
          params: [
            'Sniper Operation',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Meowth\'s Curse',
          icon: '11401_Potential_03',
          description: 'Reduces Dark Mark\'s Attack Interval by <color=#0abec5>50%</color>.\nIncreases Chaton\'s &Param1& to targets inflicted with Dark Mark by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'Reduces Dark Mark\'s Attack Interval.\nIncreases Chaton\'s &Param1& to targets inflicted with Dark Mark.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Reincarnation of Darkness',
          icon: '11401_Potential_04',
          description: 'Increases the &Param2& dealt by ##Dark Ray#4036# by <color=#0abec5>&Param3&</color>.\nEnhances Dark Mark when the laser hits a target inflicted with Dark Mark, increasing the DMG Multiplier dealt by Dark Mark by <color=#0abec5>&Param4&</color>, stacking up to 3 times.',
          shortDescription: 'Increases the &Param2& dealt by ##Dark Ray#4036#.\nIncreases Dark Mark\'s DMG when the laser hits a target inflicted with Dark Mark.',
          params: [
            'Sniper Operation',
            '',
            '0.57%',
            '850000'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4036: {
              id: 4036,
              name: 'Dark Ray'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Chain Bounce',
          icon: '11401_Potential_05',
          description: 'The Bouncing Bomb bounces 1 more time.\nIncreases the &Param1& when a Bouncing Bomb deals DMG by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases a Bouncing Bomb\'s bounce count.\nIncreases the &Param1& when a Bouncing Bomb deals DMG.',
          params: [
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Mark of Darkness',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the &Param1& dealt by ##Dark Ray#4036# by <color=#ec6d21>&Param2&</color>.\nChaton\'s Auto Attack deals an additional <color=#ec6d21>&Param3&</color> of ATK as Ignis Skill DMG to targets inflicted with Dark Mark. This effect can be triggered once per second.',
          shortDescription: 'Increases the &Param1& dealt by ##Dark Ray#4036#.\nChaton\'s Auto Attacks deal additional DMG to targets inflicted with Dark Mark.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '91%/146%/201%/255%/310%/365%/419%/474%/529%',
            'Sniper Operation'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            4036: {
              id: 4036,
              name: 'Dark Ray'
            }
          }
        },
        {
          name: 'Mobile Combat',
          icon: 'Common_Potential_13',
          description: 'Chaton can dodge one more time.\nWhen Chaton casts &Param1& (Main Skill), increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'Increases Chaton\'s dodges.\nWhen Chaton casts the Main Skill, increases her &Param2&.',
          params: [
            'Sniper Operation',
            'Fee',
            '10%/14%/17%/21%/24%/28%/31%/35%/38%',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Efficient Use',
          icon: '11401_Potential_06',
          description: 'When a Bouncing Bomb runs out of bounces, it returns to Chaton and grants her Spark.\nWhen holding &Param1& (Main Skill), Chaton consumes Spark to increase her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s and throws an Explosive Bomb at the target, dealing <color=#ec6d21>&Param5&</color> of ATK as AoE Ignis Skill DMG.\nThe Explosive Bomb cannot bounce.',
          shortDescription: 'When a Bouncing Bomb runs out of bounces, it returns to Chaton and grants her Spark.\nWhen holding the Main Skill button, consumes Spark to increase Chaton\'s &Param2& and deals additional DMG to the target.',
          params: [
            'Sniper Operation',
            'Skillcritpower',
            '11%/18%/25%/32%/38%/45%/52%/59%/66%',
            '5',
            '154%/246%/338%/430%/522%/614%/706%/798%/890%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Lucky Bullet',
          icon: '11401_Potential_09',
          description: 'Increases the &Param1& of ##Dark Ray#4036# by <color=#ec6d21>&Param2&</color>.\nWhen the laser lands a Crit Hit, resets the Main Skill\'s Cooldown and increases the &Param3& dealt by ##Dark Ray#4036# by <color=#ec6d21>&Param4&</color> for &Param7&s. This effect can be triggered once every &Param6&s.',
          shortDescription: 'Increases the &Param1& of ##Dark Ray#4036#.\nWhen the laser lands a Crit Hit, resets the Main Skill\'s Cooldown and increases the &Param3& dealt by ##Dark Ray#4036#.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            'Sniper Operation',
            '12',
            '12'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            4036: {
              id: 4036,
              name: 'Dark Ray'
            }
          }
        },
        {
          name: 'Dominant Firepower',
          icon: 'Common_Potential_Fire_1',
          description: 'Activates the rapid-fire mode for Chaton\'s &Param1& (Auto Attack), increasing her attack frequency. When Chaton is in the ##Evil Eye Unleashed#4035# state, this effect changes to increasing her &Param6& by &Param7&.\nWhen Chaton triggers a mark, increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s, stacking up to &Param5& times.',
          shortDescription: 'Activates the rapid-fire mode for Chaton\'s Auto Attack, increasing her attack frequency.\nWhen Chaton triggers a mark, increases her &Param2&.',
          params: [
            'Full-Auto Trigger',
            'ATK',
            '2.1%/3.4%/4.6%/5.9%/7.1%/8.4%/9.7%/10.9%/12.2%',
            '5',
            '5',
            'Atkspd_P',
            '60%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4035: {
              id: 4035,
              name: 'Evil Eye Unleashed',
              description: 'Chaton breaks the seal of Evil Eye, gaining Super Armor, increased stats, and enhanced Auto Attacks.'
            }
          }
        },
        {
          name: 'Deadly Verdict',
          icon: 'Common_Potential_Earth_1',
          description: 'Increases a Bouncing Bomb\'s &Param1& by <color=#ec6d21>&Param2&</color>.\nWhen a Bouncing Bomb lands a Crit Hit, increases the &Param3& the target takes from it by <color=#ec6d21>&Param4&</color> for &Param5&s, stacking up to &Param6& times.',
          shortDescription: 'Increases Bouncing Bomb\'s &Param1&.\nWhen a Bouncing Bomb lands a Crit Hit, increases the &Param3& the target takes from it.',
          params: [
            '',
            '0.08%/0.08%/0.08%/0.08%/0.08%/0.08%/0.08%/0.08%/0.08%',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '10',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Hunting Mark',
          icon: 'Common_Potential_Earth_1',
          description: 'After Dark Mark lands a Crit Hit, increases the &Param1& of Dark Mark when it deals DMG by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'After Dark Mark lands a Crit Hit, increases the &Param1& of Dark Mark when it deals DMG.',
          params: [
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%',
            '4',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Foe Annihilation',
          icon: 'Common_Potential_10',
          description: 'Increases Chaton\'s &Param2& dealt to targets with HP greater than &Param1& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Increases Chaton\'s &Param2& dealt to targets with higher HP.',
          params: [
            '20%',
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Ambush Operation',
          icon: '11401_Potential_21',
          description: 'When each shot of &Param1& (Support Skill) hits its first target, inflicts Tier 1 Lock and deals an additional <color=#0abec5>&Param2&</color> of ATK as AoE Ignis Skill DMG.\nWhen a target is already inflicted with Tier 1 Lock, the effect upgrades to Tier 2 Lock, dealing <color=#0abec5>&Param3&</color> of ATK as AoE Ignis Skill DMG.\nWhen a target is already inflicted with Tier 2 Lock, the effect upgrades to Tier 3 Lock, dealing <color=#0abec5>&Param4&</color> of ATK as AoE Ignis Skill DMG.',
          shortDescription: 'When each shot of the Support Skill hits its first target, deals additional DMG.',
          params: [
            'Blitz Assault',
            '125%/144%/163%/220%/237%/255%/290%/305%/320%/350%/375%/401%/426%',
            '167%/192%/217%/293%/316%/340%/387%/407%/427%/467%/501%/534%/568%',
            '188%/216%/245%/330%/356%/382%/435%/458%/480%/526%/563%/601%/639%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Strike While the Iron is Hot',
          icon: '11401_Potential_22',
          description: 'Increases the &Param2& of &Param1& (Support Skill) by <color=#0abec5>&Param3&</color>.\nWhen Penetrating Bullet lands a Crit Hit, &Param1& (Support Skill) fires 1 additional shot. This effect can be triggered <color=#0abec5>2</color> times per Support Skill cast.',
          shortDescription: 'Increases the &Param2& of the Support Skill.\nWhen Penetrating Bullet lands a Crit Hit, the Support Skill fires 1 additional shot.',
          params: [
            'Blitz Assault',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Combat Frenzy',
          icon: '11401_Potential_23',
          description: 'Increases the &Param2& dealt by &Param1& (Support Skill) by <color=#0abec5>&Param3&</color>.\nEach time the Support Skill fires, shoots <color=#0abec5>2</color> additional Penetrating Bullets.',
          shortDescription: 'Increases the &Param2& dealt by &Param1& (Support Skill).\nEach time the Support Skill fires, shoots more Penetrating Bullets.',
          params: [
            'Blitz Assault',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Core Blast',
          icon: '11401_Potential_24',
          description: 'Increases the &Param2& of &Param1& (Support Skill) by <color=#0abec5>&Param3&</color>.\nWhen Penetrating Bullet deals DMG, it splits into <color=#0abec5>12</color> Small Penetrating Bullets, dealing <color=#0abec5>&Param4&</color> of ATK as Ignis Skill DMG. It splits up to &Param5& times per Tumbling Shot.',
          shortDescription: 'Increases the &Param2& of the Support Skill.\nWhen Penetrating Bullet deals DMG, it splits into many Small Penetrating Bullets that also deal DMG.',
          params: [
            'Blitz Assault',
            '',
            '0.57%',
            '9%/10%/11%/15%/17%/18%/20%/21%/22%/25%/26%/28%/30%',
            '3'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      supportNormal: [
        {
          name: 'Evil Eye Gaze',
          icon: '11401_Potential_25',
          description: 'Increases the &Param2& of &Param1& (Support Skill) by <color=#ec6d21>&Param3&</color>.\nWhen casting the Support Skill, Evil Eye locks onto the target\'s current position, dealing <color=#ec6d21>&Param4&</color> of ATK as AoE Ignis Skill DMG every 0.4s for 8s.',
          shortDescription: 'Increases the &Param2& of the Support Skill.\nWhen casting the Support Skill, Evil Eye locks onto the target\'s current position, dealing AoE DMG over time.',
          params: [
            'Blitz Assault',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '17%/28%/38%/49%/59%/70%/80%/91%/101%/0%/0%/0%/0%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'One Stone Two Birds',
          icon: '11401_Potential_28',
          description: 'Increases Chaton\'s &Param2& by <color=#ec6d21>&Param3&</color>.\nEach time &Param1& (Support Skill) fires, shoots 2 additional Meow Bombs.\nThe bombs shoot forward in a straight line 3 times, dealing <color=#ec6d21>&Param4&</color> of ATK as AoE Ignis Skill DMG each time.',
          shortDescription: 'Increases Chaton\'s &Param2&.\nEach time the Support Skill fires, shoots additional Meow Bombs, dealing DMG.',
          params: [
            'Blitz Assault',
            'Skill DMG',
            '6%/9.6%/13.2%/16.8%/20.4%/24%/27.6%/31.2%/34.8%',
            '18%/30%/41%/52%/63%/75%/86%/97%/109%/0%/0%/0%/0%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Energy Overflow',
          icon: 'Common_Potential_11',
          description: 'When Chaton\'s Energy is full, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When Chaton\'s Energy is full, increases her &Param1&.',
          params: [
            'Skill DMG',
            '24%/38.4%/52.8%/67.2%/81.6%/96%/110.4%/124.8%/139.2%',
            '20'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Excess Amplification',
          icon: 'Common_Potential_10',
          description: 'Increases the &Param1& Chaton deals to targets inflicted with Lock, increasing <color=#ec6d21>&Param2&</color> for each tier of Lock.',
          shortDescription: 'Increases the &Param1& Chaton deals to targets inflicted with Lock.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Burnt Rifling',
          icon: 'Common_Potential_Fire_1',
          description: 'When &Param1& (Support Skill) lands a Crit Hit, increases the &Param2& it deals by <color=#ec6d21>&Param3&</color>, stacking up to &Param4& times.',
          shortDescription: 'When the Support Skill lands a Crit Hit, increases the &Param2& it deals.',
          params: [
            'Blitz Assault',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Swift Assault',
          icon: 'Common_Potential_13',
          description: 'While &Param1& (Support Skill) is active, increases Chaton\'s &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'While &Param1& (Support Skill) is active, increases Chaton\'s &Param2&.',
          params: [
            'Blitz Assault',
            'Skill DMG',
            '12%/19.2%/26.4%/33.6%/40.8%/48%/55.2%/62.4%/69.6%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Relentless Suppression',
          icon: 'Common_Potential_10',
          description: 'While &Param1& (Support Skill) is active, increases the &Param2& dealt by Chaton to the current target by <color=#ec6d21>&Param3&</color> per second, stacking up to &Param4& times.',
          shortDescription: 'While the Support Skill is active, increases the &Param2& dealt by Chaton to the current target over time.',
          params: [
            'Blitz Assault',
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Minor Fling',
          icon: '11401_Potential_30',
          description: '&Param1& (Support Skill) instantly eliminates normal targets with HP below &Param2&.\nIncreases the &Param3& dealt to elite or boss targets with HP below &Param5& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'The Support Skill instantly eliminates normal targets with low HP.\nIncreases the &Param3& dealt to elite or boss targets with low HP.',
          params: [
            'Blitz Assault',
            '30%',
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%',
            '80%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Burning Passion',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the &Param1& of Ignis Trekkers in the squad by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& of Ignis Trekkers in the squad.',
          params: [
            'ATK',
            '10%/16%/22%/28%/34%/40%/46%/52%/58%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Curse Fall',
          icon: '11401_Potential_41',
          description: '&Param1& (Ultimate) and Dark Burst (while ##Evil Eye Unleashed#4035# is active) deal an additional <color=#ec6d21>&Param2&</color> of ATK as Ignis Ultimate DMG to targets inflicted with Cat Eye Mark.',
          shortDescription: 'The Ultimate and Dark Burst deal additional DMG to targets inflicted with Cat Eye Mark.',
          params: [
            'Dark Evil Eye',
            '14%/22%/30%/39%/47%/55%/64%/72%/81%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            4035: {
              id: 4035,
              name: 'Evil Eye Unleashed',
              description: 'Chaton breaks the seal of Evil Eye, gaining Super Armor, increased stats, and enhanced Auto Attacks.'
            }
          }
        },
        {
          name: 'Penetrating Bullet',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the duration of ##Evil Eye Unleashed#4035# to &Param3&s.\nIncreases Chaton\'s &Param1& by <color=#ec6d21>&Param2&</color>.\nAllows bullets fired by Dark Burst to penetrate targets.',
          shortDescription: 'Increases the duration of ##Evil Eye Unleashed#4035#.\nIncreases Chaton\'s &Param1&.\nAllows bullets fired by Dark Burst to penetrate targets.',
          params: [
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
            '20'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            4035: {
              id: 4035,
              name: 'Evil Eye Unleashed',
              description: 'Chaton breaks the seal of Evil Eye, gaining Super Armor, increased stats, and enhanced Auto Attacks.'
            }
          }
        },
        {
          name: 'Doom\'s Echo',
          icon: 'Common_Potential_10',
          description: 'Cat Eye Mark remains on the target after the Ultimate ends. Increases Chaton\'s &Param1& to targets inflicted with Cat Eye Mark by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Cat Eye Mark remains on the target after the Ultimate ends. Increases Chaton\'s &Param1& to targets inflicted with Cat Eye Mark.',
          params: [
            '',
            '0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%/0.18%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  firefly: {
    id: 115,
    name: 'Firefly',
    element: 'Lux',
    buildOrder: {
      main: {
        build1: {
          title: 'Firefly: Main Build 1',
          description: 'A DPS build that concentrates Avalanche: Floating Cannons\' energy and focuses on a single target.',
          potentials: [
            'Firefly Glow: Radiance',
            'Firefly Glow: Luminary',
            'Tide of Starmarks',
            'Radiant Rainfall',
            'Lone Star Gleam'
          ]
        },
        build2: {
          title: 'Firefly: Main Build 2',
          description: 'A DPS build that spreads Avalanche: Floating Cannons\' firepower and excels at attacking multiple targets.',
          potentials: [
            'Firefly Glow: Convergence',
            'Firefly Glow: Scatter Beam',
            'Astral Album',
            'Luminous Rhythm',
            'Flash Resonance'
          ]
        }
      },
      support: {
        build1: {
          title: 'Firefly: Support Build 1',
          description: 'A DPS build that enhances Avalanche: Flying Blade, specializing in striking a target with high-frequency attacks.',
          potentials: [
            'Radiance Blade: Twin Shadow',
            'Radiance Blade: Firefly',
            'Lightforged Blade',
            'Stellar Crash',
            'Blade of Falling Petals'
          ]
        },
        build2: {
          title: 'Firefly: Support Build 2',
          description: 'A DPS build that enhances Avalanche: Giant Sword, continuously striking the target with heavy blows.',
          potentials: [
            'Radiance Blade: Blazing Edge',
            'Radiance Blade: Pursuing Slash',
            'Blade Flash',
            'Luminous Onslaught',
            'Radiant Ripple'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Firefly Glow: Radiance',
          icon: '11501_Potential_01',
          description: 'Avalanche: Floating Cannons now attack the target simultaneously, dealing <color=#0abec5>&Param2& x4</color> of ATK as Lux Auto ATK DMG every 0.5s. Can trigger ##Lux Mark#1015#.\nIncreasing Firefly\'s ATK SPD reduces the interval between attacks.',
          shortDescription: 'Avalanche: Floating Cannons attack the target simultaneously, dealing DMG. Can trigger ##Lux Mark#1015#.',
          params: [
            'Star Barrage',
            '11%/13%/15%/20%/22%/24%/27%/29%/30%/33%/35%/38%/40%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Firefly Glow: Luminary',
          icon: '11501_Potential_02',
          description: 'When Avalanche: Floating Cannons deal DMG to the same target, Firefly gains 1 stack of Focus. Switching target will remove 1 stack of Focus. When Focus stacks 12 times, enhances ##Artillery Form#4030#\'s Avalanche: Floating Cannons, increasing &Param3& by <color=#0abec5>&Param2&</color>.',
          shortDescription: 'After Avalanche: Floating Cannons deal multiple instances of DMG to the same target, increases own &Param3&.',
          params: [
            'Star Barrage',
            '0.56%',
            ''
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4030: {
              id: 4030,
              name: 'Artillery Form',
              description: 'The ranged attack form Firefly enters after casting the Main Skill. Uses floating cannons to strike targets for a period of time.'
            }
          }
        },
        {
          name: 'Firefly Glow: Convergence',
          icon: '11501_Potential_03',
          description: 'When dealing DMG, Avalanche: Floating Cannons generate Scorching Sunray that continuously attacks the target\'s position, dealing <color=#0abec5>&Param2&</color> of ATK as Lux Skill DMG every 0.4s for 2s. Can trigger ##Lux Mark#1015#.\nScorching Sunray can only be triggered once on each target every 10s. Up to 4 Scorching Sunray can exist at once.',
          shortDescription: 'When dealing DMG, Avalanche: Floating Cannons generate Scorching Sunray that continuously attacks the target\'s position. Can trigger ##Lux Mark#1015#.',
          params: [
            'Star Barrage',
            '85%/97%/110%/148%/160%/172%/195%/206%/216%/236%/253%/270%/287%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Firefly Glow: Scatter Beam',
          icon: '11501_Potential_04',
          description: 'The beams fired by Avalanche: Floating Cannons can refract up to 4 times, dealing <color=#0abec5>&Param2&</color> of ATK as Lux Skill DMG. Can trigger ##Lux Mark#1015#.\nThe same target cannot be hit by refracted beams more than once.',
          shortDescription: 'The beams fired by Avalanche: Floating Cannons can refract, simultaneously dealing DMG to multiple targets. Can trigger ##Lux Mark#1015#.',
          params: [
            'Star Barrage',
            '5%/6%/7%/10%/11%/11%/13%/14%/14%/16%/17%/18%/19%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Tide of Starmarks',
          icon: 'Common_Potential_Water_1',
          description: 'When Avalanche: Floating Cannons deal DMG to the boss or elite targets, increases the squad\'s &Param5& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Avalanche: Floating Cannons deal DMG to the boss or elite targets, increases the squad\'s &Param5&.',
          params: [
            'Star Barrage',
            '0.19%/0.36%/0.48%/0.6%/0.72%/0.84%/0.96%/1.08%/1.2%',
            '3',
            '100',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Astral Album',
          icon: '11501_Potential_08',
          description: 'When casting &Param1& (Main Skill), Firefly shoots an energy round, dealing <color=#ec6d21>&Param2&</color> of ATK as Lux Skill DMG, then causing an explosion to deal <color=#ec6d21>&Param3&</color> of ATK as AoE Lux Skill DMG. Can trigger ##Lux Mark#1015#.',
          shortDescription: 'When casting the Main Skill, Firefly shoots an energy round, dealing AoE DMG. Can trigger ##Lux Mark#1015#.',
          params: [
            'Star Barrage',
            '113%/180%/248%/316%/384%/451%/519%/587%/654%',
            '219%/351%/483%/614%/746%/877%/1009%/1140%/1272%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Blazing Radiance',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases Firefly\'s &Param2& by <color=#ec6d21>&Param1&</color>.\nEvery time Firefly triggers ##Lux Mark#1015#, increases her &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, stacking up to &Param6& times.',
          shortDescription: 'Increases Firefly\'s &Param2&.\nEvery time Firefly triggers ##Lux Mark#1015#, increases own &Param3&.',
          params: [
            '13%/20%/28%/35%/43%/50%/58%/65%/73%',
            'Markdmg',
            'Lee',
            '1.4%/2.2%/3%/3.8%/4.6%/5.4%/6.2%/7%/7.8%',
            '6',
            '10'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Radiant Rainfall',
          icon: '11501_Potential_06',
          description: 'While Firefly is in ##Artillery Form#4030#, Avalanche: Floating Cannons fire a volley at the target every 6s, dealing <color=#ec6d21>&Param2& x4</color> of ATK as Lux Auto Attack DMG.\nUpon hitting the target, the volley triggers an explosion, dealing <color=#ec6d21>&Param3&</color> of ATK as AoE Lux Auto Attack DMG. Can trigger ##Lux Mark#1015#.',
          shortDescription: 'While Firefly is in ##Artillery Form#4030#, Avalanche: Floating Cannons periodically fire a volley at the target, dealing bonus DMG. Can trigger ##Lux Mark#1015#.',
          params: [
            'Star Barrage',
            '34%/55%/76%/97%/117%/138%/159%/179%/200%',
            '115%/184%/253%/322%/391%/460%/528%/597%/666%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4030: {
              id: 4030,
              name: 'Artillery Form',
              description: 'The ranged attack form Firefly enters after casting the Main Skill. Uses floating cannons to strike targets for a period of time.'
            },
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Luminous Rhythm',
          icon: 'Common_Potential_13',
          description: 'Increases &Param3& dealt by Avalanche: Floating Cannons\' next attack by <color=#ec6d21>&Param2&</color> every 4s.\nEach Avalanche: Floating Cannon has its own timer.',
          shortDescription: 'Increases &Param3& dealt by Avalanche: Floating Cannons at set intervals.',
          params: [
            'Star Barrage',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Absolute Brilliance',
          icon: 'Common_Potential_Light_1',
          description: '&Param1& (Ultimate) can trigger ##Lux Mark#1015# and summon a ##Lucent#4028#, dealing &Param2& of ATK as Lux Mark DMG.\nWhen the mark is triggered, increases own &Param6& by <color=#ec6d21>&Param3&</color> for &Param4&s, stacking up to &Param5& times.',
          shortDescription: 'The Ultimate can trigger ##Lux Mark#1015#. When the mark is triggered, increases own &Param6&.',
          params: [
            'Stellar Torrent',
            '17%/22%/27%/32%/37%/42%/47%/52%/57%',
            '6%/9%/13%/16%/20%/23%/27%/30%/34%',
            '20',
            '3',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4028: {
              id: 4028,
              name: 'Lucent',
              description: 'When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer.'
            }
          }
        },
        {
          name: 'Lone Star Gleam',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firefly deals DMG to a lone target, increases &Param2& dealt by <color=#ec6d21>&Param1&</color>.',
          shortDescription: 'Increases Firefly\'s &Param2& dealt to lone targets.',
          params: [
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Flash Resonance',
          icon: 'Common_Potential_Light_1',
          description: 'Whenever Avalanche: Floating Cannons hit a target afflicted with ##Lux Mark#1015#, increases the squad\'s &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
          shortDescription: 'When Avalanche: Floating Cannons hit different targets afflicted with ##Lux Marks#1015#, increases the squad\'s &Param4&.',
          params: [
            '1.6%/2.6%/3.6%/4.6%/5.6%/6.6%/7.6%/8.6%/9.6%',
            '7',
            '5',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Phantom Blast',
          icon: 'Common_Potential_Fire_1',
          description: 'Firefly can dodge one more time.\nWhen Firefly dodges, she leaves behind a Shadow that deals <color=#ec6d21>&Param1&</color> of ATK as Lux Skill DMG to nearby targets and stuns them for &Param2&s. This effect can only be triggered once every &Param3&s. Can trigger ##Lux Mark#1015#.',
          shortDescription: 'Increases the number of times Firefly can dodge.\nAfter dodging, Firefly deals Lux DMG to nearby targets and stuns them. Can trigger ##Lux Mark#1015#.',
          params: [
            '49%/79%/108%/138%/167%/197%/227%/256%/286%',
            '3',
            '7'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      supportCore: [
        {
          name: 'Radiance Blade: Twin Shadow',
          icon: '11501_Potential_21',
          description: 'In an all-Lux squad, casting &Param1& (Support Skill) grants additional Avalanche: Flying Blades and increases ATK frequency afterwards.\nWhenever Avalanche: Flying Blade deals DMG, increases Avalanche: Flying Blade\'s &Param4& by <color=#0abec5>&Param5&</color> and increases &Param2& by <color=#0abec5>&Param3&</color> while this ##Sword Form#4031# is active, stacking up to &Param6& times.',
          shortDescription: 'In an all-Lux squad, casting the Support Skill grants additional Avalanche: Flying Blades.\nWhenever Avalanche: Flying Blade deals DMG, increases own &Param2& and &Param4&.',
          params: [
            'Starflare Pursuit',
            '',
            '',
            'ATK',
            '',
            '20'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4031: {
              id: 4031,
              name: 'Sword Form',
              description: 'The melee attack form Firefly enters after casting the Support Skill. Wields a giant sword and launches flying blades to strike targets for a period of time.'
            }
          }
        },
        {
          name: 'Radiance Blade: Firefly',
          icon: '11501_Potential_22',
          description: 'Increases the &Param1& of Avalanche: Flying Blade by <color=#0abec5>&Param2&</color> when it deals DMG.\nWhenever Avalanche: Flying Blade deals DMG, it deals an additional <color=#0abec5>&Param3&</color> of ATK as AoE Lux Skill DMG and inflicts ##Lux Mark: Radiance#2016#.',
          shortDescription: 'Increases the &Param1& of Avalanche: Flying Blade when it deals DMG.\nWhenever Avalanche: Flying Blade deals DMG, it deals additional AoE DMG and inflicts ##Lux Mark: Radiance#2016#.',
          params: [
            '',
            '0.71%',
            '41%/48%/54%/72%/78%/84%/96%/101%/106%/116%/124%/132%/140%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Radiance Blade: Blazing Edge',
          icon: '11501_Potential_23',
          description: 'In an all-Lux squad, extends the attack range of Avalanche: Giant Sword and increases its &Param2& by <color=#0abec5>&Param3&</color>.\nWhenever Avalanche: Giant Sword attacks, it triggers an additional attack, dealing <color=#0abec5>&Param1&</color> of ATK as Lux Auto ATK DMG and inflicting ##Lux Mark: Radiance#2016#.',
          shortDescription: 'In an all-Lux squad, increases the attack range and &Param2& of Avalanche: Giant Sword.\nWhenever Avalanche: Giant Sword attacks, it triggers an additional attack, dealing DMG and inflicting ##Lux Mark: Radiance#2016#.',
          params: [
            '163%/188%/212%/285%/308%/331%/377%/396%/416%/455%/488%/520%/553%',
            '',
            '0.56%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Radiance Blade: Pursuing Slash',
          icon: '11501_Potential_24',
          description: 'After Avalanche: Giant Sword attacks 8 times, Firefly automatically casts Dominating Slash, dealing <color=#0abec5>&Param1&</color> of ATK, <color=#0abec5>&Param2& x2</color> of ATK, and <color=#0abec5>&Param3& x3</color> of ATK as Lux Auto ATK DMG and inflicting ##Lux Mark: Radiance#2016#.',
          shortDescription: 'After Avalanche: Giant Sword attacks a certain number of times, Firefly automatically casts Dominating Slash, dealing DMG and inflicting ##Lux Mark: Radiance#2016#.',
          params: [
            '195%/225%/254%/342%/369%/397%/451%/475%/498%/545%/584%/623%/663%',
            '220%/253%/286%/385%/416%/446%/508%/534%/561%/613%/657%/701%/745%',
            '171%/197%/222%/299%/323%/347%/395%/416%/436%/477%/511%/546%/580%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Lightforged Blade',
          icon: 'Common_Potential_Fire_1',
          description: 'When the Main Trekker triggers ##Lux Mark#1015#, Firefly gains 1 stack of Glow. When ##Lucent#4028# is generated afterwards, Firefly gains 1 stack of Halo. Both effects can stack up to &Param7& times.\nWhen casting &Param1& (Support Skill), Firefly consumes all stacks of Glow and Halo. For the current ##Sword Form#4031#\'s active duration, increases Avalanche: Flying Blade\'s &Param3& by <color=#ec6d21>&Param2&</color> for each stack of Glow consumed; increases Avalanche: Flying Blade\'s &Param6& by <color=#ec6d21>&Param5&</color> for each stack of Halo consumed.',
          shortDescription: 'After the Lux Main Trekker triggers ##Lux Mark#1015# and generates ##Lucent#4028#, increases the &Param3& and &Param6& of Avalanche: Flying Blade the next time Firefly is in ##Sword Form#4031#.',
          params: [
            'Starflare Pursuit',
            '0.71%/0.71%/0.71%/0.71%/0.71%/0.71%/0.71%/0.71%/0.71%',
            '',
            '20',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '',
            '20'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4028: {
              id: 4028,
              name: 'Lucent',
              description: 'When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer.'
            },
            4031: {
              id: 4031,
              name: 'Sword Form',
              description: 'The melee attack form Firefly enters after casting the Support Skill. Wields a giant sword and launches flying blades to strike targets for a period of time.'
            }
          }
        },
        {
          name: 'Blade Flash',
          icon: 'Common_Potential_Fire_1',
          description: 'While Firefly is in ##Sword Form#4031#, increases the &Param3& dealt by Avalanche: Giant Sword by <color=#ec6d21>&Param1&</color>, stacking up to &Param2& times.\nIncreases Firefly\'s Movement SPD by &Param4& when she is too far from her target or has no target.',
          shortDescription: 'While Firefly is in ##Sword Form#4031#, increases the &Param3& dealt by Avalanche: Giant Sword over time.\nIncreases Firefly\'s Movement SPD when she is too far from her target or has no target.',
          params: [
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%',
            '15',
            '',
            '100%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4031: {
              id: 4031,
              name: 'Sword Form',
              description: 'The melee attack form Firefly enters after casting the Support Skill. Wields a giant sword and launches flying blades to strike targets for a period of time.'
            }
          }
        },
        {
          name: 'Sanctuary of Light',
          icon: 'Common_Potential_Fire_1',
          description: '&Param1& (Ultimate) can inflict ##Lux Mark: Radiance#2016#.\nWhen Firefly casts the Ultimate, the Lux Main Trekker gains a shield equal to <color=#ec6d21>&Param2&</color> of Firefly\'s Base Max HP for &Param3&s.',
          shortDescription: 'Firefly\'s Ultimate can inflict ##Lux Mark: Radiance#2016#.\nWhen Firefly casts the Ultimate, the Lux Main Trekker gains a shield.',
          params: [
            'Stellar Torrent',
            '14%/18%/23%/27%/32%/36%/41%/45%/50%',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Stellar Crash',
          icon: '11501_Potential_26',
          description: 'When the Lux Main Trekker deals Skill DMG, generates 1 Avalanche: Flying Blade to strike the target, dealing <color=#ec6d21>&Param2&</color> of Firefly\'s ATK as Lux Skill DMG and inflicting ##Lux Mark: Radiance#2016#. When this Avalanche: Flying Blade deals DMG, it increases the target\'s &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s based on the number of ##Light Curtain#4029# stacks on the target, stacking up to &Param6& times.\nThis effect can only be triggered once every &Param7&s, and Firefly does not need to be on the battlefield.',
          shortDescription: 'When the Lux Main Trekker deals Skill DMG, generates Avalanche: Flying Blade to strike the target, dealing additional DMG and inflicting ##Lux Mark: Radiance#2016#.\nWhen this Avalanche: Flying Blade deals DMG, it increases the target\'s &Param3& based on the number of ##Light Curtain#4029# stacks on the target.',
          params: [
            'Starflare Pursuit',
            '19%/31%/43%/55%/67%/79%/90%/102%/114%',
            'Leercd',
            '0.5%/0.8%/1.1%/1.4%/1.7%/2%/2.3%/2.6%/2.9%',
            '10',
            '20',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4029: {
              id: 4029,
              name: 'Glimmer'
            }
          }
        },
        {
          name: 'Luminous Onslaught',
          icon: 'Common_Potential_Fire_1',
          description: 'When the Main Trekker triggers ##Lux Mark#1015# and generates ##Thunderbolt#4027# while Firefly is on the battlefield, increases the &Param2& of targets near her by <color=#ec6d21>&Param1&</color>, and increases Firefly\'s &Param6& by <color=#ec6d21>&Param5&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When the Main Trekker triggers ##Lux Mark#1015# and generates ##Thunderbolt#4027# while Firefly is on the battlefield, increases her own &Param6& and the &Param2& of nearby targets.',
          params: [
            '1%/1.6%/2.2%/2.8%/3.4%/4%/4.6%/5.2%/5.8%',
            'Leercd',
            '4',
            '10',
            '0.4%/0.6%/0.8%/1%/1.2%/1.4%/1.6%/1.8%/2%',
            'ATK'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1015: {
              id: 1015,
              name: 'Lux Mark',
              description: 'The generic name for all Lux Marks.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4027: {
              id: 4027,
              name: 'Thunderbolt',
              description: 'When certain Lux Trekkers trigger a Mark, they deal DMG in a small area.'
            }
          }
        },
        {
          name: 'Cosmic Brilliance',
          icon: 'Common_Potential_Fire_1',
          description: 'When Firefly casts &Param1& (Support Skill), increases the &Param3& of Lux Trekkers in the squad by <color=#ec6d21>&Param4&</color> for &Param5&s.',
          shortDescription: 'When Firefly casts the Support Skill, increases the &Param3& of Lux Trekkers in the squad.',
          params: [
            'Starflare Pursuit',
            '0',
            'ATK',
            '10%/16%/22%/28%/34%/40%/46%/52%/58%',
            '26'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Blade of Falling Petals',
          icon: '11501_Potential_27',
          description: 'When ##Sword Form#4031# ends, Firefly commands all ##Avalanches#4032# to strike targets around her. Each ##Avalanche#4032# deals <color=#ec6d21>&Param1& x2</color> of ATK as AoE Lux Skill DMG and inflicts ##Lux Mark: Radiance#2016#.\nIncreases Firefly\'s &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s each time this effect deals DMG, stacking up to &Param5& times.',
          shortDescription: 'When ##Sword Form#4031# ends, Firefly commands all ##Avalanches#4032# to strike targets around her, dealing AoE DMG and inflicting ##Lux Mark: Radiance#2016#.\nIncreases Firefly\'s &Param2& each time this effect deals DMG.',
          params: [
            '34%/55%/76%/96%/117%/138%/158%/179%/200%',
            'Skillcritpower',
            '1.1%/1.8%/2.5%/3.2%/3.9%/4.6%/5.3%/6%/6.7%',
            '15',
            '12'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4031: {
              id: 4031,
              name: 'Sword Form',
              description: 'The melee attack form Firefly enters after casting the Support Skill. Wields a giant sword and launches flying blades to strike targets for a period of time.'
            },
            4032: {
              id: 4032,
              name: 'Avalanche',
              description: 'Firefly\'s personal combat unit, which remains in standby mode while following Firefly. When required, it transforms into various combat forms to attack Firefly\'s targets.'
            },
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Radiant Ripple',
          icon: '11501_Potential_30',
          description: 'When Avalanche: Giant Sword deals DMG, it deals an additional <color=#ec6d21>&Param1&</color> of ATK as AoE Auto ATK DMG and inflicts ##Lux Mark: Radiance#2016#.\nThis effect can only be triggered once every &Param2&s.',
          shortDescription: 'When Avalanche: Giant Sword deals DMG, it deals additional AoE DMG and inflicts ##Lux Mark: Radiance#2016#.',
          params: [
            '185%/295%/406%/517%/627%/738%/849%/960%/1070%',
            '1'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2016: {
              id: 2016,
              name: 'Lux Mark: Radiance',
              description: 'Some Lux Trekkers apply a special status to the target for 10 sec.\nWhen triggered by specific Lux Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Domain of Purity',
          icon: 'Common_Potential_Fire_1',
          description: 'Increases the squad\'s &Param3& by <color=#ec6d21>&Param1&</color> in an all-Lux squad.\nWhen Firefly is on the battlefield, increases the squad\'s &Param3& by an additional <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the squad\'s &Param3& in an all-Lux squad.\nWhen Firefly is on the battlefield, additionally increases the squad\'s &Param3&.',
          params: [
            '10%/16%/22%/28%/34%/40%/46%/52%/58%',
            '8%/13%/18%/22%/27%/32%/37%/42%/46%',
            'Lee'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Persistent Warmth',
          icon: '11501_Potential_41',
          description: 'After Firefly casts &Param1& (Ultimate), increases her &Param3& by <color=#ec6d21>&Param2&</color> for &Param4&s the next time she casts a skill.',
          shortDescription: 'After Firefly casts the Ultimate, increases her &Param3& the next time she casts a skill.',
          params: [
            'Stellar Torrent',
            '16%/26%/35%/45%/54%/64%/74%/83%/93%',
            'Lee',
            '30'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Ultimate Radiance',
          icon: '11501_Potential_42',
          description: 'Increases the &Param3& dealt by &Param1& (Ultimate) by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param3& dealt by Firefly\'s Ultimate.',
          params: [
            'Stellar Torrent',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Radiance of Shattered Stars',
          icon: 'Common_Potential_Light_1',
          description: 'Increases the &Param4& dealt by &Param1& (Ultimate) to targets with HP below &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Increases the &Param4& dealt by Firefly\'s Ultimate to targets with low HP.',
          params: [
            'Stellar Torrent',
            '800000',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  eleanor: {
    id: 137,
    name: 'Eleanor',
    element: 'Ventus',
    buildOrder: {
      main: {
        build1: {
          title: 'Eleanor: Main Build 1',
          description: 'An Auto Attack build that restores Tactical Energy over time to cast enhanced Cross Slash at high frequency.',
          potentials: [
            'Tactical Protocol: Threshold',
            'Tactical Protocol: Detonation',
            'Double Rifts',
            'Battle Fury',
            'Vortex Boost'
          ]
        },
        build2: {
          title: 'Eleanor: Main Build 2',
          description: 'A skill build that expertly controls sentries to deal DMG in a large area to hordes of enemies.',
          potentials: [
            'Tactical Protocol: Overload',
            'Tactical Protocol: Synergy',
            'Area Volley',
            'Zone Detection',
            'Chain Echo'
          ]
        }
      },
      support: {
        build1: {
          title: 'Eleanor: Support Build 1',
          description: 'Increases the Attack Range and the number of attacks with each jump slam, making it easy to handle waves of enemies.',
          potentials: [
            'Chain Detonation',
            'Seismic Spread',
            'Field Pull',
            'Power Boost',
            'Shattering Blow'
          ]
        },
        build2: {
          title: 'Eleanor: Support Build 2',
          description: 'Summons long-lasting sentries to rapidly attack designated targets, dealing concentrated DMG to enemies in a small area.',
          potentials: [
            'Function Sustain',
            'Cluster Barrage',
            'Piercing Trajectory',
            'Suppression Analysis',
            'Precision Calibration'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Tactical Protocol: Threshold',
          icon: '13701_Potential_01',
          description: 'Cross Slash can attack 1 additional time. Increases Cross Slash\'s &Param1& by <color=#0abec5>&Param2&</color>. While Vigil is active, reduces the cooldown for gaining ##Tactical Energy#4048# for Eleanor\'s Auto Attacks by 1s.',
          shortDescription: 'Increases the number of attacks and &Param1& of Cross Slash. Reduces the cooldown for gaining ##Tactical Energy#4048#.',
          params: [
            '',
            '0.2%'
          ],
          rarity: 2,
          stype: 42,
          corner: null,
          hints: {
            4048: {
              id: 4048,
              name: 'Tactical Energy',
              description: 'Each time Eleanor deals Auto Attack DMG, she has an 80% chance to gain 2 Tactical Energy. This can only be triggered once every 2s.'
            }
          }
        },
        {
          name: 'Tactical Protocol: Detonation',
          icon: '13701_Potential_02',
          description: 'Whenever Eleanor gains or spends ##Tactical Energy#4048#, fires 1 bomb that deals AoE Ventus Auto Attack DMG equal to <color=#0abec5>&Param1&</color> of ATK and can trigger ##Ventus Mark#1017#. Reduces the ##Tactical Energy#4048# consumed by Cross Slash by 4.',
          shortDescription: 'When ##Tactical Energy#4048# is gained or consumed, fires 1 bomb. Reduces the ##Tactical Energy#4048# consumed by Cross Slash.',
          params: [
            '72%/83%/94%/126%/136%/146%/167%/175%/184%/201%/216%/230%/245%'
          ],
          rarity: 2,
          stype: 42,
          corner: null,
          hints: {
            4048: {
              id: 4048,
              name: 'Tactical Energy',
              description: 'Each time Eleanor deals Auto Attack DMG, she has an 80% chance to gain 2 Tactical Energy. This can only be triggered once every 2s.'
            },
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Tactical Protocol: Overload',
          icon: '13701_Potential_03',
          description: 'Reduces Vigil\'s Attack Interval. When casting Cross Slash, increases Eleanor\'s &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s.',
          shortDescription: 'Reduces Vigil\'s Attack Interval. When casting Cross Slash, increases Eleanor\'s &Param1&.',
          params: [
            'ATK',
            '40%',
            '15'
          ],
          rarity: 2,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Tactical Protocol: Synergy',
          icon: '13701_Potential_04',
          description: 'When Eleanor\'s Vigil deals DMG to a target 2 times, it can deal an additional <color=#0abec5>&Param1&</color> of ATK as AoE Ventus Skill DMG. When casting Sentry Deployment (Main Skill), increases Eleanor\'s &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s.',
          shortDescription: 'Vigil can deal additional AoE Ventus Skill DMG. When casting the Main Skill, increases Eleanor\'s &Param2&.',
          params: [
            '193%/222%/252%/339%/366%/393%/447%/470%/493%/540%/578%/617%/656%',
            'Aee',
            '20%',
            '10'
          ],
          rarity: 2,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      mainNormal: [
        {
          name: 'Double Rifts',
          icon: '13701_Potential_05',
          description: 'Cross Slash can trigger additional explosions, dealing AoE Ventus Auto Attack DMG equal to <color=#ec6d21>&Param1&</color> of ATK. Increases Cross Slash\'s &Param2& against elite or higher-tier targets by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Cross Slash can trigger additional explosions. Increases Cross Slash\'s &Param2&.',
          params: [
            '60%/96%/132%/168%/204%/240%/276%/312%/348%',
            '',
            '0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Area Volley',
          icon: '13701_Potential_08',
          description: 'Increases Vigil\'s Attack Range and its &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Vigil\'s Attack Range and its &Param1&.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Annihilation Pulse',
          icon: 'Common_Potential_Wind_1',
          description: 'Firestorm (Ultimate) can trigger ##Ventus Mark#1017#. Increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'The Ultimate can trigger ##Ventus Mark#1017#. Increases Eleanor\'s &Param1&.',
          params: [
            'Aee',
            '12%/19.2%/26.4%/33.6%/40.8%/48%/50.4%/52.8%/55.2%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Battle Fury',
          icon: 'Common_Potential_19',
          description: 'When casting Cross Slash, increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When casting Cross Slash, increases Eleanor\'s &Param1&.',
          params: [
            'ATK',
            '13.5%/21.6%/29.7%/37.8%/45.9%/54%/56.7%/59.4%/62.1%',
            '6'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Zone Detection',
          icon: 'Common_Potential_10',
          description: 'When casting Sentry Deployment (Main Skill), each target near Eleanor increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When casting the Main Skill, increases Eleanor\'s &Param1&.',
          params: [
            'ATK',
            '4.7%/7.5%/10.3%/13.1%/15.9%/18.7%/19.6%/20.6%/21.5%',
            '10',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Flicker Sequence',
          icon: 'Common_Potential_11',
          description: 'Decreases Dodge cooldown by 25%. Increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Decreases Dodge cooldown. Increases Eleanor\'s &Param1&.',
          params: [
            'ATK',
            '7.8%/12.5%/17.2%/21.8%/26.5%/31.2%/32.8%/34.3%/35.9%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Vortex Boost',
          icon: 'Common_Potential_Wind_1',
          description: 'The last Auto Attack strike can trigger ##Ventus Mark#1017#. During Vigil, increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'The last Auto Attack strike can trigger ##Ventus Mark#1017#. During Vigil, increases Eleanor\'s &Param1&.',
          params: [
            'Normal DMG',
            '15%/24%/33%/42%/51%/60%/63%/66%/69%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Chain Echo',
          icon: 'Common_Potential_11',
          description: 'When Eleanor deals Auto Attack DMG, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times. This effect can only be triggered once per sec.',
          shortDescription: 'When Auto Attack DMG is dealt, increases Eleanor\'s &Param1&.',
          params: [
            'Skill DMG',
            '3%/4.8%/6.6%/8.4%/10.2%/12%/12.6%/13.2%/13.8%',
            '3',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Wind Bond',
          icon: 'Common_Potential_Wind_1',
          description: 'When triggering ##Ventus Mark#1017#, increases the &Param1& of all Ventus Trekkers in the squad by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When triggering ##Ventus Mark#1017#, increases the &Param1& of all Ventus Trekkers in the squad.',
          params: [
            'ATK',
            '3%/4.8%/6.6%/8.4%/10.2%/12%/13.8%/15.6%/17.4%',
            '5',
            '3'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      supportCore: [
        {
          name: 'Chain Detonation',
          icon: '13701_Potential_21',
          description: 'Increases the &Param1& of jump slam explosions from Armed Assault (Support Skill) by <color=#0abec5>&Param2&</color>. Increases the number of explosions of each jump slam by 1. Resets when the Support Skill ends.',
          shortDescription: 'Increases the Support Skill\'s &Param1& and the number of explosions.',
          params: [
            '',
            '0.71%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Seismic Spread',
          icon: '13701_Potential_22',
          description: 'Increases the &Param3& of jump slam explosions from Armed Assault (Support Skill) by <color=#0abec5>&Param4&</color>. When there is only 1 Support Trekker in the squad, increases the Attack Range and &Param1& of each jump slam\'s explosion. After each explosion, increases &Param1& dealt by the following jump slam explosions by <color=#0abec5>&Param2&</color>, stacking up to 9 times.',
          shortDescription: 'Increases the Support Skill\'s &Param3&, Attack Range, and &Param1&.',
          params: [
            '',
            '0.85%',
            '',
            '0.78%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Function Sustain',
          icon: '13701_Potential_23',
          description: 'Increases ##Sentries\'#4050# &Param5& by <color=#0abec5>&Param6&</color>. Each time a ##Sentry#4050# is generated, extends the duration of all existing ##Sentries#4050# on the field. Each jump slam from Armed Assault (Support Skill) increases ##Sentries\'#4050# &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Increases ##Sentries\'#4050# &Param5&. Each time a ##Sentry#4050# is generated, extends the duration of all existing ##Sentries#4050# on the field. The Support Skill can increase ##Sentries\'#4050# &Param1&.',
          params: [
            '',
            '0.85%',
            '3',
            '9',
            '',
            '0.01%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4050: {
              id: 4050,
              name: 'Sentry',
              description: 'Eleanor\'s unique drone, which can either protect her or be deployed for targeted attacks.'
            }
          }
        },
        {
          name: 'Cluster Barrage',
          icon: '13701_Potential_24',
          description: 'When ##Sentries\'#4050# bullets deal DMG to the Main Trekker\'s target 3 times, deals an additional <color=#0abec5>&Param1&</color> of ATK as AoE Ventus Auto Attack DMG. This effect can be triggered once every 0.5s. Each ##Sentry#4050# on the field increases &Param2& of all ##Sentries#4050# on the field by <color=#0abec5>&Param3&</color>.',
          shortDescription: '##Sentries#4050# deal additional AoE Ventus Auto Attack DMG. Each ##Sentry#4050# on the field increases &Param2& of all ##Sentries#4050# on the field.',
          params: [
            '117%/134%/152%/204%/220%/236%/269%/282%/296%/324%/347%/370%/394%',
            'Atkspd_P',
            '33%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4050: {
              id: 4050,
              name: 'Sentry',
              description: 'Eleanor\'s unique drone, which can either protect her or be deployed for targeted attacks.'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Field Pull',
          icon: '13701_Potential_25',
          description: 'Increases the &Param3& of jump slam explosions from Armed Assault (Support Skill) by &Param4& and their &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the Support Skill\'s &Param3& and &Param1& of its jump slam explosions.',
          params: [
            '',
            '0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%',
            '',
            ''
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Piercing Trajectory',
          icon: '13701_Potential_28',
          description: 'Increases the size of bullets fired by ##Sentries#4050#, which can penetrate targets. Increases the &Param1& of ##Sentries#4050# against elite or higher-tier targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the size of bullets fired by ##Sentries#4050#. Increases ##Sentries\'#4050# &Param1&.',
          params: [
            '',
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            4050: {
              id: 4050,
              name: 'Sentry',
              description: 'Eleanor\'s unique drone, which can either protect her or be deployed for targeted attacks.'
            }
          }
        },
        {
          name: 'Wind Resonance',
          icon: 'Common_Potential_Wind_1',
          description: 'When any Trekker in the squad triggers ##Ventus Mark#1017#, increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When triggering ##Ventus Mark#1017#, increases Eleanor\'s &Param1&.',
          params: [
            'ATK',
            '20%/32%/44%/56%/68%/80%/84%/88%/92%',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1017: {
              id: 1017,
              name: 'Ventus Mark',
              description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Power Boost',
          icon: 'Common_Potential_Wind_1',
          description: 'When jump slam explosions from Armed Assault (Support Skill) deal DMG, increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times. Increases the Ventus Vanguard Main Trekker\'s &Param5& by <color=#ec6d21>&Param6&</color> for &Param7&s, stacking up to &Param8& times.',
          shortDescription: 'When jump slam explosions from the Support Skill deal DMG, increases Eleanor\'s &Param1& and the Ventus Vanguard Main Trekker\'s &Param5&.',
          params: [
            'Skill DMG',
            '1%/1.6%/2.2%/2.8%/3.4%/4%/4.2%/4.4%/4.6%',
            '3',
            '10',
            'Skillcritpower',
            '1.3%/2%/2.8%/3.5%/4.3%/5%/5.3%/5.5%/5.8%',
            '3',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Suppression Analysis',
          icon: 'Common_Potential_10',
          description: 'Increases the &Param1& ##Sentries#4050# deal to the Main Trekker\'s target by <color=#ec6d21>&Param2&</color> and Eleanor\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases ##Sentries\'#4050# &Param1& and Eleanor\'s &Param3&.',
          params: [
            '',
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%',
            'ATK',
            '18%/28.8%/39.6%/50.4%/61.2%/72%/75.6%/79.2%/82.8%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            4050: {
              id: 4050,
              name: 'Sentry',
              description: 'Eleanor\'s unique drone, which can either protect her or be deployed for targeted attacks.'
            }
          }
        },
        {
          name: 'Annihilation Echo',
          icon: 'Common_Potential_Wind_1',
          description: 'Firestorm (Ultimate) can inflict ##Ventus Mark: Breeze#2017#. When Eleanor deals DMG to a target, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'The Ultimate can inflict ##Ventus Mark: Breeze#2017#. When Eleanor deals DMG to a target, increases the target\'s &Param1&.',
          params: [
            'Aeercd',
            '5%/8%/11%/14%/17%/20%/23%/26%/29.1%',
            '5',
            '3'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            2017: {
              id: 2017,
              name: 'Ventus Mark: Breeze',
              description: 'A special status applied to the target by some Ventus Trekkers, lasting for 10s.\nCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.'
            }
          }
        },
        {
          name: 'Shattering Blow',
          icon: 'Common_Potential_13',
          description: 'Increases the &Param1& of jump slam explosions from Armed Assault (Support Skill) by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases the &Param1& and &Param3& of jump slam explosions from the Support Skill.',
          params: [
            '',
            '0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%',
            '',
            '0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Precision Calibration',
          icon: 'Common_Potential_Wind_1',
          description: 'Increases ##Sentries\'#4050# &Param1& by <color=#ec6d21>&Param2&</color>. When there are 3 ##Sentries#4050# on the field, increases the Ventus Vanguard Main Trekker\'s &Param3& by <color=#ec6d21>&Param4&</color> for 10s.',
          shortDescription: 'Increases ##Sentries\'#4050# &Param1&. ##Sentries#4050# can increase the Ventus Vanguard Main Trekker\'s &Param3&.',
          params: [
            '',
            '0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%/0.01%',
            '',
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4050: {
              id: 4050,
              name: 'Sentry',
              description: 'Eleanor\'s unique drone, which can either protect her or be deployed for targeted attacks.'
            }
          }
        },
        {
          name: 'Power Amp',
          icon: 'Common_Potential_Wind_1',
          description: 'When Eleanor deals DMG, increases the &Param1& of all Ventus Trekkers in the squad by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Eleanor deals DMG, increases the &Param1& of all Ventus Trekkers in the squad.',
          params: [
            'Aee',
            '1.3%/2.1%/2.9%/3.6%/4.4%/5.2%/5.5%/5.7%/6%',
            '5',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Reinforcement Command',
          icon: '13701_Potential_41',
          description: 'When Eleanor casts Firestorm (Ultimate), increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When casting the Ultimate, increases Eleanor\'s &Param1&.',
          params: [
            'Aee',
            '16%/25.6%/35.2%/44.8%/54.4%/64%/67.2%/70.4%/73.6%',
            '25',
            '1'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Purge Command',
          icon: 'Common_Potential_Wind_1',
          description: 'Increases Eleanor\'s &Param5& by <color=#ec6d21>&Param6&</color>. When Firestorm (Ultimate) deals DMG to a target, increases the &Param1& it deals to the target by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Increases Eleanor\'s &Param5&. When the Ultimate deals DMG to a target, increases the &Param1& it deals.',
          params: [
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
            '2',
            '5',
            'Aee',
            '10%/16%/22%/28%/34%/40%/42%/44%/46%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Focus Command',
          icon: 'Common_Potential_Wind_1',
          description: 'Increases Eleanor\'s &Param5& by <color=#ec6d21>&Param6&</color>. When any Ventus Trekker in the squad casts a Main Skill or Support Skill, increases Eleanor\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Increases Eleanor\'s &Param5&. When any Ventus Trekker in the squad casts a Main Skill or Support Skill, increases Eleanor\'s &Param1&.',
          params: [
            'Ultimate DMG',
            '1.6%/2.6%/3.5%/4.5%/5.4%/6.4%/6.7%/7%/7.4%',
            '10',
            '5',
            'ATK',
            '12%/19.2%/26.4%/33.6%/40.8%/48%/50.4%/52.8%/55.2%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  sparkla: {
    id: 140,
    name: 'Sparkla',
    element: 'Terra',
    buildOrder: {
      main: {
        build1: {
          title: 'Sparkla: Main Build 1',
          description: 'A Rabbit Pie build that switches modes to unleash sustained firepower, specializing in taking down single targets.',
          potentials: [
            'Bunny-Ear Volley',
            'Click-Clack Echoes',
            'Leap Barrage',
            'Hover-Rail Volley',
            'Clockwork Resonance'
          ]
        },
        build2: {
          title: 'Sparkla: Main Build 2',
          description: 'A Rabbit Pie build that switches modes and unleashes charged bursts, specializing in clearing out groups of enemies.',
          potentials: [
            'Fluffy Rechamber',
            'Neo Radiance Burst',
            'Cyclone Dial',
            'Ticking Aftershock',
            'Static Strike'
          ]
        }
      },
      support: {
        build1: {
          title: 'Sparkla: Support Build 1',
          description: 'A Super Action Pie build focused on enhanced burst power, dealing massive damage in a short window.',
          potentials: [
            'Bunny Backfire',
            'Rolling Support',
            'Furball Fusillade',
            'Bunny Blitz',
            'Gauge Overdrive'
          ]
        },
        build2: {
          title: 'Sparkla: Support Build 2',
          description: 'A Super Action Pie build focused on endurance, allowing you to coordinate with squadmates for a relentless assault on enemies.',
          potentials: [
            'Covering Fire',
            'Incendiary Volley',
            'Bunny Munitions Boost',
            'Rabbit\'s Watch',
            'Pressure Surge'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Bunny-Ear Volley',
          icon: '14001_Potential_01',
          description: 'When Sparkla is in ##Bunny Rapid Fire Mode#4034#, activates Bunny Rapid Fire to unleash a hail of fire on the target, dealing <color=#0abec5>&Param1& of ATK x7</color> as Terra Skill DMG. Can trigger ##Terra Mark#1020#.\nBunny Rapid Fire has a Cooldown of 3s.\nWhen in an All-Terra squad, increases Bunny Rapid Fire\'s &Param2& by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'When Sparkla is in ##Bunny Rapid Fire Mode#4034#, activates Bunny Rapid Fire to deal damage. Can trigger ##Terra Mark#1020#.\nWhen in an All-Terra squad, increases Bunny Rapid Fire\'s &Param2&.',
          params: [
            '48%/55%/62%/83%/90%/97%/110%/116%/121%/133%/142%/152%/161%',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4034: {
              id: 4034,
              name: 'Bunny Rapid Fire Mode',
              description: 'Hold the Main Skill Button to enter a rapid attack mode that deals multiple instances of DMG over a period of time.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Click-Clack Echoes',
          icon: '14001_Potential_02',
          description: 'Increases the &Param4& of ##Bunny Rapid Fire Mode#4034# by <color=#0abec5>&Param5&</color>.\nWhen Sparkla deals damage with ##Bunny Rapid Fire Mode#4034# to a target, inflicts 1 stack of Stellar Crystal. At <color=#0abec5>&Param1&</color> stacks, the target becomes Stellar Crystallized for <color=#0abec5>&Param2&</color>s.\nStellar Crystallized target will be <color=#0abec5>stunned</color> and immune to Stellar Crystal.\nWhen Sparkla deals damage with ##Bunny Rapid Fire Mode#4034# to a Stellar Crystallized target, deals an additional <color=#0abec5>&Param3&</color> of ATK as Terra Skill DMG. Can trigger ##Terra Mark#1020#.',
          shortDescription: 'Increases the &Param4& of ##Bunny Rapid Fire Mode#4034#.\nWhen Sparkla deals damage with ##Bunny Rapid Fire Mode#4034# to a target, inflicts Stellar Crystal. At full stack, the target becomes Stellar Crystallized.\nStellar Crystallized target will be stunned and immune to Stellar Crystal.\nWhen Sparkla deals damage with ##Bunny Rapid Fire Mode#4034# to a Stellar Crystallized target, deals additional damage. Can trigger ##Terra Mark#1020#.',
          params: [
            '20',
            '5',
            '64%/73%/83%/111%/120%/129%/147%/154%/162%/177%/190%/203%/215%',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4034: {
              id: 4034,
              name: 'Bunny Rapid Fire Mode',
              description: 'Hold the Main Skill Button to enter a rapid attack mode that deals multiple instances of DMG over a period of time.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Fluffy Rechamber',
          icon: '14001_Potential_03',
          description: 'When Sparkla is in ##Bunny Jaws Mode#4033#, activates Bunny Roar. After a brief charge-up, deals <color=#0abec5>&Param1& of ATK</color> as AoE Terra Skill DMG. Can trigger ##Terra Mark#1020#.\nWhen channeling Bunny Roar, Sparkla cannot move or dodge. Sparkla can only cast Bunny Roar once while in ##Bunny Jaws Mode#4033#.\nWhen in an All-Terra squad, Sparkla gains a shield equal to <color=#0abec5>&Param2&</color> of her Base HP while Bunny Roar is active, and increases the &Param3& of Bunny Jaws Mode by <color=#0abec5>&Param4&</color>.',
          shortDescription: 'When Sparkla is in ##Bunny Jaws Mode#4033#, activates Bunny Roar to deal damage. Can trigger ##Terra Mark#1020#.\nWhen channeling Bunny Roar, Sparkla cannot move or dodge.\nWhen in an All-Terra squad, Sparkla gains a shield while Bunny Roar is active and increases the &Param3& of Bunny Roar.',
          params: [
            '243%/280%/316%/425%/459%/493%/561%/591%/620%/678%/727%/775%/824%',
            '20%',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4033: {
              id: 4033,
              name: 'Bunny Jaws Mode',
              description: 'Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Neo Radiance Burst',
          icon: '14001_Potential_04',
          description: 'Increases the &Param1& of ##Bunny Jaws Mode#4033# by <color=#0abec5>&Param2&</color>.\nWhen Sparkla is in ##Bunny Jaws Mode#4033#, gains <color=#0abec5>1</color> bottle of Instant Neo Solution every 2s.\nWhen in ##Bunny Jaws Mode#4033#, Sparkla can consume up to <color=#0abec5>2</color> bottles of Instant Neo Solution to fire additional shells, each solution can generate <color=#0abec5>1</color> shell.\nWhen ##Bunny Jaws Mode#4033# ends, nullifies all Instant Neo Solution.',
          shortDescription: 'Increases the &Param1& of ##Bunny Jaws Mode#4033#.\nWhen Sparkla is in ##Bunny Jaws Mode#4033#, gains Instant Neo Solution over time. When in ##Bunny Jaws Mode#4033#, Sparkla can consume Instant Neo Solution to fire additional shells.\nWhen ##Bunny Jaws Mode#4033# ends, nullifies all Instant Neo Solution.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4033: {
              id: 4033,
              name: 'Bunny Jaws Mode',
              description: 'Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time.'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Leap Barrage',
          icon: 'Common_Potential_Fire_1',
          description: 'When Sparkla triggers ##Terra Mark#1020# in ##Bunny Rapid Fire Mode#4034#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When Sparkla triggers ##Terra Mark#1020# in ##Bunny Rapid Fire Mode#4034#, increases her &Param1&.',
          params: [
            'ATK',
            '4%/6.4%/8.8%/11.2%/13.6%/16%/18.4%/20.8%/23.2%',
            '10',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4034: {
              id: 4034,
              name: 'Bunny Rapid Fire Mode',
              description: 'Hold the Main Skill Button to enter a rapid attack mode that deals multiple instances of DMG over a period of time.'
            }
          }
        },
        {
          name: 'Cyclone Dial',
          icon: '14001_Potential_08',
          description: 'When Sparkla is in ##Bunny Jaws Mode#4033#, each shot deals <color=#ec6d21>&Param1& of ATK</color> as AoE Terra Skill DMG to enemies in front and knocks them back. Can trigger ##Terra Mark#1020#.\nWhen casting Bunny Roar, each shot deals <color=#ec6d21>&Param2& of ATK</color> as AoE Terra Skill DMG to enemies in front and knocks them back. Can trigger ##Terra Mark#1020#.',
          shortDescription: 'When Sparkla is in ##Bunny Jaws Mode#4033#, each shot deals damage to enemies in front and knocks them back. Can trigger ##Terra Mark#1020#.',
          params: [
            '23%/38%/52%/66%/81%/95%/109%/124%/138%',
            '289%/462%/636%/809%/982%/1156%/1329%/1502%/1676%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4033: {
              id: 4033,
              name: 'Bunny Jaws Mode',
              description: 'Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Harmonic Barrage',
          icon: '14001_Potential_11',
          description: 'When Sparkla casts the Main Skill to transform, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.\nWhen the transformation ends, deals <color=#ec6d21>&Param4&</color> of ATK as AoE Terra Skill DMG to up to 6 nearby targets. Can trigger ##Terra Mark#1020#.',
          shortDescription: 'When Sparkla casts the Main Skill to transform, increases her &Param1&.\nWhen the transformation ends, deals DMG to nearby targets. Can trigger ##Terra Mark#1020#.',
          params: [
            'ATK',
            '13%/21%/29%/37%/45%/53%/61%/69%/77%',
            '12',
            '94%/151%/208%/265%/321%/378%/435%/491%/548%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Hover-Rail Volley',
          icon: '14001_Potential_06',
          description: '##Bunny Rapid Fire Mode#4034# allows Sparkla to levitate. She can attack the target while dashing, and her &Param1& is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription: '##Bunny Rapid Fire Mode#4034# allows Sparkla to levitate. She can attack the target while dashing, and her &Param1& is increased.',
          params: [
            'Skill DMG',
            '31%/50%/69%/87%/106%/125%/143%/162%/181%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4034: {
              id: 4034,
              name: 'Bunny Rapid Fire Mode',
              description: 'Hold the Main Skill Button to enter a rapid attack mode that deals multiple instances of DMG over a period of time.'
            }
          }
        },
        {
          name: 'Ticking Aftershock',
          icon: '14001_Potential_09',
          description: 'When Sparkla is in ##Bunny Jaws Mode#4033#, gains Super Armor and increases own &Param2& by <color=#ec6d21>&Param3&</color>.\nAfter the shells fired in ##Bunny Jaws Mode#4033# explode, 5 Booby Traps are randomly deployed within the blast radius, each Booby Trap dealing <color=#ec6d21>&Param1& of ATK</color> as Terra Skill DMG. Can trigger ##Terra Mark#1020#.\nShells fired by Bunny Roar scatter 10 Booby Traps over a much larger area.',
          shortDescription: 'When Sparkla is in ##Bunny Jaws Mode#4033#, gains Super Armor and increases own &Param2&.\nAfter the shells fired in ##Bunny Jaws Mode#4033# explode, Booby Traps are randomly deployed within the blast radius. The traps can deal damage and trigger ##Terra Mark#1020#.',
          params: [
            '21%/33%/46%/59%/72%/84%/97%/110%/122%',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4033: {
              id: 4033,
              name: 'Bunny Jaws Mode',
              description: 'Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time.'
            },
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Velvet Prowl',
          icon: 'Common_Potential_13',
          description: 'Sparkla can dodge one more time.\nAfter dodging, increases Sparkla\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.\nThis effect can only be triggered once every &Param4&s.',
          shortDescription: 'Sparkla can dodge one more time.\nAfter dodging, increases Sparkla\'s &Param1&.',
          params: [
            'ATK',
            '10%/17%/23%/29%/35%/41%/48%/54%/60%',
            '6',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Clockwork Resonance',
          icon: 'Common_Potential_13',
          description: 'Each Sparkla\'s skill cast increases Sparkla\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'Each Sparkla\'s skill cast increases Sparkla\'s &Param1&.',
          params: [
            'Skill DMG',
            '2.6%/4.2%/5.8%/7.4%/9%/10.6%/12.2%/13.8%/15.4%',
            '7',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Static Strike',
          icon: 'Common_Potential_4',
          description: 'When Sparkla enters ##Bunny Jaws Mode#4033#, gains a shield equal to <color=#ec6d21>&Param1&</color> of her Base HP for &Param2&s.\nWhen Sparkla remains stationary in ##Bunny Jaws Mode#4033#, increases her &Param4& by <color=#ec6d21>&Param5&</color> every &Param3&s for a total of &Param6&s, up to &Param7& stacks.',
          shortDescription: 'When Sparkla enters ##Bunny Jaws Mode#4033#, gains a shield.\nWhen Sparkla remains stationary in ##Bunny Jaws Mode#4033#, increases her &Param4&.',
          params: [
            '7%/10%/12%/14%/17%/19%/22%/24%/26%',
            '10/10/10/10/10/10/10/10/10',
            '1',
            'ATK',
            '4.5%/7.2%/9.9%/12.6%/15.3%/18%/20.7%/23.4%/26.1%',
            '5',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4033: {
              id: 4033,
              name: 'Bunny Jaws Mode',
              description: 'Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time.'
            }
          }
        },
        {
          name: 'Prism Convergence',
          icon: 'Common_Potential_10',
          description: 'Increases Sparkla\'s &Param1& to distant targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Sparkla\'s &Param1& to distant targets.',
          params: [
            '',
            '0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%/0.19%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Bunny Backfire',
          icon: '14001_Potential_21',
          description: 'When Sparkla casts &Param1& (Support Skill) in an all-Terra squad, the doll also fires a Bunny Firework, bringing the total to <color=#0abec5>3</color> per volley.\nIncreases the Support Skill\'s &Param2& by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'Increases the &Param2& of the Support Skill.\nWhen Sparkla casts the Support Skill in an all-Terra squad, increases the number of Bunny Fireworks fired per volley.',
          params: [
            'Homing Bunny Volley',
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Rolling Support',
          icon: '14001_Potential_22',
          description: 'When casting &Param1& (Support Skill), Sparkla gains Energy each time a Bunny Firework is fired.\nWhen the Support Skill ends, Sparkla consumes all Energy, with each point increasing her &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s.\nShe then charges toward the target in her chair, dealing <color=#0abec5>&Param5&</color> of ATK as Terra Skill DMG and inflicting Bleeding, which deals DMG to the target once every 0.3s for 3s, dealing <color=#0abec5>&Param6&</color> of ATK as Terra Skill DMG in total.',
          shortDescription: 'When casting the Bunny Firework, Sparkla gains Energy each time a rocket is fired.\nWhen the Support Skill ends, Sparkla consumes all Energy to increase her &Param2&.\nShe then charges toward the target in her wheelchair, dealing damage.',
          params: [
            'Homing Bunny Volley',
            'Skill DMG',
            '1.2%',
            '5',
            '61%/70%/79%/107%/115%/124%/141%/148%/156%/170%/182%/195%/207%',
            '73%/84%/95%/128%/138%/149%/169%/178%/187%/204%/219%/234%/248%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Covering Fire',
          icon: '14001_Potential_23',
          description: 'Increases Sparkla\'s &Param4& by <color=#0abec5>&Param5&</color>.\nWhen &Param1& (Support Skill) ends, Sparkla follows the Terra Main Trekker for <color=#0abec5>&Param2&</color>s and provides fire support, dealing <color=#0abec5>&Param3&</color> of ATK as Terra Auto Attack DMG to the target.',
          shortDescription: 'Increases Sparkla\'s &Param4&.\nWhen the Support Skill ends, Sparkla follows the Terra Main Trekker and provides fire support, dealing DMG to the target.',
          params: [
            'Homing Bunny Volley',
            '8',
            '94%/108%/122%/165%/178%/191%/217%/229%/240%/263%/282%/300%/319%',
            '',
            '0.56%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Incendiary Volley',
          icon: '14001_Potential_24',
          description: 'When Sparkla is on the battlefield, deals <color=#0abec5>&Param2&</color> of ATK as AoE Terra Auto Attack DMG to targets every 3.5s.\nFor each Terra Trekker in the squad, increases the &Param3& of this effect by <color=#0abec5>&Param4&</color>.',
          shortDescription: 'When Sparkla is on the battlefield, deals DMG to targets every few seconds.\nFor each Terra Trekker in the squad, increases this DMG.',
          params: [
            '',
            '20%/24%/27%/36%/39%/42%/48%/50%/53%/58%/62%/66%/70%',
            '',
            '0.56%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      supportNormal: [
        {
          name: 'Furball Fusillade',
          icon: '14001_Potential_25',
          description: 'When Sparkla casts &Param1& (Support Skill), deals <color=#ec6d21>&Param2&</color> of ATK as AoE Terra Skill DMG to nearby targets.',
          shortDescription: 'When Sparkla casts the Support Skill, deals DMG to nearby targets.',
          params: [
            'Homing Bunny Volley',
            '36%/58%/80%/102%/124%/146%/168%/190%/212%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Bunny Munitions Boost',
          icon: '14001_Potential_28',
          description: 'Sparkla\'s bullets can pierce through targets, and their &Param1& is increased by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Sparkla\'s bullets can pierce through targets, and their &Param1& is increased.',
          params: [
            '',
            '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Artisan\'s Pride',
          icon: 'Common_Potential_13',
          description: 'Increases Sparkla\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Sparkla\'s &Param1&.',
          params: [
            'ATK',
            '15%/24%/33%/42%/51%/60%/69%/78%/87%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Bunny Blitz',
          icon: 'Common_Potential_13',
          description: 'When Sparkla casts &Param1& (Support Skill), increases her &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'When Sparkla casts the Support Skill, increases her &Param2&.',
          params: [
            'Homing Bunny Volley',
            'ATK',
            '20%/32%/44%/56%/68%/80%/92%/104%/116%',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Rabbit\'s Watch',
          icon: 'Common_Potential_19',
          description: 'While Sparkla is on the battlefield, increases her &Param1& by <color=#ec6d21>&Param2&</color> per second, up to &Param3& stacks.\nThis effect will be removed when she leaves the battlefield.',
          shortDescription: 'While Sparkla is on the battlefield, increases her &Param1& over time.\nThis effect will be removed when she leaves the battlefield.',
          params: [
            'Normal DMG',
            '0.7%/1.1%/1.5%/1.9%/2.3%/2.8%/3.2%/3.6%/4%',
            '15'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Prodigy\'s Oath',
          icon: 'Common_Potential_13',
          description: 'Increases Sparkla\'s &Param2& by &Param3&.\nWhen &Param1& (Ultimate) ends, increases Sparkla\'s &Param4& by <color=#ec6d21>&Param5&</color> for &Param6&s.',
          shortDescription: 'Increases Sparkla\'s &Param2&.\nWhen her Ultimate ends, increases Sparkla\'s &Param4&.',
          params: [
            '{\'10\': {\'13\': {\'13\': 8531309110059887724, \'12\': 875637868, \'6\': [52, 48, 48]}}, \'13\': 8392569317801421940}',
            'Skill DMG',
            '20%',
            'See',
            '24%/38.4%/52.8%/67.2%/81.6%/96%/110.4%/124.8%/139.2%',
            '15'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Gauge Overdrive',
          icon: 'Common_Potential_Fire_1',
          description: 'When Bunny Firework triggers a ##Terra Mark#1020#, increases Sparkla\'s &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s, up to &Param5& stacks.',
          shortDescription: 'When the Bunny Firework triggers a ##Terra Mark#1020#, increases Sparkla\'s &Param2&.',
          params: [
            'Homing Bunny Volley',
            'See',
            '4.2%/6.7%/9.3%/11.8%/14.3%/16.9%/19.4%/22%/24.5%',
            '7',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Pressure Surge',
          icon: 'Common_Potential_13',
          description: 'When &Param1& (Support Skill) ends, increases Sparkla\'s &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'When the Support Skill ends, increases Sparkla\'s &Param2&.',
          params: [
            'Homing Bunny Volley',
            'Normal DMG',
            '16.7%/26.8%/36.8%/46.9%/56.9%/67%/77%/87.1%/97.1%',
            '8'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Max Overclock',
          icon: 'Common_Potential_Earth_1',
          description: 'Increases the &Param1& of Terra Trekkers in the squad by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& of Terra Trekkers in the squad.',
          params: [
            'Skill DMG',
            '7.5%/12%/16.5%/21%/25.5%/30%/34.5%/39%/43.5%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Solution Support',
          icon: '14001_Potential_41',
          description: 'When &Param1& (Ultimate) ends, drops 3 bottles of Potent Neo Solution on the ground. The Main Trekker can absorb them on contact, with each bottle increasing their &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.\nWhen a Terra Trekker absorbs 3 bottles of Potent Neo Solution and deals Auto Attack DMG, Sparkla deals an additional <color=#ec6d21>&Param5&</color> of her ATK as Terra Ultimate DMG. This effect can only be triggered once every &Param6&s.',
          shortDescription: 'When the Ultimate ends, drops bottles of Potent Neo Solution on the ground. When the Main Trekker absorbs them, increases their &Param2&.\nWhen a Terra Trekker absorbs 3 bottles of Potent Neo Solution and deals Auto Attack DMG, Sparkla deals additional DMG.',
          params: [
            '{\'10\': {\'13\': {\'13\': 8531309110059887724, \'12\': 875637868, \'6\': [52, 48, 48]}}, \'13\': 8392569317801421940}',
            'ATK',
            '7%/11%/16%/20%/24%/29%/33%/37%/42%',
            '10',
            '86%/137%/189%/240%/292%/343%/394%/446%/497%',
            '0.5'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Wonderland Bound',
          icon: '14001_Potential_42',
          description: 'Increases the Attack Range of the Bunny Firework Cannon fired by &Param1& (Ultimate). Instantly eliminates normal targets within range, and inflicts Bleeding on elite and boss targets. Deals DMG to the target once per second for &Param2&s, dealing <color=#ec6d21>&Param3& of ATK</color> as Terra Mark Ultimate DMG in total.',
          shortDescription: 'Increases the Attack Range of the Bunny Firework Cannon fired by the Ultimate. Instantly eliminates normal targets within range and deals damage to elite and boss targets over time.',
          params: [
            '{\'10\': {\'13\': {\'13\': 8531309110059887724, \'12\': 875637868, \'6\': [52, 48, 48]}}, \'13\': 8392569317801421940}',
            '10',
            '178%/285%/391%/498%/605%/711%/818%/925%/1031%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Leap of Finale',
          icon: '14001_Potential_43',
          description: 'When &Param1& (Ultimate) triggers ##Terra Mark#1020#, increases the &Param2& of this Ultimate by <color=#ec6d21>&Param3&</color>,  stacking up to &Param4& times.',
          shortDescription: 'When the Ultimate triggers ##Terra Mark#1020#, increases the &Param2& of this Ultimate.',
          params: [
            '{\'10\': {\'13\': {\'13\': 8531309110059887724, \'12\': 875637868, \'6\': [52, 48, 48]}}, \'13\': 8392569317801421940}',
            'Ultimate DMG',
            '3%/5%/7%/9%/11%/13%/15%/17%/19%',
            '7'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            1020: {
              id: 1020,
              name: 'Terra Mark',
              description: 'The generic name for all Terra Marks.\nWhen triggered by specific Terra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ]
    }
  },
  otoha: {
    id: 145,
    name: 'Otoha',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          title: 'Otoha: Main Build 1',
          description: 'A build that reduces Ultimate cooldown, enabling frequent Ultimate use.',
          potentials: [
            'Subtle Tremor',
            'Hymn of Gloom',
            'Umbral Depth',
            'Cycle of Four Seasons',
            'Shadow Soulknell'
          ]
        },
        build2: {
          title: 'Otoha: Main Build 2',
          description: 'A build that increases stack count and hit frequency to boost Skill DMG.',
          potentials: [
            'Solemn Echo',
            'Petal-Shower Grace',
            'Twilight Gleam',
            'Duskfall',
            'Fading Candle Flame'
          ]
        }
      },
      support: {
        build1: {
          title: 'Otoha: Support Build 1',
          description: 'A build that combines sustained Support DMG with frequent Ultimate use.',
          potentials: [
            'Lonely Twin Shadows',
            'Night-Walker',
            'Solitary Lantern',
            'Without A Trace',
            'Hollow Steps'
          ]
        },
        build2: {
          title: 'Otoha: Support Build 2',
          description: 'A Skill-focused build centered on high burst DMG and concentrated attacks.',
          potentials: [
            'Ripple of Shadow',
            'Evening Rain',
            'Rain-Woven Sorrow',
            'Bone-Chilling Rain',
            'Inevitable End'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Subtle Tremor',
          icon: '14501_Potential_01',
          description: 'When shooting with Nightbloom (Main Skill), it summons Doomfall <color=#0abec5>3</color> times, each dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Ultimate DMG, and triggering ##Umbra Mark#1019#.\nUpon summoning Doomfall, reduces Ultimate Cooldown by <color=#0abec5>&Param2&</color>s and gains <color=#0abec5>&Param3&</color> Energy. This effect can only be triggered once every 1s.',
          shortDescription: 'When shooting with Nightbloom (Main Skill), summons Doomfall multiple times. Can trigger ##Umbra Mark#1019#. Upon summoning Doomfall, reduces Ultimate Cooldown and gains Energy.',
          params: [
            '22%/25%/28%/38%/41%/44%/50%/53%/56%/61%/65%/70%/74%',
            '1',
            '7'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Hymn of Gloom',
          icon: '14501_Potential_02',
          description: 'Moving with Nightbloom (Main Skill) knocks back nearby targets and gains a Shield equal to <color=#0abec5>&Param1&</color> of Base Max HP for <color=#0abec5>&Param2&</color>s. While the Shield lasts, gains <color=#0abec5>&Param3&</color> Energy every 1s and summons Doomfall, each dealing <color=#0abec5>&Param4&</color> of ATK as AoE Umbra Ultimate DMG.',
          shortDescription: 'Moving with Nightbloom (Main Skill) knocks back nearby targets and gains a Shield. While the Shield lasts, continuously gains Energy and summons Doomfall.',
          params: [
            '',
            '',
            '7',
            '22%/25%/28%/38%/41%/44%/50%/53%/56%/61%/65%/70%/74%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Solemn Echo',
          icon: '14501_Potential_03',
          description: 'Bullets fired with Nightbloom (Main Skill) can ricochet <color=#0abec5>2</color> more times.',
          shortDescription: 'Bullets fired with Nightbloom (Main Skill) can ricochet multiple additional times.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Petal-Shower Grace',
          icon: '14501_Potential_04',
          description: 'The explosion of bullets fired with Nightbloom (Main Skill) generates 8 small bullets, each dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG.',
          shortDescription: 'The explosion of bullets fired with Nightbloom (Main Skill) can generate multiple small bullets.',
          params: [
            '12%/14%/16%/21%/23%/25%/28%/30%/31%/34%/37%/39%/42%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        }
      ],
      mainNormal: [
        {
          name: 'Umbral Depth',
          icon: 'Common_Potential_Dark_1',
          description: 'Upon dealing Auto Attack DMG &Param1& times, summons Doomfall to deal <color=#ec6d21>&Param2&</color> of ATK as AoE Umbra Ultimate DMG. This effect can only be triggered once every 2s.',
          shortDescription: 'Dealing Auto Attack DMG summons Doomfall.',
          params: [
            '5',
            '14%/22%/31%/40%/48%/57%/65%/74%/82%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Twilight Gleam',
          icon: 'Common_Potential_Light_1',
          description: 'Increases the uses of Nightbloom (Main Skill) by 1. When casting the Main Skill, increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Increases the uses of Nightbloom (Main Skill). When casting the Main Skill, increases Otoha\'s &Param1&.',
          params: [
            'Dee',
            '8%/12%/17%/21%/26%/30%/35%/39%/44%',
            '5',
            '2'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Bewitching Phantom',
          icon: 'Common_Potential_13',
          description: 'Otoha can dodge one more time.\nWhen dodging, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Increases Otoha\'s dodges. When dodging, increases her &Param1&.',
          params: [
            'ATK',
            '9.3%/14.9%/20.5%/26.1%/31.7%/37.3%/42.9%/48.5%/54.1%',
            '4'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Cycle of Four Seasons',
          icon: 'Common_Potential_13',
          description: 'Otoha\'s Auto Attack increases &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s, stacking up to &Param6& times.',
          shortDescription: 'Otoha\'s Auto Attack increases &Param1& and &Param3&.',
          params: [
            'Normal DMG',
            '4.6%/6.1%/7.6%/9.1%/10.6%/12.1%/13.6%/15.1%/16.6%',
            'Ultimate DMG',
            '8.4%/11.2%/14%/16.8%/19.6%/22.4%/25.2%/28%/30.8%',
            '5',
            '10'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Duskfall',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases &Param1& dealt by Nightbloom (Main Skill) against targets inflicted with ##Dark Shackles#2020# by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases &Param1& dealt by Nightbloom (Main Skill) against targets inflicted with ##Dark Shackles#2020#.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2020: {
              id: 2020,
              name: 'Dark Shackles'
            }
          }
        },
        {
          name: 'Night Tide Rush',
          icon: 'Common_Potential_Water_1',
          description: 'Void Blossom (Ultimate) triggers ##Umbra Mark#1019#. Increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Void Blossom (Ultimate) triggers ##Umbra Mark#1019#. Increases Otoha\'s &Param1&.',
          params: [
            'ATK',
            '12%/19%/26%/34%/41%/48%/55%/62%/70%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Shadow Soulknell',
          icon: 'Common_Potential_Dark_1',
          description: 'When casting Nightbloom (Main Skill), increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.',
          shortDescription: 'When casting Nightbloom (Main Skill), increases Otoha\'s &Param1&.',
          params: [
            'Atkspd_P',
            '10%/15%/20%/25%/30%/35%/36%/37%/38%',
            'Dee',
            '8.8%/14%/19%/25%/30%/35%/41%/46%/51%',
            '8'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Fading Candle Flame',
          icon: 'Common_Potential_Fire_1',
          description: 'Immune to DMG while moving during Nightbloom (Main Skill). Increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Immune to DMG while moving during Nightbloom (Main Skill). Increases Otoha\'s &Param1&.',
          params: [
            'ATK',
            '12%/19%/26%/34%/41%/48%/55%/62%/70%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Shadow Blossom',
          icon: 'Common_Potential_Dark_1',
          description: 'When Otoha triggers an ##Umbra Mark#1019#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Otoha triggers an ##Umbra Mark#1019#, increases her &Param1&.',
          params: [
            'Dee',
            '8%/12%/17%/21%/26%/30%/35%/39%/44%',
            '4',
            '2'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      supportCore: [
        {
          name: 'Lonely Twin Shadows',
          icon: '14501_Potential_21',
          description: 'Increases Soul Rend duration to <color=#0abec5>&Param1&</color>s.\nWhen Otoha deals Ultimate DMG, reduces Ultimate Cooldown by <color=#0abec5>&Param2&</color>s and gain <color=#0abec5>&Param3&</color> Energy. This effect can be triggered once every 1s.\nIncreases Otoha\'s &Param4& by <color=#0abec5>&Param5&</color> and &Param6& by <color=#0abec5>&Param7&</color>.',
          shortDescription: 'Increases Soul Rend duration. When Otoha deals Ultimate DMG, reduces Ultimate Cooldown and gains Energy. Increases Otoha\'s &Param4& and &Param6&.',
          params: [
            '11',
            '1.2',
            '9',
            'Ultimate DMG',
            '32.2%',
            'Ultracritrate',
            '5%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Night-Walker',
          icon: '14501_Potential_22',
          description: 'When the Main Umbra Trekker deals DMG to a target with Soul Rend, Otoha summons Doomfall, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Ultimate DMG and gaining <color=#0abec5>&Param2&</color> Energy. This effect can be triggered once every 1s.\nIncreases Otoha\'s &Param3& by <color=#0abec5>&Param4&</color> and &Param5& by <color=#0abec5>&Param6&</color>.',
          shortDescription: 'When the Main Umbra Trekker deals DMG to a target with Soul Rend, Otoha summons Doomfall, dealing AoE DMG and gaining Energy. Increases Otoha\'s &Param3& and &Param5&.',
          params: [
            '110%/126%/143%/192%/207%/223%/253%/267%/280%/306%/328%/350%/372%',
            '9',
            'Ultimate DMG',
            '14%',
            'Ultracritrate',
            '10%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Ripple of Shadow',
          icon: '14501_Potential_23',
          description: 'When Weeping Sky advances, summons <color=#0abec5>10</color> additional bombardments to deal <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG. Bombardments have a <color=#0abec5>&Param2&</color> chance to deal DMG <color=#0abec5>2</color> times. Each bombardment generated during this skill increases this chance by <color=#0abec5>&Param3&</color>.\nIncreases &Param4& dealt by Weeping Sky by <color=#0abec5>&Param5&</color>. Increases Otoha\'s &Param6& by <color=#0abec5>&Param7&</color>.',
          shortDescription: 'When Weeping Sky advances, summons additional bombardments to deal AoE DMG. Bombardments have a chance to deal DMG multiple times. Increases &Param4& dealt by Weeping Sky. Increases Otoha\'s &Param6&.',
          params: [
            '29%/33%/38%/51%/55%/59%/67%/71%/74%/82%/87%/93%/99%',
            '10000',
            '50000',
            '',
            '0',
            'Skill DMG',
            '13%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Evening Rain',
          icon: '14501_Potential_24',
          description: 'In an all-Umbra squad, summons <color=#0abec5>1</color> additional wave of Weeping Sky, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG.\nIncreases &Param2& dealt by Weeping Sky to targets inflicted with ##Umbra Mark#1019# or ##Dark Shackles#2020# by <color=#0abec5>&Param3&</color>. Increases Otoha\'s &Param4& by <color=#0abec5>&Param5&</color>.',
          shortDescription: 'In an all-Umbra squad, summons additional Weeping Sky. Increases &Param2& dealt by Weeping Sky to targets inflicted with ##Umbra Mark#1019# or ##Dark Shackles#2020#. Increases Otoha\'s &Param4&.',
          params: [
            '118%/135%/153%/206%/222%/239%/271%/286%/300%/328%/351%/375%/398%',
            '',
            '0',
            'Skill DMG',
            '13%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            2020: {
              id: 2020,
              name: 'Dark Shackles'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Solitary Lantern',
          icon: '14501_Potential_25',
          description: 'When Otoha deals Ultimate DMG, there is a &Param1& chance to shoot 3 times, each dealing <color=#ec6d21>&Param2&</color> of ATK as AoE Umbra Ultimate DMG. This effect can only be triggered once every &Param3&s.\nIncreases Otoha\'s &Param4& by <color=#ec6d21>&Param5&</color>.',
          shortDescription: 'When Otoha deals Ultimate DMG, there is a chance to shoot multiple times. Increases Otoha\'s &Param4&.',
          params: [
            '80%',
            '61%/98%/134%/171%/207%/244%/281%/317%/354%',
            '2',
            'Ultracritrate',
            '5.6%/7.5%/9.4%/11.3%/13.2%/15%/30%/30%/30%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Rain-Woven Sorrow',
          icon: 'Common_Potential_Water_1',
          description: 'Reduces the forward movement speed of Weeping Sky by <color=#ec6d21>&Param1&</color> and increases its &Param2& by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Reduces the forward movement speed of Weeping Sky and increases its &Param2&.',
          params: [
            '',
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Devouring Shadow',
          icon: 'Common_Potential_Dark_1',
          description: 'In an all-Umbra squad, increases Umbra Trekkers\' &Param1& by <color=#ec6d21>&Param2&</color> and &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'In an all-Umbra squad, increases Umbra Trekkers\' &Param1&.',
          params: [
            'Dee',
            '5%/7%/10%/13%/15%/18%/21%/23%/26%',
            'DEF PEN',
            '25/40/55/70/85/100/102/104/106'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Without A Trace',
          icon: 'Common_Potential_11',
          description: 'When Shattered Edge (Support Skill) is on cooldown, increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When Shattered Edge (Support Skill) is on cooldown, increases Otoha\'s &Param1&.',
          params: [
            'Ultimate DMG',
            '38%/61%/84%/107%/130%/153%/176%/198%/221%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Bone-Chilling Rain',
          icon: 'Common_Potential_Water_1',
          description: 'When Weeping Sky deals DMG, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When Weeping Sky deals DMG, increases the target\'s &Param1&.',
          params: [
            'Deercd',
            '0.5%/0.8%/1.1%/1.4%/1.7%/2%/2.3%/2.6%/2.9%',
            '4',
            '20'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Murmur of Annihilation',
          icon: 'Common_Potential_Dark_1',
          description: 'Each Umbra Trekker in the squad increases all Umbra teammates\' &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Each Umbra Trekker in the squad increases all Umbra teammates\' &Param1&.',
          params: [
            'Dee',
            '3%/5%/7%/9%/11%/13%/15%/17%/19%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Hollow Steps',
          icon: 'Common_Potential_Dark_1',
          description: 'When any Umbra Trekker casts a Main Skill or Support Skill, increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color> and &Param5& by <color=#ec6d21>&Param6&</color> for &Param3&s, up to &Param4& stacks.',
          shortDescription: 'When any Umbra Trekker casts a Main Skill or Support Skill, increases Otoha\'s &Param1& and &Param5&.',
          params: [
            'Ultracritrate',
            '1.1%/1.5%/1.9%/2.3%/2.7%/3%/3.2%/3.4%/3.6%',
            '6.5',
            '5',
            'Ultracritpower',
            '2.3%/3.7%/5.1%/6.5%/7.9%/9.3%/10.7%/12.1%/13.5%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Inevitable End',
          icon: 'Common_Potential_10',
          description: 'Increases Weeping Sky\'s &Param1& against elite or higher-tier targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Weeping Sky\'s &Param1& against elite or higher-tier targets.',
          params: [
            '',
            '0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Silent Knell',
          icon: 'Common_Potential_Dark_1',
          description: 'Void Blossom (Ultimate) inflicts ##Umbra Mark: Gloom#2018#. Increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Void Blossom (Ultimate) inflicts ##Umbra Mark: Gloom#2018#. Increases Otoha\'s &Param1&.',
          params: [
            'ATK',
            '13%/21%/29%/37%/45%/53%/61%/69%/77%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2018: {
              id: 2018,
              name: 'Umbra Mark: Gloom',
              description: 'A special status applied to the target by some Umbra Trekkers, lasting for 10s.\nCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.'
            }
          }
        }
      ],
      common: [
        {
          name: 'Blossom-Eroded Abyss',
          icon: '14501_Potential_41',
          description: 'The parasol thrown by Void Blossom (Ultimate) pulls in nearby targets. Increases Otoha\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'The parasol thrown by Void Blossom (Ultimate) pulls in nearby targets. Increases Otoha\'s &Param1&.',
          params: [
            'Dee',
            '12%/19%/26%/34%/41%/48%/55%/62%/70%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Ultimate Darkness',
          icon: '14501_Potential_42',
          description: 'Increases the &Param1& dealt by Void Blossom (Ultimate) to targets inflicted with ##Dark Shackles#2020# by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& dealt by Void Blossom (Ultimate) to targets inflicted with ##Dark Shackles#2020#.',
          params: [
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            2020: {
              id: 2020,
              name: 'Dark Shackles'
            }
          }
        },
        {
          name: 'Moonlit Edge',
          icon: 'Common_Potential_13',
          description: 'Increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s when Otoha casts Void Blossom (Ultimate).',
          shortDescription: 'Increases &Param1& when Otoha casts Void Blossom (Ultimate).',
          params: [
            'ATK',
            '12%/19%/26%/34%/41%/48%/55%/62%/70%',
            '30'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  karin: {
    id: 157,
    name: 'Karin',
    element: 'Umbra',
    buildOrder: {
      main: {
        build1: {
          title: 'Karin: Main Build 1',
          description: 'A build focused on coordinated hunting with Boss Shark, boosting its DMG.',
          potentials: [
            'Predator\'s Vortex',
            'Shark Ambush',
            'Crashing Wave',
            'Twin Predator',
            'Hunter\'s Command'
          ]
        },
        build2: {
          title: 'Karin: Main Build 2',
          description: 'A build that boosts the effects of Hunting Energy & Hunter\'s Mark and enhances Auto Attacks.',
          potentials: [
            'Scatter Shot',
            'Hunting Dark Shackle',
            'Dark Shackle Detonation',
            'High-Threat Target',
            'Hunting Suppression'
          ]
        }
      },
      support: {
        build1: {
          title: 'Karin: Support Build 1',
          description: 'A build that allows Boss Shark to deal DMG in a larger area and apply special effects.',
          potentials: [
            'Shark\'s Phantom',
            'Dark Bite Mark',
            'Ocean Aftershock',
            'Pack Pursuit',
            'Apex Dominance'
          ]
        },
        build2: {
          title: 'Karin: Support Build 2',
          description: 'A build that increases hit count and triggers bonus explosions.',
          potentials: [
            'Tidal Lash',
            'Undercurrent Blast',
            'Surging Rhythm',
            'Against the Tide',
            'Undercurrent Surge'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Predator\'s Vortex',
          icon: '15701_Potential_01',
          description: 'Boss Shark\'s attacks summon a vortex of fish, dealing <color=#0abec5>&Param1& x7</color> of ATK as AoE Umbra Ultimate DMG and triggering ##Umbra Mark#1019#. This effect can only be triggered once every &Param4&s. Increases Karin\'s &Param2& against targets inflicted with ##Dark Burn#2028# by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'Boss Shark\'s attacks summon a vortex of fish, dealing AoE DMG. Increases Karin\'s &Param2& against targets inflicted with ##Dark Burn#2028#.',
          params: [
            '39%/44%/50%/68%/73%/78%/89%/94%/99%/108%/116%/123%/131%',
            '',
            '0.72%',
            '1.5'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description: 'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Burn, dealing DOT.'
            }
          }
        },
        {
          name: 'Shark Ambush',
          icon: '15701_Potential_02',
          description: 'After casting the Main Skill, Karin summons Boss Shark to follow her for <color=#0abec5>8</color>s. During this time, Boss Shark periodically lunges at the Main Trekker\'s target, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Ultimate DMG and triggering ##Umbra Mark#1019#. Increases Karin\'s &Param2& by <color=#0abec5>&Param3&</color>.',
          shortDescription: 'After casting the Main Skill, Karin summons Boss Shark to follow her. During this time, Boss Shark periodically lunges at the Main Trekker\'s target, dealing AoE DMG.\nIncreases Karin\'s &Param2&.',
          params: [
            '192%/221%/249%/336%/363%/389%/443%/466%/489%/535%/574%/612%/650%',
            'Ultracritrate',
            '18%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Scatter Shot',
          icon: '15701_Potential_03',
          description: 'When Karin hits a target inflicted with ##Hunter\'s Mark#4046# with Auto Attacks, she can additionally fire lob shots, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Auto ATK DMG. When Karin inflicts ##Hunter\'s Mark#4046# on a target, she instantly gains <color=#0abec5>3</color> buff stacks. After that, she loses <color=#0abec5>1</color> buff stack every <color=#0abec5>2</color>s. <color=#0abec5>Each</color> stack increases the number of bullets fired by Karin\'s Auto Attacks by <color=#0abec5>1</color>. When there is a target inflicted with ##Hunter\'s Mark#4046# on the field, increases Karin\'s &Param2& by <color=#0abec5>&Param3&</color> and &Param4& by <color=#0abec5>&Param5&</color>.',
          shortDescription: 'When Karin hits a target inflicted with ##Hunter\'s Mark#4046# with Auto Attacks, she can fire lob shots. When Karin inflicts ##Hunter\'s Mark#4046# on a target, she can fire more Auto Attack bullets for a certain duration. Increases Karin\'s &Param2& and &Param4&.',
          params: [
            '26%/30%/33%/45%/49%/52%/59%/63%/66%/72%/77%/82%/87%',
            'ATK',
            '12%',
            'Normal DMG',
            '15%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4046: {
              id: 4046,
              name: 'Hunter\'s Mark'
            }
          }
        },
        {
          name: 'Hunting Dark Shackle',
          icon: '15701_Potential_04',
          description: 'Extends the duration of ##Hunter\'s Mark#4046# by <color=#0abec5>&Param1&</color>s. While Karin is linked to a target inflicted with ##Hunter\'s Mark#4046#, she deals <color=#0abec5>&Param2&</color> of ATK as AoE Umbra Auto ATK DMG to all targets along the link path and restores <color=#0abec5>10</color> ##Hunting Energy#4045# <color=#0abec5>per second</color>, which can trigger ##Umbra Mark#1019#. When Karin inflicts ##Hunter\'s Mark#4046# on a target, increases her &Param3& by <color=#0abec5>&Param4&</color> and &Param5& by <color=#0abec5>&Param6&</color> for &Param7&s.',
          shortDescription: 'Extends the duration of ##Hunter\'s Mark#4046#. While Karin is linked to a target with ##Hunter\'s Mark#4046#, she deals DMG over time to all targets along the link path and restores ##Hunting Energy#4045#. When Karin inflicts ##Hunter\'s Mark#4046# on a target, increases her &Param3& and &Param5&.',
          params: [
            '3',
            '174%/200%/226%/304%/328%/353%/401%/422%/443%/485%/520%/554%/589%',
            'ATK',
            '15%',
            'Normal DMG',
            '12%',
            '7'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4046: {
              id: 4046,
              name: 'Hunter\'s Mark'
            },
            4045: {
              id: 4045,
              name: 'Hunting Energy',
              description: 'Karin has Hunting Energy, which is capped at 100 and regenerates 10 per second.'
            },
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Crashing Wave',
          icon: '15701_Potential_05',
          description: 'After Karin deals Ultimate DMG 5 times, Boss Shark follows up with a tail strike, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Ultimate DMG  and triggering ##Umbra Mark#1019#. This effect can only be triggered once every &Param2&s. Increases Karin\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'After Karin deals Ultimate DMG several times, Boss Shark follows up with a tail strike that deals AoE DMG.',
          params: [
            '163%/261%/359%/457%/555%/652%/750%/848%/946%/0%/0%/0%/0%',
            '2',
            'Ultracritrate',
            '3.7%/6%/8.2%/10.5%/12.7%/15%/16%/17%/18%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Dark Shackle Detonation',
          icon: '15701_Potential_08',
          description: 'When an enemy target loses ##Hunter\'s Mark#4046#, deals <color=#ec6d21>&Param1&</color> of Karin\'s ATK as AoE Umbra Auto ATK DMG and triggering ##Umbra Mark#1019#. Increases Karin\'s &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'When an enemy target loses ##Hunter\'s Mark#4046#, deals AoE DMG.',
          params: [
            '268%/429%/590%/751%/911%/1072%/1233%/1394%/1555%/0%/0%/0%/0%',
            'Normal DMG',
            '11.2%/18%/24.7%/31.5%/38.2%/45%/49%/52%/55%',
            '8'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            4046: {
              id: 4046,
              name: 'Hunter\'s Mark'
            },
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Confidence Booster',
          icon: 'Common_Potential_Dark_1',
          description: 'When Karin triggers an ##Umbra Mark#1019#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Karin triggers an ##Umbra Mark#1019#, increases &Param1&.',
          params: [
            'ATK',
            '6%/9.6%/13.2%/16.8%/20.4%/24%/27.6%/31.2%/34.8%',
            '5',
            '2'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Twin Predator',
          icon: 'Common_Potential_Dark_1',
          description: 'When Boss Shark deals DMG, increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> and the &Param3& of Umbra Versatile Trekkers by <color=#ec6d21>&Param4&</color> for &Param5&s.',
          shortDescription: 'When Boss Shark deals DMG, increases Karin\'s &Param1& and the &Param3& of Umbra Versatile Trekkers.',
          params: [
            'Ultracritpower',
            '7.5%/12%/16.5%/21%/25.5%/30%/34%/38%/42%',
            'Ultracritpower',
            '15%/24%/33%/42%/51%/60%/64%/68%/72%',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'High-Threat Target',
          icon: 'Common_Potential_Fire_1',
          description: 'In an all-Umbra squad, when Bait and Catch (Main Skill) is on cooldown, increases the &Param1& dealt by Karin\'s Auto Attacks to targets inflicted with ##Dark Burn#2028# by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'In an all-Umbra squad, when Bait and Catch (Main Skill) is on cooldown, increases the &Param1& dealt by Karin\'s Auto Attacks to targets inflicted with ##Dark Burn#2028#.',
          params: [
            '',
            '0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description: 'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Burn, dealing DOT.'
            }
          }
        },
        {
          name: 'Pursuit of the Shadow',
          icon: 'Common_Potential_Dark_1',
          description: 'Karin can dodge one more time. When dodging, increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Can dodge one more time. When dodging, increases Karin\'s &Param1&.',
          params: [
            'ATK',
            '10%/16%/22%/28%/34%/40%/46%/52%/58%',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Hunter\'s Command',
          icon: 'Common_Potential_Fire_1',
          description: 'In an all-Umbra squad, increases the &Param1& dealt by Boss Shark to targets inflicted with ##Dark Burn#2028# by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'In an all-Umbra squad, increases the &Param1& dealt by Boss Shark to targets inflicted with ##Dark Burn#2028#.',
          params: [
            '',
            '0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%/0.85%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            2028: {
              id: 2028,
              name: 'Dark Burn',
              description: 'After some Umbra Trekkers trigger the Umbra Mark, deal damage and trigger Dark Burn, dealing DOT.'
            }
          }
        },
        {
          name: 'Hunting Suppression',
          icon: 'Common_Potential_Dark_1',
          description: 'When Karin triggers ##Umbra Mark#1019# on a target with ##Hunter\'s Mark#4046#, increases her &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Karin triggers ##Umbra Mark#1019# on a target with ##Hunter\'s Mark#4046#, increases her &Param1&.',
          params: [
            'Normal DMG',
            '5%/8%/11%/14%/17%/20%/22%/24%/26%',
            '5',
            '3'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            4046: {
              id: 4046,
              name: 'Hunter\'s Mark'
            }
          }
        },
        {
          name: 'Aura of Unity',
          icon: 'Common_Potential_Dark_1',
          description: 'Each Umbra Trekker in the squad increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> and all Umbra Trekkers\' &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Umbra Trekkers in the squad increase Karin\'s &Param1& and all Umbra Trekkers\' &Param3&.',
          params: [
            'Dee',
            '3.2%/5.2%/7.1%/9.1%/11%/13%/14.9%/16.9%/18.8%',
            'Dee',
            '3.2%/5.2%/7.1%/9.1%/11%/13%/14.9%/16.9%/18.8%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Shark\'s Phantom',
          icon: '15701_Potential_21',
          description: 'Boss Shark summoned by Raging Sea (Support Skill) can repeatedly bite the target, dealing <color=#0abec5>extra instances</color> of DMG to large targets.',
          shortDescription: 'Boss Shark summoned by Raging Sea (Support Skill) can repeatedly bite the target, dealing <color=#0abec5>multiple instances of DMG</color>.',
          params: [],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Dark Bite Mark',
          icon: '15701_Potential_22',
          description: 'Boss Shark summoned by Raging Sea (Support Skill) leaves bite marks for 1s when dealing DMG. When Boss Shark deals DMG to a target with a bite mark, it detonates the bite mark, dealing <color=#0abec5>&Param1&</color> of ATK as single-target Umbra Ultimate DMG and triggering ##Umbra Mark#1019#.',
          shortDescription: 'Boss Shark summoned by Raging Sea (Support Skill) leaves bite marks when dealing DMG. Subsequent DMG from Boss Shark can detonate these bite marks, dealing single-target DMG.',
          params: [
            '151%/174%/197%/265%/286%/307%/350%/368%/386%/422%/452%/483%/513%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Tidal Lash',
          icon: '15701_Potential_23',
          description: 'When casting Raging Sea (Support Skill), Karin can swing additional chains, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG.',
          shortDescription: 'When casting Raging Sea (Support Skill), Karin can swing additional chains to deal more DMG.',
          params: [
            '49%/56%/64%/86%/93%/100%/113%/119%/125%/137%/147%/156%/166%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Undercurrent Blast',
          icon: '15701_Potential_24',
          description: 'When Karin swings the chain to deal DMG during Raging Sea (Support Skill), triggers explosions that deal <color=#0abec5>&Param1&</color> of ATK as AoE Umbra Skill DMG and triggering ##Umbra Mark#1019#. This effect can be triggered up to <color=#0abec5>4</color> times per chain swing.',
          shortDescription: 'When Karin swings the chain to deal DMG during Raging Sea (Support Skill), triggers explosions that deal AoE DMG.',
          params: [
            '106%/122%/137%/185%/200%/215%/244%/257%/269%/295%/316%/337%/358%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Ocean Aftershock',
          icon: '15701_Potential_25',
          description: 'Boss Shark summoned by Raging Sea (Support Skill) triggers bubble explosions along its charge path, with each explosion dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Ultimate DMG and triggering ##Umbra Mark#1019#. Increases the &Param2& dealt by Boss Shark by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'Boss Shark summoned by Raging Sea (Support Skill) triggers bubble explosions along its charge path, dealing AoE DMG.\nIncreases the &Param2& dealt by Boss Shark.',
          params: [
            '21%/34%/46%/59%/72%/84%/97%/110%/122%/0%/0%/0%/0%',
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Surging Rhythm',
          icon: 'Common_Potential_8',
          description: 'When Karin swings the chain to deal DMG during Raging Sea (Support Skill), increases the &Param1& dealt by subsequent chain hits of this skill by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Karin swings the chain to deal DMG during Raging Sea (Support Skill), increases the &Param1& dealt by subsequent chain hits of this skill.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
            '2',
            '9'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Awkward Inspiration',
          icon: 'Common_Potential_Dark_1',
          description: 'Increases all Umbra Trekkers\' &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases all Umbra Trekkers\' &Param1&.',
          params: [
            'ATK',
            '12%/19.2%/26.4%/33.6%/40.8%/48%/55.2%/62.4%/69.6%'
          ],
          rarity: 1,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Pack Pursuit',
          icon: 'Common_Potential_8',
          description: 'When Boss Shark from Raging Sea (Support Skill) deals DMG, increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Boss Shark summoned by Raging Sea (Support Skill) deals DMG, increases Karin\'s &Param1&.',
          params: [
            'ATK',
            '2.5%/4%/5.5%/7%/8.5%/10%/11.5%/13%/14.5%',
            '5',
            '7'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Against the Tide',
          icon: 'Common_Potential_Water_1',
          description: 'Increases the &Param1& dealt by chain swings during Raging Sea (Support Skill) to elite or higher-tier targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& dealt by chain swings during Raging Sea (Support Skill) to elite or higher-tier targets.',
          params: [
            '',
            '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Competitive Spirit',
          icon: 'Common_Potential_13',
          description: 'When casting Raging Sea (Support Skill), increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When casting Raging Sea (Support Skill), increases Karin\'s &Param1&.',
          params: [
            'Dee',
            '12%/19.2%/26.4%/33.6%/40.8%/48%/55.2%/62.4%/69.6%',
            '15'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Apex Dominance',
          icon: 'Common_Potential_10',
          description: 'Increases the &Param1& dealt by Boss Shark summoned by Raging Sea (Support Skill) to elite or lower-tier targets by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases the &Param1& dealt by Boss Shark summoned by Raging Sea (Support Skill) to elite or lower-tier targets.',
          params: [
            '',
            '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Undercurrent Surge',
          icon: 'Common_Potential_Dark_1',
          description: 'When any Umbra Trekker casts a Main Skill or Support Skill, increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When any Umbra Trekker casts a Main Skill or Support Skill, increases Karin\'s &Param1&.',
          params: [
            'ATK',
            '3%/4.8%/6.6%/8.4%/10.2%/12%/13.8%/15.6%/17.4%',
            '12',
            '5'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Moonlit Bond',
          icon: 'Common_Potential_Dark_1',
          description: 'For each Umbra Trekker in the squad, increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Umbra Trekkers in the squad increase Karin\'s &Param1&.',
          params: [
            'Dee',
            '4%/6.4%/8.8%/11.2%/13.6%/16%/18.4%/20.8%/23.2%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Unyielding Spirit',
          icon: '15701_Potential_41',
          description: 'Increases the &Param1& dealt by Shark Assault (Ultimate) to elite or higher-tier targets by <color=#ec6d21>&Param2&</color>. Increases Karin\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'Increases the &Param1& dealt by Shark Assault (Ultimate) to elite or higher-tier targets. Increases Karin\'s &Param3&.',
          params: [
            '',
            '0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%/0.22%',
            'ATK',
            '5%/8%/11%/14%/17%/20%/23%/26%/29%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Deep-Sea Conflict',
          icon: '15701_Potential_42',
          description: 'While Shark Assault (Ultimate) is active, shoots <color=#ec6d21>&Param1&</color> bubbles every once in a while, each bubble dealing <color=#ec6d21>&Param2&</color> of ATK as AoE Umbra Ultimate DMG and triggering ##Umbra Mark#1019#. Increases Karin\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
          shortDescription: 'While Shark Assault (Ultimate) is active, continuously shoots bubbles to deal AoE DMG. Increases Karin\'s &Param3&.',
          params: [
            '',
            '27%/43%/59%/75%/91%/107%/123%/139%/155%/0%/0%/0%/0%',
            'Ultimate DMG',
            '14.5%/23.2%/31.9%/40.6%/49.3%/58%/65%/70%/75%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {
            1019: {
              id: 1019,
              name: 'Umbra Mark',
              description: 'The generic name for all Umbra Marks.\nWhen triggered by specific Umbra Trekkers\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Self-Transcend',
          icon: 'Common_Potential_13',
          description: 'When casting Shark Assault (Ultimate), increases Karin\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s. Increases Karin\'s &Param4& by <color=#ec6d21>&Param5&</color>.',
          shortDescription: 'When casting Shark Assault (Ultimate), increases Karin\'s &Param1&.',
          params: [
            'ATK',
            '17.5%/28%/38.5%/49%/59.5%/70%/80%/90%/100%',
            '30',
            'Normal DMG',
            '8.7%/14%/19.2%/24.5%/29.7%/35%/40%/45%/50%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
  suntideWillow: {
    id: 160,
    name: 'Suntide Willow',
    element: 'Aqua',
    buildOrder: {
      main: {
        build1: {
          title: 'Willow: Main Build 1',
          description: 'A build centered on enlarging the Bubble Frog to deal massive AoE damage.',
          potentials: [
            'Bubble Flurry',
            'Rippling Radiance',
            'Enduring Bubble',
            'Dreamlike Illusion',
            'Clustered Foam'
          ]
        },
        build2: {
          title: 'Willow: Main Build 2',
          description: 'A build centered on rapid bounces from the Bubble Frog to unleash Echoing Soundwave.',
          potentials: [
            'Rhythmic Bubbles',
            'Rainbow Rebound',
            'Foam Echo',
            'Touch \'n\' Bounce',
            'Wavering Glow'
          ]
        }
      },
      support: {
        build1: {
          title: 'Willow: Support Build 1',
          description: 'A build that fires piercing water jets to strike enemies while inflicting powerful debuffs on targets.',
          potentials: [
            'Flying Droplets',
            'Flooding Shore',
            'Words Unchanged',
            'Hovering Gale',
            'Eternal Tide'
          ]
        },
        build2: {
          title: 'Willow: Support Build 2',
          description: 'A build rapidly unleashes piercing soundwaves while granting stats buffs to the squad.',
          potentials: [
            'Rhythm Surge',
            'Thunderous Surf',
            'Engulfing Tide',
            'Receding Echoes',
            'Prismatic Bubbles'
          ]
        }
      }
    },
    potentials: {
      mainCore: [
        {
          name: 'Bubble Flurry',
          icon: '16001_Potential_01',
          description: 'In Bubble Machine mode, targets with ##Bubble Mark#4041# periodically generate absorbable bubbles. Each bubble absorbed by Bubble Frog enlarges it by <color=#0abec5>10%</color>, while also increasing the &Param1& dealt by Bubble Frog by <color=#0abec5>&Param2&</color>. It can grow up to <color=#0abec5>100%</color> in size.',
          shortDescription: 'In Bubble Machine mode, targets with ##Bubble Mark#4041# generate absorbable bubbles. After absorbing them, Bubble Frog grows in size, and the &Param1& it deals increases.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4041: {
              id: 4041,
              name: 'Bubble Mark'
            }
          }
        },
        {
          name: 'Rippling Radiance',
          icon: '16001_Potential_02',
          description: 'In Bubble Machine mode, Bubble Frog deals <color=#0abec5>&Param1&</color> of ATK as AoE Aqua Skill DMG every second to nearby targets, while increasing their &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s, stacking up to &Param5& times. Can inflict ##Aqua Mark: Torrent#2008#.',
          shortDescription: 'In Bubble Machine mode, Bubble Frog deals Aqua Skill DMG to nearby targets over time while increasing their &Param2& and inflicting ##Aqua Mark: Torrent#2008#.',
          params: [
            '52%/60%/68%/91%/98%/106%/120%/127%/133%/146%/157%/167%/177%',
            'Weercd',
            '4%',
            '8',
            '4'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Rhythmic Bubbles',
          icon: '16001_Potential_03',
          description: 'In Megaphone mode, increases Bubble Frog\'s bounce frequency by <color=#0abec5>100%</color> and &Param1& by <color=#0abec5>&Param2&</color>. Each bounce grants 5 additional Decibels.',
          shortDescription: 'In Megaphone mode, increases Bubble Frog\'s bounce frequency and &Param1&. Each bounce grants additional Decibels.',
          params: [
            '',
            '0.57%'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Rainbow Rebound',
          icon: '16001_Potential_04',
          description: 'In Megaphone mode, each bounce of Bubble Frog unleashes ##Echoing Soundwave#4047# that echo <color=#0abec5>3</color> times, dealing <color=#0abec5>&Param1&</color> of ATK as Aqua Skill DMG and increasing the target\'s DMG Taken of all Elements by <color=#0abec5>&Param3&</color> for &Param4&s, stacking up to &Param5& times.\nThis DMG can inflict ##Aqua Mark: Torrent#2008#. For every <color=#0abec5>10</color> current Decibels, increases the Attack Range of ##Echoing Soundwave#4047# by <color=#0abec5>5%</color>.',
          shortDescription: 'In Megaphone mode, Bubble Frog unleashes ##Echoing Soundwave#4047# when bouncing, which can echo multiple times, dealing Aqua Skill DMG and increasing the target\'s DMG Taken of all Elements. This DMG can inflict ##Aqua Mark: Torrent#2008#.\nThe Attack Range of ##Echoing Soundwave#4047# increases based on the current Decibels.',
          params: [
            '14%/16%/18%/25%/27%/29%/33%/35%/37%/40%/43%/46%/49%',
            'Weercd',
            '1.8%',
            '5',
            '8'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4047: {
              id: 4047,
              name: 'Echoing Soundwave',
              description: 'Generated by the Main Trekker Potential, Rainbow Rebound. Deals damage.'
            },
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        }
      ],
      mainNormal: [
        {
          name: 'Enduring Bubble',
          icon: 'Common_Potential_10',
          description: 'When Willow and Bubble Frog deal DMG to targets with ##Bubble Mark#4041#, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When Willow and Bubble Frog deal DMG to targets with ##Bubble Mark#4041#, increases the target\'s &Param1&.',
          params: [
            'Weercd',
            '2%/3.2%/4.4%/5.6%/6.8%/8%/9.2%/10.4%/11.6%',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4041: {
              id: 4041,
              name: 'Bubble Mark'
            }
          }
        },
        {
          name: 'Foam Echo',
          icon: 'Common_Potential_Water_1',
          description: 'When ##Echoing Soundwave#4047# deal DMG, increases own and non-Aqua Squadmates\' &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When ##Echoing Soundwave#4047# deal DMG, increases own and non-Aqua Squadmates\' &Param1&.',
          params: [
            'ATK',
            '2.3%/3.7%/5.1%/6.5%/7.9%/9.3%/10.7%/12.1%/13.5%',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4047: {
              id: 4047,
              name: 'Echoing Soundwave',
              description: 'Generated by the Main Trekker Potential, Rainbow Rebound. Deals damage.'
            }
          }
        },
        {
          name: 'Singing Shores',
          icon: 'Common_Potential_13',
          description: 'Increases Dodge count by 1.\nAfter Willow dodges, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'Can dodge one more time. After Willow dodges, increases own &Param1&.',
          params: [
            'ATK',
            '15%/24%/33%/42%/51%/60%/69%/78%/87%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Dreamlike Illusion',
          icon: 'Common_Potential_Water_1',
          description: 'When a squadmate triggers ##Aqua Mark#1018# or inflicts ##Aqua Mark: Torrent#2008# on targets with ##Bubble Mark#4041#,  increases all Aqua Trekkers\' &Param1& in the squad by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When a squadmate triggers ##Aqua Mark#1018# or inflicts ##Aqua Mark: Torrent#2008# on targets with ##Bubble Mark#4041#,  increases all Aqua Trekkers\' &Param1& in the squad.',
          params: [
            'Skill DMG',
            '1.6%/2.6%/3.6%/4.6%/5.6%/6.6%/7.6%/8.6%/9.6%',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description: 'The generic name for all Aqua Marks.\nWhen triggered by specific Aqua Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            },
            4041: {
              id: 4041,
              name: 'Bubble Mark'
            }
          }
        },
        {
          name: 'Touch \'n\' Bounce',
          icon: 'Common_Potential_Water_1',
          description: 'Each time Bubble Frog bounces, increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color>. Additionally, increases non-Aqua Squadmates\' &Param5& by <color=#ec6d21>&Param6&</color>. This effect lasts &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'Each time Bubble Frog bounces, increases the squad\'s &Param1&. Additionally, increases non-Aqua Squadmates\' &Param5&.',
          params: [
            'Skill DMG',
            '1.2%/2%/2.7%/3.5%/4.2%/5%/5.7%/6.5%/7.2%',
            '',
            '',
            'Skill DMG',
            '1.7%/2.8%/3.8%/4.9%/5.9%/7%/8%/9.1%/10.1%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Ocean Wanderer',
          icon: 'Common_Potential_4',
          description: 'When Bubble Frog deals DMG, Willow gains a shield equal to <color=#ec6d21>&Param1&</color> of Base ATK for &Param2&s. This effect can only be triggered once every 10s.',
          shortDescription: 'When Bubble Frog deals DMG, Willow gains a shield.',
          params: [
            '32.1%/51.5%/70.8%/90.1%/109.4%/128.7%/148.1%/167.4%/186.7%',
            '6/6/6/6/6/6/6/6/6'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Clustered Foam',
          icon: 'Common_Potential_Water_1',
          description: 'In Bubble Machine mode, bubbles deal an additional <color=#ec6d21>&Param1&</color> of ATK as AoE Aqua Skill DMG. Can inflict ##Aqua Mark: Torrent#2008#.\nIncreases &Param2& dealt by all Aqua Trekkers against targets with the ##Bubble Mark#4041# by <color=#ec6d21>&Param3&</color>.',
          shortDescription: 'In Bubble Machine mode, bubbles deal additional AoE Aqua Skill DMG. Can inflict ##Aqua Mark: Torrent#2008#.\nIncreases the &Param2& dealt by all Aqua Trekkers against targets with ##Bubble Mark#4041#.',
          params: [
            '17%/27%/37%/47%/58%/68%/78%/89%/99%/0%/0%/0%/0%',
            '',
            '0.17%/0.17%/0.17%/0.17%/0.17%/0.17%/0.17%/0.17%/0.17%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            },
            4041: {
              id: 4041,
              name: 'Bubble Mark'
            }
          }
        },
        {
          name: 'Wavering Glow',
          icon: 'Common_Potential_Water_1',
          description: 'Every 2 bounces, Bubble Frog deals <color=#ec6d21>&Param1&</color> of ATK as Aqua Skill DMG in a large area. Can inflict ##Aqua Mark: Torrent#2008#, while increasing targets\' &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.',
          shortDescription: 'After bouncing a certain number of times, Bubble Frog deals Aqua Skill DMG in a large area. Can inflict ##Aqua Mark: Torrent#2008#, while increasing targets\' &Param2&.',
          params: [
            '21%/35%/48%/61%/74%/87%/100%/113%/126%/0%/0%/0%/0%',
            'Weercd',
            '2.1%/3.5%/4.8%/6.1%/7.4%/8.7%/10%/11.4%/12.7%',
            ''
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Cumulus Drift',
          icon: 'Common_Potential_13',
          description: 'Increases Bubble Frog duration by 3s, and while it is on the field, increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Increases Bubble Frog duration, and while it is on the field, increases the squad\'s &Param1&.',
          params: [
            'ATK',
            '10%/16%/22%/28%/34%/40%/46%/52%/58%'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      supportCore: [
        {
          name: 'Flying Droplets',
          icon: '16001_Potential_21',
          description: '##Gentle Warning#4042# gains additional stat bonuses from ##Safety Alert#4043#. For every <color=#0abec5>10</color> shots fired by Willow while under Gentle Warning, she fires a straight-line water column attack that deals <color=#0abec5>&Param1&x3</color> of ATK as Aqua Skill DMG and increases Decibels by <color=#0abec5>30</color>, inflicting ##Smiling Sanction#4040# and ##Aqua Mark: Torrent#2008#.',
          shortDescription: '##Gentle Warning#4042# gains additional stat bonuses from ##Safety Alert#4043#. For every <color=#0abec5>10</color> shots fired by Willow while under Gentle Warning, she fires a straight-line water column attack that deals Aqua Skill DMG and increases Decibels, while applying ##Smiling Sanction#4040# and ##Aqua Mark: Torrent#2008#.',
          params: [
            '427%/491%/555%/746%/806%/866%/985%/1036%/1088%/1190%/1275%/1361%/1446%',
            'Rcdmarkdmg',
            '11.7%',
            '12',
            '6'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4042: {
              id: 4042,
              name: 'Gentle Warning'
            },
            4043: {
              id: 4043,
              name: 'Safety Alert'
            },
            4040: {
              id: 4040,
              name: 'Smiling Sanction'
            },
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Flooding Shore',
          icon: '16001_Potential_22',
          description: 'When Decibels ≥<color=#0abec5>40</color>, immediately consumes <color=#0abec5>40</color> Decibels to launch a rotating water jet attack, dealing <color=#0abec5>&Param1&x3</color> of ATK as AoE Aqua Skill DMG, inflicting ##Smiling Sanction#4040# and ##Aqua Mark: Torrent#2008#.',
          shortDescription: 'When Decibels ≥40, consumes Decibels to fire a rotating water jet, dealing AoE Aqua Skill DMG and inflicting ##Smiling Sanction#4040# and ##Aqua Mark: Torrent#2008#.',
          params: [
            '204%/235%/266%/358%/386%/415%/472%/497%/521%/570%/611%/652%/693%',
            'Rcdmarkdmg',
            '11.7%',
            '12',
            '6'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4040: {
              id: 4040,
              name: 'Smiling Sanction'
            },
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Rhythm Surge',
          icon: '16001_Potential_23',
          description: 'Initial Decibel upon entering the field equals <color=#0abec5>70</color>.\nAt <color=#0abec5>100</color> Decibels, increases the squad\'s &Param1& by <color=#0abec5>&Param2&</color> for &Param3&s, while consuming Decibels over time to rapidly fire bubbles until Decibels drop to <color=#0abec5>50</color>.',
          shortDescription: 'Increases initial Decibels upon entering the field. At full Decibels, increases the squad\'s &Param1&, while continuously consuming Decibels to rapidly fire bubbles.',
          params: [
            'Crit Rate',
            '10%',
            '14'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {}
        },
        {
          name: 'Thunderous Surf',
          icon: '16001_Potential_24',
          description: 'Increases Decibels gained per shot from <color=#0abec5>2</color> to <color=#0abec5>4</color>.\nWhile ##Safety Alert#4043# is active, bubbles turn into piercing sonic waves, increasing DMG multiplier by <color=#0abec5>&Param1&</color>, and increasing the target\'s &Param2& by <color=#0abec5>&Param3&</color> for &Param4&s, stacking up to &Param5& times.',
          shortDescription: 'Increases Decibels gained from shots.\nWhile ##Safety Alert#4043# is active, bubbles turn into sonic waves, increasing DMG multiplier and the target\'s &Param2&.',
          params: [
            '0.85%',
            'Weercd',
            '1.1%',
            '8',
            '16'
          ],
          rarity: 1,
          stype: 42,
          corner: null,
          hints: {
            4043: {
              id: 4043,
              name: 'Safety Alert'
            }
          }
        }
      ],
      supportNormal: [
        {
          name: 'Words Unchanged',
          icon: 'Common_Potential_Water_1',
          description: 'When entering with Frolic in the Sea (Support Skill), the DMG from diving into the water also inflicts 1 stack of ##Smiling Sanction#4040#. The max stack limit of ##Smiling Sanction#4040# is increased to <color=#ec6d21>&Param3&</color> stacks, and each stack additionally increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When entering with the Support Skill, the DMG from diving into the water also inflicts 1 stack of ##Smiling Sanction#4040#. Increases the max stack limit of ##Smiling Sanction#4040#, and additionally increases the target\'s &Param1&.',
          params: [
            'Weercd',
            '0.5%/0.8%/1.1%/1.4%/1.7%/2%/2.3%/2.6%/2.9%',
            '7/8/9/10/11/12/12/12/12'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {
            4040: {
              id: 4040,
              name: 'Smiling Sanction'
            }
          }
        },
        {
          name: 'Engulfing Tide',
          icon: 'Common_Potential_Water_1',
          description: 'Bubble Bath expands by 5% every second, up to 30%. When the Main Trekker is inside Bubble Bath, increases her &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Bubble Bath expands over time. When the Main Trekker is inside Bubble Bath, increases her &Param1&.',
          params: [
            'Wee',
            '18%/28%/39%/49%/60%/70%/81%/92%/102%'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Prismatic Barrier',
          icon: 'Common_Potential_4',
          description: 'The Main Trekker inside Bubble Bath gains a shield equal to <color=#ec6d21>&Param1&</color> of Willow\'s Base ATK every 5s for &Param2&s.',
          shortDescription: 'After staying in Bubble Bath for a period of time, the Main Trekker gains a shield.',
          params: [
            '45%/60%/75%/90%/105%/120%/135%/150%/165%',
            '4/4/4/4/4/4/4/4/4'
          ],
          rarity: 2,
          stype: 41,
          corner: 1,
          hints: {}
        },
        {
          name: 'Hovering Gale',
          icon: 'Common_Potential_Wind_1',
          description: 'When a target with ##Smiling Sanction#4040# has ##Aqua Mark#1018# triggered, this target is immediately inflicted with ##Aqua Mark: Torrent#2008# again and receives an additional <color=#ec6d21>&Param1&</color> of ATK as Aqua Mark DMG. For each stack of ##Smiling Sanction#4040# this target has, increases the &Param2& received this time by <color=#ec6d21>&Param3&</color>. This effect can only be triggered once every 1s.',
          shortDescription: 'When a target with ##Smiling Sanction#4040# has ##Aqua Mark#1018# triggered, this target is immediately inflicted with ##Aqua Mark: Torrent#2008# again and receives additional Aqua Mark DMG. The &Param2& received this time is increased based on the stacks of ##Smiling Sanction#4040#.',
          params: [
            '118%/189%/261%/332%/403%/474%/545%/616%/687%',
            '',
            '0.64%/0.64%/0.64%/0.64%/0.64%/0.64%/0.64%/0.64%/0.64%',
            '1.5'
          ],
          rarity: 1,
          stype: 41,
          corner: 2,
          hints: {
            4040: {
              id: 4040,
              name: 'Smiling Sanction'
            },
            1018: {
              id: 1018,
              name: 'Aqua Mark',
              description: 'The generic name for all Aqua Marks.\nWhen triggered by specific Aqua Trekkers\' attacks, the status is removed, and a special effect is activated.'
            },
            2008: {
              id: 2008,
              name: 'Aqua Mark: Torrent',
              description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
            }
          }
        },
        {
          name: 'Receding Echoes',
          icon: 'Common_Potential_11',
          description: 'Each time Decibels are consumed, increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param4&s, stacking up to &Param3& times.',
          shortDescription: 'Consuming Decibels increases the squad\'s &Param1&.',
          params: [
            'Crit DMG',
            '0.6%/1%/1.3%/1.7%/2%/2.4%/2.8%/3.1%/3.5%',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Tender Seas',
          icon: 'Common_Potential_19',
          description: 'When Willow is on the battlefield, increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'When Willow is on the battlefield, increases the squad\'s &Param1&.',
          params: [
            'ATK',
            '10%/17%/23%/29%/35%/42%/48%/54%/60%'
          ],
          rarity: 2,
          stype: 41,
          corner: 2,
          hints: {}
        },
        {
          name: 'Eternal Tide',
          icon: 'Common_Potential_Water_1',
          description: 'While ##Gentle Warning#4042# is active, increases the squad\'s &Param1& by an additional <color=#ec6d21>&Param2&</color>; the Main Trekker generates 8 extra Decibels when dealing DMG. This effect can be triggered once every 5s.',
          shortDescription: 'While ##Gentle Warning#4042# is active, additionally increases the squad\'s &Param1&, and the Main Trekker generates extra Decibels when dealing DMG.',
          params: [
            'Wee',
            '12%/19%/26%/33%/40%/47%/54%/61%/68%'
          ],
          rarity: 2,
          stype: 41,
          corner: 3,
          hints: {
            4042: {
              id: 4042,
              name: 'Gentle Warning'
            }
          }
        },
        {
          name: 'Prismatic Bubbles',
          icon: 'Common_Potential_Fire_1',
          description: 'For every 8 shots fired by Willow, a blue bubble is generated near targets inside Bubble Bath, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Aqua Skill DMG, while increasing the squad\'s &Param2& by <color=#ec6d21>&Param4&</color> for &Param8&s. When a blue bubble is generated, there is a 50% chance it turns into a red bubble, additionally increasing Main Trekker\'s &Param6& by <color=#ec6d21>&Param7&</color> for &Param8&s.',
          shortDescription: 'For every certain number of shots fired by Willow, a blue bubble is generated near targets inside Bubble Bath, dealing AoE Aqua Skill DMG, while increasing the squad\'s &Param2&. When a blue bubble is generated, there is a chance it turns into a red bubble, additionally increasing Main Trekker\'s &Param6&.',
          params: [
            '41%/65%/89%/114%/138%/163%/187%/211%/236%',
            'Crit Rate',
            '',
            '5%/8%/11%/14%/17%/20%/21%/22%/23%',
            '',
            'ATK',
            '19%/30%/41%/52%/63%/74%/85%/96%/107%',
            ''
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        },
        {
          name: 'Balmy Surf',
          icon: 'Common_Potential_Water_1',
          description: 'Each Aqua Trekker in the squad increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
          shortDescription: 'Each Aqua Trekker in the squad increases the squad\'s &Param1&.',
          params: [
            'DEF PEN',
            '9/14/19/24/29/34/35/36/37'
          ],
          rarity: 1,
          stype: 41,
          corner: 3,
          hints: {}
        }
      ],
      common: [
        {
          name: 'Tidal Warning',
          icon: '16001_Potential_41',
          description: 'Increases the &Param1& dealt by Beach Warning (Ultimate) by <color=#ec6d21>&Param2&</color>.\nAfter casting the Ultimate, Willow gains 3 additional Decibels every 1.5s, up to a total of 30 Decibels.',
          shortDescription: 'Increases &Param1&. After casting the Ultimate, generates additional Decibels for a period of time.',
          params: [
            'Ultimate DMG',
            '33%/53%/73%/93%/113%/133%/153%/173%/193%'
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Shore Regulation',
          icon: 'Common_Potential_13',
          description: 'When casting Beach Warning (Ultimate), increases the squad\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
          shortDescription: 'When casting the Ultimate, increases the squad\'s &Param1&.',
          params: [
            'ATK',
            '10%/17%/23%/29%/35%/42%/48%/54%/60%',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        },
        {
          name: 'Marine Justice',
          icon: 'Common_Potential_Water_1',
          description: 'When Beach Warning deals DMG, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
          shortDescription: 'When the Ultimate deals DMG, increases the target\'s &Param1&.',
          params: [
            'Weercd',
            '2.7%/4.3%/5.9%/7.6%/9.2%/10.8%/11.6%/12.4%/13.2%',
            '',
            ''
          ],
          rarity: 2,
          stype: 41,
          corner: null,
          hints: {}
        }
      ]
    }
  },
};

// Helper functions
export const getPotentialsByCharacter = charName => allPotentials[charName.toLowerCase()];
export const getAllCharacterNames = () => Object.keys(allPotentials);


// kebab-slug aliases
allPotentials['chaton'] = allPotentials.chaton;
allPotentials['firefly'] = allPotentials.firefly;
allPotentials['eleanor'] = allPotentials.eleanor;
allPotentials['sparkla'] = allPotentials.sparkla;
allPotentials['otoha'] = allPotentials.otoha;
allPotentials['karin'] = allPotentials.karin;
allPotentials['suntide-willow'] = allPotentials.suntideWillow;

// Get a specific potential by name for a character (searches all categories)
export const getPotentialByName = (characterName, potentialName) => {
  // Convert character name to camelCase key (e.g., "Snowish Laru" -> "snowishLaru")
  const charKey = characterName
    .toLowerCase()
    .split(' ')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');

  const charData = allPotentials[charKey];
  if (!charData || !charData.potentials) return null;

  const allCategories = [
    ...(charData.potentials.mainCore || []),
    ...(charData.potentials.mainNormal || []),
    ...(charData.potentials.common || []),
    ...(charData.potentials.supportCore || []),
    ...(charData.potentials.supportNormal || []),
  ];

  return allCategories.find(p => p.name.toLowerCase() === potentialName.toLowerCase()) || null;
};



allPotentials['donna'] = {
  id: 130,
  name: 'Donna',
  element: 'Aqua',
  buildOrder: {
    main: {
      build1: {
        title: 'Donna: Main Build 1',
        description: 'A build that fires more and stronger arrows, significantly enhancing Auto Attacks.',
        potentials: [
          'Condensation Orbs',
          'Azure Night',
          'Tidal Echo',
          'Piercing Arrow Rain',
          'Rime Shatterer'
        ]
      },
      build2: {
        title: 'Donna: Main Build 2',
        description: 'A build that synergizes with doll attacks, improving ATK and skill synergy.',
        potentials: [
          'Precision Marketing',
          'Bubble Finale',
          'Surging Tide',
          'Cloud Piercer',
          'Hazy Curtain'
        ]
      }
    },
    support: {
      build1: {
        title: 'Donna: Support Build 1',
        description: 'A build that concentrates attacks on targets in front.',
        potentials: [
          'Unleashed Arrow',
          'Arrowfall Reckoning',
          'Arrow Pursuit',
          'Frostbitten Arrow',
          'Dead Shot'
        ]
      },
      build2: {
        title: 'Donna: Support Build 2',
        description: 'A volley build that randomly attacks nearby targets.',
        potentials: [
          'Wave-Chasing String',
          'Stray Arrow',
          'Coast Crusher',
          'Aquatic Assault',
          'Chilling Onslaught'
        ]
      }
    }
  },
  potentials: {
    mainCore: [
      {
        name: 'Condensation Orbs',
        icon: '13001_Potential_01',
        description: 'When the ##Advertising Doll#4017# disappears, extends the duration of ##Agile#2015# State by <color=#0abec5>&Param2&</color>s.\nWhile ##Agile#2015# State is active, every 10 Auto Attacks generate 1 water orb, accumulating up to <color=#0abec5>7</color> orbs. When ##Agile#2015# State ends, the next Auto Attack fires all water orbs to pierce through the target, with each orb dealing <color=#0abec5>&Param1&</color> of ATK as Aqua Skill DMG.',
        shortDescription: 'Extends the duration of Donna\'s ##Agile#2015# State.\nWhile ##Agile#2015# State is active, Auto Attacks accumulate water orbs which will all be fired to deal DMG after ##Agile#2015# State ends.',
        params: [
          '51%/59%/67%/90%/97%/104%/119%/125%/131%/143%/154%/164%/174%',
          '3'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          },
          2015: {
            id: 2015,
            name: 'Agile'
          }
        }
      },
      {
        name: 'Azure Night',
        icon: '13001_Potential_02',
        description: 'While Donna is in ##Agile#2015# State, she fires <color=#0abec5>4</color> additional ice spikes with each Auto Attack, each spike dealing <color=#0abec5>&Param1&</color> of ATK as Aqua Skill DMG.',
        shortDescription: 'While Donna is in ##Agile#2015# State, her Auto Attacks deal additional DMG.',
        params: [
          '4%/5%/6%/8%/8%/9%/10%/11%/11%/12%/13%/14%/15%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          2015: {
            id: 2015,
            name: 'Agile'
          }
        }
      },
      {
        name: 'Precision Marketing',
        icon: '13001_Potential_03',
        description: 'When Donna\'s Auto Attack hits a target near the ##Advertising Doll#4017#, the doll unleashes waves, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Aqua Minion DMG.',
        shortDescription: 'When Donna\'s Auto Attack hits a target near the ##Advertising Doll#4017#, deals AoE DMG.',
        params: [
          '115%/132%/150%/201%/218%/234%/266%/280%/294%/321%/344%/367%/390%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      },
      {
        name: 'Bubble Finale',
        icon: '13001_Potential_04',
        description: 'Increases the Max HP of the ##Advertising Doll#4017# by <color=#0abec5>&Param1&</color>.\nWhen the doll disappears, deals <color=#0abec5>&Param2&</color> of ATK as AoE Aqua Minion DMG and creates a Bubble Pool that deals <color=#0abec5>&Param5&</color> of ATK as AoE Aqua Minion DMG every 0.5s for 4s. When the ##Advertising Doll#4017# is present, each of its attacks increases own &Param6& by <color=#0abec5>&Param7&</color>, stacking up to &Param8& times.',
        shortDescription: 'Increases the Max HP of the ##Advertising Doll#4017#.\nWhen the ##Advertising Doll#4017# disappears, deals AoE DMG over time.',
        params: [
          '50%',
          '12%/14%/16%/22%/23%/25%/29%/30%/32%/35%/37%/40%/42%',
          '',
          '7',
          '14%/16%/18%/24%/26%/28%/32%/34%/36%/39%/42%/45%/47%',
          'Summondmg',
          '3.5%',
          ''
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      }
    ],
    mainNormal: [
      {
        name: 'Tidal Echo',
        icon: 'Common_Potential_10',
        description: 'When Donna\'s Auto Attacks deal DMG while she is in ##Agile#2015# State, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'When Donna\'s Auto Attacks deal DMG while she is in ##Agile#2015# State, increases the target\'s &Param1&.',
        params: [
          'Weercd',
          '0.4%/0.6%/0.8%/1%/1.2%/1.4%/1.6%/1.8%/2%',
          '4',
          '25'
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {
          2015: {
            id: 2015,
            name: 'Agile'
          }
        }
      },
      {
        name: 'Surging Tide',
        icon: 'Common_Potential_Water_1',
        description: 'Increases the ##Advertising Doll#4017#\'s Attack Range by 50% and its &Param2& by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the ##Advertising Doll#4017#\'s Attack Range and &Param2&.',
        params: [
          '19%/30%/41%/52%/63%/74%/85%/96%/107%',
          'Summondmg'
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      },
      {
        name: 'Lingering Noise',
        icon: 'Common_Potential_13',
        description: 'After casting &Param10& (Main Skill), increases own &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s.',
        shortDescription: 'After casting the Main Skill, increases own &Param4&.',
        params: [
          '12%/19%/26%/34%/41%/48%/55%/62%/70%',
          '15',
          '8',
          'Wee',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Piercing Arrow Rain',
        icon: 'Common_Potential_Water_1',
        description: 'When Donna\'s Auto Attacks deal DMG to targets inflicted with ##Aqua Mark: Torrent#2008#/##Chill#1027# while she is in ##Agile#2015# State, increases her &Param4& by <color=#ec6d21>&Param1&</color> for &Param2&s, stacking up to &Param3& times.',
        shortDescription: 'When Donna\'s Auto Attacks deal DMG to targets inflicted with ##Aqua Mark: Torrent#2008#/##Chill#1027# while she is in ##Agile#2015# State, increases her &Param4&.',
        params: [
          '0.3%/0.5%/0.7%/0.9%/1.1%/1.3%/1.5%/1.7%/1.9%',
          '2',
          '36',
          'ATK'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          2008: {
            id: 2008,
            name: 'Aqua Mark: Torrent',
            description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
          },
          1027: {
            id: 1027,
            name: 'Chill'
          },
          2015: {
            id: 2015,
            name: 'Agile'
          }
        }
      },
      {
        name: 'Cloud Piercer',
        icon: '13001_Potential_09',
        description: 'When Donna or the ##Advertising Doll#4017# hits a target, restores &Param1& HP of the doll and increases its &Param6& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.\nThis effect can only be triggered once every &Param5&s.',
        shortDescription: 'When Donna or the ##Advertising Doll#4017# hits a target, heals the Doll and increases its &Param6&.',
        params: [
          '15',
          '5.8%/9.3%/12.8%/16.3%/19.8%/23.3%/26.8%/30.3%/33.8%',
          '12',
          '4',
          '2',
          'Summondmg'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      },
      {
        name: 'Serene Sea Trance',
        icon: 'Common_Potential_13',
        description: 'After Donna remains stationary for 1s, increases her &Param2& by <color=#ec6d21>&Param1&</color>. Resets when she moves.',
        shortDescription: 'When Donna remains stationary, increases her &Param2&. Resets when she moves.',
        params: [
          '10%/16%/22%/28%/34%/40%/46%/52%/58%',
          'ATK'
        ],
        rarity: 1,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Rime Shatterer',
        icon: '13001_Potential_07',
        description: 'While Donna is in ##Agile#2015# State, her Auto Attacks immediately defeat normal targets with HP below &Param1&. She also deals <color=#ec6d21>&Param2&</color> more &Param3& to elite or higher-tier targets with HP below &Param1&.',
        shortDescription: 'While Donna is in ##Agile#2015# State, her Auto Attacks immediately defeat targets with low HP. She also deals increased DMG to elites and bosses with low HP.',
        params: [
          '350000',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          ''
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {
          2015: {
            id: 2015,
            name: 'Agile'
          }
        }
      },
      {
        name: 'Hazy Curtain',
        icon: '13001_Potential_10',
        description: 'The ##Advertising Doll#4017# gains a shield equal to <color=#ec6d21>&Param1&</color> of its base HP for &Param2&s.\nWhen the shield disappears, the doll deals <color=#ec6d21>&Param3&</color> of ATK as AoE Aqua Minion DMG.',
        shortDescription: 'The ##Advertising Doll#4017# gains a shield. When the shield disappears, deals AoE DMG.',
        params: [
          '20%/26%/33%/39%/46%/52%/59%/65%/72%',
          '8',
          '242%/387%/532%/677%/822%/967%/1112%/1257%/1402%'
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      },
      {
        name: 'Tidal Mark Resonance',
        icon: 'Common_Potential_Water_1',
        description: '&Param10& (Ultimate) can trigger ##Aqua Mark: Torrent#1018#. Triggering this Mark increases own and the ##Advertising Doll#4017#\'s &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s.',
        shortDescription: 'The Ultimate can trigger ##Aqua Mark#1018#. Triggering this Mark increases own and the ##Advertising Doll#4017#\'s &Param2&.',
        params: [
          '20%/33%/45%/57%/69%/81%/94%/106%/118%',
          'Wee',
          '30',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {
          1018: {
            id: 1018,
            name: 'Aqua Mark',
            description: 'The generic name for all Aqua Marks.\nWhen triggered by specific Aqua Trekkers\' attacks, the status is removed, and a special effect is activated.'
          },
          4017: {
            id: 4017,
            name: 'Advertising Doll',
            description: 'Advertising Doll inherits 100% of Donna\'s Base Max HP and 100% of her ATK for 12s.'
          }
        }
      }
    ],
    supportCore: [
      {
        name: 'Unleashed Arrow',
        icon: '13001_Potential_21',
        description: '&Param10& (Support Skill) fires <color=#0abec5>1</color> additional Snow-Piercing Arrow with each shot for each Aqua Trekkers in the squad other than Donna, dealing <color=#0abec5>&Param1&</color> of ATK as Aqua Skill DMG.',
        shortDescription: 'The Support Skill fires additional Snow-Piercing Arrows to deal DMG based on the number of Aqua Trekkers in the squad.',
        params: [
          '82%/95%/107%/144%/155%/167%/190%/200%/210%/230%/246%/262%/279%',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      },
      {
        name: 'Arrowfall Reckoning',
        icon: '13001_Potential_22',
        description: 'When a Snow-Piercing Arrow deals DMG to Donna\'s target, 1 arrow tail is left on the target, up to <color=#0abec5>&Param3&</color>.\nWhen Snow-Piercing Arrow deals DMG to a target with arrow tails, it deals <color=#0abec5>&Param4&</color> of ATK as Aqua Skill DMG.\nWhen &Param10& (Support Skill) ends, pulls out all arrow tails to deal <color=#0abec5>&Param1&</color> of ATK as Aqua Skill DMG. Each arrow tail on the target increases this DMG by <color=#0abec5>&Param2&</color>.',
        shortDescription: 'When Snow-Piercing Arrow deals DMG, the arrow tail is left on the target. When the skill ends, pulls out the arrow tail to deal DMG.',
        params: [
          '218%/251%/284%/382%/413%/443%/504%/530%/557%/609%/653%/696%/740%',
          '0.85%',
          '30',
          '31%/36%/40%/54%/59%/63%/72%/76%/79%/87%/93%/99%/105%',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      },
      {
        name: 'Wave-Chasing String',
        icon: '13001_Potential_23',
        description: 'Increases Frost Wave\'s Attack Range by <color=#0abec5>50%</color> and Skill DMG dealt by <color=#0abec5>&Param2&</color>.\nWhen the entire squad consists of Aqua Trekkers, &Param10& (Support Skill) generates 1 Frost Wave for every <color=#0abec5>3</color> shots fired.',
        shortDescription: 'Increases Frost Wave\'s DMG and Attack Range.\nWhen the entire squad consists of Aqua Trekkers, the Support Skill generates more Frost Waves.',
        params: [
          '437%/502%/567%/764%/825%/886%/1008%/1061%/1113%/1218%/1305%/1393%/1480%',
          '0.57%',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      },
      {
        name: 'Stray Arrow',
        icon: '13001_Potential_24',
        description: 'Each time &Param10& (Support Skill) generates a Frost Wave, creates <color=#0abec5>3</color> Frost Wave Orbs that track the target. Upon hit, they deal <color=#0abec5>&Param1&</color> of ATK as AoE Aqua Skill DMG.\nFrost Wave Orbs prioritize attacking different targets, with each distinct target increasing their Skill DMG dealt by <color=#0abec5>&Param2&</color>.',
        shortDescription: 'Each time the Support Skill generates a Frost Wave, additionally creates Frost Wave Orbs that track the target and deal AoE DMG.',
        params: [
          '84%/97%/109%/147%/159%/171%/195%/205%/215%/235%/252%/269%/285%',
          '0.57%',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      }
    ],
    supportNormal: [
      {
        name: 'Arrow Pursuit',
        icon: '13001_Potential_25',
        description: 'Increases Snow-Piercing Arrow\'s &Param2& by <color=#ec6d21>&Param3&</color>. Upon dealing 3 instances of DMG to Donna\'s target, deals an additional <color=#ec6d21>&Param1&</color> of ATK as Aqua Skill DMG.\nThis DMG can only be triggered once every 0.2s.',
        shortDescription: 'When Snow-Piercing Arrow deals multiple instances of DMG to Donna\'s target, deals additional DMG.',
        params: [
          '83%/133%/183%/233%/283%/333%/382%/432%/482%',
          '',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%'
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Coast Crusher',
        icon: 'Common_Potential_Water_1',
        description: 'Increases Frost Wave\'s Crit Rate by &Param1& and &Param9& by <color=#ec6d21>&Param8&</color>.\nWhen Frost Wave lands a Crit Hit, increases the &Param2& of Aqua Trekkers in the squad by <color=#ec6d21>&Param3&</color> for &Param6&s, stacking up to &Param7& times.',
        shortDescription: 'Increases Frost Wave\'s Crit Rate and DMG.\nWhen Frost Wave lands a Crit Hit, increases the &Param2& of Aqua Trekkers in the squad.',
        params: [
          '0.06%',
          'ATK',
          '4%/6%/8%/10%/12%/14%/16%/18%/20%',
          '',
          '',
          '7',
          '4',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Messenger Arrow',
        icon: 'Common_Potential_Water_1',
        description: 'When casting &Param10& (Support Skill), delivers a letter near the main Aqua Trekker.\nWhen the main Trekker picks up the letter, increases their &Param4& by <color=#ec6d21>&Param2&</color> for &Param1&s.',
        shortDescription: 'When casting &Param10& (Support Skill), delivers a letter near the main Aqua Trekker.\nWhen the main Trekker picks up the letter, increases their &Param4&.',
        params: [
          '12',
          '12%/18%/25%/32%/39%/46%/53%/60%/67%',
          '1',
          'Wee',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Frostbitten Arrow',
        icon: 'Common_Potential_Water_1',
        description: 'When Snow-Piercing Arrow deals 3 instances of DMG to Donna\'s target, increases the target\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'When Snow-Piercing Arrow deals multiple instances of DMG to Donna\'s target, increases the target\'s &Param1&.',
        params: [
          'Weercd',
          '1.8%/2.9%/4%/5.1%/6.2%/7.3%/8.4%/9.5%/10.6%',
          '6',
          '9'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Aquatic Assault',
        icon: '13001_Potential_29',
        description: 'When Frost Wave deals DMG to different targets, increases own &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'When Frost Wave deals DMG to different targets, increases own &Param1&.',
        params: [
          'Wee',
          '20%/32%/44%/56%/68%/80%/92%/104%/116%',
          '10',
          '3'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Wave Resonance',
        icon: 'Common_Potential_Water_1',
        description: 'When &Param10& (Ultimate) deals DMG, inflicts ##Aqua Mark: Torrent#2008#.\nDuring the rain of arrows, when any Trekker triggers an ##Aqua Mark: Torrent#2008#, increases Donna\'s &Param2& by <color=#ec6d21>&Param1&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'The Ultimate can inflict ##Aqua Mark: Torrent#2008#.\nWhile casting the Ultimate, when a Trekker triggers ##Aqua Mark: Torrent#2008#, increases Donna\'s &Param2&.',
        params: [
          '9%/15%/20%/26%/31%/37%/42%/48%/53%',
          'Wee',
          '40',
          '3',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          2008: {
            id: 2008,
            name: 'Aqua Mark: Torrent',
            description: 'A special status applied by some Aqua characters to the target for 10 sec.\nWhen triggered by specific Aqua characters\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Dead Shot',
        icon: 'Common_Potential_10',
        description: 'Snow-Piercing Arrow immediately defeats normal targets with HP below &Param1&.\nAlso, deals <color=#ec6d21>&Param2&</color> more &Param3& to elite or higher-tier targets with HP below &Param1&.',
        shortDescription: 'Snow-Piercing Arrow immediately defeats targets with low HP and deals increased DMG to elites and bosses with low HP.',
        params: [
          '300000',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Chilling Onslaught',
        icon: 'Common_Potential_Water_1',
        description: 'Upon its first shot, &Param10& (Support Skill) creates a Frost Wave.\nIncreases the &Param1& dealt by Frost Wave by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'Upon its first shot, the Support Skill creates a Frost Wave.\nIncreases the &Param1& dealt by Frost Wave.',
        params: [
          '',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Water Ripple',
        icon: 'Common_Potential_Water_1',
        description: 'Increases the &Param3& of Aqua Trekkers in the squad by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the &Param3& of Aqua Trekkers in the squad.',
        params: [
          '15%/24%/33%/42%/51%/60%/69%/78%/87%',
          '',
          'ATK'
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {}
      }
    ],
    common: [
      {
        name: 'Rushing Tide',
        icon: '13001_Potential_41',
        description: 'Increases &Param10& (Ultimate)\'s Attack Range by 50%.\nIncreases Donna\'s &Param2& by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the Ultimate\'s Attack Range and DMG.',
        params: [
          '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {}
      },
      {
        name: 'Corrosive Torrent',
        icon: 'Common_Potential_Water_1',
        description: 'Increases the &Param2& of Aqua Trekkers within the Attack Range of &Param10& (Ultimate) by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the &Param2& of Aqua Trekkers within the Attack Range of &Param10& (Ultimate).',
        params: [
          '20%/32%/44%/56%/68%/80%/92%/104%/116%',
          'ATK',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {}
      },
      {
        name: 'Freezing Stasis',
        icon: 'Common_Potential_Water_1',
        description: 'Each time &Param10& (Ultimate) hits a target inflicted with ##Frozen#1002#/##Chill#1027#, increases rain of arrows\' duration by &Param1&s and its &Param3& dealt by <color=#ec6d21>&Param2&</color>. This effect can only be triggered &Param4& times.',
        shortDescription: 'Each time the Ultimate hits a target inflicted with ##Frozen#1002#/##Chill#1027#, increases its duration and &Param3&.',
        params: [
          '1',
          '0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%/0.58%',
          '',
          '5',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {
          1002: {
            id: 1002,
            name: 'Freeze',
            description: 'Frozen and incapacitated. Unable to take action.'
          },
          1027: {
            id: 1027,
            name: 'Chill'
          }
        }
      }
    ]
  }
};

allPotentials['wraith'] = {
  id: 143,
  name: 'Wraith',
  element: 'Ventus',
  buildOrder: {
    main: {
      build1: {
        title: 'Wraith: Main Build 1',
        description: 'A melee build that generates Whirlwinds to destroy projectiles when activating a skill or Auto Attack.',
        potentials: [
          'Last Gasp of Gale',
          'Twin Shadows',
          'Zero Hour',
          'Blade\'s Waltz',
          'Rapid Draw'
        ]
      },
      build2: {
        title: 'Wraith: Main Build 2',
        description: 'A build that enhances the ranged DMG of skills and Auto Attacks, significantly boosting ranged DPS.',
        potentials: [
          'Storm-Piercing Surge',
          'Wind-Splitting Bullet',
          'Overheat Shot',
          'Scorching Gale',
          'Tracewind Blink'
        ]
      }
    },
    support: {
      build1: {
        title: 'Wraith: Support Build 1',
        description: 'A build that allows skills to generate ground fissures and Whirlwinds, boosting sustained DPS.',
        potentials: [
          'Underbarrel Launcher',
          'Suppressive Wind-Splitting Round',
          'Ominous Vibe',
          'Hunter\'s Instinct',
          'Frost-Proof Constitution'
        ]
      },
      build2: {
        title: 'Wraith: Support Build 2',
        description: 'A build that enhances skill range and DMG, boosting burst DMG potential.',
        potentials: [
          'Rotary Saw',
          'Enhanced Rapid-Fire Round',
          'Warrior\'s Quality',
          'Will of Vengeance',
          'Dawn\'s Embrace'
        ]
      }
    }
  },
  potentials: {
    mainCore: [
      {
        name: 'Last Gasp of Gale',
        icon: '14301_Potential_01',
        description: 'Within &Param1&s after casting Whirling Onslaught (Main Skill), when the next Auto Attack slash deals DMG, it generates a Whirlwind that deal <color=#0abec5>&Param2&</color> of ATK as AoE Auto Attack DMG every 0.5s for 4s.\nThe Whirlwind can track and attack enemies, triggering ##Ventus Mark#1017#.',
        shortDescription: 'For a short duration after the Main Skill is cast, combo slashes of Auto Attacks can generate a Whirlwind to deal DMG. The Whirlwind can track and attack enemies.',
        params: [
          '4',
          '27%/31%/35%/47%/51%/54%/62%/65%/68%/75%/80%/86%/91%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Twin Shadows',
        icon: '14301_Potential_02',
        description: 'When casting Whirling Onslaught (Main Skill), generates 2 Whirlwinds that deal <color=#0abec5>&Param1&</color> of ATK as AoE Auto Attack DMG every 0.5s for 4s. \nThe Whirlwind can increase its Attack Range over time and trigger ##Ventus Mark#1017#.',
        shortDescription: 'When casting the Main Skill, generates multiple Whirlwinds to deal DMG. The Whirlwind can increase its Attack Range over time.',
        params: [
          '27%/31%/35%/47%/51%/54%/62%/65%/68%/75%/80%/86%/91%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Storm-Piercing Surge',
        icon: '14301_Potential_03',
        description: 'The bullets of Whirling Onslaught (Main Skill) become lasers that track distant targets. Increases the &Param1& dealt by Wraith\'s shots to distant targets by <color=#0abec5>&Param2&</color>.',
        shortDescription: 'The Main Skill\'s bullets become lasers that track distant targets. Increases the &Param1& dealt by Wraith\'s shots to distant targets.',
        params: [
          '',
          '0.2%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      },
      {
        name: 'Wind-Splitting Bullet',
        icon: '14301_Potential_04',
        description: 'When holding to cast Whirling Onslaught (Main Skill), each round fires <color=#0abec5>4</color> more bullets than the previous one.\nIncreases the &Param1& dealt by Wraith\'s bullets by <color=#0abec5>&Param2&</color>. Can trigger ##Ventus Mark#1017#.',
        shortDescription: 'Increases the number of bullets fired when holding to cast the Main Skill continuously. Increases the &Param1& dealt by all Wraith\'s shots.',
        params: [
          '',
          '0.2%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      }
    ],
    mainNormal: [
      {
        name: 'Zero Hour',
        icon: 'Common_Potential_Wind_1',
        description: 'Whirling Onslaught (Main Skill)\'s slashes will stir up a storm, blocking hostile projectiles.\nAlso increases Wraith\'s &Param1& to nearby targets by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'The Main Skill\'s slashes can block enemy projectile attacks. Increases Wraith\'s DMG dealt to nearby targets.',
        params: [
          '',
          '0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%/0.56%'
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Overheat Shot',
        icon: 'Common_Potential_13',
        description: 'When casting Whirling Onslaught (Main Skill), increases the Main Skill\'s shot &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks.',
        shortDescription: 'When casting Whirling Onslaught (Main Skill), increases the &Param1& of Main Skill\'s shots.',
        params: [
          '',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          '1',
          '3'
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Unseen Predator',
        icon: 'Common_Potential_13',
        description: 'Wraith can dodge one more time.\nWhen dodging, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
        shortDescription: 'Increases the number of Wraith\'s dodges. Increases &Param1& when dodging.',
        params: [
          'ATK',
          '14%/23%/32%/40%/49%/57%/66%/75%/83%',
          '4'
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Blade\'s Waltz',
        icon: 'Common_Potential_13',
        description: 'Increases the slash &Param1& of Whirling Onslaught (Main Skill) by <color=#ec6d21>&Param2&</color>.\nIncreases Wraith\'s &Param3& by <color=#ec6d21>&Param4&</color>.',
        shortDescription: 'Increases the &Param1& dealt by the Main Skill\'s slashes. Increases Wraith\'s &Param3&.',
        params: [
          '',
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          'Normal DMG',
          '13%/21%/28%/36%/44%/51%/59%/67%/74%'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Scorching Gale',
        icon: 'Common_Potential_Wind_1',
        description: 'When Wraith\'s shots deal DMG, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, up to &Param4& stacks. This effect can only be triggered &Param5& times per second.\nThe effect ends if the Main Skill is cast.',
        shortDescription: 'When Wraith\'s shots deal DMG, increases &Param1&.',
        params: [
          'Skill DMG',
          '2.3%/3.7%/5.1%/6.5%/7.9%/9.3%/10.7%/12.1%/13.5%',
          '5',
          '8',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Dauntless Poise',
        icon: 'Common_Potential_Wind_1',
        description: 'Each Ventus Trekker in the squad increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'Each Ventus Trekker in the squad increase Wraith\'s &Param1&.',
        params: [
          'ATK',
          '9%/14%/19%/24%/29%/35%/40%/45%/50%'
        ],
        rarity: 1,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Rapid Draw',
        icon: 'Common_Potential_8',
        description: 'When Whirling Onslaught (Main Skill)\'s slashes deal DMG, increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
        shortDescription: 'When the Main Skill\'s slashes deal DMG, increases &Param1&.',
        params: [
          'Normal DMG',
          '14%/22%/31%/39%/47%/55%/64%/72%/80%',
          '5',
          '1'
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Tracewind Blink',
        icon: 'Common_Potential_Wind_1',
        description: 'Within &Param1&s after casting Whirling Onslaught (Main Skill), enhances Wraith\'s weapon. Each additional Main Skill stack consumed extends the duration by 3s.\nWhile Wraith\'s weapon is enhanced, her Auto Attack shots fire lasers, dealing <color=#ec6d21>&Param2&</color> of ATK as Ventus Skill DMG. This effect can only be triggered once per second.',
        shortDescription: 'For a short duration after Whirling Onslaught (Main Skill) is cast, enhances Wraith\'s weapon, during which her Auto Attack shots fire lasers to deal DMG.',
        params: [
          '3',
          '77%/123%/169%/216%/262%/308%/354%/400%/446%'
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Tempest Stance',
        icon: 'Common_Potential_Wind_1',
        description: 'When Wraith triggers ##Ventus Mark#1017#, increases &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'When Wraith triggers ##Ventus Mark#1017#, increases &Param1&.',
        params: [
          'Aee',
          '6%/10%/13%/17%/20%/24%/28%/31%/35%',
          '3',
          '3'
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      }
    ],
    supportCore: [
      {
        name: 'Underbarrel Launcher',
        icon: '14301_Potential_21',
        description: 'Rolling Bungee (Support Skill)\'s shot creates a tornado that tracks the target, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Ventus Skill DMG every 0.5s for 8s. Can trigger ##Ventus Mark#1017#.',
        shortDescription: 'The Support Skill shoots and generates a Tornado that tracks the target, dealing multiple instances of DMG.',
        params: [
          '18%/21%/24%/32%/35%/38%/43%/45%/47%/52%/56%/59%/63%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Suppressive Wind-Splitting Round',
        icon: '14301_Potential_22',
        description: 'Rolling Bungee (Support Skill)\'s slashes create a rift in the ground, dealing <color=#0abec5>&Param1&</color> of ATK as AoE Ventus Skill DMG every 0.5s for a total of 8s. Can trigger ##Ventus Mark#1017#.',
        shortDescription: 'The Support Skill slashes and cracks the ground, dealing multiple instances of DMG.',
        params: [
          '18%/21%/24%/32%/35%/38%/43%/45%/47%/52%/56%/59%/63%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Rotary Saw',
        icon: '14301_Potential_23',
        description: 'Rolling Bungee (Support Skill) triggers an additional slash, dealing <color=#0abec5>&Param1&</color> of ATK as Ventus Skill DMG in a large area.',
        shortDescription: 'The Support Skill slashes and then performs a horizontal sweep, dealing DMG in a large area.',
        params: [
          '300%/345%/390%/525%/567%/609%/692%/728%/764%/836%/896%/956%/1016%'
        ],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      },
      {
        name: 'Enhanced Rapid-Fire Round',
        icon: '14301_Potential_24',
        description: 'Rolling Bungee (Support Skill) fires <color=#0abec5>2</color> additional lasers.',
        shortDescription: 'The Support Skill fires additional lasers.',
        params: [],
        rarity: 1,
        stype: 42,
        corner: null,
        hints: {}
      }
    ],
    supportNormal: [
      {
        name: 'Ominous Vibe',
        icon: 'Common_Potential_Wind_1',
        description: 'When Rolling Bungee (Support Skill) deals DMG, there is a 50% chance to fire lasers, dealing <color=#ec6d21>&Param1&</color> of Wraith\'s ATK as Ventus Skill DMG. Can trigger ##Ventus Mark#1017#.',
        shortDescription: 'When the Support Skill deals DMG, there is a chance to fire lasers to deal DMG.',
        params: [
          '24%/38%/53%/67%/82%/97%/111%/126%/140%'
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Warrior\'s Quality',
        icon: 'Common_Potential_8',
        description: 'When the slashes of Rolling Bungee (Support Skill) deal DMG, increases the &Param3& of this Support Skill\'s shots by <color=#ec6d21>&Param1&</color>, stacking up to &Param2& times.',
        shortDescription: 'When the Support Skill\'s slashes deal DMG, increases the &Param3& of this Support Skill\'s shots.',
        params: [
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          '9',
          ''
        ],
        rarity: 1,
        stype: 41,
        corner: 1,
        hints: {}
      },
      {
        name: 'Expatriate',
        icon: 'Common_Potential_Wind_1',
        description: 'Increases Rolling Bungee (Support Skill)\'s &Param2& dealt to targets inflicted with ##Ventus Mark#1017# by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the Support Skill\'s DMG dealt to targets inflicted with ##Ventus Mark#1017#.',
        params: [
          '0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 1,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Hunter\'s Instinct',
        icon: 'Common_Potential_8',
        description: 'When Rolling Bungee (Support Skill) deals DMG, increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s, stacking up to &Param4& times.',
        shortDescription: 'When the Support Skill deals DMG, increases Wraith\'s &Param1&.',
        params: [
          'ATK',
          '1.2%/1.9%/2.6%/3.3%/4%/4.7%/5.4%/6.1%/6.8%',
          '4',
          '10'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Will of Vengeance',
        icon: 'Common_Potential_13',
        description: 'Increases the &Param2& of the slashes and shots of Rolling Bungee (Support Skill) by <color=#ec6d21>&Param1&</color>.',
        shortDescription: 'Increases the Support Skill\'s DMG.',
        params: [
          '0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%/0.57%',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {}
      },
      {
        name: 'Avenger',
        icon: 'Common_Potential_Wind_1',
        description: 'When a Ventus Trekker other than Wraith triggers ##Ventus Mark#1017#, there is a 50% chance to create a Whirlwind, dealing <color=#ec6d21>&Param1&</color> of Wraith\'s ATK as AoE Skill DMG every 0.5s for a total of 8s. The Whirlwind can track and attack enemies. This effect can only be triggered once every 3s.',
        shortDescription: 'When a Ventus squadmate triggers ##Ventus Mark#1017#, there is a chance to create a Whirlwind, dealing multiple instances of DMG.',
        params: [
          '2%/4%/6%/7%/9%/10%/12%/14%/15%'
        ],
        rarity: 2,
        stype: 41,
        corner: 2,
        hints: {
          1017: {
            id: 1017,
            name: 'Ventus Mark',
            description: 'The generic name for all Ventus Marks.\nWhen triggered by specific Ventus Trekkers\' attacks, the status is removed, and a special effect is activated.'
          }
        }
      },
      {
        name: 'Frost-Proof Constitution',
        icon: 'Common_Potential_Water_1',
        description: 'Casting Rolling Bungee (Support Skill) increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
        shortDescription: 'When casting the Support Skill, increases Wraith\'s &Param1&.',
        params: [
          'Skill DMG',
          '9%/15%/21%/26%/32%/37%/43%/49%/54%',
          '10'
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Dawn\'s Embrace',
        icon: 'Common_Potential_Light_1',
        description: 'Increases the &Param3& of Rolling Bungee (Support Skill)\'s slashes by <color=#ec6d21>&Param1&</color>. If only one target is hit, increases this bonus to <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'The fewer targets the Support Skill\'s slashes hit, the higher the DMG dealt.',
        params: [
          '0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%',
          '0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%/0.2%',
          ''
        ],
        rarity: 2,
        stype: 41,
        corner: 3,
        hints: {}
      },
      {
        name: 'Flame Hunter',
        icon: 'Common_Potential_Wind_1',
        description: 'Each Ventus Trekker in the squad increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'Each Ventus Trekker in the squad increase Wraith\'s &Param1&.',
        params: [
          'ATK',
          '5%/8%/11%/14%/17%/20%/23%/26%/29%',
          '3'
        ],
        rarity: 1,
        stype: 41,
        corner: 3,
        hints: {}
      }
    ],
    common: [
      {
        name: 'Daybreaker',
        icon: '14301_Potential_41',
        description: 'Increases Thousand Shade Dance (Ultimate)\'s shuttling speed. Also increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'Increases the Ultimate\'s shuttling speed. Also increases Wraith\'s &Param1&.',
        params: [
          'Ultimate DMG',
          '144%/230%/316%/402%/488%/574%/660%/746%/832%'
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {}
      },
      {
        name: 'Raging Battle Will',
        icon: 'Common_Potential_Earth_1',
        description: 'After casting Thousand Shade Dance (Ultimate), increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color> for &Param3&s.',
        shortDescription: 'After casting the Ultimate, increases Wraith\'s &Param1&.',
        params: [
          'ATK',
          '28%/44%/61%/77%/94%/111%/127%/144%/160%',
          '20'
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {}
      },
      {
        name: 'Tempest Siphon',
        icon: 'Common_Potential_Earth_1',
        description: 'When Thousand Shade Dance (Ultimate) unfolds its domain, pulls in targets. Also increases Wraith\'s &Param1& by <color=#ec6d21>&Param2&</color>.',
        shortDescription: 'When the Ultimate unfolds its domain, pulls in targets. Also increases Wraith\'s &Param1&.',
        params: [
          'Ultimate DMG',
          '115%/185%/254%/323%/392%/461%/531%/600%/669%'
        ],
        rarity: 2,
        stype: 41,
        corner: null,
        hints: {}
      }
    ]
  }
};

export default allPotentials;
