# Zone Nova Character Template Guide

## Overview
This guide explains how to use `zone-nova-character-template.astro` to quickly create new character pages with consistent formatting and styling.

## Quick Start
1. Copy `zone-nova-character-template.astro` to `src/pages/guides/zone-nova/characters/[character-name].astro`
2. Replace all `[PLACEHOLDER]` values with character-specific information
3. Update the character listing page to include the new character

## Required Information

### Basic Character Info
- `[CHARACTER_NAME]` - Character's name (e.g., "Mordred")
- `[CHARACTER_IMAGE]` - Image filename without extension (e.g., "mordred")
- `[DESCRIPTION]` - Brief role description (e.g., "HP-scaling Fire Assault")
- `[RARITY]` - SR, SSR, etc.
- `[ELEMENT]` - Fire, Water, Earth, Wind, Light, Dark
- `[CLASS]` - Assault, Tank, Healer, Support, Destroyer, Guerrilla
- `[FACTION]` - Avalon, etc.

### Stats
- `[BASE_HP]` - Level 80 base HP (e.g., "8,470")
- `[BASE_ATTACK]` - Level 80 base Attack (e.g., "837")
- `[BASE_DEFENSE]` - Level 80 base Defense (e.g., "560")

### Skills (4 total)
- `[NORMAL_ATTACK_NAME]` - Normal attack skill name
- `[AUTO_SKILL_NAME]` - Auto skill name
- `[ULTIMATE_NAME]` - Ultimate skill name
- `[PASSIVE_NAME]` - Passive skill name
- `[COOLDOWN]` - Cooldown in seconds (e.g., "2.0s")
- `[ENERGY_COST]` - Energy cost for ultimate (e.g., "5")
- `[SKILL_DESCRIPTION]` - Full description with scaling and effects

### Team Composition
- `[EMOJI]` - Emoji representing the team theme (🏰 for Avalon, 🔥 for Fire, etc.)
- `[TEAM_REQUIREMENT_1]` - First team requirement (e.g., "2 [Avalon] characters")
- `[TEAM_REQUIREMENT_2]` - Second team requirement (e.g., "2 [Burn] characters")
- `[TEAM_EFFECT_1]` - First team effect (e.g., "Self attack increased by 10%")
- `[TEAM_EFFECT_2]` - Second team effect (e.g., "Healing amount increased by 12.5%")
- `[TEAM_SKILL_EXPLANATION]` - Why the team skill matters and strategy

### Awakening Effects (6 total)
For each awakening 1-6:
- `[AWAKENING_X_EFFECT]` - The mechanical effect (e.g., "HP increased by 30%")
- `[AWAKENING_X_EXPLANATION]` - Why it's useful and how it fits the kit

Special formatting for important awakenings:
- `[CRITICAL_CLASS_IF_NEEDED]` - Add "critical-awakening" for important ones
- `[PRIORITY_EMOJI]` - Add "🌟" for critical/highly recommended awakenings  
- `[PRIORITY_LABEL]` - Add "(CRITICAL)" or "(HIGHLY RECOMMENDED)"

### Builds (3 recommended)
For each build:
- `[BUILD_X_NAME]` - Build name (e.g., "HP Scaling Focus")
- `[RUNE_SET_X]` - Rune set name with Chinese (e.g., "4-Piece Zahn (札恩)")
- `[RUNE_SET_X_EFFECTS]` - Set effects (e.g., "HP +8%, After Ultimate: Take 5% less damage")
- `[BUILD_X_EXPLANATION]` - When to use this build

### Main Stats
- `[MAIN_STAT_4]` - Position 4 main stat (e.g., "HP%")
- `[MAIN_STAT_5]` - Position 5 main stat (e.g., "HP%") 
- `[MAIN_STAT_6]` - Position 6 main stat (e.g., "HP%")

