/**
 * Zone Nova Update Highlighting Utility
 * Provides highlighting for update announcements, maintenance notices, and recruitment pages
 * Extends the skill highlighting system for update-specific content
 */

// Cache for highlighted content to improve performance
const updateHighlightCache = new Map();
const CACHE_MAX_SIZE = 500;
const CACHE_TTL = 600000; // 10 minutes (longer for updates)

/**
 * Creates a cache key from text and patterns
 */
function createUpdateCacheKey(text, patterns) {
  const patternString = JSON.stringify(patterns);
  return `update_${text.length}_${text.substring(0, 50)}_${patternString.length}`;
}

/**
 * Cleans expired entries from cache
 */
function cleanUpdateCache() {
  const now = Date.now();
  for (const [key, value] of updateHighlightCache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      updateHighlightCache.delete(key);
    }
  }
}

/**
 * Update-specific highlighting patterns for Zone Nova announcements
 * Focuses on character names, events, rewards, dates, and key announcement terms
 */
export const updateHighlightPatterns = {
  // Character names (including current and popular characters)
  characters:
    /\b(?:Ibaraki-dōji|Ibaraki-doji|Shuten-dōji|Shuten-doji|Tamamo-no-Mae|Lavinia|Ravinia|Gaia|Yuis|Thor|Odin|Athena|Freyja|Freya|Guinevere|Cleopatra|Apollo|Artemis|Hera|Loki|Lancelot|Jeanne\s+d'Arc|Jeanne-d'Arc|Anubis|Bastet|Horus|Tefnut|Shu|Afrodite|Rose|Penny|Naiya|Nini|Shanna|Kela|Chiya|Leviathan|Snow\s+Girl|Zashiki\s+Warashi|Belphegar|Master\s+Mother|Legendary\s+Character|SSR\s+Character)\b/gi,

  // Event types and activities
  events:
    /\b(?:Limited\s+(?:Time\s+)?(?:Character\s+)?Recruitment|Limited\s+(?:Remembrance|Memory)\s+Recruitment|Limited\s+Pursuit\s+Recruitment|Maintenance|Battle\s+Pass|Space-Time\s+Rift|Rift\s+Tide|Rift\s+Surge|BETA\s+Squad|Divine\s+Spirit\s+Trial|Apocalypse\s+Battle|Guild\s+(?:War|Raid|Trials)|Arena|Dungeon|Resource\s+Dungeon|Character\s+(?:Promotion|Awakening)\s+Dungeon|Pursuit\s+Promotion\s+Dungeon|Double\s+Rewards|Login\s+Rewards|Military\s+Supply|Activity\s+Packages?|Celebration|Popularity\s+(?:Vote|Voting)|Thunder\s+King|Divine\s+Twilight|Twilight\s+of\s+the\s+(?:Divine|Ancients?)|Winter's\s+Prelude|Ice\s+Sealed\s+(?:Mist|Finale)|Harmony\s+Generation|Hyakki\s+Yagyō)\b/gi,

  // Rewards and compensation
  rewards:
    /\b(?:Photon\s+Stones?\s*x?\s*\d*|Light\s+(?:Stone|Ethstone)\s*x?\s*\d*|Lumenite\s*x?\s*\d*|Photostone\s*x?\s*\d*|Energy\s+(?:Cube|Supplement)\s*x?\s*\d*|Phantom\s+Magic\s*x?\s*\d*|Stamina\s+(?:Refill|Potion|Supplement)\s*x?\s*\d*|Activity\s+Coins?|Summoning\s+(?:Cube|normal\s+banner)\s*x?\s*\d*|Enhancement\s+Materials?|Affection\s+Materials?|Improvement\s+Materials?|Body\s+Blade\s+Supplement\s*x?\s*\d*|Original\s+(?:Energy\s+Magic\s+Cubes?|Ancestor)\s*x?\s*\d*|Automatic\s+Love\s+Machine\s*x?\s*\d*|Tuning\s+Frequency\s*x?\s*\d*|Fantasy\s+Color\s+Cubes?|Prismatic\s+Cubes?\s*x?\s*\d*|Heavy\s+Plastic\s+Dice\s*x?\s*\d*|Carving\s+Ritual\s+Cards?\s*x?\s*\d*|Photon\s+Carving\s+Device|Legend\s+Runestone|compensation|reward)\b/gi,

  // Dates, times, and durations
  dates:
    /\b(?:\d{4}\/\d{1,2}\/\d{1,2}|(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}|\d{1,2}:\d{2}(?::\d{2})?|(?:\d+\s+)?hours?|(?:\d+\s+)?minutes?|estimated\s+to\s+take\s+\d+\s+hours?|Starting\s+from|Opening\s+time|Event\s+(?:Time|Period)|Maintenance\s+time|Distribution\s+method|before\s+\d{4}\/\d{1,2}\/\d{1,2})\b/gi,

  // Game mechanics and attributes
  mechanics:
    /\b(?:Healer|Guardian|Destroyer|Rogue|Buffer|DPS|Support|Tank|Interference\s+Master|Furnace\s+Attribute|Holy|Fire|Ice|Wind|Chaos|Divine\s+Saint?|close-combat\s+support|long-range\s+attacks?|ranged\s+archer|large-scale\s+killing\s+damage|DoT-based\s+damage|consecutive\s+ultimate\s+skills?|high\s+mobility|enhanced\s+bullets?|attack\s+speed\s+boost|exclusive\s+(?:memory|memories|SSR\s+memories)|awakening\s+level|energy\s+recovery|\[Curse\]|Curse)\b/gi,

  // Special announcement terms
  announcements:
    /\b(?:Dear\s+Captains?|Thank\s+you\s+(?:all\s+)?for\s+your\s+continued\s+support|game\s+updates?\s+and\s+maintenance|better\s+gaming\s+experience|system\s+optimization|new\s+content\s+online|unable\s+to\s+log\s+into\s+the\s+game|prepare\s+in\s+advance|main\s+story\s+Chapter\s+\d+|activity\s+entrance|main\s+interface|activity\s+shop|in-game\s+(?:mail|mailbox)|after\s+maintenance\s+is\s+completed|logged\s+into\s+the\s+game\s+before|Former\s+captain|highest\s+secretary|freelance\s+consultant|military\s+forces|field\s+operations|wealthy\s+family|strong\s+personality|exceptional\s+efficiency|profit-maximizing\s+mentality|uncompromising\s+life\s+philosophy)\b/gi,

  // Numbers and percentages (more specific than general skill highlighting)
  numbers:
    /\b(?:\d{1,4}%|\d{1,3}\.?\d?\s*s|\d{1,3}\s+seconds?|\d{1,3}\s+(?:rounds?|turns?)|\d{1,2}\s+(?:enemies?|teammates?)|\d{1,3}\s+(?:Photon|Light)\s+Stones?|\d{2,3}\s+Gems?|x\s*\d{1,4}|level\s+\d{1,2}|Chapter\s+\d+|Part\s+\d+|Tide\s+[IVX]+|Surge\s+[IVX]+|100\s+Days?|500,?000\s+downloads?)\b/gi,
};

/**
 * Applies update-specific highlighting to text
 * @param {string} text - The text to highlight
 * @param {Object} options - Configuration options
 * @returns {string} HTML string with highlighted content
 */
export function highlightUpdateText(text, options = {}) {
  // Input validation
  if (!text || typeof text !== 'string') {
    return text || '';
  }

  // Security: Limit text length
  if (text.length > 15000) {
    text = text.substring(0, 15000) + '...';
  }

  const { isTrustedContent = true } = options;

  // Performance: Check cache first
  const cacheKey =
    createUpdateCacheKey(text, updateHighlightPatterns) + `_trusted:${isTrustedContent}`;
  const cached = updateHighlightCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.result;
  }

  // Clean cache periodically
  if (updateHighlightCache.size > CACHE_MAX_SIZE) {
    cleanUpdateCache();
  }

  // Security: Context-aware sanitization
  let sanitizedText;
  if (isTrustedContent) {
    sanitizedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  } else {
    sanitizedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }

  let highlightedText = sanitizedText;

  // Apply highlights in specific order to avoid conflicts
  // Simplified to use only two colors: primary (red) and secondary (blue)
  const highlightOrder = [
    { key: 'characters', className: 'zn-update-highlight-primary' },
    { key: 'events', className: 'zn-update-highlight-primary' },
    { key: 'rewards', className: 'zn-update-highlight-primary' },
    { key: 'mechanics', className: 'zn-update-highlight-primary' },
    { key: 'announcements', className: 'zn-update-highlight-primary' },
    { key: 'dates', className: 'zn-update-highlight-secondary' },
    { key: 'numbers', className: 'zn-update-highlight-secondary' },
  ];

  // Track highlighted positions to avoid overlaps
  const highlightedRanges = [];
  const startTime = Date.now();
  const TIMEOUT_MS = 3000;

  try {
    highlightOrder.forEach(({ key, className }) => {
      if (Date.now() - startTime > TIMEOUT_MS) {
        return;
      }

      if (updateHighlightPatterns[key]) {
        const pattern = updateHighlightPatterns[key];

        if (!pattern || !pattern.source) {
          return;
        }

        const regex = new RegExp(pattern.source, pattern.flags || 'gi');
        const matches = [];
        let match;
        let iterationCount = 0;
        const MAX_ITERATIONS = 500;

        while ((match = regex.exec(highlightedText)) !== null && iterationCount < MAX_ITERATIONS) {
          iterationCount++;

          if (match.index === regex.lastIndex) {
            break;
          }

          const start = match.index;
          const end = match.index + match[0].length;

          // Check for overlaps
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
            });
          }
        }

        // Apply highlights in reverse order
        matches.reverse().forEach(matchObj => {
          const before = highlightedText.substring(0, matchObj.start);
          const highlighted = `<span class="${className}">${matchObj.match}</span>`;
          const after = highlightedText.substring(matchObj.end);

          highlightedText = before + highlighted + after;

          // Update highlighted ranges
          const htmlLength = highlighted.length - matchObj.match.length;
          highlightedRanges.forEach(range => {
            if (range.start > matchObj.start) {
              range.start += htmlLength;
              range.end += htmlLength;
            }
          });

          highlightedRanges.push({
            start: matchObj.start,
            end: matchObj.start + highlighted.length,
          });
        });
      }
    });
  } catch (_error) {
    return sanitizedText;
  }

  // Cache the result
  if (updateHighlightCache.size < CACHE_MAX_SIZE) {
    updateHighlightCache.set(cacheKey, {
      result: highlightedText,
      timestamp: Date.now(),
    });
  }

  return highlightedText;
}

/**
 * Applies highlighting to an array of content strings (like update content arrays)
 * @param {string[]} contentArray - Array of content strings
 * @param {Object} options - Options for highlighting
 * @returns {string[]} Array of highlighted content strings
 */
export function highlightUpdateContentArray(contentArray, options = {}) {
  if (!Array.isArray(contentArray)) {
    return contentArray;
  }

  return contentArray.map(content => {
    if (typeof content === 'string') {
      return highlightUpdateText(content, options);
    }
    return content;
  });
}

/**
 * Applies highlighting to TL;DR array specifically
 * @param {string[]} tldrArray - Array of TL;DR strings
 * @param {Object} options - Options for highlighting
 * @returns {string[]} Array of highlighted TL;DR strings
 */
export function highlightTldrArray(tldrArray, options = {}) {
  if (!Array.isArray(tldrArray)) {
    return tldrArray;
  }

  return tldrArray.map(tldr => {
    if (typeof tldr === 'string') {
      return highlightUpdateText(tldr, options);
    }
    return tldr;
  });
}
