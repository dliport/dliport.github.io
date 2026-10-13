import {moreRecognition} from '../content.js';
export function Recognition(){
 return '<section class="section container recognition" id="recognition" aria-labelledby="recognition-title">'+
 '<div class="section-title"><span class="section-count">02 / RECOGNITION</span><h2 id="recognition-title">Additional recognition</h2></div>'+
 '<div class="recognition-list">'+moreRecognition.map(x=>'<article class="recognition-row"><span class="recognition-year">'+x.year+'</span><div><h3>'+x.title+'</h3><p>'+x.description+'</p></div></article>').join('')+
 '</div></section>';
}