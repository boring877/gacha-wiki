<script>
  export let selectedTags = [];
  export let onClearAll = () => {};
  export let onRemoveTag = () => {};

  function handleClearAll() {
    onClearAll();
  }

  function handleRemoveTag(tag) {
    onRemoveTag(tag);
  }
</script>

<div class="selected-tags-container">
  <h3>Selected Tags:</h3>
  <div class="selected-tags">
    {#each selectedTags as tag}
      <span class="selected-tag tag-badge {tag.toLowerCase().replace(/\s+/g, '-').replace('dmg', 'dmg')}">
        {tag}
        <button 
          class="remove-tag" 
          on:click={() => handleRemoveTag(tag)}
          type="button"
          aria-label={`Remove ${tag} tag`}
        >
          ×
        </button>
      </span>
    {/each}
  </div>
  <button class="clear-tags-btn" on:click={handleClearAll} type="button">
    Clear All
  </button>
</div>
