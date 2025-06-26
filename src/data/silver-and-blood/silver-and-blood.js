// Silver and Blood Landing Page Data
// This file contains all the content and configuration for the Silver and Blood landing page

export const silverAndBloodConfig = {
  meta: {
    title: "Silver and Blood - GachaWiki",
    description: "Explore Silver and Blood gacha game guides and content",
    gameTitle: "Silver and Blood",
    heroImage: "/images/games/silver-and-blood/main.jpg"
  },
  
  gameInfo: {
    description: "Coming Soon - A new gacha adventure awaits! Stay tuned for character guides, equipment systems, and epic stories.",
    playUrl: "#", // Will be updated when game launches
    status: "coming-soon",
    lastUpdated: new Date()
  },

  sections: [
    {
      id: "about",
      title: "About",
      type: "game-info"
    },
    {
      id: "resources", 
      title: "Resources",
      type: "guides-grid"
    }
  ],

  guides: [
    {
      id: "characters",
      title: "Characters",
      emoji: "⚔️",
      description: "Character guides, skills information, and builds.",
      url: "/guides/silver-and-blood/characters/",
      category: "guides",
      status: "coming-soon"
    },
    {
      id: "equipment",
      title: "Equipment",
      emoji: "🛡️",
      description: "Weapons, armor, and enhancement systems.",
      url: "/guides/silver-and-blood/equipment/",
      category: "guides",
      status: "coming-soon"
    },
    {
      id: "stories",
      title: "Stories",
      emoji: "📚",
      description: "Main storyline, side quests, and lore.",
      url: "/guides/silver-and-blood/stories/",
      category: "content",
      status: "coming-soon"
    },
    {
      id: "updates",
      title: "Updates", 
      emoji: "🔧",
      description: "Patch notes, maintenance, and announcements.",
      url: "/guides/silver-and-blood/updates/",
      category: "info",
      status: "coming-soon"
    }
  ]
};

export default silverAndBloodConfig; 