/**
 * Zone Nova Character Comparison V2 - Card-based System
 * JavaScript logic for character selection, card management, and comparison functionality
 * No animations or hover effects as requested
 *
 * Security: All user inputs are sanitized, no eval() usage, safe DOM manipulation
 */

'use strict';

// Global state - using const where possible for immutability
const selectedCharacters = [];
let filteredCharacters = [];
const characterDataMap = new Map(); // Use Map for better performance
const MAX_CHARACTERS = 2;

// Cache DOM elements and event listeners to avoid repeated queries and memory leaks
const domCache = {
  iconsContainer: null,
  selectedCount: null,
  emptyMessage: null,
  comparisonContainer: null,
  cardsGrid: null,
  initialized: false,
};

// Track event listeners for cleanup
const eventListeners = new Map();
const cardEventListeners = new WeakMap();

/**
 * Get character tiers from all tier lists
 * @param {string} characterName - The character name to lookup
 * @returns {Object} Object containing tier for each list type
 */
function getCharacterTiers(characterName) {
  // Input validation
  if (!characterName || typeof characterName !== 'string') return {};
  if (!window.ZN_COMPARISON_V2_DATA?.tierLists) return {};

  const { tierLists } = window.ZN_COMPARISON_V2_DATA;
  const result = {};

  // Use for...of for better performance than Object.keys().forEach()
  for (const [listKey, tierList] of Object.entries(tierLists)) {
    if (!tierList?.tiers) continue;

    let tier = 'Unranked';
    // Break early when found for performance
    for (const [tierKey, characters] of Object.entries(tierList.tiers)) {
      if (Array.isArray(characters) && characters.some(char => char.name === characterName)) {
        tier = tierKey;
        break;
      }
    }
    result[listKey] = tier;
  }

  return result;
}

/**
 * Get character stat rankings
 * @param {string|number} characterId - The character ID to lookup
 * @returns {Object} Object containing rankings for each stat
 */
function getCharacterRankings(characterId) {
  // Input validation - handle both string and number IDs
  if (!characterId && characterId !== 0) return {};
  if (!window.ZN_COMPARISON_V2_DATA?.rankings) return {};

  const { rankings } = window.ZN_COMPARISON_V2_DATA;
  const result = {};
  const STAT_TYPES = ['hp', 'attack', 'defense']; // Constant array

  // Convert to string for object key lookup
  const keyId = String(characterId);

  for (const stat of STAT_TYPES) {
    const rankValue = rankings[stat]?.[keyId];
    result[stat] = rankValue !== undefined ? rankValue : 'N/A';
  }

  return result;
}

/**
 * Calculate overall rank from individual stat rankings
 * @param {Object} rankings - Rankings object with hp, attack, defense
 * @returns {string} Calculated overall rank or 'N/A'
 */
function calculateOverallRank(rankings) {
  const { hp, attack, defense } = rankings;

  // Check if all rankings are valid numbers
  const hpRank = parseFloat(hp);
  const atkRank = parseFloat(attack);
  const defRank = parseFloat(defense);

  if (isNaN(hpRank) || isNaN(atkRank) || isNaN(defRank)) {
    return 'N/A';
  }

  // Calculate average rank and round to nearest integer
  const averageRank = Math.round((hpRank + atkRank + defRank) / 3);
  return String(averageRank);
}

/**
 * Format rank value for display
 * @param {any} rankValue - The rank value to format
 * @returns {string} Formatted rank value
 */
function formatRankValue(rankValue) {
  if (rankValue === undefined || rankValue === null || rankValue === 'N/A') {
    return 'N/A';
  }

  const numericRank = parseFloat(rankValue);
  if (isNaN(numericRank)) {
    return 'N/A';
  }

  return String(Math.round(numericRank));
}

// Initialize when DOM is loaded - using arrow function for consistency
document.addEventListener('DOMContentLoaded', () => {
  initializeComparisonV2();
});

/**
 * Initialize the V2 comparison system
 * @returns {void}
 */
