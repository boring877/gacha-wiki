<script>
  import TagButton from './TagButton.svelte';
  import CharacterCard from './CharacterCard.svelte';
  import FilterControls from './FilterControls.svelte';

  export let characters = [];

  // Reactive state
  let selectedTags = [];
  let allTags = [];

  // Extract all unique tags from characters
  $: allTags = [...new Set(characters.flatMap(char => char.tags || []))].sort();

  // Filter characters based on selected tags
  $: filteredCharacters = characters.filter(character => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every(tag => character.tags?.includes(tag));
  });

  // Handle tag selection
  function handleTagClick(tag) {
    const index = selectedTags.indexOf(tag);
    if (index > -1) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }

  // Clear all selected tags
  function clearAllTags() {
    selectedTags = [];
  }

  // Remove individual tag
  function removeTag(tag) {
    selectedTags = selectedTags.filter(t => t !== tag);
  }
</script>

<div class="character-tag-selector">
  <!-- Tag Selection -->
  <div class="tag-selector">
    <h2>Filter Characters by Tags</h2>

    <!-- All Tags -->
    <div class="all-tags">
      <h3 class="tags-title">Available Tags</h3>
      <div class="tag-buttons">
        {#each allTags as tag}
          <TagButton 
            {tag}
            isSelected={selectedTags.includes(tag)}
            on:click={() => handleTagClick(tag)}
          />
        {/each}
      </div>
    </div>

    <!-- Selected Tags Display -->
    {#if selectedTags.length > 0}
      <FilterControls 
        {selectedTags}
        onClearAll={clearAllTags}
        onRemoveTag={removeTag}
      />
    {/if}
  </div>

  <!-- Character Results -->
  <div class="character-results">
    <div class="results-header">
      <h2>Matching Characters</h2>
      <div class="results-info">
        <span class="match-count">
          {filteredCharacters.length === 1 
            ? '1 character found' 
            : `${filteredCharacters.length} characters found`
          }
        </span>
      </div>
    </div>

    <!-- Character Display -->
    <div class="character-grid">
      {#each filteredCharacters as character}
        <CharacterCard {character} />
      {/each}
    </div>

    {#if filteredCharacters.length === 0}
      <div class="no-results">
        <p>No characters match the selected tags. Try adjusting your filters.</p>
      </div>
    {/if}
  </div>
</div>
