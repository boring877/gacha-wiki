// Silver and Blood Summon FAQ Data
export const summonFaqData = {
  meta: {
    title: "Silver and Blood Summon FAQ - Complete Gacha Guide | Rates, Pity & Strategy",
    description: "Master Silver and Blood summoning with our complete guide covering summon rates, pity system, Future Artifacts, Moon Tears, and optimal character acquisition strategies.",
    gameTitle: "Summon FAQ",
    keywords: "Silver and Blood, summon guide, gacha rates, pity system, Moon Tear, Future Artifacts, character summoning, limited banners",
    ogTitle: "Silver and Blood Summon FAQ - Complete Gacha Guide",
    ogDescription: "Everything you need to know about Silver and Blood summoning: rates, pity mechanics, currencies, and strategies for optimal character acquisition."
  },

  intro: {
    text: "It's highly recommended to spend your Moon Tear (gems) in limited summons, there are also very limited characters and collab characters. So I would personally save my Moon Tears and spend other tickets!"
  },

  summonTypes: [
    {
      id: "common",
      title: "Common Summons",
      cost: "Moon Tear (Gems) 150 per summons or Soothing Embrace (Tickets)",
      totalSSRRate: "4.0%",
      details: [
        "Common Ancestral Characters: 0.0833% each (Limine, Transcendent Hati, Incendiary Agares, Transcendent Ami, Seth, Transcendent Noah)",
        "Other SSR Characters: 0.2333% each",
        "Note: Non-Ancestral characters not in Altar have a 0% rate"
      ]
    },
    {
      id: "limited",
      title: "Limited Summons",
      cost: "Moon Tear (Gems) 150 per summons or Vestige of Love (Limited Tickets)",
      totalSSRRate: "4.0%",
      details: [
        "Featured Character Rate: 2.0%",
        "Common Ancestral Characters: 0.0833% each",
        "Other SSR Characters: 0.0576% each",
        "Rate Up SSR: 50.0% (When you get an SSR, 50% chance it's the featured character)"
      ]
    }
  ],

  pitySystem: [
    {
      id: "common-pity",
      title: "Common Summons Pity",
      pullCount: "60 summons",
      description: "After 59 failed pulls without getting an SSR, your next pull is guaranteed to be an SSR",
      note: "This pity counter is separate from limited events"
    },
    {
      id: "limited-pity", 
      title: "Limited Summons Pity",
      pullCount: "60 summons",
      description: "After 59 failed pulls without getting an SSR, your next pull is guaranteed to be an SSR",
      note: "Pity counter is shared across all limited summon events and carries over between events"
    },
    {
      id: "featured-protection",
      title: "Featured Character Protection",
      pullCount: "50% chance",
      description: "If SSR is not featured or common Ancestral, triggers \"Inspired summon\"",
      note: "Next SSR guaranteed to be featured or common Ancestral until featured is obtained"
    }
  ],

  currencies: [
    {
      id: "moon-tear",
      icon: "💧",
      image: "/images/games/silver-and-blood/summonfaq/Moon_Tear.jpg",
      title: "Moon Tear",
      description: "Premium currency (Gems) obtained through purchases, events or Any other means",
      use: "Primary summoning currency for both Common and Limited summons"
    },
    {
      id: "soothing-embrace",
      icon: "🤗",
      image: "/images/games/silver-and-blood/summonfaq/Soothing_Embrace.jpg",
      title: "Soothing Embrace", 
      description: "Free tickets from daily missions and events",
      use: "Alternative to Moon Tear for Common summons"
    },
    {
      id: "vestige-of-love",
      icon: "💝",
      image: "/images/games/silver-and-blood/summonfaq/Vestige_of_Love.jpg",
      title: "Vestige of Love",
      description: "Limited event tickets for featured character banners",
      use: "Alternative to Moon Tear for Limited summons"
    },
    {
      id: "spirits",
      icon: "✨",
      image: "/images/games/silver-and-blood/summonfaq/Spirits.jpg",
      title: "Spirits",
      description: "Obtained instead of duplicate characters",
      use: "Used to increase character level cap"
    },
    {
      id: "fragrant-residue",
      icon: "🌸",
      image: "/images/games/silver-and-blood/summonfaq/Fragrant_Residue.jpg",
      title: "Fragrant Residue",
      description: "Get 1 per pull, collect 200 for rewards",
      use: "200 = 1 copy of Spirits"
    },
    {
      id: "spirit-scraps",
      icon: "🔮",
      image: "/images/games/silver-and-blood/summonfaq/Spirit_Scraps.jpg",
      title: "Spirit Scraps",
      description: "Obtained when you have max Spirit Siphon materials",
      use: "Spend in Covenant Shop for various rewards"
    }
  ],

  selectionSystem: {
    title: "Selection System",
    unlockRequirement: "After 40 pulls on Common Summons",
    selectionProcess: "Choose 5 SSR characters from each faction: Church, Kingdom, and Bloodborn (15 total)",
    effect: "Any SSR you get from these factions will be one of your selected characters",
    note: "Other factions (like Ancestral) are not affected by this selection system and this is only for common summons"
  },


  faq: [
    {
      question: "Does pity carry over between banners?",
      answer: "Common Summons pity is separate from Limited events. Limited Summons pity carries over between all limited summon events and does not reset when an event ends."
    },
    {
      question: "How does the Featured Character Protection work?",
      answer: "When you get an SSR, there's a 50% chance it's the featured character. If it's not featured or common Ancestral, an \"Inspired summon\" is triggered, guaranteeing your next SSR will be featured or common Ancestral until you get the featured character."
    },
    {
      question: "What are Common Ancestral Characters?",
      answer: "These are specific characters with consistent rates: Limine, Transcendent Hati, Incendiary Agares, Transcendent Ami, Seth, and Transcendent Noah. They each have a 0.0833% rate in both Common and Limited summons."
    },
    {
      question: "When should I use the Selection System?",
      answer: "The Selection System unlocks after 40 Common Summon pulls. Choose wisely - select 5 SSR characters from Church, Kingdom, and Bloodborn factions (15 total) as any SSR from these factions will be from your selection."
    },
    {
      question: "What's the difference between Spirits and Spirit Scraps?", 
      answer: "Spirits are obtained instead of duplicate characters and are used to increase character level caps. Spirit Scraps are obtained when you have max Spirit Siphon materials and can be spent in the Covenant Shop."
    },
    {
      question: "Should I save Fragrant Residue?",
      answer: "You get 1 Fragrant Residue per pull. Collect 200 to exchange for 1 copy of Spirits, which is valuable for character progression. It's generally worth saving up for this exchange."
    }
  ]
};

export default summonFaqData;