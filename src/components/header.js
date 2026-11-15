import { profile } from '../content.js';
export function Header() {
  return `<header class="site-header" id="top">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="David Li — home">David Li</a>
      <nav class="header-nav" aria-label="Primary navigation">
        <a href="#work">Research</a><a href="#publications">Publications</a><a href="#software">SPEFA</a><a href="#recognition">Recognition</a><a href="#beyond">Beyond academics</a>
      </nav>
      <a class="header-resume" href="${profile.resume}" target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden="true">↗</span></a>
    </div>
  </header>`;
}
