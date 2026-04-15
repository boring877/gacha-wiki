// Zone Nova Memory Tier List Data
// Memory card rankings organized by class
// Class comes from memory's own class field; falls back to character's class from characters.js

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

export const MEMORY_CLASS_ORDER = [
  'Warrior',
  'Mage',
  'Rogue',
  'Guardian',
  'Attacker',
  'Buffer',
  'Debuffer',
  'Disruptor',
  'Healer',
  'Destroyer',
];

// Verified class mapping from memories.js (memory's own class field takes priority over character class)
// ** = memory class differs from character class
//
// Warrior: Pride or Tsundere? (Pride-Lucifer), Secret Garden (Afrodite), Behind the Regret (Mordred),
//         Halloween Candy (Nina), The World Seems to Have Stopped (Artemis), Wrong Appearance Timing (Apep)
// Mage: Night of Bloody Storm (Arthur), The maid's bath (Hiyori), Annoying Classroom (Bastet),
//        During Military Academy Training (Rose), Self-Release (Lyra), Method of Revenge (Greed Mammon),
//        Revolutionary Restructuring (Cleopatra), Unreserved Love (Shuten-doji), Lamplight Study (Frigga)
// Rogue: Heroes, Never Stop (Shanna), I am your Christmas present. (Sigurd), Strange Gaze Full of Desire (Hela),
//        Frozen Heart (Yuis), Lonely Dark Deep Night (Chiya), Hera Memory (Hera),
//        Perverted Little Nurse (Leviathan), Secret Room Reality (Tefnut), Shared Bath Time (Odin)
// Guardian: Suffocating Grace (Wrath-Samael), Her Trainer (Penny), Simple Birdcage (Guinevere),
//          Lancelot-HerTrainer (Lancelot), Night Assault Suspect (Thor), In the Cafe, Sneaking a Bite (Lily)
// Buffer: Frost Dominion (Naiya), Embarrassing Pattern (Athena),
//         The Loneliest Moment (Apollo), Absolutely Perfect Arms (Morgan Le Fay),
//         Sleep Treasure (Zashiki-warashi), Hot Spring & Her (Tamamo-no-Mae)
// Debuffer: Nutrition Studies (Gluttony-Beelzebub), Cute Little Thing (Horus),
//           Battlefield Flower (Nini), Busy Officer (Shu), Sleepy Guardian (Belphegar),
//           True Order (Loki), Deceptive Ultimate Temptation (generic)
// Healer: A Smile That Topples Cities (Gaia), Beautiful Moon (Jorogumo),
//         The Most Real Her (Jeanne D Arc), Midnight Work (Anubis),
//         The Beauty of Heijing Castle (Snow Girl), Solitary Realm (Kela)

export const MEMORY_TIER_LIST = {
  name: 'Memory Card Rankings by Class',
  lastUpdated: '2026-04-15',
  description:
    'Memory card rankings by class. Each character can only equip memories matching their class.',
  tiers: {
    Warrior: {
      SSS: [{ name: 'Wrong Appearance Timing' }, { name: 'King of Lust' }],
      SS: [{ name: 'Pride or Tsundere?' }, { name: 'Halloween Candy' }],
      S: [
        { name: 'Secret Garden' },
      ],
      A: [
        { name: 'The World Seems to Have Stopped' },
        { name: 'Behind the Regret' },
      ],
      Situational: [],
    },
    Mage: {
      SSS: [],
      SS: [{ name: "Slave's Original Wish (奴仆的原愿)" }, { name: 'Night of Bloody Storm' }, { name: 'Unreserved Love' }],
      S: [{ name: "The maid's bath" },
        { name: 'Method of Revenge' },
      ],
      A: [
        { name: 'Annoying Classroom' },
        { name: 'During Military Academy Training' },
        { name: "Self-Release (自我放纵)" },
      ],
      Situational: [],
    },
    Rogue: {
      SSS: [{ name: 'Shared Bath Time' }, { name: 'Strange Gaze Full of Desire' }, { name: 'Frozen Heart' }],
      SS: [{ name: 'I am your Christmas present.' }, { name: 'Lonely Dark Deep Night' }, { name: 'Hera Memory' }],
      S: [
        { name: 'Heroes, Never Stop' },
        { name: "Perverted Little Nurse (变态小护士)" },
      ],
      A: [
        { name: 'Secret Room Reality' },
      ],
      Situational: [],
    },
    Guardian: {
      SSS: [],
      SS: [{ name: 'Suffocating Grace' }, { name: 'Night Assault Suspect' }, { name: 'Simple Birdcage' }, { name: 'Lancelot-HerTrainer' }, { name: 'In the Cafe, Sneaking a Bite' }],
      S: [
        { name: 'Her Trainer' },
      ],
      A: [],
      Situational: [],
    },
    Attacker: {
      SSS: [],
      SS: [],
      S: [],
      A: [],
      Situational: [],
    },
    Buffer: {
      SSS: [{ name: 'Absolutely Perfect Arms' }, { name: 'Hot Spring & Her' }, { name: 'Bath Time' }],
      SS: [{ name: 'Embarrassing Pattern' }, { name: 'The Loneliest Moment' }],
      S: [
        { name: 'Frost Dominion' },
      ],
      A: [
        { name: 'Sleep Treasure' },
      ],
      Situational: [],
    },
    Debuffer: {
      SSS: [],
      SS: [{ name: 'Nutrition Studies' }, { name: 'Lamplight Study' }],
      S: [
        { name: 'Battlefield Flower' },
        { name: 'Busy Officer (忙里偷闲)' },
        { name: 'Sleepy Guardian' },
        { name: 'True Order (真正的秩序)' },
        { name: 'Deceptive Ultimate Temptation' },
        { name: 'Cute Little Thing' },
      ],
      A: [],
      Situational: [],
    },
    Disruptor: {
      SSS: [],
      SS: [],
      S: [],
      A: [],
      Situational: [],
    },
    Healer: {
      SSS: [{ name: 'The Beauty of Heijing Castle' }],
      SS: [{ name: 'A Smile That Topples Cities' }, { name: 'Midnight Work' }],
      S: [
        { name: 'Beautiful Moon' },
        { name: 'The Most Real Her' },
        { name: 'Solitary Realm (一人之境)' },
      ],
      A: [],
      Situational: [],
    },
    Destroyer: {
      SSS: [],
      SS: [],
      S: [],
      A: [],
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