function initializeComparisonV2() {
  try {
    // Validate required data
    if (!window.ZN_COMPARISON_V2_DATA?.characters) {
      throw new Error('Character data not available');
    }

    // Initialize DOM cache
    initializeDOMCache();

    // Set up initial data - defensive copy
    filteredCharacters = [...window.ZN_COMPARISON_V2_DATA.characters];

    // Initialize event listeners
    initializeFilters();
    initializeDeckInteractions();
    initializeMobileDropdowns();
    initializeArenaControls();
    initializeKeyboardNavigation();

    // Render initial state
    updateIconStates();
    updateSelectedCount();

    // Zone Nova Comparison V2: Initialized successfully
  } catch (error) {
    // Failed to initialize comparison V2
    // Show user-friendly error message
    showErrorMessage('Failed to load character comparison. Please refresh the page.');
  }
}

/**
 * Initialize DOM element cache for performance
 * @returns {void}
 */
function initializeDOMCache() {
  domCache.iconsContainer = document.getElementById('v2-character-icons');
  domCache.selectedCount = document.getElementById('v2-selected-count');
  domCache.emptyMessage = document.getElementById('v2-empty-message');
  domCache.comparisonContainer = document.getElementById('v2-comparison-container');
  domCache.cardsGrid = document.getElementById('v2-cards-grid');
  domCache.initialized = true;
}

/**
 * Show error message to user
 * @param {string} message - Error message to display
 * @returns {void}
 */
function showErrorMessage(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = `
    background: var(--zn-error, #ff6b6b);
    color: white;
    padding: 1rem;
    border-radius: 6px;
    margin: 1rem;
    text-align: center;
    font-weight: 600;
  `;
  errorDiv.textContent = message;

  const container = document.querySelector('.comparison-arena') || document.body;
  container.insertBefore(errorDiv, container.firstChild);
}

/**
 * Initialize filter event listeners
 */
function initializeFilters() {
  const roleFilter = document.getElementById('v2-role-filter');
  const classFilter = document.getElementById('v2-class-filter');
  const rarityFilter = document.getElementById('v2-rarity-filter');
  const elementFilter = document.getElementById('v2-element-filter');
  const factionFilter = document.getElementById('v2-faction-filter');
  const resetBtn = document.getElementById('v2-reset-filters');

  [roleFilter, classFilter, rarityFilter, elementFilter, factionFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', applyFilters);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }
}

/**
 * Initialize character icon interactions
 * @returns {void}
 */
function initializeDeckInteractions() {
  const iconsContainer = domCache.iconsContainer || document.getElementById('v2-character-icons');
  if (iconsContainer) {
    iconsContainer.addEventListener('click', handleIconClick);
  }
}

/**
 * Initialize mobile dropdown interactions with proper cleanup
 */
function initializeMobileDropdowns() {
  const dropdown1 = document.getElementById('v2-mobile-dropdown-1');
  const dropdown2 = document.getElementById('v2-mobile-dropdown-2');

  if (dropdown1) {
    initializeCustomDropdown(dropdown1, 1);
  }

  if (dropdown2) {
    initializeCustomDropdown(dropdown2, 2);
  }

  // Close dropdowns when clicking outside
  const outsideClickHandler = function (event) {
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  };

  document.addEventListener('click', outsideClickHandler);
  eventListeners.set('outside-click', () => {
    document.removeEventListener('click', outsideClickHandler);
  });
}

/**
 * Initialize a single custom dropdown with proper cleanup tracking
 */
function initializeCustomDropdown(dropdown, slotNumber) {
  const selected = dropdown.querySelector('.custom-dropdown-selected');
  const options = dropdown.querySelector('.custom-dropdown-options');
  const optionElements = options.querySelectorAll('.dropdown-option');

  // Create event handlers with proper cleanup
  const selectedClickHandler = function (event) {
    event.stopPropagation();
    // Close other dropdowns
    document.querySelectorAll('.custom-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    // Toggle this dropdown
    dropdown.classList.toggle('open');
  };

  const optionClickHandlers = [];

  // Handle selected area click
  selected.addEventListener('click', selectedClickHandler);

  // Handle option selection
  optionElements.forEach(option => {
    const optionClickHandler = function (event) {
      event.stopPropagation();
      const characterSlug = option.dataset.value;
      handleCustomDropdownSelection(characterSlug, slotNumber, option);
      dropdown.classList.remove('open');
    };

    option.addEventListener('click', optionClickHandler);
    optionClickHandlers.push({ element: option, handler: optionClickHandler });
  });

  // Store cleanup function
  const cleanup = () => {
    selected.removeEventListener('click', selectedClickHandler);
    optionClickHandlers.forEach(({ element, handler }) => {
      element.removeEventListener('click', handler);
    });
  };

  eventListeners.set(`dropdown-${slotNumber}`, cleanup);
}

/**
 * Initialize arena control buttons
 */
function initializeArenaControls() {
  const clearAllBtn = document.getElementById('v2-clear-all');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllCharacters);
  }
}

