<script lang="ts">
  import { onMount } from 'svelte';
  import { HORIZON_WALKER_WEAPONS } from '../../data/horizon-walker/weapons.js';
  import MobileWeaponNavigation from './MobileWeaponNavigation.svelte';

  export let currentWeaponSlug: string = '';

  // Simple state
  let prevWeapon: typeof HORIZON_WALKER_WEAPONS[0] | null = null;
  let nextWeapon: typeof HORIZON_WALKER_WEAPONS[0] | null = null;

  // Simple navigation - just get prev/next from the default weapon list
  function updateNavigation() {
    const index = HORIZON_WALKER_WEAPONS.findIndex(weapon => weapon.character.slug === currentWeaponSlug);
    
    if (index === -1) {
      prevWeapon = null;
      nextWeapon = null;
      return;
    }

    prevWeapon = HORIZON_WALKER_WEAPONS[index > 0 ? index - 1 : HORIZON_WALKER_WEAPONS.length - 1];
    nextWeapon = HORIZON_WALKER_WEAPONS[index < HORIZON_WALKER_WEAPONS.length - 1 ? index + 1 : 0];
  }


  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  function handlePrevClick() {
    if (prevWeapon) {
      navigateTo(`/guides/horizon-walker/weapons/${prevWeapon.character.slug}`);
    }
  }

  function handleNextClick() {
    if (nextWeapon) {
      navigateTo(`/guides/horizon-walker/weapons/${nextWeapon.character.slug}`);
    }
  }

  // Reactive: Update navigation when weapon changes
  $: if (currentWeaponSlug) {
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
{#if currentWeaponSlug && prevWeapon && nextWeapon}
  <!-- Mobile Navigation Component -->
  <MobileWeaponNavigation {prevWeapon} {nextWeapon} />
{/if}
