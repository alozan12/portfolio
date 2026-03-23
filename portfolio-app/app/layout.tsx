import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Abraham Lozano - Software Developer & AI Engineer",
  description: "Portfolio showcasing Abraham's projects in software development and AI engineering",
  keywords: ["software developer", "AI engineer", "portfolio", "Abraham Lozano"],
  authors: [{ name: "Abraham Lozano" }],
  openGraph: {
    title: "Abraham Lozano - Software Developer & AI Engineer",
    description: "Portfolio showcasing Abraham's projects in software development and AI engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