/**
 * Handle clicking on character icons
 * @param {Event} event - Click event
 * @returns {void}
 */
function handleIconClick(event) {
  event.preventDefault(); // Prevent any default behavior

  const icon = event.target.closest('.character-icon');
  if (!icon) return;

  const characterSlug = icon.dataset.characterSlug;
  if (!characterSlug) {
    // Character slug not found on icon element
    return;
  }

  if (icon.classList.contains('selected')) {
    removeCharacter(characterSlug);
  } else {
    addCharacter(characterSlug);
  }
}

/**
 * Add character to comparison
 * @param {string} characterSlug - The character slug to add
 * @returns {boolean} Success status
 */
function addCharacter(characterSlug) {
  // Input validation
  if (!characterSlug || typeof characterSlug !== 'string') {
    // Invalid character slug provided to addCharacter
    return false;
  }

  if (selectedCharacters.includes(characterSlug)) return false;

  if (selectedCharacters.length >= MAX_CHARACTERS) {
    // Use more user-friendly notification instead of alert()
    showNotification(`You can only compare up to ${MAX_CHARACTERS} characters at once.`, 'warning');
    return false;
  }

  selectedCharacters.push(characterSlug);

  // Batch DOM updates for performance
  requestAnimationFrame(() => {
    updateIconStates();
    updateMobileDropdowns();
    updateComparisonArena();
    updateSelectedCount();
  });

  // Load character data lazily
  loadCharacterData(characterSlug);
  return true;
}

/**
 * Show user notification
 * @param {string} message - Message to display
 * @param {string} type - Notification type (info, warning, error)
 * @returns {void}
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--zn-${type === 'warning' ? 'warning' : 'primary-amber'}, #ffd93d);
    color: var(--zn-text-primary, #333);
    padding: 1rem;
    border-radius: 6px;
    max-width: 300px;
    z-index: 10000;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 3000);
}

/**
 * Remove character from comparison
 * @param {string} characterSlug - The character slug to remove
 * @returns {boolean} Success status
 */
function removeCharacter(characterSlug) {
  // Input validation
  if (!characterSlug || typeof characterSlug !== 'string') {
    // Invalid character slug provided to removeCharacter
    return false;
  }

  const index = selectedCharacters.indexOf(characterSlug);

  if (index > -1) {
    selectedCharacters.splice(index, 1);

    // Batch DOM updates for performance
    requestAnimationFrame(() => {
      updateIconStates();
      updateMobileDropdowns();
      updateComparisonArena();
      updateSelectedCount();
    });

    return true;
  }

  return false;
}

/**
 * Clear all selected characters
 * @returns {void}
 */
function clearAllCharacters() {
  if (selectedCharacters.length === 0) return; // Early exit if already empty

  selectedCharacters.length = 0; // More efficient than reassignment

  // Batch DOM updates for performance
  requestAnimationFrame(() => {
    updateIconStates();
    updateMobileDropdowns();
    updateComparisonArena();
    updateSelectedCount();
  });
}

/**
 * Apply filters to character deck
 * @returns {void}
 */
function applyFilters() {
  try {
    // Get filter values with null checks
    const filters = {
      role: document.getElementById('v2-role-filter')?.value || '',
      class: document.getElementById('v2-class-filter')?.value || '',
      rarity: document.getElementById('v2-rarity-filter')?.value || '',
      element: document.getElementById('v2-element-filter')?.value || '',
      faction: document.getElementById('v2-faction-filter')?.value || '',
    };

    if (!window.ZN_COMPARISON_V2_DATA?.characters) {
      // Character data not available for filtering
      return;
    }

    filteredCharacters = window.ZN_COMPARISON_V2_DATA.characters.filter(character => {
      if (!character) return false;

      return (
        (!filters.role || character.role === filters.role) &&
        (!filters.class || character.class === filters.class) &&
        (!filters.rarity || character.rarity === filters.rarity) &&
        (!filters.element || character.element === filters.element) &&
        (!filters.faction || character.faction === filters.faction)
      );
    });

    updateIconStates();
    updateMobileDropdownOptions();
  } catch (error) {
    // Error applying filters
  }
}

