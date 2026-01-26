import Link from 'next/link';
import type { Metadata } from 'next';
import AboutSection from '../components/home/AboutSection';

export const metadata: Metadata = {
  title: "About Us - Grannex LTD",
  description: "Grannex LTD is a leading global agriculture commodities trading and brokerage firm. Learn about our global supply chain management and agricultural expertise.",
};

export default function AboutPage() {
  return (
    <div className="pb-6 md:pb-8 lg:pb-12 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">About us</span>
        </nav>
      </div>

      {/* Reuse existing About Section */}
      <AboutSection showSubtitle={false} showPadding={false} />
    </div>
  );
}
