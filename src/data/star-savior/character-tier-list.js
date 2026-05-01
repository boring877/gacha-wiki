// SSR Character Tier List for Star Savior
// Grouped by element (Sun, Moon, Star, Chaos, Order)
// Optional `notes` object maps slug to a note string shown on the card

export const CHARACTER_TIER_LIST = {
  Sun: {
    SSS: ['charlotte-skin'],
    SS: ['hilde', 'kyra', 'harley'],
    S: ['charlotte', 'serpang', 'scarlet', 'petra', 'muriel'],
    A: [],
    B: [],
  },
  Moon: {
    SSS: [],
    SS: ['claire', 'emily'],
    S: ['asherah', 'carmen', 'epindel', 'frey-skin', 'lily', 'lugh', 'fei'],
    A: [],
    B: [],
  },
  Star: {
    SSS: ['bell', 'roberta', 'lyn'],
    SS: ['yoo-mina'],
    S: ['dana', 'frey', 'haydee', 'omega', 'smile', 'tanya', 'trish'],
    A: [],
    B: [],
  },
  Chaos: {
    UR: ['rosaria'],
    SSS: [],
    SS: ['lacy', 'lydia'],
    S: ['elisa'],
    A: [],
    B: [],
  },
  Order: {
    SSS: ['asherah-skin'],
    SS: ['luna'],
    S: ['seira'],
    A: [],
    B: [],
  },
};

export const CHARACTER_TIER_NOTES = {
  'fei': 'Can reach SS with the right team setup, but requires heavy investment. Pairing with ACC Down characters (Haydee, Bell) helps cover her evasion-reliant playstyle.',
};

export const ELEMENT_ORDER = ['Sun', 'Moon', 'Star', 'Chaos', 'Order'];

export const TIER_ORDER = ['UR', 'SSS', 'SS', 'S', 'A', 'B'];
