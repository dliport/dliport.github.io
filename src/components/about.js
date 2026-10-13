import {beyond,profile} from '../content.js';
export function About(){
 return '<section class="section container beyond" id="beyond" aria-labelledby="beyond-title">'+
 '<div class="section-title"><span class="section-count">03 / BEYOND ACADEMICS</span><h2 id="beyond-title">Beyond the classroom</h2></div>'+
 '<div class="beyond-grid">'+beyond.map(x=>'<article class="beyond-item"><h3>'+x.title+'</h3><p>'+x.description+'</p></article>').join('')+'</div></section>';
}
export function Contact(){
 return '<section class="contact" id="contact"><div class="container contact-inner"><div><h2>Get in touch</h2><p>'+profile.location+' · Class of '+profile.year+'</p></div>'+
 '<div class="contact-links"><a href="mailto:'+profile.email+'">'+profile.email+' ↗</a>'+
 '<a href="'+profile.resume+'" target="_blank" rel="noopener noreferrer">Résumé (PDF) ↗</a>'+
 '<a href="'+profile.github+'" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></section>';
}
export function Footer(){
 return '<footer class="site-footer"><div class="container footer-inner"><span>'+profile.name+' · '+profile.year+'</span><a href="#top">Back to top ↑</a></div></footer>';
}