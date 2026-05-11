import type { Metadata } from "next";

import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hugo Sánchez Nieto | Junior Business & Marketing Data Analyst",
  description:
    "Portfolio de Hugo Sánchez Nieto, perfil junior en business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing y estrategia digital.",
  openGraph: {
    title: "Hugo Sánchez Nieto | Junior Business & Marketing Data Analyst",
    description:
      "Portfolio de Hugo Sánchez Nieto, perfil junior en business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing y estrategia digital.",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
