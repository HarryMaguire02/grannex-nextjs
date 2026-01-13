'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  'Oils&Fats',
  'Proteins',
  'Fibers',
  'Sweeteners',
  'Additives',
  'Organic',
  'Others',
];

const tabContent: Record<string, { title: string; description: string; image: string }> = {
  'Oils&Fats': {
    title: 'Oils&Fats',
    description: 'Our range of premium Oils & Fats provides essential, high-density energy sources for a variety of industrial and nutritional applications. From refined vegetable oils like Soybean and Sunflower to specialized rendered fats like Poultry Fat, our products are selected for their purity, stable fatty acid profiles, and high metabolizable energy. Whether used as a palatability enhancer in pet food, a dust suppressant in feed mills, or a key ingredient in technical manufacturing, our fats ensure optimal performance and quality consistency.',
    image: '/oils.png',
  },
  'Proteins': {
    title: 'Proteins',
    description: 'In high-performance Proteins portfolio our offer is premium plant and animal-based solutions designed for maximum nutritional efficiency. We provide a diverse range of protein sources including Vital Wheat Gluten, Soy Protein Concentrate, and specialized Poultry and Fish Meals characterized by high biological value and excellent digestibility. These ingredients serve as essential building blocks for muscle development, immune support, and growth across the Pet Food, Aquaculture, and Animal Feed industries.',
    image: '/proteins.png',
  },
  'Fibers': {
    title: 'Fibers',
    description: 'Our Fibers category offers essential functional solutions designed to support digestive health and metabolic efficiency across both human and animal nutrition. We provide a variety of specialized dietary fibers, including our high-performance FiberZ and nutrient-dense Sugar Beet Pulp, which are engineered to improve intestinal motility and promote a healthy gut microbiome. These products serve as critical ingredients for clean-label formulations, providing the necessary structural and nutritional benefits required for modern wellness products.',
    image: '/fibers.png',
  },
  'Sweeteners': {
    title: 'Sweeteners',
    description: 'Our Sweeteners category offers a comprehensive range of caloric and non-nutritive solutions designed for superior taste, functional performance, and immediate energy delivery. From high-purity Glucose Syrups and Dextrose to natural Sucrose, we provide versatile sweetening agents that serve critical roles in the Food & Beverage, Pharmaceutical, and Animal Feed industries. These products are essential for enhancing flavor profiles, improving moisture retention, and acting as powerful attractants to increase feed intake in livestock.',
    image: '/sweeteners.png',
  },
  'Additives': {
    title: 'Additives',
    description: 'Our Additives category provides essential micro-nutrients and mineral supplements designed to ensure peak physiological performance and nutritional balance. We offer high-purity, bioavailable solutions like Monocalcium Phosphate, which serve as the foundation for skeletal development and metabolic health in the Animal Feed and Agriculture industries. These additives are critical for preventing nutritional deficiencies, improving feed efficiency, and supporting high-productivity livestock environments.',
    image: '/additives.png',
  },
  'Organic': {
    title: 'Organic',
    description: 'Our Organic category represents our commitment to sustainability and natural nutritional integrity. These products are sourced from certified organic agriculture, ensuring they are produced without the use of synthetic fertilizers, pesticides, or genetically modified organisms (GMOs). By focusing on minimally processed ingredients, we provide the Food & Beverage, Pet Food, and Agriculture sectors with high-purity solutions that meet the growing global demand for transparent and ecologically responsible supply chains.',
    image: '/organic.png',
  },
  'Others': {
    title: 'Others',
    description: 'This Category encompasses a diverse range of foundational agricultural commodities and specialized biological ingredients that serve as the backbone for various global industries.',
    image: '/others.png',
  },
};

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState('Oils&Fats');

  const content = tabContent[activeTab];

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Ingredients
        </h2>

        {/* Tabs */}
        <div className="border-2 border-primary rounded-xl p-1 mb-8 flex flex-wrap gap-2 justify-center lg:justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium transition-all rounded-lg ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-primary hover:bg-primary/10'
              }`}
            >
              {tab}
            </button>
          ))}
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
