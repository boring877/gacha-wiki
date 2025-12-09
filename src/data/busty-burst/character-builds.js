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
const getMainStats = (roleType, role) => {
  const atkStat = roleType === 'Physical' ? 'Phys Atk' : 'Mag Atk';
  const critStat = roleType === 'Physical' ? 'Phys Crit' : 'Mag Crit';

  return mainStats.map(stat => {
    // Customize based on role type and role
    if (stat.slot === 'Crown') {
      return { ...stat, best: 'HP', substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Earrings') {
      return { ...stat, best: critStat, substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Necklace') {
      return { ...stat, best: 'Ultimate DMG', substat: `${atkStat} (3+ rolls)` };
    }
    if (stat.slot === 'Bracelet') {
      // Bracelet main stat is Atk, so substat should be Crit
      return { ...stat, best: atkStat, substat: `${critStat} (3+ rolls)` };
    }
    if (stat.slot === 'Ring') {
      // DPS gets Skill DMG, Healer/Support gets Healing
      return {
        ...stat,
        best: role === 'DPS' ? 'Skill DMG' : 'Healing',
        substat: `${atkStat} (3+ rolls)`,
      };
    }
    return { ...stat, substat: `${atkStat} (3+ rolls)` };
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
        mainStats: getMainStats('Magic', 'Support'),
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
        mainStats: getMainStats('Physical', 'DPS'),
        substatPriority: getSubstatPriority('Physical'),
      };
    })(),
  },
};
