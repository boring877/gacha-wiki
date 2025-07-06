// Silver and Blood Landing Page Data
// This file contains all the content and configuration for the Silver and Blood landing page

export const silverAndBloodConfig = {
  meta: {
    title: "Silver and Blood - GachaWiki",
    description: "Explore Silver and Blood gacha game guides and content",
    gameTitle: "Silver and Blood",
    heroImage: "/images/games/silver-and-blood/main-images/silver-and-blood-main.jpg"
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
    playUrl: "https://silverandblood.moonton.com/",
    status: "active",
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
      description: "Character information.",
      url: "/guides/silver-and-blood/characters/",
      category: "guides",
      status: "active"
    },
    {
      id: "summon-faq",
      title: "Summon FAQ",
      emoji: "💎",
      description: "General knowledge about summoning and FAQ.",
      url: "/guides/silver-and-blood/summon-faq/",
      category: "guides",
      status: "active"
    },
    {
      id: "dutchmans-revenge",
      title: "Dutchman's Revenge",
      emoji: "🧩",
      description: "Helping with little puzzle thingy :D",
      url: "/guides/silver-and-blood/dutchmans-revenge/",
      category: "guides",
      status: "active"
    },
    {
      id: "events",
      title: "Events",
      emoji: "🌙",
      description: "Events and Related things to Events !",
      url: "/guides/silver-and-blood/events/",
      category: "guides",
      status: "active"
    },
    {
      id: "waifu-cutscenes",
      title: "Waifu CutScenes",
      emoji: "💕",
      description: "Beautiful character cutscenes and memorable moments featuring beloved Silver and Blood characters.",
      url: "/guides/silver-and-blood/waifu-cutscenes/",
      category: "guides",
      status: "active"
    }
  ]
};

export default silverAndBloodConfig; 