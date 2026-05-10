import { projectSchema, type Project } from "./types";
import bloodBridgeImage from "@/assets/projects/blood-bridge.png";
import ghorBariImage from "@/assets/projects/ghor-bari.png";
import skillBridgeImage from "@/assets/projects/skill-bridge.png";
import warrantyWalletImage from "@/assets/projects/warranty-wallet.png";

const rawProjects = [
  {
    slug: "skillbridge",
    title: "SkillBridge",
    eyebrow: "Tutoring Marketplace Platform",
    description:
      "A modern tutoring marketplace where students discover tutors, book live sessions, pay securely, and use role-based dashboards across student, tutor, and admin experiences.",
    impact:
      "A SaaS-style tutoring platform built with a split frontend/backend architecture, secure payment flow, protected dashboards, and production-oriented route organization.",
    features: [
      "Student, tutor, and admin role-aware dashboards",
      "Tutor discovery, availability-based booking, and session flow",
      "Stripe checkout with hold expiry and payment result handling",
      "Server-protected routes, notifications, and theme-aware dashboard UX"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Stripe"
    ],
    links: {
      live: "https://skill-bridge-frontend-sooty.vercel.app/",
      github: "https://github.com/SamiunAuntor/Skill-Bridge_Frontend",
      backend: "https://github.com/SamiunAuntor/Skill-Bridge_Backend",
      caseStudy: "Frontend and backend system breakdown coming soon"
    },
    featured: true
  },
  {
    slug: "ghor-bari",
    title: "Ghor Bari",
    eyebrow: "Property Rental and Listing Platform",
    description:
      "A full-stack property platform for the Bangladesh market with discovery, role-based workflows, real-time chat, verification, analytics, and AI-assisted property experiences.",
    impact:
      "A feature-rich marketplace system that combines real-time communication, geolocation-based property discovery, admin moderation, and production-style workflow design.",
    features: [
      "Owner, seeker, and admin role-based product flows",
      "Geo-location property search, filtering, compare, and wishlist",
      "Socket.io real-time chat with negotiation and application lifecycle",
      "NID verification, queued email notifications, and admin analytics"
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Socket.io",
      "Render"
    ],
    links: {
      live: "https://ghor-bari-2c93a.web.app/",
      github: "https://github.com/khandakeraliariyan/GHOR_BARI"
    },
    featured: true
  },
  {
    slug: "warrantywallet",
    title: "WarrantyWallet",
    eyebrow: "Digital Warranty Management Platform",
    description:
      "A smart warranty and claim reminder system for tracking products, storing invoices, managing admin oversight, and automating expiry reminders.",
    impact:
      "A practical productivity platform that combines automation, file handling, role-based access, analytics, and scheduled background jobs around a real user pain point.",
    features: [
      "Product and warranty CRUD with expiry-state calculation",
      "Invoice image vault with ImageBB upload and claim-ready access",
      "Admin dashboard, charts, role-based routes, and user management",
      "Daily cron-based reminder emails and PDF export workflows"
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Vercel",
      "ImageBB"
    ],
    links: {
      live: "https://warranty-wallet-ad400.web.app",
      github: "https://github.com/SamiunAuntor/WarrantyWallet"
    },
    featured: true
  },
  {
    slug: "blood-bridge",
    title: "Blood Bridge",
    eyebrow: "Blood Donation Management System",
    description:
      "A secure MERN platform for managing blood donation requests, role-based dashboards, donor discovery, and operational workflows across admin, volunteer, and donor users.",
    impact:
      "An earlier but complete product system that demonstrates role-based access control, request lifecycle management, dashboard analytics, and public-to-private workflow design.",
    features: [
      "Admin, volunteer, and donor role-aware dashboards",
      "Donation request CRUD, status tracking, and donor response flow",
      "Search donors by blood group and Bangladesh location filters",
      "Firebase auth, protected routes, PDF export, and dashboard analytics"
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase"
    ],
    links: {
      live: "https://bloodbridge-4c0c0.web.app/",
      github: "https://github.com/SamiunAuntor/PH-Assignment-11_Blood-Bridge_Client",
      backend: "https://github.com/SamiunAuntor/PH-Assignment-11_Blood-Bridge_Server"
    },
    featured: false
  }
] satisfies Project[];

export const projects = projectSchema.array().parse(rawProjects);

export const projectImages = {
  "blood-bridge": bloodBridgeImage,
  skillbridge: skillBridgeImage,
  "ghor-bari": ghorBariImage,
  warrantywallet: warrantyWalletImage
} as const;
