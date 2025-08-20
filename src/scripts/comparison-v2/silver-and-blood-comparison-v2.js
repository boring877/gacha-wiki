/**
 * Silver & Blood Character Comparison V2 - Card-based System
 * JavaScript logic for character selection, card management, and comparison functionality
 * Adapted specifically for Silver & Blood data structure and features
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

// SECURITY: HTML escaping function to prevent XSS attacks
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return String(unsafe);
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// SECURITY: Safe DOM element creation function
function createSafeElement(tag, textContent = '', className = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

/**
 * Get character tiers from all tier lists
 * @param {string} characterName - The character name to lookup
 * @returns {Object} Object containing tier for each list type
 */
function getCharacterTiers(characterName) {
  // Input validation
  if (!characterName || typeof characterName !== 'string') return {};
  if (!window.SAB_COMPARISON_V2_DATA?.tierLists) return {};

  const { tierLists } = window.SAB_COMPARISON_V2_DATA;
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
  if (!window.SAB_COMPARISON_V2_DATA?.rankings) return {};

  const { rankings } = window.SAB_COMPARISON_V2_DATA;
  const result = {};
  const STAT_TYPES = ['hp', 'atk', 'pDef', 'mDef', 'bloodPower']; // SAB stat types

  // Convert to string for object key lookup
  const keyId = String(characterId);

  for (const stat of STAT_TYPES) {
    const rankValue = rankings[stat]?.[keyId];
    result[stat] = rankValue !== undefined ? rankValue : 'N/A';
  }

  return result;
}

/**
 * Calculate overall rank from individual stat rankings (excluding bloodPower)
 * @param {Object} rankings - Rankings object with hp, atk, pDef, mDef
 * @returns {string} Calculated overall rank or 'N/A'
 */
// eslint-disable-next-line no-unused-vars
function calculateOverallRank(rankings) {
  const { hp, atk, pDef, mDef } = rankings; // Exclude bloodPower from overall calculation

  // Check if all rankings are valid numbers
  const hpRank = parseFloat(hp);
  const atkRank = parseFloat(atk);
  const pDefRank = parseFloat(pDef);
  const mDefRank = parseFloat(mDef);

  if (isNaN(hpRank) || isNaN(atkRank) || isNaN(pDefRank) || isNaN(mDefRank)) {
    return 'N/A';
  }

  // Calculate average rank and round to nearest integer
  const averageRank = Math.round((hpRank + atkRank + pDefRank + mDefRank) / 4);
  return String(averageRank);
}

/**
 * Format rank value for display
 * @param {any} rankValue - The rank value to format
 * @returns {string} Formatted rank value
 */
// eslint-disable-next-line no-unused-vars
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
    if (!window.SAB_COMPARISON_V2_DATA?.characters) {
      throw new Error('Character data not available');
    }

    // Initialize DOM cache
    initializeDOMCache();

    // Set up initial data - defensive copy
    filteredCharacters = [...window.SAB_COMPARISON_V2_DATA.characters];

    // Initialize event listeners
    initializeFilters();
    initializeDeckInteractions();
    initializeMobileModal();
    initializeComparisonControls();
    initializeKeyboardNavigation();

    // Render initial state
    updateIconStates();
    updateSelectedCount();

    // Silver & Blood Comparison V2: Initialized successfully
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
  errorDiv.className = 'comparison-error-message';
  errorDiv.textContent = message;

  const container = document.querySelector('.comparison-container') || document.body;
  container.insertBefore(errorDiv, container.firstChild);
}

/**
 * Detect if device has touch capabilities
 * Used to determine if touch filters should be used
 */
// function isTouchDevice() {
//   return ('ontouchstart' in window) ||
//          (navigator.maxTouchPoints > 0) ||
//          (navigator.msMaxTouchPoints > 0) ||
//          (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches);
// }

/**
 * Initialize filter event listeners - Simple ZN approach
 */
