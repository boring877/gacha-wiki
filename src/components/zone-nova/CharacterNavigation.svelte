<script lang="ts">
  import { onMount } from 'svelte';
  import { ZONE_NOVA_CHARACTERS } from '../../data/zone-nova/characters';
  import MobileCharacterNavigation from './MobileCharacterNavigation.svelte';

  export let currentCharacterSlug: string = '';

  // Simple state
  let prevCharacter: typeof ZONE_NOVA_CHARACTERS[0] | null = null;
  let nextCharacter: typeof ZONE_NOVA_CHARACTERS[0] | null = null;

  // Simple navigation - just get prev/next from the default character list
  function updateNavigation() {
    const index = ZONE_NOVA_CHARACTERS.findIndex(char => char.slug === currentCharacterSlug);
    
    if (index === -1) {
      prevCharacter = null;
      nextCharacter = null;
      return;
    }

    prevCharacter = ZONE_NOVA_CHARACTERS[index > 0 ? index - 1 : ZONE_NOVA_CHARACTERS.length - 1];
    nextCharacter = ZONE_NOVA_CHARACTERS[index < ZONE_NOVA_CHARACTERS.length - 1 ? index + 1 : 0];
  }

  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  function handlePrevClick() {
    if (prevCharacter?.detailUrl) {
      navigateTo(prevCharacter.detailUrl);
    }
  }

  function handleNextClick() {
    if (nextCharacter?.detailUrl) {
      navigateTo(nextCharacter.detailUrl);
    }
  }

  // Reactive: Update navigation when character changes
  $: if (currentCharacterSlug) {
    updateNavigation();
  }

  // Initialize component when it mounts
  onMount(() => {
    
    // Add keyboard navigation
    const handleKeydown = (e: KeyboardEvent) => {
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
    };
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<!-- No visible UI - keyboard navigation only -->
{#if currentCharacterSlug && prevCharacter && nextCharacter}
  <!-- Mobile Navigation Component -->
  <MobileCharacterNavigation {prevCharacter} {nextCharacter} />
{/if}
