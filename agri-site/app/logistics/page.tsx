import Link from 'next/link';
import LogisticsHero from '../components/logistics/LogisticsHero';
import WorldMapSection from '../components/logistics/WorldMapSection';
import SupplyChainSection from '../components/home/SupplyChainSection';

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
