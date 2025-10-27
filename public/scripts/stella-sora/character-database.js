// Stella Sora Character Database Script
// Handles sorting and filtering functionality for the character database

document.addEventListener('DOMContentLoaded', function () {
  // Get DOM elements
  const tableBody = document.getElementById('character-table-body');
  const mobileCardsContainer = document.getElementById('character-cards');
  const searchInput = document.getElementById('search-input');
  const resetBtn = document.getElementById('reset-filters');
  const filterSelects = {
    rarity: document.getElementById('rarity-filter'),
    element: document.getElementById('element-filter'),
    role: document.getElementById('role-filter'),
  };
  const sortBtns = document.querySelectorAll('.sort-btn');

  // State management
  let currentSort = { field: null, direction: 'asc' };
  let allCharacters = [];
  let filteredCharacters = [];

  // Initialize
  if (!tableBody) {
    console.error('Character table body not found');
    return;
  }

  // Initialize data
  allCharacters = Array.from(tableBody.querySelectorAll('tr'));
  filteredCharacters = [...allCharacters];

  initializeFilters();
  initializeSorting();

  function initializeFilters() {
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        applyFilters();
      });
    }

    // Filter dropdowns
    Object.keys(filterSelects).forEach(filterType => {
      const select = filterSelects[filterType];
      if (select) {
        select.addEventListener('change', function () {
          applyFilters();
        });
      }
    });

    // Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        resetFilters();
      });
    }
  }

  function initializeSorting() {
    sortBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const sortField = this.dataset.sort;
        handleSort(sortField);
      });
    });
  }

  function applyFilters() {
    const filters = {
      search: searchInput ? searchInput.value.toLowerCase().trim() : '',
      rarity: filterSelects.rarity ? filterSelects.rarity.value : '',
      element: filterSelects.element ? filterSelects.element.value : '',
      role: filterSelects.role ? filterSelects.role.value : '',
    };

    // Filter table rows
    filteredCharacters = allCharacters.filter(row => {
      const characterName = row.querySelector('.character-name')?.textContent.toLowerCase() || '';
      const tags = row.dataset.tags ? row.dataset.tags.toLowerCase() : '';
      const rarity = row.querySelector('.rarity-badge')?.textContent || '';
      const role = row.querySelector('.role-badge')?.textContent || '';

      // Get element from image alt text (since elements are rendered as images)
      const elementImg = row.querySelector('.element-icon-container img');
      const element = elementImg ? elementImg.alt : '';

      // Apply search filter
      if (
        filters.search &&
        !characterName.includes(filters.search) &&
        !tags.includes(filters.search)
      ) {
        return false;
      }

      // Apply rarity filter
      if (filters.rarity && rarity !== filters.rarity) {
        return false;
      }

      // Apply element filter
      if (filters.element && element !== filters.element) {
        return false;
      }

      // Apply role filter
      if (filters.role && role !== filters.role) {
        return false;
      }

      return true;
    });

    // Filter mobile cards
    if (mobileCardsContainer) {
      const allCards = Array.from(mobileCardsContainer.querySelectorAll('.character-card'));
      allCards.forEach(card => {
        const characterName =
          card.querySelector('.character-name')?.textContent.toLowerCase() || '';
        const tags = card.dataset.tags ? card.dataset.tags.toLowerCase() : '';
        const rarity = card.querySelector('.rarity-badge')?.textContent || '';
        const element = card.querySelector('.element-badge')?.textContent || '';
        const role = card.querySelector('.role-text')?.textContent || '';

        let shouldShow = true;

        // Apply search filter
        if (
          filters.search &&
          !characterName.includes(filters.search) &&
          !tags.includes(filters.search)
        ) {
          shouldShow = false;
        }

        // Apply rarity filter
        if (shouldShow && filters.rarity && rarity !== filters.rarity) {
          shouldShow = false;
        }

        // Apply element filter
        if (shouldShow && filters.element && element !== filters.element) {
          shouldShow = false;
        }

        // Apply role filter
        if (shouldShow && filters.role && role !== filters.role) {
          shouldShow = false;
        }

        card.style.display = shouldShow ? 'block' : 'none';
      });
    }

    // Apply current sort
    applyCurrentSort();
  }

  function handleSort(field) {
    // Update button states
    sortBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    const clickedBtn = document.querySelector(`[data-sort="${field}"]`);
    if (clickedBtn) {
      clickedBtn.classList.add('active');
    }

    // Update sort direction
    if (currentSort.field === field) {
      currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      currentSort.field = field;
      currentSort.direction = 'asc';
    }

    applyCurrentSort();
  }

  function applyCurrentSort() {
    if (!currentSort.field) return;

    filteredCharacters.sort((a, b) => {
      let aValue, bValue;

      switch (currentSort.field) {
        case 'name':
          aValue = a.querySelector('.character-name')?.textContent || '';
          bValue = b.querySelector('.character-name')?.textContent || '';
          break;
        case 'rarity':
          aValue = a.querySelector('.rarity-badge')?.textContent || '';
          bValue = b.querySelector('.rarity-badge')?.textContent || '';
          break;
        case 'hp':
        case 'attack':
        case 'defense':
        case 'critRate':
        case 'critDmg':
          aValue =
            a.querySelector(`td[data-sort-value="${currentSort.field}"]`)?.dataset.sortValue || '0';
          bValue =
            b.querySelector(`td[data-sort-value="${currentSort.field}"]`)?.dataset.sortValue || '0';
          aValue = parseFloat(aValue);
          bValue = parseFloat(bValue);
          break;
        default:
          return 0;
      }

      let comparison = 0;
      if (typeof aValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else {
        comparison = aValue - bValue;
      }

      return currentSort.direction === 'asc' ? comparison : -comparison;
    });

    // Re-render table
    renderTable();
  }

  function renderTable() {
    // Clear current table body
    tableBody.innerHTML = '';

    // Add filtered and sorted rows
    filteredCharacters.forEach(row => {
      tableBody.appendChild(row);
    });
  }

  function resetFilters() {
    // Reset search input
    if (searchInput) {
      searchInput.value = '';
    }

    // Reset filter dropdowns
    Object.values(filterSelects).forEach(select => {
      if (select) {
        select.selectedIndex = 0;
      }
    });

    // Reset sort
    currentSort = { field: null, direction: 'asc' };
    sortBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    // Reset to all characters
    filteredCharacters = [...allCharacters];
    renderTable();

    // Reset mobile cards
    if (mobileCardsContainer) {
      const allCards = Array.from(mobileCardsContainer.querySelectorAll('.character-card'));
      allCards.forEach(card => {
        card.style.display = 'block';
      });
    }
  }

  // Initial render
  renderTable();
});
