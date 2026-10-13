import { profile, proofPoints } from '../content.js';
import { icon } from '../icons.js';
export function Hero() {
  return `
  <section class="hero shell" id="overview" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="eyebrow hero-kicker reveal"><span class="eyebrow-spark" aria-hidden="true">✳</span> HELLO, I'M DAVID LI <span class="kicker-line"></span> CLASS OF ${profile.graduationYear}</div>
      <h1 id="hero-title" class="hero-title reveal" style="--delay:.08s">Finding<br><em>patterns.</em><br>Making <span class="underline-accent">impact.</span></h1>
      <p class="hero-lede reveal" style="--delay:.16s">I use <strong>applied mathematics</strong> to understand the world—whether that means teaching computers to recognize speech, exploring encryption, or finding meaning in complex data.</p>
      <div class="hero-ctas reveal" style="--delay:.23s"><a class="button button-dark" href="#work">See what I've built ${icon('arrowDown',17)}</a><a class="text-link" href="${profile.resume}" target="_blank" rel="noopener">View résumé ${icon('arrowUp',16)}</a></div>
      <div class="hero-mobile-proof reveal" style="--delay:.27s" aria-label="Quick academic highlights"><div><strong>1st</strong><span>Science Fair ’26</span></div><div><strong>AIME</strong><span>2026 qualifier</span></div><div><strong>IEEE</strong><span>EMBC ’26</span></div></div>
      <div class="hero-footnote reveal" style="--delay:.27s"><span class="tiny-cross">✳</span> THOUSAND OAKS, CALIFORNIA <span class="dot-sep"></span> APPLIED MATHEMATICS / AI / CYBERSECURITY</div>
    </div>
    <div class="hero-art reveal" style="--delay:.12s">
      <div class="hero-visual" aria-label="Animated, abstract visualization of speech AI research">
        <div class="visual-halo halo-a"></div><div class="visual-halo halo-b"></div>
        <div class="visual-topline"><span><span class="live-dot"></span> ACTIVE CURIOSITY</span><span>001 / 003</span></div>
        <div class="visual-orbit" aria-hidden="true">
          <svg viewBox="0 0 530 490" class="orbit-svg" fill="none" role="presentation"><defs><linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a6d7ff"/><stop offset="1" stop-color="#b8fdad"/></linearGradient></defs><circle cx="272" cy="230" r="159" stroke="#e3f1fc" stroke-opacity=".12" stroke-dasharray="3 9"/><ellipse cx="265" cy="235" rx="205" ry="101" transform="rotate(-31 265 235)" stroke="url(#orbitGradient)" stroke-opacity=".45"/><ellipse cx="265" cy="235" rx="188" ry="112" transform="rotate(38 265 235)" stroke="#99b7d4" stroke-opacity=".18"/><circle cx="265" cy="235" r="74" stroke="#e0f8ff" stroke-opacity=".15"/><circle cx="265" cy="235" r="49" fill="#b8fdad" fill-opacity=".075" stroke="#b8fdad" stroke-opacity=".43"/><circle cx="265" cy="235" r="7" fill="#b7f6ac"/><circle cx="130" cy="145" r="4" fill="#b7f6ac"/><circle cx="404" cy="316" r="6" fill="#a6d7ff"/><circle cx="391" cy="111" r="3" fill="#eff7f7"/></svg>
          <div class="orbit-center"><span class="orbit-symbol">∑</span><span>MATHEMATICS</span></div>
          <div class="orbit-node orbit-speech">01 <span>speech<br>AI</span></div>
          <div class="orbit-node orbit-security">02 <span>cyber<br>security</span></div>
          <div class="orbit-node orbit-genomics">03 <span>genomic<br>data</span></div>
          <div class="orbit-coord coord-tl">( x, y, z )</div><div class="orbit-coord coord-br">f(x) → insight</div>
        </div>
        <div class="visual-bottom"><div><span class="visual-bottom-label">ONE QUESTION, MANY DISCIPLINES</span><p>What can a pattern <em>change?</em></p></div><div class="visual-sign">DL<span>↗</span></div></div>
      </div>
      <div class="floating-annotation">32K SPEECH CLIPS<br>IEEE EMBC 2026 <span>↗</span></div>
    </div>
  </section>
  <section class="proof-wrap" aria-label="At a glance achievements">
    <div class="shell"><div class="proof-heading"><span class="section-index">A FEW THINGS I'VE WORKED TOWARD</span><span class="proof-lines" aria-hidden="true"></span><span class="section-index">SCROLL TO EXPLORE ↓</span></div>
    <div class="proof-grid">${proofPoints.map((p,i)=>`<article class="proof-item reveal" style="--delay:${i*.08}s"><div class="proof-value">${p.value}<span class="value-star" aria-hidden="true">✳</span></div><div class="proof-label">${p.label}</div><div class="proof-note">${p.note}</div></article>`).join('')}</div>
    </div>
  </section>`;
}
