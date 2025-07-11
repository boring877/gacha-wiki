// Silver and Blood Damage Mechanics Data
// Reusable data structures for damage mechanics content

// Base structure for damage mechanics pages
export const createDamageMechanicsPage = ({
  id,
  title,
  subtitle,
  description,
  sections = [],
  formulas = [],
  examples = [],
  tips = [],
  references = [],
  lastUpdated = new Date()
}) => {
  return {
    meta: {
      id,
      title: `${title} - Silver and Blood Damage Mechanics - GachaWiki`,
      description,
      lastUpdated,
      breadcrumbItems: [
        { name: "Silver and Blood", href: "/guides/silver-and-blood/" },
        { name: "Damage Mechanics", href: "/guides/silver-and-blood/damage-mechanics/" },
        { name: title, href: `/guides/silver-and-blood/damage-mechanics/${id}` }
      ]
    },
    header: {
      title,
      subtitle,
      description
    },
    sections,
    formulas,
    examples,
    tips,
    references
  };
};

// Common formula components
export const createFormula = ({
  id,
  name,
  formula,
  description,
  variables = [],
  examples = []
}) => {
  return {
    id,
    name,
    formula,
    description,
    variables,
    examples
  };
};

// Example structure
export const createExample = ({
  id,
  title,
  description,
  calculation,
  result,
  notes = []
}) => {
  return {
    id,
    title,
    description,
    calculation,
    result,
    notes
  };
};

// Tip structure
export const createTip = ({
  id,
  icon,
  title,
  description,
  priority = "medium"
}) => {
  return {
    id,
    icon,
    title,
    description,
    priority
  };
};

// Section structure
export const createSection = ({
  id,
  title,
  type = "content", // content, formula, example, tip, table
  content = [],
  data = null
}) => {
  return {
    id,
    title,
    type,
    content,
    data
  };
};

// Table structure
export const createTable = ({
  id,
  headers,
  rows,
  highlightedRows = [],
  caption = ""
}) => {
  return {
    id,
    headers,
    rows,
    highlightedRows,
    caption
  };
};

