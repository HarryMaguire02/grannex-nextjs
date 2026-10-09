import type { Metadata } from 'next';
import Link from 'next/link';
import WarehouseHero from '../components/warehouse/WarehouseHero';
import WarehouseAbout from '../components/warehouse/WarehouseAbout';
import WarehouseFeatures from '../components/warehouse/WarehouseFeatures';

export const metadata: Metadata = {
  title: 'Warehouse - Grannex LTD',
  description: 'Grannex LTD operates its own warehouse in Thessaloniki, providing direct control over inventory, handling and dispatch for a faster, more reliable service.',
  openGraph: {
    title: 'Warehouse - Grannex LTD',
    description: 'Grannex LTD operates its own warehouse in Thessaloniki, providing direct control over inventory, handling and dispatch.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'Grannex LTD Warehouse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse - Grannex LTD',
    description: 'Grannex LTD operates its own warehouse in Thessaloniki, providing direct control over inventory, handling and dispatch.',
    images: ['/logo-sharing.png'],
  },
};

export default function WarehousePage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Warehouse</span>
        </nav>
      </div>

      {/* Hero Section */}
      <WarehouseHero />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* About Section */}
      <WarehouseAbout />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* Features Section */}
      <WarehouseFeatures />
    </div>
  );
}
