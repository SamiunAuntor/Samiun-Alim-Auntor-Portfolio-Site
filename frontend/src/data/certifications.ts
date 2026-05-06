import { certificationSchema, type Certification } from "./types";

const rawCertifications = [
  {
    title: "Complete Web Development Course",
    provider: "Programming Hero",
    summary:
      "Hands-on full-stack development practice across frontend, backend, authentication, deployment, and product building workflows.",
    status: "Completed"
  },
  {
    title: "SQL and Relational Databases 101",
    provider: "IBM Skills Network",
    summary:
      "Covered relational data models, SQL queries, joins, grouping, and the fundamentals behind structured database systems.",
    status: "Completed"
  },
  {
    title: "TypeScript Basics",
    provider: "Simplilearn",
    summary:
      "Focused on static typing, safer application structure, and cleaner frontend engineering habits in JavaScript-heavy codebases.",
    status: "Completed"
  },
  {
    title: "Software Architecture & System Design Foundations",
    provider: "ScholarHat",
    summary:
      "Introduced scalable architecture thinking, modularity, and system-level problem solving beyond UI implementation.",
    status: "Completed"
  }
] satisfies Certification[];

export const certifications = certificationSchema.array().parse(rawCertifications);
