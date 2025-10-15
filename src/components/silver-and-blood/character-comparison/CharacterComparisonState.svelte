<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable, derived } from 'svelte/store';

  // Props from Astro
  export let characters = [];

  // Svelte stores for state management
  const selectedCharacters = writable([]);
  const maxCharacters = 4;

  // Derived stores for reactive updates
  const selectedCount = derived(selectedCharacters, $selected => $selected.length);
  const hasSelection = derived(selectedCount, $count => $count > 0);

  // Component state
  let characterCards = [];
  let clearButton;
  let comparisonSection;

  // Event listeners cleanup
  const eventListeners = new Map();

  // Initialize component
  onMount(() => {
    // Wait for DOM to be ready
    if (typeof document === 'undefined') return;
    
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(() => {
      initializeCharacterSelection();
      initializeComparisonControls();
      initializeFilterControls();
      initializeComparisonSection();
    }, 100);
  });

  // Initialize comparison section
  function initializeComparisonSection() {
    comparisonSection = document.querySelector('.comparison-section');
  }

  // Character selection logic
  function initializeCharacterSelection() {
    characterCards = document.querySelectorAll('.character-card');
    
    characterCards.forEach(card => {
      const clickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const characterId = card.dataset.characterId;
        if (!characterId) return;

        selectedCharacters.update(current => {
          const isSelected = current.includes(characterId);
          
          if (isSelected) {
            // Remove from selection
            return current.filter(id => id !== characterId);
          } else {
            // Add to selection - replace oldest if at max
            if (current.length >= maxCharacters) {
              const oldestId = current.shift();
              const oldCard = document.querySelector(`[data-character-id="${oldestId}"]`);
              if (oldCard) {
                oldCard.classList.remove('selected');
                oldCard.setAttribute('aria-pressed', 'false');
              }
            }
            return [...current, characterId];
          }
        });
      };

      card.addEventListener('click', clickHandler);
      eventListeners.set(card, clickHandler);
    });
  }

  // Update UI when selection changes - runs on ANY change including clearing
  $: if (typeof window !== 'undefined') {
    updateSelectedStates();
    updateComparisonDisplay();
    // Only navigate when 4th character is selected
    if ($selectedCharacters.length === 4) {
      navigateToComparison();
    }
  }

  function updateSelectedStates() {
    if (typeof window === 'undefined' || !characterCards.length) return;
    
    characterCards.forEach(card => {
      const characterId = card.dataset.characterId;
      const isSelected = $selectedCharacters.includes(characterId);
      
      if (isSelected) {
        card.classList.add('selected');
        card.setAttribute('aria-pressed', 'true');
      } else {
        card.classList.remove('selected');
        card.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Comparison controls
  function initializeComparisonControls() {
    clearButton = document.getElementById('clear-comparison');
    if (clearButton) {
      const clearHandler = () => clearComparison();
      clearButton.addEventListener('click', clearHandler);
      eventListeners.set(clearButton, clearHandler);
    }
  }

  function clearComparison() {
    selectedCharacters.set([]);
  }

  // Filter controls
  function initializeFilterControls() {
    const rarityFilter = document.getElementById('rarity-filter');
    const classFilter = document.getElementById('class-filter');
    const factionFilter = document.getElementById('faction-filter');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const clearFiltersBtn = document.getElementById('clear-filters');

    const filterHandler = () => applyFilters();

    if (rarityFilter) {
      rarityFilter.addEventListener('change', filterHandler);
      eventListeners.set(rarityFilter, filterHandler);
    }

    if (classFilter) {
      classFilter.addEventListener('change', filterHandler);
      eventListeners.set(classFilter, filterHandler);
    }

    if (factionFilter) {
      factionFilter.addEventListener('change', filterHandler);
      eventListeners.set(factionFilter, filterHandler);
    }

    sortBtns.forEach(btn => {
      const sortHandler = () => {
        const col = btn.dataset.sort;
        if (!col) return;

        // Toggle sort direction
        const isActive = btn.classList.contains('active');
        sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        applyFilters(col, !isActive);
      };

      btn.addEventListener('click', sortHandler);
      eventListeners.set(btn, sortHandler);
    });

    if (clearFiltersBtn) {
      const clearFiltersHandler = () => clearFilters();
      clearFiltersBtn.addEventListener('click', clearFiltersHandler);
      eventListeners.set(clearFiltersBtn, clearFiltersHandler);
    }
  }

  function applyFilters(sortColumn = null, ascending = true) {
    const rarityFilter = document.getElementById('rarity-filter')?.value || '';
    const classFilter = document.getElementById('class-filter')?.value || '';
    const factionFilter = document.getElementById('faction-filter')?.value || '';

    // Filter character cards
    characterCards.forEach(card => {
      const cardRarity = card.dataset.rarity || '';
      const cardClass = card.dataset.class || '';
      const cardFaction = card.dataset.faction || '';

      const matchesRarity = !rarityFilter || cardRarity === rarityFilter;
      const matchesClass = !classFilter || cardClass === classFilter;
      const matchesFaction = !factionFilter || cardFaction === factionFilter;

      const shouldShow = matchesRarity && matchesClass && matchesFaction;
      
      // Use flex to maintain card layout (vertical centered)
      card.style.display = shouldShow ? 'flex' : 'none';
    });

    // Apply sorting if specified
    if (sortColumn) {
      sortVisibleCharacters(sortColumn, ascending);
    }
  }

  function sortVisibleCharacters(sortOption, ascending) {
    const characterGrid = document.querySelector('.character-grid');
    if (!characterGrid) return;

    // Get ALL cards (not just visible) to maintain grid order
    const allCards = Array.from(characterCards);

    allCards.sort((a, b) => {
      let aValue, bValue;

      switch (sortOption) {
        case 'hp':
          aValue = parseFloat(a.dataset.hp) || 0;
          bValue = parseFloat(b.dataset.hp) || 0;
          break;
        case 'atk':
          aValue = parseFloat(a.dataset.atk) || 0;
          bValue = parseFloat(b.dataset.atk) || 0;
          break;
        case 'pDef':
          aValue = parseFloat(a.dataset.pDef) || 0;
          bValue = parseFloat(b.dataset.pDef) || 0;
          break;
        case 'mDef':
          aValue = parseFloat(a.dataset.mDef) || 0;
          bValue = parseFloat(b.dataset.mDef) || 0;
          break;
        default:
          return 0;
      }

      const comparison = bValue - aValue;
      return ascending ? comparison : -comparison;
    });

    // Reorder ALL cards in DOM (hidden cards will naturally not show)
    allCards.forEach(card => {
      characterGrid.appendChild(card);
    });
  }

  function clearFilters() {
    const filters = ['rarity-filter', 'class-filter', 'faction-filter'];

    filters.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.value = '';
        element.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    // Clear sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));

    // Reset to alphabetical order
    const characterGrid = document.querySelector('.character-grid');
    if (characterGrid) {
      const allCards = Array.from(characterCards);
      
      allCards.sort((a, b) => {
        const nameA = a.querySelector('h3')?.textContent || '';
        const nameB = b.querySelector('h3')?.textContent || '';
        return nameA.localeCompare(nameB);
      });

      allCards.forEach(card => {
        card.style.display = 'flex'; // Use flex to maintain layout
        characterGrid.appendChild(card);
      });
    }
  }

  // Comparison display logic - populate table structure
  function updateComparisonDisplay() {
    if (typeof window === 'undefined') return;
    
    const comparisonSection = document.querySelector('.comparison-section');
    if (!comparisonSection) return;

    if ($selectedCharacters.length === 0) {
      comparisonSection.style.display = 'none';
      return;
    }

    comparisonSection.style.display = 'block';
    
    // Update title
    const titleEl = comparisonSection.querySelector('h2');
    if (titleEl) {
      titleEl.textContent = `Selected Characters (${$selectedCharacters.length}/4)`;
    }

    // Hide all character columns first
    document.querySelectorAll('.comparison-character-column').forEach(col => {
      col.style.display = 'none';
    });
    
    // Clear all stat values
    for (let i = 1; i <= 4; i++) {
      document.querySelectorAll(`[data-stat$="-${i}"]`).forEach(el => {
        el.textContent = '';
      });
    }

    // Hide all mobile characters first
    document.querySelectorAll('.mobile-comparison-character').forEach(char => {
      char.style.display = 'none';
    });

    // Show selected characters and populate stats
    $selectedCharacters.forEach((characterId, index) => {
      const slotNum = index + 1;
      const character = characters.find(c => c.id === characterId);
      if (!character) return;

      // Show the desktop character column
      const column = document.querySelector(`.comparison-character-column[data-character-id="${characterId}"]`);
      if (column) {
        column.style.display = 'flex';
      }

      // Show mobile character card
      const mobileChar = document.querySelector(`.mobile-comparison-character[data-mobile-character-id="${characterId}"]`);
      if (mobileChar) {
        mobileChar.style.display = 'block';
      }

      // Populate desktop table stats for this slot
      const desktopStats = {
        [`rarity-${slotNum}`]: character.rarity || 'N/A',
        [`class-${slotNum}`]: character.class || 'N/A',
        [`faction-${slotNum}`]: character.faction || 'N/A',
        [`hp-${slotNum}`]: character.stats?.hp?.toLocaleString() || 'N/A',
        [`atk-${slotNum}`]: character.stats?.atk?.toLocaleString() || 'N/A',
        [`pDef-${slotNum}`]: character.stats?.pDef?.toLocaleString() || 'N/A',
        [`mDef-${slotNum}`]: character.stats?.mDef?.toLocaleString() || 'N/A',
        [`equipment-${slotNum}`]: character.equipmentType || 'N/A',
        [`moon-${slotNum}`]: character.moonPhase || 'N/A',
        [`attack-${slotNum}`]: character.attackType || 'N/A',
      };

      Object.entries(desktopStats).forEach(([key, value]) => {
        const el = document.querySelector(`[data-stat="${key}"]`);
        if (el) {
          el.textContent = value;
        }
      });

      // Populate mobile stats
      const mobileStats = {
        [`${characterId}-rarity`]: character.rarity || 'N/A',
        [`${characterId}-class`]: character.class || 'N/A',
        [`${characterId}-faction`]: character.faction || 'N/A',
        [`${characterId}-hp`]: character.stats?.hp?.toLocaleString() || 'N/A',
        [`${characterId}-atk`]: character.stats?.atk?.toLocaleString() || 'N/A',
        [`${characterId}-pDef`]: character.stats?.pDef?.toLocaleString() || 'N/A',
        [`${characterId}-mDef`]: character.stats?.mDef?.toLocaleString() || 'N/A',
        [`${characterId}-equipment`]: character.equipmentType || 'N/A',
        [`${characterId}-moon`]: character.moonPhase || 'N/A',
        [`${characterId}-attack`]: character.attackType || 'N/A',
      };

      Object.entries(mobileStats).forEach(([key, value]) => {
        const el = document.querySelector(`[data-mobile-stat="${key}"]`);
        if (el) {
          el.textContent = value;
        }
      });
    });
  }

  function navigateToComparison() {
    if (typeof window === 'undefined' || !comparisonSection) return;
    
    requestAnimationFrame(() => {
      comparisonSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  // Cleanup on component destroy
  onDestroy(() => {
    cleanupEventListeners();
  });

  function cleanupEventListeners() {
    eventListeners.forEach((handler, element) => {
      if (element && typeof element.removeEventListener === 'function') {
        element.removeEventListener('click', handler);
      }
    });
    eventListeners.clear();
  }

  // Export selected characters for use in Astro components
  export { selectedCharacters, selectedCount, hasSelection };
</script>