function initializeFilters() {
  const filterIds = [
    'v2-class-filter',
    'v2-faction-filter',
    'v2-rarity-filter',
    'v2-equipment-filter',
    'v2-moon-filter',
    'v2-attack-filter',
  ];

  // Initialize desktop select filters (works on mobile too)
  filterIds.forEach(filterId => {
    const desktopSelect = document.getElementById(filterId);
    if (desktopSelect && desktopSelect.tagName === 'SELECT') {
      desktopSelect.addEventListener('change', applyFilters);
    }
  });

  // All filters are now simple select elements - no custom initialization needed

  const resetBtn = document.getElementById('v2-reset-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }
}

/**
 * Initialize a single touch filter dropdown - Simple ZN approach
 */
// function initializeSingleTouchFilter(filterDropdown, _filterId) {
//   const selectedElement = filterDropdown.querySelector('.custom-dropdown-selected');
//   const optionsElement = filterDropdown.querySelector('.custom-dropdown-options');
//   const closeBtn = filterDropdown.querySelector('.dropdown-close-btn');

//   // Open dropdown on click
//   if (selectedElement) {
//     selectedElement.addEventListener('click', (e) => {
//       e.stopPropagation();
//       // Close other dropdowns first
//       closeAllFilterDropdowns();
//       // Toggle this dropdown
//       filterDropdown.classList.add('open');
//     });
//   }

//   // Handle option selection
//   if (optionsElement) {
//     optionsElement.addEventListener('click', (e) => {
//       if (e.target.closest('.dropdown-option')) {
//         const option = e.target.closest('.dropdown-option');
//         const value = option.dataset.value;
//         const text = option.querySelector('.option-text').textContent;

//         // Update selected display
//         const placeholderText = selectedElement.querySelector('.placeholder-text');
//         if (placeholderText) {
//           placeholderText.textContent = text;
//         }

//         // Store current value on the dropdown element
//         filterDropdown.dataset.currentValue = value;

//         // Close dropdown and apply filters
//         filterDropdown.classList.remove('open');
//         applyFilters();
//       }
//     });
//   }

//   // Close dropdown with close button
//   if (closeBtn) {
//     closeBtn.addEventListener('click', (e) => {
//       e.stopPropagation();
//       filterDropdown.classList.remove('open');
//     });
//   }

//   // Close dropdown on outside click
//   document.addEventListener('click', (e) => {
//     if (!filterDropdown.contains(e.target)) {
//       filterDropdown.classList.remove('open');
//     }
//   });
// }

/**
 * Close all filter dropdowns - Simple ZN approach
 */
function closeAllFilterDropdowns() {
  const openDropdowns = document.querySelectorAll('.custom-dropdown.open');
  openDropdowns.forEach(dropdown => {
    dropdown.classList.remove('open');
  });
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
 * Initialize mobile modal interactions for character selection
 */
function initializeMobileModal() {
  const modal = document.getElementById('v2-mobile-modal');
  const selectButton1 = document.getElementById('v2-mobile-select-1');
  const selectButton2 = document.getElementById('v2-mobile-select-2');

  // Track current slot being selected
  let currentSelectionSlot = null;

  // Initialize selection buttons
  if (selectButton1) {
    selectButton1.addEventListener('click', () => openMobileModal(1));
  }
  if (selectButton2) {
    selectButton2.addEventListener('click', () => openMobileModal(2));
  }

  // Initialize modal controls
  initializeModalControls(modal);
  initializeModalSearch();
  initializeModalFilters();
  initializeModalCharacterGrid();

  // Store current slot getter for other functions
  window.getCurrentMobileSlot = () => currentSelectionSlot;

  function openMobileModal(slotNumber) {
    if (!modal) return;

    currentSelectionSlot = slotNumber;
    const modalTitle = document.getElementById('v2-modal-title');

    if (modalTitle) {
      modalTitle.textContent = `Select Character ${slotNumber}`;
    }

    // Reset filters and search to show all characters
    resetModalFilters();
    const searchInput = document.getElementById('v2-modal-search');
    if (searchInput) {
      searchInput.value = '';
    }

    // Update character grid - show all characters and update selection states
    updateModalCharacterGrid('');
    updateModalCharacterStates();

    // Open modal with animation
    modal.classList.add('open');
    document.body.classList.add('modal-open'); // Prevent background scroll

    // Focus search input for better UX (reuse existing searchInput variable)
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove('open');
    document.body.classList.remove('modal-open'); // Restore background scroll
    currentSelectionSlot = null;

    // Clear search and filters when closing
    const searchInput = document.getElementById('v2-modal-search');
    if (searchInput) {
      searchInput.value = '';
    }
    resetModalFilters();
    updateModalCharacterGrid();
  }

  // Store close function globally for other functions
  window.closeMobileModal = closeModal;
}

/**
 * Initialize modal control buttons (close only - cancel/clear removed for touch optimization)
 */
function initializeModalControls(modal) {
  const closeBtn = document.getElementById('v2-modal-close');
  const backdrop = document.getElementById('v2-modal-backdrop');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => window.closeMobileModal());
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => window.closeMobileModal());
  }

  // Handle escape key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal && modal.classList.contains('open')) {
      window.closeMobileModal();
    }
  });
}

