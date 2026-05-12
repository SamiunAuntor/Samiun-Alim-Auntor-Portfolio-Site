import { certificationSchema, type Certification } from "./types";

const rawCertifications = [
  {
    title: "Complete Web Development",
    provider: "Programming Hero",
    summary:
      "Foundation-first full-stack training across React, Node.js, Express, MongoDB, authentication, deployment, and practical product building.",
    status: "Completed",
    track: "Programming Hero web development path",
    note: "Foundation track"
  },
  {
    title: "SQL and Relational Databases 101",
    provider: "IBM Skills Network",
    summary:
      "Covers relational modeling, SQL querying, joins, aggregation, filtering, and the fundamentals behind structured database systems.",
    status: "Completed"
  },
  {
    title: "TypeScript Basics",
    provider: "Simplilearn",
    summary:
      "Focused on static typing, interfaces, functions, and safer application structure for cleaner JavaScript-heavy codebases.",
    status: "Completed"
  },
  {
    title: "Next Level Web Development",
    provider: "Programming Hero",
    summary:
      "An advanced continuation of the earlier web development journey with TypeScript, backend engineering, Next.js, PostgreSQL, Prisma, testing, and deployment topics.",
    status: "Ongoing",
    track: "Programming Hero web development path",
    note: "Continuation of Complete Web Development"
  },
  {
    title: "CSE Fundamentals",
    provider: "Phitron",
    summary:
      "Strengthens programming, data structures, algorithms, OOP, database concepts, and core problem-solving foundations for long-term engineering growth.",
    status: "Ongoing"
  }
] satisfies Certification[];

export const certifications = certificationSchema.array().parse(rawCertifications);
