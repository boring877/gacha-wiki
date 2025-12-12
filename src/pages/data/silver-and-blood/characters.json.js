// Silver and Blood Characters API Endpoint
// Generates /data/silver-and-blood/characters.json

// Import all character modules dynamically
const characterModules = import.meta.glob('../../../data/silver-and-blood/characters/*.js', {
  eager: true,
});

export const prerender = true;

export async function GET() {
  const characters = [];

  for (const [path, module] of Object.entries(characterModules)) {
    // Find the character export (usually the default or first object export)
    const charData = Object.values(module).find(
      exp => exp && typeof exp === 'object' && exp.name && exp.skills
    );

    if (charData) {
      characters.push({
        id: charData.id,
        name: charData.name,
        title: charData.title,
        subtitle: charData.subtitle,
        description: charData.description,
        image: charData.image,
        tags: charData.tags,

        // Game mechanics
        rarity: charData.rarity,
        class: charData.class,
        faction: charData.faction,
        equipmentType: charData.equipmentType,
        moonPhase: charData.moonPhase,
        attackType: charData.attackType,

        // Stats
        stats: charData.stats,

        // Skills
        skills: charData.skills,

        // Mechanics info
        mechanics: charData.mechanics,
      });
    }
  }

  // Sort alphabetically by name
  characters.sort((a, b) => a.name.localeCompare(b.name));

  // Build metadata from actual data
  const metadata = {
    rarities: [...new Set(characters.map(c => c.rarity).filter(Boolean))].sort(),
    classes: [...new Set(characters.map(c => c.class).filter(Boolean))].sort(),
    factions: [...new Set(characters.map(c => c.faction).filter(Boolean))].sort(),
    moonPhases: [...new Set(characters.map(c => c.moonPhase).filter(Boolean))].sort(),
    attackTypes: [...new Set(characters.map(c => c.attackType).filter(Boolean))].sort(),
    equipmentTypes: [...new Set(characters.map(c => c.equipmentType).filter(Boolean))].sort(),
  };

  const response = {
    game: 'Silver and Blood',
    type: 'characters',
    count: characters.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    characters,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
