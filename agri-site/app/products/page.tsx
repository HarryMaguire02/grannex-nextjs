'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  market: string;
  segment: string;
  type: string;
  image: string;
  shortDescription: string;
  description: string;
  application: string[];
  packingOption: string[];
  specifications: any[];
};

export default function ProductsPage() {
  const [selectedMarket, setSelectedMarket] = useState<string>('All');
  const [selectedSegment, setSelectedSegment] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const products = productsData as Product[];

  // Get unique values for filters
  const markets = ['All', ...Array.from(new Set(products.map(p => p.market)))];
  const segments = ['All', ...Array.from(new Set(products.map(p => p.segment)))];
  const types = ['All', ...Array.from(new Set(products.map(p => p.type)))];

  // Filter products
  const filteredProducts = products.filter(product => {
    return (
      (selectedMarket === 'All' || product.market === selectedMarket) &&
      (selectedSegment === 'All' || product.segment === selectedSegment) &&
      (selectedType === 'All' || product.type === selectedType)
    );
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Products</span>
        </nav>
      </div>

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          <span className="font-normal">Our</span> products
        </h1>

        {/* Description */}
        <p className="text-primary font-normal text-sm leading-4 text-justify mb-8 w-full lg:w-1/2">
          We offer a broad portfolio of products, commodities, and ingredients serving the human food,
          aquaculture, and animal feed industries. Our range includes oilseeds, vegetable oils, and related
          agricultural products sourced from multiple origins to meet diverse market and customer requirements.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="text-sm font-medium text-primary">Filter by:</div>

          <select
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5"
          >
            {markets.map(market => (
              <option key={market} value={market}>{market === 'All' ? 'Markets' : market}</option>
            ))}
          </select>

          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5"
          >
            {segments.map(segment => (
              <option key={segment} value={segment}>{segment === 'All' ? 'Segments' : segment}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5"
          >
            {types.map(type => (
              <option key={type} value={type}>{type === 'All' ? 'Type' : type}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group cursor-pointer max-w-xs mx-auto w-full"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Name */}
              <div className="bg-secondary rounded-b-lg py-3 px-4 text-center min-h-[64px] flex items-center justify-center">
                <h3 className="text-primary font-medium text-base line-clamp-2">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary text-lg">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </main>
  );
}
