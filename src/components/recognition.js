import { achievements } from '../content.js';

export function Recognition() {
  const categories = [{id:'ALL',label:'All highlights'}, {id:'RESEARCH',label:'Research'}, {id:'MATHEMATICS',label:'Mathematics'}, {id:'CYBERSECURITY',label:'Cybersecurity'}];
  return `<section id="recognition" class="recognition-section" aria-labelledby="recognition-title"><div class="shell">
    <div class="section-heading recognition-heading reveal"><div><span class="section-eyebrow"><span class="eyebrow-square"></span> 02 / SELECTED RECOGNITION</span><h2 id="recognition-title">A little proof<br><em>along the way.</em></h2></div><p class="heading-aside">Competitions, conferences, and the opportunities that made me ask harder questions.</p></div>
    <div class="recognition-header reveal"><span class="section-index">HIGHLIGHTS / 2022—2026</span><div class="filter-buttons" role="group" aria-label="Filter recognitions">${categories.map((x,i)=>`<button type="button" class="filter-pill ${!i?'active':''}" data-filter="${x.id}" aria-pressed="${!i}">${x.label}</button>`).join('')}</div></div>
    <div class="award-list" id="award-list">${achievements.map((a,i)=>`<article class="award-row" data-category="${a.tag}" style="--index:${i}"><span class="award-year">${a.year}</span><span class="award-main"><strong>${a.name}</strong><span>${a.detail}</span></span><span class="award-tag">${a.tag}</span><span class="award-star" aria-hidden="true">✳</span></article>`).join('')}</div>
    <p class="awards-footnote reveal">Each line represents a team, mentor, challenge, or problem I learned something from.</p>
  </div></section>`;
}
