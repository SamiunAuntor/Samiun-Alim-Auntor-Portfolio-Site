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
  },
  {
    slug: "legacy-vault",
    type: "Full-stack Digital Inheritance Platform",
    status: "Completed",
    tagline:
      "A secure vault for preserving sensitive records and releasing them to a trusted successor only after verification and admin approval.",
    overview:
      "LegacyVault is a digital inheritance platform that helps users organize documents, final wishes, future messages, verification questions, and successor instructions in one protected system. A successor can request access through a structured claim flow, but vault information is released only after answer scoring and admin review.",
    purpose:
      "The project addresses a sensitive real-world problem: important personal, legal, financial, and digital records are often scattered or inaccessible when their owner becomes unavailable. LegacyVault creates a controlled path for preserving that information and transferring access without exposing private data prematurely.",
    role: {
      summary:
        "This was a collaborative project. I built the complete frontend experience and owned the core document-claiming workflow end to end, implementing both its frontend interactions and backend behavior.",
      contributions: [
        "Designed and implemented the full React frontend across public, owner, successor, and admin experiences.",
        "Built the complete document-claiming workflow from successor submission through verification, review, and released vault access.",
        "Implemented the frontend and backend portions of the core claim workflow, including state handling and API integration.",
        "Connected protected dashboards, document management, successor setup, verification questions, and admin review surfaces.",
        "Integrated Firebase authentication and backend-controlled document interactions into the user experience."
      ]
    },
    keyFeatures: [
      {
        title: "Vault Owner Features",
        items: [
          "Protected dashboard for documents, successors, verification questions, final wishes, and future messages.",
          "Secure document upload and retrieval through backend-controlled Cloudinary storage.",
          "Trusted-successor registration and access-state management."
        ]
      },
      {
        title: "Successor Claim Features",
        items: [
          "Public claim portal for submitting identity details and verification answers.",
          "Backend verification scoring against securely hashed answers.",
          "Approved access flow for released documents, wishes, and future messages."
        ]
      },
      {
        title: "Admin Features",
        items: [
          "Claim-review dashboard with approval and rejection controls.",
          "Audit-log visibility for important vault and claim events.",
          "Protected admin routes and operational dashboard data."
        ]
      },
      {
        title: "Security Features",
        items: [
          "Firebase identity verification and bearer-token-protected API routes.",
          "bcrypt-hashed verification answers and role-protected admin endpoints.",
          "Controlled file handling through Multer and Cloudinary."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React 19", "Vite", "React Router", "Tailwind CSS", "TanStack Query", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express 5", "Zod"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication / Security", items: ["Firebase Auth", "Firebase Admin SDK", "JWT", "bcryptjs"] },
      { category: "Storage / Services", items: ["Cloudinary", "Multer", "Axios"] },
      { category: "Deployment", items: ["Vercel"] }
    ],
    architecture: {
      intro:
        "LegacyVault uses a React client with authenticated route groups and an Express API organized into feature modules. The backend owns claim verification, access decisions, persistence, and secure document operations.",
      steps: [
        {
          title: "Vault Preparation",
          description:
            "The owner stores documents, wishes, messages, successor details, and verification questions through protected dashboard workflows."
        },
        {
          title: "Claim Submission",
          description:
            "A successor enters the claim portal, provides identity details, and answers the owner's verification questions."
        },
        {
          title: "Verification and Review",
          description:
            "The backend scores submitted answers and places the claim into an admin-controlled approval or rejection workflow."
        },
        {
          title: "Controlled Release",
          description:
            "After approval, the successor gains access only to the released vault documents, final wishes, and future messages."
        }
      ]
    },
    visuals: [
      {
        title: "Owner Dashboard",
        description:
          "The primary dashboard organizes documents, successors, questions, wishes, messages, claims, and settings."
      },
      {
        title: "Document Vault",
        description:
          "Document screens support secure upload, categorization, retrieval, status changes, and deletion."
      },
      {
        title: "Successor Claim Portal",
        description:
          "The claim experience guides successors through identity details and verification answers."
      },
      {
        title: "Admin Claim Review",
        description:
          "Admin views surface pending claims, verification results, approval controls, and audit history."
      }
    ],
    challenges: [
      {
        challenge: "Designing a sensitive claim workflow that does not expose vault data too early.",
        solution:
          "I separated claim submission, answer scoring, admin review, and released access into explicit states enforced across both the frontend and backend."
      },
      {
        challenge: "Keeping several user experiences coherent within one frontend.",
        solution:
          "I created distinct public, owner, successor, and admin layouts while maintaining shared interaction and visual patterns throughout the application."
      },
      {
        challenge: "Coordinating authentication, document storage, and workflow state across the stack.",
        solution:
          "I connected Firebase identity, protected API services, Cloudinary-backed files, and TanStack Query state through clear service and route boundaries."
      }
    ],
    learnings: [
      "LegacyVault strengthened my ability to design and implement a complete multi-step workflow across frontend and backend boundaries.",
      "Building the full frontend improved my understanding of organizing role-specific experiences without fragmenting the overall product.",
      "The project deepened my awareness of privacy, controlled access, and explicit state transitions when handling sensitive information."
    ]
  },
  {
    slug: "shei-it",
    type: "Full-stack Agency Platform / CMS",
    status: "Live",
    tagline:
      "A production agency platform that pairs a polished public website with secure, database-backed content management and operational workflows.",
    overview:
      "Shei IT—meaning Excellent IT in Bengali—is a production-ready full-stack platform for a digital services agency. It presents services, portfolio work, case studies, pricing, company information, and contact paths publicly while giving administrators secure control over the content and operational data behind the site.",
    purpose:
      "A growing agency needs more than a static landing page because its services, projects, SEO information, analytics configuration, and customer inquiries change continuously. Shei IT was built to make those areas maintainable through a protected content-management experience instead of requiring source-code changes for every update.",
    role: {
      summary:
        "This was a two-developer team project where I worked as a full-stack developer. I was responsible for the entire product outside the blog section, covering the public frontend, administration experience, backend modules, data flows, integrations, and deployment-facing behavior for those areas.",
      contributions: [
        "Built the public-facing pages, responsive layouts, theme behavior, dynamic service and portfolio experiences, and reusable frontend system outside the blog section.",
        "Implemented the protected admin interfaces and workflows for services, projects, contacts, SEO, analytics, and dashboard operations.",
        "Developed the corresponding Express and TypeScript backend modules, validation, Prisma data access, and protected CRUD APIs outside the blog module.",
        "Connected Firebase-authenticated administration, PostgreSQL content, dynamic metadata, sitemap behavior, and inquiry-management flows.",
        "Worked across production integration and deployment concerns for the separated frontend and backend applications."
      ]
    },
    keyFeatures: [
      {
        title: "Public Agency Experience",
        items: [
          "Responsive service, portfolio, case-study, pricing, about, contact, careers, FAQ, and policy pages.",
          "Dynamic service details and portfolio case studies loaded from published database content.",
          "Light and dark themes, smooth scrolling, structured loading states, and reusable visual components."
        ]
      },
      {
        title: "Content Management",
        items: [
          "Admin-managed services with detailed offerings, process steps, technologies, pricing, FAQs, and publication state.",
          "Database-backed projects with outcomes, feature groups, roles, architecture, integrations, repositories, and stack data.",
          "Draft, published, featured, sorting, and structured-content controls across managed content."
        ]
      },
      {
        title: "Administration and Leads",
        items: [
          "Firebase-protected dashboard guarded by verified tokens and an administrator email allowlist.",
          "Contact inquiry capture with service, budget, company, phone, message, and lifecycle status data.",
          "Dashboard controls for projects, services, contacts, SEO information, and analytics settings."
        ]
      },
      {
        title: "SEO and Platform Operations",
        items: [
          "Editable metadata, canonical URLs, Open Graph fields, focus keywords, and robots controls.",
          "Dynamic sitemap generation for service, portfolio, and other public routes.",
          "Configurable analytics scripts and SMTP-supported contact email delivery."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Next Themes", "Framer Motion", "Lenis"] },
      { category: "Backend", items: ["Node.js", "Express.js", "TypeScript", "Zod"] },
      { category: "Database / ORM", items: ["PostgreSQL", "Prisma"] },
      { category: "Authentication / Security", items: ["Firebase Auth", "Firebase Admin SDK", "Helmet"] },
      { category: "Services", items: ["Nodemailer", "SMTP"] },
      { category: "Deployment", items: ["Custom Domain", "Render", "Hostinger"] }
    ],
    architecture: {
      intro:
        "Shei IT separates a Next.js public and admin application from a modular Express API. Prisma and PostgreSQL own structured content, while Firebase secures administrative operations and public APIs expose only published data.",
      steps: [
        {
          title: "Public Content Delivery",
          description:
            "Dynamic public routes request published services, portfolio projects, case studies, SEO data, and configuration from the Express API."
        },
        {
          title: "Secure Administration",
          description:
            "An administrator signs in with Firebase, and protected requests carry an ID token that Firebase Admin verifies against the authorized email policy."
        },
        {
          title: "Modular Content Operations",
          description:
            "Feature-specific controllers, services, validation, and Prisma queries handle projects, services, contacts, SEO, analytics, and dashboard data."
        },
        {
          title: "Publication and Discovery",
          description:
            "Approved content becomes available through public APIs while metadata, robots rules, and sitemap entries keep dynamic routes discoverable."
        }
      ]
    },
    visuals: [
      {
        title: "Agency Home and Services",
        description:
          "The public experience presents the agency brand, service offering, proof of work, pricing paths, and conversion-focused calls to action."
      },
      {
        title: "Dynamic Portfolio",
        description:
          "Portfolio screens turn database-backed project records into browsable work cards and detailed case studies."
      },
      {
        title: "Admin Dashboard",
        description:
          "Protected administration surfaces organize content, inquiries, SEO, analytics, and platform overview workflows."
      },
      {
        title: "Inquiry Management",
        description:
          "Contact workflows capture qualified project details and let administrators track each inquiry as new, replied, or archived."
      }
    ],
    challenges: [
      {
        challenge: "Turning a conventional agency site into a maintainable content-driven platform.",
        solution:
          "We separated the public experience from a modular CMS-style API so services, projects, contacts, SEO, and configuration could evolve without hardcoded frontend edits."
      },
      {
        challenge: "Protecting broad administrative capabilities without weakening public content access.",
        solution:
          "Firebase token verification, an administrator allowlist, Zod validation, and protected mutation routes keep administrative actions separate from public read-only endpoints."
      },
      {
        challenge: "Keeping structured content flexible across service and project detail pages.",
        solution:
          "Reusable data models and section-oriented frontend components support complex records while preserving consistent responsive presentation."
      }
    ],
    learnings: [
      "Shei IT strengthened my ability to own a broad production surface across frontend, backend, database, security, and deployment concerns within a team project.",
      "It improved my understanding of content-management architecture and the difference between hardcoded marketing pages and maintainable operational platforms.",
      "Building nearly every product area reinforced the importance of modular boundaries, reusable UI systems, validation, and explicit publication workflows."
    ]
  },
  {
    slug: "pawcare",
    type: "Frontend Pet Care Services SPA",
    status: "Completed",
    tagline:
      "A responsive pet-care experience for discovering services, meeting expert veterinarians, authenticating securely, and managing service requests.",
    overview:
      "PawCare is a single-page pet-care services platform built for owners who want a clear place to explore professional care options. The application combines service discovery, detailed service information, veterinarian profiles, Firebase authentication, protected pages, profile management, and booking-form interactions in a responsive interface.",
    purpose:
      "Pet owners often need to compare care options and understand available expertise before deciding on a service. PawCare was built to organize those discovery and account workflows into a friendly web experience that works consistently across mobile, tablet, and desktop devices.",
    keyFeatures: [
      {
        title: "Authentication Features",
        items: [
          "Email and password registration and login through Firebase Authentication.",
          "Google sign-in integration and password-reset support.",
          "Protected routes that require an authenticated user session."
        ]
      },
      {
        title: "Pet Care Discovery",
        items: [
          "Browsable pet-care services with dedicated detail information.",
          "Expert veterinarian profiles that introduce available professionals.",
          "Service booking forms that capture user requests and provide submission feedback."
        ]
      },
      {
        title: "User Experience",
        items: [
          "Profile view and update flows for authenticated users.",
          "Smooth client-side navigation through React Router.",
          "Toast feedback, carousels, marquees, and animations for responsive interaction."
        ]
      },
      {
        title: "Responsive Interface",
        items: [
          "Layouts optimized for mobile, tablet, and desktop breakpoints.",
          "Reusable components organized across page, layout, and authentication boundaries.",
          "Tailwind CSS and DaisyUI styling with consistent interactive states."
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React 19", "React Router", "Tailwind CSS", "DaisyUI"] },
      { category: "Authentication", items: ["Firebase Auth"] },
      { category: "UI / Interaction", items: ["Swiper", "Lucide React", "React Fast Marquee", "Animate.css"] },
      { category: "Notifications", items: ["React Hot Toast"] },
      { category: "Build Tool", items: ["Vite"] },
      { category: "Deployment", items: ["Firebase"] }
    ],
    architecture: {
      intro:
        "PawCare uses a React SPA architecture with React Router for client-side navigation and an authentication provider that shares Firebase session state with protected routes and profile features.",
      steps: [
        {
          title: "Service Discovery",
          description:
            "Visitors browse pet-care offerings and veterinarian information through responsive public pages and reusable content components."
        },
        {
          title: "Authentication",
          description:
            "Users register or sign in through Firebase using email credentials or Google, while password recovery supports account access."
        },
        {
          title: "Protected Experience",
          description:
            "Authentication state controls access to private routes, profile information, profile updates, and authenticated service interactions."
        },
        {
          title: "Booking Interaction",
          description:
            "Users open a service detail, complete its booking form, and receive immediate interface feedback on submission."
        }
      ]
    },
    visuals: [
      {
        title: "Pet Care Landing",
        description:
          "The landing experience introduces available care services, expertise, and key calls to action."
      },
      {
        title: "Service Details",
        description:
          "Individual service views provide focused information and a clear path toward the booking form."
      },
      {
        title: "Veterinarian Showcase",
        description:
          "Professional profiles help users understand the expertise available through the platform."
      },
      {
        title: "Profile Experience",
        description:
          "Authenticated users can review and update their account information through protected screens."
      }
    ],
    challenges: [
      {
        challenge: "Keeping authentication state reliable across public and protected SPA routes.",
        solution:
          "I centralized Firebase session handling in an authentication provider and used route guards to delay or deny protected content appropriately."
      },
      {
        challenge: "Presenting several service and veterinarian sections clearly across device sizes.",
        solution:
          "I used responsive layout patterns, reusable content components, and breakpoint-aware styling to preserve hierarchy on mobile, tablet, and desktop."
      },
      {
        challenge: "Providing clear feedback during account and form interactions.",
        solution:
          "Toast notifications and explicit interface states communicate authentication, profile, and form outcomes without disrupting navigation."
      }
    ],
    learnings: [
      "PawCare strengthened my understanding of Firebase authentication, protected routes, and profile workflows inside a React SPA.",
      "It improved my ability to build responsive service-oriented interfaces with reusable sections and interactive libraries.",
      "The project also reinforced the importance of immediate user feedback during authentication and form-based actions."
    ]
  }
] satisfies ProjectDetail[];

export const projectDetails = projectDetailSchema.array().parse(rawProjectDetails);
