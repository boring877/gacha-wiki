/**
 * Busty Burst Banner Timeline Data
 * Chronological record of all summon banners
 * Server: UTC timezone, reset at 03:00 UTC
 */

export const bannerTimelineData = [
  // #38 - Bridal Festival / Bride of Luck Theresia & Bride of Purity Giselle (Sep 1 - Sep 8) - CURRENT
  {
    id: 'bridal-festival-2026',
    title: '"Blessing of the Brides" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[The Bride of Luck] Theresia',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[The Bride of Purity] Giselle',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-09-01T04:00:00Z',
    endDate: '2026-09-08T04:00:00Z',
    description:
      '"Blessing of the Brides" Event Summon! Rate up for [The Bride of Luck] Theresia and [The Bride of Purity] Giselle. Every summer solstice the town holds the Bridal Festival, where three brides scatter flower petals to bring blessings of happiness — but the Lord of Zoakis is determined to ruin it.',
    note: 'Bridal Festival event. [The Bride of Seduction] Ophelio (characterId 2142) is NOT on the banner — she is obtained from the event itself (SR event reward). Dates assumed from the current EN rotation (Sep 1-8) — confirm in-game.',
    status: 'current',
    image: 'banner-bridal-festival',
  },
  // #37 - "No more bet" / Gil & Bonita (Aug 25 - Sep 1) - ENDED
  {
    id: 'no-more-bet-2026',
    title: '"No more bet" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Gil',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Bonita',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2026-08-25T04:00:00Z',
    endDate: '2026-09-01T04:00:00Z',
    description:
      '"No more bet" Event Summon! Rate up for Gil and Bonita in casino attire. The two dealers invite you to the table — no more bets!',
    note: 'Casino-themed event summon featuring Gil (SSR Attacker) and Bonita (SSR Support). End time from game data; start derived from the standard 7-day EN rotation.',
    status: 'ended',
    image: 'banner-no-more-bet',
  },
  // #36 - Main Story Chapter 12 / Sirius (Aug 25 - Sep 1) - ENDED
  {
    id: 'main-story-12-2026',
    title: '"Main Story Chapter 12 Open" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Sirius',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-08-25T04:00:00Z',
    endDate: '2026-09-01T04:00:00Z',
    description:
      '"Main Story Chapter 12 Open" Event Summon! New Paladin Rate Up! Sirius arrives with the opening of Main Story Chapter 12.',
    note: 'Sirius (SSR Attacker, characterId 2139) released alongside Main Story Chapter 12. End time from game data; start derived from the standard 7-day EN rotation.',
    status: 'ended',
    image: 'banner-main-story-12',
  },
  // #36 - FANZINE 2nd / Tempting Naked Apron Diana (Aug 11 - Aug 18) - CURRENT
  {
    id: 'fanzine-2nd-2026',
    title: '"FANZINE" 2nd Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Tempting Naked Apron] Diana',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-08-11T04:00:00Z',
    endDate: '2026-08-18T03:00:00Z',
    description: '"FANZINE" 2nd Event Summon! New Paladin Rate Up! [Tempting Naked Apron] Diana. What if Diana were your beloved wife...? You\'ve come down with a cold and are lying in bed. By your side is your beloved wife, Diana, gently taking care of you. The next morning, you find her in the kitchen wearing nothing but an apron.',
    note: '[Tempting Naked Apron] Diana (SSR Light Physical Attacker, characterId 2134). Also features Competitive Battle FIRE and HARD difficulty for "Beast Huntress". Maintenance 2026/8/11 4:00-7:00 UTC.',
    status: 'current',
    image: 'banner-fanzine-2nd',
  },
  // #35 - Beast Huntress / Eva, Ines, Collie (Aug 1 - Aug 15) - CURRENT
  {
    id: 'beast-huntress-2026',
    title: '"Beast Huntress" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Eva',
        rarity: 'SSR',
        type: 'Tank',
      },
      {
        name: 'Ines',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Collie',
        rarity: 'SR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-08-01T00:00:00Z',
    endDate: '2026-08-15T03:00:00Z',
    description: '"Beast Huntress" Event Summon! New Paladin Rate Up! Eva, the One-Strike Busty Beauty of Dominion. Ines, the Busty Archer Who Pierces Magical Beasts. Collie, the Busty Beast Dismantler. Three Beast Huntresses travel to Elron in search of magical beasts—and something is following them.',
    note: 'Burst Month Part.1 event. Eva (SSR Dark Physical Tank), Ines (SSR Dark Physical Attacker), and Collie (SR Wind Physical Attacker). New Paladins will be added to the Standard Banner after the event ends.',
    status: 'current',
    image: 'banner-beast-huntress',
  },
  // #34 - Burst Month / Oppai Month 2026 (Aug 1 - Aug 31) - CURRENT
  {
    id: 'burst-month-2026',
    title: '"Burst Month" Special Event Summon',
    bannerType: 'event',
    featuredPaladins: [],
    startDate: '2026-08-01T00:00:00Z',
    endDate: '2026-08-31T23:59:59Z',
    description: 'August is the "Burst Month"! Divided into two parts: Part.1 (8/1 to 8/15) and Part.2 (8/16 to 8/31). Furthermore, there will be special events on 8/1, 8/18, and 8/28! Detailed information announced in-game on 8/1.',
    note: 'Month-long celebration event. Part.1: Aug 1-15, Part.2: Aug 16-31. Special events on Aug 1, Aug 18, and Aug 28.',
    status: 'current',
    image: 'banner-burst-month',
  },
  // #33 - FANZINE 1st / Fresh Out of the Pool Artia (Jul 28 - Aug 4) - ENDED
  {
    id: 'fanzine-1st-2026',
    title: '"FANZINE" 1st Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Fresh Out of the Pool] Artia',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-07-28T04:00:00Z',
    endDate: '2026-08-04T03:00:00Z',
    description: '"FANZINE" 1st Event Summon! New Paladin Rate Up! [Fresh Out of the Pool] Artia, a member of the swim team at Private Elron Academy, devoting herself to early morning training with her underclassman boyfriend before the preliminary tournament.',
    note: '[Fresh Out of the Pool] Artia (SSR Water Magic Attacker). Also features Competitive Battle MIND. Maintenance 2026/7/28 4:00-7:00 UTC.',
    status: 'ended',
    image: 'banner-fanzine-1st',
  },
  // #32 - Underboob Cheerleader (Jul 14 - Jul 28) - ENDED
  {
    id: 'underboob-cheerleader-2026',
    title: '"Underboob Cheerleader" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Underboob Cheerleader] Gemini',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Underboob Cheerleader] Vanessa',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Underboob Cheerleader] Henrietti',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2026-07-14T04:00:00Z',
    endDate: '2026-07-28T03:00:00Z',
    description: '"Underboob Cheerleader" Event Summon! Limited-Time Paladin Rate Up! Gemini, the Swing Dancer. Vanessa, the Thief Dancer. Henrietti, the Dance Appraiser. Three unlucky souls guided by Marina the fortune teller to a sacred festival dance.',
    note: '[Underboob Cheerleader] Gemini (SSR Wind Physical Support), Vanessa (SSR Water Magic Support), and Henrietti (SR Mind Physical Support). New Paladins will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-underboob-cheerleader',
  },
  // #31 - Burst FES / Abigail (Jul 7 - Jul 14) - ENDED
  {
    id: 'burst-fes-2026',
    title: '"Burst FES" Special Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Abigail',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2026-07-07T04:00:00Z',
    endDate: '2026-07-14T03:00:00Z',
    description: '"Burst FES" Special Event Summon! New Paladin Rate Up! Abigail, the Sharp-Tongued and Rude Lady Doctor, highly skilled in healing magic, herbal medicine, and the practice of medicine.',
    note: 'Abigail (SSR Fire Physical Support). Also features Chapter 11 of the Main Story. Maintenance 2026/7/7 4:00-7:00 UTC.',
    status: 'ended',
    image: 'banner-burst-fes',
  },
  // #30 - Twin Witches / Nina (Jun 30 - Jul 7) - ENDED
  {
    id: 'twin-witches-2026',
    title: '"Twin Witches" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Nina',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-06-30T04:00:00Z',
    endDate: '2026-07-07T03:00:00Z',
    description: 'New event "Twin Witches" Summon! Limited-Time Paladin Rate Up! Nina, the Witch Who Lost Her Confidence Through Repeated Failure, Ophelio\'s junior sent to bring her back to the Village of Witches.',
    note: 'Nina (SSR Water Magic Attacker). Also features rerun of "Beauty Witch · Party People☆" and Competitive Battle WIND. Maintenance 2026/6/30 4:00-7:00 UTC. Compensation: Crystals x100, AP x100.',
    status: 'ended',
    image: 'banner-twin-witches',
  },
  // #29 - Chapter 10 / Yaksha (Jun 23 - Jul 7) - ENDED
  {
    id: 'chapter-10-yaksha-2026',
    title: 'Main Story Chapter 10 Open Pick Up Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Yaksha',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-06-23T04:00:00Z',
    endDate: '2026-07-07T03:00:00Z',
    description: 'Main Story Chapter 10 Open Pick Up Summon! New Paladin Rate Up! Yaksha, the Forgotten Assassin, the most skilled assassin among Shura\'s ranks.',
    note: 'Yaksha (SSR Dark Physical Attacker). Also features HARD difficulty for "Fat is Justice—No, the Devil" and rerun of "Blade of Judgment". Maintenance 2026/6/23 4:00-7:00 UTC.',
    status: 'ended',
    image: 'banner-chapter-10-yaksha',
  },
  // #25 - Fat is Justice—No, the Devil / Half Anniversary 3rd (Jun 16 - Jun 23) - ENDED
  {
    id: 'fat-is-justice-2026',
    title: '"Fat is Justice—No, the Devil" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Raoul',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Cluul',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Beautia',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2026-06-16T04:00:00Z',
    endDate: '2026-06-23T03:00:00Z',
    description: 'New event "Fat is Justice—No, the Devil" Summon! Limited-Time Paladin Rate Up! Raoul, the Chubby and Adorable Twin Paladin. Cluul, the Chubby and Stoic Twin Paladin. Beautia, the Health-Conscious Paladin of Love and Beauty.',
    note: 'Half Anniversary 3rd event. Raoul (SSR Mind Magic Attacker), Cluul (SSR Mind Magic Attacker), and Beautia (SR Mind Physical Support). Also features Competitive Battle MIND. Maintenance 2026/6/16 4:00-7:00 UTC. Compensation: Crystals x100, AP x100.',
    status: 'ended',
    image: 'banner-fat-is-justice',
  },
  // #24 - Project: Bunny / Half Anniversary 2nd (Jun 9 - Jun 23) - CURRENT
  {
    id: 'project-bunny-2026',
    title: '"Project: Bunny" Anniversary Limited Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Sweet Bunny] Artia',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2026-06-09T04:00:00Z',
    endDate: '2026-06-23T03:00:00Z',
    description: 'Anniversary Limited Event "Project: Bunny" Summon! Limited-Time Paladin Rate Up! [Sweet Bunny] Artia, who joins the Half Anniversary surprise celebration at the last minute.',
    note: 'Half Anniversary 2nd event. [Sweet Bunny] Artia (SSR Mind Magic Support). Maintenance 2026/6/9 4:00-7:00 UTC.',
    status: 'current',
    image: 'banner-project-bunny',
  },
  // #23 - Half Anniversary / Fionore (Jun 2 - Jun 9) - ENDED
  {
    id: 'half-anniversary-fionore-2026',
    title: '"Half Anniversary" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Fionore',
        rarity: 'SSR',
        type: 'Tank',
      },
    ],
    startDate: '2026-06-02T04:00:00Z',
    endDate: '2026-06-09T03:00:00Z',
    description: 'Half Anniversary Event Summon! Limited-Time Paladin Rate Up! Fionore, the Ageless Beauty Aunt Eight Years Older, who returns to the role of Paladin after five years.',
    note: 'Half Anniversary 1st event. Fionore (SSR Light Physical Tank). Also features Tower of Trials "Resurrection of Mother\'s Milk", Competitive Battle WATER, and new Season Pass. Maintenance 2026/6/2 4:00-7:30 UTC.',
    status: 'ended',
    image: 'banner-half-anniversary-fionore',
  },
  // #22 - Lilirara Rate Up (May 26 - Jun 2) - ENDED
  {
    id: 'lilirara-2026',
    title: 'Lilirara Rate Up Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Lilirara',
        rarity: 'SSR',
        type: 'Tank',
      },
    ],
    startDate: '2026-05-26T03:00:00Z',
    endDate: '2026-06-02T03:00:00Z',
    description: 'Lilirara Rate Up Summon! New Paladin Rate Up! Lilirara, the Sweet-Toothed Leopard Beastgirl.',
    note: 'Lilirara (SSR Wind Physical Tank). New Paladin will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-lilirara',
  },
  // #21 - Lilith Rate Up (May 19 - May 26) - ENDED
  {
    id: 'lilith-2026',
    title: 'Lilith Rate Up Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Lilith',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-05-19T03:00:00Z',
    endDate: '2026-05-26T03:00:00Z',
    description: 'Lilith Rate Up Summon! New Paladin Rate Up! Lilith, the Fanatic Believer of the Demon God Cult.',
    note: 'Lilith (SSR Dark Physical Attacker). New Paladin will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-lilith',
  },
  // #20 - Priscilla Rate Up (May 12 - May 19) - ENDED
  {
    id: 'priscilla-2026',
    title: 'Priscilla Rate Up Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Priscilla',
        rarity: 'SSR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-05-12T03:00:00Z',
    endDate: '2026-05-19T03:00:00Z',
    description: 'Priscilla Rate Up Summon! New Paladin Rate Up! Priscilla, the Orphan Who Commands Dolls.',
    note: 'Priscilla (SSR Mind Magic Attacker). New Paladin will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-priscilla',
  },
  // #19 - Paladin Introduction - Diana, Zilka, Sarka (May 5 - May 19) - ENDED
  {
    id: 'paladin-introduction-diana-2026',
    title: '"Paladin Introduction" Event Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Diana',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Zilka',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Sarka',
        rarity: 'SR',
        type: 'Attacker',
      },
    ],
    startDate: '2026-05-05T03:00:00Z',
    endDate: '2026-05-19T03:00:00Z',
    description: 'Paladin Introduction Event Summon! New Paladin Rate Up! Diana, the Nursing Dual Swordswoman. Zilka, the Dual Swordswoman Who Defies Her Mother and the Head. Sarka, the Dream-Shattering Academy Wrecker.',
    note: 'Diana (SSR Light Physical Attacker), Zilka (SSR Water Physical Attacker), and Sarka (SR Water Physical Attacker). New Paladins will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-paladin-introduction-diana',
  },
  // #18 - Magdalena (Apr 28 - May 5) - ENDED
  {
    id: 'magdalena-2026',
    title: 'Magdalena Rate Up Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Magdalena',
        rarity: 'SSR',
        type: 'Tank',
      },
    ],
    startDate: '2026-04-28T03:00:00Z',
    endDate: '2026-05-05T03:00:00Z',
    description: 'Magdalena Rate Up Summon! New Paladin Rate Up! Magdalena, the Sacred Tree Witch.',
    note: 'Magdalena (SSR Wind Magic Tank). Features a unique Magic Wind Tank with Hit-Based Healing Shield, dual ATK debuff, and Dispel ultimate.',
    status: 'ended',
    image: 'magdalena-2108',
  },
  // #17 - Paladin Introduction - Trish, Lycorys, Katisha (Apr 21 - May 5) - ENDED
  {
    id: 'paladin-introduction-trish-2026',
    title: '"Paladin Introduction" Event Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Trish',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: 'Lycorys',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: 'Katisha',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-04-21T03:00:00Z',
    endDate: '2026-05-05T03:00:00Z',
    description: 'Paladin Introduction Event Summon! New Paladin Rate Up! Trish, the Herbalist Who Resembles Someone. Lycorys, the Giggling Alchemist. Katisha, the Stubborn Elite Paladin.',
    note: 'Trish (SSR Mind Physical Support), Lycorys (SSR Dark Physical Attacker), and Katisha (SR Holy Physical Attacker). New Paladins will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-paladin-introduction-trish',
  },
  // #16 - Paladin Introduction - Viatrice (Apr 14 - Apr 21) - ENDED
  {
    id: 'paladin-introduction-viatrice-2026',
    title: '"Paladin Introduction" Event Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Viatrice',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-04-14T03:00:00Z',
    endDate: '2026-04-21T03:00:00Z',
    description: 'Paladin Introduction Event Summon! New Paladin Rate Up! Viatrice, the Kind-Hearted Courtesan Lingering in This World. An exceptionally voluptuous courtesan who moved from the town of Haza to Elron, her gentle and loving nature made her highly sought-after — until misfortune found its way to her.',
    note: 'Viatrice (SSR Fire Physical Attacker). New Paladin will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-paladin-introduction-viatrice',
  },
  // #15 - Paladin Introduction - Inrine, Henrietti, Vanessa (Apr 7 - Apr 21) - CURRENT
  {
    id: 'paladin-introduction-inrine-2026',
    title: '"Paladin Introduction" Event Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Inrine',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: 'Henrietti',
        rarity: 'SR',
        type: 'Support',
      },
      {
        name: 'Vanessa',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-04-07T03:00:00Z',
    endDate: '2026-04-21T03:00:00Z',
    description: 'Paladin Introduction Event Summon! New Paladin Rate Up! Inrine, the Solitary Swordmaster Knight. Henrietti, the Flawless Woman. Vanessa, the Woman Without Footsteps.',
    note: 'Inrine (SSR Water Physical Attacker), Henrietti (SR Fire Physical Support), and Vanessa (SR Wind Physical Attacker). New Paladins will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'banner-paladin-introduction-inrine',
  },
  // #13 - Villain Halloween (Mar 24 - Apr 7) - ENDED
  {
    id: 'villain-halloween-2026',
    title: '"Villain Halloween" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[The Strongest Witch] Shaharl',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Seductive Vampire] Soltina',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Slightly Mischievous Devil] Luca',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-03-24T03:00:00Z',
    endDate: '2026-04-07T03:00:00Z',
    description: 'Villain Halloween Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Halloween themed event featuring witch, vampire, and devil themed characters.',
    status: 'ended',
    image: 'banner-villain-halloween',
  },
  // #12 - Swift Wind Unicorn / Giselle (Mar 31 - Apr 7) - ENDED
  {
    id: 'swift-wind-unicorn-giselle-2026',
    title: '"Swift Wind Unicorn" Event Summon',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Giselle',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-03-31T03:00:00Z',
    endDate: '2026-04-07T03:00:00Z',
    description: 'Swift Wind Unicorn Event Summon! Rate Up for Giselle, the Beast-Taming Paladin!',
    note: 'Standard unit Giselle rate up banner. A Holy Physical Attacker riding a unicorn born from her own spiritual energy.',
    status: 'ended',
    image: 'banner-swift-wind-unicorn',
  },
  // #11 - Infinite Subjugation Battle - Ruru (Mar 17 - Mar 24) - ENDED
  {
    id: 'infinite-subjugation-battle-ruru-2026',
    title: '"Infinite Subjugation Battle" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Ruru',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2026-03-17T03:00:00Z',
    endDate: '2026-03-24T03:00:00Z',
    description: 'Infinite Subjugation Battle Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Infinite Subjugation Battle event featuring Ruru.',
    status: 'ended',
    image: 'banner-infinite-subjugation-ruru',
  },
  // #11 - Smile to the Goddess of Dance (Mar 10 - Mar 24) - ENDED
  {
    id: 'smile-dance-2026',
    title: '"Smile to the Goddess of Dance" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Top Dancer] Messeria',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Fruit Basket] Bianca',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[How About a Beer?] Stenrina',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2026-03-10T03:00:00Z',
    endDate: '2026-03-24T03:00:00Z',
    description: 'Smile to the Goddess of Dance Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Harvest festival dance event featuring Messeria, Bianca, and Stenrina.',
    status: 'ended',
    image: 'banner-smile-dance',
  },
  // #9 - Lust & Raguen (Feb 24 - Mar 10) - ENDED
  {
    id: 'lust-raguen-2026',
    title: '"Lust & Raguen" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Lust',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: 'Raguen',
        rarity: 'SSR',
        type: 'Defense',
      },
    ],
    startDate: '2026-02-24T03:00:00Z',
    endDate: '2026-03-10T03:00:00Z',
    description: 'Lust & Raguen Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Event featuring Lust and Raguen.',
    status: 'ended',
    image: 'banner-lust-raguen',
  },
  // #8 - Bloodstained Blade (Feb 24 - Mar 10) - ENDED
  {
    id: 'bloodstained-blade-2026',
    title: '"Bloodstained Blade" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Setsuka',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: 'Gracie',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: 'Lynette',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2026-02-24T03:00:00Z',
    endDate: '2026-03-10T03:00:00Z',
    description: 'Bloodstained Blade Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Event featuring Setsuka, Gracie, and Lynette.',
    status: 'ended',
    image: 'banner-bloodstained-blade',
  },
  // #11 - Lapis - The Vengeful Dual Swordswoman (Feb 17 - Feb 24) - CURRENT
  {
    id: 'lapis-main7-2026',
    title: 'New Paladin - Rate Up!',
    bannerType: 'new',
    featuredPaladins: [
      {
        name: 'Lapis',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-02-17T03:00:00Z',
    endDate: '2026-02-24T03:00:00Z',
    description: 'New Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'This Paladin will be added to the "Otherworldly Summon" after the event ends.',
    status: 'ended',
    image: 'banner-lapis',
  },
  // #10 - Valentine's Event (Feb 10 - Feb 24) - CURRENT
  {
    id: 'valentine-event13-2026',
    title: 'Valentine Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Innocent Confectioner] Frey',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Chocolate Dragon Knight] Hildis',
        rarity: 'SSR',
        type: 'Defense',
      },
      {
        name: '[Champion of Love and Chocolate] Shaty',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-02-10T03:00:00Z',
    endDate: '2026-02-24T03:00:00Z',
    description: 'Valentine Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Valentine themed banner featuring chocolate and love themed characters.',
    status: 'ended',
    image: 'banner-valentine',
  },
  // #9 - Tower of Trials - Rosa (Feb 3 - Feb 10) - ENDED
  {
    id: 'tower-of-trials-rosa-2026',
    title: 'Tower of Trials Limited-timed Paladin - Rate Up!',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Rosa',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-02-03T03:00:00Z',
    endDate: '2026-02-10T03:00:00Z',
    description: 'Tower of Trials Limited-timed Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'This Paladin will be added to the "Tower of Trials Summon" after the event ends.',
    status: 'ended',
    image: 'banner-rosa',
  },
  // #8 - Blade of Judgment (Jan 27 - Feb 10) - ENDED
  {
    id: 'blade-of-judgment-2026',
    title: '"Blade of Judgment" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Lucie',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: 'Rui',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-01-27T03:00:00Z',
    endDate: '2026-02-10T03:00:00Z',
    description: '"Blade of Judgment" Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'New Paladins will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'blade-of-judgment',
  },
  // #7 - Infinite Subjugation Battle - Pastel (Jan 20 - Jan 27) - ENDED
  {
    id: 'infinite-subjugation-battle-pastel-2026',
    title: '"Beat them down with fiery passion" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Pastel',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2026-01-20T03:00:00Z',
    endDate: '2026-01-27T03:00:00Z',
    description: 'Infinite Subjugation Battle Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'This Paladin will be added to the Standard Banner after the event ends.',
    status: 'ended',
    image: 'infinite-subjugation-pastel',
  },
  // #6 - Octo-Octo Beach Panic Event Summon (Jan 13 - Jan 27) - ENDED
  {
    id: 'octo-octo-beach-panic-2026',
    title: '"Octo-Octo Beach Panic!!" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Seductive High-Cut Swimsuit] Nerys',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Killer☆Bikini] Theresia',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Epic Fishing] Meinias',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-01-13T03:00:00Z',
    endDate: '2026-01-27T03:00:00Z',
    description: 'Octo-Octo Beach Panic!! Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Summer beach banner featuring swimsuit characters.',
    status: 'ended',
    image: 'octo-octo-beach-panic',
  },
  // #5 - Beauty Witch Party People Event Summon (Jan 6 - Jan 13) - CURRENT
  {
    id: 'beauty-witch-party-people-2026',
    title: '"Beauty Witch Party People" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Ophelio',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-01-06T02:00:00Z',
    endDate: '2026-01-13T02:00:00Z',
    description: '"Beauty Witch Party People" Event Summon! Limited-Time Paladin Rate Up!',
    note: 'Features Ophelio, a Fire Magic Attacker.',
    status: 'current',
    image: 'beauty-witch-party-people',
  },
  // #4 - New Year's Evil Dragons Event Summon (Dec 30 - Jan 13) - CURRENT
  {
    id: 'new-year-evil-dragons-2025',
    title: "New Year's Evil Dragons Event Summon",
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Dragon Crusher] Medusa',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: "[New Year's Calligraphy] Pastel",
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Overflowing Jubako] Lynette',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-30T03:00:00Z',
    endDate: '2026-01-13T03:00:00Z',
    description: "New Year's Evil Dragons Event Summon! Limited-Time New Year Paladin Rate Up!",
    note: 'New Year limited banner featuring Dragon Crusher Medusa and New Year themed characters.',
    status: 'current',
    image: 'new-year-2025-3',
  },
  // #3 - Offering Cookies for the Holy Night (Dec 16 - Dec 30) - ENDED
  {
    id: 'offering-cookies-holy-night',
    title: 'Offering Cookies for the Holy Night',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Queen of Pies and Cookies] Aphrodia',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Magical Holy Night Festival] Kaguya',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Holy Night Succubus] Yu Rima Elca',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-16T03:00:00Z',
    endDate: '2025-12-30T03:00:00Z',
    description:
      'Offering Cookies for the Holy Night Event Summon! Limited-Time Christmas Paladin Rate Up!',
    note: 'Christmas event banner with limited-time holiday characters.',
    status: 'ended',
    image: 'holy-night-cookies',
  },
  // #2 - Shaty (Dec 9 - Dec 16) - ENDED
  {
    id: 'main-story-chapter-6-shaty',
    title: 'Main Story Chapter 6 Open Pick Up Summon',
    bannerType: 'new', // 'event' | 'new' | 'rerun'
    featuredPaladins: [
      {
        name: 'Shaty',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2025-12-09T03:00:00Z',
    endDate: '2025-12-16T03:00:00Z',
    description: 'Main Story Chapter 6 Open Pick Up Summon! New Paladin Rate Up!',
    note: 'The featured Paladin will be added to the normal banner after the event in a later maintenance.',
    status: 'ended',
    image: 'shaty-chapter-6',
  },
  // #1 - Vern Founding Festival (Dec 4 - Dec 18) - CURRENT
  {
    id: 'vern-founding-festival',
    title: 'Vern Founding Festival Event Summon',
    bannerType: 'event', // 'event' | 'new' | 'rerun'
    featuredPaladins: [
      {
        name: '[Festival Empress] Shamshel',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Festival Attire] Estiriel',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-04T00:00:00Z',
    endDate: '2025-12-18T03:00:00Z',
    description: 'Vern Founding Festival Event Summon! Limited-Time Paladin Rate Up!',
    note: 'First banner when the game released in Ero Lab!',
    status: 'current',
    image: 'vern-founding-festival',
  },
];

/**
 * Seasonal Characters Data
 * Characters available for a 3-month season period
 */
export const seasonalCharactersData = [
  {
    id: 'battle-pass-season-4',
    name: 'Battle Pass Season 4',
    startDate: '2026-09-01T04:00:00Z',
    endDate: '2026-12-01T03:00:00Z',
    characters: [
      {
        name: '[School Buruma] Black Knight',
        rarity: 'SSR',
        type: 'Attack',
        image: 'banner-battle-pass-season-4',
      },
    ],
    status: 'current',
  },
  {
    id: 'battle-season',
    name: 'Battle Season',
    startDate: '2026-02-24T03:00:00Z',
    endDate: '2026-06-02T03:00:00Z',
    characters: [
      {
        name: '[Samurai Cowgirl] Setsuka',
        rarity: 'SSR',
        type: 'Attack',
        image: 'banner-battle-season-setsuka',
      },
    ],
    status: 'current',
  },
  {
    id: 'season-1',
    name: 'Season 1',
    startDate: '2025-12-04T00:00:00Z',
    endDate: '2026-03-03T03:00:00Z',
    characters: [
      {
        name: '[Mischievous Mermaid Princess] Lorelia',
        rarity: 'SSR',
        type: 'Attack',
        image: 'season-1-lorelia',
      },
    ],
    status: 'ended',
  },
];

/**
 * Compute banner status from dates relative to now (UTC).
 * - 'upcoming' if start date is in the future
 * - 'current' if now is between start and end date
 * - 'ended' if end date has passed
 */
function computeStatus(banner) {
  const now = Date.now();
  const start = new Date(banner.startDate).getTime();
  const end = new Date(banner.endDate).getTime();
  if (now < start) return 'upcoming';
  if (now >= start && now <= end) return 'current';
  return 'ended';
}

// Overwrite hardcoded status with date-derived status for every banner
bannerTimelineData.forEach(banner => {
  banner.status = computeStatus(banner);
});
// Also apply to seasonal characters
seasonalCharactersData.forEach(season => {
  season.status = computeStatus(season);
});

/**
 * Guild Battle pickup summons, tracked separately from the main timeline.
 */
export const guildBattleData = [
  {
    id: 'guild-battle-wind-2026-09',
    title: 'Guild Battle・WIND Pick Up Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Artia',
        rarity: 'SSR',
        type: 'Tank',
      },
      {
        name: 'Hildis',
        rarity: 'SSR',
        type: 'Attacker',
      },
      {
        name: 'Nora',
        rarity: 'SSR',
        type: 'Tank',
      },
    ],
    startDate: '2026-08-25T04:00:00Z',
    endDate: '2026-09-01T04:00:00Z',
    description:
      'Guild Battle・WIND support summon! Rate up for Wind-attribute paladins Artia, Hildis and Nora for the WIND Guild Battle.',
    note: 'Attribute pickup summon running alongside the WIND Guild Battle. End time from game data; start derived from the standard 7-day EN rotation.',
    status: 'ended',
    image: 'banner-guild-battle-wind',
  },
];

guildBattleData.forEach(banner => {
  banner.status = computeStatus(banner);
});

/**
 * Get all banners sorted by start date (newest first)
 */
export function getAllBanners() {
  return bannerTimelineData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
}

/**
 * Get banner by ID
 */
export function getBannerById(id) {
  return bannerTimelineData.find(banner => banner.id === id);
}

/**
 * Get current banners
 */
export function getCurrentBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'current');
}

/**
 * Get upcoming banners
 */
export function getUpcomingBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'upcoming');
}

/**
 * Get ended banners
 */
export function getEndedBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'ended');
}
