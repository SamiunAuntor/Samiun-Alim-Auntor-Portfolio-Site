import { skillCategorySchema, type SkillCategory } from "./types";

const rawSkillCategories = [
  {
    title: "Frontend",
    description: "Responsive interfaces with modern React patterns and production-focused polish.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase Hosting",
      "Responsive UI"
    ]
  },
  {
    title: "Backend",
    description: "APIs and workflows built around real product behavior rather than toy demos.",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Auth",
      "RBAC",
      "Better Auth",
      "Nodemailer",
      "Socket.io",
      "Cron Jobs",
      "Payment Webhooks"
    ]
  },
  {
    title: "Database / ORM",
    description: "Relational and document data design with practical full-stack tradeoff awareness.",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Oracle SQL",
      "Prisma",
      "Mongoose",
      "PL/SQL basics"
    ]
  },
  {
    title: "Tools / Deployment",
    description: "Version control, hosting, asset workflows, and debugging tools for shipping apps.",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Firebase",
      "Cloudinary",
      "ImageBB",
      "Postman",
      "Docker basics",
      "VS Code",
      "NVM"
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
      "System Design",
      "DBMS",
      "Operating Systems basics",
      "Networking basics",
      "Software Architecture"
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
      "System Design",
      "Advanced Backend Engineering",
      "Cloud / DevOps basics"
    ]
  }
] satisfies SkillCategory[];

export const skillCategories = skillCategorySchema.array().parse(rawSkillCategories);

export const stackTicker = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Socket.io",
  "Stripe",
  "Firebase",
  "Vercel",
  "System Design"
] as const;
