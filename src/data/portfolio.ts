/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────
 *  Edit this file to update name, role, experience, projects,
 *  skills, stats, contact info, etc. The UI re-renders from
 *  these constants — no component code changes required.
 *
 *  Tip: keep arrays in chronological order, newest first.
 * ─────────────────────────────────────────────────────────────
 */

// ── PROFILE ───────────────────────────────────────────────
export const profile = {
  name: "Chetan Jha",
  shortName: "Chetan",
  initials: "CJ",
  title: "Senior Software Engineer",
  subtitle: "Java + Agentic AI",
  location: "Pune, India",
  email: "chetanjha78@gmail.com",
  linkedin: "https://linkedin.com/in/chetan-jha-9ba61b16b",
  github: "https://github.com/Chetan3777",
  resumeUrl: "/resume.pdf", // place resume.pdf in /public to enable download
  tagline:
    "I build high-traffic Java backend systems — and the LLM-powered agents that run on top of them.",
  bio: [
    "Senior Software Engineer with 5+ years building production-grade backend systems and, more recently, agentic AI on top of them.",
    "Currently at Qatar Airways, where I maintain 30+ microservices on the airline's highest-priority revenue platform and ship LLM agents, multi-agent orchestrators, and MCP servers with Spring AI.",
    "I care about clean architecture, four-layer test coverage, and code that does its job at 3 a.m. without paging anyone.",
  ],
  // Cycling titles in the hero (also used as floating tag chips)
  roles: [
    "Senior Software Engineer",
    "Java Backend Engineer",
    "Agentic AI Builder",
    "Microservices Engineer",
  ],
  // The 4 short tags floating around the portrait card
  floatingTags: [
    { label: "Java", side: "tl" as const },
    { label: "Spring AI", side: "tr" as const },
    { label: "MCP", side: "bl" as const },
    { label: "AWS · Azure", side: "br" as const },
  ],
  openTo:
    "Open to Senior Software Engineer roles in Backend Java & Agentic AI.",
  // The small status pill shown above the hero headline
  heroPill: "Open to Senior Software Engineer · Backend Java",
  // Short blurb shown next to portrait in hero
  heroQuote:
    "Five years of shipping revenue-critical backend systems. Today, building agentic AI on top of them.",
  // Text rendered inside the orange portrait card in the hero
  portrait: {
    headline: "Sr. SDE",
    subline: "BACKEND · JAVA · AI",
  },
};

// ── HERO STAT BLOCK ───────────────────────────────────────
export const heroStats = {
  years: "5+",
  yearsLabel: "Years Experience",
  microservices: "30+",
  microservicesLabel: "Production Microservices",
  rating: 5, // out of 5 — driver for star icons
  ratingLabel: "Production-Proven",
};

// ── SERVICES (the dark section, 3 cards) ──────────────────
export const services = [
  {
    number: "01",
    icon: "server",
    title: "Backend Engineering",
    description:
      "Java, Spring Boot, JPA and event-driven microservices. Production-hardened APIs at airline-grade scale, with four-layer test coverage and clean architecture.",
    tags: ["Java 8+", "Spring Boot", "Microservices", "REST"],
  },
  {
    number: "02",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "AWS (EC2, S3, RDS, Lambda) and Azure DevOps. Migrations from on-prem, CI/CD pipelines, observability and cost-aware infrastructure design.",
    tags: ["AWS", "Azure", "Docker", "Jenkins"],
  },
  {
    number: "03",
    icon: "sparkles",
    title: "Agentic AI",
    description:
      "Spring AI agents, MCP servers, RAG pipelines and multi-agent orchestration on top of real production systems. Observable, testable, replaceable.",
    tags: ["Spring AI", "MCP Servers", "RAG", "LLM Agents"],
    featured: true,
  },
];

