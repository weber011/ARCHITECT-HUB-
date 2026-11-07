import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#15191D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Luxury Architectural Planning & Construction Company`,
  description: `${COMPANY_INFO.name} specializes in high-end residential construction, commercial developments, architectural planning, interior design, and turnkey project delivery in Kushinagar, Uttar Pradesh. Open 24 Hours.`,
  keywords: [
    "Architect Hub Constructions",
    "Architect Hub",
    "Construction Company Kushinagar",
    "Architectural Planning Tamkuhi",
    "Luxury Residential Construction",
    "Commercial Builder Uttar Pradesh",
    "Building Renovation Kushinagar",
    "Turnkey Construction India",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: `${COMPANY_INFO.name} – Building Dreams. Creating Landmarks.`,
    description:
      "From thoughtful architectural planning to exceptional construction, we turn your vision into spaces built to inspire. Tamkuhi, Kushinagar, UP.",
    url: "https://architecthubconstructions.com",
    siteName: COMPANY_INFO.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Architect Hub Constructions Luxury Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.subtitle,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-charcoal text-ivory antialiased selection:bg-gold selection:text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
