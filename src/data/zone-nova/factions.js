// Zone Nova Faction Data
// Contains faction information and character assignments

export const ZONE_NOVA_FACTIONS = {
  Neutral: {
    name: 'Neutral',
    chineseName: '無所屬',
    characters: [],
    color: '#757575',
    description: 'Characters not affiliated with any major faction',
  },
  Safir: {
    name: 'Safir',
    chineseName: '薩緋爾',
    characters: ['Shanna', 'Penny', 'Chiya', 'Kela', 'Lavinia', 'Lily', 'Lyra', 'Naiya', 'Nina', 'Erika', 'Veronica', ],
    color: '#2196f3',
    description: 'The Safir faction',
  },
  Kemich: {
    name: 'Kemich',
    chineseName: '凱米奇',
    characters: ['Anubis', 'Shu', 'Bastet', 'Tefnut', 'Horus', 'Cleopatra', 'Apep', 'Set', 'Nephthys', ],
    color: '#ff9800',
    description: 'The Kemich faction with Egyptian mythology influences',
  },
  Avalon: {
    name: 'Avalon',
    chineseName: '亞瓦隆',
    characters: [
      'Arthur',
      'Guinevere',
      'Jeanne D Arc',
      'Lancelot',
      'Merlin',
      'Mordred',
      'Morgan Le Fay', 'Bedivere', 'Bors', ],
    color: '#4caf50',
    description: 'The Avalon faction with Arthurian legend influences',
  },
  Otis: {
    name: 'Otis',
    chineseName: '奧帝斯',
    characters: ['Gaia', 'Yuis', 'Hera', 'Apollo', 'Artemis', 'Athena', 'Afrodite', 'Poseidon', 'Medusa', ],
    color: '#9c27b0',
    description: 'The Otis faction with Greek mythology influences',
  },
  'Asa': {
    name: 'Asa',
    chineseName: '亞薩',
    characters: ['Frigga', 'Freya', 'Hela', 'Loki', 'Odin', 'Sigurd', 'Thor'],
    color: '#f44336',
    description: 'The Asa faction with Norse mythology influences',
  },
  'Heikyo Castle': {
    name: 'Heikyo Castle',
    chineseName: '平京城',
    characters: ['Ibaraki-doji', 'Zashiki-warashi', 'Snow Girl', 'Jorogumo', 'Shuten-doji', 'Tamamo-no-Mae'],
    color: '#00bcd4',
    description: 'The Heikyo Castle faction with Japanese influences',
  },
  'Monochrome Realm': {
    name: 'Monochrome Realm',
    chineseName: '黑白国度',
    characters: ['Rose', 'Nini', 'Hiyori', 'Sharin', 'Jill', 'Keller'],
    color: '#607d8b',
    description: 'The Monochrome Realm faction',
  },
  'Bikta': {
    name: 'Bikta',
    chineseName: '畢刻塔',
    characters: [
      'Leviathan',
      'Greed Mammon',
      'Gluttony - Beelzebub',
      'Lust - Asmodeus',
      'Belphegar',
      'Pride-Lucifer',
      'Wrath-Samael',
    ],
    color: '#673ab7',
    description: 'The Bikta faction with demonic influences',
  },
};

// Helper function to get faction by character name
export function getFactionByCharacter(characterName) {
  for (const [factionKey, faction] of Object.entries(ZONE_NOVA_FACTIONS)) {
    if (faction.characters.includes(characterName)) {
      return factionKey;
    }
  }
  return 'Neutral';
}

// Helper function to get all faction names
export function getAllFactionNames() {
  return Object.keys(ZONE_NOVA_FACTIONS);
}

// Helper function to get faction data by name
export function getFactionData(factionName) {
  return ZONE_NOVA_FACTIONS[factionName];
}
