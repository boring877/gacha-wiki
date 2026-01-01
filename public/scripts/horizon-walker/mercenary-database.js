/**
 * ═══════════════════════════════════════════════════════════════════════
 *                HORIZON WALKER MERCENARY DATABASE SCRIPT
 *              Interactive functionality for mercenary database
 * ═══════════════════════════════════════════════════════════════════════
 */

class MercenaryDatabase {
  constructor() {
    this.mercenaries = [];
    this.filteredMercenaries = [];
    this.currentFilters = {
      search: '',
      rarity: 'all',
    };
    this.currentSort = {
      field: 'name',
      order: 'asc',
    };

    this.init();
  }

  init() {
    this.loadMercenaries();
    this.bindEvents();
    this.initializeFilters();
    this.applyFiltersAndSort();
  }

  loadMercenaries() {
    // Get mercenaries from the rendered DOM
    const mercenaryCards = document.querySelectorAll('.hw-mercenary-card');
    this.mercenaries = Array.from(mercenaryCards).map(card => ({
      element: card,
      name: card.querySelector('.hw-mercenary-name')?.textContent?.trim() || '',
      rarity: card.getAttribute('data-rarity') || '',
      cost: parseInt(card.getAttribute('data-cost') || '0'),
      tags: (card.getAttribute('data-tags') || '').split(',').filter(tag => tag.trim()),
    }));

    this.filteredMercenaries = [...this.mercenaries];
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('mercenary-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        this.currentFilters.search = e.target.value.toLowerCase();
        this.applyFiltersAndSort();
      });
    }

    // Filter buttons
    this.bindFilterButtons('.hw-rarity-btn', 'rarity');

    // Sort select
    const sortSelect = document.getElementById('mercenary-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        const [field, order] = e.target.value.split('-');
        this.currentSort = { field, order };
        this.applyFiltersAndSort();
      });
    }

    // Clear filters button
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }
  }

  bindFilterButtons(selector, filterType) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from siblings
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Update filter
        this.currentFilters[filterType] = button.getAttribute('data-' + filterType) || 'all';
        this.applyFiltersAndSort();
      });
    });
  }

  initializeFilters() {
    // Set initial active states
    document.querySelector('[data-rarity="all"]')?.classList.add('active');
  }

  applyFiltersAndSort() {
    // Apply filters
    this.filteredMercenaries = this.mercenaries.filter(mercenary => {
      // Search filter
      if (this.currentFilters.search) {
        const searchTerm = this.currentFilters.search;
        const searchableText = [mercenary.name, mercenary.rarity, ...mercenary.tags]
          .join(' ')
          .toLowerCase();

        if (!searchableText.includes(searchTerm)) {
          return false;
        }
      }

      // Rarity filter
      if (this.currentFilters.rarity !== 'all' && mercenary.rarity !== this.currentFilters.rarity) {
        return false;
      }

      // Additional filters removed since fields were cleaned up

      return true;
    });

    // Apply sorting
    this.filteredMercenaries.sort((a, b) => {
      let aValue, bValue;

      switch (this.currentSort.field) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'rarity': {
          // Custom rarity order: EX > SS > S > A > B
          const rarityOrder = { EX: 5, SS: 4, S: 3, A: 2, B: 1 };
          aValue = rarityOrder[a.rarity] || 0;
          bValue = rarityOrder[b.rarity] || 0;
          break;
        }
        case 'cost':
          aValue = a.cost;
          bValue = b.cost;
          break;
        // Removed sort cases for fields that no longer exist
        default:
          aValue = a.name;
          bValue = b.name;
      }

      // Compare values
      if (typeof aValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return this.currentSort.order === 'asc' ? comparison : -comparison;
      } else {
        const comparison = aValue - bValue;
        return this.currentSort.order === 'asc' ? comparison : -comparison;
      }
    });

    this.updateDisplay();
    this.updateStats();
  }

  updateDisplay() {
    const container = document.getElementById('mercenary-grid');
    if (!container) return;

    // Hide all mercenaries
    this.mercenaries.forEach(mercenary => {
      mercenary.element.style.display = 'none';
    });

    // Show filtered mercenaries
    this.filteredMercenaries.forEach(mercenary => {
      mercenary.element.style.display = 'block';
    });

    // Update results count
    this.updateResultsCount();

    // Show/hide no results message
    this.toggleNoResultsMessage();
  }

  updateResultsCount() {
    const countElement = document.getElementById('results-count');
    if (countElement) {
      const total = this.mercenaries.length;
      const filtered = this.filteredMercenaries.length;
      countElement.textContent = `Showing ${filtered} of ${total} mercenaries`;
    }
  }

  toggleNoResultsMessage() {
    const noResultsElement = document.getElementById('no-results');
    if (noResultsElement) {
      if (this.filteredMercenaries.length === 0) {
        noResultsElement.style.display = 'block';
      } else {
        noResultsElement.style.display = 'none';
      }
    }
  }

  updateStats() {
    // Update filter counts if elements exist
    const stats = this.calculateStats();

    Object.entries(stats).forEach(([category, counts]) => {
      Object.entries(counts).forEach(([key, count]) => {
        const element = document.querySelector(`[data-stat="${category}-${key}"]`);
        if (element) {
          element.textContent = count;
        }
      });
    });
  }

  calculateStats() {
    const stats = {
      rarity: {},
      class: {},
      element: {},
      faction: {},
      useability: {},
    };

    this.filteredMercenaries.forEach(mercenary => {
      // Count by rarity
      stats.rarity[mercenary.rarity] = (stats.rarity[mercenary.rarity] || 0) + 1;

      // Count by class
      stats.class[mercenary.class] = (stats.class[mercenary.class] || 0) + 1;

      // Count by element
      stats.element[mercenary.element] = (stats.element[mercenary.element] || 0) + 1;

      // Count by faction
      stats.faction[mercenary.faction] = (stats.faction[mercenary.faction] || 0) + 1;

      // Count by useability
      stats.useability[mercenary.useability] = (stats.useability[mercenary.useability] || 0) + 1;
    });

    return stats;
  }

  clearAllFilters() {
    // Reset filters
    this.currentFilters = {
      search: '',
      rarity: 'all',
      class: 'all',
      element: 'all',
      faction: 'all',
      useability: 'all',
    };

    // Reset sort
    this.currentSort = {
      field: 'name',
      order: 'asc',
    };

    // Update UI
    const searchInput = document.getElementById('mercenary-search');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('mercenary-sort');
    if (sortSelect) sortSelect.value = 'name-asc';

    // Reset all filter buttons
    document.querySelectorAll('.hw-filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Activate "all" buttons
    document
      .querySelectorAll(
        '[data-rarity="all"], [data-class="all"], [data-element="all"], [data-faction="all"], [data-useability="all"]'
      )
      .forEach(btn => {
        btn.classList.add('active');
      });

    // Reapply filters
    this.applyFiltersAndSort();
  }

  // Export functionality for external use
  exportFilteredData() {
    return this.filteredMercenaries.map(mercenary => ({
      name: mercenary.name,
      rarity: mercenary.rarity,
      class: mercenary.class,
      element: mercenary.element,
      faction: mercenary.faction,
      useability: mercenary.useability,
      cost: mercenary.cost,
      tags: mercenary.tags,
    }));
  }

  // Get current filter state
  getCurrentFilters() {
    return { ...this.currentFilters };
  }

  // Get current sort state
  getCurrentSort() {
    return { ...this.currentSort };
  }
}

