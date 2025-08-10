/**
 * Silver & Blood Character Comparison Tool
 * Secure, optimized character comparison functionality
 */

class SilverBloodCharacterComparison {
  constructor() {
    this.selectedCharacters = [];
    this.maxCharacters = 4;
    this.characterDataProcessed = null;
    this.filteredCharacters = [];
    this.sortState = { column: null, asc: false };
    this.characterDataCache = new Map();
    this.characterModules = null;

    this.init();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    // Get data from window global (set by Astro)
    if (window.silverBloodComparisonData) {
      this.characterDataProcessed = window.silverBloodComparisonData.characterData;

      // Sort characters alphabetically by name for default order
      this.characterDataProcessed.characters.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredCharacters = [...this.characterDataProcessed.characters];
    } else {
      console.error('Silver & Blood comparison data not found');
      return;
    }

    this.initializeComparisonControls();
    this.initializeFilterControls();
    this.renderCharacterGrid();
  }

  // initializeCharacterSelection removed - click handlers now added directly in renderCharacterGrid for better performance

  initializeComparisonControls() {
    const clearBtn = document.getElementById('clear-comparison');
    clearBtn?.addEventListener('click', () => this.clearComparison());
  }

  initializeFilterControls() {
    const rarityFilter = document.getElementById('rarity-filter');
    const classFilter = document.getElementById('class-filter');
    const factionFilter = document.getElementById('faction-filter');
    const moonphaseFilter = document.getElementById('moonphase-filter');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const clearFiltersBtn = document.getElementById('clear-filters');

    rarityFilter?.addEventListener('change', () => this.applyFilters());
    classFilter?.addEventListener('change', () => this.applyFilters());
    factionFilter?.addEventListener('change', () => this.applyFilters());
    moonphaseFilter?.addEventListener('change', () => this.applyFilters());

    sortBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const col = btn.dataset.sort;
        // Toggle sort direction if same column, otherwise start with ascending
        this.sortState.asc = this.sortState.column === col ? !this.sortState.asc : true;
        this.sortState.column = col;

        // Update button states
        sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.applyFilters();
      });
    });

    clearFiltersBtn?.addEventListener('click', () => this.clearFilters());
  }

  applyFilters() {
    const rarityFilter = document.getElementById('rarity-filter')?.value || '';
    const classFilter = document.getElementById('class-filter')?.value || '';
    const factionFilter = document.getElementById('faction-filter')?.value || '';
    const moonphaseFilter = document.getElementById('moonphase-filter')?.value || '';

    // Filter characters
    this.filteredCharacters = this.characterDataProcessed.characters.filter(character => {
      const matchesRarity = !rarityFilter || character.rarity === rarityFilter;
      const matchesClass = !classFilter || character.class === classFilter;
      const matchesFaction = !factionFilter || character.faction === factionFilter;
      const matchesMoonphase = !moonphaseFilter || character.moonPhase === moonphaseFilter;

      return matchesRarity && matchesClass && matchesFaction && matchesMoonphase;
    });

    // Sort characters if a sort is active
    if (this.sortState.column) {
      this.sortCharacters(this.sortState.column, this.sortState.asc);
    }

    // Re-render grid
    this.renderCharacterGrid();
  }

  sortCharacters(sortOption, ascending) {
    this.filteredCharacters.sort((a, b) => {
      const aStats = a.stats || {};
      const bStats = b.stats || {};

      let comparison = 0;
      switch (sortOption) {
        case 'hp':
          comparison = (bStats.hp || 0) - (aStats.hp || 0);
          break;
        case 'atk':
          comparison = (bStats.atk || 0) - (aStats.atk || 0);
          break;
        case 'pDef':
          comparison = (bStats.pDef || 0) - (aStats.pDef || 0);
          break;
        case 'mDef':
          comparison = (bStats.mDef || 0) - (aStats.mDef || 0);
          break;
        default:
          comparison = 0;
      }

      // Apply direction multiplier
      return ascending ? comparison : -comparison;
    });
  }

  clearFilters() {
    const filters = ['rarity-filter', 'class-filter', 'faction-filter', 'moonphase-filter'];
    filters.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.value = '';
    });

    // Clear active sort button and reset sort state
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    this.sortState = { column: null, asc: false };

    // Reset to alphabetical order (same as initial load)
    this.filteredCharacters = [...this.characterDataProcessed.characters].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.renderCharacterGrid();
  }

  renderCharacterGrid() {
    const characterGrid = document.querySelector('.character-grid');
    if (!characterGrid) return;

    const characterCards = this.filteredCharacters.map(character => {
      const cardElement = document.createElement('button');
      cardElement.className = 'character-select-card';
      cardElement.dataset.characterId = character.id;
      cardElement.dataset.selected = this.selectedCharacters.includes(character.id);

      // Create elements safely without innerHTML to prevent XSS
      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      img.className = 'character-portrait';
      img.width = 80;
      img.height = 80;

      const characterInfo = document.createElement('div');
      characterInfo.className = 'character-info';

      const h3 = document.createElement('h3');
      h3.textContent = character.name;

      const badgesDiv = document.createElement('div');
      badgesDiv.className = 'character-badges';

      const rarityBadge = document.createElement('span');
      rarityBadge.className = `rarity-badge ${character.rarity.toLowerCase()}`;
      rarityBadge.textContent = character.rarity;

      const classBadge = document.createElement('span');
      classBadge.className = `class-badge ${character.class.toLowerCase().replace(' ', '-')}`;
      classBadge.textContent = character.class;

      badgesDiv.appendChild(rarityBadge);
      badgesDiv.appendChild(classBadge);
      characterInfo.appendChild(h3);
      characterInfo.appendChild(badgesDiv);
      cardElement.appendChild(img);
      cardElement.appendChild(characterInfo);

      // Add click handler directly (more efficient than re-initializing)
      cardElement.addEventListener('click', () => {
        const characterId = cardElement.dataset.characterId;
        const isSelected = cardElement.dataset.selected === 'true';

        if (isSelected) {
          this.selectedCharacters = this.selectedCharacters.filter(id => id !== characterId);
          cardElement.dataset.selected = 'false';
        } else {
          if (this.selectedCharacters.length < this.maxCharacters) {
            this.selectedCharacters.push(characterId);
            cardElement.dataset.selected = 'true';
          } else {
            const oldestId = this.selectedCharacters.shift();
            this.selectedCharacters.push(characterId);

            const oldCard = document.querySelector(`[data-character-id="${oldestId}"]`);
            if (oldCard) {
              oldCard.dataset.selected = 'false';
            }

            cardElement.dataset.selected = 'true';
          }
        }

        this.updateComparisonTable();

        if (this.selectedCharacters.length === this.maxCharacters) {
          this.navigateToComparison();
        }
      });

      return cardElement;
    });

    // Clear grid and append new elements
    characterGrid.innerHTML = '';
    characterCards.forEach(card => characterGrid.appendChild(card));
  }

  updateComparisonTable() {
    const comparisonTable = document.getElementById('comparison-table');
    if (!comparisonTable) return;

    if (this.selectedCharacters.length === 0) {
      comparisonTable.style.display = 'none';
      return;
    }

    comparisonTable.style.display = 'block';

    // Clear existing data
    this.clearTableCells();

    // Populate table with selected characters
    this.selectedCharacters.forEach((characterId, index) => {
      const character = this.characterDataProcessed.characters.find(c => c.id === characterId);
      if (character) {
        this.populateCharacterColumn(character, index + 1);
      }
    });

    // Hide unused columns
    for (let i = this.selectedCharacters.length + 1; i <= this.maxCharacters; i++) {
      this.hideCharacterColumn(i);
    }

    // Update mobile view
    this.updateMobileComparisonView();
  }

  populateCharacterColumn(character, columnIndex) {
    // Show character column
    const column = document.querySelector(
      `.premium-character-column[data-character="${columnIndex}"]`
    );
    if (column) {
      column.classList.add('active');
      column.style.display = 'block';
    }

    // Populate character header
    const portrait = document.querySelector(`.premium-portrait[data-portrait="${columnIndex}"]`);
    if (portrait) {
      portrait.src = character.image;
      portrait.alt = character.name;
    }

    const nameEl = document.querySelector(`.character-name[data-name="${columnIndex}"]`);
    if (nameEl) {
      nameEl.textContent = character.name;
    }

    const badgesEl = document.querySelector(`.premium-badges[data-badges="${columnIndex}"]`);
    if (badgesEl) {
      badgesEl.innerHTML = `
        <span class="rarity-badge ${character.rarity.toLowerCase()}">${character.rarity}</span>
        <span class="class-badge ${character.class.toLowerCase().replace(' ', '-')}">${character.class}</span>
      `;
    }

    // Populate stats
    const stats = character.stats || {};

    const setStatValue = (statName, value) => {
      const el = document.querySelector(`[data-stat="${statName}-${columnIndex}"]`);
      if (el) {
        el.textContent = value;
        el.classList.add('active');
        el.style.display = 'block';
      }
    };

    // Basic info - create badges for these fields
    this.setStatValueWithBadge('class', character.class, 'class-badge', columnIndex);
    this.setStatValueWithBadge('faction', character.faction, 'faction-badge', columnIndex);
    this.setStatValueWithBadge(
      'equipment',
      character.equipmentType,
      'equipment-badge',
      columnIndex
    );
    this.setStatValueWithBadge('moon', character.moonPhase, 'moon-badge', columnIndex);
    this.setStatValueWithBadge('attack', character.attackType, 'attack-badge', columnIndex);

    // Combat stats
    setStatValue('hp', stats.hp !== undefined ? stats.hp.toLocaleString() : 'N/A');
    setStatValue('atk', stats.atk !== undefined ? stats.atk.toLocaleString() : 'N/A');
    setStatValue('pdef', stats.pDef !== undefined ? stats.pDef.toLocaleString() : 'N/A');
    setStatValue('mdef', stats.mDef !== undefined ? stats.mDef.toLocaleString() : 'N/A');
    setStatValue('atkspd', stats.atkSpd !== undefined ? stats.atkSpd + '%' : 'N/A');
    setStatValue('crit', stats.critRate !== undefined ? stats.critRate + '%' : 'N/A');
    setStatValue(
      'critdmg',
      stats.critDmgIncrease !== undefined ? stats.critDmgIncrease + '%' : 'N/A'
    );
  }

  setStatValueWithBadge(statName, value, badgeClass, columnIndex) {
    const el = document.querySelector(`[data-stat="${statName}-${columnIndex}"]`);
    if (el && value) {
      // Create badge element with SAB badge styling
      const badge = document.createElement('span');
      badge.className = `${badgeClass} ${value.toLowerCase().replace(/\s+/g, '-')}`;
      badge.textContent = value;

      // Clear existing content and add badge
      el.innerHTML = '';
      el.appendChild(badge);
      el.classList.add('active');
      el.style.display = 'block';
    }
  }

  clearTableCells() {
    // Clear premium design elements
    for (let i = 1; i <= 4; i++) {
      const column = document.querySelector(`.premium-character-column[data-character="${i}"]`);
      if (column) {
        column.classList.remove('active');
        column.style.display = 'none';
      }

      // Clear all stat values for this column
      document.querySelectorAll(`[data-stat$="-${i}"]`).forEach(el => {
        el.textContent = '';
        el.classList.remove('active');
        el.style.display = 'none';
      });
    }
  }

  hideCharacterColumn(columnIndex) {
    const column = document.querySelector(
      `.premium-character-column[data-character="${columnIndex}"]`
    );
    if (column) {
      column.classList.remove('active');
      column.style.display = 'none';
    }

    // Hide all stat values for this column
    document.querySelectorAll(`[data-stat$="-${columnIndex}"]`).forEach(el => {
      el.classList.remove('active');
      el.style.display = 'none';
    });
  }

  updateMobileComparisonView() {
    const mobileCardsContainer = document.getElementById('character-cards-container');
    if (!mobileCardsContainer) return;

    if (this.selectedCharacters.length === 0) {
      mobileCardsContainer.innerHTML = '';
      return;
    }

    // Clear container first
    mobileCardsContainer.innerHTML = '';

    this.selectedCharacters.forEach(characterId => {
      const character = this.characterDataProcessed.characters.find(c => c.id === characterId);
      if (!character) return;

      const stats = character.stats || {};

      // Create mobile card securely without innerHTML
      const card = document.createElement('div');
      card.className = 'character-comparison-card';

      // Card header
      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      img.className = 'card-portrait';

      const cardInfo = document.createElement('div');
      cardInfo.className = 'card-info';

      const h3 = document.createElement('h3');
      h3.textContent = character.name;

      const badges = document.createElement('div');
      badges.className = 'card-badges';

      const rarityBadge = document.createElement('span');
      rarityBadge.className = `rarity-badge ${character.rarity.toLowerCase()}`;
      rarityBadge.textContent = character.rarity;

      const classBadge = document.createElement('span');
      classBadge.className = `class-badge ${character.class.toLowerCase().replace(' ', '-')}`;
      classBadge.textContent = character.class;

      const factionBadge = document.createElement('span');
      factionBadge.className = `faction-badge ${character.faction.toLowerCase()}`;
      factionBadge.textContent = character.faction;

      badges.appendChild(rarityBadge);
      badges.appendChild(classBadge);
      badges.appendChild(factionBadge);
      cardInfo.appendChild(h3);
      cardInfo.appendChild(badges);
      cardHeader.appendChild(img);
      cardHeader.appendChild(cardInfo);
      card.appendChild(cardHeader);

      // Basic info section
      const basicSection = this.createStatSection('Basic Info', [
        { label: 'Equipment', value: character.equipmentType },
        { label: 'Moon Phase', value: character.moonPhase },
        { label: 'Attack Type', value: character.attackType },
      ]);
      card.appendChild(basicSection);

      // Base stats section
      const statsSection = this.createStatSection('Base Stats', [
        { label: 'HP', value: stats.hp !== undefined ? stats.hp.toLocaleString() : 'N/A' },
        { label: 'ATK', value: stats.atk !== undefined ? stats.atk.toLocaleString() : 'N/A' },
        { label: 'P.DEF', value: stats.pDef !== undefined ? stats.pDef.toLocaleString() : 'N/A' },
        { label: 'M.DEF', value: stats.mDef !== undefined ? stats.mDef.toLocaleString() : 'N/A' },
        { label: 'ATK SPD', value: stats.atkSpd !== undefined ? stats.atkSpd + '%' : 'N/A' },
        { label: 'CRIT Rate', value: stats.critRate !== undefined ? stats.critRate + '%' : 'N/A' },
        {
          label: 'CRIT DMG',
          value: stats.critDmgIncrease !== undefined ? stats.critDmgIncrease + '%' : 'N/A',
        },
      ]);
      card.appendChild(statsSection);

      mobileCardsContainer.appendChild(card);
    });
  }

  createStatSection(title, stats) {
    const section = document.createElement('div');
    section.className = 'card-section';

    const h4 = document.createElement('h4');
    h4.textContent = title;
    section.appendChild(h4);

    const statsDiv = document.createElement('div');
    statsDiv.className = 'card-stats';

    stats.forEach(stat => {
      const statDiv = document.createElement('div');
      statDiv.className = 'card-stat';

      const label = document.createElement('span');
      label.className = 'stat-label';
      label.textContent = stat.label + ':';

      const value = document.createElement('span');
      value.className = 'stat-value';
      value.textContent = stat.value;

      statDiv.appendChild(label);
      statDiv.appendChild(value);
      statsDiv.appendChild(statDiv);
    });

    section.appendChild(statsDiv);
    return section;
  }

  navigateToComparison() {
    const comparisonSection = document.getElementById('comparison-table');
    if (comparisonSection) {
      // Immediate scroll with minimal delay for DOM update
      requestAnimationFrame(() => {
        comparisonSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }

  clearComparison() {
    this.selectedCharacters = [];

    // Clear all selected states
    const characterCards = document.querySelectorAll('.character-select-card');
    characterCards.forEach(card => {
      card.dataset.selected = 'false';
    });

    // Hide comparison table
    const comparisonTable = document.getElementById('comparison-table');
    if (comparisonTable) {
      comparisonTable.style.display = 'none';
    }
  }
}

// Initialize the comparison tool
window.silverBloodCharacterComparison = new SilverBloodCharacterComparison();
