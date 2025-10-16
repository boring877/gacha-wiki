import { baseStats } from '../base-stats.js';

export const julius = {
  id: 'julius',
  name: 'Julius',
  title: 'The notched halberd',
  subtitle: '',
  description:
    'A powerful SSR warrior from the Bloodborn faction who specializes in melee combat and single-target damage with his phantasmic halberd and ethereal blades.',
  image: 'julius',
  tags: ['Melee', 'Single-Target DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Bloodborn',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['julius'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Shattering Strike',
      type: 'Normal Attack',
      description: 'Deals 127.0% ATK (P. DMG).',
    },
    {
      name: 'Spectral Pursuit',
      type: 'Special',
      description:
        'After every 4 Basic ATK(s), Julius deals multiple instances of DMG to the target, totaling 600.0% ATK (P. DMG).',
    },
    {
      name: 'Haunting Whistle',
      type: 'Passive',
      description:
        "Every 20 times Julius deals DMG to an enemy, he gains 1 stack of Phantasm (up to 3 stacks). When Julius has 3 stacks of Phantasm, he gains 30.0% Lifesteal. Phantasm: Conjures flying blades. When Julius attacks, the blades automatically perform follow-up attacks, dealing P. DMG equal to 2.0% of the target's Max HP. Each instance cannot exceed 50.0% of Julius's ATK. Cannot be dispelled.",
    },
    {
      name: 'Blood Oath',
      type: 'Ultimate',
      cost: 4,
      description:
        "Julius attacks enemy units in a select rectangular with his Halberd, dealing 2250.0% ATK (P. DMG). Each stack of 'Phantasm' increases this DMG by 15.0%. When using his Ultimate, Julius gathers flying blades based on the stacks of Phantasm, continuously dealing multiple instances of P. DMG to enemy units in a select rectangular. Phantasm: Conjures flying blades. When Julius attacks, the blades automatically perform follow-up attacks, dealing P. DMG equal to 2.0% of the target's Max HP. Each instance cannot exceed 50.0% of Julius's ATK. Cannot be dispelled.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced phantasm blade synergy and massive single-target burst.',
    attackTypeInfo:
      'P.DMG: Physical damage through halberd mastery and phantasmic blades. Reduced by P.DEF. Enhanced by Phantasm stacks.',
    equipmentNote:
      'Medium Equipment: Balanced attributes offering both offensive power and survivability for sustained combat.',
  },
};
