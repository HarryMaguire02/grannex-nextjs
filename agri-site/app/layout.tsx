import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ScrollHeader from "./components/header/ScrollHeader";
import Footer from "./components/footer/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://grannex.com'),
  title: "Grannex LTD - Leading Global Agriculture Commodities Trading",
  description: "Grannex LTD is a leading global agriculture commodities trading and brokerage firm. We supply quality agricultural ingredients including proteins, starches, sweeteners, oils, animal feed and aqua feed.",
  keywords: ["agriculture", "commodities trading", "animal feed", "aqua feed", "proteins", "starches", "vegetable oils", "food ingredients"],
  authors: [{ name: "Grannex LTD" }],
  openGraph: {
    title: "Grannex LTD - Leading Global Agriculture Commodities Trading",
    description: "Quality agricultural ingredients, secure global delivery. Leading supplier of proteins, starches, sweeteners, and oils.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/logo-sharing.png',
        alt: 'Grannex LTD',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Grannex LTD',
  description: 'Leading global agriculture commodities trading and brokerage firm.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://grannex.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://grannex.com'}/grannexLogo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${roboto.variable} antialiased flex flex-col min-h-full`}
      >
        <ScrollHeader />
        <main className="pt-16 md:pt-20 grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
