'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';

type Product = {
  slug: string;
  name: string;
  group: string;
  groupLabel: string;
  info: string;
  description: string;
  application: string;
  packing: string;
  specification: string[];
  industry: string[];
  isActive: boolean;
  image: string;
};

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const groupParam = searchParams.get('group');

  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  // Use URL parameter if available, otherwise use state
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const PRODUCTS_PER_PAGE = 12;

  // Derive the actual selected group from URL param or state
  const activeGroup = groupParam || selectedGroup;

  const products = productsData as Product[];

  // Get unique industries from all products
  const industries = [
    'All',
    ...Array.from(
      new Set(products.flatMap(p => p.industry))
    ).sort()
  ];

  // Get unique groups from all products using 'group' property
  const groups = [
    'All',
    ...Array.from(
      new Set(products.map(p => p.group))
    ).sort()
  ];

  // Filter products by industry, group, and search query
  const filteredProducts = products.filter(product => {
    if (!product.isActive) return false;

    // Filter by industry
    const matchesIndustry = selectedIndustry === 'All' || product.industry.includes(selectedIndustry);

    // Filter by group - use activeGroup which considers URL param
    const matchesGroup = activeGroup === 'All' || product.group === activeGroup;

    // Filter by search query (search in name)
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Product must match all filters
    return matchesIndustry && matchesGroup && matchesSearch;
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

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          {groupParam ? (
            <>
              <Link href="/products" className="hover:text-green-medium transition-colors">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium">
                {products.find(p => p.group === groupParam)?.groupLabel || groupParam}
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
        <p className="text-primary font-normal text-sm leading-4 text-justify mb-8 w-full lg:w-1/2">
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
              value={activeGroup}
              onChange={(e) => handleFilterChange(setSelectedGroup, e.target.value)}
              disabled={!!groupParam}
              className={`pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary transition-colors ${
                groupParam
                  ? 'bg-green-light/30 ring-2 ring-green-medium cursor-not-allowed opacity-90'
                  : 'bg-white hover:bg-primary/5 cursor-pointer'
              }`}
            >
              {groups.map(group => {
                // Find a product with this group to get the groupLabel for display
                const product = products.find(p => p.group === group);
                const displayName = group === 'All' ? 'Group' : (product?.groupLabel || group);

                return (
                  <option key={group} value={group}>
                    {displayName}
                  </option>
                );
              })}
            </select>
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
              className="pl-10 pr-4 py-2 border border-primary/20 rounded-lg text-sm font-normal text-primary bg-white focus:outline-none focus:border-green-medium focus:ring-1 focus:ring-green-medium w-full md:w-64"
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
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <Link
              key={product.slug}
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