/**
 * Initialize modal search functionality
 */
function initializeModalSearch() {
  const searchInput = document.getElementById('v2-modal-search');

  if (searchInput) {
    searchInput.addEventListener('input', event => {
      const searchTerm = event.target.value.toLowerCase().trim();
      updateModalCharacterGrid(searchTerm);
    });
  } else {
    // Modal search input not found
  }
}

/**
 * Initialize modal filter dropdowns (removed for mobile optimization)
 */
function initializeModalFilters() {
  // Modal filters have been removed for touch device optimization
  // Only search functionality is available in mobile modal
}

/**
 * Initialize modal character grid interactions
 */
function initializeModalCharacterGrid() {
  const characterGrid = document.getElementById('v2-modal-character-grid');

  if (characterGrid) {
    characterGrid.addEventListener('click', event => {
      const characterCard = event.target.closest('.modal-character-card');
      if (!characterCard) return;

      const characterSlug = characterCard.dataset.characterSlug;
      const currentSlot = window.getCurrentMobileSlot();

      if (characterSlug && currentSlot) {
        // Set character for the current slot
        if (currentSlot === 1) {
          selectedCharacters[0] = characterSlug;
        } else if (currentSlot === 2) {
          selectedCharacters[1] = characterSlug;
        }

        // Update displays
        updateMobileSelectionButtons();
        updateIconStates();
        updateSelectedCount();
        updateComparisonContainer();
        renderComparisonCards();

        // Load character data
        loadCharacterData(characterSlug);

        // Close modal
        window.closeMobileModal();
      }
    });
  }
}

/**
 * Initialize comparison control buttons
 */
function initializeComparisonControls() {
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
    updateMobileSelectionButtons();
    updateComparisonContainer();
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
  notification.className = `comparison-notification comparison-notification-${type}`;
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
      updateMobileSelectionButtons();
      updateComparisonContainer();
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
    updateMobileSelectionButtons();
    updateComparisonContainer();
    updateSelectedCount();
  });
}

/**
 * Apply filters to character deck
 * @returns {void}
 */
// Function to get filter value from select element
function getFilterValue(filterId) {
  const selectElement = document.getElementById(filterId);
  if (selectElement && selectElement.tagName === 'SELECT') {
    return selectElement.value || '';
  }
  return '';
}

