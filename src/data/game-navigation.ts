export type GameKey = 'silver-and-blood' | 'zone-nova' | 'horizon-walker' | 'rebellion-gilgamesh';

export interface NavigationLink {
  name: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export interface GameData {
  name: string;
  image: string | any;
  sections: NavigationSection[];
}

import GameIcon from '../assets/images/games/horizon-walker/gameimg/gameicon.jpg';

export const GAMES_DATA: Record<GameKey, GameData> = {
  'silver-and-blood': {
    name: 'Silver and Blood',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main4.jpg',
    sections: [
      {
        title: 'Characters',
        links: [
          { name: 'Database', href: '/guides/silver-and-blood/characters/' },
          { name: 'Tier List', href: '/guides/silver-and-blood/tier-list/' },
          { name: 'Rankings', href: '/guides/silver-and-blood/character-rankings/' },
          { name: 'Comparison', href: '/guides/silver-and-blood/character-comparison/' },
          { name: 'Comparison V2', href: '/guides/silver-and-blood/character-comparison-v2/' },
          { name: 'Tags', href: '/guides/silver-and-blood/character-tag-selection/' },
        ],
      },
      {
        title: 'Combat',
        links: [
          { name: 'Damage Hub', href: '/guides/silver-and-blood/damage-mechanics/' },
          { name: 'Boss Database', href: '/guides/silver-and-blood/boss-database/' },
          { name: 'Prophecy', href: '/guides/silver-and-blood/prophecy/' },
          { name: 'Clan Hunt', href: '/guides/silver-and-blood/clan-hunt/' },
          { name: 'Team Synergy', href: '/guides/silver-and-blood/team-synergy/' },
          { name: 'Gear Upgrades', href: '/guides/silver-and-blood/gear-upgrades/' },
        ],
      },
      {
        title: 'Events',
        links: [
          { name: 'Events', href: '/guides/silver-and-blood/events/' },
          { name: "Dutchman's Revenge", href: '/guides/silver-and-blood/dutchmans-revenge/' },
          { name: 'Ancestral Vault', href: '/guides/silver-and-blood/ancestral-vault/' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Beginner Guide', href: '/guides/silver-and-blood/beginner-guide/' },
          { name: 'Rerolling Guide', href: '/guides/silver-and-blood/rerolling-guide/' },
          { name: 'Clock', href: '/clock/silver-and-blood/' },
          { name: 'Redeem Codes', href: '/guides/silver-and-blood/redeem-codes/' },
          { name: 'Bug Fixes', href: '/guides/silver-and-blood/bugs/' },
          { name: 'Summon FAQ', href: '/guides/silver-and-blood/summon-faq/' },
          { name: 'Slot Machines', href: '/guides/silver-and-blood/slot-machines/' },
        ],
      },
    ],
  },
  'zone-nova': {
    name: 'Zone Nova',
    image: '/images/games/zone-nova/zonenova.jpg',
    sections: [
      {
        title: 'Characters',
        links: [
          { name: 'Database', href: '/guides/zone-nova/characters/' },
          { name: 'Tier List', href: '/guides/zone-nova/tier-list/' },
          { name: 'Rankings', href: '/guides/zone-nova/character-rankings/' },
          { name: 'Comparison', href: '/guides/zone-nova/character-comparison/' },
          { name: 'Comparison V2', href: '/guides/zone-nova/character-comparison-v2/' },
          { name: 'Tags', href: '/guides/zone-nova/character-tags/' },
        ],
      },
      {
        title: 'Combat',
        links: [
          { name: 'Damage Hub', href: '/guides/zone-nova/damage-mechanics/' },
          { name: 'Rifts', href: '/guides/zone-nova/rifts/' },
          { name: 'Rift Teams', href: '/guides/zone-nova/rift-teams/' },
          { name: 'Memories', href: '/guides/zone-nova/memories/' },
          { name: 'Team Synergy', href: '/guides/zone-nova/team-synergy/' },
        ],
      },
      {
        title: 'Progression',
        links: [
          { name: 'EXP Requirements', href: '/guides/zone-nova/exp-requirements/' },
          { name: 'Runes', href: '/guides/zone-nova/runes/' },
          { name: 'Crafting', href: '/guides/zone-nova/crafting/' },
          { name: 'Crafting Items', href: '/guides/zone-nova/crafting-items/' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Clock', href: '/clock/zone-nova/' },
          { name: 'Redeem Codes', href: '/guides/zone-nova/redeem-codes/' },
          { name: 'Summon FAQ', href: '/guides/zone-nova/summon-faq/' },
        ],
      },
      {
        title: 'Community',
        links: [
          { name: 'Updates', href: '/guides/zone-nova/updates/' },
          { name: 'Surveys', href: '/guides/zone-nova/surveys/' },
          { name: 'Contributing', href: '/guides/zone-nova/contributing/' },
        ],
      },
    ],
  },
  'horizon-walker': {
    name: 'Horizon Walker',
    image: GameIcon,
    sections: [
      {
        title: 'Characters',
        links: [
          { name: 'Database', href: '/guides/horizon-walker/characters/' },
          { name: 'Mercenaries', href: '/guides/horizon-walker/mercenaries/' },
          { name: 'Weapons', href: '/guides/horizon-walker/weapons/' },
        ],
      },
      {
        title: 'Game Mechanics',
        links: [{ name: 'AP Guide', href: '/guides/horizon-walker/ap-guide' }],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Gifts', href: '/guides/horizon-walker/gifts/' },
          { name: 'Character Gifts', href: '/guides/horizon-walker/character-gifts/' },
          { name: 'Clock', href: '/clock/horizon-walker/' },
        ],
      },
    ],
  },
  'rebellion-gilgamesh': {
    name: 'Rebellion Gilgamesh',
    image: '/src/assets/images/games/rebellion-gilgamesh/gameimg/Icon1.jpg',
    sections: [
      {
        title: 'Characters',
        links: [],
      },
      {
        title: 'Club Management',
        links: [],
      },
      {
        title: 'Combat',
        links: [],
      },
      {
        title: 'Resources',
        links: [],
      },
    ],
  },
};

export function isValidGameKey(key: unknown): key is GameKey {
  return typeof key === 'string' && key in GAMES_DATA;
}

export function getGameData(gameKey: GameKey | undefined): GameData | null {
  if (!gameKey || !isValidGameKey(gameKey)) {
    return null;
  }
  return GAMES_DATA[gameKey];
}
