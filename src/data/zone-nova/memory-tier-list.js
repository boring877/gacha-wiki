// Zone Nova Memory Tier List Data
// Memory card rankings organized by class
// Buckets use the 7 in-game classes (Tank/Warrior/Attacker/Destroyer/Supporter/Disruptor/Healer);
// every card sits in the class from its own data field in memories.js.

import { ZONE_NOVA_MEMORIES } from './memories.js';

// ⚠️  REMINDER: When adding/moving memories in tier lists below,
//     remember to update "lastUpdated" to today's date (YYYY-MM-DD)

export const MEMORY_TIER_DEFINITIONS = {
  SSS: {
    label: 'SSS',
    description: 'Best-in-class memory card. Defines the character entirely.',
  },
  SS: {
    label: 'SS',
    description: 'Excellent memory card that massively enhances the character.',
  },
  S: {
    label: 'S',
    description: 'Strong memory card that greatly enhances performance.',
  },
  A: {
    label: 'A',
    description: 'Good memory card with solid effects.',
  },
  Situational: {
    label: 'Situational',
    description: 'Niche memory card. Good in specific scenarios but not generally recommended.',
  },
};

export const MEMORY_TIER_ORDER = Object.keys(MEMORY_TIER_DEFINITIONS);

// Game class order (Tank=1 ... Healer=7)
export const MEMORY_CLASS_ORDER = [
  'Tank',
  'Warrior',
  'Attacker',
  'Destroyer',
  'Supporter',
  'Disruptor',
  'Healer',
];

export const MEMORY_TIER_LIST = {
  name: 'Memory Card Rankings by Class',
  lastUpdated: '2026-09-04',
  description:
    'Memory card rankings by class. Each character can only equip memories matching their class.',
  tiers: {
    Tank: {
      SSS: [{ name: "Sea Deity's Soft Ritual" }, { name: "Under the Holy Armor" }],
      SS: [
        { name: "Eating secretly in a cafe" },
        { name: "Her Trainer" },
        { name: "Simple Birdcage" },
        { name: "Suffocating Grace " },
        { name: "Suspect in the Night" },
      ],
      S: [{ name: "Drowning Lake Knight" }],
      A: [{ name: "Pennie Trying on New Clothes" }, { name: "TANK REMEM." }],
      Situational: [],
    },
    Warrior: {
      SSS: [{ name: "Afternoon tantrums" }, { name: "Wrong time of appearance" }],
      SS: [{ name: "Halloween candy" }, { name: "Pride or Tsundere?" }],
      S: [{ name: "Secret Garden" }],
      A: [
        { name: "The World Seems to Stand Still" },
        { name: "Behind the Laziness" },
        { name: "Heart-Pounding Swimsuit Aphrodite" },
        { name: "WARRIOR REMEM." },
      ],
      Situational: [],
    },
    Attacker: {
      SSS: [
        { name: "Frozen Heart" },
        { name: "King of Lust" },
        { name: "Shared Bath Time" },
        { name: "Weird eyes full of desire" },
      ],
      SS: [
        { name: "Black-Faced Fool" },
        { name: "Christmas present" },
        { name: "Lonely Dark Midnight" },
        { name: "Sunlit sweetness awaits " },
      ],
      S: [{ name: "Monster in the Dense Forest" }, { name: "Hero Never Resting" }, { name: "Perverted Little Nurse" }],
      A: [{ name: "Great Wizard's Roleplay" }, { name: "Secret Room Livestream" }, { name: "ATTACKER REMEM." }],
      Situational: [],
    },
    Destroyer: {
      SSS: [{ name: "A Dream of Peace" }],
      SS: [{ name: "Night of Blood and Storm" }, { name: "The Servant's Aspiration" }, { name: "Unreserved love" }],
      S: [{ name: "Reorganizing Revolution" }, { name: "The maid's bath" }, { name: "The Way of Revenge" }],
      A: [
        { name: "Self-Indulgence" },
        { name: "Annoying Classroom" },
        { name: "During Military Training" },
        { name: "Summer Nap Time" },
        { name: "DESTROYER REMEM." },
      ],
      Situational: [],
    },
    Supporter: {
      SSS: [
        { name: "Absolutely perfect buttocks" },
        { name: "Bath Time" },
        { name: "Hot Spring & Her " },
        { name: "Unholy Alliance" },
      ],
      SS: [{ name: "Awkward Appearance" }, { name: "The Loneliest Moment" }],
      S: [{ name: "And Also Chocolate" }, { name: "Dawn's Sunlight" }],
      A: [{ name: "Sleep Treasure" }, { name: "SUPPORTER REMEM." }],
      Situational: [],
    },
    Disruptor: {
      SSS: [{ name: "The Knight and the Fuzzy" }],
      SS: [
        { name: "A perfect makeup look?" },
        { name: "Discipline Director" },
        { name: "Nutrition Studies" },
        { name: "Reading by Lamplight" },
      ],
      S: [
        { name: "Cute Little Things" },
        { name: "True Order" },
        { name: "A Break Amidst the Hustle" },
        { name: "Flower of the Battlefield" },
        { name: "The Reason for Slumber" },
        { name: "Ultimate Temptation of Deception" },
      ],
      A: [{ name: "DISRUPTOR REMEM." }],
      Situational: [],
    },
    Healer: {
      SSS: [{ name: "Serpentine Frenzy " }, { name: "The Beauty of Heikyo Castle" }],
      SS: [
        { name: "A Smile to Topple Cities" },
        { name: "Are the glasses the real thing?" },
        { name: "Gentle Morning Command" },
        { name: "Late-Night Work" },
      ],
      S: [{ name: "Beautiful Moon" }, { name: "Her Truest Self" }, { name: "Realm of Solitude" }],
      A: [{ name: "Ancient Fatigue Relief" }, { name: "HEALER REMEM." }],
      Situational: [],
    },
  },
};

const MEMORY_BY_NAME = Object.fromEntries(
  ZONE_NOVA_MEMORIES.map(memory => [memory.name, memory])
);

function createEmptyTierBuckets() {
  return Object.fromEntries(MEMORY_TIER_ORDER.map(tier => [tier, []]));
}

export function getGroupedMemorySections() {
  const sections = new Map();

  MEMORY_CLASS_ORDER.forEach(className => {
    const classTiers = MEMORY_TIER_LIST.tiers[className];
    if (!classTiers) return;

    const tiers = createEmptyTierBuckets();

    MEMORY_TIER_ORDER.forEach(tier => {
      (classTiers[tier] || []).forEach(entry => {
        const memory = MEMORY_BY_NAME[entry.name];
        if (memory) {
          tiers[tier].push({ name: memory.name });
        }
      });
    });

    const topTier = MEMORY_TIER_ORDER.find(tier => tiers[tier].length > 0) || 'Situational';
    const totalMemories = MEMORY_TIER_ORDER.reduce(
      (count, tier) => count + tiers[tier].length,
      0
    );

    if (totalMemories > 0) {
      sections.set(className, {
        key: className.toLowerCase().replace(/\s+/g, '-'),
        label: className,
        tiers,
        topTier,
        topMemories: tiers[topTier],
        totalMemories,
      });
    }
  });

  return [...sections.values()].sort((a, b) => {
    const aIndex = MEMORY_CLASS_ORDER.indexOf(a.label);
    const bIndex = MEMORY_CLASS_ORDER.indexOf(b.label);
    if (aIndex === -1 && bIndex === -1) return a.label.localeCompare(b.label);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

export function getMemoryByName(name) {
  return MEMORY_BY_NAME[name] || null;
}