function applyFilters() {
  try {
    // Get filter values with null checks
    const filters = {
      class: getFilterValue('v2-class-filter'),
      faction: getFilterValue('v2-faction-filter'),
      rarity: getFilterValue('v2-rarity-filter'),
      equipment: getFilterValue('v2-equipment-filter'),
      moon: getFilterValue('v2-moon-filter'),
      attack: getFilterValue('v2-attack-filter'),
    };

    if (!window.SAB_COMPARISON_V2_DATA?.characters) {
      // Character data not available for filtering
      return;
    }

    filteredCharacters = window.SAB_COMPARISON_V2_DATA.characters.filter(character => {
      if (!character) return false;

      return (
        (!filters.class || character.class === filters.class) &&
        (!filters.faction || character.faction === filters.faction) &&
        (!filters.rarity || character.rarity === filters.rarity) &&
        (!filters.equipment || character.equipmentType === filters.equipment) &&
        (!filters.moon || character.moonPhase === filters.moon) &&
        (!filters.attack || character.attackType === filters.attack)
      );
    });

    updateIconStates();
    // Mobile dropdowns no longer used - modal system handles filtering
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
      'v2-class-filter',
      'v2-faction-filter',
      'v2-rarity-filter',
      'v2-equipment-filter',
      'v2-moon-filter',
      'v2-attack-filter',
    ];

    // const defaultTexts = {
    //   'v2-class-filter': 'All Classes',
    //   'v2-faction-filter': 'All Factions',
    //   'v2-rarity-filter': 'All Rarities',
    //   'v2-equipment-filter': 'All Equipment',
    //   'v2-moon-filter': 'All Phases',
    //   'v2-attack-filter': 'All Types'
    // };

    filterIds.forEach(id => {
      // Reset desktop select
      const desktopSelect = document.getElementById(id);
      if (desktopSelect && desktopSelect.tagName === 'SELECT') {
        desktopSelect.value = '';
      }

      // Reset select element
      const selectElement = document.getElementById(id);
      if (selectElement && selectElement.tagName === 'SELECT') {
        selectElement.value = '';
      }
    });

    document.body.classList.remove('modal-active');

    if (window.SAB_COMPARISON_V2_DATA?.characters) {
      filteredCharacters = [...window.SAB_COMPARISON_V2_DATA.characters];
      updateIconStates();
      // Mobile dropdowns no longer used - modal system handles filtering
    }
  } catch (error) {
    // Error resetting filters
  }
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
 * Update the comparison container
 * @returns {void}
 */
