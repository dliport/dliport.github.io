import { publications, presentations } from '../content.js';

export function Publications() {
  return `<section class="section container" id="publications" aria-labelledby="publications-title">
    <div class="section-title"><span class="section-count">02 / WRITING</span><h2 id="publications-title">Publications & manuscripts</h2></div>
    <div class="publication-list">${publications.map(item => `<article class="publication">
      <p class="project-label">${item.status}</p>
      <h3>${item.title}</h3><p class="publication-venue">${item.venue}</p>
      <p class="publication-detail">${item.detail}</p>
      <div class="publication-links">${item.links.map(link => `<a class="quiet-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`).join('')}</div>
    </article>`).join('')}</div>
  </section>`;
}

export function Presentations() {
  return `<section class="section container" id="presentations" aria-labelledby="presentations-title">
    <div class="section-title"><span class="section-count">03 / PRESENTATIONS</span><h2 id="presentations-title">Conference abstracts & presentations</h2></div>
    <div class="recognition-list">${presentations.map(item => `<article class="recognition-row"><span class="recognition-year">${item.year}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('')}</div>
  </section>`;
}

export function Software() {
  return `<section class="section container" id="software" aria-labelledby="software-title">
    <div class="section-title"><span class="section-count">04 / SOFTWARE</span><h2 id="software-title">SPEFA · Speech Fluency</h2></div>
    <article class="software-feature">
      <img src="spefa/assets/logo.svg" alt="SPEFA speech fluency app logo" width="112" height="112" loading="lazy">
      <div><p class="project-label">DEVELOPED BY DAVID LI · iOS & ANDROID</p>
      <h3>Speech AI, on your smartphone.</h3>
      <p>I developed SPEFA for stuttering detection and reference-free fluent-speech reconstruction. On-device processing lets users explore their speech and compare original and reconstructed audio.</p>
      <a class="quiet-link" href="spefa/">Explore SPEFA <span aria-hidden="true">↗</span></a></div>
    </article>
  </section>`;
}
