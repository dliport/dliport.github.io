/** Edit facts and descriptions here. Sections render them automatically. */
export const profile = {
  name: 'David Yuanze Li', school:'Thousand Oaks High School', year:'2027',
  location:'Thousand Oaks, CA', email:'DLi134360@gmail.com',
  resume:'assets/David_Li_Resume.pdf', github:'https://github.com/dliport'
};
export const highlights = [
 {value:'1st place',description:'Ventura County Science Fair',detail:'Computational Systems · 2026'},
 {value:'IEEE EMBC',description:'Research poster presenter',detail:'Toronto · 2026'},
 {value:'AIME',description:'2026 qualifier',detail:'8 / 15 on the AIME'},
 {value:'ICIBM',description:'Oral presentation + travel award',detail:'Future Scientist in AI · 2025'}
];
export const research = {
 affiliation:'Carnegie Mellon University · 2024–present',
 title:'Detecting and reconstructing stuttering speech',
 description:'Inspired by my father’s experience with stuttering, I began studying how machine learning could recognize disruptions in speech. Under Professor Min Xu, I assembled approximately 32,000 three-second audio clips and evaluated detection models. I later extended the research to locate stuttering events and explore fluent-speech reconstruction.',
 facts:[
  {title:'Dataset',text:'≈32,000 three-second speech clips'},
  {title:'Focus',text:'Detection, localization, and fluency reconstruction'},
  {title:'Recognition',text:'2026 science-fair first place; IEEE EMBC poster; 2025 ICIBM oral presentation'}
 ]
};
export const projects = [
 {type:'APPLIED MATHEMATICS',affiliation:'UC Davis COSMOS · Summer 2026',
 title:'RSA encryption and Fermat’s factorization',
 description:'Studied why Fermat’s factorization works especially quickly when the two prime factors of an RSA modulus are close. Presented an analysis of this vulnerability during the COSMOS Applied Mathematics program.',
 footer:'Number theory · Cryptography'},
 {type:'COMPUTATIONAL RESEARCH',affiliation:'UCLA · 2025–present',
 title:'Computational genomics',
 description:'With Professor Frank Alber, analyzed 3D genome data and disease annotations to help interpret DNA methylation markers. This work introduced me to computational questions in clinical genomics.',
 footer:'Data analysis · 3D genome structure'}
];
export const moreRecognition = [
 {year:'2026',title:'AACR High School Research Program',description:'Presented research on cell-free DNA methylation markers for cancer detection.'},
 {year:'2024',title:'Math League International · Bronze Medal',description:'13th Math League International Tournament.'},
 {year:'2024',title:'CyberPatriot · Platinum Tier',description:'Advanced to the highest-tier state-round division.'},
 {year:'2022',title:'CyberPatriot · 13th Nationally',description:'Middle-school national semifinalist team, ranked 13th of 260.'}
];
export const beyond = [
 {title:'Leadership & teaching',description:'President of Cyber Watch; CyberPatriot team leader; instructor for EmpowerNext research literacy; math and STEM tutor.'},
 {title:'Running',description:'Cross-country runner; third place in a Ventura County two-mile race; qualified for the Tiger Invitational Rising Stars 800m.'},
 {title:'Community',description:'Youth altar-server leader at St. Jude the Apostle Church and volunteer with Guadalupe Community Services Center.'}
];