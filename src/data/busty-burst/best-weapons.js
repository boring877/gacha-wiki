/**
 * Busty Burst Fantasy - Best Weapons Data
 * Maps characters to their best weapon recommendations based on attack type
 * Includes weapon tier rankings and series groupings
 */

import { BUSTY_BURST_CHARACTER_INFO, getAllCharacters } from './character-info.js';
import { weapons, weaponTypes } from './weapons.js';

/**
 * Weapon Tier Definitions
 * SSS-Tier: (Reserved for future best weapons)
 * SS-Tier: Annihilation series (Current best - Ultimate Damage + MP Regen)
 * S-Tier: Dragon series (Skill Damage + Action Speed)
 * A-Tier: Golden Wyvern series (Passive scaling with dupes)
 * B-Tier: Shop weapons (Labyrinth/Gold - situational/F2P options)
 */
export const WEAPON_TIERS = {
  SSS: {
    label: 'SSS',
    description: 'Reserved for future best weapons',
    color: '#ff6b6b',
  },
  SS: {
    label: 'SS',
    description: 'Annihilation Series - Current best with Ultimate DMG + MP Regen',
    color: '#feca57',
  },
  S: {
    label: 'S',
    description: 'Dragon Series - Great for skill-based gameplay',
    color: '#48dbfb',
  },
  A: {
    label: 'A',
    description: 'Golden Wyvern Series - Passive scaling with dupes',
    color: '#1dd1a1',
  },
  B: {
    label: 'B',
    description: 'Shop Weapons - Good F2P options',
    color: '#576574',
  },
};

/**
 * Weapon series identification
 */
const isGoldenWyvern = name => name.includes('Golden Wyvern');
const isDragon = name =>
  name.includes('Dragon') ||
  name.includes('Dragoncleaver') ||
  name.includes('Dragonflame') ||
  name.includes('Dragonclaw') ||
  name.includes('Dragontail') ||
  name.includes('Dragoneye') ||
  name.includes('Dragonmind') ||
  name.includes('Dragonwind') ||
  name.includes('Dragonpierce') ||
  name.includes('Dragonfang') ||
  name.includes('Dragonburst');
const isAnnihilation = name => name.includes('Annihilation');
const isHeroicHolyLance = name => name === 'Heroic Holy Lance';
const isShopWeapon = obtain => obtain === 'Labyrinth Shop' || obtain === 'Gold Shop';

/**
 * Get weapon tier
 */
export const getWeaponTier = weapon => {
  if (isAnnihilation(weapon.name)) return 'SS';
  if (isDragon(weapon.name)) return 'S';
  if (isHeroicHolyLance(weapon.name)) return 'S';
  if (isGoldenWyvern(weapon.name)) return 'A';
  if (isShopWeapon(weapon.obtain)) return 'B';
  return 'A'; // Default for banner weapons
};

/**
 * Get weapon series name
 */
export const getWeaponSeries = weapon => {
  if (isGoldenWyvern(weapon.name)) return 'Golden Wyvern';
  if (isDragon(weapon.name)) return 'Dragon';
  if (isHeroicHolyLance(weapon.name)) return 'Heroic Holy';
  if (isAnnihilation(weapon.name)) return 'Annihilation';
  if (weapon.obtain === 'Labyrinth Shop') return 'Labyrinth';
  if (weapon.obtain === 'Gold Shop') return 'Gold Shop';
  return 'Other';
};

/**
 * Get best weapon for a character based on their weapon type and attack type
 */
export const getBestWeaponsForCharacter = characterSlug => {
  const char = BUSTY_BURST_CHARACTER_INFO[characterSlug];
  if (!char) return null;

  const weaponType = char.weaponType;
  const attackType = char.attackType || 'Physical'; // Default to Physical if not set
  const availableWeapons = weapons[weaponType] || [];

  // Filter weapons by attack type
  const matchingWeapons = availableWeapons.filter(w => w.atkType === attackType);

  // Sort by tier (SS > S > A > B)
  const tierOrder = { SS: 0, S: 1, A: 2, B: 3 };
  const sortedWeapons = [...matchingWeapons].sort((a, b) => {
    return tierOrder[getWeaponTier(a)] - tierOrder[getWeaponTier(b)];
  });

  // Get the best weapon (top 1)
  const bestWeapon = sortedWeapons[0];
  if (!bestWeapon) {
    return {
      character: char,
      attackType,
      bestWeapon: null,
    };
  }

  const tier = getWeaponTier(bestWeapon);
  const series = getWeaponSeries(bestWeapon);

  let reason = '';
  if (tier === 'SS') {
    reason = `${series} series - Ultimate DMG + MP Regen`;
  } else if (tier === 'S') {
    reason = `${series} series - Action Speed + Skill DMG`;
  } else if (tier === 'A') {
    reason = `${series} series - Passive scaling with dupes`;
  } else {
    reason = `F2P option from ${bestWeapon.obtain}`;
  }

  return {
    character: char,
    attackType,
    bestWeapon: {
      weapon: bestWeapon,
      tier,
      series,
      reason,
    },
  };
};

/**
 * Get all characters with their best weapons, grouped by weapon type
 */
export const getAllCharacterBestWeapons = () => {
  const result = {};

  weaponTypes.forEach(type => {
    const charsWithType = getAllCharacters().filter(c => c.weaponType === type);
    result[type] = charsWithType.map(char => getBestWeaponsForCharacter(char.slug));
  });

  return result;
};

/**
 * Get all weapons grouped by tier
 */
export const getWeaponsByTier = () => {
  const result = { SSS: [], SS: [], S: [], A: [], B: [] };

  weaponTypes.forEach(type => {
    const typeWeapons = weapons[type] || [];
    typeWeapons.forEach(weapon => {
      const tier = getWeaponTier(weapon);
      result[tier].push({
        ...weapon,
        weaponType: type,
        series: getWeaponSeries(weapon),
      });
    });
  });

  return result;
};

/**
 * Get all weapons grouped by series
 */
export const getWeaponsBySeries = () => {
  const result = {
    'Golden Wyvern': [],
    Dragon: [],
    Annihilation: [],
    Labyrinth: [],
    'Gold Shop': [],
  };

  weaponTypes.forEach(type => {
    const typeWeapons = weapons[type] || [];
    typeWeapons.forEach(weapon => {
      const series = getWeaponSeries(weapon);
      if (result[series]) {
        result[series].push({
          ...weapon,
          weaponType: type,
          tier: getWeaponTier(weapon),
        });
      }
    });
  });

  return result;
};

/**
 * Get character count by weapon type for display
 */
export const getCharacterCountByWeaponType = () => {
  const counts = {};
  weaponTypes.forEach(type => {
    counts[type] = getAllCharacters().filter(c => c.weaponType === type).length;
  });
  return counts;
};

export { weaponTypes };
