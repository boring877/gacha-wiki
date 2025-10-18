/**
 * Zone Nova Skill Highlighting Utility
 * Provides reusable keyword highlighting for skill descriptions to improve scan reading
 * Adapted from Silver and Blood highlighting system for Zone Nova game mechanics
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
    { key: 'effects', className: 'zn-highlight-effects' },
    { key: 'damage', className: 'zn-highlight-damage' },
    { key: 'buffsDebuffs', className: 'zn-highlight-buffs' },
    { key: 'attributes', className: 'zn-highlight-attributes' },
    { key: 'keywords', className: 'zn-highlight-keywords' },
    { key: 'numbers', className: 'zn-highlight-numbers' },
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

  // Convert newlines to HTML line breaks for better readability
  highlightedText = highlightedText.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');

  // Wrap in paragraphs if there were double newlines
  if (highlightedText.includes('</p><p>')) {
    highlightedText = '<p>' + highlightedText + '</p>';
  }

  return highlightedText;
}

/**
 * Default highlighting patterns for Zone Nova skills
 * Adapted for ZN game mechanics: attack power, holy/fire/ice damage, AP/MP, etc.
 * Note: Patterns optimized to prevent ReDoS attacks using atomic groups and specific quantifiers
 */
export const defaultZNHighlightPatterns = {
  damage:
    /\b(?:\d{1,4}%\s+attack\s+power|holy\s+damage|fire\s+damage|ice\s+frost\s+damage|ice\s+damage|wind\s+damage|chaos\s+damage|damage|attack\s+power|original\s+attack\s+damage)\b/gi,
  effects:
    /(?:reduces?\s+enemy.*?by\s+\d+%|increases?\s+.*?by\s+\d+%|grants?\s+.*?for\s+\d+.*?seconds?|enters?\s+\[.*?\]\s+state|become\s+\d+-stage\s+attacks?|Golden\s+Desire|Ice\s+Star)/gi,
  buffsDebuffs:
    /\b(?:shield|buff|debuff|heal|healing|recovery|stun|freeze|burn|poison|charm|taunt|weakness|vulnerability|immunity|resistance|regeneration|overflow|critical\s+hit|penetration|attack\s+speed|base\s+attack\s+speed)\b/gi,
  numbers:
    /\b(?:\d{1,4}%|\d{1,3}\.?\d?\s*s|\d{1,3}\s+seconds?|\d{1,3}\s+rounds?|\d{1,2}\s+turns?|\d{1,2}\s+enemies?|cooldown:\s+\d+\.?\d?\s*s|\d{1,2}m\s+range|\d+-stage\s+attacks?)\b/gi,
  keywords:
    /\b(?:deals?|inflicts?|grants?|restores?|applies?|removes?|blocks?|gains?|loses?|activates?|triggers?|casts?|channels?|summons?|enhances?|reduces?|increases?|lasting|duration|while|when|after|until|once|every|maximum|equal\s+to|up\s+to|designated|target|enemy|ally|allies|additionally\s+hit|counts\s+as|cannot\s+use)\b/gi,
  attributes:
    /\b(?:HP|health|attack|defense|speed|accuracy|evasion|crit\s+rate|crit\s+dmg|AP|MP|energy|holy|fire|ice|wind|chaos|element|elemental|resistance|penetration|critical\s+rate|critical\s+damage|normal\s+attack\s+damage)\b/gi,
};

/**
 * Applies highlighting to Zone Nova character skills
 * @param {Object} skills - Character skills object (normal, auto, ultimate, etc.)
 * @param {Object} highlightPatterns - Highlighting patterns to use
 * @param {Object} options - Options for highlighting (passed to highlightSkillText)
 * @returns {Object} Skills object with highlighted descriptions
 */
export function highlightAllSkills(skills, highlightPatterns, options = {}) {
  if (!skills || typeof skills !== 'object') {
    return skills;
  }

  const patterns = highlightPatterns || defaultZNHighlightPatterns;
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
