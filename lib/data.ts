export const personalInfo = {
  name: "Kamronbek Juraev",
  firstName: "KAMRONBEK",
  lastName: "JURAEV",
  initials: "KJ",
  title: "React Native / React Developer",
  tagline: "Software Engineer · React Native · Tashkent",
  email: "kamuranbek1998@gmail.com",
  location: "Tashkent, UZ",
  timezone: "GMT+5",
  github: "https://github.com/KAMRONBEK",
  linkedin: "https://linkedin.com/in/kamronbek-juraev",
  resume:
    "https://docs.google.com/document/d/1dBnvGtI7UEleFq-Jv60nFjxC3LGRG1p10vhQYkVnHyI/export?format=pdf",
} as const;

export const navSections = [
  { label: "work", href: "#work" },
  { label: "craft", href: "#craft" },
  { label: "path", href: "#path" },
  { label: "stack", href: "#stack" },
] as const;

export interface Counter {
  value: number;
  suffix: string;
  label: string;
}

export const counters: Counter[] = [
  { value: 6, suffix: "+", label: "Years shipping" },
  { value: 20, suffix: "+", label: "Apps in production" },
  { value: 6, suffix: "", label: "Companies" },
  { value: 3, suffix: "", label: "Platforms" },
];

export interface KineticPhrase {
  text: string;
  outline: boolean;
}

export const kineticPhrases: KineticPhrase[] = [
  { text: "SHIPPING PRODUCTION APPS", outline: false },
  { text: "SINCE 2019", outline: true },
  { text: "REACT NATIVE / TYPESCRIPT / GRAPHQL", outline: false },
  { text: "iOS · ANDROID · WEB", outline: true },
];

export const craftStatement =
  "I sweat the details nobody notices — the sixty-fps list, the offline state, the empty screen, the two-hundred-millisecond transition. Because in production, craft is the only thing that survives.";

export interface AppLink {
  label: string;
  url: string;
}

export interface FeaturedApp {
  name: string;
  kind: string;
  image: string;
  blurb: string;
  tech: string[];
  links: AppLink[];
}

export const featuredApps: FeaturedApp[] = [
  {
    name: "Truck Me",
    kind: "Logistics",
    image: "/projects/truckme.jpg",
    blurb:
      "Truck-services finder — locate trusted repairs, maintenance & funding nearby with 24/7 support.",
    tech: ["React Native", "Google Maps", "TypeScript"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/truck-me/id6754442584" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.truckme" },
    ],
  },
  {
    name: "Netevia",
    kind: "Fintech",
    image: "/projects/netevia.jpg",
    blurb:
      "Online banking app — account management, transactions and financial services on the go.",
    tech: ["React Native", "TypeScript", "REST"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/netevia/id1625351334" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.neteviacard.card" },
    ],
  },
  {
    name: "DriveMe",
    kind: "Mobility",
    image: "/projects/driveme.jpg",
    blurb:
      "Premium chauffeur service — book rides with pro drivers, live tracking, Business/Premium tiers.",
    tech: ["React Native", "Google Maps", "Redux"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/driveme-elite/id6757360912" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.poizn.DriveMe" },
    ],
  },
  {
    name: "DriveMe Driver",
    kind: "Mobility",
    image: "/projects/driveme-driver.jpg",
    blurb:
      "Driver-side app — accept requests, view routes & passenger details, manage trips cleanly.",
    tech: ["React Native", "Google Maps", "Redux"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/driveme-driver/id6757392657" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.driveme.driver" },
    ],
  },
  {
    name: "Swish · VBrato",
    kind: "Social",
    image: "/projects/swish.jpg",
    blurb:
      "Cross-platform sports & social apps with real-time chat, in-app purchases and rich media.",
    tech: ["React Native", "GraphQL", "Sendbird"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/swish-sports/id1551295361" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=co.lincolnlabs.swish" },
    ],
  },
  {
    name: "WorkAxle",
    kind: "Enterprise",
    image: "/projects/workaxle.jpg",
    blurb:
      "Enterprise workforce management — live scheduling, team comms and job search at scale.",
    tech: ["React Native", "GraphQL", "Redux Saga"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/workaxle/id1313407282" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.workaxle.employee" },
      { label: "Web", url: "https://www.workaxle.com/" },
    ],
  },
  {
    name: "HeyAll",
    kind: "Events",
    image: "/projects/heyall.jpg",
    blurb:
      "Event-planning app connecting hosts with suppliers — plan on one side, manage supply on the other.",
    tech: ["React Native", "React", "Redux"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/heyall/id1590498767" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.app.heyall" },
      { label: "Web", url: "https://www.heyallapp.com/" },
    ],
  },
  {
    name: "EDOCS.UZ",
    kind: "GovTech",
    image: "/projects/edocs.jpg",
    blurb:
      "Legally-significant e-document management — invoices, delivery notes and acts, all electronic.",
    tech: ["React Native", "Redux Saga"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/kz/app/edocs-uz/id6754750404" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.odiljondevfront.edocsmobile" },
    ],
  },
  {
    name: "ASCON",
    kind: "Insurance",
    image: "/projects/ascon.jpg",
    blurb:
      "Express payment processing — receive damages payments fast without chasing government offices.",
    tech: ["React Native", "Google Maps", "Redux"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/ascon/id1613704743" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=uz.sos.ascon" },
    ],
  },
  {
    name: "BDM",
    kind: "GovTech",
    image: "/projects/bdm.jpg",
    blurb:
      "Digital document signing — each document is signed through BDM and gains legal force.",
    tech: ["React Native", "Redux Saga", "Formik"],
    links: [
      { label: "iOS", url: "https://apps.apple.com/uz/app/bdm/id1506887882" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.bdm" },
    ],
  },
];

