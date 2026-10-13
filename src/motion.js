/** Presentation only. Motion automatically respects prefers-reduced-motion. */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initReveals() {
  const sections = document.querySelectorAll('.reveal');
  if (reduced.matches || !('IntersectionObserver' in window)) {
    sections.forEach(x => x.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    }
  }, { threshold:.10, rootMargin:'0px 0px -24px 0px' });
  sections.forEach(x => obs.observe(x));
}

export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  let ticking = false;
  const update = () => {
    const limit = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = limit > 0 ? window.scrollY / limit : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, fraction))})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  update();
}

export function initCardLights() {
  if (reduced.matches || window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.card-glow').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX-r.left}px`);
      card.style.setProperty('--my', `${e.clientY-r.top}px`);
    }, {passive:true});
  });
}

export function initActiveNav() {
  if (!('IntersectionObserver' in window)) return;
  const links = Array.from(document.querySelectorAll('[data-nav]'));
  const ids = ['work','recognition','about'];
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle('is-active', a.dataset.nav === entry.target.id));
    });
  }, {rootMargin:'-28% 0px -56% 0px'});
  ids.forEach(id=>{const s=document.getElementById(id);if(s) obs.observe(s);});
}

export function initMobileNav() {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!button || !menu) return;
  const setOpen = (open) => {
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Close menu':'Open menu');
    button.innerHTML = open ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>' : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    menu.hidden = !open;
    document.body.classList.toggle('menu-open',open);
  };
  button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){setOpen(false);button.focus();}});
  window.addEventListener('resize',()=>{if(window.innerWidth>760)setOpen(false);});
}
