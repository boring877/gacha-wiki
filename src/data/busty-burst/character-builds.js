import { accessoryItems } from './accessory-items.js';
import { mainStats, subStats, subStatTips } from './accessory-guide.js';
import { weapons, statLabels, percentStats } from './weapons.js';

// Helper function to get accessory set by id
const getAccessorySet = id => {
  const allSets = [...accessoryItems.SSR, ...accessoryItems.SR];
  return allSets.find(set => set.id === id);
};

// Helper function to format weapon stats for display
const formatWeaponStats = (stats, statsMax) => {
  if (!stats) return [];
  return Object.entries(stats).map(([key, value]) => ({
    name: statLabels[key] || key,
    value: percentStats.includes(key) ? `${value}%` : value,
    max: percentStats.includes(key) ? `${statsMax?.[key] || value}%` : (statsMax?.[key] || value),
  }));
};

// Helper function to get weapon data by image file name
const getWeaponData = imageFile => {
  for (const type of Object.values(weapons)) {
    const weapon = type.find(w => w.imageFile === imageFile);
    if (weapon) {
      return {
        name: weapon.name,
        image: weapon.imageFile,
        ability: weapon.ability,
        effect: weapon.abilityDesc,
        stats: formatWeaponStats(weapon.stats, weapon.statsMax),
        atkType: weapon.atkType,
        obtain: weapon.obtain,
      };
    }
  }
  return null;
};

// Helper function to format set effects for build display
const formatSetEffects = setEffects => {
  return setEffects.map(effect => ({
    pieces: parseInt(effect.pieces),
    effect: `${effect.stat} ${effect.value}`,
  }));
};

