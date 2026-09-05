/**
 * Zone Nova Character Rankings
 * Client-side filtering + sorting over the server-rendered character grid,
 * plus the dynamic per-character rankings panel.
 */

class ZoneNovaRankingsManager {
  constructor(data) {
    // Data
    this.characters = data.characters;
    this.rankings = data.rankings;
    this.overallAnalysis = data.overallAnalysis;
    this.statNames = data.statNames;
    this.totalCharacters = data.totalCharacters;

    this.charById = new Map(this.characters.map(c => [c.id, c]));
    // Last sort direction per column: 'hp' -> 'desc' (persisted in localStorage)
    this.sortDirections = {};

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

  cacheElements() {
    this.elements.grid = document.getElementById('character-grid');

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
    this.elements.critDmgCard = document.getElementById('crit-dmg-card');

    // Analysis elements
    this.elements.overallRank = document.getElementById('overall-rank');
    this.elements.top3Count = document.getElementById('top3-count');
    this.elements.top3Stats = document.getElementById('top3-stats');
    this.elements.top10Count = document.getElementById('top10-count');
    this.elements.top10Stats = document.getElementById('top10-stats');
  }

  getAllCards() {
    return this.elements.grid ? this.elements.grid.querySelectorAll('.character-select-card') : [];
  }

  setupEventListeners() {
    // Filter event listeners
    [
      this.elements.roleFilter,
      this.elements.classFilter,
      this.elements.rarityFilter,
      this.elements.elementFilter,
    ].forEach(filter => {
      filter?.addEventListener('change', () => {
        try {
          this.applyFilters();
        } catch (error) {
          console.error('Error handling filter change:', error);
        }
      });
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
    this.elements.resetBtn?.addEventListener('click', () => {
      try {
        this.resetFilters();
      } catch (error) {
        console.error('Error resetting filters:', error);
      }
    });

    // Character card selection (delegated — cards are static markup)
    document.addEventListener('click', e => {
      try {
        const card = e.target.closest('.character-select-card');
        if (card) this.handleCharacterSelection(card);
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
   * Hide cards that don't match the four filter selects, then re-apply the
   * active sort (if any) to the remaining visible cards.
   */
  applyFilters() {
    const role = this.elements.roleFilter?.value || '';
    const charClass = this.elements.classFilter?.value || '';
    const rarity = this.elements.rarityFilter?.value || '';
    const element = this.elements.elementFilter?.value || '';

    this.getAllCards().forEach(card => {
      const char = this.charById.get(parseInt(card.dataset.characterId || '0', 10));
      if (!char) {
        card.style.display = 'none';
        return;
      }
      const matches =
        (!role || char.role === role) &&
        (!charClass || char.class === charClass) &&
        (!rarity || char.rarity === rarity) &&
        (!element || char.element === element);
      card.style.display = matches ? '' : 'none';
    });

    if (this.activeSort) this.applySort(this.activeSort, this.sortDirections[this.activeSort]);
  }

  /**
   * Sort click: first click sorts descending (best first), subsequent clicks
   * toggle direction. Sorting only touches currently visible cards.
   */
  handleSortClick(button) {
    const column = button.dataset.sort;
    if (!column) return;

    const direction =
      this.activeSort === column && this.sortDirections[column] === 'desc' ? 'asc' : 'desc';

    this.activeSort = column;
    this.sortDirections[column] = direction;
    localStorage.setItem(`zn-rankings-sort-${column}`, direction);

    this.applySort(column, direction);

    this.elements.sortButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  applySort(column, direction) {
    const grid = this.elements.grid;
    if (!grid) return;

    const visible = [...grid.querySelectorAll('.character-select-card')].filter(
      card => card.style.display !== 'none'
    );

    const statOf = card => {
      const char = this.charById.get(parseInt(card.dataset.characterId || '0', 10));
      const c = char || {};
      const v =
        column === 'critRate' ? (c.maxCritRate ?? 0) :
        column === 'critDmg' ? (c.maxCritDmg ?? 0) :
        (c.maxStats?.[column] ?? c.stats?.[column]);
      return this.parseStatValue(v);
    };
    const overallOf = card => {
      const char = this.charById.get(parseInt(card.dataset.characterId || '0', 10));
      return char ? this.overallAnalysis[char.id]?.overallRank ?? Infinity : Infinity;
    };

    // Non-stat sorts (or missing stat data) fall back to overall rank order
    const hasStat = visible.some(card => statOf(card) > 0);
    const cmp =
      column === 'overall' || !hasStat
        ? (a, b) => overallOf(a) - overallOf(b)
        : (a, b) => statOf(a) - statOf(b);

    visible.sort(direction === 'desc' ? (a, b) => cmp(b, a) : cmp);
    visible.forEach(card => grid.appendChild(card));
  }

  /**
   * Reset filters: clear selects, show every card, restore default
   * overall-rank ordering, clear sort state.
   */
  resetFilters() {
    [this.elements.roleFilter, this.elements.classFilter, this.elements.rarityFilter, this.elements.elementFilter].forEach(
      filter => {
        if (filter) filter.value = '';
      }
    );

    this.activeSort = null;
    this.sortDirections = {};
    this.elements.sortButtons.forEach(btn => btn.classList.remove('active'));
    ['hp', 'attack', 'defense', 'critRate'].forEach(col =>
      localStorage.removeItem(`zn-rankings-sort-${col}`)
    );

    this.getAllCards().forEach(card => {
      card.style.display = '';
    });
    this.applySort('overall', 'asc');
  }

  /**
   * Handle character selection — opens the rankings panel
   */
  handleCharacterSelection(card) {
    const characterId = parseInt(card.dataset.characterId || '0', 10);
    if (!characterId) return;

    this.getAllCards().forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');

    const character = this.charById.get(characterId);
    if (!character) return;

    this.updateCharacterDisplay(character);
    this.updateRankingsDisplay(characterId);
    this.updateCharacterAnalysis(characterId);

    // Show rankings display and scroll
    this.elements.rankingsDisplay?.classList.add('active');
    setTimeout(() => {
      this.elements.rankingsDisplay?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  }

  /**
   * Update character display
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
   * Update rankings display
   */
  updateRankingsDisplay(characterId) {
    Object.keys(this.statNames).forEach(statKey => {
      const rank = this.rankings[statKey][characterId];
      const c = this.charById.get(characterId) || {};
      const statValue =
        statKey === 'critRate' ? (c.maxCritRate ?? 0) :
        statKey === 'critDmg' ? (c.maxCritDmg ?? 0) :
        (c.maxStats?.[statKey] ?? c.stats?.[statKey]);

      // Special handling for crit stats (cards ship with inline display:none)
      if (statKey === 'critRate' || statKey === 'critDmg') {
        const card = statKey === 'critRate' ? this.elements.critCard : this.elements.critDmgCard;
        const threshold = statKey === 'critRate' ? 0 : 50; // 50% crit dmg is the universal base
        const critVal = this.parseStatValue(statValue);

        if (critVal > threshold) {
          if (card) card.style.display = '';
          const statValueDisplay = document.querySelector(`.stat-${statKey}`);
          if (statValueDisplay) {
            statValueDisplay.textContent =
              typeof statValue === 'string' ? statValue : `${statValue}%`;
          }
        } else {
          if (card) card.style.display = 'none';
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
   * Update character analysis
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

    // Ships with inline display:none — toggle the style, not a class
    if (this.elements.characterAnalysis) {
      this.elements.characterAnalysis.style.display = '';
    }
  }

  /**
   * Update stat badges
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
   * Apply rank styling
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
   * Helper function to parse stat values ("5,040" / "12%" / 50)
   */
  parseStatValue(value) {
    return typeof value === 'string' ? parseFloat(value.replace(/[,%]/g, '')) || 0 : value || 0;
  }
}

// Initialize the rankings manager. Exported so the page can import + call it
// from a bundled Astro <script> (Vite minifies + emits it as a real asset,
// instead of relying on a hand-copied file in public/scripts/).
export function initializeZoneNovaRankings() {
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

    // Store reference globally for debugging
    window.rankingsManager = rankingsManager;
  } catch (error) {
    console.error('❌ Error initializing rankings:', error);

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
}

// Export the class for potential external use / debugging (browser only —
// this module is also evaluated server-side during the Astro build)
if (typeof window !== 'undefined') {
  window.ZoneNovaRankingsManager = ZoneNovaRankingsManager;
}
