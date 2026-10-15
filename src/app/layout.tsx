import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCurtain from "@/components/PageCurtain";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://zain-portfolio.dev"),
  title: "Muhammad Zain-Ul-Abideen | Software Engineer & Devsinc Campus Ambassador",
  description:
    "Official engineering platform for Muhammad Zain-Ul-Abideen showcasing distributed systems architectures, 200+ LeetCode algorithmic solutions, and technical leadership.",
  keywords: [
    "Muhammad Zain-Ul-Abideen",
    "Software Engineer",
    "Devsinc Campus Ambassador",
    "Distributed Systems",
    "React",
    "Next.js",
    "Supabase",
    "Redis",
    "Algorithms",
    "LeetCode",
  ],
  authors: [{ name: "Muhammad Zain-Ul-Abideen" }],
  openGraph: {
    title: "Muhammad Zain-Ul-Abideen | Software Engineer",
    description: "Distributed Systems, Algorithmic Engineering & Technical Leadership.",
    url: "https://zain-portfolio.dev",
    siteName: "Muhammad Zain-Ul-Abideen Engineering Platform",
    images: [
      {
        url: "/images/zain.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Zain-Ul-Abideen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07080B] text-foreground min-h-screen flex flex-col antialiased selection:bg-amber-400 selection:text-black">
        <SmoothScrollProvider>
          <PageCurtain />
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
