// SSR Arcana Tier List for Star Savior
// Grouped by stat tag (Power, Health, Focus, Endurance, Protect)
// Each stat tag has tier rows (SSS, SS, S, A, B)

export const TIER_DEFINITIONS = {
  SSS: { label: 'SSS', description: 'Best in slot for this stat tag.' },
  SS: { label: 'SS', description: 'Excellent pick.' },
  S: { label: 'S', description: 'Strong and reliable.' },
  A: { label: 'A', description: 'Good with the right team.' },
  B: { label: 'B', description: 'Niche or situational.' },
};

export const TIER_ORDER = ['SSS', 'SS', 'S', 'A', 'B'];

export const STAT_TAG_ORDER = ['Power', 'Health', 'Focus', 'Endurance', 'Protect'];

export const STAT_ICON_MAP = {
  Power: 'ATK',
  Health: 'HP',
  Focus: 'Effect Hit',
  Endurance: 'DEF',
  Protect: 'Effect RES',
};

export const ARCANA_TIER_LIST = {
  Power: {
    SSS: ['lacy-no-pain-no-gain', 'lyn-under-the-glass-moon-over-the-pavilion', 'kyra-as-cute-as-kyra'],
    SS: ['rosaria-the-end-wears-the-face-of-a-girl', 'frey-the-indomitable-masterpiece', 'muriel-divine-judgement', 'dana-a-stroll-with-friends'],
    S: ['omega-the-imaginary-pioneer', 'scarlet-the-great-and-amazing-bunny-girl', 'charlotte-a-clumsy-way-to-relieve-desire'],
    A: [],
    B: [],
  },
  Health: {
    SSS: ['asherah-young-lady-of-stranis', 'claire-the-perfect-bunny-girl'],
    SS: ['charlotte-a-knight-s-oath'],
    S: ['yoo-mina-experienced-mercenary', 'emily-a-quiet-moment-of-rest', 'frey-the-princess-ascends-the-throne'],
    A: ['vera-more-than-professional', 'roberta-responsibility-atop-a-pile-of-paperwork'],
    B: ['besta-forbidden-archive-vol-1'],
  },
  Focus: {
    SSS: ['naru-dreams-under-the-stars', 'petra-made-by-petra'],
    SS: ['bell-deep-mourning'],
    S: ['lily-there-s-only-one-truth'],
    A: ['ceres-an-unseen-place'],
    B: [],
  },
  Endurance: {
    SSS: [],
    SS: [],
    S: ['elisa-divine-trial', 'hilde-nostalgia-strikes-back'],
    A: ['harley-born-to-be-wild', 'annah-undercover-cop'],
    B: [],
  },
  Protect: {
    SSS: [],
    SS: [],
    S: ['besta-a-satisfying-meal'],
    A: ['carmen-night-view-beyond-the-window', 'tanya-master-of-fried-food'],
    B: [],
  },
};
