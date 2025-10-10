// Zone Nova Character Database Utilities
// Handles filtering, sorting, and interaction logic for the character database

export function initializeCharacterDatabase() {
  document.addEventListener('DOMContentLoaded', () => {
    // --- DOM references ---
    const tableBody = document.getElementById('character-table-body');
    const mobileCardsContainer = document.getElementById('mobile-cards-container');
    const elementFilter = document.getElementById('element-filter');
    const rarityFilter = document.getElementById('rarity-filter');
    const roleFilter = document.getElementById('role-filter');
    const classFilter = document.getElementById('class-filter');
    const factionFilter = document.getElementById('faction-filter');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const resetButton = document.getElementById('reset-table');

    // --- State ---
    let currentSortKey = 'name';
    let currentSortDirection = 'asc';
    const originalRows = Array.from(tableBody.children);
    const originalCards = Array.from(mobileCardsContainer.children);

    if (
      !tableBody ||
      !mobileCardsContainer ||
      !elementFilter ||
      !rarityFilter ||
      !roleFilter ||
      !classFilter ||
      !factionFilter ||
      !resetButton
    ) {
      return;
    }

    // --- Helpers ---
    function renumberRows() {
      let visibleIndex = 1;
      Array.from(tableBody.children).forEach(row => {
        if (row.style.display !== 'none') {
          row.querySelector('td').textContent = visibleIndex++;
        }
      });
    }

    function sortByName(items, isDesktop = true) {
      return items.sort((a, b) => {
        const nameA = isDesktop
          ? a.querySelector('td:nth-child(3)')?.textContent || ''
          : a.querySelector('h3')?.textContent || '';
        const nameB = isDesktop
          ? b.querySelector('td:nth-child(3)')?.textContent || ''
          : b.querySelector('h3')?.textContent || '';
        return nameA.localeCompare(nameB);
      });
    }

    function getMobileStatValue(card, sortKey) {
      const statMap = {
        hp: '.mobile-card-stats div:nth-child(1)',
        attack: '.mobile-card-stats div:nth-child(2)',
        defense: '.mobile-card-stats div:nth-child(3)',
        critRate: '.mobile-card-stats-secondary div:nth-child(1)',
      };

      if (sortKey === 'name') {
        return card.querySelector('h3')?.textContent || '';
      }

      const selector = statMap[sortKey];
      if (selector) {
        return card.querySelector(selector)?.textContent.replace(/[^\d.]/g, '') || '';
      }

      return card.querySelector(`.${sortKey}-badge`)?.textContent || '';
    }

    // --- Filtering ---
    function filterRows() {
      const element = elementFilter.value.trim();
      const rarity = rarityFilter.value.trim();
      const role = roleFilter.value.trim();
      const charClass = classFilter.value.trim();
      const faction = factionFilter.value.trim();

      // Save filter state to sessionStorage
      const filterState = {
        element: element || null,
        rarity: rarity || null,
        role: role || null,
        charClass: charClass || null,
        faction: faction || null,
      };

      // Only save non-empty filters
      const activeFilters = {};
      Object.keys(filterState).forEach(key => {
        if (filterState[key]) {
          activeFilters[key] = filterState[key];
        }
      });

      try {
        sessionStorage.setItem('zone-nova-character-filters', JSON.stringify(activeFilters));
        // Dispatch custom event to notify navigation
        try {
          if (typeof document !== 'undefined' && document.createEvent) {
            const event = document.createEvent('Event');
            event.initEvent('character-database-updated', true, true);
            document.dispatchEvent(event);
          }
        } catch (_error) {
          // Event dispatch failed
        }
      } catch (_error) {
        // Filter state save failed
      }

      const visibleRows = [];
      const visibleCards = [];

      // Filter table rows and mobile cards in parallel
      const tableRows = Array.from(tableBody.children);
      tableRows.forEach((row, index) => {
        const card = mobileCardsContainer.children[index];

        const elementText = row.querySelector('.element-badge')?.textContent?.trim() || '';
        const rarityText = row.querySelector('.rarity-badge')?.textContent?.trim() || '';
        const roleText = row.querySelector('.role-badge')?.textContent?.trim() || '';
        const classText = row.querySelector('.class-badge')?.textContent?.trim() || '';
        const factionText = row.querySelector('.faction-badge')?.textContent?.trim() || '';

        // Debug logging for class and faction filters
        if ((charClass || faction) && index === 0) {
          // Filter debug info available for debugging
        }

        const matches =
          (!element || elementText === element) &&
          (!rarity || rarityText === rarity) &&
          (!role || roleText === role) &&
          (!charClass || classText === charClass) &&
          (!faction || factionText === faction);

        row.style.display = matches ? '' : 'none';
        card.style.display = matches ? '' : 'none';

        if (matches) {
          visibleRows.push(row);
          visibleCards.push(card);
        }
      });

      // Apply current sorting to visible items
      if (currentSortKey) {
        // Use the current sort method instead of forcing alphabetical
        const sortedRows = [...visibleRows].sort((a, b) => {
          let valA, valB;
          if (currentSortKey === 'name') {
            valA = a.querySelector('td:nth-child(3)')?.textContent || '';
            valB = b.querySelector('td:nth-child(3)')?.textContent || '';
            return currentSortDirection === 'asc'
              ? valA.localeCompare(valB)
              : valB.localeCompare(valA);
          } else {
            valA = a.querySelector(`[data-sort-key="${currentSortKey}"]`)?.textContent || '';
            valB = b.querySelector(`[data-sort-key="${currentSortKey}"]`)?.textContent || '';
          }
          valA = isNaN(Number(valA)) ? valA : Number(valA);
          valB = isNaN(Number(valB)) ? valB : Number(valB);
          if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
          if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
          return 0;
        });
        sortedRows.forEach(row => tableBody.appendChild(row));

        const sortedCards = [...visibleCards].sort((a, b) => {
          let valA = getMobileStatValue(a, currentSortKey);
          let valB = getMobileStatValue(b, currentSortKey);
          if (currentSortKey === 'name') {
            return currentSortDirection === 'asc'
              ? valA.localeCompare(valB)
              : valB.localeCompare(valA);
          }
          valA = isNaN(Number(valA)) ? valA : Number(valA);
          valB = isNaN(Number(valB)) ? valB : Number(valB);
          if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
          if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
          return 0;
        });
        sortedCards.forEach(card => mobileCardsContainer.appendChild(card));
      } else {
        // Default to alphabetical sort when no sort key is set
        sortByName(visibleRows, true).forEach(row => tableBody.appendChild(row));
        sortByName(visibleCards, false).forEach(card => mobileCardsContainer.appendChild(card));
      }

      renumberRows();
    }

    // --- Sorting ---
    function sortRows(sortKey) {
      if (currentSortKey === sortKey) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        currentSortKey = sortKey;
        // For numeric columns (stats), default to descending (highest first)
        // For text columns, default to ascending (A-Z)
        const numericColumns = ['hp', 'attack', 'defense', 'critRate', 'critDmg', 'energyRecovery'];
        currentSortDirection = numericColumns.includes(sortKey) ? 'desc' : 'asc';
      }

      sortButtons.forEach(btn => btn.classList.remove('active', 'desc', 'asc'));
      const activeBtn = Array.from(sortButtons).find(btn => btn.dataset.sort === sortKey);
      if (activeBtn) {
        activeBtn.classList.add('active', currentSortDirection);
      }

      // Table rows
      const rows = Array.from(tableBody.children).filter(row => row.style.display !== 'none');
      rows.sort((a, b) => {
        let valA, valB;

        if (sortKey === 'name') {
          valA = a.querySelector('td:nth-child(3)')?.textContent || '';
          valB = b.querySelector('td:nth-child(3)')?.textContent || '';
          return currentSortDirection === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        } else {
          valA = a.querySelector(`[data-sort-key="${sortKey}"]`)?.textContent || '';
          valB = b.querySelector(`[data-sort-key="${sortKey}"]`)?.textContent || '';
        }

        // For numeric sorting, convert to numbers
        valA = isNaN(Number(valA)) ? valA : Number(valA);
        valB = isNaN(Number(valB)) ? valB : Number(valB);
        if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      rows.forEach(row => tableBody.appendChild(row));

      // Save sort state to sessionStorage
      try {
        sessionStorage.setItem(
          'zone-nova-character-sort',
          JSON.stringify({
            column: sortKey,
            asc: currentSortDirection === 'asc',
          })
        );
        // Dispatch custom event to notify navigation
        try {
          if (typeof document !== 'undefined' && document.createEvent) {
            const event = document.createEvent('Event');
            event.initEvent('character-database-updated', true, true);
            document.dispatchEvent(event);
          }
        } catch (_error) {
          // Event dispatch failed
        }
      } catch (_error) {
        // Sort state save failed
      }

      // Mobile cards
      const cards = Array.from(mobileCardsContainer.children).filter(
        card => card.style.display !== 'none'
      );
      cards.sort((a, b) => {
        let valA = getMobileStatValue(a, sortKey);
        let valB = getMobileStatValue(b, sortKey);

        if (sortKey === 'name') {
          return currentSortDirection === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }

        valA = isNaN(Number(valA)) ? valA : Number(valA);
        valB = isNaN(Number(valB)) ? valB : Number(valB);
        if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      cards.forEach(card => mobileCardsContainer.appendChild(card));
      renumberRows();
    }

    // --- Event listeners ---
    elementFilter.addEventListener('change', filterRows);
    rarityFilter.addEventListener('change', filterRows);
    roleFilter.addEventListener('change', filterRows);
    classFilter.addEventListener('change', filterRows);
    factionFilter.addEventListener('change', filterRows);

    sortButtons.forEach(button => {
      button.addEventListener('click', () => {
        sortRows(button.dataset.sort);
      });
    });

    resetButton.addEventListener('click', () => {
      elementFilter.value = '';
      rarityFilter.value = '';
      roleFilter.value = '';
      classFilter.value = '';
      factionFilter.value = '';
      sortButtons.forEach(btn => btn.classList.remove('active', 'desc', 'asc'));
      currentSortKey = 'name';
      currentSortDirection = 'asc';

      // Show all rows/cards first
      originalRows.forEach(row => {
        row.style.display = '';
        tableBody.appendChild(row);
      });
      originalCards.forEach(card => {
        card.style.display = '';
        mobileCardsContainer.appendChild(card);
      });

      // Sort alphabetically using helper function
      const allRows = Array.from(tableBody.children);
      const allCards = Array.from(mobileCardsContainer.children);

      sortByName(allRows, true).forEach(row => tableBody.appendChild(row));
      sortByName(allCards, false).forEach(card => mobileCardsContainer.appendChild(card));
      renumberRows();

      // Clear sessionStorage
      try {
        sessionStorage.removeItem('zone-nova-character-filters');
        sessionStorage.removeItem('zone-nova-character-sort');
      } catch (_error) {
        // SessionStorage clear failed
      }
    });

    // --- Click to detail ---
    Array.from(tableBody.children).forEach(row => {
      row.addEventListener('click', () => {
        const url = row.dataset.url;
        if (url) window.location.href = url;
      });
    });

    Array.from(mobileCardsContainer.children).forEach(card => {
      card.addEventListener('click', () => {
        const url = card.dataset.url;
        if (url) window.location.href = url;
      });
    });

    // Sort alphabetically by default on page load
    currentSortKey = 'name';
    currentSortDirection = 'asc';

    // Save default sort state to sessionStorage
    try {
      sessionStorage.setItem(
        'zone-nova-character-sort',
        JSON.stringify({
          column: 'name',
          asc: true,
        })
      );
    } catch (_error) {
      // Default sort state save failed
    }

    const allRows = Array.from(tableBody.children);
    const allCards = Array.from(mobileCardsContainer.children);

    // Sort alphabetically by default
    sortByName(allRows, true).forEach(row => tableBody.appendChild(row));
    sortByName(allCards, false).forEach(card => mobileCardsContainer.appendChild(card));

    renumberRows();
  });
}
