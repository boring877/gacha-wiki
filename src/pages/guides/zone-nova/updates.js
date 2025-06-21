// Zone Nova Updates Data
export const zoneNovaUpdates = [
	{
		id: 'june-17-2025',
		title: 'June 17th Maintenance',
		date: 'June 17, 2025',
		type: 'maintenance',
		summary: 'Maintenance on June 17, 2025, including system updates, 300 Quartz compensation, and the launch of the 618 Carnival Special Event with Energy Potion x5, Stamina Refill x15, and a Starter Gift Pack.',
		url: '/guides/zone-nova/updates/june-17-2025/'
	},
	{
		id: 'thunder-king-part-2',
		title: 'Thunder King Event Part 2',
		date: 'June 10, 2025',
		type: 'event',
		summary: 'Thunder King\'s Reign Part 2 featuring new character Yuis (Holy Ranger), Guild Trials system, Space-Time Rift IV, double drop events, and new gemstone sets.',
		url: '/guides/zone-nova/updates/june-10-2025/'
	},
	{
		id: 'june-10-maintenance',
		title: 'June 10th Maintenance',
		date: 'June 10, 2025',
		type: 'maintenance',
		summary: 'Technical maintenance bringing UI improvements, team presets expansion (now 8 teams), enhanced notifications, interface optimizations, and comprehensive bug fixes.',
		url: '/guides/zone-nova/updates/june-10-2025-maintenance/'
	},
	{
		id: 'zeus-recruitment',
		title: 'Zeus Limited Recruitment',
		date: 'June 10, 2025',
		type: 'recruitment',
		summary: 'Zeus, master of Divine Judgment, arrives as a Limited Holy character with pursuit mechanics! Get her and the exclusive "Frozen Heart" relic. Limited time only: June 10-24, 2025.',
		url: '/guides/zone-nova/updates/june-10-2025/'
	},
	{
		id: 'idle-income-bugfix',
		title: 'Idle Income System Bug Fix & Compensation',
		date: 'May 29, 2025',
		type: 'announcement',
		summary: 'Idle income system bug fix, abnormal Energy Supplement recovery, and compensation for all players (x5 Energy Supplement).',
		url: '/guides/zone-nova/news/idle-income-bugfix/'
	},
	{
		id: '500k-downloads',
		title: '500,000 Downloads Milestone',
		date: 'May 28, 2025',
		type: 'announcement',
		summary: 'ZONE NOVA celebrates reaching 500,000 cross-platform downloads! Special celebration rewards including Fantasy Color Cubes and Energy Supplements for all captains.',
		url: '/guides/zone-nova/news/500k-downloads/'
	},
	{
		id: 'may-27-maintenance',
		title: 'May 27 Maintenance',
		date: 'May 27, 2025',
		type: 'maintenance',
		summary: 'New Empress Guinevere character, Thunder King event, and multiple limited-time activities! Major update with new events, boss battles, and exclusive rewards.',
		url: '/guides/zone-nova/updates/may-27-2025/'
	}
];

// Helper function to get tag display text
export function getTagText(type) {
	const tags = {
		maintenance: 'MAINTENANCE',
		event: 'EVENT',
		recruitment: 'LIMITED RECRUITMENT',
		announcement: 'ANNOUNCEMENT'
	};
	return tags[type] || 'UPDATE';
}

// Helper function to get tag emoji
export function getTagEmoji(type) {
	const emojis = {
		maintenance: '🔧',
		event: '🎉',
		recruitment: '⭐',
		announcement: '📢'
	};
	return emojis[type] || '📄';
}

// Helper function to get CSS class for update type
export function getUpdateClass(type) {
	const classes = {
		maintenance: 'maintenance',
		event: 'announcement',
		recruitment: 'announcement',
		announcement: 'announcement'
	};
	return classes[type] || '';
}

// Pagination configuration
export const UPDATES_PER_PAGE = 10;

// Helper function to paginate updates
export function paginateUpdates(updates, page = 1, perPage = UPDATES_PER_PAGE) {
	const startIndex = (page - 1) * perPage;
	const endIndex = startIndex + perPage;
	return {
		updates: updates.slice(startIndex, endIndex),
		totalPages: Math.ceil(updates.length / perPage),
		currentPage: page,
		totalUpdates: updates.length,
		hasNext: endIndex < updates.length,
		hasPrev: page > 1
	};
}

// Helper function to filter updates by type
export function filterUpdatesByType(updates, type) {
	if (!type || type === 'all') return updates;
	return updates.filter(update => update.type === type);
}

// Helper function to search updates
export function searchUpdates(updates, query) {
	if (!query) return updates;
	const searchTerm = query.toLowerCase();
	return updates.filter(update => 
		update.title.toLowerCase().includes(searchTerm) ||
		update.summary.toLowerCase().includes(searchTerm)
	);
} 