'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const tabs = [
  'Oils&Fats',
  'Nutritional Additives',
  'Sweeteners',
  'Starches',
  'Milling/Crushing',
  'Aquaculture',
  'Concentrates',
  'Animal Protein',
  'Vitamin',
  'Fiber',
];

const tabContent: Record<string, { title: string; description: string; image: string }> = {
  'Oils&Fats': {
    title: 'Oils&Fats',
    description: 'Our range of premium Oils & Fats provides essential, high-density energy sources for a variety of industrial and nutritional applications. From refined vegetable oils like Soybean and Sunflower to specialized rendered fats like Poultry Fat, our products are selected for their purity, stable fatty acid profiles, and high metabolizable energy. Whether used as a palatability enhancer in pet food, a dust suppressant in feed mills, or a key ingredient in technical manufacturing, our fats ensure optimal performance and quality consistency.',
    image: '/oils.png',
  },
  'Starches': {
    title: 'Starches',
    description: 'Our Starches category provides versatile, high-quality carbohydrate solutions that serve as fundamental building blocks across the food processing and industrial sectors. We supply native and modified starches derived from corn, wheat, tapioca, and potato, each selected for specific functional properties including binding, thickening, gelling, and texturizing. These ingredients are indispensable for manufacturers in the Food & Beverage, Paper, Textile, and Animal Feed industries seeking consistent viscosity, stability, and process reliability.',
    image: '/fibers.png',
  },
  'Sweeteners': {
    title: 'Sweeteners',
    description: 'Our Sweeteners category offers a comprehensive range of caloric and non-nutritive solutions designed for superior taste, functional performance, and immediate energy delivery. From high-purity Glucose Syrups and Dextrose to natural Sucrose, we provide versatile sweetening agents that serve critical roles in the Food & Beverage, Pharmaceutical, and Animal Feed industries. These products are essential for enhancing flavor profiles, improving moisture retention, and acting as powerful attractants to increase feed intake in livestock.',
    image: '/sweeteners.png',
  },
  'Fiber': {
    title: 'Fiber',
    description: 'Our Fiber category offers essential functional solutions designed to support digestive health and metabolic efficiency across both human and animal nutrition. We provide a variety of specialized dietary fibers, including high-performance cellulose-based products and nutrient-dense Sugar Beet Pulp, which are engineered to improve intestinal motility and promote a healthy gut microbiome. These products serve as critical ingredients for clean-label formulations, providing the necessary structural and nutritional benefits required for modern feed and food applications.',
    image: '/fibers.png',
  },
  'Animal Protein': {
    title: 'Animal Protein',
    description: 'Our Animal Protein category offers premium rendered and processed protein sources designed for maximum nutritional efficiency. We provide a diverse range including Poultry Meal, Feather Meal, Meat and Bone Meal, and Blood Meal, each characterized by high biological value, excellent amino acid profiles, and superior digestibility. These ingredients serve as essential building blocks for muscle development, immune support, and growth across the Pet Food, Aquaculture, and Animal Feed industries.',
    image: '/proteins.png',
  },
  'Aquaculture': {
    title: 'Aquaculture',
    description: 'Our Aquaculture category is tailored to meet the rigorous nutritional demands of modern fish and shrimp farming. We supply specialized feed ingredients including high-digestibility fish meals, algae-based proteins, marine oils, and functional additives formulated to promote rapid growth, disease resistance, and optimal feed conversion in aquatic species. These products are sourced and processed to meet the strict quality and sustainability standards required by the global aquaculture industry.',
    image: '/additives.png',
  },
  'Milling/Crushing': {
    title: 'Milling/Crushing',
    description: 'Our Milling & Crushing category encompasses the essential by-products and co-products generated from grain and oilseed processing operations. We supply high-value ingredients such as wheat bran, wheat middlings, soybean hulls, and oilseed meals that deliver reliable nutritional profiles for compound feed manufacturers. These products provide cost-effective sources of energy, protein, and fiber, making them indispensable raw materials for the Animal Feed, Bakery, and Food Processing industries.',
    image: '/fibers.png',
  },
  'Concentrates': {
    title: 'Concentrates',
    description: 'Our Concentrates category offers nutrient-dense, pre-formulated blends designed to simplify and enhance compound feed production. We provide protein concentrates, mineral concentrates, and vitamin-mineral premixes that deliver targeted nutritional profiles in a highly concentrated form. These products enable feed manufacturers to achieve precise formulation targets efficiently, reducing complexity while ensuring consistent quality and performance across Poultry, Swine, Ruminant, and Aquaculture feed applications.',
    image: '/additives.png',
  },
  'Nutritional Additives': {
    title: 'Nutritional Additives',
    description: 'Our Nutritional Additives category delivers precision-formulated micro-ingredients essential for optimizing feed performance and animal health. We supply a targeted range of amino acids, enzymes, organic minerals, and specialty compounds designed to enhance nutrient absorption, strengthen immune response, and improve feed conversion ratios. These high-purity additives are critical for formulating balanced diets across the Animal Feed, Aquaculture, and Pet Food industries, enabling producers to achieve consistent growth outcomes while reducing overall feed costs.',
    image: '/proteins.png',
  },
  'Vitamin': {
    title: 'Vitamin',
    description: 'Our Vitamin category supplies essential micronutrient solutions critical for maintaining optimal health, productivity, and reproductive performance in livestock and aquaculture. We offer a comprehensive range of fat-soluble and water-soluble vitamins, including Vitamin A, D3, E, and B-complex variants, sourced from trusted manufacturers and delivered in stable, bioavailable forms. These products are fundamental components of any balanced feed program, supporting bone development, immune function, and metabolic efficiency.',
    image: '/fibers.png',
  },
};

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState('Oils&Fats');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    const container = tabsContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = tabsContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const content = tabContent[activeTab];

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Ingredients
        </h2>

        {/* Tabs - scrollable with arrows on mobile */}
        <div className="relative mb-8 sm:hidden">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full shadow-md"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full shadow-md"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="border-2 border-primary rounded-xl p-1">
            <div
              ref={tabsContainerRef}
              onScroll={checkScrollPosition}
              className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-6 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-primary hover:bg-primary/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs - 2 rows x 5 columns grid on sm and up */}
        <div className="hidden sm:block mb-8">
          <div className="border-2 border-primary rounded-xl p-1">
            <div className="grid grid-cols-5 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-2 text-sm font-medium transition-all rounded-lg text-center ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-primary hover:bg-primary/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">{content.title}</h3>
            <p className="text-primary font-normal text-sm leading-4 text-justify">{content.description}</p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src={content.image}
                alt={content.title}
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decoration SVG - Bottom Left */}
      <div className="hidden lg:block absolute top-1/2 lg:top-auto lg:bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none">
        <Image
          src="/decoration2.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
