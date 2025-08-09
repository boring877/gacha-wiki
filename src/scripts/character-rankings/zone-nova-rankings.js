/**
 * Zone Nova Character Rankings - Optimized Implementation
 * Handles filtering, sorting, and dynamic ranking updates with performance optimization
 */

class ZoneNovaRankingsManager {
  constructor(data) {
    // Data
    this.characters = data.characters;
    this.rankings = data.rankings;
    this.overallAnalysis = data.overallAnalysis;
    this.statNames = data.statNames;
    this.totalCharacters = data.totalCharacters;

    // State
    this.sortState = { column: null, asc: false };

    // Cached DOM elements - performance optimization
    this.elements = {};

    this.init();
  }

  init() {
    try {
      this.cacheElements();
      this.setupEventListeners();
    } catch (error) {
      console.error('Failed to initialize Zone Nova rankings manager:', error);
    }
  }

  /**
   * Cache all DOM elements to avoid repeated queries
   */
  cacheElements() {
    // Character cards and containers
    this.elements.characterCards = document.querySelectorAll('.character-select-card');
    this.elements.characterGrid = document.getElementById('character-grid');

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

    // Cache ranking number elements for performance
    this.elements.rankingNumbers = new Map();
    this.elements.characterCards.forEach(card => {
      const rankingElement = card.querySelector('.character-rank-number');
      if (rankingElement) {
        this.elements.rankingNumbers.set(card, rankingElement);
      }
    });
  }

