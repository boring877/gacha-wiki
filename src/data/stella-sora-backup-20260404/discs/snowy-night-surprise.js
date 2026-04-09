export const disc = {
  id: 214048,
  name: 'Snowy Night Surprise',
  icon: '/stella/assets/outfit_4048_b.png',
  background: '/stella/assets/4048.png',
  variants: {
    base: '/stella/assets/outfit_4048.png',
    a: '/stella/assets/outfit_4048_a.png',
    b: '/stella/assets/outfit_4048_b.png',
    c: '/stella/assets/outfit_4048_c.png',
    d: '/stella/assets/outfit_4048_d.png',
    gacha: '/stella/assets/outfit_4048_gacha.png',
    default: '/stella/assets/outfit_4048_b.png',
  },
  star: 5,
  element: 'Ignis',
  tag: ['Element', 'VUL', 'Skills'],
  mainSkill: {
    name: 'Snowy Night Surprise',
    icon: 'DiscSkill_214048',
    description:
      'Increases Ignis DMG of the squad by <color=#ec6d21>{1}</color>.\u000bWhen any Ignis Trekker deals Skill DMG, inflicts ##Ode#6002#, lasting {2}s.\u000bOde can be converted into Hymn.\u000bHymn: Increase Ignis DMG taken by <color=#ec6d21>{3}</color> for {4}s, up to {5} stacks.',
    params: [
      ['20%', '12.25', '1%', '18', '15'],
      ['24%', '12.25', '1.2%', '18', '15'],
      ['28%', '12.25', '1.4%', '18', '15'],
      ['32%', '12.25', '1.6%', '18', '15'],
      ['36%', '12.25', '1.8%', '18', '15'],
      ['40%', '12.25', '2%', '18', '15'],
    ],
    iconBackground: 'db_DiscSkill_1',
  },
  secondarySkills: [
    {
      name: 'Kingdom of Fires',
      icon: 'DiscSkill_8',
      description:
        'Hymn grants extra effects: Increases the Ignis Skill DMG Taken by <color=#ec6d21>{1}</color>.\u000bWhen ##Ode#6002# is converted in to Hymn, increases the Skill DMG of Ignis Trekkers in the squad by <color=#ec6d21>{2}</color> for {3}s, up to {4} stacks.',
      params: [
        ['0.5%', '1%', '15', '4'],
        ['0.6%', '2%', '15', '4'],
        ['0.7%', '3%', '15', '4'],
        ['0.8%', '4%', '15', '4'],
        ['0.9%', '5%', '15', '4'],
      ],
      requirements: [
        [
          { name: 'Melody of Pummel', quantity: 10 },
          { name: 'Melody of Ignis', quantity: 10 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 25 },
          { name: 'Melody of Ignis', quantity: 25 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 40 },
          { name: 'Melody of Ignis', quantity: 40 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 55 },
          { name: 'Melody of Ignis', quantity: 55 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 70 },
          { name: 'Melody of Ignis', quantity: 70 },
        ],
      ],
      iconBackground: 'db_DiscSkill_1',
    },
    {
      name: 'Crispy Crunch',
      icon: 'DiscSkill_4',
      description:
        '##Ode#6002# grants extra effects: Reduces enemy ATK by <color=#ec6d21>{1}</color>.\u000bIgnis Trekkers in the squad deal increased Ultimate DMG to targets inflicted with Ode by <color=#ec6d21>{2}</color>.',
      params: [
        ['1%', '20%'],
        ['2%', '40%'],
        ['3%', '60%'],
        ['4%', '80%'],
        ['5%', '100%'],
      ],
      requirements: [
        [
          { name: 'Melody of Pummel', quantity: 15 },
          { name: 'Melody of Luck', quantity: 15 },
          { name: 'Melody of Ignis', quantity: 15 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 30 },
          { name: 'Melody of Luck', quantity: 30 },
          { name: 'Melody of Ignis', quantity: 30 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 45 },
          { name: 'Melody of Luck', quantity: 45 },
          { name: 'Melody of Ignis', quantity: 45 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 60 },
          { name: 'Melody of Luck', quantity: 60 },
          { name: 'Melody of Ignis', quantity: 60 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 75 },
          { name: 'Melody of Luck', quantity: 75 },
          { name: 'Melody of Ignis', quantity: 75 },
        ],
      ],
      iconBackground: 'db_DiscSkill_1',
    },
  ],
  supportNote: [
    [
      { name: 'Melody of Luck', quantity: 2 },
      { name: 'Melody of Ignis', quantity: 4 },
    ],
    [
      { name: 'Melody of Luck', quantity: 2 },
      { name: 'Melody of Ignis', quantity: 5 },
    ],
    [
      { name: 'Melody of Luck', quantity: 2 },
      { name: 'Melody of Ignis', quantity: 6 },
    ],
    [
      { name: 'Melody of Luck', quantity: 3 },
      { name: 'Melody of Ignis', quantity: 6 },
    ],
    [
      { name: 'Melody of Luck', quantity: 3 },
      { name: 'Melody of Ignis', quantity: 7 },
    ],
    [
      { name: 'Melody of Luck', quantity: 3 },
      { name: 'Melody of Ignis', quantity: 8 },
    ],
    [
      { name: 'Melody of Luck', quantity: 4 },
      { name: 'Melody of Ignis', quantity: 8 },
    ],
    [
      { name: 'Melody of Luck', quantity: 4 },
      { name: 'Melody of Ignis', quantity: 9 },
    ],
    [
      { name: 'Melody of Luck', quantity: 4 },
      { name: 'Melody of Ignis', quantity: 10 },
    ],
  ],
  stats: [
    [
      { id: 'atk', label: 'ATK', value: 15 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 20 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 24 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 29 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 33 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 38 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 42 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 47 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 51 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 56 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 67 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 71 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 76 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 80 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 85 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 89 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 94 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 98 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 103 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 107 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 112 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 134 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 138 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 143 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 147 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 152 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 156 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 161 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 165 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 170 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 174 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 179 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 3, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 215 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 219 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 224 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 228 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 233 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 237 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 242 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 246 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 251 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 255 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 260 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 5, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 312 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 316 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 321 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 325 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 330 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 334 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 339 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 343 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 348 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 352 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 357 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 7, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 428 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 433 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 437 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 442 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 446 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 451 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 455 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 460 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 464 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 469 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 473 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 568 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 572 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 577 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 581 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 586 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 590 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 595 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 599 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 604 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 608 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 613 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 735 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 740 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 744 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 749 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 753 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 758 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 762 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 767 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 771 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 776 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 780 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 13, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 936 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 941 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 945 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 950 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 954 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 959 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 963 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 968 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 972 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 977 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 981 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 15, unit: '%' },
    ],
  ],
  dupe: [
    [{ id: 'atk', label: 'ATK', value: 130 }],
    [{ id: 'atk', label: 'ATK', value: 260 }],
    [{ id: 'atk', label: 'ATK', value: 390 }],
    [{ id: 'atk', label: 'ATK', value: 520 }],
    [{ id: 'atk', label: 'ATK', value: 650 }],
  ],
  upgrades: [
    { items: [{ id: 21071, name: 'Eerie Breath', quantity: 6 }], currency: { dorra: 10700 } },
    {
      items: [
        { id: 21071, name: 'Eerie Breath', quantity: 6 },
        { id: 21072, name: 'Phantom Step Remnant', quantity: 13 },
      ],
      currency: { dorra: 26700 },
    },
    {
      items: [
        { id: 21071, name: 'Eerie Breath', quantity: 13 },
        { id: 21072, name: 'Phantom Step Remnant', quantity: 20 },
      ],
      currency: { dorra: 59900 },
    },
    {
      items: [
        { id: 21071, name: 'Eerie Breath', quantity: 20 },
        { id: 21072, name: 'Phantom Step Remnant', quantity: 33 },
      ],
      currency: { dorra: 89900 },
    },
    {
      items: [
        { id: 21071, name: 'Eerie Breath', quantity: 26 },
        { id: 21072, name: 'Phantom Step Remnant', quantity: 53 },
      ],
      currency: { dorra: 197200 },
    },
    {
      items: [
        { id: 21071, name: 'Eerie Breath', quantity: 40 },
        { id: 21072, name: 'Phantom Step Remnant', quantity: 73 },
        { id: 21073, name: 'Frenzied Waltz Essence', quantity: 26 },
      ],
      currency: { dorra: 393700 },
    },
    {
      items: [
        { id: 21072, name: 'Phantom Step Remnant', quantity: 100 },
        { id: 21073, name: 'Frenzied Waltz Essence', quantity: 40 },
      ],
      currency: { dorra: 756300 },
    },
    {
      items: [
        { id: 21072, name: 'Phantom Step Remnant', quantity: 126 },
        { id: 21073, name: 'Frenzied Waltz Essence', quantity: 66 },
      ],
      currency: { dorra: 1513800 },
    },
  ],
};
