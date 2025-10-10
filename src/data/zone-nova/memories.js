// Zone Nova Memory Database
// Centralized memory data for sorting, filtering, and display

import { getCharacterClass } from './characters.js';

export const ZONE_NOVA_MEMORIES = [
  {
    id: 'ancient-method-to-eliminate-fatigue',
    slug: 'ancient-method-to-eliminate-fatigue',
    name: 'Ancient Method to Eliminate Fatigue',
    image: '/images/games/zone-nova/memories/Ancient-Method-to-Eliminate-Fatigue.jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Healer', // Healer class
    detailUrl: '/guides/zone-nova/memories/ancient-method-to-eliminate-fatigue/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Restriction: Only effective for healers',
      'Cost: 5-price awakening',
      'Healing amount increased by 30%',
      'Each time healing, healing target gains +20% attack for 3 seconds',
    ],
  },
  {
    id: 'annihilation-users-reminiscence',
    slug: 'annihilation-users-reminiscence',
    name: 'Increase User Attack',
    image: '/images/games/zone-nova/memories/Increase-User-Attack.jpg',
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Mage', // Mage class
    detailUrl: '/guides/zone-nova/memories/annihilation-users-reminiscence/',
    stats: {
      hp: 3360,
      attack: 520,
      defense: 316,
    },
    effects: ['Attack increases by 32%'],
  },
  {
    id: 'embarrassing-pattern',
    slug: 'embarrassing-pattern',
    name: 'Embarrassing Pattern',
    image: '/images/games/zone-nova/memories/Athenacard.jpg',
    rarity: 'SSR',
    element: 'Wind',
    character: 'Athena',
    detailUrl: '/guides/zone-nova/memories/embarrassing-pattern/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: [
      'After battle start: All allies defense +40%, normal attack damage +40%',
      'When equipped character deals 5 normal attack damage: All team attack power +40% for 5 seconds',
    ],
  },
  {
    id: 'frost-dominion',
    slug: 'frost-dominion',
    name: 'Frost Dominion',
    image: '/images/games/zone-nova/memories/naiyacard.jpg',
    rarity: 'SSR',
    element: 'Ice',
    character: 'Naiya',
    detailUrl: '/guides/zone-nova/memories/frost-dominion/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: [
      'Attack power increased by 40%',
      'Team Must-Kill Damage increased by 40% for 5 seconds after Ultimate: Enhances team finishing power after ultimate usage',
    ],
  },
  {
    id: 'great-mages-role-playing',
    slug: 'great-mages-role-playing',
    name: "Great Mage's Role Playing",
    image: "/images/games/zone-nova/memories/Great-Mage's-Role-Playing.jpg",
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Rogue', // Rogue class
    detailUrl: '/guides/zone-nova/memories/great-mages-role-playing/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: [
      'Restriction: Only effective for strikers',
      'Cost: 5-price awakening',
      'Attack power increased by 20%',
      'When enemies on field are fewer than 2, increases crit damage by 36%',
    ],
  },
  {
    id: 'lamplight-study',
    slug: 'lamplight-study',
    name: 'Lamplight Study',
    image: '/images/games/zone-nova/memories/Freyecard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Freye',
    detailUrl: '/guides/zone-nova/memories/lamplight-study/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: [
      'Attack power increased by 40%',
      'Ultimate skill damage can apply [Fate Bind]. Each stack of [Fate Bind] increases damage taken by 3.6%, lasts 10 seconds, maximum 10 stacks',
    ],
  },
  {
    id: 'guerrilla-users-reminiscence',
    slug: 'guerrilla-users-reminiscence',
    name: "Guerrilla User's Reminiscence",
    image: '/images/games/zone-nova/memories/Increase-User-Attack-TwoSwords.jpg',
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Rogue', // Rogue class
    detailUrl: '/guides/zone-nova/memories/guerrilla-users-reminiscence/',
    stats: {
      hp: 3360,
      attack: 520,
      defense: 316,
    },
    effects: ['Attack increases by 32%'],
  },
  {
    id: 'guardian-users-reminiscence',
    slug: 'guardian-users-reminiscence',
    name: "Guardian User's Reminiscence",
    image: '/images/games/zone-nova/memories/Guardian-User-Defence.jpg',
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Guardian', // Guardian class
    detailUrl: '/guides/zone-nova/memories/guardian-users-reminiscence/',
    stats: {
      hp: 4400,
      attack: 320,
      defense: 460,
    },
    effects: ['Defense increases by 48%'],
  },
  {
    id: 'healers-memory',
    slug: 'healers-memory',
    name: "Healer's Memory",
    image: "/images/games/zone-nova/memories/Healer's-Memory.jpg",
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Healer', // Healer class
    detailUrl: '/guides/zone-nova/memories/healers-memory/',
    stats: {
      hp: 4000,
      attack: 400,
      defense: 400,
    },
    effects: [
      'Restriction: Only effective for healers',
      'Cost: 5-price awakening',
      'Healing amount increased by 40%',
    ],
  },
  {
    id: 'her-trainer',
    slug: 'her-trainer',
    name: 'Her Trainer',
    image: '/images/games/zone-nova/memories/pennycard.jpg',
    rarity: 'SSR',
    element: 'Wind',
    character: 'Penny',
    detailUrl: '/guides/zone-nova/memories/her-trainer/',
    stats: {
      hp: 8600,
      attack: 480,
      defense: 690,
    },
    effects: [
      'Defense increased by 60%',
      'After using ultimate skill, equipped character takes 10% less damage for 5 seconds',
      'Shield amount applied by ultimate skills increased by 20%',
    ],
  },
  {
    id: 'kings-sword',
    slug: 'kings-sword',
    name: "King's Sword",
    image: '/images/games/zone-nova/memories/Merlincard.jpg',
    rarity: 'SSR',
    element: 'Fire',
    character: 'Merlin',
    detailUrl: '/guides/zone-nova/memories/kings-sword/',
    stats: {
      hp: 5280,
      attack: 857,
      defense: 348,
    },
    effects: [
      'Attack increased by 40%',
      'Must kill damage increased by 40% when the target is the only enemy',
      'Critical rate increased by 12%',
    ],
  },
  {
    id: 'during-military-academy-training',
    slug: 'during-military-academy-training',
    name: 'During Military Academy Training',
    image: '/images/games/zone-nova/memories/Rosecard.jpg',
    rarity: 'SR',
    element: 'Fire',
    character: 'Rose',
    detailUrl: '/guides/zone-nova/memories/during-military-academy-training/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: ['Ultimate skill boosts normal attack and skill damage by 60% for 10 seconds'],
  },
  {
    id: 'the-loneliest-moment',
    slug: 'the-loneliest-moment',
    name: 'The Loneliest Moment',
    image: '/images/games/zone-nova/memories/Apollocard.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Apollo',
    detailUrl: '/guides/zone-nova/memories/the-loneliest-moment/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: ['Battle start damage boost and energy efficiency boost'],
  },
  {
    id: 'lancelot-hertrainer',
    slug: 'lancelot-hertrainer',
    name: 'Lancelot-HerTrainer',
    image: '/images/games/zone-nova/memories/Lancelotcard.jpg',
    rarity: 'SR',
    element: 'Wind',
    character: 'Lancelot',
    detailUrl: '/guides/zone-nova/memories/lancelot-hertrainer/',
    stats: {
      hp: 5500,
      attack: 400,
      defense: 575,
    },
    effects: [
      'Guardian class restriction, 5th stage awakening required',
      'Defense +36%, team damage reduction +8% on battle start',
    ],
  },
  {
    id: 'annoying-classroom',
    slug: 'annoying-classroom',
    name: 'Annoying Classroom',
    image: '/images/games/zone-nova/memories/Bastetcard.jpg',
    rarity: 'SR',
    element: 'Wind',
    character: 'Bastet',
    detailUrl: '/guides/zone-nova/memories/annoying-classroom/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: ['Ultimate damage scaling based on enemy count'],
  },
  {
    id: 'simple-birdcage',
    slug: 'simple-birdcage',
    name: 'Simple Birdcage',
    image: '/images/games/zone-nova/memories/Guinevere-card.jpg',
    rarity: 'SSR',
    element: 'Wind',
    character: 'Guinevere',
    detailUrl: '/guides/zone-nova/memories/simple-birdcage/',
    stats: {
      hp: 6600,
      attack: 480,
      defense: 690,
    },
    effects: ['Defense boost, block enhancement, and battle start shield'],
  },
  {
    id: 'sister-penny-trying-on-new-clothes',
    slug: 'sister-penny-trying-on-new-clothes',
    name: 'Sister Penny Trying on New Clothes',
    image: '/images/games/zone-nova/memories/Sister-Penny-Trying-on-New Clothes.jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Guardian', // Guardian class
    detailUrl: '/guides/zone-nova/memories/sister-penny-trying-on-new-clothes/',
    stats: {
      hp: 5500,
      attack: 400,
      defense: 575,
    },
    effects: [
      'Guardian class restriction, 5-price awakening',
      'HP +24%, ultimate damage reduction +10% for 5 seconds',
    ],
  },
  {
    id: 'cute-little-thing',
    slug: 'cute-little-thing',
    name: 'Cute Little Thing',
    image: '/images/games/zone-nova/memories/Horuscard.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Horus',
    detailUrl: '/guides/zone-nova/memories/cute-little-thing/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Class Restriction: Only effective for Debuffer class',
      '5th Stage Awakening Required',
      'Effect 1: Attack power increases by 40%',
      'Effect 2: When dealing continuous damage, targets take 24% increased damage for 3 seconds',
    ],
  },
  {
    id: 'deceptive-ultimate-temptation',
    slug: 'deceptive-ultimate-temptation',
    name: 'Deceptive Ultimate Temptation',
    image: '/images/games/zone-nova/memories/Deceptive-Ultimate-Temptation.jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Debuffer', // Debuffer class
    detailUrl: '/guides/zone-nova/memories/deceptive-ultimate-temptation/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Restriction: Only effective for disruptors',
      'Cost: 5-price awakening',
      'Attack increased by 20%',
      'When attacking enemies with negative status, damage increased by 20%',
    ],
  },
  {
    id: 'solitary-realm',
    slug: 'solitary-realm',
    name: 'Solitary Realm (一人之境)',
    image: '/images/games/zone-nova/memories/kelacard.jpg',
    rarity: 'SR',
    element: 'Holy',
    character: 'Kela',
    detailUrl: '/guides/zone-nova/memories/solitary-realm/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Solitary Realm (一人之境): Healing amount increased by 30%',
      'Protection Effect: When healing a target below 50% max HP, the target receives 8% damage reduction for 10 seconds',
    ],
  },
  {
    id: 'battlefield-flower',
    slug: 'battlefield-flower',
    name: 'Battlefield Flower',
    image: '/images/games/zone-nova/memories/ninicard.jpg',
    rarity: 'SR',
    element: 'Ice',
    character: 'Nini',
    detailUrl: '/guides/zone-nova/memories/battlefield-flower/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Battlefield Flower: For each negative effect on the target, damage dealt increases by 20%, maximum 3 stacks',
    ],
  },
  {
    id: 'busy-officer',
    slug: 'busy-officer',
    name: 'Busy Officer (忙里偷闲)',
    image: '/images/games/zone-nova/memories/shucard.jpg',
    rarity: 'SR',
    element: 'Wind',
    character: 'Shu',
    detailUrl: '/guides/zone-nova/memories/busy-officer/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'When dealing continuous damage effects: Target takes 12% increased damage for 2 seconds',
    ],
  },
  {
    id: 'heroes-never-stop',
    slug: 'heroes-never-stop',
    name: 'Heroes, Never Stop',
    image: '/images/games/zone-nova/memories/Shannacard.jpg',
    rarity: 'SR',
    element: 'Fire',
    character: 'Shanna',
    detailUrl: '/guides/zone-nova/memories/heroes-never-stop/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: [
      'When the number of enemies on field is less than 2: Increase critical hit damage by 72%',
    ],
  },
  {
    id: 'the-beauty-of-heijing-castle',
    slug: 'the-beauty-of-heijing-castle',
    name: 'The Beauty of Heijing Castle',
    image: '/images/games/zone-nova/memories/Snowcard.jpg',
    rarity: 'SR',
    element: 'Ice',
    character: 'Snow Girl',
    detailUrl: '/guides/zone-nova/memories/the-beauty-of-heijing-castle/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Only effective for healers, 5-price awakening',
      "The Beauty of Heijing Castle: Healing amount +30%, when recovering targets' life value is full, target damage +24% for 10 seconds",
    ],
  },
  {
    id: 'secret-room-reality',
    slug: 'secret-room-reality',
    name: 'Secret Room Reality',
    image: '/images/games/zone-nova/memories/Tefnutcard.jpg',
    rarity: 'SR',
    element: 'Holy',
    character: 'Tefnut',
    detailUrl: '/guides/zone-nova/memories/secret-room-reality/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: ['Continuous Damage Penetration Rate +36%'],
  },
  {
    id: 'secret-garden',
    slug: 'secret-garden',
    name: 'Secret Garden',
    image: '/images/games/zone-nova/memories/Afroditecard.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Afrodite',
    detailUrl: '/guides/zone-nova/memories/secret-garden/',
    stats: {
      hp: 6400,
      attack: 784,
      defense: 318,
    },
    effects: [
      'Attack power increased by 40%',
      'When equipped character releases enhanced ultimate or higher: Damage increased by 40% for 10 seconds',
      'Total Potential: 40% base attack + 40% conditional damage boost with enhanced ultimates',
    ],
  },
  {
    id: 'frozen-heart',
    slug: 'frozen-heart',
    name: 'Frozen Heart',
    image: '/images/games/zone-nova/memories/Yuiscard.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Yuis',
    detailUrl: '/guides/zone-nova/memories/frozen-heart/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Crit rate increased by 34%',
      "Equipment wearer's pursuit damage and crit damage increased by 68%",
    ],
  },
  {
    id: 'sleep-treasure',
    slug: 'sleep-treasure',
    name: 'Sleep Treasure',
    image: '/images/games/zone-nova/memories/Zashiki-warashicard.jpg',
    rarity: 'SR',
    element: 'Fire',
    character: 'Zashiki-warashi',
    detailUrl: '/guides/zone-nova/memories/sleep-treasure/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'After releasing ultimate: Team damage increases by 24% for 10 seconds',
      'Additionally: Has 50% chance to make team critical damage additionally increase by 20% for 10 seconds',
    ],
  },
  {
    id: 'perverted-little-nurse',
    slug: 'perverted-little-nurse',
    name: 'Perverted Little Nurse (变态小护士)',
    image: '/images/games/zone-nova/memories/Leviathancard.jpg',
    rarity: 'SR',
    element: 'Wind',
    character: 'Leviathan',
    detailUrl: '/guides/zone-nova/memories/perverted-little-nurse/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: [
      'Critical Rate Boost: After causing pursuit damage, critical rate increased by 36% for 10 seconds',
    ],
  },
  {
    id: 'qianjues-reminiscence',
    slug: 'qianjues-reminiscence',
    name: "Qianjue's Reminiscence",
    image: "/images/games/zone-nova/memories/Qianjue's-Reminiscence.jpg",
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Debuffer', // Debuffer class
    detailUrl: '/guides/zone-nova/memories/qianjues-reminiscence/',
    stats: {
      hp: 4000,
      attack: 400,
      defense: 400,
    },
    effects: ['When attacking enemies with negative status effects, damage increases by 32%'],
  },
  {
    id: 'true-order',
    slug: 'true-order',
    name: 'True Order (真正的秩序)',
    image: '/images/games/zone-nova/memories/Lokicard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Loki',
    detailUrl: '/guides/zone-nova/memories/true-order/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: [
      'Attack Enhancement: Attack power increased by 40%',
      'Vulnerability Mark: The last enemy hit by any attack takes 24% increased damage',
    ],
  },
  {
    id: 'slaves-original-wish',
    slug: 'slaves-original-wish',
    name: "Slave's Original Wish (奴仆的原愿)",
    image: '/images/games/zone-nova/memories/Freyacard.jpg',
    rarity: 'SSR',
    element: 'Ice',
    character: 'Freya',
    detailUrl: '/guides/zone-nova/memories/slaves-original-wish/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Critical Damage increased by 72%',
      'For each enemy on the battlefield: Normal attack damage increases by 12% Maximum stacks: 4 (up to 48% bonus normal attack damage)',
    ],
  },
  {
    id: 'self-release',
    slug: 'self-release',
    name: 'Self-Release (自我放纵)',
    image: '/images/games/zone-nova/memories/Lyracard.jpg',
    rarity: 'SSR',
    element: 'Fire',
    character: 'Lyra',
    detailUrl: '/guides/zone-nova/memories/self-release/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Ultimate Damage: Ultimate damage increased by 40%',
      "Single Target Bonus: When there's one enemy on the field, ultimate damage additionally increases by 10%, maximum 4 times",
      'Maximum Potential: Up to 80% ultimate damage boost vs single targets (40% + 40%)',
    ],
  },
  {
    id: 'behind-the-regret',
    slug: 'behind-the-regret',
    name: 'Behind the Regret',
    image: '/images/games/zone-nova/memories/mordredcard.jpg',
    rarity: 'SR',
    element: 'Fire',
    character: 'Mordred',
    detailUrl: '/guides/zone-nova/memories/behind-the-regret/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: ['HP increased by 24%', 'Self healing amount increased by 30%'],
  },
  {
    id: 'midnight-work',
    slug: 'midnight-work',
    name: 'Midnight Work',
    image: '/images/games/zone-nova/memories/Anubiscard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Anubis',
    detailUrl: '/guides/zone-nova/memories/midnight-work/',
    stats: {
      hp: 6000,
      attack: 800,
      defense: 600,
    },
    effects: [
      'Healing amount +50%, each healing within 3 seconds gives target +40% attack power for 3 seconds',
    ],
  },
  {
    id: 'the-world-seems-to-have-stopped',
    slug: 'the-world-seems-to-have-stopped',
    name: 'The World Seems to Have Stopped',
    image: '/images/games/zone-nova/memories/Artemiscard.jpg',
    rarity: 'SSR',
    element: 'Wind',
    character: 'Artemis',
    detailUrl: '/guides/zone-nova/memories/the-world-seems-to-have-stopped/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: ['Attack power increased by 40%', 'When HP is below 50%: All damage increased by 40%'],
  },

  {
    id: 'support-users-reminiscence',
    slug: 'support-users-reminiscence',
    name: "Support User's Reminiscence",
    image: "/images/games/zone-nova/memories/Support-User's-Reminiscence.jpg",
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Buffer', // Buffer class
    detailUrl: '/guides/zone-nova/memories/support-users-reminiscence/',
    stats: {
      hp: 4000,
      attack: 400,
      defense: 400,
    },
    effects: ['All team damage increases by 20%'],
  },
  {
    id: 'strong-attack-users-reminiscence',
    slug: 'strong-attack-users-reminiscence',
    name: "Strong Attack User's Reminiscence",
    image: '/images/games/zone-nova/memories/Axe-Attack-User.jpg',
    rarity: 'R',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Warrior', // Warrior class
    detailUrl: '/guides/zone-nova/memories/strong-attack-users-reminiscence/',
    stats: {
      hp: 4000,
      attack: 400,
      defense: 400,
    },
    effects: ['Attack increases by 16%', 'Defense increases by 24%'],
  },
  {
    id: 'summer-afternoon-nap-time',
    slug: 'summer-afternoon-nap-time',
    name: 'Summer Afternoon Nap Time',
    image: '/images/games/zone-nova/memories/Summer-Afternoon-Nap-Time.jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Mage', // Mage class
    detailUrl: '/guides/zone-nova/memories/summer-afternoon-nap-time/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: [
      'Restriction: Only effective for disaster units',
      'Cost: 5-price awakening',
      'Attack power increased by 20%',
      'For each enemy on the field, attack power additionally increases by 5%, max 4 stacks',
    ],
  },
  {
    id: 'swimsuit-sovereign-who-makes-hearts-flutter',
    slug: 'swimsuit-sovereign-who-makes-hearts-flutter',
    name: 'Swimsuit Sovereign Who Makes Hearts Flutter',
    image: '/images/games/zone-nova/memories/Swimsuit-Goddess-Who-Makes-Hearts-Flutter.jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Warrior', // Warrior class
    detailUrl: '/guides/zone-nova/memories/swimsuit-sovereign-who-makes-hearts-flutter/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Restriction: Only effective for enhancers',
      'Cost: 5-price awakening',
      'Attack increased by 20%',
      'Defense increased by 20%',
    ],
  },
  {
    id: 'shared-bath-time',
    slug: 'shared-bath-time',
    name: 'Shared Bath Time',
    image: '/images/games/zone-nova/memories/Odincard.jpg',
    rarity: 'SSR',
    element: null,
    character: 'Odin',
    detailUrl: '/guides/zone-nova/memories/shared-bath-time/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'ATK +40%; ultimate damage +40% for the caster.',
      'After each ultimate, gain 1 [Charge]. When dealing damage, consume [Charge] to apply 1 stack of [Final Flame]: deals 15% ATK Fire damage every 2s, stacks up to 5, lasts 10s.',
    ],
  },
  {
    id: 'sleepy-guardian',
    slug: 'sleepy-guardian',
    name: 'Sleepy Guardian',
    image: '/images/games/zone-nova/memories/Belphegarcard.jpg',
    rarity: 'SR',
    element: 'Chaos',
    character: 'Belphegar',
    detailUrl: '/guides/zone-nova/memories/sleepy-guardian/',
    stats: {
      hp: 5200,
      attack: 420,
      defense: 380,
    },
    effects: [
      'Debuff application rate increased by 30%',
      'When equipped character applies debuff: Team gains 10% damage reduction for 5 seconds',
      'Critical rate reduction effects are 50% more effective',
    ],
  },
  {
    id: 'lonely-dark-deep-night',
    slug: 'lonely-dark-deep-night',
    name: 'Lonely Dark Deep Night',
    image: '/images/games/zone-nova/memories/Chiyacard.jpg',
    rarity: 'SSR',
    element: 'Ice',
    character: 'Chiya',
    detailUrl: '/guides/zone-nova/memories/lonely-dark-deep-night/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Critical Damage increased by 60%',
      'Kill Stacking: After equipped character kills an enemy, increase attack power by 10% for this battle',
      'Maximum 4 stacks (up to 40% attack power increase)',
    ],
  },
  {
    id: 'revolutionary-restructuring',
    slug: 'revolutionary-restructuring',
    name: 'Revolutionary Restructuring',
    image: '/images/games/zone-nova/memories/Cleopatracard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Cleopatra',
    detailUrl: '/guides/zone-nova/memories/revolutionary-restructuring/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Attack increases by 40%',
      'Infiltration Effect: When skill hits target, additionally adds one layer [Infiltration]',
      '[Infiltration]: Every 2 seconds deals 15% Chaos damage, maximum 5 layers, lasts 10 seconds',
    ],
  },
  {
    id: 'method-of-revenge',
    slug: 'method-of-revenge',
    name: 'Method of Revenge',
    image: '/images/games/zone-nova/memories/Greed-Mammon-card.jpg',
    rarity: 'SR',
    element: 'Chaos',
    character: 'Greed Mammon',
    detailUrl: '/guides/zone-nova/memories/method-of-revenge/',
    stats: {
      hp: 4200,
      attack: 650,
      defense: 395,
    },
    effects: [
      'Support Synergy: When a support character uses their ultimate, own ultimate damage increases by 60% for 10 seconds',
    ],
  },
  {
    id: 'morning-sunlight',
    slug: 'morning-sunlight',
    name: 'Morning Sunlight',
    image: '/images/games/zone-nova/memories/Morning-Sunlight .jpg',
    rarity: 'SR',
    element: null, // No specific element
    character: null, // No specific character
    class: 'Buffer', // Buffer class
    detailUrl: '/guides/zone-nova/memories/morning-sunlight/',
    stats: {
      hp: 5000,
      attack: 500,
      defense: 500,
    },
    effects: [
      'Restriction: Only effective for supports',
      'Cost: 5-price awakening',
      'Attack power increased by 20%',
      'All team skill damage increased by 20%',
    ],
  },
  {
    id: 'black-face-ugly-person',
    slug: 'black-face-ugly-person',
    name: 'Hera Memory',
    image: '/images/games/zone-nova/memories/Heracard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Hera',
    detailUrl: '/guides/zone-nova/memories/black-face-ugly-person/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Only effective for DPS, 5-price awakening',
      'Attack power +40%, when attack receives sustained damage effect impact targets, damage +40%',
    ],
  },
  {
    id: 'strange-gaze-full-of-desire',
    slug: 'strange-gaze-full-of-desire',
    name: 'Strange Gaze Full of Desire',
    image: '/images/games/zone-nova/memories/Helacard.jpg',
    rarity: 'SSR',
    element: 'Chaos',
    character: 'Hela',
    class: 'Rogue',
    detailUrl: '/guides/zone-nova/memories/strange-gaze-full-of-desire/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Only effective for Rogue class, 5-price awakening',
      'Crit Rate increases by 34%',
      "When other allies cast their ultimates, the wearer's damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage)",
    ],
  },
  {
    id: 'the-most-real-her',
    slug: 'the-most-real-her',
    name: 'The Most Real Her',
    image: '/images/games/zone-nova/memories/JoanofArccard.jpg',
    rarity: 'SSR',
    element: 'Wind',
    character: 'Jeanne D Arc',
    detailUrl: '/guides/zone-nova/memories/the-most-real-her/',
    stats: {
      hp: 6000,
      attack: 600,
      defense: 600,
    },
    effects: [
      'Only effective for healers, 5-price awakening',
      'Healing amount +50%, when casting skills or required skills within 1/2/3 seconds, healing amount additionally +25/50/75%',
    ],
  },
  {
    id: 'night-of-bloody-storm',
    slug: 'night-of-bloody-storm',
    name: 'Night of Bloody Storm',
    image: '/images/games/zone-nova/memories/Night-of-Bloody-Storm.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Arthur',
    detailUrl: '/guides/zone-nova/memories/night-of-bloody-storm/',
    stats: {
      hp: 5040,
      attack: 780,
      defense: 474,
    },
    effects: [
      'Attack power increased by 40%',
      "After an ally in [Support Position] uses their ultimate skill, this character's ultimate skill damage increases by 40% for 5 seconds",
      'Total Potential: 40% base attack + 40% conditional ultimate damage boost',
    ],
  },
  {
    id: 'gaiacard',
    slug: 'gaiacard',
    name: 'A Smile That Topples Cities',
    image: '/images/games/zone-nova/memories/Gaiacard.jpg',
    rarity: 'SSR',
    element: null,
    character: 'Gaia',
    detailUrl: '/guides/zone-nova/memories/gaiacard/',
    stats: {
      hp: 6300,
      attack: 580,
      defense: 585,
    },
    effects: [
      'Max HP +40%',
      'Healing output +40%',
      'If wearer healed within last 1 second: additional +40% healing output',
      'Total Potential: Up to 80% healing output (40% base + 40% conditional)',
    ],
  },
  {
    id: 'night-assault-suspect',
    slug: 'night-assault-suspect',
    name: 'Night Assault Suspect',
    image: '/images/games/zone-nova/memories/Thorcard.jpg',
    rarity: 'SSR',
    element: 'Holy',
    character: 'Thor',
    detailUrl: '/guides/zone-nova/memories/night-assault-suspect/',
    stats: {
      hp: 6600,
      attack: 480,
      defense: 690,
    },
    effects: [
      'Defense increased by 64%',
      'When allied characters with shields take damage, Defense increased by 64%',
      'When the equipper deals continuous damage to enemy targets, increase damage taken by the target by 15% for 5 seconds',
    ],
  },
];

