// Stella Sora Blog Data
// This file contains all blog posts for the Stella Sora section

export const blogConfig = {
  meta: {
    title: 'Blog | Stella Sora',
    description: 'Tips, strategies, and insights for Stella Sora players',
    gameTitle: 'Blog',
  },

  posts: [
    {
      slug: 'gift-recommendation-guide',
      title: 'Stella Sora Gift Recommendation Guide',
      description:
        'Complete guide to the affinity and gift system. Learn which gifts to use, how to maximize your investment, and why level 30 is the optimal target.',
      author: 'Boring877',
      publishDate: '2025-12-18',
      category: 'Guide',
      tags: ['gifts', 'affinity', 'beginner', 'strategy'],
      content: `
        <h2>Understanding Affinity</h2>
        <p>Each character in Stella Sora has an Affinity system, which you can find on their individual character pages. Affinity functions similarly to intimacy or a personal bond with your character.</p>
        <p>What makes this system particularly important is that affinity actually improves your character's damage and HP. The stat increases are quite significant and well worth investing in. However, maxing out a single character requires considerable time and resources, so planning ahead is essential.</p>
        <p>Based on our observations (without access to the game's source code), we know there are currently 42 affinity levels in total. This appears to be the highest tier available in the game right now, though we expect this cap will increase later with the introduction of 5 star gifts.</p>

        <h2>The Gift System</h2>
        <p>Currently, only 3 star and 4 star gifts are available. These provide a modest amount of affinity points and can be obtained by crafting or purchasing from the event shop. The main limitation is that you can only give 10 gifts per day across all characters.</p>
        <p>This restriction means you need to plan carefully to maximize your benefits without turning the game into a chore. This guide will help you do exactly that.</p>

        <h2>Gift Point Values</h2>
        <p>Each gift provides different points based on its rarity and whether the character loves, tolerates, or hates it.</p>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Rarity</th>
              <th>Loved (+50%)</th>
              <th>Neutral</th>
              <th>Hated (-20%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>3 Star</td><td>225</td><td>150</td><td>120</td></tr>
            <tr><td>4 Star</td><td>750</td><td>500</td><td>400</td></tr>
            <tr><td>5 Star</td><td>3,000</td><td>2,000</td><td>1,600</td></tr>
          </tbody>
        </table>
        <p>Each character has specific gifts they love, which we have detailed on our wiki at guides/stella-sora/character-gifts/.</p>
        <p>Matching the right gift to the right character is crucial because it increases points earned by 50%. Since you are limited to 10 gifts per day, always use the highest quality gifts available. Currently, that means 4 star gifts.</p>
        <p>To illustrate the difference: giving 10 loved 4 star gifts yields 7,500 points. Once 5 star gifts become available, just 3 loved 5 star gifts will provide 9,000 points. The efficiency jump is substantial.</p>

        <h2>The 5 Star Gift Question</h2>
        <p>The main issue is that 5 star gifts are not yet available in the game. We also know that 4 star gifts will be required to craft 5 star gifts, though the exact conversion rate remains unknown.</p>
        <p>This raises an important question: should you save your 4 star gifts for future 5 star crafting, or use them now?</p>
        <p>Our recommendation is to use them now. We have no timeline for when 5 star gifts will be released, and the immediate benefits from raising affinity will help you clear content much faster.</p>

        <h2>Recommended Target: Level 30</h2>
        <p>Level 30 offers the best cost to benefit ratio in the entire affinity system. You gain the most significant ATK and HP increases relative to the investment required.</p>

        <h3>Points Required Per Level</h3>
        <p>Total points to max (Lv. 42): <strong>1,020,900</strong></p>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Level Range</th>
              <th>Points Per Level</th>
              <th>Cumulative Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lv. 1</td><td>200</td><td>200</td></tr>
            <tr><td>Lv. 2</td><td>300</td><td>500</td></tr>
            <tr><td>Lv. 3</td><td>500</td><td>1,000</td></tr>
            <tr><td>Lv. 4</td><td>900</td><td>1,900</td></tr>
            <tr><td>Lv. 5 to 9</td><td>1,000</td><td>6,900</td></tr>
            <tr><td>Lv. 10 to 14</td><td>2,000</td><td>16,900</td></tr>
            <tr><td>Lv. 15 to 19</td><td>4,000</td><td>36,900</td></tr>
            <tr><td>Lv. 20 to 24</td><td>8,000</td><td>76,900</td></tr>
            <tr><td>Lv. 25 to 29</td><td>16,000</td><td>156,900</td></tr>
            <tr><td>Lv. 30 to 34</td><td>32,000</td><td>316,900</td></tr>
            <tr><td>Lv. 35 to 39</td><td>64,000</td><td>636,900</td></tr>
            <tr><td>Lv. 40 to 42</td><td>128,000</td><td>1,020,900</td></tr>
          </tbody>
        </table>
        <p>As you can see, reaching level 42 requires almost 1 million points. These calculations are based on our observations, as we have not examined the source code directly.</p>

        <h3>Why Level 30?</h3>
        <p>To reach level 30, you only need <strong>188,900</strong> points. This gets you all the ATK% bonuses at roughly 31% of the total cost to max.</p>

        <h3>Gifts Required for Level 30</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Gift Type</th>
              <th>Gifts Needed</th>
              <th>Days Required</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>3 Star Loved (225 pts)</td><td>840 gifts</td><td>84 days</td></tr>
            <tr><td>3 Star Neutral (150 pts)</td><td>1,260 gifts</td><td>126 days</td></tr>
            <tr><td>3 Star Hated (120 pts)</td><td>1,575 gifts</td><td>158 days</td></tr>
            <tr><td>4 Star Loved (750 pts)</td><td>252 gifts</td><td>26 days</td></tr>
            <tr><td>4 Star Neutral (500 pts)</td><td>378 gifts</td><td>38 days</td></tr>
            <tr><td>4 Star Hated (400 pts)</td><td>473 gifts</td><td>48 days</td></tr>
            <tr><td>5 Star Loved (3,000 pts)</td><td>63 gifts</td><td>7 days</td></tr>
            <tr><td>5 Star Neutral (2,000 pts)</td><td>95 gifts</td><td>10 days</td></tr>
            <tr><td>5 Star Hated (1,600 pts)</td><td>119 gifts</td><td>12 days</td></tr>
          </tbody>
        </table>

        <h3>Stats at Level 30</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>ATK</td><td>+1,080</td></tr>
            <tr><td>HP</td><td>+10,020</td></tr>
            <tr><td>ATK%</td><td>+24%</td></tr>
          </tbody>
        </table>
        <p>This requires almost 10 times fewer gifts than maxing out completely. Using 4 star loved gifts, you can reach level 30 in just 26 days.</p>

        <h2>Conclusion</h2>
        <p>Focus on reaching level 30 affinity using 4 star loved gifts. This target provides excellent stat bonuses at a fraction of the total investment required for max level. Do not hoard your 4 star gifts waiting for 5 star crafting since the immediate power boost will serve you far better right now.</p>
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
