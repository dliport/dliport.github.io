# David Li — One-Page College Portfolio

An animated, admissions-friendly portfolio for **David Yuanze Li**, Class of 2027. Designed to show the strongest research, mathematical achievements, and personal experiences without asking visitors to navigate several pages.

This is a **static, modular website**: no React build, Node dependencies, API keys, backend, database, analytics, or paid hosting are needed. It runs directly on **GitHub Pages**.

## What visitors see

1. **A 30-second overview:** name, interests, first-place Ventura County Science Fair, AIME qualification, IEEE EMBC, and speech-research scale.
2. **Research in context:** the motivation, methods, and milestones behind Carnegie Mellon speech-AI research.
3. **Actual mathematical interaction:** a Fermat factorization demonstration with changing prime factors and correctly calculated search attempts.
4. **Further projects:** UC Davis COSMOS work on RSA and UCLA computational genomics.
5. **Recognition and personality:** filtered awards, leadership, teaching, athletics, gaming/creative work, and three thoughtful notes.
6. **Contact and résumé:** an email contact action and an included, sanitized single-page PDF.

The speech chart is **explicitly illustrative**. It does not present simulated data as real experimental results.

## Publish at `https://YOUR-USERNAME.github.io`

1. Sign in to GitHub and create a new **public** repository named exactly `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your actual GitHub username). If a repository already exists, back it up before replacing its files.
2. Place the **contents of this folder** at the root of that repository, so `index.html`, `src`, `styles`, `assets`, and `.nojekyll` are top-level. You can upload them with Git, GitHub Desktop, or GitHub's file uploader. Keep the `.nojekyll` file even though it is empty.
3. In the repository, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then **main** and **/(root)**; save.
4. Your site should appear at `https://YOUR-USERNAME.github.io`. GitHub says deployment may take up to about 10 minutes.

If you want to publish from an already created empty repo using a terminal, open a terminal **inside this extracted folder** and run:

```bash
git init -b main
git add .
git commit -m "Launch David's portfolio"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

If you initialized the GitHub repository with a README, instead clone that repo and copy all of this project's files into the clone before committing; do not force-push over unrelated work.

GitHub's official walkthrough: https://docs.github.com/en/pages/quickstart

## Preview on your computer

ES modules are blocked by some browsers when opening a file directly with `file://`. For the modular version, serve the project locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` in your browser. Stop the server with Ctrl+C. **You do not need to run Python on GitHub Pages.**

## Structure / modular components

```text
index.html                       Entry point + search metadata
.nojekyll                        Prevents Jekyll processing
src/
  content.js                     Single source of truth for displayed facts
  main.js                        Assembles the page and initializes components
  icons.js                       Reusable inline SVG icons
  motion.js                      Scroll reveals, header/nav, pointer effects
  interactions.js                Factorization calculations, audio tabs, filters
  components/
    header.js                     Navigation + résumé button
    hero.js                       Main introduction + awards-at-a-glance
    work.js                       Research cards + interactive visualizations
    recognition.js                Filterable recognition list
    about.js                      Beyond research, notes, contact, footer
styles/
  main.css                       CSS imports
  tokens.css                     Colors, typography, global accessibility
  layout.css                     Main page layout
  components.css                 Math lab, graphs, SVG animations
  responsive.css                 Mobile/tablet/print/reduced motion
assets/
  David_Li_Resume.pdf            Condensed public-facing resume
  favicon.svg                    Original vector site icon
  social-preview.svg             Original social-sharing graphic
tools/
  generate_resume.py             Editable ReportLab PDF generator
```

### Edit the content

Most facts are in **`src/content.js`**. That file controls the profile, top achievement metrics, project descriptions, awards, extracurriculars, and personal notes. Update it when you add a new achievement. No component markup needs to change for normal text updates.

The résumé is generated separately. Edit the descriptions in `tools/generate_resume.py`, install `reportlab` if necessary (`pip install reportlab`), and run:

```bash
python tools/generate_resume.py
```

Replace `assets/David_Li_Resume.pdf` with a more recent approved résumé at any time, keeping the filename the same.

### Edit the appearance

Colors, spacing constants, and fonts are in `styles/tokens.css`. Other styles are separated by responsibility. The fonts are loaded from Google Fonts, with local serif and system-sans fallbacks if the request fails. The page has animated orbits, scroll reveals, hover spotlights, a simulated (clearly labeled) signal visualization, and user-operated math/award interactions.

Animations automatically respect the visitor's **Reduced Motion** operating-system setting. The layout includes semantic headings, keyboard-operable controls, a skip-to-content link, accessible button states, and mobile navigation.

### Optional custom domain

You can use `dliport.dev` or another domain later without rebuilding the site. Configure the domain in **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Only then add a `CNAME` file at the root if GitHub hasn't created it automatically. Do not add a CNAME for a domain you don't control.

After the real URL is known, change `og:image` in `index.html` to the **absolute HTTPS URL** of the social-preview image (some sharing sites require that).

## Privacy / verification checklist before publishing

- The included PDF intentionally **omits David's phone number and street address**. It **does include his email**, which will become publicly accessible. Confirm he is comfortable with this or change it in `src/content.js` and the PDF generator.
- The research narrative includes a reference to his father's experience with stuttering. This appeared in the previously supplied résumé; review whether to keep that personal context public.
- Verify all dates, exact award titles, organizational affiliations, scientific descriptions, and the ~32,000-clip figure against the latest approved résumé and conference materials.
- The in-page “Notes from the work” are short reflections for the portfolio, not external published articles. Replace or link these only when the real article URLs are ready.
- Do **not** add a home address, phone number, API secrets, private transcripts, or personal school records to the public repository.

## Technical notes

- Deployment: GitHub Pages, `main` branch at `/`, no build action.
- Browser requirements: modern Chrome, Edge, Firefox or Safari with ES module support.
- Links: internal hash links; résumé is local PDF; contact uses `mailto:`.
- Illustrative audio demo uses deterministic display bars, not research data, and says so.
- Interactive RSA demonstration fixes one prime at 101 and chooses the other from a list of real primes, calculating Fermat's attempted square decompositions until a valid difference of squares is found.

**Created October 2026. Review content before publishing or sending to admissions committees.**
