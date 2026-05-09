import { skillCategorySchema, type SkillCategory } from "./types";

const rawSkillCategories = [
  {
    title: "Frontend",
    description: "Modern interfaces with responsive layouts and product-focused polish.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend",
    description: "APIs, auth, payments, and workflows built for real product behavior.",
    items: [
      "Node.js",
      "Express.js",
      "Better Auth",
      "Zod",
      "Stripe"
    ]
  },
  {
    title: "Database / ORM",
    description: "Relational/document data modeling with ORM-backed backend structure.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Oracle SQL",
      "Prisma"
    ]
  },
  {
    title: "Tools / Deployment",
    description: "Version control, deployment, containers, and shipping workflows.",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Firebase",
      "Docker"
    ]
  },
  {
    title: "Languages",
    description: "Programming languages I use for web development, coursework, and problem solving.",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C"
    ]
  },
  {
    title: "CS / Engineering",
    description: "The software foundations that shape architecture and technical decision making.",
    items: [
      "OOP",
      "Design Patterns",
      "Data Structures",
      "Algorithms",
      "Digital Design",
      "DBMS",
      "System Design"
    ]
  },
  {
    title: "Currently Learning",
    description: "Areas I am actively strengthening for internships and long-term engineering depth.",
    items: [
      "DSA / Competitive Programming",
      "Cybersecurity",
      "Networking",
      "Linux",
      "Cloud / DevOps",
      "Go",
      "Advanced Backend Engineering"
    ]
  }
] satisfies SkillCategory[];

export const skillCategories = skillCategorySchema.array().parse(rawSkillCategories);

export const stackTicker = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "Vercel",
  "GitHub",
  "C++"
] as const;
