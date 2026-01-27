'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  pdfSpecification: string;
};

type ProductPageClientProps = {
  product: Product;
};

export default function ProductPageClient({ product }: ProductPageClientProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    companyProfile: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          company: formData.company,
          companyProfile: formData.companyProfile,
          message: formData.message,
          productName: product.name,
          productSlug: product.slug,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        companyProfile: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);

    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[293] aspect-[293/361] rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="293px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
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
                  className="flex-1 px-2 md:px-8 py-3 bg-primary text-secondary text-sm md:text-lg rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Product Specifications
                </button>
                <button
                  onClick={() => scrollToSection('enquiry')}
                  className="flex-1 px-2 md:px-8 py-3 bg-primary text-secondary text-sm md:text-lg rounded-lg font-medium hover:bg-green-medium transition-colors"
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
                        <td className="px-6 py-3 text-sm text-primary font-medium bg-secondary border-r-2 border-secondary border-t-2 border-t-white/30">
                          {description}
                        </td>
                        <td className="px-6 py-3 text-sm text-primary text-center bg-secondary/50 border-t-2 border-t-secondary/70">
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
                <a
                  href={`/pdf/${product.pdfSpecification}`}
                  download
                  className="inline-block px-8 py-3 bg-primary text-secondary rounded-lg font-medium hover:bg-green-medium transition-colors"
                >
                  Product specification
                </a>
              </div>
              {/* Decoration SVG - Right Side */}
              <div className="absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
                <Image
                  src="/decoration2.png"
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
            {/* Left: Promotional Text with Decoration */}
            <div className="relative flex flex-col justify-center">
              <div className="absolute -left-8 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-full h-auto pointer-events-none">
                <Image
                  src="/decoration3.png"
                  alt=""
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  You&apos;re one step closer<br />
                  to achieving <span className="text-green-medium">your goal!</span>
                </h3>
                <p className="text-primary font-normal text-sm leading-6">
                  GREENEX, we help our customers increase sales and lower costs while offering reasonable pricing, volume flexibility, and fast delivery.
                </p>
              </div>
            </div>

            {/* Right: Form with Secondary Background */}
            <div className="bg-secondary/20 border-2 border-secondary/60 rounded-3xl p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium placeholder:text-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+381 23 4567891"
                      required
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium placeholder:text-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@gmail.com"
                      required
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium placeholder:text-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Country*</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Serbia"
                      required
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium placeholder:text-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Company name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Name of the Company"
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium placeholder:text-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Company Profile*</label>
                    <select
                      name="companyProfile"
                      value={formData.companyProfile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium text-primary"
                    >
                      <option value="">Type</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="My message..."
                    className="w-full px-0 py-2 border-b-2 border-primary bg-transparent focus:outline-none focus:border-green-medium resize-none placeholder:text-primary/40"
                  ></textarea>
                </div>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-light/30 border border-green-medium rounded-lg text-primary text-sm">
                    ✓ Your enquiry has been sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-500 rounded-lg text-red-600 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="px-12 py-3 bg-primary text-secondary rounded-lg font-medium hover:bg-green-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
