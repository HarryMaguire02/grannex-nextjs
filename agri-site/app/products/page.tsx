'use client';

import { useState, Suspense, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import productsData from '@/data/productsv2.json';
import ProductCard from '@/app/components/ProductCard';
import MultiSelect from '@/app/components/inputs/MultiSelect';

// Static market options
const markets = [
  { value: 'oils-and-fats', label: 'Oils and fats' },
  { value: 'nutritional-additives', label: 'Nutritional Additives' },
  { value: 'sweeteners', label: 'Sweeteners' },
  { value: 'starches', label: 'Starches' },
  { value: 'millingcrushing', label: 'Milling/Crushing' },
  { value: 'aquaculture', label: 'Aquaculture' },
  { value: 'concentrates', label: 'Concentrates' },
  { value: 'animal-protein', label: 'Animal Protein' },
  { value: 'vitamin', label: 'Vitamin' },
  { value: 'fibers', label: 'Fibers' }
];

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
  image: string;
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const marketParam = searchParams.get('market');

  // Parse market param - can be comma-separated for multiple values
  const initialMarkets = marketParam ? marketParam.split(',') : [];
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(initialMarkets);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(12);

  const isInitialMount = useRef(true);

  // After mount, update products per page based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      const newProductsPerPage = window.innerWidth < 640 ? 6 : 12;
      setProductsPerPage(newProductsPerPage);
    };

    // Defer to avoid synchronous setState warning in React 19
    requestAnimationFrame(updateProductsPerPage);
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    // Add market param if any markets selected
    if (selectedMarkets.length > 0) {
      params.set('market', selectedMarkets.join(','));
    }

    // Build the URL
    const queryString = params.toString();
    const newUrl = queryString ? `/products?${queryString}` : '/products';

    // Update URL without adding to history (so back button doesn't go through every filter change)
    router.replace(newUrl, { scroll: false });
  }, [selectedMarkets, router]);

  // Smooth scroll to top when page changes (skip on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const products = productsData as Product[];

  // Filter products by market and search query
  const filteredProducts = products.filter(product => {
    // Filter by market (handle compound markets like "millingcrushing-aquaculture")
    const matchesMarket = selectedMarkets.length === 0 || selectedMarkets.some(market => product.market.includes(market));

    // Filter by search query (search in name)
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Product must match all filters
    return matchesMarket && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle market selection change
  const handleMarketChange = (values: string[]) => {
    setSelectedMarkets(values);
    setCurrentPage(1);
  };

  // Reset market filter
  const handleMarketClear = () => {
    setSelectedMarkets([]);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          {selectedMarkets.length > 0 ? (
            <>
              <Link href="/products" className="hover:text-green-medium transition-colors">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium">
                {selectedMarkets.length === 1
                  ? markets.find(m => m.value === selectedMarkets[0])?.label
                  : `${selectedMarkets.length} markets`}
              </span>
            </>
          ) : (
            <span className="font-medium">Products</span>
          )}
        </nav>
      </div>

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Our products
        </h1>

        {/* Description */}
        <p className="text-primary font-normal text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          We offer a broad portfolio of products, commodities, and ingredients serving the human food,
          aquaculture, and animal feed industries. Our range includes oilseeds, vegetable oils, and related
          agricultural products sourced from multiple origins to meet diverse market and customer requirements.
        </p>

        {/* Filters and Search Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          {/* Market multi-select */}
          <MultiSelect
            options={markets}
            selected={selectedMarkets}
            onChange={handleMarketChange}
            onClear={handleMarketClear}
            placeholder="Select market"
          />

          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="px-10 py-2.5 border border-primary/20 rounded-lg text-sm font-normal text-primary bg-white focus:outline-none focus:border-green-medium focus:ring-1 focus:ring-green-medium w-full"
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
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
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
          <div className="text-center py-12 sm:py-16">
            <p className="text-primary text-base sm:text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                handleMarketClear();
                setSearchQuery('');
              }}
              className="mt-4 text-sm text-green-medium hover:text-primary underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-3 my-8 pb-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-primary border border-primary/20 hover:bg-primary/5 disabled:hover:bg-white"
            >
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            {/* Page Numbers - Hidden on small screens */}
            <div className="hidden sm:flex gap-2">
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

            {/* Current Page Indicator - Visible only on small screens */}
            <div className="sm:hidden px-4 py-2 text-sm font-medium text-primary">
              Page {currentPage} of {totalPages}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-primary border border-primary/20 hover:bg-primary/5 disabled:hover:bg-white"
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
