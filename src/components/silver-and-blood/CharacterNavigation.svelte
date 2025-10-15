<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { characters } from '../../data/silver-and-blood/characters.js';
  import MobileCharacterNavigation from './MobileCharacterNavigation.svelte';

  export let currentCharacterSlug: string = '';

  // Reactive state
  let prevCharacter: typeof characters[0] | null = null;
  let nextCharacter: typeof characters[0] | null = null;
  let currentIndex: number = -1;
  let totalCharacters: number = 0;
  let sortInfo: string = 'Default';
  let filterInfo: string = 'None';

  // Session storage reactive state
  let filters: Record<string, string> = {};
  let sort: { column: string; asc: boolean } = { column: 'name', asc: true };

  // Type definitions
  type SABCharacter = typeof characters[0];

  // Sort display names lookup
  const SAB_SORT_NAMES = {
    name: 'Name',
    id: 'Default',
    hp: 'HP',
    atk: 'ATK',
    pDef: 'P.DEF',
    mDef: 'M.DEF',
    critRate: 'Crit Rate',
    critDmgIncrease: 'Crit DMG',
    bloodsoulRecovery: 'Bloodsoul',
  } as const;

  const SAB_NUMERIC_COLUMNS = [
    'hp',
    'atk',
    'pDef',
    'mDef',
    'critRate',
    'critDmgIncrease',
    'bloodsoulRecovery',
  ];

  // Get current character list with filters and sorting
  function getCurrentCharacterList(): SABCharacter[] {
    let filtered = characters;

    // Apply filters
    if (filters && Object.keys(filters).length > 0) {
      filtered = filtered.filter(character => {
        return (
          (!filters.class || character.class === filters.class) &&
          (!filters.rarity || character.rarity === filters.rarity) &&
          (!filters.faction || character.faction === filters.faction) &&
          (!filters.moonPhase || character.moonPhase === filters.moonPhase) &&
          (!filters.equipmentType || character.equipmentType === filters.equipmentType)
        );
      });
    }

    // Apply sorting
    if (sort.column === 'name') {
      filtered = filtered.sort((a, b) => {
        const result = a.name.localeCompare(b.name);
        return sort.asc ? result : -result;
      });
    } else if (sort.column === 'id') {
      filtered = filtered.sort((a, b) => {
        const result = a.name.localeCompare(b.name);
        return sort.asc ? result : -result;
      });
    } else {
      // For stat columns
      filtered = filtered.sort((a, b) => {
        const valA = a.stats?.[sort.column] ?? a[sort.column] ?? 0;
        const valB = b.stats?.[sort.column] ?? b[sort.column] ?? 0;

        const numA = Number(valA);
        const numB = Number(valB);

        if (!isNaN(numA) && !isNaN(numB)) {
          return sort.asc ? numA - numB : numB - numA;
        }

        const strA = String(valA).toLowerCase();
        const strB = String(valB).toLowerCase();
        return sort.asc ? strA.localeCompare(strB) : strB.localeCompare(strA);
      });
    }

    return filtered;
  }

  // Update navigation information
  function updateNavigation() {
    const characters = getCurrentCharacterList();
    const index = characters.findIndex(char => char.slug === currentCharacterSlug);

    if (index === -1) {
      // Character not found, use full list as fallback
      const fallbackList = [...characters].sort((a, b) => a.name.localeCompare(b.name));
      const fallbackIndex = fallbackList.findIndex(char => char.slug === currentCharacterSlug);
      
      if (fallbackIndex === -1) {
        return; // Character truly doesn't exist
      }

      currentIndex = fallbackIndex;
      totalCharacters = fallbackList.length;
      prevCharacter = fallbackList[fallbackIndex > 0 ? fallbackIndex - 1 : fallbackList.length - 1];
      nextCharacter = fallbackList[fallbackIndex < fallbackList.length - 1 ? fallbackIndex + 1 : 0];
    } else {
      currentIndex = index;
      totalCharacters = characters.length;
      prevCharacter = characters[index > 0 ? index - 1 : characters.length - 1];
      nextCharacter = characters[index < characters.length - 1 ? index + 1 : 0];
    }

    // Update display info
    let sortDisplay = 'Default';
    if (sort.column !== 'name' || !sort.asc) {
      const direction = SAB_NUMERIC_COLUMNS.includes(sort.column)
        ? sort.asc ? '↓' : '↑'
        : sort.asc ? '↑' : '↓';
      sortDisplay = `${getSortDisplayName(sort.column)} ${direction}`;
    }

    const activeFilters = Object.values(filters).filter(Boolean);
    filterInfo = activeFilters.length > 0 ? activeFilters.join(', ') : 'None';
    sortInfo = sortDisplay;
  }

  function getSortDisplayName(sortColumn: string) {
    return SAB_SORT_NAMES[sortColumn] || sortColumn;
  }

  // Load session storage data
  function loadSessionData() {
    try {
      const filterState = sessionStorage.getItem('sab-character-filters');
      const sortState = sessionStorage.getItem('sab-character-sort');

      if (filterState) {
        filters = JSON.parse(filterState);
      }
      if (sortState) {
        sort = JSON.parse(sortState);
      }
    } catch (error) {
      // Use defaults if session storage is corrupted
      filters = {};
      sort = { column: 'name', asc: true };
    }
  }

  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.assign(url);
    }
  }

  function handlePrevClick() {
    if (prevCharacter) {
      navigateTo(prevCharacter.detailUrl);
    }
  }

  function handleNextClick() {
    if (nextCharacter) {
      navigateTo(nextCharacter.detailUrl);
    }
  }

  // Keyboard navigation
  function handleKeydown(e: KeyboardEvent) {
    const target = e.target as HTMLElement;
    if (
      target?.tagName === 'INPUT' ||
      target?.tagName === 'TEXTAREA' ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey
    ) {
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevClick();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNextClick();
    }
  }

  // Storage event listener for cross-tab synchronization
  function handleStorageChange(e: StorageEvent) {
    if (e.key === 'sab-character-filters' || e.key === 'sab-character-sort') {
      loadSessionData();
      updateNavigation();
    }
  }

  // Custom event listener
  function handleCharacterDatabaseUpdate() {
    loadSessionData();
    updateNavigation();
  }

  // Lifecycle
  onMount(() => {
    // Get current character slug from URL if not provided (browser only)
    if (!currentCharacterSlug && typeof window !== 'undefined') {
      currentCharacterSlug = window.location.pathname.split('/').pop() || '';
    }

    loadSessionData();
    updateNavigation();

    // Add event listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('keydown', handleKeydown);
      if (typeof document !== 'undefined') {
        document.addEventListener('character-database-updated', handleCharacterDatabaseUpdate);
      }
    }
  });

  onDestroy(() => {
    // Clean up event listeners (browser only)
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('keydown', handleKeydown);
      if (typeof document !== 'undefined') {
        document.removeEventListener('character-database-updated', handleCharacterDatabaseUpdate);
      }
    }
  });

  // Reactive updates when session data changes
  $: if (filters || sort) {
    updateNavigation();
  }
