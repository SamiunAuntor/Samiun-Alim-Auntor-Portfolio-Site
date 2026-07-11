import { projectSchema, type Project } from "./types";
import bloodBridgeImage from "@/assets/projects/blood-bridge.png";
import ghorBariImage from "@/assets/projects/ghor-bari.png";
import legacyVaultImage from "@/assets/projects/legacy-vault.png";
import pawCareImage from "@/assets/projects/paw-care.png";
import sheiItImage from "@/assets/projects/shei-it.png";
import skillBridgeImage from "@/assets/projects/skill-bridge.png";
import warrantyWalletImage from "@/assets/projects/warranty-wallet.png";

const rawProjects = [
  {
    slug: "skillbridge",
    title: "Skill Bridge",
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
    title: "Warranty Wallet",
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
  },
  {
    slug: "legacy-vault",
    title: "Legacy Vault",
    eyebrow: "Secure Digital Inheritance Platform",
    description:
      "A secure digital inheritance platform for preserving documents, final wishes, future messages, and successor instructions behind a verified, admin-reviewed claim workflow.",
    impact:
      "A privacy-focused vault experience that combines protected document storage, successor verification, claim scoring, admin review, and controlled release of sensitive information.",
    features: [
      "Private vault for documents, final wishes, and future messages",
      "Trusted successor setup with hashed verification answers",
      "End-to-end claim submission, scoring, review, and approval workflow",
      "Admin moderation, audit logs, and controlled vault-data release"
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "Vercel"
    ],
    links: {
      live: "https://legacy-vault-beta.vercel.app/",
      github: "https://github.com/SamiunAuntor/Legacy-Vault"
    },
    featured: false
  },
  {
    slug: "shei-it",
    title: "Shei IT",
    eyebrow: "Full-Stack Digital Agency Platform",
    description:
      "A production-ready agency platform with dynamic services, portfolio case studies, content management, inquiry workflows, SEO controls, analytics settings, and a secure admin dashboard.",
    impact:
      "A deployed content-driven platform that combines a polished agency website with secure administrative control over services, projects, contacts, SEO, analytics, and publishing workflows.",
    features: [
      "Database-backed services, portfolio projects, and detailed case studies",
      "Firebase-protected admin dashboard with modular content controls",
      "Contact inquiry management, editable SEO, and analytics configuration",
      "Responsive public experience with dynamic routes and light/dark themes"
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Firebase", "Tailwind CSS", "Zod", "Node.js"],
    links: {
      live: "https://shei-it.com/",
      github: "https://github.com/Mahedi454/Shei-IT"
    },
    featured: false
  },
  {
    slug: "pawcare",
    title: "Paw Care",
    eyebrow: "Pet Care Services Platform",
    description:
      "A responsive pet-care SPA where users explore services, review veterinarian profiles, authenticate securely, manage their profile, and submit service-booking forms.",
    impact:
      "A polished consumer-facing React experience that combines Firebase authentication, protected routes, responsive service discovery, profile management, and interactive UI feedback.",
    features: [
      "Email, password, and Google authentication with password reset",
      "Protected routes and editable user profile experience",
      "Pet-care service discovery, details, and booking-form flow",
      "Responsive veterinarian showcase with animated interface elements"
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Vite"
    ],
    links: {
      live: "https://pet-care-e7a9f.web.app/",
      github: "https://github.com/SamiunAuntor/PH-Assignment-9_Pet-Care"
    },
    featured: false
  }
] satisfies Project[];

export const projects = projectSchema.array().parse(rawProjects);

export const projectImages = {
  "blood-bridge": bloodBridgeImage,
  skillbridge: skillBridgeImage,
  "ghor-bari": ghorBariImage,
  warrantywallet: warrantyWalletImage,
  "legacy-vault": legacyVaultImage,
  "shei-it": sheiItImage,
  pawcare: pawCareImage
} as const;
