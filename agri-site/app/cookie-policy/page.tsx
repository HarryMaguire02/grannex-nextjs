import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy - Grannex LTD",
  description: "Grannex Ltd Cookie Policy - Information about how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Cookie Policy</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Cookie Policy
        </h1>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            This website uses cookies to enhance your browsing experience and analyze our traffic.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Strictly Necessary Cookies</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Essential for the website's basic functionality and security.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Analytical Cookies</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              We use tools like Google Analytics to understand user behavior and improve our services, subject to your prior consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Management</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              You may withdraw your consent or manage your cookie preferences at any time via your browser settings or our website's consent banner.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions regarding our Cookie Policy, please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">
                info@grannex.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
