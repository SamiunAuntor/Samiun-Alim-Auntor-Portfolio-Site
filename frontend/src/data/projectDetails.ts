import { projectDetailSchema, type ProjectDetail } from "./types";

const rawProjectDetails = [
  {
    slug: "skillbridge",
    tagline:
      "A SaaS-style tutoring marketplace built across a Next.js frontend and a TypeScript backend with role-based dashboards, Stripe payments, Zoom session preparation, and Prisma-backed workflows.",
    quickFacts: [
      { label: "Architecture", value: "Split frontend + backend repositories" },
      { label: "Frontend", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
      { label: "Backend", value: "Express 5, TypeScript, Prisma 7, PostgreSQL" },
      { label: "Core Systems", value: "Better Auth, Stripe, Zoom, Cloudinary, Zod" }
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview",
        intro:
          "SkillBridge is a tutoring marketplace focused on discovery, booking, payment, and role-aware dashboard workflows for students, tutors, and admins.",
        bullets: [
          "Public experience covers landing, tutor discovery, subject discovery, and trust content.",
          "Students can explore tutors, book sessions, pay securely, and manage notifications and reviews.",
          "Tutors manage profile data, availability, finances, reviews, and sessions.",
          "Admins moderate users, bookings, categories, subjects, degrees, and platform reviews."
        ]
      },
      {
        id: "frontend-features",
        title: "Frontend Feature Surface",
        groups: [
          {
            label: "Public Experience",
            items: [
              "Landing page with hero, stats, featured tutors, trust sections, and CTA modules.",
              "Tutor discovery with filtering, sorting, subject exploration, and detailed tutor pages."
            ]
          },
          {
            label: "Student Experience",
            items: [
              "Student dashboard, profile editing, sessions list, notifications, booking, and review workflows.",
              "Payment result states and protected route handling for authenticated flows."
            ]
          },
          {
            label: "Tutor & Admin Experience",
            items: [
              "Tutor profile management, availability scheduling, finances, reviews, and notifications.",
              "Admin users, bookings, categories, subjects, degrees, and moderation tools."
            ]
          }
        ]
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        intro:
          "The frontend uses the Next.js App Router with a hybrid server/client rendering strategy and route-grouped feature trees.",
        groups: [
          {
            label: "Main Areas",
            items: [
              "`src/app` for route tree, layouts, and page composition.",
              "`src/Components` for domain-driven UI groups.",
              "`src/lib` for API clients, auth helpers, payment helpers, and validation logic.",
              "`src/types` and `src/assets` for typed models and local media."
            ]
          },
          {
            label: "Rendering Strategy",
            items: [
              "Server-side route protection and page composition for dashboard boundaries.",
              "Client components for forms, notifications, theme toggle, payment UI, and interaction-heavy views.",
              "ISR on public landing content with periodic revalidation."
            ]
          }
        ]
      },
      {
        id: "auth-session",
        title: "Authentication and Session Flow",
        intro:
          "The frontend is session-aware but the backend owns the session and cookies. Protected dashboard routes redirect users by auth state and role.",
        bullets: [
          "Login, registration, verify-pending, forgot password, and reset-password are all implemented.",
          "Dashboard routes are protected on the server and redirect wrong-role users to the correct dashboard root.",
          "Missing sessions redirect to `/login?next=/dashboard`.",
          "Demo mode keeps verification-related screens visible while allowing accounts to stay usable on the free deployment."
        ]
      },
      {
        id: "booking-payment",
        title: "Booking and Payment Flow",
        intro:
          "The core product workflow turns tutor discovery into a secure checkout flow backed by Stripe and booking holds.",
        bullets: [
          "Students pick a tutor, choose a subject, select an availability slot, and begin checkout.",
          "Backend creates a temporary booking hold before Stripe completion.",
          "Frontend resumes or reloads checkout state from the backend and handles expired holds safely.",
          "Success and failure pages re-check the final payment state before rendering the result."
        ]
      },
      {
        id: "backend-overview",
        title: "Backend System Overview",
        intro:
          "The backend is a modular Express 5 + TypeScript service that owns authentication, availability, bookings, payments, uploads, meetings, notifications, and admin flows.",
        groups: [
          {
            label: "Core Modules",
            items: [
              "Auth, public data, tutor, student, availability, booking, payment, notifications, reviews, uploads, and admin domains.",
              "Each module follows a controller-service-validation pattern."
            ]
          },
          {
            label: "Runtime Foundations",
            items: [
              "Prisma 7 as ORM and PostgreSQL as the system of record.",
              "Better Auth for session infrastructure and role-aware constraints.",
              "Centralized error handling, Zod validation, and feature-module routing."
            ]
          }
        ]
      },
      {
        id: "payment-meetings",
        title: "Payment, Sessions, and Zoom Lifecycle",
        intro:
          "Payment is treated as a system event, not just a UI form. Booking confirmation is tied to Stripe status, session creation, and optional Zoom meeting generation.",
        bullets: [
          "Payment intent creation validates tutor, subject, slot ownership, and pricing rules.",
          "Pending bookings use a hold expiry system before confirmation.",
          "Stripe webhook processing maps payment intent status into internal booking and payment states.",
          "Confirmed sessions can create Zoom meeting links and trigger notifications."
        ]
      },
      {
        id: "notifications-uploads",
        title: "Notifications, Uploads, and Media Flow",
        groups: [
          {
            label: "Notifications",
            items: [
              "Unread counts, mark-one-read, mark-all-read, dashboard dropdown, and full notifications pages.",
              "Scheduled notification processing exists on the backend for reminder-style events."
            ]
          },
          {
            label: "Uploads",
            items: [
              "Frontend collects files and backend returns Cloudinary-backed upload results.",
              "Used for media-rich profile and content workflows."
            ]
          }
        ]
      },
      {
        id: "validation-tech",
        title: "Validation, Stack, and External Services",
        groups: [
          {
            label: "Validation Strategy",
            items: [
              "React Hook Form and Zod on the frontend for typed form workflows.",
              "Zod validation close to feature modules on the backend."
            ]
          },
          {
            label: "External Services",
            items: [
              "Stripe for checkout UI and backend payment orchestration.",
              "Cloudinary for media storage.",
              "Better Auth for session and auth workflows.",
              "Zoom for live tutoring session links."
            ]
          }
        ]
      },
      {
        id: "project-structure",
        title: "Project Structure and Route Map",
        groups: [
          {
            label: "Frontend Route Groups",
            items: [
              "`(main)` for public pages, tutor discovery, subjects, and payment routes.",
              "`(auth)` for login, register, verify-pending, forgot password, and reset password.",
              "`(dashboard)` for shared shell plus student, tutor, and admin areas."
            ]
          },
          {
            label: "Backend Structure",
            items: [
              "`src/modules/*` for domain modules.",
              "`src/services` for email and Zoom integrations.",
              "`jobs` for notification and payment maintenance cron paths."
            ]
          }
        ]
      },
      {
        id: "api-env-deployment",
        title: "API, Environment, and Deployment Notes",
        bullets: [
          "Domain-specific API clients cover public pages, tutors, bookings, payments, notifications, and admin functions.",
          "Frontend depends on public environment values for Stripe, Cloudinary, and backend rewrite targets.",
          "Backend depends on database, auth, Stripe, Zoom, Cloudinary, and mail provider configuration.",
          "Frontend is deployed on Vercel and backend on Render, with current demo notes around outbound email and free-tier runtime limitations."
        ]
      }
    ]
  },
  {
    slug: "ghor-bari",
    tagline:
      "A property marketplace for Bangladesh with real-time chat, geolocation-based search, admin moderation, NID verification, AI-assisted discovery, and full owner-seeker workflow handling.",
    quickFacts: [
      { label: "Architecture", value: "React + Vite frontend with Express + MongoDB backend" },
      { label: "Core Systems", value: "Firebase Auth, Socket.io, Groq AI, Nodemailer, node-cron" },
      { label: "Domain", value: "Rental, sale, negotiation, verification, analytics" },
      { label: "Deployment", value: "Firebase Hosting frontend, Render-style backend workflow" }
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        intro:
          "Ghor Bari is a property discovery and deal-management platform tailored for the Bangladesh market, combining search, communication, verification, and admin operations in one product.",
        bullets: [
          "Supports both rent and sale workflows.",
          "Connects property owners with seekers through listing, negotiation, chat, and application lifecycle tooling.",
          "Includes AI-assisted property discovery and analytics-heavy admin oversight."
        ]
      },
      {
        id: "user-features",
        title: "User Features",
        groups: [
          {
            label: "Discovery and Search",
            items: [
              "Multi-level location search using division, district, and upazila.",
              "Listing type, property type, price, area, amenities, and sorting controls.",
              "Property comparison, wishlist, and map-assisted discovery."
            ]
          },
          {
            label: "Communication and Trust",
            items: [
              "Real-time chat with typing indicators, history, and message management.",
              "Rating, review, and reputation features.",
              "NID-based verification for higher trust."
            ]
          }
        ]
      },
      {
        id: "management-admin",
        title: "Property Management and Admin",
        groups: [
          {
            label: "Owner Tools",
            items: [
              "Property creation wizard, image upload, AI-generated descriptions, and listing performance tracking.",
              "Application tracking with counter-offers, revisions, completion, and cancellation paths."
            ]
          },
          {
            label: "Admin Tools",
            items: [
              "User management, moderation, property approval, verification auditing, and analytics dashboards.",
              "Bulk moderation and operational visibility over marketplace activity."
            ]
          }
        ]
      },
      {
        id: "tech-architecture",
        title: "Tech Stack and Architecture",
        intro:
          "The platform follows an MVC-style backend flow with a component-driven React frontend and Socket.io for live communication.",
        groups: [
          {
            label: "Frontend Stack",
            items: [
              "React 18, Vite, TailwindCSS, Axios, React Router, Firebase SDK, and Socket.io Client."
            ]
          },
          {
            label: "Backend Stack",
            items: [
              "Node.js, Express 5.2, MongoDB, Mongoose, Firebase Admin SDK, Socket.io, node-cron, and Nodemailer."
            ]
          }
        ]
      },
      {
        id: "project-structure",
        title: "Project Structure",
        bullets: [
          "Backend is organized around `config`, `controllers`, `models`, `routes`, `middleware`, `services`, `events`, `jobs`, and utilities.",
          "Client is organized by `Components`, `Pages`, `Hooks`, `context`, `Layouts`, `PrivateRoute`, and UI utilities."
        ]
      },
      {
        id: "configuration-runtime",
        title: "Configuration and Runtime",
        bullets: [
          "Uses Firebase configuration on the client and MongoDB / SMTP / Groq / cron configuration on the server.",
          "Supports separate development and production API targets.",
          "Designed to run frontend and backend independently during local development."
        ]
      },
      {
        id: "api-architecture",
        title: "API and Architectural Flow",
        intro:
          "The backend follows a clear request chain: routes to controllers to services to models, with middleware enforcing security and role-aware access.",
        bullets: [
          "Exposes user, property, AI, chat, admin, and internal utility endpoints.",
          "Public/internal endpoints cover stats and queued email processing.",
          "AI endpoints support description generation, price estimation, and property discovery guidance."
        ]
      },
      {
        id: "data-realtime",
        title: "Database and Realtime Systems",
        groups: [
          {
            label: "Database Collections",
            items: [
              "Users, properties, chat/conversations, and email jobs are all part of the working data model."
            ]
          },
          {
            label: "Realtime Events",
            items: [
              "Join, leave, send message, typing indicators, read receipts, and online user updates are all handled through Socket.io."
            ]
          }
        ]
      },
      {
        id: "security-performance",
        title: "Security and Performance",
        bullets: [
          "Firebase Authentication, token verification, role-based access, CORS protection, input validation, and safe error handling are part of the backend contract.",
          "Performance work includes query optimization, caching, pagination, compression, and responsive delivery."
        ]
      },
      {
        id: "deployment-support",
        title: "Deployment, Troubleshooting, and Support",
        bullets: [
          "Frontend is intended for Firebase Hosting and backend for a hosted Node runtime like Render.",
          "README includes troubleshooting for ports, MongoDB, Firebase auth, module issues, and Socket.io connectivity.",
          "Deployment requires correct environment configuration for Firebase, MongoDB Atlas, email, and AI integrations."
        ]
      }
    ]
  },
  {
    slug: "warrantywallet",
    tagline:
      "A warranty-tracking productivity platform that centralizes invoices, automates expiry reminders, and adds admin oversight, analytics, and PDF export around a real post-purchase workflow.",
    quickFacts: [
      { label: "Architecture", value: "React frontend + Express backend on a MongoDB data model" },
      { label: "Core Systems", value: "Firebase Auth, ImageBB, Nodemailer, node-cron, Chart.js" },
      { label: "Primary Value", value: "Central vault, reminder automation, claim-ready records" },
      { label: "Deployment", value: "Firebase Hosting frontend and Vercel-oriented backend" }
    ],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        intro:
          "WarrantyWallet solves the common problem of lost invoices and forgotten expiry dates by turning warranty tracking into a secure, searchable, reminder-driven product.",
        bullets: [
          "Users keep warranty details, invoice images, and notes in one place.",
          "The system automatically detects expiry state changes and sends reminder emails.",
          "Admins can monitor users and platform activity through a dedicated oversight interface."
        ]
      },
      {
        id: "current-features",
        title: "Current Features",
        groups: [
          {
            label: "Core User Features",
            items: [
              "Product CRUD, embedded warranty data, auto-calculated expiry state, and categorization.",
              "Multiple invoice image upload, invoice viewing, and download-friendly claim readiness.",
              "Search, filter, and PDF export for stored warranty records."
            ]
          },
          {
            label: "Admin and Platform Features",
            items: [
              "Admin dashboard, user management, status controls, platform analytics, and charts.",
              "Homepage sections for value proposition, features, benefits, FAQ, and CTA."
            ]
          }
        ]
      },
      {
        id: "dashboard-reminders",
        title: "Dashboard, Analytics, and Reminder System",
        intro:
          "The platform balances operational productivity with automation and visibility.",
        bullets: [
          "User dashboard shows statistics cards and recent products.",
          "Admin dashboard visualizes registration trends, status breakdowns, and category insights.",
          "Daily cron jobs detect products entering the expiring-soon state and trigger one-time email reminders."
        ]
      },
      {
        id: "security-routing",
        title: "Authentication, Security, and Route Model",
        bullets: [
          "Firebase Authentication supports email/password and Google OAuth.",
          "Role-based access control separates standard users from admins.",
          "PrivateRoute, AdminRoute, and PublicRoute patterns protect application surfaces.",
          "Automatic logout and backend verification protect suspended or unauthorized sessions."
        ]
      },
      {
        id: "ui-ux",
        title: "UI and UX System",
        bullets: [
          "Responsive dashboard-oriented interface with Tailwind CSS and DaisyUI components.",
          "SweetAlert2, toast notifications, tooltips, loading states, and smooth transitions improve feedback.",
          "Sidebar-driven dashboard navigation and mobile-first responsiveness keep the app usable across devices."
        ]
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        groups: [
          {
            label: "Frontend",
            items: [
              "React 19, React Router 7, TanStack Query, Axios, Firebase, Tailwind CSS 4, Chart.js, SweetAlert2, Swiper, jsPDF, and DaisyUI."
            ]
          },
          {
            label: "Backend and Services",
            items: [
              "Node.js, Express 5, MongoDB, Firebase Admin SDK, Nodemailer, node-cron, ImageBB, and Gmail SMTP."
            ]
          }
        ]
      },
      {
        id: "project-structure",
        title: "Project Structure",
        bullets: [
          "Backend contains jobs, middleware, routes, services, database helpers, and Firebase admin setup.",
          "Frontend is split into auth guards, dashboard components, Firebase provider, hooks, layouts, pages, and utilities."
        ]
      },
      {
        id: "api-schema",
        title: "API Surface and Data Schema",
        groups: [
          {
            label: "API Surface",
            items: [
              "Protected routes cover users, products, invoices, user dashboard stats, admin stats, and public homepage stats."
            ]
          },
          {
            label: "Data Model",
            items: [
              "Users, products, invoices, reminder logs, and reminders form the main collections.",
              "Products use soft delete and embed warranty status logic, while users use hard-delete semantics for admin removal."
            ]
          }
        ]
      },
      {
        id: "data-flow",
        title: "Data Flow and Background Jobs",
        bullets: [
          "User registration syncs profile data into MongoDB.",
          "Product creation computes expiry date and status from purchase date and duration.",
          "Invoice upload creates metadata records and links them to products.",
          "Daily reminder jobs update status and log reminder actions."
        ]
      },
      {
        id: "future-scope",
        title: "Future Scope",
        bullets: [
          "Export enhancements, in-app notifications, bulk operations, OCR invoice scanning, advanced analytics, and PWA support are all part of the roadmap.",
          "The project is structured so those additions can extend the existing dashboard and collection model rather than replacing it."
        ]
      }
    ]
  },
  {
    slug: "blood-bridge",
    tagline:
      "A role-based blood donation platform that connects donors and recipients through request management, donor search, dashboards, and a secure MERN + Firebase backend/frontend split.",
    quickFacts: [
      { label: "Architecture", value: "React + Vite client with Express + MongoDB server" },
      { label: "Roles", value: "Admin, Volunteer, Donor" },
      { label: "Core Systems", value: "Firebase Auth, MongoDB, PDF export, Recharts dashboards" },
      { label: "Deployment", value: "Firebase Hosting client and Vercel-hosted server" }
    ],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        intro:
          "Blood Bridge is a donation-request platform built to help donors and recipients find each other through role-aware workflows, searchable donor data, and request lifecycle management.",
        bullets: [
          "Users register with blood group and location metadata.",
          "Donors create and manage donation requests.",
          "Volunteers and admins operate broader moderation and status controls.",
          "The system mixes public discovery pages with authenticated dashboard workflows."
        ]
      },
      {
        id: "client-features",
        title: "Client Features",
        groups: [
          {
            label: "Authentication and Access",
            items: [
              "Firebase login and registration with role-based protected routes.",
              "Admin, volunteer, and donor roles with distinct permission boundaries."
            ]
          },
          {
            label: "Donation Workflow",
            items: [
              "Create, edit, delete, and inspect donation requests.",
              "Public pending requests page plus detailed request views.",
              "Donation response updates that move a request from pending to in-progress."
            ]
          },
          {
            label: "Discovery and Dashboard",
            items: [
              "Search donors by blood group, district, and upazila.",
              "Dashboard home with stats cards, recent requests, pagination, and analytics charts."
            ]
          }
        ]
      },
      {
        id: "client-tech",
        title: "Client Tech Stack and Structure",
        groups: [
          {
            label: "Frontend Stack",
            items: [
              "React 19, Vite 7, React Router 7, Tailwind CSS 4, DaisyUI, Recharts, SweetAlert2, react-hot-toast, React Hook Form, and jsPDF."
            ]
          },
          {
            label: "Client Structure",
            items: [
              "`Components`, `Pages`, `Layouts`, `Hooks`, `Firebase`, `PrivateRoutes`, and `Utilities` form the main source layout.",
              "Uses Bangladesh district/upazila data files for location-aware forms and search."
            ]
          }
        ]
      },
      {
        id: "server-overview",
        title: "Server Overview",
        intro:
          "The backend is a secure REST API responsible for authentication checks, donor search, request management, role controls, and admin operations.",
        bullets: [
          "Built with Node.js, Express, MongoDB, and Firebase Admin SDK.",
          "Uses Firebase token verification instead of a custom auth system for protected endpoints.",
          "Enforces role checks through middleware."
        ]
      },
      {
        id: "server-features",
        title: "Server Features",
        groups: [
          {
            label: "Protected Functional Areas",
            items: [
              "User profile retrieval and updates.",
              "Donation request CRUD, status updates, donor assignment, and pagination.",
              "Admin user-role changes, block/unblock operations, and system statistics."
            ]
          },
          {
            label: "Public Functional Areas",
            items: [
              "Pending donation request listing.",
              "Public donor search by blood group and location."
            ]
          }
        ]
      },
      {
        id: "api-auth",
        title: "API and Authentication",
        bullets: [
          "Protected routes require a Firebase ID token in the Authorization header.",
          "Middleware verifies tokens, extracts email identity, and applies role constraints.",
          "The API surface covers registration, profile management, request workflows, search, user management, and statistics."
        ]
      },
      {
        id: "data-model",
        title: "Database Schema",
        groups: [
          {
            label: "Users Collection",
            items: [
              "Stores name, email, blood group, district, upazila, avatar, role, status, and creation date."
            ]
          },
          {
            label: "Donation Requests Collection",
            items: [
              "Stores requester identity, recipient information, hospital/address, blood group, schedule, message, lifecycle status, and donor response details."
            ]
          }
        ]
      },
      {
        id: "roles-dashboard",
        title: "Role Model and Dashboards",
        bullets: [
          "Admins can manage users, requests, and high-level platform visibility.",
          "Donors can manage their own requests, search donors, and update in-progress request outcomes.",
          "Volunteers can see all requests and help update their operational state."
        ]
      },
      {
        id: "deployment-notes",
        title: "Deployment and Operational Notes",
        bullets: [
          "Client deployment requires SPA routing support and Firebase authorized domains.",
          "Server deployment expects MongoDB connection, Firebase service account configuration, and correct CORS settings.",
          "The backend README also documents a Vercel-friendly base64 Firebase service account workflow for production."
        ]
      }
    ]
  }
] satisfies ProjectDetail[];

export const projectDetails = projectDetailSchema.array().parse(rawProjectDetails);
