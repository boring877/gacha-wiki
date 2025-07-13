// Zone Nova Damage Mechanics Index Data
// Landing page data for organizing all damage mechanics guides

export const damageMechanicsIndex = {
  meta: {
    title: "Zone Nova Damage Mechanics Hub - GachaWiki",
    description: "Complete collection of Zone Nova damage mechanics, character calculations, and mathematical formulas. Your one-stop guide for understanding the game's combat system.",
    lastUpdated: new Date(),
    totalGuides: 2 // Will be updated as we add more
  },

  // Hero section content
  heroSection: {
    title: "Damage Mechanics Hub",
    subtitle: "Master Zone Nova's Combat System",
    description: "Comprehensive guides covering damage calculations, character-specific mechanics, and advanced combat strategies. From basic defense formulas to complex character interactions.",
    featuredImage: "/images/games/zone-nova/mechanics/damage-mechanics-hero.jpg", // Optional hero image
    quickStats: [
      { label: "Core Mechanics", value: "1", icon: "⚔️" },
      { label: "Character Guides", value: "1", icon: "👥" },
      { label: "Calculators", value: "2", icon: "🧮" },
      { label: "Formulas", value: "8+", icon: "📐" }
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
          id: "damage-defense-formulas",
          title: "Damage & Defense Formulas",
          description: "Learn the core damage calculation formula, defense coefficient system, and damage reduction mechanics",
          url: "/guides/zone-nova/damage-mechanics/core-formulas",
          difficulty: "Beginner",
          estimatedTime: "10 min read",
          features: [
            "Interactive damage calculator",
            "Defense coefficient explanation",
            "Damage reduction examples",
            "Mathematical breakdowns"
          ],
          lastUpdated: "2025-01-08",
          isNew: false,
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
        {
          id: "gaia-mechanics",
          title: "Gaia (Matriarch) Mechanics",
          description: "HP manipulation, healing calculations, and Motherly Love mechanics for the ultimate support character",
          url: "/guides/zone-nova/damage-mechanics/gaia-mechanics",
          difficulty: "Advanced",
          estimatedTime: "15 min read",
          features: [
            "HP increase calculators",
            "Team skill scaling",
            "Awakening effect formulas",
            "Life Extension mechanics"
          ],
          lastUpdated: "2025-01-08",
          isNew: true,
          isFeatured: true
        }
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
      title: "Team Composition Synergies",
      description: "Multi-character interactions and team buff calculations",
      estimatedRelease: "Coming Soon", 
      category: "character-mechanics"
    }
  ],

  // Quick reference section
  quickReference: {
    title: "Quick Reference",
    items: [
      {
        title: "Defense Coefficient",
        value: "972.95",
        description: "When DEF = 972.95, you take 50% damage"
      },
      {
        title: "Gaia HP Cap", 
        value: "15%",
        description: "Max HP increases capped at 15% of Gaia's starting HP"
      },
      {
        title: "Emergency Treatment",
        value: "12%",
        description: "Heals 12% of Gaia's max HP to lowest HP ally"
      },
      {
        title: "Team Skill Scaling",
        value: "5% per 5k HP",
        description: "Gaia's healing bonus scales with her max HP"
      }
    ]
  },

  // Navigation structure
  navigation: {
    breadcrumb: [
      { name: "Zone Nova", href: "/guides/zone-nova/" },
      { name: "Damage Mechanics", href: "/guides/zone-nova/damage-mechanics/" }
    ],
    relatedPages: [
      { name: "Character Database", href: "/guides/zone-nova/characters/" },
      { name: "Character Comparison", href: "/guides/zone-nova/character-comparison/" },
      { name: "Memory Cards", href: "/guides/zone-nova/memories/" }
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