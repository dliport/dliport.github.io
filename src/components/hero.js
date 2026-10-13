import {profile,highlights} from '../content.js';
export function Hero(){
 return '<section class="hero container" aria-labelledby="hero-title">'+
 '<p class="hero-kicker">'+profile.school+' <span>·</span> Class of '+profile.year+'</p>'+
 '<h1 id="hero-title">David Li<span class="title-period">.</span></h1>'+
 '<p class="hero-field">Applied mathematics <span>/</span> AI research <span>/</span> Cybersecurity</p>'+
 '<p class="hero-summary">My work includes speech-AI research at Carnegie Mellon, an RSA encryption study at UC Davis COSMOS, and genomic data analysis at UCLA.</p>'+
 '<div class="hero-actions"><a class="primary-link" href="#work">Explore my work ↓</a><a class="quiet-link" href="'+profile.resume+'" target="_blank" rel="noopener noreferrer">View résumé (PDF) ↗</a></div></section>'+
 '<section class="highlights" aria-label="Selected accomplishments"><div class="container highlight-grid">'+
 highlights.map(x=>'<div class="highlight"><strong>'+x.value+'</strong><span class="highlight-title">'+x.description+'</span><span class="highlight-detail">'+x.detail+'</span></div>').join('')+
 '</div></section>';
}