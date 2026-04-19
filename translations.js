// =============================================================
// translations.js — arrakh.com
//
// This is the ONLY file you need to edit to change site text.
// Each key has an 'en' (English) and 'jp' (Japanese) version.
//
// Text keys: data-i18n="key"        → sets plain text
// HTML keys: data-i18n-html="key"   → can contain <strong>, <a>, etc.
// List keys: data-i18n-list="key"   → array of bullet point strings
// =============================================================

const TRANSLATIONS = {

  en: {

    // ---- Meta ----
    'meta.title': 'Arya Rakha || Game Developer Portfolio',

    // ---- Navigation ----
    'nav.langSwitch': '日本語',
    'nav.work':    'Work',
    'nav.contact': 'Contact',

    // ---- Hero ----
    'hero.tagline':    'Game Designer, Programmer, Sound Engineer — all-round Generalist.',
    'hero.cta.work':    'See My Work',
    'hero.cta.contact': 'Get In Touch',

    // ---- Bio ----
    'bio.label':   'Bio',
    'bio.heading': 'A bit about me.',
    'bio.bullets': [
      '8 years of game industry experience across design, programming, and project management.',
      'Roles held: Game Designer, Game Programmer, Network Programmer, Project Manager.',
      'Full-stack developer on Bombergrounds — serving 4 million+ active players.',
      'Erasmus Mundus Master student in Videogames Technology (2-year international program).',
      'Goal: Lead Game Designer on a major production.',
    ],

    // ---- Selected Work ----
    'work.featured.label':   'Selected Work',
    'work.featured.heading': 'Projects I\'m proud of.',

    // ---- More Work ----
    'work.all.label':   'More Work',
    'work.all.heading': 'Everything else.',
    'work.tile.personal': 'Personal project',

    // ---- Shared project strings ----
    'projects.visitSite': 'Visit Site',
    'projects.steamPage': 'Steam Page',
    'projects.playLink':  'Play here',

    // ---- Bombergrounds ----
    'projects.bombergrounds.title':    'Bombergrounds',
    'projects.bombergrounds.studio':   'GiganticDuck AB',
    'projects.bombergrounds.platform': 'PC, Android, iOS',
    'projects.bombergrounds.role': 'Full-stack Game Developer',
    'projects.bombergrounds.description': `
      <p>Bombergrounds is a <strong>Multiplayer Cross-Platform</strong> action arena inspired by classic bomber games. With more than <strong>4 million users</strong>, the game has garnered a large community of active players. Find out more on the <a class="accent-link" href="https://www.bombergrounds.com/reborn" target="_blank" rel="noopener">official website</a>.</p>
    `,
    'projects.bombergrounds.bullets': [
      'Built and shipped Loot Boxes, Map Maker, Bomber Pass, Shop, Inventory, and Progression systems.',
      'Partnered with design and community teams on game balancing across 8+ major updates.',
      'Cut game performance and loading time by 40%.',
    ],

    // ---- The Covered ----
    'projects.covered.title':    'The Covered',
    'projects.covered.studio':   'Storytale Studio',
    'projects.covered.platform': 'PC',
    'projects.covered.role': 'Game Developer',
    'projects.covered.description': `
      <p>A narrative horror experience continuing the Pamali universe. More details coming soon.</p>
    `,
    'projects.covered.bullets': [
      'Placeholder — update with real project bullets.',
    ],

    // ---- Pamali ----
    'projects.pamali.title':    'Pamali: The Hungry Witch',
    'projects.pamali.studio':   'Storytale Studio',
    'projects.pamali.platform': 'PC',
    'projects.pamali.role': 'Game Developer',
    'projects.pamali.description': `
      <p>Pamali is a narrative horror game set in the daily lives of Indonesian society, started on Kickstarter. With the success of the <a class="accent-link" href="https://store.steampowered.com/app/854570/Pamali_Indonesian_Folklore_Horror/" target="_blank" rel="noopener">1st chapter</a>, Pamali managed to continue the series up to the 4th chapter, The Hungry Witch. See the <a class="accent-link" href="https://store.steampowered.com/app/990932/Pamali_Indonesian_Folklore_Horror__The_Hungry_Witch/" target="_blank" rel="noopener">Steam page</a>.</p>
    `,
    'projects.pamali.bullets': [
      'Scripted narrative levels using the studio\'s proprietary toolset, contributing to both gameplay and world-building.',
      'Contributed across production disciplines: story, audio, marketing, and visual assets.',
      'Delivered prototypes consistently ahead of schedule, creating extra iteration time for the team.',
      'Game reached 82% positive on Steam with millions of views from YouTuber coverage.',
    ],

    // ---- Rendezvous ----
    'projects.rendezvous.title':    'Rendezvous',
    'projects.rendezvous.studio':   'Pendopo Studio',
    'projects.rendezvous.platform': 'PC',
    'projects.rendezvous.role': 'Lead Programmer, Game Designer',
    'projects.rendezvous.description': `
      <p>Rendezvous is a 2.5D pixel art action-puzzle adventure set in the dystopian 2064 city of Neo-Surabaya, Indonesia. <a class="accent-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Download the demo on Steam</a>.</p>
    `,
    'projects.rendezvous.bullets': [
      'Led a 3-programmer team across sprint planning and reviews.',
      'Designed a flexible architecture built for long-term development.',
      'Maintained a Technical Design Document used across the whole team.',
      'Built tooling for designers to implement mechanics and levels without code.',
      'Drove critical level and game design decisions.',
    ],

    // ---- Personal projects ----
    'projects.dangdut.title': 'Dangdut Rumble',
    'projects.blocky.title':  'Blocky Babel',
    'projects.lovebug.title': 'Love Bug',

    // ---- Placeholder projects ----
    'projects.ecsteroid.title':  'ECSteroid',
    'projects.memorylane.title': 'Memory Lane',

    // ---- Testimonials ----
    'testimonials.label':   'Testimonials',
    'testimonials.heading': 'What people say.',

    'testimonials.torikul.quote': '"Arya is a great teammate to work with. Very knowledgeable and insightful, with the capability of complex problem-solving. Whether it\'s technical or management things, you can always discuss them with him."',
    'testimonials.torikul.name': 'Muhammad Torikul Akbar',
    'testimonials.torikul.role': 'Founder | Pendopo Studio',

    'testimonials.nauval.quote': '"He\'s undoubtedly good. A very team player with high passion for games in all scales and genres. You can\'t go wrong trusting management and designing stuff to Arya due to his massive experience in the game industry."',
    'testimonials.nauval.name': 'Nauval',
    'testimonials.nauval.role': 'CEO | Miraimimpi',

    // ---- Contact ----
    'contact.heading':       'Let\'s work together.',
    'contact.cv.programmer': 'CV — Programmer',
    'contact.cv.designer':   'CV — Game Designer',
  },


  jp: {

    // ---- Meta ----
    'meta.title': 'Arya Rakha || ゲーム開発者ポートフォリオ',

    // ---- Navigation ----
    'nav.langSwitch': 'English',
    'nav.work':    '仕事',
    'nav.contact': 'お問い合わせ',

    // ---- Hero ----
    'hero.tagline':    'ゲームデザイナー、プログラマー、サウンドエンジニア — オールラウンドのジェネラリスト。',
    'hero.cta.work':    '仕事を見る',
    'hero.cta.contact': 'お問い合わせ',

    // ---- Bio ----
    'bio.label':   '自己紹介',
    'bio.heading': '私について。',
    'bio.bullets': [
      'ゲーム業界での経験8年。デザイン、プログラミング、プロジェクト管理にわたる。',
      '担当してきた役職: ゲームデザイナー、ゲームプログラマー、ネットワークプログラマー、プロジェクトマネージャー。',
      'Bombergroundsのフルスタック開発者 — 400万人以上のアクティブプレイヤーにサービスを提供。',
      'ビデオゲーム技術のErasmus Mundusマスタープログラム在籍中（2年間の国際プログラム）。',
      '目標: 大規模プロジェクトのリードゲームデザイナー。',
    ],

    // ---- Selected Work ----
    'work.featured.label':   'セレクト作品',
    'work.featured.heading': '自信を持って紹介できる作品。',

    // ---- More Work ----
    'work.all.label':   'その他の作品',
    'work.all.heading': 'その他すべて。',
    'work.tile.personal': '個人プロジェクト',

    // ---- Shared project strings ----
    'projects.visitSite': 'サイトを見る',
    'projects.steamPage': 'Steamページ',
    'projects.playLink':  'プレイする',

    // ---- Bombergrounds ----
    'projects.bombergrounds.title':    'Bombergrounds',
    'projects.bombergrounds.studio':   'GiganticDuck AB',
    'projects.bombergrounds.platform': 'PC、Android、iOS',
    'projects.bombergrounds.role': 'フルスタックゲーム開発者',
    'projects.bombergrounds.description': `
      <p>Bombergroundsは、クラシックなボンバーゲームにインスパイアされた<strong>マルチプレイヤー・クロスプラットフォーム</strong>のアクションアリーナです。<strong>400万人以上のユーザー</strong>を誇り、大きなコミュニティを形成しています。詳細は<a class="accent-link" href="https://www.bombergrounds.com/reborn" target="_blank" rel="noopener">公式サイト</a>をご覧ください。</p>
    `,
    'projects.bombergrounds.bullets': [
      'ルートボックス、マップメーカー、ボンバーパス、ショップ、インベントリ、プログレッションシステムを構築・リリース。',
      '8回以上の大型アップデートでデザイン・コミュニティチームと連携し、ゲームバランスを調整。',
      'ゲームのパフォーマンスと読み込み時間を40%削減。',
    ],

    // ---- The Covered ----
    'projects.covered.title':    'The Covered',
    'projects.covered.studio':   'Storytale Studio',
    'projects.covered.platform': 'PC',
    'projects.covered.role': 'ゲーム開発者',
    'projects.covered.description': `
      <p>Pamaliの世界観を継ぐナラティブホラー体験。詳細は近日公開予定。</p>
    `,
    'projects.covered.bullets': [
      'プレースホルダー — 実際のプロジェクト内容に更新してください。',
    ],

    // ---- Pamali ----
    'projects.pamali.title':    'Pamali: The Hungry Witch',
    'projects.pamali.studio':   'Storytale Studio',
    'projects.pamali.platform': 'PC',
    'projects.pamali.role': 'ゲーム開発者',
    'projects.pamali.description': `
      <p>Pamaliはインドネシア社会の日常を舞台にしたナラティブホラーゲームです。Kickstarterから始まり、<a class="accent-link" href="https://store.steampowered.com/app/854570/Pamali_Indonesian_Folklore_Horror/" target="_blank" rel="noopener">第1章</a>の成功を経て第4章まで続いています。<a class="accent-link" href="https://store.steampowered.com/app/990932/Pamali_Indonesian_Folklore_Horror__The_Hungry_Witch/" target="_blank" rel="noopener">Steamページ</a>をご覧ください。</p>
    `,
    'projects.pamali.bullets': [
      'スタジオ独自のツールセットを使用してナラティブレベルをスクリプトし、ゲームプレイと世界観の構築の両方に貢献。',
      'ストーリー、オーディオ、マーケティング、ビジュアルアセットなど、制作の各分野に横断的に貢献。',
      'プロトタイプをスケジュールより早く安定して納品し、チームに追加のイテレーション時間を生み出した。',
      'ゲームはSteamで82%の高評価を獲得し、YouTuberのカバーにより数百万再生を記録。',
    ],

    // ---- Rendezvous ----
    'projects.rendezvous.title':    'Rendezvous',
    'projects.rendezvous.studio':   'Pendopo Studio',
    'projects.rendezvous.platform': 'PC',
    'projects.rendezvous.role': 'リードプログラマー、ゲームデザイナー',
    'projects.rendezvous.description': `
      <p>ディストピアの2064年ネオスラバヤを舞台にした2.5Dピクセルアートのアクションパズルアドベンチャーゲーム。<a class="accent-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Steamでデモをダウンロード</a>できます。</p>
    `,
    'projects.rendezvous.bullets': [
      '3人のプログラマーチームをスプリント計画とレビューでリード。',
      '長期開発向けの柔軟なアーキテクチャを設計。',
      'チーム全体で使うテクニカルデザインドキュメントを維持。',
      'デザイナーがコードなしでメカニクスとレベルを実装できるツールを構築。',
      'レベルとゲームデザインの重要な決定を主導。',
    ],

    // ---- Personal projects ----
    'projects.dangdut.title': 'Dangdut Rumble',
    'projects.blocky.title':  'Blocky Babel',
    'projects.lovebug.title': 'Love Bug',

    // ---- Placeholder projects ----
    'projects.ecsteroid.title':  'ECSteroid',
    'projects.memorylane.title': 'Memory Lane',

    // ---- Testimonials ----
    'testimonials.label':   '推薦の言葉',
    'testimonials.heading': '同僚からの推薦。',

    'testimonials.torikul.quote': '「Aryaは素晴らしいチームメイトです。ゲーム開発の知識が広く、洞察力が高く、複雑な問題解決能力も優れています。技術的なことでも管理的なことでも、いつでも彼に相談できます。」',
    'testimonials.torikul.name': 'Muhammad Torikul Akbar',
    'testimonials.torikul.role': 'Founder | Pendopo Studio',

    'testimonials.nauval.quote': '「彼は間違いなく優秀です。あらゆるスケールとジャンルのゲームに対して高い情熱を持つ優れたチームプレーヤー。多様なゲーム経験から、Aryaにゲームデザインとプロジェクト管理を任せることは間違いありません。」',
    'testimonials.nauval.name': 'Nauval',
    'testimonials.nauval.role': 'CEO | Miraimimpi',

    // ---- Contact ----
    'contact.heading':       'ご一緒しましょう。',
    'contact.cv.programmer': 'CV — プログラマー',
    'contact.cv.designer':   'CV — ゲームデザイナー',
  },
};
