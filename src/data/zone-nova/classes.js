// Zone Nova Character Classes and Roles Data
// Centralized information about the class system

export const CHARACTER_CLASSES = {
  Guardian: {
    name: 'Guardian',
    role: 'Tank',
    icon: '/images/games/zone-nova/classes/Guardian.jpg',
    memoryCompatibility: 'This unit only can equip Guardian memories',
  },

  Warrior: {
    name: 'Warrior',
    role: 'DPS',
    icon: '/images/games/zone-nova/classes/Warrior.jpg',
    memoryCompatibility: 'This unit only can equip Warrior memories',
  },

  Rogue: {
    name: 'Rogue',
    role: 'DPS',
    icon: '/images/games/zone-nova/classes/Rogue.jpg',
    memoryCompatibility: 'This unit only can equip Rogue memories',
  },

  Mage: {
    name: 'Mage',
    role: 'DPS',
    icon: '/images/games/zone-nova/classes/Mage.jpg',
    memoryCompatibility: 'This unit only can equip Mage memories',
  },

  Buffer: {
    name: 'Buffer',
    role: 'Buffer',
    icon: '/images/games/zone-nova/classes/Buffer.jpg',
    memoryCompatibility: 'This unit only can equip Buffer memories',
  },

  Debuffer: {
    name: 'Debuffer',
    role: 'Debuffer',
    icon: '/images/games/zone-nova/classes/Debuffer.jpg',
    memoryCompatibility: 'This unit only can equip Debuffer memories',
  },

  Healer: {
    name: 'Healer',
    role: 'Healer',
    icon: '/images/games/zone-nova/classes/Healer.jpg',
    memoryCompatibility: 'This unit only can equip Healer memories',
  },
};

export const CHARACTER_ROLES = {
  Tank: {
    name: 'Tank',
    description: 'Absorbs damage and protects allies',
    primaryFunction: 'Defense and protection',
    typicalClasses: ['Guardian'],
  },

  DPS: {
    name: 'DPS',
    description: 'Deals damage to eliminate enemies',
    primaryFunction: 'Damage output',
    typicalClasses: ['Warrior', 'Rogue', 'Mage'],
  },

  Buffer: {
    name: 'Buffer',
    description: 'Enhances allies with beneficial effects',
    primaryFunction: 'Team enhancement',
    typicalClasses: ['Buffer'],
  },

  Debuffer: {
    name: 'Debuffer',
    description: 'Weakens enemies with negative effects',
    primaryFunction: 'Enemy disruption',
    typicalClasses: ['Debuffer'],
  },

  Healer: {
    name: 'Healer',
    description: 'Restores HP and cleanses negative effects',
    primaryFunction: 'Team recovery',
    typicalClasses: ['Healer'],
  },
};

// Helper functions
export function getClassInfo(className) {
  return CHARACTER_CLASSES[className] || null;
}

export function getRoleInfo(roleName) {
  return CHARACTER_ROLES[roleName] || null;
}

export function getClassesByRole(roleName) {
  const roleInfo = CHARACTER_ROLES[roleName];
  return roleInfo ? roleInfo.typicalClasses : [];
}

// Memory compatibility information
export const MEMORY_COMPATIBILITY = {
  Guardian: 'This unit only can equip Guardian memories',
  Warrior: 'This unit only can equip Warrior memories',
  Rogue: 'This unit only can equip Rogue memories',
  Mage: 'This unit only can equip Mage memories',
  Buffer: 'This unit only can equip Buffer memories',
  Debuffer: 'This unit only can equip Debuffer memories',
  Healer: 'This unit only can equip Healer memories',
};

// Export all class names as array for easy iteration
export const CLASS_NAMES = Object.keys(CHARACTER_CLASSES);
export const ROLE_NAMES = Object.keys(CHARACTER_ROLES);
