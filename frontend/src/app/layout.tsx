import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samiun Alim Auntor",
  description: "Full-stack developer building scalable SaaS-style web platforms."
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
