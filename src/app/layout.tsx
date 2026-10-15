import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import NeuralCanvas from "@/components/NeuralCanvas";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.links.linkedin }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "profile",
    firstName: "Muhammad",
    lastName: "Zain-Ul-Abideen",
    username: "Zain",
    gender: "male",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer & Devsinc Campus Ambassador`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Zain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": siteConfig.name,
        "alternateName": ["Zain", "Muhammad Zain Ul Abideen", "Zyn__"],
        "jobTitle": "Software Engineer & Campus Ambassador",
        "headline": siteConfig.author.headline,
        "worksFor": {
          "@type": "Organization",
          "name": "Devsinc",
          "url": "https://www.devsinc.com",
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": siteConfig.author.university,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Islamabad",
            "addressCountry": "Pakistan",
          },
        },
        "email": siteConfig.author.email,
        "telephone": siteConfig.author.phone,
        "url": siteConfig.url,
        "image": `${siteConfig.url}/images/zain.jpg`,
        "sameAs": [
          siteConfig.links.linkedin,
          siteConfig.links.github,
          siteConfig.links.leetcode,
        ],
        "knowsAbout": [
          "C++",
          "Python",
          "Algorithms & Data Structures",
          "Dynamic Programming",
          "React 18",
          "Next.js App Router",
          "TypeScript",
          "Redis In-Memory Caching",
          "PostgreSQL & Supabase RLS",
          "Machine Learning",
          "OpenAI API & PHI Redaction",
          "HIPAA Security Compliance",
          "Stripe Connect Fintech",
          "Postman API Testing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${mono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface-void text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
        <SmoothScrollProvider>
          {/* Interactive Neural Canvas Background (Particle & Synapse Network) */}
          <NeuralCanvas />

          {/* Calm Ambient Multi-Layer Radial Lights */}
          <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-40 right-[-10%] w-[850px] h-[600px] bg-gradient-to-bl from-cyan-500/10 via-indigo-500/08 to-transparent blur-[160px] rounded-full" />
            <div className="absolute top-[40%] -left-32 w-[600px] h-[600px] bg-violet-600/08 blur-[180px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[550px] bg-cyan-600/08 blur-[170px] rounded-full" />
          </div>

          <CustomCursor />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-12 pb-16">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
