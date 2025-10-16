<script>
  export let tag = '';
  export let isSelected = false;

  // Convert tag name to CSS class name (e.g., "AoE DMG" -> "aoe-dmg")
  function tagToClass(tag) {
    return tag.toLowerCase().replace(/\s+/g, '-');
  }

  // Compute the full class string
  $: buttonClass = isSelected 
    ? `tag-btn tag-badge ${tagToClass(tag)}` 
    : 'tag-btn';
</script>

<button 
  class={buttonClass}
  on:click
  data-tag={tag}
  type="button"
>
  {tag}
</button>
