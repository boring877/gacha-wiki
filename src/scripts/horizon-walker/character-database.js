/**
 * Horizon Walker Character Database JavaScript
 * Handles filtering, sorting, and interaction logic for the character database
 * Extracted from characters.astro for better separation of concerns
 */

'use strict';

// JavaScript for character database functionality
// No TypeScript interfaces needed for browser execution

// Function to initialize - run immediately or when DOM is ready
const initialize = () => {
  // --- DOM references ---
  const tableBody = document.getElementById('character-table-body');
  const mobileCardsContainer = document.getElementById('mobile-cards-container');
  const rarityFilter = document.getElementById('rarity-filter');
  const sortButtons = document.querySelectorAll('.sort-btn');
  const resetButton = document.getElementById('reset-table');

  // --- State ---
  let currentSortKey = 'name';
  let currentSortDirection = 'asc';

  // Sort button states: normal -> asc -> desc -> normal (3-state cycle)
  const filterStates = new Map();

  // Early exit if required elements don't exist
  if (!tableBody || !mobileCardsContainer) {
    return;
  }

  // --- Helper Functions ---

  /**
   * Renumbers visible table rows sequentially
   * Used after filtering to maintain proper row numbering
   */
  function renumberRows() {
    let visibleIndex = 1;
    Array.from(tableBody.children).forEach(row => {
      if (row.style.display !== 'none') {
        const firstCell = row.querySelector('td');
        if (firstCell) {
          firstCell.textContent = String(visibleIndex++);
        }
      }
    });
  }

  /**
   * Sorts elements numerically by specified criteria
   * @param items - Array of DOM elements to sort
   * @param columnIndex - Table column index for desktop sorting
   * @param isDesktop - Whether sorting desktop table or mobile cards
   * @returns Sorted array of elements
   */
  function sortByNumeric(items, columnIndex, isDesktop = true) {
    return items.sort((a, b) => {
      let valueA, valueB;

      if (isDesktop) {
        const cellA = a.querySelector(`td:nth-child(${columnIndex})`);
        const cellB = b.querySelector(`td:nth-child(${columnIndex})`);
        valueA = parseFloat((cellA?.textContent || '0').replace(/[,%]/g, ''));
        valueB = parseFloat((cellB?.textContent || '0').replace(/[,%]/g, ''));
      } else {
        // Mobile cards - need to find the corresponding stat
        const statLabelA = a.querySelector(`[data-stat="${currentSortKey}"]`);
        const statLabelB = b.querySelector(`[data-stat="${currentSortKey}"]`);
        valueA = parseFloat((statLabelA?.textContent || '0').replace(/[,%]/g, ''));
        valueB = parseFloat((statLabelB?.textContent || '0').replace(/[,%]/g, ''));
      }

      return currentSortDirection === 'desc' ? valueB - valueA : valueA - valueB;
    });
  }

  /**
   * Applies sorting to both desktop table and mobile cards
   * @param sortKey - The data attribute key to sort by
   */
  function applySort(sortKey) {
    currentSortKey = sortKey;

    // Sort desktop table
    if (tableBody) {
      const rows = Array.from(tableBody.children);
      let sortedRows;

      if (sortKey === 'name') {
        // Name sorting removed - skip
        sortedRows = rows;
      } else {
        // Find column index for numeric sorting
        const headerRow = tableBody.parentElement?.querySelector('thead tr');
        const columnIndex =
          Array.from(headerRow?.children || []).findIndex(th =>
            th.textContent.toLowerCase().includes(sortKey.toLowerCase())
          ) + 1;

        if (columnIndex > 0) {
          sortedRows = sortByNumeric(rows, columnIndex, true);
        } else {
          sortedRows = rows;
        }
      }

      // Re-append sorted rows
      sortedRows.forEach(row => tableBody.appendChild(row));
      renumberRows();
    }

    // Sort mobile cards
    if (mobileCardsContainer) {
      const cards = Array.from(mobileCardsContainer.children);
      let sortedCards;

      if (sortKey === 'name') {
        // Name sorting for mobile cards - simple alphabetical
        sortedCards = cards.sort((a, b) => {
          const nameA = a.querySelector('.character-name')?.textContent || '';
          const nameB = b.querySelector('.character-name')?.textContent || '';
          return currentSortDirection === 'desc'
            ? nameB.localeCompare(nameA)
            : nameA.localeCompare(nameB);
        });
      } else {
        sortedCards = sortByNumeric(cards, 0, false);
      }

      // Re-append sorted cards
      sortedCards.forEach(card => mobileCardsContainer.appendChild(card));
    }

    // Save sort state to sessionStorage
    try {
      sessionStorage.setItem(
        'hw-character-sort',
        JSON.stringify({
          key: currentSortKey,
          direction: currentSortDirection,
        })
      );
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Applies current filter settings to both desktop and mobile views
   * Filters by rarity and saves state to sessionStorage
   */
  function applyFilters() {
    const rarityValue = rarityFilter?.value || '';

    // Filter desktop table rows
    if (tableBody) {
      Array.from(tableBody.children).forEach(row => {
        const rarityCell = row.querySelector('.hw-badge[data-rarity]');

        const matchesRarity = !rarityValue || rarityCell?.textContent.trim() === rarityValue;

        const isVisible = matchesRarity;
        row.style.display = isVisible ? '' : 'none';
      });

      renumberRows();
    }

    // Filter mobile cards
    if (mobileCardsContainer) {
      Array.from(mobileCardsContainer.children).forEach(card => {
        const rarityBadge = card.querySelector('.hw-badge[data-rarity]');

        const matchesRarity = !rarityValue || rarityBadge?.textContent.trim() === rarityValue;

        const isVisible = matchesRarity;
        card.style.display = isVisible ? '' : 'none';
      });
    }

    // Save filter state to sessionStorage
    const filterState = {
      rarity: rarityValue || null,
    };

    const activeFilters = {};
    Object.keys(filterState).forEach(key => {
      if (filterState[key]) {
        activeFilters[key] = filterState[key];
      }
    });

    try {
      if (Object.keys(activeFilters).length > 0) {
        sessionStorage.setItem('hw-character-filters', JSON.stringify(activeFilters));
      } else {
        sessionStorage.removeItem('hw-character-filters');
      }
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Resets all filters and sorting to default state
   * Clears sessionStorage and shows all characters
   */
  function resetDatabase() {
    // Clear all filters
    if (rarityFilter) rarityFilter.value = '';

    // Show all rows and cards
    if (tableBody) {
      Array.from(tableBody.children).forEach(row => {
        row.style.display = '';
      });
      renumberRows();
    }

    if (mobileCardsContainer) {
      Array.from(mobileCardsContainer.children).forEach(card => {
        card.style.display = '';
      });
    }

    // Clear active sort buttons
    sortButtons.forEach(btn => btn.classList.remove('active'));

    // Clear sessionStorage
    try {
      sessionStorage.removeItem('hw-character-filters');
      sessionStorage.removeItem('hw-character-sort');
    } catch (_error) {
      // Ignore storage errors
    }

    currentSortKey = 'name';
    currentSortDirection = 'asc';
  }

  function restoreState() {
    // Restore filter state
    try {
      const savedFilters = sessionStorage.getItem('hw-character-filters');
      if (savedFilters) {
        const filters = JSON.parse(savedFilters);
        if (filters.rarity && rarityFilter) rarityFilter.value = filters.rarity;
        applyFilters();
      }
    } catch (_error) {
      // Ignore storage errors
    }

    // Restore sort state
    try {
      const savedSort = sessionStorage.getItem('hw-character-sort');
      if (savedSort) {
        const sortState = JSON.parse(savedSort);
        currentSortKey = sortState.key || 'name';
        currentSortDirection = sortState.direction || 'asc';

        const activeButton = document.querySelector(`[data-sort="${currentSortKey}"]`);
        if (activeButton) {
          activeButton.classList.add('active');
          applySort(currentSortKey);
        }
      }
    } catch (_error) {
      // Ignore storage errors
    }
  }

  // --- Three-State Sort Button Functions ---
  function initializeSortStates() {
    sortButtons.forEach(btn => {
      filterStates.set(btn, 'normal');
      btn.classList.add('state-normal');
    });
  }

  function cycleSortState(sortButton) {
    const currentState = filterStates.get(sortButton);
    let nextState;

    switch (currentState) {
      case 'normal':
        nextState = 'asc';
        break;
      case 'asc':
        nextState = 'desc';
        break;
      case 'desc':
        nextState = 'normal';
        break;
      default:
        nextState = 'normal';
    }

    // Reset all other sort buttons to normal
    sortButtons.forEach(btn => {
      if (btn !== sortButton) {
        btn.classList.remove('state-normal', 'state-asc', 'state-desc', 'active');
        btn.classList.add('state-normal');
        filterStates.set(btn, 'normal');
      }
    });

    // Update clicked button state
    sortButton.classList.remove('state-normal', 'state-asc', 'state-desc', 'active');
    sortButton.classList.add(`state-${nextState}`);
    filterStates.set(sortButton, nextState);

    // Apply sorting based on new state
    if (nextState !== 'normal') {
      const sortKey = sortButton.dataset.sort;
      if (sortKey) {
        currentSortKey = sortKey;
        currentSortDirection = nextState; // 'asc' or 'desc'
        applySort(sortKey);
      }
    }
  }

  // --- Event Listeners ---

  // Initialize sort button states
  initializeSortStates();

  // Filter event listeners (keep existing for compatibility)
  if (rarityFilter) {
    rarityFilter.addEventListener('change', applyFilters);
  }

  // Three-state sort button event listeners
  sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cycleSortState(btn);
    });
  });

  // Reset button event listener
  if (resetButton) {
    resetButton.addEventListener('click', resetDatabase);
  }

  // Character card/row click navigation with touch optimization
  // Use event delegation to handle both existing and future elements
  document.addEventListener('click', e => {
    const clickableElement = e.target?.closest('[data-url]');
    if (clickableElement) {
      e.preventDefault();
      const url = clickableElement.dataset.url;
      if (url) {
        window.location.href = url;
      }
    }
  });

  // Also set styles for existing elements
  const clickableElements = document.querySelectorAll('[data-url]');
  clickableElements.forEach(element => {
    element.style.cursor = 'pointer';
    element.style.touchAction = 'manipulation';
  });

  // Initialize with restored state
  restoreState();
};

// Run initialization - either immediately if DOM is ready, or wait for it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
