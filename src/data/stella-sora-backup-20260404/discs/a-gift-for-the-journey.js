export const disc = {
  id: 214041,
  name: 'A Gift for the Journey',
  icon: '/stella/assets/outfit_4041_b.png',
  background: '/stella/assets/4041.png',
  variants: {
    base: '/stella/assets/outfit_4041.png',
    a: '/stella/assets/outfit_4041_a.png',
    b: '/stella/assets/outfit_4041_b.png',
    c: '/stella/assets/outfit_4041_c.png',
    d: '/stella/assets/outfit_4041_d.png',
    gacha: '/stella/assets/outfit_4041_gacha.png',
    default: '/stella/assets/outfit_4041_b.png',
  },
  star: 5,
  element: 'Ignis',
  tag: ['ATK', 'Minion', 'Ultimate'],
  mainSkill: {
    name: 'A Gift for the Journey',
    icon: 'DiscSkill_214041',
    description:
      "Increases the ATK of Ignis Trekkers in the squad by <color=#ec6d21>{1}</color>.\u000bWhen an Ignis Support Trekker's minion is present, increases Minion DMG dealt by Ignis Trekkers' minions in the squad by <color=#ec6d21>{2}</color>.",
    params: [
      ['5%', '8%'],
      ['6%', '9.6%'],
      ['7%', '11.2%'],
      ['8%', '12.8%'],
      ['9%', '14.4%'],
      ['10%', '16%'],
    ],
    iconBackground: 'db_DiscSkill_1',
  },
  secondarySkills: [
    {
      name: 'Salutes Boomed',
      icon: 'DiscSkill_4',
      description:
        "Increases the Main Ignis Trekker's Skill DMG by <color=#ec6d21>{1}</color>.\u000bIncreases Support Ignis Trekkers' Minion DMG by <color=#ec6d21>{2}</color>.",
      params: [
        ['2.4%', '5%'],
        ['4.8%', '10%'],
        ['7.2%', '15%'],
        ['9.6%', '20%'],
        ['12%', '25%'],
      ],
      requirements: [
        [
          { name: 'Melody of Pummel', quantity: 10 },
          { name: 'Melody of Skill', quantity: 10 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 25 },
          { name: 'Melody of Skill', quantity: 25 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 40 },
          { name: 'Melody of Skill', quantity: 40 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 55 },
          { name: 'Melody of Skill', quantity: 55 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 70 },
          { name: 'Melody of Skill', quantity: 70 },
        ],
      ],
      iconBackground: 'db_DiscSkill_1',
    },
    {
      name: 'Holy Night Revelry',
      icon: 'DiscSkill_4',
      description:
        "When at least two Ignis Trekker's minions are present, increases the Ultimate DMG of Ignis Trekkers in the squad by <color=#ec6d21>{1}</color>.",
      params: [['12%'], ['24%'], ['36%'], ['48%'], ['60%']],
      requirements: [
        [
          { name: 'Melody of Pummel', quantity: 15 },
          { name: 'Melody of Burst', quantity: 15 },
          { name: 'Melody of Ignis', quantity: 15 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 30 },
          { name: 'Melody of Burst', quantity: 30 },
          { name: 'Melody of Ignis', quantity: 30 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 45 },
          { name: 'Melody of Burst', quantity: 45 },
          { name: 'Melody of Ignis', quantity: 45 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 60 },
          { name: 'Melody of Burst', quantity: 60 },
          { name: 'Melody of Ignis', quantity: 60 },
        ],
        [
          { name: 'Melody of Pummel', quantity: 75 },
          { name: 'Melody of Burst', quantity: 75 },
          { name: 'Melody of Ignis', quantity: 75 },
        ],
      ],
      iconBackground: 'db_DiscSkill_1',
    },
  ],
  supportNote: [
    [
      { name: 'Melody of Burst', quantity: 3 },
      { name: 'Melody of Skill', quantity: 3 },
    ],
    [
      { name: 'Melody of Burst', quantity: 3 },
      { name: 'Melody of Skill', quantity: 4 },
    ],
    [
      { name: 'Melody of Burst', quantity: 4 },
      { name: 'Melody of Skill', quantity: 4 },
    ],
    [
      { name: 'Melody of Burst', quantity: 4 },
      { name: 'Melody of Skill', quantity: 5 },
    ],
    [
      { name: 'Melody of Burst', quantity: 5 },
      { name: 'Melody of Skill', quantity: 5 },
    ],
    [
      { name: 'Melody of Burst', quantity: 5 },
      { name: 'Melody of Skill', quantity: 6 },
    ],
    [
      { name: 'Melody of Burst', quantity: 6 },
      { name: 'Melody of Skill', quantity: 6 },
    ],
    [
      { name: 'Melody of Burst', quantity: 6 },
      { name: 'Melody of Skill', quantity: 7 },
    ],
    [
      { name: 'Melody of Burst', quantity: 7 },
      { name: 'Melody of Skill', quantity: 7 },
    ],
  ],
  stats: [
    [
      { id: 'atk', label: 'ATK', value: 14 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 18 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 22 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 26 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 30 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 34 },
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
      { id: 'atk', label: 'ATK', value: 46 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 50 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 60 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 64 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 68 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 72 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 77 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 80 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 85 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 88 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 93 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 96 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 101 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 2, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 121 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 124 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 129 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 132 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 137 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 140 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 145 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 149 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 153 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 157 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 161 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 4, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 194 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 197 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 202 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 205 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 210 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 213 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 218 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 221 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 226 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 230 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 234 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 281 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 284 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 289 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 293 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 297 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 301 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 305 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 309 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 313 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 317 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 321 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 6, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 385 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 390 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 393 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 398 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 401 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 406 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 410 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 414 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 418 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 422 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 426 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 8, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 511 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 515 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 519 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 523 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 527 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 531 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 536 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 539 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 544 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 547 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 552 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 662 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 666 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 670 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 674 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 678 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 682 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 686 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 690 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 694 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 698 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 702 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 10, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 842 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 847 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 851 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 855 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 859 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 863 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 867 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 871 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 875 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 879 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
    ],
    [
      { id: 'atk', label: 'ATK', value: 883 },
      { id: 'ignisDamage', label: 'Ignis Damage', value: 12, unit: '%' },
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
    { items: [{ id: 21091, name: 'Faint Light Breath', quantity: 6 }], currency: { dorra: 10700 } },
    {
      items: [
        { id: 21091, name: 'Faint Light Breath', quantity: 6 },
        { id: 21092, name: 'Emberflies Soul', quantity: 13 },
      ],
      currency: { dorra: 26700 },
    },
    {
      items: [
        { id: 21091, name: 'Faint Light Breath', quantity: 13 },
        { id: 21092, name: 'Emberflies Soul', quantity: 20 },
      ],
      currency: { dorra: 59900 },
    },
    {
      items: [
        { id: 21091, name: 'Faint Light Breath', quantity: 20 },
        { id: 21092, name: 'Emberflies Soul', quantity: 33 },
      ],
      currency: { dorra: 89900 },
    },
    {
      items: [
        { id: 21091, name: 'Faint Light Breath', quantity: 26 },
        { id: 21092, name: 'Emberflies Soul', quantity: 53 },
      ],
      currency: { dorra: 197200 },
    },
    {
      items: [
        { id: 21091, name: 'Faint Light Breath', quantity: 40 },
        { id: 21092, name: 'Emberflies Soul', quantity: 73 },
        { id: 21093, name: 'Evernight Essence', quantity: 26 },
      ],
      currency: { dorra: 393700 },
    },
    {
      items: [
        { id: 21092, name: 'Emberflies Soul', quantity: 100 },
        { id: 21093, name: 'Evernight Essence', quantity: 40 },
      ],
      currency: { dorra: 756300 },
    },
    {
      items: [
        { id: 21092, name: 'Emberflies Soul', quantity: 126 },
        { id: 21093, name: 'Evernight Essence', quantity: 66 },
      ],
      currency: { dorra: 1513800 },
    },
  ],
};
