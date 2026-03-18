// Silver and Blood Blog Data
// This file contains all blog posts for the Silver and Blood section

export const blogConfig = {
  meta: {
    title: 'Blog | Silver and Blood',
    description: 'Tips, strategies, and insights for Silver and Blood players',
    gameTitle: 'Blog',
  },

  posts: [
    {
      slug: 'beginner-guide',
      title: 'Silver and Blood Beginner Guide',
      description:
        'Complete beginner guide covering story maps, leveling, equipment, skills, artifacts, dungeons, PvP, summons, and shop recommendations.',
      author: 'Boring877',
      publishDate: '2025-07-17',
      category: 'Guide',
      tags: ['beginner', 'guide', 'tips', 'new-player'],
      content: `
        <h2>Video Guide</h2>
        <p>This beginner guide is based on the video below. Use the timestamps to jump to specific sections.</p>
        <div class="sab-blog-video-embed">
          <p><em>Video embed placeholder — add your video URL here.</em></p>
        </div>

        <h2>Timestamps</h2>
        <table class="sab-blog-table">
          <thead>
            <tr><th>Time</th><th>Topic</th></tr>
          </thead>
          <tbody>
            <tr><td>0:00</td><td>Introduction</td></tr>
            <tr><td>0:30</td><td>Story Maps & Progression</td></tr>
            <tr><td>2:15</td><td>Leveling Up</td></tr>
            <tr><td>4:00</td><td>Equipment Basics</td></tr>
            <tr><td>6:30</td><td>Skills & Upgrades</td></tr>
            <tr><td>8:45</td><td>Artifacts</td></tr>
            <tr><td>11:00</td><td>Dungeons</td></tr>
            <tr><td>13:20</td><td>PvP Overview</td></tr>
            <tr><td>15:00</td><td>Summoning</td></tr>
            <tr><td>17:30</td><td>Shop Recommendations</td></tr>
          </tbody>
        </table>

        <h2>Key Takeaways</h2>
        <ul>
          <li>Focus on clearing story maps first to unlock game modes.</li>
          <li>Don't spread resources thin — upgrade a core team of 5-6 units.</li>
          <li>Save premium currency for synergy leaders when possible.</li>
          <li>Dungeons reset daily, so don't miss your free runs.</li>
        </ul>
      `,
    },
    {
      slug: 'summon-guide-synergy-leaders',
      title: 'Summon Guide: Why Synergy Leaders Are Top Priority',
      description:
        'Explains why synergy leaders should be your first summoning priority and how to manage your gems effectively.',
      author: 'Boring877',
      publishDate: '2025-07-20',
      category: 'Guide',
      tags: ['summon', 'synergy', 'gems', 'priority'],
      content: `
        <h2>Why Synergy Leaders First?</h2>
        <p>Synergy leaders provide powerful team-wide bonuses that scale with your entire roster. A good synergy leader can boost your team's damage, survivability, or utility by a significant margin, making them more impactful than individual DPS units early on.</p>
        <p>Without a synergy leader, your team is missing out on free stats and effects that make content significantly easier. Prioritize getting at least one solid synergy leader before spending on other units.</p>

        <h2>Gem Management</h2>
        <p>Gems are your premium summoning currency, so spending them wisely matters:</p>
        <ul>
          <li><strong>Save for rate-up banners</strong> — never spend gems on the standard banner if a rate-up banner is coming soon.</li>
          <li><strong>Pity matters</strong> — track your pity counter and don't pull on a new banner if you're close to pity on the current one.</li>
          <li><strong>Set a budget</strong> — decide how many pulls you're willing to spend per banner and stick to it.</li>
        </ul>

        <h2>Synergy Priority Recommendations</h2>
        <p>Focus on synergy leaders that match the elements and team types you're already building. A synergy leader that doesn't fit your current roster is less valuable than one that amplifies what you already have.</p>
      `,
    },
    {
      slug: 'ancestral-vault-overview',
      title: 'Ancestral Vault Overview',
      description:
        'Overview of the Ancestral Vault system including costs for Sirin, Julius, and Flora, clan quests, and whether it is worth stressing over.',
      author: 'Boring877',
      publishDate: '2025-07-25',
      category: 'Guide',
      tags: ['ancestral-vault', 'sirin', 'julius', 'flora', 'clan'],
      content: `
        <h2>What Is the Ancestral Vault?</h2>
        <p>The Ancestral Vault is an end-game collection system where you earn copies of powerful characters over time through clan contributions and quests.</p>

        <h2>Character Costs</h2>
        <table class="sab-blog-table">
          <thead>
            <tr><th>Character</th><th>Cost per Copy</th></tr>
          </thead>
          <tbody>
            <tr><td>Sirin</td><td>10,000 Vault Points</td></tr>
            <tr><td>Julius</td><td>10,000 Vault Points</td></tr>
            <tr><td>Flora</td><td>20,000 Vault Points</td></tr>
          </tbody>
        </table>
        <p>Note that Flora costs double — she is a separate character with her own unique kit, not a variant of Sirin.</p>

        <h2>Earning Points</h2>
        <p>Vault points are primarily earned through clan quests. Stay active in your clan and contribute regularly to accumulate points over time. The system is designed to be a long-term progression path, not something you rush.</p>

        <h2>Should You Worry About It?</h2>
        <p>No. The Ancestral Vault is a marathon, not a sprint. Focus on your immediate team needs and daily progression. The vault points will accumulate naturally as you play. There is no need to grind specifically for vault points — just participate in clan activities and let the points come in over time.</p>
      `,
    },
    {
      slug: 'defense-formulas',
      title: 'Defense Formulas Explained',
      description:
        'Breakdown of the damage formula in Silver and Blood, including the K=1300 constant and how damage reduction compares to flat defense.',
      author: 'Boring877',
      publishDate: '2025-08-01',
      category: 'Mechanics',
      tags: ['damage', 'defense', 'formula', 'mechanics'],
      content: `
        <h2>The Damage Formula</h2>
        <p>Damage in Silver and Blood follows a standard formula:</p>
        <p><strong>Damage = ATK &times; Skill Multiplier &times; (K / (K + DEF))</strong></p>
        <p>Where <strong>K = 1300</strong> is a constant that determines how quickly defense has diminishing returns.</p>

        <h2>How Defense Works</h2>
        <p>Defense reduces incoming damage through the ratio <code>K / (K + DEF)</code>. This means:</p>
        <ul>
          <li>At 0 DEF, you take 100% damage.</li>
          <li>At 1300 DEF (K), you take 50% damage.</li>
          <li>At 2600 DEF (2K), you take 33% damage.</li>
          <li>At 3900 DEF (3K), you take 25% damage.</li>
        </ul>
        <p>Each additional 1300 DEF provides less relative damage reduction than the last. This is the diminishing returns curve inherent to the formula.</p>

        <h2>Damage Reduction vs Defense</h2>
        <p>% Damage Reduction (DR) is more powerful per point than defense, especially at higher defense values. DR multiplies directly with your effective HP, while defense follows the diminishing curve above.</p>
        <p>In general, if you have a choice between a small amount of defense or a small amount of DR, DR is usually better. However, defense is typically easier to stack in large quantities through equipment.</p>
      `,
    },
    {
      slug: 'end-game-gear-upgrades',
      title: 'End-Game Gear Upgrades',
      description:
        'Guide to end-game gear including the SoulsStrike hammer, slot rates, blessing rates, priorities, and tier values.',
      author: 'Boring877',
      publishDate: '2025-08-10',
      category: 'Guide',
      tags: ['gear', 'upgrade', 'soulsstrike', 'blessing', 'end-game'],
      content: `
        <h2>SoulsStrike Hammer</h2>
        <p>The SoulsStrike hammer is used to add or upgrade slots on your equipment. It is one of the most valuable end-game resources, so use it wisely on gear you plan to keep long-term.</p>

        <h2>Slot Rates</h2>
        <p>Adding slots to gear has varying success rates depending on the current number of slots and the gear tier. Higher slot counts have lower success rates, so plan your upgrades around gear you're confident in keeping.</p>

        <h2>Blessings</h2>
        <p>Blessings are additional enchantments you can apply to gear. They provide significant stat boosts and can define a build.</p>

        <h3>Blessing Rates</h3>
        <p>Higher-tier blessings have lower success rates. Failed attempts may result in the blessing staying at its current tier or, in some cases, being downgraded. Always check the specific rates before attempting an upgrade.</p>

        <h3>Blessing Priority</h3>
        <p>Prioritize blessings that align with your character's role and build. Offensive blessings for DPS units, defensive blessings for tanks, and utility blessings for support. Don't spread your resources across too many pieces — focus on your core gear first.</p>

        <h3>Blessing Tier Values</h3>
        <p>Each blessing tier provides a noticeable jump in power. The gap between tiers scales up, making higher tiers increasingly valuable relative to their cost.</p>
      `,
    },
    {
      slug: 'escaping-the-other-side',
      title: 'Escaping the Other Side Guide',
      description:
        'Comprehensive guide to the Escaping the Other Side event covering soulshards, maps, consumables, equipment, and ranking rewards.',
      author: 'Boring877',
      publishDate: '2025-08-15',
      category: 'Guide',
      tags: ['event', 'soulshards', 'maps', 'equipment', 'rewards'],
      content: `
        <h2>Overview</h2>
        <p>Escaping the Other Side is a limited-time event with its own progression system. This guide covers the key resources and rewards available.</p>

        <h2>Soulshards</h2>
        <p>Soulshards are the main collectible in this event. They are divided into three categories:</p>

        <h3>Offensive Soulshards</h3>
        <p>These enhance your damage output. Prioritize these on your main DPS units to clear event content faster.</p>

        <h3>Defensive Soulshards</h3>
        <p>These improve survivability. Useful for tankier units or when struggling with event boss damage.</p>

        <h3>Support Soulshards</h3>
        <p>These provide utility bonuses like healing, cooldown reduction, or energy regeneration. Helpful for support characters in your event team.</p>

        <h2>Maps</h2>
        <p>The event features multiple maps with increasing difficulty. Each map has specific soulshard types available. Plan your route based on which soulshards your team needs most.</p>

        <h2>Consumables</h2>
        <p>Event consumables can be used during maps to provide temporary buffs. Save the stronger consumables for harder maps where they make the biggest difference.</p>

        <h2>Equipment</h2>
        <p>Event-specific equipment can be earned and upgraded during the event. This gear is useful for clearing higher difficulty maps and can sometimes be used outside the event as well.</p>

        <h2>Ranking Rewards</h2>
        <p>Higher placements on the event leaderboard grant better rewards. Focus on clearing content efficiently rather than rushing — consistent daily progress is more important than a single strong session.</p>
      `,
    },
  ],
};

// Helper functions
export const getPostBySlug = slug => {
  return blogConfig.posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return blogConfig.posts;
};

export const getPostsByCategory = category => {
  return blogConfig.posts.filter(post => post.category === category);
};

export const getPostsByTag = tag => {
  return blogConfig.posts.filter(post => post.tags.includes(tag));
};
