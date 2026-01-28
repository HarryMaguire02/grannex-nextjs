import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import SupplyChainSection from './components/home/SupplyChainSection';
import IngredientsAndProductsSection from './components/home/IngredientsAndProductsSection';

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