// Get main stats data for a specific role type with substat recommendations
const getMainStats = (roleType, role, setId = null) => {
  const atkStat = roleType === 'Physical' ? 'Phys Atk' : 'Mag Atk';
  const critStat = roleType === 'Physical' ? 'Phys Crit' : 'Mag Crit';

  // Get the accessory set for correct images
  const accessorySet = setId ? getAccessorySet(setId) : null;
  const getImageForSlot = slot => {
    if (accessorySet) {
      const piece = accessorySet.pieces.find(p => p.type === slot);
      if (piece) return piece.imageFile;
    }
    // Fallback to Gold images
    return `Gold_${slot}.png`;
  };

  return mainStats.map(stat => {
    const imageFile = getImageForSlot(stat.slot);
    // Customize based on role type and role
    if (stat.slot === 'Tiara') {
      return { ...stat, imageFile, best: 'HP', substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Earrings') {
      return { ...stat, imageFile, best: critStat, substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Necklace') {
      return { ...stat, imageFile, best: 'Ultimate DMG', substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Bracelet') {
      // Bracelet main stat is Atk, so substat should be Crit
      return { ...stat, imageFile, best: atkStat, substat: `${critStat} (3+ rolls)` };
    }
    if (stat.slot === 'Ring') {
      // DPS gets Skill DMG, Healer/Support gets Healing
      return {
        ...stat,
        imageFile,
        best: role === 'DPS' ? 'Skill DMG' : 'Healing',
        substat: `${atkStat} (3+ rolls)`,
      };
    }
    return { ...stat, imageFile, substat: `${atkStat} (3+ rolls)` };
  });
};

// Get substat priority for a role type (from accessory-guide.js)
const getSubstatPriority = roleType => {
  if (roleType === 'Physical') {
    return {
      priority: ['Phys Atk'],
      secondary: ['Phys Crit'],
      other: ['HP', 'Phys Def'],
      tips: subStatTips,
    };
  } else if (roleType === 'Magic') {
    return {
      priority: ['Mag Atk'],
      secondary: ['Mag Crit'],
      other: ['HP', 'Mag Def'],
      tips: subStatTips,
    };
  }
  return { ...subStats, tips: subStatTips };
};

export const characterBuilds = {
  'festive-attire-estiriel': {
    slug: 'festive-attire-estiriel',
    character: {
      name: 'Festive Attire Estiriel',
      fileName: 'Festive_Attire_Estiriel',
      characterId: 2069,
    },
    weapon: getWeaponData('Magic_Grenade_of_annihilation.png'),
    accessory: (() => {
      const emeraldSet = getAccessorySet('emerald');
      const getImageForSlot = slot => {
        const piece = emeraldSet.pieces.find(p => p.type === slot);
        return piece ? piece.imageFile : `Gold_${slot}.png`;
      };
      return {
        name: 'Emerald 4 Set + 1 Random Rainbow',
        images: emeraldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(emeraldSet.setEffects),
        mainStats: [
          { slot: 'Tiara', imageFile: getImageForSlot('Tiara'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Earrings', imageFile: getImageForSlot('Earrings'), best: 'Mag Def', substat: 'Phys Def' },
          { slot: 'Necklace', imageFile: getImageForSlot('Necklace'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Bracelet', imageFile: getImageForSlot('Bracelet'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Ring', imageFile: getImageForSlot('Ring'), best: 'Healing', substat: 'HP' },
        ],
        substatPriority: {
          priority: ['HP'],
          secondary: ['Mag Def', 'Phys Def'],
          other: ['Healing'],
          tips: ['As a support, Festive Attire Estiriel prioritizes survivability. You don\'t need perfect substats - decent HP and DEF rolls are enough since her main role is providing support.'],
        },
      };
    })(),
  },
  shaty: {
    slug: 'shaty',
    character: {
      name: 'Shaty',
      fileName: 'Shaty',
      imageExt: 'png',
      characterId: 2072,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Spear_of_extermination.png'),
    accessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
        mainStats: getMainStats('Physical', 'DPS', 'gold'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },

  giselle: {
    slug: 'giselle',
    character: {
      name: 'Giselle',
      fileName: 'Giselle',
      characterId: 2088,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Spear_of_extermination.png'),
    accessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
        mainStats: getMainStats('Physical', 'DPS', 'gold'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },

  'festival-empress-shamshel': {
    slug: 'festival-empress-shamshel',
    character: {
      name: 'Festival Empress Shamshel',
      fileName: 'Festival_Empress_Shamshel',
      characterId: 2068,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Bullet_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
      const sapphireImg = slot => { const p = sapphireSet.pieces.find(x => x.type === slot); return p ? p.imageFile : `Sapphire_${slot}.png`; };
      const goldImg = slot => { const p = goldSet.pieces.find(x => x.type === slot); return p ? p.imageFile : `Gold_${slot}.png`; };
      return {
        name: 'Sapphire 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          sapphireSet.pieces.slice(1).map(p => p.imageFile),
          goldSet.pieces.slice(1).map(p => p.imageFile),
        ].flat(),
        setEffects: [
          { pieces: 2, effect: 'Magic Attack +10% (Sapphire)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
        mainStats: [
          { slot: 'Tiara', imageFile: 'Sapphire_Tiara.png', best: 'HP (SR)', substat: 'Mag Atk (3+ rolls)' },
          { slot: 'Earrings', imageFile: 'Gold_Earrings.png', best: 'Mag Crit (SSR)', substat: 'Mag Atk (3+ rolls)' },
          { slot: 'Necklace', imageFile: 'Gold_Necklace.png', best: 'Ultimate DMG (SSR)', substat: 'Mag Atk (3+ rolls)' },
          { slot: 'Bracelet', imageFile: 'Amethyst_Bracelet.png', best: 'Mag Atk (SSR)', substat: 'Mag Crit (3+ rolls)' },
          { slot: 'Ring', imageFile: 'Sapphire_Ring.png', best: 'Skill DMG (SR)', substat: 'Mag Atk (3+ rolls)' },
        ],
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: {
      name: 'Amethyst 4 Set + 1 Random SSR',
      images: getAccessorySet('amethyst').pieces.slice(1).map(p => p.imageFile),
      setEffects: formatSetEffects(getAccessorySet('amethyst').setEffects),
    },
  },

  artia: {
    slug: 'artia',
    character: {
      name: 'Artia',
      fileName: 'Artia',
      characterId: 2048,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Sword_of_annihilation.png'),
    accessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
        mainStats: getMainStats('Physical', 'DPS', 'gold'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },

  gemini: {
    slug: 'gemini',
    character: {
      name: 'Gemini',
      fileName: 'Gemini',
      characterId: 2052,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Spear_of_extermination.png'),
    accessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
        mainStats: getMainStats('Physical', 'DPS', 'gold'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },

  hildis: {
    slug: 'hildis',
    character: {
      name: 'Hildis',
      fileName: 'Hildis',
      characterId: 2054,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Gauntlet_of_Annihilation.png'),
    alternativeWeapons: [
      getWeaponData('Staff_of_annihilation.png'),
    ],
    weaponNote: 'The Annihilation Staff (Magic) is recommended over the Gauntlet because its MP Charge stat helps Hildis activate her ultimate faster, allowing her to apply debuffs more frequently. Since her main role is providing debuffs for the team, faster ult uptime is more valuable than raw physical damage.',
    accessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
        mainStats: getMainStats('Physical', 'DPS', 'gold'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },
};
