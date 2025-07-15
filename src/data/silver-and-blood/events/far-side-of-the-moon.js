export const eventData = {
  title: 'Far Side of the Moon',
  character: 'Lamia',
  eventType: 'Character Story Event',
  author: 'ILikeBirds',
  authorNote: "A guide to character events from a closed-beta tester's perspective",
  communityDiscord: 'https://discord.gg/m57jHG4pn4',

  introduction: {
    title: 'Navigating character events, normal and nightmare modes, and resource collection',
    content: [
      'With the first few days of Lamia\'s story event "Far Side of the Moon" coming to a close, it has come to my attention from the lovely folks on the official Discord that newcomers to the game often find it challenging to navigate and make use of character events.',
      'Thus, the purpose of this guide is to teach players how to navigate character events efficiently, what items to purchase from the shop, and how to quickly acquire resources to progress your account with the hopes that you\'ll all be prepared for Dalcarlo\'s event "As Tears Fade Into The Sunset" coming July 5th.',
    ],
    images: [
      {
        afterParagraph: 0,
        imageId: 'guide-image-1',
      },
      {
        afterParagraph: 1,
        imageId: 'guide-image-2',
      },
    ],
  },

  upcomingEvent: {
    name: 'As Tears Fade Into The Sunset',
    character: 'Dalcarlo',
    date: 'July 5th',
  },

  guideSynopsis: {
    title: 'Guide Synopsis',
    subtitle: '[Click to Navigate]',
    sections: [
      {
        id: 'menu-screen',
        title: '[The Menu Screen]',
        subtitle: '(How to Navigate)',
        description: 'Understanding the event interface and navigation options',
      },
      {
        id: 'dailies',
        title: '[Dailies and You]',
        subtitle: '(Repeatable Activities)',
        description: 'Daily tasks and repeatable content for optimal progress',
      },
      {
        id: 'shop-guide',
        title: '[The Shop and What to Buy]',
        subtitle: '(What and When to Buy)',
        description: 'Event shop priorities and purchase recommendations',
      },
      {
        id: 'rate-up-banner',
        title: '[Rate-Up Banner]',
        subtitle: '(50/50 Pity)',
        description: 'Banner mechanics and summoning strategies',
      },
    ],
  },

  sections: [
    {
      id: 'menu-screen',
      title: 'The Menu Screen - How to Navigate',
      contentWithImages: [
        {
          type: 'text',
          content:
            "First, since the names of the different icons change between events (due to theming), it's important to go over what each individual menu does.",
        },
        {
          type: 'image',
          imageId: 'menu-image-3',
        },
        {
          type: 'text',
          content:
            'Beginning from the leftmost corner, the "Go to Embrace" button navigates you to the current rate-up banner.',
        },
        {
          type: 'image',
          imageId: 'menu-image-4',
        },
        {
          type: 'image',
          imageId: 'menu-image-5',
        },
        {
          type: 'text',
          content:
            'Directly to the right of the "Go to Embrace" button will typically be the button that accesses the shop.',
        },
        {
          type: 'text',
          content:
            'The name of the button often changes depending on the theme of the event; for this event, it is named "Moondream Journey."',
        },
        {
          type: 'image',
          imageId: 'menu-image-6',
        },
        {
          type: 'text',
          content: 'Directly above the "Go to Embrace" button is the "Imbued Vassal" interface.',
        },
        {
          type: 'image',
          imageId: 'menu-image-7',
        },
        {
          type: 'text',
          content: 'Opening this menu will list every imbued vassal.',
        },
        {
          type: 'text',
          content:
            'Fielding them in combat will net you a percentage chance of bonus rewards (typically shop currency) in the story stages',
        },
        {
          type: 'image',
          imageId: 'menu-image-8',
        },
        {
          type: 'text',
          content:
            'The bonus is maximized at 100%. The rate-up unit the event is centered around will always have a 60% increased chance modifier.',
        },
        {
          type: 'text',
          content:
            'Notice: 100% chance of bonus rewards isn\'t equal to double rewards; rather, it\'s a 100% chance of obtaining the "bonus rewards" of a stage.',
        },
        {
          type: 'text',
          content:
            'Any story-related characters will have a 40% increased modifier, with a few minor characters unrelated to the story at 20% to 10% modifiers.',
        },
        {
          type: 'image',
          imageId: 'menu-image-9',
        },
        {
          type: 'text',
          content:
            'The most important piece of content during character events is the combat stages; they\'ll typically be on the opposite side of the "Go to Embrace" button.',
        },
        {
          type: 'text',
          content:
            'They\'re split between a story mode, which for this event is the "Twilight Path," and a challenge mode, in this case the "Waning Moon Trial."',
        },
        {
          type: 'image',
          imageId: 'menu-image-10',
        },
        {
          type: 'text',
          content:
            'Stages completed in the story mode also rewards completion of the checklist, which for this event is called the "Newborn Trial."',
        },
        {
          type: 'text',
          content:
            'Rewarding players with shop currencies, exclusive backgrounds and icons once all story stages are completed.',
        },
        {
          type: 'image',
          imageId: 'menu-image-11',
        },
        {
          type: 'text',
          content:
            'Finally, every event rewards players for logging in for at least seven days, which can be accessed at each daily reset or from the icon on the left.',
        },
        {
          type: 'image',
          imageId: 'menu-image-12',
        },
        {
          type: 'text',
          content:
            "These rewards typically appear for every character event, so be sure to log in to collect them all (especially if you're free-to-play).",
        },
        {
          type: 'image',
          imageId: 'menu-image-13',
        },
      ],
    },
    {
      id: 'dailies',
      title: 'Dailies and You - Repeatable Activities',
      contentWithImages: [
        {
          type: 'text',
          content:
            'As stated previously there are two daily combat stage types for each character event.',
        },
        {
          type: 'text',
          content: "They're split between the story mode and the challenge mode.",
        },
        {
          type: 'text',
          content:
            'With the story mode itself being split between normal and nightmare difficulties.',
        },
        {
          type: 'image',
          imageId: 'menu-image-9',
        },
        {
          type: 'text',
          content:
            'Attempts for each mode reset daily, with story mode having a maximum of five attempts and challenge mode having one attempt per daily reset.',
        },
        {
          type: 'text',
          content:
            'Completing event stages is the primary way of earning currency to exchange for valuable rewards in the event shop, and the completion of the stage itself always yields great rewards.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-14',
        },
        {
          type: 'text',
          content:
            'To view the exact rewards for completing a story/challenge mode stage, you need only click on the stage itself. The above example is from the nightmare difficulty of story mode (stage 1-11, the most valuable stage).',
        },
        {
          type: 'text',
          content:
            "Highlighted in red is the bonus reward available on each stage. Remember that 100% bonus rewards (obtained from fielding characters featured in the story) doesn't give double the rewards, but rather a 100% chance to obtain whatever is displayed in the bonus section.",
        },
        {
          type: 'image',
          imageId: 'dailies-image-15',
        },
        {
          type: 'text',
          content:
            'This event\'s challenge mode is known as "Waning Moon Trial." It\'s quite typical as far as event challenge modes go, with five stages of increasingly difficult content. The number of stages can vary between events, though there is typically a minimum of five.',
        },
        {
          type: 'text',
          content: 'The rewards menu can be opened by pressing "rewards."',
        },
        {
          type: 'text',
          content:
            'This will bring up a display that shows what is obtained for clearing each challenge stage the first time around and what is obtained from repeated daily clears.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-16',
        },
        {
          type: 'text',
          content:
            "Remember, you can simply press Quick Clear on any stages you've already completed; there is no benefit to manually repeating an already cleared stage for either story or challenge mode. Always Quick Clear the hardest stage you've completed.",
        },
        {
          type: 'text',
          content:
            'To reiterate, for the event story stages, there are two difficulties: normal and nightmare. The entirety of normal difficulty can be accessed on day one of the event, but nightmare difficulty is typically reserved for day four or five, maybe even later into the event depending on event length.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-17',
        },
        {
          type: 'text',
          content:
            'Unlike challenge mode, only certain stages of the story mode can be repeated for rewards. The stage rewards are different for all repeatable stages, but the fact is stage 1-11 is always the most valuable',
        },
        {
          type: 'image',
          imageId: 'dailies-image-18',
        },
        {
          type: 'text',
          content: 'Remember that all of this content is intended to be repeated daily.',
        },
        {
          type: 'text',
          content:
            'Specifically nightmare difficulty stage 1-11, as it rewards you with four one-hour Blood Chalices (which give Divine Blood) on every clear.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-19',
        },
        {
          type: 'text',
          content:
            "The game's balance, including the cost of Divine Blood every twenty vassal levels, assumes that the player actively participates in character releases and content.",
        },
        {
          type: 'text',
          content:
            "For example, many sleepless nights pushing a 8k+ deficit (in campaign) have led to this level 120 Lamia, but if a player were to wait to upgrade her to level 121 only using Divine Blood from the Ritual (idle resources), it'd take about 6 entire days worth of idle resources to level Lamia past 120.",
        },
        {
          type: 'image',
          imageId: 'dailies-image-20',
        },
        {
          type: 'text',
          content:
            'For context, resources from the Ritual (12-hour idle resources) increase with every five stages completed in both normal/hard campaign content.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-21',
        },
        {
          type: 'text',
          content:
            "Even having pushed to chapter 13-6, the hourly earning of divine blood is still only 33. This number would mean that in total it'll take 28 days to level an entire five-vassal team past 120.",
        },
        {
          type: 'text',
          content:
            'Instead using only the one-hour Blood Chalices accumulated through farming nightmare mode stage 1-11 using two days worth of daily attempts (10 in total) and Scarlet Cords (explained in the shop tab).',
        },
        {
          type: 'text',
          content:
            "The player could instead level up nearly two characters (180 * 33 + 4873) past level 120. This is also not accounting for any additional sources of Divine Blood in the coming days, such as, but not limited to, Dalcarlo's upcoming event.",
        },
        {
          type: 'image',
          imageId: 'dailies-image-22',
        },
        {
          type: 'text',
          content: 'To end this section off.',
        },
        {
          type: 'text',
          content:
            "Please remember Silver and Blood is an idle game at heart, emphasis on game. It's the definition of a marathon and not a sprint!",
        },
        {
          type: 'text',
          content:
            'Though it is ironic considering this entire section is about optimizing your daily activities for events.',
        },
        {
          type: 'text',
          content:
            "Please don't feel pressured to log in every day like it's a job or feel that you're falling behind your peers in upcoming content.",
        },
        {
          type: 'text',
          content:
            'The only intent with this guide is to inform you, the audience, on how to navigate important systems in the game that are poorly explained; I just happen to also like sharing tips and optimizing gameplay.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-23',
        },
        {
          type: 'text',
          content:
            "Besides, once we as a community begin to hit level 200+, we're all going to be stuck on the same playing field for quite a while (we're going to need hundreds of thousands of Divine Blood).",
        },
        {
          type: 'text',
          content:
            "Also, yes, we can level past level 200; no, you don't need any more SSR duplicates. The level 160 wall is a one-and-done thing.",
        },
      ],
    },
    {
      id: 'shop-guide',
      title: 'The Shop and What to Buy',
      contentWithImages: [
        {
          type: 'text',
          content: 'To be frank, this will be the shortest section of the guide.',
        },
        {
          type: 'text',
          content:
            "Assuming you log in the majority of the days a character event lasts, you'll be able to purchase every item in the shop; there is no picking or choosing necessary.",
        },
        {
          type: 'image',
          imageId: 'menu-image-6',
        },
        {
          type: 'text',
          content:
            'The only thing you have to decide is whether you want to purchase Scarlet Cards or not.',
        },
        {
          type: 'image',
          imageId: 'shop-image-24',
        },
        {
          type: 'text',
          content:
            "The purpose of the Scarlet Cords is they can be used in place of your daily attempts for the event's story mode. You can typically purchase 45 of these cords for 900 Moon Tears in total.",
        },
        {
          type: 'text',
          content:
            'There is only a singular use for them (besides getting to read the story quicker).',
        },
        {
          type: 'image',
          imageId: 'dailies-image-18',
        },
        {
          type: 'text',
          content:
            'When nightmare difficulty opens for the event, the player, once having completed stage 1-11 on nightmare difficulty, should use however many Scarlet Cords they purchased to Quick Clear the stage (1-11) to obtain four one-hour Blood Chalices for each clear.',
        },
        {
          type: 'image',
          imageId: 'dailies-image-19',
        },
        {
          type: 'text',
          content:
            "So, the only real thought a player needs to put into the shop is whether it's worth it to spend however many 100s of Moon Tears (up to 900) for an extra 20 one-hour Blood Chalices (up to 180) for their account.",
        },
        {
          type: 'image',
          imageId: 'shop-image-25',
        },
        {
          type: 'text',
          content:
            "Remember that these Blood Chalices and every core resource-granting item (Pureblood's Glazed Pot, Scattered Solis) have a time signature.",
        },
        {
          type: 'text',
          content:
            'Thus, all of these items scale with Ritual hourly resource gain and can be hoarded all the way until the end game, where their value will have exponentially increased.',
        },
        {
          type: 'image',
          imageId: 'shop-image-26',
        },
        {
          type: 'text',
          content: 'From LV.20:',
        },
        {
          type: 'image',
          imageId: 'shop-image-27',
        },
        {
          type: 'text',
          content: 'From LV.54:',
        },
        {
          type: 'image',
          imageId: 'shop-image-28',
        },
      ],
    },
    {
      id: 'rate-up-banner',
      title: 'Rate-Up Banner - 50/50 Pity System',
      contentWithImages: [
        {
          type: 'image',
          imageId: 'banner-image-29',
        },
        {
          type: 'text',
          content:
            'Last but not least, I just wanted to draw attention to some information regarding how rate-up banners function.',
        },
        {
          type: 'image',
          imageId: 'banner-image-30',
        },
        {
          type: 'text',
          content:
            "Firstly, all the pity built up on one rate-up banner will transfer to the next one once that original one is over. So if a player draws forty pulls on the Lamia banner and gets zero SSR Vassals, their forty pity will still be in effect for Dalcarlo's banner.",
        },
        {
          type: 'image',
          imageId: 'banner-image-31',
        },
        {
          type: 'text',
          content:
            'Secondly, if a player manages to reach 59 consecutive pulls without an SSR vassal, they will be guaranteed an SSR Vassal on their 60th attempt with a 50/50 chance of getting the rate-up character. This information is made even more important with the third piece of info.',
        },
        {
          type: 'image',
          imageId: 'banner-image-32',
        },
        {
          type: 'text',
          content:
            'Thirdly, if a player manages to activate the 59-pull pity system but loses the 50/50 draw and gets neither the rate-up character nor an Ancestor (Ultra-Rare) character, then the next SSR will be guaranteed to be either the rate-up character or an Ancestor-rarity Vassal!',
        },
      ],
    },
  ],

  images: [
    {
      id: 'banner',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/1.jpg',
      alt: 'Far Side of the Moon Event Banner',
    },
    {
      id: 'guide-image-1',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/1.jpg',
      alt: 'Far Side of the Moon - Image 1',
    },
    {
      id: 'guide-image-2',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/2.jpg',
      alt: 'Far Side of the Moon - Image 2',
    },
    {
      id: 'menu-image-3',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/3.jpg',
      alt: 'Event Menu Overview',
    },
    {
      id: 'menu-image-4',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/4.jpg',
      alt: 'Go to Embrace Button',
    },
    {
      id: 'menu-image-5',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/5.jpg',
      alt: 'Rate-up Banner Interface',
    },
    {
      id: 'menu-image-6',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/6.jpg',
      alt: 'Moondream Journey Shop Button',
    },
    {
      id: 'menu-image-7',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/7.jpg',
      alt: 'Imbued Vassal Interface',
    },
    {
      id: 'menu-image-8',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/8.jpg',
      alt: 'Imbued Vassal List',
    },
    {
      id: 'menu-image-9',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/9.jpg',
      alt: 'Bonus Rewards Explanation',
    },
    {
      id: 'menu-image-10',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/10.jpg',
      alt: 'Combat Stages - Story and Challenge Modes',
    },
    {
      id: 'menu-image-11',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/11.jpg',
      alt: 'Newborn Trial Checklist',
    },
    {
      id: 'menu-image-12',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/12.jpg',
      alt: 'Daily Login Rewards Icon',
    },
    {
      id: 'menu-image-13',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/13.jpg',
      alt: 'Daily Login Rewards Interface',
    },
    {
      id: 'dailies-image-14',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/14.jpg',
      alt: 'Event Stage Rewards Display',
    },
    {
      id: 'dailies-image-15',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/15.jpg',
      alt: 'Stage 1-11 Nightmare Difficulty Rewards',
    },
    {
      id: 'dailies-image-16',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/16.jpg',
      alt: 'Waning Moon Trial Challenge Rewards',
    },
    {
      id: 'dailies-image-17',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/17.jpg',
      alt: 'Story Mode Normal vs Nightmare Access',
    },
    {
      id: 'dailies-image-18',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/18.jpg',
      alt: 'Repeatable Story Stages',
    },
    {
      id: 'dailies-image-19',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/19.jpg',
      alt: 'Blood Chalices from Stage 1-11',
    },
    {
      id: 'dailies-image-20',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/20.jpg',
      alt: 'Level 120 Lamia Divine Blood Cost',
    },
    {
      id: 'dailies-image-21',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/21.jpg',
      alt: 'Ritual Idle Resources Divine Blood',
    },
    {
      id: 'dailies-image-22',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/22.jpg',
      alt: 'Divine Blood Calculation Comparison',
    },
    {
      id: 'dailies-image-23',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/23.jpg',
      alt: 'Community Level 200+ Progression',
    },
    {
      id: 'shop-image-24',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/24.jpg',
      alt: 'Scarlet Cords in Event Shop',
    },
    {
      id: 'shop-image-25',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/25.jpg',
      alt: 'Moon Tears Cost Analysis',
    },
    {
      id: 'shop-image-26',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/26.jpg',
      alt: 'Resource Items Time Scaling',
    },
    {
      id: 'shop-image-27',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/27.jpg',
      alt: 'Level 20 Resource Values',
    },
    {
      id: 'shop-image-28',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/28.jpg',
      alt: 'Level 54 Resource Values',
    },
    {
      id: 'banner-image-29',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/29.jpg',
      alt: 'Rate-Up Banner Information',
    },
    {
      id: 'banner-image-30',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/30.jpg',
      alt: 'Banner Pity Transfer System',
    },
    {
      id: 'banner-image-31',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/31.jpg',
      alt: 'Pity System Mechanics',
    },
    {
      id: 'banner-image-32',
      src: '/images/games/silver-and-blood/Events/FarSideOfTheMoon/32.jpg',
      alt: '50/50 Pity and Guaranteed System',
    },
  ],

  sourceInfo: {
    source: 'Community Guide by ILikeBirds',
    gameUrl: 'silver-and-blood',
    verified: true,
    lastUpdated: 'July 5, 2025',
  },
};

export const eventSeoData = {
  title: 'Far Side of the Moon Event Guide - Silver and Blood',
  description:
    "Complete guide to Lamia's Far Side of the Moon character event in Silver and Blood. Learn navigation, modes, and resource collection strategies.",
  keywords: [
    'Silver and Blood',
    'Far Side of the Moon',
    'Lamia event',
    'character event guide',
    'nightmare mode',
    'event shop',
  ],
};
