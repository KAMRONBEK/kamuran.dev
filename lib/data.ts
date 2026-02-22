export const personalInfo = {
  name: "Kamronbek Juraev",
  title: "React Native / React Developer",
  email: "kamuranbek1998@gmail.com",
  phone: "+998 93 689 3665",
  location: "Tashkent, Uzbekistan",
  github: "https://github.com/KAMRONBEK",
  linkedin: "https://linkedin.com/in/kamronbek-juraev",
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
  {
    name: "VBrato & SwishSportsApp",
    description:
      "Cross-platform sports and social mobile applications with real-time chat, in-app purchases, and rich media features.",
    tech: ["React Native", "GraphQL", "Sendbird", "TypeScript"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/app/vbrato/id6467449182" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.vbrato" },
    ],
  },
  {
    name: "Nexus",
    description:
      "Crypto portfolio platform providing access to 200+ digital assets with themed portfolios and blockchain wallet integration.",
    tech: ["Svelte", "React", "Blockchain", "TypeScript"],
    type: "web",
    links: [
      { label: "Website", url: "https://projectnexus.io" },
    ],
  },
  {
    name: "Nestegg.ai",
    description:
      "UK fintech platform matching borrowers with responsible lenders using credit, banking, and alternative data analysis.",
    tech: ["React", "Redux", "TypeScript", "REST APIs"],
    type: "web",
    links: [
      { label: "Website", url: "https://nestegg.ai" },
    ],
  },
  {
    name: "CLICK Uzbekistan",
    description:
      "One of Uzbekistan's leading mobile payment platforms — millions of daily transactions across iOS and Android.",
    tech: ["React Native", "Redux", "CI/CD", "JavaScript"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/app/click-uz/id976439498" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=air.com.ssdsoftware.clickuz" },
      { label: "Website", url: "https://click.uz" },
    ],
  },
  {
    name: "WorkAxle",
    description:
      "Enterprise workforce management platform with live scheduling, team communication, and job search features.",
    tech: ["React Native", "GraphQL", "Redux Saga", "Google Maps"],
    type: "mobile",
    links: [
      { label: "Website", url: "https://workaxle.com" },
    ],
  },
  {
    name: "Asia Insurance",
    description:
      "Insurance platform enabling instant OSGO policy purchases and travel insurance for vehicle owners and travelers.",
    tech: ["React Native", "React", "Redux", "Yandex Maps"],
    type: "mobile",
    links: [
      { label: "iOS", url: "https://apps.apple.com/app/asia-insurance/id1491584498" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.asiainsurance.app" },
      { label: "Website", url: "https://asiainsurance.uz" },
    ],
  },
  {
    name: "EDOCS.UZ",
    description:
      "Legally significant electronic document management system for invoices, delivery notes, and business documents.",
    tech: ["React Native", "Redux Saga", "TypeScript"],
    type: "mobile",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.edocs.mobile" },
      { label: "Website", url: "https://edocs.uz" },
    ],
  },
  {
    name: "BrainWake Alarm Clock",
    description:
      "Educational alarm app that wakes your brain by teaching vocabulary, general knowledge, and math skills every morning.",
    tech: ["React Native", "React", "Redux", "Custom Navigation"],
    type: "mobile",
    links: [
      { label: "Website", url: "https://brainwake.app" },
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
