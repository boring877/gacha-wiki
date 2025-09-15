/**
 * Horizon Walker Mercenary Database JavaScript.
 * Handles filtering, sorting, and interaction logic for the mercenary database
 * Based on character-database.js structure
 */

'use strict';

// Function to initialize - run immediately or when DOM is ready
const initialize = () => {
  // --- DOM references ---
  const tableBody = document.getElementById('character-table-body');
  const mobileCardsContainer = document.getElementById('mobile-cards-container');
  const rarityFilter = document.getElementById('rarity-filter');
  const useabilityFilter = document.getElementById('useability-filter');
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
        // Sort by mercenary name
        sortedRows = rows.sort((a, b) => {
          const nameA = a.querySelector('.character-name')?.textContent || '';
          const nameB = b.querySelector('.character-name')?.textContent || '';
          return currentSortDirection === 'desc'
            ? nameB.localeCompare(nameA)
            : nameA.localeCompare(nameB);
        });
      } else if (sortKey === 'rarity') {
        // Sort by rarity (special ordering: EX > SS > S > A > B)
        const rarityOrder = { EX: 5, SS: 4, S: 3, A: 2, B: 1 };
        sortedRows = rows.sort((a, b) => {
          const rarityA = a.querySelector('.hw-badge[data-rarity]')?.textContent?.trim() || '';
          const rarityB = b.querySelector('.hw-badge[data-rarity]')?.textContent?.trim() || '';
          const valueA = rarityOrder[rarityA] || 0;
          const valueB = rarityOrder[rarityB] || 0;
          return currentSortDirection === 'desc' ? valueB - valueA : valueA - valueB;
        });
      } else if (sortKey === 'useability') {
        // Sort by useability text
        sortedRows = rows.sort((a, b) => {
          const useabilityA = a.querySelector('.useability-value')?.textContent || '';
          const useabilityB = b.querySelector('.useability-value')?.textContent || '';
          return currentSortDirection === 'desc'
            ? useabilityB.localeCompare(useabilityA)
            : useabilityA.localeCompare(useabilityB);
        });
      } else {
        // Sort by data attribute instead of column index
        sortedRows = rows.sort((a, b) => {
          const cellA = a.querySelector(`td[data-sort-key="${sortKey}"]`);
          const cellB = b.querySelector(`td[data-sort-key="${sortKey}"]`);

          if (!cellA || !cellB) return 0;

          // Get the actual value from the cell content
          const valueA = parseFloat((cellA.textContent || '0').replace(/[,%]/g, ''));
          const valueB = parseFloat((cellB.textContent || '0').replace(/[,%]/g, ''));

          return currentSortDirection === 'desc' ? valueB - valueA : valueA - valueB;
        });
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
      } else if (sortKey === 'rarity') {
        // Sort by rarity (special ordering: EX > SS > S > A > B)
        const rarityOrder = { EX: 5, SS: 4, S: 3, A: 2, B: 1 };
        sortedCards = cards.sort((a, b) => {
          const rarityA = a.querySelector('.hw-badge[data-rarity]')?.textContent?.trim() || '';
          const rarityB = b.querySelector('.hw-badge[data-rarity]')?.textContent?.trim() || '';
          const valueA = rarityOrder[rarityA] || 0;
          const valueB = rarityOrder[rarityB] || 0;
          return currentSortDirection === 'desc' ? valueB - valueA : valueA - valueB;
        });
      } else if (sortKey === 'cost') {
        // Sort by cost for mobile cards
        sortedCards = cards.sort((a, b) => {
          const costA = parseInt(
            a.querySelector('.cost-badge')?.textContent?.replace(/[^0-9]/g, '') || '0'
          );
          const costB = parseInt(
            b.querySelector('.cost-badge')?.textContent?.replace(/[^0-9]/g, '') || '0'
          );
          return currentSortDirection === 'desc' ? costB - costA : costA - costB;
        });
      } else if (sortKey === 'useability') {
        // Sort by useability for mobile cards
        sortedCards = cards.sort((a, b) => {
          const useabilityA = a.querySelector('[data-stat="useability"]')?.textContent || '';
          const useabilityB = b.querySelector('[data-stat="useability"]')?.textContent || '';
          return currentSortDirection === 'desc'
            ? useabilityB.localeCompare(useabilityA)
            : useabilityA.localeCompare(useabilityB);
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
        'hw-mercenary-sort',
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
   * Filters by rarity and useability, saves state to sessionStorage
   */
  function applyFilters() {
    const rarityValue = rarityFilter?.value || '';
    const useabilityValue = useabilityFilter?.value || '';

    // Filter desktop table rows
    if (tableBody) {
      Array.from(tableBody.children).forEach(row => {
        const rarityCell = row.querySelector('.hw-badge[data-rarity]');
        const useabilityCell = row.querySelector('.useability-value');

        const matchesRarity = !rarityValue || rarityCell?.textContent.trim() === rarityValue;
        const matchesUseability =
          !useabilityValue || useabilityCell?.textContent.trim() === useabilityValue;

        const isVisible = matchesRarity && matchesUseability;
        row.style.display = isVisible ? '' : 'none';
      });

      renumberRows();
    }

    // Filter mobile cards
    if (mobileCardsContainer) {
      Array.from(mobileCardsContainer.children).forEach(card => {
        const rarityBadge = card.querySelector('.hw-badge[data-rarity]');
        const useabilitySpan = card.querySelector('[data-stat="useability"]');

        const matchesRarity = !rarityValue || rarityBadge?.textContent.trim() === rarityValue;
        const matchesUseability =
          !useabilityValue || useabilitySpan?.textContent.trim() === useabilityValue;

        const isVisible = matchesRarity && matchesUseability;
        card.style.display = isVisible ? '' : 'none';
      });
    }

    // Save filter state to sessionStorage
    const filterState = {
      rarity: rarityValue || null,
      useability: useabilityValue || null,
    };

    const activeFilters = {};
    Object.keys(filterState).forEach(key => {
      if (filterState[key]) {
        activeFilters[key] = filterState[key];
      }
    });

    try {
      if (Object.keys(activeFilters).length > 0) {
        sessionStorage.setItem('hw-mercenary-filters', JSON.stringify(activeFilters));
      } else {
        sessionStorage.removeItem('hw-mercenary-filters');
      }
    } catch (_error) {
      // Ignore storage errors
    }
  }

  /**
   * Resets all filters and sorting to default state
   * Clears sessionStorage and shows all mercenaries
   */
  function resetDatabase() {
    // Clear all filters
    if (rarityFilter) rarityFilter.value = '';
    if (useabilityFilter) useabilityFilter.value = '';

    // Show all rows and cards
    if (tableBody) {
      Array.from(tableBody.children).forEach(row => {
        row.style.display = '';
      });
    }

    if (mobileCardsContainer) {
      Array.from(mobileCardsContainer.children).forEach(card => {
        card.style.display = '';
      });
    }

    // Reset sort button states
    sortButtons.forEach(btn => {
      btn.classList.remove('active');
      filterStates.set(btn, 'normal');

      // Clear sort indicators from button text
      const baseText = btn.textContent.replace(/ [↑↓]$/, '');
      btn.textContent = baseText;
    });

    // Clear sessionStorage
    try {
      sessionStorage.removeItem('hw-mercenary-filters');
      sessionStorage.removeItem('hw-mercenary-sort');
    } catch (_error) {
      // Ignore storage errors
    }

    // Reset to default sort (name ascending)
    currentSortKey = 'name';
    currentSortDirection = 'asc';

    // Apply default sort
    applySort('name');

    // Renumber both table rows and reset display order
    renumberRows();
  }

  function restoreState() {
    // Restore filter state
    try {
      const savedFilters = sessionStorage.getItem('hw-mercenary-filters');
      if (savedFilters) {
        const filters = JSON.parse(savedFilters);
        if (filters.rarity && rarityFilter) rarityFilter.value = filters.rarity;
        if (filters.useability && useabilityFilter) useabilityFilter.value = filters.useability;
        applyFilters();
      }
    } catch (_error) {
      // Ignore storage errors
    }

    // Restore sort state
    try {
      const savedSort = sessionStorage.getItem('hw-mercenary-sort');
      if (savedSort) {
        const sortState = JSON.parse(savedSort);
        currentSortKey = sortState.key || 'name';
        currentSortDirection = sortState.direction || 'asc';

        const activeButton = document.querySelector(`[data-sort="${currentSortKey}"]`);
        if (activeButton) {
          // Update button visual state
          activeButton.classList.add('active');
          filterStates.set(activeButton, currentSortDirection);

          // Update visual indicator in button text
          const baseText = activeButton.textContent.replace(/ [↑↓]$/, '');
          if (currentSortDirection === 'desc') {
            activeButton.textContent = baseText + ' ↓'; // Highest first
          } else if (currentSortDirection === 'asc') {
            activeButton.textContent = baseText + ' ↑'; // Lowest first
          }

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
    });
  }

  function cycleSortState(sortButton) {
    const currentState = filterStates.get(sortButton);
    let nextState;

    switch (currentState) {
      case 'normal':
        nextState = 'desc'; // First click = highest values (↓ arrow)
        break;
      case 'desc':
        nextState = 'asc'; // Second click = lowest values (↑ arrow)
        break;
      case 'asc':
        nextState = 'normal'; // Third click = back to normal
        break;
      default:
        nextState = 'normal';
    }

    // Reset all other sort buttons to normal
    sortButtons.forEach(btn => {
      if (btn !== sortButton) {
        btn.classList.remove('active');
        filterStates.set(btn, 'normal');
      }
    });

    // Update clicked button state
    if (nextState !== 'normal') {
      sortButton.classList.add('active');
      // Add visual indicator text to button
      const existingIndicator = sortButton.textContent.match(/ [↑↓]$/);
      const baseText = sortButton.textContent.replace(/ [↑↓]$/, '');
      if (nextState === 'desc') {
        sortButton.textContent = baseText + ' ↓'; // Highest first
      } else if (nextState === 'asc') {
        sortButton.textContent = baseText + ' ↑'; // Lowest first
      }
    } else {
      sortButton.classList.remove('active');
      // Remove visual indicator
      const baseText = sortButton.textContent.replace(/ [↑↓]$/, '');
      sortButton.textContent = baseText;
    }

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

  // Filter event listeners
  if (rarityFilter) {
    rarityFilter.addEventListener('change', applyFilters);
  }

  if (useabilityFilter) {
    useabilityFilter.addEventListener('change', applyFilters);
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

  // Mercenary card/row click navigation with touch optimization
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