### Substat Priorities
- `[SUBSTAT_PRIORITY_1-5]` - Ordered list of substat priorities (e.g., "HP%", "HP (Flat)")
- `[SUBSTAT_EXPLANATION]` - Explanation of why these stats matter for the character

### Memory Card
- `[MEMORY_CARD_NAME]` - Memory card name (e.g., "Behind the Regret")
- `[MEMORY_CARD_IMAGE]` - Memory card image filename (e.g., "mordredcard")
- `[MEMORY_HP/ATTACK/DEFENSE]` - Memory card base stats
- `[MEMORY_EFFECT_1-3]` - Memory card effects
- `[MEMORY_RARITY]` - Memory card rarity/restriction info
- `[MEMORY_CARD_EXPLANATION]` - Why this memory card works well

### Usage Tips
- `[STRENGTH_1-5]` - Character strengths (5 bullet points)
- `[STRATEGY_1-5]` - Combat strategies (5 bullet points)
- `[WARNING_TITLE]` - Warning box title (e.g., "🔄 Core Loop")
- `[WARNING_CONTENT]` - Warning box content

### Investment Priority
- `[INVESTMENT_PRIORITY_LEVEL]` - Priority level (e.g., "Excellent Investment")
- `[INVESTMENT_EXPLANATION]` - Overall investment recommendation
- `[CRITICAL_AWAKENING_TITLE]` - Critical awakening section title
- `[CRITICAL_AWAKENING_EXPLANATION]` - Why certain awakenings are critical
- `[WITHOUT_CRITICAL_AWAKENINGS]` - Performance without key awakenings
- `[WITH_CRITICAL_AWAKENINGS]` - Performance with key awakenings
- `[HIGH/MEDIUM/LOW_PRIORITY_AWAKENING]` - Awakening priorities with explanations
- `[SYNERGY_TITLE]` - Synergy box title
- `[SYNERGY_EXPLANATION]` - How key awakenings work together

## CSS Classes Reference

### Section Structure
- `content-section` - Main section container
- `section-title` - H2 section titles
- `subsection-title` - H3 subsection titles
- `skill-title` - H3 skill/awakening titles

### Card Types
- `info-card` - General information cards
- `skill-card` - Skill description cards
- `awakening-card` - Awakening cards
- `critical-awakening` - Important awakening cards (add to awakening-card)

### Special Elements
- `stats-grid` - Grid container for stats
- `stat-item` - Individual stat containers
- `stat-label` - Stat name labels
- `stat-value` - Stat value numbers
- `warning-box` - Warning/highlight boxes
- `warning-title` - Warning box titles

### Priority Classes
- `priority-high` - High priority (red text)
- `priority-medium` - Medium priority (yellow text)  
- `priority-low` - Low priority (gray text)

## Color Scheme
- `var(--amber-glow)` - Primary highlight color
- `var(--teal-crystal)` - Secondary highlight color
- `var(--text-primary)` - Main text color
- `var(--text-secondary)` - Secondary text color
- `var(--bg-primary)` - Primary background
- `var(--bg-secondary)` - Secondary background

## Standard Section Order
1. Character Overview
2. Skills
3. Team Composition Skill
4. Awakening Effects  
5. Recommended Builds
6. Memory Card
7. Usage Tips
8. Investment Priority

## Adding to Character Listing
After creating the character page, add them to `src/pages/guides/zone-nova/characters.astro`:

```html
<div class="character-card" data-name="[CHARACTER_NAME]" data-rarity="[RARITY_LOWERCASE]" data-role="[ROLE_LOWERCASE]" data-element="[ELEMENT_LOWERCASE]">
    <a href="/guides/zone-nova/characters/[character-name-lowercase]">
        <img src="/images/characters/[CHARACTER_IMAGE].jpg" alt="[CHARACTER_NAME]" loading="lazy" />
        <div class="character-info">
            <h3>[CHARACTER_NAME]</h3>
            <p>[RARITY] [ELEMENT] [CLASS]</p>
        </div>
    </a>
</div>
``` 