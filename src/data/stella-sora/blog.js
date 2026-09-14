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
        <p><em>Updated September 2026: the affinity numbers in this guide have been refreshed with data extracted from the game files (v1.15). The affinity cap is now Lv. 99 and the cost curve beyond Lv. 30 was rebalanced by the developers.</em></p>
        <h2>Understanding Affinity</h2>
        <p>Each character in Stella Sora has an Affinity system, which you can find on their individual <a href="/guides/stella-sora/characters/">character pages</a>. Affinity functions similarly to intimacy or a personal bond with your character.</p>
        <p>What makes this system particularly important is that affinity actually improves your character's damage and HP. The stat increases are quite significant and well worth investing in. However, maxing out a single character requires considerable time and resources, so planning ahead is essential.</p>
        <p>The level cap has grown over time: version 1.6 raised it from 50 to 67, and version 1.10 raised it again from 67 to 99, where it stands today. Keep in mind that flat ATK and HP stats stop growing at Lv. 50, and levels 51 to 99 grant no further stats at all.</p>

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
        <p>Each character has specific gifts they love, which we have detailed on our <a href="/guides/stella-sora/character-gifts/">Character Gifts</a> page.</p>
        <p>Matching the right gift to the right character is crucial because it increases points earned by 50%. Since you are limited to 10 gifts per day, always use the highest quality gifts available. Currently, that means 4 star gifts.</p>
        <p>To illustrate the difference: giving 10 loved 4 star gifts yields 7,500 points. Once 5 star gifts become available, just 3 loved 5 star gifts will provide 9,000 points. The efficiency jump is substantial.</p>

        <h2>The 5 Star Gift Question</h2>
        <p>The main issue is that 5 star gifts are not yet available in the game. We also know that 4 star gifts will be required to craft 5 star gifts, though the exact conversion rate remains unknown.</p>
        <p>This raises an important question: should you save your 4 star gifts for future 5 star crafting, or use them now?</p>
        <p>Our recommendation is to use them now. We have no timeline for when 5 star gifts will be released, and the immediate benefits from raising affinity will help you clear content much faster.</p>

        <h2>Recommended Target: Level 30</h2>
        <p>Level 30 offers the best cost to benefit ratio in the entire affinity system. You gain the most significant ATK and HP increases relative to the investment required.</p>

        <h3>Points Required Per Level</h3>
        <p>Total points to max (Lv. 99): <strong>3,028,200</strong>. Each value below is the points needed to reach that level from the previous one.</p>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Level Range</th>
              <th>Points Per Level</th>
              <th>Cumulative Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lv. 1</td><td>100</td><td>100</td></tr>
            <tr><td>Lv. 2</td><td>200</td><td>300</td></tr>
            <tr><td>Lv. 3</td><td>300</td><td>600</td></tr>
            <tr><td>Lv. 4</td><td>500</td><td>1,100</td></tr>
            <tr><td>Lv. 5</td><td>900</td><td>2,000</td></tr>
            <tr><td>Lv. 6 to 10</td><td>1,000</td><td>7,000</td></tr>
            <tr><td>Lv. 11 to 15</td><td>2,000</td><td>17,000</td></tr>
            <tr><td>Lv. 16 to 20</td><td>4,000</td><td>37,000</td></tr>
            <tr><td>Lv. 21 to 25</td><td>8,000</td><td>77,000</td></tr>
            <tr><td>Lv. 26 to 30</td><td>16,000</td><td>157,000</td></tr>
            <tr><td>Lv. 31 to 35</td><td>19,200</td><td>253,000</td></tr>
            <tr><td>Lv. 36 to 40</td><td>23,000</td><td>368,000</td></tr>
            <tr><td>Lv. 41 to 45</td><td>27,600</td><td>506,000</td></tr>
            <tr><td>Lv. 46 to 67</td><td>33,100</td><td>1,234,200</td></tr>
            <tr><td>Lv. 68 to 99</td><td>34,100 to 85,400</td><td>3,028,200</td></tr>
          </tbody>
        </table>
        <p>As you can see, reaching level 99 requires over 3 million points, and the final 32 levels (the Soulmate stage added in version 1.10) alone cost nearly 1.8 million of them. These values come directly from the game's data files.</p>

        <h3>Why Level 30?</h3>
        <p>To reach level 30, you only need <strong>157,000</strong> points. This gets you all the ATK% bonuses at roughly 5% of the total cost to max.</p>

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
            <tr><td>3 Star Loved (225 pts)</td><td>698 gifts</td><td>70 days</td></tr>
            <tr><td>3 Star Neutral (150 pts)</td><td>1,047 gifts</td><td>105 days</td></tr>
            <tr><td>3 Star Hated (120 pts)</td><td>1,309 gifts</td><td>131 days</td></tr>
            <tr><td>4 Star Loved (750 pts)</td><td>210 gifts</td><td>21 days</td></tr>
            <tr><td>4 Star Neutral (500 pts)</td><td>314 gifts</td><td>32 days</td></tr>
            <tr><td>4 Star Hated (400 pts)</td><td>393 gifts</td><td>40 days</td></tr>
            <tr><td>5 Star Loved (3,000 pts)</td><td>53 gifts</td><td>6 days</td></tr>
            <tr><td>5 Star Neutral (2,000 pts)</td><td>79 gifts</td><td>8 days</td></tr>
            <tr><td>5 Star Hated (1,600 pts)</td><td>99 gifts</td><td>10 days</td></tr>
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
            <tr><td>ATK</td><td>+864</td></tr>
            <tr><td>HP</td><td>+8,006</td></tr>
            <tr><td>ATK%</td><td>+24%</td></tr>
          </tbody>
        </table>
        <p>This requires a fraction of the gifts needed to max out completely. Using 4 star loved gifts, you can reach level 30 in just 21 days. For reference, flat stats finish at Lv. 50 with +1,584 ATK and +14,678 HP, which costs 671,500 points total.</p>

        <h2>Conclusion</h2>
        <p>Focus on reaching level 30 affinity using 4 star loved gifts. This target provides excellent stat bonuses at a fraction of the total investment required for max level. Check our <a href="/guides/stella-sora/tier-list/">Tier List</a> to decide which characters are worth prioritizing. Do not hoard your 4 star gifts waiting for 5 star crafting since the immediate power boost will serve you far better right now.</p>
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
        <p>Without <a href="/guides/stella-sora/characters/">Fuyuka</a>, you will really struggle to finish the 100-point challenge. It's possible but quite hard. Using the Ultimate build makes things much easier - just wait for your ultimate to charge, then one-shot the boss!</p>

        <h2>Tip 3: Use Flora and Snowish Laru as Support</h2>
        <p>Flora provides buffs, damage increase, crit rate, and crit damage to help you deal more damage. Snowish Laru uses her minion to tank and deal damage. You can replace Snowish Laru, but she is really helpful here.</p>

        <h2>My Build Setup</h2>
        <p>Here are the <a href="/guides/stella-sora/all-potentials/">potentials</a> I used to clear this raid:</p>

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
        <p>You should be able to finish this boss raid and clear everything without spending too much time, whether you're F2P or spending. For more team composition ideas, check out our <a href="/guides/stella-sora/tier-list/">Tier List</a>. Don't forget that on the last week of this raid, the game gives you new buffs that will help you clear 100 points!</p>
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
