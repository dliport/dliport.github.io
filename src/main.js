import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Work } from './components/work.js';
import { Recognition } from './components/recognition.js';
import { Publications, Presentations, Software } from './components/publications.js';
import { About, Contact, Footer } from './components/about.js';

const root = document.querySelector('#app');
root.innerHTML = `${Header()}<main id="main">${Hero()}${Work()}${Publications()}${Presentations()}${Software()}${Recognition()}${About()}${Contact()}</main>${Footer()}`;
