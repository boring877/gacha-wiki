/**
 * Breadcrumb Generation Utility
 * Auto-generates breadcrumb navigation items based on URL paths
 * Supports game-specific patterns for Zone Nova, Silver & Blood, and Horizon Walker
 */

/**
 * Game configuration for breadcrumb generation
 */
const GAME_CONFIG = {
  'zone-nova': {
    name: 'Zone Nova',
    basePath: '/guides/zone-nova',
    patterns: {
      characters: 'Characters',
      'character-comparison': 'Character Comparison',
      'character-comparison-v2': 'Character Comparison',
      'character-rankings': 'Character Rankings',
      'damage-mechanics': 'Damage Mechanics',
      'team-synergy': 'Team Synergy',
      'tier-list': 'Tier List',
      'rift-teams': 'Rift Teams',
      updates: 'Updates',
      memories: 'Memories',
    },
  },
  'silver-and-blood': {
    name: 'Silver & Blood',
    basePath: '/guides/silver-and-blood',
    patterns: {
      characters: 'Characters',
      'character-comparison': 'Character Comparison',
      'character-comparison-v2': 'Character Comparison',
      'character-rankings': 'Character Rankings',
      'damage-mechanics': 'Damage Mechanics',
      'team-synergy': 'Team Synergy',
      'tier-list': 'Tier List',
      'beginner-guide': 'Beginner Guide',
      'rerolling-guide': 'Rerolling Guide',
      'ancestral-vault': 'Ancestral Vault',
      events: 'Events',
      bosses: 'Bosses',
      bugs: 'Bug Reports',
    },
  },
  'horizon-walker': {
    name: 'Horizon Walker',
    basePath: '/guides/horizon-walker',
    patterns: {
      'tier-list': 'Tier List',
      characters: 'Characters',
      mercenaries: 'Mercenaries',
      weapons: 'Weapons',
      gifts: 'Gifts',
      'character-gifts': 'Character Gifts',
      'ap-guide': 'AP Guide',
    },
  },
  'rebellion-gilgamesh': {
    name: 'Rebellion Gilgamesh',
    basePath: '/guides/rebellion-gilgamesh',
    patterns: {
      characters: 'Characters',
      'character-comparison': 'Character Comparison',
      'character-rankings': 'Character Rankings',
      'club-management': 'Club Management',
      'club-guide': 'Club Guide',
      'slave-management': 'Slave Management',
      'special-moves': 'Special Moves',
      'moves-database': 'Moves Database',
      'combat-guide': 'Combat Guide',
      'tier-list': 'Tier List',
    },
  },
  'stella-sora': {
    name: 'Stella Sora',
    basePath: '/guides/stella-sora',
    patterns: {
      characters: 'Characters',
      'character-database': 'Character Database',
      'character-comparison': 'Character Comparison',
      'character-rankings': 'Character Rankings',
      'beginner-guide': 'Beginner Guide',
      'tier-list': 'Tier List',
      'team-building': 'Team Building',
      elements: 'Elements',
      potentials: 'Potentials',
      discs: 'Discs',
    },
  },
  'busty-burst': {
    name: 'Busty Burst',
    basePath: '/guides/busty-burst',
    patterns: {
      'tier-list': 'Tier List',
      build: 'Character Builds',
    },
  },
  'taimanin-squad': {
    name: 'Taimanin Squad',
    basePath: '/guides/taimanin-squad',
    patterns: {
      blog: 'Blog',
    },
  },
};

/**
 * Generate breadcrumb items from URL path
 * @param {string} pathname - The current page path
 * @param {Object} options - Generation options
 * @returns {Array} Array of breadcrumb items with name and href
 */
