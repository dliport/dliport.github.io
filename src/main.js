import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Work } from './components/work.js';
import { Recognition } from './components/recognition.js';
import { About, Contact, Footer } from './components/about.js';

const root = document.querySelector('#app');
root.innerHTML = `${Header()}<main id="main">${Hero()}${Work()}${Recognition()}${About()}${Contact()}</main>${Footer()}`;