// Memory metadata for filters
export const MEMORY_METADATA = {
  rarities: ['SSR', 'SR', 'R'],
  elements: ['Fire', 'Ice', 'Wind', 'Holy', 'Chaos'],
  classes: ['Guardian', 'Warrior', 'Rogue', 'Mage', 'Buffer', 'Debuffer', 'Healer'],
  characters: [
    'Anubis',
    'Apollo',
    'Artemis',
    'Arthur',
    'Athena',
    'Bastet',
    'Belphegar',
    'Chiya',
    'Cleopatra',
    'Freya',
    'Freye',
    'Gaia',
    'Greed Mammon',
    'Guinevere',
    'Hera',
    'Horus',
    'Jeanne D Arc',
    'Kela',
    'Lancelot',
    'Leviathan',
    'Loki',
    'Lyra',
    'Merlin',
    'Mordred',
    'Naiya',
    'Nini',
    'Odin',
    'Penny',
    'Rose',
    'Shanna',
    'Shu',
    'Snow Girl',
    'Tefnut',
    'Thor',
    'Yuis',
    'Zashiki-warashi',
  ],
};

// Helper functions for memory management
export function getMemoriesByRarity(rarity) {
  return ZONE_NOVA_MEMORIES.filter(memory => memory.rarity === rarity);
}