function updateComparisonContainer() {
  const emptyMessage = domCache.emptyMessage || document.getElementById('v2-empty-message');
  const comparisonContainer =
    domCache.comparisonContainer || document.getElementById('v2-comparison-container');

  if (!emptyMessage || !comparisonContainer) {
    // Required DOM elements not found for comparison container
    return;
  }

  if (selectedCharacters.length === 0) {
    emptyMessage.classList.remove('hidden');
    comparisonContainer.classList.add('hidden');
  } else {
    emptyMessage.classList.add('hidden');
    comparisonContainer.classList.remove('hidden');
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

  // Filter out null/undefined values
  const validSelectedCharacters = selectedCharacters.filter(Boolean);

  validSelectedCharacters.forEach(characterSlug => {
    const character = window.SAB_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug);
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

  // Create badges safely for SAB attributes
  const badgeData = [
    { class: 'rarity-badge', value: character.rarity },
    { class: 'class-badge', value: character.class },
    { class: 'faction-badge', value: character.faction },
    { class: 'equipment-badge', value: character.equipmentType },
    { class: 'moon-badge', value: character.moonPhase },
    { class: 'attack-badge', value: character.attackType },
  ];

  badgeData.forEach(badge => {
    if (badge.value) {
      const span = document.createElement('span');
      span.className = `${badge.class} ${badge.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      span.textContent = badge.value;
      badges.appendChild(span);
    }
  });

  // Assemble header
  info.appendChild(name);
  info.appendChild(badges);

  // Add character tags in separate container (like character pages)
  if (character.tags && character.tags.length > 0) {
    const tagsContainer = createSafeElement('div', '', 'comparison-character-tags');
    character.tags.forEach(tag => {
      const tagSpan = createSafeElement(
        'span',
        escapeHtml(tag),
        `tag-badge ${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
      );
      tagsContainer.appendChild(tagSpan);
    });
    info.appendChild(tagsContainer);
  }

  header.appendChild(portrait);
  header.appendChild(info);

  // Create stats section using safe method
  const statsDiv = document.createElement('div');
  // Use originalName for tier lookups but displayName for display
  const characterForStats = {
    ...character,
    name: character.originalName || character.name, // Ensure we use original name for tier lookups
  };
  // SECURITY: Use secure DOM creation instead of innerHTML to prevent XSS
  const statsContent = createCharacterStatsElement(characterForStats, detailedData);
  statsDiv.appendChild(statsContent);

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
 * Render character stats section
 */
// DEPRECATED: Replaced with createCharacterStatsElement for security
// eslint-disable-next-line no-unused-vars
function renderCharacterStats_DEPRECATED() {
  throw new Error(
    'SECURITY: This function has been disabled due to XSS vulnerability. Use createCharacterStatsElement instead.'
  );
}

/**
 * SECURITY: Create character stats section using safe DOM manipulation
 */
function createCharacterStatsElement(character, detailedData) {
  const stats = character.stats || {};
  const lookupName = character.originalName || character.name;
  const tiers = getCharacterTiers(lookupName);
  const characterId = character.id;
  const rankings = getCharacterRankings(characterId);

  // Main container
  const statsContainer = createSafeElement('div', '', 'comparison-card-stats');

  // SECURITY: Create tier rankings section with safe DOM manipulation
  const tierSection = createSafeElement('div', '', 'comparison-stat-section');
  const tierTitle = createSafeElement('h4', 'Tier Rankings');
  const tierGrid = createSafeElement('div', '', 'comparison-stat-grid');

  // Add tier items safely
  const tierData = [
    { label: 'PvE', value: tiers.pve || 'Unranked', tier: tiers.pve?.toLowerCase() },
    { label: 'PvP', value: tiers.pvp || 'Unranked', tier: tiers.pvp?.toLowerCase() },
    {
      label: 'Clan Hunt',
      value: tiers.clanHunt || 'Unranked',
      tier: tiers.clanHunt?.toLowerCase(),
    },
    {
      label: 'Boss Raids',
      value: tiers.bossRaids || 'Unranked',
      tier: tiers.bossRaids?.toLowerCase(),
    },
    {
      label: 'New Player',
      value: tiers.newPlayer || 'Unranked',
      tier: tiers.newPlayer?.toLowerCase(),
    },
  ];

  tierData.forEach(item => {
    const tierItem = createSafeElement('div', '', 'comparison-stat-item');
    const label = createSafeElement('span', item.label, 'comparison-stat-label');
    const value = createSafeElement(
      'span',
      item.value,
      `comparison-stat-value${item.tier ? ` tier-${item.tier}` : ''}`
    );
    tierItem.appendChild(label);
    tierItem.appendChild(value);
    tierGrid.appendChild(tierItem);
  });

  tierSection.appendChild(tierTitle);
  tierSection.appendChild(tierGrid);
  statsContainer.appendChild(tierSection);

  // Stat Rankings Section
  const rankSection = createSafeElement('div', '', 'comparison-stat-section');
  const rankTitle = createSafeElement('h4', 'Stat Rankings');
  const rankGrid = createSafeElement('div', '', 'comparison-stat-grid');

  const rankData = [
    { label: 'HP Rank', value: rankings.hp !== 'N/A' ? `#${rankings.hp}` : 'N/A' },
    { label: 'ATK Rank', value: rankings.atk !== 'N/A' ? `#${rankings.atk}` : 'N/A' },
    { label: 'P.DEF Rank', value: rankings.pDef !== 'N/A' ? `#${rankings.pDef}` : 'N/A' },
    { label: 'M.DEF Rank', value: rankings.mDef !== 'N/A' ? `#${rankings.mDef}` : 'N/A' },
  ];

  rankData.forEach(item => {
    const rankItem = createSafeElement('div', '', 'comparison-stat-item');
    const label = createSafeElement('span', item.label, 'comparison-stat-label');
    const value = createSafeElement('span', item.value, 'comparison-stat-value');
    rankItem.appendChild(label);
    rankItem.appendChild(value);
    rankGrid.appendChild(rankItem);
  });

  rankSection.appendChild(rankTitle);
  rankSection.appendChild(rankGrid);
  statsContainer.appendChild(rankSection);

  // Base Stats Section
  const statsSection = createSafeElement('div', '', 'comparison-stat-section');
  const statsTitle = createSafeElement('h4', 'Base Stats (Lv.200)');
  const statsGrid = createSafeElement('div', '', 'comparison-stat-grid');

  const baseStats = [
    { label: 'HP', value: stats.hp ? stats.hp.toLocaleString() : 'N/A' },
    { label: 'ATK', value: stats.atk ? stats.atk.toLocaleString() : 'N/A' },
    { label: 'P.DEF', value: stats.pDef ? stats.pDef.toLocaleString() : 'N/A' },
    { label: 'M.DEF', value: stats.mDef ? stats.mDef.toLocaleString() : 'N/A' },
    { label: 'ATK SPD', value: stats.atkSpd !== undefined ? `${stats.atkSpd}%` : 'N/A' },
    { label: 'CRIT Rate', value: stats.critRate ? `${stats.critRate}%` : 'N/A' },
    { label: 'CRIT DMG', value: stats.critDmgIncrease ? `${stats.critDmgIncrease}%` : 'N/A' },
    { label: 'Blood Power', value: stats.bloodPower ? stats.bloodPower.toLocaleString() : 'N/A' },
  ];

  baseStats.forEach(stat => {
    const statItem = createSafeElement('div', '', 'comparison-stat-item');
    const label = createSafeElement('span', stat.label, 'comparison-stat-label');
    const value = createSafeElement('span', stat.value, 'comparison-stat-value');
    statItem.appendChild(label);
    statItem.appendChild(value);
    statsGrid.appendChild(statItem);
  });

  statsSection.appendChild(statsTitle);
  statsSection.appendChild(statsGrid);
  statsContainer.appendChild(statsSection);

  // Skills Section - SECURITY: Safe skill rendering
  const skillsSection = createSafeElement('div', '', 'comparison-skills-section');
  const skillsTitle = createSafeElement('h4', 'Character Skills');
  skillsSection.appendChild(skillsTitle);

  if (detailedData && detailedData.skills && detailedData.skills.length > 0) {
    detailedData.skills.forEach(skill => {
      const skillItem = createSafeElement('div', '', 'comparison-skill-item');
      const skillHeader = createSafeElement('div', '', 'comparison-skill-header');
      const skillName = createSafeElement(
        'span',
        escapeHtml(skill.name || 'Unknown'),
        'comparison-skill-name'
      );
      const skillBadge = createSafeElement(
        'span',
        escapeHtml(skill.type || 'Unknown'),
        `skill-badge ${(skill.type || '').toLowerCase().replace(' ', '-')}`
      );
      const skillDesc = createSafeElement(
        'div',
        escapeHtml(skill.description || 'No description'),
        'comparison-skill-desc'
      );

      skillHeader.appendChild(skillName);
      skillHeader.appendChild(skillBadge);
      skillItem.appendChild(skillHeader);
      skillItem.appendChild(skillDesc);

      if (skill.cost) {
        const skillCost = createSafeElement(
          'div',
          `Cost: ${escapeHtml(skill.cost.toString())}`,
          'comparison-skill-cost'
        );
        skillHeader.appendChild(skillCost);
      }

      skillsSection.appendChild(skillItem);
    });
  } else if (detailedData) {
    const noSkills = createSafeElement(
      'div',
      'No detailed skill data available',
      'comparison-skill-desc'
    );
    skillsSection.appendChild(noSkills);
  } else {
    const loading = createSafeElement('div', 'Loading...', 'comparison-skill-desc');
    skillsSection.appendChild(loading);
  }

  statsContainer.appendChild(skillsSection);
  return statsContainer;
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

    // Dynamic import of individual character file - use relative path for production compatibility
    const module = await import(`../../data/silver-and-blood/characters/${sanitizedSlug}.js`);

    // Extract character data using expected export name pattern (camelCase)
    const exportName = sanitizedSlug.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
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
 * Update mobile selection buttons to show current character selections
 */
function updateMobileSelectionButtons() {
  [1, 2].forEach(slotNumber => {
    const characterSlug = selectedCharacters[slotNumber - 1];
    const character = characterSlug
      ? window.SAB_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug)
      : null;
    updateSelectionButtonDisplay(slotNumber, character);
  });
}

/**
 * Update the display of a selection button using safe DOM methods
 */
function updateSelectionButtonDisplay(slotNumber, character) {
  const buttonContent = document.getElementById(`v2-mobile-display-${slotNumber}`);
  if (!buttonContent) return;

  // Clear existing content
  buttonContent.textContent = '';

  if (character) {
    // Create selected character display
    const selectedDisplay = document.createElement('div');
    selectedDisplay.className = 'selected-character-display';

    const img = document.createElement('img');
    img.src = character.image || '/images/placeholder.png';
    img.alt = character.originalName || character.name || '';
    img.className = 'selected-character-image';
    img.onerror = function () {
      this.src = '/images/placeholder.png';
    };

    const info = document.createElement('div');
    info.className = 'selected-character-info';

    const name = document.createElement('span');
    name.className = 'selected-character-name';
    name.textContent = character.originalName || character.name || '';

    const details = document.createElement('span');
    details.className = 'selected-character-details';
    details.textContent = `${character.rarity || ''} ${character.faction || ''}`;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'selection-remove-btn';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remove character';
    removeBtn.addEventListener('click', event => {
      event.stopPropagation();
      // Clear this slot
      selectedCharacters[slotNumber - 1] = null;
      // Clean up array
      selectedCharacters.splice(
        0,
        selectedCharacters.length,
        ...selectedCharacters.filter(Boolean)
      );
      // Update displays
      updateMobileSelectionButtons();
      updateIconStates();
      updateSelectedCount();
      renderComparisonCards();
    });

    info.appendChild(name);
    info.appendChild(details);
    selectedDisplay.appendChild(img);
    selectedDisplay.appendChild(info);
    selectedDisplay.appendChild(removeBtn);
    buttonContent.appendChild(selectedDisplay);
  } else {
    // Create placeholder display
    const placeholder = document.createElement('div');
    placeholder.className = 'selection-placeholder';

    const icon = document.createElement('span');
    icon.className = 'selection-icon';
    icon.textContent = '+';

    const text = document.createElement('span');
    text.className = 'selection-text';
    text.textContent = `Select Character ${slotNumber}`;

    placeholder.appendChild(icon);
    placeholder.appendChild(text);
    buttonContent.appendChild(placeholder);
  }
}

/**
 * Reset modal filters to default state
 */
function resetModalFilters() {
  // Modal filters have been removed for touch device optimization
  // Only reset search input if needed
  const searchInput = document.getElementById('v2-modal-search');
  if (searchInput) {
    searchInput.value = '';
  }
}

/**
 * Update modal character grid based on search only (filters removed)
 */
function updateModalCharacterGrid(searchTerm = '') {
  if (!window.SAB_COMPARISON_V2_DATA?.characters) {
    // No character data available for modal filtering
    return;
  }

  // Modal filters removed for touch optimization - only search remains

  const characterCards = document.querySelectorAll('.modal-character-card');

  characterCards.forEach(card => {
    const characterSlug = card.dataset.characterSlug;
    const character = window.SAB_COMPARISON_V2_DATA.characters.find(c => c.slug === characterSlug);

    if (!character) {
      // Character not found for slug
      card.classList.add('filtered-out');
      return;
    }

    // Search-only matching - case insensitive (filters removed for touch optimization)
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      character.originalName?.toLowerCase().includes(searchLower) ||
      character.displayName?.toLowerCase().includes(searchLower);

    const shouldShow = matchesSearch;

    if (shouldShow) {
      card.classList.remove('filtered-out');
    } else {
      card.classList.add('filtered-out');
    }
  });
}

/**
 * Update modal character selection states
 */
function updateModalCharacterStates() {
  const characterCards = document.querySelectorAll('.modal-character-card');

  characterCards.forEach(card => {
    const characterSlug = card.dataset.characterSlug;
    const isSelected = selectedCharacters.includes(characterSlug);
    card.classList.toggle('selected', isSelected);
  });
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
      closeAllFilterDropdowns();
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

  // Silver & Blood Comparison V2: Cleanup completed
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
window.SAB_COMPARISON_V2_CLEANUP = cleanup; // Export cleanup for manual cleanup
