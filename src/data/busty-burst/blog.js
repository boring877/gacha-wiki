// Busty Burst Fantasy Blog Data
// This file contains all blog posts for the Busty Burst Fantasy section

export const blogConfig = {
  meta: {
    title: 'Blog | Busty Burst Fantasy',
    description: 'Tips, strategies, and insights for Busty Burst Fantasy players',
    gameTitle: 'Blog',
  },

  posts: [
    {
      slug: 'tanks-are-useless-healer-mp-generation',
      title: 'Tanks Are Useless - Healer and MP Generation Is All You Need',
      description:
        "Why you don't need tanks early game and how to spam healing with Festive Attire Estrirel.",
      author: 'Boring877',
      publishDate: '2025-12-18',
      category: 'Strategy',
      tags: ['beginner', 'team-comp', 'healing', 'mp-generation'],
      content: `
        <p>A lot of players try to use Tanks early in the game to absorb hits. They keep dying early and want someone tanky enough to keep the team alive. What they don't realize is that you can use Festive Attire Estrirel to spam her healing ultimate without ever needing a tank.</p>

        <h2>Festive Attire Estrirel - The Infinite Healer</h2>
        <p>Festive Attire Estrirel has high MP Charge, and once you upgrade your Annihilation Grenade weapon to higher levels, the MP Charge improves even further - letting you ultimate much faster.</p>

        <h2>Understanding MP Charge</h2>
        <p>MP Charge means that when you use your skills, you gain 150 MP. The total MP needed to activate your ultimate is 500. With this setup, you'll be able to activate your ultimate every few seconds in each fight, making tanks far less important.</p>

        <h2>Action Speed Matters</h2>
        <p>The game uses Action Speed to determine how quickly you can activate your skills. There are different Action Speed categories:</p>
        <ul>
          <li>Slow</li>
          <li>Slightly Slow</li>
          <li>Normal</li>
          <li>Slightly Fast</li>
          <li>Fast</li>
        </ul>

        <h2>The Perfect Pairing: Liesel</h2>
        <p>Pairing Festive Attire Estrirel with Liesel helps with both MP generation and Action Speed. Once these two units are paired together and built properly, you won't need a tank at all.</p>
        <p>Liesel also needs her Annihilation Staff upgraded enough to boost her MP Charge. Her Action Speed is Normal.</p>

        <h2>The Result</h2>
        <p>Both units need sufficient weapon upgrades to reach enough MP Charge so you can spam both of their ultimates. This creates a cycle of constant healing and MP generation - no tank required, just good damage dealers to clear content fast!</p>
      `,
    },
    {
      slug: 'busty-day-special-event-guide',
      title: 'Busty Day - Special Event Guide',
      description:
        'Complete guide to the Busty Day recurring monthly event with all bonuses and rewards.',
      author: 'Boring877',
      publishDate: '2025-12-18',
      category: 'Event',
      tags: ['event', 'busty-day', 'bonuses', 'rewards'],
      content: `
        <p>Busty Day is a recurring monthly event that takes place on every "8 Day" - the 8th, 18th, and 28th of each month. During this event, all limited content becomes available along with a variety of bonuses to help you progress faster.</p>

        <h2>Permanent Bonuses</h2>
        <p>These bonuses are active throughout the entire Busty Day event:</p>
        <ul>
          <li><strong>Main Story Drop Rate</strong> - x2</li>
          <li><strong>Ruins Drop Rate</strong> - x2</li>
          <li><strong>Dispatch Rewards</strong> - x2</li>
          <li><strong>All Paladin Training Boost</strong> - Active</li>
          <li><strong>Limited-Time Stage</strong> - Open</li>
          <li><strong>Rainbow Chest in Raid Battle Rewards</strong> - +1</li>
        </ul>

        <h2>Daily Rotating Bonuses</h2>
        <p>These bonuses rotate and are highlighted during their active window:</p>
        <ul>
          <li><strong>Resource Collection Drop Rate</strong> - x2</li>
          <li><strong>Resource Collection Reset Cost</strong> - 50% OFF</li>
          <li><strong>Daily Mission Rewards</strong> - x2</li>
          <li><strong>AP & BP Recovery Cost</strong> - 50% OFF</li>
          <li><strong>Limited-Time Packs</strong> - On Sale</li>
          <li><strong>Limited-Time Exchange Shop</strong> - Open</li>
        </ul>

        <h2>Busty Emblems</h2>
        <p>During the event, you earn Busty Emblems based on your AP and BP consumption. These emblems can be exchanged for items at the Limited-Time Exchange Shop.</p>

        <h2>Important Notes</h2>
        <ul>
          <li>If another event with the same effect is already active, the effects will not stack.</li>
          <li>A Limited Step-Up Summon for Memory Crystals is also available during Busty Day.</li>
        </ul>
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
