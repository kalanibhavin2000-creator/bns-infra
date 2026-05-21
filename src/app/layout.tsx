import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import CursorFollower from "@/components/ui/CursorFollower";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bns-infra.vercel.app'),
  title: {
    default: 'BNS Constructions | Tile Pasting Specialist — Surat, Gujarat',
    template: '%s | BNS Constructions'
  },
  description: "BNS Constructions is Gujarat's most trusted tile application contractor for high-rise residential and commercial construction. 500+ projects completed across Surat, Ahmedabad, Vadodara.",
  keywords: [
    'tile pasting contractor Surat',
    'tile application Gujarat',
    'high-rise tiling contractor India',
    'tile contractor Ahmedabad',
    'commercial tile flooring Gujarat',
    'construction tiling contractor',
    'floor tile pasting Surat',
    'wall cladding contractor Gujarat',
    'BNS Constructions',
    'tile contractor Vadodara'
  ],
  authors: [{ name: 'BNS Constructions' }],
  creator: 'BNS Constructions',
  publisher: 'BNS Constructions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bns-infra.vercel.app',
    siteName: 'BNS Constructions',
    title: 'BNS Constructions | Tile Pasting Specialist — Gujarat, India',
    description: "Gujarat's most trusted tile application contractor. 500+ projects. High-rise, residential and commercial construction.",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'BNS Constructions — Tile Pasting Specialist'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BNS Constructions | Tile Pasting Specialist',
    description: "Gujarat's most trusted tile application contractor for high-rise and commercial construction.",
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
  alternates: {
    canonical: 'https://bns-infra.vercel.app',
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bns-infra.vercel.app",
  "name": "BNS Constructions",
  "description": "Gujarat's most trusted tile application contractor for high-rise residential and commercial construction.",
  "url": "https://bns-infra.vercel.app",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@bnsconstructions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.1702",
    "longitude": "72.8311"
  },
  "areaServed": [
    { "@type": "City", "name": "Surat" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Vadodara" },
    { "@type": "State", "name": "Gujarat" }
  ],
  "serviceType": [
    "Tile Pasting",
    "Tile Application",
    "High-Rise Tiling",
    "Floor Tiling",
    "Wall Cladding",
    "Commercial Tile Work"
  ],
  "foundingDate": "2004",
  "numberOfEmployees": "50-200",
  "priceRange": "₹₹₹",
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": []
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <CursorFollower />
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