export const moreAppsCount = 13;

export const moreApps = [
  "Align 360",
  "BrainWake",
  "Asia Insurance",
  "Snap Taxi",
  "NAFT",
  "Primus Mall",
  "Seyf Bazar",
  "Bozorlik",
  "MyDesign",
  "Avtogen.uz",
  "Nexus",
  "Nestegg.ai",
  "Nestegg Loan",
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
    skills: ["React Native", "Apollo GraphQL", "TypeScript", "Sendbird", "Jest"],
    highlights: [
      "Built & maintained cross-platform apps (VBrato, Swish) for iOS and Android",
      "Implemented complex UI, animations and RESTful integrations",
      "Wrote and maintained unit tests with Jest for stability",
    ],
  },
  {
    company: "ProjectNexus",
    role: "Software Developer",
    period: "Aug 2022 — Jun 2023",
    skills: ["React Native", "TypeScript", "Svelte", "Blockchain"],
    highlights: [
      "Designed the UI for a blockchain-integrated mobile app",
      "Integrated smart contracts, wallets and blockchain protocols",
      "Optimized performance — faster load times, lower memory use",
    ],
  },
  {
    company: "Nestegg",
    role: "Software Developer",
    period: "Feb 2022 — Aug 2022",
    skills: ["React Native", "Svelte", "Firebase", "Apollo GraphQL"],
    highlights: [
      "Built cross-platform fintech apps with React Native & Redux",
      "Implemented complex UI following design guidelines",
      "Integrated REST APIs, collaborated closely with backend",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Software Developer",
    period: "May 2021 — Feb 2022",
    skills: ["React Native", "Node.js", "Firebase", "Firestore"],
    highlights: [
      "Active mobile development with REST API & WebSocket features",
      "Conducted code reviews and onboarded new members",
      "Collaborated with Backend, QA and BA teams",
    ],
  },
  {
    company: "CLICK Uzbekistan",
    role: "Frontend & Mobile Developer",
    period: "Mar 2019 — May 2021",
    skills: ["React Native", "React.js", "JavaScript", "CI/CD"],
    highlights: [
      "Built apps for one of Uzbekistan's largest payment platforms",
      "Implemented automated testing and CI/CD pipelines",
      "Conducted code reviews and mentored team members",
    ],
  },
];

export interface SkillGroup {
  no: string;
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    no: "01",
    name: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "iOS",
      "Android",
      "EAS Build/Submit/Update",
      "Offline-first",
      "Native Modules",
      "Push · Deep Links",
      "OTA / CodePush",
    ],
  },
  {
    no: "02",
    name: "Frontend",
    skills: ["React.js", "Next.js", "Svelte", "HTML/CSS", "Tailwind", "Framer Motion"],
  },
  {
    no: "03",
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Kotlin", "Swift", "Node.js", "Python"],
  },
  {
    no: "04",
    name: "State",
    skills: ["Redux", "Context", "Zustand", "Jotai", "MobX"],
  },
  {
    no: "05",
    name: "APIs & Real-time",
    skills: ["REST", "Apollo GraphQL", "WebSockets", "Sendbird"],
  },
  {
    no: "06",
    name: "Backend & Cloud",
    skills: ["Firebase", "Firestore", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    no: "07",
    name: "Testing",
    skills: ["Jest", "RTL", "Detox", "Maestro", "Code Review"],
  },
  {
    no: "08",
    name: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub Actions",
      "Bitbucket",
      "Azure DevOps",
      "CI/CD",
      "Fastlane",
      "Docker",
      "Figma",
      "Jira",
    ],
  },
];
