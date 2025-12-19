/**
 * Busty Burst Fantasy - Buff/Debuff System Guide Data
 * Kyonyu Fantasy Burst category system explanation
 */

// Buff category definitions
export const buffCategories = [
  {
    category: 'A',
    color: 'red',
    name: 'Single Target Ultimate Slot',
    description: 'Ultimates that affect only 1 ally or self.',
  },
  {
    category: 'B',
    color: 'blue',
    name: 'Multiple Target Ultimate Slot',
    description: 'Ultimates that affect 2 or more allies.',
  },
  {
    category: 'C',
    color: 'green',
    name: 'Single Target Skill Slot',
    description: 'Skills (Skill 1 or Skill 2) that affect only 1 ally or self.',
  },
  {
    category: 'D',
    color: 'magenta',
    name: 'Multiple Target Skill Slot',
    description: 'Skills (Skill 1 or Skill 2) that affect 2 or more allies.',
  },
];

// Debuff category definitions
export const debuffCategories = [
  {
    category: 'A',
    color: 'red',
    name: 'Ultimate Debuff Slot',
    description:
      'All Ultimate debuffs, regardless of whether they target single or multiple enemies.',
  },
  {
    category: 'B',
    color: 'yellow',
    name: 'Single Target Skill Debuff Slot',
    description: 'Skill debuffs targeting 1 enemy.',
  },
  {
    category: 'C',
    color: 'purple',
    name: 'Multiple Target Skill Debuff Slot',
    description: 'Skill debuffs targeting 2 or more enemies.',
  },
];

// Buff examples with character images
export const buffExamples = {
  A: [
    { name: 'Theresia', skillType: 'Ultimate', imageFile: 'Teresia.jpg' },
    { name: 'Noble Shamshel', skillType: 'Ultimate', imageFile: 'Elegant_Portrait_Shamshel.jpg' },
  ],
  B: [
    { name: 'Marina', skillType: 'Ultimate', imageFile: 'Marina.jpg' },
    { name: 'Liesel', skillType: 'Ultimate', imageFile: 'Liesel.jpg' },
  ],
  C: [
    { name: 'Luca', skillType: 'Skill', imageFile: 'Luca.jpg' },
    { name: 'Meinias', skillType: 'Skill', imageFile: 'Meinias.jpg' },
  ],
  D: [
    { name: 'Nora', skillType: 'Skill', imageFile: 'Nora.jpg' },
    { name: 'Messeria', skillType: 'Skill', imageFile: 'Trance_Dancer_Messeria.jpg' },
  ],
};

// Debuff examples with character images
export const debuffExamples = {
  A: [
    { name: 'Nerys', skillType: 'Ultimate', imageFile: 'Messenge_of_Stone_soldiers_Nerys.jpg' },
    { name: 'Luca', skillType: 'Ultimate', imageFile: 'Luca.jpg' },
    { name: 'Stenlina', skillType: 'Ultimate', imageFile: 'Stenlina.jpg' },
  ],
  B: [
    { name: 'Artia', skillType: 'Skill', imageFile: 'Artia.jpg' },
    { name: 'Theresia', skillType: 'Skill', imageFile: 'Teresia.jpg' },
  ],
  C: [
    { name: 'Messeria', skillType: 'Skill', imageFile: 'Trance_Dancer_Messeria.jpg' },
    { name: 'Nora', skillType: 'Skill', imageFile: 'Nora.jpg' },
  ],
};

// Team building example: Physical Crit buff
export const physicalTeamExample = {
  title: 'Physical Team Core - PCrit Buff Example',
  description: 'A common physical team core demonstrating buff category interactions.',
  characters: [
    {
      name: 'Messeria',
      imageFile: 'Trance_Dancer_Messeria.jpg',
      skill: 'Skill 1',
      buffs: [
        { stat: 'PATK Up', target: 'All allies', value: '[15%+480]', frame: 'D' },
        { stat: 'PCrit Up', target: 'All allies', value: '[490]', frame: 'D' },
      ],
    },
    {
      name: 'Luca',
      imageFile: 'Luca.jpg',
      skill: 'Skill 1',
      buffs: [
        { stat: 'PATK Up', target: 'self', value: '[665]', frame: 'C' },
        { stat: 'PCrit Up', target: 'self', value: '[680]', frame: 'C' },
      ],
    },
    {
      name: 'Nora',
      imageFile: 'Nora.jpg',
      skill: 'Skill 1',
      buffs: [
        { stat: 'PCrit Up', target: '3 closest allies', value: '[680]', frame: 'D' },
        { stat: 'Barrier', target: '3 closest allies', value: '[3000]', frame: 'D' },
      ],
    },
  ],
  explanation: [
    "Luca receives her own PCrit Up (Category C) plus either Nora's or Messeria's PCrit (Category D) - but not both.",
    "Nora's PCrit (680) is higher than Messeria's (490), but can still be overwritten if Messeria activates afterward.",
    "The PCrit buffs conflict in Category D, but the Barrier and PATK buffs apply normally since they're different buff types.",
    'With a full party of 6 and proper positioning, you can minimize these conflicts.',
  ],
  teamFormation: {
    description: 'Recommended formation with 6 units:',
    note: "Position Nora's PCrit buff to cover the 3 front row allies, while Messeria covers the rest. Note that Messeria may occasionally overwrite the front row due to her faster speed.",
  },
};

