"""Generate a privacy-conscious, concise résumé PDF for the public portfolio.

No street address or phone number is published. Edit entries below before regenerating.
Install dependency: pip install reportlab
Run from the project root: python tools/generate_resume.py
"""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.pdfmetrics import stringWidth

BASE = Path(__file__).resolve().parent.parent
OUTPUT = BASE / 'assets' / 'David_Li_Resume.pdf'
W, H = 612, 792
M = 43
INK = HexColor('#192333')
MUTED = HexColor('#5c6b7c')
ACCENT = HexColor('#5364de')
LINE = HexColor('#dfe4e2')
c = canvas.Canvas(str(OUTPUT), pagesize=(W, H), pageCompression=1)
c.setTitle('David Yuanze Li — Résumé | Class of 2027')
c.setAuthor('David Yuanze Li')
y = H - 50


def text(txt, x, yy, size=9, font='Helvetica', color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, yy, txt)


def right(txt, yy, size=8, font='Helvetica', color=MUTED):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawRightString(W-M, yy, txt)


def section(name):
    global y
    y -= 22
    c.setStrokeColor(LINE)
    c.setLineWidth(.7)
    c.line(M, y+9, W-M, y+9)
    text(name.upper(), M, y-2, 9, 'Helvetica-Bold', ACCENT)
    y -= 23


def wrap(s, max_width, font='Helvetica', size=8.4):
    words=s.split(' ')
    lines=[]
    line=''
    for word in words:
        candidate=(line+' '+word).strip()
        if stringWidth(candidate,font,size) <= max_width:
            line=candidate
        else:
            if line: lines.append(line)
            line=word
    if line: lines.append(line)
    return lines


def item(heading, dates, descs, space=7):
    global y
    text(heading, M, y, 9.7, 'Helvetica-Bold')
    if dates: right(dates, y, 8)
    y -= 15.5
    for d in descs:
        lines=wrap(d,W-2*M-17)
        c.setFillColor(ACCENT)
        c.circle(M+4, y+3.0, 1.3, fill=1,stroke=0)
        for l in lines:
            text(l, M+15, y, 8.6, 'Helvetica', MUTED)
            y -= 12
        y -= 2
    y -= space


text('DAVID YUANZE LI', M, y, 27, 'Helvetica-Bold')
y -= 20
text('APPLIED MATHEMATICS  /  ARTIFICIAL INTELLIGENCE  /  CYBERSECURITY', M, y, 8.7, 'Helvetica-Bold', ACCENT)
y -= 16
text('Thousand Oaks, California   |   DLi134360@gmail.com', M, y, 8.7, 'Helvetica', MUTED)
y -= 19
c.setStrokeColor(LINE)
c.line(M,y,W-M,y)
y -= 19
text('THOUSAND OAKS HIGH SCHOOL', M, y, 10.6, 'Helvetica-Bold')
right('Class of 2027', y, 9, 'Helvetica-Bold')
y -= 14
text('Center for Advanced Studies and Research  |  AP Calculus BC, AP Statistics, AP Seminar, AP Research', M, y, 8.4, 'Helvetica', MUTED)
y -= 6

section('Research & Selected Projects')
item('Carnegie Mellon University  |  Speech AI Research Intern','2024–present',[
    'Under Prof. Min Xu, assembled ~32,000 three-second audio clips and evaluated AI models for detecting stuttering.',
    'Extended the research toward attention-based localization and reference-free fluent speech reconstruction.'
],space=4)
item('UCLA  |  Computational Genomics Volunteer Researcher','2025–present',[
    'With Prof. Frank Alber, analyzed 3D genome data and disease annotations to interpret DNA methylation markers.'
],space=4)
item('UC Davis COSMOS  |  Applied Mathematics','Summer 2026',[
    "Studied set theory, topology, and probability; presented RSA's proximity vulnerability through Fermat factorization."
],space=2)

section('Selected Honors & Presentations')
# Compact one-line honor listing for easy admissions review.
honors=[
 ('2026', 'IEEE EMBC, Toronto — late-breaking abstract/poster on stuttering AI and fluency reconstruction'),
 ('2026', 'Ventura County Science Fair — 1st Place; California State Science Fair qualifier'),
 ('2026', 'AIME qualifier — AMC 12: 105; AIME: 8/15'),
 ('2026', 'AACR Special Program for High School Students — research presenter'),
 ('2025', 'ICIBM Future Scientist in AI — oral presentation and travel award'),
 ('2025', 'Ventura County Science Fair — 2nd Place for stuttering-detection research'),
 ('2024', 'Math League International Tournament — bronze medal'),
 ('2024', 'CyberPatriot — Platinum tier, state round'),
 ('2022', 'CyberPatriot middle-school national semifinalist — 13th among 260 teams'),
]
for date,description in honors:
    text(date, M, y, 8.6, 'Helvetica-Bold', ACCENT)
    lines=wrap(description, W-2*M-41, size=8.6)
    for line in lines:
        text(line, M+39, y, 8.6, 'Helvetica', MUTED)
        y-=12.5
    y-=5

section('Leadership & Community')
item('Cyber Watch Club President / CyberPatriot Team Leader','2020–present',[
    'Lead cybersecurity instruction and mentor teammates through practice and competitions.'
],space=2)
item('Research Literacy Instructor / Math Tutor','2025–present',[
    'Guide younger students in reading research literature and provide mathematics tutoring.'
],space=2)

section('More About Me')
text('Cross-country (3rd, Ventura County two-mile race)  •  Mathematics tutor  •  Student volunteer', M, y, 8.6, 'Helvetica', MUTED)
y-=13
text('Python, Bash, Linux, machine learning  •  Languages: English, Chinese; basic Spanish', M, y, 8.6, 'Helvetica', MUTED)

afooter=29
c.setStrokeColor(LINE)
c.line(M,afooter+14,W-M,afooter+14)
text('DAVID LI  /  STUDENT PORTFOLIO', M, afooter, 7.5, 'Helvetica-Bold', MUTED)
right('Updated October 2026', afooter, 7.5)
print('Last content y:',y,'min',afooter+22)
if y < afooter+22:
    raise RuntimeError('Resume content overflows footer area')
c.save()
print(OUTPUT)