export function generateBreadcrumbs(pathname, options = {}) {
  const { includeHome = true, gameKey = null } = options;
  let currentPageName = options.currentPageName || null;

  const breadcrumbs = [];

  // Always start with home if requested
  if (includeHome) {
    breadcrumbs.push({
      name: 'Home',
      href: '/',
    });
  }

  // Handle root paths
  if (pathname === '/') {
    return breadcrumbs;
  }

  // Split path into segments
  const segments = pathname.split('/').filter(segment => segment.length > 0);

  // Handle different path patterns
  if (segments[0] === 'guides' && segments.length > 1) {
    const detectedGameKey = gameKey || segments[1];
    const config = GAME_CONFIG[detectedGameKey];

    if (config) {
      // Add game landing page
      breadcrumbs.push({
        name: config.name,
        href: config.basePath,
      });

      // Process remaining segments
      if (segments.length > 2) {
        const remainingSegments = segments.slice(2);
        const href = buildHref(segments.slice(0, 3)); // /guides/game/section

        // Get section name from config or format segment
        const sectionKey = remainingSegments[0];
        const sectionName = config.patterns[sectionKey] || formatSegmentName(sectionKey);

        // If this is the last segment, make it current page (no href)
        if (remainingSegments.length === 1) {
          breadcrumbs.push({
            name: sectionName,
            // No href for current page
          });
        } else {
          breadcrumbs.push({
            name: sectionName,
            href: href,
          });
        }

        // Handle deeper paths (like individual character pages)
        if (remainingSegments.length > 1) {
          const deeperSegments = remainingSegments.slice(1);

          // Add all intermediate segments (except the last one which becomes current page)
          for (let i = 0; i < deeperSegments.length - 1; i++) {
            const segment = deeperSegments[i];
            const href = buildHref(segments.slice(0, 4 + i));
            breadcrumbs.push({
              name: formatSegmentName(segment),
              href: href,
            });
          }

          // The last deep segment becomes the current page name if not provided
          if (!currentPageName && deeperSegments.length > 0) {
            const lastSegment = deeperSegments[deeperSegments.length - 1];
            currentPageName = formatSegmentName(lastSegment);
          }
        }
      }
    }
  } else {
    // Handle non-guide paths (like clock, about, etc.)
    let currentPath = '';

    for (let i = 0; i < segments.length - 1; i++) {
      currentPath += '/' + segments[i];
      breadcrumbs.push({
        name: formatSegmentName(segments[i]),
        href: currentPath,
      });
    }
  }

  // Add current page name if provided (without href for current page)
  if (currentPageName) {
    breadcrumbs.push({
      name: currentPageName,
      // No href for current page
    });
  } else {
    // If no current page name provided, try to extract from the last segment
    const segments = pathname.split('/').filter(segment => segment.length > 0);
    if (segments.length > 0) {
      const lastSegment = segments[segments.length - 1];
      const formattedName = formatSegmentName(lastSegment);

      // Check if the last segment is already represented in breadcrumbs
      // This handles cases where pattern config maps 'build' -> 'Character Builds'
      const detectedGameKey = gameKey || (segments[0] === 'guides' && segments[1]);
      const config = detectedGameKey ? GAME_CONFIG[detectedGameKey] : null;
      const patternName = config?.patterns?.[lastSegment];

      // Only add if this segment isn't already in breadcrumbs (check both formatted and pattern name)
      const alreadyExists = breadcrumbs.some(
        crumb => crumb.name === formattedName || crumb.name === patternName
      );
      if (!alreadyExists) {
        breadcrumbs.push({
          name: formattedName,
          // No href for current page
        });
      }
    }
  }

  return breadcrumbs;
}

/**
 * Get the parent breadcrumb (for back navigation)
 * @param {Array} breadcrumbs - Generated breadcrumb array
 * @returns {Object|null} Parent breadcrumb item or null
 */
export function getParentBreadcrumb(breadcrumbs) {
  if (breadcrumbs.length < 2) {
    return null;
  }

  // Return the second-to-last breadcrumb that has an href
  for (let i = breadcrumbs.length - 2; i >= 0; i--) {
    if (breadcrumbs[i].href) {
      return breadcrumbs[i];
    }
  }

  return null;
}

/**
 * Build href from path segments
 * @param {Array} segments - Path segments
 * @returns {string} Complete href path
 */
function buildHref(segments) {
  return '/' + segments.join('/');
}

/**
 * Format segment name for display
 * @param {string} segment - URL segment
 * @returns {string} Formatted display name
 */
function formatSegmentName(segment) {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Detect game key from pathname
 * @param {string} pathname - The current page path
 * @returns {string|null} Detected game key or null
 */
export function detectGameKey(pathname) {
  const segments = pathname.split('/').filter(segment => segment.length > 0);

  if (segments[0] === 'guides' && segments.length > 1) {
    const gameKey = segments[1];
    return GAME_CONFIG[gameKey] ? gameKey : null;
  }

  return null;
}

/**
 * Get game configuration
 * @param {string} gameKey - Game identifier
 * @returns {Object|null} Game configuration or null
 */
export function getGameConfig(gameKey) {
  return GAME_CONFIG[gameKey] || null;
}

/**
 * Generate breadcrumbs specifically for character pages
 * @param {string} pathname - The current page path
 * @param {string} characterName - Character display name
 * @param {string} gameKey - Game identifier
 * @returns {Array} Array of breadcrumb items
 */
export function generateCharacterBreadcrumbs(pathname, characterName, gameKey) {
  const breadcrumbs = generateBreadcrumbs(pathname, {
    includeHome: true,
    gameKey: gameKey,
  });

  // Add character name as current page
  breadcrumbs.push({
    name: characterName,
  });

  return breadcrumbs;
}

/**
 * Generate smart back navigation
 * @param {string} pathname - Current page path
 * @param {Object} options - Options for back navigation
 * @returns {Object} Back navigation info
 */
export function generateBackNavigation(pathname, options = {}) {
  const { gameKey, fallbackHref = '/' } = options;

  const breadcrumbs = generateBreadcrumbs(pathname, { gameKey });
  const parent = getParentBreadcrumb(breadcrumbs);

  return {
    href: parent?.href || fallbackHref,
    text: parent ? `Back to ${parent.name}` : 'Back to Home',
    parentName: parent?.name || 'Home',
  };
}
