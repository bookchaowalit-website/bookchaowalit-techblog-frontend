import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tech Blog | Modern Web Development & Programming Insights",
    template: "%s | Tech Blog"
  },
  description: "Expert insights on modern web development, React, Next.js, TypeScript, and programming best practices. Stay updated with the latest tech trends and tutorials.",
  keywords: ["web development", "programming", "React", "Next.js", "TypeScript", "JavaScript", "frontend", "backend", "tech tutorials", "best practices"],
  authors: [{ name: "Book Chaowalit", url: "https://tech.bookchaowalit.com" }],
  creator: "Book Chaowalit",
  publisher: "Book Chaowalit",
  metadataBase: new URL("https://tech.bookchaowalit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tech.bookchaowalit.com",
    siteName: "Tech Blog",
    title: "Tech Blog | Modern Web Development & Programming Insights",
    description: "Expert insights on modern web development, React, Next.js, TypeScript, and programming best practices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Blog - Modern Web Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog | Modern Web Development & Programming Insights",
    description: "Expert insights on modern web development, React, Next.js, TypeScript, and programming best practices.",
    images: ["/og-image.jpg"],
    creator: "@bookchaowalit",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tech Blog",
    "description": "Modern web development, programming tips, and tech insights",
    "url": "https://tech.bookchaowalit.com",
    "author": {
      "@type": "Person",
      "name": "Book Chaowalit",
      "url": "https://tech.bookchaowalit.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tech.bookchaowalit.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
