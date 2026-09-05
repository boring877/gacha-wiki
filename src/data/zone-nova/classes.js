// Zone Nova Character Classes Data
// Centralized information about the class system (names match the game's
// localization: TANK / WARRIOR / ATTACKER / DESTROYER / SUPPORTER / DISRUPTOR / HEALER)

export const CHARACTER_CLASSES = {
  Tank: {
    name: 'Tank',
    role: 'Tank',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Tank.png',
    memoryCompatibility: 'This unit only can equip Tank memories',
  },
  Warrior: {
    name: 'Warrior',
    role: 'DPS',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Warrior.png',
    memoryCompatibility: 'This unit only can equip Warrior memories',
  },
  Attacker: {
    name: 'Attacker',
    role: 'DPS',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Attacker.png',
    memoryCompatibility: 'This unit only can equip Attacker memories',
  },
  Destroyer: {
    name: 'Destroyer',
    role: 'DPS',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Destroyer.png',
    memoryCompatibility: 'This unit only can equip Destroyer memories',
  },
  Supporter: {
    name: 'Supporter',
    role: 'Supporter',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Supporter.png',
    memoryCompatibility: 'This unit only can equip Supporter memories',
  },
  Disruptor: {
    name: 'Disruptor',
    role: 'Disruptor',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Disruptor.png',
    memoryCompatibility: 'This unit only can equip Disruptor memories',
  },
  Healer: {
    name: 'Healer',
    role: 'Healer',
    icon: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/classes/Healer.png',
    memoryCompatibility: 'This unit only can equip Healer memories',
  },
};

export const CHARACTER_ROLES = {
  Tank: {
    name: 'Tank',
    description: 'Absorbs damage and protects allies',
    primaryFunction: 'Defense and protection',
    typicalClasses: ['Tank'],
  },
  DPS: {
    name: 'DPS',
    description: 'Deals damage to eliminate enemies',
    primaryFunction: 'Damage output',
    typicalClasses: ['Warrior', 'Attacker', 'Destroyer'],
  },
  Supporter: {
    name: 'Supporter',
    description: 'Enhances allies with beneficial effects',
    primaryFunction: 'Team enhancement',
    typicalClasses: ['Supporter'],
  },
  Disruptor: {
    name: 'Disruptor',
    description: 'Weakens enemies with negative effects',
    primaryFunction: 'Enemy disruption',
    typicalClasses: ['Disruptor'],
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
  Tank: 'This unit only can equip Tank memories',
  Warrior: 'This unit only can equip Warrior memories',
  Attacker: 'This unit only can equip Attacker memories',
  Destroyer: 'This unit only can equip Destroyer memories',
  Supporter: 'This unit only can equip Supporter memories',
  Disruptor: 'This unit only can equip Disruptor memories',
  Healer: 'This unit only can equip Healer memories',
};

// Export all class names as array for easy iteration
export const CLASS_NAMES = Object.keys(CHARACTER_CLASSES);
export const ROLE_NAMES = Object.keys(CHARACTER_ROLES);
