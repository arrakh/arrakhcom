// =============================================================
// i18n.js — arrakh.com
//
// Detects language from URL and applies translations to the page.
// Language detection:
//   - URL contains 'jp' (e.g. jp.html, ?lang=jp) → Japanese
//   - Everything else → English
// =============================================================

import { TRANSLATIONS } from './translations.js';

(function () {
  const path   = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const isJP   = path.includes('jp') || params.get('lang') === 'jp';
  const lang   = isJP ? 'jp' : 'en';

  const t = TRANSLATIONS[lang];

  document.documentElement.lang = isJP ? 'ja' : 'en';

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML (supports <strong>, <a>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Lists → renders as <li> items
  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.getAttribute('data-i18n-list');
    if (!Array.isArray(t[key])) return;
    ul.innerHTML = t[key].map(item => `<li>${item}</li>`).join('');
  });

  // Language switcher flag
  const langFlag = document.getElementById('lang-flag');
  if (langFlag) {
    langFlag.src = isJP ? 'assets/img/flag-indonesia.png' : 'assets/img/flag-japan.png';
    langFlag.alt = isJP ? 'Indonesian' : 'Japanese';
  }

  // Language toggle button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      window.location.href = isJP ? 'index.html' : 'jp.html';
    });
  }

  // Page <title>
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (t[key]) document.title = t[key];
  }
})();
