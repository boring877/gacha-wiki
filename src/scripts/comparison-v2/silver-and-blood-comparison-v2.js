/**
 * Silver & Blood Character Comparison V2 - Card-based System
 * JavaScript logic for character selection, card management, and comparison functionality
 * Adapted specifically for Silver & Blood data structure and features
 *
 * Security: All user inputs are sanitized, no eval() usage, safe DOM manipulation
 */

'use strict';

// Performance constants - replace magic numbers
const PERFORMANCE_CONFIG = {
  MAX_CHARACTERS: 2,
  SCROLL_DELAY_DESKTOP: 100,
  SCROLL_DELAY_MOBILE: 300,
  NOTIFICATION_TIMEOUT: 3000,
  SEARCH_INPUT_FOCUS_DELAY: 100,
  PRELOAD_POPULAR_COUNT: 10,
};

// Popular characters for preloading (most commonly compared)
const POPULAR_CHARACTERS = [
  'fleeting-bella',
  'timeless-aiona',
  'eternal-lanaith',
  'forsaken-norn',
  'shadow-luna',
];

// Global state - using const where possible for immutability
const selectedCharacters = [];
let filteredCharacters = [];
const characterDataMap = new Map(); // Use Map for better performance
const MAX_CHARACTERS = PERFORMANCE_CONFIG.MAX_CHARACTERS;

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

// Error handling and logging system
const ErrorLogger = {
  log(context, error, details = {}) {
    const timestamp = new Date().toISOString();
    const errorInfo = {
      timestamp,
      context,
      message: error?.message || String(error),
      stack: error?.stack,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost') {
      console.error(`[${context}]`, errorInfo);
    }

    // In production, you could send to analytics service
    // analytics.track('comparison_v2_error', errorInfo);

    return errorInfo;
  },

  showUserError(message, type = 'error') {
    showNotification(message, type);
  },
};

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

// Initialize when DOM is loaded - using arrow function for consistency
document.addEventListener('DOMContentLoaded', () => {
  initializeComparisonV2();
});

/**
 * Initialize the V2 comparison system
 * @returns {Promise<void>}
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

    // Preload popular character data for better performance
    preloadPopularCharacters();

    console.log('Silver & Blood Comparison V2: Initialized successfully');
  } catch (error) {
    ErrorLogger.log('initialization', error, {
      hasCharacterData: !!window.SAB_COMPARISON_V2_DATA?.characters,
      characterCount: window.SAB_COMPARISON_V2_DATA?.characters?.length,
    });

    showErrorMessage('Failed to load character comparison. Please refresh the page.');
  }
}

/**
 * Preload popular character data for better performance
 * @returns {Promise<void>}
 */
