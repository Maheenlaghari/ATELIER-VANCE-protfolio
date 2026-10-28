import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Atelier Vance | Architectural and Spatial Practice",
  description: "Brutalist architectural spatial practice, monogrammed monographs and luxury visual identity laboratory.",
  keywords: ["Architecture", "Brutalism", "Spatial Design", "Atelier Vance", "Loewe Paris", "Elena Vance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0e0e0e] text-[#f3f3f0]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