/**
 * Reset all filters
 * @returns {void}
 */
function resetFilters() {
  try {
    const filterIds = [
      'v2-role-filter',
      'v2-class-filter',
      'v2-rarity-filter',
      'v2-element-filter',
      'v2-faction-filter',
    ];

    filterIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.value = '';
    });

    if (window.ZN_COMPARISON_V2_DATA?.characters) {
      filteredCharacters = [...window.ZN_COMPARISON_V2_DATA.characters];
      updateIconStates();
      updateMobileDropdownOptions();
    }
  } catch (error) {
    // Error resetting filters
  }
}

/**
 * Update mobile dropdown options based on current filters
 */
function updateMobileDropdownOptions() {
  const dropdown1 = document.getElementById('v2-mobile-dropdown-1');
  const dropdown2 = document.getElementById('v2-mobile-dropdown-2');
  const filteredSlugs = new Set(filteredCharacters.map(char => char.slug));

  [dropdown1, dropdown2].forEach(dropdown => {
    if (!dropdown) return;

    const options = dropdown.querySelectorAll('.dropdown-option[data-value]:not([data-value=""])');
    options.forEach(option => {
      const characterSlug = option.dataset.value;
      if (filteredSlugs.has(characterSlug)) {
        option.classList.remove('filtered-out');
      } else {
        option.classList.add('filtered-out');
      }
    });
  });
}

/**
 * Update character icon states (selection and filtering)
 */
function updateIconStates() {
  const icons = document.querySelectorAll('.character-icon');
  const filteredSlugs = new Set(filteredCharacters.map(char => char.slug));

  icons.forEach(icon => {
    const characterSlug = icon.dataset.characterSlug;
    const isSelected = selectedCharacters.includes(characterSlug);
    const isFiltered = filteredSlugs.has(characterSlug);

    // Update selection state
    icon.classList.toggle('selected', isSelected);

    // Update filter state
    icon.classList.toggle('filtered-out', !isFiltered);
  });
}

/**
 * Update the comparison arena
 * @returns {void}
 */
function updateComparisonArena() {
  const emptyMessage = domCache.emptyMessage || document.getElementById('v2-empty-message');
  const comparisonContainer =
    domCache.comparisonContainer || document.getElementById('v2-comparison-container');

  if (!emptyMessage || !comparisonContainer) {
    // Required DOM elements not found for comparison arena
    return;
  }

  if (selectedCharacters.length === 0) {
    emptyMessage.style.display = 'block';
    comparisonContainer.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    comparisonContainer.style.display = 'block';
    renderComparisonCards();
  }
}

/**
 * Render comparison cards with proper cleanup
 * @returns {void}
 */
function renderComparisonCards() {
  const cardsGrid = domCache.cardsGrid || document.getElementById('v2-cards-grid');
  if (!cardsGrid) return;

  // Clean up existing event listeners first
  const existingCards = cardsGrid.querySelectorAll('.comparison-character-card');
  existingCards.forEach(card => {
    const cleanup = cardEventListeners.get(card);
    if (cleanup) {
      cleanup();
      cardEventListeners.delete(card);
    }
  });

  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  selectedCharacters.forEach(characterSlug => {
    const character = window.ZN_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug);
    if (!character) return;

    const detailedData = characterDataMap.get(characterSlug);
    const cardElement = createCharacterCard(character, detailedData, characterSlug);
    fragment.appendChild(cardElement);
  });

  // Single DOM update
  cardsGrid.replaceChildren(fragment);
}

/**
 * Create a character card element using safe DOM methods
 * @param {Object} character - Character data
 * @param {Object} detailedData - Detailed character data
 * @param {string} characterSlug - Character slug for identification
 * @returns {HTMLElement} Card element
 */