// Team building example: Magic Defense Down debuff
export const magicDebuffExample = {
  title: 'Magic Defense Down - Maximizing Debuff Categories',
  description: 'How to fill all debuff categories for Magic Defense Down.',
  characters: [
    {
      name: 'Festival Empress Shamshel',
      imageFile: 'Festival_Empress_Shamshel.jpg',
      category: 'A',
      categoryType: 'Ultimate',
    },
    {
      name: 'Black Knight',
      imageFile: 'The_Dark_Knight.jpg',
      category: 'B',
      categoryType: 'Single Target Skill',
    },
    {
      name: 'Ishtovia',
      imageFile: 'Pious_Healer_Ishtovia.jpg',
      category: 'C',
      categoryType: 'Multi Target Skill',
    },
  ],
  note: 'Using these three characters fills all Magic Defense Down categories, maximizing your debuff stacking.',
};

// Special exceptions
export const specialExceptions = [
  {
    title: 'Action Speed Exception',
    characters: [
      { name: 'Bride Giselle', imageFile: null },
      { name: 'Festival Estiriel', imageFile: 'Festive_Attire_Estiriel.jpg' },
      { name: 'Swimsuit Theresia', imageFile: null },
    ],
    description:
      "Giselle's and Estiriel's action speed buffs (Category D) are treated as the same buff, and they interact unusually when stacking with Swimsuit Theresia's action speed buff (also Category D).",
    note: '(Bug was fixed on JP server; the English version may already have this patched)',
  },
  {
    title: 'Magdalena Exception',
    characters: [{ name: 'Magdalena', imageFile: null }],
    description:
      "Magdalena's group skill buffs can stack with other group skill buffs, but conflict with single target skill buffs. Essentially, her group buffs behave as Category C instead of Category D.",
    note: "It's unclear whether this is intended behavior or a bug.",
  },
];

// Additional notes/tips
export const additionalNotes = [
  'A debuff cap exists, though exact values are unknown. Check enemy defense stats - enemies with low defense need fewer debuffs.',
  'The Pink raid boss (Assassin) has very low magic defense, so 1-2 good magic defense debuffs are enough to maximize damage.',
  'The Yellow raid boss (Knight) has very high magic defense, so stacking as many magic debuffs as possible yields better results.',
  "Don't worry too much about overlapping buffs or debuffs if they have similar values.",
  'Slower characters can share a category with a faster character who has a weaker buff. The faster character rotates skills more often, so their buff gets overwritten frequently anyway.',
  'The reverse can apply in some cases, but generally try to minimize conflicts where possible.',
];

// Quick tips for overview
export const quickTips = [
  "Buffs are organized into categories and only stack if they're in different categories.",
  "When buffs share the same category, the last one applied takes effect (even if it's weaker).",
  'Passive abilities ignore all these rules and stack freely.',
  'Category B (multi-target Ultimate) and Category D (multi-target Skill) are the most common conflict points.',
  'Single target categories (A and C) rarely conflict since they typically only affect the user.',
];

// Category system overview
export const overview = {
  title: 'Kyonyu Fantasy Buff System',
  intro:
    'Kyonyu Fantasy Burst organizes buffs into specific categories. Buffs in the same category cannot stack - instead, the most recently applied buff overwrites any previous one, even if the new buff is weaker.',
  warning: "*Some exceptions exist, which we'll cover later.",
};

// Sources
export const sources = [
  {
    name: "Aethersteel's Guide (Google Docs)",
    url: 'https://docs.google.com/document/d/1Z3LGeVY7lJaUk9hw2pxmIIj5w6JYwZpzu-zVnJ3rzfc/edit?tab=t.0',
    description: 'Comprehensive English guide on the buff/debuff system by Aethersteel.',
  },
  {
    name: 'Kyonyu Fantasy Burst Wikiru (JP)',
    url: 'https://kyonyufantasyburst.wikiru.jp/?%E7%89%B9%E6%AE%8A%E5%8A%B9%E6%9E%9C%E3%81%A8%E7%8A%B6%E6%85%8B%E7%95%B0%E5%B8%B8#x8f7c3b1',
    description:
      'The FAQ page on Kyonyu Fantasy Burst Wikiru - an excellent resource for all things related to this game.',
  },
  {
    name: 'Muscle Brain Fantasy (YouTube)',
    url: 'https://youtu.be/sqrhrmSRi1U?si=ZZqSk9e3_QKFD0Vo',
    description:
      'A Kyonyuu Fantasy Burst YouTuber who produces extensive guides in Japanese. This video covers the buff/debuff system specifically.',
  },
];

// Credit note
export const creditNote =
  'All sources are in Japanese. Full credit goes to them for testing and documenting these mechanics so thoroughly. This guide aims to provide an accessible English resource for understanding these important game systems.';
