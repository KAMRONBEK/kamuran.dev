export const personalInfo = {
  name: "Kamronbek Juraev",
  title: "React Native / React Developer",
  email: "kamuranbek1998@gmail.com",
  phone: "+998 93 689 3665",
  location: "Tashkent, Uzbekistan",
  github: "https://github.com/KAMRONBEK",
  linkedin: "https://linkedin.com/in/kamronbek-juraev",
  resume: "https://docs.google.com/document/d/1dBnvGtI7UEleFq-Jv60nFjxC3LGRG1p10vhQYkVnHyI/export?format=pdf",
  summary:
    "Software developer with 6+ years of experience building cross-platform mobile and web applications. Shipped 20+ production apps across fintech, e-commerce, insurance, and logistics. CS graduate from Inha University with a passion for clean architecture and performant UIs.",
} as const;

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Apps Shipped", value: "20+" },
  { label: "Companies", value: "6" },
  { label: "Platforms", value: "iOS, Android, Web" },
] as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  skills: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Lincoln Labs, Inc.",
    role: "Mobile Developer",
    period: "Aug 2023 — Present",
    skills: ["React Native", "Apollo GraphQL", "TypeScript", "Sendbird Chat", "Jest"],
    highlights: [
      "Developed and maintained cross-platform mobile apps (VBrato, SwishSportsApp) for iOS and Android",
      "Implemented complex UI components, animations, and integrated RESTful APIs",
      "Wrote and maintained unit tests using Jest to ensure code stability",
    ],
  },
  {
    company: "ProjectNexusApp",
    role: "Software Developer",
    period: "Aug 2022 — Jun 2023",
    skills: ["React Native", "TypeScript", "Svelte", "Blockchain", "Unit Testing"],
    highlights: [
      "Designed and developed the UI for a blockchain-integrated mobile app",
      "Integrated smart contracts, wallets, and various blockchain protocols",
      "Optimized performance — improved load times and reduced memory usage",
    ],
  },
  {
    company: "Nestegg",
    role: "Software Developer",
    period: "Feb 2022 — Aug 2022",
    skills: ["React Native", "Svelte", "Firebase", "Apollo GraphQL", "TypeScript"],
    highlights: [
      "Built cross-platform fintech mobile apps with React Native and Redux",
      "Implemented complex UI components and animations following design guidelines",
      "Integrated RESTful APIs and collaborated closely with backend teams",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Software Developer",
    period: "May 2021 — Feb 2022",
    skills: ["React Native", "Node.js", "Firebase", "Cloud Firestore", "TypeScript"],
    highlights: [
      "Active mobile app development with REST API and WebSocket features",
      "Conducted code reviews and onboarded new team members",
      "Collaborated with Backend, QA, and BA teams for optimal results",
    ],
  },
  {
    company: "Ipak Yuli Bank",
    role: "Mobile Developer",
    period: "Jun 2020 — Nov 2020",
    skills: ["React Native", "JavaScript", "REST APIs"],
    highlights: [
      "Developed and maintained the bank's mobile application",
      "Implemented security features and optimized app performance",
    ],
  },
  {
    company: "CLICK Uzbekistan",
    role: "Frontend & Mobile Developer",
    period: "Mar 2019 — May 2021",
    skills: ["React Native", "React.js", "JavaScript", "CI/CD"],
    highlights: [
      "Developed and maintained apps for one of Uzbekistan's largest payment platforms",
      "Implemented automated testing and CI/CD pipelines",
      "Conducted code reviews and mentored team members",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tech: string[];
  type: "mobile" | "web";
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  // ── Mobile Apps ──
  {
    name: "VBrato & SwishSportsApp",
    description:
      "Cross-platform sports and social mobile applications with real-time chat, in-app purchases, and rich media features.",
    tech: ["React Native", "GraphQL", "Sendbird", "TypeScript"],
    type: "mobile",
  },
  {
    name: "Align 360",
    description:
      "Construction and repair team app combining a task manager, analytical tool, and messenger for communication within contractor and subcontractor teams.",
    tech: ["React Native", "TypeScript", "Redux", "Axios"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/align-360/id1608045052" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.align360" },
    ],
  },
  {
    name: "HeyAll",
    description:
      "Event planning app connecting hosts with suppliers seamlessly — plan events on one side, manage supply services on the other.",
    tech: ["React Native", "React", "Redux", "Git"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/heyall/id1590498767" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.app.heyall" },
      { label: "Website", url: "https://www.heyallapp.com/" },
    ],
  },
  {
    name: "WorkAxle",
    description:
      "Enterprise workforce management platform with live scheduling, team communication, and job search features.",
    tech: ["React Native", "GraphQL", "Redux Saga", "Google Maps"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/workaxle/id1313407282" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.workaxle.employee" },
      { label: "Website", url: "https://www.workaxle.com/" },
    ],
  },
  {
    name: "BrainWake Alarm Clock",
    description:
      "Educational alarm app that wakes your brain by teaching vocabulary, general knowledge, and math skills every morning.",
    tech: ["React Native", "Redux", "Custom Navigation"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/brainwake-alarm-clock/id1563821774" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=brain.wake.alarm" },
      { label: "Website", url: "https://brainwake.app/" },
    ],
  },
  {
    name: "Asia Insurance",
    description:
      "Insurance platform enabling instant OSGO policy purchases and travel insurance for vehicle owners and travelers.",
    tech: ["React Native", "React", "Redux", "Yandex Maps"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/bz/app/asia-insurance/id1541470822" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.asia_insurance" },
      { label: "Website", url: "https://asiainsurance.uz/" },
    ],
  },
  {
    name: "Snap Taxi",
    description:
      "Ride-hailing and courier delivery app — enter your address, a courier picks up and delivers your item door-to-door.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/bz/app/snap-taxi/id1544768478" },
    ],
  },
  {
    name: "MyDesign",
    description:
      "Fashion design app where users select clothing patterns, choose colors, and add textile patterns to create custom looks. Supports uploading custom textile designs.",
    tech: ["React Native", "SVG", "Redux"],
    type: "mobile",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.branchenterprises.mydesign.andr" },
    ],
  },
  {
    name: "NAFT",
    description:
      "Job marketplace app — a pocket source of quick and convenient candidates and offers where each user can find what they need.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/naft/id1519755756" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=itmaker.uz.naft" },
    ],
  },
  {
    name: "Seyf Bazar",
    description:
      "Large online store in Tashkent — electronics, household appliances, smartphones, and gadgets with delivery across Uzbekistan.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/seyfbazar/id1511149101" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.itmaker.seyfbazar" },
    ],
  },
  {
    name: "Bozorlik",
    description:
      "Online marketplace for buying products at market prices from home — track products and make easy purchases via mobile.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.yuz1app" },
    ],
  },
  {
    name: "ASCON",
    description:
      "Express payment processing app — receive damages payments quickly without running around government instances.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/ascon/id1501017855" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.ascon.client" },
    ],
  },
  {
    name: "BDM",
    description:
      "Digital document signing system — each document is signed through BDM, gaining legal force for official business use.",
    tech: ["React Native", "Redux Saga", "Formik"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/bdm/id1506887882" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.bdm" },
    ],
  },
  {
    name: "EDOCS.UZ",
    description:
      "Legally significant electronic document management system for generating invoices, delivery notes, and acts in electronic form.",
    tech: ["React Native", "Redux Saga", "Google Maps"],
    type: "mobile",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.edocs.app" },
    ],
  },
  {
    name: "Primus Mall",
    description:
      "Diverse online shopping platform — purchase goods from multiple brands without leaving your home, with delivery across Uzbekistan.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/primus-mall/id1498314257" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.primusmall.app" },
    ],
  },
  {
    name: "Avtogen.uz",
    description:
      "Search and order queue car washes across Uzbekistan — find nearby locations and book your slot instantly.",
    tech: ["React Native", "Google Maps", "Redux"],
    type: "mobile",
  },
  // ── Web Apps ──
  {
    name: "Nexus",
    description:
      "Crypto portfolio platform providing access to 200+ digital assets with themed portfolios and blockchain wallet integration.",
    tech: ["Svelte", "React", "Redux", "Git"],
    type: "web",
    links: [
      { label: "Website", url: "https://www.projectnexus.app/" },
    ],
  },
  {
    name: "Nestegg.ai",
    description:
      "UK fintech platform matching borrowers with responsible lenders using credit, banking, and alternative data analysis.",
    tech: ["React", "Redux", "TypeScript"],
    type: "web",
    links: [
      { label: "Website", url: "https://nestegg.ai/" },
    ],
  },
  {
    name: "Nestegg Loan",
    description:
      "Loan matching platform — find the right loan from the right lender, check acceptance odds, and get tips on how to qualify.",
    tech: ["React", "Redux", "TypeScript"],
    type: "web",
    links: [
      { label: "Website", url: "https://loans.nestegg.ai/" },
    ],
  },
  {
    name: "WorkAxle Web",
    description:
      "Modern enterprise Workforce Management platform — extensible, futureproof, and quickly deployable at scale for enterprise customers.",
    tech: ["React", "Redux", "Git"],
    type: "web",
    links: [
      { label: "Website", url: "https://www.workaxle.com/" },
    ],
  },
  {
    name: "BrainWake Web",
    description:
      "Web version of the BrainWake Alarm Clock — expand vocabulary, improve general knowledge, and refine math skills daily.",
    tech: ["React", "Git"],
    type: "web",
    links: [
      { label: "Website", url: "https://brainwake.app/" },
    ],
  },
  {
    name: "Asia Insurance Web",
    description:
      "Web platform for buying OSGO vehicle policies and travel insurance online in just minutes.",
    tech: ["React", "Redux", "Google Maps", "Yandex Maps"],
    type: "web",
    links: [
      { label: "Website", url: "https://asiainsurance.uz/" },
    ],
  },
  {
    name: "HeyAll Web",
    description:
      "Web platform connecting event hosts with suppliers — plan events and manage services in one place.",
    tech: ["React", "Redux", "Git"],
    type: "web",
    links: [
      { label: "Website", url: "https://www.heyallapp.com/" },
    ],
  },
];

export const skillCategories = [
  {
    name: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Svelte", "HTML/CSS"],
  },
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Node.js"],
  },
  {
    name: "Tools & Services",
    skills: ["Firebase", "Apollo GraphQL", "Redux", "REST APIs", "Git", "Jest", "CI/CD"],
  },
] as const;

export const education = {
  school: "Inha University in Tashkent",
  degree: "Bachelor's in Computer Science & Engineering",
  period: "Sep 2016 — May 2020",
  gpa: "3.7",
} as const;

export const languages = [
  { name: "English", level: "Advanced (IELTS 7.5)" },
  { name: "Russian", level: "Upper-Intermediate" },
  { name: "Uzbek", level: "Native" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
