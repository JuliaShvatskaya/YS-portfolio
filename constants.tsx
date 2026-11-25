import { CaseStudy, SkillGroup, CareerMilestone } from './types';

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'academic-foundation',
    period: '2004 – 2009',
    yearLabel: '2004',
    role: 'Applied Mathematics & PhD Research Track',
    organization: 'Oles Honchar Dnipro National University',
    location: 'Dnipro, Ukraine',
    domain: 'Mathematical Modeling',
    summary:
      'Completed Bachelor’s and Master’s degrees with honors in Applied Mathematics, followed by postgraduate PhD-track research in complex systems and algorithmic optimization. This analytical rigor shaped how I decompose software architecture and diagnose root causes.',
    highlights: [
      'Analytical modeling, probability, and statistical systems analysis',
      'Algorithmic complexity and computational optimization research',
      'Transitioned formal mathematical problem-solving into production software',
      'Built strong foundations in structured data and deterministic logic'
    ],
    outcomeMetric: 'Honors',
    outcomeLabel: 'B.S. & M.S. in Applied Mathematics',
    stack: ['Algorithms', 'Statistical Modeling', 'Linear Algebra', 'C++ / Pascal', 'Data Structures']
  },
  {
    id: 'pickatime-foundations',
    period: '2009 – 2014',
    yearLabel: '2009',
    role: 'Core Full-Stack Web Developer',
    organization: 'PickATime.com',
    location: 'U.S. Enterprise SaaS (Remote)',
    domain: 'Scheduling & Public Sector',
    summary:
      'Entered production enterprise engineering building core scheduling workflows for U.S. school districts and hospital networks. Learned how mission-critical web platforms behave under real-world customer load and tight operational deadlines.',
    highlights: [
      'Developed core Java backend modules for multi-tenant appointment engines',
      'Built dynamic reporting pipelines and XML/XSLT data transformations',
      'Managed high-availability production support across U.S. time zones',
      'Collaborated directly with enterprise administrators to refine UX'
    ],
    outcomeMetric: '5 Years',
    outcomeLabel: 'Enterprise Core Java Foundation',
    stack: ['Java', 'Spring', 'Hibernate', 'MS SQL Server', 'XSLT', 'JavaScript'],
    caseStudyId: 'pickatime',
    url: 'https://pickatime.com'
  },
  {
    id: 'kids-flashcards-founder',
    period: '2016 – Present',
    yearLabel: '2016',
    role: 'Founder, Architect & Product Builder',
    organization: 'Kids-Flashcards.com',
    location: 'Global (US & EU)',
    domain: 'EdTech SaaS',
    summary:
      'Founded an independent multilingual EdTech platform inspired by helping my own children navigate speech delay and bilingual learning. Designed, coded, hosted, and grew the entire product end-to-end—from Linux VPS operations to technical SEO.',
    highlights: [
      'Architected full-stack Spring Boot, JPA, and React platform from scratch',
      'Engineered automated high-resolution PDF and printable image generators',
      'Built multilingual audio playback and structured taxonomy for SEO growth',
      'Evolved lean self-hosted infrastructure into a scalable SaaS offering'
    ],
    outcomeMetric: '100% Organic',
    outcomeLabel: 'Global Audience Across US & EU',
    stack: ['Spring Boot', 'React', 'MySQL', 'Thymeleaf', 'Technical SEO', 'Linux'],
    caseStudyId: 'kids-flashcards',
    url: 'https://kids-flashcards.com'
  },
  {
    id: 'condos-real-estate',
    period: '2020 – 2022',
    yearLabel: '2020',
    role: 'Full-Stack Engineer & Technical SEO Lead',
    organization: 'CondosAndCondos.com',
    location: 'U.S. Real Estate',
    domain: 'High-Traffic Consumer Web',
    summary:
      'Led the architectural overhaul and redesign of a high-traffic real estate listing portal. Bridged backend .NET data access with modern frontend performance, structured Schema.org data, and Core Web Vitals optimization.',
    highlights: [
      'Refactored legacy .NET and LINQ data layers for faster property queries',
      'Implemented semantic HTML, Schema.org markup, and SSR SEO improvements',
      'Improved Core Web Vitals and responsive listing search usability',
      'Restructured codebase for predictable long-term maintainability'
    ],
    outcomeMetric: 'Full Redesign',
    outcomeLabel: 'Search Visibility & Core Web Vitals',
    stack: ['.NET', 'C#', 'LINQ', 'MS SQL', 'Technical SEO', 'WordPress'],
    caseStudyId: 'condosandcondos',
    url: 'https://condosandcondos.com'
  },
  {
    id: 'pickatime-scale',
    period: '2022 – 2023',
    yearLabel: '2022',
    role: 'Senior Full-Stack Engineer',
    organization: 'PickATime.com',
    location: 'U.S. Enterprise SaaS (Remote)',
    domain: 'High-Concurrency Systems',
    summary:
      'Rejoined PickATime as a senior engineer to solve high-concurrency bottlenecks during peak school registration and healthcare scheduling surges, modernizing frontend workflows while tuning deep SQL performance.',
    highlights: [
      'Diagnosed and optimized legacy SQL queries for 2–3× faster execution',
      'Achieved up to 300% faster enterprise report generation under peak load',
      'Modernized user-facing modules using Angular alongside Java backends',
      'Provided direct technical escalation and architectural guidance for key clients'
    ],
    outcomeMetric: '3× Faster',
    outcomeLabel: 'SQL & Report Processing Speed',
    stack: ['Java', 'Spring', 'Angular', 'MS SQL', 'SQL Optimization', 'Hibernate'],
    caseStudyId: 'pickatime',
    url: 'https://pickatime.com'
  },
  {
    id: 'united-planners',
    period: '2023 – Present',
    yearLabel: '2023',
    role: 'Senior Software Engineer',
    organization: 'UnitedPlanners.com',
    location: 'U.S. Financial Services',
    domain: 'FinTech & Compliance',
    summary:
      'Engineering resilient internal web platforms supporting independent financial advisors and compliance operations at a U.S. broker-dealer. Focused on zero-drama reliability, safe legacy modernization, and sensitive client data integrity.',
    highlights: [
      'Building advisor onboarding and account lifecycle management platforms',
      'Modernizing legacy enterprise workflows with zero production disruption',
      'Enforcing strict regulatory compliance and auditable data pipelines',
      'Leading production incident resolution and cross-team engineering stability'
    ],
    outcomeMetric: 'Mission-Critical',
    outcomeLabel: 'Zero-Drama FinTech Reliability',
    stack: ['C#', '.NET', 'MS SQL Server', 'JavaScript', 'Enterprise Architecture'],
    caseStudyId: 'united-planners',
    url: 'https://unitedplanners.com'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'united-planners',
    title: 'Senior Software Engineer — FinTech Platforms',
    company: 'UnitedPlanners.com',
    url: 'https://unitedplanners.com',
    role: 'Senior Software Engineer',
    period: '2023 – Present',
    summary: 'Internal web platforms used by financial advisors and operations teams at a U.S. independent broker-dealer.',
    keyFocus: [
      'Advisor onboarding and account management systems',
      'Legacy system modernization without production risk',
      'High-reliability, compliance-driven workflows',
      'Production support and incident resolution'
    ],
    impact: 'These systems manage real client assets and sensitive data. My role is to deliver software that is quietly reliable — trusted every day without drama.',
    tech: ['C#', '.NET', 'MS SQL Server', 'Javascript', 'Enterprise Architecture'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPTo2ghRMWktStk0AsQyxAOy-ga2viHqHbklkitaXT4H--qqlzXP_Z-eEwxLNDlYJlvvv5CWyLdXA0bLtomzP5vAfql08ehSQJsyNvq62H28cBkldrdyBKO16DJEzoA9hAZavfxXWIFB9cLk9WLPP1d=w1616-h901-s-no-gm?authuser=0',
    color: 'teal',
    longDescription: 'At United Planners, I am responsible for maintaining and evolving the core digital infrastructure that supports financial advisors across the US. This involves complex data migrations from legacy systems, building secure onboarding pipelines, and ensuring that every transaction and record meets strict regulatory compliance standards. The focus is on creating a "boring" but indestructible backend that users can rely on for their daily operations.'
  },
  {
    id: 'kids-flashcards',
    title: 'Founder & Full-Stack Engineer — Global EdTech',
    company: 'Kids-Flashcards.com',
    url: 'https://kids-flashcards.com',
    role: 'Founder & Product Owner',
    period: '2016 – Present',
    summary: 'A multilingual educational platform built from scratch — architecture, backend, frontend, SEO, and hosting.',
    keyFocus: [
      'Multilingual & bilingual learning system',
      'Audio-enabled educational content',
      'Automated PDF & image generation',
      'SEO-driven content architecture'
    ],
    impact: 'Global audience (US & EU), used by parents, teachers, and speech therapists. Lean, self-hosted infrastructure evolving into a SaaS platform.',
    tech: ['Spring Boot', 'Thymeleaf', 'JPA', 'MySQL', 'React', 'Linux'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOamYXm4C4gKSJV2u3K9iN-1qQhi3lvmf7ePAKZrynVWvp4Dg-_ALbnazcV5qWVaxUgqrz3VzXOZBNRkWtbpBEVT_vC3Q4IG20wGdBURAgkZ5tIkb8CAWtKz__OzbMbnIgAGYTCiaWVL_OrT87q3OkA=w1545-h913-s-no-gm?authuser=0',
    color: 'indigo',
    longDescription: 'Kids-Flashcards was born from a personal need to provide high-quality educational materials for my children. I built the entire stack myself, focusing heavily on technical SEO to ensure organic growth. The system features a custom-built PDF generation engine for high-resolution printables and an integrated audio management system for multilingual support. It currently serves thousands of users monthly with zero maintenance overhead.'
  },
  {
    id: 'pickatime',
    title: 'Core Engineer — High-Load Scheduling',
    company: 'PickATime.com',
    url: 'https://pickatime.com',
    role: 'Full-Stack Web Developer',
    period: '2009 - 2014 & 2022 – 2023',
    summary: 'Enterprise appointment scheduling system for U.S. schools and hospitals.',
    keyFocus: [
      'Core Java development',
      'SQL optimization (2–3× performance improvements)',
      'High-availability production support',
      'Direct customer communication'
    ],
    impact: 'Focused on performance, data processing, and high availability in critical public sector environments.',
    tech: ['Java', 'Spring', 'Hibernate', 'Angular', 'MS SQL', 'XSLT'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMQate1v9q2ZyqPAwenkNcnTCqBXqoUsU141AUEX39LTTix_z6-S6A-2YWcH96U2PocXyY2PEhahEKurnrr-GS9sMwojOVb-cUEkZGV6uMY8K5lH-kVMOapLBCfAUe4bAM4Qro7OABQyoqzaMHGBdkG=w1600-h900-s-no-gm?authuser=0',
    color: 'blue',
    longDescription: 'In this role, I tackled the challenges of a high-concurrency scheduling environment. During peak periods (like school registration weeks), the system handled massive traffic spikes. I led the effort to optimize legacy SQL queries that were slowing down the application, resulting in 300% faster report generation. I also handled direct technical support for high-profile clients, bridging the gap between engineering and end-user needs.'
  },
  {
    id: 'condosandcondos',
    title: 'Full-Stack Engineer — Real Estate Platform',
    company: 'CondosAndCondos.com',
    url: 'https://condosandcondos.com',
    role: 'Full-Stack Engineer',
    period: '2020 – 2022',
    summary: 'Redesign and optimization of a high-traffic real estate website.',
    keyFocus: [
      'Backend (.NET, LINQ, MS SQL)',
      'Technical SEO & Core Web Vitals',
      'UI improvements and long-term maintainability'
    ],
    impact: 'Full-site redesign and restructuring to improve visibility and conversion rates.',
    tech: ['.NET', 'LINQ', 'MS SQL', 'SEO', 'JQuery', 'WordPress'],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOFcIGa5guGocuFdR4YDWY-AGYxysrIQ_JnTChjn2x6-7VRfzKsbnKRxbati1AHkU3xakjKkGFjis8dRpdpVvrkT_LIwOvUSWBlJoj3ZtSm4LzmK-oP8JdG8QYnzDZesxFFBjZ8S4aVuU3IwcfDOBdp=w1600-h900-s-no-gm?authuser=0',
    color: 'slate',
    longDescription: 'The project involved taking a legacy real estate portal and transforming it into a high-performance modern web application. I focused on the technical SEO aspects—specifically schema markup and server-side rendering optimizations—which led to a significant increase in search engine rankings. I also implemented a more robust database layer using LINQ to SQL to improve data retrieval speeds for property listings.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'System & Backend',
    skills: ['Java (Spring Boot, Hibernate)', 'C#/.NET', 'LINQ', 'REST APIs', 'SQL Optimization', 'Authentication', 'Enterprise Systems']
  },
  {
    category: 'Frontend Engineering',
    skills: ['React', 'Next.js', 'Angular', 'JavaScript', 'JQuery', 'HTML/CSS/SASS', 'Tailwind', 'Material Design', 'Bootstrap']
  },
  {
    category: 'Architecture & Infra',
    skills: ['Monolith & Microservices', 'Linux', 'Docker', 'Tomcat', 'IIS', 'AWS', 'VPS Hosting']
  },
  {
    category: 'SEO & Growth',
    skills: ['Technical SEO', 'Semantic Architecture', 'Core Web Vitals', 'Google Analytics', 'Search Console', 'AdSense']
  },
  {
    category: 'Product & Collaboration',
    skills: ['Product Ownership', 'Task Estimation', 'Team Coordination', 'Client Communication', 'Agile Workflows']
  }
];