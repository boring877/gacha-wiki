// Silver and Blood Landing Page Data
// This file contains all the content and configuration for the Silver and Blood landing page

export const silverAndBloodConfig = {
  meta: {
    title: 'Silver and Blood - GachaWiki',
    description: 'Explore Silver and Blood gacha game guides and content',
    gameTitle: 'Silver and Blood',
    heroImage: '/images/games/silver-and-blood/main-images/silver-and-blood-main.jpg',
    heroVideo:
      'https://res.cloudinary.com/dtiiaqlah/video/upload/v1752687395/OP%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%86%E3%82%A3%E3%82%B6%E3%83%BC_milet_%E3%83%9F%E3%83%AC%E3%82%A4_%E3%82%B7%E3%83%AB%E3%83%90%E3%83%BC_%E3%82%A2%E3%83%B3%E3%83%89_%E3%83%96%E3%83%A9%E3%83%83%E3%83%89_hfm4RtwuAbA_pxdtmg.webm',
  },

  gameInfo: {
    description: `This is a story of "Blood and Destiny."

"Blood" is the essence of life and the vessel of memory.
Long before the dawn of the Continental Era, thirteen alchemists consumed the blood of Abel—the First Martyr.
Through this sacrament, they unearthed the secret to transferring memories through blood, seizing a form of "immortality." Yet with each transference, their blood darkened, growing ever more tainted.
Thus the first "Bloodborn" came to be: Immortal beings who defied the natural cycle of life and death—the harbingers of calamity upon the mortal world.

"Destiny" is the confluence of cause and effect, the immutable cycle which governs existence.
Back in that distant age, a young girl deciphered a divine prophecy inscribed upon a fallen star.
From this, she grasped the truth of the world: Only time remains impartial, and only cycles are eternal.
In the name of Aeon, the God of Time, she raised the silver banner of the "Tempus Church," vowing to return "heretics" to the natural cycle of life and death, and steer "history" back upon its destined course.

This is the age-old tale of Blood and Destiny.
This, too, is unfinished epic of Silver and Blood, its ending both foretold, yet still unwritten.`,
    playUrl: 'https://silverandblood.moonton.com/',
    status: 'active',
    lastUpdated: new Date(),
  },

  sections: [
    {
      id: 'about',
      title: 'About',
      type: 'game-info',
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'guides-grid',
    },
  ],

  guides: [
    {
      id: 'character-comparison',
      title: 'Character Comparison',
      emoji: '📊',
      description:
        'Compare up to 4 characters side by side to analyze their stats and abilities for optimal team building.',
      url: '/guides/silver-and-blood/character-comparison/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-rankings',
      title: 'Character Rankings',
      emoji: '🏆',
      description:
        'View character stat rankings and overall performance analysis across HP, ATK, P.DEF, and M.DEF.',
      url: '/guides/silver-and-blood/character-rankings/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'character-tag-selection',
      title: 'Character Tag Selection',
      emoji: '🏷️',
      description:
        'Filter and discover characters by their combat tags and abilities. Find characters with specific roles like Buff, Healing, AoE DMG, and more.',
      url: '/guides/silver-and-blood/character-tag-selection/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'characters',
      title: 'Characters',
      emoji: '⚔️',
      description: 'Character information.',
      url: '/guides/silver-and-blood/characters/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'damage-mechanics',
      title: 'Damage Mechanics Hub',
      emoji: '⚔️',
      description:
        "formulas and calculation for damage output .",
      url: '/guides/silver-and-blood/damage-mechanics/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'dutchmans-revenge',
      title: "Dutchman's Revenge",
      emoji: '🧩',
      description: 'Helping with little puzzle thingy :D',
      url: '/guides/silver-and-blood/dutchmans-revenge/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'events',
      title: 'Events',
      emoji: '🌙',
      description: 'Events and Related things to Events !',
      url: '/guides/silver-and-blood/events/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'summon-faq',
      title: 'Summon FAQ',
      emoji: '💎',
      description: 'General knowledge about summoning and FAQ.',
      url: '/guides/silver-and-blood/summon-faq/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'waifu-gallery',
      title: 'Waifu Gallery',
      emoji: '🖼️',
      description:
        'Videos and Images for characters .',
      url: '/guides/silver-and-blood/waifu-gallery/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'waifu-skins',
      title: 'Waifu Skins',
      emoji: '👗',
      description:
        'Showcasing skins Videos and Images.',
      url: '/guides/silver-and-blood/waifu-skins/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'ancestral-vault',
      title: 'Ancestral Vault',
      emoji: '🏛️',
      description:
        'Summon Ancient Vassals with Mead of Rebirth. Calculate progression requirements for Sirene and other Ancient Vassals.',
      url: '/guides/silver-and-blood/ancestral-vault/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'clan-hunt',
      title: 'Clan Hunt',
      emoji: '⚔️',
      description: 'General knowledge and calculator .',
      url: '/guides/silver-and-blood/clan-hunt/',
      category: 'guides',
      status: 'active',
    },
    {
      id: 'boss-database',
      title: 'Clan Hunt Boss Database',
      emoji: '👹',
      description:
        'Complete database of all Clan Hunt bosses with mechanics, strategies, and optimal team compositions.',
      url: '/guides/silver-and-blood/boss-database/',
      category: 'guides',
      status: 'active',
    },
  ],
};

export default silverAndBloodConfig;
