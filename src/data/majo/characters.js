// MAJO: Witches Night character roster (26 launch witches).
// Source: live game data pulled from BlueStacks (com.pinkcore.majo.erolabs) via ADB.
// Names/titles/descriptions/skills: Localization/all.*.data (I2 Localization, msgpack
//   format) decoded in D:/Majo/localization_dump.json - zh-Hans primary, en secondary.
// Skill detailEn/detailZh = the in-game skill-detail text with damage formulas
//   ({DAMAGE:damageAdjust+N}%) and buff/debuff effect values.
// Rarity+class: CharacterAwaken localization keys + CharacterConfig MonoBehaviours
//   in assets/data/character_assets.ab (class enum Healer=0 Mage=1 Fighter=2 Tank=3,
//   verified 100% against the 25 awaken-keyed characters; P0038 rarity UR from the
//   event banner description (UR rate-up listing Dayu/Macak).
// Art: character_images_mid.ab / character_images_small.ab Texture2D exports.
//   7 witches (P0001/3/6/9/14/15/38) ship ONLY Awaken art in the game - they use
//   the Awaken figure for icon/image (authentic game art).
// Icons: icons/ = in-game rarity/class badges, skills/ = per-skill icons.

export const majoCharacters = [
  {
    id: 'P0001',
    slug: 'xuanji',
    nameZh: "旋姬",
    nameEn: "Xuanji",
    nameJa: "シェンジ",
    titleZh: "永夜幻莺",
    titleEn: "Eternal Night Illusion",
    rarity: 'SSR',
    cls: 'Mage',
    icon: 'P0001_Awaken_figure_s.png',
    image: 'P0001_Awaken_figure_m.png',
    awakenImage: 'P0001_Awaken_figure_m.png',
    descriptionZh: "文静、优雅、有气质，说话语气柔和，不太有明显的情绪起伏，有着浓厚的神秘感，让人猜不透她真正的心思，习惯操纵人心。其实本质上是柔弱、敏感且细腻的，但倾向隐藏自己真正的情绪，并用平静的外表与似是而非的话术武装起来。\n\n基于某些原因，对道德与对错的观念与常人不同，会平淡地说出有点惊人的内容。\n\n有严重的失眠问题。",
    descriptionEn: "Quiet, elegant, and refined, she speaks with a gentle tone and doesn't have obvious emotional fluctuations. She has a thick air of mystery that makes her true thoughts unfathomable, and she's used to manipulating people's hearts. She's actually fundamentally fragile, sensitive, and delicate, but tends to hide her true emotions and armor herself with a calm exterior and ambiguous rhetoric.\n\nFor certain reasons, her concepts of morality and right and wrong differ from ordinary people, and she'll blandly say somewhat shocking things.\n\nShe has serious insomnia problems.",
    skills: {
      normal: [
        { nameZh: "怎奈韶光", nameEn: "Fleeting Radiance", infoZh: "3段攻击敌人。", infoEn: "Attacks an enemy 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust2+60}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust3+100}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+60}%</color>伤害。\n三段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust3+100}%</color>伤害。" },
      ],
      class: [
        { nameZh: "偏生迟暮", nameEn: "Twilight's Edge", infoZh: "[充能增幅][处决] 攻击一名敌人。", infoEn: "[Charge][Execution] Attacks one enemy.", detailEn: "[Charge][Execution]\nTrigger Conditions: only affects targets that are knocked down\nDeals <color=#C8B450>{DAMAGE:damageAdjust+399}%</color> damage to one enemy.", detailZh: "[充能增幅][处决]\n触发条件：只能对倒地目标发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+399}%</color>伤害。" },
        { nameZh: "偏生迟暮", nameEn: "Twilight's Edge", infoZh: "[充能增幅][处决] 提升自身攻击时失衡值，并攻击一名敌人。", infoEn: "[Charge][Execution] Increases self Stagger Value on attack and attacks one enemy.", detailEn: "[Charge][Execution]\nTrigger Conditions: only affects targets that are knocked down\nGrants self a Stagger Value increase of <color=#C8B450>0.5</color> on attack, 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>5</color> seconds), and deals <color=#C8B450>{DAMAGE:damageAdjust_ex+524}%</color> damage to one enemy.", detailZh: "[充能增幅][处决]\n触发条件：只能对倒地目标发动\n赋予自身攻击时提升<color=#C8B450>0.5</color>点失衡值效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>5</color>秒)，并对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+524}%</color>伤害。" },
      ],
      auto: [
        { nameZh: "停转流年", nameEn: "Timeless Standstill", infoZh: "[处决]\n赋予自身周围我方角色伤害提升效果，并攻击一名敌人。", infoEn: "[Execution]\nGrants nearby allies a damage Up effect, then attacks one enemy.", detailEn: "[Execution]\nTrigger Conditions: only affects targets that are knocked down\nGrants allies within a circular area centered on self a damage boost of <color=#C8B450>+10%</color> (lasts <color=#C8B450>10</color> seconds), up to <color=#C8B450>1</color> stack. Then deals <color=#C8B450>{DAMAGE:damageAdjust+510}%</color> damage to one enemy.", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n以自身为中心圆形范围内我方角色技能伤害提升<color=#C8B450>+10%</color>效果(持续<color=#C8B450>10</color>秒)，此效果最高叠加至<color=#C8B450>1</color>层。随后对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+510}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "永诀旦夕", nameEn: "Final Twilight", infoZh: "攻击指定范围内敌人并附加失衡值，随后创造一个攻击领域，并在最后发动强力攻击。", infoEn: "Attacks enemies inside area and inflicts Stagger, then creates an attack zone and unleashes a powerful strike at the end.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust+155}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies in a designated circular area. Then creates a circular zone at the target location (lasts <color=#C8B450>7.5</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust2+155}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies within the zone every <color=#C8B450>1.5</color> seconds (the zone is not considered this character's skill). Finally, deals <color=#C8B450>{DAMAGE:damageAdjust3+600}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies within the area.", detailZh: "对指定圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+155}%</color>伤害与<color=#C8B450>3</color>点失衡值。随后在指定地点创造一个圆形领域(持续<color=#C8B450>7.5</color>秒)，每<color=#C8B450>1.5</color>秒对范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+155}%</color>伤害与<color=#C8B450>3</color>点失衡值(领域不视为本角色的技能)，最后对该范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust3+600}%</color>伤害与<color=#C8B450>3</color>点失衡值。" },
        { nameZh: "永诀旦夕", nameEn: "Final Twilight", infoZh: "攻击指定范围内敌人并附加失衡值，随后创造一个攻击频率提升的领域，并在最后发动极大幅度的强力攻击。", infoEn: "Attacks enemies inside area and inflicts Stagger, then creates a zone with increased attack frequency and unleashes a powerful strike at the end.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies in a designated circular area. Then creates a circular zone at the target location (lasts <color=#C8B450>9</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust2_ex+110}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies within the zone every <color=#C8B450>1</color> second (the zone is not considered this character's skill). Finally, deals <color=#C8B450>{DAMAGE:damageAdjust3_ex+700}%</color> damage and <color=#C8B450>3</color> Stagger Value to enemies within the area.", detailZh: "对指定圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color>伤害与<color=#C8B450>3</color>点失衡值。随后在指定地点创造一个圆形领域(持续<color=#C8B450>9</color>秒)，每<color=#C8B450>1</color>秒对范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2_ex+110}%</color>伤害与<color=#C8B450>3</color>点失衡值(领域不视为本角色的技能)，最后对该范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust3_ex+700}%</color>伤害与<color=#C8B450>3</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "韶光催逝", nameEn: "Fading Light", infoZh: "装备者特攻冷却时间降低\n装备者攻击倒地目标时，造成的额外伤害提升", infoEn: "Reduces the character's Special Attack CD\nIncreases Bonus Damage dealt when the character attacks a downed target", detailEn: "Character's Special Attack CD <color=#C8B450>-8%</color>\nCharacter's Bonus Damage when attacking a downed target <color=#C8B450>+{STACKABLEBUFF:P0001_InterferenceSkillEffects_ExtraDamage_Lv1:stackableBuffIdAdjust:0}%</color>.", detailZh: "装备者特攻冷却时间<color=#C8B450>-8%</color>\n装备者攻击倒地目标时额外伤害<color=#C8B450>+{STACKABLEBUFF:P0001_InterferenceSkillEffects_ExtraDamage_Lv1:stackableBuffIdAdjust:0}%</color>。" },
      ],
      passive: [
        { nameZh: "如梭岁华", nameEn: "Fleeting Years", infoZh: "每次我方角色施展处决后，赋予自身攻击速度提升效果(可叠加)。", infoEn: "Each time an ally uses an Execution, grants self an Attack Speed boost (stackable).", detailEn: "Each time an ally uses an Execution Skill, grants self Attack Speed <color=#C8B450>+3%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>20</color> stacks) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+16}</color> seconds).", detailZh: "每次我方角色施展处决技能后，赋予自身攻击速度<color=#C8B450>+3%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>20</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+16}</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0003',
    slug: 'xinzi',
    nameZh: "辛子",
    nameEn: "Xinzi",
    nameJa: "シンジ",
    titleZh: "腥红血影",
    titleEn: "Crimson Blood Shadow",
    rarity: 'SSR',
    cls: 'Fighter',
    icon: 'P0003_Awaken_figure_s.png',
    image: 'P0003_Awaken_figure_m.png',
    awakenImage: 'P0003_Awaken_figure_m.png',
    descriptionZh: "刚直粗鲁、强势锐利，讲话懒得修饰客套，有点暴躁和愤世嫉俗。缺乏耐心、厌蠢，但还算是能冷静思考应对策略。\n\n在战场上气势与胆量惊人，能够独当一面扛起整个局势，常常担当单枪匹马独自杀入敌阵的绝对ACE。\n\n和其他魔女相比，价值观跟常识较为接近正常人。在骨子里是正直且有同理心的人，但同时又因为过往的身分，见识过太多人心的险恶、愚蠢，变得有点麻木厌世。心中依然有着不可动摇的的善恶基准与初心，但同时也明白有些事必然会发生，如果对每件事都认真反应会耗尽自己，因此只能睁只眼闭只眼。\n\n认为在MAJO内爬得越高，就越可能得到想要的资讯，所以为了个人目的还算是认真工作，但同时会疯狂抱怨。",
    descriptionEn: "Straightforward and rough, forceful and sharp, too lazy to embellish her speech with pleasantries, somewhat hot-tempered and cynical. Lacks patience and hates stupidity, but can still think calmly about countermeasures.\n\nOn the battlefield, her presence and courage are astounding. She can handle the entire situation single-handedly and often serves as the absolute ACE who charges into enemy lines alone.\n\nCompared to other witches, her values and common sense are closer to normal people. Deep down, she's upright and empathetic, but due to her past identity, having witnessed too much human malice and stupidity, she's become somewhat numb and world-weary. She still has unshakeable moral standards and original intentions in her heart, but also understands that some things will inevitably happen. If she reacted seriously to everything, it would exhaust her, so she can only turn a blind eye.\n\nShe believes the higher she climbs within MAJO, the more likely she is to get the Info she wants, so she works fairly seriously for personal purposes while constantly complaining.",
    skills: {
      normal: [
        { nameZh: "无间业苦", nameEn: "Endless Suffering", infoZh: "4段攻击范围内敌人，并移动至目标后方。", infoEn: "Attacks enemies in range 4 times, then moves behind the target.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+28}%</color> and <color=#C8B450>{DAMAGE:damageAdjust2+28}%</color> damage to enemies in a forward fan-shaped area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+28}%</color> and <color=#C8B450>{DAMAGE:damageAdjust2+28}%</color> damage to enemies in a forward fan-shaped area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust+28}%</color> and <color=#C8B450>{DAMAGE:damageAdjust2+28}%</color> damage to enemies in a forward fan-shaped area.\nHit 4: Charges behind the target enemy and deals <color=#C8B450>{DAMAGE:damageAdjust3+40}%</color> damage and <color=#C8B450>1.6</color> Stagger Value to enemies along the path.", detailZh: "一段：对前方扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+28}%</color>与<color=#C8B450>{DAMAGE:damageAdjust2+28}%</color>伤害。\n二段：对前方扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+28}%</color>与<color=#C8B450>{DAMAGE:damageAdjust2+28}%</color>伤害。\n三段：对前方扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+28}%</color>与<color=#C8B450>{DAMAGE:damageAdjust2+28}%</color>伤害。\n四段：冲刺到目标敌方身后，并对路径上敌方造成<color=#C8B450>{DAMAGE:damageAdjust3+40}%</color>伤害与<color=#C8B450>1.6</color>失衡值。" },
      ],
      class: [
        { nameZh: "刹那障影", nameEn: "Instant Barrier Shadow", infoZh: "[闪避反击] 赋予自身额外减伤，并多段攻击范围内敌人。", infoEn: "[Dodge Counter] Grants self Bonus Damage Reduction and attacks enemies inside area multiple times.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nGrants self Bonus Damage Reduction <color=#C8B450>+90%</color> (lasts <color=#C8B450>1.5</color> seconds), then deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+105}%</color> damage to enemies within fan-shaped area in front of self.", detailZh: "[闪避反击]\n触发条件：闪避后发动\n赋予自身额外减伤<color=#C8B450>+90%</color>(持续<color=#C8B450>1.5</color>秒)，并对面前扇形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+105}%</color>伤害。" },
      ],
      auto: [
        { nameZh: "一念修罗", nameEn: "Summon Asura", infoZh: "[普攻衍生] 攻击一名敌人，此攻击附加额外暴击率。", infoEn: "[Normal Attack Salvo] Attacks one enemy. This attack grants an additional Critical Rate.", detailEn: "[Normal Attack Salvo]\nTrigger Condition: Activated after completing the final hit of a Normal Attack.\nDeals <color=#C8B450>{DAMAGE:damageAdjust+188}%</color> damage to one enemy. This attack’s Critical Rate is increased by <color=#C8B450>100%</color>.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+188}%</color>伤害，此攻击暴击率提高<color=#C8B450>100%</color>。" },
        { nameZh: "一念修罗", nameEn: "Summon Asura", infoZh: "[普攻衍生] 攻击敌人，并赋予额外减伤降低效果，此攻击附加额外暴击率。", infoEn: "[Normal Attack Salvo] Attacks an enemy and inflicts Bonus Damage Reduction. This attack has an additional Crit Rate.", detailEn: "[Normal Attack Salvo]\nTrigger Condition: Activated after completing the final hit of a Normal Attack\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+215}%</color> damage to one target, and inflicts Bonus Damage Reduction by <color=#C8B450>-10%</color> (lasts <color=#C8B450>8</color> seconds). This attack’s Critical Rate is increased by <color=#C8B450>100%</color>.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+215}%</color>伤害，并赋予额外减伤<color=#C8B450>-10%</color>效果(持续<color=#C8B450>8</color>秒)，此攻击暴击率提高<color=#C8B450>100%</color>。" },
      ],
      extreme: [
        { nameZh: "破地狱门", nameEn: "Hellgate Shattering", infoZh: "传送到指定地点，并多段攻击范围内敌人且附加失衡值。", infoEn: "Teleports to the designated location and attacks enemies inside area multiple times, inflicting Stagger.", detailEn: "Teleports to the designated location and deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage and <color=#C8B450>2</color> Stagger to enemies in a rectangular area, then deals <color=#C8B450>{DAMAGE:damageAdjust2+350}%</color> damage and <color=#C8B450>3</color> Stagger to enemies in a circular area.", detailZh: "传送到指定地点，并对矩形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害与<color=#C8B450>2</color>点失衡值，最后对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+350}%</color>伤害与<color=#C8B450>3</color>点失衡值。" },
        { nameZh: "破地狱门", nameEn: "Hellgate Shattering", infoZh: "传送到指定地点，并发动多次大范围连续攻击，造成敌人大量失衡。", infoEn: "Teleports to the designated location and launches multiple wide-area consecutive attacks, causing massive Stagger to enemies.", detailEn: "Teleports to the designated location, first dealing <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+135}%</color> damage and <color=#C8B450>2</color> Stagger to enemies in a rectangular area, then dealing <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+185}%</color> damage and <color=#C8B450>3</color> Stagger to enemies in a circular area, and finally dealing <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust4_ex+135}%</color> damage and <color=#C8B450>2</color> Stagger to enemies in a rectangular area once more.", detailZh: "传送到指定地点，先对矩形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+135}%</color>伤害与<color=#C8B450>2</color>点失衡值，接着对圆形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+185}%</color>伤害与<color=#C8B450>3</color>点失衡值，最后再次对矩形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust4_ex+135}%</color>伤害与<color=#C8B450>2</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "怨憎会", nameEn: "Gathering of Hatred", infoZh: "装备者暴击率提升\n装备者攻击物理弱点的敌人时，造成的伤害提升", infoEn: "Increases the character's Critical Rate\nIncreases damage dealt when the character attacks an enemy's Physical Weakness", detailEn: "Character's Critical Rate <color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>\nCharacter's bonus damage when attacking a target's Physical Weakness <color=#C8B450>+{BUFF:buffEffectAdjust2+7}%</color>", detailZh: "装备者暴击率<color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>\n装备者攻击物理弱点目标时额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust2+7}%</color>" },
      ],
      passive: [
        { nameZh: "爱别离", nameEn: "Parting of Loved Ones", infoZh: "每次发动闪避后，赋予自身额外伤害提升效果", infoEn: "Each time an evasion is performed, grants self a Bonus Damage Up effect", detailEn: "Each time an evasion is performed, grants self Bonus Damage <color=#C8B450>+5%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>5</color> stacks) (lasts <color=#C8B450>{BUFFDURATION:buffDurationAdjust+11}</color> second(s).", detailZh: "每次发动闪避后，赋予自身额外伤害<color=#C8B450>+5%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>5</color>层)(持续<color=#C8B450>{BUFFDURATION:buffDurationAdjust+11}</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0004',
    slug: 'isabelle',
    nameZh: "伊莎贝",
    nameEn: "Isabelle",
    nameJa: "イザベラ",
    titleZh: "纵横权后",
    titleEn: "Queen of All",
    rarity: 'UR',
    cls: 'Tank',
    icon: 'P0004_figure_s.png',
    image: 'P0004_figure_m.png',
    awakenImage: 'P0004_Awaken_figure_m.png',
    descriptionZh: "纯粹喜欢混乱、几乎毫无同情心的愉快犯，看见别人受苦就觉得快乐。\n\n享受事态在自己的暗中操控下逐步迈向失序的样子，并且认为世间万物都可以是供她娱乐、任意利用的一部分。在真正犯下不可饶恕的罪行之前，被MAJO挖掘，以「加入后能看见更多无止境的混乱与痛苦，甚至见证世界毁灭」为诱因，让她答应加入MAJO为机构效力，并且保证不再擅自做出可能危害社会秩序的行为。\n\n不过即便表面上同意，她也还是会借机在暗中制造混乱，所以重要的任务或作战情报基本上都会避免让她事先知情。\n\n骄傲张狂，对自己的智力有一定的信心，擅长下西洋棋，喜欢用棋子跟棋局来对现实进行比喻。\n\n也喜欢华丽、浮夸的事物，所以总是披着夸张的披肩。",
    descriptionEn: "A gleeful troublemaker who revels in pure chaos with almost no empathy, A gleeful troublemaker who revels in chaos and feels almost no empathy, delighting in the suffering of others.\n \nShe savors the sight of things unraveling under her covert manipulation, and believes everything in the world exists for her amusement and exploitation. Before she could commit any truly unforgivable crimes, however, MAJO discovered her and lured her in with the promise of witnessing endless chaos, suffering, and even the destruction of the world. She agreed to serve the organization, and in return pledged not to act unilaterally in ways that could destabilize the social order.\n \nEven so, she still finds ways to stir up trouble behind the scenes, so she is generally kept out of the loop on important missions and matters of operational intelligence.\n \nArrogant and theatrical, she has great confidence in her own intellect, excels at chess, and loves using pieces and board positions as metaphors for reality.\n \nShe also has a taste for the lavish and the ostentatious, which is why she always wears an extravagant cape.",
    skills: {
      normal: [
        { nameZh: "升变疾斩", nameEn: "Rising Swift Slash", infoZh: "3段攻击敌人。", infoEn: "Attacks an enemy 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+80}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+80}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+123}%</color> damage to one enemy.", detailZh: "一段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+80}%</color>伤害。\n二段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+80}%</color>伤害。\n三段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+123}%</color>伤害。" },
      ],
      class: [
        { nameZh: "亡命狂徒", nameEn: "Desperate Outlaw", infoZh: "[格挡反击] 攻击并嘲讽范围内敌人。", infoEn: "[Block Counter] Attacks and taunts enemies in the area.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within range.\nDeals <color=#C8B450>{DAMAGE:damageAdjust+160}%</color> damage to enemies in a circular area and applies Taunt.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+160}%</color>伤害，并附加嘲讽效果。" },
        { nameZh: "亡命狂徒", nameEn: "Desperate Outlaw", infoZh: "[格挡反击] 攻击并嘲讽范围内敌人，并附加额外伤害减少效果。", infoEn: "[Parry Counter] Attacks and taunts enemies in range, and applies a Bonus Damage Reduction effect.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within range.\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+230}%</color> damage to enemies in a circular area, applies Taunt, and reduces the damage dealt by enemies in the area by <color=#C8B450>12%</color> (lasts <color=#C8B450>6</color> seconds).", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+230}%</color>伤害，并附加嘲讽效果，且赋予范围内敌人造成的伤害降低<color=#C8B450>12%</color>(持续<color=#C8B450>6</color>秒)。" },
      ],
      auto: [
        { nameZh: "王不见王", nameEn: "Kings Unbowed", infoZh: "赋予自身额外减伤效果。", infoEn: "Grants self Bonus Damage Reduction.", detailEn: "Grants self Bonus Damage Reduction <color=#C8B450>{BUFF:buffEffectAdjust+30}%</color> (lasts <color=#C8B450>6</color> seconds).", detailZh: "赋予自身额外减伤<color=#C8B450>{BUFF:buffEffectAdjust+30}%</color>效果(持续<color=#C8B450>6</color>秒)。" },
      ],
      extreme: [
        { nameZh: "无尽将杀", nameEn: "Victorious Barrage", infoZh: "赋予自身防御力上升并移动至指定地点，随后攻击范围内敌人并附加嘲讽效果与失衡值。", infoEn: "Grant self a Defense boost and move to the designated location, then attack enemies in the area, inflicting Taunt and Stagger.", detailEn: "Grants self a Defense <color=#C8B450>{BUFF:buffEffectAdjust+30}%</color> buff (lasts <color=#C8B450>12</color> seconds) and moves to the designated location. Deals <color=#C8B450>{DAMAGE:damageAdjust+300}%</color> damage and <color=#C8B450>4</color> Stagger to enemies in a circular area and applies Taunt. Then deals <color=#C8B450>{DAMAGE:damageAdjust2+650}%</color> damage and <color=#C8B450>4</color> Stagger to enemies in a circular area and applies Taunt.", detailZh: "赋予自身防御力<color=#C8B450>{BUFF:buffEffectAdjust+30}%</color>效果(持续<color=#C8B450>12</color>秒)，并移动至指定地点。对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+300}%</color>伤害与<color=#C8B450>4</color>点失衡值，并附加嘲讽效果。随后对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+650}%</color>伤害与<color=#C8B450>4</color>点失衡值，并附加嘲讽效果。" },
        { nameZh: "无尽将杀", nameEn: "Victorious Barrage", infoZh: "赋予自身大幅防御力上升并移动至指定地点，随后连续攻击范围内敌人，造成大量失衡并持续嘲讽敌人。", infoEn: "Grant self a massive Defense boost and move to the designated location, then continuously attack enemies in the area, dealing heavy Stagger and repeatedly taunting enemies.", detailEn: "Grants self a Defense <color=#C8B450>{BUFF:buffEffectAdjust_ex+40}%</color> buff (lasts <color=#C8B450>20</color> seconds) and moves to the designated location. First deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+200}%</color> damage and <color=#C8B450>3</color> Stagger to enemies in a circular area and applies Taunt. Then deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+465}%</color> damage and <color=#C8B450>3</color> Stagger to enemies in a circular area and applies Taunt.", detailZh: "赋予自身防御力<color=#C8B450>{BUFF:buffEffectAdjust_ex+40}%</color>效果(持续<color=#C8B450>20</color>秒)，并移动至指定地点。先对圆形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+200}%</color>伤害与<color=#C8B450>3</color>点失衡值，并附加嘲讽效果。随后对圆形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+465}%</color>伤害与<color=#C8B450>3</color>点失衡值，并附加嘲讽效果。" },
      ],
      interference: [
        { nameZh: "算无遗策", nameEn: "Flawless Strategy", infoZh: "装备者攻击力提升。\n装备者发动奥义后，自身防御力提升。", infoEn: "The equipping character's Attack is increased.\nAfter the equipping character activates an Ultimate, their Defense is increased.", detailEn: "Character's Attack <color=#C8B450>{BUFF:buffEffectAdjust+4}%</color>.\nAfter the character uses their Extreme Skill, grants self a Defense <color=#C8B450>{BUFF:buffEffectAdjust+5}%</color> effect for 1 stack (max <color=#C8B450>3</color> stacks) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+25}</color> seconds).", detailZh: "装备者攻击力<color=#C8B450>{BUFF:buffEffectAdjust+4}%</color>。\n装备者发动奥义后，自身防御力提升<color=#C8B450>{BUFF:buffEffectAdjust+5}%</color>效果1层(最大<color=#C8B450>3</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+25}</color>秒)。" },
      ],
      passive: [
        { nameZh: "连环将杀", nameEn: "Rolling Checkmates", infoZh: "施展奥义后，自身奥义蓄能立刻完成。\n奥义每次命中敌人，使目标攻击力降低。", infoEn: "After using a Extreme Skill, instantly refill the Extreme Skill gauge.\nEach time the Extreme Skill hits an enemy, reduce the target's Attack.", detailEn: "After using a Extreme Skill, instantly refill the Extreme Skill gauge (CD: <color=#C8B450>40</color> sec).\nEach time the Extreme Skill hits an enemy, apply 1 stack of Attack reduction <color=#C8B450>1%</color> to the target (max <color=#C8B450>8</color> stacks) (lasts <color=#C8B450>15</color> sec).", detailZh: "施展奥义后，自身奥义蓄能立刻完成(冷却时间：<color=#C8B450>40</color>秒)。\n奥义每次命中敌人，使目标攻击力降低<color=#C8B450>1%</color>效果1层(最大<color=#C8B450>8</color>层)(持续<color=#C8B450>15</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0005',
    slug: 'grina',
    nameZh: "格瑞娜",
    nameEn: "Grina",
    nameJa: "グレイナ",
    titleZh: "胜率成瘾",
    titleEn: "Win Rate Addiction",
    rarity: 'SR',
    cls: 'Mage',
    icon: 'P0005_figure_s.png',
    image: 'P0005_figure_m.png',
    awakenImage: 'P0005_Awaken_figure_m.png',
    descriptionZh: "曾是成绩不怎么理想的网球选手，但因为性格不服输而从来没想过要放弃。\n\n然而在一次的严重车祸，意外觉醒了她的异能。她不仅存活下来，还获得了超越常人的反应速度与动能控制力，她从冷板凳直接变成了常胜军。\n\n队上有人忌妒她的能力，便暗中散播「格瑞娜滥用施打毒品」等谣言。她为了自清，主动答应接受检验，没想到来接她的单位其实是MAJO。\n\n叛逆的她本来并不想那么「听话」地加入组织，直到指导魔女看出了她的本性，以一句话完美地运用了激将法，顺利将之纳入旗下。\n\n「反正拯救世界这种事情吃力不讨好，不是随便谁都做得来。其实我也觉得让妳继续留在球队里是最好的选择。」\n\n一听这话，格瑞娜反而毫无悬念地加入了。",
    descriptionEn: "She was once a tennis player with less than ideal results, but her competitive nature meant she never thought of giving up.\n\nHowever, in a serious car accident, she accidentally awakened her supernatural abilities. She not only survived but also gained superhuman reaction speed and kinetic control, transforming from a benchwarmer into a champion.\n\nSomeone on the team was jealous of her abilities and secretly spread rumors like \"Grina abuses performance-enhancing drugs.\" To clear her name, she voluntarily agreed to testing, not expecting that the organization that came for her was actually MAJO.\n\nThe rebellious her didn't originally want to \"obediently\" join the organization, until the guiding witch saw through her nature and perfectly used reverse psychology with one sentence, successfully bringing her under their wing.\n\"Anyway, saving the world is thankless work that not just anyone can do. I actually think letting you stay on the tennis team is the best choice.\"\n\nUpon hearing this, Grina joined without hesitation.",
    skills: {
      normal: [
        { nameZh: "上抛发球", nameEn: "Toss Serve", infoZh: "2段攻击敌人。", infoEn: "Attacks an enemy 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+140}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+140}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+140}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+140}%</color>伤害。" },
      ],
      class: [
        { nameZh: "持拍聚劲", nameEn: "Racket Concentration", infoZh: "[充能增幅] 赋予自身攻击速度与暴击率提升效果。", infoEn: "[Charge Amp] Grants self increased Attack Speed and Crit Rate.", detailEn: "[Charge Amp]\nGrants self Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust+20}%</color> and Critical Rate <color=#C8B450>{BUFF:buffEffectAdjust2+20}%</color> (lasts <color=#C8B450>8</color> seconds).", detailZh: "[充能增幅]\n赋予自身攻击速度<color=#C8B450>{BUFF:buffEffectAdjust+20}%</color>与暴击率<color=#C8B450>{BUFF:buffEffectAdjust2+20}%</color>效果(持续<color=#C8B450>8</color>秒)。" },
      ],
      auto: [
        { nameZh: "旋球击杀", nameEn: "Spinning Ball Strike", infoZh: "[职系技衍生] 多段攻击一名敌人。", infoEn: "[Class Skill Salvo] Attacks one enemy multiple times.", detailEn: "[Class Skill Salvo]\nTrigger Condition: Activates after using a Class Skill\nDeals <color=#C8B450>5</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+146}%</color> damage to one target.", detailZh: "[职系技衍生]\n触发条件：职系技发动后施展\n对一名敌方造成<color=#C8B450>5</color>次<color=#C8B450>{DAMAGE:damageAdjust+146}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "必胜连击", nameEn: "Victorious Barrage", infoZh: "多段攻击指定范围内敌人。", infoEn: "Attacks enemies inside area multiple times.", detailEn: "Deals <color=#C8B450>6</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+162}%</color> damage to enemies inside circular area.", detailZh: "对指定圆形范围内敌方造成<color=#C8B450>6</color>次<color=#C8B450>{DAMAGE:damageAdjust+162}%</color>伤害。" },
        { nameZh: "必胜连击", nameEn: "Victorious Barrage", infoZh: "多段攻击指定范围内敌人，并大幅增加攻击段数。", infoEn: "Attacks enemies inside area multiple times with a greatly increased number of hits.", detailEn: "Deals <color=#C8B450>9</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+155}%</color> damage to enemies inside circular area.", detailZh: "对指定圆形范围内敌方造成<color=#C8B450>9</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+155}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "破发点", nameEn: "Break Point", infoZh: "装备者职系技的冷却时间降低\n装备者所有技能造成的额外伤害提升", infoEn: "Reduces the character's Class Skill CD\nIncreases Bonus Damage dealt by all of the character's Skills", detailEn: "Character's Class Skill CD <color=#C8B450>-{BUFF:buffEffectAdjust+5}%</color>\nCharacter's Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust2+2}%</color>", detailZh: "装备者职系技的冷却时间<color=#C8B450>-{BUFF:buffEffectAdjust+5}%</color>\n装备者额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust2+2}%</color>" },
        { nameZh: "破发点", nameEn: "Break Point", infoZh: "装备者职系技的冷却时间降低\n装备者所有技能造成的额外伤害提升", infoEn: "Reduces the character's Class Skill CD\nIncreases Bonus Damage dealt by all of the character's Skills", detailEn: "Character's Class Skill CD <color=#C8B450>-{BUFF:buffEffectAdjust_ex+9}%</color>\nCharacter's Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust2_ex+4.5}%</color>", detailZh: "装备者职系技的冷却时间<color=#C8B450>-{BUFF:buffEffectAdjust_ex+9}%</color>\n装备者额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust2_ex+4.5}%</color>" },
      ],
      passive: [
        { nameZh: "赛末点", nameEn: "Match Point", infoZh: "自身暴击伤害提升。", infoEn: "Crit Damage increased.", detailEn: "Grants self Crit Damage <color=#C8B450>{BUFF:buffEffectAdjust+11}%</color>.", detailZh: "赋予自身暴击伤害<color=#C8B450>{BUFF:buffEffectAdjust+11}%</color>。" },
      ],
    },
  },
  {
    id: 'P0006',
    slug: 'doroa',
    nameZh: "多萝亚",
    nameEn: "Doroa",
    nameJa: "ドロシア",
    titleZh: "嗜心女狂医",
    titleEn: "Heart-Obsessed Mad Doctor",
    rarity: 'SR',
    cls: 'Healer',
    icon: 'P0006_Awaken_figure_s.png',
    image: 'P0006_Awaken_figure_m.png',
    awakenImage: 'P0006_Awaken_figure_m.png',
    descriptionZh: "杰出的外科医师，曾经因为太想念死去的丈夫，而亲手剖开尸体、取下对方的心脏，说要带回家陪伴自己。\n\n而后那颗防腐保存的心脏便取代了骨灰的存在。\n\n喜欢收集心脏。对于感兴趣的人，更多的其实是想看看对方的心脏长什么样子。\n\n动不动就会把脸贴到别人的胸口上，陶醉在自我的世界里、赞叹着对方的心跳有多么迷人、美妙。为了能更听清楚任何心音，甚至不惜将自己的双耳改造成电子耳。\n\n也为了更加「贴近人心」，她把自己包装成交际型人格，非常懂得人情世故。\n\n虽然是披着白袍，但身上总有股暗黑密医的感觉，因此让她医治的时候常常有一种「不确定能不能走出去」的莫名恐惧。",
    descriptionEn: "An outstanding surgeon who once missed her deceased husband so much that she personally dissected the corpse and removed his heart, saying she wanted to take it home to keep her company.\n \nThat preserved heart then replaced the ashes' existence.\n \nShe likes collecting hearts. For people she's interested in, what she really wants is to see what their hearts look like.\n \nShe constantly presses her face against others' chests, intoxicated in her own world, marveling at how charming and wonderful their heartbeats are. In order to hear any heartbeat more clearly, she even went so far as to have her ears replaced with electronic ones.\n \nTo become more \"close to people's hearts,\" she packages herself as a social personality type, very understanding of human relationships.\n \nAlthough she wears a white coat, there's always a dark underground doctor feeling about her, so when she provides treatment, there's often an inexplicable fear of \"not being sure if you can walk out.\"",
    skills: {
      normal: [
        { nameZh: "聆心 ♡", nameEn: "Heartfelt ♡", infoZh: "2段攻击敌人。", infoEn: "Attacks an enemy 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+140}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+140}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+140}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+140}%</color>伤害。" },
      ],
      class: [
        { nameZh: "诱心医嘱 ♡", nameEn: "Alluring Whisper ♡", infoZh: "[治愈] 治疗范围内我方角色。", infoEn: "[Heal] Heals allies inside area.", detailEn: "[Heal]\nHeals allies within a circular area centered on the designated ally for <color=#C8B450>{HEAL:healAdjust+95}%</color> Health.", detailZh: "[治愈]\n治疗以指定我方单体为圆心之圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust+95}%</color>生命值。" },
      ],
      auto: [
        { nameZh: "贴心问诊 ♡", nameEn: "Caring Consultation ♡", infoZh: "治疗一名我方角色。", infoEn: "Heals one ally.", detailEn: "Restores <color=#C8B450>{HEAL:healAdjust+194}%</color> Health to one ally.", detailZh: "治疗一名我方角色<color=#C8B450>{HEAL:healAdjust+194}%</color>生命值。" },
      ],
      extreme: [
        { nameZh: "倾心治疗 ♡", nameEn: "Heartfelt Cure ♡", infoZh: "治疗指定范围内我方角色，并创造一个治愈领域。", infoEn: "Heals allies inside area and creates a healing zone.", detailEn: "Heals allies inside a designated circular area for <color=#C8B450>{HEAL:healAdjust+91}%</color> Health and creates a circular zone (lasts <color=#C8B450>10</color> seconds), healing allies within the zone for <color=#C8B450>{HEAL:healAdjust+91}%</color> Health every <color=#C8B450>3</color> seconds. (The zone is not considered this character's skill)", detailZh: "治疗指定圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust+91}%</color>生命值，并创造一个圆形领域(持续<color=#C8B450>10</color>秒)，每<color=#C8B450>3</color>秒对范围内我方角色治疗<color=#C8B450>{HEAL:healAdjust+91}%</color>生命值。 (领域不视为本角色的技能)" },
        { nameZh: "倾心治疗 ♡", nameEn: "Heartfelt Cure ♡", infoZh: "大幅提升治疗量与影响范围，治疗指定范围内我方角色并创造一个治愈领域。", infoEn: "Greatly increases the healing amount and area of effect, heals allies inside area and creates a healing zone.", detailEn: "Heals allies inside a designated circular area for <color=#C8B450>{HEAL:healAdjust_ex+54}%</color> Health and creates a circular zone (lasts <color=#C8B450>10</color> seconds), healing allies within the zone for <color=#C8B450>{HEAL:healAdjust_ex+54}%</color> Health every <color=#C8B450>1.5</color> seconds. (The zone is not considered this character's skill)", detailZh: "治疗指定圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+54}%</color>生命值，并创造一个圆形领域(持续<color=#C8B450>10</color>秒)，每<color=#C8B450>1.5</color>秒对范围内我方角色治疗<color=#C8B450>{HEAL:healAdjust_ex+54}%</color>生命值。 (领域不视为本角色的技能)" },
      ],
      interference: [
        { nameZh: "观心♡", nameEn: "Heart Gazing♡", infoZh: "装备者职系技的冷却时间降低\n装备者所有技能造成的治疗效果提升", infoEn: "Reduces the character's Class Skill CD\nIncreases the Healing Effect of all the character's skills", detailEn: "Character's Class Skill CD <color=#C8B450>-{BUFF:buffEffectAdjust+5}%</color>\nCharacter's healing effect <color=#C8B450>+{BUFF:buffEffectAdjust2+5}%</color>", detailZh: "装备者职系技的冷却时间<color=#C8B450>-{BUFF:buffEffectAdjust+5}%</color>\n装备者治疗效果<color=#C8B450>+{BUFF:buffEffectAdjust2+5}%</color>" },
        { nameZh: "观心♡", nameEn: "Heart Gazing♡", infoZh: "装备者职系技的冷却时间降低\n装备者所有技能造成的治疗效果提升", infoEn: "Reduces the character's Class Skill CD\nIncreases the Healing Effect of all the character's skills", detailEn: "Character's Class Skill CD <color=#C8B450>-{BUFF:buffEffectAdjust_ex+9}%</color>\nCharacter's healing effect <color=#C8B450>+{BUFF:buffEffectAdjust2_ex+9}%</color>", detailZh: "装备者职系技的冷却时间<color=#C8B450>-{BUFF:buffEffectAdjust_ex+9}%</color>\n装备者治疗效果<color=#C8B450>+{BUFF:buffEffectAdjust2_ex+9}%</color>" },
      ],
      passive: [
        { nameZh: "嗜心 ♡", nameEn: "Heart Craving ♡", infoZh: "自身治疗效果提升。", infoEn: "Healing Effect increased.", detailEn: "Self Healing Effect <color=#C8B450>{BUFF:buffEffectAdjust+16}%</color>.", detailZh: "自身治疗效果<color=#C8B450>{BUFF:buffEffectAdjust+16}%</color>。" },
      ],
    },
  },
  {
    id: 'P0007',
    slug: 'jenny',
    nameZh: "珍妮",
    nameEn: "Jenny",
    nameJa: "ジェニー",
    titleZh: "薄红蜜糖",
    titleEn: "Pink Honey",
    rarity: 'SSR',
    cls: 'Mage',
    icon: 'P0007_figure_s.png',
    image: 'P0007_figure_m.png',
    awakenImage: 'P0007_Awaken_figure_m.png',
    descriptionZh: "来自其他平行世界的少数族群，平均年龄约为200岁，且成长到一定阶段之后，外表就不会再有所变化。\n\n有着跟洋娃娃一样精致的外貌，静止不动的时候，甚至可以混迹于其他娃娃之中不被发现。在被MAJO招揽前的数十年，都待在买下她的马戏团里，以「活体娃娃」为噱头在原本的世界巡回表演。经过严苛的训练，深谙如何在不引人反感的基础上，展现少女的纯真与甜美。\n\n内心认为当自己以少女的一面提出要求时，如愿获得回应是理所当然的事，这样略显傲慢的本性，通常会在可爱攻势失败后，不经意浮现出来。\n\n因为过往在马戏团的习惯，时刻维持着刻板少女人设，但实际上很讨厌甜食跟粉红色。特殊才能是可以一动也不动地盯着人看，过程中连眼睛都不眨。",
    descriptionEn: "From a minority group in other parallel worlds, with an average age of about 200 years. Once they grow to a certain stage, their appearance no longer changes.\n\nShe has a refined appearance like a doll's. When motionless, she can even blend among other dolls undetected. For decades before being recruited by MAJO, she stayed with the circus that bought her, touring their original world with the gimmick of being a \"living doll.\" Through rigorous training, she learned how to display girlish innocence and sweetness without causing disgust.\n\nInternally, she believes that when she makes requests as a girl, getting the desired response is natural. This somewhat arrogant nature usually emerges inadvertently after cute tactics fail.\n\nDue to past circus habits, she constantly maintains a stereotypical girl persona, but actually hates sweets and pink. Her special talent is staring at people without moving at all, not even blinking during the process.",
    skills: {
      normal: [
        { nameZh: "熊熊碰拳", nameEn: "Bear Fist Bump", infoZh: "4段攻击敌人，最后一段攻击3次。", infoEn: "Attack enemies in 4 hits, with the final hit striking 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+70}%</color> damage to one enemy.\nHit 4: Deals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust3+75}%</color> damage to one enemy.", detailZh: "一段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n二段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n三段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+70}%</color>伤害。\n四段：对一名敌人造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust3+75}%</color>伤害。" },
      ],
      class: [
        { nameZh: "熊掌拍拍", nameEn: "Bear Paw Swat", infoZh: "[充能增幅] 攻击范围内敌人，并赋予自身攻击力提升。", infoEn: "[Charge] Attacks enemies in range and grants self an Attack boost.", detailEn: "[Charge]\nDeals <color=#C8B450>{DAMAGE:damageAdjust+405}%</color> damage to enemies in a circular area, adds <color=#C8B450>1</color> Stagger, and grants self an Attack <color=#C8B450>+8%</color> effect (lasts <color=#C8B450>10</color> seconds).", detailZh: "[充能增幅]\n对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+405}%</color>伤害，并附加<color=#C8B450>1</color>失衡值，并赋予自身攻击力<color=#C8B450>+8%</color>效果(持续<color=#C8B450>10</color>秒)。" },
      ],
      auto: [
        { nameZh: "熊偶抛抛", nameEn: "Bear Plushie Toss", infoZh: "[处决] 对倒地目标周围敌人造成伤害。", infoEn: "[Execution] Deals damage to enemies around a downed target.", detailEn: "[Execution]\nTrigger Conditions: Can only be activated against downed targets\nDeals <color=#C8B450>{DAMAGE:damageAdjust+400}%</color> damage to enemies in a circular area.", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+400}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "痛痛飞走", nameEn: "Ouchie Blast Off", infoZh: "移动至目标并对范围内敌人造成大量伤害。", infoEn: "Move to the target and deal massive damage to enemies in the area.", detailEn: "Moves to the front of the target and deals <color=#C8B450>{DAMAGE:damageAdjust+2320}%</color> damage and <color=#C8B450>10</color> Stagger to enemies in a circular area.", detailZh: "移动至目标前方，对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+2320}%</color>伤害与<color=#C8B450>10</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "甜甜注视", nameEn: "Sweet Gaze", infoZh: "装备者精神伤害提升。\n装备者攻击倒地目标时精神伤害额外提升。", infoEn: "The equipping character's Mental damage is increased.\nThe equipping character's Mental damage is additionally increased when attacking Knockdown targets.", detailEn: "Wearer's Mental damage <color=#C8B450>{BUFF:buffEffectAdjust+7.5}%</color>.\nWearer's Mental damage is additionally <color=#C8B450>{BUFF:buffEffectAdjust2+5}%</color> when attacking downed targets.", detailZh: "装备者精神伤害<color=#C8B450>{BUFF:buffEffectAdjust+7.5}%</color>。\n装备者攻击倒地目标时精神伤害额外<color=#C8B450>{BUFF:buffEffectAdjust2+5}%</color>。" },
        { nameZh: "甜甜注视", nameEn: "Sweet Gaze", infoZh: "装备者精神伤害大幅提升。\n装备者攻击倒地目标时精神伤害大幅额外提升。", infoEn: "The equipping character's Mental damage is greatly increased.\nThe equipping character's Mental damage is additionally greatly increased when attacking Knockdown targets.", detailEn: "Wearer's Mental damage <color=#C8B450>{BUFF:buffEffectAdjust_ex+10}%</color>.\nWearer's Mental damage is additionally <color=#C8B450>{BUFF:buffEffectAdjust2_ex+7.5}%</color> when attacking downed targets.", detailZh: "装备者精神伤害<color=#C8B450>{BUFF:buffEffectAdjust_ex+10}%</color>。\n装备者攻击倒地目标时精神伤害额外<color=#C8B450>{BUFF:buffEffectAdjust2_ex+7.5}%</color>。" },
      ],
      passive: [
        { nameZh: "撒娇抱抱", nameEn: "Spoiled Embrace", infoZh: "自身攻击速度提升。\n完成最后一段普攻后，职系技冷却时间缩短。", infoEn: "Increases own Attack Speed.\nAfter completing the final Normal attack, reduces Class Skill CD.", detailEn: "Own Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust+10}%</color>.\nAfter completing the final Normal attack, reduces Class Skill CD by <color=#C8B450>1</color> second.", detailZh: "自身攻击速度<color=#C8B450>{BUFF:buffEffectAdjust+10}%</color>。\n完成最后一段普攻后，职系技冷却时间缩短<color=#C8B450>1</color>秒。" },
        { nameZh: "撒娇抱抱", nameEn: "Spoiled Embrace", infoZh: "自身攻击速度大幅提升。\n完成最后一段普攻后，职系技冷却时间大幅缩短。", infoEn: "Significantly increases own Attack Speed.\nAfter completing the final Normal attack, greatly reduces Class Skill CD.", detailEn: "Own Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust_ex+15}%</color>.\nAfter completing the final Normal attack, reduces Class Skill CD by <color=#C8B450>2</color> seconds.", detailZh: "自身攻击速度<color=#C8B450>{BUFF:buffEffectAdjust_ex+15}%</color>。\n完成最后一段普攻后，职系技冷却时间缩短<color=#C8B450>2</color>秒。" },
      ],
    },
  },
  {
    id: 'P0008',
    slug: 'qing',
    nameZh: "青青",
    nameEn: "Qing",
    nameJa: "チン",
    titleZh: "乍现春光",
    titleEn: "Springlight Glimmer",
    rarity: 'SR',
    cls: 'Tank',
    icon: 'P0008_figure_s.png',
    image: 'P0008_figure_m.png',
    awakenImage: 'P0008_Awaken_figure_m.png',
    descriptionZh: "个性认真，有点书呆子气质。虽然很会考试、也很擅长处理与分析资料，但日常生活中容易被话术诈骗。听说大脑有一部分是由机械改组而成，这是她很少和人提起的小秘密。\n\n轻微暴露狂，平常的穿着是各种有意或无意走光的大集合。将内衣裤的选择视为衣品的一部份，偶尔会说出本人没有意识到是性骚扰的言论，但认真的态度很像是在做学术研究，因此被问的人也会战战兢兢地严肃回答。\n\n除了容易走光的外着挑选，在情趣内衣的搜集上也是专家等级。认为「如何不分场合都能恰到好处地走光」是一门艺术，并持续在追求这项艺术的路上越走越远。",
    descriptionEn: "Has a serious personality with a bit of bookish temperament. Although she's good at exams and skilled at handling and analyzing data, she's easily deceived by smooth talk in daily life. It's said that part of her brain has been reorganized with mechanical components... a small secret she rarely shares with anyone.\n \n \nA mild exhibitionist, her usual clothing is a collection of intentional or unintentional wardrobe malfunctions. She considers underwear selection part of fashion sense and occasionally makes remarks she doesn't realize are sexual harassment, but her serious attitude is so much like academic research that those questioned respond nervously and seriously.\n \nBesides selecting easily revealing outerwear, she's also expert-level at collecting lingerie. She considers \"how to have perfectly timed wardrobe malfunctions regardless of occasion\" an art form and continues to go further and further in pursuing this art.",
    skills: {
      normal: [
        { nameZh: "亏损惩处", nameEn: "Wound Punishment", infoZh: "2段攻击敌人。", infoEn: "Attacks an enemy 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+150}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust2+290}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+150}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+290}%</color>伤害。" },
      ],
      class: [
        { nameZh: "查帐锁定", nameEn: "Account Lock", infoZh: "[格挡反击] 赋予自身防御力提升，并冲刺至目标前攻击一名敌人。", infoEn: "[Block Counter] Grants self increased defense, then charges at the target and attacks one enemy.", detailEn: "[Block Counter]\nTrigger Condition: Activates after blocking, only if a target is within the area\nGrants self defense <color=#C8B450>{BUFF:buffEffectAdjust+15}%</color> (lasts <color=#C8B450>10</color> seconds), then moves in front of the target and deals <color=#C8B450>{DAMAGE:damageAdjust+225}%</color> damage to one enemy.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n赋予自身防御力<color=#C8B450>{BUFF:buffEffectAdjust+15}%</color>效果(持续<color=#C8B450>10</color>秒)，随后移动至目标前，对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+225}%</color>伤害。" },
      ],
      auto: [
        { nameZh: "财务裁决", nameEn: "Financial Ruling", infoZh: "[极式衍生] 赋予自身额外减伤上升，并攻击范围内敌人。", infoEn: "[Ultimate Salvo] Grants self increased Bonus Damage Reduction, and attacks enemies in range.", detailEn: "[Ultimate Salvo]\nTrigger Condition: Activates after fully unleashing the Ultimate\nGrants self Bonus Damage Reduction <color=#C8B450>+{BUFF:buffEffectAdjust+10}%</color> (lasts <color=#C8B450>15</color> seconds), and deals <color=#C8B450>{DAMAGE:damageAdjust+228}%</color> damage to enemies in circular area.", detailZh: "[极式衍生]\n触发条件：在完整施展极式后发动\n赋予自身额外减伤<color=#C8B450>{BUFF:buffEffectAdjust+10}%</color>效果(持续<color=#C8B450>15</color>秒)，并对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+228}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "负债审判", nameEn: "Debt Judgment", infoZh: "冲刺至指定地点并赋予自身防御力上升，随后攻击范围内敌人并附加嘲讽效果。", infoEn: "Charges to the designated location and grants a Defense increase to self, then attacks enemies inside area and inflicts Taunt.", detailEn: "Charges to the designated location, granting self Defense <color=#C8B450>+40%</color> (lasts <color=#C8B450>{BUFFDURATION:buffDurationAdjust+10}</color> seconds), then deals <color=#C8B450>{DAMAGE:damageAdjust+880}%</color> damage to enemies inside circular area with an additional Taunt.", detailZh: "冲刺至指定地点，赋予自身防御力<color=#C8B450>+40%</color>效果(持续<color=#C8B450>{BUFFDURATION:buffDurationAdjust+10}</color>秒)，随后对指定圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+880}%</color>伤害，攻击带有额外嘲讽效果。" },
        { nameZh: "负债审判", nameEn: "Debt Judgment", infoZh: "冲刺至指定地点并赋予自身大幅防御力上升，随后多段攻击范围内敌人并附加嘲讽效果。", infoEn: "Charges to the designated location and grants a large Defense increase to self, then attacks enemies inside area multiple times and inflicts Taunt.", detailEn: "Charges to the designated location, granting self a Defense effect <color=#C8B450>+50%</color> (lasts <color=#C8B450>{BUFFDURATION:buffDurationAdjust_ex+10}</color> seconds), then deals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+389}%</color> damage to enemies inside circular area, each hit carrying an additional Taunt.", detailZh: "冲刺至指定地点，赋予自身防御力<color=#C8B450>+50%</color>效果(持续<color=#C8B450>{BUFFDURATION:buffDurationAdjust_ex+10}</color>秒)，随后对指定圆形范围内敌人造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+389}%</color>伤害，每次攻击皆带有额外嘲讽效果。" },
      ],
      interference: [
        { nameZh: "预算编列", nameEn: "Budget Allocation", infoZh: "装备者格挡的冷却时间降低\n装备者格挡时使范围敌人攻击力下降", infoEn: "Reduces the character's block CD\nDecreases the Attack of nearby enemies when the character blocks", detailEn: "Character's block CD <color=#C8B450>-10%</color>\nWhen the character blocks, enemies' Attack <color=#C8B450>-{STACKABLEBUFF:P0008_InterferenceSkillEffects_AtkDown_Lv1:stackableBuffIdAdjust:0}%</color> (lasts <color=#C8B450>4</color> seconds) (max <color=#C8B450>3</color> stacks)", detailZh: "装备者格挡的冷却时间<color=#C8B450>-10%</color>\n装备者格挡时，使范围内敌方攻击力<color=#C8B450>-{STACKABLEBUFF:P0008_InterferenceSkillEffects_AtkDown_Lv1:stackableBuffIdAdjust:0}%</color>(持续<color=#C8B450>4</color>秒)(最多<color=#C8B450>3</color>层)" },
        { nameZh: "预算编列", nameEn: "Budget Allocation", infoZh: "装备者格挡的冷却时间降低\n装备者格挡时使范围敌人攻击力下降", infoEn: "Reduces the character's block CD\nDecreases the Attack of nearby enemies when the character blocks", detailEn: "Character's block CD <color=#C8B450>-15%</color>\nWhen the character blocks, enemies attack <color=#C8B450>-{STACKABLEBUFF:P0008_ExInterferenceSkillEffects_AtkDown_Lv1:stackableBuffIdAdjust_ex:0}%</color> (lasts <color=#C8B450>5</color> seconds) (max <color=#C8B450>3</color> stacks)", detailZh: "装备者格挡的冷却时间<color=#C8B450>-15%</color>\n装备者格挡时，使范围内敌方攻击力<color=#C8B450>-{STACKABLEBUFF:P0008_ExInterferenceSkillEffects_AtkDown_Lv1:stackableBuffIdAdjust_ex:0}%</color>(持续<color=#C8B450>5</color>秒)(最多<color=#C8B450>3</color>层)" },
      ],
      passive: [
        { nameZh: "资本保护", nameEn: "Capital Protection", infoZh: "自身魔法抗性提升。", infoEn: "Magic Resistance increased.", detailEn: "Grants self Magic Resistance <color=#C8B450>{BUFF:buffEffectAdjust+32}%</color>.", detailZh: "赋予自身魔法抗性<color=#C8B450>{BUFF:buffEffectAdjust+32}%</color>。" },
      ],
    },
  },
  {
    id: 'P0009',
    slug: 'tomoe',
    nameZh: "友萌",
    nameEn: "Tomoe",
    nameJa: "友萌",
    titleZh: "钢铁女仆",
    titleEn: "Steel Maid",
    rarity: 'SR',
    cls: 'Mage',
    icon: 'P0009_Awaken_figure_s.png',
    image: 'P0009_Awaken_figure_m.png',
    awakenImage: 'P0009_Awaken_figure_m.png',
    descriptionZh: "来自一个已经毁灭的时空，原本是一名为了侍奉最高统治者而打造的究极女仆机器人。\n\n在礼教方面有着异常的执着，尤其对于「请、谢谢、对不起」等说话的态度上面更是重视。\n\n友萌相信，礼貌是身为一个人的根本，没有礼貌的人不配活在这个世界上。\n\n过去的友萌对于礼教的执着程度更为严苛，却在经历了某些变故之后收敛了「礼教核心」的标准。\n\n曾经有人好奇是什么让她改变？她只是礼貌地笑说：「只要说话有礼貌，那就已经足够。」\n\n其他的礼教，对她而言都是吞人的怪物罢了。",
    descriptionEn: "From a destroyed timeline, she was originally an ultimate maid android created to serve the supreme ruler.\n\nShe has an abnormal obsession with etiquette, particularly valuing attitudes in speech such as \"please,\" \"thank you,\" and \"sorry.\"\n\nTomoe believes politeness is fundamental to being human, and that impolite people don't deserve to live in this world.\n\nThe past Tomoe was even more strict about etiquette, but after experiencing certain upheavals, she relaxed her \"etiquette core\" standards.\n\nWhen someone once asked what made her change, she just smiled politely and said: \"As long as one speaks with politeness, that's enough.\"\n\nOther forms of etiquette are mere time-wasters to her.",
    skills: {
      normal: [
        { nameZh: "花见", nameEn: "Hanami", infoZh: "1段攻击敌人。", infoEn: "Attacks an enemy 1 time.", detailEn: "Hit 1: Deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+141}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+141}%</color>伤害。" },
      ],
      class: [
        { nameZh: "侍奉花阵", nameEn: "Serving Flower Formation", infoZh: "[充能增幅] 创造一个强化领域，并增加自身极式蓄能。", infoEn: "[Charge Amp] Creates an enhanced zone and increases own Extreme Skill charge.", detailEn: "[Charge Amp]\nTrigger Condition: Activates after dodging or using an Ultimate\nCreates a circular zone (lasts <color=#C8B450>4</color> seconds), granting allies inside the zone Bonus Damage <color=#C8B450>+8%</color> effect each second (lasts <color=#C8B450>8</color> seconds), and increases own Extreme Skill charge by <color=#C8B450>{COST:costAdjust+10000}</color> in <color=#C8B450>4</color> stages. (The zone is not considered this character's skill)", detailZh: "[充能增幅]\n触发条件：闪避或施展极式后发动\n自身创造一个圆形领域(持续<color=#C8B450>4</color>秒)，每秒赋予领域内我方角色额外伤害<color=#C8B450>+8%</color>效果(持续<color=#C8B450>8</color>秒)，并分<color=#C8B450>4</color>次提升自身极式蓄能<color=#C8B450>{COST:costAdjust+10000}</color>。 (领域不视为本角色的技能)" },
        { nameZh: "侍奉花阵", nameEn: "Serving Flower Formation", infoZh: "[充能增幅] 创造一个强化领域，并提升自身极式蓄能与缩短特攻冷却时间。", infoEn: "[Charge] Creates an enhanced zone and increases own Extreme Skill charge while reducing Special Attack CD.", detailEn: "[Charge]\nTrigger Conditions: Activates after dodging or using an Extreme Skill\nCreates a circular zone centered on self (lasts <color=#C8B450>5</color> seconds), granting allies inside the zone a Bonus Damage effect of <color=#C8B450>+8%</color> each second (lasts <color=#C8B450>8</color> seconds), and increases own Extreme Skill charge by <color=#C8B450>{COST:costAdjust_ex+10000}</color> and reduces Special Attack CD by <color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust_ex+1}</color> seconds in <color=#C8B450>4</color> stages. (The zone is not considered this character's skill)", detailZh: "[充能增幅]\n触发条件：闪避或施展极式后发动\n自身创造一个圆形领域(持续<color=#C8B450>5</color>秒)，每秒赋予领域内我方角色额外伤害<color=#C8B450>+8%</color>效果(持续<color=#C8B450>8</color>秒)，并分<color=#C8B450>4</color>次提升自身极式蓄能<color=#C8B450>{COST:costAdjust_ex+10000}</color>并使特攻冷却时间缩短<color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust_ex+1}</color>秒。 (领域不视为本角色的技能)" },
      ],
      auto: [
        { nameZh: "夜樱绽放", nameEn: "Nocturnal Sakura Bloom", infoZh: "攻击范围内敌人。", infoEn: "Attack enemies inside area.", detailEn: "Deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage to enemies in a rectangular area in front.", detailZh: "对面前矩形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "落樱剑舞", nameEn: "Sakura Blade Dance", infoZh: "赋予自身暴击伤害上升，并多段攻击范围内敌人。", infoEn: "Grants self a Critical Damage increase and attacks enemies within range multiple times.", detailEn: "Grants self a Crit Damage effect <color=#C8B450>+50%</color> (lasts <color=#C8B450>15</color> seconds), then deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+246}%</color> damage to enemies in the rectangular area ahead, and finally deals <color=#C8B450>{DAMAGE:damageAdjust2+286}%</color> damage once more.", detailZh: "赋予自身暴击伤害<color=#C8B450>+50%</color>效果(持续<color=#C8B450>15</color>秒)，随后对面前矩形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+246}%</color>伤害，最后再次造成<color=#C8B450>{DAMAGE:damageAdjust2+286}%</color>伤害。" },
        { nameZh: "落樱剑舞", nameEn: "Sakura Blade Dance", infoZh: "赋予自身大幅暴击伤害上升，并连续多次攻击范围内所有敌人。", infoEn: "Grants self a large Critical Damage increase and continuously attacks all enemies inside area multiple times.", detailEn: "Grants self a Crit Damage effect <color=#C8B450>+80%</color> (lasts <color=#C8B450>15</color> seconds), then deals <color=#C8B450>5</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+300}%</color> damage to enemies in the rectangular area ahead.", detailZh: "赋予自身暴击伤害<color=#C8B450>+80%</color>效果(持续<color=#C8B450>15</color>秒)，随后对面前矩形范围内敌人造成<color=#C8B450>5</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+300}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "花神祝仪", nameEn: "Flora's Blessing", infoZh: "装备者物理攻击克制率提升\n装备者每次发动极式后，以装备者为圆心，创造一个强化领域", infoEn: "Increases the character's Physical Attack rate\nEach time the character uses an Extreme Skill, creates an Enhanced Zone centered on the character", detailEn: "Character's Physical Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\nAfter the character uses an Extreme Skill, creates a circular zone (lasts <color=#C8B450>4</color> seconds) that increases allies' Attack within area by <color=#C8B450>+{STACKABLEBUFF:P0009_InterferenceSkillEffects_AtkUp_Lv1:stackableBuffIdAdjust:0}%</color> per second (lasts <color=#C8B450>9</color> seconds) (max <color=#C8B450>5</color> stacks).", detailZh: "装备者物理攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\n装备者发动极式后，创造一个圆形领域(持续<color=#C8B450>4</color>秒)，每秒使范围内我方攻击力<color=#C8B450>+{STACKABLEBUFF:P0009_InterferenceSkillEffects_AtkUp_Lv1:stackableBuffIdAdjust:0}%</color>(持续<color=#C8B450>9</color>秒)(最多<color=#C8B450>5</color>层)。" },
      ],
      passive: [
        { nameZh: "春樱返", nameEn: "Spring Sakura's Return", infoZh: "每次施展极式时，自身职系技冷却时间立刻完成。", infoEn: "Each time an Extreme Skill is used, self Class Skill CD is completed instantly.", detailEn: "Each time an Extreme Skill is used, self Class Skill CD is completed instantly.", detailZh: "每次施展极式时，自身职系技冷却时间立刻完成。" },
      ],
    },
  },
  {
    id: 'P0010',
    slug: 'yuhong',
    nameZh: "御虹",
    nameEn: "Yuhong",
    nameJa: "ユホン",
    titleZh: "镇扼枪使",
    titleEn: "Soul-Pacifying Gunner",
    rarity: 'SSR',
    cls: 'Mage',
    icon: 'P0010_figure_s.png',
    image: 'P0010_figure_m.png',
    awakenImage: 'P0010_Awaken_figure_m.png',
    descriptionZh: "正经、重义气，有着军人风范，会保护和自己一起进行任务的同伴，是战斗时强大而可靠的存在。通常表现得很沉稳，但只要被夸奖会默默害羞脸红、不知所措。\n\n一边耳朵长年戴着战术通信耳机，就算是洗澡或睡觉也不会把耳机拿下来，并在只有她自己能听见的情况下，跟一个被称作「巴雷特」的对象随时进行交流，两人的相处模式就像搭档多年的老战友，但没人见过巴雷特的真面目。\n\n爱护跟重视自己的武器到有点夸张的地步，偶尔会做出仿佛把枪当独立个体看的不寻常举动。\n\n其实来自其他平行世界，「巴雷特」是武器制造商参考旧式枪械所研发的智能武器，御虹则是能与武器连接信号的机械枪使，虽然不算是秘密，但知道的魔女并不多。",
    descriptionEn: "Serious and loyal with military bearing, she protects companions on missions with her and is a powerful, reliable presence in combat. Usually appears composed, but quietly becomes shy and flustered when praised.\n\nShe wears a tactical communication earpiece in one ear year-round, never removing it even when bathing or sleeping. In situations where only she can hear, she constantly communicates with someone called \"Barrett.\" Their interaction is like old war buddies who've partnered for years, but no one has seen Barrett's true form.\n\nShe cherishes and values her weapon to an almost exaggerated degree, occasionally acting as if treating the gun as an independent entity.\n\nShe actually comes from other parallel worlds. \"Barrett\" is an intelligent weapon developed by a weapons manufacturer based on old-style firearms. Yuhong is a mechanical gunner who can connect signals with weapons. While not exactly secret, few witches know this.",
    skills: {
      normal: [
        { nameZh: "撞针轻响", nameEn: "Firing Pin Click", infoZh: "1段攻击敌人。", infoEn: "Attacks an enemy 1 time.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+195}%</color> damage to one enemy.", detailZh: "一段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+195}%</color>伤害。" },
      ],
      class: [
        { nameZh: "渗透突击", nameEn: "Infiltration Assault", infoZh: "[充能增幅] 赋予自身闪避率、攻击时失衡值提升、移动速度与攻击速度提升。", infoEn: "[Charge] Grants self a boost to Dodge Value, Stagger Value on attack, Movement Speed, and Attack Speed.", detailEn: "[Charge]\nGrants self Dodge Value <color=#C8B450>+30%</color>, an effect that increases Stagger Value by <color=#C8B450>2</color> on attack, Movement Speed <color=#C8B450>+30%</color>, and Attack Speed <color=#C8B450>+60%</color> (max <color=#C8B450>1</color> stack each) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+8}</color> seconds).", detailZh: "[充能增幅]\n赋予自身闪避率<color=#C8B450>+30%</color>、攻击时提升<color=#C8B450>2</color>点失衡值效果、移动速度<color=#C8B450>+30%</color>、攻击速度<color=#C8B450>+60%</color>(各最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+8}</color>秒)。" },
      ],
      auto: [
        { nameZh: "沉着击发", nameEn: "Calm Shot", infoZh: "[闪避反击] 对面前矩形路径内敌人造成伤害。", infoEn: "[Dodge Counter] Deals damage to enemies in a rectangular path ahead.", detailEn: "[Dodge Counter]\nTrigger Conditions: Activated after dodging (can be activated regardless of Conditions during the Extreme Skill Effect, and fixes the maximum Dodge CD to <color=#C8B450>2</color> seconds)\nDeals <color=#C8B450>{DAMAGE:damageAdjust+216}%</color> damage to enemies in the rectangular path ahead.", detailZh: "[闪避反击]\n触发条件：闪避后发动(奥义效果持续期间可无视条件发动，并将闪避最大冷却时间固定为<color=#C8B450>2</color>秒)\n对面前矩形路径内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+216}%</color>伤害。" },
        { nameZh: "沉着击发", nameEn: "Calm Shot", infoZh: "[闪避反击] 对面前矩形路径内敌人造成更强的伤害。", infoEn: "[Dodge Counter] Deals stronger damage to enemies in a rectangular path ahead.", detailEn: "[Dodge Counter]\nTrigger Conditions: Activated after dodging (can be activated regardless of Conditions during the Extreme Skill Effect, and fixes the maximum Dodge CD to <color=#C8B450>2</color> seconds)\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+302}%</color> damage to enemies in the rectangular path ahead.", detailZh: "[闪避反击]\n触发条件：闪避后发动(奥义效果持续期间可无视条件发动，并将闪避最大冷却时间固定为<color=#C8B450>2</color>秒)\n对面前矩形路径内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+302}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "绝对压制", nameEn: "Absolute Suppression", infoZh: "赋予自身闪避率提升及攻击时失衡值提升，并将闪避最大冷却时间固定。", infoEn: "Grants self increased Dodge Value and Stagger on hit, and fixes the maximum Dodge CD.", detailEn: "Grants self Dodge Value <color=#C8B450>+100%</color> and an effect that increases Stagger Value by <color=#C8B450>2</color> on attack for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+12}</color> seconds), and fixes the maximum Dodge CD to <color=#C8B450>2</color> seconds.", detailZh: "赋予自身闪避率<color=#C8B450>+100%</color>与攻击时提升<color=#C8B450>2</color>点失衡值效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+12}</color>秒)，并将闪避最大冷却时间固定为<color=#C8B450>2</color>秒。" },
        { nameZh: "绝对压制", nameEn: "Absolute Suppression", infoZh: "赋予自身闪避率提升及攻击时失衡值提升，并将闪避最大冷却时间固定。效果持续期间施展特攻追加伤害。", infoEn: "Grants self increased Dodge Value and Stagger Value on hit, and fixes the maximum Dodge CD. Deals Bonus Damage with Specials while the effect is active.", detailEn: "Grants self Dodge Value <color=#C8B450>+100%</color> and an effect that increases Stagger Value by <color=#C8B450>2</color> on attack for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust_ex+12}</color> seconds), and fixes the maximum Dodge CD to <color=#C8B450>2</color> seconds.\nWhile the effect is active, using a Special deals an additional <color=#C8B450>200%</color> damage to the target.", detailZh: "赋予自身闪避率<color=#C8B450>+100%</color>与攻击时提升<color=#C8B450>2</color>点失衡值效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust_ex+12}</color>秒)，并将闪避最大冷却时间固定为<color=#C8B450>2</color>秒。\n效果持续期间，施展特攻时对目标额外造成<color=#C8B450>200%</color>伤害。" },
      ],
      interference: [
        { nameZh: "火力支援", nameEn: "Fire Support", infoZh: "装备者闪避冷却时间降低。\n装备者触发闪避后，暴击率提升。", infoEn: "The equipping character's Dodge CD is reduced.\nAfter the equipping character triggers a Dodge, Critical Rate is increased.", detailEn: "Wearer's Dodge CD <color=#C8B450>-{BUFF:buffEffectAdjust+7}%</color>.\nEach time the wearer triggers a Dodge, gains Critical Rate <color=#C8B450>{BUFF:buffEffectAdjust+7}%</color> for 1 stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+7}</color> seconds).", detailZh: "装备者闪避冷却时间<color=#C8B450>-{BUFF:buffEffectAdjust+7}%</color>。\n装备者每次触发闪避，获得暴击率<color=#C8B450>{BUFF:buffEffectAdjust+7}%</color>效果1层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+7}</color>秒)。" },
      ],
      passive: [
        { nameZh: "战术通讯", nameEn: "Tactical Comms", infoZh: "我方角色触发闪避时，自身暴击率提升，并缩短职系技冷却时间。\n奥义效果持续期间，普攻命中时额外造成伤害。", infoEn: "When an allied character triggers a Dodge, increases own Critical Rate and reduces Class Skill CD.\nDuring the Extreme Skill Effect, Normal attacks deal additional damage on hit.", detailEn: "When an allied character triggers a Dodge, grants self Critical Rate <color=#C8B450>+4%</color> for 1 stack (max <color=#C8B450>10</color> stacks) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+10}</color> seconds), and reduces Class Skill CD by <color=#C8B450>2</color> seconds.\nDuring the Extreme Skill Effect, Normal attacks hitting a target deal an additional <color=#C8B450>{DAMAGE:damageAdjust+105}%</color> damage.", detailZh: "我方角色触发闪避时，赋予自身暴击率<color=#C8B450>+4%</color>效果1层(最大<color=#C8B450>10</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+10}</color>秒)，并使职系技冷却时间缩短<color=#C8B450>2</color>秒。\n奥义效果持续期间，普攻命中目标时额外造成<color=#C8B450>{DAMAGE:damageAdjust+105}%</color>伤害。" },
      ],
    },
  },
  {
    id: 'P0011',
    slug: 'patra',
    nameZh: "佩脱拉",
    nameEn: "Patra",
    nameJa: "ペトラ",
    titleZh: "化羽璃光",
    titleEn: "Manifested Crystalline Light",
    rarity: 'SSR',
    cls: 'Mage',
    icon: 'P0011_figure_s.png',
    image: 'P0011_figure_m.png',
    awakenImage: 'P0011_Awaken_figure_m.png',
    descriptionZh: "超宅女，极度社恐，所有会动的活物都让她有社交压力。只有可以让她慢慢抚摸、研究的死物，才能令她感到安心与幸福。在所有的死物中，最喜欢的是宝石，一想到这些宝石是生物遗骸经过长久时间才生长出来的，就会让佩脱拉兴奋到发抖。\n\n由于战场上的熵灵几乎都会动，容易触发佩脱拉的恐惧、影响战斗表现，因此大多是请她做后端支援与研究的工作。\n\n虽然大部分时间都躲在冰冷的标本室、停尸间、宝石温室，跟各种类型的尸体共处一室进行研究，但个性上并不吓人，是个甜美而羞涩的小女孩。",
    descriptionEn: "A chronic shut-in with extreme social anxiety, all living things cause her social stress. Only dead objects that she can slowly touch and study bring her peace and happiness. Among all dead objects, her favorite is gems. Just thinking about how these gems grew from biological remains over long periods of time makes Patra tremble with excitement.\n\nSince Entropy Spirits on the battlefield almost always move, they easily trigger Patra's fears and affect her combat performance, so she's mostly asked to do backend support and research work.\n\nAlthough she spends most of her time hiding in cold specimen rooms, morgues, and gem greenhouses, conducting research alongside various types of corpses, she's not scary personality-wise, she's a sweet and shy little girl.",
    skills: {
      normal: [
        { nameZh: "永生之死", nameEn: "Eternal Death", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+54}%</color> damage to enemies in a rectangular area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+54}%</color> damage to enemies in a rectangular area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+55}%</color> damage to enemies in a circular area.", detailZh: "一段：对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+54}%</color>伤害。\n二段：对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+54}%</color>伤害。\n三段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+55}%</color>伤害。" },
      ],
      class: [
        { nameZh: "逝物加冕", nameEn: "Crowning the Departed", infoZh: "[充能增幅] 提升自身极式蓄能。", infoEn: "[Charge Amp] Increases own Extreme Skill charge.", detailEn: "[Charge Amp]\nIncreases own Extreme Skill charge by <color=#C8B450>{COST:costAdjust+30000}</color>.", detailZh: "[充能增幅]\n提升自身极式蓄能<color=#C8B450>{COST:costAdjust+30000}</color>。" },
      ],
      auto: [
        { nameZh: "六呎之下", nameEn: "Six Feet Under", infoZh: "[职系技衍生] 攻击范围内敌人并造成击退。", infoEn: "[Class Skill Salvo] Attacks enemies within range and knocks them back.", detailEn: "[Class Skill Salvo]\nTrigger Condition: Activates after using a Class Skill\nDeals <color=#C8B450>{DAMAGE:damageAdjust+96}%</color> damage to enemies within a circular area and knocks them back.", detailZh: "[职系技衍生]\n触发条件：自身施展职系技后发动\n对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+96}%</color>伤害，并造成击退。" },
        { nameZh: "六呎之下", nameEn: "Six Feet Under", infoZh: "[职系技衍生] 攻击范围内敌人并造成击退，同时增加自身极式蓄能。", infoEn: "[Class Skill Salvo] Attacks enemies within range and knocks them back, while also increasing self Extreme Skill charge.", detailEn: "[Class Skill Salvo]\nTrigger Condition: Activated after using Class Skill\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+129}%</color> damage, knocks enemies back, and increases self Extreme Skill Charge by <color=#C8B450>{COST:costAdjust_ex+15000}</color>.", detailZh: "[职系技衍生]\n触发条件：自身施展职系技后发动\n对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+129}%</color>伤害并造成击退，并增加自身极式蓄能<color=#C8B450>{COST:costAdjust_ex+15000}</color>。" },
      ],
      extreme: [
        { nameZh: "埋葬群星", nameEn: "Burial Constellation", infoZh: "攻击指定范围内敌人，并在最后一段攻击附加失衡值与魔法抗性减少效果。", infoEn: "Attacks enemies inside area and inflicts Stagger and a Magic Resistance reduction with the final hit.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust+510}%</color> damage to enemies inside circular area, then deals <color=#C8B450>{DAMAGE:damageAdjust2+880}%</color> damage and <color=#C8B450>2</color> Stagger to enemies inside circular area, inflicting a Magic Resistance <color=#C8B450>-10%</color> effect for <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>30</color> seconds).", detailZh: "对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+510}%</color>伤害，最后对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+880}%</color>伤害与<color=#C8B450>2</color>点失衡值，并赋予魔法抗性<color=#C8B450>-10%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>30</color>秒)。" },
      ],
      interference: [
        { nameZh: "衰弱吐息", nameEn: "Weakening Breath", infoZh: "装备者极式额外伤害提升\n装备者每次极式对敌方角色造成伤害时，装备者魔法攻击克制率提升效果", infoEn: "Increases the character's Extreme Skill Bonus Damage\nEach time the character's Extreme Skill deals damage to enemy characters, increases the character's Magic Attack rate", detailEn: "Character's Extreme Skill damage <color=#C8B450>+{BUFF:buffEffectAdjust+6}%</color>\nEach time the character's Extreme Skill deals damage to enemies, the character's Magic Attack rate <color=#C8B450>+{STACKABLEBUFF:P0011_ExInterferenceSkillEffects_MagicPierceUp_Lv1:stackableBuffIdAdjust:0}%</color> (lasts <color=#C8B450>10</color> seconds) (max <color=#C8B450>5</color> stacks).", detailZh: "装备者极式伤害<color=#C8B450>+{BUFF:buffEffectAdjust+6}%</color>\n装备者每次极式对敌方造成伤害时，装备者魔法攻击克制率<color=#C8B450>+{STACKABLEBUFF:P0011_ExInterferenceSkillEffects_MagicPierceUp_Lv1:stackableBuffIdAdjust:0}%</color>(持续<color=#C8B450>10</color>秒)(最多<color=#C8B450>5</color>层)。" },
        { nameZh: "衰弱吐息", nameEn: "Weakening Breath", infoZh: "装备者极式技能伤害提升\n装备者每次极式对敌方角色造成伤害时，装备者魔法攻击克制率提升效果", infoEn: "Increases the character's Extreme Skill damage\nEach time the character's Extreme Skill deals damage to enemies, increases the character's Magic Attack rate", detailEn: "Character's Extreme Skill damage <color=#C8B450>+{BUFF:buffEffectAdjust_ex+12}%</color>\nEach time the character's Extreme Skill deals damage to enemies, the character's Magic Attack rate <color=#C8B450>+{STACKABLEBUFF:P0011_ExInterferenceSkillEffects_MagicPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color> (lasts <color=#C8B450>10</color> seconds) (max <color=#C8B450>8</color> stacks).", detailZh: "装备者极式伤害<color=#C8B450>+{BUFF:buffEffectAdjust_ex+12}%</color>\n装备者每次极式对敌方造成伤害时，装备者魔法攻击克制率<color=#C8B450>+{STACKABLEBUFF:P0011_ExInterferenceSkillEffects_MagicPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>(持续<color=#C8B450>10</color>秒)(最多<color=#C8B450>8</color>层)。" },
      ],
      passive: [
        { nameZh: "轮流覆土", nameEn: "Taking Turns", infoZh: "我方职系为飞袭的魔女施展极式后，使自身职系技冷却立刻完成。", infoEn: "When an allied Arcanist Witch uses an Extreme Skill, self Class Skill CD is completed instantly.", detailEn: "When an allied Arcanist Witch uses an Extreme Skill, self Class Skill CD is completed instantly.", detailZh: "我方职系为飞袭的魔女施展极式后，自身职系技冷却立刻完成。" },
      ],
    },
  },
  {
    id: 'P0013',
    slug: 'maro',
    nameZh: "玛萝",
    nameEn: "Maro",
    nameJa: "マロ",
    titleZh: "热血导师",
    titleEn: "Hot-Blooded Mentor",
    rarity: 'SSR',
    cls: 'Healer',
    icon: 'P0013_figure_s.png',
    image: 'P0013_figure_m.png',
    awakenImage: 'P0013_Awaken_figure_m.png',
    descriptionZh: "冷艳、豪气，因为过去的一起意外调转职位，目前以半退休的形式留在MAJO，负责管理总部内的训练场。\n\n少年漫画狂粉，如果不小心被发现有在跟她追同一部作品，就会被强制拉入分享会至少半小时。把在MAJO获得的几乎全部收入都拿去买漫画，并且会为了搜集特典到处揪其他魔女团购。\n\n致力于在现实生活中重现经典漫画情节，因此会用热血、夸张的方式教导新进菜鸟，如果对方的反应不符合漫画常见发展，可能会被要求不断重来，直到她满意为止。曾被其他魔女调侃还好喜欢的不是少女漫画，不然每天早上行经转角，都要担心会被叼着吐司冲出来的她撞倒。\n\n纯漫画党，在这方面有着奇怪的坚持，就算是再喜欢的作品也坚决不看动画。",
    descriptionEn: "Cool and spirited, due to a past accident that caused a position change, she currently remains at MAJO in a semi-retired form, managing the training grounds within headquarters.\n\nA passionate shounen manga fan—if you're accidentally discovered following the same series as her, you'll be forcibly pulled into a sharing session for at least half an hour. She spends almost all her income from MAJO on manga and will organize group purchases with other witches everywhere to collect special editions.\n\nDedicated to recreating classic manga plots in real life, she teaches newcomers in a passionate, exaggerated manner. If their reactions don't match common manga developments, they might be required to keep repeating until she's satisfied. Other witches have teased that it's fortunate she doesn't like shoujo manga, or they'd have to worry about being knocked down by her charging around corners with toast in her mouth every morning.\n\nA manga purist with strange persistence in this regard—even for works she loves most, she absolutely refuses to watch the anime.",
    skills: {
      normal: [
        { nameZh: "罪戒幽光", nameEn: "Sinbound Dim Light", infoZh: "3段攻击敌人。", infoEn: "Attacks an enemy 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+90}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+90}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+150}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+90}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+90}%</color>伤害。\n三段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+150}%</color>伤害。" },
      ],
      class: [
        { nameZh: "赦罪冥典", nameEn: "Underworld Pardon", infoZh: "[治愈] 治疗范围内我方角色。", infoEn: "[Heal] Heals allies inside area.", detailEn: "[Heal]\nHeals allies within the designated circular area for <color=#C8B450>{HEAL:healAdjust+150}%</color> Health.", detailZh: "[治愈]\n治疗指定圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust+150}%</color>生命值。" },
        { nameZh: "赦罪冥典", nameEn: "Underworld Pardon", infoZh: "[治愈] 治疗范围内我方角色，并额外治疗一名我方角色。", infoEn: "[Heal] Heals allies inside area and additionally heals one ally.", detailEn: "[Heal]\nHeals allies within the designated circular area for <color=#C8B450>{HEAL:healAdjust_ex+150}%</color> Health, then heals one designated ally for <color=#C8B450>{HEAL:healAdjust2_ex+150}%</color> Health.", detailZh: "[治愈]\n治疗指定圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+150}%</color>生命值，随后治疗一名指定我方角色<color=#C8B450>{HEAL:healAdjust2_ex+150}%</color>生命值。" },
      ],
      auto: [
        { nameZh: "异端审判", nameEn: "Inquisition", infoZh: "[处决] 攻击一名敌人，并赋予全体我方额外伤害。", infoEn: "[Execution] Attacks one enemy and grants all allies additional damage boost.\n\n", detailEn: "[Execution]\nTrigger Condition: only affects targets that are knocked down\nDeals <color=#C8B450>{DAMAGE:damageAdjust+484}%</color> damage to one enemy and grants all allies <color=#C8B450>+10%</color> extra damage (lasts <color=#C8B450>12</color> seconds).", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+484}%</color>伤害，并赋予全体我方角色额外伤害<color=#C8B450>+10%</color>效果(持续<color=#C8B450>12</color>秒)。" },
        { nameZh: "异端审判", nameEn: "Inquisition", infoZh: "[处决] 攻击一名敌人并使其受到伤害提升，同时赋予全体我方额外伤害。", infoEn: "[Execution] Attacks one enemy and increases the damage they receive, while also granting all allies Bonus Damage.", detailEn: "[Execution]\nTrigger Conditions: only affects targets that are knocked down.\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+590}%</color> damage to one enemy and increases the damage they receive by <color=#C8B450>{BUFF:buffEffectAdjust_ex+16}%</color> (lasts <color=#C8B450>10</color> seconds), then grants all allies a Bonus Damage of <color=#C8B450>+10%</color> (lasts <color=#C8B450>15</color> seconds).", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+590}%</color>伤害，并使其受到伤害提升<color=#C8B450>{BUFF:buffEffectAdjust_ex+16}%</color>(持续<color=#C8B450>10</color>秒)，随后赋予全体我方角色额外伤害<color=#C8B450>+10%</color>效果(持续<color=#C8B450>15</color>秒)。" },
      ],
      extreme: [
        { nameZh: "血祭圣坛", nameEn: "Blood Sacrifice", infoZh: "治疗指定范围内我方角色，并创造一个治愈领域。", infoEn: "Heals allies inside area and creates a healing zone.", detailEn: "Heals allies inside a designated circular area for <color=#C8B450>{HEAL:healAdjust+76}%</color> Health and creates a circular zone (lasts <color=#C8B450>10</color> seconds), healing allies within the zone for <color=#C8B450>{HEAL:healAdjust+76}%</color> Health every <color=#C8B450>2</color> seconds. (The zone is not considered this character's skill)", detailZh: "治疗指定圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust+76}%</color>生命值，并创造一个圆形领域(持续<color=#C8B450>10</color>秒)，每<color=#C8B450>2</color>秒对范围内我方角色治疗<color=#C8B450>{HEAL:healAdjust+76}%</color>生命值。 (领域不视为本角色的技能)" },
      ],
      interference: [
        { nameZh: "圣祷加赋", nameEn: "Sacred Prayer's Gift", infoZh: "装备者攻击速度提升\n装备者施展职系技时，以装备者为圆心，赋予圆形范围内我方角色精神攻击克制率提升效果", infoEn: "Increases the character's Attack Speed\nWhen the character uses a Class Skill, grants allies within a circular area centered on the character increased Magic Attack rate", detailEn: "Character's Attack Speed <color=#C8B450>+{BUFF:buffEffectAdjust+14}%</color>\nWhen the character uses a Class Skill, grants allies within a circular area Magic Attack rate <color=#C8B450>+15%</color> (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+9}</color> second(s)(max <color=#C8B450>1</color> stack).", detailZh: "装备者攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust+14}%</color>\n装备者施展职系技时，赋予圆形范围内我方精神攻击克制率<color=#C8B450>+15%</color>(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+9}</color>秒)(最多<color=#C8B450>1</color>层)。" },
      ],
      passive: [
        { nameZh: "悲悯恩赐", nameEn: "Compassionate Gift", infoZh: "职系技治疗人族阵营角色时，治疗效果提升。", infoEn: "When a Class Skill heals characters of the human faction, Healing Effect is increased.", detailEn: "When a Class Skill heals allied Witches of the human faction, bonus healing <color=#C8B450>{BUFF:buffEffectAdjust+82}%</color>.", detailZh: "职系技治疗我方阵营为人的魔女时，额外治疗<color=#C8B450>{BUFF:buffEffectAdjust+82}%</color>。" },
      ],
    },
  },
  {
    id: 'P0014',
    slug: 'peseshet',
    nameZh: "佩瑟雪",
    nameEn: "Peseshet",
    nameJa: "ペーシェット",
    titleZh: "柔焰调停者",
    titleEn: "Gentle Flame Mediator",
    rarity: 'SR',
    cls: 'Healer',
    icon: 'P0014_Awaken_figure_s.png',
    image: 'P0014_Awaken_figure_m.png',
    awakenImage: 'P0014_Awaken_figure_m.png',
    descriptionZh: "拥有灿烂的金发、亲和力超群的笑容。在硝烟漫出的冲突中，总能如止水般抚平骚动、当个称职的和事佬。\n\n然而这份温柔是她在废墟中长出来的武装。童年时因「叙事力」觉醒而被双亲冷落的寒意，让她终身都在渴求回温。\n\n被原生家庭冷漠对待、甚至是抛弃的佩瑟雪，下意识想把MAJO当成第二个家。她迫切期待自己可以在这里得到爱，于是她开始扮演起 「温柔懂事又会照顾人的大姊姊」角色。\n\n经常下意识地情勒别人，认为用情勒的方式可以把自己在乎的人留在身边。\n\n有着「喜欢把蜡油滴在自己身上」的癖好。当那种被讨厌、被抛下的焦虑又缠上她的时候，她依赖在痛觉中找寻座标，并将这种「唯有痛着，才被爱着」的错觉，投射到她所珍视的对象身上。",
    descriptionEn: "Has brilliant golden hair and an exceptionally friendly smile. In conflicts filled with gunsmoke, she can always calm disturbances like still water and act as a competent mediator.\n\nHowever, this gentleness is armor she grew in ruins. The coldness of being neglected by her parents after awakening her \"narrative power\" in childhood makes her yearn for warmth throughout her life.\n\nHaving been treated coldly or even abandoned by her birth family, Peseshet subconsciously wants to treat MAJO as her second home. She desperately hopes to receive love here, so she begins playing the role of a \"gentle, understanding big sister who takes care of others.\"\n\nShe often subconsciously emotionally manipulates others, believing that emotional manipulation can keep the people she cares about by her side.\n\nShe has a habit of \"accidentally\" dripping candle wax on herself. When the anxiety of being hated and abandoned haunts her again, she relies on finding coordinates in pain and projects this illusion of \"only through pain can one be loved\" onto those she treasures.",
    skills: {
      normal: [
        { nameZh: "驱影净火", nameEn: "Shadow-Purging Flame", infoZh: "3段攻击敌人，再攻击范围内敌人。", infoEn: "Attacks an enemy 3 times, then attacks enemies in range.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+150}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+150}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust+150}%</color> damage to one enemy.\nHit 4: Deals <color=#C8B450>{DAMAGE:damageAdjust2+200}%</color> damage to enemies in a designated circular area.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+150}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+150}%</color>伤害。\n三段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+150}%</color>伤害。\n四段：对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+200}%</color>伤害。" },
      ],
      class: [
        { nameZh: "祈愿降临", nameEn: "Prayer's Descent", infoZh: "[普攻衍生][治愈] 治疗我方全体角色。", infoEn: "[Normal Attack Salvo][Heal] Heals all allies.", detailEn: "[Normal Attack Salvo][Heal]\nTrigger Conditions: Activates after completing a Normal Attack combo\nHeals all allies for <color=#C8B450>{HEAL:healAdjust+41}%</color> Health.", detailZh: "[普攻衍生][治愈]\n触发条件：完成普攻连段后发动\n治疗我方全体角色<color=#C8B450>{HEAL:healAdjust+41}%</color>生命值。" },
        { nameZh: "祈愿降临", nameEn: "Prayer's Descent", infoZh: "[普攻衍生][治愈] 治疗我方全体角色。", infoEn: "[Normal Attack Salvo][Heal] Heals all allies.", detailEn: "[Normal Attack Salvo][Heal]\nTrigger Conditions: Activates after completing a Normal Attack combo; can activate one additional time ignoring CD after using an Extreme Skill\nHeals all allies for <color=#C8B450>{HEAL:healAdjust_ex+60}%</color> Health.", detailZh: "[普攻衍生][治愈]\n触发条件：完成普攻连段后发动；施展极式后可无视冷却时间额外发动一次\n治疗我方全体角色<color=#C8B450>{HEAL:healAdjust_ex+60}%</color>生命值。" },
      ],
      auto: [
        { nameZh: "引路圣炬", nameEn: "Sacred Torch", infoZh: "[职系技衍生] 赋予全体我方角色极式额外伤害。", infoEn: "[Class Skill Salvo] Grants all allies an additional Extreme Skill damage increase.", detailEn: "[Class Skill Salvo]\nTrigger Condition: Activates after completing a Class skill\nGrants all allies an additional Extreme Skill damage Up effect  <color=#C8B450>{BUFF:buffEffectAdjust+8}%</color> (lasts <color=#C8B450>8</color> seconds).", detailZh: "[职系技衍生]\n触发条件：完成职系技后发动\n赋予全体我方角色极式额外伤害<color=#C8B450>{BUFF:buffEffectAdjust+8}%</color>效果(持续<color=#C8B450>8</color>秒)。" },
      ],
      extreme: [
        { nameZh: "护持天使", nameEn: "Guardian Angel", infoZh: "多次治愈一名我方角色，并赋予极式额外伤害。", infoEn: "Heals one ally multiple times and grants Extreme Skill additional damage.", detailEn: "Heals one ally in <color=#C8B450>3</color> stages, restoring <color=#C8B450>{HEAL:healAdjust+175}%</color>, <color=#C8B450>{HEAL:healAdjust2+200}%</color>, and <color=#C8B450>{HEAL:healAdjust3+270}%</color> Health respectively. The final heal inflicts additional Extreme Skill damage <color=#C8B450>+20%</color> effect (lasts <color=#C8B450>10</color> seconds).", detailZh: "对一名我方角色进行<color=#C8B450>3</color>段治愈，分别治疗<color=#C8B450>{HEAL:healAdjust+175}%</color>、<color=#C8B450>{HEAL:healAdjust2+200}%</color>与<color=#C8B450>{HEAL:healAdjust3+270}%</color>生命值。最后一段治愈将额外赋予目标极式额外伤害<color=#C8B450>+20%</color>效果(持续<color=#C8B450>10</color>秒)。" },
        { nameZh: "护持天使", nameEn: "Guardian Angel" },
      ],
      interference: [
        { nameZh: "灯守式", nameEn: "Lantern Guardian Stance", infoZh: "装备者防御力提升\n装备者极式蓄能速度提升", infoEn: "Increases the character's Defense\nIncreases the character's Extreme Skill charge speed", detailEn: "Character's Defense <color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>\nCharacter's Extreme Skill charge speed <color=#C8B450>+{BUFF:buffEffectAdjust2+7}%</color>", detailZh: "装备者防御力<color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>\n装备者极式蓄能速度<color=#C8B450>+{BUFF:buffEffectAdjust2+7}%</color>" },
      ],
      passive: [
        { nameZh: "烛焰盛", nameEn: "Blazing Candleflame", infoZh: "若自身生命值高于50%，攻击速度提升。", infoEn: "If own Health is above 50%, Attack Speed is increased.", detailEn: "If own Health is above 50%, grants self Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust+19}%</color>.", detailZh: "若自身生命值高于50%，赋予自身攻击速度<color=#C8B450>{BUFF:buffEffectAdjust+19}%</color>。" },
        { nameZh: "烛焰盛", nameEn: "Blazing Candleflame", infoZh: "若自身生命值高于50%或80%，攻击速度获得不同程度提升。", infoEn: "If own Health is above 50% or 80%, Attack Speed is increased by varying degrees。", detailEn: "If own Health is above 50%, grants self Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust_ex+25}%</color>; if own Health is above 80%, grants self additional Attack Speed <color=#C8B450>{BUFF:buffEffectAdjust2_ex+15}%</color>.", detailZh: "若自身生命值高于50%，赋予自身攻击速度<color=#C8B450>{BUFF:buffEffectAdjust_ex+25}%</color>；若自身生命值高于80%，赋予自身攻击速度额外提升<color=#C8B450>{BUFF:buffEffectAdjust2_ex+15}%</color>。" },
      ],
    },
  },
  {
    id: 'P0015',
    slug: 'garana',
    nameZh: "伽岚奈",
    nameEn: "Garana",
    nameJa: "ガラナ",
    titleZh: "震世之声",
    titleEn: "World-Shaking Voice",
    rarity: 'SSR',
    cls: 'Tank',
    icon: 'P0015_Awaken_figure_s.png',
    image: 'P0015_Awaken_figure_m.png',
    awakenImage: 'P0015_Awaken_figure_m.png',
    descriptionZh: "我行我素、不拘小节，并不是不在乎身边的人，只是容易因为沉迷在自己的兴趣中而忽略周遭的人事物。\n\n对音乐重度沉迷，耳机音量总是大到跟直接外放差不多，神奇的是对重要资讯跟音乐相关的话题一样能听得很清楚，针对她音乐品味的坏话也是。从小就立志成为专职的音乐制作人，但在被现实打败的情况下，只好加入MAJO以维持生计。\n\n日常对话中充斥着「蛤？」、「你说什么」、「大声一点」，并且因为耳机的缘故讲话音量也非常大声。在某些时刻会碰巧播放跟当下情况相称的谜之背景音乐，被部分人戏称为行走BGM。\n\n对音乐以外的声音也很敏感，能透过细微的声响预判危机与周遭变化，必要的时候会拿下耳机，在紧要关头展露可靠的一面。",
    descriptionEn: "Goes her own way and doesn't sweat the small stuff. It's not that she doesn't care about people around her, but she easily neglects surrounding people and things due to being absorbed in her own interests.\n\nShe's heavily addicted to music, with headphone volume always loud enough to be like playing externally. Mysteriously, she can still hear important Info and music-related topics clearly, including bad-mouthing about her musical taste. She aspired from childhood to become a professional music producer, but after being defeated by reality, had to join MAJO to make ends meet.\n\nDaily conversations are filled with \"Huh?\", \"What did you say\", \"Speak louder,\" and she also speaks very loudly due to her headphones. At certain moments, she coincidentally plays mysterious background Music that matches the current situation, earning her the nickname \"walking BGM\" from some people.\n\nShe's also sensitive to sounds other than music, able to predict crises and surrounding changes through subtle sounds. When necessary, she'll remove her headphones and show her reliable side at crucial moments.",
    skills: {
      normal: [
        { nameZh: "环音脉冲", nameEn: "Resonant Pulse", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+65}%</color> damage to enemies in a circular area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+65}%</color> damage to enemies in a circular area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+115}%</color> damage to enemies in a circular area.", detailZh: "一段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+65}%</color>伤害。\n二段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+65}%</color>伤害。\n三段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+115}%</color>伤害。" },
      ],
      class: [
        { nameZh: "音爆", nameEn: "Sonic Blast", infoZh: "[格挡反击] 攻击范围内敌人并附加晕眩。", infoEn: "[Block Counter] Attacks enemies inside area and inflicts Dizzy.", detailEn: "[Block Counter]\nTrigger Condition: Activates after blocking, only if a target is within the area\nDeals <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage to enemies in a frontal fan-shaped area and inflicts Dizzy (lasts <color=#C8B450>1</color> seconds).", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害，并附加晕眩效果(持续<color=#C8B450>1</color>秒)。" },
        { nameZh: "音爆", nameEn: "Sonic Blast", infoZh: "[格挡反击] 攻击范围内敌人并附加晕眩。", infoEn: "[Block Counter] Attacks enemies inside area and inflicts Dizzy.", detailEn: "[Block Counter]\nTrigger Condition: Activates after blocking, only if a target is within the area\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+258}%</color> damage to enemies in a frontal fan-shaped area and inflicts Dizzy (lasts <color=#C8B450>1</color> seconds).", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+258}%</color>伤害，并附加晕眩效果(持续<color=#C8B450>1</color>秒)。" },
      ],
      auto: [
        { nameZh: "破空声浪", nameEn: "Sound-Breaking Noise", infoZh: "[职系技衍生] [极式衍生] 攻击范围内敌人，并赋予额外伤害降低效果。", infoEn: "[Class Skill Salvo] [Ultimate Salvo] Attacks enemies within range and inflicts additional damage reduction.", detailEn: "[Class Skill Salvo] [Ultimate Salvo]\nTrigger Condition: Activates after using an ultimate or Class skill\nDeals <color=#C8B450>{DAMAGE:damageAdjust+450}%</color> damage to enemies in a fan-shaped area ahead and grants them Bonus Damage <color=#C8B450>-20%</color> (lasts <color=#C8B450>8</color> seconds).", detailZh: "[职系技衍生] [极式衍生]\n触发条件：施展极式或职系技后发动\n对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+450}%</color>伤害，并赋予其额外伤害<color=#C8B450>-20%</color>效果(持续<color=#C8B450>8</color>秒)。" },
        { nameZh: "破空声浪", nameEn: "Sound-Breaking Noise", infoZh: "[职系技衍生] [极式衍生] 攻击范围内敌人，并赋予额外伤害降低效果。", infoEn: "[Class Skill Salvo] [Ultimate Salvo] Attacks enemies within range and inflicts additional damage reduction.", detailEn: "[Class Skill Salvo] [Ultimate Salvo]\nTrigger Condition: Activates after using an Extreme or Class skill\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+470}%</color> damage to enemies in a fan-shaped area ahead and grants them Bonus Damage <color=#C8B450>-30%</color> (lasts <color=#C8B450>12</color> seconds).", detailZh: "[职系技衍生] [极式衍生]\n触发条件：施展极式或职系技后发动\n对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+470}%</color>伤害，并赋予其额外伤害<color=#C8B450>-30%</color>效果(持续<color=#C8B450>12</color>秒)。" },
      ],
      extreme: [
        { nameZh: "狂啸轰鸣", nameEn: "Roaring Howl", infoZh: "以自身为中心多段攻击范围内敌人，附加嘲讽与晕眩效果，并赋予范围内我方角色防御力上升。", infoEn: "Attacks enemies inside area multiple times centered on self, inflicting Taunt and Dizzy, and grants a Defense increase to allies inside area.", detailEn: "Centered on self, deals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+480}%</color> damage to enemies in the circular area, each hit carrying additional Taunt and Dizzy (lasts <color=#C8B450>2.5</color> seconds). Simultaneously grants allies inside area a Defense <color=#C8B450>+{BUFF:buffEffectAdjust+15.5}%</color> effect (lasts <color=#C8B450>20</color> seconds).", detailZh: "以自身为中心，对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust+480}%</color>伤害，每次攻击皆带有额外嘲讽与晕眩(持续<color=#C8B450>2.5</color>秒)效果。同时赋予范围内我方角色防御力<color=#C8B450>+{BUFF:buffEffectAdjust+15.5}%</color>效果(持续<color=#C8B450>20</color>秒)。" },
      ],
      interference: [
        { nameZh: "叠频共振", nameEn: "Stacked Resonance", infoZh: "装备者物理攻击克制率提升\n装备者格挡后物理攻击克制率提升", infoEn: "Increases the character's Physical Attack rate\nIncreases the character's Physical Attack rate after blocking", detailEn: "Character's Physical Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\nAfter the character blocks, character's Physical Attack rate <color=#C8B450>+{STACKABLEBUFF:P0015_InterferenceSkillEffects_PhysicsPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>5</color> seconds)", detailZh: "装备者物理攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\n装备者格挡后，装备者物理攻击克制率<color=#C8B450>+{STACKABLEBUFF:P0015_InterferenceSkillEffects_PhysicsPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>5</color>秒)" },
      ],
      passive: [
        { nameZh: "音浪震耳", nameEn: "Earsplitting Sound Wave", infoZh: "发动最后一段普攻时，提升范围内我方角色防御力。", infoEn: "When the final hit of the Normal Attack is used, increases the Defense of allies within area.", detailEn: "When the final Normal Attack hit is used, grants allies within a circular area centered on self Defense <color=#C8B450>+{STACKABLEBUFF:P0015_PassiveSkillEffects_DefUp_Lv1:stackableBuffIdAdjust:0}%</color> (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>8</color> seconds).", detailZh: "发动最后一段普攻时，赋予以自身为中心之圆形范围内我方角色防御力<color=#C8B450>+{STACKABLEBUFF:P0015_PassiveSkillEffects_DefUp_Lv1:stackableBuffIdAdjust:0}%</color>效果(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>8</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0016',
    slug: 'huarui',
    nameZh: "华蕊",
    nameEn: "Huarui",
    nameJa: "ファルイ",
    titleZh: "赤街女王",
    titleEn: "Red District Queen",
    rarity: 'SSR',
    cls: 'Fighter',
    icon: 'P0016_figure_s.png',
    image: 'P0016_figure_m.png',
    awakenImage: 'P0016_Awaken_figure_m.png',
    descriptionZh: "红灯区的秩序管理者。\n\n一开始是因为漂亮的脸蛋而被店家相中，心性傲骨的她不喜欢陪笑，勉为其难先当调酒师；但常常看不惯酒客欺负店里的小姐而拿家伙跟酒客干架……结果最后反而莫名其妙成为了红灯区的秩序管理者。\n\n但她从不向红灯区的女人们收保护费，而是仅要求「让她欣赏极品美腿」就好。小姐们私下叫她「腿姐」，因为她管教酒客的招式永远是——踹断腿。\n\n她的恋腿癖是公开的秘密。忙完一天的琐事，非要进行全套的腿部保养：去角质、推油、拉筋、冰敷，像在供奉一对神器。\n\n最后，认识华蕊的人都知道，她的信念就是——「腿是人的第二张脸」。",
    descriptionEn: "The keeper of order of the red-light district.\n\nInitially scouted by establishments for her beautiful face, her proud nature made her dislike forced smiles, so she reluctantly worked as a bartender first. But she often couldn't stand seeing customers bully the girls in the shop and would grab weapons to fight the customers... Eventually, she somehow became the keeper of order of the red-light district.\n\nBut she never collects protection fees from the women in the red-light district, only requiring others to \"let her admire exquisitely beautiful legs.\" The girls privately call her \"Leg Sister\" because her method of disciplining customers is always kicking and breaking their legs.\n\nHer leg fetish is an open secret. After finishing the day's trivial matters, she must perform a complete care routine for her lower limbs: exfoliation, oil massage, stretching, ice compress, as if worshipping a pair of divine artifacts.\n\nFinally, everyone who knows Huarui knows her core belief: \"legs are a person's second face.\"",
    skills: {
      normal: [
        { nameZh: "疾莲步", nameEn: "Rapid Vine Step", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+40}%</color> damage to enemies in a rectangular area ahead.\nHit 2: Deals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+40}%</color> damage to enemies in a rectangular area ahead.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+68}%</color> damage to enemies in a fan-shaped area.", detailZh: "一段：对面前矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+40}%</color>伤害。\n二段：对面前矩形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust+40}%</color>伤害。\n三段：对扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+68}%</color>伤害。" },
      ],
      class: [
        { nameZh: "燎原掌", nameEn: "Wildfire Palm", infoZh: "[闪避反击] 多段攻击范围内敌人，并赋予自身攻击速度提升。", infoEn: "[Dodge Counter] Attacks enemies inside area multiple times and grants self increased Attack Speed.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nDeals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+58}%</color> damage to enemies in a rectangular area and grants self Attack Speed <color=#C8B450>+{BUFF:buffEffectAdjust+16}%</color> effect (lasts <color=#C8B450>9</color> seconds).", detailZh: "[闪避反击]\n触发条件：闪避后发动\n对矩形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust+58}%</color>伤害，并赋予自身攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust+16}%</color>效果(持续<color=#C8B450>9</color>秒)。" },
        { nameZh: "燎原掌", nameEn: "Wildfire Palm", infoZh: "[闪避反击] 多段攻击范围内敌人，并赋予自身攻击速度与暴击伤害提升。", infoEn: "[Dodge Counter] Attacks enemies inside area multiple times and grants self increased Attack Speed and critical damage.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nDeals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+75}%</color> damage to enemies in a rectangular area and grants self attack speed <color=#C8B450>+{BUFF:buffEffectAdjust_ex+32}%</color> and critical damage <color=#C8B450>+25%</color> (lasts <color=#C8B450>9</color> seconds).", detailZh: "[闪避反击]\n触发条件：闪避后发动\n对矩形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+75}%</color>伤害，并赋予自身攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust_ex+32}%</color>与暴击伤害<color=#C8B450>+25%</color>效果(持续<color=#C8B450>9</color>秒)。" },
      ],
      auto: [
        { nameZh: "破阵腿", nameEn: "Leg Cruncher", infoZh: "[普攻衍生] 攻击范围内敌人。", infoEn: "[Normal Attack Salvo] Attacks enemies within range.", detailEn: "[Normal Attack Salvo]\nTrigger Condition: Activates after completing the last hit of a Normal attack\nDeals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+103}%</color> damage to enemies within a circular area.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust+103}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "坠天破", nameEn: "Heaven Fallen", infoZh: "移动至指定地点并随范围扩张多段攻击敌人。最后使特攻于一段时间内冷却时间归零。", infoEn: "Moves to the designated location and attacks enemies multiple times as the area expands. Finally sets the Special Attack CD to zero for a period of time.", detailEn: "Moves to the designated location, then launches <color=#C8B450>5</color> consecutive attacks against enemies in the circular area, dealing <color=#C8B450>{DAMAGE:damageAdjust+510}%</color>, <color=#C8B450>{DAMAGE:damageAdjust2+410}%</color>, <color=#C8B450>{DAMAGE:damageAdjust3+310}%</color>, <color=#C8B450>{DAMAGE:damageAdjust4+210}%</color>, and <color=#C8B450>{DAMAGE:damageAdjust5+110}%</color> damage respectively.", detailZh: "移动至指定地点，随后对圆形范围内敌方发动<color=#C8B450>5</color>次连续攻击，分别造成<color=#C8B450>{DAMAGE:damageAdjust+510}%</color>、<color=#C8B450>{DAMAGE:damageAdjust2+410}%</color>、<color=#C8B450>{DAMAGE:damageAdjust3+310}%</color>、<color=#C8B450>{DAMAGE:damageAdjust4+210}%</color>与<color=#C8B450>{DAMAGE:damageAdjust5+110}%</color>伤害。" },
        { nameZh: "坠天破", nameEn: "Heaven Fallen", infoZh: "移动至指定地点并随范围扩张多段攻击敌人。最后赋予自身暴击率上升，并立即重置特攻冷却时间。", infoEn: "Moves to the designated location and attacks enemies multiple times as the area expands. Finally grants self a Critical Rate increase and immediately resets the Special Attack CD.", detailEn: "Moves to the designated location, then launches <color=#C8B450>5</color> consecutive attacks against enemies in the circular area, dealing <color=#C8B450>{DAMAGE:damageAdjust_ex+510}%</color>, <color=#C8B450>{DAMAGE:damageAdjust2_ex+410}%</color>, <color=#C8B450>{DAMAGE:damageAdjust3_ex+310}%</color>, <color=#C8B450>{DAMAGE:damageAdjust4_ex+210}%</color>, and <color=#C8B450>{DAMAGE:damageAdjust5_ex+110}%</color> damage respectively. Finally fixes the maximum Special Attack CD at <color=#C8B450>0</color> seconds (lasts <color=#C8B450>12</color> seconds).", detailZh: "移动至指定地点，随后对圆形范围内敌方发动<color=#C8B450>5</color>次连续攻击，分别造成<color=#C8B450>{DAMAGE:damageAdjust_ex+510}%</color>、<color=#C8B450>{DAMAGE:damageAdjust2_ex+410}%</color>、<color=#C8B450>{DAMAGE:damageAdjust3_ex+310}%</color>、<color=#C8B450>{DAMAGE:damageAdjust4_ex+210}%</color>与<color=#C8B450>{DAMAGE:damageAdjust5_ex+110}%</color>伤害。最后使特攻最大冷却时间固定为<color=#C8B450>0</color>秒(持续<color=#C8B450>12</color>秒)。" },
      ],
      interference: [
        { nameZh: "步步碎影", nameEn: "Step-by-Step Shadow Shattering", infoZh: "装备者攻击速度提升\n装备者每次施展极式后，装备者攻击速度提升效果", infoEn: "Increases the character's Attack Speed\nIncreases the character's Attack Speed each time the character uses an Extreme Skill", detailEn: "Character's Attack Speed <color=#C8B450>+{BUFF:buffEffectAdjust+4}%</color>.\nEach time the character uses an Extreme Skill, Attack Speed <color=#C8B450>+{STACKABLEBUFF:P0016_InterferenceSkillEffects_AtkSpeedUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>30</color> seconds).", detailZh: "装备者攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust+4}%</color>。\n每次装备者施展极式后，装备者攻击速度<color=#C8B450>+{STACKABLEBUFF:P0016_InterferenceSkillEffects_AtkSpeedUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>30</color>秒)。" },
      ],
      passive: [
        { nameZh: "漫舞惊锋", nameEn: "Dancing Blade Surprise", infoZh: "提升自身攻击力，并使第二段普攻后可衔接特攻。", infoEn: "Increases own Attack and allows a Special Attack to follow after the second Normal Attack.", detailEn: "Grants self Attack <color=#C8B450>+{BUFF:buffEffectAdjust+16}%</color>. After completing the second Normal Attack, a Special Attack can also be used.", detailZh: "赋予自身攻击力<color=#C8B450>+{BUFF:buffEffectAdjust+16}%</color>。完成第二段普攻后也可施放特攻。" },
      ],
    },
  },
  {
    id: 'P0017',
    slug: 'carmen',
    nameZh: "珂漫",
    nameEn: "Carmen",
    nameJa: "カルマン",
    titleZh: "缱绻烟霞",
    titleEn: "Swirling Smoke",
    rarity: 'SSR',
    cls: 'Tank',
    icon: 'P0017_figure_s.png',
    image: 'P0017_figure_m.png',
    awakenImage: 'P0017_Awaken_figure_m.png',
    descriptionZh: "随心所欲、遵从着自己的意念和欲望行事。会很突然地迷上特定事物，从不吝于展现自己的热情，但同时也很三分钟热度，一旦稍微感到厌倦就会马上抽离、转而追求新的目标，每隔一段时间就会发现她的兴趣和喜好跟以前完全不一样。\n\n曾经有过开水烟店的想法，为此不惜高额贷款，但很快就因为对开店感到腻了而结束营业，最后为了还债加入MAJO。\n\n对喜欢的对象会热烈表示亲近甚至展开追求，热度退去之后却可能对对方没太多印象。\n\n喜好飘忽的她唯独着迷于云雾缭绕的感觉与各种烟味，因此对烟情有独钟。据说如果清醒的时候超过半小时没有抽烟，就会精神错乱开始乱烧东西制造烟雾。经常触发禁烟场所的警报器。",
    descriptionEn: "Acting according to her whims, following her own thoughts and desires. She'll suddenly become obsessed with specific things, never hesitant to show her passion, but also has a short attention span. Once she feels slightly bored, she immediately withdraws and pursues new goals. Every so often, you'll find her interests and preferences completely different from before.\n\nShe once had the idea of opening a hookah shop, taking out high loans for it, but quickly closed because she got tired of running a shop. She finally joined MAJO to pay off debts.\n\nShe'll enthusiastically show affection and even pursue people she likes, but after the passion fades, she might not have much impression of them.\n\nDespite her fickle preferences, she's uniquely fascinated by the feeling of swirling clouds and mist and various smoke scents, so she has a special fondness for cigarettes. It's said that if she's awake for more than half an hour without smoking, she'll become mentally disordered and start burning things randomly to create smoke. She frequently triggers smoke detectors in no-smoking areas.",
    skills: {
      normal: [
        { nameZh: "烟幕蔽天", nameEn: "Smoke Screen Shroud", infoZh: "3段攻击范围内敌人，并治疗范围内我方角色。", infoEn: "Attacks enemies within range in 3 hits, and heals allied characters within range.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+50}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust+30}%</color> Health.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+50}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust+30}%</color> Health.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust+50}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust+30}%</color> Health.", detailZh: "一段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+50}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust+30}%</color>生命值。\n二段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+50}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust+30}%</color>生命值。\n三段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+50}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust+30}%</color>生命值。" },
        { nameZh: "烟幕蔽天", nameEn: "Smoke Screen Shroud", infoZh: "3段攻击范围内敌人，并治疗范围内我方角色，每段攻击额外缩短自身特攻冷却时间。", infoEn: "Attack enemies in the area in 3 hits and heal allied characters in the area, additionally reducing self Special CD after each hit.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust_ex+30}%</color> Health, reducing Special CD by <color=#C8B450>1</color> second.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust_ex+30}%</color> Health, reducing Special CD by <color=#C8B450>1</color> second.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color> damage to enemies in a circular area and heals allied characters in the area for <color=#C8B450>{HEAL:healAdjust_ex+30}%</color> Health, reducing Special CD by <color=#C8B450>1</color> second.", detailZh: "一段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+30}%</color>生命值，特攻冷却时间缩短<color=#C8B450>1</color>秒。\n二段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+30}%</color>生命值，特攻冷却时间缩短<color=#C8B450>1</color>秒。\n三段：对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color>伤害，并治疗范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+30}%</color>生命值，特攻冷却时间缩短<color=#C8B450>1</color>秒。" },
      ],
      class: [
        { nameZh: "氤氲突袭", nameEn: "Misty Ambush", infoZh: "[格挡反击] 攻击扇形范围内敌人，并使其受到的伤害降低。", infoEn: "[Parry Counter] Attacks enemies in a fan-shaped area and reduces the damage they deal.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within Range\nDeals <color=#C8B450>{DAMAGE:damageAdjust+215}%</color> damage to enemies in a fan-shaped area and reduces their damage dealt by <color=#C8B450>20%</color> (lasts <color=#C8B450>10</color> seconds).", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对扇形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+215}%</color>伤害，并使其造成的伤害降低<color=#C8B450>20%</color>(持续<color=#C8B450>10</color>秒)。" },
      ],
      auto: [
        { nameZh: "残烟随行", nameEn: "Lingering Smoke Escort", infoZh: "移动至血量最低的我方角色身旁，回复其生命值，并嘲讽周围敌人。", infoEn: "Moves to the ally with the lowest Health, restores their Health, and taunts nearby enemies.", detailEn: "Moves to the allied character with the lowest Health, restores <color=#C8B450>{HEAL:healAdjust+148}%</color> of their Health, and taunts enemies in a circular area.", detailZh: "移动至血量最低的我方角色身旁，回复其<color=#C8B450>{HEAL:healAdjust+148}%</color>生命值，并嘲讽圆形范围内敌人。" },
      ],
      extreme: [
        { nameZh: "迷雾袭绕", nameEn: "Mist Assault", infoZh: "赋予圆形范围内我方韧性与防御力提升，并攻击周围敌人。", infoEn: "Grants increased Toughness and Defense to allies in a circular area, and attacks nearby enemies.", detailEn: "Grants allied characters in a circular area Toughness <color=#C8B450>+10</color> and Defense <color=#C8B450>{BUFF:buffEffectAdjust+26.5}%</color> (lasts <color=#C8B450>30</color> seconds). Deals <color=#C8B450>{DAMAGE:damageAdjust+50}%</color> damage to enemies in the circular area, then deals <color=#C8B450>{DAMAGE:damageAdjust2+100}%</color> damage and <color=#C8B450>40</color> Stagger to enemies in a fan-shaped area.", detailZh: "赋予圆形范围内我方角色韧性<color=#C8B450>+10</color>、防御力<color=#C8B450>{BUFF:buffEffectAdjust+26.5}%</color>效果(持续<color=#C8B450>30</color>秒)。对圆形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+50}%</color>伤害，随后对扇形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+100}%</color>伤害与<color=#C8B450>40</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "卷烟之效", nameEn: "Rolling Smoke Effect", infoZh: "装备者防御力提升。\n装备者发动奥义时，对范围内敌人施加位移效果抗性降低。", infoEn: "Equip effect: increases the wearer's Defense.\nWhen the wearer uses their Extreme Skill, apply a knockback resistance reduction effect to enemies in range.", detailEn: "Character's Defense <color=#C8B450>{BUFF:buffEffectAdjust+10}%</color>.\nWhen the character uses their Extreme Skill, applies a displacement resistance reduction <color=#C8B450>{BUFF:buffEffectAdjust+35}%</color> effect to enemies in a circular area for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+9}</color> seconds).", detailZh: "装备者防御力<color=#C8B450>{BUFF:buffEffectAdjust+10}%</color>。\n装备者发动奥义时，对圆形范围内敌人施加位移效果抗性降低<color=#C8B450>{BUFF:buffEffectAdjust+35}%</color>效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+9}</color>秒)。" },
        { nameZh: "卷烟之效", nameEn: "Rolling Smoke Effect", infoZh: "装备者防御力大幅提升。\n装备者发动奥义时，对更大范围内敌人施加更强的位移效果抗性降低。", infoEn: "Equip effect: significantly increases the wearer's Defense.\nWhen the wearer uses their Extreme Skill, apply a stronger knockback resistance reduction effect to enemies in a larger area.", detailEn: "Character's Defense <color=#C8B450>{BUFF:buffEffectAdjust_ex+15}%</color>.\nWhen the character uses their Extreme Skill, applies a displacement resistance reduction <color=#C8B450>{BUFF:buffEffectAdjust_ex+50}%</color> effect to enemies in a circular area for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust_ex+11}</color> seconds).", detailZh: "装备者防御力<color=#C8B450>{BUFF:buffEffectAdjust_ex+15}%</color>。\n装备者发动奥义时，对圆形范围内敌人施加位移效果抗性降低<color=#C8B450>{BUFF:buffEffectAdjust_ex+50}%</color>效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust_ex+11}</color>秒)。" },
      ],
      passive: [
        { nameZh: "烟云成瘾", nameEn: "Smoke-Addicted", infoZh: "完成最后一段普攻后，自身攻击速度提升。", infoEn: "After completing the final hit of a Normal attack, increases own Attack Speed.", detailEn: "After completing the final Normal attack, grants self Attack Speed <color=#C8B450>+30%</color> for 1 stack (max <color=#C8B450>7</color> stacks) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+20}</color> seconds).", detailZh: "完成最后一段普攻后，赋予自身攻击速度<color=#C8B450>+30%</color>效果1层(最大<color=#C8B450>7</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+20}</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0018',
    slug: 'lumi',
    nameZh: "洛米",
    nameEn: "Lumi",
    nameJa: "ロミ",
    titleZh: "狂色涂鸦",
    titleEn: "Wild Color Graffiti",
    rarity: 'SSR',
    cls: 'Mage',
    icon: 'P0018_figure_s.png',
    image: 'P0018_figure_m.png',
    awakenImage: 'P0018_Awaken_figure_m.png',
    descriptionZh: "童年时经历过一场颜料化工厂爆炸事故、并成为事故中唯一的幸存者，被救出时全身染满斑斓色彩。\n\n从那之后开始，她便能看见颜色的情绪，甚至听得见颜料在低声说话，世界在她眼中变得吵杂又鲜明。离开收容所后，她加入当地涂鸦帮，在街头度过大部分青春岁月，与自己的涂鸦对话，偶尔陷入近乎病态的沉迷。\n\n因为感知与常人不同，她养成活泼调皮的性格，讨厌规矩，却不是真正的叛逆，倒像是用玩乐的方式来挑战界线。加入MAJO后，曾尝试以「颜色」进行现场侦查，但线索准确率极低，让人怀疑她听见的声音是否只是她脑内的幻觉。\n\n时常说一些如「你说这句话，不觉得太BOOM了吗！」等自以为流行的用语，但其实大部分是没人听得懂的小团体自创词。",
    descriptionEn: "During childhood, she experienced a paint chemical factory explosion and became the sole survivor of the accident. When rescued, her entire body was stained with colorful hues.\n\nFrom then on, she could see colors' emotions and even hear paint whispering, making the world noisy yet vivid in her eyes. After leaving the shelter, she joined a local graffiti gang and spent most of her youth on the streets, conversing with her own graffiti and occasionally falling into near-pathological obsession.\n\nBecause her perception differs from ordinary people, she developed a lively, mischievous personality. She hates rules but isn't truly rebellious—rather, she challenges boundaries through play. After joining MAJO, she tried using \"colors\" for field investigation, but the clue accuracy rate was extremely low, making people wonder if the voices she hears are just hallucinations in her head.\n\nShe often says things like \"Don't you think that statement is too BOOM?!\" and other supposedly trendy expressions, but most are incomprehensible terms created by small groups.",
    skills: {
      normal: [
        { nameZh: "涂鸦开始！", nameEn: "Graffiti Time!", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+77}%</color> damage to enemies in a circular area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+77}%</color> damage to enemies in a circular area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust+77}%</color> damage to enemies in a circular area.", detailZh: "一段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+77}%</color>伤害。\n二段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+77}%</color>伤害。\n三段：对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+77}%</color>伤害。" },
      ],
      class: [
        { nameZh: "填充喷漆罐", nameEn: "Spray Can Refill", infoZh: "[充能增幅][普攻衍生] 赋予自身普攻额外伤害提升。", infoEn: "[Charge Amp][Normal Attack Salvo] Grants self increased Bonus Damage on normal attacks.", detailEn: "[Charge Amp][Normal Attack Salvo]\nTrigger Condition: Activates after completing the last normal attack segment\nGrants self normal attack Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust+21}%</color> effect (lasts <color=#C8B450>8</color> seconds), this action can be triggered <color=#C8B450>3</color> times total.", detailZh: "[充能增幅][普攻衍生]\n触发条件：完成最后一段普攻后施展\n赋予自身普攻额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust+21}%</color>效果(持续<color=#C8B450>8</color>秒)，此行为共触发<color=#C8B450>3</color>次。" },
        { nameZh: "填充喷漆罐", nameEn: "Spray Can Refill", infoZh: "[充能增幅][普攻衍生] 赋予自身普攻额外伤害与闪避率提升。", infoEn: "[Charge Amp][Normal Attack Salvo] Grants self Bonus Damage on normal attacks and increased evasion rate.", detailEn: "[Charge Amp][Normal Attack Salvo]\nTrigger Condition: Activates after completing the last normal attack segment\nGrants self normal attack Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust_ex+26}%</color> effect (lasts <color=#C8B450>8</color> seconds), this triggers <color=#C8B450>3</color> times total, and on the final trigger additionally grants evasion rate <color=#C8B450>+30%</color> effect (lasts <color=#C8B450>8</color> seconds).", detailZh: "[充能增幅][普攻衍生]\n触发条件：完成最后一段普攻后施展\n赋予自身普攻额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust_ex+26}%</color>效果(持续<color=#C8B450>8</color>秒)，此行为共触发<color=#C8B450>3</color>次，且最后一次触发时额外赋予闪避率<color=#C8B450>+30%</color>效果(持续<color=#C8B450>8</color>秒)。" },
      ],
      auto: [
        { nameZh: "泼色恶作剧", nameEn: "Colorful Mischief", infoZh: "攻击范围内敌人，并创造一个攻击领域。", infoEn: "Attacks enemies within range and creates an attack zone.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust+75}%</color> damage to enemies within a designated circular area and creates a circular zone at the target location (lasts <color=#C8B450>3</color> seconds). The zone deals <color=#C8B450>{DAMAGE:damageAdjust+75}%</color> damage to enemies within range after <color=#C8B450>2</color> seconds and adds a bonus <color=#C8B450>20</color> Stagger value. (Zone is not considered this character's Skills)", detailZh: "对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+75}%</color>伤害，并于目标位置创造一个圆形领域(持续<color=#C8B450>3</color>秒)。领域于<color=#C8B450>2</color>秒后对范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+75}%</color>伤害，并附加额外<color=#C8B450>20</color>失衡值。 (领域不视为本角色的技能)" },
      ],
      extreme: [
        { nameZh: "危险标记", nameEn: "Danger Mark", infoZh: "攻击多处指定范围内敌人，最后发动强力攻击。", infoEn: "Attacks enemies in multiple designated areas, then unleashes a powerful strike at the end.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust+245}%</color> damage to enemies in <color=#C8B450>3</color> designated rectangular areas, then deals <color=#C8B450>{DAMAGE:damageAdjust2+350}%</color> damage to enemies in those <color=#C8B450>3</color> rectangular areas.", detailZh: "对<color=#C8B450>3</color>处指定矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+245}%</color>伤害，再对该<color=#C8B450>3</color>处矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+350}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "疾行泼溅", nameEn: "Swift Splash", infoZh: "装备者物理攻击暴击率提升\n装备者每次发动职系技后，装备者暴击率提升", infoEn: "Increases the character's Physical Attack Critical Rate\nIncreases the character's Critical Rate each time the character uses a Class Skill", detailEn: "Character's Critical Rate <color=#C8B450>+{BUFF:buffEffectAdjust+9}%</color>\nEach time the character uses a Class Skill, their Critical Rate increases by <color=#C8B450>+{STACKABLEBUFF:P0018_InterferenceSkillEffects_CriRateUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>3</color> stacks) (lasts <color=#C8B450>20</color> seconds)", detailZh: "装备者暴击率<color=#C8B450>+{BUFF:buffEffectAdjust+9}%</color>\n每次装备者发动职系技后，装备者暴击率<color=#C8B450>+{STACKABLEBUFF:P0018_InterferenceSkillEffects_CriRateUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>3</color>层)(持续<color=#C8B450>20</color>秒)" },
      ],
      passive: [
        { nameZh: "技巧性涂鸦", nameEn: "Skillful Graffiti", infoZh: "闪避后提升自身攻击速度。", infoEn: "After evading, increases self Attack Speed.", detailEn: "After evading, grants self Attack Speed <color=#C8B450>+{BUFF:buffEffectAdjust+63}%</color> (lasts <color=#C8B450>3</color> seconds).", detailZh: "闪避后，赋予自身攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust+63}%</color>效果(持续<color=#C8B450>3</color>秒)。" },
        { nameZh: "技巧性涂鸦", nameEn: "Skillful Graffiti", infoZh: "闪避后提升自身攻击速度，并缩短特攻冷却时间。", infoEn: "After dodging, increases own Attack Speed and reduces Special Attack CD.", detailEn: "After dodging, grants self Attack Speed <color=#C8B450>+{BUFF:buffEffectAdjust_ex+73}%</color> (lasts <color=#C8B450>3</color> seconds), and reduces Special Attack CD by <color=#C8B450>2</color> seconds.", detailZh: "闪避后，赋予自身攻击速度<color=#C8B450>+{BUFF:buffEffectAdjust_ex+73}%</color>效果(持续<color=#C8B450>3</color>秒)，并使特攻冷却时间缩短<color=#C8B450>2</color>秒。" },
      ],
    },
  },
  {
    id: 'P0019',
    slug: 'xini',
    nameZh: "希霓",
    nameEn: "Xini",
    nameJa: "シーニー",
    titleZh: "乘云追风",
    titleEn: "Riding Clouds Chasing Wind",
    rarity: 'SR',
    cls: 'Fighter',
    icon: 'P0019_figure_s.png',
    image: 'P0019_figure_m.png',
    awakenImage: 'P0019_Awaken_figure_m.png',
    descriptionZh: "因为异于常人的感官，对现在身处的世界有种钝感，只有在强烈刺激下才能重拾「活在当下」的感觉，也因此迷上街头极限运动。由于生理缺陷的影响，平常大多是一副对事冷淡、不感兴趣的态度，在接触极限运动与战斗时才会重拾热情。\n\n喜欢鲜艳、强烈而斑斓的颜色，因为一般低饱和度的色调在她眼中几乎接近灰色。\n\n在极限运动过程中经常受到各种擦挫伤，但痛觉迟钝跟超凡的复原速度让她对此不以为意，所以运动回来总是衣着破烂、满身是血，看起来像是去打了一架。甚至常常会没发现自己有受伤。",
    descriptionEn: "Due to senses different from ordinary people, she has a dull feeling toward the world she currently inhabits. Only under intense stimulation can she regain the feeling of \"living in the moment,\" which is why she became obsessed with street extreme sports. Due to physiological defects' influence, she usually maintains an indifferent, uninterested attitude toward things, only regaining passion when engaging in extreme sports and combat.\n\nShe likes vivid, intense, and colorful colors because generally low-saturation tones appear almost gray in her eyes.\n\nDuring extreme sports, she frequently suffers various scrapes and bruises, but her delayed pain sensation and extraordinary recovery speed make her unconcerned about this. So she always returns from sports with tattered clothes and covered in blood, looking like she got into a fight. She often doesn't even notice she's injured.",
    skills: {
      normal: [
        { nameZh: "上板破空", nameEn: "Board Breaker", infoZh: "3段攻击范围内敌人，并使自身特攻冷却时间缩短。", infoEn: "Attacks enemies in range 3 times, reducing the CD of your Special Attack.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+40}%</color> damage to enemies in a forward fan-shaped area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+40}%</color> damage to enemies in a forward fan-shaped area.\nHit 3: Deals <color=#C8B450>5</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+40}%</color> damage to enemies in a circular area, reducing the CD of your Special Attack by <color=#C8B450>1</color> per hit.", detailZh: "一段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+40}%</color>伤害。\n二段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+40}%</color>伤害。\n三段：对圆形范围内敌方造成<color=#C8B450>5</color>次<color=#C8B450>{DAMAGE:damageAdjust2+40}%</color>伤害，每次攻击皆使自身特攻冷却时间缩短<color=#C8B450>1</color>。" },
      ],
      class: [
        { nameZh: "急速翻板", nameEn: "Swift Flip", infoZh: "[闪避反击] 多段攻击范围内敌人。", infoEn: "[Dodge Counter] Attacks enemies inside area multiple times.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nDeals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+200}%</color> damage to enemies in a frontal rectangular area.", detailZh: "[闪避反击]\n触发条件：闪避后发动\n对面前矩形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+200}%</color>伤害。" },
      ],
      auto: [
        { nameZh: "穿空踏背", nameEn: "Air-Piercing Back Stomp", infoZh: "以最远距离的敌人为目标，冲刺攻击范围内敌人。", infoEn: "Targets the farthest enemy and charges at  enemies within range.", detailEn: "Targets the farthest enemy and deals <color=#C8B450>{DAMAGE:damageAdjust+115}%</color> damage to enemies along the path, then moves to the target and deals <color=#C8B450>{DAMAGE:damageAdjust2+240}%</color> damage to enemies within a circular area.", detailZh: "以最远距离的敌人为目标，对路径范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+115}%</color>伤害，随后移动至目标后，并对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+240}%</color>伤害。" },
        { nameZh: "穿空踏背", nameEn: "Air-Piercing Back Stomp", infoZh: "以最远距离的敌人为目标，冲刺攻击范围内敌人。此技能附加额外暴击率。", infoEn: "Targets the farthest enemy and charges at enemies within range. This skill has bonus Critical Rate.", detailEn: "Targets the farthest enemy and deals <color=#C8B450>{DAMAGE:damageAdjust_ex+120}%</color> damage to enemies along the path, then moves to the target and deals <color=#C8B450>{DAMAGE:damageAdjust2_ex+235}%</color> damage to enemies within a circular area. This skill has an additional Critical Rate of <color=#C8B450>+100%</color>.", detailZh: "以最远距离的敌人为目标，对路径范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+120}%</color>伤害，随后移动至目标后，并对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2_ex+235}%</color>伤害。此技能附加额外暴击率<color=#C8B450>+100%</color>。" },
      ],
      extreme: [
        { nameZh: "瞬影驰板", nameEn: "Flash Board", infoZh: "多次位移并交替攻击路径与圆形范围内敌人。", infoEn: "Repositions multiple times and alternately attacks enemies along the path and within a circular area.", detailEn: "Moves to the designated location, deals <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage to enemies in the rectangular area and <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+234}%</color> damage to enemies in the circular area; then moves to the designated location again, deals <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage to enemies in the rectangular area and <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+234}%</color> damage to enemies in the circular area.", detailZh: "移动至指定地点，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害，并对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2+234}%</color>伤害；随后再次移动至指定地点，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害，并对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2+234}%</color>伤害。" },
        { nameZh: "瞬影驰板", nameEn: "Flash Board", infoZh: "技能施放期间获得霸体效果。多次位移并交替以更高伤害攻击路径与圆形范围内敌人。", infoEn: "Gains Super Armor during skill activation. Repositions multiple times and alternately attacks enemies along the path and within a circular area with increased damage.", detailEn: "During this skill's activation, self gains Knockback Resistance, Knockdown Resistance, and Stagger Resistance. Moves to the designated location, deals <color=#C8B450>{DAMAGE:damageAdjust_ex+319}%</color> damage to enemies in the rectangular area and <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+329}%</color> damage to enemies in the circular area; then moves to the designated location again, deals <color=#C8B450>{DAMAGE:damageAdjust_ex+319}%</color> damage to enemies in the rectangular area and <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+329}%</color> damage to enemies in the circular area.", detailZh: "此技能施放期间，自身获得击退抗性、击倒抗性与僵直抗性。移动至指定地点，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+319}%</color>伤害，并对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+329}%</color>伤害；随后再次移动至指定地点，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+319}%</color>伤害，并对圆形范围内敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+329}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "花式走板", nameEn: "Fancy Footwork", infoZh: "装备者暴击率提升\n装备者极式造成的额外伤害提升", infoEn: "Increases the character's Critical Rate\nIncreases Bonus Damage dealt by the character's Extreme Skill", detailEn: "Character's Critical Rate <color=#C8B450>+{BUFF:buffEffectAdjust+5}%</color>\nCharacter's Extreme Skill Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust2+6}%</color>", detailZh: "装备者暴击率<color=#C8B450>+{BUFF:buffEffectAdjust+5}%</color>\n装备者极式额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust2+6}%</color>" },
      ],
      passive: [
        { nameZh: "平衡滑行", nameEn: "Balanced Glide", infoZh: "闪避后增加极式蓄能。", infoEn: "After evading, increases Extreme Skill charge.", detailEn: "After dodging, increases own Extreme Skill charge by <color=#C8B450>{COST:costAdjust_ex+30000}</color>.", detailZh: "闪避后，增加自身极式蓄能<color=#C8B450>{COST:costAdjust_ex+30000}</color>。" },
      ],
    },
  },
  {
    id: 'P0022',
    slug: 'zhijie',
    nameZh: "芝洁",
    nameEn: "Zhijie",
    nameJa: "ジージェ",
    titleZh: "秀色可餐",
    titleEn: "Deliciously Beautiful",
    rarity: 'SSR',
    cls: 'Healer',
    icon: 'P0022_figure_s.png',
    image: 'P0022_figure_m.png',
    awakenImage: 'P0022_Awaken_figure_m.png',
    descriptionZh: "浪漫主义、爱情至上，会相信童话里的爱情与真命天子说。虽然因为表现爱的方式异于常人，给人一种轻微的病娇感，但本质上其实是个天真烂漫的恋爱脑。活泼、待人真诚，对同伴几乎毫无防备。\n\n此生的梦想是让真命天子把自己吃下肚，完全成为对方的一部份。其中一只手已经被吃掉了，所以目前是义肢。 \n\n为了实现梦想认真学习医疗知识，目标是让自己能在被吃的过程中延长存活时间，亲眼见证真命天子把自己吃掉的模样。因为过于勤奋，目前已经有能力为魔女们做简单的医疗诊断与外伤处理。虽然没有人要求她，但几乎24小时全年无休地自愿穿上护士服、驻守在大楼医护室，热情十足地提供协助。",
    descriptionEn: "A romantic idealist who believes in love above all else, she believes in fairy tale love and true love. Although her way of expressing love differs from others, giving off a slightly yandere vibe, she's essentially a naive and innocent love-struck girl. Lively and sincere with others, she's almost completely defenseless around companions.\n\nHer life's dream is to have her true love consume her completely, becoming a part of him. One of her hands has already been eaten, so it's currently a prosthetic.\n\nTo achieve her dream, she seriously studies medical knowledge, aiming to extend her survival time during the consumption process so she can witness her true love eating her. Due to her diligence, she now has the ability to provide simple medical diagnoses and trauma treatment for the witches. Although no one asks her to, she voluntarily wears nurse uniforms and stations herself in the building's medical room 24/7 year-round, enthusiastically providing assistance.",
    skills: {
      normal: [
        { nameZh: "术前消毒", nameEn: "Pre-Op Sterilization", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+88}%</color> damage to enemies in a forward fan-shaped area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+88}%</color> damage to enemies in a forward fan-shaped area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust+88}%</color> damage to enemies in a forward fan-shaped area.", detailZh: "一段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+88}%</color>伤害。\n二段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+88}%</color>伤害。\n三段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+88}%</color>伤害。" },
      ],
      class: [
        { nameZh: "喷雾防护", nameEn: "Spray Shield", infoZh: "[治愈] 治疗范围内我方角色，并赋予防御力提升。", infoEn: "[Heal] Heals allies inside area and grants increased defense.", detailEn: "[Heal]\nHeals allies within own circular area for <color=#C8B450>{HEAL:healAdjust+125}%</color> Health and grants defense <color=#C8B450>+{BUFF:buffEffectAdjust+21}%</color> effect (lasts <color=#C8B450>12</color> seconds).", detailZh: "[治愈]\n治疗自身圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust+125}%</color>生命值，并赋予防御力<color=#C8B450>+{BUFF:buffEffectAdjust+21}%</color>效果(持续<color=#C8B450>12</color>秒)。" },
        { nameZh: "喷雾防护", nameEn: "Spray Shield", infoZh: "[治愈] 治疗范围内我方角色，并赋予防御力与额外伤害提升。", infoEn: "[Heal] Heals allies inside area and grants increased defense and Bonus Damage.", detailEn: "[Heal]\nHeals allies within own circular area for <color=#C8B450>{HEAL:healAdjust_ex+175}%</color> Health and grants defense <color=#C8B450>+26%</color> and Bonus Damage <color=#C8B450>+5%</color> effect (lasts <color=#C8B450>15</color> seconds).", detailZh: "[治愈]\n治疗自身圆形范围内我方角色<color=#C8B450>{HEAL:healAdjust_ex+175}%</color>生命值，并赋予防御力<color=#C8B450>+26%</color>与额外伤害<color=#C8B450>+5%</color>效果(持续<color=#C8B450>15</color>秒)。" },
      ],
      auto: [
        { nameZh: "紧急包扎", nameEn: "Emergency Bandage", infoZh: "治愈一名我方角色，并赋予其起身速度提升效果。", infoEn: "Heals one ally and grants them an increased get-up speed effect.", detailEn: "Heals <color=#C8B450>{HEAL:healAdjust+168}%</color> Health to one ally and grants them a get-up speed <color=#C8B450>+2000%</color> effect (lasts <color=#C8B450>15</color> seconds).", detailZh: "治疗一名我方角色<color=#C8B450>{HEAL:healAdjust+168}%</color>生命值，并赋予其起身速度<color=#C8B450>+2000%</color>效果(持续<color=#C8B450>15</color>秒)。" },
        { nameZh: "紧急包扎", nameEn: "Emergency Bandage", infoZh: "治愈一名我方角色，并赋予其起身速度与体干值提升效果。", infoEn: "Heals one ally and grants them increased get-up speed and posture value effects.", detailEn: "Heals <color=#C8B450>{HEAL:healAdjust_ex+234}%</color> Health to one ally and grants them a get-up speed <color=#C8B450>+2000%</color> and posture value <color=#C8B450>+50</color> effect (lasts <color=#C8B450>15</color> seconds).", detailZh: "治疗一名我方角色<color=#C8B450>{HEAL:healAdjust_ex+234}%</color>生命值，并赋予其起身速度<color=#C8B450>+2000%</color>、体干值<color=#C8B450>+50</color>效果(持续<color=#C8B450>15</color>秒)。" },
      ],
      extreme: [
        { nameZh: "芝洁特制强心针", nameEn: "Zijie's Special Cardiac Needle", infoZh: "多次治疗范围内我方角色，随后攻击范围内敌人。", infoEn: "Heals allies inside area multiple times, then attacks enemies inside area.", detailEn: "Heals allies in the rectangular area ahead <color=#C8B450>2</color> times, restoring <color=#C8B450>{HEAL:healAdjust2+194}%</color> Health each time. Finally deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+194}%</color> damage to enemies in the rectangular area ahead.", detailZh: "对面前矩形范围内我方角色造成<color=#C8B450>2</color>次治疗，每次治疗<color=#C8B450>{HEAL:healAdjust2+194}%</color>生命值。最后对面前矩形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+194}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "自我照顾", nameEn: "Self-Care", infoZh: "装备者闪避率提升\n装备者每次格挡或闪避后，装备者治疗效果提升", infoEn: "Increases the character's Dodge Value\nIncreases the character's Healing Effect each time the character blocks or dodges", detailEn: "Character's Dodge Value <color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>.\nEach time the character blocks or evades, Healing Effect increases by <color=#C8B450>+{STACKABLEBUFF:P0022_InterferenceSkillEffects_ExtraHeal_Lv1:stackableBuffIdAdjust_ex:0}%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>20</color> seconds).", detailZh: "装备者闪避率<color=#C8B450>+{BUFF:buffEffectAdjust+7}%</color>。\n装备者每次格挡或回避后，装备者治疗效果提升<color=#C8B450>+{STACKABLEBUFF:P0022_InterferenceSkillEffects_ExtraHeal_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>20</color>秒)。" },
      ],
      passive: [
        { nameZh: "密切关注", nameEn: "Close Attention", infoZh: "我方角色发动反击时，缩短自身特攻冷却时间。", infoEn: "When an ally counters, reduces own Special Attack CD.", detailEn: "Each time an ally counters, reduces own Special Attack CD by <color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust+0.5}</color> seconds.", detailZh: "每次我方角色发动反击时，将自身特攻冷却时间缩短<color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust+0.5}</color>秒。" },
      ],
    },
  },
  {
    id: 'P0027',
    slug: 'budi',
    nameZh: "布荻",
    nameEn: "Budi",
    nameJa: "ブディ",
    titleZh: "极地之盾",
    titleEn: "Shield of the Polar Regions",
    rarity: 'SR',
    cls: 'Tank',
    icon: 'P0027_figure_s.png',
    image: 'P0027_figure_m.png',
    awakenImage: 'P0027_Awaken_figure_m.png',
    descriptionZh: "平时的布荻是温柔、沉着的，说话带着礼貌与理性，甚至有些过度小心翼翼。\n\n她深信「守护就是挡下痛苦的决心」。\n\n只要进入了作战模式，她就会瞬间情绪爆裂，力量暴增，同时语言与动作变得异常激进，并且平时的好脾气会突然消失殆尽。\n\n她喜欢收集战场上碎裂的盾牌与盔甲，将其重新打磨、拼贴成小饰品送人，称那是「让恐惧重生的艺术」；会在夜里对着挂满布偶的墙一一呼唤名字。\n\n那些布偶都是由兽皮制作，里头缝进了骨头和盾牌碎片。象征着她曾守护过、或无法守住的生命，承载着亡灵的哀鸣与怒吼。\n\n当号角响起，那些亡灵便会附着于她身上——使她变得凶猛、暴躁，宛如由无数战死者组成的「战灵聚体」。",
    descriptionEn: "Normally, Budi is gentle and calm, speaking with politeness and rationality, even somewhat overly cautious.\n \nShe firmly believes \"protection is the determination to block suffering.\"\n Once she enters combat mode, her emotions explode instantly, her strength surges dramatically, her language and actions become abnormally aggressive, and her usual good temper suddenly disappears completely.\n \nShe likes collecting broken shields and armor from battlefields, repolishing and assembling them into small accessories to give as gifts, calling it \"the art of giving fear rebirth.\" At night, she calls out names one by one to a wall covered with dolls.\n \nThose dolls are crafted from animal hide, with bones and shield fragments sewn inside. They symbolize the lives she has defended (or failed to protect) and carry the wailing and roaring of the fallen.\n \nWhen the horn sounds, those spirits attach themselves to her body, making her ferocious and volatile, like a \"collective of war-hungry spirits\" composed of countless fallen soldiers.",
    skills: {
      normal: [
        { nameZh: "重斧杀砍", nameEn: "Heavy Axe Cleave", infoZh: "2段攻击敌人。", infoEn: "Attacks an enemy 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+90}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+90}%</color> damage to one enemy.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+90}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+90}%</color>伤害。" },
      ],
      class: [
        { nameZh: "恐惧旋斩", nameEn: "Panic Spin Slash", infoZh: "[格挡反击] 提升自身极式蓄能，往前旋转挥砍并嘲讽范围内敌人。", infoEn: "[Block Counter] Increases own Extreme Skill charge, spins forward with a slashing attack and taunts enemies inside area.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within area\nIncreases own Extreme Skill charge by <color=#C8B450>20</color>, then spins forward with a slashing attack, dealing <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+135}%</color> damage to enemies in a circular area, each hit carrying an additional Taunt.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n提升自身极式蓄能<color=#C8B450>20</color>，随后往前旋转挥砍，对圆形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+135}%</color>伤害，每次攻击皆带有额外嘲讽效果。" },
        { nameZh: "恐惧旋斩", nameEn: "Panic Spin Slash", infoZh: "[格挡反击] 提升自身极式蓄能，往前旋转挥砍并嘲讽范围内敌人。", infoEn: "[Block Counter] Increases own Extreme Skill charge, spins forward with a slashing attack and taunts enemies within range.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within area\nIncreases own Extreme Skill charge by <color=#C8B450>30</color>, then spins forward with a slashing attack, dealing <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+95}%</color> damage to enemies in a circular area, each hit carrying an additional Taunt.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n提升自身极式蓄能<color=#C8B450>30</color>，随后往前旋转挥砍，对圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+95}%</color>伤害，每次攻击皆带有额外嘲讽效果。" },
      ],
      auto: [
        { nameZh: "亡斧横扫", nameEn: "Death Axe Sweep", infoZh: "[普攻衍生] 攻击并嘲讽范围内敌人。", infoEn: "[Normal Attack Salvo] Attacks and taunts enemies within range.", detailEn: "[Normal Attack Salvo]\nTrigger Condition: Activates after completing the last hit of a Normal attack\nDeals <color=#C8B450>{DAMAGE:damageAdjust+230}%</color> damage to enemies within a circular area and inflicts Taunt.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+230}%</color>伤害，并附加嘲讽效果。" },
      ],
      extreme: [
        { nameZh: "劈地震击", nameEn: "Earth-Splitting Shockwave", infoZh: "治疗并赋予自身最大生命提升效果，随后移动至敌人面前发动强力必杀攻击。", infoEn: "Heals self and grants a Max Health increase, then moves in front of an enemy and unleashes a powerful lethal strike.", detailEn: "Heals self for <color=#C8B450>{HEAL:healAdjust3+200}%</color> Health and grants self a Max Health <color=#C8B450>+20%</color> effect (lasts <color=#C8B450>15</color> seconds). Then moves in front of one enemy, dealing <color=#C8B450>{DAMAGE:damageAdjust+975}%</color> damage with an additional Critical Rate <color=#C8B450>+100%</color> for this attack.", detailZh: "治疗自身<color=#C8B450>{HEAL:healAdjust3+200}%</color>生命值并赋予自身最大生命<color=#C8B450>+20%</color>效果(持续<color=#C8B450>15</color>秒)。随后移动至一名敌人面前，对其造成<color=#C8B450>{DAMAGE:damageAdjust+975}%</color>伤害，本次攻击额外附加暴击率<color=#C8B450>+100%</color>。" },
        { nameZh: "劈地震击", nameEn: "Earth-Splitting Shockwave", infoZh: "治疗并赋予自身大幅最大生命提升效果，随后移动至敌人面前发动连续强力必杀攻击。", infoEn: "Heals self and grants a Max Health increase, then moves in front of an enemy and unleashes consecutive lethal strikes.", detailEn: "Heals self for <color=#C8B450>{HEAL:healAdjust3_ex+250}%</color> Health and grants self a Max Health <color=#C8B450>+30%</color> effect (lasts <color=#C8B450>15</color> seconds). Then moves in front of one enemy, dealing <color=#C8B450>{DAMAGE:damageAdjust_ex+975}%</color> damage, and finally deals <color=#C8B450>{DAMAGE:damageAdjust2_ex+418}%</color> damage to enemies in the rectangular area; all attacks from this skill carry an additional Critical Rate <color=#C8B450>+100%</color>.", detailZh: "治疗自身<color=#C8B450>{HEAL:healAdjust3_ex+250}%</color>生命值并赋予自身最大生命<color=#C8B450>+30%</color>效果(持续<color=#C8B450>15</color>秒)。随后移动至一名敌人面前，对其造成<color=#C8B450>{DAMAGE:damageAdjust_ex+975}%</color>伤害，最后对矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2_ex+418}%</color>伤害；此技能所有攻击皆额外附加暴击率<color=#C8B450>+100%</color>。" },
      ],
      interference: [
        { nameZh: "亡灵呢喃", nameEn: "Undead Whisper", infoZh: "装备者暴击伤害提升\n装备者魔法抗性提升", infoEn: "Increases the character's Crit Damage\nIncreases the character's Magic Resistance", detailEn: "Character's Critical Power <color=#C8B450>+{BUFF:buffEffectAdjust+9}%</color>\nCharacter's Magic Resistance <color=#C8B450>+{BUFF:buffEffectAdjust2+9}%</color>", detailZh: "装备者暴击伤害<color=#C8B450>+{BUFF:buffEffectAdjust+9}%</color>\n装备者魔法抗性<color=#C8B450>+{BUFF:buffEffectAdjust2+9}%</color>" },
      ],
      passive: [
        { nameZh: "灵魂牵引", nameEn: "Soul Tether", infoZh: "自身物理抗性提升。", infoEn: "Physical Resistance increased.", detailEn: "Grants self Physical Resistance <color=#C8B450>{BUFF:buffEffectAdjust+16}%</color>.", detailZh: "赋予自身物理抗性<color=#C8B450>{BUFF:buffEffectAdjust+16}%</color>。" },
      ],
    },
  },
  {
    id: 'P0028',
    slug: 'dayu',
    nameZh: "妲玉",
    nameEn: "Dayu",
    nameJa: "妲玉",
    titleZh: "倾城天香",
    titleEn: "City-Toppling Heavenly Fragrance",
    rarity: 'UR',
    cls: 'Tank',
    icon: 'P0028_figure_s.png',
    image: 'P0028_figure_m.png',
    awakenImage: 'P0028_Awaken_figure_m.png',
    descriptionZh: "妲玉出生于偏远山间小镇，外貌与气质远胜常人，美得近乎异常，曾经有着「她的美丽能让世界恢复和平」的谣言。\n\n然而，她十八岁生日当天，各地民众齐聚为她庆生，却在她微笑致意的瞬间集体陷入疯狂。\n\n在那次的集体发狂的事件后，人们时不时会在她身后看见犹如九尾妖狐尾巴般的幻觉，当具象化的情况越明显的时候，代表她魅惑、使人发狂的异常现象就越强烈。\n\n往后，试图讨伐她的人，在亲眼见到她后，反而因自觉卑劣而自尽。\n\n事件传到了MAJO的耳里，机构确认了其身上的异常现象，并在她加入后提供特殊面具希望抑制其能力。但她的美丽太过强大，偶尔还是会失控。",
    descriptionEn: "Dayu was born in a remote mountain town. Her appearance and temperament far exceed ordinary people—she's beautiful to an almost abnormal degree. There was once a rumor that \"her beauty could bring peace to the world.\"\n\nHowever, on her eighteenth birthday, when people from everywhere gathered to celebrate, they collectively fell into madness the moment she smiled and nodded in acknowledgment.\n\nAfter that mass madness incident, people would occasionally see illusions like nine-tailed fox tails behind her. The more obvious the manifestation, the stronger her abnormal phenomena of enchantment and driving people mad.\n\nLater, those who tried to subjugate her would instead commit suicide out of self-perceived worthlessness after seeing her with their own eyes.\n\n Word of the incident reached MAJO. The organization confirmed the abnormal phenomena about her and provided a special mask after she joined, hoping to suppress her abilities. But her beauty is too powerful and occasionally still goes out of control.",
    skills: {
      normal: [
        { nameZh: "招魅火", nameEn: "Soul-Summoning Flame", infoZh: "2段攻击指定敌人，1段攻击范围内敌人。", infoEn: "Attacks a designated enemy 2 times, then attacks enemies in range 1 time.", detailEn: "Hit 1: Deals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+29}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+29}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+29}%</color> damage to enemies in a designated circular area.", detailZh: "一段：对一名敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust+29}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust+29}%</color>伤害。\n三段：对指定圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust2+29}%</color>伤害。" },
      ],
      class: [
        { nameZh: "幻火灭", nameEn: "Phantom Flame Extinguish", infoZh: "[格挡反击] 多段攻击范围内敌人。", infoEn: "[Block Counter] Attacks enemies inside area multiple times.", detailEn: "[Block Counter]\nTrigger Condition: Activates after blocking, only if a target is within area\nDeals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+118}%</color> damage to enemies in a frontal circular area.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust+118}%</color>伤害。" },
        { nameZh: "幻火灭", nameEn: "Phantom Flame Extinguish", infoZh: "[格挡反击] 多段攻击范围内敌人，并附加额外伤害减少效果。", infoEn: "[Block Counter] Attacks enemies inside area multiple times and inflicts Bonus Damage Reduction effect.", detailEn: "[Block Counter]\nTrigger Condition: Activates after blocking, only if a target is within area\nDeals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+155}%</color> damage to enemies in a frontal circular area, each hit inflicting Bonus Damage <color=#C8B450>-5%</color> effect (lasts <color=#C8B450>6</color> seconds).", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+155}%</color>伤害，每次攻击皆带有额外伤害<color=#C8B450>-5%</color>效果(持续<color=#C8B450>6</color>秒)。" },
      ],
      auto: [
        { nameZh: "摆尾护", nameEn: "Tail Guard", infoZh: "赋予自身防御力提升，并赋予全体我方额外减伤效果。", infoEn: "Grants self defense Up and grants all allies additional damage reduction.", detailEn: "Grants self defense <color=#C8B450>+{STACKABLEBUFF:StackableBuff_P0028_AutoSkill_1_Lv1:stackableBuffIdAdjust:0}%</color> <color=#C8B450>1</color> stack (max <color=#C8B450>3</color> stacks) (lasts <color=#C8B450>15</color> seconds), and grants all allies additional damage reduction <color=#C8B450>+4%</color> <color=#C8B450>1</color> stack (max <color=#C8B450>3</color> stacks) (lasts <color=#C8B450>15</color> seconds).", detailZh: "赋予自身防御力<color=#C8B450>+{STACKABLEBUFF:StackableBuff_P0028_AutoSkill_1_Lv1:stackableBuffIdAdjust:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>3</color>层)(持续<color=#C8B450>15</color>秒)，并赋予全体我方角色额外减伤<color=#C8B450>+4%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>3</color>层)(持续<color=#C8B450>15</color>秒)。" },
      ],
      extreme: [
        { nameZh: "唤白狐", nameEn: "Howling White Fox", infoZh: "传送到指定地点并赋予自身额外减伤，随后嘲讽范围内敌人并创造一个攻击领域。", infoEn: "Teleports to the designated location and grants self additional damage reduction, then taunts enemies inside area and creates an attack zone.", detailEn: "Teleports to the designated location, granting self additional damage reduction of <color=#C8B450>25%</color> (lasts <color=#C8B450>10</color> seconds) and taunting enemies in the circular area. Simultaneously creates a circular zone at the designated location (lasts <color=#C8B450>4</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust+83}%</color> damage to enemies within the zone every <color=#C8B450>0.5</color> seconds. (The zone is not considered this character's skill)", detailZh: "传送到指定地点，赋予自身额外减伤<color=#C8B450>25%</color>效果(持续<color=#C8B450>10</color>秒)，并嘲讽圆形范围内敌人。同时在指定地点创造一个圆形领域(持续<color=#C8B450>4</color>秒)，每<color=#C8B450>0.5</color>秒对范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+83}%</color>伤害。 (领域不视为本角色的技能)" },
        { nameZh: "唤白狐", nameEn: "Howling White Fox", infoZh: "传送到指定地点并赋予自身僵直抗性与额外减伤，随后嘲讽范围内敌人并创造一个攻击领域。", infoEn: "Teleports to the designated location and grants self Stagger Resistance and additional damage reduction, then taunts enemies inside area and creates an attack zone.", detailEn: "Teleports to the designated location, granting self Stagger Resistance <color=#C8B450>+50%</color> (lasts <color=#C8B450>15</color> seconds) and additional damage reduction of <color=#C8B450>25%</color> (lasts <color=#C8B450>10</color> seconds), and taunting enemies in the circular area. Simultaneously creates a circular zone at the designated location (lasts <color=#C8B450>4</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust_ex+115}%</color> damage to enemies within the zone every <color=#C8B450>0.5</color> seconds. (The zone is not considered this character's skill)", detailZh: "传送到指定地点，赋予自身僵直抗性<color=#C8B450>+50%</color>(持续<color=#C8B450>15</color>秒)与额外减伤<color=#C8B450>25%</color>效果(持续<color=#C8B450>10</color>秒)，并嘲讽圆形范围内敌人。同时在指定地点创造一个圆形领域(持续<color=#C8B450>4</color>秒)，每<color=#C8B450>0.5</color>秒对范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust_ex+115}%</color>伤害。 (领域不视为本角色的技能)" },
      ],
      interference: [
        { nameZh: "唤火魂", nameEn: "Blazing Soul", infoZh: "装备者魔法攻击克制率提升\n装备者施展极式蓄能大于等于400的极式后，极式蓄能速度提升", infoEn: "Increases the character's Magic Attack rate\nAfter the character uses an Extreme Skill with a charge of 400 or more, increases Extreme Skill charge speed", detailEn: "Character's Magic Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\nAfter the character uses an Extreme Skill with a charge of 400 or more, Extreme Skill charge speed <color=#C8B450>+{STACKABLEBUFF:P0028_InterferenceSkillEffects_Lv1:stackableBuffIdAdjust_ex:0}</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>6</color> seconds)", detailZh: "装备者魔法攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\n装备者施展极式蓄能大于等于400的极式后，自身极式蓄能速度<color=#C8B450>+{STACKABLEBUFF:P0028_InterferenceSkillEffects_Lv1:stackableBuffIdAdjust_ex:0}</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>6</color>秒)" },
      ],
      passive: [
        { nameZh: "惜百兽", nameEn: "Cherishing the Beasts", infoZh: "我方角色施展极式时，将自身特攻冷却时间缩短。", infoEn: "When an ally uses an Extreme Skill, reduces own Special Attack CD.", detailEn: "Each time an ally uses an Extreme Skill, reduces own Special Attack CD by <color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust+7}</color> seconds.", detailZh: "每次我方角色施展极式时，将自身特攻冷却时间缩短<color=#C8B450>{CDELAPSED:cdElapsedTimeAdjust+7}</color>秒。" },
      ],
    },
  },
  {
    id: 'P0030',
    slug: 'yun',
    nameZh: "云",
    nameEn: "Yun",
    nameJa: "ユン",
    titleZh: "黯熔光",
    titleEn: "Dark Molten Light",
    rarity: 'SSR',
    cls: 'Tank',
    icon: 'P0030_figure_s.png',
    image: 'P0030_figure_m.png',
    awakenImage: 'P0030_Awaken_figure_m.png',
    descriptionZh: "来自几乎没有光照的平行世界。特殊材质的肌肤虽然能耐受火焰的高温，却无法承受太阳曝晒，会因为长期接触阳光而受损溶解。也因为眼睛里精密的感光系统，没办法直视太阳，否则将导致不可逆的损害。\n\n即便有着这样的构造，仍然对接触阳光抱有向往，此种情感在来到这个世界后变得更加强烈而疯狂。\n\n在战斗时会异常兴奋到几乎失去理智，因为燃烧和爆炸的瞬间，是令她感到最接近太阳的时刻。其他大部分时间都百无聊赖地躲在阴影里，仿佛撇除太阳相关的话题就毫无生存目标。\n\n房间里放满了钨丝灯泡，会透过触碰灯泡让皮肤变得温热，借此想像受到阳光照射的感觉。\n\n经过MAJO评估，在相关人员陪同下，她每个月能在一天的清晨进行一次为期半分钟的日光浴。",
    descriptionEn: "She comes from a parallel world with almost no sunlight. Her skin is made of a special material that can withstand the intense heat of Fire, yet cannot endure direct sunlight, so prolonged exposure causes it to deteriorate and dissolve. The intricate photosensitive system in her eyes also means she cannot look directly at the sun without suffering irreversible damage.\n \nDespite this, she yearns deeply for contact with sunlight, a longing that has grown even more intense and consuming since arriving in this world.\n \nIn battle, she becomes abnormally frenzied and nearly loses all reason, because moments of combustion and explosion are when she feels closest to the sun. Most other times, she languishes listlessly in the shadows, as if she has no reason to exist beyond anything having to do with the sun.\n \nHer room is filled with incandescent bulbs, and she presses her skin against them to feel their warmth and imagines what it would be like to bask in sunlight.\n \nFollowing a MAJO assessment, she is permitted—under the supervision of designated personnel—to sunbathe once a month, for thirty seconds, at dawn.",
    skills: {
      normal: [
        { nameZh: "直视焰阳", nameEn: "Face Mortality", infoZh: "3段攻击敌人，最后一段攻击2次。", infoEn: "Attack enemies in 3 hits, with the final hit striking 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+61}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+61}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+61}%</color> damage to one enemy.", detailZh: "一段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+61}%</color>伤害。\n二段：对一名敌人造成<color=#C8B450>{DAMAGE:damageAdjust+61}%</color>伤害。\n三段：对一名敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+61}%</color>伤害。" },
      ],
      class: [
        { nameZh: "绚烂滂沱", nameEn: "Brilliant Torrent", infoZh: "[格挡反击] 攻击并嘲讽扇形范围内敌人。", infoEn: "[Parry Counter] Attacks and taunts enemies in a fan-shaped area.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within range.\nDeals <color=#C8B450>{DAMAGE:damageAdjust+205}%</color> damage to enemies in a frontal fan-shaped area, applies Taunt, and adds <color=#C8B450>7</color> Stagger.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前扇形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+205}%</color>伤害，并附加嘲讽效果与<color=#C8B450>7</color>失衡值。" },
        { nameZh: "绚烂滂沱", nameEn: "Brilliant Torrent", infoZh: "[格挡反击] 攻击并嘲讽扇形范围内敌人。", infoEn: "[Parry Counter] Attacks and taunts enemies in a fan-shaped area.", detailEn: "[Block Counter]\nTrigger Conditions: Activates after blocking, only if a target is within range.\nDeals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+125}%</color> damage to enemies in a frontal fan-shaped area, applies Taunt, and adds <color=#C8B450>7</color> Stagger per hit.", detailZh: "[格挡反击]\n触发条件：格挡后，射程内有目标才发动\n对面前扇形范围内敌人造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+125}%</color>伤害，并附加嘲讽效果，每次附加<color=#C8B450>7</color>失衡值。" },
      ],
      auto: [
        { nameZh: "炽烈雨", nameEn: "Blazing Rain", infoZh: "[普攻衍生] 对扇形范围内敌人造成3次伤害并嘲讽。", infoEn: "[Normal Followup] Deals damage 3 times to enemies in a fan-shaped area and applies Taunt.", detailEn: "[Normal Followup]\nConditions: Activated after completing the final Normal attack\nDeals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+100}%</color> damage to enemies in a fan-shaped area ahead, applies Taunt, and adds <color=#C8B450>4</color> Stagger per hit.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对面前扇形范围内敌人造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust+100}%</color>伤害，并附加嘲讽效果，每次附加<color=#C8B450>4</color>失衡值。" },
        { nameZh: "炽烈雨", nameEn: "Blazing Rain", infoZh: "[普攻衍生] 对更大扇形范围内敌人造成3次伤害并嘲讽，冷却时间缩短。", infoEn: "[Normal Attack Salvo] Deals damage 3 times to enemies in a larger fan-shaped area and applies Taunt, with reduced CD.", detailEn: "[Normal Followup]\nConditions: Activated after completing the final Normal attack\nDeals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color> damage to enemies in a fan-shaped area ahead, applies Taunt, and adds <color=#C8B450>4</color> Stagger per hit.", detailZh: "[普攻衍生]\n触发条件：完成最后一段普攻后施展\n对面前扇形范围内敌人造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+100}%</color>伤害，并附加嘲讽效果，每次附加<color=#C8B450>4</color>失衡值。" },
      ],
      extreme: [
        { nameZh: "绝寂无风带", nameEn: "Belt of Calm Winds", infoZh: "赋予自身防御力与格挡率提升，并将格挡及格挡反击最大冷却时间固定。", infoEn: "Grants self increased Defense and Block Rate, and fixes the maximum CD for Block and Block Counter.", detailEn: "Grants self Defense <color=#C8B450>{BUFF:buffEffectAdjust+20}%</color> and Block Rate <color=#C8B450>100%</color>, and fixes the maximum Block and Block Counter CD to <color=#C8B450>1.5</color> second for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+12}</color> seconds).", detailZh: "赋予自身防御力<color=#C8B450>{BUFF:buffEffectAdjust+20}%</color>、格挡率<color=#C8B450>100%</color>，并将格挡及格挡反击最大冷却时间固定为<color=#C8B450>1.5</color>秒效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+12}</color>秒)。" },
      ],
      interference: [
        { nameZh: "开伞", nameEn: "Open Umbrella", infoZh: "装备者暴击率提升。\n装备者发动奥义后，自身格挡冷却立刻完成。", infoEn: "Increases wearer's Critical Rate.\nAfter the wearer uses their Special, own Block CD is instantly reset.", detailEn: "Wearer's Critical Rate <color=#C8B450>{BUFF:buffEffectAdjust+3}%</color>.\nAfter the wearer uses their Special, own Block CD is instantly reset.", detailZh: "装备者暴击率<color=#C8B450>{BUFF:buffEffectAdjust+3}%</color>。\n装备者发动奥义后，自身格挡冷却立刻完成。" },
      ],
      passive: [
        { nameZh: "快速风干", nameEn: "Quick Dry", infoZh: "施展职系技后，自身特攻冷却立刻完成；施展特攻后，自身职系技冷却立刻完成。\n触发格挡后，自身施展特攻与职系技时失衡值提升。", infoEn: "After using the Class Skill, own Special CD is instantly reset; after using the Special, own Class Skill CD is instantly reset.\nAfter triggering a block, increases own Stagger Value when using Specials and Class Skills.", detailEn: "After using the Class Skill, own Special CD is instantly reset; after using the Special, own Class Skill CD is instantly reset.\nAfter triggering a block, grants self a Stagger <color=#C8B450>+1</color> effect when using Specials and Class Skills for 1 stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+6}</color> seconds).", detailZh: "施展职系技后，自身特攻冷却立刻完成；施展特攻后，自身职系技冷却立刻完成。\n触发格挡后，赋予自身施展特攻与职系技时，失衡值<color=#C8B450>+1</color>效果1层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+6}</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0033',
    slug: 'leed',
    nameZh: "莉德",
    nameEn: "Leed",
    nameJa: "リード",
    titleZh: "衔命之刃",
    titleEn: "Blade of Duty",
    rarity: 'SR',
    cls: 'Fighter',
    icon: 'P0033_figure_s.png',
    image: 'P0033_figure_m.png',
    awakenImage: 'P0033_Awaken_figure_m.png',
    descriptionZh: "强迫症，对要求与命令总是认真过头，信守规则到几乎完全不知变通的地步，甚至可以为了达成任务牺牲自己。虽然表面上看起来是愚忠的类型，但实际上还是自有一套特殊的判断标准，当认为上级已经没有值得尊敬的理由时，会毫不犹豫地背叛然后把对方杀掉。\n\n训练时前辈建议哪个怪物要砍几刀就砍几刀，因此战力上升后常常出现鞭尸的情况。放假穿私服、认真打扮后会变成超级大美人，是队友在路上碰到也认不出来的程度。\n\n其实家室显赫，但因故从小就在外流亡，对自己曾经尊贵的身分没什么实感。流亡期间当了很长一段时间的童兵，也因此养成了恪守命令的性格，不过所处集团的头领后来被她判定不再适任，被她背叛并杀掉了。",
    descriptionEn: "Has OCD and is always overly serious about requirements and orders, following rules to the point of almost complete inflexibility, even willing to sacrifice herself to complete missions. Although she appears to be blindly loyal on the surface, she actually has her own special judgment standards. When she believes superiors no longer deserve respect, she'll betray and kill them without hesitation.\n\nDuring training, seniors suggested how many cuts each monster should take, so after her Power increased, she often ended up mutilating corpses. When she dresses up seriously in casual clothes during leave, she becomes a super beauty to the degree that teammates wouldn't recognize her on the street.\n\nShe actually comes from a prestigious family, but due to circumstances, she's been in exile since childhood and has little sense of her once-noble status. During exile, she served as a child soldier for a long time, which developed her character of strictly following orders. However, the leader of her group was later deemed unfit by her judgment and was betrayed and killed by her.",
    skills: {
      normal: [
        { nameZh: "单边掷刃", nameEn: "One-Sided Blade Flick", infoZh: "3段攻击敌人，并在最后一段攻击额外附加失衡值。", infoEn: "Attacks an enemy 3 times, additionally inflicting Stagger on the last hit.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+110}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+110}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+155}%</color> damage to one enemy, additionally inflicting <color=#C8B450>1</color> Stagger.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+110}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+110}%</color>伤害。\n三段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+155}%</color>伤害，并附加额外<color=#C8B450>1</color>失衡值。" },
        { nameZh: "单边掷刃", nameEn: "One-Sided Blade Flick", infoZh: "3段攻击敌人，并在最后一段攻击额外附加失衡值。", infoEn: "Attacks an enemy 3 times, additionally inflicting Stagger on the last hit.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color> damage to one enemy.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color> damage to one enemy.\nHit 3: Deals <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+95}%</color> damage to one enemy, each hit additionally inflicting <color=#C8B450>1</color> Stagger.", detailZh: "一段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color>伤害。\n二段：对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+110}%</color>伤害。\n三段：对一名敌方造成<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+95}%</color>伤害，每次攻击额外附加<color=#C8B450>1</color>失衡值。" },
      ],
      class: [
        { nameZh: "断息暗刃", nameEn: "Breathless Shadow Blade", infoZh: "[闪避反击] 攻击一名敌人，并附加额外失衡值。", infoEn: "[Dodge Counter] Attacks one enemy and inflicts additional Stagger.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nDeals <color=#C8B450>{DAMAGE:damageAdjust+210}%</color> damage to one enemy and inflicts an additional <color=#C8B450>2</color> Stagger.", detailZh: "[闪避反击]\n触发条件：闪避后发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+210}%</color>伤害，并附加额外<color=#C8B450>2</color>失衡值。" },
      ],
      auto: [
        { nameZh: "双刃破心", nameEn: "Twin Blades Heart Breaker", infoZh: "[处决] 攻击一名敌人。", infoEn: "[Execution] Attacks one enemy.", detailEn: "[Execution]\nTrigger Condition: Only affects targets that are knocked down\nDeals <color=#C8B450>{DAMAGE:damageAdjust+449}%</color> damage to one enemy.", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust+449}%</color>伤害。" },
        { nameZh: "双刃破心", nameEn: "Twin Blades Heart Breaker", infoZh: "[处决] 攻击一名敌人。", infoEn: "[Execution] Attacks one enemy.", detailEn: "[Execution]\nTrigger Condition: Only affects targets that are knocked down\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+589}%</color> damage to one enemy.", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对一名敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+589}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "封喉匕影", nameEn: "Throat-Sealing Blade", infoZh: "多段攻击路径范围内敌人，并附加失衡值。", infoEn: "Attacks enemies within the path area multiple times and inflicts Stagger.", detailEn: "Deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+435}%</color> damage and <color=#C8B450>2.5</color> Stagger to enemies in the rectangular area ahead.", detailZh: "对面前矩形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+435}%</color>伤害与<color=#C8B450>2.5</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "截息留影", nameEn: "Shadow Snare", infoZh: "装备者闪避率提升\n装备者发动闪避时，在地上留下一个攻击领域。", infoEn: "Increases the character's Dodge Value\nWhen the character evades, leaves an attack zone on the ground.", detailEn: "Character's Dodge Value increased by <color=#C8B450>5%</color>.\nAfter the character activates a Dodge, creates a circular zone on the ground that deals <color=#C8B450>{DAMAGE:damageAdjust+78}%</color> Mental Attack damage to enemies within the area after <color=#C8B450>1.5</color> seconds. (The zone is not considered this character's skill)", detailZh: "装备者闪避率提升<color=#C8B450>5%</color>。\n装备者发动闪避后，在地面创造一个圆形领域，<color=#C8B450>1.5</color>秒后对范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+78}%</color>精神攻击伤害。 (领域不视为本角色的技能)" },
      ],
      passive: [
        { nameZh: "割裂瞬影", nameEn: "Sundering Shadow", infoZh: "发动最后一段普攻命中时，于目标位置创造一个攻击领域。", infoEn: "When the final hit of the Basic Attack lands, creates an attack zone at the target's location.", detailEn: "When the final hit of the Normal Attack hits an enemy, creates a circular zone at the target's feet. After <color=#C8B450>1.5</color> seconds, deals <color=#C8B450>{DAMAGE:damageAdjust+78}%</color> Magic Attack damage to enemies within area and inflicts an additional <color=#C8B450>2</color> Stagger value. (The zone is not considered this character's skill)", detailZh: "发动最后一段普攻命中敌人时，于目标脚下创造一个圆形领域，<color=#C8B450>1.5</color>秒后对范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+78}%</color>精神攻击，并附加额外<color=#C8B450>2</color>失衡值。 (领域不视为本角色的技能)" },
      ],
    },
  },
  {
    id: 'P0034',
    slug: 'lena',
    nameZh: "乐娜",
    nameEn: "Lena",
    nameJa: "レナ",
    titleZh: "灭世载体",
    titleEn: "World Destroyer",
    rarity: 'SSR',
    cls: 'Fighter',
    icon: 'P0034_figure_s.png',
    image: 'P0034_figure_m.png',
    awakenImage: 'P0034_Awaken_figure_m.png',
    descriptionZh: "毒舌、仿佛和世界有仇的中二病，有着破坏一切的冲动，一言不合就想毁灭世界，被阴谋论者认为是邪恶的灭世机器人，实际上只是制造者没有为她设定和善的表达方式。\n\n虽然时常发表恶毒言论，但全都只是说说，跟她比较熟的魔女会自动把她的话当成耳边风。在少数时候才会因为暴怒陷入类似当机的状态，这时候只要拍一下她的脑袋就会恢复正常。\n\n其实对身边人的注意和关心远胜大部分魔女，不过所有人都当作没发现，因为跟她道谢只会让她别扭到发脾气。\n\n有路怒症，在这个状态下会将灭世言论转化为实际行动。被下令禁止担任驾驶相关工作。",
    descriptionEn: "Sharp-tongued with chuunibyou syndrome as if she has a grudge against the world, she has impulses to destroy everything. At the slightest disagreement, she wants to destroy the world. Conspiracy theorists consider her an evil world-destroying android, but actually her creator simply didn't program her with kind expression methods.\n\nAlthough she often makes malicious remarks, it's all just talk. Witches who know her well automatically treat her words as background noise. Only occasionally does she fall into a crash-like state due to rage, and a simple pat on her head returns her to normal.\n\nShe actually pays more attention to and cares about people around her than most witches, but everyone pretends not to notice because thanking her only makes her awkwardly angry.\n\nShe has road rage, and in this state, she'll turn world-destruction rhetoric into actual action. She's been ordered not to take any driving-related work.",
    skills: {
      normal: [
        { nameZh: "飙速追杀", nameEn: "Swift Pursuit", infoZh: "4段攻击范围内敌人。", infoEn: "Attacks enemies in range 4 times.", detailEn: "Hit 1: Charges forward and deals <color=#C8B450>{DAMAGE:damageAdjust+55}%</color> damage to enemies in a directional rectangular area.\nHit 2: Charges forward and deals <color=#C8B450>{DAMAGE:damageAdjust+55}%</color> damage to enemies in a directional rectangular area.\nHit 3: Charges forward and deals <color=#C8B450>{DAMAGE:damageAdjust+55}%</color> damage to enemies in a directional rectangular area.\nHit 4: Charges forward and deals <color=#C8B450>{DAMAGE:damageAdjust+55}%</color> damage to enemies in a directional rectangular area.", detailZh: "一段：向前冲刺，并对方向矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+55}%</color>伤害。\n二段：向前冲刺，并对方向矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+55}%</color>伤害。\n三段：向前冲刺，并对方向矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+55}%</color>伤害。\n四段：向前冲刺，并对方向矩形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+55}%</color>伤害。" },
      ],
      class: [
        { nameZh: "狂躁怒火", nameEn: "Furious Stomp", infoZh: "[闪避反击] 攻击自身范围内敌人，随后攻击并移动至方向范围内敌人。", infoEn: "[Dodge Counter] Attacks enemies in own area, then attacks and moves toward enemies in the directional area.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after dodging\nDeals <color=#C8B450>{DAMAGE:damageAdjust+100}%</color> damage to enemies in own circular area, then deals <color=#C8B450>{DAMAGE:damageAdjust2+210}%</color> damage to enemies in a directional rectangular area and moves toward the target's direction.", detailZh: "[闪避反击]\n触发条件：闪避后发动\n对自身圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+100}%</color>伤害，随后对方向矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+210}%</color>伤害，并移动至目标方向。" },
      ],
      auto: [
        { nameZh: "剿除杂鱼", nameEn: "Eliminate Small Fry", infoZh: "[极式衍生] 攻击范围内敌人，并移动至目标后方。", infoEn: "[Ultimate Salvo] Attacks enemies within range and moves to the target's rear.", detailEn: "[Ultimate Salvo]\nTrigger Condition: Activates after fully unleashing the Ultimate\nDeals <color=#C8B450>{DAMAGE:damageAdjust+400}%</color> damage to enemies within a designated rectangular area, then moves to the target's rear.", detailZh: "[极式衍生]\n触发条件：在完整施展极式后发动\n对指定矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+400}%</color>伤害，随后移动至目标后。" },
      ],
      extreme: [
        { nameZh: "毁！灭！世！界！", nameEn: "DE! STROY! THE! WORLD!", infoZh: "技能施放期间获得霸体效果，并多次移动环绕目标，对其路径范围内敌人发动连续攻击。", infoEn: "Gains Super Armor during skill activation and circles around the target multiple times, launching consecutive attacks against enemies along the path.", detailEn: "During this skill's activation, self gains Knockback Resistance, Knockdown Resistance, and Stagger Resistance. Moves to the designated location, then circles around the target with consecutive repositions, dealing <color=#C8B450>7</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+250}%</color> damage to enemies in the rectangular area, with the final hit dealing <color=#C8B450>{DAMAGE:damageAdjust2+398}%</color> damage.", detailZh: "此技能施放期间，自身获得击退抗性、击倒抗性与僵直抗性。移动至指定位置，随后环绕目标进行连续位移，并对矩形范围内敌人造成<color=#C8B450>7</color>次<color=#C8B450>{DAMAGE:damageAdjust+250}%</color>伤害，最后一段攻击造成<color=#C8B450>{DAMAGE:damageAdjust2+398}%</color>伤害。" },
      ],
      interference: [
        { nameZh: "危险驾驶", nameEn: "Reckless Driving", infoZh: "装备者物理攻击克制率提升\n装备者发动反击技时，对矩形范围内的敌人进行物理攻击，并使目标的物理抗性减少", infoEn: "Increases the character's Physical Attack rate\nWhen the character uses a Counterattack, performs a Physical Attack on enemies within a rectangular area and reduces the target's Physical Resistance", detailEn: "Character's Physical Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\nWhen the character counters, deals <color=#C8B450>{DAMAGE:damageAdjust+50}%</color> Physical Attack damage to enemies within a rectangular area, and grants the target Physical Resistance <color=#C8B450>-2%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>8</color> seconds).", detailZh: "装备者物理攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\n装备者发动反击时，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+50}%</color>物理攻击伤害，并赋予目标物理抗性<color=#C8B450>-2%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>8</color>秒)。" },
        { nameZh: "危险驾驶", nameEn: "Reckless Driving", infoZh: "装备者物理攻击克制率提升\n装备者发动反击技时，对矩形范围内的敌人进行物理攻击，并使目标的物理抗性减少", infoEn: "Increases the character's Physical Attack rate\nWhen the character uses a Counterattack, performs a Physical Attack on enemies within a rectangular area and reduces the target's Physical Resistance", detailEn: "Character's Physical Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust_ex+5}%</color>\nWhen the character counters, deals <color=#C8B450>{DAMAGE:damageAdjust_ex+70}%</color> Physical Attack damage to enemies within a rectangular range, and grants the target Physical Resistance <color=#C8B450>-4%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>4</color> stacks) (lasts <color=#C8B450>8</color> seconds).", detailZh: "装备者物理攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust_ex+5}%</color>\n装备者发动反击时，对矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+70}%</color>物理攻击伤害，并赋予目标物理抗性<color=#C8B450>-4%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>4</color>层)(持续<color=#C8B450>8</color>秒)。" },
      ],
      passive: [
        { nameZh: "逼车挑衅", nameEn: "Road Rage taunt", infoZh: "闪避后，自身物理攻击克制率提升。", infoEn: "After evading, self Physical Attack rate Up.", detailEn: "After dodging, grants self Physical Attack rate <color=#C8B450>+10%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>5</color> seconds).", detailZh: "闪避后，赋予自身物理攻击克制率<color=#C8B450>+10%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>5</color>秒)。" },
        { nameZh: "逼车挑衅", nameEn: "Road Rage taunt", infoZh: "闪避后，自身物理攻击克制率提升，且叠加层数与持续时间增加。", infoEn: "After evading, self Physical Attack rate Up, with increased stack count and duration.", detailEn: "After evading, grants self Physical Attack rate <color=#C8B450>+{STACKABLEBUFF:P0034_PassiveSkillEffectsEx_PhysicsPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>, <color=#C8B450>1</color> stack (max <color=#C8B450>2</color> stacks) (lasts <color=#C8B450>10</color> seconds).", detailZh: "闪避后，赋予自身物理攻击克制率<color=#C8B450>+{STACKABLEBUFF:P0034_PassiveSkillEffectsEx_PhysicsPierceUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果<color=#C8B450>1</color>层(最大<color=#C8B450>2</color>层)(持续<color=#C8B450>10</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0038',
    slug: 'macak',
    nameZh: "玫可可",
    nameEn: "Macak",
    nameJa: "メイココ",
    titleZh: "创世雷鸣",
    titleEn: "Genesis Thunder",
    rarity: 'UR',
    cls: 'Mage',
    icon: 'P0038_Awaken_figure_s.png',
    image: 'P0038_Awaken_figure_m.png',
    awakenImage: 'P0038_Awaken_figure_m.png',
    descriptionZh: "",
    skills: {
      normal: [
        { nameZh: "电光先兆", nameEn: "Lightning Omen", infoZh: "2段攻击范围内敌人。", infoEn: "Attacks enemies in range 2 times.", detailEn: "Hit 1: Deals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+56}%</color> damage to enemies in a designated circular area.\nHit 2: Deals <color=#C8B450>4</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+56}%</color> damage to enemies in a designated circular area.", detailZh: "一段：对指定圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust+56}%</color>伤害。\n二段：对指定圆形范围内敌方造成<color=#C8B450>4</color>次<color=#C8B450>{DAMAGE:damageAdjust+56}%</color>伤害。" },
      ],
      class: [
        { nameZh: "雷启神谕", nameEn: "Thunder-Blessed Oracle", infoZh: "[充能增幅] 赋予自身额外伤害、暴击率与暴击伤害提升效果。", infoEn: "[Charge Amp] Grants self increased Bonus Damage, Crit Rate, and critical damage.", detailEn: "[Charge Amp]\nGrants self Bonus Damage adjustment <color=#C8B450>+{BUFF:buffEffectAdjust+11}%</color>, Crit Rate <color=#C8B450>+{BUFF:buffEffectAdjust2+15}%</color>, and critical damage effect <color=#C8B450>+{BUFF:buffEffectAdjust3+11}%</color> (lasts <color=#C8B450>20</color> seconds).", detailZh: "[充能增幅]\n赋予自身额外伤害调整<color=#C8B450>+{BUFF:buffEffectAdjust+11}%</color>、暴击率<color=#C8B450>+{BUFF:buffEffectAdjust2+15}%</color>与暴击伤害<color=#C8B450>+{BUFF:buffEffectAdjust3+11}%</color>效果(持续<color=#C8B450>20</color>秒)。" },
        { nameZh: "雷启神谕", nameEn: "Thunder-Blessed Oracle", infoZh: "[充能增幅] 赋予自身额外伤害、暴击率、暴击伤害与极式蓄能提升效果。", infoEn: "[Charge Amp] Grants self increased Bonus Damage, Crit Rate, critical damage, and Extreme Skill charge speed.", detailEn: "[Charge Amp]\nGrants self Bonus Damage adjustment <color=#C8B450>+{BUFF:buffEffectAdjust_ex+11}%</color>, Crit Rate <color=#C8B450>+{BUFF:buffEffectAdjust2_ex+15}%</color>, critical damage <color=#C8B450>+{BUFF:buffEffectAdjust3_ex+16}%</color>, and Extreme Skill charge speed increase effect <color=#C8B450>{BUFF:buffEffectAdjust4_ex+32}%</color> (lasts <color=#C8B450>20</color> seconds).", detailZh: "[充能增幅]\n赋予自身额外伤害调整<color=#C8B450>+{BUFF:buffEffectAdjust_ex+11}%</color>、暴击率<color=#C8B450>+{BUFF:buffEffectAdjust2_ex+15}%</color>、暴击伤害<color=#C8B450>+{BUFF:buffEffectAdjust3_ex+16}%</color>与极式蓄能速度提升<color=#C8B450>{BUFF:buffEffectAdjust4_ex+32}%</color>效果(持续<color=#C8B450>20</color>秒)。" },
      ],
      auto: [
        { nameZh: "霆罚天命", nameEn: "Fallen Destiny", infoZh: "[极式衍生]\n3段攻击范围内所有敌人，并在最后一段攻击附加额外失衡值。", infoEn: "[Ultimate Salvo]\nAttacks all enemies within range in 3 hits, applying additional Stagger value on the last hit.", detailEn: "[Ultimate Salvo]\nTrigger Condition: Activates after fully unleashing the Ultimate\nDeals <color=#C8B450>{DAMAGE:damageAdjust+180}%</color>, <color=#C8B450>{DAMAGE:damageAdjust2+230}%</color>, and <color=#C8B450>{DAMAGE:damageAdjust3+300}%</color> damage to all enemies on the field. The last hit additionally inflicts a bonus <color=#C8B450>10</color> Stagger value.", detailZh: "[极式衍生]\n触发条件：在完整施展极式后发动\n对场上所有敌方角色造成<color=#C8B450>{DAMAGE:damageAdjust+180}%</color>、<color=#C8B450>{DAMAGE:damageAdjust2+230}%</color>、<color=#C8B450>{DAMAGE:damageAdjust3+300}%</color>伤害，最后一段攻击额外附加额外<color=#C8B450>10</color>失衡值。" },
      ],
      extreme: [
        { nameZh: "破天终裁", nameEn: "Fateful Verdict", infoZh: "以自身为中心发动多段大范围圆形攻击，并附加失衡值。", infoEn: "Launches multiple large circular attacks centered on self, inflicting Stagger.", detailEn: "Centered on self, launches consecutive attacks against enemies in the circular area, dealing <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust+200}%</color> damage, <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+300}%</color> damage, <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust3+400}%</color> damage, and finally <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust4+500}%</color> damage, each hit inflicting <color=#C8B450>1.6</color> Stagger.", detailZh: "以自己为圆心，对圆形范围内敌人发动连续攻击，分别造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust+200}%</color>伤害、<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust2+300}%</color>伤害、<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust3+400}%</color>伤害以及最后<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust4+500}%</color>伤害，每次攻击皆附加<color=#C8B450>1.6</color>点失衡值。" },
        { nameZh: "破天终裁", nameEn: "Fateful Verdict", infoZh: "以自身为中心发动极高段数的大范围圆形攻击，并持续对敌人造成大量失衡。", infoEn: "Launches a high number of large circular attacks centered on self, continuously inflicting Stagger on enemies.", detailEn: "Centered on self, launches consecutive attacks against enemies in the circular area. Includes <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust_ex+150}%</color> damage, <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2_ex+250}%</color> damage, <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust3_ex+350}%</color> damage, and finally <color=#C8B450>3</color> hits of <color=#C8B450>{DAMAGE:damageAdjust4_ex+450}%</color> damage. Each hit inflicts <color=#C8B450>1.6</color> Stagger.", detailZh: "以自己为圆心，对圆形范围内敌人发动连续攻击。包含<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust_ex+150}%</color>伤害、<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust2_ex+250}%</color>伤害、<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust3_ex+350}%</color>伤害以及最后<color=#C8B450>3</color>次<color=#C8B450>{DAMAGE:damageAdjust4_ex+450}%</color>伤害。每段攻击皆附加<color=#C8B450>1.6</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "迅雷先驰", nameEn: "Thunder's Vanguard", infoZh: "装备者魔法攻击克制率提升\n装备者若极式初始消耗等于或小于250，极式技能额外伤害提升", infoEn: "Increases the character's Magic Attack rate\nIf the Extreme Skill's initial Consume is 250 or less, increases the character's Extreme Skill Bonus Damage", detailEn: "Character's Magic Attack rate <color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\nIf the Extreme Skill's initial Consume is <color=#C8B450>250</color> or less, character's Extreme Skill Bonus Damage <color=#C8B450>+{BUFF:buffEffectAdjust2+9}%</color>", detailZh: "装备者魔法攻击克制率<color=#C8B450>+{BUFF:buffEffectAdjust+3}%</color>\n若极式初始消耗等于或小于<color=#C8B450>250</color>，装备者极式额外伤害<color=#C8B450>+{BUFF:buffEffectAdjust2+9}%</color>" },
      ],
      passive: [
        { nameZh: "轰雷破虚", nameEn: "Thunder Shattering the Void", infoZh: "以极式攻击魔法弱点敌人时，额外附加失衡值。", infoEn: "When attacking enemies with a Magic Weakness using an Extreme Skill, additionally inflicts Stagger value.", detailEn: "When attacking enemy targets weak to Magic Attack rate with an Extreme Skill, each attack additionally inflicts <color=#C8B450>{BUFF:buffEffectAdjust+1.1}</color> Stagger value.", detailZh: "以极式攻击魔法攻击克制率弱点之敌方目标时，每次攻击额外附加<color=#C8B450>{BUFF:buffEffectAdjust+1.1}</color>失衡值。" },
      ],
    },
  },
  {
    id: 'P0039',
    slug: 'dusan',
    nameZh: "杜萨",
    nameEn: "Dusan",
    nameJa: "ドゥーサ",
    titleZh: "千凝之眸",
    titleEn: "Thousand Gazing Eyes",
    rarity: 'SR',
    cls: 'Mage',
    icon: 'P0039_figure_s.png',
    image: 'P0039_figure_m.png',
    awakenImage: 'P0039_Awaken_figure_m.png',
    descriptionZh: "自幼便担任见习巫女，性格胆小怕生，却强烈渴望被需要。\n\n十八岁那年，她因不敢反抗、也因终于被「看见」，顺从地成为献祭熵灵的活祭品。然而，仪式的过程出了差错，她虽然没有牺牲，但却产生了异变——她的头发迅速衰变，化作无数颗眼球。自那之后，她的性格彻底扭曲，从阴郁内向，转为过度外放与黏着。\n\n她坚信自己是被神选中的存在，将那些眼球视为神的使者，为它们取名「小目」，并习惯与之交谈，尽管它们从不回应。这份错误的神选自信，让她产生强烈的占有欲与依附倾向。只要被她盯上的人离开视线超过三秒，她便会笑着宣告要「黏得更紧」。甚至会亲手拔下「小目」，放置在角落或厕所中监视对方。",
    descriptionEn: "She has served as an apprentice shrine maiden since childhood. Timid and shy by nature, yet strongly desires to be needed.\n\nAt eighteen, unable to resist and finally being \"seen,\" she obediently became a living sacrifice for worshipping Entropy Spirits. However, the ritual process went wrong. Although she didn't die, she underwent a transformation—her hair rapidly deteriorated, becoming countless eyeballs. Since then, her personality completely twisted, changing from gloomy and introverted to excessively outgoing and clingy.\n\nShe firmly believes she's chosen by the gods, viewing those eyeballs as divine messengers. She names them \"Little Eyes\" and habitually converses with them, though they never respond. This mistaken divine selection confidence gives her strong possessiveness and attachment tendencies. If anyone she's fixated on leaves her sight for more than three seconds, she'll smile and announce she needs to \"stick closer.\" She'll even personally pluck out \"Little Eyes\" and place them in corners or restrooms to monitor the target.",
    skills: {
      normal: [
        { nameZh: "小目之凝", nameEn: "Small Eye Gaze", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to enemies in a forward fan-shaped area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to enemies in a forward fan-shaped area.\nHit 3: Deals <color=#C8B450>2</color> hits of <color=#C8B450>{DAMAGE:damageAdjust2+80}%</color> damage to enemies in a forward fan-shaped area.", detailZh: "一段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n二段：对面前扇形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n三段：对面前扇形范围内敌方造成<color=#C8B450>2</color>次<color=#C8B450>{DAMAGE:damageAdjust2+80}%</color>伤害。" },
      ],
      class: [
        { nameZh: "蛇目发涌", nameEn: "Serpent Eye Sideburn", infoZh: "[充能增幅] 赋予自身失衡值提升。", infoEn: "[Charge Amp] Grants self increased Stagger value.", detailEn: "[Charge Amp]\nTrigger Condition: Activates after CD completes\nGrants self Stagger value <color=#C8B450>+0.5</color> effect (lasts <color=#C8B450>{BUFFDURATION:buffDurationAdjust+6}</color> seconds).", detailZh: "[充能增幅]\n触发条件：CD完成后发动\n赋予自身失衡值<color=#C8B450>+0.5</color>效果(持续<color=#C8B450>{BUFFDURATION:buffDurationAdjust+6}</color>秒)。" },
      ],
      auto: [
        { nameZh: "虚空聚视", nameEn: "Void Convergence Gaze", infoZh: "[处决] 创造一个攻击领域。", infoEn: "[Execution] Creates an attack zone.", detailEn: "[Execution]\nTrigger Conditions: Can only be activated on downed targets\nCreates a circular zone at the target location (lasts <color=#C8B450>10</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust+75}%</color> damage to enemies within range every <color=#C8B450>2</color> seconds. (The zone is not considered this character's skill)", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n在目标地点创造一个圆形领域(持续<color=#C8B450>10</color>秒)，每<color=#C8B450>2</color>秒对范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+75}%</color>伤害。 (领域不视为本角色的技能)" },
        { nameZh: "虚空聚视", nameEn: "Void Convergence Gaze", infoZh: "[处决] 攻击范围内敌人，并创造一个攻击领域。", infoEn: "[Execution] Attacks enemies within range and creates an attack zone.", detailEn: "[Execution]\nTrigger Condition: Only affects targets that are knocked down\nDeals <color=#C8B450>{DAMAGE:damageAdjust2_ex+75}%</color> damage to enemies within a designated circular area and creates a circular zone at the target location (lasts <color=#C8B450>10</color> seconds), dealing <color=#C8B450>{DAMAGE:damageAdjust_ex+75}%</color> damage to enemies within range every <color=#C8B450>2</color> seconds. (Zone is not considered this character's Skills)", detailZh: "[处决]\n触发条件：只能对倒地目标发动\n对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2_ex+75}%</color>伤害，并在目标地点创造一个圆形领域(持续<color=#C8B450>10</color>秒)，每<color=#C8B450>2</color>秒对范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+75}%</color>伤害。 (领域不视为本角色的技能)" },
      ],
      extreme: [
        { nameZh: "纵目血咒", nameEn: "Far-Seeing Blood Curse", infoZh: "多段攻击面前范围内敌人，并在最后一段攻击附加大量失衡值。", infoEn: "Attacks enemies within the area ahead multiple times, inflicting a large amount of Stagger with the final hit.", detailEn: "Deals <color=#C8B450>{DAMAGE:damageAdjust+130}%</color> damage to enemies in the fan-shaped area ahead, then deals <color=#C8B450>{DAMAGE:damageAdjust2+865}%</color> damage and <color=#C8B450>50</color> Stagger to enemies within the same area.", detailZh: "对面前扇形范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust+130}%</color>伤害，最后对该范围内敌人造成<color=#C8B450>{DAMAGE:damageAdjust2+865}%</color>伤害与<color=#C8B450>50</color>点失衡值。" },
      ],
      interference: [
        { nameZh: "不洁媚视", nameEn: "Impure Alluring Gaze", infoZh: "装备者最大生命值提升\n装备者普攻伤害提升", infoEn: "Increases the character's maximum Health\nIncreases the character's Normal Attack damage", detailEn: "Character's maximum Health <color=#C8B450>+4%</color>\nCharacter's Normal Attack damage <color=#C8B450>{BUFF:buffEffectAdjust+14}%</color>", detailZh: "装备者最大生命值<color=#C8B450>+4%</color>\n装备者普攻伤害<color=#C8B450>{BUFF:buffEffectAdjust+14}%</color>" },
      ],
      passive: [
        { nameZh: "禁忌邪瞳", nameEn: "Forbidden Evil Eye", infoZh: "自身施展处决后，提升攻击速度。", infoEn: "After self uses an Execution, increases Attack Speed.", detailEn: "After using an Execution, grants self Attack Speed <color=#C8B450>+{STACKABLEBUFF:P0039_PassiveSkillEffects_AtkSpeedUp_Lv1:stackableBuffIdAdjust:0}%</color> (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>5</color> seconds).", detailZh: "施展处决后，赋予自身攻击速度<color=#C8B450>+{STACKABLEBUFF:P0039_PassiveSkillEffects_AtkSpeedUp_Lv1:stackableBuffIdAdjust:0}%</color>(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>5</color>秒)。" },
        { nameZh: "禁忌邪瞳", nameEn: "Forbidden Evil Eye", infoZh: "我方角色施展处决后，提升自身攻击速度。", infoEn: "After an ally uses an Execution, increases self Attack Speed.", detailEn: "Each time an ally uses an Execution, grants self Attack Speed <color=#C8B450>+{STACKABLEBUFF:P0039_PassiveSkillEffectsEx_AtkSpeedUp_Lv1:stackableBuffIdAdjust_ex:0}%</color> (max <color=#C8B450>1</color> stack) (lasts <color=#C8B450>5</color> seconds).", detailZh: "每次我方角色施展处决后，赋予自身攻击速度<color=#C8B450>+{STACKABLEBUFF:P0039_PassiveSkillEffectsEx_AtkSpeedUp_Lv1:stackableBuffIdAdjust_ex:0}%</color>(最大<color=#C8B450>1</color>层)(持续<color=#C8B450>5</color>秒)。" },
      ],
    },
  },
  {
    id: 'P0045',
    slug: 'alice',
    nameZh: "爱丽丝",
    nameEn: "Alice",
    nameJa: "アリス",
    titleZh: "梦游白影",
    titleEn: "Sleepwalking White Shadow",
    rarity: 'SSR',
    cls: 'Fighter',
    icon: 'P0045_figure_s.png',
    image: 'P0045_figure_m.png',
    awakenImage: 'P0045_Awaken_figure_m.png',
    descriptionZh: "来自其他平行世界的兽人。个性乍看之下，犹如误入丛林的小白兔，听话乖巧、恭谨认份，同时也有点怕事，循规蹈矩、不愿意冒险。很怕一旦被追究责任，就会被遣送回原本时空，所以做任何事之前都会再三确认自己是否有照规章走。\n\n因为原本生活的时空文化偏原始自然，没有在现代都市的复杂人际关系中生活过，对职场礼仪有着一些从网路听来、稍微过时的奇怪认知。\n\n被路人问起自己的外观时，都会说自己是工作需要，因应节庆进行角色扮演，通常都会得到「公家机关真辛苦啊」的回应。",
    descriptionEn: "A beastman from other parallel worlds. At first glance, her personality is like a little white rabbit lost in the jungle—obedient and well-behaved, respectful and dutiful, but also somewhat timid, following rules strictly and unwilling to take risks. She's very afraid that if held accountable, she'll be sent back to her original timeline, so before doing anything, she triple-confirms whether she's following regulations.\n\nBecause the timeline she originally lived in had a more primitive, natural culture and she never lived among the complex interpersonal relationships of modern cities, she has some strange, slightly outdated knowledge about workplace etiquette picked up from the internet.\n\nWhen passersby ask about her appearance, she always says it's for work needs, doing role-playing for festivals, usually getting responses like \"public institutions sure are tough.\"",
    skills: {
      normal: [
        { nameZh: "俏兔推杆", nameEn: "Standing Paddle Push", infoZh: "3段攻击范围内敌人。", infoEn: "Attacks enemies in range 3 times.", detailEn: "Hit 1: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to enemies in a designated circular area.\nHit 2: Deals <color=#C8B450>{DAMAGE:damageAdjust+60}%</color> damage to enemies in a designated circular area.\nHit 3: Deals <color=#C8B450>{DAMAGE:damageAdjust2+115}%</color> damage to enemies in a designated circular area.", detailZh: "一段：对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n二段：对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+60}%</color>伤害。\n三段：对指定圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust2+115}%</color>伤害。" },
      ],
      class: [
        { nameZh: "幸运兔吻", nameEn: "Lucky Rabbit Kiss", infoZh: "[闪避反击][格挡反击] 攻击范围内敌人。", infoEn: "[Dodge Counter][Block Counter] Attacks enemies inside area.", detailEn: "[Dodge Counter][Block Counter]\nTrigger Condition: Activates after dodging or blocking, only if a target is within the area\nDeals <color=#C8B450>{DAMAGE:damageAdjust+223}%</color> damage to enemies in a frontal rectangular area.", detailZh: "[闪避反击][格挡反击]\n触发条件：闪避或格挡后，射程内有目标才发动\n对面前矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+223}%</color>伤害。" },
        { nameZh: "幸运兔吻", nameEn: "Lucky Rabbit Kiss", infoZh: "[闪避反击][格挡反击] 攻击范围内敌人，并缩短特攻冷却时间。", infoEn: "[Dodge Counter][Block Counter] Attacks enemies inside area and reduces Special Attack CD.", detailEn: "[Dodge Counter][Block Counter]\nTrigger Conditions: Activates after dodging or blocking, only if a target is within the area\nDeals <color=#C8B450>{DAMAGE:damageAdjust_ex+282}%</color> damage to enemies in a frontal rectangular area and reduces Special Attack CD by <color=#C8B450>2</color> seconds.", detailZh: "[闪避反击][格挡反击]\n触发条件：闪避或格挡后，射程内有目标才发动\n对面前矩形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+282}%</color>伤害，并使特攻冷却时间缩短<color=#C8B450>2</color>秒。" },
      ],
      auto: [
        { nameZh: "蹦兔清台", nameEn: "Bunny Hop Floor Clear", infoZh: "[闪避反击] 攻击范围内敌人。", infoEn: "[Dodge Counter] Attacks enemies within range.", detailEn: "[Dodge Counter]\nTrigger Condition: Activates after evading, only if a target is within range\nDeals <color=#C8B450>{DAMAGE:damageAdjust+308}%</color> damage to enemies within a circular area ahead.", detailZh: "[闪避反击]\n触发条件：闪避后，射程内有目标才发动\n对面前圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust+308}%</color>伤害。" },
      ],
      extreme: [
        { nameZh: "九号球归位", nameEn: "Ball No. 9 Returns", infoZh: "大幅提升自身闪避率，并缩短闪避与各项技能的冷却时间，同时解除职系技的触发限制。", infoEn: "Greatly increases self's Dodge Value, reduces the cooldown of Dodge and all Skills, and removes the activation restrictions on Class Skills.", detailEn: "Grants self a Dodge Value increased to <color=#C8B450>100%</color>, while fixing the maximum Dodge CD at <color=#C8B450>1</color> second (lasts <color=#C8B450>10</color> seconds), the maximum Special Attack CD at <color=#C8B450>4</color> seconds, the maximum Class Skill CD at <color=#C8B450>3</color> seconds, and during the effect, Class Skills can be activated directly regardless of trigger conditions (lasts <color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+10}</color> seconds).", detailZh: "赋予自身闪避率提升至<color=#C8B450>100%</color>效果，同时将闪避最大冷却时间固定为<color=#C8B450>1</color>秒(持续<color=#C8B450>10</color>秒)，特攻最大冷却时间固定为<color=#C8B450>4</color>秒、职系技最大冷却时间固定为<color=#C8B450>3</color>秒，且效果期间可无视触发条件直接发动职系技(持续<color=#C8B450>{STACKDURATION:stackableBuffDurationAdjust+10}</color>秒)。" },
      ],
      interference: [
        { nameZh: "灵兔架杆", nameEn: "Rabbit Vault", infoZh: "装备者物理攻击角色的暴击伤害提升\n装备者极式的暴击率提升", infoEn: "Increases the Critical Power of Physical Attack characters equipped with this\nIncreases the character's Extreme Skill Critical Rate", detailEn: "Character's Crit Damage <color=#C8B450>+{BUFF:buffEffectAdjust+14}%</color>\nCharacter's Extreme Skill Crit Rate <color=#C8B450>+{BUFF:buffEffectAdjust2+14}%</color>", detailZh: "装备者暴击伤害<color=#C8B450>+{BUFF:buffEffectAdjust+14}%</color>\n装备者极式暴击率<color=#C8B450>+{BUFF:buffEffectAdjust2+14}%</color>" },
      ],
      passive: [
        { nameZh: "命运球环", nameEn: "Fate's Orb Ring", infoZh: "我方角色发动反击时，赋予自身职系技与特攻的伤害提升效果", infoEn: "When an ally counters, grants self Damage Boost for Class Skills and Special Attack", detailEn: "Each time an ally counters, grants self Class Skill Bonus Damage and Special Attack Bonus Damage <color=#C8B450>+{STACKABLEBUFF:P0045_PassiveSkillEffects_ExtraDamage_Lv1:stackableBuffIdAdjust:0}%</color>, 1 stack (max <color=#C8B450>7</color> stacks).", detailZh: "每次我方角色发动反击后，赋予自身职系技额外伤害与特攻额外伤害<color=#C8B450>+{STACKABLEBUFF:P0045_PassiveSkillEffects_ExtraDamage_Lv1:stackableBuffIdAdjust:0}%</color>效果1层(最大<color=#C8B450>7</color>层)。" },
        { nameZh: "命运球环", nameEn: "Fate's Orb Ring", infoZh: "我方角色发动反击时，赋予自身职系技与特攻的伤害提升效果，并攻击范围内敌人。", infoEn: "When an ally counters, grants self Damage Boost for Class Skills and Special Attack, and attacks enemies within range.", detailEn: "Each time an ally counters, grants self Class Skill Bonus Damage and Special Attack Bonus Damage <color=#C8B450>+{STACKABLEBUFF:P0045_PassiveSkillEffectsEx_ExtraDamage_Lv1:stackableBuffIdAdjust_ex:0}%</color>, 1 stack (max <color=#C8B450>9</color> stacks), and deals <color=#C8B450>{DAMAGE:damageAdjust_ex+55}%</color> damage to enemies in a circular area centered on self.", detailZh: "每次我方角色发动反击后，赋予自身职系技额外伤害与特攻额外伤害<color=#C8B450>+{STACKABLEBUFF:P0045_PassiveSkillEffectsEx_ExtraDamage_Lv1:stackableBuffIdAdjust_ex:0}%</color>效果1层(最大<color=#C8B450>9</color>层)，并对以自己为中心之圆形范围内敌方造成<color=#C8B450>{DAMAGE:damageAdjust_ex+55}%</color>伤害。" },
      ],
    },
  },
];

export const majoClasses = ['Fighter', 'Mage', 'Tank', 'Healer'];
export const majoRarities = ['UR', 'SSR', 'SR'];