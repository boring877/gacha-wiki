// Star Savior Blog Data

export const blogConfig = {
  meta: {
    title: 'Blog | Star Savior',
    description: 'Guides, mechanics breakdowns, and tips for Star Savior players',
    gameTitle: 'Blog',
  },

  posts: [
    {
      slug: 'attribute-advantage-and-toughness-guide',
      title: 'Attribute Advantage, Toughness & Break System Guide',
      description:
        'Complete breakdown of the 5-element attribute system, toughness mechanics, break state, and how advantage/disadvantage affects combat in Star Savior.',
      author: 'Boring877',
      publishDate: '2026-03-22',
      category: 'Guide',
      tags: ['beginner', 'combat', 'attributes', 'toughness', 'break'],
      content: `
        <p>Star Savior's combat revolves around two interlocking systems: the <strong>Attribute Advantage</strong> system (Sun, Moon, Star, Chaos, Order) and the <strong>Toughness/Break</strong> system. Understanding both is key to building effective teams and clearing content.</p>

        <h2>Attribute System Overview</h2>
        <p>Every playable unit belongs to one of five attributes. Each attribute has a counter relationship with others:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Counters</th>
              <th>Countered By</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Sun</strong></td><td>Star</td><td>Moon</td></tr>
            <tr><td><strong>Moon</strong></td><td>Sun</td><td>Star</td></tr>
            <tr><td><strong>Star</strong></td><td>Moon</td><td>Sun</td></tr>
            <tr><td><strong>Chaos</strong></td><td>Order</td><td>Order</td></tr>
            <tr><td><strong>Order</strong></td><td>Chaos</td><td>Chaos</td></tr>
          </tbody>
        </table>

        <p>Sun, Moon, and Star form a triangle: <strong>Sun -> Star -> Moon -> Sun</strong>. Chaos and Order counter each other mutually.</p>

        <h2>Attribute Advantage Effects</h2>
        <p>When the attacker has an attribute advantage against the target:</p>
        <ul>
          <li><strong>Damage Dealt:</strong> +5%</li>
          <li><strong>Effect Hit:</strong> +30%</li>
          <li><strong>Toughness Damage:</strong> +1 (in addition to any skill-based toughness damage)</li>
        </ul>

        <p>When the attacker has an attribute disadvantage:</p>
        <ul>
          <li><strong>Damage Dealt:</strong> -5%</li>
          <li><strong>Effect Hit:</strong> -30%</li>
          <li><strong>Toughness Damage:</strong> cannot be dealt at all</li>
        </ul>

        <p>The game displays "WEAK" on enemies when you have an advantage against them. The attribute advantage is separate from any buffs or debuffs -- it applies as a base modifier to all your attacks.</p>

        <h2>Toughness System</h2>
        <p>Every unit has a <strong>Toughness</strong> bar (displayed as Super Armor in the game's stat system). Playable characters have either <strong>3</strong> or <strong>5</strong> Toughness depending on their role and importance:</p>
        <ul>
          <li><strong>3 Toughness:</strong> Most Strikers, Rangers, Casters, Assassins, and standard Supporter/Defender units</li>
          <li><strong>5 Toughness:</strong> SSR Supporters, some Defenders, and story-important units</li>
        </ul>

        <h2>Toughness Damage</h2>
        <p>Toughness decreases when a unit is attacked. The sources of toughness damage are:</p>
        <ul>
          <li><strong>Attribute Advantage:</strong> Grants +1 Toughness DMG per hit automatically</li>
          <li><strong>Specific Skills:</strong> Some skills have built-in Toughness DMG (e.g., via the Super Armor Damage stat)</li>
        </ul>

        <p>Toughness damage is <strong>blocked</strong> when:</p>
        <ul>
          <li>The attacker has an <strong>attribute disadvantage</strong> -- zero toughness damage dealt</li>
          <li>The target triggers <strong>Evasion</strong> -- damage is reduced by 50%, debuffs not applied, no toughness damage taken</li>
        </ul>

        <h2>Break State</h2>
        <p>When a unit's Toughness is fully depleted, the <strong>Break State</strong> triggers:</p>
        <ul>
          <li>The broken unit receives <strong>Armor Break</strong> -- a debuff that increases damage taken by <strong>15%</strong></li>
          <li>While broken, <strong>Toughness cannot be recovered</strong> by any means</li>
          <li>At the <strong>start of the broken unit's next turn</strong>, their Toughness is <strong>fully restored</strong> automatically</li>
        </ul>

        <p>This creates a tactical loop: break an enemy's toughness, they take 15% more damage for the rest of the turn, then their toughness restores on their next turn.</p>

        <h2>Break Skills</h2>
        <p>When an enemy's Toughness is broken while a <strong>Break Skill</strong> is equipped, you earn Break Points:</p>
        <ul>
          <li><strong>Normal enemy</strong> break: 1 Break Point</li>
          <li><strong>Boss</strong> break: 3 Break Points</li>
        </ul>

        <p>Once all Break Points are accumulated, the Break Skill can be activated:</p>
        <ul>
          <li>Triggers the skill effect and <strong>Domain Deployment</strong> (effects vary by skill)</li>
          <li>Break Skills do <strong>not trigger Counterattacks</strong></li>
        </ul>

        <h2>Resource Stacking (Chill, Ignition, Leap, Agitation, Insight)</h2>
        <p>Each attribute has a stacking resource buff that grants incremental damage against their counter target:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Resource Name</th>
              <th>Target</th>
              <th>Effect Per Stack</th>
              <th>Max Stacks</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sun</td><td>Ignition</td><td>Star</td><td>+1% DMG vs Star</td><td>5</td></tr>
            <tr><td>Moon</td><td>Chill</td><td>Sun</td><td>+1% DMG vs Sun</td><td>5</td></tr>
            <tr><td>Star</td><td>Leap</td><td>Moon</td><td>+1% DMG vs Moon</td><td>5</td></tr>
            <tr><td>Chaos</td><td>Agitation</td><td>Order</td><td>+1% DMG vs Order</td><td>5</td></tr>
            <tr><td>Order</td><td>Insight</td><td>Chaos</td><td>+1% DMG vs Chaos</td><td>5</td></tr>
          </tbody>
        </table>

        <p>These resource buffs are gained through character skills and passives. They apply <strong>independently of buffs and debuffs</strong>, meaning they can't be dispelled. At max stacks (5), each provides an additional +5% damage against the targeted attribute -- stacking on top of the base 5% attribute advantage for a total of +10% damage.</p>

        <h2>Putting It All Together</h2>
        <ul>
          <li>Match your team's attributes to counter enemy attributes for the +5% DMG, +30% Effect Hit, and +1 Toughness DMG</li>
          <li>Break enemy Toughness to trigger the 15% increased damage taken debuff</li>
          <li>Use Break Skills for powerful Domain Deployment effects</li>
          <li>Stack resource buffs (Chill, Ignition, etc.) for additional damage against specific attributes</li>
        </ul>
      `,
    },
    {
      slug: 'arcana-system-guide',
      title: 'Arcana System -- Complete Guide',
      description:
        'Everything about Arcana: how to obtain them, grades, leveling, limit break, promotion bonuses, SSR special tags, class synergy, unique effects, journey events, and how to build your Arcana formation for Journey mode.',
      author: 'Boring877',
      publishDate: '2026-03-22',
      category: 'Guide',
      tags: ['beginner', 'arcana', 'journey', 'gacha', 'training', 'promotion'],
      content: `
        <p><strong>Arcana</strong> are character bond cards that provide passive bonuses during <strong>Journey mode</strong> (the roguelike exploration mode). Each Arcana represents the bond between the Savior (player) and a specific character. You equip them before starting a Journey, and they boost your training, requests, starting stats, and more.</p>

        <h2 id="overview">Overview</h2>
        <p>The Arcana system is a <strong>card collection and progression system</strong> layered on top of Journey mode. There are <strong>67 total Arcana</strong> tied to characters from the game's roster. Each card:</p>
        <ul>
          <li>Is linked to one specific character</li>
          <li>Has a rarity grade (R, SR, or SSR)</li>
          <li>Provides passive bonuses that scale with level</li>
          <li>May grant combat stat buffs (SSR only)</li>
          <li>Can trigger story events during Journeys</li>
        </ul>

        <h2 id="obtaining">Obtaining Arcana (Observation)</h2>
        <p>Arcana are obtained through <strong>Observation</strong> -- the game's gacha/summoning system. Available banner types include:</p>
        <ul>
          <li><strong>Tutorial Banner</strong> -- Free pulls for new players</li>
          <li><strong>Standard Banner</strong> -- Permanent pool of all Arcana</li>
          <li><strong>New Captain Banner</strong> -- Rate-up for new Arcana</li>
          <li><strong>Featured Banner</strong> -- Specific SSR rate-up</li>
          <li><strong>Special Featured Banner</strong> -- Limited-time SSR rate-up</li>
          <li><strong>Social Point Banner</strong> -- Uses social points instead of premium currency</li>
          <li><strong>Nova Banner</strong> -- Daystar currency banner</li>
        </ul>

        <p><strong>Distribution:</strong> 30 SSR, 15 SR, 22 R (plus 2 special NPC Arcana -- Lisa and a shop NPC -- that are obtained through story progression rather than gacha).</p>

        <h2 id="grades-and-leveling">Grades & Leveling</h2>
        <p>Three rarity tiers with different level caps:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Max Level</th>
              <th>Lv1 Cost</th>
              <th>Max Level Cost</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>R</strong></td><td>40</td><td>176 Gold / 80 EXP</td><td>23,760 Gold / 10,800 EXP</td><td>Basic promotion bonuses only</td></tr>
            <tr><td><strong>SR</strong></td><td>45</td><td>176 Gold / 80 EXP</td><td>43,395 Gold / 19,725 EXP</td><td>Voice lines, journey events, promotion bonuses</td></tr>
            <tr><td><strong>SSR</strong></td><td>50</td><td>220 Gold / 100 EXP</td><td>82,500 Gold / 37,500 EXP</td><td>Full features: special tag, class synergy, unique effect, voices, events, promotion bonuses</td></tr>
          </tbody>
        </table>

        <p>Costs scale linearly per level. Leveling Arcana to Lv30+ earns <strong>Arcana Points</strong> (Bond Points), which are spent to activate Unique Effects during Journeys.</p>

        <h2 id="limit-break">Limit Break (Memory Unlock)</h2>
        <p>Limit Break uses <strong>Arcana Shards (Memory Shards)</strong> to increase an Arcana's level cap:</p>
        <ul>
          <li>Each Arcana has its own dedicated shard type (tied to <strong>PieceItemId</strong>)</li>
          <li>Duplicate pulls of the same Arcana convert into shards</li>
          <li>A <strong>Special Memory Shard</strong> item exists for universal use across any Arcana</li>
          <li>Voice lines play when performing Limit Break (SSR/SR only)</li>
        </ul>

        <h2 id="special-tags">SSR Special Tags</h2>
        <p>Each SSR Arcana grants a <strong>special combat stat buff</strong>. This is the key gameplay benefit of pulling SSR Arcana over lower grades:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Special Tag</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>ATK</td><td>ATK boost</td></tr>
            <tr><td>DEF</td><td>DEF boost</td></tr>
            <tr><td>HP</td><td>HP boost</td></tr>
            <tr><td>Super Effect</td><td>Super Effect boost</td></tr>
            <tr><td>Turn Speed</td><td>SPD boost</td></tr>
            <tr><td>Toughness</td><td>Toughness boost</td></tr>
            <tr><td>Crit Rate</td><td>Crit Rate boost</td></tr>
            <tr><td>Crit Damage</td><td>Crit Damage boost</td></tr>
            <tr><td>Effect Hit</td><td>Effect Hit boost</td></tr>
          </tbody>
        </table>

        <p>SR and R Arcana have no Special Tag -- they provide no direct combat stat buff.</p>

        <h2 id="class-synergy">Class Synergy</h2>
        <p>SSR Arcana also have a <strong>Class Synergy</strong> tag that determines which nurturer classes benefit from the card:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Class Tag</th>
              <th>Affects</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Striker</td><td>Striker nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>Defender</td><td>Defender nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>Ranger</td><td>Ranger nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>Caster</td><td>Caster nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>Assassin</td><td>Assassin nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>Supporter</td><td>Supporter nurturers</td><td>+5% Training Effect</td></tr>
            <tr><td>All Classes</td><td>All nurturer types</td><td>+5% Training Effect</td></tr>
            <tr><td>Savior</td><td>Savior only</td><td>+5% Training Effect</td></tr>
          </tbody>
        </table>

        <p>The "All Classes" synergy is especially valuable since it benefits every nurturer on your team. Matching class synergy is key to maximizing training gains during a Journey.</p>

        <h2 id="promotion-system">Promotion System</h2>
        <p>The <strong>Promotion system</strong> is the core power progression of Arcana. Each Arcana has a <strong>PromoteGroup</strong> containing 4-8 passive bonuses that unlock at specific Arcana levels and scale as you level up.</p>

        <h3>Promotion Types</h3>
        <p>Promotions are split into four categories based on when they activate:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Active Type</th>
              <th>When Active</th>
              <th>Count</th>
              <th>What It Does</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Journey Start</td><td>Journey start</td><td>144</td><td>Buffs starting stats, gold, stamina, PP, Bond Points</td></tr>
            <tr><td>Training</td><td>During training</td><td>353</td><td>EXP gains, stat growth rates, support rates, success/fail modifiers</td></tr>
            <tr><td>Class Training</td><td>Training (class-specific)</td><td>73</td><td>Boosts for matching nurturer classes</td></tr>
            <tr><td>Request</td><td>During requests</td><td>40</td><td>Request success rate, gold reward increases</td></tr>
          </tbody>
        </table>

        <h3>Journey Start Bonuses</h3>
        <p>These give you a head start on each Journey run by buffing your starting resources:</p>
        <ul>
          <li><strong>Starting Stats</strong> -- Bonus Power, Health, Focus, Endurance, or Protect at journey start (scales per level)</li>
          <li><strong>Starting Gold</strong> -- Extra gold to spend during the journey</li>
          <li><strong>Starting Stamina</strong> -- Extra max stamina for more actions per run</li>
          <li><strong>Starting PP</strong> -- Extra Planet Points</li>
          <li><strong>Starting Bond Points</strong> -- Extra Arcana Points for activating Unique Effects</li>
        </ul>

        <h3>Training Bonuses</h3>
        <p>These improve your training outcomes throughout the journey:</p>
        <ul>
          <li><strong>Training EXP Rate Up</strong> -- % increase to EXP gained from training</li>
          <li><strong>Training Increase Value Up</strong> -- Flat bonus to stat increases per training</li>
          <li><strong>Training Increase Value Rate Up</strong> -- % increase to stat increase values</li>
          <li><strong>Training Support Rate Up</strong> -- % increase to support success rate</li>
          <li><strong>Big Success Bonus</strong> -- Increased chance of big success during training</li>
          <li><strong>Training Fail Down</strong> -- Reduced penalty on training failure</li>
          <li><strong>Training Condition Efficiency Up</strong> -- Better results when training conditions are met</li>
        </ul>

        <h3>Class-Specific Training Bonuses</h3>
        <p>Similar to general training bonuses but only apply when training nurturers of a <strong>matching class</strong> (Striker, Defender, Ranger, Caster, Assassin, Supporter). These stack with the general training bonuses.</p>

        <h3>Request Bonuses</h3>
        <p>Improvements to the request/favor system:</p>
        <ul>
          <li><strong>Request Success Rate Up</strong> -- Higher chance of request success</li>
          <li><strong>Request Gold Increase</strong> -- More gold from completed requests</li>
        </ul>

        <h3>How Promotions Scale</h3>
        <p>Each promotion has an <strong>UnlockLevel</strong> and a <strong>PromotePerLevel</strong> interval:</p>
        <ul>
          <li>The bonus activates once you reach the unlock level</li>
          <li>Every N levels after that (based on the promotion's per-level interval), the bonus increases</li>
          <li>For example: a promotion that unlocks at Lv10 with a per-level interval of 10 and a base value of 8 with +1 per level would give +8 at Lv10, +9 at Lv20, +10 at Lv30, etc.</li>
        </ul>

        <h3>Arcana-Specific Promotes</h3>
        <p>50 of the 610 promotions are <strong>Arcana-specific</strong> -- they have a PromoteId matching an ArcanaId (ID >= 7,000,000). These are unique bonuses unlocked at Lv35+ that only that specific Arcana provides. They typically grant large flat bonuses (e.g., +150 to a training value).</p>

        <h2 id="unique-effects">Unique Effects</h2>
        <p>30 SSR Arcana have <strong>Unique Effects</strong> -- powerful abilities that cost <strong>Bond Points (Arcana Points)</strong> to activate during a Journey. Bond Points are earned by leveling any Arcana to Lv30+.</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cost</td><td>30-70 Bond Points (most commonly 50)</td></tr>
            <tr><td>Activation</td><td>Must spend Bond Points during Journey to activate</td></tr>
            <tr><td>Duration</td><td>Active for the rest of the current Journey</td></tr>
          </tbody>
        </table>

        <p>Unique Effects come in three types based on their icon:</p>
        <ul>
          <li><strong>Training type</strong> (17 Arcana) -- Enhances general training outcomes</li>
          <li><strong>Training Tag type</strong> (7 Arcana) -- Enhances training for specific nurturer classes</li>
          <li><strong>Request type</strong> (6 Arcana) -- Enhances request/favor outcomes</li>
        </ul>

        <p>Examples of unique effect names (localized):</p>
        <ul>
          <li>Bell -- "Mutual Arrangements" (40 BP)</li>
          <li>Emily -- "Battle Readiness" (70 BP)</li>
          <li>Charlotte -- "The Grand Master's Prestige" (30 BP)</li>
          <li>Carmen -- "Secret Recipe Soup" (60 BP)</li>
          <li>Luna -- "Lunar Blessing" (50 BP)</li>
        </ul>

        <h2 id="journey-events">Journey Events</h2>
        <p>65 Arcana have <strong>story event chains</strong> that trigger during Journeys:</p>
        <ul>
          <li><strong>45 Arcana</strong> have 3 sequential events (event 1 -> event 2 -> event 3)</li>
          <li><strong>20 Arcana</strong> have 1 standalone event</li>
          <li>Events are <strong>non-repeatable</strong> narrative cutscenes featuring that character</li>
          <li>Events form linear chains -- each event requires clearing the previous one</li>
          <li>Only SSR and SR Arcana have journey events (R grade has none)</li>
        </ul>

        <p>These events add narrative flavor to Journey runs and may include voiced dialogue from the linked character.</p>

        <h2 id="formation">Formation & Presets</h2>
        <p>Before starting a Journey, you equip Arcana into your <strong>Arcana Formation</strong>:</p>
        <ul>
          <li>All formation slots must be filled before starting a Journey</li>
          <li>Cannot equip an Arcana featuring the same character as your chosen Savior</li>
          <li><strong>Up to 16 presets</strong> can be saved and copied for quick switching</li>
        </ul>

        <h2 id="central-tactics">Central Tactics</h2>
        <p>Arcana power can also enhance the <strong>Savior's base stats</strong> through the Central/Tactics system:</p>
        <ul>
          <li>Equip Arcana to boost the Savior's <strong>ATK</strong>, <strong>HP</strong>, or <strong>DEF</strong></li>
          <li>This is separate from Journey bonuses -- it applies to regular combat</li>
        </ul>

        <h2 id="arcana-list">Full Arcana List</h2>
        <p>All names below are from the English localization. Data verified from game files.</p>

        <h3>SSR Arcana (30)</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Arcana Name</th>
              <th>Special Tag</th>
              <th>Class Synergy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Asherah</td><td>Young Lady of Stranis</td><td>HP</td><td>All</td></tr>
            <tr><td>Annah</td><td>Undercover Cop</td><td>Toughness</td><td>All</td></tr>
            <tr><td>Besta</td><td>A Satisfying Meal</td><td>Toughness</td><td>Defender</td></tr>
            <tr><td>Bell</td><td>Deep Mourning</td><td>Crit Rate</td><td>Ranger</td></tr>
            <tr><td>Carmen</td><td>Night View Beyond the Window</td><td>Super Effect</td><td>Savior</td></tr>
            <tr><td>Ceres</td><td>An Unseen Place</td><td>Super Effect</td><td>All</td></tr>
            <tr><td>Claire (Bunny)</td><td>The Perfect Bunny Girl</td><td>HP</td><td>All</td></tr>
            <tr><td>Charlotte</td><td>A Knight's Oath</td><td>Turn Speed</td><td>All</td></tr>
            <tr><td>Charlotte (Bunny)</td><td>A Clumsy Way to Relieve Desire</td><td>Super Effect</td><td>Assassin</td></tr>
            <tr><td>Dana</td><td>A Stroll with Friends</td><td>Crit Rate</td><td>Caster</td></tr>
            <tr><td>Elisa</td><td>Divine Trial</td><td>DEF</td><td>All</td></tr>
            <tr><td>Emily</td><td>A Quiet Moment of Rest</td><td>Super Effect</td><td>Defender</td></tr>
            <tr><td>Frey</td><td>The Princess Ascends the Throne</td><td>Super Effect</td><td>Supporter</td></tr>
            <tr><td>Frey (Bunny)</td><td>The Indomitable Masterpiece</td><td>Crit Damage</td><td>All</td></tr>
            <tr><td>Harley</td><td>Born to Be Wild</td><td>Toughness</td><td>All</td></tr>
            <tr><td>Hilde</td><td>Nostalgia Strikes Back</td><td>Super Effect</td><td>Defender</td></tr>
            <tr><td>Kyra</td><td>As Cute as Kyra!</td><td>Turn Speed</td><td>Assassin</td></tr>
            <tr><td>Lacy</td><td>No Pain, No Gain</td><td>ATK</td><td>All</td></tr>
            <tr><td>Lily</td><td>There's Only One Truth</td><td>ATK</td><td>Caster</td></tr>
            <tr><td>Lyn</td><td>Under the Glass Moon, Over the Pavilion</td><td>ATK</td><td>All</td></tr>
            <tr><td>Muriel</td><td>Divine Judgement</td><td>Crit Damage</td><td>Caster</td></tr>
            <tr><td>Naru</td><td>Dreams Under the Stars</td><td>Crit Rate</td><td>All</td></tr>
            <tr><td>Omega</td><td>The Imaginary Pioneer</td><td>Super Effect</td><td>All</td></tr>
            <tr><td>Petra</td><td>Made by Petra</td><td>Crit Rate</td><td>All</td></tr>
            <tr><td>Roberta</td><td>Responsibility Atop a Pile of Paperwork</td><td>Super Effect</td><td>Savior</td></tr>
            <tr><td>Rosaria</td><td>The End Wears the Face of a Girl</td><td>ATK</td><td>Ranger</td></tr>
            <tr><td>Scarlet (Bunny)</td><td>The Great and Amazing Bunny Girl</td><td>Effect Hit</td><td>Savior</td></tr>
            <tr><td>Tanya</td><td>Master of Fried Food</td><td>Super Effect</td><td>Savior</td></tr>
            <tr><td>Vera</td><td>More Than Professional</td><td>Super Effect</td><td>Supporter</td></tr>
            <tr><td>Yoo Mina</td><td>Experienced Mercenary</td><td>Super Effect</td><td>Savior</td></tr>
          </tbody>
        </table>

        <h3>SR Arcana (15)</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Arcana Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Asherah</td><td>The Beginning of the Journey</td></tr>
            <tr><td>Claire (Bunny)</td><td>Cleaning, and an Unexpected Guest</td></tr>
            <tr><td>Clarissa</td><td>Eagle-Eyed Hunter</td></tr>
            <tr><td>Epindel</td><td>Foundation of Elegance</td></tr>
            <tr><td>Haydee</td><td>Silent Hatred</td></tr>
            <tr><td>Lugh</td><td>Final Touches</td></tr>
            <tr><td>Luna</td><td>Beyond the Moon</td></tr>
            <tr><td>Lydia</td><td>A Satisfying Bloom</td></tr>
            <tr><td>Marcille</td><td>Rabbit Town</td></tr>
            <tr><td>Roberta</td><td>Enough Chit-Chat</td></tr>
            <tr><td>Scarlet (Bunny)</td><td>Assault of the Rampaging Dragon</td></tr>
            <tr><td>Seira</td><td>Butterfly of Phantasm</td></tr>
            <tr><td>Serpang</td><td>Sweet, Fluffy, Zzz...</td></tr>
            <tr><td>Smile</td><td>Cats Do Not Smile</td></tr>
            <tr><td>Trish</td><td>Choosing the Next Prey</td></tr>
          </tbody>
        </table>

        <h3>R Arcana (22)</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Arcana Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Asherah</td><td>The Girl Chasing the Stars</td></tr>
            <tr><td>Annah</td><td>Baton of the People</td></tr>
            <tr><td>Besta</td><td>Shield of the West</td></tr>
            <tr><td>Carmen</td><td>Knights' Shield</td></tr>
            <tr><td>Ceres</td><td>Sword of the West</td></tr>
            <tr><td>Claire (Bunny)</td><td>Master Maid</td></tr>
            <tr><td>Charlotte</td><td>Grand Master of the Wild Roses</td></tr>
            <tr><td>Dana</td><td>Druid Out of the Forest</td></tr>
            <tr><td>Freya</td><td>Blue-Blooded Entrepreneur</td></tr>
            <tr><td>Harley</td><td>Galloping Spirit of the Plains</td></tr>
            <tr><td>Kyra</td><td>Girl of Kotodama</td></tr>
            <tr><td>Lily</td><td>Rabbit with Two Faces</td></tr>
            <tr><td>Lisette (NPC)</td><td>Pathfinder of Starlight</td></tr>
            <tr><td>Lisa (NPC)</td><td>Pathfinder of Starlight</td></tr>
            <tr><td>Lugh</td><td>Ice-Forged Blade</td></tr>
            <tr><td>Luna</td><td>Like an Oracle to Flames</td></tr>
            <tr><td>Lydia</td><td>Serpent of the West</td></tr>
            <tr><td>Naru</td><td>Ambitious Newcomer</td></tr>
            <tr><td>Serpang</td><td>Mystic's Partner</td></tr>
            <tr><td>Smile</td><td>Just One Smile, Please</td></tr>
            <tr><td>Clarissa</td><td>Eagle-Eyed Hunter</td></tr>
            <tr><td>Vera</td><td>Brave Courier</td></tr>
          </tbody>
        </table>

        <h2 id="tips">Tips</h2>
        <ul>
          <li><strong>Prioritize SSR Arcana</strong> -- the Special Tag combat buff and Class Synergy make them significantly stronger than SR/R</li>
          <li><strong>Match Class Synergy</strong> -- equipping an Arcana with class synergy matching your nurturers gives +5% training effect, which compounds over a Journey</li>
          <li><strong>Level multiple Arcana</strong> -- you need Bond Points from Lv30+ Arcana to activate Unique Effects, so spread your EXP items across several cards</li>
          <li><strong>Save Bond Points for key Unique Effects</strong> -- some cost 30 BP (cheap) while others cost 70 BP (expensive); plan which effects you want per Journey</li>
          <li><strong>Farm limit breaks</strong> -- duplicate Arcana convert to shards for limit break, raising the level cap and unlocking higher-tier promotions</li>
          <li><strong>Build presets</strong> -- with up to 16 preset slots, save formations optimized for different Journey content (training-focused, request-focused, boss-focused)</li>
          <li><strong>Central Tactics</strong> -- don't forget to equip Arcana in the Central system too, as it boosts the Savior's base combat stats</li>
        </ul>
      `,
    },
    {
      slug: 'nova-burst-system-guide',
      title: 'Nova Burst System Guide',
      description:
        'How Nova Force works, how to activate Nova Burst, what effects each character gains, and the 15% team-wide damage boost explained.',
      author: 'Boring877',
      publishDate: '2026-03-22',
      category: 'Guide',
      tags: ['beginner', 'combat', 'nova-burst', 'toughness'],
      content: `
        <p><strong>Nova Burst</strong> is a team-wide burst system in Star Savior that temporarily empowers all of your Savers' active skills. Activating it at the right moment can turn the tide of battle.</p>

        <h2>What is Nova Force?</h2>
        <p>Nova Force is a <strong>shared team resource</strong> needed to activate Nova Burst. It is earned when any Savior uses a skill (except basic attacks):</p>
        <ul>
          <li>Using Special or Hyper skill: <strong>+1 Nova Force</strong></li>
          <li>Basic Attack: no Nova Force gained</li>
          <li>Maximum Nova Force: <strong>12</strong></li>
        </ul>

        <h2>Activating Nova Burst</h2>
        <p>To activate Nova Burst, you need <strong>4 Nova Force</strong>:</p>
        <ul>
          <li>Cost: <strong>4 Nova Force</strong></li>
          <li>Cannot be cancelled once activated</li>
          <li>State clears after the next skill is used</li>
        </ul>

        <h2>What Does Nova Burst Do?</h2>
        <p>When activated, two effects apply:</p>
        <ol>
          <li><strong>Team-wide DMG +15%:</strong> All Savers' active skills deal 15% more damage. This does NOT apply to follow-up/extra skills.</li>
          <li><strong>Per-skill Nova Burst effects:</strong> Each active skill gains an additional effect (see below)</li>
        </ol>

        <h2>Nova Burst Effects Per Skill</h2>
        <p>Every character's three active skills (Attack, Special, Hyper) each have a Nova Burst effect. These come in two types:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Common Effect</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Toughness Damage</td><td>Temporarily deals <strong>+1 BP Toughness DMG</strong> to the target on attack. Most characters get this on their non-highlight skills.</td></tr>
            <tr><td>Toughness Recovery</td><td><strong>Recovers 1 Toughness</strong> to self after using the skill. Typically found on Defender/Supporter non-highlight skills.</td></tr>
          </tbody>
        </table>

        <h2>Unique Nova Burst Effects</h2>
        <p>One skill per character (marked with a <strong>Unique</strong> tag on their character page) has a special Nova Burst effect beyond the common ones. These effects are diverse and powerful:</p>
        <ul>
          <li>Extra buffs: Shield, ATK Up, DEF Up, Speed Up, Barrier</li>
          <li>Extra debuffs on enemies: Hit Rate Down, Recovery Down, Effect RES Down, ATK Down, Burn chance up</li>
          <li>Extra toughness effects: additional Toughness DMG, Toughness Recovery</li>
          <li>Utility: Heal lowest HP ally, clear 1 debuff from all allies, Action Gauge manipulation, Stealth</li>
        </ul>

        <p>For example, some characters gain a shield on their unique Nova Burst skill, while others increase debuff application chance to 100%. Check each character's skill page to see their specific Nova Burst effects.</p>

        <h2>Toughness Impact</h2>
        <p>The Nova Burst toughness effect is <strong>separate from attribute advantage</strong> toughness damage. This means:</p>
        <ul>
          <li>Without Nova Burst: attribute advantage grants +1 Toughness DMG, disadvantage grants 0</li>
          <li>With Nova Burst (toughness damage type): always deals +1 Toughness DMG regardless of attribute, stacking with attribute advantage for +2 total</li>
          <li>With Nova Burst (toughness recovery type): restores 1 of your own Toughness -- useful for tanks and supports</li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Nova Force generates from <strong>all team members</strong> -- using multiple Savers' skills before bursting maximizes your force</li>
          <li>The +15% team DMG boost applies to <strong>all three active skills</strong>, not just the unique one</li>
          <li>Plan your Nova Burst activation around the unique skill -- save the highlight skill for after you activate Nova Burst</li>
          <li>Some characters' unique Nova Burst effects increase debuff chance to 100% -- combine these with important debuff skills</li>
        </ul>
      `,
    },
    {
      slug: 'equipment-system-guide',
      title: 'Equipment System Guide -- Sets, Grades, Enchanting & Set Bonuses',
      description:
        'Complete guide to the Star Savior equipment system. Covers the 3 gear sets (Motivator, Wendigo, Perses), 6 equipment slots, 4 grades, Tier 1 vs Tier 2 differences, enchanting, and all 12 set bonuses.',
      author: 'Boring877',
      publishDate: '2026-03-23',
      category: 'Guide',
      tags: ['beginner', 'equipment', 'gear', 'sets', 'enchanting'],
      content: `
        <p>The equipment system in Star Savior provides stat bonuses to your characters through 6 gear slots. Each piece belongs to one of <strong>3 sets</strong>, comes in one of <strong>4 grades</strong>, and can be enchanted up to level 15. Equipping multiple pieces from the same set activates <strong>set bonuses</strong> that provide powerful stat boosts.</p>

        <h2>Equipment Slots</h2>
        <p>Each character can equip one item in each of the 6 slots:</p>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Slot</th><th>Fixed Main Stat</th></tr>
          </thead>
          <tbody>
            <tr><td>Weapon</td><td>ATK</td></tr>
            <tr><td>Gloves</td><td>Flat HP</td></tr>
            <tr><td>Armor</td><td>DEF</td></tr>
            <tr><td>Boots</td><td>SPD</td></tr>
            <tr><td>Necklace</td><td>Varies (9 possible stats)</td></tr>
            <tr><td>Ring</td><td>Varies (8 possible stats)</td></tr>
          </tbody>
        </table>
        <p>Weapon, Gloves, Armor, and Boots always have a fixed main stat. <strong>Necklace and Ring</strong> can roll one of several main stats, so you will find multiple variants of the same necklace/ring with different stat focuses.</p>

        <h2>Grades</h2>
        <p>Equipment comes in 4 grades, listed from lowest to highest:</p>
        <ul>
          <li><strong>Uncommon</strong> -- lowest stats, Tier 1 only</li>
          <li><strong>Rare</strong> -- improved stats, Tier 1 only</li>
          <li><strong>Unique</strong> -- high stats, available in both Tier 1 and Tier 2</li>
          <li><strong>Legendary</strong> -- highest stats, available in both Tier 1 and Tier 2</li>
        </ul>
        <p>Higher grade equipment has higher base main stat values and higher enchant per level bonuses, making them significantly stronger at max enchant.</p>

        <h2>Tier 1 vs Tier 2</h2>
        <p>Unique and Legendary equipment exists in two tiers. <strong>Tier 2 is a direct upgrade</strong> over Tier 1 in every way:</p>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Stat</th><th>Tier 1 (Unique)</th><th>Tier 2 (Unique)</th></tr>
          </thead>
          <tbody>
            <tr><td>Weapon ATK</td><td>40 (+120 at +15)</td><td>55 (+165 at +15)</td></tr>
            <tr><td>Gloves HP</td><td>330 (+990 at +15)</td><td>465 (+1350 at +15)</td></tr>
            <tr><td>Armor DEF</td><td>30 (+90 at +15)</td><td>42 (+120 at +15)</td></tr>
            <tr><td>Boots SPD</td><td>8 (+15 at +15)</td><td>12 (+15 at +15)</td></tr>
            <tr><td>Necklace (ATK%)</td><td>180 (+600 at +15)</td><td>240 (+900 at +15)</td></tr>
            <tr><td>Ring (ATK%)</td><td>180 (+600 at +15)</td><td>240 (+900 at +15)</td></tr>
          </tbody>
        </table>
        <p>Tier 2 also costs more to engrave (20,000 gold vs 10,000 gold) and uses a different enchant EXP curve. Uncommon and Rare equipment only exist at Tier 1.</p>

        <h2>Gear Sets</h2>
        <p>There are 3 gear sets in the game: <strong>Motivator</strong>, <strong>Wendigo</strong>, and <strong>Perses</strong>. All three sets share the same 12 set bonus pool -- any 6 equipment pieces can activate any set bonus regardless of which visual set they belong to.</p>

        <h2>Enchanting</h2>
        <p>Equipment can be enchanted up to <strong>level 15</strong>. Each enchant level adds a fixed amount to the item's main stat. The bonus per level depends on the item's grade and tier:</p>
        <ul>
          <li>Each enchant level grants <strong>enchantPerStat</strong> bonus to the main stat</li>
          <li>At max level (+15), the total enchant bonus is <strong>enchantPerStat x 15</strong></li>
          <li>Higher grade and tier items have larger per-level bonuses</li>
        </ul>
        <p>For example, a Unique Tier 2 Motivator Weapon has +11 ATK per enchant level, giving +165 ATK at +15 on top of its 55 base ATK for a total of 220 ATK.</p>

        <h2>Engraving</h2>
        <p>Engraving is a separate system from enchanting. It costs gold to engrave equipment and <strong>adds +3 enchant levels to the main stat</strong>:</p>
        <ul>
          <li><strong>Tier 1:</strong> 10,000 gold</li>
          <li><strong>Tier 2:</strong> 20,000 gold</li>
          <li>Engraved gear cannot be sold, but engraving can be removed (which also unequips the gear)</li>
        </ul>

        <h2>Substats (Sub Options)</h2>
        <p>In addition to the main stat, each piece of equipment has up to <strong>4 substats</strong> (called "Sub Options" in-game). Substats are randomly rolled from a pool of 11 possible stat types:</p>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Flat Stats</th><th>Percentage Stats</th></tr>
          </thead>
          <tbody>
            <tr><td>ATK</td><td>ATK %</td></tr>
            <tr><td>Flat HP</td><td>HP %</td></tr>
            <tr><td>DEF</td><td>DEF %</td></tr>
            <tr><td>SPD</td><td>CRIT Rate</td></tr>
            <tr><td></td><td>CRIT Damage</td></tr>
            <tr><td></td><td>Effect Hit</td></tr>
            <tr><td></td><td>Evasion</td></tr>
          </tbody>
        </table>
        <p>The number of substats an item starts with depends on its <strong>grade</strong>. Higher grade gear starts with more substats and can unlock additional ones through enchanting:</p>
        <ul>
          <li><strong>Uncommon</strong> -- starts with fewer substats</li>
          <li><strong>Rare</strong> -- starts with more substats</li>
          <li><strong>Unique</strong> -- starts with 3 substats, unlocks the 4th at a certain enchant level</li>
          <li><strong>Legendary</strong> -- starts with 3 or 4 substats</li>
        </ul>
        <p>Once all substat slots are unlocked, further enchanting increases the values of existing substats rather than adding new ones. Each substat slot can only hold one stat type -- you cannot have duplicate substats on the same piece of gear.</p>

        <h2>Set Bonuses</h2>
        <p>Equipping multiple pieces of equipment activates set bonuses. There are <strong>12 set bonuses</strong> total, and any combination of gear pieces can trigger them. Each set bonus requires a specific number of equipped pieces:</p>

        <h3>2-Piece Bonuses</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Set Bonus</th><th>Effect</th><th>Pieces Needed</th></tr>
          </thead>
          <tbody>
            <tr><td>Defense Set</td><td>DEF +15%</td><td>2</td></tr>
            <tr><td>Hit Set</td><td>Effect Hit +20%</td><td>2</td></tr>
            <tr><td>Resistance Set</td><td>Evasion +20%</td><td>2</td></tr>
            <tr><td>Valor Set</td><td>ATK +5%, Evasion +5%</td><td>2</td></tr>
            <tr><td>Barrier Set</td><td>HP +10%, Evasion +5%</td><td>2</td></tr>
          </tbody>
        </table>

        <h3>4-Piece Bonuses</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Set Bonus</th><th>Effect</th><th>Pieces Needed</th></tr>
          </thead>
          <tbody>
            <tr><td>Speed Set</td><td>SPD +15</td><td>4</td></tr>
            <tr><td>Attack Set</td><td>ATK +20%</td><td>4</td></tr>
            <tr><td>Insight Set</td><td>CRIT Rate +30%</td><td>4</td></tr>
            <tr><td>Precision Set</td><td>CRIT Rate +15%, Effect Hit +20%</td><td>4</td></tr>
            <tr><td>Health Set</td><td>HP +30%</td><td>4</td></tr>
            <tr><td>Destruction Set</td><td>CRIT Damage +40%</td><td>4</td></tr>
            <tr><td>Annihilation Set</td><td>CRIT Damage +20%, Effect Hit +20%</td><td>4</td></tr>
          </tbody>
        </table>

      `,
    },
    {
      slug: 'damage-formula-and-stat-optimization-guide',
      title: 'Damage Formula, Speed System & Stat Optimization Guide',
      description:
        'Complete breakdown of the Star Savior damage formula, defense reduction, critical hits, turn speed mechanics, and stat investment priorities -- all verified from decompiled game code.',
      author: 'Boring877',
      publishDate: '2026-03-30',
      category: 'Guide',
      tags: ['advanced', 'combat', 'damage', 'speed', 'stats', 'optimization', 'theorycraft'],
      content: `
        <p>This guide breaks down how damage is calculated in Star Savior, how the turn speed system works, and how to optimize your stat investments. All formulas are verified from the game's decompiled source code (NKM.decompiled.cs, TurnSpeedCalculator.cs).</p>

        <h2 id="damage-formula">Damage Formula Overview</h2>
        <p>The damage calculation happens in multiple steps. Here is the simplified pipeline:</p>

        <div class="ss-code-label">NKMUnitStatManager.cs - OBF_33238 (GetFinalDamage)</div>
        <pre><code>// Step 1: Raw Damage (from skill templet factors)
RawDamage = (ATK * AtkFactor% + HP * HpFactor% + DEF * DefFactor%)
            * SkillMultiplier / HitCount

// Step 2: Defense Reduction
DefReduction = DEF_target / (DEF_target + Constant)
EffectiveDefReduction = DefReduction * (1 - Penetration% + PenResist%)

// Step 3: Apply DEF to Raw Damage
PostDef = RawDamage * (1 - EffectiveDefReduction)

// Step 4: Damage Up/Down modifiers (additive)
DamageUp   = AttributeAdvantage + DamageUp% + SkillPhaseUp%
           + AttackTagUp% + BuffCountUp% + DebuffCountUp% + BreakUp%
DamageDown = AttributeDisadvantage + DamageReduce%
           + NonCritReduce% + RoleReduce% + ElementReduce%
           + BreakReduce% + AttackTagReduce%

// Step 5: Critical Hit (applied after modifiers)
if CriticalHit:
    CritDMG_applied = CritDamage% - CritDamageReduce%  (floor 0)
    PostDef += PostDef * CritDMG_applied

// Step 6: Random Variance (+/-5%)
FinalDamage = PostDef * Random.Range(0.95, 1.05)

// Step 7: Hard Caps
if FinalDamage > TargetHP * DamageLimitByHP%:
    FinalDamage = TargetHP * DamageLimitByHP%
if TotalReduction > DamageReduceTotalLimit:
    TotalReduction = DamageReduceTotalLimit</code></pre>

        <h2 id="attribute-advantage">Attribute Advantage (Verified from Code)</h2>

        <div class="ss-code-label">NKMUnitStatManager.cs - OBF_16299</div>
        <pre><code>private static double CalcAttributeAdvantage(Unit attacker, Unit defender)
{
    double result = 0.0;
    if (attacker is BattleUnit unit)
    {
        // Check if attacker has advantage
        if (IsAttributeAdvantage(unit.Element, defender.Element))
        {
            result = 0.05;  // +5% base advantage
            result += unit.GetStat(RATE_DAMAGE_UP_ADJUST);  // + extra from buffs
        }
        // Check if attacker has disadvantage
        if (IsAttributeDisadvantage(unit.Element, defender.Element))
        {
            result = -0.05;  // -5% base disadvantage
        }
    }
    return result;
}

// Advantage relationships (OBF_11522):
// Sun > Star, Moon > Sun, Star > Moon
// Order > Chaos, Chaos > Order</code></pre>

        <p>Attribute advantage gives <strong>+5% damage</strong> and disadvantage gives <strong>-5% damage</strong>. This is a flat modifier applied during the damage up/down phase, not a multiplier on raw damage.</p>

        <h2 id="defense-formula">Defense Reduction Formula</h2>

        <div class="ss-code-label">NKMUnitStatManager.cs - OBF_10086 (CalcDefReduction)</div>
        <pre><code>private static double CalcDefReduction(BattleState host,
    Unit attacker, Unit defender, bool isDodge, DamageLog log)
{
    double defStat = defender.GetStat(NST_DEF);
    double hpGrownDefRate = defender.GetStat(RATE_HP_GROWN_DEF);
    hpGrownDefRate *= (1 - defender.GetBreakPercent());
    defStat += defStat * hpGrownDefRate;

    // Diminishing returns formula
    double defReduction = defStat / (defStat + Constant);
    // Constant differs between PVP and PVE modes

    // Apply penetration
    double penetration = attacker.GetStat(RATE_PENETRATE_DEF);
    double penResist = defender.GetStat(RATE_PENETRATE_DEF_RESIST);
    double effectivePen = penetration - penResist;
    defReduction -= defReduction * effectivePen;

    return Math.Max(defReduction, 0.0);
}</code></pre>

        <p>The defence constant is loaded at runtime from the game's const templet data. The actual values are:</p>
        <ul>
          <li><strong>PVE DefenceConst = 3,000</strong> (from CLIENT_CONST_TEMPLET.json, field "DefenceConst")</li>
          <li><strong>PVP DefenceConst = 300</strong> (from the same file, field "PvpDefenceConst")</li>
        </ul>

        <div class="ss-code-label">CLIENT_CONST_TEMPLET.json</div>
        <pre><code>"DefenceConst": 3000,      // PVE defense constant
"PvpDefenceConst": 300,   // PVP defense constant (much lower)
"RATE_DAMAGE_REDUCE_TOTAL_LIMIT": 5000  // 50% cap on total damage reduction</code></pre>

        <p>Key takeaways about defense:</p>
        <ul>
          <li><strong>DEF has diminishing returns</strong> -- the formula is DEF / (DEF + 3000), so each additional point provides less reduction</li>
          <li><strong>The sweet spot is around 2,500-3,000 DEF</strong> -- at DEF = Constant you hit 50% reduction, past which returns drop sharply</li>
          <li><strong>DEF barely matters in PVP</strong> -- with a constant of only 300, even 1000 DEF gives 77% reduction, so PVP damage is mostly unmitigated</li>
          <li><strong>Penetration directly reduces the DEF reduction</strong> -- it's a percentage subtracted from the total reduction, not from the DEF stat itself</li>
          <li><strong>Penetration Resist</strong> on the defender counters the attacker's penetration</li>
          <li><strong>Total damage reduction is hard-capped at 50%</strong> (RATE_DAMAGE_REDUCE_TOTAL_LIMIT = 5000 basis points)</li>
        </ul>

        <h3>Defense Reduction Examples (PVE)</h3>

        <div class="ss-chart">
          <div class="ss-chart-title">DEF Reduction Curve (PVE)</div>
          <div class="ss-chart-subtitle">DEF / (DEF + 3000) -- Diminishing Returns</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">1,000 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width: 25%;">25%</div></div>
              <span class="ss-chart-bar-value">75% dmg</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">2,000 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width: 40%;">40%</div></div>
              <span class="ss-chart-bar-value">60% dmg</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">2,500 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width: 45.5%;">45.5%</div></div>
              <span class="ss-chart-bar-value">54.5% dmg</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">3,000 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--gold" style="width: 50%;">50%</div></div>
              <span class="ss-chart-bar-value">50% dmg</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">4,000 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--orange" style="width: 57.1%;">57.1%</div></div>
              <span class="ss-chart-bar-value">42.9% dmg</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">5,000 DEF</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width: 62.5%;">62.5%</div></div>
              <span class="ss-chart-bar-value">37.5% dmg</span>
            </div>
          </div>
          <div class="ss-chart-legend" style="margin-top: 0.75rem; flex-direction: row; justify-content: center; gap: 1rem;">
            <span style="font-size: 0.75rem; color: var(--ss-text-muted);">Sweet spot: 2,500 - 3,000 DEF</span>
          </div>
        </div>

        <div class="ss-chart">
          <div class="ss-chart-title">Marginal Value of +1,000 DEF</div>
          <div class="ss-chart-subtitle">Extra reduction gained per 1,000 DEF at each tier</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">0 to 1k</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--green" style="width: 100%;">+25.0%</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">1k to 2k</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--green" style="width: 60%;">+15.0%</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">2k to 3k</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--gold" style="width: 40%;">+10.0%</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">3k to 4k</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--orange" style="width: 28%;">+7.1%</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">4k to 5k</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width: 21%;">+5.4%</div></div>
            </div>
          </div>
        </div>

        <h2 id="critical-hit">Critical Hit System</h2>

        <div class="ss-code-label">NKMUnitStatManager.cs - OBF_6758</div>
        <pre><code>private static double CalcCritDamageModifier(HitType hitType,
    ref DamageContext ctx)
{
    if (hitType != HitType.CriticalHit)
        return 0.0;

    // Crit DMG = attacker's CritDamage - defender's CritDamageReduce
    int critDMG = (attacker.GetStat(RATE_CRITICAL_DAMAGE)
                   - defender.GetStat(RATE_CRITICAL_DAMAGE_REDUCE));
    if (critDMG < 0) critDMG = 0;

    double result = critDMG / 10000.0;  // basis points to decimal
    return result;
}</code></pre>

        <p>Important details:</p>
        <ul>
          <li>Crit Damage is applied <strong>after</strong> defense reduction and damage up/down modifiers</li>
          <li>Crit Damage Reduce (on the defender) can partially or fully negate the attacker's Crit Damage bonus</li>
          <li>Non-critical hits can have additional <strong>NST_RATE_NONCRITICAL_DAMAGE_REDUCE</strong> applied to the defender</li>
          <li>Evasion triggers <strong>+50% damage reduction</strong> on the attacker's output (half damage on evade)</li>
        </ul>

        <h2 id="random-variance">Random Variance</h2>

        <div class="ss-code-label">NKMUnitStatManager.cs (line 17438)</div>
        <pre><code>// Final damage has +/-5% random variance
double variance = RandomGenerator.Range(9500, 10500) / 10000.0;
finalDamage *= variance;</code></pre>

        <p>Every hit has a +/-5% random variance applied at the very end. This means even identical attacks will deal slightly different damage each time. Over many hits this averages out, but on any single attack the damage can vary by up to 10% (from 95% to 105% of the calculated value).</p>

        <h2 id="turn-speed">Turn Speed System</h2>
        <p>Star Savior uses an <strong>action gauge</strong> system (similar to Final Fantasy X). Every unit has a gauge that fills up over time, and whoever reaches 10000 first gets to act.</p>

        <div class="ss-code-label">TurnSpeedCalculator.cs - OBF_21085 constructor</div>
        <pre><code>// Action gauge calculation
double speed = unit.GetStat(NST_TURN_SPEED);

// Apply +/-5% random variance to speed (in certain battle modes)
if (applyRandomVariance)
{
    double variance = RandomGenerator.Range(9500, 10500) / 10000.0;
    speed *= variance;
}

// Slow debuff cuts speed to 30%
if (isSlowed)
{
    speed *= 0.3;
}

// Ticks until this unit acts:
// ticksRemaining = (10000 - currentGauge) / speed</code></pre>

        <p>How it works:</p>
        <ul>
          <li>Each "tick", every unit's gauge fills by their <strong>speed value</strong></li>
          <li>The unit whose gauge reaches <strong>10,000 first</strong> gets the next turn</li>
          <li>After acting, the gauge resets (but retains leftover fill)</li>
          <li>Speed has <strong>+/-5% random variance</strong> per tick, making close speed values unreliable</li>
          <li>The <strong>slow debuff</strong> (IsLowTurnSpeed) reduces speed to <strong>30%</strong></li>
        </ul>

        <h3>Speed and Turns</h3>

        <div class="ss-chart">
          <div class="ss-chart-title">Turns per 1000 Ticks by Speed</div>
          <div class="ss-chart-subtitle">More speed = more turns = more total damage over a fight</div>
          <div class="ss-chart-line">
            <div class="ss-chart-line-point">
              <span class="ss-chart-line-val">10</span>
              <div class="ss-chart-line-stem ss-chart-line-stem--gold" style="height: 25%;"></div>
              <div class="ss-chart-line-dot ss-chart-line-dot--gold"></div>
              <span class="ss-chart-line-label">100</span>
            </div>
            <div class="ss-chart-line-point">
              <span class="ss-chart-line-val">12</span>
              <div class="ss-chart-line-stem ss-chart-line-stem--gold" style="height: 30%;"></div>
              <div class="ss-chart-line-dot ss-chart-line-dot--gold"></div>
              <span class="ss-chart-line-label">120</span>
            </div>
            <div class="ss-chart-line-point">
              <span class="ss-chart-line-val">14</span>
              <div class="ss-chart-line-stem ss-chart-line-stem--gold" style="height: 35%;"></div>
              <div class="ss-chart-line-dot ss-chart-line-dot--gold"></div>
              <span class="ss-chart-line-label">140</span>
            </div>
            <div class="ss-chart-line-point">
              <span class="ss-chart-line-val">17</span>
              <div class="ss-chart-line-stem ss-chart-line-stem--gold" style="height: 42.5%;"></div>
              <div class="ss-chart-line-dot ss-chart-line-dot--gold"></div>
              <span class="ss-chart-line-label">170</span>
            </div>
            <div class="ss-chart-line-point">
              <span class="ss-chart-line-val">20</span>
              <div class="ss-chart-line-stem ss-chart-line-stem--gold" style="height: 50%;"></div>
              <div class="ss-chart-line-dot ss-chart-line-dot--gold"></div>
              <span class="ss-chart-line-label">200</span>
            </div>
          </div>
        </div>

        <h3>Speed and Enemy Turn Denial</h3>
        <p>In a battle that ends after 7 of your turns, your speed determines how many times the enemy acts:</p>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Your SPD</th><th>Enemy Turns (120 SPD enemy)</th><th>Enemy Turns (140 SPD enemy)</th></tr>
          </thead>
          <tbody>
            <tr><td>120</td><td>7 (equal)</td><td>8</td></tr>
            <tr><td>140</td><td>6</td><td>7 (equal)</td></tr>
            <tr><td>170</td><td>5</td><td>6</td></tr>
            <tr><td>200</td><td>4</td><td>5</td></tr>
          </tbody>
        </table>

        <h2 id="stat-optimization">Stat Optimization Guide</h2>

        <h3>Expected Damage Formula</h3>
        <p>The expected damage per hit (accounting for crit probability) is:</p>
        <pre><code>Expected Damage = ATK * [1 + CritRate * CritDamage]
</code></pre>

        <p>This means Crit Rate and Crit Damage <strong>multiply each other</strong>. If one is zero, the other does nothing. They must be built together.</p>

        <h3>ATK vs Crit Damage -- The Breakeven</h3>
        <p>Given typical endgame values (ATK ~6000, base Crit Damage 50-68% bonus):</p>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Your Crit Rate</th><th>+200 ATK Damage</th><th>+10% CD Damage</th><th>+12% CD Damage</th><th>Winner</th></tr>
          </thead>
          <tbody>
            <tr><td>5%</td><td>+219</td><td>+86</td><td>+104</td><td>ATK (2.5x)</td></tr>
            <tr><td>20%</td><td>+230</td><td>+360</td><td>+432</td><td>CD</td></tr>
            <tr><td>30%</td><td>+234</td><td>+540</td><td>+648</td><td>CD (2.8x)</td></tr>
            <tr><td>45%</td><td>+240</td><td>+810</td><td>+972</td><td>CD (4x)</td></tr>
            <tr><td>50%</td><td>+242</td><td>+900</td><td>+1,080</td><td>CD (4.5x)</td></tr>
          </tbody>
        </table>

        <p>The breakeven point: <strong>+200 ATK = +10% CD at ~42% Crit Rate</strong>, and <strong>+200 ATK = +12% CD at ~33% Crit Rate</strong>.</p>

        <div class="ss-chart">
          <div class="ss-chart-title">+200 ATK vs +10% CD Damage Bonus</div>
          <div class="ss-chart-subtitle">ATK 6000, base CD 50%. Where each stat gives more damage.</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">5% CR</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 72%;" title="+200 ATK">+219</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 28%;" title="+10% CD">+86</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">ATK wins</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">20% CR</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 39%;" title="+200 ATK">+230</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 61%;" title="+10% CD">+360</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">CD wins</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">30% CR</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 30%;" title="+200 ATK">+234</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 70%;" title="+10% CD">+540</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">CD 2.3x</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">45% CR</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 23%;" title="+200 ATK">+240</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 77%;" title="+10% CD">+810</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">CD 3.4x</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">50% CR</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 21%;" title="+200 ATK">+242</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 79%;" title="+10% CD">+900</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">CD 3.7x</span>
            </div>
          </div>
          <div class="ss-chart-legend" style="margin-top: 0.75rem; flex-direction: row; justify-content: center; gap: 1.5rem;">
            <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--blue"></span> +200 ATK</div>
            <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--red"></span> +10% CD</div>
          </div>
        </div>

        <h3>20% ATK Set vs 40% CD Set</h3>
        <pre><code>// 20% ATK set: always +20% damage
// 40% CD set:  only works on crits

// Effective bonus per hit:
// ATK set:  +20% guaranteed
// CD set:   CR * 40% average (and RNG-dependent)

// CD set only wins when Crit Rate > 76%
// Example at 45% CR:
//   ATK set: 1.20 * multiplier
//   CD set:  1 + 0.45 * 0.40 = 1.18 * multiplier  (ATK wins)
</code></pre>

        <p><strong>Result: 20% ATK set always beats 40% CD set</strong> unless you have unrealistically high Crit Rate (76%+). The ATK set gives more average damage AND perfect consistency.</p>

        <h3>30 SPD vs 12% ATK</h3>
        <pre><code>// In a battle lasting 1000 ticks:
// 120 SPD: 12 turns * 1.00 = 12.0x damage
// 150 SPD: 15 turns * 1.00 = 15.0x damage  (+25%)
// vs
// 120 SPD: 12 turns * 1.12 = 13.44x damage  (+12%)
</code></pre>

        <p><strong>30 SPD wins in any battle lasting 3+ turns.</strong> In a 7-10 turn fight, 30 SPD also denies 1-2 enemy turns, which is often more valuable than the raw damage difference.</p>

        <h2 id="build-recommendations">Build Recommendations</h2>

        <h3>General Priority</h3>
        <ol>
          <li><strong>Speed first</strong> -- get to 140-170 SPD to outspeed enemies and deny turns</li>
          <li><strong>ATK as foundation</strong> -- maximize ATK through affection, tactics, resonance, and gear main stats (these are "free" and don't compete with substats)</li>
          <li><strong>Crit Rate to 40-50%</strong> -- this is the minimum threshold where CD investment becomes worthwhile</li>
          <li><strong>Crit Damage as high as possible</strong> -- at 40%+ CR, CD is the highest-value stat per point</li>
          <li><strong>Effect Hit</strong> -- essential for debuff-reliant characters</li>
        </ol>

        <h3>Set Bonus Recommendations</h3>

        <div class="ss-chart">
          <div class="ss-chart-title">4-Piece Set Bonus Damage Comparison</div>
          <div class="ss-chart-subtitle">ATK 6000, 45% CR, 50% base CD -- which set gives the most?</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Attack Set</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--gold" style="width: 85%;">8,640</div></div>
              <span class="ss-chart-bar-value">+20% ATK</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Destruction</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width: 100%;">9,420</div></div>
              <span class="ss-chart-bar-value">+40% CD</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Insight</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--purple" style="width: 89%;">8,856</div></div>
              <span class="ss-chart-bar-value">+30% CR</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Annihilation</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--orange" style="width: 93%;">9,060</div></div>
              <span class="ss-chart-bar-value">+20% CD+Hit</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Speed Set</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--teal" style="width: 82%;">7,200 + turns</div></div>
              <span class="ss-chart-bar-value">+15 SPD</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">No Set</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--gray" style="width: 72%;">7,200</div></div>
              <span class="ss-chart-bar-value">baseline</span>
            </div>
          </div>
        </div>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Playstyle</th><th>4-Piece Set</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr><td>General / Safe</td><td>Attack Set (+20% ATK)</td><td>Always works, no RNG, beats CD set at realistic crit rates</td></tr>
            <tr><td>Crit Build (40%+ CR)</td><td>Destruction Set (+40% CD)</td><td>Best ceiling damage if you can maintain high CR</td></tr>
            <tr><td>Speed Control</td><td>Speed Set (+15 SPD)</td><td>Turn denial is extremely valuable in 7-10 turn fights</td></tr>
            <tr><td>Debuffer</td><td>Hit Set (+20% Effect Hit)</td><td>Essential for landing debuffs consistently</td></tr>
          </tbody>
        </table>

        <h3>The Golden Rule</h3>
        <blockquote><p><strong>ATK is your foundation, CD is your multiplier.</strong> You need a strong foundation before the multiplier matters. Get ATK high from free sources (affection, tactics, resonance), then decide: if your Crit Rate is below 30%, prioritize ATK substats. If it's 40%+ from buffs and gear, stack CD as your primary substat investment.</p></blockquote>

        <h2 id="battle-power">Battle Power Formula</h2>
        <p>The game uses a Battle Power score for unit ranking. This is separate from actual combat damage:</p>

        <div class="ss-code-label">NKMUnitStatManager.cs - OBF_26687 (CalcBattleScore)</div>
        <pre><code>double atkFactor = ATK / 10.0 * ATK_WEIGHT * (
    (1 - critRate) + critRate * (1 + critDamage) );
double hpFactor  = HP / 55.0 * HP_WEIGHT;
double defFactor = DEF / 5.0 * DEF_WEIGHT;
double spdFactor = (100 + (SPD - 100) / SPD_NORMALIZE) / 100.0;
double potenFactor = 1.0 + totalPotentialPoints * POTEN_SCALE;
double hitFactor  = max(1.0,
    1 + (effectHit - 10000 + effectEvade) / 10.0);

double rawScore = (atkFactor + hpFactor + defFactor)
    * spdFactor * hitFactor;

double bonusFromLB = limitBreakGrade * 0.02;
double bonusFromSkills = totalSkillLevels * 0.01;
double multiplier = 1.0 + bonusFromLB + bonusFromSkills;

int battlePower = (int)(rawScore * multiplier);</code></pre>

        <p>Key points about Battle Power:</p>
        <ul>
          <li>ATK has the highest weight (divided by 10 vs HP/55 and DEF/5)</li>
          <li>Crit interactions are baked into the ATK factor</li>
          <li>Limit Break grades add 2% per grade</li>
          <li>Total skill levels add 1% per level</li>
          <li>Potential points add a small bonus per point</li>
        </ul>

        <h2 id="sources">Source Code References</h2>
        <p>All formulas in this guide are extracted from the game's decompiled C# source code. The key files are:</p>
        <ul>
          <li><strong>NKM.decompiled.cs</strong> -- Game model/logic (UnitStatManager, damage calculation, stat builder)</li>
          <li><strong>NKC.decompiled.cs</strong> -- Client UI code (stat display, tooltips)</li>
          <li><strong>Star.Templets.decompiled.cs</strong> -- Damage templet data structures (AtkFactor, HpFactor, DefFactor fields)</li>
        </ul>
        <p>The decompiled and deobfuscated source code is publicly available at <strong>github.com/boring877/star-savior-decompiled</strong>.</p>
      `,
    },
    {
      slug: 'pvp-stat-scaling-and-build-guide',
      title: 'PvP Stat Scaling, Crit vs ATK & Build Priorities',
      description:
        'How PvP stat scaling works, why Crit Damage is not reduced, the Tactics/Star Link zero-out, and whether ATK or Crit builds are better for PvP -- all verified from decompiled game code.',
      author: 'Boring877',
      publishDate: '2026-03-30',
      category: 'Guide',
      tags: ['advanced', 'combat', 'pvp', 'stats', 'optimization', 'theorycraft', 'damage'],
      content: `
        <p>PvP in Star Savior works very differently from PvE when it comes to stats. The game doesn't just change the enemy stats -- it <strong>scales down your unit stats by a factor of 10</strong>, while leaving rate stats like Crit Rate and Crit Damage completely untouched. This creates a fundamentally different stat economy that changes which builds are optimal.</p>

        <h2 id="pvp-stat-scaling">How PvP Stat Scaling Works</h2>
        <p>In PvP, your stats are processed through a <strong>StatScaleFactorBundle</strong> -- a set of per-provider multipliers that reduce certain stat sources:</p>

        <div class="ss-code-label">NKM.decompiled.cs - OBF_30634 (StatScaleFactorBundle), line 18697</div>
        <pre><code>// Default (PvE) scales -- everything at 100%
public static readonly StatScaleFactorBundle DEFAULT =
    new StatScaleFactorBundle(GameMode.Default,
        StatScale:      10000,  // 100%
        TacticsScale:  10000,  // 100%
        StarLinkScale: 10000,  // 100%
        StellarScale:  10000,  // 100%
        EquipScale:    10000   // 100%
    );

// PvP hardcoded scales
public static readonly StatScaleFactorBundle PVP =
    new StatScaleFactorBundle(GameMode.Pvp,
        StatScale:      1000,  // 10%  -- base stats heavily reduced
        TacticsScale:     0,   // 0%   -- tactics completely removed!
        StarLinkScale:    0,   // 0%   -- star link completely removed!
        StellarScale:   1000,  // 10%
        EquipScale:     1000   // 10%
    );</code></pre>

        <p>These values are loaded from the game's const templet at runtime:</p>

        <div class="ss-code-label">CLIENT_CONST_TEMPLET.json - PvpBattle section</div>
        <pre><code>"PvpBattle": {
    "PvpDefenceConst": 300,     // PvP DEF constant (vs 3000 in PvE)
    "StatScale": 1000,          // Base stats scaled to 10%
    "TacticsScale": 500,         // Tactics scaled to 5%
    "StarLinkScale": 500         // Star link scaled to 5%
}</code></pre>

        <h3>What Gets Scaled</h3>
        <p>The critical detail is that the scale factors <strong>only apply to flat stats (ATK, HP, DEF)</strong>. Rate stats pass through untouched. Here is the proof from the scale method implementation:</p>

        <div class="ss-code-label">NKM.decompiled.cs - StatScaleFactorBundle, lines 18731-18758</div>
        <pre><code>// StatScale: returns scale for HP, ATK, DEF only
public int GetStatScale(NST_StatType stat)
{
    // Only NST_HP, NST_ATK, NST_DEF get scaled
    // Everything else returns 10000 (no change)
    if (stat == NST_HP || stat is NST_ATK or NST_DEF)
    {
        return this.StatScale;
    }
    return 10000;  // <-- Rate stats unaffected!
}

// TacticsScale: same pattern, only HP/ATK/DEF
public int GetTacticsScale(NST_StatType stat)
{
    if (stat != NST_HP && stat is not (NST_ATK or NST_DEF))
    {
        if (GameMode is Pvp or PvpRank)
            return 0;  // Non-HP/ATK/DEF stats get ZERO in PvP
        return 10000;
    }
    return this.TacticsScale;
}

// StarLinkScale: identical pattern
public int GetStarLinkScale(NST_StatType stat)
{
    if (stat != NST_HP && stat is not (NST_ATK or NST_DEF))
    {
        if (GameMode is Pvp or PvpRank)
            return 0;
        return 10000;
    }
    return this.StarLinkScale;
}</code></pre>

        <h3>Full Stat Impact Table</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Stat</th><th>PvE</th><th>PvP</th><th>Change</th></tr>
          </thead>
          <tbody>
            <tr><td>ATK</td><td>6,000</td><td>~600</td><td>Scaled to 10%</td></tr>
            <tr><td>HP</td><td>34,000</td><td>~3,400</td><td>Scaled to 10%</td></tr>
            <tr><td>DEF</td><td>2,700</td><td>~270</td><td>Scaled to 10%</td></tr>
            <tr><td>Crit Rate</td><td>45%</td><td>45%</td><td><strong>Unchanged</strong></td></tr>
            <tr><td>Crit Damage</td><td>150%</td><td>150%</td><td><strong>Unchanged</strong></td></tr>
            <tr><td>Effect Hit</td><td>100%</td><td>100%</td><td><strong>Unchanged</strong></td></tr>
            <tr><td>Effect Evasion</td><td>0%</td><td>0%</td><td><strong>Unchanged</strong></td></tr>
            <tr><td>Turn Speed</td><td>140</td><td>140</td><td><strong>Unchanged</strong></td></tr>
            <tr><td>Tactics Stats</td><td>Full</td><td>0</td><td><strong>Completely removed</strong></td></tr>
            <tr><td>Star Link Stats</td><td>Full</td><td>0</td><td><strong>Completely removed</strong></td></tr>
          </tbody>
        </table>

        <div class="ss-chart">
          <div class="ss-chart-title">PvE to PvP Stat Scaling</div>
          <div class="ss-chart-subtitle">Flat stats scaled to 10%, rate stats untouched, tactics/star link zeroed</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">ATK</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 90%;">6,000</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 9%;">~600</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">10%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">HP</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 90%;">34,000</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 9%;">~3,400</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">10%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">DEF</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 90%;">2,700</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 9%;">~270</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">10%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Crit Rate</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--green" style="width: 100%;">45%</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">100%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Crit Damage</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--green" style="width: 100%;">150%</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">100%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Turn Speed</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--green" style="width: 100%;">140</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">100%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Tactics</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 50%;">Full</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 0.5%;"></div>
                </div>
              </div>
              <span class="ss-chart-bar-value">0%</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Star Link</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 50%;">Full</div>
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 0.5%;"></div>
                </div>
              </div>
              <span class="ss-chart-bar-value">0%</span>
            </div>
          </div>
          <div class="ss-chart-legend" style="margin-top: 0.75rem; flex-direction: row; justify-content: center; gap: 1.5rem;">
            <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--blue"></span> PvE Value</div>
            <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--red"></span> PvP Value</div>
            <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--green"></span> Unchanged</div>
          </div>
        </div>

        <h2 id="pvp-defense">PvP Defense Constant</h2>
        <p>The PvP DEF constant is <strong>300</strong> (vs 3,000 in PvE). This means:</p>

        <div class="ss-code-label">NKMUnitStatManager.cs - CalcDefReduction, line 17872</div>
        <pre><code>// PvE: DEF / (DEF + 3000)
// PvP: DEF / (DEF + 300)
// The formula is identical -- only the constant changes

result = defStat / (defStat + isPvpBattle
    ? PvpDefenceConst   // 300
    : DefenceConst);     // 3000</code></pre>

        <table class="ss-blog-table">
          <thead>
            <tr><th>DEF (PvP)</th><th>Reduction</th><th>Enemy Keeps</th></tr>
          </thead>
          <tbody>
            <tr><td>150</td><td>33.3%</td><td>66.7%</td></tr>
            <tr><td>270</td><td>47.4%</td><td>52.6%</td></tr>
            <tr><td>300</td><td>50.0%</td><td>50.0%</td></tr>
            <tr><td>500</td><td>62.5%</td><td>37.5%</td></tr>
          </tbody>
        </table>

        <p>Because DEF is also scaled to 10%, typical PvP units have ~200-300 DEF, which puts them right at the 40-50% reduction sweet spot. The proportional balance between ATK and DEF stays roughly the same as PvE.</p>

        <div class="ss-chart">
          <div class="ss-chart-title">PvE vs PvP Defense Reduction</div>
          <div class="ss-chart-subtitle">Same formula, different constant. Proportionally similar results.</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">PvE 2700 DEF</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--blue" style="width: 47.4%;">47.4%</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">Constant: 3000</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">PvP 270 DEF</span>
              <div class="ss-chart-bar-track">
                <div class="ss-chart-bar-group" style="width: 100%;">
                  <div class="ss-chart-bar ss-chart-bar--red" style="width: 47.4%;">47.4%</div>
                </div>
              </div>
              <span class="ss-chart-bar-value">Constant: 300</span>
            </div>
          </div>
          <div class="ss-chart-compare">
            <div class="ss-chart-compare-item">
              <div class="ss-chart-compare-label">PvE DEF Constant</div>
              <div class="ss-chart-compare-value ss-chart-compare-value--blue">3,000</div>
            </div>
            <div class="ss-chart-compare-item">
              <div class="ss-chart-compare-label">PvP DEF Constant</div>
              <div class="ss-chart-compare-value ss-chart-compare-value--red">300</div>
            </div>
            <div class="ss-chart-compare-item">
              <div class="ss-chart-compare-label">Ratio</div>
              <div class="ss-chart-compare-value ss-chart-compare-value--gold">10x</div>
            </div>
          </div>
        </div>

        <h2 id="pvp-crit-vs-atk">ATK Build vs Crit Build in PvP</h2>
        <p>Here is the core comparison. Does investing in Crit outperform raw ATK when both are scaled to 10%?</p>

        <h3>5000 ATK + Full Crit vs 7000 ATK + No Crit</h3>

        <div class="ss-code-label">Expected damage formula</div>
        <pre><code>Expected Damage = ATK * (1 + CritRate * CritDamage)

// Build A (Crit focus): 5000 ATK, 45% CR, 150% CD
A_PvE = 5000 * (1 + 0.45 * 1.50) = 5000 * 1.675 = 8,375
A_PvP =  500 * (1 + 0.45 * 1.50) =  500 * 1.675 =   838

// Build B (ATK focus): 7000 ATK, 10% CR, 50% CD
B_PvE = 7000 * (1 + 0.10 * 0.50) = 7000 * 1.050 = 7,350
B_PvP =  700 * (1 + 0.10 * 0.50) =  700 * 1.050 =   735

// Crit build wins by 14% in BOTH PvE and PvP
// The ratio is identical -- scaling doesn't change the comparison</code></pre>

        <p><strong>The PvP scaling doesn't change the ATK vs Crit comparison at all.</strong> Both builds get scaled by the same 10%, so the ratio between them stays identical. Crit still wins by the same 14% on average.</p>

        <div class="ss-chart">
          <div class="ss-chart-title">Crit vs ATK Build Average Damage</div>
          <div class="ss-chart-subtitle">Same 14% gap in both PvE and PvP</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Crit (PvE)</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width: 100%;">8,375</div></div>
              <span class="ss-chart-bar-value">45% CR</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">ATK (PvE)</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width: 87%;">7,350</div></div>
              <span class="ss-chart-bar-value">10% CR</span>
            </div>
            <div class="ss-chart-bar-row" style="margin-top: 0.5rem; opacity: 0.6; font-size: 0.75rem;">
              <span class="ss-chart-bar-label"></span>
              <span class="ss-chart-bar-value" style="flex: 1; text-align: center;">-- PvP (x0.1 scaling) --</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">Crit (PvP)</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width: 100%;">838</div></div>
              <span class="ss-chart-bar-value">45% CR</span>
            </div>
            <div class="ss-chart-bar-row">
              <span class="ss-chart-bar-label">ATK (PvP)</span>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width: 87%;">735</div></div>
              <span class="ss-chart-bar-value">10% CR</span>
            </div>
          </div>
          <div class="ss-chart-compare">
            <div class="ss-chart-compare-item">
              <div class="ss-chart-compare-label">Crit Build Advantage</div>
              <div class="ss-chart-compare-value ss-chart-compare-value--green">+14%</div>
            </div>
            <div class="ss-chart-compare-item">
              <div class="ss-chart-compare-label">Same in PvE?</div>
              <div class="ss-chart-compare-value ss-chart-compare-value--gold">Yes</div>
            </div>
          </div>
        </div>

        <h3>With Set Bonuses</h3>

        <table class="ss-blog-table">
          <thead>
            <tr><th>Build</th><th>Setup</th><th>Avg Damage (PvE)</th><th>Advantage</th></tr>
          </thead>
          <tbody>
            <tr><td>Crit (Destruction)</td><td>5000 ATK, 45% CR, 190% CD</td><td>9,275</td><td>+10.4%</td></tr>
            <tr><td>ATK (Attack)</td><td>8400 ATK, 10% CR, 50% CD</td><td>8,820</td><td>Baseline</td></tr>
            <tr><td>Crit (Insight)</td><td>5000 ATK, 75% CR, 150% CD</td><td>10,625</td><td>+26.5%</td></tr>
            <tr><td>Speed (Speed)</td><td>5000 ATK, 45% CR, 150% CD, 170 SPD</td><td>9,275 + turns</td><td>Tactical</td></tr>
          </tbody>
        </table>

        <h3>The Consistency Problem</h3>
        <p>The average damage favors crit. But individual hits don't care about averages:</p>

        <div class="ss-chart">
          <div class="ss-chart-title">Per-Hit Damage Distribution</div>
          <div class="ss-chart-subtitle">Build A has higher average, but 55% of the time deals less</div>
          <div class="ss-chart-donut-wrap">
            <div>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--ss-text-primary); margin-bottom: 0.5rem; text-align: center;">Build A (Crit)</div>
              <div class="ss-chart-donut" style="background: conic-gradient(
                #bd3a3a 0deg 162deg,
                #3a7cbd 162deg 360deg
              );">
                <div class="ss-chart-donut-center">
                  <div class="ss-chart-donut-center-value">8,375</div>
                  <div class="ss-chart-donut-center-label">avg</div>
                </div>
              </div>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--ss-text-primary); margin-bottom: 0.5rem; text-align: center;">Build B (ATK)</div>
              <div class="ss-chart-donut" style="background: conic-gradient(
                #3a7cbd 0deg 324deg,
                #bd3a3a 324deg 360deg
              );">
                <div class="ss-chart-donut-center">
                  <div class="ss-chart-donut-center-value">7,350</div>
                  <div class="ss-chart-donut-center-label">avg</div>
                </div>
              </div>
            </div>
            <div class="ss-chart-legend">
              <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--red"></span> Crit hit (Build A)</div>
              <div class="ss-chart-legend-item"><span class="ss-chart-legend-swatch ss-chart-legend-swatch--blue"></span> Non-crit hit</div>
              <div class="ss-chart-legend-item" style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--ss-text-muted);">Build A: 55% at 5k, 45% at 14.5k</div>
              <div class="ss-chart-legend-item" style="font-size: 0.75rem; color: var(--ss-text-muted);">Build B: 90% at 7k, 10% at 10.5k</div>
            </div>
          </div>
        </div>

        <pre><code>// Build A (Crit): 45% CR, 190% CD
//   55% of the time: 5,000 damage (NO crit)
//   45% of the time: 14,500 damage (CRIT)

// Build B (ATK): 10% CR, 50% CD
//   90% of the time: 7,000 damage (no crit)
//   10% of the time: 10,500 damage (crit)</code></pre>

        <p>Build A has a <strong>55% chance of dealing LESS damage than Build B on any given hit</strong>. Over many hits, the average favors Build A. But in PvP, where battles last 5-7 turns and every skill matters, the consistency of Build B can be more valuable.</p>

        <h3>Crit Probability Over a Short Fight</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Hits</th><th>Chance of 0 Crits (45% CR)</th><th>Chance of At Least 1 Crit</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>55%</td><td>45%</td></tr>
            <tr><td>3</td><td>17%</td><td>83%</td></tr>
            <tr><td>5</td><td>5%</td><td>95%</td></tr>
            <tr><td>7</td><td>1.5%</td><td>98.5%</td></tr>
          </tbody>
        </table>

        <p>Over a full PvP match (7+ actions), you're very likely to crit at least a few times. The crit build's higher ceiling compounds over multiple turns. But on any single clutch skill (like a Nova Burst), there's a 55% chance you don't crit.</p>

        <h2 id="pvp-build-recommendations">PvP Build Recommendations</h2>

        <h3>If building specifically for PvP</h3>
        <ol>
          <li><strong>ATK set (+20% ATK) is the safe choice</strong> -- consistent damage, no RNG, works on every hit</li>
          <li><strong>Speed is extremely valuable</strong> -- Turn Speed is NOT scaled in PvP. 170 SPD gives you the same turn denial as in PvE</li>
          <li><strong>Effect Hit is at full value</strong> -- debuffs land just as easily as in PvE</li>
          <li><strong>Tactics and Star Link stats are worthless in PvP</strong> -- don't invest in these for PvP teams</li>
        </ol>

        <h3>If building for general content (PvE + PvP)</h3>
        <ol>
          <li><strong>Crit build is fine</strong> -- it wins on average in both modes by ~10-14%</li>
          <li><strong>Accept the variance</strong> -- you will have fights where you lose the crit rolls</li>
          <li><strong>Speed set (+15 SPD) might be the best PvP compromise</strong> -- gives tactical advantage without relying on RNG</li>
        </ol>

        <h3>What NOT to invest in for PvP</h3>
        <ul>
          <li><strong>Tactics stats</strong> -- scaled to 0%, completely disabled</li>
          <li><strong>Star Link stats</strong> -- scaled to 0%, completely disabled</li>
          <li><strong>Excessive DEF</strong> -- the PvP DEF constant is low enough that you get diminishing returns quickly at ~300 DEF</li>
          <li><strong>Flat HP stacking</strong> -- scaled to 10%, so HP-focused substats give minimal value</li>
        </ul>

        <h2 id="pvp-summary">Summary</h2>
        <blockquote><p>PvP doesn't change the ATK vs Crit math -- both get scaled equally. The real PvP-specific insights are: (1) Speed, Crit Rate, and Crit Damage are your most efficient stats because they aren't reduced, (2) Tactics and Star Link investments are wasted in PvP, and (3) the short fight length makes consistency more valuable than ceiling damage, which slightly favors ATK builds for clutch PvP moments.</p></blockquote>

        <h2 id="sources">Source Code References</h2>
        <ul>
          <li><strong>NKM.decompiled.cs</strong> -- StatScaleFactorBundle (lines 18688-18760), damage formula, DEF reduction</li>
          <li><strong>NKM.Templets.decompiled.cs</strong> -- Stat type classification (line 29156), OBF_2137 rate stat check</li>
          <li><strong>Star.Templets.decompiled.cs</strong> -- PvP stat scale templet loading (line 22426)</li>
          <li><strong>CLIENT_CONST_TEMPLET.json</strong> -- PvpBattle config values</li>
        </ul>
        <p>Full decompiled and deobfuscated source: <strong>github.com/boring877/star-savior-decompiled</strong></p>
      `,
    },
    {
      slug: 'blessing-potential-and-stellar-memory-guide',
      title: 'Blessing, Potential & Stellar Memory System Guide',
      description:
        'Complete breakdown of the Stellar Memory blessing system, SE Potential passives, the 4-slot battle deck, blessing succession mechanics, and how blessings are selected -- all verified from decompiled game code.',
      author: 'Boring877',
      publishDate: '2026-03-30',
      category: 'Guide',
      tags: ['advanced', 'journey', 'stellar-memory', 'blessing', 'potential', 'succession', 'theorycraft'],
      content: `
        <p>The <strong>Stellar Memory</strong> system is one of Star Savior's most complex mechanics. It combines three overlapping concepts -- <strong>Base Stats</strong>, <strong>Potentials</strong> (passive abilities), and <strong>Blessings</strong> (inherited stat bonuses) -- into a single UI that many players find confusing. This guide breaks down each system, how they interact, and what actually happens when you start a Journey.</p>

        <h2 id="three-concepts">Three Different Things (That Look the Same)</h2>
        <p>When you open a Stellar Memory detail page, you see tabs for Stats, Potential, and Blessing. These are three <strong>distinct systems</strong> that share the same data type internally (<code>NKCSePoten</code> class) but serve different purposes:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Tab</th>
              <th>What It Is</th>
              <th>Filter Condition</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Stats</strong></td>
              <td>Base ATK/HP/DEF/SPD from the memory's grade</td>
              <td>Always shown</td>
              <td>Journey grade + templet base stats</td>
            </tr>
            <tr>
              <td><strong>Potential</strong></td>
              <td>Leveled-up passive abilities (battle effects)</td>
              <td>level &gt; 0</td>
              <td>Upgraded with Potential Points (PP)</td>
            </tr>
            <tr>
              <td><strong>Blessing</strong></td>
              <td>Stat bonuses inherited from parent/ancestor units</td>
              <td>value &gt; 0</td>
              <td>Server assigns from parent data</td>
            </tr>
          </tbody>
        </table>

        <div class="ss-code-label">NKCStellarMemoryPreview -- Tab filtering logic (NKC.decompiled.cs:235770)</div>
        <pre><code>// Tab 0: Stats -- base stats from grade
OBF_31681() -> statBundle calculation

// Tab 1: Potential -- SE passives the player has leveled up
OBF_6179() -> filter by OBF_33437 > 0  (has level)

// Tab 2: Blessing -- stat bonuses from ancestors
OBF_27095() -> filter by OBF_4421 > 0  (has value)</code></pre>

        <blockquote><p><strong>The key difference in plain terms:</strong> <strong>Potentials</strong> (like 25% Damage Up, 15% Crit Rate) are the powerful battle buffs that <strong>you actively upgrade using Potential Points (PP)</strong>. <strong>Blessings</strong> are small flat stat bonuses (+10 to +50 ATK/HP/DEF) that are <strong>automatically assigned by the server</strong> when a parent's blessing is inherited during a journey succession event. Both are active at the same time during battle, but only Potentials require your PP investment.</p></blockquote>

        <h2 id="journey-start">Starting a Journey: Selecting Stellar Memories</h2>
        <p>Before starting a Journey (Stellar Memory scenario), you must select <strong>2 Stellar Memories</strong> from your collection. These become the <strong>"ancestors" (parents)</strong> for that journey run.</p>

        <ul>
          <li>The selection screen (<code>NKCSubPageStellarMemorySelector</code>) has <strong>exactly 2 slots</strong></li>
          <li>An <strong>auto-fill button</strong> picks the highest-power stellar memories, grouped by unit, sorted descending by power</li>
          <li>A "Gene" button opens a popup showing parent/ancestor blessing info</li>
          <li>The 2 selected memories determine which units and blessings are available during the journey</li>
        </ul>

        <div class="ss-code-label">NKCSubPageStellarMemorySelector (NKC.decompiled.cs:159879-160096)</div>
        <pre><code>[RequiredListLength(2)]
public OBF_0495[] OBF_15501_stellarMemories;  // exactly 2 slots

// Auto-fill: highest power, grouped by unit, descending
// JourneyStartCondition builds leader list from:
//   1. Default player unit
//   2. Leader unit
//   3. The 2 selected stellar memory units (reversed)</code></pre>

        <h2 id="battle-deck">The 4-Slot Battle Deck</h2>
        <p>During a Journey, you fight battles using a <strong>4-slot deck</strong>. The server populates these slots at the start of each journey. Some slots may be <strong>locked</strong> initially and become unlocked through <strong>blessing succession</strong> events.</p>

        <div class="ss-code-label">JourneyPlay state -- deck initialization (NKC.decompiled.cs:272334)</div>
        <pre><code>private readonly List&lt;OBF_25083&gt; OBF_24840 = new(4);  // 4 deck slots

// Server sends 4 slots at journey start:
OBF_24840.Clear();
OBF_24840.AddRange(OBF_14524.OBF_20430);  // from server response

// Filtered view (only non-empty slots):
public IEnumerable&lt;OBF_33715&gt; OBF_2917 => OBF_4055.Where(e => e.OBF_11444 != null);</code></pre>

        <p>The <strong>BlessJoin popup</strong> (<code>NKCPopupBlessJoin</code>) handles the unlock animation: it clears the joining unit's current slot, plays an unlock effect, then places the unit into that slot. Locked slots get a lock visual overlay.</p>

        <h2 id="blessing-succession">Blessing Succession (Inheritance)</h2>
        <p>Throughout a Journey, parent blessings can "join" your battle deck. This is the <strong>succession</strong> system -- it is configured per-turn in the journey templet data.</p>

        <h3>Succession Types</h3>
        <p>Each journey turn has a <code>BlessSuccessionType</code> that determines what happens:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Enum Value</th>
              <th>What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>BST_NONE</strong></td>
              <td><code>0</code></td>
              <td>No succession this turn</td>
            </tr>
            <tr>
              <td><strong>BST_START</strong></td>
              <td><code>1</code></td>
              <td>A parent's blessing joins at journey start (plays BlessSuccessionCutscene, then transitions to Succession scene)</td>
            </tr>
            <tr>
              <td><strong>BST_JOIN_1</strong></td>
              <td><code>2</code></td>
              <td>First parent's blessing joins mid-journey (plays BlessJoinCutscene, unlocks deck slot)</td>
            </tr>
            <tr>
              <td><strong>BST_JOIN_2</strong></td>
              <td><code>3</code></td>
              <td>Second parent's blessing joins mid-journey (same as JOIN_1 but for second parent)</td>
            </tr>
          </tbody>
        </table>

        <div class="ss-code-label">BlessSuccessionType enum (NKM.Templets.decompiled.cs:31869)</div>
        <pre><code>public enum OBF_26539 {
    BST_NONE,     // No succession
    BST_START,    // Succession at journey start
    BST_JOIN_1,   // First ancestor joins mid-journey
    BST_JOIN_2    // Second ancestor joins mid-journey
}</code></pre>

        <h3>Battle Score Override</h3>
        <p>When a parent joins via <code>BST_JOIN_1</code> or <code>BST_JOIN_2</code>, the <strong>battle score is overridden</strong> with that parent's score. This means the journey's difficulty/power rating adjusts based on which ancestor joins.</p>

        <div class="ss-code-label">Battle score override (NKC.decompiled.cs:271268)</div>
        <pre><code>public OBF_22341 OBF_33079() {
    if (OBF_21025.OBF_27998 == null) return default;
    var ancestors = OBF_29632.OBF_3723.OBF_1860;
    switch (OBF_21025.OBF_27998.OBF_1887) {
    case BST_JOIN_1:
        // Override with ancestor 1's battle score
        return OBF_22341.OBF_13265(ancestors[0].unitId);
    case BST_JOIN_2:
        // Override with ancestor 2's battle score
        return OBF_22341.OBF_13265(ancestors[1].unitId);
    }
}</code></pre>

        <h2 id="potential-system">SE Potential System</h2>
        <p>Potentials are passive abilities that trigger during battle. Each stellar memory can have multiple potentials, which you upgrade using <strong>Potential Points (PP)</strong>.</p>

        <h3>Potential Categories</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Count</th>
              <th>ID Range</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PTC_UNIQUE</strong></td>
              <td>6</td>
              <td>11011 - 13002</td>
              <td>Character-specific passives tied to 6 specific characters via CharacterCategoryNum</td>
            </tr>
            <tr>
              <td><strong>PTC_BASIC</strong></td>
              <td>26</td>
              <td>20001 - 22010</td>
              <td>Stat passives available to all units. Tier 1 (200xx), Tier 2 (210xx), Tier 3 (220xx)</td>
            </tr>
            <tr>
              <td><strong>PTC_SPECIAL</strong></td>
              <td>145</td>
              <td>23001 - 41004</td>
              <td>Special passives: stat combos, role-specific, scenario-specific, infinite buffs</td>
            </tr>
          </tbody>
        </table>

        <h3>Role Types</h3>
        <p>Some potentials are locked to specific roles:</p>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Role Type</th>
              <th>Access</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PLR_PUBLIC</strong></td>
              <td>All units (147 potentials)</td>
              <td>Basic stat passives, generic combos</td>
            </tr>
            <tr>
              <td><strong>PLR_UNIT</strong></td>
              <td>Specific character only (6)</td>
              <td>PTC_UNIQUE character passives</td>
            </tr>
            <tr>
              <td><strong>PLR_DEFENDER</strong></td>
              <td>Defenders only</td>
              <td>30001 - 30006</td>
            </tr>
            <tr>
              <td><strong>PLR_STRIKER</strong></td>
              <td>Strikers only</td>
              <td>31001 - 31003</td>
            </tr>
            <tr>
              <td><strong>PLR_RANGER</strong></td>
              <td>Rangers only</td>
              <td>32001 - 32005</td>
            </tr>
            <tr>
              <td><strong>PLR_CASTER</strong></td>
              <td>Casters only</td>
              <td>33001 - 33003</td>
            </tr>
            <tr>
              <td><strong>PLR_ASSASSIN</strong></td>
              <td>Assassins only</td>
              <td>34001 - 34004</td>
            </tr>
            <tr>
              <td><strong>PLR_SUPPORTER</strong></td>
              <td>Supporters only</td>
              <td>35001 - 35003</td>
            </tr>
          </tbody>
        </table>

        <h3>PP Costs by Tier</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Levels</th>
              <th>PP Cost</th>
              <th>Typical Effect per Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UNIQUE</td>
              <td>1</td>
              <td>200 PP</td>
              <td>Character-specific SE trigger</td>
            </tr>
            <tr>
              <td>BASIC Tier 1</td>
              <td>5</td>
              <td>100 - 300 PP</td>
              <td>+1% to +5% rate stat</td>
            </tr>
            <tr>
              <td>BASIC Tier 2</td>
              <td>1</td>
              <td>200 PP</td>
              <td>+2% to +4% rate stat, +2 SPD</td>
            </tr>
            <tr>
              <td>BASIC Tier 3</td>
              <td>1</td>
              <td>300 PP</td>
              <td>+3% to +6% rate stat, +3 SPD, +1.5% cross/revenge</td>
            </tr>
            <tr>
              <td>SPECIAL (stat-only)</td>
              <td>1</td>
              <td>200 PP</td>
              <td>Various stat combos (ATK+SPD, HP+SPD, etc.)</td>
            </tr>
            <tr>
              <td>SPECIAL (SE-triggered)</td>
              <td>1</td>
              <td>200 PP</td>
              <td>Conditional battle effects</td>
            </tr>
            <tr>
              <td>SPECIAL (infinite)</td>
              <td>3</td>
              <td>200 PP each</td>
              <td>Battle-start permanent buffs</td>
            </tr>
          </tbody>
        </table>

        <h3>How Battle Power Calculates with Potentials</h3>
        <p>The <code>PotenBattlePowerCheck</code> flag on each potential level determines whether upgrading it increases your battle power score. Battle power is calculated as:</p>
        <pre><code>totalPotenPoint = sum of all potential levels
battlePowerMultiplier = 1.0 + totalPotenPoint * scaleFactor</code></pre>
        <p>Higher battle power affects journey difficulty scaling and succession eligibility.</p>

        <h2 id="battle-buffs">Battle Buffs from Potentials (BI_POTEN_PASSIVE)</h2>
        <p>When potentials trigger in battle, they apply buffs defined in the <code>CLIENT_BUFF_TEMPLET.json</code> table. The <strong>BI_POTEN_PASSIVE</strong> buffs (24 total, BuffID 9001-9024) share common traits:</p>
        <ul>
          <li><strong>TurnInfinite</strong> -- lasts the entire battle (permanent)</li>
          <li><strong>CanNotDispel</strong> -- cannot be removed by enemy abilities</li>
          <li><strong>IsPositive</strong> -- always a beneficial effect</li>
          <li>Most can <strong>stack</strong> via <code>IsLevel</code> + <code>BuffLevelMax</code></li>
        </ul>

        <h3>Complete BI_POTEN_PASSIVE Reference</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Buff ID</th>
              <th>Buff Name</th>
              <th>Stat</th>
              <th>Value</th>
              <th>Max Stacks</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>9001</td><td>BI_POTEN_PASSIVE_24001</td><td>DEF%</td><td>1%</td><td>5</td></tr>
            <tr><td>9002</td><td>BI_POTEN_PASSIVE_30002</td><td>DEF%</td><td>3%</td><td>5</td></tr>
            <tr><td>9003</td><td>BI_POTEN_PASSIVE_31003</td><td>Crit Rate</td><td>15%</td><td>1</td></tr>
            <tr><td>9004</td><td>BI_POTEN_PASSIVE_31001</td><td>ATK%</td><td>3%</td><td>5</td></tr>
            <tr><td>9005</td><td>BI_POTEN_PASSIVE_31002</td><td>Evasion%</td><td>3%</td><td>5</td></tr>
            <tr><td>9006</td><td>BI_POTEN_PASSIVE_32001</td><td>Skill ATK%</td><td>15%</td><td>1</td></tr>
            <tr><td>9007</td><td>BI_POTEN_PASSIVE_33001</td><td>Crit DMG</td><td>10%</td><td>3</td></tr>
            <tr><td>9008</td><td>BI_POTEN_PASSIVE_34001</td><td>Crit Rate</td><td>5%</td><td>3</td></tr>
            <tr><td>9009</td><td>BI_POTEN_PASSIVE_34002</td><td>SPD (flat)</td><td>+10</td><td>3</td></tr>
            <tr><td>9010</td><td>BI_POTEN_PASSIVE_35002</td><td>Heal%</td><td>3%</td><td>5</td></tr>
            <tr><td>9011</td><td>BI_POTEN_PASSIVE_35003</td><td>SPD (flat)</td><td>+3</td><td>5</td></tr>
            <tr><td>9012</td><td>BI_POTEN_PASSIVE_110111</td><td>Revenge ATK</td><td>100%</td><td>1*</td></tr>
            <tr><td>9013</td><td>BI_POTEN_PASSIVE_110112</td><td>(marker)</td><td>--</td><td>--</td></tr>
            <tr><td>9014</td><td>BI_POTEN_PASSIVE_25002</td><td>Special Skill%</td><td>5%</td><td>5</td></tr>
            <tr><td>9015</td><td>BI_POTEN_PASSIVE_32003</td><td>SPD (flat)</td><td>+5</td><td>3</td></tr>
            <tr><td>9016</td><td>BI_POTEN_PASSIVE_32004</td><td>Crit Rate</td><td>5%</td><td>5</td></tr>
            <tr><td>9017</td><td>BI_POTEN_PASSIVE_34003</td><td>ATK%</td><td>5%</td><td>3</td></tr>
            <tr><td>9018</td><td>BI_POTEN_PASSIVE_25003</td><td>Evasion%</td><td>5%</td><td>6</td></tr>
            <tr><td>9019</td><td>BI_POTEN_PASSIVE_400011</td><td>ATK%</td><td>8%</td><td>5</td></tr>
            <tr><td>9020</td><td>BI_POTEN_PASSIVE_402011</td><td>DEF%</td><td>10%</td><td>5</td></tr>
            <tr><td>9021</td><td>BI_POTEN_PASSIVE_404011</td><td>(unused)</td><td>--</td><td>--</td></tr>
            <tr><td>9022</td><td>BI_POTEN_PASSIVE_405011</td><td>Damage Up%</td><td>25%</td><td>1</td></tr>
            <tr><td>9023</td><td>BI_POTEN_PASSIVE_407011</td><td>AddDamage</td><td>proc</td><td>1</td></tr>
            <tr><td>9024</td><td>BI_POTEN_PASSIVE_32005</td><td>Crit Rate</td><td>3%</td><td>5</td></tr>
          </tbody>
        </table>
        <p><small>* Buff 9012 (Revenge ATK 100%) has a <code>DispelCondition: DC_ATTACK</code> -- it is removed when the unit is attacked.</small></p>

        <h2 id="se-triggers">SE Trigger Mechanics</h2>
        <p>Potential effects are defined in <code>CLIENT_SE_TEMPLET_POTEN.json</code>. Each entry specifies <strong>when</strong> and <strong>how</strong> the buff activates:</p>

        <h3>Activation Conditions</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Condition</th>
              <th>Trigger Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>NSEAT_BATTLE_START</code></td><td>At the start of battle (before any turns)</td></tr>
            <tr><td><code>NSEAT_TURN_START</code></td><td>At the beginning of the unit's turn</td></tr>
            <tr><td><code>NSEAT_TURN_END</code></td><td>At the end of the unit's turn</td></tr>
            <tr><td><code>NSEAT_SKILL_START</code></td><td>When the unit uses a skill</td></tr>
            <tr><td><code>NSEAT_SKILL_END</code></td><td>After the unit's skill resolves</td></tr>
            <tr><td><code>NSEAT_DAMAGE_START</code></td><td>When dealing damage</td></tr>
            <tr><td><code>NSEAT_DAMAGE_END</code></td><td>After dealing damage</td></tr>
            <tr><td><code>NSEAT_HIT</code></td><td>When hitting a target</td></tr>
          </tbody>
        </table>

        <h3>Notable Patterns</h3>
        <ul>
          <li><strong>Pair buffs</strong>: Some potentials come in pairs where one applies a buff and another removes it. For example, buff 3100301 grants a bonus at skill start, and 3100302 removes it at turn end -- creating a conditional effect.</li>
          <li><strong>Crit counters</strong>: Some potentials trigger after a specific number of critical hits (e.g., ranger potential 3200501 triggers after 5 crits).</li>
          <li><strong>Infinite buffs</strong>: Special potentials use <code>_INFINITE</code> buff names that last the entire battle. These come in 3 intensity levels (200 PP each).</li>
          <li><strong>Debuff removal</strong>: Some potentials use <code>DeleteSpecificBuffStrId</code> to remove specific buffs when they expire.</li>
        </ul>

        <h2 id="stat-blessings">Stat Blessings (Inheritance)</h2>
        <p>Separate from SE Potentials, the <strong>Stat Blessing</strong> system (<code>CLIENT_STAT_POTENTIAL_TEMPLET.json</code>) handles flat stat inheritance. There are <strong>45 entries</strong> covering 5 stats across 3 difficulty tiers and 3 levels each:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Stat Values (Level 1/2/3)</th>
              <th>CanSuccessionRatio (Lv1/Lv2/Lv3)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Easy</strong></td><td>10 / 15 / 20 flat</td><td>30% / 18% / 12%</td></tr>
            <tr><td><strong>Normal</strong></td><td>25 / 30 / 35 flat</td><td>30% / 18% / 12%</td></tr>
            <tr><td><strong>Hard</strong></td><td>40 / 45 / 50 flat</td><td>12% / 8% / 4%</td></tr>
          </tbody>
        </table>

        <p>The <strong>CanSuccessionRatio</strong> is in basis points (divide by 100 for percentage). It determines the probability that a stat blessing is inherited from a parent stellar memory. Hard tier blessings are much less likely to pass down (4-12%) compared to Easy/Normal (12-30%).</p>

        <p>The inheritance formula is:</p>
        <pre><code>InheritedStat = BaseStat + floor(RawValue * ParentStatBlessApplyRatio)</code></pre>

        <h2 id="rarity-groups">Blessing Rarity Groups</h2>
        <p>The server categorizes blessings into <strong>4 rarity groups</strong>, defined in two templet tables:</p>

        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>ID</th>
              <th>Poten-to-Bless Name</th>
              <th>Succession Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>LOW</strong></td><td>2</td><td>LOW_SE_PotenRarity</td><td>LOW_BlessRarity</td></tr>
            <tr><td><strong>HIGH</strong></td><td>3</td><td>HIGH_SE_PotenRarity</td><td>HIGH_BlessRarity</td></tr>
            <tr><td><strong>MID</strong></td><td>4</td><td>MID_SE_PotenRarity</td><td>MID_BlessRarity</td></tr>
            <tr><td><strong>ZERO</strong></td><td>5</td><td>ZERO_SE_PotenRarity</td><td>ZERO_BlessRarity</td></tr>
          </tbody>
        </table>

        <p>Each group covers PotenLv 1-5 with <code>JourneyScoreWeight: 10000</code>. All groups contribute equally to journey scoring. The actual assignment of which PotenId belongs to which group is <strong>server-side only</strong> -- the client never has this mapping.</p>

        <blockquote><p><strong>Important limitation:</strong> The exact algorithm the server uses to select which rarity group a blessing falls into, and which specific blessing you receive, is <strong>not present in any client-side code</strong>. The client only receives the result and renders cutscenes/popups. This is the one part of the system we cannot verify from decompiled code alone.</p></blockquote>

        <h2 id="server-flow">Full Journey Blessing Flow (End to End)</h2>
        <p>Here is the complete flow from journey start to battle:</p>

        <ol>
          <li><strong>Select 2 Stellar Memories</strong> at the journey start screen</li>
          <li><strong>Server assigns</strong> blessings, succession events, and deck slots via <code>OBF_20694</code> response packet</li>
          <li><strong>BST_START succession</strong> (if applicable): Plays BlessSuccessionCutscene, transitions to Succession scene. One parent's blessing joins the deck at journey start.</li>
          <li><strong>Player progresses</strong> through journey turns (training, battles, trading, resting)</li>
          <li><strong>BST_JOIN_1/JOIN_2 succession</strong> (if configured for this turn): Plays BlessJoinCutscene, shows BlessJoin popup with unlock animation. Parent's blessing is added to the 4-slot deck.</li>
          <li><strong>Battle score overrides</strong> to the joining parent's score when BST_JOIN triggers</li>
          <li><strong>Potentials activate</strong> in battle based on their SE trigger conditions (battle start, turn start/end, skill use, damage dealt, etc.)</li>
          <li><strong>BI_POTEN_PASSIVE buffs</strong> are applied as permanent (TurnInfinite), undispellable stat bonuses</li>
        </ol>

        <h2 id="practical-tips">Practical Tips</h2>
        <ul>
          <li><strong>Prioritize PTC_SPECIAL potentials</strong> for your main DPS units -- they offer the strongest battle effects (25% Damage Up, 15% Skill ATK, etc.)</li>
          <li><strong>Stack Crit Rate potentials</strong> if you have multiple Crit Rate buffs (3%, 5%, 15% available) -- they stack via BuffLevelMax</li>
          <li><strong>Speed is king</strong> -- flat SPD potentials (+3, +5, +10) are rare and extremely valuable since SPD is not reduced by PvP scaling</li>
          <li><strong>Hard tier stat blessings</strong> have much lower inheritance rates (4-12%) -- don't rely on them passing down</li>
          <li><strong>Battle Power matters</strong> -- potentials flagged with <code>PotenBattlePowerCheck: true</code> increase your score, which affects journey difficulty and succession eligibility</li>
          <li><strong>Role-locked potentials</strong> (Defender, Striker, etc.) can only appear on units of that role -- factor this into your stellar memory selection</li>
          <li><strong>The "Gene" button</strong> at journey start shows parent blessing info -- use it to plan which ancestors to bring for specific blessing types</li>
        </ul>

        <h2 id="sources">Source Code References</h2>
        <ul>
          <li><strong>Star.Templets.decompiled.cs</strong> -- NKCJourneyTurnTemplet (line 18736-18739), NKMStatPotenTemplet (line 21912-21934)</li>
          <li><strong>NKM.Templets.decompiled.cs</strong> -- BlessSuccessionType enum (line 31869-31875)</li>
          <li><strong>NKC.decompiled.cs</strong> -- NKCSubPageStellarMemorySelector (line 159879), BlessJoin popup (line 141564), cutscene player (line 99902), battle score override (line 271268), deck initialization (line 272334)</li>
          <li><strong>CLIENT_SE_POTENTIAL_TEMPLET.json</strong> -- 177 potential definitions</li>
          <li><strong>CLIENT_SE_TEMPLET_POTEN.json</strong> -- SE battle trigger definitions</li>
          <li><strong>CLIENT_POTENTIAL_LEVEL_GROUP_TEMPLET.json</strong> -- Level scaling data (209 groups)</li>
          <li><strong>CLIENT_BUFF_TEMPLET.json</strong> -- 24 BI_POTEN_PASSIVE buff definitions (BuffID 9001-9024)</li>
          <li><strong>CLIENT_STAT_POTENTIAL_TEMPLET.json</strong> -- 45 stat blessing entries with CanSuccessionRatio</li>
          <li><strong>CLIENT_POTEN_TO_BLESS_TEMPLET.json</strong> -- Rarity group mappings (20 entries)</li>
          <li><strong>CLIENT_BLESS_SUCCESSION_TEMPLET.json</strong> -- Succession group mappings (20 entries)</li>
        </ul>
        <p>Full decompiled and deobfuscated source: <strong>github.com/boring877/star-savior-decompiled</strong></p>
      `,
    },
    {
      slug: 'journey-system-complete-guide',
      title: 'Journey System Complete Guide: Training, Rest, Shop & Optimal Path',
      description:
        'Full breakdown of the 46-turn Stellar Memory journey system: training stat gains, condition/stamina mechanics, rest options, shop items, battle rewards, and optimal path to SSS grade -- all verified from decompiled game code and templet data.',
      author: 'Boring877',
      publishDate: '2026-03-31',
      category: 'Guide',
      tags: ['advanced', 'journey', 'stellar-memory', 'training', 'optimization', 'theorycraft'],
      content: `
        <p>The <strong>Journey</strong> (Stellar Memory) is a 46-turn schedule system where you train units, fight battles, buy items, and rest between adventures. Your choices determine the final <strong>journey grade</strong> (G to SSS) and the quality of the stellar memory you create. This guide breaks down every option and its exact numerical outcome so you can plan the optimal path.</p>

        <h2 id="journey-overview">Journey Structure</h2>
        <p>A journey has <strong>46 turns</strong> across <strong>4 towns</strong>, visited in order. Each turn you pick one activity (Train, Battle, or Rest). Boss turns force a battle and open a shop.</p>

        <h3>The 7 Evaluation Bosses</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Turn</th>
              <th>Boss Name</th>
              <th>Town</th>
              <th>Also Raid?</th>
              <th>Shop</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>T7</strong></td><td>Basic Evaluation</td><td>Noa</td><td>No</td><td>Shop 101</td></tr>
            <tr><td><strong>T14</strong></td><td>Raid Evaluation</td><td>Noa</td><td>No</td><td>Shop 101</td></tr>
            <tr><td><strong>T22</strong></td><td>Expedition Evaluation</td><td>Aganon</td><td>Yes</td><td>Shop 201</td></tr>
            <tr><td><strong>T29</strong></td><td>Competition Evaluation</td><td>Noa</td><td>No</td><td>Shop 2901</td></tr>
            <tr><td><strong>T37</strong></td><td>Void Evaluation</td><td>Flora/Kalaid</td><td>Yes</td><td>Shop 301/401</td></tr>
            <tr><td><strong>T41</strong></td><td>Void Evaluation</td><td>Noa</td><td>No</td><td>Shop 4101</td></tr>
            <tr><td><strong>T45</strong></td><td>Final Evaluation (Final Trial)</td><td>Noa</td><td>No</td><td>Shop 4501</td></tr>
          </tbody>
        </table>

        <p>Battle IDs: Easy = 110101-110106, Normal = 120101-120106, Hard = 130101-130106. Each difficulty has the same 6 evaluation types with different difficulty scaling.</p>

        <h3>Town Progression</h3>
        <table class="ss-blog-table">
          <thead>
            <tr>
              <th>Town</th>
              <th>Turns</th>
              <th>Boss Battles</th>
              <th>Training Group</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Noa</strong> (Starting Area)</td><td>1-14</td><td>T7 Basic, T14 Raid</td><td>2011/3011/4011</td></tr>
            <tr><td><strong>Aganon</strong></td><td>15-22</td><td>T22 Expedition</td><td>2111/3111/4111</td></tr>
            <tr><td><strong>Flora / Kalaid</strong></td><td>30-37</td><td>T37 Void</td><td>2121/3121 or 2131/3131</td></tr>
            <tr><td><strong>Noa</strong> (Return)</td><td>38-46</td><td>T41 Void, T45 Final Trial</td><td>Same as start</td></tr>
          </tbody>
        </table>

        <p><small>Note: Town transitions happen at T15 (move to Aganon) and T30 (move to Flora/Kalaid). During these turns, no activities are available -- just a cutscene.</small></p>

        <h3>Starting Resources</h3>
        <table class="ss-blog-table">
          <thead><tr><th>Resource</th><th>Easy</th><th>Normal</th><th>Hard</th></tr></thead>
          <tbody>
            <tr><td>Stamina</td><td>100</td><td>100</td><td>100</td></tr>
            <tr><td>Coins</td><td>30</td><td>30</td><td>30</td></tr>
            <tr><td>Condition</td><td>3 (Good)</td><td>3 (Good)</td><td>3 (Good)</td></tr>
            <tr><td>Journey Stat Cap</td><td>500</td><td>750</td><td>1250</td></tr>
            <tr><td>PP Scale</td><td>100%</td><td>150%</td><td>250%</td></tr>
          </tbody>
        </table>

        <h2 id="condition-stamina">Condition and Stamina -- Hidden Battle Modifiers</h2>
        <p>Two resources have <strong>direct battle effects</strong> that persist throughout the journey and cannot be dispelled in combat:</p>

        <h3>Condition (Turn Speed Modifier)</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Condition</th><th>Battle Effect</th><th>Buff ID</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>1 (Worst)</strong></td><td>Turn Speed -10%</td><td>BI_CONDITION_WORST</td></tr>
            <tr><td><strong>2 (Bad)</strong></td><td>Turn Speed -5%</td><td>BI_CONDITION_BAD</td></tr>
            <tr><td><strong>3 (Neutral)</strong></td><td>No effect</td><td>--</td></tr>
            <tr><td><strong>4 (Good)</strong></td><td>Turn Speed +5%</td><td>BI_CONDITION_GOOD</td></tr>
            <tr><td><strong>5 (Best)</strong></td><td>Turn Speed +10%</td><td>BI_CONDITION_BEST</td></tr>
          </tbody>
        </table>

        <h3>Stamina (HP Modifier)</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Stamina</th><th>Battle Effect</th><th>Buff ID</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>0-30</strong></td><td>HP -20%</td><td>BI_STAMINA_WORST</td></tr>
            <tr><td><strong>31-50</strong></td><td>HP -10%</td><td>BI_STAMINA_BAD</td></tr>
            <tr><td><strong>50-70</strong></td><td>HP +10%</td><td>BI_STAMINA_NORMAL</td></tr>
            <tr><td><strong>71-90</strong></td><td>HP +20%</td><td>BI_STAMINA_GOOD</td></tr>
            <tr><td><strong>90-100</strong></td><td>HP +30%</td><td>BI_STAMINA_BEST</td></tr>
          </tbody>
        </table>

        <blockquote><p><strong>Key insight:</strong> Keeping stamina above 90 and condition at 4-5 gives you <strong>+30% HP and +10% SPD</strong> in every battle. This is massive. Always rest before boss fights.</p></blockquote>

        <h2 id="training">Training -- Stat Gains and Stamina Efficiency</h2>
        <p>Training costs stamina and grants <strong>Journey Stats</strong> + <strong>Potential Points (PP)</strong>. There are 5 training types, each with 10 levels:</p>

        <h3>Grade 1 Training (Noa Area, TrainingIds 2001-2005)</h3>

        <h4>Power Training (2001)</h4>
        <table class="ss-blog-table">
          <thead><tr><th>Lv</th><th>Stamina Cost</th><th>PP</th><th>Power</th><th>Endurance</th><th>Health</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>30</td><td>8</td><td>15</td><td>6</td><td>6</td></tr>
            <tr><td>5</td><td>38</td><td>16</td><td>36</td><td>16</td><td>16</td></tr>
            <tr><td>10</td><td>44</td><td>22</td><td>41</td><td>21</td><td>21</td></tr>
          </tbody>
        </table>
        <p><small>Net stamina for all 10 levels: <strong>-400</strong> | Total: 334 Power, 171 End, 171 HP, 160 PP | Failure: +5 Power guaranteed</small></p>

        <h4>Health Training (2002)</h4>
        <p>Identical structure to Power, swaps primary stat. Net stamina: <strong>-400</strong> | Total: 334 Health, 171 End, 171 Power, 160 PP</p>

        <h4>Endurance Training (2003)</h4>
        <p>Similar but slightly lower primary (38 at Lv10 vs 41). Net stamina: <strong>-400</strong> | Total: 294 Endurance, 171 HP, 171 Power, 160 PP</p>

        <h4>Focus Training (2004) -- Stamina Efficient!</h4>
        <table class="ss-blog-table">
          <thead><tr><th>Lv</th><th>Stamina Cost</th><th>Stamina Return</th><th>Net Cost</th><th>PP</th><th>Focus</th><th>Power</th><th>Endurance</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>24</td><td>16</td><td>8</td><td>8</td><td>12</td><td>4</td><td>4</td></tr>
            <tr><td>5</td><td>32</td><td>24</td><td>8</td><td>16</td><td>33</td><td>14</td><td>14</td></tr>
            <tr><td>10</td><td>37</td><td>29</td><td>8</td><td>22</td><td>38</td><td>19</td><td>19</td></tr>
          </tbody>
        </table>
        <p><small>Net stamina for all 10 levels: <strong>-55</strong> (87% cheaper!) | Total: 284 Focus, 125 Power, 125 End, 160 PP</small></p>

        <h4>Protect Training (2005) -- Stamina Efficient!</h4>
        <p>Same cost structure as Focus. Net stamina: <strong>-55</strong> | Total: 295 Protect, 125 HP, 125 End, 160 PP</p>

        <div class="ss-chart">
          <div class="ss-chart-title">Net Stamina Cost for All 10 Training Levels</div>
          <div class="ss-chart-bars">
            <div class="ss-chart-bar-row">
              <div class="ss-chart-bar-label">Power</div>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--red" style="width:100%">400</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <div class="ss-chart-bar-label">Health</div>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--green" style="width:100%">400</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <div class="ss-chart-bar-label">Endurance</div>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--blue" style="width:100%">400</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <div class="ss-chart-bar-label">Focus</div>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--gold" style="width:13.75%">55</div></div>
            </div>
            <div class="ss-chart-bar-row">
              <div class="ss-chart-bar-label">Protect</div>
              <div class="ss-chart-bar-track"><div class="ss-chart-bar ss-chart-bar--teal" style="width:13.75%">55</div></div>
            </div>
          </div>
        </div>

        <h3>Training-Affecting Buffs</h3>
        <p>Various events can buff or debuff your training success rate and stat gains:</p>
        <table class="ss-blog-table">
          <thead><tr><th>Buff</th><th>Effect</th><th>Duration</th></tr></thead>
          <tbody>
            <tr><td>SWEET_TASTE (story)</td><td>+30% success rate</td><td>5 turns</td></tr>
            <tr><td>TRAINING_AWAKEN</td><td>+5% success rate</td><td>3 turns</td></tr>
            <tr><td>WEATHER_GOOD_WIND</td><td>+10% success rate</td><td>3 turns</td></tr>
            <tr><td>ITEM_DRUNKEN (shop)</td><td>-20% success rate</td><td>5 turns</td></tr>
            <tr><td>CHEER_FAILURE</td><td>-5% success rate</td><td>5 turns</td></tr>
            <tr><td>UNIQUE_INDOMITABLE_SPIRIT</td><td>+20% Endurance gains</td><td>3 turns</td></tr>
            <tr><td>ITEM_SWEET (permanent)</td><td>+20% Focus gains</td><td>Permanent</td></tr>
            <tr><td>ITEM_SOUR (permanent)</td><td>+20% Protect gains</td><td>Permanent</td></tr>
            <tr><td>LEGEND_SAVIOR_PP</td><td>+20% PP from training</td><td>3 turns</td></tr>
          </tbody>
        </table>

        <h2 id="rest">Rest Options</h2>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Option</th><th>Cost</th><th>Stamina</th><th>Condition</th><th>Special</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Homeless</strong></td><td>0 coins</td><td>+30</td><td>--</td><td>Rare negative buff chance</td></tr>
            <tr><td><strong>Home</strong></td><td>30 coins</td><td>+30 to +50</td><td>+1 to +2</td><td>Success/Great Success events</td></tr>
            <tr><td><strong>Meditation (Noa)</strong></td><td>60 coins</td><td>+60 to +80</td><td>--</td><td>Always positive buff, rarely removes negative buff</td></tr>
            <tr><td><strong>Meditation (Aganon)</strong></td><td>60 coins</td><td>+60 to +80</td><td>--</td><td>+10 to +20 Endurance, rarely removes negative buff</td></tr>
            <tr><td><strong>Meditation (Flora)</strong></td><td>60 coins</td><td>+60 to +80</td><td>--</td><td>+10 to +20 Power, rarely removes negative buff</td></tr>
            <tr><td><strong>Meditation (Kalaid)</strong></td><td>60 coins</td><td>+60 to +80</td><td>--</td><td>+10 to +20 Health, rarely removes negative buff</td></tr>
          </tbody>
        </table>

        <blockquote><p><strong>Pro tip:</strong> Meditation at Flora/Kalaid/Aganon gives <strong>free stats</strong> on top of stamina recovery. Save your 60-coin meditations for these towns.</p></blockquote>

        <h2 id="shop">Shop (Trade) Items</h2>
        <p>Shops open on <strong>7 boss turns</strong> (T7, T14, T22, T29, T37, T41, T45). You can pay 30 coins to <strong>reroll</strong> the shop. All items have a limit of 1 purchase each.</p>

        <h3>Best Value Items</h3>
        <table class="ss-blog-table">
          <thead>
            <tr><th>Item</th><th>Cost</th><th>Effect</th><th>Efficiency</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>ORANGE_JUICE</strong></td><td>50</td><td>Power +25</td><td>0.50/coin</td></tr>
            <tr><td><strong>APPLE_JUICE</strong></td><td>50</td><td>Health +25</td><td>0.50/coin</td></tr>
            <tr><td><strong>PARFAIT</strong></td><td>60</td><td>Stamina +15, Power +15</td><td>0.50/coin</td></tr>
            <tr><td><strong>TAKOYAKI</strong></td><td>60</td><td>Stamina +15, Health +15</td><td>0.50/coin</td></tr>
            <tr><td><strong>WATERMELON</strong></td><td>50</td><td>Power +18</td><td>0.36/coin</td></tr>
            <tr><td><strong>STRAWBERRY</strong></td><td>50</td><td>Health +18</td><td>0.36/coin</td></tr>
            <tr><td><strong>Legendary stat food</strong></td><td>60-80</td><td>+36 single stat</td><td>0.45-0.60/coin</td></tr>
            <tr><td><strong>SOFT_CAKE</strong></td><td>30</td><td>PP +30</td><td>1.0 PP/coin</td></tr>
            <tr><td><strong>Training Book (Legendary)</strong></td><td>60</td><td>Training EXP +2500</td><td>41.7 exp/coin</td></tr>
            <tr><td><strong>COFFEE</strong></td><td>20</td><td>PP +20</td><td>1.0 PP/coin</td></tr>
            <tr><td><strong>FRESH_MILK</strong></td><td>30</td><td>Condition +2</td><td>0.067/coin</td></tr>
          </tbody>
        </table>

        <h3>PP Items (for Potential investment)</h3>
        <table class="ss-blog-table">
          <thead><tr><th>Item</th><th>Cost</th><th>PP</th><th>Bonus</th></tr></thead>
          <tbody>
            <tr><td>SWEET_CAKE (Rare)</td><td>15</td><td>+10</td><td>--</td></tr>
            <tr><td>COFFEE (Unique)</td><td>20</td><td>+20</td><td>--</td></tr>
            <tr><td>SOFT_CAKE (Unique)</td><td>30</td><td>+30</td><td>--</td></tr>
            <tr><td>COCA (Legendary)</td><td>20</td><td>+20</td><td>Focus +10</td></tr>
            <tr><td>GREEN_TEA (Legendary)</td><td>20</td><td>+20</td><td>Protect +10</td></tr>
          </tbody>
        </table>

        <h2 id="battle-rewards">Battle Rewards</h2>
        <p>Battles grant coins (50-200 range) but very little PP. The main value of battles is progressing through the journey to unlock more shops and new towns.</p>

        <ul>
          <li><strong>Normal battles</strong>: 50-150 coins, 0 PP</li>
          <li><strong>Boss battles</strong>: 100-200 coins, 0 PP + shop access</li>
          <li><strong>Raid battles</strong>: Higher coin rewards, embedded in normal turns (T6, T13, T22, T28, T37)</li>
          <li><strong>Mission bonuses</strong>: Extra 5 coins per completion tier (turn limit missions)</li>
        </ul>

        <h2 id="scoring">Journey Scoring and Grades</h2>
        <p>Your journey grade is determined by <strong>Journey Score</strong>, calculated from stats, training, and other factors.</p>

        <table class="ss-blog-table">
          <thead><tr><th>Grade</th><th>Score Required</th><th>DeleteReward Value</th></tr></thead>
          <tbody>
            <tr><td>G</td><td>0</td><td>10</td></tr>
            <tr><td>F</td><td>600</td><td>30</td></tr>
            <tr><td>E</td><td>1300</td><td>60</td></tr>
            <tr><td>D</td><td>2200</td><td>100</td></tr>
            <tr><td>C</td><td>3200</td><td>150</td></tr>
            <tr><td>B</td><td>4300</td><td>200</td></tr>
            <tr><td>A</td><td>5500</td><td>250</td></tr>
            <tr><td>SG</td><td>6800</td><td>310</td></tr>
            <tr><td>SB</td><td>8200</td><td>380</td></tr>
            <tr><td>SA</td><td>9700</td><td>460</td></tr>
            <tr><td>SSG</td><td>11300</td><td>550</td></tr>
            <tr><td>SSB</td><td>12500</td><td>700</td></tr>
            <tr><td>SSA</td><td>14200</td><td>1110</td></tr>
            <tr><td><strong>SSS</strong></td><td><strong>14600</strong></td><td><strong>1230</strong></td></tr>
          </tbody>
        </table>

        <h3>Milestone Rewards (Group 1)</h3>
        <table class="ss-blog-table">
          <thead><tr><th>Score</th><th>Reward</th></tr></thead>
          <tbody>
            <tr><td>1,000</td><td>50,000 gold</td></tr>
            <tr><td>2,000</td><td>50x item 33000011</td></tr>
            <tr><td>3,000</td><td>1x item 301</td></tr>
            <tr><td>4,000</td><td>200x item 103</td></tr>
            <tr><td>5,000</td><td>1x item 207</td></tr>
          </tbody>
        </table>

        <h2 id="optimal-path">Optimal Journey Strategy</h2>

        <h3>Resource Management Priorities</h3>
        <ol>
          <li><strong>Keep Stamina above 90</strong> for the +30% HP battle buff. This is your #1 priority -- a boss fight at low stamina means -20% HP.</li>
          <li><strong>Keep Condition at 4-5</strong> for the +5-10% SPD battle buff. Rest at Home (30 coins, +1-2 condition) when it drops.</li>
          <li><strong>Maximize training actions</strong> -- every normal turn should be a training unless you desperately need rest or coins.</li>
        </ol>

        <h3>Training Priority</h3>
        <ol>
          <li><strong>Power and Health are your main stats</strong> -- they directly contribute to ATK and HP, the most impactful combat stats for journey scoring and battles.</li>
          <li><strong>Focus and Protect are cheap secondary stats</strong> -- they cost only 55 net stamina for all 10 levels (vs 400 for Power/Health/Endurance), so they are worth picking up early as a filler when you have spare stamina. However, their per-level gains are lower and they benefit less from training upgrades, so they should not replace Power/Health as your primary focus.</li>
          <li><strong>Train when buffed</strong> -- save expensive Power/Health/Endurance trainings for turns when you have success rate buffs (+30% from SWEET_TASTE, etc.).</li>
          <li><strong>Use training books from shop</strong> to accelerate training level ups, which unlocks higher stat gains faster.</li>
        </ol>

        <h3>Shop Strategy</h3>
        <ol>
          <li><strong>Buy PP items first</strong> (COFFEE 20c, SOFT_CAKE 30c) -- PP directly affects battle power and blessing quality.</li>
          <li><strong>Buy training books</strong> (30-60 coins) to speed up training progression.</li>
          <li><strong>Buy COCA/GREEN_TEA</strong> (20 coins each) for PP + stat bonus -- best value legendary items.</li>
          <li><strong>Buy legendary stat food</strong> (60-80 coins) for your primary stats only.</li>
          <li><strong>Reroll shops</strong> (30 coins) only if you have excess coins and see no useful items.</li>
        </ol>

        <h3>Rest Strategy</h3>
        <ol>
          <li><strong>Homeless</strong> (free, +30 stamina) when broke and need stamina for a boss fight.</li>
          <li><strong>Home</strong> (30 coins, +30-50 stam, +1-2 condition) as your default rest option.</li>
          <li><strong>Meditation at Aganon/Flora/Kalaid</strong> (60 coins, +60-80 stam, +10-20 free stat) when you can afford it -- the free stats make it worth the premium.</li>
        </ol>

        <h3>Turn-by-Turn Template</h3>
        <pre><code>Normal turns:  Train (Power/Health preferred) unless stamina &lt; 90 or condition &lt; 4
Boss turns:    Battle -> Shop (buy PP items, training books)
Move turns:    Watch cutscene
Before boss:   Rest to 90+ stamina and 4+ condition
Ending turn:   One last training if possible</code></pre>

        <h3>Difficulty Comparison</h3>
        <table class="ss-blog-table">
          <thead><tr><th>Aspect</th><th>Easy</th><th>Normal</th><th>Hard</th></tr></thead>
          <tbody>
            <tr><td>Stat Cap</td><td>500</td><td>750</td><td>1250</td></tr>
            <tr><td>PP Scale</td><td>100%</td><td>150%</td><td>250%</td></tr>
            <tr><td>Training Groups</td><td>2011x (base)</td><td>3011x (enhanced)</td><td>4011x (max)</td></tr>
            <tr><td>Unlock Requirement</td><td>Always</td><td>Beat battle 11008040</td><td>Beat battle 11018060</td></tr>
            <tr><td>Recommended Resonance</td><td>--</td><td>4</td><td>8</td></tr>
          </tbody>
        </table>

        <blockquote><p><strong>Bottom line:</strong> Hard mode gives 2.5x PP and 2.5x the stat cap, making it the clear choice for maximizing stellar memory quality -- if your team can handle the harder battles.</p></blockquote>

        <p>For a complete database of all journey event choices with exact reward outcomes, see the <a href="/guides/star-savior/journey/events/">Journey Event Choices</a> page.</p>

        <h2 id="sources">Source Code References</h2>
        <ul>
          <li><strong>CLIENT_JOURNEY_SCENARIO_TEMPLET.json</strong> -- 4 scenarios with stat caps, PP scales, starting resources</li>
          <li><strong>CLIENT_JOURNEY_TURN_TEMPLET.json</strong> -- 316 entries, 46-turn journey structure per scenario</li>
          <li><strong>CLIENT_JOURNEY_TRAINING_TEMPLET.json</strong> -- 690 entries, 69 trainings x 10 levels with exact stat gains</li>
          <li><strong>CLIENT_JOURNEY_REST_TEMPLET.json</strong> -- 15 entries, 3 rest types per town</li>
          <li><strong>CLIENT_JOURNEY_TRADE_TEMPLET.json</strong> -- 214 shop items with costs and effects</li>
          <li><strong>CLIENT_BATTLE_TEMPLET_JOURNEY.json</strong> -- 53 battles with coin/PP rewards</li>
          <li><strong>CLIENT_JOURNEY_CONDITION_TEMPLET.json</strong> -- Condition = Turn Speed modifier (-10% to +10%)</li>
          <li><strong>CLIENT_JOURNEY_STAMINA_BUFF_TEMPLET.json</strong> -- Stamina = HP modifier (-20% to +30%)</li>
          <li><strong>CLIENT_JOURNEY_GRADE_TEMPLET.json</strong> -- 43 grade thresholds (G to SSS)</li>
          <li><strong>CLIENT_JOURNEY_BUFF_TEMPLET.json</strong> -- Training/feel/weather buffs affecting outcomes</li>
          <li><strong>NKC.decompiled.cs</strong> -- Training flow (line 143641), Rest flow (line 145564), Shop flow (line 144120), Battle flow (line 143222)</li>
          <li><strong>Star.Templets.decompiled.cs</strong> -- NKCJourneyTurnTemplet (line 18665), NKCJourneyTrainingLevelTemplet (line 18220), NKCJourneyRestChoiceTemplet (line 17118)</li>
        </ul>
        <p>Full decompiled and deobfuscated source: <strong>github.com/boring877/star-savior-decompiled</strong></p>
      `,
    },

  ],
};

export const getPostBySlug = slug => {
  return blogConfig.posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return blogConfig.posts;
};

export const getPostsByCategory = category => {
  return blogConfig.posts.filter(post => post.category === category);
};

export const getPostsByTag = tag => {
  return blogConfig.posts.filter(post => post.tags.includes(tag));
};
