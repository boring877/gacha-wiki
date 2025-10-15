<script>
  /**
   * CharacterFilter - Filter and sort controls for character comparison
   * Binds to DOM elements that CharacterComparisonState.svelte will manage
   */
  let rarityFilter = '';
  let classFilter = '';
  let factionFilter = '';
</script>

<div class="filters-section">
  <div class="filter-controls">
    <select 
      bind:value={rarityFilter} 
      id="rarity-filter"
      class="filter-select"
    >
      <option value="">All Rarities</option>
      <option value="SSR">SSR</option>
      <option value="SR">SR</option>
      <option value="R">R</option>
    </select>
    
    <select 
      bind:value={classFilter} 
      id="class-filter"
      class="filter-select"
    >
      <option value="">All Classes</option>
      <option value="Warrior">Warrior</option>
      <option value="Assassin">Assassin</option>
      <option value="Defender">Defender</option>
      <option value="Marksman">Marksman</option>
      <option value="Sorcerer">Sorcerer</option>
      <option value="Enchanter">Enchanter</option>
    </select>
    
    <select 
      bind:value={factionFilter} 
      id="faction-filter"
      class="filter-select"
    >
      <option value="">All Factions</option>
      <option value="Kingdom">Kingdom</option>
      <option value="Ancestors">Ancestors</option>
      <option value="Church">Church</option>
      <option value="Bloodborn">Bloodborn</option>
    </select>
  </div>
  
  <div class="sort-controls">
    <button 
      class="sort-btn"
      data-sort="hp"
    >
      HP
    </button>
    <button 
      class="sort-btn"
      data-sort="atk"
    >
      ATK
    </button>
    <button 
      class="sort-btn"
      data-sort="pDef"
    >
      P.DEF
    </button>
    <button 
      class="sort-btn"
      data-sort="mDef"
    >
      M.DEF
    </button>
    <button 
      class="reset-btn"
      id="clear-filters"
    >
      Reset
    </button>
  </div>
</div>
