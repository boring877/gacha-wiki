# Horizon Walker Character Names Reference

# This file helps maintain consistent naming across character data, images, and references

# Format: Character Name | Image Filename | Data Export | Page Slug | Notes

# =================================================================================================

# Characters with consistent naming (Template)

# =================================================================================================

Araha | Araha | arahaData | araha | Simple name, no issues Bella | Bella |
bellaData | bella | Simple name, no issues Berga | Berga | bergaData | berga |
Simple name, no issues Cora | Cora | coraData | cora | Simple name, no issues

# Characters with special naming considerations

# =================================================================================================

# Jua - Character is named "Juha" (not "Jua")

Juha | Juha | juhaData | juha | IMPORTANT: Character name is "Juha", not "Jua".
Story text uses "Juha". File is jua.js due to naming limitations.

# Korean Names - Use underscores for spaces, maintain consistent capitalization

# =================================================================================================

Kim Ga-young | Kim_Ga_Young | kimGaYoungData | kim-ga-young | Korean name with
spaces, use underscores in filename Yeon Chae-Young | Yeon_Chae_Young |
yeonChaeYoungData | yeon-chae-young | Korean name with hyphen, use underscores
in filename Min Eun-sol | Min_Eun_sol | minEunSolData | min-eun-sol | Korean
name with hyphen, use underscores in filename So Joo-hee | So_Joo_hee |
soJooHeeData | so-joo-hee | Korean name with hyphen, use underscores in filename

# Multi-word names

# =================================================================================================

Headless Knight | Headless_Knight | headlessKnightData | headless-knight |
Multi-word name, use underscore TX-Manticore | TX-Manticore | txManticoreData |
tx-manticore | Hyphenated name, keep hyphen in filename Imperial Shieldbearer |
Imperial_Shieldbearer_Mercenary | imperialShieldbearerData |
imperial-shieldbearer | Mercenary variant, add suffix

# Naming Rules:

# =================================================================================================

# 1. Character Display Name: Use proper capitalization, spaces, and hyphens as needed

# 2. Image Filename: Use TitleCase, replace spaces with underscores, maintain hyphens

# 3. Data Export: camelCase for JavaScript exports, maintain name structure

# 4. Page Slug: lowercase with hyphens for URLs

# 5. File Names: lowercase with hyphens for .js and .astro files

# Examples:

# Display Name: "Kim Ga-young"

# - Image File: "Kim_Ga_Young.jpg"

# - Data Export: "kimGaYoungData"

# - Page Slug: "kim-ga-young"

# - Data File: "kim-ga-young.js"

# - Astro File: "kim-ga-young.astro"

# Weapon Naming:

# =================================================================================================

# Weapon images follow pattern: {CharacterName}\_WP.jpg

# Example: Juha_WP.jpg, Kim_Ga_Young_WP.jpg

# Common Mistakes to Avoid:

# =================================================================================================

# 1. "Jua" vs "Juha" - Character is named "Juha", not "Jua"

# 2. Korean names with inconsistent spacing/hyphenation

# 3. Mixed case in filenames (be consistent with TitleCase)

# 4. Forgetting to update all references when changing names

# Files to update when adding new characters:

# =================================================================================================

# 1. Character data file: src/data/horizon-walker/characters/{name}.js

# 2. Character page: src/pages/guides/horizon-walker/characters/{name}.astro

# 3. Image file: public/images/games/horizon-walker/characters/{filename}.jpg

# 4. Weapon file: public/images/games/horizon-walker/weapons/{filename}\_WP.jpg

# 5. Update weapons.js if character has weapon data

# 6. Update this reference file

# Validation Checklist:

# =================================================================================================

# [ ] Character name in data file matches official name

# [ ] Image filename matches actual image file

# [ ] Data export uses consistent camelCase

# [ ] Page slug uses lowercase hyphens

# [ ] All imports/exports use correct names

# [ ] Weapon references use correct naming pattern

# [ ] Build completes without errors

# [ ] Character page loads and displays image correctly
