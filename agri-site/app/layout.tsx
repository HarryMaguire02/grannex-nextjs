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
  title: "Grannex International - Leading Global Agriculture Commodities Trading",
  description: "Grannex International is a leading global agriculture commodities trading and brokerage firm. We supply quality agricultural ingredients including proteins, starches, sweeteners, oils, animal feed and aqua feed.",
  keywords: ["agriculture", "commodities trading", "animal feed", "aqua feed", "proteins", "starches", "vegetable oils", "food ingredients"],
  authors: [{ name: "Grannex International" }],
  icons: {
    icon: [
      { url: '/grannexLogo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/grannexLogo.svg',
    apple: '/grannexLogo.svg',
  },
  openGraph: {
    title: "Grannex International - Leading Global Agriculture Commodities Trading",
    description: "Quality agricultural ingredients, secure global delivery. Leading supplier of proteins, starches, sweeteners, and oils.",
    type: "website",
    locale: "en_US",
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
    <html lang="en" className="h-full">
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