// ── EXPERIENCE TIMELINE (ATS-friendly bullets) ────────────
export type ExperienceItem = {
  company: string;
  role: string;
  start: string; // e.g. "Jan 2025"
  end: string; // e.g. "Present"
  location?: string;
  current?: boolean;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Qatar Airways",
    role: "Senior Software Engineer",
    start: "Jan 2025",
    end: "Present",
    location: "Pune, India",
    current: true,
    bullets: [
      "Maintain and enhance 30+ production microservices on the airline's highest-priority revenue platform, ensuring 99.9% uptime in a 24x7 customer-facing environment.",
      "Design and build LLM agents, multi-agent orchestrators, and 3+ MCP servers using Spring AI and Java to automate complex workflows.",
      "Drive quality through a 4-layer testing strategy — unit, acceptance, integration, and system integration — on every feature delivered.",
      "Review 50+ pull requests per quarter and lead technical discussions in 2-week Agile sprints on Azure DevOps (Repos, Pipelines, Boards, Wiki).",
      "Mentor junior engineers on Spring Boot best practices, microservice patterns, and AI/LLM integration.",
    ],
    tags: ["Spring AI", "MCP Servers", "Microservices", "Azure DevOps", "LLM Agents", "Java"],
  },
  {
    company: "Infosys Limited",
    role: "Technology Analyst",
    start: "Sep 2021",
    end: "Dec 2024",
    location: "Pune, India",
    bullets: [
      "Developed 15+ RESTful APIs using Java 8+, Spring Boot, and Hibernate, serving enterprise UK banking clients with sub-second response times.",
      "Led 20+ technical feasibility analyses for AWS cloud migrations, evaluating EC2, S3, Lambda, RDS, and CloudWatch for production workloads.",
      "Migrated 3 legacy on-premises environments to AWS, achieving zero data loss and reducing infrastructure costs by an estimated 40%.",
      "Resolved 90% of critical production incidents within SLA, reducing mean-time-to-recovery through proactive monitoring and runbook automation.",
      "Collaborated with cross-functional stakeholders across UK and India teams to translate banking domain requirements into scalable microservice designs.",
    ],
    tags: ["Java", "Spring Boot", "AWS", "Hibernate", "Microservices", "CloudWatch"],
  },
  {
    company: "SQr Infotech",
    role: "Software Developer",
    start: "Jan 2021",
    end: "Sep 2021",
    location: "Pune, India",
    bullets: [
      "Engineered 15+ RESTful API integrations using Java and Spring Boot for client-facing platforms in production.",
      "Optimized application performance to reduce average API response time by 60% through query tuning and serialization improvements.",
      "Delivered 200+ Git commits across feature branches following GitFlow conventions and rigorous code review standards.",
      "Partnered with QA and product teams to translate requirements into clean, well-tested code shipped on schedule.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Git"],
  },
];

// ── SKILLS ────────────────────────────────────────────────
export type SkillGroup = {
  name: string;
  accent?: "brand";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "AI / GenAI",
    accent: "brand",
    items: [
      "LLM Agents",
      "Agent Orchestration",
      "MCP Servers",
      "Spring AI",
      "RAG Pipelines",
      "Vector Databases",
      "Embeddings",
      "FastAPI",
    ],
  },
  {
    name: "Languages",
    items: ["Java 8+", "Python", "SQL", "Bash"],
  },
  {
    name: "Frameworks",
    items: ["Spring Boot", "Spring Data JPA", "Hibernate", "FastAPI"],
  },
  {
    name: "Cloud",
    items: [
      "Azure DevOps",
      "Azure Pipelines",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "CloudWatch",
    ],
  },
  {
    name: "DevOps & Tools",
    items: ["Docker", "Jenkins", "Git", "Maven", "Postman", "Unix / Linux"],
  },
  {
    name: "Architecture",
    items: ["Microservices", "RESTful APIs", "Event-Driven", "Cloud-Native"],
  },
  {
    name: "Testing",
    items: ["JUnit", "Mockito", "Integration", "Acceptance", "SIT"],
  },
  {
    name: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
];

// ── PROJECTS ──────────────────────────────────────────────
export type Project = {
  name: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  href?: string;
  github?: string;
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    name: "AI Agent Platform",
    blurb:
      "A platform to design, deploy and manage LLM-powered agents — with pluggable MCP toolsets and an end-to-end RAG pipeline.",
    bullets: [
      "Built and runs custom agents with system prompts, instructions and pluggable MCP server toolsets.",
      "Built a full RAG pipeline — chunking, embeddings and vector DB indexing — for grounded, citation-aware responses.",
      "Exposed 10+ REST endpoints via Python FastAPI, with Spring AI handling orchestration and tool execution.",
    ],
    stack: ["Spring AI", "FastAPI", "RAG", "Vector DB", "MCP Servers", "Python"],
    featured: true,
    badge: "Self-Initiated",
    github: "https://github.com/Chetan3777",
  },
];

// ── WHAT I BRING (USP / Value cards) ──────────────────────
export const valueProps = [
  {
    number: "01",
    title: "Production-Proven",
    body: "30+ microservices in flight. Revenue-path systems. Millions of transactions monitored, owned and on-call.",
  },
  {
    number: "02",
    title: "Zero-Regression Mindset",
    body: "Four-layer test coverage on every task — unit, acceptance, integration, system integration. Ship sleeps stay quiet.",
  },
  {
    number: "03",
    title: "AI Native",
    body: "Building LLM agents and MCP servers since before it was mainstream — on top of real, production Java systems.",
  },
  {
    number: "04",
    title: "Full Lifecycle",
    body: "Design, develop, migrate, monitor. From feasibility analysis to production handover and post-launch tuning.",
  },
];

// ── NAVIGATION ────────────────────────────────────────────
export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// ── EDUCATION ─────────────────────────────────────────────
export const education = {
  degree: "B.E. in Information Technology",
  school: "Sinhgad Academy of Engineering, Pune",
  years: "2017 – 2021",
};

// ── FOOTER ────────────────────────────────────────────────
export const footer = {
  oneLiner: "Engineered with precision. Deployed with purpose.",
  startedYear: 2026,
};
