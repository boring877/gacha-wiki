/**
 * Horizon Walker Mercenary Data Validation Utility
 * Provides security validation for mercenary data to prevent XSS and ensure data integrity
 */

/**
 * Advanced HTML/XSS sanitization function
 * @param {string} input - The input string to sanitize
 * @param {boolean} isTrustedContent - Whether the content is from trusted sources (default: false)
 * @returns {string} Sanitized string safe for HTML output
 */
export function sanitizeHTML(input, isTrustedContent = false) {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized;

  if (isTrustedContent) {
    // For trusted content (like mercenary data), only sanitize actual threats
    sanitized = input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Preserve quotes and apostrophes in trusted content
  } else {
    // For untrusted content, apply full HTML entity encoding
    sanitized = input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // Remove potentially dangerous patterns regardless of trust level
  sanitized = sanitized
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/style\s*=/gi, '')
    .replace(/expression\s*\(/gi, '');

  return sanitized;
}

/**
 * Validates mercenary data structure for security and completeness
 * @param {Object} mercenaryData - Mercenary data object to validate
 * @returns {Object} Validation result with isValid flag and errors array
 */
export function validateMercenaryData(mercenaryData) {
  const errors = [];

  if (!mercenaryData || typeof mercenaryData !== 'object') {
    return { isValid: false, errors: ['Mercenary data must be an object'] };
  }

  // Required string fields validation
  const requiredStringFields = ['name', 'rarity', 'description'];
  requiredStringFields.forEach(field => {
    if (!mercenaryData[field] || typeof mercenaryData[field] !== 'string') {
      errors.push(`${field} is required and must be a string`);
    } else if (mercenaryData[field].length > 1000) {
      errors.push(`${field} exceeds maximum length of 1000 characters`);
    }
  });

  // Validate numeric fields
  if (mercenaryData.cost !== undefined) {
    if (
      typeof mercenaryData.cost !== 'number' ||
      mercenaryData.cost < 0 ||
      mercenaryData.cost > 20
    ) {
      errors.push('Cost must be a number between 0 and 20');
    }
  }

  // Validate stats object
  if (mercenaryData.stats && typeof mercenaryData.stats === 'object') {
    Object.entries(mercenaryData.stats).forEach(([key, value]) => {
      if (typeof value !== 'string' && typeof value !== 'number') {
        errors.push(`Stat ${key} must be a string or number`);
      }
      // Validate stat values are reasonable (prevent injection via large numbers)
      if (typeof value === 'number' && (value < 0 || value > 999999)) {
        errors.push(`Stat ${key} must be between 0 and 999999`);
      }
    });
  }

  // Validate skills structure
  if (mercenaryData.skills && typeof mercenaryData.skills === 'object') {
    Object.entries(mercenaryData.skills).forEach(([skillKey, skill]) => {
      if (!skill || typeof skill !== 'object') {
        errors.push(`Skill ${skillKey} must be an object`);
        return;
      }

      if (!skill.name || typeof skill.name !== 'string') {
        errors.push(`Skill ${skillKey} must have a name`);
      }

      if (!skill.description || typeof skill.description !== 'string') {
        errors.push(`Skill ${skillKey} must have a description`);
      } else if (skill.description.length > 2000) {
        errors.push(`Skill ${skillKey} description exceeds maximum length`);
      }

      // Validate AP cost
      if (skill.apCost !== undefined) {
        if (typeof skill.apCost !== 'number' || skill.apCost < 0 || skill.apCost > 200) {
          errors.push(`Skill ${skillKey} AP cost must be between 0 and 200`);
        }
      }
    });
  }

  // Validate highlighting patterns for security
  if (mercenaryData.highlightPatterns) {
    Object.entries(mercenaryData.highlightPatterns).forEach(([key, pattern]) => {
      if (pattern instanceof RegExp) {
        // Check for potentially dangerous regex patterns
        const patternSource = pattern.source;
        if (patternSource.includes('(?:') && patternSource.includes(')*')) {
          errors.push(`Highlighting pattern ${key} may contain dangerous nested quantifiers`);
        }
        if (patternSource.length > 500) {
          errors.push(`Highlighting pattern ${key} is too complex`);
        }
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}

/**
 * Sanitizes mercenary data by cleaning all text fields
 * @param {Object} mercenaryData - Mercenary data to sanitize
 * @param {boolean} isTrustedContent - Whether the mercenary data is from trusted sources (default: true)
 * @returns {Object} Sanitized mercenary data
 */
export function sanitizeMercenaryData(mercenaryData, isTrustedContent = true) {
  if (!mercenaryData || typeof mercenaryData !== 'object') {
    return {};
  }

  const sanitized = { ...mercenaryData };

  // Sanitize string fields using trusted content flag
  ['name', 'description', 'story', 'role', 'useability'].forEach(field => {
    if (sanitized[field] && typeof sanitized[field] === 'string') {
      sanitized[field] = sanitizeHTML(sanitized[field], isTrustedContent);
    }
  });

  // Sanitize skills
  if (sanitized.skills) {
    sanitized.skills = Object.fromEntries(
      Object.entries(sanitized.skills).map(([key, skill]) => [
        key,
        {
          ...skill,
          name: sanitizeHTML(skill.name || '', isTrustedContent),
          description: sanitizeHTML(skill.description || '', isTrustedContent),
        },
      ])
    );
  }

  // Sanitize traits
  if (sanitized.traits) {
    sanitized.traits = Object.fromEntries(
      Object.entries(sanitized.traits).map(([key, trait]) => [
        key,
        {
          ...trait,
          name: sanitizeHTML(trait.name || '', isTrustedContent),
          description: sanitizeHTML(trait.description || '', isTrustedContent),
        },
      ])
    );
  }

  // Sanitize weapon skills if applicable
  if (sanitized.weapon && sanitized.weapon.uniqueSkills) {
    sanitized.weapon.uniqueSkills = Object.fromEntries(
      Object.entries(sanitized.weapon.uniqueSkills).map(([key, skill]) => [
        key,
        {
          ...skill,
          name: sanitizeHTML(skill.name || '', isTrustedContent),
          description: sanitizeHTML(skill.description || '', isTrustedContent),
        },
      ])
    );
  }

  return sanitized;
}

/**
 * Validates and sanitizes highlighting patterns
 * @param {Object} patterns - Highlighting patterns to validate
 * @returns {Object} Safe highlighting patterns
 */
export function sanitizeHighlightPatterns(patterns) {
  if (!patterns || typeof patterns !== 'object') {
    return {};
  }

  const safePatternsKeys = [
    'damage',
    'effects',
    'buffsDebuffs',
    'percentages',
    'statChanges',
    'keywords',
    'attributes',
    'numbers',
    'traits',
    'useability',
  ];

  const sanitizedPatterns = {};

  Object.entries(patterns).forEach(([key, pattern]) => {
    // Only allow known safe pattern keys
    if (safePatternsKeys.includes(key) && pattern instanceof RegExp) {
      // Additional safety checks for regex patterns
      const source = pattern.source;
      if (source.length <= 500 && !source.includes('(?:.*)*') && !source.includes('(.*)*')) {
        sanitizedPatterns[key] = pattern;
      }
    }
  });

  return sanitizedPatterns;
}
