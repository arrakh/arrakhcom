// projects/rendezvous/data.js

export default {
  slug: 'rendezvous',
  type: 'professional',
  featured: true,
  featuredOrder: 3,

  assets: {
    thumb: '../../assets/img/project-rendezvous.jpg',
  },

  links: {
    steam: 'https://store.steampowered.com/app/1409300/Rendezvous/',
  },

  en: {
    title:    'Rendezvous',
    studio:   'Pendopo Studio',
    platform: 'PC',
    role:     'Lead Programmer, Game Designer',
    description: `
      <p>Rendezvous is a 2.5D pixel art action-puzzle adventure set in the dystopian 2064 city of Neo-Surabaya, Indonesia. <a class="accent-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Download the demo on Steam</a>.</p>
    `,
    bullets: [
      'Led a 3-programmer team across sprint planning and reviews.',
      'Designed a flexible architecture built for long-term development.',
      'Maintained a Technical Design Document used across the whole team.',
      'Built tooling for designers to implement mechanics and levels without code.',
      'Drove critical level and game design decisions.',
    ],
  },

  jp: {
    title:    'Rendezvous',
    studio:   'Pendopo Studio',
    platform: 'PC',
    role:     'リードプログラマー、ゲームデザイナー',
    description: `
      <p>ディストピアの2064年ネオスラバヤを舞台にした2.5Dピクセルアートのアクションパズルアドベンチャーゲーム。<a class="accent-link" href="https://store.steampowered.com/app/1409300/Rendezvous/" target="_blank" rel="noopener">Steamでデモをダウンロード</a>できます。</p>
    `,
    bullets: [
      '3人のプログラマーチームをスプリント計画とレビューでリード。',
      '長期開発向けの柔軟なアーキテクチャを設計。',
      'チーム全体で使うテクニカルデザインドキュメントを維持。',
      'デザイナーがコードなしでメカニクスとレベルを実装できるツールを構築。',
      'レベルとゲームデザインの重要な決定を主導。',
    ],
  },
};
