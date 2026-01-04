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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.',
    image: '/oils-and-fats.png',
  },
  'Proteins': {
    title: 'Proteins',
    description: 'High-quality protein ingredients for various food and feed applications. Our protein sources are carefully selected to meet the highest standards of quality and nutritional value.',
    image: '/oils-and-fats.png',
  },
  'Fibers': {
    title: 'Fibers',
    description: 'Natural fiber ingredients that enhance nutritional value and improve product texture in food and feed formulations.',
    image: '/oils-and-fats.png',
  },
  'Sweeteners': {
    title: 'Sweeteners',
    description: 'A comprehensive range of sweetening solutions for diverse food and beverage applications.',
    image: '/oils-and-fats.png',
  },
  'Additives': {
    title: 'Additives',
    description: 'Functional additives that improve product quality, shelf life, and performance across various applications.',
    image: '/oils-and-fats.png',
  },
  'Organic': {
    title: 'Organic',
    description: 'Certified organic ingredients meeting the highest standards of sustainable and environmentally friendly production.',
    image: '/oils-and-fats.png',
  },
  'Others': {
    title: 'Others',
    description: 'Additional specialty ingredients and commodities to meet specific customer requirements and applications.',
    image: '/oils-and-fats.png',
  },
};

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState('Oils&Fats');

  const content = tabContent[activeTab];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
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
    </section>
  );
}