// Utility functions for external use
window.MercenaryUtils = {
  // Format rarity for display
  formatRarity: rarity => {
    const rarityMap = {
      EX: 'EX',
      SS: 'SS',
      S: 'S',
      A: 'A',
      B: 'B',
    };
    return rarityMap[rarity] || rarity;
  },

  // Get rarity color
  getRarityColor: rarity => {
    const colorMap = {
      EX: '#ff6b6b',
      SS: '#ffd93d',
      S: '#6bcf7f',
      A: '#4dabf7',
      B: '#dee2e6',
    };
    return colorMap[rarity] || '#dee2e6';
  },

  // Format cost display
  formatCost: cost => {
    return `${cost} Cost`;
  },

  // Get element icon
  getElementIcon: element => {
    const iconMap = {
      Physical: '⚔️',
      Magic: '✨',
      Fire: '🔥',
      Ice: '❄️',
      Lightning: '⚡',
      Dark: '🌑',
      Light: '☀️',
    };
    return iconMap[element] || '❓';
  },
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if we're on the mercenary database page
  if (document.getElementById('mercenary-grid')) {
    window.mercenaryDatabase = new MercenaryDatabase();
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
});

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  if (window.mercenaryDatabase) {
    window.mercenaryDatabase.applyFiltersAndSort();
  }
});

// Export for external use
window.MercenaryDatabase = MercenaryDatabase;