// Defense Formulas Page Data
export const defenseFormulasData = createDamageMechanicsPage({
  id: "defense-formulas",
  title: "Defense Formulas",
  subtitle: "Understanding Silver and Blood's Defense System",
  description: "Master the fundamental defense calculations that determine how much damage your characters take in Silver and Blood.",
  sections: [
    createSection({
      id: "overview",
      title: "Core Defense Mechanics",
      type: "content",
      content: [
        "Silver and Blood uses a comprehensive damage calculation system that factors in attack power, skill multipliers, defense values, and damage reduction percentages.",
        "Understanding this formula is essential for optimizing your character builds and team compositions."
      ]
    })
  ],
  formulas: [
    createFormula({
      id: "final-damage",
      name: "Final Damage Formula",
      formula: "Final Damage = (Attack × Skill Multiplier × 1300) ÷ (Defense + 1300) × (1 - Damage Reduction%)",
      description: "The complete damage calculation formula used in Silver and Blood",
      variables: [
        { name: "Attack", description: "Character's total attack power (base + equipment + buffs)" },
        { name: "Skill Multiplier", description: "The multiplier value of the skill being used (e.g., 1.5x, 2.0x)" },
        { name: "Defense", description: "Target's total defense value (base + equipment + buffs)" },
        { name: "1300", description: "Defense coefficient constant used in Silver and Blood" },
        { name: "Damage Reduction%", description: "Additional damage reduction from abilities, expressed as decimal (e.g., 0.2 for 20%)" }
      ]
    }),
    createFormula({
      id: "base-damage",
      name: "Base Damage Calculation",
      formula: "Base Damage = Attack × Skill Multiplier × 1300",
      description: "The initial damage calculation before defense reduction",
      variables: [
        { name: "Attack", description: "Character's total attack power" },
        { name: "Skill Multiplier", description: "Skill's damage multiplier" },
        { name: "1300", description: "Base damage coefficient" }
      ]
    }),
    createFormula({
      id: "defense-reduction",
      name: "Defense Reduction Factor",
      formula: "Defense Factor = Base Damage ÷ (Defense + 1300)",
      description: "How defense reduces incoming damage",
      variables: [
        { name: "Base Damage", description: "Damage before defense calculation" },
        { name: "Defense", description: "Target's defense value" },
        { name: "1300", description: "Defense coefficient constant" }
      ]
    })
  ],
  examples: [
    createExample({
      id: "basic-example",
      title: "Basic Damage Calculation",
      description: "Character with 1000 Attack using 2.0x skill against 500 Defense target",
      calculation: "(1000 × 2.0 × 1300) ÷ (500 + 1300) × (1 - 0) = 2,600,000 ÷ 1800 = 1,444",
      result: "1,444 damage dealt",
      notes: ["No additional damage reduction applied", "Defense reduces damage by ~44%"]
    }),
    createExample({
      id: "high-defense-example",
      title: "High Defense Target",
      description: "Same attack against 1000 Defense target",
      calculation: "(1000 × 2.0 × 1300) ÷ (1000 + 1300) × (1 - 0) = 2,600,000 ÷ 2300 = 1,130",
      result: "1,130 damage dealt",
      notes: ["Higher defense significantly reduces damage", "Defense reduces damage by ~56%"]
    }),
    createExample({
      id: "damage-reduction-example",
      title: "With Damage Reduction",
      description: "1000 Attack vs 500 Defense with 20% damage reduction",
      calculation: "(1000 × 2.0 × 1300) ÷ (500 + 1300) × (1 - 0.2) = 1,444 × 0.8 = 1,155",
      result: "1,155 damage dealt",
      notes: ["Additional 20% damage reduction applied", "Total damage reduction: ~55%"]
    })
  ],
  tips: [
    createTip({
      id: "defense-coefficient",
      icon: "🔢",
      title: "Defense Coefficient (1300)",
      description: "The constant 1300 determines how effective defense is. When Defense = 1300, you take 50% of base damage.",
      priority: "high"
    }),
    createTip({
      id: "skill-multipliers",
      icon: "⚔️",
      title: "Skill Multipliers Matter",
      description: "Higher skill multipliers significantly increase damage output. A 3.0x skill does 50% more damage than a 2.0x skill.",
      priority: "high"
    }),
    createTip({
      id: "stacking-reductions",
      icon: "🛡️",
      title: "Damage Reduction Stacking",
      description: "Multiple damage reduction sources often stack multiplicatively, not additively. 20% + 20% ≠ 40%.",
      priority: "medium"
    }),
    createTip({
      id: "attack-scaling",
      icon: "📈",
      title: "Attack Power Scaling",
      description: "Attack power scales linearly with damage - doubling attack doubles damage output (before defense).",
      priority: "medium"
    })
  ]
});

// Helper functions for rendering
export const renderFormula = (formula) => {
  return {
    display: formula.formula,
    description: formula.description,
    variables: formula.variables
  };
};

export const renderExample = (example) => {
  return {
    title: example.title,
    calculation: example.calculation,
    result: example.result,
    notes: example.notes
  };
};

export const renderTip = (tip) => {
  return {
    icon: tip.icon,
    title: tip.title,
    description: tip.description,
    priority: tip.priority
  };
};

export const renderTable = (table) => {
  return {
    headers: table.headers,
    rows: table.rows,
    highlightedRows: table.highlightedRows,
    caption: table.caption
  };
};

// Color scheme helpers
export const getPriorityColor = (priority) => {
  const colors = {
    'high': 'var(--sab-calm-red)',
    'medium': 'var(--sab-light-red)',
    'low': 'rgba(255, 255, 255, 0.7)'
  };
  return colors[priority] || colors.medium;
};

export const getTypeColor = (type) => {
  const colors = {
    'formula': 'var(--sab-calm-red)',
    'example': 'var(--sab-light-red)',
    'tip': 'var(--sab-calm-red)',
    'table': 'var(--sab-light-red)'
  };
  return colors[type] || 'var(--sab-calm-red)';
};

// Export all for easy access
export default {
  createDamageMechanicsPage,
  createFormula,
  createExample,
  createTip,
  createSection,
  createTable,
  defenseFormulasData,
  renderFormula,
  renderExample,
  renderTip,
  renderTable,
  getPriorityColor,
  getTypeColor
};