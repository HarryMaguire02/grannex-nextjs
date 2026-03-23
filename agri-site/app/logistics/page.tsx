import type { Metadata } from 'next';
import Link from 'next/link';
import LogisticsHero from '../components/logistics/LogisticsHero';
import WorldMapSection from '../components/logistics/WorldMapSection';
import SupplyChainSection from '../components/home/SupplyChainSection';

export const metadata: Metadata = {
  title: 'Global Logistics & Supply Chain - Grannex LTD',
  description: 'Grannex LTD provides end-to-end logistics and supply chain management for agricultural commodities. Secure, reliable delivery worldwide.',
  openGraph: {
    title: 'Global Logistics & Supply Chain - Grannex LTD',
    description: 'End-to-end logistics and supply chain management for agricultural commodities.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'Grannex LTD Logistics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Logistics & Supply Chain - Grannex LTD',
    description: 'End-to-end logistics and supply chain management for agricultural commodities.',
    images: ['/logo-sharing.png'],
  },
};

export default function LogisticsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Logistics</span>
        </nav>
      </div>

      {/* Hero Section */}
      <LogisticsHero />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* World Map Section */}
      <WorldMapSection />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* Supply Chain Management Section */}
      <SupplyChainSection />
    </div>
  );
}
