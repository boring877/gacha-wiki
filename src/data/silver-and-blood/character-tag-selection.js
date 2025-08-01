// Silver and Blood Character Tag Selection
// Character Tag Selection functionality for filtering characters by tags

export class CharacterTagSelector {
  constructor(characters = []) {
    this.characters = characters;
    this.selectedTags = new Set();
    this.elements = {};
    this.initialize();
  }

  initialize() {
    // Get DOM elements
    this.elements = {
      tagButtons: document.querySelectorAll('.tag-btn'),
      selectedTagsDisplay: document.getElementById('selected-tags-display'),
      selectedTagsContainer: document.getElementById('selected-tags'),
      clearTagsBtn: document.getElementById('clear-tags'),
      characterResults: document.getElementById('character-results'),
      matchCount: document.getElementById('match-count'),
      characterCards: document.querySelectorAll('.character-card'),
    };

    console.log('Character Tag Selector initialized with:', {
      charactersCount: this.characters.length,
      tagButtons: this.elements.tagButtons.length,
      characterCards: this.elements.characterCards.length,
    });

    // Bind event listeners
    this.bindEvents();

    // Initial update
    this.updateResults();
  }

  bindEvents() {
    // Tag selection events
    this.elements.tagButtons.forEach(button => {
      button.addEventListener('click', () => this.handleTagClick(button));
    });

    // Clear all tags
    if (this.elements.clearTagsBtn) {
      this.elements.clearTagsBtn.addEventListener('click', () => this.clearAllTags());
    }
  }

  handleTagClick(button) {
    const tag = button.dataset.tag;
    console.log('Tag clicked:', tag);

    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
      button.classList.remove('active');
      console.log('Removed tag:', tag);
    } else {
      this.selectedTags.add(tag);
      button.classList.add('active');
      console.log('Added tag:', tag);
    }

    console.log('Selected tags:', Array.from(this.selectedTags));
    this.updateSelectedTagsDisplay();
    this.updateResults();
  }

  clearAllTags() {
    this.selectedTags.clear();
    this.elements.tagButtons.forEach(btn => btn.classList.remove('active'));
    this.updateSelectedTagsDisplay();
    this.updateResults();
    console.log('Cleared all tags');
  }

  updateSelectedTagsDisplay() {
    if (!this.elements.selectedTagsDisplay || !this.elements.selectedTagsContainer) return;

    if (this.selectedTags.size === 0) {
      this.elements.selectedTagsDisplay.style.display = 'none';
      return;
    }

    this.elements.selectedTagsDisplay.style.display = 'block';
    this.elements.selectedTagsContainer.innerHTML = Array.from(this.selectedTags)
      .map(
        tag =>
          `<span class="selected-tag">${tag} <button class="remove-tag" data-tag="${tag}">×</button></span>`
      )
      .join('');

    // Add remove tag functionality
    this.elements.selectedTagsContainer.querySelectorAll('.remove-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        this.selectedTags.delete(tag);
        this.elements.tagButtons.forEach(tagBtn => {
          if (tagBtn.dataset.tag === tag) {
            tagBtn.classList.remove('active');
          }
        });
        this.updateSelectedTagsDisplay();
        this.updateResults();
      });
    });
  }

  updateResults() {
    console.log('Updating results with selected tags:', Array.from(this.selectedTags));
    let visibleCount = 0;

    this.elements.characterCards.forEach(card => {
      try {
        const characterTags = JSON.parse(card.dataset.tags || '[]');
        console.log('Character:', card.dataset.characterId, 'Tags:', characterTags);

        // Check if character has ALL selected tags
        const hasAllTags =
          this.selectedTags.size === 0 ||
          Array.from(this.selectedTags).every(tag => characterTags.includes(tag));

        if (hasAllTags) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      } catch (error) {
        console.error('Error parsing character tags:', error, card);
        card.style.display = 'block'; // Show by default if error
        visibleCount++;
      }
    });

    console.log('Visible count:', visibleCount);

    // Update match count
    const countText = visibleCount === 1 ? '1 character found' : `${visibleCount} characters found`;
    if (this.elements.matchCount) {
      this.elements.matchCount.textContent = countText;
    }
  }

  // Utility methods
  getSelectedTags() {
    return Array.from(this.selectedTags);
  }

  selectTags(tags) {
    tags.forEach(tag => {
      this.selectedTags.add(tag);
      this.elements.tagButtons.forEach(button => {
        if (button.dataset.tag === tag) {
          button.classList.add('active');
        }
      });
    });
    this.updateSelectedTagsDisplay();
    this.updateResults();
  }

  // Get all unique tags from characters
  static getAllTags(characters) {
    return [...new Set(characters.flatMap(char => char.tags || []))].sort();
  }
}

// Export configuration for the tool
export const tagSelectionConfig = {
  meta: {
    title: 'Character Tag Selection',
    description: 'Filter Silver and Blood characters by their combat tags and abilities',
  },
  options: {
    requireAllTags: true, // Characters must have ALL selected tags
    sortTagsAlphabetically: true,
  },
};

// Helper function to initialize the tag selector
export function initializeCharacterTagSelector(characters = []) {
  console.log('Initializing Character Tag Selector...');
  return new CharacterTagSelector(characters);
}
