export const emblemStats = {
  title: 'Stella Sora Emblem Stats Reference Guide',
  description: '',

  levels: [
    {
      name: 'Lv.70',
      description: 'Basic tier emblems with core stats',
      image: '/images/games/stella-sora/emblem/lv70_default.png',
    },
    {
      name: 'Lv.80',
      description: 'Enhanced emblems with skill level increases',
      image: '/images/games/stella-sora/emblem/lv80_default.png',
    },
    {
      name: 'Lv.90',
      description: 'Premium emblems with Trekker Potential increases',
      image: '/images/games/stella-sora/emblem/lv90_default.png',
    },
  ],
  rarities: ['Green', 'Blue', 'Gold', 'Rainbow'],

  // Main stats data organized by category
  stats: [
    {
      category: 'Basic Percentage Stats',
      items: [
        {
          name: 'ATK %',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '4.0%', blue: '5.0%', gold: '6.0%', rainbow: '12.0%' },
        },
        {
          name: 'HP %',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '4.0%', blue: '5.0%', gold: '6.0%', rainbow: '12.0%' },
        },
        {
          name: 'DEF %',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '10.0%', blue: '12.0%', gold: '15.0%', rainbow: null },
        },
      ],
    },
    {
      category: 'Flat Stats',
      items: [
        {
          name: 'ATK',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '70', blue: '88', gold: '105', rainbow: null },
        },
        {
          name: 'HP',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '680', blue: '850', gold: '1020', rainbow: null },
        },
        {
          name: 'DEF',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '35', blue: '44', gold: '53', rainbow: null },
        },
      ],
    },
    {
      category: 'Critical Stats',
      items: [
        {
          name: 'Crit DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '8.0%', blue: '10.0%', gold: '12.0%', rainbow: null },
        },
        {
          name: 'Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: '15.0%' },
        },
        {
          name: 'Auto Attack Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
        {
          name: 'Skill Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
        {
          name: 'Ultimate Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
        {
          name: 'Mark Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
        {
          name: 'Minion Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
        {
          name: 'Derivative Crit Rate',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '5.0%', blue: '6.3%', gold: '7.5%', rainbow: null },
        },
      ],
    },
    {
      category: 'Damage Type Stats',
      items: [
        {
          name: 'Auto Attack DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '10.0%', blue: '13.0%', gold: '15.0%', rainbow: '30.0%' },
        },
        {
          name: 'Skill DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '7.0%', blue: '8.0%', gold: '10.0%', rainbow: '20.0%' },
        },
        {
          name: 'Ultimate DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '10.0%', blue: '13.0%', gold: '15.0%', rainbow: '30.0%' },
        },
        {
          name: 'Mark DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '27.0%', blue: '33.0%', gold: '40.0%', rainbow: '80.0%' },
        },
        {
          name: 'Minion DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '7.0%', blue: '8.0%', gold: '10.0%', rainbow: '20.0%' },
        },
        {
          name: 'Derivative DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '7.0%', blue: '8.0%', gold: '10.0%', rainbow: '20.0%' },
        },
        {
          name: 'Element DMG',
          levels: { 70: true, 80: true, 90: true },
          values: { green: '4.0%', blue: '5.0%', gold: '6.0%', rainbow: '12.0%' },
        },
        {
          name: 'Element PEN',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '35', blue: '40', gold: '53', rainbow: '110' },
        },
      ],
    },
    {
      category: 'Charge Efficiency',
      items: [
        {
          name: 'Charge Efficiency (Main)',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '10.0%', blue: '12.5%', gold: '16.0%', rainbow: '30.0%' },
        },
        {
          name: 'Charge Efficiency (Support)',
          levels: { 70: true, 80: true, 90: false },
          values: { green: '13.5%', blue: '17.0%', gold: '20.3%', rainbow: '40.0%' },
        },
      ],
    },
    {
      category: 'Level Up Bonuses (Lv.80 Only)',
      items: [
        {
          name: 'Auto Attack Level Up',
          levels: { 70: false, 80: true, 90: false },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
        {
          name: 'Increases Main Skill level',
          levels: { 70: false, 80: true, 90: false },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
        {
          name: 'Increase Support Skill level',
          levels: { 70: false, 80: true, 90: false },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
        {
          name: 'Ultimate Level Up',
          levels: { 70: false, 80: true, 90: false },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
      ],
    },
    {
      category: 'Trekker Potential (Lv.90 Only)',
      items: [
        {
          name: 'Main Trekker Potential Lv.',
          levels: { 70: false, 80: false, 90: true },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
        {
          name: 'Support Trekker Potential Lv.',
          levels: { 70: false, 80: false, 90: true },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
        {
          name: 'Generic Potential Lv.',
          levels: { 70: false, 80: false, 90: true },
          values: { green: null, blue: null, gold: '1', rainbow: '2 or 3' },
        },
      ],
    },
  ],

  // Rainbow tier summary for special highlighting
  rainbowStats: [
    { stat: 'ATK %', value: '12.0%' },
    { stat: 'HP %', value: '12.0%' },
    { stat: 'Element DMG', value: '12.0%' },
    { stat: 'Auto Attack DMG', value: '30.0%' },
    { stat: 'Ultimate DMG', value: '30.0%' },
    { stat: 'Skill DMG', value: '20.0%' },
    { stat: 'Mark DMG', value: '80.0%' },
    { stat: 'Minion DMG', value: '20.0%' },
    { stat: 'Derivative DMG', value: '20.0%' },
    { stat: 'Element PEN', value: '110' },
    { stat: 'Crit Rate', value: '15.0%' },
    { stat: 'Charge Efficiency (Main)', value: '30.0%' },
    { stat: 'Charge Efficiency (Support)', value: '40.0%' },
    { stat: 'All Level Ups', value: '2 or 3' },
  ],

  // Important notes about the system
  notes: [
    'Level 70 emblems: Available for most percentage and flat stats',
    'Level 80 emblems: Adds skill level increases',
    'Level 90 emblems: Adds Trekker Potential level increases',
    'Rainbow tier: Provides significantly higher values (typically 2x Gold tier)',
    "Some stats (DEF%, flat stats, specific crit rates) don't have Rainbow variants",
    'Element PEN is only available up to Level 80',
    'Skill/Ultimate level increases only available at Level 80',
    'Potential level increases only available at Level 90',
  ],
};