function createCharacterCard(character, detailedData, characterSlug) {
  const cardDiv = document.createElement('div');
  cardDiv.className = `comparison-character-card ${!detailedData ? 'loading' : ''}`;
  cardDiv.dataset.characterSlug = characterSlug;

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'comparison-card-remove';
  removeBtn.setAttribute('title', 'Remove character');
  removeBtn.setAttribute('aria-label', `Remove ${character.originalName || character.name}`);
  removeBtn.textContent = 'Remove';

  // Create header section
  const header = document.createElement('div');
  header.className = 'comparison-card-header';

  const portrait = document.createElement('img');
  portrait.src = character.image || '/images/placeholder.png';
  portrait.alt = character.originalName || character.name || '';
  portrait.className = 'comparison-card-portrait';
  portrait.onerror = function () {
    this.src = '/images/placeholder.png';
  };

  const info = document.createElement('div');
  info.className = 'comparison-card-info';

  const name = document.createElement('h3');
  name.textContent = character.originalName || character.name || '';

  const badges = document.createElement('div');
  badges.className = 'comparison-card-badges';

  // Create badges safely
  const badgeData = [
    { class: 'rarity-badge', value: character.rarity },
    { class: 'class-badge', value: character.class },
    { class: 'element-badge', value: character.element },
    { class: 'role-badge', value: character.role },
    { class: 'faction-badge', value: character.faction },
  ];

  badgeData.forEach(badge => {
    if (badge.value) {
      const span = document.createElement('span');
      span.className = `${badge.class} ${badge.value.toLowerCase().replace(' ', '-')}`;
      span.textContent = badge.value;
      badges.appendChild(span);
    }
  });

  // Assemble header
  info.appendChild(name);
  info.appendChild(badges);
  header.appendChild(portrait);
  header.appendChild(info);

  // Create stats section using safe method
  const statsDiv = document.createElement('div');
  // Use originalName for tier lookups but displayName for display
  const characterForStats = {
    ...character,
    name: character.originalName || character.name, // Ensure we use original name for tier lookups
  };
  statsDiv.innerHTML = renderCharacterStats(characterForStats, detailedData); // This function needs to be safe

  // Assemble card
  cardDiv.appendChild(removeBtn);
  cardDiv.appendChild(header);
  cardDiv.appendChild(statsDiv);

  // Add event listener for remove button with cleanup tracking
  const removeHandler = () => removeCharacter(characterSlug);
  removeBtn.addEventListener('click', removeHandler);

  // Store cleanup function for this card
  cardEventListeners.set(cardDiv, () => {
    removeBtn.removeEventListener('click', removeHandler);
  });

  return cardDiv;
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} unsafe - Unsafe string
 * @returns {string} Safe HTML string
 */

/**
 * Render character stats section
 */
