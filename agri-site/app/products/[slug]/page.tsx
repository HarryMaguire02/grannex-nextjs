'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';
import NotFound from './not-found';

type Specification = {
  mainAnalysis: string;
  unit: string;
  avg: string;
  sd: string;
  min: string;
  max: string;
  nb: string;
};

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
  specifications: Specification[];
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProductPage({ params }: PageProps) {
  const { slug } = use(params);
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-primary">
            <Link href="/" className="hover:text-green-medium">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-green-medium">Products</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{product.name}</span>
          </nav>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                <span className="font-normal">Potato</span> {product.name.replace('Potato ', '')}
              </h1>

              <p className="text-primary font-normal text-sm leading-6 text-justify mb-8">
                {product.shortDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('specifications')}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Product Specifications
                </button>
                <button
                  onClick={() => scrollToSection('enquiry')}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Make an enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white"></div>
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Summary</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Description</h3>
              <p className="text-primary font-normal text-sm leading-6 text-justify">
                {product.description}
              </p>
            </div>

            {/* Application */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Application</h3>
              <ul className="space-y-2">
                {product.application.map((app, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">›</span>
                    <span className="text-primary font-normal text-sm leading-6">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packing Option */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Packing option</h3>
              <ul className="space-y-2">
                {product.packingOption.map((option, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">›</span>
                    <span className="text-primary font-normal text-sm leading-6">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Section */}
      <section id="specifications" className="bg-white py-12 lg:py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white"></div>
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Specification</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8">

          {/* Specification Table */}
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#D4C5B0]">
                  <th className="px-4 py-3 text-left text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    Main<br />analysis
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    Unit
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    AVG
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    SD
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    MIN
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary border-r border-[#C4B5A0]">
                    MAX
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-primary">
                    NB
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-[#F5EFE7]' : 'bg-[#E8DCC8]'}
                  >
                    <td className="px-4 py-3 text-sm text-primary font-medium border-r border-[#D4C5B0]">
                      {spec.mainAnalysis}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center border-r border-[#D4C5B0]">
                      {spec.unit}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center border-r border-[#D4C5B0]">
                      {spec.avg}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center border-r border-[#D4C5B0]">
                      {spec.sd}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center border-r border-[#D4C5B0]">
                      {spec.min}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center border-r border-[#D4C5B0]">
                      {spec.max}
                    </td>
                    <td className="px-4 py-3 text-sm text-primary text-center">
                      {spec.nb}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Link */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center text-primary hover:text-green-medium font-medium text-sm"
            >
              <span className="mr-2">↓</span>
              Product specification
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="bg-white py-12 lg:py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white"></div>
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Make an enquiry</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Promotional Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                You&apos;re one step closer<br />
                to achieving <span className="text-green-medium">your goal!</span>
              </h3>
              <p className="text-primary font-normal text-sm leading-6">
                GREENEX, we help our customers increase sales and lower costs while offering reasonable pricing, volume flexibility, and fast delivery.
              </p>
            </div>

            {/* Right: Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Name*</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Phone*</label>
                  <input
                    type="tel"
                    placeholder="+381 23 4567891"
                    className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Email*</label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Country*</label>
                  <input
                    type="text"
                    placeholder="Serbia"
                    className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Company name</label>
                  <input
                    type="text"
                    placeholder="Name of the Company"
                    className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Company Profile*</label>
                  <select className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium">
                    <option value="">Type</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="distributor">Distributor</option>
                    <option value="retailer">Retailer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="My message..."
                  className="w-full px-4 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-12 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
