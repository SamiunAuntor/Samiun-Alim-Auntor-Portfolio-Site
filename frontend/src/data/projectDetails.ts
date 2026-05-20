import { projectDetailSchema, type ProjectDetail } from "./types";

const rawProjectDetails = [
  {
    slug: "skillbridge",
    type: "Full-stack SaaS Platform",
    status: "MVP",
    tagline:
      "A tutoring marketplace where students discover tutors, book live sessions, pay securely, and manage learning workflows through role-aware dashboards.",
    overview:
      "SkillBridge is a SaaS-style tutoring platform built around the full journey from tutor discovery to session management. Students can find suitable tutors, book available slots, complete payment, and track sessions, while tutors and admins get dedicated dashboards for operating the platform.",
    purpose:
      "The project was built to solve the friction of scattered tutoring workflows. Instead of separating discovery, scheduling, payment, and communication into different tools, SkillBridge brings the core marketplace flow into one structured product experience.",
    keyFeatures: [
      {
        title: "Student Features",
        items: [
          "Tutor discovery with subject-aware browsing and detailed tutor profiles.",
          "Availability-based booking flow with protected checkout states.",
          "Student dashboard for sessions, notifications, profile updates, and reviews."
        ]
      },
      {
        title: "Tutor Features",
        items: [
          "Tutor profile management for expertise, subjects, pricing, and visibility.",
          "Availability scheduling and session lifecycle management.",
          "Finance, review, and notification surfaces for day-to-day operations."
        ]
      },
      {
        title: "Admin Features",
        items: [
          "Management tools for users, tutors, bookings, categories, subjects, and degrees.",
          "Moderation-oriented dashboard views for keeping the platform organized."
        ]
      },
      {
        title: "Payment Features",
        items: [
          "Stripe checkout with temporary booking holds before final confirmation.",
          "Payment result handling that verifies state before showing success or failure."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "TypeScript"] },
      { category: "Database", items: ["PostgreSQL", "Prisma"] },
      { category: "Authentication", items: ["Better Auth"] },
      { category: "Payment / Services", items: ["Stripe", "Zoom", "Cloudinary"] },
      { category: "Deployment", items: ["Vercel", "Render"] }
    ],
    architecture: {
      intro:
        "SkillBridge uses a split frontend and backend architecture where the frontend handles role-aware experiences and the backend owns business rules, authentication, payments, and persistence.",
      steps: [
        {
          title: "Discovery to Booking",
          description:
            "Students browse tutors, inspect profile details, select a subject and available slot, then start a booking flow that is validated by the backend."
        },
        {
          title: "Booking Hold to Checkout",
          description:
            "The backend creates a temporary booking hold before Stripe checkout so the selected slot is not treated as confirmed until payment succeeds."
        },
        {
          title: "Payment to Session",
          description:
            "Successful payment updates booking and session state, then dashboard surfaces reflect the confirmed tutoring session for the right roles."
        },
        {
          title: "Role-aware Dashboards",
          description:
            "Students, tutors, and admins see different dashboard modules while sharing a consistent protected route and session model."
        }
      ]
    },
    visuals: [
      {
        title: "Marketplace Landing",
        description:
          "The public entry point explains the tutoring marketplace and routes users toward tutor discovery."
      },
      {
        title: "Tutor Discovery",
        description:
          "Students can compare tutors by subject, profile strength, and availability before booking."
      },
      {
        title: "Dashboard Workflows",
        description:
          "Role-specific dashboards keep student, tutor, and admin actions separated and easier to scan."
      },
      {
        title: "Checkout Flow",
        description:
          "Payment screens are tied to booking state so users receive clear success and failure feedback."
      }
    ],
    challenges: [
      {
        challenge: "Keeping the booking and payment states reliable.",
        solution:
          "I treated checkout as a multi-step workflow with temporary booking holds and backend verification before rendering final payment states."
      },
      {
        challenge: "Supporting multiple user roles without making the UI feel fragmented.",
        solution:
          "I separated dashboard surfaces by role while keeping shared layout, navigation, and protection patterns consistent."
      },
      {
        challenge: "Balancing product depth with maintainable code organization.",
        solution:
          "I used feature-oriented frontend and backend boundaries so bookings, payments, users, and admin tools could grow independently."
      }
    ],
    learnings: [
      "This project improved my understanding of SaaS-style product flow, especially where authentication, payments, and role-specific dashboards meet.",
      "It also strengthened my backend thinking around state transitions, validation, and business-rule ownership."
    ]
  },
  {
    slug: "ghor-bari",
    type: "Full-stack Marketplace Platform",
    status: "Completed",
    tagline:
      "A Bangladesh-focused property platform with listing discovery, owner-seeker workflows, real-time chat, verification, admin moderation, and AI-assisted search.",
    overview:
      "Ghor Bari is a property marketplace designed for rental and sale workflows. It helps seekers discover properties, communicate with owners, negotiate or apply, and build trust through verification and admin oversight.",
    purpose:
      "The project was built around a real marketplace problem: property discovery is not just search. Users need trust signals, location-aware filtering, communication, moderation, and a clear path from interest to agreement.",
    role: {
      summary:
        "This was a collaborative project. My work focused on building product-facing flows and connecting them with backend behavior so the platform felt usable across owner, seeker, and admin roles.",
      contributions: [
        "Frontend implementation for key property discovery and workflow screens.",
        "Backend API development for property, user, and operational flows.",
        "Authentication and role-based access integration.",
        "Admin dashboard and moderation workflow implementation.",
        "Realtime communication and integration work across the stack."
      ]
    },
    keyFeatures: [
      {
        title: "Seeker Features",
        items: [
          "Location-aware property search by division, district, and upazila.",
          "Filtering by listing type, property type, budget, area, and amenities.",
          "Wishlist, comparison, and map-assisted discovery for better decision making."
        ]
      },
      {
        title: "Owner Features",
        items: [
          "Property creation workflow with image handling and listing details.",
          "Application and negotiation lifecycle support for interested seekers.",
          "Performance visibility around property activity."
        ]
      },
      {
        title: "Communication Features",
        items: [
          "Realtime chat with typing indicators and message history.",
          "Negotiation-friendly conversation flow between seekers and owners."
        ]
      },
      {
        title: "Admin Features",
        items: [
          "User management, property approval, verification review, and moderation.",
          "Analytics views for understanding marketplace activity."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "React Router"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication", items: ["Firebase Auth", "Firebase Admin SDK"] },
      { category: "Third-party Services", items: ["Socket.io", "Groq AI", "Nodemailer"] },
      { category: "Deployment", items: ["Firebase Hosting", "Render-style Node hosting"] }
    ],
    architecture: {
      intro:
        "Ghor Bari connects a React frontend with an Express backend, MongoDB data model, Firebase authentication, and Socket.io realtime communication.",
      steps: [
        {
          title: "Search and Discovery",
          description:
            "Seekers filter properties through location and property attributes, while the backend returns matching listings and related marketplace metadata."
        },
        {
          title: "Owner to Seeker Flow",
          description:
            "Owners publish listings, seekers apply or negotiate, and both sides move through a managed lifecycle instead of loose one-off messages."
        },
        {
          title: "Realtime Chat",
          description:
            "Socket.io keeps conversations responsive with message history, typing states, and live communication between interested parties."
        },
        {
          title: "Verification and Moderation",
          description:
            "Admin tools and verification flows add trust controls so marketplace activity can be reviewed and managed."
        }
      ]
    },
    visuals: [
      {
        title: "Property Discovery",
        description:
          "Search and filtering screens help users narrow down relevant property options quickly."
      },
      {
        title: "Property Detail View",
        description:
          "Detailed listing pages present property information, trust signals, and action paths for seekers."
      },
      {
        title: "Realtime Chat",
        description:
          "Communication screens support negotiation and owner-seeker coordination."
      },
      {
        title: "Admin Dashboard",
        description:
          "Admin views focus on moderation, verification, user management, and platform analytics."
      }
    ],
    challenges: [
      {
        challenge: "Making property search useful for Bangladesh-specific locations.",
        solution:
          "I organized search around division, district, and upazila data instead of relying only on generic text search."
      },
      {
        challenge: "Combining marketplace workflow with realtime communication.",
        solution:
          "The system keeps chat connected to property and user context so conversations support the actual listing lifecycle."
      },
      {
        challenge: "Building trust into a marketplace experience.",
        solution:
          "Verification, admin moderation, and owner-seeker workflow states were added so the platform feels more operationally controlled."
      }
    ],
    learnings: [
      "This project strengthened my understanding of marketplace workflows, realtime communication, and trust-building product features.",
      "It also gave me stronger experience working across a collaborative full-stack codebase."
    ]
  },
  {
    slug: "warrantywallet",
    type: "Full-stack Productivity Platform",
    status: "Completed",
    tagline:
      "A warranty-tracking platform that centralizes products, invoices, reminders, admin oversight, analytics, and export-ready claim records.",
    overview:
      "WarrantyWallet helps users store warranty information, invoice images, expiry dates, and product notes in one searchable place. It also automates expiry reminders and gives admins visibility into platform usage.",
    purpose:
      "The project was built around a common post-purchase pain point: people often lose invoices or forget warranty deadlines. WarrantyWallet turns that messy personal tracking problem into a structured digital vault with reminders.",
    keyFeatures: [
      {
        title: "User Features",
        items: [
          "Product and warranty record management with expiry status calculation.",
          "Invoice image storage for claim-ready documentation.",
          "Search, filtering, dashboard stats, and PDF export support."
        ]
      },
      {
        title: "Reminder Features",
        items: [
          "Expiry-state tracking for active, expiring, and expired products.",
          "Automated email reminders for products approaching warranty expiry."
        ]
      },
      {
        title: "Admin Features",
        items: [
          "Admin dashboard with user management and platform statistics.",
          "Analytics charts for product categories, user activity, and status breakdowns."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "React Router", "Tailwind CSS", "TanStack Query"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Authentication", items: ["Firebase Auth", "Firebase Admin SDK"] },
      { category: "Third-party Services", items: ["ImageBB", "Nodemailer", "Chart.js", "jsPDF"] },
      { category: "Deployment", items: ["Firebase Hosting", "Vercel-oriented backend"] }
    ],
    architecture: {
      intro:
        "WarrantyWallet uses a React dashboard frontend with an Express backend that manages users, warranty records, invoice metadata, reminder logic, and admin analytics.",
      steps: [
        {
          title: "Product Capture",
          description:
            "Users create warranty records with purchase date, duration, product metadata, and invoice references."
        },
        {
          title: "Expiry Calculation",
          description:
            "The backend derives warranty status from product dates so the dashboard can show active, expiring, and expired records clearly."
        },
        {
          title: "Invoice and Claim Flow",
          description:
            "Invoice images are uploaded and linked to products, giving users a cleaner path when they need warranty support."
        },
        {
          title: "Reminder Automation",
          description:
            "Scheduled checks identify products nearing expiry and trigger reminder emails at the right moment."
        }
      ]
    },
    visuals: [
      {
        title: "Product Vault",
        description:
          "The main dashboard keeps product records and warranty states easy to scan."
      },
      {
        title: "Invoice Storage",
        description:
          "Invoice views help users keep proof of purchase connected to the right product."
      },
      {
        title: "Admin Analytics",
        description:
          "Admin screens summarize users, product activity, and warranty status distribution."
      },
      {
        title: "Reminder Workflow",
        description:
          "Expiry reminders make the product useful even when users are not actively checking the dashboard."
      }
    ],
    challenges: [
      {
        challenge: "Turning a simple CRUD idea into a useful product.",
        solution:
          "I focused the app around the real workflow: store proof, track expiry, receive reminders, and export records when needed."
      },
      {
        challenge: "Keeping warranty status accurate over time.",
        solution:
          "Expiry state is calculated from product data and reinforced through scheduled reminder logic."
      },
      {
        challenge: "Presenting both user productivity and admin oversight.",
        solution:
          "I separated user and admin dashboards so each role gets the right level of visibility without cluttering the main workflow."
      }
    ],
    learnings: [
      "WarrantyWallet improved my sense for automation-driven product features, especially around scheduled jobs and email reminders.",
      "It also strengthened my dashboard design, file-handling, and role-based access experience."
    ]
  },
  {
    slug: "blood-bridge",
    type: "Full-stack Donation Management Platform",
    status: "Completed",
    tagline:
      "A blood donation platform connecting donors and recipients through request management, donor search, protected dashboards, and role-based operations.",
    overview:
      "Blood Bridge is a MERN-style donation platform for creating, managing, and discovering blood donation requests. It combines public donor discovery with authenticated dashboards for donors, volunteers, and admins.",
    purpose:
      "The project was built to make blood donation coordination more organized. Instead of relying on scattered posts or manual contact lists, users can create requests, search donors by location and blood group, and manage request status in one system.",
    keyFeatures: [
      {
        title: "Donor Features",
        items: [
          "Create and manage donation requests from a protected dashboard.",
          "Track request status and update outcomes when a donation workflow progresses."
        ]
      },
      {
        title: "Recipient / Public Features",
        items: [
          "Browse pending donation requests from public pages.",
          "Search donors by blood group, district, and upazila."
        ]
      },
      {
        title: "Admin Features",
        items: [
          "Manage users, roles, blocks, donation requests, and platform statistics.",
          "Review operational activity through dashboard-oriented views."
        ]
      },
      {
        title: "Volunteer Features",
        items: [
          "Access broader request management views to help keep donation workflows updated."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "React Router", "Tailwind CSS", "DaisyUI"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Authentication", items: ["Firebase Auth", "Firebase Admin SDK"] },
      { category: "Tools", items: ["Recharts", "React Hook Form", "SweetAlert2", "jsPDF"] },
      { category: "Deployment", items: ["Firebase Hosting", "Vercel-hosted server"] }
    ],
    architecture: {
      intro:
        "Blood Bridge uses a React client with protected dashboard routes and an Express API that verifies Firebase identity before allowing role-specific actions.",
      steps: [
        {
          title: "Authentication Flow",
          description:
            "Users authenticate through Firebase, and protected API calls are verified on the server before accessing private resources."
        },
        {
          title: "Donation Request Flow",
          description:
            "Donors create requests, users inspect pending requests, and request state changes as donors or volunteers update progress."
        },
        {
          title: "Role-based Dashboard Flow",
          description:
            "Admins, volunteers, and donors see different dashboard surfaces based on their role and permissions."
        },
        {
          title: "Donor Search Flow",
          description:
            "Search combines blood group and Bangladesh location filters so users can find relevant donors faster."
        }
      ]
    },
    visuals: [
      {
        title: "Donation Requests",
        description:
          "Request screens keep recipient details, location, blood group, and status visible."
      },
      {
        title: "Donor Search",
        description:
          "Search flows help users filter possible donors by blood group and location."
      },
      {
        title: "Dashboard",
        description:
          "Role-based dashboard views organize requests, user actions, and key statistics."
      },
      {
        title: "Admin Management",
        description:
          "Admin screens support role changes, user blocking, and request oversight."
      }
    ],
    challenges: [
      {
        challenge: "Managing different permissions across admin, volunteer, and donor roles.",
        solution:
          "I separated route access and dashboard behavior by role so each user only sees the actions they should control."
      },
      {
        challenge: "Keeping donation request status understandable.",
        solution:
          "The request lifecycle was modeled around clear states so users can tell whether a request is pending, in progress, or completed."
      },
      {
        challenge: "Making donor search practical for local use.",
        solution:
          "I used blood group and district/upazila filters to make search more useful for real-world matching."
      }
    ],
    learnings: [
      "Blood Bridge strengthened my understanding of role-based dashboards and protected workflow design.",
      "It also helped me practice connecting public discovery pages with authenticated operational features."
    ]
  }
] satisfies ProjectDetail[];

export const projectDetails = projectDetailSchema.array().parse(rawProjectDetails);
