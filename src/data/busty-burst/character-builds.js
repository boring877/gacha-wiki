import { accessoryItems } from './accessory-items.js';
import { mainStats, subStats, subStatTips } from './accessory-guide.js';

// Helper function to get accessory set by id
const getAccessorySet = id => {
  const allSets = [...accessoryItems.SSR, ...accessoryItems.SR];
  return allSets.find(set => set.id === id);
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
    },
    weapon: {
      name: 'Annihilation Grenade',
      image: 'Magic_Grenade_of_annihilation.png',
      effect: 'MP Regeneration+ Self gains MP Regeneration 200 for 3 seconds',
    },
    accessory: (() => {
      const emeraldSet = getAccessorySet('emerald');
      return {
        name: 'Emerald 4 Set + 1 Random Rainbow',
        images: emeraldSet.pieces.slice(1).map(p => p.imageFile),
        setEffects: formatSetEffects(emeraldSet.setEffects),
        mainStats: getMainStats('Magic', 'Support', 'emerald'),
        substatPriority: getSubstatPriority('Magic'),
      };
    })(),
  },
  shaty: {
    slug: 'shaty',
    character: {
      name: 'Shaty',
      fileName: 'Shaty',
      imageExt: 'png',
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Physical',
      image: 'Physical.png',
    },
    weapon: {
      name: 'Crowbow of Annihilation',
      image: 'Crowwbow_of_annihilation.png',
      effect: 'Physical damage boost for ranged attacks',
    },
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
    },
    position: {
      name: 'Back',
      image: 'Back.png',
    },
    attackType: {
      name: 'Magic',
      image: 'Magic.png',
    },
    weapon: {
      name: 'Annihilation Bullet',
      image: 'Bullet_of_annihilation.png',
      effect: 'MP Regeneration+ Self gains MP Regeneration 200 for 3 seconds',
    },
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
};
