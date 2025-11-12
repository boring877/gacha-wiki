/**
 * Zone Nova Character Rankings - Optimized Implementation
 * Handles instant filtering/sorting with pre-rendered server-side views
 */

class ZoneNovaRankingsManagerOptimized {
  constructor(data) {
    // Data
    this.characters = data.characters;
    this.rankings = data.rankings;
    this.overallAnalysis = data.overallAnalysis;
    this.statNames = data.statNames;
    this.totalCharacters = data.totalCharacters;

    // State
    this.currentView = 'view-all';
    this.selectedCharacter = null;

    // Cached DOM elements
    this.elements = {};

    this.init();
  }

  init() {
    try {
      this.cacheElements();
      this.setupEventListeners();
    } catch (error) {
      console.error('Error initializing rankings manager:', error);
    }
  }

  /**
   * Cache all DOM elements to avoid repeated queries
   */
  cacheElements() {
    // Character cards (from current visible view)
    this.updateCharacterCards();

    // Filters
    this.elements.roleFilter = document.getElementById('role-filter');
    this.elements.classFilter = document.getElementById('class-filter');
    this.elements.rarityFilter = document.getElementById('rarity-filter');
    this.elements.elementFilter = document.getElementById('element-filter');

    // Controls
    this.elements.resetBtn = document.getElementById('clear-filters');
    this.elements.sortButtons = document.querySelectorAll('.sort-btn');

    // Rankings display
    this.elements.rankingsDisplay = document.getElementById('rankings-display');
    this.elements.characterImage = document.getElementById('character-image');
    this.elements.characterName = document.getElementById('character-name');
    this.elements.characterClass = document.getElementById('character-class');
    this.elements.characterAnalysis = document.getElementById('character-analysis');
    this.elements.critCard = document.getElementById('crit-rate-card');

    // Analysis elements
    this.elements.overallRank = document.getElementById('overall-rank');
    this.elements.top3Count = document.getElementById('top3-count');
    this.elements.top3Stats = document.getElementById('top3-stats');
    this.elements.top10Count = document.getElementById('top10-count');
    this.elements.top10Stats = document.getElementById('top10-stats');
  }

  /**
   * Update character cards reference when switching views
   */
  updateCharacterCards() {
    const activeView = document.querySelector('.character-view:not(.hidden)');
    this.elements.characterCards = activeView
      ? activeView.querySelectorAll('.character-select-card')
      : [];

    // Re-attach character card listeners for the new view
    this.attachCharacterCardListeners();
  }