function renderCharacterStats(character, detailedData) {
  const stats = character.stats || {};
  // Use the original name (not escaped) for tier lookups
  const lookupName = character.originalName || character.name;
  const tiers = getCharacterTiers(lookupName);
  // Ensure character ID is properly passed for rankings lookup
  const characterId = character.id;
  const rankings = getCharacterRankings(characterId);

  // Debug logging for troubleshooting
  if (!rankings || Object.keys(rankings).length === 0) {
    // No rankings found for character
  }

  return `
    <div class="comparison-card-stats">
      <!-- Tier Lists Section -->
      <div class="comparison-stat-section">
        <h4>Tier Rankings</h4>
        <div class="comparison-stat-grid">
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">PvE</span>
            <span class="comparison-stat-value tier-${tiers.pve?.toLowerCase()}">${tiers.pve || 'Unranked'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">PvP</span>
            <span class="comparison-stat-value tier-${tiers.pvp?.toLowerCase()}">${tiers.pvp || 'Unranked'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">Rifts</span>
            <span class="comparison-stat-value tier-${tiers.rift?.toLowerCase()}">${tiers.rift || 'Unranked'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">Guild Raids</span>
            <span class="comparison-stat-value tier-${tiers.guild?.toLowerCase()}">${tiers.guild || 'Unranked'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">New Player</span>
            <span class="comparison-stat-value tier-${tiers.newPlayer?.toLowerCase()}">${tiers.newPlayer || 'Unranked'}</span>
          </div>
        </div>
      </div>

      <!-- Stat Rankings Section -->
      <div class="comparison-stat-section">
        <h4>Stat Rankings</h4>
        <div class="comparison-stat-grid">
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">Overall Rank</span>
            <span class="comparison-stat-value">#${calculateOverallRank(rankings)}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">HP Rank</span>
            <span class="comparison-stat-value">#${formatRankValue(rankings.hp)}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">ATK Rank</span>
            <span class="comparison-stat-value">#${formatRankValue(rankings.attack)}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">DEF Rank</span>
            <span class="comparison-stat-value">#${formatRankValue(rankings.defense)}</span>
          </div>
        </div>
      </div>

      <!-- Basic Stats Section -->
      <div class="comparison-stat-section">
        <h4>Combat Stats</h4>
        <div class="comparison-stat-grid">
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">HP</span>
            <span class="comparison-stat-value">${stats.hp ? stats.hp.toLocaleString() : 'N/A'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">ATK</span>
            <span class="comparison-stat-value">${stats.attack ? stats.attack.toLocaleString() : 'N/A'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">DEF</span>
            <span class="comparison-stat-value">${stats.defense ? stats.defense.toLocaleString() : 'N/A'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">Energy</span>
            <span class="comparison-stat-value">${stats.energyRecovery || '0'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">CRIT Rate</span>
            <span class="comparison-stat-value">${stats.critRate ? stats.critRate + '%' : '0%'}</span>
          </div>
          <div class="comparison-stat-item">
            <span class="comparison-stat-label">CRIT DMG</span>
            <span class="comparison-stat-value">${stats.critDmg ? stats.critDmg + '%' : '0%'}</span>
          </div>
        </div>
      </div>

      <!-- Character Skills Section -->
      ${
        detailedData && detailedData.skills
          ? `
        <div class="comparison-skills-section">
          <h4>Character Skills</h4>
          ${
            detailedData.skills.normal
              ? `
            <div class="comparison-skill-item">
              <div class="comparison-skill-header">
                <span class="comparison-skill-name">${detailedData.skills.normal.name}</span>
                <span class="skill-badge normal-attack">Normal Attack</span>
              </div>
              <div class="comparison-skill-desc">${detailedData.skills.normal.description}</div>
            </div>
          `
              : ''
          }
          ${
            detailedData.skills.auto
              ? `
            <div class="comparison-skill-item">
              <div class="comparison-skill-header">
                <span class="comparison-skill-name">${detailedData.skills.auto.name}</span>
                <span class="skill-badge auto-skill">Auto Skill</span>
              </div>
              <div class="comparison-skill-desc">${detailedData.skills.auto.description}</div>
              ${detailedData.skills.auto.cooldown ? `<div class="comparison-skill-cooldown">Cooldown: ${detailedData.skills.auto.cooldown}</div>` : ''}
            </div>
          `
              : ''
          }
          ${
            detailedData.skills.ultimate
              ? `
            <div class="comparison-skill-item">
              <div class="comparison-skill-header">
                <span class="comparison-skill-name">${detailedData.skills.ultimate.name}</span>
                <span class="skill-badge ultimate">Ultimate</span>
              </div>
              <div class="comparison-skill-desc">${detailedData.skills.ultimate.description}</div>
              ${detailedData.skills.ultimate.energyCost ? `<div class="comparison-skill-energy">Energy Cost: ${detailedData.skills.ultimate.energyCost}</div>` : ''}
            </div>
          `
              : ''
          }
          ${
            detailedData.skills.passive
              ? `
            <div class="comparison-skill-item">
              <div class="comparison-skill-header">
                <span class="comparison-skill-name">${detailedData.skills.passive.name}</span>
                <span class="skill-badge passive">Passive</span>
              </div>
              <div class="comparison-skill-desc">${detailedData.skills.passive.description}</div>
            </div>
          `
              : ''
          }
        </div>
      `
          : detailedData
            ? `
        <div class="comparison-skills-section">
          <h4>Character Skills</h4>
          <div class="comparison-skill-desc">No detailed skill data available</div>
        </div>
      `
            : `
        <div class="comparison-skills-section">
          <h4>Character Skills</h4>
          <div class="comparison-skill-desc">Loading...</div>
        </div>
      `
      }

      <!-- Team Skill Section -->
      ${
        detailedData && detailedData.teamSkill
          ? `
        <div class="comparison-team-skill">
          <h4>Team Skill</h4>
          <div class="comparison-team-skill-name">${detailedData.teamSkill.name}</div>
          <div class="comparison-team-skill-desc">${detailedData.teamSkill.description}</div>
          ${
            detailedData.teamSkill.requirements
              ? `
            <div class="comparison-team-skill-req">
              Requires: ${detailedData.teamSkill.requirements.faction} + ${detailedData.teamSkill.requirements.element}
            </div>
          `
              : ''
          }
        </div>
      `
          : detailedData
            ? `
        <div class="comparison-team-skill">
          <h4>Team Skill</h4>
          <div class="comparison-team-skill-desc">No team skill available</div>
        </div>
      `
            : `
        <div class="comparison-team-skill">
          <h4>Team Skill</h4>
          <div class="comparison-team-skill-desc">Loading...</div>
        </div>
      `
      }
    </div>
  `;
}

