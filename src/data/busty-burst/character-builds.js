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
    weapon: getWeaponData('Crowwbow_of_annihilation.png'),
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

  lycorys: {
    slug: 'lycorys',
    character: {
      name: 'Lycorys',
      fileName: 'Lycorys',
      characterId: 2106,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Crowwbow_of_annihilation.png'),
    alternativeWeapons: [
      getWeaponData('Dragonwind_bow.png'),
    ],
    buildHighlight: 'Personal pick: The skill damage build (Dragonwind Bow + Ruby 2 + Amethyst 2) feels the best on Lycorys. Both of her skills deal damage and her passive boosts skill damage, so this build plays to those strengths with Physical ATK +10% and Skill Damage +10%.',
    weaponNote: 'The Dragonwind Bow is a strong alternative for a skill damage focused build. Its PAtk and Skill Damage stats synergize well with Lycorys\'s passive that increases skill damage, and the Action Speed+ ability lets her cycle skills faster.',
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
    alternativeAccessory: {
      name: 'Ruby 2 + Amethyst 2 + 1 Random SSR',
      images: [
        'Ruby_Tiara.png',
        'Ruby_Earring.png',
        'Amethyst_Necklace.png',
        'Amethyst_Bracelet.png',
      ],
      setEffects: [
        ...formatSetEffects(getAccessorySet('ruby').setEffects.filter(e => e.pieces === '2 Set')),
        ...formatSetEffects(getAccessorySet('amethyst').setEffects.filter(e => e.pieces === '2 Set')),
      ],
    },
  },

  trish: {
    slug: 'trish',
    character: {
      name: 'Trish',
      fileName: 'Trish',
      characterId: 2105,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
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
          tips: ['As a support, Trish prioritizes survivability to keep providing team buffs and healing.'],
        },
      };
    })(),
  },

  katisha: {
    slug: 'katisha',
    character: {
      name: 'Katisha',
      fileName: 'Katisha',
      characterId: 2107,
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

  liesel: {
    slug: 'liesel',
    character: {
      name: 'Liesel',
      fileName: 'Liesel',
      characterId: 2035,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Staff_of_annihilation.png'),
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
          tips: ['Liesel is a support that scales with survivability. Focus on keeping her alive so she can keep buffing the team.'],
        },
      };
    })(),
  },

  frey: {
    slug: 'frey',
    character: {
      name: 'Frey',
      fileName: 'Frey',
      characterId: 2051,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Staff_of_annihilation.png'),
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
          tips: ['Frey is a tank that needs to survive hits while taunting enemies. Stack HP and defensive stats.'],
        },
      };
    })(),
  },

  messeria: {
    slug: 'messeria',
    character: {
      name: 'Trance Dancer Messeria',
      fileName: 'Trance_Dancer_Messeria',
      characterId: 2044,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Axe_of_annihilation.png'),
    alternativeWeapons: [
      getWeaponData('Magic_Grenade_of_annihilation.png'),
    ],
    weaponNote: 'Since Trance Dancer Messeria is primarily a buffer and not a damage dealer, the Annihilation Grenade is recommended for its MP Charge stat, which helps her cycle buffs faster. Faster ult uptime is more valuable than raw damage.',
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

  'top-dancer-messeria': {
    slug: 'top-dancer-messeria',
    character: {
      name: 'Top Dancer Messeria',
      fileName: 'Top_Dancer_Messeria',
      characterId: 2089,
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
    weaponNote: 'Since Top Dancer Messeria is primarily a buffer and not a damage dealer, the Annihilation Staff is recommended for its MP Charge stat, which helps her cycle buffs faster. Faster ult uptime is more valuable than raw damage.',
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
          { slot: 'Tiara', imageFile: getImageForSlot('Tiara'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Earrings', imageFile: getImageForSlot('Earrings'), best: 'Phys Def', substat: 'Mag Def' },
          { slot: 'Necklace', imageFile: getImageForSlot('Necklace'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Bracelet', imageFile: getImageForSlot('Bracelet'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Ring', imageFile: getImageForSlot('Ring'), best: 'Healing', substat: 'HP' },
        ],
        substatPriority: {
          priority: ['HP'],
          secondary: ['Phys Def', 'Mag Def'],
          other: ['Healing'],
          tips: ['Top Dancer Messeria is a support that benefits from survivability stats to keep providing team buffs.'],
        },
      };
    })(),
  },

  teresia: {
    slug: 'teresia',
    character: {
      name: 'Teresia',
      fileName: 'Teresia',
      characterId: 2046,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Wand_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'dark-knight': {
    slug: 'dark-knight',
    character: {
      name: 'The Dark Knight',
      fileName: 'The_Dark_Knight',
      characterId: 2049,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Ringblade_of_Annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  luca: {
    slug: 'luca',
    character: {
      name: 'Luca',
      fileName: 'Luca',
      characterId: 2055,
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

  meinias: {
    slug: 'meinias',
    character: {
      name: 'Meinias',
      fileName: 'Meinias',
      characterId: 2058,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Crowwbow_of_annihilation.png'),
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

  lust: {
    slug: 'lust',
    character: {
      name: 'Lust',
      fileName: 'Lust',
      characterId: 2092,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Wand_of_annihilation.png'),
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
  },

  setsuka: {
    slug: 'setsuka',
    character: {
      name: 'Setsuka',
      fileName: 'Setsuka',
      characterId: 2059,
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

  kaguya: {
    slug: 'kaguya',
    character: {
      name: 'Kaguya',
      fileName: 'kaguya',
      characterId: 2071,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Bullet_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'dragon-crusher-medusa': {
    slug: 'dragon-crusher-medusa',
    character: {
      name: 'Dragon Crusher Medusa',
      fileName: 'Dragon_Crusher_Medusa',
      characterId: 2099,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Wand_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  ophelio: {
    slug: 'ophelio',
    character: {
      name: 'Ophelio',
      fileName: 'Ophelio',
      characterId: 2076,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Staff_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'killer-bikini-theresia': {
    slug: 'killer-bikini-theresia',
    character: {
      name: 'Killer Bikini Theresia',
      fileName: 'Killer_Bikini_Theresia',
      characterId: 2078,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Wand_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'seductive-high-cut-swimsuit-nerys': {
    slug: 'seductive-high-cut-swimsuit-nerys',
    character: {
      name: 'Seductive High-Cut Swimsuit Nerys',
      fileName: 'Seductive_High_Cut_Swimsuit_Nerys',
      characterId: 2077,
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
  },

  pastel: {
    slug: 'pastel',
    character: {
      name: 'Pastel',
      fileName: 'Pastel',
      characterId: 2080,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Gauntlet_of_Annihilation.png'),
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

  lucie: {
    slug: 'lucie',
    character: {
      name: 'Lucie',
      fileName: 'Lucie',
      characterId: 2073,
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

  rui: {
    slug: 'rui',
    character: {
      name: 'Rui',
      fileName: 'Rui',
      characterId: 2074,
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

  nue: {
    slug: 'nue',
    character: {
      name: 'Nue',
      fileName: 'Nue',
      characterId: 2075,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Gauntlet_of_Annihilation.png'),
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

  rosa: {
    slug: 'rosa',
    character: {
      name: 'Rosa',
      fileName: 'Rosa',
      characterId: 2085,
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

  lapis: {
    slug: 'lapis',
    character: {
      name: 'Lapis',
      fileName: 'Lapis',
      characterId: 2084,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Ringblade_of_Annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'chocolate-frey': {
    slug: 'chocolate-frey',
    character: {
      name: 'Chocolate Frey',
      fileName: 'Chocolate_Frey',
      characterId: 2109,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Gauntlet_of_Annihilation.png'),
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
          { slot: 'Tiara', imageFile: getImageForSlot('Tiara'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Earrings', imageFile: getImageForSlot('Earrings'), best: 'Phys Def', substat: 'Mag Def' },
          { slot: 'Necklace', imageFile: getImageForSlot('Necklace'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Bracelet', imageFile: getImageForSlot('Bracelet'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Ring', imageFile: getImageForSlot('Ring'), best: 'Healing', substat: 'HP' },
        ],
        substatPriority: {
          priority: ['HP'],
          secondary: ['Phys Def', 'Mag Def'],
          other: ['Healing'],
          tips: ['Chocolate Frey is a support that benefits from survivability stats to keep providing team heals, buffs, and debuffs.'],
        },
      };
    })(),
  },

  'chocolate-hildis': {
    slug: 'chocolate-hildis',
    character: {
      name: 'Chocolate Hildis',
      fileName: 'Chocolate_Hildis',
      characterId: 2110,
    },
    position: {
      name: 'Front',
      image: 'Front.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Staff_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'chocolate-shaty': {
    slug: 'chocolate-shaty',
    character: {
      name: 'Chocolate Shaty',
      fileName: 'Chocolate_Shaty',
      characterId: 2111,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Crowwbow_of_annihilation.png'),
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

  'elegant-portrait-shamshel': {
    slug: 'elegant-portrait-shamshel',
    character: {
      name: 'Elegant Portrait Shamshel',
      fileName: 'Elegant_Portrait_Shamshel',
      characterId: 2040,
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
  },

  natasha: {
    slug: 'natasha',
    character: {
      name: 'Natasha',
      fileName: 'Natasha',
      characterId: 2064,
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
          { slot: 'Tiara', imageFile: getImageForSlot('Tiara'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Earrings', imageFile: getImageForSlot('Earrings'), best: 'Phys Def', substat: 'Mag Def' },
          { slot: 'Necklace', imageFile: getImageForSlot('Necklace'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Bracelet', imageFile: getImageForSlot('Bracelet'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Ring', imageFile: getImageForSlot('Ring'), best: 'Healing', substat: 'HP' },
        ],
        substatPriority: {
          priority: ['HP'],
          secondary: ['Phys Def', 'Mag Def'],
          other: ['Healing'],
          tips: subStatTips,
        },
      };
    })(),
  },

  'seductive-vampire-soltina': {
    slug: 'seductive-vampire-soltina',
    character: {
      name: 'Seductive Vampire Soltina',
      fileName: 'Seductive_Vampire_Soltina',
      characterId: 2082,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: getWeaponData('Axe_of_annihilation.png'),
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

  'noble-succubus-empress-shamshel': {
    slug: 'noble-succubus-empress-shamshel',
    character: {
      name: 'Noble Succubus Empress Shamshel',
      fileName: 'Noble_Succubus_Empress_Shamshel',
      characterId: 2065,
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
  },

  'yu-lima-elka': {
    slug: 'yu-lima-elka',
    character: {
      name: 'Yu Lima Elka',
      fileName: 'Yu_Lima_Elka',
      characterId: 2060,
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

  hisara: {
    slug: 'hisara',
    character: {
      name: 'Hisara',
      fileName: 'Hisara',
      characterId: 2062,
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

  viatrice: {
    slug: 'viatrice',
    character: {
      name: 'Viatrice',
      fileName: 'Viatrice',
      characterId: 2104,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Magic_Grenade_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'the-strongest-witch-shaharl': {
    slug: 'the-strongest-witch-shaharl',
    character: {
      name: 'The Strongest Witch Shaharl',
      fileName: 'Shaharl',
      characterId: 2081,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Staff_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },

  'samurai-cow-girl-setsuka': {
    slug: 'samurai-cow-girl-setsuka',
    character: {
      name: 'Samurai Cow Girl Setsuka',
      fileName: 'Setsuka',
      characterId: 2094,
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

  raguen: {
    slug: 'raguen',
    character: {
      name: 'Raguen',
      fileName: 'Raguen',
      characterId: 2093,
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
          { slot: 'Tiara', imageFile: getImageForSlot('Tiara'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Earrings', imageFile: getImageForSlot('Earrings'), best: 'Phys Def', substat: 'Mag Def' },
          { slot: 'Necklace', imageFile: getImageForSlot('Necklace'), best: 'HP', substat: 'Phys Def' },
          { slot: 'Bracelet', imageFile: getImageForSlot('Bracelet'), best: 'HP', substat: 'Mag Def' },
          { slot: 'Ring', imageFile: getImageForSlot('Ring'), best: 'Healing', substat: 'HP' },
        ],
        substatPriority: {
          priority: ['HP'],
          secondary: ['Phys Def', 'Mag Def'],
          other: ['Healing'],
          tips: subStatTips,
        },
      };
    })(),
  },

  bianca: {
    slug: 'bianca',
    character: {
      name: 'Bianca',
      fileName: 'Bianca',
      characterId: 2063,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
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

  ishtovia: {
    slug: 'ishtovia',
    character: {
      name: 'Pious Healer Ishtovia',
      fileName: 'Pious_Healer_Ishtovia',
      characterId: 2045,
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
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
          tips: subStatTips,
        },
      };
    })(),
  },

  'magical-princess-luceria': {
    slug: 'magical-princess-luceria',
    character: {
      name: 'Magical Princess Luceria',
      fileName: 'Magical Princess Luceria',
      characterId: 2041,
    },
    position: {
      name: 'Mid',
      image: 'Mid.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: getWeaponData('Magic_Grenade_of_annihilation.png'),
    accessory: (() => {
      const sapphireSet = getAccessorySet('sapphire');
      const goldSet = getAccessorySet('gold');
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
  },
};