  /**
   * Attach event listeners to character cards in the current view
   */
  attachCharacterCardListeners() {
    // Remove existing listeners by cloning and replacing
    this.elements.characterCards.forEach(card => {
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
    });

    // Get fresh reference to the new cards
    const activeView = document.querySelector('.character-view:not(.hidden)');
    const freshCards = activeView ? activeView.querySelectorAll('.character-select-card') : [];

    // Add click listeners to fresh cards
    freshCards.forEach(card => {
      card.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        try {
          this.handleCharacterSelection(card);
        } catch (error) {
          console.error('Error handling character selection:', error);
        }
      });

      // Add keyboard support
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          try {
            this.handleCharacterSelection(card);
          } catch (error) {
            console.error('Error handling keyboard selection:', error);
          }
        }
      });
    });

    // Update the cached reference
    this.elements.characterCards = freshCards;
  }

  setupEventListeners() {
    // Filter event listeners
    const filterElements = [
      this.elements.roleFilter,
      this.elements.classFilter,
      this.elements.rarityFilter,
      this.elements.elementFilter,
    ];

    filterElements.forEach(filter => {
      if (filter) {
        filter.addEventListener('change', () => {
          try {
            this.handleFilterChange();
          } catch (error) {
            console.error('Error handling filter change:', error);
          }
        });
      }
    });

    // Sort button listeners
    this.elements.sortButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          this.handleSortClick(btn);
        } catch (error) {
          console.error('Error handling sort click:', error);
        }
      });
    });

    // Reset button
    if (this.elements.resetBtn) {
      this.elements.resetBtn.addEventListener('click', () => {
        try {
          this.resetFilters();
        } catch (error) {
          console.error('Error resetting filters:', error);
        }
      });
    }

    // Character card listeners (delegated to handle dynamic content)
    document.addEventListener('click', e => {
      try {
        if (e.target.closest('.character-select-card')) {
          this.handleCharacterSelection(e.target.closest('.character-select-card'));
        }
      } catch (error) {
        console.error('Error handling character selection:', error);
      }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', e => {
      try {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.character-select-card')) {
          e.preventDefault();
          this.handleCharacterSelection(e.target.closest('.character-select-card'));
        }
      } catch (error) {
        console.error('Error handling keyboard navigation:', error);
      }
    });
  }

  /**
   * Handle filter changes - INSTANT switching between pre-rendered views
   */
  handleFilterChange() {
    const filters = {
      role: this.elements.roleFilter?.value.toLowerCase() || '',
      class: this.elements.classFilter?.value.toLowerCase() || '',
      rarity: this.elements.rarityFilter?.value.toLowerCase() || '',
      element: this.elements.elementFilter?.value.toLowerCase() || '',
    };

    // Determine which view to show based on active filters
    const targetViewId = this.getTargetViewId(filters);

    if (targetViewId && targetViewId !== this.currentView) {
      this.switchView(targetViewId);
    }
  }

  /**
   * Determine target view ID based on current filters
   */
  getTargetViewId(filters) {
    // Priority: role > class > rarity > element
    if (filters.role) return `view-${filters.role}`;
    if (filters.class) return `view-${filters.class}`;
    if (filters.rarity) return `view-${filters.rarity}`;
    if (filters.element) return `view-${filters.element}`;

    return 'view-all'; // Default view
  }

  /**
   * Switch between pre-rendered views - INSTANT!
   */
  switchView(viewId) {
    // Hide current view
    const currentViewElement = document.getElementById(this.currentView);
    if (currentViewElement) {
      currentViewElement.classList.add('hidden');
    }

    // Show new view
    const targetViewElement = document.getElementById(viewId);
    if (targetViewElement) {
      targetViewElement.classList.remove('hidden');
    }

    // Update current view reference
    this.currentView = viewId;

    // Update character cards reference for the new view
    this.updateCharacterCards();

    // Clear sort button states
    this.elements.sortButtons.forEach(btn => btn.classList.remove('active'));
  }

  /**
   * Handle sort clicks - INSTANT switching to pre-sorted views
   */
  handleSortClick(button) {
    const column = button.dataset.sort;
    if (!column) return;

    // Determine sort direction (toggle on each click)
    const currentSortState = this.getSortState(column);
    const newDirection = currentSortState === 'desc' ? 'asc' : 'desc';

    const viewId = `sort-${column}-${newDirection}`;

    if (document.getElementById(viewId)) {
      // Hide current view
      const currentViewElement = document.getElementById(this.currentView);
      if (currentViewElement) {
        currentViewElement.classList.add('hidden');
      }

      // Show sorted view
      const targetViewElement = document.getElementById(viewId);
      if (targetViewElement) {
        targetViewElement.classList.remove('hidden');
      }

      // Update current view
      this.currentView = viewId;

      // Update character cards reference
      this.updateCharacterCards();

      // Update button states
      this.elements.sortButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Store sort state
      this.setSortState(column, newDirection);
    }
  }

  /**
   * Get current sort state for a column
   */
  getSortState(column) {
    return localStorage.getItem(`zn-rankings-sort-${column}`) || 'desc';
  }

  /**
   * Store sort state for a column
   */
  setSortState(column, direction) {
    localStorage.setItem(`zn-rankings-sort-${column}`, direction);
  }

  /**
   * Reset all filters - return to default view
   */
  resetFilters() {
    // Clear filter values
    [
      this.elements.roleFilter,
      this.elements.classFilter,
      this.elements.rarityFilter,
      this.elements.elementFilter,
    ].forEach(filter => {
      if (filter) filter.value = '';
    });

    // Clear sort states
    this.elements.sortButtons.forEach(btn => btn.classList.remove('active'));

    // Return to default view
    this.switchView('view-all');
  }

  /**
   * Handle character selection - DYNAMIC FEATURE PRESERVED
   */
  handleCharacterSelection(card) {
    const characterId = parseInt(card.dataset.characterId || '0');
    if (!characterId) return;

    // Update selection state
    this.elements.characterCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');

    const character = this.characters.find(c => c.id === characterId);
    if (!character) return;

    this.selectedCharacter = character;
    this.updateCharacterDisplay(character);
    this.updateRankingsDisplay(characterId);
    this.updateCharacterAnalysis(characterId);

    // Show rankings display and scroll
    this.elements.rankingsDisplay.classList.add('active');
    setTimeout(() => {
      this.elements.rankingsDisplay.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  }

  /**
   * Update character display - DYNAMIC FEATURE PRESERVED
   */
  updateCharacterDisplay(character) {
    if (this.elements.characterImage) {
      this.elements.characterImage.src = character.image;
      this.elements.characterImage.alt = character.name;
    }

    if (this.elements.characterName) {
      this.elements.characterName.textContent = character.name;
    }

    if (this.elements.characterClass) {
      this.elements.characterClass.textContent = `${character.rarity} • Role: ${character.role} • Class: ${character.class} • ${character.element}`;
    }
  }

  /**
   * Update rankings display - DYNAMIC FEATURE PRESERVED
   */
  updateRankingsDisplay(characterId) {
    Object.keys(this.statNames).forEach(statKey => {
      const rank = this.rankings[statKey][characterId];
      const statValue = this.characters.find(c => c.id === characterId)?.stats[statKey];

      // Special handling for crit rate
      if (statKey === 'critRate') {
        const critVal = this.parseStatValue(statValue);

        if (critVal > 0) {
          this.elements.critCard?.classList.remove('hidden');
          const statValueDisplay = document.querySelector(`.stat-${statKey}`);
          if (statValueDisplay) {
            statValueDisplay.textContent =
              typeof statValue === 'string' ? statValue : `${statValue}%`;
          }
        } else {
          this.elements.critCard?.classList.add('hidden');
        }
        return;
      }

      const rankDisplay = document.querySelector(`.rank-${statKey}`);
      const rankTotal = document.querySelector(`.rank-${statKey}-total`);
      const statValueDisplay = document.querySelector(`.stat-${statKey}`);

      if (rankDisplay && rankTotal && statValueDisplay && statValue !== undefined) {
        rankDisplay.textContent = rank ? `#${rank}` : 'N/A';
        rankTotal.textContent = `out of ${this.totalCharacters}`;

        // Format stat value
        statValueDisplay.textContent =
          typeof statValue === 'string' ? statValue : statValue.toLocaleString();

        // Apply rank styling
        this.applyRankStyling(rankDisplay, rank);
      }
    });
  }

  /**
   * Update character analysis - DYNAMIC FEATURE PRESERVED
   */
  updateCharacterAnalysis(characterId) {
    const analysis = this.overallAnalysis[characterId];
    if (!analysis) return;

    // Update overall rank
    if (this.elements.overallRank) {
      this.elements.overallRank.textContent = `#${analysis.overallRank}`;
    }

    // Calculate top stats
    const coreStats = ['hp', 'attack', 'defense'];
    const top3Stats = [];
    const top10Stats = [];

    coreStats.forEach(statKey => {
      const rank = this.rankings[statKey][characterId];
      if (rank <= 3) top3Stats.push(this.statNames[statKey]);
      if (rank <= 10) top10Stats.push(this.statNames[statKey]);
    });

    // Update counts and badges
    this.updateStatBadges(top3Stats, top10Stats);

    if (this.elements.characterAnalysis) {
      this.elements.characterAnalysis.classList.remove('hidden');
    }
  }

  /**
   * Update stat badges - DYNAMIC FEATURE PRESERVED
   */
  updateStatBadges(top3Stats, top10Stats) {
    // Top 3 stats
    if (this.elements.top3Count) {
      this.elements.top3Count.textContent = `${top3Stats.length}/3`;
    }

    if (this.elements.top3Stats) {
      this.elements.top3Stats.replaceChildren();

      if (top3Stats.length > 0) {
        top3Stats.forEach(stat => {
          const span = document.createElement('span');
          span.className = 'stat-badge top3-badge';
          span.textContent = stat;
          this.elements.top3Stats.appendChild(span);
        });
      } else {
        const span = document.createElement('span');
        span.className = 'no-stats';
        span.textContent = 'None';
        this.elements.top3Stats.appendChild(span);
      }
    }

    // Top 10 stats
    if (this.elements.top10Count) {
      this.elements.top10Count.textContent = `${top10Stats.length}/3`;
    }

    if (this.elements.top10Stats) {
      this.elements.top10Stats.replaceChildren();

      if (top10Stats.length > 0) {
        top10Stats.forEach(stat => {
          const span = document.createElement('span');
          span.className = 'stat-badge top10-badge';
          span.textContent = stat;
          this.elements.top10Stats.appendChild(span);
        });
      } else {
        const span = document.createElement('span');
        span.className = 'no-stats';
        span.textContent = 'None';
        this.elements.top10Stats.appendChild(span);
      }
    }
  }

  /**
   * Apply rank styling - DYNAMIC FEATURE PRESERVED
   */
  applyRankStyling(element, rank) {
    // Remove existing rank classes
    element.className = element.className.replace(/rank-(top3|top10|other)/g, '');

    // Add appropriate rank class
    if (rank <= 3) {
      element.classList.add('rank-top3');
    } else if (rank <= 10) {
      element.classList.add('rank-top10');
    } else {
      element.classList.add('rank-other');
    }
  }

  /**
   * Helper function to parse stat values - DYNAMIC FEATURE PRESERVED
   */
  parseStatValue(value) {
    return typeof value === 'string' ? parseFloat(value.replace(/[,%]/g, '')) || 0 : value || 0;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Validate required data exists
    if (!window.zoneNovaRankingsData) {
      throw new Error('zoneNovaRankingsData not found. Please check data loading.');
    }

    const data = window.zoneNovaRankingsData;

    // Validate data structure
    const requiredProperties = [
      'characters',
      'rankings',
      'overallAnalysis',
      'statNames',
      'totalCharacters',
    ];
    const missingProperties = requiredProperties.filter(prop => !data[prop]);

    if (missingProperties.length > 0) {
      throw new Error(`Missing required data properties: ${missingProperties.join(', ')}`);
    }

    // Validate data content
    if (!Array.isArray(data.characters) || data.characters.length === 0) {
      throw new Error('No characters data available');
    }

    if (typeof data.totalCharacters !== 'number' || data.totalCharacters <= 0) {
      throw new Error('Invalid totalCharacters value');
    }

    // Initialize optimized rankings manager
    const rankingsManager = new ZoneNovaRankingsManagerOptimized(data);

    // Store reference globally for debugging
    window.rankingsManager = rankingsManager;
  } catch (error) {
    console.error('❌ Error initializing rankings:', error);

    // Show user-friendly error message
    const errorContainer = document.querySelector('.character-views-container');
    if (errorContainer) {
      errorContainer.innerHTML = `
        <div class="rankings-error-container">
          <h3 class="rankings-error-title">Failed to Load Character Rankings</h3>
          <p class="rankings-error-message">We're experiencing technical difficulties loading the character data.</p>
          <p class="rankings-error-details">
            Please try refreshing the page. If the problem persists, contact support.
          </p>
        </div>
      `;
    }
  }
});

// Export for potential external use
window.ZoneNovaRankingsManagerOptimized = ZoneNovaRankingsManagerOptimized;
