import {
  educationSchema,
  heroStatSchema,
  highlightSchema,
  type Education,
  type HeroStat,
  type Highlight
} from "./types";

export const profile = {
  name: "Samiun Alim Auntor",
  role: "Full Stack Developer | MERN Stack | Next.js | Backend Engineering | System Design",
  headline: "Building scalable full-stack platforms with clean architecture, real-world workflows, and production-ready engineering.",
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

const rawHighlights = [
  {
    title: "Authentication & RBAC",
    description:
      "Designing gated product flows with role-aware interfaces, protected routes, and backend permission checks.",
    outcome: "Built for admin, tutor, student, owner, and seeker workflows."
  },
  {
    title: "Booking & session lifecycle",
    description:
      "Thinking in end-to-end user journeys: discover, schedule, pay, confirm, and manage sessions cleanly.",
    outcome: "Strong fit for platforms like tutoring, rentals, and service marketplaces."
  },
  {
    title: "Payment and webhook flow",
    description:
      "Structuring payment intents, verification, and success state handling around reliable backend events.",
    outcome: "Important for SaaS products with subscriptions, bookings, or checkout flows."
  },
  {
    title: "Realtime systems",
    description:
      "Supporting live communication and state updates with Socket.io and event-driven thinking.",
    outcome: "Useful for negotiation, support, and collaborative product experiences."
  },
  {
    title: "Jobs, reminders, and notifications",
    description:
      "Using cron-based workflows, email reminders, and async operations to keep products useful beyond a single page load.",
    outcome: "Adds production behavior rather than static demo behavior."
  },
  {
    title: "Deployment problem solving",
    description:
      "Working through hosting setup, API connectivity, CORS, and environment configuration with a systems mindset.",
    outcome: "Closer to real engineering constraints than isolated local demos."
  }
] satisfies Highlight[];

const rawEducation = {
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

export const heroStats = heroStatSchema.array().parse(rawHeroStats);
export const engineeringHighlights = highlightSchema.array().parse(rawHighlights);
export const education = educationSchema.parse(rawEducation);
