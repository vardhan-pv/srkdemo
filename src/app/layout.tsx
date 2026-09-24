import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import Header from "@/components/Header";
import StickyActionBar from "@/components/StickyActionBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: BUSINESS.seo.title,
    template: "%s | SRK Interiors",
  },
  description: BUSINESS.seo.description,
  keywords: [...BUSINESS.seo.keywords],
  authors: [{ name: "SRK Interiors" }],
  creator: "SRK Interiors",
  publisher: "SRK Interiors",
  metadataBase: new URL(BUSINESS.seo.canonical),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.seo.canonical,
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    siteName: BUSINESS.name,
    images: [
      {
        url: BUSINESS.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "SRK Interiors — Interior Designers in Chintamani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: [BUSINESS.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add Google Search Console verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white selection:bg-[#c99a3d] selection:text-black">
        <Header />
        <main>{children}</main>
        <StickyActionBar />
        <Footer />
      </body>
    </html>
  );
}
