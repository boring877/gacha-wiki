// Busty Burst Blog API Endpoint
// Generates /data/busty-burst/blog.json

import { blogConfig } from '../../../data/busty-burst/blog.js';

export const prerender = true;

export async function GET() {
  // Extract categories and tags from posts
  const allCategories = [...new Set(blogConfig.posts.map(p => p.category))];
  const allTags = [...new Set(blogConfig.posts.flatMap(p => p.tags))];

  // Transform posts for API (remove HTML content, add excerpts)
  const posts = blogConfig.posts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    publishDate: post.publishDate,
    category: post.category,
    tags: post.tags,
    url: `/guides/busty-burst/blog/${post.slug}/`,
  }));

  const response = {
    game: 'Busty Burst',
    type: 'blog',
    description: 'Strategy guides, tips, and event information for Busty Burst Fantasy players',
    lastUpdated: new Date().toISOString().split('T')[0],
    count: posts.length,
    categories: allCategories,
    tags: allTags,
    posts,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
