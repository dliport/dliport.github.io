import {Header} from './components/header.js';
import {Hero} from './components/hero.js';
import {Work} from './components/work.js';
import {Recognition} from './components/recognition.js';
import {About,Contact,Footer} from './components/about.js';
document.querySelector('#app').innerHTML = Header()+'<main id="main">'+Hero()+Work()+Recognition()+About()+Contact()+'</main>'+Footer();