  setupEventListeners() {
    // Filter event listeners with error handling
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
            this.filterCharacters();
          } catch (error) {
            console.error('Filter error:', error);
          }
        });
      }
    });

    // Sort button listeners
    this.elements.sortButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          const col = btn.dataset.sort;
          this.handleSort(col, btn);
        } catch (error) {
          console.error('Sort error:', error);
        }
      });
    });

    // Reset button
    if (this.elements.resetBtn) {
      this.elements.resetBtn.addEventListener('click', () => {
        try {
          this.resetFilters();
        } catch (error) {
          console.error('Reset error:', error);
        }
      });
    }

    // Character card listeners
    this.elements.characterCards.forEach(card => {
      // Click event
      card.addEventListener('click', () => {
        try {
          this.handleCharacterSelection(card);
        } catch (error) {
          console.error('Character selection error:', error);
        }
      });

      // Keyboard navigation support
      card.addEventListener('keydown', e => {
        try {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleCharacterSelection(card);
          }
        } catch (error) {
          console.error('Keyboard navigation error:', error);
        }
      });
    });
  }

  /**
   * Helper function to parse stat values (client-side)
   */
  parseStatValue(value) {
    return typeof value === 'string' ? parseFloat(value.replace(/[,%]/g, '')) || 0 : value || 0;
  }

  /**
   * Update dynamic ranking numbers with batched DOM operations
   */
  updateRankingNumbers() {
    const visibleCards = Array.from(this.elements.characterGrid.children).filter(
      card => card.style.display !== 'none'
    );

    // Batch DOM updates for better performance
    let visibleRank = 1;
    const updates = [];

    visibleCards.forEach(card => {
      const rankingElement = this.elements.rankingNumbers.get(card);
      if (rankingElement) {
        updates.push({ element: rankingElement, rank: visibleRank });
        visibleRank++;
      }
    });

    // Apply all updates at once
    updates.forEach(({ element, rank }) => {
      element.textContent = rank;
    });
  }

  filterCharacters() {
    const filters = {
      role: this.elements.roleFilter?.value.toLowerCase() || '',
      class: this.elements.classFilter?.value.toLowerCase() || '',
      rarity: this.elements.rarityFilter?.value.toLowerCase() || '',
      element: this.elements.elementFilter?.value.toLowerCase() || '',
    };

    this.elements.characterCards.forEach(card => {
      const characterId = parseInt(card.dataset.characterId || '0');
      const character = this.characters.find(c => c.id === characterId);
      if (!character) return;

      const matches = this.checkFilters(character, filters);
      card.style.display = matches ? 'flex' : 'none';
    });

    this.updateRankingNumbers();
  }

  checkFilters(character, filters) {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      const characterValue = character[key]?.toLowerCase();
      return characterValue === value;
    });
  }

  handleSort(column, button) {
    const numericColumns = ['hp', 'attack', 'defense', 'critRate', 'speed', 'rank', 'rarity'];
    const defaultAsc = !numericColumns.includes(column);

    this.sortState.asc = this.sortState.column === column ? !this.sortState.asc : defaultAsc;
    this.sortState.column = column;

    // Update button states
    this.elements.sortButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    this.sortCharacters(column);
  }

  sortCharacters(column) {
    const cards = Array.from(this.elements.characterCards);
    const multiplier = this.sortState.asc ? 1 : -1;

    cards.sort((a, b) => {
      const aChar = this.characters.find(c => c.id === parseInt(a.dataset.characterId || '0'));
      const bChar = this.characters.find(c => c.id === parseInt(b.dataset.characterId || '0'));

      if (!aChar || !bChar) return 0;

      const aValue = this.parseStatValue(aChar.stats[column]);
      const bValue = this.parseStatValue(bChar.stats[column]);

      return (aValue - bValue) * multiplier;
    });

    // Batch DOM updates
    const fragment = document.createDocumentFragment();
    cards.forEach(card => fragment.appendChild(card));
    this.elements.characterGrid.appendChild(fragment);

    this.updateRankingNumbers();
  }

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

    // Show all cards
    this.elements.characterCards.forEach(card => {
      card.style.display = 'flex';
    });

    // Clear sort state
    this.elements.sortButtons.forEach(b => b.classList.remove('active'));
    this.sortState = { column: null, asc: false };

    // Restore original ranking order
    this.restoreOriginalOrder();
  }

  restoreOriginalOrder() {
    const cards = Array.from(this.elements.characterCards);

    cards.sort((a, b) => {
      const aId = parseInt(a.dataset.characterId || '0');
      const bId = parseInt(b.dataset.characterId || '0');
      const aRank = this.overallAnalysis[aId]?.overallRank || 999;
      const bRank = this.overallAnalysis[bId]?.overallRank || 999;
      return aRank - bRank;
    });

    // Batch DOM operations
    const fragment = document.createDocumentFragment();
    cards.forEach(card => fragment.appendChild(card));
    this.elements.characterGrid.appendChild(fragment);

    // Restore original ranking numbers
    cards.forEach(card => {
      const characterId = parseInt(card.dataset.characterId || '0');
      const rankingElement = this.elements.rankingNumbers.get(card);
      if (rankingElement && this.overallAnalysis[characterId]) {
        rankingElement.textContent = this.overallAnalysis[characterId].overallRank;
      }
    });
  }

  handleCharacterSelection(card) {
    const characterId = parseInt(card.dataset.characterId || '0');
    if (!characterId) return;

    // Update selection state
    this.elements.characterCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');

    const character = this.characters.find(c => c.id === characterId);
    if (!character) return;

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

  updateRankingsDisplay(characterId) {
    Object.keys(this.statNames).forEach(statKey => {
      const rank = this.rankings[statKey][characterId];
      const statValue = this.characters.find(c => c.id === characterId)?.stats[statKey];

      // Special handling for crit rate - only show if > 0%
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

  applyRankStyling(element, rank) {
    // Remove existing rank classes
    element.className = element.className.replace(/rank-(top3|top10|other)/g, '');

    // Add appropriate rank class - CSS handles the styling
    if (rank <= 3) {
      element.classList.add('rank-top3');
    } else if (rank <= 10) {
      element.classList.add('rank-top10');
    } else {
      element.classList.add('rank-other');
    }
  }

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

  updateStatBadges(top3Stats, top10Stats) {
    // Top 3 stats
    if (this.elements.top3Count) {
      this.elements.top3Count.textContent = `${top3Stats.length}/3`;
    }

    if (this.elements.top3Stats) {
      // Clear existing content safely
      this.elements.top3Stats.replaceChildren();

      if (top3Stats.length > 0) {
        top3Stats.forEach(stat => {
          const span = document.createElement('span');
          span.className = 'stat-badge top3-badge';
          span.textContent = stat; // Safe text content, prevents XSS
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
      // Clear existing content safely
      this.elements.top10Stats.replaceChildren();

      if (top10Stats.length > 0) {
        top10Stats.forEach(stat => {
          const span = document.createElement('span');
          span.className = 'stat-badge top10-badge';
          span.textContent = stat; // Safe text content, prevents XSS
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

    const rankingsManager = new ZoneNovaRankingsManager(data);

    // Store reference globally for debugging if needed
    window.rankingsManager = rankingsManager;
  } catch (error) {
    console.error('Failed to initialize Zone Nova rankings:', error);

    // Show user-friendly error message
    const errorContainer = document.getElementById('character-grid');
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
window.ZoneNovaRankingsManager = ZoneNovaRankingsManager;
