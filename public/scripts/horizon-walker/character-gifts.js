/**
 * ═══════════════════════════════════════════════════════════════════════
 *                      HORIZON WALKER GIFTS SCRIPT
 *                     JavaScript for gifts page functionality
 * ═══════════════════════════════════════════════════════════════════════
 */

'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize gift functionality
  initializeGifts();
});

/**
 * Initialize gift page functionality
 */
function initializeGifts() {
  setupCharacterGifts();
}

/**
 * Setup character gifts search and filter functionality
 */
function setupCharacterGifts() {
  // DOM references
  const searchInput = document.getElementById('character-search');
  const rarityButtons = document.querySelectorAll('.hw-rarity-btn');
  const resetButton = document.getElementById('reset-filters');
  const characterCards = document.querySelectorAll('.hw-character-card');

  // State
  let currentSearchTerm = '';
  let currentRarityFilter = 'all';

  // Early exit if required elements don't exist
  if (!searchInput || !characterCards.length) {
    return;
  }

  /**
   * Filter character cards based on current search and rarity filter
   */
  function applyFilters() {
    let visibleCount = 0;

    characterCards.forEach(card => {
      const characterName = card.dataset.name?.toLowerCase() || '';
      const characterRarity = card.dataset.rarity || '';

      // Check if card matches search term
      const matchesSearch =
        !currentSearchTerm || characterName.includes(currentSearchTerm.toLowerCase());

      // Check if card matches rarity filter
      const matchesRarity =
        currentRarityFilter === 'all' || characterRarity === currentRarityFilter;

      // Show/hide card based on combined filters
      const isVisible = matchesSearch && matchesRarity;
      card.style.display = isVisible ? '' : 'none';

      if (isVisible) {
        visibleCount++;
      }
    });

    // Show "no results" message if no cards are visible
    showNoResultsMessage(visibleCount === 0);

    // Save state to sessionStorage
    saveFilterState();
  }

  /**
   * Show or hide "no results" message
   */
  function showNoResultsMessage(show) {
    const existingMessage = document.querySelector('.hw-no-results-message');

    if (show && !existingMessage) {
      const message = document.createElement('div');
      message.className = 'hw-no-results-message';
      message.innerHTML = `
        <div class="hw-no-results-content">
          <h3>No characters found</h3>
          <p>Try adjusting your search term or filter settings</p>
        </div>
      `;
      document.getElementById('character-grid').appendChild(message);
    } else if (!show && existingMessage) {
      existingMessage.remove();
    }
  }

  /**
   * Save current filter state to sessionStorage
   */
  function saveFilterState() {
    const filterState = {
      search: currentSearchTerm,
      rarity: currentRarityFilter,
    };

    try {
      sessionStorage.setItem('hw-character-gifts-filters', JSON.stringify(filterState));
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Restore filter state from sessionStorage
   */
  function restoreFilterState() {
    try {
      const savedFilters = sessionStorage.getItem('hw-character-gifts-filters');
      if (savedFilters) {
        const filters = JSON.parse(savedFilters);

        // Restore search term
        if (filters.search) {
          currentSearchTerm = filters.search;
          searchInput.value = filters.search;
        }

        // Restore rarity filter
        if (filters.rarity) {
          currentRarityFilter = filters.rarity;

          // Update button states
          rarityButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.rarity === filters.rarity) {
              btn.classList.add('active');
            }
          });
        }

        // Apply filters
        applyFilters();
      }
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Reset all filters to default state
   */
  function resetFilters() {
    currentSearchTerm = '';
    currentRarityFilter = 'all';

    // Reset search input
    searchInput.value = '';

    // Reset rarity buttons
    rarityButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.rarity === 'all') {
        btn.classList.add('active');
      }
    });

    // Apply filters (shows all characters)
    applyFilters();

    // Clear sessionStorage
    try {
      sessionStorage.removeItem('hw-character-gifts-filters');
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Handle rarity filter button clicks
   */
  function handleRarityFilter(button) {
    const selectedRarity = button.dataset.rarity;

    if (selectedRarity === currentRarityFilter) {
      // If clicking the same filter, reset to 'all'
      currentRarityFilter = 'all';
      updateRarityButtons('all');
    } else {
      currentRarityFilter = selectedRarity;
      updateRarityButtons(selectedRarity);
    }

    applyFilters();
  }

  /**
   * Update rarity button active states
   */
  function updateRarityButtons(activeRarity) {
    rarityButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.rarity === activeRarity) {
        btn.classList.add('active');
      }
    });
  }

  // Event Listeners

  // Search input with debouncing
  let searchTimeout;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearchTerm = this.value;
      applyFilters();
    }, 300); // 300ms debounce
  });

  // Clear search on Escape key
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      currentSearchTerm = '';
      this.value = '';
      applyFilters();
    }
  });

  // Rarity filter buttons
  rarityButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleRarityFilter(button);
    });
  });

  // Reset button
  if (resetButton) {
    resetButton.addEventListener('click', resetFilters);
  }

  // Keyboard accessibility for filter buttons
  rarityButtons.forEach(button => {
    button.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  if (resetButton) {
    resetButton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  // Initialize with restored state
  restoreFilterState();
}

/**
 * Legacy function names for backwards compatibility
 */
function filterGifts(filterType, filterValue) {
  console.warn('filterGifts is deprecated. Use the new filtering system instead.');
}

function searchGifts(searchTerm) {
  console.warn('searchGifts is deprecated. Use the new search system instead.');
}

/**
 * Show gift details (placeholder for future functionality)
 */
function showGiftDetails(giftId) {
  console.log('Gift details not yet implemented for gift:', giftId);
}

/**
 * Toggle gift collection status (placeholder for future functionality)
 */
function toggleGiftCollection(giftId) {
  console.log('Gift collection not yet implemented for gift:', giftId);
}

// Export functions for external use if needed
window.HorizonWalkerGifts = {
  filterGifts,
  searchGifts,
  showGiftDetails,
  toggleGiftCollection,
};
