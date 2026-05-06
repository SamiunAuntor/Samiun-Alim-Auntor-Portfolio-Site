import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samiun-alim-auntor.pages.dev"),
  title: {
    default: "Samiun Alim Auntor | Full Stack Developer",
    template: "%s | Samiun Alim Auntor"
  },
  description:
    "Portfolio of Samiun Alim Auntor, a Software Engineering student at IUT and full-stack developer focused on MERN, Next.js, backend engineering, SaaS platforms, and scalable web applications.",
  keywords: [
    "Samiun Alim Auntor",
    "Samiun Auntor",
    "Full Stack Developer Bangladesh",
    "MERN Stack Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Software Engineering Student IUT",
    "Junior Web Developer Bangladesh",
    "Backend Developer Intern Bangladesh",
    "React Developer Bangladesh"
  ],
  openGraph: {
    title: "Samiun Alim Auntor | Full Stack Developer",
    description:
      "Building scalable full-stack platforms with clean architecture, real-world workflows, and production-ready engineering.",
    url: "https://samiun-alim-auntor.pages.dev",
    siteName: "Samiun Alim Auntor Portfolio",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Samiun Alim Auntor portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Samiun Alim Auntor | Full Stack Developer",
    description:
      "Software Engineering student at IUT building SaaS-style full-stack products with strong backend architecture.",
    images: ["/og-card.svg"]
  },
  alternates: {
    canonical: "https://samiun-alim-auntor.pages.dev"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
