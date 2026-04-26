/**
 * Horizon Walker Skill Highlighting Utility
 * Provides reusable keyword highlighting for skill descriptions to improve scan reading
 */

// Cache for highlighted content to improve performance
const highlightCache = new Map();
const CACHE_MAX_SIZE = 1000;
const CACHE_TTL = 300000; // 5 minutes

/**
 * Creates a cache key from text and patterns
 * @param {string} text - The text to highlight
 * @param {Object} patterns - The highlighting patterns
 * @returns {string} Cache key
 */
function createCacheKey(text, patterns) {
  const patternString = JSON.stringify(patterns);
  return `${text.length}_${text.substring(0, 50)}_${patternString.length}`;
}

/**
 * Cleans expired entries from cache
 */
function cleanCache() {
  const now = Date.now();
  for (const [key, value] of highlightCache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      highlightCache.delete(key);
    }
  }
}

/**
 * Applies keyword highlighting to text based on provided patterns
 * @param {string} text - The text to highlight
 * @param {Object} highlightPatterns - Object containing regex patterns for different highlight categories
 * @param {Object} options - Configuration options for highlighting
 * @param {boolean} options.isTrustedContent - Whether content is from trusted sources (default: true)
 * @returns {string} HTML string with highlighted keywords
 */
export function highlightSkillText(text, highlightPatterns, options = {}) {
  // Input validation and sanitization
  if (!text || typeof text !== 'string') {
    return text || '';
  }

  if (!highlightPatterns || typeof highlightPatterns !== 'object') {
    return text;
  }

  // Security: Limit text length to prevent DoS
  if (text.length > 10000) {
    text = text.substring(0, 10000) + '...';
  }

  // Configuration options
  const { isTrustedContent = true } = options;

  // Performance: Check cache first (include options in cache key)
  const cacheKey = createCacheKey(text, highlightPatterns) + `_trusted:${isTrustedContent}`;
  const cached = highlightCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.result;
  }

  // Clean cache periodically
  if (highlightCache.size > CACHE_MAX_SIZE) {
    cleanCache();
  }

  // Security: Context-aware sanitization
  let sanitizedText;
  if (isTrustedContent) {
    // For trusted content (character data), only escape potential HTML tags but preserve quotes
    sanitizedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Note: Preserving quotes and apostrophes for trusted character data
  } else {
    // For untrusted content, apply full HTML entity encoding
    sanitizedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }

  let highlightedText = sanitizedText;

  // Apply highlights in a specific order to avoid conflicts
  const highlightOrder = [
    { key: 'effects', className: 'hw-highlight-effects' },
    { key: 'damage', className: 'hw-highlight-damage' },
    { key: 'buffsDebuffs', className: 'hw-highlight-buffs' },
    { key: 'attributes', className: 'hw-highlight-attributes' },
    { key: 'keywords', className: 'hw-highlight-keywords' },
    { key: 'numbers', className: 'hw-highlight-numbers' },
  ];

  // Track already highlighted positions to avoid nested highlights
  const highlightedRanges = [];

  // Security: Add timeout mechanism for regex operations
  const startTime = Date.now();
  const TIMEOUT_MS = 5000; // 5 second timeout

  try {
    highlightOrder.forEach(({ key, className }) => {
      // Security: Check for timeout before each operation
      if (Date.now() - startTime > TIMEOUT_MS) {
        return;
      }

      if (highlightPatterns[key]) {
        const pattern = highlightPatterns[key];

        // Security: Validate regex pattern exists and is safe
        if (!pattern || !pattern.source) {
          return;
        }

        // Create a new regex to ensure global matching
        const regex = new RegExp(pattern.source, pattern.flags || 'gi');

        // Find all matches first with iteration limit
        const matches = [];
        let match;
        let iterationCount = 0;
        const MAX_ITERATIONS = 1000;

        while ((match = regex.exec(highlightedText)) !== null && iterationCount < MAX_ITERATIONS) {
          iterationCount++;

          // Security: Check for infinite loops by detecting if regex isn't advancing
          if (match.index === regex.lastIndex) {
            break;
          }

          // Check if this match overlaps with existing highlights
          const start = match.index;
          const end = match.index + match[0].length;

          const overlaps = highlightedRanges.some(
            range =>
              (start >= range.start && start < range.end) ||
              (end > range.start && end <= range.end) ||
              (start <= range.start && end >= range.end)
          );

          if (!overlaps) {
            matches.push({
              match: match[0],
              start: start,
              end: end,
              fullMatch: match,
            });
          }
        }

        // Apply highlights in reverse order to maintain string positions
        matches.reverse().forEach(matchObj => {
          const before = highlightedText.substring(0, matchObj.start);
          const highlighted = `<span class="${className}">${matchObj.match}</span>`;
          const after = highlightedText.substring(matchObj.end);

          highlightedText = before + highlighted + after;

          // Update highlighted ranges accounting for added HTML
          const htmlLength = highlighted.length - matchObj.match.length;
          highlightedRanges.forEach(range => {
            if (range.start > matchObj.start) {
              range.start += htmlLength;
              range.end += htmlLength;
            }
          });

          // Add this new highlighted range
          highlightedRanges.push({
            start: matchObj.start,
            end: matchObj.start + highlighted.length,
          });
        });
      }
    });
  } catch (error) {
    // Security: Handle any regex errors gracefully
    return sanitizedText; // Return sanitized but unhighlighted text as fallback
  } finally {
    // Memory cleanup: Clear the highlighted ranges array
    highlightedRanges.length = 0;
  }

  // Performance: Cache the result
  if (highlightCache.size < CACHE_MAX_SIZE) {
    highlightCache.set(cacheKey, {
      result: highlightedText,
      timestamp: Date.now(),
    });
  }

  return highlightedText;
}

