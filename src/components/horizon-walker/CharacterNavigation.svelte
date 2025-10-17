<script lang="ts">
  import { onMount } from 'svelte';
  import { HORIZON_WALKER_CHARACTERS } from '../../data/horizon-walker/characters.js';
  import MobileCharacterNavigation from './MobileCharacterNavigation.svelte';

  export let currentCharacterSlug: string = '';

  // Simple state
  let prevCharacter: typeof HORIZON_WALKER_CHARACTERS[0] | null = null;
  let nextCharacter: typeof HORIZON_WALKER_CHARACTERS[0] | null = null;

  // Simple navigation - just get prev/next from the default character list
  function updateNavigation() {
    const index = HORIZON_WALKER_CHARACTERS.findIndex(char => char.slug === currentCharacterSlug);
    
    if (index === -1) {
      prevCharacter = null;
      nextCharacter = null;
      return;
    }

    prevCharacter = HORIZON_WALKER_CHARACTERS[index > 0 ? index - 1 : HORIZON_WALKER_CHARACTERS.length - 1];
    nextCharacter = HORIZON_WALKER_CHARACTERS[index < HORIZON_WALKER_CHARACTERS.length - 1 ? index + 1 : 0];
  }


  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  function handlePrevClick() {
    if (prevCharacter) {
      navigateTo(`/guides/horizon-walker/characters/${prevCharacter.slug}`);
    }
  }

  function handleNextClick() {
    if (nextCharacter) {
      navigateTo(`/guides/horizon-walker/characters/${nextCharacter.slug}`);
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
