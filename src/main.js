import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Work } from './components/work.js';
import { Recognition } from './components/recognition.js';
import { About, Contact, Footer } from './components/about.js';
import { initReveals, initScrollProgress, initCardLights, initActiveNav, initMobileNav } from './motion.js';
import { initFactorLab, initSpeechDemo, initRecognitionFilters } from './interactions.js';

const app=document.getElementById('app');
app.innerHTML = `${Header()}<main id="main">${Hero()}${Work()}${Recognition()}${About()}${Contact()}</main>${Footer()}`;
initReveals();
initScrollProgress();
initCardLights();
initActiveNav();
initMobileNav();
initFactorLab();
initSpeechDemo();
initRecognitionFilters();
