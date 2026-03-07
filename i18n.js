// =============================================================
// i18n.js — arrakh.com
//
// Detects the current language from the URL and applies
// translations from translations.js to the page.
//
// Language detection:
//   - URL contains 'jp' (e.g. jp.html, index.html?lang=jp) → Japanese
//   - Everything else → English
// =============================================================

(function () {
  // Detect language from URL path or query string
  const path   = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const isJP   = path.includes('jp') || params.get('lang') === 'jp';
  const lang   = isJP ? 'jp' : 'en';

  const t = TRANSLATIONS[lang];

  // Set <html lang=""> attribute
  document.documentElement.lang = isJP ? 'ja' : 'en';

  // Apply plain text translations: data-i18n="key"
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Apply HTML translations: data-i18n-html="key"
  // Use this for text that contains <strong>, <a>, etc.
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply list translations: data-i18n-list="key"
  // Expects an array of strings in translations.js → renders as <li> items
  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.getAttribute('data-i18n-list');
    if (!Array.isArray(t[key])) return;
    ul.innerHTML = t[key].map(item => `<li>${item}</li>`).join('');
  });

  // Update language switcher flag and label
  const langFlag = document.getElementById('lang-flag');
  if (langFlag) {
    langFlag.src = isJP ? 'assets/img/flag-indonesia.png' : 'assets/img/flag-japan.png';
    langFlag.alt = isJP ? 'Indonesian' : 'Japanese';
  }

  // Wire up language toggle button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      window.location.href = isJP ? 'index.html' : 'jp.html';
    });
  }
})();
