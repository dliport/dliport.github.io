import { projects } from '../content.js';
import { icon } from '../icons.js';

function SpeechVisualizer() {
  return `<div class="speech-demo" aria-label="Illustration of stages in speech machine learning analysis">
    <div class="demo-head"><span><span class="demo-indicator"></span> EXPLORING THE SIGNAL</span><span class="demo-head-right">AUDIO / AI <span>✳</span></span></div>
    <div class="demo-plot">
      <div class="plot-grid" aria-hidden="true"></div>
      <div class="plot-bars" id="speech-bars" aria-hidden="true"></div>
      <div class="plot-baseline"></div>
      <div class="plot-label-left">AMPLITUDE</div><div class="plot-label-bottom">TIME →</div>
    </div>
    <div class="demo-tabs" role="group" aria-label="Illustrative stages of speech analysis">
      <button class="demo-tab is-active" type="button" data-stage="signal" aria-pressed="true"><span class="tab-number">01</span> Input speech</button>
      <button class="demo-tab" type="button" data-stage="attention" aria-pressed="false"><span class="tab-number">02</span> Localization</button>
      <button class="demo-tab" type="button" data-stage="reconstruct" aria-pressed="false"><span class="tab-number">03</span> Reconstruction</button>
    </div>
    <div class="demo-caption" id="demo-caption" aria-live="polite">First, understand the rhythm and interruptions in a speech signal.</div>
    <div class="demo-disclaimer">Conceptual illustration — not actual research outputs</div>
  </div>`;
}

function FactorLab() {
  return `<div class="factor-lab" aria-label="Interactive Fermat factorization demonstration">
    <div class="lab-heading"><span>INTERACTIVE / NUMBER THEORY</span><span class="lab-status">TRY IT <span aria-hidden="true">↗</span></span></div>
    <div class="lab-equation" aria-live="polite"><span id="lab-p">101</span><span class="math-cross">×</span><span id="lab-q">103</span><span class="math-equals">=</span><span id="lab-n">10,403</span></div>
    <label for="prime-distance" class="lab-label">Distance between the two primes <span id="lab-gap">2</span></label>
    <input type="range" min="0" max="8" step="1" value="0" id="prime-distance" class="prime-slider" aria-describedby="lab-explain" />
    <div class="lab-range"><span>CLOSER FACTORS</span><span>FARTHER APART</span></div>
    <div class="lab-output"><div><span class="lab-out-label">FERMAT SEARCH ATTEMPTS</span><strong id="lab-steps">1</strong></div><div class="lab-mini-graph" aria-hidden="true"><span id="lab-graph-bar"></span></div></div>
    <p id="lab-explain">Move the slider. When prime factors are close together, Fermat's method can find them with fewer attempts.</p>
  </div>`;
}

function GenomeArt() {
  return `<div class="genome-art" aria-label="Abstract graphic of connected genomic data points">
    <div class="genome-head"><span>GENOME / STRUCTURE</span><span>3D → INSIGHT</span></div>
    <div class="genome-canvas"><svg class="genome-svg" viewBox="0 0 580 340" fill="none" aria-hidden="true">
      <defs><linearGradient id="genomeGradient" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#4858e8"/><stop offset="1" stop-color="#6bc2d8"/></linearGradient></defs>
      <g stroke="#94a4c8" stroke-opacity=".27" stroke-width="1">
        <path d="M35 151 103 85 175 116 244 58 330 96 400 40 520 124M103 85l60 146 143-40 94-151M35 151l128 80 92 67 76-202 114 155 75-127M175 116l131 75 139 60 75-127M255 298l190-47M244 58l62 133"/>
      </g>
      <g class="genome-points" fill="url(#genomeGradient)"><circle cx="35" cy="151" r="5"/><circle cx="103" cy="85" r="6"/><circle cx="175" cy="116" r="5"/><circle cx="244" cy="58" r="7"/><circle cx="330" cy="96" r="8"/><circle cx="400" cy="40" r="5"/><circle cx="520" cy="124" r="7"/><circle cx="163" cy="231" r="7"/><circle cx="306" cy="191" r="6"/><circle cx="255" cy="298" r="5"/><circle cx="445" cy="251" r="7"/></g>
      <circle class="genome-pulse" cx="330" cy="96" r="26" stroke="#5d6ae5" stroke-width="1.5"/><circle class="genome-pulse pulse-2" cx="445" cy="251" r="20" stroke="#5d6ae5" stroke-width="1.5"/>
    </svg><span class="genome-callout callout-one">CHROMATIN</span><span class="genome-callout callout-two">DATA RELATIONSHIPS</span></div>
    <div class="genome-footer"><span>Patterns in three dimensions</span><span class="genome-badge">∑ → ◈</span></div>
  </div>`;
}

export function Work() {
  const [speech, rsa, genomics] = projects;
  return `<section class="work-section" id="work" aria-labelledby="work-title">
    <div class="shell"><div class="section-heading reveal"><div><span class="section-eyebrow"><span class="eyebrow-square"></span> 01 / THE WORK</span><h2 id="work-title">Not just ideas.<br><em>Things I've explored.</em></h2></div><p class="heading-aside">My favorite projects start with a simple question and grow into something I didn't expect.</p></div>
    <article class="featured-project card-glow reveal" id="project-speech" aria-labelledby="speech-title"><div class="featured-text"><div class="project-topline"><span class="tag tag-green">${speech.type}</span><span class="project-num">${speech.number} / 03</span></div><div class="project-school">${speech.eyebrow} <span>·</span> ${speech.date}</div><h3 id="speech-title">${speech.title}</h3><p class="project-lead">${speech.description}</p><p class="project-desc">${speech.details}</p><div class="project-result"><span class="result-icon">✳</span><div><span class="mini-label">SELECTED MILESTONES</span>${speech.outcomes.map(x=>`<div class="result-line">${icon('check',14)} ${x}</div>`).join('')}</div></div><div class="tag-row">${speech.methods.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="featured-visual">${SpeechVisualizer()}</div></article>
    <div class="project-duo">
      <article class="project-card project-rsa card-glow reveal" aria-labelledby="rsa-title"><div class="small-card-header"><span class="tag tag-blue">${rsa.type}</span><span>${rsa.number} / 03</span></div><h3 id="rsa-title">${rsa.title}</h3><p class="card-subline">${rsa.eyebrow} · ${rsa.date}</p><p class="card-story">${rsa.description}</p>${FactorLab()}<div class="card-tags">${rsa.methods.map(x=>`<span>${x}</span>`).join('')}</div></article>
      <article class="project-card project-genomics card-glow reveal" style="--delay:.07s" aria-labelledby="genomics-title"><div class="small-card-header"><span class="tag tag-blue">${genomics.type}</span><span>${genomics.number} / 03</span></div><h3 id="genomics-title">${genomics.title}</h3><p class="card-subline">${genomics.eyebrow} · ${genomics.date}</p><p class="card-story">${genomics.description}</p>${GenomeArt()}<div class="card-tags">${genomics.methods.map(x=>`<span>${x}</span>`).join('')}</div></article>
    </div>
    <div class="work-bottomline reveal"><span class="bottomline-sigil">↳</span><span>Different fields. One consistent question: <strong>how can a good idea become something useful?</strong></span></div>
    </div>
  </section>`;
}
