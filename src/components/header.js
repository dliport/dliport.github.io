import {profile} from '../content.js';
export function Header(){
 return '<header class="site-header" id="top"><div class="container header-inner">'+
 '<a class="brand" href="#top">David Li<span class="brand-period">.</span></a>'+
 '<nav class="header-nav" aria-label="Primary navigation"><a href="#work">Research & projects</a><a href="#recognition">Recognition</a><a href="#beyond">Beyond academics</a></nav>'+
 '<a class="header-resume" href="'+profile.resume+'" target="_blank" rel="noopener noreferrer">Résumé ↗</a></div></header>';
}