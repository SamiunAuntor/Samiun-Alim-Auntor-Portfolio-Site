import {
  academicRecordSchema,
  educationSchema,
  heroStatSchema,
  type AcademicRecord,
  type Education,
  type HeroStat
} from "./types";

export const profile = {
  name: "Samiun Alim Auntor",
  role: "Full Stack Developer | MERN Stack | Next.js | Backend Engineering | System Design",
  headline:
    "Building scalable full-stack platforms with clean architecture, real-world workflows, and production-ready engineering.",
  intro:
    "Software Engineering student at IUT, focused on MERN, Next.js, backend engineering, system design, and SaaS-style applications that feel polished in production.",
  heroDescription:
    "I build full-stack products that go beyond CRUD, with authentication, dashboards, booking flows, payments, notifications, and backend structure designed to scale.",
  email: "samiunalimauntor@gmail.com",
  phone: "+8801988774499",
  location: "Dhaka, Bangladesh",
  graduation: "Expected graduation: 2027",
  resumePath: "/Samiun_Alim_Auntor_Resume.pdf"
} as const;

const rawHeroStats = [
  {
    label: "Primary focus",
    value: "SaaS-style systems",
    detail: "Full-stack workflows, modular backend design, and production-minded interfaces."
  },
  {
    label: "Engineering lens",
    value: "Backend + architecture",
    detail: "RBAC, payments, data modeling, realtime features, and deployment problem solving."
  },
  {
    label: "Current trajectory",
    value: "Internship-ready growth",
    detail: "Sharpening DSA, cybersecurity fundamentals, and scalable application design."
  }
] satisfies HeroStat[];

const rawPrimaryEducation = {
  degree: "BSc in Software Engineering",
  institution: "Islamic University of Technology - IUT",
  range: "2023 - 2027",
  status: "Currently ongoing",
  areas: [
    "Object-Oriented Programming",
    "Design Patterns",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networking",
    "Software Engineering",
    "System Design"
  ]
} satisfies Education;

const rawAcademicHistory = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gazipur Cantonment College",
    range: "January 2021 - December 2022",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    group: "Science",
    classYear: "2022"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "BRRI High School",
    range: "January 2018 - March 2020",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    group: "Science",
    classYear: "2020"
  }
] satisfies AcademicRecord[];

export const heroStats = heroStatSchema.array().parse(rawHeroStats);
export const education = educationSchema.parse(rawPrimaryEducation);
export const academicHistory = academicRecordSchema.array().parse(rawAcademicHistory);
