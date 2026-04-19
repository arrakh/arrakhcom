// =============================================================
// translations.js — arrakh.com
//
// Project-specific text lives in projects/[slug]/data.js.
// Edit shared site strings (nav, hero, bio, etc.) here.
// Edit project text in its own data.js file.
//
// Text keys: data-i18n="key"        → sets plain text
// HTML keys: data-i18n-html="key"   → can contain <strong>, <a>, etc.
// List keys: data-i18n-list="key"   → array of bullet point strings
// =============================================================

import bombergrounds from './projects/bombergrounds/data.js';
import pamali        from './projects/pamali/data.js';
import rendezvous    from './projects/rendezvous/data.js';
import covered       from './projects/covered/data.js';
import dangdut       from './projects/dangdut/data.js';
import blocky        from './projects/blocky/data.js';
import lovebug       from './projects/lovebug/data.js';
import colosstream   from './projects/colosstream/data.js';
import hotpawt       from './projects/hotpawt/data.js';
import memorylane    from './projects/memorylane/data.js';
import machinations  from './projects/machinations/data.js';

const PROJECTS = [
  bombergrounds, pamali, rendezvous, covered,
  dangdut, blocky, lovebug,
  colosstream, hotpawt, memorylane, machinations,
];

// Builds flat translation keys from each project's data object.
function buildProjectKeys(lang) {
  const keys = {};
  for (const p of PROJECTS) {
    const d = p[lang];
    if (!d) continue;
    const px = `projects.${p.slug}`;
    if (d.title)       keys[`${px}.title`]       = d.title;
    if (d.studio)      keys[`${px}.studio`]       = d.studio;
    if (d.platform)    keys[`${px}.platform`]     = d.platform;
    if (d.role)        keys[`${px}.role`]         = d.role;
    if (d.description) keys[`${px}.description`]  = d.description;
    if (Array.isArray(d.bullets)) keys[`${px}.bullets`] = d.bullets;
  }
  return keys;
}

export const TRANSLATIONS = {

  en: {
    // ---- Meta ----
    'meta.title': 'Arya Rakha || Game Developer Portfolio',

    // ---- Navigation ----
    'nav.langSwitch': '日本語',
    'nav.work':    'Work',
    'nav.contact': 'Contact',

    // ---- Hero ----
    'hero.tagline':     'Generalist Game Developer, Specialist Player-centric Designer.',
    'hero.cta.work':    'See My Work',
    'hero.cta.contact': 'Get In Touch',

    // ---- Bio ----
    'bio.label':   'Bio',
    'bio.heading': 'A bit about me.',
    'bio.bullets': [
      '8 years of game industry experience across design, programming, and project management.',
      'Roles held: Game Designer, Game Programmer, Network Programmer, Project Manager.',
      'Full-stack developer on Bombergrounds — serving 4 million+ active players.',
      'Erasmus Mundus Masters graduate in Game Design (2-year international program).',
    ],

    // ---- Section labels ----
    'work.featured.label':   'Selected Work',
    'work.featured.heading': 'My Professional Projects.',
    'work.all.label':        'More Work',
    'work.all.heading':      'Everything else.',
    'work.tile.personal':    'Personal project',

    // ---- Shared project UI strings ----
    'projects.visitSite': 'Visit Site',
    'projects.steamPage': 'Steam Page',
    'projects.playLink':  'Play here',

    // ---- Placeholder projects (no data.js yet) ----
    'projects.ecsteroid.title': 'ECSteroid',

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

    // Project keys merged from data.js files
    ...buildProjectKeys('en'),
  },


  jp: {
    // ---- Meta ----
    'meta.title': 'Arya Rakha || ゲーム開発者ポートフォリオ',

    // ---- Navigation ----
    'nav.langSwitch': 'English',
    'nav.work':    '仕事',
    'nav.contact': 'お問い合わせ',

    // ---- Hero ----
    'hero.tagline':     '汎用ゲーム開発者、プレイヤー中心プランナー。',
    'hero.cta.work':    '仕事を見る',
    'hero.cta.contact': 'お問い合わせ',

    // ---- Bio ----
    'bio.label':   '自己紹介',
    'bio.heading': '私について。',
    'bio.bullets': [
      'ゲーム業界での経験8年。デザイン、プログラミング、プロジェクト管理にわたる。',
      '担当してきた役職: ゲームデザイナー、ゲームプログラマー、ネットワークプログラマー、プロジェクトマネージャー。',
      'Bombergroundsのフルスタック開発者 — 400万人以上のアクティブプレイヤーにサービスを提供。',
      'ゲームデザインのErasmus Mundusマスタープログラム在籍中（2年間の国際プログラム）。',
    ],

    // ---- Section labels ----
    'work.featured.label':   'セレクト作品',
    'work.featured.heading': 'プロ作品。',
    'work.all.label':        'その他の作品',
    'work.all.heading':      'その他すべて。',
    'work.tile.personal':    '個人プロジェクト',

    // ---- Shared project UI strings ----
    'projects.visitSite': 'サイトを見る',
    'projects.steamPage': 'Steamページ',
    'projects.playLink':  'プレイする',

    // ---- Placeholder projects ----
    'projects.ecsteroid.title': 'ECSteroid',

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

    // Project keys merged from data.js files
    ...buildProjectKeys('jp'),
  },
};
