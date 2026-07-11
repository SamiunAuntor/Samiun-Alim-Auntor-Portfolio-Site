import { certificationSchema, type Certification } from "./types";

const rawCertifications = [
  {
    title: "Complete Web Development",
    provider: "Programming Hero",
    summary:
      "Foundation-first full-stack training across React, Node.js, Express, MongoDB, authentication, deployment, and practical product building.",
    status: "Completed",
    href: "https://drive.google.com/file/d/1vB-ybSwvlyNDRsOv8WUbUKjzAWp5MZUY/view?usp=sharing",
    track: "Programming Hero web development path",
    note: "Foundation track"
  },
  {
    title: "SQL and Relational Databases 101",
    provider: "IBM Skills Network",
    summary:
      "Covers relational modeling, SQL querying, joins, aggregation, filtering, and the fundamentals behind structured database systems.",
    status: "Completed",
    href: "https://courses.cognitiveclass.ai/certificates/373f6f49e55944e1850d383f333e2ea8"
  },
  {
    title: "TypeScript Basics",
    provider: "Simplilearn",
    summary:
      "Focused on static typing, interfaces, functions, and safer application structure for cleaner JavaScript-heavy codebases.",
    status: "Completed",
    href: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTE5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAxMDI3NjhfMTAzOTE0NTlfMTc3NjE3OTM5NDUwMS5wbmciLCJ1c2VybmFtZSI6IlNhbWl1biBBbGltIEF1bnRvciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5896%2FTypescript-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1359204446685833900&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDy32KXT1dfTJNkqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAF1MQuFBAAAA"
  },
  {
    title: "Next Level Web Development",
    provider: "Programming Hero",
    summary:
      "An advanced continuation of the earlier web development journey with TypeScript, backend engineering, Next.js, PostgreSQL, Prisma, testing, and deployment topics.",
    status: "Completed",
    track: "Programming Hero web development path",
    note: "Continuation of Complete Web Development",
    certificateNote: "Certificate pending"
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