export function getMemoriesByElement(element) {
  return ZONE_NOVA_MEMORIES.filter(memory => memory.element === element);
}

export function getMemoriesByCharacter(character) {
  return ZONE_NOVA_MEMORIES.filter(memory => memory.character === character);
}

export function getMemoryById(id) {
  return ZONE_NOVA_MEMORIES.find(memory => memory.id === id);
}

export function getMemoryBySlug(slug) {
  return ZONE_NOVA_MEMORIES.find(memory => memory.slug === slug);
}

export function getMemoriesByClass(className) {
  return ZONE_NOVA_MEMORIES.filter(memory => {
    if (!memory.character) return false; // Skip non-character specific memories
    return getCharacterClass(memory.character) === className;
  });
}

export function getMemoryClass(memory) {
  // First check if memory has a direct class field
  if (memory.class) return memory.class;

  // If no direct class, try to get it from character
  if (memory.character) return getCharacterClass(memory.character);

  // No class information available
  return null;
}

// Sort memories by different criteria
export function sortMemories(memories, sortBy, ascending = true) {
  const sorted = [...memories].sort((a, b) => {
    let aVal, bVal;

    switch (sortBy) {
      case 'name':
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
        break;
      case 'rarity': {
        const rarityOrder = { SSR: 3, SR: 2, R: 1 };
        aVal = rarityOrder[a.rarity];
        bVal = rarityOrder[b.rarity];
        break;
      }
      case 'hp':
      case 'attack':
      case 'defense':
        aVal = a.stats[sortBy];
        bVal = b.stats[sortBy];
        break;
      default:
        return 0;
    }

    if (aVal < bVal) return ascending ? -1 : 1;
    if (aVal > bVal) return ascending ? 1 : -1;
    return 0;
  });

  return sorted;
}
