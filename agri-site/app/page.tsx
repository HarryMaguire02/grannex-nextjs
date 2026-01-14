import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import SupplyChainSection from './components/home/SupplyChainSection';
import IngredientsSection from './components/home/IngredientsSection';
import ProductsSection from './components/home/ProductsSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Ingredients Section */}
      <IngredientsSection />

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* Products Section */}
      <ProductsSection />

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
