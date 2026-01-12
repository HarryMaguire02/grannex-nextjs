'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import productsData from '@/data/products.json';
import ProductCard from '@/app/components/ProductCard';

type Product = {
  slug: string;
  name: string;
  market: string;
  marketLabel: string;
  info: string;
  description: string;
  application: string;
  packing: string;
  specification: string[];
  industry: string[];
  isActive: boolean;
  image: string;
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const marketParam = searchParams.get('market');

  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  // Use URL parameter if available, otherwise use state
  const [selectedMarket, setSelectedMarket] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const PRODUCTS_PER_PAGE = 12;

  // Derive the actual selected market from URL param or state
  const activeMarket = marketParam || selectedMarket;

  const products = productsData as Product[];

  // Static industry options
  const industries = [
    'All',
    'Agriculture',
    'Animal feed',
    'Aquaculture',
    'Bakery',
    'Cosmetics',
    'Food & Beverage',
    'Milling',
    'Pasta',
    'Pet Food',
    'Technical & Industrial'
  ];

  // Static market options with value-label pairs
  const markets = [
    { value: 'All', label: 'Market' },
    { value: 'animal-feed-ingredients', label: 'Animal feed ingredients' },
    { value: 'aqua-feeds-ingredients', label: 'Aqua feeds ingredients' },
    { value: 'food-ingredients', label: 'Food ingredients' },
    { value: 'oils-and-fats', label: 'Oils and fats' },
    { value: 'sweetners', label: 'Sweeteners' },
    { value: 'other', label: 'Other' }
  ];

  // Filter products by industry, market, and search query
  const filteredProducts = products.filter(product => {
    if (!product.isActive) return false;

    // Filter by industry
    const matchesIndustry = selectedIndustry === 'All' || product.industry.includes(selectedIndustry);

    // Filter by market - use activeMarket which considers URL param
    const matchesMarket = activeMarket === 'All' || product.market === activeMarket;

    // Filter by search query (search in name)
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Product must match all filters
    return matchesIndustry && matchesMarket && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (setter: (value: string) => void, value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  // Reset filters only (search has its own clear button)
  const handleReset = () => {
    setSelectedIndustry('All');
    setSelectedMarket('All');
    setCurrentPage(1);
  };

  // Check if any filters are active (excluding search since it has its own clear button)
  const hasActiveFilters = selectedIndustry !== 'All' || selectedMarket !== 'All';

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          {marketParam ? (
            <>
              <Link href="/products" className="hover:text-green-medium transition-colors">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium">
                {markets.find(m => m.value === marketParam)?.label || marketParam}
              </span>
            </>
          ) : (
            <span className="font-medium">Products</span>
          )}
        </nav>
      </div>

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          <span className="font-normal">Our</span> products
        </h1>

        {/* Description */}
        <p className="text-primary font-normal text-sm leading-4 text-justify mb-8 w-full">
          We offer a broad portfolio of products, commodities, and ingredients serving the human food,
          aquaculture, and animal feed industries. Our range includes oilseeds, vegetable oils, and related
          agricultural products sourced from multiple origins to meet diverse market and customer requirements.
        </p>

        {/* Filters and Search Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Filters Container */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium text-primary">Filter by:</div>

            <select
              value={selectedIndustry}
              onChange={(e) => handleFilterChange(setSelectedIndustry, e.target.value)}
              className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'All' ? 'Industry' : industry}
                </option>
              ))}
            </select>

            <select
              value={activeMarket}
              onChange={(e) => handleFilterChange(setSelectedMarket, e.target.value)}
              disabled={!!marketParam}
              className={`pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary transition-colors ${
                marketParam
                  ? 'bg-green-light/30 ring-2 ring-green-medium cursor-not-allowed opacity-90'
                  : 'bg-white hover:bg-primary/5 cursor-pointer'
              }`}
            >
              {markets.map(market => (
                <option key={market.value} value={market.value}>
                  {market.label}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="p-2 text-primary/60 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Clear all filters"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Search Container */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-10 py-2 border border-primary/20 rounded-lg text-sm font-normal text-primary bg-white focus:outline-none focus:border-green-medium focus:ring-1 focus:ring-green-medium w-full md:w-64"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-primary/60 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              name={product.name}
              image={product.image}
              info={product.info}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary text-lg">No products found matching your filters.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-primary border border-primary/20 hover:bg-primary/5 disabled:hover:bg-white"
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-primary/20 hover:bg-primary/5'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-primary border border-primary/20 hover:bg-primary/5 disabled:hover:bg-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-primary">Loading products...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
