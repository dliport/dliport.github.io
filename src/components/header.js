import { profile } from '../content.js';
import { icon } from '../icons.js';
export function Header() {
  return `
    <header class="site-header" id="top">
      <div class="header-inner shell">
        <a href="#top" class="wordmark" aria-label="David Li, back to top"><span class="wordmark-mark">d<span class="mark-dot">.</span>l</span><span class="wordmark-caption">DAVID LI <span class="wordmark-rule"></span> '27</span></a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#work" data-nav="work">Selected work</a>
          <a href="#recognition" data-nav="recognition">Recognition</a>
          <a href="#about" data-nav="about">More about me</a>
        </nav>
        <div class="header-actions">
          <a class="header-resume" href="${profile.resume}" target="_blank" rel="noopener" aria-label="Open David's resume PDF">Résumé ${icon('arrowUp', 15)}</a>
          <a class="header-hello" href="#contact">Let's talk ${icon('arrowUp', 15)}</a>
          <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon('menu',24)}</button>
        </div>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden>
        <a href="#work">Selected work <span>01</span></a>
        <a href="#recognition">Recognition <span>02</span></a>
        <a href="#about">More about me <span>03</span></a>
        <a href="${profile.resume}" target="_blank" rel="noopener">Open résumé ${icon('arrowUp',16)}</a>
        <a href="#contact">Get in touch ${icon('arrowUp',16)}</a>
      </nav>
    </header>`;
}
