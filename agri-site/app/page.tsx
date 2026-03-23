import type { Metadata } from 'next';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import SupplyChainSection from './components/home/SupplyChainSection';
import IngredientsAndProductsSection from './components/home/IngredientsAndProductsSection';

export const metadata: Metadata = {
  title: 'Grannex LTD - Global Agriculture Commodities Trading & Brokerage',
  description: 'Grannex LTD is a leading global agriculture commodities trading firm. We supply proteins, starches, sweeteners, vegetable oils, animal feed and aqua feed ingredients worldwide.',
  openGraph: {
    title: 'Grannex LTD - Global Agriculture Commodities Trading & Brokerage',
    description: 'Leading supplier of agricultural ingredients with secure global delivery.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'Grannex LTD' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grannex LTD - Global Agriculture Commodities Trading & Brokerage',
    description: 'Leading supplier of agricultural ingredients with secure global delivery.',
    images: ['/logo-sharing.png'],
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Ingredients and Products Section */}
      <IngredientsAndProductsSection />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>
      
      {/* About Section */}
      <AboutSection />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* Supply Chain Management Section */}
      <SupplyChainSection />

    </div>
  );
}
