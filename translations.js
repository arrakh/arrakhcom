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
    'nav.phone': '+62 877 2128 2164',

    // ---- Hero ----
    'hero.tagline': 'Game Designer, Programmer, Sound Engineer; an all-round Generalist.',

    // ---- About ----
    'about.label': 'About',
    'about.heading': 'A little bit <strong>about me</strong>...',
    'about.body': `
      <p>Hello! my name is <strong>Arya Rakha</strong>, also known as <strong>Arrakh</strong>.</p>
      <p>Currently embarking on a 2 year <strong>REPLAY Erasmus Mundus Master in Videogames Technology</strong>, previously a <strong>Game Technology</strong> student at Electronic Engineering Polytechnic Institute of Surabaya.</p>
      <p>With around <strong>6+ years of experience in the Game Dev Industry</strong> along with my <strong>passion</strong> to learn about all the <strong>nooks and cranny of Game Development</strong>, I've involved myself in multiple projects with roles such as Game Designer, Game Programmer, Network Programmer, Project Management, and many more.</p>
      <p>I aspire to one day be a Lead Game Designer on a major project. Even then, I hope to <strong>never stop learning</strong>.</p>
    `,

    // ---- Professional Projects ----
    'projects.professional.label': 'Work',
    'projects.professional.heading': 'All the <strong>projects</strong> I\'ve been in so far...',

    'projects.bombergrounds.title':    'Bombergrounds',
    'projects.bombergrounds.studio':   'GiganticDuck AB',
    'projects.bombergrounds.platform': 'PC, Android, iOS',
    'projects.bombergrounds.description': `
      <p>Bombergrounds is a <strong>Multiplayer Cross-Platform</strong> action-packed arena inspired by classic bomber games. With more than <strong>4 million users</strong>, the game has garnered a big community of active players. Since its release in 2022, Bombergrounds has received many major updates. Find out more on the <a class="project-link" href="https://www.bombergrounds.com/reborn" target="_blank" rel="noopener">official website</a>.</p>
    `,
    'projects.bombergrounds.role': 'Role: Full-stack Game Developer',
    'projects.bombergrounds.bullets': [
      'Implemented and updated most back-end and front-end features of the game, including but not limited to: Loot Boxes, Map Maker, Bomber Pass, Skin Customization and Inventory, Progression, Shop, and many more.',
      'Worked with Game Designer and Community Manager on community feedback and game balancing across more than 8 major updates.',
      'Improved performance and loading time of the game by 40%.',
    ],

    'projects.pamali.title':    'Pamali: The Hungry Witch',
    'projects.pamali.studio':   'Storytale Studio',
    'projects.pamali.platform': 'PC',
    'projects.pamali.description': `
      <p>Pamali is a narrative horror game set in the daily lives of Indonesian society, started on Kickstarter. With the success of the <a class="project-link" href="https://store.steampowered.com/app/854570/Pamali_Indonesian_Folklore_Horror/" target="_blank" rel="noopener">1st chapter</a>, Pamali managed to continue the series up to the 4th chapter, The Hungry Witch. See the <a class="project-link" href="https://store.steampowered.com/app/990932/Pamali_Indonesian_Folklore_Horror__The_Hungry_Witch/" target="_blank" rel="noopener">Steam page</a>.</p>
    `,
    'projects.pamali.role': 'Role: Game Developer',
    'projects.pamali.bullets': [
      'Scripted levels with the provided tool to enrich the world in both Narrative and Gameplay.',
      'Assisted in the creation of assets including but not limited to: story, audio, marketing, and visual assets.',
      'Assisted in brainstorming and idea planning sessions.',
    ],

    'projects.rendezvous.title':    'Rendezvous',
    'projects.rendezvous.studio':   'Pendopo Studio',
    'projects.rendezvous.platform': 'PC',
    'projects.rendezvous.description': `
      <p>Rendezvous is a 2.5D pixel art action-puzzle adventure game set in the dystopian 2064 city of Neo-Surabaya, Indonesia. <a class="project-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Download the demo on Steam</a>.</p>
    `,
    'projects.rendezvous.role': 'Role: Lead Programmer, Game Designer',
    'projects.rendezvous.bullets': [
      'Managed and led a team of 3 programmers by planning and evaluating tasks every sprint.',
      'Designed and developed a flexible and sustainable architecture for long-term development.',
      'Maintained a Technical Design Document to bridge technical knowledge across the project.',
      'Created tools for programmers and designers to implement new mechanics and levels.',
      'Participated in critical Level and Game design decisions.',
    ],

    // ---- Personal Projects ----
    'projects.personal.label':   'Personal',
    'projects.personal.heading': 'Some of my <strong>personal projects</strong>...',
    'projects.playLink': 'Play here →',

    'projects.dangdut.title': 'Dangdut Rumble',
    'projects.dangdut.description': 'DANGDUT RUMBLE is a game about STEALING THE SPOTLIGHT with your giant SPEAKER while jamming to DANGDUT! Connect a microphone and shout to knock your opponent with your sound system. Play with up to 8 friends!',

    'projects.blocky.title': 'Blocky Babel',
    'projects.blocky.description': 'Blocky Babel is a short strategic building board game where the first player to reach the 3rd level wins! Focused on game feel, and I also learned 3D modelling in Blender while making this.',

    'projects.lovebug.title': 'Love Bug',
    'projects.lovebug.description': 'Love_Bug is a game where you prevent your human from loving anyone but you, a computer! Press "0" or "1" to type codes and "Spacebar" to match. Build your combo and gain score! Made for Confession Jam 2.',

    // ---- Testimonials ----
    'testimonials.label':   'Testimonials',
    'testimonials.heading': 'What <strong>people I\'ve worked with</strong> said about me...',

    'testimonials.torikul.quote': '"Arya is a great teammate to work with. Very knowledgeable and insightful, with the capability of complex problem-solving. Whether it\'s technical or management things, you can always discuss them with him."',
    'testimonials.torikul.name': 'Muhammad Torikul Akbar',
    'testimonials.torikul.role': 'Founder | Pendopo Studio',

    'testimonials.nauval.quote': '"He\'s undoubtedly good. A very team player with high passion for games in all scales and genres. You can\'t go wrong trusting management and designing stuff to Arya due to his massive experience in the game industry."',
    'testimonials.nauval.name': 'Nauval',
    'testimonials.nauval.role': 'CEO | Miraimimpi',

    // ---- Footer ----
    'footer.heading': 'Contact Me!',
  },


  jp: {

    // ---- Meta ----
    'meta.title': 'Arya Rakha || ゲーム開発者ポートフォリオ',

    // ---- Navigation ----
    'nav.langSwitch': 'English',
    'nav.phone': '+62 877 2128 2164',

    // ---- Hero ----
    'hero.tagline': 'ゲームデザイナー、プログラマー、サウンドエンジニア; オールラウンダーのジェネラリスト。',

    // ---- About ----
    'about.label': '自己紹介',
    'about.heading': '<strong>自己紹介</strong>を...',
    'about.body': `
      <p>どうも！<strong>Arya Rakha</strong>（アリヤラカー）と申します。ニックは<strong>Arrakh</strong>です！</p>
      <p>現在、2年間の<strong>REPLAY Erasmus Mundus Master in Videogames Technology</strong>に取り組んでいます。以前はElectronic Engineering Polytechnic Institute of Surabayaで<strong>ゲーム技術の学生</strong>でした。</p>
      <p><strong>ゲーム開発業界で6年以上の経験</strong>があり、ゲーム開発の隅々まで学びたいという<strong>情熱</strong>を持って、ゲームデザイナー、ゲームプログラマー、ネットワークプログラマー、プロジェクト管理等の役職でさまざまなプロジェクトに参加してきました。</p>
      <p>夢はいつか<strong>大きなプロジェクトのリードゲームデザイナーになること</strong>。それまでも、<strong>学び続ける</strong>ことをやめないつもりです。</p>
    `,

    // ---- Professional Projects ----
    'projects.professional.label': '職歴',
    'projects.professional.heading': '今までの<strong>プロジェクト</strong>...',

    'projects.bombergrounds.title':    'Bombergrounds',
    'projects.bombergrounds.studio':   'GiganticDuck AB',
    'projects.bombergrounds.platform': 'PC、Android、iOS',
    'projects.bombergrounds.description': `
      <p>Bombergroundsは、クラシックなボンバーゲームにインスパイアされた<strong>マルチプレイヤー・クロスプラットフォーム</strong>のアクションアリーナです。<strong>400万人以上のユーザー</strong>を誇り、2022年のリリース以来、多くの大型アップデートを重ねています。詳細は<a class="project-link" href="https://www.bombergrounds.com/reborn" target="_blank" rel="noopener">公式サイト</a>をご覧ください。</p>
    `,
    'projects.bombergrounds.role': '役職: フルスタックゲーム開発者',
    'projects.bombergrounds.bullets': [
      'ルートボックス、マップメーカー、ボンバーパス、スキンカスタマイズ、インベントリ、プログレッション、ショップなど、ゲームのバックエンド・フロントエンド機能の多くを実装・更新しました。',
      'ゲームデザイナーおよびコミュニティマネージャーと協力し、8回以上の大型アップデートにわたってコミュニティのフィードバックとゲームバランスに取り組みました。',
      'ゲームのパフォーマンスと読み込み時間を40%改善しました。',
    ],

    'projects.pamali.title':    'Pamali: The Hungry Witch',
    'projects.pamali.studio':   'Storytale Studio',
    'projects.pamali.platform': 'PC',
    'projects.pamali.description': `
      <p>Pamaliはインドネシア社会の日常を舞台にしたナラティブホラーゲームです。Kickstarterから始まり、<a class="project-link" href="https://store.steampowered.com/app/854570/Pamali_Indonesian_Folklore_Horror/" target="_blank" rel="noopener">第1章</a>の成功を経て第4章まで続いています。<a class="project-link" href="https://store.steampowered.com/app/990932/Pamali_Indonesian_Folklore_Horror__The_Hungry_Witch/" target="_blank" rel="noopener">Steamページ</a>をご覧ください。</p>
    `,
    'projects.pamali.role': '役職: ゲーム開発者',
    'projects.pamali.bullets': [
      '提供されたツールを使ってレベルをスクリプトし、ナラティブとゲームプレイの両面で世界を豊かにしました。',
      'ストーリー、オーディオ、マーケティング、ビジュアルアセットなどの制作を支援しました。',
      'ブレインストーミングやアイデア計画セッションに参加しました。',
    ],

    'projects.rendezvous.title':    'Rendezvous',
    'projects.rendezvous.studio':   'Pendopo Studio',
    'projects.rendezvous.platform': 'PC',
    'projects.rendezvous.description': `
      <p>Rendezvousはディストピアの2064年ネオスラバヤを舞台にした2.5Dピクセルアートのアクションパズルアドベンチャーゲームです。<a class="project-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Steamでデモをダウンロード</a>できます。</p>
    `,
    'projects.rendezvous.role': '役職: リードプログラマー、ゲームデザイナー',
    'projects.rendezvous.bullets': [
      '3人のプログラマーチームを率い、スプリントごとにタスクを計画・評価しました。',
      '長期開発のための柔軟で持続可能なアーキテクチャを設計・開発しました。',
      'プロジェクトの技術知識をつなぐテクニカルデザインドキュメントを維持しました。',
      'プログラマーとデザイナーが新しいメカニクスやレベルを実装するためのツールを作成しました。',
      'レベルデザインとゲームデザインの重要な決定に参加しました。',
    ],

    // ---- Personal Projects ----
    'projects.personal.label':   '個人プロジェクト',
    'projects.personal.heading': '私の<strong>個人プロジェクト</strong>...',
    'projects.playLink': 'プレイする →',

    'projects.dangdut.title': 'Dangdut Rumble',
    'projects.dangdut.description': 'DANGDUT RUMBLEは、巨大なスピーカーでDANGDUTの音楽を流しながら、スポットライトを奪い合うゲームです！マイクを接続して叫んで相手を倒しましょう。最大8人でプレイできます！',

    'projects.blocky.title': 'Blocky Babel',
    'projects.blocky.description': 'Blocky Babelは、3段目に最初に到達したプレイヤーが勝つ短い戦略的なビルディングボードゲームです。ゲームフィールに重点を置き、制作中にBlenderで3Dモデリングも習得しました。',

    'projects.lovebug.title': 'Love Bug',
    'projects.lovebug.description': 'Love_Bugはコンピューターであるあなたが、人間が他の誰かを愛さないようにするゲームです！「0」か「1」を押してコードを入力し、「スペースバー」でマッチさせましょう。Confession Jam 2のために制作しました。',

    // ---- Testimonials ----
    'testimonials.label':   '推薦の言葉',
    'testimonials.heading': '過去の<strong>同僚からの推薦</strong>...',

    'testimonials.torikul.quote': '「Aryaは素晴らしいチームメイトです。ゲーム開発の知識が広く、洞察力が高く、複雑な問題解決能力も素晴らしいです。技術的なことでも管理的なことでも、いつでも彼に相談できます。」',
    'testimonials.torikul.name': 'Muhammad Torikul Akbar',
    'testimonials.torikul.role': 'Founder | Pendopo Studio',

    'testimonials.nauval.quote': '「彼は間違いなく優秀です。あらゆるスケールとジャンルのゲームに対して高い情熱を持つ優れたチームプレーヤー。多様なゲーム経験から、Aryaにゲームデザインとプロジェクト管理を任せることは間違いありません。」',
    'testimonials.nauval.name': 'Nauval',
    'testimonials.nauval.role': 'CEO | Miraimimpi',

    // ---- Footer ----
    'footer.heading': 'お問い合わせ',
  },
};
