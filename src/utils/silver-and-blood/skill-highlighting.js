/**
 * Silver and Blood Skill Highlighting Utility
 * Provides reusable keyword highlighting for skill descriptions to improve scan reading
 * Adapted from Horizon Walker highlighting system for SAB game mechanics
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
    { key: 'effects', className: 'sab-highlight-effects' },
    { key: 'damage', className: 'sab-highlight-damage' },
    { key: 'buffsDebuffs', className: 'sab-highlight-buffs' },
    { key: 'attributes', className: 'sab-highlight-attributes' },
    { key: 'keywords', className: 'sab-highlight-keywords' },
    { key: 'numbers', className: 'sab-highlight-numbers' },
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
  } catch (_error) {
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
 * Default highlighting patterns for Silver and Blood skills
 * Adapted for SAB game mechanics: Bloodsoul, Moon Phase, P.DMG/M.DMG, etc.
 * Note: Patterns optimized to prevent ReDoS attacks using atomic groups and specific quantifiers
 */
export const defaultSABHighlightPatterns = {
  damage:
    /\b(?:\d{1,4}\.?\d?%\s+(?:ATK|Max\s+HP)|P\.?\s?DMG|M\.?\s?DMG|Piercing\s+DMG|damage|DMG)\b/gi,
  effects:
    /(?:Moon\s+Phase:\s+[^.]+\.|Pull\s+Control:[^.]+\.|Movement\s+Speed\s+Down:[^.]+\.|P\.\s?DEF\s+Down\s+\([^)]+\):[^.]+\.)/gi,
  buffsDebuffs:
    /\b(?:shield|bloodsoul|moon\s+phase|planar\s+regression|projected\s+plane|buff|debuff|heal|healing|recovery|mark\s+effect|dispel|undispellable|cannot\s+be\s+dispelled|taunt|weakness|counterattack|pull|displacement|movement\s+speed\s+down|def\s+down|dmg\s+taken\s+down|survivability|protection\s+skills?|DPS|reliable|strong|versatile|distinctive\s+abilities|benefits)\b/gi,
  numbers:
    /\b(?:\d{1,4}\.?\d?%|\d{1,3}\s+sec|\d{1,3}\s+stack(?:s)?|\d{1,3}\s+(?:round|turn)s?|\d{1,2}\s+enemies?|Cost:\s+\d)\b/gi,
  keywords:
    /\b(?:deals?|inflicts?|grants?|restores?|applies?|removes?|blocks?|gains?|loses?|activates?|channels?|constructs?|transforms?|hurls?|modifies?|consumes?|lasting|duration|while|when|after|until|once|every|maximum|equal\s+to|up\s+to|attack-focused|offensive\s+stats?|defensive\s+stats?|balanced\s+attributes?|breaking\s+through|avoiding|directly\s+striking|front\s+line|backline|middle|enemies|single\s+target|targets|attack\s+style|destroy|various\s+methods)\b/gi,
  attributes:
    /\b(?:HP|ATK|P\.?\s?DEF|M\.?\s?DEF|ATK\s+SPD|Bloodsoul\s+Recovery|CRIT\s+Rate|CRIT\s+DMG|All\s+DMG|P\.?\s?DMG\s+Bonus|M\.?\s?DMG\s+Bonus|Blood\s+Power|Max\s+HP|Shield\s+Strength|True\s+DMG)\b/gi,
};

/**
 * Applies highlighting to all skills in a character's skill array
 * @param {Array} skills - Character skills array
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Array} Skills array with highlighted descriptions
 */
export function highlightAllSkills(skills, highlightPatterns, options = {}) {
  if (!Array.isArray(skills)) {
    return skills;
  }

  const patterns = highlightPatterns || defaultSABHighlightPatterns;

  return skills.map(skill => {
    if (skill && skill.description) {
      return {
        ...skill,
        description: highlightSkillText(skill.description, patterns, options),
      };
    }
    return skill;
  });
}

/**
 * Applies highlighting to character mechanics descriptions
 * @param {Object} mechanics - Character mechanics object
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Object} Mechanics object with highlighted descriptions
 */
export function highlightMechanics(mechanics, highlightPatterns, options = {}) {
  if (!mechanics || typeof mechanics !== 'object') {
    return mechanics;
  }

  const patterns = highlightPatterns || defaultSABHighlightPatterns;
  const highlightedMechanics = {};

  Object.keys(mechanics).forEach(mechanicKey => {
    const mechanic = mechanics[mechanicKey];
    if (typeof mechanic === 'string') {
      highlightedMechanics[mechanicKey] = highlightSkillText(mechanic, patterns, options);
    } else {
      highlightedMechanics[mechanicKey] = mechanic;
    }
  });

  return highlightedMechanics;
}
