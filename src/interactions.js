/** All interactive math and research components are local and work without APIs. */
const PRIME = 101;
const Q_LIST = [103,107,113,127,149,173,199,227,251];

function fermatAttempts(p,q) {
  const n=p*q;
  let a=Math.ceil(Math.sqrt(n));
  let tries=0;
  while (tries<100000) {
    tries++;
    const b2=a*a-n;
    const b=Math.round(Math.sqrt(b2));
    if(b*b===b2) return tries;
    a++;
  }
  return null;
}

export function initFactorLab() {
  const slider=document.getElementById('prime-distance');
  if(!slider) return;
  const out=(id,text)=>document.getElementById(id).textContent=text;
  const update = () => {
    const i=Number(slider.value), q=Q_LIST[i];
    const tries=fermatAttempts(PRIME,q);
    out('lab-p',PRIME.toLocaleString());
    out('lab-q',q.toLocaleString());
    out('lab-n',(PRIME*q).toLocaleString());
    out('lab-gap',(q-PRIME).toString());
    out('lab-steps',tries.toLocaleString());
    slider.style.setProperty('--fill',`${i/(Q_LIST.length-1)*100}%`);
    document.getElementById('lab-graph-bar').style.width=`${Math.max(8,tries/fermatAttempts(PRIME,Q_LIST.at(-1))*100)}%`;
  };
  slider.addEventListener('input',update);
  update();
}

const captions={
  signal:'First, understand the rhythm and interruptions in a speech signal.',
  attention:'Next, examine where a model focuses to help localize disfluent moments.',
  reconstruct:'Finally, explore how a system might reconstruct a more fluent sequence.'
};
function waveHeight(i,stage) {
  const t=i/90;
  const envelope=Math.abs(Math.sin(t*13)+.33*Math.sin(t*43)+.15*Math.sin(t*73));
  const interrupted=(i>25&&i<39)||(i>62&&i<70);
  if(stage==='reconstruct') return Math.max(5, 18+30*Math.abs(Math.sin(t*21)) + 12*Math.abs(Math.sin(t*48)));
  return Math.max(5, 5+Math.round(envelope*43) + (interrupted?16:0));
}
export function initSpeechDemo() {
  const graph=document.getElementById('speech-bars');
  const buttons=Array.from(document.querySelectorAll('.demo-tab'));
  if(!graph||!buttons.length) return;
  const render=(stage)=>{
    graph.innerHTML=Array.from({length:91},(_,i)=>{
      const highlighted=(i>25&&i<39)||(i>62&&i<70);
      const emphasis=stage==='attention' ? (highlighted?' is-highlighted':' is-dimmed') : '';
      return `<span class="sound-bar${emphasis}" style="--h:${waveHeight(i,stage)}%;--i:${i}"></span>`;
    }).join('');
    graph.dataset.stage=stage;
    document.getElementById('demo-caption').textContent=captions[stage];
    buttons.forEach(b=>{
      const active=b.dataset.stage===stage;
      b.classList.toggle('is-active',active);
      b.setAttribute('aria-pressed',String(active));
    });
  };
  buttons.forEach(button=>button.addEventListener('click',()=>render(button.dataset.stage)));
  render('signal');
}

export function initRecognitionFilters() {
  const buttons=Array.from(document.querySelectorAll('.filter-pill'));
  const rows=Array.from(document.querySelectorAll('.award-row'));
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const chosen=button.dataset.filter;
    buttons.forEach(b=>{
      const active=b===button;
      b.classList.toggle('active',active);
      b.setAttribute('aria-pressed',String(active));
    });
    rows.forEach(row=>{row.hidden=chosen!=='ALL'&&row.dataset.category!==chosen;});
  }));
}
