export type PortfolioProject = {
  id: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: { value: string; label: string }[];
  liveUrl?: string;
  githubUrl: string;
  frameClass: "skinstric" | "clinical" | "summarist" | "lingo";
};

export type StackItem = {
  name: string;
  level: "Daily" | "Comfortable" | "Shipped";
  icon: "react" | "next" | "ts" | "js" | "tailwind" | "html" | "css" | "node" | "firebase" | "stripe" | "git" | "figma";
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
};

export const projects: PortfolioProject[] = [
  {
    id: "01",
    period: "Production - Sep to Nov 2025",
    title: "Skinstric AI",
    description:
      "Real-time AI skin analysis platform. Architected the frontend on Next.js with OpenAI Vision integration, built a responsive component library, and rewrote the analysis pipeline to keep processing under 2 seconds.",
    tags: ["Next.js", "React", "TypeScript", "OpenAI Vision", "TailwindCSS", "GSAP", "Jest", "Cypress"],
    metrics: [
      { value: "98%", label: "Detection accuracy" },
      { value: "+60%", label: "Engagement" },
      { value: "<2s", label: "Processing" },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Guillermotrejo1",
    frameClass: "skinstric",
  },
  {
    id: "02",
    period: "Full-stack - 2025",
    title: "Clinical Dashboard",
    description:
      "Healthcare operations dashboard for nursing floors with live KPIs, occupancy, lab results, and triaged alerts from a Node.js REST API.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Guillermotrejo1",
    frameClass: "clinical",
  },
  {
    id: "03",
    period: "Full-stack - 2024",
    title: "Summarist",
    description:
      "Subscription book-summary app with Stripe checkout, Firebase Auth, Firestore-backed library, and audio playback for non-fiction summaries.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Guillermotrejo1",
    frameClass: "summarist",
  },
  {
    id: "04",
    period: "Full-stack - 2024",
    title: "Lingo",
    description:
      "Language learning platform with auth, progress tracking, in-app purchases, and Stripe premium tiers backed by NeonDB serverless Postgres.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "NeonDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Guillermotrejo1",
    frameClass: "lingo",
  },
];

export const stack: StackItem[] = [
  { name: "React", level: "Daily", icon: "react" },
  { name: "Next.js", level: "Daily", icon: "next" },
  { name: "TypeScript", level: "Daily", icon: "ts" },
  { name: "JavaScript", level: "Daily", icon: "js" },
  { name: "TailwindCSS", level: "Daily", icon: "tailwind" },
  { name: "HTML5", level: "Daily", icon: "html" },
  { name: "CSS3/SCSS", level: "Daily", icon: "css" },
  { name: "Node.js", level: "Comfortable", icon: "node" },
  { name: "Firebase", level: "Comfortable", icon: "firebase" },
  { name: "Stripe", level: "Shipped", icon: "stripe" },
  { name: "Git/GitHub", level: "Daily", icon: "git" },
  { name: "Figma", level: "Comfortable", icon: "figma" },
];

export const experience: ExperienceItem[] = [
  {
    period: "SEP 2025 - NOV 2025",
    role: "Frontend Engineer, Internship",
    company: "Skinstric AI",
    location: "Remote",
    bullets: [
      "Architected a real-time AI skin analysis platform with Next.js and OpenAI Vision API and reached 98% detection accuracy.",
      "Built responsive UI components and improved recommendation engagement by 60%.",
      "Optimized performance using Server Components and reduced processing time to under 2 seconds.",
      "Wrote unit and E2E tests with Jest and Cypress to prevent regressions.",
    ],
  },
  {
    period: "MAR 2016 - SEP 2024",
    role: "Staffing Development Manager (promoted from CNA)",
    company: "Legend Oaks Healthcare & Rehabilitation",
    location: "Kyle, TX",
    bullets: [
      "Led a team of 26 CNAs across rotating shifts, including scheduling, onboarding, and quality programs.",
      "Reached #1 in Texas for point-of-care documentation completion across the Ensign market for one year.",
      "Translated frontline workflow pain into an operator mindset now applied in engineering.",
    ],
  },
  {
    period: "JUN 2023 - JAN 2024",
    role: "Certificate, Frontend Development",
    company: "Frontend Simplified",
    bullets: [
      "Built six end-to-end projects covering HTML, CSS, JavaScript, and React with instructor feedback.",
    ],
  },
];
