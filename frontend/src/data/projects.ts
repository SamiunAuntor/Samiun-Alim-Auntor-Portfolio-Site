import { projectSchema, type Project } from "./types";

const rawProjects = [
  {
    slug: "skillbridge",
    title: "SkillBridge",
    eyebrow: "Online Tutoring Booking Marketplace",
    description:
      "A scalable tutoring marketplace where students discover tutors, book availability-based sessions, complete secure payments, and manage progress through role-based dashboards.",
    impact: "Flagship SaaS-style platform that reflects my strongest full-stack architecture direction.",
    features: [
      "Student, tutor, and admin role separation",
      "Availability slot management and session booking flow",
      "Stripe payment integration and confirmation lifecycle",
      "Role-based dashboards, reviews, and notification concepts"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Stripe",
      "Nodemailer",
      "Tailwind CSS"
    ],
    links: {
      caseStudy: "Case study coming soon"
    },
    featured: true
  },
  {
    slug: "ghor-bari",
    title: "GHOR_BARI",
    eyebrow: "Smart Property Rental and Listing Platform",
    description:
      "A full-stack property marketplace for the Bangladesh market with role-based access, discovery, offer negotiation, realtime chat, verification, and admin analytics.",
    impact: "Strong example of coordinating realtime features, verification logic, and multi-role workflows.",
    features: [
      "Owner, seeker, and admin role-based flows",
      "Property listing, filtering, wishlist, and comparison",
      "Offer negotiation and realtime chat with Socket.io",
      "Verification, notifications, and admin analytics"
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Firebase Hosting",
      "Render",
      "Nodemailer",
      "Node-cron"
    ],
    links: {},
    featured: false
  },
  {
    slug: "warrantywallet",
    title: "WarrantyWallet",
    eyebrow: "Digital Warranty Management Platform",
    description:
      "A productivity app for managing product warranties, storing invoices, tracking expiry dates, sending reminders, and exporting records.",
    impact: "Prize-winning project that combines utility, automation, and role-aware product design.",
    features: [
      "Warranty tracking and invoice image upload",
      "Expiry status visibility and cron-based reminders",
      "Admin and user roles with analytics dashboard",
      "Email reminders and PDF export workflows"
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Firebase Auth",
      "ImageBB",
      "Nodemailer",
      "Node-cron",
      "Vercel"
    ],
    links: {},
    featured: false
  },
  {
    slug: "blood-bridge",
    title: "Blood Bridge",
    eyebrow: "Blood Donation and Request Platform",
    description:
      "A MERN app connecting donors and recipients through search, requests, authentication, and role-based workflows.",
    impact: "Earlier project that shows my foundation in practical MERN application development.",
    features: [
      "Donor discovery and request management",
      "Authentication and protected user flows",
      "Role-aware dashboards and interaction design",
      "Responsive MERN implementation with Tailwind CSS"
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Authentication", "Tailwind CSS"],
    links: {},
    featured: false
  }
] satisfies Project[];

export const projects = projectSchema.array().parse(rawProjects);