async function preloadPopularCharacters() {
  if (!window.SAB_COMPARISON_V2_DATA?.characters) return;

  const availableCharacters = window.SAB_COMPARISON_V2_DATA.characters
    .map(char => char.slug)
    .filter(slug => POPULAR_CHARACTERS.includes(slug))
    .slice(0, PERFORMANCE_CONFIG.PRELOAD_POPULAR_COUNT);

  const preloadPromises = availableCharacters.map(async slug => {
    try {
      if (!characterDataMap.has(slug)) {
        await loadCharacterData(slug);
      }
    } catch (error) {
      ErrorLogger.log('preload', error, { characterSlug: slug });
      // Don't fail entire preload if one character fails
    }
  });

  await Promise.allSettled(preloadPromises);
  console.log(`Preloaded ${availableCharacters.length} popular characters`);
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

    document.body.style.overflow = 'hidden';

    // Focus search input for better UX (reuse existing searchInput variable)
    if (searchInput) {
      setTimeout(() => searchInput.focus(), PERFORMANCE_CONFIG.SEARCH_INPUT_FOCUS_DELAY);
    }
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove('open');

    document.body.style.overflow = '';

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
        updateAllDisplays();

        // Load character data
        loadCharacterData(characterSlug);

        // Close modal
        window.closeMobileModal();

        // Auto-scroll to comparison section when 2 characters are selected (mobile/tablet)
        if (selectedCharacters.filter(Boolean).length === MAX_CHARACTERS) {
          setTimeout(() => {
            const comparisonContainer = document.getElementById('v2-comparison-container');
            if (comparisonContainer && !comparisonContainer.classList.contains('hidden')) {
              comparisonContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }
          }, PERFORMANCE_CONFIG.SCROLL_DELAY_MOBILE); // Slightly longer delay for mobile to ensure modal is closed
        }
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

  // Single batch update
  updateAllDisplays();

  // Load character data lazily
  loadCharacterData(characterSlug);

  // Auto-scroll to comparison section when 2 characters are selected (desktop only)
  if (selectedCharacters.length === MAX_CHARACTERS && window.innerWidth > 768) {
    setTimeout(() => {
      const comparisonContainer = document.getElementById('v2-comparison-container');
      if (comparisonContainer && !comparisonContainer.classList.contains('hidden')) {
        comparisonContainer.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, PERFORMANCE_CONFIG.SCROLL_DELAY_DESKTOP); // Small delay to ensure DOM is updated
  }

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

  // Auto-remove after configured timeout
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, PERFORMANCE_CONFIG.NOTIFICATION_TIMEOUT);
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

    // Single batch update
    updateAllDisplays();

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

  // Single batch update
  updateAllDisplays();
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
      ErrorLogger.log('applyFilters', new Error('Character data not available'));
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
    ErrorLogger.log('applyFilters', error, {
      hasCharacterData: !!window.SAB_COMPARISON_V2_DATA?.characters,
      characterCount: window.SAB_COMPARISON_V2_DATA?.characters?.length,
    });
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

    filterIds.forEach(id => {
      // Reset select element (simplified - removed duplicate code)
      const selectElement = document.getElementById(id);
      if (selectElement && selectElement.tagName === 'SELECT') {
        selectElement.value = '';
      }
    });

    document.body.classList.remove('modal-active');

    if (window.SAB_COMPARISON_V2_DATA?.characters) {
      filteredCharacters = [...window.SAB_COMPARISON_V2_DATA.characters];
      updateIconStates();
    } else {
      ErrorLogger.log('resetFilters', new Error('Character data not available after reset'));
    }
  } catch (error) {
    ErrorLogger.log('resetFilters', error, {
      filterIds: [
        'v2-class-filter',
        'v2-faction-filter',
        'v2-rarity-filter',
        'v2-equipment-filter',
        'v2-moon-filter',
        'v2-attack-filter',
      ],
      hasCharacterData: !!window.SAB_COMPARISON_V2_DATA?.characters,
    });
  }
}

/**
 * Update character icon states (selection and filtering)
 */
function updateIconStates() {
  const icons = document.querySelectorAll('.character-icon');
  const filteredSlugs = new Set(filteredCharacters.map(char => char.slug));
  const selectedSet = new Set(selectedCharacters);

  icons.forEach(icon => {
    const characterSlug = icon.dataset.characterSlug;
    const isSelected = selectedSet.has(characterSlug);
    const isFiltered = filteredSlugs.has(characterSlug);

    icon.classList.toggle('selected', isSelected);
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
    ErrorLogger.log('loadCharacterData', new Error('Invalid character slug'), { characterSlug });
    return;
  }

  if (characterDataMap.has(characterSlug)) return;

  try {
    // Security: Validate against known character slugs to prevent path traversal
    const validSlugs = window.SAB_COMPARISON_V2_DATA?.characters?.map(char => char.slug) || [];
    if (!validSlugs.includes(characterSlug)) {
      throw new Error(`Invalid character slug: ${characterSlug}`);
    }

    // Dynamic import of individual character file
    const module = await import(`/src/data/silver-and-blood/characters/${characterSlug}.js`);

    // Extract character data using expected export name pattern (camelCase)
    const exportName = characterSlug.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
    const characterData = module[exportName];

    if (characterData && typeof characterData === 'object') {
      characterDataMap.set(characterSlug, characterData);
    } else {
      // Fallback: try to get first valid export
      const exports = Object.values(module);
      const firstValidExport = exports.find(exp => exp && typeof exp === 'object');

      if (firstValidExport) {
        characterDataMap.set(characterSlug, firstValidExport);
      } else {
        throw new Error(`No valid character data found in module for ${characterSlug}`);
      }
    }

    // Re-render the comparison cards to show loaded data
    renderComparisonCards();
  } catch (error) {
    ErrorLogger.log('loadCharacterData', error, {
      characterSlug,
    });

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

/**
 * Centralized update function to batch DOM updates
 */
function updateAllDisplays() {
  requestAnimationFrame(() => {
    updateIconStates();
    updateMobileSelectionButtons();
    updateComparisonContainer();
    updateSelectedCount();
  });
}

// Export only essential functions to global scope
window.SAB_COMPARISON_V2_CLEANUP = cleanup; // Export cleanup for manual cleanup
