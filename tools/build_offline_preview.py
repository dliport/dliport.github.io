"""Build an optional, self-contained HTML file for double-click preview.

The real GitHub Pages website remains modular and source-driven.
Run: python tools/build_offline_preview.py
"""
from pathlib import Path
import re
import base64
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT.parent/'David_Li_Portfolio_Offline_Preview.html'
html=(ROOT/'index.html').read_text(encoding='utf-8')
css='\n'.join((ROOT/'styles'/x).read_text(encoding='utf-8') for x in ['tokens.css','layout.css','components.css','responsive.css'])
files=['content.js','icons.js','components/header.js','components/hero.js','components/work.js','components/recognition.js','components/about.js','motion.js','interactions.js','main.js']
js='\n'.join(re.sub(r'(?m)^import .*?;\s*$','',re.sub(r'(?m)^export (?=(?:const|function))','',(ROOT/'src'/x).read_text(encoding='utf-8'))) for x in files)
# Make the résumé actually downloadable even outside the folder.
pdf_b64=base64.b64encode((ROOT/'assets'/'David_Li_Resume.pdf').read_bytes()).decode('ascii')
js=js.replace("resume: 'assets/David_Li_Resume.pdf'",f"resume: 'data:application/pdf;base64,{pdf_b64}'")
html=html.replace('<link rel="stylesheet" href="styles/main.css" />',f'<style>\n{css}\n</style>')
html=html.replace('  <script type="module" src="src/main.js"></script>','')
html=html.replace('</body>',f'<script>\n{js}\n</script>\n</body>')
icon_b64=base64.b64encode((ROOT/'assets'/'favicon.svg').read_bytes()).decode('ascii')
html=html.replace('href="assets/favicon.svg"',f'href="data:image/svg+xml;base64,{icon_b64}"')
html=html.replace('<title>David Li — Math, Meaning & Making</title>','<title>David Li — Math, Meaning & Making (Offline Preview)</title>')
DEST.write_text(html,encoding='utf-8')
print(f'Built {DEST}: {DEST.stat().st_size:,} bytes')