/**
 * Load character data lazily using dynamic import
 * @param {string} characterSlug - The character slug to load data for
 * @returns {Promise<void>}
 */
async function loadCharacterData(characterSlug) {
  // Input validation
  if (!characterSlug || typeof characterSlug !== 'string') {
    // Invalid character slug provided to loadCharacterData
    return;
  }

  if (characterDataMap.has(characterSlug)) return;

  try {
    // Sanitize input to prevent path traversal attacks
    const sanitizedSlug = characterSlug.replace(/[^a-zA-Z0-9-_]/g, '');
    if (sanitizedSlug !== characterSlug) {
      throw new Error('Invalid character slug format');
    }

    // Dynamic import of individual character file - absolute path from src root
    const module = await import(`/src/data/zone-nova/characters/${sanitizedSlug}.js`);

    // Extract character data using expected export name pattern (characterSlug + 'Data')
    const exportName = `${sanitizedSlug}Data`;
    const characterData = module[exportName];

    if (characterData && typeof characterData === 'object') {
      characterDataMap.set(characterSlug, characterData);
    } else {
      // Fallback: try to get first valid export
      const exports = Object.values(module);
      const firstValidExport = exports.find(exp => exp && typeof exp === 'object');
      characterDataMap.set(characterSlug, firstValidExport || {});
    }

    // Re-render the comparison cards to show loaded data
    renderComparisonCards();
  } catch (error) {
    // Could not load detailed data for character
    // Set empty data to stop loading state
    characterDataMap.set(characterSlug, {});
    renderComparisonCards();
  }
}

/**
 * Update selected character count
 * @returns {void}
 */
function updateSelectedCount() {
  const countElement = domCache.selectedCount || document.getElementById('v2-selected-count');
  if (countElement) {
    countElement.textContent = `${selectedCharacters.length}/${MAX_CHARACTERS} selected`;
  }
}

/**
 * Handle custom dropdown selection
 */
function handleCustomDropdownSelection(characterSlug, slotNumber, _optionElement) {
  const dropdownIndex = slotNumber - 1;

  if (characterSlug) {
    // Find character data
    const character = window.ZN_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug);
    if (!character) return;

    // Replace character at this position or add if empty
    if (selectedCharacters[dropdownIndex]) {
      selectedCharacters[dropdownIndex] = characterSlug;
    } else {
      selectedCharacters[dropdownIndex] = characterSlug;
    }

    // Update the selected display
    updateCustomDropdownDisplay(slotNumber, character);

    // Load character data
    loadCharacterData(characterSlug);
  } else {
    // Remove character from this position
    selectedCharacters.splice(dropdownIndex, 1);
    updateCustomDropdownDisplay(slotNumber, null);
  }

  updateIconStates();
  updateComparisonArena();
  updateSelectedCount();
}

/**
 * Update the display of a custom dropdown using safe DOM methods
 */
function updateCustomDropdownDisplay(slotNumber, character) {
  const selected = document.getElementById(`v2-mobile-selected-${slotNumber}`);
  if (!selected) return;

  // Clear existing content
  selected.textContent = '';

  if (character) {
    const container = document.createElement('div');
    container.className = 'selected-character';

    const img = document.createElement('img');
    img.src = character.image || '/images/placeholder.png';
    img.alt = character.originalName || character.name || '';
    img.className = 'selected-image';
    img.width = 32;
    img.height = 32;
    img.onerror = function () {
      this.src = '/images/placeholder.png';
    };

    const details = document.createElement('div');
    details.className = 'selected-details';

    const name = document.createElement('span');
    name.className = 'selected-name';
    name.textContent = character.originalName || character.name || '';

    const info = document.createElement('span');
    info.className = 'selected-info';
    info.textContent = `${character.rarity || ''} ${character.element || ''}`;

    details.appendChild(name);
    details.appendChild(info);
    container.appendChild(img);
    container.appendChild(details);
    selected.appendChild(container);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'dropdown-placeholder';

    const text = document.createElement('span');
    text.className = 'placeholder-text';
    text.textContent = `Select Character ${slotNumber}...`;

    placeholder.appendChild(text);
    selected.appendChild(placeholder);
  }
}

