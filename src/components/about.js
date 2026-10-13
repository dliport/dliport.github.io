import { outside, notes, profile } from '../content.js';
import { icon } from '../icons.js';

export function About() {
 return `<section class="about-section" id="about" aria-labelledby="about-title"><div class="shell">
    <div class="section-heading reveal"><div><span class="section-eyebrow"><span class="eyebrow-square"></span> 03 / THE PERSON, NOT JUST THE PROJECTS</span><h2 id="about-title">Beyond the<br><em>equations.</em></h2></div><p class="heading-aside">Some of my most useful lessons didn't happen in a lab or a classroom.</p></div>
    <div class="about-grid">${outside.map((item,i)=>`<article class="about-card card-glow reveal" style="--delay:${i*.08}s"><div class="about-card-top"><span>${item.num}</span><span class="about-icon">${icon(item.icon,23)}</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="about-card-bottom"><span>${item.detail}</span>${item.link?`<a href="${item.link}" target="_blank" rel="noopener noreferrer" aria-label="${item.linkText} (opens in a new tab)">${icon('arrowUp',19)}</a>`:'<span class="about-card-decoration">✳</span>'}</div></article>`).join('')}</div>
    <div class="thinking-section reveal"><div class="thinking-intro"><span class="section-index">NOTES FROM THE WORK</span><h3>What I've<br><em>been thinking about</em><span class="thinking-period">.</span></h3><p>Small observations that stuck with me long after the problem was solved.</p></div><div class="note-stack">${notes.map((n,i)=>`<div class="thought-note"><div class="thought-number">0${i+1}</div><div><span class="thought-topic">${n.topic}</span><h4>${n.title}</h4><p>${n.body}</p></div></div>`).join('')}</div></div>
    </div></section>`;
}

export function Contact() {
 return `<section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="shell"><div class="contact-panel reveal"><div class="contact-orbit contact-orbit-a" aria-hidden="true"></div><div class="contact-orbit contact-orbit-b" aria-hidden="true"></div><span class="contact-kicker"><span class="contact-star">✳</span> HAVE AN INTERESTING QUESTION?</span><h2 id="contact-title">Let's see where<br><em>curiosity takes us.</em></h2><p>I'm always excited to learn from people who think differently, share ideas, and build something meaningful.</p><div class="contact-cta-row"><a class="contact-button" href="mailto:${profile.email}?subject=Hello%20David">Say hello ${icon('arrowUp',22)}</a><a class="contact-resume-link" href="${profile.resume}" target="_blank" rel="noopener">Résumé / PDF ${icon('download',18)}</a></div><div class="contact-panel-bottom"><span>BASED IN THOUSAND OAKS, CALIFORNIA</span><span>THANKS FOR EXPLORING ↗</span></div></div></div></section>`;
}

export function Footer() {
 return `<footer class="footer"><div class="shell footer-inner"><div class="footer-left"><a href="#top" class="footer-monogram" aria-label="Back to top">d.l<span>✳</span></a><div><strong>${profile.shortName}</strong><span>CURIOUS BY DESIGN · CLASS OF ${profile.graduationYear}</span></div></div><div class="footer-links"><a href="#top">Back to top ↑</a><a href="${profile.resume}" target="_blank" rel="noopener">Résumé ${icon('arrowUp',13)}</a><a href="mailto:${profile.email}">Email ${icon('arrowUp',13)}</a></div><div class="footer-last">© ${new Date().getFullYear()} ${profile.shortName}. Built with curiosity, not templates.</div></div></footer>`;
}
