/**
 * Zone Nova Character Comparison Tool
 * Secure, optimized character comparison functionality
 */

class ZoneNovaCharacterComparison {
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
    if (window.zoneNovaComparisonData) {
      this.characterDataProcessed = window.zoneNovaComparisonData.characterData;

      // Sort characters alphabetically by name for default order
      this.characterDataProcessed.characters.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredCharacters = [...this.characterDataProcessed.characters];

      // Create character modules dynamically on client-side
      this.characterModules = {};
      this.characterDataProcessed.characters.forEach(char => {
        this.characterModules[char.slug] = () =>
          import(`../../data/zone-nova/characters/${char.slug}.js`);
      });
    } else {
      // Zone Nova comparison data not found
      return;
    }

    this.initializeCharacterSelection();
    this.initializeComparisonControls();
    this.initializeFilterControls();
    this.renderCharacterGrid();
  }

  // Lazy loading helper for character data
  async loadCharacterData(slug) {
    if (this.characterDataCache.has(slug)) {
      return this.characterDataCache.get(slug);
    }

    try {
      const moduleLoader = this.characterModules[slug];
      if (!moduleLoader) {
        throw new Error(`No module loader for character: ${slug}`);
      }
      const module = await moduleLoader();

      // First try to find the character data with teamSkill
      let data = Object.values(module).find(val => val && typeof val === 'object' && val.teamSkill);

      // If not found, try looking for any character data object
      if (!data) {
        data = Object.values(module).find(
          val => val && typeof val === 'object' && (val.name || val.skills)
        );
      }

      this.characterDataCache.set(slug, data);
      return data;
    } catch (error) {
      // Failed to load character data
      this.characterDataCache.set(slug, null);
      return null;
    }
  }

  initializeCharacterSelection() {
    const characterCards = document.querySelectorAll('.character-select-card');

    characterCards.forEach(card => {
      card.addEventListener('click', () => {
        const characterSlug = card.dataset.characterSlug;
        const isSelected = card.dataset.selected === 'true';

        if (isSelected) {
          // Remove from selection
          this.selectedCharacters = this.selectedCharacters.filter(slug => slug !== characterSlug);
          card.dataset.selected = 'false';
        } else {
          // Add to selection - if at max, replace the oldest selection
          if (this.selectedCharacters.length < this.maxCharacters) {
            this.selectedCharacters.push(characterSlug);
            card.dataset.selected = 'true';
          } else {
            // Replace oldest selection with new one
            const oldestSlug = this.selectedCharacters.shift(); // Remove first (oldest)
            this.selectedCharacters.push(characterSlug); // Add new one

            // Update UI - unselect the old one
            const oldCard = document.querySelector(`[data-character-slug="${oldestSlug}"]`);
            if (oldCard) {
              oldCard.dataset.selected = 'false';
            }

            // Select the new one
            card.dataset.selected = 'true';
          }
        }

        this.updateComparisonTable();

        // Auto-navigate to comparison when 4 characters selected
        if (this.selectedCharacters.length === this.maxCharacters) {
          this.navigateToComparison();
        }
      });
    });
  }

  initializeComparisonControls() {
    const clearBtn = document.getElementById('clear-comparison');
    clearBtn?.addEventListener('click', () => this.clearComparison());
  }

  initializeFilterControls() {
    const rarityFilter = document.getElementById('rarity-filter');
    const roleFilter = document.getElementById('role-filter');
    const classFilter = document.getElementById('class-filter');
    const elementFilter = document.getElementById('element-filter');
    const factionFilter = document.getElementById('faction-filter');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const clearFiltersBtn = document.getElementById('clear-filters');

    rarityFilter?.addEventListener('change', () => this.applyFilters());
    roleFilter?.addEventListener('change', () => this.applyFilters());
    classFilter?.addEventListener('change', () => this.applyFilters());
    elementFilter?.addEventListener('change', () => this.applyFilters());
    factionFilter?.addEventListener('change', () => this.applyFilters());

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
    const roleFilter = document.getElementById('role-filter')?.value || '';
    const classFilter = document.getElementById('class-filter')?.value || '';
    const elementFilter = document.getElementById('element-filter')?.value || '';
    const factionFilter = document.getElementById('faction-filter')?.value || '';

    // Filter characters
    this.filteredCharacters = this.characterDataProcessed.characters.filter(character => {
      const matchesRarity = !rarityFilter || character.rarity === rarityFilter;
      const matchesRole = !roleFilter || character.role === roleFilter;
      const matchesClass = !classFilter || character.class === classFilter;
      const matchesElement = !elementFilter || character.element === elementFilter;
      const matchesFaction = !factionFilter || character.faction === factionFilter;

      return matchesRarity && matchesRole && matchesClass && matchesElement && matchesFaction;
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
        case 'attack':
          comparison = (bStats.attack || 0) - (aStats.attack || 0);
          break;
        case 'defense':
          comparison = (bStats.defense || 0) - (aStats.defense || 0);
          break;
        case 'critRate':
          comparison = (bStats.critRate || 0) - (aStats.critRate || 0);
          break;
        default:
          comparison = 0;
      }

      // Apply direction multiplier
      return ascending ? comparison : -comparison;
    });
  }

  clearFilters() {
    const filters = [
      'rarity-filter',
      'role-filter',
      'class-filter',
      'element-filter',
      'faction-filter',
    ];
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
      const stats = character.stats || {};

      const cardElement = document.createElement('button');
      cardElement.className = 'character-select-card';
      cardElement.dataset.characterSlug = character.slug;
      cardElement.dataset.selected = this.selectedCharacters.includes(character.slug);

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
      classBadge.className = `class-badge ${(character.class || 'unknown').toLowerCase().replace(' ', '-')}`;
      classBadge.textContent = character.class || 'Unknown';

      const statsDiv = document.createElement('div');
      statsDiv.className = 'character-stats';

      // HP stat
      const hpDiv = document.createElement('div');
      hpDiv.className = 'stat-item';
      const hpLabel = document.createElement('span');
      hpLabel.className = 'stat-label';
      hpLabel.textContent = 'HP';
      const hpValue = document.createElement('span');
      hpValue.className = 'stat-value';
      hpValue.textContent =
        stats.hp !== undefined
          ? typeof stats.hp === 'string'
            ? stats.hp
            : stats.hp.toLocaleString()
          : 'N/A';
      hpDiv.appendChild(hpLabel);
      hpDiv.appendChild(hpValue);

      // ATK stat
      const atkDiv = document.createElement('div');
      atkDiv.className = 'stat-item';
      const atkLabel = document.createElement('span');
      atkLabel.className = 'stat-label';
      atkLabel.textContent = 'ATK';
      const atkValue = document.createElement('span');
      atkValue.className = 'stat-value';
      atkValue.textContent =
        stats.attack !== undefined
          ? typeof stats.attack === 'string'
            ? stats.attack
            : stats.attack.toLocaleString()
          : 'N/A';
      atkDiv.appendChild(atkLabel);
      atkDiv.appendChild(atkValue);

      // DEF stat
      const defDiv = document.createElement('div');
      defDiv.className = 'stat-item';
      const defLabel = document.createElement('span');
      defLabel.className = 'stat-label';
      defLabel.textContent = 'DEF';
      const defValue = document.createElement('span');
      defValue.className = 'stat-value';
      defValue.textContent =
        stats.defense !== undefined
          ? typeof stats.defense === 'string'
            ? stats.defense
            : stats.defense.toLocaleString()
          : 'N/A';
      defDiv.appendChild(defLabel);
      defDiv.appendChild(defValue);

      // CRIT stat if available
      if (stats.critRate !== undefined) {
        const critDiv = document.createElement('div');
        critDiv.className = 'stat-item crit-rate';
        const critLabel = document.createElement('span');
        critLabel.className = 'stat-label';
        critLabel.textContent = 'CRIT';
        const critValue = document.createElement('span');
        critValue.className = 'stat-value';
        critValue.textContent =
          typeof stats.critRate === 'string' ? stats.critRate : `${stats.critRate}%`;
        critDiv.appendChild(critLabel);
        critDiv.appendChild(critValue);
        statsDiv.appendChild(critDiv);
      }

      // Assemble elements
      badgesDiv.appendChild(rarityBadge);
      badgesDiv.appendChild(classBadge);
      statsDiv.appendChild(hpDiv);
      statsDiv.appendChild(atkDiv);
      statsDiv.appendChild(defDiv);
      characterInfo.appendChild(h3);
      characterInfo.appendChild(badgesDiv);
      characterInfo.appendChild(statsDiv);
      cardElement.appendChild(img);
      cardElement.appendChild(characterInfo);

      return cardElement;
    });

    // Clear grid and append new elements
    characterGrid.innerHTML = '';
    characterCards.forEach(card => characterGrid.appendChild(card));

    // Re-initialize selection functionality
    this.initializeCharacterSelection();
  }

  async updateComparisonTable() {
    const comparisonTable = document.getElementById('comparison-table');
    if (!comparisonTable) return;

    if (this.selectedCharacters.length === 0) {
      comparisonTable.classList.remove('active');
      return;
    }

    comparisonTable.classList.add('active');

    // Clear existing data
    this.clearTableCells();

    // Populate table with selected characters
    const populationPromises = this.selectedCharacters.map(async (characterSlug, index) => {
      const character = this.characterDataProcessed.characters.find(c => c.slug === characterSlug);
      if (character) {
        await this.populateCharacterColumn(character, index + 1);
      }
    });

    await Promise.all(populationPromises);

    // Hide unused columns
    for (let i = this.selectedCharacters.length + 1; i <= this.maxCharacters; i++) {
      this.hideCharacterColumn(i);
    }

    // Update mobile view
    await this.updateMobileComparisonView();
  }

  async populateCharacterColumn(character, columnIndex) {
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

    const setBadgeValue = (statName, value, badgeType) => {
      const el = document.querySelector(`[data-stat="${statName}-${columnIndex}"]`);
      if (el) {
        // Handle long faction names
        let displayValue = value;
        if (badgeType === 'faction' && value.length > 12) {
          const abbreviations = {
            'Monochrome Nation': 'Mono Nation',
            'Pingjing City': 'Pingjing',
            'Bicta Tower': 'Bicta',
          };
          displayValue = abbreviations[value] || value;
        }

        const span = document.createElement('span');
        span.className = `${badgeType}-badge ${value.toLowerCase().replace(/\s+/g, '-')}`;
        span.textContent = displayValue;
        el.innerHTML = '';
        el.appendChild(span);
        el.classList.add('active');
        el.style.display = 'block';
      }
    };

    setBadgeValue('rarity', character.rarity, 'rarity');
    setBadgeValue('class', character.class, 'class');
    setBadgeValue('role', character.role, 'role');
    setBadgeValue('faction', character.faction, 'faction');
    setBadgeValue('element', character.element, 'element');

    // Load team skill data lazily and get detailed stats
    const characterData = await this.loadCharacterData(character.slug);
    const detailedStats = characterData?.stats || stats;

    // Combat stats - prioritize detailed character data, fallback to basic stats
    const hp = detailedStats.hp || stats.hp;
    const attack = detailedStats.attack || stats.attack;
    const defense = detailedStats.defense || stats.defense;
    const energy =
      detailedStats.energyRegen || detailedStats.energyRecovery || stats.energyRecovery;
    const critRate = detailedStats.critRate || stats.critRate;
    const critDmg = detailedStats.critDamage || detailedStats.critDmg || stats.critDmg;

    setStatValue(
      'hp',
      hp !== undefined ? (typeof hp === 'string' ? hp : hp.toLocaleString()) : 'N/A'
    );
    setStatValue(
      'attack',
      attack !== undefined ? (typeof attack === 'string' ? attack : attack.toLocaleString()) : 'N/A'
    );
    setStatValue(
      'defense',
      defense !== undefined
        ? typeof defense === 'string'
          ? defense
          : defense.toLocaleString()
        : 'N/A'
    );
    setStatValue(
      'energy',
      energy !== undefined ? (typeof energy === 'string' ? energy : energy) : 'N/A'
    );
    setStatValue(
      'crit',
      critRate !== undefined ? (typeof critRate === 'string' ? critRate : critRate + '%') : 'N/A'
    );
    setStatValue(
      'critdmg',
      critDmg !== undefined ? (typeof critDmg === 'string' ? critDmg : critDmg + '%') : 'N/A'
    );

    const teamSkill = characterData?.teamSkill;

    // Team skill name
    const teamSkillName = teamSkill?.name || 'No team skill';
    setStatValue('teamskillname', teamSkillName);

    // Team skill description
    const teamSkillValue = teamSkill?.description || 'No team skill available';
    setStatValue('teamskill', teamSkillValue);

    // Team skill requirements with better formatting
    let teamConditionsValue = 'No requirements';
    if (teamSkill?.requirements) {
      const factionName = teamSkill.requirements.faction;
      const elementName = teamSkill.requirements.element;

      if (factionName.length > 8) {
        teamConditionsValue = `${factionName}\n${elementName}`;
      } else {
        teamConditionsValue = `${factionName} + ${elementName}`;
      }
    }

    // Set the value safely
    const el = document.querySelector(`[data-stat="teamconditions-${columnIndex}"]`);
    if (el) {
      if (teamConditionsValue.includes('\n')) {
        const parts = teamConditionsValue.split('\n').filter(Boolean);
        el.innerHTML = '';
        parts.forEach((part, index) => {
          if (index > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(part.trim()));
        });
      } else {
        el.textContent = teamConditionsValue;
      }
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

  async updateMobileComparisonView() {
    const mobileCardsContainer = document.getElementById('character-cards-container');
    if (!mobileCardsContainer) return;

    if (this.selectedCharacters.length === 0) {
      mobileCardsContainer.innerHTML = '';
      return;
    }

    // Clear container first
    mobileCardsContainer.innerHTML = '';

    const mobileCardsPromises = this.selectedCharacters.map(async characterSlug => {
      const character = this.characterDataProcessed.characters.find(c => c.slug === characterSlug);
      if (!character) return null;

      const characterData = await this.loadCharacterData(character.slug);
      const teamSkill = characterData?.teamSkill;
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

      const elementBadge = document.createElement('span');
      elementBadge.className = `element-badge ${character.element.toLowerCase()}`;
      elementBadge.textContent = character.element;

      const roleBadge = document.createElement('span');
      roleBadge.className = `role-badge ${character.role.toLowerCase()}`;
      roleBadge.textContent = character.role;

      badges.appendChild(rarityBadge);
      badges.appendChild(elementBadge);
      badges.appendChild(roleBadge);
      cardInfo.appendChild(h3);
      cardInfo.appendChild(badges);
      cardHeader.appendChild(img);
      cardHeader.appendChild(cardInfo);
      card.appendChild(cardHeader);

      // Base stats section
      const statsSection = this.createStatSection('Base Stats', [
        { label: 'HP', value: stats.hp !== undefined ? stats.hp.toLocaleString() : 'N/A' },
        { label: 'ATK', value: stats.attack !== undefined ? stats.attack.toLocaleString() : 'N/A' },
        {
          label: 'DEF',
          value: stats.defense !== undefined ? stats.defense.toLocaleString() : 'N/A',
        },
        {
          label: 'Energy Recovery',
          value: stats.energyRecovery !== undefined ? stats.energyRecovery : 'N/A',
        },
        { label: 'CRIT Rate', value: stats.critRate !== undefined ? stats.critRate + '%' : 'N/A' },
        { label: 'CRIT DMG', value: stats.critDmg !== undefined ? stats.critDmg + '%' : 'N/A' },
      ]);
      card.appendChild(statsSection);

      // Team skill section
      const teamSkillSection = document.createElement('div');
      teamSkillSection.className = 'card-section';

      const h4 = document.createElement('h4');
      h4.textContent = 'Team Skill';
      teamSkillSection.appendChild(h4);

      const teamSkillDiv = document.createElement('div');
      teamSkillDiv.className = 'card-team-skill';

      const skillName = document.createElement('div');
      skillName.className = 'team-skill-name';
      skillName.textContent = teamSkill?.name || 'N/A';

      const skillDesc = document.createElement('div');
      skillDesc.className = 'team-skill-description';
      skillDesc.textContent = teamSkill?.description || 'No team skill available';

      teamSkillDiv.appendChild(skillName);
      teamSkillDiv.appendChild(skillDesc);

      if (teamSkill?.requirements) {
        const conditions = document.createElement('div');
        conditions.className = 'team-skill-conditions';
        const strong = document.createElement('strong');
        strong.textContent = 'Conditions: ';
        conditions.appendChild(strong);
        conditions.appendChild(
          document.createTextNode(
            `${teamSkill.requirements.faction} faction + ${teamSkill.requirements.element} element`
          )
        );
        teamSkillDiv.appendChild(conditions);
      }

      teamSkillSection.appendChild(teamSkillDiv);
      card.appendChild(teamSkillSection);

      return card;
    });

    const mobileCards = await Promise.all(mobileCardsPromises);
    mobileCards.forEach(card => {
      if (card) mobileCardsContainer.appendChild(card);
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
      comparisonTable.classList.remove('active');
    }
  }
}

// Initialize the comparison tool
window.zoneNovaCharacterComparison = new ZoneNovaCharacterComparison();
