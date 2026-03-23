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
