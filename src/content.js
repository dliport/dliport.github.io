/** Update achievements and descriptions here; components handle the layout. */
export const profile = {
  name: 'David Yuanze Li',
  shortName: 'David Li',
  school: 'Thousand Oaks High School',
  year: '2027',
  location: 'Thousand Oaks, CA',
  email: 'DLi134360@gmail.com',
  resume: 'assets/david_resume.pdf',
  github: 'https://github.com/dliport',
};

export const highlights = [
  { value: '1st place', description: 'Ventura County Science Fair', detail: 'Computational Systems · 2026' },
  { value: 'IEEE EMBC', description: 'Research poster presenter', detail: 'Toronto · 2026' },
  { value: 'AIME', description: '2026 qualifier', detail: '8 / 15 on the AIME' },
  { value: 'ICIBM', description: 'Oral presentation + travel award', detail: 'Future Scientist in AI · 2025' },
];

export const research = {
  affiliation: 'Carnegie Mellon University · 2025–present',
  title: 'Detecting and reconstructing stuttering speech',
  description: 'Inspired by my father’s experience with stuttering, I began studying how machine learning could recognize disruptions in speech. With Professor Min Xu, I developed AI methods for detection, localization, and reference-free fluency reconstruction. This research led to SPEFA, an iOS and Android app that processes speech on the device, and a first-author manuscript submitted to the Journal of Fluency Disorders.',
  facts: [
    { title: 'Dataset', text: '≈32,000 labeled, three-second speech clips' },
    { title: 'Focus', text: 'Detection, localization, and fluency reconstruction' },
    { title: 'Recognition', text: '2026 science-fair first place; IEEE EMBC poster; 2025 ICIBM oral presentation' },
  ],
};

export const projects = [
  {
    type: 'APPLIED MATHEMATICS',
    affiliation: 'UC Davis COSMOS · Summer 2026',
    title: 'RSA encryption and Fermat’s factorization',
    description: 'Studied why Fermat’s factorization works especially quickly when the two prime factors of an RSA modulus are close. Presented an analysis of this vulnerability during the COSMOS Applied Mathematics program.',
    footer: 'Number theory · Cryptography',
  },
  {
    type: 'COMPUTATIONAL RESEARCH',
    affiliation: 'UCLA · 2024–present',
    title: 'Cell-free DNA methylation & disease detection',
    description: 'With Professor Frank Alber, analyzed cell-free DNA methylation markers for a blood test designed to detect multiple diseases. Co-authored a 2026 PNAS paper and presented related cancer-detection research at AACR 2026.',
    footer: 'Computational genomics · PNAS co-author',
  },
];

export const publications = [
  {
    status: 'Published · 2026 · Co-author',
    title: 'Toward the Simultaneous Detection of Multiple Diseases with a Highly Cost-Effective Cell-Free DNA Methylome Test',
    venue: 'Proceedings of the National Academy of Sciences of the United States of America (PNAS)',
    detail: 'Media highlights include NBC News and U.S. News & World Report.',
    links: [{ label: 'Read publication', href: 'https://doi.org/10.1073/pnas.2518347123' }, { label: 'Media coverage summary', href: 'https://nature.altmetric.com/details/194715741' }],
  },
  {
    status: 'Submitted · 2026 · First author',
    title: 'A Privacy-Preserving On-Device AI System for Stuttering Detection and Reference-Free Fluency Reconstruction on Smartphones',
    venue: 'Journal of Fluency Disorders',
    detail: 'On-device speech AI for privacy-preserving stuttering detection and fluent-speech reconstruction.',
    links: [{ label: 'Read manuscript (PDF)', href: 'assets/ai.stuttering.privacy.preserving.pdf' }],
  },
  {
    status: 'Completed · Summer 2026 · Submission planned',
    title: 'When RSA Encryption Becomes Vulnerable: The Role of Prime Separation in Fermat Factorization',
    venue: 'Independent mathematics and cybersecurity research manuscript',
    detail: 'Examines how prime separation affects the vulnerability of RSA encryption to Fermat factorization.',
    links: [{ label: 'Read manuscript (PDF)', href: 'assets/math.cybersecurity.pdf' }],
  },
];

export const presentations = [
  { year: '2026', title: 'Towards Natural Speech: Attention-Based Detection, Localization, and Reference-Free Fluency Reconstruction of Stuttering Speech', description: 'Late-breaking abstract and poster · 48th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (IEEE EMBC) · Toronto, Canada.' },
  { year: '2026', title: 'Plasma Cell-Free DNA Methylation Markers for Cancer Detection', description: 'Poster · 117th Annual Conference of the American Association for Cancer Research (AACR) · San Diego, California.' },
  { year: '2025', title: 'AI-based stuttering detection', description: 'Oral presentation at the 13th International Conference on Intelligent Biology and Medicine (ICIBM) · Columbus, Ohio; received a travel award.' },
];

export const moreRecognition = [
  { year: '2026', title: 'California State Science and Engineering Fair · Qualifier', description: 'AI-based stuttering detection and fluent-speech reconstruction project.' },
  { year: '2025–2026', title: 'Ventura County Science Fair · 1st & 2nd place', description: 'Research on AI-based stuttering detection and fluent-speech reconstruction.' },
  { year: '2023–2024', title: 'President’s Volunteer Service Award', description: 'Silver and Bronze awards for volunteer service.' },
  { year: '2024', title: 'Math League International · Bronze Medal', description: '13th Math League International Tournament.' },
  { year: '2024', title: 'CyberPatriot · Platinum Tier', description: 'Advanced to the highest-tier state-round division.' },
  { year: '2022', title: 'CyberPatriot · 13th Nationally', description: 'Middle-school national semifinalist team, ranked 13th of 260.' },
];

export const beyond = [
  {
    title: 'Leadership & teaching',
    description: 'President of Cyber Watch; CyberPatriot team leader; instructor for EmpowerNext research literacy; math and STEM tutor.',
  },
  {
    title: 'Running',
    description: 'Cross-country runner; third place in a Ventura County two-mile race; qualified for the Tiger Invitational Rising Stars 800m.',
  },
  {
    title: 'Community',
    description: 'Youth altar-server leader at St. Jude the Apostle Church and volunteer with Guadalupe Community Services Center.',
  },
];