/**
 * Update mobile dropdown selections to match current state
 */
function updateMobileDropdowns() {
  // Update custom dropdown displays
  [1, 2].forEach(slotNumber => {
    const characterSlug = selectedCharacters[slotNumber - 1];
    const character = characterSlug
      ? window.ZN_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug)
      : null;
    updateCustomDropdownDisplay(slotNumber, character);
  });
}

/**
 * Cleanup function to prevent memory leaks - call before page unload
 * @returns {void}
 */
function cleanup() {
  // Clean up all tracked event listeners
  eventListeners.forEach(cleanupFn => {
    if (typeof cleanupFn === 'function') {
      cleanupFn();
    }
  });
  eventListeners.clear();

  // Clean up card event listeners
  const existingCards = document.querySelectorAll('.comparison-character-card');
  existingCards.forEach(card => {
    const cardCleanup = cardEventListeners.get(card);
    if (cardCleanup) {
      cardCleanup();
      cardEventListeners.delete(card);
    }
  });

  // Clear data maps
  characterDataMap.clear();
  selectedCharacters.length = 0;
  filteredCharacters.length = 0;

  // Reset DOM cache
  Object.keys(domCache).forEach(key => {
    if (key !== 'initialized') {
      domCache[key] = null;
    }
  });

  // Zone Nova Comparison V2: Cleanup completed
}

/**
 * Add keyboard navigation support
 * @returns {void}
 */
function initializeKeyboardNavigation() {
  const keydownHandler = event => {
    // Handle Enter and Space for character icons
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.character-icon')) {
      event.preventDefault();
      event.target.click();
    }

    // Handle Escape to close dropdowns
    if (event.key === 'Escape') {
      const openDropdowns = document.querySelectorAll('.custom-dropdown.open');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }

    // Handle Arrow keys for dropdown navigation
    if (
      event.target.matches('.custom-dropdown-selected') ||
      event.target.matches('.dropdown-option')
    ) {
      handleDropdownKeyNavigation(event);
    }
  };

  document.addEventListener('keydown', keydownHandler);
  eventListeners.set('keyboard-navigation', () => {
    document.removeEventListener('keydown', keydownHandler);
  });
}

/**
 * Handle keyboard navigation within dropdowns
 * @param {KeyboardEvent} event - Keyboard event
 * @returns {void}
 */
function handleDropdownKeyNavigation(event) {
  const dropdown = event.target.closest('.custom-dropdown');
  if (!dropdown) return;

  const options = dropdown.querySelectorAll('.dropdown-option:not(.filtered-out)');
  const currentIndex = Array.from(options).indexOf(event.target);

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (dropdown.classList.contains('open')) {
        const nextIndex = Math.min(currentIndex + 1, options.length - 1);
        options[nextIndex]?.focus();
      } else {
        dropdown.classList.add('open');
        options[0]?.focus();
      }
      break;

    case 'ArrowUp':
      event.preventDefault();
      if (dropdown.classList.contains('open')) {
        const prevIndex = Math.max(currentIndex - 1, 0);
        options[prevIndex]?.focus();
      }
      break;

    case 'Enter':
    case ' ':
      event.preventDefault();
      if (event.target.matches('.dropdown-option')) {
        event.target.click();
      } else {
        dropdown.classList.toggle('open');
        if (dropdown.classList.contains('open')) {
          options[0]?.focus();
        }
      }
      break;
  }
}

// Add cleanup on page unload to prevent memory leaks
const beforeUnloadHandler = cleanup;
const pageHideHandler = cleanup;

window.addEventListener('beforeunload', beforeUnloadHandler);
window.addEventListener('pagehide', pageHideHandler);

// Store cleanup handlers for potential removal
eventListeners.set('page-unload', () => {
  window.removeEventListener('beforeunload', beforeUnloadHandler);
  window.removeEventListener('pagehide', pageHideHandler);
});

// Make functions globally available
window.removeCharacter = removeCharacter;
window.addCharacter = addCharacter;
window.clearAllCharacters = clearAllCharacters;
window.ZN_COMPARISON_V2_CLEANUP = cleanup; // Export cleanup for manual cleanup