</script>

{#if currentCharacterSlug && prevCharacter && nextCharacter}
  <div class="nav-zone nav-zone-single">
    <div class="nav-controls">
      <button
        class="nav-btn nav-btn-prev"
        on:click={handlePrevClick}
        title="Previous: {prevCharacter.name}"
      >
        ‹
      </button>
      <button
        class="nav-btn nav-btn-next"
        on:click={handleNextClick}
        title="Next: {nextCharacter.name}"
      >
        ›
      </button>
    </div>
    <div class="nav-info">
      <div class="nav-current-character">
        <div class="nav-character-name">Current Character</div>
        <div class="nav-character-details">
          <span class="nav-position">{currentIndex + 1}/{totalCharacters}</span>
          <span class="nav-total-filtered">{totalCharacters} character{totalCharacters !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <div class="nav-navigation-info">
        <div class="nav-next-character">
          <span class="nav-label">Next:</span>
          <span class="nav-next-name">{nextCharacter.name}</span>
        </div>
        <div class="nav-sort-info">
          <span class="nav-label">Sort:</span>
          <span class="nav-sort">{sortInfo}</span>
        </div>
        <div class="nav-filter-info">
          <span class="nav-label">Filter:</span>
          <span class="nav-filter">{filterInfo}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Component -->
  <MobileCharacterNavigation {prevCharacter} {nextCharacter} />
{/if}

<style>
  @import '../../styles/components/silver-and-blood-character-navigation.css';
</style>
