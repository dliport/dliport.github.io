/** Icons use inline SVG, so the page has no icon-library dependency. */
const d = {
  arrow: '<path d="M4.5 12h15M13 5.5 19.5 12 13 18.5"/>',
  arrowUp: '<path d="M5 19 19 5M7 5h12v12"/>',
  arrowDown: '<path d="M12 4v16m-7-7 7 7 7-7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M5 5l14 14M19 5 5 19"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  play: '<path d="m8 5 11 7-11 7V5Z"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M2.5 20v-2.5A5.5 5.5 0 0 1 8 12h2a5.5 5.5 0 0 1 5.5 5.5V20M16 5a3 3 0 0 1 0 6m1 2a5.5 5.5 0 0 1 4.5 5.5V20"/>',
  run: '<circle cx="15" cy="4" r="2"/><path d="m5 20 5-5 3-3m5 8-3-5-4-2-3-4m0 0-4 3m4-3 3-3 4 2"/>',
  spark: '<path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z"/>',
  circle: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/>',
  external: '<path d="M13 5h6v6m-9 3 9-9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3-3 15 0 18m0-18c3 3 3 15 0 18"/>',
  arrowLeft: '<path d="M20 12H4m7-7-7 7 7 7"/>',
};
export function icon(name, size = 20) {
  return `<svg class="icon icon-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d[name] ?? d.arrow}</svg>`;
}
export function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
