// Stella Sora Community Builds, curated from Chinese, Japanese and Korean community guides.
// Sources are the CN (TapTap, NGA, Bilibili), JP (Game8 JP, AppMedia, Gamerch, raval-h) and
// KR (DC Inside, Arca.live, Naver blogs) communities. Potential names for CN sources were
// translated mechanically through the game's own localization (loc_cn to loc_en), so they
// match all-potentials.js and render with correct card art. Team members are wiki slugs
// with the MAIN unit listed first. Dates are the guide's last-visible update (YYYY-MM).

export const LANG_LABELS = {
  zh: 'CN',
  ja: 'JP',
  ko: 'KR',
};

export const COMMUNITY_BUILDS = {
  tilia: {
    meta: 'Consensus top-tier support. Tilia appears as the universal fill-in across Light, Earth and Wind teams in both CN and JP guides, and every Light guide on any server includes her.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Light team guide)',
        url: 'https://www.taptap.cn/moment/734928237192283329',
        date: '2025-11',
        name: 'Light: Tilia support picks for the Shia team',
        team: ['shia', 'tilia', 'minova'],
        flow: 'Snow-rabbit single-target burst',
        desc: 'The CN standard Light team. Tilia runs her assist board: cores Holy Inscription and Renewed Spectrum, normals Brilliant Relay then Enemy Counter, gold picks Blinding Beam and Trick Boost. Minova takes Four-Star Wanted Level, Radiant Burst, Radiant Synergy, then Perfect Arc and Fervent Applause. Raise Tilia and Minova assist skills (ult optional); Jinglin can substitute for Minova.',
        potentials: {
          tilia: ['Holy Inscription', 'Renewed Spectrum', 'Brilliant Relay', 'Enemy Counter', 'Blinding Beam', 'Trick Boost'],
          minova: ['Four-Star Wanted Level', 'Radiant Burst', 'Radiant Synergy', 'Perfect Arc', 'Fervent Applause', 'Optimal Hit Zone'],
        },
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Light: Shia snow-rabbit hyper-carry',
        team: ['shia', 'tilia', 'minova'],
        flow: 'Dash-cancel normal attacks',
        desc: 'The defining JP meta build of patch 1.15. Shia is the main and spams her highest-multiplier shot by cancelling attack startup with a dash (the dash-cancel technique, worth the whole DPS ceiling of the team). Tilia takes the seal-damage core (JP name 眩い正義, listed at +300% seal DMG) plus knight-oath picks; Minova takes Just Meat, Triple Base Hit and Fervent Applause. Same trio as the CN standard Light team, independently confirmed.',
      },
      {
        lang: 'zh',
        source: 'TapTap: S6 joint-raid clear codes',
        url: 'https://www.taptap.cn/moment/794573320472233143',
        date: '2026-04',
        name: 'Light raid preset: Shia + Minova + Tilia',
        team: ['shia', 'tilia', 'minova'],
        flow: 'S6 joint-raid record',
        desc: 'A fully-cleared S6 raid light team with shared preset code. At 0 dupes and no signature gear skip Tilia Guardian\'s Resolve; once you have her signature weapon or A1 plus crit emblems, swap that pick for Shia\'s Howl to the Moon. Tilia keeps showing up as the flexible third slot across elements in the same series of raid codes.',
      },
      {
        lang: 'ko',
        source: 'Naver blog: topcastle_',
        url: 'https://blog.naver.com/topcastle_/224075692251',
        date: '2025-11',
        name: 'KR standard Light endgame deck',
        team: ['shia', 'minova', 'tilia'],
        desc: 'The KR community\'s standard endgame Light deck: Shia main with Minova and Tilia behind her. Tilia is rated S-tier support on the KR tier lists of the same period, and the deck is the go-to recommendation for reroll accounts that keep Shia.',
      },
    ],
  },

  minova: {
    meta: 'Strong Light unit on both sides of the ball: JP rates her SS-tier support, CN runs her as a main in her own right with the highest imprint damage in the game.',
    builds: [
      {
        lang: 'zh',
        source: 'biubiu guide + ali213',
        url: 'https://www.biubiu001.com/xtlrgjf/149873.html',
        date: '2025-10',
        name: 'Light: Minova main (imprint damage)',
        team: ['minova', 'tilia', 'jinglin'],
        flow: 'Minova main, imprint damage',
        desc: 'CN calls Minova the single designated main of Light with the highest imprint damage in the game. Tilia runs Blinding Beam plus Renewed Spectrum; Jinglin\'s upgrade value is wider range and lower cooldown. Early-game substitute main: Laru, whose Ashwind Rhythm style picks turn her into a continuous light beam, though bosses can interrupt it.',
        potentials: {
          minova: ['Ashwind Rhythm', 'Four-Star Wanted Level', 'Radiant Burst'],
        },
      },
      {
        lang: 'ja',
        source: 'AppMedia',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Light: Minova as Shia\'s support',
        team: ['shia', 'minova', 'tilia'],
        desc: 'AppMedia\'s current Light hybrid uses Minova in the support slot for buff uptime while Shia handles damage. A reader note adds that the pure snow-rabbit spec is generally stronger than the hybrid if you do not need AoE coverage.',
      },
    ],
  },

  shia: {
    meta: 'The number one rated character on JP tier lists (Game8 #1 main, AppMedia SSS) and the Light meta centerpiece on every server. CN tier lists agree (T1 core of the strongest ranged element).',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Light team guide)',
        url: 'https://www.taptap.cn/moment/734928237192283329',
        date: '2025-11',
        name: 'Light: Shia two-flow picks (boss and AoE)',
        team: ['shia', 'tilia', 'minova'],
        flow: 'Snow-rabbit (boss) or Night-rabbit (AoE)',
        desc: 'Shia has no normal attack: all damage comes from her summoned drones, so you swap potential sets by scenario. Boss build (snow-rabbit): Phantom Step Radiance, Rimecrystal Edge, Subzero Dominion, Leporine Gale, then Rimeheart Pulse, Glacial Dash and Hare\'s Pursuit. AoE build (night-rabbit): Moonlight Overflow, Astral Pirouette, Lunar Detonation, Final Crescent, Lunar Combo. Prioritize her main skill over normal attack over ult, and take light penetration emblems first.',
        potentials: {
          shia: ['Phantom Step Radiance', 'Rimecrystal Edge', 'Subzero Dominion', 'Leporine Gale', 'Rimeheart Pulse', 'Glacial Dash', "Hare's Pursuit"],
        },
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/729763',
        date: '2026-09',
        name: 'JP #1 rated main: dash-cancel Shia',
        team: ['shia', 'tilia', 'minova'],
        flow: 'Dash-cancel burst',
        desc: 'Game8\'s current number one main. Her dash-cancel (cancelling the normal-attack animation with a dash) sustains burst damage that outpaces Fuyuka, who would otherwise take the top spot. Pairs with Tilia and Minova in the standard Light shell; the technique is mandatory for the rating, not optional.',
      },
      {
        lang: 'ko',
        source: 'DC Inside mini gallery cheat sheet',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2025-11',
        name: 'KR Shia build collection (six variants)',
        team: ['shia', 'minova', 'tilia'],
        desc: 'The KR community maintains a Shia build folder: normal-attack-cancel with Flora, a Jinglin pairing, a Minova hybrid, a no-ult pure normal-attack version, an AoE variant recommended for the Cable of Calamity mode, and single-target versus multi-target splits. The arena farming version is part of the standard newbie cheat sheet.',
      },
    ],
  },

  firefly: {
    meta: 'Dual identity: JP runs her as a boss-oriented Light support (SS-adjacent), CN uses her as a budget Light main with surprisingly strong numbers.',
    builds: [
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Light: Firefly support (boss focus)',
        team: ['shia', 'tilia', 'firefly'],
        flow: 'Specialization 2 support',
        desc: 'Boss-oriented Light alternative that keeps Shia as the main and swaps Minova for Firefly. Her potential priority is the cage-dance pick and playmate maxed first, then friend circle, then the two charging picks. Works whenever the fight does not need Minova\'s coverage.',
      },
      {
        lang: 'zh',
        source: '233 community guides (CN)',
        url: 'https://www.233leyuan.com/post-detail/2055167921957896192',
        date: '2026-05',
        name: 'Light: budget Firefly main',
        team: ['firefly', 'shia', 'tilia'],
        flow: 'Budget light main',
        desc: 'CN community labels Firefly a mechanic-hungry but overtuned budget Light main. The shared potential pick to look for is Radiance Blade: Pursuing Slash, and the budget team pairs her with Shia and Tilia. A reasonable entry point before committing to a full Light roster.',
        potentials: {
          firefly: ['Radiance Blade: Pursuing Slash'],
        },
      },
    ],
  },

  chitose: {
    meta: 'Top-tier on every server: CN T0 water main, JP Game8 top-3 main, KR "strongest in current meta". The water team is the highest-damage comp in the game at full cost.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 记录养成攻略 series',
        url: 'https://www.taptap.cn/moment/731308635845560754',
        date: '2025-10',
        name: 'Water: Chitose two-flow picks',
        team: ['chitose', 'freesia', 'teresa'],
        flow: 'Skill flow or normal-attack flow',
        desc: 'Skill flow (for competitive modes): Against the Flow then Cascade of Ruin, with Flowing Circle over Returning Tide and Serpent in Tide. Normal-attack flow (for raids, manual play): Serpent\'s Glide and Mirror Blade first, Aqueous Phantasm next, then Tremble and Fall and Dance of Elegance, always keeping Azure Embrace. Universal priority for the whole team: main-carry rainbow potential first, then damage rainbow, then gold damage picks. Skip crit potentials early (base crit is only 5%).',
        potentials: {
          chitose: ['Against the Flow', 'Cascade of Ruin', 'Serpent\'s Glide', 'Mirror Blade', 'Azure Embrace'],
        },
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Water: Chitose dodge-loop build',
        team: ['chitose', 'teresa', 'freesia'],
        flow: 'Specialization 1',
        desc: 'Chitose loops dodge into her final strike using the shadow-hide stance (150% water damage on hits one through five with the blink blade). Teresa runs the water support picks; Freesia brings the burst window. Game8 notes water is held back only by its support depth, not by Chitose herself.',
      },
      {
        lang: 'ko',
        source: 'Naver blog: blok74 + topcastle_',
        url: 'https://m.blog.naver.com/blok74/224047910711',
        date: '2025-11',
        name: 'KR water: auto-play stable deck',
        team: ['chitose', 'freesia', 'teresa'],
        desc: 'The KR standard water deck, praised specifically for auto-play stability in arena. Chitose keeps her normal-attack uptime while Freesia bursts on condition and Teresa shields. A full KR guide post for this exact trio exists in the DC Inside memo index.',
      },
    ],
  },

  donna: {
    meta: 'CN T0-rated water support ("made water great again") and SS-tier on Game8 JP; no KR presence found.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap S6 codes + smzdm digest',
        url: 'https://www.taptap.cn/moment/794573320472233143',
        date: '2026-04',
        name: 'Water: Donna substitute for Freesia',
        team: ['chitose', 'donna', 'teresa'],
        desc: 'The S6 record-breaking water team swaps Freesia for Donna: Chitose + Donna + Teresa. Her picks protect Chitose with Messenger Arrow (elemental damage) while Water Ripple buffs team attack. The decoy doll gives the team a defensive edge that pure damage supports cannot.',
        potentials: {
          donna: ['Messenger Arrow', 'Water Ripple'],
        },
      },
      {
        lang: 'ja',
        source: 'AppMedia',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Water: AppMedia top pick',
        team: ['chitose', 'freesia', 'donna'],
        desc: 'AppMedia\'s strongest water team runs Chitose main with Freesia and Donna. Donna\'s support delivery drops a letter pickup worth 46% water damage; the substitute for her slot is Teresa. Rated SS in AppMedia\'s current main-support split.',
      },
    ],
  },

  'suntide-willow': {
    meta: 'The strongest support in the game per the CN community ("full-game best buffer"); limited summer 2026 water unit. JP runs the same unit as swimsuit Willow.',
    builds: [
      {
        lang: 'zh',
        source: 'CN community digests (925g, NGA snippets)',
        url: 'https://www.925g.com/gonglue/319894.html',
        date: '2026-07',
        name: 'Water: Suntide Willow replaces Teresa',
        team: ['chitose', 'donna', 'suntide-willow'],
        desc: 'First limited water support; swapping Teresa for her is quoted at roughly +50% team damage, and a double-support Chitose + Teresa + Suntide Willow variant also exists. Two potential routes are discussed (mark flow versus direct damage flow). CN warns the gap between full and zero potential investment on her is about 60% of team output, so she rewards investment.',
      },
      {
        lang: 'ja',
        source: 'Game8 JP tier coverage',
        url: 'https://game8.jp/stellasora/729763',
        date: '2026-09',
        name: 'JP: swimsuit Willow in SS tier',
        team: ['chitose', 'suntide-willow', 'teresa'],
        desc: 'Game8 lists swimsuit Willow in SS tier and she appears in the Chitose specialization-2 and seal-damage team variants on raval-h. Same conclusion as CN: the strongest water support, worth pulling for water teams.',
      },
    ],
  },

  teresa: {
    meta: 'Evergreen water support on all three servers; no dedicated guide anywhere but present in virtually every water team.',
    builds: [
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Water: Teresa support picks',
        team: ['chitose', 'teresa', 'freesia'],
        desc: 'Game8\'s water page runs Teresa with the standard water support picks. Gamerch adds that she wants dupe investment for her draw-blade effect, otherwise swap in Shimiao or Iris. The default budget water support on every server.',
      },
    ],
  },

  freesia: {
    meta: 'Water burst support, rated S-tier on KR lists; team guide content only.',
    builds: [
      {
        lang: 'ko',
        source: 'Tistory: softit tier guide',
        url: 'https://softit.tistory.com/271',
        date: '2025-11',
        name: 'KR water: Freesia burst window',
        team: ['chitose', 'freesia', 'teresa'],
        desc: 'KR rates Freesia S-tier with the caveat that she has a real operation skill floor: her burst is conditional and needs uptime management. Standard water trio content; a dedicated Freesia-main build exists in the DC memo (December 2025).',
      },
    ],
  },

  gerie: {
    meta: 'The KR consensus number-one deck is Gerie + Nazuna + Ridge ("strongest combination in current meta"). CN agrees: the Earth team is T0.5 with only three real members.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Earth team guide)',
        url: 'https://www.taptap.cn/moment/731607470480297020',
        date: '2025-10',
        name: 'Earth: Gerie two-flow picks',
        team: ['gerie', 'nazuna', 'ridge'],
        flow: 'Skill flow (stronger) or normal-attack flow',
        desc: 'CN: the Earth team is exactly these three. Skill flow (currently stronger) for Gerie: Endless Throes, Agony Cascade, Piercing Sorrow, Shared Sensation, then Everyone\'s Invited, Shadow Law and Slanderous Strike. Normal-attack flow: Beyond All Control, Avalanche of Stone, Lingering Hunger, then No Safeword. Team-wide must-grabs: Lucky Drop, Shared Sensation, first copy of Piercing Sorrow, first copy of Jubilant Spin. Level priority: Gerie normal attack and main skill; Nazuna assist and ult. Emblem note: crit damage first (Nazuna\'s Operation: Pandemonium at 6 plus her innate 5% puts Gerie\'s skill crit at 41%).',
        potentials: {
          gerie: ['Endless Throes', 'Agony Cascade', 'Piercing Sorrow', 'Shared Sensation', "Everyone's Invited", 'Shadow Law'],
          nazuna: ['Bold Assertion', 'Feel the Beat', 'Lucky Drop', 'Jubilant Spin', 'Double Delight', 'Operation: Pandemonium'],
          ridge: ['Reblossom', 'Hasty Growth', 'Small Changes', 'Corrosive Vines', 'Root Grasp'],
        },
      },
      {
        lang: 'ko',
        source: 'DC Inside + BlueStacks KR',
        url: 'https://www.bluestacks.com/ko/blog/game-guides/stella-sora/sasa-tier-list-ko.html',
        date: '2025-11',
        name: 'KR strongest meta deck: auto-friendly Earth',
        team: ['gerie', 'nazuna', 'ridge'],
        flow: 'Auto normal attacks',
        desc: 'KR community consensus strongest combination: Gerie center with the must-pick Earth support Nazuna and the 4-star Ridge for defense shred. Famously auto-play friendly (the "auto normal-attack Gerie" build), which is why it tops the KR tier lists despite being a 4-star-heavy team. A complete KR guide post for Gerie normal-attack builds exists in the DC memo index.',
      },
    ],
  },

  nazuna: {
    meta: 'The universal Earth support (must-pick in every CN and KR Earth guide) and JP\'s only permanent SS-tier support. Also viable as a main dealer.',
    builds: [
      {
        lang: 'ko',
        source: 'DC Inside memo',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2025-11',
        name: 'KR: Nazuna-main Earth deck',
        team: ['nazuna', 'gerie', 'ridge'],
        desc: 'A KR variant flips the Earth team: Nazuna becomes the main dealer with Gerie moved to the support slot. Same three characters, different carry. Worth building once you have dupes on Nazuna; the standard configuration remains Gerie main.',
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'JP: Nazuna seal-damage main build',
        team: ['nazuna', 'gerie', 'springseek-coronis'],
        flow: 'Seal-damage specialization',
        desc: 'Game8\'s Earth page features a Nazuna-main build built around her seal-granting: her "everyone lie down" pick is the priority (listed at +420% earth seal damage), Gerie triggers the seals (Soul Release, Pain Evangelist and the neighbor-fear line), and Springseek Coronis buffs. Tilia is the listed substitute but must take her seal-damage core.',
      },
    ],
  },

  ridge: {
    meta: 'The evergreen budget Earth slot on KR lists (best 4-star support) and the CN Earth guide\'s utility third.',
    builds: [
      {
        lang: 'ko',
        source: 'BlueStacks KR + danasn',
        url: 'https://www.bluestacks.com/ko/blog/game-guides/stella-sora/sasa-tier-list-ko.html',
        date: '2025-11',
        name: 'KR: Ridge, the budget Earth enabler',
        team: ['gerie', 'nazuna', 'ridge'],
        desc: 'Ridge is in S-tier on multiple KR lists as the best cheap support in the game: her defense-down debuff effectively carries the Earth team\'s damage at zero cost. CN sources describe her seed-ball range extension core as the key to her strength.',
        potentials: {
          ridge: ['Small Changes'],
        },
      },
    ],
  },

  'springseek-coronis': {
    meta: 'Limited Earth unit (2026 Spring): CN S6-record team member, JP runs her as the buff slot of the seal-damage Earth team.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap S6 codes + one-image guides',
        url: 'https://www.taptap.cn/moment/794573320472233143',
        date: '2026-04',
        name: 'Earth: S6 raid team member',
        team: ['nazuna', 'gerie', 'springseek-coronis'],
        desc: 'The S6 earth record team is Nazuna + Gerie + Springseek Coronis (the Tilia version exists but is noted as much more execution-hungry). Two dedicated one-image guides cover her mark flow and direct-damage flow. CN video titles bill her at T0-level strength with damage scaling on her size.',
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'JP: Earth buff slot',
        team: ['sparkla', 'nazuna', 'springseek-coronis'],
        desc: 'Game8 uses Springseek Coronis (hanafuda Coronis) as the buff slot of both the Sparkla burst team and the Nazuna seal-damage team, with the prescription picks (Added Prescription, Drip Treatment line). S-tier in the current Game8 support split.',
      },
    ],
  },

  fuyuka: {
    meta: 'Top-2 main on JP lists (Game8 #2, AppMedia SSS), CN rates the post-rework Fire team T1 with her as the centerpiece, KR had her T0 by December 2025.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Fire team guide)',
        url: 'https://www.taptap.cn/moment/740049381679433096',
        date: '2025-11',
        name: 'Fire: Fuyuka reload or attack-speed picks',
        team: ['fuyuka', 'flora', 'chixia'],
        flow: 'Reload flow or attack-speed flow',
        desc: 'Two variants. Reload flow: Reload, Double Strike, Thunder Punch (Finishing Blow against bosses), then All-Out Effort, Peak Performance and Ironfist Blow, or Pyro Mark. Attack-speed flow: Kitty Punch, Multi-Shot, Blast Chase, then Combo Punch and Peak Performance. Flora takes Ashes of the Past, Spark of Ashes, Reinforced Impression, then the show picks. Chixia takes the Crimson Dragon pair and the Ink Sigil line, especially Horn Call. Level priority: Fuyuka normal attack equals main skill above ult; Flora assist skill. CN verdict: roughly Chitose-level damage but far easier to play.',
        potentials: {
          fuyuka: ['Reload', 'Double Strike', 'Thunder Punch', 'All-Out Effort', 'Peak Performance', 'Ironfist Blow'],
          flora: ['Ashes of the Past', 'Spark of Ashes', 'Reinforced Impression', 'Guest Performer', 'Visual Impact', 'Foreshadowing Verification'],
          chixia: ['Crimson Dragon: Convergence', 'Crimson Dragon: Chant', 'Sigil Unleashed: Flame Glow', 'Ink Sigil: Ambush', 'Ink Sigil: Horn Call'],
        },
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Fire: Fuyuka crit boss build',
        team: ['fuyuka', 'snowishLaru', 'flora'],
        flow: 'Crit-focused, boss only',
        desc: 'The JP meta fire build: Fuyuka with Snowish Laru and Flora, crit-stacking around her claw-sharpen mark. Snowish Laru\'s entry pick is listed at +179% attack and her toy-soldier line keeps buffs running. The build has zero survivability, so the play pattern is dodge everything. Substitute support: Chixia, but keep Flora.',
      },
      {
        lang: 'ko',
        source: 'DC Inside memo',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2026-01',
        name: 'KR: Fuyuka second-school build',
        team: ['fuyuka', 'snowishLaru', 'flora'],
        desc: 'KR maintains Chinese-origin and Japanese-origin versions of the Fuyuka second-school build plus a Snowish Laru pairing version and an arena farming variant with Ann. KR tier lists had her T0 alongside Chitose and Shia by December 2025.',
      },
    ],
  },

  'snowishLaru': {
    meta: 'Limited (Christmas 2025) fire support rated the single best support on Game8 JP; strong at zero dupes per both JP and CN consensus.',
    builds: [
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/729763',
        date: '2026-09',
        name: 'JP: #1 rated support',
        team: ['fuyuka', 'snowishLaru', 'flora'],
        desc: 'Game8\'s support TOP1. Her entry pick is the centerpiece of the Fuyuka crit build and she is the recommended partner for every fire main. Community consensus (including video reviews) is that she is strong even at base dupes, unusual for a limited support.',
      },
      {
        lang: 'zh',
        source: 'TapTap: Christmas newbie guide',
        url: 'https://www.taptap.cn/moment/753999872679480339',
        date: '2025-12',
        name: 'CN: fire team priority raise',
        team: ['fuyuka', 'snowishLaru', 'flora'],
        desc: 'CN Christmas guide: the fire team is Fuyuka + Snowish Laru + Flora, and the raise priority is Snowish Laru\'s level and assist skill first. Her signature record is rated strong and worth grabbing. Reconfirmed as the fire support slot in the S6 raid codes.',
      },
      {
        lang: 'ko',
        source: 'DC Inside memo',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2026-01',
        name: 'KR: pairing variants',
        team: ['fuyuka', 'snowishLaru', 'flora'],
        desc: 'KR build folders list a Fuyuka + Snowish Laru second-school version (January 2026) and a Chaton + Snowish Laru efficiency discussion, matching the JP conclusion that she is the universal fire support slot.',
      },
    ],
  },

  flora: {
    meta: 'The permanent fire support everywhere; no dedicated guide but present in every fire build on all three servers.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Fire team guide)',
        url: 'https://www.taptap.cn/moment/740049381679433096',
        date: '2025-11',
        name: 'Fire: Flora support picks',
        team: ['fuyuka', 'flora', 'chixia'],
        desc: 'Flora\'s crit-buff picks in the standard fire team: Ashes of the Past and Spark of Ashes first, Reinforced Impression, then Guest Performer, Visual Impact and Foreshadowing Verification. Raise her assist skill. She is the one constant across CN, JP and KR fire teams regardless of who the main is.',
        potentials: {
          flora: ['Ashes of the Past', 'Spark of Ashes', 'Reinforced Impression', 'Guest Performer'],
        },
      },
    ],
  },

  chixia: {
    meta: 'Fire support with a second life as a Dark servant buffer; former fire main before Fuyuka released.',
    builds: [
      {
        lang: 'ja',
        source: 'AppMedia',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Dark: Chixia as servant buffer',
        team: ['cosette', 'mistique', 'chixia'],
        desc: 'AppMedia\'s dark team for the endless ring and defense modes runs Cosette main (dark damage-taken debuffer), Mistique as the lantern-ghost damage core and Chixia buffing servants with the Crimson Dragon Chant and Horn Call picks. Priority order: Mistique, then Chixia, then Cosette. Former fire-main duty (pre-Fuyuka) lives on in budget CN guides.',
        potentials: {
          chixia: ['Crimson Dragon: Chant', 'Ink Sigil: Horn Call'],
        },
      },
    ],
  },

  mistique: {
    meta: 'The Dark damage core: CN runs her entire kit through the assist slot (her main is explicitly not recommended), JP and KR keep her SS/S-tier support.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 记录养成攻略 series',
        url: 'https://www.taptap.cn/moment/733068641695696594',
        date: '2025-11',
        name: 'Dark: Mistique summon core',
        team: ['coronis', 'mistique', 'cosette'],
        flow: 'Assist-slot summoner',
        desc: 'CN is blunt: playing Mistique as the main is strongly not recommended, all her damage comes from the assist skill. The team is Coronis main with Mistique and Cosette. Mistique picks: Happy Face, Reality Erosion, The Conjuring (a level-6 Conjuring takes lantern ghosts from 12 to about 18, a must-grab) and Malice, then Shadow Shackle, Wraith Haunting, Solar Absorption and Twin Born. Cosette takes Phantom Mark, Phantom Inscription, Gift of Darkness, Dark: Hallucination and Dark: Demon Mark, avoiding Dark: Afterglow because it conflicts with Mistique\'s mark stacking. Coronis contributes 15 to 25% of team damage.',
        potentials: {
          mistique: ['Happy Face', 'Reality Erosion', 'The Conjuring', 'Malice', 'Shadow Shackle', 'Wraith Haunting'],
          cosette: ['Phantom Mark', 'Phantom Inscription', 'Gift of Darkness', 'Dark: Hallucination', 'Dark: Demon Mark'],
          coronis: ["Shadow Reaper's Dance", 'Soul Splitter', 'Night Cruise', 'Arcane Blade', 'Obscure Eruption', 'Soul Buckle'],
        },
      },
      {
        lang: 'ko',
        source: 'Arca.live: Firenze deck guide',
        url: 'https://arca.live/b/stellasora/159623459',
        date: '2026-01',
        name: 'KR: Mistique in the Firenze deck',
        team: ['firenze', 'mistique', 'cosette'],
        desc: 'In the 2026 Firenze-era dark deck, Mistique\'s positivity pick at level 6 is called mandatory. KR also keeps an off-element Mistique + Cosette arena farming deck that wins easily, plus a dedicated two-school comparison post for her dark deck.',
      },
    ],
  },

  coronis: {
    meta: 'Budget Dark main (the better-feel option before Firenze) and a solid team-damage contributor; CN rates her main slot above Caramel.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 记录养成攻略 series',
        url: 'https://www.taptap.cn/moment/733068641695696594',
        date: '2025-11',
        name: 'Dark: Coronis main',
        team: ['coronis', 'mistique', 'cosette'],
        desc: 'The recommended Dark main: better game feel plus a small damage amplification, contributing 15 to 25% of team damage herself. Raise her as a normal main; the team\'s real damage still flows through Mistique\'s assist. Swap to Firenze when available.',
        potentials: {
          coronis: ["Shadow Reaper's Dance", 'Soul Splitter', 'Night Cruise', 'Arcane Blade', 'Obscure Eruption'],
        },
      },
    ],
  },

  cosette: {
    meta: 'The Dark support constant across all three servers, with a debuffer-main niche JP AppMedia uses for farming modes.',
    builds: [
      {
        lang: 'ja',
        source: 'AppMedia',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Dark: Cosette debuffer main (farming)',
        team: ['cosette', 'mistique', 'chixia'],
        desc: 'AppMedia\'s dark farming team puts Cosette in the main slot purely for her dark damage-taken debuff while Mistique does the damage. Only the claw-pierce pick is needed on her for this role. KR communities agree: the Cosette + Mistique pairing wins off-element arena easily, and it is the base of the arena farming cheat sheet.',
      },
    ],
  },

  firenze: {
    meta: 'Limited Dark main (2026): the meta Dark deck centerpiece on KR and JP; CN runs the servant-damage variant and warns the skill-flow ceiling is below constant characters.',
    builds: [
      {
        lang: 'ko',
        source: 'DC Inside: 치토새',
        url: 'https://gall.dcinside.com/mgallery/board/view/?id=stellasora&no=189136',
        date: '2026-01',
        name: 'KR: Firenze dark deck mechanics',
        team: ['firenze', 'mistique', 'cosette'],
        flow: 'Ult-centric burst',
        desc: 'The most detailed Dark write-up found: deck is Firenze + Mistique (1 dupe) + Cosette (2 dupes). Firenze\'s ult lasts 5 seconds (about 2 seconds of field warm-up, then 3 seconds of damage), so press both supports\' skills (12s cooldowns) right after the ult and aim Cosette\'s ult for the 4-to-5-seconds-remaining cooldown window to align her claw buff. Her ult accounts for 35 to 40% of team damage, unlike the sustained Shia or Chitose. Core picks: Mistique\'s positivity pick, Cosette\'s phantom-mark and dark-flame picks, Firenze\'s base-dupe perfection pick. KR note: skip her dark spin pick, Cosette\'s attack pick is more efficient.',
      },
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'JP: Firenze + Otoha + Cosette',
        team: ['firenze', 'cosette', 'otoha'],
        flow: 'Non-servant picks',
        desc: 'Game8\'s dark page runs Firenze with the agile-step, command, tracking-order and dark-waltz picks (the non-servant line), Cosette on the debuff build and Otoha on specialization 2 ult burst (specialization 1 for mob content). SS-tier main in the same window.',
      },
      {
        lang: 'zh',
        source: 'TapTap S6 codes + TapTap discussion',
        url: 'https://www.taptap.cn/moment/794573320472233143',
        date: '2026-04',
        name: 'Dark: S6 skill-damage variant',
        team: ['firenze', 'otoha', 'cosette'],
        flow: 'Skill-damage flow (not ult flow)',
        desc: 'CN S6 dark record code: Firenze + Otoha + Cosette with skill-damage flow explicitly recommended over ult flow (ult flow needs Cosette charge rolls on her rainbow and gold slots). Community discussion adds that Firenze\'s ult potentials total +690% but the whole kit is servant-dependent, so without Mistique run the skill line. A zero-spend full-auto clear video exists on Bilibili.',
      },
    ],
  },

  otoha: {
    meta: 'Dark flex: ult-burst main or the budget third slot; KR and JP both keep her in the Firenze shell, CN rates her flow the lazy-friendly one.',
    builds: [
      {
        lang: 'ko',
        source: 'Naver Game lounge',
        url: 'https://game.naver.com/lounge/stellasora/board/detail/7568812',
        date: '2026',
        name: 'KR: Firenze + Otoha + Cosette clear',
        team: ['firenze', 'otoha', 'cosette'],
        desc: 'A Naver lounge post cleared the highest-difficulty content (stage 80) with Firenze + Otoha + Cosette, using Otoha as the budget third. The JP two-school note applies: specialization 2 for ult burst, specialization 1 for mob content. CN quotes her pure skill-damage flow at about 78 potential investment points and calls it the low-effort option.',
      },
    ],
  },

  karin: {
    meta: 'New Dark ranged main (2026-08): JP Game8 already rates her top-tier; CN S9 raid codes feature her.',
    builds: [
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Dark: Karin shark-summon ult build',
        team: ['karin', 'cosette', 'otoha'],
        flow: 'Specialization 1, ult crit',
        desc: 'Karin mains the dark deck with her shark-summon ult: potential priority is Hunt Signal, Tidal Burst and Twin Chase, skipping the night-fishing pick. Same support shell as the Firenze deck. AppMedia rates her SS-tier main alongside Shia and Fuyuka.',
        potentials: {
          karin: ['Hunt Signal', 'Tidal Burst', 'Twin Chase'],
        },
      },
      {
        lang: 'zh',
        source: 'TapTap: Karin raid codes',
        url: 'https://www.taptap.cn/moment/839178817577682199',
        date: '2026-08',
        name: 'CN: Karin double-carry raid code',
        team: ['karin', 'suntide-willow'],
        desc: 'CN S9-era raid codes run Karin double-carry ult compositions with Suntide Willow, plus a single-carry Karin variant and separate Willow ult and normal-attack codes. Dark vanguard released 2026-08-18 on CN.',
      },
    ],
  },

  chaton: {
    meta: 'The Fire "2.0" main (2026): JP runs her with Snowish Laru and Flora; CN calls her the fire S-tier fix the element was waiting for.',
    builds: [
      {
        lang: 'ja',
        source: 'raval-h blog',
        url: 'https://raval-hurei.com/blog/',
        date: '2026-09',
        name: 'Fire: Chaton specialization-2 build',
        team: ['chaton', 'snowishLaru', 'flora'],
        flow: 'Skill damage first, ult secondary',
        desc: 'The JP fire page lists Chaton (specialization 2) with Snowish Laru and Flora as the current skill-damage fire build, alongside the Fuyuka variants. AppMedia rates her SS-tier main. The same page keeps a budget 4-star fire team (Amber, Kasimira, Flora) for comparison.',
      },
      {
        lang: 'zh',
        source: 'Bilibili + 233 digests (CN)',
        url: 'https://www.bilibili.com/video/BV1WHTk6CEKy/',
        date: '2026-07',
        name: 'CN: Fire 2.0 main',
        team: ['chaton', 'fuyuka', 'snowishLaru'],
        desc: 'CN bills Chaton as the Fire 2.0 big carry: key picks named in guide videos are Calamity Echo, Fire Superiority and Frugal Use. Her kit converts ult casts into empowered normal attacks via the snipe stance, with the dark mark line boosting her damage. S9 raid high-score fire teams pair her with Fuyuka.',
      },
      {
        lang: 'ko',
        source: 'DC Inside',
        url: 'https://m.dcinside.com/board/stellasora/239893',
        date: '2026',
        name: 'KR: Chaton flow guide',
        team: ['chaton', 'snowishLaru', 'flora'],
        desc: 'A KR stream-of-consciousness Chaton guide discusses her combo efficiency with Snowish Laru; namu.wiki catalogs her as the theater sniper (fire dealer).',
      },
    ],
  },

  nanoha: {
    meta: 'Wind main on all servers: CN T0 tier list placement, JP Gamerch wind party main, KR S-tier in early lists.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap',
        url: 'https://www.taptap.cn/moment/722863458432844490',
        date: '2025-10',
        name: 'Wind: Nanoha shuriken main',
        team: ['nanoha', 'canace', 'ann'],
        flow: 'Skill flow early, normal-attack flow when maxed',
        desc: 'The cheapest complete wind team: Nanoha main with Canace and Ann. Ann is built around her wind wall (survival picks, or damage picks with the shoot-through-wall and fast-mark line); Canace is built for element-mark frequency. Watch Ann\'s long cooldowns. Off-hand casting note: Nanoha\'s skills do not interrupt her normal attacks, which is what makes the normal-attack flow work at max investment.',
      },
      {
        lang: 'ja',
        source: 'Gamerch',
        url: 'https://gamerch.com/stellasora/926433',
        date: '2026-01',
        name: 'JP: standard wind party',
        team: ['nanoha', 'ann', 'nazuka'],
        desc: 'Gamerch\'s wind party: Nanoha main with Ann and Nazuka, substitute main Noya. Dedicated KR builds exist for her skill build, clone build and a Cable of Calamity variant in the DC memo.',
      },
    ],
  },

  ann: {
    meta: 'Wind support constant; KR values her all-attribute attack buff and projectile wall, CN builds her two ways.',
    builds: [
      {
        lang: 'ja',
        source: 'AppMedia + Game8 JP',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Wind: Ann in the double-carry shell',
        team: ['wraith', 'nazuka', 'ann'],
        desc: 'Ann is the third slot of the current meta wind team. Her wind-gate pick is listed at +66% main attack, and the wind-weight pick supports the team. KR blog notes add that her wall blocks projectiles entirely, which is why she survives in farming builds.',
      },
    ],
  },

  canace: {
    meta: 'Wind flex slot; a niche "main that buffs supports" option on JP, element-mark battery in CN wind teams.',
    builds: [
      {
        lang: 'ko',
        source: 'Tistory: softit',
        url: 'https://softit.tistory.com/271',
        date: '2025-11',
        name: 'KR: Canace verdict',
        team: ['nanoha', 'canace', 'ann'],
        desc: 'KR lists Canace B-tier with a niche noted by AppMedia: she is the main that buffs supports when you want to lean into Nazuka or Ann damage. In CN wind teams her job is element-mark frequency. Only build her when your wind roster is missing Nazuka.',
      },
    ],
  },

  nazuka: {
    meta: 'Wind\'s real damage dealer from the support slot: CN calls the Tilia pairing her optimal setup, JP rates her second only to Snowish Laru among supports.',
    builds: [
      {
        lang: 'ja',
        source: 'AppMedia + Game8 JP',
        url: 'https://appmedia.jp/stellasora/79405556',
        date: '2026-09',
        name: 'Wind: double-carry Wraith + Nazuka',
        team: ['wraith', 'nazuka', 'ann'],
        flow: 'Off-field damage',
        desc: 'The current JP wind build runs real double-carry: Wraith mains while Nazuka deals genuine damage from the support slot through her flower-sea picks (the calm, wave and raging-sea line). Wraith takes Dust Storm, Double Hunt, Blade\'s Dance, Wild Hunt and Tempest. Substitute main: Canace.',
      },
      {
        lang: 'zh',
        source: '233 community digests (CN)',
        url: 'https://www.233leyuan.com/post-detail/1997011610138709564',
        date: '2025-12',
        name: 'CN: Nazuka off-field, Tilia pairing',
        team: ['nazuka', 'tilia', 'ann'],
        desc: 'CN calls Nazuka the wind off-field big carry and states that pairing her with Tilia is her optimal setup. Main-controller Nazuka is considered weak, so keep her in the support slot; the flower-garden flow is the budget route, and at full form her tower damage can approach water teams (not raid). CN S6 wind code pairs her with Wraith and Ann.',
      },
    ],
  },

  wraith: {
    meta: 'Limited wind main (2026-02): the S6 raid wind pick on CN, the current JP wind main, KR PV-level hype with build folders.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap S6 codes',
        url: 'https://www.taptap.cn/moment/794573320472233143',
        date: '2026-04',
        name: 'Wind: S6 raid main',
        team: ['wraith', 'nazuka', 'ann'],
        desc: 'The S6 wind record code runs Wraith + Nazuka + Ann, with a Tilia variant (Wraith + Ann + Tilia) also cleared. Wind as an element is rated cheap: the fully-free Noya blade-flow team exists, but Wraith is the raid-grade upgrade path. Wind remains single-target weaker than other elements.',
      },
      {
        lang: 'ja',
        source: 'raval-h blog',
        url: 'https://raval-hurei.com/blog/',
        date: '2026-09',
        name: 'JP: post-Eleanor wind variants',
        team: ['wraith', 'eleanor', 'ann'],
        flow: 'Normal-attack double Wraith + Eleanor',
        desc: 'After Eleanor\'s release the JP wind page splits into: a Wraith + Eleanor double-carry normal-attack build with Ann, an Eleanor + Nazuka skill build led by Suntide Willow or Nazuna, and the older Wraith + Nazuka + Ann shell. Eleanor is still provisional-rated everywhere, so Wraith remains the safe wind main.',
      },
    ],
  },

  eleanor: {
    meta: 'Newest wind unit (2026-09): provisional ratings everywhere, with a full KR guide already up and JP expecting her to lift the weakest element.',
    builds: [
      {
        lang: 'ko',
        source: 'DC Inside: Maygi guide',
        url: 'https://m.dcinside.com/board/stellasora/260563',
        date: '2026-09',
        name: 'KR: Eleanor complete guide',
        team: ['eleanor', 'wraith', 'suntide-willow'],
        desc: 'The first full Eleanor guide (by the Maygi theorycrafter) includes deck preset codes and Wraith and Willow team combos. Wind balance type, 5-star. JP communities label her ratings provisional for now; CN video titles pitch her as taking wind from bottom tier to T0.',
      },
    ],
  },

  noya: {
    meta: 'The free wind team: CN credits the Noya blade-flow as the 100% free-to-complete wind comp; budget-tier everywhere else.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: element tier table',
        url: 'https://www.taptap.cn/moment/729880614093719676',
        date: '2025-10',
        name: 'Wind: Noya blade-flow (fully free)',
        team: ['noya', 'ann', 'canace'],
        desc: 'The 10.28 system tier table calls the Noya blade-flow the only fully free team in the game: great AoE, weak single-target, zero cost. Legacy pairing is Noya main with Ann and Canace. Worth running only while your wind roster is thin; replace with Wraith or Nanoha as soon as possible.',
      },
    ],
  },

  amber: {
    meta: 'Honest verdict: the community consensus is negative. CN tier lists put her T3 (clunky charge, DPS below Kasimira), JP and KR agree on bottom-tier.',
    builds: [
      {
        lang: 'ko',
        source: 'DC Inside memo + Tistory softit',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2025-11',
        name: 'Budget fire main (lowest priority)',
        team: ['amber', 'chixia', 'flora'],
        desc: 'Amber only appears as the budget fire main in a 4-star fire guide build (Amber, Kasimira, Flora on the JP page) and a KR skill-build post in the DC memo. CN tier lists explicitly say avoid her until her mechanism is reworked: her charge is too slow and her DPS sits below Kasimira. Listed here so you know the community position, not as a recommendation.',
      },
    ],
  },

  kasimira: {
    meta: 'Bottom-tier main, situational fire support: her bombardment picks get real use only inside the Fuyuka team.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Fire team guide)',
        url: 'https://www.taptap.cn/moment/740049381679433096',
        date: '2025-11',
        name: 'Fire: Kasimira substitute slot',
        team: ['fuyuka', 'flora', 'kasimira'],
        desc: 'Kasimira\'s only community relevance is as the second fire team variant\'s support (Fuyuka + Flora + Kasimira), and even there the CN guide says upgrading her is not recommended beyond the assist skill. Tier lists rate her bottom-tier as a main on all three servers.',
        potentials: {
          kasimira: ['Heated Battle', 'Area Bombardment', 'Meltdown Threshold', 'Shocking Bombardment', 'Army Breaker', 'Weakness Mark'],
        },
      },
    ],
  },

  caramel: {
    meta: 'Dark vanguard and budget main: fragile but contributes 20 to 30% of team damage in the pre-Firenze dark team.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 记录养成攻略 series',
        url: 'https://www.taptap.cn/moment/733068641695696594',
        date: '2025-11',
        name: 'Dark: Caramel main (budget)',
        team: ['caramel', 'mistique', 'cosette'],
        desc: 'The budget dark main alternative to Coronis: the only dark vanguard, contributing 20 to 30% of team damage, but fragile with jittery mechanics. All dark damage still comes from Mistique\'s assist; swap to Coronis or Firenze when available.',
        potentials: {
          caramel: ['Rhythm Pulse', 'Sonic Boom', 'Fallen Duet', 'Maximum Boost', 'Earcatch Riff', 'Echo Stack'],
        },
      },
    ],
  },

  shimiao: {
    meta: 'Budget water main only: T3-rated on CN and JP lists, with a single KR build dedicated to her.',
    builds: [
      {
        lang: 'ko',
        source: 'DC Inside memo',
        url: 'https://gall.dcinside.com/mini/board/view/?id=stellasoramemo&no=3',
        date: '2025-10',
        name: 'Water: Shimiao normal-attack build',
        team: ['shimiao', 'teresa', 'freesia'],
        desc: 'The one dedicated Shimiao build in the KR memo: a normal-attack build used as the budget water main when Chitose is unavailable. CN notes her as the budget water filler (T3, "vague role"); JP lists her as a water main substitute in the Gamerch party. Functional, never optimal.',
      },
    ],
  },

  iris: {
    meta: 'Water fill-in only: no dedicated guide on any server, appears in substitute slots.',
    builds: [
      {
        lang: 'zh',
        source: '3DM water team guide',
        url: 'https://shouyou.3dmgame.com/gl/598988.html',
        date: '2025-11',
        name: 'Water: substitute slots',
        team: ['chitose', 'iris', 'teresa'],
        desc: 'Iris shows up as the water fill-in: Chitose + Iris + Teresa, or in the budget version Freesia main + Teresa + Iris. JP Gamerch rates her S-tier support but A-tier main with no dedicated build anywhere. Build her only if you lack the standard water trio.',
      },
    ],
  },

  jinglin: {
    meta: 'Light substitute with fully-translated mahjong picks; fine at low investment, never the pick at high investment.',
    builds: [
      {
        lang: 'zh',
        source: 'TapTap: 火淼 (Light team guide)',
        url: 'https://www.taptap.cn/moment/734928237192283329',
        date: '2025-11',
        name: 'Light: Jinglin substitute picks',
        team: ['shia', 'tilia', 'jinglin'],
        desc: 'Jinglin substitutes for Minova in the Light team when Minova is unavailable. Keep her investment minimal; the guide explicitly says she is the low-cost slot.',
        potentials: {
          jinglin: ['Thunderbolt: Circle', 'Thunderbolt: Dragon', 'Social Butterfly', 'Self-drawn Concealed Hand', 'No Ones No Nines', 'Triple Chows'],
        },
      },
    ],
  },

  sparkla: {
    meta: 'JP earth burst main (S to SS-tier on Game8 and AppMedia); KR community judged her a Gerie replacement that fails to replace, so she is mainly a JP pick.',
    builds: [
      {
        lang: 'ja',
        source: 'Game8 JP',
        url: 'https://game8.jp/stellasora/731952',
        date: '2026-09',
        name: 'Earth: Sparkla burst main',
        team: ['sparkla', 'nazuna', 'springseek-coronis'],
        flow: 'Burst-mode rapid fire',
        desc: 'Sparkla mains the JP earth burst team with Nazuna and Springseek Coronis: her rapid-rabbit line hits 133% seven times and gains +80% in a full-earth team, with seal-trigger damage on top. The KR community is cooler on her, reading her as a sideways Gerie rather than an upgrade.',
      },
    ],
  },
};

export function getCommunityBuilds(slug) {
  const entry = COMMUNITY_BUILDS[slug];
  return entry ? { meta: entry.meta || '', builds: entry.builds } : null;
}
