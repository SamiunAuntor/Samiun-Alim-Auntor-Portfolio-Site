# Vercel Deployment Guide

Deploy this repository as two separate Vercel projects connected to the same GitHub repo.

## Backend API

Create the backend project first.

- Root directory: `backend`
- Framework preset: `Other`
- Build command: `npm run build`
- Output directory: leave empty

Required environment variables:

```txt
NODE_ENV=production
FRONTEND_ORIGIN=https://your-frontend-domain.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
MAIL_FROM_NAME=Samiun Alim Auntor Portfolio
MAIL_FROM_EMAIL=your-email@gmail.com
CONTACT_TO_EMAIL=auntorsamiun@gmail.com
```

After deployment, test:

```txt
https://your-backend-domain.vercel.app/health
```

Expected response:

```json
{
  "success": true,
  "message": "Portfolio backend is healthy."
}
```

## Frontend App

Create the frontend project second.

- Root directory: `frontend`
- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: Vercel default

Required environment variable:

```txt
NEXT_PUBLIC_CONTACT_API_URL=https://your-backend-domain.vercel.app/api/contact
```

After the frontend deployment URL is final, update the backend environment variable:

```txt
FRONTEND_ORIGIN=https://your-frontend-domain.vercel.app
```

Then redeploy the backend once so CORS accepts the production frontend.

## Final Checks

- Visit the frontend production URL.
- Open `https://your-backend-domain.vercel.app/health`.
- Submit the contact form with a real test message.
- Confirm the email arrives at `auntorsamiun@gmail.com`.
- Confirm resume download works on desktop and mobile.
- Confirm project live links open correctly.
