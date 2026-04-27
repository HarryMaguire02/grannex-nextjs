import type { Metadata } from 'next';
import Link from 'next/link';
import RetailHero from '../components/retail/RetailHero';
import RetailServices from '../components/retail/RetailServices';
import RetailProductRange from '../components/retail/RetailProductRange';

export const metadata: Metadata = {
  title: 'Retail & Private Label Solutions - Grannex LTD',
  description: 'Grannex LTD offers end-to-end private label solutions — flexible packaging, compliant labeling, and a full product range of oils, condiments, and more.',
  openGraph: {
    title: 'Retail & Private Label Solutions - Grannex LTD',
    description: 'End-to-end private label solutions with flexible packaging and a full product range.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'Grannex LTD Retail' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail & Private Label Solutions - Grannex LTD',
    description: 'End-to-end private label solutions with flexible packaging and a full product range.',
    images: ['/logo-sharing.png'],
  },
};

export default function RetailPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Retail</span>
        </nav>
      </div>

      {/* Hero */}
      <RetailHero />

      {/* Core Services + Flexible Packaging */}
      <RetailServices />

      {/* Product Range */}
      <RetailProductRange />
    </div>
  );
}
