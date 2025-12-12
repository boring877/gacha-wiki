// Zone Nova Updates API Endpoint
// Generates /data/zone-nova/updates.json
// Complete update history including maintenance, announcements, recruitments, and events

// Import all update modules dynamically
const updateModules = import.meta.glob('../../../data/zone-nova/updates/*.js', {
  eager: true,
});

export const prerender = true;

export async function GET() {
  const updates = [];

  for (const [path, module] of Object.entries(updateModules)) {
    // Skip template file
    if (path.includes('Template')) continue;

    // Find the update data export
    const updateData = Object.values(module).find(
      exp =>
        exp && typeof exp === 'object' && exp.title && (exp.type || exp.officialUpdate || exp.tldr)
    );

    if (updateData) {
      // Extract slug from path
      const slug = path.split('/').pop().replace('.js', '');

      updates.push({
        slug,
        title: updateData.title,
        date: updateData.date,
        type: updateData.type || 'announcement',

        // TL;DR summary for quick overview
        tldr: updateData.tldr || [],

        // Full official content
        officialUpdate: updateData.officialUpdate
          ? {
              greeting: updateData.officialUpdate.greeting,
              content: updateData.officialUpdate.content,
            }
          : null,

        // Source info
        source: updateData.sourceInfo?.source || 'Official ZONE NOVA',
        verified: updateData.sourceInfo?.verified ?? true,

        // Detail URL
        detailUrl: `/guides/zone-nova/updates/${slug}/`,
      });
    }
  }

  // Sort by date (newest first)
  updates.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  // Group updates by type
  const byType = {
    maintenance: updates.filter(u => u.type === 'maintenance'),
    recruitment: updates.filter(u => u.type === 'recruitment'),
    announcement: updates.filter(u => u.type === 'announcement'),
    event: updates.filter(u => u.type === 'event'),
    other: updates.filter(
      u => !['maintenance', 'recruitment', 'announcement', 'event'].includes(u.type)
    ),
  };

  // Get recent updates (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentUpdates = updates.filter(u => new Date(u.date) >= thirtyDaysAgo);

  const response = {
    game: 'Zone Nova',
    type: 'updates',
    description:
      'Complete update history including maintenance notes, character recruitment announcements, events, and official announcements with TL;DR summaries',
    count: updates.length,
    lastUpdated: new Date().toISOString().split('T')[0],

    summary: {
      total: updates.length,
      maintenance: byType.maintenance.length,
      recruitment: byType.recruitment.length,
      announcement: byType.announcement.length,
      event: byType.event.length,
      recentCount: recentUpdates.length,
    },

    // Most recent updates
    recent: recentUpdates.slice(0, 10),

    // All updates by type
    byType,

    // Full timeline (all updates newest first)
    timeline: updates,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
