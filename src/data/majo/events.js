// MAJO event guide data: patch-note style content for in-game events, plus extracted event art on R2.

const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';

export const MAJO_EVENTS = [
  {
    slug: 'magic-bows-first-hunt',
    name: "Magic Bow's First Hunt",
    storyName: "The Legend of the Magic Bow's First Hunt",
    summary:
      'Event story, repeat challenges and high difficulty stages for event tokens, an event shop and the Lucky Wheel, running alongside the Eternal Contact: Bazhuli banner.',
    start: '2026-09-16T11:00:00+08:00',
    end: '2026-10-07T05:00:00+08:00',
    periodLabel: 'Sep 16 to Oct 7, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/banners/festival-s1.webp`, w: 512, h: 205 },
    logo: { src: `${R2}/majo/events/festival-s1-logo.webp`, w: 512, h: 205 },
    officialNotes: [
      'Event period: Sep 16 11:00 to Oct 7 05:00 (UTC+8).',
      'Clear event story stages, repeat challenges, and high-difficulty stages for event tokens, redeemable at the event shop.',
      'Lucky Wheel Tickets are earned via event stages, with bonus rewards after certain spin counts.',
      'Runs alongside the Eternal Contact: Bazhuli (UR) banner, Sep 16 11:00 to Oct 7 05:00, decreasing pity: first cap 80, second 70, then 60 from the third period onward. Cumulative counts carry over, pity cap resets each period.',
      'A Sep 16 hotfix adjusted the Eternal Contact: Bazhuli step milestone rewards at 30, 60, 150, 180, 240, 300, 400 and 500 draws.',
    ],
    dataNotes: [
      "Story chapter: \"The Legend of the Magic Bow's First Hunt\", Story 1 to 10. Clearing Story 10 completes the event story.",
      'Domain battles: Physical Battle 1 to 15, Magical Battle 1 to 15 and Psychic Battle 1 to 15, 45 repeatable fights in total.',
      "Challenge: High Difficulty 1 to 5. Clearing High Difficulty 5 awards the Title: Magic Bow's First Hunt.",
      'Currency: Bazhuli Event Token, earned from event stages and quests and spent in Event Shop I, II and III. Shop stock is server side, check the in game shop for exact costs.',
      'Lucky Wheel runs on Spin Tickets, and accumulated attempts do not reset during the event.',
      'Quests: ten cumulative deploy stage clear missions, from 40 up to 400 clears.',
      'Cosmetics from this event: Avatar: Chibi Bazhuli and the Full String - Bazhuli lobby background.',
    ],
    gallery: [
      { src: `${R2}/majo/events/bazhuli-bow.webp`, w: 1440, h: 1920, caption: 'Bazhuli with the magic bow, event main screen art.' },
      { src: `${R2}/majo/events/bazhuli-awaken.webp`, w: 1440, h: 1920, caption: 'Bazhuli Awakened lobby art.' },
      { src: `${R2}/majo/events/bazhuli-throne.webp`, w: 622, h: 830, caption: 'Bazhuli lobby art.' },
    ],
    sources: [
      { label: 'September Update Content Overview, Sep 7, 2026', url: 'https://majo-x.com/en/news/20260907_majo-witchesnight-announcement/' },
      { label: 'Sept/16 No-Downtime Update, Sep 15, 2026', url: 'https://majo-x.com/en/news/20260915_majo-witchesnight-announcement/' },
      { label: 'In-game event strings and item texts (game data, Sep 14, 2026 pull)' },
    ],
  },
];

export function getEvent(slug) {
  return MAJO_EVENTS.find((ev) => ev.slug === slug);
}

export function eventStatus(ev, now = Date.now()) {
  const start = new Date(ev.start).getTime();
  const end = new Date(ev.end).getTime();
  if (now < start) return { id: 'upcoming', label: 'Upcoming' };
  if (now > end) return { id: 'ended', label: 'Ended' };
  return { id: 'live', label: 'Live now' };
}
