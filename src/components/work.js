import {research,projects} from '../content.js';
export function Work(){
 return '<section class="section container" id="work" aria-labelledby="work-title">'+
 '<div class="section-title"><span class="section-count">01 / WORK</span><h2 id="work-title">Research & projects</h2></div>'+
 '<article class="featured" aria-labelledby="research-title"><div class="featured-main">'+
 '<div class="project-label">FEATURED RESEARCH · '+research.affiliation+'</div><h3 id="research-title">'+research.title+'</h3><p>'+research.description+'</p></div>'+
 '<dl class="research-facts">'+research.facts.map(f=>'<div><dt>'+f.title+'</dt><dd>'+f.text+'</dd></div>').join('')+'</dl></article>'+
 '<div class="project-grid">'+projects.map(p=>'<article class="project-card"><div class="project-label">'+p.type+'</div>'+
 '<h3>'+p.title+'</h3><p class="project-affiliation">'+p.affiliation+'</p><p>'+p.description+'</p><p class="project-footer">'+p.footer+'</p></article>').join('')+
 '</div></section>';
}