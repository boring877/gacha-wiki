// Zone Nova Faction Data
// Contains faction information and character assignments

export const ZONE_NOVA_FACTIONS = {
  Unaffiliated: {
    name: 'Unaffiliated',
    chineseName: '无所属',
    characters: [],
    color: '#757575',
    description: 'Characters not affiliated with any major faction',
  },
  Sapphire: {
    name: 'Sapphire',
    chineseName: '萨纳尔',
    characters: ['Shanna', 'Penny', 'Chiya', 'Kela', 'Lyra', 'Naiya'],
    color: '#2196f3',
    description: 'The Sapphire faction',
  },
  Chemic: {
    name: 'Chemic',
    chineseName: '凯米奇',
    characters: ['Anubis', 'Shu', 'Bastet', 'Tefnut', 'Horus', 'Cleopatra'],
    color: '#ff9800',
    description: 'The Chemic faction with Egyptian mythology influences',
  },
  Avalon: {
    name: 'Avalon',
    chineseName: '亚瓦隆',
    characters: ['Arthur', 'Guinevere', "Jeanne d'Arc", 'Lancelot', 'Merlin', 'Mordred'],
    color: '#4caf50',
    description: 'The Avalon faction with Arthurian legend influences',
  },
  Odius: {
    name: 'Odius',
    chineseName: '奥帝斯',
    characters: ['Gaia', 'Yuis', 'Hera', 'Apollo', 'Artemis', 'Athena', 'Afrodite'],
    color: '#9c27b0',
    description: 'The Odius faction with Greek mythology influences',
  },
  Asa: {
    name: 'Asa',
    chineseName: '亚萨',
    characters: ['Odin', 'Loki', 'Thor'],
    color: '#f44336',
    description: 'The Asa faction with Norse mythology influences',
  },
  'Pingjing City': {
    name: 'Pingjing City',
    chineseName: '平京城',
    characters: ['Zashiki-warashi', 'Snow Girl'],
    color: '#00bcd4',
    description: 'The Pingjing City faction with Japanese influences',
  },
  'Monochrome Nation': {
    name: 'Monochrome Nation',
    chineseName: '黑白国度',
    characters: ['Rose', 'Nini'],
    color: '#607d8b',
    description: 'The Monochrome Nation faction',
  },
  'Bicta Tower': {
    name: 'Bicta Tower',
    chineseName: '毕刻客',
    characters: ['Leviathan', 'Greed Mammon', 'Belphegar'],
    color: '#673ab7',
    description: 'The Bicta Tower faction with demonic influences',
  },
};

// Helper function to get faction by character name
export function getFactionByCharacter(characterName) {
  for (const [factionKey, faction] of Object.entries(ZONE_NOVA_FACTIONS)) {
    if (faction.characters.includes(characterName)) {
      return factionKey;
    }
  }
  return 'Unaffiliated';
}

// Helper function to get all faction names
export function getAllFactionNames() {
  return Object.keys(ZONE_NOVA_FACTIONS);
}

// Helper function to get faction data by name
export function getFactionData(factionName) {
  return ZONE_NOVA_FACTIONS[factionName];
}
