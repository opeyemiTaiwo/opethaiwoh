// All site text lives here. Edit this file to update the website;
// the layout in App.jsx reads from it.

export const person = {
  name: 'Opeyemi Adeniran',
  shortName: 'Yemi',
  intro:
    'Founder of She Model Tech and PhD researcher in artificial intelligence. I work on computer vision and multimodal AI, building systems that are more accurate and trustworthy.',
  portrait: '/images/yemi-portrait.webp',
  headshotUrl:
    'https://drive.google.com/drive/folders/1Ajy_vh_t_8VmQUljrs_lzGMeUv8GkJLC?usp=sharing',
};

export const ventures = {
  featured: {
    name: 'She Model Tech',
    role: 'Founder',
    tagline: 'Ascend.\nAchieve.\nAdvance.',
    description:
      'A platform that connects tech professionals with real-world projects, verified skill badges, and a community built to accelerate their careers.',
    links: [
      { label: 'Visit shemodeltech.com', href: 'https://shemodeltech.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/she-model-tech/' },
    ],
  },
  others: [
    {
      name: 'Morgan TechFest',
      role: 'Founder and Lead Director, since 2022',
      description:
        'An annual student technology innovation conference at Morgan State University that connects students with innovation, career opportunities, and industry leaders. Featured in Forbes, Yahoo Tech, and HBCU News as an example of how HBCUs drive innovation.',
      links: [
        { label: 'Website', href: 'https://www.morgantechfest.com/' },
        { label: 'Instagram', href: 'https://www.instagram.com/morgantechfest/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/morgan-techfest/' },
        { label: 'In the news', href: 'https://www.morgantechfest.com/highlights.html' },
      ],
    },
  ],
};

export const research = {
  scholarUrl: 'https://scholar.google.com/citations?user=Krnac-4AAAAJ&hl=en',
  summary:
    'My research explores how AI systems that combine language and video can analyze forensic footage and follow specific people across crowded scenes, even when they are briefly hidden from view.',
  focus:
    'I focus on how, when, and why these models get things wrong, so they can be made more trustworthy before anyone relies on them.',
};

// Leave year as '' when you don't want one shown. `note` and `href` (a link) are optional.
export const recognition = {
  honors: [
    { title: 'RealLIST Innovator, Maryland — Technical.ly', year: '2026', href: 'https://technical.ly/workforce/reallist-innovators-2026-maryland/' },
    { title: 'Featured in Forbes', year: '2026', href: 'https://www.forbes.com/sites/marybethgasman/2026/07/21/morgan-state-techfest-shows-what-hbcus-contribute-to-innovation/' },
    { title: 'Morgan State Academy Trailblazer Award', year: '2023–2026' },
    { title: '2nd Place, Wealth Summit Live Pitch', year: '2025' },
    { title: 'IBM Masters Fellowship Award', year: '2022' },
  ],
  research: [
    { title: "Published at IEEE ICDM, one of the world's top AI conferences (CORE A*)", year: '2026' },
    { title: 'Best Research Paper Award, Electrical and Computer Engineering Division', year: '2023' },
  ],
};

export const leadership = [
  { title: 'Favored Online Inc., Founder', year: '2018–2026', note: 'Transitioned into Morgan TechFest and She Model Tech' },
  { title: 'Google Women Techmakers Ambassador', year: '2022–2023' },
  { title: 'Global AI Hub Community Lead', year: '2022–2023' },
  { title: 'Omdena Lagos Nigeria, Chapter Lead', year: '2021–2022' },
];

export const bios = {
  short: {
    label: 'Short bio',
    paragraphs: [
      'Opeyemi "Yemi" Adeniran is the Founder of She Model Tech, a platform where tech professionals build real experience, earn verified skill badges, and get discovered on proof over pedigree. She is also a PhD researcher in AI at Morgan State University\'s CEAMLS, studying how AI can analyze forensic video and where it goes wrong. Featured in Forbes, with work accepted at IEEE ICDM 2026, she is a 2026 Technical.ly RealLIST Innovators honoree (Maryland), one of 15 statewide, an IBM Master Fellowship recipient, and the founder of Morgan TechFest, driven by faith and a passion for using technology to serve and uplift.',
    ],
  },
  long: {
    label: 'Long bio',
    paragraphs: [
      'Opeyemi "Yemi" Adeniran is the Founder of She Model Tech and a PhD researcher in computer science and artificial intelligence at Morgan State University. She Model Tech is a platform that helps tech professionals build real experience through real-world projects, earn verified skill badges, and grow within a community designed to accelerate their careers. Its guiding idea is simple: proof over pedigree.',
      'At Morgan State, Yemi works within the Center for Equitable AI and Machine Learning Systems (CEAMLS). Her research explores how AI systems that combine language and video can analyze forensic footage and follow specific people across crowded scenes, with a focus on when and why these models get things wrong so they can be made more trustworthy.',
      'Her work has been featured in Forbes and accepted at IEEE ICDM 2026, one of the world\'s leading conferences in artificial intelligence and data science, and she was named to Technical.ly\'s 2026 RealLIST Innovators (Maryland), one of 15 statewide honorees. She is also an IBM Master Fellowship recipient and a co-inventor on two university inventions.',
      'Yemi is the Founder and Lead Director of Morgan TechFest, an annual student technology innovation conference she launched in 2022. A woman of deep faith, she brings that conviction into all she builds, using technology as a tool to teach, serve, and uplift.',
    ],
  },
};

// Where people can reach Yemi. `icon` must be instagram, linkedin, or x.
export const socials = [
  { icon: 'instagram', label: 'Instagram', handle: '@theopeyemiadeniran', href: 'https://www.instagram.com/theopeyemiadeniran/' },
  { icon: 'linkedin', label: 'LinkedIn', handle: 'Opeyemi Adeniran', href: 'https://www.linkedin.com/in/opeyemi-adeniran/' },
  { icon: 'x', label: 'X (Twitter)', handle: '@opethaiwoh', href: 'https://x.com/opethaiwoh' },
];
