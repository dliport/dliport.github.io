import { research, projects } from '../content.js';
export function Work() {
  return `<section class="section container" id="work" aria-labelledby="work-title">
    <div class="section-title"><span class="section-count">01 / WORK</span><h2 id="work-title">Research & projects</h2></div>
    <article class="featured" aria-labelledby="research-title">
      <div class="featured-main">
        <div class="project-label">FEATURED RESEARCH <span aria-hidden="true">·</span> ${research.affiliation}</div>
        <h3 id="research-title">${research.title}</h3>
        <p>${research.description}</p>
      </div>
      <dl class="research-facts">${research.facts.map(f=>`<div><dt>${f.title}</dt><dd>${f.text}</dd></div>`).join('')}</dl>
    </article>
    <div class="project-grid">${projects.map(project=>`<article class="project-card">
      <div class="project-label">${project.type}</div>
      <h3>${project.title}</h3>
      <p class="project-affiliation">${project.affiliation}</p>
      <p>${project.description}</p>
      <p class="project-footer">${project.footer}</p>
    </article>`).join('')}</div>
  </section>`;
}
