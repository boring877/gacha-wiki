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
    {
      slug: 'xmas-raid-guide-maid-for-you',
      title: 'Xmas Raid Guide: How to Clear 100 Points in Maid for You',
      description:
        'Complete guide to clearing the Christmas raid event with 100 points. Tips for team building, affix selection, and strategies for both F2P and spending players.',
      author: 'Boring877',
      publishDate: '2025-12-24',
      category: 'Guide',
      tags: ['raid', 'event', 'christmas', 'fuyuka', 'ignis', 'strategy'],
      content: `
        <h2>Xmas Raid Event Overview</h2>
        <p>It's the end of the year and we have a Christmas event! This Xmas brings many cool things, including the new "Maid for You" Raid event type. In this raid, you choose Affixes to increase the boss difficulty or modify your skills. Some affixes can actually improve your damage output in certain ways.</p>
        <p>The goal is to complete the Raid Quest by beating the boss with <strong>100 points</strong>. Adding affixes gives you points, and once you reach 100 points you can finish the quest. This is the most challenging quest of them all - the rest are fairly simple and don't require too much thought, unless you just started the game.</p>

        <h2>Tip 1: Use an Ignis Team</h2>
        <p>The first tip is to use an Ignis-type team. This allows you to break the boss's resilience much faster, enabling you to deal massive amounts of damage during the break window.</p>

        <h2>Tip 2: Run Fuyuka Ultimate Build</h2>
        <p>Without Fuyuka, you will really struggle to finish the 100-point challenge. It's possible but quite hard. Using the Ultimate build makes things much easier - just wait for your ultimate to charge, then one-shot the boss!</p>

        <h2>Tip 3: Use Flora and Snowish Laru as Support</h2>
        <p>Flora provides buffs, damage increase, crit rate, and crit damage to help you deal more damage. Snowish Laru uses her minion to tank and deal damage. You can replace Snowish Laru, but she is really helpful here.</p>

        <h2>My Build Setup</h2>
        <p>Here are the potentials I used to clear this raid:</p>

        <h3>Fuyuka - Ultimate Build</h3>
        <p><strong>Core Potentials (Lv 1):</strong> Kitty Punch, Multi-Shot Blast, Combo Punch, Pyro Mark</p>
        <p><strong>Generic Potentials (Lv 6):</strong> Finishing Blow, Blazing Heart, Ironfist Blow, Peak Performance, Swirling Counterattack, Bold Challenge</p>

        <h3>Flora - Crit Build</h3>
        <p><strong>Core Potentials:</strong> Ashes of the Past, Ember of Tomorrow</p>
        <p><strong>Normal Potentials (Lv 6):</strong> Reinforced Impression, Visual Impact, Perfect Acting, Foreshadowing Verification, Guest Performer, Everlasting Show</p>

        <h3>Snowish Laru - Support Build</h3>
        <p><strong>Core Potentials:</strong> Fire Downpour, Special Ammo</p>
        <p><strong>Normal Potentials (Lv 6):</strong> Two-Gun Salute, Uplifting Shot, Fairy Tale Rule, Celebration Resumed</p>

        <h2>Tip 4: Wait for Last Week Affixes</h2>
        <p>On the last week of the event, new affixes will open. These affixes give you buffs to deal more damage and have more HP. This is the game's way of helping you finish all the quests!</p>

        <h2>Tip 5: Avoid DMG Increases Greater</h2>
        <p>The boss deals a lot of damage, and dodging won't help you much. Do NOT take "DMG Increases Greater" which increases all enemy damage dealt by 40%. This will make survival nearly impossible.</p>

        <h2>Tip 6: Good Offensive Affixes</h2>
        <p><strong>Ultimate Degen Greater</strong> and <strong>Bloodthirst</strong> are both good affixes to take. They give you points without hurting you much. Bloodthirst also provides lifesteal which helps you survive!</p>

        <h2>Tip 7: Safe Affixes to Take</h2>
        <p>The following affixes are safe choices that won't affect you much:</p>
        <ul>
          <li><strong>Protection Wind</strong></li>
          <li><strong>Dodge Debuff</strong></li>
          <li><strong>Skill Vulnerability</strong></li>
          <li><strong>Support Degen Greater</strong></li>
          <li><strong>Battle Enraged</strong> - won't matter much unless your damage is really weak</li>
        </ul>

        <h2>Tip 8: Avoid Shadow Dance Dream Wanderer</h2>
        <p>"Shadow Dance Dream Wanderer" summons more clones, making dodging skills super hard. I don't recommend taking this one!</p>

        <h2>Tip 9: Crit Rate Adjustments Are Great</h2>
        <p>Crit Rate adjustment affixes are great to get. They help increase your crit rate, even if you lose a little damage in exchange.</p>

        <h2>Conclusion</h2>
        <p>You should be able to finish this boss raid and clear everything without spending too much time, whether you're F2P or spending. Don't forget that on the last week of this raid, the game gives you new buffs that will help you clear 100 points!</p>
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
