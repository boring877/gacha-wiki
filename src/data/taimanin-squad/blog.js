// Taimanin Squad Blog Data
// This file contains all blog posts for the Taimanin Squad section

export const blogConfig = {
  meta: {
    title: 'Blog | Taimanin Squad',
    description: 'Tips, strategies, and insights for Taimanin Squad players',
    gameTitle: 'Blog',
  },

  posts: [
    {
      slug: 'taimanin-squad-announcement-first-look',
      title: 'Taimanin Squad Announcement: First Look at the New Turn-Based RPG',
      description:
        'Everything we know about Taimanin Squad - the upcoming turn-based RPG from Gremory Games featuring 3D characters from the legendary Taimanin franchise.',
      author: 'Boring877',
      publishDate: '2025-12-25',
      category: 'News',
      tags: ['announcement', 'first-look', 'pre-registration', 'gremory'],
      content: `
        <h2>A Surprising Announcement</h2>
        <p>Almost everyone was surprised by the new Taimanin Squad announcement, but after looking into it more, things start to make sense. The developer is Gremory, the same studio behind Action Taimanin, which has been doing really well. So it seems like Gremory Games is trying to keep that momentum going.</p>

        <h2>Game Overview</h2>
        <p>Taimanin Squad is going to be a turn-based RPG featuring 3D characters. You'll be able to choose 4 characters and fight enemies in turn-based combat. I personally didn't see a speed stat, so I'm not sure how turn order is decided—maybe it's round-based instead?</p>

        <h2>Combat Systems</h2>
        <p>From what I saw, there will be a crit rate, crit resist, and crit damage system, along with an elemental system featuring fire, water, and wind. There's also what looks like a dark element with no counter? Or maybe it's a non-elemental type. Check our <a href="/guides/taimanin-squad/mechanics/">Mechanics</a> page for a breakdown of these systems.</p>

        <h2>Release Timeline</h2>
        <p>The open beta will be released on the Galaxy Store on <strong>January 15th, 2026</strong>. The full release hasn't been officially announced yet, but the community is hinting at around <strong>March 5th, 2026</strong>.</p>

        <h2>Character & Progression Systems</h2>
        <p>The max level will be 90, and there's going to be a team CP system. It also looks like there will be character roles—healer, buffer, ranger, debuffer, and so on. Characters will have rarities too, with the highest being 6-star. There's also a leader system for squads, which might provide buffs or let you build teams around the leader's abilities.</p>

        <h2>Gacha System</h2>
        <p>So far there's not a ton of information, but the hype and excitement in the community is huge—we've already hit 300k pre-registrations in just a few days! Oh, and it looks like there will be both <a href="/guides/taimanin-squad/weapons/">weapon</a> gacha and character summons.</p>

        <h2>Conclusion</h2>
        <p>I really love turn-based games, and Taimanin is one of my favorite series. I personally can't wait for this one, and I'm hoping the monetization isn't too greedy. This could be something really huge for Taimanin!</p>
      `,
    },
    {
      slug: 'equipment-guide-artifacts-sets-substats',
      title: 'Equipment Guide: Artifacts, Sets, and Substats',
      description:
        'My take on artifact grades, set bonuses, substat priorities, and what actually works in practice.',
      author: 'Boring877',
      publishDate: '2026-05-05',
      category: 'Guide',
      tags: ['equipment', 'artifacts', 'substats', 'builds'],
      content: `
        <h2>TL;DR</h2>
        <p>Aim for <strong>grade 5 and 6</strong>, at least <strong>Rare rarity or higher</strong>. You need to hit at least 2 good substats. That's it. Don't overcomplicate it.</p>

        <h2>Grades</h2>
        <p>I personally go for grade 5 and 6. I can sometimes use a grade 4 if it's <strong>Legendary rarity</strong> with good substat rolls, but that's a mid-game choice, not endgame. Grade 5 can absolutely be endgame gear if the sub rolls are good.</p>
        <p>Grade 6 has the highest substat values. If you get lucky and multiple rolls hit the same stat, the item gets broken. You can reach around <strong>25% HP</strong> or <strong>15% CRIT RES</strong> from a single item's substats alone.</p>

        <h2>Sets</h2>
        <p>I've been using <strong>ATK set for DPS</strong> and <strong>HP set for tanks</strong>, and I've gotten good results so far. ATK has no diminishing returns, so the higher the value the more damage you do. And HP scales way better on tanks than DEF.</p>
        <p>There's some consideration to use <strong>SPD set for every role</strong>, but I'm not sure about that yet. Needs more testing.</p>

        <h2>Substats</h2>
        <h3>DPS</h3>
        <p>I aim for ATK substats, hoping to get at least 2 rolls hitting ATK, sometimes reaching 12%+ from substats alone.</p>
        <p>But going full ATK has problems - you get less SPD and CRIT. CRIT Rate increases damage a lot, making you one-shot people. And SPD helps you not get one-shotted. If you can reach at least <strong>100 SPD</strong>, that should be fine to not lose most of the time.</p>

        <h3>Tanks</h3>
        <p>There's discussion about picking <strong>CRIT RES</strong> over HP to help not getting one-shotted, which really makes sense. Some people say even 2 CRIT RES + 1 HP set is not a bad choice. This needs more testing to confirm.</p>
        <p>For tank substats I aim for: <strong>SPD, HP, CRIT RES, and DEF</strong>.</p>

        <h2>Final Thoughts</h2>
        <p>At the end of the day: aim for <strong>grade 5 and 6 with Rare rarity or higher</strong>, and hope for good rolls. </p>
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
