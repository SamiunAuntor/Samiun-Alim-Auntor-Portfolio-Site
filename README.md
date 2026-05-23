# Samiun Alim Auntor Portfolio

**Live Site:** [https://samiun-alim-auntor-portfolio-site-f.vercel.app/](https://samiun-alim-auntor-portfolio-site-f.vercel.app/)

A production-focused personal portfolio built as a full-stack monorepo. The frontend presents projects, services, skills, education, certifications, and contact information with a custom dark visual system. The backend powers the contact form with SMTP email delivery.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Express.js, TypeScript, Nodemailer
- **Validation:** Zod, React Hook Form
- **UI/UX:** Framer Motion, Lenis, SweetAlert2, Lucide React, React Icons
- **Deployment:** Vercel

## Project Structure

```txt
.
├── frontend   # Next.js portfolio application
├── backend    # Express contact API and mail service
└── package.json
```

## Local Setup

Install dependencies from the root:

```bash
npm install
```

Run the frontend:

```bash
npm run dev:frontend
```

Run the backend:

```bash
npm run dev:backend
```

## Environment Variables

Frontend:

```env
NEXT_PUBLIC_CONTACT_API_URL=http://localhost:5000/api/contact
```

Backend:

```env
NODE_ENV=development
PORT=5000
FRONTEND_ORIGIN=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM_NAME=Samiun Alim Auntor
MAIL_FROM_EMAIL=your-email@gmail.com
CONTACT_TO_EMAIL=your-receiving-email@gmail.com
```

## Build

```bash
npm run build:frontend
npm run build:backend
```

## Deployment Notes

The frontend and backend are deployed separately on Vercel. The frontend uses `NEXT_PUBLIC_CONTACT_API_URL` to send contact form requests to the deployed backend API.
