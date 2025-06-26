// Zone Nova Character Data & Utilities

// Character array - sorted alphabetically by name
export const ZONE_NOVA_CHARACTERS = [
  {
    id: 1,
    name: "Afrodite",
    rarity: "SSR",
    element: "Holy",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Afrodite.jpg",
    slug: "afrodite",
    detailUrl: "/guides/zone-nova/characters/afrodite"
  },
  {
    id: 28,
    name: "Anubis",
    rarity: "SSR",
    element: "Chaos",
    role: "Healer",
    stats: { hp: 9180, attack: 1004, defense: 729, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Anubis.jpg",
    slug: "anubis",
    detailUrl: "/guides/zone-nova/characters/anubis"
  },
  {
    id: 2,
    name: "Apollo",
    rarity: "SSR",
    element: "Fire",
    role: "Buffer",
    stats: { hp: 9564, attack: 1004, defense: 672, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Apollo.jpg",
    slug: "apollo",
    detailUrl: "/guides/zone-nova/characters/apollo"
  },
  {
    id: 3,
    name: "Artemis",
    rarity: "SSR",
    element: "Wind",
    role: "DPS",
    stats: { hp: 8033, attack: 1461, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Artemis.jpg",
    slug: "artemis",
    detailUrl: "/guides/zone-nova/characters/artemis"
  },
  {
    id: 32,
    name: "Athena",
    rarity: "SSR",
    element: "Wind",
    role: "Buffer",
    stats: { hp: 9564, attack: 1004, defense: 672, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Athena.jpg",
    slug: "athena",
    detailUrl: "/guides/zone-nova/characters/athena"
  },
  {
    id: 4,
    name: "Arthur",
    rarity: "SSR",
    element: "Holy",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 15, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Arthur.jpg",
    slug: "arthur",
    detailUrl: "/guides/zone-nova/characters/arthur"
  },
  {
    id: 5,
    name: "Bastet",
    rarity: "SR",
    element: "Wind",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Bastet.jpg",
    slug: "bastet",
    detailUrl: "/guides/zone-nova/characters/bastet"
  },
  {
    id: 6,
    name: "Belphegar",
    rarity: "SR",
    element: "Chaos",
    role: "Debuffer",
    stats: { hp: 7970, attack: 837, defense: 560, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/belphegar.jpg",
    slug: "belphegar",
    detailUrl: "/guides/zone-nova/characters/belphegar"
  },
  {
    id: 7,
    name: "Chiya",
    rarity: "SSR",
    element: "Ice",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Chiya.jpg",
    slug: "chiya",
    detailUrl: "/guides/zone-nova/characters/chiya"
  },
  {
    id: 8,
    name: "Cleopatra",
    rarity: "SSR",
    element: "Chaos",
    role: "DPS",
    stats: { hp: 8033, attack: 1461, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Cleopatra.jpg",
    slug: "cleopatra",
    detailUrl: "/guides/zone-nova/characters/cleopatra"
  },
  {
    id: 9,
    name: "Greed Mammon",
    rarity: "SR",
    element: "Chaos",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Greed Mammon.jpg",
    slug: "greed-mammon",
    detailUrl: "/guides/zone-nova/characters/greed-mammon"
  },
  {
    id: 10,
    name: "Guinevere",
    rarity: "SSR",
    element: "Fire",
    role: "Tank",
    stats: { hp: 10520, attack: 734, defense: 1232, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Guinevere.jpg",
    slug: "guinevere",
    detailUrl: "/guides/zone-nova/characters/guinevere"
  },
  {
    id: 31,
    name: "Hera",
    rarity: "SSR",
    element: "Chaos",
    role: "DPS",
    stats: { hp: 8033, attack: 1461, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Hera.jpg",
    slug: "hera",
    detailUrl: "/guides/zone-nova/characters/hera"
  },
  {
    id: 11,
    name: "Horus",
    rarity: "SSR",
    element: "Holy",
    role: "Debuffer",
    stats: { hp: 8033, attack: 1461, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Horus.jpg",
    slug: "horus",
    detailUrl: "/guides/zone-nova/characters/horus"
  },
  {
    id: 29,
    name: "Jeanne d'Arc",
    rarity: "SSR",
    element: "Wind",
    role: "Healer",
    stats: { hp: 9180, attack: 1004, defense: 729, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/JoanofArc .jpg",
    slug: "jeanne-darc",
    detailUrl: "/guides/zone-nova/characters/jeanne-darc"
  },
  {
    id: 12,
    name: "Kela",
    rarity: "SR",
    element: "Holy",
    role: "Healer",
    stats: { hp: 7650, attack: 837, defense: 608, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/kela.jpg",
    slug: "kela",
    detailUrl: "/guides/zone-nova/characters/kela"
  },
  {
    id: 13,
    name: "Lancelot",
    rarity: "SR",
    element: "Holy",
    role: "Tank",
    stats: { hp: 10857, attack: 612, defense: 957, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Lancelot.jpg",
    slug: "lancelot",
    detailUrl: "/guides/zone-nova/characters/lancelot"
  },
  {
    id: 14,
    name: "Leviathan",
    rarity: "SR",
    element: "Wind",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Leviathan.jpg",
    slug: "leviathan",
    detailUrl: "/guides/zone-nova/characters/leviathan"
  },
  {
    id: 15,
    name: "Loki",
    rarity: "SSR",
    element: "Chaos",
    role: "Debuffer",
    stats: { hp: 9564, attack: 1004, defense: 672, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Loki.jpg",
    slug: "loki",
    detailUrl: "/guides/zone-nova/characters/loki"
  },
  {
    id: 16,
    name: "Lyra",
    rarity: "SSR",
    element: "Fire",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 15, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Lyra.jpg",
    slug: "lyra",
    detailUrl: "/guides/zone-nova/characters/lyra"
  },
  {
    id: 17,
    name: "Merlin",
    rarity: "SSR",
    element: "Fire",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 15, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Merlin.jpg",
    slug: "merlin",
    detailUrl: "/guides/zone-nova/characters/merlin"
  },
  {
    id: 18,
    name: "Mordred",
    rarity: "SR",
    element: "Fire",
    role: "DPS",
    stats: { hp: 8470, attack: 837, defense: 560, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Mordred.jpg",
    slug: "mordred",
    detailUrl: "/guides/zone-nova/characters/mordred"
  },
  {
    id: 19,
    name: "Naiya",
    rarity: "SSR",
    element: "Ice",
    role: "Buffer",
    stats: { hp: 9564, attack: 1004, defense: 672, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Naiya.jpg",
    slug: "naiya",
    detailUrl: "/guides/zone-nova/characters/naiya"
  },
  {
    id: 20,
    name: "Nini",
    rarity: "SR",
    element: "Ice",
    role: "Debuffer",
    stats: { hp: 7970, attack: 837, defense: 560, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Nini.jpg",
    slug: "nini",
    detailUrl: "/guides/zone-nova/characters/nini"
  },
  {
    id: 27,
    name: "Penny",
    rarity: "SSR",
    element: "Wind",
    role: "Tank",
    stats: { hp: 10520, attack: 794, defense: 1232, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/penny.jpg",
    slug: "penny",
    detailUrl: "/guides/zone-nova/characters/penny"
  },
  {
    id: 21,
    name: "Rose",
    rarity: "SR",
    element: "Ice",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Rose.jpg",
    slug: "rose",
    detailUrl: "/guides/zone-nova/characters/rose"
  },
  {
    id: 22,
    name: "Shanna",
    rarity: "SR",
    element: "Fire",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Shanna.jpg",
    slug: "shanna",
    detailUrl: "/guides/zone-nova/characters/shanna"
  },
  {
    id: 23,
    name: "Shu",
    rarity: "SR",
    element: "Wind",
    role: "Debuffer",
    stats: { hp: 7970, attack: 837, defense: 560, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Shu.jpg",
    slug: "shu",
    detailUrl: "/guides/zone-nova/characters/shu"
  },
  {
    id: 30,
    name: "Snow Girl",
    rarity: "SR",
    element: "Ice",
    role: "Healer",
    stats: { hp: 7850, attack: 837, defense: 608, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Snow.jpg",
    slug: "snow-girl",
    detailUrl: "/guides/zone-nova/characters/snow-girl"
  },
  {
    id: 24,
    name: "Tefnut",
    rarity: "SR",
    element: "Holy",
    role: "DPS",
    stats: { hp: 6694, attack: 1088, defense: 442, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Tefnut.jpg",
    slug: "tefnut",
    detailUrl: "/guides/zone-nova/characters/tefnut"
  },
  {
    id: 25,
    name: "Yuis",
    rarity: "SSR",
    element: "Holy",
    role: "DPS",
    stats: { hp: 8033, attack: 1305, defense: 530, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Yuis.jpg",
    slug: "yuis",
    detailUrl: "/guides/zone-nova/characters/yuis"
  },
  {
    id: 26,
    name: "Zashiki-warashi",
    rarity: "SR",
    element: "Fire",
    role: "Buffer",
    stats: { hp: 7970, attack: 837, defense: 560, energyRecovery: 0.25, critRate: 0, critDmg: 50 },
    image: "/images/games/zone-nova/characters/Zashiki-warashi.jpg",
    slug: "zashiki-warashi",
    detailUrl: "/guides/zone-nova/characters/zashiki-warashi"
  }
];

// Metadata (unique, sorted)
export const CHARACTER_METADATA = {
  elements: Array.from(new Set(ZONE_NOVA_CHARACTERS.map(c => c.element))).sort(),
  rarities: Array.from(new Set(ZONE_NOVA_CHARACTERS.map(c => c.rarity))).sort((a, b) => (a === "SSR" ? -1 : b === "SSR" ? 1 : a.localeCompare(b))),
  roles: Array.from(new Set(ZONE_NOVA_CHARACTERS.map(c => c.role))).sort(),
};

// Utility functions (pure, safe for client)
export function filterCharacters(characters, { element, rarity, role }) {
  return characters.filter(c =>
    (!element || c.element === element) &&
    (!rarity || c.rarity === rarity) &&
    (!role || c.role === role)
  );
}

export function sortCharacters(characters, sortKey, direction = 'asc') {
  return [...characters].sort((a, b) => {
    let valA = a.stats[sortKey] !== undefined ? a.stats[sortKey] : a[sortKey];
    let valB = b.stats[sortKey] !== undefined ? b.stats[sortKey] : b[sortKey];
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();
    if (valA < valB) return direction === 'asc' ? -1 : 1;
    if (valA > valB) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

export function getCharacterBySlug(slug) {
  return ZONE_NOVA_CHARACTERS.find(c => c.slug === slug);
}
