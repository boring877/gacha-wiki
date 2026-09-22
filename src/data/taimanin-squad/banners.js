// Taimanin Squad banner history: every Limited Pickup Recruit and Step-Up
// pack since launch, compiled from the official news archive
// (taimaninsquad.com/api/information, EN). Icons resolve through
// TSCharacterImage against src/assets/images/games/taimanin-squad/characterimage.
// Status ("active"/"ended") is computed from `end` at build time.

export const RECRUIT_TYPES = [
  {
    id: 'premium',
    name: 'Premium Recruit',
    tagline: 'The standard pool. Legend rate 3.0%.',
    details: [
      'Guaranteed Legendary character every 100 recruits. Since April 30, 2026 the 100-pity reward is selectable instead of random.',
      'Newest Legends eventually join this pool (Snake Lady and Anemone did on June 6; limited Pickup units from May onward never do).',
    ],
  },
  {
    id: 'special',
    name: 'Special Recruit',
    tagline: 'Epic-focused pool with rotating bonus units.',
    details: [
      'Guaranteed Legendary every 100 recruits (random since April 30, 2026).',
      'A unified Recruit Gauge (added April 30, 2026) grants 1 Premium Recruit Ticket per 100 total recruits across every Recruit type and Weapon Supply.',
    ],
  },
  {
    id: 'pickup',
    name: 'Limited Pickup Recruit',
    tagline: 'Rate-up banners. The featured Legend is guaranteed at 100.',
    details: [
      'The featured Legendary is guaranteed on every 100th Pickup, and the gauge carries over between banners until claimed.',
      'April Pickups later joined the standard pools. From the May 14 Wedding Pickup on, limited characters are never added to Premium or Special Recruit.',
      'A one-per-account Pickup Package (paid) is sold during each Pickup period.',
    ],
  },
  {
    id: 'stepup',
    name: 'Step-Up Packs',
    tagline: 'Paid packs with an exclusive Legend + signature weapon.',
    details: [
      'Each pack is one purchase per account and includes the character plus their exclusive weapon.',
      'The character and weapon are added to Assemble and Weapon Development about 4 to 6 weeks after the sale ends, so skipping is viable for patient players.',
    ],
  },
];

export const PITY_RULES = [
  { label: 'Legendary rate (Premium)', value: '3.0%' },
  { label: 'Epic rate', value: '7.0%' },
  { label: 'Pickup pity', value: '100, carries over' },
  { label: 'Premium pity', value: '100, selectable' },
  { label: 'Unified gauge', value: '1 Premium Ticket / 100 pulls' },
];

const L = (name, icon, rarity = '★5 Legend') => ({ name, icon, rarity });
const E = (name, icon, rarity = '★4 Epic') => ({ name, icon, rarity });

