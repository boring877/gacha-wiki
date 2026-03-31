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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          amethystSet.pieces[0].imageFile,
          amethystSet.pieces[1].imageFile,
          goldSet.pieces[0].imageFile,
          goldSet.pieces[1].imageFile,
        ],
        setEffects: [
          { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessories: [
      (() => {
        const amethystSet = getAccessorySet('amethyst');
        const goldSet = getAccessorySet('gold');
        return {
          name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
          images: [
            amethystSet.pieces[0].imageFile,
            amethystSet.pieces[1].imageFile,
            goldSet.pieces[0].imageFile,
            goldSet.pieces[1].imageFile,
          ],
          setEffects: [
            { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
            { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
          ],
        };
      })(),
      (() => {
        const goldSet = getAccessorySet('gold');
        const sapphireSet = getAccessorySet('sapphire');
        return {
          name: 'Gold 2 Set + Sapphire 2 Set + 1 Random SSR',
          images: [
            goldSet.pieces[0].imageFile,
            goldSet.pieces[1].imageFile,
            sapphireSet.pieces[0].imageFile,
            sapphireSet.pieces[1].imageFile,
          ],
          setEffects: [
            { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
            { pieces: 2, effect: 'Magic Attack +10% (Sapphire)' },
          ],
        };
      })(),
    ],
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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          amethystSet.pieces[0].imageFile,
          amethystSet.pieces[1].imageFile,
          goldSet.pieces[0].imageFile,
          goldSet.pieces[1].imageFile,
        ],
        setEffects: [
          { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'Support', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          amethystSet.pieces[0].imageFile,
          amethystSet.pieces[1].imageFile,
          goldSet.pieces[0].imageFile,
          goldSet.pieces[1].imageFile,
        ],
        setEffects: [
          { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          amethystSet.pieces[0].imageFile,
          amethystSet.pieces[1].imageFile,
          goldSet.pieces[0].imageFile,
          goldSet.pieces[1].imageFile,
        ],
        setEffects: [
          { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
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
        mainStats: getMainStats('Physical', 'Support', 'gold'),
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
      const emeraldSet = getAccessorySet('emerald');
      return {
        name: 'Emerald 4 Set + 1 Random SSR',
        images: emeraldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(emeraldSet.setEffects),
        mainStats: getMainStats('Physical', 'Support', 'emerald'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
    alternativeAccessory: (() => {
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Gold 4 Set + 1 Random SSR',
        images: goldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(goldSet.setEffects),
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
  lapis: {
    slug: 'lapis',
    character: {
      name: 'Lapis',
      fileName: 'Lapis',
      characterId: 2084,
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
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      const goldSet = getAccessorySet('gold');
      return {
        name: 'Amethyst 2 Set + Gold 2 Set + 1 Random SSR',
        images: [
          amethystSet.pieces[0].imageFile,
          amethystSet.pieces[1].imageFile,
          goldSet.pieces[0].imageFile,
          goldSet.pieces[1].imageFile,
        ],
        setEffects: [
          { pieces: 2, effect: 'Skill Damage +10% (Amethyst)' },
          { pieces: 2, effect: 'Ultimate Damage +5% (Gold)' },
        ],
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

  // Valentine's 2026 Chocolate Event Characters
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
    weapon: getWeaponData('Staff_of_annihilation.png'),
    accessory: (() => {
      const emeraldSet = getAccessorySet('emerald');
      const getImageForSlot = slot => {
        const piece = emeraldSet.pieces.find(p => p.type === slot);
        return piece ? piece.imageFile : `Gold_${slot}.png`;
      };
      return {
        name: 'Emerald 4 Set + 1 Random SSR',
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
          tips: ['As a support healer, Chocolate Frey prioritizes survivability over damage stats. You don\'t need perfect substats - decent HP and DEF rolls are enough since her main role is providing buffs and healing.'],
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
    alternativeWeapons: [
      getWeaponData('Dragonmind_grimoire.png'),
    ],
    accessory: (() => {
      const amethystSet = getAccessorySet('amethyst');
      return {
        name: 'Amethyst 4 Set + 1 Random SSR',
        images: amethystSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(amethystSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'amethyst'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
    alternativeAccessory: (() => {
      const emeraldSet = getAccessorySet('emerald');
      return {
        name: 'Emerald 4 Set + 1 Random SSR (Action Speed for Debuff)',
        images: emeraldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(emeraldSet.setEffects),
        mainStats: getMainStats('Magic', 'DPS', 'emerald'),
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
};
