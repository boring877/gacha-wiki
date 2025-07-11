// Silver and Blood Damage Mechanics Index Data
// Landing page data for organizing all damage mechanics guides

export const damageMechanicsIndex = {
  meta: {
    title: "Silver and Blood Damage Mechanics Hub - GachaWiki",
    description: "Complete collection of Silver and Blood damage mechanics, character calculations, and mathematical formulas. Your one-stop guide for understanding the game's combat system.",
    lastUpdated: new Date(),
    totalGuides: 1 // Will be updated as we add more
  },

  // Hero section content
  heroSection: {
    title: "Damage Mechanics Hub",
    subtitle: "Master Silver and Blood's Combat System",
    description: "Comprehensive guides covering damage calculations, character-specific mechanics, and advanced combat strategies. From basic defense formulas to complex character interactions.",
    featuredImage: "/images/games/silver-and-blood/mechanics/damage-mechanics-hero.jpg", // Optional hero image
    quickStats: [
      { label: "Core Mechanics", value: "1", icon: "⚔️" },
      { label: "Character Guides", value: "0", icon: "👥" },
      { label: "Calculators", value: "1", icon: "🧮" },
      { label: "Formulas", value: "5+", icon: "📐" }
    ]
  },

  // Main mechanics categories
  mechanicsCategories: [
    {
      id: "core-mechanics",
      title: "Core Combat Mechanics",
      description: "Essential damage calculations and defense systems that apply to all characters",
      icon: "⚔️",
      color: "amber", // Will use --amber-glow
      guides: [
        {
          id: "defense-formulas",
          title: "Defense Formulas",
          description: "Learn the core damage calculation formula, defense coefficient system, and damage reduction mechanics",
          url: "/guides/silver-and-blood/damage-mechanics/defense-formulas",
          difficulty: "Beginner",
          estimatedTime: "8 min read",
          features: [
            "Interactive damage calculator",
            "Defense coefficient explanation",
            "Damage reduction examples",
            "Mathematical breakdowns"
          ],
          lastUpdated: "2025-07-10",
          isNew: true,
          isFeatured: true
        }
      ]
    },
    {
      id: "character-mechanics",
      title: "Character-Specific Mechanics",
      description: "Advanced calculations for characters with complex abilities and unique mechanics",
      icon: "👥",
      color: "teal", // Will use --teal-crystal
      guides: [
        // Empty for now as requested
      ]
    }
  ],

  // Upcoming/planned guides
  upcomingGuides: [
    {
      title: "Critical Hit Mechanics",
      description: "CRIT rate, CRIT damage calculations, and optimization strategies",
      estimatedRelease: "Coming Soon",
      category: "core-mechanics"
    },
    {
      title: "Elemental Damage & Resistances", 
      description: "Element-specific damage modifiers and resistance calculations",
      estimatedRelease: "Coming Soon",
      category: "core-mechanics"
    },
    {
      title: "Character-Specific Calculations",
      description: "Advanced mechanics for individual characters with unique abilities",
      estimatedRelease: "Coming Soon", 
      category: "character-mechanics"
    }
  ],

  // Quick reference section
  quickReference: {
    title: "Quick Reference",
    items: [
      {
        title: "Base Damage",
        value: "ATK × Skill%",
        description: "Basic damage before defense reduction"
      },
      {
        title: "Defense Reduction", 
        value: "DEF / (DEF + K)",
        description: "Where K is the defense coefficient constant"
      },
      {
        title: "Final Damage",
        value: "Base × (1 - DEF%)",
        description: "Damage after defense calculations"
      },
      {
        title: "Critical Hit",
        value: "Base × CRIT DMG%",
        description: "Additional damage on critical hits"
      }
    ]
  },

  // Navigation structure
  navigation: {
    breadcrumb: [
      { name: "Silver and Blood", href: "/guides/silver-and-blood/" },
      { name: "Damage Mechanics", href: "/guides/silver-and-blood/damage-mechanics/" }
    ],
    relatedPages: [
      { name: "Character Database", href: "/guides/silver-and-blood/characters/" },
      { name: "Character Comparison", href: "/guides/silver-and-blood/character-comparison/" },
      { name: "Events", href: "/guides/silver-and-blood/events/" }
    ]
  }
};

// Helper functions
export const getMechanicsByCategory = (categoryId) => {
  return damageMechanicsIndex.mechanicsCategories.find(cat => cat.id === categoryId);
};

export const getAllGuides = () => {
  return damageMechanicsIndex.mechanicsCategories.flatMap(category => 
    category.guides.map(guide => ({ ...guide, category: category.id }))
  );
};

export const getFeaturedGuides = () => {
  return getAllGuides().filter(guide => guide.isFeatured);
};

export const getNewGuides = () => {
  return getAllGuides().filter(guide => guide.isNew);
};

export const getDifficultyColor = (difficulty) => {
  const colors = {
    'Beginner': 'var(--amber-glow)',
    'Intermediate': 'var(--teal-crystal)', 
    'Advanced': 'var(--rose-quartz)'
  };
  return colors[difficulty] || 'var(--text-secondary)';
};