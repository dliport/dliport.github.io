import { profile, highlights } from '../content.js';
export function Hero() {
  return `<section class="hero container" aria-labelledby="hero-title">
    <p class="hero-kicker">${profile.school} <span aria-hidden="true">·</span> Class of ${profile.year}</p>
    <h1 id="hero-title">David Li<span class="title-period">.</span></h1>
    <p class="hero-field">Applied mathematics <span aria-hidden="true">/</span> AI research <span aria-hidden="true">/</span> Cybersecurity</p>
    <p class="hero-summary">I study AI for human health, applied mathematics, and cybersecurity. My work includes speech-AI research at Carnegie Mellon, a PNAS co-authored study at UCLA, and SPEFA, an app for speech fluency.</p>
    <div class="hero-actions"><a class="primary-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a class="quiet-link" href="${profile.resume}" target="_blank" rel="noopener noreferrer">View résumé (PDF) <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="highlights" aria-label="Selected accomplishments"><div class="container highlight-grid">
    ${highlights.map(item=>`<div class="highlight"><strong>${item.value}</strong><span class="highlight-title">${item.description}</span><span class="highlight-detail">${item.detail}</span></div>`).join('')}
  </div></section>`;
}
