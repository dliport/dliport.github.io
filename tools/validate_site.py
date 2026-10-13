"""Fast dependency-free checks for the modular static site."""
from pathlib import Path
import json, re
root=Path(__file__).resolve().parent.parent
html=(root/'index.html').read_text()
source=list((root/'src').rglob('*.js'))
css=list((root/'styles').rglob('*.css'))
problems=[]

for js in source:
    for imp in re.findall(r"import .*? from ['\"]([^'\"]+)['\"]",js.read_text()):
        if not (js.parent / imp).resolve().exists():
            problems.append(f'Unresolved import {imp} in {js.relative_to(root)}')
for style in css:
    for imp in re.findall(r"@import url\(['\"]([^'\"]+)['\"]\)",style.read_text()):
        if not (style.parent / imp).resolve().exists():
            problems.append(f'Unresolved CSS import {imp} in {style.relative_to(root)}')
for path in ['src/main.js','styles/main.css','assets/David_Li_Resume.pdf','assets/favicon.svg','assets/social-preview.svg','.nojekyll']:
    if not (root/path).exists(): problems.append(f'Missing {path}')
for ref in re.findall(r'href="(assets/[^"#?]+)"',html):
    if not (root/ref).exists():problems.append(f'Missing HTML asset: {ref}')
assert '<script type="module" src="src/main.js"></script>' in html
assert 'id="app"' in html
assert 'prefers-reduced-motion: reduce' in (root/'styles/tokens.css').read_text()
assert 'Math.sqrt' in (root/'src/interactions.js').read_text()
assert 'Conceptual illustration' in (root/'src/components/work.js').read_text()
if problems:
    raise SystemExit('FAILED:\n'+'\n'.join(problems))
print(f'PASS: {len(source)} JS modules, {len(css)} CSS files, static assets and navigation hooks are present.')
