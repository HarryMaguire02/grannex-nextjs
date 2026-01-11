'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';
import NotFound from './not-found';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProductPage({ params }: PageProps) {
  const { slug } = use(params);
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === slug);
  const [isExporting, setIsExporting] = useState(false);

  if (!product) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const exportToPDF = () => {
    try {
      setIsExporting(true);

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(20);
      doc.setTextColor(40, 73, 61); // primary color
      doc.text(product.name, 14, 20);

      // Add subtitle
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Product Specifications', 14, 30);

      // Prepare table data from specification array
      const tableData = product.specification.map((spec) => {
        const [description, value] = spec.split(':');
        return [description, value];
      });

      // Generate table with alternating row colors
      autoTable(doc, {
        startY: 40,
        head: [['Description', 'Value']],
        body: tableData,
        theme: 'striped',
        headStyles: {
          fillColor: [40, 73, 61], // primary color
          textColor: [255, 255, 255], // white text
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245], // light gray
        },
        styles: {
          lineColor: [200, 200, 200],
          lineWidth: 0.1,
        },
      });

      // Save PDF with product name as filename
      const fileName = `${product.name.replace(/\s+/g, '-')}-Specifications.pdf`;
      doc.save(fileName);

      setIsExporting(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsExporting(false);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-green-medium transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                {product.name}
              </h1>

              <p className="text-primary font-normal text-sm leading-6 text-justify mb-8">
                {product.info}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('specifications')}
                  className="flex-1 px-8 py-3 bg-primary text-secondary rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Product Specifications
                </button>
                <button
                  onClick={() => scrollToSection('enquiry')}
                  className="flex-1 px-8 py-3 bg-primary text-secondary rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Make an enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-white pt-8 sm:pt-10 md:pt-12">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white"></div>
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Summary</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8">

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Description */}
            <div className="px-6 md:pl-0 md:pr-8 pb-6 md:py-0 border-b md:border-b-0 md:border-r border-primary/80">
              <h3 className="text-xl font-bold text-primary mb-4">Description</h3>
              <p className="text-primary font-normal text-sm leading-6 text-justify">
                {product.description}
              </p>
            </div>

            {/* Application */}
            <div className="px-6 md:px-8 py-6 md:py-0 border-b md:border-b-0 md:border-r border-primary/80">
              <h3 className="text-xl font-bold text-primary mb-4">Application</h3>
              <ul className="space-y-2">
                {product.application.split(';').map((app, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">›</span>
                    <span className="text-primary font-normal text-sm leading-6">{app.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packing Option */}
            <div className="px-6 md:pl-8 md:pr-0 pt-6 md:py-0">
              <h3 className="text-xl font-bold text-primary mb-4">Packing option</h3>
              <ul className="space-y-2">
                {product.packing.split(';').map((option, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">›</span>
                    <span className="text-primary font-normal text-sm leading-6">{option.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Section */}
      <section id="specifications" className="bg-white pt-8 sm:pt-10 md:pt-12">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white"></div>
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Specification</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left: Specification Table */}
            <div className="overflow-hidden rounded-xl border-2 border-secondary">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="px-6 py-3 text-center text-md font-bold text-primary border-r-2 border-secondary">
                      Description
                    </th>
                    <th className="px-6 py-3 text-center text-md font-bold text-primary">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specification.map((spec, index) => {
                    const [description, value] = spec.split(':');
                    return (
                      <tr key={index}>
                        <td className={`px-6 py-3 text-sm text-primary font-medium bg-secondary border-r-2 border-secondary border-t-2 border-t-white/30`}>
                          {description}
                        </td>
                        <td className={`px-6 py-3 text-sm text-primary text-center bg-secondary/50 border-t-2 border-t-secondary/70`}>
                          {value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Right: Technical Specifications */}
            <div className="relative flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Technical Specifications
              </h3>
              <p className="text-primary font-normal text-sm leading-6 mb-6">
                Full specification ranges are available in the technical datasheet.
              </p>
              <div>
                <button
                  onClick={exportToPDF}
                  disabled={isExporting}
                  className="px-8 py-3 bg-primary text-secondary rounded-lg font-medium hover:bg-green-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isExporting ? 'Generating PDF...' : 'Product specification'}
                </button>
              </div>
              {/* Decoration SVG - Right Side */}
              <div className="absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
                <Image
                  src="/decoration2.svg"
                  alt=""
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="bg-white py-8 sm:py-10 md:py-12">
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
    </div>
  );
}
