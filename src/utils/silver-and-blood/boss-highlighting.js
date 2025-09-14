// Boss-specific text highlighting utility for Silver and Blood
// Simpler and more focused than character highlighting

export const bossHighlightPatterns = [
  // Damage types
  { pattern: /P\. DMG/g, class: 'highlight-damage' },
  { pattern: /M\. DMG/g, class: 'highlight-damage' },
  { pattern: /Physical DMG/g, class: 'highlight-damage' },
  { pattern: /Magical DMG/g, class: 'highlight-damage' },

  // Status effects
  { pattern: /Paralysis/g, class: 'highlight-status' },
  { pattern: /Invincibility/g, class: 'highlight-status' },
  { pattern: /Vulnerability/g, class: 'highlight-status' },
  { pattern: /Induction/g, class: 'highlight-status' },
  { pattern: /Degradation/g, class: 'highlight-status' },

  // Numbers and percentages
  { pattern: /(\d+(?:\.\d+)?%)/g, class: 'highlight-percentage' },
  { pattern: /(\d+(?:\.\d+)? sec)/g, class: 'highlight-duration' },
  { pattern: /(\d+ stacks?)/g, class: 'highlight-stacks' },
  { pattern: /(\d+(?:\.\d+)? meters?)/g, class: 'highlight-distance' },

  // Important mechanics
  { pattern: /Energy/g, class: 'highlight-energy' },
  { pattern: /Worker Bee/g, class: 'highlight-summon' },
  { pattern: /Cannon Mode/g, class: 'highlight-mode' },
  { pattern: /Energy Core/g, class: 'highlight-core' },
  { pattern: /dormancy/g, class: 'highlight-mode' },

  // Control effects
  { pattern: /Control: Strong/g, class: 'highlight-control' },
  { pattern: /Ultimate/g, class: 'highlight-skill-type' },
  { pattern: /Active Skills/g, class: 'highlight-skill-type' },
  { pattern: /Basic Attacks/g, class: 'highlight-skill-type' },
];

/**
 * Apply highlighting to boss skill description
 * @param {string} text - The text to highlight
 * @returns {string} - HTML string with highlighted elements
 */
export function highlightBossText(text) {
  if (!text || typeof text !== 'string') {
    return text || '';
  }

  let highlightedText = text;

  // Apply each highlighting pattern
  bossHighlightPatterns.forEach(({ pattern, class: className }) => {
    highlightedText = highlightedText.replace(pattern, `<span class="${className}">$&</span>`);
  });

  return highlightedText;
}

/**
 * Highlight all skills in a boss skills array
 * @param {Array} skills - Array of skill objects
 * @returns {Array} - Array of skills with highlighted descriptions
 */
export function highlightBossSkills(skills) {
  if (!Array.isArray(skills)) {
    return [];
  }

  return skills.map(skill => ({
    ...skill,
    description: highlightBossText(skill.description),
  }));
}
