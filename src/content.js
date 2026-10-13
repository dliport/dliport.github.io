/**
 * DAVID'S CONTENT FILE — edit text and links here, without touching the components.
 * All content is intended to be accurate as of October 2026. Review before publication.
 * No home address or telephone number is ever displayed.
 */
export const profile = {
  firstName: 'David',
  name: 'David Yuanze Li',
  shortName: 'David Li',
  graduationYear: '2027',
  school: 'Thousand Oaks High School',
  location: 'Thousand Oaks, California',
  email: 'DLi134360@gmail.com', // Public on this site; replace or remove if preferred.
  intro: 'I study applied mathematics because I like what happens when an elegant idea meets a complicated, real-world problem.',
  bio: 'From modeling stuttering speech to exploring the mathematics behind encryption, I follow questions across disciplines—and turn what I learn into research, tools, and experiences I can share.',
  resume: 'assets/David_Li_Resume.pdf',
  links: {
    youtube: 'https://www.youtube.com/@DragonFire2271',
  },
};

export const proofPoints = [
  { value: '1st', label: 'Ventura County Science Fair', note: 'Computational Systems · 2026', kind: 'award' },
  { value: 'AIME', label: '2026 qualifier', note: '8 / 15 on the AIME', kind: 'math' },
  { value: 'IEEE', label: 'EMBC 2026 presenter', note: 'Late-breaking research · Toronto', kind: 'research' },
  { value: '32k', label: 'speech clips assembled', note: 'Machine-learning research', kind: 'build' },
];

export const projects = [
  {
    id: 'speech',
    number: '01',
    type: 'FEATURED RESEARCH',
    title: 'Giving speech a second chance.',
    eyebrow: 'Speech AI · Carnegie Mellon University',
    date: '2024 — present',
    description: 'My father’s lifelong experience with stuttering turned a technical question into a personal one: could AI detect where speech gets interrupted, and help make communication feel more natural?',
    details: 'Under Prof. Min Xu’s mentorship, I assembled a dataset of approximately 32,000 three-second speech clips, studied model performance, and extended the project from stuttering detection toward localization and reference-free fluent-speech reconstruction.',
    outcomes: [
      '1st place · 2026 Ventura County Science Fair',
      'IEEE EMBC 2026 · late-breaking poster',
      'ICIBM 2025 · oral presentation + travel award',
    ],
    methods: ['Speech processing', 'Machine learning', 'Attention models', 'Evaluation'],
  },
  {
    id: 'rsa',
    number: '02',
    type: 'APPLIED MATHEMATICS',
    title: 'When two primes get a little too close.',
    eyebrow: 'UC Davis COSMOS · Applied Mathematics',
    date: 'Summer 2026',
    description: 'At COSMOS, I investigated a surprisingly elegant weakness in RSA: Fermat’s factorization can find the factors of an integer especially quickly when its two prime factors are close together.',
    details: 'I explored number theory alongside set theory, topology, and probability, then presented “The Foundations of RSA Encryption and the Vulnerabilities of Proximity: An Analysis of Fermat’s Factorization.”',
    methods: ['Number theory', 'RSA encryption', 'Fermat factorization'],
  },
  {
    id: 'genomics',
    number: '03',
    type: 'COMPUTATIONAL RESEARCH',
    title: 'Finding structure in biological complexity.',
    eyebrow: 'UCLA · Computational Genomics',
    date: '2025 — present',
    description: 'At UCLA, I apply computational methods to complex genomic information, helping connect three-dimensional genome data, disease annotations, and the interpretation of DNA methylation markers.',
    details: 'Working with Prof. Frank Alber, I’ve learned how mathematical and computational reasoning can illuminate questions far outside a traditional math classroom.',
    methods: ['Data analysis', '3D genomics', 'Computational modeling'],
  },
];

export const achievements = [
  { year: '2026', name: 'IEEE EMBC · Toronto', detail: 'Late-breaking research poster on AI-based stuttering detection, localization and fluency reconstruction.', tag: 'RESEARCH' },
  { year: '2026', name: 'Ventura County Science Fair · 1st Place', detail: 'Computational Systems & Analysis; qualified for the California State Science and Engineering Fair.', tag: 'RESEARCH' },
  { year: '2026', name: 'AIME Qualifier', detail: 'AMC 12 score of 105; AIME score of 8/15.', tag: 'MATHEMATICS' },
  { year: '2026', name: 'AACR High School Program', detail: 'Presented research on plasma cell-free DNA methylation markers for cancer detection.', tag: 'RESEARCH' },
  { year: '2025', name: 'ICIBM · Oral Presentation + Travel Award', detail: 'Presented stuttering-detection research in the Future Scientist in AI session.', tag: 'RESEARCH' },
  { year: '2024', name: 'Math League International · Bronze', detail: 'Bronze medal at the 13th Math League International Tournament.', tag: 'MATHEMATICS' },
  { year: '2024', name: 'CyberPatriot · Platinum Tier', detail: 'Advanced to the Platinum division of the state round.', tag: 'CYBERSECURITY' },
  { year: '2022', name: 'CyberPatriot · 13th Nationwide', detail: 'Middle-school national semifinalist team; 13th of 260 teams.', tag: 'CYBERSECURITY' },
];

export const outside = [
  {
    num: '01 / LEADERSHIP',
    title: 'Make room for others to learn.',
    description: 'I lead the Cyber Watch club, mentor CyberPatriot teammates, teach research literacy through EmpowerNext, and help students with mathematics.',
    detail: 'Club president · Research instructor · Math tutor',
    icon: 'people',
  },
  {
    num: '02 / MOVEMENT',
    title: 'Keep showing up, one mile at a time.',
    description: 'Cross-country taught me to care about the team as much as the finish line. I placed third in a Ventura County two-mile race and qualified for a Rising Stars 800m invitational.',
    detail: 'Cross-country · Track & field',
    icon: 'run',
  },
  {
    num: '03 / CREATING',
    title: 'Make something, then share it.',
    description: 'Outside research, I’ve built a small YouTube community around the game taming.io—learning by experimenting, editing, and connecting with an audience.',
    detail: '≈660 subscribers · September 2026',
    icon: 'spark',
    link: 'https://www.youtube.com/@DragonFire2271',
    linkText: 'Explore channel',
  },
];

export const notes = [
  {
    topic: 'ON MATHEMATICS',
    title: 'An elegant shortcut has a condition.',
    body: 'Fermat’s factorization turns a multiplication problem into a search for a difference of squares. The twist: its elegance becomes a practical weakness when two factors are close.',
  },
  {
    topic: 'ON RESEARCH',
    title: 'A label is only a beginning.',
    body: 'Recognizing disfluent speech matters. Finding when it happens—and asking whether a model can help reconstruct fluency—leads to more useful questions.',
  },
  {
    topic: 'ON TEAMWORK',
    title: 'Doing everything is not the same as leading.',
    body: 'CyberPatriot taught me that explaining a solution so a teammate can own it creates more impact than racing to complete every task myself.',
  },
];
