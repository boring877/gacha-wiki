<script>
  export let character = {};
</script>

<div class="character-card">
  <div class="character-portrait">
    <img 
      src={`/src/assets/images/games/silver-and-blood/characters/${character.id}.jpg`}
      alt={character.name}
      loading="lazy"
      width="120"
      height="120"
      class="character-portrait-img"
    />
    <div class="rarity-badge {character.rarity?.toLowerCase()}">
      {character.rarity}
    </div>
  </div>
  <div class="character-info">
    <h3 class="character-name">{character.name}</h3>
    <p class="character-title">{character.title}</p>
    <div class="character-details">
      <span class="class-badge {character.class?.toLowerCase()}">{character.class}</span>
      <span class="faction-badge {character.faction?.toLowerCase()}">{character.faction}</span>
    </div>
    <div class="character-tags">
      {#each character.tags || [] as tag}
        <span class="tag-badge {tag.toLowerCase().replace(/\s+/g, '-').replace('dmg', 'dmg')}">{tag}</span>
      {/each}
    </div>
  </div>
  <div class="character-actions">
    <a
      href={`/guides/silver-and-blood/characters/${character.id}/`}
      class="view-character-btn"
    >
      View Details
    </a>
  </div>
</div>