export const BANNER_HISTORY = [
  {
    id: 'ragnarok-stepup',
    start: '2026-09-17',
    end: '2026-10-08',
    type: 'stepup',
    legend: L('Ragnarok', '301_Ragnarok'),
    weapon: 'Glacial Crystal',
    notes: 'Joins Assemble and Weapon Development after November 26, 2026.',
    image: '/images/games/taimanin-squad/news/img001.webp',
    source: '/information-detail/',
  },
  {
    id: 'gosha-shiranui-pickup',
    start: '2026-09-03',
    end: '2026-09-24',
    type: 'pickup',
    legend: L('[Gosha] Mizuki Shiranui', '237_Shiranui'),
    epic: E('[Swimsuit] Kousaka Shizuru', '257_Shizuru'),
    notes: 'Limited units, never added to standard pools.',
    image: '/images/games/taimanin-squad/news/img003.webp',
    source: '/information-detail/',
  },
  {
    id: 'natsu-stepup',
    start: '2026-09-03',
    end: '2026-09-24',
    type: 'stepup',
    legend: L('Inage Natsu', null),
    weapon: 'Urashima',
    notes: 'Joins Assemble and Weapon Development after October 1, 2026.',
    image: '/images/games/taimanin-squad/news/img004.webp',
    source: '/information-detail/',
  },
  {
    id: 'phantasma-stepup',
    start: '2026-08-20',
    end: '2026-09-10',
    type: 'stepup',
    legend: L('Phantasma', '194_Phantasma'),
    weapon: 'Charming Flower-Eye',
    notes: 'Joins Assemble and Weapon Development after October 15, 2026.',
    image: '/images/games/taimanin-squad/news/img005.webp',
    source: '/information-detail/',
  },
  {
    id: 'youthful-pickup',
    start: '2026-08-06',
    end: '2026-08-27',
    type: 'pickup',
    legend: L('[Youthful Immortal] Yatsu Murasaki', '269_Murasaki'),
    epic: E('[Youthful Almighty] Igawa Asagi', '271_Asagi'),
    notes: 'The current PvP meta pair. Limited units, never added to standard pools.',
    image: '/images/games/taimanin-squad/news/img007.webp',
    source: '/information-detail/',
  },
  {
    id: 'nasara-stepup',
    start: '2026-07-23',
    end: '2026-08-13',
    type: 'stepup',
    legend: L('Nasara', '105_Nasara'),
    weapon: 'Unidentified Purple Ribbon',
    notes: 'Joins Assemble and Weapon Development after September 17, 2026.',
    image: '/images/games/taimanin-squad/news/img009.webp',
    source: '/information-detail/',
  },
  {
    id: 'swimsuit-pickup',
    start: '2026-07-09',
    end: '2026-07-30',
    type: 'pickup',
    legend: L('[Swimsuit] Yuri Hisui', '256_Hisui'),
    epic: E('[Swimsuit] Kousaka Shizuru', '257_Shizuru'),
    notes: 'Her short-cooldown AoE confusion defines the PvP meta. Limited units.',
    source: '/information-detail/',
  },
  {
    id: 'francis-stepup',
    start: '2026-06-25',
    end: '2026-07-16',
    type: 'stepup',
    legend: L('Francis', '68_Francis'),
    weapon: 'Pop Star',
    notes: 'Joins Assemble and Weapon Development after August 20, 2026.',
    source: '/information-detail/',
  },
  {
    id: 'gosha-mari-pickup',
    start: '2026-06-11',
    end: '2026-07-02',
    type: 'pickup',
    legend: L('[Gosha] Shinohara Mari', '248_Mari'),
    epic: E('[Gosha] Aishu Hebiko', '245_Hebiko'),
    notes: 'Limited units, never added to standard pools.',
    source: '/information-detail/',
  },
  {
    id: 'cara-stepup',
    start: '2026-05-28',
    end: '2026-06-18',
    type: 'stepup',
    legend: L('Cara Cromwell', '302_Cromwell'),
    weapon: 'Scarlet Diadem',
    notes: 'Joins Assemble and Weapon Development after July 23, 2026. Her shards later entered Assembly login sources.',
    source: '/information-detail/',
  },
  {
    id: 'wedding-pickup',
    start: '2026-05-14',
    end: '2026-06-04',
    type: 'pickup',
    legend: L('[Wedding] Nanase Mai', '255_Mai'),
    epic: E('[Wedding] Yatsu Murasaki', '254_Murasaki'),
    notes: 'First limited Pickup tied to the Photo Wedding event. First banner whose units never join standard pools.',
    source: '/information-detail/',
  },
  {
    id: 'rin-stepup',
    start: '2026-04-30',
    end: '2026-05-21',
    type: 'stepup',
    legend: L('Uehara Rin', '32_Rin'),
    weapon: 'Lightning Saber II Raizin',
    notes: 'Same day: pity rework. Premium 100-pity became selectable and the unified Recruit Gauge was added.',
    source: '/information-detail/',
  },
  {
    id: 'snakelady-pickup',
    start: '2026-04-16',
    end: '2026-05-07',
    type: 'pickup',
    legend: L('Snake Lady', '71_Snakelady'),
    epic: E('Anemone', '77_Anemone'),
    notes: 'Both joined the Special and Premium Recruit pools on June 6, 2026. Commodus joined Special Recruit the same day.',
    source: '/information-detail/',
  },
  {
    id: 'eleonor-stepup',
    start: '2026-04-02',
    end: '2026-04-23',
    type: 'stepup',
    legend: L('Eleonor', '48_Eleonor'),
    weapon: 'Tear of Rusalka',
    notes: 'Joins Assemble and Weapon Development after May 21, 2026.',
    source: '/information-detail/',
  },
  {
    id: 'azusa-stepup',
    start: '2026-03-19',
    end: '2026-04-02',
    type: 'stepup',
    legend: L('Kichi Azusa', '14_Azusa'),
    weapon: 'Rasetsumaru',
    notes: 'Joins Assemble and Weapon Development after April 30, 2026.',
    source: '/information-detail/',
  },
  {
    id: 'rinko-pickup',
    start: '2026-03-12',
    end: '2026-03-26',
    type: 'pickup',
    legend: L('Akiyama Rinko', '11_Rinko'),
    epic: E('Masked Taimanin', '78_Maskedtaimanin'),
    notes: 'First Pickup. Both later joined the standard pools.',
    source: '/information-detail/',
  },
  {
    id: 'launch',
    start: '2026-03-05',
    end: '2026-03-19',
    type: 'launch',
    legend: L('Onisaki Kirara', '24_Kirara'),
    weapon: null,
    notes: 'Launch day purchase pack. Kirara joined Assemble 4 weeks after the sale ended.',
    source: '/information-detail/',
  },
];

export function getBannerStatus(banner, now = new Date()) {
  const end = new Date(banner.end + 'T00:59:00Z');
  return now <= end ? 'active' : 'ended';
}

export function getBannerType(type) {
  return RECRUIT_TYPES.find((t) => t.id === type) || { name: type };
}