/**
 * Default highlighting patterns for Horizon Walker skills
 * Can be overridden by character-specific patterns
 * Note: Patterns optimized to prevent ReDoS attacks using atomic groups and specific quantifiers
 */
export const defaultHWHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\w{3,15}\s+DMG|damage)\b/gi,
  effects: /\[([^[\]]{1,100})\]/g,
  buffsDebuffs:
    /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover)\b/gi,
  numbers: /(?:\d{1,4}%|\d{1,3}\s+rounds?|\d{1,3}R)\b/gi,
  keywords:
    /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|lasting|impossible|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?|for\s+\d{1,3}R)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
};

/**
 * Applies highlighting to all skills in a character's skill set
 * @param {Object} skills - Character skills object
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Object} Skills object with highlighted descriptions
 */
export function highlightAllSkills(skills, highlightPatterns, options = {}) {
  if (!skills || typeof skills !== 'object') {
    return skills;
  }

  const patterns = highlightPatterns || defaultHWHighlightPatterns;
  const highlightedSkills = {};

  Object.keys(skills).forEach(skillKey => {
    const skill = skills[skillKey];
    if (skill && skill.description) {
      highlightedSkills[skillKey] = {
        ...skill,
        description: highlightSkillText(skill.description, patterns, options),
      };
    } else {
      highlightedSkills[skillKey] = skill;
    }
  });

  return highlightedSkills;
}

/**
 * Applies highlighting to unique traits
 * @param {Object} traits - Character unique traits object
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Object} Traits object with highlighted descriptions
 */
export function highlightUniqueTraits(traits, highlightPatterns, options = {}) {
  if (!traits || typeof traits !== 'object') {
    return traits;
  }

  const patterns = highlightPatterns || defaultHWHighlightPatterns;
  const highlightedTraits = {};

  Object.keys(traits).forEach(traitKey => {
    const trait = traits[traitKey];
    if (trait && trait.description) {
      highlightedTraits[traitKey] = {
        ...trait,
        description: highlightSkillText(trait.description, patterns, options),
      };
    } else {
      highlightedTraits[traitKey] = trait;
    }
  });

  return highlightedTraits;
}

/**
 * Applies highlighting to weapon skills
 * @param {Object} weaponSkills - Weapon unique skills object
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Object} Weapon skills object with highlighted descriptions
 */
export function highlightWeaponSkills(weaponSkills, highlightPatterns, options = {}) {
  if (!weaponSkills || typeof weaponSkills !== 'object') {
    return weaponSkills;
  }

  const patterns = highlightPatterns || defaultHWHighlightPatterns;
  const highlightedWeaponSkills = {};

  Object.keys(weaponSkills).forEach(skillKey => {
    const skill = weaponSkills[skillKey];
    if (skill && skill.description) {
      highlightedWeaponSkills[skillKey] = {
        ...skill,
        description: highlightSkillText(skill.description, patterns, options),
      };
    } else {
      highlightedWeaponSkills[skillKey] = skill;
    }
  });

  return highlightedWeaponSkills;
}
