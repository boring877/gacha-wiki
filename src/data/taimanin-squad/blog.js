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
        <p>From what I saw, there will be a crit rate, crit resist, and crit damage system, along with an elemental system featuring fire, water, and wind. There's also what looks like a dark element with no counter? Or maybe it's a non-elemental type.</p>

        <h2>Release Timeline</h2>
        <p>The open beta will be released on the Galaxy Store on <strong>January 15th, 2026</strong>. The full release hasn't been officially announced yet, but the community is hinting at around <strong>March 5th, 2026</strong>.</p>

        <h2>Character & Progression Systems</h2>
        <p>The max level will be 90, and there's going to be a team CP system. It also looks like there will be character roles—healer, buffer, ranger, debuffer, and so on. Characters will have rarities too, with the highest being 6-star. There's also a leader system for squads, which might provide buffs or let you build teams around the leader's abilities.</p>

        <h2>Gacha System</h2>
        <p>So far there's not a ton of information, but the hype and excitement in the community is huge—we've already hit 300k pre-registrations in just a few days! Oh, and it looks like there will be both weapon gacha and character summons.</p>

        <h2>Conclusion</h2>
        <p>I really love turn-based games, and Taimanin is one of my favorite series. I personally can't wait for this one, and I'm hoping the monetization isn't too greedy. This could be something really huge for Taimanin!</p>
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
