export const silverAndBloodEvents = [
  {
    id: 'summertime-ensemble',
    title: 'Summertime Ensemble Event',
    date: 'July 17, 2025',
    summary:
      'A massive summer event featuring story adventures on Sapphire Isle, new vassals Lorelei and Fleeting Bella, exploration, challenges, and mini-games',
    url: '/guides/silver-and-blood/events/summertime-ensemble/',
  },
  {
    id: 'far-side-of-the-moon',
    title: 'Far Side of the Moon',
    date: 'July 5, 2025',
    summary:
      'A mysterious lunar event that unveils hidden secrets and new challenges in the Silver and Blood universe',
    url: '/guides/silver-and-blood/events/far-side-of-the-moon/',
  },
];

export const getLatestEvents = (limit = 5) => {
  return silverAndBloodEvents.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
};

export const getEventBySlug = slug => {
  return silverAndBloodEvents.find(event => event.url?.includes(slug) || event.id === slug);
};
